class Upgrade {
  constructor(name, price, pos) {
    this.name = name;
    this.price = price;
    this.pos = pos;
    this.s = color(0, 0, 0);
  }

  update(option) {
    if (mouseX > this.pos.x && mouseX < this.pos.x + 150 && mouseY > this.pos.y && mouseY < this.pos.y + 60 && blinks >= this.price) {
      blinks -= this.price;

      if (option === "auto") {
        this.price *= 1.5;
        this.price = Math.round(this.price);
        autoValPrice *= 1.5;
        autoValPrice = Math.round(autoValPrice);

        if (autoVal) {
          autoVal *= 1.5;
        } else {
          autoVal++;
        }

      } else if (option === "mult") {
        this.price *= 1.8;
        this.price = Math.round(this.price);
        blinkMultPrice *= 1.8;
        blinkMultPrice = Math.round(blinkMultPrice);

        blinkVal++;
      } else if (option === "outfit") {

        if (this.price == 500) {
          this.price = 1000;
          outfitPrice = 1000;
          glasses = 1;
          crown = 0;
          cancer = 0;
        } else if (this.price == 1000) {
          this.price = 10000;
          outfitPrice = 10000;
          glasses = 0;
          crown = 1;
          cancer = 0;
        } else if (this.price == maxOutfitPrice) {
          this.price = "No More Outfits!";
          outfitPrice = "No More Outfits!";
          glasses = 0;
          crown = 0;
          cancer = 1;
          outfitsBought = 1;
        }

      }

    } else if (mouseX > this.pos.x && mouseX < this.pos.x + 150 && mouseY > this.pos.y && mouseY < this.pos.y + 60) {

      if (col[0] == 255 && col[1] == 255 && col[2] == 255) {
        this.s = color(0, 0, 255);
      } else if (col[0] == 255 && col[1] == 0 && col[2] == 0) {
        this.s = color(0, 0, 255);
      } else {
        this.s = color(255, 0, 0);
      }

    } else {
      this.s = color(0, 0, 0);
    }
  }

  show() {
    push();
    strokeWeight(2);
    stroke(this.s);
    fill("gray");
    translate(this.pos.x, this.pos.y);
    rect(0, 0, 150, 60);
    pop();

    push();

    if (blinks < this.price) {
      fill("red");
    } else {
      fill(0);
    }

    translate(this.pos.x + 5, this.pos.y + 20);
    textSize(18);
    text(this.name, 0, 0);
    textSize(12);

    if (this.price != "No More Outfits!") {
      text(`${this.price} Blinks`, 0, 25);
    } else {
      text(this.price, 0, 25);
    }

    pop();
  }
}
