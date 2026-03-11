const t = document.getElementById('check_text');
const v = document.getElementById('v_code');
const z = document.getElementById('check_box');

// the data listed in the following object array are no secret,
// hence kept in plain text.
const p = [
  { c: "X00000", i: "Axxxxxx", d: "8th March 2026" },
  { c: "X00001", i: "AXXXXXX", d: "8th March 2026" }
  
];
		


function checkCode() {
	const l = p.length;
	const n = v.value;
	let q = false;
	let a = 0;
	if (n === "") {return}
	for (; a < l; a++) {
		if (p[a].c === n) {
			q = true;
			break;
		}
	}
	z.style.display = "block";
	if (q === true) {
		z.style.backgroundColor = "#309030";
		  t.innerHTML = `Verification successful. The holder of NID number (<b>${p[a].i}</b>) has successfully completed the WD-1 (Introduction to Website and Web Application Development) Online Crash Course offered by saaiqSAS on <b>${p[a].d}</b>, and the certificate was issued with the verification code (<b>${n}</b>).`; 
	} else {
		z.style.backgroundColor = "#dd3030";
		t.innerHTML = "Verification failed. If this code ("+n+") appears on a WD-1 (Introduction to Website and Web Application Development) certificate, the certificate is invalid and was not issued by saaiqSAS.";
	}
}



