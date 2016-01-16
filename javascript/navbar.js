function w3_open() {
	document.getElementById("main_nav").style.marginLeft = "15%";
	document.getElementById("footer").style.marginLeft = "15%";
	document.getElementById("header").style.marginLeft = "15%";
	document.getElementById("about").style.marginLeft = "15%";
	document.getElementById("works").style.marginLeft = "15%";
	document.getElementById("what_friends_think").style.marginLeft = "15%";
	document.getElementById("contacts").style.marginLeft = "15%";
	document.getElementById("blog_posts").style.marginLeft = "15%";
	
	
    document.getElementsByClassName("w3-sidenav")[0].style.display = "block";
	
	document.getElementById("main_nav").style.transition = ".4s";
	document.getElementById("header").style.transition = ".4s";
	document.getElementById("about").style.transition = ".4s";
	document.getElementById("works").style.transition = ".4s";
	document.getElementById("what_friends_think").style.transition = ".4s";
	document.getElementById("contacts").style.transition = ".4s";
	document.getElementById("blog_posts").style.transition = ".4s";
	document.getElementById("footer").style.transition = ".8s";

}
function w3_close() {
	document.getElementById("main_nav").style.marginLeft = "0%";
	document.getElementById("header").style.marginLeft = "0%";
	document.getElementById("about").style.marginLeft = "0%";
	document.getElementById("works").style.marginLeft = "0%";
	document.getElementById("what_friends_think").style.marginLeft = "0%";
	document.getElementById("contacts").style.marginLeft = "0%";
	document.getElementById("blog_posts").style.marginLeft = "0%";
	document.getElementById("footer").style.marginLeft = "0%";
	
    document.getElementsByClassName("w3-sidenav")[0].style.display = "none";
	document.getElementById("main_nav").style.transition = ".8s";
	document.getElementById("header").style.transition = ".6s";
	document.getElementById("about").style.transition = ".6s";
	document.getElementById("works").style.transition = ".6s";
	document.getElementById("what_friends_think").style.transition = ".6s";
	document.getElementById("contacts").style.transition = ".6s";
	document.getElementById("blog_posts").style.transition = ".6s";
	document.getElementById("footer").style.transition = ".4s";
	
}