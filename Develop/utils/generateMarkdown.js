
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
    ![badge](https://img.shields.io/github/languages/top/${data.github}/${data.repo})
  <br> 
  ![badge](https://img.shields.io/github/languages/count/${data.github}/${data.repo})
  <br>
  ![badge](https://img.shields.io/github/issues/${data.github}/${data.repo})
  <br>
  ![badge](https://img.shields.io/github/issues-closed/${data.github}/${data.repo})
  <br>
  ![badge](https://img.shields.io/github/last-commit/${data.github}/${data.repo})
  <br>
  ![badge](https://img.shields.io/badge/license-${data.license}-important)
  
  ## Description 
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 
  ${data.install}
  ## Usage 
  ${data.usage}
  ## License 
  ![badge](https://img.shields.io/badge/license-${data.license}-important)
  <br>
  Permission to use this application is granted under the ${data.license} license. <https://opensource.org/licenses/${data.license}>
  ## Contributing 
  ${data.contributors}
  ## Tests
  ${data.test}
  ## Questions
  If you have any questions about this projects, please contact me directly at ${data.email}. You can view more of my projects at https://github.com/${data.github}.
`;
}

module.exports = generateMarkdown;
