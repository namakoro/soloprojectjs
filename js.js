// let myLeads = []
// const inputEl = document.querySelector("#input-el")
// const buttonClick = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")
// const deleteButton = document.getElementById("delete-btn")
// const tabBtn = document.getElementById("tab-btn")

// let leadFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

// if (leadFromLocalStorage){
//     myLeads = leadFromLocalStorage
//     render(myLeads)
// }


// tabBtn.addEventListener("click", function(){

//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//         myLeads.push(tabs[0].url)
//         localStorage.setItem("myLeads", JSON.stringify(myLeads))
//         render(myLeads)
//     })
// })

// function render(leads){
//     let listItems = ""
//     for (let i = 0; i < leads.length; i++){
//         listItems += `
//             <li>
//                 <a target="_blank" href="${leads[i]}">${leads[i]} </a>
//             </li>
//         `
//     }
//     ulEl.innerHTML = listItems
// }

// buttonClick.addEventListener("click", function (){
//     myLeads.push(inputEl.value)
//     inputEl.value = ''
//     localStorage.setItem("myLeads", JSON.stringify(myLeads))
//     render(myLeads)
// })

// deleteButton.addEventListener("dblclick", function(){
//     localStorage.clear()
//     myLeads = []
//     render(myLeads)

// })

// let totalPrice = 420.62447677474
// const btn = document.getElementById("my-btn")
// btn.addEventListener("click", function(){
//     totalPrice = Math.floor(totalPrice * 100) / 100
//     btn.textContent = `Buy Euro ${totalPrice}`
// })







