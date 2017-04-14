/**
 * Created by WebStorm
 * User:maomao,http://www.mmcode.top
 * Data:2017/4/11
 * Time:15:31
 */
// Inspired by D3.js、Echart、RChart.
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
        typeof define === 'function' && define.amd ? define(['exports'], factory) :
            (factory((global.hescEchart = global.hescEchart || {})));
}(this, (function (exports) {
    'use strict';
    var version = "0.0.1";
    var xhtml = "http://www.w3.org/1999/xhtml";

    var namespaces = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: xhtml,
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
    };

    var namespace = function(name) {
        var prefix = name += "", i = prefix.indexOf(":");
        if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
        return namespaces.hasOwnProperty(prefix) ? {space: namespaces[prefix], local: name} : name;
    };
    //exports.event = null;



    /*
     * *Json ---------------------------------------------------------------------------------
     */
    //json property USED
    var type$1 = function (defaultMimeType, response) {
        return function (url, callback) {
            var r = request(url).mimeType(defaultMimeType).response(response);
            if (callback != null) {
                if (typeof callback !== "function") throw new Error("invalid callback: " + callback);
                return r.get(callback);
            }
            return r;
        };
    };
    //request USED
    function dispatch() {
        for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
            if (!(t = arguments[i] + "") || (t in _)) throw new Error("illegal type: " + t);
            _[t] = [];
        }
        return new Dispatch(_);
    }
    //Dispatch.prototype USED
    function parseTypenames(typenames, types) {
        return typenames.trim().split(/^|\s+/).map(function(t) {
            var name = "", i = t.indexOf(".");
            if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
            if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
            return {type: t, name: name};
        });
    }
    //Dispatch.prototype USED
    function set(type, name, callback) {
        for (var i = 0, n = type.length; i < n; ++i) {
            if (type[i].name === name) {
                type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
                break;
            }
        }
        if (callback != null) type.push({name: name, value: callback});
        return type;
    }
    //request USED
    function Dispatch(_) {
        this._ = _;
    }
    //request USED
    Dispatch.prototype = dispatch.prototype = {
        constructor: Dispatch,
        on: function(typename, callback) {
            var _ = this._,
                T = parseTypenames(typename + "", _),
                t,
                i = -1,
                n = T.length;

            // If no callback was specified, return the callback of the given type and name.
            if (arguments.length < 2) {
                while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
                return;
            }

            // If a type was specified, set the callback for the given type and name.
            // Otherwise, if a null callback was specified, remove callbacks of the given name.
            if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
            while (++i < n) {
                if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
                else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
            }

            return this;
        },
        copy: function() {
            var copy = {}, _ = this._;
            for (var t in _) copy[t] = _[t].slice();
            return new Dispatch(copy);
        },
        call: function(type, that) {
            if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
            if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
            for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
        },
        apply: function(type, that, args) {
            if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
            for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
        }
    };
    var prefix = "$";
    //request USED
    function Map() {
    }
    //request USED
    Map.prototype = map$1.prototype = {
        constructor: Map,
        has: function (key) {
            return (prefix + key) in this;
        },
        get: function (key) {
            return this[prefix + key];
        },
        set: function (key, value) {
            this[prefix + key] = value;
            return this;
        },
        remove: function (key) {
            var property = prefix + key;
            return property in this && delete this[property];
        },
        clear: function () {
            for (var property in this) if (property[0] === prefix) delete this[property];
        },
        keys: function () {
            var keys = [];
            for (var property in this) if (property[0] === prefix) keys.push(property.slice(1));
            return keys;
        },
        values: function () {
            var values = [];
            for (var property in this) if (property[0] === prefix) values.push(this[property]);
            return values;
        },
        entries: function () {
            var entries = [];
            for (var property in this) if (property[0] === prefix) entries.push({
                key: property.slice(1),
                value: this[property]
            });
            return entries;
        },
        size: function () {
            var size = 0;
            for (var property in this) if (property[0] === prefix) ++size;
            return size;
        },
        empty: function () {
            for (var property in this) if (property[0] === prefix) return false;
            return true;
        },
        each: function (f) {
            for (var property in this) if (property[0] === prefix) f(this[property], property.slice(1), this);
        }
    };
    //request USED
    function map$1(object, f) {
        var map = new Map;

        // Copy constructor.
        if (object instanceof Map) object.each(function (value, key) {
            map.set(key, value);
        });

        // Index array by numeric index or specified key function.
        else if (Array.isArray(object)) {
            var i = -1,
                n = object.length,
                o;

            if (f == null) while (++i < n) map.set(i, object[i]);
            else while (++i < n) map.set(f(o = object[i], i, object), o);
        }

        // Convert object to map.
        else if (object) for (var key in object) map.set(key, object[key]);

        return map;
    }
    //type$1 USED
    var request = function (url, callback) {
        var request,
            event = dispatch("beforesend", "progress", "load", "error"),
            mimeType,
            headers = map$1(),
            xhr = new XMLHttpRequest,
            user = null,
            password = null,
            response,
            responseType,
            timeout = 0;

        // If IE does not support CORS, use XDomainRequest.
        if (typeof XDomainRequest !== "undefined"
            && !("withCredentials" in xhr)
            && /^(http(s)?:)?\/\//.test(url)) xhr = new XDomainRequest;

        "onload" in xhr
            ? xhr.onload = xhr.onerror = xhr.ontimeout = respond
            : xhr.onreadystatechange = function (o) {
            xhr.readyState > 3 && respond(o);
        };

        function respond(o) {
            var status = xhr.status, result;
            if (!status && hasResponse(xhr)
                || status >= 200 && status < 300
                || status === 304) {
                if (response) {
                    try {
                        result = response.call(request, xhr);
                    } catch (e) {
                        event.call("error", request, e);
                        return;
                    }
                } else {
                    result = xhr;
                }
                event.call("load", request, result);
            } else {
                event.call("error", request, o);
            }
        }

        xhr.onprogress = function (e) {
            event.call("progress", request, e);
        };

        request = {
            header: function (name, value) {
                name = (name + "").toLowerCase();
                if (arguments.length < 2) return headers.get(name);
                if (value == null) headers.remove(name);
                else headers.set(name, value + "");
                return request;
            },

            // If mimeType is non-null and no Accept header is set, a default is used.
            mimeType: function (value) {
                if (!arguments.length) return mimeType;
                mimeType = value == null ? null : value + "";
                return request;
            },

            // Specifies what type the response value should take;
            // for instance, arraybuffer, blob, document, or text.
            responseType: function (value) {
                if (!arguments.length) return responseType;
                responseType = value;
                return request;
            },

            timeout: function (value) {
                if (!arguments.length) return timeout;
                timeout = +value;
                return request;
            },

            user: function (value) {
                return arguments.length < 1 ? user : (user = value == null ? null : value + "", request);
            },

            password: function (value) {
                return arguments.length < 1 ? password : (password = value == null ? null : value + "", request);
            },

            // Specify how to convert the response content to a specific type;
            // changes the callback value on "load" events.
            response: function (value) {
                response = value;
                return request;
            },

            // Alias for send("GET", …).
            get: function (data, callback) {
                return request.send("GET", data, callback);
            },

            // Alias for send("POST", …).
            post: function (data, callback) {
                return request.send("POST", data, callback);
            },

            // If callback is non-null, it will be used for error and load events.
            send: function (method, data, callback) {
                xhr.open(method, url, true, user, password);
                if (mimeType != null && !headers.has("accept")) headers.set("accept", mimeType + ",*/*");
                if (xhr.setRequestHeader) headers.each(function (value, name) {
                    xhr.setRequestHeader(name, value);
                });
                if (mimeType != null && xhr.overrideMimeType) xhr.overrideMimeType(mimeType);
                if (responseType != null) xhr.responseType = responseType;
                if (timeout > 0) xhr.timeout = timeout;
                if (callback == null && typeof data === "function") callback = data, data = null;
                if (callback != null && callback.length === 1) callback = fixCallback(callback);
                if (callback != null) request.on("error", callback).on("load", function (xhr) {
                    callback(null, xhr);
                });
                event.call("beforesend", request, xhr);
                xhr.send(data == null ? null : data);
                return request;
            },

            abort: function () {
                xhr.abort();
                return request;
            },

            on: function () {
                var value = event.on.apply(event, arguments);
                return value === event ? request : value;
            }
        };

        if (callback != null) {
            if (typeof callback !== "function") throw new Error("invalid callback: " + callback);
            return request.get(callback);
        }

        return request;
    };

    /**
     * select --------------------------------------------------------------------------------
     */
    function Selection(groups, parents) {
        this._groups = groups;
        this._parents = parents;
    }
    function selection() {
        return new Selection([[document.documentElement]], root);
    }
    var selection_select = function(select) {
        if (typeof select !== "function") select = selector(select);

        for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
            for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
                if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
                    if ("__data__" in node) subnode.__data__ = node.__data__;
                    subgroup[i] = subnode;
                }
            }
        }

        return new Selection(subgroups, this._parents);
    };
    var selection_attr = function(name, value) {
        var fullname = namespace(name);

        if (arguments.length < 2) {
            var node = this.node();
            return fullname.local
                ? node.getAttributeNS(fullname.space, fullname.local)
                : node.getAttribute(fullname);
        }

        return this.each((value == null
            ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
                ? (fullname.local ? attrFunctionNS : attrFunction)
                : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
    };
    var selection_node = function() {

        for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
            for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
                var node = group[i];
                if (node) return node;
            }
        }

        return null;
    };
    var selection_each = function(callback) {

        for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
            for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
                if (node = group[i]) callback.call(node, node.__data__, i, group);
            }
        }

        return this;
    };
    function attrConstant(name, value) {
        return function() {
            this.setAttribute(name, value);
        };
    }
    Selection.prototype = selection.prototype = {
        constructor: Selection,
        select: selection_select,
        attr: selection_attr,
        node: selection_node,
        each: selection_each,
    };

    /**
     * Module---------------------------------------------------------------------------------
     */
    var json = type$1("application/json", function (xhr) {
        return JSON.parse(xhr.responseText);
    });
    //修改d3.select方法至自定义select
    // var select = function(selector) {
    //     return typeof selector === "string"
    //         ? new Selection([[document.querySelector(selector)]], [document.documentElement])
    //         : new Selection([[selector]], root);
    // };
    // var selectID=null;
    // // var selectFun=function(selector){
    // //     selectID=selector;
    // //     return this;
    // // }
    //
    //
    // exports.select = selectFun;
    exports.json = json;
  //  exports.selectID=selectID;
    // exports.map = map$1;
    //  exports.dispatch = dispatch;
    // Object.defineProperty(exports, '__esModule', { value: true });

})));