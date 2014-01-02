var CreateView = Backbone.View.extend({

    check: function () {
        if (this.$el.val().length === 0) return false;
        return true;
    }
});

var createView = new CreateView({
    el: $("#todo_create-input")
});