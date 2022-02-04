console.log("hello world");


const duckPic = document.querySelector('#duck-pic')


duckPic.addEventListener('mouseover', () => {
	window.alert("You have what it takes! Believe in yourself!");

})

function handleSubmit(evt) {
	evt.preventDefault();
	
	window.alert("Form has been submitted successfully!");

}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);