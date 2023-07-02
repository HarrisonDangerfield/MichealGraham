// Pop Up

function togglePopup() {
    document.getElementById("popup").classList.toggle("active")
}

document.addEventListener('keydown', function(event){
	if(event.key === "Escape"){
document.getElementById("popup-1").classList.toggle("active");
	}
});
