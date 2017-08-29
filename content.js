chrome.runtime.onMessage.addListener(function (msg) {
    /* We received a message, let's do as instructed */
    if (msg.action === 'saySomething') {
        alert('something');
		console.log ("yooooooo")
    }
});



//document.getElementById("Blockbutton").onclick = myfunction;

/*function myfunction(){
	
	document.getElementById()
	document.documentElement.style.height = '100%';
	document.body.style.height = '100%';
	document.documentElement.style.width = '100%';
	document.body.style.width = '100%';

	var div = document.createElement( 'div' );
	var btnForm = document.createElement( 'form' );
	var btn = document.createElement( 'input' );

	//append all elements
	document.body.appendChild( div );
	div.appendChild( btnForm );
	btnForm.appendChild( btn );
	//set attributes for div
	div.id = 'myDivId';
	div.style.position = 'fixed';
	div.style.top = '50%';
	div.style.left = '50%';
	div.style.width = '100%';   
	div.style.height = '100%';
	div.style.backgroundColor = 'red';

	//set attributes for btnForm
	btnForm.action = '';

	//set attributes for btn
	//"btn.removeAttribute( 'style' );
	btn.type = 'button';
	btn.value = 'hello';
	btn.style.position = 'absolute';
	btn.style.top = '50%';
	btn.style.left = '50%';
}*/



/*var elements = document.getElementsByTagName('*');
var swearWords = ['fuck', 'bitch', 'asshole', 'shit', 'fag', 'bastard', 'cock', 'dick', 'douche'];

for (var k = 0; k < swearWords.length; k++) {

	for (var i = 0; i < elements.length; i++) {
		var element = elements[i];

		for (var j = 0; j < element.childNodes.length; j++) {
			var node = element.childNodes[j];

			if (node.nodeType === 3) {
				
				var text = node.nodeValue;
				var replacedText = text.replace(swearWords[k], '****');

				if (replacedText !== text) {
					element.replaceChild(document.createTextNode(replacedText), node);
				}
			}
		}
	}
}*/