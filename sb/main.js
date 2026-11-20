(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}




var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log = F2(function(tag, value)
{
	return value;
});

var _Debug_log_UNUSED = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString(value)
{
	return '<internals>';
}

function _Debug_toString_UNUSED(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash_UNUSED(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.bj.at === region.bK.at)
	{
		return 'on line ' + region.bj.at;
	}
	return 'on lines ' + region.bj.at + ' through ' + region.bK.at;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**_UNUSED/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**_UNUSED/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**/
	if (typeof x.$ === 'undefined')
	//*/
	/**_UNUSED/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0 = 0;
var _Utils_Tuple0_UNUSED = { $: '#0' };

function _Utils_Tuple2(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2_UNUSED(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3_UNUSED(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr(c) { return c; }
function _Utils_chr_UNUSED(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil = { $: 0 };
var _List_Nil_UNUSED = { $: '[]' };

function _List_Cons(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons_UNUSED(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return !isNaN(word)
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**_UNUSED/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap_UNUSED(value) { return { $: 0, a: value }; }
function _Json_unwrap_UNUSED(value) { return value.a; }

function _Json_wrap(value) { return value; }
function _Json_unwrap(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.$7,
		impl.ep,
		impl.ee,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**_UNUSED/, _Json_errorToString(result.a) /**/);
	var managers = {};
	var initPair = init(result.a);
	var model = initPair.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		var pair = A2(update, msg, model);
		stepper(model = pair.a, viewMetadata);
		_Platform_enqueueEffects(managers, pair.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, initPair.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		u: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**/
	var node = args['node'];
	//*/
	/**_UNUSED/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS
//
// For some reason, tabs can appear in href protocols and it still works.
// So '\tjava\tSCRIPT:alert("!!!")' and 'javascript:alert("!!!")' are the same
// in practice. That is why _VirtualDom_RE_js and _VirtualDom_RE_js_html look
// so freaky.
//
// Pulling the regular expressions out to the top level gives a slight speed
// boost in small benchmarks (4-10%) but hoisting values to reduce allocation
// can be unpredictable in large programs where JIT may have a harder time with
// functions are not fully self-contained. The benefit is more that the js and
// js_html ones are so weird that I prefer to see them near each other.


var _VirtualDom_RE_script = /^script$/i;
var _VirtualDom_RE_on_formAction = /^(on|formAction$)/i;
var _VirtualDom_RE_js = /^\s*j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:/i;
var _VirtualDom_RE_js_html = /^\s*(j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:|d\s*a\s*t\s*a\s*:\s*t\s*e\s*x\s*t\s*\/\s*h\s*t\s*m\s*l\s*(,|;))/i;


function _VirtualDom_noScript(tag)
{
	return _VirtualDom_RE_script.test(tag) ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return _VirtualDom_RE_on_formAction.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return _VirtualDom_RE_js.test(value)
		? /**/''//*//**_UNUSED/'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'//*/
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return _VirtualDom_RE_js_html.test(value)
		? /**/''//*//**_UNUSED/'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'//*/
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlJson(value)
{
	return (typeof _Json_unwrap(value) === 'string' && _VirtualDom_RE_js_html.test(_Json_unwrap(value)))
		? _Json_wrap(
			/**/''//*//**_UNUSED/'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'//*/
		) : value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2($elm$json$Json$Decode$map, func, handler.a)
				:
			A3($elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				$elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		ad: func(record.ad),
		ai: record.ai,
		af: record.af
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!$elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.ad;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.ai;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.af) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.$7,
		impl.ep,
		impl.ee,
		function(sendToApp, initialModel) {
			var view = impl.eq;
			/**/
			var domNode = args['node'];
			//*/
			/**_UNUSED/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.$7,
		impl.ep,
		impl.ee,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.bg && impl.bg(sendToApp)
			var view = impl.eq;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.cX);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.ek) && (_VirtualDom_doc.title = title = doc.ek);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.dL;
	var onUrlRequest = impl.dM;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		bg: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = $elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.ci === next.ci
							&& curr.bT === next.bT
							&& curr.ce.a === next.ce.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		$7: function(flags)
		{
			return A3(impl.$7, flags, _Browser_getUrl(), key);
		},
		eq: impl.eq,
		ep: impl.ep,
		ee: impl.ee
	});
}

function _Browser_getUrl()
{
	return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { dk: 'hidden', c$: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { dk: 'mozHidden', c$: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { dk: 'msHidden', c$: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { dk: 'webkitHidden', c$: 'webkitvisibilitychange' }
		: { dk: 'hidden', c$: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		ct: _Browser_getScene(),
		bn: {
			eu: _Browser_window.pageXOffset,
			ev: _Browser_window.pageYOffset,
			bp: _Browser_doc.documentElement.clientWidth,
			a1: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		bp: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		a1: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			ct: {
				bp: node.scrollWidth,
				a1: node.scrollHeight
			},
			bn: {
				eu: node.scrollLeft,
				ev: node.scrollTop,
				bp: node.clientWidth,
				a1: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			ct: _Browser_getScene(),
			bn: {
				eu: x,
				ev: y,
				bp: _Browser_doc.documentElement.clientWidth,
				a1: _Browser_doc.documentElement.clientHeight
			},
			r: {
				eu: x + rect.left,
				ev: y + rect.top,
				bp: rect.width,
				a1: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}



function _Time_now(millisToPosix)
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(millisToPosix(Date.now())));
	});
}

var _Time_setInterval = F2(function(interval, task)
{
	return _Scheduler_binding(function(callback)
	{
		var id = setInterval(function() { _Scheduler_rawSpawn(task); }, interval);
		return function() { clearInterval(id); };
	});
});

function _Time_here()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(
			A2($elm$time$Time$customZone, -(new Date().getTimezoneOffset()), _List_Nil)
		));
	});
}


function _Time_getZoneName()
{
	return _Scheduler_binding(function(callback)
	{
		try
		{
			var name = $elm$time$Time$Name(Intl.DateTimeFormat().resolvedOptions().timeZone);
		}
		catch (e)
		{
			var name = $elm$time$Time$Offset(new Date().getTimezoneOffset());
		}
		callback(_Scheduler_succeed(name));
	});
}



var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});



// DECODER

var _File_decoder = _Json_decodePrim(function(value) {
	// NOTE: checks if `File` exists in case this is run on node
	return (typeof File !== 'undefined' && value instanceof File)
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FILE', value);
});


// METADATA

function _File_name(file) { return file.name; }
function _File_mime(file) { return file.type; }
function _File_size(file) { return file.size; }

function _File_lastModified(file)
{
	return $elm$time$Time$millisToPosix(file.lastModified);
}


// DOWNLOAD

var _File_downloadNode;

function _File_getDownloadNode()
{
	return _File_downloadNode || (_File_downloadNode = document.createElement('a'));
}

var _File_download = F3(function(name, mime, content)
{
	return _Scheduler_binding(function(callback)
	{
		var blob = new Blob([content], {type: mime});

		// for IE10+
		if (navigator.msSaveOrOpenBlob)
		{
			navigator.msSaveOrOpenBlob(blob, name);
			return;
		}

		// for HTML5
		var node = _File_getDownloadNode();
		var objectUrl = URL.createObjectURL(blob);
		node.href = objectUrl;
		node.download = name;
		_File_click(node);
		URL.revokeObjectURL(objectUrl);
	});
});

function _File_downloadUrl(href)
{
	return _Scheduler_binding(function(callback)
	{
		var node = _File_getDownloadNode();
		node.href = href;
		node.download = '';
		node.origin === location.origin || (node.target = '_blank');
		_File_click(node);
	});
}


// IE COMPATIBILITY

function _File_makeBytesSafeForInternetExplorer(bytes)
{
	// only needed by IE10 and IE11 to fix https://github.com/elm/file/issues/10
	// all other browsers can just run `new Blob([bytes])` directly with no problem
	//
	return new Uint8Array(bytes.buffer, bytes.byteOffset, bytes.byteLength);
}

function _File_click(node)
{
	// only needed by IE10 and IE11 to fix https://github.com/elm/file/issues/11
	// all other browsers have MouseEvent and do not need this conditional stuff
	//
	if (typeof MouseEvent === 'function')
	{
		node.dispatchEvent(new MouseEvent('click'));
	}
	else
	{
		var event = document.createEvent('MouseEvents');
		event.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		document.body.appendChild(node);
		node.dispatchEvent(event);
		document.body.removeChild(node);
	}
}


// UPLOAD

var _File_node;

function _File_uploadOne(mimes)
{
	return _Scheduler_binding(function(callback)
	{
		_File_node = document.createElement('input');
		_File_node.type = 'file';
		_File_node.accept = A2($elm$core$String$join, ',', mimes);
		_File_node.addEventListener('change', function(event)
		{
			callback(_Scheduler_succeed(event.target.files[0]));
		});
		_File_click(_File_node);
	});
}

function _File_uploadOneOrMore(mimes)
{
	return _Scheduler_binding(function(callback)
	{
		_File_node = document.createElement('input');
		_File_node.type = 'file';
		_File_node.multiple = true;
		_File_node.accept = A2($elm$core$String$join, ',', mimes);
		_File_node.addEventListener('change', function(event)
		{
			var elmFiles = _List_fromArray(event.target.files);
			callback(_Scheduler_succeed(_Utils_Tuple2(elmFiles.a, elmFiles.b)));
		});
		_File_click(_File_node);
	});
}


// CONTENT

function _File_toString(blob)
{
	return _Scheduler_binding(function(callback)
	{
		var reader = new FileReader();
		reader.addEventListener('loadend', function() {
			callback(_Scheduler_succeed(reader.result));
		});
		reader.readAsText(blob);
		return function() { reader.abort(); };
	});
}

function _File_toBytes(blob)
{
	return _Scheduler_binding(function(callback)
	{
		var reader = new FileReader();
		reader.addEventListener('loadend', function() {
			callback(_Scheduler_succeed(new DataView(reader.result)));
		});
		reader.readAsArrayBuffer(blob);
		return function() { reader.abort(); };
	});
}

function _File_toUrl(blob)
{
	return _Scheduler_binding(function(callback)
	{
		var reader = new FileReader();
		reader.addEventListener('loadend', function() {
			callback(_Scheduler_succeed(reader.result));
		});
		reader.readAsDataURL(blob);
		return function() { reader.abort(); };
	});
}





// STRINGS


var _Parser_isSubString = F5(function(smallString, offset, row, col, bigString)
{
	var smallLength = smallString.length;
	var isGood = offset + smallLength <= bigString.length;

	for (var i = 0; isGood && i < smallLength; )
	{
		var code = bigString.charCodeAt(offset);
		isGood =
			smallString[i++] === bigString[offset++]
			&& (
				code === 0x000A /* \n */
					? ( row++, col=1 )
					: ( col++, (code & 0xF800) === 0xD800 ? smallString[i++] === bigString[offset++] : 1 )
			)
	}

	return _Utils_Tuple3(isGood ? offset : -1, row, col);
});



// CHARS


var _Parser_isSubChar = F3(function(predicate, offset, string)
{
	return (
		string.length <= offset
			? -1
			:
		(string.charCodeAt(offset) & 0xF800) === 0xD800
			? (predicate(_Utils_chr(string.substr(offset, 2))) ? offset + 2 : -1)
			:
		(predicate(_Utils_chr(string[offset]))
			? ((string[offset] === '\n') ? -2 : (offset + 1))
			: -1
		)
	);
});


var _Parser_isAsciiCode = F3(function(code, offset, string)
{
	return string.charCodeAt(offset) === code;
});



// NUMBERS


var _Parser_chompBase10 = F2(function(offset, string)
{
	for (; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (code < 0x30 || 0x39 < code)
		{
			return offset;
		}
	}
	return offset;
});


var _Parser_consumeBase = F3(function(base, offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var digit = string.charCodeAt(offset) - 0x30;
		if (digit < 0 || base <= digit) break;
		total = base * total + digit;
	}
	return _Utils_Tuple2(offset, total);
});


var _Parser_consumeBase16 = F2(function(offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (0x30 <= code && code <= 0x39)
		{
			total = 16 * total + code - 0x30;
		}
		else if (0x41 <= code && code <= 0x46)
		{
			total = 16 * total + code - 55;
		}
		else if (0x61 <= code && code <= 0x66)
		{
			total = 16 * total + code - 87;
		}
		else
		{
			break;
		}
	}
	return _Utils_Tuple2(offset, total);
});



// FIND STRING


var _Parser_findSubString = F5(function(smallString, offset, row, col, bigString)
{
	var newOffset = bigString.indexOf(smallString, offset);
	var target = newOffset < 0 ? bigString.length : newOffset + smallString.length;

	while (offset < target)
	{
		var code = bigString.charCodeAt(offset++);
		code === 0x000A /* \n */
			? ( col=1, row++ )
			: ( col++, (code & 0xF800) === 0xD800 && offset++ )
	}

	return _Utils_Tuple3(newOffset, row, col);
});
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (!node.$) {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === -2) {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$EQ = 1;
var $elm$core$Basics$GT = 2;
var $elm$core$Basics$LT = 0;
var $elm$core$Result$Err = function (a) {
	return {$: 1, a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 0, a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 2, a: a};
};
var $elm$core$Basics$False = 1;
var $elm$core$Basics$add = _Basics_add;
var $elm$core$Maybe$Just = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Maybe$Nothing = {$: 1};
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$append = _Utils_append;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 0:
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 1) {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 1:
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 2:
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 0, a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 1, a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.j) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.n),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.n);
		} else {
			var treeLen = builder.j * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.o) : builder.o;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.j);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.n) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.n);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{o: nodeList, j: (len / $elm$core$Array$branchFactor) | 0, n: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = 0;
var $elm$core$Result$isOk = function (result) {
	if (!result.$) {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $elm$json$Json$Decode$bool = _Json_decodeBool;
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 0:
			return 0;
		case 1:
			return 1;
		case 2:
			return 2;
		default:
			return 3;
	}
};
var $elm$browser$Browser$External = function (a) {
	return {$: 1, a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$browser$Browser$Dom$NotFound = $elm$core$Basics$identity;
var $elm$url$Url$Http = 0;
var $elm$url$Url$Https = 1;
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {bO: fragment, bT: host, cc: path, ce: port_, ci: protocol, cj: query};
	});
var $elm$core$String$contains = _String_contains;
var $elm$core$String$length = _String_length;
var $elm$core$String$slice = _String_slice;
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$indexes = _String_indexes;
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$String$toInt = _String_toInt;
var $elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, '@', str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, ':', str);
			if (!_v0.b) {
				return $elm$core$Maybe$Just(
					A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_v0.b.b) {
					var i = _v0.a;
					var _v1 = $elm$core$String$toInt(
						A2($elm$core$String$dropLeft, i + 1, str));
					if (_v1.$ === 1) {
						return $elm$core$Maybe$Nothing;
					} else {
						var port_ = _v1;
						return $elm$core$Maybe$Just(
							A6(
								$elm$url$Url$Url,
								protocol,
								A2($elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		}
	});
var $elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '/', str);
			if (!_v0.b) {
				return A5($elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _v0.a;
				return A5(
					$elm$url$Url$chompBeforePath,
					protocol,
					A2($elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '?', str);
			if (!_v0.b) {
				return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _v0.a;
				return A4(
					$elm$url$Url$chompBeforeQuery,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '#', str);
			if (!_v0.b) {
				return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
			} else {
				var i = _v0.a;
				return A3(
					$elm$url$Url$chompBeforeFragment,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$core$String$startsWith = _String_startsWith;
var $elm$url$Url$fromString = function (str) {
	return A2($elm$core$String$startsWith, 'http://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		0,
		A2($elm$core$String$dropLeft, 7, str)) : (A2($elm$core$String$startsWith, 'https://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		1,
		A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing);
};
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $elm$core$Task$Perform = $elm$core$Basics$identity;
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(0);
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return 0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0;
		return A2($elm$core$Task$map, tagger, task);
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			A2($elm$core$Task$map, toMessage, task));
	});
var $elm$browser$Browser$document = _Browser_document;
var $elm$json$Json$Decode$field = _Json_decodeField;
var $author$project$Types$AppEvent = function (a) {
	return {$: 5, a: a};
};
var $author$project$Types$GotTimeZone = function (a) {
	return {$: 0, a: a};
};
var $author$project$Types$NoDialog = {$: 0};
var $author$project$Types$Tick = function (a) {
	return {$: 1, a: a};
};
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $author$project$Data$WorkspaceData$MemoWorkspace = {$: 0};
var $author$project$Data$WorkspaceData$ProjectId = function (a) {
	return {$: 1, a: a};
};
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === -2) {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1) {
					case 0:
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 1:
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $elm$core$Dict$member = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$get, key, dict);
		if (!_v0.$) {
			return true;
		} else {
			return false;
		}
	});
var $elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var $elm$core$List$member = F2(
	function (x, xs) {
		return A2(
			$elm$core$List$any,
			function (a) {
				return _Utils_eq(a, x);
			},
			xs);
	});
var $elm$core$Basics$not = _Basics_not;
var $elm_community$list_extra$List$Extra$uniqueHelp = F4(
	function (f, existing, remaining, accumulator) {
		uniqueHelp:
		while (true) {
			if (!remaining.b) {
				return $elm$core$List$reverse(accumulator);
			} else {
				var first = remaining.a;
				var rest = remaining.b;
				var computedFirst = f(first);
				if (A2($elm$core$List$member, computedFirst, existing)) {
					var $temp$f = f,
						$temp$existing = existing,
						$temp$remaining = rest,
						$temp$accumulator = accumulator;
					f = $temp$f;
					existing = $temp$existing;
					remaining = $temp$remaining;
					accumulator = $temp$accumulator;
					continue uniqueHelp;
				} else {
					var $temp$f = f,
						$temp$existing = A2($elm$core$List$cons, computedFirst, existing),
						$temp$remaining = rest,
						$temp$accumulator = A2($elm$core$List$cons, first, accumulator);
					f = $temp$f;
					existing = $temp$existing;
					remaining = $temp$remaining;
					accumulator = $temp$accumulator;
					continue uniqueHelp;
				}
			}
		}
	});
var $elm_community$list_extra$List$Extra$unique = function (list) {
	return A4($elm_community$list_extra$List$Extra$uniqueHelp, $elm$core$Basics$identity, _List_Nil, list, _List_Nil);
};
var $author$project$Data$BackupStorage$buildAppData = F7(
	function (memo, projects, rawProjectOrder, rawActiveWorkspace, workSchedules, handledSlots, styleMods) {
		var validOrder = $elm_community$list_extra$List$Extra$unique(
			A2(
				$elm$core$List$filter,
				function (pid) {
					return A2($elm$core$Dict$member, pid, projects);
				},
				rawProjectOrder));
		var normalizedActive = function () {
			if (!rawActiveWorkspace.$) {
				return $author$project$Data$WorkspaceData$MemoWorkspace;
			} else {
				var pid = rawActiveWorkspace.a;
				return A2($elm$core$Dict$member, pid, projects) ? $author$project$Data$WorkspaceData$ProjectId(pid) : $author$project$Data$WorkspaceData$MemoWorkspace;
			}
		}();
		var existingKeys = $elm$core$Dict$keys(projects);
		var missingKeys = A2(
			$elm$core$List$filter,
			function (pid) {
				return !A2($elm$core$List$member, pid, validOrder);
			},
			existingKeys);
		return {
			aB: normalizedActive,
			aH: handledSlots,
			aK: memo,
			aM: _Utils_ap(validOrder, missingKeys),
			aN: projects,
			aS: styleMods,
			aW: workSchedules
		};
	});
var $author$project$Data$StyleMod$CustomCssMod = function (a) {
	return {$: 1, a: a};
};
var $author$project$Data$StyleMod$TokenJsonMod = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Dict$RBEmpty_elm_builtin = {$: -2};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $elm$core$Dict$Black = 1;
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: -1, a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = 0;
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === -1) && (!right.a)) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === -1) && (!left.a)) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					0,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, 1, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === -1) && (!left.a)) && (left.d.$ === -1)) && (!left.d.a)) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					0,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 1, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === -2) {
			return A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1) {
				case 0:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 1:
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === -1) && (!_v0.a)) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$fromList = function (assocs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, dict) {
				var key = _v0.a;
				var value = _v0.b;
				return A3($elm$core$Dict$insert, key, value, dict);
			}),
		$elm$core$Dict$empty,
		assocs);
};
var $elm$json$Json$Decode$keyValuePairs = _Json_decodeKeyValuePairs;
var $elm$json$Json$Decode$dict = function (decoder) {
	return A2(
		$elm$json$Json$Decode$map,
		$elm$core$Dict$fromList,
		$elm$json$Json$Decode$keyValuePairs(decoder));
};
var $elm$json$Json$Decode$fail = _Json_fail;
var $elm$json$Json$Decode$list = _Json_decodeList;
var $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom = $elm$json$Json$Decode$map2($elm$core$Basics$apR);
var $elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
	});
var $elm$json$Json$Decode$decodeValue = _Json_run;
var $elm$json$Json$Decode$null = _Json_decodeNull;
var $elm$json$Json$Decode$oneOf = _Json_oneOf;
var $elm$json$Json$Decode$value = _Json_decodeValue;
var $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optionalDecoder = F3(
	function (path, valDecoder, fallback) {
		var nullOr = function (decoder) {
			return $elm$json$Json$Decode$oneOf(
				_List_fromArray(
					[
						decoder,
						$elm$json$Json$Decode$null(fallback)
					]));
		};
		var handleResult = function (input) {
			var _v0 = A2(
				$elm$json$Json$Decode$decodeValue,
				A2($elm$json$Json$Decode$at, path, $elm$json$Json$Decode$value),
				input);
			if (!_v0.$) {
				var rawValue = _v0.a;
				var _v1 = A2(
					$elm$json$Json$Decode$decodeValue,
					nullOr(valDecoder),
					rawValue);
				if (!_v1.$) {
					var finalResult = _v1.a;
					return $elm$json$Json$Decode$succeed(finalResult);
				} else {
					return A2(
						$elm$json$Json$Decode$at,
						path,
						nullOr(valDecoder));
				}
			} else {
				return $elm$json$Json$Decode$succeed(fallback);
			}
		};
		return A2($elm$json$Json$Decode$andThen, handleResult, $elm$json$Json$Decode$value);
	});
var $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional = F4(
	function (key, valDecoder, fallback, decoder) {
		return A2(
			$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom,
			A3(
				$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optionalDecoder,
				_List_fromArray(
					[key]),
				valDecoder,
				fallback),
			decoder);
	});
var $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required = F3(
	function (key, valDecoder, decoder) {
		return A2(
			$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom,
			A2($elm$json$Json$Decode$field, key, valDecoder),
			decoder);
	});
var $elm$json$Json$Decode$string = _Json_decodeString;
var $author$project$Data$StyleMod$decoder = A2(
	$elm$json$Json$Decode$andThen,
	function (kindStr) {
		switch (kindStr) {
			case 'token_json':
				return A3(
					$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
					'variables',
					$elm$json$Json$Decode$dict($elm$json$Json$Decode$string),
					A4(
						$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
						'description',
						$elm$json$Json$Decode$string,
						'',
						A4(
							$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
							'author',
							$elm$json$Json$Decode$string,
							'',
							A4(
								$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
								'fontUrls',
								$elm$json$Json$Decode$list($elm$json$Json$Decode$string),
								_List_Nil,
								A4(
									$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
									'enabled',
									$elm$json$Json$Decode$bool,
									true,
									A3(
										$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
										'name',
										$elm$json$Json$Decode$string,
										A3(
											$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
											'id',
											$elm$json$Json$Decode$string,
											$elm$json$Json$Decode$succeed(
												F7(
													function (idVal, nameVal, enabledVal, fontsVal, authorVal, descVal, varsVal) {
														return {
															dd: enabledVal,
															D: fontsVal,
															a3: idVal,
															ac: $author$project$Data$StyleMod$TokenJsonMod(
																{ap: authorVal, as: descVal, aj: varsVal}),
															b4: nameVal
														};
													})))))))));
			case 'custom_css':
				return A3(
					$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
					'cssText',
					$elm$json$Json$Decode$string,
					A4(
						$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
						'fontUrls',
						$elm$json$Json$Decode$list($elm$json$Json$Decode$string),
						_List_Nil,
						A4(
							$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
							'enabled',
							$elm$json$Json$Decode$bool,
							true,
							A3(
								$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
								'name',
								$elm$json$Json$Decode$string,
								A3(
									$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
									'id',
									$elm$json$Json$Decode$string,
									$elm$json$Json$Decode$succeed(
										F5(
											function (idVal, nameVal, enabledVal, fontsVal, cssVal) {
												return {
													dd: enabledVal,
													D: fontsVal,
													a3: idVal,
													ac: $author$project$Data$StyleMod$CustomCssMod(
														{aY: cssVal}),
													b4: nameVal
												};
											})))))));
			default:
				var other = kindStr;
				return $elm$json$Json$Decode$fail('Unknown style mod kind: ' + other);
		}
	},
	A2($elm$json$Json$Decode$field, 'kind', $elm$json$Json$Decode$string));
var $author$project$Data$TimeSchedule$FixedTime = function (a) {
	return {$: 0, a: a};
};
var $author$project$Data$TimeSchedule$WorkSchedule = F6(
	function (id, projectId, enabled, timing, durationMinutes, recurrence) {
		return {db: durationMinutes, dd: enabled, a3: id, dX: projectId, d_: recurrence, ei: timing};
	});
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $author$project$Data$TimeSchedule$Daily = {$: 0};
var $author$project$Data$TimeSchedule$Once = function (a) {
	return {$: 2, a: a};
};
var $author$project$Data$TimeSchedule$Weekly = function (a) {
	return {$: 1, a: a};
};
var $elm$time$Time$Apr = 3;
var $elm$time$Time$Aug = 7;
var $elm$time$Time$Dec = 11;
var $elm$time$Time$Feb = 1;
var $elm$time$Time$Jan = 0;
var $elm$time$Time$Jul = 6;
var $elm$time$Time$Jun = 5;
var $elm$time$Time$Mar = 2;
var $elm$time$Time$May = 4;
var $elm$time$Time$Nov = 10;
var $elm$time$Time$Oct = 9;
var $elm$time$Time$Sep = 8;
var $author$project$Data$TimeSchedule$monthFromInt = function (m) {
	switch (m) {
		case 1:
			return $elm$core$Maybe$Just(0);
		case 2:
			return $elm$core$Maybe$Just(1);
		case 3:
			return $elm$core$Maybe$Just(2);
		case 4:
			return $elm$core$Maybe$Just(3);
		case 5:
			return $elm$core$Maybe$Just(4);
		case 6:
			return $elm$core$Maybe$Just(5);
		case 7:
			return $elm$core$Maybe$Just(6);
		case 8:
			return $elm$core$Maybe$Just(7);
		case 9:
			return $elm$core$Maybe$Just(8);
		case 10:
			return $elm$core$Maybe$Just(9);
		case 11:
			return $elm$core$Maybe$Just(10);
		case 12:
			return $elm$core$Maybe$Just(11);
		default:
			return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Data$BackupStorage$monthDecoder = A2(
	$elm$json$Json$Decode$andThen,
	function (m) {
		var _v0 = $author$project$Data$TimeSchedule$monthFromInt(m);
		if (!_v0.$) {
			var month = _v0.a;
			return $elm$json$Json$Decode$succeed(month);
		} else {
			return $elm$json$Json$Decode$fail(
				'Invalid month: ' + $elm$core$String$fromInt(m));
		}
	},
	$elm$json$Json$Decode$int);
var $elm$time$Time$Fri = 4;
var $elm$time$Time$Mon = 0;
var $elm$time$Time$Sat = 5;
var $elm$time$Time$Sun = 6;
var $elm$time$Time$Thu = 3;
var $elm$time$Time$Tue = 1;
var $elm$time$Time$Wed = 2;
var $author$project$Data$TimeSchedule$weekdayFromString = function (str) {
	switch (str) {
		case 'Mon':
			return $elm$core$Maybe$Just(0);
		case 'Tue':
			return $elm$core$Maybe$Just(1);
		case 'Wed':
			return $elm$core$Maybe$Just(2);
		case 'Thu':
			return $elm$core$Maybe$Just(3);
		case 'Fri':
			return $elm$core$Maybe$Just(4);
		case 'Sat':
			return $elm$core$Maybe$Just(5);
		case 'Sun':
			return $elm$core$Maybe$Just(6);
		default:
			return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Data$BackupStorage$weekdayDecoder = A2(
	$elm$json$Json$Decode$andThen,
	function (raw) {
		var _v0 = $author$project$Data$TimeSchedule$weekdayFromString(raw);
		if (!_v0.$) {
			var wd = _v0.a;
			return $elm$json$Json$Decode$succeed(wd);
		} else {
			return $elm$json$Json$Decode$fail('Invalid weekday: ' + raw);
		}
	},
	$elm$json$Json$Decode$string);
var $author$project$Data$BackupStorage$recurrenceDecoder = A2(
	$elm$json$Json$Decode$andThen,
	function (kind) {
		switch (kind) {
			case 'daily':
				return $elm$json$Json$Decode$succeed($author$project$Data$TimeSchedule$Daily);
			case 'weekly':
				return A2(
					$elm$json$Json$Decode$map,
					$author$project$Data$TimeSchedule$Weekly,
					A2(
						$elm$json$Json$Decode$field,
						'weekdays',
						$elm$json$Json$Decode$list($author$project$Data$BackupStorage$weekdayDecoder)));
			case 'once':
				return A3(
					$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
					'day',
					$elm$json$Json$Decode$int,
					A3(
						$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
						'month',
						$author$project$Data$BackupStorage$monthDecoder,
						A3(
							$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
							'year',
							$elm$json$Json$Decode$int,
							$elm$json$Json$Decode$succeed(
								F3(
									function (y, m, d) {
										return $author$project$Data$TimeSchedule$Once(
											{bE: d, b3: m, cQ: y});
									})))));
			default:
				var other = kind;
				return $elm$json$Json$Decode$fail('Unknown recurrence kind: ' + other);
		}
	},
	A2($elm$json$Json$Decode$field, 'kind', $elm$json$Json$Decode$string));
var $author$project$Data$TimeSchedule$RandomWindow = function (a) {
	return {$: 1, a: a};
};
var $author$project$Data$BackupStorage$timingDecoder = A2(
	$elm$json$Json$Decode$andThen,
	function (kind) {
		switch (kind) {
			case 'fixed':
				return A3(
					$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
					'minute',
					$elm$json$Json$Decode$int,
					A3(
						$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
						'hour',
						$elm$json$Json$Decode$int,
						$elm$json$Json$Decode$succeed(
							F2(
								function (h, m) {
									return $author$project$Data$TimeSchedule$FixedTime(
										{a2: h, a8: m});
								}))));
			case 'random':
				return A3(
					$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
					'rangeEndMinute',
					$elm$json$Json$Decode$int,
					A3(
						$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
						'rangeEndHour',
						$elm$json$Json$Decode$int,
						A3(
							$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
							'rangeStartMinute',
							$elm$json$Json$Decode$int,
							A3(
								$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
								'rangeStartHour',
								$elm$json$Json$Decode$int,
								$elm$json$Json$Decode$succeed(
									F4(
										function (sh, sm, eh, em) {
											return $author$project$Data$TimeSchedule$RandomWindow(
												{ck: eh, cl: em, cm: sh, cn: sm});
										}))))));
			default:
				var other = kind;
				return $elm$json$Json$Decode$fail('Unknown schedule timing kind: ' + other);
		}
	},
	A2($elm$json$Json$Decode$field, 'kind', $elm$json$Json$Decode$string));
var $author$project$Data$BackupStorage$workScheduleDecoder = $elm$json$Json$Decode$oneOf(
	_List_fromArray(
		[
			A3(
			$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
			'recurrence',
			$author$project$Data$BackupStorage$recurrenceDecoder,
			A3(
				$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
				'durationMinutes',
				$elm$json$Json$Decode$int,
				A3(
					$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
					'timing',
					$author$project$Data$BackupStorage$timingDecoder,
					A4(
						$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
						'enabled',
						$elm$json$Json$Decode$bool,
						true,
						A3(
							$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
							'projectId',
							$elm$json$Json$Decode$string,
							A3(
								$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
								'id',
								$elm$json$Json$Decode$string,
								$elm$json$Json$Decode$succeed($author$project$Data$TimeSchedule$WorkSchedule))))))),
			A3(
			$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
			'recurrence',
			$author$project$Data$BackupStorage$recurrenceDecoder,
			A3(
				$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
				'durationMinutes',
				$elm$json$Json$Decode$int,
				A3(
					$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
					'startMinute',
					$elm$json$Json$Decode$int,
					A3(
						$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
						'startHour',
						$elm$json$Json$Decode$int,
						A4(
							$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
							'enabled',
							$elm$json$Json$Decode$bool,
							true,
							A3(
								$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
								'projectId',
								$elm$json$Json$Decode$string,
								A3(
									$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
									'id',
									$elm$json$Json$Decode$string,
									$elm$json$Json$Decode$succeed(
										F7(
											function (id, pid, enabled, h, m, dur, rec) {
												return A6(
													$author$project$Data$TimeSchedule$WorkSchedule,
													id,
													pid,
													enabled,
													$author$project$Data$TimeSchedule$FixedTime(
														{a2: h, a8: m}),
													dur,
													rec);
											})))))))))
		]));
var $author$project$Data$WorkspaceData$PatternPlain = 0;
var $author$project$Data$WorkspaceData$ToneDefault = 0;
var $author$project$Data$WorkspaceData$WorkspaceBackground = F2(
	function (tone, pattern) {
		return {dT: pattern, el: tone};
	});
var $author$project$Data$WorkspaceData$PatternDots = 1;
var $author$project$Data$WorkspaceData$PatternGrid = 2;
var $author$project$Data$WorkspaceData$patternFromString = function (raw) {
	switch (raw) {
		case 'plain':
			return $elm$core$Maybe$Just(0);
		case 'dots':
			return $elm$core$Maybe$Just(1);
		case 'grid':
			return $elm$core$Maybe$Just(2);
		default:
			return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Data$BackupStorage$patternDecoder = A2(
	$elm$json$Json$Decode$andThen,
	function (raw) {
		var _v0 = $author$project$Data$WorkspaceData$patternFromString(raw);
		if (!_v0.$) {
			var p = _v0.a;
			return $elm$json$Json$Decode$succeed(p);
		} else {
			return $elm$json$Json$Decode$fail('Invalid background pattern: ' + raw);
		}
	},
	$elm$json$Json$Decode$string);
var $author$project$Data$WorkspaceData$ToneCool = 2;
var $author$project$Data$WorkspaceData$ToneLavender = 4;
var $author$project$Data$WorkspaceData$ToneMint = 3;
var $author$project$Data$WorkspaceData$ToneSand = 5;
var $author$project$Data$WorkspaceData$ToneWarm = 1;
var $author$project$Data$WorkspaceData$toneFromString = function (raw) {
	switch (raw) {
		case 'default':
			return $elm$core$Maybe$Just(0);
		case 'warm':
			return $elm$core$Maybe$Just(1);
		case 'cool':
			return $elm$core$Maybe$Just(2);
		case 'mint':
			return $elm$core$Maybe$Just(3);
		case 'lavender':
			return $elm$core$Maybe$Just(4);
		case 'sand':
			return $elm$core$Maybe$Just(5);
		default:
			return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Data$BackupStorage$toneDecoder = A2(
	$elm$json$Json$Decode$andThen,
	function (raw) {
		var _v0 = $author$project$Data$WorkspaceData$toneFromString(raw);
		if (!_v0.$) {
			var t = _v0.a;
			return $elm$json$Json$Decode$succeed(t);
		} else {
			return $elm$json$Json$Decode$fail('Invalid background tone: ' + raw);
		}
	},
	$elm$json$Json$Decode$string);
var $author$project$Data$BackupStorage$backgroundDecoder = A4(
	$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
	'pattern',
	$author$project$Data$BackupStorage$patternDecoder,
	0,
	A4(
		$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
		'tone',
		$author$project$Data$BackupStorage$toneDecoder,
		0,
		$elm$json$Json$Decode$succeed($author$project$Data$WorkspaceData$WorkspaceBackground)));
var $author$project$Data$NoteCard$ColorBlue = 1;
var $author$project$Data$NoteCard$ColorGray = 5;
var $author$project$Data$NoteCard$ColorGreen = 2;
var $author$project$Data$NoteCard$ColorOrange = 3;
var $author$project$Data$NoteCard$ColorPurple = 4;
var $author$project$Data$NoteCard$ColorYellow = 0;
var $author$project$Data$NoteCard$defaultStatusOptions = _List_fromArray(
	[
		{c1: 0, a3: 'idea', du: 'アイデア'},
		{c1: 1, a3: 'considering', du: '検討中'},
		{c1: 2, a3: 'working', du: '作業中'},
		{c1: 3, a3: 'on_hold', du: '保留'},
		{c1: 4, a3: 'note', du: 'メモ'},
		{c1: 5, a3: 'done', du: '完了'}
	]);
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (!_v0.$) {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $author$project$Data$NoteCard$normalizeLink = F2(
	function (idA, idB) {
		return _Utils_eq(idA, idB) ? $elm$core$Maybe$Nothing : ((_Utils_cmp(idA, idB) < 0) ? $elm$core$Maybe$Just(
			_Utils_Tuple2(idA, idB)) : $elm$core$Maybe$Just(
			_Utils_Tuple2(idB, idA)));
	});
var $author$project$Data$BackupStorage$buildWorkspace = F6(
	function (name, background, statusOptions, noteCards, cardOrder, links) {
		var validStatuses = $elm$core$List$isEmpty(statusOptions) ? $author$project$Data$NoteCard$defaultStatusOptions : statusOptions;
		var normalizedLinks = $elm_community$list_extra$List$Extra$unique(
			A2(
				$elm$core$List$filterMap,
				function (_v0) {
					var a = _v0.a;
					var b = _v0.b;
					return (A2($elm$core$Dict$member, a, noteCards) && A2($elm$core$Dict$member, b, noteCards)) ? A2($author$project$Data$NoteCard$normalizeLink, a, b) : $elm$core$Maybe$Nothing;
				},
				links));
		return {bw: background, bA: cardOrder, b1: normalizedLinks, b4: name, b9: noteCards, cA: validStatuses};
	});
var $author$project$Data$BackupStorage$cardLinkDecoder = A2(
	$elm$json$Json$Decode$andThen,
	function (items) {
		if ((items.b && items.b.b) && (!items.b.b.b)) {
			var a = items.a;
			var _v1 = items.b;
			var b = _v1.a;
			return $elm$json$Json$Decode$succeed(
				_Utils_Tuple2(a, b));
		} else {
			return $elm$json$Json$Decode$fail('CardLink must be a 2-element array');
		}
	},
	$elm$json$Json$Decode$list($elm$json$Json$Decode$string));
var $author$project$Data$WorkspaceData$defaultBackground = {dT: 0, el: 0};
var $author$project$Data$NoteCard$NoteCard = F3(
	function (id, position, content) {
		return {c2: content, a3: id, dV: position};
	});
var $author$project$Data$NoteCard$CardContent = F5(
	function (title, body, statusId, isCollapsed, isArchived) {
		return {cX: body, dq: isArchived, dr: isCollapsed, ec: statusId, ek: title};
	});
var $author$project$Data$BackupStorage$cardContentDecoder = A4(
	$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
	'isArchived',
	$elm$json$Json$Decode$bool,
	false,
	A4(
		$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
		'isCollapsed',
		$elm$json$Json$Decode$bool,
		false,
		A3(
			$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
			'status',
			$elm$json$Json$Decode$string,
			A3(
				$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
				'body',
				$elm$json$Json$Decode$string,
				A3(
					$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
					'title',
					$elm$json$Json$Decode$string,
					$elm$json$Json$Decode$succeed($author$project$Data$NoteCard$CardContent))))));
var $author$project$Data$NoteCard$CardPosition = F2(
	function (x, y) {
		return {eu: x, ev: y};
	});
var $elm$json$Json$Decode$float = _Json_decodeFloat;
var $author$project$Data$BackupStorage$positionDecoder = A3(
	$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
	'y',
	$elm$json$Json$Decode$float,
	A3(
		$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
		'x',
		$elm$json$Json$Decode$float,
		$elm$json$Json$Decode$succeed($author$project$Data$NoteCard$CardPosition)));
var $author$project$Data$BackupStorage$noteCardDecoder = A3(
	$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
	'content',
	$author$project$Data$BackupStorage$cardContentDecoder,
	A3(
		$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
		'position',
		$author$project$Data$BackupStorage$positionDecoder,
		A3(
			$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
			'id',
			$elm$json$Json$Decode$string,
			$elm$json$Json$Decode$succeed($author$project$Data$NoteCard$NoteCard))));
var $author$project$Data$NoteCard$StatusOption = F3(
	function (id, label, color) {
		return {c1: color, a3: id, du: label};
	});
var $author$project$Data$NoteCard$ColorPink = 6;
var $author$project$Data$NoteCard$ColorTeal = 7;
var $author$project$Data$NoteCard$statusColorFromString = function (raw) {
	switch (raw) {
		case 'yellow':
			return $elm$core$Maybe$Just(0);
		case 'blue':
			return $elm$core$Maybe$Just(1);
		case 'green':
			return $elm$core$Maybe$Just(2);
		case 'orange':
			return $elm$core$Maybe$Just(3);
		case 'purple':
			return $elm$core$Maybe$Just(4);
		case 'gray':
			return $elm$core$Maybe$Just(5);
		case 'pink':
			return $elm$core$Maybe$Just(6);
		case 'teal':
			return $elm$core$Maybe$Just(7);
		default:
			return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Data$BackupStorage$statusColorDecoder = A2(
	$elm$json$Json$Decode$andThen,
	function (raw) {
		var _v0 = $author$project$Data$NoteCard$statusColorFromString(raw);
		if (!_v0.$) {
			var c = _v0.a;
			return $elm$json$Json$Decode$succeed(c);
		} else {
			return $elm$json$Json$Decode$fail('Invalid status color: ' + raw);
		}
	},
	$elm$json$Json$Decode$string);
var $author$project$Data$BackupStorage$statusOptionDecoder = A3(
	$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
	'color',
	$author$project$Data$BackupStorage$statusColorDecoder,
	A3(
		$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
		'label',
		$elm$json$Json$Decode$string,
		A3(
			$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
			'id',
			$elm$json$Json$Decode$string,
			$elm$json$Json$Decode$succeed($author$project$Data$NoteCard$StatusOption))));
var $author$project$Data$BackupStorage$workspaceDecoder = A4(
	$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
	'links',
	$elm$json$Json$Decode$list($author$project$Data$BackupStorage$cardLinkDecoder),
	_List_Nil,
	A4(
		$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
		'cardOrder',
		$elm$json$Json$Decode$list($elm$json$Json$Decode$string),
		_List_Nil,
		A3(
			$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
			'cards',
			$elm$json$Json$Decode$dict($author$project$Data$BackupStorage$noteCardDecoder),
			A4(
				$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
				'statusOptions',
				$elm$json$Json$Decode$list($author$project$Data$BackupStorage$statusOptionDecoder),
				$author$project$Data$NoteCard$defaultStatusOptions,
				A4(
					$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
					'background',
					$author$project$Data$BackupStorage$backgroundDecoder,
					$author$project$Data$WorkspaceData$defaultBackground,
					A3(
						$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
						'name',
						$elm$json$Json$Decode$string,
						$elm$json$Json$Decode$succeed($author$project$Data$BackupStorage$buildWorkspace)))))));
var $author$project$Data$BackupStorage$workspaceIdDecoder = A2(
	$elm$json$Json$Decode$andThen,
	function (kind) {
		switch (kind) {
			case 'memo':
				return $elm$json$Json$Decode$succeed($author$project$Data$WorkspaceData$MemoWorkspace);
			case 'project':
				return A2(
					$elm$json$Json$Decode$map,
					$author$project$Data$WorkspaceData$ProjectId,
					A2($elm$json$Json$Decode$field, 'id', $elm$json$Json$Decode$string));
			default:
				var other = kind;
				return $elm$json$Json$Decode$fail('Unknown workspace type: ' + other);
		}
	},
	A2($elm$json$Json$Decode$field, 'type', $elm$json$Json$Decode$string));
var $author$project$Data$BackupStorage$decodeForVersion = function (version) {
	return (version === 1) ? A4(
		$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
		'styleMods',
		$elm$json$Json$Decode$list($author$project$Data$StyleMod$decoder),
		_List_Nil,
		A4(
			$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
			'handledSlots',
			$elm$json$Json$Decode$dict($elm$json$Json$Decode$string),
			$elm$core$Dict$empty,
			A3(
				$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
				'schedules',
				$elm$json$Json$Decode$list($author$project$Data$BackupStorage$workScheduleDecoder),
				A4(
					$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
					'activeWorkspace',
					$author$project$Data$BackupStorage$workspaceIdDecoder,
					$author$project$Data$WorkspaceData$MemoWorkspace,
					A4(
						$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
						'projectOrder',
						$elm$json$Json$Decode$list($elm$json$Json$Decode$string),
						_List_Nil,
						A3(
							$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
							'projects',
							$elm$json$Json$Decode$dict($author$project$Data$BackupStorage$workspaceDecoder),
							A3(
								$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
								'memo',
								$author$project$Data$BackupStorage$workspaceDecoder,
								$elm$json$Json$Decode$succeed($author$project$Data$BackupStorage$buildAppData)))))))) : $elm$json$Json$Decode$fail(
		'未対応のバックアップ形式バージョンです (schemaVersion=' + ($elm$core$String$fromInt(version) + ')'));
};
var $author$project$Data$BackupStorage$decode = A2(
	$elm$json$Json$Decode$andThen,
	$author$project$Data$BackupStorage$decodeForVersion,
	A2($elm$json$Json$Decode$field, 'schemaVersion', $elm$json$Json$Decode$int));
var $elm$core$Set$Set_elm_builtin = $elm$core$Basics$identity;
var $elm$core$Set$empty = $elm$core$Dict$empty;
var $author$project$Data$WorkspaceData$emptyWorkspace = function (name) {
	return {bw: $author$project$Data$WorkspaceData$defaultBackground, bA: _List_Nil, b1: _List_Nil, b4: name, b9: $elm$core$Dict$empty, cA: $author$project$Data$NoteCard$defaultStatusOptions};
};
var $author$project$Data$BackupStorage$emptyAppData = {
	aB: $author$project$Data$WorkspaceData$MemoWorkspace,
	aH: $elm$core$Dict$empty,
	aK: $author$project$Data$WorkspaceData$emptyWorkspace('メモ'),
	aM: _List_Nil,
	aN: $elm$core$Dict$empty,
	aS: _List_Nil,
	aW: _List_Nil
};
var $elm$time$Time$Name = function (a) {
	return {$: 0, a: a};
};
var $elm$time$Time$Offset = function (a) {
	return {$: 1, a: a};
};
var $elm$time$Time$Zone = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$time$Time$customZone = $elm$time$Time$Zone;
var $elm$time$Time$here = _Time_here(0);
var $author$project$DragCanvas$Model = $elm$core$Basics$identity;
var $author$project$DragCanvas$NotDragging = {$: 0};
var $author$project$DragCanvas$normalizeScale = function (scale) {
	return (scale > 0) ? scale : 1.0;
};
var $author$project$DragCanvas$initWith = F2(
	function (offset, scale) {
		return {
			I: {eu: 0, ev: 0},
			e: $author$project$DragCanvas$NotDragging,
			m: offset,
			p: $author$project$DragCanvas$normalizeScale(scale)
		};
	});
var $author$project$DragCanvas$init = A2(
	$author$project$DragCanvas$initWith,
	{eu: 0, ev: 0},
	1.0);
var $elm$random$Random$Seed = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var $elm$random$Random$next = function (_v0) {
	var state0 = _v0.a;
	var incr = _v0.b;
	return A2($elm$random$Random$Seed, ((state0 * 1664525) + incr) >>> 0, incr);
};
var $elm$random$Random$initialSeed = function (x) {
	var _v0 = $elm$random$Random$next(
		A2($elm$random$Random$Seed, 0, 1013904223));
	var state1 = _v0.a;
	var incr = _v0.b;
	var state2 = (state1 + x) >>> 0;
	return $elm$random$Random$next(
		A2($elm$random$Random$Seed, state2, incr));
};
var $elm$time$Time$Posix = $elm$core$Basics$identity;
var $elm$time$Time$millisToPosix = $elm$core$Basics$identity;
var $elm$time$Time$now = _Time_now($elm$time$Time$millisToPosix);
var $elm$time$Time$utc = A2($elm$time$Time$Zone, 0, _List_Nil);
var $elm$core$Result$withDefault = F2(
	function (def, result) {
		if (!result.$) {
			var a = result.a;
			return a;
		} else {
			return def;
		}
	});
var $author$project$Main$init = function (flags) {
	var initialSeed = function () {
		var _v0 = flags.bf;
		if (_v0.b) {
			var s0 = _v0.a;
			return $elm$random$Random$initialSeed(s0);
		} else {
			return $elm$random$Random$initialSeed(42);
		}
	}();
	var decodedAppData = A2(
		$elm$core$Result$withDefault,
		$author$project$Data$BackupStorage$emptyAppData,
		A2($elm$json$Json$Decode$decodeValue, $author$project$Data$BackupStorage$decode, flags.cB));
	var runtime = {aH: decodedAppData.aH, bi: $elm$core$Maybe$Nothing};
	var initialModel = {
		cS: $elm$core$Set$empty,
		aC: decodedAppData,
		R: $author$project$DragCanvas$init,
		aq: $elm$core$Maybe$Nothing,
		c_: $elm$core$Maybe$Nothing,
		bG: $author$project$Types$NoDialog,
		dj: false,
		bX: false,
		ds: false,
		a4: flags.a4,
		dt: false,
		aI: true,
		b2: $elm$core$Maybe$Nothing,
		dD: '',
		ca: $elm$time$Time$millisToPosix(0),
		dU: $elm$core$Maybe$Nothing,
		d1: $elm$core$Maybe$Nothing,
		d6: 0,
		d7: runtime,
		cv: '',
		bf: initialSeed,
		d9: $elm$core$Maybe$Nothing,
		ed: $elm$core$Maybe$Nothing,
		bm: $elm$core$Maybe$Nothing,
		cK: _List_Nil,
		cL: flags.bn.a1,
		cM: flags.bn.bp,
		cR: $elm$time$Time$utc
	};
	return _Utils_Tuple2(
		initialModel,
		$elm$core$Platform$Cmd$batch(
			_List_fromArray(
				[
					A2(
					$elm$core$Task$perform,
					A2($elm$core$Basics$composeL, $author$project$Types$AppEvent, $author$project$Types$GotTimeZone),
					$elm$time$Time$here),
					A2(
					$elm$core$Task$perform,
					A2($elm$core$Basics$composeL, $author$project$Types$AppEvent, $author$project$Types$Tick),
					$elm$time$Time$now)
				])));
};
var $author$project$Types$CanvasEvent = function (a) {
	return {$: 4, a: a};
};
var $author$project$Types$PageHideTriggered = {$: 4};
var $author$project$Types$PersistenceEvent = function (a) {
	return {$: 3, a: a};
};
var $author$project$Types$StorageResultReceived = function (a) {
	return {$: 2, a: a};
};
var $author$project$Types$VisibilityChanged = function (a) {
	return {$: 3, a: a};
};
var $author$project$Types$WindowResized = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $author$project$Types$CanvasAnimationTick = function (a) {
	return {$: 5, a: a};
};
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $elm$core$Platform$Sub$none = $elm$core$Platform$Sub$batch(_List_Nil);
var $elm$browser$Browser$AnimationManager$Delta = function (a) {
	return {$: 1, a: a};
};
var $elm$browser$Browser$AnimationManager$State = F3(
	function (subs, request, oldTime) {
		return {bc: oldTime, cp: request, cE: subs};
	});
var $elm$browser$Browser$AnimationManager$init = $elm$core$Task$succeed(
	A3($elm$browser$Browser$AnimationManager$State, _List_Nil, $elm$core$Maybe$Nothing, 0));
var $elm$core$Process$kill = _Scheduler_kill;
var $elm$browser$Browser$AnimationManager$now = _Browser_now(0);
var $elm$browser$Browser$AnimationManager$rAF = _Browser_rAF(0);
var $elm$core$Platform$sendToSelf = _Platform_sendToSelf;
var $elm$core$Process$spawn = _Scheduler_spawn;
var $elm$browser$Browser$AnimationManager$onEffects = F3(
	function (router, subs, _v0) {
		var request = _v0.cp;
		var oldTime = _v0.bc;
		var _v1 = _Utils_Tuple2(request, subs);
		if (_v1.a.$ === 1) {
			if (!_v1.b.b) {
				var _v2 = _v1.a;
				return $elm$browser$Browser$AnimationManager$init;
			} else {
				var _v4 = _v1.a;
				return A2(
					$elm$core$Task$andThen,
					function (pid) {
						return A2(
							$elm$core$Task$andThen,
							function (time) {
								return $elm$core$Task$succeed(
									A3(
										$elm$browser$Browser$AnimationManager$State,
										subs,
										$elm$core$Maybe$Just(pid),
										time));
							},
							$elm$browser$Browser$AnimationManager$now);
					},
					$elm$core$Process$spawn(
						A2(
							$elm$core$Task$andThen,
							$elm$core$Platform$sendToSelf(router),
							$elm$browser$Browser$AnimationManager$rAF)));
			}
		} else {
			if (!_v1.b.b) {
				var pid = _v1.a.a;
				return A2(
					$elm$core$Task$andThen,
					function (_v3) {
						return $elm$browser$Browser$AnimationManager$init;
					},
					$elm$core$Process$kill(pid));
			} else {
				return $elm$core$Task$succeed(
					A3($elm$browser$Browser$AnimationManager$State, subs, request, oldTime));
			}
		}
	});
var $elm$browser$Browser$AnimationManager$onSelfMsg = F3(
	function (router, newTime, _v0) {
		var subs = _v0.cE;
		var oldTime = _v0.bc;
		var send = function (sub) {
			if (!sub.$) {
				var tagger = sub.a;
				return A2(
					$elm$core$Platform$sendToApp,
					router,
					tagger(
						$elm$time$Time$millisToPosix(newTime)));
			} else {
				var tagger = sub.a;
				return A2(
					$elm$core$Platform$sendToApp,
					router,
					tagger(newTime - oldTime));
			}
		};
		return A2(
			$elm$core$Task$andThen,
			function (pid) {
				return A2(
					$elm$core$Task$andThen,
					function (_v1) {
						return $elm$core$Task$succeed(
							A3(
								$elm$browser$Browser$AnimationManager$State,
								subs,
								$elm$core$Maybe$Just(pid),
								newTime));
					},
					$elm$core$Task$sequence(
						A2($elm$core$List$map, send, subs)));
			},
			$elm$core$Process$spawn(
				A2(
					$elm$core$Task$andThen,
					$elm$core$Platform$sendToSelf(router),
					$elm$browser$Browser$AnimationManager$rAF)));
	});
var $elm$browser$Browser$AnimationManager$Time = function (a) {
	return {$: 0, a: a};
};
var $elm$browser$Browser$AnimationManager$subMap = F2(
	function (func, sub) {
		if (!sub.$) {
			var tagger = sub.a;
			return $elm$browser$Browser$AnimationManager$Time(
				A2($elm$core$Basics$composeL, func, tagger));
		} else {
			var tagger = sub.a;
			return $elm$browser$Browser$AnimationManager$Delta(
				A2($elm$core$Basics$composeL, func, tagger));
		}
	});
_Platform_effectManagers['Browser.AnimationManager'] = _Platform_createManager($elm$browser$Browser$AnimationManager$init, $elm$browser$Browser$AnimationManager$onEffects, $elm$browser$Browser$AnimationManager$onSelfMsg, 0, $elm$browser$Browser$AnimationManager$subMap);
var $elm$browser$Browser$AnimationManager$subscription = _Platform_leaf('Browser.AnimationManager');
var $elm$browser$Browser$AnimationManager$onAnimationFrameDelta = function (tagger) {
	return $elm$browser$Browser$AnimationManager$subscription(
		$elm$browser$Browser$AnimationManager$Delta(tagger));
};
var $elm$browser$Browser$Events$onAnimationFrameDelta = $elm$browser$Browser$AnimationManager$onAnimationFrameDelta;
var $author$project$Main$animationSubscription = function (model) {
	var _v0 = model.aq;
	if (_v0.$ === 1) {
		return $elm$core$Platform$Sub$none;
	} else {
		return $elm$browser$Browser$Events$onAnimationFrameDelta(
			A2($elm$core$Basics$composeL, $author$project$Types$AppEvent, $author$project$Types$CanvasAnimationTick));
	}
};
var $elm$time$Time$Every = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$time$Time$State = F2(
	function (taggers, processes) {
		return {ch: processes, cF: taggers};
	});
var $elm$time$Time$init = $elm$core$Task$succeed(
	A2($elm$time$Time$State, $elm$core$Dict$empty, $elm$core$Dict$empty));
var $elm$time$Time$addMySub = F2(
	function (_v0, state) {
		var interval = _v0.a;
		var tagger = _v0.b;
		var _v1 = A2($elm$core$Dict$get, interval, state);
		if (_v1.$ === 1) {
			return A3(
				$elm$core$Dict$insert,
				interval,
				_List_fromArray(
					[tagger]),
				state);
		} else {
			var taggers = _v1.a;
			return A3(
				$elm$core$Dict$insert,
				interval,
				A2($elm$core$List$cons, tagger, taggers),
				state);
		}
	});
var $elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === -2) {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var $elm$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _v0) {
				stepState:
				while (true) {
					var list = _v0.a;
					var result = _v0.b;
					if (!list.b) {
						return _Utils_Tuple2(
							list,
							A3(rightStep, rKey, rValue, result));
					} else {
						var _v2 = list.a;
						var lKey = _v2.a;
						var lValue = _v2.b;
						var rest = list.b;
						if (_Utils_cmp(lKey, rKey) < 0) {
							var $temp$rKey = rKey,
								$temp$rValue = rValue,
								$temp$_v0 = _Utils_Tuple2(
								rest,
								A3(leftStep, lKey, lValue, result));
							rKey = $temp$rKey;
							rValue = $temp$rValue;
							_v0 = $temp$_v0;
							continue stepState;
						} else {
							if (_Utils_cmp(lKey, rKey) > 0) {
								return _Utils_Tuple2(
									list,
									A3(rightStep, rKey, rValue, result));
							} else {
								return _Utils_Tuple2(
									rest,
									A4(bothStep, lKey, lValue, rValue, result));
							}
						}
					}
				}
			});
		var _v3 = A3(
			$elm$core$Dict$foldl,
			stepState,
			_Utils_Tuple2(
				$elm$core$Dict$toList(leftDict),
				initialResult),
			rightDict);
		var leftovers = _v3.a;
		var intermediateResult = _v3.b;
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v4, result) {
					var k = _v4.a;
					var v = _v4.b;
					return A3(leftStep, k, v, result);
				}),
			intermediateResult,
			leftovers);
	});
var $elm$time$Time$setInterval = _Time_setInterval;
var $elm$time$Time$spawnHelp = F3(
	function (router, intervals, processes) {
		if (!intervals.b) {
			return $elm$core$Task$succeed(processes);
		} else {
			var interval = intervals.a;
			var rest = intervals.b;
			var spawnTimer = $elm$core$Process$spawn(
				A2(
					$elm$time$Time$setInterval,
					interval,
					A2($elm$core$Platform$sendToSelf, router, interval)));
			var spawnRest = function (id) {
				return A3(
					$elm$time$Time$spawnHelp,
					router,
					rest,
					A3($elm$core$Dict$insert, interval, id, processes));
			};
			return A2($elm$core$Task$andThen, spawnRest, spawnTimer);
		}
	});
var $elm$time$Time$onEffects = F3(
	function (router, subs, _v0) {
		var processes = _v0.ch;
		var rightStep = F3(
			function (_v6, id, _v7) {
				var spawns = _v7.a;
				var existing = _v7.b;
				var kills = _v7.c;
				return _Utils_Tuple3(
					spawns,
					existing,
					A2(
						$elm$core$Task$andThen,
						function (_v5) {
							return kills;
						},
						$elm$core$Process$kill(id)));
			});
		var newTaggers = A3($elm$core$List$foldl, $elm$time$Time$addMySub, $elm$core$Dict$empty, subs);
		var leftStep = F3(
			function (interval, taggers, _v4) {
				var spawns = _v4.a;
				var existing = _v4.b;
				var kills = _v4.c;
				return _Utils_Tuple3(
					A2($elm$core$List$cons, interval, spawns),
					existing,
					kills);
			});
		var bothStep = F4(
			function (interval, taggers, id, _v3) {
				var spawns = _v3.a;
				var existing = _v3.b;
				var kills = _v3.c;
				return _Utils_Tuple3(
					spawns,
					A3($elm$core$Dict$insert, interval, id, existing),
					kills);
			});
		var _v1 = A6(
			$elm$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			newTaggers,
			processes,
			_Utils_Tuple3(
				_List_Nil,
				$elm$core$Dict$empty,
				$elm$core$Task$succeed(0)));
		var spawnList = _v1.a;
		var existingDict = _v1.b;
		var killTask = _v1.c;
		return A2(
			$elm$core$Task$andThen,
			function (newProcesses) {
				return $elm$core$Task$succeed(
					A2($elm$time$Time$State, newTaggers, newProcesses));
			},
			A2(
				$elm$core$Task$andThen,
				function (_v2) {
					return A3($elm$time$Time$spawnHelp, router, spawnList, existingDict);
				},
				killTask));
	});
var $elm$time$Time$onSelfMsg = F3(
	function (router, interval, state) {
		var _v0 = A2($elm$core$Dict$get, interval, state.cF);
		if (_v0.$ === 1) {
			return $elm$core$Task$succeed(state);
		} else {
			var taggers = _v0.a;
			var tellTaggers = function (time) {
				return $elm$core$Task$sequence(
					A2(
						$elm$core$List$map,
						function (tagger) {
							return A2(
								$elm$core$Platform$sendToApp,
								router,
								tagger(time));
						},
						taggers));
			};
			return A2(
				$elm$core$Task$andThen,
				function (_v1) {
					return $elm$core$Task$succeed(state);
				},
				A2($elm$core$Task$andThen, tellTaggers, $elm$time$Time$now));
		}
	});
var $elm$time$Time$subMap = F2(
	function (f, _v0) {
		var interval = _v0.a;
		var tagger = _v0.b;
		return A2(
			$elm$time$Time$Every,
			interval,
			A2($elm$core$Basics$composeL, f, tagger));
	});
_Platform_effectManagers['Time'] = _Platform_createManager($elm$time$Time$init, $elm$time$Time$onEffects, $elm$time$Time$onSelfMsg, 0, $elm$time$Time$subMap);
var $elm$time$Time$subscription = _Platform_leaf('Time');
var $elm$time$Time$every = F2(
	function (interval, tagger) {
		return $elm$time$Time$subscription(
			A2($elm$time$Time$Every, interval, tagger));
	});
var $elm$core$Platform$Sub$map = _Platform_map;
var $author$project$Types$CardEvent = function (a) {
	return {$: 0, a: a};
};
var $author$project$Types$MobileDragEnded = {$: 23};
var $author$project$Types$MobileDragMoved = function (a) {
	return {$: 22, a: a};
};
var $elm$browser$Browser$Events$Document = 0;
var $elm$browser$Browser$Events$MySub = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $elm$browser$Browser$Events$State = F2(
	function (subs, pids) {
		return {cd: pids, cE: subs};
	});
var $elm$browser$Browser$Events$init = $elm$core$Task$succeed(
	A2($elm$browser$Browser$Events$State, _List_Nil, $elm$core$Dict$empty));
var $elm$browser$Browser$Events$nodeToKey = function (node) {
	if (!node) {
		return 'd_';
	} else {
		return 'w_';
	}
};
var $elm$browser$Browser$Events$addKey = function (sub) {
	var node = sub.a;
	var name = sub.b;
	return _Utils_Tuple2(
		_Utils_ap(
			$elm$browser$Browser$Events$nodeToKey(node),
			name),
		sub);
};
var $elm$browser$Browser$Events$Event = F2(
	function (key, event) {
		return {bL: event, b_: key};
	});
var $elm$browser$Browser$Events$spawn = F3(
	function (router, key, _v0) {
		var node = _v0.a;
		var name = _v0.b;
		var actualNode = function () {
			if (!node) {
				return _Browser_doc;
			} else {
				return _Browser_window;
			}
		}();
		return A2(
			$elm$core$Task$map,
			function (value) {
				return _Utils_Tuple2(key, value);
			},
			A3(
				_Browser_on,
				actualNode,
				name,
				function (event) {
					return A2(
						$elm$core$Platform$sendToSelf,
						router,
						A2($elm$browser$Browser$Events$Event, key, event));
				}));
	});
var $elm$core$Dict$union = F2(
	function (t1, t2) {
		return A3($elm$core$Dict$foldl, $elm$core$Dict$insert, t2, t1);
	});
var $elm$browser$Browser$Events$onEffects = F3(
	function (router, subs, state) {
		var stepRight = F3(
			function (key, sub, _v6) {
				var deads = _v6.a;
				var lives = _v6.b;
				var news = _v6.c;
				return _Utils_Tuple3(
					deads,
					lives,
					A2(
						$elm$core$List$cons,
						A3($elm$browser$Browser$Events$spawn, router, key, sub),
						news));
			});
		var stepLeft = F3(
			function (_v4, pid, _v5) {
				var deads = _v5.a;
				var lives = _v5.b;
				var news = _v5.c;
				return _Utils_Tuple3(
					A2($elm$core$List$cons, pid, deads),
					lives,
					news);
			});
		var stepBoth = F4(
			function (key, pid, _v2, _v3) {
				var deads = _v3.a;
				var lives = _v3.b;
				var news = _v3.c;
				return _Utils_Tuple3(
					deads,
					A3($elm$core$Dict$insert, key, pid, lives),
					news);
			});
		var newSubs = A2($elm$core$List$map, $elm$browser$Browser$Events$addKey, subs);
		var _v0 = A6(
			$elm$core$Dict$merge,
			stepLeft,
			stepBoth,
			stepRight,
			state.cd,
			$elm$core$Dict$fromList(newSubs),
			_Utils_Tuple3(_List_Nil, $elm$core$Dict$empty, _List_Nil));
		var deadPids = _v0.a;
		var livePids = _v0.b;
		var makeNewPids = _v0.c;
		return A2(
			$elm$core$Task$andThen,
			function (pids) {
				return $elm$core$Task$succeed(
					A2(
						$elm$browser$Browser$Events$State,
						newSubs,
						A2(
							$elm$core$Dict$union,
							livePids,
							$elm$core$Dict$fromList(pids))));
			},
			A2(
				$elm$core$Task$andThen,
				function (_v1) {
					return $elm$core$Task$sequence(makeNewPids);
				},
				$elm$core$Task$sequence(
					A2($elm$core$List$map, $elm$core$Process$kill, deadPids))));
	});
var $elm$browser$Browser$Events$onSelfMsg = F3(
	function (router, _v0, state) {
		var key = _v0.b_;
		var event = _v0.bL;
		var toMessage = function (_v2) {
			var subKey = _v2.a;
			var _v3 = _v2.b;
			var node = _v3.a;
			var name = _v3.b;
			var decoder = _v3.c;
			return _Utils_eq(subKey, key) ? A2(_Browser_decodeEvent, decoder, event) : $elm$core$Maybe$Nothing;
		};
		var messages = A2($elm$core$List$filterMap, toMessage, state.cE);
		return A2(
			$elm$core$Task$andThen,
			function (_v1) {
				return $elm$core$Task$succeed(state);
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Platform$sendToApp(router),
					messages)));
	});
var $elm$browser$Browser$Events$subMap = F2(
	function (func, _v0) {
		var node = _v0.a;
		var name = _v0.b;
		var decoder = _v0.c;
		return A3(
			$elm$browser$Browser$Events$MySub,
			node,
			name,
			A2($elm$json$Json$Decode$map, func, decoder));
	});
_Platform_effectManagers['Browser.Events'] = _Platform_createManager($elm$browser$Browser$Events$init, $elm$browser$Browser$Events$onEffects, $elm$browser$Browser$Events$onSelfMsg, 0, $elm$browser$Browser$Events$subMap);
var $elm$browser$Browser$Events$subscription = _Platform_leaf('Browser.Events');
var $elm$browser$Browser$Events$on = F3(
	function (node, name, decoder) {
		return $elm$browser$Browser$Events$subscription(
			A3($elm$browser$Browser$Events$MySub, node, name, decoder));
	});
var $elm$browser$Browser$Events$onMouseMove = A2($elm$browser$Browser$Events$on, 0, 'mousemove');
var $elm$browser$Browser$Events$onMouseUp = A2($elm$browser$Browser$Events$on, 0, 'mouseup');
var $author$project$Main$mobileDragSubscription = function (model) {
	var _v0 = model.b2;
	if (_v0.$ === 1) {
		return $elm$core$Platform$Sub$none;
	} else {
		return $elm$core$Platform$Sub$batch(
			_List_fromArray(
				[
					$elm$browser$Browser$Events$onMouseMove(
					A2(
						$elm$json$Json$Decode$map,
						A2($elm$core$Basics$composeL, $author$project$Types$CardEvent, $author$project$Types$MobileDragMoved),
						A2($elm$json$Json$Decode$field, 'clientY', $elm$json$Json$Decode$float))),
					$elm$browser$Browser$Events$onMouseUp(
					$elm$json$Json$Decode$succeed(
						$author$project$Types$CardEvent($author$project$Types$MobileDragEnded)))
				]));
	}
};
var $elm$browser$Browser$Events$onKeyDown = A2($elm$browser$Browser$Events$on, 0, 'keydown');
var $author$project$Ports$onPageHide = _Platform_incomingPort(
	'onPageHide',
	$elm$json$Json$Decode$null(0));
var $elm$browser$Browser$Events$Window = 1;
var $elm$browser$Browser$Events$onResize = function (func) {
	return A3(
		$elm$browser$Browser$Events$on,
		1,
		'resize',
		A2(
			$elm$json$Json$Decode$field,
			'target',
			A3(
				$elm$json$Json$Decode$map2,
				func,
				A2($elm$json$Json$Decode$field, 'innerWidth', $elm$json$Json$Decode$int),
				A2($elm$json$Json$Decode$field, 'innerHeight', $elm$json$Json$Decode$int))));
};
var $author$project$Ports$onStorageResult = _Platform_incomingPort('onStorageResult', $elm$json$Json$Decode$value);
var $elm$browser$Browser$Events$Hidden = 1;
var $elm$browser$Browser$Events$Visible = 0;
var $elm$browser$Browser$Events$withHidden = F2(
	function (func, isHidden) {
		return func(
			isHidden ? 1 : 0);
	});
var $elm$browser$Browser$Events$onVisibilityChange = function (func) {
	var info = _Browser_visibilityInfo(0);
	return A3(
		$elm$browser$Browser$Events$on,
		0,
		info.c$,
		A2(
			$elm$json$Json$Decode$map,
			$elm$browser$Browser$Events$withHidden(func),
			A2(
				$elm$json$Json$Decode$field,
				'target',
				A2($elm$json$Json$Decode$field, info.dk, $elm$json$Json$Decode$bool))));
};
var $author$project$DragCanvas$Msg = $elm$core$Basics$identity;
var $author$project$DragCanvas$PointerMoved = function (a) {
	return {$: 2, a: a};
};
var $author$project$DragCanvas$PointerUp = function (a) {
	return {$: 3, a: a};
};
var $author$project$DragCanvas$Point = F2(
	function (x, y) {
		return {eu: x, ev: y};
	});
var $author$project$DragCanvas$pointerDecoder = A3(
	$elm$json$Json$Decode$map2,
	$author$project$DragCanvas$Point,
	A2($elm$json$Json$Decode$field, 'clientX', $elm$json$Json$Decode$float),
	A2($elm$json$Json$Decode$field, 'clientY', $elm$json$Json$Decode$float));
var $author$project$DragCanvas$subscriptions = function (_v0) {
	var data = _v0;
	var _v1 = data.e;
	if (!_v1.$) {
		return $elm$core$Platform$Sub$none;
	} else {
		return $elm$core$Platform$Sub$batch(
			_List_fromArray(
				[
					$elm$browser$Browser$Events$onMouseMove(
					A2(
						$elm$json$Json$Decode$map,
						function (p) {
							return $author$project$DragCanvas$PointerMoved(p);
						},
						$author$project$DragCanvas$pointerDecoder)),
					$elm$browser$Browser$Events$onMouseUp(
					A2(
						$elm$json$Json$Decode$map,
						function (p) {
							return $author$project$DragCanvas$PointerUp(
								$elm$core$Maybe$Just(p));
						},
						$author$project$DragCanvas$pointerDecoder))
				]));
	}
};
var $author$project$Types$UndoActionClicked = {$: 10};
var $author$project$Types$WorkspaceEvent = function (a) {
	return {$: 1, a: a};
};
var $elm$core$String$toUpper = _String_toUpper;
var $author$project$Main$isTextInputTag = function (tagName) {
	return A2(
		$elm$core$List$member,
		$elm$core$String$toUpper(tagName),
		_List_fromArray(
			['INPUT', 'TEXTAREA', 'SELECT']));
};
var $elm$json$Json$Decode$map5 = _Json_map5;
var $elm$json$Json$Decode$maybe = function (decoder) {
	return $elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				A2($elm$json$Json$Decode$map, $elm$core$Maybe$Just, decoder),
				$elm$json$Json$Decode$succeed($elm$core$Maybe$Nothing)
			]));
};
var $elm$core$String$toLower = _String_toLower;
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $author$project$Main$undoKeyDecoder = A2(
	$elm$json$Json$Decode$andThen,
	$elm$core$Basics$identity,
	A6(
		$elm$json$Json$Decode$map5,
		F5(
			function (ctrl, meta, shift, key, tagName) {
				return ((ctrl || meta) && ((!shift) && (($elm$core$String$toLower(key) === 'z') && (!$author$project$Main$isTextInputTag(tagName))))) ? $elm$json$Json$Decode$succeed(
					$author$project$Types$WorkspaceEvent($author$project$Types$UndoActionClicked)) : $elm$json$Json$Decode$fail('not undo shortcut');
			}),
		A2($elm$json$Json$Decode$field, 'ctrlKey', $elm$json$Json$Decode$bool),
		A2($elm$json$Json$Decode$field, 'metaKey', $elm$json$Json$Decode$bool),
		A2($elm$json$Json$Decode$field, 'shiftKey', $elm$json$Json$Decode$bool),
		A2($elm$json$Json$Decode$field, 'key', $elm$json$Json$Decode$string),
		A2(
			$elm$json$Json$Decode$map,
			$elm$core$Maybe$withDefault(''),
			$elm$json$Json$Decode$maybe(
				A2(
					$elm$json$Json$Decode$at,
					_List_fromArray(
						['target', 'tagName']),
					$elm$json$Json$Decode$string)))));
var $author$project$Main$subscriptions = function (model) {
	return $elm$core$Platform$Sub$batch(
		_List_fromArray(
			[
				A2(
				$elm$core$Platform$Sub$map,
				$author$project$Types$CanvasEvent,
				$author$project$DragCanvas$subscriptions(model.R)),
				$author$project$Main$mobileDragSubscription(model),
				$author$project$Main$animationSubscription(model),
				$elm$browser$Browser$Events$onKeyDown($author$project$Main$undoKeyDecoder),
				A2(
				$elm$time$Time$every,
				15000,
				A2($elm$core$Basics$composeL, $author$project$Types$AppEvent, $author$project$Types$Tick)),
				$elm$browser$Browser$Events$onResize(
				F2(
					function (w, h) {
						return $author$project$Types$AppEvent(
							A2($author$project$Types$WindowResized, w, h));
					})),
				$elm$browser$Browser$Events$onVisibilityChange(
				A2($elm$core$Basics$composeL, $author$project$Types$AppEvent, $author$project$Types$VisibilityChanged)),
				$author$project$Ports$onStorageResult(
				A2($elm$core$Basics$composeL, $author$project$Types$PersistenceEvent, $author$project$Types$StorageResultReceived)),
				$author$project$Ports$onPageHide(
				function (_v0) {
					return $author$project$Types$AppEvent($author$project$Types$PageHideTriggered);
				})
			]));
};
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $author$project$DragCanvas$defaultConfig = {
	aD: '',
	aX: $elm$core$Maybe$Nothing,
	aE: 5.0,
	ab: $elm$core$Basics$always(true),
	a5: 3.0,
	a7: 0.25,
	ae: true,
	aV: true,
	br: 0.001
};
var $elm$core$Dict$values = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return A2($elm$core$List$cons, value, valueList);
			}),
		_List_Nil,
		dict);
};
var $author$project$Data$WorkspaceData$activeCards = function (ws) {
	return A2(
		$elm$core$List$filter,
		function (c) {
			return !c.c2.dq;
		},
		$elm$core$Dict$values(ws.b9));
};
var $author$project$Types$activeWorkspaceData = function (model) {
	var _v0 = model.aC.aB;
	if (!_v0.$) {
		return model.aC.aK;
	} else {
		var pid = _v0.a;
		return A2(
			$elm$core$Maybe$withDefault,
			model.aC.aK,
			A2($elm$core$Dict$get, pid, model.aC.aN));
	}
};
var $author$project$Data$NoteCard$addLink = F3(
	function (idA, idB, links) {
		var _v0 = A2($author$project$Data$NoteCard$normalizeLink, idA, idB);
		if (_v0.$ === 1) {
			return links;
		} else {
			var pair = _v0.a;
			return A2($elm$core$List$member, pair, links) ? links : _Utils_ap(
				links,
				_List_fromArray(
					[pair]));
		}
	});
var $elm_community$list_extra$List$Extra$find = F2(
	function (predicate, list) {
		find:
		while (true) {
			if (!list.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var first = list.a;
				var rest = list.b;
				if (predicate(first)) {
					return $elm$core$Maybe$Just(first);
				} else {
					var $temp$predicate = predicate,
						$temp$list = rest;
					predicate = $temp$predicate;
					list = $temp$list;
					continue find;
				}
			}
		}
	});
var $elm$core$Basics$ge = _Utils_ge;
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$Update$CardActions$findHitCard = F2(
	function (pt, rects) {
		return A2(
			$elm$core$Maybe$map,
			function ($) {
				return $.bz;
			},
			A2(
				$elm_community$list_extra$List$Extra$find,
				function (r) {
					return (_Utils_cmp(pt.eu, r.dv) > -1) && ((_Utils_cmp(pt.eu, r.dv + r.bp) < 1) && ((_Utils_cmp(pt.ev, r.em) > -1) && (_Utils_cmp(pt.ev, r.em + r.a1) < 1)));
				},
				rects));
	});
var $author$project$Update$PersistenceActions$markUnsavedChanges = function (model) {
	return _Utils_update(
		model,
		{dj: true});
};
var $elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2($elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var $elm$core$List$takeTailRec = F2(
	function (n, list) {
		return $elm$core$List$reverse(
			A3($elm$core$List$takeReverse, n, list, _List_Nil));
	});
var $elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _v0 = _Utils_Tuple2(n, list);
			_v0$1:
			while (true) {
				_v0$5:
				while (true) {
					if (!_v0.b.b) {
						return list;
					} else {
						if (_v0.b.b.b) {
							switch (_v0.a) {
								case 1:
									break _v0$1;
								case 2:
									var _v2 = _v0.b;
									var x = _v2.a;
									var _v3 = _v2.b;
									var y = _v3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_v0.b.b.b.b) {
										var _v4 = _v0.b;
										var x = _v4.a;
										var _v5 = _v4.b;
										var y = _v5.a;
										var _v6 = _v5.b;
										var z = _v6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _v0$5;
									}
								default:
									if (_v0.b.b.b.b && _v0.b.b.b.b.b) {
										var _v7 = _v0.b;
										var x = _v7.a;
										var _v8 = _v7.b;
										var y = _v8.a;
										var _v9 = _v8.b;
										var z = _v9.a;
										var _v10 = _v9.b;
										var w = _v10.a;
										var tl = _v10.b;
										return (ctr > 1000) ? A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A2($elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A3($elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _v0$5;
									}
							}
						} else {
							if (_v0.a === 1) {
								break _v0$1;
							} else {
								break _v0$5;
							}
						}
					}
				}
				return list;
			}
			var _v1 = _v0.b;
			var x = _v1.a;
			return _List_fromArray(
				[x]);
		}
	});
var $elm$core$List$take = F2(
	function (n, list) {
		return A3($elm$core$List$takeFast, 0, n, list);
	});
var $author$project$Types$pushUndoSnapshot = F3(
	function (label, prevAppData, model) {
		if (_Utils_eq(prevAppData, model.aC)) {
			return model;
		} else {
			var nextStack = A2(
				$elm$core$List$cons,
				{aC: prevAppData, du: label},
				model.cK);
			return _Utils_update(
				model,
				{
					cK: A2($elm$core$List$take, 40, nextStack)
				});
		}
	});
var $elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === -1) && (dict.d.$ === -1)) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var $elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
		if ((dict.e.d.$ === -1) && (!dict.e.d.a)) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var lLeft = _v1.d;
			var lRight = _v1.e;
			var _v2 = dict.e;
			var rClr = _v2.a;
			var rK = _v2.b;
			var rV = _v2.c;
			var rLeft = _v2.d;
			var _v3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _v2.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				0,
				rlK,
				rlV,
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					rlL),
				A5($elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v4 = dict.d;
			var lClr = _v4.a;
			var lK = _v4.b;
			var lV = _v4.c;
			var lLeft = _v4.d;
			var lRight = _v4.e;
			var _v5 = dict.e;
			var rClr = _v5.a;
			var rK = _v5.b;
			var rV = _v5.c;
			var rLeft = _v5.d;
			var rRight = _v5.e;
			if (clr === 1) {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
		if ((dict.d.d.$ === -1) && (!dict.d.d.a)) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var _v2 = _v1.d;
			var _v3 = _v2.a;
			var llK = _v2.b;
			var llV = _v2.c;
			var llLeft = _v2.d;
			var llRight = _v2.e;
			var lRight = _v1.e;
			var _v4 = dict.e;
			var rClr = _v4.a;
			var rK = _v4.b;
			var rV = _v4.c;
			var rLeft = _v4.d;
			var rRight = _v4.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				0,
				lK,
				lV,
				A5($elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					lRight,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v5 = dict.d;
			var lClr = _v5.a;
			var lK = _v5.b;
			var lV = _v5.c;
			var lLeft = _v5.d;
			var lRight = _v5.e;
			var _v6 = dict.e;
			var rClr = _v6.a;
			var rK = _v6.b;
			var rV = _v6.c;
			var rLeft = _v6.d;
			var rRight = _v6.e;
			if (clr === 1) {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === -1) && (!left.a)) {
			var _v1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, lRight, right));
		} else {
			_v2$2:
			while (true) {
				if ((right.$ === -1) && (right.a === 1)) {
					if (right.d.$ === -1) {
						if (right.d.a === 1) {
							var _v3 = right.a;
							var _v4 = right.d;
							var _v5 = _v4.a;
							return $elm$core$Dict$moveRedRight(dict);
						} else {
							break _v2$2;
						}
					} else {
						var _v6 = right.a;
						var _v7 = right.d;
						return $elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _v2$2;
				}
			}
			return dict;
		}
	});
var $elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === -1) && (dict.d.$ === -1)) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor === 1) {
			if ((lLeft.$ === -1) && (!lLeft.a)) {
				var _v3 = lLeft.a;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					$elm$core$Dict$removeMin(left),
					right);
			} else {
				var _v4 = $elm$core$Dict$moveRedLeft(dict);
				if (_v4.$ === -1) {
					var nColor = _v4.a;
					var nKey = _v4.b;
					var nValue = _v4.c;
					var nLeft = _v4.d;
					var nRight = _v4.e;
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						$elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				$elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return $elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var $elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === -2) {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === -1) && (left.a === 1)) {
					var _v4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === -1) && (!lLeft.a)) {
						var _v6 = lLeft.a;
						return A5(
							$elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2($elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _v7 = $elm$core$Dict$moveRedLeft(dict);
						if (_v7.$ === -1) {
							var nColor = _v7.a;
							var nKey = _v7.b;
							var nValue = _v7.c;
							var nLeft = _v7.d;
							var nRight = _v7.e;
							return A5(
								$elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2($elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return $elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						$elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2($elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					$elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var $elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === -1) {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _v1 = $elm$core$Dict$getMin(right);
				if (_v1.$ === -1) {
					var minKey = _v1.b;
					var minValue = _v1.c;
					return A5(
						$elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						$elm$core$Dict$removeMin(right));
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					$elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2($elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var $elm$core$Dict$remove = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
		if ((_v0.$ === -1) && (!_v0.a)) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _v0 = alter(
			A2($elm$core$Dict$get, targetKey, dictionary));
		if (!_v0.$) {
			var value = _v0.a;
			return A3($elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2($elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var $author$project$Types$updateActiveWorkspaceData = F2(
	function (fn, model) {
		var appData = model.aC;
		var updatedAppData = function () {
			var _v0 = appData.aB;
			if (!_v0.$) {
				return _Utils_update(
					appData,
					{
						aK: fn(appData.aK)
					});
			} else {
				var pid = _v0.a;
				return _Utils_update(
					appData,
					{
						aN: A3(
							$elm$core$Dict$update,
							pid,
							$elm$core$Maybe$map(fn),
							appData.aN)
					});
			}
		}();
		return _Utils_update(
			model,
			{aC: updatedAppData});
	});
var $author$project$Update$CardActions$setCardPosition = F3(
	function (cardId, pos, model) {
		return A2(
			$author$project$Types$updateActiveWorkspaceData,
			function (ws) {
				return _Utils_update(
					ws,
					{
						b9: A3(
							$elm$core$Dict$update,
							cardId,
							$elm$core$Maybe$map(
								function (item) {
									return _Utils_update(
										item,
										{dV: pos});
								}),
							ws.b9)
					});
			},
			model);
	});
var $author$project$Types$ToastInfo = 0;
var $author$project$Update$CardActions$showLinkToast = function (model) {
	return _Utils_update(
		model,
		{
			bm: $elm$core$Maybe$Just(
				{ac: 0, ad: 'カードを関連付けました'})
		});
};
var $author$project$Types$DebouncedSaveTimeout = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Process$sleep = _Process_sleep;
var $author$project$Update$PersistenceActions$withSaveDebounced = function (model) {
	var nextRev = model.d6 + 1;
	return _Utils_Tuple2(
		_Utils_update(
			model,
			{dj: true, d6: nextRev}),
		A2(
			$elm$core$Task$perform,
			function (_v0) {
				return $author$project$Types$PersistenceEvent(
					$author$project$Types$DebouncedSaveTimeout(nextRev));
			},
			$elm$core$Process$sleep(800)));
};
var $author$project$Update$CardActions$finalizePcDrag = F3(
	function (itemId, endPoint, model) {
		var _v0 = model.dU;
		if (_v0.$ === 1) {
			return $author$project$Update$PersistenceActions$withSaveDebounced(
				$author$project$Update$PersistenceActions$markUnsavedChanges(model));
		} else {
			var dragState = _v0.a;
			var _v1 = A2($author$project$Update$CardActions$findHitCard, endPoint, dragState.dS);
			if (!_v1.$) {
				var targetId = _v1.a;
				return $author$project$Update$PersistenceActions$withSaveDebounced(
					$author$project$Update$PersistenceActions$markUnsavedChanges(
						$author$project$Update$CardActions$showLinkToast(
							A3(
								$author$project$Types$pushUndoSnapshot,
								'カード関連付け',
								dragState.dW,
								A2(
									$author$project$Types$updateActiveWorkspaceData,
									function (ws) {
										return _Utils_update(
											ws,
											{
												b1: A3($author$project$Data$NoteCard$addLink, itemId, targetId, ws.b1)
											});
									},
									A3(
										$author$project$Update$CardActions$setCardPosition,
										itemId,
										dragState.dR,
										_Utils_update(
											model,
											{dU: $elm$core$Maybe$Nothing})))))));
			} else {
				return $author$project$Update$PersistenceActions$withSaveDebounced(
					$author$project$Update$PersistenceActions$markUnsavedChanges(
						A3(
							$author$project$Types$pushUndoSnapshot,
							'カード移動',
							dragState.dW,
							_Utils_update(
								model,
								{dU: $elm$core$Maybe$Nothing}))));
			}
		}
	});
var $author$project$DragCanvas$getViewport = function (_v0) {
	var data = _v0;
	return {m: data.m, p: data.p};
};
var $author$project$Types$GotPcCardRects = function (a) {
	return {$: 20, a: a};
};
var $elm$browser$Browser$Dom$getElement = _Browser_getElement;
var $elm$core$Task$onError = _Scheduler_onError;
var $author$project$Update$CardActions$measurePcCardsCmd = function (cardIds) {
	return A2(
		$elm$core$Task$perform,
		A2($elm$core$Basics$composeL, $author$project$Types$CardEvent, $author$project$Types$GotPcCardRects),
		$elm$core$Task$sequence(
			A2(
				$elm$core$List$map,
				function (cid) {
					return A2(
						$elm$core$Task$onError,
						function (err) {
							return $elm$core$Task$succeed(
								_Utils_Tuple2(
									cid,
									$elm$core$Result$Err(err)));
						},
						A2(
							$elm$core$Task$map,
							function (el) {
								return _Utils_Tuple2(
									cid,
									$elm$core$Result$Ok(el));
							},
							$elm$browser$Browser$Dom$getElement('board-card-' + cid)));
				},
				cardIds)));
};
var $author$project$Update$CardActions$moveCardPosition = F3(
	function (cardId, delta, model) {
		return A2(
			$author$project$Types$updateActiveWorkspaceData,
			function (ws) {
				return _Utils_update(
					ws,
					{
						b9: A3(
							$elm$core$Dict$update,
							cardId,
							$elm$core$Maybe$map(
								function (item) {
									return _Utils_update(
										item,
										{
											dV: {eu: item.dV.eu + delta.eu, ev: item.dV.ev + delta.ev}
										});
								}),
							ws.b9)
					});
			},
			model);
	});
var $elm$core$Basics$neq = _Utils_notEqual;
var $author$project$Update$PersistenceActions$withCmd = F2(
	function (cmd, model) {
		return _Utils_Tuple2(model, cmd);
	});
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $author$project$Update$PersistenceActions$withNoCmd = function (model) {
	return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
};
var $author$project$Update$CardActions$handleCanvasOutput = F2(
	function (output, model) {
		switch (output.$) {
			case 0:
				var itemId = output.a;
				var startPoint = output.b;
				var ws = $author$project$Types$activeWorkspaceData(model);
				var otherIds = A2(
					$elm$core$List$filter,
					$elm$core$Basics$neq(itemId),
					A2(
						$elm$core$List$map,
						function ($) {
							return $.a3;
						},
						$author$project$Data$WorkspaceData$activeCards(ws)));
				var origPos = A2(
					$elm$core$Maybe$withDefault,
					{eu: 0, ev: 0},
					A2(
						$elm$core$Maybe$map,
						function ($) {
							return $.dV;
						},
						A2($elm$core$Dict$get, itemId, ws.b9)));
				var dragState = {c4: startPoint, bI: itemId, dl: $elm$core$Maybe$Nothing, dR: origPos, dS: _List_Nil, dW: model.aC};
				return A2(
					$author$project$Update$PersistenceActions$withCmd,
					$author$project$Update$CardActions$measurePcCardsCmd(otherIds),
					_Utils_update(
						model,
						{
							aq: $elm$core$Maybe$Nothing,
							dU: $elm$core$Maybe$Just(dragState),
							d9: $elm$core$Maybe$Just(itemId)
						}));
			case 1:
				var itemId = output.a;
				var delta = output.b;
				var viewport = $author$project$DragCanvas$getViewport(model.R);
				var nextPcDrag = A2(
					$elm$core$Maybe$map,
					function (st) {
						var nextPt = {eu: st.c4.eu + (delta.eu * viewport.p), ev: st.c4.ev + (delta.ev * viewport.p)};
						return _Utils_update(
							st,
							{
								c4: nextPt,
								dl: A2($author$project$Update$CardActions$findHitCard, nextPt, st.dS)
							});
					},
					model.dU);
				return $author$project$Update$PersistenceActions$withNoCmd(
					A3(
						$author$project$Update$CardActions$moveCardPosition,
						itemId,
						delta,
						_Utils_update(
							model,
							{dU: nextPcDrag})));
			case 2:
				var itemId = output.a;
				var endPoint = output.b;
				return A3($author$project$Update$CardActions$finalizePcDrag, itemId, endPoint, model);
			case 3:
				var itemId = output.a;
				return $author$project$Update$PersistenceActions$withNoCmd(
					_Utils_update(
						model,
						{
							d9: $elm$core$Maybe$Just(itemId)
						}));
			default:
				return $author$project$Update$PersistenceActions$withNoCmd(
					_Utils_update(
						model,
						{bX: false, d9: $elm$core$Maybe$Nothing}));
		}
	});
var $author$project$DragCanvas$PendingDrag = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $author$project$DragCanvas$PendingPan = function (a) {
	return {$: 3, a: a};
};
var $author$project$DragCanvas$DraggingItem = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $author$project$DragCanvas$ItemDragEnded = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $author$project$DragCanvas$ItemDragStarted = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $author$project$DragCanvas$ItemMoved = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $author$project$DragCanvas$PanningCanvas = function (a) {
	return {$: 4, a: a};
};
var $author$project$DragCanvas$exceededThreshold = F3(
	function (threshold, a, b) {
		var dy = b.ev - a.ev;
		var dx = b.eu - a.eu;
		return _Utils_cmp((dx * dx) + (dy * dy), threshold * threshold) > -1;
	});
var $author$project$DragCanvas$handlePointerMoved = F3(
	function (config, pointer, data) {
		var _v0 = data.e;
		switch (_v0.$) {
			case 0:
				return _Utils_Tuple2(data, $elm$core$Maybe$Nothing);
			case 1:
				var itemId = _v0.a;
				var startPoint = _v0.b;
				return (!config.ab(itemId)) ? _Utils_Tuple2(
					_Utils_update(
						data,
						{e: $author$project$DragCanvas$NotDragging}),
					$elm$core$Maybe$Nothing) : (A3($author$project$DragCanvas$exceededThreshold, config.aE, startPoint, pointer) ? _Utils_Tuple2(
					_Utils_update(
						data,
						{
							e: A2($author$project$DragCanvas$DraggingItem, itemId, startPoint)
						}),
					$elm$core$Maybe$Just(
						A2($author$project$DragCanvas$ItemDragStarted, itemId, startPoint))) : _Utils_Tuple2(data, $elm$core$Maybe$Nothing));
			case 2:
				var itemId = _v0.a;
				var previous = _v0.b;
				if (config.ab(itemId)) {
					var delta = {eu: (pointer.eu - previous.eu) / data.p, ev: (pointer.ev - previous.ev) / data.p};
					return _Utils_Tuple2(
						_Utils_update(
							data,
							{
								e: A2($author$project$DragCanvas$DraggingItem, itemId, pointer)
							}),
						((!delta.eu) && (!delta.ev)) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
							A2($author$project$DragCanvas$ItemMoved, itemId, delta)));
				} else {
					return _Utils_Tuple2(
						_Utils_update(
							data,
							{e: $author$project$DragCanvas$NotDragging}),
						$elm$core$Maybe$Just(
							A2($author$project$DragCanvas$ItemDragEnded, itemId, pointer)));
				}
			case 3:
				var startPoint = _v0.a;
				return (!config.ae) ? _Utils_Tuple2(
					_Utils_update(
						data,
						{e: $author$project$DragCanvas$NotDragging}),
					$elm$core$Maybe$Nothing) : (A3($author$project$DragCanvas$exceededThreshold, config.aE, startPoint, pointer) ? _Utils_Tuple2(
					_Utils_update(
						data,
						{
							e: $author$project$DragCanvas$PanningCanvas(startPoint)
						}),
					$elm$core$Maybe$Nothing) : _Utils_Tuple2(data, $elm$core$Maybe$Nothing));
			default:
				var previous = _v0.a;
				return config.ae ? _Utils_Tuple2(
					_Utils_update(
						data,
						{
							e: $author$project$DragCanvas$PanningCanvas(pointer),
							m: {eu: data.m.eu + (pointer.eu - previous.eu), ev: data.m.ev + (pointer.ev - previous.ev)}
						}),
					$elm$core$Maybe$Nothing) : _Utils_Tuple2(
					_Utils_update(
						data,
						{e: $author$project$DragCanvas$NotDragging}),
					$elm$core$Maybe$Nothing);
		}
	});
var $author$project$DragCanvas$CanvasClicked = function (a) {
	return {$: 4, a: a};
};
var $author$project$DragCanvas$ItemClicked = function (a) {
	return {$: 3, a: a};
};
var $author$project$DragCanvas$toWorldCoordinates = F2(
	function (_v0, clientPoint) {
		var data = _v0;
		return {eu: ((clientPoint.eu - data.I.eu) - data.m.eu) / data.p, ev: ((clientPoint.ev - data.I.ev) - data.m.ev) / data.p};
	});
var $author$project$DragCanvas$handlePointerUp = F2(
	function (maybePointer, data) {
		var _v0 = data.e;
		switch (_v0.$) {
			case 0:
				return _Utils_Tuple2(data, $elm$core$Maybe$Nothing);
			case 1:
				var itemId = _v0.a;
				return _Utils_Tuple2(
					_Utils_update(
						data,
						{e: $author$project$DragCanvas$NotDragging}),
					$elm$core$Maybe$Just(
						$author$project$DragCanvas$ItemClicked(itemId)));
			case 2:
				var itemId = _v0.a;
				var lastPoint = _v0.b;
				return _Utils_Tuple2(
					_Utils_update(
						data,
						{e: $author$project$DragCanvas$NotDragging}),
					$elm$core$Maybe$Just(
						A2(
							$author$project$DragCanvas$ItemDragEnded,
							itemId,
							A2($elm$core$Maybe$withDefault, lastPoint, maybePointer))));
			case 3:
				var startPoint = _v0.a;
				var worldPoint = A2(
					$author$project$DragCanvas$toWorldCoordinates,
					data,
					A2($elm$core$Maybe$withDefault, startPoint, maybePointer));
				return _Utils_Tuple2(
					_Utils_update(
						data,
						{e: $author$project$DragCanvas$NotDragging}),
					$elm$core$Maybe$Just(
						$author$project$DragCanvas$CanvasClicked(worldPoint)));
			default:
				return _Utils_Tuple2(
					_Utils_update(
						data,
						{e: $author$project$DragCanvas$NotDragging}),
					$elm$core$Maybe$Nothing);
		}
	});
var $elm$core$Basics$clamp = F3(
	function (low, high, number) {
		return (_Utils_cmp(number, low) < 0) ? low : ((_Utils_cmp(number, high) > 0) ? high : number);
	});
var $elm$core$Basics$e = _Basics_e;
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $elm$core$Basics$pow = _Basics_pow;
var $author$project$DragCanvas$zoomAt = F4(
	function (config, deltaY, client, data) {
		var newScale = A3(
			$elm$core$Basics$clamp,
			config.a7,
			config.a5,
			data.p * A2($elm$core$Basics$pow, $elm$core$Basics$e, (-deltaY) * config.br));
		var ratio = newScale / data.p;
		var cy = client.ev - data.I.ev;
		var cx = client.eu - data.I.eu;
		return _Utils_update(
			data,
			{
				m: {eu: cx - ((cx - data.m.eu) * ratio), ev: cy - ((cy - data.m.ev) * ratio)},
				p: newScale
			});
	});
var $author$project$DragCanvas$update = F3(
	function (config, _v0, _v1) {
		var internal = _v0;
		var data = _v1;
		switch (internal.$) {
			case 6:
				return _Utils_Tuple2(data, $elm$core$Maybe$Nothing);
			case 0:
				var itemId = internal.a;
				var pointer = internal.b;
				return config.ab(itemId) ? _Utils_Tuple2(
					_Utils_update(
						data,
						{
							e: A2($author$project$DragCanvas$PendingDrag, itemId, pointer)
						}),
					$elm$core$Maybe$Nothing) : _Utils_Tuple2(data, $elm$core$Maybe$Nothing);
			case 1:
				var pointer = internal.a;
				return config.ae ? _Utils_Tuple2(
					_Utils_update(
						data,
						{
							e: $author$project$DragCanvas$PendingPan(pointer)
						}),
					$elm$core$Maybe$Nothing) : _Utils_Tuple2(data, $elm$core$Maybe$Nothing);
			case 2:
				var pointer = internal.a;
				return A3($author$project$DragCanvas$handlePointerMoved, config, pointer, data);
			case 3:
				var maybePointer = internal.a;
				return A2($author$project$DragCanvas$handlePointerUp, maybePointer, data);
			case 4:
				return _Utils_Tuple2(
					_Utils_update(
						data,
						{e: $author$project$DragCanvas$NotDragging}),
					$elm$core$Maybe$Nothing);
			default:
				var deltaY = internal.a;
				var client = internal.b;
				return config.aV ? _Utils_Tuple2(
					A4($author$project$DragCanvas$zoomAt, config, deltaY, client, data),
					$elm$core$Maybe$Nothing) : _Utils_Tuple2(data, $elm$core$Maybe$Nothing);
		}
	});
var $author$project$Types$GotCanvasElementForCreateCard = function (a) {
	return {$: 1, a: a};
};
var $author$project$Types$NoOpCard = {$: 26};
var $elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var $elm_community$list_extra$List$Extra$findIndexHelp = F3(
	function (index, predicate, list) {
		findIndexHelp:
		while (true) {
			if (!list.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var x = list.a;
				var xs = list.b;
				if (predicate(x)) {
					return $elm$core$Maybe$Just(index);
				} else {
					var $temp$index = index + 1,
						$temp$predicate = predicate,
						$temp$list = xs;
					index = $temp$index;
					predicate = $temp$predicate;
					list = $temp$list;
					continue findIndexHelp;
				}
			}
		}
	});
var $elm_community$list_extra$List$Extra$findIndex = $elm_community$list_extra$List$Extra$findIndexHelp(0);
var $elm_community$list_extra$List$Extra$elemIndex = function (x) {
	return $elm_community$list_extra$List$Extra$findIndex(
		$elm$core$Basics$eq(x));
};
var $author$project$Update$CardActions$insertRelative = F4(
	function (item, anchor, isBefore, list) {
		var _v0 = A2($elm_community$list_extra$List$Extra$elemIndex, anchor, list);
		if (_v0.$ === 1) {
			return _Utils_ap(
				list,
				_List_fromArray(
					[item]));
		} else {
			var idx = _v0.a;
			var splitIdx = isBefore ? idx : (idx + 1);
			return _Utils_ap(
				A2($elm$core$List$take, splitIdx, list),
				_Utils_ap(
					_List_fromArray(
						[item]),
					A2($elm$core$List$drop, splitIdx, list)));
		}
	});
var $author$project$Update$CardActions$reorderCard = F4(
	function (draggedId, targetId, isBefore, model) {
		return A2(
			$author$project$Types$updateActiveWorkspaceData,
			function (ws) {
				var activeKeys = A2(
					$elm$core$List$map,
					function ($) {
						return $.a3;
					},
					$author$project$Data$WorkspaceData$activeCards(ws));
				var currentOrder = $elm_community$list_extra$List$Extra$unique(
					A2(
						$elm$core$List$filter,
						function (cid) {
							return A2($elm$core$Dict$member, cid, ws.b9);
						},
						_Utils_ap(ws.bA, activeKeys)));
				var withoutDragged = A2(
					$elm$core$List$filter,
					$elm$core$Basics$neq(draggedId),
					currentOrder);
				var nextOrder = A4($author$project$Update$CardActions$insertRelative, draggedId, targetId, isBefore, withoutDragged);
				return _Utils_update(
					ws,
					{bA: nextOrder});
			},
			model);
	});
var $author$project$Update$CardActions$applyMobileDrop = F2(
	function (dragState, model) {
		var _v0 = dragState.da;
		if (_v0.$ === 1) {
			return model;
		} else {
			switch (_v0.a.$) {
				case 2:
					var targetId = _v0.a.a;
					return $author$project$Update$CardActions$showLinkToast(
						A2(
							$author$project$Types$updateActiveWorkspaceData,
							function (ws) {
								return _Utils_update(
									ws,
									{
										b1: A3($author$project$Data$NoteCard$addLink, dragState.bI, targetId, ws.b1)
									});
							},
							model));
				case 0:
					var targetId = _v0.a.a;
					return A4($author$project$Update$CardActions$reorderCard, dragState.bI, targetId, true, model);
				default:
					var targetId = _v0.a.a;
					return A4($author$project$Update$CardActions$reorderCard, dragState.bI, targetId, false, model);
			}
		}
	});
var $elm$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return $elm$core$Task$command(
			A2(
				$elm$core$Task$onError,
				A2(
					$elm$core$Basics$composeL,
					A2($elm$core$Basics$composeL, $elm$core$Task$succeed, resultToMessage),
					$elm$core$Result$Err),
				A2(
					$elm$core$Task$andThen,
					A2(
						$elm$core$Basics$composeL,
						A2($elm$core$Basics$composeL, $elm$core$Task$succeed, resultToMessage),
						$elm$core$Result$Ok),
					task)));
	});
var $author$project$Update$CardActions$clearIfMatches = F2(
	function (targetId, current) {
		return _Utils_eq(
			current,
			$elm$core$Maybe$Just(targetId)) ? $elm$core$Maybe$Nothing : current;
	});
var $elm$core$String$trim = _String_trim;
var $author$project$Update$CardActions$updateCardContent = F3(
	function (cardId, fn, model) {
		return A2(
			$author$project$Types$updateActiveWorkspaceData,
			function (ws) {
				return _Utils_update(
					ws,
					{
						b9: A3(
							$elm$core$Dict$update,
							cardId,
							$elm$core$Maybe$map(
								function (item) {
									return _Utils_update(
										item,
										{
											c2: fn(item.c2)
										});
								}),
							ws.b9)
					});
			},
			model);
	});
var $author$project$Update$CardActions$applyEditorContent = F2(
	function (ed, model) {
		var trimmedTitle = $elm$core$String$isEmpty(
			$elm$core$String$trim(ed.ek)) ? '無題のカード' : ed.ek;
		return A3(
			$author$project$Update$CardActions$updateCardContent,
			ed.bz,
			function (c) {
				return _Utils_update(
					c,
					{cX: ed.cX, ec: ed.ec, ek: trimmedTitle});
			},
			model);
	});
var $author$project$Data$NoteCard$removeLinksForCard = F2(
	function (targetId, links) {
		return A2(
			$elm$core$List$filter,
			function (_v0) {
				var a = _v0.a;
				var b = _v0.b;
				return (!_Utils_eq(a, targetId)) && (!_Utils_eq(b, targetId));
			},
			links);
	});
var $author$project$Update$CardActions$deleteCardPermanently = F2(
	function (cardId, model) {
		return A2(
			$author$project$Types$updateActiveWorkspaceData,
			function (ws) {
				return _Utils_update(
					ws,
					{
						bA: A2(
							$elm$core$List$filter,
							$elm$core$Basics$neq(cardId),
							ws.bA),
						b1: A2($author$project$Data$NoteCard$removeLinksForCard, cardId, ws.b1),
						b9: A2($elm$core$Dict$remove, cardId, ws.b9)
					});
			},
			model);
	});
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$Basics$modBy = _Basics_modBy;
var $author$project$Data$WorkspaceData$nextCardPosition = function (ws) {
	var cardList = $author$project$Data$WorkspaceData$activeCards(ws);
	var count = $elm$core$List$length(cardList);
	if (!count) {
		return {eu: 48, ev: 48};
	} else {
		var row = (count / 4) | 0;
		var col = A2($elm$core$Basics$modBy, 4, count);
		return {eu: 48 + (col * 312), ev: 48 + (row * 220)};
	}
};
var $author$project$Update$CardActions$insertMovedCardInto = F3(
	function (targetWsId, srcCard, model) {
		var appData = model.aC;
		var addCardTo = function (ws) {
			var statusExists = A2(
				$elm$core$List$any,
				function (opt) {
					return _Utils_eq(opt.a3, srcCard.c2.ec);
				},
				ws.cA);
			var origContent = srcCard.c2;
			var nextStatusId = statusExists ? srcCard.c2.ec : A2(
				$elm$core$Maybe$withDefault,
				srcCard.c2.ec,
				A2(
					$elm$core$Maybe$map,
					function ($) {
						return $.a3;
					},
					$elm$core$List$head(ws.cA)));
			var movedCard = _Utils_update(
				srcCard,
				{
					c2: _Utils_update(
						origContent,
						{ec: nextStatusId}),
					dV: $author$project$Data$WorkspaceData$nextCardPosition(ws)
				});
			return _Utils_update(
				ws,
				{
					bA: _Utils_ap(
						ws.bA,
						_List_fromArray(
							[movedCard.a3])),
					b9: A3($elm$core$Dict$insert, movedCard.a3, movedCard, ws.b9)
				});
		};
		var nextAppData = function () {
			if (!targetWsId.$) {
				return _Utils_update(
					appData,
					{
						aK: addCardTo(appData.aK)
					});
			} else {
				var pid = targetWsId.a;
				return _Utils_update(
					appData,
					{
						aN: A3(
							$elm$core$Dict$update,
							pid,
							$elm$core$Maybe$map(addCardTo),
							appData.aN)
					});
			}
		}();
		return _Utils_update(
			model,
			{aC: nextAppData});
	});
var $author$project$Update$CardActions$parseWorkspaceKey = function (key) {
	return (key === 'memo') ? $elm$core$Maybe$Just($author$project$Data$WorkspaceData$MemoWorkspace) : (A2($elm$core$String$startsWith, 'project:', key) ? $elm$core$Maybe$Just(
		$author$project$Data$WorkspaceData$ProjectId(
			A2($elm$core$String$dropLeft, 8, key))) : $elm$core$Maybe$Nothing);
};
var $author$project$Update$CardActions$moveCardToWorkspace = F3(
	function (cardId, targetKey, model) {
		var _v0 = $author$project$Update$CardActions$parseWorkspaceKey(targetKey);
		if (_v0.$ === 1) {
			return model;
		} else {
			var targetWsId = _v0.a;
			if (_Utils_eq(targetWsId, model.aC.aB)) {
				return model;
			} else {
				var srcWs = $author$project$Types$activeWorkspaceData(model);
				var _v1 = A2($elm$core$Dict$get, cardId, srcWs.b9);
				if (_v1.$ === 1) {
					return model;
				} else {
					var srcCard = _v1.a;
					return function (m) {
						return _Utils_update(
							m,
							{
								bm: $elm$core$Maybe$Just(
									{ac: 0, ad: 'カードを別の作業場へ移動しました'})
							});
					}(
						A3(
							$author$project$Update$CardActions$insertMovedCardInto,
							targetWsId,
							srcCard,
							A2($author$project$Update$CardActions$deleteCardPermanently, cardId, model)));
				}
			}
		}
	});
var $elm$json$Json$Encode$dict = F3(
	function (toKey, toValue, dictionary) {
		return _Json_wrap(
			A3(
				$elm$core$Dict$foldl,
				F3(
					function (key, value, obj) {
						return A3(
							_Json_addField,
							toKey(key),
							toValue(value),
							obj);
					}),
				_Json_emptyObject(0),
				dictionary));
	});
var $elm$json$Json$Encode$bool = _Json_wrap;
var $elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				$elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(0),
				entries));
	});
var $elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, obj) {
					var k = _v0.a;
					var v = _v0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(0),
			pairs));
};
var $elm$json$Json$Encode$string = _Json_wrap;
var $author$project$Data$StyleMod$encode = function (modItem) {
	var _v0 = modItem.ac;
	if (!_v0.$) {
		var details = _v0.a;
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'id',
					$elm$json$Json$Encode$string(modItem.a3)),
					_Utils_Tuple2(
					'name',
					$elm$json$Json$Encode$string(modItem.b4)),
					_Utils_Tuple2(
					'enabled',
					$elm$json$Json$Encode$bool(modItem.dd)),
					_Utils_Tuple2(
					'fontUrls',
					A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, modItem.D)),
					_Utils_Tuple2(
					'kind',
					$elm$json$Json$Encode$string('token_json')),
					_Utils_Tuple2(
					'author',
					$elm$json$Json$Encode$string(details.ap)),
					_Utils_Tuple2(
					'description',
					$elm$json$Json$Encode$string(details.as)),
					_Utils_Tuple2(
					'variables',
					A3($elm$json$Json$Encode$dict, $elm$core$Basics$identity, $elm$json$Json$Encode$string, details.aj))
				]));
	} else {
		var details = _v0.a;
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'id',
					$elm$json$Json$Encode$string(modItem.a3)),
					_Utils_Tuple2(
					'name',
					$elm$json$Json$Encode$string(modItem.b4)),
					_Utils_Tuple2(
					'enabled',
					$elm$json$Json$Encode$bool(modItem.dd)),
					_Utils_Tuple2(
					'fontUrls',
					A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, modItem.D)),
					_Utils_Tuple2(
					'kind',
					$elm$json$Json$Encode$string('custom_css')),
					_Utils_Tuple2(
					'cssText',
					$elm$json$Json$Encode$string(details.aY))
				]));
	}
};
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $elm$json$Json$Encode$int = _Json_wrap;
var $author$project$Data$TimeSchedule$monthToInt = function (month) {
	switch (month) {
		case 0:
			return 1;
		case 1:
			return 2;
		case 2:
			return 3;
		case 3:
			return 4;
		case 4:
			return 5;
		case 5:
			return 6;
		case 6:
			return 7;
		case 7:
			return 8;
		case 8:
			return 9;
		case 9:
			return 10;
		case 10:
			return 11;
		default:
			return 12;
	}
};
var $author$project$Data$TimeSchedule$weekdayToString = function (wd) {
	switch (wd) {
		case 0:
			return 'Mon';
		case 1:
			return 'Tue';
		case 2:
			return 'Wed';
		case 3:
			return 'Thu';
		case 4:
			return 'Fri';
		case 5:
			return 'Sat';
		default:
			return 'Sun';
	}
};
var $author$project$Data$BackupStorage$encodeRecurrence = function (rec) {
	switch (rec.$) {
		case 0:
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'kind',
						$elm$json$Json$Encode$string('daily'))
					]));
		case 1:
			var days = rec.a;
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'kind',
						$elm$json$Json$Encode$string('weekly')),
						_Utils_Tuple2(
						'weekdays',
						A2(
							$elm$json$Json$Encode$list,
							A2($elm$core$Basics$composeR, $author$project$Data$TimeSchedule$weekdayToString, $elm$json$Json$Encode$string),
							days))
					]));
		default:
			var parts = rec.a;
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'kind',
						$elm$json$Json$Encode$string('once')),
						_Utils_Tuple2(
						'year',
						$elm$json$Json$Encode$int(parts.cQ)),
						_Utils_Tuple2(
						'month',
						$elm$json$Json$Encode$int(
							$author$project$Data$TimeSchedule$monthToInt(parts.b3))),
						_Utils_Tuple2(
						'day',
						$elm$json$Json$Encode$int(parts.bE))
					]));
	}
};
var $author$project$Data$BackupStorage$encodeTiming = function (timing) {
	if (!timing.$) {
		var t = timing.a;
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'kind',
					$elm$json$Json$Encode$string('fixed')),
					_Utils_Tuple2(
					'hour',
					$elm$json$Json$Encode$int(t.a2)),
					_Utils_Tuple2(
					'minute',
					$elm$json$Json$Encode$int(t.a8))
				]));
	} else {
		var w = timing.a;
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'kind',
					$elm$json$Json$Encode$string('random')),
					_Utils_Tuple2(
					'rangeStartHour',
					$elm$json$Json$Encode$int(w.cm)),
					_Utils_Tuple2(
					'rangeStartMinute',
					$elm$json$Json$Encode$int(w.cn)),
					_Utils_Tuple2(
					'rangeEndHour',
					$elm$json$Json$Encode$int(w.ck)),
					_Utils_Tuple2(
					'rangeEndMinute',
					$elm$json$Json$Encode$int(w.cl))
				]));
	}
};
var $author$project$Data$BackupStorage$encodeWorkSchedule = function (s) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'id',
				$elm$json$Json$Encode$string(s.a3)),
				_Utils_Tuple2(
				'projectId',
				$elm$json$Json$Encode$string(s.dX)),
				_Utils_Tuple2(
				'enabled',
				$elm$json$Json$Encode$bool(s.dd)),
				_Utils_Tuple2(
				'timing',
				$author$project$Data$BackupStorage$encodeTiming(s.ei)),
				_Utils_Tuple2(
				'durationMinutes',
				$elm$json$Json$Encode$int(s.db)),
				_Utils_Tuple2(
				'recurrence',
				$author$project$Data$BackupStorage$encodeRecurrence(s.d_))
			]));
};
var $author$project$Data$WorkspaceData$patternToString = function (pattern) {
	switch (pattern) {
		case 0:
			return 'plain';
		case 1:
			return 'dots';
		default:
			return 'grid';
	}
};
var $author$project$Data$WorkspaceData$toneToString = function (tone) {
	switch (tone) {
		case 0:
			return 'default';
		case 1:
			return 'warm';
		case 2:
			return 'cool';
		case 3:
			return 'mint';
		case 4:
			return 'lavender';
		default:
			return 'sand';
	}
};
var $author$project$Data$BackupStorage$encodeBackground = function (bg) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'tone',
				$elm$json$Json$Encode$string(
					$author$project$Data$WorkspaceData$toneToString(bg.el))),
				_Utils_Tuple2(
				'pattern',
				$elm$json$Json$Encode$string(
					$author$project$Data$WorkspaceData$patternToString(bg.dT)))
			]));
};
var $author$project$Data$BackupStorage$encodeCardLink = function (_v0) {
	var a = _v0.a;
	var b = _v0.b;
	return A2(
		$elm$json$Json$Encode$list,
		$elm$json$Json$Encode$string,
		_List_fromArray(
			[a, b]));
};
var $author$project$Data$BackupStorage$encodeCardContent = function (content) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'title',
				$elm$json$Json$Encode$string(content.ek)),
				_Utils_Tuple2(
				'body',
				$elm$json$Json$Encode$string(content.cX)),
				_Utils_Tuple2(
				'status',
				$elm$json$Json$Encode$string(content.ec)),
				_Utils_Tuple2(
				'isCollapsed',
				$elm$json$Json$Encode$bool(content.dr)),
				_Utils_Tuple2(
				'isArchived',
				$elm$json$Json$Encode$bool(content.dq))
			]));
};
var $elm$json$Json$Encode$float = _Json_wrap;
var $author$project$Data$BackupStorage$encodePosition = function (pos) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'x',
				$elm$json$Json$Encode$float(pos.eu)),
				_Utils_Tuple2(
				'y',
				$elm$json$Json$Encode$float(pos.ev))
			]));
};
var $author$project$Data$BackupStorage$encodeNoteCard = function (noteCard) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'id',
				$elm$json$Json$Encode$string(noteCard.a3)),
				_Utils_Tuple2(
				'position',
				$author$project$Data$BackupStorage$encodePosition(noteCard.dV)),
				_Utils_Tuple2(
				'content',
				$author$project$Data$BackupStorage$encodeCardContent(noteCard.c2))
			]));
};
var $author$project$Data$NoteCard$statusColorToString = function (color) {
	switch (color) {
		case 0:
			return 'yellow';
		case 1:
			return 'blue';
		case 2:
			return 'green';
		case 3:
			return 'orange';
		case 4:
			return 'purple';
		case 5:
			return 'gray';
		case 6:
			return 'pink';
		default:
			return 'teal';
	}
};
var $author$project$Data$BackupStorage$encodeStatusOption = function (opt) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'id',
				$elm$json$Json$Encode$string(opt.a3)),
				_Utils_Tuple2(
				'label',
				$elm$json$Json$Encode$string(opt.du)),
				_Utils_Tuple2(
				'color',
				$elm$json$Json$Encode$string(
					$author$project$Data$NoteCard$statusColorToString(opt.c1)))
			]));
};
var $author$project$Data$BackupStorage$encodeWorkspace = function (ws) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'name',
				$elm$json$Json$Encode$string(ws.b4)),
				_Utils_Tuple2(
				'background',
				$author$project$Data$BackupStorage$encodeBackground(ws.bw)),
				_Utils_Tuple2(
				'statusOptions',
				A2($elm$json$Json$Encode$list, $author$project$Data$BackupStorage$encodeStatusOption, ws.cA)),
				_Utils_Tuple2(
				'cards',
				A3($elm$json$Json$Encode$dict, $elm$core$Basics$identity, $author$project$Data$BackupStorage$encodeNoteCard, ws.b9)),
				_Utils_Tuple2(
				'cardOrder',
				A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, ws.bA)),
				_Utils_Tuple2(
				'links',
				A2($elm$json$Json$Encode$list, $author$project$Data$BackupStorage$encodeCardLink, ws.b1))
			]));
};
var $author$project$Data$BackupStorage$encodeWorkspaceId = function (wsId) {
	if (!wsId.$) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'type',
					$elm$json$Json$Encode$string('memo'))
				]));
	} else {
		var pid = wsId.a;
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'type',
					$elm$json$Json$Encode$string('project')),
					_Utils_Tuple2(
					'id',
					$elm$json$Json$Encode$string(pid))
				]));
	}
};
var $author$project$Data$BackupStorage$schemaVersion = 1;
var $author$project$Data$BackupStorage$encode = function (data) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'schemaVersion',
				$elm$json$Json$Encode$int($author$project$Data$BackupStorage$schemaVersion)),
				_Utils_Tuple2(
				'memo',
				$author$project$Data$BackupStorage$encodeWorkspace(data.aK)),
				_Utils_Tuple2(
				'projects',
				A3($elm$json$Json$Encode$dict, $elm$core$Basics$identity, $author$project$Data$BackupStorage$encodeWorkspace, data.aN)),
				_Utils_Tuple2(
				'projectOrder',
				A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, data.aM)),
				_Utils_Tuple2(
				'activeWorkspace',
				$author$project$Data$BackupStorage$encodeWorkspaceId(data.aB)),
				_Utils_Tuple2(
				'schedules',
				A2($elm$json$Json$Encode$list, $author$project$Data$BackupStorage$encodeWorkSchedule, data.aW)),
				_Utils_Tuple2(
				'handledSlots',
				A3($elm$json$Json$Encode$dict, $elm$core$Basics$identity, $elm$json$Json$Encode$string, data.aH)),
				_Utils_Tuple2(
				'styleMods',
				A2($elm$json$Json$Encode$list, $author$project$Data$StyleMod$encode, data.aS))
			]));
};
var $author$project$Ports$saveToStorage = _Platform_outgoingPort('saveToStorage', $elm$core$Basics$identity);
var $author$project$Update$PersistenceActions$withSaveImmediate = function (model) {
	var nextRev = model.d6 + 1;
	return _Utils_Tuple2(
		_Utils_update(
			model,
			{dj: false, d6: nextRev}),
		$author$project$Ports$saveToStorage(
			$author$project$Data$BackupStorage$encode(model.aC)));
};
var $author$project$Data$WorkspaceData$workspaceIdToKey = function (wsId) {
	if (!wsId.$) {
		return 'memo';
	} else {
		var pid = wsId.a;
		return 'project:' + pid;
	}
};
var $author$project$Update$CardActions$commitEditorIfOpen = function (model) {
	var _v0 = model.c_;
	if (_v0.$ === 1) {
		return $author$project$Update$PersistenceActions$withNoCmd(model);
	} else {
		var ed = _v0.a;
		var prevData = model.aC;
		var currentWsKey = $author$project$Data$WorkspaceData$workspaceIdToKey(model.aC.aB);
		return $author$project$Update$PersistenceActions$withSaveImmediate(
			$author$project$Update$PersistenceActions$markUnsavedChanges(
				A3(
					$author$project$Types$pushUndoSnapshot,
					'カード編集',
					prevData,
					function (m) {
						return _Utils_update(
							m,
							{c_: $elm$core$Maybe$Nothing});
					}(
						function (m) {
							return (!_Utils_eq(ed.dB, currentWsKey)) ? A3($author$project$Update$CardActions$moveCardToWorkspace, ed.bz, ed.dB, m) : m;
						}(
							A2($author$project$Update$CardActions$applyEditorContent, ed, model))))));
	}
};
var $author$project$Update$CardActions$addNewCard = F3(
	function (newId, maybePos, model) {
		return A2(
			$author$project$Types$updateActiveWorkspaceData,
			function (ws) {
				var pos = A2(
					$elm$core$Maybe$withDefault,
					$author$project$Data$WorkspaceData$nextCardPosition(ws),
					maybePos);
				var defaultStatusId = A2(
					$elm$core$Maybe$withDefault,
					'idea',
					A2(
						$elm$core$Maybe$map,
						function ($) {
							return $.a3;
						},
						$elm$core$List$head(ws.cA)));
				var createdCard = {
					c2: {cX: '', dq: false, dr: false, ec: defaultStatusId, ek: '新しいカード'},
					a3: newId,
					dV: pos
				};
				return _Utils_update(
					ws,
					{
						bA: _Utils_ap(
							ws.bA,
							_List_fromArray(
								[newId])),
						b9: A3($elm$core$Dict$insert, newId, createdCard, ws.b9)
					});
			},
			_Utils_update(
				model,
				{
					d9: $elm$core$Maybe$Just(newId)
				}));
	});
var $elm$random$Random$Generator = $elm$core$Basics$identity;
var $elm$core$Bitwise$and = _Bitwise_and;
var $elm$core$Bitwise$xor = _Bitwise_xor;
var $elm$random$Random$peel = function (_v0) {
	var state = _v0.a;
	var word = (state ^ (state >>> ((state >>> 28) + 4))) * 277803737;
	return ((word >>> 22) ^ word) >>> 0;
};
var $elm$random$Random$int = F2(
	function (a, b) {
		return function (seed0) {
			var _v0 = (_Utils_cmp(a, b) < 0) ? _Utils_Tuple2(a, b) : _Utils_Tuple2(b, a);
			var lo = _v0.a;
			var hi = _v0.b;
			var range = (hi - lo) + 1;
			if (!((range - 1) & range)) {
				return _Utils_Tuple2(
					(((range - 1) & $elm$random$Random$peel(seed0)) >>> 0) + lo,
					$elm$random$Random$next(seed0));
			} else {
				var threshhold = (((-range) >>> 0) % range) >>> 0;
				var accountForBias = function (seed) {
					accountForBias:
					while (true) {
						var x = $elm$random$Random$peel(seed);
						var seedN = $elm$random$Random$next(seed);
						if (_Utils_cmp(x, threshhold) < 0) {
							var $temp$seed = seedN;
							seed = $temp$seed;
							continue accountForBias;
						} else {
							return _Utils_Tuple2((x % range) + lo, seedN);
						}
					}
				};
				return accountForBias(seed0);
			}
		};
	});
var $elm$random$Random$map2 = F3(
	function (func, _v0, _v1) {
		var genA = _v0;
		var genB = _v1;
		return function (seed0) {
			var _v2 = genA(seed0);
			var a = _v2.a;
			var seed1 = _v2.b;
			var _v3 = genB(seed1);
			var b = _v3.a;
			var seed2 = _v3.b;
			return _Utils_Tuple2(
				A2(func, a, b),
				seed2);
		};
	});
var $elm$random$Random$step = F2(
	function (_v0, seed) {
		var generator = _v0;
		return generator(seed);
	});
var $author$project$Types$nextId = F2(
	function (prefix, model) {
		var generator = A3(
			$elm$random$Random$map2,
			F2(
				function (a, b) {
					return prefix + ('-' + ($elm$core$String$fromInt(a) + ('-' + $elm$core$String$fromInt(b))));
				}),
			A2($elm$random$Random$int, 100000, 999999),
			A2($elm$random$Random$int, 100000, 999999));
		var _v0 = A2($elm$random$Random$step, generator, model.bf);
		var generatedId = _v0.a;
		var nextSeed = _v0.b;
		return _Utils_Tuple2(
			generatedId,
			_Utils_update(
				model,
				{bf: nextSeed}));
	});
var $author$project$Update$CardActions$openEditorFor = F2(
	function (cardId, model) {
		var _v0 = A2(
			$elm$core$Dict$get,
			cardId,
			$author$project$Types$activeWorkspaceData(model).b9);
		if (_v0.$ === 1) {
			return model;
		} else {
			var targetCard = _v0.a;
			return _Utils_update(
				model,
				{
					c_: $elm$core$Maybe$Just(
						{
							cX: targetCard.c2.cX,
							bz: targetCard.a3,
							dB: $author$project$Data$WorkspaceData$workspaceIdToKey(model.aC.aB),
							ec: targetCard.c2.ec,
							ek: targetCard.c2.ek
						}),
					d9: $elm$core$Maybe$Just(cardId)
				});
		}
	});
var $author$project$Update$CardActions$createCardAtPosition = F2(
	function (maybePos, model) {
		var prevData = model.aC;
		var _v0 = A2($author$project$Types$nextId, 'card', model);
		var newCardId = _v0.a;
		var modelWithSeed = _v0.b;
		return $author$project$Update$PersistenceActions$withSaveDebounced(
			$author$project$Update$PersistenceActions$markUnsavedChanges(
				A3(
					$author$project$Types$pushUndoSnapshot,
					'カード作成',
					prevData,
					A2(
						$author$project$Update$CardActions$openEditorFor,
						newCardId,
						A3($author$project$Update$CardActions$addNewCard, newCardId, maybePos, modelWithSeed)))));
	});
var $author$project$Update$CardActions$insertAfterInList = F3(
	function (anchor, item, list) {
		var _v0 = A2($elm_community$list_extra$List$Extra$elemIndex, anchor, list);
		if (_v0.$ === 1) {
			return _Utils_ap(
				list,
				_List_fromArray(
					[item]));
		} else {
			var idx = _v0.a;
			var before = A2($elm$core$List$take, idx + 1, list);
			var after = A2($elm$core$List$drop, idx + 1, list);
			return _Utils_ap(
				before,
				_Utils_ap(
					_List_fromArray(
						[item]),
					after));
		}
	});
var $author$project$Update$CardActions$duplicateCard = F3(
	function (sourceId, newId, model) {
		return A2(
			$author$project$Types$updateActiveWorkspaceData,
			function (ws) {
				var _v0 = A2($elm$core$Dict$get, sourceId, ws.b9);
				if (_v0.$ === 1) {
					return ws;
				} else {
					var srcCard = _v0.a;
					var nextOrder = A3($author$project$Update$CardActions$insertAfterInList, sourceId, newId, ws.bA);
					var copiedCard = {
						c2: {cX: srcCard.c2.cX, dq: false, dr: false, ec: srcCard.c2.ec, ek: srcCard.c2.ek + ' (コピー)'},
						a3: newId,
						dV: {eu: srcCard.dV.eu + 32, ev: srcCard.dV.ev + 32}
					};
					return _Utils_update(
						ws,
						{
							bA: nextOrder,
							b9: A3($elm$core$Dict$insert, newId, copiedCard, ws.b9)
						});
				}
			},
			_Utils_update(
				model,
				{
					d9: $elm$core$Maybe$Just(newId)
				}));
	});
var $author$project$Update$CardActions$elementToRect = F2(
	function (cid, el) {
		return {bz: cid, a1: el.r.a1, dv: el.r.eu - el.bn.eu, em: el.r.ev - el.bn.ev, bp: el.r.bp};
	});
var $elm$core$Basics$abs = function (n) {
	return (n < 0) ? (-n) : n;
};
var $author$project$Update$CardActions$findNonOverlappingPosition = F3(
	function (basePos, existingCards, step) {
		findNonOverlappingPosition:
		while (true) {
			if (step >= 10) {
				return basePos;
			} else {
				var candidate = {eu: basePos.eu + (step * 24), ev: basePos.ev + (step * 24)};
				var tooClose = A2(
					$elm$core$List$any,
					function (c) {
						return ($elm$core$Basics$abs(c.dV.eu - candidate.eu) < 20) && ($elm$core$Basics$abs(c.dV.ev - candidate.ev) < 20);
					},
					existingCards);
				if (tooClose) {
					var $temp$basePos = basePos,
						$temp$existingCards = existingCards,
						$temp$step = step + 1;
					basePos = $temp$basePos;
					existingCards = $temp$existingCards;
					step = $temp$step;
					continue findNonOverlappingPosition;
				} else {
					return candidate;
				}
			}
		}
	});
var $author$project$Types$isMobileViewport = function (model) {
	return model.cM < 768;
};
var $author$project$Types$GotCanvasElementForCenter = F2(
	function (a, b) {
		return {$: 18, a: a, b: b};
	});
var $author$project$Types$GotMobileScrollElements = F2(
	function (a, b) {
		return {$: 19, a: a, b: b};
	});
var $elm$core$Tuple$pair = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var $author$project$Update$CardActions$jumpToCard = F2(
	function (cardId, model) {
		if ($author$project$Types$isMobileViewport(model)) {
			var task = A3(
				$elm$core$Task$map2,
				$elm$core$Tuple$pair,
				$elm$browser$Browser$Dom$getElement('mobile-list-scroll'),
				$elm$browser$Browser$Dom$getElement('mobile-card-' + cardId));
			return A2(
				$author$project$Update$PersistenceActions$withCmd,
				A2(
					$elm$core$Task$attempt,
					A2(
						$elm$core$Basics$composeL,
						$author$project$Types$CardEvent,
						$author$project$Types$GotMobileScrollElements(cardId)),
					task),
				model);
		} else {
			return A2(
				$author$project$Update$PersistenceActions$withCmd,
				A2(
					$elm$core$Task$attempt,
					A2(
						$elm$core$Basics$composeL,
						$author$project$Types$CardEvent,
						$author$project$Types$GotCanvasElementForCenter(cardId)),
					$elm$browser$Browser$Dom$getElement('board-canvas')),
				_Utils_update(
					model,
					{
						d9: $elm$core$Maybe$Just(cardId)
					}));
		}
	});
var $author$project$Update$CardActions$mapEditor = F2(
	function (fn, model) {
		return _Utils_update(
			model,
			{
				c_: A2($elm$core$Maybe$map, fn, model.c_)
			});
	});
var $author$project$Types$GotMobileCardRects = function (a) {
	return {$: 25, a: a};
};
var $author$project$Update$CardActions$measureMobileCardsCmd = function (cardIds) {
	return A2(
		$elm$core$Task$perform,
		A2($elm$core$Basics$composeL, $author$project$Types$CardEvent, $author$project$Types$GotMobileCardRects),
		$elm$core$Task$sequence(
			A2(
				$elm$core$List$map,
				function (cid) {
					return A2(
						$elm$core$Task$onError,
						function (err) {
							return $elm$core$Task$succeed(
								_Utils_Tuple2(
									cid,
									$elm$core$Result$Err(err)));
						},
						A2(
							$elm$core$Task$map,
							function (el) {
								return _Utils_Tuple2(
									cid,
									$elm$core$Result$Ok(el));
							},
							$elm$browser$Browser$Dom$getElement('mobile-card-' + cid)));
				},
				cardIds)));
};
var $elm$browser$Browser$Dom$focus = _Browser_call('focus');
var $author$project$Update$CardActions$openEditorWithFocus = F2(
	function (cardId, model) {
		var shouldFocusBody = A2(
			$elm$core$Maybe$withDefault,
			false,
			A2(
				$elm$core$Maybe$map,
				function (c) {
					return !$elm$core$String$isEmpty(
						$elm$core$String$trim(c.c2.cX));
				},
				A2(
					$elm$core$Dict$get,
					cardId,
					$author$project$Types$activeWorkspaceData(model).b9)));
		var nextModel = A2($author$project$Update$CardActions$openEditorFor, cardId, model);
		var focusCmd = shouldFocusBody ? A2(
			$elm$core$Task$attempt,
			function (_v1) {
				return $author$project$Types$CardEvent($author$project$Types$NoOpCard);
			},
			A2(
				$elm$core$Task$andThen,
				function (_v0) {
					return $elm$browser$Browser$Dom$focus('card-editor-body');
				},
				$elm$core$Process$sleep(15))) : $elm$core$Platform$Cmd$none;
		return _Utils_Tuple2(nextModel, focusCmd);
	});
var $author$project$Data$NoteCard$removeLink = F3(
	function (idA, idB, links) {
		var _v0 = A2($author$project$Data$NoteCard$normalizeLink, idA, idB);
		if (_v0.$ === 1) {
			return links;
		} else {
			var pair = _v0.a;
			return A2(
				$elm$core$List$filter,
				$elm$core$Basics$neq(pair),
				links);
		}
	});
var $author$project$DragCanvas$setCanvasPosition = F2(
	function (origin, _v0) {
		var data = _v0;
		return _Utils_update(
			data,
			{I: origin});
	});
var $elm$browser$Browser$Dom$setViewportOf = _Browser_setViewportOf;
var $elm_community$list_extra$List$Extra$getAt = F2(
	function (idx, xs) {
		return (idx < 0) ? $elm$core$Maybe$Nothing : $elm$core$List$head(
			A2($elm$core$List$drop, idx, xs));
	});
var $author$project$Update$CardActions$stepStatusId = F3(
	function (deltaY, currentSid, options) {
		var ids = A2(
			$elm$core$List$map,
			function ($) {
				return $.a3;
			},
			options);
		var len = $elm$core$List$length(ids);
		if (len <= 1) {
			return currentSid;
		} else {
			var dir = (deltaY > 0) ? 1 : (-1);
			var currentIdx = A2(
				$elm$core$Maybe$withDefault,
				0,
				A2($elm_community$list_extra$List$Extra$elemIndex, currentSid, ids));
			var nextIdx = A2($elm$core$Basics$modBy, len, currentIdx + dir);
			return A2(
				$elm$core$Maybe$withDefault,
				currentSid,
				A2($elm_community$list_extra$List$Extra$getAt, nextIdx, ids));
		}
	});
var $elm$core$Result$toMaybe = function (result) {
	if (!result.$) {
		var v = result.a;
		return $elm$core$Maybe$Just(v);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Types$DropAfter = function (a) {
	return {$: 1, a: a};
};
var $author$project$Types$DropBefore = function (a) {
	return {$: 0, a: a};
};
var $author$project$Types$DropLink = function (a) {
	return {$: 2, a: a};
};
var $elm_community$list_extra$List$Extra$last = function (items) {
	last:
	while (true) {
		if (!items.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			if (!items.b.b) {
				var x = items.a;
				return $elm$core$Maybe$Just(x);
			} else {
				var rest = items.b;
				var $temp$items = rest;
				items = $temp$items;
				continue last;
			}
		}
	}
};
var $elm$core$List$sortBy = _List_sortBy;
var $author$project$Update$CardActions$computeMobileDropTarget = F2(
	function (currentY, rects) {
		var hit = A2(
			$elm_community$list_extra$List$Extra$find,
			function (r) {
				return (_Utils_cmp(currentY, r.em) > -1) && (_Utils_cmp(currentY, r.em + r.a1) < 1);
			},
			rects);
		if (!hit.$) {
			var r = hit.a;
			var rel = (r.a1 > 0) ? ((currentY - r.em) / r.a1) : 0.5;
			return (rel < 0.28) ? $elm$core$Maybe$Just(
				$author$project$Types$DropBefore(r.bz)) : ((rel > 0.72) ? $elm$core$Maybe$Just(
				$author$project$Types$DropAfter(r.bz)) : $elm$core$Maybe$Just(
				$author$project$Types$DropLink(r.bz)));
		} else {
			var sorted = A2(
				$elm$core$List$sortBy,
				function ($) {
					return $.em;
				},
				rects);
			var _v1 = _Utils_Tuple2(
				$elm$core$List$head(sorted),
				$elm_community$list_extra$List$Extra$last(sorted));
			if ((!_v1.a.$) && (!_v1.b.$)) {
				var first = _v1.a.a;
				var last = _v1.b.a;
				return (_Utils_cmp(currentY, first.em) < 0) ? $elm$core$Maybe$Just(
					$author$project$Types$DropBefore(first.bz)) : ((_Utils_cmp(currentY, last.em + last.a1) > 0) ? $elm$core$Maybe$Just(
					$author$project$Types$DropAfter(last.bz)) : $elm$core$Maybe$Nothing);
			} else {
				return $elm$core$Maybe$Nothing;
			}
		}
	});
var $author$project$Update$CardActions$updateMobileDragPosition = F2(
	function (currentY, state) {
		var otherRects = A2(
			$elm$core$List$filter,
			function (r) {
				return !_Utils_eq(r.bz, state.bI);
			},
			state.dZ);
		var target = A2($author$project$Update$CardActions$computeMobileDropTarget, currentY, otherRects);
		return _Utils_update(
			state,
			{c5: currentY, da: target});
	});
var $author$project$Update$CardActions$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 0:
				return $author$project$Types$isMobileViewport(model) ? A2($author$project$Update$CardActions$createCardAtPosition, $elm$core$Maybe$Nothing, model) : A2(
					$author$project$Update$PersistenceActions$withCmd,
					A2(
						$elm$core$Task$attempt,
						A2($elm$core$Basics$composeL, $author$project$Types$CardEvent, $author$project$Types$GotCanvasElementForCreateCard),
						$elm$browser$Browser$Dom$getElement('board-canvas')),
					model);
			case 1:
				if (!msg.a.$) {
					var el = msg.a.a;
					var ws = $author$project$Types$activeWorkspaceData(model);
					var updatedCanvas = A2(
						$author$project$DragCanvas$setCanvasPosition,
						{eu: el.r.eu - el.bn.eu, ev: el.r.ev - el.bn.ev},
						model.R);
					var centerClient = {eu: (el.r.eu - el.bn.eu) + (el.r.bp / 2), ev: (el.r.ev - el.bn.ev) + (el.r.a1 / 2)};
					var worldCenter = A2($author$project$DragCanvas$toWorldCoordinates, updatedCanvas, centerClient);
					var basePos = {eu: worldCenter.eu - 140, ev: worldCenter.ev - 70};
					var pos = A3(
						$author$project$Update$CardActions$findNonOverlappingPosition,
						basePos,
						$author$project$Data$WorkspaceData$activeCards(ws),
						0);
					return A2(
						$author$project$Update$CardActions$createCardAtPosition,
						$elm$core$Maybe$Just(pos),
						_Utils_update(
							model,
							{R: updatedCanvas}));
				} else {
					return A2($author$project$Update$CardActions$createCardAtPosition, $elm$core$Maybe$Nothing, model);
				}
			case 2:
				var cardId = msg.a;
				return A2($author$project$Update$CardActions$openEditorWithFocus, cardId, model);
			case 3:
				return $author$project$Update$PersistenceActions$withNoCmd(
					_Utils_update(
						model,
						{c_: $elm$core$Maybe$Nothing}));
			case 4:
				var title = msg.a;
				return $author$project$Update$PersistenceActions$withNoCmd(
					A2(
						$author$project$Update$CardActions$mapEditor,
						function (ed) {
							return _Utils_update(
								ed,
								{ek: title});
						},
						model));
			case 5:
				var body = msg.a;
				return $author$project$Update$PersistenceActions$withNoCmd(
					A2(
						$author$project$Update$CardActions$mapEditor,
						function (ed) {
							return _Utils_update(
								ed,
								{cX: body});
						},
						model));
			case 6:
				var sid = msg.a;
				return $author$project$Update$PersistenceActions$withNoCmd(
					A2(
						$author$project$Update$CardActions$mapEditor,
						function (ed) {
							return _Utils_update(
								ed,
								{ec: sid});
						},
						model));
			case 7:
				var targetKey = msg.a;
				return $author$project$Update$PersistenceActions$withNoCmd(
					A2(
						$author$project$Update$CardActions$mapEditor,
						function (ed) {
							return _Utils_update(
								ed,
								{dB: targetKey});
						},
						model));
			case 8:
				return $author$project$Update$CardActions$commitEditorIfOpen(model);
			case 9:
				var cardId = msg.a;
				var sid = msg.b;
				var prevData = model.aC;
				return $author$project$Update$PersistenceActions$withSaveDebounced(
					$author$project$Update$PersistenceActions$markUnsavedChanges(
						A3(
							$author$project$Types$pushUndoSnapshot,
							'状態変更',
							prevData,
							A3(
								$author$project$Update$CardActions$updateCardContent,
								cardId,
								function (c) {
									return _Utils_update(
										c,
										{ec: sid});
								},
								model))));
			case 10:
				var cardId = msg.a;
				var deltaY = msg.b;
				var ws = $author$project$Types$activeWorkspaceData(model);
				var prevData = model.aC;
				var _v1 = A2($elm$core$Dict$get, cardId, ws.b9);
				if (_v1.$ === 1) {
					return $author$project$Update$PersistenceActions$withNoCmd(model);
				} else {
					var targetCard = _v1.a;
					var nextSid = A3($author$project$Update$CardActions$stepStatusId, deltaY, targetCard.c2.ec, ws.cA);
					return _Utils_eq(nextSid, targetCard.c2.ec) ? $author$project$Update$PersistenceActions$withNoCmd(model) : $author$project$Update$PersistenceActions$withSaveDebounced(
						$author$project$Update$PersistenceActions$markUnsavedChanges(
							A3(
								$author$project$Types$pushUndoSnapshot,
								'状態変更',
								prevData,
								A3(
									$author$project$Update$CardActions$updateCardContent,
									cardId,
									function (c) {
										return _Utils_update(
											c,
											{ec: nextSid});
									},
									model))));
				}
			case 11:
				var cardId = msg.a;
				var prevData = model.aC;
				return $author$project$Update$PersistenceActions$withSaveDebounced(
					$author$project$Update$PersistenceActions$markUnsavedChanges(
						A3(
							$author$project$Types$pushUndoSnapshot,
							'折り畳み変更',
							prevData,
							A3(
								$author$project$Update$CardActions$updateCardContent,
								cardId,
								function (c) {
									return _Utils_update(
										c,
										{dr: !c.dr});
								},
								model))));
			case 12:
				var cardId = msg.a;
				var prevData = model.aC;
				var _v2 = A2($author$project$Types$nextId, 'card', model);
				var newCardId = _v2.a;
				var modelWithSeed = _v2.b;
				return $author$project$Update$PersistenceActions$withSaveDebounced(
					$author$project$Update$PersistenceActions$markUnsavedChanges(
						A3(
							$author$project$Types$pushUndoSnapshot,
							'カード複製',
							prevData,
							A3($author$project$Update$CardActions$duplicateCard, cardId, newCardId, modelWithSeed))));
			case 13:
				var cardId = msg.a;
				var prevData = model.aC;
				return $author$project$Update$PersistenceActions$withSaveImmediate(
					$author$project$Update$PersistenceActions$markUnsavedChanges(
						A3(
							$author$project$Types$pushUndoSnapshot,
							'カードアーカイブ',
							prevData,
							function (m) {
								return _Utils_update(
									m,
									{
										c_: $elm$core$Maybe$Nothing,
										d9: A2($author$project$Update$CardActions$clearIfMatches, cardId, m.d9)
									});
							}(
								A3(
									$author$project$Update$CardActions$updateCardContent,
									cardId,
									function (c) {
										return _Utils_update(
											c,
											{dq: true});
									},
									model)))));
			case 14:
				var cardId = msg.a;
				var prevData = model.aC;
				return $author$project$Update$PersistenceActions$withSaveImmediate(
					$author$project$Update$PersistenceActions$markUnsavedChanges(
						A3(
							$author$project$Types$pushUndoSnapshot,
							'カード復元',
							prevData,
							A3(
								$author$project$Update$CardActions$updateCardContent,
								cardId,
								function (c) {
									return _Utils_update(
										c,
										{dq: false});
								},
								model))));
			case 15:
				var cardId = msg.a;
				var prevData = model.aC;
				return $author$project$Update$PersistenceActions$withSaveImmediate(
					$author$project$Update$PersistenceActions$markUnsavedChanges(
						A3(
							$author$project$Types$pushUndoSnapshot,
							'カード完全削除',
							prevData,
							function (m) {
								return _Utils_update(
									m,
									{
										c_: $elm$core$Maybe$Nothing,
										d9: A2($author$project$Update$CardActions$clearIfMatches, cardId, m.d9)
									});
							}(
								A2($author$project$Update$CardActions$deleteCardPermanently, cardId, model)))));
			case 16:
				var idA = msg.a;
				var idB = msg.b;
				var prevData = model.aC;
				return $author$project$Update$PersistenceActions$withSaveDebounced(
					$author$project$Update$PersistenceActions$markUnsavedChanges(
						A3(
							$author$project$Types$pushUndoSnapshot,
							'関連付け解除',
							prevData,
							A2(
								$author$project$Types$updateActiveWorkspaceData,
								function (ws) {
									return _Utils_update(
										ws,
										{
											b1: A3($author$project$Data$NoteCard$removeLink, idA, idB, ws.b1)
										});
								},
								model))));
			case 17:
				var cardId = msg.a;
				return A2($author$project$Update$CardActions$jumpToCard, cardId, model);
			case 18:
				var cardId = msg.a;
				var result = msg.b;
				if (!result.$) {
					var el = result.a;
					var _v4 = A2(
						$elm$core$Dict$get,
						cardId,
						$author$project$Types$activeWorkspaceData(model).b9);
					if (!_v4.$) {
						var targetCard = _v4.a;
						var updatedCanvas = A2(
							$author$project$DragCanvas$setCanvasPosition,
							{eu: el.r.eu - el.bn.eu, ev: el.r.ev - el.bn.ev},
							model.R);
						var viewport = $author$project$DragCanvas$getViewport(updatedCanvas);
						var targetOffset = {eu: (el.r.bp / 2) - ((targetCard.dV.eu + 140) * viewport.p), ev: (el.r.a1 / 2) - ((targetCard.dV.ev + 80) * viewport.p)};
						var anim = {aF: 320, bJ: 0, aR: viewport.m, cG: targetOffset};
						return $author$project$Update$PersistenceActions$withNoCmd(
							_Utils_update(
								model,
								{
									R: updatedCanvas,
									aq: $elm$core$Maybe$Just(anim),
									d9: $elm$core$Maybe$Just(cardId)
								}));
					} else {
						return $author$project$Update$PersistenceActions$withNoCmd(model);
					}
				} else {
					return $author$project$Update$PersistenceActions$withNoCmd(model);
				}
			case 19:
				if (!msg.b.$) {
					var cardId = msg.a;
					var _v5 = msg.b.a;
					var containerEl = _v5.a;
					var targetEl = _v5.b;
					var nextY = (containerEl.bn.ev + (targetEl.r.ev - containerEl.r.ev)) - 12;
					return A2(
						$author$project$Update$PersistenceActions$withCmd,
						A2(
							$elm$core$Task$attempt,
							function (_v6) {
								return $author$project$Types$CardEvent($author$project$Types$NoOpCard);
							},
							A3(
								$elm$browser$Browser$Dom$setViewportOf,
								'mobile-list-scroll',
								0,
								A2($elm$core$Basics$max, 0, nextY))),
						_Utils_update(
							model,
							{
								d9: $elm$core$Maybe$Just(cardId)
							}));
				} else {
					return $author$project$Update$PersistenceActions$withNoCmd(model);
				}
			case 20:
				var results = msg.a;
				var rects = A2(
					$elm$core$List$filterMap,
					function (_v7) {
						var cid = _v7.a;
						var res = _v7.b;
						return A2(
							$elm$core$Maybe$map,
							$author$project$Update$CardActions$elementToRect(cid),
							$elm$core$Result$toMaybe(res));
					},
					results);
				return $author$project$Update$PersistenceActions$withNoCmd(
					_Utils_update(
						model,
						{
							dU: A2(
								$elm$core$Maybe$map,
								function (st) {
									return _Utils_update(
										st,
										{
											dl: A2($author$project$Update$CardActions$findHitCard, st.c4, rects),
											dS: rects
										});
								},
								model.dU)
						}));
			case 21:
				var cardId = msg.a;
				var startY = msg.b;
				var ws = $author$project$Types$activeWorkspaceData(model);
				var dragState = {c5: startY, bI: cardId, da: $elm$core$Maybe$Nothing, dZ: _List_Nil, eb: startY};
				var activeIds = A2(
					$elm$core$List$map,
					function ($) {
						return $.a3;
					},
					$author$project$Data$WorkspaceData$activeCards(ws));
				return A2(
					$author$project$Update$PersistenceActions$withCmd,
					$author$project$Update$CardActions$measureMobileCardsCmd(activeIds),
					_Utils_update(
						model,
						{
							b2: $elm$core$Maybe$Just(dragState)
						}));
			case 22:
				var currentY = msg.a;
				return $author$project$Update$PersistenceActions$withNoCmd(
					_Utils_update(
						model,
						{
							b2: A2(
								$elm$core$Maybe$map,
								$author$project$Update$CardActions$updateMobileDragPosition(currentY),
								model.b2)
						}));
			case 23:
				var _v8 = model.b2;
				if (_v8.$ === 1) {
					return $author$project$Update$PersistenceActions$withNoCmd(model);
				} else {
					var dragState = _v8.a;
					var prevData = model.aC;
					return $author$project$Update$PersistenceActions$withSaveDebounced(
						$author$project$Update$PersistenceActions$markUnsavedChanges(
							A3(
								$author$project$Types$pushUndoSnapshot,
								'カード並び替え/関連付け',
								prevData,
								A2(
									$author$project$Update$CardActions$applyMobileDrop,
									dragState,
									_Utils_update(
										model,
										{b2: $elm$core$Maybe$Nothing})))));
				}
			case 24:
				return $author$project$Update$PersistenceActions$withNoCmd(
					_Utils_update(
						model,
						{b2: $elm$core$Maybe$Nothing}));
			case 25:
				var results = msg.a;
				var rects = A2(
					$elm$core$List$filterMap,
					function (_v9) {
						var cid = _v9.a;
						var res = _v9.b;
						return A2(
							$elm$core$Maybe$map,
							$author$project$Update$CardActions$elementToRect(cid),
							$elm$core$Result$toMaybe(res));
					},
					results);
				return $author$project$Update$PersistenceActions$withNoCmd(
					_Utils_update(
						model,
						{
							b2: A2(
								$elm$core$Maybe$map,
								function (st) {
									return A2(
										$author$project$Update$CardActions$updateMobileDragPosition,
										st.c5,
										_Utils_update(
											st,
											{dZ: rects}));
								},
								model.b2)
						}));
			default:
				return $author$project$Update$PersistenceActions$withNoCmd(model);
		}
	});
var $author$project$Types$ModEvent = function (a) {
	return {$: 6, a: a};
};
var $author$project$Types$ModFileLoaded = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $author$project$Types$ModFileSelected = function (a) {
	return {$: 2, a: a};
};
var $author$project$Types$ModManagerDialog = {$: 8};
var $elm$json$Json$Encode$null = _Json_encodeNull;
var $author$project$Ports$exitSafeMode = _Platform_outgoingPort(
	'exitSafeMode',
	function ($) {
		return $elm$json$Json$Encode$null;
	});
var $elm$file$File$Select$file = F2(
	function (mimes, toMsg) {
		return A2(
			$elm$core$Task$perform,
			toMsg,
			_File_uploadOne(mimes));
	});
var $author$project$Types$ToastError = 1;
var $elm$core$String$dropRight = F2(
	function (n, string) {
		return (n < 1) ? string : A3($elm$core$String$slice, 0, -n, string);
	});
var $elm$core$String$endsWith = _String_endsWith;
var $author$project$Data$StyleMod$stripPrefix = F2(
	function (prefix, str) {
		return A2($elm$core$String$startsWith, prefix, str) ? A2(
			$elm$core$String$dropLeft,
			$elm$core$String$length(prefix),
			str) : str;
	});
var $author$project$Data$StyleMod$stripSuffix = F2(
	function (suffix, str) {
		return A2($elm$core$String$endsWith, suffix, str) ? A2(
			$elm$core$String$dropRight,
			$elm$core$String$length(suffix),
			str) : str;
	});
var $author$project$Data$StyleMod$extractFontUrlFromLine = function (line) {
	var cleaned = $elm$core$String$trim(
		A2(
			$author$project$Data$StyleMod$stripSuffix,
			'*/',
			$elm$core$String$trim(
				A2(
					$author$project$Data$StyleMod$stripPrefix,
					'*',
					$elm$core$String$trim(
						A2(
							$author$project$Data$StyleMod$stripPrefix,
							'/*',
							$elm$core$String$trim(line)))))));
	return A2($elm$core$String$startsWith, '@fontUrl:', cleaned) ? $elm$core$Maybe$Just(
		$elm$core$String$trim(
			A2($elm$core$String$dropLeft, 9, cleaned))) : $elm$core$Maybe$Nothing;
};
var $elm$core$String$lines = _String_lines;
var $elm$core$Result$andThen = F2(
	function (callback, result) {
		if (!result.$) {
			var value = result.a;
			return callback(value);
		} else {
			var msg = result.a;
			return $elm$core$Result$Err(msg);
		}
	});
var $elm$core$String$any = _String_any;
var $author$project$Data$StyleMod$isAllowedFontUrl = function (url) {
	return A2($elm$core$String$startsWith, 'https://fonts.googleapis.com/', url) && ((_Utils_cmp(
		$elm$core$String$length(url),
		$elm$core$String$length('https://fonts.googleapis.com/')) > 0) && (!A2(
		$elm$core$String$any,
		function (c) {
			return (c === ' ') || ((c === '\t') || ((c === '\n') || ((c === '\r') || ((c === '\"') || ((c === '\'') || ((c === '<') || (c === '>')))))));
		},
		url)));
};
var $elm$core$Result$map = F2(
	function (func, ra) {
		if (!ra.$) {
			var a = ra.a;
			return $elm$core$Result$Ok(
				func(a));
		} else {
			var e = ra.a;
			return $elm$core$Result$Err(e);
		}
	});
var $author$project$Data$StyleMod$validateFontUrls = function (rawUrls) {
	return A2(
		$elm$core$Result$map,
		$elm_community$list_extra$List$Extra$unique,
		A3(
			$elm$core$List$foldl,
			F2(
				function (rawUrl, accResult) {
					return A2(
						$elm$core$Result$andThen,
						function (acc) {
							var trimmed = $elm$core$String$trim(rawUrl);
							return $author$project$Data$StyleMod$isAllowedFontUrl(trimmed) ? $elm$core$Result$Ok(
								_Utils_ap(
									acc,
									_List_fromArray(
										[trimmed]))) : $elm$core$Result$Err('許可されていないフォントURLです（https://fonts.googleapis.com/ のみ指定可能）: ' + trimmed);
						},
						accResult);
				}),
			$elm$core$Result$Ok(_List_Nil),
			rawUrls));
};
var $author$project$Data$StyleMod$extractAndValidateFontUrls = function (rawCss) {
	return $author$project$Data$StyleMod$validateFontUrls(
		A2(
			$elm$core$List$filterMap,
			$author$project$Data$StyleMod$extractFontUrlFromLine,
			$elm$core$String$lines(rawCss)));
};
var $author$project$Data$StyleMod$isSafeCssFragment = function (raw) {
	var lower = $elm$core$String$toLower(raw);
	return (!A2($elm$core$String$contains, '</style', lower)) && ((!A2($elm$core$String$contains, '@import', lower)) && ((!A2($elm$core$String$contains, 'javascript:', lower)) && (!A2($elm$core$String$contains, 'expression(', lower))));
};
var $author$project$Data$StyleMod$stripCssExtension = function (fileName) {
	return A2(
		$elm$core$String$endsWith,
		'.css',
		$elm$core$String$toLower(fileName)) ? A2($elm$core$String$dropRight, 4, fileName) : fileName;
};
var $author$project$Data$StyleMod$parseCustomCss = F3(
	function (newId, fileName, rawCss) {
		var trimmed = $elm$core$String$trim(rawCss);
		var cleanName = $author$project$Data$StyleMod$stripCssExtension(fileName);
		if ($elm$core$String$isEmpty(trimmed)) {
			return $elm$core$Result$Err('CSSファイルが空です');
		} else {
			if (!$author$project$Data$StyleMod$isSafeCssFragment(trimmed)) {
				return $elm$core$Result$Err('セキュリティ上の制限により、@import / </style / javascript: / expression( は使用できません（Google Fonts は /* @fontUrl: ... */ 形式で指定してください）');
			} else {
				var _v0 = $author$project$Data$StyleMod$extractAndValidateFontUrls(trimmed);
				if (_v0.$ === 1) {
					var errMsg = _v0.a;
					return $elm$core$Result$Err(errMsg);
				} else {
					var fontUrls = _v0.a;
					return $elm$core$Result$Ok(
						{
							dd: true,
							D: fontUrls,
							a3: newId,
							ac: $author$project$Data$StyleMod$CustomCssMod(
								{aY: trimmed}),
							b4: cleanName
						});
				}
			}
		}
	});
var $elm$json$Json$Decode$decodeString = _Json_runOnString;
var $elm$core$Dict$isEmpty = function (dict) {
	if (dict.$ === -2) {
		return true;
	} else {
		return false;
	}
};
var $author$project$Data$StyleMod$isSafeVarValue = function (val) {
	var trimmed = $elm$core$String$trim(val);
	return (!$elm$core$String$isEmpty(trimmed)) && ((!A2($elm$core$String$contains, ';', trimmed)) && ((!A2($elm$core$String$contains, '{', trimmed)) && ((!A2($elm$core$String$contains, '}', trimmed)) && $author$project$Data$StyleMod$isSafeCssFragment(trimmed))));
};
var $author$project$Data$StyleMod$isValidVarKey = function (key) {
	return A2($elm$core$String$startsWith, '--', key) && (($elm$core$String$length(key) >= 3) && A2(
		$elm$core$String$all,
		function (c) {
			return $elm$core$Char$isAlphaNum(c) || ((c === '-') || (c === '_'));
		},
		A2($elm$core$String$dropLeft, 2, key)));
};
var $author$project$Data$StyleMod$validateVariables = function (entries) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, accResult) {
				var k = _v0.a;
				var v = _v0.b;
				return A2(
					$elm$core$Result$andThen,
					function (dictAcc) {
						return (!$author$project$Data$StyleMod$isValidVarKey(k)) ? $elm$core$Result$Err('不正なCSS変数名です: ' + (k + '（--で始まる英数字・ハイフン・アンダースコアのみ有効）')) : ((!$author$project$Data$StyleMod$isSafeVarValue(v)) ? $elm$core$Result$Err('不正なCSS変数値が含まれています: ' + k) : $elm$core$Result$Ok(
							A3(
								$elm$core$Dict$insert,
								k,
								$elm$core$String$trim(v),
								dictAcc)));
					},
					accResult);
			}),
		$elm$core$Result$Ok($elm$core$Dict$empty),
		entries);
};
var $author$project$Data$StyleMod$parseThemeJson = F3(
	function (newId, fallbackName, rawJson) {
		var manifestDecoder = A3(
			$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
			'variables',
			$elm$json$Json$Decode$dict($elm$json$Json$Decode$string),
			A4(
				$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
				'fontUrls',
				$elm$json$Json$Decode$list($elm$json$Json$Decode$string),
				_List_Nil,
				A4(
					$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
					'description',
					$elm$json$Json$Decode$string,
					'',
					A4(
						$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
						'author',
						$elm$json$Json$Decode$string,
						'',
						A4(
							$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
							'modName',
							$elm$json$Json$Decode$string,
							fallbackName,
							A4(
								$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
								'schemaVersion',
								$elm$json$Json$Decode$int,
								1,
								$elm$json$Json$Decode$succeed(
									F6(
										function (schemaVer, modName, author, desc, fonts, vars) {
											return {ap: author, as: desc, D: fonts, a9: modName, be: schemaVer, aj: vars};
										}))))))));
		var _v0 = A2($elm$json$Json$Decode$decodeString, manifestDecoder, rawJson);
		if (_v0.$ === 1) {
			var err = _v0.a;
			return $elm$core$Result$Err(
				'テーマJSONの解析に失敗しました: ' + $elm$json$Json$Decode$errorToString(err));
		} else {
			var parsed = _v0.a;
			if (parsed.be !== 1) {
				return $elm$core$Result$Err(
					'未対応のテーマバージョンです (schemaVersion=' + ($elm$core$String$fromInt(parsed.be) + ')'));
			} else {
				if ($elm$core$Dict$isEmpty(parsed.aj) && $elm$core$List$isEmpty(parsed.D)) {
					return $elm$core$Result$Err('variables または fontUrls を1つ以上指定してください');
				} else {
					var _v1 = $author$project$Data$StyleMod$validateFontUrls(parsed.D);
					if (_v1.$ === 1) {
						var errMsg = _v1.a;
						return $elm$core$Result$Err(errMsg);
					} else {
						var cleanFonts = _v1.a;
						var _v2 = $author$project$Data$StyleMod$validateVariables(
							$elm$core$Dict$toList(parsed.aj));
						if (_v2.$ === 1) {
							var errMsg = _v2.a;
							return $elm$core$Result$Err(errMsg);
						} else {
							var cleanDict = _v2.a;
							var finalName = $elm$core$String$isEmpty(
								$elm$core$String$trim(parsed.a9)) ? fallbackName : $elm$core$String$trim(parsed.a9);
							return $elm$core$Result$Ok(
								{
									dd: true,
									D: cleanFonts,
									a3: newId,
									ac: $author$project$Data$StyleMod$TokenJsonMod(
										{
											ap: $elm$core$String$trim(parsed.ap),
											as: $elm$core$String$trim(parsed.as),
											aj: cleanDict
										}),
									b4: finalName
								});
						}
					}
				}
			}
		}
	});
var $author$project$Ports$applyStyleMods = _Platform_outgoingPort('applyStyleMods', $elm$core$Basics$identity);
var $author$project$Update$ModActions$syncModsCmd = F2(
	function (isSafeMode, mods) {
		return isSafeMode ? $author$project$Ports$applyStyleMods(
			A2($elm$json$Json$Encode$list, $author$project$Data$StyleMod$encode, _List_Nil)) : $author$project$Ports$applyStyleMods(
			A2($elm$json$Json$Encode$list, $author$project$Data$StyleMod$encode, mods));
	});
var $author$project$Update$ModActions$saveAndSyncMods = function (model) {
	var _v0 = $author$project$Update$PersistenceActions$withSaveImmediate(
		$author$project$Update$PersistenceActions$markUnsavedChanges(model));
	var savedModel = _v0.a;
	var saveCmd = _v0.b;
	return _Utils_Tuple2(
		savedModel,
		$elm$core$Platform$Cmd$batch(
			_List_fromArray(
				[
					saveCmd,
					A2($author$project$Update$ModActions$syncModsCmd, savedModel.a4, savedModel.aC.aS)
				])));
};
var $author$project$Update$ModActions$updateMods = F2(
	function (fn, model) {
		var appData = model.aC;
		return _Utils_update(
			model,
			{
				aC: _Utils_update(
					appData,
					{
						aS: fn(appData.aS)
					})
			});
	});
var $author$project$Update$ModActions$installModFromFile = F3(
	function (fileName, content, model) {
		var lowerName = $elm$core$String$toLower(fileName);
		var _v0 = A2($author$project$Types$nextId, 'mod', model);
		var newModId = _v0.a;
		var modelWithSeed = _v0.b;
		var parseResult = A2($elm$core$String$endsWith, '.json', lowerName) ? A3(
			$author$project$Data$StyleMod$parseThemeJson,
			newModId,
			A2($elm$core$String$dropRight, 5, fileName),
			content) : (A2($elm$core$String$endsWith, '.css', lowerName) ? A3($author$project$Data$StyleMod$parseCustomCss, newModId, fileName, content) : $elm$core$Result$Err('対応しているのは .css または .json ファイルのみです'));
		if (parseResult.$ === 1) {
			var errMsg = parseResult.a;
			return $author$project$Update$PersistenceActions$withNoCmd(
				_Utils_update(
					modelWithSeed,
					{
						bm: $elm$core$Maybe$Just(
							{ac: 1, ad: errMsg})
					}));
		} else {
			var newMod = parseResult.a;
			var prevData = modelWithSeed.aC;
			return $author$project$Update$ModActions$saveAndSyncMods(
				A3(
					$author$project$Types$pushUndoSnapshot,
					'Mod追加',
					prevData,
					function (m) {
						return _Utils_update(
							m,
							{
								bm: $elm$core$Maybe$Just(
									{ac: 0, ad: 'Mod「' + (newMod.b4 + '」を追加しました')})
							});
					}(
						A2(
							$author$project$Update$ModActions$updateMods,
							function (mods) {
								return _Utils_ap(
									mods,
									_List_fromArray(
										[newMod]));
							},
							modelWithSeed))));
		}
	});
var $elm$file$File$name = _File_name;
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $elm_community$list_extra$List$Extra$splitAt = F2(
	function (n, xs) {
		return _Utils_Tuple2(
			A2($elm$core$List$take, n, xs),
			A2($elm$core$List$drop, n, xs));
	});
var $elm_community$list_extra$List$Extra$uncons = function (list) {
	if (!list.b) {
		return $elm$core$Maybe$Nothing;
	} else {
		var first = list.a;
		var rest = list.b;
		return $elm$core$Maybe$Just(
			_Utils_Tuple2(first, rest));
	}
};
var $elm_community$list_extra$List$Extra$swapAt = F3(
	function (index1, index2, l) {
		swapAt:
		while (true) {
			if (_Utils_eq(index1, index2) || (index1 < 0)) {
				return l;
			} else {
				if (_Utils_cmp(index1, index2) > 0) {
					var $temp$index1 = index2,
						$temp$index2 = index1,
						$temp$l = l;
					index1 = $temp$index1;
					index2 = $temp$index2;
					l = $temp$l;
					continue swapAt;
				} else {
					var _v0 = A2($elm_community$list_extra$List$Extra$splitAt, index1, l);
					var part1 = _v0.a;
					var tail1 = _v0.b;
					var _v1 = A2($elm_community$list_extra$List$Extra$splitAt, index2 - index1, tail1);
					var head2 = _v1.a;
					var tail2 = _v1.b;
					var _v2 = _Utils_Tuple2(
						$elm_community$list_extra$List$Extra$uncons(head2),
						$elm_community$list_extra$List$Extra$uncons(tail2));
					if ((!_v2.a.$) && (!_v2.b.$)) {
						var _v3 = _v2.a.a;
						var value1 = _v3.a;
						var part2 = _v3.b;
						var _v4 = _v2.b.a;
						var value2 = _v4.a;
						var part3 = _v4.b;
						return $elm$core$List$concat(
							_List_fromArray(
								[
									part1,
									A2($elm$core$List$cons, value2, part2),
									A2($elm$core$List$cons, value1, part3)
								]));
					} else {
						return l;
					}
				}
			}
		}
	});
var $elm$file$File$toString = _File_toString;
var $author$project$Update$ModActions$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 0:
				return $author$project$Update$PersistenceActions$withNoCmd(
					_Utils_update(
						model,
						{bG: $author$project$Types$ModManagerDialog, ds: false}));
			case 1:
				return A2(
					$author$project$Update$PersistenceActions$withCmd,
					A2(
						$elm$file$File$Select$file,
						_List_fromArray(
							['.css', '.json', 'text/css', 'application/json']),
						A2($elm$core$Basics$composeL, $author$project$Types$ModEvent, $author$project$Types$ModFileSelected)),
					model);
			case 2:
				var file = msg.a;
				var fileName = $elm$file$File$name(file);
				return A2(
					$author$project$Update$PersistenceActions$withCmd,
					A2(
						$elm$core$Task$perform,
						A2(
							$elm$core$Basics$composeL,
							$author$project$Types$ModEvent,
							$author$project$Types$ModFileLoaded(fileName)),
						$elm$file$File$toString(file)),
					model);
			case 3:
				var fileName = msg.a;
				var content = msg.b;
				return A3($author$project$Update$ModActions$installModFromFile, fileName, content, model);
			case 4:
				var modId = msg.a;
				var prevData = model.aC;
				return $author$project$Update$ModActions$saveAndSyncMods(
					A3(
						$author$project$Types$pushUndoSnapshot,
						'Mod有効切替',
						prevData,
						A2(
							$author$project$Update$ModActions$updateMods,
							$elm$core$List$map(
								function (m) {
									return _Utils_eq(m.a3, modId) ? _Utils_update(
										m,
										{dd: !m.dd}) : m;
								}),
							model)));
			case 5:
				var idx = msg.a;
				if (idx <= 0) {
					return $author$project$Update$PersistenceActions$withNoCmd(model);
				} else {
					var prevData = model.aC;
					return $author$project$Update$ModActions$saveAndSyncMods(
						A3(
							$author$project$Types$pushUndoSnapshot,
							'Modロード順変更',
							prevData,
							A2(
								$author$project$Update$ModActions$updateMods,
								A2($elm_community$list_extra$List$Extra$swapAt, idx, idx - 1),
								model)));
				}
			case 6:
				var idx = msg.a;
				if (_Utils_cmp(
					idx + 1,
					$elm$core$List$length(model.aC.aS)) > -1) {
					return $author$project$Update$PersistenceActions$withNoCmd(model);
				} else {
					var prevData = model.aC;
					return $author$project$Update$ModActions$saveAndSyncMods(
						A3(
							$author$project$Types$pushUndoSnapshot,
							'Modロード順変更',
							prevData,
							A2(
								$author$project$Update$ModActions$updateMods,
								A2($elm_community$list_extra$List$Extra$swapAt, idx, idx + 1),
								model)));
				}
			case 7:
				var modId = msg.a;
				var prevData = model.aC;
				return $author$project$Update$ModActions$saveAndSyncMods(
					A3(
						$author$project$Types$pushUndoSnapshot,
						'Mod削除',
						prevData,
						A2(
							$author$project$Update$ModActions$updateMods,
							$elm$core$List$filter(
								function (m) {
									return !_Utils_eq(m.a3, modId);
								}),
							model)));
			case 8:
				var prevData = model.aC;
				return $author$project$Update$ModActions$saveAndSyncMods(
					A3(
						$author$project$Types$pushUndoSnapshot,
						'全Mod無効化',
						prevData,
						A2(
							$author$project$Update$ModActions$updateMods,
							$elm$core$List$map(
								function (m) {
									return _Utils_update(
										m,
										{dd: false});
								}),
							model)));
			default:
				return A2(
					$author$project$Update$PersistenceActions$withCmd,
					$author$project$Ports$exitSafeMode(0),
					model);
		}
	});
var $author$project$Types$BackupFileRead = function (a) {
	return {$: 6, a: a};
};
var $author$project$Types$BackupFileSelected = function (a) {
	return {$: 5, a: a};
};
var $author$project$Types$ConfirmBackupImport = function (a) {
	return {$: 7, a: a};
};
var $author$project$Update$PersistenceActions$applyImportedBackup = F2(
	function (imported, model) {
		var runtime = model.d7;
		return _Utils_update(
			model,
			{
				aC: imported,
				c_: $elm$core$Maybe$Nothing,
				bG: $author$project$Types$NoDialog,
				d7: _Utils_update(
					runtime,
					{aH: imported.aH, bi: $elm$core$Maybe$Nothing}),
				cv: '',
				d9: $elm$core$Maybe$Nothing,
				bm: $elm$core$Maybe$Just(
					{ac: 0, ad: 'バックアップデータを復元しました'}),
				cK: _List_Nil
			});
	});
var $author$project$Data$BackupStorage$decodeString = function (raw) {
	return A2($elm$json$Json$Decode$decodeString, $author$project$Data$BackupStorage$decode, raw);
};
var $author$project$Update$PersistenceActions$flushIfUnsaved = function (model) {
	return model.dj ? $author$project$Update$PersistenceActions$withSaveImmediate(model) : $author$project$Update$PersistenceActions$withNoCmd(model);
};
var $justinmimbs$date$Date$RD = $elm$core$Basics$identity;
var $justinmimbs$date$Date$isLeapYear = function (y) {
	return ((!A2($elm$core$Basics$modBy, 4, y)) && (!(!A2($elm$core$Basics$modBy, 100, y)))) || (!A2($elm$core$Basics$modBy, 400, y));
};
var $justinmimbs$date$Date$daysBeforeMonth = F2(
	function (y, m) {
		var leapDays = $justinmimbs$date$Date$isLeapYear(y) ? 1 : 0;
		switch (m) {
			case 0:
				return 0;
			case 1:
				return 31;
			case 2:
				return 59 + leapDays;
			case 3:
				return 90 + leapDays;
			case 4:
				return 120 + leapDays;
			case 5:
				return 151 + leapDays;
			case 6:
				return 181 + leapDays;
			case 7:
				return 212 + leapDays;
			case 8:
				return 243 + leapDays;
			case 9:
				return 273 + leapDays;
			case 10:
				return 304 + leapDays;
			default:
				return 334 + leapDays;
		}
	});
var $justinmimbs$date$Date$floorDiv = F2(
	function (a, b) {
		return $elm$core$Basics$floor(a / b);
	});
var $justinmimbs$date$Date$daysBeforeYear = function (y1) {
	var y = y1 - 1;
	var leapYears = (A2($justinmimbs$date$Date$floorDiv, y, 4) - A2($justinmimbs$date$Date$floorDiv, y, 100)) + A2($justinmimbs$date$Date$floorDiv, y, 400);
	return (365 * y) + leapYears;
};
var $justinmimbs$date$Date$daysInMonth = F2(
	function (y, m) {
		switch (m) {
			case 0:
				return 31;
			case 1:
				return $justinmimbs$date$Date$isLeapYear(y) ? 29 : 28;
			case 2:
				return 31;
			case 3:
				return 30;
			case 4:
				return 31;
			case 5:
				return 30;
			case 6:
				return 31;
			case 7:
				return 31;
			case 8:
				return 30;
			case 9:
				return 31;
			case 10:
				return 30;
			default:
				return 31;
		}
	});
var $justinmimbs$date$Date$fromCalendarDate = F3(
	function (y, m, d) {
		return ($justinmimbs$date$Date$daysBeforeYear(y) + A2($justinmimbs$date$Date$daysBeforeMonth, y, m)) + A3(
			$elm$core$Basics$clamp,
			1,
			A2($justinmimbs$date$Date$daysInMonth, y, m),
			d);
	});
var $elm$time$Time$flooredDiv = F2(
	function (numerator, denominator) {
		return $elm$core$Basics$floor(numerator / denominator);
	});
var $elm$time$Time$posixToMillis = function (_v0) {
	var millis = _v0;
	return millis;
};
var $elm$time$Time$toAdjustedMinutesHelp = F3(
	function (defaultOffset, posixMinutes, eras) {
		toAdjustedMinutesHelp:
		while (true) {
			if (!eras.b) {
				return posixMinutes + defaultOffset;
			} else {
				var era = eras.a;
				var olderEras = eras.b;
				if (_Utils_cmp(era.bj, posixMinutes) < 0) {
					return posixMinutes + era.m;
				} else {
					var $temp$defaultOffset = defaultOffset,
						$temp$posixMinutes = posixMinutes,
						$temp$eras = olderEras;
					defaultOffset = $temp$defaultOffset;
					posixMinutes = $temp$posixMinutes;
					eras = $temp$eras;
					continue toAdjustedMinutesHelp;
				}
			}
		}
	});
var $elm$time$Time$toAdjustedMinutes = F2(
	function (_v0, time) {
		var defaultOffset = _v0.a;
		var eras = _v0.b;
		return A3(
			$elm$time$Time$toAdjustedMinutesHelp,
			defaultOffset,
			A2(
				$elm$time$Time$flooredDiv,
				$elm$time$Time$posixToMillis(time),
				60000),
			eras);
	});
var $elm$time$Time$toCivil = function (minutes) {
	var rawDay = A2($elm$time$Time$flooredDiv, minutes, 60 * 24) + 719468;
	var era = (((rawDay >= 0) ? rawDay : (rawDay - 146096)) / 146097) | 0;
	var dayOfEra = rawDay - (era * 146097);
	var yearOfEra = ((((dayOfEra - ((dayOfEra / 1460) | 0)) + ((dayOfEra / 36524) | 0)) - ((dayOfEra / 146096) | 0)) / 365) | 0;
	var dayOfYear = dayOfEra - (((365 * yearOfEra) + ((yearOfEra / 4) | 0)) - ((yearOfEra / 100) | 0));
	var mp = (((5 * dayOfYear) + 2) / 153) | 0;
	var month = mp + ((mp < 10) ? 3 : (-9));
	var year = yearOfEra + (era * 400);
	return {
		bE: (dayOfYear - ((((153 * mp) + 2) / 5) | 0)) + 1,
		b3: month,
		cQ: year + ((month <= 2) ? 1 : 0)
	};
};
var $elm$time$Time$toDay = F2(
	function (zone, time) {
		return $elm$time$Time$toCivil(
			A2($elm$time$Time$toAdjustedMinutes, zone, time)).bE;
	});
var $elm$time$Time$toMonth = F2(
	function (zone, time) {
		var _v0 = $elm$time$Time$toCivil(
			A2($elm$time$Time$toAdjustedMinutes, zone, time)).b3;
		switch (_v0) {
			case 1:
				return 0;
			case 2:
				return 1;
			case 3:
				return 2;
			case 4:
				return 3;
			case 5:
				return 4;
			case 6:
				return 5;
			case 7:
				return 6;
			case 8:
				return 7;
			case 9:
				return 8;
			case 10:
				return 9;
			case 11:
				return 10;
			default:
				return 11;
		}
	});
var $elm$time$Time$toYear = F2(
	function (zone, time) {
		return $elm$time$Time$toCivil(
			A2($elm$time$Time$toAdjustedMinutes, zone, time)).cQ;
	});
var $justinmimbs$date$Date$fromPosix = F2(
	function (zone, posix) {
		return A3(
			$justinmimbs$date$Date$fromCalendarDate,
			A2($elm$time$Time$toYear, zone, posix),
			A2($elm$time$Time$toMonth, zone, posix),
			A2($elm$time$Time$toDay, zone, posix));
	});
var $elm$json$Json$Decode$nullable = function (decoder) {
	return $elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				$elm$json$Json$Decode$null($elm$core$Maybe$Nothing),
				A2($elm$json$Json$Decode$map, $elm$core$Maybe$Just, decoder)
			]));
};
var $author$project$Update$PersistenceActions$handleStorageResult = F2(
	function (val, model) {
		var decoder = A3(
			$elm$json$Json$Decode$map2,
			$elm$core$Tuple$pair,
			A2($elm$json$Json$Decode$field, 'ok', $elm$json$Json$Decode$bool),
			A2(
				$elm$json$Json$Decode$field,
				'error',
				$elm$json$Json$Decode$nullable($elm$json$Json$Decode$string)));
		var _v0 = A2($elm$json$Json$Decode$decodeValue, decoder, val);
		if (!_v0.$) {
			if (_v0.a.a) {
				var _v1 = _v0.a;
				return _Utils_update(
					model,
					{ed: $elm$core$Maybe$Nothing});
			} else {
				var _v2 = _v0.a;
				var maybeErr = _v2.b;
				var errMsg = A2($elm$core$Maybe$withDefault, 'IndexedDBへの保存に失敗しました', maybeErr);
				return _Utils_update(
					model,
					{
						ed: $elm$core$Maybe$Just(errMsg),
						bm: $elm$core$Maybe$Just(
							{ac: 1, ad: errMsg})
					});
			}
		} else {
			return model;
		}
	});
var $author$project$Types$pad2 = function (n) {
	return (n < 10) ? ('0' + $elm$core$String$fromInt(n)) : $elm$core$String$fromInt(n);
};
var $elm$file$File$Download$string = F3(
	function (name, mime, content) {
		return A2(
			$elm$core$Task$perform,
			$elm$core$Basics$never,
			A3(_File_download, name, mime, content));
	});
var $elm$time$Time$toHour = F2(
	function (zone, time) {
		return A2(
			$elm$core$Basics$modBy,
			24,
			A2(
				$elm$time$Time$flooredDiv,
				A2($elm$time$Time$toAdjustedMinutes, zone, time),
				60));
	});
var $justinmimbs$date$Date$monthToNumber = function (m) {
	switch (m) {
		case 0:
			return 1;
		case 1:
			return 2;
		case 2:
			return 3;
		case 3:
			return 4;
		case 4:
			return 5;
		case 5:
			return 6;
		case 6:
			return 7;
		case 7:
			return 8;
		case 8:
			return 9;
		case 9:
			return 10;
		case 10:
			return 11;
		default:
			return 12;
	}
};
var $justinmimbs$date$Date$numberToMonth = function (mn) {
	var _v0 = A2($elm$core$Basics$max, 1, mn);
	switch (_v0) {
		case 1:
			return 0;
		case 2:
			return 1;
		case 3:
			return 2;
		case 4:
			return 3;
		case 5:
			return 4;
		case 6:
			return 5;
		case 7:
			return 6;
		case 8:
			return 7;
		case 9:
			return 8;
		case 10:
			return 9;
		case 11:
			return 10;
		default:
			return 11;
	}
};
var $justinmimbs$date$Date$toCalendarDateHelp = F3(
	function (y, m, d) {
		toCalendarDateHelp:
		while (true) {
			var monthDays = A2($justinmimbs$date$Date$daysInMonth, y, m);
			var mn = $justinmimbs$date$Date$monthToNumber(m);
			if ((mn < 12) && (_Utils_cmp(d, monthDays) > 0)) {
				var $temp$y = y,
					$temp$m = $justinmimbs$date$Date$numberToMonth(mn + 1),
					$temp$d = d - monthDays;
				y = $temp$y;
				m = $temp$m;
				d = $temp$d;
				continue toCalendarDateHelp;
			} else {
				return {bE: d, b3: m, cQ: y};
			}
		}
	});
var $justinmimbs$date$Date$divWithRemainder = F2(
	function (a, b) {
		return _Utils_Tuple2(
			A2($justinmimbs$date$Date$floorDiv, a, b),
			A2($elm$core$Basics$modBy, b, a));
	});
var $justinmimbs$date$Date$year = function (_v0) {
	var rd = _v0;
	var _v1 = A2($justinmimbs$date$Date$divWithRemainder, rd, 146097);
	var n400 = _v1.a;
	var r400 = _v1.b;
	var _v2 = A2($justinmimbs$date$Date$divWithRemainder, r400, 36524);
	var n100 = _v2.a;
	var r100 = _v2.b;
	var _v3 = A2($justinmimbs$date$Date$divWithRemainder, r100, 1461);
	var n4 = _v3.a;
	var r4 = _v3.b;
	var _v4 = A2($justinmimbs$date$Date$divWithRemainder, r4, 365);
	var n1 = _v4.a;
	var r1 = _v4.b;
	var n = (!r1) ? 0 : 1;
	return ((((n400 * 400) + (n100 * 100)) + (n4 * 4)) + n1) + n;
};
var $justinmimbs$date$Date$toOrdinalDate = function (_v0) {
	var rd = _v0;
	var y = $justinmimbs$date$Date$year(rd);
	return {
		bd: rd - $justinmimbs$date$Date$daysBeforeYear(y),
		cQ: y
	};
};
var $justinmimbs$date$Date$toCalendarDate = function (_v0) {
	var rd = _v0;
	var date = $justinmimbs$date$Date$toOrdinalDate(rd);
	return A3($justinmimbs$date$Date$toCalendarDateHelp, date.cQ, 0, date.bd);
};
var $justinmimbs$date$Date$day = A2(
	$elm$core$Basics$composeR,
	$justinmimbs$date$Date$toCalendarDate,
	function ($) {
		return $.bE;
	});
var $justinmimbs$date$Date$month = A2(
	$elm$core$Basics$composeR,
	$justinmimbs$date$Date$toCalendarDate,
	function ($) {
		return $.b3;
	});
var $justinmimbs$date$Date$monthNumber = A2($elm$core$Basics$composeR, $justinmimbs$date$Date$month, $justinmimbs$date$Date$monthToNumber);
var $justinmimbs$date$Date$ordinalDay = A2(
	$elm$core$Basics$composeR,
	$justinmimbs$date$Date$toOrdinalDate,
	function ($) {
		return $.bd;
	});
var $elm$core$String$cons = _String_cons;
var $elm$core$String$fromChar = function (_char) {
	return A2($elm$core$String$cons, _char, '');
};
var $elm$core$Bitwise$shiftRightBy = _Bitwise_shiftRightBy;
var $elm$core$String$repeatHelp = F3(
	function (n, chunk, result) {
		return (n <= 0) ? result : A3(
			$elm$core$String$repeatHelp,
			n >> 1,
			_Utils_ap(chunk, chunk),
			(!(n & 1)) ? result : _Utils_ap(result, chunk));
	});
var $elm$core$String$repeat = F2(
	function (n, chunk) {
		return A3($elm$core$String$repeatHelp, n, chunk, '');
	});
var $elm$core$String$padLeft = F3(
	function (n, _char, string) {
		return _Utils_ap(
			A2(
				$elm$core$String$repeat,
				n - $elm$core$String$length(string),
				$elm$core$String$fromChar(_char)),
			string);
	});
var $justinmimbs$date$Date$padSignedInt = F2(
	function (length, _int) {
		return _Utils_ap(
			(_int < 0) ? '-' : '',
			A3(
				$elm$core$String$padLeft,
				length,
				'0',
				$elm$core$String$fromInt(
					$elm$core$Basics$abs(_int))));
	});
var $justinmimbs$date$Date$monthToQuarter = function (m) {
	return (($justinmimbs$date$Date$monthToNumber(m) + 2) / 3) | 0;
};
var $justinmimbs$date$Date$quarter = A2($elm$core$Basics$composeR, $justinmimbs$date$Date$month, $justinmimbs$date$Date$monthToQuarter);
var $elm$core$String$right = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(
			$elm$core$String$slice,
			-n,
			$elm$core$String$length(string),
			string);
	});
var $justinmimbs$date$Date$weekdayNumber = function (_v0) {
	var rd = _v0;
	var _v1 = A2($elm$core$Basics$modBy, 7, rd);
	if (!_v1) {
		return 7;
	} else {
		var n = _v1;
		return n;
	}
};
var $justinmimbs$date$Date$daysBeforeWeekYear = function (y) {
	var jan4 = $justinmimbs$date$Date$daysBeforeYear(y) + 4;
	return jan4 - $justinmimbs$date$Date$weekdayNumber(jan4);
};
var $justinmimbs$date$Date$numberToWeekday = function (wdn) {
	var _v0 = A2($elm$core$Basics$max, 1, wdn);
	switch (_v0) {
		case 1:
			return 0;
		case 2:
			return 1;
		case 3:
			return 2;
		case 4:
			return 3;
		case 5:
			return 4;
		case 6:
			return 5;
		default:
			return 6;
	}
};
var $justinmimbs$date$Date$toWeekDate = function (_v0) {
	var rd = _v0;
	var wdn = $justinmimbs$date$Date$weekdayNumber(rd);
	var wy = $justinmimbs$date$Date$year(rd + (4 - wdn));
	var week1Day1 = $justinmimbs$date$Date$daysBeforeWeekYear(wy) + 1;
	return {
		cN: 1 + (((rd - week1Day1) / 7) | 0),
		cO: wy,
		er: $justinmimbs$date$Date$numberToWeekday(wdn)
	};
};
var $justinmimbs$date$Date$weekNumber = A2(
	$elm$core$Basics$composeR,
	$justinmimbs$date$Date$toWeekDate,
	function ($) {
		return $.cN;
	});
var $justinmimbs$date$Date$weekYear = A2(
	$elm$core$Basics$composeR,
	$justinmimbs$date$Date$toWeekDate,
	function ($) {
		return $.cO;
	});
var $justinmimbs$date$Date$weekday = A2($elm$core$Basics$composeR, $justinmimbs$date$Date$weekdayNumber, $justinmimbs$date$Date$numberToWeekday);
var $elm$core$Basics$min = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) < 0) ? x : y;
	});
var $justinmimbs$date$Date$ordinalSuffix = function (n) {
	var nn = A2($elm$core$Basics$modBy, 100, n);
	var _v0 = A2(
		$elm$core$Basics$min,
		(nn < 20) ? nn : A2($elm$core$Basics$modBy, 10, nn),
		4);
	switch (_v0) {
		case 1:
			return 'st';
		case 2:
			return 'nd';
		case 3:
			return 'rd';
		default:
			return 'th';
	}
};
var $justinmimbs$date$Date$withOrdinalSuffix = function (n) {
	return _Utils_ap(
		$elm$core$String$fromInt(n),
		$justinmimbs$date$Date$ordinalSuffix(n));
};
var $justinmimbs$date$Date$formatField = F4(
	function (language, _char, length, date) {
		switch (_char) {
			case 'y':
				if (length === 2) {
					return A2(
						$elm$core$String$right,
						2,
						A3(
							$elm$core$String$padLeft,
							2,
							'0',
							$elm$core$String$fromInt(
								$justinmimbs$date$Date$year(date))));
				} else {
					return A2(
						$justinmimbs$date$Date$padSignedInt,
						length,
						$justinmimbs$date$Date$year(date));
				}
			case 'Y':
				if (length === 2) {
					return A2(
						$elm$core$String$right,
						2,
						A3(
							$elm$core$String$padLeft,
							2,
							'0',
							$elm$core$String$fromInt(
								$justinmimbs$date$Date$weekYear(date))));
				} else {
					return A2(
						$justinmimbs$date$Date$padSignedInt,
						length,
						$justinmimbs$date$Date$weekYear(date));
				}
			case 'Q':
				switch (length) {
					case 1:
						return $elm$core$String$fromInt(
							$justinmimbs$date$Date$quarter(date));
					case 2:
						return $elm$core$String$fromInt(
							$justinmimbs$date$Date$quarter(date));
					case 3:
						return 'Q' + $elm$core$String$fromInt(
							$justinmimbs$date$Date$quarter(date));
					case 4:
						return $justinmimbs$date$Date$withOrdinalSuffix(
							$justinmimbs$date$Date$quarter(date));
					case 5:
						return $elm$core$String$fromInt(
							$justinmimbs$date$Date$quarter(date));
					default:
						return '';
				}
			case 'M':
				switch (length) {
					case 1:
						return $elm$core$String$fromInt(
							$justinmimbs$date$Date$monthNumber(date));
					case 2:
						return A3(
							$elm$core$String$padLeft,
							2,
							'0',
							$elm$core$String$fromInt(
								$justinmimbs$date$Date$monthNumber(date)));
					case 3:
						return language.aL(
							$justinmimbs$date$Date$month(date));
					case 4:
						return language.ba(
							$justinmimbs$date$Date$month(date));
					case 5:
						return A2(
							$elm$core$String$left,
							1,
							language.aL(
								$justinmimbs$date$Date$month(date)));
					default:
						return '';
				}
			case 'w':
				switch (length) {
					case 1:
						return $elm$core$String$fromInt(
							$justinmimbs$date$Date$weekNumber(date));
					case 2:
						return A3(
							$elm$core$String$padLeft,
							2,
							'0',
							$elm$core$String$fromInt(
								$justinmimbs$date$Date$weekNumber(date)));
					default:
						return '';
				}
			case 'd':
				switch (length) {
					case 1:
						return $elm$core$String$fromInt(
							$justinmimbs$date$Date$day(date));
					case 2:
						return A3(
							$elm$core$String$padLeft,
							2,
							'0',
							$elm$core$String$fromInt(
								$justinmimbs$date$Date$day(date)));
					case 3:
						return language.aZ(
							$justinmimbs$date$Date$day(date));
					default:
						return '';
				}
			case 'D':
				switch (length) {
					case 1:
						return $elm$core$String$fromInt(
							$justinmimbs$date$Date$ordinalDay(date));
					case 2:
						return A3(
							$elm$core$String$padLeft,
							2,
							'0',
							$elm$core$String$fromInt(
								$justinmimbs$date$Date$ordinalDay(date)));
					case 3:
						return A3(
							$elm$core$String$padLeft,
							3,
							'0',
							$elm$core$String$fromInt(
								$justinmimbs$date$Date$ordinalDay(date)));
					default:
						return '';
				}
			case 'E':
				switch (length) {
					case 1:
						return language.Z(
							$justinmimbs$date$Date$weekday(date));
					case 2:
						return language.Z(
							$justinmimbs$date$Date$weekday(date));
					case 3:
						return language.Z(
							$justinmimbs$date$Date$weekday(date));
					case 4:
						return language.bo(
							$justinmimbs$date$Date$weekday(date));
					case 5:
						return A2(
							$elm$core$String$left,
							1,
							language.Z(
								$justinmimbs$date$Date$weekday(date)));
					case 6:
						return A2(
							$elm$core$String$left,
							2,
							language.Z(
								$justinmimbs$date$Date$weekday(date)));
					default:
						return '';
				}
			case 'e':
				switch (length) {
					case 1:
						return $elm$core$String$fromInt(
							$justinmimbs$date$Date$weekdayNumber(date));
					case 2:
						return $elm$core$String$fromInt(
							$justinmimbs$date$Date$weekdayNumber(date));
					default:
						return A4($justinmimbs$date$Date$formatField, language, 'E', length, date);
				}
			default:
				return '';
		}
	});
var $justinmimbs$date$Date$formatWithTokens = F3(
	function (language, tokens, date) {
		return A3(
			$elm$core$List$foldl,
			F2(
				function (token, formatted) {
					if (!token.$) {
						var _char = token.a;
						var length = token.b;
						return _Utils_ap(
							A4($justinmimbs$date$Date$formatField, language, _char, length, date),
							formatted);
					} else {
						var str = token.a;
						return _Utils_ap(str, formatted);
					}
				}),
			'',
			tokens);
	});
var $justinmimbs$date$Pattern$Literal = function (a) {
	return {$: 1, a: a};
};
var $elm$parser$Parser$Advanced$Bad = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$Good = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $elm$parser$Parser$Advanced$Parser = $elm$core$Basics$identity;
var $elm$parser$Parser$Advanced$andThen = F2(
	function (callback, _v0) {
		var parseA = _v0;
		return function (s0) {
			var _v1 = parseA(s0);
			if (_v1.$ === 1) {
				var p = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p, x);
			} else {
				var p1 = _v1.a;
				var a = _v1.b;
				var s1 = _v1.c;
				var _v2 = callback(a);
				var parseB = _v2;
				var _v3 = parseB(s1);
				if (_v3.$ === 1) {
					var p2 = _v3.a;
					var x = _v3.b;
					return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
				} else {
					var p2 = _v3.a;
					var b = _v3.b;
					var s2 = _v3.c;
					return A3($elm$parser$Parser$Advanced$Good, p1 || p2, b, s2);
				}
			}
		};
	});
var $elm$parser$Parser$andThen = $elm$parser$Parser$Advanced$andThen;
var $elm$parser$Parser$Advanced$map2 = F3(
	function (func, _v0, _v1) {
		var parseA = _v0;
		var parseB = _v1;
		return function (s0) {
			var _v2 = parseA(s0);
			if (_v2.$ === 1) {
				var p = _v2.a;
				var x = _v2.b;
				return A2($elm$parser$Parser$Advanced$Bad, p, x);
			} else {
				var p1 = _v2.a;
				var a = _v2.b;
				var s1 = _v2.c;
				var _v3 = parseB(s1);
				if (_v3.$ === 1) {
					var p2 = _v3.a;
					var x = _v3.b;
					return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
				} else {
					var p2 = _v3.a;
					var b = _v3.b;
					var s2 = _v3.c;
					return A3(
						$elm$parser$Parser$Advanced$Good,
						p1 || p2,
						A2(func, a, b),
						s2);
				}
			}
		};
	});
var $elm$parser$Parser$Advanced$ignorer = F2(
	function (keepParser, ignoreParser) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$always, keepParser, ignoreParser);
	});
var $elm$parser$Parser$ignorer = $elm$parser$Parser$Advanced$ignorer;
var $elm$parser$Parser$Advanced$succeed = function (a) {
	return function (s) {
		return A3($elm$parser$Parser$Advanced$Good, false, a, s);
	};
};
var $elm$parser$Parser$succeed = $elm$parser$Parser$Advanced$succeed;
var $elm$parser$Parser$Expecting = function (a) {
	return {$: 0, a: a};
};
var $elm$parser$Parser$Advanced$Token = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$parser$Parser$toToken = function (str) {
	return A2(
		$elm$parser$Parser$Advanced$Token,
		str,
		$elm$parser$Parser$Expecting(str));
};
var $elm$parser$Parser$Advanced$AddRight = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$DeadEnd = F4(
	function (row, col, problem, contextStack) {
		return {bC: col, c3: contextStack, cf: problem, cr: row};
	});
var $elm$parser$Parser$Advanced$Empty = {$: 0};
var $elm$parser$Parser$Advanced$fromState = F2(
	function (s, x) {
		return A2(
			$elm$parser$Parser$Advanced$AddRight,
			$elm$parser$Parser$Advanced$Empty,
			A4($elm$parser$Parser$Advanced$DeadEnd, s.cr, s.bC, x, s.d));
	});
var $elm$parser$Parser$Advanced$isSubString = _Parser_isSubString;
var $elm$parser$Parser$Advanced$token = function (_v0) {
	var str = _v0.a;
	var expecting = _v0.b;
	var progress = !$elm$core$String$isEmpty(str);
	return function (s) {
		var _v1 = A5($elm$parser$Parser$Advanced$isSubString, str, s.m, s.cr, s.bC, s.b);
		var newOffset = _v1.a;
		var newRow = _v1.b;
		var newCol = _v1.c;
		return _Utils_eq(newOffset, -1) ? A2(
			$elm$parser$Parser$Advanced$Bad,
			false,
			A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : A3(
			$elm$parser$Parser$Advanced$Good,
			progress,
			0,
			{bC: newCol, d: s.d, f: s.f, m: newOffset, cr: newRow, b: s.b});
	};
};
var $elm$parser$Parser$token = function (str) {
	return $elm$parser$Parser$Advanced$token(
		$elm$parser$Parser$toToken(str));
};
var $justinmimbs$date$Pattern$escapedQuote = A2(
	$elm$parser$Parser$ignorer,
	$elm$parser$Parser$succeed(
		$justinmimbs$date$Pattern$Literal('\'')),
	$elm$parser$Parser$token('\'\''));
var $elm$parser$Parser$UnexpectedChar = {$: 11};
var $elm$parser$Parser$Advanced$isSubChar = _Parser_isSubChar;
var $elm$parser$Parser$Advanced$chompIf = F2(
	function (isGood, expecting) {
		return function (s) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, s.m, s.b);
			return _Utils_eq(newOffset, -1) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : (_Utils_eq(newOffset, -2) ? A3(
				$elm$parser$Parser$Advanced$Good,
				true,
				0,
				{bC: 1, d: s.d, f: s.f, m: s.m + 1, cr: s.cr + 1, b: s.b}) : A3(
				$elm$parser$Parser$Advanced$Good,
				true,
				0,
				{bC: s.bC + 1, d: s.d, f: s.f, m: newOffset, cr: s.cr, b: s.b}));
		};
	});
var $elm$parser$Parser$chompIf = function (isGood) {
	return A2($elm$parser$Parser$Advanced$chompIf, isGood, $elm$parser$Parser$UnexpectedChar);
};
var $justinmimbs$date$Pattern$Field = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$chompWhileHelp = F5(
	function (isGood, offset, row, col, s0) {
		chompWhileHelp:
		while (true) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, offset, s0.b);
			if (_Utils_eq(newOffset, -1)) {
				return A3(
					$elm$parser$Parser$Advanced$Good,
					_Utils_cmp(s0.m, offset) < 0,
					0,
					{bC: col, d: s0.d, f: s0.f, m: offset, cr: row, b: s0.b});
			} else {
				if (_Utils_eq(newOffset, -2)) {
					var $temp$isGood = isGood,
						$temp$offset = offset + 1,
						$temp$row = row + 1,
						$temp$col = 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				} else {
					var $temp$isGood = isGood,
						$temp$offset = newOffset,
						$temp$row = row,
						$temp$col = col + 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$chompWhile = function (isGood) {
	return function (s) {
		return A5($elm$parser$Parser$Advanced$chompWhileHelp, isGood, s.m, s.cr, s.bC, s);
	};
};
var $elm$parser$Parser$chompWhile = $elm$parser$Parser$Advanced$chompWhile;
var $elm$parser$Parser$Advanced$getOffset = function (s) {
	return A3($elm$parser$Parser$Advanced$Good, false, s.m, s);
};
var $elm$parser$Parser$getOffset = $elm$parser$Parser$Advanced$getOffset;
var $elm$parser$Parser$Advanced$keeper = F2(
	function (parseFunc, parseArg) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$apL, parseFunc, parseArg);
	});
var $elm$parser$Parser$keeper = $elm$parser$Parser$Advanced$keeper;
var $elm$parser$Parser$Problem = function (a) {
	return {$: 12, a: a};
};
var $elm$parser$Parser$Advanced$problem = function (x) {
	return function (s) {
		return A2(
			$elm$parser$Parser$Advanced$Bad,
			false,
			A2($elm$parser$Parser$Advanced$fromState, s, x));
	};
};
var $elm$parser$Parser$problem = function (msg) {
	return $elm$parser$Parser$Advanced$problem(
		$elm$parser$Parser$Problem(msg));
};
var $elm$core$String$foldr = _String_foldr;
var $elm$core$String$toList = function (string) {
	return A3($elm$core$String$foldr, $elm$core$List$cons, _List_Nil, string);
};
var $justinmimbs$date$Pattern$fieldRepeats = function (str) {
	var _v0 = $elm$core$String$toList(str);
	if (_v0.b && (!_v0.b.b)) {
		var _char = _v0.a;
		return A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$keeper,
				$elm$parser$Parser$succeed(
					F2(
						function (x, y) {
							return A2($justinmimbs$date$Pattern$Field, _char, 1 + (y - x));
						})),
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$getOffset,
					$elm$parser$Parser$chompWhile(
						$elm$core$Basics$eq(_char)))),
			$elm$parser$Parser$getOffset);
	} else {
		return $elm$parser$Parser$problem('expected exactly one char');
	}
};
var $elm$parser$Parser$Advanced$mapChompedString = F2(
	function (func, _v0) {
		var parse = _v0;
		return function (s0) {
			var _v1 = parse(s0);
			if (_v1.$ === 1) {
				var p = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p, x);
			} else {
				var p = _v1.a;
				var a = _v1.b;
				var s1 = _v1.c;
				return A3(
					$elm$parser$Parser$Advanced$Good,
					p,
					A2(
						func,
						A3($elm$core$String$slice, s0.m, s1.m, s0.b),
						a),
					s1);
			}
		};
	});
var $elm$parser$Parser$Advanced$getChompedString = function (parser) {
	return A2($elm$parser$Parser$Advanced$mapChompedString, $elm$core$Basics$always, parser);
};
var $elm$parser$Parser$getChompedString = $elm$parser$Parser$Advanced$getChompedString;
var $justinmimbs$date$Pattern$field = A2(
	$elm$parser$Parser$andThen,
	$justinmimbs$date$Pattern$fieldRepeats,
	$elm$parser$Parser$getChompedString(
		$elm$parser$Parser$chompIf($elm$core$Char$isAlpha)));
var $justinmimbs$date$Pattern$finalize = A2(
	$elm$core$List$foldl,
	F2(
		function (token, tokens) {
			var _v0 = _Utils_Tuple2(token, tokens);
			if (((_v0.a.$ === 1) && _v0.b.b) && (_v0.b.a.$ === 1)) {
				var x = _v0.a.a;
				var _v1 = _v0.b;
				var y = _v1.a.a;
				var rest = _v1.b;
				return A2(
					$elm$core$List$cons,
					$justinmimbs$date$Pattern$Literal(
						_Utils_ap(x, y)),
					rest);
			} else {
				return A2($elm$core$List$cons, token, tokens);
			}
		}),
	_List_Nil);
var $elm$parser$Parser$Advanced$lazy = function (thunk) {
	return function (s) {
		var _v0 = thunk(0);
		var parse = _v0;
		return parse(s);
	};
};
var $elm$parser$Parser$lazy = $elm$parser$Parser$Advanced$lazy;
var $justinmimbs$date$Pattern$isLiteralChar = function (_char) {
	return (_char !== '\'') && (!$elm$core$Char$isAlpha(_char));
};
var $elm$parser$Parser$Advanced$map = F2(
	function (func, _v0) {
		var parse = _v0;
		return function (s0) {
			var _v1 = parse(s0);
			if (!_v1.$) {
				var p = _v1.a;
				var a = _v1.b;
				var s1 = _v1.c;
				return A3(
					$elm$parser$Parser$Advanced$Good,
					p,
					func(a),
					s1);
			} else {
				var p = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p, x);
			}
		};
	});
var $elm$parser$Parser$map = $elm$parser$Parser$Advanced$map;
var $justinmimbs$date$Pattern$literal = A2(
	$elm$parser$Parser$map,
	$justinmimbs$date$Pattern$Literal,
	$elm$parser$Parser$getChompedString(
		A2(
			$elm$parser$Parser$ignorer,
			A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$succeed(0),
				$elm$parser$Parser$chompIf($justinmimbs$date$Pattern$isLiteralChar)),
			$elm$parser$Parser$chompWhile($justinmimbs$date$Pattern$isLiteralChar))));
var $elm$parser$Parser$Advanced$Append = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$oneOfHelp = F3(
	function (s0, bag, parsers) {
		oneOfHelp:
		while (true) {
			if (!parsers.b) {
				return A2($elm$parser$Parser$Advanced$Bad, false, bag);
			} else {
				var parse = parsers.a;
				var remainingParsers = parsers.b;
				var _v1 = parse(s0);
				if (!_v1.$) {
					var step = _v1;
					return step;
				} else {
					var step = _v1;
					var p = step.a;
					var x = step.b;
					if (p) {
						return step;
					} else {
						var $temp$s0 = s0,
							$temp$bag = A2($elm$parser$Parser$Advanced$Append, bag, x),
							$temp$parsers = remainingParsers;
						s0 = $temp$s0;
						bag = $temp$bag;
						parsers = $temp$parsers;
						continue oneOfHelp;
					}
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$oneOf = function (parsers) {
	return function (s) {
		return A3($elm$parser$Parser$Advanced$oneOfHelp, s, $elm$parser$Parser$Advanced$Empty, parsers);
	};
};
var $elm$parser$Parser$oneOf = $elm$parser$Parser$Advanced$oneOf;
var $elm$parser$Parser$ExpectingEnd = {$: 10};
var $elm$parser$Parser$Advanced$end = function (x) {
	return function (s) {
		return _Utils_eq(
			$elm$core$String$length(s.b),
			s.m) ? A3($elm$parser$Parser$Advanced$Good, false, 0, s) : A2(
			$elm$parser$Parser$Advanced$Bad,
			false,
			A2($elm$parser$Parser$Advanced$fromState, s, x));
	};
};
var $elm$parser$Parser$end = $elm$parser$Parser$Advanced$end($elm$parser$Parser$ExpectingEnd);
var $justinmimbs$date$Pattern$quotedHelp = function (result) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$andThen,
				function (str) {
					return $justinmimbs$date$Pattern$quotedHelp(
						_Utils_ap(result, str));
				},
				$elm$parser$Parser$getChompedString(
					A2(
						$elm$parser$Parser$ignorer,
						A2(
							$elm$parser$Parser$ignorer,
							$elm$parser$Parser$succeed(0),
							$elm$parser$Parser$chompIf(
								$elm$core$Basics$neq('\''))),
						$elm$parser$Parser$chompWhile(
							$elm$core$Basics$neq('\''))))),
				A2(
				$elm$parser$Parser$andThen,
				function (_v0) {
					return $justinmimbs$date$Pattern$quotedHelp(result + '\'');
				},
				$elm$parser$Parser$token('\'\'')),
				$elm$parser$Parser$succeed(result)
			]));
};
var $justinmimbs$date$Pattern$quoted = A2(
	$elm$parser$Parser$keeper,
	A2(
		$elm$parser$Parser$ignorer,
		$elm$parser$Parser$succeed($justinmimbs$date$Pattern$Literal),
		$elm$parser$Parser$chompIf(
			$elm$core$Basics$eq('\''))),
	A2(
		$elm$parser$Parser$ignorer,
		$justinmimbs$date$Pattern$quotedHelp(''),
		$elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					$elm$parser$Parser$chompIf(
					$elm$core$Basics$eq('\'')),
					$elm$parser$Parser$end
				]))));
var $justinmimbs$date$Pattern$patternHelp = function (tokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$andThen,
				function (token) {
					return $justinmimbs$date$Pattern$patternHelp(
						A2($elm$core$List$cons, token, tokens));
				},
				$elm$parser$Parser$oneOf(
					_List_fromArray(
						[$justinmimbs$date$Pattern$field, $justinmimbs$date$Pattern$literal, $justinmimbs$date$Pattern$escapedQuote, $justinmimbs$date$Pattern$quoted]))),
				$elm$parser$Parser$lazy(
				function (_v0) {
					return $elm$parser$Parser$succeed(
						$justinmimbs$date$Pattern$finalize(tokens));
				})
			]));
};
var $elm$parser$Parser$DeadEnd = F3(
	function (row, col, problem) {
		return {bC: col, cf: problem, cr: row};
	});
var $elm$parser$Parser$problemToDeadEnd = function (p) {
	return A3($elm$parser$Parser$DeadEnd, p.cr, p.bC, p.cf);
};
var $elm$parser$Parser$Advanced$bagToList = F2(
	function (bag, list) {
		bagToList:
		while (true) {
			switch (bag.$) {
				case 0:
					return list;
				case 1:
					var bag1 = bag.a;
					var x = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2($elm$core$List$cons, x, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
				default:
					var bag1 = bag.a;
					var bag2 = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2($elm$parser$Parser$Advanced$bagToList, bag2, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
			}
		}
	});
var $elm$parser$Parser$Advanced$run = F2(
	function (_v0, src) {
		var parse = _v0;
		var _v1 = parse(
			{bC: 1, d: _List_Nil, f: 1, m: 0, cr: 1, b: src});
		if (!_v1.$) {
			var value = _v1.b;
			return $elm$core$Result$Ok(value);
		} else {
			var bag = _v1.b;
			return $elm$core$Result$Err(
				A2($elm$parser$Parser$Advanced$bagToList, bag, _List_Nil));
		}
	});
var $elm$parser$Parser$run = F2(
	function (parser, source) {
		var _v0 = A2($elm$parser$Parser$Advanced$run, parser, source);
		if (!_v0.$) {
			var a = _v0.a;
			return $elm$core$Result$Ok(a);
		} else {
			var problems = _v0.a;
			return $elm$core$Result$Err(
				A2($elm$core$List$map, $elm$parser$Parser$problemToDeadEnd, problems));
		}
	});
var $justinmimbs$date$Pattern$fromString = function (str) {
	return A2(
		$elm$core$Result$withDefault,
		_List_fromArray(
			[
				$justinmimbs$date$Pattern$Literal(str)
			]),
		A2(
			$elm$parser$Parser$run,
			$justinmimbs$date$Pattern$patternHelp(_List_Nil),
			str));
};
var $justinmimbs$date$Date$formatWithLanguage = F2(
	function (language, pattern) {
		var tokens = $elm$core$List$reverse(
			$justinmimbs$date$Pattern$fromString(pattern));
		return A2($justinmimbs$date$Date$formatWithTokens, language, tokens);
	});
var $justinmimbs$date$Date$monthToName = function (m) {
	switch (m) {
		case 0:
			return 'January';
		case 1:
			return 'February';
		case 2:
			return 'March';
		case 3:
			return 'April';
		case 4:
			return 'May';
		case 5:
			return 'June';
		case 6:
			return 'July';
		case 7:
			return 'August';
		case 8:
			return 'September';
		case 9:
			return 'October';
		case 10:
			return 'November';
		default:
			return 'December';
	}
};
var $justinmimbs$date$Date$weekdayToName = function (wd) {
	switch (wd) {
		case 0:
			return 'Monday';
		case 1:
			return 'Tuesday';
		case 2:
			return 'Wednesday';
		case 3:
			return 'Thursday';
		case 4:
			return 'Friday';
		case 5:
			return 'Saturday';
		default:
			return 'Sunday';
	}
};
var $justinmimbs$date$Date$language_en = {
	aZ: $justinmimbs$date$Date$withOrdinalSuffix,
	ba: $justinmimbs$date$Date$monthToName,
	aL: A2(
		$elm$core$Basics$composeR,
		$justinmimbs$date$Date$monthToName,
		$elm$core$String$left(3)),
	bo: $justinmimbs$date$Date$weekdayToName,
	Z: A2(
		$elm$core$Basics$composeR,
		$justinmimbs$date$Date$weekdayToName,
		$elm$core$String$left(3))
};
var $justinmimbs$date$Date$format = function (pattern) {
	return A2($justinmimbs$date$Date$formatWithLanguage, $justinmimbs$date$Date$language_en, pattern);
};
var $justinmimbs$date$Date$toIsoString = $justinmimbs$date$Date$format('yyyy-MM-dd');
var $elm$time$Time$toMinute = F2(
	function (zone, time) {
		return A2(
			$elm$core$Basics$modBy,
			60,
			A2($elm$time$Time$toAdjustedMinutes, zone, time));
	});
var $elm$time$Time$toSecond = F2(
	function (_v0, time) {
		return A2(
			$elm$core$Basics$modBy,
			60,
			A2(
				$elm$time$Time$flooredDiv,
				$elm$time$Time$posixToMillis(time),
				1000));
	});
var $author$project$Update$PersistenceActions$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 0:
				var rev = msg.a;
				return (_Utils_eq(rev, model.d6) && model.dj) ? _Utils_Tuple2(
					_Utils_update(
						model,
						{dj: false}),
					$author$project$Ports$saveToStorage(
						$author$project$Data$BackupStorage$encode(model.aC))) : $author$project$Update$PersistenceActions$withNoCmd(model);
			case 1:
				return $author$project$Update$PersistenceActions$flushIfUnsaved(model);
			case 2:
				var val = msg.a;
				return $author$project$Update$PersistenceActions$withNoCmd(
					A2($author$project$Update$PersistenceActions$handleStorageResult, val, model));
			case 3:
				var timeStr = $author$project$Types$pad2(
					A2($elm$time$Time$toHour, model.cR, model.ca)) + ('-' + ($author$project$Types$pad2(
					A2($elm$time$Time$toMinute, model.cR, model.ca)) + ('-' + $author$project$Types$pad2(
					A2($elm$time$Time$toSecond, model.cR, model.ca)))));
				var jsonText = A2(
					$elm$json$Json$Encode$encode,
					2,
					$author$project$Data$BackupStorage$encode(model.aC));
				var dateStr = $justinmimbs$date$Date$toIsoString(
					A2($justinmimbs$date$Date$fromPosix, model.cR, model.ca));
				var fileName = 'switchboard-backup-' + (dateStr + ('_' + (timeStr + '.json')));
				return A2(
					$author$project$Update$PersistenceActions$withCmd,
					A3($elm$file$File$Download$string, fileName, 'application/json', jsonText),
					model);
			case 4:
				return A2(
					$author$project$Update$PersistenceActions$withCmd,
					A2(
						$elm$file$File$Select$file,
						_List_fromArray(
							['application/json', '.json']),
						A2($elm$core$Basics$composeL, $author$project$Types$PersistenceEvent, $author$project$Types$BackupFileSelected)),
					model);
			case 5:
				var file = msg.a;
				return A2(
					$author$project$Update$PersistenceActions$withCmd,
					A2(
						$elm$core$Task$perform,
						A2($elm$core$Basics$composeL, $author$project$Types$PersistenceEvent, $author$project$Types$BackupFileRead),
						$elm$file$File$toString(file)),
					model);
			case 6:
				var content = msg.a;
				var _v1 = $author$project$Data$BackupStorage$decodeString(content);
				if (!_v1.$) {
					var imported = _v1.a;
					return $author$project$Update$PersistenceActions$withNoCmd(
						_Utils_update(
							model,
							{
								bG: $author$project$Types$ConfirmBackupImport(imported)
							}));
				} else {
					var err = _v1.a;
					return $author$project$Update$PersistenceActions$withNoCmd(
						_Utils_update(
							model,
							{
								bm: $elm$core$Maybe$Just(
									{
										ac: 1,
										ad: 'バックアップの読み込みに失敗しました: ' + $elm$json$Json$Decode$errorToString(err)
									})
							}));
				}
			case 7:
				var imported = msg.a;
				return $author$project$Update$PersistenceActions$withSaveImmediate(
					A2($author$project$Update$PersistenceActions$applyImportedBackup, imported, model));
			default:
				return $author$project$Update$PersistenceActions$withNoCmd(
					_Utils_update(
						model,
						{bG: $author$project$Types$NoDialog}));
		}
	});
var $author$project$Types$ScheduleManagerDialog = function (a) {
	return {$: 4, a: a};
};
var $justinmimbs$date$Date$deadEndToString = function (_v0) {
	var problem = _v0.cf;
	if (problem.$ === 12) {
		var message = problem.a;
		return message;
	} else {
		return 'Expected a date in ISO 8601 format';
	}
};
var $elm$core$Result$mapError = F2(
	function (f, result) {
		if (!result.$) {
			var v = result.a;
			return $elm$core$Result$Ok(v);
		} else {
			var e = result.a;
			return $elm$core$Result$Err(
				f(e));
		}
	});
var $justinmimbs$date$Date$MonthAndDay = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $justinmimbs$date$Date$OrdinalDay = function (a) {
	return {$: 2, a: a};
};
var $justinmimbs$date$Date$WeekAndWeekday = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$backtrackable = function (_v0) {
	var parse = _v0;
	return function (s0) {
		var _v1 = parse(s0);
		if (_v1.$ === 1) {
			var x = _v1.b;
			return A2($elm$parser$Parser$Advanced$Bad, false, x);
		} else {
			var a = _v1.b;
			var s1 = _v1.c;
			return A3($elm$parser$Parser$Advanced$Good, false, a, s1);
		}
	};
};
var $elm$parser$Parser$backtrackable = $elm$parser$Parser$Advanced$backtrackable;
var $elm$parser$Parser$Advanced$commit = function (a) {
	return function (s) {
		return A3($elm$parser$Parser$Advanced$Good, true, a, s);
	};
};
var $elm$parser$Parser$commit = $elm$parser$Parser$Advanced$commit;
var $elm$parser$Parser$mapChompedString = $elm$parser$Parser$Advanced$mapChompedString;
var $justinmimbs$date$Date$int1 = A2(
	$elm$parser$Parser$mapChompedString,
	F2(
		function (str, _v0) {
			return A2(
				$elm$core$Maybe$withDefault,
				0,
				$elm$core$String$toInt(str));
		}),
	$elm$parser$Parser$chompIf($elm$core$Char$isDigit));
var $justinmimbs$date$Date$int2 = A2(
	$elm$parser$Parser$mapChompedString,
	F2(
		function (str, _v0) {
			return A2(
				$elm$core$Maybe$withDefault,
				0,
				$elm$core$String$toInt(str));
		}),
	A2(
		$elm$parser$Parser$ignorer,
		A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed(0),
			$elm$parser$Parser$chompIf($elm$core$Char$isDigit)),
		$elm$parser$Parser$chompIf($elm$core$Char$isDigit)));
var $justinmimbs$date$Date$int3 = A2(
	$elm$parser$Parser$mapChompedString,
	F2(
		function (str, _v0) {
			return A2(
				$elm$core$Maybe$withDefault,
				0,
				$elm$core$String$toInt(str));
		}),
	A2(
		$elm$parser$Parser$ignorer,
		A2(
			$elm$parser$Parser$ignorer,
			A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$succeed(0),
				$elm$parser$Parser$chompIf($elm$core$Char$isDigit)),
			$elm$parser$Parser$chompIf($elm$core$Char$isDigit)),
		$elm$parser$Parser$chompIf($elm$core$Char$isDigit)));
var $justinmimbs$date$Date$dayOfYear = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$succeed($elm$core$Basics$identity),
				$elm$parser$Parser$token('-')),
			$elm$parser$Parser$oneOf(
				_List_fromArray(
					[
						$elm$parser$Parser$backtrackable(
						A2(
							$elm$parser$Parser$andThen,
							$elm$parser$Parser$commit,
							A2($elm$parser$Parser$map, $justinmimbs$date$Date$OrdinalDay, $justinmimbs$date$Date$int3))),
						A2(
						$elm$parser$Parser$keeper,
						A2(
							$elm$parser$Parser$keeper,
							$elm$parser$Parser$succeed($justinmimbs$date$Date$MonthAndDay),
							$justinmimbs$date$Date$int2),
						$elm$parser$Parser$oneOf(
							_List_fromArray(
								[
									A2(
									$elm$parser$Parser$keeper,
									A2(
										$elm$parser$Parser$ignorer,
										$elm$parser$Parser$succeed($elm$core$Basics$identity),
										$elm$parser$Parser$token('-')),
									$justinmimbs$date$Date$int2),
									$elm$parser$Parser$succeed(1)
								]))),
						A2(
						$elm$parser$Parser$keeper,
						A2(
							$elm$parser$Parser$keeper,
							A2(
								$elm$parser$Parser$ignorer,
								$elm$parser$Parser$succeed($justinmimbs$date$Date$WeekAndWeekday),
								$elm$parser$Parser$token('W')),
							$justinmimbs$date$Date$int2),
						$elm$parser$Parser$oneOf(
							_List_fromArray(
								[
									A2(
									$elm$parser$Parser$keeper,
									A2(
										$elm$parser$Parser$ignorer,
										$elm$parser$Parser$succeed($elm$core$Basics$identity),
										$elm$parser$Parser$token('-')),
									$justinmimbs$date$Date$int1),
									$elm$parser$Parser$succeed(1)
								])))
					]))),
			$elm$parser$Parser$backtrackable(
			A2(
				$elm$parser$Parser$andThen,
				$elm$parser$Parser$commit,
				A2(
					$elm$parser$Parser$keeper,
					A2(
						$elm$parser$Parser$keeper,
						$elm$parser$Parser$succeed($justinmimbs$date$Date$MonthAndDay),
						$justinmimbs$date$Date$int2),
					$elm$parser$Parser$oneOf(
						_List_fromArray(
							[
								$justinmimbs$date$Date$int2,
								$elm$parser$Parser$succeed(1)
							]))))),
			A2($elm$parser$Parser$map, $justinmimbs$date$Date$OrdinalDay, $justinmimbs$date$Date$int3),
			A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed($justinmimbs$date$Date$WeekAndWeekday),
					$elm$parser$Parser$token('W')),
				$justinmimbs$date$Date$int2),
			$elm$parser$Parser$oneOf(
				_List_fromArray(
					[
						$justinmimbs$date$Date$int1,
						$elm$parser$Parser$succeed(1)
					]))),
			$elm$parser$Parser$succeed(
			$justinmimbs$date$Date$OrdinalDay(1))
		]));
var $justinmimbs$date$Date$isBetweenInt = F3(
	function (a, b, x) {
		return (_Utils_cmp(a, x) < 1) && (_Utils_cmp(x, b) < 1);
	});
var $justinmimbs$date$Date$fromCalendarParts = F3(
	function (y, mn, d) {
		return (!A3($justinmimbs$date$Date$isBetweenInt, 1, 12, mn)) ? $elm$core$Result$Err(
			'Invalid date: ' + (('month ' + ($elm$core$String$fromInt(mn) + ' is out of range')) + (' (1 to 12)' + ('; received (year ' + ($elm$core$String$fromInt(y) + (', month ' + ($elm$core$String$fromInt(mn) + (', day ' + ($elm$core$String$fromInt(d) + ')'))))))))) : ((!A3(
			$justinmimbs$date$Date$isBetweenInt,
			1,
			A2(
				$justinmimbs$date$Date$daysInMonth,
				y,
				$justinmimbs$date$Date$numberToMonth(mn)),
			d)) ? $elm$core$Result$Err(
			'Invalid date: ' + (('day ' + ($elm$core$String$fromInt(d) + ' is out of range')) + ((' (1 to ' + ($elm$core$String$fromInt(
				A2(
					$justinmimbs$date$Date$daysInMonth,
					y,
					$justinmimbs$date$Date$numberToMonth(mn))) + ')')) + ((' for ' + $justinmimbs$date$Date$monthToName(
				$justinmimbs$date$Date$numberToMonth(mn))) + ((((mn === 2) && (d === 29)) ? (' (' + ($elm$core$String$fromInt(y) + ' is not a leap year)')) : '') + ('; received (year ' + ($elm$core$String$fromInt(y) + (', month ' + ($elm$core$String$fromInt(mn) + (', day ' + ($elm$core$String$fromInt(d) + ')'))))))))))) : $elm$core$Result$Ok(
			($justinmimbs$date$Date$daysBeforeYear(y) + A2(
				$justinmimbs$date$Date$daysBeforeMonth,
				y,
				$justinmimbs$date$Date$numberToMonth(mn))) + d));
	});
var $justinmimbs$date$Date$fromOrdinalParts = F2(
	function (y, od) {
		var daysInYear = $justinmimbs$date$Date$isLeapYear(y) ? 366 : 365;
		return (!A3($justinmimbs$date$Date$isBetweenInt, 1, daysInYear, od)) ? $elm$core$Result$Err(
			'Invalid ordinal date: ' + (('ordinal-day ' + ($elm$core$String$fromInt(od) + ' is out of range')) + ((' (1 to ' + ($elm$core$String$fromInt(daysInYear) + ')')) + ((' for ' + $elm$core$String$fromInt(y)) + ('; received (year ' + ($elm$core$String$fromInt(y) + (', ordinal-day ' + ($elm$core$String$fromInt(od) + ')')))))))) : $elm$core$Result$Ok(
			$justinmimbs$date$Date$daysBeforeYear(y) + od);
	});
var $justinmimbs$date$Date$firstOfYear = function (y) {
	return $justinmimbs$date$Date$daysBeforeYear(y) + 1;
};
var $justinmimbs$date$Date$is53WeekYear = function (y) {
	var wdnJan1 = $justinmimbs$date$Date$weekdayNumber(
		$justinmimbs$date$Date$firstOfYear(y));
	return (wdnJan1 === 4) || ((wdnJan1 === 3) && $justinmimbs$date$Date$isLeapYear(y));
};
var $justinmimbs$date$Date$fromWeekParts = F3(
	function (wy, wn, wdn) {
		var weeksInYear = $justinmimbs$date$Date$is53WeekYear(wy) ? 53 : 52;
		return (!A3($justinmimbs$date$Date$isBetweenInt, 1, weeksInYear, wn)) ? $elm$core$Result$Err(
			'Invalid week date: ' + (('week ' + ($elm$core$String$fromInt(wn) + ' is out of range')) + ((' (1 to ' + ($elm$core$String$fromInt(weeksInYear) + ')')) + ((' for ' + $elm$core$String$fromInt(wy)) + ('; received (year ' + ($elm$core$String$fromInt(wy) + (', week ' + ($elm$core$String$fromInt(wn) + (', weekday ' + ($elm$core$String$fromInt(wdn) + ')')))))))))) : ((!A3($justinmimbs$date$Date$isBetweenInt, 1, 7, wdn)) ? $elm$core$Result$Err(
			'Invalid week date: ' + (('weekday ' + ($elm$core$String$fromInt(wdn) + ' is out of range')) + (' (1 to 7)' + ('; received (year ' + ($elm$core$String$fromInt(wy) + (', week ' + ($elm$core$String$fromInt(wn) + (', weekday ' + ($elm$core$String$fromInt(wdn) + ')'))))))))) : $elm$core$Result$Ok(
			($justinmimbs$date$Date$daysBeforeWeekYear(wy) + ((wn - 1) * 7)) + wdn));
	});
var $justinmimbs$date$Date$fromYearAndDayOfYear = function (_v0) {
	var y = _v0.a;
	var doy = _v0.b;
	switch (doy.$) {
		case 0:
			var mn = doy.a;
			var d = doy.b;
			return A3($justinmimbs$date$Date$fromCalendarParts, y, mn, d);
		case 1:
			var wn = doy.a;
			var wdn = doy.b;
			return A3($justinmimbs$date$Date$fromWeekParts, y, wn, wdn);
		default:
			var od = doy.a;
			return A2($justinmimbs$date$Date$fromOrdinalParts, y, od);
	}
};
var $justinmimbs$date$Date$int4 = A2(
	$elm$parser$Parser$mapChompedString,
	F2(
		function (str, _v0) {
			return A2(
				$elm$core$Maybe$withDefault,
				0,
				$elm$core$String$toInt(str));
		}),
	A2(
		$elm$parser$Parser$ignorer,
		A2(
			$elm$parser$Parser$ignorer,
			A2(
				$elm$parser$Parser$ignorer,
				A2(
					$elm$parser$Parser$ignorer,
					A2(
						$elm$parser$Parser$ignorer,
						$elm$parser$Parser$succeed(0),
						$elm$parser$Parser$oneOf(
							_List_fromArray(
								[
									$elm$parser$Parser$chompIf(
									function (c) {
										return c === '-';
									}),
									$elm$parser$Parser$succeed(0)
								]))),
					$elm$parser$Parser$chompIf($elm$core$Char$isDigit)),
				$elm$parser$Parser$chompIf($elm$core$Char$isDigit)),
			$elm$parser$Parser$chompIf($elm$core$Char$isDigit)),
		$elm$parser$Parser$chompIf($elm$core$Char$isDigit)));
var $justinmimbs$date$Date$resultToParser = function (result) {
	if (!result.$) {
		var x = result.a;
		return $elm$parser$Parser$succeed(x);
	} else {
		var message = result.a;
		return $elm$parser$Parser$problem(message);
	}
};
var $justinmimbs$date$Date$parser = A2(
	$elm$parser$Parser$andThen,
	A2($elm$core$Basics$composeR, $justinmimbs$date$Date$fromYearAndDayOfYear, $justinmimbs$date$Date$resultToParser),
	A2(
		$elm$parser$Parser$keeper,
		A2(
			$elm$parser$Parser$keeper,
			$elm$parser$Parser$succeed($elm$core$Tuple$pair),
			$justinmimbs$date$Date$int4),
		$justinmimbs$date$Date$dayOfYear));
var $justinmimbs$date$Date$fromIsoString = A2(
	$elm$core$Basics$composeR,
	$elm$parser$Parser$run(
		A2(
			$elm$parser$Parser$keeper,
			$elm$parser$Parser$succeed($elm$core$Basics$identity),
			A2(
				$elm$parser$Parser$ignorer,
				$justinmimbs$date$Date$parser,
				A2(
					$elm$parser$Parser$andThen,
					$justinmimbs$date$Date$resultToParser,
					$elm$parser$Parser$oneOf(
						_List_fromArray(
							[
								A2($elm$parser$Parser$map, $elm$core$Result$Ok, $elm$parser$Parser$end),
								A2(
								$elm$parser$Parser$map,
								$elm$core$Basics$always(
									$elm$core$Result$Err('Expected a date only, not a date and time')),
								$elm$parser$Parser$chompIf(
									$elm$core$Basics$eq('T'))),
								$elm$parser$Parser$succeed(
								$elm$core$Result$Err('Expected a date only'))
							])))))),
	$elm$core$Result$mapError(
		A2(
			$elm$core$Basics$composeR,
			$elm$core$List$head,
			A2(
				$elm$core$Basics$composeR,
				$elm$core$Maybe$map($justinmimbs$date$Date$deadEndToString),
				$elm$core$Maybe$withDefault('')))));
var $author$project$Update$ScheduleActions$parseRecurrence = function (form) {
	var _v0 = form.d$;
	switch (_v0) {
		case 'daily':
			return $elm$core$Result$Ok($author$project$Data$TimeSchedule$Daily);
		case 'weekly':
			return $elm$core$List$isEmpty(form.es) ? $elm$core$Result$Err('曜日を1つ以上選択してください') : $elm$core$Result$Ok(
				$author$project$Data$TimeSchedule$Weekly(form.es));
		case 'once':
			var _v1 = $justinmimbs$date$Date$fromIsoString(form.dN);
			if (!_v1.$) {
				var d = _v1.a;
				return $elm$core$Result$Ok(
					$author$project$Data$TimeSchedule$Once(
						{
							bE: $justinmimbs$date$Date$day(d),
							b3: $justinmimbs$date$Date$month(d),
							cQ: $justinmimbs$date$Date$year(d)
						}));
			} else {
				return $elm$core$Result$Err('単発日付を YYYY-MM-DD 形式で入力してください');
			}
		default:
			return $elm$core$Result$Ok($author$project$Data$TimeSchedule$Daily);
	}
};
var $elm$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		if (!maybeValue.$) {
			var value = maybeValue.a;
			return callback(value);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $elm$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		if (ma.$ === 1) {
			return $elm$core$Maybe$Nothing;
		} else {
			var a = ma.a;
			if (mb.$ === 1) {
				return $elm$core$Maybe$Nothing;
			} else {
				var b = mb.a;
				return $elm$core$Maybe$Just(
					A2(func, a, b));
			}
		}
	});
var $author$project$Update$ScheduleActions$parseTimeText = function (raw) {
	var _v0 = A2($elm$core$String$split, ':', raw);
	if ((_v0.b && _v0.b.b) && (!_v0.b.b.b)) {
		var hStr = _v0.a;
		var _v1 = _v0.b;
		var mStr = _v1.a;
		return A2(
			$elm$core$Maybe$andThen,
			function (_v2) {
				var h = _v2.a;
				var m = _v2.b;
				return ((h >= 0) && ((h <= 23) && ((m >= 0) && (m <= 59)))) ? $elm$core$Maybe$Just(
					_Utils_Tuple2(h, m)) : $elm$core$Maybe$Nothing;
			},
			A3(
				$elm$core$Maybe$map2,
				$elm$core$Tuple$pair,
				$elm$core$String$toInt(hStr),
				$elm$core$String$toInt(mStr)));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Update$ScheduleActions$parseTiming = function (form) {
	var _v0 = form.ej;
	if (_v0 === 'random') {
		var _v1 = _Utils_Tuple2(
			$author$project$Update$ScheduleActions$parseTimeText(form.eh),
			$author$project$Update$ScheduleActions$parseTimeText(form.dY));
		if ((!_v1.a.$) && (!_v1.b.$)) {
			var _v2 = _v1.a.a;
			var sh = _v2.a;
			var sm = _v2.b;
			var _v3 = _v1.b.a;
			var eh = _v3.a;
			var em = _v3.b;
			return (_Utils_cmp((eh * 60) + em, (sh * 60) + sm) > 0) ? $elm$core$Result$Ok(
				$author$project$Data$TimeSchedule$RandomWindow(
					{ck: eh, cl: em, cm: sh, cn: sm})) : $elm$core$Result$Err('ランダム時間帯の終了時刻は開始時刻より後にしてください');
		} else {
			return $elm$core$Result$Err('ランダム時間帯の時刻を正しく入力してください (HH:MM)');
		}
	} else {
		var _v4 = $author$project$Update$ScheduleActions$parseTimeText(form.eh);
		if (!_v4.$) {
			var _v5 = _v4.a;
			var hour = _v5.a;
			var minute = _v5.b;
			return $elm$core$Result$Ok(
				$author$project$Data$TimeSchedule$FixedTime(
					{a2: hour, a8: minute}));
		} else {
			return $elm$core$Result$Err('開始時刻を正しく入力してください (HH:MM)');
		}
	}
};
var $author$project$Update$ScheduleActions$buildScheduleFromForm = F2(
	function (model, form) {
		if ($elm$core$String$isEmpty(form.dX) || (!A2($elm$core$Dict$member, form.dX, model.aC.aN))) {
			return $elm$core$Result$Err('対象プロジェクトを選択してください');
		} else {
			var _v0 = $author$project$Update$ScheduleActions$parseTiming(form);
			if (_v0.$ === 1) {
				var errMsg = _v0.a;
				return $elm$core$Result$Err(errMsg);
			} else {
				var timing = _v0.a;
				var _v1 = $author$project$Update$ScheduleActions$parseRecurrence(form);
				if (_v1.$ === 1) {
					var errMsg = _v1.a;
					return $elm$core$Result$Err(errMsg);
				} else {
					var recurrence = _v1.a;
					var _v2 = function () {
						var _v3 = form.dc;
						if (!_v3.$) {
							var existing = _v3.a;
							return _Utils_Tuple2(existing, model);
						} else {
							return A2($author$project$Types$nextId, 'sched', model);
						}
					}();
					var schedId = _v2.a;
					var nextModel = _v2.b;
					return $elm$core$Result$Ok(
						_Utils_Tuple2(
							{
								db: A3($elm$core$Basics$clamp, 5, 720, form.db),
								dd: form.dd,
								a3: schedId,
								dX: form.dX,
								d_: recurrence,
								ei: timing
							},
							nextModel));
				}
			}
		}
	});
var $author$project$Update$ScheduleActions$clearSnooze = function (model) {
	var runtime = model.d7;
	return _Utils_update(
		model,
		{
			d7: _Utils_update(
				runtime,
				{bi: $elm$core$Maybe$Nothing})
		});
};
var $author$project$Update$ScheduleActions$defaultForm = function (model) {
	var todayStr = $justinmimbs$date$Date$toIsoString(
		A2($justinmimbs$date$Date$fromPosix, model.cR, model.ca));
	var defaultProjectId = function () {
		var _v0 = model.aC.aB;
		if (_v0.$ === 1) {
			var pid = _v0.a;
			return pid;
		} else {
			return A2(
				$elm$core$Maybe$withDefault,
				'',
				$elm$core$List$head(model.aC.aM));
		}
	}();
	return {
		db: 30,
		dc: $elm$core$Maybe$Nothing,
		dd: true,
		dN: todayStr,
		dX: defaultProjectId,
		dY: '18:00',
		d$: 'daily',
		eh: '09:00',
		ej: 'random',
		es: _List_fromArray(
			[0, 2, 4])
	};
};
var $author$project$Update$ScheduleActions$deleteSchedule = F2(
	function (sid, model) {
		var appData = model.aC;
		var nextSchedules = A2(
			$elm$core$List$filter,
			function (s) {
				return !_Utils_eq(s.a3, sid);
			},
			appData.aW);
		return _Utils_update(
			model,
			{
				aC: _Utils_update(
					appData,
					{aW: nextSchedules})
			});
	});
var $justinmimbs$date$Date$Days = 3;
var $justinmimbs$date$Date$Months = 1;
var $justinmimbs$date$Date$add = F3(
	function (unit, n, _v0) {
		var rd = _v0;
		switch (unit) {
			case 0:
				return A3($justinmimbs$date$Date$add, 1, 12 * n, rd);
			case 1:
				var date = $justinmimbs$date$Date$toCalendarDate(rd);
				var wholeMonths = ((12 * (date.cQ - 1)) + ($justinmimbs$date$Date$monthToNumber(date.b3) - 1)) + n;
				var m = $justinmimbs$date$Date$numberToMonth(
					A2($elm$core$Basics$modBy, 12, wholeMonths) + 1);
				var y = A2($justinmimbs$date$Date$floorDiv, wholeMonths, 12) + 1;
				return ($justinmimbs$date$Date$daysBeforeYear(y) + A2($justinmimbs$date$Date$daysBeforeMonth, y, m)) + A2(
					$elm$core$Basics$min,
					date.bE,
					A2($justinmimbs$date$Date$daysInMonth, y, m));
			case 2:
				return rd + (7 * n);
			default:
				return rd + n;
		}
	});
var $justinmimbs$time_extra$Time$Extra$Minute = 13;
var $justinmimbs$time_extra$Time$Extra$Day = 11;
var $justinmimbs$time_extra$Time$Extra$Millisecond = 15;
var $justinmimbs$time_extra$Time$Extra$Month = 2;
var $justinmimbs$date$Date$toRataDie = function (_v0) {
	var rd = _v0;
	return rd;
};
var $justinmimbs$time_extra$Time$Extra$dateToMillis = function (date) {
	var daysSinceEpoch = $justinmimbs$date$Date$toRataDie(date) - 719163;
	return daysSinceEpoch * 86400000;
};
var $justinmimbs$time_extra$Time$Extra$timeFromClock = F4(
	function (hour, minute, second, millisecond) {
		return (((hour * 3600000) + (minute * 60000)) + (second * 1000)) + millisecond;
	});
var $elm$time$Time$toMillis = F2(
	function (_v0, time) {
		return A2(
			$elm$core$Basics$modBy,
			1000,
			$elm$time$Time$posixToMillis(time));
	});
var $justinmimbs$time_extra$Time$Extra$timeFromPosix = F2(
	function (zone, posix) {
		return A4(
			$justinmimbs$time_extra$Time$Extra$timeFromClock,
			A2($elm$time$Time$toHour, zone, posix),
			A2($elm$time$Time$toMinute, zone, posix),
			A2($elm$time$Time$toSecond, zone, posix),
			A2($elm$time$Time$toMillis, zone, posix));
	});
var $justinmimbs$time_extra$Time$Extra$toOffset = F2(
	function (zone, posix) {
		var millis = $elm$time$Time$posixToMillis(posix);
		var localMillis = $justinmimbs$time_extra$Time$Extra$dateToMillis(
			A2($justinmimbs$date$Date$fromPosix, zone, posix)) + A2($justinmimbs$time_extra$Time$Extra$timeFromPosix, zone, posix);
		return ((localMillis - millis) / 60000) | 0;
	});
var $justinmimbs$time_extra$Time$Extra$posixFromDateTime = F3(
	function (zone, date, time) {
		var millis = $justinmimbs$time_extra$Time$Extra$dateToMillis(date) + time;
		var offset0 = A2(
			$justinmimbs$time_extra$Time$Extra$toOffset,
			zone,
			$elm$time$Time$millisToPosix(millis));
		var posix1 = $elm$time$Time$millisToPosix(millis - (offset0 * 60000));
		var offset1 = A2($justinmimbs$time_extra$Time$Extra$toOffset, zone, posix1);
		if (_Utils_eq(offset0, offset1)) {
			return posix1;
		} else {
			var posix2 = $elm$time$Time$millisToPosix(millis - (offset1 * 60000));
			var offset2 = A2($justinmimbs$time_extra$Time$Extra$toOffset, zone, posix2);
			return _Utils_eq(offset1, offset2) ? posix2 : posix1;
		}
	});
var $justinmimbs$time_extra$Time$Extra$add = F4(
	function (interval, n, zone, posix) {
		add:
		while (true) {
			switch (interval) {
				case 15:
					return $elm$time$Time$millisToPosix(
						$elm$time$Time$posixToMillis(posix) + n);
				case 14:
					var $temp$interval = 15,
						$temp$n = n * 1000,
						$temp$zone = zone,
						$temp$posix = posix;
					interval = $temp$interval;
					n = $temp$n;
					zone = $temp$zone;
					posix = $temp$posix;
					continue add;
				case 13:
					var $temp$interval = 15,
						$temp$n = n * 60000,
						$temp$zone = zone,
						$temp$posix = posix;
					interval = $temp$interval;
					n = $temp$n;
					zone = $temp$zone;
					posix = $temp$posix;
					continue add;
				case 12:
					var $temp$interval = 15,
						$temp$n = n * 3600000,
						$temp$zone = zone,
						$temp$posix = posix;
					interval = $temp$interval;
					n = $temp$n;
					zone = $temp$zone;
					posix = $temp$posix;
					continue add;
				case 11:
					return A3(
						$justinmimbs$time_extra$Time$Extra$posixFromDateTime,
						zone,
						A3(
							$justinmimbs$date$Date$add,
							3,
							n,
							A2($justinmimbs$date$Date$fromPosix, zone, posix)),
						A2($justinmimbs$time_extra$Time$Extra$timeFromPosix, zone, posix));
				case 2:
					return A3(
						$justinmimbs$time_extra$Time$Extra$posixFromDateTime,
						zone,
						A3(
							$justinmimbs$date$Date$add,
							1,
							n,
							A2($justinmimbs$date$Date$fromPosix, zone, posix)),
						A2($justinmimbs$time_extra$Time$Extra$timeFromPosix, zone, posix));
				case 0:
					var $temp$interval = 2,
						$temp$n = n * 12,
						$temp$zone = zone,
						$temp$posix = posix;
					interval = $temp$interval;
					n = $temp$n;
					zone = $temp$zone;
					posix = $temp$posix;
					continue add;
				case 1:
					var $temp$interval = 2,
						$temp$n = n * 3,
						$temp$zone = zone,
						$temp$posix = posix;
					interval = $temp$interval;
					n = $temp$n;
					zone = $temp$zone;
					posix = $temp$posix;
					continue add;
				case 3:
					var $temp$interval = 11,
						$temp$n = n * 7,
						$temp$zone = zone,
						$temp$posix = posix;
					interval = $temp$interval;
					n = $temp$n;
					zone = $temp$zone;
					posix = $temp$posix;
					continue add;
				default:
					var weekday = interval;
					var $temp$interval = 11,
						$temp$n = n * 7,
						$temp$zone = zone,
						$temp$posix = posix;
					interval = $temp$interval;
					n = $temp$n;
					zone = $temp$zone;
					posix = $temp$posix;
					continue add;
			}
		}
	});
var $author$project$Data$TimeSchedule$pad2 = function (n) {
	return (n < 10) ? ('0' + $elm$core$String$fromInt(n)) : $elm$core$String$fromInt(n);
};
var $author$project$Data$TimeSchedule$formatTimeOfDay = F2(
	function (hour, minute) {
		return $author$project$Data$TimeSchedule$pad2(hour) + (':' + $author$project$Data$TimeSchedule$pad2(minute));
	});
var $author$project$Data$TimeSchedule$matchesRecurrence = F2(
	function (date, rec) {
		switch (rec.$) {
			case 0:
				return true;
			case 1:
				var weekdays = rec.a;
				return A2(
					$elm$core$List$member,
					$justinmimbs$date$Date$weekday(date),
					weekdays);
			default:
				var target = rec.a;
				return _Utils_eq(
					$justinmimbs$date$Date$year(date),
					target.cQ) && (_Utils_eq(
					$justinmimbs$date$Date$month(date),
					target.b3) && _Utils_eq(
					$justinmimbs$date$Date$day(date),
					target.bE));
		}
	});
var $justinmimbs$time_extra$Time$Extra$partsToPosix = F2(
	function (zone, _v0) {
		var year = _v0.cQ;
		var month = _v0.b3;
		var day = _v0.bE;
		var hour = _v0.a2;
		var minute = _v0.a8;
		var second = _v0.d8;
		var millisecond = _v0.dy;
		return A3(
			$justinmimbs$time_extra$Time$Extra$posixFromDateTime,
			zone,
			A3($justinmimbs$date$Date$fromCalendarDate, year, month, day),
			A4(
				$justinmimbs$time_extra$Time$Extra$timeFromClock,
				A3($elm$core$Basics$clamp, 0, 23, hour),
				A3($elm$core$Basics$clamp, 0, 59, minute),
				A3($elm$core$Basics$clamp, 0, 59, second),
				A3($elm$core$Basics$clamp, 0, 999, millisecond)));
	});
var $elm$core$String$foldl = _String_foldl;
var $author$project$Data$TimeSchedule$hashString = function (str) {
	return A3(
		$elm$core$String$foldl,
		F2(
			function (ch, acc) {
				return A2(
					$elm$core$Basics$modBy,
					2147483647,
					(acc * 131) + $elm$core$Char$toCode(ch));
			}),
		5381,
		str);
};
var $author$project$Data$TimeSchedule$resolveStartTimeForDate = F2(
	function (date, workSchedule) {
		var _v0 = workSchedule.ei;
		if (!_v0.$) {
			var t = _v0.a;
			return _Utils_Tuple2(t.a2, t.a8);
		} else {
			var w = _v0.a;
			var startMin = (w.cm * 60) + w.cn;
			var seedKey = workSchedule.a3 + (':' + $justinmimbs$date$Date$toIsoString(date));
			var endMin = (w.ck * 60) + w.cl;
			var span = A2($elm$core$Basics$max, 0, endMin - startMin);
			var _v1 = A2(
				$elm$random$Random$step,
				A2($elm$random$Random$int, 0, span),
				$elm$random$Random$initialSeed(
					$author$project$Data$TimeSchedule$hashString(seedKey)));
			var offsetMin = _v1.a;
			var totalMin = startMin + offsetMin;
			return _Utils_Tuple2(
				A2($elm$core$Basics$modBy, 24, (totalMin / 60) | 0),
				A2($elm$core$Basics$modBy, 60, totalMin));
		}
	});
var $author$project$Data$TimeSchedule$checkDateWindow = F4(
	function (zone, now, date, workSchedule) {
		if (!A2($author$project$Data$TimeSchedule$matchesRecurrence, date, workSchedule.d_)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var nowMs = $elm$time$Time$posixToMillis(now);
			var _v0 = A2($author$project$Data$TimeSchedule$resolveStartTimeForDate, date, workSchedule);
			var hour = _v0.a;
			var minute = _v0.b;
			var slotStart = A2(
				$justinmimbs$time_extra$Time$Extra$partsToPosix,
				zone,
				{
					bE: $justinmimbs$date$Date$day(date),
					a2: hour,
					dy: 0,
					a8: minute,
					b3: $justinmimbs$date$Date$month(date),
					d8: 0,
					cQ: $justinmimbs$date$Date$year(date)
				});
			var slotEnd = A4(
				$justinmimbs$time_extra$Time$Extra$add,
				13,
				A2($elm$core$Basics$max, 1, workSchedule.db),
				zone,
				slotStart);
			return ((_Utils_cmp(
				nowMs,
				$elm$time$Time$posixToMillis(slotStart)) > -1) && (_Utils_cmp(
				nowMs,
				$elm$time$Time$posixToMillis(slotEnd)) < 0)) ? $elm$core$Maybe$Just(
				{
					av: hour,
					aw: minute,
					ag: $justinmimbs$date$Date$toIsoString(date) + ('T' + A2($author$project$Data$TimeSchedule$formatTimeOfDay, hour, minute)),
					bh: slotStart,
					L: workSchedule
				}) : $elm$core$Maybe$Nothing;
		}
	});
var $author$project$Data$TimeSchedule$findActiveWindow = F5(
	function (zone, now, today, yesterday, workSchedule) {
		var _v0 = A4($author$project$Data$TimeSchedule$checkDateWindow, zone, now, today, workSchedule);
		if (!_v0.$) {
			var win = _v0.a;
			return $elm$core$Maybe$Just(win);
		} else {
			return A4($author$project$Data$TimeSchedule$checkDateWindow, zone, now, yesterday, workSchedule);
		}
	});
var $elm$core$Set$insert = F2(
	function (key, _v0) {
		var dict = _v0;
		return A3($elm$core$Dict$insert, key, 0, dict);
	});
var $elm$core$Set$fromList = function (list) {
	return A3($elm$core$List$foldl, $elm$core$Set$insert, $elm$core$Set$empty, list);
};
var $elm$core$Set$member = F2(
	function (key, _v0) {
		var dict = _v0;
		return A2($elm$core$Dict$member, key, dict);
	});
var $author$project$Data$TimeSchedule$isLateTrigger = F2(
	function (nowMs, slotStart) {
		return _Utils_cmp(
			nowMs - $elm$time$Time$posixToMillis(slotStart),
			60 * 1000) > -1;
	});
var $author$project$Data$TimeSchedule$toTriggered = F2(
	function (nowMs, win) {
		return {
			bY: A2($author$project$Data$TimeSchedule$isLateTrigger, nowMs, win.bh),
			av: win.av,
			aw: win.aw,
			ag: win.ag,
			L: win.L
		};
	});
var $author$project$Data$TimeSchedule$pickNonSnoozed = F3(
	function (nowMs, snoozedId, windows) {
		return A2(
			$elm$core$Maybe$map,
			$author$project$Data$TimeSchedule$toTriggered(nowMs),
			$elm$core$List$head(
				A2(
					$elm$core$List$filter,
					function (win) {
						return !_Utils_eq(
							$elm$core$Maybe$Just(win.L.a3),
							snoozedId);
					},
					windows)));
	});
var $author$project$Data$TimeSchedule$pickTriggeredSchedule = F3(
	function (now, runtime, activeWindows) {
		var unhandled = A2(
			$elm$core$List$filter,
			function (win) {
				return !_Utils_eq(
					A2($elm$core$Dict$get, win.L.a3, runtime.aH),
					$elm$core$Maybe$Just(win.ag));
			},
			activeWindows);
		var nowMs = $elm$time$Time$posixToMillis(now);
		var _v0 = runtime.bi;
		if (!_v0.$) {
			var snooze = _v0.a;
			var snoozedWindow = $elm$core$List$head(
				A2(
					$elm$core$List$filter,
					function (win) {
						return _Utils_eq(win.L.a3, snooze.cu);
					},
					unhandled));
			if (!snoozedWindow.$) {
				var win = snoozedWindow.a;
				return (_Utils_cmp(
					nowMs,
					$elm$time$Time$posixToMillis(snooze.eo)) > -1) ? $elm$core$Maybe$Just(
					A2($author$project$Data$TimeSchedule$toTriggered, nowMs, win)) : A3(
					$author$project$Data$TimeSchedule$pickNonSnoozed,
					nowMs,
					$elm$core$Maybe$Just(snooze.cu),
					unhandled);
			} else {
				return A3($author$project$Data$TimeSchedule$pickNonSnoozed, nowMs, $elm$core$Maybe$Nothing, unhandled);
			}
		} else {
			return A3($author$project$Data$TimeSchedule$pickNonSnoozed, nowMs, $elm$core$Maybe$Nothing, unhandled);
		}
	});
var $author$project$Data$TimeSchedule$evaluateSchedules = F5(
	function (zone, now, existingProjectIds, workSchedules, runtime) {
		var validSchedules = A2(
			$elm$core$List$filter,
			function (s) {
				return s.dd && A2($elm$core$Set$member, s.dX, existingProjectIds);
			},
			workSchedules);
		var today = A2($justinmimbs$date$Date$fromPosix, zone, now);
		var yesterday = A3($justinmimbs$date$Date$add, 3, -1, today);
		var activeWindows = A2(
			$elm$core$List$filterMap,
			A4($author$project$Data$TimeSchedule$findActiveWindow, zone, now, today, yesterday),
			validSchedules);
		var triggered = A3($author$project$Data$TimeSchedule$pickTriggeredSchedule, now, runtime, activeWindows);
		var activeProjectIds = $elm$core$Set$fromList(
			A2(
				$elm$core$List$map,
				A2(
					$elm$core$Basics$composeR,
					function ($) {
						return $.L;
					},
					function ($) {
						return $.dX;
					}),
				activeWindows));
		return {bs: activeProjectIds, cJ: triggered};
	});
var $author$project$Update$ScheduleActions$evaluateScheduleStateOnly = function (model) {
	var existingProjectIds = $elm$core$Set$fromList(
		$elm$core$Dict$keys(model.aC.aN));
	var _eval = A5($author$project$Data$TimeSchedule$evaluateSchedules, model.cR, model.ca, existingProjectIds, model.aC.aW, model.d7);
	return _Utils_update(
		model,
		{cS: _eval.bs});
};
var $author$project$Update$ScheduleActions$formFromSchedule = function (s) {
	var _v0 = function () {
		var _v1 = s.d_;
		switch (_v1.$) {
			case 0:
				return _Utils_Tuple3(
					'daily',
					_List_fromArray(
						[0, 2, 4]),
					'2026-01-01');
			case 1:
				var wds = _v1.a;
				return _Utils_Tuple3('weekly', wds, '2026-01-01');
			default:
				var parts = _v1.a;
				return _Utils_Tuple3(
					'once',
					_List_Nil,
					$elm$core$String$fromInt(parts.cQ) + ('-' + ($author$project$Types$pad2(
						$author$project$Data$TimeSchedule$monthToInt(parts.b3)) + ('-' + $author$project$Types$pad2(parts.bE)))));
		}
	}();
	var kind = _v0.a;
	var days = _v0.b;
	var onceDate = _v0.c;
	var _v2 = function () {
		var _v3 = s.ei;
		if (!_v3.$) {
			var t = _v3.a;
			return _Utils_Tuple3(
				'fixed',
				A2($author$project$Data$TimeSchedule$formatTimeOfDay, t.a2, t.a8),
				'18:00');
		} else {
			var w = _v3.a;
			return _Utils_Tuple3(
				'random',
				A2($author$project$Data$TimeSchedule$formatTimeOfDay, w.cm, w.cn),
				A2($author$project$Data$TimeSchedule$formatTimeOfDay, w.ck, w.cl));
		}
	}();
	var tKind = _v2.a;
	var startT = _v2.b;
	var endT = _v2.c;
	return {
		db: s.db,
		dc: $elm$core$Maybe$Just(s.a3),
		dd: s.dd,
		dN: onceDate,
		dX: s.dX,
		dY: endT,
		d$: kind,
		eh: startT,
		ej: tKind,
		es: days
	};
};
var $author$project$Update$ScheduleActions$mapScheduleForm = F2(
	function (fn, model) {
		var _v0 = model.bG;
		if (_v0.$ === 4) {
			var form = _v0.a;
			return _Utils_update(
				model,
				{
					bG: $author$project$Types$ScheduleManagerDialog(
						fn(form))
				});
		} else {
			return model;
		}
	});
var $author$project$Update$ScheduleActions$markSlotHandled = F3(
	function (schedId, slotKey, model) {
		var runtime = model.d7;
		var nextHandled = A3($elm$core$Dict$insert, schedId, slotKey, runtime.aH);
		var appData = model.aC;
		return _Utils_update(
			model,
			{
				aC: _Utils_update(
					appData,
					{aH: nextHandled}),
				d7: _Utils_update(
					runtime,
					{aH: nextHandled})
			});
	});
var $author$project$Ports$setFavicon = _Platform_outgoingPort('setFavicon', $elm$json$Json$Encode$bool);
var $author$project$Update$ScheduleActions$saveAndClearFavicon = function (model) {
	var _v0 = $author$project$Update$PersistenceActions$withSaveImmediate(model);
	var savedModel = _v0.a;
	var saveCmd = _v0.b;
	return _Utils_Tuple2(
		savedModel,
		$elm$core$Platform$Cmd$batch(
			_List_fromArray(
				[
					saveCmd,
					$author$project$Ports$setFavicon(false)
				])));
};
var $author$project$Data$TimeSchedule$snoozeUntil = function (now) {
	return $elm$time$Time$millisToPosix(
		$elm$time$Time$posixToMillis(now) + ((15 * 60) * 1000));
};
var $author$project$Update$ScheduleActions$snoozeOnOutsideClick = F2(
	function (trig, model) {
		var runtime = model.d7;
		var nextRuntime = _Utils_update(
			runtime,
			{
				bi: $elm$core$Maybe$Just(
					{
						cu: trig.L.a3,
						eo: $author$project$Data$TimeSchedule$snoozeUntil(model.ca)
					})
			});
		return A2(
			$author$project$Update$PersistenceActions$withCmd,
			$author$project$Ports$setFavicon(false),
			_Utils_update(
				model,
				{bG: $author$project$Types$NoDialog, d7: nextRuntime}));
	});
var $author$project$DragCanvas$resetViewport = function (_v0) {
	var data = _v0;
	return _Utils_update(
		data,
		{
			e: $author$project$DragCanvas$NotDragging,
			m: {eu: 0, ev: 0},
			p: 1.0
		});
};
var $author$project$Update$ScheduleActions$switchToProjectIfNeeded = F2(
	function (pid, model) {
		var appData = model.aC;
		return _Utils_eq(
			appData.aB,
			$author$project$Data$WorkspaceData$ProjectId(pid)) ? model : (A2($elm$core$Dict$member, pid, appData.aN) ? _Utils_update(
			model,
			{
				aC: _Utils_update(
					appData,
					{
						aB: $author$project$Data$WorkspaceData$ProjectId(pid)
					}),
				R: $author$project$DragCanvas$resetViewport(model.R),
				aq: $elm$core$Maybe$Nothing,
				c_: $elm$core$Maybe$Nothing,
				d9: $elm$core$Maybe$Nothing
			}) : model);
	});
var $author$project$Update$ScheduleActions$toggleSchedule = F2(
	function (sid, model) {
		var appData = model.aC;
		var nextSchedules = A2(
			$elm$core$List$map,
			function (s) {
				return _Utils_eq(s.a3, sid) ? _Utils_update(
					s,
					{dd: !s.dd}) : s;
			},
			appData.aW);
		return _Utils_update(
			model,
			{
				aC: _Utils_update(
					appData,
					{aW: nextSchedules})
			});
	});
var $author$project$Update$ScheduleActions$upsertSchedule = F2(
	function (workSchedule, model) {
		var appData = model.aC;
		var exists = A2(
			$elm$core$List$any,
			function (s) {
				return _Utils_eq(s.a3, workSchedule.a3);
			},
			appData.aW);
		var nextSchedules = exists ? A2(
			$elm$core$List$map,
			function (s) {
				return _Utils_eq(s.a3, workSchedule.a3) ? workSchedule : s;
			},
			appData.aW) : _Utils_ap(
			appData.aW,
			_List_fromArray(
				[workSchedule]));
		return _Utils_update(
			model,
			{
				aC: _Utils_update(
					appData,
					{aW: nextSchedules})
			});
	});
var $author$project$Update$ScheduleActions$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 0:
				return $author$project$Update$PersistenceActions$withNoCmd(
					_Utils_update(
						model,
						{
							bG: $author$project$Types$ScheduleManagerDialog(
								$author$project$Update$ScheduleActions$defaultForm(model)),
							ds: false
						}));
			case 1:
				var workSchedule = msg.a;
				return $author$project$Update$PersistenceActions$withNoCmd(
					_Utils_update(
						model,
						{
							bG: $author$project$Types$ScheduleManagerDialog(
								$author$project$Update$ScheduleActions$formFromSchedule(workSchedule))
						}));
			case 2:
				return $author$project$Update$PersistenceActions$withNoCmd(
					_Utils_update(
						model,
						{
							bG: $author$project$Types$ScheduleManagerDialog(
								$author$project$Update$ScheduleActions$defaultForm(model))
						}));
			case 3:
				var pid = msg.a;
				return $author$project$Update$PersistenceActions$withNoCmd(
					A2(
						$author$project$Update$ScheduleActions$mapScheduleForm,
						function (f) {
							return _Utils_update(
								f,
								{dX: pid});
						},
						model));
			case 4:
				var enabled = msg.a;
				return $author$project$Update$PersistenceActions$withNoCmd(
					A2(
						$author$project$Update$ScheduleActions$mapScheduleForm,
						function (f) {
							return _Utils_update(
								f,
								{dd: enabled});
						},
						model));
			case 5:
				var kind = msg.a;
				return $author$project$Update$PersistenceActions$withNoCmd(
					A2(
						$author$project$Update$ScheduleActions$mapScheduleForm,
						function (f) {
							return _Utils_update(
								f,
								{ej: kind});
						},
						model));
			case 6:
				var t = msg.a;
				return $author$project$Update$PersistenceActions$withNoCmd(
					A2(
						$author$project$Update$ScheduleActions$mapScheduleForm,
						function (f) {
							return _Utils_update(
								f,
								{eh: t});
						},
						model));
			case 7:
				var t = msg.a;
				return $author$project$Update$PersistenceActions$withNoCmd(
					A2(
						$author$project$Update$ScheduleActions$mapScheduleForm,
						function (f) {
							return _Utils_update(
								f,
								{dY: t});
						},
						model));
			case 8:
				var raw = msg.a;
				var dur = A3(
					$elm$core$Basics$clamp,
					5,
					720,
					A2(
						$elm$core$Maybe$withDefault,
						30,
						$elm$core$String$toInt(raw)));
				return $author$project$Update$PersistenceActions$withNoCmd(
					A2(
						$author$project$Update$ScheduleActions$mapScheduleForm,
						function (f) {
							return _Utils_update(
								f,
								{db: dur});
						},
						model));
			case 9:
				var kind = msg.a;
				return $author$project$Update$PersistenceActions$withNoCmd(
					A2(
						$author$project$Update$ScheduleActions$mapScheduleForm,
						function (f) {
							return _Utils_update(
								f,
								{d$: kind});
						},
						model));
			case 10:
				var wd = msg.a;
				return $author$project$Update$PersistenceActions$withNoCmd(
					A2(
						$author$project$Update$ScheduleActions$mapScheduleForm,
						function (f) {
							var nextDays = A2($elm$core$List$member, wd, f.es) ? A2(
								$elm$core$List$filter,
								$elm$core$Basics$neq(wd),
								f.es) : _Utils_ap(
								f.es,
								_List_fromArray(
									[wd]));
							return _Utils_update(
								f,
								{es: nextDays});
						},
						model));
			case 11:
				var d = msg.a;
				return $author$project$Update$PersistenceActions$withNoCmd(
					A2(
						$author$project$Update$ScheduleActions$mapScheduleForm,
						function (f) {
							return _Utils_update(
								f,
								{dN: d});
						},
						model));
			case 12:
				var _v1 = model.bG;
				if (_v1.$ === 4) {
					var form = _v1.a;
					var _v2 = A2($author$project$Update$ScheduleActions$buildScheduleFromForm, model, form);
					if (_v2.$ === 1) {
						var errMsg = _v2.a;
						return $author$project$Update$PersistenceActions$withNoCmd(
							_Utils_update(
								model,
								{
									bm: $elm$core$Maybe$Just(
										{ac: 1, ad: errMsg})
								}));
					} else {
						var _v3 = _v2.a;
						var workSchedule = _v3.a;
						var nextModel = _v3.b;
						var prevData = model.aC;
						return $author$project$Update$PersistenceActions$withSaveImmediate(
							A3(
								$author$project$Types$pushUndoSnapshot,
								'スケジュール保存',
								prevData,
								$author$project$Update$ScheduleActions$evaluateScheduleStateOnly(
									function (m) {
										return _Utils_update(
											m,
											{
												bG: $author$project$Types$ScheduleManagerDialog(
													$author$project$Update$ScheduleActions$defaultForm(m))
											});
									}(
										A2($author$project$Update$ScheduleActions$upsertSchedule, workSchedule, nextModel)))));
					}
				} else {
					return $author$project$Update$PersistenceActions$withNoCmd(model);
				}
			case 13:
				var sid = msg.a;
				var prevData = model.aC;
				return $author$project$Update$PersistenceActions$withSaveImmediate(
					A3(
						$author$project$Types$pushUndoSnapshot,
						'スケジュール有効切替',
						prevData,
						$author$project$Update$ScheduleActions$evaluateScheduleStateOnly(
							A2($author$project$Update$ScheduleActions$toggleSchedule, sid, model))));
			case 14:
				var sid = msg.a;
				var prevData = model.aC;
				return $author$project$Update$PersistenceActions$withSaveImmediate(
					A3(
						$author$project$Types$pushUndoSnapshot,
						'スケジュール削除',
						prevData,
						$author$project$Update$ScheduleActions$evaluateScheduleStateOnly(
							A2($author$project$Update$ScheduleActions$deleteSchedule, sid, model))));
			case 15:
				var trig = msg.a;
				return $author$project$Update$ScheduleActions$saveAndClearFavicon(
					$author$project$Update$ScheduleActions$evaluateScheduleStateOnly(
						function (m) {
							return _Utils_update(
								m,
								{bG: $author$project$Types$NoDialog});
						}(
							A2(
								$author$project$Update$ScheduleActions$switchToProjectIfNeeded,
								trig.L.dX,
								$author$project$Update$ScheduleActions$clearSnooze(
									A3($author$project$Update$ScheduleActions$markSlotHandled, trig.L.a3, trig.ag, model))))));
			case 16:
				var trig = msg.a;
				return A2($author$project$Update$ScheduleActions$snoozeOnOutsideClick, trig, model);
			default:
				var trig = msg.a;
				return $author$project$Update$ScheduleActions$saveAndClearFavicon(
					$author$project$Update$ScheduleActions$evaluateScheduleStateOnly(
						function (m) {
							return _Utils_update(
								m,
								{bG: $author$project$Types$NoDialog});
						}(
							$author$project$Update$ScheduleActions$clearSnooze(
								A3($author$project$Update$ScheduleActions$markSlotHandled, trig.L.a3, trig.ag, model)))));
		}
	});
var $author$project$Types$ArchiveDialog = {$: 2};
var $author$project$Types$ConfirmDeleteProject = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $author$project$Types$GotCanvasSizeForZoom = F2(
	function (a, b) {
		return {$: 38, a: a, b: b};
	});
var $author$project$Types$MarkdownExportDialog = function (a) {
	return {$: 6, a: a};
};
var $author$project$Types$StatusManagerDialog = function (a) {
	return {$: 3, a: a};
};
var $author$project$Data$MarkdownFormatter$formatCard = function (noteCard) {
	var title = $elm$core$String$isEmpty(
		$elm$core$String$trim(noteCard.c2.ek)) ? '無題のカード' : noteCard.c2.ek;
	return $elm$core$String$isEmpty(
		$elm$core$String$trim(noteCard.c2.cX)) ? ('### ' + title) : ('### ' + (title + ('\n\n' + noteCard.c2.cX)));
};
var $author$project$Data$MarkdownFormatter$exportCards = function (noteCards) {
	return A2(
		$elm$core$String$join,
		'\n\n',
		A2($elm$core$List$map, $author$project$Data$MarkdownFormatter$formatCard, noteCards));
};
var $author$project$Update$WorkspaceActions$buildMarkdownFromDialog = function (model) {
	var _v0 = model.bG;
	if (_v0.$ === 6) {
		var st = _v0.a;
		var ws = $author$project$Types$activeWorkspaceData(model);
		var selectedCards = A2(
			$elm$core$List$filterMap,
			function (cid) {
				return A2($elm$core$Dict$get, cid, ws.b9);
			},
			A2(
				$elm$core$List$filter,
				function (cid) {
					return A2($elm$core$Set$member, cid, st.ea);
				},
				st.dQ));
		return $author$project$Data$MarkdownFormatter$exportCards(selectedCards);
	} else {
		return '';
	}
};
var $elm$core$Dict$map = F2(
	function (func, dict) {
		if (dict.$ === -2) {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				A2(func, key, value),
				A2($elm$core$Dict$map, func, left),
				A2($elm$core$Dict$map, func, right));
		}
	});
var $author$project$Update$WorkspaceActions$commitStatusManagerIfOpen = function (model) {
	var _v0 = _Utils_Tuple2(model.bG, model.aC.aB);
	if ((_v0.a.$ === 3) && (_v0.b.$ === 1)) {
		var draftOptions = _v0.a.a;
		var prevData = model.aC;
		var cleaned = A2(
			$elm$core$List$map,
			function (opt) {
				return _Utils_update(
					opt,
					{
						du: $elm$core$String$isEmpty(
							$elm$core$String$trim(opt.du)) ? '状態' : $elm$core$String$trim(opt.du)
					});
			},
			draftOptions);
		var fallbackId = A2(
			$elm$core$Maybe$withDefault,
			'idea',
			A2(
				$elm$core$Maybe$map,
				function ($) {
					return $.a3;
				},
				$elm$core$List$head(cleaned)));
		var validIds = $elm$core$Set$fromList(
			A2(
				$elm$core$List$map,
				function ($) {
					return $.a3;
				},
				cleaned));
		return $author$project$Update$PersistenceActions$withSaveImmediate(
			$author$project$Update$PersistenceActions$markUnsavedChanges(
				A3(
					$author$project$Types$pushUndoSnapshot,
					'状態選択肢の更新',
					prevData,
					function (m) {
						return _Utils_update(
							m,
							{bG: $author$project$Types$NoDialog});
					}(
						A2(
							$author$project$Types$updateActiveWorkspaceData,
							function (ws) {
								return _Utils_update(
									ws,
									{
										b9: A2(
											$elm$core$Dict$map,
											F2(
												function (_v1, item) {
													if (A2($elm$core$Set$member, item.c2.ec, validIds)) {
														return item;
													} else {
														var c = item.c2;
														return _Utils_update(
															item,
															{
																c2: _Utils_update(
																	c,
																	{ec: fallbackId})
															});
													}
												}),
											ws.b9),
										cA: cleaned
									});
							},
							model)))));
	} else {
		return $author$project$Update$PersistenceActions$withNoCmd(
			_Utils_update(
				model,
				{bG: $author$project$Types$NoDialog}));
	}
};
var $author$project$Ports$copyToClipboard = _Platform_outgoingPort('copyToClipboard', $elm$json$Json$Encode$string);
var $author$project$Update$WorkspaceActions$createProject = F3(
	function (pid, name, model) {
		var newWs = $author$project$Data$WorkspaceData$emptyWorkspace(name);
		var appData = model.aC;
		var nextAppData = _Utils_update(
			appData,
			{
				aB: $author$project$Data$WorkspaceData$ProjectId(pid),
				aM: _Utils_ap(
					appData.aM,
					_List_fromArray(
						[pid])),
				aN: A3($elm$core$Dict$insert, pid, newWs, appData.aN)
			});
		return _Utils_update(
			model,
			{
				aC: nextAppData,
				R: $author$project$DragCanvas$resetViewport(model.R),
				ds: false,
				dD: '',
				d9: $elm$core$Maybe$Nothing
			});
	});
var $author$project$Update$WorkspaceActions$deleteProject = F2(
	function (pid, model) {
		var appData = model.aC;
		var _v0 = A2($elm$core$Dict$get, pid, appData.aN);
		if (_v0.$ === 1) {
			return _Utils_update(
				model,
				{bG: $author$project$Types$NoDialog});
		} else {
			var ws = _v0.a;
			var wasActive = _Utils_eq(
				appData.aB,
				$author$project$Data$WorkspaceData$ProjectId(pid));
			var remainingSchedules = A2(
				$elm$core$List$filter,
				function (s) {
					return !_Utils_eq(s.dX, pid);
				},
				appData.aW);
			var nextActive = wasActive ? $author$project$Data$WorkspaceData$MemoWorkspace : appData.aB;
			var nextAppData = _Utils_update(
				appData,
				{
					aB: nextActive,
					aM: A2(
						$elm$core$List$filter,
						$elm$core$Basics$neq(pid),
						appData.aM),
					aN: A2($elm$core$Dict$remove, pid, appData.aN),
					aW: remainingSchedules
				});
			return _Utils_update(
				model,
				{
					aC: nextAppData,
					c_: wasActive ? $elm$core$Maybe$Nothing : model.c_,
					bG: $author$project$Types$NoDialog,
					d9: wasActive ? $elm$core$Maybe$Nothing : model.d9,
					bm: $elm$core$Maybe$Just(
						{ac: 0, ad: 'プロジェクト「' + (ws.b4 + '」を削除しました（UNDO可能）')})
				});
		}
	});
var $author$project$Update$ScheduleActions$commitScheduleFormOnOutsideClick = F2(
	function (form, model) {
		var _v0 = form.dc;
		if (!_v0.$) {
			var _v1 = A2($author$project$Update$ScheduleActions$buildScheduleFromForm, model, form);
			if (!_v1.$) {
				var _v2 = _v1.a;
				var workSchedule = _v2.a;
				var nextModel = _v2.b;
				var prevData = model.aC;
				return $author$project$Update$PersistenceActions$withSaveImmediate(
					A3(
						$author$project$Types$pushUndoSnapshot,
						'スケジュール編集',
						prevData,
						$author$project$Update$ScheduleActions$evaluateScheduleStateOnly(
							function (m) {
								return _Utils_update(
									m,
									{bG: $author$project$Types$NoDialog});
							}(
								A2($author$project$Update$ScheduleActions$upsertSchedule, workSchedule, nextModel)))));
			} else {
				return $author$project$Update$PersistenceActions$withNoCmd(
					_Utils_update(
						model,
						{bG: $author$project$Types$NoDialog}));
			}
		} else {
			return $author$project$Update$PersistenceActions$withNoCmd(
				_Utils_update(
					model,
					{bG: $author$project$Types$NoDialog}));
		}
	});
var $author$project$Update$WorkspaceActions$handleDialogBackdropClick = function (model) {
	var _v0 = model.bG;
	switch (_v0.$) {
		case 0:
			return $author$project$Update$PersistenceActions$withNoCmd(model);
		case 3:
			return $author$project$Update$WorkspaceActions$commitStatusManagerIfOpen(model);
		case 4:
			var form = _v0.a;
			return A2($author$project$Update$ScheduleActions$commitScheduleFormOnOutsideClick, form, model);
		case 5:
			var trig = _v0.a;
			return A2($author$project$Update$ScheduleActions$snoozeOnOutsideClick, trig, model);
		case 2:
			return $author$project$Update$PersistenceActions$withNoCmd(
				_Utils_update(
					model,
					{bG: $author$project$Types$NoDialog}));
		case 6:
			return $author$project$Update$PersistenceActions$withNoCmd(
				_Utils_update(
					model,
					{bG: $author$project$Types$NoDialog}));
		case 1:
			return $author$project$Update$PersistenceActions$withNoCmd(
				_Utils_update(
					model,
					{bG: $author$project$Types$NoDialog}));
		case 7:
			return $author$project$Update$PersistenceActions$withNoCmd(
				_Utils_update(
					model,
					{bG: $author$project$Types$NoDialog}));
		default:
			return $author$project$Update$PersistenceActions$withNoCmd(
				_Utils_update(
					model,
					{bG: $author$project$Types$NoDialog}));
	}
};
var $author$project$Update$WorkspaceActions$mapExportState = F2(
	function (fn, model) {
		var _v0 = model.bG;
		if (_v0.$ === 6) {
			var st = _v0.a;
			return _Utils_update(
				model,
				{
					bG: $author$project$Types$MarkdownExportDialog(
						fn(st))
				});
		} else {
			return model;
		}
	});
var $author$project$Update$WorkspaceActions$mapStatusDraft = F2(
	function (fn, model) {
		var _v0 = model.bG;
		if (_v0.$ === 3) {
			var opts = _v0.a;
			return _Utils_update(
				model,
				{
					bG: $author$project$Types$StatusManagerDialog(
						fn(opts))
				});
		} else {
			return model;
		}
	});
var $author$project$Update$WorkspaceActions$performUndo = function (model) {
	var _v0 = model.cK;
	if (!_v0.b) {
		return $author$project$Update$PersistenceActions$withNoCmd(model);
	} else {
		var headSnap = _v0.a;
		var rest = _v0.b;
		var restoredData = headSnap.aC;
		var existingProjectIds = $elm$core$Set$fromList(
			$elm$core$Dict$keys(restoredData.aN));
		var _eval = A5($author$project$Data$TimeSchedule$evaluateSchedules, model.cR, model.ca, existingProjectIds, restoredData.aW, model.d7);
		var nextModel = _Utils_update(
			model,
			{
				cS: _eval.bs,
				aC: restoredData,
				c_: $elm$core$Maybe$Nothing,
				bG: $author$project$Types$NoDialog,
				d1: $elm$core$Maybe$Nothing,
				bm: $elm$core$Maybe$Just(
					{ac: 0, ad: '元に戻しました: ' + headSnap.du}),
				cK: rest
			});
		return $author$project$Update$PersistenceActions$withSaveImmediate(nextModel);
	}
};
var $elm$core$Set$remove = F2(
	function (key, _v0) {
		var dict = _v0;
		return A2($elm$core$Dict$remove, key, dict);
	});
var $author$project$Update$WorkspaceActions$renameProject = F3(
	function (pid, newName, model) {
		var appData = model.aC;
		return _Utils_update(
			model,
			{
				aC: _Utils_update(
					appData,
					{
						aN: A3(
							$elm$core$Dict$update,
							pid,
							$elm$core$Maybe$map(
								function (ws) {
									return _Utils_update(
										ws,
										{b4: newName});
								}),
							appData.aN)
					})
			});
	});
var $author$project$Update$WorkspaceActions$setActiveWorkspace = F2(
	function (wsId, appData) {
		return _Utils_update(
			appData,
			{aB: wsId});
	});
var $author$project$Update$WorkspaceActions$setPattern = F2(
	function (pattern, ws) {
		var bg = ws.bw;
		return _Utils_update(
			ws,
			{
				bw: _Utils_update(
					bg,
					{dT: pattern})
			});
	});
var $author$project$Update$WorkspaceActions$setTone = F2(
	function (tone, ws) {
		var bg = ws.bw;
		return _Utils_update(
			ws,
			{
				bw: _Utils_update(
					bg,
					{el: tone})
			});
	});
var $author$project$Data$NoteCard$buildAdjacencyMap = F3(
	function (activeCardMap, orderIndex, links) {
		var sortByOrder = function (ids) {
			return A2(
				$elm$core$List$sortBy,
				function (cid) {
					return A2(
						$elm$core$Maybe$withDefault,
						999999,
						A2($elm$core$Dict$get, cid, orderIndex));
				},
				$elm_community$list_extra$List$Extra$unique(ids));
		};
		var insertEdge = F3(
			function (fromId, toId, acc) {
				return A3(
					$elm$core$Dict$update,
					fromId,
					function (maybeList) {
						return $elm$core$Maybe$Just(
							A2(
								$elm$core$List$cons,
								toId,
								A2($elm$core$Maybe$withDefault, _List_Nil, maybeList)));
					},
					acc);
			});
		var rawMap = A3(
			$elm$core$List$foldl,
			F2(
				function (_v1, acc) {
					var a = _v1.a;
					var b = _v1.b;
					return (A2($elm$core$Dict$member, a, activeCardMap) && A2($elm$core$Dict$member, b, activeCardMap)) ? A3(
						insertEdge,
						b,
						a,
						A3(insertEdge, a, b, acc)) : acc;
				}),
			$elm$core$Dict$empty,
			links);
		return A2(
			$elm$core$Dict$map,
			F2(
				function (_v0, neighbors) {
					return sortByOrder(neighbors);
				}),
			rawMap);
	});
var $author$project$Data$NoteCard$bfsComponent = F4(
	function (queue, adjMap, visited, acc) {
		bfsComponent:
		while (true) {
			if (!queue.b) {
				return _Utils_Tuple2(acc, visited);
			} else {
				var current = queue.a;
				var restQueue = queue.b;
				var neighbors = A2(
					$elm$core$List$filter,
					function (nid) {
						return !A2($elm$core$Set$member, nid, visited);
					},
					A2(
						$elm$core$Maybe$withDefault,
						_List_Nil,
						A2($elm$core$Dict$get, current, adjMap)));
				var nextVisited = A3($elm$core$List$foldl, $elm$core$Set$insert, visited, neighbors);
				var $temp$queue = _Utils_ap(restQueue, neighbors),
					$temp$adjMap = adjMap,
					$temp$visited = nextVisited,
					$temp$acc = A2($elm$core$List$cons, current, acc);
				queue = $temp$queue;
				adjMap = $temp$adjMap;
				visited = $temp$visited;
				acc = $temp$acc;
				continue bfsComponent;
			}
		}
	});
var $author$project$Data$NoteCard$collectAdjacentOrder = F4(
	function (remaining, adjMap, visited, acc) {
		collectAdjacentOrder:
		while (true) {
			if (!remaining.b) {
				return $elm$core$List$reverse(acc);
			} else {
				var headId = remaining.a;
				var rest = remaining.b;
				if (A2($elm$core$Set$member, headId, visited)) {
					var $temp$remaining = rest,
						$temp$adjMap = adjMap,
						$temp$visited = visited,
						$temp$acc = acc;
					remaining = $temp$remaining;
					adjMap = $temp$adjMap;
					visited = $temp$visited;
					acc = $temp$acc;
					continue collectAdjacentOrder;
				} else {
					var _v1 = A4(
						$author$project$Data$NoteCard$bfsComponent,
						_List_fromArray(
							[headId]),
						adjMap,
						A2($elm$core$Set$insert, headId, visited),
						_List_Nil);
					var componentReversed = _v1.a;
					var nextVisited = _v1.b;
					var $temp$remaining = rest,
						$temp$adjMap = adjMap,
						$temp$visited = nextVisited,
						$temp$acc = _Utils_ap(componentReversed, acc);
					remaining = $temp$remaining;
					adjMap = $temp$adjMap;
					visited = $temp$visited;
					acc = $temp$acc;
					continue collectAdjacentOrder;
				}
			}
		}
	});
var $elm$core$Dict$filter = F2(
	function (isGood, dict) {
		return A3(
			$elm$core$Dict$foldl,
			F3(
				function (k, v, d) {
					return A2(isGood, k, v) ? A3($elm$core$Dict$insert, k, v, d) : d;
				}),
			$elm$core$Dict$empty,
			dict);
	});
var $author$project$Data$NoteCard$normalizeOrder = F2(
	function (activeKeys, cardOrder) {
		var activeSet = $elm$core$Set$fromList(activeKeys);
		var inOrder = $elm_community$list_extra$List$Extra$unique(
			A2(
				$elm$core$List$filter,
				function (cid) {
					return A2($elm$core$Set$member, cid, activeSet);
				},
				cardOrder));
		var inOrderSet = $elm$core$Set$fromList(inOrder);
		var missing = A2(
			$elm$core$List$filter,
			function (cid) {
				return !A2($elm$core$Set$member, cid, inOrderSet);
			},
			activeKeys);
		return _Utils_ap(inOrder, missing);
	});
var $author$project$Data$NoteCard$sortWithAdjacentLinks = F3(
	function (cardOrder, links, noteCards) {
		var activeCardMap = A2(
			$elm$core$Dict$filter,
			F2(
				function (_v0, noteCard) {
					return !noteCard.c2.dq;
				}),
			noteCards);
		var orderedIds = A2(
			$author$project$Data$NoteCard$normalizeOrder,
			$elm$core$Dict$keys(activeCardMap),
			cardOrder);
		var orderIndex = $elm$core$Dict$fromList(
			A2(
				$elm$core$List$indexedMap,
				F2(
					function (idx, cid) {
						return _Utils_Tuple2(cid, idx);
					}),
				orderedIds));
		var adjMap = A3($author$project$Data$NoteCard$buildAdjacencyMap, activeCardMap, orderIndex, links);
		var sortedIds = A4($author$project$Data$NoteCard$collectAdjacentOrder, orderedIds, adjMap, $elm$core$Set$empty, _List_Nil);
		return A2(
			$elm$core$List$filterMap,
			function (cid) {
				return A2($elm$core$Dict$get, cid, activeCardMap);
			},
			sortedIds);
	});
var $author$project$DragCanvas$zoomAtCenter = F4(
	function (config, deltaY, canvasSize, _v0) {
		var data = _v0;
		var centerClient = {eu: data.I.eu + (canvasSize.bp / 2), ev: data.I.ev + (canvasSize.a1 / 2)};
		return A4($author$project$DragCanvas$zoomAt, config, deltaY, centerClient, data);
	});
var $author$project$Update$WorkspaceActions$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 0:
				var wsId = msg.a;
				return $author$project$Update$PersistenceActions$withSaveDebounced(
					$author$project$Update$PersistenceActions$markUnsavedChanges(
						_Utils_update(
							model,
							{
								aC: A2($author$project$Update$WorkspaceActions$setActiveWorkspace, wsId, model.aC),
								R: $author$project$DragCanvas$resetViewport(model.R),
								aq: $elm$core$Maybe$Nothing,
								c_: $elm$core$Maybe$Nothing,
								bX: false,
								ds: false,
								d9: $elm$core$Maybe$Nothing
							})));
			case 1:
				var name = msg.a;
				return $author$project$Update$PersistenceActions$withNoCmd(
					_Utils_update(
						model,
						{dD: name}));
			case 2:
				var trimmed = $elm$core$String$trim(model.dD);
				if ($elm$core$String$isEmpty(trimmed)) {
					return $author$project$Update$PersistenceActions$withNoCmd(model);
				} else {
					var prevData = model.aC;
					var _v1 = A2($author$project$Types$nextId, 'proj', model);
					var pid = _v1.a;
					var modelWithSeed = _v1.b;
					return $author$project$Update$PersistenceActions$withSaveImmediate(
						$author$project$Update$PersistenceActions$markUnsavedChanges(
							A3(
								$author$project$Types$pushUndoSnapshot,
								'プロジェクト作成',
								prevData,
								A3($author$project$Update$WorkspaceActions$createProject, pid, trimmed, modelWithSeed))));
				}
			case 3:
				var pid = msg.a;
				var currentName = msg.b;
				return $author$project$Update$PersistenceActions$withNoCmd(
					_Utils_update(
						model,
						{
							d1: $elm$core$Maybe$Just(
								{b4: currentName, dX: pid})
						}));
			case 4:
				var name = msg.a;
				return $author$project$Update$PersistenceActions$withNoCmd(
					_Utils_update(
						model,
						{
							d1: A2(
								$elm$core$Maybe$map,
								function (r) {
									return _Utils_update(
										r,
										{b4: name});
								},
								model.d1)
						}));
			case 5:
				var _v2 = model.d1;
				if (_v2.$ === 1) {
					return $author$project$Update$PersistenceActions$withNoCmd(model);
				} else {
					var r = _v2.a;
					var trimmed = $elm$core$String$trim(r.b4);
					if ($elm$core$String$isEmpty(trimmed)) {
						return $author$project$Update$PersistenceActions$withNoCmd(
							_Utils_update(
								model,
								{d1: $elm$core$Maybe$Nothing}));
					} else {
						var prevData = model.aC;
						return $author$project$Update$PersistenceActions$withSaveImmediate(
							$author$project$Update$PersistenceActions$markUnsavedChanges(
								A3(
									$author$project$Types$pushUndoSnapshot,
									'プロジェクト名変更',
									prevData,
									function (m) {
										return _Utils_update(
											m,
											{d1: $elm$core$Maybe$Nothing});
									}(
										A3($author$project$Update$WorkspaceActions$renameProject, r.dX, trimmed, model)))));
					}
				}
			case 6:
				return $author$project$Update$PersistenceActions$withNoCmd(
					_Utils_update(
						model,
						{d1: $elm$core$Maybe$Nothing}));
			case 7:
				var pid = msg.a;
				var _v3 = A2($elm$core$Dict$get, pid, model.aC.aN);
				if (_v3.$ === 1) {
					return $author$project$Update$PersistenceActions$withNoCmd(model);
				} else {
					var proj = _v3.a;
					return $author$project$Update$PersistenceActions$withNoCmd(
						_Utils_update(
							model,
							{
								bG: A2($author$project$Types$ConfirmDeleteProject, pid, proj.b4)
							}));
				}
			case 8:
				var pid = msg.a;
				var prevData = model.aC;
				return $author$project$Update$PersistenceActions$withSaveImmediate(
					$author$project$Update$PersistenceActions$markUnsavedChanges(
						A3(
							$author$project$Types$pushUndoSnapshot,
							'プロジェクト削除',
							prevData,
							A2($author$project$Update$WorkspaceActions$deleteProject, pid, model))));
			case 9:
				return $author$project$Update$PersistenceActions$withNoCmd(
					_Utils_update(
						model,
						{bG: $author$project$Types$NoDialog}));
			case 10:
				return $author$project$Update$WorkspaceActions$performUndo(model);
			case 11:
				return $author$project$Update$PersistenceActions$withNoCmd(
					_Utils_update(
						model,
						{dt: !model.dt}));
			case 12:
				return $author$project$Update$PersistenceActions$withNoCmd(
					_Utils_update(
						model,
						{bX: !model.bX}));
			case 13:
				var tone = msg.a;
				var prevData = model.aC;
				return $author$project$Update$PersistenceActions$withSaveDebounced(
					$author$project$Update$PersistenceActions$markUnsavedChanges(
						A3(
							$author$project$Types$pushUndoSnapshot,
							'背景トーン変更',
							prevData,
							A2(
								$author$project$Types$updateActiveWorkspaceData,
								function (ws) {
									return A2($author$project$Update$WorkspaceActions$setTone, tone, ws);
								},
								model))));
			case 14:
				var pattern = msg.a;
				var prevData = model.aC;
				return $author$project$Update$PersistenceActions$withSaveDebounced(
					$author$project$Update$PersistenceActions$markUnsavedChanges(
						A3(
							$author$project$Types$pushUndoSnapshot,
							'背景パターン変更',
							prevData,
							A2(
								$author$project$Types$updateActiveWorkspaceData,
								function (ws) {
									return A2($author$project$Update$WorkspaceActions$setPattern, pattern, ws);
								},
								model))));
			case 15:
				var q = msg.a;
				return $author$project$Update$PersistenceActions$withNoCmd(
					_Utils_update(
						model,
						{cv: q}));
			case 16:
				return $author$project$Update$PersistenceActions$withNoCmd(
					_Utils_update(
						model,
						{ds: !model.ds}));
			case 17:
				return $author$project$Update$PersistenceActions$withNoCmd(
					_Utils_update(
						model,
						{ds: false}));
			case 18:
				return $author$project$Update$PersistenceActions$withNoCmd(
					_Utils_update(
						model,
						{bG: $author$project$Types$ArchiveDialog, bX: false}));
			case 19:
				var _v4 = model.aC.aB;
				if (!_v4.$) {
					return $author$project$Update$PersistenceActions$withNoCmd(model);
				} else {
					var ws = $author$project$Types$activeWorkspaceData(model);
					return $author$project$Update$PersistenceActions$withNoCmd(
						_Utils_update(
							model,
							{
								bG: $author$project$Types$StatusManagerDialog(ws.cA),
								bX: false
							}));
				}
			case 20:
				var _v5 = A2($author$project$Types$nextId, 'st', model);
				var newSid = _v5.a;
				var nextModel = _v5.b;
				return $author$project$Update$PersistenceActions$withNoCmd(
					A2(
						$author$project$Update$WorkspaceActions$mapStatusDraft,
						function (opts) {
							return _Utils_ap(
								opts,
								_List_fromArray(
									[
										{c1: 7, a3: newSid, du: '新しい状態'}
									]));
						},
						nextModel));
			case 21:
				var sid = msg.a;
				var newLabel = msg.b;
				return $author$project$Update$PersistenceActions$withNoCmd(
					A2(
						$author$project$Update$WorkspaceActions$mapStatusDraft,
						$elm$core$List$map(
							function (opt) {
								return _Utils_eq(opt.a3, sid) ? _Utils_update(
									opt,
									{du: newLabel}) : opt;
							}),
						model));
			case 22:
				var sid = msg.a;
				var newColor = msg.b;
				return $author$project$Update$PersistenceActions$withNoCmd(
					A2(
						$author$project$Update$WorkspaceActions$mapStatusDraft,
						$elm$core$List$map(
							function (opt) {
								return _Utils_eq(opt.a3, sid) ? _Utils_update(
									opt,
									{c1: newColor}) : opt;
							}),
						model));
			case 23:
				var idx = msg.a;
				return $author$project$Update$PersistenceActions$withNoCmd(
					A2(
						$author$project$Update$WorkspaceActions$mapStatusDraft,
						function (opts) {
							return (idx > 0) ? A3($elm_community$list_extra$List$Extra$swapAt, idx, idx - 1, opts) : opts;
						},
						model));
			case 24:
				var idx = msg.a;
				return $author$project$Update$PersistenceActions$withNoCmd(
					A2(
						$author$project$Update$WorkspaceActions$mapStatusDraft,
						function (opts) {
							return (_Utils_cmp(
								idx + 1,
								$elm$core$List$length(opts)) < 0) ? A3($elm_community$list_extra$List$Extra$swapAt, idx, idx + 1, opts) : opts;
						},
						model));
			case 25:
				var sid = msg.a;
				return $author$project$Update$PersistenceActions$withNoCmd(
					A2(
						$author$project$Update$WorkspaceActions$mapStatusDraft,
						function (opts) {
							return ($elm$core$List$length(opts) <= 1) ? opts : A2(
								$elm$core$List$filter,
								function (o) {
									return !_Utils_eq(o.a3, sid);
								},
								opts);
						},
						model));
			case 26:
				return $author$project$Update$WorkspaceActions$commitStatusManagerIfOpen(model);
			case 27:
				var ws = $author$project$Types$activeWorkspaceData(model);
				var orderedCards = A3($author$project$Data$NoteCard$sortWithAdjacentLinks, ws.bA, ws.b1, ws.b9);
				var ids = A2(
					$elm$core$List$map,
					function ($) {
						return $.a3;
					},
					orderedCards);
				var exportState = {
					dQ: ids,
					ea: $elm$core$Set$fromList(ids)
				};
				return $author$project$Update$PersistenceActions$withNoCmd(
					_Utils_update(
						model,
						{
							bG: $author$project$Types$MarkdownExportDialog(exportState),
							bX: false
						}));
			case 28:
				var cardId = msg.a;
				return $author$project$Update$PersistenceActions$withNoCmd(
					A2(
						$author$project$Update$WorkspaceActions$mapExportState,
						function (st) {
							return _Utils_update(
								st,
								{
									ea: A2($elm$core$Set$member, cardId, st.ea) ? A2($elm$core$Set$remove, cardId, st.ea) : A2($elm$core$Set$insert, cardId, st.ea)
								});
						},
						model));
			case 29:
				var idx = msg.a;
				return $author$project$Update$PersistenceActions$withNoCmd(
					A2(
						$author$project$Update$WorkspaceActions$mapExportState,
						function (st) {
							return (idx > 0) ? _Utils_update(
								st,
								{
									dQ: A3($elm_community$list_extra$List$Extra$swapAt, idx, idx - 1, st.dQ)
								}) : st;
						},
						model));
			case 30:
				var idx = msg.a;
				return $author$project$Update$PersistenceActions$withNoCmd(
					A2(
						$author$project$Update$WorkspaceActions$mapExportState,
						function (st) {
							return (_Utils_cmp(
								idx + 1,
								$elm$core$List$length(st.dQ)) < 0) ? _Utils_update(
								st,
								{
									dQ: A3($elm_community$list_extra$List$Extra$swapAt, idx, idx + 1, st.dQ)
								}) : st;
						},
						model));
			case 31:
				var text = $author$project$Update$WorkspaceActions$buildMarkdownFromDialog(model);
				return A2(
					$author$project$Update$PersistenceActions$withCmd,
					$author$project$Ports$copyToClipboard(text),
					_Utils_update(
						model,
						{
							bm: $elm$core$Maybe$Just(
								{ac: 0, ad: 'Markdownをクリップボードにコピーしました'})
						}));
			case 32:
				var ext = msg.a;
				var ws = $author$project$Types$activeWorkspaceData(model);
				var text = $author$project$Update$WorkspaceActions$buildMarkdownFromDialog(model);
				var safeName = $elm$core$String$isEmpty(
					$elm$core$String$trim(ws.b4)) ? 'switchboard-export' : ws.b4;
				return A2(
					$author$project$Update$PersistenceActions$withCmd,
					A3($elm$file$File$Download$string, safeName + ('.' + ext), 'text/markdown', text),
					model);
			case 33:
				return (!_Utils_eq(model.c_, $elm$core$Maybe$Nothing)) ? $author$project$Update$CardActions$commitEditorIfOpen(model) : $author$project$Update$WorkspaceActions$handleDialogBackdropClick(model);
			case 34:
				return $author$project$Update$PersistenceActions$withNoCmd(
					_Utils_update(
						model,
						{bG: $author$project$Types$NoDialog}));
			case 35:
				return A2(
					$author$project$Update$PersistenceActions$withCmd,
					A2(
						$elm$core$Task$attempt,
						A2(
							$elm$core$Basics$composeL,
							$author$project$Types$WorkspaceEvent,
							$author$project$Types$GotCanvasSizeForZoom(-180)),
						$elm$browser$Browser$Dom$getElement('board-canvas')),
					model);
			case 36:
				return A2(
					$author$project$Update$PersistenceActions$withCmd,
					A2(
						$elm$core$Task$attempt,
						A2(
							$elm$core$Basics$composeL,
							$author$project$Types$WorkspaceEvent,
							$author$project$Types$GotCanvasSizeForZoom(180)),
						$elm$browser$Browser$Dom$getElement('board-canvas')),
					model);
			case 37:
				return $author$project$Update$PersistenceActions$withNoCmd(
					_Utils_update(
						model,
						{
							R: $author$project$DragCanvas$resetViewport(model.R),
							aq: $elm$core$Maybe$Nothing
						}));
			default:
				var deltaY = msg.a;
				var result = msg.b;
				if (!result.$) {
					var el = result.a;
					var nextCanvas = A4(
						$author$project$DragCanvas$zoomAtCenter,
						$author$project$DragCanvas$defaultConfig,
						deltaY,
						{a1: el.r.a1, bp: el.r.bp},
						A2(
							$author$project$DragCanvas$setCanvasPosition,
							{eu: el.r.eu - el.bn.eu, ev: el.r.ev - el.bn.ev},
							model.R));
					return $author$project$Update$PersistenceActions$withNoCmd(
						_Utils_update(
							model,
							{R: nextCanvas, aq: $elm$core$Maybe$Nothing}));
				} else {
					return $author$project$Update$PersistenceActions$withNoCmd(model);
				}
		}
	});
var $author$project$Types$ScheduleAlertDialog = function (a) {
	return {$: 5, a: a};
};
var $author$project$Update$ScheduleActions$evaluateNow = function (model) {
	var existingProjectIds = $elm$core$Set$fromList(
		$elm$core$Dict$keys(model.aC.aN));
	var _eval = A5($author$project$Data$TimeSchedule$evaluateSchedules, model.cR, model.ca, existingProjectIds, model.aC.aW, model.d7);
	var modelWithActive = _Utils_update(
		model,
		{cS: _eval.bs});
	var _v0 = _eval.cJ;
	if (_v0.$ === 1) {
		var _v1 = modelWithActive.bG;
		if (_v1.$ === 5) {
			return _Utils_Tuple2(
				modelWithActive,
				$author$project$Ports$setFavicon(false));
		} else {
			return $author$project$Update$PersistenceActions$withNoCmd(modelWithActive);
		}
	} else {
		var trig = _v0.a;
		var switchedModel = trig.bY ? A2($author$project$Update$ScheduleActions$switchToProjectIfNeeded, trig.L.dX, modelWithActive) : modelWithActive;
		var isAlertAlreadyOpen = function () {
			var _v3 = modelWithActive.bG;
			if (_v3.$ === 5) {
				var current = _v3.a;
				return _Utils_eq(current.L.a3, trig.L.a3) && _Utils_eq(current.ag, trig.ag);
			} else {
				return false;
			}
		}();
		var nextDialog = function () {
			var _v2 = switchedModel.bG;
			switch (_v2.$) {
				case 0:
					return $author$project$Types$ScheduleAlertDialog(trig);
				case 5:
					return $author$project$Types$ScheduleAlertDialog(trig);
				default:
					var other = _v2;
					return isAlertAlreadyOpen ? other : $author$project$Types$ScheduleAlertDialog(trig);
			}
		}();
		var faviconCmd = (!model.aI) ? $author$project$Ports$setFavicon(true) : $elm$core$Platform$Cmd$none;
		return _Utils_Tuple2(
			_Utils_update(
				switchedModel,
				{bG: nextDialog}),
			faviconCmd);
	}
};
var $author$project$DragCanvas$setViewport = F3(
	function (offset, scale, _v0) {
		var data = _v0;
		return _Utils_update(
			data,
			{
				e: $author$project$DragCanvas$NotDragging,
				m: offset,
				p: $author$project$DragCanvas$normalizeScale(scale)
			});
	});
var $author$project$Main$stepCanvasAnimation = F2(
	function (dt, model) {
		var _v0 = model.aq;
		if (_v0.$ === 1) {
			return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
		} else {
			var anim = _v0.a;
			var viewport = $author$project$DragCanvas$getViewport(model.R);
			var nextElapsed = A2($elm$core$Basics$min, anim.aF, anim.bJ + dt);
			var progress = (anim.aF > 0) ? (nextElapsed / anim.aF) : 1.0;
			var nextAnim = (_Utils_cmp(nextElapsed, anim.aF) > -1) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
				_Utils_update(
					anim,
					{bJ: nextElapsed}));
			var eased = 1.0 - A2($elm$core$Basics$pow, 1.0 - progress, 3);
			var nextOffset = {eu: anim.aR.eu + ((anim.cG.eu - anim.aR.eu) * eased), ev: anim.aR.ev + ((anim.cG.ev - anim.aR.ev) * eased)};
			var nextCanvas = A3($author$project$DragCanvas$setViewport, nextOffset, viewport.p, model.R);
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{R: nextCanvas, aq: nextAnim}),
				$elm$core$Platform$Cmd$none);
		}
	});
var $author$project$Main$updateAppMsg = F2(
	function (msg, model) {
		switch (msg.$) {
			case 0:
				var zone = msg.a;
				return $author$project$Update$ScheduleActions$evaluateNow(
					_Utils_update(
						model,
						{cR: zone}));
			case 1:
				var now = msg.a;
				return $author$project$Update$ScheduleActions$evaluateNow(
					_Utils_update(
						model,
						{ca: now}));
			case 2:
				var w = msg.a;
				var h = msg.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{cL: h, cM: w}),
					$elm$core$Platform$Cmd$none);
			case 3:
				if (!msg.a) {
					var _v1 = msg.a;
					return $author$project$Update$ScheduleActions$evaluateNow(
						_Utils_update(
							model,
							{aI: true}));
				} else {
					var _v2 = msg.a;
					return $author$project$Update$PersistenceActions$flushIfUnsaved(
						_Utils_update(
							model,
							{aI: false}));
				}
			case 4:
				return $author$project$Update$PersistenceActions$flushIfUnsaved(model);
			case 5:
				var dt = msg.a;
				return A2($author$project$Main$stepCanvasAnimation, dt, model);
			case 6:
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{bm: $elm$core$Maybe$Nothing}),
					$elm$core$Platform$Cmd$none);
			default:
				return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
		}
	});
var $author$project$Main$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 0:
				var cardMsg = msg.a;
				return A2($author$project$Update$CardActions$update, cardMsg, model);
			case 1:
				var wsMsg = msg.a;
				return A2($author$project$Update$WorkspaceActions$update, wsMsg, model);
			case 2:
				var schedMsg = msg.a;
				return A2($author$project$Update$ScheduleActions$update, schedMsg, model);
			case 3:
				var persistMsg = msg.a;
				return A2($author$project$Update$PersistenceActions$update, persistMsg, model);
			case 4:
				var canvasMsg = msg.a;
				var _v1 = A3($author$project$DragCanvas$update, $author$project$DragCanvas$defaultConfig, canvasMsg, model.R);
				var nextCanvas = _v1.a;
				var maybeOutput = _v1.b;
				var updatedModel = _Utils_update(
					model,
					{R: nextCanvas, aq: $elm$core$Maybe$Nothing});
				if (maybeOutput.$ === 1) {
					return _Utils_Tuple2(updatedModel, $elm$core$Platform$Cmd$none);
				} else {
					var output = maybeOutput.a;
					return A2($author$project$Update$CardActions$handleCanvasOutput, output, updatedModel);
				}
			case 5:
				var appMsg = msg.a;
				return A2($author$project$Main$updateAppMsg, appMsg, model);
			default:
				var modMsg = msg.a;
				return A2($author$project$Update$ModActions$update, modMsg, model);
		}
	});
var $author$project$Main$projectTitle = F2(
	function (pid, model) {
		return A2(
			$elm$core$Maybe$withDefault,
			'プロジェクト',
			A2(
				$elm$core$Maybe$map,
				function ($) {
					return $.b4;
				},
				A2($elm$core$Dict$get, pid, model.aC.aN)));
	});
var $author$project$Main$documentTitle = function (model) {
	var wsName = $author$project$Types$activeWorkspaceData(model).b4;
	var _v0 = model.bG;
	if (_v0.$ === 5) {
		var trig = _v0.a;
		return (!model.aI) ? ('🔔 [予定時刻] ' + (A2($author$project$Main$projectTitle, trig.L.dX, model) + ' - Switchboard')) : (wsName + ' - Switchboard');
	} else {
		return wsName + ' - Switchboard';
	}
};
var $author$project$View$Styles$appLayout = 'app-layout';
var $author$project$View$Styles$appLayoutMobile = 'app-layout app-layout--mobile';
var $elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty('className');
var $elm$html$Html$div = _VirtualDom_node('div');
var $author$project$Data$WorkspaceData$archivedCards = function (ws) {
	return A2(
		$elm$core$List$filter,
		function (c) {
			return c.c2.dq;
		},
		$elm$core$Dict$values(ws.b9));
};
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
var $author$project$Types$CloseDialogCancelClicked = {$: 34};
var $author$project$View$Styles$btnGhost = 'btn--ghost';
var $elm$html$Html$button = _VirtualDom_node('button');
var $author$project$View$Styles$emptyState = 'empty-state';
var $elm$html$Html$h3 = _VirtualDom_node('h3');
var $author$project$View$Styles$modalBody = 'modal-body';
var $author$project$View$Styles$modalFooter = 'modal-footer';
var $author$project$Types$CloseModalBackdropClicked = {$: 33};
var $author$project$Types$NoOpApp = {$: 7};
var $author$project$View$Styles$modalBackdrop = 'modal-backdrop';
var $elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 0, a: a};
};
var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var $elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var $elm$html$Html$Events$onClick = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'click',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$virtual_dom$VirtualDom$MayStopPropagation = function (a) {
	return {$: 1, a: a};
};
var $elm$html$Html$Events$stopPropagationOn = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$MayStopPropagation(decoder));
	});
var $author$project$View$DialogsView$modalFrame = F2(
	function (panelClass, children) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class($author$project$View$Styles$modalBackdrop),
					$elm$html$Html$Events$onClick(
					$author$project$Types$WorkspaceEvent($author$project$Types$CloseModalBackdropClicked))
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(panelClass),
							A2(
							$elm$html$Html$Events$stopPropagationOn,
							'click',
							$elm$json$Json$Decode$succeed(
								_Utils_Tuple2(
									$author$project$Types$AppEvent($author$project$Types$NoOpApp),
									true)))
						]),
					children)
				]));
	});
var $author$project$View$Styles$modalHeader = 'modal-header';
var $author$project$View$Styles$modalHeaderTitle = 'modal-header__title';
var $author$project$View$Styles$modalPanelWide = 'modal-panel modal-panel--wide';
var $elm$html$Html$Attributes$type_ = $elm$html$Html$Attributes$stringProperty('type');
var $author$project$Types$DeleteCardPermanentlyClicked = function (a) {
	return {$: 15, a: a};
};
var $author$project$Types$RestoreCardClicked = function (a) {
	return {$: 14, a: a};
};
var $author$project$View$Styles$archiveItem = 'archive-item';
var $author$project$View$Styles$btnDanger = 'btn--danger';
var $author$project$View$Styles$btnPrimary = 'btn--primary';
var $author$project$View$Styles$formField = 'form-field';
var $author$project$View$Styles$formRow = 'form-row';
var $elm$html$Html$h4 = _VirtualDom_node('h4');
var $elm$html$Html$p = _VirtualDom_node('p');
var $author$project$View$DialogsView$viewArchiveRow = function (noteCard) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class($author$project$View$Styles$archiveItem)
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class($author$project$View$Styles$formField)
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$h4,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text(noteCard.c2.ek)
							])),
						A2(
						$elm$html$Html$p,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text(noteCard.c2.cX)
							]))
					])),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class($author$project$View$Styles$formRow)
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$button,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$type_('button'),
								$elm$html$Html$Attributes$class($author$project$View$Styles$btnPrimary),
								$elm$html$Html$Events$onClick(
								$author$project$Types$CardEvent(
									$author$project$Types$RestoreCardClicked(noteCard.a3)))
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('作業場に戻す')
							])),
						A2(
						$elm$html$Html$button,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$type_('button'),
								$elm$html$Html$Attributes$class($author$project$View$Styles$btnDanger),
								$elm$html$Html$Events$onClick(
								$author$project$Types$CardEvent(
									$author$project$Types$DeleteCardPermanentlyClicked(noteCard.a3)))
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('完全削除')
							]))
					]))
			]));
};
var $author$project$View$DialogsView$viewArchiveDialog = function (archived) {
	return A2(
		$author$project$View$DialogsView$modalFrame,
		$author$project$View$Styles$modalPanelWide,
		_List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class($author$project$View$Styles$modalHeader)
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$h3,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class($author$project$View$Styles$modalHeaderTitle)
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('アーカイブ一覧')
							])),
						A2(
						$elm$html$Html$button,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$type_('button'),
								$elm$html$Html$Attributes$class($author$project$View$Styles$btnGhost),
								$elm$html$Html$Events$onClick(
								$author$project$Types$WorkspaceEvent($author$project$Types$CloseDialogCancelClicked))
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('✕')
							]))
					])),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class($author$project$View$Styles$modalBody)
					]),
				$elm$core$List$isEmpty(archived) ? _List_fromArray(
					[
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class($author$project$View$Styles$emptyState)
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('アーカイブされたカードはありません')
							]))
					]) : A2($elm$core$List$map, $author$project$View$DialogsView$viewArchiveRow, archived)),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class($author$project$View$Styles$modalFooter)
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$button,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$type_('button'),
								$elm$html$Html$Events$onClick(
								$author$project$Types$WorkspaceEvent($author$project$Types$CloseDialogCancelClicked))
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('閉じる')
							]))
					]))
			]));
};
var $author$project$Types$CancelImportBackup = {$: 8};
var $author$project$Types$ConfirmImportBackup = function (a) {
	return {$: 7, a: a};
};
var $author$project$View$Styles$modalPanel = 'modal-panel';
var $elm$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			if (dict.$ === -2) {
				return n;
			} else {
				var left = dict.d;
				var right = dict.e;
				var $temp$n = A2($elm$core$Dict$sizeHelp, n + 1, right),
					$temp$dict = left;
				n = $temp$n;
				dict = $temp$dict;
				continue sizeHelp;
			}
		}
	});
var $elm$core$Dict$size = function (dict) {
	return A2($elm$core$Dict$sizeHelp, 0, dict);
};
var $author$project$View$DialogsView$viewConfirmBackupImport = function (imported) {
	var projCount = $elm$core$Dict$size(imported.aN);
	return A2(
		$author$project$View$DialogsView$modalFrame,
		$author$project$View$Styles$modalPanel,
		_List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class($author$project$View$Styles$modalHeader)
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$h3,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class($author$project$View$Styles$modalHeaderTitle)
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('バックアップの復元確認')
							]))
					])),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class($author$project$View$Styles$modalBody)
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$p,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('現在のすべてのデータをバックアップファイルの内容で置き換えますか？')
							])),
						A2(
						$elm$html$Html$p,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text(
								'含まれるプロジェクト数: ' + ($elm$core$String$fromInt(projCount) + '件'))
							]))
					])),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class($author$project$View$Styles$modalFooter)
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$button,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$type_('button'),
								$elm$html$Html$Events$onClick(
								$author$project$Types$PersistenceEvent($author$project$Types$CancelImportBackup))
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('キャンセル')
							])),
						A2(
						$elm$html$Html$button,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$type_('button'),
								$elm$html$Html$Attributes$class($author$project$View$Styles$btnDanger),
								$elm$html$Html$Events$onClick(
								$author$project$Types$PersistenceEvent(
									$author$project$Types$ConfirmImportBackup(imported)))
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('復元を実行')
							]))
					]))
			]));
};
var $author$project$Types$CancelDeleteProjectClicked = {$: 9};
var $author$project$Types$ConfirmDeleteProjectClicked = function (a) {
	return {$: 8, a: a};
};
var $author$project$View$DialogsView$viewConfirmDeleteProject = F2(
	function (pid, name) {
		return A2(
			$author$project$View$DialogsView$modalFrame,
			$author$project$View$Styles$modalPanel,
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class($author$project$View$Styles$modalHeader)
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h3,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class($author$project$View$Styles$modalHeaderTitle)
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('プロジェクトの削除')
								]))
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class($author$project$View$Styles$modalBody)
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$p,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text('プロジェクト「' + (name + '」を削除しますか？'))
								])),
							A2(
							$elm$html$Html$p,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text('配下のカード・関連付け・スケジュールも削除されます（削除直後はUNDO可能です）。')
								]))
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class($author$project$View$Styles$modalFooter)
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$button,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$type_('button'),
									$elm$html$Html$Events$onClick(
									$author$project$Types$WorkspaceEvent($author$project$Types$CancelDeleteProjectClicked))
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('キャンセル')
								])),
							A2(
							$elm$html$Html$button,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$type_('button'),
									$elm$html$Html$Attributes$class($author$project$View$Styles$btnDanger),
									$elm$html$Html$Events$onClick(
									$author$project$Types$WorkspaceEvent(
										$author$project$Types$ConfirmDeleteProjectClicked(pid)))
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('削除する')
								]))
						]))
				]));
	});
var $author$project$View$Styles$formFieldLabel = 'form-field__label';
var $author$project$View$Styles$markdownPreview = 'markdown-preview';
var $elm$virtual_dom$VirtualDom$keyedNode = function (tag) {
	return _VirtualDom_keyedNode(
		_VirtualDom_noScript(tag));
};
var $elm$html$Html$Keyed$node = $elm$virtual_dom$VirtualDom$keyedNode;
var $elm$html$Html$pre = _VirtualDom_node('pre');
var $author$project$Types$MoveExportCardDown = function (a) {
	return {$: 30, a: a};
};
var $author$project$Types$MoveExportCardUp = function (a) {
	return {$: 29, a: a};
};
var $author$project$Types$ToggleExportCard = function (a) {
	return {$: 28, a: a};
};
var $elm$html$Html$Attributes$boolProperty = F2(
	function (key, bool) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$bool(bool));
	});
var $elm$html$Html$Attributes$checked = $elm$html$Html$Attributes$boolProperty('checked');
var $elm$html$Html$Attributes$disabled = $elm$html$Html$Attributes$boolProperty('disabled');
var $author$project$View$Styles$exportCardItem = 'export-card-item';
var $elm$html$Html$input = _VirtualDom_node('input');
var $elm$html$Html$label = _VirtualDom_node('label');
var $elm$html$Html$span = _VirtualDom_node('span');
var $author$project$View$MarkdownExportView$viewExportCardRow = F4(
	function (totalCount, isChecked, idx, noteCard) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class($author$project$View$Styles$exportCardItem)
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$label,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class($author$project$View$Styles$formRow)
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$input,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$type_('checkbox'),
									$elm$html$Html$Attributes$checked(isChecked),
									$elm$html$Html$Events$onClick(
									$author$project$Types$WorkspaceEvent(
										$author$project$Types$ToggleExportCard(noteCard.a3)))
								]),
							_List_Nil),
							A2(
							$elm$html$Html$span,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(noteCard.c2.ek)
								]))
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class($author$project$View$Styles$formRow)
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$button,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$type_('button'),
									$elm$html$Html$Attributes$disabled(idx <= 0),
									$elm$html$Html$Events$onClick(
									$author$project$Types$WorkspaceEvent(
										$author$project$Types$MoveExportCardUp(idx)))
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('↑')
								])),
							A2(
							$elm$html$Html$button,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$type_('button'),
									$elm$html$Html$Attributes$disabled(
									_Utils_cmp(idx + 1, totalCount) > -1),
									$elm$html$Html$Events$onClick(
									$author$project$Types$WorkspaceEvent(
										$author$project$Types$MoveExportCardDown(idx)))
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('↓')
								]))
						]))
				]));
	});
var $author$project$View$MarkdownExportView$viewKeyedExportRow = F5(
	function (ws, totalCount, state, idx, cid) {
		return _Utils_Tuple2(
			cid,
			function () {
				var _v0 = A2($elm$core$Dict$get, cid, ws.b9);
				if (_v0.$ === 1) {
					return $elm$html$Html$text('');
				} else {
					var noteCard = _v0.a;
					return A4(
						$author$project$View$MarkdownExportView$viewExportCardRow,
						totalCount,
						A2($elm$core$Set$member, cid, state.ea),
						idx,
						noteCard);
				}
			}());
	});
var $author$project$View$MarkdownExportView$viewModalBody = F4(
	function (ws, totalCount, state, previewText) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class($author$project$View$Styles$modalBody)
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class($author$project$View$Styles$formFieldLabel)
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('出力カードの選択と並び順（元の並び順には影響しません）')
						])),
					A3(
					$elm$html$Html$Keyed$node,
					'div',
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class($author$project$View$Styles$formField)
						]),
					A2(
						$elm$core$List$indexedMap,
						A3($author$project$View$MarkdownExportView$viewKeyedExportRow, ws, totalCount, state),
						state.dQ)),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class($author$project$View$Styles$formFieldLabel)
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('プレビュー')
						])),
					A2(
					$elm$html$Html$pre,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class($author$project$View$Styles$markdownPreview)
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(previewText)
						]))
				]));
	});
var $author$project$Types$CopyMarkdownClicked = {$: 31};
var $author$project$Types$DownloadMarkdownClicked = function (a) {
	return {$: 32, a: a};
};
var $author$project$View$MarkdownExportView$viewModalFooter = function (isEmpty) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class($author$project$View$Styles$modalFooter)
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$button,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$type_('button'),
						$elm$html$Html$Attributes$disabled(isEmpty),
						$elm$html$Html$Events$onClick(
						$author$project$Types$WorkspaceEvent($author$project$Types$CopyMarkdownClicked))
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('クリップボードにコピー')
					])),
				A2(
				$elm$html$Html$button,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$type_('button'),
						$elm$html$Html$Attributes$disabled(isEmpty),
						$elm$html$Html$Events$onClick(
						$author$project$Types$WorkspaceEvent(
							$author$project$Types$DownloadMarkdownClicked('md')))
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('.md ダウンロード')
					])),
				A2(
				$elm$html$Html$button,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$type_('button'),
						$elm$html$Html$Attributes$disabled(isEmpty),
						$elm$html$Html$Events$onClick(
						$author$project$Types$WorkspaceEvent(
							$author$project$Types$DownloadMarkdownClicked('txt')))
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('.txt ダウンロード')
					])),
				A2(
				$elm$html$Html$button,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$type_('button'),
						$elm$html$Html$Events$onClick(
						$author$project$Types$WorkspaceEvent($author$project$Types$CloseDialogCancelClicked))
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('閉じる')
					]))
			]));
};
var $author$project$View$MarkdownExportView$viewModalHeader = A2(
	$elm$html$Html$div,
	_List_fromArray(
		[
			$elm$html$Html$Attributes$class($author$project$View$Styles$modalHeader)
		]),
	_List_fromArray(
		[
			A2(
			$elm$html$Html$h3,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class($author$project$View$Styles$modalHeaderTitle)
				]),
			_List_fromArray(
				[
					$elm$html$Html$text('Markdown 出力')
				])),
			A2(
			$elm$html$Html$button,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$type_('button'),
					$elm$html$Html$Attributes$class($author$project$View$Styles$btnGhost),
					$elm$html$Html$Events$onClick(
					$author$project$Types$WorkspaceEvent($author$project$Types$CloseDialogCancelClicked))
				]),
			_List_fromArray(
				[
					$elm$html$Html$text('✕')
				]))
		]));
var $author$project$View$MarkdownExportView$viewMarkdownExportModal = F2(
	function (ws, state) {
		var totalCount = $elm$core$List$length(state.dQ);
		var selectedCards = A2(
			$elm$core$List$filterMap,
			function (cid) {
				return A2($elm$core$Dict$get, cid, ws.b9);
			},
			A2(
				$elm$core$List$filter,
				function (cid) {
					return A2($elm$core$Set$member, cid, state.ea);
				},
				state.dQ));
		var previewText = $author$project$Data$MarkdownFormatter$exportCards(selectedCards);
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class($author$project$View$Styles$modalBackdrop),
					$elm$html$Html$Events$onClick(
					$author$project$Types$WorkspaceEvent($author$project$Types$CloseModalBackdropClicked))
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class($author$project$View$Styles$modalPanelWide),
							A2(
							$elm$html$Html$Events$stopPropagationOn,
							'click',
							$elm$json$Json$Decode$succeed(
								_Utils_Tuple2(
									$author$project$Types$AppEvent($author$project$Types$NoOpApp),
									true)))
						]),
					_List_fromArray(
						[
							$author$project$View$MarkdownExportView$viewModalHeader,
							A4($author$project$View$MarkdownExportView$viewModalBody, ws, totalCount, state, previewText),
							$author$project$View$MarkdownExportView$viewModalFooter(
							$elm$core$String$isEmpty(previewText))
						]))
				]));
	});
var $author$project$View$Styles$modItemMeta = 'mod-item__meta';
var $author$project$View$Styles$modList = 'mod-list';
var $author$project$Types$DeleteModClicked = function (a) {
	return {$: 7, a: a};
};
var $author$project$Types$MoveModDown = function (a) {
	return {$: 6, a: a};
};
var $author$project$Types$MoveModUp = function (a) {
	return {$: 5, a: a};
};
var $author$project$Types$ToggleModEnabled = function (a) {
	return {$: 4, a: a};
};
var $author$project$View$ModManagerView$kindBadgeLabel = function (kind) {
	if (!kind.$) {
		return 'トークンJSON';
	} else {
		return 'カスタムCSS';
	}
};
var $author$project$View$Styles$modBadge = 'mod-badge';
var $author$project$View$Styles$modItem = 'mod-item';
var $author$project$View$Styles$modItemInfo = 'mod-item__info';
var $author$project$View$ModManagerView$viewFontCountBadge = function (count) {
	return (count <= 0) ? $elm$html$Html$text('') : A2(
		$elm$html$Html$span,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class($author$project$View$Styles$modBadge)
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(
				'Webフォント ' + ($elm$core$String$fromInt(count) + '件'))
			]));
};
var $author$project$View$ModManagerView$viewModSubMeta = function (kind) {
	if (!kind.$) {
		var details = kind.a;
		var parts = A2(
			$elm$core$String$join,
			' - ',
			A2(
				$elm$core$List$filter,
				A2($elm$core$Basics$composeL, $elm$core$Basics$not, $elm$core$String$isEmpty),
				_List_fromArray(
					[details.ap, details.as])));
		return $elm$core$String$isEmpty(parts) ? $elm$html$Html$text('') : A2(
			$elm$html$Html$span,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class($author$project$View$Styles$modItemMeta)
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(parts)
				]));
	} else {
		return $elm$html$Html$text('');
	}
};
var $author$project$View$ModManagerView$viewModRow = F3(
	function (totalCount, idx, modItem) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class($author$project$View$Styles$modItem)
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$label,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class($author$project$View$Styles$formRow)
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$input,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$type_('checkbox'),
									$elm$html$Html$Attributes$checked(modItem.dd),
									$elm$html$Html$Events$onClick(
									$author$project$Types$ModEvent(
										$author$project$Types$ToggleModEnabled(modItem.a3)))
								]),
							_List_Nil),
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class($author$project$View$Styles$modItemInfo)
								]),
							_List_fromArray(
								[
									A2(
									$elm$html$Html$div,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class($author$project$View$Styles$formRow)
										]),
									_List_fromArray(
										[
											A2(
											$elm$html$Html$span,
											_List_Nil,
											_List_fromArray(
												[
													$elm$html$Html$text(
													'#' + ($elm$core$String$fromInt(idx + 1) + (' ' + modItem.b4)))
												])),
											A2(
											$elm$html$Html$span,
											_List_fromArray(
												[
													$elm$html$Html$Attributes$class($author$project$View$Styles$modBadge)
												]),
											_List_fromArray(
												[
													$elm$html$Html$text(
													$author$project$View$ModManagerView$kindBadgeLabel(modItem.ac))
												])),
											$author$project$View$ModManagerView$viewFontCountBadge(
											$elm$core$List$length(modItem.D))
										])),
									$author$project$View$ModManagerView$viewModSubMeta(modItem.ac)
								]))
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class($author$project$View$Styles$formRow)
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$button,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$type_('button'),
									$elm$html$Html$Attributes$disabled(idx <= 0),
									$elm$html$Html$Events$onClick(
									$author$project$Types$ModEvent(
										$author$project$Types$MoveModUp(idx)))
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('↑')
								])),
							A2(
							$elm$html$Html$button,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$type_('button'),
									$elm$html$Html$Attributes$disabled(
									_Utils_cmp(idx + 1, totalCount) > -1),
									$elm$html$Html$Events$onClick(
									$author$project$Types$ModEvent(
										$author$project$Types$MoveModDown(idx)))
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('↓')
								])),
							A2(
							$elm$html$Html$button,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$type_('button'),
									$elm$html$Html$Attributes$class($author$project$View$Styles$btnDanger),
									$elm$html$Html$Events$onClick(
									$author$project$Types$ModEvent(
										$author$project$Types$DeleteModClicked(modItem.a3)))
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('削除')
								]))
						]))
				]));
	});
var $author$project$View$ModManagerView$viewKeyedModRow = F3(
	function (totalCount, idx, modItem) {
		return _Utils_Tuple2(
			modItem.a3,
			A3($author$project$View$ModManagerView$viewModRow, totalCount, idx, modItem));
	});
var $author$project$View$ModManagerView$viewModList = F2(
	function (totalCount, mods) {
		return $elm$core$List$isEmpty(mods) ? A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class($author$project$View$Styles$emptyState)
				]),
			_List_fromArray(
				[
					$elm$html$Html$text('インストールされたスタイルModはありません。.css または .json ファイルを読み込めます。')
				])) : A3(
			$elm$html$Html$Keyed$node,
			'div',
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class($author$project$View$Styles$modList)
				]),
			A2(
				$elm$core$List$indexedMap,
				$author$project$View$ModManagerView$viewKeyedModRow(totalCount),
				mods));
	});
var $author$project$Types$ExitSafeModeClicked = {$: 9};
var $author$project$View$Styles$safemodeBanner = 'safemode-banner';
var $author$project$View$ModManagerView$viewSafeModeBanner = function (isSafeMode) {
	return isSafeMode ? A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class($author$project$View$Styles$safemodeBanner)
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$span,
				_List_Nil,
				_List_fromArray(
					[
						$elm$html$Html$text('🛡 セーフモード起動中：すべてのMod適用を一時停止しています')
					])),
				A2(
				$elm$html$Html$button,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$type_('button'),
						$elm$html$Html$Attributes$class($author$project$View$Styles$btnPrimary),
						$elm$html$Html$Events$onClick(
						$author$project$Types$ModEvent($author$project$Types$ExitSafeModeClicked))
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('通常モードで再読み込み')
					]))
			])) : $elm$html$Html$text('');
};
var $elm$html$Html$a = _VirtualDom_node('a');
var $elm$html$Html$Attributes$href = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'href',
		_VirtualDom_noJavaScriptUri(url));
};
var $author$project$View$ModManagerView$viewSafeModeHint = A2(
	$elm$html$Html$div,
	_List_fromArray(
		[
			$elm$html$Html$Attributes$class($author$project$View$Styles$modItemMeta)
		]),
	_List_fromArray(
		[
			$elm$html$Html$text('※ Modで画面操作ができなくなった場合は '),
			A2(
			$elm$html$Html$a,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$href('?safemode=1')
				]),
			_List_fromArray(
				[
					$elm$html$Html$text('?safemode=1（セーフモード）')
				])),
			$elm$html$Html$text(' で開くとModを無効化して復旧できます。')
		]));
var $author$project$Types$DisableAllModsClicked = {$: 8};
var $author$project$Types$ImportModRequested = {$: 1};
var $author$project$View$ModManagerView$viewToolbar = function (totalCount) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class($author$project$View$Styles$formRow)
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$button,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$type_('button'),
						$elm$html$Html$Attributes$class($author$project$View$Styles$btnPrimary),
						$elm$html$Html$Events$onClick(
						$author$project$Types$ModEvent($author$project$Types$ImportModRequested))
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('＋ Modを追加 (.css / .json)')
					])),
				A2(
				$elm$html$Html$button,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$type_('button'),
						$elm$html$Html$Attributes$disabled(!totalCount),
						$elm$html$Html$Events$onClick(
						$author$project$Types$ModEvent($author$project$Types$DisableAllModsClicked))
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('すべてOFFにする')
					]))
			]));
};
var $author$project$View$ModManagerView$viewBody = F3(
	function (isSafeMode, totalCount, mods) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class($author$project$View$Styles$modalBody)
				]),
			_List_fromArray(
				[
					$author$project$View$ModManagerView$viewSafeModeBanner(isSafeMode),
					$author$project$View$ModManagerView$viewToolbar(totalCount),
					A2(
					$elm$html$Html$p,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class($author$project$View$Styles$modItemMeta)
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('上から順番に読み込まれます。下のModほど上書き優先度が高くなります（@layer mod）。')
						])),
					A2($author$project$View$ModManagerView$viewModList, totalCount, mods),
					$author$project$View$ModManagerView$viewSafeModeHint
				]));
	});
var $author$project$View$ModManagerView$viewFooter = A2(
	$elm$html$Html$div,
	_List_fromArray(
		[
			$elm$html$Html$Attributes$class($author$project$View$Styles$modalFooter)
		]),
	_List_fromArray(
		[
			A2(
			$elm$html$Html$button,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$type_('button'),
					$elm$html$Html$Events$onClick(
					$author$project$Types$WorkspaceEvent($author$project$Types$CloseDialogCancelClicked))
				]),
			_List_fromArray(
				[
					$elm$html$Html$text('閉じる')
				]))
		]));
var $author$project$View$ModManagerView$viewHeader = A2(
	$elm$html$Html$div,
	_List_fromArray(
		[
			$elm$html$Html$Attributes$class($author$project$View$Styles$modalHeader)
		]),
	_List_fromArray(
		[
			A2(
			$elm$html$Html$h3,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class($author$project$View$Styles$modalHeaderTitle)
				]),
			_List_fromArray(
				[
					$elm$html$Html$text('🧩 スタイルMod管理')
				])),
			A2(
			$elm$html$Html$button,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$type_('button'),
					$elm$html$Html$Attributes$class($author$project$View$Styles$btnGhost),
					$elm$html$Html$Events$onClick(
					$author$project$Types$WorkspaceEvent($author$project$Types$CloseDialogCancelClicked))
				]),
			_List_fromArray(
				[
					$elm$html$Html$text('✕')
				]))
		]));
var $author$project$View$ModManagerView$viewModManagerModal = function (model) {
	var totalCount = $elm$core$List$length(model.aC.aS);
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class($author$project$View$Styles$modalBackdrop),
				$elm$html$Html$Events$onClick(
				$author$project$Types$WorkspaceEvent($author$project$Types$CloseModalBackdropClicked))
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class($author$project$View$Styles$modalPanelWide),
						A2(
						$elm$html$Html$Events$stopPropagationOn,
						'click',
						$elm$json$Json$Decode$succeed(
							_Utils_Tuple2(
								$author$project$Types$AppEvent($author$project$Types$NoOpApp),
								true)))
					]),
				_List_fromArray(
					[
						$author$project$View$ModManagerView$viewHeader,
						A3($author$project$View$ModManagerView$viewBody, model.a4, totalCount, model.aC.aS),
						$author$project$View$ModManagerView$viewFooter
					]))
			]));
};
var $author$project$Types$ScheduleEvent = function (a) {
	return {$: 2, a: a};
};
var $author$project$Types$SkipScheduledProject = function (a) {
	return {$: 17, a: a};
};
var $author$project$Types$SnoozeScheduledProject = function (a) {
	return {$: 16, a: a};
};
var $author$project$Types$StartScheduledProject = function (a) {
	return {$: 15, a: a};
};
var $author$project$View$DialogsView$viewLateNotice = F2(
	function (isLate, timeStr) {
		return isLate ? A2(
			$elm$html$Html$p,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('予定時刻（' + (timeStr + '）を過ぎているため、予定されていたプロジェクト作業場へ切り替えました。'))
				])) : $elm$html$Html$text('');
	});
var $author$project$View$DialogsView$viewScheduleAlertDialog = F2(
	function (projects, trig) {
		var timeStr = A2($author$project$Data$TimeSchedule$formatTimeOfDay, trig.av, trig.aw);
		var projectName = A2(
			$elm$core$Maybe$withDefault,
			'プロジェクト',
			A2(
				$elm$core$Maybe$map,
				function ($) {
					return $.b4;
				},
				A2($elm$core$Dict$get, trig.L.dX, projects)));
		return A2(
			$author$project$View$DialogsView$modalFrame,
			$author$project$View$Styles$modalPanel,
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class($author$project$View$Styles$modalHeader)
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h3,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class($author$project$View$Styles$modalHeaderTitle)
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('⏰ 作業予定の時間です')
								]))
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class($author$project$View$Styles$modalBody)
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$p,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text('対象プロジェクト: ' + projectName)
								])),
							A2(
							$elm$html$Html$p,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(
									'本日の予定時刻: ' + (timeStr + ('（' + ($elm$core$String$fromInt(trig.L.db) + '分）'))))
								])),
							A2($author$project$View$DialogsView$viewLateNotice, trig.bY, timeStr)
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class($author$project$View$Styles$modalFooter)
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$button,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$type_('button'),
									$elm$html$Html$Events$onClick(
									$author$project$Types$ScheduleEvent(
										$author$project$Types$SkipScheduledProject(trig)))
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('今回はスキップ')
								])),
							A2(
							$elm$html$Html$button,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$type_('button'),
									$elm$html$Html$Events$onClick(
									$author$project$Types$ScheduleEvent(
										$author$project$Types$SnoozeScheduledProject(trig)))
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('15分後にする')
								])),
							A2(
							$elm$html$Html$button,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$type_('button'),
									$elm$html$Html$Attributes$class($author$project$View$Styles$btnPrimary),
									$elm$html$Html$Events$onClick(
									$author$project$Types$ScheduleEvent(
										$author$project$Types$StartScheduledProject(trig)))
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('このプロジェクトを始める')
								]))
						]))
				]));
	});
var $author$project$Types$SaveScheduleSubmitted = {$: 12};
var $author$project$Types$FormProjectChanged = function (a) {
	return {$: 3, a: a};
};
var $elm$html$Html$Events$alwaysStop = function (x) {
	return _Utils_Tuple2(x, true);
};
var $elm$html$Html$Events$targetValue = A2(
	$elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'value']),
	$elm$json$Json$Decode$string);
var $elm$html$Html$Events$onInput = function (tagger) {
	return A2(
		$elm$html$Html$Events$stopPropagationOn,
		'input',
		A2(
			$elm$json$Json$Decode$map,
			$elm$html$Html$Events$alwaysStop,
			A2($elm$json$Json$Decode$map, tagger, $elm$html$Html$Events$targetValue)));
};
var $elm$html$Html$select = _VirtualDom_node('select');
var $elm$html$Html$option = _VirtualDom_node('option');
var $elm$html$Html$Attributes$selected = $elm$html$Html$Attributes$boolProperty('selected');
var $elm$html$Html$Attributes$value = $elm$html$Html$Attributes$stringProperty('value');
var $author$project$View$DialogsView$viewProjectSelectOption = F3(
	function (projects, selectedPid, pid) {
		return A2(
			$elm$core$Maybe$map,
			function (ws) {
				return A2(
					$elm$html$Html$option,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$value(pid),
							$elm$html$Html$Attributes$selected(
							_Utils_eq(pid, selectedPid))
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(ws.b4)
						]));
			},
			A2($elm$core$Dict$get, pid, projects));
	});
var $author$project$View$DialogsView$viewProjectSelect = F2(
	function (model, selectedPid) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class($author$project$View$Styles$formField)
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$label,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class($author$project$View$Styles$formFieldLabel)
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('対象プロジェクト')
						])),
					A2(
					$elm$html$Html$select,
					_List_fromArray(
						[
							$elm$html$Html$Events$onInput(
							A2($elm$core$Basics$composeL, $author$project$Types$ScheduleEvent, $author$project$Types$FormProjectChanged))
						]),
					A2(
						$elm$core$List$filterMap,
						A2($author$project$View$DialogsView$viewProjectSelectOption, model.aC.aN, selectedPid),
						model.aC.aM))
				]));
	});
var $author$project$Types$FormRecurrenceKindChanged = function (a) {
	return {$: 9, a: a};
};
var $author$project$Types$FormOnceDateChanged = function (a) {
	return {$: 11, a: a};
};
var $author$project$Data$TimeSchedule$allWeekdays = _List_fromArray(
	[0, 1, 2, 3, 4, 5, 6]);
var $author$project$Types$FormWeekdayToggled = function (a) {
	return {$: 10, a: a};
};
var $author$project$View$Styles$weekdayBtnActive = 'weekday-btn--active';
var $author$project$Data$TimeSchedule$weekdayLabel = function (wd) {
	switch (wd) {
		case 0:
			return '月';
		case 1:
			return '火';
		case 2:
			return '水';
		case 3:
			return '木';
		case 4:
			return '金';
		case 5:
			return '土';
		default:
			return '日';
	}
};
var $author$project$View$DialogsView$viewWeekdayButton = F2(
	function (selectedDays, wd) {
		var isSelected = A2($elm$core$List$member, wd, selectedDays);
		return A2(
			$elm$html$Html$button,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$type_('button'),
					$elm$html$Html$Attributes$class(
					isSelected ? $author$project$View$Styles$weekdayBtnActive : ''),
					$elm$html$Html$Events$onClick(
					$author$project$Types$ScheduleEvent(
						$author$project$Types$FormWeekdayToggled(wd)))
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(
					$author$project$Data$TimeSchedule$weekdayLabel(wd))
				]));
	});
var $author$project$View$Styles$weekdayPicker = 'weekday-picker';
var $author$project$View$DialogsView$viewRecurrenceDetail = function (form) {
	var _v0 = form.d$;
	switch (_v0) {
		case 'weekly':
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class($author$project$View$Styles$weekdayPicker)
					]),
				A2(
					$elm$core$List$map,
					$author$project$View$DialogsView$viewWeekdayButton(form.es),
					$author$project$Data$TimeSchedule$allWeekdays));
		case 'once':
			return A2(
				$elm$html$Html$input,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$type_('date'),
						$elm$html$Html$Attributes$value(form.dN),
						$elm$html$Html$Events$onInput(
						A2($elm$core$Basics$composeL, $author$project$Types$ScheduleEvent, $author$project$Types$FormOnceDateChanged))
					]),
				_List_Nil);
		default:
			return $elm$html$Html$text('');
	}
};
var $author$project$View$DialogsView$viewRecurrenceFields = function (form) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class($author$project$View$Styles$formField)
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$label,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class($author$project$View$Styles$formFieldLabel)
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('繰り返し')
					])),
				A2(
				$elm$html$Html$select,
				_List_fromArray(
					[
						$elm$html$Html$Events$onInput(
						A2($elm$core$Basics$composeL, $author$project$Types$ScheduleEvent, $author$project$Types$FormRecurrenceKindChanged))
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$option,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$value('daily'),
								$elm$html$Html$Attributes$selected(form.d$ === 'daily')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('毎日')
							])),
						A2(
						$elm$html$Html$option,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$value('weekly'),
								$elm$html$Html$Attributes$selected(form.d$ === 'weekly')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('曜日指定')
							])),
						A2(
						$elm$html$Html$option,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$value('once'),
								$elm$html$Html$Attributes$selected(form.d$ === 'once')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('単発日付')
							]))
					])),
				$author$project$View$DialogsView$viewRecurrenceDetail(form)
			]));
};
var $author$project$Types$ResetScheduleForm = {$: 2};
var $author$project$View$DialogsView$viewResetFormBtn = function (isEditing) {
	return isEditing ? A2(
		$elm$html$Html$button,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$type_('button'),
				$elm$html$Html$Events$onClick(
				$author$project$Types$ScheduleEvent($author$project$Types$ResetScheduleForm))
			]),
		_List_fromArray(
			[
				$elm$html$Html$text('新規作成に戻る')
			])) : $elm$html$Html$text('');
};
var $author$project$Types$FormDurationChanged = function (a) {
	return {$: 8, a: a};
};
var $author$project$Types$FormEnabledChanged = function (a) {
	return {$: 4, a: a};
};
var $author$project$Types$FormRangeEndTimeChanged = function (a) {
	return {$: 7, a: a};
};
var $author$project$Types$FormTimeChanged = function (a) {
	return {$: 6, a: a};
};
var $elm$html$Html$Attributes$min = $elm$html$Html$Attributes$stringProperty('min');
var $author$project$View$DialogsView$viewTimeAndDurationRow = function (form) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class($author$project$View$Styles$formRow)
			]),
		$elm$core$List$concat(
			_List_fromArray(
				[
					(form.ej === 'random') ? _List_fromArray(
					[
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class($author$project$View$Styles$formField)
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$label,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class($author$project$View$Styles$formFieldLabel)
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('ランダム範囲（開始）')
									])),
								A2(
								$elm$html$Html$input,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$type_('time'),
										$elm$html$Html$Attributes$value(form.eh),
										$elm$html$Html$Events$onInput(
										A2($elm$core$Basics$composeL, $author$project$Types$ScheduleEvent, $author$project$Types$FormTimeChanged))
									]),
								_List_Nil)
							])),
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class($author$project$View$Styles$formField)
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$label,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class($author$project$View$Styles$formFieldLabel)
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('ランダム範囲（終了）')
									])),
								A2(
								$elm$html$Html$input,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$type_('time'),
										$elm$html$Html$Attributes$value(form.dY),
										$elm$html$Html$Events$onInput(
										A2($elm$core$Basics$composeL, $author$project$Types$ScheduleEvent, $author$project$Types$FormRangeEndTimeChanged))
									]),
								_List_Nil)
							]))
					]) : _List_fromArray(
					[
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class($author$project$View$Styles$formField)
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$label,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class($author$project$View$Styles$formFieldLabel)
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('開始時刻')
									])),
								A2(
								$elm$html$Html$input,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$type_('time'),
										$elm$html$Html$Attributes$value(form.eh),
										$elm$html$Html$Events$onInput(
										A2($elm$core$Basics$composeL, $author$project$Types$ScheduleEvent, $author$project$Types$FormTimeChanged))
									]),
								_List_Nil)
							]))
					]),
					_List_fromArray(
					[
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class($author$project$View$Styles$formField)
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$label,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class($author$project$View$Styles$formFieldLabel)
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('作業時間（分）')
									])),
								A2(
								$elm$html$Html$input,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$type_('number'),
										$elm$html$Html$Attributes$min('5'),
										$elm$html$Html$Attributes$value(
										$elm$core$String$fromInt(form.db)),
										$elm$html$Html$Events$onInput(
										A2($elm$core$Basics$composeL, $author$project$Types$ScheduleEvent, $author$project$Types$FormDurationChanged))
									]),
								_List_Nil)
							])),
						A2(
						$elm$html$Html$label,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class($author$project$View$Styles$formRow)
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$input,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$type_('checkbox'),
										$elm$html$Html$Attributes$checked(form.dd),
										$elm$html$Html$Events$onClick(
										$author$project$Types$ScheduleEvent(
											$author$project$Types$FormEnabledChanged(!form.dd)))
									]),
								_List_Nil),
								A2(
								$elm$html$Html$span,
								_List_Nil,
								_List_fromArray(
									[
										$elm$html$Html$text('有効')
									]))
							]))
					])
				])));
};
var $author$project$Types$FormTimingKindChanged = function (a) {
	return {$: 5, a: a};
};
var $author$project$View$DialogsView$viewTimingKindField = function (timingKind) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class($author$project$View$Styles$formField)
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$label,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class($author$project$View$Styles$formFieldLabel)
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('時刻の指定方法')
					])),
				A2(
				$elm$html$Html$select,
				_List_fromArray(
					[
						$elm$html$Html$Events$onInput(
						A2($elm$core$Basics$composeL, $author$project$Types$ScheduleEvent, $author$project$Types$FormTimingKindChanged))
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$option,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$value('random'),
								$elm$html$Html$Attributes$selected(timingKind === 'random')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('ランダム時間帯（何時〜何時の間にランダム開始）')
							])),
						A2(
						$elm$html$Html$option,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$value('fixed'),
								$elm$html$Html$Attributes$selected(timingKind === 'fixed')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('固定時刻指定')
							]))
					]))
			]));
};
var $author$project$View$DialogsView$viewScheduleForm = F2(
	function (model, form) {
		return $elm$core$List$isEmpty(model.aC.aM) ? A2(
			$elm$html$Html$p,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('スケジュールを作成するには、先にプロジェクトを追加してください（メモ領域は対象外）。')
				])) : A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class($author$project$View$Styles$formField)
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$h4,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(
							_Utils_eq(form.dc, $elm$core$Maybe$Nothing) ? '新規スケジュール追加' : 'スケジュールを編集')
						])),
					A2($author$project$View$DialogsView$viewProjectSelect, model, form.dX),
					$author$project$View$DialogsView$viewTimingKindField(form.ej),
					$author$project$View$DialogsView$viewTimeAndDurationRow(form),
					$author$project$View$DialogsView$viewRecurrenceFields(form),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class($author$project$View$Styles$formRow)
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$button,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$type_('button'),
									$elm$html$Html$Attributes$class($author$project$View$Styles$btnPrimary),
									$elm$html$Html$Events$onClick(
									$author$project$Types$ScheduleEvent($author$project$Types$SaveScheduleSubmitted))
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('スケジュール保存')
								])),
							$author$project$View$DialogsView$viewResetFormBtn(
							!_Utils_eq(form.dc, $elm$core$Maybe$Nothing))
						]))
				]));
	});
var $author$project$Types$DeleteScheduleClicked = function (a) {
	return {$: 14, a: a};
};
var $author$project$Types$SelectScheduleForEdit = function (a) {
	return {$: 1, a: a};
};
var $author$project$Types$ToggleScheduleEnabled = function (a) {
	return {$: 13, a: a};
};
var $author$project$Data$TimeSchedule$recurrenceLabel = function (rec) {
	switch (rec.$) {
		case 0:
			return '毎日';
		case 1:
			var days = rec.a;
			return $elm$core$List$isEmpty(days) ? '曜日未指定' : A2(
				$elm$core$String$join,
				'・',
				A2($elm$core$List$map, $author$project$Data$TimeSchedule$weekdayLabel, days));
		default:
			var dateParts = rec.a;
			return $elm$core$String$fromInt(dateParts.cQ) + ('-' + ($author$project$Data$TimeSchedule$pad2(
				$author$project$Data$TimeSchedule$monthToInt(dateParts.b3)) + ('-' + $author$project$Data$TimeSchedule$pad2(dateParts.bE))));
	}
};
var $author$project$View$Styles$scheduleItem = 'schedule-item';
var $author$project$Data$TimeSchedule$timingLabel = function (timing) {
	if (!timing.$) {
		var t = timing.a;
		return A2($author$project$Data$TimeSchedule$formatTimeOfDay, t.a2, t.a8);
	} else {
		var w = timing.a;
		return A2($author$project$Data$TimeSchedule$formatTimeOfDay, w.cm, w.cn) + ('〜' + (A2($author$project$Data$TimeSchedule$formatTimeOfDay, w.ck, w.cl) + ' のランダム時刻'));
	}
};
var $author$project$View$DialogsView$viewScheduleRow = F2(
	function (projects, workSchedule) {
		var pName = A2(
			$elm$core$Maybe$withDefault,
			'(不明)',
			A2(
				$elm$core$Maybe$map,
				function ($) {
					return $.b4;
				},
				A2($elm$core$Dict$get, workSchedule.dX, projects)));
		var summary = pName + (' / ' + ($author$project$Data$TimeSchedule$timingLabel(workSchedule.ei) + (' (' + ($elm$core$String$fromInt(workSchedule.db) + ('分) / ' + $author$project$Data$TimeSchedule$recurrenceLabel(workSchedule.d_))))));
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class($author$project$View$Styles$scheduleItem)
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$label,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class($author$project$View$Styles$formRow)
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$input,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$type_('checkbox'),
									$elm$html$Html$Attributes$checked(workSchedule.dd),
									$elm$html$Html$Events$onClick(
									$author$project$Types$ScheduleEvent(
										$author$project$Types$ToggleScheduleEnabled(workSchedule.a3)))
								]),
							_List_Nil),
							A2(
							$elm$html$Html$span,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(summary)
								]))
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class($author$project$View$Styles$formRow)
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$button,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$type_('button'),
									$elm$html$Html$Events$onClick(
									$author$project$Types$ScheduleEvent(
										$author$project$Types$SelectScheduleForEdit(workSchedule)))
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('編集')
								])),
							A2(
							$elm$html$Html$button,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$type_('button'),
									$elm$html$Html$Attributes$class($author$project$View$Styles$btnDanger),
									$elm$html$Html$Events$onClick(
									$author$project$Types$ScheduleEvent(
										$author$project$Types$DeleteScheduleClicked(workSchedule.a3)))
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('削除')
								]))
						]))
				]));
	});
var $author$project$View$DialogsView$viewScheduleList = F2(
	function (projects, workSchedules) {
		return $elm$core$List$isEmpty(workSchedules) ? A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class($author$project$View$Styles$emptyState)
				]),
			_List_fromArray(
				[
					$elm$html$Html$text('スケジュールはまだ登録されていません')
				])) : A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class($author$project$View$Styles$formField)
				]),
			A2(
				$elm$core$List$map,
				$author$project$View$DialogsView$viewScheduleRow(projects),
				workSchedules));
	});
var $author$project$View$DialogsView$viewScheduleManagerDialog = F2(
	function (model, form) {
		return A2(
			$author$project$View$DialogsView$modalFrame,
			$author$project$View$Styles$modalPanelWide,
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class($author$project$View$Styles$modalHeader)
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h3,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class($author$project$View$Styles$modalHeaderTitle)
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('スケジュール設定')
								])),
							A2(
							$elm$html$Html$button,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$type_('button'),
									$elm$html$Html$Attributes$class($author$project$View$Styles$btnGhost),
									$elm$html$Html$Events$onClick(
									$author$project$Types$WorkspaceEvent($author$project$Types$CloseDialogCancelClicked))
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('✕')
								]))
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class($author$project$View$Styles$modalBody)
						]),
					_List_fromArray(
						[
							A2($author$project$View$DialogsView$viewScheduleList, model.aC.aN, model.aC.aW),
							A2($author$project$View$DialogsView$viewScheduleForm, model, form)
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class($author$project$View$Styles$modalFooter)
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$button,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$type_('button'),
									$elm$html$Html$Events$onClick(
									$author$project$Types$WorkspaceEvent($author$project$Types$CloseDialogCancelClicked))
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('閉じる')
								]))
						]))
				]));
	});
var $author$project$Types$AddStatusOptionClicked = {$: 20};
var $author$project$Types$SaveStatusManagerClicked = {$: 26};
var $author$project$View$Styles$modalFooterOk = 'btn--primary modal-footer__ok';
var $author$project$Types$DeleteStatusOptionClicked = function (a) {
	return {$: 25, a: a};
};
var $author$project$Types$MoveStatusDown = function (a) {
	return {$: 24, a: a};
};
var $author$project$Types$MoveStatusUp = function (a) {
	return {$: 23, a: a};
};
var $author$project$Types$UpdateStatusColor = F2(
	function (a, b) {
		return {$: 22, a: a, b: b};
	});
var $author$project$Types$UpdateStatusLabel = F2(
	function (a, b) {
		return {$: 21, a: a, b: b};
	});
var $author$project$Data$NoteCard$allStatusColors = _List_fromArray(
	[0, 1, 2, 3, 4, 5, 6, 7]);
var $elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $elm$html$Html$Attributes$attribute = $elm$virtual_dom$VirtualDom$attribute;
var $author$project$View$DialogsView$parseStatusColor = function (raw) {
	return A2(
		$elm$core$Maybe$withDefault,
		5,
		$author$project$Data$NoteCard$statusColorFromString(raw));
};
var $elm$html$Html$Attributes$spellcheck = $elm$html$Html$Attributes$boolProperty('spellcheck');
var $author$project$View$Styles$statusColorSwatch = 'status-color-swatch';
var $author$project$Data$NoteCard$statusColorLabel = function (color) {
	switch (color) {
		case 0:
			return 'イエロー';
		case 1:
			return 'ブルー';
		case 2:
			return 'グリーン';
		case 3:
			return 'オレンジ';
		case 4:
			return 'パープル';
		case 5:
			return 'グレー';
		case 6:
			return 'ピンク';
		default:
			return 'ティール';
	}
};
var $author$project$View$DialogsView$viewColorOption = F2(
	function (current, opt) {
		return A2(
			$elm$html$Html$option,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$value(
					$author$project$Data$NoteCard$statusColorToString(opt)),
					$elm$html$Html$Attributes$selected(
					_Utils_eq(opt, current))
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(
					$author$project$Data$NoteCard$statusColorLabel(opt))
				]));
	});
var $author$project$View$DialogsView$viewStatusEditRow = F3(
	function (totalCount, idx, opt) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class($author$project$View$Styles$scheduleItem)
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class($author$project$View$Styles$formRow)
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$span,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class($author$project$View$Styles$statusColorSwatch),
									A2(
									$elm$html$Html$Attributes$attribute,
									'data-status-color',
									$author$project$Data$NoteCard$statusColorToString(opt.c1))
								]),
							_List_Nil),
							A2(
							$elm$html$Html$input,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$type_('text'),
									$elm$html$Html$Attributes$spellcheck(false),
									$elm$html$Html$Attributes$value(opt.du),
									$elm$html$Html$Events$onInput(
									A2(
										$elm$core$Basics$composeL,
										$author$project$Types$WorkspaceEvent,
										$author$project$Types$UpdateStatusLabel(opt.a3)))
								]),
							_List_Nil),
							A2(
							$elm$html$Html$select,
							_List_fromArray(
								[
									$elm$html$Html$Events$onInput(
									A2(
										$elm$core$Basics$composeL,
										A2(
											$elm$core$Basics$composeL,
											$author$project$Types$WorkspaceEvent,
											$author$project$Types$UpdateStatusColor(opt.a3)),
										$author$project$View$DialogsView$parseStatusColor))
								]),
							A2(
								$elm$core$List$map,
								$author$project$View$DialogsView$viewColorOption(opt.c1),
								$author$project$Data$NoteCard$allStatusColors))
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class($author$project$View$Styles$formRow)
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$button,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$type_('button'),
									$elm$html$Html$Attributes$disabled(idx <= 0),
									$elm$html$Html$Events$onClick(
									$author$project$Types$WorkspaceEvent(
										$author$project$Types$MoveStatusUp(idx)))
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('↑')
								])),
							A2(
							$elm$html$Html$button,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$type_('button'),
									$elm$html$Html$Attributes$disabled(
									_Utils_cmp(idx + 1, totalCount) > -1),
									$elm$html$Html$Events$onClick(
									$author$project$Types$WorkspaceEvent(
										$author$project$Types$MoveStatusDown(idx)))
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('↓')
								])),
							A2(
							$elm$html$Html$button,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$type_('button'),
									$elm$html$Html$Attributes$class($author$project$View$Styles$btnDanger),
									$elm$html$Html$Attributes$disabled(totalCount <= 1),
									$elm$html$Html$Events$onClick(
									$author$project$Types$WorkspaceEvent(
										$author$project$Types$DeleteStatusOptionClicked(opt.a3)))
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('削除')
								]))
						]))
				]));
	});
var $author$project$View$DialogsView$viewStatusManagerDialog = function (draftOptions) {
	var totalCount = $elm$core$List$length(draftOptions);
	return A2(
		$author$project$View$DialogsView$modalFrame,
		$author$project$View$Styles$modalPanelWide,
		_List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class($author$project$View$Styles$modalHeader)
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$h3,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class($author$project$View$Styles$modalHeaderTitle)
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('プロジェクトの状態選択肢設定')
							])),
						A2(
						$elm$html$Html$button,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$type_('button'),
								$elm$html$Html$Attributes$class($author$project$View$Styles$btnGhost),
								$elm$html$Html$Events$onClick(
								$author$project$Types$WorkspaceEvent($author$project$Types$CloseDialogCancelClicked))
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('✕')
							]))
					])),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class($author$project$View$Styles$modalBody)
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$p,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('このプロジェクト内で使用する状態の名称・色・並び順を設定できます。')
							])),
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class($author$project$View$Styles$formField)
							]),
						A2(
							$elm$core$List$indexedMap,
							$author$project$View$DialogsView$viewStatusEditRow(totalCount),
							draftOptions)),
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class($author$project$View$Styles$formRow)
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$button,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$type_('button'),
										$elm$html$Html$Events$onClick(
										$author$project$Types$WorkspaceEvent($author$project$Types$AddStatusOptionClicked))
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('＋ 状態を追加')
									]))
							]))
					])),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class($author$project$View$Styles$modalFooter)
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$button,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$type_('button'),
								$elm$html$Html$Attributes$class($author$project$View$Styles$modalFooterOk),
								$elm$html$Html$Events$onClick(
								$author$project$Types$WorkspaceEvent($author$project$Types$SaveStatusManagerClicked))
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('OK（保存）')
							])),
						A2(
						$elm$html$Html$button,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$type_('button'),
								$elm$html$Html$Events$onClick(
								$author$project$Types$WorkspaceEvent($author$project$Types$CloseDialogCancelClicked))
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('キャンセル')
							]))
					]))
			]));
};
var $author$project$View$DialogsView$viewActiveDialog = function (model) {
	var _v0 = model.bG;
	switch (_v0.$) {
		case 0:
			return $elm$html$Html$text('');
		case 1:
			var pid = _v0.a;
			var name = _v0.b;
			return A2($author$project$View$DialogsView$viewConfirmDeleteProject, pid, name);
		case 2:
			return $author$project$View$DialogsView$viewArchiveDialog(
				$author$project$Data$WorkspaceData$archivedCards(
					$author$project$Types$activeWorkspaceData(model)));
		case 3:
			var draftOptions = _v0.a;
			return $author$project$View$DialogsView$viewStatusManagerDialog(draftOptions);
		case 4:
			var form = _v0.a;
			return A2($author$project$View$DialogsView$viewScheduleManagerDialog, model, form);
		case 5:
			var trig = _v0.a;
			return A2($author$project$View$DialogsView$viewScheduleAlertDialog, model.aC.aN, trig);
		case 6:
			var state = _v0.a;
			return A2(
				$author$project$View$MarkdownExportView$viewMarkdownExportModal,
				$author$project$Types$activeWorkspaceData(model),
				state);
		case 7:
			var imported = _v0.a;
			return $author$project$View$DialogsView$viewConfirmBackupImport(imported);
		default:
			return $author$project$View$ModManagerView$viewModManagerModal(model);
	}
};
var $author$project$Data$NoteCard$otherEndOfLink = F2(
	function (targetId, _v0) {
		var a = _v0.a;
		var b = _v0.b;
		return _Utils_eq(a, targetId) ? $elm$core$Maybe$Just(b) : (_Utils_eq(b, targetId) ? $elm$core$Maybe$Just(a) : $elm$core$Maybe$Nothing);
	});
var $author$project$Data$NoteCard$linkedCardIds = F2(
	function (cardId, links) {
		return $elm_community$list_extra$List$Extra$unique(
			A2(
				$elm$core$List$filterMap,
				$author$project$Data$NoteCard$otherEndOfLink(cardId),
				links));
	});
var $author$project$View$Styles$modalBackdropFullscreen = 'modal-backdrop modal-backdrop--fullscreen';
var $author$project$View$Styles$modalPanelFullscreen = 'modal-panel modal-panel--fullscreen';
var $author$project$View$CardEditorView$resolveLinked = F2(
	function (ws, targetId) {
		return A2(
			$elm$core$Maybe$andThen,
			function (item) {
				return item.c2.dq ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
					_Utils_Tuple2(item.a3, item.c2.ek));
			},
			A2($elm$core$Dict$get, targetId, ws.b9));
	});
var $author$project$Types$EditorBodyChanged = function (a) {
	return {$: 5, a: a};
};
var $author$project$View$Styles$formFieldTextarea = 'form-field__textarea';
var $elm$html$Html$Attributes$id = $elm$html$Html$Attributes$stringProperty('id');
var $elm$html$Html$textarea = _VirtualDom_node('textarea');
var $author$project$View$CardEditorView$viewBodyField = function (body) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class($author$project$View$Styles$formField)
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$label,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class($author$project$View$Styles$formFieldLabel)
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('本文（Markdownテキストそのまま表示）')
					])),
				A2(
				$elm$html$Html$textarea,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$id('card-editor-body'),
						$elm$html$Html$Attributes$class($author$project$View$Styles$formFieldTextarea),
						$elm$html$Html$Attributes$spellcheck(false),
						$elm$html$Html$Attributes$value(body),
						$elm$html$Html$Events$onInput(
						A2($elm$core$Basics$composeL, $author$project$Types$CardEvent, $author$project$Types$EditorBodyChanged))
					]),
				_List_Nil)
			]));
};
var $elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
var $elm$html$Html$map = $elm$virtual_dom$VirtualDom$map;
var $author$project$View$Styles$cardLinks = 'card-box__links';
var $author$project$Types$JumpToCardClicked = function (a) {
	return {$: 17, a: a};
};
var $author$project$Types$UnlinkCardsClicked = F2(
	function (a, b) {
		return {$: 16, a: a, b: b};
	});
var $author$project$View$Styles$cardLinkChip = 'card-box__link-chip';
var $author$project$View$Styles$cardLinkJump = 'card-box__link-jump';
var $author$project$View$Styles$cardLinkUnlink = 'card-box__link-unlink';
var $author$project$View$BoardView$viewCardLinkChip = F2(
	function (ownerId, _v0) {
		var targetId = _v0.a;
		var targetTitle = _v0.b;
		return A2(
			$elm$html$Html$span,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class($author$project$View$Styles$cardLinkChip)
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$button,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$type_('button'),
							$elm$html$Html$Attributes$class($author$project$View$Styles$cardLinkJump),
							$elm$html$Html$Events$onClick(
							$author$project$Types$JumpToCardClicked(targetId))
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('🔗 ' + targetTitle)
						])),
					A2(
					$elm$html$Html$button,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$type_('button'),
							$elm$html$Html$Attributes$class($author$project$View$Styles$cardLinkUnlink),
							$elm$html$Html$Events$onClick(
							A2($author$project$Types$UnlinkCardsClicked, ownerId, targetId))
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('×')
						]))
				]));
	});
var $author$project$View$BoardView$viewCardLinks = F2(
	function (ownerId, linkedPairs) {
		return $elm$core$List$isEmpty(linkedPairs) ? $elm$html$Html$text('') : A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class($author$project$View$Styles$cardLinks)
				]),
			A2(
				$elm$core$List$map,
				$author$project$View$BoardView$viewCardLinkChip(ownerId),
				linkedPairs));
	});
var $author$project$View$CardEditorView$viewLinkedSection = F2(
	function (ownerId, linkedPairs) {
		return $elm$core$List$isEmpty(linkedPairs) ? $elm$html$Html$text('') : A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class($author$project$View$Styles$formField)
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$label,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class($author$project$View$Styles$formFieldLabel)
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('関連カード')
						])),
					A2(
					$elm$html$Html$map,
					$author$project$Types$CardEvent,
					A2($author$project$View$BoardView$viewCardLinks, ownerId, linkedPairs))
				]));
	});
var $author$project$Types$EditorMoveTargetChanged = function (a) {
	return {$: 7, a: a};
};
var $author$project$View$CardEditorView$viewWorkspaceOption = F2(
	function (selectedKey, _v0) {
		var key = _v0.a;
		var labelText = _v0.b;
		return A2(
			$elm$html$Html$option,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$value(key),
					$elm$html$Html$Attributes$selected(
					_Utils_eq(key, selectedKey))
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(labelText)
				]));
	});
var $author$project$View$CardEditorView$viewMoveTargetField = F2(
	function (model, currentKey) {
		var projectOptions = A2(
			$elm$core$List$filterMap,
			function (pid) {
				return A2(
					$elm$core$Maybe$map,
					function (ws) {
						return _Utils_Tuple2('project:' + pid, ws.b4);
					},
					A2($elm$core$Dict$get, pid, model.aC.aN));
			},
			model.aC.aM);
		var memoOption = _Utils_Tuple2('memo', model.aC.aK.b4);
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class($author$project$View$Styles$formField)
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$label,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class($author$project$View$Styles$formFieldLabel)
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('所属作業場（変更して保存で移動）')
						])),
					A2(
					$elm$html$Html$select,
					_List_fromArray(
						[
							$elm$html$Html$Events$onInput(
							A2($elm$core$Basics$composeL, $author$project$Types$CardEvent, $author$project$Types$EditorMoveTargetChanged))
						]),
					A2(
						$elm$core$List$map,
						$author$project$View$CardEditorView$viewWorkspaceOption(currentKey),
						A2($elm$core$List$cons, memoOption, projectOptions)))
				]));
	});
var $author$project$Types$EditorStatusChanged = function (a) {
	return {$: 6, a: a};
};
var $author$project$Data$NoteCard$findStatusColor = F2(
	function (sid, options) {
		return A2(
			$elm$core$Maybe$withDefault,
			'gray',
			A2(
				$elm$core$Maybe$map,
				A2(
					$elm$core$Basics$composeR,
					function ($) {
						return $.c1;
					},
					$author$project$Data$NoteCard$statusColorToString),
				A2(
					$elm_community$list_extra$List$Extra$find,
					function (opt) {
						return _Utils_eq(opt.a3, sid);
					},
					options)));
	});
var $author$project$View$CardEditorView$viewStatusOption = F2(
	function (currentSid, opt) {
		return A2(
			$elm$html$Html$option,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$value(opt.a3),
					$elm$html$Html$Attributes$selected(
					_Utils_eq(opt.a3, currentSid))
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(opt.du)
				]));
	});
var $author$project$View$CardEditorView$viewStatusField = F2(
	function (statusOptions, currentSid) {
		var colorName = A2($author$project$Data$NoteCard$findStatusColor, currentSid, statusOptions);
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class($author$project$View$Styles$formField)
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$label,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class($author$project$View$Styles$formFieldLabel)
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('状態')
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class($author$project$View$Styles$formRow)
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$select,
							_List_fromArray(
								[
									$elm$html$Html$Events$onInput(
									A2($elm$core$Basics$composeL, $author$project$Types$CardEvent, $author$project$Types$EditorStatusChanged))
								]),
							A2(
								$elm$core$List$map,
								$author$project$View$CardEditorView$viewStatusOption(currentSid),
								statusOptions)),
							A2(
							$elm$html$Html$span,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class($author$project$View$Styles$statusColorSwatch),
									A2($elm$html$Html$Attributes$attribute, 'data-status-color', colorName)
								]),
							_List_Nil)
						]))
				]));
	});
var $author$project$Types$EditorTitleChanged = function (a) {
	return {$: 4, a: a};
};
var $author$project$View$CardEditorView$viewTitleField = function (title) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class($author$project$View$Styles$formField)
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$label,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class($author$project$View$Styles$formFieldLabel)
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('タイトル')
					])),
				A2(
				$elm$html$Html$input,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$id('card-editor-title'),
						$elm$html$Html$Attributes$type_('text'),
						$elm$html$Html$Attributes$spellcheck(false),
						$elm$html$Html$Attributes$value(title),
						$elm$html$Html$Events$onInput(
						A2($elm$core$Basics$composeL, $author$project$Types$CardEvent, $author$project$Types$EditorTitleChanged))
					]),
				_List_Nil)
			]));
};
var $author$project$View$CardEditorView$viewEditorBody = F4(
	function (model, statusOptions, editor, linkedPairs) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class($author$project$View$Styles$modalBody)
				]),
			_List_fromArray(
				[
					$author$project$View$CardEditorView$viewTitleField(editor.ek),
					A2($author$project$View$CardEditorView$viewStatusField, statusOptions, editor.ec),
					$author$project$View$CardEditorView$viewBodyField(editor.cX),
					A2($author$project$View$CardEditorView$viewMoveTargetField, model, editor.dB),
					A2($author$project$View$CardEditorView$viewLinkedSection, editor.bz, linkedPairs)
				]));
	});
var $author$project$Types$ArchiveCardClicked = function (a) {
	return {$: 13, a: a};
};
var $author$project$Types$CloseEditorCancelClicked = {$: 3};
var $author$project$Types$SaveEditorClicked = {$: 8};
var $author$project$View$CardEditorView$viewEditorFooter = function (cardId) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class($author$project$View$Styles$modalFooter)
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$button,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$type_('button'),
						$elm$html$Html$Attributes$class($author$project$View$Styles$modalFooterOk),
						$elm$html$Html$Events$onClick(
						$author$project$Types$CardEvent($author$project$Types$SaveEditorClicked))
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('OK')
					])),
				A2(
				$elm$html$Html$button,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$type_('button'),
						$elm$html$Html$Attributes$class($author$project$View$Styles$btnDanger),
						$elm$html$Html$Events$onClick(
						$author$project$Types$CardEvent(
							$author$project$Types$ArchiveCardClicked(cardId)))
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('アーカイブ')
					])),
				A2(
				$elm$html$Html$button,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$type_('button'),
						$elm$html$Html$Events$onClick(
						$author$project$Types$CardEvent($author$project$Types$CloseEditorCancelClicked))
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('キャンセル')
					]))
			]));
};
var $author$project$View$CardEditorView$viewEditorHeader = A2(
	$elm$html$Html$div,
	_List_fromArray(
		[
			$elm$html$Html$Attributes$class($author$project$View$Styles$modalHeader)
		]),
	_List_fromArray(
		[
			A2(
			$elm$html$Html$h3,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class($author$project$View$Styles$modalHeaderTitle)
				]),
			_List_fromArray(
				[
					$elm$html$Html$text('カードを編集')
				])),
			A2(
			$elm$html$Html$button,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$type_('button'),
					$elm$html$Html$Attributes$class($author$project$View$Styles$btnGhost),
					$elm$html$Html$Events$onClick(
					$author$project$Types$CardEvent($author$project$Types$CloseEditorCancelClicked))
				]),
			_List_fromArray(
				[
					$elm$html$Html$text('✕')
				]))
		]));
var $author$project$View$CardEditorView$viewEditorModal = F3(
	function (isMobile, model, editor) {
		var ws = $author$project$Types$activeWorkspaceData(model);
		var linkedPairs = A2(
			$elm$core$List$filterMap,
			$author$project$View$CardEditorView$resolveLinked(ws),
			A2($author$project$Data$NoteCard$linkedCardIds, editor.bz, ws.b1));
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class(
					isMobile ? $author$project$View$Styles$modalBackdropFullscreen : $author$project$View$Styles$modalBackdrop),
					$elm$html$Html$Events$onClick(
					$author$project$Types$WorkspaceEvent($author$project$Types$CloseModalBackdropClicked))
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							isMobile ? $author$project$View$Styles$modalPanelFullscreen : $author$project$View$Styles$modalPanel),
							A2(
							$elm$html$Html$Events$stopPropagationOn,
							'click',
							$elm$json$Json$Decode$succeed(
								_Utils_Tuple2(
									$author$project$Types$AppEvent($author$project$Types$NoOpApp),
									true)))
						]),
					_List_fromArray(
						[
							$author$project$View$CardEditorView$viewEditorHeader,
							A4($author$project$View$CardEditorView$viewEditorBody, model, ws.cA, editor, linkedPairs),
							$author$project$View$CardEditorView$viewEditorFooter(editor.bz)
						]))
				]));
	});
var $author$project$View$CardEditorView$viewCardEditor = function (model) {
	var _v0 = model.c_;
	if (_v0.$ === 1) {
		return $elm$html$Html$text('');
	} else {
		var editor = _v0.a;
		return A3(
			$author$project$View$CardEditorView$viewEditorModal,
			$author$project$Types$isMobileViewport(model),
			model,
			editor);
	}
};
var $author$project$View$Styles$mainArea = 'main-area';
var $elm$html$Html$main_ = _VirtualDom_node('main');
var $author$project$View$Styles$boardContainer = 'board-container';
var $author$project$View$Styles$boardCanvas = 'board-canvas';
var $author$project$View$BoardView$canvasConfig = function () {
	var base = $author$project$DragCanvas$defaultConfig;
	return _Utils_update(
		base,
		{
			aD: $author$project$View$Styles$boardCanvas,
			aX: $elm$core$Maybe$Just('board-canvas')
		});
}();
var $elm$core$Basics$round = _Basics_round;
var $author$project$View$BoardView$isCardLinkHighlighted = F2(
	function (cardId, maybeDrag) {
		if (maybeDrag.$ === 1) {
			return false;
		} else {
			var st = maybeDrag.a;
			var _v1 = st.dl;
			if (_v1.$ === 1) {
				return false;
			} else {
				var targetId = _v1.a;
				return _Utils_eq(cardId, st.bI) || _Utils_eq(cardId, targetId);
			}
		}
	});
var $elm$virtual_dom$VirtualDom$lazy8 = _VirtualDom_lazy8;
var $elm$html$Html$Lazy$lazy8 = $elm$virtual_dom$VirtualDom$lazy8;
var $author$project$View$BoardView$resolveActiveLinkedCard = F2(
	function (allCardMap, targetId) {
		return A2(
			$elm$core$Maybe$andThen,
			function (item) {
				return item.c2.dq ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
					_Utils_Tuple2(item.a3, item.c2.ek));
			},
			A2($elm$core$Dict$get, targetId, allCardMap));
	});
var $elm$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			$elm$core$List$any,
			A2($elm$core$Basics$composeL, $elm$core$Basics$not, isOkay),
			list);
	});
var $elm$core$String$words = _String_words;
var $author$project$Data$NoteCard$matchesQuery = F2(
	function (rawQuery, noteCard) {
		var tokens = $elm$core$String$words(
			$elm$core$String$toLower(rawQuery));
		if ($elm$core$List$isEmpty(tokens)) {
			return true;
		} else {
			var haystack = $elm$core$String$toLower(noteCard.c2.ek + ('\n' + noteCard.c2.cX));
			return A2(
				$elm$core$List$all,
				function (token) {
					return A2($elm$core$String$contains, token, haystack);
				},
				tokens);
		}
	});
var $author$project$View$BoardView$searchMatchAttribute = F2(
	function (query, noteCard) {
		return $elm$core$String$isEmpty(
			$elm$core$String$trim(query)) ? 'none' : (A2($author$project$Data$NoteCard$matchesQuery, query, noteCard) ? 'true' : 'false');
	});
var $author$project$Types$OpenEditorClicked = function (a) {
	return {$: 2, a: a};
};
var $author$project$View$BoardView$boolAttr = function (b) {
	return b ? 'true' : 'false';
};
var $author$project$View$Styles$cardBox = 'card-box';
var $author$project$View$Styles$cardBoxCollapsed = 'card-box card-box--collapsed';
var $author$project$View$Styles$cardBoxTitleOnly = 'card-box card-box--title-only';
var $author$project$View$Styles$cardTitle = 'card-box__title';
var $elm$core$String$fromFloat = _String_fromNumber;
var $elm$html$Html$Events$onDoubleClick = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'dblclick',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
var $author$project$View$Styles$cardBody = 'card-box__body';
var $author$project$View$BoardView$viewCardBodyIfExpanded = function (content) {
	return (content.dr || $elm$core$String$isEmpty(content.cX)) ? $elm$html$Html$text('') : A2(
		$elm$html$Html$p,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class($author$project$View$Styles$cardBody),
				A2($elm$html$Html$Attributes$attribute, 'data-no-zoom', 'true')
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(content.cX)
			]));
};
var $author$project$Types$DuplicateCardClicked = function (a) {
	return {$: 12, a: a};
};
var $author$project$View$Styles$cardFooter = 'card-box__footer';
var $author$project$View$Styles$cardIconBtn = 'card-box__icon-btn';
var $author$project$View$BoardView$viewCardFooter = function (cardId) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class($author$project$View$Styles$cardFooter)
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$button,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$type_('button'),
						$elm$html$Html$Attributes$class($author$project$View$Styles$cardIconBtn),
						$elm$html$Html$Events$onClick(
						$author$project$Types$OpenEditorClicked(cardId))
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('編集')
					])),
				A2(
				$elm$html$Html$button,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$type_('button'),
						$elm$html$Html$Attributes$class($author$project$View$Styles$cardIconBtn),
						$elm$html$Html$Events$onClick(
						$author$project$Types$DuplicateCardClicked(cardId))
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('複製')
					])),
				A2(
				$elm$html$Html$button,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$type_('button'),
						$elm$html$Html$Attributes$class($author$project$View$Styles$cardIconBtn),
						$elm$html$Html$Events$onClick(
						$author$project$Types$ArchiveCardClicked(cardId))
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('アーカイブ')
					]))
			]));
};
var $author$project$Types$ToggleCollapseClicked = function (a) {
	return {$: 11, a: a};
};
var $author$project$View$Styles$cardHeader = 'card-box__header';
var $author$project$View$Styles$cardHeaderActions = 'card-box__header-actions';
var $author$project$Types$StatusChanged = F2(
	function (a, b) {
		return {$: 9, a: a, b: b};
	});
var $author$project$View$Styles$cardStatusSelect = 'card-box__status-select';
var $author$project$Types$StatusWheelScrolled = F2(
	function (a, b) {
		return {$: 10, a: a, b: b};
	});
var $elm$virtual_dom$VirtualDom$Custom = function (a) {
	return {$: 3, a: a};
};
var $elm$html$Html$Events$custom = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Custom(decoder));
	});
var $author$project$View$BoardView$statusWheelAttribute = function (cardId) {
	return A2(
		$elm$html$Html$Events$custom,
		'wheel',
		A2(
			$elm$json$Json$Decode$map,
			function (dy) {
				return {
					ad: A2($author$project$Types$StatusWheelScrolled, cardId, dy),
					af: true,
					ai: true
				};
			},
			A2($elm$json$Json$Decode$field, 'deltaY', $elm$json$Json$Decode$float)));
};
var $author$project$View$BoardView$viewStatusOption = F2(
	function (currentSid, opt) {
		return A2(
			$elm$html$Html$option,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$value(opt.a3),
					$elm$html$Html$Attributes$selected(
					_Utils_eq(opt.a3, currentSid))
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(opt.du)
				]));
	});
var $author$project$View$BoardView$viewStatusSelect = F3(
	function (cardId, currentStatusId, statusOptions) {
		return A2(
			$elm$html$Html$select,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class($author$project$View$Styles$cardStatusSelect),
					A2($elm$html$Html$Attributes$attribute, 'data-no-drag', 'true'),
					A2($elm$html$Html$Attributes$attribute, 'data-no-zoom', 'true'),
					$elm$html$Html$Events$onInput(
					$author$project$Types$StatusChanged(cardId)),
					$author$project$View$BoardView$statusWheelAttribute(cardId)
				]),
			A2(
				$elm$core$List$map,
				$author$project$View$BoardView$viewStatusOption(currentStatusId),
				statusOptions));
	});
var $author$project$View$BoardView$viewCardHeader = F3(
	function (cardId, content, statusOptions) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class($author$project$View$Styles$cardHeader)
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$h3,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class($author$project$View$Styles$cardTitle)
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(content.ek)
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class($author$project$View$Styles$cardHeaderActions)
						]),
					_List_fromArray(
						[
							A3($author$project$View$BoardView$viewStatusSelect, cardId, content.ec, statusOptions),
							A2(
							$elm$html$Html$button,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$type_('button'),
									$elm$html$Html$Attributes$class($author$project$View$Styles$cardIconBtn),
									$elm$html$Html$Events$onClick(
									$author$project$Types$ToggleCollapseClicked(cardId))
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(
									content.dr ? '▼' : '▲')
								]))
						]))
				]));
	});
var $author$project$View$Styles$cardTooltip = 'card-box__tooltip';
var $author$project$View$BoardView$viewCollapsedTooltip = function (content) {
	return (content.dr && (!$elm$core$String$isEmpty(
		$elm$core$String$trim(content.cX)))) ? A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class($author$project$View$Styles$cardTooltip)
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(content.cX)
			])) : $elm$html$Html$text('');
};
var $author$project$View$BoardView$viewBoardCard = F8(
	function (cardId, content, statusColorName, statusOptions, isSelected, isLinkHighlighted, _v0, linkedPairs) {
		var matchAttr = _v0.a;
		var isTitleOnly = _v0.b;
		var titleFontPx = _v0.c;
		return isTitleOnly ? A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$id('board-card-' + cardId),
					$elm$html$Html$Attributes$class($author$project$View$Styles$cardBoxTitleOnly),
					A2($elm$html$Html$Attributes$attribute, 'data-status-color', statusColorName),
					A2(
					$elm$html$Html$Attributes$attribute,
					'data-selected',
					$author$project$View$BoardView$boolAttr(isSelected)),
					A2($elm$html$Html$Attributes$attribute, 'data-search-match', matchAttr),
					A2(
					$elm$html$Html$Attributes$attribute,
					'data-link-highlight',
					$author$project$View$BoardView$boolAttr(isLinkHighlighted)),
					$elm$html$Html$Events$onDoubleClick(
					$author$project$Types$OpenEditorClicked(cardId))
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$h3,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class($author$project$View$Styles$cardTitle),
							A2(
							$elm$html$Html$Attributes$style,
							'font-size',
							$elm$core$String$fromFloat(titleFontPx) + 'px')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(content.ek)
						]))
				])) : A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$id('board-card-' + cardId),
					$elm$html$Html$Attributes$class(
					content.dr ? $author$project$View$Styles$cardBoxCollapsed : $author$project$View$Styles$cardBox),
					A2($elm$html$Html$Attributes$attribute, 'data-status-color', statusColorName),
					A2(
					$elm$html$Html$Attributes$attribute,
					'data-selected',
					$author$project$View$BoardView$boolAttr(isSelected)),
					A2($elm$html$Html$Attributes$attribute, 'data-search-match', matchAttr),
					A2(
					$elm$html$Html$Attributes$attribute,
					'data-link-highlight',
					$author$project$View$BoardView$boolAttr(isLinkHighlighted)),
					$elm$html$Html$Events$onDoubleClick(
					$author$project$Types$OpenEditorClicked(cardId))
				]),
			_List_fromArray(
				[
					A3($author$project$View$BoardView$viewCardHeader, cardId, content, statusOptions),
					$author$project$View$BoardView$viewCardBodyIfExpanded(content),
					$author$project$View$BoardView$viewCollapsedTooltip(content),
					A2($author$project$View$BoardView$viewCardLinks, cardId, linkedPairs),
					$author$project$View$BoardView$viewCardFooter(cardId)
				]));
	});
var $author$project$View$BoardView$toCanvasItem = F9(
	function (query, selectedId, pcDrag, statusOptions, allCardMap, links, isTitleOnly, titleFontPx, noteCard) {
		var statusColorName = A2($author$project$Data$NoteCard$findStatusColor, noteCard.c2.ec, statusOptions);
		var matchAttr = A2($author$project$View$BoardView$searchMatchAttribute, query, noteCard);
		var linkedPairs = A2(
			$elm$core$List$filterMap,
			$author$project$View$BoardView$resolveActiveLinkedCard(allCardMap),
			A2($author$project$Data$NoteCard$linkedCardIds, noteCard.a3, links));
		var item = {a3: noteCard.a3, eu: noteCard.dV.eu, ev: noteCard.dV.ev};
		var isSelected = _Utils_eq(
			selectedId,
			$elm$core$Maybe$Just(noteCard.a3));
		var isLinkHighlighted = A2($author$project$View$BoardView$isCardLinkHighlighted, noteCard.a3, pcDrag);
		return _Utils_Tuple2(
			item,
			A2(
				$elm$html$Html$map,
				$author$project$Types$CardEvent,
				A9(
					$elm$html$Html$Lazy$lazy8,
					$author$project$View$BoardView$viewBoardCard,
					noteCard.a3,
					noteCard.c2,
					statusColorName,
					statusOptions,
					isSelected,
					isLinkHighlighted,
					_Utils_Tuple3(matchAttr, isTitleOnly, titleFontPx),
					linkedPairs)));
	});
var $author$project$DragCanvas$canvasStateLabel = function (dragState) {
	switch (dragState.$) {
		case 2:
			return 'dragging';
		case 4:
			return 'panning';
		default:
			return 'idle';
	}
};
var $author$project$DragCanvas$StartPan = function (a) {
	return {$: 1, a: a};
};
var $author$project$DragCanvas$leftButtonDecoder = A2(
	$elm$json$Json$Decode$andThen,
	function (button) {
		return (!button) ? $elm$json$Json$Decode$succeed(0) : $elm$json$Json$Decode$fail('not left button');
	},
	A2($elm$json$Json$Decode$field, 'button', $elm$json$Json$Decode$int));
var $author$project$DragCanvas$panMouseDownAttribute = function (toMsg) {
	return A2(
		$elm$html$Html$Events$custom,
		'mousedown',
		A3(
			$elm$json$Json$Decode$map2,
			F2(
				function (_v0, pointer) {
					return {
						ad: toMsg(
							$author$project$DragCanvas$StartPan(pointer)),
						af: true,
						ai: false
					};
				}),
			$author$project$DragCanvas$leftButtonDecoder,
			$author$project$DragCanvas$pointerDecoder));
};
var $author$project$DragCanvas$singleTouchDecoder = A2(
	$elm$json$Json$Decode$andThen,
	function (len) {
		return (len === 1) ? A2(
			$elm$json$Json$Decode$at,
			_List_fromArray(
				['touches', '0']),
			$author$project$DragCanvas$pointerDecoder) : $elm$json$Json$Decode$fail('not single touch');
	},
	A2(
		$elm$json$Json$Decode$at,
		_List_fromArray(
			['touches', 'length']),
		$elm$json$Json$Decode$int));
var $author$project$DragCanvas$panTouchStartAttribute = function (toMsg) {
	return A2(
		$elm$html$Html$Events$custom,
		'touchstart',
		A2(
			$elm$json$Json$Decode$map,
			function (pointer) {
				return {
					ad: toMsg(
						$author$project$DragCanvas$StartPan(pointer)),
					af: true,
					ai: false
				};
			},
			$author$project$DragCanvas$singleTouchDecoder));
};
var $author$project$DragCanvas$PointerCancel = {$: 4};
var $author$project$DragCanvas$changedTouchDecoder = A2(
	$elm$json$Json$Decode$at,
	_List_fromArray(
		['changedTouches', '0']),
	$author$project$DragCanvas$pointerDecoder);
var $elm$virtual_dom$VirtualDom$MayPreventDefault = function (a) {
	return {$: 2, a: a};
};
var $elm$html$Html$Events$preventDefaultOn = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$MayPreventDefault(decoder));
	});
var $author$project$DragCanvas$touchTrackingAttributes = F2(
	function (toMsg, dragState) {
		if (!dragState.$) {
			return _List_Nil;
		} else {
			return _List_fromArray(
				[
					A2(
					$elm$html$Html$Events$preventDefaultOn,
					'touchmove',
					A2(
						$elm$json$Json$Decode$map,
						function (p) {
							return _Utils_Tuple2(
								toMsg(
									$author$project$DragCanvas$PointerMoved(p)),
								true);
						},
						$author$project$DragCanvas$singleTouchDecoder)),
					A2(
					$elm$html$Html$Events$on,
					'touchend',
					A2(
						$elm$json$Json$Decode$map,
						function (p) {
							return toMsg(
								$author$project$DragCanvas$PointerUp(
									$elm$core$Maybe$Just(p)));
						},
						$author$project$DragCanvas$changedTouchDecoder)),
					A2(
					$elm$html$Html$Events$on,
					'touchcancel',
					$elm$json$Json$Decode$succeed(
						toMsg($author$project$DragCanvas$PointerCancel)))
				]);
		}
	});
var $author$project$DragCanvas$transformValue = function (data) {
	return 'translate(' + ($elm$core$String$fromFloat(data.m.eu) + ('px, ' + ($elm$core$String$fromFloat(data.m.ev) + ('px) scale(' + ($elm$core$String$fromFloat(data.p) + ')')))));
};
var $author$project$DragCanvas$Noop = {$: 6};
var $author$project$DragCanvas$StartDrag = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $author$project$DragCanvas$isInteractiveTag = function (tagName) {
	return A2(
		$elm$core$List$member,
		$elm$core$String$toUpper(tagName),
		_List_fromArray(
			['INPUT', 'TEXTAREA', 'BUTTON', 'SELECT', 'A', 'LABEL', 'SUMMARY']));
};
var $author$project$DragCanvas$protectedFrom = function (depth) {
	return A2(
		$elm$json$Json$Decode$andThen,
		function (isProtected) {
			return isProtected ? $elm$json$Json$Decode$succeed(true) : ((depth <= 0) ? $elm$json$Json$Decode$succeed(false) : $elm$json$Json$Decode$oneOf(
				_List_fromArray(
					[
						A2(
						$elm$json$Json$Decode$field,
						'parentElement',
						$author$project$DragCanvas$protectedFrom(depth - 1)),
						$elm$json$Json$Decode$succeed(false)
					])));
		},
		A3(
			$elm$json$Json$Decode$map2,
			F2(
				function (tagName, maybeNoDrag) {
					return $author$project$DragCanvas$isInteractiveTag(tagName) || (!_Utils_eq(maybeNoDrag, $elm$core$Maybe$Nothing));
				}),
			A2($elm$json$Json$Decode$field, 'tagName', $elm$json$Json$Decode$string),
			$elm$json$Json$Decode$maybe(
				A2(
					$elm$json$Json$Decode$at,
					_List_fromArray(
						['dataset', 'noDrag']),
					$elm$json$Json$Decode$string))));
};
var $author$project$DragCanvas$isProtectedTargetDecoder = A2(
	$elm$json$Json$Decode$field,
	'target',
	$author$project$DragCanvas$protectedFrom(6));
var $author$project$DragCanvas$itemStartDecoder = F4(
	function (config, toMsg, itemId, pointDecoder) {
		return A2(
			$elm$json$Json$Decode$andThen,
			function (pointer) {
				return A2(
					$elm$json$Json$Decode$andThen,
					function (isProtected) {
						return ((!isProtected) && config.ab(itemId)) ? $elm$json$Json$Decode$succeed(
							{
								ad: toMsg(
									A2($author$project$DragCanvas$StartDrag, itemId, pointer)),
								af: true,
								ai: true
							}) : $elm$json$Json$Decode$succeed(
							{
								ad: toMsg($author$project$DragCanvas$Noop),
								af: false,
								ai: true
							});
					},
					$author$project$DragCanvas$isProtectedTargetDecoder);
			},
			pointDecoder);
	});
var $author$project$DragCanvas$itemMouseDownAttribute = F3(
	function (config, toMsg, itemId) {
		return A2(
			$elm$html$Html$Events$custom,
			'mousedown',
			A2(
				$elm$json$Json$Decode$andThen,
				function (_v0) {
					return A4($author$project$DragCanvas$itemStartDecoder, config, toMsg, itemId, $author$project$DragCanvas$pointerDecoder);
				},
				$author$project$DragCanvas$leftButtonDecoder));
	});
var $author$project$DragCanvas$itemTouchStartAttribute = F3(
	function (config, toMsg, itemId) {
		return A2(
			$elm$html$Html$Events$custom,
			'touchstart',
			A4($author$project$DragCanvas$itemStartDecoder, config, toMsg, itemId, $author$project$DragCanvas$singleTouchDecoder));
	});
var $author$project$DragCanvas$viewItem = F4(
	function (config, toMsg, dragState, _v0) {
		var item = _v0.a;
		var content = _v0.b;
		var isDragging = function () {
			if (dragState.$ === 2) {
				var id = dragState.a;
				return _Utils_eq(id, item.a3);
			} else {
				return false;
			}
		}();
		return _Utils_Tuple2(
			item.a3,
			A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'position', 'absolute'),
						A2(
						$elm$html$Html$Attributes$style,
						'left',
						$elm$core$String$fromFloat(item.eu) + 'px'),
						A2(
						$elm$html$Html$Attributes$style,
						'top',
						$elm$core$String$fromFloat(item.ev) + 'px'),
						A2($elm$html$Html$Attributes$style, 'width', 'max-content'),
						A2(
						$elm$html$Html$Attributes$attribute,
						'data-dragging',
						isDragging ? 'true' : 'false'),
						A3($author$project$DragCanvas$itemMouseDownAttribute, config, toMsg, item.a3),
						A3($author$project$DragCanvas$itemTouchStartAttribute, config, toMsg, item.a3)
					]),
				_List_fromArray(
					[content])));
	});
var $author$project$DragCanvas$WheelZoom = F2(
	function (a, b) {
		return {$: 5, a: a, b: b};
	});
var $author$project$DragCanvas$noZoomFrom = function (depth) {
	return A2(
		$elm$json$Json$Decode$andThen,
		function (maybeNoZoom) {
			return (!_Utils_eq(maybeNoZoom, $elm$core$Maybe$Nothing)) ? $elm$json$Json$Decode$succeed(true) : ((depth <= 0) ? $elm$json$Json$Decode$succeed(false) : $elm$json$Json$Decode$oneOf(
				_List_fromArray(
					[
						A2(
						$elm$json$Json$Decode$field,
						'parentElement',
						$author$project$DragCanvas$noZoomFrom(depth - 1)),
						$elm$json$Json$Decode$succeed(false)
					])));
		},
		$elm$json$Json$Decode$maybe(
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['dataset', 'noZoom']),
				$elm$json$Json$Decode$string)));
};
var $author$project$DragCanvas$isNoZoomTargetDecoder = A2(
	$elm$json$Json$Decode$field,
	'target',
	$author$project$DragCanvas$noZoomFrom(6));
var $elm$json$Json$Decode$map4 = _Json_map4;
var $author$project$DragCanvas$toPixels = F2(
	function (mode, deltaY) {
		switch (mode) {
			case 1:
				return deltaY * 16;
			case 2:
				return deltaY * 100;
			default:
				return deltaY;
		}
	});
var $author$project$DragCanvas$wheelAttribute = function (toMsg) {
	return A2(
		$elm$html$Html$Events$custom,
		'wheel',
		A2(
			$elm$json$Json$Decode$andThen,
			function (isNoZoom) {
				return isNoZoom ? $elm$json$Json$Decode$succeed(
					{
						ad: toMsg($author$project$DragCanvas$Noop),
						af: false,
						ai: false
					}) : A5(
					$elm$json$Json$Decode$map4,
					F4(
						function (deltaY, mode, x, y) {
							return {
								ad: toMsg(
									A2(
										$author$project$DragCanvas$WheelZoom,
										A2($author$project$DragCanvas$toPixels, mode, deltaY),
										{eu: x, ev: y})),
								af: true,
								ai: false
							};
						}),
					A2($elm$json$Json$Decode$field, 'deltaY', $elm$json$Json$Decode$float),
					A2($elm$json$Json$Decode$field, 'deltaMode', $elm$json$Json$Decode$int),
					A2($elm$json$Json$Decode$field, 'clientX', $elm$json$Json$Decode$float),
					A2($elm$json$Json$Decode$field, 'clientY', $elm$json$Json$Decode$float));
			},
			$author$project$DragCanvas$isNoZoomTargetDecoder));
};
var $author$project$DragCanvas$view = F4(
	function (config, toMsg, items, _v0) {
		var data = _v0;
		return A2(
			$elm$html$Html$div,
			$elm$core$List$concat(
				_List_fromArray(
					[
						function () {
						var _v1 = config.aX;
						if (!_v1.$) {
							var canvasId = _v1.a;
							return _List_fromArray(
								[
									$elm$html$Html$Attributes$id(canvasId)
								]);
						} else {
							return _List_Nil;
						}
					}(),
						$elm$core$String$isEmpty(config.aD) ? _List_Nil : _List_fromArray(
						[
							$elm$html$Html$Attributes$class(config.aD)
						]),
						_List_fromArray(
						[
							A2(
							$elm$html$Html$Attributes$attribute,
							'data-canvas-state',
							$author$project$DragCanvas$canvasStateLabel(data.e)),
							A2($elm$html$Html$Attributes$style, 'position', 'relative'),
							A2($elm$html$Html$Attributes$style, 'overflow', 'hidden'),
							A2($elm$html$Html$Attributes$style, 'width', '100%'),
							A2($elm$html$Html$Attributes$style, 'height', '100%'),
							A2($elm$html$Html$Attributes$style, 'touch-action', 'none')
						]),
						config.ae ? _List_fromArray(
						[
							$author$project$DragCanvas$panMouseDownAttribute(toMsg),
							$author$project$DragCanvas$panTouchStartAttribute(toMsg)
						]) : _List_Nil,
						A2($author$project$DragCanvas$touchTrackingAttributes, toMsg, data.e),
						config.aV ? _List_fromArray(
						[
							$author$project$DragCanvas$wheelAttribute(toMsg)
						]) : _List_Nil
					])),
			_List_fromArray(
				[
					A3(
					$elm$html$Html$Keyed$node,
					'div',
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'position', 'absolute'),
							A2($elm$html$Html$Attributes$style, 'left', '0'),
							A2($elm$html$Html$Attributes$style, 'top', '0'),
							A2($elm$html$Html$Attributes$style, 'transform-origin', '0 0'),
							A2(
							$elm$html$Html$Attributes$style,
							'transform',
							$author$project$DragCanvas$transformValue(data)),
							A2($elm$html$Html$Attributes$style, 'will-change', 'transform')
						]),
					A2(
						$elm$core$List$map,
						A3($author$project$DragCanvas$viewItem, config, toMsg, data.e),
						items))
				]));
	});
var $author$project$View$Styles$boardEmptyHint = 'board-empty-hint';
var $author$project$View$BoardView$viewEmptyBoardHint = function (isEmpty) {
	return isEmpty ? A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class($author$project$View$Styles$boardEmptyHint)
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$p,
				_List_Nil,
				_List_fromArray(
					[
						$elm$html$Html$text('まだカードがありません。「＋ カード作成」から追加してください。')
					])),
				A2(
				$elm$html$Html$p,
				_List_Nil,
				_List_fromArray(
					[
						$elm$html$Html$text('カードを別のカードへドラッグ＆ドロップすると関連付けできます。')
					]))
			])) : $elm$html$Html$text('');
};
var $author$project$Types$ZoomInClicked = {$: 35};
var $author$project$Types$ZoomOutClicked = {$: 36};
var $author$project$Types$ZoomResetClicked = {$: 37};
var $author$project$View$Styles$boardControls = 'board-controls';
var $author$project$View$BoardView$viewZoomControls = function (scale) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class($author$project$View$Styles$boardControls)
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$button,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$type_('button'),
						$elm$html$Html$Events$onClick(
						$author$project$Types$WorkspaceEvent($author$project$Types$ZoomOutClicked))
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('－')
					])),
				A2(
				$elm$html$Html$button,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$type_('button'),
						$elm$html$Html$Events$onClick(
						$author$project$Types$WorkspaceEvent($author$project$Types$ZoomResetClicked))
					]),
				_List_fromArray(
					[
						$elm$html$Html$text(
						$elm$core$String$fromInt(
							$elm$core$Basics$round(scale * 100)) + '%')
					])),
				A2(
				$elm$html$Html$button,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$type_('button'),
						$elm$html$Html$Events$onClick(
						$author$project$Types$WorkspaceEvent($author$project$Types$ZoomInClicked))
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('＋')
					]))
			]));
};
var $author$project$View$BoardView$viewBoard = function (model) {
	var ws = $author$project$Types$activeWorkspaceData(model);
	var viewport = $author$project$DragCanvas$getViewport(model.R);
	var titleFontPx = ((viewport.p < 0.6) && (viewport.p > 0)) ? ($elm$core$Basics$round((14.0 * (0.6 / viewport.p)) * 10) / 10) : 14.0;
	var isTitleOnly = viewport.p <= 0.6;
	var activeCardList = $author$project$Data$WorkspaceData$activeCards(ws);
	var items = A2(
		$elm$core$List$map,
		A8($author$project$View$BoardView$toCanvasItem, model.cv, model.d9, model.dU, ws.cA, ws.b9, ws.b1, isTitleOnly, titleFontPx),
		activeCardList);
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class($author$project$View$Styles$boardContainer)
			]),
		_List_fromArray(
			[
				A4($author$project$DragCanvas$view, $author$project$View$BoardView$canvasConfig, $author$project$Types$CanvasEvent, items, model.R),
				$author$project$View$BoardView$viewEmptyBoardHint(
				$elm$core$List$isEmpty(activeCardList)),
				$author$project$View$BoardView$viewZoomControls(viewport.p)
			]));
};
var $author$project$Types$CreateCardClicked = {$: 0};
var $author$project$Types$MobileDragCancelled = {$: 24};
var $author$project$View$MobileListView$singleTouchYDecoder = A2(
	$elm$json$Json$Decode$at,
	_List_fromArray(
		['touches', '0', 'clientY']),
	$elm$json$Json$Decode$float);
var $author$project$View$MobileListView$dragContainerAttributes = function (dragState) {
	if (dragState.$ === 1) {
		return _List_Nil;
	} else {
		return _List_fromArray(
			[
				A2(
				$elm$html$Html$Events$preventDefaultOn,
				'touchmove',
				A2(
					$elm$json$Json$Decode$map,
					function (y) {
						return _Utils_Tuple2(
							$author$project$Types$CardEvent(
								$author$project$Types$MobileDragMoved(y)),
							true);
					},
					$author$project$View$MobileListView$singleTouchYDecoder)),
				A2(
				$elm$html$Html$Events$on,
				'touchend',
				$elm$json$Json$Decode$succeed(
					$author$project$Types$CardEvent($author$project$Types$MobileDragEnded))),
				A2(
				$elm$html$Html$Events$on,
				'touchcancel',
				$elm$json$Json$Decode$succeed(
					$author$project$Types$CardEvent($author$project$Types$MobileDragCancelled)))
			]);
	}
};
var $author$project$View$Styles$mobileFab = 'mobile-fab btn--primary';
var $author$project$View$Styles$mobileListScroll = 'mobile-list-scroll';
var $author$project$View$Styles$mobileList = 'mobile-list';
var $elm$html$Html$Keyed$ul = $elm$html$Html$Keyed$node('ul');
var $author$project$View$MobileListView$resolveActiveLinked = F2(
	function (allCardMap, targetId) {
		return A2(
			$elm$core$Maybe$andThen,
			function (item) {
				return item.c2.dq ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
					_Utils_Tuple2(item.a3, item.c2.ek));
			},
			A2($elm$core$Dict$get, targetId, allCardMap));
	});
var $author$project$View$MobileListView$boolAttr = function (b) {
	return b ? 'true' : 'false';
};
var $elm$html$Html$li = _VirtualDom_node('li');
var $author$project$View$Styles$mobileCardWrapper = 'mobile-card-wrapper';
var $author$project$View$MobileListView$viewMobileCardBody = function (content) {
	return (content.dr || $elm$core$String$isEmpty(content.cX)) ? $elm$html$Html$text('') : A2(
		$elm$html$Html$p,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class($author$project$View$Styles$cardBody)
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(content.cX)
			]));
};
var $author$project$View$MobileListView$viewMobileCardFooter = function (cardId) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class($author$project$View$Styles$cardFooter)
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$button,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$type_('button'),
						$elm$html$Html$Attributes$class($author$project$View$Styles$cardIconBtn),
						$elm$html$Html$Events$onClick(
						$author$project$Types$OpenEditorClicked(cardId))
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('編集')
					])),
				A2(
				$elm$html$Html$button,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$type_('button'),
						$elm$html$Html$Attributes$class($author$project$View$Styles$cardIconBtn),
						$elm$html$Html$Events$onClick(
						$author$project$Types$DuplicateCardClicked(cardId))
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('複製')
					])),
				A2(
				$elm$html$Html$button,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$type_('button'),
						$elm$html$Html$Attributes$class($author$project$View$Styles$cardIconBtn),
						$elm$html$Html$Events$onClick(
						$author$project$Types$ArchiveCardClicked(cardId))
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('アーカイブ')
					]))
			]));
};
var $author$project$Types$MobileDragStarted = F2(
	function (a, b) {
		return {$: 21, a: a, b: b};
	});
var $author$project$View$MobileListView$dragHandleMouseDown = function (cardId) {
	return A2(
		$elm$html$Html$Events$custom,
		'mousedown',
		A2(
			$elm$json$Json$Decode$map,
			function (y) {
				return {
					ad: A2($author$project$Types$MobileDragStarted, cardId, y),
					af: true,
					ai: true
				};
			},
			A2($elm$json$Json$Decode$field, 'clientY', $elm$json$Json$Decode$float)));
};
var $author$project$View$MobileListView$dragHandleTouchStart = function (cardId) {
	return A2(
		$elm$html$Html$Events$custom,
		'touchstart',
		A2(
			$elm$json$Json$Decode$map,
			function (y) {
				return {
					ad: A2($author$project$Types$MobileDragStarted, cardId, y),
					af: true,
					ai: true
				};
			},
			$author$project$View$MobileListView$singleTouchYDecoder));
};
var $author$project$View$Styles$mobileDragHandle = 'mobile-card__drag-handle';
var $author$project$View$MobileListView$viewMobileCardHeader = F3(
	function (cardId, content, statusOptions) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class($author$project$View$Styles$cardHeader)
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class($author$project$View$Styles$mobileDragHandle),
							$author$project$View$MobileListView$dragHandleMouseDown(cardId),
							$author$project$View$MobileListView$dragHandleTouchStart(cardId)
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('☰')
						])),
					A2(
					$elm$html$Html$h3,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class($author$project$View$Styles$cardTitle)
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(content.ek)
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class($author$project$View$Styles$cardHeaderActions)
						]),
					_List_fromArray(
						[
							A3($author$project$View$BoardView$viewStatusSelect, cardId, content.ec, statusOptions),
							A2(
							$elm$html$Html$button,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$type_('button'),
									$elm$html$Html$Attributes$class($author$project$View$Styles$cardIconBtn),
									$elm$html$Html$Events$onClick(
									$author$project$Types$ToggleCollapseClicked(cardId))
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(
									content.dr ? '▼' : '▲')
								]))
						]))
				]));
	});
var $author$project$View$MobileListView$viewMobileCardItem = F8(
	function (cardId, content, colorName, statusOptions, isSelected, isDragging, _v0, linkedPairs) {
		var dropZoneAttr = _v0.a;
		var isLinkHighlighted = _v0.b;
		return A2(
			$elm$html$Html$li,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$id('mobile-card-' + cardId),
					$elm$html$Html$Attributes$class($author$project$View$Styles$mobileCardWrapper),
					A2(
					$elm$html$Html$Attributes$attribute,
					'data-dragging',
					$author$project$View$MobileListView$boolAttr(isDragging)),
					A2($elm$html$Html$Attributes$attribute, 'data-drop-zone', dropZoneAttr),
					A2(
					$elm$html$Html$Attributes$attribute,
					'data-link-highlight',
					$author$project$View$MobileListView$boolAttr(isLinkHighlighted))
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							content.dr ? $author$project$View$Styles$cardBoxCollapsed : $author$project$View$Styles$cardBox),
							A2($elm$html$Html$Attributes$attribute, 'data-status-color', colorName),
							A2(
							$elm$html$Html$Attributes$attribute,
							'data-selected',
							$author$project$View$MobileListView$boolAttr(isSelected))
						]),
					_List_fromArray(
						[
							A3($author$project$View$MobileListView$viewMobileCardHeader, cardId, content, statusOptions),
							$author$project$View$MobileListView$viewMobileCardBody(content),
							A2($author$project$View$BoardView$viewCardLinks, cardId, linkedPairs),
							$author$project$View$MobileListView$viewMobileCardFooter(cardId)
						]))
				]));
	});
var $author$project$View$MobileListView$viewKeyedMobileCard = F6(
	function (dragState, selectedId, statusOptions, allCardMap, links, noteCard) {
		var linkedPairs = A2(
			$elm$core$List$filterMap,
			$author$project$View$MobileListView$resolveActiveLinked(allCardMap),
			A2($author$project$Data$NoteCard$linkedCardIds, noteCard.a3, links));
		var isSelected = _Utils_eq(
			selectedId,
			$elm$core$Maybe$Just(noteCard.a3));
		var isLinkHighlighted = function () {
			if (!dragState.$) {
				var st = dragState.a;
				var _v3 = st.da;
				if ((!_v3.$) && (_v3.a.$ === 2)) {
					var tid = _v3.a.a;
					return _Utils_eq(noteCard.a3, st.bI) || _Utils_eq(noteCard.a3, tid);
				} else {
					return false;
				}
			} else {
				return false;
			}
		}();
		var isDragging = function () {
			if (!dragState.$) {
				var st = dragState.a;
				return _Utils_eq(st.bI, noteCard.a3);
			} else {
				return false;
			}
		}();
		var dropZoneAttr = function () {
			var _v0 = A2(
				$elm$core$Maybe$andThen,
				function ($) {
					return $.da;
				},
				dragState);
			if (!_v0.$) {
				switch (_v0.a.$) {
					case 0:
						var tid = _v0.a.a;
						return _Utils_eq(tid, noteCard.a3) ? 'before' : 'none';
					case 1:
						var tid = _v0.a.a;
						return _Utils_eq(tid, noteCard.a3) ? 'after' : 'none';
					default:
						var tid = _v0.a.a;
						return _Utils_eq(tid, noteCard.a3) ? 'link' : 'none';
				}
			} else {
				return 'none';
			}
		}();
		var colorName = A2($author$project$Data$NoteCard$findStatusColor, noteCard.c2.ec, statusOptions);
		return _Utils_Tuple2(
			noteCard.a3,
			A2(
				$elm$html$Html$map,
				$author$project$Types$CardEvent,
				A9(
					$elm$html$Html$Lazy$lazy8,
					$author$project$View$MobileListView$viewMobileCardItem,
					noteCard.a3,
					noteCard.c2,
					colorName,
					statusOptions,
					isSelected,
					isDragging,
					_Utils_Tuple2(dropZoneAttr, isLinkHighlighted),
					linkedPairs)));
	});
var $author$project$View$MobileListView$viewMobileCardsList = F6(
	function (dragState, selectedId, statusOptions, allCardMap, links, cardList) {
		return $elm$core$List$isEmpty(cardList) ? A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class($author$project$View$Styles$emptyState)
				]),
			_List_fromArray(
				[
					$elm$html$Html$text('表示できるカードがありません')
				])) : A2(
			$elm$html$Html$Keyed$ul,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class($author$project$View$Styles$mobileList)
				]),
			A2(
				$elm$core$List$map,
				A5($author$project$View$MobileListView$viewKeyedMobileCard, dragState, selectedId, statusOptions, allCardMap, links),
				cardList));
	});
var $author$project$View$MobileListView$viewMobileList = function (model) {
	var ws = $author$project$Types$activeWorkspaceData(model);
	var filteredCards = A2(
		$elm$core$List$filter,
		$author$project$Data$NoteCard$matchesQuery(model.cv),
		A3($author$project$Data$NoteCard$sortWithAdjacentLinks, ws.bA, ws.b1, ws.b9));
	return A2(
		$elm$html$Html$div,
		$elm$core$List$concat(
			_List_fromArray(
				[
					_List_fromArray(
					[
						$elm$html$Html$Attributes$id('mobile-list-scroll'),
						$elm$html$Html$Attributes$class($author$project$View$Styles$mobileListScroll)
					]),
					$author$project$View$MobileListView$dragContainerAttributes(model.b2)
				])),
		_List_fromArray(
			[
				A6($author$project$View$MobileListView$viewMobileCardsList, model.b2, model.d9, ws.cA, ws.b9, ws.b1, filteredCards),
				A2(
				$elm$html$Html$button,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$type_('button'),
						$elm$html$Html$Attributes$class($author$project$View$Styles$mobileFab),
						$elm$html$Html$Events$onClick(
						$author$project$Types$CardEvent($author$project$Types$CreateCardClicked))
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('＋ カード作成')
					]))
			]));
};
var $elm$html$Html$aside = _VirtualDom_node('aside');
var $author$project$View$Styles$sideCardList = 'side-card-list';
var $author$project$View$Styles$sideCardListCollapsed = 'side-card-list side-card-list--collapsed';
var $author$project$View$Styles$sideCardListScroll = 'side-card-list__scroll';
var $author$project$View$Styles$sideCardListUl = 'side-card-list__ul';
var $elm$virtual_dom$VirtualDom$lazy4 = _VirtualDom_lazy4;
var $elm$html$Html$Lazy$lazy4 = $elm$virtual_dom$VirtualDom$lazy4;
var $author$project$View$CardListView$boolAttr = function (b) {
	return b ? 'true' : 'false';
};
var $author$project$View$Styles$sideCardListBtn = 'side-card-list__btn';
var $author$project$View$Styles$sideCardListItem = 'side-card-list__item';
var $elm$html$Html$Attributes$title = $elm$html$Html$Attributes$stringProperty('title');
var $author$project$View$CardListView$viewTitleRow = F4(
	function (cardId, cardTitleText, colorName, isSelected) {
		return A2(
			$elm$html$Html$li,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class($author$project$View$Styles$sideCardListItem)
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$button,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$type_('button'),
							$elm$html$Html$Attributes$class($author$project$View$Styles$sideCardListBtn),
							A2($elm$html$Html$Attributes$attribute, 'data-status-color', colorName),
							A2(
							$elm$html$Html$Attributes$attribute,
							'data-selected',
							$author$project$View$CardListView$boolAttr(isSelected)),
							$elm$html$Html$Attributes$title(cardTitleText),
							$elm$html$Html$Events$onClick(
							$author$project$Types$JumpToCardClicked(cardId))
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(cardTitleText)
						]))
				]));
	});
var $author$project$View$CardListView$viewKeyedTitleRow = F3(
	function (selectedId, statusOptions, noteCard) {
		var isSelected = _Utils_eq(
			selectedId,
			$elm$core$Maybe$Just(noteCard.a3));
		var colorName = A2($author$project$Data$NoteCard$findStatusColor, noteCard.c2.ec, statusOptions);
		return _Utils_Tuple2(
			noteCard.a3,
			A2(
				$elm$html$Html$map,
				$author$project$Types$CardEvent,
				A5($elm$html$Html$Lazy$lazy4, $author$project$View$CardListView$viewTitleRow, noteCard.a3, noteCard.c2.ek, colorName, isSelected)));
	});
var $author$project$View$CardListView$viewSideListBody = F4(
	function (isCollapsed, selectedId, statusOptions, cardList) {
		return isCollapsed ? $elm$html$Html$text('') : ($elm$core$List$isEmpty(cardList) ? A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class($author$project$View$Styles$emptyState)
				]),
			_List_fromArray(
				[
					$elm$html$Html$text('カードなし')
				])) : A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class($author$project$View$Styles$sideCardListScroll)
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$Keyed$ul,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class($author$project$View$Styles$sideCardListUl)
						]),
					A2(
						$elm$core$List$map,
						A2($author$project$View$CardListView$viewKeyedTitleRow, selectedId, statusOptions),
						cardList))
				])));
	});
var $author$project$Types$ToggleSideListCollapsed = {$: 11};
var $author$project$View$Styles$sideCardListHeader = 'side-card-list__header';
var $author$project$View$Styles$sideCardListHeading = 'side-card-list__heading';
var $author$project$View$CardListView$viewSideListTitle = F2(
	function (isCollapsed, count) {
		return isCollapsed ? $elm$html$Html$text('') : A2(
			$elm$html$Html$h3,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class($author$project$View$Styles$sideCardListHeading)
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(
					'カード一覧 (' + ($elm$core$String$fromInt(count) + ')'))
				]));
	});
var $author$project$View$CardListView$viewSideListHeader = F2(
	function (isCollapsed, count) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class($author$project$View$Styles$sideCardListHeader)
				]),
			_List_fromArray(
				[
					A2($author$project$View$CardListView$viewSideListTitle, isCollapsed, count),
					A2(
					$elm$html$Html$button,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$type_('button'),
							$elm$html$Html$Attributes$class($author$project$View$Styles$cardIconBtn),
							$elm$html$Html$Attributes$title(
							isCollapsed ? 'カード一覧を展開' : 'カード一覧を折り畳む'),
							$elm$html$Html$Events$onClick(
							$author$project$Types$WorkspaceEvent($author$project$Types$ToggleSideListCollapsed))
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(
							isCollapsed ? '◀' : '▶')
						]))
				]));
	});
var $author$project$View$CardListView$viewSideCardList = function (model) {
	var ws = $author$project$Types$activeWorkspaceData(model);
	var filteredCards = A2(
		$elm$core$List$filter,
		$author$project$Data$NoteCard$matchesQuery(model.cv),
		A3($author$project$Data$NoteCard$sortWithAdjacentLinks, ws.bA, ws.b1, ws.b9));
	return A2(
		$elm$html$Html$aside,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class(
				model.dt ? $author$project$View$Styles$sideCardListCollapsed : $author$project$View$Styles$sideCardList)
			]),
		_List_fromArray(
			[
				A2(
				$author$project$View$CardListView$viewSideListHeader,
				model.dt,
				$elm$core$List$length(filteredCards)),
				A4($author$project$View$CardListView$viewSideListBody, model.dt, model.d9, ws.cA, filteredCards)
			]));
};
var $author$project$View$Styles$workspaceContent = 'workspace-content';
var $author$project$Main$viewWorkspaceContent = F2(
	function (mobile, model) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class($author$project$View$Styles$workspaceContent)
				]),
			mobile ? _List_fromArray(
				[
					$author$project$View$MobileListView$viewMobileList(model)
				]) : _List_fromArray(
				[
					$author$project$View$BoardView$viewBoard(model),
					$author$project$View$CardListView$viewSideCardList(model)
				]));
	});
var $author$project$Types$OpenMarkdownExportDialog = {$: 27};
var $elm$html$Html$h1 = _VirtualDom_node('h1');
var $elm$html$Html$header = _VirtualDom_node('header');
var $author$project$Types$OpenArchiveDialog = {$: 18};
var $author$project$Main$viewArchiveButton = function (count) {
	return A2(
		$elm$html$Html$button,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$type_('button'),
				$elm$html$Html$Events$onClick(
				$author$project$Types$WorkspaceEvent($author$project$Types$OpenArchiveDialog))
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(
				'アーカイブ (' + ($elm$core$String$fromInt(count) + ')'))
			]));
};
var $author$project$Types$ToggleBgPicker = {$: 12};
var $author$project$View$Styles$bgPickerWrapper = 'bg-picker-wrapper';
var $author$project$Data$WorkspaceData$allPatterns = _List_fromArray(
	[0, 1, 2]);
var $author$project$Data$WorkspaceData$allTones = _List_fromArray(
	[0, 1, 2, 3, 4, 5]);
var $author$project$View$Styles$bgPickerLabel = 'bg-picker-popover__label';
var $author$project$View$Styles$bgPickerOptions = 'bg-picker-popover__options';
var $author$project$View$Styles$bgPickerPopover = 'bg-picker-popover';
var $author$project$Types$SetBackgroundPattern = function (a) {
	return {$: 14, a: a};
};
var $author$project$View$Styles$bgPickerOptionActive = 'bg-picker-option--active';
var $author$project$Data$WorkspaceData$patternLabel = function (pattern) {
	switch (pattern) {
		case 0:
			return '無地';
		case 1:
			return 'ドット';
		default:
			return 'グリッド';
	}
};
var $author$project$Main$viewPatternOption = F2(
	function (current, opt) {
		return A2(
			$elm$html$Html$button,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$type_('button'),
					$elm$html$Html$Attributes$class(
					_Utils_eq(current, opt) ? $author$project$View$Styles$bgPickerOptionActive : ''),
					$elm$html$Html$Events$onClick(
					$author$project$Types$WorkspaceEvent(
						$author$project$Types$SetBackgroundPattern(opt)))
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(
					$author$project$Data$WorkspaceData$patternLabel(opt))
				]));
	});
var $author$project$Types$SetBackgroundTone = function (a) {
	return {$: 13, a: a};
};
var $author$project$Data$WorkspaceData$toneLabel = function (tone) {
	switch (tone) {
		case 0:
			return 'デフォルト';
		case 1:
			return 'ウォーム';
		case 2:
			return 'クール';
		case 3:
			return 'ミント';
		case 4:
			return 'ラベンダー';
		default:
			return 'サンド';
	}
};
var $author$project$Main$viewToneOption = F2(
	function (current, opt) {
		return A2(
			$elm$html$Html$button,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$type_('button'),
					$elm$html$Html$Attributes$class(
					_Utils_eq(current, opt) ? $author$project$View$Styles$bgPickerOptionActive : ''),
					$elm$html$Html$Events$onClick(
					$author$project$Types$WorkspaceEvent(
						$author$project$Types$SetBackgroundTone(opt)))
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(
					$author$project$Data$WorkspaceData$toneLabel(opt))
				]));
	});
var $author$project$Main$viewBgPickerPopover = F2(
	function (bg, isOpen) {
		return (!isOpen) ? $elm$html$Html$text('') : A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class($author$project$View$Styles$bgPickerPopover)
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class($author$project$View$Styles$bgPickerLabel)
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('色調トーン')
								])),
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class($author$project$View$Styles$bgPickerOptions)
								]),
							A2(
								$elm$core$List$map,
								$author$project$Main$viewToneOption(bg.el),
								$author$project$Data$WorkspaceData$allTones))
						])),
					A2(
					$elm$html$Html$div,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class($author$project$View$Styles$bgPickerLabel)
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('模様パターン')
								])),
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class($author$project$View$Styles$bgPickerOptions)
								]),
							A2(
								$elm$core$List$map,
								$author$project$Main$viewPatternOption(bg.dT),
								$author$project$Data$WorkspaceData$allPatterns))
						]))
				]));
	});
var $author$project$Main$viewBgPickerButton = F2(
	function (bg, isOpen) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class($author$project$View$Styles$bgPickerWrapper)
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$button,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$type_('button'),
							$elm$html$Html$Events$onClick(
							$author$project$Types$WorkspaceEvent($author$project$Types$ToggleBgPicker))
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('🎨 背景')
						])),
					A2($author$project$Main$viewBgPickerPopover, bg, isOpen)
				]));
	});
var $author$project$Main$viewCreateCardHeaderButton = function (mobile) {
	return mobile ? $elm$html$Html$text('') : A2(
		$elm$html$Html$button,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$type_('button'),
				$elm$html$Html$Attributes$class($author$project$View$Styles$btnPrimary),
				$elm$html$Html$Events$onClick(
				$author$project$Types$CardEvent($author$project$Types$CreateCardClicked))
			]),
		_List_fromArray(
			[
				$elm$html$Html$text('＋ カード作成')
			]));
};
var $author$project$Types$ToggleDrawer = {$: 16};
var $author$project$Main$viewMenuButton = F2(
	function (mobile, highlightBlink) {
		return mobile ? A2(
			$elm$html$Html$button,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$type_('button'),
					A2(
					$elm$html$Html$Attributes$attribute,
					'data-highlight-blink',
					highlightBlink ? 'true' : 'false'),
					$elm$html$Html$Events$onClick(
					$author$project$Types$WorkspaceEvent($author$project$Types$ToggleDrawer))
				]),
			_List_fromArray(
				[
					$elm$html$Html$text('☰')
				])) : $elm$html$Html$text('');
	});
var $author$project$Types$SearchQueryChanged = function (a) {
	return {$: 15, a: a};
};
var $elm$html$Html$Attributes$placeholder = $elm$html$Html$Attributes$stringProperty('placeholder');
var $author$project$View$Styles$workspaceHeaderSearch = 'workspace-header__search';
var $author$project$Main$viewSearchInput = function (query) {
	return A2(
		$elm$html$Html$input,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$type_('search'),
				$elm$html$Html$Attributes$class($author$project$View$Styles$workspaceHeaderSearch),
				$elm$html$Html$Attributes$spellcheck(false),
				$elm$html$Html$Attributes$placeholder('カード検索（スペース区切りAND）'),
				$elm$html$Html$Attributes$value(query),
				$elm$html$Html$Events$onInput(
				A2($elm$core$Basics$composeL, $author$project$Types$WorkspaceEvent, $author$project$Types$SearchQueryChanged))
			]),
		_List_Nil);
};
var $author$project$Types$OpenStatusManagerDialog = {$: 19};
var $author$project$Main$viewStatusManagerButton = function (wsId) {
	if (!wsId.$) {
		return $elm$html$Html$text('');
	} else {
		return A2(
			$elm$html$Html$button,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$type_('button'),
					$elm$html$Html$Events$onClick(
					$author$project$Types$WorkspaceEvent($author$project$Types$OpenStatusManagerDialog))
				]),
			_List_fromArray(
				[
					$elm$html$Html$text('🏷 状態設定')
				]));
	}
};
var $author$project$Main$viewUndoButton = function (isDisabled) {
	return A2(
		$elm$html$Html$button,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$type_('button'),
				$elm$html$Html$Attributes$disabled(isDisabled),
				$elm$html$Html$Events$onClick(
				$author$project$Types$WorkspaceEvent($author$project$Types$UndoActionClicked))
			]),
		_List_fromArray(
			[
				$elm$html$Html$text('↶ 元に戻す')
			]));
};
var $author$project$View$Styles$workspaceHeader = 'workspace-header';
var $author$project$View$Styles$workspaceHeaderLeft = 'workspace-header__left';
var $author$project$View$Styles$workspaceHeaderRight = 'workspace-header__right';
var $author$project$View$Styles$workspaceHeaderTitle = 'workspace-header__title';
var $author$project$Main$viewWorkspaceHeader = F3(
	function (mobile, model, ws) {
		return A2(
			$elm$html$Html$header,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class($author$project$View$Styles$workspaceHeader)
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class($author$project$View$Styles$workspaceHeaderLeft)
						]),
					_List_fromArray(
						[
							A2(
							$author$project$Main$viewMenuButton,
							mobile,
							$elm$core$List$isEmpty(model.aC.aM)),
							A2(
							$elm$html$Html$h1,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class($author$project$View$Styles$workspaceHeaderTitle)
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(ws.b4)
								])),
							$author$project$Main$viewCreateCardHeaderButton(mobile),
							$author$project$Main$viewUndoButton(
							$elm$core$List$isEmpty(model.cK))
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class($author$project$View$Styles$workspaceHeaderRight)
						]),
					_List_fromArray(
						[
							$author$project$Main$viewSearchInput(model.cv),
							A2($author$project$Main$viewBgPickerButton, ws.bw, model.bX),
							$author$project$Main$viewStatusManagerButton(model.aC.aB),
							$author$project$Main$viewArchiveButton(
							$elm$core$List$length(
								$author$project$Data$WorkspaceData$archivedCards(ws))),
							A2(
							$elm$html$Html$button,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$type_('button'),
									$elm$html$Html$Events$onClick(
									$author$project$Types$WorkspaceEvent($author$project$Types$OpenMarkdownExportDialog))
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Markdown出力')
								]))
						]))
				]));
	});
var $author$project$Main$viewMainArea = F2(
	function (mobile, model) {
		var ws = $author$project$Types$activeWorkspaceData(model);
		return A2(
			$elm$html$Html$main_,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class($author$project$View$Styles$mainArea),
					A2(
					$elm$html$Html$Attributes$attribute,
					'data-bg-tone',
					$author$project$Data$WorkspaceData$toneToString(ws.bw.el)),
					A2(
					$elm$html$Html$Attributes$attribute,
					'data-bg-pattern',
					$author$project$Data$WorkspaceData$patternToString(ws.bw.dT))
				]),
			_List_fromArray(
				[
					A3($author$project$Main$viewWorkspaceHeader, mobile, model, ws),
					A2($author$project$Main$viewWorkspaceContent, mobile, model)
				]));
	});
var $author$project$View$Styles$sidebar = 'sidebar';
var $elm$html$Html$h2 = _VirtualDom_node('h2');
var $author$project$View$Styles$sidebarBrand = 'sidebar__brand';
var $author$project$View$Styles$sidebarBrandTitle = 'sidebar__brand-title';
var $author$project$Types$CloseDrawer = {$: 17};
var $author$project$View$SidebarView$viewCloseDrawerButton = function (isMobile) {
	return isMobile ? A2(
		$elm$html$Html$button,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$type_('button'),
				$elm$html$Html$Attributes$class($author$project$View$Styles$btnGhost),
				$elm$html$Html$Events$onClick(
				$author$project$Types$WorkspaceEvent($author$project$Types$CloseDrawer))
			]),
		_List_fromArray(
			[
				$elm$html$Html$text('✕')
			])) : $elm$html$Html$text('');
};
var $author$project$View$SidebarView$viewBrand = function (isMobile) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class($author$project$View$Styles$sidebarBrand)
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$h2,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class($author$project$View$Styles$sidebarBrandTitle)
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('Switchboard')
					])),
				$author$project$View$SidebarView$viewCloseDrawerButton(isMobile)
			]));
};
var $author$project$Types$ExportBackupClicked = {$: 3};
var $author$project$Types$ImportBackupRequested = {$: 4};
var $author$project$Types$OpenModManagerDialog = {$: 0};
var $author$project$Types$OpenScheduleManager = {$: 0};
var $author$project$View$Styles$sidebarFooter = 'sidebar__footer';
var $author$project$View$Styles$sidebarSaveStatus = 'sidebar__save-status';
var $author$project$View$SidebarView$viewFooter = function (hasUnsaved) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class($author$project$View$Styles$sidebarFooter)
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$button,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$type_('button'),
						$elm$html$Html$Events$onClick(
						$author$project$Types$ScheduleEvent($author$project$Types$OpenScheduleManager))
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('⏰ スケジュール設定')
					])),
				A2(
				$elm$html$Html$button,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$type_('button'),
						$elm$html$Html$Events$onClick(
						$author$project$Types$ModEvent($author$project$Types$OpenModManagerDialog))
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('🧩 スタイルMod')
					])),
				A2(
				$elm$html$Html$button,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$type_('button'),
						$elm$html$Html$Events$onClick(
						$author$project$Types$PersistenceEvent($author$project$Types$ExportBackupClicked))
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('⬇ バックアップ書き出し')
					])),
				A2(
				$elm$html$Html$button,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$type_('button'),
						$elm$html$Html$Events$onClick(
						$author$project$Types$PersistenceEvent($author$project$Types$ImportBackupRequested))
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('⬆ バックアップ復元')
					])),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class($author$project$View$Styles$sidebarSaveStatus)
					]),
				_List_fromArray(
					[
						$elm$html$Html$text(
						hasUnsaved ? '変更あり（まもなく自動保存）' : 'すべて保存済み')
					]))
			]));
};
var $author$project$Types$SwitchWorkspace = function (a) {
	return {$: 0, a: a};
};
var $author$project$View$SidebarView$boolAttr = function (b) {
	return b ? 'true' : 'false';
};
var $author$project$View$Styles$sidebarItem = 'sidebar__item';
var $author$project$View$Styles$sidebarItemButton = 'sidebar__item-button';
var $author$project$View$Styles$sidebarSection = 'sidebar__section';
var $author$project$View$Styles$sidebarSectionHeader = 'sidebar__section-header';
var $author$project$View$SidebarView$viewMemoSection = F2(
	function (activeWs, memo) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class($author$project$View$Styles$sidebarSection)
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class($author$project$View$Styles$sidebarSectionHeader)
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('共通領域')
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class($author$project$View$Styles$sidebarItem),
							A2(
							$elm$html$Html$Attributes$attribute,
							'data-active',
							$author$project$View$SidebarView$boolAttr(
								_Utils_eq(activeWs, $author$project$Data$WorkspaceData$MemoWorkspace)))
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$button,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$type_('button'),
									$elm$html$Html$Attributes$class($author$project$View$Styles$sidebarItemButton),
									$elm$html$Html$Events$onClick(
									$author$project$Types$WorkspaceEvent(
										$author$project$Types$SwitchWorkspace($author$project$Data$WorkspaceData$MemoWorkspace)))
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(memo.b4)
								]))
						]))
				]));
	});
var $author$project$View$Styles$sidebarList = 'sidebar__list';
var $author$project$Types$CreateProjectSubmitted = {$: 2};
var $author$project$Types$NewProjectNameChanged = function (a) {
	return {$: 1, a: a};
};
var $elm$html$Html$form = _VirtualDom_node('form');
var $elm$html$Html$Events$alwaysPreventDefault = function (msg) {
	return _Utils_Tuple2(msg, true);
};
var $elm$html$Html$Events$onSubmit = function (msg) {
	return A2(
		$elm$html$Html$Events$preventDefaultOn,
		'submit',
		A2(
			$elm$json$Json$Decode$map,
			$elm$html$Html$Events$alwaysPreventDefault,
			$elm$json$Json$Decode$succeed(msg)));
};
var $author$project$View$Styles$sidebarAddProjectForm = 'sidebar__add-project-form';
var $author$project$View$Styles$sidebarAddProjectInput = 'sidebar__add-project-input';
var $author$project$View$SidebarView$viewAddProjectForm = F2(
	function (highlightBlink, draftName) {
		return A2(
			$elm$html$Html$form,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class($author$project$View$Styles$sidebarAddProjectForm),
					$elm$html$Html$Events$onSubmit(
					$author$project$Types$WorkspaceEvent($author$project$Types$CreateProjectSubmitted))
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$input,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$type_('text'),
							$elm$html$Html$Attributes$class($author$project$View$Styles$sidebarAddProjectInput),
							$elm$html$Html$Attributes$spellcheck(false),
							$elm$html$Html$Attributes$placeholder('新規プロジェクト名'),
							$elm$html$Html$Attributes$value(draftName),
							$elm$html$Html$Events$onInput(
							A2($elm$core$Basics$composeL, $author$project$Types$WorkspaceEvent, $author$project$Types$NewProjectNameChanged))
						]),
					_List_Nil),
					A2(
					$elm$html$Html$button,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$type_('submit'),
							$elm$html$Html$Attributes$class($author$project$View$Styles$btnPrimary),
							A2(
							$elm$html$Html$Attributes$attribute,
							'data-highlight-blink',
							$author$project$View$SidebarView$boolAttr(highlightBlink))
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('＋追加')
						]))
				]));
	});
var $author$project$Types$RequestDeleteProject = function (a) {
	return {$: 7, a: a};
};
var $author$project$Types$StartRenameProject = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $author$project$View$Styles$sidebarScheduleBadge = 'sidebar__schedule-badge';
var $author$project$View$SidebarView$viewScheduleBadge = function (isScheduled) {
	return isScheduled ? A2(
		$elm$html$Html$span,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class($author$project$View$Styles$sidebarScheduleBadge)
			]),
		_List_fromArray(
			[
				$elm$html$Html$text('予定中')
			])) : $elm$html$Html$text('');
};
var $author$project$View$SidebarView$viewNormalProjectItem = F4(
	function (pid, name, isActive, isScheduled) {
		return A2(
			$elm$html$Html$li,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class($author$project$View$Styles$sidebarItem),
					A2(
					$elm$html$Html$Attributes$attribute,
					'data-active',
					$author$project$View$SidebarView$boolAttr(isActive)),
					A2(
					$elm$html$Html$Attributes$attribute,
					'data-scheduled',
					isScheduled ? 'active' : 'none')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$button,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$type_('button'),
							$elm$html$Html$Attributes$class($author$project$View$Styles$sidebarItemButton),
							$elm$html$Html$Events$onClick(
							$author$project$Types$WorkspaceEvent(
								$author$project$Types$SwitchWorkspace(
									$author$project$Data$WorkspaceData$ProjectId(pid))))
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(name)
						])),
					$author$project$View$SidebarView$viewScheduleBadge(isScheduled),
					A2(
					$elm$html$Html$button,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$type_('button'),
							$elm$html$Html$Attributes$class($author$project$View$Styles$btnGhost),
							$elm$html$Html$Events$onClick(
							$author$project$Types$WorkspaceEvent(
								A2($author$project$Types$StartRenameProject, pid, name)))
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('✎')
						])),
					A2(
					$elm$html$Html$button,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$type_('button'),
							$elm$html$Html$Attributes$class($author$project$View$Styles$btnGhost),
							$elm$html$Html$Events$onClick(
							$author$project$Types$WorkspaceEvent(
								$author$project$Types$RequestDeleteProject(pid)))
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('🗑')
						]))
				]));
	});
var $author$project$Types$CancelRenameProject = {$: 6};
var $author$project$Types$CommitRenameProject = {$: 5};
var $author$project$Types$RenameProjectChanged = function (a) {
	return {$: 4, a: a};
};
var $author$project$View$SidebarView$viewRenameProjectItem = function (draftName) {
	return A2(
		$elm$html$Html$li,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class($author$project$View$Styles$sidebarItem)
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$form,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class($author$project$View$Styles$sidebarAddProjectForm),
						$elm$html$Html$Events$onSubmit(
						$author$project$Types$WorkspaceEvent($author$project$Types$CommitRenameProject))
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$input,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$type_('text'),
								$elm$html$Html$Attributes$class($author$project$View$Styles$sidebarAddProjectInput),
								$elm$html$Html$Attributes$spellcheck(false),
								$elm$html$Html$Attributes$value(draftName),
								$elm$html$Html$Events$onInput(
								A2($elm$core$Basics$composeL, $author$project$Types$WorkspaceEvent, $author$project$Types$RenameProjectChanged))
							]),
						_List_Nil),
						A2(
						$elm$html$Html$button,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$type_('submit'),
								$elm$html$Html$Attributes$class($author$project$View$Styles$btnPrimary)
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('保存')
							])),
						A2(
						$elm$html$Html$button,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$type_('button'),
								$elm$html$Html$Events$onClick(
								$author$project$Types$WorkspaceEvent($author$project$Types$CancelRenameProject))
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('取消')
							]))
					]))
			]));
};
var $author$project$View$SidebarView$viewProjectRow = F3(
	function (model, pid, ws) {
		var isScheduled = A2($elm$core$Set$member, pid, model.cS);
		var isActive = _Utils_eq(
			model.aC.aB,
			$author$project$Data$WorkspaceData$ProjectId(pid));
		var _v0 = model.d1;
		if (!_v0.$) {
			var r = _v0.a;
			return _Utils_eq(r.dX, pid) ? $author$project$View$SidebarView$viewRenameProjectItem(r.b4) : A4($author$project$View$SidebarView$viewNormalProjectItem, pid, ws.b4, isActive, isScheduled);
		} else {
			return A4($author$project$View$SidebarView$viewNormalProjectItem, pid, ws.b4, isActive, isScheduled);
		}
	});
var $author$project$View$SidebarView$viewKeyedProjectRow = F2(
	function (model, pid) {
		return A2(
			$elm$core$Maybe$map,
			function (ws) {
				return _Utils_Tuple2(
					pid,
					A3($author$project$View$SidebarView$viewProjectRow, model, pid, ws));
			},
			A2($elm$core$Dict$get, pid, model.aC.aN));
	});
var $author$project$View$SidebarView$viewProjectsSection = F2(
	function (hasNoProjects, model) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class($author$project$View$Styles$sidebarSection)
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class($author$project$View$Styles$sidebarSectionHeader)
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('プロジェクト')
						])),
					A2(
					$elm$html$Html$Keyed$ul,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class($author$project$View$Styles$sidebarList)
						]),
					A2(
						$elm$core$List$filterMap,
						$author$project$View$SidebarView$viewKeyedProjectRow(model),
						model.aC.aM)),
					A2($author$project$View$SidebarView$viewAddProjectForm, hasNoProjects, model.dD)
				]));
	});
var $author$project$View$SidebarView$viewSidebarBody = F2(
	function (isMobile, model) {
		var hasNoProjects = $elm$core$List$isEmpty(model.aC.aM);
		return A2(
			$elm$html$Html$aside,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class($author$project$View$Styles$sidebar)
				]),
			_List_fromArray(
				[
					$author$project$View$SidebarView$viewBrand(isMobile),
					A2($author$project$View$SidebarView$viewMemoSection, model.aC.aB, model.aC.aK),
					A2($author$project$View$SidebarView$viewProjectsSection, hasNoProjects, model),
					$author$project$View$SidebarView$viewFooter(model.dj)
				]));
	});
var $author$project$View$SidebarView$viewDesktopSidebar = function (model) {
	return A2($author$project$View$SidebarView$viewSidebarBody, false, model);
};
var $author$project$View$Styles$sidebarDrawerBackdrop = 'sidebar-drawer-backdrop';
var $author$project$View$SidebarView$viewMobileDrawer = function (model) {
	return model.ds ? A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class($author$project$View$Styles$sidebarDrawerBackdrop)
			]),
		_List_fromArray(
			[
				A2($author$project$View$SidebarView$viewSidebarBody, true, model)
			])) : $elm$html$Html$text('');
};
var $author$project$Main$viewNavigation = F2(
	function (mobile, model) {
		return mobile ? $author$project$View$SidebarView$viewMobileDrawer(model) : $author$project$View$SidebarView$viewDesktopSidebar(model);
	});
var $author$project$Types$DismissToast = {$: 6};
var $author$project$View$Styles$toast = 'toast';
var $author$project$View$Styles$toastBtn = 'toast__btn';
var $author$project$View$Styles$toastError = 'toast toast--error';
var $author$project$View$DialogsView$viewToast = function (maybeToast) {
	if (maybeToast.$ === 1) {
		return $elm$html$Html$text('');
	} else {
		var toastData = maybeToast.a;
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class(
					(toastData.ac === 1) ? $author$project$View$Styles$toastError : $author$project$View$Styles$toast)
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$span,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(toastData.ad)
						])),
					A2(
					$elm$html$Html$button,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$type_('button'),
							$elm$html$Html$Attributes$class($author$project$View$Styles$toastBtn),
							$elm$html$Html$Events$onClick(
							$author$project$Types$AppEvent($author$project$Types$DismissToast))
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('閉じる')
						]))
				]));
	}
};
var $author$project$Main$viewApp = function (model) {
	var mobile = $author$project$Types$isMobileViewport(model);
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class(
				mobile ? $author$project$View$Styles$appLayoutMobile : $author$project$View$Styles$appLayout)
			]),
		_List_fromArray(
			[
				A2($author$project$Main$viewNavigation, mobile, model),
				A2($author$project$Main$viewMainArea, mobile, model),
				$author$project$View$CardEditorView$viewCardEditor(model),
				$author$project$View$DialogsView$viewActiveDialog(model),
				$author$project$View$DialogsView$viewToast(model.bm)
			]));
};
var $author$project$Main$viewDocument = function (model) {
	return {
		cX: _List_fromArray(
			[
				$author$project$Main$viewApp(model)
			]),
		ek: $author$project$Main$documentTitle(model)
	};
};
var $author$project$Main$main = $elm$browser$Browser$document(
	{$7: $author$project$Main$init, ee: $author$project$Main$subscriptions, ep: $author$project$Main$update, eq: $author$project$Main$viewDocument});
_Platform_export({'Main':{'init':$author$project$Main$main(
	A2(
		$elm$json$Json$Decode$andThen,
		function (viewport) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (storageData) {
					return A2(
						$elm$json$Json$Decode$andThen,
						function (seed) {
							return A2(
								$elm$json$Json$Decode$andThen,
								function (isSafeMode) {
									return $elm$json$Json$Decode$succeed(
										{a4: isSafeMode, bf: seed, cB: storageData, bn: viewport});
								},
								A2($elm$json$Json$Decode$field, 'isSafeMode', $elm$json$Json$Decode$bool));
						},
						A2(
							$elm$json$Json$Decode$field,
							'seed',
							$elm$json$Json$Decode$list($elm$json$Json$Decode$int)));
				},
				A2($elm$json$Json$Decode$field, 'storageData', $elm$json$Json$Decode$value));
		},
		A2(
			$elm$json$Json$Decode$field,
			'viewport',
			A2(
				$elm$json$Json$Decode$andThen,
				function (width) {
					return A2(
						$elm$json$Json$Decode$andThen,
						function (height) {
							return $elm$json$Json$Decode$succeed(
								{a1: height, bp: width});
						},
						A2($elm$json$Json$Decode$field, 'height', $elm$json$Json$Decode$int));
				},
				A2($elm$json$Json$Decode$field, 'width', $elm$json$Json$Decode$int)))))(0)}});}(this));