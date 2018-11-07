export function displayHashrate (hashRate, unit = 'h', withUnit = true, precision = 2) {
	var rate = 1000;
	precision = (typeof precision === 'number') ? precision : 2;
	switch (unit) {
		case 'h': rate = 1;
		break;
		case 'kh': rate = 1000;
		break;
		case 'mh': rate = 1000000;
		break;
		case 'gh': rate = 1000000000;
		break;
		case 'th': rate = 1000000000000;
		break;
		default: rate = 1;
	}

	hashRate = (hashRate * rate) || 0;

	if (hashRate > 900000000000) {
		return (withUnit) ? parseFloat(hashRate / 1000000000000).toFixed(precision) + ' Th/s' : parseFloat(parseFloat(hashRate / 1000000000000).toFixed(precision));
	} else if (hashRate > 900000000) {
		return (withUnit) ? parseFloat(hashRate / 1000000000).toFixed(precision) + ' Gh/s' : parseFloat(parseFloat(hashRate / 1000000000).toFixed(precision));
	} else if (hashRate > 900000) {
		return (withUnit) ? parseFloat(hashRate / 1000000).toFixed(precision) + ' Mh/s' : parseFloat(parseFloat(hashRate / 1000000).toFixed(precision));
	} else if (hashRate > 900) {
		return (withUnit) ? parseFloat(hashRate / 1000).toFixed(precision) + ' Kh/s' : parseFloat(parseFloat(hashRate / 1000).toFixed(precision));
	} else {
		return (withUnit) ? hashRate.toFixed(precision) + ' H/s' : hashRate.toFixed(precision);
	}
};

export function bytesToSize (bytes) {
	var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
	if (bytes === 0) return '0 Byte';
	var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
	return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
};

export function percentColor (percent, inverse = false) {
	if (inverse) {
		if (percent && percent < 25) return 'danger'
		else if (percent >= 25 && percent < 50) return 'warning'
		else if (percent >= 50 && percent < 75) return 'primary'
		else if (percent >= 75) return 'success'	
	}

	if (percent && percent < 25) return 'primary'
	else if (percent >= 25 && percent < 50) return 'success'
	else if (percent >= 50 && percent < 75) return 'warning'
	else if (percent >= 75) return 'danger'
};

export function minerModeIcon (mode) {
	switch (mode) {
		case 'eco': return 'fa-leaf';
		case 'turbo': return 'fa-rocket';
		case 'custom': return 'fa-diagnoses';
		default: return 'fa-leaf';
	}
};