'use strict'

import test from 'ava'
import {
	isCnpj,
	isCpf,
	onlyNumber
} from '../src/doc.js'

test('isCpf', t => {
	t.true(isCpf('090.885.670-93'))
})

test('isCpf length', t => {
	t.false(isCpf('1090.885.670-93'))
})

test('isCpf wrong A', t => {
	t.false(isCpf('090.885.670-94'))
})

test('isCpf wrong B', t => {
	t.false(isCpf('091.885.670-93'))
})

test('isCnpj', t => {
	t.true(isCnpj('29.249.091/0001-85'))
})

test('isCnpj length', t => {
	t.false(isCnpj('129.249.091/0001-85'))
})

test('isCnpj wrong A', t => {
	t.false(isCnpj('30.249.091/0001-85'))
})

test('isCnpj wrong B', t => {
	t.false(isCnpj('29.249.091/0001-86'))
})

test('onlyNumber', t => {
	t.is(onlyNumber('29.249.091/0001-85').join(''), '29249091000185')
})
