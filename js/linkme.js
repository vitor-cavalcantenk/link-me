function enviar(){
    var emailValue = document.getElementById('emailtxt').value;
    var areaValue = document.getElementById('areaTxt').value;
    console.log(emailValue);
    console.log(areaValue);

// a variavel databse vai receber as funçoes de acesso ao banco de dados

   var database = firebase.database();

   database.ref('usuario').set({
       email: emailValue,
       mensagem: areaValue
   });
}