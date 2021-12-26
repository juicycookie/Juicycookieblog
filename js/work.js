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
//json for project
var project1 = {'introdcue':'this is other works','images':[{'url':'img/p6/1.jpg','description':'（HE, SHE, THEY）'},{'url':'img/p6/2.jpg','description':'（HE, SHE, THEY）'},{'url':'img/p6/3.jpg','description':'（HE, SHE, THEY）'}
,{'url':'img/p6/4.jpg','description':'（HE, SHE, THEY）'},{'url':'img/p6/5.jpg','description':'（HE, SHE, THEY）'},{'url':'img/p6/6.jpg','description':'（HE, SHE, THEY）'},
{'url':'img/p6/7.jpg','description':'人设（CHARACTER DESIGN）'},{'url':'img/p6/8.jpg','description':'人设（CHARACTER DESIGN）'},{'url':'img/p6/9.jpg','description':'人设（CHARACTER DESIGN）'},
{'url':'img/p6/10.jpg','description':'人设（CHARACTER DESIGN）'},{'url':'img/p6/11.jpg','description':'人设（CHARACTER DESIGN）'},{'url':'img/p6/12.jpg','description':'人设（CHARACTER DESIGN）'}
]};


$(function(){
//initial
getIntroduce();
$('#prjectintroduce').html(project1.introdcue.substring(0,100) + '<a href="javascript:void(0)" onclick="introduceShowAll(1)">......</a>');
var content = '';
var row_flag = 0;
if( project1.images.length > 0) {
content = content + '<div class="row">'
for(var i = 0;i < project1.images.length; i++) {
content = content + '<div class="col-lg-4 col-md-4"><div class="thumbnail "><a href="javascript:void(0)" onclick="clickimages(1,'+i+')"><img src="'+project1.images[i].url+'" class="img-responsive img-thumbnail" alt="Responsive image"></a></div></div>'
if((row_flag+1) % 3 == 0 && (row_flag+1) < project1.images.length) {
content = content + '</div><div class="row">'
}
row_flag++;
}
content = content +'</div>'
//console.log(content);
}

$('#projectbody').html(content);

//function for choose project
$('#projectbtn1').click(function(){
//change title for project 1
$('#projectTitle').html('PROJECT1 Ta们的故事（HE, SHE, THEY）');
//remove active for button
$('#projectbtn1').removeClass('active');
$('#projectbtn2').removeClass('active');
$('#projectbtn3').removeClass('active');
$('#projectbtn4').removeClass('active');
$('#projectbtn5').removeClass('active');
//add active for click button
$('#projectbtn1').addClass('active');
$('#prjectintroduce').html(project1.introdcue.substring(0,100) + '<a href="javascript:void(0)" onclick="introduceShowAll(1)">......</a>');
var content = '';
var row_flag = 0;
if( project1.images.length > 0) {
content = content + '<div class="row">'
for(var i = 0;i < project1.images.length; i++) {
content = content + '<div class="col-lg-4 col-md-4"><div class="thumbnail "><a href="javascript:void(0)" onclick="clickimages(1,'+i+')"><img src="'+project1.images[i].url+'" class="img-responsive img-thumbnail" alt="Responsive image"></a></div></div>'
if((row_flag+1) % 3 == 0 && (row_flag+1) < project1.images.length) {
content = content + '</div><div class="row">'
}
row_flag++;
}
content = content +'</div>'
}
$('#projectbody').html(content);
});

$('#projectbtn2').click(function(){
//change title for project 2
$('#projectTitle').html('PROJECT2 破晓之梦（WAKE UP IN THE DARK）');
//remove active for button
$('#projectbtn1').removeClass('active');
$('#projectbtn2').removeClass('active');
$('#projectbtn3').removeClass('active');
$('#projectbtn4').removeClass('active');
$('#projectbtn5').removeClass('active');
//add active for click button
$('#projectbtn2').addClass('active');
$('#prjectintroduce').html(project2.introdcue.substring(0,100) + '<a href="javascript:void(0)" onclick="introduceShowAll(2)">......</a>');
var content = '';
var row_flag = 0;
if( project2.images.length > 0) {
content = content + '<div class="row">'
for(var i = 0;i < project2.images.length; i++) {
content = content + '<div class="col-lg-4 col-md-4"><div class="thumbnail "><a href="javascript:void(0)" onclick="clickimages(2,'+i+')"><img src="'+project2.images[i].url+'" class="img-responsive img-thumbnail" alt="Responsive image"></a></div></div>'
if((row_flag+1) % 3 == 0 && (row_flag+1) < project2.images.length) {
content = content + '</div><div class="row">'
}
row_flag++;
}
content = content +'</div>'
}
$('#projectbody').html(content);
});

$('#projectbtn3').click(function(){
//change title for project 3
$('#projectTitle').html('PROJECT3 进击的维生素工厂（WORKING! VITAMIN FACTORY）');
//remove active for button
$('#projectbtn1').removeClass('active');
$('#projectbtn2').removeClass('active');
$('#projectbtn3').removeClass('active');
$('#projectbtn4').removeClass('active');
$('#projectbtn5').removeClass('active');
//add active for click button
$('#projectbtn3').addClass('active');
$('#prjectintroduce').html(project3.introdcue.substring(0,100) + '<a href="javascript:void(0)" onclick="introduceShowAll(3)">......</a>');
var content = '';
var row_flag = 0;
if( project3.images.length > 0) {
content = content + '<div class="row">'
for(var i = 0;i < project3.images.length; i++) {
content = content + '<div class="col-lg-4 col-md-4"><div class="thumbnail "><a href="javascript:void(0)" onclick="clickimages(3,'+i+')"><img src="'+project3.images[i].url+'" class="img-responsive img-thumbnail" alt="Responsive image"></a></div></div>'
if((row_flag+1) % 3 == 0 && (row_flag+1) < project3.images.length) {
content = content + '</div><div class="row">'
}
row_flag++;
}
content = content +'</div>'
}
$('#projectbody').html(content);
});

$('#projectbtn4').click(function(){
//change title for project 4
$('#projectTitle').html('PROJECT4 进击的维生素工厂（WORKING! VITAMIN FACTORY）');
//remove active for button
$('#projectbtn1').removeClass('active');
$('#projectbtn2').removeClass('active');
$('#projectbtn3').removeClass('active');
$('#projectbtn4').removeClass('active');
$('#projectbtn5').removeClass('active');
//add active for click button
$('#projectbtn4').addClass('active');
$('#prjectintroduce').html(project4.introdcue.substring(0,100) + '<a href="javascript:void(0)" onclick="introduceShowAll(4)">......</a>');
var content = '';
var row_flag = 0;
if( project4.images.length > 0) {
content = content + '<div class="row">'
for(var i = 0;i < project4.images.length; i++) {
content = content + '<div class="col-lg-4 col-md-4"><div class="thumbnail "><a href="javascript:void(0)" onclick="clickimages(4,'+i+')"><img src="'+project4.images[i].url+'" class="img-responsive img-thumbnail" alt="Responsive image"></a></div></div>'
if((row_flag+1) % 3 == 0 && (row_flag+1) < project4.images.length) {
content = content + '</div><div class="row">'
}
row_flag++;
}
content = content +'</div>'
}
$('#projectbody').html(content);
});
$('#projectbtn5').click(function(){
	//change title for project 5
$('#projectTitle').html('PROJECT5 嘎巴嘎巴的鼻涕虫（GABAGABA）');
//remove active for button
$('#projectbtn1').removeClass('active');
$('#projectbtn2').removeClass('active');
$('#projectbtn3').removeClass('active');
$('#projectbtn4').removeClass('active');
$('#projectbtn5').removeClass('active');
//add active for click button
$('#projectbtn5').addClass('active');
$('#prjectintroduce').html(project5.introdcue.substring(0,100) + '<a href="javascript:void(0)" onclick="introduceShowAll(5)">......</a>');
var content = '';
var row_flag = 0;
if( project5.images.length > 0) {
content = content + '<div class="row"><div class="col-lg-12 col-md-12"><div class="thumbnail "><a href="javascript:void(0)" onclick="clickp5()"><img src="'+project5.images[0].url+'" class="img-responsive img-thumbnail" alt="Responsive image"></a></div></div>'
/*for(var i = 0;i < project5.images.length; i++) {
content = content + '<div class="col-lg-4 col-md-4"><div class="thumbnail "><a href="javascript:void(0)" onclick="clickimages(5,'+i+')"><img src="'+project5.images[i].url+'" class="img-responsive img-thumbnail" alt="Responsive image"></a></div></div>'
if((row_flag+1) % 3 == 0 && (row_flag+1) < project5.images.length) {
content = content + '</div><div class="row">'
}
row_flag++;
}*/
content = content +'</div>'
}
$('#projectbody').html(content);
});


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

