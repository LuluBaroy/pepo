jQuery(function($){
	$('#button_quit_mobile').on('click', function(e){
		let newTabUrl = 'https://google.fr';
		let thisTabUrl = 'https://google.fr';
		document.body.innerHTML = ''
		let win = window.open(newTabUrl, '_blank');
		win.focus();
		window.location.replace(thisTabUrl);
		window.close()
	})
	$('#button_quit').on('click', function(e){
		let newTabUrl = 'https://google.fr';
		let thisTabUrl = 'https://google.fr';
		document.body.innerHTML = ''
		let win = window.open(newTabUrl, '_blank');
		win.focus();
		window.location.replace(thisTabUrl);
		window.close()
	})
})