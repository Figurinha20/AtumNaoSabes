
import {renderCatalog,getAllTags} from "../controllers/controlsCatalog.js"

renderCatalog("","")

let tags = getAllTags()
console.log(tags)

for (const tag of tags){
    document.querySelector("#sltFilter").innerHTML+=`
    <option value="${tag}">${tag}</option>`
}

//onseacrh ou onclick = refresh
document.querySelector("#formSearch").addEventListener("submit", function (event){
    console.log("search")
    let search = document.querySelector("#txtSearch").value.toLowerCase()
    let filterName = document.querySelector("#sltFilter").value.toLowerCase()
    

event.preventDefault()

renderCatalog(filterName, search)

})

//onseacrh ou onclick = refresh
document.querySelector("#sltFilter").addEventListener("click", function (event){
    console.log("combochange")
    let search = document.querySelector("#txtSearch").value.toLowerCase()
    let filterName = document.querySelector("#sltFilter").value.toLowerCase()
    

event.preventDefault()

renderCatalog(filterName, search)

})



