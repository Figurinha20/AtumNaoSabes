
import {renderCatalog} from "../controllers/controlsCatalog.js"

renderCatalog("","")



//onseacrh ou onclick = refresh
document.querySelector("#txtSearch").addEventListener("search", function (event){
    console.log("search")
    let search = document.querySelector("#txtSearch").value
    
renderCatalog("", search)
})



