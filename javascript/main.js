// class Person {
//     constructor(id, firstName, lastName, gitHub) {
//         this.id = id;
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.gitHub = gitHub;
//     }
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// const jw = new Person('jhaeke', 'Jan-Willem', 'Haeke', 'www.google.come');

// console.log(jw.getFullName());

function create(){
        // create a new div element 
        var newDiv = document.createElement("div"); 
        // and give it some content 
        var newContent = document.createTextNode("Hi there and greetings!"); 
        // add the text node to the newly created div
        newDiv.appendChild(newContent);  
      
        // add the newly created element and its content into the DOM 
        var currentDiv = document.getElementById("div1"); 
        document.body.insertBefore(newDiv, currentDiv);
        
         
      }
