const notas = document.getElementById("notas");
const botaolimpar = document.getElementById("limpar");

notas.value = localStorage.getItem("blocoNotas");

notas.addEventListener("input",()=>{
    localStorage.setItem("blocoNotas",notas.value );
});

botaolimpar.addEventListener("click", ()=>{
    localStorage.removeItem("blocoNotas");
    notas.value = "";
});

