window.onload = function() {
	// var testdiv = document.getElementById("testdiv");
	// testdiv.innerHTML = "<p>I inserted <em>this</em> content.</p>";
	var para = document.createElement("p");
	var txt = document.createTextNode("Hello world");
	para.appendChild(txt);
	var testdiv = document.getElementById("testdiv");
	testdiv.appendChild(para);
	// var info = "nodeName: ";
	// info += para.nodeName;
	// info += " nodeType: ";
	// info += para.nodeType;
	// alert(info);
}