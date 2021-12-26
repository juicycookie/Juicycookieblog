function getIntroduce() {
	//get content for project
	var i = 0;
	setInterval(function(){
		i++;
		if(i % 2 == 1) {
			
				$('#aboutimage').attr('src','about2.jpg');
			
		} else {
			
				$('#aboutimage').attr('src','about.jpg');
			
		}
	},3000);
}



$(function(){
//initial
getIntroduce();



});
//function for show image
function clickimages(pnum,imageNum) {
//choose project for use pnum
if(pnum == 1) {
var imageUrl = project1.images[imageNum].url;
var imagedes = project1.images[imageNum].description;
$('#mainImage').attr('src',imageUrl);
$('#desc').html(imagedes);
} else if(pnum == 2) {
var imageUrl = project2.images[imageNum].url;
var imagedes = project2.images[imageNum].description;
$('#mainImage').attr('src',imageUrl);
$('#desc').html(imagedes);
} else if(pnum == 3) {
var imageUrl = project3.images[imageNum].url;
var imagedes = project3.images[imageNum].description;
$('#mainImage').attr('src',imageUrl);
$('#desc').html(imagedes);
} else if(pnum == 4){
var imageUrl = project4.images[imageNum].url;
var imagedes = project4.images[imageNum].description;
$('#mainImage').attr('src',imageUrl);
$('#desc').html(imagedes);
} else{
var imageUrl = project5.images[imageNum].url;
var imagedes = project5.images[imageNum].description;
$('#mainImage').attr('src',imageUrl);
$('#desc').html(imagedes);
}
$('#myModal').modal('show')
}


function clickp5() {
	//window.location.href= 'double-page/magzineP5.html';
	window.open('double-page/magzineP5.html',target='_blank');   
}


function introduceShowAll(num) {
	if(num == 1){
		$('#prjectintroduce').html(project1.introdcue + '<a href="javascript:void(0)" onclick="introduceClose(1)">collapse</a>');
	}
	if(num == 2){
		$('#prjectintroduce').html(project2.introdcue + '<a href="javascript:void(0)" onclick="introduceClose(2)">collapse</a>');
	}
	if(num == 3){
		$('#prjectintroduce').html(project3.introdcue + '<a href="javascript:void(0)" onclick="introduceClose(3)">collapse</a>');
	}
	if(num == 4){
		$('#prjectintroduce').html(project4.introdcue + '<a href="javascript:void(0)" onclick="introduceClose(4)">collapse</a>');
	}
	if(num == 5){
		$('#prjectintroduce').html(project5.introdcue + '<a href="javascript:void(0)" onclick="introduceClose(5)">collapse</a>');
	}
}

function introduceClose(num) {
	if(num == 1){
		$('#prjectintroduce').html(project1.introdcue.substring(0,100) + '<a href="javascript:void(0)" onclick="introduceShowAll(1)">......</a>');
	}
	if(num == 2){
		$('#prjectintroduce').html(project2.introdcue.substring(0,100) + '<a href="javascript:void(0)" onclick="introduceShowAll(2)">......</a>');
	}
	if(num == 3){
		$('#prjectintroduce').html(project3.introdcue.substring(0,100) + '<a href="javascript:void(0)" onclick="introduceShowAll(3)">......</a>');
	}
	if(num == 4){
		$('#prjectintroduce').html(project4.introdcue.substring(0,100) + '<a href="javascript:void(0)" onclick="introduceShowAll(4)">......</a>');
	}
	if(num == 5){
		$('#prjectintroduce').html(project5.introdcue.substring(0,100) + '<a href="javascript:void(0)" onclick="introduceShowAll(5)">......</a>');
	}
}

