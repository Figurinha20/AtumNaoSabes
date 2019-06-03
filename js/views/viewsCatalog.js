import {Card} from "../models/Card.js";
import {renderCatalog} from "../controllers/controlsCatalog.js"


//on load = show all
window.addEventListener("load", function (event){
renderCatalog()
})

//onseacrh ou onclick = refresh
document.querySelector("#formSearch").addEventListener("search", function (event){
renderCatalog()
})

































































let merda = ` 
<div class="col-sm-10">
    <div class="row">
        <div class="col-sm-4">
            <div id="card" class="card border-dark mb-3" style="width: 18rem;">
                <h5 id="cardName" class="card-title text-center font-weight-bold">Nome do Peixe</h5>
                <img id="cardImg" class="card-img-top"
                    src="https://oceana.org/sites/default/files/styles/ntsc/public/magma_wrasse3_b.p._shutman.jpg?itok=pKC8AHK"
                    alt="Card image cap">
                <div class="card-body">
                    <p id="cardText" class="card-text">[Filtros]</p>
                    <hr>
                    <a id="cardBtn" href="#" class="btn btn-dark">Ver Mais</a>
                </div>
            </div>
        </div>

        <div class="col-sm-4">
            <div id="card" class="card border-dark mb-3" style="width: 18rem;">
                <h5 id="cardName" class="card-title text-center font-weight-bold">Nome do Peixe</h5>
                <img id="cardImg" class="card-img-top"
                    src="https://oceana.org/sites/default/files/styles/ntsc/public/magma_wrasse3_b.p._shutman.jpg?itok=pKC8AHK"
                    alt="Card image cap">
                <div class="card-body">
                    <p id="cardText" class="card-text">[Filtros]</p>
                    <hr>
                    <a id="cardBtn" href="#" class="btn btn-dark">Ver Mais</a>
                </div>
            </div>
        </div>

        <div class="col-sm-4">
            <div id="card" class="card border-dark mb-3" style="width: 18rem;">
                <h5 id="cardName" class="card-title text-center font-weight-bold">Nome do Peixe</h5>
                <img id="cardImg" class="card-img-top"
                    src="https://oceana.org/sites/default/files/styles/ntsc/public/magma_wrasse3_b.p._shutman.jpg?itok=pKC8AHK"
                    alt="Card image cap">
                <div class="card-body">
                    <p id="cardText" class="card-text">[Filtros]</p>
                    <hr>
                    <a id="cardBtn" href="#" class="btn btn-dark">Ver Mais</a>
                </div>
            </div>
        </div>


    </div>
</div>




</div>
<div class="row">
<hr>
</div>
<div class="row">
<div class="col-sm-1">

</div>

<div class="col-sm-10">
    <div class="row">
        <div class="col-sm-4">
            <div id="card" class="card border-dark mb-3" style="width: 18rem;">
                <h5 id="cardName" class="card-title text-center font-weight-bold">Nome do Peixe</h5>
                <img id="cardImg" class="card-img-top"
                    src="https://oceana.org/sites/default/files/styles/ntsc/public/magma_wrasse3_b.p._shutman.jpg?itok=pKC8AHK"
                    alt="Card image cap">
                <div class="card-body">
                    <p id="cardText" class="card-text">[Filtros]</p>
                    <hr>
                    <a id="cardBtn" href="#" class="btn btn-dark">Ver Mais</a>
                </div>
            </div>
        </div>

        <div class="col-sm-4">
            <div id="card" class="card border-dark mb-3" style="width: 18rem;">
                <h5 id="cardName" class="card-title text-center font-weight-bold">Nome do Peixe</h5>
                <img id="cardImg" class="card-img-top"
                    src="https://i.pinimg.com/originals/fb/76/f5/fb76f5aa8b6cc096f9a720a76a794a9c.png"
                    alt="Card image cap">
                <div class="card-body">
                    <p id="cardText" class="card-text">[Filtros]</p>
                    <hr>
                    <a id="cardBtn" href="#" class="btn btn-dark">Ver Mais</a>
                </div>
            </div>
        </div>

        <div class="col-sm-4">
            <div id="card" class="card border-dark mb-3" style="width: 18rem;">
                <h5 id="cardName" class="card-title text-center font-weight-bold">Nome do Peixe</h5>
                <img id="cardImg" class="card-img-top"
                    src="https://oceana.org/sites/default/files/styles/ntsc/public/magma_wrasse3_b.p._shutman.jpg?itok=pKC8AHK"
                    alt="Card image cap">
                <div class="card-body">
                    <p id="cardText" class="card-text">[Filtros]</p>
                    <hr>
                    <a id="cardBtn" href="#" class="btn btn-dark">Ver Mais</a>
                </div>
            </div>
        </div>


    </div>
</div>

<div class="col-sm-1">

</div>


</div>




`




