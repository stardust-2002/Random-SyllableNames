function getRandomMusicalStaveNumber() {
    return Math.ceil(Math.random() * 7);
}
const syllableNames = ['void', 'do', 're', 'mi', 'fa', 'so', 'la', 'si']

function generateLineDiv(colNum) {
    result = document.createElement('div');
    result.setAttribute('class', 'line');
    for (let i = 0; i < colNum; i++) {
        oneSyllableNameDiv = document.createElement('div');
        number = getRandomMusicalStaveNumber();
        numberDiv = document.createElement('p');
        syllableNameDiv = document.createElement('p');
        syllableNameDiv.classList.add('answer');
        syllableNameDiv.classList.add('hide');
        numberDiv.textContent = number;
        syllableNameDiv.textContent = syllableNames[number];
        oneSyllableNameDiv.appendChild(numberDiv);
        oneSyllableNameDiv.appendChild(syllableNameDiv);
        result.appendChild(oneSyllableNameDiv);
    }
    return result;
}
function regenerate(colNum, lineNum) {
    if (colNum == undefined) {
        colNum = document.querySelector('#colNum>input').value;
        if (colNum == undefined || colNum == '') colNum = 7;
    }
    if (lineNum == undefined) {
        lineNum = document.querySelector('#lineNum>input').value;
        if (lineNum == undefined || lineNum == '') lineNum = 10;
    }
    contentDiv = document.querySelector('#syllableNames');
    contentDiv.innerHTML = '';
    for (let i = 0; i < lineNum; i++) {
        line = generateLineDiv(colNum);
        contentDiv.appendChild(line);
    }
}
function hideAnswer() {
    answers = document.querySelectorAll('.answer');
    answers.forEach(element => {
        element.classList.add('hide');
    });
    showButton.style.display = 'block';
    hideButton.style.display = 'none';
}
function showAnswer() {
    answers = document.querySelectorAll('.answer');
    answers.forEach(element => {
        element.classList.remove('hide');
    });
    showButton.style.display = 'none';
    hideButton.style.display = 'block';
}
const reGenerateButton = document.querySelector('#regenerate');
const showButton = document.querySelector('#showAnswer');
const hideButton = document.querySelector('#hideAnswer');
reGenerateButton.addEventListener('click', () => { regenerate() });
showButton.addEventListener('click', showAnswer);
hideButton.addEventListener('click', hideAnswer);
document.querySelector('#generateFunction input').addEventListener('input', function (e) {
    this.value = this.value.replace(/[^\d]/g, '').replace(/(\..*?)\..*/g, '$1');
});

regenerate(7, 10);