import React from 'react';

var portrait = `${process.env.PUBLIC_URL}/assets/images/AdamKruschwitz.jpg`;

function AboutMe() {
    return (
        <div>
            <h2 className="display-2 p-4 d-block">About Me</h2>
            <div className="d-flex align-items-center flex-wrap pb-4">
                <img className="rounded-circle col-12 col-lg-4 px-lg-4" src={ portrait } alt="Adam Kruschwitz looking happy in a sunny place." />
                <div className="flex-fill col-12 col-lg-8">
                    <p id="work-statement" className="display-5">I am a web developer working out of the Bay Area, California, looking for remote work.</p>
                    <p className="fs-4">I grew up in Rochester, NY and attended Ithaca College, graduating with a B.A in Computer Science. I worked at ZL Technologies, a records management SaaS company, for two years after graduating before deciding to expand my knowledge once again at Berkley's Full Stack Web Development Bootcamp. </p>
                    <p className="fs-4">In my free time, I enjoy playing Magic the Gathering&trade;, designing and crocheting plush figures, and volunteering through mutual aid organizations in my community. I hope to bring the spirit of creativity and camaraderie I exercise through my hobbies into my workplace.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe