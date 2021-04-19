import React from 'react'
import {useAuth0} from '@auth0/auth0-react'

const UserProfile = () =>{

    const {user} = useAuth0()

    return (
        <>
            <div>
                {JSON.stringfy(user, null ,2)}
            </div>
        </>

    )

}

export default UserProfile