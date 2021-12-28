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
var project1 = {'introdcue':'project1 introduce dfadadasdas dadasdadasdasdasdasdasdas','images':[{'url':'img/p1/1.jpg','description':'（HE, SHE, THEY）'},{'url':'img/p1/2.jpg','description':'（HE, SHE, THEY）'},{'url':'img/p1/3.jpg','description':'（HE, SHE, THEY）'}
,{'url':'img/p1/4.jpg','description':'（HE, SHE, THEY）'},{'url':'img/p1/5.jpg','description':'（HE, SHE, THEY）'},{'url':'img/p1/6.jpg','description':'（HE, SHE, THEY）'},
{'url':'img/p1/7.jpg','description':'CHARACTER DESIGN'},{'url':'img/p1/8.jpg','description':'CHARACTER DESIGN'},{'url':'img/p1/9.jpg','description':'CHARACTER DESIGN'},
{'url':'img/p1/10.jpg','description':'CHARACTER DESIGN'},{'url':'img/p1/11.jpg','description':'CHARACTER DESIGN'},{'url':'img/p1/12.jpg','description':'CHARACTER DESIGN'}
,{'url':'img/p1/13.jpg','description':'TAROT & ILLUSTRATION'},{'url':'img/p1/14.jpg','description':'TAROT & ILLUSTRATION'},
{'url':'img/p1/15.jpg','description':'TAROT & ILLUSTRATION'},{'url':'img/p1/16.jpg','description':'TAROT & ILLUSTRATION'}
,{'url':'img/p1/17.jpg','description':'TAROT & ILLUSTRATION'},{'url':'img/p1/18.jpg','description':'TAROT & ILLUSTRATION'}
,{'url':'img/p1/19.jpg','description':'CHATHEAD'},{'url':'img/p1/20.jpg','description':'STICKER'},
{'url':'img/p1/21.jpg','description':'EMOJI DESIGN'}
,{'url':'img/p1/22.jpg','description':'MAGIC TAPE'},{'url':'img/p1/23.jpg','description':'MAGIC TAPE'},{'url':'img/p1/24.jpg','description':'MAGIC TAPE'}
,{'url':'img/p1/25.jpg','description':'KEY RING'},{'url':'img/p1/26.jpg','description':'KEY RING'},{'url':'img/p1/27.jpg','description':'KEY RING'}
,{'url':'img/p1/28.jpg','description':'EXPERIMENTAL ART'},{'url':'img/p1/29.jpg','description':'EXPERIMENTAL ART'},{'url':'img/p1/30.jpg','description':'EXPERIMENTAL ART'}
,{'url':'img/p1/31.jpg','description':'EXPERIMENTAL ART'}]};

var project2 = {'introdcue':'project2 introduce','images':[{'url':'img/p2/1.jpg','description':'COLLAGE'},{'url':'img/p2/2.jpg','description':'COLLAGE'},{'url':'img/p2/3.jpg','description':'COLLAGE'}
,{'url':'img/p2/4.jpg','description':'COLLAGE'},{'url':'img/p2/5.jpg','description':'COLLAGE'},{'url':'img/p2/6.jpg','description':'COLLAGE'},{'url':'img/p2/7.jpg','description':'COLLAGE'}
,{'url':'img/p2/8.jpg','description':'COLLAGE'}
,{'url':'img/p2/9.jpg','description':'STYLE EXPERIMENT'},{'url':'img/p2/10.png','description':'LONG SCROLL ILLUSTRATION'},{'url':'img/p2/11.jpg','description':'LONG SCROLL ILLUSTRATION '},{'url':'img/p2/12.jpg','description':'LONG SCROLL ILLUSTRATION '}
,{'url':'img/p2/13.jpg','description':'LONG SCROLL ILLUSTRATION'},{'url':'img/p2/14.jpg','description':'LONG SCROLL ILLUSTRATION'},{'url':'img/p2/15.jpg','description':'LONG SCROLL ILLUSTRATION '},{'url':'img/p2/16.jpg','description':'LONG SCROLL ILLUSTRATION '}
,{'url':'img/p2/17.jpg','description':'LONG SCROLL ILLUSTRATION'},{'url':'img/p2/18.jpg','description':'LONG SCROLL ILLUSTRATION '},{'url':'img/p2/19.jpg','description':'COVER'},{'url':'img/p2/20.jpg','description':'EXPERIMENTAL ART'}
,{'url':'img/p2/21.jpg','description':'LONG SCROLL ILLUSTRATION'},{'url':'img/p2/22.jpg','description':'LONG SCROLL ILLUSTRATION'},{'url':'img/p2/23.jpg','description':'LONG SCROLL ILLUSTRATION'},{'url':'img/p2/24.jpg','description':'LONG SCROLL ILLUSTRATION'}]};

var project3 = {'introdcue':'project3 introduce','images':[{'url':'img/p3/1.jpg','description':'插画（ILLUSTRATION）'},{'url':'img/p3/2.jpg','description':'ILLUSTRATION'},{'url':'img/p3/3.jpg','description':'ILLUSTRATION'}
,{'url':'img/p3/4.png','description':'ILLUSTRATION'},{'url':'img/p3/5.jpg','description':'ILLUSTRATION'},{'url':'img/p3/6.jpg','description':'ILLUSTRATION'},{'url':'img/p3/7.png','description':'POSTER'}
,{'url':'img/p3/8.png','description':'GRAPHIC DESIGN'},{'url':'img/p3/9.jpg','description':'PACKAGE DESIGN'},{'url':'img/p3/10.jpg','description':'PACKAGE DESIGN'}
,{'url':'img/p3/11.jpg','description':'PACKAGE DESIGN'},{'url':'img/p3/12.jpg','description':'PACKAGE DESIGN'},{'url':'img/p3/13.jpg','description':'PACKAGE DESIGN'}
,{'url':'img/p3/14.jpg','description':'PACKAGE DESIGN'},{'url':'img/p3/15.jpg','description':'PACKAGE DESIGN'},{'url':'img/p3/16.jpg','description':'PACKAGE DESIGN'}
,{'url':'img/p3/17.jpg','description':'PACKAGE DESIGN'},{'url':'img/p3/18.jpg','description':'PACKAGE DESIGN'},{'url':'img/p3/19.jpg','description':'PACKAGE DESIGN'}
,{'url':'img/p3/20.jpg','description':'PACKAGE DESIGN'},{'url':'img/p3/21.jpg','description':'PACKAGE DESIGN'}]};

var des1 = 'character design';
var des2 = 'illustration';
var des3 = 'poster';
var des4 = 'sticker';	
var project4 = {'introdcue':'project4 introduce','images':[{'url':'img/p4/1.jpg','description':des1},{'url':'img/p4/2.jpg','description':des1},{'url':'img/p4/3.jpg','description':des2}
,{'url':'img/p4/4.jpg','description':des2},{'url':'img/p4/5.jpg','description':des2},{'url':'img/p4/6.jpg','description':des2}
,{'url':'img/p4/7.jpg','description':des2},{'url':'img/p4/8.jpg','description':des3},{'url':'img/p4/9.jpg','description':des3},{'url':'img/p4/10.jpg','description':des4},{'url':'img/p4/11.jpg','description':des4},{'url':'img/p4/12.jpg','description':des4}]};

var project5 = {'introdcue':'project5 introduce','images':[{'url':'img/p5/1.jpg','description':'P5 1 image'},{'url':'img/1.jpg','description':'P1 2 image'},{'url':'img/1.jpg','description':'P1 3 image'}
,{'url':'img/1.jpg','description':'P1 3 image'},{'url':'img/1.jpg','description':'P1 4 image'},{'url':'img/1.jpg','description':'P1 5 image'},{'url':'img/1.jpg','description':'P1 6 image'}
,{'url':'img/1.jpg','description':'P1 7 image'}]};
$(function(){

 
//get introduce from localstorage
if(localStorage.getItem('introduce1') != null) {
	project1.introdcue = localStorage.getItem('introduce1');
}
if(localStorage.getItem('introduce2') != null) {
	project2.introdcue = localStorage.getItem('introduce2');
}
if(localStorage.getItem('introduce3') != null) {
	project3.introdcue = localStorage.getItem('introduce3');
}
if(localStorage.getItem('introduce4') != null) {
	project4.introdcue = localStorage.getItem('introduce4');
}
if(localStorage.getItem('introduce5') != null) {
	project5.introdcue = localStorage.getItem('introduce5');
}

	

//initial

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
$('#projectTitle').html('PROJECT1 HE, SHE, THEY');
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
$('#projectTitle').html('PROJECT2 WAKE UP IN THE DARK');
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
$('#projectTitle').html('PROJECT3 WORKING! VITAMIN FACTORY');
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
$('#projectTitle').html('PROJECT4 GIVE ME UR PAWS');
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
$('#projectTitle').html('PROJECT5 GABAGABA');
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

$('#projectbtn5').click();
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


