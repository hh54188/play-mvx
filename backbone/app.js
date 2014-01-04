/*
    super simple todolist
    MVP
*/

var Todo = Backbone.Model.extend({

});

var Todos = Backbone.Collection.extend({
    model: Todo
});

var ListView = Backbone.View.extend({
    // Render option
    el: $("#list"),
    tagName: "li",
    template: _.template($("#item-template").html()),
    _render: function (data) {
        var renderResult = this.template(data);
        return renderResult;
    },    
    // Event bind
    events: {
        "click .delete": "_removeItemView"
    },
    _removeItemView: function () {
        $(document).trigger("remove.backbone");
    },
    // Public API
    createItemView: function (data) {
        var view = this._render(data);
        this.$el.append(view);
    },
    removeItemView: function () {

    }
});

var todos = new Todos();
var list = new ListView();

var Presenter = Backbone.View.extend({
    el: $(document),
    bindEvent: function () {

        this.$el.on("remove.backbone", function () {
            alert("REMOVE");
        });

        this.$el.on("create.backbone", function (e, customData) {
            var data = {
                title: customData.title
            }
            todos.add(data);
            list.createItemView(data);
        })
    },
    initialize: function () {
        this.bindEvent();
    }
});



// Bootstrap
var p = new Presenter();


$("#create").click(function () {
    var title = $("#title").val();
    if (!title) return;
    $(document).trigger("create.backbone", {
        title: title
    });
})