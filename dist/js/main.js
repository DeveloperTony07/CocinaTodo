const app = Vue.createApp({
    data(){
        return{
            selectedIndex: 0,
            recipes: [
                {
                    id: 1, image: "./imgs/recipes/Arepas con miel.jpg", name: "Arepas", category: "Desayuno", ocasions: "Semana Santa", level: "Medio", likes: 0
                },
                {
                    id: 2, image: "./imgs/recipes/Arroz con camarones.jpg", name: "Arroz con camarones", category: "Almuerzo", ocasions: "Semana Santa", level: "Medio", likes: 0
                },
                {
                    id: 3, image: "./imgs/recipes/Arroz con Carne.jpg", name: "Arroz con carne", category: "Almuerzo", ocasions: "Semana Santa", level: "Medio", likes: 0
                },
                {
                    id: 4, image: "./imgs/recipes/Arroz con pollo frito.jpg", name: "Arroz con pollo frito", category: "Almuerzo", ocasions: "Semana Santa", level: "Medio", likes: 0
                },
                {
                    id: 5, image: "./imgs/recipes/Huevo revuelto de alta gama.jpg", name: "Huevo de alta gama", category: "Desayuno", ocasions: "Semana Santa", level: "Medio", likes: 0
                },
                {
                    id: 6, image: "./imgs/recipes/Maruchan.jpg", name: "Ramen", category: "Sopa", ocasions: "Semana Santa", level: "Medio", likes: 0
                },
                {
                    id: 7, image: "./imgs/recipes/Papa rellena de papa.jpg", name: "Papa horneada", category: "Cena", ocasions: "Semana Santa", level: "Medio", likes: 0
                },
                {
                    id: 8, image: "./imgs/recipes/Perfect Bacon.jpg", name: "Bacon", category: "Cena", ocasions: "Semana Santa", level: "Medio", likes: 0
                },

            ],
        }
    },
    methods: {
        onClickLike(index) {
            // console.log("btn - click");
            //this.likes += 1;
            //console.log("INDEX ->" + index);
            this.recipes[index].likes += 1;
        },
        onClickViewRecipe(index) {
            this.selectedIndex = index;
        },
        onClickPrev() {
            this.selectedIndex--;
            if (this.selectedIndex < 0) {
                this.selectedIndex = this.recipes.length - 1;
            }
        },
        onClickNext() {
            this.selectedIndex++;
            if (this.selectedIndex >= this.recipes.length) {
                this.selectedIndex = 0;
            }
        }
    },
});

//init custom events for components
const emitter = mitt();
//global propety for custom events
app.config.globalProperties.$test = emitter;