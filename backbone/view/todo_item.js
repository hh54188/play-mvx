
var ItemView = Backbone.View.extend({
	tagName: "li",
	className: "list-group-item",
	template: $("#todo-item-template").html(),
	initialize: function () {
		this.render();
	},
	render: function (data) {
        var tmpl = _.template(this.template);
 		return tmpl(data);
    }
});