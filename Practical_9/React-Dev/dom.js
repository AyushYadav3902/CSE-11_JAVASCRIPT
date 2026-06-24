const result = document.getElementById("para");  //to target elements 
console.log(result);
result.innerHTML = "my self";
result.title = "myname";

const x = document.getElementsByClassId("p1");   //returns array (to target elements)
console.log(x);

document.getElementsByTagName("p")               //returns array
const result3 = document.getElementsByTagName("p");
result3[2].innerHTML = "this is a pet";
result3[1].style.color = "blue";
result3[1].innerText = "my paragraph";

// QuerySelector returns 1st element in classname or tagname :
const test = document.querySelector("ul li:nth-child(3)");
test.style.backgroundColor = "green";

// returns a NodeList

const test2 = document.querySelectorAll("ul li");
    for(x in test2){
        test2[x].style.backgroundColor = "green";
        test2[x].style.margin = "10px";
        test2[x].style.color = "blue";
    }