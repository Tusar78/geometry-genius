// Reference Method 
const getId = elem => {
    return document.getElementById(elem);
}

const triangleInput1 = getId('triangle-input1');
const triangleInput2 = getId('triangle-input2');
const triangleBtn = getId('triangle-btn');
const triangleOutput = getId('triangleOutput');


const calculation = () => {
    const trOneVal = triangleInput1.value.trim();
    const trTwoVal = triangleInput2.value.trim();
    if (!isNaN(trOneVal) && !isNaN(trOneVal)) {
        const tr1 = Number.parseFloat(trOneVal);
        const tr2 = Number.parseFloat(trTwoVal);
        const HALF = 0.5;
        const area = HALF * tr1 * tr2
        triangleOutput.innerText = area;
    }
}


triangleBtn.addEventListener('click', calculation);