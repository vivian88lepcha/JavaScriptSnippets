const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordAgain = document.getElementById('passwordAgain');
const submit = document.getElementById('submit');

// Error Method
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Success Method
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

// Validate Email
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Check Required
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if (input.value.trim() === "") {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

// Get Field Name

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}



// // Event Listner
// submit.addEventListener('click', function(e) {
//     e.preventDefault();

//     if (username.value === "") {
//         showError(username, "Username is required");
//     } else {
//         showSuccess(username);
//     }

//     if (email.value === "") {
//         showError(email, "Email is required");
//     } else if (!isValidEmail(email.value)) {
//         showError(email, "Email is not Valid");
//     } else {
//         showSuccess(email);
//     }

//     if (password.value === "") {
//         showError(password, "Password is required");
//     } else {
//         showSuccess(password);
//     }

//     if (passwordAgain.value === "") {
//         showError(passwordAgain, "Password is required");
//     } else if (!(password.value === passwordAgain.value)) {
//         showError(passwordAgain, "Password is not matching");
//     } else {
//         showSuccess(passwordAgain);
//     }
// });

// Event Listner   Code Refactored
submit.addEventListener('click', function(e) {
    e.preventDefault();

    // Required Validation
    checkRequired([username, password, email, passwordAgain]);
});