//_.map([], fn);
//_([]).map(fn)
(function(){
    var root = typeof self == 'object' && self.self === self && self ||
            typeof global == 'object' && global.global === global && global ||
            this ||
            {};
    var _ = function(obj) {
        if (obj instanceof _) {
            return obj;
        }
        if (!(this instanceof _)) return new _(obj);
        this._wrapped = obj;

    };
    var push = Array.prototype.push;
     
    if (typeof exports != 'undefined' && !exports.nodeType) {
        if (typeof module != 'undefined' && !module.nodeType && module.exports) {
            exports = module.exports = _;
        }
        exports._ = _;
        } else {
        root._ = _;
    }

    _.isFunction = function(obj) {
        return typeof obj == 'function' || false;
    };


    var optimizeCb = function(func, context, argCount) {
        if (context === void 0) return func;
        switch (argCount == null ? 3 : argCount) {
          case 1: return function(value) {
            return func.call(context, value);
          };
          case 3: return function(value, index, collection) {
            return func.call(context, value, index, collection);
          };
          case 4: return function(accumulator, value, index, collection) {
            return func.call(context, accumulator, value, index, collection);
          };
        }
        return function() {
          return func.apply(context, arguments);
        };
      };



    _.functions  = function(obj) {
        var names = [];
        for (var key in obj) {
          if (_.isFunction(obj[key])) names.push(key);
        }
        return names.sort();
      };
      _.each  = function(obj, iteratee, context) {
        iteratee = optimizeCb(iteratee, context);
        var i, length;
        var keys = Object.keys(obj);
        for (i = 0, length = keys.length; i < length; i++) {
          iteratee(obj[keys[i]], keys[i], obj);
        }
        return obj;
    };
    _.mixin = function(obj) {
        _.each(_.functions(obj), function(name) {
          var func = _[name] = obj[name];
          _.prototype[name] = function() {
            var args = [this._wrapped];
            push.apply(args, arguments);
            return func.apply(_, args);
          };
        });
        return _;
      };

    _.map = function(obj, iteratee) {
        let keys = Object.keys(obj);
        for (i = 0, length = keys.length; i < length; i++) {
            iteratee(obj[keys[i]], keys[i], obj);
        }
    };

    _.throttle = function(fn, wati) {
        var timeout = null;
        if(timeout) {
            return;
        }
        timeout = setTimeout(fn, wait);
    };
    _.mixin(_);

})();
