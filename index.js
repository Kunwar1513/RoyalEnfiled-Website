let rightBtn = document.getElementById("right-btn");
let leftBtn = document.getElementById("left-btn");
let images = document.querySelector("img_bx");




let index = 0;

let len = Array.from(document.getElementsByClassName('main-img')).length * 310;
let lenOne = Array.from(document.getElementsByClassName('main-img')).length * 930;
let images_off =  ()=>{
    Array.from(document.getElementsByClassName('main-img')).forEach((e)=>{
        e.style.width = "35%";
        e.style.filter = "blur(1.5px)";

    })
}



leftBtn.addEventListener('click',function (){
    index -= 310;
    if(index > (len)-310){
       index = (len)-310;
    }
   document.getElementsByClassName('img_bx')[0].scrollLeft = index;
      images_off();
      document.getElementsByClassName('main-img')[index/310].style.width = "70%";
      document.getElementsByClassName('main-img')[index/310].style.filter = "blur(0px)";
})
rightBtn.addEventListener('click',function (){
    index += 310;
    if(index > (len)-310){
       index = (len) - 310;
    }
   document.getElementsByClassName('img_bx')[0].scrollLeft = index;
      images_off();
      document.getElementsByClassName('main-img')[index/310].style.width = "70%";
      document.getElementsByClassName('main-img')[index/310].style.filter = "blur(0px)";
})



