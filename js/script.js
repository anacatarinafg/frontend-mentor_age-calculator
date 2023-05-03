/**
 * 
 * Steps:
 * 1) We need to have access to the input values. The number must be converted to an integer number so we can calculate the age correctly; ---- DONE
 * 2) We need to validate the input; ---- DONE
 * 3) Then we calculate the age; ---- DONE
 * 4) Then we will display the calculated age on the <span> I created for introduce that element and also check if the inputs have values, if not, then display an alert to fill all the inputs; ---- DONE
 * 5) Create a function that will validate all the input values according to the numbers of days & months; ---- DONE 
 * 6) If the year is higher than the current year we are now, then give the user an alert to insert a valid year that's lower than the current year; ---- DONE
 * 7) Then we need to check if the date is valid and if not, then display an alert to insert a valid date; ---- DONE
 */


function ageCalculator() {
    // Getting input values
    const inputDay = parseInt(document.getElementById("day").value);
    const inputMonth = parseInt(document.getElementById("month").value);
    const inputYear = parseInt(document.getElementById("year").value);

    // Validation of the input
    const validDate = validateDate(inputDay, inputMonth, inputYear);
    if (!validDate) {
        return;
    }

    // Calculating the age
    const date = new Date(inputYear, inputMonth - 1, inputDay);
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - date;
    const ageInYears = Math.floor(ageInMilliseconds / (365 * 24 * 60 * 60 * 1000));
    const ageInMonths = Math.floor((ageInMilliseconds % (365 * 24 * 60 * 60 * 1000)) / (30 * 24 * 60 * 60 * 1000));
    const ageInDays = Math.floor((ageInMilliseconds % (30 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));

    // Display the age on the page
    const ageTimeline = document.querySelector(".ageTimeline");
    ageTimeline.innerHTML = `
      <h1 class="ageTimeline__info"><span class="ageTimeline__span">${ageInYears}</span> years</h1>
      <h1 class="ageTimeline__info"><span class="ageTimeline__span">${ageInMonths}</span> months</h1>
      <h1 class="ageTimeline__info"><span class="ageTimeline__span">${ageInDays}</span> days</h1>
    `;
}

// Function to validate date input
function validateDate(day, month, year) {

    // Check if any input field is empty, if not, alert the user to fill all the fields
    if (!day || !month || !year) {
        let elements = document.getElementsByClassName("ageCalculator__label");
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.color = "red";
        }
        alert("Fill all the fields");
        return false;
    } else {
        let elements = document.getElementsByClassName("ageCalculator__label");
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.color = "";
        }
    }

    // Check if day is between 1-31, if not, alert the user to put a valid number ranging from 1 to 31
    if (day < 1 || day > 31) {
        let elements = document.getElementsByClassName("ageCalculator__label");
        for (let i = 0; i < elements.length; i++) {
            elements[0].style.color = "red";
        }
        alert("Day must be between 1 and 31");
        return false;
    } else {
        let elements = document.getElementsByClassName("ageCalculator__label");
        for (let i = 0; i < elements.length; i++) {
            elements[0].style.color = "";
        }
    }

    // Check if month is between 1-12, if not, alert the user to put a valid number ranging from 1 to 12
    if (month < 1 || month > 12) {
        let elements = document.getElementsByClassName("ageCalculator__label");
        for (let i = 0; i < elements.length; i++) {
            elements[1].style.color = "red";
        }
        alert("Month must be between 1 and 12");
        return false;
    } else {
        let elements = document.getElementsByClassName("ageCalculator__label");
        for (let i = 0; i < elements.length; i++) {
            elements[1].style.color = "";
        }
    }

    // Check if year > than the current year we are now, if not, alert the user to enter a valid year that's lower than the current year
    const currentYear = new Date().getFullYear();
    if (year > currentYear) {
        let elements = document.getElementsByClassName("ageCalculator__label");
        for (let i = 0; i < elements.length; i++) {
            elements[2].style.color = "red";
        }
        alert("Year must be lower than the current year");
        return false;
    } else {
        let elements = document.getElementsByClassName("ageCalculator__label");
        for (let i = 0; i < elements.length; i++) {
            elements[2].style.color = "";
        }
    }

    // Check if date is valid and if not, alert the user to insert a valid date
    const inputDate = new Date(year, month - 1, day);
    if (inputDate.getMonth() !== month - 1) {
        let elements = document.getElementsByClassName("ageCalculator__label");
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.color = "red";
        }
        alert("Date must be valid");
        return false;
    } else {
        let elements = document.getElementsByClassName("ageCalculator__label");
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.color = "";
        }
    }

    return true;
}