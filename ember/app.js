App = Ember.Application.create({});

// App.ApplicationAdapter = DS.FixtureAdapter;

// App.Todo = Ember.Object.extend({
//     title: ""
// });

App.ApplicationAdapter = DS.LSAdapter.extend();

App.Todo = DS.Model.extend({
	title: DS.attr("string")
})

App.IndexRoute = Ember.Route.extend({
    setupController: function(controller) {
    	var todos = this.store.find('todo');
    	controller.set("content", todos);
    }
});

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
})