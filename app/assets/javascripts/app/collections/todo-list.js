(function() {
  window.TodoList = Backbone.Collection.extend({
    url: '/todos',
    model: TodoItem,
    initialize: function() {
      this.on('remove', this.hideModel);
    },
    hideModel: function(model) {
      model.trigger('hide');
    }
  });

  window.todoList = new TodoList();
  todoList.fetch();
  todoList.on('add', function(todoItem) {
    todoItem.save();
    // called when model is added
    // this.trigger('change'); <= something like this??
  }).on('remove', function(todoItem) {
    // called when model is removed
  }).on('reset', function(todoItem) {
    // called when collection is reset or fetched
  }).filter(function(todoItem){
    // return todoItem.get('status') === "incomplete";
  });
})();