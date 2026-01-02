let step = 0;

/* TEXTS */
const texts = [
  "Do you love me? 🥺",
  "Bahut galat baat hai yrr 💔",
  "Ek aur baar soch lo! 😣",
  "Baby man jao na! Kitna bhav khaogi 😭",
  "Aise mana mat karo na… thoda sa pyaar dikha do 😭💗"
];

/* GIFS (LOCAL) */
const gifs = [
  "gifs/start.gif",
  "gifs/no1.gif",
  "gifs/no2.gif",
  "gifs/no3.gif",
  "gifs/no4.gif"
];

const yesGif = "gifs/yes.gif";

/* ELEMENTS */
const gifEl  = document.getElementById("gif");
const textEl = document.getElementById("text");
const noBtn  = document.getElementById("no");
const yesBtn = document.getElementById("yes");

/* 🔊 SIMPLE SOUND (NO & YES) */
function playSound(type){
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.connect(gain);
  gain.connect(ctx.destination);

  if(type === "no"){
    osc.frequency.value = 180;
    gain.gain.value = 0.2;
  }else{
    osc.frequency.value = 520;
    gain.gain.value = 0.25;
  }

  osc.start();
  setTimeout(()=>{osc.stop();ctx.close();},150);
}

/* 💗 HEART CREATOR */
function createHeart(){
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (16 + Math.random()*20) + "px";
  document.body.appendChild(heart);

  setTimeout(()=>heart.remove(),6000);
}

/* HEARTS LOOP */
setInterval(createHeart, 600);

/* START */
gifEl.src = gifs[0];

/* NO CLICK */
noBtn.onclick = () => {
  playSound("no");

  if(step < 4){
    step++;
    textEl.innerText = texts[step];
    gifEl.src = gifs[step];
  }else{
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * (window.innerWidth-100) + "px";
    noBtn.style.top  = Math.random() * (window.innerHeight-50) + "px";
  }
};

/* YES CLICK */
yesBtn.onclick = () => {
  playSound("yes");

  textEl.innerText =
    "I knew it! You love me a lot 😘\nOggy is all yours 💖";

  gifEl.src = yesGif;
  yesBtn.style.display = "none";
  noBtn.style.display  = "none";
};