let menuBox = document.getElementById('menuBox');
let menuToggle = document.getElementById('menu-toggle');
menuBox.addEventListener('click', function(event) {
	let target = event.target;
	if (target.tagName != 'A') return;
	menuBox.hidden = true;
	//menuToggle.setAttribute('checked', false);
	menuToggle.checked = false;
}); 