// JavaScript Document
window.onload = function() {
	//获取对象元素等
		var oMenu=document.getElementById("jdMenu");
		var aLi=oMenu.getElementsByTagName("li");
		var oMenuCont=document.getElementById("menuCont");
		var a_cate_part=oMenuCont.getElementsByClassName("cate_part");
	//var 一个变量 用作之后离开右侧回到左侧
		var leave_menu=null;
		
	//声明一个方法 删除所有li上面的ac
		function del_li_ac(){
			for(var i=0;i<aLi.length;i++){
				aLi[i].className="";	
			}	
		}
		
		for(var i=0;i<aLi.length;i++){
		//记下li当前的索引号
			aLi[i].index=i;
		//一个右边的块  出现
			aLi[i].onmouseover=function(){
			oMenuCont.style.display="block";
			del_li_ac();//调用消除li ac的方法
			this.className="ac";//给当前的选中的那一个li加ac	
		
			for(var j=0;j<a_cate_part.length;j++){
				a_cate_part[j].style.display="none";
			};
			a_cate_part[this.index].style.display="block";
		};
		aLi[i].onmouseout=function(){
			
			oMenuCont.style.display="none";
			
			del_li_ac();
			//this.className="leftleft";
			
			};
		};
		
		oMenuCont.onmouseover=function(){
			this.style.display="block";
		}
		
		oMenuCont.onmouseout=function(){
			
			del_li_ac();
			this.style.display="none";
		};	
		



	var oMidmid = document.getElementsByClassName("midmid");
	var oPic=oMidmid[0].getElementsByClassName("mid_pic");	
	var oCircle=document.getElementById("mid_circle");
	var oUl=oCircle.getElementsByTagName("ul");
	var aLii=oUl[0].getElementsByTagName("li");		
	function chx(num){			
		var timer;			
		for(var i=0;i<aLii.length;i++){											
			aLii[i].index=i;			
			aLii[i].onclick=function(){	  
				for(var j=0;j<aLii.length;j++){	
					aLii[j].className="";
					oPic[j].style.display="none";
				}			
			this.className="tips";
			oPic[this.index].style.display="block";				
			n=this.index;		
	}

}
	
	
		timer=setInterval(run,2500);		
		// 7 定义定时器函数;		
		// 8 初始化索引值;		
		var n=0; //0 1 2 3		
		function run(){
			n++;  
			// 变量n进行限定
			if(n>=aLii.length){
				n=0;	
			}			
			for(var i=0;i<aLii.length;i++){
				aLii[i].className="";
				oPic[i].style.display="none";
			}			
			// 让索引为n的li增加ac
			aLii[n].className="tips";
			oPic[n].style.display="block";	
		}	
				
		
	}
	chx(0);
	chx(1);
	chx(2);
	chx(3);



	$(function(){
		// @ 给窗口加滚动条事件
		$(window).scroll(function(){
			// 获得窗口滚动上去的距离
			var ling = $(document).scrollTop();
			var n=ling/767;
		if(2<=n<8){
				var m=parseInt(n)
			// 让第一层的数字隐藏，文字显示，让其他兄弟元素的li数字显示，文字隐藏
			$('#box ul li').eq(m-2).find('.num').hide().siblings('.word').css('display','block');
			$('#box ul li').eq(m-2).siblings('li').find('.num').css('display','block').siblings('.word').hide();
			}
		if(n>2){// 如果滚动距离大于1534的时候让滚动框出来
				$('#box').show();
			}
			if(n<2){
				$('#box').hide();
			}
		})
		var eleHeight = $('.kk .floor1').height();  //获取每楼层高度
		var fTop = $('.kk').offset().top;  //获取父级top的偏移量
		$('#box').on('click','li',function(){     //点击每个li到对应楼层
			$(this).addClass('ac').siblings().removeClass('ac');
			var sHeight = eleHeight*($(this).index())+fTop;
			$('html,body').stop().animate({'scrollTop':sHeight},500);
		})

	})

	$(function(){
		$('#box ul li').hover(function(){
			$(this).find('.num').hide().siblings('.word').css({'display':'block','background':'#CB1C39','color':'white'});
		},function(){

			$(this).find('.num').css({'display':'block','background':'white','color':'#666'}).siblings('.word').hide().css({'display':'none','background':'','color':''});
		})
	})

	$(".iconicon .phoneprice li").mouseover(function(){
		var this6=$(this)
		var m=this6.index();
		$(".iconicon .phoneprice li").removeClass("xuanzhong");
		$(".iconicon .phoneprice li").eq(m).addClass("xuanzhong");
	})

	$(".iconicon2 .phoneprice li").mouseover(function(){
		var this7=$(this)
		var l=this7.index();
		$(".iconicon2 .phoneprice li").removeClass("xuanzhong");
		$(".iconicon2 .phoneprice li").eq(l).addClass("xuanzhong");
	})

	$(".iconicon3 .phoneprice li").mouseover(function(){
		var this7=$(this)
		var l=this7.index();
		$(".iconicon3 .phoneprice li").removeClass("xuanzhong");
		$(".iconicon3 .phoneprice li").eq(l).addClass("xuanzhong");
	})

	$(".iconicon4 .phoneprice li").mouseover(function(){
		var this7=$(this)
		var l=this7.index();
		$(".iconicon4 .phoneprice li").removeClass("xuanzhong");
		$(".iconicon4 .phoneprice li").eq(l).addClass("xuanzhong");
	})

$(".recharged li").click(function(){
	var k=$(this).index();
	$(".recharged li a").removeClass("re");
	$(".recharged li a").eq(k).addClass("re");
})

	$(".iconicon2 .recharged li").click(function(){
		var k=$(this).index();
		$(".iconicon2 .recharged li a").removeClass("re");
		$(".iconicon2 .recharged li a").eq(k).addClass("re");
	})

	$(".iconicon3 .recharged li").click(function(){
		var k=$(this).index();
		$(".iconicon3 .recharged li a").removeClass("re");
		$(".iconicon3 .recharged li a").eq(k).addClass("re");
	})
	$(".iconicon4 .recharged li").click(function(){
		var k=$(this).index();
		$(".iconicon4 .recharged li a").removeClass("re");
		$(".iconicon4 .recharged li a").eq(k).addClass("re");
	})

$(".fast").click(function(){
	alert("充值成功！");
})

	$(".cha").click(function(){
		$(this).parent
	})

	$(".icon dd").click(function(){
		var o=$(this).index();
		switch(o){
			case 0:
				$('.icon').hide(1000);
				$(".iconicon").show(500);
				break;
			case 1:
				$('.icon').hide(1000);
				$(".iconicon2").show(500);
				break;
			case 2:
				$('.icon').hide(1000);
				$(".iconicon3").show(500);
				break;
			case 3:
				$('.icon').hide(1000);
				$(".iconicon4").show(500);
				break;
		}
	})

$(".cha").click(function(){
	$(this).parent().hide(500);
	$('.icon').show(1000);
})


	$(".phoneprice li").mouseover(function(){
		var p=$(this).index();
		switch(p){
			case 0:
				$(".iconicon").show();
				$(".iconicon2").hide();
				$(".iconicon3").hide();
				$(".iconicon4").hide();
				break;
			case 1:
				$(".iconicon2").show();
				$(".iconicon").hide();
				$(".iconicon3").hide();
				$(".iconicon4").hide();
				break;
			case 2:
				$(".iconicon3").show();
				$(".iconicon").hide();
				$(".iconicon2").hide();
				$(".iconicon4").hide();
				break;
			case 3:
				$(".iconicon4").show();
				$(".iconicon").hide();
				$(".iconicon2").hide();
				$(".iconicon3").hide();
				break;
		}
	})
}