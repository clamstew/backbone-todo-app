(function() {
  window.TodoItem = Backbone.Model.extend({
    urlRoot: "/todos",
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
  // window.todoItem = new TodoItem({});
})();
  // TO LISTEN FOR AN EVENT ON A MODEL
  // todoItem.on('event-name', function() {
  //   alert('event-name happened!');
  // });
  // RUN THE EVENT
  // todoItem.trigger('event-name');

  // THE CHANGE EVENT
  // todoItem.on('change', doThing);

  // if you call .set() on your todoItem -- the change event is automatically triggered
  // todoItem.set({description: 'Get haircut'});
  // if want to call it without triggering the change event
  // todoItem.set({description: 'Get haircut'}, {silent: true});
  // if want to remove the event listener can call
  // todoItem.off('change', doThing);