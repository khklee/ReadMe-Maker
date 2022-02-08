module.exports = templateData => {
    // const contents = {
    //     description: templateData.description,
    //     installation: templateData.installation,
    //     usage: templateData.usage,
    //     contribution: templateData.contribution,
    //     test: templateData.test,
    //     license: templateData.license
    // }
    
    // const questions = {
    //     github: templateData.github,
    //     email: templateData.email
    // }
    // const { title, ...contents, github, email } = templateData;

    console.log(templateData);
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>${templateData.title}</title>
    </head>
  
    <body>
        <h1># ${templateData.title}</h1>
        <h2>## Description</h2>
            <p>${templateData.description}</p>
        <h2>## Table of Contents</h2>
            <ul>
                <li><a href="#installation">- Installation</a></li>
                <li><a href="#usage">- Usage</a></li>
                <li><a href="#contribution">- Contribution</a></li>
                <li><a href="#test">- Test</a></li>
                <li><a href="#license">- License</a></li>
                <li><a href="#questions">- Questions</a></li>
            </ul>
        <h2 id="#installation">## Installation</h2>
            <p>${templateData.installation}</p>
        <h2 id="#usage">## Usage</h2>
            <p>${templateData.usage}</p>
        <h2 id="#contribution">## Contribution</h2>
            <p>${templateData.contribution}</p>
        <h2 id="#test">## Test</h2>
            <p>${templateData.test}</p>
        <h2 id="#license">## License</h2>
            <p>${templateData.license}</p>
        <h2 id="#questions">## Questions</h2>
            <p><a href="https://github.com/${templateData.github}">Github</a></p>
            <p>If you have additional questions, please <a href="${templateData.email}">"Reach Me".</a><p>











    </body>
    </html>
    `;
  };