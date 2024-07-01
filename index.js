


let clock=document.createElement("div");
clock.style.backgroundColor="silver";
clock.style.height="300px";
clock.style.width="300px";
clock.style.borderRadius="50%";
clock.style.display="flex";
clock.style.justifyContent="center";
clock.style.alignItems="center";
document.body.appendChild(clock);


let dot=document.createElement("div");
dot.style.position="absolute";
dot.style.top="50%";
dot.style.left="50%";
dot.style.width="10px";
dot.style.height="10px";
dot.style.backgroundColor="black";
dot.style.borderRadius="50%";
clock.appendChild(dot);

 
let div1=document.createElement("div");
div1.classList.add("div1");
div1.style.position="absolute";
div1.style.height="280px";
div1.style.transform="rotate(30deg)";
let span=document.createElement("span");
span.textContent="1";
span.style.width="18px";
span.style.height="32px";
span.style.transform="rotate(-30deg)";
span.style.lineHeight="60px";
span.style.color="black";
span.style.display="inline-block";
span.style.textAlign="center";
span.style.verticalAlign="middle";

clock.appendChild(div1);
div1.append(span);



let div2=document.createElement("div");
div2.classList.add("div2");
div2.style.position="absolute";
div2.style.height="280px";
div2.style.transform="rotate(60deg)";
let span1=document.createElement("span");
span1.textContent="2";
span1.style.width="18px";
span1.style.height="32px";
span1.style.transform="rotate(-60deg)";
span1.style.lineHeight="46px";
span1.style.color="black";
span1.style.display="inline-block";
span1.style.textAlign="center";
span1.style.verticalAlign="middle";

clock.appendChild(div2);
div2.append(span1);



let div3=document.createElement("div");
div3.classList.add("div2");
div3.style.position="absolute";
div3.style.height="280px";
div3.style.transform="rotate(90deg)";
let span2=document.createElement("span");
span2.textContent="3";
span2.style.width="18px";
span2.style.height="32px";
span2.style.transform="rotate(-90deg)";
span2.style.lineHeight="50px";
span2.style.color="black";
span2.style.display="inline-block";
span2.style.textAlign="center";
span2.style.verticalAlign="middle";

clock.appendChild(div3);
div3.append(span2);


let div4=document.createElement("div");
div4.classList.add("div4");
div4.style.position="absolute";
div4.style.height="280px";
div4.style.transform="rotate(120deg)";
let span3=document.createElement("span");
span3.textContent="4";
span3.style.width="18px";
span3.style.height="32px";
span3.style.transform="rotate(-120deg)";
span3.style.lineHeight="50px";
span3.style.color="black";
span3.style.display="inline-block";
span3.style.textAlign="center";
span3.style.verticalAlign="middle";

clock.appendChild(div4);
div4.appendChild(span3);

let div5=document.createElement("div");
div5.classList.add("div5");
div5.style.position="absolute";
div5.style.height="280px";
div5.style.transform="rotate(150deg)";
let span4=document.createElement("span");
span4.textContent="5";
span4.style.width="18px";
span4.style.height="32px";
span4.style.transform="rotate(-150deg)";
span4.style.lineHeight="50px";
span4.style.color="black";
span4.style.display="inline-block";
span4.style.textAlign="center";
span4.style.verticalAlign="middle";

clock.appendChild(div5);
div5.appendChild(span4);

let div6=document.createElement("div");
div6.classList.add("div5");
div6.style.position="absolute";
div6.style.height="280px";
div6.style.transform="rotate(180deg)";
let span5=document.createElement("span");
span5.textContent="6";
span5.style.width="18px";
span5.style.transform="rotate(-180deg)";
span5.style.height="22px";
span5.style.lineHeight="8px";
span5.style.color="black";
span5.style.display="inline-block";
span5.style.textAlign="center";
span5.style.verticalAlign="middle";

clock.appendChild(div6);
div6.appendChild(span5);

let div7=document.createElement("div");
div7.classList.add("div5");
div7.style.position="absolute";
div7.style.height="280px";
div7.style.transform="rotate(210deg)";
let span6=document.createElement("span");
span6.textContent="7";
span6.style.width="18px";
span6.style.height="32px";
span6.style.transform="rotate(-210deg)";
span6.style.lineHeight="36px";
span6.style.color="black";
span6.style.display="inline-block";
span6.style.textAlign="center";
span6.style.verticalAlign="middle";

clock.appendChild(div7);
div7.appendChild(span6);

let div8=document.createElement("div");
div8.classList.add("div5");
div8.style.position="absolute";
div8.style.height="280px";
div8.style.transform="rotate(240deg)";
let span7=document.createElement("span");
span7.textContent="8";
span7.style.width="18px";
span7.style.height="32px";
span7.style.transform="rotate(-240deg)";
span7.style.lineHeight="40px";
span7.style.color="black";
span7.style.display="inline-block";
span7.style.textAlign="center";
span7.style.verticalAlign="middle";

clock.appendChild(div8);
div8.appendChild(span7);

let div9=document.createElement("div");
div9.classList.add("div5");
div9.style.position="absolute";
div9.style.height="280px";
div9.style.transform="rotate(270deg)";
let span8=document.createElement("span");
span8.textContent="9";
span8.style.width="18px";
span6.style.height="32px";
span8.style.transform="rotate(-270deg)";
span8.style.lineHeight="40px";
span8.style.color="black";
span8.style.display="inline-block";
span8.style.textAlign="center";
span8.style.verticalAlign="middle";

clock.appendChild(div9);
div9.appendChild(span8);

let div10=document.createElement("div");
div10.classList.add("div5");
div10.style.position="absolute";
div10.style.height="280px";
div10.style.transform="rotate(300deg)";
let span9=document.createElement("span");
span9.textContent="10";
span9.style.width="18px";
span9.style.height="32px";
span9.style.transform="rotate(-300deg)";
span9.style.lineHeight="40px";
span9.style.color="black";
span9.style.display="inline-block";
span9.style.textAlign="center";
span9.style.verticalAlign="middle";

clock.appendChild(div10);
div10.appendChild(span9);

let div11=document.createElement("div");
div11.classList.add("div5");
div11.style.position="absolute";
div11.style.height="280px";
div11.style.transform="rotate(330deg)";
let span10=document.createElement("span");
span10.textContent="11";
span10.style.width="18px";
span10.style.height="32px";
span10.style.transform="rotate(-330deg)";
span10.style.lineHeight="40px";
span10.style.color="black";
span10.style.display="inline-block";
span10.style.textAlign="center";
span10.style.verticalAlign="middle";

clock.appendChild(div11);
div11.appendChild(span10);

let div12=document.createElement("div");
div12.classList.add("div5");
div12.style.position="absolute";
div12.style.height="280px";
div12.style.transform="rotate(360deg)";
let span11=document.createElement("span");
span11.textContent="12";
span11.style.width="18px";
span11.style.height="32px";
span11.style.transform="rotate(-360deg)";
span11.style.lineHeight="40px";
span11.style.color="black";
span11.style.display="inline-block";
span11.style.textAlign="center";
span11.style.verticalAlign="middle";

clock.appendChild(div12);
div12.appendChild(span11);


let sec=document.createElement("div");
sec.classList.add("sec");
sec.style.position="absolute";
sec.style.top="37%";
sec.style.transform="rotate(180deg)";
sec.style.left="50.3%";
sec.style.width="1px";
sec.style.height="14%";
sec.style.transformOrigin="50% 96%";
sec.style.backgroundColor="red";
clock.appendChild(sec);


let min=document.createElement("div");
min.classList.add("min");
min.style.position="absolute";
min.style.top="39%";
min.style.left="50.3%";
min.style.width="2px";
min.style.transform="rotate(240deg)";
min.style.height="12%";
min.style.transformOrigin="50% 100%";
min.style.backgroundColor="black";
clock.appendChild(min);


let hr=document.createElement("div");
hr.classList.add("hr");
hr.style.position="absolute";
hr.style.top="39%";
hr.style.left="50.3%";
hr.style.width="3px";
hr.style.height="12%";
hr.style.transform="rotate(300deg)";
hr.style.transformOrigin="50% 100%";
hr.style.backgroundColor="white";
clock.appendChild(hr);


let hours=document.querySelector(".hr");
let minutes=document.querySelector(".min");
let seconds=document.querySelector(".sec");
setInterval(update,1000);

function update(){
    let date =new Date();
    seconds.style.transform=`rotate(${date.getSeconds()*6}deg)`;
    minutes.style.transform=`rotate(${date.getMinutes()*6}deg)`;
    hours.style.transform=`rotate(${date.getHours()*30 + date.getMinutes()*0.5 }deg)`;
console.log(this)
}





































