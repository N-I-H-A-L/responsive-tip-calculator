let billAmount;
let billInputElement = document.getElementById('bill-input');
let tipPercent;
billInputElement.addEventListener('input', function(event){
    billAmount = event.target.value;

    let displayTipPerPerson = document.getElementsByClassName('display-tip-per-person')[0];
    let displayTotalPerPerson = document.getElementsByClassName('display-total-per-person')[0];
    if(Number(tipPercent)!=NaN && Number(numberOfPeople) != NaN && Number(numberOfPeople)>0 && Number(billAmount)!=NaN && billAmount>0 && Number(tipPercent)!=NaN && tipPercent>=0){
        let ans = Number((Number(billAmount) + (Number(tipPercent)/100)*Number(billAmount))/Number(numberOfPeople));
        ans = ans.toFixed(2);
        displayTotalPerPerson.innerText = "$" + ans;
        let ans2 = Number((Number(tipPercent)/100)*Number(billAmount))/Number(numberOfPeople);
        ans2 = ans2.toFixed(2);
        displayTipPerPerson.innerText = "$" + ans2;
    }
});

let tipPercentBtns = document.getElementsByClassName('tip-percent-btn');
Array.from(tipPercentBtns).forEach(function(element){
    element.addEventListener('click', function(event){
        event.preventDefault();
        if(event.target.innerText == 'Custom'){
            let customBtn = document.getElementById('custom-btn');
            customBtn.remove();

            let tipPercentages = document.getElementsByClassName('tip-percentages')[0];
            let inputElement = document.createElement('input');
            inputElement.id = "custom-input-tip";
            tipPercentages.appendChild(inputElement);
            
            inputElement.addEventListener('input', ()=>{
                tipPercent = inputElement.value;
                let displayTipPerPerson = document.getElementsByClassName('display-tip-per-person')[0];
                let displayTotalPerPerson = document.getElementsByClassName('display-total-per-person')[0];
                if(Number(tipPercent)!=NaN && Number(numberOfPeople) != NaN && Number(numberOfPeople)>0 && Number(billAmount)!=NaN && billAmount>0 && Number(tipPercent)!=NaN && tipPercent>=0){
                    let ans = Number((Number(billAmount) + (Number(tipPercent)/100)*Number(billAmount))/Number(numberOfPeople));
                    ans = ans.toFixed(2);
                    displayTotalPerPerson.innerText = "$" + ans;
                    let ans2 = Number((Number(tipPercent)/100)*Number(billAmount))/Number(numberOfPeople);
                    ans2 = ans2.toFixed(2);
                    displayTipPerPerson.innerText = "$" + ans2;
                }
            });

            Array.from(tipPercentBtns).forEach(function(element){
                if(element.innerText != 'Custom'){
                    element.style.backgroundColor = 'hsl(183, 100%, 15%)';
                }
            });
        }
        else{
            let lastElement = document.getElementsByClassName('tip-percentages')[0].lastElementChild;
            event.target.style.backgroundColor = 'hsl(172, 67%, 45%)';
            Array.from(tipPercentBtns).forEach(function(element){
                if(element.innerText != 'Custom' && element!=event.target){
                    element.style.backgroundColor = 'hsl(183, 100%, 15%)';
                }
            });
            if(lastElement.id == 'custom-input-tip'){
                document.getElementById('custom-input-tip').remove();
                let customBtn = document.createElement('button');
                customBtn.className = 'tip-percent-btn';
                customBtn.id = 'custom-btn';
                customBtn.innerText = 'Custom';
                document.getElementsByClassName('tip-percentages')[0].appendChild(customBtn);
                customBtn.addEventListener('click', function(event){
                    event.preventDefault();
                    customBtn.remove();
                    let tipPercentages = document.getElementsByClassName('tip-percentages')[0];
                    let inputElement = document.createElement('input');
                    inputElement.id = "custom-input-tip";
                    tipPercentages.appendChild(inputElement);
                    inputElement.addEventListener('input', (event)=>{
                        tipPercent = inputElement.value;
                        let displayTipPerPerson = document.getElementsByClassName('display-tip-per-person')[0];
                        let displayTotalPerPerson = document.getElementsByClassName('display-total-per-person')[0];
                        if(Number(tipPercent)!=NaN && Number(numberOfPeople) != NaN && Number(numberOfPeople)>0 && Number(billAmount)!=NaN && billAmount>0 && Number(tipPercent)!=NaN && tipPercent>=0){
                            let ans = Number((Number(billAmount) + (Number(tipPercent)/100)*Number(billAmount))/Number(numberOfPeople));
                            ans = ans.toFixed(2);
                            displayTotalPerPerson.innerText = "$" + ans;
                            let ans2 = Number((Number(tipPercent)/100)*Number(billAmount))/Number(numberOfPeople);
                            ans2 = ans2.toFixed(2);
                            displayTipPerPerson.innerText = "$" + ans2;
                        }
                    });
                    Array.from(tipPercentBtns).forEach(function(element){
                        if(element.innerText != 'Custom'){
                            element.style.backgroundColor = 'hsl(183, 100%, 15%)';
                            console.log("chnged");
                        }
                    });
                });
            }
            tipPercent = event.target.innerText;
            tipPercent = tipPercent.slice(0, -1);
            tipPercent = Number(tipPercent);

            let displayTipPerPerson = document.getElementsByClassName('display-tip-per-person')[0];
            let displayTotalPerPerson = document.getElementsByClassName('display-total-per-person')[0];
            if(Number(tipPercent)!=NaN && Number(numberOfPeople) != NaN && Number(numberOfPeople)>0 && Number(billAmount)!=NaN && billAmount>0 && Number(tipPercent)!=NaN && tipPercent>=0){
                let ans = Number((Number(billAmount) + (Number(tipPercent)/100)*Number(billAmount))/Number(numberOfPeople));
                ans = ans.toFixed(2);
                displayTotalPerPerson.innerText = "$" + ans;
                let ans2 = Number((Number(tipPercent)/100)*Number(billAmount))/Number(numberOfPeople);
                ans2 = ans2.toFixed(2);
                displayTipPerPerson.innerText = "$" + ans2;
            }
        }
    });
});

let numberOfPeople;
let peopleInput = document.getElementById('people-input');
peopleInput.addEventListener('input', (event)=>{
    numberOfPeople = event.target.value;

    let displayTipPerPerson = document.getElementsByClassName('display-tip-per-person')[0];
    let displayTotalPerPerson = document.getElementsByClassName('display-total-per-person')[0];
    if(Number(tipPercent)!=NaN && Number(numberOfPeople) != NaN && Number(numberOfPeople)>0 && Number(billAmount)!=NaN && billAmount>0 && Number(tipPercent)!=NaN && tipPercent>=0){
        let ans = Number((Number(billAmount) + (Number(tipPercent)/100)*Number(billAmount))/Number(numberOfPeople));
        ans = ans.toFixed(2);
        displayTotalPerPerson.innerText = "$" + ans;
        let ans2 = Number((Number(tipPercent)/100)*Number(billAmount))/Number(numberOfPeople);
        ans2 = ans2.toFixed(2);
        displayTipPerPerson.innerText = "$" + ans2;
    }
});

let resetBtn = document.getElementsByClassName('reset-btn')[0];
resetBtn.addEventListener('click', (event)=>{
    peopleInput.value = 0;
    billInputElement.value = 0;
    tipPercent = 0;
    billAmount = 0;
    numberOfPeople = 0;
    let displayTipPerPerson = document.getElementsByClassName('display-tip-per-person')[0];
    let displayTotalPerPerson = document.getElementsByClassName('display-total-per-person')[0];
    displayTipPerPerson.innerText = "$0.00";
    displayTotalPerPerson.innerText = "$0.00";
    Array.from(tipPercentBtns).forEach(function(element){
        element.style.backgroundColor = 'hsl(183, 100%, 15%)';
    });

    let lastElement = document.getElementsByClassName('tip-percentages')[0].lastElementChild;
    lastElement.style.backgroundColor = 'white';
    if(lastElement.id == 'custom-input-tip'){
        document.getElementById('custom-input-tip').remove();
        let customBtn = document.createElement('button');
        customBtn.className = 'tip-percent-btn';
        customBtn.id = 'custom-btn';
        customBtn.innerText = 'Custom';
        document.getElementsByClassName('tip-percentages')[0].appendChild(customBtn);
        customBtn.addEventListener('click', function(event){
            event.preventDefault();
            customBtn.remove();
            let tipPercentages = document.getElementsByClassName('tip-percentages')[0];
            let inputElement = document.createElement('input');
            inputElement.id = "custom-input-tip";
            tipPercentages.appendChild(inputElement);
            inputElement.addEventListener('input', (event)=>{
                tipPercent = inputElement.value;
                let displayTipPerPerson = document.getElementsByClassName('display-tip-per-person')[0];
                let displayTotalPerPerson = document.getElementsByClassName('display-total-per-person')[0];
                if(Number(tipPercent)!=NaN && Number(numberOfPeople) != NaN && Number(numberOfPeople)>0 && Number(billAmount)!=NaN && billAmount>0 && Number(tipPercent)!=NaN && tipPercent>=0){
                    let ans = Number((Number(billAmount) + (Number(tipPercent)/100)*Number(billAmount))/Number(numberOfPeople));
                    ans = ans.toFixed(2);
                    displayTotalPerPerson.innerText = "$" + ans;
                    let ans2 = Number((Number(tipPercent)/100)*Number(billAmount))/Number(numberOfPeople);
                    ans2 = ans2.toFixed(2);
                    displayTipPerPerson.innerText = "$" + ans2;
                }
            });
            Array.from(tipPercentBtns).forEach(function(element){
                if(element.innerText != 'Custom'){
                    element.style.backgroundColor = 'hsl(183, 100%, 15%)';
                }
            });
        });
    }
});