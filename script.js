function showForm() {
document.getElementById("applyForm").style.display = "block";
}

document.getElementById("scholarshipForm").addEventListener("submit", function(e){

e.preventDefault();

document.getElementById("successMsg").innerHTML =
"Application submitted successfully!";

this.reset();

});