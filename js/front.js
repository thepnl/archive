$(function(){

	if($('.movi-list').size() !=0){
		photoSize();	
	}
	
});

function Headerfixed() {
  var menu = $("header").offset();
  $(window).scroll(function () {
    if ($(document).scrollTop() > menu.top) {
      $("header").addClass("fixed");
    } else {
      $("header").removeClass("fixed");
    }
  });
}

//mySidepanel 사이드메뉴
function openNav() {
  document.getElementById("mySidepanel").style.width = "100%";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

//포토후기 이미지 사이즈
function photoSize(){
	var img = $('.resizing');
	//var img2 = $('.movi-list > ');
	//var img3 = $('.file-add > p');
	var imgWidth = img.outerWidth();
	//var imgWidth2 = img2.outerWidth();
	//var imgWidth3 = img3.outerWidth();
	img.css('height',imgWidth);
	//img2.css('height',imgWidth2);
	//img3.css('height',imgWidth3);

}
