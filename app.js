
function calculateStats() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let num3 = parseFloat(document.getElementById('num3').value);

    // Check if any of the inputs is not a number
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert('Please enter valid numbers only.');
        return; 
    }
    // Have numbers in ascending order
    const numbers = [num1, num2, num3].sort((a, b) => a - b);
    // Extract the max, min, and median values from the sorted array
    let max = numbers[2];
    let min = numbers[0];
    let mean = (num1 + num2 + num3) / 3;
    let median = numbers[1];  // Calculate the mean and range of the numbers
    let range = max - min;

    document.getElementById('maxResult').innerText = max;
    document.getElementById('minResult').innerText = min;
    document.getElementById('meanResult').innerText = mean.toFixed(2); // Format the mean to two decimal places
    document.getElementById('medianResult').innerText = median;
    document.getElementById('rangeResult').innerText = range;
}
