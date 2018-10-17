const getById = id => document.getElementById(id);

const feedbackTemplate = (text, date, time, nickname) => ` 
    <div class="request">
        <p>${text}</p>
        <div class="req-footer">
            <div class="date">${date}, ${time}</div>
            <div class="nickname">${nickname}</div>
        </div>
    </div>
`

function sendFeedback() {
	var username = "Anonym";
    var feedbackTextarea = getById("feedback-text");
	var feedbackContainer = getById("feedback-container");

    if (feedbackTextarea.value.length == 0) {
    	alert("Please add feedback description");
    	return;
    }

    var date = new Date();

    $('#feedback-container').prepend(
    	feedbackTemplate(feedbackTextarea.value, date.toLocaleDateString(), date.toLocaleTimeString(), username)
    );

    feedbackTextarea.value = "";
}
