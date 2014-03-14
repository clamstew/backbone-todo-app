(function() {
  window.TodoItem = Backbone.Model.extend({
    urlRoot: "/api/todos",
    defaults: {
      description: 'Empty todo ...',
      status: 'incomplete'
    },
    toggleStatus: function() {
      if(this.get('status') === 'incomplete'){
        this.set({'status': 'complete'});
      } else {
        this.set({'status': 'incomplete'});
      }
      this.save();
    },
    changeDesc: function(newTodoDesc) {
      this.set({description: newTodoDesc}).save();
    }
  });
})();