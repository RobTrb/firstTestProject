//let wrld = document.getElementById("world")
//const wrldButton = document.getElementById("changeBtn")
const dynamicButton = document.getElementById('dynBtn');


function change() {
    document.getElementById("world").innerHTML="Goodbye World"
    /*
    if (wrld.innerHTML == "Hello World") {
        wrld.innerHTML == "Goodbye World"
        
    }
    */
}
    //wrldButton.addEventListener("click", change)

function dynamicChange() {
    if (document.getElementById("world").innerHTML="Hello World") {
        document.getElementById("world").innerHTML="Goodbye World"
    }
        else if (document.getElementById("world").innerHTML="Goodbye World"){
            document.getElementById("World").innerHTML="Hello World"
        }
        
}

dynamicButton.addEventListener('click', dynamicChange);


