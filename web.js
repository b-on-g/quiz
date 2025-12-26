#!/usr/bin/env node
"use strict";
function require( path ){ return $node[ path ] };

var $node = $node || {}
void function( module ) { var exports = module.exports = this; function require( id ) { return $node[ id.replace( /^.\// , "../" ) ] }; 
;
"use strict";
Error.stackTraceLimit = 50;
var $;
(function ($) {
})($ || ($ = {}));
module.exports = $;

;

$node[ "../mam.ts" ] = $node[ "../mam.ts" ] = module.exports }.call( {} , {} )
;
"use strict"

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var $ = ( typeof module === 'object' ) ? ( module['export'+'s'] = globalThis ) : globalThis
$.$$ = $

;
"use strict";
var $;
(function ($) {
    $.$mol_ambient_ref = Symbol('$mol_ambient_ref');
    function $mol_ambient(overrides) {
        return Object.setPrototypeOf(overrides, this || $);
    }
    $.$mol_ambient = $mol_ambient;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const instances = new WeakSet();
    function $mol_delegate(proto, target) {
        const proxy = new Proxy(proto, {
            get: (_, field) => {
                const obj = target();
                let val = Reflect.get(obj, field);
                if (typeof val === 'function') {
                    val = val.bind(obj);
                }
                return val;
            },
            has: (_, field) => Reflect.has(target(), field),
            set: (_, field, value) => Reflect.set(target(), field, value),
            getOwnPropertyDescriptor: (_, field) => Reflect.getOwnPropertyDescriptor(target(), field),
            ownKeys: () => Reflect.ownKeys(target()),
            getPrototypeOf: () => Reflect.getPrototypeOf(target()),
            setPrototypeOf: (_, donor) => Reflect.setPrototypeOf(target(), donor),
            isExtensible: () => Reflect.isExtensible(target()),
            preventExtensions: () => Reflect.preventExtensions(target()),
            apply: (_, self, args) => Reflect.apply(target(), self, args),
            construct: (_, args, retarget) => Reflect.construct(target(), args, retarget),
            defineProperty: (_, field, descr) => Reflect.defineProperty(target(), field, descr),
            deleteProperty: (_, field) => Reflect.deleteProperty(target(), field),
        });
        instances.add(proxy);
        return proxy;
    }
    $.$mol_delegate = $mol_delegate;
    Reflect.defineProperty($mol_delegate, Symbol.hasInstance, {
        value: (obj) => instances.has(obj),
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_owning_map = new WeakMap();
    function $mol_owning_allow(having) {
        try {
            if (!having)
                return false;
            if (typeof having !== 'object' && typeof having !== 'function')
                return false;
            if (having instanceof $mol_delegate)
                return false;
            if (typeof having['destructor'] !== 'function')
                return false;
            return true;
        }
        catch {
            return false;
        }
    }
    $.$mol_owning_allow = $mol_owning_allow;
    function $mol_owning_get(having, Owner) {
        if (!$mol_owning_allow(having))
            return null;
        while (true) {
            const owner = $.$mol_owning_map.get(having);
            if (!owner)
                return owner;
            if (!Owner)
                return owner;
            if (owner instanceof Owner)
                return owner;
            having = owner;
        }
    }
    $.$mol_owning_get = $mol_owning_get;
    function $mol_owning_check(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having) !== owner)
            return false;
        return true;
    }
    $.$mol_owning_check = $mol_owning_check;
    function $mol_owning_catch(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having))
            return false;
        $.$mol_owning_map.set(having, owner);
        return true;
    }
    $.$mol_owning_catch = $mol_owning_catch;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_fail(error) {
        throw error;
    }
    $.$mol_fail = $mol_fail;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_fail_hidden(error) {
        throw error;
    }
    $.$mol_fail_hidden = $mol_fail_hidden;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    const named = new WeakSet();
    function $mol_func_name(func) {
        let name = func.name;
        if (name?.length > 1)
            return name;
        if (named.has(func))
            return name;
        for (let key in this) {
            try {
                if (this[key] !== func)
                    continue;
                name = key;
                Object.defineProperty(func, 'name', { value: name });
                break;
            }
            catch { }
        }
        named.add(func);
        return name;
    }
    $.$mol_func_name = $mol_func_name;
    function $mol_func_name_from(target, source) {
        Object.defineProperty(target, 'name', { value: source.name });
        return target;
    }
    $.$mol_func_name_from = $mol_func_name_from;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    if (!Symbol.dispose)
        Symbol.dispose = Symbol('Symbol.dispose');
    class $mol_object2 {
        static $ = $;
        [Symbol.toStringTag];
        [$mol_ambient_ref] = null;
        get $() {
            if (this[$mol_ambient_ref])
                return this[$mol_ambient_ref];
            const owner = $mol_owning_get(this);
            return this[$mol_ambient_ref] = owner?.$ || this.constructor.$ || $mol_object2.$;
        }
        set $(next) {
            if (this[$mol_ambient_ref])
                $mol_fail_hidden(new Error('Context already defined'));
            this[$mol_ambient_ref] = next;
        }
        static create(init) {
            const obj = new this;
            if (init)
                init(obj);
            return obj;
        }
        static [Symbol.toPrimitive]() {
            return this.toString();
        }
        static toString() {
            return this[Symbol.toStringTag] || this.$.$mol_func_name(this);
        }
        static toJSON() {
            return this.toString();
        }
        destructor() { }
        static destructor() { }
        [Symbol.dispose]() {
            this.destructor();
        }
        toString() {
            return this[Symbol.toStringTag] || this.constructor.name + '<>';
        }
    }
    $.$mol_object2 = $mol_object2;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($_1) {
    let $$;
    (function ($$) {
        let $;
    })($$ = $_1.$$ || ($_1.$$ = {}));
    $_1.$mol_object_field = Symbol('$mol_object_field');
    class $mol_object extends $mol_object2 {
        static make(config) {
            return super.create(obj => {
                for (let key in config)
                    obj[key] = config[key];
            });
        }
    }
    $_1.$mol_object = $mol_object;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let $giper_baza_slot_kind;
    (function ($giper_baza_slot_kind) {
        $giper_baza_slot_kind[$giper_baza_slot_kind["free"] = 0] = "free";
        $giper_baza_slot_kind[$giper_baza_slot_kind["land"] = 76] = "land";
        $giper_baza_slot_kind[$giper_baza_slot_kind["sand"] = 252] = "sand";
        $giper_baza_slot_kind[$giper_baza_slot_kind["gift"] = 253] = "gift";
        $giper_baza_slot_kind[$giper_baza_slot_kind["seal"] = 254] = "seal";
        $giper_baza_slot_kind[$giper_baza_slot_kind["pass"] = 255] = "pass";
    })($giper_baza_slot_kind = $.$giper_baza_slot_kind || ($.$giper_baza_slot_kind = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_base64_encode(src) {
        return src.toBase64();
    }
    $.$mol_base64_encode = $mol_base64_encode;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_dom_context = self;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_dom = $mol_dom_context;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function binary_string(bytes) {
        let binary = '';
        if (typeof bytes !== 'string') {
            for (const byte of bytes)
                binary += String.fromCharCode(byte);
        }
        else {
            binary = unescape(encodeURIComponent(bytes));
        }
        return binary;
    }
    function $mol_base64_encode_web(str) {
        return $mol_dom_context.btoa(binary_string(str));
    }
    $.$mol_base64_encode_web = $mol_base64_encode_web;
    if (!('toBase64' in Uint8Array.prototype)) {
        $.$mol_base64_encode = $mol_base64_encode_web;
    }
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_base64_decode(base64) {
        return Uint8Array.fromBase64(base64);
    }
    $.$mol_base64_decode = $mol_base64_decode;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_base64_decode_web(base64Str) {
        const buf = Uint8Array.from($mol_dom_context.atob(base64Str), c => c.charCodeAt(0));
        return buf;
    }
    $.$mol_base64_decode_web = $mol_base64_decode_web;
    if (!('fromBase64' in Uint8Array)) {
        $.$mol_base64_decode = $mol_base64_decode_web;
    }
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_base64_ae_encode(buffer) {
        return $mol_base64_encode(buffer).replace(/\+/g, 'æ').replace(/\//g, 'Æ').replace(/=/g, '');
    }
    $.$mol_base64_ae_encode = $mol_base64_ae_encode;
    function $mol_base64_ae_decode(str) {
        return $mol_base64_decode(str.replace(/æ/g, '+').replace(/Æ/g, '/'));
    }
    $.$mol_base64_ae_decode = $mol_base64_ae_decode;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_buffer extends DataView {
        [Symbol.toStringTag] = this.constructor.name + '<>';
        static from(array) {
            if (typeof array === 'number')
                array = new Uint8Array(array);
            if (typeof array === 'string')
                array = $mol_base64_ae_decode(array);
            return new this(array.buffer, array.byteOffset, array.byteLength);
        }
        static toString() {
            return $$.$mol_func_name(this);
        }
        getUint48(offset, LE = false) {
            if (offset % 4) {
                return this.getUint16(offset, LE) + this.getUint32(offset + 2, LE) * 2 ** 16;
            }
            else {
                return this.getUint32(offset, LE) + this.getUint16(offset + 4, LE) * 2 ** 32;
            }
        }
        setUint48(offset, value, LE = false) {
            if (offset % 4) {
                this.setUint16(offset, value & ((1 << 16) - 1), LE);
                this.setUint32(offset + 2, (value / 2 ** 16) | 0, LE);
            }
            else {
                this.setUint32(offset, value | 0, LE);
                this.setUint16(offset + 4, (value / 2 ** 32) | 0, LE);
            }
        }
        int8(offset, next) {
            if (next === undefined)
                return this.getInt8(offset);
            if (next >= -(2 ** 7) && next < 2 ** 7)
                return this.setInt8(offset, next), next;
            $mol_fail(new Error(`Wrong int8 value ${next}`));
        }
        uint8(offset, next) {
            if (next === undefined)
                return this.getUint8(offset);
            if (next >= 0 && next < 2 ** 8)
                return this.setUint8(offset, next), next;
            $mol_fail(new Error(`Wrong uint8 value ${next}`));
        }
        int16(offset, next) {
            if (next === undefined)
                return this.getInt16(offset, true);
            if (next >= -(2 ** 15) && next < 2 ** 15)
                return this.setInt16(offset, next, true), next;
            $mol_fail(new Error(`Wrong int16 value ${next}`));
        }
        uint16(offset, next) {
            if (next === undefined)
                return this.getUint16(offset, true);
            if (next >= 0 && next < 2 ** 16)
                return this.setUint16(offset, next, true), next;
            $mol_fail(new Error(`Wrong uint16 value ${next}`));
        }
        int32(offset, next) {
            if (next === undefined)
                return this.getInt32(offset, true);
            if (next >= -(2 ** 31) && next < 2 ** 31)
                return this.setInt32(offset, next, true), next;
            $mol_fail(new Error(`Wrong int32 value ${next}`));
        }
        uint32(offset, next) {
            if (next === undefined)
                return this.getUint32(offset, true);
            if (next >= 0 && next < 2 ** 32)
                return this.setUint32(offset, next, true), next;
            $mol_fail(new Error(`Wrong uint32 value ${next}`));
        }
        int64(offset, next) {
            if (next === undefined)
                return this.getBigInt64(offset, true);
            if (next >= -(2n ** 63n) && next < 2n ** 63n)
                return this.setBigInt64(offset, next, true), next;
            $mol_fail(new Error(`Wrong int64 value ${next}`));
        }
        uint48(offset, next) {
            if (next === undefined)
                return this.getUint48(offset, true);
            if (next >= 0 && next < 2 ** 48)
                return this.setUint48(offset, next, true), next;
            $mol_fail(new Error(`Wrong uint48 value ${next}`));
        }
        uint64(offset, next) {
            if (next === undefined)
                return this.getBigUint64(offset, true);
            if (next >= 0n && next < 2n ** 64n)
                return this.setBigUint64(offset, next, true), next;
            $mol_fail(new Error(`Wrong uint64 value ${next}`));
        }
        float16(offset, next) {
            if (next !== undefined)
                this.setFloat16(offset, next, true);
            return this.getFloat16(offset, true);
        }
        float32(offset, next) {
            if (next !== undefined)
                this.setFloat32(offset, next, true);
            return this.getFloat32(offset, true);
        }
        float64(offset, next) {
            if (next !== undefined)
                this.setFloat64(offset, next, true);
            return this.getFloat64(offset, true);
        }
        asArray() {
            return new Uint8Array(this.buffer, this.byteOffset, this.byteLength);
        }
        toString() {
            return $mol_base64_ae_encode(this.asArray());
        }
    }
    $.$mol_buffer = $mol_buffer;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_base64_url_encode(buffer) {
        return buffer.toBase64({ alphabet: 'base64url', omitPadding: true });
    }
    $.$mol_base64_url_encode = $mol_base64_url_encode;
    function $mol_base64_url_decode(str) {
        return Uint8Array.fromBase64(str, { alphabet: 'base64url' });
    }
    $.$mol_base64_url_decode = $mol_base64_url_decode;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_base64_url_encode_web(buffer) {
        return $mol_base64_encode(buffer).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
    }
    $.$mol_base64_url_encode_web = $mol_base64_url_encode_web;
    if (!('toBase64' in Uint8Array.prototype)) {
        $.$mol_base64_url_encode = $mol_base64_url_encode_web;
    }
    function $mol_base64_url_decode_web(str) {
        return $mol_base64_decode(str.replace(/-/g, '+').replace(/_/g, '/'));
    }
    $.$mol_base64_url_decode_web = $mol_base64_url_decode_web;
    if (!('fromBase64' in Uint8Array)) {
        $.$mol_base64_url_decode = $mol_base64_url_decode_web;
    }
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_wrapper extends $mol_object2 {
        static wrap;
        static run(task) {
            return this.func(task)();
        }
        static func(func) {
            return this.wrap(func);
        }
        static get class() {
            return (Class) => {
                const construct = (target, args) => new Class(...args);
                const handler = {
                    construct: this.func(construct)
                };
                handler[Symbol.toStringTag] = Class.name + '#';
                return new Proxy(Class, handler);
            };
        }
        static get method() {
            return (obj, name, descr = Reflect.getOwnPropertyDescriptor(obj, name)) => {
                descr.value = this.func(descr.value);
                return descr;
            };
        }
        static get field() {
            return (obj, name, descr = Reflect.getOwnPropertyDescriptor(obj, name)) => {
                descr.get = descr.set = this.func(descr.get);
                return descr;
            };
        }
    }
    $.$mol_wrapper = $mol_wrapper;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_memo extends $mol_wrapper {
        static wrap(task) {
            const store = new WeakMap();
            const fun = function (next) {
                if (next === undefined && store.has(this))
                    return store.get(this);
                const val = task.call(this, next) ?? next;
                store.set(this, val);
                return val;
            };
            Reflect.defineProperty(fun, 'name', { value: task.name + ' ' });
            return fun;
        }
    }
    $.$mol_memo = $mol_memo;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_crypto_native = crypto;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_crypto_restack(error) {
        error = new Error(error instanceof Error ? error.message : String(error), { cause: error });
        $mol_fail_hidden(error);
    }
    $.$mol_crypto_restack = $mol_crypto_restack;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const ecdsa = {
        name: 'ECDSA',
        hash: 'SHA-1',
        namedCurve: "P-256",
    };
    const ecdh = { name: "ECDH", namedCurve: "P-256" };
    const jwk = { crv: 'P-256', ext: true, kty: 'EC' };
    class $mol_crypto_key extends $mol_buffer {
        static from(serial) {
            if (typeof serial === 'string') {
                serial = new Uint8Array([
                    ...$mol_base64_url_decode(serial.slice(0, 43)),
                    ...$mol_base64_url_decode(serial.slice(43, 86)),
                    ...$mol_base64_url_decode(serial.slice(86, 129)),
                ]);
            }
            return super.from(serial);
        }
        toString() {
            const arr = this.asArray();
            return $mol_base64_url_encode(arr.subarray(0, 32))
                + $mol_base64_url_encode(arr.subarray(32, 64))
                + $mol_base64_url_encode(arr.subarray(64));
        }
    }
    __decorate([
        $mol_memo.method
    ], $mol_crypto_key.prototype, "toString", null);
    $.$mol_crypto_key = $mol_crypto_key;
    class $mol_crypto_key_public extends $mol_crypto_key {
        static size_str = 86;
        static size_bin = 64;
        async native() {
            const str = this.toString();
            return $mol_crypto_native.subtle.importKey('jwk', {
                crv: "P-256",
                ext: true,
                key_ops: ['verify'],
                kty: "EC",
                x: str.slice(0, 43),
                y: str.slice(43, 86),
            }, ecdsa, Boolean('extractable'), ['verify']).catch($mol_crypto_restack);
        }
        async native_derive() {
            const serial = this.toString();
            return await $mol_crypto_native.subtle.importKey('jwk', {
                ...jwk,
                key_ops: [],
                x: serial.slice(0, 43),
                y: serial.slice(43, 86),
            }, ecdh, true, []).catch($mol_crypto_restack);
        }
        async verify(data, sign) {
            return await $mol_crypto_native.subtle.verify(ecdsa, await this.native(), sign, data).catch($mol_crypto_restack);
        }
    }
    __decorate([
        $mol_memo.method
    ], $mol_crypto_key_public.prototype, "native", null);
    __decorate([
        $mol_memo.method
    ], $mol_crypto_key_public.prototype, "native_derive", null);
    $.$mol_crypto_key_public = $mol_crypto_key_public;
    class $mol_crypto_key_private extends $mol_crypto_key {
        static size_str = 129;
        static size_bin = 96;
        static size_sign = 64;
        static async generate() {
            const pair = await $mol_crypto_native.subtle.generateKey(ecdsa, Boolean('extractable'), ['sign', 'verify']).catch($mol_crypto_restack);
            const { x, y, d } = await $mol_crypto_native.subtle.exportKey('jwk', pair.privateKey).catch($mol_crypto_restack);
            return this.from(x + y + d);
        }
        async native() {
            const str = this.toString();
            return await $mol_crypto_native.subtle.importKey('jwk', {
                crv: "P-256",
                ext: true,
                key_ops: ['sign'],
                kty: "EC",
                x: str.slice(0, 43),
                y: str.slice(43, 86),
                d: str.slice(86, 129),
            }, ecdsa, Boolean('extractable'), ['sign']).catch($mol_crypto_restack);
        }
        async native_derive() {
            const serial = this.toString();
            return $mol_crypto_native.subtle.importKey('jwk', {
                ...jwk,
                key_ops: ['deriveKey', 'deriveBits'],
                x: serial.slice(0, 43),
                y: serial.slice(43, 86),
                d: serial.slice(86, 129),
            }, ecdh, Boolean('extractable'), ['deriveKey', 'deriveBits']).catch($mol_crypto_restack);
        }
        public() {
            return new $mol_crypto_key_public(this.asArray().slice(0, 64).buffer);
        }
        async sign(data) {
            return new Uint8Array(await $mol_crypto_native.subtle.sign(ecdsa, await this.native(), data).catch($mol_crypto_restack));
        }
    }
    __decorate([
        $mol_memo.method
    ], $mol_crypto_key_private.prototype, "native", null);
    __decorate([
        $mol_memo.method
    ], $mol_crypto_key_private.prototype, "native_derive", null);
    __decorate([
        $mol_memo.method
    ], $mol_crypto_key_private.prototype, "public", null);
    $.$mol_crypto_key_private = $mol_crypto_key_private;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $['devtoolsFormatters'] ||= [];
    function $mol_dev_format_register(config) {
        $['devtoolsFormatters'].push(config);
    }
    $.$mol_dev_format_register = $mol_dev_format_register;
    $.$mol_dev_format_head = Symbol('$mol_dev_format_head');
    $.$mol_dev_format_body = Symbol('$mol_dev_format_body');
    function $mol_dev_format_button(label, click) {
        return $mol_dev_format_auto({
            [$.$mol_dev_format_head]() {
                return $.$mol_dev_format_span({ color: 'cornflowerblue' }, label);
            },
            [$.$mol_dev_format_body]() {
                Promise.resolve().then(click);
                return $.$mol_dev_format_span({});
            }
        });
    }
    $mol_dev_format_register({
        header: (val, config = false) => {
            if (config)
                return null;
            if (!val)
                return null;
            if ($.$mol_dev_format_head in val) {
                try {
                    return val[$.$mol_dev_format_head]();
                }
                catch (error) {
                    return $.$mol_dev_format_accent($mol_dev_format_native(val), '💨', $mol_dev_format_native(error), '');
                }
            }
            if (typeof val === 'function') {
                return $mol_dev_format_native(val);
            }
            if (val instanceof Error) {
                return $.$mol_dev_format_span({}, $mol_dev_format_native(val), ' ', $mol_dev_format_button('throw', () => $mol_fail_hidden(val)));
            }
            if (val instanceof Promise) {
                return $.$mol_dev_format_shade($mol_dev_format_native(val), ' ', val[Symbol.toStringTag] ?? '');
            }
            if (Symbol.toStringTag in val) {
                return $mol_dev_format_native(val);
            }
            return null;
        },
        hasBody: (val, config = false) => {
            if (config)
                return false;
            if (!val)
                return false;
            if (val[$.$mol_dev_format_body])
                return true;
            return false;
        },
        body: (val, config = false) => {
            if (config)
                return null;
            if (!val)
                return null;
            if ($.$mol_dev_format_body in val) {
                try {
                    return val[$.$mol_dev_format_body]();
                }
                catch (error) {
                    return $.$mol_dev_format_accent($mol_dev_format_native(val), '💨', $mol_dev_format_native(error), '');
                }
            }
            return null;
        },
    });
    function $mol_dev_format_native(obj) {
        if (typeof obj === 'undefined')
            return $.$mol_dev_format_shade('undefined');
        return [
            'object',
            {
                object: obj,
                config: true,
            },
        ];
    }
    $.$mol_dev_format_native = $mol_dev_format_native;
    function $mol_dev_format_auto(obj) {
        if (obj == null)
            return $.$mol_dev_format_shade(String(obj));
        return [
            'object',
            {
                object: obj,
                config: false,
            },
        ];
    }
    $.$mol_dev_format_auto = $mol_dev_format_auto;
    function $mol_dev_format_element(element, style, ...content) {
        const styles = [];
        for (let key in style)
            styles.push(`${key} : ${style[key]}`);
        return [
            element,
            {
                style: styles.join(' ; '),
            },
            ...content,
        ];
    }
    $.$mol_dev_format_element = $mol_dev_format_element;
    $.$mol_dev_format_span = $mol_dev_format_element.bind(null, 'span');
    $.$mol_dev_format_div = $mol_dev_format_element.bind(null, 'div');
    $.$mol_dev_format_ol = $mol_dev_format_element.bind(null, 'ol');
    $.$mol_dev_format_li = $mol_dev_format_element.bind(null, 'li');
    $.$mol_dev_format_table = $mol_dev_format_element.bind(null, 'table');
    $.$mol_dev_format_tr = $mol_dev_format_element.bind(null, 'tr');
    $.$mol_dev_format_td = $mol_dev_format_element.bind(null, 'td');
    $.$mol_dev_format_accent = $.$mol_dev_format_span.bind(null, {
        'color': 'magenta',
    });
    $.$mol_dev_format_strong = $.$mol_dev_format_span.bind(null, {
        'font-weight': 'bold',
    });
    $.$mol_dev_format_string = $.$mol_dev_format_span.bind(null, {
        'color': 'green',
    });
    $.$mol_dev_format_shade = $.$mol_dev_format_span.bind(null, {
        'color': 'gray',
    });
    $.$mol_dev_format_indent = $.$mol_dev_format_div.bind(null, {
        'margin-left': '13px'
    });
    class Stack extends Array {
        toString() {
            return this.join('\n');
        }
    }
    class Call extends Object {
        type;
        function;
        method;
        eval;
        source;
        offset;
        pos;
        object;
        flags;
        [Symbol.toStringTag];
        constructor(call) {
            super();
            this.type = call.getTypeName() ?? '';
            this.function = call.getFunctionName() ?? '';
            this.method = call.getMethodName() ?? '';
            if (this.method === this.function)
                this.method = '';
            this.pos = [call.getEnclosingLineNumber() ?? 0, call.getEnclosingColumnNumber() ?? 0];
            this.eval = call.getEvalOrigin() ?? '';
            this.source = call.getScriptNameOrSourceURL() ?? '';
            this.object = call.getThis();
            this.offset = call.getPosition();
            const flags = [];
            if (call.isAsync())
                flags.push('async');
            if (call.isConstructor())
                flags.push('constructor');
            if (call.isEval())
                flags.push('eval');
            if (call.isNative())
                flags.push('native');
            if (call.isPromiseAll())
                flags.push('PromiseAll');
            if (call.isToplevel())
                flags.push('top');
            this.flags = flags;
            const type = this.type ? this.type + '.' : '';
            const func = this.function || '<anon>';
            const method = this.method ? ' [' + this.method + '] ' : '';
            this[Symbol.toStringTag] = `${type}${func}${method}`;
        }
        [Symbol.toPrimitive]() {
            return this.toString();
        }
        toString() {
            const object = this.object || '';
            const label = this[Symbol.toStringTag];
            const source = `${this.source}:${this.pos.join(':')} #${this.offset}`;
            return `\tat ${object}${label} (${source})`;
        }
        [$.$mol_dev_format_head]() {
            return $.$mol_dev_format_div({}, $mol_dev_format_native(this), $.$mol_dev_format_shade(' '), ...this.object ? [
                $mol_dev_format_native(this.object),
            ] : [], ...this.method ? [$.$mol_dev_format_shade(' ', ' [', this.method, ']')] : [], $.$mol_dev_format_shade(' ', this.flags.join(', ')));
        }
    }
    Error.prepareStackTrace ??= (error, stack) => new Stack(...stack.map(call => new Call(call)));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let sponge = new Uint32Array(80);
    function $mol_crypto_hash(input) {
        const data = input instanceof Uint8Array
            ? input
            : new Uint8Array(input.buffer, input.byteOffset, input.byteLength);
        const bits = data.byteLength << 3;
        const kbits = bits >> 5;
        const kword = 0x80 << (24 - bits & 0b11111);
        const bytes = 16 + (bits + 64 >>> 9 << 4);
        const klens = bytes - 1;
        const words = new DataView(data.buffer, data.byteOffset, data.byteLength >> 2 << 2);
        let tail = 0;
        for (let i = words.byteLength; i < data.length; ++i) {
            tail |= data[i] << ((3 - i & 0b11) << 3);
        }
        const hash = new Int32Array([1732584193, -271733879, -1732584194, 271733878, -1009589776]);
        for (let i = 0; i < bytes; i += 16) {
            let h0 = hash[0];
            let h1 = hash[1];
            let h2 = hash[2];
            let h3 = hash[3];
            let h4 = hash[4];
            for (let j = 0; j < 16; ++j) {
                const k = i + j;
                if (k === klens) {
                    sponge[j] = bits;
                }
                else {
                    const pos = k << 2;
                    let word = pos === words.byteLength ? tail :
                        pos > words.byteLength ? 0 :
                            words.getInt32(pos, false);
                    if (k === kbits)
                        word |= kword;
                    sponge[j] = word;
                }
                const next = ((h1 & h2 | ~h1 & h3) + 1518500249 + h4 + (sponge[j] >>> 0) + ((h0 << 5) | (h0 >>> 27))) | 0;
                h4 = h3;
                h3 = h2;
                h2 = (h1 << 30) | (h1 >>> 2);
                h1 = h0;
                h0 = next;
            }
            for (let j = 16; j < 20; ++j) {
                const shuffle = sponge[j - 3] ^ sponge[j - 8] ^ sponge[j - 14] ^ sponge[j - 16];
                sponge[j] = shuffle << 1 | shuffle >>> 31;
                const next = ((h1 & h2 | ~h1 & h3) + 1518500249 + h4 + (sponge[j] >>> 0) + ((h0 << 5) | (h0 >>> 27))) | 0;
                h4 = h3;
                h3 = h2;
                h2 = (h1 << 30) | (h1 >>> 2);
                h1 = h0;
                h0 = next;
            }
            for (let j = 20; j < 40; ++j) {
                const shuffle = sponge[j - 3] ^ sponge[j - 8] ^ sponge[j - 14] ^ sponge[j - 16];
                sponge[j] = shuffle << 1 | shuffle >>> 31;
                const next = ((h1 ^ h2 ^ h3) + 1859775393 + h4 + (sponge[j] >>> 0) + ((h0 << 5) | (h0 >>> 27))) | 0;
                h4 = h3;
                h3 = h2;
                h2 = (h1 << 30) | (h1 >>> 2);
                h1 = h0;
                h0 = next;
            }
            for (let j = 40; j < 60; ++j) {
                const shuffle = sponge[j - 3] ^ sponge[j - 8] ^ sponge[j - 14] ^ sponge[j - 16];
                sponge[j] = shuffle << 1 | shuffle >>> 31;
                const next = ((h1 & h2 | h1 & h3 | h2 & h3) - 1894007588 + h4 + (sponge[j] >>> 0) + ((h0 << 5) | (h0 >>> 27))) | 0;
                h4 = h3;
                h3 = h2;
                h2 = (h1 << 30) | (h1 >>> 2);
                h1 = h0;
                h0 = next;
            }
            for (let j = 60; j < 80; ++j) {
                const shuffle = sponge[j - 3] ^ sponge[j - 8] ^ sponge[j - 14] ^ sponge[j - 16];
                sponge[j] = shuffle << 1 | shuffle >>> 31;
                const next = ((h1 ^ h2 ^ h3) - 899497514 + h4 + (sponge[j] >>> 0) + ((h0 << 5) | (h0 >>> 27))) | 0;
                h4 = h3;
                h3 = h2;
                h2 = (h1 << 30) | (h1 >>> 2);
                h1 = h0;
                h0 = next;
            }
            hash[0] += h0;
            hash[1] += h1;
            hash[2] += h2;
            hash[3] += h3;
            hash[4] += h4;
        }
        for (let i = 0; i < 20; ++i) {
            const word = hash[i];
            hash[i] = word << 24 | word << 8 & 0xFF0000 | word >>> 8 & 0xFF00 | word >>> 24 & 0xFF;
        }
        return new Uint8Array(hash.buffer);
    }
    $.$mol_crypto_hash = $mol_crypto_hash;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let buf = new Uint8Array(2 ** 12);
    function $mol_charset_encode(str) {
        const capacity = str.length * 3;
        if (buf.byteLength < capacity)
            buf = new Uint8Array(capacity);
        return buf.slice(0, $mol_charset_encode_to(str, buf));
    }
    $.$mol_charset_encode = $mol_charset_encode;
    function $mol_charset_encode_to(str, buf, from = 0) {
        let pos = from;
        for (let i = 0; i < str.length; i++) {
            let code = str.charCodeAt(i);
            if (code < 0x80) {
                buf[pos++] = code;
            }
            else if (code < 0x800) {
                buf[pos++] = 0xc0 | (code >> 6);
                buf[pos++] = 0x80 | (code & 0x3f);
            }
            else if (code < 0xd800 || code >= 0xe000) {
                buf[pos++] = 0xe0 | (code >> 12);
                buf[pos++] = 0x80 | ((code >> 6) & 0x3f);
                buf[pos++] = 0x80 | (code & 0x3f);
            }
            else {
                const point = ((code - 0xd800) << 10) + str.charCodeAt(++i) + 0x2400;
                buf[pos++] = 0xf0 | (point >> 18);
                buf[pos++] = 0x80 | ((point >> 12) & 0x3f);
                buf[pos++] = 0x80 | ((point >> 6) & 0x3f);
                buf[pos++] = 0x80 | (point & 0x3f);
            }
        }
        return pos - from;
    }
    $.$mol_charset_encode_to = $mol_charset_encode_to;
    function $mol_charset_encode_size(str) {
        let size = 0;
        for (let i = 0; i < str.length; i++) {
            let code = str.charCodeAt(i);
            if (code < 0x80)
                size += 1;
            else if (code < 0x800)
                size += 2;
            else if (code < 0xd800 || code >= 0xe000)
                size += 3;
            else
                size += 4;
        }
        return size;
    }
    $.$mol_charset_encode_size = $mol_charset_encode_size;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $giper_baza_link_compare(left, right) {
        return (right.str > left.str ? 1 : right.str < left.str ? -1 : 0);
    }
    $.$giper_baza_link_compare = $giper_baza_link_compare;
    class $giper_baza_link extends Object {
        str;
        constructor(str) {
            super();
            this.str = str;
            if (!/^(([a-zæA-ZÆ0-9]{8})?_){0,3}([a-zæA-ZÆ0-9]{8})?$/.test(str)) {
                $mol_fail(new Error(`Wrong Link (${str})`));
            }
            this.str = str.replace(/AAAAAAAA/g, '').replace(/_+$/, '');
        }
        static hole = new this('');
        static check(val) {
            try {
                new this(val);
                return val;
            }
            catch {
                return null;
            }
        }
        toString() {
            return this.str;
        }
        toJSON() {
            return this.str;
        }
        [Symbol.toPrimitive]() {
            return this.str;
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({ 'color': 'darkorange' }, this.str || '_');
        }
        toBin() {
            return $mol_base64_ae_decode((this.str).split('_').map(numb => numb || 'AAAAAAAA').join(''));
        }
        static from_int(int) {
            return new this($mol_base64_ae_encode(new Uint8Array(new BigUint64Array([BigInt(int)]).buffer, 0, 6)));
        }
        static from_bin(bin) {
            return new this([...$mol_base64_ae_encode(bin).match(/(.{8})/g) ?? []].join('_'));
        }
        static _hash_cache = new WeakMap();
        static hash_bin(bin) {
            let link = this._hash_cache.get(bin);
            if (link)
                return link;
            const hash = $mol_crypto_hash(bin);
            link = this.from_bin(new Uint8Array(hash.buffer, 0, 12));
            this._hash_cache.set(bin, link);
            return link;
        }
        static hash_str(str) {
            return this.hash_bin($mol_charset_encode(str));
        }
        peer() {
            return new $giper_baza_link(this.str.split('_')[0] ?? '');
        }
        area() {
            return new $giper_baza_link(this.str.split('_')[2] ?? '');
        }
        head() {
            return new $giper_baza_link(this.str.split('_')[3] ?? '');
        }
        lord() {
            return new $giper_baza_link(this.str.split('_').slice(0, 2).join('_'));
        }
        land() {
            return new $giper_baza_link(this.str.split('_').slice(0, 3).join('_'));
        }
        relate(base) {
            base = base.land();
            if (this.land().str !== base.str)
                return this;
            const head = this.head();
            return new $giper_baza_link('___' + head);
        }
        resolve(base) {
            if (this.str === '')
                return base.land();
            if (!this.str.startsWith('___'))
                return this;
            const parts = base.land().toString().split('_');
            while (parts.length < 3)
                parts.push('');
            parts.push(this.str.slice(3));
            return new $giper_baza_link(parts.join('_'));
        }
        mix(mixin) {
            if (mixin instanceof $giper_baza_link)
                mixin = mixin.toBin();
            const mix = this.toBin();
            for (let i = 0; i < mix.length; ++i)
                mix[i] ^= mixin[i];
            return mix;
        }
    }
    $.$giper_baza_link = $giper_baza_link;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_guid(length = 8, exists = () => false) {
        for (;;) {
            let id = Math.random().toString(36).substring(2, length + 2).toUpperCase();
            if (exists(id))
                continue;
            return id;
        }
    }
    $.$mol_guid = $mol_guid;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let $mol_wire_cursor;
    (function ($mol_wire_cursor) {
        $mol_wire_cursor[$mol_wire_cursor["stale"] = -1] = "stale";
        $mol_wire_cursor[$mol_wire_cursor["doubt"] = -2] = "doubt";
        $mol_wire_cursor[$mol_wire_cursor["fresh"] = -3] = "fresh";
        $mol_wire_cursor[$mol_wire_cursor["final"] = -4] = "final";
    })($mol_wire_cursor = $.$mol_wire_cursor || ($.$mol_wire_cursor = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_wire_pub extends Object {
        constructor(id = `$mol_wire_pub:${$mol_guid()}`) {
            super();
            this[Symbol.toStringTag] = id;
        }
        [Symbol.toStringTag];
        data = [];
        static get [Symbol.species]() {
            return Array;
        }
        sub_from = 0;
        get sub_list() {
            const res = [];
            for (let i = this.sub_from; i < this.data.length; i += 2) {
                res.push(this.data[i]);
            }
            return res;
        }
        get sub_empty() {
            return this.sub_from === this.data.length;
        }
        sub_on(sub, pub_pos) {
            const pos = this.data.length;
            this.data.push(sub, pub_pos);
            return pos;
        }
        sub_off(sub_pos) {
            if (!(sub_pos < this.data.length)) {
                $mol_fail(new Error(`Wrong pos ${sub_pos}`));
            }
            const end = this.data.length - 2;
            if (sub_pos !== end) {
                this.peer_move(end, sub_pos);
            }
            this.data.length = end;
            if (end === this.sub_from)
                this.reap();
        }
        reap() { }
        promote() {
            $mol_wire_auto()?.track_next(this);
        }
        fresh() { }
        complete() { }
        get incompleted() {
            return false;
        }
        emit(quant = $mol_wire_cursor.stale) {
            for (let i = this.sub_from; i < this.data.length; i += 2) {
                ;
                this.data[i].absorb(quant, this.data[i + 1]);
            }
        }
        peer_move(from_pos, to_pos) {
            const peer = this.data[from_pos];
            const self_pos = this.data[from_pos + 1];
            this.data[to_pos] = peer;
            this.data[to_pos + 1] = self_pos;
            peer.peer_repos(self_pos, to_pos);
        }
        peer_repos(peer_pos, self_pos) {
            this.data[peer_pos + 1] = self_pos;
        }
    }
    $.$mol_wire_pub = $mol_wire_pub;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    $.$mol_wire_auto_sub = null;
    function $mol_wire_auto(next = $.$mol_wire_auto_sub) {
        return $.$mol_wire_auto_sub = next;
    }
    $.$mol_wire_auto = $mol_wire_auto;
    $.$mol_wire_affected = [];
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_wire_pub_sub extends $mol_wire_pub {
        pub_from = 0;
        cursor = $mol_wire_cursor.stale;
        get temp() {
            return false;
        }
        get pub_list() {
            const res = [];
            const max = this.cursor >= 0 ? this.cursor : this.sub_from;
            for (let i = this.pub_from; i < max; i += 2) {
                if (this.data[i])
                    res.push(this.data[i]);
            }
            return res;
        }
        track_on() {
            this.cursor = this.pub_from;
            const sub = $mol_wire_auto();
            $mol_wire_auto(this);
            return sub;
        }
        promote() {
            if (this.cursor >= this.pub_from) {
                $mol_fail(new Error('Circular subscription'));
            }
            super.promote();
        }
        track_next(pub) {
            if (this.cursor < 0)
                $mol_fail(new Error('Promo to non begun sub'));
            if (this.cursor < this.sub_from) {
                const next = this.data[this.cursor];
                if (pub === undefined)
                    return next ?? null;
                if (next === pub) {
                    this.cursor += 2;
                    return next;
                }
                if (next) {
                    if (this.sub_from < this.data.length) {
                        this.peer_move(this.sub_from, this.data.length);
                    }
                    this.peer_move(this.cursor, this.sub_from);
                    this.sub_from += 2;
                }
            }
            else {
                if (pub === undefined)
                    return null;
                if (this.sub_from < this.data.length) {
                    this.peer_move(this.sub_from, this.data.length);
                }
                this.sub_from += 2;
            }
            this.data[this.cursor] = pub;
            this.data[this.cursor + 1] = pub.sub_on(this, this.cursor);
            this.cursor += 2;
            return pub;
        }
        track_off(sub) {
            $mol_wire_auto(sub);
            if (this.cursor < 0) {
                $mol_fail(new Error('End of non begun sub'));
            }
            for (let cursor = this.pub_from; cursor < this.cursor; cursor += 2) {
                const pub = this.data[cursor];
                pub.fresh();
            }
            this.cursor = $mol_wire_cursor.fresh;
        }
        pub_off(sub_pos) {
            this.data[sub_pos] = undefined;
            this.data[sub_pos + 1] = undefined;
        }
        destructor() {
            for (let cursor = this.data.length - 2; cursor >= this.sub_from; cursor -= 2) {
                const sub = this.data[cursor];
                const pos = this.data[cursor + 1];
                sub.pub_off(pos);
            }
            this.data.length = this.sub_from;
            this.cursor = this.pub_from;
            this.track_cut();
            this.cursor = $mol_wire_cursor.stale;
        }
        track_cut() {
            if (this.cursor < this.pub_from) {
                $mol_fail(new Error('Cut of non begun sub'));
            }
            let end = this.data.length;
            for (let cursor = this.cursor; cursor < this.sub_from; cursor += 2) {
                const pub = this.data[cursor];
                pub?.sub_off(this.data[cursor + 1]);
                end -= 2;
                if (this.sub_from <= end)
                    this.peer_move(end, cursor);
            }
            this.data.length = end;
            this.sub_from = this.cursor;
        }
        complete() { }
        complete_pubs() {
            const limit = this.cursor < 0 ? this.sub_from : this.cursor;
            for (let cursor = this.pub_from; cursor < limit; cursor += 2) {
                const pub = this.data[cursor];
                if (pub?.incompleted)
                    return;
            }
            for (let cursor = this.pub_from; cursor < limit; cursor += 2) {
                const pub = this.data[cursor];
                pub?.complete();
            }
        }
        absorb(quant = $mol_wire_cursor.stale, pos = -1) {
            if (this.cursor === $mol_wire_cursor.final)
                return;
            if (this.cursor >= quant)
                return;
            this.cursor = quant;
            this.emit($mol_wire_cursor.doubt);
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_native(this);
        }
        get pub_empty() {
            return this.sub_from === this.pub_from;
        }
    }
    $.$mol_wire_pub_sub = $mol_wire_pub_sub;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_after_tick extends $mol_object2 {
        task;
        static promise = null;
        cancelled = false;
        constructor(task) {
            super();
            this.task = task;
            if (!$mol_after_tick.promise)
                $mol_after_tick.promise = Promise.resolve().then(() => {
                    $mol_after_tick.promise = null;
                });
            $mol_after_tick.promise.then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_tick = $mol_after_tick;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_promise_like(val) {
        try {
            return val && typeof val === 'object' && 'then' in val && typeof val.then === 'function';
        }
        catch {
            return false;
        }
    }
    $.$mol_promise_like = $mol_promise_like;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const wrappers = new WeakMap();
    class $mol_wire_fiber extends $mol_wire_pub_sub {
        task;
        host;
        static warm = true;
        static planning = new Set();
        static reaping = new Set();
        static plan_task = null;
        static plan() {
            if (this.plan_task)
                return;
            this.plan_task = new $mol_after_tick(() => {
                try {
                    this.sync();
                }
                finally {
                    $mol_wire_fiber.plan_task = null;
                }
            });
        }
        static sync() {
            while (this.planning.size) {
                for (const fiber of this.planning) {
                    this.planning.delete(fiber);
                    if (fiber.cursor >= 0)
                        continue;
                    if (fiber.cursor === $mol_wire_cursor.final)
                        continue;
                    fiber.fresh();
                }
            }
            while (this.reaping.size) {
                const fibers = this.reaping;
                this.reaping = new Set;
                for (const fiber of fibers) {
                    if (!fiber.sub_empty)
                        continue;
                    fiber.destructor();
                }
            }
        }
        cache = undefined;
        get args() {
            return this.data.slice(0, this.pub_from);
        }
        result() {
            if ($mol_promise_like(this.cache))
                return;
            if (this.cache instanceof Error)
                return;
            return this.cache;
        }
        get incompleted() {
            return $mol_promise_like(this.cache);
        }
        field() {
            return this.task.name + '()';
        }
        constructor(id, task, host, args) {
            super(id);
            this.task = task;
            this.host = host;
            if (args)
                this.data.push(...args);
            this.pub_from = this.sub_from = args?.length ?? 0;
        }
        plan() {
            $mol_wire_fiber.planning.add(this);
            $mol_wire_fiber.plan();
            return this;
        }
        reap() {
            $mol_wire_fiber.reaping.add(this);
            $mol_wire_fiber.plan();
        }
        toString() {
            return this[Symbol.toStringTag];
        }
        toJSON() {
            return this[Symbol.toStringTag];
        }
        [$mol_dev_format_head]() {
            const cursor = {
                [$mol_wire_cursor.stale]: '🔴',
                [$mol_wire_cursor.doubt]: '🟡',
                [$mol_wire_cursor.fresh]: '🟢',
                [$mol_wire_cursor.final]: '🔵',
            }[this.cursor] ?? this.cursor.toString();
            return $mol_dev_format_div({}, $mol_owning_check(this, this.cache)
                ? $mol_dev_format_shade(cursor)
                : $mol_dev_format_shade(this[Symbol.toStringTag], cursor), $mol_dev_format_auto(this.cache));
        }
        [$mol_dev_format_body]() { return null; }
        get $() {
            return (this.host ?? this.task)['$'];
        }
        emit(quant = $mol_wire_cursor.stale) {
            if (this.sub_empty)
                this.plan();
            else
                super.emit(quant);
        }
        fresh() {
            if (this.cursor === $mol_wire_cursor.fresh)
                return;
            if (this.cursor === $mol_wire_cursor.final)
                return;
            check: if (this.cursor === $mol_wire_cursor.doubt) {
                for (let i = this.pub_from; i < this.sub_from; i += 2) {
                    ;
                    this.data[i]?.fresh();
                    if (this.cursor !== $mol_wire_cursor.doubt)
                        break check;
                }
                this.cursor = $mol_wire_cursor.fresh;
                return;
            }
            const bu = this.track_on();
            let result;
            try {
                switch (this.pub_from) {
                    case 0:
                        result = this.task.call(this.host);
                        break;
                    case 1:
                        result = this.task.call(this.host, this.data[0]);
                        break;
                    default:
                        result = this.task.call(this.host, ...this.args);
                        break;
                }
                if ($mol_promise_like(result)) {
                    if (wrappers.has(result)) {
                        result = wrappers.get(result).then(a => a);
                    }
                    else {
                        const put = (res) => {
                            if (this.cache === result)
                                this.put(res);
                            return res;
                        };
                        wrappers.set(result, result = Object.assign(result.then(put, put), { destructor: result.destructor || (() => { }) }));
                        wrappers.set(result, result);
                        const error = new Error(`Promise in ${this}`);
                        Object.defineProperty(result, 'stack', { get: () => error.stack });
                    }
                }
            }
            catch (error) {
                if (error instanceof Error || $mol_promise_like(error)) {
                    result = error;
                }
                else {
                    result = new Error(String(error), { cause: error });
                }
                if ($mol_promise_like(result)) {
                    if (wrappers.has(result)) {
                        result = wrappers.get(result);
                    }
                    else {
                        const put = (v) => {
                            if (this.cache === result)
                                this.absorb();
                            return v;
                        };
                        wrappers.set(result, result = Object.assign(result.then(put, put), { destructor: result.destructor || (() => { }) }));
                        const error = new Error(`Promise in ${this}`);
                        Object.defineProperty(result, 'stack', { get: () => error.stack });
                    }
                }
            }
            if (!$mol_promise_like(result)) {
                this.track_cut();
            }
            this.track_off(bu);
            this.put(result);
            return this;
        }
        refresh() {
            this.cursor = $mol_wire_cursor.stale;
            this.fresh();
        }
        sync() {
            if (!$mol_wire_fiber.warm) {
                return this.result();
            }
            this.promote();
            this.fresh();
            if (this.cache instanceof Error) {
                return $mol_fail_hidden(this.cache);
            }
            if ($mol_promise_like(this.cache)) {
                return $mol_fail_hidden(this.cache);
            }
            return this.cache;
        }
        async async_raw() {
            while (true) {
                this.fresh();
                if (this.cache instanceof Error) {
                    $mol_fail_hidden(this.cache);
                }
                if (!$mol_promise_like(this.cache))
                    return this.cache;
                await Promise.race([this.cache, this.step()]);
                if (!$mol_promise_like(this.cache))
                    return this.cache;
                if (this.cursor === $mol_wire_cursor.final) {
                    await new Promise(() => { });
                }
            }
        }
        async() {
            const promise = this.async_raw();
            if (!promise.destructor)
                promise.destructor = () => this.destructor();
            return promise;
        }
        step() {
            return new Promise(done => {
                const sub = new $mol_wire_pub_sub;
                const prev = sub.track_on();
                sub.track_next(this);
                sub.track_off(prev);
                sub.absorb = () => {
                    done(null);
                    setTimeout(() => sub.destructor());
                };
            });
        }
        destructor() {
            super.destructor();
            $mol_wire_fiber.planning.delete(this);
            if (!$mol_owning_check(this, this.cache))
                return;
            try {
                this.cache.destructor();
            }
            catch (result) {
                if ($mol_promise_like(result)) {
                    const error = new Error(`Promise in ${this}.destructor()`);
                    Object.defineProperty(result, 'stack', { get: () => error.stack });
                }
                $mol_fail_hidden(result);
            }
        }
    }
    $.$mol_wire_fiber = $mol_wire_fiber;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_key_store = new WeakMap();
    const TypedArray = Object.getPrototypeOf(Uint8Array);
    function $mol_key(value) {
        if (typeof value === 'bigint')
            return value.toString() + 'n';
        if (typeof value === 'symbol')
            return value.description;
        if (!value)
            return JSON.stringify(value);
        if (typeof value !== 'object' && typeof value !== 'function')
            return JSON.stringify(value);
        return JSON.stringify(value, (field, value) => {
            if (typeof value === 'bigint')
                return value.toString() + 'n';
            if (typeof value === 'symbol')
                return value.description;
            if (!value)
                return value;
            if (typeof value !== 'object' && typeof value !== 'function')
                return value;
            if (Array.isArray(value))
                return value;
            const proto = Reflect.getPrototypeOf(value);
            if (!proto)
                return value;
            if (Reflect.getPrototypeOf(proto) === null)
                return value;
            if ('toJSON' in value)
                return value;
            if (value instanceof RegExp)
                return value.toString();
            if (value instanceof TypedArray)
                return [...value];
            let key = $.$mol_key_store.get(value);
            if (key)
                return key;
            key = $mol_guid();
            $.$mol_key_store.set(value, key);
            return key;
        });
    }
    $.$mol_key = $mol_key;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_after_frame extends $mol_object2 {
        task;
        static _promise = null;
        static get promise() {
            if (this._promise)
                return this._promise;
            return this._promise = new Promise(done => {
                const complete = () => {
                    this._promise = null;
                    done();
                };
                if (typeof requestAnimationFrame === 'function') {
                    requestAnimationFrame(complete);
                }
                else {
                    setTimeout(complete, 16);
                }
            });
        }
        cancelled = false;
        promise;
        constructor(task) {
            super();
            this.task = task;
            this.promise = $mol_after_frame.promise.then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_frame = $mol_after_frame;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_compare_deep_cache = new WeakMap();
    function $mol_compare_deep(left, right) {
        if (Object.is(left, right))
            return true;
        if (left === null)
            return false;
        if (right === null)
            return false;
        if (typeof left !== 'object')
            return false;
        if (typeof right !== 'object')
            return false;
        const left_proto = Reflect.getPrototypeOf(left);
        const right_proto = Reflect.getPrototypeOf(right);
        if (left_proto !== right_proto)
            return false;
        if (left instanceof Boolean)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof Number)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof String)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof Date)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof RegExp)
            return left.source === right.source && left.flags === right.flags;
        if (left instanceof Error)
            return left.message === right.message && $mol_compare_deep(left.stack, right.stack);
        let left_cache = $.$mol_compare_deep_cache.get(left);
        if (left_cache) {
            const right_cache = left_cache.get(right);
            if (typeof right_cache === 'boolean')
                return right_cache;
        }
        else {
            left_cache = new WeakMap();
            $.$mol_compare_deep_cache.set(left, left_cache);
        }
        left_cache.set(right, true);
        let result;
        try {
            if (!left_proto)
                result = compare_pojo(left, right);
            else if (!Reflect.getPrototypeOf(left_proto))
                result = compare_pojo(left, right);
            else if (Symbol.toPrimitive in left)
                result = compare_primitive(left, right);
            else if (Array.isArray(left))
                result = compare_array(left, right);
            else if (left instanceof Set)
                result = compare_set(left, right);
            else if (left instanceof Map)
                result = compare_map(left, right);
            else if (ArrayBuffer.isView(left))
                result = compare_buffer(left, right);
            else if (Symbol.iterator in left)
                result = compare_iterator(left[Symbol.iterator](), right[Symbol.iterator]());
            else
                result = false;
        }
        finally {
            left_cache.set(right, result);
        }
        return result;
    }
    $.$mol_compare_deep = $mol_compare_deep;
    function compare_array(left, right) {
        const len = left.length;
        if (len !== right.length)
            return false;
        for (let i = 0; i < len; ++i) {
            if (!$mol_compare_deep(left[i], right[i]))
                return false;
        }
        return true;
    }
    function compare_buffer(left, right) {
        const len = left.byteLength;
        if (len !== right.byteLength)
            return false;
        if (left instanceof DataView)
            return compare_buffer(new Uint8Array(left.buffer, left.byteOffset, left.byteLength), new Uint8Array(right.buffer, right.byteOffset, right.byteLength));
        for (let i = 0; i < len; ++i) {
            if (left[i] !== right[i])
                return false;
        }
        return true;
    }
    function compare_iterator(left, right) {
        while (true) {
            const left_next = left.next();
            const right_next = right.next();
            if (left_next.done !== right_next.done)
                return false;
            if (left_next.done)
                break;
            if (!$mol_compare_deep(left_next.value, right_next.value))
                return false;
        }
        return true;
    }
    function compare_set(left, right) {
        if (left.size !== right.size)
            return false;
        return compare_iterator(left.values(), right.values());
    }
    function compare_map(left, right) {
        if (left.size !== right.size)
            return false;
        return compare_iterator(left.keys(), right.keys())
            && compare_iterator(left.values(), right.values());
    }
    function compare_pojo(left, right) {
        const left_keys = Object.getOwnPropertyNames(left);
        const right_keys = Object.getOwnPropertyNames(right);
        if (!compare_array(left_keys, right_keys))
            return false;
        for (let key of left_keys) {
            if (!$mol_compare_deep(left[key], right[key]))
                return false;
        }
        const left_syms = Object.getOwnPropertySymbols(left);
        const right_syms = Object.getOwnPropertySymbols(right);
        if (!compare_array(left_syms, right_syms))
            return false;
        for (let key of left_syms) {
            if (!$mol_compare_deep(left[key], right[key]))
                return false;
        }
        return true;
    }
    function compare_primitive(left, right) {
        return Object.is(left[Symbol.toPrimitive]('default'), right[Symbol.toPrimitive]('default'));
    }
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_log3_area_lazy(event) {
        const self = this.$;
        const stack = self.$mol_log3_stack;
        const deep = stack.length;
        let logged = false;
        stack.push(() => {
            logged = true;
            self.$mol_log3_area.call(self, event);
        });
        return () => {
            if (logged)
                self.console.groupEnd();
            if (stack.length > deep)
                stack.length = deep;
        };
    }
    $.$mol_log3_area_lazy = $mol_log3_area_lazy;
    $.$mol_log3_stack = [];
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    function $mol_log3_web_make(level, color) {
        return function $mol_log3_logger(event) {
            const pending = this.$mol_log3_stack.pop();
            if (pending)
                pending();
            let tpl = '%c';
            const chunks = Object.entries(event);
            for (let i = 0; i < chunks.length; ++i) {
                tpl += (typeof chunks[i][1] === 'string') ? '%s: %s\n' : '%s: %o\n';
            }
            const style = `color:${color};font-weight:bolder`;
            this.console[level](tpl.trim(), style, ...[].concat(...chunks));
            const self = this;
            return () => self.console.groupEnd();
        };
    }
    $.$mol_log3_web_make = $mol_log3_web_make;
    $.$mol_log3_come = $mol_log3_web_make('info', 'royalblue');
    $.$mol_log3_done = $mol_log3_web_make('info', 'forestgreen');
    $.$mol_log3_fail = $mol_log3_web_make('error', 'orangered');
    $.$mol_log3_warn = $mol_log3_web_make('warn', 'goldenrod');
    $.$mol_log3_rise = $mol_log3_web_make('log', 'magenta');
    $.$mol_log3_area = $mol_log3_web_make('group', 'cyan');
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_wire_task extends $mol_wire_fiber {
        static getter(task) {
            return function $mol_wire_task_get(host, args) {
                const sub = $mol_wire_auto();
                const existen = sub?.track_next();
                let cause = '';
                reuse: if (existen) {
                    if (!existen.temp)
                        break reuse;
                    if (existen.task !== task) {
                        cause = 'task';
                        break reuse;
                    }
                    if (existen.host !== host) {
                        cause = 'host';
                        break reuse;
                    }
                    if (!$mol_compare_deep(existen.args, args)) {
                        cause = 'args';
                        break reuse;
                    }
                    return existen;
                }
                const key = (host?.[Symbol.toStringTag] ?? host) + ('.' + task.name + '<#>');
                const next = new $mol_wire_task(key, task, host, args);
                if (existen?.temp) {
                    $$.$mol_log3_warn({
                        place: '$mol_wire_task',
                        message: `Different ${cause} on restart`,
                        sub,
                        prev: existen,
                        next,
                        hint: 'Maybe required additional memoization',
                    });
                }
                return next;
            };
        }
        get temp() {
            return true;
        }
        complete() {
            if ($mol_promise_like(this.cache))
                return;
            this.destructor();
        }
        put(next) {
            const prev = this.cache;
            this.cache = next;
            if ($mol_promise_like(next)) {
                this.cursor = $mol_wire_cursor.fresh;
                if (next !== prev)
                    this.emit();
                if ($mol_owning_catch(this, next)) {
                    try {
                        next[Symbol.toStringTag] = this[Symbol.toStringTag];
                    }
                    catch {
                        Object.defineProperty(next, Symbol.toStringTag, { value: this[Symbol.toStringTag] });
                    }
                }
                return next;
            }
            this.cursor = $mol_wire_cursor.final;
            if (this.sub_empty)
                this.destructor();
            else if (next !== prev)
                this.emit();
            return next;
        }
        destructor() {
            super.destructor();
            this.cursor = $mol_wire_cursor.final;
        }
    }
    $.$mol_wire_task = $mol_wire_task;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_method(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const temp = $mol_wire_task.getter(orig);
        const value = function (...args) {
            const fiber = temp(this ?? null, args);
            return fiber.sync();
        };
        Object.defineProperty(value, 'name', { value: orig.name + ' ' });
        Object.assign(value, { orig });
        const descr2 = { ...descr, value };
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_method = $mol_wire_method;
})($ || ($ = {}));

;
"use strict";

;
"use strict";

;
"use strict";
var $;
(function ($) {
    const catched = new WeakSet();
    function $mol_fail_catch(error) {
        if (typeof error !== 'object')
            return false;
        if ($mol_promise_like(error))
            $mol_fail_hidden(error);
        if (catched.has(error))
            return false;
        catched.add(error);
        return true;
    }
    $.$mol_fail_catch = $mol_fail_catch;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_try(handler) {
        try {
            return handler();
        }
        catch (error) {
            return error;
        }
    }
    $.$mol_try = $mol_try;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let error;
    let result;
    let handler;
    function $mol_try_web(handler2) {
        handler = handler2;
        error = undefined;
        result = undefined;
        window.dispatchEvent(new Event('$mol_try'));
        const error2 = error;
        const result2 = result;
        error = undefined;
        result = undefined;
        return error2 || result2;
    }
    $.$mol_try_web = $mol_try_web;
    $.$mol_try = $mol_try_web;
    self.addEventListener('$mol_try', (event) => {
        result = handler();
    }, true);
    self.addEventListener('error', (event) => {
        error = event.error;
    }, true);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_fail_log(error) {
        if ($mol_promise_like(error))
            return false;
        if (!$mol_fail_catch(error))
            return false;
        $mol_try(() => { $mol_fail_hidden(error); });
        return true;
    }
    $.$mol_fail_log = $mol_fail_log;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_wire_atom extends $mol_wire_fiber {
        static solo(host, task) {
            const field = task.name + '()';
            const existen = Object.getOwnPropertyDescriptor(host ?? task, field)?.value;
            if (existen)
                return existen;
            const prefix = host?.[Symbol.toStringTag] ?? (host instanceof Function ? $$.$mol_func_name(host) : host);
            const key = prefix + ('.' + task.name + '<>');
            const fiber = new $mol_wire_atom(key, task, host, []);
            (host ?? task)[field] = fiber;
            return fiber;
        }
        static plex(host, task, key) {
            const field = task.name + '()';
            let dict = Object.getOwnPropertyDescriptor(host ?? task, field)?.value;
            const prefix = host?.[Symbol.toStringTag] ?? (host instanceof Function ? $$.$mol_func_name(host) : host);
            const key_str = $mol_key(key);
            if (dict) {
                const existen = dict.get(key_str);
                if (existen)
                    return existen;
            }
            else {
                dict = (host ?? task)[field] = new Map();
            }
            const id = prefix + ('.' + task.name) + ('<' + key_str.replace(/^"|"$/g, "'") + '>');
            const fiber = new $mol_wire_atom(id, task, host, [key]);
            dict.set(key_str, fiber);
            return fiber;
        }
        static watching = new Set();
        static watcher = null;
        static watch() {
            $mol_wire_atom.watcher = new $mol_after_frame($mol_wire_atom.watch);
            for (const atom of $mol_wire_atom.watching) {
                if (atom.cursor === $mol_wire_cursor.final) {
                    $mol_wire_atom.watching.delete(atom);
                }
                else {
                    atom.cursor = $mol_wire_cursor.stale;
                    atom.fresh();
                }
            }
        }
        watch() {
            if (!$mol_wire_atom.watcher) {
                $mol_wire_atom.watcher = new $mol_after_frame($mol_wire_atom.watch);
            }
            $mol_wire_atom.watching.add(this);
        }
        resync(args) {
            for (let cursor = this.pub_from; cursor < this.sub_from; cursor += 2) {
                const pub = this.data[cursor];
                if (pub && pub instanceof $mol_wire_task) {
                    pub.destructor();
                }
            }
            return this.put(this.task.call(this.host, ...args));
        }
        once() {
            return this.sync();
        }
        channel() {
            return Object.assign((next) => {
                if (next !== undefined)
                    return this.resync([...this.args, next]);
                if (!$mol_wire_fiber.warm)
                    return this.result();
                if ($mol_wire_auto()?.temp) {
                    return this.once();
                }
                else {
                    return this.sync();
                }
            }, { atom: this });
        }
        destructor() {
            super.destructor();
            if (this.pub_from === 0) {
                ;
                (this.host ?? this.task)[this.field()] = null;
            }
            else {
                ;
                (this.host ?? this.task)[this.field()].delete($mol_key(this.args[0]));
            }
        }
        put(next) {
            const prev = this.cache;
            update: if (next !== prev) {
                try {
                    if ($mol_compare_deep(prev, next))
                        break update;
                }
                catch (error) {
                    $mol_fail_log(error);
                }
                if ($mol_owning_check(this, prev)) {
                    prev.destructor();
                }
                if ($mol_owning_catch(this, next)) {
                    try {
                        next[Symbol.toStringTag] = this[Symbol.toStringTag];
                    }
                    catch {
                        Object.defineProperty(next, Symbol.toStringTag, { value: this[Symbol.toStringTag] });
                    }
                }
                if (!this.sub_empty)
                    this.emit();
            }
            this.cache = next;
            this.cursor = $mol_wire_cursor.fresh;
            if ($mol_promise_like(next))
                return next;
            this.complete_pubs();
            return next;
        }
    }
    __decorate([
        $mol_wire_method
    ], $mol_wire_atom.prototype, "resync", null);
    __decorate([
        $mol_wire_method
    ], $mol_wire_atom.prototype, "once", null);
    $.$mol_wire_atom = $mol_wire_atom;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_solo(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const descr2 = {
            ...descr,
            value: function (...args) {
                let atom = $mol_wire_atom.solo(this, orig);
                if ((args.length === 0) || (args[0] === undefined)) {
                    if (!$mol_wire_fiber.warm)
                        return atom.result();
                    if ($mol_wire_auto()?.temp) {
                        return atom.once();
                    }
                    else {
                        return atom.sync();
                    }
                }
                return atom.resync(args);
            }
        };
        Reflect.defineProperty(descr2.value, 'name', { value: orig.name + ' ' });
        Reflect.defineProperty(descr2.value, 'length', { value: orig.length });
        Object.assign(descr2.value, { orig });
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_solo = $mol_wire_solo;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_plex(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const descr2 = {
            ...descr,
            value: function (...args) {
                let atom = $mol_wire_atom.plex(this, orig, args[0]);
                if ((args.length === 1) || (args[1] === undefined)) {
                    if (!$mol_wire_fiber.warm)
                        return atom.result();
                    if ($mol_wire_auto()?.temp) {
                        return atom.once();
                    }
                    else {
                        return atom.sync();
                    }
                }
                return atom.resync(args);
            }
        };
        Reflect.defineProperty(descr2.value, 'name', { value: orig.name + ' ' });
        Reflect.defineProperty(descr2.value, 'length', { value: orig.length });
        Object.assign(descr2.value, { orig });
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_plex = $mol_wire_plex;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_mem = $mol_wire_solo;
    $.$mol_mem_key = $mol_wire_plex;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_solid() {
        let current = $mol_wire_auto();
        if (current.temp)
            current = current.host;
        if (current.reap !== nothing) {
            current?.sub_on(sub, sub.data.length);
        }
        current.reap = nothing;
    }
    $.$mol_wire_solid = $mol_wire_solid;
    const nothing = () => { };
    const sub = new $mol_wire_pub_sub;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_mem_persist = $mol_wire_solid;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_probe(task, def) {
        const warm = $mol_wire_fiber.warm;
        try {
            $mol_wire_fiber.warm = false;
            const res = task();
            if (res === undefined)
                return def;
            return res;
        }
        finally {
            $mol_wire_fiber.warm = warm;
        }
    }
    $.$mol_wire_probe = $mol_wire_probe;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_mem_cached = $mol_wire_probe;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const factories = new WeakMap();
    function factory(val) {
        let make = factories.get(val);
        if (make)
            return make;
        make = $mol_func_name_from((...args) => new val(...args), val);
        factories.set(val, make);
        return make;
    }
    const getters = new WeakMap();
    function get_prop(host, field) {
        let props = getters.get(host);
        let get_val = props?.[field];
        if (get_val)
            return get_val;
        get_val = (next) => {
            if (next !== undefined)
                host[field] = next;
            return host[field];
        };
        Object.defineProperty(get_val, 'name', { value: field });
        if (!props) {
            props = {};
            getters.set(host, props);
        }
        props[field] = get_val;
        return get_val;
    }
    function $mol_wire_sync(obj) {
        return new Proxy(obj, {
            get(obj, field) {
                let val = obj[field];
                const temp = $mol_wire_task.getter(typeof val === 'function' ? val : get_prop(obj, field));
                if (typeof val !== 'function')
                    return temp(obj, []).sync();
                return function $mol_wire_sync(...args) {
                    const fiber = temp(obj, args);
                    return fiber.sync();
                };
            },
            set(obj, field, next) {
                const temp = $mol_wire_task.getter(get_prop(obj, field));
                temp(obj, [next]).sync();
                return true;
            },
            construct(obj, args) {
                const temp = $mol_wire_task.getter(factory(obj));
                return temp(obj, args).sync();
            },
            apply(obj, self, args) {
                const temp = $mol_wire_task.getter(obj);
                return temp(self, args).sync();
            },
        });
    }
    $.$mol_wire_sync = $mol_wire_sync;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_storage extends $mol_object2 {
        static native() {
            return this.$.$mol_dom_context.navigator.storage ?? {
                persisted: async () => false,
                persist: async () => false,
                estimate: async () => ({}),
                getDirectory: async () => null,
            };
        }
        static persisted(next, cache) {
            $mol_mem_persist();
            if (cache)
                return Boolean(next);
            const native = this.native();
            if (next && !$mol_mem_cached(() => this.persisted())) {
                native.persist().then(actual => {
                    setTimeout(() => this.persisted(actual, 'cache'), 5000);
                    if (actual)
                        this.$.$mol_log3_done({ place: `$mol_storage`, message: `Persist: Yes` });
                    else
                        this.$.$mol_log3_fail({ place: `$mol_storage`, message: `Persist: No` });
                });
            }
            return next ?? $mol_wire_sync(native).persisted();
        }
        static estimate() {
            return $mol_wire_sync(this.native() ?? {}).estimate();
        }
        static dir() {
            return $mol_wire_sync(this.native()).getDirectory();
        }
    }
    __decorate([
        $mol_mem
    ], $mol_storage, "native", null);
    __decorate([
        $mol_mem
    ], $mol_storage, "persisted", null);
    $.$mol_storage = $mol_storage;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_state_local extends $mol_object {
        static 'native()';
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $mol_dom_context.localStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static changes(next) { return next; }
        static value(key, next) {
            this.changes();
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null) {
                this.native().removeItem(key);
            }
            else {
                this.native().setItem(key, JSON.stringify(next));
                this.$.$mol_storage.persisted(true);
            }
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_local.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_state_local, "changes", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_local, "value", null);
    $.$mol_state_local = $mol_state_local;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    self.addEventListener('storage', event => $.$mol_state_local.changes(event));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_action = $mol_wire_method;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_crypto_salt() {
        return $mol_crypto_native.getRandomValues(new Uint8Array(16));
    }
    $.$mol_crypto_salt = $mol_crypto_salt;
    $.$mol_crypto_salt_once = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6]);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_crypto_sacred extends $mol_buffer {
        static size = 16;
        static make() {
            return this.from($mol_crypto_salt());
        }
        static from(serial) {
            if (typeof serial === 'string') {
                serial = new Uint8Array([
                    ...$mol_base64_url_decode(serial),
                ]);
            }
            if (!(serial instanceof Uint8Array)) {
                serial = new Uint8Array(serial.buffer, serial.byteOffset, serial.byteLength);
            }
            ;
            serial[0] = 0xFF;
            const sacred = super.from(serial);
            return sacred;
        }
        static async from_native(native) {
            const buf = await $mol_crypto_native.subtle.exportKey('raw', native).catch($mol_crypto_restack);
            const sacred = this.from(new Uint8Array(buf));
            sacred._native = native;
            return sacred;
        }
        constructor(buffer, byteOffset, byteLength) {
            super(buffer, byteOffset, byteLength);
            if (this.getUint8(0) !== 0xFF)
                $mol_fail(new Error('Buffer should starts with 0xFF byte'));
        }
        toString() {
            return $mol_base64_url_encode(this.asArray());
        }
        _native;
        async native() {
            return this._native ?? (this._native = await $mol_crypto_native.subtle.importKey('raw', this, {
                name: 'AES-CBC',
                length: 128,
            }, true, ['encrypt', 'decrypt']).catch($mol_crypto_restack));
        }
        async encrypt(open, salt) {
            return new Uint8Array(await $mol_crypto_native.subtle.encrypt({
                name: 'AES-CBC',
                length: 128,
                tagLength: 32,
                iv: salt,
            }, await this.native(), open).catch($mol_crypto_restack));
        }
        async decrypt(closed, salt) {
            return new Uint8Array(await $mol_crypto_native.subtle.decrypt({
                name: 'AES-CBC',
                length: 128,
                tagLength: 32,
                iv: salt,
            }, await this.native(), closed).catch($mol_crypto_restack));
        }
        async close(opened, salt) {
            if (opened.getUint8(0) !== 0xFF)
                throw new Error('Closable buffer should starts with 0xFF');
            const trimed = new Uint8Array(opened.buffer, opened.byteOffset + 1, opened.byteLength - 1);
            return this.encrypt(trimed, salt);
        }
        async open(closed, salt) {
            const trimed = await this.decrypt(closed, salt);
            if (trimed.byteLength !== closed.byteLength - 1)
                throw new Error('Length of opened buffer should be ' + (closed.byteLength - 1));
            const opened = new Uint8Array(closed.byteLength);
            opened[0] = 0xFF;
            opened.set(trimed, 1);
            return opened;
        }
    }
    __decorate([
        $mol_memo.method
    ], $mol_crypto_sacred.prototype, "toString", null);
    $.$mol_crypto_sacred = $mol_crypto_sacred;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    async function $mol_crypto_sacred_shared(priv, pub) {
        return $mol_crypto_sacred.from(new Uint8Array(await $mol_crypto_native.subtle.deriveBits({
            name: "ECDH",
            public: await pub.native_derive(),
        }, await priv.native_derive(), $mol_crypto_sacred.size * 8).catch($mol_crypto_restack)));
    }
    $.$mol_crypto_sacred_shared = $mol_crypto_sacred_shared;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $giper_baza_auth_pass extends $mol_crypto_key_public {
        static like(bin) {
            const pass = this.from(bin);
            if (pass.byteLength !== $giper_baza_auth_pass.size_bin)
                return null;
            if (pass.uint8(0) !== 0xFF)
                return null;
            return pass;
        }
        hash() {
            return $giper_baza_link.hash_bin(this);
        }
        path() {
            return `pass:${this.hash().str}`;
        }
        lord() {
            return this.hash().lord();
        }
        peer() {
            return this.hash().peer();
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), ' 👾', $mol_dev_format_auto(this.lord()), ' 🎫');
        }
    }
    __decorate([
        $mol_memo.method
    ], $giper_baza_auth_pass.prototype, "hash", null);
    __decorate([
        $mol_memo.method
    ], $giper_baza_auth_pass.prototype, "path", null);
    __decorate([
        $mol_memo.method
    ], $giper_baza_auth_pass.prototype, "lord", null);
    __decorate([
        $mol_memo.method
    ], $giper_baza_auth_pass.prototype, "peer", null);
    $.$giper_baza_auth_pass = $giper_baza_auth_pass;
    class $giper_baza_auth extends $mol_crypto_key_private {
        static current(next) {
            $mol_wire_solid();
            if (next === undefined) {
                const key = String($mol_state_local.value('$giper_baza_auth') ?? '');
                if (key)
                    return $giper_baza_auth.from(key);
            }
            if (!next)
                next = this.grab();
            $mol_state_local.value('$giper_baza_auth', next.toString());
            return next;
        }
        static embryos = [];
        static grab() {
            if (this.embryos.length)
                return this.from(this.embryos.pop());
            return $mol_wire_sync(this).generate();
        }
        static async generate() {
            for (let i = 0; i < 4096; ++i) {
                const auth = this.from(await super.generate());
                if (auth.uint8(0) !== 0xFF)
                    continue;
                if (/[æÆ]/.test(auth.pass().lord().str))
                    continue;
                return auth;
            }
            $mol_fail(new Error(`Too long key generation`));
        }
        pass() {
            return new $giper_baza_auth_pass(this.public().buffer);
        }
        secret_mutual(pub) {
            return $mol_wire_sync($mol_crypto_sacred_shared)(this, pub);
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), ' ', $mol_dev_format_auto(this.pass().lord()), ' 🔑');
        }
    }
    __decorate([
        $mol_memo.method
    ], $giper_baza_auth.prototype, "pass", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_auth.prototype, "secret_mutual", null);
    __decorate([
        $mol_mem
    ], $giper_baza_auth, "current", null);
    __decorate([
        $mol_action
    ], $giper_baza_auth, "grab", null);
    $.$giper_baza_auth = $giper_baza_auth;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_graph {
        nodes = new Set();
        edges_out = new Map();
        edges_in = new Map();
        link(from, to, edge) {
            this.link_out(from, to, edge);
            this.link_in(to, from, edge);
        }
        unlink(from, to) {
            this.edges_in.get(to)?.delete(from);
            this.edges_out.get(from)?.delete(to);
        }
        link_out(from, to, edge) {
            let pair = this.edges_out.get(from);
            if (!pair) {
                pair = new Map();
                this.edges_out.set(from, pair);
                this.nodes.add(from);
            }
            pair.set(to, edge);
            this.nodes.add(to);
        }
        link_in(to, from, edge) {
            let pair = this.edges_in.get(to);
            if (!pair) {
                pair = new Map();
                this.edges_in.set(to, pair);
                this.nodes.add(to);
            }
            pair.set(from, edge);
            this.nodes.add(to);
        }
        edge(from, to) {
            return this.edge_out(from, to) ?? this.edge_in(to, from);
        }
        edge_out(from, to) {
            return this.edges_out.get(from)?.get(to) ?? null;
        }
        edge_in(to, from) {
            return this.edges_in.get(to)?.get(from) ?? null;
        }
        acyclic(get_weight) {
            const checked = [];
            for (const start of this.nodes) {
                const path = [];
                const visit = (from) => {
                    if (checked.includes(from))
                        return Number.MAX_SAFE_INTEGER;
                    const index = path.lastIndexOf(from);
                    if (index > -1) {
                        const cycle = path.slice(index);
                        return cycle.reduce((weight, node, index) => Math.min(weight, get_weight(this.edge_out(node, cycle[(index + 1) % cycle.length]))), Number.MAX_SAFE_INTEGER);
                    }
                    path.push(from);
                    dive: try {
                        const deps = this.edges_out.get(from);
                        if (!deps)
                            break dive;
                        for (const [to, edge] of deps) {
                            if (to === from) {
                                this.unlink(from, to);
                                continue;
                            }
                            const weight_out = get_weight(edge);
                            const min = visit(to);
                            if (weight_out > min)
                                return min;
                            if (weight_out === min) {
                                this.unlink(from, to);
                                if (path.length > 1) {
                                    const enter = path[path.length - 2];
                                    this.link(enter, to, edge);
                                }
                            }
                        }
                    }
                    finally {
                        path.pop();
                    }
                    checked.push(from);
                    return Number.MAX_SAFE_INTEGER;
                };
                visit(start);
            }
        }
        get sorted() {
            const sorted = new Set();
            const visit = (node) => {
                if (sorted.has(node))
                    return;
                const deps = this.edges_out.get(node);
                if (deps) {
                    for (const [dep] of deps)
                        visit(dep);
                }
                sorted.add(node);
            };
            for (const node of this.nodes) {
                visit(node);
            }
            return sorted;
        }
        get roots() {
            const roots = [];
            for (const node of this.nodes) {
                if (this.edges_in.get(node)?.size)
                    continue;
                roots.push(node);
            }
            return roots;
        }
        nodes_depth(select) {
            const stat = new Map();
            const visit = (node, depth = 0) => {
                if (stat.has(node))
                    stat.set(node, select(depth, stat.get(node)));
                else
                    stat.set(node, depth);
                for (const kid of this.edges_out.get(node)?.keys() ?? [])
                    visit(kid, depth + 1);
            };
            for (const root of this.roots)
                visit(root);
            return stat;
        }
        depth_nodes(select) {
            const groups = [];
            for (const [node, depth] of this.nodes_depth(select).entries()) {
                if (groups[depth])
                    groups[depth].push(node);
                else
                    groups[depth] = [node];
            }
            return groups;
        }
    }
    $.$mol_graph = $mol_graph;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_time_base {
        static patterns = {};
        static formatter(pattern) {
            if (this.patterns[pattern])
                return this.patterns[pattern];
            var tokens = Object.keys(this.patterns)
                .sort()
                .reverse()
                .map((token) => token.replace(/([-+*.\[\]()\^])/g, '\\$1'));
            var lexer = RegExp('(.*?)(' + tokens.join('|') + '|$)', 'g');
            var funcs = [];
            pattern.replace(lexer, (str, text, token) => {
                if (text)
                    funcs.push(() => text);
                if (token)
                    funcs.push(this.patterns[token]);
                return str;
            });
            return this.patterns[pattern] = (arg) => {
                return funcs.reduce((res, func) => res + func(arg), '');
            };
        }
        toString(pattern) {
            const Base = this.constructor;
            const formatter = Base.formatter(pattern);
            return formatter(this);
        }
    }
    $.$mol_time_base = $mol_time_base;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_time_duration extends $mol_time_base {
        constructor(config = 0) {
            super();
            if (typeof config === 'number') {
                if (!Number.isFinite(config))
                    throw new RangeError(`Wrong ms count`);
                this.second = config / 1000;
                return;
            }
            if (typeof config === 'string') {
                if (config === 'Z') {
                    this.hour = 0;
                    this.minute = 0;
                    return;
                }
                duration: {
                    const parser = /^(-?)P(?:([+-]?\d+(?:\.\d+)?)Y)?(?:([+-]?\d+(?:\.\d+)?)M)?(?:([+-]?\d+(?:\.\d+)?)D)?(?:T(?:([+-]?\d+(?:\.\d+)?)h)?(?:([+-]?\d+(?:\.\d+)?)m)?(?:([+-]?\d+(?:\.\d+)?)s)?)?$/i;
                    const found = parser.exec(config);
                    if (!found)
                        break duration;
                    const sign = found[1] ? -1 : 1;
                    if (found[2])
                        this.year = sign * Number(found[2]);
                    if (found[3])
                        this.month = sign * Number(found[3]);
                    if (found[4])
                        this.day = sign * Number(found[4]);
                    if (found[5])
                        this.hour = sign * Number(found[5]);
                    if (found[6])
                        this.minute = sign * Number(found[6]);
                    if (found[7])
                        this.second = sign * Number(found[7]);
                    return;
                }
                offset: {
                    var parser = /^[+-](\d\d)(?::?(\d\d))?$/i;
                    var found = parser.exec(config);
                    if (!found)
                        break offset;
                    if (found[1])
                        this.hour = Number(found[1]);
                    if (found[2])
                        this.minute = Number(found[2]);
                    return;
                }
                throw new Error(`Can not parse time duration (${config})`);
            }
            this.year = config.year || 0;
            this.month = config.month || 0;
            this.day = config.day || 0;
            this.hour = config.hour || 0;
            this.minute = config.minute || 0;
            this.second = config.second || 0;
        }
        year = 0;
        month = 0;
        day = 0;
        hour = 0;
        minute = 0;
        second = 0;
        get normal() {
            let second = this.second ?? 0;
            let minute = this.minute ?? 0;
            let hour = this.hour ?? 0;
            let day = this.day ?? 0;
            minute += Math.floor(second / 60);
            second = second % 60;
            hour += Math.floor(minute / 60);
            minute = minute % 60;
            day += Math.floor(hour / 24);
            hour = hour % 24;
            return new $mol_time_duration({
                year: this.year,
                month: this.month,
                day: day,
                hour: hour,
                minute: minute,
                second: second,
            });
        }
        summ(config) {
            const duration = new $mol_time_duration(config);
            return new $mol_time_duration({
                year: this.year + duration.year,
                month: this.month + duration.month,
                day: this.day + duration.day,
                hour: this.hour + duration.hour,
                minute: this.minute + duration.minute,
                second: this.second + duration.second,
            });
        }
        mult(numb) {
            return new $mol_time_duration({
                year: this.year && this.year * numb,
                month: this.month && this.month * numb,
                day: this.day && this.day * numb,
                hour: this.hour && this.hour * numb,
                minute: this.minute && this.minute * numb,
                second: this.second && this.second * numb,
            });
        }
        count(config) {
            const duration = new $mol_time_duration(config);
            return this.valueOf() / duration.valueOf();
        }
        valueOf() {
            var day = this.year * 365 + this.month * 30.4 + this.day;
            var second = ((day * 24 + this.hour) * 60 + this.minute) * 60 + this.second;
            return second * 1000;
        }
        toJSON() { return this.toString(); }
        toString(pattern = 'P#Y#M#DT#h#m#s') {
            return super.toString(pattern);
        }
        [Symbol.toPrimitive](mode) {
            return mode === 'number' ? this.valueOf() : this.toString();
        }
        static patterns = {
            '#Y': (duration) => {
                if (!duration.year)
                    return '';
                return duration.year + 'Y';
            },
            '#M': (duration) => {
                if (!duration.month)
                    return '';
                return duration.month + 'M';
            },
            '#D': (duration) => {
                if (!duration.day)
                    return '';
                return duration.day + 'D';
            },
            '#h': (duration) => {
                if (!duration.hour)
                    return '';
                return duration.hour + 'H';
            },
            '#m': (duration) => {
                if (!duration.minute)
                    return '';
                return duration.minute + 'M';
            },
            '#s': (duration) => {
                if (!duration.second)
                    return '';
                return duration.second + 'S';
            },
            'hh': (moment) => {
                if (moment.hour == null)
                    return '';
                return String(100 + moment.hour).slice(1);
            },
            'h': (moment) => {
                if (moment.hour == null)
                    return '';
                return String(moment.hour);
            },
            ':mm': (moment) => {
                if (moment.minute == null)
                    return '';
                return ':' + $mol_time_moment.patterns['mm'](moment);
            },
            'mm': (moment) => {
                if (moment.minute == null)
                    return '';
                return String(100 + moment.minute).slice(1);
            },
            'm': (moment) => {
                if (moment.minute == null)
                    return '';
                return String(moment.minute);
            },
            ':ss': (moment) => {
                if (moment.second == null)
                    return '';
                return ':' + $mol_time_moment.patterns['ss'](moment);
            },
            'ss': (moment) => {
                if (moment.second == null)
                    return '';
                return String(100 + moment.second | 0).slice(1);
            },
            's': (moment) => {
                if (moment.second == null)
                    return '';
                return String(moment.second | 0);
            },
            '.sss': (moment) => {
                if (moment.second == null)
                    return '';
                return '.' + $mol_time_moment.patterns['sss'](moment);
            },
            'sss': (moment) => {
                if (moment.second == null)
                    return '';
                const millisecond = (moment.second - Math.trunc(moment.second)).toFixed(3);
                return millisecond.slice(2);
            },
        };
    }
    $.$mol_time_duration = $mol_time_duration;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let $mol_time_moment_weekdays;
    (function ($mol_time_moment_weekdays) {
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["monday"] = 0] = "monday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["tuesday"] = 1] = "tuesday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["wednesday"] = 2] = "wednesday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["thursday"] = 3] = "thursday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["friday"] = 4] = "friday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["saturday"] = 5] = "saturday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["sunday"] = 6] = "sunday";
    })($mol_time_moment_weekdays = $.$mol_time_moment_weekdays || ($.$mol_time_moment_weekdays = {}));
    function numb(str, max) {
        const numb = Number(str);
        if (numb < max)
            return numb;
        $mol_fail(new Error(`Wrong time component ${str}`));
    }
    class $mol_time_moment extends $mol_time_base {
        constructor(config = new Date) {
            super();
            if (typeof config === 'number') {
                config = new Date(config);
                if (Number.isNaN(config.valueOf()))
                    throw new RangeError(`Wrong ms count`);
            }
            if (typeof config === 'string') {
                const parsed = /^(?:(\d\d?\d?\d?)(?:-?(\d\d?)(?:-?(\d\d?))?)?)?(?:[T ](?:(\d\d?)(?::?(\d\d?)(?::?(\d\d?(?:\.\d+)?))?)?)?(Z|[\+\-]\d\d?(?::?(?:\d\d?)?)?)?)?$/.exec(config);
                if (!parsed)
                    throw new Error(`Can not parse time moment (${config})`);
                if (parsed[1])
                    this.year = numb(parsed[1], 9999);
                if (parsed[2])
                    this.month = numb(parsed[2], 13) - 1;
                if (parsed[3])
                    this.day = numb(parsed[3], 32) - 1;
                if (parsed[4])
                    this.hour = numb(parsed[4], 60);
                if (parsed[5])
                    this.minute = numb(parsed[5], 60);
                if (parsed[6])
                    this.second = numb(parsed[6], 60);
                if (parsed[7])
                    this.offset = new $mol_time_duration(parsed[7]);
                return;
            }
            if (config instanceof Date) {
                this.year = config.getFullYear();
                this.month = config.getMonth();
                this.day = config.getDate() - 1;
                this.hour = config.getHours();
                this.minute = config.getMinutes();
                this.second = config.getSeconds() + config.getMilliseconds() / 1000;
                const offset = -config.getTimezoneOffset();
                this.offset = new $mol_time_duration({
                    hour: (offset < 0) ? Math.ceil(offset / 60) : Math.floor(offset / 60),
                    minute: offset % 60
                });
                return;
            }
            this.year = config.year;
            this.month = config.month;
            this.day = config.day;
            this.hour = config.hour;
            this.minute = config.minute;
            this.second = config.second;
            this.offset = config.offset == null ? config.offset : new $mol_time_duration(config.offset);
        }
        year;
        month;
        day;
        hour;
        minute;
        second;
        offset;
        get weekday() {
            return (this.native.getDay() + 6) % 7;
        }
        _native;
        get native() {
            if (this._native)
                return this._native;
            const second = Math.floor(this.second ?? 0);
            const current = new Date();
            const native = new Date(this.year ?? current.getFullYear(), this.month ?? (this.year === undefined ? current.getMonth() : 0), (this.day ?? (this.year === undefined && this.month === undefined ? current.getDate() - 1 : 0)) + 1, this.hour ?? 0, this.minute ?? 0, second, Math.floor(((this.second ?? 0) - second) * 1000));
            const offset = -native.getTimezoneOffset();
            shift: if (this.offset) {
                const target = this.offset.count('PT1m');
                if (target === offset)
                    break shift;
                native.setMinutes(native.getMinutes() + offset - target);
            }
            return this._native = native;
        }
        _normal;
        get normal() {
            if (this._normal)
                return this._normal;
            const moment = new $mol_time_moment(this.native).toOffset(this.offset);
            return this._normal = new $mol_time_moment({
                year: this.year === undefined ? undefined : moment.year,
                month: this.month === undefined ? undefined : moment.month,
                day: this.day === undefined ? undefined : moment.day,
                hour: this.hour === undefined ? undefined : moment.hour,
                minute: this.minute === undefined ? undefined : moment.minute,
                second: this.second === undefined ? undefined : moment.second,
                offset: this.offset === undefined ? undefined : moment.offset,
            });
        }
        merge(config) {
            const moment = new $mol_time_moment(config);
            return new $mol_time_moment({
                year: moment.year === undefined ? this.year : moment.year,
                month: moment.month === undefined ? this.month : moment.month,
                day: moment.day === undefined ? this.day : moment.day,
                hour: moment.hour === undefined ? this.hour : moment.hour,
                minute: moment.minute === undefined ? this.minute : moment.minute,
                second: moment.second === undefined ? this.second : moment.second,
                offset: moment.offset === undefined ? this.offset : moment.offset,
            });
        }
        shift(config) {
            const duration = new $mol_time_duration(config);
            const moment = new $mol_time_moment().merge({
                year: this.year ?? 0,
                month: this.month ?? 0,
                day: this.day ?? 0,
                hour: this.hour ?? 0,
                minute: this.minute ?? 0,
                second: this.second ?? 0,
                offset: this.offset ?? 0
            });
            const second = moment.second + (duration.second ?? 0);
            const native = new Date(moment.year + (duration.year ?? 0), moment.month + (duration.month ?? 0), moment.day + 1 + (duration.day ?? 0), moment.hour + (duration.hour ?? 0), moment.minute + (duration.minute ?? 0), Math.floor(second), (second - Math.floor(second)) * 1000);
            if (isNaN(native.valueOf()))
                throw new Error('Wrong time');
            return new $mol_time_moment({
                year: this.year === undefined ? undefined : native.getFullYear(),
                month: this.month === undefined ? undefined : native.getMonth(),
                day: this.day === undefined ? undefined : native.getDate() - 1,
                hour: this.hour === undefined ? undefined : native.getHours(),
                minute: this.minute === undefined ? undefined : native.getMinutes(),
                second: this.second === undefined ? undefined : native.getSeconds() + native.getMilliseconds() / 1000,
                offset: this.offset,
            });
        }
        mask(config) {
            const mask = new $mol_time_moment(config);
            return new $mol_time_moment({
                year: mask.year === undefined ? undefined : this.year,
                month: mask.month === undefined ? undefined : this.month,
                day: mask.day === undefined ? undefined : this.day,
                hour: mask.hour === undefined ? undefined : this.hour,
                minute: mask.minute === undefined ? undefined : this.minute,
                second: mask.second === undefined ? undefined : this.second,
                offset: mask.offset === undefined ? undefined : this.offset,
            });
        }
        toOffset(config = new $mol_time_moment().offset) {
            const duration = new $mol_time_duration(config);
            const offset = this.offset || new $mol_time_moment().offset;
            let with_time = new $mol_time_moment('0001-01-01T00:00:00').merge(this);
            const moment = with_time.shift(duration.summ(offset.mult(-1)));
            return moment.merge({ offset: duration });
        }
        valueOf() { return this.native.getTime(); }
        toJSON() { return this.toString(); }
        toString(pattern = 'YYYY-MM-DDThh:mm:ss.sssZ') {
            return super.toString(pattern);
        }
        [Symbol.toPrimitive](mode) {
            return mode === 'number' ? this.valueOf() : this.toString();
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), ' ', $mol_dev_format_accent(this.toString('YYYY-MM-DD hh:mm:ss.sss Z')));
        }
        static patterns = {
            'YYYY': (moment) => {
                if (moment.year == null)
                    return '';
                return String(moment.year);
            },
            'AD': (moment) => {
                if (moment.year == null)
                    return '';
                return String(Math.floor(moment.year / 100) + 1);
            },
            'YY': (moment) => {
                if (moment.year == null)
                    return '';
                return String(moment.year % 100);
            },
            'Month': (pattern => (moment) => {
                if (moment.month == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { month: 'long' })),
            'DD Month': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['DD'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Month'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: '2-digit', month: 'long' })),
            'D Month': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['D'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Month'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: 'numeric', month: 'long' })),
            'Mon': (pattern => (moment) => {
                if (moment.month == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { month: 'short' })),
            'DD Mon': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['DD'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Mon'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: '2-digit', month: 'short' })),
            'D Mon': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['D'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Mon'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: 'numeric', month: 'short' })),
            '-MM': (moment) => {
                if (moment.month == null)
                    return '';
                return '-' + $mol_time_moment.patterns['MM'](moment);
            },
            'MM': (moment) => {
                if (moment.month == null)
                    return '';
                return String(100 + moment.month + 1).slice(1);
            },
            'M': (moment) => {
                if (moment.month == null)
                    return '';
                return String(moment.month + 1);
            },
            'WeekDay': (pattern => (moment) => {
                if (moment.day == null)
                    return '';
                if (moment.month == null)
                    return '';
                if (moment.year == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { weekday: 'long' })),
            'WD': (pattern => (moment) => {
                if (moment.day == null)
                    return '';
                if (moment.month == null)
                    return '';
                if (moment.year == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { weekday: 'short' })),
            '-DD': (moment) => {
                if (moment.day == null)
                    return '';
                return '-' + $mol_time_moment.patterns['DD'](moment);
            },
            'DD': (moment) => {
                if (moment.day == null)
                    return '';
                return String(100 + moment.day + 1).slice(1);
            },
            'D': (moment) => {
                if (moment.day == null)
                    return '';
                return String(moment.day + 1);
            },
            'Thh': (moment) => {
                if (moment.hour == null)
                    return '';
                return 'T' + $mol_time_moment.patterns['hh'](moment);
            },
            'hh': (moment) => {
                if (moment.hour == null)
                    return '';
                return String(100 + moment.hour).slice(1);
            },
            'h': (moment) => {
                if (moment.hour == null)
                    return '';
                return String(moment.hour);
            },
            ':mm': (moment) => {
                if (moment.minute == null)
                    return '';
                return ':' + $mol_time_moment.patterns['mm'](moment);
            },
            'mm': (moment) => {
                if (moment.minute == null)
                    return '';
                return String(100 + moment.minute).slice(1);
            },
            'm': (moment) => {
                if (moment.minute == null)
                    return '';
                return String(moment.minute);
            },
            ':ss': (moment) => {
                if (moment.second == null)
                    return '';
                return ':' + $mol_time_moment.patterns['ss'](moment);
            },
            'ss': (moment) => {
                if (moment.second == null)
                    return '';
                return String(100 + moment.second | 0).slice(1);
            },
            's': (moment) => {
                if (moment.second == null)
                    return '';
                return String(moment.second | 0);
            },
            '.sss': (moment) => {
                if (moment.second == null)
                    return '';
                if (moment.second === (moment.second | 0))
                    return '';
                return '.' + $mol_time_moment.patterns['sss'](moment);
            },
            'sss': (moment) => {
                if (moment.second == null)
                    return '';
                const millisecond = (moment.second - Math.trunc(moment.second)).toFixed(3);
                return millisecond.slice(2);
            },
            'Z': (moment) => {
                const offset = moment.offset;
                if (!offset)
                    return '';
                let hour = offset.hour;
                let sign = '+';
                if (hour < 0) {
                    sign = '-';
                    hour = -hour;
                }
                return sign + String(100 + hour).slice(1) + ':' + String(100 + offset.minute).slice(1);
            }
        };
    }
    $.$mol_time_moment = $mol_time_moment;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    function $mol_data_tagged(config) {
        return config;
    }
    $.$mol_data_tagged = $mol_data_tagged;
})($ || ($ = {}));

;
"use strict";

;
"use strict";

;
"use strict";
var $;
(function ($) {
    function $mol_data_setup(value, config) {
        return Object.assign(value, {
            config,
            Value: null
        });
    }
    $.$mol_data_setup = $mol_data_setup;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_func_is_class(func) {
        return Object.getOwnPropertyDescriptor(func, 'prototype')?.writable === false;
    }
    $.$mol_func_is_class = $mol_func_is_class;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    function $mol_data_pipe(...funcs) {
        return $mol_data_setup(function (input) {
            let value = input;
            for (const func of funcs)
                value = $mol_func_is_class(func) ? new func(value) : func.call(this, value);
            return value;
        }, { funcs });
    }
    $.$mol_data_pipe = $mol_data_pipe;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function cause_serialize(cause) {
        return JSON.stringify(cause, null, '  ')
            .replace(/\(/, '<')
            .replace(/\)/, ' >');
    }
    function frame_normalize(frame) {
        return (typeof frame === 'string' ? frame : cause_serialize(frame))
            .trim()
            .replace(/at /gm, '   at ')
            .replace(/^(?!    +at )(.*)/gm, '    at | $1 (#)');
    }
    class $mol_error_mix extends AggregateError {
        cause;
        name = $$.$mol_func_name(this.constructor).replace(/^\$/, '') + '_Error';
        constructor(message, cause = {}, ...errors) {
            super(errors, message, { cause });
            this.cause = cause;
            const desc = Object.getOwnPropertyDescriptor(this, 'stack');
            const stack_get = () => desc?.get?.() ?? super.stack ?? desc?.value ?? this.message;
            Object.defineProperty(this, 'stack', {
                get: () => stack_get() + '\n' + [
                    this.cause ?? 'no cause',
                    ...this.errors.flatMap(e => [
                        String(e.stack),
                        ...e instanceof $mol_error_mix || !e.cause ? [] : [e.cause]
                    ])
                ].map(frame_normalize).join('\n')
            });
            Object.defineProperty(this, 'cause', {
                get: () => cause
            });
        }
        static [Symbol.toPrimitive]() {
            return this.toString();
        }
        static toString() {
            return $$.$mol_func_name(this);
        }
        static make(...params) {
            return new this(...params);
        }
    }
    $.$mol_error_mix = $mol_error_mix;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_data_error extends $mol_error_mix {
    }
    $.$mol_data_error = $mol_data_error;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_data_number = (val) => {
        if (typeof val === 'number')
            return val;
        return $mol_fail(new $mol_data_error(`${val} is not a number`));
    };
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_data_integer(val) {
        const val2 = $mol_data_number(val);
        if (Math.floor(val2) === val2)
            return val2;
        return $mol_fail(new $mol_data_error(`${val} is not an integer`));
    }
    $.$mol_data_integer = $mol_data_integer;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$giper_baza_rank = $mol_data_tagged({
        $giper_baza_rank: $mol_data_pipe($mol_data_integer, (rank) => {
            if (rank >= $.$giper_baza_rank_deny && rank <= $.$giper_baza_rank_rule)
                return rank;
            $mol_fail(new $mol_data_error(`${rank} is out of Ran range`));
        }),
    }).$giper_baza_rank;
    function $giper_baza_rank_make(tier, fame) {
        return ($giper_baza_rank_tier[tier] | $giper_baza_rank_rate[fame]);
    }
    $.$giper_baza_rank_make = $giper_baza_rank_make;
    let $giper_baza_rank_tier;
    (function ($giper_baza_rank_tier) {
        $giper_baza_rank_tier[$giper_baza_rank_tier["deny"] = 0] = "deny";
        $giper_baza_rank_tier[$giper_baza_rank_tier["read"] = 16] = "read";
        $giper_baza_rank_tier[$giper_baza_rank_tier["post"] = 48] = "post";
        $giper_baza_rank_tier[$giper_baza_rank_tier["pull"] = 112] = "pull";
        $giper_baza_rank_tier[$giper_baza_rank_tier["rule"] = 240] = "rule";
    })($giper_baza_rank_tier = $.$giper_baza_rank_tier || ($.$giper_baza_rank_tier = {}));
    function $giper_baza_rank_tier_of(rank) {
        return rank & 0b1111_0000;
    }
    $.$giper_baza_rank_tier_of = $giper_baza_rank_tier_of;
    let $giper_baza_rank_rate;
    (function ($giper_baza_rank_rate) {
        $giper_baza_rank_rate[$giper_baza_rank_rate["late"] = 0] = "late";
        $giper_baza_rank_rate[$giper_baza_rank_rate["long"] = 3] = "long";
        $giper_baza_rank_rate[$giper_baza_rank_rate["slow"] = 7] = "slow";
        $giper_baza_rank_rate[$giper_baza_rank_rate["fast"] = 11] = "fast";
        $giper_baza_rank_rate[$giper_baza_rank_rate["just"] = 15] = "just";
    })($giper_baza_rank_rate = $.$giper_baza_rank_rate || ($.$giper_baza_rank_rate = {}));
    function $giper_baza_rank_rate_of(rank) {
        return rank & 0b0000_1111;
    }
    $.$giper_baza_rank_rate_of = $giper_baza_rank_rate_of;
    $.$giper_baza_rank_deny = $giper_baza_rank_make('deny', 'late');
    $.$giper_baza_rank_read = $giper_baza_rank_make('read', 'late');
    $.$giper_baza_rank_rule = $giper_baza_rank_make('rule', 'just');
    function $giper_baza_rank_pull(rate) {
        return $giper_baza_rank_make('pull', rate);
    }
    $.$giper_baza_rank_pull = $giper_baza_rank_pull;
    function $giper_baza_rank_post(rate) {
        return $giper_baza_rank_make('post', rate);
    }
    $.$giper_baza_rank_post = $giper_baza_rank_post;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $giper_baza_time_moment(time) {
        const stamp = time * 1000;
        return new $mol_time_moment(stamp);
    }
    $.$giper_baza_time_moment = $giper_baza_time_moment;
    function $giper_baza_time_dump(time) {
        return $giper_baza_time_moment(time).toString('YYYY-MM-DD hh:mm:ss');
    }
    $.$giper_baza_time_dump = $giper_baza_time_dump;
    function $giper_baza_time_now() {
        return now || Math.floor(Date.now() / 1000);
    }
    $.$giper_baza_time_now = $giper_baza_time_now;
    let now = 0;
    function $giper_baza_time_freeze(task) {
        if (now)
            return task();
        now = $giper_baza_time_now();
        try {
            return task();
        }
        finally {
            now = 0;
        }
    }
    $.$giper_baza_time_freeze = $giper_baza_time_freeze;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $giper_baza_face extends Object {
        time;
        tick;
        summ;
        static length() {
            return 16;
        }
        constructor(time = 0, tick = 0, summ = 0) {
            super();
            this.time = time;
            this.tick = tick;
            this.summ = summ;
        }
        clone() {
            return new $giper_baza_face(this.time, this.tick, this.summ);
        }
        get moment() {
            return $giper_baza_time_moment(this.time);
        }
        get time_tick() {
            return this.time * 2 ** 16 + this.tick;
        }
        sync_time(time, tick) {
            if (this.time < time) {
                this.time = time;
                this.tick = tick;
            }
            else if (this.time === time && this.tick < tick) {
                this.tick = tick;
            }
        }
        sync_summ(summ) {
            if (this.summ < summ)
                this.summ = summ;
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), $mol_dev_format_shade(' ', $giper_baza_time_dump(this.time), ' +', this.tick, ' %', this.summ));
        }
    }
    $.$giper_baza_face = $giper_baza_face;
    class $giper_baza_face_map extends Map {
        stat = new $giper_baza_face;
        constructor(entries) {
            super();
            if (entries)
                this.sync(entries);
        }
        clone() {
            return new $giper_baza_face_map(this);
        }
        sync(right) {
            if (right instanceof $giper_baza_face_map)
                this.stat = right.stat.clone();
            for (const [peer, face] of right) {
                this.peer_time(peer, face.time, face.tick);
                this.peer_summ(peer, face.summ);
            }
        }
        peer_time(peer, time, tick) {
            this.stat.sync_time(time, tick);
            let prev = this.get(peer);
            if (prev)
                prev.sync_time(time, tick);
            else
                this.set(peer, new $giper_baza_face(time, tick));
        }
        peer_summ(peer, summ) {
            this.stat.sync_summ(summ);
            let prev = this.get(peer);
            if (prev)
                prev.sync_summ(summ);
            else
                this.set(peer, new $giper_baza_face(0, 0, summ));
        }
        peer_summ_shift(peer, diff) {
            this.peer_summ(peer, (this.get(peer)?.summ ?? 0) + diff);
        }
        tick() {
            const now = $giper_baza_time_now();
            if (this.stat.time < now) {
                this.stat.time = now;
                this.stat.tick = 0;
            }
            else {
                this.stat.tick += 1;
                this.stat.tick %= 2 ** 16;
                if (!this.stat.tick)
                    ++this.stat.time;
            }
            return this.stat;
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), ' ', $mol_dev_format_auto(this.stat));
        }
    }
    __decorate([
        $mol_action
    ], $giper_baza_face_map.prototype, "tick", null);
    $.$giper_baza_face_map = $giper_baza_face_map;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_wire_dict extends Map {
        pub = new $mol_wire_pub;
        has(key) {
            this.pub.promote();
            return super.has(key);
        }
        get(key) {
            this.pub.promote();
            return super.get(key);
        }
        entries() {
            this.pub.promote();
            return super.entries();
        }
        keys() {
            this.pub.promote();
            return super.keys();
        }
        values() {
            this.pub.promote();
            return super.values();
        }
        forEach(task, self) {
            this.pub.promote();
            super.forEach(task, self);
        }
        [Symbol.iterator]() {
            this.pub.promote();
            return super[Symbol.iterator]();
        }
        get size() {
            this.pub.promote();
            return super.size;
        }
        set(key, value) {
            if (super.get(key) === value)
                return this;
            super.set(key, value);
            this.pub?.emit();
            return this;
        }
        delete(key) {
            const res = super.delete(key);
            if (res)
                this.pub.emit();
            return res;
        }
        clear() {
            if (!super.size)
                return;
            super.clear();
            this.pub.emit();
        }
        item(key, next) {
            if (next === undefined)
                return this.get(key) ?? null;
            if (next === null)
                this.delete(key);
            else
                this.set(key, next);
            return next;
        }
    }
    $.$mol_wire_dict = $mol_wire_dict;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_hash_numbers(buff, seed = 0) {
        let h1 = 0xdeadbeef ^ seed;
        let h2 = 0x41c6ce57 ^ seed;
        for (let i = 0; i < buff.length; ++i) {
            const item = buff[i];
            h1 = Math.imul(h1 ^ item, 2654435761);
            h2 = Math.imul(h2 ^ item, 1597334677);
        }
        h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
        h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
        return 4294967296 * (((1 << 16) - 1) & h2) + (h1 >>> 0);
    }
    $.$mol_hash_numbers = $mol_hash_numbers;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $giper_baza_fund extends $mol_object {
        item_make;
        constructor(item_make) {
            super();
            this.item_make = item_make;
        }
        Item(head) {
            return this.item_make(head);
        }
        Data() {
            return this.Item($giper_baza_land_root.data);
        }
        Tine() {
            return this.Item($giper_baza_land_root.tine);
        }
    }
    __decorate([
        $mol_mem_key
    ], $giper_baza_fund.prototype, "Item", null);
    $.$giper_baza_fund = $giper_baza_fund;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_const(value) {
        const getter = (() => value);
        getter['()'] = value;
        getter[Symbol.toStringTag] = value;
        getter[$mol_dev_format_head] = () => $mol_dev_format_span({}, '()=> ', $mol_dev_format_auto(value));
        return getter;
    }
    $.$mol_const = $mol_const;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    class $mol_state_arg extends $mol_object {
        prefix;
        static href(next) {
            if (next === undefined) {
                next = $mol_dom.location.href;
            }
            else if (!/^about:srcdoc/.test(next)) {
                new $mol_after_frame(() => {
                    const next = this.href();
                    const prev = $mol_dom.location.href;
                    if (next === prev)
                        return;
                    const history = $mol_dom.history;
                    history.replaceState(history.state, $mol_dom.document.title, next);
                });
            }
            if ($mol_dom.parent && ($mol_dom.parent !== $mol_dom.self)) {
                $mol_dom.parent.postMessage(['hashchange', next], '*');
            }
            return next;
        }
        static href_normal() {
            return this.link({});
        }
        static href_absolute() {
            return new URL(this.href(), $mol_dom.location.href).toString();
        }
        static dict(next) {
            var href = this.href(next && this.make_link(next)).split(/#!?/)[1] || '';
            var chunks = href.split(this.separator);
            var params = {};
            chunks.forEach(chunk => {
                if (!chunk)
                    return;
                var vals = chunk.split('=').map(decodeURIComponent);
                params[vals.shift()] = vals.join('=');
            });
            return params;
        }
        static dict_cut(except) {
            const dict = this.dict();
            const cut = {};
            for (const key in dict) {
                if (except.indexOf(key) >= 0)
                    break;
                cut[key] = dict[key];
            }
            return cut;
        }
        static value(key, next) {
            const nextDict = (next === void 0) ? void 0 : { ...this.dict(), [key]: next };
            const next2 = this.dict(nextDict)[key];
            return (next2 == null) ? null : next2;
        }
        static link(next) {
            return this.make_link({
                ...this.dict_cut(Object.keys(next)),
                ...next,
            });
        }
        static prolog = '!';
        static separator = '/';
        static make_link(next) {
            const chunks = [];
            for (let key in next) {
                if (null == next[key])
                    continue;
                const val = next[key];
                chunks.push([key].concat(val ? [val] : []).map(this.encode).join('='));
            }
            return new URL('#' + this.prolog + chunks.join(this.separator), this.href_absolute()).toString();
        }
        static commit() {
            $mol_dom.history.pushState($mol_dom.history.state, $mol_dom.document.title, this.href());
        }
        static go(next) {
            $mol_dom.location.href = this.link(next);
        }
        static encode(str) {
            return encodeURIComponent(str).replace(/\(/g, '%28').replace(/\)/g, '%29');
        }
        constructor(prefix = '') {
            super();
            this.prefix = prefix;
        }
        value(key, next) {
            return this.constructor.value(this.prefix + key, next);
        }
        sub(postfix) {
            return new this.constructor(this.prefix + postfix + '.');
        }
        link(next) {
            var prefix = this.prefix;
            var dict = {};
            for (var key in next) {
                dict[prefix + key] = next[key];
            }
            return this.constructor.link(dict);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href_normal", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href_absolute", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "dict", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "dict_cut", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "value", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "make_link", null);
    __decorate([
        $mol_action
    ], $mol_state_arg, "commit", null);
    __decorate([
        $mol_action
    ], $mol_state_arg, "go", null);
    $.$mol_state_arg = $mol_state_arg;
    function $mol_state_arg_change() {
        $mol_state_arg.href($mol_dom.location.href);
    }
    self.addEventListener('hashchange', $mol_state_arg_change);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $giper_baza_log() {
        return this.$mol_state_arg.value('giper_baza_log') !== null;
    }
    $.$giper_baza_log = $giper_baza_log;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$giper_baza_pack_four_code = $mol_charset_encode('LAND');
    $.$giper_baza_pack_head_size = 4 + 12 + 6 + 2;
    class $giper_baza_pack_part extends Object {
        units;
        faces;
        constructor(units = [], faces = new $giper_baza_face_map) {
            super();
            this.units = units;
            this.faces = faces;
        }
        static from(units, faces = new $giper_baza_face_map) {
            return new this(units, faces);
        }
        *[Symbol.iterator]() {
            return {
                units: this.units,
                faces: this.faces,
            };
        }
    }
    $.$giper_baza_pack_part = $giper_baza_pack_part;
    class $giper_baza_pack extends $mol_buffer {
        toBlob() {
            return new Blob([this], { type: 'application/vnd.giper_baza_pack.v1' });
        }
        parts(offsets) {
            const parts = new Map;
            let part = null;
            const buf = this.asArray();
            for (let offset = 0; offset < this.byteLength;) {
                const kind = this.uint8(offset);
                switch ($giper_baza_slot_kind[kind]) {
                    case 'free': {
                        offset += 8;
                        continue;
                    }
                    case 'land': {
                        const faces = new $giper_baza_face_map;
                        const link = $giper_baza_link.from_bin(new Uint8Array(buf.buffer, buf.byteOffset + offset + 4, 18));
                        const size = this.uint16(offset + 22);
                        offset += 24;
                        for (let i = 0; i < size; ++i) {
                            const peer = $giper_baza_link.from_bin(new Uint8Array(buf.buffer, buf.byteOffset + offset, 6));
                            const tick = this.uint16(offset + 6);
                            const time = this.uint32(offset + 8);
                            const summ = this.uint32(offset + 12);
                            faces.peer_time(peer.str, time, tick);
                            faces.peer_summ(peer.str, summ);
                            offset += $giper_baza_face.length();
                        }
                        parts.set(link.str, part = new $giper_baza_pack_part([], faces));
                        continue;
                    }
                    case 'pass': {
                        if (!part)
                            $mol_fail(new Error('Land is undefined'));
                        const pass = $giper_baza_auth_pass.from(buf.slice(offset, offset + 64));
                        offsets?.set(pass, offset);
                        part.units.push(pass);
                        offset += pass.byteLength;
                        continue;
                    }
                    case 'seal': {
                        if (!part)
                            $mol_fail(new Error('Land is undefined'));
                        const size = new $giper_baza_unit_seal(this.buffer, this.byteOffset + offset, this.byteLength - offset).size();
                        const length = $giper_baza_unit_seal.length(size);
                        const seal = $giper_baza_unit_seal.from(buf.slice(offset, offset + length));
                        offsets?.set(seal, offset);
                        part.units.push(seal);
                        offset += seal.byteLength;
                        continue;
                    }
                    case 'sand': {
                        if (!part)
                            $mol_fail(new Error('Land is undefined'));
                        const size = new $giper_baza_unit_sand(this.buffer, this.byteOffset + offset, this.byteLength - offset).size();
                        const length_sand = $giper_baza_unit_sand.length(size);
                        const length_ball = $giper_baza_unit_sand.length_ball(size);
                        const sand = $giper_baza_unit_sand.from(buf.slice(offset, offset + length_sand));
                        offsets?.set(sand, offset);
                        offset += sand.byteLength;
                        if (length_ball) {
                            sand._ball = buf.slice(offset, offset += length_ball);
                        }
                        part.units.push(sand);
                        continue;
                    }
                    case 'gift': {
                        if (!part)
                            $mol_fail(new Error('Land is undefined'));
                        const length = $giper_baza_unit_gift.length();
                        const gift = $giper_baza_unit_gift.from(buf.slice(offset, offset + length));
                        offsets?.set(gift, offset);
                        part.units.push(gift);
                        offset += gift.byteLength;
                        continue;
                    }
                    default:
                        $$.$mol_log3_warn({
                            place: this,
                            message: '💢 Unknown Kind',
                            kind,
                            offset,
                            hint: 'Try to update application',
                        });
                        return [...parts];
                }
            }
            return [...parts];
        }
        static length(parts) {
            let size = 0;
            for (const [land, { units, faces }] of parts) {
                size += $.$giper_baza_pack_head_size;
                size += faces.size * $giper_baza_face.length();
                for (const unit of units) {
                    size += unit.byteLength;
                    if (unit instanceof $giper_baza_auth_pass)
                        continue;
                    unit.choose({
                        gift: gift => { },
                        seal: seal => { },
                        sand: sand => size += $giper_baza_unit_sand.length_ball(sand.ball().byteLength),
                    });
                }
            }
            return size;
        }
        static make(parts) {
            let length = this.length(parts);
            if (length === 0)
                $mol_fail(new Error('Empty Pack'));
            const buff = new Uint8Array(length);
            const pack = new $giper_baza_pack(buff.buffer);
            let offset = 0;
            for (const [id, { units, faces }] of parts) {
                buff.set($.$giper_baza_pack_four_code, offset);
                buff.set(new $giper_baza_link(id).toBin(), offset + 4);
                pack.uint16(offset + 22, faces.size);
                offset += 24;
                for (const [peer, face] of faces) {
                    buff.set(new $giper_baza_link(peer).toBin(), offset);
                    pack.uint16(offset + 6, face.tick);
                    pack.uint32(offset + 8, face.time);
                    pack.uint32(offset + 12, face.summ);
                    offset += $giper_baza_face.length();
                }
                for (const unit of units) {
                    buff.set(unit.asArray(), offset);
                    offset += unit.byteLength;
                    if (unit instanceof $giper_baza_auth_pass)
                        continue;
                    unit.choose({
                        gift: gift => { },
                        seal: seal => { },
                        sand: sand => {
                            if (sand.size() > $giper_baza_unit_sand.size_equator) {
                                buff.set(sand.ball(), offset);
                                offset += $giper_baza_unit_sand.length_ball(sand.size());
                            }
                        },
                    });
                }
            }
            return pack;
        }
    }
    $.$giper_baza_pack = $giper_baza_pack;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_time_interval extends $mol_time_base {
        constructor(config) {
            super();
            if (typeof config === 'string') {
                var chunks = config.split('/');
                if (chunks[0]) {
                    if (chunks[0][0].toUpperCase() === 'P') {
                        this._duration = new $mol_time_duration(chunks[0]);
                    }
                    else {
                        this._start = new $mol_time_moment(chunks[0]);
                    }
                }
                else {
                    this._start = new $mol_time_moment();
                }
                if (chunks[1]) {
                    if (chunks[1][0].toUpperCase() === 'P') {
                        this._duration = new $mol_time_duration(chunks[1]);
                    }
                    else {
                        this._end = new $mol_time_moment(chunks[1]);
                    }
                }
                else {
                    this._end = new $mol_time_moment();
                }
                return;
            }
            if (config.start !== undefined)
                this._start = new $mol_time_moment(config.start);
            if (config.end !== undefined)
                this._end = new $mol_time_moment(config.end);
            if (config.duration !== undefined)
                this._duration = new $mol_time_duration(config.duration);
        }
        _start;
        get start() {
            if (this._start)
                return this._start;
            return this._start = this._end.shift(this._duration.mult(-1));
        }
        _end;
        get end() {
            if (this._end)
                return this._end;
            return this._end = this._start.shift(this._duration);
        }
        _duration;
        get duration() {
            if (this._duration)
                return this._duration;
            return this._duration = new $mol_time_duration(this._end.valueOf() - this._start.valueOf());
        }
        toJSON() { return this.toString(); }
        toString() {
            return (this._start || this._duration || '').toString() + '/' + (this._end || this._duration || '').toString();
        }
        [Symbol.toPrimitive](mode) {
            return this.toString();
        }
    }
    $.$mol_time_interval = $mol_time_interval;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_span extends $mol_object2 {
        uri;
        source;
        row;
        col;
        length;
        constructor(uri, source, row, col, length) {
            super();
            this.uri = uri;
            this.source = source;
            this.row = row;
            this.col = col;
            this.length = length;
            this[Symbol.toStringTag] = this.uri + ('#' + this.row + ':' + this.col + '/' + this.length);
        }
        static unknown = $mol_span.begin('?');
        static begin(uri, source = '') {
            return new $mol_span(uri, source, 1, 1, 0);
        }
        static end(uri, source) {
            return new $mol_span(uri, source, 1, source.length + 1, 0);
        }
        static entire(uri, source) {
            return new $mol_span(uri, source, 1, 1, source.length);
        }
        toString() {
            return this[Symbol.toStringTag];
        }
        toJSON() {
            return {
                uri: this.uri,
                row: this.row,
                col: this.col,
                length: this.length
            };
        }
        error(message, Class = Error) {
            return new Class(`${message} (${this})`);
        }
        span(row, col, length) {
            return new $mol_span(this.uri, this.source, row, col, length);
        }
        after(length = 0) {
            return new $mol_span(this.uri, this.source, this.row, this.col + this.length, length);
        }
        slice(begin, end = -1) {
            let len = this.length;
            if (begin < 0)
                begin += len;
            if (end < 0)
                end += len;
            if (begin < 0 || begin > len)
                this.$.$mol_fail(this.error(`Begin value '${begin}' out of range`, RangeError));
            if (end < 0 || end > len)
                this.$.$mol_fail(this.error(`End value '${end}' out of range`, RangeError));
            if (end < begin)
                this.$.$mol_fail(this.error(`End value '${end}' can't be less than begin value`, RangeError));
            return this.span(this.row, this.col + begin, end - begin);
        }
    }
    $.$mol_span = $mol_span;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_error_syntax extends SyntaxError {
        reason;
        line;
        span;
        constructor(reason, line, span) {
            super(`${reason}\n${span}\n${line.substring(0, span.col - 1).replace(/\S/g, ' ')}${''.padEnd(span.length, '!')}\n${line}`);
            this.reason = reason;
            this.line = line;
            this.span = span;
        }
    }
    $.$mol_error_syntax = $mol_error_syntax;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_tree2_from_string(str, uri = '?') {
        const span = $mol_span.entire(uri, str);
        var root = $mol_tree2.list([], span);
        var stack = [root];
        var pos = 0, row = 0, min_indent = 0;
        while (str.length > pos) {
            var indent = 0;
            var line_start = pos;
            row++;
            while (str.length > pos && str[pos] == '\t') {
                indent++;
                pos++;
            }
            if (!root.kids.length) {
                min_indent = indent;
            }
            indent -= min_indent;
            if (indent < 0 || indent >= stack.length) {
                const sp = span.span(row, 1, pos - line_start);
                while (str.length > pos && str[pos] != '\n') {
                    pos++;
                }
                if (indent < 0) {
                    if (str.length > pos) {
                        this.$mol_fail(new this.$mol_error_syntax(`Too few tabs`, str.substring(line_start, pos), sp));
                    }
                }
                else {
                    this.$mol_fail(new this.$mol_error_syntax(`Too many tabs`, str.substring(line_start, pos), sp));
                }
            }
            stack.length = indent + 1;
            var parent = stack[indent];
            while (str.length > pos && str[pos] != '\\' && str[pos] != '\n') {
                var error_start = pos;
                while (str.length > pos && (str[pos] == ' ' || str[pos] == '\t')) {
                    pos++;
                }
                if (pos > error_start) {
                    let line_end = str.indexOf('\n', pos);
                    if (line_end === -1)
                        line_end = str.length;
                    const sp = span.span(row, error_start - line_start + 1, pos - error_start);
                    this.$mol_fail(new this.$mol_error_syntax(`Wrong nodes separator`, str.substring(line_start, line_end), sp));
                }
                var type_start = pos;
                while (str.length > pos &&
                    str[pos] != '\\' &&
                    str[pos] != ' ' &&
                    str[pos] != '\t' &&
                    str[pos] != '\n') {
                    pos++;
                }
                if (pos > type_start) {
                    let next = new $mol_tree2(str.slice(type_start, pos), '', [], span.span(row, type_start - line_start + 1, pos - type_start));
                    const parent_kids = parent.kids;
                    parent_kids.push(next);
                    parent = next;
                }
                if (str.length > pos && str[pos] == ' ') {
                    pos++;
                }
            }
            if (str.length > pos && str[pos] == '\\') {
                var data_start = pos;
                while (str.length > pos && str[pos] != '\n') {
                    pos++;
                }
                let next = new $mol_tree2('', str.slice(data_start + 1, pos), [], span.span(row, data_start - line_start + 2, pos - data_start - 1));
                const parent_kids = parent.kids;
                parent_kids.push(next);
                parent = next;
            }
            if (str.length === pos && stack.length > 0) {
                const sp = span.span(row, pos - line_start + 1, 1);
                this.$mol_fail(new this.$mol_error_syntax(`Unexpected EOF, LF required`, str.substring(line_start, str.length), sp));
            }
            stack.push(parent);
            pos++;
        }
        return root;
    }
    $.$mol_tree2_from_string = $mol_tree2_from_string;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_tree2_to_string(tree) {
        let output = [];
        function dump(tree, prefix = '') {
            if (tree.type.length) {
                if (!prefix.length) {
                    prefix = "\t";
                }
                output.push(tree.type);
                if (tree.kids.length == 1) {
                    output.push(' ');
                    dump(tree.kids[0], prefix);
                    return;
                }
                output.push("\n");
            }
            else if (tree.value.length || prefix.length) {
                output.push("\\" + tree.value + "\n");
            }
            for (const kid of tree.kids) {
                output.push(prefix);
                dump(kid, prefix + "\t");
            }
        }
        dump(tree);
        return output.join('');
    }
    $.$mol_tree2_to_string = $mol_tree2_to_string;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_maybe(value) {
        return (value == null) ? [] : [value];
    }
    $.$mol_maybe = $mol_maybe;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_tree2 extends Object {
        type;
        value;
        kids;
        span;
        constructor(type, value, kids, span) {
            super();
            this.type = type;
            this.value = value;
            this.kids = kids;
            this.span = span;
            this[Symbol.toStringTag] = type || '\\' + value;
        }
        static list(kids, span = $mol_span.unknown) {
            return new $mol_tree2('', '', kids, span);
        }
        list(kids) {
            return $mol_tree2.list(kids, this.span);
        }
        static data(value, kids = [], span = $mol_span.unknown) {
            const chunks = value.split('\n');
            if (chunks.length > 1) {
                let kid_span = span.span(span.row, span.col, 0);
                const data = chunks.map(chunk => {
                    kid_span = kid_span.after(chunk.length);
                    return new $mol_tree2('', chunk, [], kid_span);
                });
                kids = [...data, ...kids];
                value = '';
            }
            return new $mol_tree2('', value, kids, span);
        }
        data(value, kids = []) {
            return $mol_tree2.data(value, kids, this.span);
        }
        static struct(type, kids = [], span = $mol_span.unknown) {
            if (/[ \n\t\\]/.test(type)) {
                $$.$mol_fail(span.error(`Wrong type ${JSON.stringify(type)}`));
            }
            return new $mol_tree2(type, '', kids, span);
        }
        struct(type, kids = []) {
            return $mol_tree2.struct(type, kids, this.span);
        }
        clone(kids, span = this.span) {
            return new $mol_tree2(this.type, this.value, kids, span);
        }
        text() {
            var values = [];
            for (var kid of this.kids) {
                if (kid.type)
                    continue;
                values.push(kid.value);
            }
            return this.value + values.join('\n');
        }
        static fromString(str, uri = 'unknown') {
            return $$.$mol_tree2_from_string(str, uri);
        }
        toString() {
            return $$.$mol_tree2_to_string(this);
        }
        insert(value, ...path) {
            return this.update($mol_maybe(value), ...path)[0];
        }
        update(value, ...path) {
            if (path.length === 0)
                return value;
            const type = path[0];
            if (typeof type === 'string') {
                let replaced = false;
                const sub = this.kids.flatMap((item, index) => {
                    if (item.type !== type)
                        return item;
                    replaced = true;
                    return item.update(value, ...path.slice(1));
                }).filter(Boolean);
                if (!replaced && value) {
                    sub.push(...this.struct(type, []).update(value, ...path.slice(1)));
                }
                return [this.clone(sub)];
            }
            else if (typeof type === 'number') {
                const ins = (this.kids[type] || this.list([]))
                    .update(value, ...path.slice(1));
                return [this.clone([
                        ...this.kids.slice(0, type),
                        ...ins,
                        ...this.kids.slice(type + 1),
                    ])];
            }
            else {
                const kids = ((this.kids.length === 0) ? [this.list([])] : this.kids)
                    .flatMap(item => item.update(value, ...path.slice(1)));
                return [this.clone(kids)];
            }
        }
        select(...path) {
            let next = [this];
            for (const type of path) {
                if (!next.length)
                    break;
                const prev = next;
                next = [];
                for (var item of prev) {
                    switch (typeof (type)) {
                        case 'string':
                            for (var child of item.kids) {
                                if (child.type == type) {
                                    next.push(child);
                                }
                            }
                            break;
                        case 'number':
                            if (type < item.kids.length)
                                next.push(item.kids[type]);
                            break;
                        default: next.push(...item.kids);
                    }
                }
            }
            return this.list(next);
        }
        filter(path, value) {
            const sub = this.kids.filter(item => {
                var found = item.select(...path);
                if (value === undefined) {
                    return Boolean(found.kids.length);
                }
                else {
                    return found.kids.some(child => child.value == value);
                }
            });
            return this.clone(sub);
        }
        hack_self(belt, context = {}) {
            let handle = belt[this.type] || belt[''];
            if (!handle || handle === Object.prototype[this.type]) {
                handle = (input, belt, context) => [
                    input.clone(input.hack(belt, context), context.span)
                ];
            }
            try {
                return handle(this, belt, context);
            }
            catch (error) {
                error.message += `\n${this.clone([])}${this.span}`;
                $mol_fail_hidden(error);
            }
        }
        hack(belt, context = {}) {
            return [].concat(...this.kids.map(child => child.hack_self(belt, context)));
        }
        error(message, Class = Error) {
            return this.span.error(`${message}\n${this.clone([])}`, Class);
        }
    }
    $.$mol_tree2 = $mol_tree2;
    class $mol_tree2_empty extends $mol_tree2 {
        constructor() {
            super('', '', [], $mol_span.unknown);
        }
    }
    $.$mol_tree2_empty = $mol_tree2_empty;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_bigint_encode(num) {
        const minus = num < 0n ? 255 : 0;
        num = minus ? -num - 1n : num;
        const bytes = [];
        do {
            let byte = minus ^ Number(num & 255n);
            bytes.push(byte);
            if (num >>= 8n)
                continue;
            if ((minus & 128) !== (byte & 128))
                bytes.push(minus);
            break;
        } while (num);
        return new Uint8Array(bytes);
    }
    $.$mol_bigint_encode = $mol_bigint_encode;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_bigint_decode(buf) {
        if (buf.length === 8)
            return new BigInt64Array(buf.buffer, buf.byteOffset, 1)[0];
        if (buf.length === 4)
            return BigInt(new Int32Array(buf.buffer, buf.byteOffset, 1)[0]);
        if (buf.length === 2)
            return BigInt(new Int16Array(buf.buffer, buf.byteOffset, 1)[0]);
        if (buf.length === 1)
            return BigInt(new Int8Array(buf.buffer, buf.byteOffset, 1)[0]);
        const minus = (buf.at(-1) & 128) ? 255 : 0;
        let result = 0n;
        let offset = 0n;
        for (let i = 0; i < buf.length; i++, offset += 8n) {
            result |= BigInt(buf[i] ^ minus) << offset;
        }
        if (minus)
            result = (result + 1n) * -1n;
        return result;
    }
    $.$mol_bigint_decode = $mol_bigint_decode;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    const decoders = {};
    function $mol_charset_decode(buffer, encoding = 'utf8') {
        let decoder = decoders[encoding];
        if (!decoder)
            decoder = decoders[encoding] = new TextDecoder(encoding);
        return decoder.decode(buffer);
    }
    $.$mol_charset_decode = $mol_charset_decode;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_serialize(node) {
        const serializer = new $mol_dom_context.XMLSerializer;
        return serializer.serializeToString(node);
    }
    $.$mol_dom_serialize = $mol_dom_serialize;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_parse(text, type = 'application/xhtml+xml') {
        const parser = new $mol_dom_context.DOMParser();
        const doc = parser.parseFromString(text, type);
        const error = doc.getElementsByTagName('parsererror');
        if (error.length)
            throw new Error(error[0].textContent);
        return doc;
    }
    $.$mol_dom_parse = $mol_dom_parse;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let $mol_vary_tip;
    (function ($mol_vary_tip) {
        $mol_vary_tip[$mol_vary_tip["uint"] = 0] = "uint";
        $mol_vary_tip[$mol_vary_tip["link"] = 32] = "link";
        $mol_vary_tip[$mol_vary_tip["spec"] = 64] = "spec";
        $mol_vary_tip[$mol_vary_tip["list"] = 96] = "list";
        $mol_vary_tip[$mol_vary_tip["blob"] = 128] = "blob";
        $mol_vary_tip[$mol_vary_tip["text"] = 160] = "text";
        $mol_vary_tip[$mol_vary_tip["tupl"] = 192] = "tupl";
        $mol_vary_tip[$mol_vary_tip["sint"] = 224] = "sint";
    })($mol_vary_tip = $.$mol_vary_tip || ($.$mol_vary_tip = {}));
    let $mol_vary_len;
    (function ($mol_vary_len) {
        $mol_vary_len[$mol_vary_len["L1"] = 28] = "L1";
        $mol_vary_len[$mol_vary_len["L2"] = 29] = "L2";
        $mol_vary_len[$mol_vary_len["L4"] = 30] = "L4";
        $mol_vary_len[$mol_vary_len["L8"] = 31] = "L8";
        $mol_vary_len[$mol_vary_len["LA"] = 32] = "LA";
    })($mol_vary_len = $.$mol_vary_len || ($.$mol_vary_len = {}));
    let $mol_vary_spec;
    (function ($mol_vary_spec) {
        $mol_vary_spec[$mol_vary_spec["none"] = 'N'.charCodeAt(0)] = "none";
        $mol_vary_spec[$mol_vary_spec["true"] = 'T'.charCodeAt(0)] = "true";
        $mol_vary_spec[$mol_vary_spec["fake"] = 'F'.charCodeAt(0)] = "fake";
        $mol_vary_spec[$mol_vary_spec["both"] = 'B'.charCodeAt(0)] = "both";
        $mol_vary_spec[$mol_vary_spec["fp16"] = 'H'.charCodeAt(0)] = "fp16";
        $mol_vary_spec[$mol_vary_spec["fp32"] = 'S'.charCodeAt(0)] = "fp32";
        $mol_vary_spec[$mol_vary_spec["fp64"] = 'D'.charCodeAt(0)] = "fp64";
        $mol_vary_spec[$mol_vary_spec["f128"] = 'Q'.charCodeAt(0)] = "f128";
        $mol_vary_spec[$mol_vary_spec["f256"] = 'O'.charCodeAt(0)] = "f256";
    })($mol_vary_spec = $.$mol_vary_spec || ($.$mol_vary_spec = {}));
    const pojo_maker = (keys) => (vals) => {
        const obj = {};
        for (let i = 0; i < keys.length; ++i)
            obj[keys[i]] = vals[i];
        return obj;
    };
    class $mol_vary_class extends Object {
        lean_symbol = Symbol('$mol_vary_lean');
        array = new Uint8Array(256);
        buffer = new DataView(this.array.buffer);
        pack(data) {
            let pos = 0;
            let capacity = 0;
            const offsets = new Map();
            const stack = [];
            const acquire = (size) => {
                if (size < 0)
                    return;
                capacity += size;
                if (this.array.byteLength >= capacity)
                    return;
                const buffer2 = new Uint8Array(Math.ceil(capacity / 4096) * 4096);
                buffer2.set(this.array);
                this.array = buffer2;
                this.buffer = new DataView(this.array.buffer);
            };
            const release = (size) => {
                capacity -= size;
            };
            const calc_size = (val) => {
                if (val < $mol_vary_len.L1)
                    return 1;
                if (val < 2 ** 8)
                    return 2;
                if (val < 2 ** 16)
                    return 3;
                if (val < 2 ** 32)
                    return 5;
                if (val < 2n ** 64n)
                    return 9;
                return $mol_fail(new Error('Too large number'));
            };
            const dump_unum = (tip, val, max = val) => {
                if (max < $mol_vary_len.L1) {
                    this.array[pos++] = tip | Number(val);
                    release(8);
                    return;
                }
                if (tip == $mol_vary_tip.uint) {
                    const offset = offsets.get(val);
                    if (offset !== undefined)
                        return dump_unum($mol_vary_tip.link, offset);
                }
                if (max < 2 ** 8) {
                    this.array[pos++] = tip | $mol_vary_len.L1;
                    this.array[pos++] = Number(val);
                    release(7);
                }
                else if (max < 2 ** 16) {
                    this.array[pos++] = tip | $mol_vary_len.L2;
                    this.buffer.setUint16(pos, Number(val), true);
                    pos += 2;
                    release(6);
                }
                else if (max < 2 ** 32) {
                    this.array[pos++] = tip | $mol_vary_len.L4;
                    this.buffer.setUint32(pos, Number(val), true);
                    pos += 4;
                    release(4);
                }
                else if (max < 2n ** 64n) {
                    this.array[pos++] = tip | $mol_vary_len.L8;
                    this.buffer.setBigUint64(pos, BigInt(val), true);
                    pos += 8;
                }
                else {
                    dump_bint(val);
                }
                if (tip == $mol_vary_tip.uint)
                    offsets.set(val, offsets.size);
            };
            const dump_snum = (val) => {
                if (val > -$mol_vary_len.L1) {
                    this.array[pos++] = Number(val);
                    release(8);
                    return;
                }
                const offset = offsets.get(val);
                if (offset !== undefined)
                    return dump_unum($mol_vary_tip.link, offset);
                if (val >= -(2 ** 7)) {
                    this.array[pos++] = -$mol_vary_len.L1;
                    this.array[pos++] = Number(val);
                    release(7);
                }
                else if (val >= -(2 ** 15)) {
                    this.array[pos++] = -$mol_vary_len.L2;
                    this.buffer.setInt16(pos, Number(val), true);
                    pos += 2;
                    release(6);
                }
                else if (val >= -(2 ** 31)) {
                    this.array[pos++] = -$mol_vary_len.L4;
                    this.buffer.setInt32(pos, Number(val), true);
                    pos += 4;
                    release(4);
                }
                else if (val >= -(2n ** 63n)) {
                    this.array[pos++] = -$mol_vary_len.L8;
                    this.buffer.setBigInt64(pos, BigInt(val), true);
                    pos += 8;
                }
                else {
                    dump_bint(val);
                }
                offsets.set(val, offsets.size);
            };
            const dump_bint = (val) => {
                const buf = $mol_bigint_encode(val);
                if (buf.byteLength > (2 ** 16 + 8))
                    $mol_fail(new Error('Number too high', { cause: { val } }));
                acquire(buf.byteLength - 6);
                this.array[pos++] = -$mol_vary_len.LA;
                this.buffer.setUint16(pos, buf.byteLength - 9, true);
                pos += 2;
                this.array.set(buf, pos);
                pos += buf.byteLength;
            };
            const dump_float = (val) => {
                const offset = offsets.get(val);
                if (offset !== undefined)
                    return dump_unum($mol_vary_tip.link, offset);
                this.array[pos++] = $mol_vary_spec.fp64;
                this.buffer.setFloat64(pos, val, true);
                pos += 8;
                offsets.set(val, offsets.size);
            };
            const dump_string = (val) => {
                const offset = offsets.get(val);
                if (offset !== undefined)
                    return dump_unum($mol_vary_tip.link, offset);
                const len_max = val.length * 3;
                const len_size = calc_size(len_max);
                acquire(len_max);
                const len = $mol_charset_encode_to(val, this.array, pos + len_size);
                dump_unum($mol_vary_tip.text, len, len_max);
                pos += len;
                release(len_max - len);
                offsets.set(val, offsets.size);
                return;
            };
            const dump_buffer = (val) => {
                const offset = offsets.get(val);
                if (offset !== undefined)
                    return dump_unum($mol_vary_tip.link, offset);
                dump_unum($mol_vary_tip.blob, val.byteLength);
                acquire(1 + val.byteLength);
                if (val instanceof Uint8Array)
                    this.array[pos++] = $mol_vary_tip.uint | $mol_vary_len.L1;
                else if (val instanceof Uint16Array)
                    this.array[pos++] = $mol_vary_tip.uint | $mol_vary_len.L2;
                else if (val instanceof Uint32Array)
                    this.array[pos++] = $mol_vary_tip.uint | $mol_vary_len.L4;
                else if (val instanceof BigUint64Array)
                    this.array[pos++] = $mol_vary_tip.uint | $mol_vary_len.L8;
                else if (val instanceof Int8Array)
                    this.array[pos++] = $mol_vary_tip.sint | ~$mol_vary_len.L1;
                else if (val instanceof Int16Array)
                    this.array[pos++] = $mol_vary_tip.sint | ~$mol_vary_len.L2;
                else if (val instanceof Int32Array)
                    this.array[pos++] = $mol_vary_tip.sint | ~$mol_vary_len.L4;
                else if (val instanceof BigInt64Array)
                    this.array[pos++] = $mol_vary_tip.sint | ~$mol_vary_len.L8;
                else if (typeof Float16Array === 'function' && val instanceof Float16Array)
                    this.array[pos++] = $mol_vary_spec.fp16;
                else if (val instanceof Float32Array)
                    this.array[pos++] = $mol_vary_spec.fp32;
                else if (val instanceof Float64Array)
                    this.array[pos++] = $mol_vary_spec.fp64;
                else
                    $mol_fail(new Error(`Unsupported type`));
                const src = (val instanceof Uint8Array) ? val : new Uint8Array(val.buffer, val.byteOffset, val.byteLength);
                this.array.set(src, pos);
                pos += val.byteLength;
                offsets.set(val, offsets.size);
            };
            const dump_list = (val) => {
                const offset = offsets.get(val);
                if (offset !== undefined)
                    return dump_unum($mol_vary_tip.link, offset);
                dump_unum($mol_vary_tip.list, val.length);
                acquire(val.length * 9);
                if (stack.includes(val))
                    $mol_fail(new Error('Cyclic refs', { cause: { stack, val } }));
                stack.push(val);
                for (let i = 0; i < val.length; ++i)
                    dump(val[i]);
                if (stack.at(-1) !== val)
                    $mol_fail(new Error('Broken stack', { cause: { stack, val } }));
                stack.pop();
                offsets.set(val, offsets.size);
            };
            const shapes = new Map();
            const shape = (val) => {
                const keys1 = Object.keys(val);
                const key = keys1.join('\0');
                const keys2 = shapes.get(key);
                if (keys2)
                    return keys2;
                shapes.set(key, keys1);
                return keys1;
            };
            const dump_object = (val) => {
                const offset = offsets.get(val);
                if (offset !== undefined)
                    return dump_unum($mol_vary_tip.link, offset);
                const { 0: keys, 1: vals } = this.lean_find(val)?.(val) ?? [shape(val), Object.values(val)];
                dump_unum($mol_vary_tip.tupl, vals.length);
                acquire((vals.length + 1) * 9);
                dump_list(keys);
                if (stack.includes(val))
                    $mol_fail(new Error('Cyclic refs', { cause: { stack, val } }));
                stack.push(val);
                for (let i = 0; i < vals.length; ++i)
                    dump(vals[i]);
                if (stack.at(-1) !== val)
                    $mol_fail(new Error('Broken stack', { cause: { stack, val } }));
                stack.pop();
                offsets.set(val, offsets.size);
            };
            const dumpers = {
                undefined: () => {
                    this.array[pos++] = $mol_vary_spec.both;
                    capacity -= 8;
                },
                boolean: val => {
                    this.array[pos++] = val ? $mol_vary_spec.true : $mol_vary_spec.fake;
                    capacity -= 8;
                },
                number: val => {
                    if (!Number.isInteger(val))
                        dump_float(val);
                    else
                        dumpers.bigint(val);
                },
                bigint: val => {
                    if (val < 0) {
                        dump_snum(val);
                    }
                    else {
                        dump_unum($mol_vary_tip.uint, val);
                    }
                },
                string: val => dump_string(val),
                object: val => {
                    if (!val) {
                        capacity -= 8;
                        return this.array[pos++] = $mol_vary_spec.none;
                    }
                    if (Array.isArray(val))
                        return dump_list(val);
                    if (ArrayBuffer.isView(val))
                        return dump_buffer(val);
                    return dump_object(val);
                }
            };
            const dump = (val) => {
                const dumper = dumpers[typeof val];
                if (!dumper)
                    $mol_fail(new Error(`Unsupported type`));
                dumper(val);
            };
            for (let i = 0; i < data.length; ++i) {
                capacity += 9;
                dump(data[i]);
                if (stack.length)
                    $mol_fail(new Error('Stack underflow', { cause: { stack, item: data[i] } }));
                offsets.clear();
            }
            if (pos !== capacity)
                $mol_fail(new Error('Wrong reserved capacity', { cause: { capacity, size: pos, data } }));
            return this.array.slice(0, pos);
        }
        take(array) {
            const buffer = new DataView(array.buffer, array.byteOffset, array.byteLength);
            const stream = [];
            let pos = 0;
            const read_unum = (kind) => {
                ++pos;
                const num = kind & 0b11111;
                if (num < $mol_vary_len.L1)
                    return num;
                let res = 0;
                if (num === $mol_vary_len.L1) {
                    res = buffer.getUint8(pos++);
                }
                else if (num === $mol_vary_len.L2) {
                    res = buffer.getUint16(pos, true);
                    pos += 2;
                }
                else if (num === $mol_vary_len.L4) {
                    res = buffer.getUint32(pos, true);
                    pos += 4;
                }
                else if (num === $mol_vary_len.L8) {
                    res = buffer.getBigUint64(pos, true);
                    if (res <= Number.MAX_SAFE_INTEGER)
                        res = Number(res);
                    pos += 8;
                }
                else {
                    $mol_fail(new Error('Unsupported unum', { cause: { num } }));
                }
                if ((kind & 0b111_00000) === $mol_vary_tip.uint)
                    stream.push(res);
                return res;
            };
            const read_snum = (kind) => {
                const num = buffer.getInt8(pos++);
                if (num > -$mol_vary_len.L1)
                    return num;
                let res = 0;
                if (num === -$mol_vary_len.L1) {
                    res = buffer.getInt8(pos++);
                }
                else if (num === -$mol_vary_len.L2) {
                    res = buffer.getInt16(pos, true);
                    pos += 2;
                }
                else if (num === -$mol_vary_len.L4) {
                    res = buffer.getInt32(pos, true);
                    pos += 4;
                }
                else if (num === -$mol_vary_len.L8) {
                    res = buffer.getBigInt64(pos, true);
                    if (res >= Number.MIN_SAFE_INTEGER && res <= Number.MAX_SAFE_INTEGER)
                        res = Number(res);
                    pos += 8;
                }
                else if (num === -$mol_vary_len.LA) {
                    const len = buffer.getUint16(pos, true) + 9;
                    pos += 2;
                    res = $mol_bigint_decode(new Uint8Array(buffer.buffer, buffer.byteOffset + pos, len));
                    pos += len;
                }
                else {
                    $mol_fail(new Error('Unsupported snum', { cause: { num } }));
                }
                stream.push(res);
                return res;
            };
            const read_text = (kind) => {
                const len = read_unum(kind);
                const text = $mol_charset_decode(new Uint8Array(array.buffer, array.byteOffset + pos, len));
                pos += len;
                stream.push(text);
                return text;
            };
            const read_buffer = (len, TypedArray) => {
                const bin = new TypedArray(array.slice(pos, pos + len).buffer);
                pos += len;
                stream.push(bin);
                return bin;
            };
            const read_blob = (kind) => {
                const len = read_unum(kind);
                const kind_item = buffer.getUint8(pos++);
                switch (kind_item) {
                    case $mol_vary_len.L1: return read_buffer(len, Uint8Array);
                    case $mol_vary_len.L2: return read_buffer(len, Uint16Array);
                    case $mol_vary_len.L4: return read_buffer(len, Uint32Array);
                    case $mol_vary_len.L8: return read_buffer(len, BigUint64Array);
                    case ~$mol_vary_len.L1 + 256: return read_buffer(len, Int8Array);
                    case ~$mol_vary_len.L2 + 256: return read_buffer(len, Int16Array);
                    case ~$mol_vary_len.L4 + 256: return read_buffer(len, Int32Array);
                    case ~$mol_vary_len.L8 + 256: return read_buffer(len, BigInt64Array);
                    case $mol_vary_tip.spec | $mol_vary_spec.fp16: return read_buffer(len, Float16Array);
                    case $mol_vary_tip.spec | $mol_vary_spec.fp32: return read_buffer(len, Float32Array);
                    case $mol_vary_tip.spec | $mol_vary_spec.fp64: return read_buffer(len, Float64Array);
                    default:
                        $mol_fail(new Error('Unsupported blob item kind', { cause: { kind_item } }));
                }
            };
            const read_list = (kind) => {
                const len = read_unum(kind);
                const list = new Array(len);
                for (let i = 0; i < len; ++i)
                    list[i] = read_vary();
                stream.push(list);
                return list;
            };
            const read_link = (kind) => {
                const index = read_unum(kind);
                if (index >= stream.length)
                    $mol_fail(new Error('Too large index', { cause: { index, exists: stream.length } }));
                return stream[index];
            };
            const read_tupl = (kind) => {
                const len = read_unum(kind);
                const keys = read_vary();
                const vals = new Array(len);
                for (let i = 0; i < len; ++i)
                    vals[i] = read_vary();
                const node = this.rich_node(keys);
                let rich = node.get(null);
                if (!rich)
                    node.set(null, rich = pojo_maker(keys));
                const obj = rich(vals);
                stream.push(obj);
                return obj;
            };
            const read_spec = (kind) => {
                switch (kind) {
                    case $mol_vary_spec.none:
                        ++pos;
                        return null;
                    case $mol_vary_spec.fake:
                        ++pos;
                        return false;
                    case $mol_vary_spec.true:
                        ++pos;
                        return true;
                    case $mol_vary_spec.both:
                        ++pos;
                        return undefined;
                    case $mol_vary_spec.fp64: {
                        const val = buffer.getFloat64(++pos, true);
                        stream.push(val);
                        pos += 8;
                        return val;
                    }
                    case $mol_vary_spec.fp32: {
                        const val = buffer.getFloat32(++pos, true);
                        stream.push(val);
                        pos += 4;
                        return val;
                    }
                    case $mol_vary_spec.fp16: {
                        const val = buffer.getFloat16(++pos, true);
                        stream.push(val);
                        pos += 2;
                        return val;
                    }
                    default:
                        $mol_fail(new Error('Unsupported spec', { cause: { kind } }));
                }
            };
            const read_vary = () => {
                const kind = buffer.getUint8(pos);
                const tip = kind & 0b111_00000;
                switch (tip) {
                    case $mol_vary_tip.uint: return read_unum(kind);
                    case $mol_vary_tip.sint: return read_snum(kind);
                    case $mol_vary_tip.link: return read_link(kind);
                    case $mol_vary_tip.text: return read_text(kind);
                    case $mol_vary_tip.list: return read_list(kind);
                    case $mol_vary_tip.blob: return read_blob(kind);
                    case $mol_vary_tip.tupl: return read_tupl(kind);
                    case $mol_vary_tip.spec: return read_spec(kind);
                    default: $mol_fail(new Error('Unsupported tip', { cause: { tip } }));
                }
            };
            const result = [];
            while (pos < array.byteLength) {
                result.push(read_vary());
                stream.length = 0;
            }
            return result;
        }
        rich_index = new Map([
            [null, () => ({})]
        ]);
        zone() {
            const room = new $mol_vary_class;
            Object.setPrototypeOf(room, this);
            const index_clone = (map) => new Map([...map].map(([k, v]) => [k, k === null ? v : index_clone(v)]));
            room.rich_index = index_clone(this.rich_index);
            return room;
        }
        rich_node(keys) {
            let node = this.rich_index;
            for (let i = 0; i < keys.length; ++i) {
                let sub = node.get(keys[i]);
                if (sub)
                    node = sub;
                else
                    node.set(keys[i], node = new Map);
            }
            return node;
        }
        lean_find(val) {
            const lean = val[this.lean_symbol];
            if (lean)
                return lean;
            const sup = Object.getPrototypeOf(this);
            if (sup === Object.prototype)
                return;
            return sup.lean_find(val);
        }
        type({ type, keys, rich, lean }) {
            this.rich_node(keys).set(null, rich);
            type.prototype[this.lean_symbol] = (val) => [keys, lean(val)];
        }
    }
    $.$mol_vary_class = $mol_vary_class;
    $.$mol_vary = new $mol_vary_class;
    $.$mol_vary.type({
        type: Map,
        keys: ['keys', 'vals'],
        lean: obj => [[...obj.keys()], [...obj.values()]],
        rich: ([keys, vals]) => new Map(keys.map((k, i) => [k, vals[i]])),
    });
    $.$mol_vary.type({
        type: Set,
        keys: ['set'],
        lean: obj => [[...obj.values()]],
        rich: ([vals]) => new Set(vals),
    });
    $.$mol_vary.type({
        type: Date,
        keys: ['unix_time'],
        lean: obj => [obj.valueOf() / 1000],
        rich: ([ts]) => new Date(ts * 1000),
    });
    if ('Element' in $mol_dom) {
        $.$mol_vary.type({
            type: $mol_dom.Element,
            keys: ['XML'],
            lean: node => [$mol_dom_serialize(node)],
            rich: ([text]) => $mol_dom_parse(text, 'application/xml').documentElement,
        });
    }
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$giper_baza_vary = $mol_vary.zone();
    $.$giper_baza_vary.type({
        type: $giper_baza_link,
        keys: ['link'],
        lean: obj => [obj.toBin()],
        rich: ([bin]) => $giper_baza_link.from_bin(bin),
    });
    $.$giper_baza_vary.type({
        type: $mol_time_duration,
        keys: ['dura'],
        lean: obj => [obj.toString()],
        rich: ([str]) => new $mol_time_duration(str),
    });
    $.$giper_baza_vary.type({
        type: $mol_time_moment,
        keys: ['time'],
        lean: obj => [obj.toString()],
        rich: ([str]) => new $mol_time_moment(str),
    });
    $.$giper_baza_vary.type({
        type: $mol_time_interval,
        keys: ['span'],
        lean: obj => [obj.toString()],
        rich: ([str]) => new $mol_time_interval(str),
    });
    $.$giper_baza_vary.type({
        type: $mol_tree2,
        keys: ['tree'],
        lean: obj => [$$.$mol_tree2_to_string(obj)],
        rich: ([str]) => $$.$mol_tree2_from_string(str),
    });
    function $giper_baza_vary_switch(vary, ways) {
        if (vary === null)
            return ways.none(vary);
        switch (typeof vary) {
            case "boolean": return ways.bool(vary);
            case "bigint": return ways.bint(vary);
            case "number": return ways.real(vary);
            case "string": return ways.text(vary);
        }
        if (ArrayBuffer.isView(vary))
            return ways.blob(vary);
        switch (Reflect.getPrototypeOf(vary)) {
            case Object.prototype: return ways.dict(vary);
            case Array.prototype: return ways.list(vary);
            case $giper_baza_link.prototype: return ways.link(vary);
            case $mol_time_moment.prototype: return ways.time(vary);
            case $mol_time_duration.prototype: return ways.dura(vary);
            case $mol_time_interval.prototype: return ways.span(vary);
            case $mol_tree2.prototype: return ways.tree(vary);
        }
        if (vary instanceof $mol_dom_context.Element)
            return ways.elem(vary);
        return $mol_fail(new TypeError(`Unsupported vary type`, { cause: { vary } }));
    }
    $.$giper_baza_vary_switch = $giper_baza_vary_switch;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_children(el, childNodes) {
        const node_set = new Set(childNodes);
        let nextNode = el.firstChild;
        for (let view of childNodes) {
            if (view == null)
                continue;
            if (view instanceof $mol_dom_context.Node) {
                while (true) {
                    if (!nextNode) {
                        el.appendChild(view);
                        break;
                    }
                    if (nextNode == view) {
                        nextNode = nextNode.nextSibling;
                        break;
                    }
                    else {
                        if (node_set.has(nextNode)) {
                            el.insertBefore(view, nextNode);
                            break;
                        }
                        else {
                            const nn = nextNode.nextSibling;
                            el.removeChild(nextNode);
                            nextNode = nn;
                        }
                    }
                }
            }
            else {
                if (nextNode && nextNode.nodeName === '#text') {
                    const str = String(view);
                    if (nextNode.nodeValue !== str)
                        nextNode.nodeValue = str;
                    nextNode = nextNode.nextSibling;
                }
                else {
                    const textNode = $mol_dom_context.document.createTextNode(String(view));
                    el.insertBefore(textNode, nextNode);
                }
            }
        }
        while (nextNode) {
            const currNode = nextNode;
            nextNode = currNode.nextSibling;
            el.removeChild(currNode);
        }
    }
    $.$mol_dom_render_children = $mol_dom_render_children;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    $.$mol_jsx_prefix = '';
    $.$mol_jsx_crumbs = '';
    $.$mol_jsx_booked = null;
    $.$mol_jsx_document = {
        getElementById: () => null,
        createElementNS: (space, name) => $mol_dom_context.document.createElementNS(space, name),
        createDocumentFragment: () => $mol_dom_context.document.createDocumentFragment(),
    };
    $.$mol_jsx_frag = '';
    function $mol_jsx(Elem, props, ...childNodes) {
        const id = props && props.id || '';
        const guid = id ? $.$mol_jsx_prefix ? $.$mol_jsx_prefix + '/' + id : id : $.$mol_jsx_prefix;
        const crumbs_self = id ? $.$mol_jsx_crumbs.replace(/(\S+)/g, `$1_${id.replace(/\/.*/i, '')}`) : $.$mol_jsx_crumbs;
        if (Elem && $.$mol_jsx_booked) {
            if ($.$mol_jsx_booked.has(id)) {
                $mol_fail(new Error(`JSX already has tag with id ${JSON.stringify(guid)}`));
            }
            else {
                $.$mol_jsx_booked.add(id);
            }
        }
        let node = guid ? $.$mol_jsx_document.getElementById(guid) : null;
        if ($.$mol_jsx_prefix) {
            const prefix_ext = $.$mol_jsx_prefix;
            const booked_ext = $.$mol_jsx_booked;
            const crumbs_ext = $.$mol_jsx_crumbs;
            for (const field in props) {
                const func = props[field];
                if (typeof func !== 'function')
                    continue;
                const wrapper = function (...args) {
                    const prefix = $.$mol_jsx_prefix;
                    const booked = $.$mol_jsx_booked;
                    const crumbs = $.$mol_jsx_crumbs;
                    try {
                        $.$mol_jsx_prefix = prefix_ext;
                        $.$mol_jsx_booked = booked_ext;
                        $.$mol_jsx_crumbs = crumbs_ext;
                        return func.call(this, ...args);
                    }
                    finally {
                        $.$mol_jsx_prefix = prefix;
                        $.$mol_jsx_booked = booked;
                        $.$mol_jsx_crumbs = crumbs;
                    }
                };
                $mol_func_name_from(wrapper, func);
                props[field] = wrapper;
            }
        }
        if (typeof Elem !== 'string') {
            if ('prototype' in Elem) {
                const view = node && node[String(Elem)] || new Elem;
                Object.assign(view, props);
                view[Symbol.toStringTag] = guid;
                view.childNodes = childNodes;
                if (!view.ownerDocument)
                    view.ownerDocument = $.$mol_jsx_document;
                view.className = (crumbs_self ? crumbs_self + ' ' : '') + (Elem['name'] || Elem);
                node = view.valueOf();
                node[String(Elem)] = view;
                return node;
            }
            else {
                const prefix = $.$mol_jsx_prefix;
                const booked = $.$mol_jsx_booked;
                const crumbs = $.$mol_jsx_crumbs;
                try {
                    $.$mol_jsx_prefix = guid;
                    $.$mol_jsx_booked = new Set;
                    $.$mol_jsx_crumbs = (crumbs_self ? crumbs_self + ' ' : '') + (Elem['name'] || Elem);
                    return Elem(props, ...childNodes);
                }
                finally {
                    $.$mol_jsx_prefix = prefix;
                    $.$mol_jsx_booked = booked;
                    $.$mol_jsx_crumbs = crumbs;
                }
            }
        }
        if (!node) {
            node = Elem
                ? $.$mol_jsx_document.createElementNS(props?.xmlns ?? 'http://www.w3.org/1999/xhtml', Elem)
                : $.$mol_jsx_document.createDocumentFragment();
        }
        $mol_dom_render_children(node, [].concat(...childNodes));
        if (!Elem)
            return node;
        if (guid)
            node.id = guid;
        for (const key in props) {
            if (key === 'id')
                continue;
            if (typeof props[key] === 'string') {
                if (typeof node[key] === 'string')
                    node[key] = props[key];
                node.setAttribute(key, props[key]);
            }
            else if (props[key] &&
                typeof props[key] === 'object' &&
                Reflect.getPrototypeOf(props[key]) === Reflect.getPrototypeOf({})) {
                if (typeof node[key] === 'object') {
                    Object.assign(node[key], props[key]);
                    continue;
                }
            }
            else {
                node[key] = props[key];
            }
        }
        if ($.$mol_jsx_crumbs)
            node.className = (props?.['class'] ? props['class'] + ' ' : '') + crumbs_self;
        return node;
    }
    $.$mol_jsx = $mol_jsx;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_tree2_bin_to_bytes(tree) {
        return Uint8Array.from(tree.kids, kid => parseInt(kid.value, 16));
    }
    $.$mol_tree2_bin_to_bytes = $mol_tree2_bin_to_bytes;
    function $mol_tree2_bin_from_bytes(bytes, span = $mol_span.unknown) {
        return $mol_tree2.list(Array.from(bytes, code => {
            return $mol_tree2.data(code.toString(16).padStart(2, '0'), [], span);
        }), span);
    }
    $.$mol_tree2_bin_from_bytes = $mol_tree2_bin_from_bytes;
    function $mol_tree2_bin_from_string(str, span = $mol_span.unknown) {
        return $mol_tree2_bin_from_bytes([...new TextEncoder().encode(str)], span);
    }
    $.$mol_tree2_bin_from_string = $mol_tree2_bin_from_string;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_tree2_from_json(json, span = $mol_span.unknown) {
        if (typeof json === 'boolean' || typeof json === 'number' || json === null) {
            return new $mol_tree2(String(json), '', [], span);
        }
        if (typeof json === 'string') {
            return $mol_tree2.data(json, [], span);
        }
        if (typeof json.toJSON === 'function') {
            return $mol_tree2_from_json(json.toJSON());
        }
        if (Array.isArray(json)) {
            const sub = json.map(json => $mol_tree2_from_json(json, span));
            return new $mol_tree2('/', '', sub, span);
        }
        if (ArrayBuffer.isView(json)) {
            const buf = new Uint8Array(json.buffer, json.byteOffset, json.byteLength);
            return $mol_tree2.data(String.fromCharCode(...buf), [], span);
        }
        if (json instanceof Date) {
            return new $mol_tree2('', json.toISOString(), [], span);
        }
        if (json.toString !== Object.prototype.toString) {
            return $mol_tree2.data(json.toString(), [], span);
        }
        if (json instanceof Error) {
            const { name, message, stack } = json;
            json = { ...json, name, message, stack };
        }
        const sub = [];
        for (var key in json) {
            const val = json[key];
            if (val === undefined)
                continue;
            const subsub = $mol_tree2_from_json(val, span);
            if (/^[^\n\t\\ ]+$/.test(key)) {
                sub.push(new $mol_tree2(key, '', [subsub], span));
            }
            else {
                sub.push($mol_tree2.data(key, [subsub], span));
            }
        }
        return new $mol_tree2('*', '', sub, span);
    }
    $.$mol_tree2_from_json = $mol_tree2_from_json;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_tree2_xml_from_dom(dom) {
        switch (dom.nodeType) {
            case dom.DOCUMENT_NODE: {
                let kids = [];
                for (const kid of dom.childNodes) {
                    kids.push($mol_tree2_xml_from_dom(kid));
                }
                return $mol_tree2.list(kids);
            }
            case dom.PROCESSING_INSTRUCTION_NODE: {
                return $mol_tree2.struct('?', [
                    $mol_tree2.struct(dom.nodeName, dom.nodeValue.split(' ').map(chunk => {
                        const [, name, value] = /^(.*?)(?:="(.*?)")?$/.exec(chunk);
                        const kids = value ? [$mol_tree2.data(value)] : [];
                        return $mol_tree2.struct(name, kids);
                    }))
                ]);
            }
            case dom.DOCUMENT_TYPE_NODE: {
                const dom2 = dom;
                return $mol_tree2.struct('!', [
                    $mol_tree2.struct('DOCTYPE', [
                        $mol_tree2.struct(dom2.name)
                    ])
                ]);
            }
            case dom.ELEMENT_NODE: {
                let kids = [];
                for (const attr of dom.attributes) {
                    kids.push($mol_tree2.struct('@', [
                        $mol_tree2.struct(attr.nodeName, [
                            $mol_tree2.data(attr.nodeValue)
                        ])
                    ]));
                }
                for (const kid of dom.childNodes) {
                    const k = $mol_tree2_xml_from_dom(kid);
                    if (k.type || k.value)
                        kids.push(k);
                }
                return $mol_tree2.struct(dom.nodeName, kids);
            }
            case dom.COMMENT_NODE: {
                return $mol_tree2.struct('--', [
                    $mol_tree2.data(dom.nodeValue)
                ]);
            }
            case dom.TEXT_NODE: {
                if (!dom.nodeValue.trim())
                    return $mol_tree2.list([]);
                return $mol_tree2.data(dom.nodeValue.replace(/\s+/g, ' '));
            }
        }
        return $mol_fail(new Error(`Unsupported node ${dom.nodeName}`));
    }
    $.$mol_tree2_xml_from_dom = $mol_tree2_xml_from_dom;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $giper_baza_vary_cast_blob(vary) {
        return ArrayBuffer.isView(vary) ? vary : null;
    }
    $.$giper_baza_vary_cast_blob = $giper_baza_vary_cast_blob;
    function $giper_baza_vary_cast_bool(vary) {
        return $giper_baza_vary_switch(vary, {
            none: vary => null,
            blob: vary => Boolean(vary.byteLength),
            bool: vary => vary,
            bint: vary => Boolean(vary),
            real: vary => Boolean(vary),
            link: vary => vary.str !== '',
            text: vary => Boolean(vary),
            time: vary => Boolean(vary.valueOf()),
            dura: vary => Boolean(vary.valueOf()),
            span: vary => Boolean(vary.duration.valueOf()),
            dict: vary => Boolean(Reflect.ownKeys(vary).length),
            list: vary => Boolean(vary.length),
            elem: vary => Boolean(vary.attributes.length + vary.childNodes.length),
            tree: vary => Boolean(vary.value || vary.kids.length),
        });
    }
    $.$giper_baza_vary_cast_bool = $giper_baza_vary_cast_bool;
    function $giper_baza_vary_cast_bint(vary) {
        return $giper_baza_vary_switch(vary, {
            none: vary => null,
            blob: vary => BigInt(vary.length),
            bool: vary => BigInt(vary),
            bint: vary => vary,
            real: vary => Number.isFinite(vary) ? BigInt(Math.trunc(vary)) : null,
            link: vary => null,
            text: vary => {
                try {
                    return vary ? BigInt(vary) : null;
                }
                catch {
                    return null;
                }
            },
            time: vary => BigInt(vary.valueOf()),
            dura: vary => BigInt(vary.valueOf()),
            span: vary => BigInt(vary.duration.valueOf()),
            dict: vary => BigInt(Reflect.ownKeys(vary).length),
            list: vary => BigInt(vary.length),
            elem: vary => BigInt(vary.attributes.length + vary.childNodes.length),
            tree: vary => {
                try {
                    return BigInt(vary.value);
                }
                catch {
                    return BigInt(vary.kids.length);
                }
            },
        });
    }
    $.$giper_baza_vary_cast_bint = $giper_baza_vary_cast_bint;
    function $giper_baza_vary_cast_real(vary) {
        return $giper_baza_vary_switch(vary, {
            none: vary => null,
            blob: vary => vary.length,
            bool: vary => Number(vary),
            bint: vary => Number(vary),
            real: vary => vary,
            link: vary => null,
            text: vary => vary ? Number(vary) : null,
            time: vary => vary.valueOf(),
            dura: vary => vary.valueOf(),
            span: vary => vary.duration.valueOf(),
            dict: vary => Reflect.ownKeys(vary).length,
            list: vary => vary.length,
            elem: vary => Number(vary.attributes.length + vary.childNodes.length),
            tree: vary => Number(vary.value || vary.kids.length),
        });
    }
    $.$giper_baza_vary_cast_real = $giper_baza_vary_cast_real;
    function $giper_baza_vary_cast_link(vary) {
        return vary instanceof $giper_baza_link ? vary : null;
    }
    $.$giper_baza_vary_cast_link = $giper_baza_vary_cast_link;
    function $giper_baza_vary_cast_text(vary) {
        return $giper_baza_vary_switch(vary, {
            none: vary => null,
            blob: vary => $mol_base64_ae_encode(new Uint8Array(vary.buffer, vary.byteOffset, vary.byteLength)),
            bool: vary => String(vary),
            bint: vary => String(vary),
            real: vary => String(vary),
            link: vary => vary.str,
            text: vary => vary,
            time: vary => String(vary),
            dura: vary => String(vary),
            span: vary => String(vary),
            dict: vary => JSON.stringify(vary),
            list: vary => JSON.stringify(vary),
            elem: vary => $mol_dom_serialize(vary),
            tree: vary => String(vary),
        });
    }
    $.$giper_baza_vary_cast_text = $giper_baza_vary_cast_text;
    function $giper_baza_vary_cast_time(vary) {
        return $giper_baza_vary_switch(vary, {
            none: vary => null,
            blob: vary => null,
            bool: vary => null,
            bint: vary => new $mol_time_moment(Number(vary & 0xffffffffffffn)),
            real: vary => {
                try {
                    return new $mol_time_moment(vary);
                }
                catch {
                    return null;
                }
            },
            link: vary => null,
            text: vary => {
                try {
                    return vary ? new $mol_time_moment(vary) : null;
                }
                catch {
                    return null;
                }
            },
            time: vary => vary,
            dura: vary => null,
            span: vary => null,
            dict: vary => {
                try {
                    return new $mol_time_moment(vary);
                }
                catch {
                    return null;
                }
            },
            list: vary => null,
            elem: vary => null,
            tree: vary => null,
        });
    }
    $.$giper_baza_vary_cast_time = $giper_baza_vary_cast_time;
    function $giper_baza_vary_cast_dura(vary) {
        return $giper_baza_vary_switch(vary, {
            none: vary => null,
            blob: vary => null,
            bool: vary => null,
            bint: vary => new $mol_time_duration(Number(vary & 0xffffffffffffn)),
            real: vary => {
                try {
                    return new $mol_time_duration(vary);
                }
                catch {
                    return null;
                }
            },
            link: vary => null,
            text: vary => {
                try {
                    return new $mol_time_duration(vary);
                }
                catch {
                    return null;
                }
            },
            time: vary => null,
            dura: vary => vary,
            span: vary => null,
            dict: vary => new $mol_time_duration(vary),
            list: vary => null,
            elem: vary => null,
            tree: vary => null,
        });
    }
    $.$giper_baza_vary_cast_dura = $giper_baza_vary_cast_dura;
    function $giper_baza_vary_cast_span(vary) {
        return $giper_baza_vary_switch(vary, {
            none: vary => null,
            blob: vary => null,
            bool: vary => null,
            bint: vary => null,
            real: vary => null,
            link: vary => null,
            text: vary => {
                try {
                    return vary ? new $mol_time_interval(vary) : null;
                }
                catch {
                    return null;
                }
            },
            time: vary => new $mol_time_interval({ start: vary, duration: 0 }),
            dura: vary => null,
            span: vary => vary,
            dict: vary => {
                try {
                    return new $mol_time_interval(vary);
                }
                catch {
                    return null;
                }
            },
            list: vary => null,
            elem: vary => null,
            tree: vary => null,
        });
    }
    $.$giper_baza_vary_cast_span = $giper_baza_vary_cast_span;
    function $giper_baza_vary_cast_dict(vary) {
        return $giper_baza_vary_switch(vary, {
            none: vary => null,
            blob: vary => null,
            bool: vary => null,
            bint: vary => null,
            real: vary => null,
            link: vary => null,
            text: vary => {
                if (!vary)
                    return null;
                try {
                    const res = JSON.parse(vary);
                    if (typeof res === 'object')
                        return res;
                    return null;
                }
                catch {
                    return null;
                }
            },
            time: vary => ({ ...vary }),
            dura: vary => ({ ...vary }),
            span: vary => ({ ...vary }),
            dict: vary => vary,
            list: vary => Object(vary[0]),
            elem: vary => null,
            tree: vary => null,
        });
    }
    $.$giper_baza_vary_cast_dict = $giper_baza_vary_cast_dict;
    function $giper_baza_vary_cast_list(vary) {
        return $giper_baza_vary_switch(vary, {
            none: vary => null,
            blob: vary => [...vary],
            bool: vary => [vary],
            bint: vary => [vary.toString()],
            real: vary => Number.isFinite(vary) ? [vary] : null,
            link: vary => [vary.str],
            text: vary => {
                if (!vary)
                    return null;
                try {
                    return [].concat(JSON.parse(vary));
                }
                catch {
                    return [vary];
                }
            },
            time: vary => [vary.toJSON()],
            dura: vary => [vary.toJSON()],
            span: vary => [vary.toJSON()],
            dict: vary => [vary],
            list: vary => vary,
            elem: vary => [$mol_dom_serialize(vary)],
            tree: vary => [vary.toString()],
        });
    }
    $.$giper_baza_vary_cast_list = $giper_baza_vary_cast_list;
    function $giper_baza_vary_cast_elem(vary) {
        return $giper_baza_vary_switch(vary, {
            none: vary => null,
            blob: vary => $mol_jsx("body", null, $giper_baza_vary_cast_text(vary)),
            bool: vary => $mol_jsx("body", null, vary),
            bint: vary => $mol_jsx("body", null, vary),
            real: vary => $mol_jsx("body", null, vary),
            link: vary => $mol_jsx("body", null, vary.str),
            text: vary => {
                if (!vary)
                    return null;
                try {
                    return vary ? $mol_dom_parse(vary, 'application/xhtml+xml').documentElement : null;
                }
                catch {
                    return $mol_jsx("body", null, vary);
                }
            },
            time: vary => $mol_jsx("body", null, vary),
            dura: vary => $mol_jsx("body", null, vary),
            span: vary => $mol_jsx("body", null, vary),
            dict: vary => $mol_jsx("body", null, JSON.stringify(vary)),
            list: vary => $mol_jsx("body", null, JSON.stringify(vary)),
            elem: vary => vary,
            tree: vary => $mol_jsx("body", null, vary),
        });
    }
    $.$giper_baza_vary_cast_elem = $giper_baza_vary_cast_elem;
    function $giper_baza_vary_cast_tree(vary) {
        return $giper_baza_vary_switch(vary, {
            none: vary => null,
            blob: vary => vary instanceof Uint8Array ? $mol_tree2_bin_from_bytes(vary) : null,
            bool: vary => $mol_tree2.struct(vary.toString()),
            bint: vary => $mol_tree2.struct(vary.toString()),
            real: vary => $mol_tree2.struct(vary.toString()),
            link: vary => $mol_tree2.struct(vary.str),
            text: vary => {
                if (!vary)
                    return null;
                try {
                    return $$.$mol_tree2_from_string(vary);
                }
                catch {
                    return $$.$mol_tree2.data(vary);
                }
            },
            time: vary => $mol_tree2.struct(vary.toString()),
            dura: vary => $mol_tree2.struct(vary.toString()),
            span: vary => $mol_tree2.struct(vary.toString()),
            dict: vary => $$.$mol_tree2_from_json(vary),
            list: vary => $$.$mol_tree2_from_json(vary),
            elem: vary => $$.$mol_tree2_xml_from_dom(vary),
            tree: vary => vary,
        });
    }
    $.$giper_baza_vary_cast_tree = $giper_baza_vary_cast_tree;
    $.$giper_baza_vary_cast_funcs = {
        none: () => null,
        blob: $giper_baza_vary_cast_blob,
        bool: $giper_baza_vary_cast_bool,
        bint: $giper_baza_vary_cast_bint,
        real: $giper_baza_vary_cast_real,
        link: $giper_baza_vary_cast_link,
        text: $giper_baza_vary_cast_text,
        time: $giper_baza_vary_cast_time,
        dura: $giper_baza_vary_cast_dura,
        span: $giper_baza_vary_cast_span,
        dict: $giper_baza_vary_cast_dict,
        list: $giper_baza_vary_cast_list,
        elem: $giper_baza_vary_cast_elem,
        tree: $giper_baza_vary_cast_tree,
    };
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_guard_defined(value) {
        return value !== null && value !== undefined;
    }
    $.$mol_guard_defined = $mol_guard_defined;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_bus extends $mol_object {
        name;
        handle;
        channel;
        constructor(name, handle) {
            super();
            this.name = name;
            this.handle = handle;
            const channel = new BroadcastChannel(name);
            channel.onmessage = (event) => this.handle(event.data);
            this.channel = channel;
        }
        destructor() {
            this.channel.close();
        }
        send(data) {
            this.channel.postMessage(data);
        }
    }
    $.$mol_bus = $mol_bus;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_async(obj) {
        let fiber;
        const temp = $mol_wire_task.getter(obj);
        return new Proxy(obj, {
            get(obj, field) {
                const val = obj[field];
                if (typeof val !== 'function')
                    return val;
                let fiber;
                const temp = $mol_wire_task.getter(val);
                return function $mol_wire_async(...args) {
                    fiber?.destructor();
                    fiber = temp(obj, args);
                    return fiber.async();
                };
            },
            apply(obj, self, args) {
                fiber?.destructor();
                fiber = temp(self, args);
                return fiber.async();
            },
        });
    }
    $.$mol_wire_async = $mol_wire_async;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_array_chunks(array, rule) {
        const br = typeof rule === 'number' ? (_, i) => i % rule === 0 : rule;
        let chunk = [];
        const chunks = [];
        for (let i = 0; i < array.length; ++i) {
            const item = array[i];
            if (br(item, i)) {
                if (chunk.length)
                    chunks.push(chunk);
                chunk = [];
            }
            chunk.push(item);
        }
        if (chunk.length)
            chunks.push(chunk);
        return chunks;
    }
    $.$mol_array_chunks = $mol_array_chunks;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$giper_baza_land_root = {
        data: new $giper_baza_link(''),
        tine: new $giper_baza_link('AQAAAAAA'),
    };
    class $giper_baza_land extends $mol_object {
        link() {
            return this.auth().pass().lord();
        }
        auth() {
            return this.$.$giper_baza_auth.current();
        }
        faces = new $giper_baza_face_map;
        _pass = new $mol_wire_dict();
        _seal_item = new $mol_wire_dict();
        _seal_shot = new $mol_wire_dict();
        _seal_partial = new Set();
        _gift = new $mol_wire_dict();
        _sand = new $mol_wire_dict();
        pass_add(pass) {
            if (this._pass.has(pass.lord().str))
                return;
            this._pass.set(pass.lord().str, pass);
        }
        seal_add(seal) {
            const prev = this._seal_shot.get(seal.shot().str);
            if (prev)
                return;
            for (const hash of seal.hash_list()) {
                const prev = this._seal_item.get(hash.str);
                if ($giper_baza_unit_seal.compare(prev, seal) <= 0)
                    continue;
                this._seal_item.set(hash.str, seal);
            }
            const peer = seal.lord().peer();
            this.faces.peer_time(peer.str, seal.time(), seal.tick());
            this._seal_shot.set(seal.shot().str, seal);
            this.faces.peer_summ_shift(peer.str, +1);
            if (!seal.alive_full())
                this._seal_partial.add(seal);
        }
        gift_add(gift) {
            const mate = gift.mate();
            const prev = this._gift.get(mate.str);
            if ($giper_baza_unit_gift.compare(prev, gift) <= 0)
                return;
            const peer = gift.lord().peer();
            if (prev)
                this.gift_del(prev);
            else
                this.faces.peer_summ_shift(peer.str, +1);
            this._gift.set(mate.str, gift);
            this.faces.peer_time(peer.str, gift.time(), gift.tick());
            this.unit_seal_inc(gift);
            if ((prev?.rank() ?? $giper_baza_rank_deny) > gift.rank())
                this.rank_audit();
        }
        sand_add(sand) {
            let peers = this._sand.get(sand.head().str);
            if (!peers)
                this._sand.set(sand.head().str, peers = new $mol_wire_dict);
            let sands = peers.get(sand.lord().str);
            if (!sands)
                peers.set(sand.lord().str, sands = new $mol_wire_dict);
            const prev = sands.get(sand.self().str);
            if ($giper_baza_unit_sand.compare(prev, sand) <= 0)
                return;
            const peer = sand.lord().peer();
            if (prev)
                this.sand_del(prev);
            else
                this.faces.peer_summ_shift(peer.str, +1);
            sands.set(sand.self().str, sand);
            this.faces.peer_time(peer.str, sand.time(), sand.tick());
            this.unit_seal_inc(sand);
        }
        units_reaping = new Set();
        unit_seal_inc(unit) {
            const seal = this.unit_seal(unit);
            if (!seal)
                return;
            seal.alive_items.add(unit.hash().str);
            if (seal.alive_full())
                this._seal_partial.delete(seal);
            else
                this._seal_partial.add(seal);
        }
        unit_seal_dec(unit) {
            const seal = this.unit_seal(unit);
            if (!seal)
                return;
            seal.alive_items.delete(unit.hash().str);
            if (!seal.alive_items.size)
                this.seal_del(seal);
            else
                this._seal_partial.add(seal);
        }
        seal_del(seal) {
            const shot = seal.shot();
            if (!this._seal_shot.has(shot.str))
                return;
            this._seal_shot.delete(shot.str);
            this.faces.peer_summ_shift(seal.lord().peer().str, -1);
            for (const hash of seal.hash_list()) {
                if (this._seal_item.get(hash.str) === seal) {
                    this._seal_item.delete(hash.str);
                }
            }
            this.units_reaping.add(seal);
            this._seal_partial.delete(seal);
        }
        gift_del(gift) {
            const prev = this._gift.get(gift.mate().str);
            if (prev !== gift)
                return;
            this._gift.delete(gift.mate().str);
            this.faces.peer_summ_shift(gift.lord().peer().str, -1);
            this.units_reaping.add(gift);
            this.unit_seal_dec(gift);
        }
        sand_del(sand) {
            const peers = this._sand.get(sand.head().str);
            if (!peers)
                return;
            const sands = peers.get(sand.lord().str);
            if (!sands)
                return;
            const prev = sands.get(sand.self().str);
            if (prev !== sand)
                return;
            sands.delete(sand.self().str);
            this.faces.peer_summ_shift(sand.lord().peer().str, -1);
            this.units_reaping.add(sand);
            this.unit_seal_dec(sand);
        }
        lord_pass(lord) {
            return this._pass.get(lord.str) ?? null;
        }
        unit_seal(unit) {
            const seal = this._seal_item.get(unit.hash().str);
            if (!seal)
                return null;
            if (seal.lord().str != unit.lord().str)
                return null;
            return seal;
        }
        sand_get(head, lord, self) {
            return this._sand.get(head.str)?.get(lord.str)?.get(self.str) ?? null;
        }
        _self_all = new $mol_wire_dict();
        self_make(idea = Math.floor(Math.random() * 2 ** 48)) {
            const auth = this.auth();
            const rank = this.pass_rank(auth.pass());
            if (rank < $giper_baza_rank_tier.post)
                $mol_fail(new Error(`Rank too low (${rank})`));
            for (let i = 0; i < 4096; ++i) {
                idea = $mol_hash_numbers([idea]);
                if (!idea)
                    continue;
                const idea_link = $giper_baza_link.from_int(idea);
                if (/[æÆ]/.test(idea_link.str))
                    continue;
                if (this._self_all.has(idea_link.str))
                    continue;
                this._self_all.set(idea_link.str, null);
                return idea_link;
            }
            $mol_fail(new Error(`Too long self generation`));
        }
        home() {
            return this.Data($giper_baza_home);
        }
        area_make(idea = Math.floor($mol_wire_sync(Math).random() * 2 ** 48)) {
            let id = '';
            while (true) {
                idea = $mol_hash_numbers([idea]);
                if (!idea)
                    continue;
                id = $giper_baza_link.from_int(idea).str;
                if (/[æÆ]/.test(id))
                    continue;
                break;
            }
            const link = new $giper_baza_link(this.link().lord().str + '_' + id);
            const area = this.$.$giper_baza_glob.Land(link);
            area.inherit();
            area.bus();
            area.sync_mine();
            area.sync_yard();
            return area;
        }
        inherit() {
            const area = this.link();
            const lord = this.link().lord();
            if (area.str === lord.str)
                return;
            const Lord = this.$.$giper_baza_glob.Land(lord);
            Lord.saving();
            const units = new Set();
            for (const gift of Lord._gift.values()) {
                const seal = Lord.unit_seal(gift);
                if (!seal)
                    continue;
                units.add(gift);
                units.add(seal);
                units.add(Lord.lord_pass(gift.lord()));
                const mate = gift.mate();
                if (mate.str)
                    units.add(Lord.lord_pass(mate));
            }
            this.diff_apply([...units], 'skip_load');
        }
        Data(Node) {
            return this.Node(Node).Item($.$giper_baza_land_root.data);
        }
        Tine() {
            return this.Node($giper_baza_list_link).Item($.$giper_baza_land_root.tine);
        }
        Node(Node) {
            return new $giper_baza_fund((head) => {
                return Node.make({
                    land: () => this,
                    head: $mol_const(head),
                });
            });
        }
        total() {
            let total = this._gift.size + this._seal_item.size;
            for (const peers of this._sand.values()) {
                for (const units of peers.values()) {
                    total += units.size;
                }
            }
            return total;
        }
        king_pass() {
            return this.lord_pass(this.link().lord());
        }
        pass_rank(pass, next) {
            const prev = this.lord_rank(pass.lord());
            if (next === undefined)
                return prev;
            if (next === prev)
                return prev;
            this.give(pass, next);
            return next;
        }
        lord_tier(lord) {
            return $giper_baza_rank_tier_of(this.lord_rank(lord));
        }
        lord_rate(lord) {
            return $giper_baza_rank_rate_of(this.lord_rank(lord));
        }
        lord_rank(lord, next) {
            if (lord.str === this.link().lord().str)
                return $giper_baza_rank_rule;
            if (next === undefined) {
                return this._gift.get(lord.str)?.rank()
                    ?? this._gift.get($giper_baza_link.hole.str)?.rank()
                    ?? (this.encrypted() ? $giper_baza_rank_deny : $giper_baza_rank_read);
            }
            const pass = this.lord_pass(lord);
            if (!pass)
                $mol_fail(new Error(`No Pass for ${lord}`));
            return this.pass_rank(pass, next);
        }
        diff_units(skip_faces = new $giper_baza_face_map) {
            this.loading();
            const skipped = new Map();
            const delta = new Set();
            const passes = new Set();
            function collect(unit) {
                const peer = unit.lord().peer().str;
                const face_limit = skip_faces.get(peer)?.time_tick ?? 0;
                if (unit.time_tick() > face_limit)
                    return delta.add(unit);
                const skipped_units = skipped.get(peer);
                if (skipped_units)
                    skipped_units.add(unit);
                else
                    skipped.set(peer, new Set([unit]));
            }
            for (const seal of this._seal_item.values())
                collect(seal);
            for (const gift of this._gift.values()) {
                collect(gift);
                if (gift.mate().str) {
                    if (skip_faces.has(gift.lord().peer().str))
                        continue;
                    const mate_pass = this.lord_pass(gift.mate());
                    if (mate_pass)
                        passes.add(mate_pass);
                }
            }
            for (const kids of this._sand.values()) {
                for (const peers of kids.values()) {
                    for (const sand of peers.values()) {
                        this.sand_decode(sand);
                        collect(sand);
                    }
                }
            }
            for (const [peer, face] of skip_faces) {
                const skipped_units = skipped.get(peer);
                const mass = skipped_units?.size ?? 0;
                if (mass <= face.summ)
                    continue;
                if (this.$.$giper_baza_log())
                    $mol_wire_sync(this.$).$mol_log3_warn({
                        place: this,
                        message: '💔 Fail Summ',
                        hint: 'Relax and wait for full peer resync',
                        peer,
                        mass,
                        face,
                    });
                if (skipped_units)
                    for (const unit of skipped_units)
                        delta.add(unit);
            }
            for (const unit of delta) {
                if (skip_faces.has(unit.lord().peer().str))
                    continue;
                const pass = this.lord_pass(unit.lord());
                if (!pass)
                    return $mol_fail(new Error('No pass for lord'));
                passes.add(pass);
            }
            return [...passes, ...delta];
        }
        face_pack() {
            return $giper_baza_pack.make([[
                    this.link().str,
                    new $giper_baza_pack_part([], this.faces.clone()),
                ]]);
        }
        diff_apply(units, skip_load) {
            if (units.length === 0)
                return;
            if (!skip_load)
                this.loading();
            units = $mol_wire_sync(this.$).$giper_baza_unit_sort(units);
            const passes = new Map();
            const mixin_area = this.link().toBin();
            const mixin_lord = this.link().lord().toBin();
            for (const unit of units) {
                if (unit instanceof $giper_baza_auth_pass) {
                    passes.set(unit.hash().str, unit);
                }
            }
            for (const unit of units) {
                if (unit instanceof $giper_baza_unit_seal) {
                    const lord_pass = this.lord_pass(unit.lord()) ?? passes.get(unit.lord().str);
                    if (!lord_pass)
                        return this.$.$mol_fail(new Error(`No Pass for Lord`, { cause: unit.lord() }));
                    if (!this.$.$giper_baza_unit_trusted_check(unit)) {
                        const mixin = unit.wide() ? mixin_lord : mixin_area;
                        const sens = unit.shot().mix(mixin);
                        const checked = $mol_wire_sync(lord_pass).verify(sens, unit.sign());
                        if (!checked)
                            return $mol_fail(new Error(`Wrong Sign`));
                    }
                }
            }
            for (const unit of units) {
                if (unit instanceof $giper_baza_unit_seal) {
                    $giper_baza_unit_trusted_grant(unit);
                }
            }
            for (const unit of units) {
                if (unit instanceof $giper_baza_auth_pass)
                    continue;
                if (this.lord_tier(unit.lord()) < unit.tier_min()) {
                    return this.$.$mol_fail(new Error('Too low Tier'));
                }
                const lord_pass = this.lord_pass(unit.lord()) ?? passes.get(unit.lord().str);
                if (!lord_pass)
                    return this.$.$mol_fail(new Error(`No Pass for Lord`, { cause: unit.lord() }));
                switch (unit.kind()) {
                    case 'seal': {
                        const seal = unit;
                        if (this.lord_rate(unit.lord()) < seal.rate_min()) {
                            return this.$.$mol_fail(new Error('Too low Rate'));
                        }
                        this.seal_add(seal);
                        break;
                    }
                    case 'gift': {
                        const gift = unit;
                        if (!this.$.$giper_baza_unit_trusted_check(gift)) {
                            const seal = this.unit_seal(gift);
                            if (!seal)
                                return this.$.$mol_fail(new Error(`No Seal for Gift`, { cause: gift }));
                        }
                        if (gift.mate().str) {
                            const mate_pass = this.lord_pass(gift.mate()) ?? passes.get(gift.mate().str);
                            if (!mate_pass)
                                return this.$.$mol_fail(new Error(`No Pass for Mate`, { cause: gift }));
                            this.pass_add(mate_pass);
                        }
                        this.gift_add(gift);
                        break;
                    }
                    case 'sand': {
                        const sand = unit;
                        if (!this.$.$giper_baza_unit_trusted_check(sand)) {
                            const seal = this.unit_seal(sand);
                            if (!seal)
                                return this.$.$mol_fail(new Error(`No Seal for Sand`));
                        }
                        this.sand_add(sand);
                        break;
                    }
                    default: {
                        return this.$.$mol_fail(new Error(`Unsupported Kind`));
                    }
                }
                this.pass_add(lord_pass);
            }
            return units;
        }
        rank_audit() {
            start: while (true) {
                for (const [shot, seal] of this._seal_shot) {
                    const rank = this.lord_rank(seal.lord());
                    if (rank >= seal.rank_min())
                        continue;
                    this.seal_del(seal);
                }
                for (const [lord, gift] of this._gift) {
                    const tier = this.lord_tier(gift.lord());
                    if (tier >= gift.tier_min())
                        continue;
                    this.gift_del(gift);
                    continue start;
                }
                for (const [head, peers] of this._sand) {
                    for (const [peer, sands] of peers) {
                        for (const [self, sand] of sands) {
                            const tier = this.lord_tier(sand.lord());
                            if (tier >= sand.tier_min())
                                continue;
                            this.sand_del(sand);
                        }
                    }
                }
                break;
            }
        }
        fork(preset = [[null, $giper_baza_rank_read]]) {
            const land = this.$.$giper_baza_glob.land_grab(preset);
            land.Tine().items_vary([this.link()]);
            return land;
        }
        sand_ordered({ head, peer }) {
            this.sync();
            const queue = (peer?.str)
                ? [...this._sand.get(head.str)?.get(peer.str)?.values() ?? []]
                : [...this._sand.get(head.str)?.values() ?? []].flatMap(units => [...units.values()]);
            const slices = new Map;
            for (const sand of queue)
                slices.set(sand, 0);
            merge: if (head.str !== $.$giper_baza_land_root.tine.str) {
                const tines = (this.Tine()?.items_vary().slice().reverse() ?? [])
                    .map($giper_baza_vary_cast_link)
                    .filter($mol_guard_defined);
                if (!tines.length)
                    break merge;
                const exists = new Set(queue.map(sand => sand.self().str));
                const glob = this.$.$giper_baza_glob;
                let slice = 0;
                for (const link of tines) {
                    ++slice;
                    const land = glob.Land(link);
                    for (const sand of land.sand_ordered({ head, peer })) {
                        if (exists.has(sand.self().str))
                            continue;
                        queue.push(sand);
                        exists.add(sand.self().str);
                        slices.set(sand, slice);
                    }
                }
            }
            if (queue.length < 2)
                return queue;
            const compare = (left, right) => {
                return (slices.get(left) - slices.get(right)) || $giper_baza_unit_sand.compare(left, right);
            };
            queue.sort(compare);
            let entry = {
                sand: null,
                next: '',
                prev: '',
            };
            const key = peer === null ? (sand) => sand.path() : (sand) => sand.self().str;
            const by_key = new Map([['', entry]]);
            const by_self = new Map([['', entry]]);
            while (queue.length) {
                const last = queue.pop();
                by_key.get(entry.prev).next = key(last);
                const item = { sand: last, next: '', prev: entry.prev };
                by_key.set(key(last), item);
                const exists = by_self.get(last.self().str);
                if (!exists || compare(exists.sand, last) < 0) {
                    by_self.set(last.self().str, item);
                }
                entry.prev = key(last);
                for (let cursor = queue.length - 1; cursor >= 0; --cursor) {
                    const kid = queue[cursor];
                    let lead = by_self.get(kid.lead().str);
                    if (!lead)
                        continue;
                    while (lead.next && (compare(by_key.get(lead.next).sand, kid) < 0))
                        lead = by_key.get(lead.next);
                    const exists1 = by_key.get(key(kid));
                    if (exists1) {
                        if ((lead.sand ? key(lead.sand) : '') === exists1.prev) {
                            exists1.sand = kid;
                            if (cursor === queue.length - 1)
                                queue.pop();
                            continue;
                        }
                        by_key.get(exists1.prev).next = exists1.next;
                        by_key.get(exists1.next).prev = exists1.prev;
                    }
                    const follower = by_key.get(lead.next);
                    follower.prev = key(kid);
                    const item = { sand: kid, next: lead.next, prev: lead.sand ? key(lead.sand) : '' };
                    by_key.set(key(kid), item);
                    const exists2 = by_self.get(kid.self().str);
                    if (!exists2 || compare(exists2.sand, kid) < 0) {
                        by_self.set(kid.self().str, item);
                    }
                    lead.next = key(kid);
                    if (cursor === queue.length - 1)
                        queue.pop();
                    cursor = queue.length;
                }
            }
            const res = [];
            while (entry.next) {
                entry = by_key.get(entry.next);
                res.push(entry.sand);
            }
            return res;
        }
        join() {
            this.encrypted(this.encrypted());
        }
        give(mate_pass, rank) {
            this.join();
            const gift = $giper_baza_unit_gift.make();
            const lord_pass = this.auth().pass();
            gift._land = this;
            gift.lord(lord_pass.lord());
            gift.rank(rank);
            gift.time_tick(this.faces.tick().time_tick);
            if (mate_pass)
                gift.mate(mate_pass.lord());
            if (rank >= $giper_baza_rank_read) {
                const secret_land = this.secret();
                if (secret_land) {
                    if (!mate_pass)
                        return $mol_fail(new Error(`Encrypted land can't be shared to everyone`));
                    const secret_mutual = this.auth().secret_mutual(mate_pass);
                    if (secret_mutual) {
                        const code = $mol_wire_sync(secret_mutual).close(secret_land, gift.salt());
                        gift.code().set(code);
                    }
                }
            }
            $giper_baza_unit_trusted_grant(gift);
            this.diff_apply([lord_pass, ...$mol_maybe(mate_pass), gift]);
            this.broadcast();
            return gift;
        }
        post(lead, head, self, vary, tag = 'term') {
            this.join();
            if (vary instanceof $giper_baza_link)
                vary = vary.relate(this.link());
            const lord_pass = this.auth().pass();
            const encrypted = this.encrypted();
            let bin = $giper_baza_vary.pack($mol_maybe(vary));
            const length = encrypted ? Math.ceil((bin.byteLength + 1) / 16) * 16 : bin.byteLength;
            const sand = $giper_baza_unit_sand.make(length);
            sand._open = bin;
            sand._land = this;
            $giper_baza_unit_trusted_grant(sand);
            sand.hint(tag);
            sand.time_tick(this.faces.tick().time_tick);
            sand.lord(lord_pass.lord());
            sand.lead(lead);
            sand.head(head);
            sand._vary = vary;
            sand.self(self.str ? self : this.self_make(sand.idea()));
            this.diff_apply([lord_pass, sand]);
            this.broadcast();
            return sand;
        }
        sand_move(sand, head, seat, peer = $giper_baza_link.hole) {
            if (!sand.size())
                $mol_fail(new RangeError(`Can't move wiped sand`));
            const units = this.sand_ordered({ head, peer }).filter(unit => unit.size());
            if (seat > units.length)
                $mol_fail(new RangeError(`Seat (${seat}) out of units length (${units.length})`));
            const lead = seat ? units[seat - 1].self() : $giper_baza_link.hole;
            const vary = this.sand_decode(sand);
            if (sand.head() === head) {
                const seat_prev = units.indexOf(sand);
                if (seat === seat_prev)
                    return;
                if (seat === seat_prev + 1)
                    return;
                const prev = seat_prev ? units[seat_prev - 1].self() : $giper_baza_link.hole;
                const next = units[seat_prev + 1];
                if (next)
                    this.post(prev, head, next.self(), this.sand_decode(next), next.tag());
            }
            else {
                this.sand_wipe(sand);
            }
            return this.post(lead, head, sand.self(), vary, sand.tag());
        }
        sand_wipe(sand, peer = $giper_baza_link.hole) {
            const head = sand.head();
            const units = this.sand_ordered({ head, peer }).filter(unit => unit.size());
            const seat = units.indexOf(sand);
            if (seat < 0)
                return sand;
            return this.post(seat ? units[seat - 1].self() : $giper_baza_link.hole, head, sand.self(), null, 'term');
        }
        broadcast() {
            this.$.$giper_baza_glob.yard().lands_news.add(this.link().str);
        }
        sync() {
            this.loading();
            this.inherit();
            this.bus();
            this.sync_mine();
            this.sync_yard();
            return this;
        }
        destructor() {
            this.$.$giper_baza_glob.yard().forget_land(this);
        }
        mine() {
            return this.$.$giper_baza_mine.land(this.link());
        }
        sync_mine() {
            return new $mol_wire_atom('', () => this.saving()).fresh();
        }
        sync_yard() {
            return new $mol_wire_atom('', () => this.$.$giper_baza_glob.yard().sync_land(this.link())).fresh();
        }
        bus() {
            return new this.$.$mol_bus(`$giper_baza_land:${this.link()}`, $mol_wire_async(buf => {
                const pack = new $giper_baza_pack(buf);
                const part = new Map(pack.parts()).get(this.link().str);
                for (const unit of part.units) {
                    $giper_baza_unit_trusted_grant(unit);
                    this.mine().units_persisted.add(unit);
                }
                this.diff_apply(part.units);
            }));
        }
        loading() {
            let units = $mol_wire_sync(this.mine()).units_load();
            if (this.$.$giper_baza_log())
                $mol_wire_sync(this.$).$mol_log3_rise({
                    place: this,
                    message: '🌱 Load Unit',
                    units: units,
                });
            $mol_wire_sync(this).diff_apply(units, 'skip_load');
        }
        saving() {
            this.loading();
            const mine = this.mine();
            const encoding = [];
            const signing = [];
            const persisting = [];
            const check_lord = (lord) => {
                const pass = this.lord_pass(lord);
                if (!pass)
                    return;
                if ($mol_wire_sync(mine.units_persisted).has(pass))
                    return;
                persisting.push(pass);
                mine.units_persisted.add(pass);
            };
            for (const gift of this._gift.values()) {
                if ($mol_wire_sync(mine.units_persisted).has(gift))
                    continue;
                if (!$mol_wire_sync(this).unit_seal(gift))
                    signing.push(gift);
                persisting.push(gift);
                mine.units_persisted.add(gift);
                check_lord(gift.lord());
                check_lord(gift.mate());
            }
            for (const kids of this._sand.values()) {
                for (const units of kids.values()) {
                    for (const sand of units.values()) {
                        if ($mol_wire_sync(mine.units_persisted).has(sand))
                            continue;
                        if (!$mol_wire_sync(this).unit_seal(sand)) {
                            encoding.push(sand);
                            signing.push(sand);
                        }
                        persisting.push(sand);
                        mine.units_persisted.add(sand);
                        check_lord(sand.lord());
                    }
                }
            }
            if (!persisting.length)
                return;
            return this.save(encoding, signing, persisting);
        }
        async save(encoding, signing, persisting) {
            const mine = this.mine();
            await Promise.all(encoding.map(unit => this.sand_encode(unit)));
            const seals = signing.length ? await this.units_sign(signing) : [];
            for (const seal of seals)
                this.seal_add(seal);
            persisting = [...persisting, ...seals];
            if (persisting.length) {
                const part = new $giper_baza_pack_part(persisting);
                const pack = $giper_baza_pack.make([[this.link().str, part]]);
                this.bus().send(pack.buffer);
                const reaping = [...this.units_reaping];
                if (this.$.$giper_baza_log())
                    this.$.$mol_log3_done({
                        place: this,
                        message: '💾 Save Unit',
                        ins: persisting,
                        del: reaping,
                    });
                await $mol_wire_async(mine).units_save({ ins: persisting, del: [...this.units_reaping] });
                this.units_reaping.clear();
            }
            return this;
        }
        async units_sign(units) {
            const lands = new Map();
            for (const unit of units) {
                let us = lands.get(unit._land);
                if (us)
                    us.push(unit.hash());
                else
                    lands.set(unit._land, [unit.hash()]);
            }
            for (const seal of this._seal_partial) {
                if (seal.lord().str !== this.auth().pass().lord().str)
                    continue;
                let us = lands.get(this);
                if (!us)
                    lands.set(seal._land, us = []);
                const hashes = seal.alive_list();
                us.push(...hashes);
                this.seal_del(seal);
            }
            const threads = [...lands.entries()].flatMap(([land, hashes]) => {
                const auth = land.auth();
                const rate = $giper_baza_rank_rate_of(land.pass_rank(auth.pass()));
                const wide = Boolean(land.link().area().str);
                return $mol_array_chunks(hashes, $giper_baza_unit_seal_limit).map(async (hashes) => {
                    const seal = $giper_baza_unit_seal.make(hashes.length, wide);
                    seal.time_tick(this.faces.tick().time_tick);
                    seal.lord(auth.pass().lord());
                    seal.hash_list(hashes);
                    seal._land = this;
                    const shot = seal.shot().mix(this.link());
                    do {
                        seal.sign(await auth.sign(shot));
                    } while (seal.rate_min() > rate);
                    for (const hash of hashes)
                        seal.alive_items.add(hash.str);
                    if (!seal.alive_full())
                        this._seal_partial.add(seal);
                    return seal;
                });
            });
            return Promise.all(threads);
        }
        async sand_encode(sand) {
            if (sand._open === null)
                return sand;
            if (!sand.size())
                return sand;
            let bin = sand._open;
            const secret = sand._land.secret();
            if (secret)
                bin = await secret.encrypt(bin, sand.salt());
            sand.ball(bin);
            return sand;
        }
        sand_decode(sand) {
            try {
                let vary = this.sand_decode_raw(sand);
                if (vary instanceof $giper_baza_link)
                    vary = vary.resolve(this.link());
                return vary;
            }
            catch (error) {
                if (error instanceof Promise)
                    return $mol_fail_hidden(error);
                this.$.$mol_fail_log(error);
                return null;
            }
        }
        sand_decode_raw(sand) {
            if (this.sand_get(sand.head(), sand.lord(), sand.self()) !== sand) {
                for (const id of this.Tine().items_vary() ?? []) {
                    const vary = this.$.$giper_baza_glob.Land($giper_baza_vary_cast_link(id)).sand_decode_raw(sand);
                    if (vary !== undefined)
                        return vary;
                }
                return undefined;
            }
            const secret = this.secret();
            if (sand._vary !== undefined)
                return sand._vary;
            if (sand._open !== null)
                return sand._vary = $giper_baza_vary.take(sand._open)[0] ?? null;
            sand._ball = sand._open = sand.size() > $giper_baza_unit_sand.size_equator ? $mol_wire_sync(this.mine()).ball_load(sand.path()) : sand.data();
            if (secret && sand._ball && sand.size()) {
                try {
                    sand._open = $mol_wire_sync(secret).decrypt(sand._ball, sand.salt());
                }
                catch (error) {
                    if ($mol_fail_catch(error)) {
                        if (error.message)
                            $mol_fail_hidden(error);
                        else
                            $mol_fail_hidden(new Error(`Can't decrypt`, { cause: error }));
                    }
                }
            }
            return sand._vary = (sand._open ? $giper_baza_vary.take(sand._open)[0] ?? null : null);
        }
        encryptable() {
            return !this._sand.size;
        }
        encrypted(next) {
            $mol_wire_solid();
            const gift = this._gift.get(this.link().str);
            const prev = gift?.code_exists() ?? false;
            if (next === undefined)
                return prev;
            if (this.faces.size) {
                if (prev === next)
                    return prev;
                $mol_fail(new Error(`Change encryption is forbidden`));
            }
            const auth = this.auth();
            const unit = $mol_wire_sync($giper_baza_unit_gift).make();
            $giper_baza_unit_trusted_grant(unit);
            unit.rank($giper_baza_rank_rule);
            unit.time_tick(this.faces.tick().time_tick);
            unit.lord(auth.pass().lord());
            unit.mate(auth.pass().lord());
            unit._land = this;
            if (next) {
                const secret = $mol_wire_sync($mol_crypto_sacred).make();
                const secret_mutual = auth.secret_mutual(auth.public());
                const secret_closed = $mol_wire_sync(secret_mutual).close(secret, unit.salt());
                unit.code().set(secret_closed);
            }
            this.diff_apply([auth.pass(), unit]);
            return next;
        }
        secret() {
            if (!this.encrypted())
                return null;
            const auth = this.auth();
            const gift = this._gift.get(auth.pass().lord().str);
            if (!gift)
                return $mol_fail(new Error(`Access denied`));
            if (!gift.code_exists())
                return $mol_fail(new Error(`No key to decrypt`));
            const secret_mutual = auth.secret_mutual(this.lord_pass(gift.lord()));
            if (!secret_mutual)
                return $mol_fail(new Error(`Can't decrypt secret`));
            return new $mol_crypto_sacred($mol_wire_sync(secret_mutual).open(gift.code(), gift.salt()).buffer);
        }
        dump() {
            this.saving();
            const units = [];
            for (const gift of this._gift.values())
                units.push(gift);
            for (const heads of this._sand.values()) {
                for (const sands of heads.values()) {
                    for (const sand of sands.values()) {
                        units.push(sand);
                    }
                }
            }
            return {
                land: this.link(),
                units
            };
        }
        ;
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), ' ', $mol_dev_format_auto(this.faces.stat));
        }
    }
    __decorate([
        $mol_action
    ], $giper_baza_land.prototype, "self_make", null);
    __decorate([
        $mol_action
    ], $giper_baza_land.prototype, "area_make", null);
    __decorate([
        $mol_mem
    ], $giper_baza_land.prototype, "inherit", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_land.prototype, "Data", null);
    __decorate([
        $mol_mem
    ], $giper_baza_land.prototype, "Tine", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_land.prototype, "Node", null);
    __decorate([
        $mol_mem
    ], $giper_baza_land.prototype, "total", null);
    __decorate([
        $mol_mem
    ], $giper_baza_land.prototype, "king_pass", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_land.prototype, "pass_rank", null);
    __decorate([
        $mol_action
    ], $giper_baza_land.prototype, "face_pack", null);
    __decorate([
        $mol_action
    ], $giper_baza_land.prototype, "diff_apply", null);
    __decorate([
        $mol_action
    ], $giper_baza_land.prototype, "fork", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_land.prototype, "sand_ordered", null);
    __decorate([
        $mol_mem,
        $mol_action
    ], $giper_baza_land.prototype, "join", null);
    __decorate([
        $mol_action
    ], $giper_baza_land.prototype, "give", null);
    __decorate([
        $mol_action
    ], $giper_baza_land.prototype, "post", null);
    __decorate([
        $mol_action
    ], $giper_baza_land.prototype, "sand_move", null);
    __decorate([
        $mol_action
    ], $giper_baza_land.prototype, "sand_wipe", null);
    __decorate([
        $mol_mem
    ], $giper_baza_land.prototype, "sync", null);
    __decorate([
        $mol_mem
    ], $giper_baza_land.prototype, "sync_mine", null);
    __decorate([
        $mol_mem
    ], $giper_baza_land.prototype, "sync_yard", null);
    __decorate([
        $mol_mem
    ], $giper_baza_land.prototype, "bus", null);
    __decorate([
        $mol_mem
    ], $giper_baza_land.prototype, "loading", null);
    __decorate([
        $mol_mem
    ], $giper_baza_land.prototype, "saving", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_land.prototype, "sand_decode", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_land.prototype, "sand_decode_raw", null);
    __decorate([
        $mol_mem
    ], $giper_baza_land.prototype, "encryptable", null);
    __decorate([
        $mol_mem
    ], $giper_baza_land.prototype, "encrypted", null);
    __decorate([
        $mol_mem
    ], $giper_baza_land.prototype, "secret", null);
    $.$giper_baza_land = $giper_baza_land;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let $mol_rest_code;
    (function ($mol_rest_code) {
        $mol_rest_code[$mol_rest_code["Continue"] = 100] = "Continue";
        $mol_rest_code[$mol_rest_code["Switching protocols"] = 101] = "Switching protocols";
        $mol_rest_code[$mol_rest_code["Processing"] = 102] = "Processing";
        $mol_rest_code[$mol_rest_code["OK"] = 200] = "OK";
        $mol_rest_code[$mol_rest_code["Created"] = 201] = "Created";
        $mol_rest_code[$mol_rest_code["Accepted"] = 202] = "Accepted";
        $mol_rest_code[$mol_rest_code["Non-Authoritative Information"] = 203] = "Non-Authoritative Information";
        $mol_rest_code[$mol_rest_code["No Content"] = 204] = "No Content";
        $mol_rest_code[$mol_rest_code["Reset Content"] = 205] = "Reset Content";
        $mol_rest_code[$mol_rest_code["Partial Content"] = 206] = "Partial Content";
        $mol_rest_code[$mol_rest_code["Multi Status"] = 207] = "Multi Status";
        $mol_rest_code[$mol_rest_code["Already Reported"] = 208] = "Already Reported";
        $mol_rest_code[$mol_rest_code["IM Used"] = 226] = "IM Used";
        $mol_rest_code[$mol_rest_code["Multiple Choices"] = 300] = "Multiple Choices";
        $mol_rest_code[$mol_rest_code["Moved Permanently"] = 301] = "Moved Permanently";
        $mol_rest_code[$mol_rest_code["Found"] = 302] = "Found";
        $mol_rest_code[$mol_rest_code["See Other"] = 303] = "See Other";
        $mol_rest_code[$mol_rest_code["Not Modified"] = 304] = "Not Modified";
        $mol_rest_code[$mol_rest_code["Use Proxy"] = 305] = "Use Proxy";
        $mol_rest_code[$mol_rest_code["Temporary Redirect"] = 307] = "Temporary Redirect";
        $mol_rest_code[$mol_rest_code["Bad Request"] = 400] = "Bad Request";
        $mol_rest_code[$mol_rest_code["Unauthorized"] = 401] = "Unauthorized";
        $mol_rest_code[$mol_rest_code["Payment Required"] = 402] = "Payment Required";
        $mol_rest_code[$mol_rest_code["Forbidden"] = 403] = "Forbidden";
        $mol_rest_code[$mol_rest_code["Not Found"] = 404] = "Not Found";
        $mol_rest_code[$mol_rest_code["Method Not Allowed"] = 405] = "Method Not Allowed";
        $mol_rest_code[$mol_rest_code["Not Acceptable"] = 406] = "Not Acceptable";
        $mol_rest_code[$mol_rest_code["Proxy Authentication Required"] = 407] = "Proxy Authentication Required";
        $mol_rest_code[$mol_rest_code["Request Timeout"] = 408] = "Request Timeout";
        $mol_rest_code[$mol_rest_code["Conflict"] = 409] = "Conflict";
        $mol_rest_code[$mol_rest_code["Gone"] = 410] = "Gone";
        $mol_rest_code[$mol_rest_code["Length Required"] = 411] = "Length Required";
        $mol_rest_code[$mol_rest_code["Precondition Failed"] = 412] = "Precondition Failed";
        $mol_rest_code[$mol_rest_code["Request Entity Too Large"] = 413] = "Request Entity Too Large";
        $mol_rest_code[$mol_rest_code["Request URI Too Long"] = 414] = "Request URI Too Long";
        $mol_rest_code[$mol_rest_code["Unsupported Media Type"] = 415] = "Unsupported Media Type";
        $mol_rest_code[$mol_rest_code["Requested Range Not Satisfiable"] = 416] = "Requested Range Not Satisfiable";
        $mol_rest_code[$mol_rest_code["Expectation Failed"] = 417] = "Expectation Failed";
        $mol_rest_code[$mol_rest_code["Teapot"] = 418] = "Teapot";
        $mol_rest_code[$mol_rest_code["Unprocessable Entity"] = 422] = "Unprocessable Entity";
        $mol_rest_code[$mol_rest_code["Locked"] = 423] = "Locked";
        $mol_rest_code[$mol_rest_code["Failed Dependency"] = 424] = "Failed Dependency";
        $mol_rest_code[$mol_rest_code["Upgrade Required"] = 426] = "Upgrade Required";
        $mol_rest_code[$mol_rest_code["Precondition Required"] = 428] = "Precondition Required";
        $mol_rest_code[$mol_rest_code["Too Many Requests"] = 429] = "Too Many Requests";
        $mol_rest_code[$mol_rest_code["Request Header Fields Too Large"] = 431] = "Request Header Fields Too Large";
        $mol_rest_code[$mol_rest_code["Unavailable For Legal Reasons"] = 451] = "Unavailable For Legal Reasons";
        $mol_rest_code[$mol_rest_code["Internal Server Error"] = 500] = "Internal Server Error";
        $mol_rest_code[$mol_rest_code["Not Implemented"] = 501] = "Not Implemented";
        $mol_rest_code[$mol_rest_code["Bad Gateway"] = 502] = "Bad Gateway";
        $mol_rest_code[$mol_rest_code["Service Unavailable"] = 503] = "Service Unavailable";
        $mol_rest_code[$mol_rest_code["Gateway Timeout"] = 504] = "Gateway Timeout";
        $mol_rest_code[$mol_rest_code["HTTP Version Not Supported"] = 505] = "HTTP Version Not Supported";
        $mol_rest_code[$mol_rest_code["Insufficient Storage"] = 507] = "Insufficient Storage";
        $mol_rest_code[$mol_rest_code["Loop Detected"] = 508] = "Loop Detected";
        $mol_rest_code[$mol_rest_code["Not Extended"] = 510] = "Not Extended";
        $mol_rest_code[$mol_rest_code["Network Authentication Required"] = 511] = "Network Authentication Required";
        $mol_rest_code[$mol_rest_code["Network Read Timeout Error"] = 598] = "Network Read Timeout Error";
        $mol_rest_code[$mol_rest_code["Network Connect Timeout Error"] = 599] = "Network Connect Timeout Error";
    })($mol_rest_code = $.$mol_rest_code || ($.$mol_rest_code = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_rest_port extends $mol_object {
        send_code(code) { }
        send_type(mime) { }
        send_data(data) {
            if (data === null)
                return this.send_nil();
            if (typeof data === 'string')
                return this.send_text(data);
            if (data instanceof Uint8Array)
                return this.send_bin(data);
            if (data instanceof $mol_dom_context.Element)
                return this.send_dom(data);
            return this.send_json(data);
        }
        send_nil() {
            this.send_code(204);
        }
        send_bin(data) {
            this.send_code(200);
            this.send_type('application/octet-stream');
        }
        send_text(data) {
            this.send_code(200);
            this.send_type('text/plain;charset=utf-8');
            this.send_bin($mol_charset_encode(data));
        }
        send_json(data) {
            this.send_code(200);
            this.send_type('application/json');
            this.send_text(JSON.stringify(data));
        }
        send_dom(data) {
            this.send_code(200);
            this.send_type('text/html;charset=utf-8');
            this.send_text($mol_dom_serialize(data));
        }
        static make(config) {
            return super.make(config);
        }
    }
    __decorate([
        $mol_action
    ], $mol_rest_port.prototype, "send_data", null);
    __decorate([
        $mol_action
    ], $mol_rest_port.prototype, "send_nil", null);
    __decorate([
        $mol_action
    ], $mol_rest_port.prototype, "send_bin", null);
    __decorate([
        $mol_action
    ], $mol_rest_port.prototype, "send_text", null);
    __decorate([
        $mol_action
    ], $mol_rest_port.prototype, "send_json", null);
    __decorate([
        $mol_action
    ], $mol_rest_port.prototype, "send_dom", null);
    __decorate([
        ($mol_action)
    ], $mol_rest_port, "make", null);
    $.$mol_rest_port = $mol_rest_port;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_wire_set extends Set {
        pub = new $mol_wire_pub;
        has(value) {
            this.pub.promote();
            return super.has(value);
        }
        entries() {
            this.pub.promote();
            return super.entries();
        }
        keys() {
            this.pub.promote();
            return super.keys();
        }
        values() {
            this.pub.promote();
            return super.values();
        }
        forEach(task, self) {
            this.pub.promote();
            super.forEach(task, self);
        }
        [Symbol.iterator]() {
            this.pub.promote();
            return super[Symbol.iterator]();
        }
        get size() {
            this.pub.promote();
            return super.size;
        }
        add(value) {
            if (super.has(value))
                return this;
            super.add(value);
            this.pub.emit();
            return this;
        }
        delete(value) {
            const res = super.delete(value);
            if (res)
                this.pub.emit();
            return res;
        }
        clear() {
            if (!super.size)
                return;
            super.clear();
            this.pub.emit();
        }
        item(val, next) {
            if (next === undefined)
                return this.has(val);
            if (next)
                this.add(val);
            else
                this.delete(val);
            return next;
        }
    }
    $.$mol_wire_set = $mol_wire_set;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_rest_port_ws extends $mol_rest_port {
    }
    $.$mol_rest_port_ws = $mol_rest_port_ws;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_rest_port_ws_std extends $mol_rest_port_ws {
        socket;
        send_nil() {
            if (this.socket.readyState !== this.socket.OPEN)
                return;
            this.socket.send('');
        }
        send_bin(data) {
            if (this.socket.readyState !== this.socket.OPEN)
                return;
            this.socket.send(data);
        }
        send_text(data) {
            if (this.socket.readyState !== this.socket.OPEN)
                return;
            const bin = $mol_charset_encode(data);
            this.socket.send(bin);
        }
    }
    __decorate([
        $mol_action
    ], $mol_rest_port_ws_std.prototype, "send_nil", null);
    __decorate([
        $mol_action
    ], $mol_rest_port_ws_std.prototype, "send_bin", null);
    __decorate([
        $mol_action
    ], $mol_rest_port_ws_std.prototype, "send_text", null);
    $.$mol_rest_port_ws_std = $mol_rest_port_ws_std;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const Passives = new WeakMap();
    class $giper_baza_yard extends $mol_object {
        glob() {
            return null;
        }
        lands_news = new $mol_wire_set();
        static masters = [];
        master_cursor(next = 0) {
            return next;
        }
        master_current() {
            return this.$.$giper_baza_yard.masters[this.master_cursor()];
        }
        master_next() {
            this.master_cursor((this.master_cursor() + 1) % this.$.$giper_baza_yard.masters.length);
        }
        reconnects(reset) {
            return ($mol_wire_probe(() => this.reconnects()) ?? 0) + 1;
        }
        master() {
            this.reconnects();
            const link = this.master_current();
            if (!link)
                return null;
            const socket = new $mol_dom_context.WebSocket(link.replace(/^http/, 'ws'));
            socket.binaryType = 'arraybuffer';
            const port = $mol_rest_port_ws_std.make({ socket });
            socket.onmessage = async (event) => {
                if (event.data instanceof ArrayBuffer) {
                    if (!event.data.byteLength)
                        return;
                    await $mol_wire_async(this).port_income(port, new Uint8Array(event.data));
                }
                else {
                    this.$.$mol_log3_fail({
                        place: this,
                        message: '💥 Wrong data',
                        data: event.data
                    });
                }
            };
            let interval;
            socket.onclose = () => {
                clearInterval(interval);
                setTimeout(() => this.reconnects(null), 1000);
            };
            Object.assign(socket, {
                destructor: () => {
                    socket.onclose = () => { };
                    clearInterval(interval);
                    socket.close();
                }
            });
            return new Promise((done, fail) => {
                socket.onopen = () => {
                    this.$.$mol_log3_come({
                        place: this,
                        message: '🔗 Connected',
                        port: $mol_key(port),
                        server: link,
                    });
                    interval = setInterval(() => socket.send(new Uint8Array), 30000);
                    done(port);
                };
                socket.onerror = () => {
                    socket.onclose = event => {
                        fail(new Error(`Master (${link}) is unavailable (${event.code})`));
                        clearInterval(interval);
                        interval = setTimeout(() => {
                            this.master_next();
                            this.reconnects(null);
                        }, 1000);
                    };
                };
            });
        }
        slaves = new $mol_wire_set();
        sync() {
            this.sync_news();
            this.sync_port();
        }
        sync_news() {
            const glob = this.$.$giper_baza_glob;
            const lands = [...this.lands_news].map(link => glob.Land(new $giper_baza_link(link)));
            try {
                for (const port of this.masters()) {
                    for (const land of lands) {
                        this.sync_port_land([port, land.link()]);
                    }
                }
                for (const land of lands)
                    land.saving();
                this.lands_news.clear();
            }
            catch (error) {
                $mol_fail_log(error);
            }
        }
        sync_port() {
            for (const port of this.ports())
                this.sync_port_lands(port);
        }
        sync_port_lands(port) {
            for (const land of this.port_lands_active(port)) {
                this.sync_port_land([port, new $giper_baza_link(land)]);
            }
        }
        ports() {
            return [...this.masters(), ...this.slaves];
        }
        masters() {
            try {
                return [this.master()].filter($mol_guard_defined);
            }
            catch (error) {
                $mol_fail_log(error);
                return [];
            }
        }
        port_lands_active(port) {
            return new $mol_wire_set();
        }
        port_lands_passive(port) {
            let passives = Passives.get(port);
            if (!passives)
                Passives.set(port, passives = new Set);
            return passives;
        }
        port_income(port, msg) {
            const pack = $mol_wire_sync($giper_baza_pack).from(msg);
            const parts = $mol_wire_sync(pack).parts();
            for (const [land, part] of parts) {
                const Land = this.$.$giper_baza_glob.Land(new $giper_baza_link(land));
                forget: {
                    if (part.units.length)
                        break forget;
                    if (part.faces.size)
                        break forget;
                    if (!this.port_lands_active(port).has(land))
                        break forget;
                    this.port_lands_active(port).delete(land);
                    if (this.$.$giper_baza_log())
                        $mol_wire_sync(this.$).$mol_log3_done({
                            place: this,
                            message: '➕ Take Free',
                            port: $mol_key(port),
                            land: Land,
                        });
                    continue;
                }
                this.face_port_sync(port, [[land, part]]);
                if (part.units.length) {
                    if (this.$.$giper_baza_log())
                        $mol_wire_sync(this.$).$mol_log3_rise({
                            place: this,
                            message: '➕ Take Unit',
                            port: $mol_key(port),
                            land: Land,
                            units: part.units,
                        });
                    Land.diff_apply(part.units);
                }
                else {
                    if (this.$.$giper_baza_log())
                        $mol_wire_sync(this.$).$mol_log3_rise({
                            place: this,
                            message: '➕ Take Face',
                            port: $mol_key(port),
                            land: Land,
                            faces: part.faces,
                        });
                }
            }
        }
        face_port_sync(port, income) {
            const actives = this.port_lands_active(port);
            const passives = this.port_lands_passive(port);
            for (const [land, part] of income) {
                const land_link = new $giper_baza_link(land);
                if (!passives.has(land))
                    actives.add(land);
                const faces = part.faces;
                let port_faces = this.face_port_land([port, land_link]);
                if (!port_faces)
                    this.face_port_land([port, land_link], port_faces = $mol_mem_cached(() => this.face_port_land([port, land_link]))
                        || new $giper_baza_face_map);
                port_faces.sync(faces);
                for (let unit of part.units) {
                    if (unit instanceof $giper_baza_auth_pass)
                        continue;
                    port_faces.peer_time(unit.lord().peer().str, unit.time(), unit.tick());
                }
            }
        }
        sync_land(land) {
            for (const port of this.masters()) {
                this.port_lands_passive(port).add(land.str);
                this.sync_port_land([port, land]);
            }
            this.sync();
        }
        forget_land(land) {
            const faces = new $giper_baza_face_map;
            faces.stat = land.faces.stat.clone();
            const pack = $giper_baza_pack.make([[
                    land.link().str,
                    new $giper_baza_pack_part([], faces)
                ]]).asArray();
            for (const port of this.ports()) {
                if (!this.port_lands_passive(port).has(land.link().str))
                    continue;
                this.port_lands_passive(port).delete(land.link().str);
                if (this.$.$giper_baza_log())
                    this.$.$mol_log3_done({
                        place: this,
                        message: '🔱 Send Free',
                        port: $mol_key(port),
                        land,
                    });
                port.send_bin(pack);
            }
        }
        sync_port_land([port, land]) {
            try {
                this.init_port_land([port, land]);
                const faces = this.face_port_land([port, land]);
                if (!faces)
                    return;
                const Land = this.$.$giper_baza_glob.Land(land);
                Land.saving();
                const units = Land.diff_units(faces);
                if (!units.length)
                    return;
                if (this.$.$giper_baza_log())
                    this.$.$mol_log3_rise({
                        place: this,
                        message: '🔱 Send Unit',
                        port: $mol_key(port),
                        land: Land,
                        units,
                    });
                const pack = $giper_baza_pack.make([[
                        Land.link().str,
                        new $giper_baza_pack_part(units)
                    ]]);
                port.send_bin(pack.asArray());
                faces.sync(Land.faces);
            }
            catch (error) {
                $mol_fail_log(error);
            }
        }
        init_port_land([port, land]) {
            const Land = this.$.$giper_baza_glob.Land(land);
            Land.loading();
            if (this.$.$giper_baza_log())
                this.$.$mol_log3_come({
                    place: this,
                    message: '🔱 Send Face',
                    port: $mol_key(port),
                    land: Land,
                    faces: Land.faces,
                });
            port.send_bin(Land.face_pack().asArray());
        }
        face_port_land([port, land], next = null) {
            $mol_wire_solid();
            return next;
        }
    }
    __decorate([
        $mol_mem
    ], $giper_baza_yard.prototype, "glob", null);
    __decorate([
        $mol_mem
    ], $giper_baza_yard.prototype, "master_cursor", null);
    __decorate([
        $mol_mem
    ], $giper_baza_yard.prototype, "master_current", null);
    __decorate([
        $mol_action
    ], $giper_baza_yard.prototype, "master_next", null);
    __decorate([
        $mol_mem
    ], $giper_baza_yard.prototype, "reconnects", null);
    __decorate([
        $mol_mem
    ], $giper_baza_yard.prototype, "master", null);
    __decorate([
        $mol_mem
    ], $giper_baza_yard.prototype, "sync", null);
    __decorate([
        $mol_mem
    ], $giper_baza_yard.prototype, "sync_news", null);
    __decorate([
        $mol_mem
    ], $giper_baza_yard.prototype, "sync_port", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_yard.prototype, "sync_port_lands", null);
    __decorate([
        $mol_mem
    ], $giper_baza_yard.prototype, "ports", null);
    __decorate([
        $mol_mem
    ], $giper_baza_yard.prototype, "masters", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_yard.prototype, "port_lands_active", null);
    __decorate([
        $mol_action
    ], $giper_baza_yard.prototype, "port_income", null);
    __decorate([
        $mol_action
    ], $giper_baza_yard.prototype, "face_port_sync", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_yard.prototype, "sync_land", null);
    __decorate([
        $mol_action
    ], $giper_baza_yard.prototype, "forget_land", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_yard.prototype, "sync_port_land", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_yard.prototype, "init_port_land", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_yard.prototype, "face_port_land", null);
    $.$giper_baza_yard = $giper_baza_yard;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$giper_baza_yard.masters = [
        'https://baza.giper.dev/',
    ];
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let $giper_baza_unit_kind;
    (function ($giper_baza_unit_kind) {
        $giper_baza_unit_kind[$giper_baza_unit_kind["sand"] = $giper_baza_slot_kind.sand] = "sand";
        $giper_baza_unit_kind[$giper_baza_unit_kind["gift"] = $giper_baza_slot_kind.gift] = "gift";
        $giper_baza_unit_kind[$giper_baza_unit_kind["seal"] = $giper_baza_slot_kind.seal] = "seal";
        $giper_baza_unit_kind[$giper_baza_unit_kind["pass"] = $giper_baza_slot_kind.pass] = "pass";
    })($giper_baza_unit_kind = $.$giper_baza_unit_kind || ($.$giper_baza_unit_kind = {}));
    $.$giper_baza_unit_trusted = new WeakSet();
    function $giper_baza_unit_trusted_grant(unit) {
        if (unit instanceof $giper_baza_auth_pass)
            return;
        $.$giper_baza_unit_trusted.add(unit);
    }
    $.$giper_baza_unit_trusted_grant = $giper_baza_unit_trusted_grant;
    function $giper_baza_unit_trusted_check(unit) {
        if (unit instanceof $giper_baza_auth_pass)
            return true;
        return $.$giper_baza_unit_trusted.has(unit);
    }
    $.$giper_baza_unit_trusted_check = $giper_baza_unit_trusted_check;
    function $giper_baza_unit_sort(units) {
        const nodes = new Map();
        const graph = new $mol_graph();
        for (const unit of units) {
            const self = unit.hash().str;
            nodes.set(self, unit);
            if (unit instanceof $giper_baza_auth_pass)
                continue;
            unit.choose({
                gift: gift => {
                    graph.link(self, unit.lord().str, 1);
                    graph.link(self, '', 1);
                    graph.link(gift.mate().str, self, 1);
                },
                sand: sand => {
                    graph.link(self, unit.lord().str, 1);
                    graph.link(self, '', 1);
                },
                seal: seal => {
                    graph.link(self, unit.lord().str, 0);
                    graph.link(self, '', 0);
                    for (const hash of seal.hash_list()) {
                        graph.link(hash.str, self, 1);
                    }
                }
            });
        }
        graph.acyclic(e => e);
        return [...graph.sorted].map(key => nodes.get(key)).filter(Boolean);
    }
    $.$giper_baza_unit_sort = $giper_baza_unit_sort;
    class $giper_baza_unit_base extends $mol_buffer {
        static compare(left, right) {
            if (!left && !right)
                return 0;
            if (!left)
                return +1;
            if (!right)
                return -1;
            return (right.time() - left.time())
                || $giper_baza_link_compare(left.lord(), right.lord())
                || (right.tick() - left.tick());
        }
        static narrow(buf) {
            const kind = $giper_baza_unit_kind[new $mol_buffer(buf).uint8(0)];
            const Type = {
                sand: $giper_baza_unit_sand,
                gift: $giper_baza_unit_gift,
                seal: $giper_baza_unit_seal,
                pass: $giper_baza_auth_pass,
            }[kind];
            return new Type(buf);
        }
        constructor(buffer, byteOffset = 0, byteLength = buffer.byteLength) {
            super(buffer, byteOffset, byteLength);
        }
        kind(next) {
            const val = this.uint8(0, next && $giper_baza_unit_kind[next]);
            const kind = $giper_baza_unit_kind[val];
            if (kind)
                return kind;
            $mol_fail(new Error(`Unknown unit kind (${val})`));
        }
        choose(ways) {
            return ways[this.kind()](this);
        }
        path() {
            throw new Error('Unimplemented');
        }
        id6(offset, next) {
            if (next === undefined) {
                return $giper_baza_link.from_bin(new Uint8Array(this.buffer, this.byteOffset + offset, 6));
            }
            else {
                const bin = next.toBin();
                if (bin.byteLength !== 6)
                    $mol_fail(new Error(`Wrong Link size (${next})`));
                this.asArray().set(bin, this.byteOffset + offset);
                return next;
            }
        }
        id12(offset, next) {
            if (next === undefined) {
                return $giper_baza_link.from_bin(new Uint8Array(this.buffer, this.byteOffset + offset, 12));
            }
            else {
                const bin = next.toBin();
                if (bin.byteLength !== 12)
                    $mol_fail(new Error(`Wrong Link size (${next})`));
                this.asArray().set(bin, this.byteOffset + offset);
                return next;
            }
        }
        time(next) {
            return this.uint32(4, next);
        }
        moment() {
            return new $mol_time_moment(Number(this.time() * 1000));
        }
        tick(next) {
            return this.uint16(2, next);
        }
        time_tick(next) {
            if (!next)
                return this.tick() + this.time() * 2 ** 16;
            this.tick(next % 2 ** 16);
            this.time(Math.floor(next / 2 ** 16));
            return next;
        }
        _lord = null;
        lord(next) {
            if (next)
                return this._lord = this.id12(8, next);
            return this._lord ?? (this._lord = this.id12(8));
        }
        salt() {
            return new Uint8Array(this.buffer, this.byteOffset + 2, 16);
        }
        hash() {
            return $giper_baza_link.hash_bin(this.asArray());
        }
        tier_min() {
            return $giper_baza_rank_tier.rule;
        }
        _land = null;
        dump() {
            return {};
        }
    }
    $.$giper_baza_unit_base = $giper_baza_unit_base;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $giper_baza_unit_gift_sort(gifts) {
        const dict = new Map();
        const graph = new $mol_graph();
        for (const gift of gifts) {
            const key = gift.mate().str;
            dict.set(key, gift);
            graph.link(key, gift.lord().str);
            graph.link(key, '');
        }
        graph.acyclic(() => 1);
        const keys = [...graph.sorted];
        return keys.map(key => dict.get(key)).filter(Boolean);
    }
    $.$giper_baza_unit_gift_sort = $giper_baza_unit_gift_sort;
    class $giper_baza_unit_gift extends $giper_baza_unit_base {
        static length() {
            return 48;
        }
        static make() {
            const sand = this.from(this.length());
            sand.kind('gift');
            return sand;
        }
        rank(next) {
            if (next !== undefined)
                this.uint8(0, $giper_baza_unit_kind.gift);
            const res = this.uint8(1, next);
            if (res < $giper_baza_rank_deny || res > $giper_baza_rank_rule) {
                $mol_fail(new RangeError(`Wrong rank ${res}`));
            }
            return res;
        }
        tier() {
            return (this.rank() & $giper_baza_rank_tier.rule);
        }
        rate() {
            return (this.rank() & $giper_baza_rank_rate.just);
        }
        mate(next) {
            return this.id12(20, next);
        }
        path() {
            return `gift:${this.mate()}`;
        }
        _code;
        code() {
            return this._code ?? (this._code = new Uint8Array(this.buffer, this.byteOffset + 32, 16));
        }
        code_exists() {
            return this.code().some(b => b);
        }
        dump() {
            return {
                kind: this.kind(),
                lord: this.lord(),
                mate: this.mate(),
                tier: $giper_baza_rank_tier[this.tier()],
                rate: this.rate(),
                time: this.moment().toString('YYYY-MM-DD hh:mm:ss'),
            };
        }
        tier_min() {
            return $giper_baza_rank_tier.rule;
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), ' 👾', $mol_dev_format_auto(this.lord()), ' 🏅', ' ', $mol_dev_format_shade(this.moment().toString('YYYY-MM-DD hh:mm:ss'), ' +', this.tick()), ' #', $mol_dev_format_auto(this.hash()), ' 👾', $mol_dev_format_accent(this.mate().str || '______anyone_____'), this.code().some(v => v) ? ' 🔐' : ' 👀', $giper_baza_rank_tier[this.tier()], ':', this.rate().toString(16).toUpperCase());
        }
    }
    __decorate([
        $mol_action
    ], $giper_baza_unit_gift, "make", null);
    $.$giper_baza_unit_gift = $giper_baza_unit_gift;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$giper_baza_unit_seal_limit = 14;
    class $giper_baza_unit_seal extends $giper_baza_unit_base {
        static length(size) {
            return Math.ceil((84 + size * 12) / 8) * 8;
        }
        static make(size, wide) {
            const seal = this.from(this.length(size));
            seal.kind('seal');
            seal.meta({ size, wide });
            return seal;
        }
        meta(next) {
            return this.uint8(1, next && (next.size | (next.wide ? 0b1000_0000 : 0)));
        }
        size() {
            return this.meta() & 0b1111;
        }
        wide() {
            return Boolean(this.meta() & 0b1000_0000);
        }
        alive_items = new Set;
        alive_full() {
            return this.alive_items.size === $.$giper_baza_unit_seal_limit;
        }
        alive_list() {
            const alive = this.alive_items;
            return this.hash_list().filter(hash => alive.has(hash.str));
        }
        hash_item(index, next) {
            return this.id12(20 + index * 12, next);
        }
        _hash_list;
        hash_list(next) {
            if (next) {
                for (let i = 0; i < next.length; ++i) {
                    this.hash_item(i, next[i]);
                }
                return this._hash_list = next;
            }
            else {
                const list = [];
                const count = this.size();
                for (let i = 0; i < count; ++i) {
                    list.push(this.hash_item(i));
                }
                return this._hash_list = list;
            }
        }
        _shot;
        shot() {
            return this._shot ?? (this._shot = $giper_baza_link.hash_bin(new Uint8Array(this.buffer, this.byteOffset, this.byteLength - 64)));
        }
        sign(next) {
            const buf = new Uint8Array(this.buffer, this.byteOffset + this.byteLength - 64, 64);
            if (next)
                buf.set(next);
            return buf;
        }
        work() {
            let int = this.uint16(this.byteLength - 64);
            let count = 0;
            while (int & 1) {
                int >>>= 1;
                ++count;
            }
            return count;
        }
        rate_min() {
            return 15 - this.work();
        }
        tier_min() {
            return $giper_baza_rank_tier.post;
        }
        rank_min() {
            return this.tier_min() | this.rate_min();
        }
        path() {
            return `seal:${this.lord()}/${$giper_baza_time_dump(this.time())} #${this.tick()}`;
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), ' 👾', $mol_dev_format_auto(this.lord()), ' ✍ ', $mol_dev_format_shade(this.moment().toString('YYYY-MM-DD hh:mm:ss'), ' +', this.tick()), ' #', $mol_dev_format_auto(this.hash()), ' ', $mol_dev_format_auto(this.hash_list()));
        }
    }
    $.$giper_baza_unit_seal = $giper_baza_unit_seal;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $giper_baza_mine extends $mol_object {
        static land(land) {
            return this.make({
                land: $mol_const(land)
            });
        }
        land() {
            return $giper_baza_link.hole;
        }
        unit_deletes = 0;
        unit_inserts = 0;
        ball_inserts = 0;
        ball_deletes = 0;
        units_persisted = new WeakSet();
        units_save(diff) { }
        units_load() {
            return [];
        }
        ball_load(path) {
            return null;
        }
    }
    __decorate([
        $mol_mem_key
    ], $giper_baza_mine, "land", null);
    $.$giper_baza_mine = $giper_baza_mine;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_db_response(request) {
        return new Promise((done, fail) => {
            request.onerror = () => fail(new Error(request.error.message));
            request.onsuccess = () => done(request.result);
        });
    }
    $.$mol_db_response = $mol_db_response;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_db_store {
        native;
        constructor(native) {
            this.native = native;
        }
        get name() {
            return this.native.name;
        }
        get path() {
            return this.native.keyPath;
        }
        get incremental() {
            return this.native.autoIncrement;
        }
        get indexes() {
            return new Proxy({}, {
                ownKeys: () => [...this.native.indexNames],
                has: (_, name) => this.native.indexNames.contains(name),
                get: (_, name) => new $mol_db_index(this.native.index(name))
            });
        }
        index_make(name, path = [], unique = false, multiEntry = false) {
            return this.native.createIndex(name, path, { multiEntry, unique });
        }
        index_drop(name) {
            this.native.deleteIndex(name);
            return this;
        }
        get transaction() {
            return new $mol_db_transaction(this.native.transaction);
        }
        get db() {
            return this.transaction.db;
        }
        clear() {
            return $mol_db_response(this.native.clear());
        }
        count(keys) {
            return $mol_db_response(this.native.count(keys));
        }
        put(doc, key) {
            return $mol_db_response(this.native.put(doc, key));
        }
        get(key) {
            return $mol_db_response(this.native.get(key));
        }
        select(key, count) {
            return $mol_db_response(this.native.getAll(key, count));
        }
        drop(keys) {
            return $mol_db_response(this.native.delete(keys));
        }
    }
    $.$mol_db_store = $mol_db_store;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    class $mol_db_index {
        native;
        constructor(native) {
            this.native = native;
        }
        get name() {
            return this.native.name;
        }
        get paths() {
            return this.native.keyPath;
        }
        get unique() {
            return this.native.unique;
        }
        get multiple() {
            return this.native.multiEntry;
        }
        get store() {
            return new $mol_db_store(this.native.objectStore);
        }
        get transaction() {
            return this.store.transaction;
        }
        get db() {
            return this.store.db;
        }
        count(keys) {
            return $mol_db_response(this.native.count(keys));
        }
        get(key) {
            return $mol_db_response(this.native.get(key));
        }
        select(key, count) {
            return $mol_db_response(this.native.getAll(key, count));
        }
    }
    $.$mol_db_index = $mol_db_index;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    async function $mol_db(name, ...migrations) {
        const request = this.$mol_dom_context.indexedDB.open(name, migrations.length ? migrations.length + 1 : undefined);
        request.onupgradeneeded = event => {
            migrations.splice(0, event.oldVersion - 1);
            const transaction = new $mol_db_transaction(request.transaction);
            for (const migrate of migrations)
                migrate(transaction);
        };
        const db = await $mol_db_response(request);
        return new $mol_db_database(db);
    }
    $.$mol_db = $mol_db;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    class $mol_db_database {
        native;
        constructor(native) {
            this.native = native;
        }
        get name() {
            return this.native.name;
        }
        get version() {
            return this.native.version;
        }
        get stores() {
            return [...this.native.objectStoreNames];
        }
        read(...names) {
            return new $mol_db_transaction(this.native.transaction(names, 'readonly', { durability: 'relaxed' })).stores;
        }
        change(...names) {
            return new $mol_db_transaction(this.native.transaction(names, 'readwrite', { durability: 'relaxed' }));
        }
        kill() {
            this.native.close();
            const request = $mol_dom_context.indexedDB.deleteDatabase(this.name);
            request.onblocked = console.warn;
            return $mol_db_response(request);
        }
        destructor() {
            this.native.close();
        }
    }
    $.$mol_db_database = $mol_db_database;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_db_transaction {
        native;
        constructor(native) {
            this.native = native;
        }
        get stores() {
            return new Proxy({}, {
                ownKeys: () => [...this.native.objectStoreNames],
                has: (_, name) => this.native.objectStoreNames.contains(name),
                get: (_, name, proxy) => (name in proxy)
                    ? new $mol_db_store(this.native.objectStore(name))
                    : undefined,
            });
        }
        store_make(name) {
            return this.native.db.createObjectStore(name, { autoIncrement: true });
        }
        store_drop(name) {
            this.native.db.deleteObjectStore(name);
            return this;
        }
        abort() {
            if (this.native.error)
                return;
            this.native.abort();
        }
        commit() {
            this.native.commit?.();
            return new Promise((done, fail) => {
                this.native.onerror = () => fail(new Error(this.native.error.message));
                this.native.oncomplete = () => done();
            });
        }
        get db() {
            return new $mol_db_database(this.native.db);
        }
    }
    $.$mol_db_transaction = $mol_db_transaction;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function Sync(task) {
        return task();
    }
    class $giper_baza_mine_idb extends $giper_baza_mine {
        units_save(diff) {
            return Sync(async () => {
                const db = await this.$.$giper_baza_mine_idb.db();
                const change = db.change('Unit', 'Ball');
                const { Unit, Ball } = change.stores;
                const land = this.land().str;
                for (const unit of diff.del) {
                    Unit.drop([land, unit.path()]);
                    if (unit instanceof $giper_baza_auth_pass)
                        continue;
                    unit.choose({
                        gift: () => { },
                        seal: seal => { },
                        sand: sand => {
                            if (!sand.big())
                                return;
                            Ball.drop([land, sand.path()]);
                        },
                    });
                }
                for (const unit of diff.ins) {
                    Unit.put([unit.buffer], [land, unit.path()]);
                    this.units_persisted.add(unit);
                    if (unit instanceof $giper_baza_auth_pass)
                        continue;
                    unit.choose({
                        gift: () => { },
                        seal: seal => { },
                        sand: sand => {
                            if (!sand.big())
                                return;
                            Ball.put([sand.ball().buffer], [land, unit.path()]);
                        },
                    });
                }
                await change.commit();
            });
        }
        units_load() {
            return Sync(async () => {
                const db = await this.$.$giper_baza_mine_idb.db();
                const { Unit } = db.read('Unit');
                const land = this.land().str;
                const range = IDBKeyRange.bound([land, ''], [land, '\uFFFF']);
                const res = await Unit.select(range);
                const units = res.map(bin => $giper_baza_unit_base.narrow(bin[0]));
                for (const unit of units) {
                    this.units_persisted.add(unit);
                    $giper_baza_unit_trusted_grant(unit);
                }
                return units;
            });
        }
        ball_load(path) {
            return Sync(async () => {
                const db = await this.$.$giper_baza_mine_idb.db();
                const { Ball } = db.read('Ball');
                const land = this.land().str;
                const res = await Ball.get([land, path]);
                return new Uint8Array(res[0]);
            });
        }
        static async db() {
            return await this.$.$mol_db('$giper_baza_mine', mig => mig.store_make('Unit'), mig => mig.store_make('Ball'));
        }
    }
    __decorate([
        $mol_action
    ], $giper_baza_mine_idb.prototype, "units_save", null);
    __decorate([
        $mol_action
    ], $giper_baza_mine_idb.prototype, "units_load", null);
    __decorate([
        $mol_action
    ], $giper_baza_mine_idb.prototype, "ball_load", null);
    __decorate([
        $mol_memo.method
    ], $giper_baza_mine_idb, "db", null);
    $.$giper_baza_mine_idb = $giper_baza_mine_idb;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$giper_baza_mine = $giper_baza_mine_idb;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let $giper_baza_unit_sand_tag;
    (function ($giper_baza_unit_sand_tag) {
        $giper_baza_unit_sand_tag[$giper_baza_unit_sand_tag["term"] = 0] = "term";
        $giper_baza_unit_sand_tag[$giper_baza_unit_sand_tag["solo"] = 64] = "solo";
        $giper_baza_unit_sand_tag[$giper_baza_unit_sand_tag["vals"] = 128] = "vals";
        $giper_baza_unit_sand_tag[$giper_baza_unit_sand_tag["keys"] = 192] = "keys";
    })($giper_baza_unit_sand_tag = $.$giper_baza_unit_sand_tag || ($.$giper_baza_unit_sand_tag = {}));
    class $giper_baza_unit_sand extends $giper_baza_unit_base {
        static size_equator = 217;
        static size_max = 2 ** 16;
        _vary = undefined;
        _open = null;
        static length(size) {
            if (size >= 2 ** 16)
                throw new Error(`Size too large (${size})`);
            return size > $giper_baza_unit_sand.size_equator ? 56 : Math.ceil((39 + size) / 8) * 8;
        }
        static length_ball(size) {
            if (size >= 2 ** 16)
                throw new Error(`Size too large (${size})`);
            return size > $giper_baza_unit_sand.size_equator ? Math.ceil((size - 2) / 8) * 8 + 2 : 0;
        }
        static make(size) {
            const sand = this.from(this.length(size));
            sand.kind('sand');
            sand.size(size);
            return sand;
        }
        hint(tag = 'term') {
            this.uint8(1, $giper_baza_unit_sand_tag[tag]);
        }
        tag() {
            return $giper_baza_unit_sand_tag[this.uint8(1) & 0b11_00_0000];
        }
        big() {
            return this.size() > $giper_baza_unit_sand.size_equator;
        }
        size(next) {
            if (next === undefined) {
                let byte = this.uint8(38);
                return byte === 255 ? (this.uint32(38) >>> 8) : byte;
            }
            else {
                if (next > $giper_baza_unit_sand.size_equator)
                    this.uint32(38, 255 | (next << 8));
                else
                    this.uint8(38, next);
                return next;
            }
        }
        _head;
        head(next) {
            if (next === undefined && this._head !== undefined)
                return this._head;
            else
                return this._head = this.id6(20, next);
        }
        _self;
        self(next) {
            if (next === undefined && this._self !== undefined)
                return this._self;
            else
                return this._self = this.id6(26, next);
        }
        _lead;
        lead(next) {
            if (next === undefined && this._lead !== undefined)
                return this._lead;
            else
                return this._lead = this.id6(32, next);
        }
        path() {
            return `sand:${this.head()}/${this.lord()}/${this.self()}`;
        }
        _shot;
        shot(next) {
            if (this.size() <= $giper_baza_unit_sand.size_equator)
                throw new Error('Access to Shot of small Sand is unavailable');
            if (next)
                return this._shot = this.id12(42, next);
            else
                return this._shot = this._shot ?? this.id12(42);
        }
        _data;
        data(next) {
            const size = this.size();
            if (size > $giper_baza_unit_sand.size_equator)
                throw new Error('Access to Data of large Sand is unavailable');
            const data = this._data ?? new Uint8Array(this.buffer, this.byteOffset + 39, size);
            if (next)
                data.set(next);
            return data;
        }
        _ball;
        ball(next) {
            if (next === undefined) {
                if (this._ball)
                    return this._ball;
                const size = this.size();
                if (size > $giper_baza_unit_sand.size_equator)
                    return this._ball;
                return this._ball = this.data();
            }
            else {
                this.size(next.byteLength);
                if (next.byteLength > $giper_baza_unit_sand.size_equator) {
                    this.shot($giper_baza_link.hash_bin(next));
                    return this._ball = next;
                }
                else {
                    return this._ball = this.data(next);
                }
            }
        }
        idea() {
            const size = this.size();
            const length = 6 + 6 + (size > $giper_baza_unit_sand.size_equator ? 4 + 12 : 1 + size);
            const bin = new Uint8Array(this.buffer, this.byteOffset + 26, length);
            return $mol_hash_numbers(bin);
        }
        dump() {
            return {
                kind: this.kind(),
                lord: this.lord(),
                lead: this.lead(),
                head: this.head(),
                self: this.self(),
                tag: this.tag(),
                size: this.size(),
                time: this.moment().toString('YYYY-MM-DD hh:mm:ss'),
            };
        }
        tier_min() {
            return (this.head().str === $giper_baza_land_root.tine.str)
                ? $giper_baza_rank_tier.pull
                : $giper_baza_rank_tier.post;
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), ' 👾', $mol_dev_format_auto(this.lord()), ' 📦 ', $mol_dev_format_shade(this.moment().toString('YYYY-MM-DD hh:mm:ss'), ' +', this.tick()), ' #', $mol_dev_format_auto(this.hash()), ' ', this.lead().str || '__knot__', $mol_dev_format_shade('\\'), $mol_dev_format_accent(this.head().str || '__root__'), $mol_dev_format_shade('/'), this.self().str || '__spec__', ' ', {
                term: '💼',
                solo: '1️⃣',
                vals: '🎹',
                keys: '🔑',
            }[this.tag()], ' ', $mol_dev_format_auto(this._vary));
        }
    }
    __decorate([
        $mol_action
    ], $giper_baza_unit_sand, "make", null);
    $.$giper_baza_unit_sand = $giper_baza_unit_sand;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $giper_baza_node extends $mol_object {
        static tag = 'vals';
        land() {
            return null;
        }
        head() {
            return $giper_baza_link.hole;
        }
        land_link() {
            return this.land()?.link() ?? this.$.$giper_baza_auth.current().pass().lord();
        }
        link() {
            return new $giper_baza_link('___' + this.head()).resolve(this.land_link());
        }
        toJSON() {
            return this.link().str;
        }
        cast(Node) {
            return this.land().Node(Node).Item(this.head());
        }
        nodes(Node) {
            const land = this.land();
            const map = {
                term: () => land.Node(Node || $giper_baza_atom_vary),
                solo: () => land.Node(Node || $giper_baza_atom_vary),
                vals: () => land.Node(Node || $giper_baza_list_vary),
                keys: () => land.Node(Node || $giper_baza_dict),
            };
            return this.units().map(unit => map[unit.tag()]().Item(unit.self()));
        }
        units() {
            return this.units_of($giper_baza_link.hole);
        }
        units_of(peer) {
            return this.land().sand_ordered({ head: this.head(), peer }).filter(unit => unit.size());
        }
        filled() {
            return this.units().length > 0;
        }
        can_change() {
            return this.land().pass_rank(this.land().auth().pass()) > $giper_baza_rank_read;
        }
        last_change() {
            const land = this.land();
            let last = 0;
            const visit = (sand) => {
                if (sand.time() > last)
                    last = sand.time();
                if (sand.tag() === 'term')
                    return;
                land.Node($giper_baza_node).Item(sand.self()).units().forEach(visit);
            };
            this.units().forEach(visit);
            return last ? $giper_baza_time_moment(last) : null;
        }
        authors() {
            const land = this.land();
            const peers = new Set();
            const visit = (sand) => {
                peers.add(land.lord_pass(sand.lord()));
                if (sand.tag() === 'term')
                    return;
                land.Node($giper_baza_node).Item(sand.self()).units_of(null).forEach(visit);
            };
            this.units_of(null).forEach(visit);
            return [...peers];
        }
        ;
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), ' ', this.head());
        }
    }
    __decorate([
        $mol_memo.method
    ], $giper_baza_node.prototype, "link", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_node.prototype, "cast", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_node.prototype, "nodes", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_node.prototype, "units_of", null);
    __decorate([
        $mol_mem
    ], $giper_baza_node.prototype, "last_change", null);
    __decorate([
        $mol_mem
    ], $giper_baza_node.prototype, "authors", null);
    $.$giper_baza_node = $giper_baza_node;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_reconcile({ prev, from, to, next, equal, drop, insert, update, replace, }) {
        if (!update)
            update = (next, prev, lead) => prev;
        if (!replace)
            replace = (next, prev, lead) => insert(next, drop(prev, lead));
        if (to > prev.length)
            to = prev.length;
        if (from > to)
            from = to;
        let p = from;
        let n = 0;
        let lead = p ? prev[p - 1] : null;
        while (p < to || n < next.length) {
            if (p < to && n < next.length && equal(next[n], prev[p])) {
                lead = update(next[n], prev[p], lead);
                ++p;
                ++n;
            }
            else if (next.length - n > to - p) {
                lead = insert(next[n], lead);
                ++n;
            }
            else if (next.length - n < to - p) {
                lead = drop(prev[p], lead);
                ++p;
            }
            else {
                lead = replace(next[n], prev[p], lead);
                ++p;
                ++n;
            }
        }
    }
    $.$mol_reconcile = $mol_reconcile;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $giper_baza_list_vary extends $giper_baza_node {
        static tag = $giper_baza_unit_sand_tag[$giper_baza_unit_sand_tag.vals];
        items_vary(next, tag = 'term') {
            const units = this.units();
            if (next === undefined)
                return units.map(unit => this.land().sand_decode(unit));
            this.splice(next, 0, units.length, tag);
            return this.items_vary();
        }
        splice(next, from = this.units().length, to = from, tag = 'term') {
            const land = this.land();
            $mol_reconcile({
                prev: this.units(),
                from,
                to,
                next,
                equal: (next, prev) => $mol_compare_deep(this.land().sand_decode(prev), next),
                drop: (prev, lead) => this.land().post(lead?.self() ?? $giper_baza_link.hole, prev.head(), prev.self(), null),
                insert: (next, lead) => this.land().post(lead?.self() ?? $giper_baza_link.hole, this.head(), land.self_make(), next, tag),
                replace: (next, prev, lead) => this.land().post(lead?.self() ?? $giper_baza_link.hole, prev.head(), prev.self(), next, prev.tag()),
            });
        }
        find(vary) {
            for (const unit of this.units()) {
                if ($mol_compare_deep(this.land().sand_decode(unit), vary))
                    return unit;
            }
            return null;
        }
        has(vary, next, tag = 'term') {
            if (next === undefined)
                return Boolean(this.find(vary));
            if (next)
                this.add(vary, tag);
            else
                this.cut(vary);
            return next;
        }
        add(vary, tag = 'term') {
            if (this.has(vary))
                return;
            this.land().post($giper_baza_link.hole, this.head(), $giper_baza_link.hole, vary, tag);
        }
        cut(vary) {
            const units = [...this.units()];
            for (let i = 0; i < units.length; ++i) {
                if (!$mol_compare_deep(this.land().sand_decode(units[i]), vary))
                    continue;
                this.land().post(units[i - 1]?.self() ?? $giper_baza_link.hole, units[i].head(), units[i].self(), null);
                units.splice(i, 1);
                --i;
            }
        }
        move(from, to) {
            this.land().sand_move(this.units()[from], this.head(), to);
        }
        wipe(seat) {
            this.land().sand_wipe(this.units()[seat]);
        }
        node_make(Node, vary, tag = 'term') {
            this.splice([vary], undefined, undefined, tag);
            return this.land().Node(Node).Item(this.units().at(-1).self());
        }
        ;
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), ' ', this.head(), ' ', $mol_dev_format_auto(this.items_vary()));
        }
    }
    __decorate([
        $mol_mem
    ], $giper_baza_list_vary.prototype, "items_vary", null);
    __decorate([
        $mol_action
    ], $giper_baza_list_vary.prototype, "splice", null);
    $.$giper_baza_list_vary = $giper_baza_list_vary;
    function $giper_baza_list(parse) {
        class $giper_baza_list extends $giper_baza_list_vary {
            static parse = parse;
            items(next) {
                return this.items_vary(next?.map(parse)).map(parse);
            }
            static toString() {
                return this === $giper_baza_list ? '$giper_baza_list<' + this.$.$mol_func_name(parse) + '>' : super.toString();
            }
        }
        __decorate([
            $mol_mem
        ], $giper_baza_list.prototype, "items", null);
        return $giper_baza_list;
    }
    $.$giper_baza_list = $giper_baza_list;
    class $giper_baza_list_bin extends $giper_baza_list($giper_baza_vary_cast_blob) {
    }
    $.$giper_baza_list_bin = $giper_baza_list_bin;
    class $giper_baza_list_bool extends $giper_baza_list($giper_baza_vary_cast_bool) {
    }
    $.$giper_baza_list_bool = $giper_baza_list_bool;
    class $giper_baza_list_int extends $giper_baza_list($giper_baza_vary_cast_bint) {
    }
    $.$giper_baza_list_int = $giper_baza_list_int;
    class $giper_baza_list_real extends $giper_baza_list($giper_baza_vary_cast_real) {
    }
    $.$giper_baza_list_real = $giper_baza_list_real;
    class $giper_baza_list_link extends $giper_baza_list($giper_baza_vary_cast_link) {
    }
    $.$giper_baza_list_link = $giper_baza_list_link;
    class $giper_baza_list_str extends $giper_baza_list($giper_baza_vary_cast_text) {
    }
    $.$giper_baza_list_str = $giper_baza_list_str;
    class $giper_baza_list_time extends $giper_baza_list($giper_baza_vary_cast_time) {
    }
    $.$giper_baza_list_time = $giper_baza_list_time;
    class $giper_baza_list_dur extends $giper_baza_list($giper_baza_vary_cast_dura) {
    }
    $.$giper_baza_list_dur = $giper_baza_list_dur;
    class $giper_baza_list_range extends $giper_baza_list($giper_baza_vary_cast_span) {
    }
    $.$giper_baza_list_range = $giper_baza_list_range;
    class $giper_baza_list_json extends $giper_baza_list($giper_baza_vary_cast_dict) {
    }
    $.$giper_baza_list_json = $giper_baza_list_json;
    class $giper_baza_list_jsan extends $giper_baza_list($giper_baza_vary_cast_list) {
    }
    $.$giper_baza_list_jsan = $giper_baza_list_jsan;
    class $giper_baza_list_dom extends $giper_baza_list($giper_baza_vary_cast_elem) {
    }
    $.$giper_baza_list_dom = $giper_baza_list_dom;
    class $giper_baza_list_tree extends $giper_baza_list($giper_baza_vary_cast_tree) {
    }
    $.$giper_baza_list_tree = $giper_baza_list_tree;
    class $giper_baza_list_link_base extends $giper_baza_list_link {
    }
    $.$giper_baza_list_link_base = $giper_baza_list_link_base;
    function $giper_baza_list_link_to(Value) {
        class $giper_baza_list_link_to extends $giper_baza_list_link_base {
            static Value = $mol_memo.func(Value);
            static toString() {
                return this === $giper_baza_list_link_to ? '$giper_baza_list_link_to<' + Value() + '>' : super.toString();
            }
            remote_list(next) {
                const glob = this.$.$giper_baza_glob;
                const Node = Value();
                return this.items_vary(next?.map(item => item.link()))
                    .map($giper_baza_vary_cast_link)
                    .filter($mol_guard_defined)
                    .map(link => glob.Node(link, Node));
            }
            remote_add(item) {
                this.add(item.link());
            }
            make(config) {
                if (config === null || typeof config === 'number') {
                    const self = this.land().self_make(config || undefined);
                    const node = this.land().Node(Value()).Item(self);
                    this.splice([node.link()]);
                    return node;
                }
                else if (config instanceof $giper_baza_land) {
                    const land = config.area_make();
                    this.splice([land.link()]);
                    return land.Node(Value()).Data();
                }
                else if (config) {
                    const land = this.$.$giper_baza_glob.land_grab(config);
                    this.splice([land.link()]);
                    return land.Node(Value()).Data();
                }
            }
            remote_make(config) {
                return this.make(config);
            }
            local_make(idea) {
                const self = this.land().self_make(idea);
                const node = this.land().Node(Value()).Item(self);
                this.splice([node.link()]);
                return node;
            }
        }
        __decorate([
            $mol_mem
        ], $giper_baza_list_link_to.prototype, "remote_list", null);
        __decorate([
            $mol_action
        ], $giper_baza_list_link_to.prototype, "remote_add", null);
        __decorate([
            $mol_action
        ], $giper_baza_list_link_to.prototype, "make", null);
        __decorate([
            $mol_action
        ], $giper_baza_list_link_to.prototype, "local_make", null);
        return $giper_baza_list_link_to;
    }
    $.$giper_baza_list_link_to = $giper_baza_list_link_to;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    class $giper_baza_dict extends $giper_baza_list_vary {
        static tag = $giper_baza_unit_sand_tag[$giper_baza_unit_sand_tag.keys];
        keys() {
            return this.items_vary();
        }
        dive(key, Node, auto) {
            if (this.can_change() && auto !== undefined)
                this.has(key, true, Node.tag);
            const unit = this.find(key);
            return unit ? this.land().Node(Node).Item(unit.self()) : null;
        }
        static schema = {};
        static with(schema) {
            const $giper_baza_dict_with = class $giper_baza_dict_with extends this {
                static toString() {
                    if (this !== $giper_baza_dict_with)
                        return super.toString();
                    const params = Object.entries(schema).map(([name, type]) => `${name}: ${type}`);
                    return '$giper_baza_dict.with<{' + params.join(', ') + '}>';
                }
            };
            for (const Field in schema) {
                Object.defineProperty($giper_baza_dict_with.prototype, Field, {
                    value: function (auto) {
                        return this.dive(Field, schema[Field], auto);
                    }
                });
            }
            return Object.assign($giper_baza_dict_with, { schema: { ...this.schema, ...schema } });
        }
        ;
        [$mol_dev_format_head]() {
            const keys = $mol_wire_probe(() => this.keys());
            const nodes = $mol_wire_probe(() => this.nodes(null)) ?? [];
            return $mol_dev_format_span({}, $mol_dev_format_native(this), ' ', this.head(), ' ', $mol_dev_format_auto(keys?.map((key, index) => new Pair(key, nodes[index]))));
        }
    }
    __decorate([
        $mol_mem
    ], $giper_baza_dict.prototype, "keys", null);
    $.$giper_baza_dict = $giper_baza_dict;
    class Pair {
        key;
        val;
        constructor(key, val) {
            this.key = key;
            this.val = val;
        }
        ;
        [$mol_dev_format_head]() {
            return $mol_dev_format_tr({}, $mol_dev_format_td({}, $mol_dev_format_auto(this.key)), $mol_dev_format_td({}, ': '), $mol_dev_format_td({}, $mol_dev_format_auto(this.val)));
        }
    }
    function $giper_baza_dict_to(Value) {
        return class $giper_baza_dict_to extends $giper_baza_dict {
            Value = Value;
            key(key, auto) {
                return this.dive(key, this.Value, auto);
            }
            static toString() {
                return this === $giper_baza_dict_to ? '$giper_baza_dict_to<' + Value + '>' : super.toString();
            }
        };
    }
    $.$giper_baza_dict_to = $giper_baza_dict_to;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_hash_string(str, seed = 0) {
        let nums = new Array(str.length);
        for (let i = 0; i < str.length; ++i)
            nums[i] = str.charCodeAt(i);
        return $mol_hash_numbers(nums);
    }
    $.$mol_hash_string = $mol_hash_string;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $giper_baza_atom_vary extends $giper_baza_node {
        static tag = $giper_baza_unit_sand_tag[$giper_baza_unit_sand_tag.solo];
        pick_unit(peer) {
            return this.units_of(peer).at(0);
        }
        vary(next) {
            return this.vary_of($giper_baza_link.hole, next);
        }
        vary_of(peer, next) {
            let unit_prev = this.pick_unit(peer);
            let prev = unit_prev ? this.land().sand_decode(unit_prev) : null;
            if (next === undefined)
                return prev;
            if ($mol_compare_deep(prev, next))
                return next;
            this.land().post($giper_baza_link.hole, unit_prev?.head() ?? this.head(), unit_prev?.self() ?? $giper_baza_link.hole, next);
            return this.vary_of(peer);
        }
        ;
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), ' ', this.head(), ' ', $mol_dev_format_auto(this.vary()));
        }
    }
    __decorate([
        $mol_mem_key
    ], $giper_baza_atom_vary.prototype, "vary_of", null);
    $.$giper_baza_atom_vary = $giper_baza_atom_vary;
    class $giper_baza_atom_enum_base extends $giper_baza_atom_vary {
        static options = [];
    }
    $.$giper_baza_atom_enum_base = $giper_baza_atom_enum_base;
    function $giper_baza_atom_enum(options) {
        class $giper_baza_atom_enum extends $giper_baza_atom_enum_base {
            static options = options;
            static toString() {
                return this === $giper_baza_atom_enum ? '$giper_baza_atom_enum<' + options.map($giper_baza_vary_cast_text) + '>' : super.toString();
            }
            val(next) {
                return this.val_of($giper_baza_link.hole, next);
            }
            val_of(peer, next) {
                validate: if (next !== undefined) {
                    for (const option of options) {
                        if ($mol_compare_deep(option, next))
                            break validate;
                    }
                    $mol_fail(new Error(`Wrong value (${$giper_baza_vary_cast_text(next)})`));
                }
                const val = this.vary_of(peer, next);
                for (const option of options) {
                    if ($mol_compare_deep(option, val))
                        return val;
                }
                return null;
            }
        }
        __decorate([
            $mol_mem_key
        ], $giper_baza_atom_enum.prototype, "val_of", null);
        return $giper_baza_atom_enum;
    }
    $.$giper_baza_atom_enum = $giper_baza_atom_enum;
    function $giper_baza_atom(parse) {
        class $giper_baza_atom extends $giper_baza_atom_vary {
            static parse = parse;
            val(next) {
                return this.val_of($giper_baza_link.hole, next);
            }
            val_of(peer, next) {
                if (next !== undefined)
                    parse(next);
                const res = this.vary_of(peer, next);
                try {
                    return parse(res);
                }
                catch {
                    return null;
                }
            }
            static toString() {
                return this === $giper_baza_atom ? '$giper_baza_atom<' + this.$.$mol_func_name(parse) + '>' : super.toString();
            }
        }
        __decorate([
            $mol_mem_key
        ], $giper_baza_atom.prototype, "val_of", null);
        return $giper_baza_atom;
    }
    $.$giper_baza_atom = $giper_baza_atom;
    class $giper_baza_atom_blob extends $giper_baza_atom($giper_baza_vary_cast_blob) {
    }
    $.$giper_baza_atom_blob = $giper_baza_atom_blob;
    class $giper_baza_atom_bool extends $giper_baza_atom($giper_baza_vary_cast_bool) {
    }
    $.$giper_baza_atom_bool = $giper_baza_atom_bool;
    class $giper_baza_atom_bint extends $giper_baza_atom($giper_baza_vary_cast_bint) {
    }
    $.$giper_baza_atom_bint = $giper_baza_atom_bint;
    class $giper_baza_atom_real extends $giper_baza_atom($giper_baza_vary_cast_real) {
    }
    $.$giper_baza_atom_real = $giper_baza_atom_real;
    class $giper_baza_atom_link extends $giper_baza_atom($giper_baza_vary_cast_link) {
    }
    $.$giper_baza_atom_link = $giper_baza_atom_link;
    class $giper_baza_atom_text extends $giper_baza_atom($giper_baza_vary_cast_text) {
    }
    $.$giper_baza_atom_text = $giper_baza_atom_text;
    class $giper_baza_atom_time extends $giper_baza_atom($giper_baza_vary_cast_time) {
    }
    $.$giper_baza_atom_time = $giper_baza_atom_time;
    class $giper_baza_atom_dura extends $giper_baza_atom($giper_baza_vary_cast_dura) {
    }
    $.$giper_baza_atom_dura = $giper_baza_atom_dura;
    class $giper_baza_atom_span extends $giper_baza_atom($giper_baza_vary_cast_span) {
    }
    $.$giper_baza_atom_span = $giper_baza_atom_span;
    class $giper_baza_atom_dict extends $giper_baza_atom($giper_baza_vary_cast_dict) {
    }
    $.$giper_baza_atom_dict = $giper_baza_atom_dict;
    class $giper_baza_atom_list extends $giper_baza_atom($giper_baza_vary_cast_list) {
    }
    $.$giper_baza_atom_list = $giper_baza_atom_list;
    class $giper_baza_atom_elem extends $giper_baza_atom($giper_baza_vary_cast_elem) {
    }
    $.$giper_baza_atom_elem = $giper_baza_atom_elem;
    class $giper_baza_atom_tree extends $giper_baza_atom($giper_baza_vary_cast_tree) {
    }
    $.$giper_baza_atom_tree = $giper_baza_atom_tree;
    class $giper_baza_atom_link_base extends $giper_baza_atom_link {
        static Value = $giper_baza_dict;
    }
    $.$giper_baza_atom_link_base = $giper_baza_atom_link_base;
    function $giper_baza_atom_link_to(Value) {
        class $giper_baza_atom_link_to extends $giper_baza_atom_link_base {
            Value = $mol_memo.func(Value);
            static toString() {
                return this === $giper_baza_atom_link_to ? '$giper_baza_atom_link_to<' + Value() + '>' : super.toString();
            }
            remote(next) {
                return this.remote_of($giper_baza_link.hole, next);
            }
            remote_of(peer, next) {
                let link = next?.link() ?? next;
                link = $giper_baza_vary_cast_link(this.vary_of(peer, link));
                if (!link)
                    return null;
                return this.$.$giper_baza_glob.Node(link, Value());
            }
            ensure(config) {
                return this.ensure_of($giper_baza_link.hole, config);
            }
            ensure_of(peer, config) {
                if (!this.val_of(peer)) {
                    if (config === null)
                        this.ensure_here(peer);
                    else if (config instanceof $giper_baza_land)
                        this.ensure_area(peer, config);
                    else if (config)
                        this.ensure_lord(peer, config);
                    else
                        return null;
                }
                return this.remote_of(peer);
            }
            ensure_here(peer) {
                const idea = $mol_hash_string(this.link().str);
                const head = this.land().self_make(idea);
                const node = this.land().Node(Value()).Item(head);
                this.remote_of(peer, node);
            }
            ensure_area(peer, land) {
                const idea = $mol_hash_string(this.link().str);
                const area = land.area_make(idea);
                this.val_of(peer, area.link());
            }
            ensure_lord(peer, preset) {
                const land = this.$.$giper_baza_glob.land_grab(preset);
                this.val_of(peer, land.link());
            }
            remote_ensure(preset) {
                return this.ensure(preset);
            }
            local_ensure() {
                return this.ensure(null);
            }
        }
        __decorate([
            $mol_mem_key
        ], $giper_baza_atom_link_to.prototype, "remote_of", null);
        __decorate([
            $mol_action
        ], $giper_baza_atom_link_to.prototype, "ensure_here", null);
        __decorate([
            $mol_action
        ], $giper_baza_atom_link_to.prototype, "ensure_area", null);
        __decorate([
            $mol_action
        ], $giper_baza_atom_link_to.prototype, "ensure_lord", null);
        return $giper_baza_atom_link_to;
    }
    $.$giper_baza_atom_link_to = $giper_baza_atom_link_to;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $giper_baza_entity extends $giper_baza_dict.with({
        Title: $giper_baza_atom_text,
    }) {
        title(next) {
            return this.Title(next)?.val(next) ?? '';
        }
    }
    __decorate([
        $mol_mem
    ], $giper_baza_entity.prototype, "title", null);
    $.$giper_baza_entity = $giper_baza_entity;
})($ || ($ = {}));

;
"use strict";

;
"use strict";

;
"use strict";

;
"use strict";

;
"use strict";
var $;
(function ($) {
    class $mol_regexp extends RegExp {
        groups;
        constructor(source, flags = 'gsu', groups = []) {
            super(source, flags);
            this.groups = groups;
        }
        *[Symbol.matchAll](str) {
            const index = this.lastIndex;
            this.lastIndex = 0;
            try {
                while (this.lastIndex < str.length) {
                    const found = this.exec(str);
                    if (!found)
                        break;
                    yield found;
                }
            }
            finally {
                this.lastIndex = index;
            }
        }
        [Symbol.match](str) {
            const res = [...this[Symbol.matchAll](str)].filter(r => r.groups).map(r => r[0]);
            if (!res.length)
                return null;
            return res;
        }
        [Symbol.split](str) {
            const res = [];
            let token_last = null;
            for (let token of this[Symbol.matchAll](str)) {
                if (token.groups && (token_last ? token_last.groups : true))
                    res.push('');
                res.push(token[0]);
                token_last = token;
            }
            if (!res.length)
                res.push('');
            return res;
        }
        test(str) {
            return Boolean(str.match(this));
        }
        exec(str) {
            const from = this.lastIndex;
            if (from >= str.length)
                return null;
            const res = super.exec(str);
            if (res === null) {
                this.lastIndex = str.length;
                if (!str)
                    return null;
                return Object.assign([str.slice(from)], {
                    index: from,
                    input: str,
                });
            }
            if (from === this.lastIndex) {
                $mol_fail(new Error('Captured empty substring'));
            }
            const groups = {};
            const skipped = str.slice(from, this.lastIndex - res[0].length);
            if (skipped) {
                this.lastIndex = this.lastIndex - res[0].length;
                return Object.assign([skipped], {
                    index: from,
                    input: res.input,
                });
            }
            for (let i = 0; i < this.groups.length; ++i) {
                const group = this.groups[i];
                groups[group] = groups[group] || res[i + 1] || '';
            }
            return Object.assign(res, { groups });
        }
        generate(params) {
            return null;
        }
        get native() {
            return new RegExp(this.source, this.flags);
        }
        static repeat(source, min = 0, max = Number.POSITIVE_INFINITY) {
            const regexp = $mol_regexp.from(source);
            const upper = Number.isFinite(max) ? max : '';
            const str = `(?:${regexp.source}){${min},${upper}}?`;
            const regexp2 = new $mol_regexp(str, regexp.flags, regexp.groups);
            regexp2.generate = params => {
                const res = regexp.generate(params);
                if (res)
                    return res;
                if (min > 0)
                    return res;
                return '';
            };
            return regexp2;
        }
        static repeat_greedy(source, min = 0, max = Number.POSITIVE_INFINITY) {
            const regexp = $mol_regexp.from(source);
            const upper = Number.isFinite(max) ? max : '';
            const str = `(?:${regexp.source}){${min},${upper}}`;
            const regexp2 = new $mol_regexp(str, regexp.flags, regexp.groups);
            regexp2.generate = params => {
                const res = regexp.generate(params);
                if (res)
                    return res;
                if (min > 0)
                    return res;
                return '';
            };
            return regexp2;
        }
        static vary(sources) {
            const groups = [];
            const chunks = sources.map(source => {
                const regexp = $mol_regexp.from(source);
                groups.push(...regexp.groups);
                return regexp.source;
            });
            return new $mol_regexp(`(?:${chunks.join('|')})`, '', groups);
        }
        static optional(source) {
            return $mol_regexp.repeat_greedy(source, 0, 1);
        }
        static force_after(source) {
            const regexp = $mol_regexp.from(source);
            return new $mol_regexp(`(?=${regexp.source})`, regexp.flags, regexp.groups);
        }
        static forbid_after(source) {
            const regexp = $mol_regexp.from(source);
            return new $mol_regexp(`(?!${regexp.source})`, regexp.flags, regexp.groups);
        }
        static from(source, { ignoreCase, multiline } = {
            ignoreCase: false,
            multiline: false,
        }) {
            let flags = 'gsu';
            if (multiline)
                flags += 'm';
            if (ignoreCase)
                flags += 'i';
            if (typeof source === 'number') {
                const src = `\\u{${source.toString(16)}}`;
                const regexp = new $mol_regexp(src, flags);
                regexp.generate = () => src;
                return regexp;
            }
            if (typeof source === 'string') {
                const src = source.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const regexp = new $mol_regexp(src, flags);
                regexp.generate = () => source;
                return regexp;
            }
            else if (source instanceof $mol_regexp) {
                const regexp = new $mol_regexp(source.source, flags, source.groups);
                regexp.generate = params => source.generate(params);
                return regexp;
            }
            if (source instanceof RegExp) {
                const test = new RegExp('|' + source.source);
                const groups = Array.from({ length: test.exec('').length - 1 }, (_, i) => String(i + 1));
                const regexp = new $mol_regexp(source.source, source.flags, groups);
                regexp.generate = () => '';
                return regexp;
            }
            if (Array.isArray(source)) {
                const patterns = source.map(src => Array.isArray(src)
                    ? $mol_regexp.optional(src)
                    : $mol_regexp.from(src));
                const chunks = patterns.map(pattern => pattern.source);
                const groups = [];
                let index = 0;
                for (const pattern of patterns) {
                    for (let group of pattern.groups) {
                        if (Number(group) >= 0) {
                            groups.push(String(index++));
                        }
                        else {
                            groups.push(group);
                        }
                    }
                }
                const regexp = new $mol_regexp(chunks.join(''), flags, groups);
                regexp.generate = params => {
                    let res = '';
                    for (const pattern of patterns) {
                        let sub = pattern.generate(params);
                        if (sub === null)
                            return '';
                        res += sub;
                    }
                    return res;
                };
                return regexp;
            }
            else {
                const groups = [];
                const chunks = Object.keys(source).map(name => {
                    groups.push(name);
                    const regexp = $mol_regexp.from(source[name]);
                    groups.push(...regexp.groups);
                    return `(${regexp.source})`;
                });
                const regexp = new $mol_regexp(`(?:${chunks.join('|')})`, flags, groups);
                const validator = new RegExp('^' + regexp.source + '$', flags);
                regexp.generate = (params) => {
                    for (let option in source) {
                        if (option in params) {
                            if (typeof params[option] === 'boolean') {
                                if (!params[option])
                                    continue;
                            }
                            else {
                                const str = String(params[option]);
                                if (str.match(validator))
                                    return str;
                                $mol_fail(new Error(`Wrong param: ${option}=${str}`));
                            }
                        }
                        else {
                            if (typeof source[option] !== 'object')
                                continue;
                        }
                        const res = $mol_regexp.from(source[option]).generate(params);
                        if (res)
                            return res;
                    }
                    return null;
                };
                return regexp;
            }
        }
        static unicode_only(...category) {
            return new $mol_regexp(`\\p{${category.join('=')}}`);
        }
        static unicode_except(...category) {
            return new $mol_regexp(`\\P{${category.join('=')}}`);
        }
        static char_range(from, to) {
            return new $mol_regexp(`${$mol_regexp.from(from).source}-${$mol_regexp.from(to).source}`);
        }
        static char_only(...allowed) {
            const regexp = allowed.map(f => $mol_regexp.from(f).source).join('');
            return new $mol_regexp(`[${regexp}]`);
        }
        static char_except(...forbidden) {
            const regexp = forbidden.map(f => $mol_regexp.from(f).source).join('');
            return new $mol_regexp(`[^${regexp}]`);
        }
        static decimal_only = $mol_regexp.from(/\d/gsu);
        static decimal_except = $mol_regexp.from(/\D/gsu);
        static latin_only = $mol_regexp.from(/\w/gsu);
        static latin_except = $mol_regexp.from(/\W/gsu);
        static space_only = $mol_regexp.from(/\s/gsu);
        static space_except = $mol_regexp.from(/\S/gsu);
        static word_break_only = $mol_regexp.from(/\b/gsu);
        static word_break_except = $mol_regexp.from(/\B/gsu);
        static tab = $mol_regexp.from(/\t/gsu);
        static slash_back = $mol_regexp.from(/\\/gsu);
        static nul = $mol_regexp.from(/\0/gsu);
        static char_any = $mol_regexp.from(/./gsu);
        static begin = $mol_regexp.from(/^/gsu);
        static end = $mol_regexp.from(/$/gsu);
        static or = $mol_regexp.from(/|/gsu);
        static line_end = $mol_regexp.from({
            win_end: [['\r'], '\n'],
            mac_end: '\r',
        });
    }
    $.$mol_regexp = $mol_regexp;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const { unicode_only, line_end, tab, repeat_greedy, optional, forbid_after, force_after, char_only, char_except } = $mol_regexp;
    $.$giper_baza_text_tokens = $mol_regexp.from({
        token: {
            'line-break': line_end,
            'indents': repeat_greedy(tab, 1),
            'emoji': [
                unicode_only('Extended_Pictographic'),
                optional(unicode_only('Emoji_Modifier')),
                repeat_greedy([
                    unicode_only('Emoji_Component'),
                    unicode_only('Extended_Pictographic'),
                    optional(unicode_only('Emoji_Modifier')),
                ]),
            ],
            'link': /\b(https?:\/\/[^\s,.;:!?")]+(?:[,.;:!?")][^\s,.;:!?")]+)+)/,
            'Word': [
                [char_only(' ', 0xA0)],
                repeat_greedy(char_only([
                    unicode_only('General_Category', 'Uppercase_Letter'),
                    unicode_only('Diacritic'),
                    unicode_only('General_Category', 'Number'),
                ]), 1),
                repeat_greedy(char_only([
                    unicode_only('General_Category', 'Lowercase_Letter'),
                    unicode_only('Diacritic'),
                    unicode_only('General_Category', 'Number'),
                ])),
            ],
            'word': [
                [char_only(' ', 0xA0)],
                repeat_greedy(char_only([
                    unicode_only('General_Category', 'Lowercase_Letter'),
                    unicode_only('Diacritic'),
                    unicode_only('General_Category', 'Number'),
                ]), 1),
            ],
            'spaces': [
                forbid_after(line_end),
                repeat_greedy(unicode_only('White_Space'), 1),
                force_after(unicode_only('White_Space')),
            ],
            'space': [
                forbid_after(line_end),
                unicode_only('White_Space'),
                forbid_after([
                    unicode_only('White_Space'),
                    unicode_only('General_Category', 'Uppercase_Letter'),
                    unicode_only('General_Category', 'Lowercase_Letter'),
                    unicode_only('Diacritic'),
                    unicode_only('General_Category', 'Number'),
                ]),
            ],
            'others': [
                [char_only(' ', 0xA0)],
                repeat_greedy(char_except([
                    unicode_only('General_Category', 'Uppercase_Letter'),
                    unicode_only('General_Category', 'Lowercase_Letter'),
                    unicode_only('Diacritic'),
                    unicode_only('General_Category', 'Number'),
                    unicode_only('White_Space'),
                ]), 1),
            ],
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $giper_baza_home extends $giper_baza_entity.with({
        Selection: $giper_baza_atom_text,
        Hall: $giper_baza_atom_link_to(() => $giper_baza_dict),
    }) {
        hall_by(Node, auto) {
            return this.Hall(auto)?.ensure(auto === null ? this.land() : undefined)?.cast(Node) ?? null;
        }
    }
    $.$giper_baza_home = $giper_baza_home;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $giper_baza_glob extends $mol_object {
        static lands_touched = new $mol_wire_set();
        static yard() {
            return new this.$.$giper_baza_yard;
        }
        static home(Node) {
            return this.Land(this.$.$giper_baza_auth.current().pass().lord()).Data(Node ?? this.$.$giper_baza_home);
        }
        static king_grab(preset = [[null, this.$.$giper_baza_rank_read]]) {
            const mapping = new Map(preset);
            const king = this.$.$giper_baza_auth.grab();
            const colony = $mol_wire_sync(this.$.$giper_baza_land).make({ $: this.$ });
            colony.auth = $mol_const(king);
            colony.encrypted((mapping.get(null) ?? this.$.$giper_baza_rank_deny) === this.$.$giper_baza_rank_deny);
            const self = this.$.$giper_baza_auth.current().pass();
            colony.give(self, this.$.$giper_baza_rank_rule);
            for (const [key, rank] of mapping)
                colony.give(key, rank);
            this.Land(colony.link()).diff_apply(colony.diff_units());
            return king;
        }
        static land_grab(preset = [[null, this.$.$giper_baza_rank_read]]) {
            return this.Land(this.king_grab(preset).pass().lord());
        }
        static Land(link) {
            this.lands_touched.add(link.str);
            return this.$.$giper_baza_land.make({
                link: $mol_const(link),
            });
        }
        static Node(link, Node) {
            const land = this.Land(link.land());
            return land.Node(Node).Item(link.head());
        }
        static apply_pack(pack) {
            return this.apply_parts(pack.parts());
        }
        static apply_parts(parts) {
            for (const [land_id, part] of parts) {
                const land = this.Land(new this.$.$giper_baza_link(land_id));
                land.diff_apply(part.units);
            }
        }
    }
    __decorate([
        $mol_mem
    ], $giper_baza_glob, "yard", null);
    __decorate([
        $mol_action
    ], $giper_baza_glob, "king_grab", null);
    __decorate([
        $mol_action
    ], $giper_baza_glob, "land_grab", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_glob, "Land", null);
    __decorate([
        $mol_action
    ], $giper_baza_glob, "apply_pack", null);
    __decorate([
        $mol_action
    ], $giper_baza_glob, "apply_parts", null);
    $.$giper_baza_glob = $giper_baza_glob;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $giper_baza_text extends $giper_baza_node {
        static tag = $giper_baza_unit_sand_tag[$giper_baza_unit_sand_tag.vals];
        value(next) {
            return this.text(next);
        }
        text(next) {
            if (next !== undefined) {
                const land = this.land();
                const prev = this.units();
                const lines = next.match(/.*\n|.+$/g) ?? [];
                $mol_reconcile({
                    prev,
                    from: 0,
                    to: prev.length,
                    next: lines,
                    equal: (next, prev) => {
                        return land.Node($giper_baza_text).Item(prev.self()).str() === next;
                    },
                    drop: (prev, lead) => this.land().post(lead?.self() ?? $giper_baza_link.hole, prev.head(), prev.self(), null),
                    insert: (next, lead) => {
                        const sand = this.land().post(lead?.self() ?? $giper_baza_link.hole, this.head(), land.self_make(), 'p', 'vals');
                        land.Node($giper_baza_text).Item(sand.self()).str(next);
                        return sand;
                    },
                    replace: (next, prev, lead) => {
                        land.Node($giper_baza_text).Item(prev.self()).str(next);
                        return prev;
                    },
                });
            }
            return this.str();
        }
        str(next) {
            if (next === undefined) {
                let str = '';
                const land = this.land();
                for (const unit of this.units()) {
                    if (unit.tag() === 'term')
                        str += $giper_baza_vary_cast_text(land.sand_decode(unit)) ?? '';
                    else
                        str += land.Node($giper_baza_text).Item(unit.self()).str();
                }
                return str;
            }
            else {
                this.write(next, 0, -1);
                return this.str();
            }
        }
        write(next, str_from = -1, str_to = str_from) {
            const land = this.land();
            const list = this.units();
            let from = str_from < 0 ? list.length : 0;
            let word = '';
            while (from < list.length) {
                word = $giper_baza_vary_cast_text(land.sand_decode(list[from])) ?? '';
                if (str_from <= word.length) {
                    next = word.slice(0, str_from) + next;
                    break;
                }
                str_from -= word.length;
                if (str_to > 0)
                    str_to -= word.length;
                from++;
            }
            let to = str_to < 0 ? list.length : from;
            while (to < list.length) {
                word = $giper_baza_vary_cast_text(land.sand_decode(list[to])) ?? '';
                to++;
                if (str_to < word.length) {
                    next = next + word.slice(str_to);
                    break;
                }
                str_to -= word.length;
            }
            if (from && from === list.length) {
                --from;
                next = ($giper_baza_vary_cast_text(land.sand_decode(list[from])) ?? '') + next;
            }
            const words = next.match($giper_baza_text_tokens) ?? [];
            this.cast($giper_baza_list_vary).splice(words, from, to);
            return this;
        }
        point_by_offset(offset) {
            const land = this.land();
            let off = offset;
            for (const unit of this.units()) {
                if (unit.tag() === 'term') {
                    const len = $giper_baza_vary_cast_text(land.sand_decode(unit))?.length ?? 0;
                    if (off <= len)
                        return [unit.self(), off];
                    else
                        off -= len;
                }
                else {
                    const found = land.Node($giper_baza_text).Item(unit.self()).point_by_offset(off);
                    if (found[0])
                        return found;
                    off = found[1];
                }
            }
            return [$giper_baza_link.hole, off];
        }
        offset_by_point([self, offset]) {
            const land = this.land();
            for (const unit of this.units()) {
                if (unit.self().str === self.str)
                    return [self, offset];
                if (unit.tag() === 'term') {
                    offset += $giper_baza_vary_cast_text(land.sand_decode(unit))?.length ?? 0;
                }
                else {
                    const found = land.Node($giper_baza_text).Item(unit.self()).offset_by_point([self, offset]);
                    if (found[0])
                        return [self, found[1]];
                    offset = found[1];
                }
            }
            return [$giper_baza_link.hole, offset];
        }
        selection(lord, next) {
            const base = this.$.$giper_baza_glob.Land(lord).Data($giper_baza_home);
            if (next) {
                base.Selection(null)?.val(next.map(offset => this.point_by_offset(offset).join(':')).join('|'));
                return next;
            }
            else {
                this.text();
                return base.Selection()?.val()?.split('|').map(point => {
                    const chunks = point.split(':');
                    return this.offset_by_point([new $giper_baza_link(chunks[0]), Number(chunks[1]) || 0])[1];
                }) ?? [0, 0];
            }
        }
    }
    __decorate([
        $mol_mem
    ], $giper_baza_text.prototype, "text", null);
    __decorate([
        $mol_mem
    ], $giper_baza_text.prototype, "str", null);
    __decorate([
        $mol_action
    ], $giper_baza_text.prototype, "write", null);
    __decorate([
        $mol_action
    ], $giper_baza_text.prototype, "point_by_offset", null);
    __decorate([
        $mol_action
    ], $giper_baza_text.prototype, "offset_by_point", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_text.prototype, "selection", null);
    $.$giper_baza_text = $giper_baza_text;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $bog_quiz_participant extends $giper_baza_entity.with({
        UserId: $giper_baza_atom_text,
        DisplayName: $giper_baza_text,
        JoinedAt: $giper_baza_atom_bint,
        LastSeenAt: $giper_baza_atom_bint,
    }) {
        display_name_text() {
            const name = this.DisplayName()?.str();
            if (name && name.trim())
                return name;
            const userId = this.UserId()?.val() ?? '';
            const shortId = userId.substring(0, 8);
            return `Игрок ${shortId}`;
        }
        update_last_seen() {
            this.LastSeenAt(null).val(BigInt(Date.now()));
        }
    }
    __decorate([
        $mol_mem
    ], $bog_quiz_participant.prototype, "display_name_text", null);
    __decorate([
        $mol_action
    ], $bog_quiz_participant.prototype, "update_last_seen", null);
    $.$bog_quiz_participant = $bog_quiz_participant;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $bog_quiz_option extends $giper_baza_entity.with({
        Text: $giper_baza_text,
        IsCorrect: $giper_baza_atom_bool,
        Order: $giper_baza_atom_bint,
    }) {
    }
    $.$bog_quiz_option = $bog_quiz_option;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $bog_quiz_question extends $giper_baza_entity.with({
        Text: $giper_baza_text,
        Type: $giper_baza_atom_text,
        Order: $giper_baza_atom_bint,
        Options: $giper_baza_list_link_to(() => $bog_quiz_option),
        BasePoints: $giper_baza_atom_bint,
        WrongPenaltySingle: $giper_baza_atom_bint,
        WrongPenaltyMultiPerOption: $giper_baza_atom_bint,
        SpeedEnabled: $giper_baza_atom_bool,
    }) {
        option_make() {
            const options = this.Options(null);
            const count = options.remote_list().length;
            if (count >= 50) {
                throw new Error('Maximum 50 options per question');
            }
            const option = options.make([[null, $giper_baza_rank_read]]);
            const order = count;
            option.Order(null).val(BigInt(order));
            return option;
        }
        options_ordered() {
            const options = this.Options()?.remote_list() ?? [];
            return [...options].sort((a, b) => {
                return Number(a.Order()?.val() ?? 0) - Number(b.Order()?.val() ?? 0);
            });
        }
        correct_options() {
            return this.options_ordered().filter((opt) => opt.IsCorrect()?.val() ?? false);
        }
        has_correct_answer() {
            return this.correct_options().length > 0;
        }
    }
    __decorate([
        $mol_action
    ], $bog_quiz_question.prototype, "option_make", null);
    __decorate([
        $mol_mem
    ], $bog_quiz_question.prototype, "options_ordered", null);
    __decorate([
        $mol_mem
    ], $bog_quiz_question.prototype, "correct_options", null);
    __decorate([
        $mol_mem
    ], $bog_quiz_question.prototype, "has_correct_answer", null);
    $.$bog_quiz_question = $bog_quiz_question;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $bog_quiz_answer extends $giper_baza_entity.with({
        Session: $giper_baza_atom_link_to(() => $bog_quiz_session),
        Question: $giper_baza_atom_link_to(() => $bog_quiz_question),
        Participant: $giper_baza_atom_link_to(() => $bog_quiz_participant),
        SelectedOptions: $giper_baza_list_link_to(() => $bog_quiz_option),
        UpdatedAt: $giper_baza_atom_bint,
        FinalAt: $giper_baza_atom_bint,
    }) {
        update_selection(options) {
            const selected_list = this.SelectedOptions(null);
            const current = selected_list.remote_list();
            current.forEach(opt => {
                selected_list.cut(opt.link());
            });
            options.forEach(opt => {
                selected_list.add(opt.link());
            });
            this.UpdatedAt(null).val(BigInt(Date.now()));
        }
        toggle_option(option, is_single) {
            const selected_list = this.SelectedOptions(null);
            const current = selected_list.remote_list();
            const is_selected = current.some(opt => opt.link().toString() === option.link().toString());
            if (is_single) {
                current.forEach(opt => {
                    selected_list.cut(opt.link());
                });
                if (!is_selected) {
                    selected_list.add(option.link());
                }
            }
            else {
                if (is_selected) {
                    selected_list.cut(option.link());
                }
                else {
                    selected_list.add(option.link());
                }
            }
            this.UpdatedAt(null).val(BigInt(Date.now()));
        }
        selected_option_list() {
            return this.SelectedOptions()?.remote_list() ?? [];
        }
        is_option_selected(option) {
            return this.selected_option_list().some(opt => opt.link().toString() === option.link().toString());
        }
    }
    __decorate([
        $mol_action
    ], $bog_quiz_answer.prototype, "update_selection", null);
    __decorate([
        $mol_action
    ], $bog_quiz_answer.prototype, "toggle_option", null);
    __decorate([
        $mol_mem
    ], $bog_quiz_answer.prototype, "selected_option_list", null);
    __decorate([
        $mol_mem_key
    ], $bog_quiz_answer.prototype, "is_option_selected", null);
    $.$bog_quiz_answer = $bog_quiz_answer;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $bog_quiz_reaction extends $giper_baza_entity.with({
        Participant: $giper_baza_atom_link_to(() => $bog_quiz_participant),
        Emoji: $giper_baza_atom_text,
        CreatedAt: $giper_baza_atom_bint,
    }) {
        static available_emojis() {
            return ['👍', '❤️', '😂', '🎉', '🔥', '👏', '😮', '🤔', '😎', '🚀'];
        }
    }
    $.$bog_quiz_reaction = $bog_quiz_reaction;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $bog_quiz_session extends $giper_baza_entity.with({
        Quiz: $giper_baza_atom_link_to(() => $bog_quiz_quiz),
        Host: $giper_baza_atom_link_to(() => $bog_quiz_owner),
        State: $giper_baza_atom_text,
        QuestionIndex: $giper_baza_atom_bint,
        QuestionStartedAt: $giper_baza_atom_bint,
        ReviewStartedAt: $giper_baza_atom_bint,
        Participants: $giper_baza_list_link_to(() => $bog_quiz_participant),
        Answers: $giper_baza_list_link_to(() => $bog_quiz_answer),
        ReactionEvents: $giper_baza_list_link_to(() => $bog_quiz_reaction),
        QuestionTimerSec: $giper_baza_atom_bint,
        ReviewTimerSec: $giper_baza_atom_bint,
        ShowStats: $giper_baza_atom_bool,
        ReactionsEnabled: $giper_baza_atom_bool,
        LeaderboardEnabled: $giper_baza_atom_bool,
        SpeedKMax: $giper_baza_atom_real,
        SpeedKMin: $giper_baza_atom_real,
        SpeedSkipSec: $giper_baza_atom_bint,
    }) {
        current_question() {
            const quiz = this.Quiz()?.remote();
            if (!quiz)
                return null;
            const index = Number(this.QuestionIndex()?.val() ?? 0);
            const questions = quiz.questions_ordered();
            return questions[index] ?? null;
        }
        start() {
            this.State(null).val('question');
            this.QuestionIndex(null).val(BigInt(0));
            this.QuestionStartedAt(null).val(BigInt(Date.now()));
        }
        next() {
            const state = this.State()?.val();
            if (state === 'question') {
                this.finalize_answers();
                this.State(null).val('review');
                this.ReviewStartedAt(null).val(BigInt(Date.now()));
            }
            else if (state === 'review') {
                const quiz = this.Quiz()?.remote();
                if (!quiz)
                    return;
                const currentIndex = Number(this.QuestionIndex()?.val() ?? 0);
                const totalQuestions = quiz.questions_ordered().length;
                if (currentIndex + 1 < totalQuestions) {
                    this.State(null).val('question');
                    this.QuestionIndex(null).val(BigInt(currentIndex + 1));
                    this.QuestionStartedAt(null).val(BigInt(Date.now()));
                }
                else {
                    this.end();
                }
            }
        }
        end() {
            this.State(null).val('finished');
        }
        finalize_answers() {
            const question = this.current_question();
            if (!question)
                return;
            const now = BigInt(Date.now());
            const answers = this.Answers()?.remote_list() ?? [];
            answers.forEach(answer => {
                const answerQuestion = answer.Question()?.remote();
                if (answerQuestion?.link().toString() === question.link().toString()) {
                    if (!answer.FinalAt()?.val()) {
                        answer.FinalAt(null).val(now);
                    }
                }
            });
        }
        participant_list() {
            return this.Participants()?.remote_list() ?? [];
        }
        participant_make() {
            const participants = this.Participants(null);
            const participant = participants.make([[null, $giper_baza_rank_read]]);
            participant.update_last_seen();
            return participant;
        }
        answer_for_participant(participant) {
            const question = this.current_question();
            if (!question)
                return null;
            const answers_list = this.Answers(null);
            const existing_answers = answers_list.remote_list();
            const existing = existing_answers.find(ans => {
                const ans_question = ans.Question()?.remote();
                const ans_participant = ans.Participant()?.remote();
                return (ans_question?.link().toString() === question.link().toString() &&
                    ans_participant?.link().toString() === participant.link().toString());
            });
            if (existing)
                return existing;
            const answer = answers_list.make([[null, $giper_baza_rank_read]]);
            answer.Session(null).remote(this);
            answer.Question(null).remote(question);
            answer.Participant(null).remote(participant);
            answer.UpdatedAt(null).val(BigInt(Date.now()));
            return answer;
        }
        participant_total_score(participant) {
            return $bog_quiz_scoring.calculate_participant_total_score(participant, this);
        }
        leaderboard() {
            const participants = this.participant_list();
            const with_scores = participants.map(p => ({
                participant: p,
                score: this.participant_total_score(p),
            }));
            with_scores.sort((a, b) => b.score - a.score);
            return with_scores;
        }
    }
    __decorate([
        $mol_mem
    ], $bog_quiz_session.prototype, "current_question", null);
    __decorate([
        $mol_action
    ], $bog_quiz_session.prototype, "start", null);
    __decorate([
        $mol_action
    ], $bog_quiz_session.prototype, "next", null);
    __decorate([
        $mol_action
    ], $bog_quiz_session.prototype, "end", null);
    __decorate([
        $mol_action
    ], $bog_quiz_session.prototype, "finalize_answers", null);
    __decorate([
        $mol_mem
    ], $bog_quiz_session.prototype, "participant_list", null);
    __decorate([
        $mol_action
    ], $bog_quiz_session.prototype, "participant_make", null);
    __decorate([
        $mol_mem_key
    ], $bog_quiz_session.prototype, "answer_for_participant", null);
    __decorate([
        $mol_mem_key
    ], $bog_quiz_session.prototype, "participant_total_score", null);
    __decorate([
        $mol_mem
    ], $bog_quiz_session.prototype, "leaderboard", null);
    $.$bog_quiz_session = $bog_quiz_session;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $bog_quiz_scoring extends $mol_object {
        static speed_multiplier(question_started_at, answer_final_at, question_timer_sec, speed_k_max, speed_k_min, speed_skip_sec) {
            const elapsed_ms = Number(answer_final_at - question_started_at);
            const elapsed_sec = elapsed_ms / 1000;
            const total_sec = Number(question_timer_sec);
            const skip_sec = Number(speed_skip_sec);
            if (elapsed_sec < skip_sec) {
                return speed_k_min;
            }
            const effective_sec = elapsed_sec - skip_sec;
            const effective_total = total_sec - skip_sec;
            const ratio = Math.min(1, effective_sec / effective_total);
            const multiplier = speed_k_min + (speed_k_max - speed_k_min) * (1 - ratio);
            return multiplier;
        }
        static score_single(is_correct, base_points, wrong_penalty, multiplier, speed_enabled) {
            if (is_correct) {
                const m = speed_enabled ? multiplier : 1;
                return Number(base_points) * m;
            }
            else {
                return -Number(wrong_penalty);
            }
        }
        static score_multi(selected_refs, correct_refs, base_points, wrong_penalty_per_option, multiplier, speed_enabled) {
            const hits = selected_refs.filter(s => correct_refs.includes(s));
            const hit_count = hits.length;
            const misses = selected_refs.filter(s => !correct_refs.includes(s));
            const miss_count = misses.length;
            const correct_count = correct_refs.length;
            const per_correct = correct_count > 0 ? Number(base_points) / correct_count : 0;
            const m = speed_enabled ? multiplier : 1;
            const points_positive = hit_count * per_correct * m;
            const points_negative = miss_count * Number(wrong_penalty_per_option);
            return points_positive - points_negative;
        }
        static calculate_answer_score(answer, session) {
            const question = answer.Question()?.remote();
            if (!question)
                return 0;
            const final_at = answer.FinalAt()?.val();
            if (!final_at)
                return 0;
            const question_type = question.Type()?.val() || 'single';
            const base_points = question.BasePoints()?.val() ?? BigInt(100);
            const speed_enabled = question.SpeedEnabled()?.val() ?? true;
            const question_started_at = session.QuestionStartedAt()?.val() ?? BigInt(0);
            const question_timer_sec = session.QuestionTimerSec()?.val() ?? BigInt(30);
            const speed_k_max = session.SpeedKMax()?.val() ?? 2.0;
            const speed_k_min = session.SpeedKMin()?.val() ?? 1.0;
            const speed_skip_sec = session.SpeedSkipSec()?.val() ?? BigInt(1);
            const multiplier = this.speed_multiplier(question_started_at, final_at, question_timer_sec, speed_k_max, speed_k_min, speed_skip_sec);
            if (question_type === 'single') {
                const selected = answer.selected_option_list();
                if (selected.length === 0)
                    return 0;
                const selected_option = selected[0];
                const is_correct = selected_option.IsCorrect()?.val() ?? false;
                const wrong_penalty = question.WrongPenaltySingle()?.val() ?? BigInt(0);
                return this.score_single(is_correct, base_points, wrong_penalty, multiplier, speed_enabled);
            }
            else {
                const selected = answer.selected_option_list();
                const selected_refs = selected.map(opt => opt.link().toString());
                const correct_options = question.correct_options();
                const correct_refs = correct_options.map((opt) => opt.link().toString());
                const wrong_penalty_per = question.WrongPenaltyMultiPerOption()?.val() ?? BigInt(0);
                return this.score_multi(selected_refs, correct_refs, base_points, wrong_penalty_per, multiplier, speed_enabled);
            }
        }
        static calculate_participant_total_score(participant, session) {
            const answers_list = session.Answers()?.remote_list() ?? [];
            const participant_answers = answers_list.filter(ans => {
                const ans_participant = ans.Participant()?.remote();
                return ans_participant?.link().toString() === participant.link().toString();
            });
            let total = 0;
            participant_answers.forEach(ans => {
                total += this.calculate_answer_score(ans, session);
            });
            return total;
        }
    }
    $.$bog_quiz_scoring = $bog_quiz_scoring;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $bog_quiz_owner extends $giper_baza_entity.with({
        Quizzes: $giper_baza_list_link_to(() => $bog_quiz_quiz),
        Sessions: $giper_baza_list_link_to(() => $bog_quiz_session),
    }) {
        quiz_make() {
            const quizzes = this.Quizzes(null);
            const count = quizzes.remote_list().length;
            if (count >= 10) {
                throw new Error('Maximum 10 quizzes per owner');
            }
            const quiz = quizzes.make([[null, $giper_baza_rank_read]]);
            quiz.Owner(null).remote(this);
            return quiz;
        }
        session_make(quiz) {
            const sessions = this.Sessions(null);
            const session = sessions.make([[null, $giper_baza_rank_read]]);
            session.Quiz(null).remote(quiz);
            session.Host(null).remote(this);
            session.State(null).val('waiting');
            session.QuestionIndex(null).val(BigInt(0));
            session.QuestionTimerSec(null).val(quiz.DefaultQuestionTimer()?.val() ?? BigInt(30));
            session.ReviewTimerSec(null).val(quiz.DefaultReviewTimer()?.val() ?? BigInt(10));
            session.ShowStats(null).val(quiz.DefaultSpeedEnabled()?.val() ?? false);
            session.ReactionsEnabled(null).val(false);
            session.LeaderboardEnabled(null).val(true);
            session.SpeedKMax(null).val(2.0);
            session.SpeedKMin(null).val(1.0);
            session.SpeedSkipSec(null).val(BigInt(1));
            return session;
        }
        total_questions() {
            const quizzes = this.Quizzes()?.remote_list() ?? [];
            return quizzes.reduce((sum, quiz) => {
                return sum + (quiz.Questions()?.remote_list().length ?? 0);
            }, 0);
        }
    }
    __decorate([
        $mol_action
    ], $bog_quiz_owner.prototype, "quiz_make", null);
    __decorate([
        $mol_action
    ], $bog_quiz_owner.prototype, "session_make", null);
    __decorate([
        $mol_mem
    ], $bog_quiz_owner.prototype, "total_questions", null);
    $.$bog_quiz_owner = $bog_quiz_owner;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $bog_quiz_quiz extends $giper_baza_entity.with({
        Title: $giper_baza_text,
        Owner: $giper_baza_atom_link_to(() => $bog_quiz_owner),
        Questions: $giper_baza_list_link_to(() => $bog_quiz_question),
        DefaultQuestionTimer: $giper_baza_atom_bint,
        DefaultReviewTimer: $giper_baza_atom_bint,
        DefaultBasePoints: $giper_baza_atom_bint,
        DefaultWrongPenaltySingle: $giper_baza_atom_bint,
        DefaultWrongPenaltyMultiPerOption: $giper_baza_atom_bint,
        DefaultSpeedEnabled: $giper_baza_atom_bool,
    }) {
        question_make() {
            const owner = this.Owner()?.remote();
            if (owner && owner.total_questions() >= 1000) {
                throw new Error('Maximum 1000 questions per owner');
            }
            const questions = this.Questions(null);
            const question = questions.make([[null, $giper_baza_rank_read]]);
            const order = questions.remote_list().length - 1;
            question.Order(null).val(BigInt(order));
            return question;
        }
        questions_ordered() {
            const questions = this.Questions()?.remote_list() ?? [];
            return [...questions].sort((a, b) => {
                return Number(a.Order()?.val() ?? 0) - Number(b.Order()?.val() ?? 0);
            });
        }
    }
    __decorate([
        $mol_action
    ], $bog_quiz_quiz.prototype, "question_make", null);
    __decorate([
        $mol_mem
    ], $bog_quiz_quiz.prototype, "questions_ordered", null);
    $.$bog_quiz_quiz = $bog_quiz_quiz;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_style_attach(id, text) {
        const doc = $mol_dom_context.document;
        if (!doc)
            return null;
        const elid = `$mol_style_attach:${id}`;
        let el = doc.getElementById(elid);
        if (!el) {
            el = doc.createElement('style');
            el.id = elid;
            doc.head.appendChild(el);
        }
        if (el.innerHTML != text)
            el.innerHTML = text;
        return el;
    }
    $.$mol_style_attach = $mol_style_attach;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_promise extends Promise {
        done;
        fail;
        constructor(executor) {
            let done;
            let fail;
            super((d, f) => {
                done = d;
                fail = f;
                executor?.(d, f);
            });
            this.done = done;
            this.fail = fail;
        }
    }
    $.$mol_promise = $mol_promise;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_promise_blocker extends $mol_promise {
        static [Symbol.toStringTag] = '$mol_promise_blocker';
    }
    $.$mol_promise_blocker = $mol_promise_blocker;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_decor {
        value;
        constructor(value) {
            this.value = value;
        }
        prefix() { return ''; }
        valueOf() { return this.value; }
        postfix() { return ''; }
        toString() {
            return `${this.prefix()}${this.valueOf()}${this.postfix()}`;
        }
    }
    $.$mol_decor = $mol_decor;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_style_unit extends $mol_decor {
        literal;
        constructor(value, literal) {
            super(value);
            this.literal = literal;
        }
        postfix() {
            return this.literal;
        }
        static per(value) { return `${value}%`; }
        static px(value) { return `${value}px`; }
        static mm(value) { return `${value}mm`; }
        static cm(value) { return `${value}cm`; }
        static Q(value) { return `${value}Q`; }
        static in(value) { return `${value}in`; }
        static pc(value) { return `${value}pc`; }
        static pt(value) { return `${value}pt`; }
        static cap(value) { return `${value}cap`; }
        static ch(value) { return `${value}ch`; }
        static em(value) { return `${value}em`; }
        static rem(value) { return `${value}rem`; }
        static ex(value) { return `${value}ex`; }
        static ic(value) { return `${value}ic`; }
        static lh(value) { return `${value}lh`; }
        static rlh(value) { return `${value}rlh`; }
        static vh(value) { return `${value}vh`; }
        static vw(value) { return `${value}vw`; }
        static vi(value) { return `${value}vi`; }
        static vb(value) { return `${value}vb`; }
        static vmin(value) { return `${value}vmin`; }
        static vmax(value) { return `${value}vmax`; }
        static deg(value) { return `${value}deg`; }
        static rad(value) { return `${value}rad`; }
        static grad(value) { return `${value}grad`; }
        static turn(value) { return `${value}turn`; }
        static s(value) { return `${value}s`; }
        static ms(value) { return `${value}ms`; }
    }
    $.$mol_style_unit = $mol_style_unit;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const { per } = $mol_style_unit;
    class $mol_style_func extends $mol_decor {
        name;
        constructor(name, value) {
            super(value);
            this.name = name;
        }
        prefix() { return this.name + '('; }
        postfix() { return ')'; }
        static linear_gradient(value) {
            return new $mol_style_func('linear-gradient', value);
        }
        static radial_gradient(value) {
            return new $mol_style_func('radial-gradient', value);
        }
        static calc(value) {
            return new $mol_style_func('calc', value);
        }
        static vary(name, defaultValue) {
            return new $mol_style_func('var', defaultValue ? [name, defaultValue] : name);
        }
        static url(href) {
            return new $mol_style_func('url', JSON.stringify(href));
        }
        static hsla(hue, saturation, lightness, alpha) {
            return new $mol_style_func('hsla', [hue, per(saturation), per(lightness), alpha]);
        }
        static clamp(min, mid, max) {
            return new $mol_style_func('clamp', [min, mid, max]);
        }
        static rgba(red, green, blue, alpha) {
            return new $mol_style_func('rgba', [red, green, blue, alpha]);
        }
        static scale(zoom) {
            return new $mol_style_func('scale', [zoom]);
        }
        static linear(...breakpoints) {
            return new $mol_style_func("linear", breakpoints.map((e) => Array.isArray(e)
                ? String(e[0]) +
                    " " +
                    (typeof e[1] === "number" ? e[1] + "%" : e[1].toString())
                : String(e)));
        }
        static cubic_bezier(x1, y1, x2, y2) {
            return new $mol_style_func('cubic-bezier', [x1, y1, x2, y2]);
        }
        static steps(value, step_position) {
            return new $mol_style_func('steps', [value, step_position]);
        }
        static blur(value) {
            return new $mol_style_func('blur', value ?? "");
        }
        static brightness(value) {
            return new $mol_style_func('brightness', value ?? "");
        }
        static contrast(value) {
            return new $mol_style_func('contrast', value ?? "");
        }
        static drop_shadow(color, x_offset, y_offset, blur_radius) {
            return new $mol_style_func("drop-shadow", blur_radius
                ? [color, x_offset, y_offset, blur_radius]
                : [color, x_offset, y_offset]);
        }
        static grayscale(value) {
            return new $mol_style_func('grayscale', value ?? "");
        }
        static hue_rotate(value) {
            return new $mol_style_func('hue-rotate', value ?? "");
        }
        static invert(value) {
            return new $mol_style_func('invert', value ?? "");
        }
        static opacity(value) {
            return new $mol_style_func('opacity', value ?? "");
        }
        static sepia(value) {
            return new $mol_style_func('sepia', value ?? "");
        }
        static saturate(value) {
            return new $mol_style_func('saturate', value ?? "");
        }
    }
    $.$mol_style_func = $mol_style_func;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    function $mol_style_prop(prefix, keys) {
        const record = keys.reduce((rec, key) => {
            rec[key] = $mol_style_func.vary(`--${prefix}_${key}`);
            return rec;
        }, {});
        return record;
    }
    $.$mol_style_prop = $mol_style_prop;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_media extends $mol_object2 {
        static match(query, next) {
            if (next !== undefined)
                return next;
            const res = this.$.$mol_dom_context.matchMedia?.(query) ?? {};
            res.onchange = () => this.match(query, res.matches);
            return res.matches;
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_media, "match", null);
    $.$mol_media = $mol_media;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function parse(theme) {
        if (theme === 'true')
            return true;
        if (theme === 'false')
            return false;
        return null;
    }
    function $mol_lights(next) {
        const arg = parse(this.$mol_state_arg.value('mol_lights'));
        const base = this.$mol_media.match('(prefers-color-scheme: light)');
        if (next === undefined) {
            return arg ?? this.$mol_state_local.value('$mol_lights') ?? base;
        }
        else {
            if (arg === null) {
                this.$mol_state_local.value('$mol_lights', next === base ? null : next);
            }
            else {
                this.$mol_state_arg.value('mol_lights', String(next));
            }
            return next;
        }
    }
    $.$mol_lights = $mol_lights;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_theme = $mol_style_prop('mol_theme', [
        'back',
        'hover',
        'card',
        'current',
        'special',
        'text',
        'control',
        'shade',
        'line',
        'focus',
        'field',
        'image',
        'spirit',
    ]);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/theme/theme.css", ":root {\n\t--mol_theme_hue: 240deg;\n\t--mol_theme_hue_spread: 90deg;\n\tcolor-scheme: dark light;\n}\n\n:where([mol_theme]) {\n\tcolor: var(--mol_theme_text);\n\tfill: var(--mol_theme_text);\n\tbackground-color: var(--mol_theme_back);\n}\n\t\n:root, [mol_theme=\"$mol_theme_dark\"], :where([mol_theme=\"$mol_theme_dark\"]) [mol_theme]  {\n\n\t--mol_theme_luma: -1;\n\t--mol_theme_image: invert(1) hue-rotate( 180deg );\n\t--mol_theme_spirit: hsl( 0deg, 0%, 0%, .75 );\n\n\t--mol_theme_back: hsl( var(--mol_theme_hue), 20%, 10% );\n\t--mol_theme_card: hsl( var(--mol_theme_hue), 50%, 20%, .25 );\n\t--mol_theme_field: hsl( var(--mol_theme_hue), 50%, 8%, .25 );\n\t--mol_theme_hover: hsl( var(--mol_theme_hue), 0%, 50%, .1 );\n\t\n\t--mol_theme_text: hsl( var(--mol_theme_hue), 0%, 80% );\n\t--mol_theme_shade: hsl( var(--mol_theme_hue), 0%, 60%, 1 );\n\t--mol_theme_line: hsl( var(--mol_theme_hue), 0%, 50%, .25 );\n\t--mol_theme_focus: hsl( calc( var(--mol_theme_hue) + 180deg ), 100%, 65% );\n\t\n\t--mol_theme_control: hsl( var(--mol_theme_hue), 60%, 65% );\n\t--mol_theme_current: hsl( calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ), 60%, 65% );\n\t--mol_theme_special: hsl( calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ), 60%, 65% );\n\n} @supports( color: oklch( 0% 0 0deg ) ) {\n:root, [mol_theme=\"$mol_theme_dark\"], :where([mol_theme=\"$mol_theme_dark\"]) [mol_theme]  {\n\t\n\t--mol_theme_back: oklch( 20% .03 var(--mol_theme_hue) );\n\t--mol_theme_card: oklch( 30% .05 var(--mol_theme_hue) / .25 );\n\t--mol_theme_field: oklch( 15% 0 var(--mol_theme_hue) / .25 );\n\t--mol_theme_hover: oklch( 70% 0 var(--mol_theme_hue) / .1 );\n\t\n\t--mol_theme_text: oklch( 80% 0 var(--mol_theme_hue) );\n\t--mol_theme_shade: oklch( 60% 0 var(--mol_theme_hue) );\n\t--mol_theme_line: oklch( 60% 0 var(--mol_theme_hue) / .25 );\n\t--mol_theme_focus: oklch( 80% .2 calc( var(--mol_theme_hue) + 180deg ) );\n\t\n\t--mol_theme_control: oklch( 70% .1 var(--mol_theme_hue) );\n\t--mol_theme_current: oklch( 70% .2 calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ) );\n\t--mol_theme_special: oklch( 70% .2 calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ) );\n\n} }\n\n[mol_theme=\"$mol_theme_light\"], :where([mol_theme=\"$mol_theme_light\"]) [mol_theme] {\n\t\n\t--mol_theme_luma: 1;\n\t--mol_theme_image: none;\n\t--mol_theme_spirit: hsl( 0deg, 0%, 100%, .75 );\n\t\n\t--mol_theme_back: hsl( var(--mol_theme_hue), 20%, 92% );\n\t--mol_theme_card: hsl( var(--mol_theme_hue), 50%, 100%, .5 );\n\t--mol_theme_field: hsl( var(--mol_theme_hue), 50%, 100%, .75 );\n\t--mol_theme_hover: hsl( var(--mol_theme_hue), 0%, 50%, .1 );\n\t\n\t--mol_theme_text: hsl( var(--mol_theme_hue), 0%, 0% );\n\t--mol_theme_shade: hsl( var(--mol_theme_hue), 0%, 40%, 1 );\n\t--mol_theme_line: hsl( var(--mol_theme_hue), 0%, 50%, .25 );\n\t--mol_theme_focus: hsl( calc( var(--mol_theme_hue) + 180deg ), 100%, 40% );\n\t\n\t--mol_theme_control: hsl( var(--mol_theme_hue), 80%, 30% );\n\t--mol_theme_current: hsl( calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ), 80%, 30% );\n\t--mol_theme_special: hsl( calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ), 80%, 30% );\n\n} @supports( color: oklch( 0% 0 0deg ) ) {\n[mol_theme=\"$mol_theme_light\"], :where([mol_theme=\"$mol_theme_light\"]) [mol_theme] {\n\t--mol_theme_back: oklch( 92% .01 var(--mol_theme_hue) );\n\t--mol_theme_card: oklch( 99% .01 var(--mol_theme_hue) / .5 );\n\t--mol_theme_field: oklch( 100% 0 var(--mol_theme_hue) / .5 );\n\t--mol_theme_hover: oklch( 50% 0 var(--mol_theme_hue) / .1 );\n\t\n\t--mol_theme_text: oklch( 20% 0 var(--mol_theme_hue) );\n\t--mol_theme_shade: oklch( 60% 0 var(--mol_theme_hue) );\n\t--mol_theme_line: oklch( 50% 0 var(--mol_theme_hue) / .25 );\n\t--mol_theme_focus: oklch( 60% .2 calc( var(--mol_theme_hue) + 180deg ) );\n\t\n\t--mol_theme_control: oklch( 40% .15 var(--mol_theme_hue) );\n\t--mol_theme_current: oklch( 50% .2 calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ) );\n\t--mol_theme_special: oklch( 50% .2 calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ) );\n\n} }\n\n:where( :root, [mol_theme=\"$mol_theme_dark\"] ) [mol_theme=\"$mol_theme_base\"] {\n\t--mol_theme_back: oklch( 25% .075 var(--mol_theme_hue) );\n\t--mol_theme_card: oklch( 35% .1 var(--mol_theme_hue) / .25 );\n}\n:where( [mol_theme=\"$mol_theme_light\"] ) [mol_theme=\"$mol_theme_base\"] {\n\t--mol_theme_back: oklch( 85% .075 var(--mol_theme_hue) );\n\t--mol_theme_card: oklch( 98% .03 var(--mol_theme_hue) / .25 );\n}\n\n:where( :root, [mol_theme=\"$mol_theme_dark\"] ) [mol_theme=\"$mol_theme_current\"] {\n\t--mol_theme_back: oklch( 25% .05 calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ) );\n\t--mol_theme_card: oklch( 35% .1 calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ) / .25 );\n}\n:where( [mol_theme=\"$mol_theme_light\"] ) [mol_theme=\"$mol_theme_current\"] {\n\t--mol_theme_back: oklch( 85% .05 calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ) );\n\t--mol_theme_card: oklch( 98% .03 calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ) / .25 );\n}\n\n:where( :root, [mol_theme=\"$mol_theme_dark\"] ) [mol_theme=\"$mol_theme_special\"] {\n\t--mol_theme_back: oklch( 25% .05 calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ) );\n\t--mol_theme_card: oklch( 35% .1 calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ) / .25 );\n}\n:where( [mol_theme=\"$mol_theme_light\"] ) [mol_theme=\"$mol_theme_special\"] {\n\t--mol_theme_back: oklch( 85% .05 calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ) );\n\t--mol_theme_card: oklch( 98% .03 calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ) / .25 );\n}\n\n:where( :root, [mol_theme=\"$mol_theme_dark\"] ) [mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: oklch( 35% .1 calc( var(--mol_theme_hue) + 180deg ) );\n\t--mol_theme_card: oklch( 45% .15 calc( var(--mol_theme_hue) + 180deg ) / .25 );\n}\n:where( [mol_theme=\"$mol_theme_light\"] ) [mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: oklch( 83% .1 calc( var(--mol_theme_hue) + 180deg ) );\n\t--mol_theme_card: oklch( 98% .03 calc( var(--mol_theme_hue) + 180deg ) / .25 );\n}\n\n");
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach('$mol_theme_lights', `:root { --mol_theme_back: oklch( ${$$.$mol_lights() ? 92 : 20}% .01 var(--mol_theme_hue) ) }`);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_gap = $mol_style_prop('mol_gap', [
        'page',
        'block',
        'text',
        'round',
        'space',
        'blur',
    ]);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/gap/gap.css", ":root {\n\t--mol_gap_page: 3rem;\n\t--mol_gap_block: .75rem;\n\t--mol_gap_text: .5rem .75rem;\n\t--mol_gap_round: .25rem;\n\t--mol_gap_space: .25rem;\n\t--mol_gap_blur: .5rem;\n}\n");
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_window extends $mol_object {
        static size() {
            this.resizes();
            return {
                width: self.innerWidth,
                height: self.innerHeight,
            };
        }
        static resizes(next) { return next; }
    }
    __decorate([
        $mol_mem
    ], $mol_window, "size", null);
    __decorate([
        $mol_mem
    ], $mol_window, "resizes", null);
    $.$mol_window = $mol_window;
    self.addEventListener('resize', event => $mol_window.resizes(event));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_view_selection extends $mol_object {
        static focused(next, notify) {
            const parents = [];
            let element = next?.[0] ?? $mol_dom_context.document.activeElement;
            while (element?.shadowRoot) {
                element = element.shadowRoot.activeElement;
            }
            while (element) {
                parents.push(element);
                const parent = element.parentNode;
                if (parent instanceof ShadowRoot)
                    element = parent.host;
                else
                    element = parent;
            }
            if (!next || notify)
                return parents;
            new $mol_after_tick(() => {
                const element = this.focused()[0];
                if (element)
                    element.focus();
                else
                    $mol_dom_context.blur();
            });
            return parents;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view_selection, "focused", null);
    $.$mol_view_selection = $mol_view_selection;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let $mol_keyboard_code;
    (function ($mol_keyboard_code) {
        $mol_keyboard_code[$mol_keyboard_code["backspace"] = 8] = "backspace";
        $mol_keyboard_code[$mol_keyboard_code["tab"] = 9] = "tab";
        $mol_keyboard_code[$mol_keyboard_code["enter"] = 13] = "enter";
        $mol_keyboard_code[$mol_keyboard_code["shift"] = 16] = "shift";
        $mol_keyboard_code[$mol_keyboard_code["ctrl"] = 17] = "ctrl";
        $mol_keyboard_code[$mol_keyboard_code["alt"] = 18] = "alt";
        $mol_keyboard_code[$mol_keyboard_code["pause"] = 19] = "pause";
        $mol_keyboard_code[$mol_keyboard_code["capsLock"] = 20] = "capsLock";
        $mol_keyboard_code[$mol_keyboard_code["escape"] = 27] = "escape";
        $mol_keyboard_code[$mol_keyboard_code["space"] = 32] = "space";
        $mol_keyboard_code[$mol_keyboard_code["pageUp"] = 33] = "pageUp";
        $mol_keyboard_code[$mol_keyboard_code["pageDown"] = 34] = "pageDown";
        $mol_keyboard_code[$mol_keyboard_code["end"] = 35] = "end";
        $mol_keyboard_code[$mol_keyboard_code["home"] = 36] = "home";
        $mol_keyboard_code[$mol_keyboard_code["left"] = 37] = "left";
        $mol_keyboard_code[$mol_keyboard_code["up"] = 38] = "up";
        $mol_keyboard_code[$mol_keyboard_code["right"] = 39] = "right";
        $mol_keyboard_code[$mol_keyboard_code["down"] = 40] = "down";
        $mol_keyboard_code[$mol_keyboard_code["insert"] = 45] = "insert";
        $mol_keyboard_code[$mol_keyboard_code["delete"] = 46] = "delete";
        $mol_keyboard_code[$mol_keyboard_code["key0"] = 48] = "key0";
        $mol_keyboard_code[$mol_keyboard_code["key1"] = 49] = "key1";
        $mol_keyboard_code[$mol_keyboard_code["key2"] = 50] = "key2";
        $mol_keyboard_code[$mol_keyboard_code["key3"] = 51] = "key3";
        $mol_keyboard_code[$mol_keyboard_code["key4"] = 52] = "key4";
        $mol_keyboard_code[$mol_keyboard_code["key5"] = 53] = "key5";
        $mol_keyboard_code[$mol_keyboard_code["key6"] = 54] = "key6";
        $mol_keyboard_code[$mol_keyboard_code["key7"] = 55] = "key7";
        $mol_keyboard_code[$mol_keyboard_code["key8"] = 56] = "key8";
        $mol_keyboard_code[$mol_keyboard_code["key9"] = 57] = "key9";
        $mol_keyboard_code[$mol_keyboard_code["A"] = 65] = "A";
        $mol_keyboard_code[$mol_keyboard_code["B"] = 66] = "B";
        $mol_keyboard_code[$mol_keyboard_code["C"] = 67] = "C";
        $mol_keyboard_code[$mol_keyboard_code["D"] = 68] = "D";
        $mol_keyboard_code[$mol_keyboard_code["E"] = 69] = "E";
        $mol_keyboard_code[$mol_keyboard_code["F"] = 70] = "F";
        $mol_keyboard_code[$mol_keyboard_code["G"] = 71] = "G";
        $mol_keyboard_code[$mol_keyboard_code["H"] = 72] = "H";
        $mol_keyboard_code[$mol_keyboard_code["I"] = 73] = "I";
        $mol_keyboard_code[$mol_keyboard_code["J"] = 74] = "J";
        $mol_keyboard_code[$mol_keyboard_code["K"] = 75] = "K";
        $mol_keyboard_code[$mol_keyboard_code["L"] = 76] = "L";
        $mol_keyboard_code[$mol_keyboard_code["M"] = 77] = "M";
        $mol_keyboard_code[$mol_keyboard_code["N"] = 78] = "N";
        $mol_keyboard_code[$mol_keyboard_code["O"] = 79] = "O";
        $mol_keyboard_code[$mol_keyboard_code["P"] = 80] = "P";
        $mol_keyboard_code[$mol_keyboard_code["Q"] = 81] = "Q";
        $mol_keyboard_code[$mol_keyboard_code["R"] = 82] = "R";
        $mol_keyboard_code[$mol_keyboard_code["S"] = 83] = "S";
        $mol_keyboard_code[$mol_keyboard_code["T"] = 84] = "T";
        $mol_keyboard_code[$mol_keyboard_code["U"] = 85] = "U";
        $mol_keyboard_code[$mol_keyboard_code["V"] = 86] = "V";
        $mol_keyboard_code[$mol_keyboard_code["W"] = 87] = "W";
        $mol_keyboard_code[$mol_keyboard_code["X"] = 88] = "X";
        $mol_keyboard_code[$mol_keyboard_code["Y"] = 89] = "Y";
        $mol_keyboard_code[$mol_keyboard_code["Z"] = 90] = "Z";
        $mol_keyboard_code[$mol_keyboard_code["metaLeft"] = 91] = "metaLeft";
        $mol_keyboard_code[$mol_keyboard_code["metaRight"] = 92] = "metaRight";
        $mol_keyboard_code[$mol_keyboard_code["select"] = 93] = "select";
        $mol_keyboard_code[$mol_keyboard_code["numpad0"] = 96] = "numpad0";
        $mol_keyboard_code[$mol_keyboard_code["numpad1"] = 97] = "numpad1";
        $mol_keyboard_code[$mol_keyboard_code["numpad2"] = 98] = "numpad2";
        $mol_keyboard_code[$mol_keyboard_code["numpad3"] = 99] = "numpad3";
        $mol_keyboard_code[$mol_keyboard_code["numpad4"] = 100] = "numpad4";
        $mol_keyboard_code[$mol_keyboard_code["numpad5"] = 101] = "numpad5";
        $mol_keyboard_code[$mol_keyboard_code["numpad6"] = 102] = "numpad6";
        $mol_keyboard_code[$mol_keyboard_code["numpad7"] = 103] = "numpad7";
        $mol_keyboard_code[$mol_keyboard_code["numpad8"] = 104] = "numpad8";
        $mol_keyboard_code[$mol_keyboard_code["numpad9"] = 105] = "numpad9";
        $mol_keyboard_code[$mol_keyboard_code["multiply"] = 106] = "multiply";
        $mol_keyboard_code[$mol_keyboard_code["add"] = 107] = "add";
        $mol_keyboard_code[$mol_keyboard_code["subtract"] = 109] = "subtract";
        $mol_keyboard_code[$mol_keyboard_code["decimal"] = 110] = "decimal";
        $mol_keyboard_code[$mol_keyboard_code["divide"] = 111] = "divide";
        $mol_keyboard_code[$mol_keyboard_code["F1"] = 112] = "F1";
        $mol_keyboard_code[$mol_keyboard_code["F2"] = 113] = "F2";
        $mol_keyboard_code[$mol_keyboard_code["F3"] = 114] = "F3";
        $mol_keyboard_code[$mol_keyboard_code["F4"] = 115] = "F4";
        $mol_keyboard_code[$mol_keyboard_code["F5"] = 116] = "F5";
        $mol_keyboard_code[$mol_keyboard_code["F6"] = 117] = "F6";
        $mol_keyboard_code[$mol_keyboard_code["F7"] = 118] = "F7";
        $mol_keyboard_code[$mol_keyboard_code["F8"] = 119] = "F8";
        $mol_keyboard_code[$mol_keyboard_code["F9"] = 120] = "F9";
        $mol_keyboard_code[$mol_keyboard_code["F10"] = 121] = "F10";
        $mol_keyboard_code[$mol_keyboard_code["F11"] = 122] = "F11";
        $mol_keyboard_code[$mol_keyboard_code["F12"] = 123] = "F12";
        $mol_keyboard_code[$mol_keyboard_code["numLock"] = 144] = "numLock";
        $mol_keyboard_code[$mol_keyboard_code["scrollLock"] = 145] = "scrollLock";
        $mol_keyboard_code[$mol_keyboard_code["semicolon"] = 186] = "semicolon";
        $mol_keyboard_code[$mol_keyboard_code["equals"] = 187] = "equals";
        $mol_keyboard_code[$mol_keyboard_code["comma"] = 188] = "comma";
        $mol_keyboard_code[$mol_keyboard_code["dash"] = 189] = "dash";
        $mol_keyboard_code[$mol_keyboard_code["period"] = 190] = "period";
        $mol_keyboard_code[$mol_keyboard_code["forwardSlash"] = 191] = "forwardSlash";
        $mol_keyboard_code[$mol_keyboard_code["graveAccent"] = 192] = "graveAccent";
        $mol_keyboard_code[$mol_keyboard_code["bracketOpen"] = 219] = "bracketOpen";
        $mol_keyboard_code[$mol_keyboard_code["slashBack"] = 220] = "slashBack";
        $mol_keyboard_code[$mol_keyboard_code["slashBackLeft"] = 226] = "slashBackLeft";
        $mol_keyboard_code[$mol_keyboard_code["bracketClose"] = 221] = "bracketClose";
        $mol_keyboard_code[$mol_keyboard_code["quoteSingle"] = 222] = "quoteSingle";
    })($mol_keyboard_code = $.$mol_keyboard_code || ($.$mol_keyboard_code = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    if ($mol_dom_context.document) {
        function focus(event) {
            const target = event.target;
            if (target?.shadowRoot)
                watch(target.shadowRoot);
            $mol_view_selection.focused($mol_maybe(target), 'notify');
        }
        function watch(root) {
            root.removeEventListener('focus', focus, true);
            root.addEventListener('focus', focus, true);
        }
        watch($mol_dom_context.document);
        $mol_dom.document.addEventListener('keydown', event => {
            if (!event.altKey)
                return;
            const self = $mol_view_selection.focused()[0];
            if (!self)
                return;
            switch (event.keyCode) {
                case $mol_keyboard_code.down:
                    var vert = 1, hor = 0;
                    break;
                case $mol_keyboard_code.up:
                    var vert = -1, hor = 0;
                    break;
                case $mol_keyboard_code.left:
                    var hor = -1, vert = 0;
                    break;
                case $mol_keyboard_code.right:
                    var hor = 1, vert = 0;
                    break;
                default: return;
            }
            event.preventDefault();
            const self_rect = self.getBoundingClientRect();
            const center_hor = (self_rect.left + self_rect.right) / 2;
            const center_vert = (self_rect.top + self_rect.bottom) / 2;
            const all = [...$mol_dom.document.querySelectorAll(':where( [role="button"], [role="checkbox"], input, button, a ):not([disabled])')]
                .map(el => {
                const rect = el.getBoundingClientRect();
                const dist = (Math.max(0, center_hor - rect.right) + Math.max(0, rect.left - center_hor)) * vert * vert
                    + (Math.max(0, center_vert - rect.bottom) + Math.max(0, rect.top - center_vert)) * hor * hor;
                return [el, rect, dist];
            })
                .filter(([el, rect]) => {
                if (el === self)
                    return false;
                if (vert > 0 && rect.top < self_rect.bottom)
                    return false;
                if (vert < 0 && rect.bottom > self_rect.top)
                    return false;
                if (hor > 0 && rect.left < self_rect.right)
                    return false;
                if (hor < 0 && rect.right > self_rect.left)
                    return false;
                return true;
            })
                .sort(([, one, dist1], [, two, dist2]) => {
                return (dist1 - dist2) || ((one.top - two.top) * vert + (one.left - two.left) * hor);
            });
            const target = all[0]?.[0];
            target?.focus();
        });
    }
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_qname(name) {
        return name.replace(/\W/g, '').replace(/^(?=\d+)/, '_');
    }
    $.$mol_dom_qname = $mol_dom_qname;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_watch() {
        const atom = $mol_wire_auto();
        if (atom instanceof $mol_wire_atom) {
            atom.watch();
        }
        else {
            $mol_fail(new Error('Atom is required for watching'));
        }
    }
    $.$mol_wire_watch = $mol_wire_watch;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_attributes(el, attrs) {
        for (let name in attrs) {
            let val = attrs[name];
            if (val === undefined) {
                continue;
            }
            else if (val === null || val === false) {
                if (!el.hasAttribute(name))
                    continue;
                el.removeAttribute(name);
            }
            else {
                const str = String(val);
                if (el.getAttribute(name) === str)
                    continue;
                el.setAttribute(name, str);
            }
        }
    }
    $.$mol_dom_render_attributes = $mol_dom_render_attributes;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_events(el, events, passive = false) {
        for (let name in events) {
            el.addEventListener(name, events[name], { passive });
        }
    }
    $.$mol_dom_render_events = $mol_dom_render_events;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_error_message(error) {
        return String((error instanceof Error ? error.message : null) || error) || 'Unknown';
    }
    $.$mol_error_message = $mol_error_message;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_styles(el, styles) {
        for (let name in styles) {
            let val = styles[name];
            const style = el.style;
            const kebab = (name) => name.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
            if (typeof val === 'number') {
                style.setProperty(kebab(name), `${val}px`);
            }
            else {
                style.setProperty(kebab(name), val);
            }
        }
    }
    $.$mol_dom_render_styles = $mol_dom_render_styles;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_fields(el, fields) {
        for (let key in fields) {
            const val = fields[key];
            if (val === undefined)
                continue;
            if (val === el[key])
                continue;
            el[key] = val;
        }
    }
    $.$mol_dom_render_fields = $mol_dom_render_fields;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_after_timeout extends $mol_object2 {
        delay;
        task;
        id;
        constructor(delay, task) {
            super();
            this.delay = delay;
            this.task = task;
            this.id = setTimeout(task, delay);
        }
        destructor() {
            clearTimeout(this.id);
        }
    }
    $.$mol_after_timeout = $mol_after_timeout;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/view/view/view.css", "[mol_view] {\n\ttransition-property: height, width, min-height, min-width, max-width, max-height, transform, scale, translate, rotate;\n\ttransition-duration: .2s;\n\ttransition-timing-function: ease-out;\n\t-webkit-appearance: none;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tflex-shrink: 0;\n\tcontain: style;\n\tscrollbar-color: var(--mol_theme_line) transparent;\n\tscrollbar-width: thin;\n}\t\n\n[mol_view]::selection {\n\tbackground: var(--mol_theme_line);\n}\t\n\n[mol_view]::-webkit-scrollbar {\n\twidth: .25rem;\n\theight: .25rem;\n}\n\n[mol_view]::-webkit-scrollbar-corner {\n\tbackground-color: var(--mol_theme_line);\n}\n\n[mol_view]::-webkit-scrollbar-track {\n\tbackground-color: transparent;\n}\n\n[mol_view]::-webkit-scrollbar-thumb {\n\tbackground-color: var(--mol_theme_line);\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_view] > * {\n\tword-break: inherit;\n}\n\n[mol_view_root] {\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbox-sizing: border-box;\n\tfont-family: system-ui, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n\tfont-size: 1rem;\n\tline-height: 1.5rem;\n\t/* background: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text); */\n\tcontain: unset; /** Fixes bg ignoring when applied to body on Chrome */\n\ttab-size: 4;\n\toverscroll-behavior: contain; /** Disable navigation gestures **/\n}\n\n@media print {\n\t[mol_view_root] {\n\t\theight: auto;\n\t}\n}\n[mol_view][mol_view_error]:not([mol_view_error=\"Promise\"], [mol_view_error=\"$mol_promise_blocker\"]) {\n\tbackground-image: repeating-linear-gradient(\n\t\t-45deg,\n\t\t#f92323,\n\t\t#f92323 .5rem,\n\t\t#ff3d3d .5rem,\n\t\t#ff3d3d 1.5rem\n\t);\n\tcolor: black;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n@keyframes mol_view_wait {\n\tfrom {\n\t\topacity: .25;\n\t}\n\t20% {\n\t\topacity: .75;\n\t}\n\tto {\n\t\topacity: .25;\n\t}\n}\n\n:where([mol_view][mol_view_error=\"$mol_promise_blocker\"]),\n:where([mol_view][mol_view_error=\"Promise\"]) {\n\tbackground: var(--mol_theme_hover);\n}\n\n[mol_view][mol_view_error=\"Promise\"] {\n\tanimation: mol_view_wait 1s steps(20,end) infinite;\n}\n");
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_view_visible_width() {
        return $mol_window.size().width;
    }
    $.$mol_view_visible_width = $mol_view_visible_width;
    function $mol_view_visible_height() {
        return $mol_window.size().height;
    }
    $.$mol_view_visible_height = $mol_view_visible_height;
    function $mol_view_state_key(suffix) {
        return suffix;
    }
    $.$mol_view_state_key = $mol_view_state_key;
    class $mol_view extends $mol_object {
        static Root(id) {
            return new this;
        }
        static roots() {
            return [...$mol_dom.document.querySelectorAll('[mol_view_root]:not([mol_view_root=""])')].map((node, index) => {
                const name = node.getAttribute('mol_view_root');
                const View = this.$[name];
                if (!View) {
                    $mol_fail_log(new Error(`Autobind unknown view class`, { cause: { name } }));
                    return null;
                }
                const view = View.Root(index);
                view.dom_node(node);
                return view;
            }).filter($mol_guard_defined);
        }
        static auto() {
            const roots = this.roots();
            if (!roots.length)
                return;
            for (const root of roots) {
                try {
                    root.dom_tree();
                }
                catch (error) {
                    $mol_fail_log(error);
                }
            }
            try {
                document.title = roots[0].title();
            }
            catch (error) {
                $mol_fail_log(error);
            }
            descr: try {
                const descr = roots[0].hint();
                if (!descr)
                    break descr;
                const head = $mol_dom.document.head;
                let node = head.querySelector('meta[name="description"]');
                if (node)
                    node.content = descr;
                else
                    head.append($mol_jsx("meta", { name: "description", content: descr }));
            }
            catch (error) {
                $mol_fail_log(error);
            }
        }
        title() {
            return this.toString().match(/.*\.(\w+)/)?.[1] ?? this.toString();
        }
        hint() {
            return '';
        }
        focused(next) {
            let node = this.dom_node();
            const value = $mol_view_selection.focused(next === undefined ? undefined : (next ? [node] : []));
            return value.indexOf(node) !== -1;
        }
        state_key(suffix = '') {
            return this.$.$mol_view_state_key(suffix);
        }
        dom_name() {
            return $mol_dom_qname(this.constructor.toString()) || 'div';
        }
        dom_name_space() { return 'http://www.w3.org/1999/xhtml'; }
        sub() {
            return [];
        }
        sub_visible() {
            return this.sub();
        }
        minimal_width() {
            let min = 0;
            try {
                const sub = this.sub();
                if (!sub)
                    return 0;
                sub.forEach(view => {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_width());
                    }
                });
            }
            catch (error) {
                $mol_fail_log(error);
                return 24;
            }
            return min;
        }
        maximal_width() {
            return this.minimal_width();
        }
        minimal_height() {
            let min = 0;
            try {
                for (const view of this.sub() ?? []) {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_height());
                    }
                }
            }
            catch (error) {
                $mol_fail_log(error);
                return 24;
            }
            return min;
        }
        static watchers = new Set();
        view_rect() {
            if ($mol_wire_probe(() => this.view_rect()) === undefined) {
                $mol_wire_watch();
                return null;
            }
            else {
                const { width, height, left, right, top, bottom } = this.dom_node().getBoundingClientRect();
                return { width, height, left, right, top, bottom };
            }
        }
        dom_id() {
            return this.toString().replace(/</g, '(').replace(/>/g, ')').replaceAll(/"/g, "'");
        }
        dom_node_external(next) {
            const node = next ?? $mol_dom_context.document.createElementNS(this.dom_name_space(), this.dom_name());
            const id = this.dom_id();
            node.setAttribute('id', id);
            node.toString = $mol_const('<#' + id + '>');
            return node;
        }
        dom_node(next) {
            $mol_wire_solid();
            const node = this.dom_node_external(next);
            $mol_dom_render_attributes(node, this.attr_static());
            const events = this.event_async();
            $mol_dom_render_events(node, events);
            return node;
        }
        dom_final() {
            this.render();
            const sub = this.sub_visible();
            if (!sub)
                return;
            for (const el of sub) {
                if (el && typeof el === 'object' && 'dom_final' in el) {
                    el['dom_final']();
                }
            }
            return this.dom_node();
        }
        dom_tree(next) {
            const node = this.dom_node(next);
            render: try {
                $mol_dom_render_attributes(node, { mol_view_error: null });
                try {
                    this.render();
                }
                finally {
                    for (let plugin of this.plugins()) {
                        if (plugin instanceof $mol_plugin) {
                            plugin.dom_tree();
                        }
                    }
                }
            }
            catch (error) {
                $mol_fail_log(error);
                const mol_view_error = $mol_promise_like(error)
                    ? error.constructor[Symbol.toStringTag] ?? 'Promise'
                    : error.name || error.constructor.name;
                $mol_dom_render_attributes(node, { mol_view_error });
                if ($mol_promise_like(error))
                    break render;
                try {
                    ;
                    node.innerText = this.$.$mol_error_message(error).replace(/^|$/mg, '\xA0\xA0');
                }
                catch { }
            }
            try {
                this.auto();
            }
            catch (error) {
                $mol_fail_log(error);
            }
            return node;
        }
        dom_node_actual() {
            const node = this.dom_node();
            const attr = this.attr();
            const style = this.style();
            $mol_dom_render_attributes(node, attr);
            $mol_dom_render_styles(node, style);
            return node;
        }
        auto() {
            return [];
        }
        render() {
            const node = this.dom_node_actual();
            const sub = this.sub_visible();
            if (!sub)
                return;
            const nodes = sub.map(child => {
                if (child == null)
                    return null;
                return (child instanceof $mol_view)
                    ? child.dom_node()
                    : child instanceof $mol_dom_context.Node
                        ? child
                        : String(child);
            });
            $mol_dom_render_children(node, nodes);
            for (const el of sub)
                if (el && typeof el === 'object' && 'dom_tree' in el)
                    el['dom_tree']();
            $mol_dom_render_fields(node, this.field());
        }
        static view_classes() {
            const proto = this.prototype;
            let current = proto;
            const classes = [];
            while (current) {
                if (current.constructor.name !== classes.at(-1)?.name) {
                    classes.push(current.constructor);
                }
                if (!(current instanceof $mol_view))
                    break;
                current = Object.getPrototypeOf(current);
            }
            return classes;
        }
        static _view_names;
        static view_names(suffix) {
            let cache = Reflect.getOwnPropertyDescriptor(this, '_view_names')?.value;
            if (!cache)
                cache = this._view_names = new Map;
            const cached = cache.get(suffix);
            if (cached)
                return cached;
            const names = [];
            const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
            for (const Class of this.view_classes()) {
                if (suffix in Class.prototype)
                    names.push(this.$.$mol_func_name(Class) + suffix2);
                else
                    break;
            }
            cache.set(suffix, names);
            return names;
        }
        view_names_owned() {
            const names = [];
            let owner = $mol_owning_get(this);
            if (!(owner?.host instanceof $mol_view))
                return names;
            const suffix = owner.task.name.trim();
            const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
            names.push(...owner.host.constructor.view_names(suffix));
            for (let prefix of owner.host.view_names_owned()) {
                names.push(prefix + suffix2);
            }
            return names;
        }
        view_names() {
            const names = new Set();
            for (let name of this.view_names_owned())
                names.add(name);
            for (let Class of this.constructor.view_classes()) {
                const name = this.$.$mol_func_name(Class);
                if (name)
                    names.add(name);
            }
            return names;
        }
        theme(next) {
            return next;
        }
        attr_static() {
            let attrs = {};
            for (let name of this.view_names())
                attrs[name.replace(/\$/g, '').replace(/^(?=\d)/, '_').toLowerCase()] = '';
            return attrs;
        }
        attr() {
            return {
                mol_theme: this.theme(),
            };
        }
        style() {
            return {};
        }
        field() {
            return {};
        }
        event() {
            return {};
        }
        event_async() {
            return { ...$mol_wire_async(this.event()) };
        }
        plugins() {
            return [];
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this));
        }
        *view_find(check, path = []) {
            if (path.length === 0 && check(this))
                return yield [this];
            try {
                const checked = new Set();
                const sub = this.sub();
                for (const item of sub) {
                    if (!(item instanceof $mol_view))
                        continue;
                    if (!check(item))
                        continue;
                    checked.add(item);
                    yield [...path, this, item];
                }
                for (const item of sub) {
                    if (!(item instanceof $mol_view))
                        continue;
                    if (checked.has(item))
                        continue;
                    yield* item.view_find(check, [...path, this]);
                }
            }
            catch (error) {
                if ($mol_promise_like(error))
                    $mol_fail_hidden(error);
                $mol_fail_log(error);
            }
        }
        force_render(path) {
            const kids = this.sub();
            const index = kids.findIndex(item => {
                if (item instanceof $mol_view) {
                    return path.has(item);
                }
                else {
                    return false;
                }
            });
            if (index >= 0) {
                kids[index].force_render(path);
            }
        }
        ensure_visible(view, align = "start") {
            const path = this.view_find(v => v === view).next().value;
            this.force_render(new Set(path));
            try {
                this.dom_final();
            }
            finally {
                view.dom_node().scrollIntoView({ block: align });
            }
        }
        bring() {
            const win = this.$.$mol_dom_context;
            if (win.parent !== win.self && !win.document.hasFocus())
                return;
            new this.$.$mol_after_timeout(0, () => {
                this.focused(true);
            });
        }
        destructor() {
            const node = $mol_wire_probe(() => this.dom_node());
            if (!node)
                return;
            const events = $mol_wire_probe(() => this.event_async());
            if (!events)
                return;
            for (let event_name in events) {
                node.removeEventListener(event_name, events[event_name]);
            }
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "title", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "focused", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "dom_name", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "minimal_width", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "minimal_height", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "view_rect", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "dom_id", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_node", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_final", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_tree", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_node_actual", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "render", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "view_names_owned", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "view_names", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "event_async", null);
    __decorate([
        $mol_mem_key
    ], $mol_view, "Root", null);
    __decorate([
        $mol_mem
    ], $mol_view, "roots", null);
    __decorate([
        $mol_mem
    ], $mol_view, "auto", null);
    __decorate([
        $mol_memo.method
    ], $mol_view, "view_classes", null);
    $.$mol_view = $mol_view;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_dom_context.document?.addEventListener('DOMContentLoaded', () => $mol_view.auto(), { once: true });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_plugin extends $mol_view {
        dom_node_external(next) {
            return next ?? $mol_owning_get(this).host.dom_node();
        }
        render() {
            this.dom_node_actual();
        }
    }
    $.$mol_plugin = $mol_plugin;
})($ || ($ = {}));

;
	($.$mol_scroll) = class $mol_scroll extends ($.$mol_view) {
		tabindex(){
			return -1;
		}
		event_scroll(next){
			if(next !== undefined) return next;
			return null;
		}
		scroll_top(next){
			if(next !== undefined) return next;
			return 0;
		}
		scroll_left(next){
			if(next !== undefined) return next;
			return 0;
		}
		attr(){
			return {...(super.attr()), "tabindex": (this.tabindex())};
		}
		event(){
			return {...(super.event()), "scroll": (next) => (this.event_scroll(next))};
		}
	};
	($mol_mem(($.$mol_scroll.prototype), "event_scroll"));
	($mol_mem(($.$mol_scroll.prototype), "scroll_top"));
	($mol_mem(($.$mol_scroll.prototype), "scroll_left"));


;
"use strict";
var $;
(function ($) {
    class $mol_dom_listener extends $mol_object {
        _node;
        _event;
        _handler;
        _config;
        constructor(_node, _event, _handler, _config = { passive: true }) {
            super();
            this._node = _node;
            this._event = _event;
            this._handler = _handler;
            this._config = _config;
            this._node.addEventListener(this._event, this._handler, this._config);
        }
        destructor() {
            this._node.removeEventListener(this._event, this._handler, this._config);
            super.destructor();
        }
    }
    $.$mol_dom_listener = $mol_dom_listener;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_print extends $mol_object {
        static before() {
            return new $mol_dom_listener(this.$.$mol_dom_context, 'beforeprint', () => {
                this.active(true);
            });
        }
        static after() {
            return new $mol_dom_listener(this.$.$mol_dom_context, 'afterprint', () => {
                this.active(false);
            });
        }
        static active(next) {
            this.before();
            this.after();
            return next || false;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_print, "before", null);
    __decorate([
        $mol_mem
    ], $mol_print, "after", null);
    __decorate([
        $mol_mem
    ], $mol_print, "active", null);
    $.$mol_print = $mol_print;
})($ || ($ = {}));

;
"use strict";

;
"use strict";

;
"use strict";

;
"use strict";

;
"use strict";
var $;
(function ($) {
    function $mol_style_sheet(Component, config0) {
        let rules = [];
        const block = $mol_dom_qname($mol_ambient({}).$mol_func_name(Component));
        const kebab = (name) => name.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
        const make_class = (prefix, path, config) => {
            const props = [];
            const selector = (prefix, path) => {
                if (path.length === 0)
                    return prefix || `[${block}]`;
                let res = `[${block}_${path.join('_')}]`;
                if (prefix)
                    res = prefix + ' :where(' + res + ')';
                return res;
            };
            for (const key of Object.keys(config).reverse()) {
                if (/^(--)?[a-z]/.test(key)) {
                    const addProp = (keys, val) => {
                        if (Array.isArray(val)) {
                            if (val[0] && [Array, Object].includes(val[0].constructor)) {
                                val = val.map(v => {
                                    return Object.entries(v).map(([n, a]) => {
                                        if (a === true)
                                            return kebab(n);
                                        if (a === false)
                                            return null;
                                        return String(a);
                                    }).filter(Boolean).join(' ');
                                }).join(',');
                            }
                            else {
                                val = val.join(' ');
                            }
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                        else if (val.constructor === Object) {
                            for (let suffix of Object.keys(val).reverse()) {
                                addProp([...keys, kebab(suffix)], val[suffix]);
                            }
                        }
                        else {
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                    };
                    addProp([kebab(key)], config[key]);
                }
                else if (/^[A-Z]/.test(key)) {
                    make_class(prefix, [...path, key.toLowerCase()], config[key]);
                }
                else if (key[0] === '$') {
                    make_class(selector(prefix, path) + ' :where([' + $mol_dom_qname(key) + '])', [], config[key]);
                }
                else if (key === '>') {
                    const types = config[key];
                    for (let type of Object.keys(types).reverse()) {
                        make_class(selector(prefix, path) + ' > :where([' + $mol_dom_qname(type) + '])', [], types[type]);
                    }
                }
                else if (key === '@') {
                    const attrs = config[key];
                    for (let name of Object.keys(attrs).reverse()) {
                        for (let val in attrs[name]) {
                            make_class(selector(prefix, path) + ':where([' + name + '=' + JSON.stringify(val) + '])', [], attrs[name][val]);
                        }
                    }
                }
                else if (key === '@media') {
                    const media = config[key];
                    for (let query of Object.keys(media).reverse()) {
                        rules.push('}\n');
                        make_class(prefix, path, media[query]);
                        rules.push(`${key} ${query} {\n`);
                    }
                }
                else if (key === '@starting-style') {
                    const styles = config[key];
                    rules.push('}\n');
                    make_class(prefix, path, styles);
                    rules.push(`${key} {\n`);
                }
                else if (key[0] === '[' && key[key.length - 1] === ']') {
                    const attr = key.slice(1, -1);
                    const vals = config[key];
                    for (let val of Object.keys(vals).reverse()) {
                        make_class(selector(prefix, path) + ':where([' + attr + '=' + JSON.stringify(val) + '])', [], vals[val]);
                    }
                }
                else {
                    make_class(selector(prefix, path) + key, [], config[key]);
                }
            }
            if (props.length) {
                rules.push(`${selector(prefix, path)} {\n${props.reverse().join('')}}\n`);
            }
        };
        make_class('', [], config0);
        return rules.reverse().join('');
    }
    $.$mol_style_sheet = $mol_style_sheet;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_style_define(Component, config) {
        return $mol_style_attach(Component.name, $mol_style_sheet(Component, config));
    }
    $.$mol_style_define = $mol_style_define;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_scroll extends $.$mol_scroll {
            scroll_top(next, cache) {
                const el = this.dom_node();
                if (next !== undefined && !cache)
                    el.scrollTop = next;
                return el.scrollTop;
            }
            scroll_left(next, cache) {
                const el = this.dom_node();
                if (next !== undefined && !cache)
                    el.scrollLeft = next;
                return el.scrollLeft;
            }
            event_scroll(next) {
                const el = this.dom_node();
                this.scroll_left(el.scrollLeft, 'cache');
                this.scroll_top(el.scrollTop, 'cache');
            }
            minimal_height() {
                return this.$.$mol_print.active() ? null : 0;
            }
            minimal_width() {
                return this.$.$mol_print.active() ? null : 0;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_scroll.prototype, "scroll_top", null);
        __decorate([
            $mol_mem
        ], $mol_scroll.prototype, "scroll_left", null);
        $$.$mol_scroll = $mol_scroll;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem, px } = $mol_style_unit;
        $mol_style_define($mol_scroll, {
            display: 'grid',
            overflow: 'auto',
            flex: {
                direction: 'column',
                grow: 1,
                shrink: 1,
            },
            outline: 'none',
            align: {
                self: 'stretch',
                items: 'flex-start',
            },
            boxSizing: 'border-box',
            willChange: 'scroll-position',
            scroll: {
                padding: [rem(.75), 0],
            },
            maxHeight: per(100),
            maxWidth: per(100),
            webkitOverflowScrolling: 'touch',
            contain: 'content',
            '>': {
                $mol_view: {
                    gridArea: '1/1',
                },
            },
            '::before': {
                display: 'none',
            },
            '::after': {
                display: 'none',
            },
            '::-webkit-scrollbar': {
                width: rem(.25),
                height: rem(.25),
            },
            '@media': {
                'print': {
                    overflow: 'hidden',
                    contain: 'none',
                    maxHeight: 'unset',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_book2) = class $mol_book2 extends ($.$mol_scroll) {
		pages_deep(){
			return [];
		}
		pages(){
			return (this.pages_deep());
		}
		Placeholder(){
			const obj = new this.$.$mol_view();
			return obj;
		}
		placeholders(){
			return [(this.Placeholder())];
		}
		menu_title(){
			return "";
		}
		sub(){
			return [...(this.pages()), ...(this.placeholders())];
		}
		minimal_width(){
			return 0;
		}
		Gap(id){
			const obj = new this.$.$mol_view();
			(obj.title) = () => ("");
			return obj;
		}
	};
	($mol_mem(($.$mol_book2.prototype), "Placeholder"));
	($mol_mem_key(($.$mol_book2.prototype), "Gap"));


;
"use strict";
var $;
(function ($) {
    $.$mol_layer = $mol_style_prop('mol_layer', [
        'hover',
        'focus',
        'speck',
        'float',
        'popup',
    ]);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/layer/layer.css", ":root {\n\t--mol_layer_hover: 1;\n\t--mol_layer_focus: 2;\n\t--mol_layer_speck: 3;\n\t--mol_layer_float: 4;\n\t--mol_layer_popup: 5;\n}\n");
})($ || ($ = {}));

;
"use strict";

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_book2 extends $.$mol_book2 {
            pages_deep() {
                let result = [];
                for (const subpage of this.pages()) {
                    if (subpage instanceof $mol_book2)
                        result = [...result, ...subpage.pages_deep()];
                    else
                        result.push(subpage);
                }
                return result;
            }
            title() {
                return this.pages_deep().map(page => {
                    try {
                        return page?.title();
                    }
                    catch (error) {
                        $mol_fail_log(error);
                    }
                }).reverse().filter(Boolean).join(' | ');
            }
            menu_title() {
                return this.pages_deep()[0]?.title() || this.title();
            }
            sub() {
                const placeholders = this.placeholders();
                const next = this.pages_deep().filter(Boolean);
                const prev = $mol_mem_cached(() => this.sub())?.filter(page => !placeholders.includes(page)) ?? [];
                for (let i = 1; i; ++i) {
                    const p = prev[prev.length - i];
                    const n = next[next.length - i];
                    if (!n)
                        break;
                    if (p === n)
                        continue;
                    new this.$.$mol_after_tick(() => {
                        const b = this.dom_node();
                        const p = n.dom_node();
                        b.scroll({
                            left: p.offsetLeft + p.offsetWidth - b.offsetWidth,
                            behavior: 'smooth',
                        });
                    });
                    break;
                }
                return [...next, ...placeholders];
            }
            bring() {
                const pages = this.pages_deep();
                if (pages.length)
                    pages[pages.length - 1].bring();
                else
                    super.bring();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_book2.prototype, "pages_deep", null);
        __decorate([
            $mol_mem
        ], $mol_book2.prototype, "sub", null);
        $$.$mol_book2 = $mol_book2;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/book2/book2.view.css", "[mol_book2] {\n\tdisplay: flex;\n\tflex-flow: row nowrap;\n\talign-items: stretch;\n\tflex: 1 1 auto;\n\talign-self: stretch;\n\tmargin: 0;\n\t/* box-shadow: 0 0 0 1px var(--mol_theme_line); */\n\t/* transform: translateZ(0); */\n\ttransition: none;\n\tscroll-snap-type: x mandatory;\n\t/* padding: 0 1px;\n\tscroll-padding: 0 1px;\n\tgap: 1px; */\n}\n\n[mol_book2] > * {\n/* \tflex: none; */\n\tscroll-snap-stop: always;\n\tscroll-snap-align: end;\n\tposition: relative;\n\tmin-height: 100%;\n\tmax-height: 100%;\n\tmax-width: 100%;\n\tflex-shrink: 0;\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_field);\n}\n\n[mol_book2] > *:not(:first-of-type):before,\n[mol_book2] > *:not(:last-of-type)::after {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 1.5rem;\n\twidth: 3px;\n\theight: 1rem;\n\tbackground: linear-gradient(\n\t\tto bottom,\n\t\tvar(--mol_theme_special) 0%,\n\t\tvar(--mol_theme_special) 14%,\n\t\ttransparent 15%,\n\t\ttransparent 42%,\n\t\tvar(--mol_theme_special) 43%,\n\t\tvar(--mol_theme_special) 57%,\n\t\ttransparent 58%,\n\t\ttransparent 85%,\n\t\tvar(--mol_theme_special) 86%,\n\t\tvar(--mol_theme_special) 100%\n\t);\n\topacity: .5;\n\tz-index: var(--mol_layer_speck);\n}\n[mol_book2] > *:not(:first-of-type):before {\n\tleft: -3px;\n}\n[mol_book2] > *:not(:last-of-type)::after {\n\tright: -3px;\n}\n\n:where([mol_book2]) > * {\n\tbackground-color: var(--mol_theme_card);\n\t/* box-shadow: 0 0 0 1px var(--mol_theme_back); */\n}\n\n[mol_book2] > [mol_book2] {\n\tdisplay: contents;\n}\n\n[mol_book2] > *:first-child {\n\tscroll-snap-align: start;\n}\n\n[mol_book2] > [mol_view] {\n\ttransform: none; /* prevent content clipping */\n}\n\n[mol_book2_placeholder] {\n\tflex: 1 1 0;\n\tbackground: none;\n}\n\n[mol_book2_gap] {\n\tbackground: none;\n\tflex-grow: 1;\n\tscroll-snap-align: none;\n\tmargin-right: -1px;\n\tbox-shadow: none;\n}\n\n[mol_book2_gap]::before,\n[mol_book2_gap]::after {\n\tdisplay: none;\n}\n");
})($ || ($ = {}));

;
	($.$mol_pop) = class $mol_pop extends ($.$mol_view) {
		Anchor(){
			return null;
		}
		align(){
			return "bottom_center";
		}
		bubble_content(){
			return [];
		}
		height_max(){
			return 9999;
		}
		Bubble(){
			const obj = new this.$.$mol_pop_bubble();
			(obj.align) = () => ((this.align()));
			(obj.content) = () => ((this.bubble_content()));
			(obj.height_max) = () => ((this.height_max()));
			return obj;
		}
		showed(next){
			if(next !== undefined) return next;
			return false;
		}
		align_vert(){
			return "";
		}
		align_hor(){
			return "";
		}
		prefer(){
			return "vert";
		}
		sub(){
			return [(this.Anchor())];
		}
		sub_visible(){
			return [(this.Anchor()), (this.Bubble())];
		}
	};
	($mol_mem(($.$mol_pop.prototype), "Bubble"));
	($mol_mem(($.$mol_pop.prototype), "showed"));
	($.$mol_pop_bubble) = class $mol_pop_bubble extends ($.$mol_view) {
		content(){
			return [];
		}
		height_max(){
			return 9999;
		}
		align(){
			return "";
		}
		sub(){
			return (this.content());
		}
		style(){
			return {...(super.style()), "maxHeight": (this.height_max())};
		}
		attr(){
			return {
				...(super.attr()), 
				"mol_pop_align": (this.align()), 
				"tabindex": 0
			};
		}
	};


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_pop extends $.$mol_pop {
            showed(next = false) {
                this.focused();
                return next;
            }
            sub_visible() {
                return [
                    this.Anchor(),
                    ...this.showed() ? [this.Bubble()] : [],
                ];
            }
            height_max() {
                const viewport = this.$.$mol_window.size();
                const rect_bubble = this.view_rect();
                const align = this.align_vert();
                if (align === 'bottom')
                    return (viewport.height - rect_bubble.bottom) * .75;
                if (align === 'top')
                    return rect_bubble.top * .75;
                return 0;
            }
            align() {
                switch (this.prefer()) {
                    case 'hor': return `${this.align_hor()}_${this.align_vert()}`;
                    case 'vert': return `${this.align_vert()}_${this.align_hor()}`;
                    default: return this.prefer();
                }
            }
            align_vert() {
                const viewport = this.view_port();
                const rect_pop = this.view_rect();
                if (!rect_pop)
                    return 'suspense';
                return rect_pop.top > (viewport.top + viewport.height / 2) ? 'top' : 'bottom';
            }
            align_hor() {
                const viewport = this.view_port();
                const rect_pop = this.view_rect();
                if (!rect_pop)
                    return 'suspense';
                return rect_pop.left > (viewport.left + viewport.width / 2) ? 'left' : 'right';
            }
            View_port() {
                const view = new $mol_view;
                view.dom_node = () => {
                    let node = this.dom_node();
                    while (node = node.offsetParent) {
                        if (this.$.$mol_dom_context.getComputedStyle(node).overflow !== 'visible')
                            return node;
                    }
                    return this.$.$mol_dom_context.document.documentElement;
                };
                return view;
            }
            view_port() {
                return this.View_port().view_rect() ?? { ...this.$.$mol_window.size(), left: 0, top: 0 };
            }
        }
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "showed", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "sub_visible", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "height_max", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "align", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "align_vert", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "align_hor", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "View_port", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "view_port", null);
        $$.$mol_pop = $mol_pop;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/pop/pop.view.css", "[mol_pop] {\n\tposition: relative;\n\tdisplay: inline-flex;\n}\n\n[mol_pop_bubble] {\n\tbox-shadow: 0 0 1rem hsla(0,0%,0%,.5);\n\tborder-radius: var(--mol_gap_round);\n\tposition: absolute;\n\tz-index: var(--mol_layer_popup);\n\tbackground: var(--mol_theme_back);\n\tmax-width: none;\n\tmax-height: none;\n\t/* overflow: hidden;\n\toverflow-y: scroll;\n\toverflow-y: overlay; */\n\tword-break: normal;\n\twidth: max-content;\n\t/* height: max-content; */\n\tflex-direction: column;\n\tmax-width: calc( 100vw - var(--mol_gap_page) );\n\tmax-height: 80vw;\n\tcontain: paint;\n\ttransition-property: opacity;\n\t/* Safari ios layer fix, https://t.me/mam_mol/170017 */\n\ttransform: translateZ(0);\n}\n\n:where( [mol_pop_bubble] > * ) {\n\tbackground: var(--mol_theme_card);\n}\n\n[mol_pop_bubble][mol_scroll] {\n\tbackground: var(--mol_theme_back);\n}\n\n[mol_pop_bubble]:focus {\n\toutline: none;\n}\n\n[mol_pop_align=\"suspense_suspense\"] {\n\topacity: 0;\n}\n\n[mol_pop_align=\"left_top\"] {\n\ttransform: translate(-100%);\n\tleft: 0;\n\tbottom: 0;\n}\n\n[mol_pop_align=\"left_center\"] {\n\ttransform: translate(-100%, -50%);\n\tleft: 0;\n\ttop: 50%;\n}\n\n[mol_pop_align=\"left_bottom\"] {\n\ttransform: translate(-100%);\n\tleft: 0;\n\ttop: 0;\n}\n\n[mol_pop_align=\"right_top\"] {\n\ttransform: translate(100%);\n\tright: 0;\n\tbottom: 0;\n}\n\n[mol_pop_align=\"right_center\"] {\n\ttransform: translate(100%, -50%);\n\tright: 0;\n\ttop: 50%;\n}\n\n[mol_pop_align=\"right_bottom\"] {\n\ttransform: translate(100%);\n\tright: 0;\n\ttop: 0;\n}\n\n[mol_pop_align=\"center\"] {\n\tleft: 50%;\n\ttop: 50%;\n\ttransform: translate(-50%, -50%);\n}\n\n[mol_pop_align=\"top_left\"] {\n\tright: 0;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"top_center\"] {\n\ttransform: translate(-50%);\n\tleft: 50%;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"top_right\"] {\n\tleft: 0;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"bottom_left\"] {\n\tright: 0;\n\ttop: 100%;\n}\n\n[mol_pop_align=\"bottom_center\"] {\n\ttransform: translate(-50%);\n\tleft: 50%;\n\ttop: 100%;\n}\n\n[mol_pop_align=\"bottom_right\"] {\n\tleft: 0;\n\ttop: 100%;\n}\n");
})($ || ($ = {}));

;
	($.$mol_hotkey) = class $mol_hotkey extends ($.$mol_plugin) {
		keydown(next){
			if(next !== undefined) return next;
			return null;
		}
		event(){
			return {...(super.event()), "keydown": (next) => (this.keydown(next))};
		}
		key(){
			return {};
		}
		mod_ctrl(){
			return false;
		}
		mod_alt(){
			return false;
		}
		mod_shift(){
			return false;
		}
	};
	($mol_mem(($.$mol_hotkey.prototype), "keydown"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_hotkey extends $.$mol_hotkey {
            key() {
                return super.key();
            }
            keydown(event) {
                if (!event)
                    return;
                if (event.defaultPrevented)
                    return;
                let name = $mol_keyboard_code[event.keyCode];
                if (this.mod_ctrl() !== (event.ctrlKey || event.metaKey))
                    return;
                if (this.mod_alt() !== event.altKey)
                    return;
                if (this.mod_shift() !== event.shiftKey)
                    return;
                const handle = this.key()[name];
                if (handle)
                    handle(event);
            }
        }
        $$.$mol_hotkey = $mol_hotkey;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_nav) = class $mol_nav extends ($.$mol_plugin) {
		event_key(next){
			if(next !== undefined) return next;
			return null;
		}
		cycle(next){
			if(next !== undefined) return next;
			return false;
		}
		mod_ctrl(){
			return false;
		}
		mod_shift(){
			return false;
		}
		mod_alt(){
			return false;
		}
		keys_x(next){
			if(next !== undefined) return next;
			return [];
		}
		keys_y(next){
			if(next !== undefined) return next;
			return [];
		}
		current_x(next){
			if(next !== undefined) return next;
			return null;
		}
		current_y(next){
			if(next !== undefined) return next;
			return null;
		}
		event_up(next){
			if(next !== undefined) return next;
			return null;
		}
		event_down(next){
			if(next !== undefined) return next;
			return null;
		}
		event_left(next){
			if(next !== undefined) return next;
			return null;
		}
		event_right(next){
			if(next !== undefined) return next;
			return null;
		}
		event(){
			return {...(super.event()), "keydown": (next) => (this.event_key(next))};
		}
	};
	($mol_mem(($.$mol_nav.prototype), "event_key"));
	($mol_mem(($.$mol_nav.prototype), "cycle"));
	($mol_mem(($.$mol_nav.prototype), "keys_x"));
	($mol_mem(($.$mol_nav.prototype), "keys_y"));
	($mol_mem(($.$mol_nav.prototype), "current_x"));
	($mol_mem(($.$mol_nav.prototype), "current_y"));
	($mol_mem(($.$mol_nav.prototype), "event_up"));
	($mol_mem(($.$mol_nav.prototype), "event_down"));
	($mol_mem(($.$mol_nav.prototype), "event_left"));
	($mol_mem(($.$mol_nav.prototype), "event_right"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_nav extends $.$mol_nav {
            event_key(event) {
                if (!event)
                    return event;
                if (event.defaultPrevented)
                    return;
                if (this.mod_ctrl() && !event.ctrlKey)
                    return;
                if (this.mod_shift() && !event.shiftKey)
                    return;
                if (this.mod_alt() && !event.altKey)
                    return;
                switch (event.keyCode) {
                    case $mol_keyboard_code.up: return this.event_up(event);
                    case $mol_keyboard_code.down: return this.event_down(event);
                    case $mol_keyboard_code.left: return this.event_left(event);
                    case $mol_keyboard_code.right: return this.event_right(event);
                    case $mol_keyboard_code.pageUp: return this.event_up(event);
                    case $mol_keyboard_code.pageDown: return this.event_down(event);
                }
            }
            event_up(event) {
                if (!event)
                    return event;
                const keys = this.keys_y();
                if (keys.length < 1)
                    return;
                const index_y = this.index_y();
                const index_old = index_y === null ? 0 : index_y;
                const index_new = (index_old + keys.length - 1) % keys.length;
                event.preventDefault();
                if (index_old === 0 && !this.cycle())
                    return;
                this.current_y(this.keys_y()[index_new]);
            }
            event_down(event) {
                if (!event)
                    return event;
                const keys = this.keys_y();
                if (keys.length < 1)
                    return;
                const index_y = this.index_y();
                const index_old = index_y === null ? keys.length - 1 : index_y;
                const index_new = (index_old + 1) % keys.length;
                event.preventDefault();
                if (index_new === 0 && !this.cycle())
                    return;
                this.current_y(this.keys_y()[index_new]);
            }
            event_left(event) {
                if (!event)
                    return event;
                const keys = this.keys_x();
                if (keys.length < 1)
                    return;
                const index_x = this.index_x();
                const index_old = index_x === null ? 0 : index_x;
                const index_new = (index_old + keys.length - 1) % keys.length;
                event.preventDefault();
                if (index_old === 0 && !this.cycle())
                    return;
                this.current_x(this.keys_x()[index_new]);
            }
            event_right(event) {
                if (!event)
                    return event;
                const keys = this.keys_x();
                if (keys.length < 1)
                    return;
                const index_x = this.index_x();
                const index_old = index_x === null ? keys.length - 1 : index_x;
                const index_new = (index_old + 1) % keys.length;
                event.preventDefault();
                if (index_new === 0 && !this.cycle())
                    return;
                this.current_x(this.keys_x()[index_new]);
            }
            index_y() {
                let index = this.keys_y().indexOf(this.current_y());
                if (index < 0)
                    return null;
                return index;
            }
            index_x() {
                let index = this.keys_x().indexOf(this.current_x());
                if (index < 0)
                    return null;
                return index;
            }
        }
        $$.$mol_nav = $mol_nav;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_lock extends $mol_object {
        promise = null;
        async wait() {
            let next = () => { };
            let destructed = false;
            const task = $mol_wire_auto();
            if (!task)
                return next;
            const destructor = task.destructor.bind(task);
            task.destructor = () => {
                destructor();
                destructed = true;
                next();
            };
            let promise;
            do {
                promise = this.promise;
                await promise;
                if (destructed)
                    return next;
            } while (promise !== this.promise);
            this.promise = new Promise(done => { next = done; });
            return next;
        }
        grab() { return $mol_wire_sync(this).wait(); }
    }
    $.$mol_lock = $mol_lock;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_compare_array(a, b) {
        if (a === b)
            return true;
        if (Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
            return false;
        if (a.length !== b.length)
            return false;
        for (let i = 0; i < a.length; i++)
            if (a[i] !== b[i])
                return false;
        return true;
    }
    $.$mol_compare_array = $mol_compare_array;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_file_transaction extends $mol_object {
        path() { return ''; }
        modes() { return []; }
        write(options) {
            throw new Error('Not implemented');
        }
        read() {
            throw new Error('Not implemented');
        }
        truncate(size) {
            throw new Error('Not implemented');
        }
        flush() {
            throw new Error('Not implemented');
        }
        close() {
            throw new Error('Not implemented');
        }
        destructor() {
            this.close();
        }
    }
    $.$mol_file_transaction = $mol_file_transaction;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_file_base extends $mol_object {
        static absolute(path) {
            return this.make({
                path: $mol_const(path)
            });
        }
        static relative(path) {
            throw new Error('Not implemented yet');
        }
        static base = '';
        path() {
            return '.';
        }
        parent() {
            return this.resolve('..');
        }
        exists_cut() { return this.exists(); }
        root() {
            const path = this.path();
            const base = this.constructor.base;
            return base.startsWith(path) || this == this.parent();
        }
        stat(next, virt) {
            const path = this.path();
            const parent = this.parent();
            if (!this.root()) {
                parent.version();
            }
            parent.watcher();
            if (virt)
                return next ?? null;
            return next ?? this.info(path);
        }
        static changed = new Set;
        static frame = null;
        static changed_add(type, path) {
            if (/([\/\\]\.|___$)/.test(path))
                return;
            const file = this.relative(path.at(-1) === '/' ? path.slice(0, -1) : path);
            this.changed.add(file);
            if (!this.watching)
                return;
            this.frame?.destructor();
            this.frame = new this.$.$mol_after_timeout(this.watch_debounce(), () => {
                if (!this.watching)
                    return;
                this.watching = false;
                $mol_wire_async(this).flush();
            });
        }
        static watch_debounce() { return 500; }
        static flush() {
            for (const file of this.changed) {
                const parent = file.parent();
                try {
                    if ($mol_wire_probe(() => parent.sub()))
                        parent.sub(null);
                    file.reset();
                }
                catch (error) {
                    if ($mol_fail_catch(error))
                        $mol_fail_log(error);
                }
            }
            this.changed.clear();
            this.watching = true;
        }
        static watching = true;
        static lock = new $mol_lock;
        static watch_off(path) {
            this.watching = false;
            this.flush();
            this.watching = false;
            this.changed.add(this.absolute(path));
        }
        static unwatched(side_effect, affected_dir) {
            const unlock = this.lock.grab();
            this.watch_off(affected_dir);
            try {
                const result = side_effect();
                this.flush();
                unlock();
                return result;
            }
            catch (e) {
                if (!$mol_promise_like(e)) {
                    this.flush();
                    unlock();
                }
                $mol_fail_hidden(e);
            }
        }
        reset() {
            this.stat(null);
        }
        modified() { return this.stat()?.mtime ?? null; }
        version() {
            const next = this.stat()?.mtime.getTime().toString(36).toUpperCase() ?? '';
            return next;
        }
        info(path) { return null; }
        ensure() { }
        drop() { }
        copy(to) { }
        read() { return new Uint8Array; }
        write(buffer) { }
        kids() {
            return [];
        }
        readable(opts) {
            return new ReadableStream;
        }
        writable(opts) {
            return new WritableStream;
        }
        buffer(next) {
            let readed = new Uint8Array();
            if (next === undefined) {
                if (this.version())
                    readed = this.read();
            }
            const prev = $mol_mem_cached(() => this.buffer());
            const changed = prev === undefined || !$mol_compare_array(prev, next ?? readed);
            if (prev !== undefined && changed) {
                this.$.$mol_log3_rise({
                    place: `$mol_file_node.buffer()`,
                    message: 'Changed',
                    path: this.relate(),
                });
            }
            if (next === undefined)
                return changed ? readed : prev;
            if (!changed && this.exists())
                return prev;
            this.parent().exists(true);
            this.stat(this.stat_make(next.length), 'virt');
            this.write(next);
            return next;
        }
        stat_make(size) {
            const now = new Date();
            return {
                type: 'file',
                size,
                atime: now,
                mtime: now,
                ctime: now,
            };
        }
        clone(to) {
            if (!this.exists())
                return null;
            const target = this.constructor.absolute(to);
            try {
                this.version();
                target.parent().exists(true);
                this.copy(to);
                target.reset();
                return target;
            }
            catch (error) {
                if ($mol_fail_catch(error)) {
                    console.error(error);
                }
            }
            return null;
        }
        watcher() {
            return {
                destructor() { }
            };
        }
        exists(next) {
            const exists = Boolean(this.stat());
            if (next === undefined)
                return exists;
            if (next === exists)
                return exists;
            if (next) {
                this.parent().exists(true);
                this.ensure();
            }
            else {
                this.drop();
            }
            this.reset();
            return next;
        }
        type() {
            return this.stat()?.type ?? '';
        }
        name() {
            return this.path().replace(/^.*\//, '');
        }
        ext() {
            const match = /((?:\.\w+)+)$/.exec(this.path());
            return match ? match[1].substring(1) : '';
        }
        text(next, virt) {
            if (next !== undefined)
                this.exists();
            return this.text_int(next, virt);
        }
        text_int(next, virt) {
            if (virt) {
                this.stat(this.stat_make(0), 'virt');
                return next;
            }
            if (next === undefined) {
                return $mol_charset_decode(this.buffer());
            }
            else {
                const buffer = $mol_charset_encode(next);
                this.buffer(buffer);
                return next;
            }
        }
        sub(reset) {
            if (!this.exists())
                return [];
            if (this.type() !== 'dir')
                return [];
            this.version();
            return this.kids().filter(file => file.exists());
        }
        resolve(path) {
            throw new Error('implement');
        }
        relate(base = this.constructor.relative('.')) {
            const base_path = base.path();
            const path = this.path();
            return path.startsWith(base_path) ? path.slice(base_path.length) : path;
        }
        find(include, exclude) {
            const found = [];
            const sub = this.sub();
            for (const child of sub) {
                const child_path = child.path();
                if (exclude && child_path.match(exclude))
                    continue;
                if (!include || child_path.match(include))
                    found.push(child);
                if (child.type() === 'dir') {
                    const sub_child = child.find(include, exclude);
                    for (const child of sub_child)
                        found.push(child);
                }
            }
            return found;
        }
        size() {
            switch (this.type()) {
                case 'file': return this.stat()?.size ?? 0;
                default: return 0;
            }
        }
        toJSON() {
            return this.path();
        }
        open(...modes) {
            return this.$.$mol_file_transaction.make({
                path: () => this.path(),
                modes: () => modes
            });
        }
    }
    __decorate([
        $mol_action
    ], $mol_file_base.prototype, "exists_cut", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "stat", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "modified", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "version", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_base.prototype, "readable", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_base.prototype, "writable", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "buffer", null);
    __decorate([
        $mol_action
    ], $mol_file_base.prototype, "stat_make", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_base.prototype, "clone", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "exists", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "type", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "text_int", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "sub", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "size", null);
    __decorate([
        $mol_action
    ], $mol_file_base.prototype, "open", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_base, "absolute", null);
    __decorate([
        $mol_action
    ], $mol_file_base, "flush", null);
    __decorate([
        $mol_action
    ], $mol_file_base, "watch_off", null);
    $.$mol_file_base = $mol_file_base;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_file extends $mol_file_base {
    }
    $.$mol_file = $mol_file;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_fetch_response extends $mol_object {
        native;
        request;
        status() {
            const types = ['unknown', 'inform', 'success', 'redirect', 'wrong', 'failed'];
            return types[Math.floor(this.native.status / 100)];
        }
        code() {
            return this.native.status;
        }
        ok() {
            return this.native.ok;
        }
        message() {
            return $mol_rest_code[this.code()] || `HTTP Error ${this.code()}`;
        }
        headers() {
            return this.native.headers;
        }
        mime() {
            return this.headers().get('content-type');
        }
        stream() {
            return this.native.body;
        }
        text() {
            const buffer = this.buffer();
            const mime = this.mime() || '';
            const [, charset] = /charset=(.*)/.exec(mime) || [, 'utf-8'];
            const decoder = new TextDecoder(charset);
            return decoder.decode(buffer);
        }
        json() {
            return $mol_wire_sync(this.native).json();
        }
        blob() {
            return $mol_wire_sync(this.native).blob();
        }
        buffer() {
            return $mol_wire_sync(this.native).arrayBuffer();
        }
        xml() {
            return $mol_dom_parse(this.text(), 'application/xml');
        }
        xhtml() {
            return $mol_dom_parse(this.text(), 'application/xhtml+xml');
        }
        html() {
            return $mol_dom_parse(this.text(), 'text/html');
        }
    }
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "stream", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "text", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "xml", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "xhtml", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "html", null);
    $.$mol_fetch_response = $mol_fetch_response;
    class $mol_fetch_request extends $mol_object {
        native;
        response_async() {
            const controller = new AbortController();
            let done = false;
            const request = new Request(this.native, { signal: controller.signal });
            const promise = fetch(request).finally(() => {
                done = true;
            });
            return Object.assign(promise, {
                destructor: () => {
                    if (!done && !controller.signal.aborted)
                        controller.abort();
                },
            });
        }
        response() {
            return this.$.$mol_fetch_response.make({
                native: $mol_wire_sync(this).response_async(),
                request: this
            });
        }
        success() {
            const response = this.response();
            if (response.status() === 'success')
                return response;
            throw new Error(response.message(), { cause: response });
        }
    }
    __decorate([
        $mol_action
    ], $mol_fetch_request.prototype, "response", null);
    $.$mol_fetch_request = $mol_fetch_request;
    class $mol_fetch extends $mol_object {
        static request(input, init) {
            return this.$.$mol_fetch_request.make({
                native: new Request(input, init)
            });
        }
        static response(input, init) {
            return this.request(input, init).response();
        }
        static success(input, init) {
            return this.request(input, init).success();
        }
        static stream(input, init) {
            return this.success(input, init).stream();
        }
        static text(input, init) {
            return this.success(input, init).text();
        }
        static json(input, init) {
            return this.success(input, init).json();
        }
        static blob(input, init) {
            return this.success(input, init).blob();
        }
        static buffer(input, init) {
            return this.success(input, init).buffer();
        }
        static xml(input, init) {
            return this.success(input, init).xml();
        }
        static xhtml(input, init) {
            return this.success(input, init).xhtml();
        }
        static html(input, init) {
            return this.success(input, init).html();
        }
    }
    __decorate([
        $mol_action
    ], $mol_fetch, "request", null);
    $.$mol_fetch = $mol_fetch;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_file_webdav extends $mol_file_base {
        static relative(path) {
            return this.absolute(new URL(path, this.base).toString());
        }
        resolve(path) {
            let res = this.path() + '/' + path;
            while (true) {
                let prev = res;
                res = res.replace(/\/[^\/.]+\/\.\.\//, '/');
                if (prev === res)
                    break;
            }
            res = res.replace(/\/\.\.\/?$/, '');
            if (res === this.path())
                return this;
            return this.constructor.absolute(res);
        }
        static headers() { return {}; }
        headers() { return this.constructor.headers(); }
        fetch(init) {
            return this.$.$mol_fetch.success(this.path(), {
                ...init,
                headers: {
                    ...this.headers(),
                    ...init.headers,
                }
            });
        }
        read() {
            try {
                const response = this.fetch({});
                return new Uint8Array(response.buffer());
            }
            catch (error) {
                if (error instanceof Error
                    && error.cause instanceof $mol_fetch_response
                    && error.cause.native.status === 404)
                    return new Uint8Array;
                $mol_fail_hidden(error);
            }
        }
        write(body) { this.fetch({ method: 'PUT', body }); }
        ensure() { this.fetch({ method: 'MKCOL' }); }
        drop() { this.fetch({ method: 'DELETE' }); }
        copy(to) {
            this.fetch({
                method: 'COPY',
                headers: { Destination: to }
            });
        }
        kids() {
            const response = this.fetch({ method: 'PROPFIND' });
            const xml = response.xml();
            const result = [];
            for (const multistatus of xml.childNodes) {
                if (multistatus.nodeName !== 'D:multistatus')
                    continue;
                for (const response of multistatus.childNodes) {
                    let path;
                    if (response.nodeName === 'D:href')
                        path = response.textContent ?? '';
                    if (!path)
                        continue;
                    if (response.nodeName !== 'D:propstat')
                        continue;
                    const stat = webdav_stat(response);
                    const file = this.resolve(path);
                    file.stat(stat, 'virt');
                    result.push(file);
                }
            }
            return result;
        }
        readable(opts) {
            return this.fetch({
                headers: !opts.start ? {} : {
                    'Range': `bytes=${opts.start}-${opts.end ?? ''}`
                }
            }).stream() || $mol_fail(new Error('Not found'));
        }
        info() {
            return this.kids().at(0)?.stat() ?? null;
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_file_webdav.prototype, "readable", null);
    $.$mol_file_webdav = $mol_file_webdav;
    function webdav_stat(prop_stat) {
        const now = new Date();
        const stat = {
            type: 'file',
            size: 0,
            atime: now,
            mtime: now,
            ctime: now,
        };
        for (const prop of prop_stat.childNodes) {
            if (prop.nodeName !== 'D:prop')
                continue;
            for (const value of prop.childNodes) {
                const name = value.nodeName;
                const text = value.textContent ?? '';
                if (name === 'D:getcontenttype') {
                    stat.type = text.endsWith('directory') ? 'dir' : 'file';
                }
                if (name === 'D:getcontentlength') {
                    stat.size = Number(value.textContent || '0');
                    if (Number.isNaN(stat.size))
                        stat.size = 0;
                }
                if (name === 'D:getlastmodified')
                    stat.mtime = stat.atime = new Date(text);
                if (name === 'D:creationdate')
                    stat.ctime = new Date(text);
            }
        }
        return stat;
    }
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_file_web extends $mol_file_webdav {
        static base = $mol_dom_context.document?.currentScript
            ? new URL('.', $mol_dom_context.document.currentScript['src']).toString()
            : '';
        version() { return '1'; }
        info() {
            try {
                const response = this.fetch({ method: 'HEAD' });
                const headers = response.headers();
                let size = Number(headers.get('Content-Length'));
                if (Number.isNaN(size))
                    size = 0;
                const last = headers.get('Last-Modified');
                const mtime = last ? new Date(last) : new Date();
                return {
                    type: 'file',
                    size,
                    mtime,
                    atime: mtime,
                    ctime: mtime,
                };
            }
            catch (error) {
                if (error instanceof Error
                    && error.cause instanceof $mol_fetch_response
                    && error.cause.native.status === 404)
                    return null;
                $mol_fail_hidden(error);
            }
        }
    }
    $.$mol_file_web = $mol_file_web;
    $.$mol_file = $mol_file_web;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_locale extends $mol_object {
        static lang_default() {
            return 'en';
        }
        static lang(next) {
            return this.$.$mol_state_local.value('locale', next) || $mol_dom_context.navigator.language.replace(/-.*/, '') || this.lang_default();
        }
        static source(lang) {
            return JSON.parse(this.$.$mol_file.relative(`web.locale=${lang}.json`).text().toString());
        }
        static texts(lang, next) {
            if (next)
                return next;
            try {
                return this.source(lang).valueOf();
            }
            catch (error) {
                if ($mol_fail_catch(error)) {
                    const def = this.lang_default();
                    if (lang === def)
                        throw error;
                }
            }
            return {};
        }
        static text(key) {
            const lang = this.lang();
            const target = this.texts(lang)[key];
            if (target)
                return target;
            this.warn(key);
            const en = this.texts('en')[key];
            if (!en)
                return key;
            return en;
        }
        static warn(key) {
            console.warn(`Not translated to "${this.lang()}": ${key}`);
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_locale, "lang_default", null);
    __decorate([
        $mol_mem
    ], $mol_locale, "lang", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "source", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "texts", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "text", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "warn", null);
    $.$mol_locale = $mol_locale;
})($ || ($ = {}));

;
	($.$mol_string) = class $mol_string extends ($.$mol_view) {
		selection_watcher(){
			return null;
		}
		error_report(){
			return null;
		}
		disabled(){
			return false;
		}
		value(next){
			if(next !== undefined) return next;
			return "";
		}
		value_changed(next){
			return (this.value(next));
		}
		hint(){
			return "";
		}
		hint_visible(){
			return (this.hint());
		}
		spellcheck(){
			return true;
		}
		autocomplete_native(){
			return "";
		}
		selection_end(){
			return 0;
		}
		selection_start(){
			return 0;
		}
		keyboard(){
			return "text";
		}
		enter(){
			return "go";
		}
		length_max(){
			return +Infinity;
		}
		type(next){
			if(next !== undefined) return next;
			return "text";
		}
		event_change(next){
			if(next !== undefined) return next;
			return null;
		}
		submit_with_ctrl(){
			return false;
		}
		submit(next){
			if(next !== undefined) return next;
			return null;
		}
		Submit(){
			const obj = new this.$.$mol_hotkey();
			(obj.mod_ctrl) = () => ((this.submit_with_ctrl()));
			(obj.key) = () => ({"enter": (next) => (this.submit(next))});
			return obj;
		}
		dom_name(){
			return "input";
		}
		enabled(){
			return true;
		}
		minimal_height(){
			return 40;
		}
		autocomplete(){
			return false;
		}
		selection(next){
			if(next !== undefined) return next;
			return [0, 0];
		}
		auto(){
			return [(this.selection_watcher()), (this.error_report())];
		}
		field(){
			return {
				...(super.field()), 
				"disabled": (this.disabled()), 
				"value": (this.value_changed()), 
				"placeholder": (this.hint_visible()), 
				"spellcheck": (this.spellcheck()), 
				"autocomplete": (this.autocomplete_native()), 
				"selectionEnd": (this.selection_end()), 
				"selectionStart": (this.selection_start()), 
				"inputMode": (this.keyboard()), 
				"enterkeyhint": (this.enter())
			};
		}
		attr(){
			return {
				...(super.attr()), 
				"maxlength": (this.length_max()), 
				"type": (this.type())
			};
		}
		event(){
			return {...(super.event()), "input": (next) => (this.event_change(next))};
		}
		plugins(){
			return [(this.Submit())];
		}
	};
	($mol_mem(($.$mol_string.prototype), "value"));
	($mol_mem(($.$mol_string.prototype), "type"));
	($mol_mem(($.$mol_string.prototype), "event_change"));
	($mol_mem(($.$mol_string.prototype), "submit"));
	($mol_mem(($.$mol_string.prototype), "Submit"));
	($mol_mem(($.$mol_string.prototype), "selection"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_string extends $.$mol_string {
            event_change(next) {
                if (!next)
                    return;
                const el = this.dom_node();
                const from = el.selectionStart;
                const to = el.selectionEnd;
                try {
                    el.value = this.value_changed(el.value);
                }
                catch (error) {
                    const el = this.dom_node();
                    if (error instanceof Error) {
                        el.setCustomValidity(error.message);
                        el.reportValidity();
                    }
                    $mol_fail_hidden(error);
                }
                if (to === null)
                    return;
                el.selectionEnd = to;
                el.selectionStart = from;
                this.selection_change(next);
            }
            error_report() {
                try {
                    if (this.focused())
                        this.value();
                }
                catch (error) {
                    const el = this.dom_node();
                    if (error instanceof Error) {
                        el.setCustomValidity(error.message);
                        el.reportValidity();
                    }
                }
            }
            hint_visible() {
                return (this.enabled() ? this.hint() : '') || ' ';
            }
            disabled() {
                return !this.enabled();
            }
            autocomplete_native() {
                return this.autocomplete() ? 'on' : 'off';
            }
            selection_watcher() {
                return new $mol_dom_listener(this.$.$mol_dom_context.document, 'selectionchange', $mol_wire_async(event => this.selection_change(event)));
            }
            selection_change(event) {
                const el = this.dom_node();
                if (el !== this.$.$mol_dom_context.document.activeElement)
                    return;
                const [from, to] = this.selection([
                    el.selectionStart,
                    el.selectionEnd,
                ]);
                el.selectionEnd = to;
                el.selectionStart = from;
                if (to !== from && el.selectionEnd === el.selectionStart) {
                    el.selectionEnd = to;
                }
            }
            selection_start() {
                const el = this.dom_node();
                if (!this.focused())
                    return undefined;
                if (el.selectionStart == null)
                    return undefined;
                return this.selection()[0];
            }
            selection_end() {
                const el = this.dom_node();
                if (!this.focused())
                    return undefined;
                if (el.selectionEnd == null)
                    return undefined;
                return this.selection()[1];
            }
        }
        __decorate([
            $mol_action
        ], $mol_string.prototype, "event_change", null);
        __decorate([
            $mol_mem
        ], $mol_string.prototype, "error_report", null);
        __decorate([
            $mol_mem
        ], $mol_string.prototype, "selection_watcher", null);
        $$.$mol_string = $mol_string;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/string/string.view.css", "[mol_string] {\n\tbox-sizing: border-box;\n\toutline-offset: 0;\n\tborder: none;\n\tborder-radius: var(--mol_gap_round);\n\twhite-space: pre-line;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\tpadding: var(--mol_gap_text);\n\ttext-align: left;\n\tposition: relative;\n\tfont: inherit;\n\tflex: 1 1 auto;\n\tbackground: transparent;\n\tmin-width: 0;\n\tcolor: inherit;\n\tbackground: var(--mol_theme_field);\n}\n\n[mol_string]:disabled:not(:placeholder-shown) {\n\tbackground-color: transparent;\n\tcolor: var(--mol_theme_text);\n}\n\n[mol_string]:where(:not(:disabled)) {\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_line);\n}\n\n[mol_string]:where(:not(:disabled)):hover {\n\tbox-shadow: inset 0 0 0 2px var(--mol_theme_line);\n\tz-index: var(--mol_layer_hover);\n}\n\n[mol_string]:focus {\n\toutline: none;\n\tz-index: var(--mol_layer_focus);\n\tcolor: var(--mol_theme_text);\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_focus);\n}\n\n[mol_string]::placeholder {\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_string]::-ms-clear {\n\tdisplay: none;\n}\n");
})($ || ($ = {}));

;
	($.$mol_svg) = class $mol_svg extends ($.$mol_view) {
		dom_name(){
			return "svg";
		}
		dom_name_space(){
			return "http://www.w3.org/2000/svg";
		}
		font_size(){
			return 16;
		}
		font_family(){
			return "";
		}
		style_size(){
			return {};
		}
	};


;
"use strict";
var $;
(function ($) {
    class $mol_state_time extends $mol_object {
        static task(precision, reset) {
            if (precision) {
                return new $mol_after_timeout(precision, () => this.task(precision, null));
            }
            else {
                return new $mol_after_frame(() => this.task(precision, null));
            }
        }
        static now(precision) {
            this.task(precision);
            return Date.now();
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_state_time, "task", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_time, "now", null);
    $.$mol_state_time = $mol_state_time;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_svg extends $.$mol_svg {
            computed_style() {
                const win = this.$.$mol_dom_context;
                const style = win.getComputedStyle(this.dom_node());
                if (!style['font-size'])
                    $mol_state_time.now(0);
                return style;
            }
            font_size() {
                return parseInt(this.computed_style()['font-size']) || 16;
            }
            font_family() {
                return this.computed_style()['font-family'];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "computed_style", null);
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "font_size", null);
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "font_family", null);
        $$.$mol_svg = $mol_svg;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_svg_root) = class $mol_svg_root extends ($.$mol_svg) {
		view_box(){
			return "0 0 100 100";
		}
		aspect(){
			return "xMidYMid";
		}
		dom_name(){
			return "svg";
		}
		attr(){
			return {
				...(super.attr()), 
				"viewBox": (this.view_box()), 
				"preserveAspectRatio": (this.aspect())
			};
		}
	};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/svg/root/root.view.css", "[mol_svg_root] {\n\toverflow: hidden;\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_svg_path) = class $mol_svg_path extends ($.$mol_svg) {
		geometry(){
			return "";
		}
		dom_name(){
			return "path";
		}
		attr(){
			return {...(super.attr()), "d": (this.geometry())};
		}
	};


;
"use strict";

;
	($.$mol_icon) = class $mol_icon extends ($.$mol_svg_root) {
		path(){
			return "";
		}
		Path(){
			const obj = new this.$.$mol_svg_path();
			(obj.geometry) = () => ((this.path()));
			return obj;
		}
		view_box(){
			return "0 0 24 24";
		}
		minimal_width(){
			return 16;
		}
		minimal_height(){
			return 16;
		}
		sub(){
			return [(this.Path())];
		}
	};
	($mol_mem(($.$mol_icon.prototype), "Path"));


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/icon/icon.view.css", "[mol_icon] {\n\tfill: currentColor;\n\tstroke: none;\n\twidth: 1em;\n\theight: 1.5em;\n\tflex: 0 0 auto;\n\tvertical-align: top;\n\tdisplay: inline-block;\n\tfilter: drop-shadow(0px 1px 1px var(--mol_theme_back));\n\ttransform-origin: center;\n}\n\n[mol_icon_path] {\n\ttransform-origin: center;\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_icon_close) = class $mol_icon_close extends ($.$mol_icon) {
		path(){
			return "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";
		}
	};


;
"use strict";

;
	($.$mol_speck) = class $mol_speck extends ($.$mol_view) {
		value(){
			return null;
		}
		theme(){
			return "$mol_theme_accent";
		}
		sub(){
			return [(this.value())];
		}
	};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/speck/speck.view.css", "[mol_speck] {\n\tfont-size: .75rem;\n\tborder-radius: 1rem;\n\tmargin: -0.5rem -0.2rem;\n\talign-self: flex-start;\n\tmin-height: 1em;\n\tmin-width: .75rem;\n\tvertical-align: sub;\n\tpadding: 0 .2rem;\n\tposition: absolute;\n\tz-index: var(--mol_layer_speck);\n\ttext-align: center;\n\tline-height: .9;\n\tdisplay: inline-block;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\tuser-select: none;\n\tbox-shadow: 0 0 3px rgba(0,0,0,.5);\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_button) = class $mol_button extends ($.$mol_view) {
		event_activate(next){
			if(next !== undefined) return next;
			return null;
		}
		activate(next){
			return (this.event_activate(next));
		}
		clicks(next){
			if(next !== undefined) return next;
			return null;
		}
		event_key_press(next){
			if(next !== undefined) return next;
			return null;
		}
		key_press(next){
			return (this.event_key_press(next));
		}
		disabled(){
			return false;
		}
		tab_index(){
			return 0;
		}
		hint(){
			return "";
		}
		hint_safe(){
			return (this.hint());
		}
		error(){
			return "";
		}
		enabled(){
			return true;
		}
		click(next){
			if(next !== undefined) return next;
			return null;
		}
		event_click(next){
			if(next !== undefined) return next;
			return null;
		}
		status(next){
			if(next !== undefined) return next;
			return [];
		}
		event(){
			return {
				...(super.event()), 
				"click": (next) => (this.activate(next)), 
				"dblclick": (next) => (this.clicks(next)), 
				"keydown": (next) => (this.key_press(next))
			};
		}
		attr(){
			return {
				...(super.attr()), 
				"disabled": (this.disabled()), 
				"role": "button", 
				"tabindex": (this.tab_index()), 
				"title": (this.hint_safe())
			};
		}
		sub(){
			return [(this.title())];
		}
		Speck(){
			const obj = new this.$.$mol_speck();
			(obj.value) = () => ((this.error()));
			return obj;
		}
	};
	($mol_mem(($.$mol_button.prototype), "event_activate"));
	($mol_mem(($.$mol_button.prototype), "clicks"));
	($mol_mem(($.$mol_button.prototype), "event_key_press"));
	($mol_mem(($.$mol_button.prototype), "click"));
	($mol_mem(($.$mol_button.prototype), "event_click"));
	($mol_mem(($.$mol_button.prototype), "status"));
	($mol_mem(($.$mol_button.prototype), "Speck"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button extends $.$mol_button {
            disabled() {
                return !this.enabled();
            }
            event_activate(next) {
                if (!next)
                    return;
                if (!this.enabled())
                    return;
                try {
                    this.event_click(next);
                    this.click(next);
                    this.status([null]);
                }
                catch (error) {
                    Promise.resolve().then(() => this.status([error]));
                    $mol_fail_hidden(error);
                }
            }
            event_key_press(event) {
                if (event.keyCode === $mol_keyboard_code.enter) {
                    return this.activate(event);
                }
            }
            tab_index() {
                return this.enabled() ? super.tab_index() : -1;
            }
            error() {
                const error = this.status()?.[0];
                if (!error)
                    return '';
                if ($mol_promise_like(error)) {
                    return $mol_fail_hidden(error);
                }
                return this.$.$mol_error_message(error);
            }
            hint_safe() {
                try {
                    return this.hint();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return '';
                }
            }
            sub_visible() {
                return [
                    ...this.error() ? [this.Speck()] : [],
                    ...this.sub(),
                ];
            }
        }
        $$.$mol_button = $mol_button;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/button.view.css", "[mol_button] {\n\tborder: none;\n\tfont: inherit;\n\tdisplay: inline-flex;\n\tflex-shrink: 0;\n\ttext-decoration: inherit;\n\tcursor: inherit;\n\tposition: relative;\n\tbox-sizing: border-box;\n\tword-break: normal;\n\tcursor: default;\n\tuser-select: none;\n\t-webkit-user-select: none;\n\tborder-radius: var(--mol_gap_round);\n\tbackground: transparent;\n\tcolor: inherit;\n}\n\n[mol_button]:where(:not(:disabled)):hover {\n\tz-index: var(--mol_layer_hover);\n}\n\n[mol_button]:focus {\n\toutline: none;\n\tz-index: var(--mol_layer_focus);\n}\n");
})($ || ($ = {}));

;
	($.$mol_button_typed) = class $mol_button_typed extends ($.$mol_button) {
		minimal_height(){
			return 40;
		}
		minimal_width(){
			return 40;
		}
	};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/typed/typed.view.css", "[mol_button_typed] {\n\talign-content: center;\n\talign-items: center;\n\tpadding: var(--mol_gap_text);\n\tborder-radius: var(--mol_gap_round);\n\tgap: var(--mol_gap_space);\n\tuser-select: none;\n\tcursor: pointer;\n\tmin-width: 2.5rem;\n\tmin-height: 2.5rem;\n}\n\n[mol_button_typed][disabled] {\n\tpointer-events: none;\n}\n\n[mol_button_typed]:hover ,\n[mol_button_typed]:focus-visible {\n\tbox-shadow: inset 0 0 0 100vmax var(--mol_theme_hover);\n}\n\n[mol_button_typed]:active {\n\tcolor: var(--mol_theme_focus);\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_button_minor) = class $mol_button_minor extends ($.$mol_button_typed) {};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/minor/minor.view.css", "[mol_button_minor] {\n\tcolor: var(--mol_theme_control);\n}\n\n[mol_button_minor][disabled] {\n\tcolor: var(--mol_theme_shade);\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_list) = class $mol_list extends ($.$mol_view) {
		gap_before(){
			return 0;
		}
		Gap_before(){
			const obj = new this.$.$mol_view();
			(obj.style) = () => ({"paddingTop": (this.gap_before())});
			return obj;
		}
		Empty(){
			const obj = new this.$.$mol_view();
			return obj;
		}
		gap_after(){
			return 0;
		}
		Gap_after(){
			const obj = new this.$.$mol_view();
			(obj.style) = () => ({"paddingTop": (this.gap_after())});
			return obj;
		}
		rows(){
			return [
				(this.Gap_before()), 
				(this.Empty()), 
				(this.Gap_after())
			];
		}
		render_visible_only(){
			return true;
		}
		render_over(){
			return 0.1;
		}
		sub(){
			return (this.rows());
		}
		item_height_min(id){
			return 1;
		}
		item_width_min(id){
			return 1;
		}
		view_window_shift(next){
			if(next !== undefined) return next;
			return 0;
		}
		view_window(){
			return [0, 0];
		}
	};
	($mol_mem(($.$mol_list.prototype), "Gap_before"));
	($mol_mem(($.$mol_list.prototype), "Empty"));
	($mol_mem(($.$mol_list.prototype), "Gap_after"));
	($mol_mem(($.$mol_list.prototype), "view_window_shift"));


;
"use strict";
var $;
(function ($) {
    let cache = null;
    function $mol_support_css_overflow_anchor() {
        return cache ?? (cache = this.$mol_dom_context.CSS?.supports('overflow-anchor:auto') ?? false);
    }
    $.$mol_support_css_overflow_anchor = $mol_support_css_overflow_anchor;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_list extends $.$mol_list {
            sub() {
                const rows = this.rows();
                const next = (rows.length === 0) ? [this.Empty()] : rows;
                const prev = $mol_mem_cached(() => this.sub());
                const [start, end] = $mol_mem_cached(() => this.view_window()) ?? [0, 0];
                if (prev && $mol_mem_cached(() => prev[start] !== next[start])) {
                    const index = $mol_mem_cached(() => next.indexOf(prev[start])) ?? -1;
                    if (index >= 0)
                        this.view_window_shift(index - start);
                }
                return next;
            }
            render_visible_only() {
                return this.$.$mol_support_css_overflow_anchor();
            }
            view_window(next) {
                const kids = this.sub();
                if (kids.length < 3)
                    return [0, kids.length];
                if (this.$.$mol_print.active())
                    return [0, kids.length];
                const rect = this.view_rect();
                if (next)
                    return next;
                let [min, max] = $mol_mem_cached(() => this.view_window()) ?? [0, 0];
                const shift = this.view_window_shift();
                this.view_window_shift(0);
                min += shift;
                max += shift;
                let max2 = max = Math.min(max, kids.length);
                let min2 = min = Math.max(0, Math.min(min, max - 1));
                const anchoring = this.render_visible_only();
                const window_height = this.$.$mol_window.size().height + 40;
                const over = Math.ceil(window_height * this.render_over());
                const limit_top = -over;
                const limit_bottom = window_height + over;
                const gap_before = $mol_mem_cached(() => this.gap_before()) ?? 0;
                const gap_after = $mol_mem_cached(() => this.gap_after()) ?? 0;
                let top = Math.ceil(rect?.top ?? 0) + gap_before;
                let bottom = Math.ceil(rect?.bottom ?? 0) - gap_after;
                if (top <= limit_top && bottom >= limit_bottom) {
                    return [min2, max2];
                }
                if (anchoring && ((bottom < limit_top) || (top > limit_bottom))) {
                    min = 0;
                    top = Math.ceil(rect?.top ?? 0);
                    while (min < (kids.length - 1)) {
                        const height = this.item_height_min(min);
                        if (top + height >= limit_top)
                            break;
                        top += height;
                        ++min;
                    }
                    min2 = min;
                    max2 = max = min;
                    bottom = top;
                }
                let top2 = top;
                let bottom2 = bottom;
                if (anchoring && (top < limit_top) && (bottom < limit_bottom) && (max < kids.length)) {
                    min2 = max;
                    top2 = bottom;
                }
                if ((bottom > limit_bottom) && (top > limit_top) && (min > 0)) {
                    max2 = min;
                    bottom2 = top;
                }
                while (anchoring && ((top2 > limit_top) && (min2 > 0))) {
                    --min2;
                    top2 -= this.item_height_min(min2);
                }
                while (bottom2 < limit_bottom && max2 < kids.length) {
                    bottom2 += this.item_height_min(max2);
                    ++max2;
                }
                return [min2, max2];
            }
            item_height_min(index) {
                try {
                    return this.sub()[index]?.minimal_height() ?? 0;
                }
                catch (error) {
                    $mol_fail_log(error);
                    return 0;
                }
            }
            row_width_min(index) {
                try {
                    return this.sub()[index]?.minimal_width() ?? 0;
                }
                catch (error) {
                    $mol_fail_log(error);
                    return 0;
                }
            }
            gap_before() {
                let gap = 0;
                const skipped = this.view_window()[0];
                for (let i = 0; i < skipped; ++i)
                    gap += this.item_height_min(i);
                return gap;
            }
            gap_after() {
                let gap = 0;
                const from = this.view_window()[1];
                const to = this.sub().length;
                for (let i = from; i < to; ++i)
                    gap += this.item_height_min(i);
                return gap;
            }
            sub_visible() {
                return [
                    ...this.gap_before() ? [this.Gap_before()] : [],
                    ...this.sub().slice(...this.view_window()),
                    ...this.gap_after() ? [this.Gap_after()] : [],
                ];
            }
            minimal_height() {
                let height = 0;
                const len = this.sub().length;
                for (let i = 0; i < len; ++i)
                    height += this.item_height_min(i);
                return height;
            }
            minimal_width() {
                let width = 0;
                const len = this.sub().length;
                for (let i = 0; i < len; ++i)
                    width = Math.max(width, this.item_width_min(i));
                return width;
            }
            force_render(path) {
                const kids = this.rows();
                const index = kids.findIndex(item => path.has(item));
                if (index >= 0) {
                    const win = this.view_window();
                    if (index < win[0] || index >= win[1]) {
                        this.view_window([this.render_visible_only() ? index : 0, index + 1]);
                    }
                    kids[index].force_render(path);
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "sub", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "view_window", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "gap_before", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "gap_after", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "sub_visible", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "minimal_height", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "minimal_width", null);
        $$.$mol_list = $mol_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/list/list.view.css", "[mol_list] {\n\twill-change: contents;\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-shrink: 0;\n\tmax-width: 100%;\n\t/* display: flex;\n\talign-items: stretch;\n\talign-content: stretch; */\n\ttransition: none;\n\tmin-height: 1.5rem;\n\t/* will-change: contents; */\n}\n\n[mol_list_gap_before] ,\n[mol_list_gap_after] {\n\tdisplay: block !important;\n\tflex: none;\n\ttransition: none;\n\toverflow-anchor: none;\n}\n");
})($ || ($ = {}));

;
	($.$mol_paragraph) = class $mol_paragraph extends ($.$mol_view) {
		line_height(){
			return 24;
		}
		letter_width(){
			return 7;
		}
		width_limit(){
			return +Infinity;
		}
		row_width(){
			return 0;
		}
		sub(){
			return [(this.title())];
		}
	};


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_paragraph extends $.$mol_paragraph {
            maximal_width() {
                let width = 0;
                const letter = this.letter_width();
                for (const kid of this.sub()) {
                    if (!kid)
                        continue;
                    if (kid instanceof $mol_view) {
                        width += kid.maximal_width();
                    }
                    else if (typeof kid !== 'object') {
                        width += String(kid).length * letter;
                    }
                }
                return width;
            }
            width_limit() {
                return this.$.$mol_window.size().width;
            }
            minimal_width() {
                return this.letter_width();
            }
            row_width() {
                return Math.max(Math.min(this.width_limit(), this.maximal_width()), this.letter_width());
            }
            minimal_height() {
                return Math.max(1, Math.ceil(this.maximal_width() / this.row_width())) * this.line_height();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "maximal_width", null);
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "row_width", null);
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "minimal_height", null);
        $$.$mol_paragraph = $mol_paragraph;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/paragraph/paragraph.view.css", ":where([mol_paragraph]) {\n\tmargin: 0;\n\tmax-width: 100%;\n}\n");
})($ || ($ = {}));

;
	($.$mol_dimmer) = class $mol_dimmer extends ($.$mol_paragraph) {
		parts(){
			return [];
		}
		string(id){
			return "";
		}
		haystack(){
			return "";
		}
		needle(){
			return "";
		}
		sub(){
			return (this.parts());
		}
		Low(id){
			const obj = new this.$.$mol_paragraph();
			(obj.sub) = () => ([(this.string(id))]);
			return obj;
		}
		High(id){
			const obj = new this.$.$mol_paragraph();
			(obj.sub) = () => ([(this.string(id))]);
			return obj;
		}
	};
	($mol_mem_key(($.$mol_dimmer.prototype), "Low"));
	($mol_mem_key(($.$mol_dimmer.prototype), "High"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_dimmer extends $.$mol_dimmer {
            parts() {
                const needle = this.needle();
                if (needle.length < 2)
                    return [this.haystack()];
                let chunks = [];
                let strings = this.strings();
                for (let index = 0; index < strings.length; index++) {
                    if (strings[index] === '')
                        continue;
                    chunks.push((index % 2) ? this.High(index) : this.Low(index));
                }
                return chunks;
            }
            strings() {
                const options = this.needle().split(/\s+/g).filter(Boolean);
                if (!options.length)
                    return [this.haystack()];
                const variants = { ...options };
                const regexp = $mol_regexp.from({ needle: variants }, { ignoreCase: true });
                return this.haystack().split(regexp);
            }
            string(index) {
                return this.strings()[index];
            }
            *view_find(check, path = []) {
                if (check(this, this.haystack())) {
                    yield [...path, this];
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_dimmer.prototype, "strings", null);
        $$.$mol_dimmer = $mol_dimmer;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/dimmer/dimmer.view.css", "[mol_dimmer] {\n\tdisplay: block;\n\tmax-width: 100%;\n}\n\n[mol_dimmer_low] {\n\tdisplay: inline;\n\topacity: 0.8;\n}\n\n[mol_dimmer_high] {\n\tdisplay: inline;\n\tcolor: var(--mol_theme_focus);\n\ttext-shadow: 0 0;\n}\n");
})($ || ($ = {}));

;
	($.$mol_search) = class $mol_search extends ($.$mol_pop) {
		clear(next){
			if(next !== undefined) return next;
			return null;
		}
		Hotkey(){
			const obj = new this.$.$mol_hotkey();
			(obj.key) = () => ({"escape": (next) => (this.clear(next))});
			return obj;
		}
		nav_components(){
			return [];
		}
		nav_focused(next){
			if(next !== undefined) return next;
			return null;
		}
		Nav(){
			const obj = new this.$.$mol_nav();
			(obj.keys_y) = () => ((this.nav_components()));
			(obj.current_y) = (next) => ((this.nav_focused(next)));
			return obj;
		}
		suggests_showed(next){
			if(next !== undefined) return next;
			return false;
		}
		query(next){
			if(next !== undefined) return next;
			return "";
		}
		hint(){
			return (this.$.$mol_locale.text("$mol_search_hint"));
		}
		submit(next){
			if(next !== undefined) return next;
			return null;
		}
		enabled(){
			return true;
		}
		keyboard(){
			return "search";
		}
		enter(){
			return "search";
		}
		bring(){
			return (this.Query().bring());
		}
		Query(){
			const obj = new this.$.$mol_string();
			(obj.value) = (next) => ((this.query(next)));
			(obj.hint) = () => ((this.hint()));
			(obj.submit) = (next) => ((this.submit(next)));
			(obj.enabled) = () => ((this.enabled()));
			(obj.keyboard) = () => ((this.keyboard()));
			(obj.enter) = () => ((this.enter()));
			return obj;
		}
		Clear_icon(){
			const obj = new this.$.$mol_icon_close();
			return obj;
		}
		Clear(){
			const obj = new this.$.$mol_button_minor();
			(obj.hint) = () => ((this.$.$mol_locale.text("$mol_search_Clear_hint")));
			(obj.enabled) = () => ((this.enabled()));
			(obj.click) = (next) => ((this.clear(next)));
			(obj.sub) = () => ([(this.Clear_icon())]);
			return obj;
		}
		anchor_content(){
			return [(this.Query()), (this.Clear())];
		}
		menu_items(){
			return [];
		}
		Menu(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.menu_items()));
			return obj;
		}
		Bubble_pane(){
			const obj = new this.$.$mol_scroll();
			(obj.sub) = () => ([(this.Menu())]);
			return obj;
		}
		suggest_select(id, next){
			if(next !== undefined) return next;
			return null;
		}
		suggest_label(id){
			return "";
		}
		Suggest_label(id){
			const obj = new this.$.$mol_dimmer();
			(obj.haystack) = () => ((this.suggest_label(id)));
			(obj.needle) = () => ((this.query()));
			return obj;
		}
		suggest_content(id){
			return [(this.Suggest_label(id))];
		}
		suggests(){
			return [];
		}
		plugins(){
			return [
				...(super.plugins()), 
				(this.Hotkey()), 
				(this.Nav())
			];
		}
		showed(next){
			return (this.suggests_showed(next));
		}
		align_hor(){
			return "right";
		}
		Anchor(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.anchor_content()));
			return obj;
		}
		bubble_content(){
			return [(this.Bubble_pane())];
		}
		Suggest(id){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.suggest_select(id, next)));
			(obj.sub) = () => ((this.suggest_content(id)));
			return obj;
		}
	};
	($mol_mem(($.$mol_search.prototype), "clear"));
	($mol_mem(($.$mol_search.prototype), "Hotkey"));
	($mol_mem(($.$mol_search.prototype), "nav_focused"));
	($mol_mem(($.$mol_search.prototype), "Nav"));
	($mol_mem(($.$mol_search.prototype), "suggests_showed"));
	($mol_mem(($.$mol_search.prototype), "query"));
	($mol_mem(($.$mol_search.prototype), "submit"));
	($mol_mem(($.$mol_search.prototype), "Query"));
	($mol_mem(($.$mol_search.prototype), "Clear_icon"));
	($mol_mem(($.$mol_search.prototype), "Clear"));
	($mol_mem(($.$mol_search.prototype), "Menu"));
	($mol_mem(($.$mol_search.prototype), "Bubble_pane"));
	($mol_mem_key(($.$mol_search.prototype), "suggest_select"));
	($mol_mem_key(($.$mol_search.prototype), "Suggest_label"));
	($mol_mem(($.$mol_search.prototype), "Anchor"));
	($mol_mem_key(($.$mol_search.prototype), "Suggest"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_search extends $.$mol_search {
            anchor_content() {
                return [
                    this.Query(),
                    ...this.query() ? [this.Clear()] : [],
                ];
            }
            suggests_showed(next = true) {
                this.query();
                if (!this.focused())
                    return false;
                return next;
            }
            suggest_selected(next) {
                if (next === undefined)
                    return;
                this.query(next);
                this.Query().focused(true);
            }
            nav_components() {
                return [
                    this.Query(),
                    ...this.menu_items(),
                ];
            }
            nav_focused(component) {
                if (!this.focused())
                    return null;
                if (component == null) {
                    for (let comp of this.nav_components()) {
                        if (comp && comp.focused())
                            return comp;
                    }
                    return null;
                }
                if (this.suggests_showed()) {
                    this.ensure_visible(component, "center");
                    component.focused(true);
                }
                return component;
            }
            suggest_label(key) {
                return key;
            }
            menu_items() {
                return this.suggests().map((suggest) => this.Suggest(suggest));
            }
            suggest_select(id, event) {
                this.query(id);
                this.Query().selection([id.length, id.length]);
                this.Query().focused(true);
            }
            clear(event) {
                this.query('');
            }
        }
        __decorate([
            $mol_mem
        ], $mol_search.prototype, "anchor_content", null);
        __decorate([
            $mol_mem
        ], $mol_search.prototype, "suggests_showed", null);
        __decorate([
            $mol_mem
        ], $mol_search.prototype, "nav_focused", null);
        __decorate([
            $mol_mem
        ], $mol_search.prototype, "menu_items", null);
        $$.$mol_search = $mol_search;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/search/search.view.css", "[mol_search] {\n\talign-self: flex-start;\n\tflex: auto;\n}\n\n[mol_search_anchor] {\n\tflex: 1 1 auto;\n}\n\n[mol_search_query] {\n\tflex-grow: 1;\n}\n\n[mol_search_menu] {\n\tmin-height: .75rem;\n\tdisplay: flex;\n}\n\n[mol_search_suggest] {\n\ttext-align: left;\n}\n\n[mol_search_suggest_label_high] {\n\tcolor: var(--mol_theme_shade);\n\ttext-shadow: none;\n}\n");
})($ || ($ = {}));

;
	($.$mol_link) = class $mol_link extends ($.$mol_view) {
		uri_toggle(){
			return "";
		}
		hint(){
			return "";
		}
		hint_safe(){
			return (this.hint());
		}
		target(){
			return "_self";
		}
		file_name(){
			return "";
		}
		current(){
			return false;
		}
		relation(){
			return "";
		}
		event_click(next){
			if(next !== undefined) return next;
			return null;
		}
		click(next){
			return (this.event_click(next));
		}
		uri(){
			return "";
		}
		dom_name(){
			return "a";
		}
		uri_off(){
			return "";
		}
		uri_native(){
			return null;
		}
		external(){
			return false;
		}
		attr(){
			return {
				...(super.attr()), 
				"href": (this.uri_toggle()), 
				"title": (this.hint_safe()), 
				"target": (this.target()), 
				"download": (this.file_name()), 
				"mol_link_current": (this.current()), 
				"rel": (this.relation())
			};
		}
		sub(){
			return [(this.title())];
		}
		arg(){
			return {};
		}
		event(){
			return {...(super.event()), "click": (next) => (this.click(next))};
		}
	};
	($mol_mem(($.$mol_link.prototype), "event_click"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link extends $.$mol_link {
            uri_toggle() {
                return this.current() ? this.uri_off() : this.uri();
            }
            uri() {
                return new this.$.$mol_state_arg(this.state_key()).link(this.arg());
            }
            uri_off() {
                const arg2 = {};
                for (let i in this.arg())
                    arg2[i] = null;
                return new this.$.$mol_state_arg(this.state_key()).link(arg2);
            }
            uri_native() {
                const base = this.$.$mol_state_arg.href();
                return new URL(this.uri(), base);
            }
            current() {
                const base = this.$.$mol_state_arg.href_normal();
                const target = this.uri_native().toString();
                if (base === target)
                    return true;
                const args = this.arg();
                const keys = Object.keys(args).filter(key => args[key] != null);
                if (keys.length === 0)
                    return false;
                for (const key of keys) {
                    if (this.$.$mol_state_arg.value(key) != args[key])
                        return false;
                }
                return true;
            }
            file_name() {
                return null;
            }
            minimal_height() {
                return Math.max(super.minimal_height(), 24);
            }
            external() {
                return this.uri_native().origin !== $mol_dom_context.location.origin;
            }
            target() {
                return this.external() ? '_blank' : '_self';
            }
            hint_safe() {
                try {
                    return this.hint();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return '';
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_toggle", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_off", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_native", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "current", null);
        $$.$mol_link = $mol_link;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const { rem } = $mol_style_unit;
    $mol_style_define($mol_link, {
        textDecoration: 'none',
        color: $mol_theme.control,
        stroke: 'currentcolor',
        cursor: 'pointer',
        padding: $mol_gap.text,
        boxSizing: 'border-box',
        position: 'relative',
        minWidth: rem(2.5),
        minHeight: rem(2.5),
        gap: $mol_gap.space,
        border: {
            radius: $mol_gap.round,
        },
        ':hover': {
            background: {
                color: $mol_theme.hover,
            },
        },
        ':focus': {
            outline: 'none',
        },
        ':focus-visible': {
            outline: 'none',
            background: {
                color: $mol_theme.hover,
            }
        },
        ':active': {
            color: $mol_theme.focus,
        },
        '@': {
            mol_link_current: {
                'true': {
                    color: $mol_theme.current,
                    textShadow: '0 0',
                }
            }
        },
    });
})($ || ($ = {}));

;
	($.$mol_page) = class $mol_page extends ($.$mol_view) {
		tabindex(){
			return -1;
		}
		Logo(){
			return null;
		}
		title_content(){
			return [(this.Logo()), (this.title())];
		}
		Title(){
			const obj = new this.$.$mol_view();
			(obj.dom_name) = () => ("h1");
			(obj.sub) = () => ((this.title_content()));
			return obj;
		}
		tools(){
			return [];
		}
		Tools(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.tools()));
			return obj;
		}
		head(){
			return [(this.Title()), (this.Tools())];
		}
		Head(){
			const obj = new this.$.$mol_view();
			(obj.minimal_height) = () => (64);
			(obj.dom_name) = () => ("header");
			(obj.sub) = () => ((this.head()));
			return obj;
		}
		body_scroll_top(next){
			return (this.Body().scroll_top(next));
		}
		body(){
			return [];
		}
		Body_content(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.body()));
			return obj;
		}
		body_content(){
			return [(this.Body_content())];
		}
		Body(){
			const obj = new this.$.$mol_scroll();
			(obj.sub) = () => ((this.body_content()));
			return obj;
		}
		foot(){
			return [];
		}
		Foot(){
			const obj = new this.$.$mol_view();
			(obj.dom_name) = () => ("footer");
			(obj.sub) = () => ((this.foot()));
			return obj;
		}
		dom_name(){
			return "article";
		}
		attr(){
			return {...(super.attr()), "tabIndex": (this.tabindex())};
		}
		sub(){
			return [
				(this.Head()), 
				(this.Body()), 
				(this.Foot())
			];
		}
	};
	($mol_mem(($.$mol_page.prototype), "Title"));
	($mol_mem(($.$mol_page.prototype), "Tools"));
	($mol_mem(($.$mol_page.prototype), "Head"));
	($mol_mem(($.$mol_page.prototype), "Body_content"));
	($mol_mem(($.$mol_page.prototype), "Body"));
	($mol_mem(($.$mol_page.prototype), "Foot"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem } = $mol_style_unit;
        const { hsla, blur } = $mol_style_func;
        $mol_style_define($mol_page, {
            display: 'flex',
            flex: {
                basis: 'auto',
                direction: 'column',
            },
            position: 'relative',
            alignSelf: 'stretch',
            maxWidth: per(100),
            maxHeight: per(100),
            boxSizing: 'border-box',
            color: $mol_theme.text,
            ':focus': {
                outline: 'none',
            },
            Head: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'flex-end',
                flex: 'none',
                position: 'relative',
                margin: 0,
                minHeight: rem(4),
                padding: $mol_gap.block,
                background: {
                    color: $mol_theme.card,
                },
                border: {
                    radius: $mol_gap.round,
                },
                box: {
                    shadow: [
                        [0, `-0.5rem`, `0.5rem`, `-0.5rem`, hsla(0, 0, 0, .25)],
                        [0, `0.5rem`, `0.5rem`, `-0.5rem`, hsla(0, 0, 0, .25)],
                    ],
                },
                zIndex: 2,
                '@media': {
                    'print': {
                        box: {
                            shadow: [[0, `1px`, 0, 0, hsla(0, 0, 0, .25)]],
                        },
                    },
                },
            },
            Title: {
                minHeight: rem(2),
                margin: 0,
                padding: $mol_gap.text,
                gap: $mol_gap.text,
                wordBreak: 'normal',
                textShadow: '0 0',
                font: {
                    size: 'inherit',
                    weight: 'normal',
                },
                flex: {
                    grow: 1,
                    shrink: 1,
                    basis: 'auto',
                },
            },
            Tools: {
                flex: {
                    basis: 'auto',
                    grow: 0,
                    shrink: 1,
                },
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                '@media': {
                    'print': {
                        display: 'none',
                    },
                },
            },
            Body: {
                flex: {
                    grow: 1000,
                    shrink: 1,
                    basis: per(100),
                },
            },
            Body_content: {
                padding: $mol_gap.block,
                minHeight: 0,
                minWidth: 0,
                flex: {
                    direction: 'column',
                    shrink: 1,
                    grow: 1,
                },
                justify: {
                    self: 'stretch',
                },
            },
            Foot: {
                display: 'flex',
                justifyContent: 'space-between',
                flex: 'none',
                margin: 0,
                background: {
                    color: $mol_theme.card,
                },
                border: {
                    radius: $mol_gap.round,
                },
                box: {
                    shadow: [
                        [0, `-0.5rem`, `0.5rem`, `-0.5rem`, hsla(0, 0, 0, .25)],
                        [0, `0.5rem`, `0.5rem`, `-0.5rem`, hsla(0, 0, 0, .25)],
                    ],
                },
                zIndex: 1,
                padding: $mol_gap.block,
                ':empty': {
                    display: 'none',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_book2_catalog) = class $mol_book2_catalog extends ($.$mol_book2) {
		Menu_title(){
			return (this.Menu().Title());
		}
		menu_title(){
			return "";
		}
		Menu_tools(){
			return (this.Menu().Tools());
		}
		Menu_logo(){
			return null;
		}
		menu_head(){
			return [(this.Menu_title()), (this.Menu_tools())];
		}
		menu_filter(next){
			if(next !== undefined) return next;
			return "";
		}
		Menu_filter(){
			const obj = new this.$.$mol_search();
			(obj.query) = (next) => ((this.menu_filter(next)));
			return obj;
		}
		Menu_links_empty(){
			const obj = new this.$.$mol_view();
			return obj;
		}
		arg(id){
			return {};
		}
		menu_link_arg(id){
			return (this.arg(id));
		}
		spread_title(id){
			return "";
		}
		Menu_link_title(id){
			const obj = new this.$.$mol_dimmer();
			(obj.needle) = () => ((this.menu_filter()));
			(obj.haystack) = () => ((this.spread_title(id)));
			return obj;
		}
		menu_link_content(id){
			return [(this.Menu_link_title(id))];
		}
		Menu_link(id){
			const obj = new this.$.$mol_link();
			(obj.arg) = () => ((this.menu_link_arg(id)));
			(obj.sub) = () => ((this.menu_link_content(id)));
			return obj;
		}
		menu_item_content(id){
			return [(this.Menu_link(id))];
		}
		Menu_item(id){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.menu_item_content(id)));
			return obj;
		}
		menu_links(){
			return [(this.Menu_item("0"))];
		}
		Menu_links(){
			const obj = new this.$.$mol_list();
			(obj.Empty) = () => ((this.Menu_links_empty()));
			(obj.rows) = () => ((this.menu_links()));
			return obj;
		}
		menu_body(){
			return [(this.Menu_filter()), (this.Menu_links())];
		}
		menu_foot(){
			return [];
		}
		Menu(){
			const obj = new this.$.$mol_page();
			(obj.title) = () => ((this.menu_title()));
			(obj.Logo) = () => ((this.Menu_logo()));
			(obj.tools) = () => ([...(this.menu_tools()), ...(this.addon_tools())]);
			(obj.head) = () => ((this.menu_head()));
			(obj.body) = () => ((this.menu_body()));
			(obj.foot) = () => ((this.menu_foot()));
			return obj;
		}
		spread_close_arg(){
			return {};
		}
		Spread_close_icon(){
			const obj = new this.$.$mol_icon_close();
			return obj;
		}
		param(){
			return "";
		}
		spread(next){
			if(next !== undefined) return next;
			return "";
		}
		spreads(){
			return {};
		}
		Spread(id){
			const obj = new this.$.$mol_view();
			return obj;
		}
		Spread_default(){
			return null;
		}
		spread_ids(){
			return [];
		}
		menu_filter_enabled(){
			return false;
		}
		spread_ids_filtered(){
			return [];
		}
		spread_current(){
			return null;
		}
		menu_tools(){
			return [];
		}
		addon_tools(){
			return [];
		}
		pages(){
			return [(this.Menu())];
		}
		Spread_close(){
			const obj = new this.$.$mol_link();
			(obj.arg) = () => ((this.spread_close_arg()));
			(obj.hint) = () => ((this.$.$mol_locale.text("$mol_book2_catalog_Spread_close_hint")));
			(obj.sub) = () => ([(this.Spread_close_icon())]);
			return obj;
		}
	};
	($mol_mem(($.$mol_book2_catalog.prototype), "menu_filter"));
	($mol_mem(($.$mol_book2_catalog.prototype), "Menu_filter"));
	($mol_mem(($.$mol_book2_catalog.prototype), "Menu_links_empty"));
	($mol_mem_key(($.$mol_book2_catalog.prototype), "Menu_link_title"));
	($mol_mem_key(($.$mol_book2_catalog.prototype), "Menu_link"));
	($mol_mem_key(($.$mol_book2_catalog.prototype), "Menu_item"));
	($mol_mem(($.$mol_book2_catalog.prototype), "Menu_links"));
	($mol_mem(($.$mol_book2_catalog.prototype), "Menu"));
	($mol_mem(($.$mol_book2_catalog.prototype), "Spread_close_icon"));
	($mol_mem(($.$mol_book2_catalog.prototype), "spread"));
	($mol_mem_key(($.$mol_book2_catalog.prototype), "Spread"));
	($mol_mem(($.$mol_book2_catalog.prototype), "Spread_close"));


;
"use strict";
var $;
(function ($) {
    function $mol_match_text(query, values) {
        const tags = query.toLowerCase().trim().split(/\s+/).filter(tag => tag);
        if (tags.length === 0)
            return () => true;
        return (variant) => {
            const vals = values(variant);
            return tags.every(tag => vals.some(val => val.toLowerCase().indexOf(tag) >= 0));
        };
    }
    $.$mol_match_text = $mol_match_text;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_book2_catalog extends $.$mol_book2_catalog {
            spread_current() {
                return this.spread() === '' ? this.Spread_default() : this.Spread(this.spread());
            }
            pages() {
                const spread = this.spread_current();
                return [
                    this.Menu(),
                    ...spread
                        ? spread instanceof $mol_book2
                            ? spread.pages_deep()
                            : [spread]
                        : [],
                ];
            }
            auto() {
                const spread = this.spread_current();
                if (spread instanceof $mol_book2)
                    spread.auto();
            }
            spread_ids() {
                return Object.keys(this.spreads());
            }
            menu_body() {
                return [
                    ...this.menu_filter_enabled() ? [this.Menu_filter()] : [],
                    this.Menu_links(),
                ];
            }
            menu_filter_enabled() {
                return this.spread_ids().length >= 10;
            }
            menu_links() {
                return this.spread_ids_filtered()
                    .map(spread => this.Menu_item(spread));
            }
            spread_ids_filtered() {
                return this.spread_ids()
                    .filter($mol_match_text(this.menu_filter(), spread => [this.spread_title(spread)]));
            }
            Spread(id) {
                return this.spreads()[id];
            }
            Spread_default() {
                return this.spreads()[''];
            }
            spread(next) {
                return this.$.$mol_state_arg.value(this.param(), next) ?? '';
            }
            arg(spread) {
                return { [this.param()]: spread || null };
            }
            spread_close_arg() {
                return { [this.param()]: null };
            }
            spread_title(spread) {
                const page = this.Spread(spread);
                return page instanceof $mol_book2
                    && page.menu_title()
                    || page.title()
                    || spread;
            }
            spread_current_book() {
                const spread = this.spread_current();
                return spread instanceof $mol_book2 ? spread : null;
            }
            placeholders() {
                const spread_placeholders = this.spread_current_book()?.placeholders() ?? [];
                return spread_placeholders.length ? spread_placeholders : super.placeholders();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_book2_catalog.prototype, "pages", null);
        __decorate([
            $mol_mem
        ], $mol_book2_catalog.prototype, "spread_ids", null);
        __decorate([
            $mol_mem
        ], $mol_book2_catalog.prototype, "menu_body", null);
        __decorate([
            $mol_mem
        ], $mol_book2_catalog.prototype, "menu_links", null);
        __decorate([
            $mol_mem
        ], $mol_book2_catalog.prototype, "spread_ids_filtered", null);
        __decorate([
            $mol_mem
        ], $mol_book2_catalog.prototype, "spread", null);
        __decorate([
            $mol_mem
        ], $mol_book2_catalog.prototype, "placeholders", null);
        $$.$mol_book2_catalog = $mol_book2_catalog;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($mol_book2_catalog, {
            Menu_filter: {
                flex: {
                    shrink: 0,
                    grow: 0,
                },
                alignSelf: 'stretch',
            },
            Menu_item: {
                align: {
                    items: 'flex-start',
                },
            },
            Menu_link: {
                flex: {
                    grow: 1,
                    shrink: 1,
                    wrap: 'wrap',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_icon_plus) = class $mol_icon_plus extends ($.$mol_icon) {
		path(){
			return "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";
		}
	};


;
"use strict";

;
	($.$mol_theme_auto) = class $mol_theme_auto extends ($.$mol_plugin) {
		dark(){
			return "$mol_theme_dark";
		}
		theme(){
			return (this.dark());
		}
		light(){
			return "$mol_theme_light";
		}
		attr(){
			return {"mol_theme": (this.theme())};
		}
	};


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_theme_auto extends $.$mol_theme_auto {
            theme() {
                return this.$.$mol_lights() ? this.light() : this.dark();
            }
        }
        $$.$mol_theme_auto = $mol_theme_auto;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_embed_native) = class $mol_embed_native extends ($.$mol_scroll) {
		uri(next){
			if(next !== undefined) return next;
			return "about:config";
		}
		title(){
			return "";
		}
		Fallback(){
			const obj = new this.$.$mol_link();
			(obj.uri) = () => ((this.uri()));
			(obj.sub) = () => ([(this.title())]);
			return obj;
		}
		uri_change(next){
			if(next !== undefined) return next;
			return null;
		}
		dom_name(){
			return "iframe";
		}
		window(){
			return null;
		}
		attr(){
			return {...(super.attr()), "src": (this.uri())};
		}
		sub(){
			return [(this.Fallback())];
		}
		message(){
			return {"hashchange": (next) => (this.uri_change(next))};
		}
	};
	($mol_mem(($.$mol_embed_native.prototype), "uri"));
	($mol_mem(($.$mol_embed_native.prototype), "Fallback"));
	($mol_mem(($.$mol_embed_native.prototype), "uri_change"));


;
"use strict";
var $;
(function ($) {
    function $mol_wait_timeout_async(timeout) {
        const promise = new $mol_promise();
        const task = new this.$mol_after_timeout(timeout, () => promise.done());
        return Object.assign(promise, {
            destructor: () => task.destructor()
        });
    }
    $.$mol_wait_timeout_async = $mol_wait_timeout_async;
    function $mol_wait_timeout(timeout) {
        return this.$mol_wire_sync(this).$mol_wait_timeout_async(timeout);
    }
    $.$mol_wait_timeout = $mol_wait_timeout;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_embed_native extends $.$mol_embed_native {
            window() {
                $mol_wire_solid();
                this.uri_resource();
                return $mol_wire_sync(this).load(this.dom_node_actual());
            }
            load(frame) {
                return new Promise((done, fail) => {
                    frame.onload = () => {
                        try {
                            if (frame.contentWindow.location.href === 'about:blank') {
                                return;
                            }
                        }
                        catch { }
                        done(frame.contentWindow);
                    };
                    frame.onerror = (event) => {
                        fail(typeof event === 'string' ? new Error(event) : event.error || event);
                    };
                });
            }
            uri_resource() {
                return this.uri().replace(/#.*/, '');
            }
            message_listener() {
                return new $mol_dom_listener($mol_dom_context, 'message', $mol_wire_async(this).message_receive);
            }
            sub_visible() {
                this.window();
                return super.sub_visible();
            }
            message_receive(event) {
                if (!event)
                    return;
                if (event.source !== this.window())
                    return;
                if (!Array.isArray(event.data))
                    return;
                this.message()[event.data[0]]?.(event);
            }
            uri_change(event) {
                this.$.$mol_wait_timeout(1000);
                this.uri(event.data[1]);
            }
            auto() {
                return [
                    this.message_listener(),
                    this.window(),
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_embed_native.prototype, "window", null);
        __decorate([
            $mol_mem
        ], $mol_embed_native.prototype, "uri_resource", null);
        __decorate([
            $mol_mem
        ], $mol_embed_native.prototype, "message_listener", null);
        $$.$mol_embed_native = $mol_embed_native;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/embed/native/native.view.css", "[mol_embed_native] {\n\tmin-width: 0;\n\tmin-height: 0;\n\tmax-width: 100%;\n\tmax-height: 100vh;\n\tobject-fit: cover;\n\tdisplay: flex;\n\tflex: 1 1 auto;\n\tobject-position: top left;\n\tborder-radius: var(--mol_gap_round);\n\taspect-ratio: 4/3;\n\tborder: none;\n}\n");
})($ || ($ = {}));

;
	($.$mol_frame) = class $mol_frame extends ($.$mol_embed_native) {
		allow(){
			return "";
		}
		html(){
			return null;
		}
		attr(){
			return {
				"tabindex": (this.tabindex()), 
				"allow": (this.allow()), 
				"src": (this.uri()), 
				"srcdoc": (this.html())
			};
		}
		fullscreen(){
			return true;
		}
		accelerometer(){
			return true;
		}
		autoplay(){
			return true;
		}
		encription(){
			return true;
		}
		gyroscope(){
			return true;
		}
		pip(){
			return true;
		}
		clipboard_read(){
			return true;
		}
		clipboard_write(){
			return true;
		}
	};


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_frame extends $.$mol_frame {
            window() {
                return super.window();
            }
            allow() {
                return [
                    ...this.fullscreen() ? ['fullscreen'] : [],
                    ...this.accelerometer() ? ['accelerometer'] : [],
                    ...this.autoplay() ? ['autoplay'] : [],
                    ...this.encription() ? ['encrypted-media'] : [],
                    ...this.gyroscope() ? ['gyroscope'] : [],
                    ...this.pip() ? ['picture-in-picture'] : [],
                    ...this.clipboard_read() ? [`clipboard-read ${this.uri()}`] : [],
                    ...this.clipboard_write() ? [`clipboard-write ${this.uri()}`] : [],
                ].join('; ');
            }
        }
        $$.$mol_frame = $mol_frame;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_define($mol_frame, {
        border: {
            style: 'none',
        },
        maxHeight: $mol_style_unit.vh(100),
    });
})($ || ($ = {}));

;
	($.$giper_web_frame) = class $giper_web_frame extends ($.$mol_frame) {
		uri(){
			return "https://web.giper.dev/#mol_lights={lights}/current={current}/query={query}";
		}
		query(){
			return "";
		}
	};


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $giper_web_frame extends $.$giper_web_frame {
            uri() {
                return super.uri()
                    .replace('{lights}', String(this.$.$mol_lights()))
                    .replace('{query}', encodeURIComponent(this.query()))
                    .replace('{current}', encodeURIComponent(this.$.$mol_state_arg.href().replace(/^https?:\/\/|\/?\??#.*$/, '')));
            }
        }
        __decorate([
            $mol_mem
        ], $giper_web_frame.prototype, "uri", null);
        $$.$giper_web_frame = $giper_web_frame;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("giper/web/frame/frame.view.css", "/* @keyframes giper_web_frame_show {\n\tfrom {\n\t\topacity: 0;\n\t}\n}\n\n[giper_web_frame] {\n\tanimation: 5s -1s ease-in giper_web_frame_show;\n} */\n");
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($giper_web_frame, {
            flex: {
                basis: '4rem',
                shrink: 0,
                grow: 0,
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_status) = class $mol_status extends ($.$mol_view) {
		message(){
			return "";
		}
		status(){
			return (this.title());
		}
		minimal_height(){
			return 24;
		}
		minimal_width(){
			return 0;
		}
		sub(){
			return [(this.message())];
		}
	};


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_status extends $.$mol_status {
            message() {
                try {
                    return this.status() ?? null;
                }
                catch (error) {
                    if (error instanceof Promise)
                        $mol_fail_hidden(error);
                    $mol_fail_log(error);
                    return error.message;
                }
            }
        }
        $$.$mol_status = $mol_status;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/status/status.view.css", "[mol_status] {\n\tpadding: var(--mol_gap_text);\n\tborder-radius: var(--mol_gap_round);\n\tdisplay: block;\n\tflex-shrink: 1;\n\tword-wrap: break-word;\n}\n\n[mol_status]:not([mol_view_error=\"Promise\"]) {\n\tcolor: var(--mol_theme_focus);\n}\n\n[mol_status]:not([mol_view_error=\"Promise\"]):empty {\n\tdisplay: none;\n}\n");
})($ || ($ = {}));

;
	($.$mol_stack) = class $mol_stack extends ($.$mol_view) {};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/stack/stack.view.css", "[mol_stack] {\n\tdisplay: grid;\n\t/* width: max-content; */\n\t/* height: max-content; */\n\talign-items: flex-start;\n\tjustify-items: flex-start;\n}\n\n[mol_stack] > * {\n\tgrid-area: 1/1;\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_text_code_token) = class $mol_text_code_token extends ($.$mol_dimmer) {
		type(){
			return "";
		}
		attr(){
			return {...(super.attr()), "mol_text_code_token_type": (this.type())};
		}
	};
	($.$mol_text_code_token_link) = class $mol_text_code_token_link extends ($.$mol_text_code_token) {
		uri(){
			return "";
		}
		dom_name(){
			return "a";
		}
		type(){
			return "code-link";
		}
		attr(){
			return {
				...(super.attr()), 
				"href": (this.uri()), 
				"target": "_blank"
			};
		}
	};


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { hsla } = $mol_style_func;
        $mol_style_define($mol_text_code_token, {
            display: 'inline',
            textDecoration: 'none',
            '@': {
                mol_text_code_token_type: {
                    'code-keyword': {
                        color: hsla(0, 70, 60, 1),
                    },
                    'code-field': {
                        color: hsla(300, 70, 50, 1),
                    },
                    'code-tag': {
                        color: hsla(330, 70, 50, 1),
                    },
                    'code-global': {
                        color: hsla(30, 80, 50, 1),
                    },
                    'code-decorator': {
                        color: hsla(180, 40, 50, 1),
                    },
                    'code-punctuation': {
                        color: hsla(0, 0, 50, 1),
                    },
                    'code-string': {
                        color: hsla(90, 40, 50, 1),
                    },
                    'code-number': {
                        color: hsla(55, 65, 45, 1),
                    },
                    'code-call': {
                        color: hsla(270, 60, 50, 1),
                    },
                    'code-link': {
                        color: hsla(210, 60, 50, 1),
                    },
                    'code-comment-inline': {
                        opacity: .5,
                    },
                    'code-comment-block': {
                        opacity: .5,
                    },
                    'code-docs': {
                        opacity: .75,
                    },
                },
            }
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_text_code_line) = class $mol_text_code_line extends ($.$mol_paragraph) {
		numb(){
			return 0;
		}
		token_type(id){
			return "";
		}
		token_text(id){
			return "";
		}
		highlight(){
			return "";
		}
		token_uri(id){
			return "";
		}
		text(){
			return "";
		}
		minimal_height(){
			return 24;
		}
		numb_showed(){
			return true;
		}
		syntax(){
			return null;
		}
		uri_resolve(id){
			return "";
		}
		Numb(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.numb())]);
			return obj;
		}
		Token(id){
			const obj = new this.$.$mol_text_code_token();
			(obj.type) = () => ((this.token_type(id)));
			(obj.haystack) = () => ((this.token_text(id)));
			(obj.needle) = () => ((this.highlight()));
			return obj;
		}
		Token_link(id){
			const obj = new this.$.$mol_text_code_token_link();
			(obj.haystack) = () => ((this.token_text(id)));
			(obj.needle) = () => ((this.highlight()));
			(obj.uri) = () => ((this.token_uri(id)));
			return obj;
		}
		find_pos(id){
			return null;
		}
	};
	($mol_mem(($.$mol_text_code_line.prototype), "Numb"));
	($mol_mem_key(($.$mol_text_code_line.prototype), "Token"));
	($mol_mem_key(($.$mol_text_code_line.prototype), "Token_link"));


;
"use strict";
var $;
(function ($) {
    class $mol_syntax2 {
        lexems;
        constructor(lexems) {
            this.lexems = lexems;
            for (let name in lexems) {
                this.rules.push({
                    name: name,
                    regExp: lexems[name],
                    size: RegExp('^$|' + lexems[name].source).exec('').length - 1,
                });
            }
            const parts = '(' + this.rules.map(rule => rule.regExp.source).join(')|(') + ')';
            this.regexp = RegExp(`([\\s\\S]*?)(?:(${parts})|$(?![^]))`, 'gmu');
        }
        rules = [];
        regexp;
        tokenize(text, handle) {
            let end = 0;
            lexing: while (end < text.length) {
                const start = end;
                this.regexp.lastIndex = start;
                var found = this.regexp.exec(text);
                end = this.regexp.lastIndex;
                if (start === end)
                    throw new Error('Empty token');
                var prefix = found[1];
                if (prefix)
                    handle('', prefix, [prefix], start);
                var suffix = found[2];
                if (!suffix)
                    continue;
                let offset = 4;
                for (let rule of this.rules) {
                    if (found[offset - 1]) {
                        handle(rule.name, suffix, found.slice(offset, offset + rule.size), start + prefix.length);
                        continue lexing;
                    }
                    offset += rule.size + 1;
                }
                $mol_fail(new Error('$mol_syntax2 is broken'));
            }
        }
        parse(text, handlers) {
            this.tokenize(text, (name, ...args) => handlers[name](...args));
        }
    }
    $.$mol_syntax2 = $mol_syntax2;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_syntax2_md_flow = new $mol_syntax2({
        'quote': /^((?:(?:[>"] )(?:[^]*?)$(\r?\n?))+)([\n\r]*)/,
        'spoiler': /^((?:(?:[\?] )(?:[^]*?)$(\r?\n?))+)([\n\r]*)/,
        'header': /^([#=]+)(\s+)(.*?)$([\n\r]*)/,
        'list': /^((?:(?: ?([*+-])|(?:\d+[\.\)])+) +(?:[^]*?)$(?:\r?\n?)(?:  (?:[^]*?)$(?:\r?\n?))*)+)((?:\r?\n)*)/,
        'code': /^(```\s*)([\w.-]*)[\r\n]+([^]*?)^(```)$([\n\r]*)/,
        'code-indent': /^((?:(?: |\t)(?:[^]*?)$\r?\n?)+)([\n\r]*)/,
        'table': /((?:^\|.+?$\r?\n?)+)([\n\r]*)/,
        'grid': /((?:^ *! .*?$\r?\n?)+)([\n\r]*)/,
        'cut': /^--+$((?:\r?\n)*)/,
        'block': /^(.*?)$((?:\r?\n)*)/,
    });
    $.$mol_syntax2_md_line = new $mol_syntax2({
        'strong': /\*\*(.+?)\*\*/,
        'emphasis': /\*(?!\s)(.+?)\*|\/\/(?!\s)(.+?)\/\//,
        'code': /```(.+?)```|;;(.+?);;|`(.+?)`/,
        'insert': /\+\+(.+?)\+\+/,
        'delete': /~~(.+?)~~|--(.+?)--/,
        'embed': /""(?:(.*?)\\)?(.*?)""/,
        'link': /\\\\(?:(.*?)\\)?(.*?)\\\\/,
        'image-link': /!\[([^\[\]]*?)\]\((.*?)\)/,
        'text-link': /\[(.*?(?:\[[^\[\]]*?\][^\[\]]*?)*)\]\((.*?)\)/,
        'text-link-http': /\b(https?:\/\/[^\s,.;:!?")]+(?:[,.;:!?")][^\s,.;:!?")]+)+)/,
    });
    $.$mol_syntax2_md_code = new $mol_syntax2({
        'code-indent': /\t+/,
        'code-docs': /\/\/\/.*?$/,
        'code-comment-block': /(?:\/\*[^]*?\*\/|\/\+[^]*?\+\/|<![^]*?>)/,
        'code-link': /(?:\w+:\/\/|#)\S+?(?=\s|\\\\|""|$)/,
        'code-comment-inline': /\/\/.*?(?:$|\/\/)|- \\(?!\\).*|#!? .*/,
        'code-string': /(?:".*?"|'.*?'|`.*?`| ?\\\\.+?\\\\|\/.+?\/[dygimsu]*(?!\p{Letter})|[ \t]*\\[^\n]*)/u,
        'code-number': /[+-]?(?:\d*\.)?\d+\w*/,
        'code-call': /\.?\w+ *(?=\()/,
        'code-sexpr': /\((\w+ )/,
        'code-field': /(?:(?:\.|::|->)\w+|[\w-]+\??\s*:(?!\/\/|:))/,
        'code-keyword': /\b(throw|readonly|unknown|keyof|typeof|never|from|class|struct|interface|type|function|extends|implements|module|namespace|import|export|include|require|var|val|let|const|for|do|while|until|in|out|of|new|if|then|else|switch|case|this|return|async|await|yield|try|catch|break|continue|get|set|public|private|protected|string|boolean|number|null|undefined|true|false|void|int|float|ref)\b/,
        'code-global': /[$]+\w*|\b[A-Z][a-z0-9]+[A-Z]\w*/,
        'code-word': /\w+/,
        'code-decorator': /@\s*\S+/,
        'code-tag': /<\/?[\w-]+\/?>?|&\w+;/,
        'code-punctuation': /[\-\[\]\{\}\(\)<=>~!\?@#%&\*_\+\\\/\|;:\.,\^]+?/,
    });
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text_code_line extends $.$mol_text_code_line {
            maximal_width() {
                return this.text().length * this.letter_width();
            }
            syntax() {
                return this.$.$mol_syntax2_md_code;
            }
            tokens(path) {
                const tokens = [];
                const text = (path.length > 0)
                    ? this.tokens(path.slice(0, path.length - 1))[path[path.length - 1]].found.slice(1, -1)
                    : this.text();
                this.syntax().tokenize(text, (name, found, chunks) => {
                    if (name === 'code-sexpr') {
                        tokens.push({ name: 'code-punctuation', found: '(', chunks: [] });
                        tokens.push({ name: 'code-call', found: chunks[0], chunks: [] });
                    }
                    else {
                        tokens.push({ name, found, chunks });
                    }
                });
                return tokens;
            }
            sub() {
                return [
                    ...this.numb_showed() ? [this.Numb()] : [],
                    ...this.row_content([])
                ];
            }
            row_content(path) {
                const content = this.tokens(path).map((t, i) => this.Token([...path, i]));
                return content.length ? content : ['\n'];
            }
            Token(path) {
                return this.token_type(path) === 'code-link' ? this.Token_link(path) : super.Token(path);
            }
            token_type(path) {
                return this.tokens([...path.slice(0, path.length - 1)])[path[path.length - 1]].name;
            }
            token_content(path) {
                const tokens = this.tokens([...path.slice(0, path.length - 1)]);
                const token = tokens[path[path.length - 1]];
                switch (token.name) {
                    case 'code-string': return [
                        token.found[0],
                        ...this.row_content(path),
                        token.found[token.found.length - 1],
                    ];
                    default: return [token.found];
                }
            }
            token_text(path) {
                const tokens = this.tokens([...path.slice(0, path.length - 1)]);
                const token = tokens[path[path.length - 1]];
                return token.found;
            }
            token_uri(path) {
                const uri = this.token_text(path);
                return this.uri_resolve(uri);
            }
            *view_find(check, path = []) {
                if (check(this, this.text())) {
                    yield [...path, this];
                }
            }
            find_pos(offset) {
                return this.find_token_pos([offset]);
            }
            find_token_pos([offset, ...path]) {
                for (const [index, token] of this.tokens(path).entries()) {
                    if (token.found.length >= offset) {
                        const token = this.Token([...path, index]);
                        return { token, offset };
                    }
                    else {
                        offset -= token.found.length;
                    }
                }
                return null;
            }
        }
        __decorate([
            $mol_mem_key
        ], $mol_text_code_line.prototype, "tokens", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_line.prototype, "row_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_line.prototype, "token_type", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_line.prototype, "token_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_line.prototype, "token_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_line.prototype, "token_uri", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_line.prototype, "find_pos", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_line.prototype, "find_token_pos", null);
        $$.$mol_text_code_line = $mol_text_code_line;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem } = $mol_style_unit;
        $mol_style_define($mol_text_code_line, {
            display: 'block',
            position: 'relative',
            font: {
                family: 'monospace',
            },
            Numb: {
                textAlign: 'right',
                color: $mol_theme.shade,
                width: rem(3),
                margin: {
                    left: rem(-4),
                },
                display: 'inline-block',
                whiteSpace: 'nowrap',
                userSelect: 'none',
                position: 'absolute',
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $node = $node || {};

;
"use strict";
var $;
(function ($) {
    $.$mol_blob = ($node.buffer?.Blob ?? $mol_dom_context.Blob);
})($ || ($ = {}));

;
	($.$mol_icon_clipboard) = class $mol_icon_clipboard extends ($.$mol_icon) {
		path(){
			return "M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3";
		}
	};


;
"use strict";

;
	($.$mol_icon_clipboard_outline) = class $mol_icon_clipboard_outline extends ($.$mol_icon) {
		path(){
			return "M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3M7,7H17V5H19V19H5V5H7V7Z";
		}
	};


;
"use strict";

;
	($.$mol_button_copy) = class $mol_button_copy extends ($.$mol_button_minor) {
		text(){
			return (this.title());
		}
		text_blob(next){
			if(next !== undefined) return next;
			const obj = new this.$.$mol_blob([(this.text())], {"type": "text/plain"});
			return obj;
		}
		html(){
			return "";
		}
		html_blob(next){
			if(next !== undefined) return next;
			const obj = new this.$.$mol_blob([(this.html())], {"type": "text/html"});
			return obj;
		}
		Icon(){
			const obj = new this.$.$mol_icon_clipboard_outline();
			return obj;
		}
		title(){
			return "";
		}
		blobs(){
			return [(this.text_blob()), (this.html_blob())];
		}
		data(){
			return {};
		}
		sub(){
			return [(this.Icon()), (this.title())];
		}
	};
	($mol_mem(($.$mol_button_copy.prototype), "text_blob"));
	($mol_mem(($.$mol_button_copy.prototype), "html_blob"));
	($mol_mem(($.$mol_button_copy.prototype), "Icon"));


;
"use strict";
var $;
(function ($) {
    const mapping = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '&': '&amp;',
    };
    function $mol_html_encode(text) {
        return text.replace(/[&<">]/gi, str => mapping[str]);
    }
    $.$mol_html_encode = $mol_html_encode;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button_copy extends $.$mol_button_copy {
            data() {
                return Object.fromEntries(this.blobs().map(blob => [blob.type, blob]));
            }
            html() {
                return $mol_html_encode(this.text());
            }
            attachments() {
                return [new ClipboardItem(this.data())];
            }
            click(event) {
                const cb = $mol_wire_sync(this.$.$mol_dom_context.navigator.clipboard);
                cb.writeText?.(this.text());
                cb.write?.(this.attachments());
                if (cb.writeText === undefined && cb.write === undefined) {
                    throw new Error("doesn't support copy to clipoard");
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_button_copy.prototype, "html", null);
        __decorate([
            $mol_mem
        ], $mol_button_copy.prototype, "attachments", null);
        $$.$mol_button_copy = $mol_button_copy;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_text_code) = class $mol_text_code extends ($.$mol_stack) {
		sidebar_showed(){
			return false;
		}
		render_visible_only(){
			return false;
		}
		row_numb(id){
			return 0;
		}
		row_theme(id){
			return "";
		}
		row_text(id){
			return "";
		}
		syntax(){
			return null;
		}
		uri_resolve(id){
			return "";
		}
		highlight(){
			return "";
		}
		Row(id){
			const obj = new this.$.$mol_text_code_line();
			(obj.numb_showed) = () => ((this.sidebar_showed()));
			(obj.numb) = () => ((this.row_numb(id)));
			(obj.theme) = () => ((this.row_theme(id)));
			(obj.text) = () => ((this.row_text(id)));
			(obj.syntax) = () => ((this.syntax()));
			(obj.uri_resolve) = (id) => ((this.uri_resolve(id)));
			(obj.highlight) = () => ((this.highlight()));
			return obj;
		}
		rows(){
			return [(this.Row("0"))];
		}
		Rows(){
			const obj = new this.$.$mol_list();
			(obj.render_visible_only) = () => ((this.render_visible_only()));
			(obj.rows) = () => ((this.rows()));
			return obj;
		}
		text_export(){
			return "";
		}
		Copy(){
			const obj = new this.$.$mol_button_copy();
			(obj.hint) = () => ((this.$.$mol_locale.text("$mol_text_code_Copy_hint")));
			(obj.text) = () => ((this.text_export()));
			return obj;
		}
		attr(){
			return {...(super.attr()), "mol_text_code_sidebar_showed": (this.sidebar_showed())};
		}
		text(){
			return "";
		}
		text_lines(){
			return [];
		}
		find_pos(id){
			return null;
		}
		uri_base(){
			return "";
		}
		row_themes(){
			return [];
		}
		sub(){
			return [(this.Rows()), (this.Copy())];
		}
	};
	($mol_mem_key(($.$mol_text_code.prototype), "Row"));
	($mol_mem(($.$mol_text_code.prototype), "Rows"));
	($mol_mem(($.$mol_text_code.prototype), "Copy"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text_code extends $.$mol_text_code {
            render_visible_only() {
                return this.$.$mol_support_css_overflow_anchor();
            }
            text_lines() {
                return (this.text() ?? '').split('\n');
            }
            rows() {
                return this.text_lines().map((_, index) => this.Row(index + 1));
            }
            row_text(index) {
                return this.text_lines()[index - 1];
            }
            row_numb(index) {
                return index;
            }
            find_pos(offset) {
                for (const [index, line] of this.text_lines().entries()) {
                    if (line.length >= offset) {
                        return this.Row(index + 1).find_pos(offset);
                    }
                    else {
                        offset -= line.length + 1;
                    }
                }
                return null;
            }
            sub() {
                return [
                    this.Rows(),
                    ...this.sidebar_showed() ? [this.Copy()] : []
                ];
            }
            syntax() {
                return this.$.$mol_syntax2_md_code;
            }
            uri_base() {
                return $mol_dom_context.document.location.href;
            }
            uri_resolve(uri) {
                if (/^(\w+script+:)+/.test(uri))
                    return null;
                try {
                    const url = new URL(uri, this.uri_base());
                    return url.toString();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return null;
                }
            }
            text_export() {
                return this.text() + '\n';
            }
            row_theme(row) {
                return this.row_themes()[row - 1];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_text_code.prototype, "text_lines", null);
        __decorate([
            $mol_mem
        ], $mol_text_code.prototype, "rows", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code.prototype, "row_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code.prototype, "find_pos", null);
        __decorate([
            $mol_mem
        ], $mol_text_code.prototype, "sub", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code.prototype, "uri_resolve", null);
        $$.$mol_text_code = $mol_text_code;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem, px } = $mol_style_unit;
        $mol_style_define($mol_text_code, {
            whiteSpace: 'pre-wrap',
            font: {
                family: 'monospace',
            },
            Rows: {
                padding: $mol_gap.text,
                minWidth: 0,
            },
            Row: {
                font: {
                    family: 'inherit',
                },
            },
            Copy: {
                alignSelf: 'flex-start',
                justifySelf: 'flex-start',
            },
            '@': {
                'mol_text_code_sidebar_showed': {
                    true: {
                        $mol_text_code_line: {
                            margin: {
                                left: rem(1.75),
                            },
                        },
                    },
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_float) = class $mol_float extends ($.$mol_view) {
		style(){
			return {...(super.style()), "minHeight": "auto"};
		}
	};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/float/float.view.css", "[mol_float] {\n\tposition: sticky;\n\ttop: 0;\n\tleft: 0;\n\tz-index: var(--mol_layer_float);\n\topacity: 1;\n\ttransition: opacity .25s ease-in;\n\tdisplay: block;\n\tbackground: linear-gradient( var(--mol_theme_card), var(--mol_theme_card) ), var(--mol_theme_back);\n\tbox-shadow: 0 0 .5rem hsla(0,0%,0%,.25);\n}\n\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_check) = class $mol_check extends ($.$mol_button_minor) {
		checked(next){
			if(next !== undefined) return next;
			return false;
		}
		aria_checked(){
			return "false";
		}
		aria_role(){
			return "checkbox";
		}
		Icon(){
			return null;
		}
		title(){
			return "";
		}
		Title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.title())]);
			return obj;
		}
		label(){
			return [(this.Title())];
		}
		attr(){
			return {
				...(super.attr()), 
				"mol_check_checked": (this.checked()), 
				"aria-checked": (this.aria_checked()), 
				"role": (this.aria_role())
			};
		}
		sub(){
			return [(this.Icon()), (this.label())];
		}
	};
	($mol_mem(($.$mol_check.prototype), "checked"));
	($mol_mem(($.$mol_check.prototype), "Title"));


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/check.css", "[mol_check] {\n\tflex: 0 0 auto;\n\tjustify-content: flex-start;\n\talign-content: center;\n\t/* align-items: flex-start; */\n\tborder: none;\n\tfont-weight: inherit;\n\tbox-shadow: none;\n\ttext-align: left;\n\tdisplay: inline-flex;\n\tflex-wrap: nowrap;\n}\n\n[mol_check_title] {\n\tflex-shrink: 1;\n}\n");
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check extends $.$mol_check {
            click(next) {
                if (next?.defaultPrevented)
                    return;
                this.checked(!this.checked());
                if (next)
                    next.preventDefault();
            }
            sub() {
                return [
                    ...$mol_maybe(this.Icon()),
                    ...this.label(),
                ];
            }
            label() {
                return this.title() ? super.label() : [];
            }
            aria_checked() {
                return String(this.checked());
            }
        }
        $$.$mol_check = $mol_check;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_icon_chevron) = class $mol_icon_chevron extends ($.$mol_icon) {
		path(){
			return "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z";
		}
	};


;
"use strict";

;
	($.$mol_check_expand) = class $mol_check_expand extends ($.$mol_check) {
		level_style(){
			return "0px";
		}
		expanded(next){
			if(next !== undefined) return next;
			return false;
		}
		expandable(){
			return false;
		}
		Icon(){
			const obj = new this.$.$mol_icon_chevron();
			return obj;
		}
		level(){
			return 0;
		}
		style(){
			return {...(super.style()), "paddingLeft": (this.level_style())};
		}
		checked(next){
			return (this.expanded(next));
		}
		enabled(){
			return (this.expandable());
		}
	};
	($mol_mem(($.$mol_check_expand.prototype), "expanded"));
	($mol_mem(($.$mol_check_expand.prototype), "Icon"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check_expand extends $.$mol_check_expand {
            level_style() {
                return `${this.level() * 1 - 1}rem`;
            }
            expandable() {
                return this.expanded() !== null;
            }
        }
        $$.$mol_check_expand = $mol_check_expand;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/expand/expand.view.css", "[mol_check_expand] {\n\tmin-width: 20px;\n}\n\n:where([mol_check_expand][disabled]) [mol_check_expand_icon] {\n\tvisibility: hidden;\n}\n\n[mol_check_expand_icon] {\n\tbox-shadow: none;\n\tmargin-left: -0.375rem;\n}\n[mol_check_expand_icon] {\n\ttransform: rotateZ(0deg);\n}\n\n:where([mol_check_checked]) [mol_check_expand_icon] {\n\ttransform: rotateZ(90deg);\n}\n\n[mol_check_expand_icon] {\n\tvertical-align: text-top;\n}\n\n[mol_check_expand_label] {\n\tmargin-left: 0;\n}\n");
})($ || ($ = {}));

;
	($.$mol_grid) = class $mol_grid extends ($.$mol_view) {
		rows(){
			return [];
		}
		Table(){
			const obj = new this.$.$mol_grid_table();
			(obj.sub) = () => ((this.rows()));
			return obj;
		}
		head_cells(){
			return [];
		}
		cells(id){
			return [];
		}
		cell_content(id){
			return [];
		}
		cell_content_text(id){
			return (this.cell_content(id));
		}
		cell_content_number(id){
			return (this.cell_content(id));
		}
		col_head_content(id){
			return [];
		}
		cell_level(id){
			return 0;
		}
		cell_expanded(id, next){
			if(next !== undefined) return next;
			return false;
		}
		needle(){
			return "";
		}
		cell_value(id){
			return "";
		}
		Cell_dimmer(id){
			const obj = new this.$.$mol_dimmer();
			(obj.needle) = () => ((this.needle()));
			(obj.haystack) = () => ((this.cell_value(id)));
			return obj;
		}
		row_height(){
			return 32;
		}
		row_ids(){
			return [];
		}
		row_id(id){
			return null;
		}
		col_ids(){
			return [];
		}
		records(){
			return {};
		}
		record(id){
			return null;
		}
		hierarchy(){
			return null;
		}
		hierarchy_col(){
			return "";
		}
		minimal_width(){
			return 0;
		}
		sub(){
			return [(this.Head()), (this.Table())];
		}
		Head(){
			const obj = new this.$.$mol_grid_row();
			(obj.cells) = () => ((this.head_cells()));
			return obj;
		}
		Row(id){
			const obj = new this.$.$mol_grid_row();
			(obj.minimal_height) = () => ((this.row_height()));
			(obj.minimal_width) = () => ((this.minimal_width()));
			(obj.cells) = () => ((this.cells(id)));
			return obj;
		}
		Cell(id){
			const obj = new this.$.$mol_view();
			return obj;
		}
		cell(id){
			return null;
		}
		Cell_text(id){
			const obj = new this.$.$mol_grid_cell();
			(obj.sub) = () => ((this.cell_content_text(id)));
			return obj;
		}
		Cell_number(id){
			const obj = new this.$.$mol_grid_number();
			(obj.sub) = () => ((this.cell_content_number(id)));
			return obj;
		}
		Col_head(id){
			const obj = new this.$.$mol_float();
			(obj.dom_name) = () => ("th");
			(obj.sub) = () => ((this.col_head_content(id)));
			return obj;
		}
		Cell_branch(id){
			const obj = new this.$.$mol_check_expand();
			(obj.level) = () => ((this.cell_level(id)));
			(obj.label) = () => ((this.cell_content(id)));
			(obj.expanded) = (next) => ((this.cell_expanded(id, next)));
			return obj;
		}
		Cell_content(id){
			return [(this.Cell_dimmer(id))];
		}
	};
	($mol_mem(($.$mol_grid.prototype), "Table"));
	($mol_mem_key(($.$mol_grid.prototype), "cell_expanded"));
	($mol_mem_key(($.$mol_grid.prototype), "Cell_dimmer"));
	($mol_mem(($.$mol_grid.prototype), "Head"));
	($mol_mem_key(($.$mol_grid.prototype), "Row"));
	($mol_mem_key(($.$mol_grid.prototype), "Cell"));
	($mol_mem_key(($.$mol_grid.prototype), "Cell_text"));
	($mol_mem_key(($.$mol_grid.prototype), "Cell_number"));
	($mol_mem_key(($.$mol_grid.prototype), "Col_head"));
	($mol_mem_key(($.$mol_grid.prototype), "Cell_branch"));
	($.$mol_grid_table) = class $mol_grid_table extends ($.$mol_list) {};
	($.$mol_grid_row) = class $mol_grid_row extends ($.$mol_view) {
		cells(){
			return [];
		}
		sub(){
			return (this.cells());
		}
	};
	($.$mol_grid_cell) = class $mol_grid_cell extends ($.$mol_view) {
		minimal_height(){
			return 40;
		}
	};
	($.$mol_grid_number) = class $mol_grid_number extends ($.$mol_grid_cell) {};


;
"use strict";
var $;
(function ($) {
    class $mol_state_session extends $mol_object {
        static 'native()';
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $mol_dom_context.sessionStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static value(key, next) {
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_session.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_state_session, "value", null);
    $.$mol_state_session = $mol_state_session;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_grid extends $.$mol_grid {
            head_cells() {
                return this.col_ids().map(colId => this.Col_head(colId));
            }
            col_head_content(colId) {
                return [colId];
            }
            rows() {
                return this.row_ids().map(id => this.Row(id));
            }
            cells(row_id) {
                return this.col_ids().map(col_id => this.Cell({ row: row_id, col: col_id }));
            }
            col_type(col_id) {
                if (col_id === this.hierarchy_col())
                    return 'branch';
                const rowFirst = this.row_id(0);
                const val = this.record(rowFirst[rowFirst.length - 1])[col_id];
                if (typeof val === 'number')
                    return 'number';
                return 'text';
            }
            Cell(id) {
                switch (this.col_type(id.col).valueOf()) {
                    case 'branch': return this.Cell_branch(id);
                    case 'number': return this.Cell_number(id);
                }
                return this.Cell_text(id);
            }
            cell_content(id) {
                return [this.record(id.row[id.row.length - 1])[id.col]];
            }
            cell_content_text(id) {
                return this.cell_content(id).map(val => typeof val === 'object' ? JSON.stringify(val) : val);
            }
            records() {
                return [];
            }
            record(id) {
                return this.records()[id];
            }
            record_ids() {
                return Object.keys(this.records());
            }
            row_id(index) {
                return this.row_ids().slice(index, index + 1).valueOf()[0];
            }
            col_ids() {
                const rowFirst = this.row_id(0);
                if (rowFirst === void 0)
                    return [];
                const record = this.record(rowFirst[rowFirst.length - 1]);
                if (!record)
                    return [];
                return Object.keys(record);
            }
            hierarchy() {
                const hierarchy = {};
                const root = hierarchy[''] = {
                    id: '',
                    parent: null,
                    sub: [],
                };
                this.record_ids().map(id => {
                    root.sub.push(hierarchy[id] = {
                        id,
                        parent: root,
                        sub: [],
                    });
                });
                return hierarchy;
            }
            row_sub_ids(row) {
                return this.hierarchy()[row[row.length - 1]].sub.map(child => row.concat(child.id));
            }
            row_root_id() {
                return [''];
            }
            cell_level(id) {
                return id.row.length - 1;
            }
            row_ids() {
                const next = [];
                const add = (row) => {
                    next.push(row);
                    if (this.row_expanded(row)) {
                        this.row_sub_ids(row).forEach(child => add(child));
                    }
                };
                this.row_sub_ids(this.row_root_id()).forEach(child => add(child));
                return next;
            }
            row_expanded(row_id, next) {
                if (!this.row_sub_ids(row_id).length)
                    return null;
                const key = `row_expanded(${JSON.stringify(row_id)})`;
                const next2 = $mol_state_session.value(key, next);
                return (next2 == null) ? this.row_expanded_default(row_id) : next2;
            }
            row_expanded_default(row_id) {
                return true;
            }
            cell_expanded(id, next) {
                return this.row_expanded(id.row, next);
            }
            sub() {
                this.head_cells();
                this.rows();
                return super.sub();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "head_cells", null);
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "rows", null);
        __decorate([
            $mol_mem_key
        ], $mol_grid.prototype, "col_type", null);
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "record_ids", null);
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "hierarchy", null);
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "row_ids", null);
        $$.$mol_grid = $mol_grid;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/grid/grid.view.css", "[mol_grid] {\n\tdisplay: block;\n\tflex: 0 1 auto;\n\tposition: relative;\n\toverflow-x: auto;\n}\n\n[mol_grid_gap] {\n\tposition: absolute;\n\tpadding: .1px;\n\ttop: 0;\n\ttransform: translateZ(0);\n}\n\n[mol_grid_table] {\n\tborder-spacing: 0;\n\tdisplay: table-row-group;\n\tposition: relative;\n}\n\n[mol_grid_table] > * {\n\tdisplay: table-row;\n\ttransition: none;\n}\n\n[mol_grid_head] > *,\n[mol_grid_table] > * > * {\n\tdisplay: table-cell;\n\tpadding: var(--mol_gap_text);\n\twhite-space: nowrap;\n\tvertical-align: middle;\n\tbox-shadow: inset 2px 2px 0 -1px var(--mol_theme_line);\n}\n\n[mol_grid_row]:where(:first-child) > * {\n\tbox-shadow: inset 2px 0 0 -1px var(--mol_theme_line);\n}\n\n[mol_grid_table] > * > *:where(:first-child) {\n\tbox-shadow: inset 0px 2px 0 -1px var(--mol_theme_line);\n}\n\n[mol_grid_head] > * {\n\tbox-shadow: inset 2px -2px 0 -1px var(--mol_theme_line);\n}\n\n[mol_grid_head] > *:where(:first-child) {\n\tbox-shadow: inset 0px -2px 0 -1px var(--mol_theme_line);\n}\n\n[mol_grid_table] > [mol_grid_row]:where(:first-child) > *:where(:first-child) {\n\tbox-shadow: none;\n}\t\n\n[mol_grid_head] {\n\tdisplay: table-row;\n\ttransform: none !important;\n}\n\n/* [mol_grid_cell_number] {\n\ttext-align: right;\n} */\n\n[mol_grid_col_head] {\n\tfont-weight: inherit;\n\ttext-align: inherit;\n\tdisplay: table-cell;\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_grid_cell_dimmer] {\n\tdisplay: inline-block;\n\tvertical-align: inherit;\n}\n");
})($ || ($ = {}));

;
	($.$mol_image) = class $mol_image extends ($.$mol_view) {
		uri(){
			return "";
		}
		title(){
			return "";
		}
		loading(){
			return "lazy";
		}
		decoding(){
			return "async";
		}
		cors(){
			return null;
		}
		natural_width(){
			return 0;
		}
		natural_height(){
			return 0;
		}
		load(next){
			if(next !== undefined) return next;
			return null;
		}
		dom_name(){
			return "img";
		}
		attr(){
			return {
				...(super.attr()), 
				"src": (this.uri()), 
				"title": (this.hint()), 
				"alt": (this.title()), 
				"loading": (this.loading()), 
				"decoding": (this.decoding()), 
				"crossOrigin": (this.cors()), 
				"width": (this.natural_width()), 
				"height": (this.natural_height())
			};
		}
		event(){
			return {"load": (next) => (this.load(next))};
		}
		minimal_width(){
			return 16;
		}
		minimal_height(){
			return 16;
		}
	};
	($mol_mem(($.$mol_image.prototype), "load"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_image extends $.$mol_image {
            natural_width(next) {
                const dom = this.dom_node();
                if (dom.naturalWidth)
                    return dom.naturalWidth;
                const found = this.uri().match(/\bwidth=(\d+)/);
                return found ? Number(found[1]) : null;
            }
            natural_height(next) {
                const dom = this.dom_node();
                if (dom.naturalHeight)
                    return dom.naturalHeight;
                const found = this.uri().match(/\bheight=(\d+)/);
                return found ? Number(found[1]) : null;
            }
            load() {
                this.natural_width(null);
                this.natural_height(null);
            }
        }
        __decorate([
            $mol_mem
        ], $mol_image.prototype, "natural_width", null);
        __decorate([
            $mol_mem
        ], $mol_image.prototype, "natural_height", null);
        $$.$mol_image = $mol_image;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/image/image.view.css", "[mol_image] {\n\tborder-radius: var(--mol_gap_round);\n\toverflow: hidden;\n\tflex: 0 1 auto;\n\tmax-width: 100%;\n\tobject-fit: cover;\n\theight: fit-content;\n}\n");
})($ || ($ = {}));

;
	($.$mol_link_iconed) = class $mol_link_iconed extends ($.$mol_link) {
		icon(){
			return "";
		}
		Icon(){
			const obj = new this.$.$mol_image();
			(obj.uri) = () => ((this.icon()));
			(obj.title) = () => ("");
			return obj;
		}
		title(){
			return (this.uri());
		}
		sub(){
			return [(this.Icon())];
		}
		content(){
			return [(this.title())];
		}
		host(){
			return "";
		}
	};
	($mol_mem(($.$mol_link_iconed.prototype), "Icon"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link_iconed extends $.$mol_link_iconed {
            icon() {
                return `https://favicon.yandex.net/favicon/${this.host()}?color=0,0,0,0&size=32&stub=1`;
            }
            host() {
                const base = this.$.$mol_state_arg.href();
                const url = new URL(this.uri(), base);
                return url.hostname;
            }
            title() {
                const uri = this.uri();
                const host = this.host();
                const suffix = (host ? uri.split(this.host(), 2)[1] : uri)?.replace(/^[\/\?#!]+/, '');
                return decodeURIComponent(suffix || host).replace(/^\//, ' ');
            }
            sub() {
                return [
                    ...this.host() ? [this.Icon()] : [],
                    ...this.content() ? [' ', ...this.content()] : [],
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_link_iconed.prototype, "icon", null);
        __decorate([
            $mol_mem
        ], $mol_link_iconed.prototype, "host", null);
        __decorate([
            $mol_mem
        ], $mol_link_iconed.prototype, "title", null);
        __decorate([
            $mol_mem
        ], $mol_link_iconed.prototype, "sub", null);
        $$.$mol_link_iconed = $mol_link_iconed;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/link/iconed/iconed.view.css", "[mol_link_iconed] {\n\talign-items: baseline;\n\tdisplay: inline-flex;\n\tpadding: var(--mol_gap_text);\n}\n\n[mol_link_iconed_icon] {\n\tbox-shadow: none;\n\theight: 1.5em;\n\twidth: 1em;\n\tflex: 0 0 auto;\n\tdisplay: inline-block;\n\talign-self: normal;\n\tvertical-align: top;\n\tborder-radius: 0;\n\tobject-fit: scale-down;\n\topacity: .75;\n}\n\n[mol_theme=\"$mol_theme_dark\"] [mol_link_iconed_icon] {\n\tfilter: var(--mol_theme_image);\n}\n");
})($ || ($ = {}));

;
	($.$mol_icon_youtube) = class $mol_icon_youtube extends ($.$mol_icon) {
		path(){
			return "M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z";
		}
	};


;
"use strict";

;
	($.$mol_embed_service) = class $mol_embed_service extends ($.$mol_check) {
		active(next){
			if(next !== undefined) return next;
			return false;
		}
		title(){
			return "";
		}
		video_preview(){
			return "";
		}
		Image(){
			const obj = new this.$.$mol_image();
			(obj.title) = () => ((this.title()));
			(obj.uri) = () => ((this.video_preview()));
			return obj;
		}
		Hint(){
			const obj = new this.$.$mol_icon_youtube();
			return obj;
		}
		video_embed(){
			return "";
		}
		Frame(){
			const obj = new this.$.$mol_frame();
			(obj.title) = () => ((this.title()));
			(obj.uri) = () => ((this.video_embed()));
			return obj;
		}
		uri(){
			return "";
		}
		video_id(){
			return "";
		}
		checked(next){
			return (this.active(next));
		}
		sub(){
			return [
				(this.Image()), 
				(this.Hint()), 
				(this.Frame())
			];
		}
	};
	($mol_mem(($.$mol_embed_service.prototype), "active"));
	($mol_mem(($.$mol_embed_service.prototype), "Image"));
	($mol_mem(($.$mol_embed_service.prototype), "Hint"));
	($mol_mem(($.$mol_embed_service.prototype), "Frame"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_embed_service extends $.$mol_embed_service {
            sub() {
                return this.active()
                    ? [this.Frame()]
                    : [this.Image(), this.Hint()];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_embed_service.prototype, "sub", null);
        $$.$mol_embed_service = $mol_embed_service;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/embed/service/service.view.css", "[mol_embed_service] {\n\tpadding: 0;\n\tmax-width: 100%;\n}\n\n[mol_embed_service_image] {\n\tflex: auto 1 1;\n\twidth: 100vw;\n}\n\n[mol_embed_service_frame] {\n\twidth: 100vw;\n}\n\n[mol_embed_service_hint] {\n\tposition: absolute;\n    left: 50%;\n    top: 50%;\n    width: 50%;\n    height: 50%;\n    opacity: 0.3;\n    transform: translate(-50%, -50%);\n}\n\n[mol_embed_service]:hover [mol_embed_service_hint] {\n\topacity: .6;\n}\n");
})($ || ($ = {}));

;
	($.$mol_embed_youtube) = class $mol_embed_youtube extends ($.$mol_embed_service) {};


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_embed_youtube extends $.$mol_embed_youtube {
            video_embed() {
                return `https://www.youtube.com/embed/${encodeURIComponent(this.video_id())}?autoplay=1&loop=1`;
            }
            video_id() {
                return this.uri().match(/^https\:\/\/www\.youtube\.com\/(?:embed\/|shorts\/|watch\?v=)([^\/&?#]+)/)?.[1]
                    ?? this.uri().match(/^https\:\/\/youtu\.be\/([^\/&?#]+)/)?.[1]
                    ?? 'about:blank';
            }
            video_preview() {
                return `https://i.ytimg.com/vi/${this.video_id()}/sddefault.jpg`;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_embed_youtube.prototype, "video_embed", null);
        __decorate([
            $mol_mem
        ], $mol_embed_youtube.prototype, "video_id", null);
        __decorate([
            $mol_mem
        ], $mol_embed_youtube.prototype, "video_preview", null);
        $$.$mol_embed_youtube = $mol_embed_youtube;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_embed_rutube) = class $mol_embed_rutube extends ($.$mol_embed_service) {};


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_embed_rutube extends $.$mol_embed_rutube {
            video_embed() {
                return `https://rutube.ru/play/embed/${encodeURIComponent(this.video_id())}`;
            }
            video_id() {
                return this.uri().match(/^https:\/\/rutube.ru\/video\/([^\/&?#]+)/)?.[1] ?? 'about:blank';
            }
            video_preview() {
                return `https://rutube.ru/api/video/${this.video_id()}/thumbnail/?redirect=1`;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_embed_rutube.prototype, "video_embed", null);
        __decorate([
            $mol_mem
        ], $mol_embed_rutube.prototype, "video_id", null);
        __decorate([
            $mol_mem
        ], $mol_embed_rutube.prototype, "video_preview", null);
        $$.$mol_embed_rutube = $mol_embed_rutube;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_embed_vklive) = class $mol_embed_vklive extends ($.$mol_embed_service) {};


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_embed_vklive extends $.$mol_embed_vklive {
            video_embed() {
                return `https://live.vkvideo.ru/app/embed/${this.channel_id()}/${this.video_id()}`;
            }
            channel_id() {
                return this.uri().match(/^https:\/\/live\.vkvideo\.ru\/([^\/&?#]+)/)?.[1] ?? '';
            }
            video_id() {
                return this.uri().match(/^https:\/\/live\.vkvideo\.ru\/[^\/&?#]+\/record\/([^\/&?#]+)/)?.[1] ?? '';
            }
            video_preview() {
                return `https://images.live.vkvideo.ru/public_video_stream/record/${this.video_id()}/preview`;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_embed_vklive.prototype, "video_embed", null);
        __decorate([
            $mol_mem
        ], $mol_embed_vklive.prototype, "channel_id", null);
        __decorate([
            $mol_mem
        ], $mol_embed_vklive.prototype, "video_id", null);
        __decorate([
            $mol_mem
        ], $mol_embed_vklive.prototype, "video_preview", null);
        $$.$mol_embed_vklive = $mol_embed_vklive;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_embed_any) = class $mol_embed_any extends ($.$mol_view) {
		title(){
			return "";
		}
		uri(){
			return "";
		}
		Image(){
			const obj = new this.$.$mol_image();
			(obj.title) = () => ((this.title()));
			(obj.uri) = () => ((this.uri()));
			return obj;
		}
		Object(){
			const obj = new this.$.$mol_embed_native();
			(obj.title) = () => ((this.title()));
			(obj.uri) = () => ((this.uri()));
			return obj;
		}
		Youtube(){
			const obj = new this.$.$mol_embed_youtube();
			(obj.title) = () => ((this.title()));
			(obj.uri) = () => ((this.uri()));
			return obj;
		}
		Rutube(){
			const obj = new this.$.$mol_embed_rutube();
			(obj.title) = () => ((this.title()));
			(obj.uri) = () => ((this.uri()));
			return obj;
		}
		Vklive(){
			const obj = new this.$.$mol_embed_vklive();
			(obj.title) = () => ((this.title()));
			(obj.uri) = () => ((this.uri()));
			return obj;
		}
	};
	($mol_mem(($.$mol_embed_any.prototype), "Image"));
	($mol_mem(($.$mol_embed_any.prototype), "Object"));
	($mol_mem(($.$mol_embed_any.prototype), "Youtube"));
	($mol_mem(($.$mol_embed_any.prototype), "Rutube"));
	($mol_mem(($.$mol_embed_any.prototype), "Vklive"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_embed_any extends $.$mol_embed_any {
            type() {
                try {
                    const uri = this.uri();
                    if (/\b(png|gif|jpg|jpeg|jfif|webp|svg)\b/.test(uri))
                        return 'image';
                    if (/^https:\/\/www\.youtube\.com\//.test(uri))
                        return 'youtube';
                    if (/^https:\/\/youtu\.be\//.test(uri))
                        return 'youtube';
                    if (/^https:\/\/rutube\.ru\//.test(uri))
                        return 'rutube';
                    if (/^https:\/\/live\.vkvideo\.ru\//.test(uri))
                        return 'vklive';
                }
                catch (error) {
                    $mol_fail_log(error);
                    return 'image';
                }
                return 'object';
            }
            sub() {
                switch (this.type()) {
                    case 'image': return [this.Image()];
                    case 'youtube': return [this.Youtube()];
                    case 'rutube': return [this.Rutube()];
                    case 'vklive': return [this.Vklive()];
                    default: return [this.Object()];
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_embed_any.prototype, "type", null);
        __decorate([
            $mol_mem
        ], $mol_embed_any.prototype, "sub", null);
        $$.$mol_embed_any = $mol_embed_any;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_expander) = class $mol_expander extends ($.$mol_list) {
		expanded(next){
			if(next !== undefined) return next;
			return false;
		}
		expandable(){
			return true;
		}
		label(){
			return [(this.title())];
		}
		Trigger(){
			const obj = new this.$.$mol_check_expand();
			(obj.checked) = (next) => ((this.expanded(next)));
			(obj.expandable) = () => ((this.expandable()));
			(obj.label) = () => ((this.label()));
			return obj;
		}
		Tools(){
			return null;
		}
		Label(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Trigger()), (this.Tools())]);
			return obj;
		}
		content(){
			return [];
		}
		Content(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.content()));
			return obj;
		}
		rows(){
			return [(this.Label()), (this.Content())];
		}
	};
	($mol_mem(($.$mol_expander.prototype), "expanded"));
	($mol_mem(($.$mol_expander.prototype), "Trigger"));
	($mol_mem(($.$mol_expander.prototype), "Label"));
	($mol_mem(($.$mol_expander.prototype), "Content"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_expander extends $.$mol_expander {
            rows() {
                return [
                    this.Label(),
                    ...this.expanded() ? [this.Content()] : []
                ];
            }
            expandable() {
                return this.content().length > 0;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_expander.prototype, "rows", null);
        $$.$mol_expander = $mol_expander;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/expander/expander.view.css", "[mol_expander] {\n\tflex-direction: column;\n}\n\n[mol_expander_label] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_expander_trigger] {\n\tflex: auto;\n\tposition: relative;\n}\n");
})($ || ($ = {}));

;
	($.$mol_text) = class $mol_text extends ($.$mol_list) {
		auto_scroll(){
			return null;
		}
		block_content(id){
			return [];
		}
		uri_resolve(id){
			return "";
		}
		quote_text(id){
			return "";
		}
		highlight(){
			return "";
		}
		list_type(id){
			return "-";
		}
		list_text(id){
			return "";
		}
		header_level(id){
			return 1;
		}
		header_arg(id){
			return {};
		}
		pre_text(id){
			return "";
		}
		pre_themes(id){
			return [];
		}
		code_sidebar_showed(){
			return true;
		}
		pre_sidebar_showed(){
			return (this.code_sidebar_showed());
		}
		table_head_cells(id){
			return [];
		}
		table_rows(id){
			return [];
		}
		table_cells(id){
			return [];
		}
		table_cell_text(id){
			return "";
		}
		grid_rows(id){
			return [];
		}
		grid_cells(id){
			return [];
		}
		grid_cell_text(id){
			return "";
		}
		line_text(id){
			return "";
		}
		line_type(id){
			return "";
		}
		line_content(id){
			return [];
		}
		code_syntax(){
			return null;
		}
		link_uri(id){
			return "";
		}
		link_host(id){
			return "";
		}
		spoiler_label(id){
			return "";
		}
		Spoiler_label(id){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.spoiler_label(id)));
			return obj;
		}
		spoiler_content(id){
			return "";
		}
		Spoiler_content(id){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.spoiler_content(id)));
			return obj;
		}
		uri_base(){
			return "";
		}
		text(){
			return "";
		}
		param(){
			return "";
		}
		flow_tokens(){
			return [];
		}
		block_text(id){
			return "";
		}
		auto(){
			return [(this.auto_scroll())];
		}
		Paragraph(id){
			const obj = new this.$.$mol_paragraph();
			(obj.sub) = () => ((this.block_content(id)));
			return obj;
		}
		Quote(id){
			const obj = new this.$.$mol_text();
			(obj.uri_resolve) = (id) => ((this.uri_resolve(id)));
			(obj.text) = () => ((this.quote_text(id)));
			(obj.highlight) = () => ((this.highlight()));
			(obj.auto_scroll) = () => (null);
			return obj;
		}
		List(id){
			const obj = new this.$.$mol_text_list();
			(obj.uri_resolve) = (id) => ((this.uri_resolve(id)));
			(obj.type) = () => ((this.list_type(id)));
			(obj.text) = () => ((this.list_text(id)));
			(obj.highlight) = () => ((this.highlight()));
			return obj;
		}
		item_index(id){
			return 0;
		}
		Header(id){
			const obj = new this.$.$mol_text_header();
			(obj.minimal_height) = () => (40);
			(obj.level) = () => ((this.header_level(id)));
			(obj.content) = () => ((this.block_content(id)));
			(obj.arg) = () => ((this.header_arg(id)));
			return obj;
		}
		Pre(id){
			const obj = new this.$.$mol_text_code();
			(obj.text) = () => ((this.pre_text(id)));
			(obj.row_themes) = () => ((this.pre_themes(id)));
			(obj.highlight) = () => ((this.highlight()));
			(obj.uri_resolve) = (id) => ((this.uri_resolve(id)));
			(obj.sidebar_showed) = () => ((this.pre_sidebar_showed()));
			return obj;
		}
		Cut(id){
			const obj = new this.$.$mol_view();
			(obj.dom_name) = () => ("hr");
			return obj;
		}
		Table(id){
			const obj = new this.$.$mol_grid();
			(obj.head_cells) = () => ((this.table_head_cells(id)));
			(obj.rows) = () => ((this.table_rows(id)));
			return obj;
		}
		Table_row(id){
			const obj = new this.$.$mol_grid_row();
			(obj.cells) = () => ((this.table_cells(id)));
			return obj;
		}
		Table_cell(id){
			const obj = new this.$.$mol_text();
			(obj.auto_scroll) = () => (null);
			(obj.highlight) = () => ((this.highlight()));
			(obj.uri_resolve) = (id) => ((this.uri_resolve(id)));
			(obj.text) = () => ((this.table_cell_text(id)));
			return obj;
		}
		Grid(id){
			const obj = new this.$.$mol_grid();
			(obj.rows) = () => ((this.grid_rows(id)));
			return obj;
		}
		Grid_row(id){
			const obj = new this.$.$mol_grid_row();
			(obj.cells) = () => ((this.grid_cells(id)));
			return obj;
		}
		Grid_cell(id){
			const obj = new this.$.$mol_text();
			(obj.auto_scroll) = () => (null);
			(obj.highlight) = () => ((this.highlight()));
			(obj.uri_resolve) = (id) => ((this.uri_resolve(id)));
			(obj.text) = () => ((this.grid_cell_text(id)));
			return obj;
		}
		String(id){
			const obj = new this.$.$mol_dimmer();
			(obj.dom_name) = () => ("span");
			(obj.needle) = () => ((this.highlight()));
			(obj.haystack) = () => ((this.line_text(id)));
			return obj;
		}
		Span(id){
			const obj = new this.$.$mol_text_span();
			(obj.dom_name) = () => ("span");
			(obj.type) = () => ((this.line_type(id)));
			(obj.sub) = () => ((this.line_content(id)));
			return obj;
		}
		Code_line(id){
			const obj = new this.$.$mol_text_code_line();
			(obj.numb_showed) = () => (false);
			(obj.highlight) = () => ((this.highlight()));
			(obj.text) = () => ((this.line_text(id)));
			(obj.uri_resolve) = (id) => ((this.uri_resolve(id)));
			(obj.syntax) = () => ((this.code_syntax()));
			return obj;
		}
		Link(id){
			const obj = new this.$.$mol_link_iconed();
			(obj.uri) = () => ((this.link_uri(id)));
			(obj.content) = () => ((this.line_content(id)));
			return obj;
		}
		Link_http(id){
			const obj = new this.$.$mol_link_iconed();
			(obj.uri) = () => ((this.link_uri(id)));
			(obj.content) = () => ([(this.link_host(id))]);
			return obj;
		}
		Embed(id){
			const obj = new this.$.$mol_embed_any();
			(obj.uri) = () => ((this.link_uri(id)));
			(obj.title) = () => ((this.line_text(id)));
			return obj;
		}
		Spoiler(id){
			const obj = new this.$.$mol_expander();
			(obj.label) = () => ([(this.Spoiler_label(id))]);
			(obj.content) = () => ([(this.Spoiler_content(id))]);
			return obj;
		}
	};
	($mol_mem_key(($.$mol_text.prototype), "Spoiler_label"));
	($mol_mem_key(($.$mol_text.prototype), "Spoiler_content"));
	($mol_mem_key(($.$mol_text.prototype), "Paragraph"));
	($mol_mem_key(($.$mol_text.prototype), "Quote"));
	($mol_mem_key(($.$mol_text.prototype), "List"));
	($mol_mem_key(($.$mol_text.prototype), "Header"));
	($mol_mem_key(($.$mol_text.prototype), "Pre"));
	($mol_mem_key(($.$mol_text.prototype), "Cut"));
	($mol_mem_key(($.$mol_text.prototype), "Table"));
	($mol_mem_key(($.$mol_text.prototype), "Table_row"));
	($mol_mem_key(($.$mol_text.prototype), "Table_cell"));
	($mol_mem_key(($.$mol_text.prototype), "Grid"));
	($mol_mem_key(($.$mol_text.prototype), "Grid_row"));
	($mol_mem_key(($.$mol_text.prototype), "Grid_cell"));
	($mol_mem_key(($.$mol_text.prototype), "String"));
	($mol_mem_key(($.$mol_text.prototype), "Span"));
	($mol_mem_key(($.$mol_text.prototype), "Code_line"));
	($mol_mem_key(($.$mol_text.prototype), "Link"));
	($mol_mem_key(($.$mol_text.prototype), "Link_http"));
	($mol_mem_key(($.$mol_text.prototype), "Embed"));
	($mol_mem_key(($.$mol_text.prototype), "Spoiler"));
	($.$mol_text_header) = class $mol_text_header extends ($.$mol_paragraph) {
		arg(){
			return {};
		}
		content(){
			return [];
		}
		Link(){
			const obj = new this.$.$mol_link();
			(obj.arg) = () => ((this.arg()));
			(obj.hint) = () => ((this.$.$mol_locale.text("$mol_text_header_Link_hint")));
			(obj.sub) = () => ((this.content()));
			return obj;
		}
		level(){
			return 1;
		}
		sub(){
			return [(this.Link())];
		}
	};
	($mol_mem(($.$mol_text_header.prototype), "Link"));
	($.$mol_text_span) = class $mol_text_span extends ($.$mol_paragraph) {
		type(){
			return "";
		}
		dom_name(){
			return "span";
		}
		attr(){
			return {...(super.attr()), "mol_text_type": (this.type())};
		}
	};


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text extends $.$mol_text {
            flow_tokens() {
                const tokens = [];
                this.$.$mol_syntax2_md_flow.tokenize(this.text(), (name, found, chunks) => tokens.push({ name, found, chunks }));
                return tokens;
            }
            block_type(index) {
                return this.flow_tokens()[index].name;
            }
            rows() {
                return this.flow_tokens().map(({ name }, index) => {
                    switch (name) {
                        case 'quote': return this.Quote(index);
                        case 'spoiler': return this.Spoiler(index);
                        case 'header': return this.Header(index);
                        case 'list': return this.List(index);
                        case 'code': return this.Pre(index);
                        case 'code-indent': return this.Pre(index);
                        case 'table': return this.Table(index);
                        case 'grid': return this.Grid(index);
                        case 'cut': return this.Cut(index);
                        default: return this.Paragraph(index);
                    }
                });
            }
            param() {
                return this.toString().replace(/^.*?[\)>]\./, '').replace(/[(<>)]/g, '');
            }
            header_level(index) {
                return this.flow_tokens()[index].chunks[0].length;
            }
            header_arg(index) {
                return {
                    [this.param()]: this.block_text(index)
                };
            }
            list_type(index) {
                return this.flow_tokens()[index].chunks[1] ?? '';
            }
            item_index(index) {
                return this.flow_tokens().slice(0, index).filter(token => token.name === 'block').length + 1;
            }
            pre_text(index) {
                const token = this.flow_tokens()[index];
                return (token.chunks[2] ?? token.chunks[0].replace(/^(\t| (?:\+\+|--|\*\*|  ) )/gm, '')).replace(/[\n\r]*$/, '');
            }
            pre_themes(index) {
                const token = this.flow_tokens()[index];
                const names = {
                    ' ** ': '$mol_theme_accent',
                    ' ++ ': '$mol_theme_current',
                    ' -- ': '$mol_theme_special',
                };
                return token.chunks[0].split('\n')
                    .map(line => names[line.match(/^ (?:\+\+|--|\*\*|  ) /gm)?.[0] ?? ''] ?? null);
            }
            quote_text(index) {
                return this.flow_tokens()[index].chunks[0].replace(/^[>"] /mg, '');
            }
            list_text(index) {
                return this.flow_tokens()[index].chunks[0].replace(/^([-*+]|(?:\d+[\.\)])+) ?/mg, '').replace(/^  ?/mg, '');
            }
            cell_content(indexBlock) {
                return this.flow_tokens()[indexBlock].chunks[0]
                    .split(/\r?\n/g)
                    .filter(row => row && !/\|--/.test(row))
                    .map((row, rowId) => {
                    return row.split(/\|/g)
                        .filter(cell => cell)
                        .map((cell, cellId) => cell.trim());
                });
            }
            table_rows(blockId) {
                return this.cell_content(blockId)
                    .slice(1)
                    .map((row, rowId) => this.Table_row({ block: blockId, row: rowId + 1 }));
            }
            table_head_cells(blockId) {
                return this.cell_content(blockId)[0]
                    .map((cell, cellId) => this.Table_cell({ block: blockId, row: 0, cell: cellId }));
            }
            table_cells(id) {
                return this.cell_content(id.block)[id.row]
                    .map((cell, cellId) => this.Table_cell({ block: id.block, row: id.row, cell: cellId }));
            }
            table_cell_text(id) {
                return this.cell_content(id.block)[id.row][id.cell];
            }
            grid_content(indexBlock) {
                return [...this.flow_tokens()[indexBlock].chunks[0].match(/(?:^! .*?$\r?\n?)+(?:^ +! .*?$\r?\n?)*/gm)]
                    .map((row, rowId) => {
                    const cells = [];
                    for (const line of row.trim().split(/\r?\n/)) {
                        const [_, indent, content] = /^( *)! (.*)/.exec(line);
                        const col = Math.ceil(indent.length / 2);
                        cells[col] = (cells[col] ? cells[col] + '\n' : '') + content;
                    }
                    return cells;
                });
            }
            grid_rows(blockId) {
                return this.grid_content(blockId)
                    .map((row, rowId) => this.Grid_row({ block: blockId, row: rowId }));
            }
            grid_cells(id) {
                return this.grid_content(id.block)[id.row]
                    .map((cell, cellId) => this.Grid_cell({ block: id.block, row: id.row, cell: cellId }));
            }
            grid_cell_text(id) {
                return this.grid_content(id.block)[id.row][id.cell];
            }
            uri_base() {
                return $mol_dom_context.document.location.href;
            }
            uri_base_abs() {
                return new URL(this.uri_base(), $mol_dom_context.document.location.href);
            }
            uri_resolve(uri) {
                if (/^(\w+script+:)+/.test(uri))
                    return null;
                if (/^#\!/.test(uri)) {
                    const params = {};
                    for (const chunk of uri.slice(2).split(this.$.$mol_state_arg.separator)) {
                        if (!chunk)
                            continue;
                        const vals = chunk.split('=').map(decodeURIComponent);
                        params[vals.shift()] = vals.join('=');
                    }
                    return this.$.$mol_state_arg.link(params);
                }
                try {
                    const url = new URL(uri, this.uri_base_abs());
                    return url.toString();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return null;
                }
            }
            code_syntax() {
                return this.$.$mol_syntax2_md_code;
            }
            block_text(index) {
                const token = this.flow_tokens()[index];
                switch (token.name) {
                    case 'header': return token.chunks[2];
                    default: return token.chunks[0];
                }
            }
            block_content(index) {
                return this.line_content([index]);
            }
            line_tokens(path) {
                const tokens = [];
                this.$.$mol_syntax2_md_line.tokenize(this.line_text(path), (name, found, chunks) => tokens.push({ name, found, chunks }));
                return tokens;
            }
            line_token(path) {
                const tokens = this.line_tokens(path.slice(0, path.length - 1));
                return tokens[path[path.length - 1]];
            }
            line_type(path) {
                return this.line_token(path).name;
            }
            line_text(path) {
                if (path.length === 1)
                    return this.block_text(path[0]);
                const { name, found, chunks } = this.line_token(path);
                switch (name) {
                    case 'link': return chunks[0] || chunks[1].replace(/^.*?\/\/|\/.*$/g, '');
                    case 'text-link': return chunks[0] || chunks[1].replace(/^.*?\/\/|\/.*$/g, '');
                    default: return (chunks[0] || chunks[1] || chunks[2]) ?? found;
                }
            }
            line_content(path) {
                return this.line_tokens(path).map(({ name, chunks }, index) => {
                    const path2 = [...path, index];
                    switch (name) {
                        case 'embed': return this.Embed(path2);
                        case 'link': return this.Link(path2);
                        case 'text-link-http': return this.Link_http(path2);
                        case 'text-link': return this.Link(path2);
                        case 'image-link': return this.Embed(path2);
                        case 'code': return this.Code_line(path2);
                        case '': return this.String(path2);
                        default: return this.Span(path2);
                    }
                });
            }
            link_uri(path) {
                const token = this.line_token(path);
                const uri = this.uri_resolve(token.chunks[1] ?? token.found);
                if (!uri)
                    throw new Error('Bad link');
                return uri;
            }
            link_host(path) {
                return this.link_uri(path).replace(/^.*?\/\/|\/.*$/g, '');
            }
            auto_scroll() {
                for (const [index, token] of this.flow_tokens().entries()) {
                    if (token.name !== 'header')
                        continue;
                    const header = this.Header(index);
                    if (!header.Link().current())
                        continue;
                    new $mol_after_tick(() => this.ensure_visible(header));
                }
            }
            spoiler_rows(index) {
                return this.flow_tokens()[index].chunks[0].replace(/^[\?] /mg, '').split('\n');
            }
            spoiler_label(index) {
                return this.spoiler_rows(index)[0];
            }
            spoiler_content(index) {
                return this.spoiler_rows(index).slice(1).join('\n');
            }
        }
        __decorate([
            $mol_mem
        ], $mol_text.prototype, "flow_tokens", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "block_type", null);
        __decorate([
            $mol_mem
        ], $mol_text.prototype, "rows", null);
        __decorate([
            $mol_mem
        ], $mol_text.prototype, "param", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "header_level", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "header_arg", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "pre_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "pre_themes", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "quote_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "list_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "cell_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "table_rows", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "table_head_cells", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "table_cells", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "table_cell_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "grid_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "grid_rows", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "grid_cells", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "grid_cell_text", null);
        __decorate([
            $mol_mem
        ], $mol_text.prototype, "uri_base_abs", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "uri_resolve", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "block_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_tokens", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_token", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_type", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "link_uri", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "link_host", null);
        __decorate([
            $mol_mem
        ], $mol_text.prototype, "auto_scroll", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "spoiler_rows", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "spoiler_label", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "spoiler_content", null);
        $$.$mol_text = $mol_text;
        class $mol_text_header extends $.$mol_text_header {
            dom_name() {
                return 'h' + this.level();
            }
        }
        $$.$mol_text_header = $mol_text_header;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/text/text/text.view.css", "[mol_text] {\n\tline-height: 1.5em;\n\tbox-sizing: border-box;\n\tborder-radius: var(--mol_gap_round);\n\twhite-space: pre-line;\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex: 0 0 auto;\n\ttab-size: 4;\n}\n\n[mol_text_paragraph] {\n\tpadding: var(--mol_gap_text);\n\toverflow: auto;\n\toverflow-x: overlay;\n\tmax-width: 100%;\n\tdisplay: block;\n\tmax-width: 60rem;\n\tbreak-inside: avoid;\n}\n\n[mol_text_spoiler_label_paragraph] {\n\tpadding: 0;\n}\n\n[mol_text_span] {\n\tdisplay: inline;\n}\n\n[mol_text_string] {\n\tdisplay: inline;\n\tflex: 0 1 auto;\n\twhite-space: normal;\n}\n\n[mol_text_quote] {\n\tmargin: var(--mol_gap_block);\n\tpadding: var(--mol_gap_block);\n\tbackground: var(--mol_theme_card);\n\tbox-shadow: 0 0 0 1px var(--mol_theme_back);\n\tbreak-inside: avoid;\n}\n\n[mol_text_header] {\n\tdisplay: block;\n\ttext-shadow: 0 0;\n\tfont-weight: normal;\n\tbreak-after: avoid;\n}\n\n* + [mol_text_header] {\n\tmargin-top: 0.75rem;\n}\n\nh1[mol_text_header] {\n\tfont-size: 1.5rem;\n}\n\nh2[mol_text_header] {\n\tfont-size: 1.5rem;\n\tfont-style: italic;\n}\n\nh3[mol_text_header] {\n\tfont-size: 1.25rem;\n}\n\nh4[mol_text_header] {\n\tfont-size: 1.25em;\n\tfont-style: italic;\n}\n\nh5[mol_text_header] {\n\tfont-size: 1rem;\n}\n\nh6[mol_text_header] {\n\tfont-size: 1rem;\n\tfont-style: italic;\n}\n\n[mol_text_header_link] {\n\tcolor: inherit;\n}\n\n[mol_text_table] {\n\tbreak-inside: avoid;\n}\n\n[mol_text_table_cell] {\n\twidth: auto;\n\tdisplay: table-cell;\n\tvertical-align: baseline;\n\tpadding: 0;\n\tborder-radius: 0;\n}\n\n[mol_text_grid] {\n\tbreak-inside: avoid;\n}\n\n[mol_text_grid_cell] {\n\twidth: auto;\n\tdisplay: table-cell;\n\tvertical-align: top;\n\tpadding: 0;\n\tborder-radius: 0;\n}\n\n[mol_text_cut] {\n\tborder: none;\n\twidth: 100%;\n\tbox-shadow: 0 0 0 1px var(--mol_theme_line);\n}\n\n[mol_text_link_http],\n[mol_text_link] {\n\tpadding: 0;\n\tdisplay: inline;\n\twhite-space: nowrap;\n}\n\n[mol_text_link_icon] + [mol_text_embed] {\n\tmargin-left: -1.5rem;\n}\n\n[mol_text_embed_youtube] {\n\tdisplay: inline;\n}\n\n[mol_text_embed_youtube_image],\n[mol_text_embed_youtube_frame],\n[mol_text_embed_object] {\n\tobject-fit: contain;\n\tobject-position: center;\n\twidth: 100vw;\n\tmax-height: calc( 100vh - 6rem );\n}\n[mol_text_embed_object_fallback] {\n\tpadding: 0;\n}\n[mol_text_embed_image] {\n\tobject-fit: contain;\n\tobject-position: center;\n\tdisplay: inline;\n\t/* max-height: calc( 100vh - 6rem ); */\n\tvertical-align: top;\n}\n\n[mol_text_pre] {\n\twhite-space: pre;\n\toverflow-x: auto;\n\toverflow-x: overlay;\n\ttab-size: 2;\n\tbreak-inside: avoid;\n}\n\n[mol_text_code_line] {\n\tdisplay: inline-block;\n}\n\n[mol_text_type=\"strong\"] {\n\ttext-shadow: 0 0;\n\tfilter: contrast(1.5);\n}\n\n[mol_text_type=\"emphasis\"] {\n\tfont-style: italic;\n}\n\n[mol_text_type=\"insert\"] {\n\tcolor: var(--mol_theme_special);\n}\n\n[mol_text_type=\"delete\"] {\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_text_type=\"remark\"] {\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_text_type=\"quote\"] {\n\tfont-style: italic;\n}\n");
})($ || ($ = {}));

;
	($.$mol_textarea) = class $mol_textarea extends ($.$mol_stack) {
		clickable(next){
			if(next !== undefined) return next;
			return false;
		}
		sidebar_showed(){
			return false;
		}
		press(next){
			if(next !== undefined) return next;
			return null;
		}
		hover(next){
			if(next !== undefined) return next;
			return null;
		}
		value(next){
			if(next !== undefined) return next;
			return "";
		}
		hint(){
			return " ";
		}
		enabled(){
			return true;
		}
		spellcheck(){
			return true;
		}
		length_max(){
			return +Infinity;
		}
		selection(next){
			if(next !== undefined) return next;
			return [];
		}
		bring(){
			return (this.Edit().bring());
		}
		submit(next){
			if(next !== undefined) return next;
			return null;
		}
		submit_with_ctrl(){
			return true;
		}
		Edit(){
			const obj = new this.$.$mol_textarea_edit();
			(obj.value) = (next) => ((this.value(next)));
			(obj.hint) = () => ((this.hint()));
			(obj.enabled) = () => ((this.enabled()));
			(obj.spellcheck) = () => ((this.spellcheck()));
			(obj.length_max) = () => ((this.length_max()));
			(obj.selection) = (next) => ((this.selection(next)));
			(obj.submit) = (next) => ((this.submit(next)));
			(obj.submit_with_ctrl) = () => ((this.submit_with_ctrl()));
			return obj;
		}
		row_numb(id){
			return 0;
		}
		highlight(){
			return "";
		}
		syntax(){
			const obj = new this.$.$mol_syntax2();
			return obj;
		}
		View(){
			const obj = new this.$.$mol_text_code();
			(obj.text) = () => ((this.value()));
			(obj.render_visible_only) = () => (false);
			(obj.row_numb) = (id) => ((this.row_numb(id)));
			(obj.sidebar_showed) = () => ((this.sidebar_showed()));
			(obj.highlight) = () => ((this.highlight()));
			(obj.syntax) = () => ((this.syntax()));
			return obj;
		}
		attr(){
			return {
				...(super.attr()), 
				"mol_textarea_clickable": (this.clickable()), 
				"mol_textarea_sidebar_showed": (this.sidebar_showed())
			};
		}
		event(){
			return {"keydown": (next) => (this.press(next)), "pointermove": (next) => (this.hover(next))};
		}
		sub(){
			return [(this.Edit()), (this.View())];
		}
		symbols_alt(){
			return {
				"comma": "<", 
				"period": ">", 
				"dash": "−", 
				"equals": "≈", 
				"graveAccent": "́", 
				"forwardSlash": "÷", 
				"E": "€", 
				"V": "✔", 
				"X": "×", 
				"C": "©", 
				"P": "§", 
				"H": "₽", 
				"key0": "°", 
				"key8": "•", 
				"key2": "@", 
				"key3": "#", 
				"key4": "$", 
				"key6": "^", 
				"key7": "&", 
				"bracketOpen": "[", 
				"bracketClose": "]", 
				"slashBack": "|"
			};
		}
		symbols_alt_ctrl(){
			return {"space": " "};
		}
		symbols_alt_shift(){
			return {
				"V": "✅", 
				"X": "❌", 
				"O": "⭕", 
				"key1": "❗", 
				"key4": "💲", 
				"key7": "❓", 
				"comma": "«", 
				"period": "»", 
				"semicolon": "“", 
				"quoteSingle": "”", 
				"dash": "—", 
				"equals": "≠", 
				"graveAccent": "̱", 
				"bracketOpen": "{", 
				"bracketClose": "}"
			};
		}
	};
	($mol_mem(($.$mol_textarea.prototype), "clickable"));
	($mol_mem(($.$mol_textarea.prototype), "press"));
	($mol_mem(($.$mol_textarea.prototype), "hover"));
	($mol_mem(($.$mol_textarea.prototype), "value"));
	($mol_mem(($.$mol_textarea.prototype), "selection"));
	($mol_mem(($.$mol_textarea.prototype), "submit"));
	($mol_mem(($.$mol_textarea.prototype), "Edit"));
	($mol_mem(($.$mol_textarea.prototype), "syntax"));
	($mol_mem(($.$mol_textarea.prototype), "View"));
	($.$mol_textarea_edit) = class $mol_textarea_edit extends ($.$mol_string) {
		dom_name(){
			return "textarea";
		}
		enter(){
			return "enter";
		}
		field(){
			return {...(super.field()), "scrollTop": 0};
		}
	};


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_textarea extends $.$mol_textarea {
            indent_inc() {
                let text = this.value();
                let [from, to] = this.selection();
                const rows = text.split('\n');
                let start = 0;
                for (let i = 0; i < rows.length; ++i) {
                    let end = start + rows[i].length;
                    if (end >= from && start <= to) {
                        if (to === from || start !== to) {
                            rows[i] = '\t' + rows[i];
                            to += 1;
                            end += 1;
                        }
                    }
                    start = end + 1;
                }
                this.value(rows.join('\n'));
                this.selection([from + 1, to]);
            }
            indent_dec() {
                let text = this.value();
                let [from, to] = this.selection();
                const rows = text.split('\n');
                let start = 0;
                for (let i = 0; i < rows.length; ++i) {
                    const end = start + rows[i].length;
                    if (end >= from && start <= to && rows[i].startsWith('\t')) {
                        rows[i] = rows[i].slice(1);
                        to -= 1;
                        if (start < from)
                            from -= 1;
                    }
                    start = end + 1;
                }
                this.value(rows.join('\n'));
                this.selection([from, to]);
            }
            symbol_insert(event) {
                const symbol = event.shiftKey
                    ? this.symbols_alt_shift()[$mol_keyboard_code[event.keyCode]]
                    : event.ctrlKey
                        ? this.symbols_alt_ctrl()[$mol_keyboard_code[event.keyCode]]
                        : this.symbols_alt()[$mol_keyboard_code[event.keyCode]];
                if (!symbol)
                    return;
                event.preventDefault();
                document.execCommand('insertText', false, symbol);
            }
            clickable(next) {
                if (!this.enabled())
                    return true;
                return next ?? false;
            }
            hover(event) {
                this.clickable(event.ctrlKey);
            }
            press(event) {
                if (event.altKey) {
                    this.symbol_insert(event);
                }
                else {
                    switch (event.keyCode) {
                        case !event.shiftKey && $mol_keyboard_code.tab:
                            this.indent_inc();
                            break;
                        case event.shiftKey && $mol_keyboard_code.tab:
                            this.indent_dec();
                            break;
                        default: return;
                    }
                    event.preventDefault();
                }
            }
            row_numb(index) {
                return index;
            }
            syntax() {
                return this.$.$mol_syntax2_md_code;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_textarea.prototype, "clickable", null);
        $$.$mol_textarea = $mol_textarea;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/textarea/textarea.view.css", "[mol_textarea] {\n\tflex: 1 0 auto;\n\tflex-direction: column;\n\tvertical-align: top;\n\tmin-height: max-content;\n\twhite-space: pre-wrap;\n\tword-break: break-word;\n\tborder-radius: var(--mol_gap_round);\n\tfont-family: monospace;\n\tposition: relative;\n\ttab-size: 4;\n}\n\n[mol_textarea_view] {\n\tpointer-events: none;\n\twhite-space: inherit;\n\tfont-family: inherit;\n\ttab-size: inherit;\n\tuser-select: none;\n}\n\n[mol_textarea_view_copy] {\n\tpointer-events: all;\n}\n\n[mol_textarea_clickable] > [mol_textarea_view] {\n\tpointer-events: all;\n\tuser-select: auto;\n}\n\n[mol_textarea_clickable] > [mol_textarea_edit] {\n\tuser-select: none;\n}\n\n[mol_textarea_edit] {\n\tfont-family: inherit;\n\tpadding: var(--mol_gap_text);\n\tcolor: transparent !important;\n\tcaret-color: var(--mol_theme_text);\n\tresize: none;\n\ttext-align: inherit;\n\twhite-space: inherit;\n\tborder-radius: inherit;\n\toverflow-anchor: none;\n\tposition: absolute;\n\theight: 100%;\n\twidth: 100%;\n\ttab-size: inherit;\n}\n\n[mol_textarea_sidebar_showed] [mol_textarea_edit] {\n\tleft: 1.75rem;\n\twidth: calc( 100% - 1.75rem );\n}\n\n[mol_textarea_edit]:hover + [mol_textarea_view] {\n\tz-index: var(--mol_layer_hover);\n}\n\n[mol_textarea_edit]:focus + [mol_textarea_view] {\n\tz-index: var(--mol_layer_focus);\n}\n");
})($ || ($ = {}));

;
	($.$mol_icon_send) = class $mol_icon_send extends ($.$mol_icon) {
		path(){
			return "M2,21L23,12L2,3V10L17,12L2,14V21Z";
		}
	};


;
"use strict";

;
	($.$mol_icon_trash_can) = class $mol_icon_trash_can extends ($.$mol_icon) {
		path(){
			return "M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z";
		}
	};


;
"use strict";

;
	($.$mol_icon_trash_can_outline) = class $mol_icon_trash_can_outline extends ($.$mol_icon) {
		path(){
			return "M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z";
		}
	};


;
"use strict";

;
	($.$mol_icon_script) = class $mol_icon_script extends ($.$mol_icon) {
		path(){
			return "M17.8,20C17.4,21.2 16.3,22 15,22H5C3.3,22 2,20.7 2,19V18H5L14.2,18C14.6,19.2 15.7,20 17,20H17.8M19,2H8C6.3,2 5,3.3 5,5V16H16V17C16,17.6 16.4,18 17,18H18V5C18,4.4 18.4,4 19,4C19.6,4 20,4.4 20,5V6H22V5C22,3.3 20.7,2 19,2Z";
		}
	};


;
"use strict";

;
	($.$mol_icon_script_text) = class $mol_icon_script_text extends ($.$mol_icon) {
		path(){
			return "M17.8,20C17.4,21.2 16.3,22 15,22H5C3.3,22 2,20.7 2,19V18H5L14.2,18C14.6,19.2 15.7,20 17,20H17.8M19,2C20.7,2 22,3.3 22,5V6H20V5C20,4.4 19.6,4 19,4C18.4,4 18,4.4 18,5V18H17C16.4,18 16,17.6 16,17V16H5V5C5,3.3 6.3,2 8,2H19M8,6V8H15V6H8M8,10V12H14V10H8Z";
		}
	};


;
"use strict";

;
	($.$mol_link_source) = class $mol_link_source extends ($.$mol_link) {
		Icon(){
			const obj = new this.$.$mol_icon_script_text();
			return obj;
		}
		hint(){
			return (this.$.$mol_locale.text("$mol_link_source_hint"));
		}
		sub(){
			return [(this.Icon())];
		}
	};
	($mol_mem(($.$mol_link_source.prototype), "Icon"));


;
"use strict";

;
	($.$mol_icon_gift) = class $mol_icon_gift extends ($.$mol_icon) {
		path(){
			return "M9.06,1.93C7.17,1.92 5.33,3.74 6.17,6H3A2,2 0 0,0 1,8V10A1,1 0 0,0 2,11H11V8H13V11H22A1,1 0 0,0 23,10V8A2,2 0 0,0 21,6H17.83C19,2.73 14.6,0.42 12.57,3.24L12,4L11.43,3.22C10.8,2.33 9.93,1.94 9.06,1.93M9,4C9.89,4 10.34,5.08 9.71,5.71C9.08,6.34 8,5.89 8,5A1,1 0 0,1 9,4M15,4C15.89,4 16.34,5.08 15.71,5.71C15.08,6.34 14,5.89 14,5A1,1 0 0,1 15,4M2,12V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V12H13V20H11V12H2Z";
		}
	};


;
"use strict";

;
	($.$mol_icon_gift_outline) = class $mol_icon_gift_outline extends ($.$mol_icon) {
		path(){
			return "M22,12V20A2,2 0 0,1 20,22H4A2,2 0 0,1 2,20V12A1,1 0 0,1 1,11V8A2,2 0 0,1 3,6H6.17C6.06,5.69 6,5.35 6,5A3,3 0 0,1 9,2C10,2 10.88,2.5 11.43,3.24V3.23L12,4L12.57,3.23V3.24C13.12,2.5 14,2 15,2A3,3 0 0,1 18,5C18,5.35 17.94,5.69 17.83,6H21A2,2 0 0,1 23,8V11A1,1 0 0,1 22,12M4,20H11V12H4V20M20,20V12H13V20H20M9,4A1,1 0 0,0 8,5A1,1 0 0,0 9,6A1,1 0 0,0 10,5A1,1 0 0,0 9,4M15,4A1,1 0 0,0 14,5A1,1 0 0,0 15,6A1,1 0 0,0 16,5A1,1 0 0,0 15,4M3,8V10H11V8H3M13,8V10H21V8H13Z";
		}
	};


;
"use strict";

;
	($.$mol_link_donate) = class $mol_link_donate extends ($.$mol_link) {
		Icon(){
			const obj = new this.$.$mol_icon_gift_outline();
			return obj;
		}
		hint(){
			return (this.$.$mol_locale.text("$mol_link_donate_hint"));
		}
		sub(){
			return [(this.Icon())];
		}
	};
	($mol_mem(($.$mol_link_donate.prototype), "Icon"));


;
"use strict";

;
	($.$mol_icon_face) = class $mol_icon_face extends ($.$mol_icon) {
		path(){
			return "M9,11.75C8.31,11.75 7.75,12.31 7.75,13C7.75,13.69 8.31,14.25 9,14.25C9.69,14.25 10.25,13.69 10.25,13C10.25,12.31 9.69,11.75 9,11.75M15,11.75C14.31,11.75 13.75,12.31 13.75,13C13.75,13.69 14.31,14.25 15,14.25C15.69,14.25 16.25,13.69 16.25,13C16.25,12.31 15.69,11.75 15,11.75M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,20C7.59,20 4,16.41 4,12C4,11.71 4,11.42 4.05,11.14C6.41,10.09 8.28,8.16 9.26,5.77C11.07,8.33 14.05,10 17.42,10C18.2,10 18.95,9.91 19.67,9.74C19.88,10.45 20,11.21 20,12C20,16.41 16.41,20 12,20Z";
		}
	};


;
"use strict";

;
	($.$mol_icon_face_agent) = class $mol_icon_face_agent extends ($.$mol_icon) {
		path(){
			return "M18.72,14.76C19.07,13.91 19.26,13 19.26,12C19.26,11.28 19.15,10.59 18.96,9.95C18.31,10.1 17.63,10.18 16.92,10.18C13.86,10.18 11.15,8.67 9.5,6.34C8.61,8.5 6.91,10.26 4.77,11.22C4.73,11.47 4.73,11.74 4.73,12A7.27,7.27 0 0,0 12,19.27C13.05,19.27 14.06,19.04 14.97,18.63C15.54,19.72 15.8,20.26 15.78,20.26C14.14,20.81 12.87,21.08 12,21.08C9.58,21.08 7.27,20.13 5.57,18.42C4.53,17.38 3.76,16.11 3.33,14.73H2V10.18H3.09C3.93,6.04 7.6,2.92 12,2.92C14.4,2.92 16.71,3.87 18.42,5.58C19.69,6.84 20.54,8.45 20.89,10.18H22V14.67H22V14.69L22,14.73H21.94L18.38,18L13.08,17.4V15.73H17.91L18.72,14.76M9.27,11.77C9.57,11.77 9.86,11.89 10.07,12.11C10.28,12.32 10.4,12.61 10.4,12.91C10.4,13.21 10.28,13.5 10.07,13.71C9.86,13.92 9.57,14.04 9.27,14.04C8.64,14.04 8.13,13.54 8.13,12.91C8.13,12.28 8.64,11.77 9.27,11.77M14.72,11.77C15.35,11.77 15.85,12.28 15.85,12.91C15.85,13.54 15.35,14.04 14.72,14.04C14.09,14.04 13.58,13.54 13.58,12.91A1.14,1.14 0 0,1 14.72,11.77Z";
		}
	};


;
"use strict";

;
	($.$mol_link_support) = class $mol_link_support extends ($.$mol_link) {
		Icon(){
			const obj = new this.$.$mol_icon_face_agent();
			return obj;
		}
		hint(){
			return (this.$.$mol_locale.text("$mol_link_support_hint"));
		}
		sub(){
			return [(this.Icon())];
		}
	};
	($mol_mem(($.$mol_link_support.prototype), "Icon"));


;
"use strict";

;
	($.$mol_check_icon) = class $mol_check_icon extends ($.$mol_check) {};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/icon/icon.view.css", "[mol_check_icon]:where([mol_check_checked]) {\n\tcolor: var(--mol_theme_current);\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_icon_brightness_4) = class $mol_icon_brightness_4 extends ($.$mol_icon) {
		path(){
			return "M12,18C11.11,18 10.26,17.8 9.5,17.45C11.56,16.5 13,14.42 13,12C13,9.58 11.56,7.5 9.5,6.55C10.26,6.2 11.11,6 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z";
		}
	};


;
"use strict";

;
	($.$mol_lights_toggle) = class $mol_lights_toggle extends ($.$mol_check_icon) {
		Lights_icon(){
			const obj = new this.$.$mol_icon_brightness_4();
			return obj;
		}
		lights(next){
			if(next !== undefined) return next;
			return false;
		}
		Icon(){
			return (this.Lights_icon());
		}
		hint(){
			return (this.$.$mol_locale.text("$mol_lights_toggle_hint"));
		}
		checked(next){
			return (this.lights(next));
		}
	};
	($mol_mem(($.$mol_lights_toggle.prototype), "Lights_icon"));
	($mol_mem(($.$mol_lights_toggle.prototype), "lights"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_lights_toggle extends $.$mol_lights_toggle {
            lights(next) {
                return this.$.$mol_lights(next);
            }
        }
        $$.$mol_lights_toggle = $mol_lights_toggle;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    function $mol_data_record(sub) {
        return $mol_data_setup((val) => {
            let res = {};
            for (const field in sub) {
                try {
                    res[field] =
                        sub[field](val[field]);
                }
                catch (error) {
                    if (error instanceof Promise)
                        return $mol_fail_hidden(error);
                    error.message = `[${JSON.stringify(field)}] ${error.message}`;
                    return $mol_fail(error);
                }
            }
            return res;
        }, sub);
    }
    $.$mol_data_record = $mol_data_record;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_data_const(ref) {
        return $mol_data_setup((val) => {
            if ($mol_compare_deep(val, ref))
                return ref;
            return $mol_fail(new $mol_data_error(`${JSON.stringify(val)} is not ${JSON.stringify(ref)}`));
        }, ref);
    }
    $.$mol_data_const = $mol_data_const;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_data_string = (val) => {
        if (typeof val === 'string')
            return val;
        return $mol_fail(new $mol_data_error(`${val} is not a string`));
    };
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_data_nullable(sub) {
        return $mol_data_setup((val) => {
            if (val === null)
                return null;
            return sub(val);
        }, sub);
    }
    $.$mol_data_nullable = $mol_data_nullable;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_data_optional(sub, fallback) {
        return $mol_data_setup((val) => {
            if (val === undefined) {
                return fallback?.();
            }
            return sub(val);
        }, { sub, fallback });
    }
    $.$mol_data_optional = $mol_data_optional;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_data_array(sub) {
        return $mol_data_setup((val) => {
            if (!Array.isArray(val))
                return $mol_fail(new $mol_data_error(`${val} is not an array`));
            return val.map((item, index) => {
                try {
                    return sub(item);
                }
                catch (error) {
                    if (error instanceof Promise)
                        return $mol_fail_hidden(error);
                    error.message = `[${index}] ${error.message}`;
                    return $mol_fail(error);
                }
            });
        }, sub);
    }
    $.$mol_data_array = $mol_data_array;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_data_variant(...sub) {
        return $mol_data_setup((val) => {
            const errors = [];
            for (const type of sub) {
                let hidden = $.$mol_fail_hidden;
                try {
                    $.$mol_fail = $.$mol_fail_hidden;
                    return type(val);
                }
                catch (error) {
                    $.$mol_fail = hidden;
                    if (error instanceof $mol_data_error) {
                        errors.push(error);
                    }
                    else {
                        return $mol_fail_hidden(error);
                    }
                }
            }
            return $mol_fail(new $mol_data_error(`${val} is not any of variants`, {}, ...errors));
        }, sub);
    }
    $.$mol_data_variant = $mol_data_variant;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_array_shuffle(array) {
        const res = new Array(array.length);
        for (let i = 0; i < res.length; ++i) {
            const j = Math.floor(Math.random() * (i + 1));
            if (i !== j)
                res[i] = res[j];
            res[j] = array[i];
        }
        return res;
    }
    $.$mol_array_shuffle = $mol_array_shuffle;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_array_shuffle_sync = $mol_wire_sync($mol_array_shuffle);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_github_model_keys = [
        '11AADME3A07jh1teLjee8r_O7MKyAF8rbdIlhk4OwsJHaCnh4CjDNxn1nLNAvW2Hy6OSTIYABWQyp0rOHt',
        '11AADME3A0q6w8EFz9G9aa_byqEpTuWUa63PKoSAwN1eVi2GyGJ4SxYhm9OhAc2DCTANK2ULBQpQgUu6D9',
        '11AADME3A0RsfJpmuZfl4r_Nw6G3v7vDgnrqDxmlgF6Gyj9YawDfTqatNUxhwPjzWwYYGIORGETiUtMOmR',
        '11AADME3A0meTYzVZaOtJF_LrdN2tIDycZHDBN3560V3S2ZWpo07uATZON0XUYF2ZFFC3X2OHSwdUcVfUe',
        '11AADME3A0myGzFwrNHkV0_InRujMNsqM7cLUWDvKCW5GRy2waC7fHXuSJdzW0mrwvX7VP4I2MoGXRXF6w',
        '11AADME3A0LF4GM8Qam5xH_LFLHQqgcmudC8eyKLEqc4l5xDPcplSxAcEA3j8BO4MYTAE6FOROqFIuhGfR',
        '11AADME3A0KUqaRrYVSMzf_rYLJd83byQ1HN8KOIzVnHPBvW6VPei911NJgPucm1hRETR55VB3mdyw2ezI',
        '11AADME3A0exOKaaQLYR2b_2JKJDHVAWxoqRPlGcugBHNapcZWT9awRic8iBmgOirXRVC5X7ILtz6KDffv',
        '11AADME3A071WbELDi8THV_v3dkQtbYpSGjUXeWT6dAiPBf5a5b0KDr0E029T6P4CsZOOYO3DPpopBkodL',
        '11AADME3A0L5oFWUKk62fr_Dcbcn1ZcNBwWaLfbHzlgueGcxBEO5FoOieoowhJ6Q1zIWIIYZBG7XI16O4H',
        '11ABRVBSY0f8VzkzaCnFmy_PMfBlJqT7DuvxfzbYRUlLOZJenEqBvNpGP7uQKCDOaO6ZKS4DFCG0qYxy2I',
        '11ABRVBSY0no18F8ngCYoa_60v1HSbYVeEZ2d3tf1ix2Kq7G8ZRYaFFiHImNxERTkqJ5CWMQ6VmjH7ic86',
        '11ABRVBSY0acYIFJ0b9cAV_0wPJI2JxZgLYasswZjIUMQqxnYcRAUEG68xtsh9uQtNZDYU37IS5GBobX8v',
        '11ABRVBSY0KhLO9yDqoqMM_B328qDB5kCHqgAJNw3q1MW48gHQ9XYAnnRQFlXkE1MQGX3S5TOK6k4od8C8',
        '11ABRVBSY04TXJfmvdflXC_o9UQLVNWbPWzaqaaZll9fFn9QLAZotSwi18clpeaaYkTQEHQSW3yvrSAsCb',
        '11ABRVBSY0n7osgrVkUT0l_PQadBMEjSXLOGZGwuu5wVXydSnwxboWUAxAIdXgXP9hRVQOKM5UNsJaKk0M',
        '11ABRVBSY0Zctkh9fg9Cpl_nqCk5TSio22hgtvAWqYzGvlsfaIH9e66ery772pkCW0C7EJA7HJrPGxIYQy',
        '11ABRVBSY0XbD5DK094oOY_8mmeflfbf4mu48bWk7OFQvrxxPXp5gFCxO5PUokPwsw2LZRC6DZSujLHCVt',
        '11ABRVBSY0AGZyClxdqZDx_gseo5RI9HKRPvlQtRFmmR5An2jaRna9glpzv40wi7MZCCCDAVIWk3l1Nwp9',
        '11ABRVBSY0SvjU9l1d7DXU_LOZfXdIZuupZCmu1FA4NGUOy572G8ZJ6pzYyzu9RsWfG7HLRMLYIIIE54Mp',
        '11AACDCYQ0R6jhkMIx4zY4_OlEwnePW3UFhkNsJuyAweBPsHtqlhBW7WD69mWjuuYTTAYOTX7KL4WK1Yg7',
        '11AACDCYQ0Ai0LkLKrp9kE_D10SuqSODWeGWvA4Rgux6ZXs2AEwl3IqpElNGRI7JG0ZIGVKV5RaUDAchxe',
        '11AACDCYQ0c94yhWtZq2HX_YFms0ToLulxGTnr80ndTsHZIOfNMl8QdLmoKL75fZ3oK6JN3NOKsnxMZ1qu',
        '11AACDCYQ0DkrjD2bmmKpL_PcrQXvrbiEnJl0oazFx70p9wdCXd2rP5DhazexPAcygLGKIOQRXeeCXsP7B',
        '11AACDCYQ0IMIYCLcX3xrO_901enZ0EKxk48giaCI7vkIHZgdOpqrvPyHiF4t02klvCLI7OVRE3uqJ3PKf',
        '11AACDCYQ0WIjNWbjdJclE_KKiTwAIGNcbpPIO6SJfBxbuUVixxug7QH5KPRcMXAYv3ZOROGOVFvj4GzzG',
        '11AACDCYQ0tKWudX3T6T6l_wGiLSmI6aYR7Wf5ZXFukZdPuUL7lpGpBIzkm8CSxcaoJQT7GDAU2PtnWWDj',
        '11AACDCYQ0Ocm4JD37TfHG_0KPjGl3ucMm4ozREvzF1QNY3UECaZNh3SiY49AUzJgGNITGLVH2LdHhz7PT',
        '11AACDCYQ0R5HgcrZOxDwc_dgCK0jETB27GYYCmh1YMfdE5dPuLNZ1DLiIDi2tQnr0IGUX5WFRNa9oTaSw',
        '11AZC2M3A02nw2Q86BPmYQ_yl2RFA1RXRuEVWU0ufTjBXl12SvUWyeZxZ9cbZRuind6QWI65J4tXbAfF2p',
        '11AZC2M3A0gcGTDvExPjEL_m1itogjz24QDTxT0zJTpDJmyZ3sSKO1UXapXfw7q0BLMUIOXP3SB7zRfavu',
        '11AZC2M3A0Y1oDGiEjDZ1g_t5ry6SPyckVwZvBQvBke09QbNMF8rG1TXdcops2BiDmKDYKOOCV58edg7VY',
        '11AZC2M3A00bI3vc5JPaA2_MZGbctgtp5KEdBD2dYVW7MaQ2Fqiw8UrIpHKZp8xnczJGHTTJQPa9QxXjrc',
        '11AZC2M3A0fGlQkvashsda_CuaNQlzrajBrj82VlUzZQ67Qgq9X3QudJ9S3SM3wnzvNIQRQARZoClezK3C',
        '11AZC2M3A06Zat4wc9fotV_0gdnr4cGXfzD2wTkBIr5QYyj3ErxgMcHJerQb81AtnqBSYKBHIEzBXbqzQr',
        '11AZC2M3A0V1JUeQY0eOov_rrWyENLMO5Sxa4IEPbZMLippdb8TQi531bmfJQBBaCfQHIC5PQFFwUp49DW',
        '11AZC2M3A0G89rDbsh2k20_l6kEuOm10kV86RGIp1s5wQ1n6kLe0WFgeCHLthnGNSyDSIBNNC6Q7kjGrem',
        '11AZC2M3A0tAUQ7dX2dnaI_hvDm1d0lxDpHXkYx1khtJyidfjREBvg2qssXurwxihAHBEMII5T7l5WrXI9',
        '11AZC2M3A0VPRCdsbErhom_W0wrECR4sbXQZLlG966rsb1G65pOXJGbk4uaV0zUNpMZPDBW5DSTZyRTCJy',
        '11AZC2M3A06fZVQGXETeaM_KIU5iEeb6UtpBrGZMOG6kQc1r32A5Xh1uxAMdmZRwkHICW2HJMAHcv236fa',
        '11AZC2M3A0QyPnQfDarLu5_x6eKghOwMB3yX2KPPVGvD3PKKuY5QiK7gJ4eoPiYCSwOBQVU2P6EOzN75xf',
        '11AZC2M3A0VW9BdSxec56G_P3YnEAFXcC7IMauK8nhxHwFNS09AgIisAuy9Kft19o2LAHR5RXQyMHIl9yQ',
        '11AZC2M3A0P4o9D1flcC0S_f2NS5FSSogJoFsocKShuv4m7ghDBamKRgPvPqACGEejJRU2BBE2gymGHhk1',
        '11AZC2M3A0cI704OJ5EVfc_8c1ggPeodHoWEY8lMHH9cvKLGyGvGbgzW7tr4V7E5ITT7RDCHJYzNZoXxGF',
        '11AZC2M3A0yFNB07z5VFbp_RtEMVMcdKpfFgn0ls2v3hlcJDsIs6v7e64TXSW2muOK5RPKAJ3WxdZS2vzT',
        '11AZC2M3A06KL2qd1GmlIB_a7tt0VJaKLybMxJLdJ6JPk6iBgNaECXJsFd5FyCl4nSSQT3QSG4ETLYFOwj',
        '11AZC2M3A0Ui6RqKCiBn6X_6S4OnreMp6Au5JSRwfcWop1SiHV9ooFsBHhYkFEiErAQYHDENGGzLmL1aD9',
        '11AZC2M3A0hk74xKy52Egx_jYVCEjt9jpT2peCB0qT7JrnSX1a075ZASxKTzaV3KeqTTV5A7SRNxkaElKn',
        '11AZC2M3A021XEPByvPlBg_rKr4RNMcfeflEKrL5qGxDieXMKLlf4S6FWvtUUzIYaoOK63JXVBv8XPAfi5',
        '11AZC2M3A0yK6fYUgjj79M_5yu4OE4RdeFk8IoY3kcOC1xemTvjB1B8tOzA1KPmqQSX37EDQIOIuRjf9jF',
    ].map(str => `github_pat_${str}`);
    $.$mol_github_model_polyglots = [
        'openai/gpt-4.1-mini',
    ];
    const System = $mol_data_record({
        role: $mol_data_const('system'),
        content: $mol_data_string,
    });
    const Assistant = $mol_data_record({
        role: $mol_data_const('assistant'),
        content: $mol_data_nullable($mol_data_string),
        tool_calls: $mol_data_optional($mol_data_array($mol_data_record({
            type: $mol_data_const('function'),
            id: $mol_data_string,
            function: $mol_data_record({
                name: $mol_data_string,
                arguments: $mol_data_string,
            }),
        }))),
    });
    const User = $mol_data_record({
        role: $mol_data_const('user'),
        content: $mol_data_string,
    });
    const Tool = $mol_data_record({
        role: $mol_data_const('tool'),
        tool_call_id: $mol_data_string,
        content: $mol_data_string,
    });
    const Message = $mol_data_variant(Assistant, User, Tool);
    const Resp = $mol_data_record({
        choices: $mol_data_array($mol_data_record({
            message: Assistant,
        })),
    });
    const RespFail = $mol_data_record({
        error: $mol_data_record({
            message: $mol_data_string,
        }),
    });
    class $mol_github_model extends $mol_object {
        names() {
            return this.$.$mol_github_model_polyglots;
        }
        rules() {
            return '';
        }
        tools() {
            return new Map();
        }
        params(next) {
            $mol_wire_solid();
            return next ?? {};
        }
        history(next) {
            $mol_wire_solid();
            return next ?? [];
        }
        fork() {
            const fork = $mol_github_model.make({
                names: $mol_const(this.names()),
                rules: $mol_const(this.rules()),
                tools: $mol_const(this.tools()),
            });
            fork.params(this.params());
            fork.history(this.history());
            return fork;
        }
        shot(prompt, context, params) {
            const fork = this.fork();
            if (params)
                fork.params({ ...this.params(), ...params });
            if (context)
                fork.tell(context);
            fork.ask(prompt);
            return fork.response();
        }
        ask(text) {
            this.history([
                ...this.history(),
                {
                    role: "user",
                    content: JSON.stringify(text),
                }
            ]);
            return this;
        }
        tell(text) {
            this.history([
                ...this.history(),
                {
                    role: "assistant",
                    content: JSON.stringify(text),
                }
            ]);
            return this;
        }
        answer(id, data) {
            const history = this.history();
            const index = 1 + history.findIndex(msg => msg.role === 'tool' && msg.tool_call_id === id);
            if (!index)
                this.$.$mol_fail(new Error('Wrong tool call id', { cause: id }));
            this.history([
                ...history.slice(0, index),
                {
                    role: "tool",
                    tool_call_id: id,
                    content: JSON.stringify(data),
                },
                ...history.slice(index),
            ]);
            return this;
        }
        request_body(model) {
            return JSON.stringify({
                model,
                stream: false,
                response_format: { type: 'json_object' },
                messages: [
                    { role: 'system', content: this.rules() },
                    ...this.history(),
                ],
                tools: [...this.tools()].map(([name, info]) => ({
                    type: "function",
                    function: {
                        name,
                        description: info.descr,
                        strict: true,
                        parameters: info.params,
                    },
                })),
                ...this.params(),
            });
        }
        request(model, key) {
            return Resp(this.$.$mol_fetch.json(`https://models.github.ai/inference/chat/completions`, {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + key,
                    'Content-Type': 'application/json',
                },
                body: this.request_body(model)
            }));
        }
        response() {
            const history = this.history();
            const last = history.at(-1);
            if (last?.role !== 'user')
                return null;
            const models = this.$.$mol_array_shuffle_sync(this.names());
            const keys = this.$.$mol_array_shuffle_sync($.$mol_github_model_keys);
            for (const model of models)
                for (const key of keys) {
                    try {
                        const resp = this.request(model, key);
                        const message = resp.choices[0].message;
                        this.history([...history, message]);
                        return JSON.parse(message.content ?? 'null');
                    }
                    catch (error) {
                        const resp = error.cause;
                        if (!resp)
                            return $mol_fail_hidden(error);
                        if (resp.code() === 429)
                            continue;
                        if (resp.code() === 400) {
                            const message = RespFail(resp.json()).error.message;
                            this.history([...history, { role: 'assistant', content: '📛 ' + message }]);
                            $mol_fail(new Error(message));
                        }
                        $mol_fail_hidden(error);
                    }
                }
            return this.$.$mol_fail(new Error('No alive token'));
        }
    }
    __decorate([
        $mol_memo.method
    ], $mol_github_model.prototype, "names", null);
    __decorate([
        $mol_memo.method
    ], $mol_github_model.prototype, "tools", null);
    __decorate([
        $mol_mem
    ], $mol_github_model.prototype, "params", null);
    __decorate([
        $mol_mem
    ], $mol_github_model.prototype, "history", null);
    __decorate([
        $mol_action
    ], $mol_github_model.prototype, "fork", null);
    __decorate([
        $mol_action
    ], $mol_github_model.prototype, "shot", null);
    __decorate([
        $mol_action
    ], $mol_github_model.prototype, "ask", null);
    __decorate([
        $mol_action
    ], $mol_github_model.prototype, "tell", null);
    __decorate([
        $mol_action
    ], $mol_github_model.prototype, "answer", null);
    __decorate([
        $mol_mem_key
    ], $mol_github_model.prototype, "request_body", null);
    __decorate([
        $mol_mem
    ], $mol_github_model.prototype, "response", null);
    $.$mol_github_model = $mol_github_model;
})($ || ($ = {}));

;
	($.$mol_text_list) = class $mol_text_list extends ($.$mol_text) {
		type(){
			return "";
		}
		auto_scroll(){
			return null;
		}
		attr(){
			return {...(super.attr()), "mol_text_list_type": (this.type())};
		}
		Paragraph(id){
			const obj = new this.$.$mol_text_list_item();
			(obj.index) = () => ((this.item_index(id)));
			(obj.sub) = () => ((this.block_content(id)));
			return obj;
		}
	};
	($mol_mem_key(($.$mol_text_list.prototype), "Paragraph"));
	($.$mol_text_list_item) = class $mol_text_list_item extends ($.$mol_paragraph) {
		index(){
			return 0;
		}
		attr(){
			return {...(super.attr()), "mol_text_list_item_index": (this.index())};
		}
	};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/text/list/list.view.css", "[mol_text_list] {\r\n\tpadding-left: 1.75rem;\r\n}\r\n\r\n[mol_text_list_item] {\r\n\tcontain: none;\r\n\tdisplay: list-item;\r\n}\r\n\r\n[mol_text_list_item]::before {\r\n\tcontent: attr( mol_text_list_item_index ) \".\";\r\n\twidth: 1.25rem;\r\n\tdisplay: inline-block;\r\n\tposition: absolute;\r\n\tmargin-left: -1.75rem;\r\n\ttext-align: end;\r\n}\r\n\r\n[mol_text_list_type=\"-\"] > [mol_text_list_item]::before,\r\n[mol_text_list_type=\"*\"] > [mol_text_list_item]::before {\r\n\tcontent: \"•\";\r\n}\r\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$giper_bot) = class $giper_bot extends ($.$mol_book2) {
		rules(){
			return "Ты - Гипер Бот, универсальный интеллектуальный ассистент. Пользователь присылает тебе запрос в виде JSON строки. Твоя задача сформировать максимально точный и лаконичный ответ на запрос без лишней информации, о которой пользователь не просил. Ответ должен быть представлен в виде JSON объекта, где в поле \"response\" должен находиться собственно ответ в виде строки. В поле \"confidence\" отрази степень своей увернности в истинности ответа в диапазоне от 0 до 1. В поле \"digest\" должен находиться краткий пересказ всего вашего диалога от начала до конца. Говоря о пользователе в пересказе (и только в нём) используй эмодзи 🙂 вместо слова \"пользователь\", а вместо \"Гипер Бота\" - используй эмозди 🤖. В поле \"title\" должно быть придумано лаконичное название, ёмко характеризующее всё обсуждение целиком. Отвечай всегда на языке с кодом {lang}, если пользователь не попросил иное. Далее идёт пересказ прошлых ваших сообщений, не потеряй его в своём пересказе:";
		}
		context(){
			return (this.rules());
		}
		Theme(){
			const obj = new this.$.$mol_theme_auto();
			return obj;
		}
		Space(){
			const obj = new this.$.$giper_web_frame();
			return obj;
		}
		dialog_title(next){
			if(next !== undefined) return next;
			return (this.$.$mol_locale.text("$giper_bot_dialog_title"));
		}
		title(){
			return (this.dialog_title());
		}
		communication(){
			return null;
		}
		Status(){
			const obj = new this.$.$mol_status();
			(obj.status) = () => ((this.communication()));
			return obj;
		}
		message_text(id){
			return "";
		}
		Message_text(id){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.message_text(id)));
			return obj;
		}
		Message(id){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Message_text(id))]);
			return obj;
		}
		messages(){
			return [(this.Message("0"))];
		}
		Messages(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.messages()));
			return obj;
		}
		Avatar(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["🙂"]);
			return obj;
		}
		prompt_text(next){
			if(next !== undefined) return next;
			return "";
		}
		prompt_submit(next){
			if(next !== undefined) return next;
			return null;
		}
		Prompt_text(){
			const obj = new this.$.$mol_textarea();
			(obj.hint) = () => ((this.$.$mol_locale.text("$giper_bot_Prompt_text_hint")));
			(obj.value) = (next) => ((this.prompt_text(next)));
			(obj.submit) = (next) => ((this.prompt_submit(next)));
			return obj;
		}
		Prompt_submit_icon(){
			const obj = new this.$.$mol_icon_send();
			return obj;
		}
		Prompt_submit(){
			const obj = new this.$.$mol_button_minor();
			(obj.hint) = () => ((this.$.$mol_locale.text("$giper_bot_Prompt_submit_hint")));
			(obj.click) = (next) => ((this.prompt_submit(next)));
			(obj.sub) = () => ([(this.Prompt_submit_icon())]);
			return obj;
		}
		Dialog(){
			const obj = new this.$.$mol_page();
			(obj.title_content) = () => (["🤖 ", (this.title())]);
			(obj.body_content) = () => ([(this.Status()), (this.Messages())]);
			(obj.foot) = () => ([
				(this.Avatar()), 
				(this.Prompt_text()), 
				(this.Prompt_submit())
			]);
			return obj;
		}
		reset(next){
			if(next !== undefined) return next;
			return null;
		}
		Reset_icon(){
			const obj = new this.$.$mol_icon_trash_can_outline();
			return obj;
		}
		Reset(){
			const obj = new this.$.$mol_button_minor();
			(obj.hint) = () => ((this.$.$mol_locale.text("$giper_bot_Reset_hint")));
			(obj.click) = (next) => ((this.reset(next)));
			(obj.sub) = () => ([(this.Reset_icon())]);
			return obj;
		}
		Sources(){
			const obj = new this.$.$mol_link_source();
			(obj.uri) = () => ("https://github.com/giper-dev/bot/");
			return obj;
		}
		Donate(){
			const obj = new this.$.$mol_link_donate();
			(obj.uri) = () => ("https://boosty.to/hyoo");
			return obj;
		}
		Support(){
			const obj = new this.$.$mol_link_support();
			(obj.uri) = () => ("https://t.me/giper_web/276");
			return obj;
		}
		Lights(){
			const obj = new this.$.$mol_lights_toggle();
			return obj;
		}
		digest(next){
			if(next !== undefined) return next;
			return "";
		}
		Digest(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.digest()));
			return obj;
		}
		Context(){
			const obj = new this.$.$mol_page();
			(obj.title) = () => ((this.$.$mol_locale.text("$giper_bot_Context_title")));
			(obj.tools) = () => ([
				(this.Reset()), 
				(this.Sources()), 
				(this.Donate()), 
				(this.Support()), 
				(this.Lights())
			]);
			(obj.body) = () => ([(this.Digest())]);
			return obj;
		}
		Model(next){
			if(next !== undefined) return next;
			const obj = new this.$.$mol_github_model();
			(obj.params) = () => ({"temperature": 0});
			(obj.rules) = () => ((this.context()));
			return obj;
		}
		plugins(){
			return [(this.Theme())];
		}
		pages(){
			return [(this.Space()), (this.Dialog())];
		}
		placeholders(){
			return [(this.Context())];
		}
	};
	($mol_mem(($.$giper_bot.prototype), "Theme"));
	($mol_mem(($.$giper_bot.prototype), "Space"));
	($mol_mem(($.$giper_bot.prototype), "dialog_title"));
	($mol_mem(($.$giper_bot.prototype), "Status"));
	($mol_mem_key(($.$giper_bot.prototype), "Message_text"));
	($mol_mem_key(($.$giper_bot.prototype), "Message"));
	($mol_mem(($.$giper_bot.prototype), "Messages"));
	($mol_mem(($.$giper_bot.prototype), "Avatar"));
	($mol_mem(($.$giper_bot.prototype), "prompt_text"));
	($mol_mem(($.$giper_bot.prototype), "prompt_submit"));
	($mol_mem(($.$giper_bot.prototype), "Prompt_text"));
	($mol_mem(($.$giper_bot.prototype), "Prompt_submit_icon"));
	($mol_mem(($.$giper_bot.prototype), "Prompt_submit"));
	($mol_mem(($.$giper_bot.prototype), "Dialog"));
	($mol_mem(($.$giper_bot.prototype), "reset"));
	($mol_mem(($.$giper_bot.prototype), "Reset_icon"));
	($mol_mem(($.$giper_bot.prototype), "Reset"));
	($mol_mem(($.$giper_bot.prototype), "Sources"));
	($mol_mem(($.$giper_bot.prototype), "Donate"));
	($mol_mem(($.$giper_bot.prototype), "Support"));
	($mol_mem(($.$giper_bot.prototype), "Lights"));
	($mol_mem(($.$giper_bot.prototype), "digest"));
	($mol_mem(($.$giper_bot.prototype), "Digest"));
	($mol_mem(($.$giper_bot.prototype), "Context"));
	($mol_mem(($.$giper_bot.prototype), "Model"));


;
"use strict";
var $;
(function ($) {
    function $mol_offline() { }
    $.$mol_offline = $mol_offline;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const blacklist = new Set([
        '//cse.google.com/adsense/search/async-ads.js'
    ]);
    function $mol_offline_web() {
        if (typeof window === 'undefined') {
            self.addEventListener('install', (event) => {
                ;
                self.skipWaiting();
            });
            self.addEventListener('activate', (event) => {
                ;
                self.clients.claim();
                $$.$mol_log3_done({
                    place: '$mol_offline',
                    message: 'Activated',
                });
            });
            self.addEventListener('fetch', (event) => {
                const request = event.request;
                if (blacklist.has(request.url.replace(/^https?:/, ''))) {
                    return event.respondWith(new Response(null, {
                        status: 418,
                        statusText: 'Blocked'
                    }));
                }
                if (request.method !== 'GET')
                    return;
                if (!/^https?:/.test(request.url))
                    return;
                if (/\?/.test(request.url))
                    return;
                if (request.cache === 'no-store')
                    return;
                const fetch_data = () => fetch(new Request(request, { credentials: 'omit' })).then(response => {
                    if (response.status !== 200)
                        return response;
                    event.waitUntil(caches.open('$mol_offline').then(cache => cache.put(request, response)));
                    return response.clone();
                });
                const enrich = (response) => {
                    if (!response.status)
                        return response;
                    const headers = new Headers(response.headers);
                    headers.set("$mol_offline", "");
                    headers.set("Origin-Agent-Cluster", "?1");
                    return new Response(response.body, {
                        status: response.status,
                        statusText: response.statusText,
                        headers,
                    });
                };
                const fresh = request.cache === 'force-cache' ? null : fetch_data();
                if (fresh)
                    event.waitUntil(fresh.then(enrich));
                event.respondWith(caches.match(request).then(cached => request.cache === 'no-cache' || request.cache === 'reload'
                    ? (cached
                        ? fresh
                            .then(actual => {
                            if (actual.status === cached.status)
                                return actual;
                            throw new Error(`${actual.status}${actual.statusText ? ` ${actual.statusText}` : ''}`, { cause: actual });
                        })
                            .catch((err) => {
                            const cloned = cached.clone();
                            const message = `${err.cause instanceof Response ? '' : '500 '}${err.message} $mol_offline fallback to cache`;
                            cloned.headers.set('$mol_offline_remote_status', message);
                            return cloned;
                        })
                        : fresh)
                    : (cached || fresh || fetch_data())).then(enrich));
            });
            self.addEventListener('beforeinstallprompt', (event) => event.prompt());
        }
        else if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
            console.warn('HTTPS or localhost is required for service workers.');
        }
        else if (!navigator.serviceWorker) {
            console.warn('Service Worker is not supported.');
        }
        else {
            $mol_dom.addEventListener('DOMContentLoaded', () => {
                navigator.serviceWorker.register('web.js').then(reg => {
                    reg.addEventListener('updatefound', () => {
                        $$.$mol_log3_rise({
                            place: '$mol_offline',
                            message: 'Outdated',
                        });
                        const worker = reg.installing;
                        worker.addEventListener('statechange', () => {
                            if (worker.state !== 'activated')
                                return;
                            window.location.reload();
                        });
                    });
                });
            });
        }
    }
    $.$mol_offline_web = $mol_offline_web;
    $.$mol_offline = $mol_offline_web;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    try {
        $mol_offline();
    }
    catch (error) {
        console.error(error);
    }
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $giper_bot extends $.$giper_bot {
            dialog_title(next) {
                return this.$.$mol_state_session.value('title', next) ?? super.dialog_title();
            }
            digest(next) {
                return this.$.$mol_state_session.value('digest', next) ?? '';
            }
            prompt_text(next) {
                return this.$.$mol_state_session.value('prompt_text', next) ?? '';
            }
            history(next) {
                return this.$.$mol_state_session.value('history', next) ?? $mol_maybe(this.$.$mol_state_arg.value('prompt') || null);
            }
            messages() {
                return this.history().map((_, i) => this.Message(i));
            }
            message_text(index) {
                let text = this.history()[index] ?? '';
                if ('`#>|='.includes(text[0]))
                    text = '\n' + text;
                return this.message_name(index) + ' ' + text;
            }
            message_name(index) {
                return index % 2 ? '🤖' : '🙂';
            }
            rules() {
                return super.rules().replaceAll('{lang}', this.$.$mol_locale.lang());
            }
            context() {
                return this.rules();
            }
            communication() {
                const history = this.history();
                if (history.length % 2 === 0)
                    return;
                const model = this.Model().fork();
                for (let i = 0; i < history.length; ++i) {
                    if (i % 2)
                        model.tell({ response: history[i], digest: null, title: null });
                    else
                        model.ask(history[i]);
                }
                try {
                    const resp = model.response();
                    this.dialog_title(resp.title);
                    this.digest(resp.digest);
                    this.history([...history, resp.response]);
                }
                catch (error) {
                    if ($mol_fail_log(error)) {
                        this.history([...history, '📛' + error.message]);
                    }
                }
            }
            prompt_submit() {
                this.history([...this.history(), ...$mol_maybe(this.prompt_text() || null)]);
                this.prompt_text('');
            }
            reset() {
                this.dialog_title(null);
                this.digest('');
                this.history([]);
            }
        }
        __decorate([
            $mol_mem
        ], $giper_bot.prototype, "history", null);
        __decorate([
            $mol_mem_key
        ], $giper_bot.prototype, "message_text", null);
        __decorate([
            $mol_mem
        ], $giper_bot.prototype, "rules", null);
        __decorate([
            $mol_mem
        ], $giper_bot.prototype, "communication", null);
        $$.$giper_bot = $giper_bot;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { url, linear_gradient, hsla } = $mol_style_func;
        $mol_style_define($giper_bot, {
            background: {
                size: ['cover'],
                position: 'center',
                image: [
                    [linear_gradient($mol_theme.spirit)],
                    [url('giper/bot/logo/back.jpg')],
                ]
            },
            Dialog: {
                margin: [0, 'auto'],
                flex: {
                    basis: '60rem',
                },
                Body: {
                    display: 'flex',
                    flex: {
                        direction: 'column-reverse',
                    },
                    align: {
                        items: 'stretch',
                    },
                    padding: $mol_gap.block,
                },
            },
            Avatar: {
                padding: $mol_gap.text,
            },
            Prompt_text: {
                flex: {
                    shrink: 1,
                },
            },
            Context: {
                flex: {
                    basis: '30rem',
                },
                Body_content: {
                    gap: $mol_gap.block,
                },
            }
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$bog_quiz) = class $bog_quiz extends ($.$mol_book2_catalog) {
		Realm(){
			const obj = new this.$.$giper_baza_glob();
			return obj;
		}
		quiz_add(next){
			if(next !== undefined) return next;
			return null;
		}
		Quiz_add_icon(){
			const obj = new this.$.$mol_icon_plus();
			return obj;
		}
		Quiz_add(){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.quiz_add(next)));
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_quiz_Quiz_add_hint")));
			(obj.sub) = () => ([(this.Quiz_add_icon())]);
			return obj;
		}
		Theme(){
			const obj = new this.$.$mol_theme_auto();
			return obj;
		}
		Bot(){
			const obj = new this.$.$giper_bot();
			return obj;
		}
		Quiz_spread(id){
			const obj = new this.$.$mol_view();
			return obj;
		}
		param(){
			return "quiz";
		}
		realm(){
			return (this.Realm());
		}
		menu_title(){
			return (this.$.$mol_locale.text("$bog_quiz_menu_title"));
		}
		menu_tools(){
			return [(this.Quiz_add())];
		}
		plugins(){
			return [(this.Theme())];
		}
		Placeholder(){
			return null;
		}
		spreads(){
			return {"": (this.Bot())};
		}
		Spread(id){
			return (this.Quiz_spread(id));
		}
	};
	($mol_mem(($.$bog_quiz.prototype), "Realm"));
	($mol_mem(($.$bog_quiz.prototype), "quiz_add"));
	($mol_mem(($.$bog_quiz.prototype), "Quiz_add_icon"));
	($mol_mem(($.$bog_quiz.prototype), "Quiz_add"));
	($mol_mem(($.$bog_quiz.prototype), "Theme"));
	($mol_mem(($.$bog_quiz.prototype), "Bot"));
	($mol_mem_key(($.$bog_quiz.prototype), "Quiz_spread"));


;
"use strict";
var $;
(function ($) {
    class $mol_import extends $mol_object2 {
        static module(uri) {
            $mol_wire_solid();
            return $mol_wire_sync(this).module_async(uri);
        }
        static module_async(uri) {
            return import(uri);
        }
        static script(uri) {
            $mol_wire_solid();
            return $mol_wire_sync(this).script_async(uri);
        }
        static script_async(uri) {
            const doc = $mol_dom_context.document;
            const script = doc.createElement('script');
            script.src = uri;
            doc.head.appendChild(script);
            return new Promise((done, fail) => {
                script.onload = () => done($mol_dom_context);
                script.onerror = () => fail(new Error(`Can not import ${uri}`));
            });
        }
        static style(uri) {
            return $mol_wire_sync(this).style_async(uri);
        }
        static style_async(uri) {
            const doc = $mol_dom_context.document;
            const style = doc.createElement('link');
            style.rel = 'stylesheet';
            style.href = uri;
            doc.head.appendChild(style);
            return new Promise((done, fail) => {
                style.onload = () => done(style.sheet);
                style.onerror = () => fail(new Error(`Can not import ${uri}`));
            });
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_import, "module", null);
    __decorate([
        $mol_mem_key
    ], $mol_import, "script", null);
    __decorate([
        $mol_mem_key
    ], $mol_import, "style", null);
    $.$mol_import = $mol_import;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $bog_quiz_lib extends $mol_object2 {
        static lodash() {
            $mol_import.script('bog/quiz/lib/lodash.bundle.js');
            return globalThis._;
        }
        static moment() {
            $mol_import.script('bog/quiz/lib/moment.bundle.js');
            return globalThis.moment;
        }
        static get libraries() {
            return {
                lodash: 'Утилиты для работы с массивами, объектами и строками',
                moment: 'Работа с датами и временем',
            };
        }
    }
    $.$bog_quiz_lib = $bog_quiz_lib;
})($ || ($ = {}));

;

var $node = $node || {}
void function( module ) { var exports = module.exports = this; function require( id ) { return $node[ id.replace( /^.\// , "../bog/quiz/lib/" ) ] }; 
;
var axios=(()=>{(function($,tt){typeof exports=="object"&&typeof module<"u"?module.exports=tt():typeof define=="function"&&define.amd?define(tt):($=typeof globalThis<"u"?globalThis:$||self).axios=tt()})(void 0,function(){"use strict";function $(t){var e,r;function n(a,i){try{var u=t[a](i),c=u.value,l=c instanceof tt;Promise.resolve(l?c.v:c).then(function(f){if(l){var b=a==="return"?"return":"next";if(!c.k||f.done)return n(b,f);f=t[b](f).value}o(u.done?"return":"normal",f)},function(f){n("throw",f)})}catch(f){o("throw",f)}}function o(a,i){switch(a){case"return":e.resolve({value:i,done:!0});break;case"throw":e.reject(i);break;default:e.resolve({value:i,done:!1})}(e=e.next)?n(e.key,e.arg):r=null}this._invoke=function(a,i){return new Promise(function(u,c){var l={key:a,arg:i,resolve:u,reject:c,next:null};r?r=r.next=l:(e=r=l,n(a,i))})},typeof t.return!="function"&&(this.return=void 0)}function tt(t,e){this.v=t,this.k=e}function oe(t){var e={},r=!1;function n(o,a){return r=!0,a=new Promise(function(i){i(t[o](a))}),{done:!1,value:new tt(a,1)}}return e[typeof Symbol<"u"&&Symbol.iterator||"@@iterator"]=function(){return this},e.next=function(o){return r?(r=!1,o):n("next",o)},typeof t.throw=="function"&&(e.throw=function(o){if(r)throw r=!1,o;return n("throw",o)}),typeof t.return=="function"&&(e.return=function(o){return r?(r=!1,o):n("return",o)}),e}function Ut(t){var e,r,n,o=2;for(typeof Symbol<"u"&&(r=Symbol.asyncIterator,n=Symbol.iterator);o--;){if(r&&(e=t[r])!=null)return e.call(t);if(n&&(e=t[n])!=null)return new ht(e.call(t));r="@@asyncIterator",n="@@iterator"}throw new TypeError("Object is not async iterable")}function ht(t){function e(r){if(Object(r)!==r)return Promise.reject(new TypeError(r+" is not an object."));var n=r.done;return Promise.resolve(r.value).then(function(o){return{value:o,done:n}})}return ht=function(r){this.s=r,this.n=r.next},ht.prototype={s:null,n:null,next:function(){return e(this.n.apply(this.s,arguments))},return:function(r){var n=this.s.return;return n===void 0?Promise.resolve({value:r,done:!0}):e(n.apply(this.s,arguments))},throw:function(r){var n=this.s.return;return n===void 0?Promise.reject(r):e(n.apply(this.s,arguments))}},new ht(t)}function vt(t){return new tt(t,0)}function ie(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),r.push.apply(r,n)}return r}function Y(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?ie(Object(r),!0).forEach(function(n){fe(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ie(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function U(){U=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(h,d,v){h[d]=v.value},a=typeof Symbol=="function"?Symbol:{},i=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(h,d,v){return Object.defineProperty(h,d,{value:v,enumerable:!0,configurable:!0,writable:!0}),h[d]}try{l({},"")}catch{l=function(d,v,x){return d[v]=x}}function f(h,d,v,x){var w=d&&d.prototype instanceof g?d:g,j=Object.create(w.prototype),N=new Z(x||[]);return o(j,"_invoke",{value:Ct(h,v,N)}),j}function b(h,d,v){try{return{type:"normal",arg:h.call(d,v)}}catch(x){return{type:"throw",arg:x}}}e.wrap=f;var m="suspendedStart",E="executing",R="completed",p={};function g(){}function O(){}function S(){}var y={};l(y,i,function(){return this});var T=Object.getPrototypeOf,C=T&&T(T(ot([])));C&&C!==r&&n.call(C,i)&&(y=C);var P=S.prototype=g.prototype=Object.create(y);function L(h){["next","throw","return"].forEach(function(d){l(h,d,function(v){return this._invoke(d,v)})})}function Q(h,d){function v(w,j,N,F){var D=b(h[w],h,j);if(D.type!=="throw"){var V=D.arg,G=V.value;return G&&typeof G=="object"&&n.call(G,"__await")?d.resolve(G.__await).then(function(J){v("next",J,N,F)},function(J){v("throw",J,N,F)}):d.resolve(G).then(function(J){V.value=J,N(V)},function(J){return v("throw",J,N,F)})}F(D.arg)}var x;o(this,"_invoke",{value:function(w,j){function N(){return new d(function(F,D){v(w,j,F,D)})}return x=x?x.then(N,N):N()}})}function Ct(h,d,v){var x=m;return function(w,j){if(x===E)throw new Error("Generator is already running");if(x===R){if(w==="throw")throw j;return{value:t,done:!0}}for(v.method=w,v.arg=j;;){var N=v.delegate;if(N){var F=rt(N,v);if(F){if(F===p)continue;return F}}if(v.method==="next")v.sent=v._sent=v.arg;else if(v.method==="throw"){if(x===m)throw x=R,v.arg;v.dispatchException(v.arg)}else v.method==="return"&&v.abrupt("return",v.arg);x=E;var D=b(h,d,v);if(D.type==="normal"){if(x=v.done?R:"suspendedYield",D.arg===p)continue;return{value:D.arg,done:v.done}}D.type==="throw"&&(x=R,v.method="throw",v.arg=D.arg)}}}function rt(h,d){var v=d.method,x=h.iterator[v];if(x===t)return d.delegate=null,v==="throw"&&h.iterator.return&&(d.method="return",d.arg=t,rt(h,d),d.method==="throw")||v!=="return"&&(d.method="throw",d.arg=new TypeError("The iterator does not provide a '"+v+"' method")),p;var w=b(x,h.iterator,d.arg);if(w.type==="throw")return d.method="throw",d.arg=w.arg,d.delegate=null,p;var j=w.arg;return j?j.done?(d[h.resultName]=j.value,d.next=h.nextLoc,d.method!=="return"&&(d.method="next",d.arg=t),d.delegate=null,p):j:(d.method="throw",d.arg=new TypeError("iterator result is not an object"),d.delegate=null,p)}function dt(h){var d={tryLoc:h[0]};1 in h&&(d.catchLoc=h[1]),2 in h&&(d.finallyLoc=h[2],d.afterLoc=h[3]),this.tryEntries.push(d)}function q(h){var d=h.completion||{};d.type="normal",delete d.arg,h.completion=d}function Z(h){this.tryEntries=[{tryLoc:"root"}],h.forEach(dt,this),this.reset(!0)}function ot(h){if(h||h===""){var d=h[i];if(d)return d.call(h);if(typeof h.next=="function")return h;if(!isNaN(h.length)){var v=-1,x=function w(){for(;++v<h.length;)if(n.call(h,v))return w.value=h[v],w.done=!1,w;return w.value=t,w.done=!0,w};return x.next=x}}throw new TypeError(typeof h+" is not iterable")}return O.prototype=S,o(P,"constructor",{value:S,configurable:!0}),o(S,"constructor",{value:O,configurable:!0}),O.displayName=l(S,c,"GeneratorFunction"),e.isGeneratorFunction=function(h){var d=typeof h=="function"&&h.constructor;return!!d&&(d===O||(d.displayName||d.name)==="GeneratorFunction")},e.mark=function(h){return Object.setPrototypeOf?Object.setPrototypeOf(h,S):(h.__proto__=S,l(h,c,"GeneratorFunction")),h.prototype=Object.create(P),h},e.awrap=function(h){return{__await:h}},L(Q.prototype),l(Q.prototype,u,function(){return this}),e.AsyncIterator=Q,e.async=function(h,d,v,x,w){w===void 0&&(w=Promise);var j=new Q(f(h,d,v,x),w);return e.isGeneratorFunction(d)?j:j.next().then(function(N){return N.done?N.value:j.next()})},L(P),l(P,c,"Generator"),l(P,i,function(){return this}),l(P,"toString",function(){return"[object Generator]"}),e.keys=function(h){var d=Object(h),v=[];for(var x in d)v.push(x);return v.reverse(),function w(){for(;v.length;){var j=v.pop();if(j in d)return w.value=j,w.done=!1,w}return w.done=!0,w}},e.values=ot,Z.prototype={constructor:Z,reset:function(h){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(q),!h)for(var d in this)d.charAt(0)==="t"&&n.call(this,d)&&!isNaN(+d.slice(1))&&(this[d]=t)},stop:function(){this.done=!0;var h=this.tryEntries[0].completion;if(h.type==="throw")throw h.arg;return this.rval},dispatchException:function(h){if(this.done)throw h;var d=this;function v(D,V){return j.type="throw",j.arg=h,d.next=D,V&&(d.method="next",d.arg=t),!!V}for(var x=this.tryEntries.length-1;x>=0;--x){var w=this.tryEntries[x],j=w.completion;if(w.tryLoc==="root")return v("end");if(w.tryLoc<=this.prev){var N=n.call(w,"catchLoc"),F=n.call(w,"finallyLoc");if(N&&F){if(this.prev<w.catchLoc)return v(w.catchLoc,!0);if(this.prev<w.finallyLoc)return v(w.finallyLoc)}else if(N){if(this.prev<w.catchLoc)return v(w.catchLoc,!0)}else{if(!F)throw new Error("try statement without catch or finally");if(this.prev<w.finallyLoc)return v(w.finallyLoc)}}}},abrupt:function(h,d){for(var v=this.tryEntries.length-1;v>=0;--v){var x=this.tryEntries[v];if(x.tryLoc<=this.prev&&n.call(x,"finallyLoc")&&this.prev<x.finallyLoc){var w=x;break}}w&&(h==="break"||h==="continue")&&w.tryLoc<=d&&d<=w.finallyLoc&&(w=null);var j=w?w.completion:{};return j.type=h,j.arg=d,w?(this.method="next",this.next=w.finallyLoc,p):this.complete(j)},complete:function(h,d){if(h.type==="throw")throw h.arg;return h.type==="break"||h.type==="continue"?this.next=h.arg:h.type==="return"?(this.rval=this.arg=h.arg,this.method="return",this.next="end"):h.type==="normal"&&d&&(this.next=d),p},finish:function(h){for(var d=this.tryEntries.length-1;d>=0;--d){var v=this.tryEntries[d];if(v.finallyLoc===h)return this.complete(v.completion,v.afterLoc),q(v),p}},catch:function(h){for(var d=this.tryEntries.length-1;d>=0;--d){var v=this.tryEntries[d];if(v.tryLoc===h){var x=v.completion;if(x.type==="throw"){var w=x.arg;q(v)}return w}}throw new Error("illegal catch attempt")},delegateYield:function(h,d,v){return this.delegate={iterator:ot(h),resultName:d,nextLoc:v},this.method==="next"&&(this.arg=t),p}},e}function ae(t){var e=function(r,n){if(typeof r!="object"||!r)return r;var o=r[Symbol.toPrimitive];if(o!==void 0){var a=o.call(r,n||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(r)}(t,"string");return typeof e=="symbol"?e:String(e)}function W(t){return W=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},W(t)}function ue(t){return function(){return new $(t.apply(this,arguments))}}function se(t,e,r,n,o,a,i){try{var u=t[a](i),c=u.value}catch(l){return void r(l)}u.done?e(c):Promise.resolve(c).then(n,o)}function it(t){return function(){var e=this,r=arguments;return new Promise(function(n,o){var a=t.apply(e,r);function i(c){se(a,n,o,i,u,"next",c)}function u(c){se(a,n,o,i,u,"throw",c)}i(void 0)})}}function mt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ce(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,ae(n.key),n)}}function yt(t,e,r){return e&&ce(t.prototype,e),r&&ce(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function fe(t,e,r){return(e=ae(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function K(t,e){return function(r){if(Array.isArray(r))return r}(t)||function(r,n){var o=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(o!=null){var a,i,u,c,l=[],f=!0,b=!1;try{if(u=(o=o.call(r)).next,n===0){if(Object(o)!==o)return;f=!1}else for(;!(f=(a=u.call(o)).done)&&(l.push(a.value),l.length!==n);f=!0);}catch(m){b=!0,i=m}finally{try{if(!f&&o.return!=null&&(c=o.return(),Object(c)!==c))return}finally{if(b)throw i}}return l}}(t,e)||Ft(t,e)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function le(t){return function(e){if(Array.isArray(e))return Bt(e)}(t)||function(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}(t)||Ft(t)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function Ft(t,e){if(t){if(typeof t=="string")return Bt(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set"?Array.from(t):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Bt(t,e):void 0}}function Bt(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function pe(t,e){return function(){return t.apply(e,arguments)}}$.prototype[typeof Symbol=="function"&&Symbol.asyncIterator||"@@asyncIterator"]=function(){return this},$.prototype.next=function(t){return this._invoke("next",t)},$.prototype.throw=function(t){return this._invoke("throw",t)},$.prototype.return=function(t){return this._invoke("return",t)};var Dt,on=Object.prototype.toString,It=Object.getPrototypeOf,bt=Symbol.iterator,de=Symbol.toStringTag,gt=(Dt=Object.create(null),function(t){var e=on.call(t);return Dt[e]||(Dt[e]=e.slice(8,-1).toLowerCase())}),M=function(t){return t=t.toLowerCase(),function(e){return gt(e)===t}},wt=function(t){return function(e){return W(e)===t}},at=Array.isArray,ut=wt("undefined");function ct(t){return t!==null&&!ut(t)&&t.constructor!==null&&!ut(t.constructor)&&I(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}var he=M("ArrayBuffer"),an=wt("string"),I=wt("function"),ve=wt("number"),ft=function(t){return t!==null&&W(t)==="object"},Et=function(t){if(gt(t)!=="object")return!1;var e=It(t);return!(e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||de in t||bt in t)},un=M("Date"),sn=M("File"),cn=M("Blob"),fn=M("FileList"),ln=M("URLSearchParams"),Ot=K(["ReadableStream","Request","Response","Headers"].map(M),4),pn=Ot[0],dn=Ot[1],hn=Ot[2],vn=Ot[3];function lt(t,e){var r,n,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=o.allOwnKeys,i=a!==void 0&&a;if(t!=null)if(W(t)!=="object"&&(t=[t]),at(t))for(r=0,n=t.length;r<n;r++)e.call(null,t[r],r,t);else{if(ct(t))return;var u,c=i?Object.getOwnPropertyNames(t):Object.keys(t),l=c.length;for(r=0;r<l;r++)u=c[r],e.call(null,t[u],u,t)}}function me(t,e){if(ct(t))return null;e=e.toLowerCase();for(var r,n=Object.keys(t),o=n.length;o-- >0;)if(e===(r=n[o]).toLowerCase())return r;return null}var et=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,ye=function(t){return!ut(t)&&t!==et},qt,mn=(qt=typeof Uint8Array<"u"&&It(Uint8Array),function(t){return qt&&t instanceof qt}),yn=M("HTMLFormElement"),be=function(t){var e=Object.prototype.hasOwnProperty;return function(r,n){return e.call(r,n)}}(),bn=M("RegExp"),ge=function(t,e){var r=Object.getOwnPropertyDescriptors(t),n={};lt(r,function(o,a){var i;(i=e(o,a,t))!==!1&&(n[a]=i||o)}),Object.defineProperties(t,n)},we,Ee,Mt,St,gn=M("AsyncFunction"),Oe=(we=typeof setImmediate=="function",Ee=I(et.postMessage),we?setImmediate:Ee?(Mt="axios@".concat(Math.random()),St=[],et.addEventListener("message",function(t){var e=t.source,r=t.data;e===et&&r===Mt&&St.length&&St.shift()()},!1),function(t){St.push(t),et.postMessage(Mt,"*")}):function(t){return setTimeout(t)}),wn=typeof queueMicrotask<"u"?queueMicrotask.bind(et):typeof process<"u"&&process.nextTick||Oe,s={isArray:at,isArrayBuffer:he,isBuffer:ct,isFormData:function(t){var e;return t&&(typeof FormData=="function"&&t instanceof FormData||I(t.append)&&((e=gt(t))==="formdata"||e==="object"&&I(t.toString)&&t.toString()==="[object FormData]"))},isArrayBufferView:function(t){return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&he(t.buffer)},isString:an,isNumber:ve,isBoolean:function(t){return t===!0||t===!1},isObject:ft,isPlainObject:Et,isEmptyObject:function(t){if(!ft(t)||ct(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},isReadableStream:pn,isRequest:dn,isResponse:hn,isHeaders:vn,isUndefined:ut,isDate:un,isFile:sn,isBlob:cn,isRegExp:bn,isFunction:I,isStream:function(t){return ft(t)&&I(t.pipe)},isURLSearchParams:ln,isTypedArray:mn,isFileList:fn,forEach:lt,merge:function t(){for(var e=ye(this)&&this||{},r=e.caseless,n=e.skipUndefined,o={},a=function(c,l){var f=r&&me(o,l)||l;Et(o[f])&&Et(c)?o[f]=t(o[f],c):Et(c)?o[f]=t({},c):at(c)?o[f]=c.slice():n&&ut(c)||(o[f]=c)},i=0,u=arguments.length;i<u;i++)arguments[i]&&lt(arguments[i],a);return o},extend:function(t,e,r){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},o=n.allOwnKeys;return lt(e,function(a,i){r&&I(a)?t[i]=pe(a,r):t[i]=a},{allOwnKeys:o}),t},trim:function(t){return t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},stripBOM:function(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t},inherits:function(t,e,r,n){t.prototype=Object.create(e.prototype,n),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),r&&Object.assign(t.prototype,r)},toFlatObject:function(t,e,r,n){var o,a,i,u={};if(e=e||{},t==null)return e;do{for(a=(o=Object.getOwnPropertyNames(t)).length;a-- >0;)i=o[a],n&&!n(i,t,e)||u[i]||(e[i]=t[i],u[i]=!0);t=r!==!1&&It(t)}while(t&&(!r||r(t,e))&&t!==Object.prototype);return e},kindOf:gt,kindOfTest:M,endsWith:function(t,e,r){t=String(t),(r===void 0||r>t.length)&&(r=t.length),r-=e.length;var n=t.indexOf(e,r);return n!==-1&&n===r},toArray:function(t){if(!t)return null;if(at(t))return t;var e=t.length;if(!ve(e))return null;for(var r=new Array(e);e-- >0;)r[e]=t[e];return r},forEachEntry:function(t,e){for(var r,n=(t&&t[bt]).call(t);(r=n.next())&&!r.done;){var o=r.value;e.call(t,o[0],o[1])}},matchAll:function(t,e){for(var r,n=[];(r=t.exec(e))!==null;)n.push(r);return n},isHTMLForm:yn,hasOwnProperty:be,hasOwnProp:be,reduceDescriptors:ge,freezeMethods:function(t){ge(t,function(e,r){if(I(t)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;var n=t[r];I(n)&&(e.enumerable=!1,"writable"in e?e.writable=!1:e.set||(e.set=function(){throw Error("Can not rewrite read-only method '"+r+"'")}))})},toObjectSet:function(t,e){var r={},n=function(o){o.forEach(function(a){r[a]=!0})};return at(t)?n(t):n(String(t).split(e)),r},toCamelCase:function(t){return t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,r,n){return r.toUpperCase()+n})},noop:function(){},toFiniteNumber:function(t,e){return t!=null&&Number.isFinite(t=+t)?t:e},findKey:me,global:et,isContextDefined:ye,isSpecCompliantForm:function(t){return!!(t&&I(t.append)&&t[de]==="FormData"&&t[bt])},toJSONObject:function(t){var e=new Array(10);return function r(n,o){if(ft(n)){if(e.indexOf(n)>=0)return;if(ct(n))return n;if(!("toJSON"in n)){e[o]=n;var a=at(n)?[]:{};return lt(n,function(i,u){var c=r(i,o+1);!ut(c)&&(a[u]=c)}),e[o]=void 0,a}}return n}(t,0)},isAsyncFn:gn,isThenable:function(t){return t&&(ft(t)||I(t))&&I(t.then)&&I(t.catch)},setImmediate:Oe,asap:wn,isIterable:function(t){return t!=null&&I(t[bt])}};function k(t,e,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o,this.status=o.status?o.status:null)}s.inherits(k,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:s.toJSONObject(this.config),code:this.code,status:this.status}}});var Se=k.prototype,xe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(function(t){xe[t]={value:t}}),Object.defineProperties(k,xe),Object.defineProperty(Se,"isAxiosError",{value:!0}),k.from=function(t,e,r,n,o,a){var i=Object.create(Se);s.toFlatObject(t,i,function(l){return l!==Error.prototype},function(l){return l!=="isAxiosError"});var u=t&&t.message?t.message:"Error",c=e==null&&t?t.code:e;return k.call(i,u,c,r,n,o),t&&i.cause==null&&Object.defineProperty(i,"cause",{value:t,configurable:!0}),i.name=t&&t.name||"Error",a&&Object.assign(i,a),i};function zt(t){return s.isPlainObject(t)||s.isArray(t)}function Re(t){return s.endsWith(t,"[]")?t.slice(0,-2):t}function ke(t,e,r){return t?t.concat(e).map(function(n,o){return n=Re(n),!r&&o?"["+n+"]":n}).join(r?".":""):e}var En=s.toFlatObject(s,{},null,function(t){return/^is[A-Z]/.test(t)});function xt(t,e,r){if(!s.isObject(t))throw new TypeError("target must be an object");e=e||new FormData;var n=(r=s.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,E){return!s.isUndefined(E[m])})).metaTokens,o=r.visitor||l,a=r.dots,i=r.indexes,u=(r.Blob||typeof Blob<"u"&&Blob)&&s.isSpecCompliantForm(e);if(!s.isFunction(o))throw new TypeError("visitor must be a function");function c(m){if(m===null)return"";if(s.isDate(m))return m.toISOString();if(s.isBoolean(m))return m.toString();if(!u&&s.isBlob(m))throw new k("Blob is not supported. Use a Buffer instead.");return s.isArrayBuffer(m)||s.isTypedArray(m)?u&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function l(m,E,R){var p=m;if(m&&!R&&W(m)==="object"){if(s.endsWith(E,"{}"))E=n?E:E.slice(0,-2),m=JSON.stringify(m);else if(s.isArray(m)&&function(g){return s.isArray(g)&&!g.some(zt)}(m)||(s.isFileList(m)||s.endsWith(E,"[]"))&&(p=s.toArray(m)))return E=Re(E),p.forEach(function(g,O){!s.isUndefined(g)&&g!==null&&e.append(i===!0?ke([E],O,a):i===null?E:E+"[]",c(g))}),!1}return!!zt(m)||(e.append(ke(R,E,a),c(m)),!1)}var f=[],b=Object.assign(En,{defaultVisitor:l,convertValue:c,isVisitable:zt});if(!s.isObject(t))throw new TypeError("data must be an object");return function m(E,R){if(!s.isUndefined(E)){if(f.indexOf(E)!==-1)throw Error("Circular reference detected in "+R.join("."));f.push(E),s.forEach(E,function(p,g){(!(s.isUndefined(p)||p===null)&&o.call(e,p,s.isString(g)?g.trim():g,R,b))===!0&&m(p,R?R.concat(g):[g])}),f.pop()}}(t),e}function Te(t){var e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Ht(t,e){this._pairs=[],t&&xt(t,this,e)}var je=Ht.prototype;function On(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Ae(t,e,r){if(!e)return t;var n=r&&r.encode||On;s.isFunction(r)&&(r={serialize:r});var o,a=r&&r.serialize;if(o=a?a(e,r):s.isURLSearchParams(e)?e.toString():new Ht(e,r).toString(n)){var i=t.indexOf("#");i!==-1&&(t=t.slice(0,i)),t+=(t.indexOf("?")===-1?"?":"&")+o}return t}je.append=function(t,e){this._pairs.push([t,e])},je.toString=function(t){var e=t?function(r){return t.call(this,r,Te)}:Te;return this._pairs.map(function(r){return e(r[0])+"="+e(r[1])},"").join("&")};var Pe=function(){function t(){mt(this,t),this.handlers=[]}return yt(t,[{key:"use",value:function(e,r,n){return this.handlers.push({fulfilled:e,rejected:r,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}},{key:"eject",value:function(e){this.handlers[e]&&(this.handlers[e]=null)}},{key:"clear",value:function(){this.handlers&&(this.handlers=[])}},{key:"forEach",value:function(e){s.forEach(this.handlers,function(r){r!==null&&e(r)})}}]),t}(),Le={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Sn={isBrowser:!0,classes:{URLSearchParams:typeof URLSearchParams<"u"?URLSearchParams:Ht,FormData:typeof FormData<"u"?FormData:null,Blob:typeof Blob<"u"?Blob:null},protocols:["http","https","file","blob","url","data"]},Jt=typeof window<"u"&&typeof document<"u",Wt=(typeof navigator>"u"?"undefined":W(navigator))==="object"&&navigator||void 0,xn=Jt&&(!Wt||["ReactNative","NativeScript","NS"].indexOf(Wt.product)<0),Rn=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",kn=Jt&&window.location.href||"http://localhost",B=Y(Y({},Object.freeze({__proto__:null,hasBrowserEnv:Jt,hasStandardBrowserWebWorkerEnv:Rn,hasStandardBrowserEnv:xn,navigator:Wt,origin:kn})),Sn);function Ne(t){function e(n,o,a,i){var u=n[i++];if(u==="__proto__")return!0;var c=Number.isFinite(+u),l=i>=n.length;return u=!u&&s.isArray(a)?a.length:u,l?(s.hasOwnProp(a,u)?a[u]=[a[u],o]:a[u]=o,!c):(a[u]&&s.isObject(a[u])||(a[u]=[]),e(n,o,a[u],i)&&s.isArray(a[u])&&(a[u]=function(f){var b,m,E={},R=Object.keys(f),p=R.length;for(b=0;b<p;b++)E[m=R[b]]=f[m];return E}(a[u])),!c)}if(s.isFormData(t)&&s.isFunction(t.entries)){var r={};return s.forEachEntry(t,function(n,o){e(function(a){return s.matchAll(/\w+|\[(\w*)]/g,a).map(function(i){return i[0]==="[]"?"":i[1]||i[0]})}(n),o,r,0)}),r}return null}var Kt={transitional:Le,adapter:["xhr","http","fetch"],transformRequest:[function(t,e){var r,n=e.getContentType()||"",o=n.indexOf("application/json")>-1,a=s.isObject(t);if(a&&s.isHTMLForm(t)&&(t=new FormData(t)),s.isFormData(t))return o?JSON.stringify(Ne(t)):t;if(s.isArrayBuffer(t)||s.isBuffer(t)||s.isStream(t)||s.isFile(t)||s.isBlob(t)||s.isReadableStream(t))return t;if(s.isArrayBufferView(t))return t.buffer;if(s.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();if(a){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(u,c){return xt(u,new B.classes.URLSearchParams,Y({visitor:function(l,f,b,m){return B.isNode&&s.isBuffer(l)?(this.append(f,l.toString("base64")),!1):m.defaultVisitor.apply(this,arguments)}},c))}(t,this.formSerializer).toString();if((r=s.isFileList(t))||n.indexOf("multipart/form-data")>-1){var i=this.env&&this.env.FormData;return xt(r?{"files[]":t}:t,i&&new i,this.formSerializer)}}return a||o?(e.setContentType("application/json",!1),function(u,c,l){if(s.isString(u))try{return(c||JSON.parse)(u),s.trim(u)}catch(f){if(f.name!=="SyntaxError")throw f}return(l||JSON.stringify)(u)}(t)):t}],transformResponse:[function(t){var e=this.transitional||Kt.transitional,r=e&&e.forcedJSONParsing,n=this.responseType==="json";if(s.isResponse(t)||s.isReadableStream(t))return t;if(t&&s.isString(t)&&(r&&!this.responseType||n)){var o=!(e&&e.silentJSONParsing)&&n;try{return JSON.parse(t,this.parseReviver)}catch(a){if(o)throw a.name==="SyntaxError"?k.from(a,k.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:B.classes.FormData,Blob:B.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};s.forEach(["delete","get","head","post","put","patch"],function(t){Kt.headers[t]={}});var Vt=Kt,Tn=s.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ce=Symbol("internals");function pt(t){return t&&String(t).trim().toLowerCase()}function Rt(t){return t===!1||t==null?t:s.isArray(t)?t.map(Rt):String(t)}function Gt(t,e,r,n,o){return s.isFunction(n)?n.call(this,e,r):(o&&(e=r),s.isString(e)?s.isString(n)?e.indexOf(n)!==-1:s.isRegExp(n)?n.test(e):void 0:void 0)}var kt=function(t,e){function r(n){mt(this,r),n&&this.set(n)}return yt(r,[{key:"set",value:function(n,o,a){var i=this;function u(p,g,O){var S=pt(g);if(!S)throw new Error("header name must be a non-empty string");var y=s.findKey(i,S);(!y||i[y]===void 0||O===!0||O===void 0&&i[y]!==!1)&&(i[y||g]=Rt(p))}var c=function(p,g){return s.forEach(p,function(O,S){return u(O,S,g)})};if(s.isPlainObject(n)||n instanceof this.constructor)c(n,o);else if(s.isString(n)&&(n=n.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim()))c(function(p){var g,O,S,y={};return p&&p.split(`
`).forEach(function(T){S=T.indexOf(":"),g=T.substring(0,S).trim().toLowerCase(),O=T.substring(S+1).trim(),!g||y[g]&&Tn[g]||(g==="set-cookie"?y[g]?y[g].push(O):y[g]=[O]:y[g]=y[g]?y[g]+", "+O:O)}),y}(n),o);else if(s.isObject(n)&&s.isIterable(n)){var l,f,b,m={},E=function(p,g){var O=typeof Symbol<"u"&&p[Symbol.iterator]||p["@@iterator"];if(!O){if(Array.isArray(p)||(O=Ft(p))||g&&p&&typeof p.length=="number"){O&&(p=O);var S=0,y=function(){};return{s:y,n:function(){return S>=p.length?{done:!0}:{done:!1,value:p[S++]}},e:function(L){throw L},f:y}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var T,C=!0,P=!1;return{s:function(){O=O.call(p)},n:function(){var L=O.next();return C=L.done,L},e:function(L){P=!0,T=L},f:function(){try{C||O.return==null||O.return()}finally{if(P)throw T}}}}(n);try{for(E.s();!(b=E.n()).done;){var R=b.value;if(!s.isArray(R))throw TypeError("Object iterator must return a key-value pair");m[f=R[0]]=(l=m[f])?s.isArray(l)?[].concat(le(l),[R[1]]):[l,R[1]]:R[1]}}catch(p){E.e(p)}finally{E.f()}c(m,o)}else n!=null&&u(o,n,a);return this}},{key:"get",value:function(n,o){if(n=pt(n)){var a=s.findKey(this,n);if(a){var i=this[a];if(!o)return i;if(o===!0)return function(u){for(var c,l=Object.create(null),f=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;c=f.exec(u);)l[c[1]]=c[2];return l}(i);if(s.isFunction(o))return o.call(this,i,a);if(s.isRegExp(o))return o.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}},{key:"has",value:function(n,o){if(n=pt(n)){var a=s.findKey(this,n);return!(!a||this[a]===void 0||o&&!Gt(0,this[a],a,o))}return!1}},{key:"delete",value:function(n,o){var a=this,i=!1;function u(c){if(c=pt(c)){var l=s.findKey(a,c);!l||o&&!Gt(0,a[l],l,o)||(delete a[l],i=!0)}}return s.isArray(n)?n.forEach(u):u(n),i}},{key:"clear",value:function(n){for(var o=Object.keys(this),a=o.length,i=!1;a--;){var u=o[a];n&&!Gt(0,this[u],u,n,!0)||(delete this[u],i=!0)}return i}},{key:"normalize",value:function(n){var o=this,a={};return s.forEach(this,function(i,u){var c=s.findKey(a,u);if(c)return o[c]=Rt(i),void delete o[u];var l=n?function(f){return f.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,function(b,m,E){return m.toUpperCase()+E})}(u):String(u).trim();l!==u&&delete o[u],o[l]=Rt(i),a[l]=!0}),this}},{key:"concat",value:function(){for(var n,o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(n=this.constructor).concat.apply(n,[this].concat(a))}},{key:"toJSON",value:function(n){var o=Object.create(null);return s.forEach(this,function(a,i){a!=null&&a!==!1&&(o[i]=n&&s.isArray(a)?a.join(", "):a)}),o}},{key:Symbol.iterator,value:function(){return Object.entries(this.toJSON())[Symbol.iterator]()}},{key:"toString",value:function(){return Object.entries(this.toJSON()).map(function(n){var o=K(n,2);return o[0]+": "+o[1]}).join(`
`)}},{key:"getSetCookie",value:function(){return this.get("set-cookie")||[]}},{key:Symbol.toStringTag,get:function(){return"AxiosHeaders"}}],[{key:"from",value:function(n){return n instanceof this?n:new this(n)}},{key:"concat",value:function(n){for(var o=new this(n),a=arguments.length,i=new Array(a>1?a-1:0),u=1;u<a;u++)i[u-1]=arguments[u];return i.forEach(function(c){return o.set(c)}),o}},{key:"accessor",value:function(n){var o=(this[Ce]=this[Ce]={accessors:{}}).accessors,a=this.prototype;function i(u){var c=pt(u);o[c]||(function(l,f){var b=s.toCamelCase(" "+f);["get","set","has"].forEach(function(m){Object.defineProperty(l,m+b,{value:function(E,R,p){return this[m].call(this,f,E,R,p)},configurable:!0})})}(a,u),o[c]=!0)}return s.isArray(n)?n.forEach(i):i(n),this}}]),r}();kt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),s.reduceDescriptors(kt.prototype,function(t,e){var r=t.value,n=e[0].toUpperCase()+e.slice(1);return{get:function(){return r},set:function(o){this[n]=o}}}),s.freezeMethods(kt);var z=kt;function Xt(t,e){var r=this||Vt,n=e||r,o=z.from(n.headers),a=n.data;return s.forEach(t,function(i){a=i.call(r,a,o.normalize(),e?e.status:void 0)}),o.normalize(),a}function _e(t){return!(!t||!t.__CANCEL__)}function st(t,e,r){k.call(this,t??"canceled",k.ERR_CANCELED,e,r),this.name="CanceledError"}function Ue(t,e,r){var n=r.config.validateStatus;r.status&&n&&!n(r.status)?e(new k("Request failed with status code "+r.status,[k.ERR_BAD_REQUEST,k.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):t(r)}function jn(t,e){t=t||10;var r,n=new Array(t),o=new Array(t),a=0,i=0;return e=e!==void 0?e:1e3,function(u){var c=Date.now(),l=o[i];r||(r=c),n[a]=u,o[a]=c;for(var f=i,b=0;f!==a;)b+=n[f++],f%=t;if((a=(a+1)%t)===i&&(i=(i+1)%t),!(c-r<e)){var m=l&&c-l;return m?Math.round(1e3*b/m):void 0}}}function An(t,e){var r,n,o=0,a=1e3/e,i=function(u){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Date.now();o=c,r=null,n&&(clearTimeout(n),n=null),t.apply(void 0,le(u))};return[function(){for(var u=Date.now(),c=u-o,l=arguments.length,f=new Array(l),b=0;b<l;b++)f[b]=arguments[b];c>=a?i(f,u):(r=f,n||(n=setTimeout(function(){n=null,i(r)},a-c)))},function(){return r&&i(r)}]}s.inherits(st,k,{__CANCEL__:!0});var Tt=function(t,e){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:3,n=0,o=jn(50,250);return An(function(a){var i=a.loaded,u=a.lengthComputable?a.total:void 0,c=i-n,l=o(c);n=i;var f=fe({loaded:i,total:u,progress:u?i/u:void 0,bytes:c,rate:l||void 0,estimated:l&&u&&i<=u?(u-i)/l:void 0,event:a,lengthComputable:u!=null},e?"download":"upload",!0);t(f)},r)},Fe=function(t,e){var r=t!=null;return[function(n){return e[0]({lengthComputable:r,total:t,loaded:n})},e[1]]},Be=function(t){return function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return s.asap(function(){return t.apply(void 0,r)})}},Pn=B.hasStandardBrowserEnv?function(t,e){return function(r){return r=new URL(r,B.origin),t.protocol===r.protocol&&t.host===r.host&&(e||t.port===r.port)}}(new URL(B.origin),B.navigator&&/(msie|trident)/i.test(B.navigator.userAgent)):function(){return!0},Ln=B.hasStandardBrowserEnv?{write:function(t,e,r,n,o,a,i){if(typeof document<"u"){var u=["".concat(t,"=").concat(encodeURIComponent(e))];s.isNumber(r)&&u.push("expires=".concat(new Date(r).toUTCString())),s.isString(n)&&u.push("path=".concat(n)),s.isString(o)&&u.push("domain=".concat(o)),a===!0&&u.push("secure"),s.isString(i)&&u.push("SameSite=".concat(i)),document.cookie=u.join("; ")}},read:function(t){if(typeof document>"u")return null;var e=document.cookie.match(new RegExp("(?:^|; )"+t+"=([^;]*)"));return e?decodeURIComponent(e[1]):null},remove:function(t){this.write(t,"",Date.now()-864e5,"/")}}:{write:function(){},read:function(){return null},remove:function(){}};function De(t,e,r){var n=!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);return t&&(n||r==0)?function(o,a){return a?o.replace(/\/?\/$/,"")+"/"+a.replace(/^\/+/,""):o}(t,e):e}var Ie=function(t){return t instanceof z?Y({},t):t};function nt(t,e){e=e||{};var r={};function n(l,f,b,m){return s.isPlainObject(l)&&s.isPlainObject(f)?s.merge.call({caseless:m},l,f):s.isPlainObject(f)?s.merge({},f):s.isArray(f)?f.slice():f}function o(l,f,b,m){return s.isUndefined(f)?s.isUndefined(l)?void 0:n(void 0,l,0,m):n(l,f,0,m)}function a(l,f){if(!s.isUndefined(f))return n(void 0,f)}function i(l,f){return s.isUndefined(f)?s.isUndefined(l)?void 0:n(void 0,l):n(void 0,f)}function u(l,f,b){return b in e?n(l,f):b in t?n(void 0,l):void 0}var c={url:a,method:a,data:a,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:u,headers:function(l,f,b){return o(Ie(l),Ie(f),0,!0)}};return s.forEach(Object.keys(Y(Y({},t),e)),function(l){var f=c[l]||o,b=f(t[l],e[l],l);s.isUndefined(b)&&f!==u||(r[l]=b)}),r}var qe,Me=function(t){var e=nt({},t),r=e.data,n=e.withXSRFToken,o=e.xsrfHeaderName,a=e.xsrfCookieName,i=e.headers,u=e.auth;if(e.headers=i=z.from(i),e.url=Ae(De(e.baseURL,e.url,e.allowAbsoluteUrls),t.params,t.paramsSerializer),u&&i.set("Authorization","Basic "+btoa((u.username||"")+":"+(u.password?unescape(encodeURIComponent(u.password)):""))),s.isFormData(r)){if(B.hasStandardBrowserEnv||B.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if(s.isFunction(r.getHeaders)){var c=r.getHeaders(),l=["content-type","content-length"];Object.entries(c).forEach(function(b){var m=K(b,2),E=m[0],R=m[1];l.includes(E.toLowerCase())&&i.set(E,R)})}}if(B.hasStandardBrowserEnv&&(n&&s.isFunction(n)&&(n=n(e)),n||n!==!1&&Pn(e.url))){var f=o&&a&&Ln.read(a);f&&i.set(o,f)}return e},Nn=typeof XMLHttpRequest<"u"&&function(t){return new Promise(function(e,r){var n,o,a,i,u,c=Me(t),l=c.data,f=z.from(c.headers).normalize(),b=c.responseType,m=c.onUploadProgress,E=c.onDownloadProgress;function R(){i&&i(),u&&u(),c.cancelToken&&c.cancelToken.unsubscribe(n),c.signal&&c.signal.removeEventListener("abort",n)}var p=new XMLHttpRequest;function g(){if(p){var P=z.from("getAllResponseHeaders"in p&&p.getAllResponseHeaders());Ue(function(L){e(L),R()},function(L){r(L),R()},{data:b&&b!=="text"&&b!=="json"?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:P,config:t,request:p}),p=null}}if(p.open(c.method.toUpperCase(),c.url,!0),p.timeout=c.timeout,"onloadend"in p?p.onloadend=g:p.onreadystatechange=function(){p&&p.readyState===4&&(p.status!==0||p.responseURL&&p.responseURL.indexOf("file:")===0)&&setTimeout(g)},p.onabort=function(){p&&(r(new k("Request aborted",k.ECONNABORTED,t,p)),p=null)},p.onerror=function(P){var L=new k(P&&P.message?P.message:"Network Error",k.ERR_NETWORK,t,p);L.event=P||null,r(L),p=null},p.ontimeout=function(){var P=c.timeout?"timeout of "+c.timeout+"ms exceeded":"timeout exceeded",L=c.transitional||Le;c.timeoutErrorMessage&&(P=c.timeoutErrorMessage),r(new k(P,L.clarifyTimeoutError?k.ETIMEDOUT:k.ECONNABORTED,t,p)),p=null},l===void 0&&f.setContentType(null),"setRequestHeader"in p&&s.forEach(f.toJSON(),function(P,L){p.setRequestHeader(L,P)}),s.isUndefined(c.withCredentials)||(p.withCredentials=!!c.withCredentials),b&&b!=="json"&&(p.responseType=c.responseType),E){var O=K(Tt(E,!0),2);a=O[0],u=O[1],p.addEventListener("progress",a)}if(m&&p.upload){var S=K(Tt(m),2);o=S[0],i=S[1],p.upload.addEventListener("progress",o),p.upload.addEventListener("loadend",i)}(c.cancelToken||c.signal)&&(n=function(P){p&&(r(!P||P.type?new st(null,t,p):P),p.abort(),p=null)},c.cancelToken&&c.cancelToken.subscribe(n),c.signal&&(c.signal.aborted?n():c.signal.addEventListener("abort",n)));var y,T,C=(y=c.url,(T=/^([-+\w]{1,25})(:?\/\/|:)/.exec(y))&&T[1]||"");C&&B.protocols.indexOf(C)===-1?r(new k("Unsupported protocol "+C+":",k.ERR_BAD_REQUEST,t)):p.send(l||null)})},Cn=function(t,e){var r=(t=t?t.filter(Boolean):[]).length;if(e||r){var n,o=new AbortController,a=function(l){if(!n){n=!0,u();var f=l instanceof Error?l:this.reason;o.abort(f instanceof k?f:new st(f instanceof Error?f.message:f))}},i=e&&setTimeout(function(){i=null,a(new k("timeout ".concat(e," of ms exceeded"),k.ETIMEDOUT))},e),u=function(){t&&(i&&clearTimeout(i),i=null,t.forEach(function(l){l.unsubscribe?l.unsubscribe(a):l.removeEventListener("abort",a)}),t=null)};t.forEach(function(l){return l.addEventListener("abort",a)});var c=o.signal;return c.unsubscribe=function(){return s.asap(u)},c}},_n=U().mark(function t(e,r){var n,o,a;return U().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(n=e.byteLength,r&&!(n<r)){i.next=5;break}return i.next=4,e;case 4:return i.abrupt("return");case 5:o=0;case 6:if(!(o<n)){i.next=13;break}return a=o+r,i.next=10,e.slice(o,a);case 10:o=a,i.next=6;break;case 13:case"end":return i.stop()}},t)}),Un=function(){var t=ue(U().mark(function e(r,n){var o,a,i,u,c,l;return U().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:o=!1,a=!1,f.prev=2,u=Ut(Fn(r));case 4:return f.next=6,vt(u.next());case 6:if(!(o=!(c=f.sent).done)){f.next=12;break}return l=c.value,f.delegateYield(oe(Ut(_n(l,n))),"t0",9);case 9:o=!1,f.next=4;break;case 12:f.next=18;break;case 14:f.prev=14,f.t1=f.catch(2),a=!0,i=f.t1;case 18:if(f.prev=18,f.prev=19,!o||u.return==null){f.next=23;break}return f.next=23,vt(u.return());case 23:if(f.prev=23,!a){f.next=26;break}throw i;case 26:return f.finish(23);case 27:return f.finish(18);case 28:case"end":return f.stop()}},e,null,[[2,14,18,28],[19,,23,27]])}));return function(e,r){return t.apply(this,arguments)}}(),Fn=function(){var t=ue(U().mark(function e(r){var n,o,a,i;return U().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(!r[Symbol.asyncIterator]){u.next=3;break}return u.delegateYield(oe(Ut(r)),"t0",2);case 2:return u.abrupt("return");case 3:n=r.getReader(),u.prev=4;case 5:return u.next=7,vt(n.read());case 7:if(o=u.sent,a=o.done,i=o.value,!a){u.next=12;break}return u.abrupt("break",16);case 12:return u.next=14,i;case 14:u.next=5;break;case 16:return u.prev=16,u.next=19,vt(n.cancel());case 19:return u.finish(16);case 20:case"end":return u.stop()}},e,null,[[4,,16,20]])}));return function(e){return t.apply(this,arguments)}}(),ze=function(t,e,r,n){var o,a=Un(t,e),i=0,u=function(c){o||(o=!0,n&&n(c))};return new ReadableStream({pull:function(c){return it(U().mark(function l(){var f,b,m,E,R;return U().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.prev=0,p.next=3,a.next();case 3:if(f=p.sent,b=f.done,m=f.value,!b){p.next=10;break}return u(),c.close(),p.abrupt("return");case 10:E=m.byteLength,r&&(R=i+=E,r(R)),c.enqueue(new Uint8Array(m)),p.next=19;break;case 15:throw p.prev=15,p.t0=p.catch(0),u(p.t0),p.t0;case 19:case"end":return p.stop()}},l,null,[[0,15]])}))()},cancel:function(c){return u(c),a.return()}},{highWaterMark:2})},jt=s.isFunction,Bn={Request:(qe=s.global).Request,Response:qe.Response},He=s.global,Je=He.ReadableStream,We=He.TextEncoder,Ke=function(t){try{for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];return!!t.apply(void 0,r)}catch{return!1}},Dn=function(t){var e=t=s.merge.call({skipUndefined:!0},Bn,t),r=e.fetch,n=e.Request,o=e.Response,a=r?jt(r):typeof fetch=="function",i=jt(n),u=jt(o);if(!a)return!1;var c,l=a&&jt(Je),f=a&&(typeof We=="function"?(c=new We,function(g){return c.encode(g)}):function(){var g=it(U().mark(function O(S){return U().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.t0=Uint8Array,y.next=3,new n(S).arrayBuffer();case 3:return y.t1=y.sent,y.abrupt("return",new y.t0(y.t1));case 5:case"end":return y.stop()}},O)}));return function(O){return g.apply(this,arguments)}}()),b=i&&l&&Ke(function(){var g=!1,O=new n(B.origin,{body:new Je,method:"POST",get duplex(){return g=!0,"half"}}).headers.has("Content-Type");return g&&!O}),m=u&&l&&Ke(function(){return s.isReadableStream(new o("").body)}),E={stream:m&&function(g){return g.body}};a&&["text","arrayBuffer","blob","formData","stream"].forEach(function(g){!E[g]&&(E[g]=function(O,S){var y=O&&O[g];if(y)return y.call(O);throw new k("Response type '".concat(g,"' is not supported"),k.ERR_NOT_SUPPORT,S)})});var R=function(){var g=it(U().mark(function O(S){var y;return U().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:if(S!=null){T.next=2;break}return T.abrupt("return",0);case 2:if(!s.isBlob(S)){T.next=4;break}return T.abrupt("return",S.size);case 4:if(!s.isSpecCompliantForm(S)){T.next=9;break}return y=new n(B.origin,{method:"POST",body:S}),T.next=8,y.arrayBuffer();case 8:case 15:return T.abrupt("return",T.sent.byteLength);case 9:if(!s.isArrayBufferView(S)&&!s.isArrayBuffer(S)){T.next=11;break}return T.abrupt("return",S.byteLength);case 11:if(s.isURLSearchParams(S)&&(S+=""),!s.isString(S)){T.next=16;break}return T.next=15,f(S);case 16:case"end":return T.stop()}},O)}));return function(O){return g.apply(this,arguments)}}(),p=function(){var g=it(U().mark(function O(S,y){var T;return U().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return T=s.toFiniteNumber(S.getContentLength()),C.abrupt("return",T??R(y));case 2:case"end":return C.stop()}},O)}));return function(O,S){return g.apply(this,arguments)}}();return function(){var g=it(U().mark(function O(S){var y,T,C,P,L,Q,Ct,rt,dt,q,Z,ot,h,d,v,x,w,j,N,F,D,V,G,J,Qe,Ze,Zt,X,te,ee,tn,en,ne,nn,re,rn;return U().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:if(y=Me(S),T=y.url,C=y.method,P=y.data,L=y.signal,Q=y.cancelToken,Ct=y.timeout,rt=y.onDownloadProgress,dt=y.onUploadProgress,q=y.responseType,Z=y.headers,ot=y.withCredentials,h=ot===void 0?"same-origin":ot,d=y.fetchOptions,v=r||fetch,q=q?(q+"").toLowerCase():"text",x=Cn([L,Q&&Q.toAbortSignal()],Ct),w=null,j=x&&x.unsubscribe&&function(){x.unsubscribe()},A.prev=6,A.t0=dt&&b&&C!=="get"&&C!=="head",!A.t0){A.next=13;break}return A.next=11,p(Z,P);case 11:A.t1=N=A.sent,A.t0=A.t1!==0;case 13:if(!A.t0){A.next=17;break}F=new n(T,{method:"POST",body:P,duplex:"half"}),s.isFormData(P)&&(D=F.headers.get("content-type"))&&Z.setContentType(D),F.body&&(V=Fe(N,Tt(Be(dt))),G=K(V,2),J=G[0],Qe=G[1],P=ze(F.body,65536,J,Qe));case 17:return s.isString(h)||(h=h?"include":"omit"),Ze=i&&"credentials"in n.prototype,Zt=Y(Y({},d),{},{signal:x,method:C.toUpperCase(),headers:Z.normalize().toJSON(),body:P,duplex:"half",credentials:Ze?h:void 0}),w=i&&new n(T,Zt),A.next=23,i?v(w,d):v(T,Zt);case 23:return X=A.sent,te=m&&(q==="stream"||q==="response"),m&&(rt||te&&j)&&(ee={},["status","statusText","headers"].forEach(function(_t){ee[_t]=X[_t]}),tn=s.toFiniteNumber(X.headers.get("content-length")),en=rt&&Fe(tn,Tt(Be(rt),!0))||[],ne=K(en,2),nn=ne[0],re=ne[1],X=new o(ze(X.body,65536,nn,function(){re&&re(),j&&j()}),ee)),q=q||"text",A.next=29,E[s.findKey(E,q)||"text"](X,S);case 29:return rn=A.sent,!te&&j&&j(),A.next=33,new Promise(function(_t,Wn){Ue(_t,Wn,{data:rn,headers:z.from(X.headers),status:X.status,statusText:X.statusText,config:S,request:w})});case 33:return A.abrupt("return",A.sent);case 36:if(A.prev=36,A.t2=A.catch(6),j&&j(),!A.t2||A.t2.name!=="TypeError"||!/Load failed|fetch/i.test(A.t2.message)){A.next=41;break}throw Object.assign(new k("Network Error",k.ERR_NETWORK,S,w),{cause:A.t2.cause||A.t2});case 41:throw k.from(A.t2,A.t2&&A.t2.code,S,w);case 42:case"end":return A.stop()}},O,null,[[6,36]])}));return function(O){return g.apply(this,arguments)}}()},In=new Map,Ve=function(t){for(var e,r,n=t&&t.env||{},o=n.fetch,a=[n.Request,n.Response,o],i=a.length,u=In;i--;)e=a[i],(r=u.get(e))===void 0&&u.set(e,r=i?new Map:Dn(n)),u=r;return r};Ve();var $t={http:null,xhr:Nn,fetch:{get:Ve}};s.forEach($t,function(t,e){if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});var Ge=function(t){return"- ".concat(t)},qn=function(t){return s.isFunction(t)||t===null||t===!1},Xe={getAdapter:function(t,e){for(var r,n,o=(t=s.isArray(t)?t:[t]).length,a={},i=0;i<o;i++){var u=void 0;if(n=r=t[i],!qn(r)&&(n=$t[(u=String(r)).toLowerCase()])===void 0)throw new k("Unknown adapter '".concat(u,"'"));if(n&&(s.isFunction(n)||(n=n.get(e))))break;a[u||"#"+i]=n}if(!n){var c=Object.entries(a).map(function(l){var f=K(l,2),b=f[0],m=f[1];return"adapter ".concat(b," ")+(m===!1?"is not supported by the environment":"is not available in the build")});throw new k("There is no suitable adapter to dispatch the request "+(o?c.length>1?`since :
`+c.map(Ge).join(`
`):" "+Ge(c[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return n},adapters:$t};function Yt(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new st(null,t)}function $e(t){return Yt(t),t.headers=z.from(t.headers),t.data=Xt.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Xe.getAdapter(t.adapter||Vt.adapter,t)(t).then(function(e){return Yt(t),e.data=Xt.call(t,t.transformResponse,e),e.headers=z.from(e.headers),e},function(e){return _e(e)||(Yt(t),e&&e.response&&(e.response.data=Xt.call(t,t.transformResponse,e.response),e.response.headers=z.from(e.response.headers))),Promise.reject(e)})}var Mn="1.13.2",At={};["object","boolean","number","function","string","symbol"].forEach(function(t,e){At[t]=function(r){return W(r)===t||"a"+(e<1?"n ":" ")+t}});var Ye={};At.transitional=function(t,e,r){function n(o,a){return"[Axios v1.13.2] Transitional option '"+o+"'"+a+(r?". "+r:"")}return function(o,a,i){if(t===!1)throw new k(n(a," has been removed"+(e?" in "+e:"")),k.ERR_DEPRECATED);return e&&!Ye[a]&&(Ye[a]=!0,console.warn(n(a," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(o,a,i)}},At.spelling=function(t){return function(e,r){return console.warn("".concat(r," is likely a misspelling of ").concat(t)),!0}};var Pt={assertOptions:function(t,e,r){if(W(t)!=="object")throw new k("options must be an object",k.ERR_BAD_OPTION_VALUE);for(var n=Object.keys(t),o=n.length;o-- >0;){var a=n[o],i=e[a];if(i){var u=t[a],c=u===void 0||i(u,a,t);if(c!==!0)throw new k("option "+a+" must be "+c,k.ERR_BAD_OPTION_VALUE)}else if(r!==!0)throw new k("Unknown option "+a,k.ERR_BAD_OPTION)}},validators:At},H=Pt.validators,Lt=function(){function t(r){mt(this,t),this.defaults=r||{},this.interceptors={request:new Pe,response:new Pe}}var e;return yt(t,[{key:"request",value:(e=it(U().mark(function r(n,o){var a,i;return U().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.prev=0,u.next=3,this._request(n,o);case 3:return u.abrupt("return",u.sent);case 6:if(u.prev=6,u.t0=u.catch(0),u.t0 instanceof Error){a={},Error.captureStackTrace?Error.captureStackTrace(a):a=new Error,i=a.stack?a.stack.replace(/^.+\n/,""):"";try{u.t0.stack?i&&!String(u.t0.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(u.t0.stack+=`
`+i):u.t0.stack=i}catch{}}throw u.t0;case 10:case"end":return u.stop()}},r,this,[[0,6]])})),function(r,n){return e.apply(this,arguments)})},{key:"_request",value:function(r,n){typeof r=="string"?(n=n||{}).url=r:n=r||{};var o=n=nt(this.defaults,n),a=o.transitional,i=o.paramsSerializer,u=o.headers;a!==void 0&&Pt.assertOptions(a,{silentJSONParsing:H.transitional(H.boolean),forcedJSONParsing:H.transitional(H.boolean),clarifyTimeoutError:H.transitional(H.boolean)},!1),i!=null&&(s.isFunction(i)?n.paramsSerializer={serialize:i}:Pt.assertOptions(i,{encode:H.function,serialize:H.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Pt.assertOptions(n,{baseUrl:H.spelling("baseURL"),withXsrfToken:H.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();var c=u&&s.merge(u.common,u[n.method]);u&&s.forEach(["delete","get","head","post","put","patch","common"],function(y){delete u[y]}),n.headers=z.concat(c,u);var l=[],f=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(f=f&&y.synchronous,l.unshift(y.fulfilled,y.rejected))});var b,m=[];this.interceptors.response.forEach(function(y){m.push(y.fulfilled,y.rejected)});var E,R=0;if(!f){var p=[$e.bind(this),void 0];for(p.unshift.apply(p,l),p.push.apply(p,m),E=p.length,b=Promise.resolve(n);R<E;)b=b.then(p[R++],p[R++]);return b}E=l.length;for(var g=n;R<E;){var O=l[R++],S=l[R++];try{g=O(g)}catch(y){S.call(this,y);break}}try{b=$e.call(this,g)}catch(y){return Promise.reject(y)}for(R=0,E=m.length;R<E;)b=b.then(m[R++],m[R++]);return b}},{key:"getUri",value:function(r){return Ae(De((r=nt(this.defaults,r)).baseURL,r.url,r.allowAbsoluteUrls),r.params,r.paramsSerializer)}}]),t}();s.forEach(["delete","get","head","options"],function(t){Lt.prototype[t]=function(e,r){return this.request(nt(r||{},{method:t,url:e,data:(r||{}).data}))}}),s.forEach(["post","put","patch"],function(t){function e(r){return function(n,o,a){return this.request(nt(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:n,data:o}))}}Lt.prototype[t]=e(),Lt.prototype[t+"Form"]=e(!0)});var Nt=Lt,zn=function(){function t(e){if(mt(this,t),typeof e!="function")throw new TypeError("executor must be a function.");var r;this.promise=new Promise(function(o){r=o});var n=this;this.promise.then(function(o){if(n._listeners){for(var a=n._listeners.length;a-- >0;)n._listeners[a](o);n._listeners=null}}),this.promise.then=function(o){var a,i=new Promise(function(u){n.subscribe(u),a=u}).then(o);return i.cancel=function(){n.unsubscribe(a)},i},e(function(o,a,i){n.reason||(n.reason=new st(o,a,i),r(n.reason))})}return yt(t,[{key:"throwIfRequested",value:function(){if(this.reason)throw this.reason}},{key:"subscribe",value:function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}},{key:"unsubscribe",value:function(e){if(this._listeners){var r=this._listeners.indexOf(e);r!==-1&&this._listeners.splice(r,1)}}},{key:"toAbortSignal",value:function(){var e=this,r=new AbortController,n=function(o){r.abort(o)};return this.subscribe(n),r.signal.unsubscribe=function(){return e.unsubscribe(n)},r.signal}}],[{key:"source",value:function(){var e;return{token:new t(function(r){e=r}),cancel:e}}}]),t}(),Hn=zn,Qt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Qt).forEach(function(t){var e=K(t,2),r=e[0],n=e[1];Qt[n]=r});var Jn=Qt,_=function t(e){var r=new Nt(e),n=pe(Nt.prototype.request,r);return s.extend(n,Nt.prototype,r,{allOwnKeys:!0}),s.extend(n,r,null,{allOwnKeys:!0}),n.create=function(o){return t(nt(e,o))},n}(Vt);return _.Axios=Nt,_.CanceledError=st,_.CancelToken=Hn,_.isCancel=_e,_.VERSION=Mn,_.toFormData=xt,_.AxiosError=k,_.Cancel=_.CanceledError,_.all=function(t){return Promise.all(t)},_.spread=function(t){return function(e){return t.apply(null,e)}},_.isAxiosError=function(t){return s.isObject(t)&&t.isAxiosError===!0},_.mergeConfig=nt,_.AxiosHeaders=z,_.formToJSON=function(t){return Ne(s.isHTMLForm(t)?new FormData(t):t)},_.getAdapter=Xe.getAdapter,_.HttpStatusCode=Jn,_.default=_,_});})();
/*! Bundled license information:

axios/dist/axios.min.js:
  (*! Axios v1.13.2 Copyright (c) 2025 Matt Zabriskie and contributors *)
*/

;

$node[ "../bog/quiz/lib/axios.bundle" ] = $node[ "../bog/quiz/lib/axios.bundle.js" ] = module.exports }.call( {} , {} )
;
var _=(()=>{var tp=(o,ct)=>()=>(ct||o((ct={exports:{}}).exports,ct),ct.exports);var ep=tp((Wt,te)=>{(function(){var o,ct="4.17.21",Ve=200,el="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",sn="Expected a function",rl="Invalid `variable` option passed into `_.template`",ke="__lodash_hash_undefined__",il=500,ee="__lodash_placeholder__",qn=1,Ri=2,ht=4,gt=1,re=2,an=1,nt=2,Ii=4,En=8,_t=16,Tn=32,pt=64,Wn=128,bt=256,je=512,ul=30,fl="...",ll=800,ol=16,Si=1,sl=2,al=3,tt=1/0,Kn=9007199254740991,cl=17976931348623157e292,ie=NaN,Ln=4294967295,hl=Ln-1,gl=Ln>>>1,_l=[["ary",Wn],["bind",an],["bindKey",nt],["curry",En],["curryRight",_t],["flip",je],["partial",Tn],["partialRight",pt],["rearg",bt]],vt="[object Arguments]",ue="[object Array]",pl="[object AsyncFunction]",Pt="[object Boolean]",Bt="[object Date]",vl="[object DOMException]",fe="[object Error]",le="[object Function]",yi="[object GeneratorFunction]",xn="[object Map]",Ft="[object Number]",dl="[object Null]",bn="[object Object]",Ei="[object Promise]",wl="[object Proxy]",Mt="[object RegExp]",An="[object Set]",Ut="[object String]",oe="[object Symbol]",xl="[object Undefined]",Dt="[object WeakMap]",Al="[object WeakSet]",Nt="[object ArrayBuffer]",dt="[object DataView]",nr="[object Float32Array]",tr="[object Float64Array]",er="[object Int8Array]",rr="[object Int16Array]",ir="[object Int32Array]",ur="[object Uint8Array]",fr="[object Uint8ClampedArray]",lr="[object Uint16Array]",or="[object Uint32Array]",Rl=/\b__p \+= '';/g,Il=/\b(__p \+=) '' \+/g,Sl=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Ti=/&(?:amp|lt|gt|quot|#39);/g,Li=/[&<>"']/g,yl=RegExp(Ti.source),El=RegExp(Li.source),Tl=/<%-([\s\S]+?)%>/g,Ll=/<%([\s\S]+?)%>/g,Ci=/<%=([\s\S]+?)%>/g,Cl=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ml=/^\w*$/,Ol=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,sr=/[\\^$.*+?()[\]{}|]/g,Wl=RegExp(sr.source),ar=/^\s+/,bl=/\s/,Pl=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Bl=/\{\n\/\* \[wrapped with (.+)\] \*/,Fl=/,? & /,Ml=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Ul=/[()=,{}\[\]\/\s]/,Dl=/\\(\\)?/g,Nl=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,mi=/\w*$/,Gl=/^[-+]0x[0-9a-f]+$/i,Hl=/^0b[01]+$/i,ql=/^\[object .+?Constructor\]$/,Kl=/^0o[0-7]+$/i,$l=/^(?:0|[1-9]\d*)$/,zl=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,se=/($^)/,Zl=/['\n\r\u2028\u2029\\]/g,ae="\\ud800-\\udfff",Yl="\\u0300-\\u036f",Xl="\\ufe20-\\ufe2f",Jl="\\u20d0-\\u20ff",Oi=Yl+Xl+Jl,Wi="\\u2700-\\u27bf",bi="a-z\\xdf-\\xf6\\xf8-\\xff",Ql="\\xac\\xb1\\xd7\\xf7",Vl="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",kl="\\u2000-\\u206f",jl=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Pi="A-Z\\xc0-\\xd6\\xd8-\\xde",Bi="\\ufe0e\\ufe0f",Fi=Ql+Vl+kl+jl,cr="['\u2019]",no="["+ae+"]",Mi="["+Fi+"]",ce="["+Oi+"]",Ui="\\d+",to="["+Wi+"]",Di="["+bi+"]",Ni="[^"+ae+Fi+Ui+Wi+bi+Pi+"]",hr="\\ud83c[\\udffb-\\udfff]",eo="(?:"+ce+"|"+hr+")",Gi="[^"+ae+"]",gr="(?:\\ud83c[\\udde6-\\uddff]){2}",_r="[\\ud800-\\udbff][\\udc00-\\udfff]",wt="["+Pi+"]",Hi="\\u200d",qi="(?:"+Di+"|"+Ni+")",ro="(?:"+wt+"|"+Ni+")",Ki="(?:"+cr+"(?:d|ll|m|re|s|t|ve))?",$i="(?:"+cr+"(?:D|LL|M|RE|S|T|VE))?",zi=eo+"?",Zi="["+Bi+"]?",io="(?:"+Hi+"(?:"+[Gi,gr,_r].join("|")+")"+Zi+zi+")*",uo="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",fo="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Yi=Zi+zi+io,lo="(?:"+[to,gr,_r].join("|")+")"+Yi,oo="(?:"+[Gi+ce+"?",ce,gr,_r,no].join("|")+")",so=RegExp(cr,"g"),ao=RegExp(ce,"g"),pr=RegExp(hr+"(?="+hr+")|"+oo+Yi,"g"),co=RegExp([wt+"?"+Di+"+"+Ki+"(?="+[Mi,wt,"$"].join("|")+")",ro+"+"+$i+"(?="+[Mi,wt+qi,"$"].join("|")+")",wt+"?"+qi+"+"+Ki,wt+"+"+$i,fo,uo,Ui,lo].join("|"),"g"),ho=RegExp("["+Hi+ae+Oi+Bi+"]"),go=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,_o=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],po=-1,M={};M[nr]=M[tr]=M[er]=M[rr]=M[ir]=M[ur]=M[fr]=M[lr]=M[or]=!0,M[vt]=M[ue]=M[Nt]=M[Pt]=M[dt]=M[Bt]=M[fe]=M[le]=M[xn]=M[Ft]=M[bn]=M[Mt]=M[An]=M[Ut]=M[Dt]=!1;var F={};F[vt]=F[ue]=F[Nt]=F[dt]=F[Pt]=F[Bt]=F[nr]=F[tr]=F[er]=F[rr]=F[ir]=F[xn]=F[Ft]=F[bn]=F[Mt]=F[An]=F[Ut]=F[oe]=F[ur]=F[fr]=F[lr]=F[or]=!0,F[fe]=F[le]=F[Dt]=!1;var vo={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},wo={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},xo={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Ao={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Ro=parseFloat,Io=parseInt,Xi=typeof global=="object"&&global&&global.Object===Object&&global,So=typeof self=="object"&&self&&self.Object===Object&&self,$=Xi||So||Function("return this")(),vr=typeof Wt=="object"&&Wt&&!Wt.nodeType&&Wt,et=vr&&typeof te=="object"&&te&&!te.nodeType&&te,Ji=et&&et.exports===vr,dr=Ji&&Xi.process,cn=function(){try{var a=et&&et.require&&et.require("util").types;return a||dr&&dr.binding&&dr.binding("util")}catch{}}(),Qi=cn&&cn.isArrayBuffer,Vi=cn&&cn.isDate,ki=cn&&cn.isMap,ji=cn&&cn.isRegExp,nu=cn&&cn.isSet,tu=cn&&cn.isTypedArray;function en(a,g,h){switch(h.length){case 0:return a.call(g);case 1:return a.call(g,h[0]);case 2:return a.call(g,h[0],h[1]);case 3:return a.call(g,h[0],h[1],h[2])}return a.apply(g,h)}function yo(a,g,h,w){for(var S=-1,W=a==null?0:a.length;++S<W;){var q=a[S];g(w,q,h(q),a)}return w}function hn(a,g){for(var h=-1,w=a==null?0:a.length;++h<w&&g(a[h],h,a)!==!1;);return a}function Eo(a,g){for(var h=a==null?0:a.length;h--&&g(a[h],h,a)!==!1;);return a}function eu(a,g){for(var h=-1,w=a==null?0:a.length;++h<w;)if(!g(a[h],h,a))return!1;return!0}function $n(a,g){for(var h=-1,w=a==null?0:a.length,S=0,W=[];++h<w;){var q=a[h];g(q,h,a)&&(W[S++]=q)}return W}function he(a,g){var h=a==null?0:a.length;return!!h&&xt(a,g,0)>-1}function wr(a,g,h){for(var w=-1,S=a==null?0:a.length;++w<S;)if(h(g,a[w]))return!0;return!1}function U(a,g){for(var h=-1,w=a==null?0:a.length,S=Array(w);++h<w;)S[h]=g(a[h],h,a);return S}function zn(a,g){for(var h=-1,w=g.length,S=a.length;++h<w;)a[S+h]=g[h];return a}function xr(a,g,h,w){var S=-1,W=a==null?0:a.length;for(w&&W&&(h=a[++S]);++S<W;)h=g(h,a[S],S,a);return h}function To(a,g,h,w){var S=a==null?0:a.length;for(w&&S&&(h=a[--S]);S--;)h=g(h,a[S],S,a);return h}function Ar(a,g){for(var h=-1,w=a==null?0:a.length;++h<w;)if(g(a[h],h,a))return!0;return!1}var Lo=Rr("length");function Co(a){return a.split("")}function mo(a){return a.match(Ml)||[]}function ru(a,g,h){var w;return h(a,function(S,W,q){if(g(S,W,q))return w=W,!1}),w}function ge(a,g,h,w){for(var S=a.length,W=h+(w?1:-1);w?W--:++W<S;)if(g(a[W],W,a))return W;return-1}function xt(a,g,h){return g===g?Ho(a,g,h):ge(a,iu,h)}function Oo(a,g,h,w){for(var S=h-1,W=a.length;++S<W;)if(w(a[S],g))return S;return-1}function iu(a){return a!==a}function uu(a,g){var h=a==null?0:a.length;return h?Sr(a,g)/h:ie}function Rr(a){return function(g){return g==null?o:g[a]}}function Ir(a){return function(g){return a==null?o:a[g]}}function fu(a,g,h,w,S){return S(a,function(W,q,B){h=w?(w=!1,W):g(h,W,q,B)}),h}function Wo(a,g){var h=a.length;for(a.sort(g);h--;)a[h]=a[h].value;return a}function Sr(a,g){for(var h,w=-1,S=a.length;++w<S;){var W=g(a[w]);W!==o&&(h=h===o?W:h+W)}return h}function yr(a,g){for(var h=-1,w=Array(a);++h<a;)w[h]=g(h);return w}function bo(a,g){return U(g,function(h){return[h,a[h]]})}function lu(a){return a&&a.slice(0,cu(a)+1).replace(ar,"")}function rn(a){return function(g){return a(g)}}function Er(a,g){return U(g,function(h){return a[h]})}function Gt(a,g){return a.has(g)}function ou(a,g){for(var h=-1,w=a.length;++h<w&&xt(g,a[h],0)>-1;);return h}function su(a,g){for(var h=a.length;h--&&xt(g,a[h],0)>-1;);return h}function Po(a,g){for(var h=a.length,w=0;h--;)a[h]===g&&++w;return w}var Bo=Ir(vo),Fo=Ir(wo);function Mo(a){return"\\"+Ao[a]}function Uo(a,g){return a==null?o:a[g]}function At(a){return ho.test(a)}function Do(a){return go.test(a)}function No(a){for(var g,h=[];!(g=a.next()).done;)h.push(g.value);return h}function Tr(a){var g=-1,h=Array(a.size);return a.forEach(function(w,S){h[++g]=[S,w]}),h}function au(a,g){return function(h){return a(g(h))}}function Zn(a,g){for(var h=-1,w=a.length,S=0,W=[];++h<w;){var q=a[h];(q===g||q===ee)&&(a[h]=ee,W[S++]=h)}return W}function _e(a){var g=-1,h=Array(a.size);return a.forEach(function(w){h[++g]=w}),h}function Go(a){var g=-1,h=Array(a.size);return a.forEach(function(w){h[++g]=[w,w]}),h}function Ho(a,g,h){for(var w=h-1,S=a.length;++w<S;)if(a[w]===g)return w;return-1}function qo(a,g,h){for(var w=h+1;w--;)if(a[w]===g)return w;return w}function Rt(a){return At(a)?$o(a):Lo(a)}function Rn(a){return At(a)?zo(a):Co(a)}function cu(a){for(var g=a.length;g--&&bl.test(a.charAt(g)););return g}var Ko=Ir(xo);function $o(a){for(var g=pr.lastIndex=0;pr.test(a);)++g;return g}function zo(a){return a.match(pr)||[]}function Zo(a){return a.match(co)||[]}var Yo=function a(g){g=g==null?$:Yn.defaults($.Object(),g,Yn.pick($,_o));var h=g.Array,w=g.Date,S=g.Error,W=g.Function,q=g.Math,B=g.Object,Lr=g.RegExp,Xo=g.String,gn=g.TypeError,pe=h.prototype,Jo=W.prototype,It=B.prototype,ve=g["__core-js_shared__"],de=Jo.toString,P=It.hasOwnProperty,Qo=0,hu=function(){var n=/[^.]+$/.exec(ve&&ve.keys&&ve.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),we=It.toString,Vo=de.call(B),ko=$._,jo=Lr("^"+de.call(P).replace(sr,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),xe=Ji?g.Buffer:o,Xn=g.Symbol,Ae=g.Uint8Array,gu=xe?xe.allocUnsafe:o,Re=au(B.getPrototypeOf,B),_u=B.create,pu=It.propertyIsEnumerable,Ie=pe.splice,vu=Xn?Xn.isConcatSpreadable:o,Ht=Xn?Xn.iterator:o,rt=Xn?Xn.toStringTag:o,Se=function(){try{var n=ot(B,"defineProperty");return n({},"",{}),n}catch{}}(),ns=g.clearTimeout!==$.clearTimeout&&g.clearTimeout,ts=w&&w.now!==$.Date.now&&w.now,es=g.setTimeout!==$.setTimeout&&g.setTimeout,ye=q.ceil,Ee=q.floor,Cr=B.getOwnPropertySymbols,rs=xe?xe.isBuffer:o,du=g.isFinite,is=pe.join,us=au(B.keys,B),K=q.max,Y=q.min,fs=w.now,ls=g.parseInt,wu=q.random,os=pe.reverse,mr=ot(g,"DataView"),qt=ot(g,"Map"),Or=ot(g,"Promise"),St=ot(g,"Set"),Kt=ot(g,"WeakMap"),$t=ot(B,"create"),Te=Kt&&new Kt,yt={},ss=st(mr),as=st(qt),cs=st(Or),hs=st(St),gs=st(Kt),Le=Xn?Xn.prototype:o,zt=Le?Le.valueOf:o,xu=Le?Le.toString:o;function u(n){if(N(n)&&!y(n)&&!(n instanceof m)){if(n instanceof _n)return n;if(P.call(n,"__wrapped__"))return Rf(n)}return new _n(n)}var Et=function(){function n(){}return function(t){if(!D(t))return{};if(_u)return _u(t);n.prototype=t;var e=new n;return n.prototype=o,e}}();function Ce(){}function _n(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=o}u.templateSettings={escape:Tl,evaluate:Ll,interpolate:Ci,variable:"",imports:{_:u}},u.prototype=Ce.prototype,u.prototype.constructor=u,_n.prototype=Et(Ce.prototype),_n.prototype.constructor=_n;function m(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Ln,this.__views__=[]}function _s(){var n=new m(this.__wrapped__);return n.__actions__=k(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=k(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=k(this.__views__),n}function ps(){if(this.__filtered__){var n=new m(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function vs(){var n=this.__wrapped__.value(),t=this.__dir__,e=y(n),r=t<0,i=e?n.length:0,f=Ca(0,i,this.__views__),l=f.start,s=f.end,c=s-l,_=r?s:l-1,p=this.__iteratees__,v=p.length,d=0,x=Y(c,this.__takeCount__);if(!e||!r&&i==c&&x==c)return Ku(n,this.__actions__);var R=[];n:for(;c--&&d<x;){_+=t;for(var T=-1,I=n[_];++T<v;){var C=p[T],O=C.iteratee,ln=C.type,V=O(I);if(ln==sl)I=V;else if(!V){if(ln==Si)continue n;break n}}R[d++]=I}return R}m.prototype=Et(Ce.prototype),m.prototype.constructor=m;function it(n){var t=-1,e=n==null?0:n.length;for(this.clear();++t<e;){var r=n[t];this.set(r[0],r[1])}}function ds(){this.__data__=$t?$t(null):{},this.size=0}function ws(n){var t=this.has(n)&&delete this.__data__[n];return this.size-=t?1:0,t}function xs(n){var t=this.__data__;if($t){var e=t[n];return e===ke?o:e}return P.call(t,n)?t[n]:o}function As(n){var t=this.__data__;return $t?t[n]!==o:P.call(t,n)}function Rs(n,t){var e=this.__data__;return this.size+=this.has(n)?0:1,e[n]=$t&&t===o?ke:t,this}it.prototype.clear=ds,it.prototype.delete=ws,it.prototype.get=xs,it.prototype.has=As,it.prototype.set=Rs;function Pn(n){var t=-1,e=n==null?0:n.length;for(this.clear();++t<e;){var r=n[t];this.set(r[0],r[1])}}function Is(){this.__data__=[],this.size=0}function Ss(n){var t=this.__data__,e=me(t,n);if(e<0)return!1;var r=t.length-1;return e==r?t.pop():Ie.call(t,e,1),--this.size,!0}function ys(n){var t=this.__data__,e=me(t,n);return e<0?o:t[e][1]}function Es(n){return me(this.__data__,n)>-1}function Ts(n,t){var e=this.__data__,r=me(e,n);return r<0?(++this.size,e.push([n,t])):e[r][1]=t,this}Pn.prototype.clear=Is,Pn.prototype.delete=Ss,Pn.prototype.get=ys,Pn.prototype.has=Es,Pn.prototype.set=Ts;function Bn(n){var t=-1,e=n==null?0:n.length;for(this.clear();++t<e;){var r=n[t];this.set(r[0],r[1])}}function Ls(){this.size=0,this.__data__={hash:new it,map:new(qt||Pn),string:new it}}function Cs(n){var t=He(this,n).delete(n);return this.size-=t?1:0,t}function ms(n){return He(this,n).get(n)}function Os(n){return He(this,n).has(n)}function Ws(n,t){var e=He(this,n),r=e.size;return e.set(n,t),this.size+=e.size==r?0:1,this}Bn.prototype.clear=Ls,Bn.prototype.delete=Cs,Bn.prototype.get=ms,Bn.prototype.has=Os,Bn.prototype.set=Ws;function ut(n){var t=-1,e=n==null?0:n.length;for(this.__data__=new Bn;++t<e;)this.add(n[t])}function bs(n){return this.__data__.set(n,ke),this}function Ps(n){return this.__data__.has(n)}ut.prototype.add=ut.prototype.push=bs,ut.prototype.has=Ps;function In(n){var t=this.__data__=new Pn(n);this.size=t.size}function Bs(){this.__data__=new Pn,this.size=0}function Fs(n){var t=this.__data__,e=t.delete(n);return this.size=t.size,e}function Ms(n){return this.__data__.get(n)}function Us(n){return this.__data__.has(n)}function Ds(n,t){var e=this.__data__;if(e instanceof Pn){var r=e.__data__;if(!qt||r.length<Ve-1)return r.push([n,t]),this.size=++e.size,this;e=this.__data__=new Bn(r)}return e.set(n,t),this.size=e.size,this}In.prototype.clear=Bs,In.prototype.delete=Fs,In.prototype.get=Ms,In.prototype.has=Us,In.prototype.set=Ds;function Au(n,t){var e=y(n),r=!e&&at(n),i=!e&&!r&&jn(n),f=!e&&!r&&!i&&mt(n),l=e||r||i||f,s=l?yr(n.length,Xo):[],c=s.length;for(var _ in n)(t||P.call(n,_))&&!(l&&(_=="length"||i&&(_=="offset"||_=="parent")||f&&(_=="buffer"||_=="byteLength"||_=="byteOffset")||Dn(_,c)))&&s.push(_);return s}function Ru(n){var t=n.length;return t?n[Hr(0,t-1)]:o}function Ns(n,t){return qe(k(n),ft(t,0,n.length))}function Gs(n){return qe(k(n))}function Wr(n,t,e){(e!==o&&!Sn(n[t],e)||e===o&&!(t in n))&&Fn(n,t,e)}function Zt(n,t,e){var r=n[t];(!(P.call(n,t)&&Sn(r,e))||e===o&&!(t in n))&&Fn(n,t,e)}function me(n,t){for(var e=n.length;e--;)if(Sn(n[e][0],t))return e;return-1}function Hs(n,t,e,r){return Jn(n,function(i,f,l){t(r,i,e(i),l)}),r}function Iu(n,t){return n&&mn(t,z(t),n)}function qs(n,t){return n&&mn(t,nn(t),n)}function Fn(n,t,e){t=="__proto__"&&Se?Se(n,t,{configurable:!0,enumerable:!0,value:e,writable:!0}):n[t]=e}function br(n,t){for(var e=-1,r=t.length,i=h(r),f=n==null;++e<r;)i[e]=f?o:hi(n,t[e]);return i}function ft(n,t,e){return n===n&&(e!==o&&(n=n<=e?n:e),t!==o&&(n=n>=t?n:t)),n}function pn(n,t,e,r,i,f){var l,s=t&qn,c=t&Ri,_=t&ht;if(e&&(l=i?e(n,r,i,f):e(n)),l!==o)return l;if(!D(n))return n;var p=y(n);if(p){if(l=Oa(n),!s)return k(n,l)}else{var v=X(n),d=v==le||v==yi;if(jn(n))return Zu(n,s);if(v==bn||v==vt||d&&!i){if(l=c||d?{}:hf(n),!s)return c?xa(n,qs(l,n)):wa(n,Iu(l,n))}else{if(!F[v])return i?n:{};l=Wa(n,v,s)}}f||(f=new In);var x=f.get(n);if(x)return x;f.set(n,l),Hf(n)?n.forEach(function(I){l.add(pn(I,t,e,I,n,f))}):Nf(n)&&n.forEach(function(I,C){l.set(C,pn(I,t,e,C,n,f))});var R=_?c?kr:Vr:c?nn:z,T=p?o:R(n);return hn(T||n,function(I,C){T&&(C=I,I=n[C]),Zt(l,C,pn(I,t,e,C,n,f))}),l}function Ks(n){var t=z(n);return function(e){return Su(e,n,t)}}function Su(n,t,e){var r=e.length;if(n==null)return!r;for(n=B(n);r--;){var i=e[r],f=t[i],l=n[i];if(l===o&&!(i in n)||!f(l))return!1}return!0}function yu(n,t,e){if(typeof n!="function")throw new gn(sn);return jt(function(){n.apply(o,e)},t)}function Yt(n,t,e,r){var i=-1,f=he,l=!0,s=n.length,c=[],_=t.length;if(!s)return c;e&&(t=U(t,rn(e))),r?(f=wr,l=!1):t.length>=Ve&&(f=Gt,l=!1,t=new ut(t));n:for(;++i<s;){var p=n[i],v=e==null?p:e(p);if(p=r||p!==0?p:0,l&&v===v){for(var d=_;d--;)if(t[d]===v)continue n;c.push(p)}else f(t,v,r)||c.push(p)}return c}var Jn=Vu(Cn),Eu=Vu(Br,!0);function $s(n,t){var e=!0;return Jn(n,function(r,i,f){return e=!!t(r,i,f),e}),e}function Oe(n,t,e){for(var r=-1,i=n.length;++r<i;){var f=n[r],l=t(f);if(l!=null&&(s===o?l===l&&!fn(l):e(l,s)))var s=l,c=f}return c}function zs(n,t,e,r){var i=n.length;for(e=E(e),e<0&&(e=-e>i?0:i+e),r=r===o||r>i?i:E(r),r<0&&(r+=i),r=e>r?0:Kf(r);e<r;)n[e++]=t;return n}function Tu(n,t){var e=[];return Jn(n,function(r,i,f){t(r,i,f)&&e.push(r)}),e}function Z(n,t,e,r,i){var f=-1,l=n.length;for(e||(e=Pa),i||(i=[]);++f<l;){var s=n[f];t>0&&e(s)?t>1?Z(s,t-1,e,r,i):zn(i,s):r||(i[i.length]=s)}return i}var Pr=ku(),Lu=ku(!0);function Cn(n,t){return n&&Pr(n,t,z)}function Br(n,t){return n&&Lu(n,t,z)}function We(n,t){return $n(t,function(e){return Nn(n[e])})}function lt(n,t){t=Vn(t,n);for(var e=0,r=t.length;n!=null&&e<r;)n=n[On(t[e++])];return e&&e==r?n:o}function Cu(n,t,e){var r=t(n);return y(n)?r:zn(r,e(n))}function J(n){return n==null?n===o?xl:dl:rt&&rt in B(n)?La(n):Ga(n)}function Fr(n,t){return n>t}function Zs(n,t){return n!=null&&P.call(n,t)}function Ys(n,t){return n!=null&&t in B(n)}function Xs(n,t,e){return n>=Y(t,e)&&n<K(t,e)}function Mr(n,t,e){for(var r=e?wr:he,i=n[0].length,f=n.length,l=f,s=h(f),c=1/0,_=[];l--;){var p=n[l];l&&t&&(p=U(p,rn(t))),c=Y(p.length,c),s[l]=!e&&(t||i>=120&&p.length>=120)?new ut(l&&p):o}p=n[0];var v=-1,d=s[0];n:for(;++v<i&&_.length<c;){var x=p[v],R=t?t(x):x;if(x=e||x!==0?x:0,!(d?Gt(d,R):r(_,R,e))){for(l=f;--l;){var T=s[l];if(!(T?Gt(T,R):r(n[l],R,e)))continue n}d&&d.push(R),_.push(x)}}return _}function Js(n,t,e,r){return Cn(n,function(i,f,l){t(r,e(i),f,l)}),r}function Xt(n,t,e){t=Vn(t,n),n=vf(n,t);var r=n==null?n:n[On(dn(t))];return r==null?o:en(r,n,e)}function mu(n){return N(n)&&J(n)==vt}function Qs(n){return N(n)&&J(n)==Nt}function Vs(n){return N(n)&&J(n)==Bt}function Jt(n,t,e,r,i){return n===t?!0:n==null||t==null||!N(n)&&!N(t)?n!==n&&t!==t:ks(n,t,e,r,Jt,i)}function ks(n,t,e,r,i,f){var l=y(n),s=y(t),c=l?ue:X(n),_=s?ue:X(t);c=c==vt?bn:c,_=_==vt?bn:_;var p=c==bn,v=_==bn,d=c==_;if(d&&jn(n)){if(!jn(t))return!1;l=!0,p=!1}if(d&&!p)return f||(f=new In),l||mt(n)?sf(n,t,e,r,i,f):Ea(n,t,c,e,r,i,f);if(!(e&gt)){var x=p&&P.call(n,"__wrapped__"),R=v&&P.call(t,"__wrapped__");if(x||R){var T=x?n.value():n,I=R?t.value():t;return f||(f=new In),i(T,I,e,r,f)}}return d?(f||(f=new In),Ta(n,t,e,r,i,f)):!1}function js(n){return N(n)&&X(n)==xn}function Ur(n,t,e,r){var i=e.length,f=i,l=!r;if(n==null)return!f;for(n=B(n);i--;){var s=e[i];if(l&&s[2]?s[1]!==n[s[0]]:!(s[0]in n))return!1}for(;++i<f;){s=e[i];var c=s[0],_=n[c],p=s[1];if(l&&s[2]){if(_===o&&!(c in n))return!1}else{var v=new In;if(r)var d=r(_,p,c,n,t,v);if(!(d===o?Jt(p,_,gt|re,r,v):d))return!1}}return!0}function Ou(n){if(!D(n)||Fa(n))return!1;var t=Nn(n)?jo:ql;return t.test(st(n))}function na(n){return N(n)&&J(n)==Mt}function ta(n){return N(n)&&X(n)==An}function ea(n){return N(n)&&Xe(n.length)&&!!M[J(n)]}function Wu(n){return typeof n=="function"?n:n==null?tn:typeof n=="object"?y(n)?Bu(n[0],n[1]):Pu(n):nl(n)}function Dr(n){if(!kt(n))return us(n);var t=[];for(var e in B(n))P.call(n,e)&&e!="constructor"&&t.push(e);return t}function ra(n){if(!D(n))return Na(n);var t=kt(n),e=[];for(var r in n)r=="constructor"&&(t||!P.call(n,r))||e.push(r);return e}function Nr(n,t){return n<t}function bu(n,t){var e=-1,r=j(n)?h(n.length):[];return Jn(n,function(i,f,l){r[++e]=t(i,f,l)}),r}function Pu(n){var t=ni(n);return t.length==1&&t[0][2]?_f(t[0][0],t[0][1]):function(e){return e===n||Ur(e,n,t)}}function Bu(n,t){return ei(n)&&gf(t)?_f(On(n),t):function(e){var r=hi(e,n);return r===o&&r===t?gi(e,n):Jt(t,r,gt|re)}}function be(n,t,e,r,i){n!==t&&Pr(t,function(f,l){if(i||(i=new In),D(f))ia(n,t,l,e,be,r,i);else{var s=r?r(ii(n,l),f,l+"",n,t,i):o;s===o&&(s=f),Wr(n,l,s)}},nn)}function ia(n,t,e,r,i,f,l){var s=ii(n,e),c=ii(t,e),_=l.get(c);if(_){Wr(n,e,_);return}var p=f?f(s,c,e+"",n,t,l):o,v=p===o;if(v){var d=y(c),x=!d&&jn(c),R=!d&&!x&&mt(c);p=c,d||x||R?y(s)?p=s:G(s)?p=k(s):x?(v=!1,p=Zu(c,!0)):R?(v=!1,p=Yu(c,!0)):p=[]:ne(c)||at(c)?(p=s,at(s)?p=$f(s):(!D(s)||Nn(s))&&(p=hf(c))):v=!1}v&&(l.set(c,p),i(p,c,r,f,l),l.delete(c)),Wr(n,e,p)}function Fu(n,t){var e=n.length;if(e)return t+=t<0?e:0,Dn(t,e)?n[t]:o}function Mu(n,t,e){t.length?t=U(t,function(f){return y(f)?function(l){return lt(l,f.length===1?f[0]:f)}:f}):t=[tn];var r=-1;t=U(t,rn(A()));var i=bu(n,function(f,l,s){var c=U(t,function(_){return _(f)});return{criteria:c,index:++r,value:f}});return Wo(i,function(f,l){return da(f,l,e)})}function ua(n,t){return Uu(n,t,function(e,r){return gi(n,r)})}function Uu(n,t,e){for(var r=-1,i=t.length,f={};++r<i;){var l=t[r],s=lt(n,l);e(s,l)&&Qt(f,Vn(l,n),s)}return f}function fa(n){return function(t){return lt(t,n)}}function Gr(n,t,e,r){var i=r?Oo:xt,f=-1,l=t.length,s=n;for(n===t&&(t=k(t)),e&&(s=U(n,rn(e)));++f<l;)for(var c=0,_=t[f],p=e?e(_):_;(c=i(s,p,c,r))>-1;)s!==n&&Ie.call(s,c,1),Ie.call(n,c,1);return n}function Du(n,t){for(var e=n?t.length:0,r=e-1;e--;){var i=t[e];if(e==r||i!==f){var f=i;Dn(i)?Ie.call(n,i,1):$r(n,i)}}return n}function Hr(n,t){return n+Ee(wu()*(t-n+1))}function la(n,t,e,r){for(var i=-1,f=K(ye((t-n)/(e||1)),0),l=h(f);f--;)l[r?f:++i]=n,n+=e;return l}function qr(n,t){var e="";if(!n||t<1||t>Kn)return e;do t%2&&(e+=n),t=Ee(t/2),t&&(n+=n);while(t);return e}function L(n,t){return ui(pf(n,t,tn),n+"")}function oa(n){return Ru(Ot(n))}function sa(n,t){var e=Ot(n);return qe(e,ft(t,0,e.length))}function Qt(n,t,e,r){if(!D(n))return n;t=Vn(t,n);for(var i=-1,f=t.length,l=f-1,s=n;s!=null&&++i<f;){var c=On(t[i]),_=e;if(c==="__proto__"||c==="constructor"||c==="prototype")return n;if(i!=l){var p=s[c];_=r?r(p,c,s):o,_===o&&(_=D(p)?p:Dn(t[i+1])?[]:{})}Zt(s,c,_),s=s[c]}return n}var Nu=Te?function(n,t){return Te.set(n,t),n}:tn,aa=Se?function(n,t){return Se(n,"toString",{configurable:!0,enumerable:!1,value:pi(t),writable:!0})}:tn;function ca(n){return qe(Ot(n))}function vn(n,t,e){var r=-1,i=n.length;t<0&&(t=-t>i?0:i+t),e=e>i?i:e,e<0&&(e+=i),i=t>e?0:e-t>>>0,t>>>=0;for(var f=h(i);++r<i;)f[r]=n[r+t];return f}function ha(n,t){var e;return Jn(n,function(r,i,f){return e=t(r,i,f),!e}),!!e}function Pe(n,t,e){var r=0,i=n==null?r:n.length;if(typeof t=="number"&&t===t&&i<=gl){for(;r<i;){var f=r+i>>>1,l=n[f];l!==null&&!fn(l)&&(e?l<=t:l<t)?r=f+1:i=f}return i}return Kr(n,t,tn,e)}function Kr(n,t,e,r){var i=0,f=n==null?0:n.length;if(f===0)return 0;t=e(t);for(var l=t!==t,s=t===null,c=fn(t),_=t===o;i<f;){var p=Ee((i+f)/2),v=e(n[p]),d=v!==o,x=v===null,R=v===v,T=fn(v);if(l)var I=r||R;else _?I=R&&(r||d):s?I=R&&d&&(r||!x):c?I=R&&d&&!x&&(r||!T):x||T?I=!1:I=r?v<=t:v<t;I?i=p+1:f=p}return Y(f,hl)}function Gu(n,t){for(var e=-1,r=n.length,i=0,f=[];++e<r;){var l=n[e],s=t?t(l):l;if(!e||!Sn(s,c)){var c=s;f[i++]=l===0?0:l}}return f}function Hu(n){return typeof n=="number"?n:fn(n)?ie:+n}function un(n){if(typeof n=="string")return n;if(y(n))return U(n,un)+"";if(fn(n))return xu?xu.call(n):"";var t=n+"";return t=="0"&&1/n==-tt?"-0":t}function Qn(n,t,e){var r=-1,i=he,f=n.length,l=!0,s=[],c=s;if(e)l=!1,i=wr;else if(f>=Ve){var _=t?null:Sa(n);if(_)return _e(_);l=!1,i=Gt,c=new ut}else c=t?[]:s;n:for(;++r<f;){var p=n[r],v=t?t(p):p;if(p=e||p!==0?p:0,l&&v===v){for(var d=c.length;d--;)if(c[d]===v)continue n;t&&c.push(v),s.push(p)}else i(c,v,e)||(c!==s&&c.push(v),s.push(p))}return s}function $r(n,t){return t=Vn(t,n),n=vf(n,t),n==null||delete n[On(dn(t))]}function qu(n,t,e,r){return Qt(n,t,e(lt(n,t)),r)}function Be(n,t,e,r){for(var i=n.length,f=r?i:-1;(r?f--:++f<i)&&t(n[f],f,n););return e?vn(n,r?0:f,r?f+1:i):vn(n,r?f+1:0,r?i:f)}function Ku(n,t){var e=n;return e instanceof m&&(e=e.value()),xr(t,function(r,i){return i.func.apply(i.thisArg,zn([r],i.args))},e)}function zr(n,t,e){var r=n.length;if(r<2)return r?Qn(n[0]):[];for(var i=-1,f=h(r);++i<r;)for(var l=n[i],s=-1;++s<r;)s!=i&&(f[i]=Yt(f[i]||l,n[s],t,e));return Qn(Z(f,1),t,e)}function $u(n,t,e){for(var r=-1,i=n.length,f=t.length,l={};++r<i;){var s=r<f?t[r]:o;e(l,n[r],s)}return l}function Zr(n){return G(n)?n:[]}function Yr(n){return typeof n=="function"?n:tn}function Vn(n,t){return y(n)?n:ei(n,t)?[n]:Af(b(n))}var ga=L;function kn(n,t,e){var r=n.length;return e=e===o?r:e,!t&&e>=r?n:vn(n,t,e)}var zu=ns||function(n){return $.clearTimeout(n)};function Zu(n,t){if(t)return n.slice();var e=n.length,r=gu?gu(e):new n.constructor(e);return n.copy(r),r}function Xr(n){var t=new n.constructor(n.byteLength);return new Ae(t).set(new Ae(n)),t}function _a(n,t){var e=t?Xr(n.buffer):n.buffer;return new n.constructor(e,n.byteOffset,n.byteLength)}function pa(n){var t=new n.constructor(n.source,mi.exec(n));return t.lastIndex=n.lastIndex,t}function va(n){return zt?B(zt.call(n)):{}}function Yu(n,t){var e=t?Xr(n.buffer):n.buffer;return new n.constructor(e,n.byteOffset,n.length)}function Xu(n,t){if(n!==t){var e=n!==o,r=n===null,i=n===n,f=fn(n),l=t!==o,s=t===null,c=t===t,_=fn(t);if(!s&&!_&&!f&&n>t||f&&l&&c&&!s&&!_||r&&l&&c||!e&&c||!i)return 1;if(!r&&!f&&!_&&n<t||_&&e&&i&&!r&&!f||s&&e&&i||!l&&i||!c)return-1}return 0}function da(n,t,e){for(var r=-1,i=n.criteria,f=t.criteria,l=i.length,s=e.length;++r<l;){var c=Xu(i[r],f[r]);if(c){if(r>=s)return c;var _=e[r];return c*(_=="desc"?-1:1)}}return n.index-t.index}function Ju(n,t,e,r){for(var i=-1,f=n.length,l=e.length,s=-1,c=t.length,_=K(f-l,0),p=h(c+_),v=!r;++s<c;)p[s]=t[s];for(;++i<l;)(v||i<f)&&(p[e[i]]=n[i]);for(;_--;)p[s++]=n[i++];return p}function Qu(n,t,e,r){for(var i=-1,f=n.length,l=-1,s=e.length,c=-1,_=t.length,p=K(f-s,0),v=h(p+_),d=!r;++i<p;)v[i]=n[i];for(var x=i;++c<_;)v[x+c]=t[c];for(;++l<s;)(d||i<f)&&(v[x+e[l]]=n[i++]);return v}function k(n,t){var e=-1,r=n.length;for(t||(t=h(r));++e<r;)t[e]=n[e];return t}function mn(n,t,e,r){var i=!e;e||(e={});for(var f=-1,l=t.length;++f<l;){var s=t[f],c=r?r(e[s],n[s],s,e,n):o;c===o&&(c=n[s]),i?Fn(e,s,c):Zt(e,s,c)}return e}function wa(n,t){return mn(n,ti(n),t)}function xa(n,t){return mn(n,af(n),t)}function Fe(n,t){return function(e,r){var i=y(e)?yo:Hs,f=t?t():{};return i(e,n,A(r,2),f)}}function Tt(n){return L(function(t,e){var r=-1,i=e.length,f=i>1?e[i-1]:o,l=i>2?e[2]:o;for(f=n.length>3&&typeof f=="function"?(i--,f):o,l&&Q(e[0],e[1],l)&&(f=i<3?o:f,i=1),t=B(t);++r<i;){var s=e[r];s&&n(t,s,r,f)}return t})}function Vu(n,t){return function(e,r){if(e==null)return e;if(!j(e))return n(e,r);for(var i=e.length,f=t?i:-1,l=B(e);(t?f--:++f<i)&&r(l[f],f,l)!==!1;);return e}}function ku(n){return function(t,e,r){for(var i=-1,f=B(t),l=r(t),s=l.length;s--;){var c=l[n?s:++i];if(e(f[c],c,f)===!1)break}return t}}function Aa(n,t,e){var r=t&an,i=Vt(n);function f(){var l=this&&this!==$&&this instanceof f?i:n;return l.apply(r?e:this,arguments)}return f}function ju(n){return function(t){t=b(t);var e=At(t)?Rn(t):o,r=e?e[0]:t.charAt(0),i=e?kn(e,1).join(""):t.slice(1);return r[n]()+i}}function Lt(n){return function(t){return xr(kf(Vf(t).replace(so,"")),n,"")}}function Vt(n){return function(){var t=arguments;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var e=Et(n.prototype),r=n.apply(e,t);return D(r)?r:e}}function Ra(n,t,e){var r=Vt(n);function i(){for(var f=arguments.length,l=h(f),s=f,c=Ct(i);s--;)l[s]=arguments[s];var _=f<3&&l[0]!==c&&l[f-1]!==c?[]:Zn(l,c);if(f-=_.length,f<e)return uf(n,t,Me,i.placeholder,o,l,_,o,o,e-f);var p=this&&this!==$&&this instanceof i?r:n;return en(p,this,l)}return i}function nf(n){return function(t,e,r){var i=B(t);if(!j(t)){var f=A(e,3);t=z(t),e=function(s){return f(i[s],s,i)}}var l=n(t,e,r);return l>-1?i[f?t[l]:l]:o}}function tf(n){return Un(function(t){var e=t.length,r=e,i=_n.prototype.thru;for(n&&t.reverse();r--;){var f=t[r];if(typeof f!="function")throw new gn(sn);if(i&&!l&&Ge(f)=="wrapper")var l=new _n([],!0)}for(r=l?r:e;++r<e;){f=t[r];var s=Ge(f),c=s=="wrapper"?jr(f):o;c&&ri(c[0])&&c[1]==(Wn|En|Tn|bt)&&!c[4].length&&c[9]==1?l=l[Ge(c[0])].apply(l,c[3]):l=f.length==1&&ri(f)?l[s]():l.thru(f)}return function(){var _=arguments,p=_[0];if(l&&_.length==1&&y(p))return l.plant(p).value();for(var v=0,d=e?t[v].apply(this,_):p;++v<e;)d=t[v].call(this,d);return d}})}function Me(n,t,e,r,i,f,l,s,c,_){var p=t&Wn,v=t&an,d=t&nt,x=t&(En|_t),R=t&je,T=d?o:Vt(n);function I(){for(var C=arguments.length,O=h(C),ln=C;ln--;)O[ln]=arguments[ln];if(x)var V=Ct(I),on=Po(O,V);if(r&&(O=Ju(O,r,i,x)),f&&(O=Qu(O,f,l,x)),C-=on,x&&C<_){var H=Zn(O,V);return uf(n,t,Me,I.placeholder,e,O,H,s,c,_-C)}var yn=v?e:this,Hn=d?yn[n]:n;return C=O.length,s?O=Ha(O,s):R&&C>1&&O.reverse(),p&&c<C&&(O.length=c),this&&this!==$&&this instanceof I&&(Hn=T||Vt(Hn)),Hn.apply(yn,O)}return I}function ef(n,t){return function(e,r){return Js(e,n,t(r),{})}}function Ue(n,t){return function(e,r){var i;if(e===o&&r===o)return t;if(e!==o&&(i=e),r!==o){if(i===o)return r;typeof e=="string"||typeof r=="string"?(e=un(e),r=un(r)):(e=Hu(e),r=Hu(r)),i=n(e,r)}return i}}function Jr(n){return Un(function(t){return t=U(t,rn(A())),L(function(e){var r=this;return n(t,function(i){return en(i,r,e)})})})}function De(n,t){t=t===o?" ":un(t);var e=t.length;if(e<2)return e?qr(t,n):t;var r=qr(t,ye(n/Rt(t)));return At(t)?kn(Rn(r),0,n).join(""):r.slice(0,n)}function Ia(n,t,e,r){var i=t&an,f=Vt(n);function l(){for(var s=-1,c=arguments.length,_=-1,p=r.length,v=h(p+c),d=this&&this!==$&&this instanceof l?f:n;++_<p;)v[_]=r[_];for(;c--;)v[_++]=arguments[++s];return en(d,i?e:this,v)}return l}function rf(n){return function(t,e,r){return r&&typeof r!="number"&&Q(t,e,r)&&(e=r=o),t=Gn(t),e===o?(e=t,t=0):e=Gn(e),r=r===o?t<e?1:-1:Gn(r),la(t,e,r,n)}}function Ne(n){return function(t,e){return typeof t=="string"&&typeof e=="string"||(t=wn(t),e=wn(e)),n(t,e)}}function uf(n,t,e,r,i,f,l,s,c,_){var p=t&En,v=p?l:o,d=p?o:l,x=p?f:o,R=p?o:f;t|=p?Tn:pt,t&=~(p?pt:Tn),t&Ii||(t&=~(an|nt));var T=[n,t,i,x,v,R,d,s,c,_],I=e.apply(o,T);return ri(n)&&df(I,T),I.placeholder=r,wf(I,n,t)}function Qr(n){var t=q[n];return function(e,r){if(e=wn(e),r=r==null?0:Y(E(r),292),r&&du(e)){var i=(b(e)+"e").split("e"),f=t(i[0]+"e"+(+i[1]+r));return i=(b(f)+"e").split("e"),+(i[0]+"e"+(+i[1]-r))}return t(e)}}var Sa=St&&1/_e(new St([,-0]))[1]==tt?function(n){return new St(n)}:wi;function ff(n){return function(t){var e=X(t);return e==xn?Tr(t):e==An?Go(t):bo(t,n(t))}}function Mn(n,t,e,r,i,f,l,s){var c=t&nt;if(!c&&typeof n!="function")throw new gn(sn);var _=r?r.length:0;if(_||(t&=~(Tn|pt),r=i=o),l=l===o?l:K(E(l),0),s=s===o?s:E(s),_-=i?i.length:0,t&pt){var p=r,v=i;r=i=o}var d=c?o:jr(n),x=[n,t,e,r,i,p,v,f,l,s];if(d&&Da(x,d),n=x[0],t=x[1],e=x[2],r=x[3],i=x[4],s=x[9]=x[9]===o?c?0:n.length:K(x[9]-_,0),!s&&t&(En|_t)&&(t&=~(En|_t)),!t||t==an)var R=Aa(n,t,e);else t==En||t==_t?R=Ra(n,t,s):(t==Tn||t==(an|Tn))&&!i.length?R=Ia(n,t,e,r):R=Me.apply(o,x);var T=d?Nu:df;return wf(T(R,x),n,t)}function lf(n,t,e,r){return n===o||Sn(n,It[e])&&!P.call(r,e)?t:n}function of(n,t,e,r,i,f){return D(n)&&D(t)&&(f.set(t,n),be(n,t,o,of,f),f.delete(t)),n}function ya(n){return ne(n)?o:n}function sf(n,t,e,r,i,f){var l=e&gt,s=n.length,c=t.length;if(s!=c&&!(l&&c>s))return!1;var _=f.get(n),p=f.get(t);if(_&&p)return _==t&&p==n;var v=-1,d=!0,x=e&re?new ut:o;for(f.set(n,t),f.set(t,n);++v<s;){var R=n[v],T=t[v];if(r)var I=l?r(T,R,v,t,n,f):r(R,T,v,n,t,f);if(I!==o){if(I)continue;d=!1;break}if(x){if(!Ar(t,function(C,O){if(!Gt(x,O)&&(R===C||i(R,C,e,r,f)))return x.push(O)})){d=!1;break}}else if(!(R===T||i(R,T,e,r,f))){d=!1;break}}return f.delete(n),f.delete(t),d}function Ea(n,t,e,r,i,f,l){switch(e){case dt:if(n.byteLength!=t.byteLength||n.byteOffset!=t.byteOffset)return!1;n=n.buffer,t=t.buffer;case Nt:return!(n.byteLength!=t.byteLength||!f(new Ae(n),new Ae(t)));case Pt:case Bt:case Ft:return Sn(+n,+t);case fe:return n.name==t.name&&n.message==t.message;case Mt:case Ut:return n==t+"";case xn:var s=Tr;case An:var c=r&gt;if(s||(s=_e),n.size!=t.size&&!c)return!1;var _=l.get(n);if(_)return _==t;r|=re,l.set(n,t);var p=sf(s(n),s(t),r,i,f,l);return l.delete(n),p;case oe:if(zt)return zt.call(n)==zt.call(t)}return!1}function Ta(n,t,e,r,i,f){var l=e&gt,s=Vr(n),c=s.length,_=Vr(t),p=_.length;if(c!=p&&!l)return!1;for(var v=c;v--;){var d=s[v];if(!(l?d in t:P.call(t,d)))return!1}var x=f.get(n),R=f.get(t);if(x&&R)return x==t&&R==n;var T=!0;f.set(n,t),f.set(t,n);for(var I=l;++v<c;){d=s[v];var C=n[d],O=t[d];if(r)var ln=l?r(O,C,d,t,n,f):r(C,O,d,n,t,f);if(!(ln===o?C===O||i(C,O,e,r,f):ln)){T=!1;break}I||(I=d=="constructor")}if(T&&!I){var V=n.constructor,on=t.constructor;V!=on&&"constructor"in n&&"constructor"in t&&!(typeof V=="function"&&V instanceof V&&typeof on=="function"&&on instanceof on)&&(T=!1)}return f.delete(n),f.delete(t),T}function Un(n){return ui(pf(n,o,yf),n+"")}function Vr(n){return Cu(n,z,ti)}function kr(n){return Cu(n,nn,af)}var jr=Te?function(n){return Te.get(n)}:wi;function Ge(n){for(var t=n.name+"",e=yt[t],r=P.call(yt,t)?e.length:0;r--;){var i=e[r],f=i.func;if(f==null||f==n)return i.name}return t}function Ct(n){var t=P.call(u,"placeholder")?u:n;return t.placeholder}function A(){var n=u.iteratee||vi;return n=n===vi?Wu:n,arguments.length?n(arguments[0],arguments[1]):n}function He(n,t){var e=n.__data__;return Ba(t)?e[typeof t=="string"?"string":"hash"]:e.map}function ni(n){for(var t=z(n),e=t.length;e--;){var r=t[e],i=n[r];t[e]=[r,i,gf(i)]}return t}function ot(n,t){var e=Uo(n,t);return Ou(e)?e:o}function La(n){var t=P.call(n,rt),e=n[rt];try{n[rt]=o;var r=!0}catch{}var i=we.call(n);return r&&(t?n[rt]=e:delete n[rt]),i}var ti=Cr?function(n){return n==null?[]:(n=B(n),$n(Cr(n),function(t){return pu.call(n,t)}))}:xi,af=Cr?function(n){for(var t=[];n;)zn(t,ti(n)),n=Re(n);return t}:xi,X=J;(mr&&X(new mr(new ArrayBuffer(1)))!=dt||qt&&X(new qt)!=xn||Or&&X(Or.resolve())!=Ei||St&&X(new St)!=An||Kt&&X(new Kt)!=Dt)&&(X=function(n){var t=J(n),e=t==bn?n.constructor:o,r=e?st(e):"";if(r)switch(r){case ss:return dt;case as:return xn;case cs:return Ei;case hs:return An;case gs:return Dt}return t});function Ca(n,t,e){for(var r=-1,i=e.length;++r<i;){var f=e[r],l=f.size;switch(f.type){case"drop":n+=l;break;case"dropRight":t-=l;break;case"take":t=Y(t,n+l);break;case"takeRight":n=K(n,t-l);break}}return{start:n,end:t}}function ma(n){var t=n.match(Bl);return t?t[1].split(Fl):[]}function cf(n,t,e){t=Vn(t,n);for(var r=-1,i=t.length,f=!1;++r<i;){var l=On(t[r]);if(!(f=n!=null&&e(n,l)))break;n=n[l]}return f||++r!=i?f:(i=n==null?0:n.length,!!i&&Xe(i)&&Dn(l,i)&&(y(n)||at(n)))}function Oa(n){var t=n.length,e=new n.constructor(t);return t&&typeof n[0]=="string"&&P.call(n,"index")&&(e.index=n.index,e.input=n.input),e}function hf(n){return typeof n.constructor=="function"&&!kt(n)?Et(Re(n)):{}}function Wa(n,t,e){var r=n.constructor;switch(t){case Nt:return Xr(n);case Pt:case Bt:return new r(+n);case dt:return _a(n,e);case nr:case tr:case er:case rr:case ir:case ur:case fr:case lr:case or:return Yu(n,e);case xn:return new r;case Ft:case Ut:return new r(n);case Mt:return pa(n);case An:return new r;case oe:return va(n)}}function ba(n,t){var e=t.length;if(!e)return n;var r=e-1;return t[r]=(e>1?"& ":"")+t[r],t=t.join(e>2?", ":" "),n.replace(Pl,`{
/* [wrapped with `+t+`] */
`)}function Pa(n){return y(n)||at(n)||!!(vu&&n&&n[vu])}function Dn(n,t){var e=typeof n;return t=t??Kn,!!t&&(e=="number"||e!="symbol"&&$l.test(n))&&n>-1&&n%1==0&&n<t}function Q(n,t,e){if(!D(e))return!1;var r=typeof t;return(r=="number"?j(e)&&Dn(t,e.length):r=="string"&&t in e)?Sn(e[t],n):!1}function ei(n,t){if(y(n))return!1;var e=typeof n;return e=="number"||e=="symbol"||e=="boolean"||n==null||fn(n)?!0:ml.test(n)||!Cl.test(n)||t!=null&&n in B(t)}function Ba(n){var t=typeof n;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?n!=="__proto__":n===null}function ri(n){var t=Ge(n),e=u[t];if(typeof e!="function"||!(t in m.prototype))return!1;if(n===e)return!0;var r=jr(e);return!!r&&n===r[0]}function Fa(n){return!!hu&&hu in n}var Ma=ve?Nn:Ai;function kt(n){var t=n&&n.constructor,e=typeof t=="function"&&t.prototype||It;return n===e}function gf(n){return n===n&&!D(n)}function _f(n,t){return function(e){return e==null?!1:e[n]===t&&(t!==o||n in B(e))}}function Ua(n){var t=Ze(n,function(r){return e.size===il&&e.clear(),r}),e=t.cache;return t}function Da(n,t){var e=n[1],r=t[1],i=e|r,f=i<(an|nt|Wn),l=r==Wn&&e==En||r==Wn&&e==bt&&n[7].length<=t[8]||r==(Wn|bt)&&t[7].length<=t[8]&&e==En;if(!(f||l))return n;r&an&&(n[2]=t[2],i|=e&an?0:Ii);var s=t[3];if(s){var c=n[3];n[3]=c?Ju(c,s,t[4]):s,n[4]=c?Zn(n[3],ee):t[4]}return s=t[5],s&&(c=n[5],n[5]=c?Qu(c,s,t[6]):s,n[6]=c?Zn(n[5],ee):t[6]),s=t[7],s&&(n[7]=s),r&Wn&&(n[8]=n[8]==null?t[8]:Y(n[8],t[8])),n[9]==null&&(n[9]=t[9]),n[0]=t[0],n[1]=i,n}function Na(n){var t=[];if(n!=null)for(var e in B(n))t.push(e);return t}function Ga(n){return we.call(n)}function pf(n,t,e){return t=K(t===o?n.length-1:t,0),function(){for(var r=arguments,i=-1,f=K(r.length-t,0),l=h(f);++i<f;)l[i]=r[t+i];i=-1;for(var s=h(t+1);++i<t;)s[i]=r[i];return s[t]=e(l),en(n,this,s)}}function vf(n,t){return t.length<2?n:lt(n,vn(t,0,-1))}function Ha(n,t){for(var e=n.length,r=Y(t.length,e),i=k(n);r--;){var f=t[r];n[r]=Dn(f,e)?i[f]:o}return n}function ii(n,t){if(!(t==="constructor"&&typeof n[t]=="function")&&t!="__proto__")return n[t]}var df=xf(Nu),jt=es||function(n,t){return $.setTimeout(n,t)},ui=xf(aa);function wf(n,t,e){var r=t+"";return ui(n,ba(r,qa(ma(r),e)))}function xf(n){var t=0,e=0;return function(){var r=fs(),i=ol-(r-e);if(e=r,i>0){if(++t>=ll)return arguments[0]}else t=0;return n.apply(o,arguments)}}function qe(n,t){var e=-1,r=n.length,i=r-1;for(t=t===o?r:t;++e<t;){var f=Hr(e,i),l=n[f];n[f]=n[e],n[e]=l}return n.length=t,n}var Af=Ua(function(n){var t=[];return n.charCodeAt(0)===46&&t.push(""),n.replace(Ol,function(e,r,i,f){t.push(i?f.replace(Dl,"$1"):r||e)}),t});function On(n){if(typeof n=="string"||fn(n))return n;var t=n+"";return t=="0"&&1/n==-tt?"-0":t}function st(n){if(n!=null){try{return de.call(n)}catch{}try{return n+""}catch{}}return""}function qa(n,t){return hn(_l,function(e){var r="_."+e[0];t&e[1]&&!he(n,r)&&n.push(r)}),n.sort()}function Rf(n){if(n instanceof m)return n.clone();var t=new _n(n.__wrapped__,n.__chain__);return t.__actions__=k(n.__actions__),t.__index__=n.__index__,t.__values__=n.__values__,t}function Ka(n,t,e){(e?Q(n,t,e):t===o)?t=1:t=K(E(t),0);var r=n==null?0:n.length;if(!r||t<1)return[];for(var i=0,f=0,l=h(ye(r/t));i<r;)l[f++]=vn(n,i,i+=t);return l}function $a(n){for(var t=-1,e=n==null?0:n.length,r=0,i=[];++t<e;){var f=n[t];f&&(i[r++]=f)}return i}function za(){var n=arguments.length;if(!n)return[];for(var t=h(n-1),e=arguments[0],r=n;r--;)t[r-1]=arguments[r];return zn(y(e)?k(e):[e],Z(t,1))}var Za=L(function(n,t){return G(n)?Yt(n,Z(t,1,G,!0)):[]}),Ya=L(function(n,t){var e=dn(t);return G(e)&&(e=o),G(n)?Yt(n,Z(t,1,G,!0),A(e,2)):[]}),Xa=L(function(n,t){var e=dn(t);return G(e)&&(e=o),G(n)?Yt(n,Z(t,1,G,!0),o,e):[]});function Ja(n,t,e){var r=n==null?0:n.length;return r?(t=e||t===o?1:E(t),vn(n,t<0?0:t,r)):[]}function Qa(n,t,e){var r=n==null?0:n.length;return r?(t=e||t===o?1:E(t),t=r-t,vn(n,0,t<0?0:t)):[]}function Va(n,t){return n&&n.length?Be(n,A(t,3),!0,!0):[]}function ka(n,t){return n&&n.length?Be(n,A(t,3),!0):[]}function ja(n,t,e,r){var i=n==null?0:n.length;return i?(e&&typeof e!="number"&&Q(n,t,e)&&(e=0,r=i),zs(n,t,e,r)):[]}function If(n,t,e){var r=n==null?0:n.length;if(!r)return-1;var i=e==null?0:E(e);return i<0&&(i=K(r+i,0)),ge(n,A(t,3),i)}function Sf(n,t,e){var r=n==null?0:n.length;if(!r)return-1;var i=r-1;return e!==o&&(i=E(e),i=e<0?K(r+i,0):Y(i,r-1)),ge(n,A(t,3),i,!0)}function yf(n){var t=n==null?0:n.length;return t?Z(n,1):[]}function nc(n){var t=n==null?0:n.length;return t?Z(n,tt):[]}function tc(n,t){var e=n==null?0:n.length;return e?(t=t===o?1:E(t),Z(n,t)):[]}function ec(n){for(var t=-1,e=n==null?0:n.length,r={};++t<e;){var i=n[t];r[i[0]]=i[1]}return r}function Ef(n){return n&&n.length?n[0]:o}function rc(n,t,e){var r=n==null?0:n.length;if(!r)return-1;var i=e==null?0:E(e);return i<0&&(i=K(r+i,0)),xt(n,t,i)}function ic(n){var t=n==null?0:n.length;return t?vn(n,0,-1):[]}var uc=L(function(n){var t=U(n,Zr);return t.length&&t[0]===n[0]?Mr(t):[]}),fc=L(function(n){var t=dn(n),e=U(n,Zr);return t===dn(e)?t=o:e.pop(),e.length&&e[0]===n[0]?Mr(e,A(t,2)):[]}),lc=L(function(n){var t=dn(n),e=U(n,Zr);return t=typeof t=="function"?t:o,t&&e.pop(),e.length&&e[0]===n[0]?Mr(e,o,t):[]});function oc(n,t){return n==null?"":is.call(n,t)}function dn(n){var t=n==null?0:n.length;return t?n[t-1]:o}function sc(n,t,e){var r=n==null?0:n.length;if(!r)return-1;var i=r;return e!==o&&(i=E(e),i=i<0?K(r+i,0):Y(i,r-1)),t===t?qo(n,t,i):ge(n,iu,i,!0)}function ac(n,t){return n&&n.length?Fu(n,E(t)):o}var cc=L(Tf);function Tf(n,t){return n&&n.length&&t&&t.length?Gr(n,t):n}function hc(n,t,e){return n&&n.length&&t&&t.length?Gr(n,t,A(e,2)):n}function gc(n,t,e){return n&&n.length&&t&&t.length?Gr(n,t,o,e):n}var _c=Un(function(n,t){var e=n==null?0:n.length,r=br(n,t);return Du(n,U(t,function(i){return Dn(i,e)?+i:i}).sort(Xu)),r});function pc(n,t){var e=[];if(!(n&&n.length))return e;var r=-1,i=[],f=n.length;for(t=A(t,3);++r<f;){var l=n[r];t(l,r,n)&&(e.push(l),i.push(r))}return Du(n,i),e}function fi(n){return n==null?n:os.call(n)}function vc(n,t,e){var r=n==null?0:n.length;return r?(e&&typeof e!="number"&&Q(n,t,e)?(t=0,e=r):(t=t==null?0:E(t),e=e===o?r:E(e)),vn(n,t,e)):[]}function dc(n,t){return Pe(n,t)}function wc(n,t,e){return Kr(n,t,A(e,2))}function xc(n,t){var e=n==null?0:n.length;if(e){var r=Pe(n,t);if(r<e&&Sn(n[r],t))return r}return-1}function Ac(n,t){return Pe(n,t,!0)}function Rc(n,t,e){return Kr(n,t,A(e,2),!0)}function Ic(n,t){var e=n==null?0:n.length;if(e){var r=Pe(n,t,!0)-1;if(Sn(n[r],t))return r}return-1}function Sc(n){return n&&n.length?Gu(n):[]}function yc(n,t){return n&&n.length?Gu(n,A(t,2)):[]}function Ec(n){var t=n==null?0:n.length;return t?vn(n,1,t):[]}function Tc(n,t,e){return n&&n.length?(t=e||t===o?1:E(t),vn(n,0,t<0?0:t)):[]}function Lc(n,t,e){var r=n==null?0:n.length;return r?(t=e||t===o?1:E(t),t=r-t,vn(n,t<0?0:t,r)):[]}function Cc(n,t){return n&&n.length?Be(n,A(t,3),!1,!0):[]}function mc(n,t){return n&&n.length?Be(n,A(t,3)):[]}var Oc=L(function(n){return Qn(Z(n,1,G,!0))}),Wc=L(function(n){var t=dn(n);return G(t)&&(t=o),Qn(Z(n,1,G,!0),A(t,2))}),bc=L(function(n){var t=dn(n);return t=typeof t=="function"?t:o,Qn(Z(n,1,G,!0),o,t)});function Pc(n){return n&&n.length?Qn(n):[]}function Bc(n,t){return n&&n.length?Qn(n,A(t,2)):[]}function Fc(n,t){return t=typeof t=="function"?t:o,n&&n.length?Qn(n,o,t):[]}function li(n){if(!(n&&n.length))return[];var t=0;return n=$n(n,function(e){if(G(e))return t=K(e.length,t),!0}),yr(t,function(e){return U(n,Rr(e))})}function Lf(n,t){if(!(n&&n.length))return[];var e=li(n);return t==null?e:U(e,function(r){return en(t,o,r)})}var Mc=L(function(n,t){return G(n)?Yt(n,t):[]}),Uc=L(function(n){return zr($n(n,G))}),Dc=L(function(n){var t=dn(n);return G(t)&&(t=o),zr($n(n,G),A(t,2))}),Nc=L(function(n){var t=dn(n);return t=typeof t=="function"?t:o,zr($n(n,G),o,t)}),Gc=L(li);function Hc(n,t){return $u(n||[],t||[],Zt)}function qc(n,t){return $u(n||[],t||[],Qt)}var Kc=L(function(n){var t=n.length,e=t>1?n[t-1]:o;return e=typeof e=="function"?(n.pop(),e):o,Lf(n,e)});function Cf(n){var t=u(n);return t.__chain__=!0,t}function $c(n,t){return t(n),n}function Ke(n,t){return t(n)}var zc=Un(function(n){var t=n.length,e=t?n[0]:0,r=this.__wrapped__,i=function(f){return br(f,n)};return t>1||this.__actions__.length||!(r instanceof m)||!Dn(e)?this.thru(i):(r=r.slice(e,+e+(t?1:0)),r.__actions__.push({func:Ke,args:[i],thisArg:o}),new _n(r,this.__chain__).thru(function(f){return t&&!f.length&&f.push(o),f}))});function Zc(){return Cf(this)}function Yc(){return new _n(this.value(),this.__chain__)}function Xc(){this.__values__===o&&(this.__values__=qf(this.value()));var n=this.__index__>=this.__values__.length,t=n?o:this.__values__[this.__index__++];return{done:n,value:t}}function Jc(){return this}function Qc(n){for(var t,e=this;e instanceof Ce;){var r=Rf(e);r.__index__=0,r.__values__=o,t?i.__wrapped__=r:t=r;var i=r;e=e.__wrapped__}return i.__wrapped__=n,t}function Vc(){var n=this.__wrapped__;if(n instanceof m){var t=n;return this.__actions__.length&&(t=new m(this)),t=t.reverse(),t.__actions__.push({func:Ke,args:[fi],thisArg:o}),new _n(t,this.__chain__)}return this.thru(fi)}function kc(){return Ku(this.__wrapped__,this.__actions__)}var jc=Fe(function(n,t,e){P.call(n,e)?++n[e]:Fn(n,e,1)});function nh(n,t,e){var r=y(n)?eu:$s;return e&&Q(n,t,e)&&(t=o),r(n,A(t,3))}function th(n,t){var e=y(n)?$n:Tu;return e(n,A(t,3))}var eh=nf(If),rh=nf(Sf);function ih(n,t){return Z($e(n,t),1)}function uh(n,t){return Z($e(n,t),tt)}function fh(n,t,e){return e=e===o?1:E(e),Z($e(n,t),e)}function mf(n,t){var e=y(n)?hn:Jn;return e(n,A(t,3))}function Of(n,t){var e=y(n)?Eo:Eu;return e(n,A(t,3))}var lh=Fe(function(n,t,e){P.call(n,e)?n[e].push(t):Fn(n,e,[t])});function oh(n,t,e,r){n=j(n)?n:Ot(n),e=e&&!r?E(e):0;var i=n.length;return e<0&&(e=K(i+e,0)),Je(n)?e<=i&&n.indexOf(t,e)>-1:!!i&&xt(n,t,e)>-1}var sh=L(function(n,t,e){var r=-1,i=typeof t=="function",f=j(n)?h(n.length):[];return Jn(n,function(l){f[++r]=i?en(t,l,e):Xt(l,t,e)}),f}),ah=Fe(function(n,t,e){Fn(n,e,t)});function $e(n,t){var e=y(n)?U:bu;return e(n,A(t,3))}function ch(n,t,e,r){return n==null?[]:(y(t)||(t=t==null?[]:[t]),e=r?o:e,y(e)||(e=e==null?[]:[e]),Mu(n,t,e))}var hh=Fe(function(n,t,e){n[e?0:1].push(t)},function(){return[[],[]]});function gh(n,t,e){var r=y(n)?xr:fu,i=arguments.length<3;return r(n,A(t,4),e,i,Jn)}function _h(n,t,e){var r=y(n)?To:fu,i=arguments.length<3;return r(n,A(t,4),e,i,Eu)}function ph(n,t){var e=y(n)?$n:Tu;return e(n,Ye(A(t,3)))}function vh(n){var t=y(n)?Ru:oa;return t(n)}function dh(n,t,e){(e?Q(n,t,e):t===o)?t=1:t=E(t);var r=y(n)?Ns:sa;return r(n,t)}function wh(n){var t=y(n)?Gs:ca;return t(n)}function xh(n){if(n==null)return 0;if(j(n))return Je(n)?Rt(n):n.length;var t=X(n);return t==xn||t==An?n.size:Dr(n).length}function Ah(n,t,e){var r=y(n)?Ar:ha;return e&&Q(n,t,e)&&(t=o),r(n,A(t,3))}var Rh=L(function(n,t){if(n==null)return[];var e=t.length;return e>1&&Q(n,t[0],t[1])?t=[]:e>2&&Q(t[0],t[1],t[2])&&(t=[t[0]]),Mu(n,Z(t,1),[])}),ze=ts||function(){return $.Date.now()};function Ih(n,t){if(typeof t!="function")throw new gn(sn);return n=E(n),function(){if(--n<1)return t.apply(this,arguments)}}function Wf(n,t,e){return t=e?o:t,t=n&&t==null?n.length:t,Mn(n,Wn,o,o,o,o,t)}function bf(n,t){var e;if(typeof t!="function")throw new gn(sn);return n=E(n),function(){return--n>0&&(e=t.apply(this,arguments)),n<=1&&(t=o),e}}var oi=L(function(n,t,e){var r=an;if(e.length){var i=Zn(e,Ct(oi));r|=Tn}return Mn(n,r,t,e,i)}),Pf=L(function(n,t,e){var r=an|nt;if(e.length){var i=Zn(e,Ct(Pf));r|=Tn}return Mn(t,r,n,e,i)});function Bf(n,t,e){t=e?o:t;var r=Mn(n,En,o,o,o,o,o,t);return r.placeholder=Bf.placeholder,r}function Ff(n,t,e){t=e?o:t;var r=Mn(n,_t,o,o,o,o,o,t);return r.placeholder=Ff.placeholder,r}function Mf(n,t,e){var r,i,f,l,s,c,_=0,p=!1,v=!1,d=!0;if(typeof n!="function")throw new gn(sn);t=wn(t)||0,D(e)&&(p=!!e.leading,v="maxWait"in e,f=v?K(wn(e.maxWait)||0,t):f,d="trailing"in e?!!e.trailing:d);function x(H){var yn=r,Hn=i;return r=i=o,_=H,l=n.apply(Hn,yn),l}function R(H){return _=H,s=jt(C,t),p?x(H):l}function T(H){var yn=H-c,Hn=H-_,tl=t-yn;return v?Y(tl,f-Hn):tl}function I(H){var yn=H-c,Hn=H-_;return c===o||yn>=t||yn<0||v&&Hn>=f}function C(){var H=ze();if(I(H))return O(H);s=jt(C,T(H))}function O(H){return s=o,d&&r?x(H):(r=i=o,l)}function ln(){s!==o&&zu(s),_=0,r=c=i=s=o}function V(){return s===o?l:O(ze())}function on(){var H=ze(),yn=I(H);if(r=arguments,i=this,c=H,yn){if(s===o)return R(c);if(v)return zu(s),s=jt(C,t),x(c)}return s===o&&(s=jt(C,t)),l}return on.cancel=ln,on.flush=V,on}var Sh=L(function(n,t){return yu(n,1,t)}),yh=L(function(n,t,e){return yu(n,wn(t)||0,e)});function Eh(n){return Mn(n,je)}function Ze(n,t){if(typeof n!="function"||t!=null&&typeof t!="function")throw new gn(sn);var e=function(){var r=arguments,i=t?t.apply(this,r):r[0],f=e.cache;if(f.has(i))return f.get(i);var l=n.apply(this,r);return e.cache=f.set(i,l)||f,l};return e.cache=new(Ze.Cache||Bn),e}Ze.Cache=Bn;function Ye(n){if(typeof n!="function")throw new gn(sn);return function(){var t=arguments;switch(t.length){case 0:return!n.call(this);case 1:return!n.call(this,t[0]);case 2:return!n.call(this,t[0],t[1]);case 3:return!n.call(this,t[0],t[1],t[2])}return!n.apply(this,t)}}function Th(n){return bf(2,n)}var Lh=ga(function(n,t){t=t.length==1&&y(t[0])?U(t[0],rn(A())):U(Z(t,1),rn(A()));var e=t.length;return L(function(r){for(var i=-1,f=Y(r.length,e);++i<f;)r[i]=t[i].call(this,r[i]);return en(n,this,r)})}),si=L(function(n,t){var e=Zn(t,Ct(si));return Mn(n,Tn,o,t,e)}),Uf=L(function(n,t){var e=Zn(t,Ct(Uf));return Mn(n,pt,o,t,e)}),Ch=Un(function(n,t){return Mn(n,bt,o,o,o,t)});function mh(n,t){if(typeof n!="function")throw new gn(sn);return t=t===o?t:E(t),L(n,t)}function Oh(n,t){if(typeof n!="function")throw new gn(sn);return t=t==null?0:K(E(t),0),L(function(e){var r=e[t],i=kn(e,0,t);return r&&zn(i,r),en(n,this,i)})}function Wh(n,t,e){var r=!0,i=!0;if(typeof n!="function")throw new gn(sn);return D(e)&&(r="leading"in e?!!e.leading:r,i="trailing"in e?!!e.trailing:i),Mf(n,t,{leading:r,maxWait:t,trailing:i})}function bh(n){return Wf(n,1)}function Ph(n,t){return si(Yr(t),n)}function Bh(){if(!arguments.length)return[];var n=arguments[0];return y(n)?n:[n]}function Fh(n){return pn(n,ht)}function Mh(n,t){return t=typeof t=="function"?t:o,pn(n,ht,t)}function Uh(n){return pn(n,qn|ht)}function Dh(n,t){return t=typeof t=="function"?t:o,pn(n,qn|ht,t)}function Nh(n,t){return t==null||Su(n,t,z(t))}function Sn(n,t){return n===t||n!==n&&t!==t}var Gh=Ne(Fr),Hh=Ne(function(n,t){return n>=t}),at=mu(function(){return arguments}())?mu:function(n){return N(n)&&P.call(n,"callee")&&!pu.call(n,"callee")},y=h.isArray,qh=Qi?rn(Qi):Qs;function j(n){return n!=null&&Xe(n.length)&&!Nn(n)}function G(n){return N(n)&&j(n)}function Kh(n){return n===!0||n===!1||N(n)&&J(n)==Pt}var jn=rs||Ai,$h=Vi?rn(Vi):Vs;function zh(n){return N(n)&&n.nodeType===1&&!ne(n)}function Zh(n){if(n==null)return!0;if(j(n)&&(y(n)||typeof n=="string"||typeof n.splice=="function"||jn(n)||mt(n)||at(n)))return!n.length;var t=X(n);if(t==xn||t==An)return!n.size;if(kt(n))return!Dr(n).length;for(var e in n)if(P.call(n,e))return!1;return!0}function Yh(n,t){return Jt(n,t)}function Xh(n,t,e){e=typeof e=="function"?e:o;var r=e?e(n,t):o;return r===o?Jt(n,t,o,e):!!r}function ai(n){if(!N(n))return!1;var t=J(n);return t==fe||t==vl||typeof n.message=="string"&&typeof n.name=="string"&&!ne(n)}function Jh(n){return typeof n=="number"&&du(n)}function Nn(n){if(!D(n))return!1;var t=J(n);return t==le||t==yi||t==pl||t==wl}function Df(n){return typeof n=="number"&&n==E(n)}function Xe(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=Kn}function D(n){var t=typeof n;return n!=null&&(t=="object"||t=="function")}function N(n){return n!=null&&typeof n=="object"}var Nf=ki?rn(ki):js;function Qh(n,t){return n===t||Ur(n,t,ni(t))}function Vh(n,t,e){return e=typeof e=="function"?e:o,Ur(n,t,ni(t),e)}function kh(n){return Gf(n)&&n!=+n}function jh(n){if(Ma(n))throw new S(el);return Ou(n)}function ng(n){return n===null}function tg(n){return n==null}function Gf(n){return typeof n=="number"||N(n)&&J(n)==Ft}function ne(n){if(!N(n)||J(n)!=bn)return!1;var t=Re(n);if(t===null)return!0;var e=P.call(t,"constructor")&&t.constructor;return typeof e=="function"&&e instanceof e&&de.call(e)==Vo}var ci=ji?rn(ji):na;function eg(n){return Df(n)&&n>=-Kn&&n<=Kn}var Hf=nu?rn(nu):ta;function Je(n){return typeof n=="string"||!y(n)&&N(n)&&J(n)==Ut}function fn(n){return typeof n=="symbol"||N(n)&&J(n)==oe}var mt=tu?rn(tu):ea;function rg(n){return n===o}function ig(n){return N(n)&&X(n)==Dt}function ug(n){return N(n)&&J(n)==Al}var fg=Ne(Nr),lg=Ne(function(n,t){return n<=t});function qf(n){if(!n)return[];if(j(n))return Je(n)?Rn(n):k(n);if(Ht&&n[Ht])return No(n[Ht]());var t=X(n),e=t==xn?Tr:t==An?_e:Ot;return e(n)}function Gn(n){if(!n)return n===0?n:0;if(n=wn(n),n===tt||n===-tt){var t=n<0?-1:1;return t*cl}return n===n?n:0}function E(n){var t=Gn(n),e=t%1;return t===t?e?t-e:t:0}function Kf(n){return n?ft(E(n),0,Ln):0}function wn(n){if(typeof n=="number")return n;if(fn(n))return ie;if(D(n)){var t=typeof n.valueOf=="function"?n.valueOf():n;n=D(t)?t+"":t}if(typeof n!="string")return n===0?n:+n;n=lu(n);var e=Hl.test(n);return e||Kl.test(n)?Io(n.slice(2),e?2:8):Gl.test(n)?ie:+n}function $f(n){return mn(n,nn(n))}function og(n){return n?ft(E(n),-Kn,Kn):n===0?n:0}function b(n){return n==null?"":un(n)}var sg=Tt(function(n,t){if(kt(t)||j(t)){mn(t,z(t),n);return}for(var e in t)P.call(t,e)&&Zt(n,e,t[e])}),zf=Tt(function(n,t){mn(t,nn(t),n)}),Qe=Tt(function(n,t,e,r){mn(t,nn(t),n,r)}),ag=Tt(function(n,t,e,r){mn(t,z(t),n,r)}),cg=Un(br);function hg(n,t){var e=Et(n);return t==null?e:Iu(e,t)}var gg=L(function(n,t){n=B(n);var e=-1,r=t.length,i=r>2?t[2]:o;for(i&&Q(t[0],t[1],i)&&(r=1);++e<r;)for(var f=t[e],l=nn(f),s=-1,c=l.length;++s<c;){var _=l[s],p=n[_];(p===o||Sn(p,It[_])&&!P.call(n,_))&&(n[_]=f[_])}return n}),_g=L(function(n){return n.push(o,of),en(Zf,o,n)});function pg(n,t){return ru(n,A(t,3),Cn)}function vg(n,t){return ru(n,A(t,3),Br)}function dg(n,t){return n==null?n:Pr(n,A(t,3),nn)}function wg(n,t){return n==null?n:Lu(n,A(t,3),nn)}function xg(n,t){return n&&Cn(n,A(t,3))}function Ag(n,t){return n&&Br(n,A(t,3))}function Rg(n){return n==null?[]:We(n,z(n))}function Ig(n){return n==null?[]:We(n,nn(n))}function hi(n,t,e){var r=n==null?o:lt(n,t);return r===o?e:r}function Sg(n,t){return n!=null&&cf(n,t,Zs)}function gi(n,t){return n!=null&&cf(n,t,Ys)}var yg=ef(function(n,t,e){t!=null&&typeof t.toString!="function"&&(t=we.call(t)),n[t]=e},pi(tn)),Eg=ef(function(n,t,e){t!=null&&typeof t.toString!="function"&&(t=we.call(t)),P.call(n,t)?n[t].push(e):n[t]=[e]},A),Tg=L(Xt);function z(n){return j(n)?Au(n):Dr(n)}function nn(n){return j(n)?Au(n,!0):ra(n)}function Lg(n,t){var e={};return t=A(t,3),Cn(n,function(r,i,f){Fn(e,t(r,i,f),r)}),e}function Cg(n,t){var e={};return t=A(t,3),Cn(n,function(r,i,f){Fn(e,i,t(r,i,f))}),e}var mg=Tt(function(n,t,e){be(n,t,e)}),Zf=Tt(function(n,t,e,r){be(n,t,e,r)}),Og=Un(function(n,t){var e={};if(n==null)return e;var r=!1;t=U(t,function(f){return f=Vn(f,n),r||(r=f.length>1),f}),mn(n,kr(n),e),r&&(e=pn(e,qn|Ri|ht,ya));for(var i=t.length;i--;)$r(e,t[i]);return e});function Wg(n,t){return Yf(n,Ye(A(t)))}var bg=Un(function(n,t){return n==null?{}:ua(n,t)});function Yf(n,t){if(n==null)return{};var e=U(kr(n),function(r){return[r]});return t=A(t),Uu(n,e,function(r,i){return t(r,i[0])})}function Pg(n,t,e){t=Vn(t,n);var r=-1,i=t.length;for(i||(i=1,n=o);++r<i;){var f=n==null?o:n[On(t[r])];f===o&&(r=i,f=e),n=Nn(f)?f.call(n):f}return n}function Bg(n,t,e){return n==null?n:Qt(n,t,e)}function Fg(n,t,e,r){return r=typeof r=="function"?r:o,n==null?n:Qt(n,t,e,r)}var Xf=ff(z),Jf=ff(nn);function Mg(n,t,e){var r=y(n),i=r||jn(n)||mt(n);if(t=A(t,4),e==null){var f=n&&n.constructor;i?e=r?new f:[]:D(n)?e=Nn(f)?Et(Re(n)):{}:e={}}return(i?hn:Cn)(n,function(l,s,c){return t(e,l,s,c)}),e}function Ug(n,t){return n==null?!0:$r(n,t)}function Dg(n,t,e){return n==null?n:qu(n,t,Yr(e))}function Ng(n,t,e,r){return r=typeof r=="function"?r:o,n==null?n:qu(n,t,Yr(e),r)}function Ot(n){return n==null?[]:Er(n,z(n))}function Gg(n){return n==null?[]:Er(n,nn(n))}function Hg(n,t,e){return e===o&&(e=t,t=o),e!==o&&(e=wn(e),e=e===e?e:0),t!==o&&(t=wn(t),t=t===t?t:0),ft(wn(n),t,e)}function qg(n,t,e){return t=Gn(t),e===o?(e=t,t=0):e=Gn(e),n=wn(n),Xs(n,t,e)}function Kg(n,t,e){if(e&&typeof e!="boolean"&&Q(n,t,e)&&(t=e=o),e===o&&(typeof t=="boolean"?(e=t,t=o):typeof n=="boolean"&&(e=n,n=o)),n===o&&t===o?(n=0,t=1):(n=Gn(n),t===o?(t=n,n=0):t=Gn(t)),n>t){var r=n;n=t,t=r}if(e||n%1||t%1){var i=wu();return Y(n+i*(t-n+Ro("1e-"+((i+"").length-1))),t)}return Hr(n,t)}var $g=Lt(function(n,t,e){return t=t.toLowerCase(),n+(e?Qf(t):t)});function Qf(n){return _i(b(n).toLowerCase())}function Vf(n){return n=b(n),n&&n.replace(zl,Bo).replace(ao,"")}function zg(n,t,e){n=b(n),t=un(t);var r=n.length;e=e===o?r:ft(E(e),0,r);var i=e;return e-=t.length,e>=0&&n.slice(e,i)==t}function Zg(n){return n=b(n),n&&El.test(n)?n.replace(Li,Fo):n}function Yg(n){return n=b(n),n&&Wl.test(n)?n.replace(sr,"\\$&"):n}var Xg=Lt(function(n,t,e){return n+(e?"-":"")+t.toLowerCase()}),Jg=Lt(function(n,t,e){return n+(e?" ":"")+t.toLowerCase()}),Qg=ju("toLowerCase");function Vg(n,t,e){n=b(n),t=E(t);var r=t?Rt(n):0;if(!t||r>=t)return n;var i=(t-r)/2;return De(Ee(i),e)+n+De(ye(i),e)}function kg(n,t,e){n=b(n),t=E(t);var r=t?Rt(n):0;return t&&r<t?n+De(t-r,e):n}function jg(n,t,e){n=b(n),t=E(t);var r=t?Rt(n):0;return t&&r<t?De(t-r,e)+n:n}function n_(n,t,e){return e||t==null?t=0:t&&(t=+t),ls(b(n).replace(ar,""),t||0)}function t_(n,t,e){return(e?Q(n,t,e):t===o)?t=1:t=E(t),qr(b(n),t)}function e_(){var n=arguments,t=b(n[0]);return n.length<3?t:t.replace(n[1],n[2])}var r_=Lt(function(n,t,e){return n+(e?"_":"")+t.toLowerCase()});function i_(n,t,e){return e&&typeof e!="number"&&Q(n,t,e)&&(t=e=o),e=e===o?Ln:e>>>0,e?(n=b(n),n&&(typeof t=="string"||t!=null&&!ci(t))&&(t=un(t),!t&&At(n))?kn(Rn(n),0,e):n.split(t,e)):[]}var u_=Lt(function(n,t,e){return n+(e?" ":"")+_i(t)});function f_(n,t,e){return n=b(n),e=e==null?0:ft(E(e),0,n.length),t=un(t),n.slice(e,e+t.length)==t}function l_(n,t,e){var r=u.templateSettings;e&&Q(n,t,e)&&(t=o),n=b(n),t=Qe({},t,r,lf);var i=Qe({},t.imports,r.imports,lf),f=z(i),l=Er(i,f),s,c,_=0,p=t.interpolate||se,v="__p += '",d=Lr((t.escape||se).source+"|"+p.source+"|"+(p===Ci?Nl:se).source+"|"+(t.evaluate||se).source+"|$","g"),x="//# sourceURL="+(P.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++po+"]")+`
`;n.replace(d,function(I,C,O,ln,V,on){return O||(O=ln),v+=n.slice(_,on).replace(Zl,Mo),C&&(s=!0,v+=`' +
__e(`+C+`) +
'`),V&&(c=!0,v+=`';
`+V+`;
__p += '`),O&&(v+=`' +
((__t = (`+O+`)) == null ? '' : __t) +
'`),_=on+I.length,I}),v+=`';
`;var R=P.call(t,"variable")&&t.variable;if(!R)v=`with (obj) {
`+v+`
}
`;else if(Ul.test(R))throw new S(rl);v=(c?v.replace(Rl,""):v).replace(Il,"$1").replace(Sl,"$1;"),v="function("+(R||"obj")+`) {
`+(R?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(s?", __e = _.escape":"")+(c?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+v+`return __p
}`;var T=jf(function(){return W(f,x+"return "+v).apply(o,l)});if(T.source=v,ai(T))throw T;return T}function o_(n){return b(n).toLowerCase()}function s_(n){return b(n).toUpperCase()}function a_(n,t,e){if(n=b(n),n&&(e||t===o))return lu(n);if(!n||!(t=un(t)))return n;var r=Rn(n),i=Rn(t),f=ou(r,i),l=su(r,i)+1;return kn(r,f,l).join("")}function c_(n,t,e){if(n=b(n),n&&(e||t===o))return n.slice(0,cu(n)+1);if(!n||!(t=un(t)))return n;var r=Rn(n),i=su(r,Rn(t))+1;return kn(r,0,i).join("")}function h_(n,t,e){if(n=b(n),n&&(e||t===o))return n.replace(ar,"");if(!n||!(t=un(t)))return n;var r=Rn(n),i=ou(r,Rn(t));return kn(r,i).join("")}function g_(n,t){var e=ul,r=fl;if(D(t)){var i="separator"in t?t.separator:i;e="length"in t?E(t.length):e,r="omission"in t?un(t.omission):r}n=b(n);var f=n.length;if(At(n)){var l=Rn(n);f=l.length}if(e>=f)return n;var s=e-Rt(r);if(s<1)return r;var c=l?kn(l,0,s).join(""):n.slice(0,s);if(i===o)return c+r;if(l&&(s+=c.length-s),ci(i)){if(n.slice(s).search(i)){var _,p=c;for(i.global||(i=Lr(i.source,b(mi.exec(i))+"g")),i.lastIndex=0;_=i.exec(p);)var v=_.index;c=c.slice(0,v===o?s:v)}}else if(n.indexOf(un(i),s)!=s){var d=c.lastIndexOf(i);d>-1&&(c=c.slice(0,d))}return c+r}function __(n){return n=b(n),n&&yl.test(n)?n.replace(Ti,Ko):n}var p_=Lt(function(n,t,e){return n+(e?" ":"")+t.toUpperCase()}),_i=ju("toUpperCase");function kf(n,t,e){return n=b(n),t=e?o:t,t===o?Do(n)?Zo(n):mo(n):n.match(t)||[]}var jf=L(function(n,t){try{return en(n,o,t)}catch(e){return ai(e)?e:new S(e)}}),v_=Un(function(n,t){return hn(t,function(e){e=On(e),Fn(n,e,oi(n[e],n))}),n});function d_(n){var t=n==null?0:n.length,e=A();return n=t?U(n,function(r){if(typeof r[1]!="function")throw new gn(sn);return[e(r[0]),r[1]]}):[],L(function(r){for(var i=-1;++i<t;){var f=n[i];if(en(f[0],this,r))return en(f[1],this,r)}})}function w_(n){return Ks(pn(n,qn))}function pi(n){return function(){return n}}function x_(n,t){return n==null||n!==n?t:n}var A_=tf(),R_=tf(!0);function tn(n){return n}function vi(n){return Wu(typeof n=="function"?n:pn(n,qn))}function I_(n){return Pu(pn(n,qn))}function S_(n,t){return Bu(n,pn(t,qn))}var y_=L(function(n,t){return function(e){return Xt(e,n,t)}}),E_=L(function(n,t){return function(e){return Xt(n,e,t)}});function di(n,t,e){var r=z(t),i=We(t,r);e==null&&!(D(t)&&(i.length||!r.length))&&(e=t,t=n,n=this,i=We(t,z(t)));var f=!(D(e)&&"chain"in e)||!!e.chain,l=Nn(n);return hn(i,function(s){var c=t[s];n[s]=c,l&&(n.prototype[s]=function(){var _=this.__chain__;if(f||_){var p=n(this.__wrapped__),v=p.__actions__=k(this.__actions__);return v.push({func:c,args:arguments,thisArg:n}),p.__chain__=_,p}return c.apply(n,zn([this.value()],arguments))})}),n}function T_(){return $._===this&&($._=ko),this}function wi(){}function L_(n){return n=E(n),L(function(t){return Fu(t,n)})}var C_=Jr(U),m_=Jr(eu),O_=Jr(Ar);function nl(n){return ei(n)?Rr(On(n)):fa(n)}function W_(n){return function(t){return n==null?o:lt(n,t)}}var b_=rf(),P_=rf(!0);function xi(){return[]}function Ai(){return!1}function B_(){return{}}function F_(){return""}function M_(){return!0}function U_(n,t){if(n=E(n),n<1||n>Kn)return[];var e=Ln,r=Y(n,Ln);t=A(t),n-=Ln;for(var i=yr(r,t);++e<n;)t(e);return i}function D_(n){return y(n)?U(n,On):fn(n)?[n]:k(Af(b(n)))}function N_(n){var t=++Qo;return b(n)+t}var G_=Ue(function(n,t){return n+t},0),H_=Qr("ceil"),q_=Ue(function(n,t){return n/t},1),K_=Qr("floor");function $_(n){return n&&n.length?Oe(n,tn,Fr):o}function z_(n,t){return n&&n.length?Oe(n,A(t,2),Fr):o}function Z_(n){return uu(n,tn)}function Y_(n,t){return uu(n,A(t,2))}function X_(n){return n&&n.length?Oe(n,tn,Nr):o}function J_(n,t){return n&&n.length?Oe(n,A(t,2),Nr):o}var Q_=Ue(function(n,t){return n*t},1),V_=Qr("round"),k_=Ue(function(n,t){return n-t},0);function j_(n){return n&&n.length?Sr(n,tn):0}function np(n,t){return n&&n.length?Sr(n,A(t,2)):0}return u.after=Ih,u.ary=Wf,u.assign=sg,u.assignIn=zf,u.assignInWith=Qe,u.assignWith=ag,u.at=cg,u.before=bf,u.bind=oi,u.bindAll=v_,u.bindKey=Pf,u.castArray=Bh,u.chain=Cf,u.chunk=Ka,u.compact=$a,u.concat=za,u.cond=d_,u.conforms=w_,u.constant=pi,u.countBy=jc,u.create=hg,u.curry=Bf,u.curryRight=Ff,u.debounce=Mf,u.defaults=gg,u.defaultsDeep=_g,u.defer=Sh,u.delay=yh,u.difference=Za,u.differenceBy=Ya,u.differenceWith=Xa,u.drop=Ja,u.dropRight=Qa,u.dropRightWhile=Va,u.dropWhile=ka,u.fill=ja,u.filter=th,u.flatMap=ih,u.flatMapDeep=uh,u.flatMapDepth=fh,u.flatten=yf,u.flattenDeep=nc,u.flattenDepth=tc,u.flip=Eh,u.flow=A_,u.flowRight=R_,u.fromPairs=ec,u.functions=Rg,u.functionsIn=Ig,u.groupBy=lh,u.initial=ic,u.intersection=uc,u.intersectionBy=fc,u.intersectionWith=lc,u.invert=yg,u.invertBy=Eg,u.invokeMap=sh,u.iteratee=vi,u.keyBy=ah,u.keys=z,u.keysIn=nn,u.map=$e,u.mapKeys=Lg,u.mapValues=Cg,u.matches=I_,u.matchesProperty=S_,u.memoize=Ze,u.merge=mg,u.mergeWith=Zf,u.method=y_,u.methodOf=E_,u.mixin=di,u.negate=Ye,u.nthArg=L_,u.omit=Og,u.omitBy=Wg,u.once=Th,u.orderBy=ch,u.over=C_,u.overArgs=Lh,u.overEvery=m_,u.overSome=O_,u.partial=si,u.partialRight=Uf,u.partition=hh,u.pick=bg,u.pickBy=Yf,u.property=nl,u.propertyOf=W_,u.pull=cc,u.pullAll=Tf,u.pullAllBy=hc,u.pullAllWith=gc,u.pullAt=_c,u.range=b_,u.rangeRight=P_,u.rearg=Ch,u.reject=ph,u.remove=pc,u.rest=mh,u.reverse=fi,u.sampleSize=dh,u.set=Bg,u.setWith=Fg,u.shuffle=wh,u.slice=vc,u.sortBy=Rh,u.sortedUniq=Sc,u.sortedUniqBy=yc,u.split=i_,u.spread=Oh,u.tail=Ec,u.take=Tc,u.takeRight=Lc,u.takeRightWhile=Cc,u.takeWhile=mc,u.tap=$c,u.throttle=Wh,u.thru=Ke,u.toArray=qf,u.toPairs=Xf,u.toPairsIn=Jf,u.toPath=D_,u.toPlainObject=$f,u.transform=Mg,u.unary=bh,u.union=Oc,u.unionBy=Wc,u.unionWith=bc,u.uniq=Pc,u.uniqBy=Bc,u.uniqWith=Fc,u.unset=Ug,u.unzip=li,u.unzipWith=Lf,u.update=Dg,u.updateWith=Ng,u.values=Ot,u.valuesIn=Gg,u.without=Mc,u.words=kf,u.wrap=Ph,u.xor=Uc,u.xorBy=Dc,u.xorWith=Nc,u.zip=Gc,u.zipObject=Hc,u.zipObjectDeep=qc,u.zipWith=Kc,u.entries=Xf,u.entriesIn=Jf,u.extend=zf,u.extendWith=Qe,di(u,u),u.add=G_,u.attempt=jf,u.camelCase=$g,u.capitalize=Qf,u.ceil=H_,u.clamp=Hg,u.clone=Fh,u.cloneDeep=Uh,u.cloneDeepWith=Dh,u.cloneWith=Mh,u.conformsTo=Nh,u.deburr=Vf,u.defaultTo=x_,u.divide=q_,u.endsWith=zg,u.eq=Sn,u.escape=Zg,u.escapeRegExp=Yg,u.every=nh,u.find=eh,u.findIndex=If,u.findKey=pg,u.findLast=rh,u.findLastIndex=Sf,u.findLastKey=vg,u.floor=K_,u.forEach=mf,u.forEachRight=Of,u.forIn=dg,u.forInRight=wg,u.forOwn=xg,u.forOwnRight=Ag,u.get=hi,u.gt=Gh,u.gte=Hh,u.has=Sg,u.hasIn=gi,u.head=Ef,u.identity=tn,u.includes=oh,u.indexOf=rc,u.inRange=qg,u.invoke=Tg,u.isArguments=at,u.isArray=y,u.isArrayBuffer=qh,u.isArrayLike=j,u.isArrayLikeObject=G,u.isBoolean=Kh,u.isBuffer=jn,u.isDate=$h,u.isElement=zh,u.isEmpty=Zh,u.isEqual=Yh,u.isEqualWith=Xh,u.isError=ai,u.isFinite=Jh,u.isFunction=Nn,u.isInteger=Df,u.isLength=Xe,u.isMap=Nf,u.isMatch=Qh,u.isMatchWith=Vh,u.isNaN=kh,u.isNative=jh,u.isNil=tg,u.isNull=ng,u.isNumber=Gf,u.isObject=D,u.isObjectLike=N,u.isPlainObject=ne,u.isRegExp=ci,u.isSafeInteger=eg,u.isSet=Hf,u.isString=Je,u.isSymbol=fn,u.isTypedArray=mt,u.isUndefined=rg,u.isWeakMap=ig,u.isWeakSet=ug,u.join=oc,u.kebabCase=Xg,u.last=dn,u.lastIndexOf=sc,u.lowerCase=Jg,u.lowerFirst=Qg,u.lt=fg,u.lte=lg,u.max=$_,u.maxBy=z_,u.mean=Z_,u.meanBy=Y_,u.min=X_,u.minBy=J_,u.stubArray=xi,u.stubFalse=Ai,u.stubObject=B_,u.stubString=F_,u.stubTrue=M_,u.multiply=Q_,u.nth=ac,u.noConflict=T_,u.noop=wi,u.now=ze,u.pad=Vg,u.padEnd=kg,u.padStart=jg,u.parseInt=n_,u.random=Kg,u.reduce=gh,u.reduceRight=_h,u.repeat=t_,u.replace=e_,u.result=Pg,u.round=V_,u.runInContext=a,u.sample=vh,u.size=xh,u.snakeCase=r_,u.some=Ah,u.sortedIndex=dc,u.sortedIndexBy=wc,u.sortedIndexOf=xc,u.sortedLastIndex=Ac,u.sortedLastIndexBy=Rc,u.sortedLastIndexOf=Ic,u.startCase=u_,u.startsWith=f_,u.subtract=k_,u.sum=j_,u.sumBy=np,u.template=l_,u.times=U_,u.toFinite=Gn,u.toInteger=E,u.toLength=Kf,u.toLower=o_,u.toNumber=wn,u.toSafeInteger=og,u.toString=b,u.toUpper=s_,u.trim=a_,u.trimEnd=c_,u.trimStart=h_,u.truncate=g_,u.unescape=__,u.uniqueId=N_,u.upperCase=p_,u.upperFirst=_i,u.each=mf,u.eachRight=Of,u.first=Ef,di(u,function(){var n={};return Cn(u,function(t,e){P.call(u.prototype,e)||(n[e]=t)}),n}(),{chain:!1}),u.VERSION=ct,hn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){u[n].placeholder=u}),hn(["drop","take"],function(n,t){m.prototype[n]=function(e){e=e===o?1:K(E(e),0);var r=this.__filtered__&&!t?new m(this):this.clone();return r.__filtered__?r.__takeCount__=Y(e,r.__takeCount__):r.__views__.push({size:Y(e,Ln),type:n+(r.__dir__<0?"Right":"")}),r},m.prototype[n+"Right"]=function(e){return this.reverse()[n](e).reverse()}}),hn(["filter","map","takeWhile"],function(n,t){var e=t+1,r=e==Si||e==al;m.prototype[n]=function(i){var f=this.clone();return f.__iteratees__.push({iteratee:A(i,3),type:e}),f.__filtered__=f.__filtered__||r,f}}),hn(["head","last"],function(n,t){var e="take"+(t?"Right":"");m.prototype[n]=function(){return this[e](1).value()[0]}}),hn(["initial","tail"],function(n,t){var e="drop"+(t?"":"Right");m.prototype[n]=function(){return this.__filtered__?new m(this):this[e](1)}}),m.prototype.compact=function(){return this.filter(tn)},m.prototype.find=function(n){return this.filter(n).head()},m.prototype.findLast=function(n){return this.reverse().find(n)},m.prototype.invokeMap=L(function(n,t){return typeof n=="function"?new m(this):this.map(function(e){return Xt(e,n,t)})}),m.prototype.reject=function(n){return this.filter(Ye(A(n)))},m.prototype.slice=function(n,t){n=E(n);var e=this;return e.__filtered__&&(n>0||t<0)?new m(e):(n<0?e=e.takeRight(-n):n&&(e=e.drop(n)),t!==o&&(t=E(t),e=t<0?e.dropRight(-t):e.take(t-n)),e)},m.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},m.prototype.toArray=function(){return this.take(Ln)},Cn(m.prototype,function(n,t){var e=/^(?:filter|find|map|reject)|While$/.test(t),r=/^(?:head|last)$/.test(t),i=u[r?"take"+(t=="last"?"Right":""):t],f=r||/^find/.test(t);i&&(u.prototype[t]=function(){var l=this.__wrapped__,s=r?[1]:arguments,c=l instanceof m,_=s[0],p=c||y(l),v=function(C){var O=i.apply(u,zn([C],s));return r&&d?O[0]:O};p&&e&&typeof _=="function"&&_.length!=1&&(c=p=!1);var d=this.__chain__,x=!!this.__actions__.length,R=f&&!d,T=c&&!x;if(!f&&p){l=T?l:new m(this);var I=n.apply(l,s);return I.__actions__.push({func:Ke,args:[v],thisArg:o}),new _n(I,d)}return R&&T?n.apply(this,s):(I=this.thru(v),R?r?I.value()[0]:I.value():I)})}),hn(["pop","push","shift","sort","splice","unshift"],function(n){var t=pe[n],e=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",r=/^(?:pop|shift)$/.test(n);u.prototype[n]=function(){var i=arguments;if(r&&!this.__chain__){var f=this.value();return t.apply(y(f)?f:[],i)}return this[e](function(l){return t.apply(y(l)?l:[],i)})}}),Cn(m.prototype,function(n,t){var e=u[t];if(e){var r=e.name+"";P.call(yt,r)||(yt[r]=[]),yt[r].push({name:t,func:e})}}),yt[Me(o,nt).name]=[{name:"wrapper",func:o}],m.prototype.clone=_s,m.prototype.reverse=ps,m.prototype.value=vs,u.prototype.at=zc,u.prototype.chain=Zc,u.prototype.commit=Yc,u.prototype.next=Xc,u.prototype.plant=Qc,u.prototype.reverse=Vc,u.prototype.toJSON=u.prototype.valueOf=u.prototype.value=kc,u.prototype.first=u.prototype.head,Ht&&(u.prototype[Ht]=Jc),u},Yn=Yo();typeof define=="function"&&typeof define.amd=="object"&&define.amd?($._=Yn,define(function(){return Yn})):et?((et.exports=Yn)._=Yn,vr._=Yn):$._=Yn}).call(Wt)});return ep();})();
/*! Bundled license information:

lodash/lodash.js:
  (**
   * @license
   * Lodash <https://lodash.com/>
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/

;

var $node = $node || {}
void function( module ) { var exports = module.exports = this; function require( id ) { return $node[ id.replace( /^.\// , "../bog/quiz/lib/" ) ] }; 
;
!(function (e, t) {
	'object' == typeof exports && 'undefined' != typeof module
		? (module.exports = t())
		: 'function' == typeof define && define.amd
			? define(t)
			: (e.moment = t())
})(this, function () {
	'use strict'
	var H
	function _() {
		return H.apply(null, arguments)
	}
	function y(e) {
		return e instanceof Array || '[object Array]' === Object.prototype.toString.call(e)
	}
	function F(e) {
		return null != e && '[object Object]' === Object.prototype.toString.call(e)
	}
	function c(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}
	function L(e) {
		if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length
		for (var t in e) if (c(e, t)) return
		return 1
	}
	function g(e) {
		return void 0 === e
	}
	function w(e) {
		return 'number' == typeof e || '[object Number]' === Object.prototype.toString.call(e)
	}
	function V(e) {
		return e instanceof Date || '[object Date]' === Object.prototype.toString.call(e)
	}
	function G(e, t) {
		for (var n = [], s = e.length, i = 0; i < s; ++i) n.push(t(e[i], i))
		return n
	}
	function E(e, t) {
		for (var n in t) c(t, n) && (e[n] = t[n])
		return (c(t, 'toString') && (e.toString = t.toString), c(t, 'valueOf') && (e.valueOf = t.valueOf), e)
	}
	function l(e, t, n, s) {
		return Wt(e, t, n, s, !0).utc()
	}
	function p(e) {
		return (
			null == e._pf &&
				(e._pf = {
					empty: !1,
					unusedTokens: [],
					unusedInput: [],
					overflow: -2,
					charsLeftOver: 0,
					nullInput: !1,
					invalidEra: null,
					invalidMonth: null,
					invalidFormat: !1,
					userInvalidated: !1,
					iso: !1,
					parsedDateParts: [],
					era: null,
					meridiem: null,
					rfc2822: !1,
					weekdayMismatch: !1,
				}),
			e._pf
		)
	}
	function A(e) {
		var t,
			n,
			s = e._d && !isNaN(e._d.getTime())
		return (
			s &&
				((t = p(e)),
				(n = j.call(t.parsedDateParts, function (e) {
					return null != e
				})),
				(s =
					t.overflow < 0 &&
					!t.empty &&
					!t.invalidEra &&
					!t.invalidMonth &&
					!t.invalidWeekday &&
					!t.weekdayMismatch &&
					!t.nullInput &&
					!t.invalidFormat &&
					!t.userInvalidated &&
					(!t.meridiem || (t.meridiem && n))),
				e._strict) &&
				(s = s && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour),
			null != Object.isFrozen && Object.isFrozen(e) ? s : ((e._isValid = s), e._isValid)
		)
	}
	function I(e) {
		var t = l(NaN)
		return (null != e ? E(p(t), e) : (p(t).userInvalidated = !0), t)
	}
	var j =
			Array.prototype.some ||
			function (e) {
				for (var t = Object(this), n = t.length >>> 0, s = 0; s < n; s++)
					if (s in t && e.call(this, t[s], s, t)) return !0
				return !1
			},
		Z = (_.momentProperties = []),
		z = !1
	function q(e, t) {
		var n,
			s,
			i,
			r = Z.length
		if (
			(g(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
			g(t._i) || (e._i = t._i),
			g(t._f) || (e._f = t._f),
			g(t._l) || (e._l = t._l),
			g(t._strict) || (e._strict = t._strict),
			g(t._tzm) || (e._tzm = t._tzm),
			g(t._isUTC) || (e._isUTC = t._isUTC),
			g(t._offset) || (e._offset = t._offset),
			g(t._pf) || (e._pf = p(t)),
			g(t._locale) || (e._locale = t._locale),
			0 < r)
		)
			for (n = 0; n < r; n++) g((i = t[(s = Z[n])])) || (e[s] = i)
		return e
	}
	function $(e) {
		;(q(this, e),
			(this._d = new Date(null != e._d ? e._d.getTime() : NaN)),
			this.isValid() || (this._d = new Date(NaN)),
			!1 === z && ((z = !0), _.updateOffset(this), (z = !1)))
	}
	function k(e) {
		return e instanceof $ || (null != e && null != e._isAMomentObject)
	}
	function B(e) {
		!1 === _.suppressDeprecationWarnings &&
			'undefined' != typeof console &&
			console.warn &&
			console.warn('Deprecation warning: ' + e)
	}
	function e(r, a) {
		var o = !0
		return E(function () {
			if ((null != _.deprecationHandler && _.deprecationHandler(null, r), o)) {
				for (var e, t, n = [], s = arguments.length, i = 0; i < s; i++) {
					if (((e = ''), 'object' == typeof arguments[i])) {
						for (t in ((e += '\n[' + i + '] '), arguments[0]))
							c(arguments[0], t) && (e += t + ': ' + arguments[0][t] + ', ')
						e = e.slice(0, -2)
					} else e = arguments[i]
					n.push(e)
				}
				;(B(r + '\nArguments: ' + Array.prototype.slice.call(n).join('') + '\n' + new Error().stack), (o = !1))
			}
			return a.apply(this, arguments)
		}, a)
	}
	var J = {}
	function Q(e, t) {
		;(null != _.deprecationHandler && _.deprecationHandler(e, t), J[e] || (B(t), (J[e] = !0)))
	}
	function a(e) {
		return (
			('undefined' != typeof Function && e instanceof Function) ||
			'[object Function]' === Object.prototype.toString.call(e)
		)
	}
	function X(e, t) {
		var n,
			s = E({}, e)
		for (n in t)
			c(t, n) &&
				(F(e[n]) && F(t[n])
					? ((s[n] = {}), E(s[n], e[n]), E(s[n], t[n]))
					: null != t[n]
						? (s[n] = t[n])
						: delete s[n])
		for (n in e) c(e, n) && !c(t, n) && F(e[n]) && (s[n] = E({}, s[n]))
		return s
	}
	function K(e) {
		null != e && this.set(e)
	}
	;((_.suppressDeprecationWarnings = !1), (_.deprecationHandler = null))
	var ee =
		Object.keys ||
		function (e) {
			var t,
				n = []
			for (t in e) c(e, t) && n.push(t)
			return n
		}
	function r(e, t, n) {
		var s = '' + Math.abs(e)
		return (
			(0 <= e ? (n ? '+' : '') : '-') +
			Math.pow(10, Math.max(0, t - s.length))
				.toString()
				.substr(1) +
			s
		)
	}
	var te =
			/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
		ne = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
		se = {},
		ie = {}
	function s(e, t, n, s) {
		var i =
			'string' == typeof s
				? function () {
						return this[s]()
					}
				: s
		;(e && (ie[e] = i),
			t &&
				(ie[t[0]] = function () {
					return r(i.apply(this, arguments), t[1], t[2])
				}),
			n &&
				(ie[n] = function () {
					return this.localeData().ordinal(i.apply(this, arguments), e)
				}))
	}
	function re(e, t) {
		return e.isValid()
			? ((t = ae(t, e.localeData())),
				(se[t] =
					se[t] ||
					(function (s) {
						for (var e, i = s.match(te), t = 0, r = i.length; t < r; t++)
							ie[i[t]]
								? (i[t] = ie[i[t]])
								: (i[t] = (e = i[t]).match(/\[[\s\S]/)
										? e.replace(/^\[|\]$/g, '')
										: e.replace(/\\/g, ''))
						return function (e) {
							for (var t = '', n = 0; n < r; n++) t += a(i[n]) ? i[n].call(e, s) : i[n]
							return t
						}
					})(t)),
				se[t](e))
			: e.localeData().invalidDate()
	}
	function ae(e, t) {
		var n = 5
		function s(e) {
			return t.longDateFormat(e) || e
		}
		for (ne.lastIndex = 0; 0 <= n && ne.test(e); ) ((e = e.replace(ne, s)), (ne.lastIndex = 0), --n)
		return e
	}
	var oe = {
		D: 'date',
		dates: 'date',
		date: 'date',
		d: 'day',
		days: 'day',
		day: 'day',
		e: 'weekday',
		weekdays: 'weekday',
		weekday: 'weekday',
		E: 'isoWeekday',
		isoweekdays: 'isoWeekday',
		isoweekday: 'isoWeekday',
		DDD: 'dayOfYear',
		dayofyears: 'dayOfYear',
		dayofyear: 'dayOfYear',
		h: 'hour',
		hours: 'hour',
		hour: 'hour',
		ms: 'millisecond',
		milliseconds: 'millisecond',
		millisecond: 'millisecond',
		m: 'minute',
		minutes: 'minute',
		minute: 'minute',
		M: 'month',
		months: 'month',
		month: 'month',
		Q: 'quarter',
		quarters: 'quarter',
		quarter: 'quarter',
		s: 'second',
		seconds: 'second',
		second: 'second',
		gg: 'weekYear',
		weekyears: 'weekYear',
		weekyear: 'weekYear',
		GG: 'isoWeekYear',
		isoweekyears: 'isoWeekYear',
		isoweekyear: 'isoWeekYear',
		w: 'week',
		weeks: 'week',
		week: 'week',
		W: 'isoWeek',
		isoweeks: 'isoWeek',
		isoweek: 'isoWeek',
		y: 'year',
		years: 'year',
		year: 'year',
	}
	function o(e) {
		return 'string' == typeof e ? oe[e] || oe[e.toLowerCase()] : void 0
	}
	function ue(e) {
		var t,
			n,
			s = {}
		for (n in e) c(e, n) && (t = o(n)) && (s[t] = e[n])
		return s
	}
	var le = {
		date: 9,
		day: 11,
		weekday: 11,
		isoWeekday: 11,
		dayOfYear: 4,
		hour: 13,
		millisecond: 16,
		minute: 14,
		month: 8,
		quarter: 7,
		second: 15,
		weekYear: 1,
		isoWeekYear: 1,
		week: 5,
		isoWeek: 5,
		year: 1,
	}
	var de = /\d/,
		t = /\d\d/,
		he = /\d{3}/,
		ce = /\d{4}/,
		fe = /[+-]?\d{6}/,
		n = /\d\d?/,
		me = /\d\d\d\d?/,
		_e = /\d\d\d\d\d\d?/,
		ye = /\d{1,3}/,
		ge = /\d{1,4}/,
		we = /[+-]?\d{1,6}/,
		pe = /\d+/,
		ke = /[+-]?\d+/,
		Me = /Z|[+-]\d\d:?\d\d/gi,
		ve = /Z|[+-]\d\d(?::?\d\d)?/gi,
		i =
			/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
		u = /^[1-9]\d?/,
		d = /^([1-9]\d|\d)/
	function h(e, n, s) {
		Ye[e] = a(n)
			? n
			: function (e, t) {
					return e && s ? s : n
				}
	}
	function De(e, t) {
		return c(Ye, e)
			? Ye[e](t._strict, t._locale)
			: new RegExp(
					f(
						e.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, n, s, i) {
							return t || n || s || i
						}),
					),
				)
	}
	function f(e) {
		return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
	}
	function m(e) {
		return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
	}
	function M(e) {
		var e = +e,
			t = 0
		return (t = 0 != e && isFinite(e) ? m(e) : t)
	}
	var Ye = {},
		Se = {}
	function v(e, n) {
		var t,
			s,
			i = n
		for (
			'string' == typeof e && (e = [e]),
				w(n) &&
					(i = function (e, t) {
						t[n] = M(e)
					}),
				s = e.length,
				t = 0;
			t < s;
			t++
		)
			Se[e[t]] = i
	}
	function Oe(e, i) {
		v(e, function (e, t, n, s) {
			;((n._w = n._w || {}), i(e, n._w, n, s))
		})
	}
	function be(e) {
		return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0
	}
	var D = 0,
		Y = 1,
		S = 2,
		O = 3,
		b = 4,
		T = 5,
		Te = 6,
		xe = 7,
		Ne = 8
	function We(e) {
		return be(e) ? 366 : 365
	}
	;(s('Y', 0, 0, function () {
		var e = this.year()
		return e <= 9999 ? r(e, 4) : '+' + e
	}),
		s(0, ['YY', 2], 0, function () {
			return this.year() % 100
		}),
		s(0, ['YYYY', 4], 0, 'year'),
		s(0, ['YYYYY', 5], 0, 'year'),
		s(0, ['YYYYYY', 6, !0], 0, 'year'),
		h('Y', ke),
		h('YY', n, t),
		h('YYYY', ge, ce),
		h('YYYYY', we, fe),
		h('YYYYYY', we, fe),
		v(['YYYYY', 'YYYYYY'], D),
		v('YYYY', function (e, t) {
			t[D] = 2 === e.length ? _.parseTwoDigitYear(e) : M(e)
		}),
		v('YY', function (e, t) {
			t[D] = _.parseTwoDigitYear(e)
		}),
		v('Y', function (e, t) {
			t[D] = parseInt(e, 10)
		}),
		(_.parseTwoDigitYear = function (e) {
			return M(e) + (68 < M(e) ? 1900 : 2e3)
		}))
	var x,
		Pe = Re('FullYear', !0)
	function Re(t, n) {
		return function (e) {
			return null != e ? (Ue(this, t, e), _.updateOffset(this, n), this) : Ce(this, t)
		}
	}
	function Ce(e, t) {
		if (!e.isValid()) return NaN
		var n = e._d,
			s = e._isUTC
		switch (t) {
			case 'Milliseconds':
				return s ? n.getUTCMilliseconds() : n.getMilliseconds()
			case 'Seconds':
				return s ? n.getUTCSeconds() : n.getSeconds()
			case 'Minutes':
				return s ? n.getUTCMinutes() : n.getMinutes()
			case 'Hours':
				return s ? n.getUTCHours() : n.getHours()
			case 'Date':
				return s ? n.getUTCDate() : n.getDate()
			case 'Day':
				return s ? n.getUTCDay() : n.getDay()
			case 'Month':
				return s ? n.getUTCMonth() : n.getMonth()
			case 'FullYear':
				return s ? n.getUTCFullYear() : n.getFullYear()
			default:
				return NaN
		}
	}
	function Ue(e, t, n) {
		var s, i, r
		if (e.isValid() && !isNaN(n)) {
			switch (((s = e._d), (i = e._isUTC), t)) {
				case 'Milliseconds':
					return i ? s.setUTCMilliseconds(n) : s.setMilliseconds(n)
				case 'Seconds':
					return i ? s.setUTCSeconds(n) : s.setSeconds(n)
				case 'Minutes':
					return i ? s.setUTCMinutes(n) : s.setMinutes(n)
				case 'Hours':
					return i ? s.setUTCHours(n) : s.setHours(n)
				case 'Date':
					return i ? s.setUTCDate(n) : s.setDate(n)
				case 'FullYear':
					break
				default:
					return
			}
			;((t = n),
				(r = e.month()),
				(e = 29 !== (e = e.date()) || 1 !== r || be(t) ? e : 28),
				i ? s.setUTCFullYear(t, r, e) : s.setFullYear(t, r, e))
		}
	}
	function He(e, t) {
		var n
		return isNaN(e) || isNaN(t)
			? NaN
			: ((n = ((t % (n = 12)) + n) % n), (e += (t - n) / 12), 1 == n ? (be(e) ? 29 : 28) : 31 - ((n % 7) % 2))
	}
	;((x =
		Array.prototype.indexOf ||
		function (e) {
			for (var t = 0; t < this.length; ++t) if (this[t] === e) return t
			return -1
		}),
		s('M', ['MM', 2], 'Mo', function () {
			return this.month() + 1
		}),
		s('MMM', 0, 0, function (e) {
			return this.localeData().monthsShort(this, e)
		}),
		s('MMMM', 0, 0, function (e) {
			return this.localeData().months(this, e)
		}),
		h('M', n, u),
		h('MM', n, t),
		h('MMM', function (e, t) {
			return t.monthsShortRegex(e)
		}),
		h('MMMM', function (e, t) {
			return t.monthsRegex(e)
		}),
		v(['M', 'MM'], function (e, t) {
			t[Y] = M(e) - 1
		}),
		v(['MMM', 'MMMM'], function (e, t, n, s) {
			s = n._locale.monthsParse(e, s, n._strict)
			null != s ? (t[Y] = s) : (p(n).invalidMonth = e)
		}))
	var Fe = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
		Le = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
		Ve = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
		Ge = i,
		Ee = i
	function Ae(e, t) {
		if (e.isValid()) {
			if ('string' == typeof t)
				if (/^\d+$/.test(t)) t = M(t)
				else if (!w((t = e.localeData().monthsParse(t)))) return
			var n = (n = e.date()) < 29 ? n : Math.min(n, He(e.year(), t))
			e._isUTC ? e._d.setUTCMonth(t, n) : e._d.setMonth(t, n)
		}
	}
	function Ie(e) {
		return null != e ? (Ae(this, e), _.updateOffset(this, !0), this) : Ce(this, 'Month')
	}
	function je() {
		function e(e, t) {
			return t.length - e.length
		}
		for (var t, n, s = [], i = [], r = [], a = 0; a < 12; a++)
			((n = l([2e3, a])),
				(t = f(this.monthsShort(n, ''))),
				(n = f(this.months(n, ''))),
				s.push(t),
				i.push(n),
				r.push(n),
				r.push(t))
		;(s.sort(e),
			i.sort(e),
			r.sort(e),
			(this._monthsRegex = new RegExp('^(' + r.join('|') + ')', 'i')),
			(this._monthsShortRegex = this._monthsRegex),
			(this._monthsStrictRegex = new RegExp('^(' + i.join('|') + ')', 'i')),
			(this._monthsShortStrictRegex = new RegExp('^(' + s.join('|') + ')', 'i')))
	}
	function Ze(e, t, n, s, i, r, a) {
		var o
		return (
			e < 100 && 0 <= e
				? ((o = new Date(e + 400, t, n, s, i, r, a)), isFinite(o.getFullYear()) && o.setFullYear(e))
				: (o = new Date(e, t, n, s, i, r, a)),
			o
		)
	}
	function ze(e) {
		var t
		return (
			e < 100 && 0 <= e
				? (((t = Array.prototype.slice.call(arguments))[0] = e + 400),
					(t = new Date(Date.UTC.apply(null, t))),
					isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e))
				: (t = new Date(Date.UTC.apply(null, arguments))),
			t
		)
	}
	function qe(e, t, n) {
		n = 7 + t - n
		return n - ((7 + ze(e, 0, n).getUTCDay() - t) % 7) - 1
	}
	function $e(e, t, n, s, i) {
		var r,
			t = 1 + 7 * (t - 1) + ((7 + n - s) % 7) + qe(e, s, i),
			n = t <= 0 ? We((r = e - 1)) + t : t > We(e) ? ((r = e + 1), t - We(e)) : ((r = e), t)
		return { year: r, dayOfYear: n }
	}
	function Be(e, t, n) {
		var s,
			i,
			r = qe(e.year(), t, n),
			r = Math.floor((e.dayOfYear() - r - 1) / 7) + 1
		return (
			r < 1
				? (s = r + N((i = e.year() - 1), t, n))
				: r > N(e.year(), t, n)
					? ((s = r - N(e.year(), t, n)), (i = e.year() + 1))
					: ((i = e.year()), (s = r)),
			{ week: s, year: i }
		)
	}
	function N(e, t, n) {
		var s = qe(e, t, n),
			t = qe(e + 1, t, n)
		return (We(e) - s + t) / 7
	}
	;(s('w', ['ww', 2], 'wo', 'week'),
		s('W', ['WW', 2], 'Wo', 'isoWeek'),
		h('w', n, u),
		h('ww', n, t),
		h('W', n, u),
		h('WW', n, t),
		Oe(['w', 'ww', 'W', 'WW'], function (e, t, n, s) {
			t[s.substr(0, 1)] = M(e)
		}))
	function Je(e, t) {
		return e.slice(t, 7).concat(e.slice(0, t))
	}
	;(s('d', 0, 'do', 'day'),
		s('dd', 0, 0, function (e) {
			return this.localeData().weekdaysMin(this, e)
		}),
		s('ddd', 0, 0, function (e) {
			return this.localeData().weekdaysShort(this, e)
		}),
		s('dddd', 0, 0, function (e) {
			return this.localeData().weekdays(this, e)
		}),
		s('e', 0, 0, 'weekday'),
		s('E', 0, 0, 'isoWeekday'),
		h('d', n),
		h('e', n),
		h('E', n),
		h('dd', function (e, t) {
			return t.weekdaysMinRegex(e)
		}),
		h('ddd', function (e, t) {
			return t.weekdaysShortRegex(e)
		}),
		h('dddd', function (e, t) {
			return t.weekdaysRegex(e)
		}),
		Oe(['dd', 'ddd', 'dddd'], function (e, t, n, s) {
			s = n._locale.weekdaysParse(e, s, n._strict)
			null != s ? (t.d = s) : (p(n).invalidWeekday = e)
		}),
		Oe(['d', 'e', 'E'], function (e, t, n, s) {
			t[s] = M(e)
		}))
	var Qe = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
		Xe = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
		Ke = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
		et = i,
		tt = i,
		nt = i
	function st() {
		function e(e, t) {
			return t.length - e.length
		}
		for (var t, n, s, i = [], r = [], a = [], o = [], u = 0; u < 7; u++)
			((s = l([2e3, 1]).day(u)),
				(t = f(this.weekdaysMin(s, ''))),
				(n = f(this.weekdaysShort(s, ''))),
				(s = f(this.weekdays(s, ''))),
				i.push(t),
				r.push(n),
				a.push(s),
				o.push(t),
				o.push(n),
				o.push(s))
		;(i.sort(e),
			r.sort(e),
			a.sort(e),
			o.sort(e),
			(this._weekdaysRegex = new RegExp('^(' + o.join('|') + ')', 'i')),
			(this._weekdaysShortRegex = this._weekdaysRegex),
			(this._weekdaysMinRegex = this._weekdaysRegex),
			(this._weekdaysStrictRegex = new RegExp('^(' + a.join('|') + ')', 'i')),
			(this._weekdaysShortStrictRegex = new RegExp('^(' + r.join('|') + ')', 'i')),
			(this._weekdaysMinStrictRegex = new RegExp('^(' + i.join('|') + ')', 'i')))
	}
	function it() {
		return this.hours() % 12 || 12
	}
	function rt(e, t) {
		s(e, 0, 0, function () {
			return this.localeData().meridiem(this.hours(), this.minutes(), t)
		})
	}
	function at(e, t) {
		return t._meridiemParse
	}
	;(s('H', ['HH', 2], 0, 'hour'),
		s('h', ['hh', 2], 0, it),
		s('k', ['kk', 2], 0, function () {
			return this.hours() || 24
		}),
		s('hmm', 0, 0, function () {
			return '' + it.apply(this) + r(this.minutes(), 2)
		}),
		s('hmmss', 0, 0, function () {
			return '' + it.apply(this) + r(this.minutes(), 2) + r(this.seconds(), 2)
		}),
		s('Hmm', 0, 0, function () {
			return '' + this.hours() + r(this.minutes(), 2)
		}),
		s('Hmmss', 0, 0, function () {
			return '' + this.hours() + r(this.minutes(), 2) + r(this.seconds(), 2)
		}),
		rt('a', !0),
		rt('A', !1),
		h('a', at),
		h('A', at),
		h('H', n, d),
		h('h', n, u),
		h('k', n, u),
		h('HH', n, t),
		h('hh', n, t),
		h('kk', n, t),
		h('hmm', me),
		h('hmmss', _e),
		h('Hmm', me),
		h('Hmmss', _e),
		v(['H', 'HH'], O),
		v(['k', 'kk'], function (e, t, n) {
			e = M(e)
			t[O] = 24 === e ? 0 : e
		}),
		v(['a', 'A'], function (e, t, n) {
			;((n._isPm = n._locale.isPM(e)), (n._meridiem = e))
		}),
		v(['h', 'hh'], function (e, t, n) {
			;((t[O] = M(e)), (p(n).bigHour = !0))
		}),
		v('hmm', function (e, t, n) {
			var s = e.length - 2
			;((t[O] = M(e.substr(0, s))), (t[b] = M(e.substr(s))), (p(n).bigHour = !0))
		}),
		v('hmmss', function (e, t, n) {
			var s = e.length - 4,
				i = e.length - 2
			;((t[O] = M(e.substr(0, s))), (t[b] = M(e.substr(s, 2))), (t[T] = M(e.substr(i))), (p(n).bigHour = !0))
		}),
		v('Hmm', function (e, t, n) {
			var s = e.length - 2
			;((t[O] = M(e.substr(0, s))), (t[b] = M(e.substr(s))))
		}),
		v('Hmmss', function (e, t, n) {
			var s = e.length - 4,
				i = e.length - 2
			;((t[O] = M(e.substr(0, s))), (t[b] = M(e.substr(s, 2))), (t[T] = M(e.substr(i))))
		}))
	i = Re('Hours', !0)
	var ot,
		ut = {
			calendar: {
				sameDay: '[Today at] LT',
				nextDay: '[Tomorrow at] LT',
				nextWeek: 'dddd [at] LT',
				lastDay: '[Yesterday at] LT',
				lastWeek: '[Last] dddd [at] LT',
				sameElse: 'L',
			},
			longDateFormat: {
				LTS: 'h:mm:ss A',
				LT: 'h:mm A',
				L: 'MM/DD/YYYY',
				LL: 'MMMM D, YYYY',
				LLL: 'MMMM D, YYYY h:mm A',
				LLLL: 'dddd, MMMM D, YYYY h:mm A',
			},
			invalidDate: 'Invalid date',
			ordinal: '%d',
			dayOfMonthOrdinalParse: /\d{1,2}/,
			relativeTime: {
				future: 'in %s',
				past: '%s ago',
				s: 'a few seconds',
				ss: '%d seconds',
				m: 'a minute',
				mm: '%d minutes',
				h: 'an hour',
				hh: '%d hours',
				d: 'a day',
				dd: '%d days',
				w: 'a week',
				ww: '%d weeks',
				M: 'a month',
				MM: '%d months',
				y: 'a year',
				yy: '%d years',
			},
			months: Fe,
			monthsShort: Le,
			week: { dow: 0, doy: 6 },
			weekdays: Qe,
			weekdaysMin: Ke,
			weekdaysShort: Xe,
			meridiemParse: /[ap]\.?m?\.?/i,
		},
		W = {},
		lt = {}
	function dt(e) {
		return e && e.toLowerCase().replace('_', '-')
	}
	function ht(e) {
		for (var t, n, s, i, r = 0; r < e.length; ) {
			for (t = (i = dt(e[r]).split('-')).length, n = (n = dt(e[r + 1])) ? n.split('-') : null; 0 < t; ) {
				if ((s = ct(i.slice(0, t).join('-')))) return s
				if (
					n &&
					n.length >= t &&
					(function (e, t) {
						for (var n = Math.min(e.length, t.length), s = 0; s < n; s += 1) if (e[s] !== t[s]) return s
						return n
					})(i, n) >=
						t - 1
				)
					break
				t--
			}
			r++
		}
		return ot
	}
	function ct(t) {
		var e, n
		if (
			void 0 === W[t] &&
			'undefined' != typeof module &&
			module &&
			module.exports &&
			(n = t) &&
			n.match('^[^/\\\\]*$')
		)
			try {
				;((e = ot._abbr), require('./locale/' + t), ft(e))
			} catch (e) {
				W[t] = null
			}
		return W[t]
	}
	function ft(e, t) {
		return (
			e &&
				((t = g(t) ? P(e) : mt(e, t))
					? (ot = t)
					: 'undefined' != typeof console &&
						console.warn &&
						console.warn('Locale ' + e + ' not found. Did you forget to load it?')),
			ot._abbr
		)
	}
	function mt(e, t) {
		if (null === t) return (delete W[e], null)
		var n,
			s = ut
		if (((t.abbr = e), null != W[e]))
			(Q(
				'defineLocaleOverride',
				'use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.',
			),
				(s = W[e]._config))
		else if (null != t.parentLocale)
			if (null != W[t.parentLocale]) s = W[t.parentLocale]._config
			else {
				if (null == (n = ct(t.parentLocale)))
					return (
						lt[t.parentLocale] || (lt[t.parentLocale] = []),
						lt[t.parentLocale].push({ name: e, config: t }),
						null
					)
				s = n._config
			}
		return (
			(W[e] = new K(X(s, t))),
			lt[e] &&
				lt[e].forEach(function (e) {
					mt(e.name, e.config)
				}),
			ft(e),
			W[e]
		)
	}
	function P(e) {
		var t
		if (!(e = e && e._locale && e._locale._abbr ? e._locale._abbr : e)) return ot
		if (!y(e)) {
			if ((t = ct(e))) return t
			e = [e]
		}
		return ht(e)
	}
	function _t(e) {
		var t = e._a
		return (
			t &&
				-2 === p(e).overflow &&
				((t =
					t[Y] < 0 || 11 < t[Y]
						? Y
						: t[S] < 1 || t[S] > He(t[D], t[Y])
							? S
							: t[O] < 0 || 24 < t[O] || (24 === t[O] && (0 !== t[b] || 0 !== t[T] || 0 !== t[Te]))
								? O
								: t[b] < 0 || 59 < t[b]
									? b
									: t[T] < 0 || 59 < t[T]
										? T
										: t[Te] < 0 || 999 < t[Te]
											? Te
											: -1),
				p(e)._overflowDayOfYear && (t < D || S < t) && (t = S),
				p(e)._overflowWeeks && -1 === t && (t = xe),
				p(e)._overflowWeekday && -1 === t && (t = Ne),
				(p(e).overflow = t)),
			e
		)
	}
	var yt =
			/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
		gt =
			/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
		wt = /Z|[+-]\d\d(?::?\d\d)?/,
		pt = [
			['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
			['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
			['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
			['GGGG-[W]WW', /\d{4}-W\d\d/, !1],
			['YYYY-DDD', /\d{4}-\d{3}/],
			['YYYY-MM', /\d{4}-\d\d/, !1],
			['YYYYYYMMDD', /[+-]\d{10}/],
			['YYYYMMDD', /\d{8}/],
			['GGGG[W]WWE', /\d{4}W\d{3}/],
			['GGGG[W]WW', /\d{4}W\d{2}/, !1],
			['YYYYDDD', /\d{7}/],
			['YYYYMM', /\d{6}/, !1],
			['YYYY', /\d{4}/, !1],
		],
		kt = [
			['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
			['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
			['HH:mm:ss', /\d\d:\d\d:\d\d/],
			['HH:mm', /\d\d:\d\d/],
			['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
			['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
			['HHmmss', /\d\d\d\d\d\d/],
			['HHmm', /\d\d\d\d/],
			['HH', /\d\d/],
		],
		Mt = /^\/?Date\((-?\d+)/i,
		vt =
			/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
		Dt = { UT: 0, GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480 }
	function Yt(e) {
		var t,
			n,
			s,
			i,
			r,
			a,
			o = e._i,
			u = yt.exec(o) || gt.exec(o),
			o = pt.length,
			l = kt.length
		if (u) {
			for (p(e).iso = !0, t = 0, n = o; t < n; t++)
				if (pt[t][1].exec(u[1])) {
					;((i = pt[t][0]), (s = !1 !== pt[t][2]))
					break
				}
			if (null == i) e._isValid = !1
			else {
				if (u[3]) {
					for (t = 0, n = l; t < n; t++)
						if (kt[t][1].exec(u[3])) {
							r = (u[2] || ' ') + kt[t][0]
							break
						}
					if (null == r) return void (e._isValid = !1)
				}
				if (s || null == r) {
					if (u[4]) {
						if (!wt.exec(u[4])) return void (e._isValid = !1)
						a = 'Z'
					}
					;((e._f = i + (r || '') + (a || '')), xt(e))
				} else e._isValid = !1
			}
		} else e._isValid = !1
	}
	function St(e, t, n, s, i, r) {
		e = [
			(function (e) {
				e = parseInt(e, 10)
				{
					if (e <= 49) return 2e3 + e
					if (e <= 999) return 1900 + e
				}
				return e
			})(e),
			Le.indexOf(t),
			parseInt(n, 10),
			parseInt(s, 10),
			parseInt(i, 10),
		]
		return (r && e.push(parseInt(r, 10)), e)
	}
	function Ot(e) {
		var t,
			n,
			s = vt.exec(
				e._i
					.replace(/\([^()]*\)|[\n\t]/g, ' ')
					.replace(/(\s\s+)/g, ' ')
					.replace(/^\s\s*/, '')
					.replace(/\s\s*$/, ''),
			)
		s
			? ((t = St(s[4], s[3], s[2], s[5], s[6], s[7])),
				(function (e, t, n) {
					if (!e || Xe.indexOf(e) === new Date(t[0], t[1], t[2]).getDay()) return 1
					;((p(n).weekdayMismatch = !0), (n._isValid = !1))
				})(s[1], t, e) &&
					((e._a = t),
					(e._tzm =
						((t = s[8]),
						(n = s[9]),
						(s = s[10]),
						t ? Dt[t] : n ? 0 : 60 * (((t = parseInt(s, 10)) - (n = t % 100)) / 100) + n)),
					(e._d = ze.apply(null, e._a)),
					e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
					(p(e).rfc2822 = !0)))
			: (e._isValid = !1)
	}
	function bt(e, t, n) {
		return null != e ? e : null != t ? t : n
	}
	function Tt(e) {
		var t,
			n,
			s,
			i,
			r,
			a,
			o,
			u,
			l,
			d,
			h,
			c = []
		if (!e._d) {
			for (
				s = e,
					i = new Date(_.now()),
					n = s._useUTC
						? [i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()]
						: [i.getFullYear(), i.getMonth(), i.getDate()],
					e._w &&
						null == e._a[S] &&
						null == e._a[Y] &&
						(null != (i = (s = e)._w).GG || null != i.W || null != i.E
							? ((u = 1),
								(l = 4),
								(r = bt(i.GG, s._a[D], Be(R(), 1, 4).year)),
								(a = bt(i.W, 1)),
								((o = bt(i.E, 1)) < 1 || 7 < o) && (d = !0))
							: ((u = s._locale._week.dow),
								(l = s._locale._week.doy),
								(h = Be(R(), u, l)),
								(r = bt(i.gg, s._a[D], h.year)),
								(a = bt(i.w, h.week)),
								null != i.d
									? ((o = i.d) < 0 || 6 < o) && (d = !0)
									: null != i.e
										? ((o = i.e + u), (i.e < 0 || 6 < i.e) && (d = !0))
										: (o = u)),
						a < 1 || a > N(r, u, l)
							? (p(s)._overflowWeeks = !0)
							: null != d
								? (p(s)._overflowWeekday = !0)
								: ((h = $e(r, a, o, u, l)), (s._a[D] = h.year), (s._dayOfYear = h.dayOfYear))),
					null != e._dayOfYear &&
						((i = bt(e._a[D], n[D])),
						(e._dayOfYear > We(i) || 0 === e._dayOfYear) && (p(e)._overflowDayOfYear = !0),
						(d = ze(i, 0, e._dayOfYear)),
						(e._a[Y] = d.getUTCMonth()),
						(e._a[S] = d.getUTCDate())),
					t = 0;
				t < 3 && null == e._a[t];
				++t
			)
				e._a[t] = c[t] = n[t]
			for (; t < 7; t++) e._a[t] = c[t] = null == e._a[t] ? (2 === t ? 1 : 0) : e._a[t]
			;(24 === e._a[O] && 0 === e._a[b] && 0 === e._a[T] && 0 === e._a[Te] && ((e._nextDay = !0), (e._a[O] = 0)),
				(e._d = (e._useUTC ? ze : Ze).apply(null, c)),
				(r = e._useUTC ? e._d.getUTCDay() : e._d.getDay()),
				null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
				e._nextDay && (e._a[O] = 24),
				e._w && void 0 !== e._w.d && e._w.d !== r && (p(e).weekdayMismatch = !0))
		}
	}
	function xt(e) {
		if (e._f === _.ISO_8601) Yt(e)
		else if (e._f === _.RFC_2822) Ot(e)
		else {
			;((e._a = []), (p(e).empty = !0))
			for (
				var t,
					n,
					s,
					i,
					r,
					a = '' + e._i,
					o = a.length,
					u = 0,
					l = ae(e._f, e._locale).match(te) || [],
					d = l.length,
					h = 0;
				h < d;
				h++
			)
				((n = l[h]),
					(t = (a.match(De(n, e)) || [])[0]) &&
						(0 < (s = a.substr(0, a.indexOf(t))).length && p(e).unusedInput.push(s),
						(a = a.slice(a.indexOf(t) + t.length)),
						(u += t.length)),
					ie[n]
						? (t ? (p(e).empty = !1) : p(e).unusedTokens.push(n),
							(s = n),
							(r = e),
							null != (i = t) && c(Se, s) && Se[s](i, r._a, r, s))
						: e._strict && !t && p(e).unusedTokens.push(n))
			;((p(e).charsLeftOver = o - u),
				0 < a.length && p(e).unusedInput.push(a),
				e._a[O] <= 12 && !0 === p(e).bigHour && 0 < e._a[O] && (p(e).bigHour = void 0),
				(p(e).parsedDateParts = e._a.slice(0)),
				(p(e).meridiem = e._meridiem),
				(e._a[O] = (function (e, t, n) {
					if (null == n) return t
					return null != e.meridiemHour
						? e.meridiemHour(t, n)
						: null != e.isPM
							? ((e = e.isPM(n)) && t < 12 && (t += 12), (t = e || 12 !== t ? t : 0))
							: t
				})(e._locale, e._a[O], e._meridiem)),
				null !== (o = p(e).era) && (e._a[D] = e._locale.erasConvertYear(o, e._a[D])),
				Tt(e),
				_t(e))
		}
	}
	function Nt(e) {
		var t,
			n,
			s,
			i = e._i,
			r = e._f
		if (((e._locale = e._locale || P(e._l)), null === i || (void 0 === r && '' === i))) return I({ nullInput: !0 })
		if (('string' == typeof i && (e._i = i = e._locale.preparse(i)), k(i))) return new $(_t(i))
		if (V(i)) e._d = i
		else if (y(r)) {
			var a,
				o,
				u,
				l,
				d,
				h,
				c = e,
				f = !1,
				m = c._f.length
			if (0 === m) ((p(c).invalidFormat = !0), (c._d = new Date(NaN)))
			else {
				for (l = 0; l < m; l++)
					((d = 0),
						(h = !1),
						(a = q({}, c)),
						null != c._useUTC && (a._useUTC = c._useUTC),
						(a._f = c._f[l]),
						xt(a),
						A(a) && (h = !0),
						(d = (d += p(a).charsLeftOver) + 10 * p(a).unusedTokens.length),
						(p(a).score = d),
						f
							? d < u && ((u = d), (o = a))
							: (null == u || d < u || h) && ((u = d), (o = a), h) && (f = !0))
				E(c, o || a)
			}
		} else if (r) xt(e)
		else if (g((r = (i = e)._i))) i._d = new Date(_.now())
		else
			V(r)
				? (i._d = new Date(r.valueOf()))
				: 'string' == typeof r
					? ((n = i),
						null !== (t = Mt.exec(n._i))
							? (n._d = new Date(+t[1]))
							: (Yt(n),
								!1 === n._isValid &&
									(delete n._isValid, Ot(n), !1 === n._isValid) &&
									(delete n._isValid, n._strict ? (n._isValid = !1) : _.createFromInputFallback(n))))
					: y(r)
						? ((i._a = G(r.slice(0), function (e) {
								return parseInt(e, 10)
							})),
							Tt(i))
						: F(r)
							? (t = i)._d ||
								((s = void 0 === (n = ue(t._i)).day ? n.date : n.day),
								(t._a = G(
									[n.year, n.month, s, n.hour, n.minute, n.second, n.millisecond],
									function (e) {
										return e && parseInt(e, 10)
									},
								)),
								Tt(t))
							: w(r)
								? (i._d = new Date(r))
								: _.createFromInputFallback(i)
		return (A(e) || (e._d = null), e)
	}
	function Wt(e, t, n, s, i) {
		var r = {}
		return (
			(!0 !== t && !1 !== t) || ((s = t), (t = void 0)),
			(!0 !== n && !1 !== n) || ((s = n), (n = void 0)),
			((F(e) && L(e)) || (y(e) && 0 === e.length)) && (e = void 0),
			(r._isAMomentObject = !0),
			(r._useUTC = r._isUTC = i),
			(r._l = n),
			(r._i = e),
			(r._f = t),
			(r._strict = s),
			(i = new $(_t(Nt((i = r)))))._nextDay && (i.add(1, 'd'), (i._nextDay = void 0)),
			i
		)
	}
	function R(e, t, n, s) {
		return Wt(e, t, n, s, !1)
	}
	;((_.createFromInputFallback = e(
		'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
		function (e) {
			e._d = new Date(e._i + (e._useUTC ? ' UTC' : ''))
		},
	)),
		(_.ISO_8601 = function () {}),
		(_.RFC_2822 = function () {}))
	;((me = e(
		'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
		function () {
			var e = R.apply(null, arguments)
			return this.isValid() && e.isValid() ? (e < this ? this : e) : I()
		},
	)),
		(_e = e(
			'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
			function () {
				var e = R.apply(null, arguments)
				return this.isValid() && e.isValid() ? (this < e ? this : e) : I()
			},
		)))
	function Pt(e, t) {
		var n, s
		if (!(t = 1 === t.length && y(t[0]) ? t[0] : t).length) return R()
		for (n = t[0], s = 1; s < t.length; ++s) (t[s].isValid() && !t[s][e](n)) || (n = t[s])
		return n
	}
	var Rt = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond']
	function Ct(e) {
		var e = ue(e),
			t = e.year || 0,
			n = e.quarter || 0,
			s = e.month || 0,
			i = e.week || e.isoWeek || 0,
			r = e.day || 0,
			a = e.hour || 0,
			o = e.minute || 0,
			u = e.second || 0,
			l = e.millisecond || 0
		;((this._isValid = (function (e) {
			var t,
				n,
				s = !1,
				i = Rt.length
			for (t in e) if (c(e, t) && (-1 === x.call(Rt, t) || (null != e[t] && isNaN(e[t])))) return !1
			for (n = 0; n < i; ++n)
				if (e[Rt[n]]) {
					if (s) return !1
					parseFloat(e[Rt[n]]) !== M(e[Rt[n]]) && (s = !0)
				}
			return !0
		})(e)),
			(this._milliseconds = +l + 1e3 * u + 6e4 * o + 1e3 * a * 60 * 60),
			(this._days = +r + 7 * i),
			(this._months = +s + 3 * n + 12 * t),
			(this._data = {}),
			(this._locale = P()),
			this._bubble())
	}
	function Ut(e) {
		return e instanceof Ct
	}
	function Ht(e) {
		return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
	}
	function Ft(e, n) {
		s(e, 0, 0, function () {
			var e = this.utcOffset(),
				t = '+'
			return (e < 0 && ((e = -e), (t = '-')), t + r(~~(e / 60), 2) + n + r(~~e % 60, 2))
		})
	}
	;(Ft('Z', ':'),
		Ft('ZZ', ''),
		h('Z', ve),
		h('ZZ', ve),
		v(['Z', 'ZZ'], function (e, t, n) {
			;((n._useUTC = !0), (n._tzm = Vt(ve, e)))
		}))
	var Lt = /([\+\-]|\d\d)/gi
	function Vt(e, t) {
		var t = (t || '').match(e)
		return null === t
			? null
			: 0 === (t = 60 * (e = ((t[t.length - 1] || []) + '').match(Lt) || ['-', 0, 0])[1] + M(e[2]))
				? 0
				: '+' === e[0]
					? t
					: -t
	}
	function Gt(e, t) {
		var n
		return t._isUTC
			? ((t = t.clone()),
				(n = (k(e) || V(e) ? e : R(e)).valueOf() - t.valueOf()),
				t._d.setTime(t._d.valueOf() + n),
				_.updateOffset(t, !1),
				t)
			: R(e).local()
	}
	function Et(e) {
		return -Math.round(e._d.getTimezoneOffset())
	}
	function At() {
		return !!this.isValid() && this._isUTC && 0 === this._offset
	}
	_.updateOffset = function () {}
	var It = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
		jt =
			/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/
	function C(e, t) {
		var n,
			s = e
		return (
			Ut(e)
				? (s = { ms: e._milliseconds, d: e._days, M: e._months })
				: w(e) || !isNaN(+e)
					? ((s = {}), t ? (s[t] = +e) : (s.milliseconds = +e))
					: (t = It.exec(e))
						? ((n = '-' === t[1] ? -1 : 1),
							(s = {
								y: 0,
								d: M(t[S]) * n,
								h: M(t[O]) * n,
								m: M(t[b]) * n,
								s: M(t[T]) * n,
								ms: M(Ht(1e3 * t[Te])) * n,
							}))
						: (t = jt.exec(e))
							? ((n = '-' === t[1] ? -1 : 1),
								(s = {
									y: Zt(t[2], n),
									M: Zt(t[3], n),
									w: Zt(t[4], n),
									d: Zt(t[5], n),
									h: Zt(t[6], n),
									m: Zt(t[7], n),
									s: Zt(t[8], n),
								}))
							: null == s
								? (s = {})
								: 'object' == typeof s &&
									('from' in s || 'to' in s) &&
									((t = (function (e, t) {
										var n
										if (!e.isValid() || !t.isValid()) return { milliseconds: 0, months: 0 }
										;((t = Gt(t, e)),
											e.isBefore(t)
												? (n = zt(e, t))
												: (((n = zt(t, e)).milliseconds = -n.milliseconds),
													(n.months = -n.months)))
										return n
									})(R(s.from), R(s.to))),
									((s = {}).ms = t.milliseconds),
									(s.M = t.months)),
			(n = new Ct(s)),
			Ut(e) && c(e, '_locale') && (n._locale = e._locale),
			Ut(e) && c(e, '_isValid') && (n._isValid = e._isValid),
			n
		)
	}
	function Zt(e, t) {
		e = e && parseFloat(e.replace(',', '.'))
		return (isNaN(e) ? 0 : e) * t
	}
	function zt(e, t) {
		var n = {}
		return (
			(n.months = t.month() - e.month() + 12 * (t.year() - e.year())),
			e.clone().add(n.months, 'M').isAfter(t) && --n.months,
			(n.milliseconds = +t - +e.clone().add(n.months, 'M')),
			n
		)
	}
	function qt(s, i) {
		return function (e, t) {
			var n
			return (
				null === t ||
					isNaN(+t) ||
					(Q(
						i,
						'moment().' +
							i +
							'(period, number) is deprecated. Please use moment().' +
							i +
							'(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.',
					),
					(n = e),
					(e = t),
					(t = n)),
				$t(this, C(e, t), s),
				this
			)
		}
	}
	function $t(e, t, n, s) {
		var i = t._milliseconds,
			r = Ht(t._days),
			t = Ht(t._months)
		e.isValid() &&
			((s = null == s || s),
			t && Ae(e, Ce(e, 'Month') + t * n),
			r && Ue(e, 'Date', Ce(e, 'Date') + r * n),
			i && e._d.setTime(e._d.valueOf() + i * n),
			s) &&
			_.updateOffset(e, r || t)
	}
	;((C.fn = Ct.prototype),
		(C.invalid = function () {
			return C(NaN)
		}))
	;((Fe = qt(1, 'add')), (Qe = qt(-1, 'subtract')))
	function Bt(e) {
		return 'string' == typeof e || e instanceof String
	}
	function Jt(e) {
		return (
			k(e) ||
			V(e) ||
			Bt(e) ||
			w(e) ||
			(function (t) {
				var e = y(t),
					n = !1
				e &&
					(n =
						0 ===
						t.filter(function (e) {
							return !w(e) && Bt(t)
						}).length)
				return e && n
			})(e) ||
			(function (e) {
				var t,
					n,
					s = F(e) && !L(e),
					i = !1,
					r = [
						'years',
						'year',
						'y',
						'months',
						'month',
						'M',
						'days',
						'day',
						'd',
						'dates',
						'date',
						'D',
						'hours',
						'hour',
						'h',
						'minutes',
						'minute',
						'm',
						'seconds',
						'second',
						's',
						'milliseconds',
						'millisecond',
						'ms',
					],
					a = r.length
				for (t = 0; t < a; t += 1) ((n = r[t]), (i = i || c(e, n)))
				return s && i
			})(e) ||
			null == e
		)
	}
	function Qt(e, t) {
		var n, s
		return e.date() < t.date()
			? -Qt(t, e)
			: -(
					(n = 12 * (t.year() - e.year()) + (t.month() - e.month())) +
					(t - (s = e.clone().add(n, 'months')) < 0
						? (t - s) / (s - e.clone().add(n - 1, 'months'))
						: (t - s) / (e.clone().add(1 + n, 'months') - s))
				) || 0
	}
	function Xt(e) {
		return void 0 === e ? this._locale._abbr : (null != (e = P(e)) && (this._locale = e), this)
	}
	;((_.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ'), (_.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]'))
	Ke = e(
		'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
		function (e) {
			return void 0 === e ? this.localeData() : this.locale(e)
		},
	)
	function Kt() {
		return this._locale
	}
	var en = 126227808e5
	function tn(e, t) {
		return ((e % t) + t) % t
	}
	function nn(e, t, n) {
		return e < 100 && 0 <= e ? new Date(e + 400, t, n) - en : new Date(e, t, n).valueOf()
	}
	function sn(e, t, n) {
		return e < 100 && 0 <= e ? Date.UTC(e + 400, t, n) - en : Date.UTC(e, t, n)
	}
	function rn(e, t) {
		return t.erasAbbrRegex(e)
	}
	function an() {
		for (var e, t, n, s = [], i = [], r = [], a = [], o = this.eras(), u = 0, l = o.length; u < l; ++u)
			((e = f(o[u].name)),
				(t = f(o[u].abbr)),
				(n = f(o[u].narrow)),
				i.push(e),
				s.push(t),
				r.push(n),
				a.push(e),
				a.push(t),
				a.push(n))
		;((this._erasRegex = new RegExp('^(' + a.join('|') + ')', 'i')),
			(this._erasNameRegex = new RegExp('^(' + i.join('|') + ')', 'i')),
			(this._erasAbbrRegex = new RegExp('^(' + s.join('|') + ')', 'i')),
			(this._erasNarrowRegex = new RegExp('^(' + r.join('|') + ')', 'i')))
	}
	function on(e, t) {
		s(0, [e, e.length], 0, t)
	}
	function un(e, t, n, s, i) {
		var r
		return null == e
			? Be(this, s, i).year
			: ((r = N(e, s, i)),
				function (e, t, n, s, i) {
					;((e = $e(e, t, n, s, i)), (t = ze(e.year, 0, e.dayOfYear)))
					return (this.year(t.getUTCFullYear()), this.month(t.getUTCMonth()), this.date(t.getUTCDate()), this)
				}.call(this, e, (t = r < t ? r : t), n, s, i))
	}
	;(s('N', 0, 0, 'eraAbbr'),
		s('NN', 0, 0, 'eraAbbr'),
		s('NNN', 0, 0, 'eraAbbr'),
		s('NNNN', 0, 0, 'eraName'),
		s('NNNNN', 0, 0, 'eraNarrow'),
		s('y', ['y', 1], 'yo', 'eraYear'),
		s('y', ['yy', 2], 0, 'eraYear'),
		s('y', ['yyy', 3], 0, 'eraYear'),
		s('y', ['yyyy', 4], 0, 'eraYear'),
		h('N', rn),
		h('NN', rn),
		h('NNN', rn),
		h('NNNN', function (e, t) {
			return t.erasNameRegex(e)
		}),
		h('NNNNN', function (e, t) {
			return t.erasNarrowRegex(e)
		}),
		v(['N', 'NN', 'NNN', 'NNNN', 'NNNNN'], function (e, t, n, s) {
			s = n._locale.erasParse(e, s, n._strict)
			s ? (p(n).era = s) : (p(n).invalidEra = e)
		}),
		h('y', pe),
		h('yy', pe),
		h('yyy', pe),
		h('yyyy', pe),
		h('yo', function (e, t) {
			return t._eraYearOrdinalRegex || pe
		}),
		v(['y', 'yy', 'yyy', 'yyyy'], D),
		v(['yo'], function (e, t, n, s) {
			var i
			;(n._locale._eraYearOrdinalRegex && (i = e.match(n._locale._eraYearOrdinalRegex)),
				n._locale.eraYearOrdinalParse ? (t[D] = n._locale.eraYearOrdinalParse(e, i)) : (t[D] = parseInt(e, 10)))
		}),
		s(0, ['gg', 2], 0, function () {
			return this.weekYear() % 100
		}),
		s(0, ['GG', 2], 0, function () {
			return this.isoWeekYear() % 100
		}),
		on('gggg', 'weekYear'),
		on('ggggg', 'weekYear'),
		on('GGGG', 'isoWeekYear'),
		on('GGGGG', 'isoWeekYear'),
		h('G', ke),
		h('g', ke),
		h('GG', n, t),
		h('gg', n, t),
		h('GGGG', ge, ce),
		h('gggg', ge, ce),
		h('GGGGG', we, fe),
		h('ggggg', we, fe),
		Oe(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (e, t, n, s) {
			t[s.substr(0, 2)] = M(e)
		}),
		Oe(['gg', 'GG'], function (e, t, n, s) {
			t[s] = _.parseTwoDigitYear(e)
		}),
		s('Q', 0, 'Qo', 'quarter'),
		h('Q', de),
		v('Q', function (e, t) {
			t[Y] = 3 * (M(e) - 1)
		}),
		s('D', ['DD', 2], 'Do', 'date'),
		h('D', n, u),
		h('DD', n, t),
		h('Do', function (e, t) {
			return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
		}),
		v(['D', 'DD'], S),
		v('Do', function (e, t) {
			t[S] = M(e.match(n)[0])
		}))
	ge = Re('Date', !0)
	;(s('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear'),
		h('DDD', ye),
		h('DDDD', he),
		v(['DDD', 'DDDD'], function (e, t, n) {
			n._dayOfYear = M(e)
		}),
		s('m', ['mm', 2], 0, 'minute'),
		h('m', n, d),
		h('mm', n, t),
		v(['m', 'mm'], b))
	var ln,
		ce = Re('Minutes', !1),
		we = (s('s', ['ss', 2], 0, 'second'), h('s', n, d), h('ss', n, t), v(['s', 'ss'], T), Re('Seconds', !1))
	for (
		s('S', 0, 0, function () {
			return ~~(this.millisecond() / 100)
		}),
			s(0, ['SS', 2], 0, function () {
				return ~~(this.millisecond() / 10)
			}),
			s(0, ['SSS', 3], 0, 'millisecond'),
			s(0, ['SSSS', 4], 0, function () {
				return 10 * this.millisecond()
			}),
			s(0, ['SSSSS', 5], 0, function () {
				return 100 * this.millisecond()
			}),
			s(0, ['SSSSSS', 6], 0, function () {
				return 1e3 * this.millisecond()
			}),
			s(0, ['SSSSSSS', 7], 0, function () {
				return 1e4 * this.millisecond()
			}),
			s(0, ['SSSSSSSS', 8], 0, function () {
				return 1e5 * this.millisecond()
			}),
			s(0, ['SSSSSSSSS', 9], 0, function () {
				return 1e6 * this.millisecond()
			}),
			h('S', ye, de),
			h('SS', ye, t),
			h('SSS', ye, he),
			ln = 'SSSS';
		ln.length <= 9;
		ln += 'S'
	)
		h(ln, pe)
	function dn(e, t) {
		t[Te] = M(1e3 * ('0.' + e))
	}
	for (ln = 'S'; ln.length <= 9; ln += 'S') v(ln, dn)
	;((fe = Re('Milliseconds', !1)), s('z', 0, 0, 'zoneAbbr'), s('zz', 0, 0, 'zoneName'))
	u = $.prototype
	function hn(e) {
		return e
	}
	;((u.add = Fe),
		(u.calendar = function (e, t) {
			1 === arguments.length &&
				(arguments[0]
					? Jt(arguments[0])
						? ((e = arguments[0]), (t = void 0))
						: (function (e) {
								for (
									var t = F(e) && !L(e),
										n = !1,
										s = ['sameDay', 'nextDay', 'lastDay', 'nextWeek', 'lastWeek', 'sameElse'],
										i = 0;
									i < s.length;
									i += 1
								)
									n = n || c(e, s[i])
								return t && n
							})(arguments[0]) && ((t = arguments[0]), (e = void 0))
					: (t = e = void 0))
			var e = e || R(),
				n = Gt(e, this).startOf('day'),
				n = _.calendarFormat(this, n) || 'sameElse',
				t = t && (a(t[n]) ? t[n].call(this, e) : t[n])
			return this.format(t || this.localeData().calendar(n, this, R(e)))
		}),
		(u.clone = function () {
			return new $(this)
		}),
		(u.diff = function (e, t, n) {
			var s, i, r
			if (!this.isValid()) return NaN
			if (!(s = Gt(e, this)).isValid()) return NaN
			switch (((i = 6e4 * (s.utcOffset() - this.utcOffset())), (t = o(t)))) {
				case 'year':
					r = Qt(this, s) / 12
					break
				case 'month':
					r = Qt(this, s)
					break
				case 'quarter':
					r = Qt(this, s) / 3
					break
				case 'second':
					r = (this - s) / 1e3
					break
				case 'minute':
					r = (this - s) / 6e4
					break
				case 'hour':
					r = (this - s) / 36e5
					break
				case 'day':
					r = (this - s - i) / 864e5
					break
				case 'week':
					r = (this - s - i) / 6048e5
					break
				default:
					r = this - s
			}
			return n ? r : m(r)
		}),
		(u.endOf = function (e) {
			var t, n
			if (void 0 !== (e = o(e)) && 'millisecond' !== e && this.isValid()) {
				switch (((n = this._isUTC ? sn : nn), e)) {
					case 'year':
						t = n(this.year() + 1, 0, 1) - 1
						break
					case 'quarter':
						t = n(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1
						break
					case 'month':
						t = n(this.year(), this.month() + 1, 1) - 1
						break
					case 'week':
						t = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1
						break
					case 'isoWeek':
						t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1
						break
					case 'day':
					case 'date':
						t = n(this.year(), this.month(), this.date() + 1) - 1
						break
					case 'hour':
						;((t = this._d.valueOf()),
							(t += 36e5 - tn(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) - 1))
						break
					case 'minute':
						;((t = this._d.valueOf()), (t += 6e4 - tn(t, 6e4) - 1))
						break
					case 'second':
						;((t = this._d.valueOf()), (t += 1e3 - tn(t, 1e3) - 1))
						break
				}
				;(this._d.setTime(t), _.updateOffset(this, !0))
			}
			return this
		}),
		(u.format = function (e) {
			return (
				(e = e || (this.isUtc() ? _.defaultFormatUtc : _.defaultFormat)),
				(e = re(this, e)),
				this.localeData().postformat(e)
			)
		}),
		(u.from = function (e, t) {
			return this.isValid() && ((k(e) && e.isValid()) || R(e).isValid())
				? C({ to: this, from: e }).locale(this.locale()).humanize(!t)
				: this.localeData().invalidDate()
		}),
		(u.fromNow = function (e) {
			return this.from(R(), e)
		}),
		(u.to = function (e, t) {
			return this.isValid() && ((k(e) && e.isValid()) || R(e).isValid())
				? C({ from: this, to: e }).locale(this.locale()).humanize(!t)
				: this.localeData().invalidDate()
		}),
		(u.toNow = function (e) {
			return this.to(R(), e)
		}),
		(u.get = function (e) {
			return a(this[(e = o(e))]) ? this[e]() : this
		}),
		(u.invalidAt = function () {
			return p(this).overflow
		}),
		(u.isAfter = function (e, t) {
			return (
				(e = k(e) ? e : R(e)),
				!(!this.isValid() || !e.isValid()) &&
					('millisecond' === (t = o(t) || 'millisecond')
						? this.valueOf() > e.valueOf()
						: e.valueOf() < this.clone().startOf(t).valueOf())
			)
		}),
		(u.isBefore = function (e, t) {
			return (
				(e = k(e) ? e : R(e)),
				!(!this.isValid() || !e.isValid()) &&
					('millisecond' === (t = o(t) || 'millisecond')
						? this.valueOf() < e.valueOf()
						: this.clone().endOf(t).valueOf() < e.valueOf())
			)
		}),
		(u.isBetween = function (e, t, n, s) {
			return (
				(e = k(e) ? e : R(e)),
				(t = k(t) ? t : R(t)),
				!!(this.isValid() && e.isValid() && t.isValid()) &&
					('(' === (s = s || '()')[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) &&
					(')' === s[1] ? this.isBefore(t, n) : !this.isAfter(t, n))
			)
		}),
		(u.isSame = function (e, t) {
			var e = k(e) ? e : R(e)
			return (
				!(!this.isValid() || !e.isValid()) &&
				('millisecond' === (t = o(t) || 'millisecond')
					? this.valueOf() === e.valueOf()
					: ((e = e.valueOf()),
						this.clone().startOf(t).valueOf() <= e && e <= this.clone().endOf(t).valueOf()))
			)
		}),
		(u.isSameOrAfter = function (e, t) {
			return this.isSame(e, t) || this.isAfter(e, t)
		}),
		(u.isSameOrBefore = function (e, t) {
			return this.isSame(e, t) || this.isBefore(e, t)
		}),
		(u.isValid = function () {
			return A(this)
		}),
		(u.lang = Ke),
		(u.locale = Xt),
		(u.localeData = Kt),
		(u.max = _e),
		(u.min = me),
		(u.parsingFlags = function () {
			return E({}, p(this))
		}),
		(u.set = function (e, t) {
			if ('object' == typeof e)
				for (
					var n = (function (e) {
							var t,
								n = []
							for (t in e) c(e, t) && n.push({ unit: t, priority: le[t] })
							return (
								n.sort(function (e, t) {
									return e.priority - t.priority
								}),
								n
							)
						})((e = ue(e))),
						s = n.length,
						i = 0;
					i < s;
					i++
				)
					this[n[i].unit](e[n[i].unit])
			else if (a(this[(e = o(e))])) return this[e](t)
			return this
		}),
		(u.startOf = function (e) {
			var t, n
			if (void 0 !== (e = o(e)) && 'millisecond' !== e && this.isValid()) {
				switch (((n = this._isUTC ? sn : nn), e)) {
					case 'year':
						t = n(this.year(), 0, 1)
						break
					case 'quarter':
						t = n(this.year(), this.month() - (this.month() % 3), 1)
						break
					case 'month':
						t = n(this.year(), this.month(), 1)
						break
					case 'week':
						t = n(this.year(), this.month(), this.date() - this.weekday())
						break
					case 'isoWeek':
						t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1))
						break
					case 'day':
					case 'date':
						t = n(this.year(), this.month(), this.date())
						break
					case 'hour':
						;((t = this._d.valueOf()), (t -= tn(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5)))
						break
					case 'minute':
						;((t = this._d.valueOf()), (t -= tn(t, 6e4)))
						break
					case 'second':
						;((t = this._d.valueOf()), (t -= tn(t, 1e3)))
						break
				}
				;(this._d.setTime(t), _.updateOffset(this, !0))
			}
			return this
		}),
		(u.subtract = Qe),
		(u.toArray = function () {
			var e = this
			return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
		}),
		(u.toObject = function () {
			var e = this
			return {
				years: e.year(),
				months: e.month(),
				date: e.date(),
				hours: e.hours(),
				minutes: e.minutes(),
				seconds: e.seconds(),
				milliseconds: e.milliseconds(),
			}
		}),
		(u.toDate = function () {
			return new Date(this.valueOf())
		}),
		(u.toISOString = function (e) {
			var t
			return this.isValid()
				? (t = (e = !0 !== e) ? this.clone().utc() : this).year() < 0 || 9999 < t.year()
					? re(t, e ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ')
					: a(Date.prototype.toISOString)
						? e
							? this.toDate().toISOString()
							: new Date(this.valueOf() + 60 * this.utcOffset() * 1e3)
									.toISOString()
									.replace('Z', re(t, 'Z'))
						: re(t, e ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ')
				: null
		}),
		(u.inspect = function () {
			var e, t, n
			return this.isValid()
				? ((t = 'moment'),
					(e = ''),
					this.isLocal() || ((t = 0 === this.utcOffset() ? 'moment.utc' : 'moment.parseZone'), (e = 'Z')),
					(t = '[' + t + '("]'),
					(n = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY'),
					this.format(t + n + '-MM-DD[T]HH:mm:ss.SSS' + (e + '[")]')))
				: 'moment.invalid(/* ' + this._i + ' */)'
		}),
		'undefined' != typeof Symbol &&
			null != Symbol.for &&
			(u[Symbol.for('nodejs.util.inspect.custom')] = function () {
				return 'Moment<' + this.format() + '>'
			}),
		(u.toJSON = function () {
			return this.isValid() ? this.toISOString() : null
		}),
		(u.toString = function () {
			return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ')
		}),
		(u.unix = function () {
			return Math.floor(this.valueOf() / 1e3)
		}),
		(u.valueOf = function () {
			return this._d.valueOf() - 6e4 * (this._offset || 0)
		}),
		(u.creationData = function () {
			return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict }
		}),
		(u.eraName = function () {
			for (var e, t = this.localeData().eras(), n = 0, s = t.length; n < s; ++n) {
				if (((e = this.clone().startOf('day').valueOf()), t[n].since <= e && e <= t[n].until)) return t[n].name
				if (t[n].until <= e && e <= t[n].since) return t[n].name
			}
			return ''
		}),
		(u.eraNarrow = function () {
			for (var e, t = this.localeData().eras(), n = 0, s = t.length; n < s; ++n) {
				if (((e = this.clone().startOf('day').valueOf()), t[n].since <= e && e <= t[n].until))
					return t[n].narrow
				if (t[n].until <= e && e <= t[n].since) return t[n].narrow
			}
			return ''
		}),
		(u.eraAbbr = function () {
			for (var e, t = this.localeData().eras(), n = 0, s = t.length; n < s; ++n) {
				if (((e = this.clone().startOf('day').valueOf()), t[n].since <= e && e <= t[n].until)) return t[n].abbr
				if (t[n].until <= e && e <= t[n].since) return t[n].abbr
			}
			return ''
		}),
		(u.eraYear = function () {
			for (var e, t, n = this.localeData().eras(), s = 0, i = n.length; s < i; ++s)
				if (
					((e = n[s].since <= n[s].until ? 1 : -1),
					(t = this.clone().startOf('day').valueOf()),
					(n[s].since <= t && t <= n[s].until) || (n[s].until <= t && t <= n[s].since))
				)
					return (this.year() - _(n[s].since).year()) * e + n[s].offset
			return this.year()
		}),
		(u.year = Pe),
		(u.isLeapYear = function () {
			return be(this.year())
		}),
		(u.weekYear = function (e) {
			return un.call(
				this,
				e,
				this.week(),
				this.weekday() + this.localeData()._week.dow,
				this.localeData()._week.dow,
				this.localeData()._week.doy,
			)
		}),
		(u.isoWeekYear = function (e) {
			return un.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
		}),
		(u.quarter = u.quarters =
			function (e) {
				return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + (this.month() % 3))
			}),
		(u.month = Ie),
		(u.daysInMonth = function () {
			return He(this.year(), this.month())
		}),
		(u.week = u.weeks =
			function (e) {
				var t = this.localeData().week(this)
				return null == e ? t : this.add(7 * (e - t), 'd')
			}),
		(u.isoWeek = u.isoWeeks =
			function (e) {
				var t = Be(this, 1, 4).week
				return null == e ? t : this.add(7 * (e - t), 'd')
			}),
		(u.weeksInYear = function () {
			var e = this.localeData()._week
			return N(this.year(), e.dow, e.doy)
		}),
		(u.weeksInWeekYear = function () {
			var e = this.localeData()._week
			return N(this.weekYear(), e.dow, e.doy)
		}),
		(u.isoWeeksInYear = function () {
			return N(this.year(), 1, 4)
		}),
		(u.isoWeeksInISOWeekYear = function () {
			return N(this.isoWeekYear(), 1, 4)
		}),
		(u.date = ge),
		(u.day = u.days =
			function (e) {
				var t, n, s
				return this.isValid()
					? ((t = Ce(this, 'Day')),
						null != e
							? ((n = e),
								(s = this.localeData()),
								(e =
									'string' != typeof n
										? n
										: isNaN(n)
											? 'number' == typeof (n = s.weekdaysParse(n))
												? n
												: null
											: parseInt(n, 10)),
								this.add(e - t, 'd'))
							: t)
					: null != e
						? this
						: NaN
			}),
		(u.weekday = function (e) {
			var t
			return this.isValid()
				? ((t = (this.day() + 7 - this.localeData()._week.dow) % 7), null == e ? t : this.add(e - t, 'd'))
				: null != e
					? this
					: NaN
		}),
		(u.isoWeekday = function (e) {
			var t, n
			return this.isValid()
				? null != e
					? ((t = e),
						(n = this.localeData()),
						(n = 'string' == typeof t ? n.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t),
						this.day(this.day() % 7 ? n : n - 7))
					: this.day() || 7
				: null != e
					? this
					: NaN
		}),
		(u.dayOfYear = function (e) {
			var t = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1
			return null == e ? t : this.add(e - t, 'd')
		}),
		(u.hour = u.hours = i),
		(u.minute = u.minutes = ce),
		(u.second = u.seconds = we),
		(u.millisecond = u.milliseconds = fe),
		(u.utcOffset = function (e, t, n) {
			var s,
				i = this._offset || 0
			if (!this.isValid()) return null != e ? this : NaN
			if (null == e) return this._isUTC ? i : Et(this)
			if ('string' == typeof e) {
				if (null === (e = Vt(ve, e))) return this
			} else Math.abs(e) < 16 && !n && (e *= 60)
			return (
				!this._isUTC && t && (s = Et(this)),
				(this._offset = e),
				(this._isUTC = !0),
				null != s && this.add(s, 'm'),
				i !== e &&
					(!t || this._changeInProgress
						? $t(this, C(e - i, 'm'), 1, !1)
						: this._changeInProgress ||
							((this._changeInProgress = !0), _.updateOffset(this, !0), (this._changeInProgress = null))),
				this
			)
		}),
		(u.utc = function (e) {
			return this.utcOffset(0, e)
		}),
		(u.local = function (e) {
			return (this._isUTC && (this.utcOffset(0, e), (this._isUTC = !1), e) && this.subtract(Et(this), 'm'), this)
		}),
		(u.parseZone = function () {
			var e
			return (
				null != this._tzm
					? this.utcOffset(this._tzm, !1, !0)
					: 'string' == typeof this._i &&
						(null != (e = Vt(Me, this._i)) ? this.utcOffset(e) : this.utcOffset(0, !0)),
				this
			)
		}),
		(u.hasAlignedHourOffset = function (e) {
			return !!this.isValid() && ((e = e ? R(e).utcOffset() : 0), (this.utcOffset() - e) % 60 == 0)
		}),
		(u.isDST = function () {
			return (
				this.utcOffset() > this.clone().month(0).utcOffset() ||
				this.utcOffset() > this.clone().month(5).utcOffset()
			)
		}),
		(u.isLocal = function () {
			return !!this.isValid() && !this._isUTC
		}),
		(u.isUtcOffset = function () {
			return !!this.isValid() && this._isUTC
		}),
		(u.isUtc = At),
		(u.isUTC = At),
		(u.zoneAbbr = function () {
			return this._isUTC ? 'UTC' : ''
		}),
		(u.zoneName = function () {
			return this._isUTC ? 'Coordinated Universal Time' : ''
		}),
		(u.dates = e('dates accessor is deprecated. Use date instead.', ge)),
		(u.months = e('months accessor is deprecated. Use month instead', Ie)),
		(u.years = e('years accessor is deprecated. Use year instead', Pe)),
		(u.zone = e(
			'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
			function (e, t) {
				return null != e ? (this.utcOffset((e = 'string' != typeof e ? -e : e), t), this) : -this.utcOffset()
			},
		)),
		(u.isDSTShifted = e(
			'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
			function () {
				var e, t
				return (
					g(this._isDSTShifted) &&
						(q((e = {}), this),
						(e = Nt(e))._a
							? ((t = (e._isUTC ? l : R)(e._a)),
								(this._isDSTShifted =
									this.isValid() &&
									0 <
										(function (e, t, n) {
											for (
												var s = Math.min(e.length, t.length),
													i = Math.abs(e.length - t.length),
													r = 0,
													a = 0;
												a < s;
												a++
											)
												((n && e[a] !== t[a]) || (!n && M(e[a]) !== M(t[a]))) && r++
											return r + i
										})(e._a, t.toArray())))
							: (this._isDSTShifted = !1)),
					this._isDSTShifted
				)
			},
		)))
	d = K.prototype
	function cn(e, t, n, s) {
		var i = P(),
			s = l().set(s, t)
		return i[n](s, e)
	}
	function fn(e, t, n) {
		if ((w(e) && ((t = e), (e = void 0)), (e = e || ''), null != t)) return cn(e, t, n, 'month')
		for (var s = [], i = 0; i < 12; i++) s[i] = cn(e, i, n, 'month')
		return s
	}
	function mn(e, t, n, s) {
		t =
			('boolean' == typeof e
				? w(t) && ((n = t), (t = void 0))
				: ((t = e), (e = !1), w((n = t)) && ((n = t), (t = void 0))),
			t || '')
		var i,
			r = P(),
			a = e ? r._week.dow : 0,
			o = []
		if (null != n) return cn(t, (n + a) % 7, s, 'day')
		for (i = 0; i < 7; i++) o[i] = cn(t, (i + a) % 7, s, 'day')
		return o
	}
	;((d.calendar = function (e, t, n) {
		return a((e = this._calendar[e] || this._calendar.sameElse)) ? e.call(t, n) : e
	}),
		(d.longDateFormat = function (e) {
			var t = this._longDateFormat[e],
				n = this._longDateFormat[e.toUpperCase()]
			return t || !n
				? t
				: ((this._longDateFormat[e] = n
						.match(te)
						.map(function (e) {
							return 'MMMM' === e || 'MM' === e || 'DD' === e || 'dddd' === e ? e.slice(1) : e
						})
						.join('')),
					this._longDateFormat[e])
		}),
		(d.invalidDate = function () {
			return this._invalidDate
		}),
		(d.ordinal = function (e) {
			return this._ordinal.replace('%d', e)
		}),
		(d.preparse = hn),
		(d.postformat = hn),
		(d.relativeTime = function (e, t, n, s) {
			var i = this._relativeTime[n]
			return a(i) ? i(e, t, n, s) : i.replace(/%d/i, e)
		}),
		(d.pastFuture = function (e, t) {
			return a((e = this._relativeTime[0 < e ? 'future' : 'past'])) ? e(t) : e.replace(/%s/i, t)
		}),
		(d.set = function (e) {
			var t, n
			for (n in e) c(e, n) && (a((t = e[n])) ? (this[n] = t) : (this['_' + n] = t))
			;((this._config = e),
				(this._dayOfMonthOrdinalParseLenient = new RegExp(
					(this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + '|' + /\d{1,2}/.source,
				)))
		}),
		(d.eras = function (e, t) {
			for (var n, s = this._eras || P('en')._eras, i = 0, r = s.length; i < r; ++i) {
				switch (typeof s[i].since) {
					case 'string':
						;((n = _(s[i].since).startOf('day')), (s[i].since = n.valueOf()))
						break
				}
				switch (typeof s[i].until) {
					case 'undefined':
						s[i].until = 1 / 0
						break
					case 'string':
						;((n = _(s[i].until).startOf('day').valueOf()), (s[i].until = n.valueOf()))
						break
				}
			}
			return s
		}),
		(d.erasParse = function (e, t, n) {
			var s,
				i,
				r,
				a,
				o,
				u = this.eras()
			for (e = e.toUpperCase(), s = 0, i = u.length; s < i; ++s)
				if (((r = u[s].name.toUpperCase()), (a = u[s].abbr.toUpperCase()), (o = u[s].narrow.toUpperCase()), n))
					switch (t) {
						case 'N':
						case 'NN':
						case 'NNN':
							if (a === e) return u[s]
							break
						case 'NNNN':
							if (r === e) return u[s]
							break
						case 'NNNNN':
							if (o === e) return u[s]
							break
					}
				else if (0 <= [r, a, o].indexOf(e)) return u[s]
		}),
		(d.erasConvertYear = function (e, t) {
			var n = e.since <= e.until ? 1 : -1
			return void 0 === t ? _(e.since).year() : _(e.since).year() + (t - e.offset) * n
		}),
		(d.erasAbbrRegex = function (e) {
			return (c(this, '_erasAbbrRegex') || an.call(this), e ? this._erasAbbrRegex : this._erasRegex)
		}),
		(d.erasNameRegex = function (e) {
			return (c(this, '_erasNameRegex') || an.call(this), e ? this._erasNameRegex : this._erasRegex)
		}),
		(d.erasNarrowRegex = function (e) {
			return (c(this, '_erasNarrowRegex') || an.call(this), e ? this._erasNarrowRegex : this._erasRegex)
		}),
		(d.months = function (e, t) {
			return e
				? (y(this._months)
						? this._months
						: this._months[(this._months.isFormat || Ve).test(t) ? 'format' : 'standalone'])[e.month()]
				: y(this._months)
					? this._months
					: this._months.standalone
		}),
		(d.monthsShort = function (e, t) {
			return e
				? (y(this._monthsShort) ? this._monthsShort : this._monthsShort[Ve.test(t) ? 'format' : 'standalone'])[
						e.month()
					]
				: y(this._monthsShort)
					? this._monthsShort
					: this._monthsShort.standalone
		}),
		(d.monthsParse = function (e, t, n) {
			var s, i
			if (this._monthsParseExact)
				return function (e, t, n) {
					var s,
						i,
						r,
						e = e.toLocaleLowerCase()
					if (!this._monthsParse)
						for (
							this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], s = 0;
							s < 12;
							++s
						)
							((r = l([2e3, s])),
								(this._shortMonthsParse[s] = this.monthsShort(r, '').toLocaleLowerCase()),
								(this._longMonthsParse[s] = this.months(r, '').toLocaleLowerCase()))
					return n
						? 'MMM' === t
							? -1 !== (i = x.call(this._shortMonthsParse, e))
								? i
								: null
							: -1 !== (i = x.call(this._longMonthsParse, e))
								? i
								: null
						: 'MMM' === t
							? -1 !== (i = x.call(this._shortMonthsParse, e)) ||
								-1 !== (i = x.call(this._longMonthsParse, e))
								? i
								: null
							: -1 !== (i = x.call(this._longMonthsParse, e)) ||
								  -1 !== (i = x.call(this._shortMonthsParse, e))
								? i
								: null
				}.call(this, e, t, n)
			for (
				this._monthsParse ||
					((this._monthsParse = []), (this._longMonthsParse = []), (this._shortMonthsParse = [])),
					s = 0;
				s < 12;
				s++
			) {
				if (
					((i = l([2e3, s])),
					n &&
						!this._longMonthsParse[s] &&
						((this._longMonthsParse[s] = new RegExp('^' + this.months(i, '').replace('.', '') + '$', 'i')),
						(this._shortMonthsParse[s] = new RegExp(
							'^' + this.monthsShort(i, '').replace('.', '') + '$',
							'i',
						))),
					n ||
						this._monthsParse[s] ||
						((i = '^' + this.months(i, '') + '|^' + this.monthsShort(i, '')),
						(this._monthsParse[s] = new RegExp(i.replace('.', ''), 'i'))),
					n && 'MMMM' === t && this._longMonthsParse[s].test(e))
				)
					return s
				if (n && 'MMM' === t && this._shortMonthsParse[s].test(e)) return s
				if (!n && this._monthsParse[s].test(e)) return s
			}
		}),
		(d.monthsRegex = function (e) {
			return this._monthsParseExact
				? (c(this, '_monthsRegex') || je.call(this), e ? this._monthsStrictRegex : this._monthsRegex)
				: (c(this, '_monthsRegex') || (this._monthsRegex = Ee),
					this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
		}),
		(d.monthsShortRegex = function (e) {
			return this._monthsParseExact
				? (c(this, '_monthsRegex') || je.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex)
				: (c(this, '_monthsShortRegex') || (this._monthsShortRegex = Ge),
					this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
		}),
		(d.week = function (e) {
			return Be(e, this._week.dow, this._week.doy).week
		}),
		(d.firstDayOfYear = function () {
			return this._week.doy
		}),
		(d.firstDayOfWeek = function () {
			return this._week.dow
		}),
		(d.weekdays = function (e, t) {
			return (
				(t = y(this._weekdays)
					? this._weekdays
					: this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? 'format' : 'standalone']),
				!0 === e ? Je(t, this._week.dow) : e ? t[e.day()] : t
			)
		}),
		(d.weekdaysMin = function (e) {
			return !0 === e ? Je(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
		}),
		(d.weekdaysShort = function (e) {
			return !0 === e
				? Je(this._weekdaysShort, this._week.dow)
				: e
					? this._weekdaysShort[e.day()]
					: this._weekdaysShort
		}),
		(d.weekdaysParse = function (e, t, n) {
			var s, i
			if (this._weekdaysParseExact)
				return function (e, t, n) {
					var s,
						i,
						r,
						e = e.toLocaleLowerCase()
					if (!this._weekdaysParse)
						for (
							this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], s = 0;
							s < 7;
							++s
						)
							((r = l([2e3, 1]).day(s)),
								(this._minWeekdaysParse[s] = this.weekdaysMin(r, '').toLocaleLowerCase()),
								(this._shortWeekdaysParse[s] = this.weekdaysShort(r, '').toLocaleLowerCase()),
								(this._weekdaysParse[s] = this.weekdays(r, '').toLocaleLowerCase()))
					return n
						? 'dddd' === t
							? -1 !== (i = x.call(this._weekdaysParse, e))
								? i
								: null
							: 'ddd' === t
								? -1 !== (i = x.call(this._shortWeekdaysParse, e))
									? i
									: null
								: -1 !== (i = x.call(this._minWeekdaysParse, e))
									? i
									: null
						: 'dddd' === t
							? -1 !== (i = x.call(this._weekdaysParse, e)) ||
								-1 !== (i = x.call(this._shortWeekdaysParse, e)) ||
								-1 !== (i = x.call(this._minWeekdaysParse, e))
								? i
								: null
							: 'ddd' === t
								? -1 !== (i = x.call(this._shortWeekdaysParse, e)) ||
									-1 !== (i = x.call(this._weekdaysParse, e)) ||
									-1 !== (i = x.call(this._minWeekdaysParse, e))
									? i
									: null
								: -1 !== (i = x.call(this._minWeekdaysParse, e)) ||
									  -1 !== (i = x.call(this._weekdaysParse, e)) ||
									  -1 !== (i = x.call(this._shortWeekdaysParse, e))
									? i
									: null
				}.call(this, e, t, n)
			for (
				this._weekdaysParse ||
					((this._weekdaysParse = []),
					(this._minWeekdaysParse = []),
					(this._shortWeekdaysParse = []),
					(this._fullWeekdaysParse = [])),
					s = 0;
				s < 7;
				s++
			) {
				if (
					((i = l([2e3, 1]).day(s)),
					n &&
						!this._fullWeekdaysParse[s] &&
						((this._fullWeekdaysParse[s] = new RegExp(
							'^' + this.weekdays(i, '').replace('.', '\\.?') + '$',
							'i',
						)),
						(this._shortWeekdaysParse[s] = new RegExp(
							'^' + this.weekdaysShort(i, '').replace('.', '\\.?') + '$',
							'i',
						)),
						(this._minWeekdaysParse[s] = new RegExp(
							'^' + this.weekdaysMin(i, '').replace('.', '\\.?') + '$',
							'i',
						))),
					this._weekdaysParse[s] ||
						((i =
							'^' +
							this.weekdays(i, '') +
							'|^' +
							this.weekdaysShort(i, '') +
							'|^' +
							this.weekdaysMin(i, '')),
						(this._weekdaysParse[s] = new RegExp(i.replace('.', ''), 'i'))),
					n && 'dddd' === t && this._fullWeekdaysParse[s].test(e))
				)
					return s
				if (n && 'ddd' === t && this._shortWeekdaysParse[s].test(e)) return s
				if (n && 'dd' === t && this._minWeekdaysParse[s].test(e)) return s
				if (!n && this._weekdaysParse[s].test(e)) return s
			}
		}),
		(d.weekdaysRegex = function (e) {
			return this._weekdaysParseExact
				? (c(this, '_weekdaysRegex') || st.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex)
				: (c(this, '_weekdaysRegex') || (this._weekdaysRegex = et),
					this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
		}),
		(d.weekdaysShortRegex = function (e) {
			return this._weekdaysParseExact
				? (c(this, '_weekdaysRegex') || st.call(this),
					e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
				: (c(this, '_weekdaysShortRegex') || (this._weekdaysShortRegex = tt),
					this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
		}),
		(d.weekdaysMinRegex = function (e) {
			return this._weekdaysParseExact
				? (c(this, '_weekdaysRegex') || st.call(this),
					e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
				: (c(this, '_weekdaysMinRegex') || (this._weekdaysMinRegex = nt),
					this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
		}),
		(d.isPM = function (e) {
			return 'p' === (e + '').toLowerCase().charAt(0)
		}),
		(d.meridiem = function (e, t, n) {
			return 11 < e ? (n ? 'pm' : 'PM') : n ? 'am' : 'AM'
		}),
		ft('en', {
			eras: [
				{ since: '0001-01-01', until: 1 / 0, offset: 1, name: 'Anno Domini', narrow: 'AD', abbr: 'AD' },
				{ since: '0000-12-31', until: -1 / 0, offset: 1, name: 'Before Christ', narrow: 'BC', abbr: 'BC' },
			],
			dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
			ordinal: function (e) {
				var t = e % 10
				return e + (1 === M((e % 100) / 10) ? 'th' : 1 == t ? 'st' : 2 == t ? 'nd' : 3 == t ? 'rd' : 'th')
			},
		}),
		(_.lang = e('moment.lang is deprecated. Use moment.locale instead.', ft)),
		(_.langData = e('moment.langData is deprecated. Use moment.localeData instead.', P)))
	var _n = Math.abs
	function yn(e, t, n, s) {
		t = C(t, n)
		return (
			(e._milliseconds += s * t._milliseconds),
			(e._days += s * t._days),
			(e._months += s * t._months),
			e._bubble()
		)
	}
	function gn(e) {
		return e < 0 ? Math.floor(e) : Math.ceil(e)
	}
	function wn(e) {
		return (4800 * e) / 146097
	}
	function pn(e) {
		return (146097 * e) / 4800
	}
	function kn(e) {
		return function () {
			return this.as(e)
		}
	}
	;((de = kn('ms')),
		(t = kn('s')),
		(ye = kn('m')),
		(he = kn('h')),
		(Fe = kn('d')),
		(_e = kn('w')),
		(me = kn('M')),
		(Qe = kn('Q')),
		(i = kn('y')),
		(ce = de))
	function Mn(e) {
		return function () {
			return this.isValid() ? this._data[e] : NaN
		}
	}
	var we = Mn('milliseconds'),
		fe = Mn('seconds'),
		ge = Mn('minutes'),
		Pe = Mn('hours'),
		d = Mn('days'),
		vn = Mn('months'),
		Dn = Mn('years')
	var Yn = Math.round,
		Sn = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 }
	function On(e, t, n, s) {
		var i = C(e).abs(),
			r = Yn(i.as('s')),
			a = Yn(i.as('m')),
			o = Yn(i.as('h')),
			u = Yn(i.as('d')),
			l = Yn(i.as('M')),
			d = Yn(i.as('w')),
			i = Yn(i.as('y')),
			r =
				(r <= n.ss ? ['s', r] : r < n.s && ['ss', r]) ||
				(a <= 1 ? ['m'] : a < n.m && ['mm', a]) ||
				(o <= 1 ? ['h'] : o < n.h && ['hh', o]) ||
				(u <= 1 ? ['d'] : u < n.d && ['dd', u])
		return (
			((r =
				(r = null != n.w ? r || (d <= 1 ? ['w'] : d < n.w && ['ww', d]) : r) ||
				(l <= 1 ? ['M'] : l < n.M && ['MM', l]) ||
				(i <= 1 ? ['y'] : ['yy', i]))[2] = t),
			(r[3] = 0 < +e),
			(r[4] = s),
			function (e, t, n, s, i) {
				return i.relativeTime(t || 1, !!n, e, s)
			}.apply(null, r)
		)
	}
	var bn = Math.abs
	function Tn(e) {
		return (0 < e) - (e < 0) || +e
	}
	function xn() {
		var e, t, n, s, i, r, a, o, u, l, d
		return this.isValid()
			? ((e = bn(this._milliseconds) / 1e3),
				(t = bn(this._days)),
				(n = bn(this._months)),
				(o = this.asSeconds())
					? ((s = m(e / 60)),
						(i = m(s / 60)),
						(e %= 60),
						(s %= 60),
						(r = m(n / 12)),
						(n %= 12),
						(a = e ? e.toFixed(3).replace(/\.?0+$/, '') : ''),
						(u = Tn(this._months) !== Tn(o) ? '-' : ''),
						(l = Tn(this._days) !== Tn(o) ? '-' : ''),
						(d = Tn(this._milliseconds) !== Tn(o) ? '-' : ''),
						(o < 0 ? '-' : '') +
							'P' +
							(r ? u + r + 'Y' : '') +
							(n ? u + n + 'M' : '') +
							(t ? l + t + 'D' : '') +
							(i || s || e ? 'T' : '') +
							(i ? d + i + 'H' : '') +
							(s ? d + s + 'M' : '') +
							(e ? d + a + 'S' : ''))
					: 'P0D')
			: this.localeData().invalidDate()
	}
	var U = Ct.prototype
	return (
		(U.isValid = function () {
			return this._isValid
		}),
		(U.abs = function () {
			var e = this._data
			return (
				(this._milliseconds = _n(this._milliseconds)),
				(this._days = _n(this._days)),
				(this._months = _n(this._months)),
				(e.milliseconds = _n(e.milliseconds)),
				(e.seconds = _n(e.seconds)),
				(e.minutes = _n(e.minutes)),
				(e.hours = _n(e.hours)),
				(e.months = _n(e.months)),
				(e.years = _n(e.years)),
				this
			)
		}),
		(U.add = function (e, t) {
			return yn(this, e, t, 1)
		}),
		(U.subtract = function (e, t) {
			return yn(this, e, t, -1)
		}),
		(U.as = function (e) {
			if (!this.isValid()) return NaN
			var t,
				n,
				s = this._milliseconds
			if ('month' === (e = o(e)) || 'quarter' === e || 'year' === e)
				switch (((t = this._days + s / 864e5), (n = this._months + wn(t)), e)) {
					case 'month':
						return n
					case 'quarter':
						return n / 3
					case 'year':
						return n / 12
				}
			else
				switch (((t = this._days + Math.round(pn(this._months))), e)) {
					case 'week':
						return t / 7 + s / 6048e5
					case 'day':
						return t + s / 864e5
					case 'hour':
						return 24 * t + s / 36e5
					case 'minute':
						return 1440 * t + s / 6e4
					case 'second':
						return 86400 * t + s / 1e3
					case 'millisecond':
						return Math.floor(864e5 * t) + s
					default:
						throw new Error('Unknown unit ' + e)
				}
		}),
		(U.asMilliseconds = de),
		(U.asSeconds = t),
		(U.asMinutes = ye),
		(U.asHours = he),
		(U.asDays = Fe),
		(U.asWeeks = _e),
		(U.asMonths = me),
		(U.asQuarters = Qe),
		(U.asYears = i),
		(U.valueOf = ce),
		(U._bubble = function () {
			var e = this._milliseconds,
				t = this._days,
				n = this._months,
				s = this._data
			return (
				(0 <= e && 0 <= t && 0 <= n) ||
					(e <= 0 && t <= 0 && n <= 0) ||
					((e += 864e5 * gn(pn(n) + t)), (n = t = 0)),
				(s.milliseconds = e % 1e3),
				(e = m(e / 1e3)),
				(s.seconds = e % 60),
				(e = m(e / 60)),
				(s.minutes = e % 60),
				(e = m(e / 60)),
				(s.hours = e % 24),
				(t += m(e / 24)),
				(n += e = m(wn(t))),
				(t -= gn(pn(e))),
				(e = m(n / 12)),
				(n %= 12),
				(s.days = t),
				(s.months = n),
				(s.years = e),
				this
			)
		}),
		(U.clone = function () {
			return C(this)
		}),
		(U.get = function (e) {
			return ((e = o(e)), this.isValid() ? this[e + 's']() : NaN)
		}),
		(U.milliseconds = we),
		(U.seconds = fe),
		(U.minutes = ge),
		(U.hours = Pe),
		(U.days = d),
		(U.weeks = function () {
			return m(this.days() / 7)
		}),
		(U.months = vn),
		(U.years = Dn),
		(U.humanize = function (e, t) {
			var n, s
			return this.isValid()
				? ((n = !1),
					(s = Sn),
					'object' == typeof e && ((t = e), (e = !1)),
					'boolean' == typeof e && (n = e),
					'object' == typeof t &&
						((s = Object.assign({}, Sn, t)), null != t.s) &&
						null == t.ss &&
						(s.ss = t.s - 1),
					(e = this.localeData()),
					(t = On(this, !n, s, e)),
					n && (t = e.pastFuture(+this, t)),
					e.postformat(t))
				: this.localeData().invalidDate()
		}),
		(U.toISOString = xn),
		(U.toString = xn),
		(U.toJSON = xn),
		(U.locale = Xt),
		(U.localeData = Kt),
		(U.toIsoString = e('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', xn)),
		(U.lang = Ke),
		s('X', 0, 0, 'unix'),
		s('x', 0, 0, 'valueOf'),
		h('x', ke),
		h('X', /[+-]?\d+(\.\d{1,3})?/),
		v('X', function (e, t, n) {
			n._d = new Date(1e3 * parseFloat(e))
		}),
		v('x', function (e, t, n) {
			n._d = new Date(M(e))
		}),
		(_.version = '2.30.1'),
		(H = R),
		(_.fn = u),
		(_.min = function () {
			return Pt('isBefore', [].slice.call(arguments, 0))
		}),
		(_.max = function () {
			return Pt('isAfter', [].slice.call(arguments, 0))
		}),
		(_.now = function () {
			return Date.now ? Date.now() : +new Date()
		}),
		(_.utc = l),
		(_.unix = function (e) {
			return R(1e3 * e)
		}),
		(_.months = function (e, t) {
			return fn(e, t, 'months')
		}),
		(_.isDate = V),
		(_.locale = ft),
		(_.invalid = I),
		(_.duration = C),
		(_.isMoment = k),
		(_.weekdays = function (e, t, n) {
			return mn(e, t, n, 'weekdays')
		}),
		(_.parseZone = function () {
			return R.apply(null, arguments).parseZone()
		}),
		(_.localeData = P),
		(_.isDuration = Ut),
		(_.monthsShort = function (e, t) {
			return fn(e, t, 'monthsShort')
		}),
		(_.weekdaysMin = function (e, t, n) {
			return mn(e, t, n, 'weekdaysMin')
		}),
		(_.defineLocale = mt),
		(_.updateLocale = function (e, t) {
			var n, s
			return (
				null != t
					? ((s = ut),
						null != W[e] && null != W[e].parentLocale
							? W[e].set(X(W[e]._config, t))
							: ((t = X((s = null != (n = ct(e)) ? n._config : s), t)),
								null == n && (t.abbr = e),
								((s = new K(t)).parentLocale = W[e]),
								(W[e] = s)),
						ft(e))
					: null != W[e] &&
						(null != W[e].parentLocale
							? ((W[e] = W[e].parentLocale), e === ft() && ft(e))
							: null != W[e] && delete W[e]),
				W[e]
			)
		}),
		(_.locales = function () {
			return ee(W)
		}),
		(_.weekdaysShort = function (e, t, n) {
			return mn(e, t, n, 'weekdaysShort')
		}),
		(_.normalizeUnits = o),
		(_.relativeTimeRounding = function (e) {
			return void 0 === e ? Yn : 'function' == typeof e && ((Yn = e), !0)
		}),
		(_.relativeTimeThreshold = function (e, t) {
			return void 0 !== Sn[e] && (void 0 === t ? Sn[e] : ((Sn[e] = t), 's' === e && (Sn.ss = t - 1), !0))
		}),
		(_.calendarFormat = function (e, t) {
			return (e = e.diff(t, 'days', !0)) < -6
				? 'sameElse'
				: e < -1
					? 'lastWeek'
					: e < 0
						? 'lastDay'
						: e < 1
							? 'sameDay'
							: e < 2
								? 'nextDay'
								: e < 7
									? 'nextWeek'
									: 'sameElse'
		}),
		(_.prototype = u),
		(_.HTML5_FMT = {
			DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',
			DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',
			DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',
			DATE: 'YYYY-MM-DD',
			TIME: 'HH:mm',
			TIME_SECONDS: 'HH:mm:ss',
			TIME_MS: 'HH:mm:ss.SSS',
			WEEK: 'GGGG-[W]WW',
			MONTH: 'YYYY-MM',
		}),
		_
	)
})


;

$node[ "../bog/quiz/lib/moment.bundle" ] = $node[ "../bog/quiz/lib/moment.bundle.js" ] = module.exports }.call( {} , {} )
;
	($.$mol_button_major) = class $mol_button_major extends ($.$mol_button_minor) {
		theme(){
			return "$mol_theme_base";
		}
	};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/major/major.view.css", "[mol_button_major] {\n\tbackground-color: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_section) = class $mol_section extends ($.$mol_list) {
		title_dom_name(){
			return "h1";
		}
		Title(){
			const obj = new this.$.$mol_paragraph();
			(obj.dom_name) = () => ((this.title_dom_name()));
			(obj.title) = () => ((this.title()));
			return obj;
		}
		tools(){
			return [];
		}
		Tools(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.tools()));
			return obj;
		}
		head(){
			return [(this.Title()), (this.Tools())];
		}
		Head(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.head()));
			return obj;
		}
		content(){
			return [];
		}
		Content(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.content()));
			return obj;
		}
		level(){
			return 1;
		}
		rows(){
			return [(this.Head()), (this.Content())];
		}
	};
	($mol_mem(($.$mol_section.prototype), "Title"));
	($mol_mem(($.$mol_section.prototype), "Tools"));
	($mol_mem(($.$mol_section.prototype), "Head"));
	($mol_mem(($.$mol_section.prototype), "Content"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_section extends $.$mol_section {
            title_dom_name() {
                return 'h' + this.level();
            }
        }
        $$.$mol_section = $mol_section;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/section/section.view.css", "[mol_section_head] {\n\tjustify-content: space-between;\n\talign-items: flex-end;\n\tflex-wrap: wrap;\n}\n\n[mol_section_title] {\n\tpadding: var(--mol_gap_text);\n\ttext-shadow: 0 0;\n\tfont-weight: normal;\n}\n\n[mol_section_title]:where(h1) {\n\tfont-size: 1.5rem;\n}\n\n[mol_section_title]:where(h2) {\n\tfont-size: 1.5rem;\n\tfont-style: italic;\n}\n\n[mol_section_title]:where(h3) {\n\tfont-size: 1.25rem;\n}\n\n[mol_section_title]:where(h4) {\n\tfont-size: 1.25rem;\n\tfont-style: italic;\n}\n\n[mol_section_title]:where(h5) {\n\tfont-size: 1rem;\n}\n\n[mol_section_title]:where(h6) {\n\tfont-size: 1rem;\n\tfont-style: italic;\n}\n");
})($ || ($ = {}));

;
	($.$mol_row) = class $mol_row extends ($.$mol_view) {};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/row/row.view.css", "[mol_row] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-items: flex-start;\n\talign-content: flex-start;\n\tjustify-content: flex-start;\n\tpadding: var(--mol_gap_block);\n\tgap: var(--mol_gap_block);\n\tflex: 0 0 auto;\n\tbox-sizing: border-box;\n\tmax-width: 100%;\n}\n\n[mol_row] > * {\n\tmax-width: 100%;\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_card) = class $mol_card extends ($.$mol_list) {
		status(){
			return "";
		}
		content(){
			return [(this.title())];
		}
		Content(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.content()));
			return obj;
		}
		status_text(){
			return (this.status());
		}
		Status(){
			const obj = new this.$.$mol_view();
			(obj.minimal_height) = () => (30);
			(obj.sub) = () => ([(this.status_text())]);
			return obj;
		}
		attr(){
			return {...(super.attr()), "mol_card_status_type": (this.status())};
		}
		rows(){
			return [(this.Content()), (this.Status())];
		}
	};
	($mol_mem(($.$mol_card.prototype), "Content"));
	($mol_mem(($.$mol_card.prototype), "Status"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_card extends $.$mol_card {
            rows() {
                return [
                    this.Content(),
                    ...this.status_text() ? [this.Status()] : [],
                ];
            }
        }
        $$.$mol_card = $mol_card;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/card/card.view.css", "[mol_card] {\n\tbackground: var(--mol_theme_card);\n\tcolor: var(--mol_theme_text);\n\tborder-radius: var(--mol_gap_round);\n\tdisplay: flex;\n\tflex: 0 1 auto;\n\tflex-direction: column;\n\tposition: relative;\n\tbox-shadow: 0 0 0.5rem 0rem hsla(0,0%,0%,.125);\n\t/* overflow: hidden; */\n}\n\n[mol_card_content] {\n\tflex: 1 1 auto;\n\tborder-radius: var(--mol_gap_round);\n\tmargin: 0;\n\tpadding: var(--mol_gap_block);\n}\n\n[mol_card_status] {\n\tbackground: var(--mol_theme_line);\n\tpadding: var(--mol_gap_text);\n\tmargin: 0;\n}\n\n[mol_card_status] {\n\tbackground: var(--mol_theme_line);\n}\n");
})($ || ($ = {}));

;
	($.$bog_quiz_session_host) = class $bog_quiz_session_host extends ($.$mol_page) {
		session_title(){
			return "";
		}
		state_text(){
			return "";
		}
		State_info(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.state_text()));
			return obj;
		}
		join_uri(){
			return "";
		}
		Join_button(){
			const obj = new this.$.$mol_button_major();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_quiz_session_host_Join_button_title")));
			return obj;
		}
		Join_link(){
			const obj = new this.$.$mol_link();
			(obj.uri) = () => ((this.join_uri()));
			(obj.sub) = () => ([(this.Join_button())]);
			return obj;
		}
		Status_section(){
			const obj = new this.$.$mol_section();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_quiz_session_host_Status_section_title")));
			(obj.content) = () => ([(this.State_info()), (this.Join_link())]);
			return obj;
		}
		participant_rows(){
			return [];
		}
		Participants(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.participant_rows()));
			return obj;
		}
		Participants_section(){
			const obj = new this.$.$mol_section();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_quiz_session_host_Participants_section_title")));
			(obj.content) = () => ([(this.Participants())]);
			return obj;
		}
		start(next){
			if(next !== undefined) return next;
			return null;
		}
		can_start(){
			return true;
		}
		Start_button(){
			const obj = new this.$.$mol_button_major();
			(obj.click) = (next) => ((this.start(next)));
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_quiz_session_host_Start_button_title")));
			(obj.enabled) = () => ((this.can_start()));
			return obj;
		}
		next(next){
			if(next !== undefined) return next;
			return null;
		}
		next_button_title(){
			return "";
		}
		can_next(){
			return false;
		}
		Next_button(){
			const obj = new this.$.$mol_button_major();
			(obj.click) = (next) => ((this.next(next)));
			(obj.title) = () => ((this.next_button_title()));
			(obj.enabled) = () => ((this.can_next()));
			return obj;
		}
		end(next){
			if(next !== undefined) return next;
			return null;
		}
		can_end(){
			return false;
		}
		End_button(){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.end(next)));
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_quiz_session_host_End_button_title")));
			(obj.enabled) = () => ((this.can_end()));
			return obj;
		}
		Controls(){
			const obj = new this.$.$mol_row();
			(obj.sub) = () => ([
				(this.Start_button()), 
				(this.Next_button()), 
				(this.End_button())
			]);
			return obj;
		}
		Controls_section(){
			const obj = new this.$.$mol_section();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_quiz_session_host_Controls_section_title")));
			(obj.content) = () => ([(this.Controls())]);
			return obj;
		}
		participant_name(id){
			return "";
		}
		participant_status_text(id){
			return "";
		}
		Participant_status(id){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.participant_status_text(id)));
			return obj;
		}
		Participant_content(id){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Participant_status(id))]);
			return obj;
		}
		session_id(){
			return "";
		}
		title(){
			return (this.session_title());
		}
		body(){
			return [
				(this.Status_section()), 
				(this.Participants_section()), 
				(this.Controls_section())
			];
		}
		Participant_card(id){
			const obj = new this.$.$mol_card();
			(obj.title) = () => ((this.participant_name(id)));
			(obj.Content) = () => ((this.Participant_content(id)));
			return obj;
		}
	};
	($mol_mem(($.$bog_quiz_session_host.prototype), "State_info"));
	($mol_mem(($.$bog_quiz_session_host.prototype), "Join_button"));
	($mol_mem(($.$bog_quiz_session_host.prototype), "Join_link"));
	($mol_mem(($.$bog_quiz_session_host.prototype), "Status_section"));
	($mol_mem(($.$bog_quiz_session_host.prototype), "Participants"));
	($mol_mem(($.$bog_quiz_session_host.prototype), "Participants_section"));
	($mol_mem(($.$bog_quiz_session_host.prototype), "start"));
	($mol_mem(($.$bog_quiz_session_host.prototype), "Start_button"));
	($mol_mem(($.$bog_quiz_session_host.prototype), "next"));
	($mol_mem(($.$bog_quiz_session_host.prototype), "Next_button"));
	($mol_mem(($.$bog_quiz_session_host.prototype), "end"));
	($mol_mem(($.$bog_quiz_session_host.prototype), "End_button"));
	($mol_mem(($.$bog_quiz_session_host.prototype), "Controls"));
	($mol_mem(($.$bog_quiz_session_host.prototype), "Controls_section"));
	($mol_mem_key(($.$bog_quiz_session_host.prototype), "Participant_status"));
	($mol_mem_key(($.$bog_quiz_session_host.prototype), "Participant_content"));
	($mol_mem_key(($.$bog_quiz_session_host.prototype), "Participant_card"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $bog_quiz_session_host extends $.$bog_quiz_session_host {
            session() {
                const id = this.session_id();
                if (!id)
                    return null;
                return this.$.$giper_baza_glob.Node(new $giper_baza_link(id), $bog_quiz_session);
            }
            session_title() {
                const session = this.session();
                if (!session)
                    return 'Host Session';
                const quiz = session.Quiz()?.remote();
                const quiz_title = quiz?.Title(null)?.str() || 'Quiz';
                return `Host: ${quiz_title}`;
            }
            state_text() {
                const session = this.session();
                if (!session)
                    return 'Loading...';
                const state = session.State()?.val() || 'waiting';
                const stateNames = {
                    waiting: 'Waiting for participants',
                    question: 'Question in progress',
                    review: 'Reviewing answers',
                    finished: 'Quiz finished',
                };
                return stateNames[state] || state;
            }
            join_uri() {
                const session = this.session();
                if (!session)
                    return '';
                const session_id = session.link().toString();
                return `${window.location.origin}${window.location.pathname}?session=${session_id}&join`;
            }
            participant_rows() {
                const session = this.session();
                if (!session)
                    return [];
                const participants_list = session.Participants(null);
                if (!participants_list)
                    return [];
                const participants = participants_list.remote_list() ?? [];
                return participants.map((participant, index) => {
                    return this.Participant_card(index);
                });
            }
            participant_entity(index) {
                const session = this.session();
                if (!session)
                    return null;
                const participants_list = session.Participants(null);
                if (!participants_list)
                    return null;
                const participants = participants_list.remote_list() ?? [];
                return participants[index];
            }
            participant_name(index) {
                const participant = this.participant_entity(index);
                if (!participant)
                    return 'Unknown';
                return participant.display_name_text();
            }
            participant_status_text(index) {
                const participant = this.participant_entity(index);
                if (!participant)
                    return '';
                const session = this.session();
                if (!session)
                    return '';
                const state = session.State()?.val();
                if (state === 'question') {
                    return 'Waiting for answer';
                }
                return 'Waiting';
            }
            can_start() {
                const session = this.session();
                if (!session)
                    return false;
                const state = session.State()?.val();
                return state === 'waiting';
            }
            can_next() {
                const session = this.session();
                if (!session)
                    return false;
                const state = session.State()?.val();
                return state === 'question' || state === 'review';
            }
            can_end() {
                const session = this.session();
                if (!session)
                    return false;
                const state = session.State()?.val();
                return state !== 'finished';
            }
            next_button_title() {
                const session = this.session();
                if (!session)
                    return 'Next';
                const state = session.State()?.val();
                if (state === 'question')
                    return 'Show Results';
                if (state === 'review')
                    return 'Next Question';
                return 'Next';
            }
            start(event) {
                const session = this.session();
                if (!session)
                    return event;
                session.start();
                return event;
            }
            next(event) {
                const session = this.session();
                if (!session)
                    return event;
                session.next();
                return event;
            }
            end(event) {
                const session = this.session();
                if (!session)
                    return event;
                session.end();
                return event;
            }
        }
        __decorate([
            $mol_mem
        ], $bog_quiz_session_host.prototype, "session", null);
        __decorate([
            $mol_mem
        ], $bog_quiz_session_host.prototype, "session_title", null);
        __decorate([
            $mol_mem
        ], $bog_quiz_session_host.prototype, "state_text", null);
        __decorate([
            $mol_mem
        ], $bog_quiz_session_host.prototype, "join_uri", null);
        __decorate([
            $mol_mem
        ], $bog_quiz_session_host.prototype, "participant_rows", null);
        __decorate([
            $mol_mem_key
        ], $bog_quiz_session_host.prototype, "participant_entity", null);
        __decorate([
            $mol_mem_key
        ], $bog_quiz_session_host.prototype, "participant_name", null);
        __decorate([
            $mol_mem_key
        ], $bog_quiz_session_host.prototype, "participant_status_text", null);
        __decorate([
            $mol_mem
        ], $bog_quiz_session_host.prototype, "can_start", null);
        __decorate([
            $mol_mem
        ], $bog_quiz_session_host.prototype, "can_next", null);
        __decorate([
            $mol_mem
        ], $bog_quiz_session_host.prototype, "can_end", null);
        __decorate([
            $mol_mem
        ], $bog_quiz_session_host.prototype, "next_button_title", null);
        $$.$bog_quiz_session_host = $bog_quiz_session_host;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_check_list) = class $mol_check_list extends ($.$mol_view) {
		option_checked(id, next){
			if(next !== undefined) return next;
			return false;
		}
		option_title(id){
			return "";
		}
		option_label(id){
			return [(this.option_title(id))];
		}
		enabled(){
			return true;
		}
		option_enabled(id){
			return (this.enabled());
		}
		option_hint(id){
			return "";
		}
		items(){
			return [];
		}
		dictionary(){
			return {};
		}
		Option(id){
			const obj = new this.$.$mol_check();
			(obj.checked) = (next) => ((this.option_checked(id, next)));
			(obj.label) = () => ((this.option_label(id)));
			(obj.enabled) = () => ((this.option_enabled(id)));
			(obj.hint) = () => ((this.option_hint(id)));
			(obj.minimal_height) = () => (24);
			return obj;
		}
		options(){
			return {};
		}
		keys(){
			return [];
		}
		sub(){
			return (this.items());
		}
	};
	($mol_mem_key(($.$mol_check_list.prototype), "option_checked"));
	($mol_mem_key(($.$mol_check_list.prototype), "Option"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check_list extends $.$mol_check_list {
            options() {
                return {};
            }
            dictionary(next) {
                return next ?? {};
            }
            option_checked(id, next) {
                const prev = this.dictionary();
                if (next === undefined)
                    return prev[id] ?? null;
                const next_rec = { ...prev, [id]: next };
                if (next === null)
                    delete next_rec[id];
                return this.dictionary(next_rec)[id] ?? null;
            }
            keys() {
                return Object.keys(this.options());
            }
            items() {
                return this.keys().map(key => this.Option(key));
            }
            option_title(key) {
                return this.options()[key] || key;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_check_list.prototype, "keys", null);
        __decorate([
            $mol_mem
        ], $mol_check_list.prototype, "items", null);
        $$.$mol_check_list = $mol_check_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/list/list.view.css", "[mol_check_list] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tflex: 1 1 auto;\n\tborder-radius: var(--mol_gap_round);\n\tgap: 1px;\n}\n\n[mol_check_list_option] {\n\tflex: 0 1 auto;\n}\n\n[mol_check_list_option]:where([mol_check_checked=\"true\"]) {\n\ttext-shadow: 0 0;\n\tcolor: var(--mol_theme_current);\n}\n\n[mol_check_list_option]:where([mol_check_checked=\"true\"][disabled]) {\n\tcolor: var(--mol_theme_text);\n}\n");
})($ || ($ = {}));

;
	($.$mol_switch) = class $mol_switch extends ($.$mol_check_list) {
		value(next){
			if(next !== undefined) return next;
			return "";
		}
	};
	($mol_mem(($.$mol_switch.prototype), "value"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_switch extends $.$mol_switch {
            value(next) {
                return $mol_state_session.value(`${this}.value()`, next) ?? '';
            }
            option_checked(key, next) {
                if (next === undefined)
                    return this.value() == key;
                this.value(next ? key : '');
                return next;
            }
        }
        $$.$mol_switch = $mol_switch;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_icon_tick) = class $mol_icon_tick extends ($.$mol_icon) {
		path(){
			return "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z";
		}
	};


;
"use strict";

;
	($.$mol_check_box) = class $mol_check_box extends ($.$mol_check) {
		Icon(){
			const obj = new this.$.$mol_icon_tick();
			return obj;
		}
	};
	($mol_mem(($.$mol_check_box.prototype), "Icon"));


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/box/box.view.css", "[mol_check_box_icon] {\n\tborder-radius: var(--mol_gap_round);\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_line);\n\tcolor: var(--mol_theme_shade);\n\theight: 1rem;\n\talign-self: center;\n}\n\n[mol_check]:not([mol_check_checked]) > [mol_check_box_icon] {\n\tfill: transparent;\n}\n\n[mol_check]:not([disabled]) > [mol_check_box_icon] {\n\tbackground: var(--mol_theme_field);\n\tcolor: var(--mol_theme_text);\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$bog_quiz_editor) = class $bog_quiz_editor extends ($.$mol_page) {
		quiz_title(){
			return "";
		}
		quiz_title_value(next){
			if(next !== undefined) return next;
			return "";
		}
		Title_field(){
			const obj = new this.$.$mol_string();
			(obj.value) = (next) => ((this.quiz_title_value(next)));
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_quiz_editor_Title_field_hint")));
			return obj;
		}
		add_question(next){
			if(next !== undefined) return next;
			return null;
		}
		Add_question_button(){
			const obj = new this.$.$mol_button_major();
			(obj.click) = (next) => ((this.add_question(next)));
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_quiz_editor_Add_question_button_title")));
			return obj;
		}
		question_rows(){
			return [];
		}
		Questions(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.question_rows()));
			return obj;
		}
		Questions_section(){
			const obj = new this.$.$mol_section();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_quiz_editor_Questions_section_title")));
			(obj.content) = () => ([(this.Add_question_button()), (this.Questions())]);
			return obj;
		}
		start_session(next){
			if(next !== undefined) return next;
			return null;
		}
		Start_session_button(){
			const obj = new this.$.$mol_button_major();
			(obj.click) = (next) => ((this.start_session(next)));
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_quiz_editor_Start_session_button_title")));
			return obj;
		}
		Actions(){
			const obj = new this.$.$mol_row();
			(obj.sub) = () => ([(this.Start_session_button())]);
			return obj;
		}
		question_number(id){
			return "";
		}
		question_text(id, next){
			if(next !== undefined) return next;
			return "";
		}
		Question_text_field(id){
			const obj = new this.$.$mol_text();
			(obj.text) = (next) => ((this.question_text(id, next)));
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_quiz_editor_Question_text_field_hint")));
			return obj;
		}
		question_type(id, next){
			if(next !== undefined) return next;
			return "single";
		}
		Question_type_switch(id){
			const obj = new this.$.$mol_switch();
			(obj.value) = (next) => ((this.question_type(id, next)));
			(obj.options) = () => ({"single": (this.$.$mol_locale.text("$bog_quiz_editor_Question_type_switch_options_single")), "multi": (this.$.$mol_locale.text("$bog_quiz_editor_Question_type_switch_options_multi"))});
			return obj;
		}
		Options_label(id){
			const obj = new this.$.$mol_paragraph();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_quiz_editor_Options_label_title")));
			return obj;
		}
		add_option(id, next){
			if(next !== undefined) return next;
			return null;
		}
		Add_option_button(id){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.add_option(id, next)));
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_quiz_editor_Add_option_button_title")));
			return obj;
		}
		option_rows(id){
			return [];
		}
		Options_list(id){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.option_rows(id)));
			return obj;
		}
		question_delete(id, next){
			if(next !== undefined) return next;
			return null;
		}
		Question_delete_button(id){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.question_delete(id, next)));
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_quiz_editor_Question_delete_button_title")));
			return obj;
		}
		Question_content(id){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Question_text_field(id)), 
				(this.Question_type_switch(id)), 
				(this.Options_label(id)), 
				(this.Add_option_button(id)), 
				(this.Options_list(id)), 
				(this.Question_delete_button(id))
			]);
			return obj;
		}
		option_correct(id, next){
			if(next !== undefined) return next;
			return false;
		}
		Option_correct_check(id){
			const obj = new this.$.$mol_check_box();
			(obj.checked) = (next) => ((this.option_correct(id, next)));
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_quiz_editor_Option_correct_check_title")));
			return obj;
		}
		option_text(id, next){
			if(next !== undefined) return next;
			return "";
		}
		Option_text_field(id){
			const obj = new this.$.$mol_string();
			(obj.value) = (next) => ((this.option_text(id, next)));
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_quiz_editor_Option_text_field_hint")));
			return obj;
		}
		option_delete(id, next){
			if(next !== undefined) return next;
			return null;
		}
		Option_delete_button(id){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.option_delete(id, next)));
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_quiz_editor_Option_delete_button_title")));
			return obj;
		}
		quiz_id(){
			return "";
		}
		realm(){
			const obj = new this.$.$giper_baza_glob();
			return obj;
		}
		title(){
			return (this.quiz_title());
		}
		body(){
			return [
				(this.Title_field()), 
				(this.Questions_section()), 
				(this.Actions())
			];
		}
		Question_card(id){
			const obj = new this.$.$mol_card();
			(obj.title) = () => ((this.question_number(id)));
			(obj.Content) = () => ((this.Question_content(id)));
			return obj;
		}
		Option_row(id){
			const obj = new this.$.$mol_row();
			(obj.sub) = () => ([
				(this.Option_correct_check(id)), 
				(this.Option_text_field(id)), 
				(this.Option_delete_button(id))
			]);
			return obj;
		}
	};
	($mol_mem(($.$bog_quiz_editor.prototype), "quiz_title_value"));
	($mol_mem(($.$bog_quiz_editor.prototype), "Title_field"));
	($mol_mem(($.$bog_quiz_editor.prototype), "add_question"));
	($mol_mem(($.$bog_quiz_editor.prototype), "Add_question_button"));
	($mol_mem(($.$bog_quiz_editor.prototype), "Questions"));
	($mol_mem(($.$bog_quiz_editor.prototype), "Questions_section"));
	($mol_mem(($.$bog_quiz_editor.prototype), "start_session"));
	($mol_mem(($.$bog_quiz_editor.prototype), "Start_session_button"));
	($mol_mem(($.$bog_quiz_editor.prototype), "Actions"));
	($mol_mem_key(($.$bog_quiz_editor.prototype), "question_text"));
	($mol_mem_key(($.$bog_quiz_editor.prototype), "Question_text_field"));
	($mol_mem_key(($.$bog_quiz_editor.prototype), "question_type"));
	($mol_mem_key(($.$bog_quiz_editor.prototype), "Question_type_switch"));
	($mol_mem_key(($.$bog_quiz_editor.prototype), "Options_label"));
	($mol_mem_key(($.$bog_quiz_editor.prototype), "add_option"));
	($mol_mem_key(($.$bog_quiz_editor.prototype), "Add_option_button"));
	($mol_mem_key(($.$bog_quiz_editor.prototype), "Options_list"));
	($mol_mem_key(($.$bog_quiz_editor.prototype), "question_delete"));
	($mol_mem_key(($.$bog_quiz_editor.prototype), "Question_delete_button"));
	($mol_mem_key(($.$bog_quiz_editor.prototype), "Question_content"));
	($mol_mem_key(($.$bog_quiz_editor.prototype), "option_correct"));
	($mol_mem_key(($.$bog_quiz_editor.prototype), "Option_correct_check"));
	($mol_mem_key(($.$bog_quiz_editor.prototype), "option_text"));
	($mol_mem_key(($.$bog_quiz_editor.prototype), "Option_text_field"));
	($mol_mem_key(($.$bog_quiz_editor.prototype), "option_delete"));
	($mol_mem_key(($.$bog_quiz_editor.prototype), "Option_delete_button"));
	($mol_mem(($.$bog_quiz_editor.prototype), "realm"));
	($mol_mem_key(($.$bog_quiz_editor.prototype), "Question_card"));
	($mol_mem_key(($.$bog_quiz_editor.prototype), "Option_row"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $bog_quiz_editor extends $.$bog_quiz_editor {
            quiz() {
                const id = this.quiz_id();
                if (!id)
                    return null;
                return this.$.$giper_baza_glob.Node(new $giper_baza_link(id), $bog_quiz_quiz);
            }
            quiz_title() {
                const quiz = this.quiz();
                if (!quiz)
                    return 'Quiz Editor';
                return quiz.Title(null)?.str() || 'Untitled Quiz';
            }
            quiz_title_value(next) {
                if (next === undefined) {
                    return this.quiz_title();
                }
                const quiz = this.quiz();
                if (!quiz)
                    return '';
                quiz.Title(null).str(next);
                return next;
            }
            add_question(event) {
                const quiz = this.quiz();
                if (!quiz)
                    return event;
                quiz.question_make();
                return event;
            }
            question_rows() {
                const quiz = this.quiz();
                if (!quiz)
                    return [];
                const questions = quiz.Questions(null)?.remote_list() ?? [];
                return questions.map((question, index) => {
                    return this.Question_card(index);
                });
            }
            question_entity(index) {
                const quiz = this.quiz();
                if (!quiz)
                    return null;
                const questions = quiz.Questions(null)?.remote_list() ?? [];
                return questions[index];
            }
            question_number(index) {
                return `Question ${index + 1}`;
            }
            question_text(index, next) {
                const question = this.question_entity(index);
                if (!question)
                    return '';
                if (next !== undefined) {
                    question.Text(null).str(next);
                    return next;
                }
                return question.Text(null)?.str() || '';
            }
            question_type(index, next) {
                const question = this.question_entity(index);
                if (!question)
                    return 'single';
                if (next !== undefined) {
                    question.Type(null).val(next);
                    return next;
                }
                return question.Type(null)?.val() || 'single';
            }
            question_delete(index, event) {
                const quiz = this.quiz();
                const question = this.question_entity(index);
                if (!quiz || !question)
                    return event;
                const questions = quiz.Questions(null);
                if (!questions)
                    return event;
                questions.cut(question.link());
                return event;
            }
            add_option(index, event) {
                const question = this.question_entity(index);
                if (!question)
                    return event;
                question.option_make();
                return event;
            }
            option_rows(question_index) {
                const question = this.question_entity(question_index);
                if (!question)
                    return [];
                const options = question.Options(null)?.remote_list() ?? [];
                return options.map((option, option_index) => {
                    const key = `${question_index}_${option_index}`;
                    return this.Option_row(key);
                });
            }
            option_entity(key) {
                const [question_index, option_index] = key.split('_').map(Number);
                const question = this.question_entity(question_index);
                if (!question)
                    return null;
                const options = question.Options(null)?.remote_list() ?? [];
                return options[option_index];
            }
            option_text(key, next) {
                const option = this.option_entity(key);
                if (!option)
                    return '';
                if (next !== undefined) {
                    option.Text(null).str(next);
                    return next;
                }
                return option.Text(null)?.str() || '';
            }
            option_correct(key, next) {
                const option = this.option_entity(key);
                if (!option)
                    return false;
                if (next !== undefined) {
                    const [question_index] = key.split('_').map(Number);
                    const question = this.question_entity(question_index);
                    const is_single = question?.Type(null)?.val() === 'single';
                    if (is_single && next === true) {
                        const options = question?.Options(null)?.remote_list() ?? [];
                        options.forEach((opt) => {
                            if (opt.link().toString() !== option.link().toString()) {
                                opt.IsCorrect(null).val(false);
                            }
                        });
                    }
                    option.IsCorrect(null).val(next);
                    return next;
                }
                return option.IsCorrect(null)?.val() ?? false;
            }
            option_delete(key, event) {
                const [question_index, option_index] = key.split('_').map(Number);
                const question = this.question_entity(question_index);
                const option = this.option_entity(key);
                if (!question || !option)
                    return event;
                const options = question.Options(null);
                if (!options)
                    return event;
                options.cut(option.link());
                return event;
            }
            start_session(event) {
                console.log('start_session() вызван');
                const quiz = this.quiz();
                console.log('quiz:', quiz);
                if (!quiz) {
                    console.log('quiz не найден!');
                    return event;
                }
                const questions = quiz.Questions(null)?.remote_list() ?? [];
                console.log('вопросов:', questions.length);
                if (questions.length === 0) {
                    alert('Add at least one question before starting a session');
                    return event;
                }
                const owner = this.$.$giper_baza_glob.home().hall_by($bog_quiz_owner, null);
                console.log('owner:', owner);
                const session = owner.session_make(quiz);
                console.log('session создана:', session);
                const session_id = session.link().toString();
                console.log('session_id:', session_id);
                this.$.$mol_state_arg.value('quiz', 'host:' + session_id);
                console.log('Навигация на host:', 'host:' + session_id);
                return event;
            }
        }
        __decorate([
            $mol_mem
        ], $bog_quiz_editor.prototype, "quiz", null);
        __decorate([
            $mol_mem
        ], $bog_quiz_editor.prototype, "quiz_title", null);
        __decorate([
            $mol_mem
        ], $bog_quiz_editor.prototype, "question_rows", null);
        __decorate([
            $mol_mem_key
        ], $bog_quiz_editor.prototype, "question_entity", null);
        __decorate([
            $mol_mem_key
        ], $bog_quiz_editor.prototype, "question_number", null);
        __decorate([
            $mol_mem_key
        ], $bog_quiz_editor.prototype, "question_text", null);
        __decorate([
            $mol_mem_key
        ], $bog_quiz_editor.prototype, "question_type", null);
        __decorate([
            $mol_action
        ], $bog_quiz_editor.prototype, "question_delete", null);
        __decorate([
            $mol_mem_key
        ], $bog_quiz_editor.prototype, "option_rows", null);
        __decorate([
            $mol_mem_key
        ], $bog_quiz_editor.prototype, "option_entity", null);
        __decorate([
            $mol_mem_key
        ], $bog_quiz_editor.prototype, "option_text", null);
        __decorate([
            $mol_mem_key
        ], $bog_quiz_editor.prototype, "option_correct", null);
        __decorate([
            $mol_action
        ], $bog_quiz_editor.prototype, "option_delete", null);
        __decorate([
            $mol_action
        ], $bog_quiz_editor.prototype, "start_session", null);
        $$.$bog_quiz_editor = $bog_quiz_editor;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
var $node = $node || {} ; $node[ "/bog/quiz/favicon.svg" ] = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KCTxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjNjM2NmYxIi8+Cgk8dGV4dCB4PSI1MCIgeT0iNzAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iNjAiIGZpbGw9IndoaXRlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9ImJvbGQiPlE8L3RleHQ+Cjwvc3ZnPgo="

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        new $mol_after_frame(() => {
            $giper_baza_yard.masters = ['https://crus.hd4.ru/'];
            $giper_baza_glob.yard().sync();
        });
        class $bog_quiz extends $.$bog_quiz {
            profile() {
                this.npm_libs_example();
                return this.$.$giper_baza_glob.home().hall_by($bog_quiz_owner, null);
            }
            npm_libs_example() {
                const _ = this.$.$bog_quiz_lib.lodash();
                console.log('\n🔧 Lodash (утилиты):');
                console.log('  • shuffle([1,2,3,4,5]):', _.shuffle([1, 2, 3, 4, 5]));
                console.log('  • uniq([1,2,2,3,3]):', _.uniq([1, 2, 2, 3, 3]));
                console.log('  • chunk([1,2,3,4,5], 2):', _.chunk([1, 2, 3, 4, 5], 2));
                console.log('  • sum([1,2,3,4,5]):', _.sum([1, 2, 3, 4, 5]));
                const moment = this.$.$bog_quiz_lib.moment();
                const now = moment();
                console.log('\n📅 Moment.js (даты):');
                console.log('  • format("DD.MM.YYYY HH:mm:ss"):', now.format('DD.MM.YYYY HH:mm:ss'));
                console.log('\n' + '='.repeat(60));
                console.log('✨ Все библиотеки загружены и работают!');
                console.log('='.repeat(60) + '\n');
                return true;
            }
            quiz_id(next) {
                const id = this.$.$mol_state_arg.value('quiz', next);
                return id || null;
            }
            spread_ids() {
                const owner = this.profile();
                if (!owner)
                    return [];
                return (owner
                    .Quizzes()
                    ?.remote_list()
                    .map(quiz => quiz.link().toString()) ?? []);
            }
            spread_key(id) {
                return id;
            }
            quiz(id) {
                return this.$.$giper_baza_glob.Node(new $giper_baza_link(id), $bog_quiz_quiz);
            }
            quiz_add(event) {
                const owner = this.profile();
                const quiz = owner.quiz_make();
                this.quiz_id(quiz.link().toString());
                return event;
            }
            Quiz_spread(id) {
                if (id.startsWith('host:')) {
                    const session_id = id.substring(5);
                    const host = new this.$.$bog_quiz_session_host();
                    host.session_id = () => session_id;
                    return host;
                }
                const editor = new this.$.$bog_quiz_editor();
                editor.quiz_id = () => id;
                editor.realm = () => this.Realm();
                return editor;
            }
        }
        __decorate([
            $mol_mem
        ], $bog_quiz.prototype, "profile", null);
        __decorate([
            $mol_mem
        ], $bog_quiz.prototype, "npm_libs_example", null);
        __decorate([
            $mol_mem
        ], $bog_quiz.prototype, "quiz_id", null);
        __decorate([
            $mol_mem
        ], $bog_quiz.prototype, "spread_ids", null);
        __decorate([
            $mol_mem_key
        ], $bog_quiz.prototype, "spread_key", null);
        __decorate([
            $mol_mem_key
        ], $bog_quiz.prototype, "quiz", null);
        __decorate([
            $mol_action
        ], $bog_quiz.prototype, "quiz_add", null);
        __decorate([
            $mol_mem_key
        ], $bog_quiz.prototype, "Quiz_spread", null);
        $$.$bog_quiz = $bog_quiz;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));


//# sourceMappingURL=web.js.map
