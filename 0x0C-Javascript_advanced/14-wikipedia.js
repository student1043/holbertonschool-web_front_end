function createElement(data) {
    var para = document.createElement("p");
    var node = document.createTextNode(data);
    para.appendChild(node);
    body.appendChild(para);
}
function queryWikipedia(callback) {
    let http = new XMLHttpRequest();
    http.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*");
    http.send();
}
queryWikipedia(createElement);
