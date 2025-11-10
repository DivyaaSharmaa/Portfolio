import React from "react";

const projects = [
  { title: "Leaderboard App", description: "A React app that ranks players based on score." },
  { title: "Weather App", description: "Fetches live weather using OpenWeather API." },
  { title: "To-Do List", description: "Classic CRUD app built with React and hooks." },
    { title: "DevBook", description: "Built a networking app with CRUD, REST APIs, and MongoDB." },
     { title: "DevBhoomi", description: "Built tourism app with Google Maps API for navigation and search." },
      { title: "Travelling-website-landing-page", description: "Responsive landing page design for a travel website, mobile-friendly." },
            { title: "Joke Generator", description: "Fun React app that generates random jokes with each click." },
            { title: "News", description: "A short, modern news app showing brief headlines and summaries." },



];

const Project = () => {
  return (
    <div id="projects" className="section">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
