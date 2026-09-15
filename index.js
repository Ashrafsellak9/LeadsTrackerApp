import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js"

const firebaseConfig = {
  databaseURL: process.env.DATABASE_URL
}

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const refLeads = ref(database, "leads");

let inputEl = document.getElementById("input-el");
let inputBtn = document.getElementById("input-btn");
let ulEl = document.getElementById("ul-el");
let deleteBtn = document.getElementById("delete-btn");
let myLeads = []


deleteBtn.addEventListener("dblclick", () => {
  myLeads = [];
  renderLeads();
})

inputBtn.addEventListener("click", () => {
    push(refLeads, inputEl.value);
    inputEl.value = "";
    renderLeads();
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