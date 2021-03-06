const inquirer = require('inquirer')
const fs = require('fs')

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',

        },
        {
            type: 'input',
            message: 'Please describe your project.',
            name: 'description'
        },
        {
            type: 'input',
            message: 'How do you install and run your project?',
            name: 'installationInstructions'
        },
        {
            type: 'input',
            message: 'How do you use your project?',
            name: 'usageInstructions'
        },
        {
            type: 'input',
            message: 'What is the file path to your photo of the project?',
            name: 'photoLocation'
        },
        {
            type: 'input',
            message: 'Please include any contributors for your project(if multple people contributed please separate their names with a ",").',
            name: 'contributionGuidelines'
        },
    ]).then((data) => {

        const filename = `README-example.md`
        const readmeString = `
# ${data.title}

## Project Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [How to Use](#howtouse)
- [Contribution](#contribution)

## Installation
${data.installationInstructions}
        
## How To Use
${data.usageInstructions}
![Alt Text](${data.photoLocation})
        
## Contribution
${data.contributionGuidelines}`
        fs.writeFile(filename, readmeString, (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });
