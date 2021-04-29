import React from 'react'
import {useAuth0} from '@auth0/auth0-react'
import {Card} from 'react-bootstrap'


const UserProfile = () => {

    const {user} = useAuth0()

    return (
        <>
            <div>
                {/*{JSON.stringify(user, null, 2)} */}
                <Card>
                    <Card.Body>
                        <Card.Text>
                            <div className="row">
                                <div>
                                    <img className="rounded-circle" alt="500x500"
                                         src={user ? user.picture : null}
                                         data-holder-rendered="true"/>
                                </div>
                                <div className="col">
                                    <Card.Title> {user ? user.name : null} </Card.Title>
                                    <hr/>
                                    <div> {user ? user.given_name : null} </div>
                                    <div> {user ? user.family_name : null} </div>
                                    <div> {user ? user.email : null} </div>
                                </div>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>

    )

}

export default UserProfile