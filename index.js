// Write your code here!

main.remove();

let newHeader = document.createElement('h1')
document.body.appendChild(newHeader);
let att = document.createAttribute("id");
att.value = "victory";
newHeader.setAttributeNode(att);
newHeader.innerHTML = 'Matt is the champion';


