const inputs = document.querySelectorAll(".input");

function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

const form = document.getElementById("login-form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // if (username === "1" && password === "1") {
    //   window.location.href = "home.html";
    // } else {
    //   alert("Incorrect username or password");
    //   // Add code here to show an error message or alert the user
    // }

    window.location.href = "home.html";
});
