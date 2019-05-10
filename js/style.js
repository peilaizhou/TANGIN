var sou = document.getElementById('sou');
var btn = document.getElementById('btn');
sou.addEventListener('click',function (e) {
	var event = e  || window.event;
	btn.style.display = 'block';
	e.stopPropagation();
})
 document.addEventListener('click',function(e){
 　　var event=e||window.event;
　　 btn.style.display="none";
　　event.stopPropagation();
})
 btn.addEventListener('click',function(e){
　　var event=e||window.event;
　　btn.style.display="block";
　　event.stopPropagation();
 })


 // window.onload=function(){
	// var obanner=document.getElementById('banner');
	// var olunbo=document.getElementById('lunbo');
	// var oLi1=olunbo.getElementsByTagName('li');
	// var oact=document.getElementById('act');
	// var oLi2=oact.getElementsByTagName('li');
	// var oLi1Width=oLi1[0].offsetWidth;
	// var timer=null;
	// var time=null;
	// var y=0;
	// //alert(oLi1Width);
	// olunbo.style.width=oLi1Width*oLi1.length+'px';    //给lunbo一个宽度

	// for(var i=0;i<oLi2.length;i++){
	// 	//alert(i)
	// 	oLi2[i].index=i;   //获取li2的索引
	// 	oLi2[i].onmouseover=function(){
	// 		show(this.index)
	// 		// alert(this.index)
	// 	}
	// }

	// obanner.onmouseover=function(){      //鼠标放上定时器停止
	// 	clearInterval(time);
	// }

	// obanner.onmouseout=function(){       //鼠标离开开启定时器
	// 	time=setInterval(function(){
	// 		show(y);
	// 		y++;
	// 		//alert(oLi2.length)
	// 		if(y==oLi2.length){y=0}    
	// 	},3000)
	// }

// 	clearInterval(time);
// 	time=setInterval(function(){      //自动轮播
// 		show(y);
// 		y++;
// 		//alert(oLi2.length)
// 		if(y==oLi2.length){y=0}    //图片轮播结束，拽回第一个重新开始；
// 	},3000)

// 	function show(j){         //鼠标放上li2对应的li运动并且li2对应的颜色改变
// 		for(var i=0;i<oLi2.length;i++){
// 				oLi2[i].className="";
// 			}
// 			oLi2[j].className="active";

// 			clearInterval(timer);
// 			timer=setInterval(function(){
// 				var iSpeed=(-olunbo.offsetLeft-oLi1Width*j)/10;     //缓冲运动
// 				var x=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
// 				olunbo.style.left=x+olunbo.offsetLeft+'px';
// 			},22)
// 	}
// }






// var gy = document.getElementById('gy');
// var cp = document.getElementById('cp');
// var pp = document.getElementById('pp');
// var kh = document.getElementById('kh');
// var gysun = document.getElementById('gysun');
// gy.addEventListener('mouseover',function (e) {
// 	var event=e||window.event;
// 　　 gysun.style.display="block";
// 　　event.stopPropagation();
// })
// 
// 
// 



function myfun () {
	document.getElementById('jg').innerHTML = '￥22800.00';
}

//表单提交
function fun() {
	var xm = document.getElementById('xm').value;
	var yx = document.getElementById('yx').value;
	var dh = document.getElementById('dh').value;
	var ly = document.getElementById('ly').value;
	var yz = document.getElementById('yz').value;
	var re = /^(((13[0-9]{1})|(147{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/; //中国大陆手机号开头
	var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
	if (xm == '') {
		alert('请输入姓名');
	}else if (yx == '') {
		alert('请填写邮箱地址')
	}else if (!myreg.test(yx)) {
		alert('请填写正确的邮箱格式');
	}else if (dh == '') {
		alert(document.getElementById('dh').innerText = '请输入手机号')
	}else if (dh.length != 11) {
		alert(document.getElementById('dh').innerText = '请输入11位数字的手机号')
	}else if(!re.test(dh)){
        alert(document.getElementById('dh').innerText="电话格式输入错误");
    }else if (yz == '') {
		alert(document.getElementById('ly').innerText = '请输入留言信息')
	}else if (yz == '') {
		alert(document.getElementById('yz').innerText = '请输入验证码')
	}else{
		alert('提交成功！');
	}
}
//表单清除
function chu() {
	document.getElementById('xm').value = '';
	document.getElementById('yx').value = '';
	document.getElementById('dh').value = '';
	document.getElementById('ly').value = '';
	document.getElementById('yz').value = '';
}


