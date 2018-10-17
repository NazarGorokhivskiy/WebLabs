const getById = id => document.getElementById(id);

window.onload = function () {
	addImage();
}

function addImage() {
	var imageButton = getById("upload-image-button");
	var	imageDiv = getById("news-image");

	var fr = new FileReader();
	
	fr.onload = function(e) { imageDiv.src = this.result; };
	
	imageButton.addEventListener("change", function() {
		fr.readAsDataURL(imageButton.files[0]);
	});
}

function addNews() {
	var titleArea = getById("news-title");
	var	textArea = getById("news-text");

	if (titleArea.value.length == 0) {
		titleArea.classList.add("error-textarea");
		titleArea.placeholder = "Please, add news title";
		return;
	} else {
		titleArea.classList.remove("error-textarea");
	}

	if (textArea.value.length == 0) {
		textArea.classList.add("error-textarea");
		textArea.placeholder = "Please, add news text";
		return;
	} else {
		textArea.classList.remove("error-textarea");
	}
	

	titleArea.value = '';
	textArea.value = '';
	alert("News was successfully added!");
}
