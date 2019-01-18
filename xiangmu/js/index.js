//导航二级菜单
window.onload = function(){
$("#jt").css("background","url(images/jk.jpg) no-repeat");
$("#cd").hover(function(){
	$("#jt").css("background","url(images/jj.jpg) no-repeat");
},function(){
	$("#jt").css("background","url(images/jk.jpg) no-repeat");
})
//二维码经过显示
$(".nav_left li:nth-child(2)").hover(function(){
	$(".nav_left span").css("display","block");
	$(".nav_left li:nth-child(2)").find("img").css("border-bottom","2px solid #7c9afc")
},function(){
	$(".nav_left span").css("display","none");
	$(".nav_left li:nth-child(2)").find("img").css("border-bottom","none")
})
//点击x隐藏
$(".top_T #btn").click(function(){
	$(".top_T").css("display","none")
})
//轮播图
	var timer = null;
	var $olist = $(".banner .banner_ol li");
	var $ulist = $(".banner .banner_ul li");
	var index = 0;
	timer = setInterval( autoPlay,2000 );
	function autoPlay(time,suv){
		time = time || 600;
		index++;
		if(index<0 && suv ){
			index=2;
		}
		if(index == $ulist.size()){
			index = 0;
		}
		$ulist.eq(index).fadeIn(time).siblings().fadeOut(time);
		$olist.eq(index).addClass("current").siblings().removeClass("current");
	}
	$ulist.hover(function(){
			$(".left").css("display","block");
			$(".right").css("display","block");
			clearInterval(timer);
		},function(){
			$(".left").css("display","none");
			$(".right").css("display","none");
			timer = setInterval( autoPlay,2000 );
		})
	$olist.hover(function(){
			$(".left").css("display","block");
			$(".right").css("display","block");
			clearInterval(timer);
			index = $(this).index();
//			console.log(index);
			index--;
			autoPlay();
		},function(){
			timer = setInterval( autoPlay,2000 );
		}
	)
		$(".left,.right").hover(function(){
			$(".left").css("display","block");
			$(".right").css("display","block");
			clearInterval(timer);
		},function(){
			timer = setInterval( autoPlay,2000 );
		})
		$(".left").click(function(){
			index-=2;
			autoPlay(100,true);
		})
		$(".right").click(function(){
			autoPlay(100,true);
		})
//公告
		var deff = $.ajax({
					type:"get",
					url:"js/index.json?id="+Math.random(),
					async:true
					});
			deff.done(function(msg){
				//得到一个json对象  使用 for...in遍历
				/*console.log(msg.index.list);*/	
				for (var attr in msg) {
				//console.log(msg[attr].list )
				if(msg[attr].list){
					var strCon = "";
					for( var j = 0 ; j < msg[attr].list.length ; j++ ){ //遍历每一类商品的list  
						var pro = msg[attr].list[j];
						
						strCon += `<dt>${msg[attr].name}</dt>
				        			<dd><span>${pro.title}</span>${pro.contant}</dd>
				        			<did><span>${pro.title1}</span>${pro.contant1}</dd>
				        			<dd><span>${pro.title}</span>${pro.contant2}</dd>
				        			<dd><span>${pro.title1}</span>${pro.contant3}</dd>
			<dd><span>${pro.title}</span></dd>`;
					}
				}else if(attr=="content_middle_l"){
						var str1 = '';
						var str2 = '';
						for(attr1 in msg[attr]){
							if(attr1 == "content"){
								for(var i = 0; i<msg[attr]['content'].length;i++){
									if(i == 0){
										for(attr2 in msg[attr]['content'][0]){
											str1 += `<li><a href="#"><img src="${msg[attr]['content'][0][attr2]}"></a></li>`;
									
										}
										$(".a1").eq(0).html(str1);
									}else if(i == 1){
										for(attr3 in msg[attr]['content'][1]){
//											for(var k = 0;k<msg[attr]['content'][1][attr3].length;k++){
												str2 += `<li>
											    		<a href="#"><img src="${msg[attr]['content'][1][attr3][0]}"/></a>
											    		<p><a href="#">${msg[attr]['content'][1][attr3][1]}</a></p>
											    		<span>${msg[attr]['content'][1][attr3][2]}</span>
											    		<del>${msg[attr]['content'][1][attr3][3]}</del>
											    	</li>`;
//											}
										}
										$(".a1").eq(1).html(str2);
									}
								}
							}
						}
						
					}else if(attr == "content_bottom"){
						var str4 = '';
						var str5 ='';
					}
				}
				$(".banner_right_B").html(strCon);
			})
//全球tab切换		
	var $ulist1 = $(".b1");
	//console.log($ulist);
	$ulist1.hover(function(){
		var index1=$(this).index();
		//console.log(index1)
		$(".a1").eq(index1).css("display","block").siblings().css("display","none");
		$(this).find('a').css("border-bottom","2px solid #fe8d51");
		$(this).find('span').css("display","block");
	},function(){
		$(this).find('a').css("border-bottom","2px #333333 solid");
		$(this).find('span').css("display","none");
	})
//生活馆tab切换
	var $ulist2 = $(".menu li");
	//console.log($ulist);
	$ulist2.hover(function(){
		var index2=$(this).index();
		//console.log(index2)
		$(".a3").eq(index2).css("display","block").siblings().css("display","none");
		$(".content_bottom_b_l").css("display","block");
		$(this).find("a").css("background","#948037");
	},function(){
		$(this).find("a").css("background","#fff");
	})
}

