(function() {
  // Make Underscore Templates for view
  var todoTemplateHtml = $('#templates .todo-item').html()
    , todoTemplate = _.template(todoTemplateHtml)
    , todoEditTemplateHtml = $('#templates .todo-item-edit').html()
    , todoEditTemplate = _.template(todoEditTemplateHtml)
  ;

  window.TodoView = Backbone.View.extend({
    tagName: 'article',
    className: 'todo',
    template: todoTemplate,
    templateEdit: todoEditTemplate,
    initialize: function() {
      this.model.on('change', this.render, this);
      this.model.on('destroy', this.remove, this);
      this.model.on('hide', this.remove, this);
    },
    events: {
      'click span': 'renderEdit',
      'change input[type="checkbox"]': 'toggleStatus',
      'click i.destroy': 'destroy',
      'blur input[type="text"]': 'saveAndRerender',
      'keypress input[type="text"]': 'enterToSaveAndReRender'
    },
    toggleStatus: function() {
      this.model.toggleStatus();
    },
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
      if ( e.which === 13 ) { this.saveAndRerender(); }
    },
    destroy: function() {
      this.model.destroy();
    },
    remove: function() {
      this.$el.remove();
    }
  });
  // window.todoView = new TodoView({ model: todoItem });
})();