app.component('recipe-card', {
    props: {
        index: {
            type: Number
        },
        image: {
            type: String
        },
        name: {
            type: String,
            default: "default name"
        },
        category: {
            type: String,
            default: "default category"
        },
        ocasions: {
            type: String,
            default: "default description"
        },
        level: {
            type: String,
            default: "default level"
        },
        likes: {
            type: Number,
            default: 0
        }
    }
})