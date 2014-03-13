(function() {
  var TodoInputView = Backbone.View.extend({
    events: {
      "click #submit": "addOne",
      "keypress input": "enterAddOne",
      "blur input": "hideAlerts"
    },
    addOne: function(e) {
      var description = this.$el.children('input[type="text"]').val();
      if (description !== "") {
        var todoItem = new TodoItem({description: description});
        this.collection.add(todoItem);
        // clear the input
        this.$el.children('input[type="text"]').val('');
      } else {
        this.$el.find('span.label').show();
      }
    },
    enterAddOne: function(e) {
      if ( e.which === 13 ) {
        this.addOne(e);
      }
    },
    hideAlerts: function() {
      this.$el.find('span.label').hide();
    }
  });
  window.todoInputView = new TodoInputView({
    collection: todoList,
    el: '#add-todo'
  });
})();