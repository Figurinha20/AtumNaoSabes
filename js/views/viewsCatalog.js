
import {renderCatalog} from "../controllers/controlsCatalog.js"

renderCatalog("","")



//onseacrh ou onclick = refresh
document.querySelector("#formSearch").addEventListener("submit", function (event){
    console.log("search")
    let search = document.querySelector("#txtSearch").value.toLowerCase()
    
    console.log(search)
     
event.preventDefault()


renderCatalog("", search)


})



