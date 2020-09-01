// Global Variables
let blinks = getCookie("blinks") || 0;
let autoVal = Number(getCookie("autoVal")) || 0;
let autoValPrice = Number(getCookie("autoValPrice")) || 50;
let blinkVal = Number(getCookie("blinkVal")) || 1;
let blinkMultPrice = Number(getCookie("blinkMultPrice")) || 25;
let col = [255, 255, 255];
let blinker;
let blinkMult;
let outfitUpgrade;
let stick;
let blink;
let stickGlasses;
let stickCrown;
let stickCancer;
let resetButton;
let glasses = Number(getCookie("glasses")) || 0;
let crown = Number(getCookie("crown")) || 0;
let cancer = Number(getCookie("cancer")) || 0;
let outfitPrice = Number(getCookie("outfitPrice")) || 500;
let outfitsBought = Number(getCookie("outfitsBought")) || 0;
let maxOutfitPrice = 10000;

function preload() {
  stick = loadImage("./assets/stickman.png");
  blink = loadImage("./assets/blink.png");
  stickGlasses = loadImage("./assets/glasses.png");
  stickCrown = loadImage("./assets/crown.png");
  stickCancer = loadImage("./assets/cancer.png");
}

function setup() {
  // Console Warning
  console.log("Don't cheat\n  Sincerely~Ethan");
  
  // Canvas Props
  const cnv = createCanvas(600, 400);
  cnv.style("margin", "75px auto 0px auto");
  
  // Assing Reset Button
  resetButton = select("#resetButton");
  resetButton.position(25, windowHeight - 50);
  
  // Assign Objects
  blinker = new Upgrade("Auto Blinker", autoValPrice, createVector(425, 25));
  blinkMult = new Upgrade("Blink Multiplier", blinkMultPrice, createVector(425, height / 2 - 30));
  outfitUpgrade = new Upgrade("Outfit", outfitPrice, createVector(425, height - 90));
  
  // Auto Blinker
  setInterval(function() {
    blinks += autoVal;
  }, 1000);
}

function draw() {
  background(col[0], col[1], col[2]);
  blinks = Math.round(blinks);
  
  if (outfitsBought) {
    outfitPrice = "No More Outfits!";
    outfitUpgrade.price = "No More Outfits!";
  }
  
  resetButton.position(25, windowHeight - 50);
  resetButton.mousePressed(resetCookies);
  
  // Cookie Assignment
  document.cookie = `blinks=${blinks}; expires=Thu, 18 Dec 3000 12:00:00 UTC; path=/Ethan_Knotts/present/-UV_vhDdu`;
  document.cookie = `blinkVal=${blinkVal}; expires=Thu, 18 Dec 3000 12:00:00 UTC; path=/Ethan_Knotts/present/-UV_vhDdu`;
  document.cookie = `blinkMultPrice=${blinkMultPrice}; expires=Thu, 18 Dec 3000 12:00:00 UTC; path=/Ethan_Knotts/present/-UV_vhDdu`;
  document.cookie = `autoVal=${autoVal}; expires=Thu, 18 Dec 3000 12:00:00 UTC; path=/Ethan_Knotts/present/-UV_vhDdu`;
  document.cookie = `autoValPrice=${autoValPrice}; expires=Thu, 18 Dec 3000 12:00:00 UTC; path=/Ethan_Knotts/present/-UV_vhDdu`;
  document.cookie = `glasses=${glasses}; expires=Thu, 18 Dec 3000 12:00:00 UTC; path=/Ethan_Knotts/present/-UV_vhDdu`;
  document.cookie = `crown=${crown}; expires=Thu, 18 Dec 3000 12:00:00 UTC; path=/Ethan_Knotts/present/-UV_vhDdu`;
  document.cookie = `cancer=${cancer}; expires=Thu, 18 Dec 3000 12:00:00 UTC; path=/Ethan_Knotts/present/-UV_vhDdu`;
  document.cookie = `outfitPrice=${outfitPrice}; expires=Thu, 18 Dec 3000 12:00:00 UTC; path=/Ethan_Knotts/present/-UV_vhDdu`;
  document.cookie = `outfitsBought=${outfitsBought}; expires=Thu, 18 Dec 3000 12:00:00 UTC; path=/Ethan_Knotts/present/-UV_vhDdu`;

  // Call Upgrade Methods
  blinker.highlight();
  blinkMult.highlight();
  outfitUpgrade.highlight();
  
  blinker.show();
  blinkMult.show();
  outfitUpgrade.show();

  // Draw Functions
  drawConfig();
  drawOutfits();
  messages();

  // Blink Detection
  if (!glasses && !crown && !cancer) {
    if (mouseIsPressed) {
      image(blink, 100, 100, 200, 200);
    } else {
      image(stick, 100, 100, 200, 200);
    }
  }
}

// Extra Functions
function mousePressed() {
  blinks += blinkVal;
  checkBackground();
  
  blinker.update("auto");
  blinkMult.update("mult");
  outfitUpgrade.update("outfit");
}

function checkBackground() {
  if (mouseX < 70 && mouseX > 25 && mouseY < 68 && mouseY > 20) {
    col = [255, 255, 255];
  } else if (mouseX < 145 && mouseX > 100 && mouseY < 68 && mouseY > 20) {
    col = [255, 0, 0];
  } else if (mouseX < 220 && mouseX > 175 && mouseY < 68 && mouseY > 20) {
    col = [0, 0, 255];
  }
}

function drawConfig() {
  // Draw Config Text
  push();
  fill(0);
  textSize(50);
  text(`Blinks:${blinks}`, 15, 340);
  pop();

  push();
  fill("grey");
  textSize(20);
  text("Version: 1.1.1", 18, 380);
  pop();
  
  // Draw Background Buttons
  push();
  fill(255);
  strokeWeight(2);
  rect(25, 20, 45, 45);
  pop();

  push();
  fill(255, 0, 0);
  strokeWeight(2);
  rect(100, 20, 45, 45);
  pop();

  push();
  fill(0, 0, 255);
  strokeWeight(2);
  rect(175, 20, 45, 45);
  pop();
  
  // Draw Upgrade Divider
  push();
  stroke(0);
  strokeWeight(2);
  line(400, 0, 400, height);
  pop();
}

function messages() {
  if (blinks > 49 && blinks < 60) {
    fill("gray");
    rect(275, 85, 73, 73);
    textSize(17);
    fill("red");
    text("You are", 280, 105);
    text("officialy", 280, 125);
    text("Ethan :-)", 280, 145);
  } else if (blinks > 149 && blinks < 160) {
    fill("gray");
    rect(275, 75, 90, 90);
    textSize(17);
    fill("red");
    text("You are", 280, 105);
    text("officialy", 280, 125);
    text("John :-)", 280, 145);
  } else if (blinks > 299 && blinks < 310) {
    fill("gray");
    rect(275, 75, 90, 90);
    textSize(17);
    fill("red");
    text("You are", 280, 105);
    text("officialy", 280, 125);
    text("Mark :-)", 280, 145);
  } else if (isNaN(blinks)) {
    fill("gray");
    rect(278, 85, 70, 70);
    textSize(17);
    fill("red");
    text("You Win!", 280, 125);
  }
}

function drawOutfits() {
  if (glasses && !crown && !cancer) {
    image(stickGlasses, 100, 100, 200, 200);
  } else if (!glasses && crown && !cancer) {
    image(stickCrown, 100, 100, 200, 200);
  } else if (!glasses && !crown && cancer) {
    image(stickCancer, 100, 100, 200, 200);
  }
}

function resetCookies() {
  // Reset Auto Blinker
  autoVal = 0;
  autoValPrice = 50;
  blinker.price = 50;
  
  // Reset Blink Mult
  blinkVal = 1;
  blinkMultPrice = 25;
  blinkMult.price = 25;
  
  // Reset Outfits
  glasses = 0;
  crown = 0;
  cancer = 0;
  outfitPrice = 500;
  outfitUpgrade.price = 500;
  outfitsBought = 0;
  
  // Reset Blinks
  blinks = 0 - blinkVal;
  
  //location.reload();
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  
  for (var i = 0; i < ca.length; i++) {
    let c = ca[i];
    
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  
  return "";
}
