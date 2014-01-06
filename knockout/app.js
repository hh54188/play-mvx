
function Todo (title) {
    this.title = title;
}

var ViewModel = function() {
    
    var _this = this;
    this.todos = ko.observableArray([new Todo("test1"), new Todo("test2")]);

    this.create = function () {
        // _this.todos.push(new Todo(_this.title));
        console.log(title);
    }

    this.remove = function (todo) {
        _this.todos.remove(todo);
    } 
};
 
ko.applyBindings(new ViewModel());
