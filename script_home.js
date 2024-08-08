/* javascript for home page */

/* variable message button */
var displayName = document.getElementById("results");
var myButton = document.getElementById("myButton");
if (myButton) {
  myButton.addEventListener("click", displayResults);
}

function displayResults() {
  var text = document.getElementById("myText").value;

/* variable radio buttons */
  var choices = document.getElementsByName("choice-type");
  var choice = "";

  for (var i = 0; i < choices.length; i++) {
    if (choices[i].checked) {
      choice = choices[i].value;
      break;
    }
  }

/* message button results */
    var message = "Hi " + text + "! ";
    if (choice === "Very knowledgeable") {
      message += "You know a lot about the issue of homelessness in America! Even so, I hope that you will learn something new from this website and feel like I covered this topic well!";
    } else if (choice === "Somewhat knowledgeable") {
      message += "I see you know something about homelessness. Maybe you see it in your community or have done brief research about it. I hope that you will learn more about this issue through this website!";
    } else if (choice === "Little to no knowledge") {
      message += "No worries that you don't know much about this issue. This website will provide statistics and facts that will help you gain a better understanding of the topic.";
    } else {
      message += "I see you didn't choose your knowledge level. That's okay, no matter how much you know about this issue, I hope you will take away something valuable from this website!";
    }

/* display message button results */
    displayName.innerHTML = message;
  }

/* variable fact generator */
var statList = [
  "Of those experiencing homelessness, 72% are individual adults and 28% are people living in families with children",
  "Of those experiencing homeless, 22% are chronically homeless individuals, 6% are veterans, and 5% are unaccompanied youth under 25",
  "Out of 10,000 people of each race/ethnicity, 4 Asian or Asian American, 11 White, 22 Hispanic or Latino, 36 Multi-racial, 44 Native American, 48 Black or African American, and 121 Native Hawaiian or Other Pacific Islander experience homelessness",
  "Out of 10,000 people of each gender, 21 male and 13 female experience homelessness",
  "According to the January 2022 PIT Count, 582,462 people were experiencing homelessness across America, which is about 18 out of every 10,000 people",
];

var stat = document.getElementById("stat");
var statButton = document.getElementById("statButton");
var count = 0;

statButton.addEventListener("click", displayStat);

/* display stats */
function displayStat(){
  stat.innerHTML = statList[count];
  count++;
  if (count == statList.length){
  count = 0;
  }
}
