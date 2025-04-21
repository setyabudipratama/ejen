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
textPilar.innerHTML = "M.A.T.A. <em>(Meta Advance Tactical Agency)</em> adalah agensi di Cyberaya yang didirikan oleh Dato' Othman dan dibagi oleh empat pilar. <br> <em><strong>(WAU Animation)</strong></em>";
textPilar.style.fontSize = '1rem';

// ganti navbar about ke pilar
// ambil parent
const navItem = document.querySelector('.navbar .nav-item:nth-child(2)');
// ambil sibling yang diganti
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

// rubah tinggi button
const btnPilar = document.querySelector('#pilar .btn');
btnPilar.style.height = '45px';

// fungsi untuk scroll ke halaman utama
const home = document.querySelector('.nav-item:first-child .nav-link');
home.addEventListener('click', () => {
    home.scrollIntoView({ top: 0, behavior: 'smooth' });
});


// tambah class
// ambil parent
const navbarCollapse = document.querySelector('.navbar .navbar-collapse');
// tambah kelas
navbarCollapse.classList.add('justify-content-end');


// rubah zIndex navbar
const navbar = document.querySelector('.navbar');
navbar.style.zIndex = '1000';


// tambah nav-item
// buat nav-item
const navItemBaru1 = document.createElement('li');
// ambil parent
const navbarNav = document.querySelector('.navbar .navbar-nav');
// ambil sibling paling akhir
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
// fungsi untuk scroll ke ketua pilar
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
const textBaru2 = document.createTextNode('Senior');
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
const textSenior = document.querySelector('#top h1');
textSenior.innerHTML = 'Senior';


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
const textBaru4 = document.createTextNode('Top Ejen');
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
neuroElements.forEach(function (bg) {
    bg.style.backgroundColor = 'yellow';
});

const neuroH2 = document.querySelectorAll('#neuro .card-body h2');
neuroH2.forEach(function (text) {
    text.style.color = 'black';
});

const neuroSpan = document.querySelectorAll('#neuro .card-body span');
neuroSpan.forEach(function (text) {
    text.style.color = 'black';
});


// ambil parent id tekno
const teknoElements = document.querySelectorAll('#tekno .card-body');
teknoElements.forEach(function (bg) {
    bg.style.backgroundColor = 'red';
});

const teknoH2 = document.querySelectorAll('#tekno .card-body h2');
teknoH2.forEach(function (text) {
    text.style.color = 'black';
});

const teknoSpan = document.querySelectorAll('#tekno .card-body span');
teknoSpan.forEach(function (text) {
    text.style.color = 'black';
});


// ambil parent id inviso
const invisoElements = document.querySelectorAll('#inviso .card-body');
invisoElements.forEach(function (bg) {
    bg.style.backgroundColor = 'grey';
});

const invisoH2 = document.querySelectorAll('#inviso .card-body h2');
invisoH2.forEach(function (text) {
    text.style.color = 'black';
});

const invisoSpan = document.querySelectorAll('#inviso .card-body span');
invisoSpan.forEach(function (text) {
    text.style.color = 'black';
});


// ambil parent id kombat
const kombatElements = document.querySelectorAll('#kombat .card-body');
kombatElements.forEach(function (bg) {
    bg.style.backgroundColor = 'blue';
});

const kombatH2 = document.querySelectorAll('#kombat .card-body h2');
kombatH2.forEach(function (text) {
    text.style.color = 'white';
});

const kombatSpan = document.querySelectorAll('#kombat .card-body span');
kombatSpan.forEach(function (text) {
    text.style.color = 'white';
});


// DOM
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
srcBaru.value = 'gambar/comot.webp';
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


// beri class khusus pada ejen yang telah gugur
// ambil parent
const clsZain = document.querySelector('#ketua .profil');
const clsDjin = document.querySelector('#ketua .profil:nth-child(3)');
const clsAliya = document.querySelector('#top .profil:nth-child(2)');
// tambah kelas
clsZain.classList.add('gugur');
clsDjin.classList.add('gugur');
clsAliya.classList.add('gugur');


// efek greyscale pada ejen yang gugur
const gugur = document.querySelectorAll('.gugur');
const ejenZain = document.querySelector('#ketua .gugur img');
const ejenDjin = document.querySelector('#ketua .gugur img');
const ejenAliya = document.querySelector('#top .gugur img');

gugur.forEach(function (filter) {
    filter.style.filter = 'grayscale(100%)';
    filter.style.transition = 'all 0.5s ease';
    filter.addEventListener('mouseenter', function () {
        this.style.filter = 'grayscale(0%)';
    });
    filter.addEventListener('mouseleave', function () {
        this.style.filter = 'grayscale(100%)';
    });
});


// rubah posisi header
const containerHeader = document.querySelector('header .container');
Object.assign(containerHeader.style, {
    position: 'relative',
    top: '28%',
});


// DOM
// tambah halaman project iris
// ambil parent
const body = document.querySelector('body');
// ambil sibling setelahnya
const ketua = document.getElementById('ketua');
// tag section
const iris = document.createElement('section');
// masukkan element baru
body.insertBefore(iris, ketua);
// tambah attribut
iris.setAttribute('id', 'iris');
const irisStyles = document.querySelector('#iris');
Object.assign(irisStyles.style, {
    width: '100%',
    height: '95vh',
    background: 'linear-gradient(to left, black 0%, skyblue 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
});

// class container
const container = document.createElement('div');
// masukkan container ke iris
iris.appendChild(container);
// tambah attribut
container.setAttribute('class', 'container');
Object.assign(container.style, {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: '90%',
    margin: '0 auto'
});

// tambah tag h1
const h1 = document.createElement('h1');
// buat teks
const textH1 = document.createTextNode('Project Iris');
// masukkan teks
h1.appendChild(textH1);
// masukkan tag h1 ke parent
container.appendChild(h1);
const h1Styles = document.querySelector('#iris h1');
Object.assign(h1Styles.style, {
    color: '#ffffff',
    fontSize: '1.5rem',
    fontFamily: 'pacifico',
    position: 'relative',
    top: '0',
    margin: '0',
    cursor: 'default'
});

// class content
const content = document.createElement('div');
// insertAdjacentElement untuk menambahkan elemen ke sibling
// afterend untuk menambahkan elemen setelahnya
// h2.insertAdjacentElement('afterend', content);
container.appendChild(content);
content.setAttribute('class', 'content');
Object.assign(content.style, {
    width: '100%',
    minHeight: '50vh',
    display: 'flex',
    flexWrap: 'wrap-reverse',
    flexDirection: 'row',
    alignItems: 'center'
});

// class image
const image = document.createElement('div');
content.appendChild(image);
image.setAttribute('class', 'image');
Object.assign(image.style, {
    width: '40%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: '10px'
});

// class image2
const image2 = document.createElement('div');
image.appendChild(image2);
image2.setAttribute('class', 'image2');
Object.assign(image2.style, {
    width: '250px',
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative'
});

// tag img
const img = document.createElement('img');
// masukkan img ke image2
image2.appendChild(img);
// tambah attribut
img.setAttribute('src', 'gambar/iris.webp');
img.setAttribute('class', 'slide');
Object.assign(img.style, {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    marginTop: '50px',
    transition: 'all 0.5s ease',
    position: 'absolute',
    opacity: '0'
});

// tag img 2
const img2 = document.createElement('img');
// masukkan img ke image2
image2.appendChild(img2);
// tambah attribut
img2.setAttribute('src', 'gambar/Ejen Alicia(2).webp');
img2.setAttribute('class', 'slide');
Object.assign(img2.style, {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'all 0.5s ease',
    position: 'absolute',
    opacity: '0'
});

// tag img 3
const img3 = document.createElement('img');
// masukkan img ke image2
image2.appendChild(img3);
// tambah attribut
img3.setAttribute('src', 'gambar/Ejen Alicia (1).webp');
img3.setAttribute('class', 'slide');
Object.assign(img3.style, {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'all 0.5s ease',
    position: 'absolute',
    opacity: '0'
});

// class btn
const prevBtn = document.createElement('button');
const nextBtn = document.createElement('button');
image.appendChild(prevBtn);
image.appendChild(nextBtn);
prevBtn.setAttribute('class', 'prev');
nextBtn.setAttribute('class', 'next');
prevBtn.innerHTML = '<i class="fas fa-angle-left"></i>';
nextBtn.innerHTML = '<i class="fas fa-angle-right"></i>';
Object.assign(prevBtn.style, {
    fontSize: '1.5rem',
    cursor: 'pointer',
    position: 'absolute',
    top: '50%',
    left: '9%',
    borderRadius: '50%',
    width: '35px',
    height: '35px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    zIndex: '5',
})
Object.assign(nextBtn.style, {
    fontSize: '1.5rem',
    cursor: 'pointer',
    position: 'absolute',
    top: '50%',
    left: '35%',
    borderRadius: '50%',
    width: '35px',
    height: '35px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    zIndex: '5',
})

// index yang aktif
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
// menghitung jumlah slide
const totalSlides = slides.length;

// fungsi untuk menampilkan slide berdasarkan index yang aktif
function showSlides() {
    slides.forEach((slide, i) => {
        // menghilangkan gambar dan hapus kelas aktif dari semua gambar
        slide.style.opacity = '0';
        slide.style.zIndex = '0';
        slide.classList.remove('active');
        if (i === currentIndex) {
            // tampilkan gambar yang aktif
            slide.style.opacity = '1';
            slide.style.zIndex = '1';
            // tambahkan kelas aktif
            slide.classList.add('active');
        }
    });
}

// panggil fungsi
showSlides();

// event listener untuk tombol next
document.querySelector('.next').addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlides();
});

// event listener untuk tombol prev
document.querySelector('.prev').addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlides();
});

// tag span
const span = document.createElement('span');
image2.insertBefore(span, img2);
const textSpan = document.createTextNode('I.R.I.S.');
span.appendChild(textSpan);
Object.assign(span.style, {
    position: 'absolute',
    bottom: '10%',
    fontSize: '1rem',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'default',
    opacity: '0',
    transform: 'translateY(50%)',
    transition: 'all 0.5s ease'
});

img.addEventListener('mouseenter', function () {
    span.style.opacity = '1';
    span.style.zIndex = '1';
    span.style.transform = 'translateY(0)';
    img.style.filter = 'brightness(0.7)';
});
img.addEventListener('mouseleave', function () {
    span.style.opacity = '0';
    span.style.zIndex = '0';
    span.style.transform = 'translateY(50%)';
    img.style.filter = 'brightness(1)';
});

// tag span2
const span2 = document.createElement('span');
image2.appendChild(span2);
const textSpan2 = document.createTextNode('Ejen Alicia');
span2.appendChild(textSpan2);
Object.assign(span2.style, {
    position: 'absolute',
    bottom: '10%',
    fontSize: '1rem',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'default',
    opacity: '0',
    transform: 'translateY(50%)',
    transition: 'all 0.5s ease'
});

img2.addEventListener('mouseenter', function () {
    span2.style.opacity = '1';
    span2.style.zIndex = '1';
    span2.style.transform = 'translateY(0)';
    img2.style.filter = 'brightness(0.7)';
});
img2.addEventListener('mouseleave', function () {
    span2.style.opacity = '0';
    span2.style.zIndex = '0';
    span2.style.transform = 'translateY(50%)';
    img2.style.filter = 'brightness(1)';
});

// tag span3
const span3 = document.createElement('span');
image2.appendChild(span3);
const textSpan3 = document.createTextNode('Ejen Alicia');
span3.appendChild(textSpan3);
Object.assign(span3.style, {
    position: 'absolute',
    bottom: '10%',
    fontSize: '1rem',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'default',
    opacity: '0',
    transform: 'translateY(50%)',
    transition: 'all 0.5s ease'
});

img3.addEventListener('mouseenter', function () {
    span3.style.opacity = '1';
    span3.style.zIndex = '1';
    span3.style.transform = 'translateY(0)';
    img3.style.filter = 'brightness(0.7)';
});
img3.addEventListener('mouseleave', function () {
    span3.style.opacity = '0';
    span3.style.zIndex = '0';
    span3.style.transform = 'translateY(50%)';
    img3.style.filter = 'brightness(1)';
});

// class desc
const desc = document.createElement('div');
content.appendChild(desc);
desc.setAttribute('class', 'desc');
Object.assign(desc.style, {
    width: '60%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: '10px'
});

// tag h5
const h5 = document.createElement('h5');
// masukkan h5 ke desc
desc.appendChild(h5);
// buat teks
const textH5 = document.createTextNode('I.R.I.S');
// masukkan teks
h5.appendChild(textH5);
Object.assign(h5.style, {
    color: '#ffffff',
    fontSize: '1.3rem',
    fontFamily: 'sans-serif',
    position: 'relative',
    top: '0',
    margin: '0',
    cursor: 'default'
});

// tag p
const p = document.createElement('p');
// masukkan p ke desc
desc.appendChild(p);
// buat teks
const textP = document.createTextNode('IRIS (Infinity Retinal Intelligence System) adalah perangkat yang diciptakan oleh ejen Aliya untuk kemajuan M.A.T.A. dan sebelumnya digunakan oleh ejen Ali karena ketidak sengajaan dalam pertempuran. Tujuan awal diciptakan yaitu untuk memberikan kepada para ejen supaya mempunyai keahlian yang luar biasa. Setelah melewati berbagai akademi dan pertandingan arena, I.R.I.S. secara resmi digunakan oleh ejen Alicia dari pilar neuro.');
// masukkan teks
p.appendChild(textP);
Object.assign(p.style, {
    color: '#ffffff',
    fontSize: '1rem',
    fontFamily: 'sans-serif',
    position: 'relative',
    top: '0',
    margin: '0',
    textAlign: 'justify',
    cursor: 'default'
});

// tag button
const button = document.createElement('button');
// masukkan button ke parent
iris.appendChild(button);
// buat teks
const textButton = document.createTextNode('Read More');
// masukkan teks
button.appendChild(textButton);
button.setAttribute('class', 'btn btn-outline-primary');
button.setAttribute('id', 'irisPage');
Object.assign(button.style, {
    position: 'absolute',
    top: '28%',
    right: '10%',
    zIndex: '4',
    width: '140px',
    height: '45px',
    background: 'none',
    border: '2px solid #dadada',
    color: '#dadada',
    fontSize: '1.1rem',
    fontFamily: 'sans-serif',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10px',
    boxShadow: '5px 5px 10px #101010',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
});

button.addEventListener('mouseenter', function () {
    button.style.background = '#dadada';
    button.style.color = '#101010';
    button.style.boxShadow = 'none';
    button.style.transform = 'scale(1.1)';
});
button.addEventListener('mouseleave', function () {
    button.style.background = 'none';
    button.style.color = '#dadada';
    button.style.boxShadow = '5px 5px 10px #101010';
    button.style.transform = 'scale(1)';
});


// DOM
// ganti warna background slide 'top ejen'
const ejen = document.querySelector('#ejen');
ejen.style.background = 'linear-gradient(to right, olive, var(--black))';


// DOM
// ganti efek hover
const aliciaNeuro = document.querySelector('#ejen .profil:first-child');
Object.assign(aliciaNeuro.style, {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '200px',
});
const imageAliciaNeuro = document.querySelector('#ejen .profil:first-child img');
imageAliciaNeuro.src = 'gambar/Ejen Alicia Neuro.webp';
const cardBodyAlicia = document.querySelector('#ejen .profil:first-child .card-body');
Object.assign(cardBodyAlicia.style, {
    height: '93%',
    transform: 'translateY(0)',
    transition: 'all 0.5s ease',
    borderRadius: '10px'
});
const h2AliciaNeuro = document.querySelector('#ejen .profil:first-child .card-body h2');
Object.assign(h2AliciaNeuro.style, {
    top: '25%',
    transition: 'all 0.5s ease',
    transform: 'translateY(-50%)',
    opacity: '0'
});
const spanAliciaNeuro = document.querySelector('#ejen .profil:first-child .card-body span');
Object.assign(spanAliciaNeuro.style, {
    top: '25%',
    transition: 'all 0.5s ease',
    transform: 'translateY(-50%)',
    opacity: '0'
});
const span2AliciaNeuro = document.querySelector('#ejen .profil:first-child .card-body span:nth-child(3)');
Object.assign(span2AliciaNeuro.style, {
    top: '24%',
    transition: 'all 0.5s ease',
    transform: 'translateY(-50%)',
    opacity: '0'
});
aliciaNeuro.addEventListener('mouseenter', function () {
    Object.assign(imageAliciaNeuro.style, {
        width: '190px',
        height: '190px',
        borderRadius: '50%',
        boxShadow: '5px 5px 10px black'
    });
    Object.assign(cardBodyAlicia.style, {
        height: '180px',
        borderRadius: '100px 100px 10px 10px',
    });
    Object.assign(h2AliciaNeuro.style, {
        transform: 'translateY(0)',
        opacity: '1',
    });
    Object.assign(spanAliciaNeuro.style, {
        transform: 'translateY(0)',
        opacity: '1',
    });
    Object.assign(span2AliciaNeuro.style, {
        transform: 'translateY(0)',
        opacity: '1',
    });
});
aliciaNeuro.addEventListener('mouseleave', function () {
    Object.assign(imageAliciaNeuro.style, {
        width: '',
        height: '',
        borderRadius: '',
    });
    Object.assign(cardBodyAlicia.style, {
        height: '93%',
        borderRadius: '10px',
    });
    Object.assign(h2AliciaNeuro.style, {
        transform: 'translateY(-50%)',
        opacity: '0',
    });
    Object.assign(spanAliciaNeuro.style, {
        transform: 'translateY(-50%)',
        opacity: '0',
    });
    Object.assign(span2AliciaNeuro.style, {
        transform: 'translateY(-50%)',
        opacity: '0',
    });
});

const aliTekno = document.querySelector('#ejen .profil:nth-child(2)');
Object.assign(aliTekno.style, {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '200px',
});
const imageAliTekno = document.querySelector('#ejen .profil:nth-child(2) img');
const cardBodyAli = document.querySelector('#ejen .profil:nth-child(2) .card-body');
Object.assign(cardBodyAli.style, {
    height: '93%',
    transform: 'translateY(0)',
    transition: 'all 0.5s ease',
    borderRadius: '10px'
});
const h2AliTekno = document.querySelector('#ejen .profil:nth-child(2) .card-body h2');
Object.assign(h2AliTekno.style, {
    top: '25%',
    transition: 'all 0.5s ease',
    transform: 'translateY(-50%)',
    opacity: '0'
});
const spanAliTekno = document.querySelector('#ejen .profil:nth-child(2) .card-body span');
Object.assign(spanAliTekno.style, {
    top: '25%',
    transition: 'all 0.5s ease',
    transform: 'translateY(-50%)',
    opacity: '0'
});
const span2AliTekno = document.querySelector('#ejen .profil:nth-child(2) .card-body span:nth-child(3)');
Object.assign(span2AliTekno.style, {
    top: '24%',
    transition: 'all 0.5s ease',
    transform: 'translateY(-50%)',
    opacity: '0'
});
aliTekno.addEventListener('mouseenter', function () {
    Object.assign(imageAliTekno.style, {
        width: '190px',
        height: '190px',
        borderRadius: '50%',
        boxShadow: '5px 5px 10px black'
    });
    Object.assign(cardBodyAli.style, {
        height: '180px',
        borderRadius: '100px 100px 10px 10px',
    });
    Object.assign(h2AliTekno.style, {
        transform: 'translateY(0)',
        opacity: '1',
    });
    Object.assign(spanAliTekno.style, {
        transform: 'translateY(0)',
        opacity: '1',
    });
    Object.assign(span2AliTekno.style, {
        transform: 'translateY(0)',
        opacity: '1',
    });
});
aliTekno.addEventListener('mouseleave', function () {
    Object.assign(imageAliTekno.style, {
        width: '',
        height: '',
        borderRadius: '',
    });
    Object.assign(cardBodyAli.style, {
        height: '93%',
        borderRadius: '10px',
    });
    Object.assign(h2AliTekno.style, {
        transform: 'translateY(-50%)',
        opacity: '0',
    });
    Object.assign(spanAliTekno.style, {
        transform: 'translateY(-50%)',
        opacity: '0',
    });
    Object.assign(span2AliTekno.style, {
        transform: 'translateY(-50%)',
        opacity: '0',
    });
});

const kimTekno = document.querySelector('#ejen .profil:nth-child(3)');
Object.assign(kimTekno.style, {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '200px',
});
const imageKimTekno = document.querySelector('#ejen .profil:nth-child(3) img');
const cardBodyKim = document.querySelector('#ejen .profil:nth-child(3) .card-body');
Object.assign(cardBodyKim.style, {
    height: '93%',
    transform: 'translateY(0)',
    transition: 'all 0.5s ease',
    borderRadius: '10px'
});
const h2KimTekno = document.querySelector('#ejen .profil:nth-child(3) .card-body h2');
Object.assign(h2KimTekno.style, {
    top: '25%',
    transition: 'all 0.5s ease',
    transform: 'translateY(-50%)',
    opacity: '0'
});
const spanKimTekno = document.querySelector('#ejen .profil:nth-child(3) .card-body span');
Object.assign(spanKimTekno.style, {
    top: '25%',
    transition: 'all 0.5s ease',
    transform: 'translateY(-50%)',
    opacity: '0'
});
const span2KimTekno = document.querySelector('#ejen .profil:nth-child(3) .card-body span:nth-child(3)');
Object.assign(span2KimTekno.style, {
    top: '24%',
    transition: 'all 0.5s ease',
    transform: 'translateY(-50%)',
    opacity: '0'
});
kimTekno.addEventListener('mouseenter', function () {
    Object.assign(imageKimTekno.style, {
        width: '190px',
        height: '190px',
        borderRadius: '50%',
        boxShadow: '5px 5px 10px black'
    });
    Object.assign(cardBodyKim.style, {
        height: '180px',
        borderRadius: '100px 100px 10px 10px',
    });
    Object.assign(h2KimTekno.style, {
        transform: 'translateY(0)',
        opacity: '1',
    });
    Object.assign(spanKimTekno.style, {
        transform: 'translateY(0)',
        opacity: '1',
    });
    Object.assign(span2KimTekno.style, {
        transform: 'translateY(0)',
        opacity: '1',
    });
});
kimTekno.addEventListener('mouseleave', function () {
    Object.assign(imageKimTekno.style, {
        width: '',
        height: '',
        borderRadius: '',
    });
    Object.assign(cardBodyKim.style, {
        height: '93%',
        borderRadius: '10px',
    });
    Object.assign(h2KimTekno.style, {
        transform: 'translateY(-50%)',
        opacity: '0',
    });
    Object.assign(spanKimTekno.style, {
        transform: 'translateY(-50%)',
        opacity: '0',
    });
    Object.assign(span2KimTekno.style, {
        transform: 'translateY(-50%)',
        opacity: '0',
    });
});

const samNeuro = document.querySelector('#ejen .profil:nth-child(4)');
Object.assign(samNeuro.style, {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '200px',
});
const imageSamNeuro = document.querySelector('#ejen .profil:nth-child(4) img');
const cardBodySam = document.querySelector('#ejen .profil:nth-child(4) .card-body');
Object.assign(cardBodySam.style, {
    height: '93%',
    transform: 'translateY(0)',
    transition: 'all 0.5s ease',
    borderRadius: '10px'
});
const h2SamNeuro = document.querySelector('#ejen .profil:nth-child(4) .card-body h2');
Object.assign(h2SamNeuro.style, {
    top: '25%',
    transition: 'all 0.5s ease',
    transform: 'translateY(-50%)',
    opacity: '0'
});
const spanSamNeuro = document.querySelector('#ejen .profil:nth-child(4) .card-body span');
Object.assign(spanSamNeuro.style, {
    top: '25%',
    transition: 'all 0.5s ease',
    transform: 'translateY(-50%)',
    opacity: '0'
});
const span2SamNeuro = document.querySelector('#ejen .profil:nth-child(4) .card-body span:nth-child(3)');
Object.assign(span2SamNeuro.style, {
    top: '24%',
    transition: 'all 0.5s ease',
    transform: 'translateY(-50%)',
    opacity: '0'
});
samNeuro.addEventListener('mouseenter', function () {
    Object.assign(imageSamNeuro.style, {
        width: '190px',
        height: '190px',
        borderRadius: '50%',
        boxShadow: '5px 5px 10px black'
    });
    Object.assign(cardBodySam.style, {
        height: '180px',
        borderRadius: '100px 100px 10px 10px',
    });
    Object.assign(h2SamNeuro.style, {
        transform: 'translateY(0)',
        opacity: '1',
    });
    Object.assign(spanSamNeuro.style, {
        transform: 'translateY(0)',
        opacity: '1',
    });
    Object.assign(span2SamNeuro.style, {
        transform: 'translateY(0)',
        opacity: '1',
    });
});
samNeuro.addEventListener('mouseleave', function () {
    Object.assign(imageSamNeuro.style, {
        width: '',
        height: '',
        borderRadius: '',
    });
    Object.assign(cardBodySam.style, {
        height: '93%',
        borderRadius: '10px',
    });
    Object.assign(h2SamNeuro.style, {
        transform: 'translateY(-50%)',
        opacity: '0',
    });
    Object.assign(spanSamNeuro.style, {
        transform: 'translateY(-50%)',
        opacity: '0',
    });
    Object.assign(span2SamNeuro.style, {
        transform: 'translateY(-50%)',
        opacity: '0',
    });
});

// DOM
// tukar posisi top ejen
kimTekno.after(aliTekno);


// DOM
// tambah halaman base M.A.T.A.
// sibling setelahnya
const footer = document.querySelector('footer');
const arena = document.createElement('section');
// masukkan element baru
footer.before(arena);
// tambah attribute
arena.setAttribute('id', 'place');
Object.assign(arena.style, {
    width: '100%',
    height: '100vh',
    background: 'linear-gradient(to left, black 0%, purple 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
});

// class container
const containerArena = document.createElement('div');
containerArena.setAttribute('class', 'container');
// masukkan element baru
arena.appendChild(containerArena);
Object.assign(containerArena.style, {
    width: '90%',
    height: '90%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
});

// tag h1
const h1Arena = document.createElement('h1')
containerArena.appendChild(h1Arena);
const textH1Arena = document.createTextNode('Base M.A.T.A.');
h1Arena.appendChild(textH1Arena);
Object.assign(h1Arena.style, {
    color: '#ffffff',
    fontSize: '1.6rem',
    fontFamily: 'pacifico',
    position: 'relative',
    top: '10%',
    cursor: 'default'
});

// class content
const contentArena = document.createElement('div');
containerArena.appendChild(contentArena);
contentArena.setAttribute('class', 'content');
Object.assign(contentArena.style, {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    overflowX: 'auto',
    columnGap: '30px'
});

// class card
const cardArena = document.createElement('div');
contentArena.appendChild(cardArena);
cardArena.setAttribute('class', 'card');
Object.assign(cardArena.style, {
    width: '230px',
    height: '230px',
    display: 'flex',
    flex: '0 0 auto',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: 'transparent',
    marginLeft: '20px',
    border: 'none'
});

// tag img
const imageArena = document.createElement('img');
cardArena.appendChild(imageArena);
imageArena.setAttribute('src', 'gambar/Savehouse M.A.T.A..webp');
imageArena.setAttribute('alt', 'Savehouse M.A.T.A.');
Object.assign(imageArena.style, {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '10px',
    zIndex: '1',
    transition: 'all 0.5s ease',
    boxShadow: '5px 5px 10px black',
    // transform: 'translate(-20px, -20px)'
});

cardArena.addEventListener('mouseenter', function () {
    imageArena.style.transform = 'translate(-20px, -20px)';
    imageArena.style.boxShadow = 'none';
});

cardArena.addEventListener('mouseleave', function () {
    imageArena.style.transform = '';
    imageArena.style.boxShadow = '5px 5px 10px black';
});

// class card-body
const cardBodyArena = document.createElement('div');
cardArena.appendChild(cardBodyArena);
cardBodyArena.setAttribute('class', 'card-body');
Object.assign(cardBodyArena.style, {
    backgroundColor: 'blue',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: '0',
    borderRadius: '10px',
    transition: 'all 0.5s ease',
    // transform: 'translate(20px, 20px)'
});

cardArena.addEventListener('mouseenter', function () {
    cardBodyArena.style.transform = 'translate(20px, 20px)';
});

cardArena.addEventListener('mouseleave', function () {
    cardBodyArena.style.transform = '';
});

// tag h2
const h2Arena = document.createElement('h2');
cardBodyArena.appendChild(h2Arena);
const h2TextArena = document.createTextNode('Savehouse M.A.T.A.');
h2Arena.appendChild(h2TextArena);
Object.assign(h2Arena.style, {
    color: '#ffffff',
    fontSize: '1.2rem',
    fontFamily: 'sans-serif',
    position: 'relative',
    top: '68%',
    cursor: 'default',
    transition: 'all 0.5s ease',
    transform: 'translateY(-50px)',
    opacity: '0',
});

cardArena.addEventListener('mouseenter', function () {
    h2Arena.style.transform = 'translateY(0)';
    h2Arena.style.opacity = '1';
});

cardArena.addEventListener('mouseleave', function () {
    h2Arena.style.transform = 'translateY(-50px)';
    h2Arena.style.opacity = '0';
});

// tag p
const pArena = document.createElement('p');
cardBodyArena.appendChild(pArena);
const pTextArena = document.createTextNode('Season 1');
pArena.appendChild(pTextArena);
Object.assign(pArena.style, {
    color: '#ffffff',
    fontSize: '1rem',
    fontFamily: 'sans-serif',
    writingMode: 'vertical-lr',
    position: 'relative',
    left: '47%',
    cursor: 'default',
    transition: 'all 0.5s ease',
    transform: 'translateX(-50px)',
    opacity: '0',
});

cardArena.addEventListener('mouseenter', function () {
    pArena.style.transform = 'translateX(0)';
    pArena.style.opacity = '1';
});

cardArena.addEventListener('mouseleave', function () {
    pArena.style.transform = 'translateX(-50px)';
    pArena.style.opacity = '0';
});

// class card2
const cardArena2 = document.createElement('div');
contentArena.appendChild(cardArena2);
cardArena2.setAttribute('class', 'card');
Object.assign(cardArena2.style, {
    width: '230px',
    height: '230px',
    display: 'flex',
    flex: '0 0 auto',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: 'transparent',
    border: 'none'
});

// tag img
const imageArena2 = document.createElement('img');
cardArena2.appendChild(imageArena2);
imageArena2.setAttribute('src', 'gambar/Akademi M.A.T.A..webp');
imageArena2.setAttribute('alt', 'Akademi M.A.T.A.');
Object.assign(imageArena2.style, {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '10px',
    zIndex: '1',
    transition: 'all 0.5s ease',
    boxShadow: '5px 5px 10px black'
    // transform: 'translate(-20px, -20px)'
});

cardArena2.addEventListener('mouseenter', function () {
    imageArena2.style.transform = 'translate(-20px, -20px)';
    imageArena2.style.boxShadow = 'none';
});

cardArena2.addEventListener('mouseleave', function () {
    imageArena2.style.transform = '';
    imageArena2.style.boxShadow = '5px 5px 10px black';
});

// class card-body
const cardBodyArena2 = document.createElement('div');
cardArena2.appendChild(cardBodyArena2);
cardBodyArena2.setAttribute('class', 'card-body');
Object.assign(cardBodyArena2.style, {
    backgroundColor: 'lightblue',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: '0',
    borderRadius: '10px',
    transition: 'all 0.5s ease',
    // transform: 'translate(20px, 20px)'
});

cardArena2.addEventListener('mouseenter', function () {
    cardBodyArena2.style.transform = 'translate(20px, 20px)';
});

cardArena2.addEventListener('mouseleave', function () {
    cardBodyArena2.style.transform = '';
});

// tag h2
const h2Arena2 = document.createElement('h2');
cardBodyArena2.appendChild(h2Arena2);
const h2TextArena2 = document.createTextNode('Akademi M.A.T.A.');
h2Arena2.appendChild(h2TextArena2);
Object.assign(h2Arena2.style, {
    color: '#000000',
    fontSize: '1.2rem',
    fontFamily: 'sans-serif',
    position: 'relative',
    top: '68%',
    cursor: 'default',
    transition: 'all 0.5s ease',
    transform: 'translateY(-50px)',
    opacity: '0',
});

cardArena2.addEventListener('mouseenter', function () {
    h2Arena2.style.transform = 'translateY(0)';
    h2Arena2.style.opacity = '1';
});

cardArena2.addEventListener('mouseleave', function () {
    h2Arena2.style.transform = 'translateY(-50px)';
    h2Arena2.style.opacity = '0';
});

// tag p
const pArena2 = document.createElement('p');
cardBodyArena2.appendChild(pArena2);
const pTextArena2 = document.createTextNode('Season 2');
pArena2.appendChild(pTextArena2);
Object.assign(pArena2.style, {
    color: '#000000',
    fontSize: '1rem',
    fontFamily: 'sans-serif',
    writingMode: 'vertical-lr',
    position: 'relative',
    left: '47%',
    cursor: 'default',
    transition: 'all 0.5s ease',
    transform: 'translateX(-50px)',
    opacity: '0',
});

cardArena2.addEventListener('mouseenter', function () {
    pArena2.style.transform = 'translateX(0)';
    pArena2.style.opacity = '1';
});

cardArena2.addEventListener('mouseleave', function () {
    pArena2.style.transform = 'translateX(-50px)';
    pArena2.style.opacity = '0';
});

// class card3
const cardArena3 = document.createElement('div');
contentArena.appendChild(cardArena3);
cardArena3.setAttribute('class', 'card');
Object.assign(cardArena3.style, {
    width: '230px',
    height: '230px',
    display: 'flex',
    flex: '0 0 auto',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: 'transparent',
    border: 'none'
});

// tag img
const imageArena3 = document.createElement('img');
cardArena3.appendChild(imageArena3);
imageArena3.setAttribute('src', 'gambar/Markas Besar M.A.T.A..webp');
imageArena3.setAttribute('alt', 'Markas Besar M.A.T.A.');
Object.assign(imageArena3.style, {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '10px',
    zIndex: '1',
    transition: 'all 0.5s ease',
    boxShadow: '5px 5px 10px black'
    // transform: 'translate(-20px, -20px)'
});

cardArena3.addEventListener('mouseenter', function () {
    imageArena3.style.transform = 'translate(-20px, -20px)';
    imageArena3.style.boxShadow = 'none';
});

cardArena3.addEventListener('mouseleave', function () {
    imageArena3.style.transform = '';
    imageArena3.style.boxShadow = '5px 5px 10px black';
});

// class card-body
const cardBodyArena3 = document.createElement('div');
cardArena3.appendChild(cardBodyArena3);
cardBodyArena3.setAttribute('class', 'card-body');
Object.assign(cardBodyArena3.style, {
    backgroundColor: 'yellow',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: '0',
    borderRadius: '10px',
    transition: 'all 0.5s ease',
    // transform: 'translate(20px, 20px)'
});

cardArena3.addEventListener('mouseenter', function () {
    cardBodyArena3.style.transform = 'translate(20px, 20px)';
});

cardArena3.addEventListener('mouseleave', function () {
    cardBodyArena3.style.transform = '';
});

// tag h2
const h2Arena3 = document.createElement('h2');
cardBodyArena3.appendChild(h2Arena3);
const h2TextArena3 = document.createTextNode('Markas Besar M.A.T.A.');
h2Arena3.appendChild(h2TextArena3);
Object.assign(h2Arena3.style, {
    color: '#000000',
    fontSize: '1.2rem',
    fontFamily: 'sans-serif',
    position: 'relative',
    top: '87%',
    cursor: 'default',
    transition: 'all 0.5s ease',
    transform: 'translateY(-50px)',
    opacity: '0',
});

cardArena3.addEventListener('mouseenter', function () {
    h2Arena3.style.transform = 'translateY(0)';
    h2Arena3.style.opacity = '1';
});

cardArena3.addEventListener('mouseleave', function () {
    h2Arena3.style.transform = 'translateY(-50px)';
    h2Arena3.style.opacity = '0';
});

// tag p
const pArena3 = document.createElement('p');
cardBodyArena3.appendChild(pArena3);
const pTextArena3 = document.createTextNode('The Movie, Misi: Neo');
pArena3.appendChild(pTextArena3);
Object.assign(pArena3.style, {
    color: '#000000',
    fontSize: '0.9rem',
    fontFamily: 'sans-serif',
    writingMode: 'vertical-lr',
    position: 'relative',
    left: '47%',
    cursor: 'default',
    transition: 'all 0.5s ease',
    transform: 'translateX(-50px)',
    opacity: '0',
});

cardArena3.addEventListener('mouseenter', function () {
    pArena3.style.transform = 'translateX(0)';
    pArena3.style.opacity = '1';
});

cardArena3.addEventListener('mouseleave', function () {
    pArena3.style.transform = 'translateX(-50px)';
    pArena3.style.opacity = '0';
});

// class card4
const cardArena4 = document.createElement('div');
contentArena.appendChild(cardArena4);
cardArena4.setAttribute('class', 'card');
Object.assign(cardArena4.style, {
    width: '230px',
    height: '230px',
    display: 'flex',
    flex: '0 0 auto',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: 'transparent',
    border: 'none'
});

// tag img
const imageArena4 = document.createElement('img');
cardArena4.appendChild(imageArena4);
imageArena4.setAttribute('src', 'gambar/M.A.T.A. Arena.webp');
imageArena4.setAttribute('alt', 'M.A.T.A. Arena');
Object.assign(imageArena4.style, {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '10px',
    zIndex: '1',
    transition: 'all 0.5s ease',
    boxShadow: '5px 5px 10px black'
    // transform: 'translate(-20px, -20px)'
});

cardArena4.addEventListener('mouseenter', function () {
    imageArena4.style.transform = 'translate(-20px, -20px)';
    imageArena4.style.boxShadow = 'none';
});

cardArena4.addEventListener('mouseleave', function () {
    imageArena4.style.transform = '';
    imageArena4.style.boxShadow = '5px 5px 10px black';
});

// class card-body
const cardBodyArena4 = document.createElement('div');
cardArena4.appendChild(cardBodyArena4);
cardBodyArena4.setAttribute('class', 'card-body');
Object.assign(cardBodyArena4.style, {
    backgroundColor: 'lightgrey',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: '0',
    borderRadius: '10px',
    transition: 'all 0.5s ease',
    // transform: 'translate(20px, 20px)'
});

cardArena4.addEventListener('mouseenter', function () {
    cardBodyArena4.style.transform = 'translate(20px, 20px)';
});

cardArena4.addEventListener('mouseleave', function () {
    cardBodyArena4.style.transform = '';
});

// tag h2
const h2Arena4 = document.createElement('h2');
cardBodyArena4.appendChild(h2Arena4);
const h2TextArena4 = document.createTextNode('M.A.T.A. Arena');
h2Arena4.appendChild(h2TextArena4);
Object.assign(h2Arena4.style, {
    color: '#000000',
    fontSize: '1.2rem',
    fontFamily: 'sans-serif',
    position: 'relative',
    top: '68%',
    cursor: 'default',
    transition: 'all 0.5s ease',
    transform: 'translateY(-50px)',
    opacity: '0',
});

cardArena4.addEventListener('mouseenter', function () {
    h2Arena4.style.transform = 'translateY(0)';
    h2Arena4.style.opacity = '1';
});

cardArena4.addEventListener('mouseleave', function () {
    h2Arena4.style.transform = 'translateY(-50px)';
    h2Arena4.style.opacity = '0';
});

// tag p
const pArena4 = document.createElement('p');
cardBodyArena4.appendChild(pArena4);
const pTextArena4 = document.createTextNode('Season 3');
pArena4.appendChild(pTextArena4);
Object.assign(pArena4.style, {
    color: '#000000',
    fontSize: '1rem',
    fontFamily: 'sans-serif',
    writingMode: 'vertical-lr',
    position: 'relative',
    left: '47%',
    cursor: 'default',
    transition: 'all 0.5s ease',
    transform: 'translateX(-50px)',
    opacity: '0',
});

cardArena4.addEventListener('mouseenter', function () {
    pArena4.style.transform = 'translateX(0)';
    pArena4.style.opacity = '1';
});

cardArena4.addEventListener('mouseleave', function () {
    pArena4.style.transform = 'translateX(-50px)';
    pArena4.style.opacity = '0';
});


// DOM
// ganti background semua slide
const bgPilar = document.getElementById('pilar');
const bgIris = document.getElementById('iris');
const bgKetuaPilar = document.getElementById('ketua');
const bgSenior = document.getElementById('top');
const bgMentor = document.getElementById('mentor');
const bgTopEjen = document.getElementById('ejen');
const bgOther = document.getElementById('other');
const bgPlace = document.getElementById('place');
[bgPilar, bgKetuaPilar, bgMentor, bgOther].forEach(linear1 => {
    linear1.style.background = 'linear-gradient(45deg, yellow 0%, black 75%)';
});
[bgIris, bgSenior, bgTopEjen, bgPlace].forEach(linear2 => {
    linear2.style.background = 'linear-gradient(135deg, yellow 0%, black 75%)';
});

// responsive web
function applyResponsiveStyles() {
    if (window.innerWidth < 767) {
        Object.assign(textPilar.style, {
            fontSize: '0.8rem',
        });
        Object.assign(iris.style, {
            height: '100vh',
        });
        bgPilar.style.background = 'linear-gradient(55deg, yellow 0%, black 75%)';
        bgIris.style.background = 'linear-gradient(125deg, yellow 0%, black 75%)';
        Object.assign(h1.style, {
            fontSize: '1.5rem',
        });
        Object.assign(container.style, {
            height: '80vh',
        });
        Object.assign(content.style, {
            height: '80%',
        });
        Object.assign(image.style, {
            width: '100%',
            height: '35vh',
            position: 'relative',
            top: '-5%',
        });
        Object.assign(image2.style, {
            position: 'relative',
            top: '0',
        });
        Object.assign(prevBtn.style, {
            position: 'absolute',
            top: '44%',
            left: '15%',
        });
        Object.assign(nextBtn.style, {
            position: 'absolute',
            top: '44%',
            left: '75%',
        });
        Object.assign(desc.style, {
            width: '100%',
            height: '30vh',
            position: 'relative',
            top: '2%',
        });
        Object.assign(h5.style, {
            fontSize: '1rem',
        });
        Object.assign(p.style, {
            fontSize: '0.7rem',
            textAlign: 'justify',
            width: '100%',
        });
        Object.assign(button.style, {
           position: 'absolute',
           top: '85%',
           left: '50%',
        });
        Object.assign(aliciaNeuro.style, {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '150px',
        });
        Object.assign(cardBodyAlicia.style, {
            height: '91%',
            borderRadius: '10px',
            transform: 'translateY(0)',
        });
        aliciaNeuro.addEventListener('mouseenter', function () {
            Object.assign(imageAliciaNeuro.style, {
                width: '140px',
                height: '140px',
                borderRadius: '50%',
            });
            Object.assign(cardBodyAlicia.style, {
                height: '120px',
                borderRadius: '100px 100px 10px 10px',
            });
        });
        aliciaNeuro.addEventListener('mouseleave', function () {
            Object.assign(imageAliciaNeuro.style, {
                width: '',
                height: '',
                borderRadius: '',
            });
            Object.assign(cardBodyAlicia.style, {
                height: '91%',
                borderRadius: '10px',
                transform: 'translateY(0)',
            });
        });
        Object.assign(kimTekno.style, {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '150px',
        });
        Object.assign(cardBodyKim.style, {
            height: '91%',
            borderRadius: '10px',
            transform: 'translateY(0)',
        });
        kimTekno.addEventListener('mouseenter', function () {
            Object.assign(imageKimTekno.style, {
                width: '140px',
                height: '140px',
                borderRadius: '50%',
            });
            Object.assign(cardBodyKim.style, {
                height: '120px',
                borderRadius: '100px 100px 10px 10px',
            });
        });
        kimTekno.addEventListener('mouseleave', function () {
            Object.assign(imageKimTekno.style, {
                width: '',
                height: '',
                borderRadius: '',
            });
            Object.assign(cardBodyKim.style, {
                height: '91%',
                borderRadius: '10px',
                transform: 'translateY(0)',
            });
        });
        Object.assign(aliTekno.style, {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '150px',
        });
        Object.assign(cardBodyAli.style, {
            height: '91%',
            borderRadius: '10px',
            transform: 'translateY(0)',
        });
        aliTekno.addEventListener('mouseenter', function () {
            Object.assign(imageAliTekno.style, {
                width: '140px',
                height: '140px',
                borderRadius: '50%',
            });
            Object.assign(cardBodyAli.style, {
                height: '120px',
                borderRadius: '100px 100px 10px 10px',
            });
        });
        aliTekno.addEventListener('mouseleave', function () {
            Object.assign(imageAliTekno.style, {
                width: '',
                height: '',
                borderRadius: '',
            });
            Object.assign(cardBodyAli.style, {
                height: '91%',
                borderRadius: '10px',
                transform: 'translateY(0)',
            });
        });
        Object.assign(samNeuro.style, {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '150px',
        });
        Object.assign(cardBodySam.style, {
            height: '91%',
            borderRadius: '10px',
            transform: 'translateY(0)',
        });
        samNeuro.addEventListener('mouseenter', function () {
            Object.assign(imageSamNeuro.style, {
                width: '140px',
                height: '140px',
                borderRadius: '50%',
            });
            Object.assign(cardBodySam.style, {
                height: '120px',
                borderRadius: '100px 100px 10px 10px',
            });
        });
        samNeuro.addEventListener('mouseleave', function () {
            Object.assign(imageSamNeuro.style, {
                width: '',
                height: '',
                borderRadius: '',
            });
            Object.assign(cardBodySam.style, {
                height: '91%',
                borderRadius: '10px',
                transform: 'translateY(0)',
            });
        });
        arena.style.height = '65vh';
        Object.assign(h1Arena.style, {
            fontSize: '1.5rem',
        });
        Object.assign(contentArena.style, {
            width: '100%',
        });
        Object.assign(cardArena.style, {
            width: '200px',
            height: '200px',
        });
        Object.assign(cardArena2.style, {
            width: '200px',
            height: '200px',
        });
        Object.assign(cardArena3.style, {
            width: '200px',
            height: '200px',
        });
        Object.assign(cardArena4.style, {
            width: '200px',
            height: '200px',
        });
        h2Arena.style.fontSize = '1rem';
        h2Arena2.style.fontSize = '1rem';
        Object.assign(h2Arena3.style, {
            fontSize: '1rem',
            top: '92%',
        });
        h2Arena4.style.fontSize = '1rem';
        pArena.style.fontSize = '0.8rem';
        pArena2.style.fontSize = '0.8rem';
        pArena3.style.fontSize = '0.8rem';
        pArena4.style.fontSize = '0.8rem';
    } else if (window.innerWidth >= 767 && window.innerWidth < 1024) {
        Object.assign(cardBodyAlicia.style, {
            height: '91%',
            width: '90%',
            borderRadius: '10px',
            transform: 'translateY(0)',
        });
        aliciaNeuro.addEventListener('mouseenter', function () {
            Object.assign(imageAliciaNeuro.style, {
                width: '170px',
                height: '170px',
                borderRadius: '50%',
            });
            Object.assign(cardBodyAlicia.style, {
                height: '180px',
                borderRadius: '100px 100px 10px 10px',
            });
        });
        aliciaNeuro.addEventListener('mouseleave', function () {
            Object.assign(imageAliciaNeuro.style, {
                width: '',
                height: '',
                borderRadius: '',
            });
            Object.assign(cardBodyAlicia.style, {
                height: '91%',
                borderRadius: '10px',
                transform: 'translateY(0)',
            });
        });
        Object.assign(cardBodyKim.style, {
            height: '91%',
            width: '90%',
            borderRadius: '10px',
            transform: 'translateY(0)',
        });
        kimTekno.addEventListener('mouseenter', function () {
            Object.assign(imageKimTekno.style, {
                width: '170px',
                height: '170px',
                borderRadius: '50%',
            });
            Object.assign(cardBodyKim.style, {
                height: '180px',
                borderRadius: '100px 100px 10px 10px',
            });
        });
        kimTekno.addEventListener('mouseleave', function () {
            Object.assign(imageKimTekno.style, {
                width: '',
                height: '',
                borderRadius: '',
            });
            Object.assign(cardBodyKim.style, {
                height: '91%',
                borderRadius: '10px',
                transform: 'translateY(0)',
            });
        });
        Object.assign(cardBodyAli.style, {
            height: '91%',
            width: '90%',
            borderRadius: '10px',
            transform: 'translateY(0)',
        });
        aliTekno.addEventListener('mouseenter', function () {
            Object.assign(imageAliTekno.style, {
                width: '170px',
                height: '170px',
                borderRadius: '50%',
            });
            Object.assign(cardBodyAli.style, {
                height: '180px',
                borderRadius: '100px 100px 10px 10px',
            });
        });
        aliTekno.addEventListener('mouseleave', function () {
            Object.assign(imageAliTekno.style, {
                width: '',
                height: '',
                borderRadius: '',
            });
            Object.assign(cardBodyAli.style, {
                height: '91%',
                borderRadius: '10px',
                transform: 'translateY(0)',
            });
        });
        Object.assign(cardBodySam.style, {
            height: '91%',
            width: '90%',
            borderRadius: '10px',
            transform: 'translateY(0)',
        });
        samNeuro.addEventListener('mouseenter', function () {
            Object.assign(imageSamNeuro.style, {
                width: '170px',
                height: '170px',
                borderRadius: '50%',
            });
            Object.assign(cardBodySam.style, {
                height: '180px',
                borderRadius: '100px 100px 10px 10px',
            });
        });
        samNeuro.addEventListener('mouseleave', function () {
            Object.assign(imageSamNeuro.style, {
                width: '',
                height: '',
                borderRadius: '',
            });
            Object.assign(cardBodySam.style, {
                height: '91%',
                borderRadius: '10px',
                transform: 'translateY(0)',
            });
        });
    }
}

// event listener
applyResponsiveStyles();
// saat layar mengubah ukuran
window.addEventListener('resize', applyResponsiveStyles);


// DOM
// buat li baru keenam
const navItemBaru6 = document.createElement('li');
// masukkan ke parent dan sibling paling akhir
navbarNav.insertBefore(navItemBaru6, navItemBaru1);
// tambah atribut
navItemBaru6.setAttribute('class', 'nav-item');
// buat a baru
const aBaru6 = document.createElement('a');
// buat teks
const textBaru6 = document.createTextNode('I.R.I.S.');
// masukkan teks
aBaru6.appendChild(textBaru6);
// masukkan tag a ke parent
navItemBaru6.appendChild(aBaru6);
// tambah kelas
aBaru6.setAttribute('class', 'nav-link');
navItemBaru6.style.cursor = 'pointer';
// fungsi untuk scroll ke pilar
navItemBaru6.addEventListener('click', () => {
    const other = document.getElementById('iris');
    other.scrollIntoView({ behavior: 'smooth' });
});

const irisPage = document.getElementById('irisPage');
irisPage.addEventListener('click', () => {
    window.location.href = "iris.html";
});


// buat li baru ketujuh
const navItemBaru7 = document.createElement('li');
// masukkan ke parent dan sibling paling akhir
navbarNav.insertBefore(navItemBaru7, liAkhir);
// tambah atribut
navItemBaru7.setAttribute('class', 'nav-item');
// buat a baru
const aBaru7 = document.createElement('a');
// buat teks
const textBaru7 = document.createTextNode('Base');
// masukkan teks
aBaru7.appendChild(textBaru7);
// masukkan tag a ke parent
navItemBaru7.appendChild(aBaru7);
// tambah kelas
aBaru7.setAttribute('class', 'nav-link');
navItemBaru7.style.cursor = 'pointer';
// fungsi untuk scroll ke pilar
navItemBaru7.addEventListener('click', () => {
    const place = document.getElementById('place');
    place.scrollIntoView({ behavior: 'smooth' });
});


const carousel = document.querySelector('.carousel-item')
const items = document.querySelectorAll('.carousel-item img')
let index = 0
let interval
function updateCarousel() {
    carousel.style.transform = `translateX(${-index * 100}%)`
}
function startTimer() {
    interval = setInterval(nextSlide, 2000)
}
function nextSlide() {
    index = (index + 1) % items.length
    updateCarousel()
}
startTimer()
