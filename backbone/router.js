var Router = Backbone.Router.extend({
    routes: {
        //crud
        "save/:id": "save",
        "delete/:id": "delete",
        "edit/:id": "edit",
        "uncheck/:id": "uncheck",
        // filter
        "filter/completed": "filterByCompleted",
        "filter/uncompleted": "filterByUncompleted"
    }
})

var router = new Router();

router.on("route:delete", function (id) {
    if (!id) return;
});

router.on("route:edit", function (id) {
    if (!id) return;
});

router.on("route:save", function () {
    alert("SAVE!");
});

router.on("route:uncheck", function (id) {
    if (!id) return;
});

router.on("route:filterByCompleted", function () {

});

router.on("route:filterByUncompleted", function () {

});

Backbone.history.start();