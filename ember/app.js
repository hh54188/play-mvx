App = Ember.Application.create({});

App.ApplicationAdapter = DS.FixtureAdapter;

App.Todo = DS.Model.extend({
    title: DS.attr()
})

App.IndexRoute = Ember.Route.extend({
    setupController: function(controller) {
        controller.set('content', ['red', 'yellow', 'blue']);
    }
});