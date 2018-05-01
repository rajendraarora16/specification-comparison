var ProgressBar = (function () {
	function ProgressBar() {
		this.pb = new progressJs();
		this._interval = null;
	}


	ProgressBar.prototype.start = function () {
		var self = this;


		this.pb.start();
		this._interval = setInterval(function () {
			self.pb.increase(Math.trunc(Math.random()));
		}, 100);
	};


	ProgressBar.prototype.stop = function () {
		this.pb.end();
		clearInterval(this._interval);
	};

	return ProgressBar;
})();