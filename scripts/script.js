// script.js

import { router } from './router.js'; // Router imported so you can use it to manipulate your SPA app here
const setState = router.setState;

// Make sure you register your service worker here too

document.addEventListener('DOMContentLoaded', () => {
  fetch('https://cse110lab6.herokuapp.com/entries')
    .then(response => response.json())
    .then(entries => {
      entries.forEach(entry => {
        let newPost = document.createElement('journal-entry');
        newPost.entry = entry;

        newPost.shadowRoot.querySelector('article').addEventListener('click', event => {
          console.log('clicked single entry');
          document.querySelector('body').className = 'single-entry';

          let num = 1;
          for(let i = 0; i < entries.length; i++) {
            if(newPost.entry.title == entry.title) {
              console.log(newPost.entry.title);
              console.log(entry.title);
              console.log(i);
              num = 10 - i;
            }
          }
          document.querySelector('h1').innerText = 'Entry' + ' ' + num;

          let singleEntry = document.querySelector('entry-page');
          singleEntry.entry = newPost.entry; 
          
        });

        document.querySelector('main').appendChild(newPost);
      });
    });
});
