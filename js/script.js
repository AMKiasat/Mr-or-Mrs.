function submitN() {
    let name = document.getElementById("name").value;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "https://api.genderize.io/?name=" + name, false);
    xmlHttp.send(null);
    let json = JSON.parse(xmlHttp.responseText)
    if (json.probability == 0 || name == "") {
        document.getElementById("maleOrFemale").innerHTML = "submit a name.";
        document.getElementById("probability").innerHTML = "submit a name.";
        document.getElementById("saved").innerHTML = "submit a name.";
    }
    else {
        document.getElementById("maleOrFemale").innerHTML = json.gender;
        document.getElementById("probability").innerHTML = json.probability;
        if (localStorage.getItem(name) != null)
            document.getElementById("saved").innerHTML = localStorage.getItem(name)
        else
            document.getElementById("saved").innerHTML = "submit a name.";
    }
}

function saveN() {
    let name = document.getElementById("name").value;
    if (name != "") {
        if (document.getElementById("male").checked) {
            localStorage.setItem(name, "male");
            document.getElementById("saved").innerHTML = "male";
        }
        else if (document.getElementById("female").checked) {
            localStorage.setItem(name, "female");
            document.getElementById("saved").innerHTML = "female";
        }
        else if (document.getElementById("maleOrFemale").innerHTML != "submit a name.") {
            localStorage.setItem(name, document.getElementById("maleOrFemale").innerHTML);
            document.getElementById("saved").innerHTML = document.getElementById("maleOrFemale").innerHTML;
        }
    }
    else {
        document.getElementById("maleOrFemale").innerHTML = "submit a name.";
        document.getElementById("probability").innerHTML = "submit a name.";
        document.getElementById("saved").innerHTML = "submit a name.";
    }
}

function clearN() {
    let name = document.getElementById("name").value;
    if (name != "") {
        localStorage.removeItem(name);
        document.getElementById("saved").innerHTML = "submit a name.";
        console.log("shod")
    }
    else {
        document.getElementById("maleOrFemale").innerHTML = "submit a name.";
        document.getElementById("probability").innerHTML = "submit a name.";
        document.getElementById("saved").innerHTML = "submit a name.";
    }
}