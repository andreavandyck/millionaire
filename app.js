console.log("Hey");

function greet() {
  let username = prompt("What is your name?");
  document.write("Hello " + username);
}

function asklocation() {
    let location= prompt("Are you from the UK? 1 for Yes or 2 for No!");
    if (location == 1) {
        message = "Me too! You'll know all of this first hand then.";
      }
      else if 
        (location = 2) {
        message = "Well, I hope you get more sun than we do!";
      }
    document.write(message);
  }

function askTime() {
  let time = prompt("What hour is it? (0-23)");
  let message;

  if (time <= 11) {
    message = "Good morning";
  } else if (time <= 17) {
    message = "Good afternoon";
  } else if (time < 24) {
    message = "Good evening";
  } else {
    message = "My friend, that is not a time!";
  }
  document.write(message);
}

  function printGranny() {
let print = prompt ('How many times would you like to print my granny? 1-20', '20')
  
for (let i = 0; i < print; i++) {
    document.write("<img class ='gran' src='granpassportpic-2.jpg'/>")
}
  }

 