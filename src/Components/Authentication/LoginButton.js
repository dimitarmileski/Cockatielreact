import React from 'react'
import {useAuth0} from '@auth0/auth0-react'
import {Button} from 'react-bootstrap'

const LoginButton = () =>{

    const { loginWithRedirect, isAuthenticated } = useAuth0()

    return( !isAuthenticated && (
        <>
         <Button class="btn btn-warning" onClick={() => loginWithRedirect() }>Login</Button>

        </>
    )
    )
}

export default LoginButton