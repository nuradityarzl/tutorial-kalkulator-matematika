function hitungLuas() {
	let alas = document.getElementById('alas').value;
	let tinggi = document.getElementById('tinggi').value;

	if (alas == '' || tinggi == '') {
		alert('Mohon isi nilai alas dan tinggi terlebih dahulu');
		return;
	}

	let luas = alas * tinggi;

	document.getElementById('hasil').innerHTML = `<p>Luas Jajar Genjang: ${luas}</p>`;
}
