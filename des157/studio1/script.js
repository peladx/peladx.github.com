(function(){
  'use strict';
})();
const myForm=document.querySelector('#myform');
const madlib=document.querySelector('#madlib');
const myText;
if (noun1 && noun2 && adj &&verb){
  myText=`Here are the words: ${noun1},${noun2},${adj},and${verb}`;

}
  else{
    myText="Please give me words so I can mke your Mad Lib!";

  }
myForm.addEventListener('submit',function(event){
  event.preventDefault();
  const noun1=document.querySelector('#noun1').value ='';
  const noun2=document.querySelector('#noun2').value ='';
  const adj=document.querySelector('#adj').value ='';
  const verb=document.querySelector('#verb').value='';

// if (noun1 && noun2 && adj &&verb){
//   my text=`Here are the words: ${noun1},${noun2},${adj},and${verb}`;
//
// }
//   else{
//     myText="Please give me words so I can mke your Mad Lib!";
//
//   }

  madlib.innerHTML=myText;
});
