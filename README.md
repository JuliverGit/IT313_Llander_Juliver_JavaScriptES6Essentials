# IT313 JavaScript ES6+ Essentials

## Problem

The program is an Enrollment Eligibility Checker for IT313 students. It calculates the average of each enrollee using their prelim, midterm, and final grades.

Students with an average of 75 or higher are considered PASSING. Students with an average below 75 are considered PROBATION.

## Approach

The program uses JavaScript ES6+ features such as:

- ES module import and export
- const and let
- Arrow functions
- Template literals
- Destructuring
- map()
- filter()
- reduce()
- Promise
- async/await
- try/catch

The getEnrollees() function uses a Promise and setTimeout to simulate getting enrollee records from a registrar API.

The main() function uses async/await to get the records and try/catch to handle possible errors.

## How to Run

Make sure Node.js is installed.

Open the project folder in the terminal and run:

node main.js

The program will display the enrollment eligibility report in the terminal.