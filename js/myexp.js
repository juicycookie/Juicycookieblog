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
 getIntroduce();


});



function openExp1() {
	//window.location.href= 'double-page/magzineP5.html';
	window.open('samples/magazine/slider.html',target='_blank');   
}
	





