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
