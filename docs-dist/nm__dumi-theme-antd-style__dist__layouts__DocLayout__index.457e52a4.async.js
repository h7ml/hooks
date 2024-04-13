(self.webpackChunk_dext7r_hooks = self.webpackChunk_dext7r_hooks || []).push([
  [4860],
  {
    15503: function (V, F, s) {
      'use strict';
      s.d(F, {
        Z: function () {
          return y;
        },
      });
      var g = s(91010),
        L = s(50959),
        u = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z',
                },
              },
            ],
          },
          name: 'search',
          theme: 'outlined',
        },
        x = u,
        O = s(82017),
        w = function (o, M) {
          return L.createElement(O.Z, (0, g.Z)({}, o, { ref: M, icon: x }));
        },
        l = L.forwardRef(w),
        y = l;
    },
    17545: function (V, F, s) {
      'use strict';
      s.d(F, {
        Z: function () {
          return W;
        },
      });
      var g = s(53229),
        L = s.n(g),
        u = s(60344),
        x = s.n(u),
        O = s(44968),
        w = s.n(O),
        l = function (N) {
          return function (H) {
            for (
              var te = new RegExp(N.key + '-([a-zA-Z0-9-_]+)', 'gm'),
                E = { html: H, ids: [], css: '' },
                j,
                A = {};
              (j = te.exec(H)) !== null;

            )
              A[j[1]] === void 0 && (A[j[1]] = !0);
            return (
              (E.ids = Object.keys(N.inserted).filter(function (_) {
                if (
                  (A[_] !== void 0 || N.registered[N.key + '-' + _] === void 0) &&
                  N.inserted[_] !== !0
                )
                  return (E.css += N.inserted[_]), !0;
              })),
              E
            );
          };
        },
        y = function (N) {
          return function (H) {
            for (
              var te = new RegExp(N.key + '-([a-zA-Z0-9-_]+)', 'gm'),
                E = { html: H, styles: [] },
                j,
                A = {};
              (j = te.exec(H)) !== null;

            )
              A[j[1]] === void 0 && (A[j[1]] = !0);
            var _ = [],
              I = '';
            return (
              Object.keys(N.inserted).forEach(function (T) {
                (A[T] !== void 0 || N.registered[N.key + '-' + T] === void 0) &&
                  N.inserted[T] !== !0 &&
                  (N.registered[N.key + '-' + T]
                    ? (_.push(T), (I += N.inserted[T]))
                    : E.styles.push({ key: N.key + '-global', ids: [T], css: N.inserted[T] }));
              }),
              E.styles.push({ key: N.key, ids: _, css: I }),
              E
            );
          };
        };
      function p(R, N, H, te) {
        return '<style data-emotion="' + R + ' ' + N + '"' + te + '>' + H + '</style>';
      }
      var o = function (N, H) {
          return function (te) {
            var E = N.inserted,
              j = N.key,
              A = N.registered,
              _ = new RegExp('<|' + j + '-([a-zA-Z0-9-_]+)', 'gm'),
              I = {},
              T = '',
              z = '',
              K = '';
            for (var ae in E)
              if (E.hasOwnProperty(ae)) {
                var we = E[ae],
                  Le = j + '-' + ae;
                we !== !0 && A[Le] === void 0 && ((K += we), (z += ' ' + ae));
              }
            K !== '' && (T = p(j, z.substring(1), K, H));
            for (var b = '', v = '', G = 0, oe; (oe = _.exec(te)) !== null; ) {
              if (oe[0] === '<') {
                b !== '' && ((T += p(j, b.substring(1), v, H)), (b = ''), (v = '')),
                  (T += te.substring(G, oe.index)),
                  (G = oe.index);
                continue;
              }
              var de = oe[1],
                Be = E[de];
              Be === !0 || Be === void 0 || I[de] || ((I[de] = !0), (v += Be), (b += ' ' + de));
            }
            return (T += te.substring(G)), T;
          };
        },
        M = function (N, H) {
          return function () {
            var te = {},
              E = x()(),
              j = L()(
                function (_) {
                  var I = _[0],
                    T = _[1];
                  if (I === 'open') {
                    for (
                      var z = '',
                        K = {},
                        ae,
                        we = T.toString(),
                        Le = new RegExp(N.key + '-([a-zA-Z0-9-_]+)', 'gm');
                      (ae = Le.exec(we)) !== null;

                    )
                      ae !== null && te[ae[1]] === void 0 && (K[ae[1]] = !0);
                    Object.keys(N.inserted).forEach(function (b) {
                      N.inserted[b] !== !0 &&
                        te[b] === void 0 &&
                        (K[b] === !0 ||
                          (N.registered[N.key + '-' + b] === void 0 && (K[b] = !0))) &&
                        ((te[b] = !0), (z += N.inserted[b]));
                    }),
                      z !== '' &&
                        this.queue(
                          '<style data-emotion="' +
                            N.key +
                            ' ' +
                            Object.keys(K).join(' ') +
                            '"' +
                            H +
                            '>' +
                            z +
                            '</style>',
                        );
                  }
                  this.queue(T);
                },
                function () {
                  this.queue(null);
                },
              );
            return w()(E, j);
          };
        },
        P = function (N, H) {
          return function (te) {
            var E = '';
            return (
              te.styles.forEach(function (j) {
                E += p(j.key, j.ids.join(' '), j.css, H);
              }),
              E
            );
          };
        };
      function W(R) {
        R.compat !== !0 && (R.compat = !0);
        var N = R.nonce !== void 0 ? ' nonce="' + R.nonce + '"' : '';
        return {
          extractCritical: l(R),
          extractCriticalToChunks: y(R),
          renderStylesToString: o(R, N),
          renderStylesToNodeStream: M(R, N),
          constructStyleTagsFromChunks: P(R, N),
        };
      }
    },
    65415: function (V, F) {
      'use strict';
      (F.byteLength = l), (F.toByteArray = p), (F.fromByteArray = P);
      for (
        var s = [],
          g = [],
          L = typeof Uint8Array != 'undefined' ? Uint8Array : Array,
          u = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          x = 0,
          O = u.length;
        x < O;
        ++x
      )
        (s[x] = u[x]), (g[u.charCodeAt(x)] = x);
      (g['-'.charCodeAt(0)] = 62), (g['_'.charCodeAt(0)] = 63);
      function w(W) {
        var R = W.length;
        if (R % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
        var N = W.indexOf('=');
        N === -1 && (N = R);
        var H = N === R ? 0 : 4 - (N % 4);
        return [N, H];
      }
      function l(W) {
        var R = w(W),
          N = R[0],
          H = R[1];
        return ((N + H) * 3) / 4 - H;
      }
      function y(W, R, N) {
        return ((R + N) * 3) / 4 - N;
      }
      function p(W) {
        var R,
          N = w(W),
          H = N[0],
          te = N[1],
          E = new L(y(W, H, te)),
          j = 0,
          A = te > 0 ? H - 4 : H,
          _;
        for (_ = 0; _ < A; _ += 4)
          (R =
            (g[W.charCodeAt(_)] << 18) |
            (g[W.charCodeAt(_ + 1)] << 12) |
            (g[W.charCodeAt(_ + 2)] << 6) |
            g[W.charCodeAt(_ + 3)]),
            (E[j++] = (R >> 16) & 255),
            (E[j++] = (R >> 8) & 255),
            (E[j++] = R & 255);
        return (
          te === 2 &&
            ((R = (g[W.charCodeAt(_)] << 2) | (g[W.charCodeAt(_ + 1)] >> 4)), (E[j++] = R & 255)),
          te === 1 &&
            ((R =
              (g[W.charCodeAt(_)] << 10) |
              (g[W.charCodeAt(_ + 1)] << 4) |
              (g[W.charCodeAt(_ + 2)] >> 2)),
            (E[j++] = (R >> 8) & 255),
            (E[j++] = R & 255)),
          E
        );
      }
      function o(W) {
        return s[(W >> 18) & 63] + s[(W >> 12) & 63] + s[(W >> 6) & 63] + s[W & 63];
      }
      function M(W, R, N) {
        for (var H, te = [], E = R; E < N; E += 3)
          (H = ((W[E] << 16) & 16711680) + ((W[E + 1] << 8) & 65280) + (W[E + 2] & 255)),
            te.push(o(H));
        return te.join('');
      }
      function P(W) {
        for (var R, N = W.length, H = N % 3, te = [], E = 16383, j = 0, A = N - H; j < A; j += E)
          te.push(M(W, j, j + E > A ? A : j + E));
        return (
          H === 1
            ? ((R = W[N - 1]), te.push(s[R >> 2] + s[(R << 4) & 63] + '=='))
            : H === 2 &&
              ((R = (W[N - 2] << 8) + W[N - 1]),
              te.push(s[R >> 10] + s[(R >> 4) & 63] + s[(R << 2) & 63] + '=')),
          te.join('')
        );
      }
    },
    66391: function (V, F, s) {
      var g = s(91620).Buffer,
        L = Object.prototype.toString,
        u =
          typeof g.alloc == 'function' &&
          typeof g.allocUnsafe == 'function' &&
          typeof g.from == 'function';
      function x(y) {
        return L.call(y).slice(8, -1) === 'ArrayBuffer';
      }
      function O(y, p, o) {
        p >>>= 0;
        var M = y.byteLength - p;
        if (M < 0) throw new RangeError("'offset' is out of bounds");
        if (o === void 0) o = M;
        else if (((o >>>= 0), o > M)) throw new RangeError("'length' is out of bounds");
        return u ? g.from(y.slice(p, p + o)) : new g(new Uint8Array(y.slice(p, p + o)));
      }
      function w(y, p) {
        if (((typeof p != 'string' || p === '') && (p = 'utf8'), !g.isEncoding(p)))
          throw new TypeError('"encoding" must be a valid string encoding');
        return u ? g.from(y, p) : new g(y, p);
      }
      function l(y, p, o) {
        if (typeof y == 'number') throw new TypeError('"value" argument must not be a number');
        return x(y) ? O(y, p, o) : typeof y == 'string' ? w(y, p) : u ? g.from(y) : new g(y);
      }
      V.exports = l;
    },
    91620: function (V, F, s) {
      'use strict';
      var g = s(65415),
        L = s(30551),
        u =
          typeof Symbol == 'function' && typeof Symbol.for == 'function'
            ? Symbol.for('nodejs.util.inspect.custom')
            : null;
      (F.Buffer = l), (F.SlowBuffer = E), (F.INSPECT_MAX_BYTES = 50);
      var x = 2147483647;
      (F.kMaxLength = x),
        (l.TYPED_ARRAY_SUPPORT = O()),
        !l.TYPED_ARRAY_SUPPORT &&
          typeof console != 'undefined' &&
          typeof console.error == 'function' &&
          console.error(
            'This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.',
          );
      function O() {
        try {
          var c = new Uint8Array(1),
            t = {
              foo: function () {
                return 42;
              },
            };
          return (
            Object.setPrototypeOf(t, Uint8Array.prototype),
            Object.setPrototypeOf(c, t),
            c.foo() === 42
          );
        } catch (r) {
          return !1;
        }
      }
      Object.defineProperty(l.prototype, 'parent', {
        enumerable: !0,
        get: function () {
          if (l.isBuffer(this)) return this.buffer;
        },
      }),
        Object.defineProperty(l.prototype, 'offset', {
          enumerable: !0,
          get: function () {
            if (l.isBuffer(this)) return this.byteOffset;
          },
        });
      function w(c) {
        if (c > x) throw new RangeError('The value "' + c + '" is invalid for option "size"');
        var t = new Uint8Array(c);
        return Object.setPrototypeOf(t, l.prototype), t;
      }
      function l(c, t, r) {
        if (typeof c == 'number') {
          if (typeof t == 'string')
            throw new TypeError(
              'The "string" argument must be of type string. Received type number',
            );
          return M(c);
        }
        return y(c, t, r);
      }
      l.poolSize = 8192;
      function y(c, t, r) {
        if (typeof c == 'string') return P(c, t);
        if (ArrayBuffer.isView(c)) return R(c);
        if (c == null)
          throw new TypeError(
            'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
              typeof c,
          );
        if (
          q(c, ArrayBuffer) ||
          (c && q(c.buffer, ArrayBuffer)) ||
          (typeof SharedArrayBuffer != 'undefined' &&
            (q(c, SharedArrayBuffer) || (c && q(c.buffer, SharedArrayBuffer))))
        )
          return N(c, t, r);
        if (typeof c == 'number')
          throw new TypeError(
            'The "value" argument must not be of type number. Received type number',
          );
        var f = c.valueOf && c.valueOf();
        if (f != null && f !== c) return l.from(f, t, r);
        var D = H(c);
        if (D) return D;
        if (
          typeof Symbol != 'undefined' &&
          Symbol.toPrimitive != null &&
          typeof c[Symbol.toPrimitive] == 'function'
        )
          return l.from(c[Symbol.toPrimitive]('string'), t, r);
        throw new TypeError(
          'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
            typeof c,
        );
      }
      (l.from = function (c, t, r) {
        return y(c, t, r);
      }),
        Object.setPrototypeOf(l.prototype, Uint8Array.prototype),
        Object.setPrototypeOf(l, Uint8Array);
      function p(c) {
        if (typeof c != 'number') throw new TypeError('"size" argument must be of type number');
        if (c < 0) throw new RangeError('The value "' + c + '" is invalid for option "size"');
      }
      function o(c, t, r) {
        return (
          p(c),
          c <= 0
            ? w(c)
            : t !== void 0
              ? typeof r == 'string'
                ? w(c).fill(t, r)
                : w(c).fill(t)
              : w(c)
        );
      }
      l.alloc = function (c, t, r) {
        return o(c, t, r);
      };
      function M(c) {
        return p(c), w(c < 0 ? 0 : te(c) | 0);
      }
      (l.allocUnsafe = function (c) {
        return M(c);
      }),
        (l.allocUnsafeSlow = function (c) {
          return M(c);
        });
      function P(c, t) {
        if (((typeof t != 'string' || t === '') && (t = 'utf8'), !l.isEncoding(t)))
          throw new TypeError('Unknown encoding: ' + t);
        var r = j(c, t) | 0,
          f = w(r),
          D = f.write(c, t);
        return D !== r && (f = f.slice(0, D)), f;
      }
      function W(c) {
        for (var t = c.length < 0 ? 0 : te(c.length) | 0, r = w(t), f = 0; f < t; f += 1)
          r[f] = c[f] & 255;
        return r;
      }
      function R(c) {
        if (q(c, Uint8Array)) {
          var t = new Uint8Array(c);
          return N(t.buffer, t.byteOffset, t.byteLength);
        }
        return W(c);
      }
      function N(c, t, r) {
        if (t < 0 || c.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
        if (c.byteLength < t + (r || 0))
          throw new RangeError('"length" is outside of buffer bounds');
        var f;
        return (
          t === void 0 && r === void 0
            ? (f = new Uint8Array(c))
            : r === void 0
              ? (f = new Uint8Array(c, t))
              : (f = new Uint8Array(c, t, r)),
          Object.setPrototypeOf(f, l.prototype),
          f
        );
      }
      function H(c) {
        if (l.isBuffer(c)) {
          var t = te(c.length) | 0,
            r = w(t);
          return r.length === 0 || c.copy(r, 0, 0, t), r;
        }
        if (c.length !== void 0) return typeof c.length != 'number' || ue(c.length) ? w(0) : W(c);
        if (c.type === 'Buffer' && Array.isArray(c.data)) return W(c.data);
      }
      function te(c) {
        if (c >= x)
          throw new RangeError(
            'Attempt to allocate Buffer larger than maximum size: 0x' + x.toString(16) + ' bytes',
          );
        return c | 0;
      }
      function E(c) {
        return +c != c && (c = 0), l.alloc(+c);
      }
      (l.isBuffer = function (t) {
        return t != null && t._isBuffer === !0 && t !== l.prototype;
      }),
        (l.compare = function (t, r) {
          if (
            (q(t, Uint8Array) && (t = l.from(t, t.offset, t.byteLength)),
            q(r, Uint8Array) && (r = l.from(r, r.offset, r.byteLength)),
            !l.isBuffer(t) || !l.isBuffer(r))
          )
            throw new TypeError(
              'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array',
            );
          if (t === r) return 0;
          for (var f = t.length, D = r.length, Z = 0, Y = Math.min(f, D); Z < Y; ++Z)
            if (t[Z] !== r[Z]) {
              (f = t[Z]), (D = r[Z]);
              break;
            }
          return f < D ? -1 : D < f ? 1 : 0;
        }),
        (l.isEncoding = function (t) {
          switch (String(t).toLowerCase()) {
            case 'hex':
            case 'utf8':
            case 'utf-8':
            case 'ascii':
            case 'latin1':
            case 'binary':
            case 'base64':
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return !0;
            default:
              return !1;
          }
        }),
        (l.concat = function (t, r) {
          if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
          if (t.length === 0) return l.alloc(0);
          var f;
          if (r === void 0) for (r = 0, f = 0; f < t.length; ++f) r += t[f].length;
          var D = l.allocUnsafe(r),
            Z = 0;
          for (f = 0; f < t.length; ++f) {
            var Y = t[f];
            if (q(Y, Uint8Array))
              Z + Y.length > D.length
                ? l.from(Y).copy(D, Z)
                : Uint8Array.prototype.set.call(D, Y, Z);
            else if (l.isBuffer(Y)) Y.copy(D, Z);
            else throw new TypeError('"list" argument must be an Array of Buffers');
            Z += Y.length;
          }
          return D;
        });
      function j(c, t) {
        if (l.isBuffer(c)) return c.length;
        if (ArrayBuffer.isView(c) || q(c, ArrayBuffer)) return c.byteLength;
        if (typeof c != 'string')
          throw new TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
              typeof c,
          );
        var r = c.length,
          f = arguments.length > 2 && arguments[2] === !0;
        if (!f && r === 0) return 0;
        for (var D = !1; ; )
          switch (t) {
            case 'ascii':
            case 'latin1':
            case 'binary':
              return r;
            case 'utf8':
            case 'utf-8':
              return Qe(c).length;
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return r * 2;
            case 'hex':
              return r >>> 1;
            case 'base64':
              return m(c).length;
            default:
              if (D) return f ? -1 : Qe(c).length;
              (t = ('' + t).toLowerCase()), (D = !0);
          }
      }
      l.byteLength = j;
      function A(c, t, r) {
        var f = !1;
        if (
          ((t === void 0 || t < 0) && (t = 0),
          t > this.length ||
            ((r === void 0 || r > this.length) && (r = this.length), r <= 0) ||
            ((r >>>= 0), (t >>>= 0), r <= t))
        )
          return '';
        for (c || (c = 'utf8'); ; )
          switch (c) {
            case 'hex':
              return ge(this, t, r);
            case 'utf8':
            case 'utf-8':
              return v(this, t, r);
            case 'ascii':
              return de(this, t, r);
            case 'latin1':
            case 'binary':
              return Be(this, t, r);
            case 'base64':
              return b(this, t, r);
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return B(this, t, r);
            default:
              if (f) throw new TypeError('Unknown encoding: ' + c);
              (c = (c + '').toLowerCase()), (f = !0);
          }
      }
      l.prototype._isBuffer = !0;
      function _(c, t, r) {
        var f = c[t];
        (c[t] = c[r]), (c[r] = f);
      }
      (l.prototype.swap16 = function () {
        var t = this.length;
        if (t % 2 !== 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
        for (var r = 0; r < t; r += 2) _(this, r, r + 1);
        return this;
      }),
        (l.prototype.swap32 = function () {
          var t = this.length;
          if (t % 4 !== 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
          for (var r = 0; r < t; r += 4) _(this, r, r + 3), _(this, r + 1, r + 2);
          return this;
        }),
        (l.prototype.swap64 = function () {
          var t = this.length;
          if (t % 8 !== 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
          for (var r = 0; r < t; r += 8)
            _(this, r, r + 7), _(this, r + 1, r + 6), _(this, r + 2, r + 5), _(this, r + 3, r + 4);
          return this;
        }),
        (l.prototype.toString = function () {
          var t = this.length;
          return t === 0 ? '' : arguments.length === 0 ? v(this, 0, t) : A.apply(this, arguments);
        }),
        (l.prototype.toLocaleString = l.prototype.toString),
        (l.prototype.equals = function (t) {
          if (!l.isBuffer(t)) throw new TypeError('Argument must be a Buffer');
          return this === t ? !0 : l.compare(this, t) === 0;
        }),
        (l.prototype.inspect = function () {
          var t = '',
            r = F.INSPECT_MAX_BYTES;
          return (
            (t = this.toString('hex', 0, r)
              .replace(/(.{2})/g, '$1 ')
              .trim()),
            this.length > r && (t += ' ... '),
            '<Buffer ' + t + '>'
          );
        }),
        u && (l.prototype[u] = l.prototype.inspect),
        (l.prototype.compare = function (t, r, f, D, Z) {
          if ((q(t, Uint8Array) && (t = l.from(t, t.offset, t.byteLength)), !l.isBuffer(t)))
            throw new TypeError(
              'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                typeof t,
            );
          if (
            (r === void 0 && (r = 0),
            f === void 0 && (f = t ? t.length : 0),
            D === void 0 && (D = 0),
            Z === void 0 && (Z = this.length),
            r < 0 || f > t.length || D < 0 || Z > this.length)
          )
            throw new RangeError('out of range index');
          if (D >= Z && r >= f) return 0;
          if (D >= Z) return -1;
          if (r >= f) return 1;
          if (((r >>>= 0), (f >>>= 0), (D >>>= 0), (Z >>>= 0), this === t)) return 0;
          for (
            var Y = Z - D,
              Ce = f - r,
              Oe = Math.min(Y, Ce),
              Te = this.slice(D, Z),
              ce = t.slice(r, f),
              ye = 0;
            ye < Oe;
            ++ye
          )
            if (Te[ye] !== ce[ye]) {
              (Y = Te[ye]), (Ce = ce[ye]);
              break;
            }
          return Y < Ce ? -1 : Ce < Y ? 1 : 0;
        });
      function I(c, t, r, f, D) {
        if (c.length === 0) return -1;
        if (
          (typeof r == 'string'
            ? ((f = r), (r = 0))
            : r > 2147483647
              ? (r = 2147483647)
              : r < -2147483648 && (r = -2147483648),
          (r = +r),
          ue(r) && (r = D ? 0 : c.length - 1),
          r < 0 && (r = c.length + r),
          r >= c.length)
        ) {
          if (D) return -1;
          r = c.length - 1;
        } else if (r < 0)
          if (D) r = 0;
          else return -1;
        if ((typeof t == 'string' && (t = l.from(t, f)), l.isBuffer(t)))
          return t.length === 0 ? -1 : T(c, t, r, f, D);
        if (typeof t == 'number')
          return (
            (t = t & 255),
            typeof Uint8Array.prototype.indexOf == 'function'
              ? D
                ? Uint8Array.prototype.indexOf.call(c, t, r)
                : Uint8Array.prototype.lastIndexOf.call(c, t, r)
              : T(c, [t], r, f, D)
          );
        throw new TypeError('val must be string, number or Buffer');
      }
      function T(c, t, r, f, D) {
        var Z = 1,
          Y = c.length,
          Ce = t.length;
        if (
          f !== void 0 &&
          ((f = String(f).toLowerCase()),
          f === 'ucs2' || f === 'ucs-2' || f === 'utf16le' || f === 'utf-16le')
        ) {
          if (c.length < 2 || t.length < 2) return -1;
          (Z = 2), (Y /= 2), (Ce /= 2), (r /= 2);
        }
        function Oe(bt, xt) {
          return Z === 1 ? bt[xt] : bt.readUInt16BE(xt * Z);
        }
        var Te;
        if (D) {
          var ce = -1;
          for (Te = r; Te < Y; Te++)
            if (Oe(c, Te) === Oe(t, ce === -1 ? 0 : Te - ce)) {
              if ((ce === -1 && (ce = Te), Te - ce + 1 === Ce)) return ce * Z;
            } else ce !== -1 && (Te -= Te - ce), (ce = -1);
        } else
          for (r + Ce > Y && (r = Y - Ce), Te = r; Te >= 0; Te--) {
            for (var ye = !0, qe = 0; qe < Ce; qe++)
              if (Oe(c, Te + qe) !== Oe(t, qe)) {
                ye = !1;
                break;
              }
            if (ye) return Te;
          }
        return -1;
      }
      (l.prototype.includes = function (t, r, f) {
        return this.indexOf(t, r, f) !== -1;
      }),
        (l.prototype.indexOf = function (t, r, f) {
          return I(this, t, r, f, !0);
        }),
        (l.prototype.lastIndexOf = function (t, r, f) {
          return I(this, t, r, f, !1);
        });
      function z(c, t, r, f) {
        r = Number(r) || 0;
        var D = c.length - r;
        f ? ((f = Number(f)), f > D && (f = D)) : (f = D);
        var Z = t.length;
        f > Z / 2 && (f = Z / 2);
        for (var Y = 0; Y < f; ++Y) {
          var Ce = parseInt(t.substr(Y * 2, 2), 16);
          if (ue(Ce)) return Y;
          c[r + Y] = Ce;
        }
        return Y;
      }
      function K(c, t, r, f) {
        return J(Qe(t, c.length - r), c, r, f);
      }
      function ae(c, t, r, f) {
        return J(Xe(t), c, r, f);
      }
      function we(c, t, r, f) {
        return J(m(t), c, r, f);
      }
      function Le(c, t, r, f) {
        return J(h(t, c.length - r), c, r, f);
      }
      (l.prototype.write = function (t, r, f, D) {
        if (r === void 0) (D = 'utf8'), (f = this.length), (r = 0);
        else if (f === void 0 && typeof r == 'string') (D = r), (f = this.length), (r = 0);
        else if (isFinite(r))
          (r = r >>> 0),
            isFinite(f) ? ((f = f >>> 0), D === void 0 && (D = 'utf8')) : ((D = f), (f = void 0));
        else
          throw new Error(
            'Buffer.write(string, encoding, offset[, length]) is no longer supported',
          );
        var Z = this.length - r;
        if (
          ((f === void 0 || f > Z) && (f = Z),
          (t.length > 0 && (f < 0 || r < 0)) || r > this.length)
        )
          throw new RangeError('Attempt to write outside buffer bounds');
        D || (D = 'utf8');
        for (var Y = !1; ; )
          switch (D) {
            case 'hex':
              return z(this, t, r, f);
            case 'utf8':
            case 'utf-8':
              return K(this, t, r, f);
            case 'ascii':
            case 'latin1':
            case 'binary':
              return ae(this, t, r, f);
            case 'base64':
              return we(this, t, r, f);
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return Le(this, t, r, f);
            default:
              if (Y) throw new TypeError('Unknown encoding: ' + D);
              (D = ('' + D).toLowerCase()), (Y = !0);
          }
      }),
        (l.prototype.toJSON = function () {
          return { type: 'Buffer', data: Array.prototype.slice.call(this._arr || this, 0) };
        });
      function b(c, t, r) {
        return t === 0 && r === c.length ? g.fromByteArray(c) : g.fromByteArray(c.slice(t, r));
      }
      function v(c, t, r) {
        r = Math.min(c.length, r);
        for (var f = [], D = t; D < r; ) {
          var Z = c[D],
            Y = null,
            Ce = Z > 239 ? 4 : Z > 223 ? 3 : Z > 191 ? 2 : 1;
          if (D + Ce <= r) {
            var Oe, Te, ce, ye;
            switch (Ce) {
              case 1:
                Z < 128 && (Y = Z);
                break;
              case 2:
                (Oe = c[D + 1]),
                  (Oe & 192) === 128 && ((ye = ((Z & 31) << 6) | (Oe & 63)), ye > 127 && (Y = ye));
                break;
              case 3:
                (Oe = c[D + 1]),
                  (Te = c[D + 2]),
                  (Oe & 192) === 128 &&
                    (Te & 192) === 128 &&
                    ((ye = ((Z & 15) << 12) | ((Oe & 63) << 6) | (Te & 63)),
                    ye > 2047 && (ye < 55296 || ye > 57343) && (Y = ye));
                break;
              case 4:
                (Oe = c[D + 1]),
                  (Te = c[D + 2]),
                  (ce = c[D + 3]),
                  (Oe & 192) === 128 &&
                    (Te & 192) === 128 &&
                    (ce & 192) === 128 &&
                    ((ye = ((Z & 15) << 18) | ((Oe & 63) << 12) | ((Te & 63) << 6) | (ce & 63)),
                    ye > 65535 && ye < 1114112 && (Y = ye));
            }
          }
          Y === null
            ? ((Y = 65533), (Ce = 1))
            : Y > 65535 &&
              ((Y -= 65536), f.push(((Y >>> 10) & 1023) | 55296), (Y = 56320 | (Y & 1023))),
            f.push(Y),
            (D += Ce);
        }
        return oe(f);
      }
      var G = 4096;
      function oe(c) {
        var t = c.length;
        if (t <= G) return String.fromCharCode.apply(String, c);
        for (var r = '', f = 0; f < t; )
          r += String.fromCharCode.apply(String, c.slice(f, (f += G)));
        return r;
      }
      function de(c, t, r) {
        var f = '';
        r = Math.min(c.length, r);
        for (var D = t; D < r; ++D) f += String.fromCharCode(c[D] & 127);
        return f;
      }
      function Be(c, t, r) {
        var f = '';
        r = Math.min(c.length, r);
        for (var D = t; D < r; ++D) f += String.fromCharCode(c[D]);
        return f;
      }
      function ge(c, t, r) {
        var f = c.length;
        (!t || t < 0) && (t = 0), (!r || r < 0 || r > f) && (r = f);
        for (var D = '', Z = t; Z < r; ++Z) D += he[c[Z]];
        return D;
      }
      function B(c, t, r) {
        for (var f = c.slice(t, r), D = '', Z = 0; Z < f.length - 1; Z += 2)
          D += String.fromCharCode(f[Z] + f[Z + 1] * 256);
        return D;
      }
      l.prototype.slice = function (t, r) {
        var f = this.length;
        (t = ~~t),
          (r = r === void 0 ? f : ~~r),
          t < 0 ? ((t += f), t < 0 && (t = 0)) : t > f && (t = f),
          r < 0 ? ((r += f), r < 0 && (r = 0)) : r > f && (r = f),
          r < t && (r = t);
        var D = this.subarray(t, r);
        return Object.setPrototypeOf(D, l.prototype), D;
      };
      function S(c, t, r) {
        if (c % 1 !== 0 || c < 0) throw new RangeError('offset is not uint');
        if (c + t > r) throw new RangeError('Trying to access beyond buffer length');
      }
      (l.prototype.readUintLE = l.prototype.readUIntLE =
        function (t, r, f) {
          (t = t >>> 0), (r = r >>> 0), f || S(t, r, this.length);
          for (var D = this[t], Z = 1, Y = 0; ++Y < r && (Z *= 256); ) D += this[t + Y] * Z;
          return D;
        }),
        (l.prototype.readUintBE = l.prototype.readUIntBE =
          function (t, r, f) {
            (t = t >>> 0), (r = r >>> 0), f || S(t, r, this.length);
            for (var D = this[t + --r], Z = 1; r > 0 && (Z *= 256); ) D += this[t + --r] * Z;
            return D;
          }),
        (l.prototype.readUint8 = l.prototype.readUInt8 =
          function (t, r) {
            return (t = t >>> 0), r || S(t, 1, this.length), this[t];
          }),
        (l.prototype.readUint16LE = l.prototype.readUInt16LE =
          function (t, r) {
            return (t = t >>> 0), r || S(t, 2, this.length), this[t] | (this[t + 1] << 8);
          }),
        (l.prototype.readUint16BE = l.prototype.readUInt16BE =
          function (t, r) {
            return (t = t >>> 0), r || S(t, 2, this.length), (this[t] << 8) | this[t + 1];
          }),
        (l.prototype.readUint32LE = l.prototype.readUInt32LE =
          function (t, r) {
            return (
              (t = t >>> 0),
              r || S(t, 4, this.length),
              (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) + this[t + 3] * 16777216
            );
          }),
        (l.prototype.readUint32BE = l.prototype.readUInt32BE =
          function (t, r) {
            return (
              (t = t >>> 0),
              r || S(t, 4, this.length),
              this[t] * 16777216 + ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
            );
          }),
        (l.prototype.readIntLE = function (t, r, f) {
          (t = t >>> 0), (r = r >>> 0), f || S(t, r, this.length);
          for (var D = this[t], Z = 1, Y = 0; ++Y < r && (Z *= 256); ) D += this[t + Y] * Z;
          return (Z *= 128), D >= Z && (D -= Math.pow(2, 8 * r)), D;
        }),
        (l.prototype.readIntBE = function (t, r, f) {
          (t = t >>> 0), (r = r >>> 0), f || S(t, r, this.length);
          for (var D = r, Z = 1, Y = this[t + --D]; D > 0 && (Z *= 256); ) Y += this[t + --D] * Z;
          return (Z *= 128), Y >= Z && (Y -= Math.pow(2, 8 * r)), Y;
        }),
        (l.prototype.readInt8 = function (t, r) {
          return (
            (t = t >>> 0),
            r || S(t, 1, this.length),
            this[t] & 128 ? (255 - this[t] + 1) * -1 : this[t]
          );
        }),
        (l.prototype.readInt16LE = function (t, r) {
          (t = t >>> 0), r || S(t, 2, this.length);
          var f = this[t] | (this[t + 1] << 8);
          return f & 32768 ? f | 4294901760 : f;
        }),
        (l.prototype.readInt16BE = function (t, r) {
          (t = t >>> 0), r || S(t, 2, this.length);
          var f = this[t + 1] | (this[t] << 8);
          return f & 32768 ? f | 4294901760 : f;
        }),
        (l.prototype.readInt32LE = function (t, r) {
          return (
            (t = t >>> 0),
            r || S(t, 4, this.length),
            this[t] | (this[t + 1] << 8) | (this[t + 2] << 16) | (this[t + 3] << 24)
          );
        }),
        (l.prototype.readInt32BE = function (t, r) {
          return (
            (t = t >>> 0),
            r || S(t, 4, this.length),
            (this[t] << 24) | (this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3]
          );
        }),
        (l.prototype.readFloatLE = function (t, r) {
          return (t = t >>> 0), r || S(t, 4, this.length), L.read(this, t, !0, 23, 4);
        }),
        (l.prototype.readFloatBE = function (t, r) {
          return (t = t >>> 0), r || S(t, 4, this.length), L.read(this, t, !1, 23, 4);
        }),
        (l.prototype.readDoubleLE = function (t, r) {
          return (t = t >>> 0), r || S(t, 8, this.length), L.read(this, t, !0, 52, 8);
        }),
        (l.prototype.readDoubleBE = function (t, r) {
          return (t = t >>> 0), r || S(t, 8, this.length), L.read(this, t, !1, 52, 8);
        });
      function X(c, t, r, f, D, Z) {
        if (!l.isBuffer(c)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (t > D || t < Z) throw new RangeError('"value" argument is out of bounds');
        if (r + f > c.length) throw new RangeError('Index out of range');
      }
      (l.prototype.writeUintLE = l.prototype.writeUIntLE =
        function (t, r, f, D) {
          if (((t = +t), (r = r >>> 0), (f = f >>> 0), !D)) {
            var Z = Math.pow(2, 8 * f) - 1;
            X(this, t, r, f, Z, 0);
          }
          var Y = 1,
            Ce = 0;
          for (this[r] = t & 255; ++Ce < f && (Y *= 256); ) this[r + Ce] = (t / Y) & 255;
          return r + f;
        }),
        (l.prototype.writeUintBE = l.prototype.writeUIntBE =
          function (t, r, f, D) {
            if (((t = +t), (r = r >>> 0), (f = f >>> 0), !D)) {
              var Z = Math.pow(2, 8 * f) - 1;
              X(this, t, r, f, Z, 0);
            }
            var Y = f - 1,
              Ce = 1;
            for (this[r + Y] = t & 255; --Y >= 0 && (Ce *= 256); ) this[r + Y] = (t / Ce) & 255;
            return r + f;
          }),
        (l.prototype.writeUint8 = l.prototype.writeUInt8 =
          function (t, r, f) {
            return (
              (t = +t), (r = r >>> 0), f || X(this, t, r, 1, 255, 0), (this[r] = t & 255), r + 1
            );
          }),
        (l.prototype.writeUint16LE = l.prototype.writeUInt16LE =
          function (t, r, f) {
            return (
              (t = +t),
              (r = r >>> 0),
              f || X(this, t, r, 2, 65535, 0),
              (this[r] = t & 255),
              (this[r + 1] = t >>> 8),
              r + 2
            );
          }),
        (l.prototype.writeUint16BE = l.prototype.writeUInt16BE =
          function (t, r, f) {
            return (
              (t = +t),
              (r = r >>> 0),
              f || X(this, t, r, 2, 65535, 0),
              (this[r] = t >>> 8),
              (this[r + 1] = t & 255),
              r + 2
            );
          }),
        (l.prototype.writeUint32LE = l.prototype.writeUInt32LE =
          function (t, r, f) {
            return (
              (t = +t),
              (r = r >>> 0),
              f || X(this, t, r, 4, 4294967295, 0),
              (this[r + 3] = t >>> 24),
              (this[r + 2] = t >>> 16),
              (this[r + 1] = t >>> 8),
              (this[r] = t & 255),
              r + 4
            );
          }),
        (l.prototype.writeUint32BE = l.prototype.writeUInt32BE =
          function (t, r, f) {
            return (
              (t = +t),
              (r = r >>> 0),
              f || X(this, t, r, 4, 4294967295, 0),
              (this[r] = t >>> 24),
              (this[r + 1] = t >>> 16),
              (this[r + 2] = t >>> 8),
              (this[r + 3] = t & 255),
              r + 4
            );
          }),
        (l.prototype.writeIntLE = function (t, r, f, D) {
          if (((t = +t), (r = r >>> 0), !D)) {
            var Z = Math.pow(2, 8 * f - 1);
            X(this, t, r, f, Z - 1, -Z);
          }
          var Y = 0,
            Ce = 1,
            Oe = 0;
          for (this[r] = t & 255; ++Y < f && (Ce *= 256); )
            t < 0 && Oe === 0 && this[r + Y - 1] !== 0 && (Oe = 1),
              (this[r + Y] = (((t / Ce) >> 0) - Oe) & 255);
          return r + f;
        }),
        (l.prototype.writeIntBE = function (t, r, f, D) {
          if (((t = +t), (r = r >>> 0), !D)) {
            var Z = Math.pow(2, 8 * f - 1);
            X(this, t, r, f, Z - 1, -Z);
          }
          var Y = f - 1,
            Ce = 1,
            Oe = 0;
          for (this[r + Y] = t & 255; --Y >= 0 && (Ce *= 256); )
            t < 0 && Oe === 0 && this[r + Y + 1] !== 0 && (Oe = 1),
              (this[r + Y] = (((t / Ce) >> 0) - Oe) & 255);
          return r + f;
        }),
        (l.prototype.writeInt8 = function (t, r, f) {
          return (
            (t = +t),
            (r = r >>> 0),
            f || X(this, t, r, 1, 127, -128),
            t < 0 && (t = 255 + t + 1),
            (this[r] = t & 255),
            r + 1
          );
        }),
        (l.prototype.writeInt16LE = function (t, r, f) {
          return (
            (t = +t),
            (r = r >>> 0),
            f || X(this, t, r, 2, 32767, -32768),
            (this[r] = t & 255),
            (this[r + 1] = t >>> 8),
            r + 2
          );
        }),
        (l.prototype.writeInt16BE = function (t, r, f) {
          return (
            (t = +t),
            (r = r >>> 0),
            f || X(this, t, r, 2, 32767, -32768),
            (this[r] = t >>> 8),
            (this[r + 1] = t & 255),
            r + 2
          );
        }),
        (l.prototype.writeInt32LE = function (t, r, f) {
          return (
            (t = +t),
            (r = r >>> 0),
            f || X(this, t, r, 4, 2147483647, -2147483648),
            (this[r] = t & 255),
            (this[r + 1] = t >>> 8),
            (this[r + 2] = t >>> 16),
            (this[r + 3] = t >>> 24),
            r + 4
          );
        }),
        (l.prototype.writeInt32BE = function (t, r, f) {
          return (
            (t = +t),
            (r = r >>> 0),
            f || X(this, t, r, 4, 2147483647, -2147483648),
            t < 0 && (t = 4294967295 + t + 1),
            (this[r] = t >>> 24),
            (this[r + 1] = t >>> 16),
            (this[r + 2] = t >>> 8),
            (this[r + 3] = t & 255),
            r + 4
          );
        });
      function se(c, t, r, f, D, Z) {
        if (r + f > c.length) throw new RangeError('Index out of range');
        if (r < 0) throw new RangeError('Index out of range');
      }
      function me(c, t, r, f, D) {
        return (
          (t = +t),
          (r = r >>> 0),
          D || se(c, t, r, 4, 34028234663852886e22, -34028234663852886e22),
          L.write(c, t, r, f, 23, 4),
          r + 4
        );
      }
      (l.prototype.writeFloatLE = function (t, r, f) {
        return me(this, t, r, !0, f);
      }),
        (l.prototype.writeFloatBE = function (t, r, f) {
          return me(this, t, r, !1, f);
        });
      function Se(c, t, r, f, D) {
        return (
          (t = +t),
          (r = r >>> 0),
          D || se(c, t, r, 8, 17976931348623157e292, -17976931348623157e292),
          L.write(c, t, r, f, 52, 8),
          r + 8
        );
      }
      (l.prototype.writeDoubleLE = function (t, r, f) {
        return Se(this, t, r, !0, f);
      }),
        (l.prototype.writeDoubleBE = function (t, r, f) {
          return Se(this, t, r, !1, f);
        }),
        (l.prototype.copy = function (t, r, f, D) {
          if (!l.isBuffer(t)) throw new TypeError('argument should be a Buffer');
          if (
            (f || (f = 0),
            !D && D !== 0 && (D = this.length),
            r >= t.length && (r = t.length),
            r || (r = 0),
            D > 0 && D < f && (D = f),
            D === f || t.length === 0 || this.length === 0)
          )
            return 0;
          if (r < 0) throw new RangeError('targetStart out of bounds');
          if (f < 0 || f >= this.length) throw new RangeError('Index out of range');
          if (D < 0) throw new RangeError('sourceEnd out of bounds');
          D > this.length && (D = this.length), t.length - r < D - f && (D = t.length - r + f);
          var Z = D - f;
          return (
            this === t && typeof Uint8Array.prototype.copyWithin == 'function'
              ? this.copyWithin(r, f, D)
              : Uint8Array.prototype.set.call(t, this.subarray(f, D), r),
            Z
          );
        }),
        (l.prototype.fill = function (t, r, f, D) {
          if (typeof t == 'string') {
            if (
              (typeof r == 'string'
                ? ((D = r), (r = 0), (f = this.length))
                : typeof f == 'string' && ((D = f), (f = this.length)),
              D !== void 0 && typeof D != 'string')
            )
              throw new TypeError('encoding must be a string');
            if (typeof D == 'string' && !l.isEncoding(D))
              throw new TypeError('Unknown encoding: ' + D);
            if (t.length === 1) {
              var Z = t.charCodeAt(0);
              ((D === 'utf8' && Z < 128) || D === 'latin1') && (t = Z);
            }
          } else typeof t == 'number' ? (t = t & 255) : typeof t == 'boolean' && (t = Number(t));
          if (r < 0 || this.length < r || this.length < f)
            throw new RangeError('Out of range index');
          if (f <= r) return this;
          (r = r >>> 0), (f = f === void 0 ? this.length : f >>> 0), t || (t = 0);
          var Y;
          if (typeof t == 'number') for (Y = r; Y < f; ++Y) this[Y] = t;
          else {
            var Ce = l.isBuffer(t) ? t : l.from(t, D),
              Oe = Ce.length;
            if (Oe === 0)
              throw new TypeError('The value "' + t + '" is invalid for argument "value"');
            for (Y = 0; Y < f - r; ++Y) this[Y + r] = Ce[Y % Oe];
          }
          return this;
        });
      var Ue = /[^+/0-9A-Za-z-_]/g;
      function ze(c) {
        if (((c = c.split('=')[0]), (c = c.trim().replace(Ue, '')), c.length < 2)) return '';
        for (; c.length % 4 !== 0; ) c = c + '=';
        return c;
      }
      function Qe(c, t) {
        t = t || 1 / 0;
        for (var r, f = c.length, D = null, Z = [], Y = 0; Y < f; ++Y) {
          if (((r = c.charCodeAt(Y)), r > 55295 && r < 57344)) {
            if (!D) {
              if (r > 56319) {
                (t -= 3) > -1 && Z.push(239, 191, 189);
                continue;
              } else if (Y + 1 === f) {
                (t -= 3) > -1 && Z.push(239, 191, 189);
                continue;
              }
              D = r;
              continue;
            }
            if (r < 56320) {
              (t -= 3) > -1 && Z.push(239, 191, 189), (D = r);
              continue;
            }
            r = (((D - 55296) << 10) | (r - 56320)) + 65536;
          } else D && (t -= 3) > -1 && Z.push(239, 191, 189);
          if (((D = null), r < 128)) {
            if ((t -= 1) < 0) break;
            Z.push(r);
          } else if (r < 2048) {
            if ((t -= 2) < 0) break;
            Z.push((r >> 6) | 192, (r & 63) | 128);
          } else if (r < 65536) {
            if ((t -= 3) < 0) break;
            Z.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (r & 63) | 128);
          } else if (r < 1114112) {
            if ((t -= 4) < 0) break;
            Z.push((r >> 18) | 240, ((r >> 12) & 63) | 128, ((r >> 6) & 63) | 128, (r & 63) | 128);
          } else throw new Error('Invalid code point');
        }
        return Z;
      }
      function Xe(c) {
        for (var t = [], r = 0; r < c.length; ++r) t.push(c.charCodeAt(r) & 255);
        return t;
      }
      function h(c, t) {
        for (var r, f, D, Z = [], Y = 0; Y < c.length && !((t -= 2) < 0); ++Y)
          (r = c.charCodeAt(Y)), (f = r >> 8), (D = r % 256), Z.push(D), Z.push(f);
        return Z;
      }
      function m(c) {
        return g.toByteArray(ze(c));
      }
      function J(c, t, r, f) {
        for (var D = 0; D < f && !(D + r >= t.length || D >= c.length); ++D) t[D + r] = c[D];
        return D;
      }
      function q(c, t) {
        return (
          c instanceof t ||
          (c != null &&
            c.constructor != null &&
            c.constructor.name != null &&
            c.constructor.name === t.name)
        );
      }
      function ue(c) {
        return c !== c;
      }
      var he = (function () {
        for (var c = '0123456789abcdef', t = new Array(256), r = 0; r < 16; ++r)
          for (var f = r * 16, D = 0; D < 16; ++D) t[f + D] = c[r] + c[D];
        return t;
      })();
    },
    62790: function (V, F, s) {
      function g(H) {
        return Array.isArray ? Array.isArray(H) : N(H) === '[object Array]';
      }
      F.isArray = g;
      function L(H) {
        return typeof H == 'boolean';
      }
      F.isBoolean = L;
      function u(H) {
        return H === null;
      }
      F.isNull = u;
      function x(H) {
        return H == null;
      }
      F.isNullOrUndefined = x;
      function O(H) {
        return typeof H == 'number';
      }
      F.isNumber = O;
      function w(H) {
        return typeof H == 'string';
      }
      F.isString = w;
      function l(H) {
        return typeof H == 'symbol';
      }
      F.isSymbol = l;
      function y(H) {
        return H === void 0;
      }
      F.isUndefined = y;
      function p(H) {
        return N(H) === '[object RegExp]';
      }
      F.isRegExp = p;
      function o(H) {
        return typeof H == 'object' && H !== null;
      }
      F.isObject = o;
      function M(H) {
        return N(H) === '[object Date]';
      }
      F.isDate = M;
      function P(H) {
        return N(H) === '[object Error]' || H instanceof Error;
      }
      F.isError = P;
      function W(H) {
        return typeof H == 'function';
      }
      F.isFunction = W;
      function R(H) {
        return (
          H === null ||
          typeof H == 'boolean' ||
          typeof H == 'number' ||
          typeof H == 'string' ||
          typeof H == 'symbol' ||
          typeof H == 'undefined'
        );
      }
      (F.isPrimitive = R), (F.isBuffer = s(91620).Buffer.isBuffer);
      function N(H) {
        return Object.prototype.toString.call(H);
      }
    },
    52662: function (V, F, s) {
      'use strict';
      s.r(F),
        s.d(F, {
          default: function () {
            return ka;
          },
        });
      var g = s(81275),
        L = s(67410),
        u = s(11527),
        x = function (e) {
          return {
            ids: Object.keys(e.inserted),
            css: Object.values(e.inserted)
              .filter(function (n) {
                return typeof n == 'string';
              })
              .join(''),
          };
        },
        O = (0, g.Df)(),
        w = function (e, n) {
          var a,
            d = typeof (n == null ? void 0 : n.includeAntd) != 'undefined' ? n.includeAntd : !0,
            C = (a = n == null ? void 0 : n.antdCache) !== null && a !== void 0 ? a : O,
            k = (0, g.EN)(C),
            $ = k.replace(/<style\s[^>]*>/g, '').replace(/<\/style>/g, ''),
            U = {
              style: (0, u.jsx)(
                'style',
                { 'data-antd-version': L.Z, dangerouslySetInnerHTML: { __html: $ } },
                'antd',
              ),
              ids: Array.from(C.cache.keys()),
              key: 'antd',
              css: $,
              tag: '<style data-antd-version="'.concat(L.Z, '">').concat($, '</style>'),
            },
            ee = s.g.__ANTD_STYLE_CACHE_MANAGER_FOR_SSR__.getCacheList().map(function (Q) {
              var le = s(17545).Z,
                ie = e ? le(Q).extractCritical(e) : x(Q);
              if (!ie.css) return null;
              var ne = ie.css,
                re = ie.ids;
              return {
                key: Q.key,
                style: (0, u.jsx)(
                  'style',
                  {
                    'data-emotion': ''.concat(Q.key, ' ').concat(re.join(' ')),
                    dangerouslySetInnerHTML: { __html: ne },
                  },
                  Q.key,
                ),
                css: ne,
                ids: re,
                tag: '<style data-emotion="'
                  .concat(Q.key, ' ')
                  .concat(ie.ids.join(' '), '">')
                  .concat(ie.css, '</style>'),
              };
            });
          return $ && d && ee.unshift(U), ee.filter(Boolean);
        };
      w.cache = O;
      var l = s(50283),
        y = s(3341),
        p = s.n(y),
        o = s(50959),
        M = s(51411),
        P = s(83288),
        W = s(50446),
        R = s(68185),
        N = s(99938),
        H = s(66292),
        te = s.n(H);
      function E(i) {
        var e = (0, o.useRef)(i);
        return (e.current = i), e;
      }
      var j = E,
        A = function (i) {
          return i !== null && typeof i == 'object';
        },
        _ = function (i) {
          return typeof i == 'function';
        },
        I = function (i) {
          return typeof i == 'string';
        },
        T = function (i) {
          return typeof i == 'boolean';
        },
        z = function (i) {
          return typeof i == 'number';
        },
        K = function (i) {
          return typeof i == 'undefined';
        },
        ae = !1,
        we = ae,
        Le = function (i) {
          we &&
            (_(i) ||
              console.error('useUnmount expected parameter is a function, got '.concat(typeof i)));
          var e = j(i);
          (0, o.useEffect)(function () {
            return function () {
              e.current();
            };
          }, []);
        },
        b = Le;
      function v(i, e) {
        var n;
        we &&
          (_(i) ||
            console.error('useDebounceFn expected parameter is a function, got '.concat(typeof i)));
        var a = j(i),
          d = (n = e == null ? void 0 : e.wait) !== null && n !== void 0 ? n : 1e3,
          C = (0, o.useMemo)(function () {
            return te()(
              function () {
                for (var k = [], $ = 0; $ < arguments.length; $++) k[$] = arguments[$];
                return a.current.apply(a, (0, N.ev)([], (0, N.CR)(k), !1));
              },
              d,
              e,
            );
          }, []);
        return (
          b(function () {
            C.cancel();
          }),
          { run: C, cancel: C.cancel, flush: C.flush }
        );
      }
      var G = v,
        oe = function (i) {
          return function (e, n) {
            var a = (0, o.useRef)(!1);
            i(function () {
              return function () {
                a.current = !1;
              };
            }, []),
              i(function () {
                if (!a.current) a.current = !0;
                else return e();
              }, n);
          };
        },
        de = null,
        Be = oe(o.useEffect);
      function ge(i, e, n) {
        var a = (0, N.CR)((0, o.useState)({}), 2),
          d = a[0],
          C = a[1],
          k = G(function () {
            C({});
          }, n).run;
        (0, o.useEffect)(function () {
          return k();
        }, e),
          Be(i, [d]);
      }
      var B = ge,
        S = s(80734),
        X = ['setLoading'],
        se = ['setLoading'],
        me = typeof window != 'undefined',
        Se = {},
        Ue = function (e, n) {
          (0, o.useEffect)(function () {
            o.startTransition(function () {
              e();
            });
          }, n);
        },
        ze = function (e, n) {
          B(
            function () {
              e();
            },
            n,
            { wait: 32, maxWait: 96 },
          );
        },
        Qe = typeof o.startTransition == 'function' ? Ue : ze,
        Xe = function (e, n, a) {
          var d = (0, S.AC)(),
            C =
              a ||
              function (k, $) {
                return d.setState((0, R.Z)({}, k, $));
              };
          !me && !Se[e] && (C(e, n), (Se[e] = !0)),
            Qe(
              function () {
                C(e, n);
              },
              [n],
            );
        },
        h = { 'zh-CN': '\u9996\u9875', 'en-US': 'Home' },
        m = function (e) {
          return { title: h[e], link: '/', activePath: '/' };
        },
        J = (0, o.memo)(function () {
          var i = (0, l.WF)(),
            e = (0, l.tx)(),
            n = (0, l.eL)(),
            a = (0, l.zh)(),
            d = (0, l.OK)(),
            C = (0, l.TH)(),
            k = (0, l.bU)(),
            $ = (0, S.AC)();
          return (
            Xe('siteData', i, function () {
              var U = i.setLoading,
                ee = (0, W.Z)(i, X),
                Q = $.getState(),
                le = Q.siteData,
                ie = le.setLoading,
                ne = (0, W.Z)(le, se);
              p()(ee, ne) || $.setState({ siteData: i });
            }),
            Xe('sidebar', e),
            Xe('routeMeta', n),
            Xe('location', C),
            Xe('tabMeta', a),
            Xe('locale', k),
            Xe('navData', d, function () {
              var U = i.themeConfig.hideHomeNav ? d : [m(k.id)].concat((0, P.Z)(d));
              $.setState({ navData: U });
            }),
            null
          );
        }),
        q = s(10319),
        ue = s(33743),
        he = s(67269),
        c = s(40570),
        t = s(56343),
        r = s(91010),
        f = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z',
                },
              },
            ],
          },
          name: 'arrow-left',
          theme: 'outlined',
        },
        D = f,
        Z = s(82017),
        Y = function (e, n) {
          return o.createElement(Z.Z, (0, r.Z)({}, e, { ref: n, icon: D }));
        },
        Ce = o.forwardRef(Y),
        Oe = Ce,
        Te = s(22337),
        ce = s(86910),
        ye = s(97442),
        qe,
        bt,
        xt,
        Wt,
        gr = (0, ye.kc)(function (i) {
          var e = i.token,
            n = i.css;
          return {
            container: n(
              qe ||
                (qe = (0, ce.Z)([
                  `
    background: `,
                  `;
    padding: 16px 24px;
    border-radius: 8px;
    cursor: pointer;

    min-width: 250px;
    &:hover {
      background: `,
                  `;
    }
  `,
                ])),
              e.colorBgContainer,
              e.colorFillTertiary,
            ),
            nav: n(
              bt ||
                (bt = (0, ce.Z)([
                  `
    color: `,
                  `;
    font-size: 12px;
  `,
                ])),
              e.colorTextTertiary,
            ),
            title: n(
              xt ||
                (xt = (0, ce.Z)([
                  `
    font-size: 16px;
  `,
                ])),
            ),
            alignmentEnd: n(
              Wt ||
                (Wt = (0, ce.Z)([
                  `
    justify-content: flex-end;
  `,
                ])),
            ),
          };
        }),
        vr = function (e) {
          var n = e.title,
            a = e.link,
            d = e.type,
            C = gr(),
            k = C.styles,
            $ = C.cx,
            U = (0, l.YB)(),
            ee = (0, o.useMemo)(
              function () {
                switch (d) {
                  case 'prev':
                    return (0, u.jsxs)(u.Fragment, {
                      children: [
                        (0, u.jsx)(Oe, {}),
                        ' ',
                        U.formatMessage({ id: 'content.footer.actions.previous' }),
                      ],
                    });
                  case 'next':
                    return (0, u.jsxs)(u.Fragment, {
                      children: [
                        U.formatMessage({ id: 'content.footer.actions.next' }),
                        ' ',
                        (0, u.jsx)(Te.Z, {}),
                      ],
                    });
                }
              },
              [d],
            );
          return (0, u.jsx)(l.rU, {
            to: a,
            children: (0, u.jsxs)(ue.D, {
              className: k.container,
              gap: 8,
              children: [
                (0, u.jsx)(ue.D, {
                  horizontal: !0,
                  gap: 4,
                  className: $(k.nav, d === 'next' && k.alignmentEnd),
                  children: ee,
                }),
                (0, u.jsx)(ue.D, {
                  horizontal: !0,
                  className: $(k.title, d === 'next' && k.alignmentEnd),
                  children: n,
                }),
              ],
            }),
          });
        },
        Ut = (0, o.memo)(vr);
      function zt(i, e) {
        var n = Object.keys(i);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(i);
          e &&
            (a = a.filter(function (d) {
              return Object.getOwnPropertyDescriptor(i, d).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function Zt(i) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e] != null ? arguments[e] : {};
          e % 2
            ? zt(Object(n), !0).forEach(function (a) {
                (0, R.Z)(i, a, n[a]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(n))
              : zt(Object(n)).forEach(function (a) {
                  Object.defineProperty(i, a, Object.getOwnPropertyDescriptor(n, a));
                });
        }
        return i;
      }
      var yr = function () {
          var e = (0, S.HX)(t.e9, p()),
            n = e.prev,
            a = e.next,
            d = (0, q.F)(),
            C = d.mobile;
          return (0, u.jsxs)(ue.D, {
            horizontal: !C,
            gap: C ? 12 : 0,
            distribution: 'space-between',
            style: { margin: C ? 12 : 0 },
            children: [
              n ? (0, u.jsx)(Ut, Zt({ type: 'prev' }, n)) : (0, u.jsx)('div', {}),
              a ? (0, u.jsx)(Ut, Zt({ type: 'next' }, a)) : (0, u.jsx)('div', {}),
            ],
          });
        },
        br = (0, o.memo)(yr),
        Vt,
        xr = (0, ye.kc)(function (i) {
          var e = i.token,
            n = i.responsive,
            a = i.isDarkMode,
            d = i.css;
          return {
            content: d(
              Vt ||
                (Vt = (0, ce.Z)([
                  `
    min-height: 400px;
    flex: 1;
    width: 100%;
    box-sizing: border-box;

    padding: 24px 48px;
    border-radius: 10px;
    background-color: `,
                  `;
    box-shadow: `,
                  `;

    &:has([data-page-tabs='true']) {
      padding-top: 8px;
    }

    `,
                  ` {
      padding: 8px 16px;
      border-radius: 0;
    }

    .markdown {
      color: `,
                  `;

      h1,
      h2,
      h3 {
        color: `,
                  `;
      }
      p {
        line-height: 1.8;
      }

      // hyperlink
      a {
        color: `,
                  `;

        &:hover {
          color: `,
                  `;
        }

        &:active {
          color: `,
                  `;
        }
      }

      img {
        max-width: 100%;

        opacity: `,
                  `;
      }

      > [data-code-type='highlighter'] {
        pre {
          margin: 8px 0 !important;
        }
      }
      // inline code
      > :not([data-code-type='highlighter']) code {
        padding: 2px 6px;

        //FIXME: \u7B49\u4E0B\u4E00\u7248 token \u4F18\u5316\u5347\u7EA7
        color: `,
                  `;
        background: `,
                  `;
        border-radius: 4px;
      }

      // pre tag
      pre {
        font-size: 14px;
        padding-left: 24px;
        padding-right: 24px;
      }

      // table
      table {
        width: 100%;
        border-spacing: 1px;
      }

      th {
        background: `,
                  `;
      }

      tr {
      }
      th,
      td {
        padding-block-start: 10px;
        padding-block-end: 10px;
        padding-inline-start: 16px;
        padding-inline-end: 16px;
        border-bottom: 1px solid `,
                  `;
      }

      // blockquote
      blockquote {
        font-style: italic;

        margin: 16px 0;
        padding: 0 12px;
        color: `,
                  `;
        border-left: 3px solid `,
                  `;
      }

      // list
      ul li {
        line-height: 1.8;
      }

      // anchor of headings
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        > a[aria-hidden]:first-child {
          float: left;
          width: 20px;
          padding-inline-end: 4px;
          margin-inline-start: -24px;
          color: `,
                  `;
          // hide phantom blank node
          font-size: 0;
          text-align: right;
          line-height: inherit;

          &:hover {
            border: 0;
          }

          > .icon-link::before {
            content: '#';
            color: `,
                  `;
            font-size: 20px;
          }
        }

        &:not(:hover) > a[aria-hidden]:first-child > .icon-link {
          visibility: hidden;
        }
      }
    }
  `,
                ])),
              e.colorBgContainer,
              e.boxShadowTertiary,
              n.mobile,
              a ? e.colorTextSecondary : e.colorText,
              e.colorText,
              e.colorLink,
              e.colorLinkHover,
              e.colorLinkActive,
              a ? 0.8 : 1,
              a ? e['cyan-7'] : e.colorPrimaryText,
              a ? e['cyan-1'] : e.colorPrimaryBg,
              e.colorFillTertiary,
              e.colorBorderSecondary,
              e.colorTextDescription,
              e.colorBorder,
              e.colorText,
              e.colorTextTertiary,
            ),
          };
        }),
        wr = function (e) {
          var n = e.children,
            a = (0, S.HX)(function (ee) {
              return ee.siteData.loading;
            }),
            d = xr(),
            C = d.styles,
            k = d.cx,
            $ = (0, q.F)(),
            U = $.mobile;
          return (0, u.jsxs)(ue.D, {
            width: '100%',
            gap: U ? 0 : 24,
            children: [
              (0, u.jsxs)('div', {
                className: k('dumi-antd-style-content', C.content),
                children: [
                  (0, u.jsx)(c.Z, { active: !0, paragraph: !0, loading: a }),
                  (0, u.jsx)('div', { style: { display: a ? 'none' : void 0 }, children: n }),
                ],
              }),
              (0, u.jsx)(br, {}),
            ],
          });
        },
        Sr = (0, o.memo)(wr),
        Cr = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M834.7 279.8l61.3-58.9V208H683.7L532.4 586.4 360.3 208H137.7v12.9l71.6 86.6c7 6.4 10.6 15.8 9.7 25.2V673c2.2 12.3-1.7 24.8-10.3 33.7L128 805v12.7h228.6v-12.9l-80.6-98a39.99 39.99 0 01-11.1-33.7V378.7l200.7 439.2h23.3l172.6-439.2v349.9c0 9.2 0 11.1-6 17.2l-62.1 60.3V819h301.2v-12.9l-59.9-58.9c-5.2-4-7.9-10.7-6.8-17.2V297a18.1 18.1 0 016.8-17.2z',
                },
              },
            ],
          },
          name: 'medium',
          theme: 'outlined',
        },
        Er = Cr,
        jr = function (e, n) {
          return o.createElement(Z.Z, (0, r.Z)({}, e, { ref: n, icon: Er }));
        },
        Or = o.forwardRef(jr),
        kr = Or,
        Dr = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z',
                },
              },
            ],
          },
          name: 'twitter',
          theme: 'outlined',
        },
        Mr = Dr,
        Tr = function (e, n) {
          return o.createElement(Z.Z, (0, r.Z)({}, e, { ref: n, icon: Mr }));
        },
        Ir = o.forwardRef(Tr),
        _r = Ir,
        Br = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M564.7 230.1V803h60l25.2 71.4L756.3 803h131.5V230.1H564.7zm247.7 497h-59.9l-75.1 50.4-17.8-50.4h-18V308.3h170.7v418.8zM526.1 486.9H393.3c2.1-44.9 4.3-104.3 6.6-172.9h130.9l-.1-8.1c0-.6-.2-14.7-2.3-29.1-2.1-15-6.6-34.9-21-34.9H287.8c4.4-20.6 15.7-69.7 29.4-93.8l6.4-11.2-12.9-.7c-.8 0-19.6-.9-41.4 10.6-35.7 19-51.7 56.4-58.7 84.4-18.4 73.1-44.6 123.9-55.7 145.6-3.3 6.4-5.3 10.2-6.2 12.8-1.8 4.9-.8 9.8 2.8 13 10.5 9.5 38.2-2.9 38.5-3 .6-.3 1.3-.6 2.2-1 13.9-6.3 55.1-25 69.8-84.5h56.7c.7 32.2 3.1 138.4 2.9 172.9h-141l-2.1 1.5c-23.1 16.9-30.5 63.2-30.8 65.2l-1.4 9.2h167c-12.3 78.3-26.5 113.4-34 127.4-3.7 7-7.3 14-10.7 20.8-21.3 42.2-43.4 85.8-126.3 153.6-3.6 2.8-7 8-4.8 13.7 2.4 6.3 9.3 9.1 24.6 9.1 5.4 0 11.8-.3 19.4-1 49.9-4.4 100.8-18 135.1-87.6 17-35.1 31.7-71.7 43.9-108.9L497 850l5-12c.8-1.9 19-46.3 5.1-95.9l-.5-1.8-108.1-123-22 16.6c6.4-26.1 10.6-49.9 12.5-71.1h158.7v-8c0-40.1-18.5-63.9-19.2-64.9l-2.4-3z',
                },
              },
            ],
          },
          name: 'zhihu',
          theme: 'outlined',
        },
        Ar = Br,
        Rr = function (e, n) {
          return o.createElement(Z.Z, (0, r.Z)({}, e, { ref: n, icon: Ar }));
        },
        Lr = o.forwardRef(Rr),
        Xt = Lr,
        Nr = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z',
                },
              },
            ],
          },
          name: 'github',
          theme: 'outlined',
        },
        $r = Nr,
        Pr = function (e, n) {
          return o.createElement(Z.Z, (0, r.Z)({}, e, { ref: n, icon: $r }));
        },
        Hr = o.forwardRef(Pr),
        Fr = Hr,
        Wr = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M536.1 273H488c-4.4 0-8 3.6-8 8v275.3c0 2.6 1.2 5 3.3 6.5l165.3 120.7c3.6 2.6 8.6 1.9 11.2-1.7l28.6-39c2.7-3.7 1.9-8.7-1.7-11.2L544.1 528.5V281c0-4.4-3.6-8-8-8zm219.8 75.2l156.8 38.3c5 1.2 9.9-2.6 9.9-7.7l.8-161.5c0-6.7-7.7-10.5-12.9-6.3L752.9 334.1a8 8 0 003 14.1zm167.7 301.1l-56.7-19.5a8 8 0 00-10.1 4.8c-1.9 5.1-3.9 10.1-6 15.1-17.8 42.1-43.3 80-75.9 112.5a353 353 0 01-112.5 75.9 352.18 352.18 0 01-137.7 27.8c-47.8 0-94.1-9.3-137.7-27.8a353 353 0 01-112.5-75.9c-32.5-32.5-58-70.4-75.9-112.5A353.44 353.44 0 01171 512c0-47.8 9.3-94.2 27.8-137.8 17.8-42.1 43.3-80 75.9-112.5a353 353 0 01112.5-75.9C430.6 167.3 477 158 524.8 158s94.1 9.3 137.7 27.8A353 353 0 01775 261.7c10.2 10.3 19.8 21 28.6 32.3l59.8-46.8C784.7 146.6 662.2 81.9 524.6 82 285 82.1 92.6 276.7 95 516.4 97.4 751.9 288.9 942 524.8 942c185.5 0 343.5-117.6 403.7-282.3 1.5-4.2-.7-8.9-4.9-10.4z',
                },
              },
            ],
          },
          name: 'history',
          theme: 'outlined',
        },
        Ur = Wr,
        zr = function (e, n) {
          return o.createElement(Z.Z, (0, r.Z)({}, e, { ref: n, icon: Ur }));
        },
        Zr = o.forwardRef(zr),
        Vr = Zr,
        Xr = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M464 688a48 48 0 1096 0 48 48 0 10-96 0zm72-112c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48zm400-188h-59.3c-2.6 0-5 1.2-6.5 3.3L763.7 538.1l-49.9-68.8a7.92 7.92 0 00-6.5-3.3H648c-6.5 0-10.3 7.4-6.5 12.7l109.2 150.7a16.1 16.1 0 0026 0l165.8-228.7c3.8-5.3 0-12.7-6.5-12.7zm-44 306h-64.2c-5.5 0-10.6 2.9-13.6 7.5a352.2 352.2 0 01-49.8 62.2A355.92 355.92 0 01651.1 840a355 355 0 01-138.7 27.9c-48.1 0-94.8-9.4-138.7-27.9a355.92 355.92 0 01-113.3-76.3A353.06 353.06 0 01184 650.5c-18.6-43.8-28-90.5-28-138.5s9.4-94.7 28-138.5c17.9-42.4 43.6-80.5 76.4-113.2 32.8-32.7 70.9-58.4 113.3-76.3a355 355 0 01138.7-27.9c48.1 0 94.8 9.4 138.7 27.9 42.4 17.9 80.5 43.6 113.3 76.3 19 19 35.6 39.8 49.8 62.2 2.9 4.7 8.1 7.5 13.6 7.5H892c6 0 9.8-6.3 7.2-11.6C828.8 178.5 684.7 82 517.7 80 278.9 77.2 80.5 272.5 80 511.2 79.5 750.1 273.3 944 512.4 944c169.2 0 315.6-97 386.7-238.4A8 8 0 00892 694z',
                },
              },
            ],
          },
          name: 'issues-close',
          theme: 'outlined',
        },
        Gr = Xr,
        Kr = function (e, n) {
          return o.createElement(Z.Z, (0, r.Z)({}, e, { ref: n, icon: Gr }));
        },
        Yr = o.forwardRef(Kr),
        Jr = Yr,
        Qr = s(44567),
        Gt = function () {
          var i = [
              {
                title: '\u76F8\u5173\u8D44\u6E90',
                items: [
                  { title: 'Ant Design Pro', url: 'https://pro.ant.design', openExternal: !0 },
                  {
                    title: 'Ant Design Pro Components',
                    url: 'https://procomponents.ant.design',
                    openExternal: !0,
                  },
                  {
                    title: 'Umi',
                    description: 'React \u5E94\u7528\u5F00\u53D1\u6846\u67B6',
                    url: 'https://umijs.org',
                    openExternal: !0,
                  },
                  {
                    title: 'Dumi',
                    description: '\u7EC4\u4EF6/\u6587\u6863\u7814\u53D1\u5DE5\u5177',
                    url: 'https://d.umijs.org',
                    openExternal: !0,
                  },
                  {
                    title: 'qiankun',
                    description: '\u5FAE\u524D\u7AEF\u6846\u67B6',
                    url: 'https://qiankun.umijs.org',
                    openExternal: !0,
                  },
                ],
              },
              {
                title: '\u793E\u533A',
                items: [
                  {
                    icon: (0, u.jsx)(kr, {}),
                    title: 'Medium',
                    url: 'http://medium.com/ant-design/',
                    openExternal: !0,
                  },
                  {
                    icon: (0, u.jsx)(_r, { style: { color: '#1DA1F2' } }),
                    title: 'Twitter',
                    url: 'http://twitter.com/antdesignui',
                    openExternal: !0,
                  },
                  {
                    icon: (0, u.jsx)('img', {
                      src: 'https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg',
                      alt: 'yuque',
                    }),
                    title: 'Ant Design \u8BED\u96C0\u4E13\u680F',
                    url: 'https://yuque.com/ant-design/ant-design',
                    openExternal: !0,
                  },
                  {
                    icon: (0, u.jsx)(Xt, { style: { color: '#056de8' } }),
                    title: 'Ant Design \u77E5\u4E4E\u4E13\u680F',
                    url: 'https://www.zhihu.com/column/c_1564262000561106944',
                    openExternal: !0,
                  },
                  {
                    icon: (0, u.jsx)(Xt, { style: { color: '#056de8' } }),
                    title: '\u4F53\u9A8C\u79D1\u6280\u4E13\u680F',
                    url: 'http://zhuanlan.zhihu.com/xtech',
                    openExternal: !0,
                  },
                  {
                    icon: (0, u.jsx)('img', {
                      src: 'https://gw.alipayobjects.com/zos/rmsportal/mZBWtboYbnMkTBaRIuWQ.png',
                      alt: 'seeconf',
                    }),
                    title: 'SEE Conf',
                    description: 'SEE Conf-\u8682\u8681\u4F53\u9A8C\u79D1\u6280\u5927\u4F1A',
                    url: 'https://seeconf.antfin.com/',
                    openExternal: !0,
                  },
                ],
              },
              {
                title: '\u5E2E\u52A9',
                items: [
                  {
                    icon: (0, u.jsx)(Fr, {}),
                    title: 'GitHub',
                    url: 'https://github.com/h7ml/hooks.git',
                    openExternal: !0,
                  },
                  {
                    icon: (0, u.jsx)(Vr, {}),
                    title: '\u66F4\u65B0\u65E5\u5FD7',
                    url: '/changelog',
                  },
                  {
                    icon: (0, u.jsx)(Jr, {}),
                    title: '\u8BA8\u8BBA',
                    url: 'https://github.com/h7ml/hooks/issues',
                    openExternal: !0,
                  },
                ],
              },
              {
                icon: (0, u.jsx)('img', {
                  src: 'https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg',
                  alt: 'more products',
                }),
                title: '\u66F4\u591A\u4EA7\u54C1',
                items: [
                  {
                    icon: (0, u.jsx)('img', {
                      src: 'https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg',
                      alt: 'yuque',
                    }),
                    title: '\u8BED\u96C0',
                    url: 'https://yuque.com',
                    description: '\u77E5\u8BC6\u521B\u4F5C\u4E0E\u5206\u4EAB\u5DE5\u5177',
                    openExternal: !0,
                  },
                  {
                    icon: (0, u.jsx)('img', {
                      src: 'https://gw.alipayobjects.com/zos/antfincdn/nc7Fc0XBg5/8a6844f5-a6ed-4630-9177-4fa5d0b7dd47.png',
                      alt: 'AntV',
                    }),
                    title: 'AntV',
                    url: 'https://antv.vision',
                    description: '\u6570\u636E\u53EF\u89C6\u5316\u89E3\u51B3\u65B9\u6848',
                    openExternal: !0,
                  },
                  {
                    icon: (0, u.jsx)('img', { src: 'https://www.eggjs.org/logo.svg', alt: 'Egg' }),
                    title: 'Egg',
                    url: 'https://eggjs.org',
                    description: '\u4F01\u4E1A\u7EA7 Node.js \u6846\u67B6',
                    openExternal: !0,
                  },
                  {
                    icon: (0, u.jsx)('img', {
                      src: 'https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico',
                      alt: 'kitchen',
                    }),
                    title: 'Kitchen',
                    description: 'Sketch \u5DE5\u5177\u96C6',
                    url: 'https://kitchen.alipay.com',
                    openExternal: !0,
                  },
                  {
                    icon: (0, u.jsx)('img', {
                      src: 'https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg',
                      alt: 'xtech',
                    }),
                    title: '\u8682\u8681\u4F53\u9A8C\u79D1\u6280',
                    url: 'https://xtech.antfin.com/',
                    openExternal: !0,
                  },
                ],
              },
            ],
            e = new Date().getFullYear();
          return (0, u.jsx)(Qr.Z, {
            bottom: (0, u.jsxs)('p', {
              children: [
                (0, u.jsx)('a', {
                  href: '/sitemap.xml',
                  target: '_blank',
                  children: '\u7AD9\u70B9\u5730\u56FE',
                }),
                ' ',
                '|\xA9 ',
                e,
                ' h7ml Company. All rights reserved.',
              ],
            }),
            columns: i,
          });
        },
        it = s(30309),
        Kt = s(83110),
        qr = s(64380);
      function Ct(i) {
        var e = i.pathname,
          n = i.current,
          a = i.target,
          d =
            'base' in n
              ? e.replace(n.base.replace(/\/$/, ''), '') || '/'
              : e.replace(new RegExp(''.concat(n.suffix, '$')), '');
        return 'base' in a
          ? ''
              .concat(a.base.replace(/\/$/, ''))
              .concat(d)
              .replace(/([^/])\/$/, '$1')
          : ''.concat(d).concat(a.suffix);
      }
      var ei = {
          'zh-CN': '\u{1F1E8}\u{1F1F3}',
          'en-US': '\u{1F1FA}\u{1F1F8}',
          'jp-JP': '\u{1F1EF}\u{1F1F5}',
          'ko-KR': '\u{1F1F0}\u{1F1F7}',
          'ru-RU': '\u{1F1F7}\u{1F1FA}',
          'es-ES': '\u{1F1EA}\u{1F1F8}',
          'fr-FR': '\u{1F1EB}\u{1F1F7}',
          'de-DE': '\u{1F1E9}\u{1F1EA}',
          'pt-BR': '\u{1F1E7}\u{1F1F7}',
          'it-IT': '\u{1F1EE}\u{1F1F9}',
          'tr-TR': '\u{1F1F9}\u{1F1F7}',
          'vi-VN': '\u{1F1FB}\u{1F1F3}',
        },
        Yt = { 'zh-CN': '\u4E2D', 'en-US': 'EN' },
        ti = function (e) {
          var n = e.locale,
            a = e.current,
            d = (0, l.TH)(),
            C = d.pathname,
            k = (0, o.useState)(function () {
              return Ct({ pathname: C, current: a, target: n });
            }),
            $ = (0, it.Z)(k, 2),
            U = $[0],
            ee = $[1];
          return (
            (0, o.useEffect)(
              function () {
                ee(Ct({ pathname: C, current: a, target: n }));
              },
              [C, a.id, n.id],
            ),
            (0, u.jsx)(l.rU, {
              to: U,
              children: (0, u.jsx)(Kt.ZP, {
                style: {
                  minWidth: 34,
                  padding: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
                children: Yt[n.id],
              }),
            })
          );
        },
        ni = function () {
          var e = (0, S.HX)(function (a) {
              return a.siteData.locales;
            }),
            n = (0, S.HX)(function (a) {
              return a.locale;
            });
          return e.length <= 1
            ? null
            : e.length > 2
              ? (0, u.jsx)(qr.Z, {
                  value: e.findIndex(function (a) {
                    return a.id === n.id;
                  }),
                  onChange: function (d) {
                    console.log(Ct({ pathname: location.pathname, current: n, target: e[d] })),
                      l.m8.push(Ct({ pathname: location.pathname, current: n, target: e[d] }));
                  },
                  options: e.map(function (a) {
                    return { value: a.id, label: Yt[a.id] };
                  }),
                  renderItem: function (d, C) {
                    return ''.concat(ei[e[C].id], ' ').concat(e[C].name);
                  },
                  style: {
                    height: 32,
                    minWidth: 32,
                    padding: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                })
              : (0, u.jsx)(ti, {
                  locale: e.find(function (a) {
                    var d = a.id;
                    return d !== n.id;
                  }),
                  current: n,
                });
        },
        ri = (0, o.memo)(ni);
      function Et(i, e) {
        if (Object.is(i, e)) return !0;
        if (typeof i != 'object' || i === null || typeof e != 'object' || e === null) return !1;
        if (i instanceof Map && e instanceof Map) {
          if (i.size !== e.size) return !1;
          for (const [a, d] of i) if (!Object.is(d, e.get(a))) return !1;
          return !0;
        }
        if (i instanceof Set && e instanceof Set) {
          if (i.size !== e.size) return !1;
          for (const a of i) if (!e.has(a)) return !1;
          return !0;
        }
        const n = Object.keys(i);
        if (n.length !== Object.keys(e).length) return !1;
        for (const a of n)
          if (!Object.prototype.hasOwnProperty.call(e, a) || !Object.is(i[a], e[a])) return !1;
        return !0;
      }
      var Ba = (i, e) => (
          console.warn(
            "[DEPRECATED] Default export is deprecated. Instead use `import { shallow } from 'zustand/shallow'`.",
          ),
          Et(i, e)
        ),
        Jt = s(48407),
        Qt,
        ii = (0, ye.kc)(function (i) {
          var e = i.css,
            n = i.responsive,
            a = i.token;
          return e(
            Qt ||
              (Qt = (0, ce.Z)([
                `
    display: inline-flex;
    align-items: center;
    font-family: AliPuHui, `,
                `;
    color: `,
                `;
    font-size: 22px;
    line-height: 1;
    font-weight: 500;
    text-decoration: none;
    gap: 10px;

    `,
                ` {
      font-size: 18px;
    }
  `,
              ])),
            a.fontFamily,
            a.colorText,
            n.mobile,
          );
        }),
        oi = function () {
          var e = (0, S.HX)(function (Q) {
              return Q.siteData.themeConfig;
            }, p()),
            n = (0, S.HX)(function (Q) {
              return Q.locale;
            }, p()),
            a = (0, S.HX)(Jt.b8.logo, Et),
            d = ii(),
            C = d.styles,
            k = d.cx,
            $ = e.name,
            U = e.hideNameOnHeader,
            ee = U === void 0 ? !1 : U;
          return (
            e &&
            (0, u.jsxs)(l.rU, {
              className: k(C),
              to: 'base' in n ? n.base : '/',
              children: [!!a && (0, u.jsx)('img', { src: a, alt: e.name, height: 32 }), !ee && $],
            })
          );
        },
        qt = (0, o.memo)(oi),
        ai = s(67612),
        li = function () {
          return o.createElement(o.Fragment, null);
        },
        si = li,
        en,
        tn,
        ci = (0, ye.kc)(function (i) {
          var e = i.css,
            n = i.responsive,
            a = i.token,
            d = i.stylish,
            C = i.prefixCls,
            k = '.'.concat(C, '-tabs'),
            $ = 16,
            U = 6;
          return {
            tabs: e(
              en ||
                (en = (0, ce.Z)([
                  `
      `,
                  '-tab + ',
                  `-tab {
        margin: `,
                  `px 4px !important;
        padding: 0 12px !important;
      }

      `,
                  `-tab {
        color: `,
                  `;
        transition: background-color 100ms ease-out;

        &:first-child {
          margin: `,
                  'px 4px ',
                  `px 0;
          padding: `,
                  `px 12px !important;
        }

        &:hover {
          color: `,
                  ` !important;
          background: `,
                  `;
          border-radius: `,
                  `px;
        }
      }

      `,
                  `-nav {
        margin-bottom: 0;
      }

      `,
                  ` {
        display: none;
      }
    `,
                ])),
              k,
              k,
              $,
              k,
              a.colorTextSecondary,
              $,
              $,
              U,
              a.colorText,
              a.colorFillTertiary,
              a.borderRadius,
              k,
              n.mobile,
            ),
            link: e(
              tn ||
                (tn = (0, ce.Z)([
                  `
      `,
                  `
    `,
                ])),
              d.resetLinkColor,
            ),
          };
        }),
        ui = function () {
          var e = ci(),
            n = e.styles,
            a = /^(\w+:)\/\/|^(mailto|tel):/,
            d = (0, S.HX)(function (k) {
              return k.navData;
            }, Et),
            C = (0, S.HX)(t.K1);
          return (0, u.jsxs)(u.Fragment, {
            children: [
              (0, u.jsx)(ai.Z, {
                onChange: function ($) {
                  var U,
                    ee =
                      (U = d.find(function (Q) {
                        return Q.activePath === $ || Q.link === $;
                      })) === null || U === void 0
                        ? void 0
                        : U.link;
                  !ee || a.test(ee) || l.m8.push(ee);
                },
                activeKey: C,
                className: n.tabs,
                items: d.map(function (k) {
                  return {
                    label: a.test(k.link || '')
                      ? (0, u.jsx)('a', {
                          href: k.link,
                          className: n.link,
                          target: '_blank',
                          rel: 'noreferrer',
                          children: k.title,
                        })
                      : (0, u.jsx)(l.rU, { className: n.link, to: k.link, children: k.title }),
                    key: k.activePath || k.link,
                  };
                }),
              }),
              (0, u.jsx)(si, {}),
            ],
          });
        },
        di = (0, o.memo)(ui),
        nn = s(15503),
        fi = Object.defineProperty,
        rn = Object.getOwnPropertySymbols,
        hi = Object.prototype.hasOwnProperty,
        pi = Object.prototype.propertyIsEnumerable,
        on = (i, e, n) =>
          e in i
            ? fi(i, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
            : (i[e] = n),
        mi = (i, e) => {
          for (var n in e || (e = {})) hi.call(e, n) && on(i, n, e[n]);
          if (rn) for (var n of rn(e)) pi.call(e, n) && on(i, n, e[n]);
          return i;
        };
      const gi = (i) =>
        o.createElement(
          'svg',
          mi({ viewBox: '0 0 1024 1024' }, i),
          o.createElement('path', {
            d: 'm885.2 446.3-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0 0 60.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 65-9.4 90.3-27.2 22.2-15.6 39.5-37.4 50.7-63.6h156.5V814H214.4V480.1z',
          }),
        );
      var Aa =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0Ij48cGF0aCBkPSJtODg1LjIgNDQ2LjMtLjItLjgtMTEyLjItMjg1LjFjLTUtMTYuMS0xOS45LTI3LjItMzYuOC0yNy4ySDI4MS4yYy0xNyAwLTMyLjEgMTEuMy0zNi45IDI3LjZMMTM5LjQgNDQzbC0uMy43LS4yLjhjLTEuMyA0LjktMS43IDkuOS0xIDE0LjgtLjEgMS42LS4yIDMuMi0uMiA0LjhWODMwYTYwLjkgNjAuOSAwIDAgMCA2MC44IDYwLjhoNjI3LjJjMzMuNSAwIDYwLjgtMjcuMyA2MC45LTYwLjhWNDY0LjFjMC0xLjMgMC0yLjYtLjEtMy43LjQtNC45IDAtOS42LTEuMy0xNC4xem0tMjk1LjgtNDMtLjMgMTUuN2MtLjggNDQuOS0zMS44IDc1LjEtNzcuMSA3NS4xLTIyLjEgMC00MS4xLTcuMS01NC44LTIwLjZTNDM2IDQ0MS4yIDQzNS42IDQxOWwtLjMtMTUuN0gyMjkuNUwzMDkgMjEwaDM5OS4ybDgxLjcgMTkzLjNINTg5LjR6bS0zNzUgNzYuOGgxNTcuM2MyNC4zIDU3LjEgNzYgOTAuOCAxNDAuNCA5MC44IDMzLjcgMCA2NS05LjQgOTAuMy0yNy4yIDIyLjItMTUuNiAzOS41LTM3LjQgNTAuNy02My42aDE1Ni41VjgxNEgyMTQuNFY0ODAuMXoiLz48L3N2Zz4=',
        vi = function (i, e, n, a) {
          function d(C) {
            return C instanceof n
              ? C
              : new n(function (k) {
                  k(C);
                });
          }
          return new (n || (n = Promise))(function (C, k) {
            function $(Q) {
              try {
                ee(a.next(Q));
              } catch (le) {
                k(le);
              }
            }
            function U(Q) {
              try {
                ee(a.throw(Q));
              } catch (le) {
                k(le);
              }
            }
            function ee(Q) {
              Q.done ? C(Q.value) : d(Q.value).then($, U);
            }
            ee((a = a.apply(i, e || [])).next());
          });
        };
      function jt(i) {
        let e = 0,
          n = 0,
          a = i;
        do (e += a.offsetTop || 0), (n += a.offsetLeft || 0), (a = a.offsetParent);
        while (a);
        return { top: e, left: n };
      }
      class yi {
        constructor(e) {
          this.element = e;
        }
        getHorizontalScroll() {
          return this.element.scrollLeft;
        }
        getVerticalScroll() {
          return this.element.scrollTop;
        }
        getMaxHorizontalScroll() {
          return this.element.scrollWidth - this.element.clientWidth;
        }
        getMaxVerticalScroll() {
          return this.element.scrollHeight - this.element.clientHeight;
        }
        getHorizontalElementScrollOffset(e, n) {
          return jt(e).left - jt(n).left;
        }
        getVerticalElementScrollOffset(e, n) {
          return jt(e).top - jt(n).top;
        }
        scrollTo(e, n) {
          (this.element.scrollLeft = e), (this.element.scrollTop = n);
        }
      }
      class bi {
        constructor() {
          this.element = window;
        }
        getHorizontalScroll() {
          return window.scrollX || document.documentElement.scrollLeft;
        }
        getVerticalScroll() {
          return window.scrollY || document.documentElement.scrollTop;
        }
        getMaxHorizontalScroll() {
          return (
            Math.max(
              document.body.scrollWidth,
              document.documentElement.scrollWidth,
              document.body.offsetWidth,
              document.documentElement.offsetWidth,
              document.body.clientWidth,
              document.documentElement.clientWidth,
            ) - window.innerWidth
          );
        }
        getMaxVerticalScroll() {
          return (
            Math.max(
              document.body.scrollHeight,
              document.documentElement.scrollHeight,
              document.body.offsetHeight,
              document.documentElement.offsetHeight,
              document.body.clientHeight,
              document.documentElement.clientHeight,
            ) - window.innerHeight
          );
        }
        getHorizontalElementScrollOffset(e) {
          return (
            (window.scrollX || document.documentElement.scrollLeft) + e.getBoundingClientRect().left
          );
        }
        getVerticalElementScrollOffset(e) {
          return (
            (window.scrollY || document.documentElement.scrollTop) + e.getBoundingClientRect().top
          );
        }
        scrollTo(e, n) {
          window.scrollTo(e, n);
        }
      }
      const ot = {
          elements: [],
          cancelMethods: [],
          add: (i, e) => {
            ot.elements.push(i), ot.cancelMethods.push(e);
          },
          remove: (i, e) => {
            const n = ot.elements.indexOf(i);
            n > -1 &&
              (e && ot.cancelMethods[n](), ot.elements.splice(n, 1), ot.cancelMethods.splice(n, 1));
          },
        },
        an = typeof window != 'undefined',
        xi = {
          cancelOnUserAction: !0,
          easing: (i) => --i * i * i + 1,
          elementToScroll: an ? window : null,
          horizontalOffset: 0,
          maxDuration: 3e3,
          minDuration: 250,
          speed: 500,
          verticalOffset: 0,
        };
      function wi(i, e = {}) {
        return vi(this, void 0, void 0, function* () {
          if (an) {
            if (!window.Promise)
              throw "Browser doesn't support Promises, and animated-scroll-to depends on it, please provide a polyfill.";
          } else
            return new Promise((xe) => {
              xe(!1);
            });
          let n,
            a,
            d,
            C = Object.assign(Object.assign({}, xi), e);
          const k = C.elementToScroll === window,
            $ = !!C.elementToScroll.nodeName;
          if (!k && !$) throw 'Element to scroll needs to be either window or DOM element.';
          const U = k ? document.documentElement : C.elementToScroll;
          getComputedStyle(U).getPropertyValue('scroll-behavior') === 'smooth' &&
            console.warn(
              `${U.tagName} has "scroll-behavior: smooth" which can mess up with animated-scroll-to's animations`,
            );
          const Q = k ? new bi() : new yi(C.elementToScroll);
          if (i instanceof Element) {
            if (((d = i), $ && (!C.elementToScroll.contains(d) || C.elementToScroll.isSameNode(d))))
              throw 'options.elementToScroll has to be a parent of scrollToElement';
            (n = Q.getHorizontalElementScrollOffset(d, C.elementToScroll)),
              (a = Q.getVerticalElementScrollOffset(d, C.elementToScroll));
          } else if (typeof i == 'number') (n = Q.getHorizontalScroll()), (a = i);
          else if (Array.isArray(i) && i.length === 2)
            (n = i[0] === null ? Q.getHorizontalScroll() : i[0]),
              (a = i[1] === null ? Q.getVerticalScroll() : i[1]);
          else
            throw `Wrong function signature. Check documentation.
Available method signatures are:
  animateScrollTo(y:number, options)
  animateScrollTo([x:number | null, y:number | null], options)
  animateScrollTo(scrollToElement:Element, options)`;
          (n += C.horizontalOffset), (a += C.verticalOffset);
          const le = Q.getMaxHorizontalScroll(),
            ie = Q.getHorizontalScroll();
          n > le && (n = le);
          const ne = n - ie,
            re = Q.getMaxVerticalScroll(),
            fe = Q.getVerticalScroll();
          a > re && (a = re);
          const pe = a - fe,
            be = Math.abs(Math.round((ne / 1e3) * C.speed)),
            Ie = Math.abs(Math.round((pe / 1e3) * C.speed));
          let De = be > Ie ? be : Ie;
          return (
            De < C.minDuration ? (De = C.minDuration) : De > C.maxDuration && (De = C.maxDuration),
            new Promise((xe, ke) => {
              ne === 0 && pe === 0 && xe(!0), ot.remove(Q.element, !0);
              let Ee;
              const _e = () => {
                We(), cancelAnimationFrame(Ee), xe(!1);
              };
              ot.add(Q.element, _e);
              const je = (Me) => Me.preventDefault(),
                ve = C.cancelOnUserAction ? _e : je,
                Ae = C.cancelOnUserAction ? { passive: !0 } : { passive: !1 },
                Ze = ['wheel', 'touchstart', 'keydown', 'mousedown'],
                We = () => {
                  Ze.forEach((Me) => {
                    Q.element.removeEventListener(Me, ve, Ae);
                  });
                };
              Ze.forEach((Me) => {
                Q.element.addEventListener(Me, ve, Ae);
              });
              const Ne = Date.now(),
                Re = () => {
                  var Me = Date.now() - Ne,
                    Ye = Me / De;
                  const Pe = Math.round(ie + ne * C.easing(Ye)),
                    et = Math.round(fe + pe * C.easing(Ye));
                  Me < De && (Pe !== n || et !== a)
                    ? (Q.scrollTo(Pe, et), (Ee = requestAnimationFrame(Re)))
                    : (Q.scrollTo(n, a),
                      cancelAnimationFrame(Ee),
                      We(),
                      ot.remove(Q.element, !1),
                      xe(!0));
                };
              Ee = requestAnimationFrame(Re);
            })
          );
        });
      }
      var Si = wi;
      function Dt(i, e) {
        return Oi(i) || ji(i, e) || Ei(i, e) || Ci();
      }
      function Ci() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function Ei(i, e) {
        if (i) {
          if (typeof i == 'string') return ln(i, e);
          var n = Object.prototype.toString.call(i).slice(8, -1);
          if (
            (n === 'Object' && i.constructor && (n = i.constructor.name),
            n === 'Map' || n === 'Set')
          )
            return Array.from(i);
          if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return ln(i, e);
        }
      }
      function ln(i, e) {
        (e == null || e > i.length) && (e = i.length);
        for (var n = 0, a = new Array(e); n < e; n++) a[n] = i[n];
        return a;
      }
      function ji(i, e) {
        var n =
          i == null
            ? null
            : (typeof Symbol != 'undefined' && i[Symbol.iterator]) || i['@@iterator'];
        if (n != null) {
          var a,
            d,
            C,
            k,
            $ = [],
            U = !0,
            ee = !1;
          try {
            if (((C = (n = n.call(i)).next), e === 0)) {
              if (Object(n) !== n) return;
              U = !1;
            } else for (; !(U = (a = C.call(n)).done) && ($.push(a.value), $.length !== e); U = !0);
          } catch (Q) {
            (ee = !0), (d = Q);
          } finally {
            try {
              if (!U && n.return != null && ((k = n.return()), Object(k) !== k)) return;
            } finally {
              if (ee) throw d;
            }
          }
          return $;
        }
      }
      function Oi(i) {
        if (Array.isArray(i)) return i;
      }
      var ki = function () {
          return o.createElement(
            'svg',
            { viewBox: '0 0 32 32', xmlns: 'http://www.w3.org/2000/svg' },
            o.createElement('path', {
              d: 'M5.333 10.667h21.334c.889 0 1.333.444 1.333 1.333s-.444 1.333-1.333 1.333H5.333C4.444 13.333 4 12.89 4 12s.444-1.333 1.333-1.333Z',
            }),
            o.createElement('path', {
              d: 'M13.207 2.667h.126a1.206 1.206 0 0 1 1.2 1.326l-2.413 24.14a1.333 1.333 0 0 1-1.327 1.2h-.126a1.206 1.206 0 0 1-1.2-1.326l2.413-24.14c.068-.682.642-1.2 1.327-1.2Zm8 0h.126a1.206 1.206 0 0 1 1.2 1.326l-2.413 24.14a1.333 1.333 0 0 1-1.327 1.2h-.126a1.206 1.206 0 0 1-1.2-1.326l2.413-24.14c.068-.682.642-1.2 1.327-1.2Z',
            }),
            o.createElement('path', {
              d: 'M5.333 18.667h21.334c.889 0 1.333.444 1.333 1.333s-.444 1.333-1.333 1.333H5.333C4.444 21.333 4 20.89 4 20s.444-1.333 1.333-1.333Z',
            }),
          );
        },
        Di = function () {
          return o.createElement(
            'svg',
            { viewBox: '0 0 32 32', xmlns: 'http://www.w3.org/2000/svg' },
            o.createElement('path', {
              d: 'M9.402 0h14.78L30 6.16V24.5c0 1.933-1.71 3.5-3.589 3.5H9.401C7.524 28 6 26.433 6 24.5v-21C6 1.567 7.523 0 9.402 0ZM23 2v4.183c0 .451.366.817.817.817H28l-5-5Zm3.333 24c.92 0 1.667-.768 1.667-1.714V8.857h-5c-.92 0-1.667-.767-1.667-1.714V2H9.667C8.747 2 8 2.768 8 3.714v20.572C8 25.232 8.746 26 9.667 26h16.666Z',
            }),
          );
        },
        Mi = function () {
          return o.createElement(
            'svg',
            { viewBox: '0 0 32 32', xmlns: 'http://www.w3.org/2000/svg' },
            o.createElement('path', {
              d: 'M6.12 14.589h6.628l1.52 4.004h2.485l-5.938-15.19H8.053L2.115 18.732H4.6l1.52-4.143ZM8.88 6.855c.139-.414.277-.828.415-1.38h.138c0 .138.138.414.414 1.104 0 .138.138.276.138.276 0 .138.829 2.072 2.21 5.938H6.672c1.519-3.866 2.21-5.8 2.21-5.938Zm8.148 2.348h12.705v1.933H17.029V9.203ZM2.115 20.665h27.619v1.933H2.114v-1.933Zm14.914-5.662h12.705v1.933H17.029v-1.933ZM2.115 26.327h27.619v1.933H2.114v-1.933ZM17.029 3.54h12.705v1.934H17.029V3.54Z',
            }),
          );
        },
        Ti = function () {
          return o.createElement(
            'svg',
            { viewBox: '0 0 32 32', xmlns: 'http://www.w3.org/2000/svg' },
            o.createElement('path', {
              d: 'M28 6h-5a5 5 0 0 0-10 0H8a2 2 0 0 0-2 2v5a5 5 0 0 0 0 10v5a2 2 0 0 0 2 2h7v-2a3 3 0 0 1 6 0v2h7a2 2 0 0 0 2-2v-7h-2a3 3 0 0 1 0-6h2V8a2 2 0 0 0-2-2Zm-5 12a5 5 0 0 0 5 5v5h-5a5 5 0 0 0-10 0H8v-7H6a3 3 0 0 1 0-6h2V8h7V6a3 3 0 0 1 6 0v2h7v5a5 5 0 0 0-5 5Z',
            }),
          );
        },
        Ii = { title: ki, page: Di, content: Mi, demo: Ti },
        sn = function (e) {
          return o.createElement(
            o.Fragment,
            null,
            e.texts.map(function (n, a) {
              return o.createElement(
                o.Fragment,
                { key: a },
                n.highlighted ? o.createElement('mark', null, n.text) : n.text,
              );
            }),
          );
        },
        _i = function (e) {
          var n = (0, o.useCallback)(
              function () {
                var $ = 0,
                  U = [];
                return (
                  e.forEach(function (ee) {
                    ee.title && U.push({ type: 'title', value: { title: ee.title } }),
                      ee.hints.forEach(function (Q) {
                        U.push({ type: 'hint', activeIndex: $++, value: Q });
                      });
                  }),
                  [U, $]
                );
              },
              [e],
            ),
            a = (0, o.useState)(n),
            d = Dt(a, 2),
            C = d[0],
            k = d[1];
          return (
            (0, o.useEffect)(
              function () {
                k(n);
              },
              [e],
            ),
            C
          );
        },
        Bi = function (e) {
          var n = _i(e.data),
            a = Dt(n, 2),
            d = a[0],
            C = a[1],
            k = (0, o.useState)(-1),
            $ = Dt(k, 2),
            U = $[0],
            ee = $[1],
            Q = (0, l.TH)(),
            le = Q.pathname,
            ie = function (re) {
              var fe;
              (fe = e.onItemSelect) === null || fe === void 0 || fe.call(e, re);
              var pe = new URL(re == null ? void 0 : re.link, location.origin);
              (pe == null ? void 0 : pe.pathname) === le &&
                !pe.hash &&
                setTimeout(function () {
                  Si(0, { maxDuration: 300 });
                }, 1);
            };
          return (
            (0, o.useEffect)(function () {
              var ne = function (fe) {
                if (fe.key === 'ArrowDown') ee((U + 1) % C);
                else if (fe.key === 'ArrowUp') ee((U + C - 1) % C);
                else if (fe.key === 'Enter' && U >= 0) {
                  var pe = d.find(function (be) {
                    return be.type === 'hint' && be.activeIndex === U;
                  }).value;
                  l.m8.push(pe.link), ie == null || ie(pe), document.activeElement.blur();
                }
                ['Escape', 'Enter'].includes(fe.key) && ee(-1);
              };
              return (
                document.addEventListener('keydown', ne),
                function () {
                  return document.removeEventListener('keydown', ne);
                }
              );
            }),
            o.createElement(
              'div',
              {
                className: 'dumi-default-search-result',
                onMouseEnter: function () {
                  return ee(-1);
                },
                onMouseDownCapture: function (re) {
                  return re.preventDefault();
                },
                onMouseUpCapture: function () {
                  document.activeElement.blur();
                },
              },
              e.data.length || e.loading
                ? o.createElement(
                    'dl',
                    null,
                    d.map(function (ne, re) {
                      return ne.type === 'title'
                        ? o.createElement('dt', { key: String(re) }, ne.value.title)
                        : o.createElement(
                            'dd',
                            { key: String(re) },
                            o.createElement(
                              l.rU,
                              {
                                to: ne.value.link,
                                'data-active': U === ne.activeIndex || void 0,
                                onClick: function () {
                                  return ie == null ? void 0 : ie(ne.value);
                                },
                              },
                              o.createElement(Ii[ne.value.type]),
                              o.createElement(
                                'h4',
                                null,
                                o.createElement(sn, { texts: ne.value.highlightTitleTexts }),
                              ),
                              o.createElement(
                                'p',
                                null,
                                o.createElement(sn, { texts: ne.value.highlightTexts }),
                              ),
                            ),
                          );
                    }),
                  )
                : o.createElement(
                    'div',
                    { className: 'dumi-default-search-empty' },
                    o.createElement(gi, null),
                    o.createElement(l._H, { id: 'search.not.found' }),
                  ),
            )
          );
        },
        cn = Bi,
        un = (0, o.forwardRef)(function (i, e) {
          var n = (0, l.YB)(),
            a = (0, o.useRef)(!1),
            d = (0, o.useRef)(null);
          return (
            (0, o.useImperativeHandle)(e, function () {
              return d.current;
            }),
            (0, u.jsx)('input', {
              className: i.className,
              onCompositionStart: function () {
                return (a.current = !0);
              },
              onCompositionEnd: function (k) {
                (a.current = !1), i.onChange(k.currentTarget.value);
              },
              onFocus: i.onFocus,
              onBlur: i.onBlur,
              onKeyDown: function (k) {
                ['ArrowDown', 'ArrowUp'].includes(k.key) && k.preventDefault(),
                  k.key === 'Escape' && !a.current && k.currentTarget.blur();
              },
              onChange: function (k) {
                setTimeout(function () {
                  a.current || i.onChange(k.target.value);
                }, 1);
              },
              placeholder: n.formatMessage({ id: 'header.search.placeholder' }),
              ref: d,
            })
          );
        }),
        dn,
        fn,
        hn,
        Ai = (0, ye.kc)(function (i) {
          var e = i.token,
            n = i.css;
          return {
            modal: n(
              dn ||
                (dn = (0, ce.Z)([
                  `
      position: fixed;
      top: 0;
      inset-inline-start: 0;
      z-index: 1000;
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
    `,
                ])),
            ),
            mask: n(
              fn ||
                (fn = (0, ce.Z)([
                  `
      background-color: `,
                  `;
      width: 100%;
      height: 100%;
    `,
                ])),
              e.colorBgMask,
            ),
            content: n(
              hn ||
                (hn = (0, ce.Z)([
                  `
      position: absolute;
      top: 60px;
      background-color: `,
                  `;
      width: 500px;
      padding: 12px;
      box-sizing: border-box;
      box-shadow: inset 1px 1px 0 0 hsla(0deg, 0%, 100%, 50%), 0 3px 8px 0 #555a64;
      border-radius: 8px;
      max-height: calc(100% - 120px);
      display: flex;
      flex-direction: column;
    `,
                ])),
              e.colorBgElevated,
            ),
          };
        }),
        Ri = function (e) {
          var n = Ai(),
            a = n.styles;
          return (
            (0, o.useEffect)(
              function () {
                if (e.visible) document.body.style.overflow = 'hidden';
                else {
                  var d;
                  (document.body.style.overflow = ''),
                    (d = e.onClose) === null || d === void 0 || d.call(e);
                }
              },
              [e.visible],
            ),
            e.visible
              ? (0, u.jsxs)('div', {
                  className: a.modal,
                  children: [
                    (0, u.jsx)('div', { className: a.mask, onClick: e.onMaskClick }),
                    (0, u.jsx)('div', { className: a.content, children: e.children }),
                  ],
                })
              : null
          );
        },
        pn,
        mn,
        gn,
        vn,
        yn,
        Li = (0, ye.kc)(function (i) {
          var e = i.token,
            n = i.responsive,
            a = i.css,
            d = i.cx;
          return {
            container: a(
              pn ||
                (pn = (0, ce.Z)([
                  `
      position: relative;

      // TODO: support search for mobile devices
      `,
                  ` {
        display: none;
      }
    `,
                ])),
              n.mobile,
            ),
            shortcut: d(
              'site-header-shortcut',
              a(
                mn ||
                  (mn = (0, ce.Z)([
                    `
        position: absolute;
        top: 50%;
        inset-inline-end: 11px;
        display: inline-block;
        padding: 4px 8px;
        color: `,
                    `;
        font-size: 12px;
        line-height: 1;
        white-space: nowrap;
        background-color: `,
                    `;
        border-radius: 11px;
        border: 1px solid `,
                    `;
        transform: translateY(-50%);
        transition: all 0.3s;
        pointer-events: none;

        `,
                    ` {
          display: none;
        }
      `,
                  ])),
                e.colorTextDescription,
                e.colorFillSecondary,
                e.colorBorderSecondary,
                n.mobile,
              ),
            ),
            popover: a(
              gn ||
                (gn = (0, ce.Z)([
                  `
      position: absolute;
      top: 100%;
      inset-inline-end: 0;
      display: flex;
      flex-direction: column;
      width: 540px;
      max-height: 460px;
      margin-top: 18px;
      background-color: `,
                  `;
      border-radius: 8px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 20%);

      &::before {
        content: '';
        position: absolute;
        bottom: 100%;
        inset-inline-end: 100px;
        display: inline-block;
        width: 0;
        height: 0;
        border: 8px solid transparent;
        border-bottom-color: #fff;
      }

      > section {
        flex: 1;
        min-height: 60px;
        overflow: auto;
        overscroll-behavior: contain;
        -webkit-overflow-scrolling: touch;
        border-radius: inherit;
      }
    `,
                ])),
              e.colorBgElevated,
            ),
            svg: d(
              a(
                vn ||
                  (vn = (0, ce.Z)([
                    `
        position: absolute;
        top: 50%;
        margin-top: 1px;
        inset-inline-start: 16px;
        width: 16px;
        color: `,
                    `;
        transform: translateY(-50%);
      `,
                  ])),
                e.colorTextPlaceholder,
              ),
            ),
            input: a(
              yn ||
                (yn = (0, ce.Z)([
                  `
      width: 280px;
      height: `,
                  `px;
      padding: 0;
      padding-inline-start: 40px;
      padding-inline-end: 12px;
      color: `,
                  `;
      font-size: 14px;
      border: 1px solid `,
                  `;
      border-radius: 20px;
      box-sizing: border-box;
      outline: none;
      transition: all 0.3s;
      background-color: transparent;

      &:focus {
        border-color: `,
                  `;
        background: `,
                  `;

        ~ .site-header-shortcut {
          opacity: 0;
        }
      }

      &::-webkit-input-placeholder {
        color: `,
                  `;
      }
    `,
                ])),
              e.controlHeightLG,
              e.colorTextSecondary,
              e.colorBorder,
              e.colorBorderSecondary,
              e.colorBgElevated,
              e.colorTextPlaceholder,
            ),
          };
        }),
        Mt,
        bn = /(mac|iphone|ipod|ipad)/i.test(
          typeof navigator != 'undefined'
            ? (Mt = navigator) === null || Mt === void 0
              ? void 0
              : Mt.platform
            : '',
        ),
        Ni = function (e) {
          return ['TEXTAREA', 'INPUT'].includes(e.tagName) || e.contentEditable === 'true';
        },
        $i = function () {
          var e = Li(),
            n = e.styles,
            a = (0, o.useState)(!1),
            d = (0, it.Z)(a, 2),
            C = d[0],
            k = d[1],
            $ = (0, o.useRef)(null),
            U = (0, o.useRef)(null),
            ee = (0, o.useState)('\u2318'),
            Q = (0, it.Z)(ee, 2),
            le = Q[0],
            ie = Q[1],
            ne = (0, l.OO)(),
            re = ne.keywords,
            fe = ne.setKeywords,
            pe = ne.result,
            be = ne.loading,
            Ie = (0, o.useState)(!1),
            De = (0, it.Z)(Ie, 2),
            xe = De[0],
            ke = De[1];
          return (
            (0, o.useEffect)(function () {
              bn || ie('Ctrl');
              var Ee = function (je) {
                if (
                  (((bn ? je.metaKey : je.ctrlKey) && je.key === 'k') ||
                    (je.key === '/' && !Ni(je.target))) &&
                  (je.preventDefault(), $.current)
                ) {
                  var ve = $.current.getBoundingClientRect(),
                    Ae = ve.top,
                    Ze = ve.bottom,
                    We = ve.left,
                    Ne = ve.right,
                    Re = Ae >= 0 && We >= 0 && Ze <= window.innerHeight && Ne <= window.innerWidth;
                  Re
                    ? $.current.focus()
                    : (fe(''),
                      ke(!0),
                      setTimeout(function () {
                        var Me;
                        (Me = U.current) === null || Me === void 0 || Me.focus();
                      }));
                }
                je.key === 'Escape' && (je.preventDefault(), ke(!1));
              };
              return (
                document.addEventListener('keydown', Ee),
                function () {
                  return document.removeEventListener('keydown', Ee);
                }
              );
            }, []),
            (0, u.jsxs)('div', {
              className: n.container,
              children: [
                (0, u.jsx)(nn.Z, { className: n.svg }),
                (0, u.jsx)(un, {
                  onFocus: function () {
                    return k(!0);
                  },
                  onBlur: function () {
                    setTimeout(function () {
                      k(!1);
                    }, 1);
                  },
                  onChange: function (_e) {
                    return fe(_e);
                  },
                  ref: $,
                  className: n.input,
                }),
                (0, u.jsxs)('span', { className: n.shortcut, children: [le, ' K'] }),
                re.trim() &&
                  C &&
                  (pe.length || !be) &&
                  !xe &&
                  (0, u.jsx)('div', {
                    className: n.popover,
                    children: (0, u.jsx)('section', {
                      children: (0, u.jsx)(cn, { data: pe, loading: be }),
                    }),
                  }),
                (0, u.jsxs)(Ri, {
                  visible: xe,
                  onMaskClick: function () {
                    ke(!1);
                  },
                  onClose: function () {
                    return fe('');
                  },
                  children: [
                    (0, u.jsxs)('div', {
                      style: { position: 'relative' },
                      children: [
                        (0, u.jsx)(nn.Z, { className: n.svg }),
                        (0, u.jsx)(un, {
                          className: n.input,
                          onFocus: function () {
                            return k(!0);
                          },
                          onBlur: function () {
                            setTimeout(function () {
                              k(!1);
                            }, 1);
                          },
                          onChange: function (_e) {
                            return fe(_e);
                          },
                          ref: U,
                        }),
                      ],
                    }),
                    (0, u.jsx)(cn, {
                      data: pe,
                      loading: be,
                      onItemSelect: function () {
                        ke(!1);
                      },
                    }),
                  ],
                }),
              ],
            })
          );
        },
        Pi = $i,
        Hi = s(82187),
        $e = s.n(Hi),
        nt = s(35194),
        Fi = s(35588),
        xn = s(80918),
        Wi = o.createContext(null),
        wn = o.createContext({}),
        Sn = Wi,
        Cn = s(10091),
        Tt = s(75924),
        It = s(50361),
        Ui = s(78404),
        zi = ['prefixCls', 'className', 'containerRef'],
        Zi = function (e) {
          var n = e.prefixCls,
            a = e.className,
            d = e.containerRef,
            C = (0, W.Z)(e, zi),
            k = o.useContext(wn),
            $ = k.panel,
            U = (0, Ui.x1)($, d);
          return o.createElement(
            'div',
            (0, r.Z)(
              { className: $e()(''.concat(n, '-content'), a), role: 'dialog', ref: U },
              (0, It.Z)(e, { aria: !0 }),
              { 'aria-modal': 'true' },
              C,
            ),
          );
        },
        Vi = Zi,
        Xi = s(24694);
      function En(i) {
        return typeof i == 'string' && String(Number(i)) === i
          ? ((0, Xi.ZP)(
              !1,
              'Invalid value type of `width` or `height` which should be number type instead.',
            ),
            Number(i))
          : i;
      }
      function Ra(i) {
        warning(
          !('wrapperClassName' in i),
          "'wrapperClassName' is removed. Please use 'rootClassName' instead.",
        ),
          warning(
            canUseDom() || !i.open,
            "Drawer with 'open' in SSR is not work since no place to createPortal. Please move to 'useEffect' instead.",
          );
      }
      var jn = { width: 0, height: 0, overflow: 'hidden', outline: 'none', position: 'absolute' };
      function Gi(i, e) {
        var n,
          a,
          d,
          C = i.prefixCls,
          k = i.open,
          $ = i.placement,
          U = i.inline,
          ee = i.push,
          Q = i.forceRender,
          le = i.autoFocus,
          ie = i.keyboard,
          ne = i.classNames,
          re = i.rootClassName,
          fe = i.rootStyle,
          pe = i.zIndex,
          be = i.className,
          Ie = i.id,
          De = i.style,
          xe = i.motion,
          ke = i.width,
          Ee = i.height,
          _e = i.children,
          je = i.mask,
          ve = i.maskClosable,
          Ae = i.maskMotion,
          Ze = i.maskClassName,
          We = i.maskStyle,
          Ne = i.afterOpenChange,
          Re = i.onClose,
          Me = i.onMouseEnter,
          Ye = i.onMouseOver,
          Pe = i.onMouseLeave,
          et = i.onClick,
          st = i.onKeyDown,
          ct = i.onKeyUp,
          He = i.styles,
          tt = o.useRef(),
          Ge = o.useRef(),
          rt = o.useRef();
        o.useImperativeHandle(e, function () {
          return tt.current;
        });
        var Ke = function (Je) {
          var vt = Je.keyCode,
            yt = Je.shiftKey;
          switch (vt) {
            case Tt.Z.TAB: {
              if (vt === Tt.Z.TAB) {
                if (!yt && document.activeElement === rt.current) {
                  var Ht;
                  (Ht = Ge.current) === null || Ht === void 0 || Ht.focus({ preventScroll: !0 });
                } else if (yt && document.activeElement === Ge.current) {
                  var Ft;
                  (Ft = rt.current) === null || Ft === void 0 || Ft.focus({ preventScroll: !0 });
                }
              }
              break;
            }
            case Tt.Z.ESC: {
              Re && ie && (Je.stopPropagation(), Re(Je));
              break;
            }
          }
        };
        o.useEffect(
          function () {
            if (k && le) {
              var Fe;
              (Fe = tt.current) === null || Fe === void 0 || Fe.focus({ preventScroll: !0 });
            }
          },
          [k],
        );
        var at = o.useState(!1),
          ut = (0, it.Z)(at, 2),
          pr = ut[0],
          gt = ut[1],
          Ve = o.useContext(Sn),
          ht;
        typeof ee == 'boolean' ? (ht = ee ? {} : { distance: 0 }) : (ht = ee || {});
        var pt =
            (n =
              (a = (d = ht) === null || d === void 0 ? void 0 : d.distance) !== null && a !== void 0
                ? a
                : Ve == null
                  ? void 0
                  : Ve.pushDistance) !== null && n !== void 0
              ? n
              : 180,
          Da = o.useMemo(
            function () {
              return {
                pushDistance: pt,
                push: function () {
                  gt(!0);
                },
                pull: function () {
                  gt(!1);
                },
              };
            },
            [pt],
          );
        o.useEffect(
          function () {
            if (k) {
              var Fe;
              Ve == null || (Fe = Ve.push) === null || Fe === void 0 || Fe.call(Ve);
            } else {
              var Je;
              Ve == null || (Je = Ve.pull) === null || Je === void 0 || Je.call(Ve);
            }
          },
          [k],
        ),
          o.useEffect(function () {
            return function () {
              var Fe;
              Ve == null || (Fe = Ve.pull) === null || Fe === void 0 || Fe.call(Ve);
            };
          }, []);
        var Ma =
            je &&
            o.createElement(
              Cn.ZP,
              (0, r.Z)({ key: 'mask' }, Ae, { visible: k }),
              function (Fe, Je) {
                var vt = Fe.className,
                  yt = Fe.style;
                return o.createElement('div', {
                  className: $e()(''.concat(C, '-mask'), vt, ne == null ? void 0 : ne.mask, Ze),
                  style: (0, nt.Z)((0, nt.Z)((0, nt.Z)({}, yt), We), He == null ? void 0 : He.mask),
                  onClick: ve && k ? Re : void 0,
                  ref: Je,
                });
              },
            ),
          Ta = typeof xe == 'function' ? xe($) : xe,
          mt = {};
        if (pr && pt)
          switch ($) {
            case 'top':
              mt.transform = 'translateY('.concat(pt, 'px)');
              break;
            case 'bottom':
              mt.transform = 'translateY('.concat(-pt, 'px)');
              break;
            case 'left':
              mt.transform = 'translateX('.concat(pt, 'px)');
              break;
            default:
              mt.transform = 'translateX('.concat(-pt, 'px)');
              break;
          }
        $ === 'left' || $ === 'right' ? (mt.width = En(ke)) : (mt.height = En(Ee));
        var Ia = {
            onMouseEnter: Me,
            onMouseOver: Ye,
            onMouseLeave: Pe,
            onClick: et,
            onKeyDown: st,
            onKeyUp: ct,
          },
          _a = o.createElement(
            Cn.ZP,
            (0, r.Z)({ key: 'panel' }, Ta, {
              visible: k,
              forceRender: Q,
              onVisibleChanged: function (Je) {
                Ne == null || Ne(Je);
              },
              removeOnLeave: !1,
              leavedClassName: ''.concat(C, '-content-wrapper-hidden'),
            }),
            function (Fe, Je) {
              var vt = Fe.className,
                yt = Fe.style;
              return o.createElement(
                'div',
                (0, r.Z)(
                  {
                    className: $e()(
                      ''.concat(C, '-content-wrapper'),
                      ne == null ? void 0 : ne.wrapper,
                      vt,
                    ),
                    style: (0, nt.Z)(
                      (0, nt.Z)((0, nt.Z)({}, mt), yt),
                      He == null ? void 0 : He.wrapper,
                    ),
                  },
                  (0, It.Z)(i, { data: !0 }),
                ),
                o.createElement(
                  Vi,
                  (0, r.Z)(
                    {
                      id: Ie,
                      containerRef: Je,
                      prefixCls: C,
                      className: $e()(be, ne == null ? void 0 : ne.content),
                      style: (0, nt.Z)((0, nt.Z)({}, De), He == null ? void 0 : He.content),
                    },
                    (0, It.Z)(i, { aria: !0 }),
                    Ia,
                  ),
                  _e,
                ),
              );
            },
          ),
          mr = (0, nt.Z)({}, fe);
        return (
          pe && (mr.zIndex = pe),
          o.createElement(
            Sn.Provider,
            { value: Da },
            o.createElement(
              'div',
              {
                className: $e()(
                  C,
                  ''.concat(C, '-').concat($),
                  re,
                  (0, R.Z)((0, R.Z)({}, ''.concat(C, '-open'), k), ''.concat(C, '-inline'), U),
                ),
                style: mr,
                tabIndex: -1,
                ref: tt,
                onKeyDown: Ke,
              },
              Ma,
              o.createElement('div', {
                tabIndex: 0,
                ref: Ge,
                style: jn,
                'aria-hidden': 'true',
                'data-sentinel': 'start',
              }),
              _a,
              o.createElement('div', {
                tabIndex: 0,
                ref: rt,
                style: jn,
                'aria-hidden': 'true',
                'data-sentinel': 'end',
              }),
            ),
          )
        );
      }
      var Ki = o.forwardRef(Gi),
        Yi = Ki,
        Ji = function (e) {
          var n = e.open,
            a = n === void 0 ? !1 : n,
            d = e.prefixCls,
            C = d === void 0 ? 'rc-drawer' : d,
            k = e.placement,
            $ = k === void 0 ? 'right' : k,
            U = e.autoFocus,
            ee = U === void 0 ? !0 : U,
            Q = e.keyboard,
            le = Q === void 0 ? !0 : Q,
            ie = e.width,
            ne = ie === void 0 ? 378 : ie,
            re = e.mask,
            fe = re === void 0 ? !0 : re,
            pe = e.maskClosable,
            be = pe === void 0 ? !0 : pe,
            Ie = e.getContainer,
            De = e.forceRender,
            xe = e.afterOpenChange,
            ke = e.destroyOnClose,
            Ee = e.onMouseEnter,
            _e = e.onMouseOver,
            je = e.onMouseLeave,
            ve = e.onClick,
            Ae = e.onKeyDown,
            Ze = e.onKeyUp,
            We = e.panelRef,
            Ne = o.useState(!1),
            Re = (0, it.Z)(Ne, 2),
            Me = Re[0],
            Ye = Re[1],
            Pe = o.useState(!1),
            et = (0, it.Z)(Pe, 2),
            st = et[0],
            ct = et[1];
          (0, xn.Z)(function () {
            ct(!0);
          }, []);
          var He = st ? a : !1,
            tt = o.useRef(),
            Ge = o.useRef();
          (0, xn.Z)(
            function () {
              He && (Ge.current = document.activeElement);
            },
            [He],
          );
          var rt = function (gt) {
              var Ve;
              if (
                (Ye(gt),
                xe == null || xe(gt),
                !gt &&
                  Ge.current &&
                  !((Ve = tt.current) !== null && Ve !== void 0 && Ve.contains(Ge.current)))
              ) {
                var ht;
                (ht = Ge.current) === null || ht === void 0 || ht.focus({ preventScroll: !0 });
              }
            },
            Ke = o.useMemo(
              function () {
                return { panel: We };
              },
              [We],
            );
          if (!De && !Me && !He && ke) return null;
          var at = {
              onMouseEnter: Ee,
              onMouseOver: _e,
              onMouseLeave: je,
              onClick: ve,
              onKeyDown: Ae,
              onKeyUp: Ze,
            },
            ut = (0, nt.Z)(
              (0, nt.Z)({}, e),
              {},
              {
                open: He,
                prefixCls: C,
                placement: $,
                autoFocus: ee,
                keyboard: le,
                width: ne,
                mask: fe,
                maskClosable: be,
                inline: Ie === !1,
                afterOpenChange: rt,
                ref: tt,
              },
              at,
            );
          return o.createElement(
            wn.Provider,
            { value: Ke },
            o.createElement(
              Fi.Z,
              {
                open: He || De || Me,
                autoDestroy: !1,
                getContainer: Ie,
                autoLock: fe && (He || Me),
              },
              o.createElement(Yi, ut),
            ),
          );
        },
        Qi = Ji,
        qi = Qi,
        On = s(56496),
        _t = s(20292),
        eo = s(32280),
        wt = s(25765),
        to = s(30652),
        no = s(63096),
        ro = s(78322),
        Bt = s(92884),
        kn = (i) => {
          var e, n;
          const {
              prefixCls: a,
              title: d,
              footer: C,
              extra: k,
              onClose: $,
              headerStyle: U,
              bodyStyle: ee,
              footerStyle: Q,
              children: le,
              classNames: ie,
              styles: ne,
            } = i,
            { drawer: re } = o.useContext(wt.E_),
            fe = o.useCallback(
              (xe) =>
                o.createElement(
                  'button',
                  { type: 'button', onClick: $, 'aria-label': 'Close', className: `${a}-close` },
                  xe,
                ),
              [$],
            ),
            [pe, be] = (0, Bt.Z)((0, Bt.w)(i), (0, Bt.w)(re), {
              closable: !0,
              closeIconRender: fe,
            }),
            Ie = o.useMemo(() => {
              var xe, ke;
              return !d && !pe
                ? null
                : o.createElement(
                    'div',
                    {
                      style: Object.assign(
                        Object.assign(
                          Object.assign(
                            {},
                            (xe = re == null ? void 0 : re.styles) === null || xe === void 0
                              ? void 0
                              : xe.header,
                          ),
                          U,
                        ),
                        ne == null ? void 0 : ne.header,
                      ),
                      className: $e()(
                        `${a}-header`,
                        { [`${a}-header-close-only`]: pe && !d && !k },
                        (ke = re == null ? void 0 : re.classNames) === null || ke === void 0
                          ? void 0
                          : ke.header,
                        ie == null ? void 0 : ie.header,
                      ),
                    },
                    o.createElement(
                      'div',
                      { className: `${a}-header-title` },
                      be,
                      d && o.createElement('div', { className: `${a}-title` }, d),
                    ),
                    k && o.createElement('div', { className: `${a}-extra` }, k),
                  );
            }, [pe, be, k, U, a, d]),
            De = o.useMemo(() => {
              var xe, ke;
              if (!C) return null;
              const Ee = `${a}-footer`;
              return o.createElement(
                'div',
                {
                  className: $e()(
                    Ee,
                    (xe = re == null ? void 0 : re.classNames) === null || xe === void 0
                      ? void 0
                      : xe.footer,
                    ie == null ? void 0 : ie.footer,
                  ),
                  style: Object.assign(
                    Object.assign(
                      Object.assign(
                        {},
                        (ke = re == null ? void 0 : re.styles) === null || ke === void 0
                          ? void 0
                          : ke.footer,
                      ),
                      Q,
                    ),
                    ne == null ? void 0 : ne.footer,
                  ),
                },
                C,
              );
            }, [C, Q, a]);
          return o.createElement(
            o.Fragment,
            null,
            Ie,
            o.createElement(
              'div',
              {
                className: $e()(
                  `${a}-body`,
                  ie == null ? void 0 : ie.body,
                  (e = re == null ? void 0 : re.classNames) === null || e === void 0
                    ? void 0
                    : e.body,
                ),
                style: Object.assign(
                  Object.assign(
                    Object.assign(
                      {},
                      (n = re == null ? void 0 : re.styles) === null || n === void 0
                        ? void 0
                        : n.body,
                    ),
                    ee,
                  ),
                  ne == null ? void 0 : ne.body,
                ),
              },
              le,
            ),
            De,
          );
        },
        dt = s(12775),
        Dn = s(26653),
        At = s(51540);
      const io = (i) => {
          const e = '100%';
          return {
            left: `translateX(-${e})`,
            right: `translateX(${e})`,
            top: `translateY(-${e})`,
            bottom: `translateY(${e})`,
          }[i];
        },
        Mn = (i, e) => ({
          '&-enter, &-appear': Object.assign(Object.assign({}, i), { '&-active': e }),
          '&-leave': Object.assign(Object.assign({}, e), { '&-active': i }),
        }),
        Tn = (i, e) =>
          Object.assign(
            {
              '&-enter, &-appear, &-leave': {
                '&-start': { transition: 'none' },
                '&-active': { transition: `all ${e}` },
              },
            },
            Mn({ opacity: i }, { opacity: 1 }),
          ),
        oo = (i, e) => [Tn(0.7, e), Mn({ transform: io(i) }, { transform: 'none' })];
      var ao = (i) => {
        const { componentCls: e, motionDurationSlow: n } = i;
        return {
          [e]: {
            [`${e}-mask-motion`]: Tn(0, n),
            [`${e}-panel-motion`]: ['left', 'right', 'top', 'bottom'].reduce(
              (a, d) => Object.assign(Object.assign({}, a), { [`&-${d}`]: oo(d, n) }),
              {},
            ),
          },
        };
      };
      const lo = (i) => {
          const {
              borderRadiusSM: e,
              componentCls: n,
              zIndexPopup: a,
              colorBgMask: d,
              colorBgElevated: C,
              motionDurationSlow: k,
              motionDurationMid: $,
              paddingXS: U,
              padding: ee,
              paddingLG: Q,
              fontSizeLG: le,
              lineHeightLG: ie,
              lineWidth: ne,
              lineType: re,
              colorSplit: fe,
              marginXS: pe,
              colorIcon: be,
              colorIconHover: Ie,
              colorBgTextHover: De,
              colorBgTextActive: xe,
              colorText: ke,
              fontWeightStrong: Ee,
              footerPaddingBlock: _e,
              footerPaddingInline: je,
              calc: ve,
            } = i,
            Ae = `${n}-content-wrapper`;
          return {
            [n]: {
              position: 'fixed',
              inset: 0,
              zIndex: a,
              pointerEvents: 'none',
              '&-pure': {
                position: 'relative',
                background: C,
                display: 'flex',
                flexDirection: 'column',
                [`&${n}-left`]: { boxShadow: i.boxShadowDrawerLeft },
                [`&${n}-right`]: { boxShadow: i.boxShadowDrawerRight },
                [`&${n}-top`]: { boxShadow: i.boxShadowDrawerUp },
                [`&${n}-bottom`]: { boxShadow: i.boxShadowDrawerDown },
              },
              '&-inline': { position: 'absolute' },
              [`${n}-mask`]: {
                position: 'absolute',
                inset: 0,
                zIndex: a,
                background: d,
                pointerEvents: 'auto',
              },
              [Ae]: {
                position: 'absolute',
                zIndex: a,
                maxWidth: '100vw',
                transition: `all ${k}`,
                '&-hidden': { display: 'none' },
              },
              [`&-left > ${Ae}`]: {
                top: 0,
                bottom: 0,
                left: { _skip_check_: !0, value: 0 },
                boxShadow: i.boxShadowDrawerLeft,
              },
              [`&-right > ${Ae}`]: {
                top: 0,
                right: { _skip_check_: !0, value: 0 },
                bottom: 0,
                boxShadow: i.boxShadowDrawerRight,
              },
              [`&-top > ${Ae}`]: { top: 0, insetInline: 0, boxShadow: i.boxShadowDrawerUp },
              [`&-bottom > ${Ae}`]: { bottom: 0, insetInline: 0, boxShadow: i.boxShadowDrawerDown },
              [`${n}-content`]: {
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
                overflow: 'auto',
                background: C,
                pointerEvents: 'auto',
              },
              [`${n}-header`]: {
                display: 'flex',
                flex: 0,
                alignItems: 'center',
                padding: `${(0, g.bf)(ee)} ${(0, g.bf)(Q)}`,
                fontSize: le,
                lineHeight: ie,
                borderBottom: `${(0, g.bf)(ne)} ${re} ${fe}`,
                '&-title': {
                  display: 'flex',
                  flex: 1,
                  alignItems: 'center',
                  minWidth: 0,
                  minHeight: 0,
                },
              },
              [`${n}-extra`]: { flex: 'none' },
              [`${n}-close`]: Object.assign(
                {
                  display: 'inline-flex',
                  width: ve(le).add(U).equal(),
                  height: ve(le).add(U).equal(),
                  borderRadius: e,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginInlineEnd: pe,
                  color: be,
                  fontWeight: Ee,
                  fontSize: le,
                  fontStyle: 'normal',
                  lineHeight: 1,
                  textAlign: 'center',
                  textTransform: 'none',
                  textDecoration: 'none',
                  background: 'transparent',
                  border: 0,
                  cursor: 'pointer',
                  transition: `all ${$}`,
                  textRendering: 'auto',
                  '&:hover': { color: Ie, backgroundColor: De, textDecoration: 'none' },
                  '&:active': { backgroundColor: xe },
                },
                (0, dt.Qy)(i),
              ),
              [`${n}-title`]: {
                flex: 1,
                margin: 0,
                color: ke,
                fontWeight: i.fontWeightStrong,
                fontSize: le,
                lineHeight: ie,
              },
              [`${n}-body`]: { flex: 1, minWidth: 0, minHeight: 0, padding: Q, overflow: 'auto' },
              [`${n}-footer`]: {
                flexShrink: 0,
                padding: `${(0, g.bf)(_e)} ${(0, g.bf)(je)}`,
                borderTop: `${(0, g.bf)(ne)} ${re} ${fe}`,
              },
              '&-rtl': { direction: 'rtl' },
            },
          };
        },
        so = (i) => ({
          zIndexPopup: i.zIndexPopupBase,
          footerPaddingBlock: i.paddingXS,
          footerPaddingInline: i.padding,
        });
      var In = (0, Dn.I$)(
          'Drawer',
          (i) => {
            const e = (0, At.TS)(i, {});
            return [lo(e), ao(e)];
          },
          so,
        ),
        _n = function (i, e) {
          var n = {};
          for (var a in i)
            Object.prototype.hasOwnProperty.call(i, a) && e.indexOf(a) < 0 && (n[a] = i[a]);
          if (i != null && typeof Object.getOwnPropertySymbols == 'function')
            for (var d = 0, a = Object.getOwnPropertySymbols(i); d < a.length; d++)
              e.indexOf(a[d]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(i, a[d]) &&
                (n[a[d]] = i[a[d]]);
          return n;
        };
      const $a = null,
        co = { distance: 180 },
        Bn = (i) => {
          var e;
          const {
              rootClassName: n,
              width: a,
              height: d,
              size: C = 'default',
              mask: k = !0,
              push: $ = co,
              open: U,
              afterOpenChange: ee,
              onClose: Q,
              prefixCls: le,
              getContainer: ie,
              style: ne,
              className: re,
              visible: fe,
              afterVisibleChange: pe,
              maskStyle: be,
              drawerStyle: Ie,
              contentWrapperStyle: De,
            } = i,
            xe = _n(i, [
              'rootClassName',
              'width',
              'height',
              'size',
              'mask',
              'push',
              'open',
              'afterOpenChange',
              'onClose',
              'prefixCls',
              'getContainer',
              'style',
              'className',
              'visible',
              'afterVisibleChange',
              'maskStyle',
              'drawerStyle',
              'contentWrapperStyle',
            ]),
            {
              getPopupContainer: ke,
              getPrefixCls: Ee,
              direction: _e,
              drawer: je,
            } = o.useContext(wt.E_),
            ve = Ee('drawer', le),
            [Ae, Ze, We] = In(ve),
            Ne = ie === void 0 && ke ? () => ke(document.body) : ie,
            Re = $e()({ 'no-mask': !k, [`${ve}-rtl`]: _e === 'rtl' }, n, Ze, We),
            Me = o.useMemo(() => (a != null ? a : C === 'large' ? 736 : 378), [a, C]),
            Ye = o.useMemo(() => (d != null ? d : C === 'large' ? 736 : 378), [d, C]),
            Pe = {
              motionName: (0, _t.m)(ve, 'mask-motion'),
              motionAppear: !0,
              motionEnter: !0,
              motionLeave: !0,
              motionDeadline: 500,
            },
            et = (at) => ({
              motionName: (0, _t.m)(ve, `panel-motion-${at}`),
              motionAppear: !0,
              motionEnter: !0,
              motionLeave: !0,
              motionDeadline: 500,
            }),
            st = (0, ro.H)(),
            [ct, He] = (0, On.Cn)('Drawer', xe.zIndex),
            { classNames: tt = {}, styles: Ge = {} } = xe,
            { classNames: rt = {}, styles: Ke = {} } = je || {};
          return Ae(
            o.createElement(
              no.BR,
              null,
              o.createElement(
                to.Ux,
                { status: !0, override: !0 },
                o.createElement(
                  eo.Z.Provider,
                  { value: He },
                  o.createElement(
                    qi,
                    Object.assign({ prefixCls: ve, onClose: Q, maskMotion: Pe, motion: et }, xe, {
                      classNames: {
                        mask: $e()(tt.mask, rt.mask),
                        content: $e()(tt.content, rt.content),
                      },
                      styles: {
                        mask: Object.assign(Object.assign(Object.assign({}, Ge.mask), be), Ke.mask),
                        content: Object.assign(
                          Object.assign(Object.assign({}, Ge.content), Ie),
                          Ke.content,
                        ),
                        wrapper: Object.assign(
                          Object.assign(Object.assign({}, Ge.wrapper), De),
                          Ke.wrapper,
                        ),
                      },
                      open: U != null ? U : fe,
                      mask: k,
                      push: $,
                      width: Me,
                      height: Ye,
                      style: Object.assign(Object.assign({}, je == null ? void 0 : je.style), ne),
                      className: $e()(je == null ? void 0 : je.className, re),
                      rootClassName: Re,
                      getContainer: Ne,
                      afterOpenChange: ee != null ? ee : pe,
                      panelRef: st,
                      zIndex: ct,
                    }),
                    o.createElement(kn, Object.assign({ prefixCls: ve }, xe, { onClose: Q })),
                  ),
                ),
              ),
            ),
          );
        },
        uo = (i) => {
          const { prefixCls: e, style: n, className: a, placement: d = 'right' } = i,
            C = _n(i, ['prefixCls', 'style', 'className', 'placement']),
            { getPrefixCls: k } = o.useContext(wt.E_),
            $ = k('drawer', e),
            [U, ee, Q] = In($),
            le = $e()($, `${$}-pure`, `${$}-${d}`, ee, Q, a);
          return U(
            o.createElement(
              'div',
              { className: le, style: n },
              o.createElement(kn, Object.assign({ prefixCls: $ }, C)),
            ),
          );
        };
      Bn._InternalPanelDoNotUseOrYouWillBeFired = uo;
      var fo = Bn,
        ft = s(90141),
        Pa = function (i, e) {
          var n = {};
          for (var a in i)
            Object.prototype.hasOwnProperty.call(i, a) && e.indexOf(a) < 0 && (n[a] = i[a]);
          if (i != null && typeof Object.getOwnPropertySymbols == 'function')
            for (var d = 0, a = Object.getOwnPropertySymbols(i); d < a.length; d++)
              e.indexOf(a[d]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(i, a[d]) &&
                (n[a[d]] = i[a[d]]);
          return n;
        };
      const Ha = {
          xs: '479.98px',
          sm: '575.98px',
          md: '767.98px',
          lg: '991.98px',
          xl: '1199.98px',
          xxl: '1599.98px',
        },
        An = o.createContext({}),
        Fa = (() => {
          let i = 0;
          return function () {
            let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '';
            return (i += 1), `${e}${i}`;
          };
        })(),
        Wa = null;
      var Ua = null,
        ho = s(68464),
        po = s(45680),
        Rt = s(36760),
        Lt = s(76189),
        mo = s(28041),
        go = function (i, e) {
          var n = {};
          for (var a in i)
            Object.prototype.hasOwnProperty.call(i, a) && e.indexOf(a) < 0 && (n[a] = i[a]);
          if (i != null && typeof Object.getOwnPropertySymbols == 'function')
            for (var d = 0, a = Object.getOwnPropertySymbols(i); d < a.length; d++)
              e.indexOf(a[d]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(i, a[d]) &&
                (n[a[d]] = i[a[d]]);
          return n;
        },
        Rn = (i) => {
          const { prefixCls: e, className: n, dashed: a } = i,
            d = go(i, ['prefixCls', 'className', 'dashed']),
            { getPrefixCls: C } = o.useContext(wt.E_),
            k = C('menu', e),
            $ = $e()({ [`${k}-item-divider-dashed`]: !!a }, n);
          return o.createElement(ft.iz, Object.assign({ className: $ }, d));
        },
        vo = s(71783),
        Ln = s(28426),
        Ot = (0, o.createContext)({ prefixCls: '', firstLevel: !0, inlineCollapsed: !1 }),
        Nn = (i) => {
          var e;
          const { className: n, children: a, icon: d, title: C, danger: k } = i,
            {
              prefixCls: $,
              firstLevel: U,
              direction: ee,
              disableMenuItemTitleTooltip: Q,
              inlineCollapsed: le,
            } = o.useContext(Ot),
            ie = (Ie) => {
              const De = o.createElement('span', { className: `${$}-title-content` }, a);
              return (!d || (o.isValidElement(a) && a.type === 'span')) &&
                a &&
                Ie &&
                U &&
                typeof a == 'string'
                ? o.createElement('div', { className: `${$}-inline-collapsed-noicon` }, a.charAt(0))
                : De;
            },
            { siderCollapsed: ne } = o.useContext(An);
          let re = C;
          typeof C == 'undefined' ? (re = U ? a : '') : C === !1 && (re = '');
          const fe = { title: re };
          !ne && !le && ((fe.title = null), (fe.open = !1));
          const pe = (0, vo.Z)(a).length;
          let be = o.createElement(
            ft.ck,
            Object.assign({}, (0, Rt.Z)(i, ['title', 'icon', 'danger']), {
              className: $e()(
                { [`${$}-item-danger`]: k, [`${$}-item-only-child`]: (d ? pe + 1 : pe) === 1 },
                n,
              ),
              title: typeof C == 'string' ? C : void 0,
            }),
            (0, Lt.Tm)(d, {
              className: $e()(
                o.isValidElement(d)
                  ? (e = d.props) === null || e === void 0
                    ? void 0
                    : e.className
                  : '',
                `${$}-item-icon`,
              ),
            }),
            ie(le),
          );
          return (
            Q ||
              (be = o.createElement(
                Ln.Z,
                Object.assign({}, fe, {
                  placement: ee === 'rtl' ? 'left' : 'right',
                  overlayClassName: `${$}-inline-collapsed-tooltip`,
                }),
                be,
              )),
            be
          );
        },
        $n = (i) => {
          var e;
          const { popupClassName: n, icon: a, title: d, theme: C } = i,
            k = o.useContext(Ot),
            { prefixCls: $, inlineCollapsed: U, theme: ee } = k,
            Q = (0, ft.Xl)();
          let le;
          if (!a)
            le =
              U && !Q.length && d && typeof d == 'string'
                ? o.createElement('div', { className: `${$}-inline-collapsed-noicon` }, d.charAt(0))
                : o.createElement('span', { className: `${$}-title-content` }, d);
          else {
            const re = o.isValidElement(d) && d.type === 'span';
            le = o.createElement(
              o.Fragment,
              null,
              (0, Lt.Tm)(a, {
                className: $e()(
                  o.isValidElement(a)
                    ? (e = a.props) === null || e === void 0
                      ? void 0
                      : e.className
                    : '',
                  `${$}-item-icon`,
                ),
              }),
              re ? d : o.createElement('span', { className: `${$}-title-content` }, d),
            );
          }
          const ie = o.useMemo(() => Object.assign(Object.assign({}, k), { firstLevel: !1 }), [k]),
            [ne] = (0, On.Cn)('Menu');
          return o.createElement(
            Ot.Provider,
            { value: ie },
            o.createElement(
              ft.Wd,
              Object.assign({}, (0, Rt.Z)(i, ['icon']), {
                title: le,
                popupClassName: $e()($, n, `${$}-${C || ee}`),
                popupStyle: { zIndex: ne },
              }),
            ),
          );
        },
        yo = function (i, e) {
          var n = {};
          for (var a in i)
            Object.prototype.hasOwnProperty.call(i, a) && e.indexOf(a) < 0 && (n[a] = i[a]);
          if (i != null && typeof Object.getOwnPropertySymbols == 'function')
            for (var d = 0, a = Object.getOwnPropertySymbols(i); d < a.length; d++)
              e.indexOf(a[d]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(i, a[d]) &&
                (n[a[d]] = i[a[d]]);
          return n;
        };
      function Nt(i) {
        return (i || [])
          .map((e, n) => {
            if (e && typeof e == 'object') {
              const a = e,
                { label: d, children: C, key: k, type: $ } = a,
                U = yo(a, ['label', 'children', 'key', 'type']),
                ee = k != null ? k : `tmp-${n}`;
              return C || $ === 'group'
                ? $ === 'group'
                  ? o.createElement(ft.BW, Object.assign({ key: ee }, U, { title: d }), Nt(C))
                  : o.createElement($n, Object.assign({ key: ee }, U, { title: d }), Nt(C))
                : $ === 'divider'
                  ? o.createElement(Rn, Object.assign({ key: ee }, U))
                  : o.createElement(Nn, Object.assign({ key: ee }, U), d);
            }
            return null;
          })
          .filter((e) => e);
      }
      function bo(i) {
        return o.useMemo(() => i && Nt(i), [i]);
      }
      var Ga = function (i, e) {
        var n = {};
        for (var a in i)
          Object.prototype.hasOwnProperty.call(i, a) && e.indexOf(a) < 0 && (n[a] = i[a]);
        if (i != null && typeof Object.getOwnPropertySymbols == 'function')
          for (var d = 0, a = Object.getOwnPropertySymbols(i); d < a.length; d++)
            e.indexOf(a[d]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(i, a[d]) &&
              (n[a[d]] = i[a[d]]);
        return n;
      };
      const xo = o.createContext(null),
        Ka = null;
      var Pn = xo,
        Hn = s(99978),
        wo = s(74885),
        Fn = s(34840),
        So = s(41326),
        Co = (i) => {
          const {
            componentCls: e,
            motionDurationSlow: n,
            horizontalLineHeight: a,
            colorSplit: d,
            lineWidth: C,
            lineType: k,
            itemPaddingInline: $,
          } = i;
          return {
            [`${e}-horizontal`]: {
              lineHeight: a,
              border: 0,
              borderBottom: `${(0, g.bf)(C)} ${k} ${d}`,
              boxShadow: 'none',
              '&::after': { display: 'block', clear: 'both', height: 0, content: '"\\20"' },
              [`${e}-item, ${e}-submenu`]: {
                position: 'relative',
                display: 'inline-block',
                verticalAlign: 'bottom',
                paddingInline: $,
              },
              [`> ${e}-item:hover,
        > ${e}-item-active,
        > ${e}-submenu ${e}-submenu-title:hover`]: { backgroundColor: 'transparent' },
              [`${e}-item, ${e}-submenu-title`]: {
                transition: [`border-color ${n}`, `background ${n}`].join(','),
              },
              [`${e}-submenu-arrow`]: { display: 'none' },
            },
          };
        },
        Eo = (i) => {
          let { componentCls: e, menuArrowOffset: n, calc: a } = i;
          return {
            [`${e}-rtl`]: { direction: 'rtl' },
            [`${e}-submenu-rtl`]: { transformOrigin: '100% 0' },
            [`${e}-rtl${e}-vertical,
    ${e}-submenu-rtl ${e}-vertical`]: {
              [`${e}-submenu-arrow`]: {
                '&::before': {
                  transform: `rotate(-45deg) translateY(${(0, g.bf)(a(n).mul(-1).equal())})`,
                },
                '&::after': { transform: `rotate(45deg) translateY(${(0, g.bf)(n)})` },
              },
            },
          };
        };
      const Wn = (i) => Object.assign({}, (0, dt.oN)(i));
      var Un = (i, e) => {
        const {
          componentCls: n,
          itemColor: a,
          itemSelectedColor: d,
          groupTitleColor: C,
          itemBg: k,
          subMenuItemBg: $,
          itemSelectedBg: U,
          activeBarHeight: ee,
          activeBarWidth: Q,
          activeBarBorderWidth: le,
          motionDurationSlow: ie,
          motionEaseInOut: ne,
          motionEaseOut: re,
          itemPaddingInline: fe,
          motionDurationMid: pe,
          itemHoverColor: be,
          lineType: Ie,
          colorSplit: De,
          itemDisabledColor: xe,
          dangerItemColor: ke,
          dangerItemHoverColor: Ee,
          dangerItemSelectedColor: _e,
          dangerItemActiveBg: je,
          dangerItemSelectedBg: ve,
          popupBg: Ae,
          itemHoverBg: Ze,
          itemActiveBg: We,
          menuSubMenuBg: Ne,
          horizontalItemSelectedColor: Re,
          horizontalItemSelectedBg: Me,
          horizontalItemBorderRadius: Ye,
          horizontalItemHoverBg: Pe,
        } = i;
        return {
          [`${n}-${e}, ${n}-${e} > ${n}`]: {
            color: a,
            background: k,
            [`&${n}-root:focus-visible`]: Object.assign({}, Wn(i)),
            [`${n}-item-group-title`]: { color: C },
            [`${n}-submenu-selected`]: { [`> ${n}-submenu-title`]: { color: d } },
            [`${n}-item, ${n}-submenu-title`]: {
              color: a,
              [`&:not(${n}-item-disabled):focus-visible`]: Object.assign({}, Wn(i)),
            },
            [`${n}-item-disabled, ${n}-submenu-disabled`]: { color: `${xe} !important` },
            [`${n}-item:not(${n}-item-selected):not(${n}-submenu-selected)`]: {
              [`&:hover, > ${n}-submenu-title:hover`]: { color: be },
            },
            [`&:not(${n}-horizontal)`]: {
              [`${n}-item:not(${n}-item-selected)`]: {
                '&:hover': { backgroundColor: Ze },
                '&:active': { backgroundColor: We },
              },
              [`${n}-submenu-title`]: {
                '&:hover': { backgroundColor: Ze },
                '&:active': { backgroundColor: We },
              },
            },
            [`${n}-item-danger`]: {
              color: ke,
              [`&${n}-item:hover`]: {
                [`&:not(${n}-item-selected):not(${n}-submenu-selected)`]: { color: Ee },
              },
              [`&${n}-item:active`]: { background: je },
            },
            [`${n}-item a`]: { '&, &:hover': { color: 'inherit' } },
            [`${n}-item-selected`]: {
              color: d,
              [`&${n}-item-danger`]: { color: _e },
              ['a, a:hover']: { color: 'inherit' },
            },
            [`& ${n}-item-selected`]: {
              backgroundColor: U,
              [`&${n}-item-danger`]: { backgroundColor: ve },
            },
            [`&${n}-submenu > ${n}`]: { backgroundColor: Ne },
            [`&${n}-popup > ${n}`]: { backgroundColor: Ae },
            [`&${n}-submenu-popup > ${n}`]: { backgroundColor: Ae },
            [`&${n}-horizontal`]: Object.assign(
              Object.assign({}, e === 'dark' ? { borderBottom: 0 } : {}),
              {
                [`> ${n}-item, > ${n}-submenu`]: {
                  top: le,
                  marginTop: i.calc(le).mul(-1).equal(),
                  marginBottom: 0,
                  borderRadius: Ye,
                  '&::after': {
                    position: 'absolute',
                    insetInline: fe,
                    bottom: 0,
                    borderBottom: `${(0, g.bf)(ee)} solid transparent`,
                    transition: `border-color ${ie} ${ne}`,
                    content: '""',
                  },
                  ['&:hover, &-active, &-open']: {
                    background: Pe,
                    '&::after': { borderBottomWidth: ee, borderBottomColor: Re },
                  },
                  ['&-selected']: {
                    color: Re,
                    backgroundColor: Me,
                    '&:hover': { backgroundColor: Me },
                    '&::after': { borderBottomWidth: ee, borderBottomColor: Re },
                  },
                },
              },
            ),
            [`&${n}-root`]: {
              [`&${n}-inline, &${n}-vertical`]: { borderInlineEnd: `${(0, g.bf)(le)} ${Ie} ${De}` },
            },
            [`&${n}-inline`]: {
              [`${n}-sub${n}-inline`]: { background: $ },
              [`${n}-item`]: {
                position: 'relative',
                '&::after': {
                  position: 'absolute',
                  insetBlock: 0,
                  insetInlineEnd: 0,
                  borderInlineEnd: `${(0, g.bf)(Q)} solid ${d}`,
                  transform: 'scaleY(0.0001)',
                  opacity: 0,
                  transition: [`transform ${pe} ${re}`, `opacity ${pe} ${re}`].join(','),
                  content: '""',
                },
                [`&${n}-item-danger`]: { '&::after': { borderInlineEndColor: _e } },
              },
              [`${n}-selected, ${n}-item-selected`]: {
                '&::after': {
                  transform: 'scaleY(1)',
                  opacity: 1,
                  transition: [`transform ${pe} ${ne}`, `opacity ${pe} ${ne}`].join(','),
                },
              },
            },
          },
        };
      };
      const zn = (i) => {
        const {
            componentCls: e,
            itemHeight: n,
            itemMarginInline: a,
            padding: d,
            menuArrowSize: C,
            marginXS: k,
            itemMarginBlock: $,
            itemWidth: U,
          } = i,
          ee = i.calc(C).add(d).add(k).equal();
        return {
          [`${e}-item`]: { position: 'relative', overflow: 'hidden' },
          [`${e}-item, ${e}-submenu-title`]: {
            height: n,
            lineHeight: (0, g.bf)(n),
            paddingInline: d,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            marginInline: a,
            marginBlock: $,
            width: U,
          },
          [`> ${e}-item,
            > ${e}-submenu > ${e}-submenu-title`]: { height: n, lineHeight: (0, g.bf)(n) },
          [`${e}-item-group-list ${e}-submenu-title,
            ${e}-submenu-title`]: { paddingInlineEnd: ee },
        };
      };
      var jo = (i) => {
        const {
            componentCls: e,
            iconCls: n,
            itemHeight: a,
            colorTextLightSolid: d,
            dropdownWidth: C,
            controlHeightLG: k,
            motionDurationMid: $,
            motionEaseOut: U,
            paddingXL: ee,
            itemMarginInline: Q,
            fontSizeLG: le,
            motionDurationSlow: ie,
            paddingXS: ne,
            boxShadowSecondary: re,
            collapsedWidth: fe,
            collapsedIconSize: pe,
          } = i,
          be = {
            height: a,
            lineHeight: (0, g.bf)(a),
            listStylePosition: 'inside',
            listStyleType: 'disc',
          };
        return [
          {
            [e]: {
              ['&-inline, &-vertical']: Object.assign(
                { [`&${e}-root`]: { boxShadow: 'none' } },
                zn(i),
              ),
            },
            [`${e}-submenu-popup`]: {
              [`${e}-vertical`]: Object.assign(Object.assign({}, zn(i)), { boxShadow: re }),
            },
          },
          {
            [`${e}-submenu-popup ${e}-vertical${e}-sub`]: {
              minWidth: C,
              maxHeight: `calc(100vh - ${(0, g.bf)(i.calc(k).mul(2.5).equal())})`,
              padding: '0',
              overflow: 'hidden',
              borderInlineEnd: 0,
              "&:not([class*='-active'])": { overflowX: 'hidden', overflowY: 'auto' },
            },
          },
          {
            [`${e}-inline`]: {
              width: '100%',
              [`&${e}-root`]: {
                [`${e}-item, ${e}-submenu-title`]: {
                  display: 'flex',
                  alignItems: 'center',
                  transition: [`border-color ${ie}`, `background ${ie}`, `padding ${$} ${U}`].join(
                    ',',
                  ),
                  [`> ${e}-title-content`]: {
                    flex: 'auto',
                    minWidth: 0,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  },
                  '> *': { flex: 'none' },
                },
              },
              [`${e}-sub${e}-inline`]: {
                padding: 0,
                border: 0,
                borderRadius: 0,
                boxShadow: 'none',
                [`& > ${e}-submenu > ${e}-submenu-title`]: be,
                [`& ${e}-item-group-title`]: { paddingInlineStart: ee },
              },
              [`${e}-item`]: be,
            },
          },
          {
            [`${e}-inline-collapsed`]: {
              width: fe,
              [`&${e}-root`]: {
                [`${e}-item, ${e}-submenu ${e}-submenu-title`]: {
                  [`> ${e}-inline-collapsed-noicon`]: { fontSize: le, textAlign: 'center' },
                },
              },
              [`> ${e}-item,
          > ${e}-item-group > ${e}-item-group-list > ${e}-item,
          > ${e}-item-group > ${e}-item-group-list > ${e}-submenu > ${e}-submenu-title,
          > ${e}-submenu > ${e}-submenu-title`]: {
                insetInlineStart: 0,
                paddingInline: `calc(50% - ${(0, g.bf)(i.calc(le).div(2).equal())} - ${(0, g.bf)(Q)})`,
                textOverflow: 'clip',
                [`
            ${e}-submenu-arrow,
            ${e}-submenu-expand-icon
          `]: { opacity: 0 },
                [`${e}-item-icon, ${n}`]: {
                  margin: 0,
                  fontSize: pe,
                  lineHeight: (0, g.bf)(a),
                  '+ span': { display: 'inline-block', opacity: 0 },
                },
              },
              [`${e}-item-icon, ${n}`]: { display: 'inline-block' },
              '&-tooltip': {
                pointerEvents: 'none',
                [`${e}-item-icon, ${n}`]: { display: 'none' },
                'a, a:hover': { color: d },
              },
              [`${e}-item-group-title`]: Object.assign(Object.assign({}, dt.vS), {
                paddingInline: ne,
              }),
            },
          },
        ];
      };
      const Zn = (i) => {
          const {
            componentCls: e,
            motionDurationSlow: n,
            motionDurationMid: a,
            motionEaseInOut: d,
            motionEaseOut: C,
            iconCls: k,
            iconSize: $,
            iconMarginInlineEnd: U,
          } = i;
          return {
            [`${e}-item, ${e}-submenu-title`]: {
              position: 'relative',
              display: 'block',
              margin: 0,
              whiteSpace: 'nowrap',
              cursor: 'pointer',
              transition: [`border-color ${n}`, `background ${n}`, `padding ${n} ${d}`].join(','),
              [`${e}-item-icon, ${k}`]: {
                minWidth: $,
                fontSize: $,
                transition: [`font-size ${a} ${C}`, `margin ${n} ${d}`, `color ${n}`].join(','),
                '+ span': {
                  marginInlineStart: U,
                  opacity: 1,
                  transition: [`opacity ${n} ${d}`, `margin ${n}`, `color ${n}`].join(','),
                },
              },
              [`${e}-item-icon`]: Object.assign({}, (0, dt.Ro)()),
              [`&${e}-item-only-child`]: { [`> ${k}, > ${e}-item-icon`]: { marginInlineEnd: 0 } },
            },
            [`${e}-item-disabled, ${e}-submenu-disabled`]: {
              background: 'none !important',
              cursor: 'not-allowed',
              '&::after': { borderColor: 'transparent !important' },
              a: { color: 'inherit !important' },
              [`> ${e}-submenu-title`]: { color: 'inherit !important', cursor: 'not-allowed' },
            },
          };
        },
        Vn = (i) => {
          const {
            componentCls: e,
            motionDurationSlow: n,
            motionEaseInOut: a,
            borderRadius: d,
            menuArrowSize: C,
            menuArrowOffset: k,
          } = i;
          return {
            [`${e}-submenu`]: {
              ['&-expand-icon, &-arrow']: {
                position: 'absolute',
                top: '50%',
                insetInlineEnd: i.margin,
                width: C,
                color: 'currentcolor',
                transform: 'translateY(-50%)',
                transition: `transform ${n} ${a}, opacity ${n}`,
              },
              '&-arrow': {
                '&::before, &::after': {
                  position: 'absolute',
                  width: i.calc(C).mul(0.6).equal(),
                  height: i.calc(C).mul(0.15).equal(),
                  backgroundColor: 'currentcolor',
                  borderRadius: d,
                  transition: [
                    `background ${n} ${a}`,
                    `transform ${n} ${a}`,
                    `top ${n} ${a}`,
                    `color ${n} ${a}`,
                  ].join(','),
                  content: '""',
                },
                '&::before': {
                  transform: `rotate(45deg) translateY(${(0, g.bf)(i.calc(k).mul(-1).equal())})`,
                },
                '&::after': { transform: `rotate(-45deg) translateY(${(0, g.bf)(k)})` },
              },
            },
          };
        },
        Oo = (i) => {
          const {
            antCls: e,
            componentCls: n,
            fontSize: a,
            motionDurationSlow: d,
            motionDurationMid: C,
            motionEaseInOut: k,
            paddingXS: $,
            padding: U,
            colorSplit: ee,
            lineWidth: Q,
            zIndexPopup: le,
            borderRadiusLG: ie,
            subMenuItemBorderRadius: ne,
            menuArrowSize: re,
            menuArrowOffset: fe,
            lineType: pe,
            groupTitleLineHeight: be,
            groupTitleFontSize: Ie,
          } = i;
          return [
            {
              '': {
                [`${n}`]: Object.assign(Object.assign({}, (0, dt.dF)()), {
                  ['&-hidden']: { display: 'none' },
                }),
              },
              [`${n}-submenu-hidden`]: { display: 'none' },
            },
            {
              [n]: Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(Object.assign(Object.assign({}, (0, dt.Wf)(i)), (0, dt.dF)()), {
                        marginBottom: 0,
                        paddingInlineStart: 0,
                        fontSize: a,
                        lineHeight: 0,
                        listStyle: 'none',
                        outline: 'none',
                        transition: `width ${d} cubic-bezier(0.2, 0, 0, 1) 0s`,
                        ['ul, ol']: { margin: 0, padding: 0, listStyle: 'none' },
                        ['&-overflow']: { display: 'flex', [`${n}-item`]: { flex: 'none' } },
                        [`${n}-item, ${n}-submenu, ${n}-submenu-title`]: {
                          borderRadius: i.itemBorderRadius,
                        },
                        [`${n}-item-group-title`]: {
                          padding: `${(0, g.bf)($)} ${(0, g.bf)(U)}`,
                          fontSize: Ie,
                          lineHeight: be,
                          transition: `all ${d}`,
                        },
                        [`&-horizontal ${n}-submenu`]: {
                          transition: [`border-color ${d} ${k}`, `background ${d} ${k}`].join(','),
                        },
                        [`${n}-submenu, ${n}-submenu-inline`]: {
                          transition: [
                            `border-color ${d} ${k}`,
                            `background ${d} ${k}`,
                            `padding ${C} ${k}`,
                          ].join(','),
                        },
                        [`${n}-submenu ${n}-sub`]: {
                          cursor: 'initial',
                          transition: [`background ${d} ${k}`, `padding ${d} ${k}`].join(','),
                        },
                        [`${n}-title-content`]: {
                          transition: `color ${d}`,
                          [`> ${e}-typography-ellipsis-single-line`]: {
                            display: 'inline',
                            verticalAlign: 'unset',
                          },
                        },
                        [`${n}-item a`]: {
                          '&::before': {
                            position: 'absolute',
                            inset: 0,
                            backgroundColor: 'transparent',
                            content: '""',
                          },
                        },
                        [`${n}-item-divider`]: {
                          overflow: 'hidden',
                          lineHeight: 0,
                          borderColor: ee,
                          borderStyle: pe,
                          borderWidth: 0,
                          borderTopWidth: Q,
                          marginBlock: Q,
                          padding: 0,
                          '&-dashed': { borderStyle: 'dashed' },
                        },
                      }),
                      Zn(i),
                    ),
                    {
                      [`${n}-item-group`]: {
                        [`${n}-item-group-list`]: {
                          margin: 0,
                          padding: 0,
                          [`${n}-item, ${n}-submenu-title`]: {
                            paddingInline: `${(0, g.bf)(i.calc(a).mul(2).equal())} ${(0, g.bf)(U)}`,
                          },
                        },
                      },
                      '&-submenu': {
                        '&-popup': {
                          position: 'absolute',
                          zIndex: le,
                          borderRadius: ie,
                          boxShadow: 'none',
                          transformOrigin: '0 0',
                          [`&${n}-submenu`]: { background: 'transparent' },
                          '&::before': {
                            position: 'absolute',
                            inset: 0,
                            zIndex: -1,
                            width: '100%',
                            height: '100%',
                            opacity: 0,
                            content: '""',
                          },
                          [`> ${n}`]: Object.assign(
                            Object.assign(Object.assign({ borderRadius: ie }, Zn(i)), Vn(i)),
                            {
                              [`${n}-item, ${n}-submenu > ${n}-submenu-title`]: {
                                borderRadius: ne,
                              },
                              [`${n}-submenu-title::after`]: { transition: `transform ${d} ${k}` },
                            },
                          ),
                        },
                        [`
          &-placement-leftTop,
          &-placement-bottomRight,
          `]: { transformOrigin: '100% 0' },
                        [`
          &-placement-leftBottom,
          &-placement-topRight,
          `]: { transformOrigin: '100% 100%' },
                        [`
          &-placement-rightBottom,
          &-placement-topLeft,
          `]: { transformOrigin: '0 100%' },
                        [`
          &-placement-bottomLeft,
          &-placement-rightTop,
          `]: { transformOrigin: '0 0' },
                        [`
          &-placement-leftTop,
          &-placement-leftBottom
          `]: { paddingInlineEnd: i.paddingXS },
                        [`
          &-placement-rightTop,
          &-placement-rightBottom
          `]: { paddingInlineStart: i.paddingXS },
                        [`
          &-placement-topRight,
          &-placement-topLeft
          `]: { paddingBottom: i.paddingXS },
                        [`
          &-placement-bottomRight,
          &-placement-bottomLeft
          `]: { paddingTop: i.paddingXS },
                      },
                    },
                  ),
                  Vn(i),
                ),
                {
                  [`&-inline-collapsed ${n}-submenu-arrow,
        &-inline ${n}-submenu-arrow`]: {
                    '&::before': { transform: `rotate(-45deg) translateX(${(0, g.bf)(fe)})` },
                    '&::after': {
                      transform: `rotate(45deg) translateX(${(0, g.bf)(i.calc(fe).mul(-1).equal())})`,
                    },
                  },
                  [`${n}-submenu-open${n}-submenu-inline > ${n}-submenu-title > ${n}-submenu-arrow`]:
                    {
                      transform: `translateY(${(0, g.bf)(i.calc(re).mul(0.2).mul(-1).equal())})`,
                      '&::after': {
                        transform: `rotate(-45deg) translateX(${(0, g.bf)(i.calc(fe).mul(-1).equal())})`,
                      },
                      '&::before': { transform: `rotate(45deg) translateX(${(0, g.bf)(fe)})` },
                    },
                },
              ),
            },
            { [`${e}-layout-header`]: { [n]: { lineHeight: 'inherit' } } },
          ];
        },
        ko = (i) => {
          var e, n, a;
          const {
              colorPrimary: d,
              colorError: C,
              colorTextDisabled: k,
              colorErrorBg: $,
              colorText: U,
              colorTextDescription: ee,
              colorBgContainer: Q,
              colorFillAlter: le,
              colorFillContent: ie,
              lineWidth: ne,
              lineWidthBold: re,
              controlItemBgActive: fe,
              colorBgTextHover: pe,
              controlHeightLG: be,
              lineHeight: Ie,
              colorBgElevated: De,
              marginXXS: xe,
              padding: ke,
              fontSize: Ee,
              controlHeightSM: _e,
              fontSizeLG: je,
              colorTextLightSolid: ve,
              colorErrorHover: Ae,
            } = i,
            Ze = (e = i.activeBarWidth) !== null && e !== void 0 ? e : 0,
            We = (n = i.activeBarBorderWidth) !== null && n !== void 0 ? n : ne,
            Ne = (a = i.itemMarginInline) !== null && a !== void 0 ? a : i.marginXXS,
            Re = new Hn.C(ve).setAlpha(0.65).toRgbString();
          return {
            dropdownWidth: 160,
            zIndexPopup: i.zIndexPopupBase + 50,
            radiusItem: i.borderRadiusLG,
            itemBorderRadius: i.borderRadiusLG,
            radiusSubMenuItem: i.borderRadiusSM,
            subMenuItemBorderRadius: i.borderRadiusSM,
            colorItemText: U,
            itemColor: U,
            colorItemTextHover: U,
            itemHoverColor: U,
            colorItemTextHoverHorizontal: d,
            horizontalItemHoverColor: d,
            colorGroupTitle: ee,
            groupTitleColor: ee,
            colorItemTextSelected: d,
            itemSelectedColor: d,
            colorItemTextSelectedHorizontal: d,
            horizontalItemSelectedColor: d,
            colorItemBg: Q,
            itemBg: Q,
            colorItemBgHover: pe,
            itemHoverBg: pe,
            colorItemBgActive: ie,
            itemActiveBg: fe,
            colorSubItemBg: le,
            subMenuItemBg: le,
            colorItemBgSelected: fe,
            itemSelectedBg: fe,
            colorItemBgSelectedHorizontal: 'transparent',
            horizontalItemSelectedBg: 'transparent',
            colorActiveBarWidth: 0,
            activeBarWidth: Ze,
            colorActiveBarHeight: re,
            activeBarHeight: re,
            colorActiveBarBorderSize: ne,
            activeBarBorderWidth: We,
            colorItemTextDisabled: k,
            itemDisabledColor: k,
            colorDangerItemText: C,
            dangerItemColor: C,
            colorDangerItemTextHover: C,
            dangerItemHoverColor: C,
            colorDangerItemTextSelected: C,
            dangerItemSelectedColor: C,
            colorDangerItemBgActive: $,
            dangerItemActiveBg: $,
            colorDangerItemBgSelected: $,
            dangerItemSelectedBg: $,
            itemMarginInline: Ne,
            horizontalItemBorderRadius: 0,
            horizontalItemHoverBg: 'transparent',
            itemHeight: be,
            groupTitleLineHeight: Ie,
            collapsedWidth: be * 2,
            popupBg: De,
            itemMarginBlock: xe,
            itemPaddingInline: ke,
            horizontalLineHeight: `${be * 1.15}px`,
            iconSize: Ee,
            iconMarginInlineEnd: _e - Ee,
            collapsedIconSize: je,
            groupTitleFontSize: Ee,
            darkItemDisabledColor: new Hn.C(ve).setAlpha(0.25).toRgbString(),
            darkItemColor: Re,
            darkDangerItemColor: C,
            darkItemBg: '#001529',
            darkPopupBg: '#001529',
            darkSubMenuItemBg: '#000c17',
            darkItemSelectedColor: ve,
            darkItemSelectedBg: d,
            darkDangerItemSelectedBg: C,
            darkItemHoverBg: 'transparent',
            darkGroupTitleColor: Re,
            darkItemHoverColor: ve,
            darkDangerItemHoverColor: Ae,
            darkDangerItemSelectedColor: ve,
            darkDangerItemActiveBg: C,
            itemWidth: Ze ? `calc(100% + ${We}px)` : `calc(100% - ${Ne * 2}px)`,
          };
        };
      var Do = function (i) {
          let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : i,
            n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
          return (0, Dn.I$)(
            'Menu',
            (d) => {
              const {
                  colorBgElevated: C,
                  controlHeightLG: k,
                  fontSize: $,
                  darkItemColor: U,
                  darkDangerItemColor: ee,
                  darkItemBg: Q,
                  darkSubMenuItemBg: le,
                  darkItemSelectedColor: ie,
                  darkItemSelectedBg: ne,
                  darkDangerItemSelectedBg: re,
                  darkItemHoverBg: fe,
                  darkGroupTitleColor: pe,
                  darkItemHoverColor: be,
                  darkItemDisabledColor: Ie,
                  darkDangerItemHoverColor: De,
                  darkDangerItemSelectedColor: xe,
                  darkDangerItemActiveBg: ke,
                  popupBg: Ee,
                  darkPopupBg: _e,
                } = d,
                je = d.calc($).div(7).mul(5).equal(),
                ve = (0, At.TS)(d, {
                  menuArrowSize: je,
                  menuHorizontalHeight: d.calc(k).mul(1.15).equal(),
                  menuArrowOffset: d.calc(je).mul(0.25).equal(),
                  menuSubMenuBg: C,
                  calc: d.calc,
                  popupBg: Ee,
                }),
                Ae = (0, At.TS)(ve, {
                  itemColor: U,
                  itemHoverColor: be,
                  groupTitleColor: pe,
                  itemSelectedColor: ie,
                  itemBg: Q,
                  popupBg: _e,
                  subMenuItemBg: le,
                  itemActiveBg: 'transparent',
                  itemSelectedBg: ne,
                  activeBarHeight: 0,
                  activeBarBorderWidth: 0,
                  itemHoverBg: fe,
                  itemDisabledColor: Ie,
                  dangerItemColor: ee,
                  dangerItemHoverColor: De,
                  dangerItemSelectedColor: xe,
                  dangerItemActiveBg: ke,
                  dangerItemSelectedBg: re,
                  menuSubMenuBg: le,
                  horizontalItemSelectedColor: ie,
                  horizontalItemSelectedBg: ne,
                });
              return [
                Oo(ve),
                Co(ve),
                jo(ve),
                Un(ve, 'light'),
                Un(Ae, 'dark'),
                Eo(ve),
                (0, wo.Z)(ve),
                (0, Fn.oN)(ve, 'slide-up'),
                (0, Fn.oN)(ve, 'slide-down'),
                (0, So._y)(ve, 'zoom-big'),
              ];
            },
            ko,
            {
              deprecatedTokens: [
                ['colorGroupTitle', 'groupTitleColor'],
                ['radiusItem', 'itemBorderRadius'],
                ['radiusSubMenuItem', 'subMenuItemBorderRadius'],
                ['colorItemText', 'itemColor'],
                ['colorItemTextHover', 'itemHoverColor'],
                ['colorItemTextHoverHorizontal', 'horizontalItemHoverColor'],
                ['colorItemTextSelected', 'itemSelectedColor'],
                ['colorItemTextSelectedHorizontal', 'horizontalItemSelectedColor'],
                ['colorItemTextDisabled', 'itemDisabledColor'],
                ['colorDangerItemText', 'dangerItemColor'],
                ['colorDangerItemTextHover', 'dangerItemHoverColor'],
                ['colorDangerItemTextSelected', 'dangerItemSelectedColor'],
                ['colorDangerItemBgActive', 'dangerItemActiveBg'],
                ['colorDangerItemBgSelected', 'dangerItemSelectedBg'],
                ['colorItemBg', 'itemBg'],
                ['colorItemBgHover', 'itemHoverBg'],
                ['colorSubItemBg', 'subMenuItemBg'],
                ['colorItemBgActive', 'itemActiveBg'],
                ['colorItemBgSelectedHorizontal', 'horizontalItemSelectedBg'],
                ['colorActiveBarWidth', 'activeBarWidth'],
                ['colorActiveBarHeight', 'activeBarHeight'],
                ['colorActiveBarBorderSize', 'activeBarBorderWidth'],
                ['colorItemBgSelected', 'itemSelectedBg'],
              ],
              injectStyle: n,
              unitless: { groupTitleLineHeight: !0 },
            },
          )(i, e);
        },
        Mo = function (i, e) {
          var n = {};
          for (var a in i)
            Object.prototype.hasOwnProperty.call(i, a) && e.indexOf(a) < 0 && (n[a] = i[a]);
          if (i != null && typeof Object.getOwnPropertySymbols == 'function')
            for (var d = 0, a = Object.getOwnPropertySymbols(i); d < a.length; d++)
              e.indexOf(a[d]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(i, a[d]) &&
                (n[a[d]] = i[a[d]]);
          return n;
        };
      function $t(i) {
        return i === null || i === !1;
      }
      var To = (0, o.forwardRef)((i, e) => {
        var n;
        const a = o.useContext(Pn),
          d = a || {},
          { getPrefixCls: C, getPopupContainer: k, direction: $, menu: U } = o.useContext(wt.E_),
          ee = C(),
          {
            prefixCls: Q,
            className: le,
            style: ie,
            theme: ne = 'light',
            expandIcon: re,
            _internalDisableMenuItemTitleTooltip: fe,
            inlineCollapsed: pe,
            siderCollapsed: be,
            items: Ie,
            children: De,
            rootClassName: xe,
            mode: ke,
            selectable: Ee,
            onClick: _e,
            overflowedIndicatorPopupClassName: je,
          } = i,
          ve = Mo(i, [
            'prefixCls',
            'className',
            'style',
            'theme',
            'expandIcon',
            '_internalDisableMenuItemTitleTooltip',
            'inlineCollapsed',
            'siderCollapsed',
            'items',
            'children',
            'rootClassName',
            'mode',
            'selectable',
            'onClick',
            'overflowedIndicatorPopupClassName',
          ]),
          Ae = (0, Rt.Z)(ve, ['collapsedWidth']),
          Ze = bo(Ie) || De;
        (n = d.validator) === null || n === void 0 || n.call(d, { mode: ke });
        const We = (0, po.zX)(function () {
            var Ke;
            _e == null || _e.apply(void 0, arguments),
              (Ke = d.onClick) === null || Ke === void 0 || Ke.call(d);
          }),
          Ne = d.mode || ke,
          Re = Ee != null ? Ee : d.selectable,
          Me = o.useMemo(() => (be !== void 0 ? be : pe), [pe, be]),
          Ye = {
            horizontal: { motionName: `${ee}-slide-up` },
            inline: (0, _t.Z)(ee),
            other: { motionName: `${ee}-zoom-big` },
          },
          Pe = C('menu', Q || d.prefixCls),
          et = (0, mo.Z)(Pe),
          [st, ct, He] = Do(Pe, et, !a),
          tt = $e()(`${Pe}-${ne}`, U == null ? void 0 : U.className, le),
          Ge = o.useMemo(() => {
            var Ke, at;
            if (typeof re == 'function' || $t(re)) return re || null;
            if (typeof d.expandIcon == 'function' || $t(d.expandIcon)) return d.expandIcon || null;
            if (
              typeof (U == null ? void 0 : U.expandIcon) == 'function' ||
              $t(U == null ? void 0 : U.expandIcon)
            )
              return (U == null ? void 0 : U.expandIcon) || null;
            const ut =
              (Ke = re != null ? re : d == null ? void 0 : d.expandIcon) !== null && Ke !== void 0
                ? Ke
                : U == null
                  ? void 0
                  : U.expandIcon;
            return (0, Lt.Tm)(ut, {
              className: $e()(
                `${Pe}-submenu-expand-icon`,
                o.isValidElement(ut)
                  ? (at = ut.props) === null || at === void 0
                    ? void 0
                    : at.className
                  : void 0,
              ),
            });
          }, [re, d == null ? void 0 : d.expandIcon, U == null ? void 0 : U.expandIcon, Pe]),
          rt = o.useMemo(
            () => ({
              prefixCls: Pe,
              inlineCollapsed: Me || !1,
              direction: $,
              firstLevel: !0,
              theme: ne,
              mode: Ne,
              disableMenuItemTitleTooltip: fe,
            }),
            [Pe, Me, $, fe, ne],
          );
        return st(
          o.createElement(
            Pn.Provider,
            { value: null },
            o.createElement(
              Ot.Provider,
              { value: rt },
              o.createElement(
                ft.ZP,
                Object.assign(
                  {
                    getPopupContainer: k,
                    overflowedIndicator: o.createElement(ho.Z, null),
                    overflowedIndicatorPopupClassName: $e()(Pe, `${Pe}-${ne}`, je),
                    mode: Ne,
                    selectable: Re,
                    onClick: We,
                  },
                  Ae,
                  {
                    inlineCollapsed: Me,
                    style: Object.assign(Object.assign({}, U == null ? void 0 : U.style), ie),
                    className: tt,
                    prefixCls: Pe,
                    direction: $,
                    defaultMotions: Ye,
                    expandIcon: Ge,
                    ref: e,
                    rootClassName: $e()(xe, ct, d.rootClassName, He, et),
                  },
                ),
                Ze,
              ),
            ),
          ),
        );
      });
      const St = (0, o.forwardRef)((i, e) => {
        const n = (0, o.useRef)(null),
          a = o.useContext(An);
        return (
          (0, o.useImperativeHandle)(e, () => ({
            menu: n.current,
            focus: (d) => {
              var C;
              (C = n.current) === null || C === void 0 || C.focus(d);
            },
          })),
          o.createElement(To, Object.assign({ ref: n }, i, a))
        );
      });
      (St.Item = Nn), (St.SubMenu = $n), (St.Divider = Rn), (St.ItemGroup = ft.BW);
      var Io = St,
        _o = s(32699),
        kt = s(79366),
        Xn,
        Gn,
        Kn,
        Yn,
        Jn,
        Qn,
        qn,
        Bo = (0, ye.kc)(function (i) {
          var e = i.token,
            n = i.prefixCls,
            a = i.cx,
            d = i.css,
            C = 6;
          return {
            rect: d(
              Xn ||
                (Xn = (0, ce.Z)([
                  `
      background: `,
                  `;

      width: 100%;
    `,
                ])),
              (0, kt.m4)(e.colorBgContainer, 0.8),
            ),
            icon: a(
              'site-burger-icon',
              d(
                Gn ||
                  (Gn = (0, ce.Z)([
                    `
        position: relative;

        &,
        &::before,
        &::after {
          display: inline-block;
          height: 2px;
          background: `,
                    `;

          width: 16px;

          transition: all 150ms ease;
        }

        &::before,
        &::after {
          position: absolute;
          left: 0;

          content: '';
        }

        &::before {
          top: `,
                    `px;
        }

        &::after {
          top: -`,
                    `px;
        }
      `,
                  ])),
                e.colorTextSecondary,
                C,
                C,
              ),
            ),
            active: d(
              Kn ||
                (Kn = (0, ce.Z)([
                  `
      &::before,
      &::after {
        background: `,
                  `;
      }
      & {
        background: transparent;
      }

      &::before {
        top: 0;
        transform: rotate(-135deg);
      }

      &::after {
        top: 0;
        transform: rotate(135deg);
      }
    `,
                ])),
              e.colorText,
            ),
            container: d(
              Yn ||
                (Yn = (0, ce.Z)([
                  `
      width: `,
                  `px;
      height: `,
                  `px;
      border-radius: `,
                  `px;
      cursor: pointer;
    `,
                ])),
              e.controlHeight,
              e.controlHeight,
              e.borderRadius,
            ),
            drawerRoot: d(
              Jn ||
                (Jn = (0, ce.Z)([
                  `
      top: `,
                  `px;

      :focus-visible {
        outline: none;
      }

      .`,
                  `-drawer {
        &-mask {
          background: transparent;
          backdrop-filter: blur(7px);
          background: `,
                  `;
        }

        &-content-wrapper {
          box-shadow: none;
        }
      }
    `,
                ])),
              e.headerHeight + 1,
              n,
              (0, kt.m4)(e.colorBgBase, 0.5),
            ),
            drawer: d(
              Qn ||
                (Qn = (0, ce.Z)([
                  `
      &.`,
                  `-drawer-content {
        background: transparent;
      }

      .`,
                  `-drawer-body {
        display: flex;
        flex-direction: column;
      }
    `,
                ])),
              n,
              n,
            ),
            menu: d(
              qn ||
                (qn = (0, ce.Z)([
                  `
      background: transparent;
      border-inline-end: transparent !important;

      > .`,
                  '-menu-item-only-child,.',
                  `-menu-submenu-title {
        background: `,
                  `;
        border-radius: 0;
        margin: 0;
        width: 100%;
        &:active {
          margin-inline: 4px;
          border-radius: `,
                  `px;
        }
      }

      .`,
                  '-menu-sub.',
                  `-menu-inline {
        //background: transparent !important;
        background: `,
                  ` !important;
      }
    `,
                ])),
              n,
              n,
              (0, kt.m4)(e.colorBgContainer, 0.8),
              e.borderRadius,
              n,
              n,
              (0, kt.m4)(e.colorBgContainer, 0.2),
            ),
          };
        }),
        Ao = function () {
          var e = (0, o.useState)(!1),
            n = (0, it.Z)(e, 2),
            a = n[0],
            d = n[1],
            C = Bo(),
            k = C.styles,
            $ = C.cx,
            U = (0, S.HX)(function (ie) {
              return ie.navData;
            }, p()),
            ee = (0, S.HX)(function (ie) {
              return ie.sidebar;
            }, p()),
            Q = (0, S.HX)(t.K1),
            le = (0, S.HX)(function (ie) {
              return ie.location.pathname;
            });
          return (0, u.jsxs)(he.Z, {
            className: k.container,
            onClick: function () {
              d(!a);
            },
            children: [
              (0, u.jsx)('div', { className: $(k.icon, a ? k.active : '') }),
              (0, u.jsxs)(fo, {
                open: a,
                placement: 'left',
                closeIcon: null,
                rootClassName: k.drawerRoot,
                className: k.drawer,
                width: '100vw',
                headerStyle: { display: 'none' },
                bodyStyle: { padding: 0 },
                children: [
                  (0, u.jsx)('div', { style: { height: 24 }, className: k.rect }),
                  (0, u.jsx)(Io, {
                    mode: 'inline',
                    selectedKeys: (0, _o.uniq)([Q, 's-'.concat(le)]),
                    openKeys: [Q],
                    className: k.menu,
                    items: U.map(function (ie) {
                      return {
                        label: (0, u.jsx)(l.rU, { to: ie.link, children: ie.title }),
                        key: ie.activePath || ie.link,
                        children:
                          (ie.activePath || ie.link) === Q &&
                          (ee == null
                            ? void 0
                            : ee.map(function (ne) {
                                return (
                                  !ne.link && {
                                    label: ne.title,
                                    type: 'group',
                                    children: ne.children.map(function (re) {
                                      return {
                                        label: (0, u.jsx)(l.rU, {
                                          to: re.link,
                                          onClick: function () {
                                            d(!1);
                                          },
                                          children: re.title,
                                        }),
                                        key: 's-'.concat(re.link),
                                      };
                                    }),
                                  }
                                );
                              })),
                      };
                    }),
                  }),
                  (0, u.jsx)('div', { style: { flex: 1 }, className: k.rect }),
                ],
              }),
            ],
          });
        },
        Ro = Ao,
        Lo = s(44727),
        Pt = s(87538),
        No = function () {
          var e = (0, S.HX)(Pt.BB);
          return e
            ? (0, u.jsx)(Ln.Z, {
                arrow: !1,
                title: 'Github',
                children: (0, u.jsx)('a', {
                  href: e,
                  target: '_blank',
                  rel: 'noreferrer',
                  children: (0, u.jsx)(Kt.ZP, { icon: (0, u.jsx)(Lo.Z, {}) }),
                }),
              })
            : null;
        },
        $o = (0, o.memo)(No),
        Po = s(82533),
        er = s(9196),
        tr,
        nr,
        rr,
        ir,
        Ho = (0, ye.kc)(function (i) {
          var e = i.css,
            n = i.responsive,
            a = i.token;
          return {
            header: e(
              tr ||
                (tr = (0, ce.Z)([
                  `
    top: 0;
    position: sticky;
    background-color: transparent;
    backdrop-filter: blur(6px);
    z-index: `,
                  `;
    border-bottom: 1px solid `,
                  `;

    grid-area: head;
    align-self: stretch;

    `,
                  ` {
      background: `,
                  `;
    }
  `,
                ])),
              a.zIndexPopupBase - 50,
              a.colorSplit,
              n.mobile,
              a.colorBgContainer,
            ),
            content: e(
              nr ||
                (nr = (0, ce.Z)([
                  `
    padding: 0 24px;
    height: 64px;

    `,
                  ` {
      padding: 0 12px;
    }
  `,
                ])),
              n.mobile,
            ),
            left: e(rr || (rr = (0, ce.Z)(['']))),
            right: e(
              ir ||
                (ir = (0, ce.Z)([
                  `
    flex: 1;
    display: flex;
    justify-content: space-between;

    &-aside {
      display: flex;
      align-items: center;

      `,
                  ` {
        margin: 8px 16px;
        padding-top: 24px;
        justify-content: center;
        border-top: 1px solid `,
                  `;
      }
    }
  `,
                ])),
              n.mobile,
              a.colorBorder,
            ),
          };
        }),
        or = function () {
          var e = (0, S.HX)(function (k) {
              return k.siteData.themeConfig.prefersColor.switch;
            }),
            n = (0, er.f)(function (k) {
              return k.themeMode;
            }),
            a = (0, l.OI)(),
            d = (0, it.Z)(a, 3),
            C = d[2];
          return (
            (0, o.useEffect)(
              function () {
                return C(n);
              },
              [n],
            ),
            e
              ? (0, u.jsx)(Po.Z, {
                  value: n,
                  onChange: function ($) {
                    er.f.setState({ themeMode: $ });
                  },
                })
              : null
          );
        },
        Fo = function () {
          var e = (0, S.HX)(function (k) {
              return !!k.routeMeta.frontmatter;
            }),
            n = (0, q.F)(),
            a = n.mobile,
            d = Ho(),
            C = d.styles;
          return e
            ? (0, u.jsx)('div', {
                className: C.header,
                children: (0, u.jsx)(ue.D, {
                  horizontal: !0,
                  distribution: 'space-between',
                  align: 'center',
                  width: 'auto',
                  className: C.content,
                  children: a
                    ? (0, u.jsxs)(u.Fragment, {
                        children: [
                          (0, u.jsx)(ue.D, { children: (0, u.jsx)(Ro, {}) }),
                          (0, u.jsx)(ue.D, {
                            horizontal: !0,
                            className: C.left,
                            children: (0, u.jsx)(qt, {}),
                          }),
                          (0, u.jsx)(ue.D, { children: (0, u.jsx)(or, {}) }),
                        ],
                      })
                    : (0, u.jsxs)(u.Fragment, {
                        children: [
                          (0, u.jsx)(ue.D, {
                            horizontal: !0,
                            className: C.left,
                            children: (0, u.jsx)(qt, {}),
                          }),
                          (0, u.jsx)(ue.D, {
                            style: { marginLeft: 48, alignSelf: 'end' },
                            children: (0, u.jsx)(di, {}),
                          }),
                          (0, u.jsxs)('section', {
                            className: C.right,
                            children: [
                              (0, u.jsx)('div', {}),
                              (0, u.jsxs)(ue.D, {
                                gap: 16,
                                horizontal: !0,
                                align: 'center',
                                className: 'dumi-default-header-right-aside',
                                children: [
                                  (0, u.jsx)(Pi, {}),
                                  (0, u.jsx)(ri, {}),
                                  (0, u.jsx)($o, {}),
                                  (0, u.jsx)(or, {}),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                }),
              })
            : null;
        },
        ar = (0, o.memo)(Fo),
        lr,
        Wo = (0, ye.kc)(function (i) {
          var e = i.css,
            n = i.token;
          return {
            sidebar: e(
              lr ||
                (lr = (0, ce.Z)([
                  `
    grid-area: sidebar;
    overflow: auto;
    position: sticky;
    top: `,
                  `px;
    max-height: calc(100vh - `,
                  `px);
    box-sizing: border-box;
    padding-top: 20px;
    padding-bottom: 24px;
    padding-inline: 16px;
    border-right: 1px solid `,
                  `;

    > dl {
      margin: 0;
      padding: 0;
      line-height: 1;

      > dt {
        margin: 8px 0;
        color: `,
                  `;
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-transform: uppercase;
      }

      > dd {
        margin: 0;
        padding: 2px 0;

        > a {
          padding: 6px 12px;
          border-radius: 6px;
          display: block;
          font-size: `,
                  `px;
          line-height: `,
                  `;
          text-decoration: none;
          transition: all 0.1s;

          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;

          color: `,
                  `;

          &:hover {
            color: `,
                  `;
            background: `,
                  `;
          }

          &.active {
            color: `,
                  `;
            background: `,
                  `;

            &:hover {
              color: `,
                  `;
              background: `,
                  `;
            }
          }
        }
      }

      // divider line & gap
      + dl {
        margin-top: 16px;
        padding-top: 16px;
        border-top: 1px dashed `,
                  `;
      }
    }
  `,
                ])),
              n.headerHeight,
              n.headerHeight,
              n.colorSplit,
              n.colorText,
              n.fontSize,
              n.lineHeight,
              n.colorTextSecondary,
              n.colorText,
              n.colorFillTertiary,
              n.colorPrimaryText,
              n.colorPrimaryBg,
              n.colorPrimaryTextHover,
              n.colorPrimaryBgHover,
              n.colorBorder,
            ),
          };
        }),
        Uo = function () {
          var e = (0, S.HX)(function (C) {
              return C.sidebar;
            }, p()),
            n = Wo(),
            a = n.styles,
            d = !e || e.length === 0;
          return d
            ? null
            : (0, u.jsx)('div', {
                className: a.sidebar,
                children: e.map(function (C, k) {
                  return (0, u.jsxs)(
                    'dl',
                    {
                      children: [
                        C.title && (0, u.jsx)('dt', { children: C.title }),
                        C.children.map(function ($) {
                          return (0, u.jsx)(
                            'dd',
                            {
                              children: (0, u.jsx)(l.OL, {
                                to: $.link,
                                title: $.title,
                                end: !0,
                                children: $.title,
                              }),
                            },
                            $.link,
                          );
                        }),
                      ],
                    },
                    String(k),
                  );
                }),
              });
        },
        zo = (0, o.memo)(Uo),
        Zo = s(27046),
        Vo = (0, o.memo)(function () {
          var i = (0, S.HX)(t.TL, p());
          return (0, u.jsx)(Zo.Z, { items: i });
        }),
        Xo = Vo,
        Go = s(26068),
        Ko = s.n(Go),
        Yo = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M288 421a48 48 0 1096 0 48 48 0 10-96 0zm352 0a48 48 0 1096 0 48 48 0 10-96 0zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884c-50.3 0-99-9.8-144.8-29.2A370.4 370.4 0 01248.9 775c-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8A370.4 370.4 0 01249 248.9c34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140c50.3 0 99 9.8 144.8 29.2A370.4 370.4 0 01775.1 249c34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8A368.89 368.89 0 01775 775zM664 533h-48.1c-4.2 0-7.8 3.2-8.1 7.4C604 589.9 562.5 629 512 629s-92.1-39.1-95.8-88.6c-.3-4.2-3.9-7.4-8.1-7.4H360a8 8 0 00-8 8.4c4.4 84.3 74.5 151.6 160 151.6s155.6-67.3 160-151.6a8 8 0 00-8-8.4z',
                },
              },
            ],
          },
          name: 'smile',
          theme: 'outlined',
        },
        Jo = Yo,
        Qo = function (e, n) {
          return o.createElement(Z.Z, (0, r.Z)({}, e, { ref: n, icon: Jo }));
        },
        qo = o.forwardRef(Qo),
        ea = qo,
        ta = s(67393),
        na = (0, o.memo)(function () {
          var i = (0, S.HX)(Jt.b8.apiHeader),
            e = i.pkg,
            n = [
              {
                label: 'icon',
                icon: (0, u.jsx)(ea, {}),
                children: 'demo',
                url: 'https://www.npmjs.com/package/'.concat(e),
              },
            ];
          return (0, u.jsx)(ta.$, Ko()({ serviceList: n }, i));
        }),
        ra = na,
        ia = s(81560),
        sr,
        cr,
        ur,
        oa = (0, ye.kc)(function (i, e) {
          var n = i.css,
            a = i.cx,
            d = i.responsive,
            C = i.token,
            k = e.hideToc,
            $ = e.hideSidebar;
          return {
            layout: n(
              sr ||
                (sr = (0, ce.Z)([
                  `
      background-color: `,
                  `;
      background-image: linear-gradient(
        180deg,
        `,
                  ` 0%,
        rgba(255, 255, 255, 0) 10%
      );
      display: grid;
      grid-template-columns: `,
                  'px 1fr ',
                  `;
      grid-template-rows: `,
                  `px auto 1fr auto;
      grid-template-areas:
        'head head head'
        '`,
                  ' title ',
                  `'
        '`,
                  ' main ',
                  `'
        '`,
                  ` footer footer';
      min-height: 100vh;

      `,
                  ` {
        display: flex;
        flex-direction: column;
      }
    `,
                ])),
              C.colorBgLayout,
              C.colorBgContainer,
              C.sidebarWidth,
              k ? '' : ''.concat(C.tocWidth + 24, 'px'),
              C.headerHeight,
              $ ? 'title' : 'sidebar',
              k ? 'title' : '.',
              $ ? 'main' : 'sidebar',
              k ? 'main' : 'toc',
              $ ? 'footer' : 'sidebar',
              d.mobile,
            ),
            toc: n(
              cr ||
                (cr = (0, ce.Z)([
                  `
      position: sticky;
      top: 100px;
      width: `,
                  `px;
      margin-inline-end: 24px;
      max-height: 80vh;
      overflow: auto;
      margin-top: 48px;

      `,
                  ` {
        z-index: 300;
        top: `,
                  `px;
        margin-top: 0;
        width: 100%;
      }

      overscroll-behavior: contain;
      -webkit-overflow-scrolling: touch;

      > h4 {
        margin: 0 0 8px;
        color: `,
                  `;
        font-size: 12px;
        line-height: 1;
      }
    `,
                ])),
              C.tocWidth,
              d.mobile,
              C.headerHeight + 1,
              C.colorTextDescription,
            ),
            content: a(
              n(
                ur ||
                  (ur = (0, ce.Z)([
                    `
        max-width: 960px;
        width: 100%;
        margin: 0 24px;
      `,
                  ])),
              ),
              n(d({ desktop: { maxWidth: C.contentMaxWidth }, mobile: { margin: 0 } })),
            ),
          };
        }),
        aa = (0, o.memo)(function () {
          var i = (0, l.pC)(),
            e = (0, q.F)(),
            n = e.mobile,
            a = (0, S.HX)(function (ie) {
              return ie.routeMeta.frontmatter;
            }, p()),
            d = (0, S.HX)(ia.Y),
            C = (0, S.HX)(Pt.TG),
            k = (0, S.HX)(function (ie) {
              return (0, t.TL)(ie).length === 0;
            }),
            $ = a.sidebar === !1,
            U = a.toc === !1 || k,
            ee = oa({ hideToc: U, hideSidebar: $ }),
            Q = ee.styles,
            le = ee.theme;
          return (0, u.jsxs)('div', {
            className: Q.layout,
            children: [
              (0, u.jsx)(l.ql, {
                children: a.title && (0, u.jsxs)('title', { children: [a.title, ' - ', C] }),
              }),
              (0, u.jsx)(ar, {}),
              U ? null : (0, u.jsx)(Xo, {}),
              n || $ ? null : (0, u.jsx)(zo, {}),
              d
                ? (0, u.jsx)(ue.D, {
                    style: { gridArea: 'title', paddingBlock: n ? 24 : void 0 },
                    children: (0, u.jsx)(he.Z, {
                      children: (0, u.jsx)(ue.D, {
                        style: { maxWidth: le.contentMaxWidth, width: '100%' },
                        children: (0, u.jsx)(ue.D, {
                          style: { paddingBlock: 0, paddingInline: n ? 16 : 48 },
                          children: (0, u.jsx)(ra, {}),
                        }),
                      }),
                    }),
                  })
                : null,
              (0, u.jsx)(ue.D, {
                style: {
                  zIndex: 10,
                  gridArea: 'main',
                  margin: n ? 0 : 24,
                  marginBottom: n ? 0 : 48,
                },
                children: (0, u.jsx)(he.Z, {
                  width: '100%',
                  children: (0, u.jsx)(ue.D, {
                    className: Q.content,
                    children: (0, u.jsx)(ue.D, {
                      horizontal: !0,
                      children: (0, u.jsx)(Sr, { children: i }),
                    }),
                  }),
                }),
              }),
              (0, u.jsx)(Gt, {}),
            ],
          });
        }),
        la = aa,
        sa = s(62581),
        dr = function (e) {
          return !!e.routeMeta.frontmatter.hero;
        },
        ca = function (e) {
          var n, a;
          return (
            !!(
              (n = e.routeMeta.frontmatter.hero) !== null &&
              n !== void 0 &&
              n.showCustomContent
            ) ||
            !!((a = e.siteData.themeConfig.hero) !== null && a !== void 0 && a.showCustomContent)
          );
        },
        lt = function (e, n) {
          if (n) return n[e.locale.id] ? n[e.locale.id] : n;
        },
        ua = function (e) {
          var n, a;
          return (
            ((n = e.routeMeta.frontmatter.hero) === null || n === void 0 ? void 0 : n.title) ||
            ((a = lt(e, e.siteData.themeConfig.hero)) === null || a === void 0
              ? void 0
              : a.title) ||
            lt(e, e.siteData.themeConfig.title) ||
            e.siteData.themeConfig.name
          );
        },
        da = function (e) {
          var n, a;
          return (
            ((n = e.routeMeta.frontmatter.hero) === null || n === void 0
              ? void 0
              : n.description) ||
            ((a = lt(e, e.siteData.themeConfig.hero)) === null || a === void 0
              ? void 0
              : a.description) ||
            lt(e, e.siteData.themeConfig.description)
          );
        },
        fa = function (e) {
          var n, a;
          return (
            ((n = e.routeMeta.frontmatter.hero) === null || n === void 0 ? void 0 : n.actions) ||
            ((a = lt(e, e.siteData.themeConfig.hero)) === null || a === void 0
              ? void 0
              : a.actions) ||
            lt(e, e.siteData.themeConfig.actions)
          );
        },
        ha = function (e) {
          var n;
          return dr(e)
            ? ((n = lt(e, e.siteData.themeConfig.hero)) === null || n === void 0
                ? void 0
                : n.features) ||
                lt(e, e.siteData.themeConfig.features) ||
                e.routeMeta.frontmatter.features ||
                []
            : [];
        },
        pa = function () {
          var e = (0, S.HX)(ha, Et);
          return e != null && e.length
            ? (0, u.jsx)(sa.Z, { items: e, style: { margin: '0 16px' } })
            : null;
        },
        ma = pa,
        ga = s(87462),
        va = function () {
          var e = (0, S.HX)(ua),
            n = (0, S.HX)(da),
            a = (0, S.HX)(fa);
          return (0, u.jsx)(ga.Z, { title: e, actions: a, description: n });
        },
        ya = va,
        fr,
        ba = (0, ye.kc)(function (i) {
          var e = i.token,
            n = i.prefixCls,
            a = i.css,
            d = i.cx,
            C = ''.concat(n, '-home-contents');
          return {
            container: d(
              C,
              a(
                fr ||
                  (fr = (0, ce.Z)([
                    `
        width: 100%;
        max-width: `,
                    `px;
        padding: 0 16px;
        box-sizing: border-box;
      `,
                  ])),
                e.contentMaxWidth,
              ),
            ),
          };
        }),
        xa = (0, o.memo)(function () {
          var i = (0, S.HX)(Pt.TG),
            e = (0, l.pC)(),
            n = (0, S.HX)(ca),
            a = ba(),
            d = a.styles;
          return (0, u.jsxs)(u.Fragment, {
            children: [
              (0, u.jsx)(l.ql, { children: (0, u.jsx)('title', { children: i }) }),
              (0, u.jsxs)(ue.D, {
                align: 'center',
                gap: 80,
                children: [
                  (0, u.jsx)(ar, {}),
                  (0, u.jsx)(ya, {}),
                  (0, u.jsx)(ma, {}),
                  n && (0, u.jsx)('div', { className: d.container, children: e }),
                  (0, u.jsx)(Gt, {}),
                ],
              }),
            ],
          });
        }),
        wa = xa,
        Sa = s(91439),
        hr,
        Ca = (0, ye.vJ)(
          hr ||
            (hr = (0, ce.Z)([
              `
  body {
    margin: 0;
    padding: 0;
    background-color: `,
              `;
  }

  @font-face {
    font-family: AliPuHui;
    font-weight: normal;
    src: url('//at.alicdn.com/t/webfont_exesdog9toj.woff2') format('woff2'),
    url('//at.alicdn.com/t/webfont_exesdog9toj.woff') format('woff'),
    url('//at.alicdn.com/t/webfont_exesdog9toj.ttf') format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: AliPuHui;
    font-weight: bold;
    src: url('https://at.alicdn.com/wf/webfont/exMpJIukiCms/Gsw2PSKrftc1yNWMNlXgw.woff2') format('woff2'),
    url('https://at.alicdn.com/wf/webfont/exMpJIukiCms/vtu73by4O2gEBcvBuLgeu.woff') format('woff');
    font-display: swap;
  }

  /* \u5B9A\u4E49\u6EDA\u52A8\u69FD\u7684\u6837\u5F0F */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    margin-right: 4px;
    background-color: transparent; // \u5B9A\u4E49\u6EDA\u52A8\u69FD\u7684\u80CC\u666F\u8272

    &-thumb {
      background-color: `,
              `; // \u5B9A\u4E49\u6EDA\u52A8\u5757\u7684\u80CC\u666F\u8272
      border-radius: 4px; // \u5B9A\u4E49\u6EDA\u52A8\u5757\u7684\u5706\u89D2\u534A\u5F84
    }

    &-corner {
      display: none;
    }
  }
`,
            ])),
          function (i) {
            return i.theme.colorBgLayout;
          },
          function (i) {
            var e = i.theme;
            return e.colorFill;
          },
        ),
        Ea = (0, o.memo)(function () {
          var i = (0, l.YB)(),
            e = (0, l.TH)(),
            n = e.hash,
            a = (0, S.HX)(function (k) {
              return k.routeMeta.frontmatter;
            }),
            d = (0, S.HX)(dr),
            C = (0, S.HX)(function (k) {
              return k.siteData.loading;
            });
          return (
            (0, o.useEffect)(
              function () {
                var k = n.replace('#', '');
                k &&
                  setTimeout(function () {
                    var $ = document.getElementById(decodeURIComponent(k));
                    $ && ($.scrollIntoView(), window.scrollBy({ top: -80 }));
                  }, 1);
              },
              [C, n],
            ),
            (0, u.jsxs)(u.Fragment, {
              children: [
                (0, u.jsxs)(l.ql, {
                  children: [
                    (0, u.jsx)('html', { lang: i.locale.replace(/-.+$/, '') }),
                    a.title && (0, u.jsx)('meta', { property: 'og:title', content: a.title }),
                    a.description &&
                      (0, u.jsx)('meta', { name: 'description', content: a.description }),
                    a.description &&
                      (0, u.jsx)('meta', { property: 'og:description', content: a.description }),
                    a.keywords &&
                      (0, u.jsx)('meta', { name: 'keywords', content: a.keywords.join(',') }),
                    a.keywords &&
                      (0, u.jsx)('meta', {
                        property: 'og:keywords',
                        content: a.keywords.join(','),
                      }),
                  ],
                }),
                d ? (0, u.jsx)(wa, {}) : (0, u.jsx)(la, {}),
              ],
            })
          );
        });
      s.g.__ANTD_CACHE__ = w.cache;
      var ja = function (e) {
          var n = e.children,
            a = (0, S.HX)(Sa.H, p());
          return (0, u.jsx)(M.Z, { cache: w.cache, token: a, children: n });
        },
        Oa = (0, o.memo)(function (i) {
          var e = i.initState;
          return (0, u.jsxs)(S.zt, {
            createStore: function () {
              return (0, S.MT)(e);
            },
            children: [
              (0, u.jsx)(J, {}),
              (0, u.jsxs)(ja, { children: [(0, u.jsx)(Ca, {}), (0, u.jsx)(Ea, {})] }),
            ],
          });
        }),
        ka = function () {
          var i = (0, l.WF)(),
            e = (0, l.tx)(),
            n = (0, l.eL)(),
            a = (0, l.zh)(),
            d = (0, l.OK)(),
            C = (0, l.TH)(),
            k = (0, l.bU)(),
            $ = (0, o.useMemo)(function () {
              return {
                siteData: i,
                navData: d,
                locale: k,
                location: C,
                routeMeta: n,
                tabMeta: a,
                sidebar: e,
              };
            }, []);
          return (0, u.jsx)(Oa, { initState: $ });
        };
    },
    1395: function (V, F, s) {
      'use strict';
      var g = s(87515);
      function L(u, x, O) {
        typeof O == 'undefined' && ((O = x), (x = u), (u = null)),
          g.Duplex.call(this, u),
          typeof O.read != 'function' && (O = new g.Readable(u).wrap(O)),
          (this._writable = x),
          (this._readable = O),
          (this._waiting = !1);
        var w = this;
        x.once('finish', function () {
          w.end();
        }),
          this.once('finish', function () {
            x.end();
          }),
          O.on('readable', function () {
            w._waiting && ((w._waiting = !1), w._read());
          }),
          O.once('end', function () {
            w.push(null);
          }),
          (!u || typeof u.bubbleErrors == 'undefined' || u.bubbleErrors) &&
            (x.on('error', function (l) {
              w.emit('error', l);
            }),
            O.on('error', function (l) {
              w.emit('error', l);
            }));
      }
      (L.prototype = Object.create(g.Duplex.prototype, { constructor: { value: L } })),
        (L.prototype._write = function (x, O, w) {
          this._writable.write(x, O, w);
        }),
        (L.prototype._read = function () {
          for (var x, O = 0; (x = this._readable.read()) !== null; ) this.push(x), O++;
          O === 0 && (this._waiting = !0);
        }),
        (V.exports = function (x, O, w) {
          return new L(x, O, w);
        }),
        (V.exports.DuplexWrapper = L);
    },
    72100: function (V) {
      'use strict';
      var F = typeof Reflect == 'object' ? Reflect : null,
        s =
          F && typeof F.apply == 'function'
            ? F.apply
            : function (A, _, I) {
                return Function.prototype.apply.call(A, _, I);
              },
        g;
      F && typeof F.ownKeys == 'function'
        ? (g = F.ownKeys)
        : Object.getOwnPropertySymbols
          ? (g = function (A) {
              return Object.getOwnPropertyNames(A).concat(Object.getOwnPropertySymbols(A));
            })
          : (g = function (A) {
              return Object.getOwnPropertyNames(A);
            });
      function L(j) {
        console && console.warn && console.warn(j);
      }
      var u =
        Number.isNaN ||
        function (A) {
          return A !== A;
        };
      function x() {
        x.init.call(this);
      }
      (V.exports = x),
        (V.exports.once = H),
        (x.EventEmitter = x),
        (x.prototype._events = void 0),
        (x.prototype._eventsCount = 0),
        (x.prototype._maxListeners = void 0);
      var O = 10;
      function w(j) {
        if (typeof j != 'function')
          throw new TypeError(
            'The "listener" argument must be of type Function. Received type ' + typeof j,
          );
      }
      Object.defineProperty(x, 'defaultMaxListeners', {
        enumerable: !0,
        get: function () {
          return O;
        },
        set: function (j) {
          if (typeof j != 'number' || j < 0 || u(j))
            throw new RangeError(
              'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                j +
                '.',
            );
          O = j;
        },
      }),
        (x.init = function () {
          (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) &&
            ((this._events = Object.create(null)), (this._eventsCount = 0)),
            (this._maxListeners = this._maxListeners || void 0);
        }),
        (x.prototype.setMaxListeners = function (A) {
          if (typeof A != 'number' || A < 0 || u(A))
            throw new RangeError(
              'The value of "n" is out of range. It must be a non-negative number. Received ' +
                A +
                '.',
            );
          return (this._maxListeners = A), this;
        });
      function l(j) {
        return j._maxListeners === void 0 ? x.defaultMaxListeners : j._maxListeners;
      }
      (x.prototype.getMaxListeners = function () {
        return l(this);
      }),
        (x.prototype.emit = function (A) {
          for (var _ = [], I = 1; I < arguments.length; I++) _.push(arguments[I]);
          var T = A === 'error',
            z = this._events;
          if (z !== void 0) T = T && z.error === void 0;
          else if (!T) return !1;
          if (T) {
            var K;
            if ((_.length > 0 && (K = _[0]), K instanceof Error)) throw K;
            var ae = new Error('Unhandled error.' + (K ? ' (' + K.message + ')' : ''));
            throw ((ae.context = K), ae);
          }
          var we = z[A];
          if (we === void 0) return !1;
          if (typeof we == 'function') s(we, this, _);
          else for (var Le = we.length, b = W(we, Le), I = 0; I < Le; ++I) s(b[I], this, _);
          return !0;
        });
      function y(j, A, _, I) {
        var T, z, K;
        if (
          (w(_),
          (z = j._events),
          z === void 0
            ? ((z = j._events = Object.create(null)), (j._eventsCount = 0))
            : (z.newListener !== void 0 &&
                (j.emit('newListener', A, _.listener ? _.listener : _), (z = j._events)),
              (K = z[A])),
          K === void 0)
        )
          (K = z[A] = _), ++j._eventsCount;
        else if (
          (typeof K == 'function' ? (K = z[A] = I ? [_, K] : [K, _]) : I ? K.unshift(_) : K.push(_),
          (T = l(j)),
          T > 0 && K.length > T && !K.warned)
        ) {
          K.warned = !0;
          var ae = new Error(
            'Possible EventEmitter memory leak detected. ' +
              K.length +
              ' ' +
              String(A) +
              ' listeners added. Use emitter.setMaxListeners() to increase limit',
          );
          (ae.name = 'MaxListenersExceededWarning'),
            (ae.emitter = j),
            (ae.type = A),
            (ae.count = K.length),
            L(ae);
        }
        return j;
      }
      (x.prototype.addListener = function (A, _) {
        return y(this, A, _, !1);
      }),
        (x.prototype.on = x.prototype.addListener),
        (x.prototype.prependListener = function (A, _) {
          return y(this, A, _, !0);
        });
      function p() {
        if (!this.fired)
          return (
            this.target.removeListener(this.type, this.wrapFn),
            (this.fired = !0),
            arguments.length === 0
              ? this.listener.call(this.target)
              : this.listener.apply(this.target, arguments)
          );
      }
      function o(j, A, _) {
        var I = { fired: !1, wrapFn: void 0, target: j, type: A, listener: _ },
          T = p.bind(I);
        return (T.listener = _), (I.wrapFn = T), T;
      }
      (x.prototype.once = function (A, _) {
        return w(_), this.on(A, o(this, A, _)), this;
      }),
        (x.prototype.prependOnceListener = function (A, _) {
          return w(_), this.prependListener(A, o(this, A, _)), this;
        }),
        (x.prototype.removeListener = function (A, _) {
          var I, T, z, K, ae;
          if ((w(_), (T = this._events), T === void 0)) return this;
          if (((I = T[A]), I === void 0)) return this;
          if (I === _ || I.listener === _)
            --this._eventsCount === 0
              ? (this._events = Object.create(null))
              : (delete T[A], T.removeListener && this.emit('removeListener', A, I.listener || _));
          else if (typeof I != 'function') {
            for (z = -1, K = I.length - 1; K >= 0; K--)
              if (I[K] === _ || I[K].listener === _) {
                (ae = I[K].listener), (z = K);
                break;
              }
            if (z < 0) return this;
            z === 0 ? I.shift() : R(I, z),
              I.length === 1 && (T[A] = I[0]),
              T.removeListener !== void 0 && this.emit('removeListener', A, ae || _);
          }
          return this;
        }),
        (x.prototype.off = x.prototype.removeListener),
        (x.prototype.removeAllListeners = function (A) {
          var _, I, T;
          if (((I = this._events), I === void 0)) return this;
          if (I.removeListener === void 0)
            return (
              arguments.length === 0
                ? ((this._events = Object.create(null)), (this._eventsCount = 0))
                : I[A] !== void 0 &&
                  (--this._eventsCount === 0 ? (this._events = Object.create(null)) : delete I[A]),
              this
            );
          if (arguments.length === 0) {
            var z = Object.keys(I),
              K;
            for (T = 0; T < z.length; ++T)
              (K = z[T]), K !== 'removeListener' && this.removeAllListeners(K);
            return (
              this.removeAllListeners('removeListener'),
              (this._events = Object.create(null)),
              (this._eventsCount = 0),
              this
            );
          }
          if (((_ = I[A]), typeof _ == 'function')) this.removeListener(A, _);
          else if (_ !== void 0) for (T = _.length - 1; T >= 0; T--) this.removeListener(A, _[T]);
          return this;
        });
      function M(j, A, _) {
        var I = j._events;
        if (I === void 0) return [];
        var T = I[A];
        return T === void 0
          ? []
          : typeof T == 'function'
            ? _
              ? [T.listener || T]
              : [T]
            : _
              ? N(T)
              : W(T, T.length);
      }
      (x.prototype.listeners = function (A) {
        return M(this, A, !0);
      }),
        (x.prototype.rawListeners = function (A) {
          return M(this, A, !1);
        }),
        (x.listenerCount = function (j, A) {
          return typeof j.listenerCount == 'function' ? j.listenerCount(A) : P.call(j, A);
        }),
        (x.prototype.listenerCount = P);
      function P(j) {
        var A = this._events;
        if (A !== void 0) {
          var _ = A[j];
          if (typeof _ == 'function') return 1;
          if (_ !== void 0) return _.length;
        }
        return 0;
      }
      x.prototype.eventNames = function () {
        return this._eventsCount > 0 ? g(this._events) : [];
      };
      function W(j, A) {
        for (var _ = new Array(A), I = 0; I < A; ++I) _[I] = j[I];
        return _;
      }
      function R(j, A) {
        for (; A + 1 < j.length; A++) j[A] = j[A + 1];
        j.pop();
      }
      function N(j) {
        for (var A = new Array(j.length), _ = 0; _ < A.length; ++_) A[_] = j[_].listener || j[_];
        return A;
      }
      function H(j, A) {
        return new Promise(function (_, I) {
          function T(K) {
            j.removeListener(A, z), I(K);
          }
          function z() {
            typeof j.removeListener == 'function' && j.removeListener('error', T),
              _([].slice.call(arguments));
          }
          E(j, A, z, { once: !0 }), A !== 'error' && te(j, T, { once: !0 });
        });
      }
      function te(j, A, _) {
        typeof j.on == 'function' && E(j, 'error', A, _);
      }
      function E(j, A, _, I) {
        if (typeof j.on == 'function') I.once ? j.once(A, _) : j.on(A, _);
        else if (typeof j.addEventListener == 'function')
          j.addEventListener(A, function T(z) {
            I.once && j.removeEventListener(A, T), _(z);
          });
        else
          throw new TypeError(
            'The "emitter" argument must be of type EventEmitter. Received type ' + typeof j,
          );
      }
    },
    60344: function (V, F, s) {
      var g = s(91620).Buffer,
        L = s(66391),
        u = s(34466).Transform,
        x = s(2937);
      x(y, u), (V.exports = y);
      var O = {
          lt: '<'.charCodeAt(0),
          gt: '>'.charCodeAt(0),
          slash: '/'.charCodeAt(0),
          dquote: '"'.charCodeAt(0),
          squote: "'".charCodeAt(0),
          equal: '='.charCodeAt(0),
        },
        w = {
          endScript: L('</script'),
          endStyle: L('</style'),
          endTitle: L('</title'),
          comment: L('<!--'),
          endComment: L('-->'),
          cdata: L('<![CDATA['),
          endCdata: L(']]>'),
        },
        l = {
          TagNameState: 1,
          AttributeNameState: 2,
          BeforeAttributeValueState: 3,
          AttributeValueState: 4,
        };
      function y() {
        if (!(this instanceof y)) return new y();
        u.call(this),
          (this._readableState.objectMode = !0),
          (this.state = 'text'),
          (this.tagState = null),
          (this.quoteState = null),
          (this.raw = null),
          (this.buffers = []),
          (this._last = []);
      }
      (y.prototype._transform = function (P, W, R) {
        var N = 0,
          H = 0;
        for (
          this._prev &&
          ((P = g.concat([this._prev, P])),
          (N = this._prev.length - 1),
          (H = this._offset),
          (this._prev = null),
          (this._offset = 0));
          N < P.length;
          N++
        ) {
          var te = P[N];
          if ((this._last.push(te), this._last.length > 9 && this._last.shift(), this.raw)) {
            var E = this._testRaw(P, H, N);
            E &&
              (this.push(['text', E[0]]),
              this.raw === w.endComment || this.raw === w.endCdata
                ? ((this.state = 'text'), (this.buffers = []), this.push(['close', E[1]]))
                : ((this.state = 'open'), (this.buffers = [E[1]])),
              (this.raw = null),
              (H = N + 1));
          } else {
            if (this.state === 'text' && te === O.lt && N === P.length - 1)
              return (this._prev = P), (this._offset = H), R();
            if (this.state === 'text' && te === O.lt && !M(P[N + 1]))
              N > 0 && N - H > 0 && this.buffers.push(P.slice(H, N)),
                (H = N),
                (this.state = 'open'),
                (this.tagState = l.TagNameState),
                this._pushState('text');
            else if (this.tagState === l.TagNameState && M(te))
              this.tagState = l.AttributeNameState;
            else if (this.tagState === l.AttributeNameState && te === O.equal)
              this.tagState = l.BeforeAttributeValueState;
            else if (!(this.tagState === l.BeforeAttributeValueState && M(te)))
              if (this.tagState === l.BeforeAttributeValueState && te !== O.gt)
                (this.tagState = l.AttributeValueState),
                  te === O.dquote
                    ? (this.quoteState = 'double')
                    : te === O.squote
                      ? (this.quoteState = 'single')
                      : (this.quoteState = null);
              else if (this.tagState === l.AttributeValueState && !this.quoteState && M(te))
                this.tagState = l.AttributeNameState;
              else if (
                this.tagState === l.AttributeValueState &&
                this.quoteState === 'double' &&
                te === O.dquote
              )
                (this.quoteState = null), (this.tagState = l.AttributeNameState);
              else if (
                this.tagState === l.AttributeValueState &&
                this.quoteState === 'single' &&
                te === O.squote
              )
                (this.quoteState = null), (this.tagState = l.AttributeNameState);
              else if (this.state === 'open' && te === O.gt && !this.quoteState)
                if (
                  (this.buffers.push(P.slice(H, N + 1)),
                  (H = N + 1),
                  (this.state = 'text'),
                  (this.tagState = null),
                  this._getChar(1) === O.slash)
                )
                  this._pushState('close');
                else {
                  var j = this._getTag();
                  j === 'script' && (this.raw = w.endScript),
                    j === 'style' && (this.raw = w.endStyle),
                    j === 'title' && (this.raw = w.endTitle),
                    this._pushState('open');
                }
              else
                this.state === 'open' && p(this._last, w.comment)
                  ? (this.buffers.push(P.slice(H, N + 1)),
                    (H = N + 1),
                    (this.state = 'text'),
                    (this.raw = w.endComment),
                    this._pushState('open'))
                  : this.state === 'open' &&
                    p(this._last, w.cdata) &&
                    (this.buffers.push(P.slice(H, N + 1)),
                    (H = N + 1),
                    (this.state = 'text'),
                    (this.raw = w.endCdata),
                    this._pushState('open'));
          }
        }
        H < P.length && this.buffers.push(P.slice(H)), R();
      }),
        (y.prototype._flush = function (P) {
          this.state === 'text' && this._pushState('text'), this.push(null), P();
        }),
        (y.prototype._pushState = function (P) {
          if (this.buffers.length !== 0) {
            var W = g.concat(this.buffers);
            (this.buffers = []), this.push([P, W]);
          }
        }),
        (y.prototype._getChar = function (P) {
          for (var W = 0, R = 0; R < this.buffers.length; R++) {
            var N = this.buffers[R];
            if (W + N.length > P) return N[P - W];
            W += N;
          }
        }),
        (y.prototype._getTag = function () {
          for (var P = 0, W = '', R = 0; R < this.buffers.length; R++) {
            for (var N = this.buffers[R], H = 0; H < N.length; H++)
              if (!(P === 0 && H === 0)) {
                var te = String.fromCharCode(N[H]);
                if (/[^\w-!\[\]]/.test(te)) return W.toLowerCase();
                W += te;
              }
            P += N.length;
          }
        }),
        (y.prototype._testRaw = function (te, W, R) {
          var N = this.raw,
            H = this._last;
          if (p(H, N)) {
            this.buffers.push(te.slice(W, R + 1));
            var te = g.concat(this.buffers),
              E = te.length - N.length;
            return [te.slice(0, E), te.slice(E)];
          }
        });
      function p(P, W) {
        if (P.length < W.length) return !1;
        for (var R = P.length - 1, N = W.length - 1; R >= 0 && N >= 0; R--, N--)
          if (o(P[R]) !== o(W[N])) return !1;
        return !0;
      }
      function o(P) {
        return P >= 65 && P <= 90 ? P + 32 : P;
      }
      function M(P) {
        return P === 32 || P === 9 || P === 10 || P === 12 || P === 13;
      }
    },
    30551: function (V, F) {
      (F.read = function (s, g, L, u, x) {
        var O,
          w,
          l = x * 8 - u - 1,
          y = (1 << l) - 1,
          p = y >> 1,
          o = -7,
          M = L ? x - 1 : 0,
          P = L ? -1 : 1,
          W = s[g + M];
        for (
          M += P, O = W & ((1 << -o) - 1), W >>= -o, o += l;
          o > 0;
          O = O * 256 + s[g + M], M += P, o -= 8
        );
        for (
          w = O & ((1 << -o) - 1), O >>= -o, o += u;
          o > 0;
          w = w * 256 + s[g + M], M += P, o -= 8
        );
        if (O === 0) O = 1 - p;
        else {
          if (O === y) return w ? NaN : (W ? -1 : 1) * (1 / 0);
          (w = w + Math.pow(2, u)), (O = O - p);
        }
        return (W ? -1 : 1) * w * Math.pow(2, O - u);
      }),
        (F.write = function (s, g, L, u, x, O) {
          var w,
            l,
            y,
            p = O * 8 - x - 1,
            o = (1 << p) - 1,
            M = o >> 1,
            P = x === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            W = u ? 0 : O - 1,
            R = u ? 1 : -1,
            N = g < 0 || (g === 0 && 1 / g < 0) ? 1 : 0;
          for (
            g = Math.abs(g),
              isNaN(g) || g === 1 / 0
                ? ((l = isNaN(g) ? 1 : 0), (w = o))
                : ((w = Math.floor(Math.log(g) / Math.LN2)),
                  g * (y = Math.pow(2, -w)) < 1 && (w--, (y *= 2)),
                  w + M >= 1 ? (g += P / y) : (g += P * Math.pow(2, 1 - M)),
                  g * y >= 2 && (w++, (y /= 2)),
                  w + M >= o
                    ? ((l = 0), (w = o))
                    : w + M >= 1
                      ? ((l = (g * y - 1) * Math.pow(2, x)), (w = w + M))
                      : ((l = g * Math.pow(2, M - 1) * Math.pow(2, x)), (w = 0)));
            x >= 8;
            s[L + W] = l & 255, W += R, l /= 256, x -= 8
          );
          for (w = (w << x) | l, p += x; p > 0; s[L + W] = w & 255, W += R, w /= 256, p -= 8);
          s[L + W - R] |= N * 128;
        });
    },
    2937: function (V) {
      typeof Object.create == 'function'
        ? (V.exports = function (s, g) {
            g &&
              ((s.super_ = g),
              (s.prototype = Object.create(g.prototype, {
                constructor: { value: s, enumerable: !1, writable: !0, configurable: !0 },
              })));
          })
        : (V.exports = function (s, g) {
            if (g) {
              s.super_ = g;
              var L = function () {};
              (L.prototype = g.prototype), (s.prototype = new L()), (s.prototype.constructor = s);
            }
          });
    },
    70901: function (V) {
      V.exports =
        Array.isArray ||
        function (F) {
          return Object.prototype.toString.call(F) == '[object Array]';
        };
    },
    79673: function (V) {
      var F = {}.toString;
      V.exports =
        Array.isArray ||
        function (s) {
          return F.call(s) == '[object Array]';
        };
    },
    74396: function (V, F, s) {
      var g = s(29165),
        L = g.Symbol;
      V.exports = L;
    },
    80732: function (V, F, s) {
      var g = s(74396),
        L = s(31239),
        u = s(57058),
        x = '[object Null]',
        O = '[object Undefined]',
        w = g ? g.toStringTag : void 0;
      function l(y) {
        return y == null ? (y === void 0 ? O : x) : w && w in Object(y) ? L(y) : u(y);
      }
      V.exports = l;
    },
    33124: function (V, F, s) {
      var g = s(82996),
        L = /^\s+/;
      function u(x) {
        return x && x.slice(0, g(x) + 1).replace(L, '');
      }
      V.exports = u;
    },
    96476: function (V, F, s) {
      var g = typeof s.g == 'object' && s.g && s.g.Object === Object && s.g;
      V.exports = g;
    },
    31239: function (V, F, s) {
      var g = s(74396),
        L = Object.prototype,
        u = L.hasOwnProperty,
        x = L.toString,
        O = g ? g.toStringTag : void 0;
      function w(l) {
        var y = u.call(l, O),
          p = l[O];
        try {
          l[O] = void 0;
          var o = !0;
        } catch (P) {}
        var M = x.call(l);
        return o && (y ? (l[O] = p) : delete l[O]), M;
      }
      V.exports = w;
    },
    57058: function (V) {
      var F = Object.prototype,
        s = F.toString;
      function g(L) {
        return s.call(L);
      }
      V.exports = g;
    },
    29165: function (V, F, s) {
      var g = s(96476),
        L = typeof self == 'object' && self && self.Object === Object && self,
        u = g || L || Function('return this')();
      V.exports = u;
    },
    82996: function (V) {
      var F = /\s/;
      function s(g) {
        for (var L = g.length; L-- && F.test(g.charAt(L)); );
        return L;
      }
      V.exports = s;
    },
    66292: function (V, F, s) {
      var g = s(36838),
        L = s(76668),
        u = s(12448),
        x = 'Expected a function',
        O = Math.max,
        w = Math.min;
      function l(y, p, o) {
        var M,
          P,
          W,
          R,
          N,
          H,
          te = 0,
          E = !1,
          j = !1,
          A = !0;
        if (typeof y != 'function') throw new TypeError(x);
        (p = u(p) || 0),
          g(o) &&
            ((E = !!o.leading),
            (j = 'maxWait' in o),
            (W = j ? O(u(o.maxWait) || 0, p) : W),
            (A = 'trailing' in o ? !!o.trailing : A));
        function _(v) {
          var G = M,
            oe = P;
          return (M = P = void 0), (te = v), (R = y.apply(oe, G)), R;
        }
        function I(v) {
          return (te = v), (N = setTimeout(K, p)), E ? _(v) : R;
        }
        function T(v) {
          var G = v - H,
            oe = v - te,
            de = p - G;
          return j ? w(de, W - oe) : de;
        }
        function z(v) {
          var G = v - H,
            oe = v - te;
          return H === void 0 || G >= p || G < 0 || (j && oe >= W);
        }
        function K() {
          var v = L();
          if (z(v)) return ae(v);
          N = setTimeout(K, T(v));
        }
        function ae(v) {
          return (N = void 0), A && M ? _(v) : ((M = P = void 0), R);
        }
        function we() {
          N !== void 0 && clearTimeout(N), (te = 0), (M = H = P = N = void 0);
        }
        function Le() {
          return N === void 0 ? R : ae(L());
        }
        function b() {
          var v = L(),
            G = z(v);
          if (((M = arguments), (P = this), (H = v), G)) {
            if (N === void 0) return I(H);
            if (j) return clearTimeout(N), (N = setTimeout(K, p)), _(H);
          }
          return N === void 0 && (N = setTimeout(K, p)), R;
        }
        return (b.cancel = we), (b.flush = Le), b;
      }
      V.exports = l;
    },
    36838: function (V) {
      function F(s) {
        var g = typeof s;
        return s != null && (g == 'object' || g == 'function');
      }
      V.exports = F;
    },
    55073: function (V) {
      function F(s) {
        return s != null && typeof s == 'object';
      }
      V.exports = F;
    },
    16764: function (V, F, s) {
      var g = s(80732),
        L = s(55073),
        u = '[object Symbol]';
      function x(O) {
        return typeof O == 'symbol' || (L(O) && g(O) == u);
      }
      V.exports = x;
    },
    76668: function (V, F, s) {
      var g = s(29165),
        L = function () {
          return g.Date.now();
        };
      V.exports = L;
    },
    12448: function (V, F, s) {
      var g = s(33124),
        L = s(36838),
        u = s(16764),
        x = 0 / 0,
        O = /^[-+]0x[0-9a-f]+$/i,
        w = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        y = parseInt;
      function p(o) {
        if (typeof o == 'number') return o;
        if (u(o)) return x;
        if (L(o)) {
          var M = typeof o.valueOf == 'function' ? o.valueOf() : o;
          o = L(M) ? M + '' : M;
        }
        if (typeof o != 'string') return o === 0 ? o : +o;
        o = g(o);
        var P = w.test(o);
        return P || l.test(o) ? y(o.slice(2), P ? 2 : 8) : O.test(o) ? x : +o;
      }
      V.exports = p;
    },
    44968: function (V, F, s) {
      var g = s(14224),
        L = s(1395),
        u = s(26748).PassThrough,
        x = s(26748).PassThrough,
        O = s(22767),
        w = [].slice,
        l = { bubbleErrors: !1, objectMode: !0 };
      V.exports = y;
      function y(p, o, M) {
        Array.isArray(p) || ((p = w.call(arguments)), (o = null), (M = null));
        var P = p[p.length - 1];
        typeof P == 'function' && ((M = p.splice(-1)[0]), (P = p[p.length - 1])),
          typeof P == 'object' && typeof P.pipe != 'function' && (o = p.splice(-1)[0]);
        var W = p[0],
          R = p[p.length - 1],
          N;
        if (((o = O({}, l, o)), !W)) return M && g.nextTick(M), new u(o);
        if (
          (W.writable && R.readable
            ? (N = L(o, W, R))
            : p.length == 1
              ? (N = new x(o).wrap(p[0]))
              : W.writable
                ? (N = W)
                : R.readable
                  ? (N = R)
                  : (N = new u(o)),
          p.forEach(function (E, j) {
            var A = p[j + 1];
            A && E.pipe(A), E != N && E.on('error', N.emit.bind(N, 'error'));
          }),
          M)
        ) {
          let E = function (j) {
            H || ((H = !0), M(j));
          };
          var te = E,
            H = !1;
          N.on('error', E),
            R.on('finish', function () {
              E();
            }),
            R.on('close', function () {
              E();
            });
        }
        return N;
      }
    },
    22767: function (V) {
      'use strict';
      var F = Object.getOwnPropertySymbols,
        s = Object.prototype.hasOwnProperty,
        g = Object.prototype.propertyIsEnumerable;
      function L(x) {
        if (x == null) throw new TypeError('Object.assign cannot be called with null or undefined');
        return Object(x);
      }
      function u() {
        try {
          if (!Object.assign) return !1;
          var x = new String('abc');
          if (((x[5] = 'de'), Object.getOwnPropertyNames(x)[0] === '5')) return !1;
          for (var O = {}, w = 0; w < 10; w++) O['_' + String.fromCharCode(w)] = w;
          var l = Object.getOwnPropertyNames(O).map(function (p) {
            return O[p];
          });
          if (l.join('') !== '0123456789') return !1;
          var y = {};
          return (
            'abcdefghijklmnopqrst'.split('').forEach(function (p) {
              y[p] = p;
            }),
            Object.keys(Object.assign({}, y)).join('') === 'abcdefghijklmnopqrst'
          );
        } catch (p) {
          return !1;
        }
      }
      V.exports = u()
        ? Object.assign
        : function (x, O) {
            for (var w, l = L(x), y, p = 1; p < arguments.length; p++) {
              w = Object(arguments[p]);
              for (var o in w) s.call(w, o) && (l[o] = w[o]);
              if (F) {
                y = F(w);
                for (var M = 0; M < y.length; M++) g.call(w, y[M]) && (l[y[M]] = w[y[M]]);
              }
            }
            return l;
          };
    },
    31233: function (V, F, s) {
      'use strict';
      var g = s(14224);
      typeof g == 'undefined' ||
      !g.version ||
      g.version.indexOf('v0.') === 0 ||
      (g.version.indexOf('v1.') === 0 && g.version.indexOf('v1.8.') !== 0)
        ? (V.exports = { nextTick: L })
        : (V.exports = g);
      function L(u, x, O, w) {
        if (typeof u != 'function') throw new TypeError('"callback" argument must be a function');
        var l = arguments.length,
          y,
          p;
        switch (l) {
          case 0:
          case 1:
            return g.nextTick(u);
          case 2:
            return g.nextTick(function () {
              u.call(null, x);
            });
          case 3:
            return g.nextTick(function () {
              u.call(null, x, O);
            });
          case 4:
            return g.nextTick(function () {
              u.call(null, x, O, w);
            });
          default:
            for (y = new Array(l - 1), p = 0; p < y.length; ) y[p++] = arguments[p];
            return g.nextTick(function () {
              u.apply(null, y);
            });
        }
      }
    },
    30644: function (V, F, s) {
      var g = s(14224);
      V.exports = w;
      var L =
          Object.keys ||
          function (p) {
            var o = [];
            for (var M in p) o.push(M);
            return o;
          },
        u = s(62790);
      u.inherits = s(2937);
      var x = s(24263),
        O = s(11491);
      u.inherits(w, x),
        y(L(O.prototype), function (p) {
          w.prototype[p] || (w.prototype[p] = O.prototype[p]);
        });
      function w(p) {
        if (!(this instanceof w)) return new w(p);
        x.call(this, p),
          O.call(this, p),
          p && p.readable === !1 && (this.readable = !1),
          p && p.writable === !1 && (this.writable = !1),
          (this.allowHalfOpen = !0),
          p && p.allowHalfOpen === !1 && (this.allowHalfOpen = !1),
          this.once('end', l);
      }
      function l() {
        this.allowHalfOpen || this._writableState.ended || g.nextTick(this.end.bind(this));
      }
      function y(p, o) {
        for (var M = 0, P = p.length; M < P; M++) o(p[M], M);
      }
    },
    5985: function (V, F, s) {
      V.exports = u;
      var g = s(89173),
        L = s(62790);
      (L.inherits = s(2937)), L.inherits(u, g);
      function u(x) {
        if (!(this instanceof u)) return new u(x);
        g.call(this, x);
      }
      u.prototype._transform = function (x, O, w) {
        w(null, x);
      };
    },
    24263: function (V, F, s) {
      var g = s(14224);
      V.exports = p;
      var L = s(70901),
        u = s(91620).Buffer;
      p.ReadableState = y;
      var x = s(72100).EventEmitter;
      x.listenerCount ||
        (x.listenerCount = function (b, v) {
          return b.listeners(v).length;
        });
      var O = s(26748),
        w = s(62790);
      w.inherits = s(2937);
      var l;
      w.inherits(p, O);
      function y(b, v) {
        b = b || {};
        var G = b.highWaterMark;
        (this.highWaterMark = G || G === 0 ? G : 16 * 1024),
          (this.highWaterMark = ~~this.highWaterMark),
          (this.buffer = []),
          (this.length = 0),
          (this.pipes = null),
          (this.pipesCount = 0),
          (this.flowing = !1),
          (this.ended = !1),
          (this.endEmitted = !1),
          (this.reading = !1),
          (this.calledRead = !1),
          (this.sync = !0),
          (this.needReadable = !1),
          (this.emittedReadable = !1),
          (this.readableListening = !1),
          (this.objectMode = !!b.objectMode),
          (this.defaultEncoding = b.defaultEncoding || 'utf8'),
          (this.ranOut = !1),
          (this.awaitDrain = 0),
          (this.readingMore = !1),
          (this.decoder = null),
          (this.encoding = null),
          b.encoding &&
            (l || (l = s(19322).s),
            (this.decoder = new l(b.encoding)),
            (this.encoding = b.encoding));
      }
      function p(b) {
        if (!(this instanceof p)) return new p(b);
        (this._readableState = new y(b, this)), (this.readable = !0), O.call(this);
      }
      (p.prototype.push = function (b, v) {
        var G = this._readableState;
        return (
          typeof b == 'string' &&
            !G.objectMode &&
            ((v = v || G.defaultEncoding), v !== G.encoding && ((b = new u(b, v)), (v = ''))),
          o(this, G, b, v, !1)
        );
      }),
        (p.prototype.unshift = function (b) {
          var v = this._readableState;
          return o(this, v, b, '', !0);
        });
      function o(b, v, G, oe, de) {
        var Be = N(v, G);
        if (Be) b.emit('error', Be);
        else if (G == null) (v.reading = !1), v.ended || H(b, v);
        else if (v.objectMode || (G && G.length > 0))
          if (v.ended && !de) {
            var ge = new Error('stream.push() after EOF');
            b.emit('error', ge);
          } else if (v.endEmitted && de) {
            var ge = new Error('stream.unshift() after end event');
            b.emit('error', ge);
          } else
            v.decoder && !de && !oe && (G = v.decoder.write(G)),
              (v.length += v.objectMode ? 1 : G.length),
              de ? v.buffer.unshift(G) : ((v.reading = !1), v.buffer.push(G)),
              v.needReadable && te(b),
              j(b, v);
        else de || (v.reading = !1);
        return M(v);
      }
      function M(b) {
        return !b.ended && (b.needReadable || b.length < b.highWaterMark || b.length === 0);
      }
      p.prototype.setEncoding = function (b) {
        l || (l = s(19322).s),
          (this._readableState.decoder = new l(b)),
          (this._readableState.encoding = b);
      };
      var P = 8388608;
      function W(b) {
        if (b >= P) b = P;
        else {
          b--;
          for (var v = 1; v < 32; v <<= 1) b |= b >> v;
          b++;
        }
        return b;
      }
      function R(b, v) {
        return v.length === 0 && v.ended
          ? 0
          : v.objectMode
            ? b === 0
              ? 0
              : 1
            : b === null || isNaN(b)
              ? v.flowing && v.buffer.length
                ? v.buffer[0].length
                : v.length
              : b <= 0
                ? 0
                : (b > v.highWaterMark && (v.highWaterMark = W(b)),
                  b > v.length ? (v.ended ? v.length : ((v.needReadable = !0), 0)) : b);
      }
      p.prototype.read = function (b) {
        var v = this._readableState;
        v.calledRead = !0;
        var G = b,
          oe;
        if (
          ((typeof b != 'number' || b > 0) && (v.emittedReadable = !1),
          b === 0 && v.needReadable && (v.length >= v.highWaterMark || v.ended))
        )
          return te(this), null;
        if (((b = R(b, v)), b === 0 && v.ended))
          return (
            (oe = null),
            v.length > 0 && v.decoder && ((oe = K(b, v)), (v.length -= oe.length)),
            v.length === 0 && ae(this),
            oe
          );
        var de = v.needReadable;
        return (
          v.length - b <= v.highWaterMark && (de = !0),
          (v.ended || v.reading) && (de = !1),
          de &&
            ((v.reading = !0),
            (v.sync = !0),
            v.length === 0 && (v.needReadable = !0),
            this._read(v.highWaterMark),
            (v.sync = !1)),
          de && !v.reading && (b = R(G, v)),
          b > 0 ? (oe = K(b, v)) : (oe = null),
          oe === null && ((v.needReadable = !0), (b = 0)),
          (v.length -= b),
          v.length === 0 && !v.ended && (v.needReadable = !0),
          v.ended && !v.endEmitted && v.length === 0 && ae(this),
          oe
        );
      };
      function N(b, v) {
        var G = null;
        return (
          !u.isBuffer(v) &&
            typeof v != 'string' &&
            v !== null &&
            v !== void 0 &&
            !b.objectMode &&
            (G = new TypeError('Invalid non-string/buffer chunk')),
          G
        );
      }
      function H(b, v) {
        if (v.decoder && !v.ended) {
          var G = v.decoder.end();
          G && G.length && (v.buffer.push(G), (v.length += v.objectMode ? 1 : G.length));
        }
        (v.ended = !0), v.length > 0 ? te(b) : ae(b);
      }
      function te(b) {
        var v = b._readableState;
        (v.needReadable = !1),
          !v.emittedReadable &&
            ((v.emittedReadable = !0),
            v.sync
              ? g.nextTick(function () {
                  E(b);
                })
              : E(b));
      }
      function E(b) {
        b.emit('readable');
      }
      function j(b, v) {
        v.readingMore ||
          ((v.readingMore = !0),
          g.nextTick(function () {
            A(b, v);
          }));
      }
      function A(b, v) {
        for (
          var G = v.length;
          !v.reading &&
          !v.flowing &&
          !v.ended &&
          v.length < v.highWaterMark &&
          (b.read(0), G !== v.length);

        )
          G = v.length;
        v.readingMore = !1;
      }
      (p.prototype._read = function (b) {
        this.emit('error', new Error('not implemented'));
      }),
        (p.prototype.pipe = function (b, v) {
          var G = this,
            oe = this._readableState;
          switch (oe.pipesCount) {
            case 0:
              oe.pipes = b;
              break;
            case 1:
              oe.pipes = [oe.pipes, b];
              break;
            default:
              oe.pipes.push(b);
              break;
          }
          oe.pipesCount += 1;
          var de = (!v || v.end !== !1) && b !== g.stdout && b !== g.stderr,
            Be = de ? B : X;
          oe.endEmitted ? g.nextTick(Be) : G.once('end', Be), b.on('unpipe', ge);
          function ge(ze) {
            ze === G && X();
          }
          function B() {
            b.end();
          }
          var S = _(G);
          b.on('drain', S);
          function X() {
            b.removeListener('close', me),
              b.removeListener('finish', Se),
              b.removeListener('drain', S),
              b.removeListener('error', se),
              b.removeListener('unpipe', ge),
              G.removeListener('end', B),
              G.removeListener('end', X),
              (!b._writableState || b._writableState.needDrain) && S();
          }
          function se(ze) {
            Ue(),
              b.removeListener('error', se),
              x.listenerCount(b, 'error') === 0 && b.emit('error', ze);
          }
          !b._events || !b._events.error
            ? b.on('error', se)
            : L(b._events.error)
              ? b._events.error.unshift(se)
              : (b._events.error = [se, b._events.error]);
          function me() {
            b.removeListener('finish', Se), Ue();
          }
          b.once('close', me);
          function Se() {
            b.removeListener('close', me), Ue();
          }
          b.once('finish', Se);
          function Ue() {
            G.unpipe(b);
          }
          return (
            b.emit('pipe', G),
            oe.flowing ||
              (this.on('readable', T),
              (oe.flowing = !0),
              g.nextTick(function () {
                I(G);
              })),
            b
          );
        });
      function _(b) {
        return function () {
          var v = this,
            G = b._readableState;
          G.awaitDrain--, G.awaitDrain === 0 && I(b);
        };
      }
      function I(b) {
        var v = b._readableState,
          G;
        v.awaitDrain = 0;
        function oe(de, Be, ge) {
          var B = de.write(G);
          B === !1 && v.awaitDrain++;
        }
        for (; v.pipesCount && (G = b.read()) !== null; )
          if (
            (v.pipesCount === 1 ? oe(v.pipes, 0, null) : we(v.pipes, oe),
            b.emit('data', G),
            v.awaitDrain > 0)
          )
            return;
        if (v.pipesCount === 0) {
          (v.flowing = !1), x.listenerCount(b, 'data') > 0 && z(b);
          return;
        }
        v.ranOut = !0;
      }
      function T() {
        this._readableState.ranOut && ((this._readableState.ranOut = !1), I(this));
      }
      (p.prototype.unpipe = function (b) {
        var v = this._readableState;
        if (v.pipesCount === 0) return this;
        if (v.pipesCount === 1)
          return b && b !== v.pipes
            ? this
            : (b || (b = v.pipes),
              (v.pipes = null),
              (v.pipesCount = 0),
              this.removeListener('readable', T),
              (v.flowing = !1),
              b && b.emit('unpipe', this),
              this);
        if (!b) {
          var G = v.pipes,
            oe = v.pipesCount;
          (v.pipes = null),
            (v.pipesCount = 0),
            this.removeListener('readable', T),
            (v.flowing = !1);
          for (var de = 0; de < oe; de++) G[de].emit('unpipe', this);
          return this;
        }
        var de = Le(v.pipes, b);
        return de === -1
          ? this
          : (v.pipes.splice(de, 1),
            (v.pipesCount -= 1),
            v.pipesCount === 1 && (v.pipes = v.pipes[0]),
            b.emit('unpipe', this),
            this);
      }),
        (p.prototype.on = function (b, v) {
          var G = O.prototype.on.call(this, b, v);
          if (
            (b === 'data' && !this._readableState.flowing && z(this),
            b === 'readable' && this.readable)
          ) {
            var oe = this._readableState;
            oe.readableListening ||
              ((oe.readableListening = !0),
              (oe.emittedReadable = !1),
              (oe.needReadable = !0),
              oe.reading ? oe.length && te(this, oe) : this.read(0));
          }
          return G;
        }),
        (p.prototype.addListener = p.prototype.on),
        (p.prototype.resume = function () {
          z(this), this.read(0), this.emit('resume');
        }),
        (p.prototype.pause = function () {
          z(this, !0), this.emit('pause');
        });
      function z(b, v) {
        var G = b._readableState;
        if (G.flowing) throw new Error('Cannot switch to old mode now.');
        var oe = v || !1,
          de = !1;
        (b.readable = !0),
          (b.pipe = O.prototype.pipe),
          (b.on = b.addListener = O.prototype.on),
          b.on('readable', function () {
            de = !0;
            for (var Be; !oe && (Be = b.read()) !== null; ) b.emit('data', Be);
            Be === null && ((de = !1), (b._readableState.needReadable = !0));
          }),
          (b.pause = function () {
            (oe = !0), this.emit('pause');
          }),
          (b.resume = function () {
            (oe = !1),
              de
                ? g.nextTick(function () {
                    b.emit('readable');
                  })
                : this.read(0),
              this.emit('resume');
          }),
          b.emit('readable');
      }
      (p.prototype.wrap = function (b) {
        var v = this._readableState,
          G = !1,
          oe = this;
        b.on('end', function () {
          if (v.decoder && !v.ended) {
            var ge = v.decoder.end();
            ge && ge.length && oe.push(ge);
          }
          oe.push(null);
        }),
          b.on('data', function (ge) {
            if (
              (v.decoder && (ge = v.decoder.write(ge)),
              !(v.objectMode && ge == null) && !(!v.objectMode && (!ge || !ge.length)))
            ) {
              var B = oe.push(ge);
              B || ((G = !0), b.pause());
            }
          });
        for (var de in b)
          typeof b[de] == 'function' &&
            typeof this[de] == 'undefined' &&
            (this[de] = (function (ge) {
              return function () {
                return b[ge].apply(b, arguments);
              };
            })(de));
        var Be = ['error', 'close', 'destroy', 'pause', 'resume'];
        return (
          we(Be, function (ge) {
            b.on(ge, oe.emit.bind(oe, ge));
          }),
          (oe._read = function (ge) {
            G && ((G = !1), b.resume());
          }),
          oe
        );
      }),
        (p._fromList = K);
      function K(b, v) {
        var G = v.buffer,
          oe = v.length,
          de = !!v.decoder,
          Be = !!v.objectMode,
          ge;
        if (G.length === 0) return null;
        if (oe === 0) ge = null;
        else if (Be) ge = G.shift();
        else if (!b || b >= oe) de ? (ge = G.join('')) : (ge = u.concat(G, oe)), (G.length = 0);
        else if (b < G[0].length) {
          var B = G[0];
          (ge = B.slice(0, b)), (G[0] = B.slice(b));
        } else if (b === G[0].length) ge = G.shift();
        else {
          de ? (ge = '') : (ge = new u(b));
          for (var S = 0, X = 0, se = G.length; X < se && S < b; X++) {
            var B = G[0],
              me = Math.min(b - S, B.length);
            de ? (ge += B.slice(0, me)) : B.copy(ge, S, 0, me),
              me < B.length ? (G[0] = B.slice(me)) : G.shift(),
              (S += me);
          }
        }
        return ge;
      }
      function ae(b) {
        var v = b._readableState;
        if (v.length > 0) throw new Error('endReadable called on non-empty stream');
        !v.endEmitted &&
          v.calledRead &&
          ((v.ended = !0),
          g.nextTick(function () {
            !v.endEmitted &&
              v.length === 0 &&
              ((v.endEmitted = !0), (b.readable = !1), b.emit('end'));
          }));
      }
      function we(b, v) {
        for (var G = 0, oe = b.length; G < oe; G++) v(b[G], G);
      }
      function Le(b, v) {
        for (var G = 0, oe = b.length; G < oe; G++) if (b[G] === v) return G;
        return -1;
      }
    },
    89173: function (V, F, s) {
      V.exports = O;
      var g = s(30644),
        L = s(62790);
      (L.inherits = s(2937)), L.inherits(O, g);
      function u(l, y) {
        (this.afterTransform = function (p, o) {
          return x(y, p, o);
        }),
          (this.needTransform = !1),
          (this.transforming = !1),
          (this.writecb = null),
          (this.writechunk = null);
      }
      function x(l, y, p) {
        var o = l._transformState;
        o.transforming = !1;
        var M = o.writecb;
        if (!M) return l.emit('error', new Error('no writecb in Transform class'));
        (o.writechunk = null), (o.writecb = null), p != null && l.push(p), M && M(y);
        var P = l._readableState;
        (P.reading = !1),
          (P.needReadable || P.length < P.highWaterMark) && l._read(P.highWaterMark);
      }
      function O(l) {
        if (!(this instanceof O)) return new O(l);
        g.call(this, l);
        var y = (this._transformState = new u(l, this)),
          p = this;
        (this._readableState.needReadable = !0),
          (this._readableState.sync = !1),
          this.once('finish', function () {
            typeof this._flush == 'function'
              ? this._flush(function (o) {
                  w(p, o);
                })
              : w(p);
          });
      }
      (O.prototype.push = function (l, y) {
        return (this._transformState.needTransform = !1), g.prototype.push.call(this, l, y);
      }),
        (O.prototype._transform = function (l, y, p) {
          throw new Error('not implemented');
        }),
        (O.prototype._write = function (l, y, p) {
          var o = this._transformState;
          if (((o.writecb = p), (o.writechunk = l), (o.writeencoding = y), !o.transforming)) {
            var M = this._readableState;
            (o.needTransform || M.needReadable || M.length < M.highWaterMark) &&
              this._read(M.highWaterMark);
          }
        }),
        (O.prototype._read = function (l) {
          var y = this._transformState;
          y.writechunk !== null && y.writecb && !y.transforming
            ? ((y.transforming = !0),
              this._transform(y.writechunk, y.writeencoding, y.afterTransform))
            : (y.needTransform = !0);
        });
      function w(l, y) {
        if (y) return l.emit('error', y);
        var p = l._writableState,
          o = l._readableState,
          M = l._transformState;
        if (p.length) throw new Error('calling transform done when ws.length != 0');
        if (M.transforming) throw new Error('calling transform done when still transforming');
        return l.push(null);
      }
    },
    11491: function (V, F, s) {
      var g = s(14224);
      V.exports = l;
      var L = s(91620).Buffer;
      l.WritableState = w;
      var u = s(62790);
      u.inherits = s(2937);
      var x = s(26748);
      u.inherits(l, x);
      function O(I, T, z) {
        (this.chunk = I), (this.encoding = T), (this.callback = z);
      }
      function w(I, T) {
        I = I || {};
        var z = I.highWaterMark;
        (this.highWaterMark = z || z === 0 ? z : 16 * 1024),
          (this.objectMode = !!I.objectMode),
          (this.highWaterMark = ~~this.highWaterMark),
          (this.needDrain = !1),
          (this.ending = !1),
          (this.ended = !1),
          (this.finished = !1);
        var K = I.decodeStrings === !1;
        (this.decodeStrings = !K),
          (this.defaultEncoding = I.defaultEncoding || 'utf8'),
          (this.length = 0),
          (this.writing = !1),
          (this.sync = !0),
          (this.bufferProcessing = !1),
          (this.onwrite = function (ae) {
            N(T, ae);
          }),
          (this.writecb = null),
          (this.writelen = 0),
          (this.buffer = []),
          (this.errorEmitted = !1);
      }
      function l(I) {
        var T = s(30644);
        if (!(this instanceof l) && !(this instanceof T)) return new l(I);
        (this._writableState = new w(I, this)), (this.writable = !0), x.call(this);
      }
      l.prototype.pipe = function () {
        this.emit('error', new Error('Cannot pipe. Not readable.'));
      };
      function y(I, T, z) {
        var K = new Error('write after end');
        I.emit('error', K),
          g.nextTick(function () {
            z(K);
          });
      }
      function p(I, T, z, K) {
        var ae = !0;
        if (!L.isBuffer(z) && typeof z != 'string' && z !== null && z !== void 0 && !T.objectMode) {
          var we = new TypeError('Invalid non-string/buffer chunk');
          I.emit('error', we),
            g.nextTick(function () {
              K(we);
            }),
            (ae = !1);
        }
        return ae;
      }
      l.prototype.write = function (I, T, z) {
        var K = this._writableState,
          ae = !1;
        return (
          typeof T == 'function' && ((z = T), (T = null)),
          L.isBuffer(I) ? (T = 'buffer') : T || (T = K.defaultEncoding),
          typeof z != 'function' && (z = function () {}),
          K.ended ? y(this, K, z) : p(this, K, I, z) && (ae = M(this, K, I, T, z)),
          ae
        );
      };
      function o(I, T, z) {
        return (
          !I.objectMode && I.decodeStrings !== !1 && typeof T == 'string' && (T = new L(T, z)), T
        );
      }
      function M(I, T, z, K, ae) {
        (z = o(T, z, K)), L.isBuffer(z) && (K = 'buffer');
        var we = T.objectMode ? 1 : z.length;
        T.length += we;
        var Le = T.length < T.highWaterMark;
        return (
          Le || (T.needDrain = !0),
          T.writing ? T.buffer.push(new O(z, K, ae)) : P(I, T, we, z, K, ae),
          Le
        );
      }
      function P(I, T, z, K, ae, we) {
        (T.writelen = z),
          (T.writecb = we),
          (T.writing = !0),
          (T.sync = !0),
          I._write(K, ae, T.onwrite),
          (T.sync = !1);
      }
      function W(I, T, z, K, ae) {
        z
          ? g.nextTick(function () {
              ae(K);
            })
          : ae(K),
          (I._writableState.errorEmitted = !0),
          I.emit('error', K);
      }
      function R(I) {
        (I.writing = !1), (I.writecb = null), (I.length -= I.writelen), (I.writelen = 0);
      }
      function N(I, T) {
        var z = I._writableState,
          K = z.sync,
          ae = z.writecb;
        if ((R(z), T)) W(I, z, K, T, ae);
        else {
          var we = j(I, z);
          !we && !z.bufferProcessing && z.buffer.length && E(I, z),
            K
              ? g.nextTick(function () {
                  H(I, z, we, ae);
                })
              : H(I, z, we, ae);
        }
      }
      function H(I, T, z, K) {
        z || te(I, T), K(), z && A(I, T);
      }
      function te(I, T) {
        T.length === 0 && T.needDrain && ((T.needDrain = !1), I.emit('drain'));
      }
      function E(I, T) {
        T.bufferProcessing = !0;
        for (var z = 0; z < T.buffer.length; z++) {
          var K = T.buffer[z],
            ae = K.chunk,
            we = K.encoding,
            Le = K.callback,
            b = T.objectMode ? 1 : ae.length;
          if ((P(I, T, b, ae, we, Le), T.writing)) {
            z++;
            break;
          }
        }
        (T.bufferProcessing = !1),
          z < T.buffer.length ? (T.buffer = T.buffer.slice(z)) : (T.buffer.length = 0);
      }
      (l.prototype._write = function (I, T, z) {
        z(new Error('not implemented'));
      }),
        (l.prototype.end = function (I, T, z) {
          var K = this._writableState;
          typeof I == 'function'
            ? ((z = I), (I = null), (T = null))
            : typeof T == 'function' && ((z = T), (T = null)),
            typeof I != 'undefined' && I !== null && this.write(I, T),
            !K.ending && !K.finished && _(this, K, z);
        });
      function j(I, T) {
        return T.ending && T.length === 0 && !T.finished && !T.writing;
      }
      function A(I, T) {
        var z = j(I, T);
        return z && ((T.finished = !0), I.emit('finish')), z;
      }
      function _(I, T, z) {
        (T.ending = !0),
          A(I, T),
          z && (T.finished ? g.nextTick(z) : I.once('finish', z)),
          (T.ended = !0);
      }
    },
    34466: function (V, F, s) {
      var g = s(14224),
        L = s(26748);
      (F = V.exports = s(24263)),
        (F.Stream = L),
        (F.Readable = F),
        (F.Writable = s(11491)),
        (F.Duplex = s(30644)),
        (F.Transform = s(89173)),
        (F.PassThrough = s(5985)),
        !g.browser &&
          {
            ALLUSERSPROFILE: 'C:\\ProgramData',
            ANDROID_HOME: 'D:\\Users\\h7ml\\AppData\\Local',
            APPDATA: 'C:\\Users\\h7ml\\AppData\\Roaming',
            CHROME_CRASHPAD_PIPE_NAME: '\\\\.\\pipe\\crashpad_34564_RFITXAPONDJLNWPD',
            COLORTERM: 'truecolor',
            CommonProgramFiles: 'C:\\Program Files\\Common Files',
            'CommonProgramFiles(x86)': 'C:\\Program Files (x86)\\Common Files',
            CommonProgramW6432: 'C:\\Program Files\\Common Files',
            COMPUTERNAME: 'ROOT',
            ComSpec: 'C:\\WINDOWS\\system32\\cmd.exe',
            DID_YOU_KNOW: 'none',
            DriverData: 'C:\\Windows\\System32\\Drivers\\DriverData',
            DUMI_PRESETS:
              'D:\\Users\\h7ml\\code\\github\\h7ml\\hooks\\node_modules\\.pnpm\\dumi@2.2.17_@babel+core@7.24.4_@types+node@20.12.7_@types+react@18.2.77_eslint@9.0.0_prettier_vbm6uofxacq3g2zaa4vwkdeowy\\node_modules\\dumi\\dist\\preset.js',
            FLUTTER_STORAGE_BASE_URL: 'https://storage.flutter-io.cn',
            FPS_BROWSER_APP_PROFILE_STRING: 'Internet Explorer',
            FPS_BROWSER_USER_PROFILE_STRING: 'Default',
            GIT_ASKPASS:
              'd:\\Users\\h7ml\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh',
            GOPATH: 'C:\\Users\\h7ml\\go',
            HOME: 'C:\\Users\\h7ml',
            HOMEDRIVE: 'C:',
            HOMEPATH: '\\Users\\h7ml',
            INIT_CWD: 'D:\\Users\\h7ml\\code\\github\\h7ml\\hooks',
            JAVA_HOME: 'D:\\Program Files\\java\\jdk-21',
            LANG: 'zh_CN.UTF-8',
            LOCALAPPDATA: 'C:\\Users\\h7ml\\AppData\\Local',
            LOGONSERVER: '\\\\ROOT',
            NODE: 'C:\\Users\\h7ml\\.nvmd\\versions\\21.6.2\\node.exe',
            NODE_ENV: 'production',
            NODE_PATH:
              'D:\\Users\\h7ml\\code\\github\\h7ml\\hooks\\node_modules\\.pnpm\\dumi@2.2.17_@babel+core@7.24.4_@types+node@20.12.7_@types+react@18.2.77_eslint@9.0.0_prettier_vbm6uofxacq3g2zaa4vwkdeowy\\node_modules\\dumi\\bin\\node_modules;D:\\Users\\h7ml\\code\\github\\h7ml\\hooks\\node_modules\\.pnpm\\dumi@2.2.17_@babel+core@7.24.4_@types+node@20.12.7_@types+react@18.2.77_eslint@9.0.0_prettier_vbm6uofxacq3g2zaa4vwkdeowy\\node_modules\\dumi\\node_modules;D:\\Users\\h7ml\\code\\github\\h7ml\\hooks\\node_modules\\.pnpm\\dumi@2.2.17_@babel+core@7.24.4_@types+node@20.12.7_@types+react@18.2.77_eslint@9.0.0_prettier_vbm6uofxacq3g2zaa4vwkdeowy\\node_modules;D:\\Users\\h7ml\\code\\github\\h7ml\\hooks\\node_modules\\.pnpm\\node_modules',
            npm_command: 'run-script',
            npm_config_frozen_lockfile: '',
            npm_config_lockfile: '',
            npm_config_node_gyp:
              'C:\\Users\\h7ml\\.nvmd\\versions\\21.6.2\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js',
            npm_config_registry: 'https://registry.npmjs.org/',
            npm_config_resolution_mode: 'highest',
            npm_config_store_dir: '~/.pnpm-store',
            npm_config_strict_ssl: '',
            npm_config_user_agent: 'pnpm/8.15.5 npm/? node/v21.6.2 win32 x64',
            npm_execpath:
              'C:\\Users\\h7ml\\.nvmd\\versions\\21.6.2\\node_modules\\pnpm\\bin\\pnpm.cjs',
            npm_lifecycle_event: 'docs:build',
            npm_lifecycle_script: 'dumi build',
            npm_node_execpath: 'C:\\Users\\h7ml\\.nvmd\\versions\\21.6.2\\node.exe',
            npm_package_author_github: 'https://github.com/h7ml',
            npm_package_author_mail: 'h7ml@qq.com',
            npm_package_author_name: 'h7ml',
            npm_package_bugs_url: 'https://github.com/h7ml/hooks/issues/new',
            npm_package_commitlint_extends_0: '@commitlint/config-conventional',
            npm_package_config_commitizen_path: 'node_modules/cz-git',
            npm_package_dependencies_antd: '^5.16.1',
            npm_package_dependencies_antd_style: '^3.6.2',
            npm_package_dependencies_babel_plugin_import: '^1.13.8',
            npm_package_dependencies_copy_to_clipboard: '^3.3.3',
            npm_package_dependencies_lodash: '^4.17.21',
            npm_package_dependencies_react_layout_kit: '^1.9.0',
            npm_package_dependencies_streamsaver: '^2.0.6',
            npm_package_dependencies__ant_design_icons: '^5.3.6',
            npm_package_description:
              '@dext7r/hooks is a custom Hooks library for React, designed to provide a convenient and easy-to-use set of Hooks tailored for various scenarios. This library encompasses a range of common frontend request operations, including Axios, Puppeteer, Fetch, Request, and more, to facilitate efficient handling of network requests and browser interactions\u3002@dext7r/hooks \u662F\u4E00\u4E2A\u57FA\u4E8E React \u7684\u81EA\u5B9A\u4E49 Hooks \u5E93\uFF0C\u65E8\u5728\u63D0\u4F9B\u4E00\u5957\u65B9\u4FBF\u3001\u6613\u7528\u7684\u9488\u5BF9\u4E0D\u540C\u573A\u666F\u7684 Hooks \u5C01\u88C5\u3002\u8BE5\u5E93\u6DB5\u76D6\u4E86\u591A\u79CD\u5E38\u89C1\u7684\u524D\u7AEF\u8BF7\u6C42\u64CD\u4F5C\uFF0C\u5305\u62EC Axios\u3001Puppeteer\u3001Fetch\u3001Request \u7B49\uFF0C\u4EE5\u5E2E\u52A9\u5F00\u53D1\u8005\u66F4\u9AD8\u6548\u5730\u5904\u7406\u7F51\u7EDC\u8BF7\u6C42\u548C\u6D4F\u89C8\u5668\u64CD\u4F5C',
            npm_package_devDependencies_commitizen: '^4.3.0',
            npm_package_devDependencies_commitlint: '^19',
            npm_package_devDependencies_commitlint_config_gitmoji: '^2',
            npm_package_devDependencies_concurrently: '^8',
            npm_package_devDependencies_conventional_changelog_gitmoji_config: '^1',
            npm_package_devDependencies_cross_env: '^7',
            npm_package_devDependencies_cz_git: '^1.9.1',
            npm_package_devDependencies_dotenv_cli: '^7.4.1',
            npm_package_devDependencies_dumi: '^2.2.17',
            npm_package_devDependencies_dumi_theme_antd_style: '^0.31.0',
            npm_package_devDependencies_eslint: '^9.0.0',
            npm_package_devDependencies_father: '^4.4.0',
            npm_package_devDependencies_husky: '^9.0.11',
            npm_package_devDependencies_jsdom: '^24',
            npm_package_devDependencies_lint_staged: '^15.2.2',
            npm_package_devDependencies_npm_check_updates: '^16.14.18',
            npm_package_devDependencies_prettier: '^3.2.5',
            npm_package_devDependencies_prettier_plugin_organize_imports: '^3.2.4',
            npm_package_devDependencies_prettier_plugin_packagejson: '^2.5.0',
            npm_package_devDependencies_react: '^18.2.0',
            npm_package_devDependencies_react_dom: '^18.2.0',
            npm_package_devDependencies_semantic_release: '^23',
            npm_package_devDependencies_semantic_release_config_gitmoji: '^1',
            npm_package_devDependencies_stylelint: '^16.3.1',
            npm_package_devDependencies_typescript: '^5.4.5',
            npm_package_devDependencies_vitest: 'latest',
            npm_package_devDependencies__commitlint_cli: '^19.2.1',
            npm_package_devDependencies__commitlint_config_conventional: '^19.1.0',
            npm_package_devDependencies__testing_library_react: '^15',
            npm_package_devDependencies__types_react: '^18.2.77',
            npm_package_devDependencies__types_react_dom: '^18.2.25',
            npm_package_devDependencies__types_streamsaver: '^2.0.4',
            npm_package_devDependencies__umijs_lint: '^4.1.9',
            npm_package_devDependencies__vitest_coverage_v8: 'latest',
            npm_package_files_0: 'lib',
            npm_package_files_1: 'es',
            npm_package_homepage: 'https://hooks.h7ml.cn',
            npm_package_jsdelivr: 'lib/index.js',
            npm_package_keywords_0: '@dext7r/hooks',
            npm_package_keywords_1: '@dext7r',
            npm_package_keywords_2: 'hooks',
            npm_package_keywords_3: 'react',
            npm_package_keywords_4: 'react-hooks',
            npm_package_keywords_5: 'react-library',
            npm_package_keywords_6: 'react-component',
            npm_package_keywords_7: 'react-components',
            npm_package_keywords_8: 'react-component-library',
            npm_package_license: 'Apache-2.0',
            npm_package_licenses_0_type: 'Apache-2.0',
            npm_package_licenses_0_url: 'https://github.com/h7ml/hooks/tree/main/LICENSE',
            npm_package_lint_staged____js_jsx__0: 'eslint --fix',
            npm_package_lint_staged____js_jsx__1: 'prettier --write',
            npm_package_lint_staged____md_json__0:
              'prettier --write --no-error-on-unmatched-pattern',
            npm_package_lint_staged____ts_tsx__0: 'eslint --fix',
            npm_package_lint_staged____ts_tsx__1: 'prettier --parser=typescript --write',
            npm_package_main: 'lib/index.js',
            npm_package_module: 'es/index.js',
            npm_package_name: '@dext7r/hooks',
            npm_package_packageManager: 'pnpm@7.26.3',
            npm_package_peerDependencies_react: '>=16.9.0',
            npm_package_peerDependencies_react_dom: '>=16.9.0',
            npm_package_publishConfig_access: 'public',
            npm_package_publishConfig_registry: 'https://registry.npmjs.org',
            npm_package_publishConfig_tag: 'latest',
            npm_package_repository_type: 'git',
            npm_package_repository_url: 'https://github.com/h7ml/hooks.git',
            npm_package_scripts_build: 'father build',
            npm_package_scripts_build_watch: 'father dev',
            npm_package_scripts_changelog:
              'conventional-changelog -n node_modules/conventional-changelog-gitmoji-config -i CHANGELOG.md -s -r 0',
            npm_package_scripts_ci:
              'npm run lint && npm run type-check && npm run doctor && npm run build',
            npm_package_scripts_clean: 'rm -rf es lib dist coverage .dumi/tmp .eslintcache',
            npm_package_scripts_commit: 'git-cz',
            npm_package_scripts_dev: 'dumi dev',
            npm_package_scripts_docs_build: 'dumi build',
            npm_package_scripts_doctor: 'father doctor',
            npm_package_scripts_lint: 'eslint .',
            npm_package_scripts_prepare: 'husky install && npm run setup',
            npm_package_scripts_prepublishOnly: 'npm run doctor && npm run build',
            npm_package_scripts_prettier: 'prettier -c --write "**/**"',
            npm_package_scripts_release: 'semantic-release',
            npm_package_scripts_semantic_release: 'dotenv -c -- semantic-release',
            npm_package_scripts_semantic_release_local: 'dotenv -c -- semantic-release --no-ci',
            npm_package_scripts_setup: 'dumi setup',
            npm_package_scripts_start: 'dumi dev',
            npm_package_scripts_test: 'vitest --passWithNoTests',
            npm_package_scripts_test_coverage: 'vitest run --coverage --passWithNoTests',
            npm_package_scripts_test_update: 'vitest -u',
            npm_package_scripts_type_check: 'tsc -p tsconfig-check.json',
            npm_package_scripts_updates: 'ncu -u && pnpm install',
            npm_package_sideEffects: 'false',
            npm_package_types: 'lib/index.d.ts',
            npm_package_unpkg: 'lib/index.js',
            npm_package_version: '0.2.0',
            npm_package_volta_node: '18.0.0',
            NUMBER_OF_PROCESSORS: '16',
            NVM_HOME: 'D:\\Users\\h7ml\\AppData\\Roaming\\nvm',
            NVM_SYMLINK: 'D:\\Program Files\\nodejs',
            OneDrive: 'C:\\Users\\h7ml\\OneDrive',
            ORIGINAL_XDG_CURRENT_DESKTOP: 'undefined',
            OS: 'Windows_NT',
            Path: 'D:\\Users\\h7ml\\code\\github\\h7ml\\hooks\\node_modules\\.bin;C:\\Users\\h7ml\\.nvmd\\versions\\21.6.2\\node_modules\\pnpm\\dist\\node-gyp-bin;C:\\Users\\h7ml\\.nvmd\\versions\\21.6.2;D:\\Program Files\\Python311\\Scripts\\;D:\\Program Files\\Python311\\;C:\\Users\\h7ml\\.nvmd\\bin;D:\\Program Files (x86)\\VMware\\VMware Workstation\\bin\\;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;D:\\Program Files (x86)\\Tencent\\\u5FAE\u4FE1web\u5F00\u53D1\u8005\u5DE5\u5177\\dll;%NVM_H;ME%;D:\\Program Files\\nodejs;D:\\Program Files (x86)\\Git\\cmd;D:\\Program Files (x86)\\NetSarang\\Xshell 7\\;D:\\Program Files (x86)\\NetSarang\\Xftp 7\\;C:\\Users\\h7ml\\AppData\\Local\\Microsoft\\WindowsApps;D:\\Users\\h7ml\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\h7ml\\AppData\\Local\\JetBrains\\Toolbox\\scripts;D:\\Users\\h7ml\\AppData\\Roaming\\nvm;D:\\Program Files\\nodejs;C:\\Users\\h7ml\\AppData\\Local\\GitHubDesktop\\bin;D:\\Program Files\\Go\\bin;D:\\Users\\h7ml\\AppData\\Local\\platform-tools;D:\\Program Files\\java\\jdk-21\\bin;D:\\Program Files\\java\\jdk-21\\jre\\bin;D:\\Users\\h7ml\\AppData\\Local\\tools;D:\\Program Files\\GitHub CLI\\;C:\\Program Files\\dotnet\\;C:\\Users\\h7ml\\AppData\\Local\\Microsoft\\WindowsApps;D:\\Users\\h7ml\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\h7ml\\AppData\\Local\\JetBrains\\Toolbox\\scripts;D:\\Users\\h7ml\\AppData\\Roaming\\nvm;D:\\Program Files\\nodejs;C:\\Users\\h7ml\\AppData\\Local\\GitHubDesktop\\bin;C:\\Users\\h7ml\\go\\bin;D:\\flutter\\bin;',
            PATHEXT: '.COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC;.PY;.PYW;.CPL',
            PNPM_SCRIPT_SRC_DIR: 'D:\\Users\\h7ml\\code\\github\\h7ml\\hooks',
            PROCESSOR_ARCHITECTURE: 'AMD64',
            PROCESSOR_IDENTIFIER: 'Intel64 Family 6 Model 154 Stepping 3, GenuineIntel',
            PROCESSOR_LEVEL: '6',
            PROCESSOR_REVISION: '9a03',
            ProgramData: 'C:\\ProgramData',
            ProgramFiles: 'C:\\Program Files',
            'ProgramFiles(x86)': 'C:\\Program Files (x86)',
            ProgramW6432: 'C:\\Program Files',
            PROMPT: '$P$G',
            PSModulePath:
              'C:\\Users\\h7ml\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules',
            PUBLIC: 'C:\\Users\\Public',
            PUB_HOSTED_URL: 'https://pub.flutter-io.cn',
            SESSIONNAME: 'Console',
            SystemDrive: 'C:',
            SystemRoot: 'C:\\WINDOWS',
            TEMP: 'C:\\Users\\h7ml\\AppData\\Local\\Temp',
            TERM_PROGRAM: 'vscode',
            TERM_PROGRAM_VERSION: '1.88.1',
            TMP: 'C:\\Users\\h7ml\\AppData\\Local\\Temp',
            UMI_DIR:
              'D:\\Users\\h7ml\\code\\github\\h7ml\\hooks\\node_modules\\.pnpm\\umi@4.1.9_@babel+core@7.24.4_@types+node@20.12.7_@types+react@18.2.77_eslint@9.0.0_prettier@3_jegx2e6iuhbrltk7b63fptckmy\\node_modules\\umi',
            USERDOMAIN: 'root',
            USERDOMAIN_ROAMINGPROFILE: 'root',
            USERNAME: 'h7ml',
            USERPROFILE: 'C:\\Users\\h7ml',
            VSCODE_GIT_ASKPASS_EXTRA_ARGS: '',
            VSCODE_GIT_ASKPASS_MAIN:
              'd:\\Users\\h7ml\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js',
            VSCODE_GIT_ASKPASS_NODE:
              'D:\\Users\\h7ml\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe',
            VSCODE_GIT_IPC_HANDLE: '\\\\.\\pipe\\vscode-git-1e08df471b-sock',
            VSCODE_INJECTION: '1',
            windir: 'C:\\WINDOWS',
            ZES_ENABLE_SYSMAN: '1',
          }.READABLE_STREAM === 'disable' &&
          (V.exports = s(26748));
    },
    44830: function (V, F, s) {
      V.exports = s(61230);
    },
    61230: function (V, F, s) {
      'use strict';
      var g = s(31233),
        L =
          Object.keys ||
          function (P) {
            var W = [];
            for (var R in P) W.push(R);
            return W;
          };
      V.exports = p;
      var u = Object.create(s(62790));
      u.inherits = s(2937);
      var x = s(14589),
        O = s(9514);
      u.inherits(p, x);
      for (var w = L(O.prototype), l = 0; l < w.length; l++) {
        var y = w[l];
        p.prototype[y] || (p.prototype[y] = O.prototype[y]);
      }
      function p(P) {
        if (!(this instanceof p)) return new p(P);
        x.call(this, P),
          O.call(this, P),
          P && P.readable === !1 && (this.readable = !1),
          P && P.writable === !1 && (this.writable = !1),
          (this.allowHalfOpen = !0),
          P && P.allowHalfOpen === !1 && (this.allowHalfOpen = !1),
          this.once('end', o);
      }
      Object.defineProperty(p.prototype, 'writableHighWaterMark', {
        enumerable: !1,
        get: function () {
          return this._writableState.highWaterMark;
        },
      });
      function o() {
        this.allowHalfOpen || this._writableState.ended || g.nextTick(M, this);
      }
      function M(P) {
        P.end();
      }
      Object.defineProperty(p.prototype, 'destroyed', {
        get: function () {
          return this._readableState === void 0 || this._writableState === void 0
            ? !1
            : this._readableState.destroyed && this._writableState.destroyed;
        },
        set: function (P) {
          this._readableState === void 0 ||
            this._writableState === void 0 ||
            ((this._readableState.destroyed = P), (this._writableState.destroyed = P));
        },
      }),
        (p.prototype._destroy = function (P, W) {
          this.push(null), this.end(), g.nextTick(W, P);
        });
    },
    78016: function (V, F, s) {
      'use strict';
      V.exports = u;
      var g = s(83657),
        L = Object.create(s(62790));
      (L.inherits = s(2937)), L.inherits(u, g);
      function u(x) {
        if (!(this instanceof u)) return new u(x);
        g.call(this, x);
      }
      u.prototype._transform = function (x, O, w) {
        w(null, x);
      };
    },
    14589: function (V, F, s) {
      'use strict';
      var g = s(14224),
        L = s(31233);
      V.exports = _;
      var u = s(79673),
        x;
      _.ReadableState = A;
      var O = s(72100).EventEmitter,
        w = function (h, m) {
          return h.listeners(m).length;
        },
        l = s(55703),
        y = s(10380).Buffer,
        p =
          (typeof s.g != 'undefined'
            ? s.g
            : typeof window != 'undefined'
              ? window
              : typeof self != 'undefined'
                ? self
                : {}
          ).Uint8Array || function () {};
      function o(h) {
        return y.from(h);
      }
      function M(h) {
        return y.isBuffer(h) || h instanceof p;
      }
      var P = Object.create(s(62790));
      P.inherits = s(2937);
      var W = s(14050),
        R = void 0;
      W && W.debuglog ? (R = W.debuglog('stream')) : (R = function () {});
      var N = s(26953),
        H = s(56183),
        te;
      P.inherits(_, l);
      var E = ['error', 'close', 'destroy', 'pause', 'resume'];
      function j(h, m, J) {
        if (typeof h.prependListener == 'function') return h.prependListener(m, J);
        !h._events || !h._events[m]
          ? h.on(m, J)
          : u(h._events[m])
            ? h._events[m].unshift(J)
            : (h._events[m] = [J, h._events[m]]);
      }
      function A(h, m) {
        (x = x || s(61230)), (h = h || {});
        var J = m instanceof x;
        (this.objectMode = !!h.objectMode),
          J && (this.objectMode = this.objectMode || !!h.readableObjectMode);
        var q = h.highWaterMark,
          ue = h.readableHighWaterMark,
          he = this.objectMode ? 16 : 16 * 1024;
        q || q === 0
          ? (this.highWaterMark = q)
          : J && (ue || ue === 0)
            ? (this.highWaterMark = ue)
            : (this.highWaterMark = he),
          (this.highWaterMark = Math.floor(this.highWaterMark)),
          (this.buffer = new N()),
          (this.length = 0),
          (this.pipes = null),
          (this.pipesCount = 0),
          (this.flowing = null),
          (this.ended = !1),
          (this.endEmitted = !1),
          (this.reading = !1),
          (this.sync = !0),
          (this.needReadable = !1),
          (this.emittedReadable = !1),
          (this.readableListening = !1),
          (this.resumeScheduled = !1),
          (this.destroyed = !1),
          (this.defaultEncoding = h.defaultEncoding || 'utf8'),
          (this.awaitDrain = 0),
          (this.readingMore = !1),
          (this.decoder = null),
          (this.encoding = null),
          h.encoding &&
            (te || (te = s(68861).s),
            (this.decoder = new te(h.encoding)),
            (this.encoding = h.encoding));
      }
      function _(h) {
        if (((x = x || s(61230)), !(this instanceof _))) return new _(h);
        (this._readableState = new A(h, this)),
          (this.readable = !0),
          h &&
            (typeof h.read == 'function' && (this._read = h.read),
            typeof h.destroy == 'function' && (this._destroy = h.destroy)),
          l.call(this);
      }
      Object.defineProperty(_.prototype, 'destroyed', {
        get: function () {
          return this._readableState === void 0 ? !1 : this._readableState.destroyed;
        },
        set: function (h) {
          this._readableState && (this._readableState.destroyed = h);
        },
      }),
        (_.prototype.destroy = H.destroy),
        (_.prototype._undestroy = H.undestroy),
        (_.prototype._destroy = function (h, m) {
          this.push(null), m(h);
        }),
        (_.prototype.push = function (h, m) {
          var J = this._readableState,
            q;
          return (
            J.objectMode
              ? (q = !0)
              : typeof h == 'string' &&
                ((m = m || J.defaultEncoding),
                m !== J.encoding && ((h = y.from(h, m)), (m = '')),
                (q = !0)),
            I(this, h, m, !1, q)
          );
        }),
        (_.prototype.unshift = function (h) {
          return I(this, h, null, !0, !1);
        });
      function I(h, m, J, q, ue) {
        var he = h._readableState;
        if (m === null) (he.reading = !1), b(h, he);
        else {
          var c;
          ue || (c = z(he, m)),
            c
              ? h.emit('error', c)
              : he.objectMode || (m && m.length > 0)
                ? (typeof m != 'string' &&
                    !he.objectMode &&
                    Object.getPrototypeOf(m) !== y.prototype &&
                    (m = o(m)),
                  q
                    ? he.endEmitted
                      ? h.emit('error', new Error('stream.unshift() after end event'))
                      : T(h, he, m, !0)
                    : he.ended
                      ? h.emit('error', new Error('stream.push() after EOF'))
                      : ((he.reading = !1),
                        he.decoder && !J
                          ? ((m = he.decoder.write(m)),
                            he.objectMode || m.length !== 0 ? T(h, he, m, !1) : oe(h, he))
                          : T(h, he, m, !1)))
                : q || (he.reading = !1);
        }
        return K(he);
      }
      function T(h, m, J, q) {
        m.flowing && m.length === 0 && !m.sync
          ? (h.emit('data', J), h.read(0))
          : ((m.length += m.objectMode ? 1 : J.length),
            q ? m.buffer.unshift(J) : m.buffer.push(J),
            m.needReadable && v(h)),
          oe(h, m);
      }
      function z(h, m) {
        var J;
        return (
          !M(m) &&
            typeof m != 'string' &&
            m !== void 0 &&
            !h.objectMode &&
            (J = new TypeError('Invalid non-string/buffer chunk')),
          J
        );
      }
      function K(h) {
        return !h.ended && (h.needReadable || h.length < h.highWaterMark || h.length === 0);
      }
      (_.prototype.isPaused = function () {
        return this._readableState.flowing === !1;
      }),
        (_.prototype.setEncoding = function (h) {
          return (
            te || (te = s(68861).s),
            (this._readableState.decoder = new te(h)),
            (this._readableState.encoding = h),
            this
          );
        });
      var ae = 8388608;
      function we(h) {
        return (
          h >= ae
            ? (h = ae)
            : (h--,
              (h |= h >>> 1),
              (h |= h >>> 2),
              (h |= h >>> 4),
              (h |= h >>> 8),
              (h |= h >>> 16),
              h++),
          h
        );
      }
      function Le(h, m) {
        return h <= 0 || (m.length === 0 && m.ended)
          ? 0
          : m.objectMode
            ? 1
            : h !== h
              ? m.flowing && m.length
                ? m.buffer.head.data.length
                : m.length
              : (h > m.highWaterMark && (m.highWaterMark = we(h)),
                h <= m.length ? h : m.ended ? m.length : ((m.needReadable = !0), 0));
      }
      _.prototype.read = function (h) {
        R('read', h), (h = parseInt(h, 10));
        var m = this._readableState,
          J = h;
        if (
          (h !== 0 && (m.emittedReadable = !1),
          h === 0 && m.needReadable && (m.length >= m.highWaterMark || m.ended))
        )
          return (
            R('read: emitReadable', m.length, m.ended),
            m.length === 0 && m.ended ? ze(this) : v(this),
            null
          );
        if (((h = Le(h, m)), h === 0 && m.ended)) return m.length === 0 && ze(this), null;
        var q = m.needReadable;
        R('need readable', q),
          (m.length === 0 || m.length - h < m.highWaterMark) &&
            ((q = !0), R('length less than watermark', q)),
          m.ended || m.reading
            ? ((q = !1), R('reading or ended', q))
            : q &&
              (R('do read'),
              (m.reading = !0),
              (m.sync = !0),
              m.length === 0 && (m.needReadable = !0),
              this._read(m.highWaterMark),
              (m.sync = !1),
              m.reading || (h = Le(J, m)));
        var ue;
        return (
          h > 0 ? (ue = se(h, m)) : (ue = null),
          ue === null ? ((m.needReadable = !0), (h = 0)) : (m.length -= h),
          m.length === 0 && (m.ended || (m.needReadable = !0), J !== h && m.ended && ze(this)),
          ue !== null && this.emit('data', ue),
          ue
        );
      };
      function b(h, m) {
        if (!m.ended) {
          if (m.decoder) {
            var J = m.decoder.end();
            J && J.length && (m.buffer.push(J), (m.length += m.objectMode ? 1 : J.length));
          }
          (m.ended = !0), v(h);
        }
      }
      function v(h) {
        var m = h._readableState;
        (m.needReadable = !1),
          m.emittedReadable ||
            (R('emitReadable', m.flowing),
            (m.emittedReadable = !0),
            m.sync ? L.nextTick(G, h) : G(h));
      }
      function G(h) {
        R('emit readable'), h.emit('readable'), X(h);
      }
      function oe(h, m) {
        m.readingMore || ((m.readingMore = !0), L.nextTick(de, h, m));
      }
      function de(h, m) {
        for (
          var J = m.length;
          !m.reading &&
          !m.flowing &&
          !m.ended &&
          m.length < m.highWaterMark &&
          (R('maybeReadMore read 0'), h.read(0), J !== m.length);

        )
          J = m.length;
        m.readingMore = !1;
      }
      (_.prototype._read = function (h) {
        this.emit('error', new Error('_read() is not implemented'));
      }),
        (_.prototype.pipe = function (h, m) {
          var J = this,
            q = this._readableState;
          switch (q.pipesCount) {
            case 0:
              q.pipes = h;
              break;
            case 1:
              q.pipes = [q.pipes, h];
              break;
            default:
              q.pipes.push(h);
              break;
          }
          (q.pipesCount += 1), R('pipe count=%d opts=%j', q.pipesCount, m);
          var ue = (!m || m.end !== !1) && h !== g.stdout && h !== g.stderr,
            he = ue ? t : ce;
          q.endEmitted ? L.nextTick(he) : J.once('end', he), h.on('unpipe', c);
          function c(ye, qe) {
            R('onunpipe'), ye === J && qe && qe.hasUnpiped === !1 && ((qe.hasUnpiped = !0), D());
          }
          function t() {
            R('onend'), h.end();
          }
          var r = Be(J);
          h.on('drain', r);
          var f = !1;
          function D() {
            R('cleanup'),
              h.removeListener('close', Oe),
              h.removeListener('finish', Te),
              h.removeListener('drain', r),
              h.removeListener('error', Ce),
              h.removeListener('unpipe', c),
              J.removeListener('end', t),
              J.removeListener('end', ce),
              J.removeListener('data', Y),
              (f = !0),
              q.awaitDrain && (!h._writableState || h._writableState.needDrain) && r();
          }
          var Z = !1;
          J.on('data', Y);
          function Y(ye) {
            R('ondata'), (Z = !1);
            var qe = h.write(ye);
            qe === !1 &&
              !Z &&
              (((q.pipesCount === 1 && q.pipes === h) ||
                (q.pipesCount > 1 && Xe(q.pipes, h) !== -1)) &&
                !f &&
                (R('false write response, pause', q.awaitDrain), q.awaitDrain++, (Z = !0)),
              J.pause());
          }
          function Ce(ye) {
            R('onerror', ye),
              ce(),
              h.removeListener('error', Ce),
              w(h, 'error') === 0 && h.emit('error', ye);
          }
          j(h, 'error', Ce);
          function Oe() {
            h.removeListener('finish', Te), ce();
          }
          h.once('close', Oe);
          function Te() {
            R('onfinish'), h.removeListener('close', Oe), ce();
          }
          h.once('finish', Te);
          function ce() {
            R('unpipe'), J.unpipe(h);
          }
          return h.emit('pipe', J), q.flowing || (R('pipe resume'), J.resume()), h;
        });
      function Be(h) {
        return function () {
          var m = h._readableState;
          R('pipeOnDrain', m.awaitDrain),
            m.awaitDrain && m.awaitDrain--,
            m.awaitDrain === 0 && w(h, 'data') && ((m.flowing = !0), X(h));
        };
      }
      (_.prototype.unpipe = function (h) {
        var m = this._readableState,
          J = { hasUnpiped: !1 };
        if (m.pipesCount === 0) return this;
        if (m.pipesCount === 1)
          return h && h !== m.pipes
            ? this
            : (h || (h = m.pipes),
              (m.pipes = null),
              (m.pipesCount = 0),
              (m.flowing = !1),
              h && h.emit('unpipe', this, J),
              this);
        if (!h) {
          var q = m.pipes,
            ue = m.pipesCount;
          (m.pipes = null), (m.pipesCount = 0), (m.flowing = !1);
          for (var he = 0; he < ue; he++) q[he].emit('unpipe', this, { hasUnpiped: !1 });
          return this;
        }
        var c = Xe(m.pipes, h);
        return c === -1
          ? this
          : (m.pipes.splice(c, 1),
            (m.pipesCount -= 1),
            m.pipesCount === 1 && (m.pipes = m.pipes[0]),
            h.emit('unpipe', this, J),
            this);
      }),
        (_.prototype.on = function (h, m) {
          var J = l.prototype.on.call(this, h, m);
          if (h === 'data') this._readableState.flowing !== !1 && this.resume();
          else if (h === 'readable') {
            var q = this._readableState;
            !q.endEmitted &&
              !q.readableListening &&
              ((q.readableListening = q.needReadable = !0),
              (q.emittedReadable = !1),
              q.reading ? q.length && v(this) : L.nextTick(ge, this));
          }
          return J;
        }),
        (_.prototype.addListener = _.prototype.on);
      function ge(h) {
        R('readable nexttick read 0'), h.read(0);
      }
      _.prototype.resume = function () {
        var h = this._readableState;
        return h.flowing || (R('resume'), (h.flowing = !0), B(this, h)), this;
      };
      function B(h, m) {
        m.resumeScheduled || ((m.resumeScheduled = !0), L.nextTick(S, h, m));
      }
      function S(h, m) {
        m.reading || (R('resume read 0'), h.read(0)),
          (m.resumeScheduled = !1),
          (m.awaitDrain = 0),
          h.emit('resume'),
          X(h),
          m.flowing && !m.reading && h.read(0);
      }
      _.prototype.pause = function () {
        return (
          R('call pause flowing=%j', this._readableState.flowing),
          this._readableState.flowing !== !1 &&
            (R('pause'), (this._readableState.flowing = !1), this.emit('pause')),
          this
        );
      };
      function X(h) {
        var m = h._readableState;
        for (R('flow', m.flowing); m.flowing && h.read() !== null; );
      }
      (_.prototype.wrap = function (h) {
        var m = this,
          J = this._readableState,
          q = !1;
        h.on('end', function () {
          if ((R('wrapped end'), J.decoder && !J.ended)) {
            var c = J.decoder.end();
            c && c.length && m.push(c);
          }
          m.push(null);
        }),
          h.on('data', function (c) {
            if (
              (R('wrapped data'),
              J.decoder && (c = J.decoder.write(c)),
              !(J.objectMode && c == null) && !(!J.objectMode && (!c || !c.length)))
            ) {
              var t = m.push(c);
              t || ((q = !0), h.pause());
            }
          });
        for (var ue in h)
          this[ue] === void 0 &&
            typeof h[ue] == 'function' &&
            (this[ue] = (function (c) {
              return function () {
                return h[c].apply(h, arguments);
              };
            })(ue));
        for (var he = 0; he < E.length; he++) h.on(E[he], this.emit.bind(this, E[he]));
        return (
          (this._read = function (c) {
            R('wrapped _read', c), q && ((q = !1), h.resume());
          }),
          this
        );
      }),
        Object.defineProperty(_.prototype, 'readableHighWaterMark', {
          enumerable: !1,
          get: function () {
            return this._readableState.highWaterMark;
          },
        }),
        (_._fromList = se);
      function se(h, m) {
        if (m.length === 0) return null;
        var J;
        return (
          m.objectMode
            ? (J = m.buffer.shift())
            : !h || h >= m.length
              ? (m.decoder
                  ? (J = m.buffer.join(''))
                  : m.buffer.length === 1
                    ? (J = m.buffer.head.data)
                    : (J = m.buffer.concat(m.length)),
                m.buffer.clear())
              : (J = me(h, m.buffer, m.decoder)),
          J
        );
      }
      function me(h, m, J) {
        var q;
        return (
          h < m.head.data.length
            ? ((q = m.head.data.slice(0, h)), (m.head.data = m.head.data.slice(h)))
            : h === m.head.data.length
              ? (q = m.shift())
              : (q = J ? Se(h, m) : Ue(h, m)),
          q
        );
      }
      function Se(h, m) {
        var J = m.head,
          q = 1,
          ue = J.data;
        for (h -= ue.length; (J = J.next); ) {
          var he = J.data,
            c = h > he.length ? he.length : h;
          if ((c === he.length ? (ue += he) : (ue += he.slice(0, h)), (h -= c), h === 0)) {
            c === he.length
              ? (++q, J.next ? (m.head = J.next) : (m.head = m.tail = null))
              : ((m.head = J), (J.data = he.slice(c)));
            break;
          }
          ++q;
        }
        return (m.length -= q), ue;
      }
      function Ue(h, m) {
        var J = y.allocUnsafe(h),
          q = m.head,
          ue = 1;
        for (q.data.copy(J), h -= q.data.length; (q = q.next); ) {
          var he = q.data,
            c = h > he.length ? he.length : h;
          if ((he.copy(J, J.length - h, 0, c), (h -= c), h === 0)) {
            c === he.length
              ? (++ue, q.next ? (m.head = q.next) : (m.head = m.tail = null))
              : ((m.head = q), (q.data = he.slice(c)));
            break;
          }
          ++ue;
        }
        return (m.length -= ue), J;
      }
      function ze(h) {
        var m = h._readableState;
        if (m.length > 0) throw new Error('"endReadable()" called on non-empty stream');
        m.endEmitted || ((m.ended = !0), L.nextTick(Qe, m, h));
      }
      function Qe(h, m) {
        !h.endEmitted && h.length === 0 && ((h.endEmitted = !0), (m.readable = !1), m.emit('end'));
      }
      function Xe(h, m) {
        for (var J = 0, q = h.length; J < q; J++) if (h[J] === m) return J;
        return -1;
      }
    },
    83657: function (V, F, s) {
      'use strict';
      V.exports = x;
      var g = s(61230),
        L = Object.create(s(62790));
      (L.inherits = s(2937)), L.inherits(x, g);
      function u(l, y) {
        var p = this._transformState;
        p.transforming = !1;
        var o = p.writecb;
        if (!o) return this.emit('error', new Error('write callback called multiple times'));
        (p.writechunk = null), (p.writecb = null), y != null && this.push(y), o(l);
        var M = this._readableState;
        (M.reading = !1),
          (M.needReadable || M.length < M.highWaterMark) && this._read(M.highWaterMark);
      }
      function x(l) {
        if (!(this instanceof x)) return new x(l);
        g.call(this, l),
          (this._transformState = {
            afterTransform: u.bind(this),
            needTransform: !1,
            transforming: !1,
            writecb: null,
            writechunk: null,
            writeencoding: null,
          }),
          (this._readableState.needReadable = !0),
          (this._readableState.sync = !1),
          l &&
            (typeof l.transform == 'function' && (this._transform = l.transform),
            typeof l.flush == 'function' && (this._flush = l.flush)),
          this.on('prefinish', O);
      }
      function O() {
        var l = this;
        typeof this._flush == 'function'
          ? this._flush(function (y, p) {
              w(l, y, p);
            })
          : w(this, null, null);
      }
      (x.prototype.push = function (l, y) {
        return (this._transformState.needTransform = !1), g.prototype.push.call(this, l, y);
      }),
        (x.prototype._transform = function (l, y, p) {
          throw new Error('_transform() is not implemented');
        }),
        (x.prototype._write = function (l, y, p) {
          var o = this._transformState;
          if (((o.writecb = p), (o.writechunk = l), (o.writeencoding = y), !o.transforming)) {
            var M = this._readableState;
            (o.needTransform || M.needReadable || M.length < M.highWaterMark) &&
              this._read(M.highWaterMark);
          }
        }),
        (x.prototype._read = function (l) {
          var y = this._transformState;
          y.writechunk !== null && y.writecb && !y.transforming
            ? ((y.transforming = !0),
              this._transform(y.writechunk, y.writeencoding, y.afterTransform))
            : (y.needTransform = !0);
        }),
        (x.prototype._destroy = function (l, y) {
          var p = this;
          g.prototype._destroy.call(this, l, function (o) {
            y(o), p.emit('close');
          });
        });
      function w(l, y, p) {
        if (y) return l.emit('error', y);
        if ((p != null && l.push(p), l._writableState.length))
          throw new Error('Calling transform done when ws.length != 0');
        if (l._transformState.transforming)
          throw new Error('Calling transform done when still transforming');
        return l.push(null);
      }
    },
    9514: function (V, F, s) {
      'use strict';
      var g = s(14224),
        L = s(31233);
      V.exports = E;
      function u(B, S, X) {
        (this.chunk = B), (this.encoding = S), (this.callback = X), (this.next = null);
      }
      function x(B) {
        var S = this;
        (this.next = null),
          (this.entry = null),
          (this.finish = function () {
            ge(S, B);
          });
      }
      var O =
          !g.browser && ['v0.10', 'v0.9.'].indexOf(g.version.slice(0, 5)) > -1
            ? setImmediate
            : L.nextTick,
        w;
      E.WritableState = H;
      var l = Object.create(s(62790));
      l.inherits = s(2937);
      var y = { deprecate: s(48863) },
        p = s(55703),
        o = s(10380).Buffer,
        M =
          (typeof s.g != 'undefined'
            ? s.g
            : typeof window != 'undefined'
              ? window
              : typeof self != 'undefined'
                ? self
                : {}
          ).Uint8Array || function () {};
      function P(B) {
        return o.from(B);
      }
      function W(B) {
        return o.isBuffer(B) || B instanceof M;
      }
      var R = s(56183);
      l.inherits(E, p);
      function N() {}
      function H(B, S) {
        (w = w || s(61230)), (B = B || {});
        var X = S instanceof w;
        (this.objectMode = !!B.objectMode),
          X && (this.objectMode = this.objectMode || !!B.writableObjectMode);
        var se = B.highWaterMark,
          me = B.writableHighWaterMark,
          Se = this.objectMode ? 16 : 16 * 1024;
        se || se === 0
          ? (this.highWaterMark = se)
          : X && (me || me === 0)
            ? (this.highWaterMark = me)
            : (this.highWaterMark = Se),
          (this.highWaterMark = Math.floor(this.highWaterMark)),
          (this.finalCalled = !1),
          (this.needDrain = !1),
          (this.ending = !1),
          (this.ended = !1),
          (this.finished = !1),
          (this.destroyed = !1);
        var Ue = B.decodeStrings === !1;
        (this.decodeStrings = !Ue),
          (this.defaultEncoding = B.defaultEncoding || 'utf8'),
          (this.length = 0),
          (this.writing = !1),
          (this.corked = 0),
          (this.sync = !0),
          (this.bufferProcessing = !1),
          (this.onwrite = function (ze) {
            ae(S, ze);
          }),
          (this.writecb = null),
          (this.writelen = 0),
          (this.bufferedRequest = null),
          (this.lastBufferedRequest = null),
          (this.pendingcb = 0),
          (this.prefinished = !1),
          (this.errorEmitted = !1),
          (this.bufferedRequestCount = 0),
          (this.corkedRequestsFree = new x(this));
      }
      (H.prototype.getBuffer = function () {
        for (var S = this.bufferedRequest, X = []; S; ) X.push(S), (S = S.next);
        return X;
      }),
        (function () {
          try {
            Object.defineProperty(H.prototype, 'buffer', {
              get: y.deprecate(
                function () {
                  return this.getBuffer();
                },
                '_writableState.buffer is deprecated. Use _writableState.getBuffer instead.',
                'DEP0003',
              ),
            });
          } catch (B) {}
        })();
      var te;
      typeof Symbol == 'function' &&
      Symbol.hasInstance &&
      typeof Function.prototype[Symbol.hasInstance] == 'function'
        ? ((te = Function.prototype[Symbol.hasInstance]),
          Object.defineProperty(E, Symbol.hasInstance, {
            value: function (B) {
              return te.call(this, B) ? !0 : this !== E ? !1 : B && B._writableState instanceof H;
            },
          }))
        : (te = function (B) {
            return B instanceof this;
          });
      function E(B) {
        if (((w = w || s(61230)), !te.call(E, this) && !(this instanceof w))) return new E(B);
        (this._writableState = new H(B, this)),
          (this.writable = !0),
          B &&
            (typeof B.write == 'function' && (this._write = B.write),
            typeof B.writev == 'function' && (this._writev = B.writev),
            typeof B.destroy == 'function' && (this._destroy = B.destroy),
            typeof B.final == 'function' && (this._final = B.final)),
          p.call(this);
      }
      E.prototype.pipe = function () {
        this.emit('error', new Error('Cannot pipe, not readable'));
      };
      function j(B, S) {
        var X = new Error('write after end');
        B.emit('error', X), L.nextTick(S, X);
      }
      function A(B, S, X, se) {
        var me = !0,
          Se = !1;
        return (
          X === null
            ? (Se = new TypeError('May not write null values to stream'))
            : typeof X != 'string' &&
              X !== void 0 &&
              !S.objectMode &&
              (Se = new TypeError('Invalid non-string/buffer chunk')),
          Se && (B.emit('error', Se), L.nextTick(se, Se), (me = !1)),
          me
        );
      }
      (E.prototype.write = function (B, S, X) {
        var se = this._writableState,
          me = !1,
          Se = !se.objectMode && W(B);
        return (
          Se && !o.isBuffer(B) && (B = P(B)),
          typeof S == 'function' && ((X = S), (S = null)),
          Se ? (S = 'buffer') : S || (S = se.defaultEncoding),
          typeof X != 'function' && (X = N),
          se.ended
            ? j(this, X)
            : (Se || A(this, se, B, X)) && (se.pendingcb++, (me = I(this, se, Se, B, S, X))),
          me
        );
      }),
        (E.prototype.cork = function () {
          var B = this._writableState;
          B.corked++;
        }),
        (E.prototype.uncork = function () {
          var B = this._writableState;
          B.corked &&
            (B.corked--,
            !B.writing && !B.corked && !B.bufferProcessing && B.bufferedRequest && b(this, B));
        }),
        (E.prototype.setDefaultEncoding = function (S) {
          if (
            (typeof S == 'string' && (S = S.toLowerCase()),
            !(
              [
                'hex',
                'utf8',
                'utf-8',
                'ascii',
                'binary',
                'base64',
                'ucs2',
                'ucs-2',
                'utf16le',
                'utf-16le',
                'raw',
              ].indexOf((S + '').toLowerCase()) > -1
            ))
          )
            throw new TypeError('Unknown encoding: ' + S);
          return (this._writableState.defaultEncoding = S), this;
        });
      function _(B, S, X) {
        return (
          !B.objectMode && B.decodeStrings !== !1 && typeof S == 'string' && (S = o.from(S, X)), S
        );
      }
      Object.defineProperty(E.prototype, 'writableHighWaterMark', {
        enumerable: !1,
        get: function () {
          return this._writableState.highWaterMark;
        },
      });
      function I(B, S, X, se, me, Se) {
        if (!X) {
          var Ue = _(S, se, me);
          se !== Ue && ((X = !0), (me = 'buffer'), (se = Ue));
        }
        var ze = S.objectMode ? 1 : se.length;
        S.length += ze;
        var Qe = S.length < S.highWaterMark;
        if ((Qe || (S.needDrain = !0), S.writing || S.corked)) {
          var Xe = S.lastBufferedRequest;
          (S.lastBufferedRequest = { chunk: se, encoding: me, isBuf: X, callback: Se, next: null }),
            Xe ? (Xe.next = S.lastBufferedRequest) : (S.bufferedRequest = S.lastBufferedRequest),
            (S.bufferedRequestCount += 1);
        } else T(B, S, !1, ze, se, me, Se);
        return Qe;
      }
      function T(B, S, X, se, me, Se, Ue) {
        (S.writelen = se),
          (S.writecb = Ue),
          (S.writing = !0),
          (S.sync = !0),
          X ? B._writev(me, S.onwrite) : B._write(me, Se, S.onwrite),
          (S.sync = !1);
      }
      function z(B, S, X, se, me) {
        --S.pendingcb,
          X
            ? (L.nextTick(me, se),
              L.nextTick(de, B, S),
              (B._writableState.errorEmitted = !0),
              B.emit('error', se))
            : (me(se), (B._writableState.errorEmitted = !0), B.emit('error', se), de(B, S));
      }
      function K(B) {
        (B.writing = !1), (B.writecb = null), (B.length -= B.writelen), (B.writelen = 0);
      }
      function ae(B, S) {
        var X = B._writableState,
          se = X.sync,
          me = X.writecb;
        if ((K(X), S)) z(B, X, se, S, me);
        else {
          var Se = v(X);
          !Se && !X.corked && !X.bufferProcessing && X.bufferedRequest && b(B, X),
            se ? O(we, B, X, Se, me) : we(B, X, Se, me);
        }
      }
      function we(B, S, X, se) {
        X || Le(B, S), S.pendingcb--, se(), de(B, S);
      }
      function Le(B, S) {
        S.length === 0 && S.needDrain && ((S.needDrain = !1), B.emit('drain'));
      }
      function b(B, S) {
        S.bufferProcessing = !0;
        var X = S.bufferedRequest;
        if (B._writev && X && X.next) {
          var se = S.bufferedRequestCount,
            me = new Array(se),
            Se = S.corkedRequestsFree;
          Se.entry = X;
          for (var Ue = 0, ze = !0; X; )
            (me[Ue] = X), X.isBuf || (ze = !1), (X = X.next), (Ue += 1);
          (me.allBuffers = ze),
            T(B, S, !0, S.length, me, '', Se.finish),
            S.pendingcb++,
            (S.lastBufferedRequest = null),
            Se.next
              ? ((S.corkedRequestsFree = Se.next), (Se.next = null))
              : (S.corkedRequestsFree = new x(S)),
            (S.bufferedRequestCount = 0);
        } else {
          for (; X; ) {
            var Qe = X.chunk,
              Xe = X.encoding,
              h = X.callback,
              m = S.objectMode ? 1 : Qe.length;
            if ((T(B, S, !1, m, Qe, Xe, h), (X = X.next), S.bufferedRequestCount--, S.writing))
              break;
          }
          X === null && (S.lastBufferedRequest = null);
        }
        (S.bufferedRequest = X), (S.bufferProcessing = !1);
      }
      (E.prototype._write = function (B, S, X) {
        X(new Error('_write() is not implemented'));
      }),
        (E.prototype._writev = null),
        (E.prototype.end = function (B, S, X) {
          var se = this._writableState;
          typeof B == 'function'
            ? ((X = B), (B = null), (S = null))
            : typeof S == 'function' && ((X = S), (S = null)),
            B != null && this.write(B, S),
            se.corked && ((se.corked = 1), this.uncork()),
            se.ending || Be(this, se, X);
        });
      function v(B) {
        return (
          B.ending && B.length === 0 && B.bufferedRequest === null && !B.finished && !B.writing
        );
      }
      function G(B, S) {
        B._final(function (X) {
          S.pendingcb--,
            X && B.emit('error', X),
            (S.prefinished = !0),
            B.emit('prefinish'),
            de(B, S);
        });
      }
      function oe(B, S) {
        !S.prefinished &&
          !S.finalCalled &&
          (typeof B._final == 'function'
            ? (S.pendingcb++, (S.finalCalled = !0), L.nextTick(G, B, S))
            : ((S.prefinished = !0), B.emit('prefinish')));
      }
      function de(B, S) {
        var X = v(S);
        return X && (oe(B, S), S.pendingcb === 0 && ((S.finished = !0), B.emit('finish'))), X;
      }
      function Be(B, S, X) {
        (S.ending = !0),
          de(B, S),
          X && (S.finished ? L.nextTick(X) : B.once('finish', X)),
          (S.ended = !0),
          (B.writable = !1);
      }
      function ge(B, S, X) {
        var se = B.entry;
        for (B.entry = null; se; ) {
          var me = se.callback;
          S.pendingcb--, me(X), (se = se.next);
        }
        S.corkedRequestsFree.next = B;
      }
      Object.defineProperty(E.prototype, 'destroyed', {
        get: function () {
          return this._writableState === void 0 ? !1 : this._writableState.destroyed;
        },
        set: function (B) {
          this._writableState && (this._writableState.destroyed = B);
        },
      }),
        (E.prototype.destroy = R.destroy),
        (E.prototype._undestroy = R.undestroy),
        (E.prototype._destroy = function (B, S) {
          this.end(), S(B);
        });
    },
    26953: function (V, F, s) {
      'use strict';
      function g(O, w) {
        if (!(O instanceof w)) throw new TypeError('Cannot call a class as a function');
      }
      var L = s(10380).Buffer,
        u = s(84232);
      function x(O, w, l) {
        O.copy(w, l);
      }
      (V.exports = (function () {
        function O() {
          g(this, O), (this.head = null), (this.tail = null), (this.length = 0);
        }
        return (
          (O.prototype.push = function (l) {
            var y = { data: l, next: null };
            this.length > 0 ? (this.tail.next = y) : (this.head = y),
              (this.tail = y),
              ++this.length;
          }),
          (O.prototype.unshift = function (l) {
            var y = { data: l, next: this.head };
            this.length === 0 && (this.tail = y), (this.head = y), ++this.length;
          }),
          (O.prototype.shift = function () {
            if (this.length !== 0) {
              var l = this.head.data;
              return (
                this.length === 1 ? (this.head = this.tail = null) : (this.head = this.head.next),
                --this.length,
                l
              );
            }
          }),
          (O.prototype.clear = function () {
            (this.head = this.tail = null), (this.length = 0);
          }),
          (O.prototype.join = function (l) {
            if (this.length === 0) return '';
            for (var y = this.head, p = '' + y.data; (y = y.next); ) p += l + y.data;
            return p;
          }),
          (O.prototype.concat = function (l) {
            if (this.length === 0) return L.alloc(0);
            for (var y = L.allocUnsafe(l >>> 0), p = this.head, o = 0; p; )
              x(p.data, y, o), (o += p.data.length), (p = p.next);
            return y;
          }),
          O
        );
      })()),
        u &&
          u.inspect &&
          u.inspect.custom &&
          (V.exports.prototype[u.inspect.custom] = function () {
            var O = u.inspect({ length: this.length });
            return this.constructor.name + ' ' + O;
          });
    },
    56183: function (V, F, s) {
      'use strict';
      var g = s(31233);
      function L(O, w) {
        var l = this,
          y = this._readableState && this._readableState.destroyed,
          p = this._writableState && this._writableState.destroyed;
        return y || p
          ? (w
              ? w(O)
              : O &&
                (this._writableState
                  ? this._writableState.errorEmitted ||
                    ((this._writableState.errorEmitted = !0), g.nextTick(x, this, O))
                  : g.nextTick(x, this, O)),
            this)
          : (this._readableState && (this._readableState.destroyed = !0),
            this._writableState && (this._writableState.destroyed = !0),
            this._destroy(O || null, function (o) {
              !w && o
                ? l._writableState
                  ? l._writableState.errorEmitted ||
                    ((l._writableState.errorEmitted = !0), g.nextTick(x, l, o))
                  : g.nextTick(x, l, o)
                : w && w(o);
            }),
            this);
      }
      function u() {
        this._readableState &&
          ((this._readableState.destroyed = !1),
          (this._readableState.reading = !1),
          (this._readableState.ended = !1),
          (this._readableState.endEmitted = !1)),
          this._writableState &&
            ((this._writableState.destroyed = !1),
            (this._writableState.ended = !1),
            (this._writableState.ending = !1),
            (this._writableState.finalCalled = !1),
            (this._writableState.prefinished = !1),
            (this._writableState.finished = !1),
            (this._writableState.errorEmitted = !1));
      }
      function x(O, w) {
        O.emit('error', w);
      }
      V.exports = { destroy: L, undestroy: u };
    },
    55703: function (V, F, s) {
      V.exports = s(72100).EventEmitter;
    },
    40798: function (V, F, s) {
      V.exports = s(87515).PassThrough;
    },
    87515: function (V, F, s) {
      (F = V.exports = s(14589)),
        (F.Stream = F),
        (F.Readable = F),
        (F.Writable = s(9514)),
        (F.Duplex = s(61230)),
        (F.Transform = s(83657)),
        (F.PassThrough = s(78016));
    },
    25547: function (V, F, s) {
      V.exports = s(87515).Transform;
    },
    67991: function (V, F, s) {
      V.exports = s(9514);
    },
    10380: function (V, F, s) {
      var g = s(91620),
        L = g.Buffer;
      function u(O, w) {
        for (var l in O) w[l] = O[l];
      }
      L.from && L.alloc && L.allocUnsafe && L.allocUnsafeSlow
        ? (V.exports = g)
        : (u(g, F), (F.Buffer = x));
      function x(O, w, l) {
        return L(O, w, l);
      }
      u(L, x),
        (x.from = function (O, w, l) {
          if (typeof O == 'number') throw new TypeError('Argument must not be a number');
          return L(O, w, l);
        }),
        (x.alloc = function (O, w, l) {
          if (typeof O != 'number') throw new TypeError('Argument must be a number');
          var y = L(O);
          return w !== void 0 ? (typeof l == 'string' ? y.fill(w, l) : y.fill(w)) : y.fill(0), y;
        }),
        (x.allocUnsafe = function (O) {
          if (typeof O != 'number') throw new TypeError('Argument must be a number');
          return L(O);
        }),
        (x.allocUnsafeSlow = function (O) {
          if (typeof O != 'number') throw new TypeError('Argument must be a number');
          return g.SlowBuffer(O);
        });
    },
    26748: function (V, F, s) {
      V.exports = u;
      var g = s(72100).EventEmitter,
        L = s(2937);
      L(u, g),
        (u.Readable = s(87515)),
        (u.Writable = s(67991)),
        (u.Duplex = s(44830)),
        (u.Transform = s(25547)),
        (u.PassThrough = s(40798)),
        (u.Stream = u);
      function u() {
        g.call(this);
      }
      u.prototype.pipe = function (x, O) {
        var w = this;
        function l(R) {
          x.writable && x.write(R) === !1 && w.pause && w.pause();
        }
        w.on('data', l);
        function y() {
          w.readable && w.resume && w.resume();
        }
        x.on('drain', y), !x._isStdio && (!O || O.end !== !1) && (w.on('end', o), w.on('close', M));
        var p = !1;
        function o() {
          p || ((p = !0), x.end());
        }
        function M() {
          p || ((p = !0), typeof x.destroy == 'function' && x.destroy());
        }
        function P(R) {
          if ((W(), g.listenerCount(this, 'error') === 0)) throw R;
        }
        w.on('error', P), x.on('error', P);
        function W() {
          w.removeListener('data', l),
            x.removeListener('drain', y),
            w.removeListener('end', o),
            w.removeListener('close', M),
            w.removeListener('error', P),
            x.removeListener('error', P),
            w.removeListener('end', W),
            w.removeListener('close', W),
            x.removeListener('close', W);
        }
        return w.on('end', W), w.on('close', W), x.on('close', W), x.emit('pipe', w), x;
      };
    },
    19322: function (V, F, s) {
      var g = s(91620).Buffer,
        L =
          g.isEncoding ||
          function (y) {
            switch (y && y.toLowerCase()) {
              case 'hex':
              case 'utf8':
              case 'utf-8':
              case 'ascii':
              case 'binary':
              case 'base64':
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
              case 'raw':
                return !0;
              default:
                return !1;
            }
          };
      function u(y) {
        if (y && !L(y)) throw new Error('Unknown encoding: ' + y);
      }
      var x = (F.s = function (y) {
        switch (
          ((this.encoding = (y || 'utf8').toLowerCase().replace(/[-_]/, '')), u(y), this.encoding)
        ) {
          case 'utf8':
            this.surrogateSize = 3;
            break;
          case 'ucs2':
          case 'utf16le':
            (this.surrogateSize = 2), (this.detectIncompleteChar = w);
            break;
          case 'base64':
            (this.surrogateSize = 3), (this.detectIncompleteChar = l);
            break;
          default:
            this.write = O;
            return;
        }
        (this.charBuffer = new g(6)), (this.charReceived = 0), (this.charLength = 0);
      });
      (x.prototype.write = function (y) {
        for (var p = ''; this.charLength; ) {
          var o =
            y.length >= this.charLength - this.charReceived
              ? this.charLength - this.charReceived
              : y.length;
          if (
            (y.copy(this.charBuffer, this.charReceived, 0, o),
            (this.charReceived += o),
            this.charReceived < this.charLength)
          )
            return '';
          (y = y.slice(o, y.length)),
            (p = this.charBuffer.slice(0, this.charLength).toString(this.encoding));
          var P = p.charCodeAt(p.length - 1);
          if (P >= 55296 && P <= 56319) {
            (this.charLength += this.surrogateSize), (p = '');
            continue;
          }
          if (((this.charReceived = this.charLength = 0), y.length === 0)) return p;
          break;
        }
        this.detectIncompleteChar(y);
        var M = y.length;
        this.charLength &&
          (y.copy(this.charBuffer, 0, y.length - this.charReceived, M), (M -= this.charReceived)),
          (p += y.toString(this.encoding, 0, M));
        var M = p.length - 1,
          P = p.charCodeAt(M);
        if (P >= 55296 && P <= 56319) {
          var W = this.surrogateSize;
          return (
            (this.charLength += W),
            (this.charReceived += W),
            this.charBuffer.copy(this.charBuffer, W, 0, W),
            y.copy(this.charBuffer, 0, 0, W),
            p.substring(0, M)
          );
        }
        return p;
      }),
        (x.prototype.detectIncompleteChar = function (y) {
          for (var p = y.length >= 3 ? 3 : y.length; p > 0; p--) {
            var o = y[y.length - p];
            if (p == 1 && o >> 5 == 6) {
              this.charLength = 2;
              break;
            }
            if (p <= 2 && o >> 4 == 14) {
              this.charLength = 3;
              break;
            }
            if (p <= 3 && o >> 3 == 30) {
              this.charLength = 4;
              break;
            }
          }
          this.charReceived = p;
        }),
        (x.prototype.end = function (y) {
          var p = '';
          if ((y && y.length && (p = this.write(y)), this.charReceived)) {
            var o = this.charReceived,
              M = this.charBuffer,
              P = this.encoding;
            p += M.slice(0, o).toString(P);
          }
          return p;
        });
      function O(y) {
        return y.toString(this.encoding);
      }
      function w(y) {
        (this.charReceived = y.length % 2), (this.charLength = this.charReceived ? 2 : 0);
      }
      function l(y) {
        (this.charReceived = y.length % 3), (this.charLength = this.charReceived ? 3 : 0);
      }
    },
    68861: function (V, F, s) {
      'use strict';
      var g = s(10380).Buffer,
        L =
          g.isEncoding ||
          function (E) {
            switch (((E = '' + E), E && E.toLowerCase())) {
              case 'hex':
              case 'utf8':
              case 'utf-8':
              case 'ascii':
              case 'binary':
              case 'base64':
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
              case 'raw':
                return !0;
              default:
                return !1;
            }
          };
      function u(E) {
        if (!E) return 'utf8';
        for (var j; ; )
          switch (E) {
            case 'utf8':
            case 'utf-8':
              return 'utf8';
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return 'utf16le';
            case 'latin1':
            case 'binary':
              return 'latin1';
            case 'base64':
            case 'ascii':
            case 'hex':
              return E;
            default:
              if (j) return;
              (E = ('' + E).toLowerCase()), (j = !0);
          }
      }
      function x(E) {
        var j = u(E);
        if (typeof j != 'string' && (g.isEncoding === L || !L(E)))
          throw new Error('Unknown encoding: ' + E);
        return j || E;
      }
      F.s = O;
      function O(E) {
        this.encoding = x(E);
        var j;
        switch (this.encoding) {
          case 'utf16le':
            (this.text = P), (this.end = W), (j = 4);
            break;
          case 'utf8':
            (this.fillLast = p), (j = 4);
            break;
          case 'base64':
            (this.text = R), (this.end = N), (j = 3);
            break;
          default:
            (this.write = H), (this.end = te);
            return;
        }
        (this.lastNeed = 0), (this.lastTotal = 0), (this.lastChar = g.allocUnsafe(j));
      }
      (O.prototype.write = function (E) {
        if (E.length === 0) return '';
        var j, A;
        if (this.lastNeed) {
          if (((j = this.fillLast(E)), j === void 0)) return '';
          (A = this.lastNeed), (this.lastNeed = 0);
        } else A = 0;
        return A < E.length ? (j ? j + this.text(E, A) : this.text(E, A)) : j || '';
      }),
        (O.prototype.end = M),
        (O.prototype.text = o),
        (O.prototype.fillLast = function (E) {
          if (this.lastNeed <= E.length)
            return (
              E.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed),
              this.lastChar.toString(this.encoding, 0, this.lastTotal)
            );
          E.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, E.length),
            (this.lastNeed -= E.length);
        });
      function w(E) {
        return E <= 127
          ? 0
          : E >> 5 === 6
            ? 2
            : E >> 4 === 14
              ? 3
              : E >> 3 === 30
                ? 4
                : E >> 6 === 2
                  ? -1
                  : -2;
      }
      function l(E, j, A) {
        var _ = j.length - 1;
        if (_ < A) return 0;
        var I = w(j[_]);
        return I >= 0
          ? (I > 0 && (E.lastNeed = I - 1), I)
          : --_ < A || I === -2
            ? 0
            : ((I = w(j[_])),
              I >= 0
                ? (I > 0 && (E.lastNeed = I - 2), I)
                : --_ < A || I === -2
                  ? 0
                  : ((I = w(j[_])),
                    I >= 0 ? (I > 0 && (I === 2 ? (I = 0) : (E.lastNeed = I - 3)), I) : 0));
      }
      function y(E, j, A) {
        if ((j[0] & 192) !== 128) return (E.lastNeed = 0), '\uFFFD';
        if (E.lastNeed > 1 && j.length > 1) {
          if ((j[1] & 192) !== 128) return (E.lastNeed = 1), '\uFFFD';
          if (E.lastNeed > 2 && j.length > 2 && (j[2] & 192) !== 128)
            return (E.lastNeed = 2), '\uFFFD';
        }
      }
      function p(E) {
        var j = this.lastTotal - this.lastNeed,
          A = y(this, E, j);
        if (A !== void 0) return A;
        if (this.lastNeed <= E.length)
          return (
            E.copy(this.lastChar, j, 0, this.lastNeed),
            this.lastChar.toString(this.encoding, 0, this.lastTotal)
          );
        E.copy(this.lastChar, j, 0, E.length), (this.lastNeed -= E.length);
      }
      function o(E, j) {
        var A = l(this, E, j);
        if (!this.lastNeed) return E.toString('utf8', j);
        this.lastTotal = A;
        var _ = E.length - (A - this.lastNeed);
        return E.copy(this.lastChar, 0, _), E.toString('utf8', j, _);
      }
      function M(E) {
        var j = E && E.length ? this.write(E) : '';
        return this.lastNeed ? j + '\uFFFD' : j;
      }
      function P(E, j) {
        if ((E.length - j) % 2 === 0) {
          var A = E.toString('utf16le', j);
          if (A) {
            var _ = A.charCodeAt(A.length - 1);
            if (_ >= 55296 && _ <= 56319)
              return (
                (this.lastNeed = 2),
                (this.lastTotal = 4),
                (this.lastChar[0] = E[E.length - 2]),
                (this.lastChar[1] = E[E.length - 1]),
                A.slice(0, -1)
              );
          }
          return A;
        }
        return (
          (this.lastNeed = 1),
          (this.lastTotal = 2),
          (this.lastChar[0] = E[E.length - 1]),
          E.toString('utf16le', j, E.length - 1)
        );
      }
      function W(E) {
        var j = E && E.length ? this.write(E) : '';
        if (this.lastNeed) {
          var A = this.lastTotal - this.lastNeed;
          return j + this.lastChar.toString('utf16le', 0, A);
        }
        return j;
      }
      function R(E, j) {
        var A = (E.length - j) % 3;
        return A === 0
          ? E.toString('base64', j)
          : ((this.lastNeed = 3 - A),
            (this.lastTotal = 3),
            A === 1
              ? (this.lastChar[0] = E[E.length - 1])
              : ((this.lastChar[0] = E[E.length - 2]), (this.lastChar[1] = E[E.length - 1])),
            E.toString('base64', j, E.length - A));
      }
      function N(E) {
        var j = E && E.length ? this.write(E) : '';
        return this.lastNeed ? j + this.lastChar.toString('base64', 0, 3 - this.lastNeed) : j;
      }
      function H(E) {
        return E.toString(this.encoding);
      }
      function te(E) {
        return E && E.length ? this.write(E) : '';
      }
    },
    53229: function (V, F, s) {
      var g = s(14224),
        L = s(26748);
      (F = V.exports = u), (u.through = u);
      function u(x, O, w) {
        (x =
          x ||
          function (R) {
            this.queue(R);
          }),
          (O =
            O ||
            function () {
              this.queue(null);
            });
        var l = !1,
          y = !1,
          p = [],
          o = !1,
          M = new L();
        (M.readable = M.writable = !0),
          (M.paused = !1),
          (M.autoDestroy = !(w && w.autoDestroy === !1)),
          (M.write = function (R) {
            return x.call(this, R), !M.paused;
          });
        function P() {
          for (; p.length && !M.paused; ) {
            var R = p.shift();
            if (R === null) return M.emit('end');
            M.emit('data', R);
          }
        }
        (M.queue = M.push =
          function (R) {
            return o || (R === null && (o = !0), p.push(R), P()), M;
          }),
          M.on('end', function () {
            (M.readable = !1),
              !M.writable &&
                M.autoDestroy &&
                g.nextTick(function () {
                  M.destroy();
                });
          });
        function W() {
          (M.writable = !1), O.call(M), !M.readable && M.autoDestroy && M.destroy();
        }
        return (
          (M.end = function (R) {
            if (!l) return (l = !0), arguments.length && M.write(R), W(), M;
          }),
          (M.destroy = function () {
            if (!y)
              return (
                (y = !0),
                (l = !0),
                (p.length = 0),
                (M.writable = M.readable = !1),
                M.emit('close'),
                M
              );
          }),
          (M.pause = function () {
            if (!M.paused) return (M.paused = !0), M;
          }),
          (M.resume = function () {
            return (
              M.paused && ((M.paused = !1), M.emit('resume')), P(), M.paused || M.emit('drain'), M
            );
          }),
          M
        );
      }
    },
    48863: function (V, F, s) {
      V.exports = g;
      function g(u, x) {
        if (L('noDeprecation')) return u;
        var O = !1;
        function w() {
          if (!O) {
            if (L('throwDeprecation')) throw new Error(x);
            L('traceDeprecation') ? console.trace(x) : console.warn(x), (O = !0);
          }
          return u.apply(this, arguments);
        }
        return w;
      }
      function L(u) {
        try {
          if (!s.g.localStorage) return !1;
        } catch (O) {
          return !1;
        }
        var x = s.g.localStorage[u];
        return x == null ? !1 : String(x).toLowerCase() === 'true';
      }
    },
    84232: function () {},
    14050: function () {},
  },
]);
