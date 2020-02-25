import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
      data: {
        todos : [
          {title: "buy milk", priority: "low"},
          {title: "do something", priority: "low"},
          {title: "do something else", priority: "high"},
          {title: "do something not important", priority: "low"},
        ],
        newTodo: ""

        },
      methods: {
        addNewTodo: function (){
          this.todos.push({title:this.newTodo, priority:this.value});
          this.newTodo = "";
        },
        done: function(index){
          this.todos[index].priority = !this.todos[index].priority;
        }
      }
  });
});
