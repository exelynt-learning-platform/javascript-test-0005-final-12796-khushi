function printFloydsTriangle(rows) {
    let currentNumber = 1;

    // Outer loop for the number of rows
    for (let i = 1; i <= rows; i++) {
        let rowString = "";

        // Inner loop to build the string for the current row
        for (let j = 1; j <= i; j++) {
            rowString += currentNumber + " ";
            currentNumber++;
        }

        // Print the final row string, trimmed of the trailing space
        console.log(rowString.trim());
    }
}

// Execute the function for 5 rows
printFloydsTriangle(5);