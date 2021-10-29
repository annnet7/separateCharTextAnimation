const innerText = document.getElementById('innerText');
const resultDiv = document.getElementById('result');


innerText.addEventListener('change', function () {
    const textResult = innerText.value;
    if (textResult.length >= 0) {
        //separate text for symbols
        let textArray = Object.assign([], textResult);
        //clear result div
        resultDiv.innerHTML = '';
        let i = 0;
        //array to save each span
        const LettersArray = [];
        const animationCicle = setInterval(() => {
            //create span with symbol
            LettersArray[i] = document.createElement('span');
            resultDiv.appendChild(LettersArray[i]);
            LettersArray[i].innerHTML = (textArray[i] === ' ') ? '&nbsp;' : textArray[i];

            //when string will end - clear interval
            i++;
            if (i === textArray.length) {
                clearInterval(animationCicle);
            }
        }, 150);
    }
    return true;

})