//Event listener
document.getElementById("mad-lib-btn1").addEventListener("click", madLibBuild1);
document.getElementById("mad-lib-btn2").addEventListener("click", madLibBuild2);
// Event function
function madLibBuild1() {
  //Input
  let pluralNoun1 = document.getElementById("Plural-Noun").value;
  let adjective1 = document.getElementById("Adjective").value;
  let presentTenseVerb1 = document.getElementById("Present-Tense-Verb").value;
  let noun1 = document.getElementById("Noun").value;
  let number1 = document.getElementById("Number").value;
  let preposititon1 = document.getElementById("Preposition").value;
  //Process
  let output1 = `"There are too many ${pluralNoun1} on this  ${adjective1} airplane!", I screamed.
"Oh no! there are ${number1} of them ${preposititon1} the toilet!" My friend shouted. "Somebody has to  ${presentTenseVerb1} on the ${noun1} to solve this problem!"`;
  //Output
  document.getElementById("results").innerHTML = output1;
  document.getElementById("the-html").style.backgroundImage =
    "url(images/plane.jpg)";
  document.getElementById("the-html").style.backgroundRepeat = "no-repeat";
  document.getElementById("the-html").style.backgroundSize = "cover";
  document.getElementById("results").style.fontFamily =
    " Arial, Helvetica, sans-serif";
  document.getElementById("results").style.fontSize = "18px";
  document.getElementById("results").style.fontWeight = "500";
  document.getElementById("results").style.border = "2px solid orange";
  document.getElementById("results").style.lineHeight = "25px";
}
// Event function
function madLibBuild2() {
  //Input
  let pluralNoun2 = document.getElementById("Plural-Noun").value;
  let adjective2 = document.getElementById("Adjective").value;
  let presentTenseVerb2 = document.getElementById("Present-Tense-Verb").value;
  let noun2 = document.getElementById("Noun").value;
  let number2 = document.getElementById("Number").value;
  let preposititon2 = document.getElementById("Preposition").value;
  //Process
  let output2 = `The ${adjective2} race is ${preposititon2} my house. There are about ${number2} miles to run. However, If I ${presentTenseVerb2} everyday with the help of the ${noun2}, even ${pluralNoun2} won't be able to surpass me.`;
  //Output
  var theResults = document.getElementById("results");
  theResults.innerHTML = output2;
  document.getElementById("the-html").style.backgroundImage =
    "url('images/competition.jpg')";
  document.getElementById("the-html").style.backgroundRepeat = "no-repeat";
  document.getElementById("the-html").style.backgroundSize = "cover";
  theResults.style.fontFamily = "Sue Ellen Francisco, cursive";
  theResults.style.fontSize = "25px";
  theResults.style.fontWeight = "500";
  theResults.style.fontStyle = "normal";
  theResults.style.border = "2px solid rgb(70, 112, 190)";
  theResults.style.lineHeight = "40px";
}
