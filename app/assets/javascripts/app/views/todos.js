(function() {
  window.TodoView = Backbone.View.extend({
    tagName: 'article',
    className: 'todo',
    events: {
      'click span': 'renderEdit',
      'change input[type="checkbox"]': 'toggleStatus',
      'click i.destroy': 'destroy',
      'blur input[type="text"]': 'saveAndRerender',
      'keypress input[type="text"]': 'enterToSaveAndReRender'
    },
    initialize: function() {
      this.model.on('change', this.render, this);
      this.model.on('destroy', this.remove, this);
      this.model.on('hide', this.remove, this);
    },
    toggleStatus: function() {
      this.model.toggleStatus();
    },
    template: _.template('<h3 class="<%= status %>">' + 
      '<input type=checkbox ' + 
      '<% if(status === "complete") print ("checked") %>/>' +
         '<span><%= description %></span>' +
         '<i class="fa fa-arrow-circle-right"></i>' + 
         '<i class="fa fa-minus-circle destroy"></i>' + 
         // '<a href="#" class="destroy">x</a>' + 
         '</h3>'),
    templateEdit: _.template('<h3 class="<%= status %>">' + 
      '<input type=text value="' +
      '<%= description %>' + 
      '" />' +
      '</h3>'
      ),
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },
    renderEdit: function() {
      this.$el.html(this.templateEdit(this.model.toJSON()));
      this.$el.find('input').focus();
    },
    saveAndRerender: function() {
      this.model.changeDesc(this.$el.find('input').val());
      this.render();
    },
    enterToSaveAndReRender: function(e) {
      if ( e.which === 13 ) {
        this.saveAndRerender();
      }
    },
    destroy: function() {
      // event.preventDefault();
      this.model.destroy();
    },
    remove: function() {
      this.$el.remove();
    }
  });
  // window.todoView = new TodoView({ model: todoItem });

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