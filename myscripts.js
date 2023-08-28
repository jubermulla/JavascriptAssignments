// Q.8
function clock(){
    var a =new Date().toLocaleTimeString();
    document.getElementById('clock').innerText =a;
}
setInterval(clock,1000)

// Q.1
let element = document.getElementById('text');
 console.log(element.innerText);


// Q.2
let heading = document.getElementsByTagName('h1')
 console.log( heading);


// Q.3
let classStore= document.getElementsByClassName('box');
 console.log(classStore[0].innerText);
 console.log(classStore);


// Q.4
addEventListener('click')
function changeText(){
     let text = document.querySelector('h2');
     text.innerText='Hello World'
}


// Q.5
 function change()
 {
  document.getElementById('text1').innerHTML = "Welcome to Elevation academy"
 }


// Q.7
function direction (){
   let changeDimension = document.getElementsByClassName("changeDimension")
    changeDimension[0].style.flexDirection='column'    
}



