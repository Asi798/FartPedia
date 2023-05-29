window.onload = function () {
    let au = document.getElementById("audio");
    let audios;

    readTextFile("audios.json", function (text) {
        audios = JSON.parse(text);
        let buttons = document.getElementById("buttons");
        console.log(audios);

        audios.forEach(function (audio,i){
          let button = document.createElement("button"); 
          button.innerHTML = audio.titol;
          button.addEventListener("click",function () {
            reprodueix(audio.arxiu);
            console.log(audio.titol)
          })
          buttons.appendChild(button);
        });
    });

    
    


    function reprodueix(arx) {
        au.src = "Audios/" + arx;
        au.play();
    }

    function readTextFile(file, callback) {
        var rawFile = new XMLHttpRequest();
        rawFile.overrideMimeType("application/json");
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = function () {
          if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
          }
        };
        rawFile.send(null);
      }
}