// Ricreiamo un feed social aggiungendo al layout di base fornito (allegato sotto) il nostro codice javascript in cui:
// - Creiamo il nostro array di 5 oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data, testo del post, immagine, numero di likes.
// Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es: https://picsum.photos/id/237/600/350
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
// Inserire a inizio del file JavaScript una sezione di commento dove scrivere gli step richiesti di logica in italiano, per aiutarvi a ragionare prima della stesura del codice.

// 1) Creare array di oggetti con i post

const posts = [
  // Post 1
  {
    autore: "Phil Mangione",
    profilo: "https://unsplash.it/300/300?image=15",
    data: "4 mesi fa",
    testo:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    img: "https://unsplash.it/600/300?image=171",
    likes: 40,
  },
  //   Post 2
  {
    autore: "Maria Rossi",
    profilo: "https://unsplash.it/300/300?image=17",
    data: "1 giorno fa",
    testo:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    img: "https://picsum.photos/id/1005/600/300",
    likes: 120,
  },
  //   Post 3
  {
    autore: "Alice Sergio",
    profilo: "https://unsplash.it/300/300?image=19",
    data: "2 settimane fa",
    testo:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    img: "https://picsum.photos/id/1000/600/300",
    likes: 100,
  },
  //   Post 4
  {
    autore: "Andrea Davide Bambury",
    profilo: "https://unsplash.it/300/300?image=18",
    data: "ieri",
    testo:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    img: "https://picsum.photos/id/1018/600/300",
    likes: 300,
  },
  // Post 5
  {
    autore: "Mariangela Sabato",
    profilo: "https://unsplash.it/300/300?image=10",
    data: "3 giorni fa",
    testo:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    img: "https://picsum.photos/id/1025/600/300",
    likes: 282,
  },
];

console.log(posts);

// 2) Inserire nel DOM i miei post utilizzando la struttura presente.

// 2a) Individuo elemento a cui appendere i post
const postWall = document.querySelector(".posts-list");

// 2b) Richiamo la funzione creata per generare i nuovi post
getPostItem(postWall, posts);

/**********************
FUNZIONI
**********************/
/*
Generazione post e print a schermo
*/

function getPostItem(postWall, posts) {
  // Pulisco HTML da elementi
  postWall.innerHTML = "";

  //   Faccio ciclo per iterare nell'array degli oggetti
  for (let i = 0; i < posts.length; i++) {
    const postItem = posts[i];
    postWall.innerHTML += `<div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${postItem.profilo}" alt="${postItem.autore}">                   
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${postItem.autore}</div>
                 <div class="post-meta__time">${postItem.data}</div>
                </div>                    
                </div>
            </div>
            <div class="post__text">${postItem.testo}</div>
            <div class="post__image">
                <img src="${postItem.img}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${postItem.likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>`;
  }
}
