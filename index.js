import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js"
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js"

const firebaseConfig = {
  databaseURL: process.env.DATABASE_URL
}

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

console.log(database);
console.log(app)
console.log(firebaseConfig.databaseURL)


let inputEl = document.getElementById("input-el");
let inputBtn = document.getElementById("input-btn");
let ulEl = document.getElementById("ul-el");
let deleteBtn = document.getElementById("delete-btn");
let myLeads = []

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if(leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads();
}

deleteBtn.addEventListener("dblclick", () => {
  localStorage.clear();
  myLeads = [];
  renderLeads();
})

inputBtn.addEventListener("click", () => {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads();
    console.log(localStorage.getItem("myLeads"));
})

const render = (leads) => {
    let listItems = "";
    for(let i = 0; i < leads.length; i++) {
        listItems += `
          <li>
            <a target="_blank" href="${leads[i]}">${leads[i]}</a>
          </li>
        `;
    }
    ulEl.innerHTML = listItems;
}

render(myLeads);