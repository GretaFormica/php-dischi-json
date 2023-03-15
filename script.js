const app = Vue.createApp({

    data() { //metodo data

        return {
            
        }
    },

    methods: {

    },

    created() {
        axios
        .get("http://localhost:8888/esercizio/php-dischi-json/get-list.php")
        .then((response) => {
            console.log(response.data)
        })
    }
});

app.mount("#root");