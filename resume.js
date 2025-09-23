console.log("test");
//define variables
let myName= "Avery Barlow";
let myEmail= "ave2grace@gmail.com";
let title= "Server at The Cheesecake Factory";
let education= "Oral Roberts University";
let experience= "Team Member at Chick-fil-a, Host at Texas Roadhouse, Social Media Manager, Server at The Rooftop";

//connect variables to the HTML (ligaments)
document.getElementById("my-name").textContent = myName;
document.getElementById("my-email").textContent = myEmail;
document.getElementById("title").textContent = title;
document.getElementById("education").textContent = education;
document.getElementById("experience").textContent = experience;

let skills = ["attention to detail", "Communication", "Conflict Resolution", "Creativity", "POS operation", "Social Media Management", "Salesmenship"];
let skillsList = document.createElement("ul");
for (let i = 0; i < skills.length; i++) {
 let li = document.createElement("li");
 li.textContent = skills[i];
 skillsList.appendChild(li);
}
document.body.appendChild(skillsList);

function showFunFact() {
 alert("Fun Fact: I love playing instruments!");
}