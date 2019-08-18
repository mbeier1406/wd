var imgCid1 = document.querySelector('.cid-bild');
var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
console.log(imgCid1);

function openModal() {
    backdrop.style.display = 'block';
    modal.style.display = 'block';
}

function closeModal() {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
}

imgCid1.onclick = openModal;
backdrop.onclick = closeModal;
