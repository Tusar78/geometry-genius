// Reference Method
const getId = (elem) => {
  return document.getElementById(elem);
};

const triangleInput1 = getId("triangle-input1");
const triangleInput2 = getId("triangle-input2");
const triangleBtn = getId("triangle-btn");
const triangleOutput = getId("triangleOutput");
const calculationList = getId("calculation-list");

let count = 0;

const calculation = () => {
  const trOneVal = triangleInput1.value.trim();
  const trTwoVal = triangleInput2.value.trim();
  if (!isNaN(trOneVal) && !isNaN(trOneVal)) {
    const tr1 = Number.parseFloat(trOneVal);
    const tr2 = Number.parseFloat(trTwoVal);
    const HALF = 0.5;
    const area = HALF * tr1 * tr2;
    count += 1;
    triangleOutput.innerText = area;
    const div = document.createElement("div");
    div.className = "mt-2 w-full flex justify-between items-center";
    div.innerHTML = `
        <p>${count}. Triangle ${area}cm<sup>2</sup></p>
        <button class="px-2 py-1 bg-blue-200">Convert to m<sup>2</sup></button>
        `;
    calculationList.append(div);
    
  } else {
    alert("Enter a number please");
    triangleOutput.innerText = "0";
  }

  triangleInput1.value = "";
  triangleInput2.value = "";
};

triangleBtn.addEventListener("click", calculation);
