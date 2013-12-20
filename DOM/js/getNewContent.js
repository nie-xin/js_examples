/**
 * Created by niexin on 18/12/2013.
 */
function getNewContent() {
    var request = getHTTPObject();
    if (request) {
        request.open( "GET", "example.txt", true );
        request.onreadystatechange = function() {
            // deal with the request
            if ( request.readyState == 4 ) {
                alert("Response received");
                var para = document.createElement("p");
                var txt = document.createTextNode(request.responseText);
                para.appendChild(txt);
                document.getElementById('new').appendChild(para);
            }
        };
        request.send(null);
    } else {
        alert('Sorry, your browser doesn\'t support XMLHttpRequest');
    }
    alert("Function done");
}
addLoadEvent(getNewContent);
