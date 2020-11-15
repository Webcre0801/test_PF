
// slide-menu
// PC
if(!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
	$(function(){
		var dis = 250;

		$("button").click(function(){
		$("body").children().animate({"margin-right" : "+=" + dis + "px"}, 200);

		dis *= -1;
		});
	});
}


// slide-menu
// SP
if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
	$(function(){
		var dis = 100;

		$("button").click(function(){
		$("body").children().animate({"margin-right" : "+=" + dis + "px"}, 200);

		dis *= -1;
		});
	});
}


// caption
// PC & SP
$(function(){
	$(".work-item").append('<div class="caption"></div>');
	$(".caption").each(function(){
		$(this).html("<p>" + $(this).parent().find("img").attr("alt") + "</p>");
	});

	$(".work-item").hover(function(){
		$(this).children("div").stop().fadeIn(300);
		$(this).children("div").children("p").stop().animate({"top" : 0}, 300);
	}, function(){
		$(this).children("div").stop().fadeOut(300);
		$(this).children("div").children("p").stop().animate({"top":"10px"}, 300);
	});
});


// contact-form alert
// PC & SP
$(function(){
	$(".alert").hide();

	$("#submitBtn").click(function(){
		var sendFlag = true;

		if(!$("#name").val()){
			$("#nameSection .alert").show();
			sendFlag = false;
		}else{
			$("#nameSection .alert").hide();
		}

		if(!$("#address").val()){
			$("#addressSection .alert").show();
			sendFlag = false;
		}else{
			$("#addressSection .alert").hide();
		}

		if($("select").val() == "none"){
			$("#colorSection .alert").show();
			sendFlag = false;
		}else{
			$("#colorSection .alert").hide();
		}

		if(!$("#contents_inq").val()){
			$("#inqSection .alert").show();
			sendFlag = false;
		}else{
			$("#inqSection .alert").hide();
		}
	
		if(sendFlag == false){
			return false;
		}
	});
});


// start animation
// PC & SP
$(function(){
	if(location.hash === "") {
		setTimeout(function(){
			$('.start_img').fadeIn(1600);
		},500);
		setTimeout(function(){
			$('.start').fadeOut(500);
		},2500);
	} else if(location.hash === "#contact") {
		$('div').removeClass('start start_img');
		$(".startpic").css('display', 'none');
	}
});