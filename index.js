  function onload() { 
    textToDecode = document.getElementById("textToDecode"); 
    showDecodedText = document.getElementById("showDecodedText");
    
    textToEncode = document.getElementById("textToEncode"); 
    showEncodedText = document.getElementById("showEncodedText");
  }

  function encodingBase64() {
    let toEncodeStr = textToEncode.value;
    let encodedStr = btoa(toEncodeStr);
    showEncodedText.innerText = encodedStr;
  }
  
  function decodeingBase64() {
    let encodedStr64 = textToDecode.value;
    let decodedStr = atob(encodedStr64);
    showDecodedText.innerText = decodedStr;  // Displaying the input value .
}
