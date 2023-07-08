// Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license) {
    //after study, shields.io uses "_" for spaces and "--" for "-" in its params.
    return `![License](https://img.shields.io/badge/License-${license.replace(/ /g, "_").replace(/-/g, "--")}-blue)`;
  }
  // If there is no license, return an empty string
  return '';
}

//map out spdxId with the license names so that the links uses the right params.
const licenseLookup = {
  'Apache License, Version 2.0': 'Apache-2.0',
  'Common Development and Distribution License 1.0': 'CDDL-1.0',
  'Eclipse Public License version 2.0': 'EPL-2.0',
  'GNU General Public License version 2': 'GPL-2.0',
  'GNU General Public License version 3': 'GPL-3.0-only',
  'GNU Lesser General Public License version 2.1': 'LGPL-2.1',
  'GNU Lesser General Public License version 3': 'LGPL-3.0-only',
  'GNU Library General Public License version 2': 'LGPL-2.0-only',
  'Mozilla Public License 2.0': 'MPL-2.0',
  'The 2-Clause BSD License': 'BSD-2-Clause',
  'The 3-Clause BSD License': 'BSD-3-Clause',
  'The MIT License': 'MIT'
};

// Create a function that returns the license link
function renderLicenseLink(license) {
  const spdxId = licenseLookup[license];
  if (spdxId) {
    //After study, OpenSource.org uses SPDX ID in its licenses param but takes "-" instead of "." and does not use "-only" if there's one.
    return `https://opensource.org/licenses/${spdxId.replace(/\./g, "-").replace("-only", "")}`;
  }
  // If there is no license, return an empty string
  return '';
}

// Create a function that returns the license section of README
function renderLicenseSection(license) {
  if (license) {
    return `## License

* This App is licensed under ${renderLicenseBadge(license)}.

* For more information, please visit [${license}](${renderLicenseLink(license)}) on [OpenSource Licenses](https://opensource.org/licenses/).`;
  }
  // If there is no license, return an empty string
  return '';
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

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

${data.installation}

## Usage 

${data.usage}


## Contributing

${data.contributing}

## Tests

${data.tests}

${renderLicenseSection(data.license)}

## Questions

May you have any questions, please contact:

* Email:  ${data.email}
* GitHub: [@${data.username}](https://github.com/${data.username}/)

---

© 2023 Kai Chen. All Rights Reserved.`;
}

module.exports = generateMarkdown;
