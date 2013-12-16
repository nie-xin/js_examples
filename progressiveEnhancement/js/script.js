/**
 * Created by genie on 13/12/2013.
 */
function doTheThing() {
    alert("This is the thing!");
}

var elem = document.getElementById("about");

elem.addEventListener("click", doTheThing, false);
