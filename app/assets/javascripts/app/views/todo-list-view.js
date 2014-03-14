(function() {
  window.TodoListView = Backbone.View.extend({
    initialize: function() {
      this.collection.on('add', this.addOne, this);
      this.collection.on('reset', this.addAll, this);
    },
    render: function() {
      this.addAll();
    },
    addAll: function() {
      this.$el.html('');
      this.collection.forEach(this.addOne, this);
      return this;
    },
    addOne: function(todoItem) {
      var todoView = new TodoView({model: todoItem});
      this.$el.append(todoView.render().el);
    }
  });
  window.todoListView = new TodoListView({
    collection: todoList, 
    el: '.main'
  });
})();