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
	$(".mddcon >a").bind("click", function () {
            var index = $(this).index();
            var divs = $(this).parent(".mddcon").parent(".mddbox").find(".mddcon2> ul>li");
			
			$(".mddcon").hide()
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
		var shtml="";
		
		shtml+=$(this).text();
		shtml+="<i class='icon iconfont1 mddclose2'>&#xe617;</i>";
		$(".closemdd").show()
		$(".mddcon2").show()
		$(".mddtll span.mddspan").html(shtml)
		//$(".purple1").text($(this).text())
		//$(".purple1").attr("data-val",$(this).attr("data-val"));
		//$(".mddbox").hide()
		})	
	$(".closemdd").click(function(){
		$(".mddcon2").hide()
		$(this).hide()
		$(".mddcon").show()
		})	
	$(".mddcon2 ul li a").click(function(){
	
		$(".purple1").text($(this).text())
		$("#mdd1").val($(this).text())
		$("#mdd2").val($(this).attr("data-val"))
		$(".purple1").attr("data-val",$(this).attr("data-val"));
		$(".mddbox").hide()
		})	
	$("#ztbox a").click(function(){
	
		$("#qs_zt").val($(this).attr("data-val"))
		
		})	
	$("#djrmbox a").click(function(){
	
		$("#qs_are1").val($(this).attr("data-val"))
		$("#qs_are2").val($(this).attr("data-val2"))
		
		})	
	$("#tsbox a").click(function(){
	
		$("#qs_ts").val($(this).attr("data-val"))
		
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
		$(this).parent("div").find("li").removeClass("cur")
	    $(this).addClass("cur")
			
		})
		
	//验证码
	$("#cr").click(function(){
		var chtml=$("#cr input[type='text']").val()
		$("#getcr").html(chtml)
		})
	$("#et").click(function(){
		var chtml=$("#et input[type='text']").val()
		$("#getet").html(chtml)
		})	
	$("body").click(function(){
		
		var thtml=$("#dateTime").val()
		$("#gettime").html(thtml)
		})	
	
	
	
		
})

