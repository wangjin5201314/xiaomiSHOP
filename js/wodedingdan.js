window.onload = function(){
let toplist = document.querySelectorAll(".quanbu-box .text div");
let bottomlist = document.querySelector(".box");
	toplist.forEach((val,index)=>{
		val.onclick = function(){
			bottomlist.style.left = -100*index + "vw";
			toplist.forEach((ele)=>{
				ele.classList.remove("xz");
			});
			toplist[index].classList.add("xz");
		}
	});
}

