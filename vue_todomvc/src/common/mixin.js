export const commonMethods = {
    methods: {
        handleCheck(id, e) {
            // this.checkTodo(id,e.target.checked)
            this.$emit("checkTodo", id, e.target.checked);
        },
        handleEdit(todo) {
            todo.isEdit = true;
        },
        handleBlur(todo, e) {
            todo.isEdit = false;
            this.$emit('editTodo', todo.id, e.target.value)

            // this.editTodo(todoA.id,e.target.value)
        },
        handleDelete(todo) {
            this.$emit('deleteTodo', todo.id)
            // this.deleteTodo(todoA.id)
        }
    },
}