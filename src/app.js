import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
      data: {
        todos : ["buy shopping", "Clean bathroom", "MOT the car"],
        newTodo: ""

        },
      methods: {
        addNewTodo: function (){
          this.todos.push(this.newTodo);
          this.newTodo = "";
        }
      }
  });
});
