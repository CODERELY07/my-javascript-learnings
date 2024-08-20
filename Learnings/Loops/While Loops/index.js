// Initialize counter
let counter = 0;

// Continue looping while counter is less than 5
while (counter < 5) {
    console.log(counter); // Print the current value of counter
    counter++;           // Increment counter
}
// Initialize variables
let sum = 0;
let num = 1;

// Loop until num is greater than 5
while (num <= 5) {
    sum += num; // Add num to sum
    num++;      // Increment num
}

console.log(sum); // Output the total sum

// Initialize counter
let count = 10;

// Loop while count is greater than 0
while (count > 0) {
    console.log(count); // Print the current count
    count--;           // Decrement count
}

let attempts = 0;

// Infinite loop
while (true) {
    attempts++; // Increment attempt count
    console.log('Attempt:', attempts);

    if (attempts >= 3) {
        break; // Exit loop after 3 attempts
    }
}
