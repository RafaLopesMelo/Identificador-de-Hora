
var date = new Date();
var hora = date.getHours();
var span = document.querySelector("span#hora");

span.innerHTML = hora;

    function carregamento(){
        if(hora >= 19 || hora <=5){
        document.querySelector("img#imagem").src = "../_imagens/noite.jpg";
        document.body.style.backgroundColor = "#120a8f";
        } else if(hora >= 6 && hora <= 12) {
            document.querySelector("img#imagem").src = "../_imagens/manha.jpg";
            document.body.style.backgroundColor = "#ff8c00";
        } else {
            document.querySelector("img#imagem").src = "../_imagens/tarde.jpg";
            document.body.style.backgroundColor = "#007fff"; 
        }
    }

