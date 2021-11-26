import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'

const styles ={
    project: {
        maxHeight: "15%",
        flex: "0 0 40%",
        margin: "5%",
    },
    projectBody: {
        padding: "2em",
        position: "absolute",
        width: "100%",
        height: "100%",
    },
    projectImage: {
        
    }
}

function ProjectCard({ project }) {
    // const image = require();
    // console.log(image);

    const [hover, setHover] = useState(false);
    return (
        <Card style={ styles.project } onMouseEnter={ () => { setHover(true) } } onMouseLeave={ () => { setHover(false) } }>
            <Card.Img 
                src={ `${process.env.PUBLIC_URL}/assets/images/${project["image-name"]}` } 
                alt={ project["image-alt"] } 
                style={ { opacity: hover? "10%" : "100%" } } 
            />
            <Card.Body style={ {...styles.projectBody, display: hover? "block" : "none" } } >
                <Card.Title>{ project.title }</Card.Title>
                <Card.Text>{ project["long-description"] }</Card.Text>
                <div className="d-flex justify-content-around">
                    <Button href={project["github-link"]}>GitHub</Button>
                    <Button href={project["deployed-link"]}>Deployed Site</Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default ProjectCard