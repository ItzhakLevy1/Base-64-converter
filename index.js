  function onload() { 
      input = document.getElementById("input"); 
      showRevealedText = document.getElementById("showRevealedText");
  }

  function convertBase64(){
      let incodedStr = input.value;
      let decodedStr = atob(incodedStr);
      showRevealedText.innerText = decodedStr;  // Displaying the input value .
  }


