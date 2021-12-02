function submitn() {
    let name = document.forms["inputs"]["name"].value;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://api.genderize.io/?name=" + name, false); // false for synchronous request
    xmlHttp.send( null );
    let json = JSON.parse(xmlHttp.responseText)
    document.getElementById("maleOrFemale").innerHTML = json.gender;
    document.getElementById("probability").innerHTML = json.probability;
}

function saven() {
    
}