var editor = document.getElementById('editor');

if (window.localStorage.getItem('sasEditorSavedText')) {
			editor.value = window.localStorage.getItem('sasEditorSavedText');
		}

function save() {
	var editorText = editor.value;
	window.localStorage.setItem('sasEditorSavedText', editorText);
}