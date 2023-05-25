// function changeColor(){

//     document.documentElement.style.setProperty('--color-text', 'blue')

// }


// var left_section =document.querySelector('.left-section');


// var right_section =document.querySelector('.right-section');

// var seletor_fundo_Text =document.querySelector('#fundo_text');

var root = document.documentElement;

var input_E =document.getElementById("fundo_Esquerdo");
var input_D =document.getElementById("fundo_Direito");
var input_text_R =document.getElementById("fundo_text_R");
var input_text_L =document.getElementById("fundo_text_L");
var input_title_L =document.getElementById("fundo_title_L");
var input_title_R =document.getElementById("fundo_title_R");


input_E.addEventListener("input", (e) => {
    document.getElementById("c-codeE").innerHTML = e.target.value;
    root.style.setProperty("--background_left",e.target.value);
});

input_D.addEventListener("input", (e) => {
    document.getElementById("c-codeD").innerHTML = e.target.value;
    root.style.setProperty("--background_right",e.target.value);
});

input_text_R.addEventListener("input", (e) => {
    document.getElementById("c-codeTR").innerHTML = e.target.value;
    root.style.setProperty("--cor_text_right",e.target.value);
});

input_text_L.addEventListener("input", (e) => {
    document.getElementById("c-codeTL").innerHTML = e.target.value;
    root.style.setProperty("--cor_text_left",e.target.value);
});

input_title_L.addEventListener("input", (e) => {
    document.getElementById("c-codeTE").innerHTML = e.target.value;
    root.style.setProperty("--cor_title_left",e.target.value);
});

input_title_R.addEventListener("input", (e) => {
    document.getElementById("c-codeTD").innerHTML = e.target.value;
    root.style.setProperty("--cor_title_right",e.target.value);
});


// teste2
// var root =document.querySelector(':root');
// var rootStyle = getComputedStyle(root);
// // var text = rootStyle.getPropertyValue('--cor_text_right')

// function changeColor(){
//     new_value = seletor_fundo_Text.value;
//     root.style.setProperty('--cor_text_right', 'new_value');
//     console.log(new_value);
// }

// //teste1
// var root =document.querySelector(':root');
// var text =getComputedStyle(root).getPropertyValue('--cor_text_right');

// function changeColor(){
//     new_value = seletor_fundo_Text.value;
//     document.documentElement.style.setProperty('text', 'alterarCorTe()');
//     console.log(new_value);
// }


// var text = getComputedStyle(document.documentElement).getPropertyValue('--cor_text_right');

// var text = seletor_fundo_Text.value;

function alterarCorLe(){
    left_section.style.backgroundColor = seletor_fundo_E.value;
}

function alterarCorRi(){
    right_section.style.backgroundColor = seletor_fundo_D.value;
}

// function alterarCorTe(){
//    new_value = seletor_fundo_Text.value;
// }

// document.documentElement.style.setProperty('--cor_text_right', 'alterarCorTe()');

// var seletor_fundo_Title_L =document.querySelector('#fundo_left-title');
// var left_title =document.querySelector('.color-title-left');

// var seletor_fundo_Title_R =document.querySelector('#fundo_right-title');
// var right_title =document.querySelector('.color-title-right');

// // document.getElementsByClassName('.color-text').style.color = "red";

// function alterarCorX(){
//     left_title.style.backgroundColor = seletor_fundo_Title_L.value;
// }

// function alterarCorY(){
//     right_title.style.backgroundColor = seletor_fundo_Title_R.value;
// }



