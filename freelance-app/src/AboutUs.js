import React from 'react'
import Profile from './Profile.js'
import './Background.css'

function AboutUs() {
    return (
        <div>
        <h1 className="aboutUs">About Us</h1>
        <div className="SignIn_Register">
            <Profile
            id="Arpit Karnatak"
            email="arpitkarnatak47@gmail.com"
            about="Hi, I'm Arpit, a third year Computer Science student from SRM Institute of Science and Technology. I like learning about new technologies. I have proven expertise in the domains of Blockchain and Data Science. I have a passion for Algorithms and Web Development too. Find me on GitHub and LinkedIn from the links below."
            LinkedIn = "https://www.linkedin.com/in/arpitkarnatak/"
            GitHub = "https://github.com/arpitkarnatak"
            />
            
            <Profile
            id = "Dhruv Sharma"
            email="dhruv22sharma@gmail.com"
            about="Hi, I'm Dhruv, a third year Computer Science student from SRM Institute of Science and Technology. I'm a MEAN stack developer who specializes in front-end frameworks like React and Vue. Check out my GitHub and LinkedIn below."
            LinkedIn = "https://www.linkedin.com/in/dhruv-sharma-527a571b0/"
            GitHub = "https://github.com/dhruv22sharma/"/>
        </div>
        </div>
    )
}

export default AboutUs
