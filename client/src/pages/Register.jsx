import React, {useState} from 'react'
import {Button, Form} from 'semantic-ui-react'
// pretty ssure it can be wrrite just as apollo-client
import {useMutation} from '@apollo/react-hooks';
import gql from 'graphql-tag';

function Register() {

    const [errors, setErrors] = useState({});

    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const onChange = (event) => {
        // need to spread it so it just doesnt overwrite it
        setValues({...values, [event.target.name]: event.target.value})
    }

    const [addUser, { loading }] = useMutation(REGISTER_USER, {
        // this will trigger when it is succesful
        update(proxy, result) {
            console.log(result);
        },
        onError(err) {
            // this will tasrget the errors I already establish in my server side code with GRAPHQL
            console.log(err.graphQLErrors[0].extensions.errors)
            setErrors(err.graphQLErrors[0].extensions.errors)
        },
        variables: values
    })

    const onSubmit = (event) => {
        // we already have a server sdie validation so this will handle alot
        event.preventDefault();
        addUser(); 
    }

    return (
        <div className="form-container">
            <Form onSubmit={onSubmit} noValidate className={loading ? 'loading' : ''}>
                <h1>Register</h1>
                <Form.Input
                    label="Username"
                    placeholder="Username"
                    name="username"
                    value={values.username}
                    onChange={onChange}
                    type="text"
                    error={errors.username ? true : false}
                />
                <Form.Input
                    label="Email"
                    placeholder="Email"
                    name="email"
                    value={values.email}
                    onChange={onChange}
                    type="email"
                    error={errors.email ? true : false}
                />
                <Form.Input
                    label="Password"
                    placeholder="Password"
                    name="password"
                    value={values.password}
                    onChange={onChange}
                    type="password"
                    error={errors.password ? true : false}
                />
                <Form.Input
                    label="Confirm Password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={values.confirmPassword}
                    onChange={onChange}
                    type="password"
                    error={errors.confirmPassword ? true : false}
                />
                <Button type="submit primary">
                    Register
                </Button>
            </Form>
            {Object.keys(errors).length > 0 && (
                <div className="ui error message">
                    <ul className="list">
                        {Object.values(errors).map((value) => (
                            <li key={value}>{value}</li>
                        ))}
                    </ul>
                </div>
            )}
            
        </div>
    )
}

const REGISTER_USER = gql`
    mutation register(
        $username: String!
        $email: String!
        $password: String!
        $confirmPassword: String!
    ) {
        register(
            registerInput: {
                username: $username
                email: $email
                password: $password
                confirmPassword: $confirmPassword
            }
        ) {
            id
            email
            username
            createdAt
            token
        }
    }

`

export default Register;