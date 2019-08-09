Vue.component('todo-list', {
    data() {
        return {
            taskInput: "",
            tasks: [ "Read a book", "Seed a tree" ],
        }
    },
    props: ['title'],
    methods: {
        addTask(event) {
            event.preventDefault();
            this.tasks.push(this.taskInput)
            this.taskInput = ''
        }
    },
    template: `<form>
        <h1>Insert title here</h1>
        <label for="">New task: </label>
        <input type="text"
        v-model="taskInput" 
        @keydown.enter="addTask($event)">
        <ul v-for="task in tasks">
            <li>{{ task }}</li>
        </ul>
    </form>`,
})