
document.getElementById("main-heading").innerHTML = "New DOM Layout";

document.getElementById("page-header").classList.add("bg-success");


document.getElementById("para1").textContent = "The Document Object Model (DOM) is a cross-platform and language-Independent interface that treats an XML or HTML document as a tree structure";


document.getElementById("para2").textContent = "The Document Object Model (DOM) is a programing interface for HTML and XML documents. It represent the page so that programs can change the document structures, stylem and contents. The DOM represent the document as nodes and objects. That way, programing languages can connect to the page";


// document.getElementById("btn").onclick = function() {myFunction()};

function myFunction() {
   document.getElementById("para4").textContent = "The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a treeucture wherein each mode is an object representing a part of the document."
   };
   document.getElementById("btn").addEventListener("click", myFunction)

document.getElementById("red").classList.remove("bg-white");
document.getElementById("red").classList.add("bg-danger");

document.getElementById("blue").classList.remove("bg-white");
document.getElementById("blue").classList.add("bg-primary");

document.getElementById("yellow").classList.remove("bg-white");
document.getElementById("yellow").classList.add("bg-warning");

document.getElementById("green").classList.remove("bg-white");
document.getElementById("green").classList.add("bg-success");

document.getElementById("black").classList.remove("bg-white");
document.getElementById("black").classList.add("bg-dark");