console.log("Hey");

function greet() {
  let username = prompt("What is your name?");
  document.write("Hello " + username);
}

function asklocation() {
    let message= prompt("Are you from the UK? Yes or No answer please");
    if (answer = "yes") {
        message = "Me too! You'll know all of this first hand then.";
      }
      else if 
        (answer = "no") {
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