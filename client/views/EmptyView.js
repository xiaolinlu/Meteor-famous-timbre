
EmptyView = function() {
    famous.core.View.apply(this, arguments);
}

EmptyView.prototype = Object.create(famous.core.View.prototype);
EmptyView.prototype.constructor = EmptyView;

EmptyView.DEFAULT_OPTIONS = {};
