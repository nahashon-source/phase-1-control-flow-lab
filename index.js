//function scuberGreetingForFeet(){
  // Write your code here!
//}

f//unction ternaryCheckCity(){
  // Write your code here!
//}

function scuberGreetingForFeet(rideDistance) {
  if (rideDistance <= 400) {
    return "This one is on me!";
  } else if (rideDistance > 400 && rideDistance <= 2000) {
    return "That will be twenty bucks.";
  } else if (rideDistance > 2000 && rideDistance <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}

function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}
function switchOnCharmFromTip(tip){
  // Write your code here!
if(tip=== 'generous'){
  return 'Thank you so much.'
}
else if(tip == 'not as generous'){
  return "Thank you."
}else {
    return "Bye.";
  }
}