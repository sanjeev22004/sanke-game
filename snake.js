let x=((Math.round(Math.random()*10))*40);
let y=((Math.round(Math.random()*10))*40);
console.log(x)
 document.querySelector('.points').style.left = x + 'px';
 document.querySelector('.points').style.top  = y +'px';

 setInterval(() => {
    const target=document.querySelector('div');
    const newdiv=document.createElement('div');
    newdiv.style.height="40px";
    newdiv.style.width="40px";
    newdiv.style.backgroundColor = "green";
    newdiv.style.padding="3px";



    target.insertAdjacentHTML('afterend',newdiv.outerHTML);
}, 500);
