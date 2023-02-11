/* SAS-STE-Web JavaScript */


/* ----------------------------- UI Related ----------------------------- */

var functionBoxEncrypt = document.getElementById("functionBoxEncrypt");
var functionBoxDecrypt = document.getElementById("functionBoxDecrypt");

var encryptNewKeyBox = document.getElementById("encryptNewKeyBox");
var encryptExistingKeyBox = document.getElementById("encryptExistingKeyBox");
var encryptNoKeyBox = document.getElementById("encryptNoKeyBox");

var decryptKeyedBox = document.getElementById("decryptKeyedBox");
var decryptNoKeyBox = document.getElementById("decryptNoKeyBox");

/* Function Boxes */
function onClickFunctionTypeEncrypt() {
	
	functionType = 1;
	
	functionBoxEncrypt.style.display = "block";
	functionBoxDecrypt.style.display = "none";
	
	encryptNewKeyBox.style.display = "block";
	encryptExistingKeyBox.style.display = "none";
	encryptNoKeyBox.style.display = "none";
	
	decryptKeyedBox.style.display = "none";
	decryptNoKeyBox.style.display = "none";
	
}

function onClickFunctionTypeDecrypt() {
	
	functionType = 2;

	functionBoxEncrypt.style.display = "none";
	functionBoxDecrypt.style.display = "block";

	encryptNewKeyBox.style.display = "none";
	encryptExistingKeyBox.style.display = "none";
	encryptNoKeyBox.style.display = "none";

	decryptKeyedBox.style.display = "block";
	decryptNoKeyBox.style.display = "none";
	
	confirmKeyed();
	
	
}

/* Key Boxes Encrypt */
function onClickKeyEncryptNewKey() {

	encryptNewKeyBox.style.display = "block";
	encryptExistingKeyBox.style.display = "none";
	encryptNoKeyBox.style.display = "none";
	
	var keyDisplayAreaKeyGen = document.getElementById("keyDisplayAreaKeyGen");
	if (keyDisplayAreaKeyGen.vlaue != "") {
		key = keyDisplayAreaKeyGen.vlaue;
	}
}

function onClickKeyEncryptExistingKey() {

	encryptNewKeyBox.style.display = "none";
	encryptExistingKeyBox.style.display = "block";
	encryptNoKeyBox.style.display = "none";
	
	confirmExistingKey();
}

function onClickKeyEncryptNoKey() {

	encryptNewKeyBox.style.display = "none";
	encryptExistingKeyBox.style.display = "none";
	encryptNoKeyBox.style.display = "block";
	
	nokeySetup();
}

/* Key Boxes Decrypt */
function onClickKeyDecryptKeyed() {

	decryptKeyedBox.style.display = "block";
	decryptNoKeyBox.style.display = "none";
	
	confirmKeyed();
}

function onClickKeyDecryptNoKey() {

	decryptKeyedBox.style.display = "none";
	decryptNoKeyBox.style.display = "block";
	
	nokeySetup();
}



/* ----------------------------- Background Processes ----------------------------- */

/* Key Generator */

var encryptAmount = 1;
var generatedKey = "";
var defaultCharSet = [' ','!','\"','#','$','%','&','\'','(',')','*','+',',','-','.','/','0','1','2','3','4','5','6','7','8','9',':',';','<','=','>','?','@','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','[','\\',']','^','_','`','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','{','|','}','~']

var encryptAmountOne = document.getElementById("encryptAmountOne");
var encryptAmountOneActive = document.getElementById("encryptAmountOneActive");

var encryptAmountTwo = document.getElementById("encryptAmountTwo");
var encryptAmountTwoActive = document.getElementById("encryptAmountTwoActive");

var encryptAmountThree = document.getElementById("encryptAmountThree");
var encryptAmountThreeActive = document.getElementById("encryptAmountThreeActive");

var encryptAmountFour = document.getElementById("encryptAmountFour");
var encryptAmountFourActive = document.getElementById("encryptAmountFourActive");

var encryptAmountFive = document.getElementById("encryptAmountFive");
var encryptAmountFiveActive = document.getElementById("encryptAmountFiveActive");

function setEncryptAmountOne() {
	encryptAmount = 1;
	
	encryptAmountOne.style.display = "none";
	encryptAmountOneActive.style.display = "block";
	
	encryptAmountTwo.style.display = "block";
	encryptAmountTwoActive.style.display = "none";
	
	encryptAmountThree.style.display = "block";
	encryptAmountThreeActive.style.display = "none";
	
	encryptAmountFour.style.display = "block";
	encryptAmountFourActive.style.display = "none";
	
	encryptAmountFive.style.display = "block";
	encryptAmountFiveActive.style.display = "none";
	
	encryptAmountSix.style.display = "block";
	encryptAmountSixActive.style.display = "none";
	
	encryptAmountSeven.style.display = "block";
	encryptAmountSevenActive.style.display = "none";
	
	encryptAmountEight.style.display = "block";
	encryptAmountEightActive.style.display = "none";
	
	encryptAmountNine.style.display = "block";
	encryptAmountNineActive.style.display = "none";
	
	encryptAmountTen.style.display = "block";
	encryptAmountTenActive.style.display = "none";
}

function setEncryptAmountTwo() {
	encryptAmount = 2;
	
	encryptAmountOne.style.display = "block";
	encryptAmountOneActive.style.display = "none";
	
	encryptAmountTwo.style.display = "none";
	encryptAmountTwoActive.style.display = "block";
	
	encryptAmountThree.style.display = "block";
	encryptAmountThreeActive.style.display = "none";
	
	encryptAmountFour.style.display = "block";
	encryptAmountFourActive.style.display = "none";
	
	encryptAmountFive.style.display = "block";
	encryptAmountFiveActive.style.display = "none";
	
	encryptAmountSix.style.display = "block";
	encryptAmountSixActive.style.display = "none";
	
	encryptAmountSeven.style.display = "block";
	encryptAmountSevenActive.style.display = "none";
	
	encryptAmountEight.style.display = "block";
	encryptAmountEightActive.style.display = "none";
	
	encryptAmountNine.style.display = "block";
	encryptAmountNineActive.style.display = "none";
	
	encryptAmountTen.style.display = "block";
	encryptAmountTenActive.style.display = "none";
}

function setEncryptAmountThree() {
	encryptAmount = 3;
	
	encryptAmountOne.style.display = "block";
	encryptAmountOneActive.style.display = "none";
	
	encryptAmountTwo.style.display = "block";
	encryptAmountTwoActive.style.display = "none";
	
	encryptAmountThree.style.display = "none";
	encryptAmountThreeActive.style.display = "block";
	
	encryptAmountFour.style.display = "block";
	encryptAmountFourActive.style.display = "none";
	
	encryptAmountFive.style.display = "block";
	encryptAmountFiveActive.style.display = "none";
	
	encryptAmountSix.style.display = "block";
	encryptAmountSixActive.style.display = "none";
	
	encryptAmountSeven.style.display = "block";
	encryptAmountSevenActive.style.display = "none";
	
	encryptAmountEight.style.display = "block";
	encryptAmountEightActive.style.display = "none";
	
	encryptAmountNine.style.display = "block";
	encryptAmountNineActive.style.display = "none";
	
	encryptAmountTen.style.display = "block";
	encryptAmountTenActive.style.display = "none";
}

function setEncryptAmountFour() {
	encryptAmount = 4;
	
	encryptAmountOne.style.display = "block";
	encryptAmountOneActive.style.display = "none";
	
	encryptAmountTwo.style.display = "block";
	encryptAmountTwoActive.style.display = "none";
	
	encryptAmountThree.style.display = "block";
	encryptAmountThreeActive.style.display = "none";
	
	encryptAmountFour.style.display = "none";
	encryptAmountFourActive.style.display = "block";
	
	encryptAmountFive.style.display = "block";
	encryptAmountFiveActive.style.display = "none";
	
	encryptAmountSix.style.display = "block";
	encryptAmountSixActive.style.display = "none";
	
	encryptAmountSeven.style.display = "block";
	encryptAmountSevenActive.style.display = "none";
	
	encryptAmountEight.style.display = "block";
	encryptAmountEightActive.style.display = "none";
	
	encryptAmountNine.style.display = "block";
	encryptAmountNineActive.style.display = "none";
	
	encryptAmountTen.style.display = "block";
	encryptAmountTenActive.style.display = "none";
}

function setEncryptAmountFive() {
	encryptAmount = 5;
	
	encryptAmountOne.style.display = "block";
	encryptAmountOneActive.style.display = "none";
	
	encryptAmountTwo.style.display = "block";
	encryptAmountTwoActive.style.display = "none";
	
	encryptAmountThree.style.display = "block";
	encryptAmountThreeActive.style.display = "none";
	
	encryptAmountFour.style.display = "block";
	encryptAmountFourActive.style.display = "none";
	
	encryptAmountFive.style.display = "none";
	encryptAmountFiveActive.style.display = "block";
	
	encryptAmountSix.style.display = "block";
	encryptAmountSixActive.style.display = "none";
	
	encryptAmountSeven.style.display = "block";
	encryptAmountSevenActive.style.display = "none";
	
	encryptAmountEight.style.display = "block";
	encryptAmountEightActive.style.display = "none";
	
	encryptAmountNine.style.display = "block";
	encryptAmountNineActive.style.display = "none";
	
	encryptAmountTen.style.display = "block";
	encryptAmountTenActive.style.display = "none";
}

function setEncryptAmountSix() {
	encryptAmount = 6;
	
	encryptAmountOne.style.display = "block";
	encryptAmountOneActive.style.display = "none";
	
	encryptAmountTwo.style.display = "block";
	encryptAmountTwoActive.style.display = "none";
	
	encryptAmountThree.style.display = "block";
	encryptAmountThreeActive.style.display = "none";
	
	encryptAmountFour.style.display = "block";
	encryptAmountFourActive.style.display = "none";
	
	encryptAmountFive.style.display = "block";
	encryptAmountFiveActive.style.display = "none";
	
	encryptAmountSix.style.display = "none";
	encryptAmountSixActive.style.display = "block";
	
	encryptAmountSeven.style.display = "block";
	encryptAmountSevenActive.style.display = "none";
	
	encryptAmountEight.style.display = "block";
	encryptAmountEightActive.style.display = "none";
	
	encryptAmountNine.style.display = "block";
	encryptAmountNineActive.style.display = "none";
	
	encryptAmountTen.style.display = "block";
	encryptAmountTenActive.style.display = "none";
}

function setEncryptAmountSeven() {
	encryptAmount = 7;
	
	encryptAmountOne.style.display = "block";
	encryptAmountOneActive.style.display = "none";
	
	encryptAmountTwo.style.display = "block";
	encryptAmountTwoActive.style.display = "none";
	
	encryptAmountThree.style.display = "block";
	encryptAmountThreeActive.style.display = "none";
	
	encryptAmountFour.style.display = "block";
	encryptAmountFourActive.style.display = "none";
	
	encryptAmountFive.style.display = "block";
	encryptAmountFiveActive.style.display = "none";
	
	encryptAmountSix.style.display = "block";
	encryptAmountSixActive.style.display = "none";
	
	encryptAmountSeven.style.display = "none";
	encryptAmountSevenActive.style.display = "block";
	
	encryptAmountEight.style.display = "block";
	encryptAmountEightActive.style.display = "none";
	
	encryptAmountNine.style.display = "block";
	encryptAmountNineActive.style.display = "none";
	
	encryptAmountTen.style.display = "block";
	encryptAmountTenActive.style.display = "none";
}

function setEncryptAmountEight() {
	encryptAmount = 8;
	
	encryptAmountOne.style.display = "block";
	encryptAmountOneActive.style.display = "none";
	
	encryptAmountTwo.style.display = "block";
	encryptAmountTwoActive.style.display = "none";
	
	encryptAmountThree.style.display = "block";
	encryptAmountThreeActive.style.display = "none";
	
	encryptAmountFour.style.display = "block";
	encryptAmountFourActive.style.display = "none";
	
	encryptAmountFive.style.display = "block";
	encryptAmountFiveActive.style.display = "none";
	
	encryptAmountSix.style.display = "block";
	encryptAmountSixActive.style.display = "none";
	
	encryptAmountSeven.style.display = "block";
	encryptAmountSevenActive.style.display = "none";
	
	encryptAmountEight.style.display = "none";
	encryptAmountEightActive.style.display = "block";
	
	encryptAmountNine.style.display = "block";
	encryptAmountNineActive.style.display = "none";
	
	encryptAmountTen.style.display = "block";
	encryptAmountTenActive.style.display = "none";
}

function setEncryptAmountNine() {
	encryptAmount = 9;
	
	encryptAmountOne.style.display = "block";
	encryptAmountOneActive.style.display = "none";
	
	encryptAmountTwo.style.display = "block";
	encryptAmountTwoActive.style.display = "none";
	
	encryptAmountThree.style.display = "block";
	encryptAmountThreeActive.style.display = "none";
	
	encryptAmountFour.style.display = "block";
	encryptAmountFourActive.style.display = "none";
	
	encryptAmountFive.style.display = "block";
	encryptAmountFiveActive.style.display = "none";
	
	encryptAmountSix.style.display = "block";
	encryptAmountSixActive.style.display = "none";
	
	encryptAmountSeven.style.display = "block";
	encryptAmountSevenActive.style.display = "none";
	
	encryptAmountEight.style.display = "block";
	encryptAmountEightActive.style.display = "none";
	
	encryptAmountNine.style.display = "none";
	encryptAmountNineActive.style.display = "block";
	
	encryptAmountTen.style.display = "block";
	encryptAmountTenActive.style.display = "none";
}

function setEncryptAmountTen() {
	encryptAmount = 10;
	
	encryptAmountOne.style.display = "block";
	encryptAmountOneActive.style.display = "none";
	
	encryptAmountTwo.style.display = "block";
	encryptAmountTwoActive.style.display = "none";
	
	encryptAmountThree.style.display = "block";
	encryptAmountThreeActive.style.display = "none";
	
	encryptAmountFour.style.display = "block";
	encryptAmountFourActive.style.display = "none";
	
	encryptAmountFive.style.display = "block";
	encryptAmountFiveActive.style.display = "none";
	
	encryptAmountSix.style.display = "block";
	encryptAmountSixActive.style.display = "none";
	
	encryptAmountSeven.style.display = "block";
	encryptAmountSevenActive.style.display = "none";
	
	encryptAmountEight.style.display = "block";
	encryptAmountEightActive.style.display = "none";
	
	encryptAmountNine.style.display = "block";
	encryptAmountNineActive.style.display = "none";
	
	encryptAmountTen.style.display = "none";
	encryptAmountTenActive.style.display = "block";
}

function generateKey() {
	generatedKey = "$STE::"; // Key reset
	
	generatedKey += Math.floor(Math.random() * 5); //L0Type
	generatedKey += Math.floor(Math.random() * 6); //L2Assign
	
	var randCharset = defaultCharSet;
	randCharset.sort(() => Math.random() - 0.5);
	
	for (let i = 0; i < randCharset.length; i++) {
		generatedKey += randCharset[i];
	}

	generatedKey += Math.floor(Math.random() * 10); //L1Rep
	generatedKey += Math.floor(Math.random() * 10); //L2Rep
	generatedKey += encryptAmount - 1;              //fullRep
	
	generatedKey += "::KEY$";
	
	var keyDisplayAreaKeyGen = document.getElementById("keyDisplayAreaKeyGen");
	keyDisplayAreaKeyGen.innerText = generatedKey;
	
	key = generatedKey;
	
}

/* Existing Key Selector  */
var tempKey = "";

function confirmExistingKey() {
	var keyInputAreaExistingKey = document.getElementById("keyInputAreaExistingKey");
	tempKey = keyInputAreaExistingKey.value;
	
	var keyFormatErrorExistingKey = document.getElementById("keyFormatErrorExistingKey");
	var keyAcceptedExistingKey = document.getElementById("keyAcceptedExistingKey");
	
	if (tempKey != "") {
		if (tempKey.length == 112) {
			keyFormatErrorExistingKey.style.display = "none";
			keyAcceptedExistingKey.style.display = "block";
			key = tempKey;
			
			hideProcessError();
		} else {
			keyFormatErrorExistingKey.style.display = "block";
			keyAcceptedExistingKey.style.display = "none";
			
			pError("Incorrect Key Format");
		}
	} else {
		keyFormatErrorExistingKey.style.display = "none";
		keyAcceptedExistingKey.style.display = "none";
		
		hideProcessError();
	}
	
}

function confirmKeyed() {
	var keyInputAreaKeyed = document.getElementById("keyInputAreaKeyed");
	tempKey = keyInputAreaKeyed.value;
	
	var keyFormatErrorKeyed = document.getElementById("keyFormatErrorKeyed");
	var keyAcceptedKeyed = document.getElementById("keyAcceptedKeyed");
	
	if (tempKey != "") {
		if (tempKey.length == 112) {
			keyFormatErrorKeyed.style.display = "none";
			keyAcceptedKeyed.style.display = "block";
			key = tempKey;
			
			hideProcessError();
		} else {
			keyFormatErrorKeyed.style.display = "block";
			keyAcceptedKeyed.style.display = "none";
			
			pError("Incorrect Key Format");
		}
	} else {
		keyFormatErrorKeyed.style.display = "none";
		keyAcceptedKeyed.style.display = "none";
		
		hideProcessError();
	}
	
}

/* No Key Key Setup  */
function nokeySetup() {
	key = "$STE::";
	key += "0";
    key += "0";
		  
	for (let i = 0; i < defaultCharSet.length; i++) {
		key += defaultCharSet[i];
	}
        
    key += "0";
    key += "0";
    key += "0";
    key += "::KEY$";
}



/* logs */ 
var showLogsButton = document.getElementById("showLogsButton");
var logBox = document.getElementById("logBox");

function showLogs() {
	showLogsButton.style.display = "none";
	logBox.style.display = "block";
}

function closeLogs(){
	showLogsButton.style.display = "block";
	logBox.style.display = "none";
}

function log(logText) {
	let log = "> "+ logText + "\n\n";
	
	let logs = document.getElementById("logs");
	logs.innerText += log;
}

function emptyLog() {
	let logs = document.getElementById("logs");
	logs.innerText = "";
}

/* ----------------------------- Process ----------------------------- */

/* Process Error Handling */
var processError = document.getElementById("processError");

function pError(errorMsg) {
	let Error = "Error!! " + errorMsg;
	processError.innerText = Error;
	processError.style.display = "block";
}

function hideProcessError() {
	processError.style.display = "none";
}


/* Process */

var key = "";
var input = "";
var processArray = [];
var charSet;
var functionType = 1;
var processString = ""; 
var processChar; 
var L0Type;
var L1rep;
var L2pAsign;
var L2rep;
var fullRep;
var output = "";


const StaticKeyL1 = [9, 29, 91, 67, 75, 30, 59, 38, 68, 55, 80, 52, 26, 37, 56, 40, 66, 10, 65, 11, 81, 49, 18, 85, 88, 70, 51, 6, 43, 82, 41, 42, 74, 87, 12, 86, 45, 39, 58, 35, 47, 21, 3, 31, 23, 33, 16, 57, 32, 17, 84, 60, 93, 19, 20, 69, 22, 24, 5, 46, 8, 90, 83, 78, 54, 4, 48, 13, 53, 94, 77, 76, 89, 63, 34, 0, 62, 28, 79, 36, 1, 14, 2, 50, 61, 64, 72, 73, 25, 7, 15, 27, 71, 44, 92];
const StaticKeyL2P1 = [59, 89, 15, 43, 34, 78, 5, 72, 68, 82, 86, 7, 85, 65, 69, 8, 16, 33, 94, 93, 42, 18, 53, 26, 32, 87, 41, 17, 2, 55, 79, 83, 31, 46, 76, 6, 12, 54, 36, 11, 23, 20, 9, 21, 74, 92, 62, 58, 3, 57, 35, 1, 66, 13, 67, 61, 10, 47, 52, 14, 22, 48, 60, 39, 75, 25, 88, 64, 73, 38, 19, 81, 56, 71, 0, 90, 30, 50, 77, 37, 24, 44, 40, 80, 63, 70, 45, 84, 91, 27, 4, 29, 49, 51, 28];
const StaticKeyL2P2 = [47, 40, 29, 35, 11, 8, 86, 1, 63, 80, 19, 24, 79, 85, 60, 56, 3, 62, 59, 64, 42, 83, 44, 32, 21, 65, 78, 82, 53, 75, 15, 6, 76, 50, 66, 25, 31, 55, 58, 84, 36, 0, 69, 61, 87, 34, 74, 54, 18, 22, 37, 48, 5, 71, 7, 12, 51, 73, 67, 93, 10, 43, 94, 49, 9, 89, 13, 41, 28, 91, 38, 57, 20, 4, 92, 30, 39, 27, 70, 23, 46, 14, 33, 72, 68, 2, 26, 52, 16, 81, 17, 45, 90, 77, 88];
const StaticKeyL2P3 = [10, 73, 51, 34, 87, 53, 76, 41, 74, 31, 23, 39, 63, 57, 32, 43, 36, 20, 92, 9, 64, 33, 46, 88, 26, 13, 55, 1, 3, 60, 14, 67, 82, 59, 94, 49, 22, 84, 28, 2, 62, 5, 65, 25, 6, 78, 37, 21, 29, 30, 85, 91, 16, 71, 79, 52, 61, 7, 19, 8, 12, 44, 0, 45, 89, 77, 80, 27, 68, 50, 42, 24, 15, 72, 69, 35, 56, 47, 83, 66, 17, 18, 48, 38, 81, 86, 93, 54, 4, 75, 58, 70, 90, 40, 11];


function process() {
	var textInput = document.getElementById("textInput");
	input = textInput.value;
	
	hideProcessError();
	if (key == null || key == "") {
		pError("Key Not Found");
	} else {
		if (input == null || input == "") {
			pError("No Input To Process Found");
		} else {
	
			var processButton = document.getElementById("processButton");
			var processButtonProcessing = document.getElementById("processButtonProcessing");
				
			processButton.style.display = "none";
			processButtonProcessing.style.display = "block";
				
			emptyLog();
			log("Processing started");
				
			extractKey();
			
			setInput();
			
			output = "";
			
			for (let i = 0; i < processArray.length; i++) {
				input = processArray[i];
				
				switch (functionType) {
					case 1:
						encryptControl();
						break;
					case 2:
						decryptControl();
						break;
				}
			}
			
			
			var textOutput = document.getElementById('textOutput');
			textOutput.innerHTML = output;
			
			processButton.style.display = "block";
			processButtonProcessing.style.display = "none";
			log("Processing finished");
		}
	}
}

function extractKey() {
	var keyChar = key.split('');

            //=====Charset======

            var charSetNum = 8;
            var stringCharSet = "";

            while (charSetNum <= 103) {
                stringCharSet += keyChar[charSetNum];
                charSetNum++;
            }

            charSet = stringCharSet.split('');

            //=====RepAmounts=====

            var repAmounts = "";
            repAmounts += keyChar[103];
            repAmounts += keyChar[104];
            repAmounts += keyChar[105];


            var repAmountsChar = repAmounts.split('');
            var repLayer = 0;
            var repNum;

			for (let i = 0; i < repAmountsChar.length; i++) {
                repNum = 0;
                switch (repAmountsChar[i]) {
                    case '0':
                        repNum = 0;
                        break;
                    case '1':
                        repNum = 1;
                        break;
                    case '2':
                        repNum = 2;
                        break;
                    case '3':
                        repNum = 3;
                        break;
                    case '4':
                        repNum = 4;
                        break;
                    case '5':
                        repNum = 5;
                        break;
                    case '6':
                        repNum = 6;
                        break;
                    case '7':
                        repNum = 7;
                        break;
                    case '8':
                        repNum = 8;
                        break;
                    case '9':
                        repNum = 9;
                        break;
                }
                switch (repLayer) {
                    case 0:
                        L1rep = repNum;
                        break;
                    case 1:
                        L2rep = repNum;
                        break;
                    case 2:
                        fullRep = repNum;
                        break;
                }
                repLayer++;
			}

            //=====Others=====

            var others = "";
            others += keyChar[6];
            others += keyChar[7];


            var othersChar = others.split('');
            var othersPlaceValue = 0;
            var othersNum;

			for (let i = 0; i < othersChar.length; i++) {
                othersNum = 0;
                switch (othersChar[i]) {
                    case '0':
                        othersNum = 0;
                        break;
                    case '1':
                        othersNum = 1;
                        break;
                    case '2':
                        othersNum = 2;
                        break;
                    case '3':
                        othersNum = 3;
                        break;
                    case '4':
                        othersNum = 4;
                        break;
                    case '5':
                        othersNum = 5;
                        break;
                    case '6':
                        othersNum = 6;
                        break;
                    case '7':
                        othersNum = 7;
                        break;
                    case '8':
                        othersNum = 8;
                        break;
                    case '9':
                        othersNum = 9;
                        break;
                }
                switch (othersPlaceValue) {
                    case 0:
                        L0Type = othersNum;
                        break;
                    case 1:
                        L2pAsign = othersNum;
                        break;
                }
                othersPlaceValue++;
            }
			
			log("Key extracted");
}

function setInput() {
	let inputChar = input.split('');
	let pAvalue = 0;
	let tempProcessArrayValue = "";
	processArray = [];
	
	for (let i = 0; i < inputChar.length; i++) {
		if (inputChar[i] != "\n") {
			tempProcessArrayValue += inputChar[i];
			
		} else if (inputChar[i] == "\n") {
			processArray[pAvalue] = tempProcessArrayValue;
			tempProcessArrayValue = "";
			pAvalue++;
		}
	}
	
	processArray[pAvalue] = tempProcessArrayValue;
	
	log("Input readied");
}

/* ----------------------------- SAS-STE ----------------------------- */

function encryptControl() {
	
	let crrfullRep = 0;
    let crrL1rep = 0;
    let crrL2rep = 0;
	
	
    while (crrfullRep <= fullRep) {
		
		crrL1rep = 0;
		crrL2rep = 0;
		
		encryptL0();
		
		while (crrL1rep <= L1rep) {
			encryptL1();
			
			layer0out = layer1out;
			crrL1rep++;
		}
		
		while (crrL2rep <= L2rep) {
			encryptL2();
			
			layer1out = layer2out;
			crrL2rep++;
		}
		
		input = layer2out;
		crrfullRep++;
	}
	output += layer2out + "\n";
	
}

function decryptControl() {
	
	let crrfullRep = 0;
    let crrL1rep = 0;
    let crrL2rep = 0;


	while (crrfullRep <= fullRep) {
		
		crrL1rep = 0;
		crrL2rep = 0;
		
		while (crrL2rep <= L2rep) {
		decryptL2();
		
		input = layer2out;
        crrL2rep++;
		}

		while (crrL1rep <= L1rep) {
		decryptL1();
		
		layer2out = layer1out;
        crrL1rep++;
		}

		decryptL0();

		input = layer0out;
        crrfullRep++;
	}
	output += layer0out + "\n";
	

}

var layer0out = "";
var layer0p1out = "";

var layer1out = "";

var layer2out = "";
var p1ProcessString = "";
var p1ProcessChar;
var p1Out; //charArray
var layer2p1out = "";
var p2ProcessString = "";
var p2ProcessChar;
var p2Out; //charArray
var layer2p2out = "";
var p3ProcessString = "";
var p3ProcessChar;
var p3Out; //charArray
var layer2p3out = "";

/* ---- Layer0 - Encrypt ---- */

function encryptL0() {
		processString = input;
		processChar = input.split('');
		layer0out = "";
		layer0p1out = "";
	
	  let randChar;
	  
	  let pCharLength = (processString.length*2)-1;
	  
	  let pChar = 0;
	  let sNum = 1;
	  
	  for (let i = 0; i < processChar.length; i++) {
	    randChar = charSet[Math.floor(Math.random() * 95)];
        while (randChar == ' ') {
          randChar = charSet[Math.floor(Math.random() * 95)];
        }
	    switch (L0Type) {
	      case 0:
	        if (sNum > 3) {
	          sNum = 1;
            }
	        if (sNum == 1 || sNum == 2) {
	          layer0p1out += randChar;
	          layer0p1out += processChar[i];
	          
	          sNum++;
            } else if (sNum == 3) {
              layer0p1out += processChar[i];
              sNum++;
            }
	        break;
	        
	      case 1:
	        if (sNum > 3) {
	          sNum = 1;
            } 
	        if (sNum == 2 || sNum == 3) {
	          layer0p1out += randChar;
	          layer0p1out += processChar[i];
	          
	          sNum++;
            } else if (sNum == 1) {
              layer0p1out += processChar[i];
              sNum++;
            }
	        break;
	        
	      case 2:
	        if (sNum > 3) {
	          sNum = 1;
            }
	        if (sNum == 1 || sNum == 3) {
	          layer0p1out += randChar;
	          layer0p1out += processChar[i];
	          
	          sNum++;
            } else if (sNum == 2) {
              layer0p1out += processChar[i];
              sNum++;
            }
	        break;
			
		  case 3:
	        if (sNum > 3) {
	          sNum = 1;
            }
	        if (sNum == 2 || sNum == 3) {
			  layer0p1out += processChar[i];
	          layer0p1out += randChar;
	          
	          sNum++;
            } else if (sNum == 1) {
              layer0p1out += processChar[i];
              sNum++;
            }
	        break;
			
		  case 4:
	        if (sNum > 3) {
	          sNum = 1;
            }
	        if (sNum == 1 || sNum == 3) {
			  layer0p1out += processChar[i];
	          layer0p1out += randChar;
	          
	          sNum++;
            } else if (sNum == 2) {
              layer0p1out += processChar[i];
              sNum++;
            }
	        break;
        }
      }
      
      var layer0p1outChar = layer0p1out.split('');
      var rev = layer0p1out.length-1;
       
	  while (layer0out.length < layer0p1out.length) {

		  layer0out += layer0p1outChar[rev];
		  rev -= 1;
      }   
      
}

/* ---- Layer0 - Decrypt ---- */

function decryptL0() {
	  processString = layer1out;
	  processChar = layer1out.split('');
	  layer0out = "";
	  layer0p1out = "";
	  
	  let pCharLength = processString.length;
	  let rev = processString.length - 1; 
	  
	 while (layer0p1out.length < pCharLength) {
	   layer0p1out += processChar[rev];
	   rev -= 1;
     }
	 
     let layer0p1outChar = layer0p1out.split('');
     let sNum = 1;
     switch (L0Type) {
	      case 0:
            for (let i = 0; i < layer0p1outChar.length; i++) {
              if (sNum > 5) {
                sNum = 1;
              }
              if (sNum == 2 || sNum == 4 || sNum == 5) {
                layer0out += layer0p1outChar[i];
              }
              sNum++;
            }
	        break;
	        
	      case 1:
	        for (let i = 0; i < layer0p1outChar.length; i++) {
              if (sNum > 5) {
                sNum = 1;
              }
              if (sNum == 1 || sNum == 3 || sNum == 5) {
                layer0out += layer0p1outChar[i];
              }
              sNum++;
            }
	        break;
	        
	      case 2:
	        for (let i = 0; i < layer0p1outChar.length; i++) {
              if (sNum > 5) {
                sNum = 1;
              }
              if (sNum == 2 || sNum == 3 || sNum == 5) {
                layer0out += layer0p1outChar[i];
              }
              sNum++;
            }
	        break;
			
		  case 3:
	        for (let i = 0; i < layer0p1outChar.length; i++) {
              if (sNum > 5) {
                sNum = 1;
              }
              if (sNum == 1 || sNum == 2 || sNum == 4) {
                layer0out += layer0p1outChar[i];
              }
              sNum++;
            }
	        break;
			
		  case 4:
	        for (let i = 0; i < layer0p1outChar.length; i++) {
              if (sNum > 5) {
                sNum = 1;
              }
              if (sNum == 1 || sNum == 3 || sNum == 4) {
                layer0out += layer0p1outChar[i];
              }
              sNum++;
            }
	        break;
        }
        
}



/* ---- Layer1 - Encrypt ---- */
function encryptL1() {
		layer1out = "";
		processString = layer0out;
		processChar = layer0out.split('');
     
	   for (let i = 0; i < processChar.length; i++) {
	
	     let arrNum = 0;
        
         while (arrNum < 94  && processChar[i] != charSet[arrNum]) {
          if (arrNum != 94) {
           arrNum++;
          };
         }
         if (arrNum <= 94) {
          if (processChar[i] == charSet[arrNum]){
	          layer1out += charSet[StaticKeyL1[arrNum]];
          }else {
           layer1out += processChar[i];
          }
         }   
      }
     
}

/* ---- Layer1 - Decrypt ---- */
function decryptL1() {
		layer1out = "";
		processString = layer2out;
		processChar = layer2out.split('');
  
	  for (let i = 0; i < processChar.length; i++) {
	 
	    let arrNum = 0;
        
        while (arrNum < 94 && processChar[i] != charSet[StaticKeyL1[arrNum]]) {
         if (arrNum != 94) {
            arrNum++;
         
         }
        }
        if (arrNum <= 94) {
         if (processChar[i] == charSet[StaticKeyL1[arrNum]]){
	         layer1out += charSet[arrNum];
         }else {
           layer1out += processChar[i];
         }
        }
	   
     }
}

/* ---- Layer2 - Encrypt ---- */
function encryptL2() {
		layer2out = "";
		processString = layer1out;
		processChar = layer1out.split('');
		
		p1ProcessString = "";
		p2ProcessString = "";
		p3ProcessString = "";
		layer2p1out = "";
		layer2p2out = "";
		layer2p3out = "";
		
		distributeChars();
		
		encryptL2p1();
		p1Out = layer2p1out.split('');
		
		encryptL2p2();
		p2Out = layer2p2out.split('');
		
		encryptL2p3();
		p3Out = layer2p3out.split('');

		compile();

}

/* ---- Layer2 - Decrypt ---- */
function decryptL2() {
		layer2out = "";
		processString = input;
		processChar = input.split('');
		
		p1ProcessString = "";
		p2ProcessString = "";
		p3ProcessString = "";
		layer2p1out = "";
		layer2p2out = "";
		layer2p3out = "";
		
		distributeChars();
		
		decryptL2p1();
		p1Out = layer2p1out.split('');
	
		decryptL2p2();
		p2Out = layer2p2out.split('');
		
		decryptL2p3();
		p3Out = layer2p3out.split('');
		
		compile();

}

/* ---- Layer2 - Related  ---- */
function distributeChars() {
	  let ones = 0;
	  let twos = 1;
	  let threes = 2;
	  let pslength = processString.length - 1;
	  
	  let p1ProcessStringTmp = "";
	  let p2ProcessStringTmp = "";
	  let p3ProcessStringTmp = "";
	  
	  try{
	  while (ones <= pslength) {
	   p1ProcessStringTmp += processChar[ones];
	   ones += 3;
	  }
	  }catch (e){
		  console.log(e);
	  }
	  
	  try{
	  while (twos <= pslength) {
	   p2ProcessStringTmp += processChar[twos];
	   twos += 3; 
	  }
	  }catch (e){
		  console.log(e);
	  }
	  
	  try{
	  while (threes <= pslength) {
	   p3ProcessStringTmp += processChar[threes];
	   threes += 3; 
	  }
	  }catch (e){
		  console.log(e);
	  }
	  
	  switch (L2pAsign) {
	    case 0:
	      p1ProcessString = p1ProcessStringTmp;
	      p2ProcessString = p2ProcessStringTmp;
	      p3ProcessString = p3ProcessStringTmp;
	      break;
	    case 1:
	      p1ProcessString = p3ProcessStringTmp;
	      p2ProcessString = p2ProcessStringTmp;
	      p3ProcessString = p1ProcessStringTmp;
	      break;
	    case 2:
	      p1ProcessString = p1ProcessStringTmp;
	      p2ProcessString = p3ProcessStringTmp;
	      p3ProcessString = p2ProcessStringTmp;
	      break;
	    case 3:
	      p1ProcessString = p2ProcessStringTmp;
	      p2ProcessString = p1ProcessStringTmp;
	      p3ProcessString = p3ProcessStringTmp;
	      break;
	    case 4:
	      p1ProcessString = p3ProcessStringTmp;
	      p2ProcessString = p1ProcessStringTmp;
	      p3ProcessString = p2ProcessStringTmp;
	      break;
	    case 5:
	      p1ProcessString = p2ProcessStringTmp;
	      p2ProcessString = p3ProcessStringTmp;
	      p3ProcessString = p1ProcessStringTmp;
	      break;
	    default:
	      log("Error at L2PAD");
      }
	 
}

function compile() {
	
	 layer2out = "";
	 let num = 0;
	 let lengthIn = processString.length - 1;
	 let lengthOut = layer2out.length;
	 let lengthLayer2p1out = layer2p1out.length;
	 let lengthLayer2p2out = layer2p2out.length;
	 let lengthLayer2p3out = layer2p3out.length;
	 
	 switch (L2pAsign) {
	   case 0:
	     try{
	     while (lengthIn >= lengthOut) {
		   
		   if (num < lengthLayer2p1out) {
			layer2out += p1Out[num];
		   }
		   if (num < lengthLayer2p2out) {
			layer2out += p2Out[num];
		   }
		   if (num < lengthLayer2p3out) {
			layer2out += p3Out[num];
		   }
		   
	       num++;
		   lengthOut = layer2out.length;
	    }
	    }catch (e){
			console.log(e);
		}
	    break;
	  case 1:
	     try{
	     while (lengthIn >= lengthOut) {
	     
		   if (num < lengthLayer2p3out) {
			layer2out += p3Out[num];
		   }
		   if (num < lengthLayer2p2out) {
			layer2out += p2Out[num];
		   }
		   if (num < lengthLayer2p1out) {
			layer2out += p1Out[num];
		   }
		   
	       num++;
		   lengthOut = layer2out.length;
	    }
	    }catch (e){
			console.log(e);
		}
	    break;
	  case 2:
	     try{
	     while (lengthIn >= lengthOut) {
	     
		   if (num < lengthLayer2p1out) {
			layer2out += p1Out[num];
		   }
		   if (num < lengthLayer2p3out) {
			layer2out += p3Out[num];
		   }
		   if (num < lengthLayer2p2out) {
			layer2out += p2Out[num];
		   }
		   
	       num++;
		   lengthOut = layer2out.length;
	    }
	    }catch (e){
			console.log(e);
		}
	    break;
	  case 3:
	     try{
	     while (lengthIn >= lengthOut) {
	       
		   if (num < lengthLayer2p2out) {
			layer2out += p2Out[num];
		   }
		   if (num < lengthLayer2p1out) {
			layer2out += p1Out[num];
		   }
		   if (num < lengthLayer2p3out) {
			layer2out += p3Out[num];
		   }
		   
	       num++;
		   lengthOut = layer2out.length;
	    }
	    }catch (e){
			console.log(e);
		}
	    break;
	  case 4:
	     try{
	     while (lengthIn >= lengthOut) {
	       
		   if (num < lengthLayer2p2out) {
			layer2out += p2Out[num];
		   }
			if (num < lengthLayer2p3out) {
	       layer2out += p3Out[num];
		   }
			if (num < lengthLayer2p1out) {
	       layer2out += p1Out[num];
		   }
		   
	       num++;
		   lengthOut = layer2out.length;
	    }
	    }catch (e){
			console.log(e);
		}
	    break;
	  case 5:
	     try{
	     while (lengthIn >= lengthOut) {
	       
		   if (num < lengthLayer2p3out) {
			layer2out += p3Out[num];
		   }
		   if (num < lengthLayer2p1out) {
			layer2out += p1Out[num];
		   }
		   if (num < lengthLayer2p2out) {
			layer2out += p2Out[num];
		   }
		   
	       num++;
		   lengthOut = layer2out.length;
	    }
	    }catch (e){
			console.log(e);
		}
	    break;
	  default:
	      log("Error at L2PAC");
	}
}


/* ---- Layer2p1 - Encrypt ---- */
function encryptL2p1() {
		p1ProcessChar = p1ProcessString.split('');
     
	   for (let i = 0; i < p1ProcessChar.length; i++) {
	
	     let arrNum = 0;
        
         while (arrNum < 94  && p1ProcessChar[i] != charSet[arrNum]) {
          if (arrNum != 94) {
           arrNum++;
          };
         }
         if (arrNum <= 94) {
          if (p1ProcessChar[i] == charSet[arrNum]){
	          layer2p1out += charSet[StaticKeyL2P1[arrNum]];
          }else {
           layer2p1out += p1ProcessChar[i];
          }
         }   
      }
     
}

/* ---- Layer2p1 - Decrypt ---- */
function decryptL2p1() {
	   p1ProcessChar = p1ProcessString.split('');
     
	  for (let i = 0; i < p1ProcessChar.length; i++) {
	    let arrNum = 0;
        
        while (arrNum < 94 && p1ProcessChar[i] != charSet[StaticKeyL2P1[arrNum]]) {
         if (arrNum != 94) {
            arrNum++;
         
         }
        }
        if (arrNum <= 94) {
         if (p1ProcessChar[i] == charSet[StaticKeyL2P1[arrNum]]){
	         layer2p1out += charSet[arrNum];
         }else {
           layer2p1out += p1ProcessChar[i];
          }
        }
	   
     }
     
}


/* ---- Layer2p2 - Encrypt ---- */
function encryptL2p2() {
		p2ProcessChar = p2ProcessString.split('');
     
	   for (let i = 0; i < p2ProcessChar.length; i++) {
	     let arrNum = 0;
        
         while (arrNum < 94  && p2ProcessChar[i] != charSet[arrNum]) {
          if (arrNum != 94) {
           arrNum++;
          };
         }
         if (arrNum <= 94) {
          if (p2ProcessChar[i] == charSet[arrNum]){
	          layer2p2out += charSet[StaticKeyL2P2[arrNum]];
          }else {
           layer2p2out += p2ProcessChar[i];
          }
         }   
      }
     

}
/* ---- Layer2p2 - Decrypt ---- */
function decryptL2p2() {
		p2ProcessChar = p2ProcessString.split('');
     
	  for (let i = 0; i < p2ProcessChar.length; i++) {
	    let arrNum = 0;
        
        while (arrNum < 94 && p2ProcessChar[i] != charSet[StaticKeyL2P2[arrNum]]) {
         if (arrNum != 94) {
            arrNum++;
         
         }
        }
        if (arrNum <= 94) {
         if (p2ProcessChar[i] == charSet[StaticKeyL2P2[arrNum]]){
	         layer2p2out += charSet[arrNum];
         }else {
           layer2p2out += p2ProcessChar[i];
          }
        }
	   
     }
     
}

/* ---- Layer2p3 - Encrypt ---- */
function encryptL2p3() {
	     p3ProcessChar = p3ProcessString.split('');
     
	  for (let i = 0; i < p3ProcessChar.length; i++) {
	    let arrNum = 0;
        
         while (arrNum < 94  && p3ProcessChar[i] != charSet[arrNum]) {
          if (arrNum != 94) {
           arrNum++;
          };
         }
         if (arrNum <= 94) {
          if (p3ProcessChar[i] == charSet[arrNum]){
	          layer2p3out += charSet[StaticKeyL2P3[arrNum]];
          }else {
           layer2p3out += p3ProcessChar[i];
          }
         }   
      }
     
}
     
/* ---- Layer2p3 - Decrypt ---- */
function decryptL2p3() {  
	     p3ProcessChar = p3ProcessString.split('');
     
	  for (let i = 0; i < p3ProcessChar.length; i++) {
	    let arrNum = 0;
        
        while (arrNum < 94 && p3ProcessChar[i] != charSet[StaticKeyL2P3[arrNum]]) {
         if (arrNum != 94) {
            arrNum++;
         
         }
        }
        if (arrNum <= 94) {
         if (p3ProcessChar[i] == charSet[StaticKeyL2P3[arrNum]]){
	         layer2p3out += charSet[arrNum];
         }else {
           layer2p3out += p3ProcessChar[i];
          }
        }
	   
     }
     
}
