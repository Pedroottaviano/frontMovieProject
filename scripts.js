/* import axios from 'axios'

const EmployeeManagerFrontApp = {
    data(){
        return {
            saludo: "hii",
            ,
            BASE_URL: "http://localhost:8080/employee",
            input_name: "",
            input_email: "",
            input_phone: "",
            input_jobTitle: "",
            input_imageUrl: "",
            saludo: "hi desde la logica!!"
        }
    },

    methods: {
        toggleShowAddForm: function() {
            console.log(showAddForm);
            showAddForm = !showAddForm;
        },
        addEmployee: function(){
            const addedEmployee = {
                name: input_name.value,
                email: input_email.value,
                phone: input_phone.value,
                jobTitle: input_jobTitle.value,
                imageUrl: input_imageUrl.value
            }
                axios
                    .post(BASE_URL + "/add", addedEmployee)
                    .then(response => {
                        console.log(response.data)
                    })
                    .catch(e=> console.log(e))
            },
            search: function() {
                console.log('Hola desde search!');
                axios
                    .get(BASE_URL + '/all')
                    .then( response => {
                        employees.value = response.data
                    })
                    .catch(e=> console.log(e))
            }, 
            updateEmployee: function(){
	            const article = {
                    id: 12, 
                    name: "DaleAgainUpdated",
                    email: "asdada@asdasAgain",
                    jobTitle: "de ahiAgain",
                    phone: "123131Again",
                    imageUrl: "asdada.pngAgain",
	            };
	            axios 
		            .put(BASE_URL + `/update/${employeeId}`, article)
            },
            deleteEmployee: function(id){
                const url = BASE_URL + `/delete/${id}`;
                axios
                    .delete(url)
                    .then(response => {
                        console.log(response.data)
                    })
                    .catch(e => console.log(e))
            }          
    }
}

*/
const BASE_URL = "http://localhost:8080/movies";

const MovieManagerFrontApp = {
    data(){
        return {
            movies: [],
            newMovie: {},
            showAddForm: false,
            showUpdateForm: false
        }
    }, 
    methods: {
        search: function() {
            axios
                .get(BASE_URL + "/all")
                .then( response => {
                    this.movies = response.data
                    console.log(BASE_URL + "/all")
                    console.log(response.data)
                    this.movies.forEach(movie => {
                        movie.active = false
                    });
                })
                .catch(e=> console.log(e))
        },
        toggleShowAddForm: function(){
            this.showAddForm = !this.showAddForm
        },
        toggleActive: function(item){
            item.active = !item.active;
        },
        addMovie: function(){
            axios
                .post(BASE_URL + "/add", this.newMovie)
                .then(response => {
                    console.log(response.data)
                })
                .catch(e=> console.log(e)) 
                this.showAddForm = !this.showAddForm                
        },
        deleteMovie: function(id){
            axios
                .delete(BASE_URL + `/delete/${id}`)
                .catch(e => console.log(e))
        }, updateMovie: function(){
            console.log(this.showUpdateForm);
            this.showUpdateForm = !this.showUpdateForm
        }
    }
}

Vue.createApp(MovieManagerFrontApp).mount('#app');