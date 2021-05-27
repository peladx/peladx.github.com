(function () {
    'use strict';

    const squares=document.querySelector('.square');
    const paragraph=document.querySelector('#time article ')
    const numParagraphs=3;
    const transitionLength=1000;
    let scrolling=false;
    let currentImg=0;

    window.addEventListener('scroll', function(event){
      if(!scrolling){
        scrolling=true;
      }
      if(event.deltaY>0&& currentImg>0){
        currentImg--;
      }
      else{
        scrolling=false;
      }
    });

    function squaresmove(){
      squares.forEach(function(square,i)){
        if(i==currentImg){
          dot.classList.add('firstpic');

        }else{
          dot.classList.remove('firstpic');
        }
      }
    }










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
