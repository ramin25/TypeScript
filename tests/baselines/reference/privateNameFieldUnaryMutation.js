//// [privateNameFieldUnaryMutation.ts]
class C {
    #test: number = 24;
    constructor() {
        this.#test++;
        this.#test--;
        ++this.#test;
        --this.#test;
    }
    test() {
        this.getInstance().#test++;
        this.getInstance().#test--;
        ++this.getInstance().#test;
        --this.getInstance().#test;
    }
    getInstance() { return new C(); }
}


//// [privateNameFieldUnaryMutation.js]
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var _test;
var C = /** @class */ (function () {
    function C() {
        var _a, _b;
        _test.set(this, 24);
        _a = __classPrivateFieldGet(this, _test), __classPrivateFieldSet(this, _test, _a + 1), _a;
        _b = __classPrivateFieldGet(this, _test), __classPrivateFieldSet(this, _test, _b - 1), _b;
        __classPrivateFieldSet(this, _test, __classPrivateFieldGet(this, _test) + 1);
        __classPrivateFieldSet(this, _test, __classPrivateFieldGet(this, _test) - 1);
    }
    C.prototype.test = function () {
        var _a, _b, _c, _d, _e, _f;
        _a = this.getInstance(), _b = __classPrivateFieldGet(_a, _test), __classPrivateFieldSet(_a, _test, _b + 1), _b;
        _c = this.getInstance(), _d = __classPrivateFieldGet(_c, _test), __classPrivateFieldSet(_c, _test, _d - 1), _d;
        __classPrivateFieldSet(_e = this.getInstance(), _test, __classPrivateFieldGet(_e, _test) + 1);
        __classPrivateFieldSet(_f = this.getInstance(), _test, __classPrivateFieldGet(_f, _test) - 1);
    };
    C.prototype.getInstance = function () { return new C(); };
    return C;
}());
_test = new WeakMap();
