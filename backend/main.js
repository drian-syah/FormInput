const create = document.getElementById('TambahData')
const nama = document.getElementById('nama');
const nim = document.getElementById('nim');
const prodi = document.getElementById('prodi');
const fakultas = document.getElementById('fakultas');

const namaData = document.getElementById('namaData');
const nimData = document.getElementById('nimData');
const prodiData = document.getElementById('prodiData');
const fakultasData = document.getElementById('fakultasData')

create.addEventListener('submit', function (event){
    event.preventDefault();

    namaData.textContent = nama.value;
    nimData.textContent = nim.value;
    prodiData.textContent = prodi.value;
    fakultasData.textContent = fakultas.value;

});