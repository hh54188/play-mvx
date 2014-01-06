/*
    super simple todolist
    MVP
*/

var Todo = Backbone.Model.extend({

});

var Todos = Backbone.Collection.extend({
    model: Todo
});

var ItemView = Backbone.View.extend({
    tagName: "li",
    template: _.template($("#item-template").html()),
    render: function (container) {
        this.$el.html(this.template(this.model.toJSON()));
        container.append(this.$el);
    },
    events: {
        "click .delete": "_clear"
    },
    _clear: function () {
        this.$el.trigger("delete", this);
    }
});

var AppView = Backbone.View.extend({
    el: $("body"),
    events: {
        "click #create": "_create"
    },
    _create: function () {
        var data = {
            title: this.$("#input").val()
        };

        this.$el.trigger("create", data);
    }   
})

var Presenter = Backbone.View.extend({
    el: $("body"),
    initialize: function () {

        this.appView = new AppView({
            container: $("#list")
        });
        this.todos = new Todos;
        var _this = this;

        this.$el.on("create", function (e, attrs) {
            var model = new Todo(attrs);
            _this.todos.add(model);
            var itemView = new ItemView({
                model: model
            })
            itemView.render($("#list"));
        });

        this.$el.on("delete", function (e, view) {
            _this.todos.remove(view.model);
            view.remove();
        });        
    }
})

var p = new Presenter;