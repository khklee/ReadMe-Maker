// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateReadme = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = (data) => {
    // If there's no 'filename' array property, create one
    if (!data) {
        data = [];
    }
    console.log(`
    =================
    Add a New README
    =================
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your projcect title? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your project title!');
                    return false;
                }
            }
        },
        {
            type: 'input', 
            name: 'description',
            message: 'Provide a short description explaining the what, why, and how of your project. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please provide a description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
        }, 
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use.'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.'
        }, 
        {
            type: 'checkbox',
            name: 'license', 
            message: 'Choose an open source license.',
            choices: ['Apache_2.0', 'GPLv3', 'GPL_v2', 'MIT', 'ISC']
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your Github Username (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your Github Username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        }

    ])
}

// TODO: Create a function to initialize app
function init() {
    questions()
        .then(data => {
            const pageReadme = generateReadme(data)
            fs.writeFile('./README.md', pageReadme, err => {
                if (err) throw err;
                console.log('README complete!')
            })
        })
};

// Function call to initialize app
init();
