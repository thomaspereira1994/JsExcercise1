//get values from interface
function GetValues() {
    //get values from page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //parse values into ints
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);


    //validate input
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        let numbers = NumberGenerator(startValue, endValue);

        DisplayNumbers(numbers);
    } else {
        alert("You must enter integers");
    }

    //call numberGenerator()

    //call DisplayNumbers()
}

//generate numbers from startValue to endValue
function NumberGenerator(startValue, endValue) {
   
    let numbers = [];

    for (let i = startValue; i <= endValue; i++) {
        numbers.push(i); //push is a function to add numbers into array
    }
    return numbers;
}

//display all values, and mark even numbers bold
function DisplayNumbers(numbers) {
    let templateRows = "";
    for (let i = 0; i < numbers.length; i++) {

        let className = "even";
        let number = numbers[i];

        if (number % 2 == 0) {
            className = "even";
        } else {
            className = "odd";
        }
        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows;
}