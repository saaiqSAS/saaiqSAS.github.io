const t = document.getElementById('check_text');
const v = document.getElementById('v_code');
const z = document.getElementById('check_box');

// the data listed in the following object array are no secret,
// hence kept in plain text.
const p = [
  { c: "TKQUVLRQ", i: "A381149", d: "19th March 2026" },
  { c: "BKJUQYHL", i: "A386117", d: "19th March 2026" },
  { c: "JHWOPIMB", i: "A391310", d: "19th March 2026" }
  
];
		


function checkCode() {
	const l = p.length;
	const n = v.value.toUpperCase();
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
t.innerHTML = `Verification successful. The holder of NID number <b>${p[a].i}</b> has successfully completed the <b>"Introduction to Website and Web Application Development (WD-1)"</b> online crash course offered by saaiqSAS, with a completion date of <b>${p[a].d}</b>. This certificate has been issued with the verification code <b>${n}</b> and is officially verified by saaiqSAS.`;	
} else {
		z.style.backgroundColor = "#dd3030";
		t.innerHTML = `Verification failed. If this code (${n}) appears on a WD-1 (Introduction to Website and Web Application Development) certificate, the certificate is invalid and was not issued by saaiqSAS.`;
	}
}



function gc() {
  const l = "ABCDEFGHIJKLMNOPQRSTUVWYZ";
  const v = "AEIOUY";
  function r(str) {
    return str[Math.floor(Math.random() * str.length)];
  }
  let c;
  do {
    let q = "";
    for (let i = 0; i < 8; i++) {
      if (i === 3) {
        q += r(v);
      } else {
        q += r(l);
      }
    }
    c = q;
  } while (p.some(item => item.c === c));
  return c;
}


