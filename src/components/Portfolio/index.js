import React from 'react'
import ProjectCard from '../ProjectCard'
import { Container } from 'react-bootstrap'

// Importing project images
// import gallery from '../../assets/images/3DGalleryScreenshot.PNG'
// import quiz from '../../assets/images/CodingQuizScreenshot.PNG'
// import weather from '../../assets/images/WeatherDashboardScreenshot.PNG'
 

const projects = [
    {
        "title": "3D Gallery",
        "gif-name": "3DGallery.gif",
        "gif-alt": "A demo of a 3D Art Gallery application.",
        "image-name": "3DGalleryScreenshot.PNG",
        "image-alt": "A screenshot of a painting rendered in 3D",
        "short-description": "A 3D Art Gallery pulling from the Rijks museum. Rendered using Three.js, generating shader maps at runtime.",
        "long-description": "A 3D Gallery viewer for the Rijks Museum of Art. Allows users to search for and discover new paintings to view rendered in 3D. This renderer runs fully on the client side and shader textures are generated for each image at runtime using the image manipulation library JIMP. Created by Adam Kruschwitz, Alex Gibson, and Henry Kam",
        "technologies": "ThreeJS, Bootstrap, jQuery",
        "deployed-link": "https://argibson02.github.io/3d-gallery-walk/",
        "github-link": "https://github.com/argibson02/3d-gallery-walk",
        "featured": true,
        "text-color": "text-light",
        "key": 0,
        // "image": gallery
    },
    {
        "title": "JavaScript Quiz",
        "gif-name": "CodingQuiz.gif",
        "gif-alt": "A demo of a code quiz application.",
        "image-name": "CodingQuizScreenshot.PNG",
        "image-alt": "A screenshot of a quiz website.",
        "short-description": "A code quiz built with jQuery and bootstrap. Allows users to save their high score and review questions they got wrong.",
        "long-description": "A javascript quiz built with jQuery and custom CSS. Tests users on their knowledge of JavaScript, tracks their score, and allows users to look back at questions they missed for review. Created as an assignment for the UC Berkley full stack development bootcamp.",
        "technologies": "jQuery",
        "deployed-link": "https://adamkruschwitz.github.io/code-quiz/",
        "github-link": "https://github.com/AdamKruschwitz/code-quiz",
        "featured": true,
        "text-color": "text-dark",
        "key": 1
    },
    {
        "title": "Weather Dashboard",
        "gif-name": "WeatherDashboard.gif",
        "gif-alt": "A weather dashboard with a 5 day forecast",
        "image-name": "WeatherDashboardScreenshot.PNG",
        "image-alt": "A sleek weather display.",
        "short-description": "A weather dashboard application built with Bootstrap and leveraging the OpenWeather API. Allows users to search for a 5 day forecast based on city.",
        "long-description": "A weather dashboard meant for planning travel destinations. Users can search for the weather by city, and receive the current weather and a 5 day forecast. Built using JQuery and Bootstrap, leveraging the OpenWeather OneCall and Geocoding API's. This was created as an assignment for the UC Berkley full stack web development bootcamp.",
        "technologies": "jQuery, Bootstrap",
        "deployed-link": "https://adamkruschwitz.github.io/weather-dashboard/",
        "github-link": "https://github.com/AdamKruschwitz/weather-dashboard",
        "featured": true,
        "text-color": "text-dark",
        "key": 2
    },
    {
        "title": "Animates",
        "gif-name": "Animates.gif",
        "gif-alt": "A smiley face is drawn in a flipbook animating app.",
        "image-name": "AnimatesScreenshot.png",
        "image-alt": "A drawing application.",
        "short-description": "An animation drawing application using MVC architecture.",
        "long-description": "An animation drawing website where you can create small flipbooks and share them with the world. This project was created along with Alec Mackenzie and Matt Weichel as a midterm project for the UC Berkley full stack development code bootcamp.",
        "technologies": "Express, Sequelize, Handlebars, Two.js",
        "deployed-link": "https://peaceful-cliffs-69062.herokuapp.com/",
        "github-link": "https://github.com/amackenzie26/Animates",
        "featured": false,
        "text-color": "text-dark",
        "key": 3
    }
]

function Portfolio() {
    const projectsList = projects.map((project) => {
        return <ProjectCard key={project.key} project={project} />
    });

    return (
        <Container className="relaxed divided list">
            { projectsList }
        </Container>
    )
}

export default Portfolio