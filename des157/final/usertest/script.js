(function () {
    'use strict';

  alert("Hello, welcome to my final project.")
  alert(  "I apologize for the missing content; I am still working on my assignment. Please let me know:"+
    "1.If there are any elements out of alignment"+
    "2.If any of the javascript/eventlisteners aren't working"+
    "3. Any feedback/help with code! Or design feedback :)"
   );
    const squares = document.querySelectorAll('.square');



    const navLinks=document.querySelectorAll('nav ul li a');

    navLinks.forEach(function(eachLink){
      eachLink.addEventListener('click',smoothScroll);
    });

    // const counters=document.querySelectorAll('.counter');
    //
    // counters.forEach(counter=>{
    //   counter.innerText='0';
    //
    //   const updateCounter=()=>{
    //
    //     const target=+counter.getAttribute('data-target');
    //      const c =+counter.innerText;
    //      // const increment=target/500;
    //      if(c<target){
    //       counter.innerText=c+1;
    //       setTimeout(updateCounter,1);
    //     }else{
    //       counter.innerText=target;
    //     }
    //   };
    //   updateCounter;
    // });

    function smoothScroll(event){
      event.preventDefault();


      const targetID=event.target.getAttribute('href');
      const targetAnchor=document.querySelector(targetID);


      const originalTop=Math.floor(targetAnchor.getBoundingClientRect().top) -200;
      window.scrollBy({top:originalTop, left:0, behavior:'smooth'});
      console.log(originalTop);


      // console.log(targetAnchor.getBoundingClientRect().top);
    }
})();

window.addEventListener('load',function(){
  'use strict';
  const navLinks=document.querySelectorAll('nav ul li a');
  const posts=document.querySelectorAll('section');
  let postTops=[];
  let pageTop;
  let counter=1;
  let prevCounter=1;
  let doneResizing;

  // console.log(posts[0].getBoundingClientRect().top + window.pageYOffset);
  posts.forEach(function(post){
    postTops.push(Math.floor(post.getBoundingClientRect().top)+window.
    pageYOffset);
  });
  console.log(postTops);

  window.addEventListener('scroll',function(){
    pageTop = window.pageYOffset +250;
    // console.log(pageTop);
    if (pageTop>postTops[counter]){
      counter++;
      console.log(`scrolling down ${counter}`);
    }
    else if (counter > 1 && pageTop<postTops[counter - 1]){
      counter--;
      console.log(`scrolling up ${counter}`);
    }
    if (counter != prevCounter){
      navLinks.forEach(function(eachLink){
        eachLink.removeAttribute('class');
      });
      const thisLink=document.querySelector(`nav ul li:nth-child(${counter}) a`);

      thisLink.className = 'selected';
      prevCounter = counter;
      }
    });
    window.addEventListener('resize',function(){
      clearTimeout(doneResizing);
      doneResizing=setTimeout(function(){
        resetPagePosition();
      },500);
    });


    function resetPagePosition(){
      postTops=[];
      posts.forEach(function(post){
        postTops.push(Math.floor(post.getBoundClientRect().top)+window.pageYOffset);

      });
      const pagePosition=window.pageYOsset+250;
      counter=0;
      postTops.forEach(function(post){if(pagePosition>post){counter++;
      }});
      navLinks.forEach(function(eachLink){eachLink.removeAttribute('class')
      ;});
      const thisLink=document.querySelector(`nav ul li:nth-child ${counter}) a`);
      thisLink.className='selected';
    }

    function transitionSquares() {
      squares.forEach(function(square, i) {
         if (i == counter) {
            square.classList.add('focus');
         }
         else {
            square.classList.remove('focus');
         }
      });
   }

});












//     const navLinks=document.querySelectorAll('nav ul li a');
//
//     navLinks.forEach(function(eachLink){
//       eachLink.addEventListener('click',smoothScroll);
//     });
//
//     function smoothScroll(event){
//       event.preventDefault();
//
//
//       const targetID=event.target.getAttribute('href');
//       const targetAnchor=document.querySelector(targetID);
//
//
//       const originalTop=Math.floor(targetAnchor.getBoundingClientRect().top) -200;
//       window.scrollBy({top:originalTop, left:0, behavior:'smooth'});
//       console.log(originalTop);
//
//
//       // console.log(targetAnchor.getBoundingClientRect().top);
//     }
// })();
//
// window.addEventListener('load',function(){
//   'use strict';
//   const navLinks=document.querySelectorAll('nav ul li a');
//   const posts=document.querySelectorAll('section');
//   let postTops=[];
//   let pageTop;
//   let counter=1;
//   let prevCounter=1;
//   let doneResizing;
//
//   // console.log(posts[0].getBoundingClientRect().top + window.pageYOffset);
//   posts.forEach(function(post){
//     postTops.push(Math.floor(post.getBoundingClientRect().top)+window.
//     pageYOffset);
//   });
//   console.log(postTops);
//
//   window.addEventListener('scroll',function(){
//     pageTop = window.pageYOffset +250;
//     // console.log(pageTop);
//     if (pageTop>postTops[counter]){
//       counter++;
//       console.log(`scrolling down ${counter}`);
//     }
//     else if (counter > 1 && pageTop<postTops[counter - 1]){
//       counter--;
//       console.log(`scrolling up ${counter}`);
//     }
//     if (counter != prevCounter){
//       navLinks.forEach(function(eachLink){
//         eachLink.removeAttribute('class');
//       });
//       const thisLink=document.querySelector(`nav ul li:nth-child(${counter}) a`);
//
//       thisLink.className = 'selected';
//       prevCounter = counter;
//       }
//     });
//     // window.addEventListener('resize',function(){
//     //   clearTimeout(doneResizing);
//     //   doneResizing=setTimeput(function(){
//     //     resetPagePosition();
//     //   },500);
//     // });
//
//
//     function resetPagePosition(){
//       postTops=[];
//       posts.forEach(function(post){
//         postTops.push(Math.floor(post.getBoundClientRect().top)+window.pageYOffset);
//
//       });
//       const pagePosition=window.pageYOsset+250;
//       counter=0;
//       postTops.forEach(function(post){if(pagePosition>post){counter++;
//       }});
//       navLinks.forEach(function(eachLink){eachLink.removeAttribute('class')
//       ;});
//       const thisLink=document.querySelector(`nav ul li:nth-child ${counter}) a`);
//       thisLink.className='selected';
//     }
// });
