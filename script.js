// fungsi untuk beralih ke halaman pilar
const btn = document.querySelector('#pilar .btn');
btn.addEventListener('click', () => {
    window.location.href = 'pilar.html'
});

// fungsi untuk scroll ke pilar
const readMore = document.querySelector('header button');
readMore.addEventListener('click', () => {
    const pilar = document.getElementById('pilar');
    pilar.scrollIntoView({ behavior: 'smooth' });
});

// rubah teks
const textPilar = document.querySelector('#pilar .desc p');
textPilar.innerHTML = "M.A.T.A. <em>(Meta Advance Tactical Agency)</em> adalah agensi di Cyberaya yang didirikan oleh Dato' Othman dan dibagi oleh empat pilar";

// ganti navbar about ke pilar
// ambil parent
const navItem = document.querySelector('.navbar .nav-item:nth-child(2)');
// ambil child about
const about = document.querySelector('.navbar .nav-item:nth-child(2) .nav-link');
// buat tag a baru
const aPilar = document.createElement('a');
// buat elemen
const textPilar2 = document.createTextNode('Pilar');
// masukkan element ke tag a
aPilar.appendChild(textPilar2);
// ganti tag a
navItem.replaceChild(aPilar, about);
aPilar.setAttribute('class', 'nav-link');
aPilar.style.cursor = 'pointer';

// fungsi untuk scroll ke halaman pilar
aPilar.addEventListener('click', () => {
    const pilar = document.getElementById('pilar');
    pilar.scrollIntoView({ behavior: 'smooth' });
});

// fungsi untuk scroll ke halaman utama
const home = document.querySelector('.nav-item:first-child .nav-link');
home.addEventListener('click', () => {
    home.scrollIntoView({top: 0, behavior: 'smooth' });
});


// tambah class
// ambil parent
const navbarCollapse = document.querySelector('.navbar .navbar-collapse');
// tambah kelas
navbarCollapse.classList.add('justify-content-end');


// tambah nav-item
// buat nav-item
const navItemBaru1 = document.createElement('li');
// ambil parent
const navbarNav = document.querySelector('.navbar .navbar-nav');
// ambil child paling akhir
const liAkhir = document.querySelector('.navbar .nav-item:last-child');
// tambah nav-item
navbarNav.insertBefore(navItemBaru1, liAkhir);
// tambah atribut
navItemBaru1.setAttribute('class', 'nav-item');
// buat a baru
const aBaru1 = document.createElement('a');
// buat teks
const teksABaru1 = document.createTextNode('Ketua Pilar');
// masukkan teks
aBaru1.appendChild(teksABaru1);
// tambah tag a ke parent
navItemBaru1.appendChild(aBaru1);
// tambah kelas
aBaru1.setAttribute('class', 'nav-link');
navItemBaru1.style.cursor = 'pointer';

navItemBaru1.addEventListener('click', () => {
    const ketua = document.getElementById('ketua');
    ketua.scrollIntoView({ behavior: 'smooth' });
});


// buat li baru ke dua
const navItemBaru2 = document.createElement('li');
// masukkan ke parent dan sibling paling akhir
navbarNav.insertBefore(navItemBaru2, liAkhir);
// tambah atribut
navItemBaru2.setAttribute('class', 'nav-item');
// buat a baru sebagai child
const aBaru2 = document.createElement('a');
// buat teks
const textBaru2 = document.createTextNode('Top Ejen');
// masukkan teks
aBaru2.appendChild(textBaru2);
// tambah tag a ke parent
navItemBaru2.appendChild(aBaru2);
// tambah kelas
aBaru2.setAttribute('class', 'nav-link');
navItemBaru2.style.cursor = 'pointer';
// fungsi untuk scroll ke top ejen
navItemBaru2.addEventListener('click', () => {
    const top = document.getElementById('top');
    top.scrollIntoView({ behavior: 'smooth' });
});


// buat li baru ketiga
const navItemBaru3 = document.createElement('li');
// masukkan ke parent dan sibling paling akhir
navbarNav.insertBefore(navItemBaru3, liAkhir);
// tambah atribut
navItemBaru3.setAttribute('class', 'nav-item');
// buat a baru
const aBaru3 = document.createElement('a');
// buat teks
const textBaru3 = document.createTextNode('Mentor');
// masukkan teks
aBaru3.appendChild(textBaru3);
// masukkan tag a ke parent
navItemBaru3.appendChild(aBaru3);
// tambah kelas
aBaru3.setAttribute('class', 'nav-link');
navItemBaru3.style.cursor = 'pointer';
// fungsi untuk scroll ke mentor
navItemBaru3.addEventListener('click', () => {
    const mentor = document.getElementById('mentor');
    mentor.scrollIntoView({ behavior: 'smooth' });
});


// buat li baru keempat
const navItemBaru4 = document.createElement('li');
// masukkan ke parent dan sibling paling akhir
navbarNav.insertBefore(navItemBaru4, liAkhir);
// tambah atribut class
navItemBaru4.setAttribute('class', 'nav-item');
// buat a baru sebagai sibling
const aBaru4 = document.createElement('a');
// buat teks
const textBaru4 = document.createTextNode('Top Ejen in Akademi');
// masukkan teks
aBaru4.appendChild(textBaru4);
// masukkan tag a ke parent
navItemBaru4.appendChild(aBaru4);
// tambah attribute class
aBaru4.setAttribute('class', 'nav-link');
navItemBaru4.style.cursor = 'pointer';
// fungsi untuk scroll ke top ejen in akademi
navItemBaru4.addEventListener('click', () => {
    const topEjen = document.getElementById('ejen');
    topEjen.scrollIntoView({ behavior: 'smooth' });
});


// buat li baru kelima
const navItemBaru5 = document.createElement('li');
// masukkan ke parent dan sibling paling akhir
navbarNav.insertBefore(navItemBaru5, liAkhir);
// tambah atribut
navItemBaru5.setAttribute('class', 'nav-item');
// buat a baru
const aBaru5 = document.createElement('a');
// buat teks
const textBaru5 = document.createTextNode('Other');
// masukkan teks
aBaru5.appendChild(textBaru5);
// masukkan tag a ke parent
navItemBaru5.appendChild(aBaru5);
// tambah kelas
aBaru5.setAttribute('class', 'nav-link');
navItemBaru5.style.cursor = 'pointer';
// fungsi untuk scroll ke pilar
navItemBaru5.addEventListener('click', () => {
    const other = document.getElementById('other');
    other.scrollIntoView({ behavior: 'smooth' });
});


// ambil parent id neuro
const neuroElements = document.querySelectorAll('#neuro .card-body');
neuroElements.forEach(function(bg) {
    bg.style.backgroundColor = 'yellow';
});

const neuroH2 = document.querySelectorAll('#neuro .card-body h2');
neuroH2.forEach(function(text) {
    text.style.color = 'black';
});

const neuroSpan = document.querySelectorAll('#neuro .card-body span');
neuroSpan.forEach(function(text) {
    text.style.color = 'black';
});


// ambil parent id tekno
const teknoElements = document.querySelectorAll('#tekno .card-body');
teknoElements.forEach(function(bg) {
    bg.style.backgroundColor = 'red';
});

const teknoH2 = document.querySelectorAll('#tekno .card-body h2');
teknoH2.forEach(function(text) {
    text.style.color = 'black';
});

const teknoSpan = document.querySelectorAll('#tekno .card-body span');
teknoSpan.forEach(function(text) {
    text.style.color = 'black';
});


// ambil parent id inviso
const invisoElements = document.querySelectorAll('#inviso .card-body');
invisoElements.forEach(function(bg) {
    bg.style.backgroundColor = 'grey';
});

const invisoH2 = document.querySelectorAll('#inviso .card-body h2');
invisoH2.forEach(function(text) {
    text.style.color = 'black';
});

const invisoSpan = document.querySelectorAll('#inviso .card-body span');
invisoSpan.forEach(function(text) {
    text.style.color = 'black';
});


// ambil parent id kombat
const kombatElements = document.querySelectorAll('#kombat .card-body');
kombatElements.forEach(function(bg) {
    bg.style.backgroundColor = 'blue';
});

const kombatH2 = document.querySelectorAll('#kombat .card-body h2');
kombatH2.forEach(function(text) {
    text.style.color = 'white';
});

const kombatSpan = document.querySelectorAll('#kombat .card-body span');
kombatSpan.forEach(function(text) {
    text.style.color = 'white';
});


// tambah anggota inviso
// ambil parent
const other = document.querySelector('#other .container .slider');
// ambil sibling setelahnya
const sibling = document.querySelector('#other .container .slider .profil:nth-child(9)');
// buat card baru
const cardBaru = document.createElement('div');
// masukkan tag baru
other.insertBefore(cardBaru, sibling);
// tambah attribut
cardBaru.setAttribute('class', 'profil');
cardBaru.setAttribute('id', 'inviso');

// buat tag img
const imgBaru = document.createElement('img');
// buat src
const srcBaru = document.createAttribute('src');
// masukkan src
srcBaru.value = 'gambar/comot.jpeg';
// masukkan img ke card
cardBaru.appendChild(imgBaru);
// masukkan src ke img
imgBaru.setAttributeNode(srcBaru);

// buat element card-body
const cardBodyBaru = document.createElement('div');
// masukkan card-body ke card
cardBaru.appendChild(cardBodyBaru);
// tambah attribut
cardBodyBaru.setAttribute('class', 'card-body');
cardBodyBaru.style.backgroundColor = 'grey';

// buat element h2
const h2Baru = document.createElement('h2');
// buat teks
h2Baru.innerHTML = 'Ejen Comot';
// masukkan h2 ke card-body
cardBodyBaru.appendChild(h2Baru);
h2Baru.style.color = 'black';

// buat element span
const spanBaru = document.createElement('span');
// buat teks
spanBaru.innerHTML = 'Pilar Inviso';
// masukkan span ke card-body
cardBodyBaru.appendChild(spanBaru);
spanBaru.style.color = 'black';
