
function getStyle(obj, name){
 if(obj.currentStyle){
  return obj.currentStyle[name]; 
 }else{
  return getComputedStyle(obj ,null)[name]; 
 } 
}


function starMover(obj, carr, iTarget){
 clearInterval(obj.timer);
 obj.timer=setInterval(function(){
 var cur=0;
 if(carr=="opacity"){
 cur=Math.round(parseFloat(getStyle(obj, carr))*100);
 }else{
 cur=parseInt(getStyle(obj, carr));
 }
 var speed=(iTarget-cur)/6;
 speed=speed>0?Math.ceil(speed):Math.floor(speed);
 if(cur==iTarget){
 clearInterval(obj.timer);
 }else{
 if(carr=="opacity"){
 obj.style.filter="alpha(opacity:'+(cur+speed)+')";
 obj.style.opacity=(cur+speed)/100;
 }else{
 obj.style[carr]=cur+speed+"px"; 
 } 
 
 } 
 },30);
}
 