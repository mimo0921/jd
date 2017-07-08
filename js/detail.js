// JavaScript Document
$(function(){
	var arrImg=["images/gold_01_big.jpg","images/gold_02_big.jpg","images/gold_03_big.jpg",
	"images/gold_04_big.jpg","images/gold_05_big.jpg"];
	var bigImg=["images/gold_01_Mbig.jpg","images/gold_02_Mbig.jpg","images/gold_03_Mbig.jpg","images/gold_04_Mbig.jpg"
	,"images/gold_05_Mbig.jpg"]

$("#buy2 dd").on("click",function(){
		$(this).addClass("mark").siblings().removeClass("mark");
		$(this).children().addClass("nikeke").parent().siblings().children().removeClass("nikeke");
})

	var k=1;
	$(".addBtn").click(function(){
		k++;
		$("#changeNum input").val(k);
	})
	$(".subBtn").click(function(){
		k--;
		if(k<1){
			k=1;
		}
		$("#changeNum input").val(k);
})

	$(".additem").click(function(){
		alert("加入购物车成功！");
		$("#changeNum input").val(1);
		$("#buy2 dd:first").addClass("mark").siblings().removeClass("mark");
		$("#buy2 dd").children().removeClass("nikeke");
		$("#buy2 dd:first").children().addClass("nikeke");
		k=1;
		$("#changeNum input").val(k);

	})

	$(".little_pic li img").mouseover(function(){
		var this3=$(this);
		var k=this3.parent().index();
		this3.parent().addClass("change").siblings().removeClass("change");
		$(".introduce .img").attr("src",arrImg[k-1]);
		$("#box2 img").attr("src",bigImg[k-1]);


		$(".zuo").click(function(){
			k--;
			if(k<1){
				k=1;
			}
			this3.parent().addClass("change").siblings().removeClass("change");
			$(".introduce .img").attr("src",arrImg[k-1]);
			$(".little_pic li img").parent().eq(k-1).addClass("change").siblings().removeClass("change");
		})
		$(".zuiyou").click(function(){
			k++;
			if(k>5){
				k=5;
			}
			this3.parent().addClass("change").siblings().removeClass("change");
			$(".introduce .img").attr("src",arrImg[k-1]);
			$(".little_pic li img").parent().eq(k-1).addClass("change").siblings().removeClass("change");
		})
	})



	$(".introduce").mousemove(function(ev){
		var l=ev.pageX-$(this).offset().left-$(".zoom").width()/2;//鼠标的位置-box1距离dom右边的距离-span的1/2的宽度 （因为不减的话鼠标就在span的左上角了）
		var t=ev.pageY-$(this).offset().top-$(".zoom").height()/2;
		if(l<0) {
			l = 0;
		}
		if(t<0){
			t=0;
		}
		if(l>$(".introduce").width()-$(".introduce .zoom").width()){
			l=$(".introduce").width()-$(".introduce .zoom").width()-10;
		}
		if(t>$(".introduce").height()-$(".introduce .zoom").height()){
			t=$(".introduce").height()-$(".introduce .zoom").height()-10;
		}
		$(".zoom").show().css({"top":t,"left":l});
		$("#box2").show();
		$("#box2 img").css({"top":-t*1.6,"left":-l*1.6})
	});
	$(".introduce").mouseout(function(ev){
		$(".zoom").hide();
		$("#box2").hide();
	});


$(".lar").mouseover(function(){
		var this4=$(this);
		this4.removeClass("po");
		var n=this4.index();
		console.log(n);
	if(n==1){
		$(".popular1").addClass("po");
		$(".sh").show();
		$(".hh").hide();
		$(".popular2").removeClass("po");
	}else{
		$(".hh").show();
		$(".sh").hide();
		$(".popular1").removeClass("po");
		$(".popular2").addClass("po");
	}
})

$(".popular1").click(function(){
	var this5=$(this);
	this5.addClass("po");
	$(".sh").show();
	$(".hh").hide();
	$(".popular2").removeClass("po");
})
	$(".popular2").click(function(){
		var this6=$(this);
		$(".hh").show();
		$(".sh").hide();
		$(".popular1").removeClass("po");
		this6.addClass("po");
	})











})
