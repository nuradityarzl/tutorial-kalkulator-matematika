function hitung() {
	// Ambil nilai dari input sisi-sisi segitiga
	var sisiA = parseInt(document.getElementById("sisi-a").value);
	var sisiB = parseInt(document.getElementById("sisi-b").value);
	var sisiC = parseInt(document.getElementById("sisi-c").value);
	
	// Hitung keliling segitiga
	var keliling = sisiA + sisiB + sisiC;
	
	// Tampilkan hasil
	document.getElementById("hasil").innerHTML = "Keliling segitiga = " + keliling;
  }