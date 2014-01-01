var Router = Backbone.Router.extend({
    routes: {
        //crud
        "save/:id": "save",
        "delete/:id": "delete",
        "edit/:id": "edit",
        "check/:id": "check",
        "uncheck/:id": "uncheck",
        // filter
        "filter/completed": "filterByCompleted",
        "filter/uncompleted": "filterByUncompleted"
    },
    save: function () {
       alert("SAVE!"); 
    },
    delete: function () {

    },
    edit: function () {

    },
    check: function () {

    },
    uncheck: function () {

    },
    filterByCompleted: function () {

    },
    filterByUncompleted: function () {
        
    }
})

var router = new Router();

Backbone.history.start();