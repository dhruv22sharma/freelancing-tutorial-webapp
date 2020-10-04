import React from 'react'
import './SignIn.css'
import Avatar from '@material-ui/core/Avatar'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Button from '@material-ui/core/Button'
function Profile({id,email,about,LinkedIn,GitHub,img}) {
    return (
        <div className="SignIn">
            <Avatar>{img}</Avatar>      
            <h1 className = "Names"><div>{id}</div></h1>
            <h3>{email}</h3>
            <p>{about}</p>
            <div>
                <Button variant="link" href={LinkedIn} startIcon={<LinkedInIcon/>}/>
                <Button variant="link" href={GitHub} startIcon={<GitHubIcon/>}/>
            
            </div>
            
            
        </div>
    )
}

export default Profile
