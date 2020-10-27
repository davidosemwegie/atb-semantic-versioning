# ATB Semamtic Versioning
	
A semantic version number or semver is a version number used to label different versions of software to provide developers with information on the impact of upgrading to a new version.

---

## Goal
The goal of this was to create a function called determinePrecedence that takes two valid semantic versions and returns a boolean. The boolean should be true (1) if the first semver provided to the function has a higher precedence than the second semver provided, according to the rules of precedence. 

**The code for the determinePrecedence function is located at 'src/determinePrecedence'**

### Responses
        1 - true (first number > second number)
        0 - false (first number < second number)
        -1 - same numbers

## Requirements

For development, you will only need Node.js and a node global package, Yarn or NPM, installed in your environment.
### Node
- #### Node installation on Windows

 Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

You can install nodejs and npm easily with apt install, just run the following commands.

        $ sudo apt install nodejs
        $ sudo apt install npm

- #### Other Operating Systems
 You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

        $ node --version
        v8.11.3

        $ npm --version
        6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

        $ npm install npm -g

---

## Install

        $ git clone https://github.com/davidosemwegie/atb-semantic-versioning
        $ cd atb-semantic-versioning
        $ npm install


## Running the project

        $ npm start

The program is interactive, so it will ask you the following questions and print out the appropriate response based on the user's input: 

        $ ? What what is the first semantic number you want to compare ? 1.1.1
        $ ? What what is the second semantic number you want to compare ? 2.2.2
        $ Response Code:  0
        $ 2.2.2 takes precedent over 1.1.1

## Running Test - 24 different test cases

        $ npm test