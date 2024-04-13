'use strict';
(self.webpackChunk_dext7r_hooks = self.webpackChunk_dext7r_hooks || []).push([
  [8494],
  {
    51240: function (U, m, t) {
      t.r(m);
      var f = t(51411),
        u = t(87462),
        r = t(67269),
        p = t(11527);
      m.default = function () {
        return (0, p.jsx)(f.Z, {
          children: (0, p.jsx)(r.Z, {
            style: { height: 600 },
            children: (0, p.jsx)(u.Z, {
              title: 'Ant Design <b>Style</b>',
              actions: [
                { text: '\u4E3B\u6309\u94AE', link: '/components/hero' },
                { text: '\u8F85\u52A9\u6309\u94AE', link: '/' },
              ],
              description: '\u70AB\u9177\u7684 Hero \u5934\u90E8\u7EC4\u4EF6',
            }),
          }),
        });
      };
    },
    51411: function (U, m, t) {
      t.d(m, {
        Z: function () {
          return a;
        },
      });
      var f = t(68185),
        u = t(50446),
        r = t(50959),
        p = t(82187),
        A = t.n(p),
        c = t(25765),
        O = t(37563),
        b = t(43469),
        B = t(99684),
        i = t(21773),
        N = t(26653);
      const I = (n) => {
          const { componentCls: e, colorText: o, fontSize: s, lineHeight: d, fontFamily: l } = n;
          return { [e]: { color: o, fontSize: s, lineHeight: d, fontFamily: l } };
        },
        C = () => ({});
      var P = (0, N.I$)('App', I, C);
      const S = () => r.useContext(i.Z),
        g = (n) => {
          const {
              prefixCls: e,
              children: o,
              className: s,
              rootClassName: d,
              message: l,
              notification: M,
              style: j,
              component: h = 'div',
            } = n,
            { getPrefixCls: x } = (0, r.useContext)(c.E_),
            v = x('app', e),
            [F, W, D] = P(v),
            V = A()(W, v, s, d, D),
            T = (0, r.useContext)(i.J),
            K = r.useMemo(
              () => ({
                message: Object.assign(Object.assign({}, T.message), l),
                notification: Object.assign(Object.assign({}, T.notification), M),
              }),
              [l, M, T.message, T.notification],
            ),
            [k, J] = (0, O.Z)(K.message),
            [G, X] = (0, B.Z)(K.notification),
            [R, $] = (0, b.Z)(),
            Q = r.useMemo(() => ({ message: k, notification: G, modal: R }), [k, G, R]),
            Y = h === !1 ? r.Fragment : h,
            w = { className: V, style: j };
          return F(
            r.createElement(
              i.Z.Provider,
              { value: Q },
              r.createElement(
                i.J.Provider,
                { value: K },
                r.createElement(Y, Object.assign({}, h === !1 ? void 0 : w), $, J, X, o),
              ),
            ),
          );
        };
      g.useApp = S;
      var z = g,
        Z = t(15919),
        y = t(11527),
        L = ['children'];
      function H(n, e) {
        var o = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(n);
          e &&
            (s = s.filter(function (d) {
              return Object.getOwnPropertyDescriptor(n, d).enumerable;
            })),
            o.push.apply(o, s);
        }
        return o;
      }
      function E(n) {
        for (var e = 1; e < arguments.length; e++) {
          var o = arguments[e] != null ? arguments[e] : {};
          e % 2
            ? H(Object(o), !0).forEach(function (s) {
                (0, f.Z)(n, s, o[s]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o))
              : H(Object(o)).forEach(function (s) {
                  Object.defineProperty(n, s, Object.getOwnPropertyDescriptor(o, s));
                });
        }
        return n;
      }
      var a = function (n) {
        var e = n.children,
          o = (0, u.Z)(n, L);
        return (0, y.jsx)(Z.f, E(E({}, o), {}, { children: (0, y.jsx)(z, { children: e }) }));
      };
    },
    87462: function (U, m, t) {
      t.d(m, {
        Z: function () {
          return E;
        },
      });
      var f = t(95925),
        u = t(83110),
        r = t(50283),
        p = t(33743),
        A = t(67269),
        c = t(86910),
        O = t(97442),
        b,
        B = (0, O.kc)(function (a) {
          var n = a.css,
            e = a.stylish;
          return {
            button: n(
              b ||
                (b = (0, c.Z)([
                  `
      border: none;

      `,
                  `
      `,
                  `

      background-size: 200% 100%;

      &:hover {
        animation: none;
      }
    `,
                ])),
              e.heroButtonGradient,
              e.heroGradientFlow,
            ),
          };
        }),
        i = t(11527),
        N = function (n) {
          var e = n.children,
            o = B(),
            s = o.styles;
          return (0, i.jsx)(u.ZP, {
            size: 'large',
            shape: 'round',
            type: 'primary',
            className: s.button,
            children: e,
          });
        },
        I = N,
        C,
        P,
        S,
        g,
        z,
        Z,
        y,
        L = (0, O.kc)(function (a) {
          var n = a.css,
            e = a.responsive,
            o = a.token,
            s = a.stylish,
            d = a.isDarkMode;
          return {
            container: n(
              C ||
                (C = (0, c.Z)([
                  `
    position: relative;
    text-align: center;
    box-sizing: border-box;

    + * {
      position: relative;
    }

    > p {
      margin: 32px;
      color: `,
                  `;
      font-size: 20px;
      line-height: 1.6;

      `,
                  `
    }
  `,
                ])),
              o.colorTextSecondary,
              e({ mobile: { fontSize: 16 } }),
            ),
            titleContainer: n(
              P ||
                (P = (0, c.Z)([
                  `
    position: relative;
  `,
                ])),
            ),
            title: n(
              S ||
                (S = (0, c.Z)([
                  `
    font-size: 68px;
    z-index: 10;
    color: transparent;
    margin: 0;
    font-family: AliPuHui, `,
                  `;

    `,
                  `

    b {
      position: relative;
      z-index: 5;
      `,
                  `;
      `,
                  `

      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `,
                ])),
              o.fontFamily,
              e({ mobile: { fontSize: 40 } }),
              s.heroGradient,
              s.heroGradientFlow,
            ),
            titleShadow: n(
              g ||
                (g = (0, c.Z)([
                  `
    position: absolute;
    z-index: 0;
    color: `,
                  `;

    top: 0;
    left: 0;
    font-size: 68px;
    font-family: AliPuHui, `,
                  `;
    font-weight: bold;
    `,
                  `

    `,
                  `

    b {
      color: transparent;
    }
  `,
                ])),
              d ? o.colorWhite : o.colorTextBase,
              o.fontFamily,
              e({ mobile: { fontSize: 40 } }),
              s.heroTextShadow,
            ),
            desc: n(
              z ||
                (z = (0, c.Z)([
                  `
    font-size: `,
                  `px;
    color: `,
                  `;

    `,
                  ` {
      font-size: `,
                  `px;
      margin: 24px 16px;
    }
  `,
                ])),
              o.fontSizeHeading3,
              o.colorTextSecondary,
              e.mobile,
              o.fontSizeHeading5,
            ),
            actions: n(
              Z ||
                (Z = (0, c.Z)([
                  `
    margin-top: 48px;
    display: flex;
    justify-content: center;

    `,
                  `
  `,
                ])),
              e({ mobile: { marginTop: 24 } }),
            ),
            canvas: n(
              y ||
                (y = (0, c.Z)([
                  `
    z-index: 10;
    pointer-events: none;
    position: absolute;
    top: -250px;
    left: 50%;
    transform: translateX(-50%) scale(1.5);
    width: 600px;
    height: 400px;
    opacity: 0.2;
    `,
                  `

    `,
                  ` {
      width: 200px;
      height: 300px;
    }
  `,
                ])),
              s.heroBlurBall,
              e.mobile,
            ),
          };
        }),
        H = function (n) {
          var e = n.title,
            o = n.description,
            s = n.actions,
            d = L(),
            l = d.styles,
            M = d.cx;
          return (0, i.jsxs)(p.D, {
            horizontal: !0,
            distribution: 'center',
            className: l.container,
            children: [
              (0, i.jsx)('div', { className: l.canvas }),
              (0, i.jsxs)(A.Z, {
                children: [
                  e &&
                    (0, i.jsxs)('div', {
                      className: l.titleContainer,
                      children: [
                        (0, i.jsx)('h1', {
                          className: l.title,
                          dangerouslySetInnerHTML: { __html: e },
                        }),
                        (0, i.jsx)('div', {
                          className: M(l.titleShadow),
                          dangerouslySetInnerHTML: { __html: e },
                        }),
                      ],
                    }),
                  o &&
                    (0, i.jsx)('p', { className: l.desc, dangerouslySetInnerHTML: { __html: o } }),
                  !!(s != null && s.length) &&
                    (0, i.jsx)(f.ZP, {
                      theme: { token: { fontSize: 16, controlHeight: 40 } },
                      children: (0, i.jsx)(p.D, {
                        horizontal: !0,
                        gap: 24,
                        className: l.actions,
                        children: s.map(function (j, h) {
                          var x = j.text,
                            v = j.link,
                            F = j.openExternal,
                            W = /^(https?:)?\/\//i.test(v),
                            D =
                              h === 0
                                ? (0, i.jsx)(I, { children: x })
                                : (0, i.jsx)(u.ZP, {
                                    size: 'large',
                                    shape: 'round',
                                    type: 'default',
                                    children: x,
                                  });
                          return W
                            ? (0, i.jsx)(
                                'a',
                                {
                                  href: v,
                                  target: '_blank',
                                  rel: 'noopener noreferrer',
                                  children: D,
                                },
                                ''.concat(x, '-').concat(h),
                              )
                            : (0, i.jsx)(
                                r.rU,
                                {
                                  to: v,
                                  target: F ? '_blank' : void 0,
                                  rel: 'noreferrer',
                                  children: D,
                                },
                                x,
                              );
                        }),
                      }),
                    }),
                ],
              }),
            ],
          });
        },
        E = H;
    },
  },
]);
