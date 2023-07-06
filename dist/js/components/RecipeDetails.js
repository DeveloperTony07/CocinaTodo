app.component('recipe-details', {
    props: {
        id: {
            type: Number
        },
        name: {
            type: String
        },
        image: {
            type: String
        },
        category: {
            type: String
        },
        occasion:{
            type: String
        },
        level: {
            type: String
        },
        preparation: {
            type: Number
        },
        cooking: {
            type: Number
        },
        total: {
            type: Number
        },
        description: {
            type: String
        },
        ingredients: {
            type: Array
        },
        instruction:{
            type: String
        }
    },
    template:
        /*html*/
        `
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class=" txt-modal-name fs-5" id="staticBackdropLabel">
                            {{name}} 
                        </h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body txt-modal-content">
                        <img class="d-block m-auto img-fluid imgRecipe" v-bind:src="image"
                            alt="img">
                        <p class="txt-center pt-2">Categoria: <span>{{category}}</span></p>
                        <p class="txt-center pt-2">Occasion: <span>{{occasion}}</span></p>
                        <p class="txt-center pt-2">Nivel: <span>{{level}}</span></p>
                        <p class="txt-center pt-2">Tiempo de preparación: <span>{{preparation}} minutos</span></p>
                        <p class="txt-center pt-2">Tiempo de cocción: <span>{{cooking}} minutos</span></p>
                        <p class="txt-center pt-2">Tiempo total: <span>{{total}} minutos</span></p>
                        <p class="txt-center pt-2">Descripción: <span>{{description}}</span></p>
                        <p class="txt-center pt-2">Ingredientes:</p>
                        <ul>
                            <li class="txt-center" v-for="ingredient in ingredients" :key="ingredient">{{ ingredient }}</li>
                        </ul>
                        <p class="txt-center pt-2">Intrucciones: <span>{{instruction}}</span></p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    `
})