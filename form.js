class Form {

constructor() {
//making the setup of name button greeting title and reset
this.input = createInput("Name");
this.button = createButton("Play");
this.greeting = createElement("h2");
this.title = createElement("h2");
this.reset = createButton("Reset");
}

hide() {
//hiding the setup like greeting title input & button
this.greeting.hide();
this.button.hide();
this.input.hide();
this.title.hide();
}

display(){
// writing title & position of title, position of input, position of button & position of reset
this.title.html("Welcome to our Fruit Collecting Game");
this.title.position(500,100);
this.input.position(450,350);
this.button.position(450,400);
this.reset.position(750,900);
this.reset.hide();
// after mouse is pressing the button hide the input & button,name of player is shown,playerCount increased by 1,update players,
// update playerCount, greeting us hello and welcome with players name, position of greeting
this.button.mousePressed(()=>{
this.input.hide();
this.button.hide();
player.name = this.input.value();
playerCount+=1;
player.index = playerCount;
player.update();
player.updateCount(playerCount);
this.greeting.html("Hello & Welcome" + player.name);
this.greeting.position(500,225);
}
);

this.reset.mousePressed(()=>{
player.updateCount(0);
game.update(0);
}
);
}










}