

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
        var newDiv = document.createElement("div"); 
        newDiv.setAttribute("class", "callingCard" );
        var newContent = document.createTextNode(this.getFullName()); 
        newDiv.appendChild(newContent);  
        //'<div class="profile">' + this.firstName + ' ' + this.lastName + '</div>'
        var currentDiv = document.getElementById("wrapper"); 
        document.body.insertBefore(newDiv, currentDiv);
    
    }

}

// var book {
    

// }



const p1 = new Person('Jan-Willem', 'Haeke');
const p2 = new Person('Bart','Brinks');
const p3= new Person('Rene','Spijker');
const p4 = new Person('Richard','Alp');
const p5 = new Person('Marcella','Hadderingh');
const p6 = new Person('Constant','Zwijnenberg');
const p7 = new Person('Jack','Sleebos');
const p8 = new Person('Cris','Adamus');
const p9 = new Person('Chelan','Keijzer');
const p10 = new Person('Stas','Sinyakov');
const p11 = new Person('Martijn','Blokhuis');
const p12 = new Person('Anke','Ebbelink');
const p13 = new Person('Clemens','Jongma');
const p14 = new Person('Simone','Wildenborg');
const p15 = new Person('Maha','Almasri');
const p16 = new Person('Douglas','Bowman');
const p17 = new Person('Jeroen','Wichers');

var list = [
    p1,
    p2,
    p3,
    p4,
    p5,
    p6,
    p7,
    p8,
    p9,
    p10,
    p11,
    p12,
    p13,
    p14,
    p15,
    p16,
    p17
  ];


function create() {
    //p1.plot();
list.forEach(element => {
    element.plot();
  });
}





// Need to create another object which will hold more complex functions and holds an array of the people
// adres boek {
//         persoon lijst[]
//         plot()
//         search()
//         filter()
        

// }

      