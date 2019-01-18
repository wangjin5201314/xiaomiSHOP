let left =document.querySelector(".zhongjian .left");
let leftlist =document.querySelectorAll(".zhongjian .left div");
let leftheight = left.offsetHeight;
let leftdivheight = leftlist[0].offsetHeight;
console.log(leftheight)
let size = leftheight - leftdivheight*3;
console.log(size)
let flag = true;
let right =document.querySelector(".zhongjian .right");
let rightlist =document.querySelectorAll(".zhongjian .right li");
leftlist.forEach(function(val,index){
	val.onclick = function(){
		flag = false;
		right.scrollTop = rightlist[index].offsetTop;
		leftlist.forEach(function(ele){
			ele.classList.remove("active");
		});
		this.classList.add("active");
		left.scrollTop = this.offsetTop - size;
		setTimeout(function(){
			flag = true;
		},10);
	}
});
right.onscroll = function(){
	if(flag){
		rightlist.forEach(function(val,index){
			if(right.scrollTop >= val.offsetTop - 30&& right.scrollTop < val.offsetTop+val.offsetHeight){
				leftlist[index].classList.add("active");
				left.scrollTop = leftlist[index].offsetTop - size;
			}else{
				leftlist[index].classList.remove("active");
			}
		});
	}
}



















