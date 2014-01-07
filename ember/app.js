App = Ember.Application.create({});

App.ApplicationAdapter = DS.LSAdapter.extend();

App.Todo = DS.Model.extend({
	title: DS.attr("string")
})

/*
	The goal of routes is to query the model, from their model hook, 
	to make it available in the controller and in the template. 
	Routes can also be used to set properties in controllers,
*/
App.IndexRoute = Ember.Route.extend({
    setupController: function(controller) {
    	var todos = this.store.find('todo');
    	controller.set("content", todos);
    }
});

// At first, a controller gets a model from a route. T
App.TodoController = Ember.ObjectController.extend({
	actions: {
		remove: function () {
			var todo = this.get('model');

			todo.deleteRecord();
			todo.save();
		}
	}
})

App.IndexController = Ember.ArrayController.extend({

	actions: {
		create: function () {
			var title = this.get("title");

			var todo = this.store.createRecord('todo', {
				title: title
			});

			todo.save();
		}
	}
});