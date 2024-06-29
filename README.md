# Multi-Base Numerical Converter

This project is a simple web-based application that allows users to convert numbers between different numerical bases ranging from 2 to 16. It includes a user interface to input the number and the bases, and it provides the converted result. The project is implemented using HTML, CSS, and JavaScript.
## Screenshot
![image](https://github.com/gitbiruk2010/Multi-Base-Numerical-Converter/assets/103274295/bb4fe9fa-db9f-40b5-baee-ee90610254cf)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Files](#files)
- [Testing](#testing)
- [License](#license)

## Clone
git clone https://github.com/gitbiruk2010/Multi-Base-Numerical-Converter
## Installation

To run this project, you need to have a web browser installed on your computer. You can either open the `index.html` file directly in your browser or use a local development server.

### Using VS Code Live Server

1. Install [VS Code](https://code.visualstudio.com/).
2. Install the Live Server extension in VS Code.
3. Open the project folder in VS Code.
4. Right-click on `index.html` and select "Open with Live Server".

### Opening Directly in Browser

1. Navigate to the project folder.
2. Open `index.html` in your web browser.

## Usage

1. Open the application in your web browser.
2. Enter the number you want to convert.
3. Enter the base of the input number (2 to 16).
4. Enter the base to which the number should be converted (2 to 16).
5. Click the "Convert" button to see the result.

## Files

- `index.html`: The main HTML file containing the structure of the web application.
- `css/styles.css`: The CSS file for styling the web application.
- `js/script.js`: The JavaScript file containing the logic for base conversion.
- `js/tests.js`: The JavaScript file containing test cases for verifying the functionality.

## Testing

The project includes a set of test cases to verify the functionality of the base conversion logic. These tests are executed automatically when the page loads, and the results are printed to the browser's console.

### Running Tests

1. Open the Developer Tools in your browser (usually by pressing F12).
2. Navigate to the Console tab.
3. Refresh the page to see the test results.

### Test Cases

The following test cases are included:

#### Normal Cases

1. Convert "1010" from base 2 to base 16:
   - Expected Result: "A"
2. Convert "A1" from base 16 to base 10:
   - Expected Result: "161"
3. Convert "255" from base 10 to base 2:
   - Expected Result: "11111111"

#### Edge Cases

1. Convert "0" from base 10 to base 2:
   - Expected Result: "0"
2. Convert "FFFFFFFF" from base 16 to base 10:
   - Expected Result: "4294967295"
3. Convert "1" from base 2 to base 16:
   - Expected Result: "1"


