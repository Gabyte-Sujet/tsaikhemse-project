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
};

const menuIcon = document.querySelector('.burger');
const navbar = document.querySelector('.res-menu');
let a = document.querySelectorAll('header .res-menu ul li a');



menuIcon.addEventListener("click", () => {
	navbar.classList.toggle("change");
	menuIcon.classList.toggle("change1");
});


a.forEach((e)=> {
	e.addEventListener('click', (event) => {
		event.preventDefault();
		navbar.classList.add("change");
		menuIcon.classList.add("change1");
	})
})

let pageDown = document.querySelector('.page-down');
pageDown.addEventListener('click', () => {
	window.scroll({
		top: 800, 
		left: 0, 
		behavior: 'smooth' 
	   });
})