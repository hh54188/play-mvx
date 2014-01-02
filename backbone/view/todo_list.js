
var ListView = Backbone.View.extend({
	el: $("#todo-list");
	initialize: function () {
		this.render();
	},
	render: function (data) {
        var tmpl = _.template(this.template);
 		return tmpl(data);
    }
});