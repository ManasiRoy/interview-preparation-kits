function createEmail(firstName, lastName, age) {
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${age}@example.com`;
    return email;
}

const firstName = "jasmeet";
const lastName = "singh";
const age = "20";

const properEmail = createEmail(firstName, lastName, age);
console.log(properEmail);