var buttons = document.querySelectorAll('.key');
var controle = 0;
var doubleCheck = 1;

function calcul(obj){
    return Function('return ' + obj)();
}
function deleteLastNumber(){
    document.querySelector('.Screen').textContent = document.querySelector('.Screen').textContent.slice(0, -1);
}
function fullErase(){
    document.querySelector('.Screen').innerHTML = '';
}
function keyboardTryOperator(id){
    switch (doubleCheck) {
        case 1:
            break;
        default:
            document.querySelector('.Screen').innerHTML += document.querySelector(id).innerHTML;
            controle = 0;
            doubleCheck = 1;
            break;
    }
}
function keyboardTryNumber(id){
    switch (controle) {
        case 0:
            document.querySelector('.Screen').innerHTML += document.querySelector(id).innerHTML;
            doubleCheck = 0;
            break;
        default:
            document.querySelector('.Screen').innerHTML = document.querySelector(id).innerHTML;
            controle = 0;
            break;
    }
}
for (let index = 0; index < buttons.length; index++) {
    const btn = buttons[index];
    btn.addEventListener('click', function(){   
        if (this.innerHTML === " = ") {
            document.querySelector('.Screen').innerHTML = calcul(document.querySelector('.Screen').textContent);
            controle = 1;
            return;
        }
        if (this.innerHTML === " DEL ") {
            deleteLastNumber();
            return;
        }
        if (this.innerHTML === " AC ") {
            fullErase();
            return;
        }
        switch (doubleCheck) {
            case 1:
                switch (btn.innerHTML) {
                    case '+':
                        break;
                    case '-':
                        break;
                    case '*':
                        break;
                    case '/':
                        break;
                    case '.':
                        break;
                    default:
                        document.querySelector('.Screen').innerHTML += btn.innerHTML;
                        controle = 0;
                        doubleCheck = 0;
                        break;
                }
                break;
            default:
                switch (controle) {
                    case 1:
                        switch (btn.textContent) {
                            case "+":
                                document.querySelector('.Screen').innerHTML += btn.textContent;
                                controle = 0;
                                doubleCheck = 1;
                                break;
                            case "-":
                                document.querySelector('.Screen').innerHTML += btn.textContent;
                                controle = 0;
                                doubleCheck = 1;
                                break;
                            case "/":
                                document.querySelector('.Screen').innerHTML += btn.textContent;
                                controle = 0;
                                doubleCheck = 1;
                                break;
                            case "*":
                                document.querySelector('.Screen').innerHTML += btn.textContent;
                                controle = 0;
                                doubleCheck = 1;
                                break;
                            case ".":
                                document.querySelector('.Screen').innerHTML += btn.textContent;
                                controle = 0;
                                doubleCheck = 1;
                                break;
                            default:
                                document.querySelector('.Screen').innerHTML = btn.textContent;
                                controle = 0;
                                doubleCheck = 0;
                                break;
                        }
                        break;
                
                    default:
                        switch (btn.textContent) {
                            case "+":
                                document.querySelector('.Screen').innerHTML += btn.textContent;
                                controle = 0;
                                doubleCheck = 1;
                                break;
                            case "-":
                                document.querySelector('.Screen').innerHTML += btn.textContent;
                                controle = 0;
                                doubleCheck = 1;
                                break;                            
                            case "/":
                                document.querySelector('.Screen').innerHTML += btn.textContent;
                                controle = 0;
                                doubleCheck = 1;
                                break;
                            case "*":
                                document.querySelector('.Screen').innerHTML += btn.textContent;
                                controle = 0;
                                doubleCheck = 1;
                                break;                            
                            case ".":
                                document.querySelector('.Screen').innerHTML += btn.textContent;
                                controle = 0;
                                doubleCheck = 1;
                                break;
                            default:
                                document.querySelector('.Screen').textContent += this.textContent;
                                controle = 0;
                                doubleCheck = 0;
                                break;
                        }
                        break;
                }
                break;
        }
    })  
}

window.addEventListener('error', function(){
    this.alert("Vous avez entré une opération non valide, veuillez vérifier l'absence de répétition d'opérateurs ainsi que l'intégrité de l'opération")
})

// Bonus Touches

window.addEventListener('keydown', function(event){
    if (event.code === "Backspace") {
        deleteLastNumber();
    }
    if (event.code === "NumpadDecimal"){
        keyboardTryOperator('#decimal');
    }
    if (event.code === "NumpadAdd"){
        keyboardTryOperator('#plus');
    }
    if (event.code === "NumpadDivide"){
        keyboardTryOperator('#divide');
    }
    if (event.code === "NumpadMultiply"){
        keyboardTryOperator('#multiply');
    }
    if (event.code === "NumpadSubtract"){
        keyboardTryOperator('#substract');
    }
    if (event.code === "NumpadEnter" || event.code === "Enter"){
        document.querySelector('.Screen').innerHTML = calcul(document.querySelector('.Screen').innerHTML);
        controle = 1;
        doubleCheck = 0;
    }
    if (event.code === "Numpad0"){
        keyboardTryNumber('#zero');
    } 
    if (event.code === "Numpad1"){
        keyboardTryNumber('#one');
    }
    if (event.code === "Numpad2"){
        keyboardTryNumber('#two');
    } 
    if (event.code === "Numpad3"){
        keyboardTryNumber('#three');
    } 
    if (event.code === "Numpad4"){
        keyboardTryNumber('#four');   
    } 
    if (event.code === "Numpad5"){
        keyboardTryNumber('#five');
    } 
    if (event.code === "Numpad6"){
        keyboardTryNumber('#six');
    } 
    if (event.code === "Numpad7"){
        keyboardTryNumber('#seven');    
    } 
    if (event.code === "Numpad8"){
        keyboardTryNumber('#eight');   
    } 
    if (event.code === "Numpad9"){
        keyboardTryNumber('#nine');
    }  
    if (event.code === "Delete"){
        fullErase();
        doubleCheck = 0;
        controle = 0;
    }
})