# My Simple Calculator Project

## Introduction
This is my first calculator project that I built as a beginner web developer. I wanted to make a basic calculator that works in the browser using HTML, CSS, and JavaScript. It can do simple math like addition, subtraction, multiplication, and division. I also added some extra features like square root and percentage calculation.

## Features
- **Basic Operations**: Add (+), Subtract (-), Multiply (x), Divide (/).
- **Square Root**: Press √ to calculate the square root of the current number (e.g., √4 = 2). It shows "Error" for negative numbers.
- **Percentage**: Enter something like 80+10, then press % to calculate 10% of 80 (which is 8), and it updates to 80+8. Then press = to get the final result (88).
- **Clear (C)**: Resets everything to 0.
- **Delete (DEL)**: Removes the last character you entered.
- **Equals (=)**: Calculates the full expression (follows BODMAS order).
- **Error Handling**: Shows "Error" for invalid things like 10/0 or 0/0.
- **Input Limit**: Only allows up to 20 characters to keep it simple.

## How to Use
This calculator will work through button clicks.

### Basic Operations
1. Enter Numbers (e.g., click 5, then + , then 3).
2. press = to get the result (e.g., 5+3=8).

### Square Root (√)
- **First enter the number, then press the √ button.**
- Example:
  1. Click 1, then 6 (display: 16).
  2. Click √ (display: 4).
- For a negative number: Click '-', then '4', then '√' (display: Error).
- √ on an empty display: Display 0..

### Percentage (%)
- **First enter the full expression (number + operator + number), then press %.**
- Example-1 (10% of 80):
  1. Click 8, 0, then + (display: 80+).
  2. Click 1, 0 (display: 80+10).
  3. Click % (display: 80+8).
  4. Click = (display: 88).
- Example-2 (20% of 100 multiply):
  1. Click 1, 0, 0, then * (display: 100*).
  2. Click 2, 0 (display: 100*20).
  3. Click % (display: 100*20).
  4. Click = (display: 2000).
- Invalid (only % or 5%): Display 'Error'.

### Other Tips
- DEL: To remove the last digit/operator (e.g., 123+ press DEL → 123).
- C: To reset everything.
- If the input is incorrect: 'Error' will be displayed, then press C.

## How to Run
1. Create a new folder on your computer, like "My Cal".
2. Save the three files inside it:
   - `calculator.html` (the main page).
   - `styles.css` (for the looks).
   - `script.js` (for the brain).
3. Open `calculator.html` in your web browser (like Chrome or Firefox).
4. Start clicking buttons and doing math.

If it doesn't work, check if the files are in the same folder and the names match exactly.

## Technologies Used
- **HTML**: For the structure (buttons and display).
- **CSS**: For styling to make it look like a real calculator (dark theme, shadows, hover effects).
- **JavaScript**: For all the logic (calculations, events, etc.). I used `eval()` for math.

## What I Learned
- How to use grid in CSS for button layout.
- Event handlers like `onclick` for buttons.
- String manipulation in JS (like `slice()` for delete).
- Error handling with `try-catch` and `isNaN()`.
- Math functions like `Math.sqrt()`.

This project was fun but challenging, especially the percentage part. If you find bugs, let me know! I'm still learning.

Thanks for checking it out!  

Made by Beginner Dev
