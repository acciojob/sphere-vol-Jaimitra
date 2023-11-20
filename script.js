function volume_sphere() {
    //Write your code here
    let radius = document.querySelector("#radius");
	let vol = document.querySelector("#volume");
	vol.value = (4/3)*3.14*(radius.value ** 3);
} 

// window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
