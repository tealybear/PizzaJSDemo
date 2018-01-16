
function getReceipt() {
	var text1 = "";
	var text2 = "";
	var curTotal = 0;
	var sizeTotal = 0;
	var selectedSize = "";
    var sizeArray = document.getElementsByClassName("size")
	/* Add 1 to X while the amount of items in the 
	array are greater than X */
	for (var x = 0; x < sizeArray.length; x++) {
		if (sizeArray[x].checked) {
			var selectedSize = sizeArray[x].value;
			text1 = text1+selectedSize+"<br>";
	    }
    }
	if (selectedSize === "personal") {
		sizeTotal = 6;
		text2 = text2+sizeTotal+"<br>";
	} else if (selectedSize === "medium") {
		sizeTotal = 10;
		text2 = text2+sizeTotal+"<br>";
	} else if (selectedSize === "large") {
		sizeTotal = 14;
		text2 = text2+sizeTotal+"<br>";
	} else if (selectedSize === "extralarge") {
		sizeTotal = 16;
		text2 = text2+sizeTotal+"<br>";
	}
	curTotal = sizeTotal;
	getMeat(curTotal,text1,text2);	
};

function getMeat(curTotal,text1,text2) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meats");
	for (var y = 0; y < meatArray.length; y++) {
		if (meatArray[y].checked) {
			selectedMeat.push(meatArray[y].value);
			text1 = text1+meatArray[y].value+"<br>";
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
			meatTotal = (meatCount - 1);
	} else {
			meatTotal = 0;
	}
	curTotal = (curTotal + meatTotal);
	getVeg(curTotal,text1,text2);
};

function getVeg(curTotal,text1,text2) {
	var vegTotal = 0;
	var selectedVeg = [];
	var vegArray = document.getElementsByClassName("vegetables");
	for (var z = 0; z < vegArray.length; z++) {
		if (vegArray[z].checked) {
			selectedVeg.push(vegArray[z].value);
			text1 = text1+vegArray[z].value+"<br>";
		}
	}
	var vegCount = selectedVeg.length;
	if (vegCount > 1) {
			vegTotal = (vegCount - 1);
	} else {
			vegTotal= 0;
	}
	curTotal = (curTotal + vegTotal);
	getCheese(curTotal,text1,text2);
};

function getCheese(curTotal,text1,text2) {
	var cheeseTotal = 0;
	var selectedCheese = [];
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var w = 0; w < cheeseArray.length; w++) {
		if (cheeseArray[w].checked) {
			selectedCheese.push(cheeseArray[w].value);
		}
		if (selectedCheese == "extracheese") {
				cheeseTotal = 3;
		}
	}
	curTotal = (curTotal + cheeseTotal);
	text2 = text2+cheeseTotal+"<br>";
	text1 = text1+selectedCheese+"<br>";
	getSauce(curTotal,text1,text2);
};

function getSauce(curTotal,text1,text2) {
	var sauceArray = document.getElementsByClassName("sauce");
	for (var v = 0; v < sauceArray.length; v++) {
		if (sauceArray[v].checked) {
			selectedSauce = sauceArray[v].value;
			text1 = text1 + selectedSauce +"<br>";
		}
	}
	text2 = text2 + 0 + "<br>";
	getCrust(curTotal,text1,text2);
};

function getCrust(curTotal,text1,text2) {
	var crustTotal = 0;
	var selectedCrust = [];
	var crustArray = document.getElementsByClassName("crust")
	for (var u = 0; u < crustArray.length; u++) {
		if (crustArray[u].checked) {
			selectedCrust.push(crustArray[u].value);
			text1 = text1 + selectedCrust + "<br>";
		}
		if (selectedCrust == "cheesestuffed") {
				crustTotal = 3;
		}
	}
	text2 = text2 + crustTotal + "<br>";
	curTotal = (curTotal + crustTotal);
	document.getElementById("cart").style.opacity=1;
	document.getElementById("showText2").innerHTML = text1;
	document.getElementById("totalPrice").innerHTML = curTotal+".00";

};

function clearSelected() {
	document.getElementById("menuform").reset();
	document.getElementById("cart").style.opacity=0;
};
	
	
	
	
	
	
	
	
	
	
	
	
	