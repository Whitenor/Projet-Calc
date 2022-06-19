var buttons = document.querySelectorAll('.key');
var controle = 0;
var test= document.querySelector('.Screen').innerHTML;



function calcul(obj){
    return Function('return ' + obj)();
}
function deleteLastNumber(){
    document.querySelector('.Screen').innerHTML = test.slice(0 , -1);
}
function fullErase(){
    document.querySelector('.Screen').innerHTML = '';
}







for (let index = 0; index < buttons.length; index++) {
    const btn = buttons[index];
    let test1= document.querySelector('.Screen').innerHTML;
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
        document.querySelector('.Screen').textContent += this.textContent;
        if (controle === 1) {
            document.querySelector('.Screen').innerHTML = this.textContent;
            controle = 0;
        }
        console.log(controle);
        console.log(test);
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
        document.querySelector('.Screen').innerHTML += document.querySelector('#decimal').innerHTML
    }
    if (event.code === "NumpadAdd"){
        document.querySelector('.Screen').innerHTML += document.querySelector('#plus').innerHTML
    }
    if (event.code === "NumpadDivide"){
        document.querySelector('.Screen').innerHTML += document.querySelector('#divide').innerHTML
    }
    if (event.code === "NumpadMultiply"){
        document.querySelector('.Screen').innerHTML += document.querySelector('#multiply').innerHTML
    }
    if (event.code === "NumpadSubtract"){
        document.querySelector('.Screen').innerHTML += document.querySelector('#substract').innerHTML
    }
    if (event.code === "NumpadEnter" || event.code === "Enter"){
        document.querySelector('.Screen').innerHTML = calcul(document.querySelector('.Screen').innerHTML);
    }
    if (event.code === "Numpad0"){
        document.querySelector('.Screen').innerHTML += document.querySelector('#zero').innerHTML
    } 
    if (event.code === "Numpad1"){
        document.querySelector('.Screen').innerHTML += document.querySelector('#one').innerHTML
    }
    if (event.code === "Numpad2"){
        document.querySelector('.Screen').innerHTML += document.querySelector('#two').innerHTML
    } 
    if (event.code === "Numpad3"){
        document.querySelector('.Screen').innerHTML += document.querySelector('#three').innerHTML
    } 
    if (event.code === "Numpad4"){
        document.querySelector('.Screen').innerHTML += document.querySelector('#four').innerHTML
    } 
    if (event.code === "Numpad5"){
        document.querySelector('.Screen').innerHTML += document.querySelector('#five').innerHTML
    } 
    if (event.code === "Numpad6"){
        document.querySelector('.Screen').innerHTML += document.querySelector('#six').innerHTML
    } 
    if (event.code === "Numpad7"){
        document.querySelector('.Screen').innerHTML += document.querySelector('#seven').innerHTML
    } 
    if (event.code === "Numpad8"){
        document.querySelector('.Screen').innerHTML += document.querySelector('#eight').innerHTML
    } 
    if (event.code === "Numpad9"){
        document.querySelector('.Screen').innerHTML += document.querySelector('#nine').innerHTML
    }  
    if (event.code === "Delete"){
        fullErase();
    }
})




//  Fonctions préparé pour alléger le code plus haut





// -----------------------------------Legacy ---------------------------------


// var zero = document.querySelector('zero')
// var un = document.querySelector('one')
// var deux = document.querySelector('two')
// var trois = document.querySelector('three')
// var quatre = document.querySelector('four')
// var cinq = document.querySelector('five')
// var six = document.querySelector('six')
// var sept = document.querySelector('seven')
// var huit = document.querySelector('eight')
// var neuf = document.querySelector('nine')
// var virgule = document.querySelector('decimal')
// var del = document.querySelector('DEL')
// var AC = document.querySelector('AC')
// var equal = document.querySelector('equal')
// var plus = document.querySelector('plus')
// var divide = document.querySelector('divide')
// var substract = document.querySelector('substract')
// var multiply = document.querySelector('multiply')




// ajout à la value du screen


// zero.addEventListener('click', function(){
//     addZero();
// })
// un.addEventListener('click', function(){
//     addUn();
// })
// deux.addEventListener('click', function(){
//     addDeux();
// })
// trois.addEventListener('click', function(){
//     addTrois();
// })
// quatre.addEventListener('click', function(){
//     addQuatre();
// })
// cinq.addEventListener('click', function(){
//     addCinq();
// })
// six.addEventListener('click', function(){
//     addSix();
// })
// sept.addEventListener('click', function(){
//     addSept();
// })
// huit.addEventListener('click', function(){
//     addHuit();
// })
// neuf.addEventListener('click', function(){
//     addNeuf();
// })
// virgule.addEventListener('click', function(){
//     addVirgule();
// })
// plus.addEventListener('click', function(){
//     addPlus();
// })
// divide.addEventListener('click', function(){
//     addDivide();
// })
// multiply.addEventListener('click', function(){
//     addMultiply();
// })
// substract.addEventListener('click', function(){
//     addSubstract();
// })
// del.addEventListener('click', function(){
//     deleteLastNumber();
// })
// AC.addEventListener('click', function(){
//     fullErase();
// })
// equal.addEventListener('click', function(){
//     document.querySelector('.Screen').innerHTML = calcul(document.querySelector('.Screen').innerHTML);
// })