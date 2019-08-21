var imgCid = document.querySelectorAll('.cid-bild');
var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
console.log(imgCid);

function openModal() {
    backdrop.style.display = 'block';
    modal.style.display = 'block';
}

function closeModal() {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
}

for ( var i=0; i < imgCid.length; i++ ) {
    imgCid[i].addEventListener('click', openModal);
}
backdrop.onclick = closeModal;
