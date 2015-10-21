walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
            if(node.parentElement.tagName.toLowerCase() != "script") {
                handleText(node);
            }
			break;
	}
}

function handleText(textNode) {
	var v = textNode.nodeValue;
	
	v = v.replace(/\b(Q|q)ueen(')s/g, "QUEENSUP");
	v = v.replace(/\bqueensu/g, "QUEENSDOWN");

	
	textNode.nodeValue = v;
	

}
	document.body.innerHTML = document.body.innerHTML.replace(/\bQUEENSUP/g, '<span style="color:#11335d;">Qu</span><span style="color:#eebd31;">ee</span><span style="color:#9d1939;">n&apos;s</span>');	
	document.body.innerHTML = document.body.innerHTML.replace(/\bQUEENSDOWN/g, '<span style="color:#11335d;">qu</span><span style="color:#eebd31;">een</span><span style="color:#9d1939;">su</span>');	




