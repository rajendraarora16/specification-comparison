var Notify = (function () {
	function Notify(container) {
		this._$container = $(container);
	}

	Notify.prototype.show = function (text) {
		var interval,
			self = this;


		this._$container.html(text).fadeIn();
		interval = setTimeout(function(){
			self.hide();
		}, 4000);
	};

	Notify.prototype.hide = function () {
		this._$container.fadeOut();
	};

	return Notify;
})();