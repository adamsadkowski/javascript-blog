'use strict';
const clickedElement = this;
function titleClickHandler(event){
  event.preventDefault();
  console.log('Link was clicked!');
  console.log(event);

  /* [DONE] remove class 'active' from all article links  */

const activeLinks = document.querySelectorAll('.titles a.active');

for(let activeLink of activeLinks){
  activeLink.classList.remove('active');
}

  /* [DONE] add class 'active' to the clicked link */
  const clickedElement = this;

  clickedElement.classList.add('active')
  console.log('clickedElement (with plus): ' + clickedElement);

  /* [DONE] remove class 'active' from all articles */

const activeArticles = document.querySelectorAll('.post');

for(let activeArticle of activeArticles){
  activeArticle.classList.remove('active');
}

  /* get 'href' attribute from the clicked link */

  const articleSelector = document.querySelectorAll('.article'); // ********* is bad
  articleSelector.getAttribute('article');
  alert(articleSelector);
  console.log(articleSelector);

  /* find the correct article using the selector (value of 'href' attribute) */

  const targetArticle = document.querySelector(articleSelector); // ******* to check
  console.log(targetArticle);

  /* add class 'active' to the correct article */

  clickedElement.classList.add('article')
  console.log('clickedElement (with plus): ' + clickedElement);   // ******* to chcek

}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}