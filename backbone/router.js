var Router = Backbone.Router.extend({
    routes: {
        //CRUD
        "save": "save",
        "update/:id": "update",
        "delete/:id": "delete",
        "edit/:id": "edit",
        "check/:id": "check",
        "uncheck/:id": "uncheck",
        // filter
        "filter/completed": "filterByCompleted",
        "filter/uncompleted": "filterByUncompleted"
    },
    /*
        save这样连续的操作不应该用controller来处理
        因为当连续的保存时，url的地址是不会改变的"#save"
        这样会导致随后的相同操作无效
        而delete与edit不同，比如"#edit/xxx-xxx","#delete/xxx-xxx"

        有两个解决方法：
        1. 使用event handler
        2. 每一次操作后都重置url

        继续思考：
        url对应的应该是一个状态，而并非一瞬间的动作

        可以允许的状态：
        比如编辑状态: edit/:xxx-xxx
        过滤列表： filter/completed

        一个动作可否允许：
        check?
        save?
        uncheck?

        ASP.NET中是如何解决这个问题的？

    */
    save: function () {
        alert("SAVE!");
    },
    update: function () {

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

setTimeout(function () {
    router.navigate('save', { trigger: true });
    // router.trigger("route:save");
}, 1000 * 3);

Backbone.history.start();