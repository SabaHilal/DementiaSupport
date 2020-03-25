var family_member = ["family_member1", "family_member2", "family_member3", "family_member4", "family_member5"];

var family_memberpic = ["family_member1.png", "family_member2.png", "family_member3.png", "family_member4.png", "family_member5.png"];

// Create a variable for radio-button object 
var radio;
var names;
var pics;
var count = 0;
var reshuffle=1;

function preload() {
  names = loadStrings("names.txt");
  pics=names;

  family_member[0] = loadImage(family_memberpic[0]);
  family_member[1] = loadImage(family_memberpic[1]);
  family_member[2] = loadImage(family_memberpic[2]);
  family_member[3] = loadImage(family_memberpic[3]);
  family_member[4] = loadImage(family_memberpic[4]);

}

function setup() {
// Create a canvas 
createCanvas(400, 400);
button1 = createButton('Change Pic');
button1.position(170,380);
button1.mousePressed(next);
}

function draw() {
  clear();
  textSize(18);
  text("Your name is ", 135, 200); 
  loadpic(count);
 
 
  // Get the value of the radio-button 
  var val = radio.value();
  if (val) {
    if (val === pics[count] ) {
       text("Great...You Are Right", 120, 350);
  
      } 
    else 
     {
      text("Try Again", 160, 350);
      }
  }
 
}


function radio_options() {
  
names=shuffle(names);

  // Create a radio-button object 
  // and set options 
 radio = createRadio();
 
  // Option 1 : 
  radio.option(names[0]);

  // Option 2 :  
  radio.option(names[1]);

  // Option 3 : 
  radio.option(names[2]);

  // Option 4 :  
  radio.option(names[3]);

  // Option 5 : 
  radio.option(names[4]);

  radio.position(50, 250);
}

function loadpic(count) {
 if (reshuffle===1)
 {
  radio_options();
  }
  if(count>=5){
    count=0;
  }
  image(family_member[count], 100, 10);
  reshuffle=0;
  
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function next(){
      radio.hide();
      names=shuffle(names);
      radio_options();
      count++; 
      if(count===5){count=0;}
 }