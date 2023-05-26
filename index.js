const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt(
    [
        {
            type: 'input',
            message: "Whats the title for your project?",
            name: 'title',
            validate: (value)=>{ if (value){return true} else {return 'Input a title name to proceed.'}}
        },
        {
            type: 'input',
            message: "Project description:",
            name: 'description',
            validate: (value)=>{ if (value){return true} else {return 'Input your project description to proceed.'}}
        },
        {
            type: 'input',
            message: "Input a table of contents list.",
            name: 'tOc',
            validate: (value)=>{ if (value){return true} else {return 'Input a table of contents list to proceed.'}}
        },
        {
            type: 'input',
            message: "Describe the installation process of this project?",
            name: 'installation',
            validate: (value)=>{ if (value){return true} else {return 'Input your installation process to proceed.'}}
        },
        {
            type: 'input',
            message: "What is this project's usage?",
            name: 'usage',
            validate: (value)=>{if (value){return true} else {return 'Input project usage to proceed.'}}
        },
        {
            type: 'input',
            message: "Which license would you like from the list, if any?",
            name: 'license',
            choices: ['The MIT License', 'The GPL License', 'Apache License', 'GNU License', 'N/A'],
            validate: (value)=>{if (value){return true} else {return 'Input a license name or enter "no" to proceed.'}}
        },
        {
            type: 'input',
            message: "Who are the contributors for this project?",
            name: 'contribute',
            validate: (value)=>{if (value){return true} else {return 'Enter contributor name/names to proceed. '}}
        },
        {
            type: 'input',
            message: "What tests did your project run?",
            name: 'test',
            validate: (value)=>{if (value){return true} else {return 'Input a test description to proceed.'}}
        },
        {
            type: 'input',
            message: "What questions do you have about your project?",
            name: 'questions',
            validate: (value)=>{if (value){return true} else {return 'Enter a question/questions to proceed.'}}
        },
        {
            type: 'input',
            message: "Enter your Github username:",
            name: 'git',
            validate: (value)=>{if (value){return true} else {return 'Input your GitHub username to proceed.'}}
        },
        {
            type: 'input',
            message: "Enter your E-mail:",
            name: 'email',
            validate: (value)=>{if (value){return true} else {return 'Enter your Email to continue to generate your professional README.'}}
        }
    ]
).then(({
    title,
    description,
    tOc,
    installation,
    usage,
    license,
    contribute,
    test,
    questions,
    git,
    email
})=>{
    const template = `# ${title}
    
    * [Description](#description)
    * [Table of Contents](#tOc)
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contribution](contribution)
    * [Test](test)
    * [Questions](questions)
    ## Description
    ${description}
    ## Table of Contents
    ${tOc}
    ## Installation
    ${installation}
    ## Usage
    ${usage}
    ## License
    ${license}
    ## Contribution
    ${contribute}
    ## Test
    ${test}
    ## Questions
    ${questions}

    # Contact
    * GitHub :${git}
    * Email :${email}`;
    
    writeToFile(title, template);  
});

function writeToFile(fileName, data) {
    fs.writeFile(`./${fileName.toUpperCase().split(' ').join('')}.md`,data,(err)=>{
        if(err){
            console.log(err)
        }
        console.log('Your README has been created!');
    })
}

function init() {}

init();