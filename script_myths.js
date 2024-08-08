/* javascript for myths page */

/* drag and drop function */
function droppoint(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("Text");
  var node = document.getElementById(data);

/* remove node from new parent */
  if (event.target.contains(node)) {
    node.remove();
  }

  node.classList.add('dropped-fact');
  event.target.appendChild(node);

/* re-enable drag events for the newly appended node */
  node.setAttribute('draggable', true);
  node.setAttribute('ondragstart', 'dragpoint(event)');
}
function allowDropOption(event) {
  event.preventDefault();
}
function dragpoint(event) {
  event.dataTransfer.setData("Text", event.target.id);
}

/* variable myth-fact button */
var displayMythResults = document.getElementById("mythButton");

displayMythResults.addEventListener("click", showMythResults);

/* display myth-fact button results */
function showMythResults() {
  mythFact.innerHTML = 
    `<div style=
        "padding: 10px;
        margin-top: 0.8%;
        margin-bottom: 1%;
        margin-left: 10%;
        margin-right: 10%;
        border-radius: 10px; 
        background: #BFE051">
    <div style="display: block;">
      <p> 
        1. (c) <br> 2. (e) <br> 3. (a) <br> 4. (d) <br> 5. (b) <br> How did you do? Were you surprised by some of the facts? <br> Let’s stop judging and start educating others about the realities of homelessness. 
      </p>
    </div>
    <div style="display: block;">
       <img src="assets/Homeless Don't Look Down.jpg"
        alt="A homeless man sitting in the streets against a building wall and wearing a red sleeping bag, with a sign in front of him that says 'Never look down on anybody unless you're helping them up."
        style="width: 50%; height: 50%; margin-top: 10px; border-radius: 30px"/>
    </div>
    </div>
    <p class="underReference"
       id="mythUnder">
       » Facts from the <a href="https://www.commerce.wa.gov/wp-content/uploads/2016/12/hau-chg-mythsfacts-12-8-2016.pdf" target="_blank" rel="noopener noreferrer">State of Washington Department of Commerce</a> «</p>`
}

