function assignHandler() {
    var element = document.getElementById("someElement");
    var id = element.id;

    element.onclick = function() {
        alert(id);
    };

    element = null;
}

