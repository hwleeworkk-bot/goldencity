	$(document).ready(function(){
		//gnb
			$(".gnb>li").mouseover(function(){
				$(">.sub", this).stop().slideDown();
			});//mouseover

			$(".gnb>li").mouseout(function(){
				$(">.sub", this).stop().slideUp();
			});//mouseout

		//.m_drawer
			$(".m_drawer_btn").click(function(){
				$(".m_drawer_bg, .m_drawer_box").fadeIn(300);
				$("body").css({"overflow":"hidden"});
			});//


			$(".m_drawer_bg").click(function(){
				$(".m_drawer_bg, .m_drawer_box").fadeOut(100);
				$("body").css({"overflow":"scroll"});
			});//

		
		// .top_button 나타나기
			$(window).ready(function() { 
				if($(window).width() >481) { /* do something */ 
				  var page = $("body");
				  var pageOffsetTop = page.offset().top +100;
				  $(window).resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
					pageOffsetTop = page.offset().top +100;
				  });
				  
				  $(window).on('scroll', function(){
					if($(window).scrollTop() >= pageOffsetTop) {
					  $(".top_button").fadeIn();
					} else {
					  $(".top_button").fadeOut();
					}
				 });//if문
			} });//해상도에 따라


		// .top_button 누르면 스무스하게 올라가기
			$(".top_button").click(function(event){
				event.preventDefault();
				
				$("html, body").animate({
					scrollTop: 0
				}, 400);
			});

		// .header 480이하에서 스크롤 내리면 박스섀도우 나타나게
			if($(window).width() < 481) { /* do something */ 
				  var page = $("body");
				  var pageOffsetTop = page.offset().top +10;
				  $(window).resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
					pageOffsetTop = page.offset().top +10;
				  });
				  
				  $(window).on('scroll', function(){
					if($(window).scrollTop() >= pageOffsetTop) {
					  $(".header").css({"box-shadow":"0px 1px 5px #444"});
					} else {
					  $(".header").css("box-shadow","0 0 0 transparent");
					}
				 });//if문

			}

			$(window).resize(function() { 
				if($(window).width() < 481) { /* do something */ 
				  var page = $("body");
				  var pageOffsetTop = page.offset().top +100;
				  $(window).resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
					pageOffsetTop = page.offset().top +100;

				  $(window).on('scroll', function(){
					if($(window).scrollTop() >= pageOffsetTop) {
					  $(".header").css("box-shadow","0px 1px 5px #444");
					} else {
					  $(".header").css("box-shadow","0 0 0 transparent");
					}
				  });
				  
				 });//if문
			} else {
				
			
			}//481 미만

			
			
			});//해상도에 따라

		//.m_cnb 펼쳐지고 닫기
			cnt=0;
			$(".section>.m_cnb_wrap>.m_cnb>li:first").click(function(){
				cnt++
				if (cnt%2==1)
				{	
					$(".section>.m_cnb_wrap>.m_cnb>li.slide").slideDown(100);
					$(".section>.m_cnb_wrap>i").text("expand_less");
				} else {
					$(".section>.m_cnb_wrap>.m_cnb>li.slide").slideUp(100);
					$(".section>.m_cnb_wrap>i").text("expand_more");
				}

			});//
	}); //document