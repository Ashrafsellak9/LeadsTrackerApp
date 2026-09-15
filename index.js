import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js"

const firebaseConfig = {
  databaseURL: process.env.DATABASE_URL
}

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const refLeads = ref(database, "leads");

 
onValue(refLeads, (snapshot) => {
  const snapshotDoesExist = snapshot.exists();
  if(snapshotDoesExist) {
    const snapshotValues = snapshot.val();
    const leads = Object.values(snapshotValues);
    render(leads);
  } else {
    ulEl.innerHTML = "No leads yet";
  }
})

let inputEl = document.getElementById("input-el");
let inputBtn = document.getElementById("input-btn");
let ulEl = document.getElementById("ul-el");
let deleteBtn = document.getElementById("delete-btn");
let myLeads = []


deleteBtn.addEventListener("dblclick", () => {
  remove(refLeads);
  ulEl.innerHTML = "No leads yet";
})

inputBtn.addEventListener("click", () => {
    push(refLeads, inputEl.value);
    inputEl.value = "";
    render(myLeads);
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