var treeHeight = document.getElementById("treeHeight");
var treeLeaf = document.getElementById("treeLeaf");
var grow = document.getElementById("growTree");
console.log("main.js loaded");
/* Christmas Tree in Console Log */
function buildTree(height, char) {
	validateForm();
	var space = " ";
	for (n=0; n<height; n+=1) {
		var tree = "";
		tree += space.repeat(height-n);
		tree += char.repeat(2*n+1);
		console.log(tree);
	}
}


function validateForm () {
	if (treeHeight.value== null || treeHeight.value== "" , treeLeaf.value== null || treeLeaf.value== "") {
		alert("Please give both a height and character to build a tree!");
     	return false
    }
}


grow.addEventListener("click" , function() {buildTree(treeHeight.value, treeLeaf.value)});
treeHeight.addEventListener("keypress", function(event) {
	if (event.keyCode ==13) {
		buildTree(treeHeight.value , treeLeaf.value);
	}
});
treeLeaf.addEventListener("keypress", function(event) {
	if (event.keyCode ==13) {
		buildTree(treeHeight.value , treeLeaf.value);
	}
});
