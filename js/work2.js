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
var url1 = 'img/other/illustration/'
var desp1 = "juicy cookie's other works, created from 2020 to 2021"
var project1 = {'introdcue':desp1,'images':[{'url':url1+'1.jpg','description':'art jamming'},{'url':url1+'2.jpg','description':'profile photo'},{'url':url1+'3.jpg','description':'birthday'},
{'url':url1+'4.jpg','description':'art jamming 2'}, {'url':url1+'7.jpg','description':'the day of Juicycookie'},{'url':url1+'6.jpg','description':'Dr.Future'},{'url':url1+'10.jpg','description':'chathead of Juicycookie'},{'url':url1+'8.JPG','description':'chathead2'},{'url':url1+'9.JPG','description':'chathead3'},
{'url':url1+'11.JPG','description':'Moona Lisa'},{'url':url1+'12.JPG','description':'Girl with a Pig Earring'},{'url':url1+'13.JPG','description':'Lafemmeaushape'},{'url':url1+'14.JPG','description':'The Birth of Venuss'},{'url':url1+'5.jpg','description':'sadness'},]};


var url2 = 'img/other/IP design/'
var url4 = 'img/other/infographics/'

var project2 = {'introdcue':desp1,'images':[{'url':url4+'1.png','description':desp1},{'url':url4+'2.png','description':desp1},{'url':url4+'3.png','description':desp1},{'url':url4+'4.png','description':desp1}
,{'url':url4+'5.jpg','description':desp1},{'url':url4+'6.png','description':desp1},{'url':url4+'7.jpg','description':desp1}]};



var project3 = {'introdcue':desp1,'images':[{'url':url2+'1.jpg','description':desp1},{'url':url2+'2.jpg','description':desp1},{'url':url2+'3.jpg','description':desp1}]};

var des1 = 'CHARACTER SETTING';
var des2 = 'ILLUSTRATION';
var url3 = 'img/other/logo design/'
var project4 = {'introdcue':desp1,'images':[{'url':url3+'1.jpg','description':desp1},{'url':url3+'2.jpg','description':desp1},{'url':url3+'3.jpg','description':desp1},{'url':url3+'4.jpg','description':desp1}
,{'url':url3+'5.jpeg','description':desp1},{'url':url3+'6.jpeg','description':desp1},{'url':url3+'7.jpeg','description':desp1},{'url':url3+'8.jpeg','description':desp1}
,{'url':url3+'9.jpeg','description':desp1},{'url':url3+'10.jpeg','description':desp1},{'url':url3+'11.jpeg','description':desp1}]};


var project5 = {'introdcue':'Indiana university handbook','images':[{'url':'img/other/handbook/1.png','description':'P5 1 image'},{'url':'img/1.jpg','description':'P1 2 image'},{'url':'img/1.jpg','description':'P1 3 image'}
,{'url':'img/1.jpg','description':'P1 3 image'},{'url':'img/1.jpg','description':'P1 4 image'},{'url':'img/1.jpg','description':'P1 5 image'},{'url':'img/1.jpg','description':'P1 6 image'}
,{'url':'img/1.jpg','description':'P1 7 image'}]};

var project6 = {'introdcue':'Lance is the first ever on-demand photography application that allows consumers to book a professional photographer for a session as short as 5 minutes.','images':[{'url':'img/other/media/1.png','description':'P5 1 image'}]};
$(function(){
 getIntroduce();
 
//get introduce from localstorage


	

//initial

$('#prjectintroduce').html(project1.introdcue.substring(0,100) + '<a href="javascript:void(0)" onclick="introduceShowAll(1)"></a>');
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
$('#projectTitle').html('other works');
//remove active for button
$('#projectbtn1').removeClass('active');
$('#projectbtn2').removeClass('active');
$('#projectbtn3').removeClass('active');
$('#projectbtn4').removeClass('active');
$('#projectbtn5').removeClass('active');
$('#projectbtn6').removeClass('active');
//add active for click button
$('#projectbtn1').addClass('active');
$('#prjectintroduce').html(project1.introdcue.substring(0,100) + '<a href="javascript:void(0)" onclick="introduceShowAll(1)"></a>');
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
$('#projectTitle').html('other works');
//remove active for button
$('#projectbtn1').removeClass('active');
$('#projectbtn2').removeClass('active');
$('#projectbtn3').removeClass('active');
$('#projectbtn4').removeClass('active');
$('#projectbtn5').removeClass('active');
$('#projectbtn6').removeClass('active');
//add active for click button
$('#projectbtn2').addClass('active');
$('#prjectintroduce').html(project2.introdcue.substring(0,100) + '<a href="javascript:void(0)" onclick="introduceShowAll(2)"></a>');
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
$('#projectTitle').html('PROJECT3 WORKING! VITAMIN FACTORY');
//remove active for button
$('#projectbtn1').removeClass('active');
$('#projectbtn2').removeClass('active');
$('#projectbtn3').removeClass('active');
$('#projectbtn4').removeClass('active');
$('#projectbtn5').removeClass('active');
$('#projectbtn6').removeClass('active');
//add active for click button
$('#projectbtn3').addClass('active');
$('#prjectintroduce').html(project3.introdcue.substring(0,100) + '<a href="javascript:void(0)" onclick="introduceShowAll(3)"></a>');
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
$('#projectTitle').html('other works');
//remove active for button
$('#projectbtn1').removeClass('active');
$('#projectbtn2').removeClass('active');
$('#projectbtn3').removeClass('active');
$('#projectbtn4').removeClass('active');
$('#projectbtn5').removeClass('active');
$('#projectbtn6').removeClass('active');
//add active for click button
$('#projectbtn4').addClass('active');
$('#prjectintroduce').html(project4.introdcue.substring(0,100) + '<a href="javascript:void(0)" onclick="introduceShowAll(4)"></a>');
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
$('#projectTitle').html('other works');
//remove active for button
$('#projectbtn1').removeClass('active');
$('#projectbtn2').removeClass('active');
$('#projectbtn3').removeClass('active');
$('#projectbtn4').removeClass('active');
$('#projectbtn5').removeClass('active');
$('#projectbtn6').removeClass('active');
//add active for click button
$('#projectbtn5').addClass('active');
$('#prjectintroduce').html(project5.introdcue.substring(0,100) + '<a href="javascript:void(0)" onclick="introduceShowAll(5)"></a>');
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

$('#projectbtn6').click(function(){
	//change title for project 5
$('#projectTitle').html('other works');
//remove active for button
$('#projectbtn1').removeClass('active');
$('#projectbtn2').removeClass('active');
$('#projectbtn3').removeClass('active');
$('#projectbtn4').removeClass('active');
$('#projectbtn5').removeClass('active');
$('#projectbtn6').removeClass('active');
//add active for click button
$('#projectbtn6').addClass('active');
$('#prjectintroduce').html(project6.introdcue.substring(0,100) + '<a href="javascript:void(0)" onclick="introduceShowAll(6)">......</a>');
var content = '';
var row_flag = 0;
if( project6.images.length > 0) {
content = content + '<div class="row"><div class="col-lg-12 col-md-12"><div class="thumbnail "><a href="javascript:void(0)" onclick="clickp6()"><img src="'+project6.images[0].url+'" class="img-responsive img-thumbnail" alt="Responsive image"></a></div></div>'
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
	window.open('img/other/handbook/1.pdf',target='_blank');   
}


function clickp6() {
	//window.location.href= 'double-page/magzineP5.html';
	window.open('img/other/media/1.pdf',target='_blank');   
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
	if(num == 6){
		$('#prjectintroduce').html(project6.introdcue + '<a href="javascript:void(0)" onclick="introduceClose(5)">collapse</a>');
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
	if(num == 6){
		$('#prjectintroduce').html(project6.introdcue.substring(0,100) + '<a href="javascript:void(0)" onclick="introduceShowAll(5)">......</a>');
	}
}


