import React from 'react'
import { Card, Button } from 'react-bootstrap'

function ProjectCard({ project }) {
    return (
        <Card>
            <Card.Img src={`../../assets/${project["img-name"]}`} alt={project["image-alt"]} />
            <Card.Body>
                <Card.Title>{ project.title }</Card.Title>
                <Card.Text>{ project.description }</Card.Text>
            </Card.Body>
            <Button href={project["github-link"]}>GitHub</Button>
            <Button href={project["deployed-link"]}>Deployed Site</Button>
        </Card>
    )
}