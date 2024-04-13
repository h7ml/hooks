'use strict';
(self.webpackChunk_dext7r_hooks = self.webpackChunk_dext7r_hooks || []).push([
  [4763],
  {
    22337: function (Se, V, r) {
      r.d(V, {
        Z: function () {
          return I;
        },
      });
      var Q = r(91010),
        z = r(50959),
        l = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z',
                },
              },
            ],
          },
          name: 'arrow-right',
          theme: 'outlined',
        },
        U = l,
        w = r(82017),
        X = function (T, H) {
          return z.createElement(w.Z, (0, Q.Z)({}, T, { ref: H, icon: U }));
        },
        B = z.forwardRef(X),
        I = B;
    },
    51411: function (Se, V, r) {
      r.d(V, {
        Z: function () {
          return he;
        },
      });
      var Q = r(68185),
        z = r(50446),
        l = r(50959),
        U = r(82187),
        w = r.n(U),
        X = r(25765),
        B = r(37563),
        I = r(43469),
        _ = r(99684),
        T = r(21773),
        H = r(26653);
      const ee = (c) => {
          const { componentCls: u, colorText: d, fontSize: p, lineHeight: S, fontFamily: F } = c;
          return { [u]: { color: d, fontSize: p, lineHeight: S, fontFamily: F } };
        },
        ue = () => ({});
      var pe = (0, H.I$)('App', ee, ue);
      const me = () => l.useContext(T.Z),
        A = (c) => {
          const {
              prefixCls: u,
              children: d,
              className: p,
              rootClassName: S,
              message: F,
              notification: oe,
              style: Ce,
              component: M = 'div',
            } = c,
            { getPrefixCls: ye } = (0, l.useContext)(X.E_),
            K = ye('app', u),
            [re, be, h] = pe(K),
            ae = w()(be, K, p, S, h),
            P = (0, l.useContext)(T.J),
            R = l.useMemo(
              () => ({
                message: Object.assign(Object.assign({}, P.message), F),
                notification: Object.assign(Object.assign({}, P.notification), oe),
              }),
              [F, oe, P.message, P.notification],
            ),
            [G, se] = (0, B.Z)(R.message),
            [Y, le] = (0, _.Z)(R.notification),
            [q, ie] = (0, I.Z)(),
            ce = l.useMemo(() => ({ message: G, notification: Y, modal: q }), [G, Y, q]),
            de = M === !1 ? l.Fragment : M,
            ge = { className: ae, style: Ce };
          return re(
            l.createElement(
              T.Z.Provider,
              { value: ce },
              l.createElement(
                T.J.Provider,
                { value: R },
                l.createElement(de, Object.assign({}, M === !1 ? void 0 : ge), ie, se, le, d),
              ),
            ),
          );
        };
      A.useApp = me;
      var ve = A,
        J = r(15919),
        D = r(11527),
        ne = ['children'];
      function te(c, u) {
        var d = Object.keys(c);
        if (Object.getOwnPropertySymbols) {
          var p = Object.getOwnPropertySymbols(c);
          u &&
            (p = p.filter(function (S) {
              return Object.getOwnPropertyDescriptor(c, S).enumerable;
            })),
            d.push.apply(d, p);
        }
        return d;
      }
      function fe(c) {
        for (var u = 1; u < arguments.length; u++) {
          var d = arguments[u] != null ? arguments[u] : {};
          u % 2
            ? te(Object(d), !0).forEach(function (p) {
                (0, Q.Z)(c, p, d[p]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(d))
              : te(Object(d)).forEach(function (p) {
                  Object.defineProperty(c, p, Object.getOwnPropertyDescriptor(d, p));
                });
        }
        return c;
      }
      var he = function (c) {
        var u = c.children,
          d = (0, z.Z)(c, ne);
        return (0, D.jsx)(J.f, fe(fe({}, d), {}, { children: (0, D.jsx)(ve, { children: u }) }));
      };
    },
    62581: function (Se, V, r) {
      r.d(V, {
        Z: function () {
          return Me;
        },
      });
      var Q = r(68185),
        z = r(22337),
        l = r(50959),
        U = r(82187),
        w = r.n(U),
        X = r(36760),
        B = r(16826),
        I = r(92884),
        _ = r(76189),
        T = r(19143),
        H = r(25765),
        ee = r(81275),
        ue = r(99978),
        pe = r(12775),
        me = r(51540),
        A = r(26653);
      const ve = (e) => {
          const {
              paddingXXS: t,
              lineWidth: n,
              tagPaddingHorizontal: o,
              componentCls: a,
              calc: s,
            } = e,
            i = s(o).sub(n).equal(),
            y = s(t).sub(n).equal();
          return {
            [a]: Object.assign(Object.assign({}, (0, pe.Wf)(e)), {
              display: 'inline-block',
              height: 'auto',
              marginInlineEnd: e.marginXS,
              paddingInline: i,
              fontSize: e.tagFontSize,
              lineHeight: e.tagLineHeight,
              whiteSpace: 'nowrap',
              background: e.defaultBg,
              border: `${(0, ee.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
              borderRadius: e.borderRadiusSM,
              opacity: 1,
              transition: `all ${e.motionDurationMid}`,
              textAlign: 'start',
              position: 'relative',
              [`&${a}-rtl`]: { direction: 'rtl' },
              '&, a, a:hover': { color: e.defaultColor },
              [`${a}-close-icon`]: {
                marginInlineStart: y,
                fontSize: e.tagIconSize,
                color: e.colorTextDescription,
                cursor: 'pointer',
                transition: `all ${e.motionDurationMid}`,
                '&:hover': { color: e.colorTextHeading },
              },
              [`&${a}-has-color`]: {
                borderColor: 'transparent',
                [`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]: {
                  color: e.colorTextLightSolid,
                },
              },
              ['&-checkable']: {
                backgroundColor: 'transparent',
                borderColor: 'transparent',
                cursor: 'pointer',
                [`&:not(${a}-checkable-checked):hover`]: {
                  color: e.colorPrimary,
                  backgroundColor: e.colorFillSecondary,
                },
                '&:active, &-checked': { color: e.colorTextLightSolid },
                '&-checked': {
                  backgroundColor: e.colorPrimary,
                  '&:hover': { backgroundColor: e.colorPrimaryHover },
                },
                '&:active': { backgroundColor: e.colorPrimaryActive },
              },
              ['&-hidden']: { display: 'none' },
              [`> ${e.iconCls} + span, > span + ${e.iconCls}`]: { marginInlineStart: i },
            }),
            [`${a}-borderless`]: { borderColor: 'transparent', background: e.tagBorderlessBg },
          };
        },
        J = (e) => {
          const { lineWidth: t, fontSizeIcon: n, calc: o } = e,
            a = e.fontSizeSM;
          return (0, me.TS)(e, {
            tagFontSize: a,
            tagLineHeight: (0, ee.bf)(o(e.lineHeightSM).mul(a).equal()),
            tagIconSize: o(n).sub(o(t).mul(2)).equal(),
            tagPaddingHorizontal: 8,
            tagBorderlessBg: e.defaultBg,
          });
        },
        D = (e) => ({
          defaultBg: new ue.C(e.colorFillQuaternary).onBackground(e.colorBgContainer).toHexString(),
          defaultColor: e.colorText,
        });
      var ne = (0, A.I$)(
          'Tag',
          (e) => {
            const t = J(e);
            return ve(t);
          },
          D,
        ),
        te = function (e, t) {
          var n = {};
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
          if (e != null && typeof Object.getOwnPropertySymbols == 'function')
            for (var a = 0, o = Object.getOwnPropertySymbols(e); a < o.length; a++)
              t.indexOf(o[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, o[a]) &&
                (n[o[a]] = e[o[a]]);
          return n;
        },
        he = l.forwardRef((e, t) => {
          const { prefixCls: n, style: o, className: a, checked: s, onChange: i, onClick: y } = e,
            g = te(e, ['prefixCls', 'style', 'className', 'checked', 'onChange', 'onClick']),
            { getPrefixCls: v, tag: x } = l.useContext(H.E_),
            O = ($) => {
              i == null || i(!s), y == null || y($);
            },
            b = v('tag', n),
            [N, f, C] = ne(b),
            L = w()(
              b,
              `${b}-checkable`,
              { [`${b}-checkable-checked`]: s },
              x == null ? void 0 : x.className,
              a,
              f,
              C,
            );
          return N(
            l.createElement(
              'span',
              Object.assign({}, g, {
                ref: t,
                style: Object.assign(Object.assign({}, o), x == null ? void 0 : x.style),
                className: L,
                onClick: O,
              }),
            ),
          );
        }),
        c = r(30588);
      const u = (e) =>
        (0, c.Z)(e, (t, n) => {
          let { textColor: o, lightBorderColor: a, lightColor: s, darkColor: i } = n;
          return {
            [`${e.componentCls}${e.componentCls}-${t}`]: {
              color: o,
              background: s,
              borderColor: a,
              '&-inverse': { color: e.colorTextLightSolid, background: i, borderColor: i },
              [`&${e.componentCls}-borderless`]: { borderColor: 'transparent' },
            },
          };
        });
      var d = (0, A.bk)(
        ['Tag', 'preset'],
        (e) => {
          const t = J(e);
          return u(t);
        },
        D,
      );
      function p(e) {
        return typeof e != 'string' ? e : e.charAt(0).toUpperCase() + e.slice(1);
      }
      const S = (e, t, n) => {
        const o = p(n);
        return {
          [`${e.componentCls}${e.componentCls}-${t}`]: {
            color: e[`color${n}`],
            background: e[`color${o}Bg`],
            borderColor: e[`color${o}Border`],
            [`&${e.componentCls}-borderless`]: { borderColor: 'transparent' },
          },
        };
      };
      var F = (0, A.bk)(
          ['Tag', 'status'],
          (e) => {
            const t = J(e);
            return [
              S(t, 'success', 'Success'),
              S(t, 'processing', 'Info'),
              S(t, 'error', 'Error'),
              S(t, 'warning', 'Warning'),
            ];
          },
          D,
        ),
        oe = function (e, t) {
          var n = {};
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
          if (e != null && typeof Object.getOwnPropertySymbols == 'function')
            for (var a = 0, o = Object.getOwnPropertySymbols(e); a < o.length; a++)
              t.indexOf(o[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, o[a]) &&
                (n[o[a]] = e[o[a]]);
          return n;
        };
      const Ce = (e, t) => {
          const {
              prefixCls: n,
              className: o,
              rootClassName: a,
              style: s,
              children: i,
              icon: y,
              color: g,
              onClose: v,
              bordered: x = !0,
              visible: O,
            } = e,
            b = oe(e, [
              'prefixCls',
              'className',
              'rootClassName',
              'style',
              'children',
              'icon',
              'color',
              'onClose',
              'bordered',
              'visible',
            ]),
            { getPrefixCls: N, direction: f, tag: C } = l.useContext(H.E_),
            [L, $] = l.useState(!0),
            Z = (0, X.Z)(b, ['closeIcon', 'closable']);
          l.useEffect(() => {
            O !== void 0 && $(O);
          }, [O]);
          const xe = (0, B.o2)(g),
            k = (0, B.yT)(g),
            Oe = xe || k,
            Re = Object.assign(
              Object.assign(
                { backgroundColor: g && !Oe ? g : void 0 },
                C == null ? void 0 : C.style,
              ),
              s,
            ),
            j = N('tag', n),
            [Le, ke, We] = ne(j),
            Ve = w()(
              j,
              C == null ? void 0 : C.className,
              {
                [`${j}-${g}`]: Oe,
                [`${j}-has-color`]: g && !Oe,
                [`${j}-hidden`]: !L,
                [`${j}-rtl`]: f === 'rtl',
                [`${j}-borderless`]: !x,
              },
              o,
              a,
              ke,
              We,
            ),
            $e = (W) => {
              W.stopPropagation(), v == null || v(W), !W.defaultPrevented && $(!1);
            },
            [, Qe] = (0, I.Z)((0, I.w)(e), (0, I.w)(C), {
              closable: !1,
              closeIconRender: (W) => {
                const Je = l.createElement(
                  'span',
                  { className: `${j}-close-icon`, onClick: $e },
                  W,
                );
                return (0, _.wm)(W, Je, (E) => ({
                  onClick: (Ie) => {
                    var je;
                    (je = E == null ? void 0 : E.onClick) === null ||
                      je === void 0 ||
                      je.call(E, Ie),
                      $e(Ie);
                  },
                  className: w()(E == null ? void 0 : E.className, `${j}-close-icon`),
                }));
              },
            }),
            Ue = typeof b.onClick == 'function' || (i && i.type === 'a'),
            Ze = y || null,
            Xe = Ze
              ? l.createElement(l.Fragment, null, Ze, i && l.createElement('span', null, i))
              : i,
            we = l.createElement(
              'span',
              Object.assign({}, Z, { ref: t, className: Ve, style: Re }),
              Xe,
              Qe,
              xe && l.createElement(d, { key: 'preset', prefixCls: j }),
              k && l.createElement(F, { key: 'status', prefixCls: j }),
            );
          return Le(Ue ? l.createElement(T.Z, { component: 'Tag' }, we) : we);
        },
        M = l.forwardRef(Ce);
      M.CheckableTag = he;
      var ye = M,
        K = r(50283),
        re = r(67269),
        be = r(33743),
        h = r(86910),
        ae = r(97442),
        P = r(79366),
        R,
        G,
        se,
        Y,
        le,
        q,
        ie,
        ce,
        de,
        ge,
        Ee = (0, ae.kc)(function (e, t) {
          var n = e.token,
            o = e.prefixCls,
            a = e.responsive,
            s = e.css,
            i = e.stylish,
            y = e.isDarkMode,
            g = e.cx,
            v = t.rowNum,
            x = t.hasLink,
            O = ''.concat(o, '-features'),
            b = ''.concat(O, '-cover'),
            N = ''.concat(O, '-description'),
            f = ''.concat(O, '-title'),
            C = ''.concat(O, '-img'),
            L = 20,
            $ = function (k) {
              return s(
                R ||
                  (R = (0, h.Z)([
                    `
      width: `,
                    `px;
      height: `,
                    `px;
      font-size: `,
                    `px;
    `,
                  ])),
                k,
                k,
                k * (22 / 24),
              );
            },
            Z = s(
              G ||
                (G = (0, h.Z)([
                  `
      transition: all `,
                  ' ',
                  `;
    `,
                ])),
              n.motionDurationSlow,
              n.motionEaseInOutCirc,
            );
          return {
            cell: s(
              se ||
                (se = (0, h.Z)([
                  `
        overflow: hidden;
      `,
                ])),
            ),
            container: s(
              Y ||
                (Y = (0, h.Z)([
                  `
        `,
                  `;

        z-index: 1;
        padding: 24px;
        border-radius: 24px;

        background: linear-gradient(
          135deg,
          `,
                  `,
          `,
                  `
        );

        position: relative;

        &:hover {
          scale: 1.03;

          background: linear-gradient(
            135deg,
            `,
                  `,
            `,
                  `
          );

          box-shadow: inset 0 0 0 1px `,
                  ', ',
                  `;

          .`,
                  ` {
            height: `,
                  `px;
            width: 100%;
            padding: 0;
          }

          .`,
                  ` {
            `,
                  `;
          }

          .`,
                  ` {
            position: absolute;
            visibility: hidden;
            opacity: 0;
          }

          .`,
                  ` {
            font-size: `,
                  `px;
          }
        }
      `,
                ])),
              Z,
              n.colorFillContent,
              n.colorFillQuaternary,
              (0, P.$n)(0.5, n.colorFillContent),
              (0, P.$n)(0.5, n.colorFillQuaternary),
              n.colorBorder,
              n.boxShadowSecondary,
              b,
              L * v,
              C,
              $(100),
              N,
              f,
              x ? 14 : 20,
            ),
            title: g(
              f,
              Z,
              s(
                le ||
                  (le = (0, h.Z)([
                    `
          pointer-events: none;
          font-size: 20px;
          line-height: `,
                    `;
          margin: 16px 0;
          color: `,
                    `;
        `,
                  ])),
                n.lineHeightHeading3,
                n.colorText,
              ),
            ),
            desc: g(
              N,
              Z,
              s(
                q ||
                  (q = (0, h.Z)([
                    `
          color: `,
                    `;

          pointer-events: none;
          quotient {
            color: `,
                    `;
            display: block;
            margin: 12px 0;
            padding-left: 12px;
            position: relative;
            &:before {
              position: absolute;
              content: '';
              left: 0;
              display: block;
              border-radius: 2px;
              width: 4px;
              height: 100%;
              background: `,
                    `;
            }
          }
        `,
                  ])),
                n.colorTextSecondary,
                n.colorTextDescription,
                y ? n.colorPrimary : n.colorPrimaryBgHover,
              ),
            ),
            imgContainer: g(
              b,
              Z,
              s(
                ie ||
                  (ie = (0, h.Z)([
                    `
          background: `,
                    `;
          border-radius: 8px;
          opacity: 0.8;

          `,
                    `;
          padding: 4px;

          &[image-style='primary'] {
            background: linear-gradient(135deg, `,
                    ', ',
                    `);
          }

          &[image-style='light'] {
            background: `,
                    `;
          }

          &[image-style='soon'] {
            opacity: 0.5;
            background: linear-gradient(
              135deg,
              `,
                    `,
              `,
                    ` 50%,
              `,
                    `
            );
          }
        `,
                  ])),
                n.colorFillContent,
                $(24),
                n.gradientColor1,
                n.gradientColor2,
                n.colorBgContainer,
                (0, P.m4)(n.gradientColor2, 0.3),
                (0, P.m4)(n.gradientColor2, 0.3),
                (0, P.m4)(n.gradientColor1, 0.3),
              ),
            ),
            img: g(
              C,
              Z,
              s(
                ce ||
                  (ce = (0, h.Z)([
                    `
          `,
                    `;
          color: `,
                    `;
        `,
                  ])),
                $(20),
                n.colorWhite,
              ),
            ),
            link: s(
              de ||
                (de = (0, h.Z)([
                  `
        `,
                  `;

        margin-top: 24px;

        a {
          `,
                  `;

          color: `,
                  `;
          &:hover {
            color: `,
                  `;
          }
        }
      `,
                ])),
              Z,
              i.resetLinkColor,
              n.colorTextDescription,
              n.colorPrimaryHover,
            ),
            blur: s(
              ge ||
                (ge = (0, h.Z)([
                  `
        pointer-events: none;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        `,
                  `;
        scale: 2;
        opacity: `,
                  `;
        `,
                  ` {
          display: none;
        }
      `,
                ])),
              i.heroBlurBall,
              y ? 0.05 : 0.08,
              a.mobile,
            ),
          };
        }),
        m = r(11527),
        ze = function (t) {
          var n = t.image,
            o = t.className,
            a = t.title,
            s = /(\.png|\.jpg|\.jpeg|\.gif|\.svg|\.webp)$/;
          return n.startsWith('http') || s.test(n)
            ? (0, m.jsx)('img', { className: o, src: n, alt: a })
            : (0, m.jsx)(re.Z, { className: o, children: n });
        },
        Be = function (t) {
          var n = t.imageType,
            o = t.row,
            a = t.column,
            s = t.hero,
            i = t.description,
            y = t.image,
            g = t.title,
            v = t.link,
            x = t.imageStyle,
            O = t.openExternal,
            b = o || 7,
            N = Ee({ rowNum: b, hasLink: !!v }),
            f = N.styles,
            C = N.theme;
          return (0, m.jsxs)('div', {
            className: f.container,
            style: {
              gridRow: 'span '.concat(b),
              gridColumn: 'span '.concat(a || 1),
              cursor: v ? 'pointer' : 'default',
            },
            onClick: function () {
              v && (O ? window.open(v) : K.m8.push(v));
            },
            children: [
              (0, m.jsxs)('div', {
                className: f.cell,
                children: [
                  y &&
                    (0, m.jsx)(re.Z, {
                      'image-style': n,
                      className: f.imgContainer,
                      style: x,
                      children: (0, m.jsx)(ze, { className: f.img, image: y, title: g }),
                    }),
                  g &&
                    (0, m.jsxs)(be.D, {
                      as: 'h3',
                      horizontal: !0,
                      gap: 8,
                      align: 'center',
                      className: f.title,
                      children: [
                        g,
                        n === 'soon'
                          ? (0, m.jsx)(ye, {
                              color: C.isDarkMode ? 'pink-inverse' : 'cyan-inverse',
                              children: 'SOON',
                            })
                          : null,
                      ],
                    }),
                  i &&
                    (0, m.jsx)('p', { dangerouslySetInnerHTML: { __html: i }, className: f.desc }),
                  v &&
                    (0, m.jsx)('div', {
                      className: f.link,
                      children: (0, m.jsxs)(K.rU, {
                        to: v,
                        children: ['\u7ACB\u5373\u4E86\u89E3 ', (0, m.jsx)(z.Z, {})],
                      }),
                    }),
                ],
              }),
              s && (0, m.jsx)('div', { className: f.blur }),
            ],
          });
        },
        He = Be,
        Pe,
        Ne,
        Ae = (0, ae.kc)(function (e) {
          var t = e.token,
            n = e.prefixCls,
            o = e.responsive,
            a = e.css,
            s = e.cx,
            i = ''.concat(n, '-features');
          return {
            container: s(
              i,
              a(
                Pe ||
                  (Pe = (0, h.Z)([
                    `
        max-width: `,
                    `px;

        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-flow: row dense;
        grid-auto-rows: 24px;
        gap: 16px;

        `,
                    `
      `,
                  ])),
                t.contentMaxWidth,
                o({
                  mobile: a(
                    Ne ||
                      (Ne = (0, h.Z)([
                        `
            flex-direction: column;
            display: flex;
          `,
                      ])),
                  ),
                  laptop: { gridTemplateColumns: 'repeat(2, 1fr)' },
                }),
              ),
            ),
          };
        });
      function Te(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (a) {
              return Object.getOwnPropertyDescriptor(e, a).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function De(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t] != null ? arguments[t] : {};
          t % 2
            ? Te(Object(n), !0).forEach(function (o) {
                (0, Q.Z)(e, o, n[o]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Te(Object(n)).forEach(function (o) {
                  Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
                });
        }
        return e;
      }
      var Fe = function (t) {
          var n = t.items,
            o = t.style,
            a = Ae(),
            s = a.styles;
          return n != null && n.length
            ? (0, m.jsx)('div', {
                className: s.container,
                style: o,
                children: n.map(function (i) {
                  return (0, m.jsx)(He, De({}, i), i.title);
                }),
              })
            : null;
        },
        Me = Fe;
    },
  },
]);
