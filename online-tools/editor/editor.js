const editor = document.getElementById('editor');
const saveFile = document.getElementById('saveFile');

if (window.localStorage.getItem('sasEditorSavedText')) {
			editor.value = window.localStorage.getItem('sasEditorSavedText');
		}
		
editor.addEventListener('keydown', (event) => {
      if (event.key === 'Tab') {
        event.preventDefault();
        const start = editor.selectionStart;
        const end = editor.selectionEnd;
        editor.value = editor.value.substring(0, start) + '\t' + editor.value.substring(end);
        editor.selectionStart = editor.selectionEnd = start + 1;
      }
    });

function save() {
	var editorText = editor.value;
	window.localStorage.setItem('sasEditorSavedText', editorText);
}

function saveToFile() {
	const textContent = editor.value;
    const blob = new Blob([textContent], {type: 'text/plain'});
    const url = URL.createObjectURL(blob);
	
    const link = document.createElement('a');
    link.download = saveFile.value;
    link.href = url;
    document.body.appendChild(link);
	
    link.click();
	
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}