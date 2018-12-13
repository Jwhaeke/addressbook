

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
// list.forEach(element => {
//     element.plot();
//   });
    list.forEach(element => {
        var named = element.getFullName();
        document.write(named);
    })

}

function write() {
        
    var ul = document.createElement('ul');
    ul.setAttribute("id", "id1" );
    document.getElementById('div1').appendChild(ul);
    
    list.forEach(element =>  {
        var named = element.getFullName();
        var li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML += named;
    });
}
//Sort script from W3Schools --- Looking into the process
function sortList() {
    var list, i, switching, b, shouldSwitch;
    list = document.getElementById("id1");
    switching = true;
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
        // start by saying: no switching is done:
        switching = false;
        b = list.getElementsByTagName("LI");
        // Loop through all list-items:
        for (i = 0; i < (b.length - 1); i++) {
        // start by saying there should be no switching:
        shouldSwitch = false;
        /* check if the next item should
        switch place with the current item: */
        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
            /* if next item is alphabetically
            lower than current item, mark as a switch
            and break the loop: */
            shouldSwitch = true;
            break;
        }
        }
        if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark the switch as done: */
        b[i].parentNode.insertBefore(b[i + 1], b[i]);
        switching = true;
        }
    }   
}

function sortList2() {
    var list, i, switching, b, shouldSwitch;
    list = document.getElementById("id1");
    switching = true;
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
        // start by saying: no switching is done:
        switching = false;
        b = list.getElementsByTagName("LI");
        // Loop through all list-items:
        for (i = 0; i < (b.length - 1); i++) {
        // start by saying there should be no switching:
        shouldSwitch = false;
        /* check if the next item should
        switch place with the current item: */
        if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
            /* if next item is alphabetically
            lower than current item, mark as a switch
            and break the loop: */
            shouldSwitch = true;
            break;
        }
        }
        if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark the switch as done: */
        b[i].parentNode.insertBefore(b[i + 1], b[i]);
        switching = true;
        }
    }   
}

function voegIemandToe(){
    var node = document.createElement("LI");
    var sNaam = document.getElementById("myNewName").value
    var textnode = document.createTextNode(sNaam);
    node.appendChild(textnode);
    document.getElementById("id1").appendChild(node);
}

function myFilterFunction() {

    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myFilterBox');
    filter = input.value.toUpperCase();
    ul = document.getElementById("id1");
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
    //a = li[i].getElementsByTagName("a")[0]; Not needed - no <a> present (Can be deleted)
    txtValue = li[i].innerHTML;
      
// Loop through all list items, and hide those who don't match the search query

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  
}
}

function myHighLight() {

    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('highlighter');
    filter = input.value.toUpperCase();
    ul = document.getElementById("id1");
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
    //a = li[i].getElementsByTagName("a")[0]; Not needed - no <a> present (Can be deleted)
    txtValue = li[i].innerHTML;
      
// Loop through all list items, and hide those who don't match the search query

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.color = "tomato";
    } else {
      li[i].style.color = "black";
    }
  
}
}



// Need to create another object which will hold more complex functions and holds an array of the people
// adres boek {
//         persoon lijst[]
//         plot()
//         search()
//         filter()
        

// }

      