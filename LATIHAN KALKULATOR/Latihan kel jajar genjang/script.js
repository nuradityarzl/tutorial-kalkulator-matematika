function hitung() {
	// Ambil nilai dari input sisi-sisi segitiga
	var sisiA = parseInt(document.getElementById("sisi-a").value);
	var sisiB = parseInt(document.getElementById("sisi-b").value);
	
	// Hitung keliling segitiga
	var keliling = 2 * (sisiA + sisiB)
	
	// Tampilkan hasil
	document.getElementById("hasil").innerHTML = "Keliling Jajar Genjang = " + keliling;
  }