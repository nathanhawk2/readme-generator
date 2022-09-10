// seperate js page including all the questions that is brought into index.js 
module.exports = [
    {
        type: 'input',
        message: 'Enter the title of your project',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Enter the description',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Enter installation instructions',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Enter usage information',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Enter test instructions',
        name: 'test'
    },
    {
        type: 'input',
        message: 'Enter your license title',
        name: 'license'
    },
    {
        type: 'rawlist',
        message: 'Choose a license color',
        name: 'licenseColor',
        choices: [
            'red',
            'green',
            'blue',
            'gray'
        ]
    },
    {
        type: 'input',
        message: 'Add contributors',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'Provide your GitHub URL?',
        name: 'gitHub',
        default: 'https://github.com'
    },
    {
        type: 'input',
        message: 'Provide your E-Mail?',
        name: 'email',
    }
]