const app = new Vue({
    el: '#app',
    data: {
        taskInput: '',
        tasks: []
    },
    created() {
        this.loadTasks()
    },
    methods: {
        async addTask(event) {
            event && event.preventDefault && event.preventDefault();
            this.tasks = (await axios.post('/api', { task: this.taskInput })).data
            this.taskInput = ''
        },
        async loadTasks(event) {
            event && event.preventDefault && event.preventDefault()
            this.tasks = (await axios.get('/api')).data
        },
        async deleteTasks(event) {
            event && event.preventDefault && event.preventDefault();
            this.tasks = (await axios.delete('/api')).data
        },
    }
})