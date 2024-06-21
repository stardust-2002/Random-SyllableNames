function getRandomMusicalStaveNumber() {
    return Math.ceil(Math.random() * 7);
}
syllableNames = ["void", "do", "re", "mi", "fa", "so", "la", "si"]
colNum = 7;
lineNum = 10;
contentDiv = document.querySelector("#syllableNames");
for (let i = 0; i < lineNum; i++) {
    line = generateLineDiv(colNum);
    console.log(line);
    contentDiv.appendChild(line);
}

function generateLineDiv(colNum) {
    result = document.createElement("div");
    result.setAttribute("class", "line");
    for (let i = 0; i < colNum; i++) {
        oneSyllableNameDiv = document.createElement("div");
        number = getRandomMusicalStaveNumber();
        numberDiv = document.createElement("p");
        syllableNameDiv = document.createElement("p");
        syllableNameDiv.setAttribute("class", "answer");
        numberDiv.textContent = number;
        syllableNameDiv.textContent = syllableNames[number];
        oneSyllableNameDiv.appendChild(numberDiv);
        oneSyllableNameDiv.appendChild(syllableNameDiv);
        result.appendChild(oneSyllableNameDiv);
    }
    return result;
}