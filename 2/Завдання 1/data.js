function validateForm(form) {
    var errorMessage = "";

    if (!/^[А-Яа-яІіЇїЄєҐґ\s]{3,} [А-ЯІЇЄҐ]{1}. [А-ЯІЇЄҐ]{1}.$/.test(form.pib.value)) {
        errorMessage += 'Неправильне ім\'я\n';
        form.pib.classList.add("error-label");
    } else {
        form.pib.classList.remove("error-label");
    }

    if (!/^[А-Яа-яІіЇїЄєҐґ]{2}-\d{2}$/.test(form.group.value)) {
        errorMessage += 'Неправильний формат групи\n';
        form.group.classList.add("error-label");
    } else {
        form.group.classList.remove("error-label");
    }

    if (!/^[А-ЯІЇЄҐ]{2} \d{6}$/.test(form.idCard.value)) {
        errorMessage += 'Неправильний формат ідентифікаційної картки\n';
        form.idCard.classList.add("error-label");
    } else {
        form.idCard.classList.remove("error-label");
    }

    if (!/^\d{2}\.\d{2}\.\d{4}$/.test(form.dob.value)) {
        errorMessage += 'Неправильний формат дати народження\n';
        form.dob.classList.add("error-label");
    } else {
        form.dob.classList.remove("error-label");
    }

    if (!/^\w+[-_.]*\w+@\w+-?\w+\.[a-z]{2,4}$/.test(form.email.value)) {
        errorMessage += 'Неправильний формат електронної пошти\n';
        form.email.classList.add("error-label");
    } else {
        form.email.classList.remove("error-label");
    }

    var errorMessageBox = document.getElementById("error-message");
    errorMessageBox.innerText = errorMessage;

    if (errorMessage !== "") {
        return false;
    }

    // Виведення в окремому вікні при успішній валідації
    var outputData = "<h3>Введені дані:</h3>";
    outputData += "<p><strong>ПІБ:</strong> " + form.pib.value + "</p>";
    outputData += "<p><strong>Група:</strong> " + form.group.value + "</p>";
    outputData += "<p><strong>ID-картка:</strong> " + form.idCard.value + "</p>";
    outputData += "<p><strong>Дата народження:</strong> " + form.dob.value + "</p>";
    outputData += "<p><strong>E-Mail:</strong> " + form.email.value + "</p>";

    var newWindow = window.open('', '_blank');
    newWindow.document.write('<pre>' + outputData + '</pre>');

    event.preventDefault();

    return true;
}

document.querySelector('form').addEventListener('submit', validateForm);