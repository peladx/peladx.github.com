(function () {
    'use strict';

    const squares = document.querySelectorAll('.square');


//setting up the timeline events with the nav and links
    const navLinks=document.querySelectorAll('nav ul li a');

    navLinks.forEach(function(eachLink){
      eachLink.addEventListener('click',smoothScroll);
    });

    squares.forEach(function(eachLink){
      eachLink.addEventListener('click',smoothScroll);
    });

//smoothscroll
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
//for timeline scroll and click on link
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
    postTops.push(Math.floor(post.getBoundingClientRect().top) - 20);
  });
  console.log(postTops);

  window.addEventListener('scroll',function(){
    pageTop = window.pageYOffset;
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
      const squares=document.getElementById('squares').children;
      const thisSquare = squares[counter-1];
      console.log(thisSquare);

      for (var i = 0; i < squares.length; i++) {
          squares[i].className = 'square';
      }

      thisLink.className = 'selected';
      thisSquare.className = 'square focus';

      prevCounter = counter;
      }
    });
    window.addEventListener('resize',function(){
      clearTimeout(doneResizing);
      doneResizing=setTimeout(function(){
        resetPagePosition();
      },500);
    });

//resetting page
    function resetPagePosition(){
      postTops=[];
      posts.forEach(function(post){
        postTops.push(Math.floor(post.getBoundingClientRect().top)+window.pageYOffset);

      });
      const pagePosition=window.pageYOffet;
      counter=0;
      postTops.forEach(function(post){if(pagePosition>post){counter++;
      }});
      navLinks.forEach(function(eachLink){eachLink.removeAttribute('class')
      ;});
      console.log(counter);
      const thisLink=document.querySelector(`nav ul li:nth-child ${counter}) a`);
      thisLink.className='selected';
    }



});
