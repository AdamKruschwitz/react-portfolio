import React from 'react'
import { Card, Button } from 'react-bootstrap'

function ProjectCard({ project }) {
    // const image = require();
    // console.log(image);
    return (
        <Card>
            <Card.Img src={ `${process.env.PUBLIC_URL}/assets/images/${project["image-name"]}` } alt={project["image-alt"]} />
            <Card.Body>
                <Card.Title>{ project.title }</Card.Title>
                <Card.Text>{ project["long-description"] }</Card.Text>
            </Card.Body>
            <Button href={project["github-link"]}>GitHub</Button>
            <Button href={project["deployed-link"]}>Deployed Site</Button>
        </Card>
    )
}

export default ProjectCard