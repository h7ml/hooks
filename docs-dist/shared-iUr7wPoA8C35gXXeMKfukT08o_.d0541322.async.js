(self.webpackChunk_dext7r_hooks = self.webpackChunk_dext7r_hooks || []).push([
  [4953],
  {
    82247: function (je, He, T) {
      'use strict';
      var ne = T(50283),
        de = T(50959),
        H = T(86683);
      function te(D, f) {
        return Ee(D) || le(D, f) || ae(D, f) || se();
      }
      function se() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function ae(D, f) {
        if (D) {
          if (typeof D == 'string') return K(D, f);
          var c = Object.prototype.toString.call(D).slice(8, -1);
          if (
            (c === 'Object' && D.constructor && (c = D.constructor.name),
            c === 'Map' || c === 'Set')
          )
            return Array.from(D);
          if (c === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))
            return K(D, f);
        }
      }
      function K(D, f) {
        (f == null || f > D.length) && (f = D.length);
        for (var c = 0, x = new Array(f); c < f; c++) x[c] = D[c];
        return x;
      }
      function le(D, f) {
        var c =
          D == null
            ? null
            : (typeof Symbol != 'undefined' && D[Symbol.iterator]) || D['@@iterator'];
        if (c != null) {
          var x,
            M,
            P,
            w,
            G = [],
            U = !0,
            Z = !1;
          try {
            if (((P = (c = c.call(D)).next), f === 0)) {
              if (Object(c) !== c) return;
              U = !1;
            } else for (; !(U = (x = P.call(c)).done) && (G.push(x.value), G.length !== f); U = !0);
          } catch (F) {
            (Z = !0), (M = F);
          } finally {
            try {
              if (!U && c.return != null && ((w = c.return()), Object(w) !== w)) return;
            } finally {
              if (Z) throw M;
            }
          }
          return G;
        }
      }
      function Ee(D) {
        if (Array.isArray(D)) return D;
      }
      var h = {
          toString: function (f) {
            return typeof f.type == 'string' && f.type in this
              ? 'enum' in f
                ? this.enum(f)
                : this[f.type](f)
              : f.type
                ? this.getValidClassName(f) || f.type
                : 'const' in f
                  ? ''.concat(f.const)
                  : 'oneOf' in f
                    ? this.oneOf(f)
                    : 'unknown';
          },
          string: function (f) {
            return f.type;
          },
          number: function (f) {
            return f.type;
          },
          boolean: function (f) {
            return f.type;
          },
          any: function (f) {
            return f.type;
          },
          object: function (f) {
            var c = this,
              x = [];
            return (
              Object.entries(f.properties || {}).forEach(function (M) {
                var P,
                  w = te(M, 2),
                  G = w[0],
                  U = w[1];
                x.push(
                  ''
                    .concat(G)
                    .concat(
                      (P = f.required) !== null && P !== void 0 && P.includes(G) ? '' : '?',
                      ': ',
                    )
                    .concat(U.type === 'object' ? 'object' : c.toString(U)),
                );
              }),
              x.length ? '{ '.concat(x.join('; '), ' }') : '{}'
            );
          },
          array: function (f) {
            if (f.items) {
              var c = this.getValidClassName(f.items);
              return c ? ''.concat(c, '[]') : ''.concat(this.toString(f.items), '[]');
            }
            return 'any[]';
          },
          element: function (f) {
            return '<'.concat(f.componentName, ' />');
          },
          function: function (f) {
            var c = this,
              x = f.signature;
            if (!x) return 'Function';
            var M = 'oneOf' in x ? x.oneOf : [x];
            return M.map(function (P) {
              return ''
                .concat(P.isAsync ? 'async ' : '', '(')
                .concat(
                  P.arguments
                    .map(function (w) {
                      return ''.concat(w.key, ': ').concat(c.toString(w));
                    })
                    .join(', '),
                  ') => ',
                )
                .concat(c.toString(P.returnType));
            }).join(' | ');
          },
          dom: function (f) {
            return f.className || 'DOM';
          },
          enum: function (f) {
            return f.enum
              .map(function (c) {
                return JSON.stringify(c);
              })
              .join(' | ');
          },
          oneOf: function (f) {
            var c = this;
            return f.oneOf
              .map(function (x) {
                return c.getValidClassName(x) || c.toString(x);
              })
              .join(' | ');
          },
          getValidClassName: function (f) {
            return 'className' in f && typeof f.className == 'string' && f.className !== '__type'
              ? f.className
              : null;
          },
        },
        Ce = function (f) {
          var c = useState(function () {
              return h.toString(f);
            }),
            x = te(c, 2),
            M = x[0],
            P = x[1];
          return (
            useEffect(
              function () {
                P(h.toString(f));
              },
              [f],
            ),
            React.createElement('code', null, M)
          );
        },
        re = function (f) {
          var c,
            x = useRouteMeta(),
            M = x.frontmatter,
            P = useAtomAssets(),
            w = P.components,
            G = f.id || M.atomId,
            U = useIntl();
          if (!G) throw new Error('`id` properties if required for API component!');
          var Z = w == null ? void 0 : w[G];
          return React.createElement(
            'div',
            { className: 'markdown' },
            React.createElement(
              Table,
              null,
              React.createElement(
                'thead',
                null,
                React.createElement(
                  'tr',
                  null,
                  React.createElement('th', null, U.formatMessage({ id: 'api.component.name' })),
                  React.createElement(
                    'th',
                    null,
                    U.formatMessage({ id: 'api.component.description' }),
                  ),
                  React.createElement('th', null, U.formatMessage({ id: 'api.component.type' })),
                  React.createElement('th', null, U.formatMessage({ id: 'api.component.default' })),
                ),
              ),
              React.createElement(
                'tbody',
                null,
                Z && (c = Z.propsConfig) !== null && c !== void 0 && c.properties
                  ? Object.entries(Z.propsConfig.properties).map(function (F) {
                      var B,
                        ee = te(F, 2),
                        W = ee[0],
                        J = ee[1];
                      return React.createElement(
                        'tr',
                        { key: W },
                        React.createElement('td', null, W),
                        React.createElement('td', null, J.description || '--'),
                        React.createElement('td', null, React.createElement(Ce, J)),
                        React.createElement(
                          'td',
                          null,
                          React.createElement(
                            'code',
                            null,
                            (B = Z.propsConfig.required) !== null && B !== void 0 && B.includes(W)
                              ? U.formatMessage({ id: 'api.component.required' })
                              : JSON.stringify(J.default) || '--',
                          ),
                        ),
                      );
                    })
                  : React.createElement(
                      'tr',
                      null,
                      React.createElement(
                        'td',
                        { colSpan: 4 },
                        U.formatMessage(
                          { id: 'api.component.'.concat(w ? 'not.found' : 'unavailable') },
                          { id: G },
                        ),
                      ),
                    ),
              ),
            ),
          );
        },
        ue = null;
    },
    57161: function (je, He, T) {
      'use strict';
      var ne = T(50959);
      function de() {
        return (
          (de = Object.assign
            ? Object.assign.bind()
            : function (se) {
                for (var ae = 1; ae < arguments.length; ae++) {
                  var K = arguments[ae];
                  for (var le in K) Object.prototype.hasOwnProperty.call(K, le) && (se[le] = K[le]);
                }
                return se;
              }),
          de.apply(this, arguments)
        );
      }
      var H = function (ae) {
          return React.createElement('span', de({ className: 'dumi-default-badge' }, ae));
        },
        te = null;
    },
    86683: function (je, He, T) {
      'use strict';
      T.d(He, {
        Z: function () {
          return D;
        },
      });
      var ne = T(30826),
        de = T.n(ne),
        H = T(50959),
        te = ['children'];
      function se(f, c) {
        return h(f) || Ee(f, c) || K(f, c) || ae();
      }
      function ae() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function K(f, c) {
        if (f) {
          if (typeof f == 'string') return le(f, c);
          var x = Object.prototype.toString.call(f).slice(8, -1);
          if (
            (x === 'Object' && f.constructor && (x = f.constructor.name),
            x === 'Map' || x === 'Set')
          )
            return Array.from(f);
          if (x === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(x))
            return le(f, c);
        }
      }
      function le(f, c) {
        (c == null || c > f.length) && (c = f.length);
        for (var x = 0, M = new Array(c); x < c; x++) M[x] = f[x];
        return M;
      }
      function Ee(f, c) {
        var x =
          f == null
            ? null
            : (typeof Symbol != 'undefined' && f[Symbol.iterator]) || f['@@iterator'];
        if (x != null) {
          var M,
            P,
            w,
            G,
            U = [],
            Z = !0,
            F = !1;
          try {
            if (((w = (x = x.call(f)).next), c === 0)) {
              if (Object(x) !== x) return;
              Z = !1;
            } else for (; !(Z = (M = w.call(x)).done) && (U.push(M.value), U.length !== c); Z = !0);
          } catch (B) {
            (F = !0), (P = B);
          } finally {
            try {
              if (!Z && x.return != null && ((G = x.return()), Object(G) !== G)) return;
            } finally {
              if (F) throw P;
            }
          }
          return U;
        }
      }
      function h(f) {
        if (Array.isArray(f)) return f;
      }
      function Ce(f, c) {
        if (f == null) return {};
        var x = re(f, c),
          M,
          P;
        if (Object.getOwnPropertySymbols) {
          var w = Object.getOwnPropertySymbols(f);
          for (P = 0; P < w.length; P++)
            (M = w[P]),
              !(c.indexOf(M) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(f, M) &&
                (x[M] = f[M]);
        }
        return x;
      }
      function re(f, c) {
        if (f == null) return {};
        var x = {},
          M = Object.keys(f),
          P,
          w;
        for (w = 0; w < M.length; w++) (P = M[w]), !(c.indexOf(P) >= 0) && (x[P] = f[P]);
        return x;
      }
      var ue = function (c) {
          var x = c.children,
            M = Ce(c, te),
            P = (0, H.useRef)(null),
            w = (0, H.useState)(!1),
            G = se(w, 2),
            U = G[0],
            Z = G[1],
            F = (0, H.useState)(!1),
            B = se(F, 2),
            ee = B[0],
            W = B[1];
          return (
            (0, H.useEffect)(function () {
              var J = P.current;
              if (J) {
                var oe = de()(function () {
                  Z(J.scrollLeft > 0), W(J.scrollLeft < J.scrollWidth - J.offsetWidth);
                }, 100);
                return (
                  oe(),
                  J.addEventListener('scroll', oe),
                  window.addEventListener('resize', oe),
                  function () {
                    J.removeEventListener('scroll', oe), window.removeEventListener('resize', oe);
                  }
                );
              }
            }, []),
            H.createElement(
              'div',
              { className: 'dumi-default-table' },
              H.createElement(
                'div',
                {
                  className: 'dumi-default-table-content',
                  ref: P,
                  'data-left-folded': U || void 0,
                  'data-right-folded': ee || void 0,
                },
                H.createElement('table', M, x),
              ),
            )
          );
        },
        D = ue;
    },
    46448: function (je, He, T) {
      'use strict';
      var ne = T(91010),
        de = T(69223),
        H = T(35194),
        te = T(83288),
        se = T(66375),
        ae = T(1959),
        K = T(50269),
        le = T(58675),
        Ee = T(13004),
        h = T(68185),
        Ce = T(84875),
        re = T.n(Ce),
        ue = T(75924),
        D = T(50361),
        f = T(24694),
        c = T(50959),
        x = c.createContext(null);
      function M(n) {
        var a = n.dropPosition,
          i = n.dropLevelOffset,
          e = n.indent,
          d = {
            pointerEvents: 'none',
            position: 'absolute',
            right: 0,
            backgroundColor: 'red',
            height: 2,
          };
        switch (a) {
          case -1:
            (d.top = 0), (d.left = -i * e);
            break;
          case 1:
            (d.bottom = 0), (d.left = -i * e);
            break;
          case 0:
            (d.bottom = 0), (d.left = e);
            break;
        }
        return c.createElement('div', { style: d });
      }
      function P(n) {
        if (n == null) throw new TypeError('Cannot destructure ' + n);
      }
      var w = T(30309),
        G = T(50446),
        U = T(80918),
        Z = T(63143),
        F = T(10091),
        B = function (a) {
          for (
            var i = a.prefixCls,
              e = a.level,
              d = a.isStart,
              l = a.isEnd,
              p = ''.concat(i, '-indent-unit'),
              t = [],
              r = 0;
            r < e;
            r += 1
          )
            t.push(
              c.createElement('span', {
                key: r,
                className: re()(
                  p,
                  (0, h.Z)((0, h.Z)({}, ''.concat(p, '-start'), d[r]), ''.concat(p, '-end'), l[r]),
                ),
              }),
            );
          return c.createElement(
            'span',
            { 'aria-hidden': 'true', className: ''.concat(i, '-indent') },
            t,
          );
        },
        ee = c.memo(B);
      function W(n, a) {
        return n[a];
      }
      var J = T(71783),
        oe = T(36760),
        ce = ['children'];
      function pe(n, a) {
        return ''.concat(n, '-').concat(a);
      }
      function Se(n) {
        return n && n.type && n.type.isTreeNode;
      }
      function Ne(n, a) {
        return n != null ? n : a;
      }
      function ve(n) {
        var a = n || {},
          i = a.title,
          e = a._title,
          d = a.key,
          l = a.children,
          p = i || 'title';
        return { title: p, _title: e || [p], key: d || 'key', children: l || 'children' };
      }
      function ze(n, a) {
        var i = new Map();
        function e(d) {
          var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
          (d || []).forEach(function (p) {
            var t = p[a.key],
              r = p[a.children];
            warning(t != null, 'Tree node must have a certain key: ['.concat(l).concat(t, ']'));
            var o = String(t);
            warning(
              !i.has(o) || t === null || t === void 0,
              "Same 'key' exist in the Tree: ".concat(o),
            ),
              i.set(o, !0),
              e(r, ''.concat(l).concat(o, ' > '));
          });
        }
        e(n);
      }
      function Fe(n) {
        function a(i) {
          var e = (0, J.Z)(i);
          return e
            .map(function (d) {
              if (!Se(d))
                return (0, f.ZP)(!d, 'Tree/TreeNode can only accept TreeNode as children.'), null;
              var l = d.key,
                p = d.props,
                t = p.children,
                r = (0, G.Z)(p, ce),
                o = (0, H.Z)({ key: l }, r),
                s = a(t);
              return s.length && (o.children = s), o;
            })
            .filter(function (d) {
              return d;
            });
        }
        return a(n);
      }
      function We(n, a, i) {
        var e = ve(i),
          d = e._title,
          l = e.key,
          p = e.children,
          t = new Set(a === !0 ? [] : a),
          r = [];
        function o(s) {
          var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
          return s.map(function (v, y) {
            for (var m = pe(u ? u.pos : '0', y), b = Ne(v[l], m), g, E = 0; E < d.length; E += 1) {
              var C = d[E];
              if (v[C] !== void 0) {
                g = v[C];
                break;
              }
            }
            var N = (0, H.Z)(
              (0, H.Z)({}, (0, oe.Z)(v, [].concat((0, te.Z)(d), [l, p]))),
              {},
              {
                title: g,
                key: b,
                parent: u,
                pos: m,
                children: null,
                data: v,
                isStart: [].concat((0, te.Z)(u ? u.isStart : []), [y === 0]),
                isEnd: [].concat((0, te.Z)(u ? u.isEnd : []), [y === s.length - 1]),
              },
            );
            return (
              r.push(N),
              a === !0 || t.has(b) ? (N.children = o(v[p] || [], N)) : (N.children = []),
              N
            );
          });
        }
        return o(n), r;
      }
      function et(n, a, i) {
        var e = {};
        (0, de.Z)(i) === 'object' ? (e = i) : (e = { externalGetKey: i }), (e = e || {});
        var d = e,
          l = d.childrenPropName,
          p = d.externalGetKey,
          t = d.fieldNames,
          r = ve(t),
          o = r.key,
          s = r.children,
          u = l || s,
          v;
        p
          ? typeof p == 'string'
            ? (v = function (b) {
                return b[p];
              })
            : typeof p == 'function' &&
              (v = function (b) {
                return p(b);
              })
          : (v = function (b, g) {
              return Ne(b[o], g);
            });
        function y(m, b, g, E) {
          var C = m ? m[u] : n,
            N = m ? pe(g.pos, b) : '0',
            k = m ? [].concat((0, te.Z)(E), [m]) : [];
          if (m) {
            var S = v(m, N),
              O = {
                node: m,
                index: b,
                pos: N,
                key: S,
                parentPos: g.node ? g.pos : null,
                level: g.level + 1,
                nodes: k,
              };
            a(O);
          }
          C &&
            C.forEach(function ($, L) {
              y($, L, { node: m, pos: N, level: g ? g.level + 1 : -1 }, k);
            });
        }
        y(null);
      }
      function Xe(n) {
        var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          i = a.initWrapper,
          e = a.processEntity,
          d = a.onProcessFinished,
          l = a.externalGetKey,
          p = a.childrenPropName,
          t = a.fieldNames,
          r = arguments.length > 2 ? arguments[2] : void 0,
          o = l || r,
          s = {},
          u = {},
          v = { posEntities: s, keyEntities: u };
        return (
          i && (v = i(v) || v),
          et(
            n,
            function (y) {
              var m = y.node,
                b = y.index,
                g = y.pos,
                E = y.key,
                C = y.parentPos,
                N = y.level,
                k = y.nodes,
                S = { node: m, nodes: k, index: b, key: E, pos: g, level: N },
                O = Ne(E, g);
              (s[g] = S),
                (u[O] = S),
                (S.parent = s[C]),
                S.parent &&
                  ((S.parent.children = S.parent.children || []), S.parent.children.push(S)),
                e && e(S, v);
            },
            { externalGetKey: o, childrenPropName: p, fieldNames: t },
          ),
          d && d(v),
          v
        );
      }
      function ge(n, a) {
        var i = a.expandedKeys,
          e = a.selectedKeys,
          d = a.loadedKeys,
          l = a.loadingKeys,
          p = a.checkedKeys,
          t = a.halfCheckedKeys,
          r = a.dragOverNodeKey,
          o = a.dropPosition,
          s = a.keyEntities,
          u = W(s, n),
          v = {
            eventKey: n,
            expanded: i.indexOf(n) !== -1,
            selected: e.indexOf(n) !== -1,
            loaded: d.indexOf(n) !== -1,
            loading: l.indexOf(n) !== -1,
            checked: p.indexOf(n) !== -1,
            halfChecked: t.indexOf(n) !== -1,
            pos: String(u ? u.pos : ''),
            dragOver: r === n && o === 0,
            dragOverGapTop: r === n && o === -1,
            dragOverGapBottom: r === n && o === 1,
          };
        return v;
      }
      function V(n) {
        var a = n.data,
          i = n.expanded,
          e = n.selected,
          d = n.checked,
          l = n.loaded,
          p = n.loading,
          t = n.halfChecked,
          r = n.dragOver,
          o = n.dragOverGapTop,
          s = n.dragOverGapBottom,
          u = n.pos,
          v = n.active,
          y = n.eventKey,
          m = (0, H.Z)(
            (0, H.Z)({}, a),
            {},
            {
              expanded: i,
              selected: e,
              checked: d,
              loaded: l,
              loading: p,
              halfChecked: t,
              dragOver: r,
              dragOverGapTop: o,
              dragOverGapBottom: s,
              pos: u,
              active: v,
              key: y,
            },
          );
        return (
          'props' in m ||
            Object.defineProperty(m, 'props', {
              get: function () {
                return (
                  (0, f.ZP)(
                    !1,
                    'Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`.',
                  ),
                  n
                );
              },
            }),
          m
        );
      }
      var tt = [
          'eventKey',
          'className',
          'style',
          'dragOver',
          'dragOverGapTop',
          'dragOverGapBottom',
          'isLeaf',
          'isStart',
          'isEnd',
          'expanded',
          'selected',
          'checked',
          'halfChecked',
          'loading',
          'domRef',
          'active',
          'data',
          'onMouseMove',
          'selectable',
        ],
        Ye = 'open',
        we = 'close',
        z = '---',
        he = (function (n) {
          (0, le.Z)(i, n);
          var a = (0, Ee.Z)(i);
          function i() {
            var e;
            (0, se.Z)(this, i);
            for (var d = arguments.length, l = new Array(d), p = 0; p < d; p++) l[p] = arguments[p];
            return (
              (e = a.call.apply(a, [this].concat(l))),
              (0, h.Z)((0, K.Z)(e), 'state', { dragNodeHighlight: !1 }),
              (0, h.Z)((0, K.Z)(e), 'selectHandle', void 0),
              (0, h.Z)((0, K.Z)(e), 'cacheIndent', void 0),
              (0, h.Z)((0, K.Z)(e), 'onSelectorClick', function (t) {
                var r = e.props.context.onNodeClick;
                r(t, V(e.props)), e.isSelectable() ? e.onSelect(t) : e.onCheck(t);
              }),
              (0, h.Z)((0, K.Z)(e), 'onSelectorDoubleClick', function (t) {
                var r = e.props.context.onNodeDoubleClick;
                r(t, V(e.props));
              }),
              (0, h.Z)((0, K.Z)(e), 'onSelect', function (t) {
                if (!e.isDisabled()) {
                  var r = e.props.context.onNodeSelect;
                  r(t, V(e.props));
                }
              }),
              (0, h.Z)((0, K.Z)(e), 'onCheck', function (t) {
                if (!e.isDisabled()) {
                  var r = e.props,
                    o = r.disableCheckbox,
                    s = r.checked,
                    u = e.props.context.onNodeCheck;
                  if (!(!e.isCheckable() || o)) {
                    var v = !s;
                    u(t, V(e.props), v);
                  }
                }
              }),
              (0, h.Z)((0, K.Z)(e), 'onMouseEnter', function (t) {
                var r = e.props.context.onNodeMouseEnter;
                r(t, V(e.props));
              }),
              (0, h.Z)((0, K.Z)(e), 'onMouseLeave', function (t) {
                var r = e.props.context.onNodeMouseLeave;
                r(t, V(e.props));
              }),
              (0, h.Z)((0, K.Z)(e), 'onContextMenu', function (t) {
                var r = e.props.context.onNodeContextMenu;
                r(t, V(e.props));
              }),
              (0, h.Z)((0, K.Z)(e), 'onDragStart', function (t) {
                var r = e.props.context.onNodeDragStart;
                t.stopPropagation(), e.setState({ dragNodeHighlight: !0 }), r(t, (0, K.Z)(e));
                try {
                  t.dataTransfer.setData('text/plain', '');
                } catch (o) {}
              }),
              (0, h.Z)((0, K.Z)(e), 'onDragEnter', function (t) {
                var r = e.props.context.onNodeDragEnter;
                t.preventDefault(), t.stopPropagation(), r(t, (0, K.Z)(e));
              }),
              (0, h.Z)((0, K.Z)(e), 'onDragOver', function (t) {
                var r = e.props.context.onNodeDragOver;
                t.preventDefault(), t.stopPropagation(), r(t, (0, K.Z)(e));
              }),
              (0, h.Z)((0, K.Z)(e), 'onDragLeave', function (t) {
                var r = e.props.context.onNodeDragLeave;
                t.stopPropagation(), r(t, (0, K.Z)(e));
              }),
              (0, h.Z)((0, K.Z)(e), 'onDragEnd', function (t) {
                var r = e.props.context.onNodeDragEnd;
                t.stopPropagation(), e.setState({ dragNodeHighlight: !1 }), r(t, (0, K.Z)(e));
              }),
              (0, h.Z)((0, K.Z)(e), 'onDrop', function (t) {
                var r = e.props.context.onNodeDrop;
                t.preventDefault(),
                  t.stopPropagation(),
                  e.setState({ dragNodeHighlight: !1 }),
                  r(t, (0, K.Z)(e));
              }),
              (0, h.Z)((0, K.Z)(e), 'onExpand', function (t) {
                var r = e.props,
                  o = r.loading,
                  s = r.context.onNodeExpand;
                o || s(t, V(e.props));
              }),
              (0, h.Z)((0, K.Z)(e), 'setSelectHandle', function (t) {
                e.selectHandle = t;
              }),
              (0, h.Z)((0, K.Z)(e), 'getNodeState', function () {
                var t = e.props.expanded;
                return e.isLeaf() ? null : t ? Ye : we;
              }),
              (0, h.Z)((0, K.Z)(e), 'hasChildren', function () {
                var t = e.props.eventKey,
                  r = e.props.context.keyEntities,
                  o = W(r, t) || {},
                  s = o.children;
                return !!(s || []).length;
              }),
              (0, h.Z)((0, K.Z)(e), 'isLeaf', function () {
                var t = e.props,
                  r = t.isLeaf,
                  o = t.loaded,
                  s = e.props.context.loadData,
                  u = e.hasChildren();
                return r === !1 ? !1 : r || (!s && !u) || (s && o && !u);
              }),
              (0, h.Z)((0, K.Z)(e), 'isDisabled', function () {
                var t = e.props.disabled,
                  r = e.props.context.disabled;
                return !!(r || t);
              }),
              (0, h.Z)((0, K.Z)(e), 'isCheckable', function () {
                var t = e.props.checkable,
                  r = e.props.context.checkable;
                return !r || t === !1 ? !1 : r;
              }),
              (0, h.Z)((0, K.Z)(e), 'syncLoadData', function (t) {
                var r = t.expanded,
                  o = t.loading,
                  s = t.loaded,
                  u = e.props.context,
                  v = u.loadData,
                  y = u.onNodeLoad;
                o || (v && r && !e.isLeaf() && !e.hasChildren() && !s && y(V(e.props)));
              }),
              (0, h.Z)((0, K.Z)(e), 'isDraggable', function () {
                var t = e.props,
                  r = t.data,
                  o = t.context.draggable;
                return !!(o && (!o.nodeDraggable || o.nodeDraggable(r)));
              }),
              (0, h.Z)((0, K.Z)(e), 'renderDragHandler', function () {
                var t = e.props.context,
                  r = t.draggable,
                  o = t.prefixCls;
                return r != null && r.icon
                  ? c.createElement('span', { className: ''.concat(o, '-draggable-icon') }, r.icon)
                  : null;
              }),
              (0, h.Z)((0, K.Z)(e), 'renderSwitcherIconDom', function (t) {
                var r = e.props.switcherIcon,
                  o = e.props.context.switcherIcon,
                  s = r || o;
                return typeof s == 'function'
                  ? s((0, H.Z)((0, H.Z)({}, e.props), {}, { isLeaf: t }))
                  : s;
              }),
              (0, h.Z)((0, K.Z)(e), 'renderSwitcher', function () {
                var t = e.props.expanded,
                  r = e.props.context.prefixCls;
                if (e.isLeaf()) {
                  var o = e.renderSwitcherIconDom(!0);
                  return o !== !1
                    ? c.createElement(
                        'span',
                        {
                          className: re()(
                            ''.concat(r, '-switcher'),
                            ''.concat(r, '-switcher-noop'),
                          ),
                        },
                        o,
                      )
                    : null;
                }
                var s = re()(
                    ''.concat(r, '-switcher'),
                    ''.concat(r, '-switcher_').concat(t ? Ye : we),
                  ),
                  u = e.renderSwitcherIconDom(!1);
                return u !== !1
                  ? c.createElement('span', { onClick: e.onExpand, className: s }, u)
                  : null;
              }),
              (0, h.Z)((0, K.Z)(e), 'renderCheckbox', function () {
                var t = e.props,
                  r = t.checked,
                  o = t.halfChecked,
                  s = t.disableCheckbox,
                  u = e.props.context.prefixCls,
                  v = e.isDisabled(),
                  y = e.isCheckable();
                if (!y) return null;
                var m = typeof y != 'boolean' ? y : null;
                return c.createElement(
                  'span',
                  {
                    className: re()(
                      ''.concat(u, '-checkbox'),
                      r && ''.concat(u, '-checkbox-checked'),
                      !r && o && ''.concat(u, '-checkbox-indeterminate'),
                      (v || s) && ''.concat(u, '-checkbox-disabled'),
                    ),
                    onClick: e.onCheck,
                  },
                  m,
                );
              }),
              (0, h.Z)((0, K.Z)(e), 'renderIcon', function () {
                var t = e.props.loading,
                  r = e.props.context.prefixCls;
                return c.createElement('span', {
                  className: re()(
                    ''.concat(r, '-iconEle'),
                    ''.concat(r, '-icon__').concat(e.getNodeState() || 'docu'),
                    t && ''.concat(r, '-icon_loading'),
                  ),
                });
              }),
              (0, h.Z)((0, K.Z)(e), 'renderSelector', function () {
                var t = e.state.dragNodeHighlight,
                  r = e.props,
                  o = r.title,
                  s = o === void 0 ? z : o,
                  u = r.selected,
                  v = r.icon,
                  y = r.loading,
                  m = r.data,
                  b = e.props.context,
                  g = b.prefixCls,
                  E = b.showIcon,
                  C = b.icon,
                  N = b.loadData,
                  k = b.titleRender,
                  S = e.isDisabled(),
                  O = ''.concat(g, '-node-content-wrapper'),
                  $;
                if (E) {
                  var L = v || C;
                  $ = L
                    ? c.createElement(
                        'span',
                        {
                          className: re()(
                            ''.concat(g, '-iconEle'),
                            ''.concat(g, '-icon__customize'),
                          ),
                        },
                        typeof L == 'function' ? L(e.props) : L,
                      )
                    : e.renderIcon();
                } else N && y && ($ = e.renderIcon());
                var j;
                typeof s == 'function' ? (j = s(m)) : k ? (j = k(m)) : (j = s);
                var R = c.createElement('span', { className: ''.concat(g, '-title') }, j);
                return c.createElement(
                  'span',
                  {
                    ref: e.setSelectHandle,
                    title: typeof s == 'string' ? s : '',
                    className: re()(
                      ''.concat(O),
                      ''.concat(O, '-').concat(e.getNodeState() || 'normal'),
                      !S && (u || t) && ''.concat(g, '-node-selected'),
                    ),
                    onMouseEnter: e.onMouseEnter,
                    onMouseLeave: e.onMouseLeave,
                    onContextMenu: e.onContextMenu,
                    onClick: e.onSelectorClick,
                    onDoubleClick: e.onSelectorDoubleClick,
                  },
                  $,
                  R,
                  e.renderDropIndicator(),
                );
              }),
              (0, h.Z)((0, K.Z)(e), 'renderDropIndicator', function () {
                var t = e.props,
                  r = t.disabled,
                  o = t.eventKey,
                  s = e.props.context,
                  u = s.draggable,
                  v = s.dropLevelOffset,
                  y = s.dropPosition,
                  m = s.prefixCls,
                  b = s.indent,
                  g = s.dropIndicatorRender,
                  E = s.dragOverNodeKey,
                  C = s.direction,
                  N = !!u,
                  k = !r && N && E === o,
                  S = b != null ? b : e.cacheIndent;
                return (
                  (e.cacheIndent = b),
                  k
                    ? g({
                        dropPosition: y,
                        dropLevelOffset: v,
                        indent: S,
                        prefixCls: m,
                        direction: C,
                      })
                    : null
                );
              }),
              e
            );
          }
          return (
            (0, ae.Z)(i, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.syncLoadData(this.props);
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  this.syncLoadData(this.props);
                },
              },
              {
                key: 'isSelectable',
                value: function () {
                  var d = this.props.selectable,
                    l = this.props.context.selectable;
                  return typeof d == 'boolean' ? d : l;
                },
              },
              {
                key: 'render',
                value: function () {
                  var d,
                    l = this.props,
                    p = l.eventKey,
                    t = l.className,
                    r = l.style,
                    o = l.dragOver,
                    s = l.dragOverGapTop,
                    u = l.dragOverGapBottom,
                    v = l.isLeaf,
                    y = l.isStart,
                    m = l.isEnd,
                    b = l.expanded,
                    g = l.selected,
                    E = l.checked,
                    C = l.halfChecked,
                    N = l.loading,
                    k = l.domRef,
                    S = l.active,
                    O = l.data,
                    $ = l.onMouseMove,
                    L = l.selectable,
                    j = (0, G.Z)(l, tt),
                    R = this.props.context,
                    A = R.prefixCls,
                    I = R.filterTreeNode,
                    X = R.keyEntities,
                    Q = R.dropContainerKey,
                    q = R.dropTargetKey,
                    ie = R.draggingNodeKey,
                    _ = this.isDisabled(),
                    ye = (0, D.Z)(j, { aria: !0, data: !0 }),
                    Ae = W(X, p) || {},
                    Be = Ae.level,
                    _e = m[m.length - 1],
                    fe = this.isDraggable(),
                    De = !_ && fe,
                    me = ie === p,
                    Re = L !== void 0 ? { 'aria-selected': !!L } : void 0;
                  return c.createElement(
                    'div',
                    (0, ne.Z)(
                      {
                        ref: k,
                        className: re()(
                          t,
                          ''.concat(A, '-treenode'),
                          ((d = {}),
                          (0, h.Z)(
                            (0, h.Z)(
                              (0, h.Z)(
                                (0, h.Z)(
                                  (0, h.Z)(
                                    (0, h.Z)(
                                      (0, h.Z)(
                                        (0, h.Z)(
                                          (0, h.Z)(
                                            (0, h.Z)(d, ''.concat(A, '-treenode-disabled'), _),
                                            ''
                                              .concat(A, '-treenode-switcher-')
                                              .concat(b ? 'open' : 'close'),
                                            !v,
                                          ),
                                          ''.concat(A, '-treenode-checkbox-checked'),
                                          E,
                                        ),
                                        ''.concat(A, '-treenode-checkbox-indeterminate'),
                                        C,
                                      ),
                                      ''.concat(A, '-treenode-selected'),
                                      g,
                                    ),
                                    ''.concat(A, '-treenode-loading'),
                                    N,
                                  ),
                                  ''.concat(A, '-treenode-active'),
                                  S,
                                ),
                                ''.concat(A, '-treenode-leaf-last'),
                                _e,
                              ),
                              ''.concat(A, '-treenode-draggable'),
                              fe,
                            ),
                            'dragging',
                            me,
                          ),
                          (0, h.Z)(
                            (0, h.Z)(
                              (0, h.Z)(
                                (0, h.Z)(
                                  (0, h.Z)(
                                    (0, h.Z)(d, 'drop-target', q === p),
                                    'drop-container',
                                    Q === p,
                                  ),
                                  'drag-over',
                                  !_ && o,
                                ),
                                'drag-over-gap-top',
                                !_ && s,
                              ),
                              'drag-over-gap-bottom',
                              !_ && u,
                            ),
                            'filter-node',
                            I && I(V(this.props)),
                          )),
                        ),
                        style: r,
                        draggable: De,
                        'aria-grabbed': me,
                        onDragStart: De ? this.onDragStart : void 0,
                        onDragEnter: fe ? this.onDragEnter : void 0,
                        onDragOver: fe ? this.onDragOver : void 0,
                        onDragLeave: fe ? this.onDragLeave : void 0,
                        onDrop: fe ? this.onDrop : void 0,
                        onDragEnd: fe ? this.onDragEnd : void 0,
                        onMouseMove: $,
                      },
                      Re,
                      ye,
                    ),
                    c.createElement(ee, { prefixCls: A, level: Be, isStart: y, isEnd: m }),
                    this.renderDragHandler(),
                    this.renderSwitcher(),
                    this.renderCheckbox(),
                    this.renderSelector(),
                  );
                },
              },
            ]),
            i
          );
        })(c.Component),
        Ke = function (a) {
          return c.createElement(x.Consumer, null, function (i) {
            return c.createElement(he, (0, ne.Z)({}, a, { context: i }));
          });
        };
      (Ke.displayName = 'TreeNode'), (Ke.isTreeNode = 1);
      var Le = Ke;
      function Rt(n, a) {
        var i = c.useState(!1),
          e = (0, w.Z)(i, 2),
          d = e[0],
          l = e[1];
        (0, U.Z)(
          function () {
            if (d)
              return (
                n(),
                function () {
                  a();
                }
              );
          },
          [d],
        ),
          (0, U.Z)(function () {
            return (
              l(!0),
              function () {
                l(!1);
              }
            );
          }, []);
      }
      var It = [
          'className',
          'style',
          'motion',
          'motionNodes',
          'motionType',
          'onMotionStart',
          'onMotionEnd',
          'active',
          'treeNodeRequiredProps',
        ],
        vt = function (a, i) {
          var e = a.className,
            d = a.style,
            l = a.motion,
            p = a.motionNodes,
            t = a.motionType,
            r = a.onMotionStart,
            o = a.onMotionEnd,
            s = a.active,
            u = a.treeNodeRequiredProps,
            v = (0, G.Z)(a, It),
            y = c.useState(!0),
            m = (0, w.Z)(y, 2),
            b = m[0],
            g = m[1],
            E = c.useContext(x),
            C = E.prefixCls,
            N = p && t !== 'hide';
          (0, U.Z)(
            function () {
              p && N !== b && g(N);
            },
            [p],
          );
          var k = function () {
              p && r();
            },
            S = c.useRef(!1),
            O = function () {
              p && !S.current && ((S.current = !0), o());
            };
          Rt(k, O);
          var $ = function (j) {
            N === j && O();
          };
          return p
            ? c.createElement(
                F.ZP,
                (0, ne.Z)({ ref: i, visible: b }, l, {
                  motionAppear: t === 'show',
                  onVisibleChanged: $,
                }),
                function (L, j) {
                  var R = L.className,
                    A = L.style;
                  return c.createElement(
                    'div',
                    { ref: j, className: re()(''.concat(C, '-treenode-motion'), R), style: A },
                    p.map(function (I) {
                      var X = Object.assign({}, (P(I.data), I.data)),
                        Q = I.title,
                        q = I.key,
                        ie = I.isStart,
                        _ = I.isEnd;
                      delete X.children;
                      var ye = ge(q, u);
                      return c.createElement(
                        Le,
                        (0, ne.Z)({}, X, ye, {
                          title: Q,
                          active: s,
                          data: I.data,
                          key: q,
                          isStart: ie,
                          isEnd: _,
                        }),
                      );
                    }),
                  );
                },
              )
            : c.createElement(
                Le,
                (0, ne.Z)({ domRef: i, className: e, style: d }, v, { active: s }),
              );
        };
      vt.displayName = 'MotionTreeNode';
      var Mt = c.forwardRef(vt),
        $t = Mt;
      function jt() {
        var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
          a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
          i = n.length,
          e = a.length;
        if (Math.abs(i - e) !== 1) return { add: !1, key: null };
        function d(l, p) {
          var t = new Map();
          l.forEach(function (o) {
            t.set(o, !0);
          });
          var r = p.filter(function (o) {
            return !t.has(o);
          });
          return r.length === 1 ? r[0] : null;
        }
        return i < e ? { add: !0, key: d(n, a) } : { add: !1, key: d(a, n) };
      }
      function gt(n, a, i) {
        var e = n.findIndex(function (t) {
            return t.key === i;
          }),
          d = n[e + 1],
          l = a.findIndex(function (t) {
            return t.key === i;
          });
        if (d) {
          var p = a.findIndex(function (t) {
            return t.key === d.key;
          });
          return a.slice(l + 1, p);
        }
        return a.slice(l + 1);
      }
      var Ht = [
          'prefixCls',
          'data',
          'selectable',
          'checkable',
          'expandedKeys',
          'selectedKeys',
          'checkedKeys',
          'loadedKeys',
          'loadingKeys',
          'halfCheckedKeys',
          'keyEntities',
          'disabled',
          'dragging',
          'dragOverNodeKey',
          'dropPosition',
          'motion',
          'height',
          'itemHeight',
          'virtual',
          'focusable',
          'activeItem',
          'focused',
          'tabIndex',
          'onKeyDown',
          'onFocus',
          'onBlur',
          'onActiveChange',
          'onListChangeStart',
          'onListChangeEnd',
        ],
        ht = {
          width: 0,
          height: 0,
          display: 'flex',
          overflow: 'hidden',
          opacity: 0,
          border: 0,
          padding: 0,
          margin: 0,
        },
        Ft = function () {},
        Ze = 'RC_TREE_MOTION_'.concat(Math.random()),
        nt = { key: Ze },
        yt = { key: Ze, level: 0, index: 0, pos: '0', node: nt, nodes: [nt] },
        mt = {
          parent: null,
          children: [],
          pos: yt.pos,
          data: nt,
          title: null,
          key: Ze,
          isStart: [],
          isEnd: [],
        };
      function Kt(n, a, i, e) {
        return a === !1 || !i ? n : n.slice(0, Math.ceil(i / e) + 1);
      }
      function bt(n) {
        var a = n.key,
          i = n.pos;
        return Ne(a, i);
      }
      function Wt(n) {
        for (var a = String(n.data.key), i = n; i.parent; )
          (i = i.parent), (a = ''.concat(i.data.key, ' > ').concat(a));
        return a;
      }
      var Et = c.forwardRef(function (n, a) {
        var i = n.prefixCls,
          e = n.data,
          d = n.selectable,
          l = n.checkable,
          p = n.expandedKeys,
          t = n.selectedKeys,
          r = n.checkedKeys,
          o = n.loadedKeys,
          s = n.loadingKeys,
          u = n.halfCheckedKeys,
          v = n.keyEntities,
          y = n.disabled,
          m = n.dragging,
          b = n.dragOverNodeKey,
          g = n.dropPosition,
          E = n.motion,
          C = n.height,
          N = n.itemHeight,
          k = n.virtual,
          S = n.focusable,
          O = n.activeItem,
          $ = n.focused,
          L = n.tabIndex,
          j = n.onKeyDown,
          R = n.onFocus,
          A = n.onBlur,
          I = n.onActiveChange,
          X = n.onListChangeStart,
          Q = n.onListChangeEnd,
          q = (0, G.Z)(n, Ht),
          ie = c.useRef(null),
          _ = c.useRef(null);
        c.useImperativeHandle(a, function () {
          return {
            scrollTo: function (xe) {
              ie.current.scrollTo(xe);
            },
            getIndentWidth: function () {
              return _.current.offsetWidth;
            },
          };
        });
        var ye = c.useState(p),
          Ae = (0, w.Z)(ye, 2),
          Be = Ae[0],
          _e = Ae[1],
          fe = c.useState(e),
          De = (0, w.Z)(fe, 2),
          me = De[0],
          Re = De[1],
          lt = c.useState(e),
          Qe = (0, w.Z)(lt, 2),
          ct = Qe[0],
          Ie = Qe[1],
          Me = c.useState([]),
          Pt = (0, w.Z)(Me, 2),
          yn = Pt[0],
          ut = Pt[1],
          mn = c.useState(null),
          wt = (0, w.Z)(mn, 2),
          Kn = wt[0],
          ft = wt[1],
          Lt = c.useRef(e);
        Lt.current = e;
        function pt() {
          var Y = Lt.current;
          Re(Y), Ie(Y), ut([]), ft(null), Q();
        }
        (0, U.Z)(
          function () {
            _e(p);
            var Y = jt(Be, p);
            if (Y.key !== null)
              if (Y.add) {
                var xe = me.findIndex(function (Ge) {
                    var Ve = Ge.key;
                    return Ve === Y.key;
                  }),
                  Oe = Kt(gt(me, e, Y.key), k, C, N),
                  $e = me.slice();
                $e.splice(xe + 1, 0, mt), Ie($e), ut(Oe), ft('show');
              } else {
                var Te = e.findIndex(function (Ge) {
                    var Ve = Ge.key;
                    return Ve === Y.key;
                  }),
                  Pe = Kt(gt(e, me, Y.key), k, C, N),
                  qe = e.slice();
                qe.splice(Te + 1, 0, mt), Ie(qe), ut(Pe), ft('hide');
              }
            else me !== e && (Re(e), Ie(e));
          },
          [p, e],
        ),
          c.useEffect(
            function () {
              m || pt();
            },
            [m],
          );
        var bn = E ? ct : e,
          At = {
            expandedKeys: p,
            selectedKeys: t,
            loadedKeys: o,
            loadingKeys: s,
            checkedKeys: r,
            halfCheckedKeys: u,
            dragOverNodeKey: b,
            dropPosition: g,
            keyEntities: v,
          };
        return c.createElement(
          c.Fragment,
          null,
          $ && O && c.createElement('span', { style: ht, 'aria-live': 'assertive' }, Wt(O)),
          c.createElement(
            'div',
            null,
            c.createElement('input', {
              style: ht,
              disabled: S === !1 || y,
              tabIndex: S !== !1 ? L : null,
              onKeyDown: j,
              onFocus: R,
              onBlur: A,
              value: '',
              onChange: Ft,
              'aria-label': 'for screen reader',
            }),
          ),
          c.createElement(
            'div',
            {
              className: ''.concat(i, '-treenode'),
              'aria-hidden': !0,
              style: {
                position: 'absolute',
                pointerEvents: 'none',
                visibility: 'hidden',
                height: 0,
                overflow: 'hidden',
                border: 0,
                padding: 0,
              },
            },
            c.createElement(
              'div',
              { className: ''.concat(i, '-indent') },
              c.createElement('div', { ref: _, className: ''.concat(i, '-indent-unit') }),
            ),
          ),
          c.createElement(
            Z.Z,
            (0, ne.Z)({}, q, {
              data: bn,
              itemKey: bt,
              height: C,
              fullHeight: !1,
              virtual: k,
              itemHeight: N,
              prefixCls: ''.concat(i, '-list'),
              ref: ie,
              onVisibleChange: function (xe, Oe) {
                var $e = new Set(xe),
                  Te = Oe.filter(function (Pe) {
                    return !$e.has(Pe);
                  });
                Te.some(function (Pe) {
                  return bt(Pe) === Ze;
                }) && pt();
              },
            }),
            function (Y) {
              var xe = Y.pos,
                Oe = Object.assign({}, (P(Y.data), Y.data)),
                $e = Y.title,
                Te = Y.key,
                Pe = Y.isStart,
                qe = Y.isEnd,
                Ge = Ne(Te, xe);
              delete Oe.key, delete Oe.children;
              var Ve = ge(Ge, At);
              return c.createElement(
                $t,
                (0, ne.Z)({}, Oe, Ve, {
                  title: $e,
                  active: !!O && Te === O.key,
                  pos: xe,
                  data: Y.data,
                  isStart: Pe,
                  isEnd: qe,
                  motion: E,
                  motionNodes: Te === Ze ? yn : null,
                  motionType: Kn,
                  onMotionStart: X,
                  onMotionEnd: pt,
                  treeNodeRequiredProps: At,
                  onMouseMove: function () {
                    I(null);
                  },
                }),
              );
            },
          ),
        );
      });
      Et.displayName = 'NodeList';
      var Ut = Et,
        Bt = null;
      function be(n, a) {
        if (!n) return [];
        var i = n.slice(),
          e = i.indexOf(a);
        return e >= 0 && i.splice(e, 1), i;
      }
      function ke(n, a) {
        var i = (n || []).slice();
        return i.indexOf(a) === -1 && i.push(a), i;
      }
      function rt(n) {
        return n.split('-');
      }
      function _t(n, a) {
        var i = [],
          e = W(a, n);
        function d() {
          var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
          l.forEach(function (p) {
            var t = p.key,
              r = p.children;
            i.push(t), d(r);
          });
        }
        return d(e.children), i;
      }
      function Gt(n) {
        if (n.parent) {
          var a = rt(n.pos);
          return Number(a[a.length - 1]) === n.parent.children.length - 1;
        }
        return !1;
      }
      function Vt(n) {
        var a = rt(n.pos);
        return Number(a[a.length - 1]) === 0;
      }
      function Nt(n, a, i, e, d, l, p, t, r, o) {
        var s,
          u = n.clientX,
          v = n.clientY,
          y = n.target.getBoundingClientRect(),
          m = y.top,
          b = y.height,
          g = (o === 'rtl' ? -1 : 1) * (((d == null ? void 0 : d.x) || 0) - u),
          E = (g - 12) / e,
          C = r.filter(function (ie) {
            var _;
            return (_ = t[ie]) === null || _ === void 0 || (_ = _.children) === null || _ === void 0
              ? void 0
              : _.length;
          }),
          N = W(t, i.props.eventKey);
        if (v < m + b / 2) {
          var k = p.findIndex(function (ie) {
              return ie.key === N.key;
            }),
            S = k <= 0 ? 0 : k - 1,
            O = p[S].key;
          N = W(t, O);
        }
        var $ = N.key,
          L = N,
          j = N.key,
          R = 0,
          A = 0;
        if (!C.includes($)) for (var I = 0; I < E && Gt(N); I += 1) (N = N.parent), (A += 1);
        var X = a.props.data,
          Q = N.node,
          q = !0;
        return (
          Vt(N) &&
          N.level === 0 &&
          v < m + b / 2 &&
          l({ dragNode: X, dropNode: Q, dropPosition: -1 }) &&
          N.key === i.props.eventKey
            ? (R = -1)
            : (L.children || []).length && C.includes(j)
              ? l({ dragNode: X, dropNode: Q, dropPosition: 0 })
                ? (R = 0)
                : (q = !1)
              : A === 0
                ? E > -1.5
                  ? l({ dragNode: X, dropNode: Q, dropPosition: 1 })
                    ? (R = 1)
                    : (q = !1)
                  : l({ dragNode: X, dropNode: Q, dropPosition: 0 })
                    ? (R = 0)
                    : l({ dragNode: X, dropNode: Q, dropPosition: 1 })
                      ? (R = 1)
                      : (q = !1)
                : l({ dragNode: X, dropNode: Q, dropPosition: 1 })
                  ? (R = 1)
                  : (q = !1),
          {
            dropPosition: R,
            dropLevelOffset: A,
            dropTargetKey: N.key,
            dropTargetPos: N.pos,
            dragOverNodeKey: j,
            dropContainerKey:
              R === 0 ? null : ((s = N.parent) === null || s === void 0 ? void 0 : s.key) || null,
            dropAllowed: q,
          }
        );
      }
      function kt(n, a) {
        if (n) {
          var i = a.multiple;
          return i ? n.slice() : n.length ? [n[0]] : n;
        }
      }
      var zt = function (a) {
        return a;
      };
      function Xt(n, a) {
        if (!n) return [];
        var i = a || {},
          e = i.processProps,
          d = e === void 0 ? zt : e,
          l = Array.isArray(n) ? n : [n];
        return l.map(function (p) {
          var t = p.children,
            r = _objectWithoutProperties(p, Bt),
            o = Xt(t, a);
          return React.createElement(TreeNode, _extends({ key: r.key }, d(r)), o);
        });
      }
      function at(n) {
        if (!n) return null;
        var a;
        if (Array.isArray(n)) a = { checkedKeys: n, halfCheckedKeys: void 0 };
        else if ((0, de.Z)(n) === 'object')
          a = { checkedKeys: n.checked || void 0, halfCheckedKeys: n.halfChecked || void 0 };
        else return (0, f.ZP)(!1, '`checkedKeys` is not an array or an object'), null;
        return a;
      }
      function xt(n, a) {
        var i = new Set();
        function e(d) {
          if (!i.has(d)) {
            var l = W(a, d);
            if (l) {
              i.add(d);
              var p = l.parent,
                t = l.node;
              t.disabled || (p && e(p.key));
            }
          }
        }
        return (
          (n || []).forEach(function (d) {
            e(d);
          }),
          (0, te.Z)(i)
        );
      }
      function Ct(n, a) {
        var i = new Set();
        return (
          n.forEach(function (e) {
            a.has(e) || i.add(e);
          }),
          i
        );
      }
      function Yt(n) {
        var a = n || {},
          i = a.disabled,
          e = a.disableCheckbox,
          d = a.checkable;
        return !!(i || e) || d === !1;
      }
      function Jt(n, a, i, e) {
        for (var d = new Set(n), l = new Set(), p = 0; p <= i; p += 1) {
          var t = a.get(p) || new Set();
          t.forEach(function (u) {
            var v = u.key,
              y = u.node,
              m = u.children,
              b = m === void 0 ? [] : m;
            d.has(v) &&
              !e(y) &&
              b
                .filter(function (g) {
                  return !e(g.node);
                })
                .forEach(function (g) {
                  d.add(g.key);
                });
          });
        }
        for (var r = new Set(), o = i; o >= 0; o -= 1) {
          var s = a.get(o) || new Set();
          s.forEach(function (u) {
            var v = u.parent,
              y = u.node;
            if (!(e(y) || !u.parent || r.has(u.parent.key))) {
              if (e(u.parent.node)) {
                r.add(v.key);
                return;
              }
              var m = !0,
                b = !1;
              (v.children || [])
                .filter(function (g) {
                  return !e(g.node);
                })
                .forEach(function (g) {
                  var E = g.key,
                    C = d.has(E);
                  m && !C && (m = !1), !b && (C || l.has(E)) && (b = !0);
                }),
                m && d.add(v.key),
                b && l.add(v.key),
                r.add(v.key);
            }
          });
        }
        return { checkedKeys: Array.from(d), halfCheckedKeys: Array.from(Ct(l, d)) };
      }
      function Qt(n, a, i, e, d) {
        for (var l = new Set(n), p = new Set(a), t = 0; t <= e; t += 1) {
          var r = i.get(t) || new Set();
          r.forEach(function (v) {
            var y = v.key,
              m = v.node,
              b = v.children,
              g = b === void 0 ? [] : b;
            !l.has(y) &&
              !p.has(y) &&
              !d(m) &&
              g
                .filter(function (E) {
                  return !d(E.node);
                })
                .forEach(function (E) {
                  l.delete(E.key);
                });
          });
        }
        p = new Set();
        for (var o = new Set(), s = e; s >= 0; s -= 1) {
          var u = i.get(s) || new Set();
          u.forEach(function (v) {
            var y = v.parent,
              m = v.node;
            if (!(d(m) || !v.parent || o.has(v.parent.key))) {
              if (d(v.parent.node)) {
                o.add(y.key);
                return;
              }
              var b = !0,
                g = !1;
              (y.children || [])
                .filter(function (E) {
                  return !d(E.node);
                })
                .forEach(function (E) {
                  var C = E.key,
                    N = l.has(C);
                  b && !N && (b = !1), !g && (N || p.has(C)) && (g = !0);
                }),
                b || l.delete(y.key),
                g && p.add(y.key),
                o.add(y.key);
            }
          });
        }
        return { checkedKeys: Array.from(l), halfCheckedKeys: Array.from(Ct(p, l)) };
      }
      function ot(n, a, i, e) {
        var d = [],
          l;
        e ? (l = e) : (l = Yt);
        var p = new Set(
            n.filter(function (s) {
              var u = !!W(i, s);
              return u || d.push(s), u;
            }),
          ),
          t = new Map(),
          r = 0;
        Object.keys(i).forEach(function (s) {
          var u = i[s],
            v = u.level,
            y = t.get(v);
          y || ((y = new Set()), t.set(v, y)), y.add(u), (r = Math.max(r, v));
        }),
          (0, f.ZP)(
            !d.length,
            'Tree missing follow keys: '.concat(
              d
                .slice(0, 100)
                .map(function (s) {
                  return "'".concat(s, "'");
                })
                .join(', '),
            ),
          );
        var o;
        return a === !0 ? (o = Jt(p, t, r, l)) : (o = Qt(p, a.halfCheckedKeys, t, r, l)), o;
      }
      var qt = 10,
        St = (function (n) {
          (0, le.Z)(i, n);
          var a = (0, Ee.Z)(i);
          function i() {
            var e;
            (0, se.Z)(this, i);
            for (var d = arguments.length, l = new Array(d), p = 0; p < d; p++) l[p] = arguments[p];
            return (
              (e = a.call.apply(a, [this].concat(l))),
              (0, h.Z)((0, K.Z)(e), 'destroyed', !1),
              (0, h.Z)((0, K.Z)(e), 'delayedDragEnterLogic', void 0),
              (0, h.Z)((0, K.Z)(e), 'loadingRetryTimes', {}),
              (0, h.Z)((0, K.Z)(e), 'state', {
                keyEntities: {},
                indent: null,
                selectedKeys: [],
                checkedKeys: [],
                halfCheckedKeys: [],
                loadedKeys: [],
                loadingKeys: [],
                expandedKeys: [],
                draggingNodeKey: null,
                dragChildrenKeys: [],
                dropTargetKey: null,
                dropPosition: null,
                dropContainerKey: null,
                dropLevelOffset: null,
                dropTargetPos: null,
                dropAllowed: !0,
                dragOverNodeKey: null,
                treeData: [],
                flattenNodes: [],
                focused: !1,
                activeKey: null,
                listChanging: !1,
                prevProps: null,
                fieldNames: ve(),
              }),
              (0, h.Z)((0, K.Z)(e), 'dragStartMousePosition', null),
              (0, h.Z)((0, K.Z)(e), 'dragNode', void 0),
              (0, h.Z)((0, K.Z)(e), 'currentMouseOverDroppableNodeKey', null),
              (0, h.Z)((0, K.Z)(e), 'listRef', c.createRef()),
              (0, h.Z)((0, K.Z)(e), 'onNodeDragStart', function (t, r) {
                var o = e.state,
                  s = o.expandedKeys,
                  u = o.keyEntities,
                  v = e.props.onDragStart,
                  y = r.props.eventKey;
                (e.dragNode = r), (e.dragStartMousePosition = { x: t.clientX, y: t.clientY });
                var m = be(s, y);
                e.setState({
                  draggingNodeKey: y,
                  dragChildrenKeys: _t(y, u),
                  indent: e.listRef.current.getIndentWidth(),
                }),
                  e.setExpandedKeys(m),
                  window.addEventListener('dragend', e.onWindowDragEnd),
                  v == null || v({ event: t, node: V(r.props) });
              }),
              (0, h.Z)((0, K.Z)(e), 'onNodeDragEnter', function (t, r) {
                var o = e.state,
                  s = o.expandedKeys,
                  u = o.keyEntities,
                  v = o.dragChildrenKeys,
                  y = o.flattenNodes,
                  m = o.indent,
                  b = e.props,
                  g = b.onDragEnter,
                  E = b.onExpand,
                  C = b.allowDrop,
                  N = b.direction,
                  k = r.props,
                  S = k.pos,
                  O = k.eventKey,
                  $ = (0, K.Z)(e),
                  L = $.dragNode;
                if (
                  (e.currentMouseOverDroppableNodeKey !== O &&
                    (e.currentMouseOverDroppableNodeKey = O),
                  !L)
                ) {
                  e.resetDragState();
                  return;
                }
                var j = Nt(t, L, r, m, e.dragStartMousePosition, C, y, u, s, N),
                  R = j.dropPosition,
                  A = j.dropLevelOffset,
                  I = j.dropTargetKey,
                  X = j.dropContainerKey,
                  Q = j.dropTargetPos,
                  q = j.dropAllowed,
                  ie = j.dragOverNodeKey;
                if (v.indexOf(I) !== -1 || !q) {
                  e.resetDragState();
                  return;
                }
                if (
                  (e.delayedDragEnterLogic || (e.delayedDragEnterLogic = {}),
                  Object.keys(e.delayedDragEnterLogic).forEach(function (_) {
                    clearTimeout(e.delayedDragEnterLogic[_]);
                  }),
                  L.props.eventKey !== r.props.eventKey &&
                    (t.persist(),
                    (e.delayedDragEnterLogic[S] = window.setTimeout(function () {
                      if (e.state.draggingNodeKey !== null) {
                        var _ = (0, te.Z)(s),
                          ye = W(u, r.props.eventKey);
                        ye && (ye.children || []).length && (_ = ke(s, r.props.eventKey)),
                          'expandedKeys' in e.props || e.setExpandedKeys(_),
                          E == null ||
                            E(_, { node: V(r.props), expanded: !0, nativeEvent: t.nativeEvent });
                      }
                    }, 800))),
                  L.props.eventKey === I && A === 0)
                ) {
                  e.resetDragState();
                  return;
                }
                e.setState({
                  dragOverNodeKey: ie,
                  dropPosition: R,
                  dropLevelOffset: A,
                  dropTargetKey: I,
                  dropContainerKey: X,
                  dropTargetPos: Q,
                  dropAllowed: q,
                }),
                  g == null || g({ event: t, node: V(r.props), expandedKeys: s });
              }),
              (0, h.Z)((0, K.Z)(e), 'onNodeDragOver', function (t, r) {
                var o = e.state,
                  s = o.dragChildrenKeys,
                  u = o.flattenNodes,
                  v = o.keyEntities,
                  y = o.expandedKeys,
                  m = o.indent,
                  b = e.props,
                  g = b.onDragOver,
                  E = b.allowDrop,
                  C = b.direction,
                  N = (0, K.Z)(e),
                  k = N.dragNode;
                if (k) {
                  var S = Nt(t, k, r, m, e.dragStartMousePosition, E, u, v, y, C),
                    O = S.dropPosition,
                    $ = S.dropLevelOffset,
                    L = S.dropTargetKey,
                    j = S.dropContainerKey,
                    R = S.dropAllowed,
                    A = S.dropTargetPos,
                    I = S.dragOverNodeKey;
                  s.indexOf(L) !== -1 ||
                    !R ||
                    (k.props.eventKey === L && $ === 0
                      ? (e.state.dropPosition === null &&
                          e.state.dropLevelOffset === null &&
                          e.state.dropTargetKey === null &&
                          e.state.dropContainerKey === null &&
                          e.state.dropTargetPos === null &&
                          e.state.dropAllowed === !1 &&
                          e.state.dragOverNodeKey === null) ||
                        e.resetDragState()
                      : (O === e.state.dropPosition &&
                          $ === e.state.dropLevelOffset &&
                          L === e.state.dropTargetKey &&
                          j === e.state.dropContainerKey &&
                          A === e.state.dropTargetPos &&
                          R === e.state.dropAllowed &&
                          I === e.state.dragOverNodeKey) ||
                        e.setState({
                          dropPosition: O,
                          dropLevelOffset: $,
                          dropTargetKey: L,
                          dropContainerKey: j,
                          dropTargetPos: A,
                          dropAllowed: R,
                          dragOverNodeKey: I,
                        }),
                    g == null || g({ event: t, node: V(r.props) }));
                }
              }),
              (0, h.Z)((0, K.Z)(e), 'onNodeDragLeave', function (t, r) {
                e.currentMouseOverDroppableNodeKey === r.props.eventKey &&
                  !t.currentTarget.contains(t.relatedTarget) &&
                  (e.resetDragState(), (e.currentMouseOverDroppableNodeKey = null));
                var o = e.props.onDragLeave;
                o == null || o({ event: t, node: V(r.props) });
              }),
              (0, h.Z)((0, K.Z)(e), 'onWindowDragEnd', function (t) {
                e.onNodeDragEnd(t, null, !0),
                  window.removeEventListener('dragend', e.onWindowDragEnd);
              }),
              (0, h.Z)((0, K.Z)(e), 'onNodeDragEnd', function (t, r) {
                var o = e.props.onDragEnd;
                e.setState({ dragOverNodeKey: null }),
                  e.cleanDragState(),
                  o == null || o({ event: t, node: V(r.props) }),
                  (e.dragNode = null),
                  window.removeEventListener('dragend', e.onWindowDragEnd);
              }),
              (0, h.Z)((0, K.Z)(e), 'onNodeDrop', function (t, r) {
                var o,
                  s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
                  u = e.state,
                  v = u.dragChildrenKeys,
                  y = u.dropPosition,
                  m = u.dropTargetKey,
                  b = u.dropTargetPos,
                  g = u.dropAllowed;
                if (g) {
                  var E = e.props.onDrop;
                  if ((e.setState({ dragOverNodeKey: null }), e.cleanDragState(), m !== null)) {
                    var C = (0, H.Z)(
                        (0, H.Z)({}, ge(m, e.getTreeNodeRequiredProps())),
                        {},
                        {
                          active:
                            ((o = e.getActiveItem()) === null || o === void 0 ? void 0 : o.key) ===
                            m,
                          data: W(e.state.keyEntities, m).node,
                        },
                      ),
                      N = v.indexOf(m) !== -1;
                    (0, f.ZP)(
                      !N,
                      "Can not drop to dragNode's children node. This is a bug of rc-tree. Please report an issue.",
                    );
                    var k = rt(b),
                      S = {
                        event: t,
                        node: V(C),
                        dragNode: e.dragNode ? V(e.dragNode.props) : null,
                        dragNodesKeys: [e.dragNode.props.eventKey].concat(v),
                        dropToGap: y !== 0,
                        dropPosition: y + Number(k[k.length - 1]),
                      };
                    s || E == null || E(S), (e.dragNode = null);
                  }
                }
              }),
              (0, h.Z)((0, K.Z)(e), 'cleanDragState', function () {
                var t = e.state.draggingNodeKey;
                t !== null &&
                  e.setState({
                    draggingNodeKey: null,
                    dropPosition: null,
                    dropContainerKey: null,
                    dropTargetKey: null,
                    dropLevelOffset: null,
                    dropAllowed: !0,
                    dragOverNodeKey: null,
                  }),
                  (e.dragStartMousePosition = null),
                  (e.currentMouseOverDroppableNodeKey = null);
              }),
              (0, h.Z)((0, K.Z)(e), 'triggerExpandActionExpand', function (t, r) {
                var o = e.state,
                  s = o.expandedKeys,
                  u = o.flattenNodes,
                  v = r.expanded,
                  y = r.key,
                  m = r.isLeaf;
                if (!(m || t.shiftKey || t.metaKey || t.ctrlKey)) {
                  var b = u.filter(function (E) {
                      return E.key === y;
                    })[0],
                    g = V(
                      (0, H.Z)(
                        (0, H.Z)({}, ge(y, e.getTreeNodeRequiredProps())),
                        {},
                        { data: b.data },
                      ),
                    );
                  e.setExpandedKeys(v ? be(s, y) : ke(s, y)), e.onNodeExpand(t, g);
                }
              }),
              (0, h.Z)((0, K.Z)(e), 'onNodeClick', function (t, r) {
                var o = e.props,
                  s = o.onClick,
                  u = o.expandAction;
                u === 'click' && e.triggerExpandActionExpand(t, r), s == null || s(t, r);
              }),
              (0, h.Z)((0, K.Z)(e), 'onNodeDoubleClick', function (t, r) {
                var o = e.props,
                  s = o.onDoubleClick,
                  u = o.expandAction;
                u === 'doubleClick' && e.triggerExpandActionExpand(t, r), s == null || s(t, r);
              }),
              (0, h.Z)((0, K.Z)(e), 'onNodeSelect', function (t, r) {
                var o = e.state.selectedKeys,
                  s = e.state,
                  u = s.keyEntities,
                  v = s.fieldNames,
                  y = e.props,
                  m = y.onSelect,
                  b = y.multiple,
                  g = r.selected,
                  E = r[v.key],
                  C = !g;
                C ? (b ? (o = ke(o, E)) : (o = [E])) : (o = be(o, E));
                var N = o
                  .map(function (k) {
                    var S = W(u, k);
                    return S ? S.node : null;
                  })
                  .filter(function (k) {
                    return k;
                  });
                e.setUncontrolledState({ selectedKeys: o }),
                  m == null ||
                    m(o, {
                      event: 'select',
                      selected: C,
                      node: r,
                      selectedNodes: N,
                      nativeEvent: t.nativeEvent,
                    });
              }),
              (0, h.Z)((0, K.Z)(e), 'onNodeCheck', function (t, r, o) {
                var s = e.state,
                  u = s.keyEntities,
                  v = s.checkedKeys,
                  y = s.halfCheckedKeys,
                  m = e.props,
                  b = m.checkStrictly,
                  g = m.onCheck,
                  E = r.key,
                  C,
                  N = { event: 'check', node: r, checked: o, nativeEvent: t.nativeEvent };
                if (b) {
                  var k = o ? ke(v, E) : be(v, E),
                    S = be(y, E);
                  (C = { checked: k, halfChecked: S }),
                    (N.checkedNodes = k
                      .map(function (A) {
                        return W(u, A);
                      })
                      .filter(function (A) {
                        return A;
                      })
                      .map(function (A) {
                        return A.node;
                      })),
                    e.setUncontrolledState({ checkedKeys: k });
                } else {
                  var O = ot([].concat((0, te.Z)(v), [E]), !0, u),
                    $ = O.checkedKeys,
                    L = O.halfCheckedKeys;
                  if (!o) {
                    var j = new Set($);
                    j.delete(E);
                    var R = ot(Array.from(j), { checked: !1, halfCheckedKeys: L }, u);
                    ($ = R.checkedKeys), (L = R.halfCheckedKeys);
                  }
                  (C = $),
                    (N.checkedNodes = []),
                    (N.checkedNodesPositions = []),
                    (N.halfCheckedKeys = L),
                    $.forEach(function (A) {
                      var I = W(u, A);
                      if (I) {
                        var X = I.node,
                          Q = I.pos;
                        N.checkedNodes.push(X), N.checkedNodesPositions.push({ node: X, pos: Q });
                      }
                    }),
                    e.setUncontrolledState({ checkedKeys: $ }, !1, { halfCheckedKeys: L });
                }
                g == null || g(C, N);
              }),
              (0, h.Z)((0, K.Z)(e), 'onNodeLoad', function (t) {
                var r = t.key,
                  o = new Promise(function (s, u) {
                    e.setState(function (v) {
                      var y = v.loadedKeys,
                        m = y === void 0 ? [] : y,
                        b = v.loadingKeys,
                        g = b === void 0 ? [] : b,
                        E = e.props,
                        C = E.loadData,
                        N = E.onLoad;
                      if (!C || m.indexOf(r) !== -1 || g.indexOf(r) !== -1) return null;
                      var k = C(t);
                      return (
                        k
                          .then(function () {
                            var S = e.state.loadedKeys,
                              O = ke(S, r);
                            N == null || N(O, { event: 'load', node: t }),
                              e.setUncontrolledState({ loadedKeys: O }),
                              e.setState(function ($) {
                                return { loadingKeys: be($.loadingKeys, r) };
                              }),
                              s();
                          })
                          .catch(function (S) {
                            if (
                              (e.setState(function ($) {
                                return { loadingKeys: be($.loadingKeys, r) };
                              }),
                              (e.loadingRetryTimes[r] = (e.loadingRetryTimes[r] || 0) + 1),
                              e.loadingRetryTimes[r] >= qt)
                            ) {
                              var O = e.state.loadedKeys;
                              (0, f.ZP)(
                                !1,
                                'Retry for `loadData` many times but still failed. No more retry.',
                              ),
                                e.setUncontrolledState({ loadedKeys: ke(O, r) }),
                                s();
                            }
                            u(S);
                          }),
                        { loadingKeys: ke(g, r) }
                      );
                    });
                  });
                return o.catch(function () {}), o;
              }),
              (0, h.Z)((0, K.Z)(e), 'onNodeMouseEnter', function (t, r) {
                var o = e.props.onMouseEnter;
                o == null || o({ event: t, node: r });
              }),
              (0, h.Z)((0, K.Z)(e), 'onNodeMouseLeave', function (t, r) {
                var o = e.props.onMouseLeave;
                o == null || o({ event: t, node: r });
              }),
              (0, h.Z)((0, K.Z)(e), 'onNodeContextMenu', function (t, r) {
                var o = e.props.onRightClick;
                o && (t.preventDefault(), o({ event: t, node: r }));
              }),
              (0, h.Z)((0, K.Z)(e), 'onFocus', function () {
                var t = e.props.onFocus;
                e.setState({ focused: !0 });
                for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++)
                  o[s] = arguments[s];
                t == null || t.apply(void 0, o);
              }),
              (0, h.Z)((0, K.Z)(e), 'onBlur', function () {
                var t = e.props.onBlur;
                e.setState({ focused: !1 }), e.onActiveChange(null);
                for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++)
                  o[s] = arguments[s];
                t == null || t.apply(void 0, o);
              }),
              (0, h.Z)((0, K.Z)(e), 'getTreeNodeRequiredProps', function () {
                var t = e.state,
                  r = t.expandedKeys,
                  o = t.selectedKeys,
                  s = t.loadedKeys,
                  u = t.loadingKeys,
                  v = t.checkedKeys,
                  y = t.halfCheckedKeys,
                  m = t.dragOverNodeKey,
                  b = t.dropPosition,
                  g = t.keyEntities;
                return {
                  expandedKeys: r || [],
                  selectedKeys: o || [],
                  loadedKeys: s || [],
                  loadingKeys: u || [],
                  checkedKeys: v || [],
                  halfCheckedKeys: y || [],
                  dragOverNodeKey: m,
                  dropPosition: b,
                  keyEntities: g,
                };
              }),
              (0, h.Z)((0, K.Z)(e), 'setExpandedKeys', function (t) {
                var r = e.state,
                  o = r.treeData,
                  s = r.fieldNames,
                  u = We(o, t, s);
                e.setUncontrolledState({ expandedKeys: t, flattenNodes: u }, !0);
              }),
              (0, h.Z)((0, K.Z)(e), 'onNodeExpand', function (t, r) {
                var o = e.state.expandedKeys,
                  s = e.state,
                  u = s.listChanging,
                  v = s.fieldNames,
                  y = e.props,
                  m = y.onExpand,
                  b = y.loadData,
                  g = r.expanded,
                  E = r[v.key];
                if (!u) {
                  var C = o.indexOf(E),
                    N = !g;
                  if (
                    ((0, f.ZP)(
                      (g && C !== -1) || (!g && C === -1),
                      'Expand state not sync with index check',
                    ),
                    N ? (o = ke(o, E)) : (o = be(o, E)),
                    e.setExpandedKeys(o),
                    m == null || m(o, { node: r, expanded: N, nativeEvent: t.nativeEvent }),
                    N && b)
                  ) {
                    var k = e.onNodeLoad(r);
                    k &&
                      k
                        .then(function () {
                          var S = We(e.state.treeData, o, v);
                          e.setUncontrolledState({ flattenNodes: S });
                        })
                        .catch(function () {
                          var S = e.state.expandedKeys,
                            O = be(S, E);
                          e.setExpandedKeys(O);
                        });
                  }
                }
              }),
              (0, h.Z)((0, K.Z)(e), 'onListChangeStart', function () {
                e.setUncontrolledState({ listChanging: !0 });
              }),
              (0, h.Z)((0, K.Z)(e), 'onListChangeEnd', function () {
                setTimeout(function () {
                  e.setUncontrolledState({ listChanging: !1 });
                });
              }),
              (0, h.Z)((0, K.Z)(e), 'onActiveChange', function (t) {
                var r = e.state.activeKey,
                  o = e.props,
                  s = o.onActiveChange,
                  u = o.itemScrollOffset,
                  v = u === void 0 ? 0 : u;
                r !== t &&
                  (e.setState({ activeKey: t }),
                  t !== null && e.scrollTo({ key: t, offset: v }),
                  s == null || s(t));
              }),
              (0, h.Z)((0, K.Z)(e), 'getActiveItem', function () {
                var t = e.state,
                  r = t.activeKey,
                  o = t.flattenNodes;
                return r === null
                  ? null
                  : o.find(function (s) {
                      var u = s.key;
                      return u === r;
                    }) || null;
              }),
              (0, h.Z)((0, K.Z)(e), 'offsetActiveKey', function (t) {
                var r = e.state,
                  o = r.flattenNodes,
                  s = r.activeKey,
                  u = o.findIndex(function (m) {
                    var b = m.key;
                    return b === s;
                  });
                u === -1 && t < 0 && (u = o.length), (u = (u + t + o.length) % o.length);
                var v = o[u];
                if (v) {
                  var y = v.key;
                  e.onActiveChange(y);
                } else e.onActiveChange(null);
              }),
              (0, h.Z)((0, K.Z)(e), 'onKeyDown', function (t) {
                var r = e.state,
                  o = r.activeKey,
                  s = r.expandedKeys,
                  u = r.checkedKeys,
                  v = r.fieldNames,
                  y = e.props,
                  m = y.onKeyDown,
                  b = y.checkable,
                  g = y.selectable;
                switch (t.which) {
                  case ue.Z.UP: {
                    e.offsetActiveKey(-1), t.preventDefault();
                    break;
                  }
                  case ue.Z.DOWN: {
                    e.offsetActiveKey(1), t.preventDefault();
                    break;
                  }
                }
                var E = e.getActiveItem();
                if (E && E.data) {
                  var C = e.getTreeNodeRequiredProps(),
                    N = E.data.isLeaf === !1 || !!(E.data[v.children] || []).length,
                    k = V((0, H.Z)((0, H.Z)({}, ge(o, C)), {}, { data: E.data, active: !0 }));
                  switch (t.which) {
                    case ue.Z.LEFT: {
                      N && s.includes(o)
                        ? e.onNodeExpand({}, k)
                        : E.parent && e.onActiveChange(E.parent.key),
                        t.preventDefault();
                      break;
                    }
                    case ue.Z.RIGHT: {
                      N && !s.includes(o)
                        ? e.onNodeExpand({}, k)
                        : E.children && E.children.length && e.onActiveChange(E.children[0].key),
                        t.preventDefault();
                      break;
                    }
                    case ue.Z.ENTER:
                    case ue.Z.SPACE: {
                      b && !k.disabled && k.checkable !== !1 && !k.disableCheckbox
                        ? e.onNodeCheck({}, k, !u.includes(o))
                        : !b && g && !k.disabled && k.selectable !== !1 && e.onNodeSelect({}, k);
                      break;
                    }
                  }
                }
                m == null || m(t);
              }),
              (0, h.Z)((0, K.Z)(e), 'setUncontrolledState', function (t) {
                var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
                  o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
                if (!e.destroyed) {
                  var s = !1,
                    u = !0,
                    v = {};
                  Object.keys(t).forEach(function (y) {
                    if (y in e.props) {
                      u = !1;
                      return;
                    }
                    (s = !0), (v[y] = t[y]);
                  }),
                    s && (!r || u) && e.setState((0, H.Z)((0, H.Z)({}, v), o));
                }
              }),
              (0, h.Z)((0, K.Z)(e), 'scrollTo', function (t) {
                e.listRef.current.scrollTo(t);
              }),
              e
            );
          }
          return (
            (0, ae.Z)(
              i,
              [
                {
                  key: 'componentDidMount',
                  value: function () {
                    (this.destroyed = !1), this.onUpdated();
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function () {
                    this.onUpdated();
                  },
                },
                {
                  key: 'onUpdated',
                  value: function () {
                    var d = this.props,
                      l = d.activeKey,
                      p = d.itemScrollOffset,
                      t = p === void 0 ? 0 : p;
                    l !== void 0 &&
                      l !== this.state.activeKey &&
                      (this.setState({ activeKey: l }),
                      l !== null && this.scrollTo({ key: l, offset: t }));
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    window.removeEventListener('dragend', this.onWindowDragEnd),
                      (this.destroyed = !0);
                  },
                },
                {
                  key: 'resetDragState',
                  value: function () {
                    this.setState({
                      dragOverNodeKey: null,
                      dropPosition: null,
                      dropLevelOffset: null,
                      dropTargetKey: null,
                      dropContainerKey: null,
                      dropTargetPos: null,
                      dropAllowed: !1,
                    });
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var d = this.state,
                      l = d.focused,
                      p = d.flattenNodes,
                      t = d.keyEntities,
                      r = d.draggingNodeKey,
                      o = d.activeKey,
                      s = d.dropLevelOffset,
                      u = d.dropContainerKey,
                      v = d.dropTargetKey,
                      y = d.dropPosition,
                      m = d.dragOverNodeKey,
                      b = d.indent,
                      g = this.props,
                      E = g.prefixCls,
                      C = g.className,
                      N = g.style,
                      k = g.showLine,
                      S = g.focusable,
                      O = g.tabIndex,
                      $ = O === void 0 ? 0 : O,
                      L = g.selectable,
                      j = g.showIcon,
                      R = g.icon,
                      A = g.switcherIcon,
                      I = g.draggable,
                      X = g.checkable,
                      Q = g.checkStrictly,
                      q = g.disabled,
                      ie = g.motion,
                      _ = g.loadData,
                      ye = g.filterTreeNode,
                      Ae = g.height,
                      Be = g.itemHeight,
                      _e = g.virtual,
                      fe = g.titleRender,
                      De = g.dropIndicatorRender,
                      me = g.onContextMenu,
                      Re = g.onScroll,
                      lt = g.direction,
                      Qe = g.rootClassName,
                      ct = g.rootStyle,
                      Ie = (0, D.Z)(this.props, { aria: !0, data: !0 }),
                      Me;
                    return (
                      I &&
                        ((0, de.Z)(I) === 'object'
                          ? (Me = I)
                          : typeof I == 'function'
                            ? (Me = { nodeDraggable: I })
                            : (Me = {})),
                      c.createElement(
                        x.Provider,
                        {
                          value: {
                            prefixCls: E,
                            selectable: L,
                            showIcon: j,
                            icon: R,
                            switcherIcon: A,
                            draggable: Me,
                            draggingNodeKey: r,
                            checkable: X,
                            checkStrictly: Q,
                            disabled: q,
                            keyEntities: t,
                            dropLevelOffset: s,
                            dropContainerKey: u,
                            dropTargetKey: v,
                            dropPosition: y,
                            dragOverNodeKey: m,
                            indent: b,
                            direction: lt,
                            dropIndicatorRender: De,
                            loadData: _,
                            filterTreeNode: ye,
                            titleRender: fe,
                            onNodeClick: this.onNodeClick,
                            onNodeDoubleClick: this.onNodeDoubleClick,
                            onNodeExpand: this.onNodeExpand,
                            onNodeSelect: this.onNodeSelect,
                            onNodeCheck: this.onNodeCheck,
                            onNodeLoad: this.onNodeLoad,
                            onNodeMouseEnter: this.onNodeMouseEnter,
                            onNodeMouseLeave: this.onNodeMouseLeave,
                            onNodeContextMenu: this.onNodeContextMenu,
                            onNodeDragStart: this.onNodeDragStart,
                            onNodeDragEnter: this.onNodeDragEnter,
                            onNodeDragOver: this.onNodeDragOver,
                            onNodeDragLeave: this.onNodeDragLeave,
                            onNodeDragEnd: this.onNodeDragEnd,
                            onNodeDrop: this.onNodeDrop,
                          },
                        },
                        c.createElement(
                          'div',
                          {
                            role: 'tree',
                            className: re()(
                              E,
                              C,
                              Qe,
                              (0, h.Z)(
                                (0, h.Z)(
                                  (0, h.Z)({}, ''.concat(E, '-show-line'), k),
                                  ''.concat(E, '-focused'),
                                  l,
                                ),
                                ''.concat(E, '-active-focused'),
                                o !== null,
                              ),
                            ),
                            style: ct,
                          },
                          c.createElement(
                            Ut,
                            (0, ne.Z)(
                              {
                                ref: this.listRef,
                                prefixCls: E,
                                style: N,
                                data: p,
                                disabled: q,
                                selectable: L,
                                checkable: !!X,
                                motion: ie,
                                dragging: r !== null,
                                height: Ae,
                                itemHeight: Be,
                                virtual: _e,
                                focusable: S,
                                focused: l,
                                tabIndex: $,
                                activeItem: this.getActiveItem(),
                                onFocus: this.onFocus,
                                onBlur: this.onBlur,
                                onKeyDown: this.onKeyDown,
                                onActiveChange: this.onActiveChange,
                                onListChangeStart: this.onListChangeStart,
                                onListChangeEnd: this.onListChangeEnd,
                                onContextMenu: me,
                                onScroll: Re,
                              },
                              this.getTreeNodeRequiredProps(),
                              Ie,
                            ),
                          ),
                        ),
                      )
                    );
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function (d, l) {
                    var p = l.prevProps,
                      t = { prevProps: d };
                    function r(O) {
                      return (!p && O in d) || (p && p[O] !== d[O]);
                    }
                    var o,
                      s = l.fieldNames;
                    if (
                      (r('fieldNames') && ((s = ve(d.fieldNames)), (t.fieldNames = s)),
                      r('treeData')
                        ? (o = d.treeData)
                        : r('children') &&
                          ((0, f.ZP)(
                            !1,
                            '`children` of Tree is deprecated. Please use `treeData` instead.',
                          ),
                          (o = Fe(d.children))),
                      o)
                    ) {
                      t.treeData = o;
                      var u = Xe(o, { fieldNames: s });
                      t.keyEntities = (0, H.Z)((0, h.Z)({}, Ze, yt), u.keyEntities);
                    }
                    var v = t.keyEntities || l.keyEntities;
                    if (r('expandedKeys') || (p && r('autoExpandParent')))
                      t.expandedKeys =
                        d.autoExpandParent || (!p && d.defaultExpandParent)
                          ? xt(d.expandedKeys, v)
                          : d.expandedKeys;
                    else if (!p && d.defaultExpandAll) {
                      var y = (0, H.Z)({}, v);
                      delete y[Ze],
                        (t.expandedKeys = Object.keys(y).map(function (O) {
                          return y[O].key;
                        }));
                    } else
                      !p &&
                        d.defaultExpandedKeys &&
                        (t.expandedKeys =
                          d.autoExpandParent || d.defaultExpandParent
                            ? xt(d.defaultExpandedKeys, v)
                            : d.defaultExpandedKeys);
                    if ((t.expandedKeys || delete t.expandedKeys, o || t.expandedKeys)) {
                      var m = We(o || l.treeData, t.expandedKeys || l.expandedKeys, s);
                      t.flattenNodes = m;
                    }
                    if (
                      (d.selectable &&
                        (r('selectedKeys')
                          ? (t.selectedKeys = kt(d.selectedKeys, d))
                          : !p &&
                            d.defaultSelectedKeys &&
                            (t.selectedKeys = kt(d.defaultSelectedKeys, d))),
                      d.checkable)
                    ) {
                      var b;
                      if (
                        (r('checkedKeys')
                          ? (b = at(d.checkedKeys) || {})
                          : !p && d.defaultCheckedKeys
                            ? (b = at(d.defaultCheckedKeys) || {})
                            : o &&
                              (b = at(d.checkedKeys) || {
                                checkedKeys: l.checkedKeys,
                                halfCheckedKeys: l.halfCheckedKeys,
                              }),
                        b)
                      ) {
                        var g = b,
                          E = g.checkedKeys,
                          C = E === void 0 ? [] : E,
                          N = g.halfCheckedKeys,
                          k = N === void 0 ? [] : N;
                        if (!d.checkStrictly) {
                          var S = ot(C, !0, v);
                          (C = S.checkedKeys), (k = S.halfCheckedKeys);
                        }
                        (t.checkedKeys = C), (t.halfCheckedKeys = k);
                      }
                    }
                    return r('loadedKeys') && (t.loadedKeys = d.loadedKeys), t;
                  },
                },
              ],
            ),
            i
          );
        })(c.Component);
      (0, h.Z)(St, 'defaultProps', {
        prefixCls: 'rc-tree',
        showLine: !1,
        showIcon: !0,
        selectable: !0,
        multiple: !1,
        checkable: !1,
        disabled: !1,
        checkStrictly: !1,
        draggable: !1,
        defaultExpandParent: !0,
        autoExpandParent: !1,
        defaultExpandAll: !1,
        defaultExpandedKeys: [],
        defaultCheckedKeys: [],
        defaultSelectedKeys: [],
        dropIndicatorRender: M,
        allowDrop: function () {
          return !0;
        },
        expandAction: !1,
      }),
        (0, h.Z)(St, 'TreeNode', Le);
      var En = null,
        Nn = null;
      function Ue(n) {
        '@babel/helpers - typeof';
        return (
          (Ue =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
              ? function (a) {
                  return typeof a;
                }
              : function (a) {
                  return a &&
                    typeof Symbol == 'function' &&
                    a.constructor === Symbol &&
                    a !== Symbol.prototype
                    ? 'symbol'
                    : typeof a;
                }),
          Ue(n)
        );
      }
      function Zt(n, a) {
        var i = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
          var e = Object.getOwnPropertySymbols(n);
          a &&
            (e = e.filter(function (d) {
              return Object.getOwnPropertyDescriptor(n, d).enumerable;
            })),
            i.push.apply(i, e);
        }
        return i;
      }
      function Dt(n) {
        for (var a = 1; a < arguments.length; a++) {
          var i = arguments[a] != null ? arguments[a] : {};
          a % 2
            ? Zt(Object(i), !0).forEach(function (e) {
                en(n, e, i[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
              : Zt(Object(i)).forEach(function (e) {
                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                });
        }
        return n;
      }
      function en(n, a, i) {
        return (
          (a = tn(a)),
          a in n
            ? Object.defineProperty(n, a, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[a] = i),
          n
        );
      }
      function tn(n) {
        var a = nn(n, 'string');
        return Ue(a) === 'symbol' ? a : String(a);
      }
      function nn(n, a) {
        if (Ue(n) !== 'object' || n === null) return n;
        var i = n[Symbol.toPrimitive];
        if (i !== void 0) {
          var e = i.call(n, a || 'default');
          if (Ue(e) !== 'object') return e;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return (a === 'string' ? String : Number)(n);
      }
      function rn(n, a) {
        return dn(n) || on(n, a) || Ot(n, a) || an();
      }
      function an() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function on(n, a) {
        var i =
          n == null
            ? null
            : (typeof Symbol != 'undefined' && n[Symbol.iterator]) || n['@@iterator'];
        if (i != null) {
          var e,
            d,
            l,
            p,
            t = [],
            r = !0,
            o = !1;
          try {
            if (((l = (i = i.call(n)).next), a === 0)) {
              if (Object(i) !== i) return;
              r = !1;
            } else for (; !(r = (e = l.call(i)).done) && (t.push(e.value), t.length !== a); r = !0);
          } catch (s) {
            (o = !0), (d = s);
          } finally {
            try {
              if (!r && i.return != null && ((p = i.return()), Object(p) !== p)) return;
            } finally {
              if (o) throw d;
            }
          }
          return t;
        }
      }
      function dn(n) {
        if (Array.isArray(n)) return n;
      }
      function sn(n) {
        return un(n) || cn(n) || Ot(n) || ln();
      }
      function ln() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function Ot(n, a) {
        if (n) {
          if (typeof n == 'string') return it(n, a);
          var i = Object.prototype.toString.call(n).slice(8, -1);
          if (
            (i === 'Object' && n.constructor && (i = n.constructor.name),
            i === 'Map' || i === 'Set')
          )
            return Array.from(n);
          if (i === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))
            return it(n, a);
        }
      }
      function cn(n) {
        if ((typeof Symbol != 'undefined' && n[Symbol.iterator] != null) || n['@@iterator'] != null)
          return Array.from(n);
      }
      function un(n) {
        if (Array.isArray(n)) return it(n);
      }
      function it(n, a) {
        (a == null || a > n.length) && (a = n.length);
        for (var i = 0, e = new Array(a); i < a; i++) e[i] = n[i];
        return e;
      }
      function Je(n) {
        var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '',
          i = [];
        return (
          [].concat(n).forEach(function (e, d) {
            var l = ''.concat(a ? ''.concat(a, '-') : '').concat(d);
            switch (e == null ? void 0 : e.type) {
              case 'ul': {
                var p,
                  t = ((p = i[i.length - 1]) === null || p === void 0 ? void 0 : p.children) || i,
                  r = Je(e.props.children || [], l);
                t.push.apply(t, sn(r));
                break;
              }
              case 'li': {
                var o = Je(e.props.children, l);
                i.push({
                  title: [].concat(e.props.children).filter(function (s) {
                    return s.type !== 'ul';
                  }),
                  key: l,
                  children: o,
                  isLeaf: !o.length,
                });
                break;
              }
              default:
            }
          }),
          i
        );
      }
      var fn = function (a) {
          var i = useState(Je(a)),
            e = rn(i, 2),
            d = e[0],
            l = e[1];
          return (
            useEffect(
              function () {
                l(Je(a));
              },
              [a],
            ),
            d
          );
        },
        pn = function (a) {
          var i = a.isLeaf,
            e = a.expanded;
          return i
            ? React.createElement(
                'span',
                { className: 'dumi-default-tree-icon' },
                React.createElement(FileOutlined, { fill: 'currentColor' }),
              )
            : e
              ? React.createElement(
                  'span',
                  { className: 'dumi-default-tree-icon' },
                  React.createElement(FolderOpenOutlined, { fill: 'currentColor' }),
                )
              : React.createElement(
                  'span',
                  { className: 'dumi-default-tree-icon' },
                  React.createElement(FolderOutlined, { fill: 'currentColor' }),
                );
        },
        vn = function (a) {
          var i = a.isLeaf,
            e = a.expanded;
          return i
            ? React.createElement('span', { className: 'tree-switcher-leaf-line' })
            : e
              ? React.createElement(
                  'span',
                  { className: 'tree-switcher-line-icon' },
                  React.createElement(
                    'span',
                    { className: 'dumi-default-tree-icon' },
                    React.createElement(MinusSquareOutlined, { fill: 'currentColor' }),
                  ),
                )
              : React.createElement(
                  'span',
                  { className: 'tree-switcher-line-icon' },
                  React.createElement(
                    'span',
                    { className: 'dumi-default-tree-icon' },
                    React.createElement(PlusSquareOutlined, { fill: 'currentColor' }),
                  ),
                );
        },
        dt = function () {
          return { height: 0, opacity: 0 };
        },
        Tt = function (a) {
          var i = a.scrollHeight;
          return { height: i, opacity: 1 };
        },
        gn = function (a) {
          return { height: a ? a.offsetHeight : 0 };
        },
        st = function (a, i) {
          return (i == null ? void 0 : i.deadline) === !0 || i.propertyName === 'height';
        },
        hn = {
          motionName: 'ant-motion-collapse',
          onAppearStart: dt,
          onEnterStart: dt,
          onAppearActive: Tt,
          onEnterActive: Tt,
          onLeaveStart: gn,
          onLeaveActive: dt,
          onAppearEnd: st,
          onEnterEnd: st,
          onLeaveEnd: st,
          motionDeadline: 500,
        },
        kn = function (n) {
          var a = fn(n.children),
            i = createRef(),
            e = function (l, p) {
              var t = p.isLeaf;
              t || l.shiftKey || l.metaKey || l.ctrlKey || i.current.onNodeExpand(l, p);
            };
          return React.createElement(Tree, {
            className: 'dumi-default-tree',
            icon: pn,
            ref: i,
            itemHeight: 20,
            showLine: !0,
            selectable: !1,
            virtual: !1,
            motion: Dt(Dt({}, hn), {}, { motionAppear: !1 }),
            onClick: e,
            treeData: [{ key: '0', title: n.title || '<root>', children: a }],
            defaultExpandAll: !0,
            switcherIcon: vn,
          });
        };
    },
    30826: function (je, He, T) {
      var ne = 'Expected a function',
        de = NaN,
        H = '[object Symbol]',
        te = /^\s+|\s+$/g,
        se = /^[-+]0x[0-9a-f]+$/i,
        ae = /^0b[01]+$/i,
        K = /^0o[0-7]+$/i,
        le = parseInt,
        Ee = typeof T.g == 'object' && T.g && T.g.Object === Object && T.g,
        h = typeof self == 'object' && self && self.Object === Object && self,
        Ce = Ee || h || Function('return this')(),
        re = Object.prototype,
        ue = re.toString,
        D = Math.max,
        f = Math.min,
        c = function () {
          return Ce.Date.now();
        };
      function x(Z, F, B) {
        var ee,
          W,
          J,
          oe,
          ce,
          pe,
          Se = 0,
          Ne = !1,
          ve = !1,
          ze = !0;
        if (typeof Z != 'function') throw new TypeError(ne);
        (F = U(F) || 0),
          P(B) &&
            ((Ne = !!B.leading),
            (ve = 'maxWait' in B),
            (J = ve ? D(U(B.maxWait) || 0, F) : J),
            (ze = 'trailing' in B ? !!B.trailing : ze));
        function Fe(z) {
          var he = ee,
            Ke = W;
          return (ee = W = void 0), (Se = z), (oe = Z.apply(Ke, he)), oe;
        }
        function We(z) {
          return (Se = z), (ce = setTimeout(ge, F)), Ne ? Fe(z) : oe;
        }
        function et(z) {
          var he = z - pe,
            Ke = z - Se,
            Le = F - he;
          return ve ? f(Le, J - Ke) : Le;
        }
        function Xe(z) {
          var he = z - pe,
            Ke = z - Se;
          return pe === void 0 || he >= F || he < 0 || (ve && Ke >= J);
        }
        function ge() {
          var z = c();
          if (Xe(z)) return V(z);
          ce = setTimeout(ge, et(z));
        }
        function V(z) {
          return (ce = void 0), ze && ee ? Fe(z) : ((ee = W = void 0), oe);
        }
        function tt() {
          ce !== void 0 && clearTimeout(ce), (Se = 0), (ee = pe = W = ce = void 0);
        }
        function Ye() {
          return ce === void 0 ? oe : V(c());
        }
        function we() {
          var z = c(),
            he = Xe(z);
          if (((ee = arguments), (W = this), (pe = z), he)) {
            if (ce === void 0) return We(pe);
            if (ve) return (ce = setTimeout(ge, F)), Fe(pe);
          }
          return ce === void 0 && (ce = setTimeout(ge, F)), oe;
        }
        return (we.cancel = tt), (we.flush = Ye), we;
      }
      function M(Z, F, B) {
        var ee = !0,
          W = !0;
        if (typeof Z != 'function') throw new TypeError(ne);
        return (
          P(B) &&
            ((ee = 'leading' in B ? !!B.leading : ee), (W = 'trailing' in B ? !!B.trailing : W)),
          x(Z, F, { leading: ee, maxWait: F, trailing: W })
        );
      }
      function P(Z) {
        var F = typeof Z;
        return !!Z && (F == 'object' || F == 'function');
      }
      function w(Z) {
        return !!Z && typeof Z == 'object';
      }
      function G(Z) {
        return typeof Z == 'symbol' || (w(Z) && ue.call(Z) == H);
      }
      function U(Z) {
        if (typeof Z == 'number') return Z;
        if (G(Z)) return de;
        if (P(Z)) {
          var F = typeof Z.valueOf == 'function' ? Z.valueOf() : Z;
          Z = P(F) ? F + '' : F;
        }
        if (typeof Z != 'string') return Z === 0 ? Z : +Z;
        Z = Z.replace(te, '');
        var B = ae.test(Z);
        return B || K.test(Z) ? le(Z.slice(2), B ? 2 : 8) : se.test(Z) ? de : +Z;
      }
      je.exports = M;
    },
  },
]);
