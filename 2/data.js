function validateForm(form) {
    if (!/^[А-Яа-яІіЇїЄєҐґ\s]{3,} [А-ЯІЇЄҐ]{1}. [А-ЯІЇЄҐ]{1}.$/.test(form.pib.value)) {
        alert('Invalid Full Name');
        return false;
    }

    if (!/^[А-Яа-яІіЇїЄєҐґ]{2}-\d{2}$/.test(form.group.value)) {
        alert('Invalid Group format');
        return false;
    }

    if (!/^[А-ЯІЇЄҐ]{2} \d{6}$/.test(form.idCard.value)) {
        alert('Invalid ID-card format');
        return false;
    }

    if (!/^\d{2}\.\d{2}\.\d{4}$/.test(form.dob.value)) {
        alert('Invalid Date of Birth format');
        return false;
    }

    if (!/^\w+[-_.]*\w+@\w+-?\w+\.[a-z]{2,4}$/.test(form.email.value)) {
        alert("Invalid E-Mail format");
        return false;
    }

    return true;
}
