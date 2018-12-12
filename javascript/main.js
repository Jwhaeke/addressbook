class Person {
    constructor(id, firstName, lastName, gitHub) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gitHub = gitHub;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const jw = new Person('jhaeke', 'Jan-Willem', 'Haeke', 'www.google.come');

console.log(jw.getFullName());