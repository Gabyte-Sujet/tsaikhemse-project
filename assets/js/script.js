let add_buttons = document.getElementsByClassName('add');

let bl = add_buttons.length;
for (let i = 0; i < bl; i++) {
	add_buttons[i].addEventListener('click', function(){
		// console.log(i);
		this.classList.toggle('active');
		if (this.classList.contains('active')){
			this.textContent = "დამატებულია";
		} else {
			this.textContent = "დამატება";
		}
	});
}
