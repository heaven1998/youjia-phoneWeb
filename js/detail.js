// JavaScript Document
$(function(){
	$(".ileft").click(function(){
			
		if($(".ileftcon").css("left")=="0px") 
		{
			 $(".ileftcon").animate({left:"-100%"});
			 $(".imark").hide()
		}
		else{
			
			 $(".ileftcon").animate({left:"0px"});
			 $(".imark").show()
			}
	})
	$(".imark").click(function(){
		 $(".ileftcon").animate({left:"-100%"});
		$(".imark").hide()
	})
	$(".irm_more").click(function(){
		$(this).hide()
		$(".irmbox ul li").show()	
		$(".qmain ul li").show()	
	})
	$(".lonav >div").bind("click", function () {
            var index = $(this).index();
            var divs = $(this).parent(".lonav").parent(".lobox1").find(".lonavbox> div");
			$(".lonav >div").removeClass("cur")
            $(this).addClass("cur"); //设置当前选中项为选中样式
			
            divs.hide();//隐藏所有选中项内容
            divs.eq(index).show(); //显示选中项对应内容
        });
	$(".fixnav >ul>li").bind("click", function () {
            var index = $(this).index();
            var divs = $(this).parent("ul").parent(".fixnav").parent(".fixmain").find(".fixbox> div");
			$(this).parent("ul").find("li").removeClass("cur")
            $(this).addClass("cur"); //设置当前选中项为选中样式
			
            divs.hide();//隐藏所有选中项内容
            divs.eq(index).show(); //显示选中项对应内容
        });	
	$(".map_con >ul >li").bind("click", function () {
		
            var index = $(this).index();
            var divs = $(this).parent("ul").parent(".map_con").parent(".addmap").parent(".addressbox").find(".mapmain> div> div");
			
			
            divs.removeClass("mcur");//隐藏所有选中项内容
            divs.eq(index).addClass("mcur"); //显示选中项对应内容
        });	
	$(".purple1").click(function(){
			$(".mddbox").show()
		})	
	$(".mddclose").click(function(){
			$(".mddbox").hide()
		})		
	$(".mddcon a").click(function(){
		$(".purple1").text($(this).text())
		$(".purple1").attr("data-val",$(this).attr("data-val"));
		$(".mddbox").hide()
		})	
	$(".osinfo").click(function(){
		$(".osucc").hide()
		})	
	$(".open_pass").click(function(){
		
		if($(".pass_box").css("display")=="none")
		{
			
			$(".pass_box").show()
			
		}
		else if($(".pass_box").css("display")!="none")
		{
			
		$(".pass_box").hide()
		
		}
		})	
	$(".radio_sx_box>div").click(function(){
		$(".radio_sx_box>div").removeClass("cur")
		$(this).addClass("cur")
		})	
	
	
	//产品详情
	var abox2_f_h = $("#fix1").offset().top;
	var afix3_f_h = $("#fix2").offset().top;
    $(window).scroll(function(){
		var box2_h = $("#fix1").height();
		var box2_f_h = $("#fix1").offset().top;
		var box2_all_h=box2_h+box2_f_h;
		
		var fix3_h = $("#fix2").height();
		var fix3_f_h = $("#fix2").offset().top;
		var fix3_all_h=fix3_h+fix3_f_h;
		
		var mwidth=$(".fixmain").width();
		$(".fixnav").css("width",mwidth)
		$(".fixnav").css("left",$("#fix1").offset().left)
		$(".fixnav").css("top",0)
        var this_scrollTop = $(this).scrollTop();
		
		//if(this_scrollTop<box2_f_h ){
//			$("#fix1").removeClass("fix");
//			}
		if(this_scrollTop<box2_f_h){
			
			$("#fix1").removeClass("fix");
			$("#fix2").removeClass("fix");
			}
        if(this_scrollTop>box2_f_h && this_scrollTop<box2_all_h){
            $("#fix1").addClass("fix");
			$("#fix2").removeClass("fix");
        }
		//if(this_scrollTop>box2_all_h){
//			$("#fix1").removeClass("fix");
//			}
//			
		//fix2
		
        if(this_scrollTop>fix3_f_h && this_scrollTop<fix3_all_h ){
			$("#fix1").removeClass("fix");
            $("#fix2").addClass("fix");
			
        }
		
		//if(this_scrollTop<box2_all_h&&this_scrollTop>box2_f_h ){
//			
//			$("#fix2").removeClass("fix");
//			}
//		if(this_scrollTop>box3_all_h){
//			$("#fix2").removeClass("fix");
//			}
			
			
	
    });	
	
	$("#fix1 .fixnav ul li").click(function(){
		
		$("html, body").animate({
				"scroll-top":abox2_f_h
			},"fast");
		})
	$("#fix2 .fixnav ul li").click(function(){
	
	//	$("html, body").animate({
//				"scroll-top":afix3_f_h
//			},"fast");
		})	
		
		
	$("#gettel").click(function(){
		$("#dtelbox").show()
		$(".imark").show()
		})
	$("#getwx").click(function(){
		$("#dwxbox").show()
		$(".imark").show()
		})	
	$(".dclose").click(function(){
		$("#dtelbox").hide()
		$(".imark").hide()
		})	
	$(".imark").click(function(){
		$("#dtelbox").hide()
		$("#dwxbox").hide()
		$(".imark").hide()
		})	
	$(".gettop").click(function(){
		$("html, body").animate({
				"scroll-top":0
			},"fast");
		})		
	$("#getshare").click(function(){
		if($("#gettel").css("display")=="block")
		{
			$("#gettel").hide()
			$("#getwx").hide()
			$("#getwx1").show()
			$("#getpyq").show()
			$("#getsina").show()
		}
		else{
			$("#gettel").show()
			$("#getwx").show()
			$("#getwx1").hide()
			$("#getpyq").hide()
			$("#getsina").hide()
			}
		})	
			
	//sai xuan
	//&("#sbody")
	$(".saicon li").click(function(){
		 alert()
		if($(this).hasClass("cur"))
		{ 
			$(this).removeClass("cur")
			}
		else
		{
			$(this).addClass("cur")
			}	
		})
})

