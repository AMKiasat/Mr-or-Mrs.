// This function does the work of submit button and shows the results of the search in localStorage and https://api.genderize.io/?name= web site
function submitN() {
    let name = document.getElementById("name").value;
    if (!checkName(name)) {
        document.getElementById("problem").innerHTML = "This can not be a name.";
        return
    }
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "https://api.genderize.io/?name=" + name, false);
    xmlHttp.send(null);
    let json = JSON.parse(xmlHttp.responseText)
    if (json.probability == 0 || name == "") {
        document.getElementById("maleOrFemale").innerHTML = "submit a name.";
        document.getElementById("probability").innerHTML = "submit a name.";
        document.getElementById("saved").innerHTML = "submit a name.";
        if (name == "")
            document.getElementById("problem").innerHTML = "Enter a name.";
        else if (json.probability == 0 && localStorage.getItem(name) == null)
            document.getElementById("problem").innerHTML = "There isn't any name like  yours.";
        if (localStorage.getItem(name) != null)
            document.getElementById("saved").innerHTML = localStorage.getItem(name)
    }
    else {
        document.getElementById("maleOrFemale").innerHTML = json.gender;
        document.getElementById("probability").innerHTML = json.probability;
        if (localStorage.getItem(name) != null)
            document.getElementById("saved").innerHTML = localStorage.getItem(name)
        else
            document.getElementById("saved").innerHTML = "submit a name.";

        document.getElementById("problem").innerHTML = "";
    }
}

// This function does the work of the save button and it saves the male or female results in localStorage
function saveN() {
    let name = document.getElementById("name").value;
    if (!checkName(name)) {
        document.getElementById("problem").innerHTML = "This can not be a name.";
        return
    }
    if (name != "") {
        if (document.getElementById("male").checked) {
            if (localStorage.getItem(name) != null)
                localStorage.removeItem(name);
            localStorage.setItem(name, "male");
            document.getElementById("saved").innerHTML = "male";
        }
        else if (document.getElementById("female").checked) {
            if (localStorage.getItem(name) != null)
                localStorage.removeItem(name);
            localStorage.setItem(name, "female");
            document.getElementById("saved").innerHTML = "female";
        }
        else if (document.getElementById("maleOrFemale").innerHTML != "submit a name.") {
            if (localStorage.getItem(name) != null)
                localStorage.removeItem(name);
            localStorage.setItem(name, document.getElementById("maleOrFemale").innerHTML);
            document.getElementById("saved").innerHTML = document.getElementById("maleOrFemale").innerHTML;
        }
        document.getElementById("problem").innerHTML = "";
    }
    else {
        document.getElementById("maleOrFemale").innerHTML = "submit a name.";
        document.getElementById("probability").innerHTML = "submit a name.";
        document.getElementById("saved").innerHTML = "submit a name.";
        document.getElementById("problem").innerHTML = "Enter a name.";
    }
}

// This function does the work of the clear button and it removes the entered name from localStorage
function clearN() {
    let name = document.getElementById("name").value;
    if (!checkName(name)) {
        document.getElementById("problem").innerHTML = "This can not be a name.";
        return
    }
    if (name != "") {
        localStorage.removeItem(name);
        document.getElementById("saved").innerHTML = "submit a name.";
        document.getElementById("problem").innerHTML = "";
    }
    else {
        document.getElementById("maleOrFemale").innerHTML = "submit a name.";
        document.getElementById("probability").innerHTML = "submit a name.";
        document.getElementById("saved").innerHTML = "submit a name.";
        document.getElementById("problem").innerHTML = "Enter a name.";
    }
}

// check if the name is a name or not
function checkName(name) {
    var regex = /^[a-z A-Z]+$/;
    return regex.test(name);
}