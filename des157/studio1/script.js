
(function(){
  let myForm=document.querySelector('#myform');
  const madlib=document.querySelector('#madlib');
  // for(let eachField of formData){
  //   eachField.value="";
  // }
  let myText;

  myForm.addEventListener('submit',function(event){
    event.preventDefault();
    const noun1=document.querySelector('#noun1').value;
    const adj1=document.querySelector('#adj1').value;
    const adj2=document.querySelector('#adj2').value;
    const noun2=document.querySelector('#noun2').value;
    const noun3=document.querySelector('#noun3').value;
    const verb=document.querySelector('#verb').value;
    const noun4=document.querySelector('#noun4').value;
    const noun5=document.querySelector('#noun5').value;

    overlay = document.getElementById('overlay')
    overlay.className='showing';
    const myText=`${noun1}, here is what your future entails:

        you have been deemed ${adj1} by the universe today! So, so far so good.

        You will meet the love of you life at ${noun4}! Unfortunately, they think you’re ${adj2}, though there’s something about ${noun2} that they like....

        ${noun3} would like to go ${verb} and hopes you will ask soon. Hit those dm’s!

        In terms of your recent inquiry, the answer to life is ${noun5}`;

    document.getElementById("result").innerHTML = myText;
    myForm.className="hidden";
  });
  document.querySelector('.close').addEventListener('click',function(event){
    event.preventDefault();
    overlay.className='hidden';
    myForm.className='showing';
    });
    // myForm.addEventListener('keydown', function(event){
    //   if(event.key==='Escape'){
    //     document.getElementById('overlay').className='hidden'
    //   }
    // });


  // myForm.querySelector('.close').addEventListener('click',function(event){
  //   event.preventDefault();
  //   document.getElementById('overlay').className='hidden';
  // });
  // myForm.addEventListener('keydown', function(event){
  //   if(event.key==='Escape'){
  //     document.getElementById('overlay').className='hidden'
  //   }
  // });
})();


//
// (function(){
//   let myForm=document.querySelector('#myform');
//   const madlib=document.querySelector('#madlib');
//   let myText;
//
//   myForm.addEventListener('submit',function(event){
//     event.preventDefault();
//     const noun1=document.querySelector('#noun1').value;
//     const adj1=document.querySelector('#adj1').value;
//     const adj2=document.querySelector('#adj2').value;
//     const noun2=document.querySelector('#noun2').value;
//     const noun3=document.querySelector('#noun3').value;
//     const verb=document.querySelector('#verb').value;
//     const noun4=document.querySelector('#noun4').value;
//     const noun5=document.querySelector('#noun5').value;
//
//     const myText=`${noun1}, here is what your future entails:
//
//     you have been deemed ${adj1} by the universe today! So, so far so good.
//
//     You will meet the love of you life at ${noun4}! Unfortunately, they think you’re ${adj2}, though there’s something about ${noun2} that they like....
//
//     ${noun3} would like to go ${verb} and hopes you will ask soon. Hit those dm’s!
//
//     In terms of your recent inquiry, the answer to life is ${noun5}`;
//
//
//     madlib.innerHTML=myText;
// });
//
// }());
