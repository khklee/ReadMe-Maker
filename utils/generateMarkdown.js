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
    This application is covered under ${license} and please <a href="https://choosealicense.com/licenses/">click here</a> to find out more details.
  `;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
    <title>${data.title}</title>
    </head>
    <body>
      <h1># Project Title: ${data.title}</h1> 
        <p>${renderLicenseBadge(data.license)}</p>
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
      <h2 id="installation">## Installation</h2>
          <p>${data.installation}</p>
      <h2 id="usage">## Usage</h2>
          <p>${data.usage}</p>
      <h2 id="contribution">## Contribution</h2>
          <p>${data.contribution}</p>
      <h2 id="test">## Test</h2>
          <p>${data.test}</p>
      <h2 id="license">## License</h2>
          <p>${renderLicenseLink(data.license)}</p>
      <h2 id="questions">## Questions</h2>
          <p><a href="https://github.com/${data.github}">Github</a></p>
          <p>If you have additional questions, please <a href="${data.email}">"Reach Me".</a><p>            
    </body>
    </html>
  `;
}

module.exports = generateMarkdown;
