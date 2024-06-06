function getRandomMusicalStaveNumber() {
    return Math.ceil(Math.random() * 7);
}
colNum = 7;
lineNum = 10;
contentDiv = document.querySelector("#syllableNames");
for (let i = 0; i < lineNum; i++) {
    str = "";
    for (let j = 0; j < colNum; j++) {
        str += "&nbsp;&nbsp;&nbsp;" + getRandomMusicalStaveNumber();
    }
    text = document.createElement("p");
    text.innerHTML = str;
    br = document.createElement("br");
    contentDiv.appendChild(text);
    contentDiv.appendChild(br);
}