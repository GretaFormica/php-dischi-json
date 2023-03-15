const app = Vue.createApp({

    data() { //metodo data

        return {
            discs : []
            
        }
    },

    methods: {
        fetchDiscs() {
            axios
            .get("http://localhost:8888/esercizio/php-dischi-json/API/get-list.php")
            .then((response) => {
                console.log(response.data)
                this.discs = response.data
            })
        },

    },

    created() {
        axios
        .get("http://localhost:8888/esercizio/php-dischi-json/API/get-list.php")
        .then((response) => {
            console.log(response.data)
        })
    }
});

app.mount("#root");