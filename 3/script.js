function newCharacter() {
    fetch("https://randomuser.me/api/?results=2")
        .then((results) => {
            return results.json();
        })
        .then((response) => {
            const character = response.results[0];
            const user = new User(
                character.picture,
                character.location.city,
                character.location.country,
                character.location.postcode,
                character.email);
            user.blocks();
        });
}

class User {
    constructor(picture, city, country, postcode, email) {
        this.picture = picture;
        this.city = city;
        this.country = country;
        this.postcode = postcode;
        this.phone = email;
    }
    blocks() {
        const block = document.createElement('div');
        block.id = 'character';

        const picture = document.createElement('img');
        picture.src = this.picture.large;
        block.appendChild(picture);

        const city = document.createElement('p');
        city.className = "text";
        city.innerHTML = `<b>City:</b> ${this.city}`;
        block.appendChild(city);

        const country = document.createElement('p');
        country.className = "text";
        country.innerHTML = `<b>Country:</b> ${this.country}`;
        block.appendChild(country);

        const postcode = document.createElement('p');
        postcode.className = "text";
        postcode.innerHTML = `<b>Postcode:</b> ${this.postcode}`;
        block.appendChild(postcode);

        const email = document.createElement('p');
        email.className = "text";
        email.innerHTML = `<b>Email:</b> ${this.phone}`;
        block.appendChild(email);

        document.getElementById('characters').appendChild(block);
    }
}
