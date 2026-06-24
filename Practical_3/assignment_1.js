// Function to add numbers in an array
function addNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Example usage
const numbers = [10, 20, 30, 40, 50];
const result = addNumbers(numbers);

console.log("Array:", numbers);
console.log("Sum of numbers:", result);
