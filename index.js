const form = document.querySelector("#form");
const number = document.querySelector("#card-number");
const user = document.querySelector("#card-name");
const month = document.querySelector(".month");
const year = document.querySelector(".year");
const cvc = document.querySelector("#cvc");
const date = document.querySelector('.date');
const thank = document.querySelector('.thank');

let isFormValid = false;
let isValidationOn = false;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    isValidationOn = true;
    confirmInputs();
    if (isFormValid) {
        form.remove();
        thank.classList.remove('hidden');
    }
});

function confirmInputs() {
    const numberValue = number.value;
    const userValue = user.value.trim();
    const monthValue = month.value.trim();
    const yearValue = year.value.trim();
    const cvcValue = cvc.value.trim();
 
    if (!isValidationOn) return;
    isFormValid = true;

    if(userValue === "") {
        isFormValid = false;
        setErrorFor(user, "Can't be blank");
    } else {
        setSuccessFor(user);
    }

    if(numberValue === "") {
        isFormValid = false;
        setErrorFor(number, "Can't be blank");
    } else if(!parseInt(numberValue)) {
        setErrorFor(number, "Wrong format, numbers only");
    } else {
        setSuccessFor(number);
    }

    if(cvcValue === "") {
        isFormValid = false;
        setErrorFor(cvc, "Can't be blank");
    } else if(!parseInt(cvcValue)) {
        setErrorFor(cvc, "Wrong format, numbers only");
    } else {
        setSuccessFor(cvc);
    }

    if(monthValue === "") {
        isFormValid = false;
        setErrorFor(month, "Can't be blank");
    } else if(!parseInt(monthValue)) {
        setErrorFor(month, "Wrong format, numbers only");
    } else {
        setSuccessFor(month);
    }

    if(yearValue === "") {
        isFormValid = false;
        setErrorFor(year, "Can't be blank");
    } else if(!parseInt(yearValue)) {
        setErrorFor(year, "Wrong format, numbers only");
    } else {
        setSuccessFor(year);
    }
    
}

function setErrorFor(input, message) {
    const card = input.parentElement;

    const small = card.querySelector('p');
    small.innerText = message;

    card.className = 'card error';
}

function setSuccessFor(input) {
    const card = input.parentElement;
    card.className = 'card success'
}


//function isPhone(phone) {
    //return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phone);
///}

/*const isValidPhone = (number) => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(String(number).toLowerCase());
};

const form = document.querySelector("#form");
const thank = document.querySelector('.thank');
const username = document.querySelector("#card-name");
const number = document.querySelector("#card-number");

const inputs = [username, number];

let isFormValid = false;
let isValidationOn = false;

const resetElm = (elm) => {
    elm.classList.remove('invalid');
    elm.nextElementSibling.classList.add('hidden');
}

const invalidateElm = (elm) => {
    elm.classList.add('invalid');
    elm.nextElementSibling.classList.remove('hidden');
}

const confirmInputs = () => {
    if (!isValidationOn) return;

    isFormValid = true;
    inputs.forEach(resetElm);

    if (!username.value) {
       isFormValid = false;
       invalidateElm(username);
    }

    if (!isValidPhone(number.value)) {
        isFormValid = false;
        invalidateElm(number);
     }
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    isValidationOn = true;
    confirmInputs();
    if (isFormValid) {
        form.remove();
        thank.classList.remove('hidden');
    }
});

inputs.forEach(input => {
    input.addEventListener('input', () => {
        confirmInputs();
    });
});*/



document.querySelector('#card-number').oninput = () => {
    document.querySelector('#no-input').innerText = document.querySelector
    ("#card-number").value;
    document.querySelector("#no-input").innerText.style = (".number-input #no-input");
}

document.querySelector('#card-name').oninput = () => {
    document.querySelector('#name-input').innerText = document.querySelector
    ("#card-name").value;
    document.querySelector("#name-input").innerText.style = (".name-date-input #name-input");
}

document.querySelector('.month').oninput = () => {
    document.querySelector('#mon').innerText = document.querySelector
    (".month").value;
}

document.querySelector('.year').oninput = () => {
    document.querySelector('#yr').innerText = document.querySelector
    (".year").value;
}

document.querySelector('#cvc').oninput = () => {
    document.querySelector('#cvc-input').innerText = document.querySelector
    ("#cvc").value;
}

