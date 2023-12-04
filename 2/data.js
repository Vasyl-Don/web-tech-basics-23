function validateForm(form) {
    if (!/^[А-Яа-яІіЇїЄєҐґ\s]{3,} [А-ЯІЇЄҐ]{1}. [А-ЯІЇЄҐ]{1}.$/.test(form.pib.value)) {
        alert('Неправильне ім\'я');
        return false;
    }

    if (!/^[А-Яа-яІіЇїЄєҐґ]{2}-\d{2}$/.test(form.group.value)) {
        alert('Неправильний формат групи');
        return false;
    }

    if (!/^[А-ЯІЇЄҐ]{2} \d{6}$/.test(form.idCard.value)) {
        alert('Неправильний формат ідентифікаційної картки');
        return false;
    }

    if (!/^\d{2}\.\d{2}\.\d{4}$/.test(form.dob.value)) {
        alert('Неправильний формат дати народження');
        return false;
    }

    if (!/^\w+[-_.]*\w+@\w+-?\w+\.[a-z]{2,4}$/.test(form.email.value)) {
        alert('Неправильний формат електронної пошти');
        return false;
    }

    return true;
}
