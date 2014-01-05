/*
    super simple todolist
    MVP
*/

var Todo = Backbone.Model.extend({

});

var Todos = Backbone.Collection.extend({
    model: Todo
});

var todos = new Todos();

var ItemView = Backbone.View.extend({
    tagName: "li",
    template: _.template($("#item-template").html()),
    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },
    initialize: function () {
        this.listenTo(todos, 'remove', this.remove);
    },
    events: {
        "click .delete": "clear"
    },
    clear: function () {
        todos.remove(this.model);
    }
});

var AppView = Backbone.View.extend({
    el: $("body"),
    initialize: function () {
        this.listenTo(todos, 'add', this.addOne);
    },
    addOne: function(todo) {
        var view = new ItemView({
            model: todo
        });
        this.$("#list").append(view.render().el);
    },    
    events: {
        "click #create": "create"
    },
    create: function () {
        todos.add({
            title: this.$("#input").val()
        });
    }
})

var app = new AppView();