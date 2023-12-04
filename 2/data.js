function Formdata(form) {
    if (form.fnm.value.length < 3) {
        alert('Fill the "Name" field');
        return false;
    }

    if (form.text.value.length < 3) {
        alert('Fill the "Message" field');
        return false;
    }

    if (form.email.value.length == 0) {
        alert('"E-Mail" field is empty');
        return false;
    }

    if (form.email.value.length < 6) {
        alert('"E-Mail" is too short');
        return false;
    }

    if (!(/^\w+[-_.]*\w+@\w+-?\w+\.[a-z]{2,4}$/.test(form.email.value))) {
        alert("Type in the correct E-Mail");
        return false;
    }


    if (form.phone.value.length == 0) {
        alert('"Telephone number" field is empty');
        return false;
    }

    if (form.phone.value.length < 5) {
        alert('"Telephone number" field must contain at least 5 symbols');
        return false;
    }

    if (!(/^[0-9-+()s]+z/.test(form.phone.value + "z"))) {
        alert('Telephone number is invalid');
        return false;
    }

    var number = form.summa;
    if (number.value !== '20') {
        alert('"Summa" is invalid');
        return false;
    }

    return true;
}
