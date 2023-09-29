function createemail(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.generateEmail = function () {
        return `${this.firstName.toLowerCase()}@${this.lastName.toLowerCase()}.${this.age}`;
    };
}

const person = new createemail("jasmeet", "singh", "20");
const email = person.generateEmail();
console.log(email); // Output: jasmeet@singh.20
