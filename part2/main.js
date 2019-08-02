const app = new Vue({
    el: '#app',
    data: {
        taskInput: "",
        tasks: [
            "Read a book",
            "Seed a tree"
        ]
    },
    methods: {
        addTask(event, task) {
            event.preventDefault();
            // Add your adding logic here
        }
    }
})