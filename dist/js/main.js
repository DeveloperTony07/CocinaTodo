const app = Vue.createApp({
    data(){
        return{
            logoWhite: "./svgs/LogoWhite.svg",
            imgHeader: "./imgs/header.jpg",
            selectedIndex: 0,
            recipes: [
                {
                    id: 1, image: "./imgs/recipes/Arepas con miel.jpg", name: "Arepas", category: "Desayuno", ocasions: "Semana Santa", level: "Medio"
                },
                {
                    id: 2, image: "./imgs/recipes/Arroz con camarones.jpg", name: "Arroz con camarones", category: "Almuerzo", ocasions: "Semana Santa", level: "Medio"
                },
                {
                    id: 3, image: "./imgs/recipes/Arroz con Carne.jpg", name: "Arroz con carne", category: "Almuerzo", ocasions: "Semana Santa", level: "Medio"
                },
                {
                    id: 4, image: "./imgs/recipes/Arroz con pollo frito.jpg", name: "Arroz con pollo frito", category: "Almuerzo", ocasions: "Semana Santa", level: "Medio"
                },
                {
                    id: 5, image: "./imgs/recipes/Huevo revuelto de alta gama.jpg", name: "Huevo de alta gama", category: "Desayuno", ocasions: "Semana Santa", level: "Medio"
                },
                {
                    id: 6, image: "./imgs/recipes/Maruchan.jpg", name: "Ramen", category: "Sopa", ocasions: "Semana Santa", level: "Medio"
                },
                {
                    id: 7, image: "./imgs/recipes/Papa rellena de papa.jpg", name: "Papa orneada", category: "Cena", ocasions: "Semana Santa", level: "Medio"
                },
                {
                    id: 8, image: "./imgs/recipes/Perfect Bacon.jpg", name: "Bacon", category: "Cena", ocasions: "Semana Santa", level: "Medio"
                },

            ]
        }
    }
});

//init custom events for components
const emitter = mitt();
//global propety for custom events
app.config.globalProperties.$test = emitter;