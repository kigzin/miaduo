let i=0;

const title=document.getElementById("titleScreen");
const game=document.getElementById("gameScreen");
const end=document.getElementById("endScreen");

const nameBox=document.getElementById("name");
const textBox=document.getElementById("text");
const john=document.getElementById("john");

document.getElementById("start").onclick=()=>{
title.classList.remove("active");
game.classList.add("active");
advance();
};

function type(s,n=0){
if(n<s.length){
textBox.textContent+=s[n];
setTimeout(()=>type(s,n+1),25);
}
}

function advance(){
if(i>=STORY.length)return;

textBox.textContent="";
john.classList.remove("blush");

let line=STORY[i];

if(line.c==="END"){
game.classList.remove("active");
end.classList.add("active");
return;
}

nameBox.textContent=line.c;

if(line.b) john.classList.add("blush");

type(line.t);
i++;
}

document.getElementById("next").onclick=advance;

/* partículas de fundo */
const c=document.getElementById("bg");
const ctx=c.getContext("2d");
c.width=innerWidth;
c.height=innerHeight;

let p=[];
for(let i=0;i<150;i++){
p.push({x:Math.random()*c.width,y:Math.random()*c.height,r:Math.random()*2,v:Math.random()*0.6});
}

function anim(){
ctx.clearRect(0,0,c.width,c.height);
ctx.fillStyle="pink";
p.forEach(o=>{
ctx.beginPath();
ctx.arc(o.x,o.y,o.r,0,6.28);
ctx.fill();
o.y-=o.v;
if(o.y<0)o.y=c.height;
});
requestAnimationFrame(anim);
}
anim();
