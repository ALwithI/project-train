let stars = document.getElementById('stars');
let moon=document.getElementById('moon');
let mountains3=document.getElementById('mountains3');
let mountains4=document.getElementById('mountains4');
let river=document.getElementById('river');
let boat=document.getElementById('boat');
let scrolle=document.querySelector('.scrolle');
window.onscroll = function(){
let value=scrollY;
console.log(value);
stars.style.left = value +'px';
moon.style.top= value *4+'px';
mountains3.style.top=value*2+'px';
mountains4.style.top=value*1.5+'px';
river.style.top=value+'px';
boat.style.top=value+'px';
boat.style.left=value*3+'px';
scrolle.style.fontSize=value+'px';
if(scrollY >= 67){
    scrolle.style.fontSize=67+'px';
    scrolle.style.position='fixed';
    if(scrollY>=400){
        scrolle.style.display='none';
    }else{
        scrolle.style.display='block';
    }
    if(scrollY>117){
        document.querySelector('.main').style.background='linear-gradient(#3f6b91, #10001f)';
    }else{
        document.querySelector('.main').style.background='linear-gradient(#200016,#10001f) ';
    }
}
}