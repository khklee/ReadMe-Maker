// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license  || license.length == 0) {
    return '';
  } 

  return `
  <img src="https://img.shields.io/badge/License-${license}-blue.svg">
  `;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  return `
    <p>This application is covered under ${license} and please <a href="https://choosealicense.com/licenses/">click here</a> to find out more details.</p>
  `;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>${data.title}</title> 
    </head>

    <body>
        <h1># ${data.title} ${renderLicenseBadge(data.license)}</h1>
        <h2>## Description</h2>
            <p>${data.description}</p>
        <h2>## Table of Contents</h2>
            <ul>
                <li><a href="#installation">Installation</a></li>
                <li><a href="#usage">Usage</a></li>
                <li><a href="#contribution">Contribution</a></li>
                <li><a href="#test">Test</a></li>
                <li><a href="#license">License</a></li>
                <li><a href="#questions">Questions</a></li>
            </ul>
        <h2 id="#installation">## Installation</h2>
            <p>${data.installation}</p>
        <h2 id="#usage">## Usage</h2>
            <p>${data.usage}</p>
        <h2 id="#contribution">## Contribution</h2>
            <p>${data.contribution}</p>
        <h2 id="#test">## Test</h2>
            <p>${data.test}</p>
        <h2 id="#license">## License</h2>
            ${renderLicenseLink(data.license)}
        <h2 id="#questions">## Questions</h2>
            <p><a href="https://github.com/${data.github}">Github</a></p>
            <p>If you have additional questions, please <a href="${data.email}">"Reach Me".</a><p>            
    </body>
    </html>
  `;
}

module.exports = generateMarkdown;
