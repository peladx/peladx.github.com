(function () {
    'use strict';
    var catedral=document.getElementById("catedral");
    var portales=document.getElementById("portales");
    let parque=document.getElementById("parque");
    var catedralopen = document.getElementById("catedralopen");
    var portalesopen= document.getElementById("portalesopen");
    var parqueopen=document.getElementById("parqueopen");



    //
    // catedral.addEventListener('mouseover', function(){
    //   // catedralopen = document.getElementById("catedralopen");
    //   catedralopen.className='showing';
    // });
    //
    // portales.addEventListener('mouseover', function(){
    //   // portalesopen = document.getElementById('portalesopen');
    //   portalesopen.className='showing';
    // });

    parque.addEventListener('mouseover',function(){
      // parqueopen =document.getElementById("parqueopen");
      parqueopen.className='showing';
    });



})();
