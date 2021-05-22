(function(){
  'use strict';
  const catedral=document.getElementById("catedral");
  const portales=document.getElementById("portales");
  const parque=document.getElementById("parque");
  const catedralopen = document.getElementById("catedralopen");
  const portalesopen= document.getElementById("portalesopen");
  const parqueopen=document.getElementById("parqueopen");
  const close1=document.querySelector(".close1");
  const close2=document.querySelector(".close2");
  const close3=document.querySelector(".close3");


// events for clicking on elements and closing them

  parque.addEventListener('click',function(){
    parqueopen.className='showing';
  });

  close1.addEventListener('click',function(){
    parqueopen.className='hidden';
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
