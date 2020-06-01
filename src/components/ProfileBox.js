import React from 'react'
import github_logo from "../assets/github.png"
import linkedin_logo from "../assets/linkedin.png"
import twitter_logo from "../assets/twitter.png"

export default ({type}) => {

        if ( type === "stackoverflow") {
            return (<a href="https://stackoverflow.com/users/382920/necronet" target="_blank" rel="noopener noreferrer">
                <img src="https://stackoverflow.com/users/flair/382920.png" width="208" height="58" 
                alt="profile for Necronet at Stack Overflow, Q&amp;A for professional and enthusiast programmers" 
                title="profile for Necronet at Stack Overflow, Q&amp;A for professional and enthusiast programmers"/>
                </a>)
        } else if (type === "github") {
            return (<a target="_blank" 
            rel="noopener noreferrer" 
            href="https://github.com/necronet">
                <img sx={{margin: 8}} alt="Github logo" src={github_logo} width={32}/>
            </a>)
        } else if (type === "linkedin") {
            return (<a target="_blank" 
            rel="noopener noreferrer" 
            href="https://www.linkedin.com/in/ayerdisdeveloper/">
                <img sx={{margin: 8}} alt="Linkedin logo" src={linkedin_logo} width={32}/>
            </a>)
        } else if (type === "twitter") {
            return (<a target="_blank" 
            rel="noopener noreferrer" 
            href="https://twitter.com/necronet">
                <img sx={{margin: 8}} alt="Twitter logo" src={twitter_logo} width={32}/>
            </a>)
        }

        return <></>
}