function changeMode(size, weight, transform, background, color) {
    return function () {
        document.body.style.fontSize = size + "px";
        document.body.style.fontWeight = weight;
        document.body.style.transform = transform;
        document.body.style.background = background;
        document.body.style.color = color;
    };
}
function main() {
    let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    let screamMode = changeMode(12, "normal", "lowercase", "white", "black");
    let parag = document.createElement("P");
    let te = document.createTextNode("Welcome Holberton!");
    parag.appendChild(te);
    document.body.appendChild(parag);  

    let spookyButton = document.createElement('button');
    spookyButton.id = 'spookyButton';
    spookyButton.innerText = 'Spooky';
    document.body.append(spookyButton);
    document.getElementById('spookyButton').onclick = spooky;

    let darkButton = document.createElement('button');
    darkButton.id = 'darkButton';
    darkButton.innerText = 'Dark mode';
    document.body.append(darkButton);
    document.getElementById('darkButton').onclick = darkMode;

    let screamButton = document.createElement('button');
    screamButton.id = 'screamButton';
    screamButton.innerText = 'Scream mode';
    document.body.append(screamButton);
    document.getElementById('screamButton').onclick = screamMode;
  
}
main();
