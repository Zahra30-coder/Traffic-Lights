//   targetting the dom by selecting the id

var Change= document.getElementById('textChange');
Change.innerHTML = "Traffic Lights"

//******************************************************** */

//  **  defining the function with a paramter = boxId
function changeColor(boxId) {
    var colorBoxElement = document.getElementById('box');
    //selecting the id of the HTML element box and assigning it to a variable

//******************************************************** */

// ** Set the background color based on the function argument
    if (boxId === 'box') {
        colorBoxElement.style.backgroundColor = 'black';
        
    } else if (boxId === 'redBox') {
        colorBoxElement.style.backgroundColor = 'red';
    } else if (boxId === 'yellowBox') {
        colorBoxElement.style.backgroundColor = 'yellow';
    } else if (boxId === 'greenBox') {
        colorBoxElement.style.backgroundColor = 'green';
    }
}





