name = "phil"

csOutput = document.getElementById('span');
csOutput.innerHTML = "Hello #{name}";

aString = "I'm a String";

csOutput.insertAdjancentHTML('beforeend', "aString is a String</br>") if typeof aString is "string"