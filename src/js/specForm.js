var SpecForm = (function () {
	function SpecForm(formContainer, tableContainer, options) {
		this.$formContainer = $(formContainer);
		this.$tableContainer = $(tableContainer);
		this._options = $.extend(true, {
			minFieldsCount: 2,
			maxFieldsCount: 5
		}, options);

		this._fieldsCount = 0;

		this._init()
			._initElements()
			._initEvents();

		this.specLoader = new SpecLoader();
		this.notify = new Notify('.alert-danger');
	}


	SpecForm.BUTTON_TEXT = {
		REGULAR: 'Compare Specification',
		IN_PROGRESS: 'Fetching ...'
	};

	SpecForm.prototype._init = function () {
		var i;

		for (i = 0; i < this._options.minFieldsCount; i++) {
			this._addField();
		}

		return this;
	};


	SpecForm.prototype._initElements = function () {
		this.$urlFields = this.$formContainer.find('._url-input');
		this.$btn = this.$formContainer.find('._btn-compare');
		this.$btnDemo = this.$formContainer.find('._btn-demo');
		this.$btnInc = this.$formContainer.find('.j-inc');
		this.$btnDec = this.$formContainer.find('.j-dec');
		this.$loader = $(".loader-fetch");

		return this;
	};

	SpecForm.prototype._initEvents = function () {
		var self = this;


		this.$btnDemo.on('click', function () {
			$('._url-input').val("https://www.lazada.sg/products/samsung-galaxy-s8-64gb-midnight-black-i106217842-s108237124.html");
		});

		this.$btn.on('click', function () {
			if (self._isButtonEnabled() && self._isValid()) {
				self._process();
			}
		});

		this.$formContainer
			.on('click', '.j-inc', function () {
				var $btn = $(this),
					isDisabled = $btn.attr('disabled');


				if (isDisabled) {
					return;
				}


				if (self._fieldsCount < self._options.maxFieldsCount) {
					self._addField();
				}

				self._checkIfControlEnabled();
			})
			.on('click', '.j-dec', function () {
				var $btn = $(this),
					isDisabled = $btn.attr('disabled');


				if (isDisabled) {
					return;
				}


				if (self._fieldsCount > self._options.minFieldsCount) {
					self._removeField();
				}

				self._checkIfControlEnabled();
			})
			.on('click', '.j-predefine', function () {
				self._predefineFields();
			});

		return this;
	};


	SpecForm.prototype._checkIfControlEnabled = function () {
		if (this._fieldsCount === this._options.minFieldsCount) {
			this.$btnDec.attr('disabled', 'disabled');
		} else {
			this.$btnDec.removeAttr('disabled');
		}

		if (this._fieldsCount === this._options.maxFieldsCount) {
			this.$btnInc.attr('disabled', 'disabled');
		} else {
			this.$btnInc.removeAttr('disabled');
		}

		return this;
	};


	SpecForm.prototype._isValid = function () {
		var isValid = true,
			message = '';


		this.$urlFields.each(function () {
			var $field = $(this),
				value = $.trim($field.val().toLowerCase());


			$field.removeClass('s-invalid');
			if (value.length === 0) {
				isValid = false;
				message = 'Product url field is empty.';

			}

			if (value.indexOf('https://www.lazada.sg') === -1) {
				isValid = false;
				message = 'Only https://www.lazada.sg are allowed';
			}

			if (isValid) {
				$field.removeClass('s-invalid');
			} else {
				$field.addClass('s-invalid');
			}
		});

		if (!isValid) {
			this.notify.show(message);
		}
		return isValid;
	};


	SpecForm.prototype._process = function () {
		var self = this,
			urls = $.map(this.$urlFields, function (field) {
				return $.trim($(field).val());
			});

		this._disableButton();
		this._removeTable();
		this.specLoader.get(urls, function (specTables) {
			self._renderTable(specTables);
			self._enableButton();
		}, function (reason) {
			self.notify.show(reason);
			self._enableButton();
		});
	};

	SpecForm.prototype._renderField = function () {
		var $html = $('<div class="_form_item">' +
				'<input class="_url-lbl _url-input" placeholder="Enter Lazada sg url '+(this._fieldsCount)+' here" type="text"/>' +
			'</div>');
		return $html;
	};


	SpecForm.prototype._addField = function () {
		var $lastField = this.$formContainer.find('._form_item:last'),
			$newField;


		this._fieldsCount++;
		$newField = this._renderField();

		if ($lastField.length > 0) {
			$newField.insertAfter($lastField);
		}
		else {
			this.$formContainer.prepend($newField);
		}

		this.$urlFields = this.$formContainer.find('._url-input');

		return this;
	};


	SpecForm.prototype._removeField = function () {
		this.$formContainer.find('._form_item:last').remove();
		this._fieldsCount--;
		this.$urlFields = this.$formContainer.find('._url-input');
	};


	SpecForm.prototype._predefineFields = function () {
		this.$urlFields.each(function (i) {
			if (SpecForm.URLS[i]) {
				$(this).val(SpecForm.URLS[i]);
			}
		});
	};


	SpecForm.prototype._renderTable = function (specs) {
		var allLabels = [],
			i, j,
			keys = {},
			$table,
			$thead,
			$row,
			$td,
			label;


		for (i = 0; i < specs.length; i++) {
			$.each(specs[i], function (key) {
				if (!keys.hasOwnProperty(key)) {
					keys[key] = '';
					allLabels.push(key);
				}
			});
		}

		$table = $('<table>');
		$thead = $('<thead>');
		$row = $('<tr>');
		$td = $('<th>');
		$row.append($td);
		for (i = 0; i < specs.length; i++) {
			$td = $('<th>');
			$td.html('Item ' + (i + 1));
			$row.append($td);
		}
		$thead.append($row);
		$table.append($thead);

		for (i = 0; i < allLabels.length; i++) {
			label = allLabels[i];
			$row = $('<tr class="b-table_row">');
			$td = $('<th>').html(label);
			$row.append($td);
			for (j = 0; j < specs.length; j++) {
				$td = $('<td>').html(specs[j].hasOwnProperty(label) ? specs[j][label] : '&mdash;');
				$row.append($td);
			}
			$table.append($row);
		}

		this.$tableContainer.html($table);
	};


	SpecForm.prototype._removeTable = function () {
		this.$tableContainer.empty();
	};


	SpecForm.prototype._disableButton = function () {
		this.$btn.text(SpecForm.BUTTON_TEXT.IN_PROGRESS);
		this.$loader.css("display", "block");
		this.$btn.attr('disabled', 'disabled');
	};


	SpecForm.prototype._enableButton = function () {
		this.$btn.text(SpecForm.BUTTON_TEXT.REGULAR);
		this.$loader.css("display", "none");
		this.$btn.removeAttr('disabled');
	};


	SpecForm.prototype._isButtonEnabled = function () {
		return !this.$btn.attr('disabled');
	};


	return SpecForm;
})();