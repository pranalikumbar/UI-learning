function functionclick(){
    alert("MS Dhoni View more Button");
}
function function1(name){
    alert(name+" view more button");

}
function function2(value){
    alert(value+ " view more button");
}
//alert("hello world")
var headerId=document.getElementsByTagName("h1");
for(var i = 0; i < headerId.length; i++) {
    headerId[i].style.color = 'red';
 }
//="red";
var paraID= document.getElementsByTagName("p");
for(var i = 0; i < paraID.length; i++) {
    paraID[i].style.color = 'green';
}

var hoverId=document.getElementsByClassName("button");
for(var i = 0; i < hoverId.length; i++) {
    hoverId[i].style.color = 'yellow';
   
 }
 