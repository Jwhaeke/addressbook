

// function create(){
//         // create a new div element 
//         var newDiv = document.createElement("div"); 
//             newDiv.setAttribute("class", "callingCard" );
        
//         // and give it some content 
//             var newContent = document.createTextNode("Hi there and greetings!"); 
             

//             // add the text node to the newly created div
//             newDiv.appendChild(newContent);  
      
//         // add the newly created element and its content into the DOM 
//         var currentDiv = document.getElementById("div1"); 
//         document.body.insertBefore(newDiv, currentDiv);
        
         
//       }

class Person {
    constructor(firstName, lastName, gitHub) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gitHub = gitHub;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    plot() {
        '<div class="profile">' + this.firstName + ' ' + this.lastName + '</div>'
    }
}



const jw = new Person('Jan-Willem', 'Haeke', 'www.google.come');

function create() {
    jw.plot();
}

// console.log(jw.getFullName());

// adres boek {
//         persoon lijst[]
//         plot()
//         search()
//         filter()
        

// }

      