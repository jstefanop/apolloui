export default function (hashRate, unit = 'h', withUnit = true, precision = 2) {
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