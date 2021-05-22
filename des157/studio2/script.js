(function(){
  'use strict';
  var catedral=document.getElementById("catedral");
  var portales=document.getElementById("portales");
  var parque=document.getElementById("parque");
  var catedralopen = document.getElementById("catedralopen");
  var portalesopen= document.getElementById("portalesopen");
  var parqueopen=document.getElementById("parqueopen");
  let close1=document.querySelector(".close1");
  let close2=document.querySelector(".close2");
  let close3=document.querySelector(".close3");



  parque.addEventListener('click',function(){
    // parqueopen =document.getElementById("parqueopen");
    parqueopen.className='showing';
    // parque.className='hidden';
  });

  close1.addEventListener('click',function(){
    // parqueopen =document.getElementById("parqueopen");
    parqueopen.className='hidden';
    // parque.className='hidden';
  });




  catedral.addEventListener('click',function(){
    catedralopen.className='showing';
  });

  close2.addEventListener('click',function(){
    catedralopen.className='hidden';
  });


  portales.addEventListener('click',function(){
    portalesopen.className='showing';
  });

  close3.addEventListener('click',function(){
    portalesopen.className='hidden';
  })

})();







// (function () {
//     'use strict';
//     var catedral=document.getElementById("catedral");
//     var portales=document.getElementById("portales");
//     let parque=document.getElementById("parque");
//     var catedralopen = document.getElementById("catedralopen");
//     var portalesopen= document.getElementById("portalesopen");
//     var parqueopen=document.getElementById("parqueopen");
//
//
//
//     //
//     // catedral.addEventListener('mouseover', function(){
//     //   // catedralopen = document.getElementById("catedralopen");
//     //   catedralopen.className='showing';
//     // });
//     //
//     // portales.addEventListener('mouseover', function(){
//     //   // portalesopen = document.getElementById('portalesopen');
//     //   portalesopen.className='showing';
//     // });
//
//     parque.addEventListener('mouseover',function(){
//       // parqueopen =document.getElementById("parqueopen");
//       parqueopen.className='showing';
//     });
//
//
//
// })();
