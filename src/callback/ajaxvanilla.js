function loadDoc() {
    const XMLHttpRequest = require('xmlhttprequest')
    const xhttp = new XMLHttpRequest()
    xhttp.open("GET", "ajax_info.txt", true)

    xhttp.onreadystatechange = function() {
        if(xhttp.readyState === 4 && xhttp.status == 200) {
            console.log(xhttp.responseText)
        }
      }
    
    xhttp.send()
  }

loadDoc()