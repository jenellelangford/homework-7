const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// This file will generate the final HTML. You don't need to touch this at all!
const render = require("./lib/htmlRenderer");

// This will be an array of all team member objects created
const teamMembers = [];

// This will be an array of the id values created for each object so there are no duplicates
const idArray = [];

// start()
// Do you want to add a team member? If so, choose a type:
   // Manager, Engineer, Intern, I'm Done
   function start() {
    inquirer.prompt([
      {
        type: "list",
        message: "Choose an employee type:",
        name: "type",
        choices: [
          "Manager",
          "Engineer",
          "Intern",
          "Finished"
        ]
      }
    ]).then( response => {
      if( response.type === "manager" ){
        createEmployee("manager")
      }
    })
  }
  // createManager()
     // ask all the manager questions, when done, go back to start()
  function createEmployee(employeeType){
    inquirer.prompt([
      {
        type: "input",
        message: "Enter name:",
        name: "name"
      }
    ]).then( genericResponses => {
      if( employeeType === "manager" ){
        createManager(genericResponses)
      }
    });
  }
  function createManager(genericData){
    inquirer.prompt([
      {
        type: "input",
        message: "Enter name:",
        name: "name"
      }
    ]).then( response => {
      // process all the answers
      const managerObj = new Manager(genericData.name, genericData.email, response.officeNumber  )
      teamMembers.push(managerObj)
      start();
    })
  }
  // STUDENT: This function will call the render function required near the top (line 12), 
  // and pass INTO it the teamMembers area; from there, write the HTML returned back to a file 
  // in a directory called output.
  function renderHtmlPage(){
    const html = render(teamMembers)
    fs.writeFile("output/index.htnl", html, err => {
    })
  }


// STUDENT: This function generates all the questions for creating the manager. You need to add more to this.
function createManager(){
  console.log("Please build your team");
  inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is your manager's name?",
      // Note how the validate function works
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      }
    },
  // STUDENT: Add other questions here!
    {
      type: "input",
      name: "managerId",
      message: "What is your manager's ID?",
      // Note how the validate function works
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      }
    },
    {
      type: "input",
      name: "managerEmail",
      message: "What is your manager's email?",
      // Note how the validate function works
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      }
    },
    {
      type: "input",
      name: "managerNumber",
      message: "What is your manager's office number?",
      // Note how the validate function works
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      }
    }
    ]).then(answers => {
      // STUDENT: Process the response by instatiating a new object in the Manager class
      const manager = new Manager {

      }

      // Now call the next question set
      createTeam();
    });
}

// This function starts team creation.
function createTeam() {
  inquirer.prompt([
    // STUDENT: Ask which type of team member should be created with a list of choices

  ]).then(userChoice => {
    // STUDENT: Based on which choice they make, call the correct function to ask more questions.
    // If no choice is made, then go to the rendering function.


  });
}

// This function starts team creation.
function createEngineer() {
  inquirer.prompt([
    // STUDENT:  Engineer questions
    {
      type: "input",
      name: "engineerName",
      message: "What is your engineer's name?",
      // Note how the validate function works
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      }
    },
    {
      type: "input",
      name: "engineerId",
      message: "What is your engineer's ID?",
      // Note how the validate function works
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      }
    },
    {
      type: "input",
      name: "engineerEmail",
      message: "What is your engineer's email?",
      // Note how the validate function works
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      }
    },
    {
      type: "input",
      name: "engineerUsername",
      message: "What is your engineer's username?",
      // Note how the validate function works
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      }
    },
  ]).then(userChoice => {
    // STUDENT: Make sure the id supplied is unique, then take the data supplied and 
    // instantiate the Engineer constructor.
    const engineer = new Engineer {

    }
    
    
    // STUDENT: When finished:
       // Add the new object to the team member array
       // Pass control back to the createTeam() function

  });
}

// STUDENT: Now create a function for creating an Intern using the code above as an example
function createIntern() {
  inquirer.prompt([
    // STUDENT:  Intern questions
    {
      type: "input",
      name: "internName",
      message: "What is your intern's name?",
      // Note how the validate function works
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      }
    },
    {
      type: "input",
      name: "internEmail",
      message: "What is your intern's email?",
      // Note how the validate function works
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      }
    },
    {
      type: "input",
      name: "internId",
      message: "What is your intern's ID?",
      // Note how the validate function works
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      }
    },
    {
      type: "input",
      name: "internSchool",
      message: "What school does your intern attend?",
      // Note how the validate function works
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      }
    },

// STUDENT: This function will call the render function required near the top (line 12), 
// and pass INTO it the teamMembers area; from there, write the HTML returned back to a file 
// in a directory called output.
function renderHtmlPage(){

}

// This is our starter function.
// Note that we use separate functions for different questions in inquirer to 
// help keep code organized.
function startMenu() {

  // Here we start things off by calling the createManager function
  createManager()

}


// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```


startMenu();