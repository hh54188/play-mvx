
function Todo (title) {
    this.title = title;
}

var ViewModel = function() {
    
    var _this = this;
    this.todos = ko.observableArray([new Todo("test1"), new Todo("test2")]);
    this.title = ko.observable();

    this.create = function () {
        var title = this.title().trim();
        if (title) {
            _this.todos.push(new Todo(title));
        }
    }

    this.remove = function (todo) {
        _this.todos.remove(todo);
    } 
};
 
ko.applyBindings(new ViewModel());
