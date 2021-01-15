//functions start after document has fully loaded
$(document).ready(function(){
	//ajax to edit page without reloading
	$.ajax({
	//accessing xml file
	url:"ayushgupta.xml",
	datatype:"xml",
		//does follwoing if successful
		success:function(data){
			// Family Data 
			familyname = $(data).find("name")[0];
			$("#familyname").append(familyname);

			familyage = $(data).find("age")[0];
			$("#familyage").append(familyage);

			familyrelation = $(data).find("relation")[0];
			$("#familyrelation").append(familyrelation);

			familyjob = $(data).find("job")[0];
			$("#familyjob").append(familyjob);

			// bio data
			bioname = $(data).find("myName")[0];
			$("#bioname").append(bioname);

			bioage = $(data).find("myAge")[0];
			$("#bioage").append(bioage);

			bioheight = $(data).find("myHeight")[0];
			$("#bioheight").append(bioheight);

			biograde = $(data).find("myGrade")[0];
			$("#biograde").append(biograde);

			bioschool = $(data).find("mySchool")[0];
			$("#bioschool").append(bioschool);

			//family data
			i = 1;
			$("#familybtn").click(function(){
				familyname = $(data).find("name")[i];
				document.getElementById("familyname").innerHTML = "&nbsp";
				$("#familyname").append(familyname);

				familyage = $(data).find("age")[i];
				document.getElementById("familyage").innerHTML = "&nbsp";
				$("#familyage").append(familyage);

				familyrelation = $(data).find("relation")[i];
				document.getElementById("familyrelation").innerHTML = "&nbsp";
				$("#familyrelation").append(familyrelation);

				familyjob = $(data).find("job")[i];
				document.getElementById("familyjob").innerHTML = "&nbsp";
				$("#familyjob").append(familyjob);

				if(i == 0){
					document.getElementById("familyimg").src = "https://i.pinimg.com/originals/1c/3e/ea/1c3eeac35b38c5ec666ff56d6fe8a7ac.jpg";
				} 
				else if(i == 1){
					document.getElementById("familyimg").src = "data:image/png;base64,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";
				}
				else{
					document.getElementById("familyimg").src = "https://i.pinimg.com/originals/98/b0/35/98b0356be32d2c78c1e613ad76f2598d.gif";
				}

				i = i + 1;
				if(i >= 3){
					i = 0;
				}
			});

			//house data
			$("#housebtn").click(function(){
				document.getElementById("houseimg").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTDqOp1NUfWf7K8zRhkchuimQUiCuKgHYTkg&usqp=CAU";
				document.getElementById("earth").style.display = "block";
			});
			$("#livebtn").click(function(){
				document.getElementById("liveimg").src = "https://www.mlive.com/resizer/QyU6XcKvCUY-7LCH4tgPstW2_Z4=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/WGN4RTJIZBCKZLO2DUSJ7J4UQQ.jpg";
				document.getElementById("moon").style.display = "block";
			});
		//does following if unsuccessful
		},
		error:function(){
			$("p").append("Error")
		},
	});
});
//functions for autocomplete in hobbies section
function autocomplete(inp, arr) {
var currentFocus;
/*execute a function when someone writes in the text field:*/
inp.addEventListener("input", function(e) {
	var a, b, i, val = this.value;
	/*close any already open lists of autocompleted values*/
	closeAllLists();
	if (!val) { return false;}
	currentFocus = -1;
	/*create a DIV element that will contain the items (values):*/
	a = document.createElement("DIV");
	a.setAttribute("id", this.id + "autocomplete-list");
	a.setAttribute("class", "autocomplete-items");
	/*append the DIV element as a child of the autocomplete container:*/
	this.parentNode.appendChild(a);
	/*for each item in the array...*/
	for (i = 0; i < arr.length; i++) {
		/*check if the item starts with the same letters as the text field value:*/
		if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
		/*create a DIV element for each matching element:*/
		b = document.createElement("DIV");
		/*make the matching letters bold:*/
		b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
		b.innerHTML += arr[i].substr(val.length);
		/*insert a input field that will hold the current array item's value:*/
		b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
		/*execute a function when someone clicks on the item value (DIV element):*/
		b.addEventListener("click", function(e) {
			/*insert the value for the autocomplete text field:*/
			inp.value = this.getElementsByTagName("input")[0].value;
			/*close the list of autocompleted values,
			(or any other open lists of autocompleted values:*/
			closeAllLists();
		});
		a.appendChild(b);
		}
	}
});
/*execute a function presses a key on the keyboard:*/
inp.addEventListener("keydown", function(e) {
	var x = document.getElementById(this.id + "autocomplete-list");
	if (x) x = x.getElementsByTagName("div");
	if (e.keyCode == 40) {
		/*If the arrow DOWN key is pressed,
		increase the currentFocus variable:*/
		currentFocus++;
		/*and and make the current item more visible:*/
		addActive(x);
	} else if (e.keyCode == 38) { //up
		/*If the arrow UP key is pressed,
		decrease the currentFocus variable:*/
		currentFocus--;
		/*and and make the current item more visible:*/
		addActive(x);
	} else if (e.keyCode == 13) {
		/*If the ENTER key is pressed, prevent the form from being submitted,*/
		e.preventDefault();
		if (currentFocus > -1) {
		/*and simulate a click on the "active" item:*/
		if (x) x[currentFocus].click();
		}
	}
});
function addActive(x) {
	/*a function to classify an item as "active":*/
	if (!x) return false;
	/*start by removing the "active" class on all items:*/
	removeActive(x);
	if (currentFocus >= x.length) currentFocus = 0;
	if (currentFocus < 0) currentFocus = (x.length - 1);
	/*add class "autocomplete-active":*/
	x[currentFocus].classList.add("autocomplete-active");
}
function removeActive(x) {
	/*a function to remove the "active" class from all autocomplete items:*/
	for (var i = 0; i < x.length; i++) {
		x[i].classList.remove("autocomplete-active");
	}
}
function closeAllLists(elmnt) {
	/*close all autocomplete lists in the document,
	except the one passed as an argument:*/
	var x = document.getElementsByClassName("autocomplete-items");
	for (var i = 0; i < x.length; i++) {
		if (elmnt != x[i] && elmnt != inp) {
			x[i].parentNode.removeChild(x[i]);
		}
	}
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
	closeAllLists(e.target);
	});
}
/*An array containing all the country names in the world:*/
var hobbies = ['volleyball', 'art', 'sleep', 'video games', 'basketball'];
/*initiate the autocomplete function on the "myInput" element, and pass along the hobbies array as possible autocomplete values:*/
autocomplete(document.getElementById("myInput"), hobbies);
//ajax to change content in page
$.ajax({
url:"ayushgupta.xml",
datatype:"xml",
success:function(data){
	//hobby data
	$("#hobbyform").submit(function(){
		hobbytitle = $(data).find("title")[0];
		value = $("#myInput").val();
		document.getElementById("hobbytitle").innerHTML = value.toUpperCase();;
		$("#hobbytitle").append(hobbytitle);
		var source = "";
		if(value == "video games"){
			value = "videogames";
			source = "https://www.seekpng.com/png/detail/27-278717_joystick-playstation-ps3-video-game-video-game-controller.png";
		}
		else if(value == "volleyball"){
			source = "https://www.nicepng.com/png/detail/49-492978_free-volleyball-player-silhouette-clipart-image-volleyball-silhouette.png";
		}
		else if(value == "art"){
			source = "https://illustoon.com/photo/3122.png";
		}
		else if(value == "sleep"){
			source = "https://www.nicepng.com/png/detail/959-9597300_sleeping-sleep-zzz-zs-sleeping-silhouette.png";
		}
		else if(value == "basketball"){
			source = "https://www.vinylsilhouettes.com/content/images/thumbs/0002875_basketball-player-3-sports-decor-silhouette-decals_550.gif";
		}
		document.getElementById("hobbyimg").src = source;

		hobbydescription = $(data).find(value)[0];
		document.getElementById("hobbydescription").innerHTML = "&nbsp";
		$("#hobbydescription").append(hobbydescription);
		return false;
	})
},
//does if not successful loading xml
error:function(){
	$("p").append("Error")
},
});