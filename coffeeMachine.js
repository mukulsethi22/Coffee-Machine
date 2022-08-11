
const input = require('sync-input');
/*let water = input("Write how many ml of water the coffee machine has:");
let milk = input("Write how many ml of milk the coffee machine has:");
let coffeeBeans = input("Write how many grams of coffee beans the coffee machine has:");
let cups = Math.min(Math.floor(water/200),Math.floor(milk/50),Math.floor(coffeeBeans/15));
let cupsReq = input("Write how many cups of coffee you will need:");
if(cups==cupsReq){
  console.log("Yes, I can make that amount of coffee");
}else if(cups<cupsReq){
  console.log(`No, I can only make ${cups} cups of coffee`);
}else if(cups>cupsReq){
  console.log(`Yes, I can make that amount of coffee (and even ${cups-cupsReq} more than that)`);
}*/
function check(w,m,cB,c){
  if(water>=w){
    if(milk>=m){
      if(coffeeBeans>=cB){
        if(cups>=c){
          console.log("I have enough resources, making you a coffee!\n");
          return 1;
        }else{
          console.log("Sorry, not enough cups!\n");
          return 0;
        }
      }else{
        console.log("Sorry, not enough coffee beans!\n");
        return 0;
      }
    }else{
      console.log("Sorry, not enough milk!\n");
      return 0;
    }
  }else{
    console.log("Sorry, not enough water!\n");
    return 0;
  }
  return 0;
}

let money = 550;
let water = 400;
let milk = 540;
let coffeeBeans = 120;
let cups = 9;

function status(){
  console.log(`The coffee machine has:
${water} ml of water
${milk} ml of milk
${coffeeBeans} g of coffee beans
${cups} disposable cups
$${money} of money\n`);
}

function buy(){
  let option = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:\n");
  if(option == 1){
    if(check(250,0,16,1)){
    water = water - 250;
    coffeeBeans = coffeeBeans - 16;
    cups = cups -1;
    money=money+4;}
  }else if(option == 2){
    if(check(350,75,20,1)){
    water = water - 350;
    milk = milk - 75;
    coffeeBeans = coffeeBeans - 20;
    cups = cups -1;
    money=money+7;}
  }else if(option == 3){
    if(check(200,100,12,1)){
    water = water - 200;
    milk = milk - 100;
    coffeeBeans = coffeeBeans - 12;
    cups = cups -1;
    money=money+6;}
  }else if(option == "back")
  return;
  
}

function fill(){
  water = water +Number(input("Write how many ml of water you want to add:\n"));
  milk = milk +Number(input("Write how many ml of milk you want to add:\n"));
  coffeeBeans = coffeeBeans +Number(input("Write how many grams of coffee beans you want to add:\n"));
  cups = cups +Number(input("Write how many disposable coffee cups you want to add:\n"));
}

function take(){
  console.log(`I gave you $${money}\n`);
  money = 0;
}

let action = input("Write action (buy, fill, take, remaining, exit):\n");
while(action!="exit"){
  console.log();
  switch(action){
  case "buy":
  buy();
  break;
  case "fill":
  fill();
  break;
  case "take":
  take();
  break;
  case "remaining":
  status();
  break;}
  action = input("Write action (buy, fill, take, remaining, exit):\n");
}
