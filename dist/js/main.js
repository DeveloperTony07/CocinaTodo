const app = Vue.createApp({
    data() {
        return {
            selectedIndex: 0,
            recipe: {},
            recipes: [
                {
                    id: 0, image: "./imgs/recipes/Arepas con miel.jpg", name: "Arepas", category: "", occasion: "", level: "",
                    likes: 0
                },
            ],
            topRecipes: [
                {
                    id: 0, image: "./imgs/recipes/Arepas con miel.jpg", name: "Arepas", category: "", occasion: "", level: "",
                    likes: 0
                },
            ],
            categories: [],
            occasion: [],
            levels: [],
            displayedRecipes: [],
            totalRecipes: 0
        }
    },
    mounted: function () {

        //Connect to categories
        this.getRecipeCategories();
        //Connect to occasions
        this.getRecipeOccacions();
        //Connect to occasions
        this.getRecipeLevels();
        //connect to API get a default recipes list
        this.getAllRecipes();
        //Connect api with top 10 recipes
        this.getTopRecipes();
    },
    methods: {
        /* like method */
        onClickLike(recipeId) {
            const recipe = this.recipes.find(recipe => recipe.id === recipeId);

            if (recipe) {
                if (recipe.liked) {
                    recipe.likes -= 1;
                    recipe.liked = false;
                } else {
                    recipe.likes += 1;
                    recipe.liked = true;
                }

                const topRecipe = this.topRecipes.find(recipe => recipe.id === recipeId);
                if (topRecipe) {
                    topRecipe.likes = recipe.likes;
                    topRecipe.liked = recipe.liked;
                }
            }
        },
        /* view recipe details method */
        onClickViewRecipe(recipeId) {
            axios({
                method: 'get',
                url: 'http://localhost/prueba01/public/api/recipes/recipe/' + recipeId
            })
                .then(
                    (response) => {

                        let items = response.data[0][0];
                        console.log(response.data);

                        let ingredients = response.data[1].map(ingredient => {
                            let ingredientString = ingredient.amount + ' ' + ingredient.measurement_unit + ' ' + ingredient.description;
                            return ingredientString;
                        });;

                        this.recipe = {
                            id: items.id,
                            name: items.name,
                            image: 'http://localhost/prueba01/public/storage/imgs/' + items.image,
                            category: items.category,
                            occasion: items.occasion,
                            level: items.level,
                            description: items.description,
                            preparation_time: items.preparation_time,
                            cooking_time: items.cooking_time,
                            total: items.total_time,
                            ingredients: ingredients,
                            instruction: items.preparation_instructions
                        };

                    }
                )
                .catch(
                    error => console.log(error)
                );
        },
        /* Returns the categories of the api */
        getRecipeCategories() {
            axios({
                method: 'get',
                url: 'http://localhost/prueba01/public/api/recipes/categories'
            })
                .then(
                    (response) => {
                        console.log(response.data);
                        let items = response.data;

                        items.forEach((element) => {
                            this.categories.push({ id: element.id, name: element.category });
                        });
                    }
                )
                .catch(
                    error => console.log(error)
                );
        },
        /* Returns the occasions of the api */
        getRecipeOccacions() {
            axios({
                method: 'get',
                url: 'http://localhost/prueba01/public/api/recipes/occasions'
            })
                .then(
                    (response) => {
                        console.log(response.data);
                        let items = response.data;
                        items.forEach((element) => {
                            this.occasion.push({ id: element.id, name: element.occasion });
                        });
                    }
                )
                .catch(
                    error => console.log(error)
                );
        },
        /* Returns the occasions of the api */
        getRecipeLevels() {
            axios({
                method: 'get',
                url: 'http://localhost/prueba01/public/api/recipes/levels'
            })
                .then(
                    (response) => {
                        console.log(response.data);
                        let items = response.data;
                        items.forEach((element) => {
                            this.levels.push({ id: element.id, name: element.level });
                        });
                    }
                )
                .catch(
                    error => console.log(error)
                );
        },
        /* Method to display all recipes */
        getAllRecipes() {
            axios({
                method: 'get',
                url: 'http://localhost/prueba01/public/api/recipes/all'
            })
                .then(
                    (response) => {

                        let items = response.data;
                        console.log(items);

                        this.totalRecipes = items.length;
                        this.recipes = [];

                        const route = "http://localhost/prueba01/public/storage/imgs/";
                        items.forEach(element => {
                            this.recipes.push({
                                id: element.id,
                                name: element.name,
                                image: route + element.image,
                                category: element.category,
                                occasion: element.occasion,
                                level: element.level,
                                likes: element.likes
                            });
                        });
                        // Copy the first 8 recipes to displayedRecipes
                        this.displayedRecipes = this.recipes.slice(0, 8);
                    }
                )
                .catch(
                    error => console.log(error)
                );
        },
        /* method to display top 10 recipes */
        getTopRecipes() {
            axios({
                method: 'get',
                url: 'http://localhost/prueba01/public/api/recipes/top10'
            })
                .then(
                    (response) => {

                        let items = response.data;
                        console.log(items);

                        this.topRecipes = [];

                        const route = "http://localhost/prueba01/public/storage/imgs/";
                        items.forEach(element => {
                            this.topRecipes.push({
                                id: element.id,
                                name: element.name,
                                category: element.category,
                                image: route + element.image,
                                occasion: element.occasion,
                                level: element.level,
                                likes: element.likes
                            })
                        })
                    }
                )
                .catch(
                    error => console.log(error)
                );
        },
        /* method to filter by name */
        searchRecipeByName(name) {

            this.name = name;
            if (this.name === '') {
                this.getAllRecipes();
            } else {
                axios({
                    method: 'get',
                    url: 'http://localhost/prueba01/public/api/recipes/searchbyname/' + name
                })
                    .then((response) => {
                        let items = response.data;
                        console.log(items);

                        const route = "http://localhost/prueba01/public/storage/imgs/";
                        this.totalRecipes = items.length;
                        this.recipes = [];

                        items.forEach((element) => {
                            this.recipes.push({
                                id: element.id,
                                name: element.name,
                                image: route + element.image,
                                category: element.category,
                                occasion: element.occasion,
                                level: element.level,
                                likes: element.likes
                            });
                        });

                        this.displayedRecipes = this.recipes.slice(0, 8);
                    })
                    .catch((error) => console.log(error));
            }
        },
        /* method to filter by category */
        filterRecipeByCategory(category) {
            if (category === '0') {
                this.getAllRecipes();
            } else {
                axios({
                    method: 'get',
                    url: 'http://localhost/prueba01/public/api/recipes/filterby/category/' + category
                })
                    .then((response) => {
                        let items = response.data;
                        console.log(items);

                        const route = "http://localhost/prueba01/public/storage/imgs/";

                        this.totalRecipes = items.length;
                        this.recipes = [];

                        items.forEach((element) => {
                            this.recipes.push({
                                id: element.id,
                                name: element.name,
                                image: route + element.image,
                                category: element.category,
                                occasion: element.occasion,
                                level: element.level,
                                likes: element.likes
                            });
                        });

                        this.displayedRecipes = this.recipes.slice(0, 8);
                    })
                    .catch((error) => console.log(error));
            }
        },
        /* method to filter by occasion */
        filterRecipeByOccasion(occasion) {
            if (occasion === '0') {
                this.getAllRecipes();
            } else {
                axios({
                    method: 'get',
                    url: 'http://localhost/prueba01/public/api/recipes/filterby/occasion/' + occasion
                })
                    .then((response) => {
                        let items = response.data;
                        console.log(items);

                        const route = "http://localhost/prueba01/public/storage/imgs/";

                        this.totalRecipes = items.length;
                        this.recipes = [];

                        items.forEach((element) => {
                            this.recipes.push({
                                id: element.id,
                                name: element.name,
                                image: route + element.image,
                                category: element.category,
                                occasion: element.occasion,
                                level: element.level,
                                likes: element.likes
                            });
                        });

                        this.displayedRecipes = this.recipes.slice(0, 8);
                    })
                    .catch((error) => console.log(error));
            }
        },
        /* method to filter by level */
        filterRecipeByLevel(level) {
            if (level === '0') {
                this.getAllRecipes();
            } else {
                axios({
                    method: 'get',
                    url: 'http://localhost/prueba01/public/api/recipes/filterby/level/' + level
                })
                    .then((response) => {
                        let items = response.data;
                        console.log(items);

                        const route = "http://localhost/prueba01/public/storage/imgs/";

                        this.totalRecipes = items.length;
                        this.recipes = [];

                        items.forEach((element) => {
                            this.recipes.push({
                                id: element.id,
                                name: element.name,
                                image: route + element.image,
                                category: element.category,
                                occasion: element.occasion,
                                level: element.level,
                                likes: element.likes
                            });
                        });

                        this.displayedRecipes = this.recipes.slice(0, 8);
                    })
                    .catch((error) => console.log(error));
            }
        },
        /* Method to display more recipes */
        loadMoreRecipes() {
            const startIndex = this.displayedRecipes.length;
            const endIndex = startIndex + 8;
            const newRecipes = this.recipes.slice(startIndex, endIndex);
            this.displayedRecipes = this.displayedRecipes.concat(newRecipes);
        }

    },

});

//init custom events for components
const emitter = mitt();
//global propety for custom events
app.config.globalProperties.$test = emitter;


