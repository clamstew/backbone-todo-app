(function() {
  var router = new Backbone.Router({
    routes: { 
      "todos": 'index'
      "todos/:id": 'show'
    },

    index: function() {

    }, 

    show: function(id) {

    }
  });

  // to use
  router.navigate("todos/1", {
    trigger: true
  });

  // pushState off
  Backbone.history.start();
  // if just this then hashtags
  Backbone.history.start({pushState: true});
})();

(function() {
  var TodoRouter = Backbone.Router.extend({
    routes: { "todos/:id": "show" },
    show: function() {
      this.todoList.focusOnTodoItem(id);
    },
  });
})();