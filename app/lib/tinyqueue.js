(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.TinyQueue = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

module.exports = TinyQueue;

function TinyQueue(data, compare) {
    if (!(this instanceof TinyQueue)) return new TinyQueue(data, compare);

    this.data = data || [];
    this.length = this.data.length;
    this.compare = compare || defaultCompare;

    if (data) for (var i = Math.floor(this.length / 2); i >= 0; i--) this._down(i);
}

function defaultCompare(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}

TinyQueue.prototype = {

    push: function (item) {
        this.data.push(item);
        this.length++;
        this._up(this.length - 1);
    },

    pop: function () {
        var top = this.data[0];
        this.data[0] = this.data[this.length - 1];
        this.length--;
        this.data.pop();
        this._down(0);
        return top;
    },

    peek: function () {
        return this.data[0];
    },

    _up: function (pos) {
        var data = this.data,
            compare = this.compare;

        while (pos > 0) {
            var parent = Math.floor((pos - 1) / 2);
            if (compare(data[pos], data[parent]) < 0) {
                swap(data, parent, pos);
                pos = parent;

            } else break;
        }
    },

    _down: function (pos) {
        var data = this.data,
            compare = this.compare,
            len = this.length;

        while (true) {
            var left = 2 * pos + 1,
                right = left + 1,
                min = pos;

            if (left < len && compare(data[left], data[min]) < 0) min = left;
            if (right < len && compare(data[right], data[min]) < 0) min = right;

            if (min === pos) return;

            swap(data, min, pos);
            pos = min;
        }
    }
};

function swap(data, i, j) {
    var tmp = data[i];
    data[i] = data[j];
    data[j] = tmp;
}

},{}]},{},[1])(1)
});