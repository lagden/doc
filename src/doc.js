/* eslint curly: 0 */
function _numbers(c) {
	c = c.replace(/\D/g, '').split('')
	for (const [idx, value] of c.entries()) {
		c[idx] = Number(value)
	}

	return c
}

function isCnpj(c) {
	const b = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
	let i
	let n

	c = _numbers(c)

	if (c.length !== 14) {
		return false
	}

	for (i = 0, n = 0; i < 12; n += c[i] * b[++i]) ;
	if (c[12] !== (((n %= 11) < 2) ? 0 : 11 - n)) {
		return false
	}

	for (i = 0, n = 0; i <= 12; n += c[i] * b[i++]) ;
	if (c[13] !== (((n %= 11) < 2) ? 0 : 11 - n)) {
		return false
	}

	return true
}

function isCpf(c) {
	let s
	let n
	let i

	c = _numbers(c)

	if (c.length !== 11) {
		return false
	}

	for (s = 10, n = 0, i = 0; s >= 2; n += c[i++] * s--) ;
	if (c[9] !== (((n %= 11) < 2) ? 0 : 11 - n)) {
		return false
	}

	for (s = 11, n = 0, i = 0; s >= 2; n += c[i++] * s--) ;
	if (c[10] !== (((n %= 11) < 2) ? 0 : 11 - n)) {
		return false
	}

	return true
}

export {
	isCnpj,
	isCpf,
	_numbers as onlyNumber
}
