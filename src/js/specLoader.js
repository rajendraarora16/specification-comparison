var SpecLoader = (function () {
	function SpecLoader() {
		this.options = {
			url: '/load?url='
		};

		this.progressBar = new ProgressBar();
	}

	SpecLoader.prototype.get = function (urls, onSuccess, onError) {
		var self = this,
			requestPromises;


		this.progressBar.start();
		requestPromises = $.map(urls, function (url) {
			return self._makeRequest(url);
		});


		Q.all(requestPromises)
			.then(undefined, function (reason) {
				self.progressBar.stop();
				onError(reason);
			})
			.done(function (data) {
				if(!data){
					return;
				}
				self.progressBar.stop();
				onSuccess(data);
			});
	};


	SpecLoader.prototype._makeRequest = function (url) {
		var self = this,
			requestUrl = this.options.url + url;


		return Q.promise(function (resolve, reject) {
			$.get(requestUrl, function (response, status, xhr) {
				if (status === 'error') {
					reject('Error occured: ' + xhr.status + " " + xhr.statusText);
				}

				if (response) {
					resolve(response);
				} else {
					reject('No products found!');
				}
			});
		});
	};

	return SpecLoader;
})();