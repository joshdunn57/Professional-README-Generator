const inquirer = require('inquirer');
const fs = require('fs');


inquirer.prompt([
    {
        type: 'input',
        message: 'Project name: ',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Description of your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use. Include screenshots as needed.',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Choose your license for your project.',
        name: 'license',
        choices: [
            { value: 'Apache' }, 
            { value: 'BSD3' }, 
            { value: 'LGPL' }, 
            { value: 'MIT' }, 
            { value: 'MPL' }, 
            { value: 'None' }, 
        ]
    },
    {
        type: 'input',
        message: 'Explain how users can contribute to your project (Optional).',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Provide tests for project, and explain how to test (Optional).',
        name: 'test',
    },

    {
        type: "input",
        message: "Enter your GitHub username: ",
        name: "username",
    },
    {
        type: "input",
        message: "Enter your email: ",
        name: "email",
    }

])
    .then((data) => {

        const filename = data.title.replace(' ', "").toLowerCase()
        fs.writeFile(`${filename}.md`, generateMarkdown(data), (err) =>
            err ? console.error(err) : console.log("Thanks! Your Professional Readme is generated"))
    })


function init() { }


init();