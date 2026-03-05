let stats = {
order:50,
freedom:50,
prosperity:50,
tech:50
};

let events=[];

fetch("events.json")
.then(res=>res.json())
.then(data=>{
events=data;
nextEvent();
});

function updateUI(){

document.getElementById("order").textContent=stats.order;
document.getElementById("freedom").textContent=stats.freedom;
document.getElementById("prosperity").textContent=stats.prosperity;
document.getElementById("tech").textContent=stats.tech;

}

function nextEvent(){

let e = events[Math.floor(Math.random()*events.length)];

document.getElementById("event").textContent=e.text;

let choicesDiv=document.getElementById("choices");
choicesDiv.innerHTML="";

e.choices.forEach(choice=>{

let btn=document.createElement("button");
btn.textContent=choice.text;

btn.onclick=()=>{

for(let k in choice.effects){
stats[k]+=choice.effects[k];
}

updateUI();
nextEvent();

};

choicesDiv.appendChild(btn);

});

}

updateUI();
