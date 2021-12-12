// arrowUp прокрутка страницы вверх


window.onload = function(){
    document.getElementById('arrowUp').onclick = function(){
        window.scrollTo(0, 0);
    }    
};

// form to email

$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "send.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Савсибо!Ваш запрос отправлен");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});