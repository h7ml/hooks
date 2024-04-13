'use strict';
(self.webpackChunk_dext7r_hooks = self.webpackChunk_dext7r_hooks || []).push([
  [3022],
  {
    44727: function (x, t, e) {
      e.d(t, {
        Z: function () {
          return C;
        },
      });
      var g = e(91010),
        b = e(50959),
        n = {
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
          theme: 'filled',
        },
        j = n,
        ae = e(82017),
        E = function (u, m) {
          return b.createElement(ae.Z, (0, g.Z)({}, u, { ref: m, icon: j }));
        },
        he = b.forwardRef(E),
        C = he;
    },
    65033: function (x, t, e) {
      e.d(t, {
        Z: function () {
          return C;
        },
      });
      var g = e(91010),
        b = e(50959),
        n = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z',
                },
              },
            ],
          },
          name: 'right',
          theme: 'outlined',
        },
        j = n,
        ae = e(82017),
        E = function (u, m) {
          return b.createElement(ae.Z, (0, g.Z)({}, u, { ref: m, icon: j }));
        },
        he = b.forwardRef(E),
        C = he;
    },
    10319: function (x, t, e) {
      e.d(t, {
        F: function () {
          return E;
        },
      });
      var g = e(97821),
        b = e(5053);
      function n() {
        return (0, b.Z)();
      }
      var j = { useBreakpoint: n },
        ae = e(50959),
        E = function () {
          var C = j.useBreakpoint();
          return (0, ae.useMemo)(
            function () {
              return (0, g.f)(C);
            },
            [C],
          );
        };
    },
    34214: function (x, t, e) {
      e.d(t, {
        ZP: function () {
          return E;
        },
        c4: function () {
          return n;
        },
      });
      var g = e(50959),
        b = e(73465);
      const n = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
        j = (C) => ({
          xs: `(max-width: ${C.screenXSMax}px)`,
          sm: `(min-width: ${C.screenSM}px)`,
          md: `(min-width: ${C.screenMD}px)`,
          lg: `(min-width: ${C.screenLG}px)`,
          xl: `(min-width: ${C.screenXL}px)`,
          xxl: `(min-width: ${C.screenXXL}px)`,
        }),
        ae = (C) => {
          const d = C,
            u = [].concat(n).reverse();
          return (
            u.forEach((m, F) => {
              const z = m.toUpperCase(),
                S = `screen${z}Min`,
                W = `screen${z}`;
              if (!(d[S] <= d[W])) throw new Error(`${S}<=${W} fails : !(${d[S]}<=${d[W]})`);
              if (F < u.length - 1) {
                const D = `screen${z}Max`;
                if (!(d[W] <= d[D])) throw new Error(`${W}<=${D} fails : !(${d[W]}<=${d[D]})`);
                const Q = `screen${u[F + 1].toUpperCase()}Min`;
                if (!(d[D] <= d[Q])) throw new Error(`${D}<=${Q} fails : !(${d[D]}<=${d[Q]})`);
              }
            }),
            C
          );
        };
      function E() {
        const [, C] = (0, b.ZP)(),
          d = j(ae(C));
        return g.useMemo(() => {
          const u = new Map();
          let m = -1,
            F = {};
          return {
            matchHandlers: {},
            dispatch(z) {
              return (F = z), u.forEach((S) => S(F)), u.size >= 1;
            },
            subscribe(z) {
              return u.size || this.register(), (m += 1), u.set(m, z), z(F), m;
            },
            unsubscribe(z) {
              u.delete(z), u.size || this.unregister();
            },
            unregister() {
              Object.keys(d).forEach((z) => {
                const S = d[z],
                  W = this.matchHandlers[S];
                W == null || W.mql.removeListener(W == null ? void 0 : W.listener);
              }),
                u.clear();
            },
            register() {
              Object.keys(d).forEach((z) => {
                const S = d[z],
                  W = (fe) => {
                    let { matches: Q } = fe;
                    this.dispatch(Object.assign(Object.assign({}, F), { [z]: Q }));
                  },
                  D = window.matchMedia(S);
                D.addListener(W), (this.matchHandlers[S] = { mql: D, listener: W }), W(D);
              });
            },
            responsiveMap: d,
          };
        }, [C]);
      }
      const he = (C, d) => {
        if (d && typeof d == 'object')
          for (let u = 0; u < n.length; u++) {
            const m = n[u];
            if (C[m] && d[m] !== void 0) return d[m];
          }
      };
    },
    5053: function (x, t, e) {
      e.d(t, {
        Z: function () {
          return E;
        },
      });
      var g = e(50959),
        b = e(80918);
      function n() {
        const [, he] = g.useReducer((C) => C + 1, 0);
        return he;
      }
      var j = e(34214);
      function ae() {
        let he = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
        const C = (0, g.useRef)({}),
          d = n(),
          u = (0, j.ZP)();
        return (
          (0, b.Z)(() => {
            const m = u.subscribe((F) => {
              (C.current = F), he && d();
            });
            return () => u.unsubscribe(m);
          }, []),
          C.current
        );
      }
      var E = ae;
    },
    74885: function (x, t) {
      const e = (g) => ({
        [g.componentCls]: {
          [`${g.antCls}-motion-collapse-legacy`]: {
            overflow: 'hidden',
            '&-active': {
              transition: `height ${g.motionDurationMid} ${g.motionEaseInOut},
        opacity ${g.motionDurationMid} ${g.motionEaseInOut} !important`,
            },
          },
          [`${g.antCls}-motion-collapse`]: {
            overflow: 'hidden',
            transition: `height ${g.motionDurationMid} ${g.motionEaseInOut},
        opacity ${g.motionDurationMid} ${g.motionEaseInOut} !important`,
          },
        },
      });
      t.Z = e;
    },
    67393: function (x, t, e) {
      e.d(t, {
        $: function () {
          return We;
        },
      });
      var g = e(44727),
        b = e(91010),
        n = e(50959),
        j = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z',
                },
              },
            ],
          },
          name: 'edit',
          theme: 'outlined',
        },
        ae = j,
        E = e(82017),
        he = function (a, i) {
          return n.createElement(E.Z, (0, b.Z)({}, a, { ref: i, icon: ae }));
        },
        C = n.forwardRef(he),
        d = C,
        u = e(82187),
        m = e.n(u),
        F = e(34682),
        z = e(71783),
        S = e(80918),
        W = e(29953),
        D = e(36760),
        fe = e(78404),
        Q = e(40664),
        xe = function (a) {
          if ((0, Q.Z)() && window.document.documentElement) {
            var i = Array.isArray(a) ? a : [a],
              r = window.document.documentElement;
            return i.some(function (s) {
              return s in r.style;
            });
          }
          return !1;
        },
        Pe = function (a, i) {
          if (!xe(a)) return !1;
          var r = document.createElement('div'),
            s = r.style[a];
          return (r.style[a] = i), r.style[a] !== s;
        };
      function _(o, a) {
        return !Array.isArray(o) && a !== void 0 ? Pe(o, a) : xe(o);
      }
      var re = e(75924),
        R = function (o, a) {
          var i = {};
          for (var r in o)
            Object.prototype.hasOwnProperty.call(o, r) && a.indexOf(r) < 0 && (i[r] = o[r]);
          if (o != null && typeof Object.getOwnPropertySymbols == 'function')
            for (var s = 0, r = Object.getOwnPropertySymbols(o); s < r.length; s++)
              a.indexOf(r[s]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(o, r[s]) &&
                (i[r[s]] = o[r[s]]);
          return i;
        };
      const I = {
        border: 0,
        background: 'transparent',
        padding: 0,
        lineHeight: 'inherit',
        display: 'inline-block',
      };
      var se = n.forwardRef((o, a) => {
          const i = ($) => {
              const { keyCode: k } = $;
              k === re.Z.ENTER && $.preventDefault();
            },
            r = ($) => {
              const { keyCode: k } = $,
                { onClick: G } = o;
              k === re.Z.ENTER && G && G();
            },
            { style: s, noStyle: p, disabled: M } = o,
            O = R(o, ['style', 'noStyle', 'disabled']);
          let P = {};
          return (
            p || (P = Object.assign({}, I)),
            M && (P.pointerEvents = 'none'),
            (P = Object.assign(Object.assign({}, P), s)),
            n.createElement(
              'div',
              Object.assign({ role: 'button', tabIndex: 0, ref: a }, O, {
                onKeyDown: i,
                onKeyUp: r,
                style: P,
              }),
            )
          );
        }),
        oe = e(25765),
        Ee = e(88378),
        q = e(28426),
        Ue = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z',
                },
              },
            ],
          },
          name: 'enter',
          theme: 'outlined',
        },
        je = Ue,
        Ke = function (a, i) {
          return n.createElement(E.Z, (0, b.Z)({}, a, { ref: i, icon: je }));
        },
        $e = n.forwardRef(Ke),
        Ye = $e,
        _e = e(76189),
        Ie = e(42173);
      const qe = (o) => ({
        color: o.colorLink,
        textDecoration: 'none',
        outline: 'none',
        cursor: 'pointer',
        transition: `color ${o.motionDurationSlow}`,
        '&:focus, &:hover': { color: o.colorLinkHover },
        '&:active': { color: o.colorLinkActive },
      });
      var Fe = e(26653),
        Ze = e(22601),
        Ge = e(81275);
      const Xe = (o, a, i, r) => {
          const { titleMarginBottom: s, fontWeightStrong: p } = r;
          return { marginBottom: s, color: i, fontWeight: p, fontSize: o, lineHeight: a };
        },
        de = (o) => {
          const a = [1, 2, 3, 4, 5],
            i = {};
          return (
            a.forEach((r) => {
              i[
                `
      h${r}&,
      div&-h${r},
      div&-h${r} > textarea,
      h${r}
    `
              ] = Xe(o[`fontSizeHeading${r}`], o[`lineHeightHeading${r}`], o.colorTextHeading, o);
            }),
            i
          );
        },
        so = (o) => {
          const { componentCls: a } = o;
          return {
            'a&, a': Object.assign(Object.assign({}, qe(o)), {
              textDecoration: o.linkDecoration,
              '&:active, &:hover': { textDecoration: o.linkHoverDecoration },
              [`&[disabled], &${a}-disabled`]: {
                color: o.colorTextDisabled,
                cursor: 'not-allowed',
                '&:active, &:hover': { color: o.colorTextDisabled },
                '&:active': { pointerEvents: 'none' },
              },
            }),
          };
        },
        eo = (o) => ({
          code: {
            margin: '0 0.2em',
            paddingInline: '0.4em',
            paddingBlock: '0.2em 0.1em',
            fontSize: '85%',
            fontFamily: o.fontFamilyCode,
            background: 'rgba(150, 150, 150, 0.1)',
            border: '1px solid rgba(100, 100, 100, 0.2)',
            borderRadius: 3,
          },
          kbd: {
            margin: '0 0.2em',
            paddingInline: '0.4em',
            paddingBlock: '0.15em 0.1em',
            fontSize: '90%',
            fontFamily: o.fontFamilyCode,
            background: 'rgba(150, 150, 150, 0.06)',
            border: '1px solid rgba(100, 100, 100, 0.2)',
            borderBottomWidth: 2,
            borderRadius: 3,
          },
          mark: { padding: 0, backgroundColor: Ze.EV[2] },
          'u, ins': { textDecoration: 'underline', textDecorationSkipInk: 'auto' },
          's, del': { textDecoration: 'line-through' },
          strong: { fontWeight: 600 },
          'ul, ol': {
            marginInline: 0,
            marginBlock: '0 1em',
            padding: 0,
            li: { marginInline: '20px 0', marginBlock: 0, paddingInline: '4px 0', paddingBlock: 0 },
          },
          ul: { listStyleType: 'circle', ul: { listStyleType: 'disc' } },
          ol: { listStyleType: 'decimal' },
          'pre, blockquote': { margin: '1em 0' },
          pre: {
            padding: '0.4em 0.6em',
            whiteSpace: 'pre-wrap',
            wordWrap: 'break-word',
            background: 'rgba(150, 150, 150, 0.1)',
            border: '1px solid rgba(100, 100, 100, 0.2)',
            borderRadius: 3,
            fontFamily: o.fontFamilyCode,
            code: {
              display: 'inline',
              margin: 0,
              padding: 0,
              fontSize: 'inherit',
              fontFamily: 'inherit',
              background: 'transparent',
              border: 0,
            },
          },
          blockquote: {
            paddingInline: '0.6em 0',
            paddingBlock: 0,
            borderInlineStart: '4px solid rgba(100, 100, 100, 0.2)',
            opacity: 0.85,
          },
        }),
        go = (o) => {
          const { componentCls: a, paddingSM: i } = o,
            r = i;
          return {
            '&-edit-content': {
              position: 'relative',
              'div&': {
                insetInlineStart: o.calc(o.paddingSM).mul(-1).equal(),
                marginTop: o.calc(r).mul(-1).equal(),
                marginBottom: `calc(1em - ${(0, Ge.bf)(r)})`,
              },
              [`${a}-edit-content-confirm`]: {
                position: 'absolute',
                insetInlineEnd: o.calc(o.marginXS).add(2).equal(),
                insetBlockEnd: o.marginXS,
                color: o.colorTextDescription,
                fontWeight: 'normal',
                fontSize: o.fontSize,
                fontStyle: 'normal',
                pointerEvents: 'none',
              },
              textarea: { margin: '0!important', MozTransition: 'none', height: '1em' },
            },
          };
        },
        fo = (o) => ({
          [`${o.componentCls}-copy-success`]: {
            [`
    &,
    &:hover,
    &:focus`]: { color: o.colorSuccess },
          },
          [`${o.componentCls}-copy-icon-only`]: { marginInlineStart: 0 },
        }),
        A = () => ({
          [`
  a&-ellipsis,
  span&-ellipsis
  `]: { display: 'inline-block', maxWidth: '100%' },
          '&-single-line': { whiteSpace: 'nowrap' },
          '&-ellipsis-single-line': {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            'a&, span&': { verticalAlign: 'bottom' },
            '> code': {
              paddingBlock: 0,
              maxWidth: 'calc(100% - 1.2em)',
              display: 'inline-block',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              verticalAlign: 'bottom',
              boxSizing: 'content-box',
            },
          },
          '&-ellipsis-multiple-line': {
            display: '-webkit-box',
            overflow: 'hidden',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
          },
        }),
        yo = (o) => {
          const { componentCls: a, titleMarginTop: i } = o;
          return {
            [a]: Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(
                        Object.assign(
                          Object.assign(
                            Object.assign(
                              {
                                color: o.colorText,
                                wordBreak: 'break-word',
                                lineHeight: o.lineHeight,
                                [`&${a}-secondary`]: { color: o.colorTextDescription },
                                [`&${a}-success`]: { color: o.colorSuccess },
                                [`&${a}-warning`]: { color: o.colorWarning },
                                [`&${a}-danger`]: {
                                  color: o.colorError,
                                  'a&:active, a&:focus': { color: o.colorErrorActive },
                                  'a&:hover': { color: o.colorErrorHover },
                                },
                                [`&${a}-disabled`]: {
                                  color: o.colorTextDisabled,
                                  cursor: 'not-allowed',
                                  userSelect: 'none',
                                },
                                [`
        div&,
        p
      `]: { marginBottom: '1em' },
                              },
                              de(o),
                            ),
                            {
                              [`
      & + h1${a},
      & + h2${a},
      & + h3${a},
      & + h4${a},
      & + h5${a}
      `]: { marginTop: i },
                              [`
      div,
      ul,
      li,
      p,
      h1,
      h2,
      h3,
      h4,
      h5`]: {
                                [`
        + h1,
        + h2,
        + h3,
        + h4,
        + h5
        `]: { marginTop: i },
                              },
                            },
                          ),
                          eo(o),
                        ),
                        so(o),
                      ),
                      {
                        [`
        ${a}-expand,
        ${a}-collapse,
        ${a}-edit,
        ${a}-copy
      `]: Object.assign(Object.assign({}, qe(o)), { marginInlineStart: o.marginXXS }),
                      },
                    ),
                    go(o),
                  ),
                  fo(o),
                ),
                A(),
              ),
              { '&-rtl': { direction: 'rtl' } },
            ),
          };
        },
        Oo = () => ({ titleMarginTop: '1.2em', titleMarginBottom: '0.5em' });
      var mo = (0, Fe.I$)('Typography', (o) => [yo(o)], Oo),
        uo = (o) => {
          const {
              prefixCls: a,
              'aria-label': i,
              className: r,
              style: s,
              direction: p,
              maxLength: M,
              autoSize: O = !0,
              value: P,
              onSave: $,
              onCancel: k,
              onEnd: G,
              component: J,
              enterIcon: pe = n.createElement(Ye, null),
            } = o,
            Re = n.useRef(null),
            T = n.useRef(!1),
            H = n.useRef(),
            [K, Be] = n.useState(P);
          n.useEffect(() => {
            Be(P);
          }, [P]),
            n.useEffect(() => {
              if (Re.current && Re.current.resizableTextArea) {
                const { textArea: Se } = Re.current.resizableTextArea;
                Se.focus();
                const { length: we } = Se.value;
                Se.setSelectionRange(we, we);
              }
            }, []);
          const me = (Se) => {
              let { target: we } = Se;
              Be(we.value.replace(/[\n\r]/g, ''));
            },
            ke = () => {
              T.current = !0;
            },
            Le = () => {
              T.current = !1;
            },
            De = (Se) => {
              let { keyCode: we } = Se;
              T.current || (H.current = we);
            },
            to = () => {
              $(K.trim());
            },
            Qe = (Se) => {
              let { keyCode: we, ctrlKey: Je, altKey: co, metaKey: xo, shiftKey: Co } = Se;
              H.current === we &&
                !T.current &&
                !Je &&
                !co &&
                !xo &&
                !Co &&
                (we === re.Z.ENTER ? (to(), G == null || G()) : we === re.Z.ESC && k());
            },
            ze = () => {
              to();
            },
            V = J ? `${a}-${J}` : '',
            [X, ue, ve] = mo(a),
            no = m()(a, `${a}-edit-content`, { [`${a}-rtl`]: p === 'rtl' }, r, V, ue, ve);
          return X(
            n.createElement(
              'div',
              { className: no, style: s },
              n.createElement(Ie.Z, {
                ref: Re,
                maxLength: M,
                value: K,
                onChange: me,
                onKeyDown: De,
                onKeyUp: Qe,
                onCompositionStart: ke,
                onCompositionEnd: Le,
                onBlur: ze,
                'aria-label': i,
                rows: 1,
                autoSize: O,
              }),
              pe !== null ? (0, _e.Tm)(pe, { className: `${a}-edit-content-confirm` }) : null,
            ),
          );
        },
        ko = e(874),
        oo = e.n(ko),
        ro = function (o, a, i, r) {
          function s(p) {
            return p instanceof i
              ? p
              : new i(function (M) {
                  M(p);
                });
          }
          return new (i || (i = Promise))(function (p, M) {
            function O(k) {
              try {
                $(r.next(k));
              } catch (G) {
                M(G);
              }
            }
            function P(k) {
              try {
                $(r.throw(k));
              } catch (G) {
                M(G);
              }
            }
            function $(k) {
              k.done ? p(k.value) : s(k.value).then(O, P);
            }
            $((r = r.apply(o, a || [])).next());
          });
        },
        vo = (o) => {
          let { copyConfig: a, children: i } = o;
          const [r, s] = n.useState(!1),
            [p, M] = n.useState(!1),
            O = n.useRef(null),
            P = () => {
              O.current && clearTimeout(O.current);
            },
            $ = {};
          return (
            a.format && ($.format = a.format),
            n.useEffect(() => P, []),
            {
              copied: r,
              copyLoading: p,
              onClick: (k) =>
                ro(void 0, void 0, void 0, function* () {
                  var G;
                  k == null || k.preventDefault(), k == null || k.stopPropagation(), M(!0);
                  try {
                    const J = typeof a.text == 'function' ? yield a.text() : a.text;
                    oo()(J || String(i) || '', $),
                      M(!1),
                      s(!0),
                      P(),
                      (O.current = setTimeout(() => {
                        s(!1);
                      }, 3e3)),
                      (G = a.onCopy) === null || G === void 0 || G.call(a, k);
                  } catch (J) {
                    throw (M(!1), J);
                  }
                }),
            }
          );
        };
      function ho(o, a) {
        return n.useMemo(() => {
          const i = !!o;
          return [i, Object.assign(Object.assign({}, a), i && typeof o == 'object' ? o : null)];
        }, [o]);
      }
      var Ro = (o, a) => {
          const i = n.useRef(!1);
          n.useEffect(() => {
            i.current ? o() : (i.current = !0);
          }, a);
        },
        jo = function (o, a) {
          var i = {};
          for (var r in o)
            Object.prototype.hasOwnProperty.call(o, r) && a.indexOf(r) < 0 && (i[r] = o[r]);
          if (o != null && typeof Object.getOwnPropertySymbols == 'function')
            for (var s = 0, r = Object.getOwnPropertySymbols(o); s < r.length; s++)
              a.indexOf(r[s]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(o, r[s]) &&
                (i[r[s]] = o[r[s]]);
          return i;
        },
        nn = n.forwardRef((o, a) => {
          const {
              prefixCls: i,
              component: r = 'article',
              className: s,
              rootClassName: p,
              setContentRef: M,
              children: O,
              direction: P,
              style: $,
            } = o,
            k = jo(o, [
              'prefixCls',
              'component',
              'className',
              'rootClassName',
              'setContentRef',
              'children',
              'direction',
              'style',
            ]),
            { getPrefixCls: G, direction: J, typography: pe } = n.useContext(oe.E_),
            Re = P != null ? P : J;
          let T = a;
          M && (T = (0, fe.sQ)(a, M));
          const H = G('typography', i),
            [K, Be, me] = mo(H),
            ke = m()(
              H,
              pe == null ? void 0 : pe.className,
              { [`${H}-rtl`]: Re === 'rtl' },
              s,
              p,
              Be,
              me,
            ),
            Le = Object.assign(Object.assign({}, pe == null ? void 0 : pe.style), $);
          return K(n.createElement(r, Object.assign({ className: ke, style: Le, ref: T }, k), O));
        }),
        tn = e(92065),
        Fo = e(1534),
        kn = e(61054);
      function Do(o) {
        return o === !1 ? [!1, !1] : Array.isArray(o) ? o : [o];
      }
      function Eo(o, a, i) {
        return o === !0 || o === void 0 ? a : o || (i && a);
      }
      function Io(o) {
        const {
            prefixCls: a,
            copied: i,
            locale: r = {},
            onCopy: s,
            iconOnly: p,
            tooltips: M,
            icon: O,
            loading: P,
          } = o,
          $ = Do(M),
          k = Do(O),
          { copied: G, copy: J } = r,
          pe = i ? Eo($[1], G) : Eo($[0], J),
          T = typeof pe == 'string' ? pe : i ? G : J;
        return n.createElement(
          q.Z,
          { key: 'copy', title: pe },
          n.createElement(
            se,
            {
              className: m()(`${a}-copy`, { [`${a}-copy-success`]: i, [`${a}-copy-icon-only`]: p }),
              onClick: s,
              'aria-label': T,
            },
            i
              ? Eo(k[1], n.createElement(Fo.Z, null), !0)
              : Eo(k[0], P ? n.createElement(tn.Z, null) : n.createElement(kn.Z, null), !0),
          ),
        );
      }
      var vn = e(83288);
      const Po = n.forwardRef((o, a) => {
        let { style: i, children: r } = o;
        const s = n.useRef(null);
        return (
          n.useImperativeHandle(a, () => ({
            isExceed: () => {
              const p = s.current;
              return p.scrollHeight > p.clientHeight;
            },
            getHeight: () => s.current.clientHeight,
          })),
          n.createElement(
            'span',
            {
              'aria-hidden': !0,
              ref: s,
              style: Object.assign(
                {
                  position: 'fixed',
                  display: 'block',
                  left: 0,
                  top: 0,
                  pointerEvents: 'none',
                  backgroundColor: 'rgba(255, 0, 0, 0.65)',
                },
                i,
              ),
            },
            r,
          )
        );
      });
      function Vo(o) {
        const a = typeof o;
        return a === 'string' || a === 'number';
      }
      function Sn(o) {
        let a = 0;
        return (
          o.forEach((i) => {
            Vo(i) ? (a += String(i).length) : (a += 1);
          }),
          a
        );
      }
      function Go(o, a) {
        let i = 0;
        const r = [];
        for (let s = 0; s < o.length; s += 1) {
          if (i === a) return r;
          const p = o[s],
            O = Vo(p) ? String(p).length : 1,
            P = i + O;
          if (P > a) {
            const $ = a - i;
            return r.push(String(p).slice(0, $)), r;
          }
          r.push(p), (i = P);
        }
        return o;
      }
      const Qo = 0,
        Yo = 1,
        Xo = 2,
        To = 3,
        Bo = { display: '-webkit-box', overflow: 'hidden', WebkitBoxOrient: 'vertical' };
      function an(o) {
        const {
            enableMeasure: a,
            width: i,
            text: r,
            children: s,
            rows: p,
            expanded: M,
            miscDeps: O,
            onEllipsis: P,
          } = o,
          $ = n.useMemo(() => (0, z.Z)(r), [r]),
          k = n.useMemo(() => Sn($), [r]),
          G = n.useMemo(() => s($, !1), [r]),
          [J, pe] = n.useState(null),
          Re = n.useRef(null),
          T = n.useRef(null),
          H = n.useRef(null),
          K = n.useRef(null),
          [Be, me] = n.useState(!1),
          [ke, Le] = n.useState(Qo),
          [De, to] = n.useState(0);
        (0, S.Z)(() => {
          Le(a && i && k ? Yo : Qo);
        }, [i, r, p, a, $]),
          (0, S.Z)(() => {
            var X, ue, ve, no;
            if (ke === Yo) {
              const Se = !!(!((X = T.current) === null || X === void 0) && X.isExceed());
              Le(Se ? Xo : To), pe(Se ? [0, k] : null), me(Se);
              const we =
                  ((ue = T.current) === null || ue === void 0 ? void 0 : ue.getHeight()) || 0,
                Je =
                  p === 1
                    ? 0
                    : ((ve = H.current) === null || ve === void 0 ? void 0 : ve.getHeight()) || 0,
                co = ((no = K.current) === null || no === void 0 ? void 0 : no.getHeight()) || 0,
                xo = Je + co,
                Co = Math.max(we, xo);
              to(Co + 1), P(Se);
            }
          }, [ke]);
        const Qe = J ? Math.ceil((J[0] + J[1]) / 2) : 0;
        (0, S.Z)(() => {
          var X;
          const [ue, ve] = J || [0, 0];
          if (ue !== ve) {
            const Se =
              (((X = Re.current) === null || X === void 0 ? void 0 : X.getHeight()) || 0) > De;
            let we = Qe;
            ve - ue === 1 && (we = Se ? ue : ve), pe(Se ? [ue, we] : [we, ve]);
          }
        }, [J, Qe]);
        const ze = n.useMemo(
            () => {
              if (ke !== Xo || !J || J[0] !== J[1]) {
                const X = s($, !1);
                return ke !== To && ke !== Qo
                  ? n.createElement(
                      'span',
                      { style: Object.assign(Object.assign({}, Bo), { WebkitLineClamp: p }) },
                      X,
                    )
                  : X;
              }
              return s(M ? $ : Go($, J[0]), Be);
            },
            [M, ke, J, $].concat((0, vn.Z)(O)),
          ),
          V = { width: i, whiteSpace: 'normal', margin: 0, padding: 0 };
        return n.createElement(
          n.Fragment,
          null,
          ze,
          ke === Yo &&
            n.createElement(
              n.Fragment,
              null,
              n.createElement(
                Po,
                {
                  style: Object.assign(Object.assign(Object.assign({}, V), Bo), {
                    WebkitLineClamp: p,
                  }),
                  ref: T,
                },
                G,
              ),
              n.createElement(
                Po,
                {
                  style: Object.assign(Object.assign(Object.assign({}, V), Bo), {
                    WebkitLineClamp: p - 1,
                  }),
                  ref: H,
                },
                G,
              ),
              n.createElement(
                Po,
                {
                  style: Object.assign(Object.assign(Object.assign({}, V), Bo), {
                    WebkitLineClamp: 1,
                  }),
                  ref: K,
                },
                s([], !0),
              ),
            ),
          ke === Xo &&
            J &&
            J[0] !== J[1] &&
            n.createElement(
              Po,
              { style: Object.assign(Object.assign({}, V), { top: 400 }), ref: Re },
              s(Go($, Qe), !0),
            ),
        );
      }
      var xn = (o) => {
          let { enableEllipsis: a, isEllipsis: i, children: r, tooltipProps: s } = o;
          return !(s != null && s.title) || !a
            ? r
            : n.createElement(q.Z, Object.assign({ open: i ? void 0 : !1 }, s), r);
        },
        So = function (o, a) {
          var i = {};
          for (var r in o)
            Object.prototype.hasOwnProperty.call(o, r) && a.indexOf(r) < 0 && (i[r] = o[r]);
          if (o != null && typeof Object.getOwnPropertySymbols == 'function')
            for (var s = 0, r = Object.getOwnPropertySymbols(o); s < r.length; s++)
              a.indexOf(r[s]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(o, r[s]) &&
                (i[r[s]] = o[r[s]]);
          return i;
        };
      function Rn(o, a) {
        let { mark: i, code: r, underline: s, delete: p, strong: M, keyboard: O, italic: P } = o,
          $ = a;
        function k(G, J) {
          J && ($ = n.createElement(G, {}, $));
        }
        return (
          k('strong', M),
          k('u', s),
          k('del', p),
          k('code', r),
          k('mark', i),
          k('kbd', O),
          k('i', P),
          $
        );
      }
      const Cn = '...';
      var Jo = n.forwardRef((o, a) => {
          var i, r, s;
          const {
              prefixCls: p,
              className: M,
              style: O,
              type: P,
              disabled: $,
              children: k,
              ellipsis: G,
              editable: J,
              copyable: pe,
              component: Re,
              title: T,
            } = o,
            H = So(o, [
              'prefixCls',
              'className',
              'style',
              'type',
              'disabled',
              'children',
              'ellipsis',
              'editable',
              'copyable',
              'component',
              'title',
            ]),
            { getPrefixCls: K, direction: Be } = n.useContext(oe.E_),
            [me] = (0, Ee.Z)('Text'),
            ke = n.useRef(null),
            Le = n.useRef(null),
            De = K('typography', p),
            to = (0, D.Z)(H, [
              'mark',
              'code',
              'delete',
              'underline',
              'strong',
              'keyboard',
              'italic',
            ]),
            [Qe, ze] = ho(J),
            [V, X] = (0, W.Z)(!1, { value: ze.editing }),
            { triggerType: ue = ['icon'] } = ze,
            ve = (B) => {
              var ge;
              B && ((ge = ze.onStart) === null || ge === void 0 || ge.call(ze)), X(B);
            };
          Ro(() => {
            var B;
            V || (B = Le.current) === null || B === void 0 || B.focus();
          }, [V]);
          const no = (B) => {
              B == null || B.preventDefault(), ve(!0);
            },
            Se = (B) => {
              var ge;
              (ge = ze.onChange) === null || ge === void 0 || ge.call(ze, B), ve(!1);
            },
            we = () => {
              var B;
              (B = ze.onCancel) === null || B === void 0 || B.call(ze), ve(!1);
            },
            [Je, co] = ho(pe),
            { copied: xo, copyLoading: Co, onClick: Zo } = vo({ copyConfig: co, children: k }),
            [zo, qo] = n.useState(!1),
            [Uo, en] = n.useState(!1),
            [bn, Un] = n.useState(!1),
            [Dn, Kn] = n.useState(!1),
            [Vn, Gn] = n.useState(!0),
            [Mo, Ne] = ho(G, {
              expandable: !1,
              symbol: (B) =>
                B ? (me == null ? void 0 : me.collapse) : me == null ? void 0 : me.expand,
            }),
            [po, Qn] = (0, W.Z)(Ne.defaultExpanded || !1, { value: Ne.expanded }),
            ao = Mo && (!po || Ne.expandable === 'collapsible'),
            { rows: Ko = 1 } = Ne,
            mn = n.useMemo(
              () => ao && (Ne.suffix !== void 0 || Ne.onEllipsis || Ne.expandable || Qe || Je),
              [ao, Ne, Qe, Je],
            );
          (0, S.Z)(() => {
            Mo && !mn && (qo(_('webkitLineClamp')), en(_('textOverflow')));
          }, [mn, Mo]);
          const [bo, Yn] = n.useState(ao),
            In = n.useMemo(() => (mn ? !1 : Ko === 1 ? Uo : zo), [mn, Uo, zo]);
          (0, S.Z)(() => {
            Yn(In && ao);
          }, [In, ao]);
          const Pn = ao && (bo ? Dn : bn),
            Xn = ao && Ko === 1 && bo,
            hn = ao && Ko > 1 && bo,
            Jn = (B, ge) => {
              var io;
              Qn(ge.expanded), (io = Ne.onExpand) === null || io === void 0 || io.call(Ne, B, ge);
            },
            [$n, _n] = n.useState(0),
            qn = (B) => {
              let { offsetWidth: ge } = B;
              _n(ge);
            },
            et = (B) => {
              var ge;
              Un(B), bn !== B && ((ge = Ne.onEllipsis) === null || ge === void 0 || ge.call(Ne, B));
            };
          n.useEffect(() => {
            const B = ke.current;
            if (Mo && bo && B) {
              const ge = hn ? B.offsetHeight < B.scrollHeight : B.offsetWidth < B.scrollWidth;
              Dn !== ge && Kn(ge);
            }
          }, [Mo, bo, k, hn, Vn, $n]),
            n.useEffect(() => {
              const B = ke.current;
              if (typeof IntersectionObserver == 'undefined' || !B || !bo || !ao) return;
              const ge = new IntersectionObserver(() => {
                Gn(!!B.offsetParent);
              });
              return (
                ge.observe(B),
                () => {
                  ge.disconnect();
                }
              );
            }, [bo, ao]);
          let Ao = {};
          Ne.tooltip === !0
            ? (Ao = { title: (i = ze.text) !== null && i !== void 0 ? i : k })
            : n.isValidElement(Ne.tooltip)
              ? (Ao = { title: Ne.tooltip })
              : typeof Ne.tooltip == 'object'
                ? (Ao = Object.assign(
                    { title: (r = ze.text) !== null && r !== void 0 ? r : k },
                    Ne.tooltip,
                  ))
                : (Ao = { title: Ne.tooltip });
          const yn = n.useMemo(() => {
            const B = (ge) => ['string', 'number'].includes(typeof ge);
            if (!(!Mo || bo)) {
              if (B(ze.text)) return ze.text;
              if (B(k)) return k;
              if (B(T)) return T;
              if (B(Ao.title)) return Ao.title;
            }
          }, [Mo, bo, T, Ao.title, Pn]);
          if (V)
            return n.createElement(uo, {
              value: (s = ze.text) !== null && s !== void 0 ? s : typeof k == 'string' ? k : '',
              onSave: Se,
              onCancel: we,
              onEnd: ze.onEnd,
              prefixCls: De,
              className: M,
              style: O,
              direction: Be,
              component: Re,
              maxLength: ze.maxLength,
              autoSize: ze.autoSize,
              enterIcon: ze.enterIcon,
            });
          const ot = () => {
              const { expandable: B, symbol: ge } = Ne;
              return !B || (po && B !== 'collapsible')
                ? null
                : n.createElement(
                    'a',
                    {
                      key: 'expand',
                      className: `${De}-${po ? 'collapse' : 'expand'}`,
                      onClick: (io) => Jn(io, { expanded: !po }),
                      'aria-label': po ? me.collapse : me == null ? void 0 : me.expand,
                    },
                    typeof ge == 'function' ? ge(po) : ge,
                  );
            },
            nt = () => {
              if (!Qe) return;
              const { icon: B, tooltip: ge } = ze,
                io = (0, z.Z)(ge)[0] || (me == null ? void 0 : me.edit),
                on = typeof io == 'string' ? io : '';
              return ue.includes('icon')
                ? n.createElement(
                    q.Z,
                    { key: 'edit', title: ge === !1 ? '' : io },
                    n.createElement(
                      se,
                      { ref: Le, className: `${De}-edit`, onClick: no, 'aria-label': on },
                      B || n.createElement(d, { role: 'button' }),
                    ),
                  )
                : null;
            },
            tt = () =>
              Je
                ? n.createElement(
                    Io,
                    Object.assign({ key: 'copy' }, co, {
                      prefixCls: De,
                      copied: xo,
                      locale: me,
                      onCopy: Zo,
                      loading: Co,
                      iconOnly: k == null,
                    }),
                  )
                : null,
            at = (B) => [B && ot(), nt(), tt()],
            rt = (B) => [
              B && !po && n.createElement('span', { 'aria-hidden': !0, key: 'ellipsis' }, Cn),
              Ne.suffix,
              at(B),
            ];
          return n.createElement(F.Z, { onResize: qn, disabled: !ao }, (B) =>
            n.createElement(
              xn,
              { tooltipProps: Ao, enableEllipsis: ao, isEllipsis: Pn },
              n.createElement(
                nn,
                Object.assign(
                  {
                    className: m()(
                      {
                        [`${De}-${P}`]: P,
                        [`${De}-disabled`]: $,
                        [`${De}-ellipsis`]: Mo,
                        [`${De}-single-line`]: ao && Ko === 1,
                        [`${De}-ellipsis-single-line`]: Xn,
                        [`${De}-ellipsis-multiple-line`]: hn,
                      },
                      M,
                    ),
                    prefixCls: p,
                    style: Object.assign(Object.assign({}, O), {
                      WebkitLineClamp: hn ? Ko : void 0,
                    }),
                    component: Re,
                    ref: (0, fe.sQ)(B, ke, a),
                    direction: Be,
                    onClick: ue.includes('text') ? no : void 0,
                    'aria-label': yn == null ? void 0 : yn.toString(),
                    title: T,
                  },
                  to,
                ),
                n.createElement(
                  an,
                  {
                    enableMeasure: ao && !bo,
                    text: k,
                    rows: Ko,
                    width: $n,
                    onEllipsis: et,
                    expanded: po,
                    miscDeps: [xo, po, Co],
                  },
                  (ge, io) => {
                    let on = ge;
                    return (
                      ge.length &&
                        io &&
                        !po &&
                        yn &&
                        (on = n.createElement(
                          'span',
                          { key: 'show-content', 'aria-hidden': !0 },
                          on,
                        )),
                      Rn(o, n.createElement(n.Fragment, null, on, rt(io)))
                    );
                  },
                ),
              ),
            ),
          );
        }),
        rn = function (o, a) {
          var i = {};
          for (var r in o)
            Object.prototype.hasOwnProperty.call(o, r) && a.indexOf(r) < 0 && (i[r] = o[r]);
          if (o != null && typeof Object.getOwnPropertySymbols == 'function')
            for (var s = 0, r = Object.getOwnPropertySymbols(o); s < r.length; s++)
              a.indexOf(r[s]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(o, r[s]) &&
                (i[r[s]] = o[r[s]]);
          return i;
        },
        ln = n.forwardRef((o, a) => {
          var { ellipsis: i, rel: r } = o,
            s = rn(o, ['ellipsis', 'rel']);
          const p = Object.assign(Object.assign({}, s), {
            rel: r === void 0 && s.target === '_blank' ? 'noopener noreferrer' : r,
          });
          return (
            delete p.navigate,
            n.createElement(Jo, Object.assign({}, p, { ref: a, ellipsis: !!i, component: 'a' }))
          );
        }),
        zn = n.forwardRef((o, a) =>
          n.createElement(Jo, Object.assign({ ref: a }, o, { component: 'div' })),
        ),
        Mn = function (o, a) {
          var i = {};
          for (var r in o)
            Object.prototype.hasOwnProperty.call(o, r) && a.indexOf(r) < 0 && (i[r] = o[r]);
          if (o != null && typeof Object.getOwnPropertySymbols == 'function')
            for (var s = 0, r = Object.getOwnPropertySymbols(o); s < r.length; s++)
              a.indexOf(r[s]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(o, r[s]) &&
                (i[r[s]] = o[r[s]]);
          return i;
        };
      const An = (o, a) => {
        var { ellipsis: i } = o,
          r = Mn(o, ['ellipsis']);
        const s = n.useMemo(
          () => (i && typeof i == 'object' ? (0, D.Z)(i, ['expandable', 'rows']) : i),
          [i],
        );
        return n.createElement(
          Jo,
          Object.assign({ ref: a }, r, { ellipsis: s, component: 'span' }),
        );
      };
      var On = n.forwardRef(An),
        cn = function (o, a) {
          var i = {};
          for (var r in o)
            Object.prototype.hasOwnProperty.call(o, r) && a.indexOf(r) < 0 && (i[r] = o[r]);
          if (o != null && typeof Object.getOwnPropertySymbols == 'function')
            for (var s = 0, r = Object.getOwnPropertySymbols(o); s < r.length; s++)
              a.indexOf(r[s]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(o, r[s]) &&
                (i[r[s]] = o[r[s]]);
          return i;
        };
      const sn = [1, 2, 3, 4, 5];
      var Hn = n.forwardRef((o, a) => {
        const { level: i = 1 } = o,
          r = cn(o, ['level']);
        let s;
        return (
          sn.includes(i) ? (s = `h${i}`) : (s = 'h1'),
          n.createElement(Jo, Object.assign({ ref: a }, r, { component: s }))
        );
      });
      const wo = nn;
      (wo.Text = On), (wo.Link = ln), (wo.Title = Hn), (wo.Paragraph = zn);
      var $o = wo,
        En = e(12775),
        dn = e(51540);
      const Tn = (o) => {
          const {
            componentCls: a,
            sizePaddingEdgeHorizontal: i,
            colorSplit: r,
            lineWidth: s,
            textPaddingInline: p,
            orientationMargin: M,
            verticalMarginInline: O,
          } = o;
          return {
            [a]: Object.assign(Object.assign({}, (0, En.Wf)(o)), {
              borderBlockStart: `${(0, Ge.bf)(s)} solid ${r}`,
              '&-vertical': {
                position: 'relative',
                top: '-0.06em',
                display: 'inline-block',
                height: '0.9em',
                marginInline: O,
                marginBlock: 0,
                verticalAlign: 'middle',
                borderTop: 0,
                borderInlineStart: `${(0, Ge.bf)(s)} solid ${r}`,
              },
              '&-horizontal': {
                display: 'flex',
                clear: 'both',
                width: '100%',
                minWidth: '100%',
                margin: `${(0, Ge.bf)(o.dividerHorizontalGutterMargin)} 0`,
              },
              [`&-horizontal${a}-with-text`]: {
                display: 'flex',
                alignItems: 'center',
                margin: `${(0, Ge.bf)(o.dividerHorizontalWithTextGutterMargin)} 0`,
                color: o.colorTextHeading,
                fontWeight: 500,
                fontSize: o.fontSizeLG,
                whiteSpace: 'nowrap',
                textAlign: 'center',
                borderBlockStart: `0 ${r}`,
                '&::before, &::after': {
                  position: 'relative',
                  width: '50%',
                  borderBlockStart: `${(0, Ge.bf)(s)} solid transparent`,
                  borderBlockStartColor: 'inherit',
                  borderBlockEnd: 0,
                  transform: 'translateY(50%)',
                  content: "''",
                },
              },
              [`&-horizontal${a}-with-text-left`]: {
                '&::before': { width: `calc(${M} * 100%)` },
                '&::after': { width: `calc(100% - ${M} * 100%)` },
              },
              [`&-horizontal${a}-with-text-right`]: {
                '&::before': { width: `calc(100% - ${M} * 100%)` },
                '&::after': { width: `calc(${M} * 100%)` },
              },
              [`${a}-inner-text`]: { display: 'inline-block', paddingBlock: 0, paddingInline: p },
              '&-dashed': {
                background: 'none',
                borderColor: r,
                borderStyle: 'dashed',
                borderWidth: `${(0, Ge.bf)(s)} 0 0`,
              },
              [`&-horizontal${a}-with-text${a}-dashed`]: {
                '&::before, &::after': { borderStyle: 'dashed none none' },
              },
              [`&-vertical${a}-dashed`]: {
                borderInlineStartWidth: s,
                borderInlineEnd: 0,
                borderBlockStart: 0,
                borderBlockEnd: 0,
              },
              [`&-plain${a}-with-text`]: {
                color: o.colorText,
                fontWeight: 'normal',
                fontSize: o.fontSize,
              },
              [`&-horizontal${a}-with-text-left${a}-no-default-orientation-margin-left`]: {
                '&::before': { width: 0 },
                '&::after': { width: '100%' },
                [`${a}-inner-text`]: { paddingInlineStart: i },
              },
              [`&-horizontal${a}-with-text-right${a}-no-default-orientation-margin-right`]: {
                '&::before': { width: '100%' },
                '&::after': { width: 0 },
                [`${a}-inner-text`]: { paddingInlineEnd: i },
              },
            }),
          };
        },
        Lo = (o) => ({
          textPaddingInline: '1em',
          orientationMargin: 0.05,
          verticalMarginInline: o.marginXS,
        });
      var un = (0, Fe.I$)(
          'Divider',
          (o) => {
            const a = (0, dn.TS)(o, {
              dividerHorizontalWithTextGutterMargin: o.margin,
              dividerHorizontalGutterMargin: o.marginLG,
              sizePaddingEdgeHorizontal: 0,
            });
            return [Tn(a)];
          },
          Lo,
          { unitless: { orientationMargin: !0 } },
        ),
        gn = function (o, a) {
          var i = {};
          for (var r in o)
            Object.prototype.hasOwnProperty.call(o, r) && a.indexOf(r) < 0 && (i[r] = o[r]);
          if (o != null && typeof Object.getOwnPropertySymbols == 'function')
            for (var s = 0, r = Object.getOwnPropertySymbols(o); s < r.length; s++)
              a.indexOf(r[s]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(o, r[s]) &&
                (i[r[s]] = o[r[s]]);
          return i;
        },
        No = (o) => {
          const { getPrefixCls: a, direction: i, divider: r } = n.useContext(oe.E_),
            {
              prefixCls: s,
              type: p = 'horizontal',
              orientation: M = 'center',
              orientationMargin: O,
              className: P,
              rootClassName: $,
              children: k,
              dashed: G,
              plain: J,
              style: pe,
            } = o,
            Re = gn(o, [
              'prefixCls',
              'type',
              'orientation',
              'orientationMargin',
              'className',
              'rootClassName',
              'children',
              'dashed',
              'plain',
              'style',
            ]),
            T = a('divider', s),
            [H, K, Be] = un(T),
            me = M.length > 0 ? `-${M}` : M,
            ke = !!k,
            Le = M === 'left' && O != null,
            De = M === 'right' && O != null,
            to = m()(
              T,
              r == null ? void 0 : r.className,
              K,
              Be,
              `${T}-${p}`,
              {
                [`${T}-with-text`]: ke,
                [`${T}-with-text${me}`]: ke,
                [`${T}-dashed`]: !!G,
                [`${T}-plain`]: !!J,
                [`${T}-rtl`]: i === 'rtl',
                [`${T}-no-default-orientation-margin-left`]: Le,
                [`${T}-no-default-orientation-margin-right`]: De,
              },
              P,
              $,
            ),
            Qe = n.useMemo(() => (typeof O == 'number' ? O : /^\d+$/.test(O) ? Number(O) : O), [O]),
            ze = Object.assign(
              Object.assign({}, Le && { marginLeft: Qe }),
              De && { marginRight: Qe },
            );
          return H(
            n.createElement(
              'div',
              Object.assign(
                {
                  className: to,
                  style: Object.assign(Object.assign({}, r == null ? void 0 : r.style), pe),
                },
                Re,
                { role: 'separator' },
              ),
              k &&
                p !== 'vertical' &&
                n.createElement('span', { className: `${T}-inner-text`, style: ze }, k),
            ),
          );
        };
      function _o(o) {
        return ['small', 'middle', 'large'].includes(o);
      }
      function fn(o) {
        return o ? typeof o == 'number' && !Number.isNaN(o) : !1;
      }
      var lo = e(63096);
      const pn = n.createContext({ latestIndex: 0 }),
        Wn = pn.Provider;
      var c = (o) => {
          let { className: a, index: i, children: r, split: s, style: p } = o;
          const { latestIndex: M } = n.useContext(pn);
          return r == null
            ? null
            : n.createElement(
                n.Fragment,
                null,
                n.createElement('div', { className: a, style: p }, r),
                i < M && s && n.createElement('span', { className: `${a}-split` }, s),
              );
        },
        f = e(11275),
        v = function (o, a) {
          var i = {};
          for (var r in o)
            Object.prototype.hasOwnProperty.call(o, r) && a.indexOf(r) < 0 && (i[r] = o[r]);
          if (o != null && typeof Object.getOwnPropertySymbols == 'function')
            for (var s = 0, r = Object.getOwnPropertySymbols(o); s < r.length; s++)
              a.indexOf(r[s]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(o, r[s]) &&
                (i[r[s]] = o[r[s]]);
          return i;
        };
      const w = n.forwardRef((o, a) => {
        var i, r;
        const { getPrefixCls: s, space: p, direction: M } = n.useContext(oe.E_),
          {
            size: O = (p == null ? void 0 : p.size) || 'small',
            align: P,
            className: $,
            rootClassName: k,
            children: G,
            direction: J = 'horizontal',
            prefixCls: pe,
            split: Re,
            style: T,
            wrap: H = !1,
            classNames: K,
            styles: Be,
          } = o,
          me = v(o, [
            'size',
            'align',
            'className',
            'rootClassName',
            'children',
            'direction',
            'prefixCls',
            'split',
            'style',
            'wrap',
            'classNames',
            'styles',
          ]),
          [ke, Le] = Array.isArray(O) ? O : [O, O],
          De = _o(Le),
          to = _o(ke),
          Qe = fn(Le),
          ze = fn(ke),
          V = (0, z.Z)(G, { keepEmpty: !0 }),
          X = P === void 0 && J === 'horizontal' ? 'center' : P,
          ue = s('space', pe),
          [ve, no, Se] = (0, f.Z)(ue),
          we = m()(
            ue,
            p == null ? void 0 : p.className,
            no,
            `${ue}-${J}`,
            {
              [`${ue}-rtl`]: M === 'rtl',
              [`${ue}-align-${X}`]: X,
              [`${ue}-gap-row-${Le}`]: De,
              [`${ue}-gap-col-${ke}`]: to,
            },
            $,
            k,
            Se,
          ),
          Je = m()(
            `${ue}-item`,
            (i = K == null ? void 0 : K.item) !== null && i !== void 0
              ? i
              : (r = p == null ? void 0 : p.classNames) === null || r === void 0
                ? void 0
                : r.item,
          );
        let co = 0;
        const xo = V.map((zo, qo) => {
            var Uo, en;
            zo != null && (co = qo);
            const bn = (zo && zo.key) || `${Je}-${qo}`;
            return n.createElement(
              c,
              {
                className: Je,
                key: bn,
                index: qo,
                split: Re,
                style:
                  (Uo = Be == null ? void 0 : Be.item) !== null && Uo !== void 0
                    ? Uo
                    : (en = p == null ? void 0 : p.styles) === null || en === void 0
                      ? void 0
                      : en.item,
              },
              zo,
            );
          }),
          Co = n.useMemo(() => ({ latestIndex: co }), [co]);
        if (V.length === 0) return null;
        const Zo = {};
        return (
          H && (Zo.flexWrap = 'wrap'),
          !to && ze && (Zo.columnGap = ke),
          !De && Qe && (Zo.rowGap = Le),
          ve(
            n.createElement(
              'div',
              Object.assign(
                {
                  ref: a,
                  className: we,
                  style: Object.assign(
                    Object.assign(Object.assign({}, Zo), p == null ? void 0 : p.style),
                    T,
                  ),
                },
                me,
              ),
              n.createElement(Wn, { value: Co }, xo),
            ),
          )
        );
      });
      w.Compact = lo.ZP;
      var N = w,
        ne = e(10319),
        te = e(33743),
        Y = e(97477),
        ee = e(45217),
        Z = e(77668),
        le = e(86910),
        ce = e(97442),
        Me,
        ie = (0, ce.kc)(function (o) {
          var a = o.css,
            i = o.token;
          return a(
            Me ||
              (Me = (0, le.Z)([
                `
      cursor: pointer;
      &:hover {
        background: `,
                `;
        border-radius: 4px;
      }
      pre {
        background: none !important;
        padding: 2px 8px !important;
        margin: 0;
      }
      code[class*='language-'] {
        background: none !important;
      }
    `,
              ])),
            i.colorFillSecondary,
          );
        }),
        h = e(11527),
        U = function (a) {
          var i = a.children,
            r = ie(),
            s = r.styles,
            p = r.theme,
            M = (0, ne.F)(),
            O = M.mobile,
            P = (0, Z.M)(),
            $ = P.copied,
            k = P.setCopied;
          return (0, h.jsx)(q.Z, {
            placement: O ? void 0 : 'right',
            title: $
              ? (0, h.jsxs)(h.Fragment, {
                  children: [
                    (0, h.jsx)(Fo.Z, { style: { color: p.colorSuccess } }),
                    ' \u590D\u5236\u6210\u529F',
                  ],
                })
              : '\u590D\u5236',
            children: (0, h.jsx)('div', {
              className: s,
              onClick: function () {
                oo()(i), k();
              },
              children: (0, h.jsx)(Y.oP, {
                background: !1,
                type: 'prism',
                copyable: !1,
                syntaxThemes: { prism: { dark: ee.YC, light: ee.vs } },
                language: 'js',
                children: i,
              }),
            }),
          });
        },
        Te = U,
        Ae,
        be,
        ye,
        Oe,
        He,
        Ce = (0, ce.kc)(function (o) {
          var a = o.css,
            i = o.token,
            r = o.responsive,
            s = o.stylish;
          return {
            title: a(
              Ae ||
                (Ae = (0, le.Z)([
                  `
    font-family: monospace;
    `,
                  ` {
      margin-block: 0;
      font-size: 32px !important;
    }
  `,
                ])),
              r.mobile,
            ),
            label: a(
              be ||
                (be = (0, le.Z)([
                  `
    width: 80px;
  `,
                ])),
            ),
            desc: a(
              ye ||
                (ye = (0, le.Z)([
                  `
    font-size: `,
                  `px;
    line-height: `,
                  `px;
  `,
                ])),
              i.fontSizeLG,
              i.lineHeightLG,
            ),
            text: a(
              Oe ||
                (Oe = (0, le.Z)([
                  `
    `,
                  `
  `,
                ])),
              s.clickableText,
            ),
            meta: a(He || (He = (0, le.Z)(['']))),
          };
        }),
        We = (0, n.memo)(function (o) {
          var a = o.title,
            i = o.componentName,
            r = o.description,
            s = o.defaultImport,
            p = o.pkg,
            M = o.sourceUrl,
            O = o.docUrl,
            P = o.serviceList,
            $ = P === void 0 ? [] : P,
            k = Ce(),
            G = k.styles,
            J = (0, ne.F)(),
            pe = J.mobile,
            Re = [
              M && { icon: (0, h.jsx)(g.Z, {}), children: '\u67E5\u770B\u6E90\u7801', url: M },
              O && { icon: (0, h.jsx)(d, {}), children: '\u7F16\u8F91\u6587\u6863', url: O },
            ].filter(function (H) {
              return H;
            }),
            T = s
              ? 'import '.concat(i, " from '").concat(p, "';")
              : 'import { '.concat(i, " } from '").concat(p, "';");
          return (0, h.jsxs)(te.D, {
            children: [
              (0, h.jsx)($o.Title, { className: G.title, children: a }),
              r &&
                (0, h.jsx)('div', {
                  children: (0, h.jsx)($o.Text, {
                    type: 'secondary',
                    className: G.desc,
                    children: r,
                  }),
                }),
              (0, h.jsxs)(te.D, {
                style: { marginTop: 16 },
                gap: pe ? 16 : 24,
                children: [
                  (0, h.jsxs)(te.D, {
                    horizontal: !pe,
                    gap: pe ? 12 : 0,
                    children: [
                      (0, h.jsx)($o.Text, {
                        className: G.label,
                        type: 'secondary',
                        style: { display: 'flex', alignItems: 'center' },
                        children: '\u5F15\u5165\u65B9\u6CD5',
                      }),
                      (0, h.jsx)(Te, { children: T }),
                    ],
                  }),
                  (0, h.jsx)(No, { dashed: !0, style: { margin: '2px 0' } }),
                  (0, h.jsxs)(te.D, {
                    horizontal: !pe,
                    gap: pe ? 24 : 0,
                    distribution: 'space-between',
                    children: [
                      (0, h.jsx)(N, {
                        split: (0, h.jsx)(No, { type: 'vertical' }),
                        wrap: !0,
                        children: $.map(function (H) {
                          return (0, h.jsx)(
                            'a',
                            {
                              href: H.url,
                              target: '_blank',
                              rel: 'noreferrer',
                              title: H.label,
                              children: (0, h.jsxs)(te.D, {
                                horizontal: !0,
                                align: 'center',
                                gap: 8,
                                className: G.text,
                                children: [
                                  (0, h.jsx)(h.Fragment, { children: H.icon }),
                                  (0, h.jsx)(h.Fragment, { children: H.children }),
                                ],
                              }),
                            },
                            H.label,
                          );
                        }),
                      }),
                      (0, h.jsx)(N, {
                        split: (0, h.jsx)(No, { type: 'vertical' }),
                        className: G.meta,
                        children: Re.map(function (H) {
                          return (0, h.jsx)(
                            'a',
                            {
                              href: H.url,
                              target: '_blank',
                              rel: 'noreferrer',
                              children: (0, h.jsxs)(te.D, {
                                horizontal: !0,
                                align: 'center',
                                gap: 8,
                                className: G.text,
                                children: [
                                  (0, h.jsx)(h.Fragment, { children: H.icon }),
                                  (0, h.jsx)(h.Fragment, { children: H.children }),
                                ],
                              }),
                            },
                            H.url,
                          );
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        });
    },
    44567: function (x, t, e) {
      e.d(t, {
        Z: function () {
          return xe;
        },
      });
      var g = e(35194),
        b = e(68185),
        n = e(50446),
        j = e(50959),
        ae = e(82187),
        E = e.n(ae),
        he = function (_) {
          var re = _.prefixCls,
            R = _.icon,
            I = _.title,
            L = _.items,
            se = L === void 0 ? [] : L,
            oe = _.style,
            Ee = _.className;
          return j.createElement(
            'div',
            { className: E()(''.concat(re, '-column'), Ee), style: oe },
            (I || R) &&
              j.createElement(
                'h2',
                null,
                R && j.createElement('span', { className: ''.concat(re, '-column-icon') }, R),
                I,
              ),
            se.map(function (q, Ue) {
              var je = q.LinkComponent || 'a';
              return j.createElement(
                'div',
                { className: E()(''.concat(re, '-item'), q.className), style: q.style, key: Ue },
                j.createElement(
                  je,
                  {
                    href: q.url,
                    to: typeof je != 'string' ? q.url : void 0,
                    target: q.openExternal ? '_blank' : void 0,
                    rel: q.openExternal ? 'noopener noreferrer' : void 0,
                  },
                  q.icon &&
                    j.createElement('span', { className: ''.concat(re, '-item-icon') }, q.icon),
                  q.title,
                ),
                q.description &&
                  j.createElement(
                    j.Fragment,
                    null,
                    j.createElement('span', { className: ''.concat(re, '-item-separator') }, '-'),
                    j.createElement(
                      'span',
                      { className: ''.concat(re, '-item-description') },
                      q.description,
                    ),
                  ),
              );
            }),
          );
        },
        C = he,
        d = [
          'prefixCls',
          'className',
          'style',
          'bottom',
          'columns',
          'maxColumnsPerRow',
          'backgroundColor',
          'columnLayout',
          'theme',
        ],
        u = function (_) {
          var re = _.prefixCls,
            R = re === void 0 ? 'rc-footer' : re,
            I = _.className,
            L = _.style,
            se = _.bottom,
            oe = _.columns,
            Ee = _.maxColumnsPerRow,
            q = _.backgroundColor,
            Ue = _.columnLayout,
            je = _.theme,
            Ke = je === void 0 ? 'dark' : je,
            $e = (0, n.Z)(_, d),
            Ye = E()(''.concat(R), I, (0, b.Z)({}, ''.concat(R, '-').concat(Ke), !!Ke)),
            _e = typeof Ee == 'number' && Ee > 0;
          return j.createElement(
            'footer',
            (0, g.Z)(
              (0, g.Z)({}, $e),
              {},
              { className: Ye, style: (0, g.Z)((0, g.Z)({}, L), {}, { backgroundColor: q }) },
            ),
            j.createElement(
              'section',
              { className: ''.concat(R, '-container') },
              oe &&
                oe.length > 0 &&
                j.createElement(
                  'section',
                  {
                    className: ''.concat(R, '-columns'),
                    style: { justifyContent: Ue, flexWrap: _e ? 'wrap' : void 0 },
                  },
                  oe.map(function (Ie, qe) {
                    var Fe = Ie.title,
                      Ze = Ie.icon,
                      Ge = Ie.style,
                      Xe = Ie.className,
                      de = Ie.items,
                      so = de === void 0 ? [] : de,
                      eo = (0, g.Z)({}, Ge);
                    return (
                      _e && (eo.flex = '0 0 '.concat(100 / (Ee + 1) + 0.1, '%')),
                      j.createElement(C, {
                        key: qe,
                        prefixCls: R,
                        title: Fe,
                        icon: Ze,
                        items: so,
                        style: eo,
                        className: Xe,
                      })
                    );
                  }),
                ),
            ),
            se &&
              j.createElement(
                'section',
                { className: ''.concat(R, '-bottom') },
                j.createElement('div', { className: ''.concat(R, '-bottom-container') }, se),
              ),
          );
        },
        m = u,
        F = e(86910),
        z = e(97442),
        S,
        W,
        D = (0, z.kc)(function (Pe, _) {
          var re = Pe.css,
            R = Pe.responsive,
            I = Pe.token,
            L = 'rc-footer';
          return {
            container: re(
              S ||
                (S = (0, F.Z)([
                  `
      grid-area: footer;
      border-top: 1px solid `,
                  `;
      color: `,
                  `;
      text-align: center;
      align-self: stretch;

      `,
                  ` {
        border: none;
        flex-direction: column;
      }
    `,
                ])),
              I.colorSplit,
              I.colorTextDescription,
              R.mobile,
            ),
            footer: re(
              W ||
                (W = (0, F.Z)([
                  `
      color: `,
                  `;
      font-size: 14px;
      line-height: 1.5;
      background-color: `,
                  `;

      &.`,
                  ` {
        a {
          color: `,
                  `;
          text-decoration: none;
          transition: all 0.3s;

          &:hover {
            color: `,
                  `;
          }
        }
      }

      .`,
                  ` {
        &-container {
          width: 100%;
          max-width: `,
                  `px;
          margin: auto;
          padding: `,
                  `;
        }

        &-columns {
          display: flex;
          justify-content: space-around;
        }

        &-column {
          h2 {
            position: relative;
            margin: 0 auto;
            color: `,
                  `;
            font-weight: 500;
            font-size: 16px;
          }

          &-icon {
            position: relative;
            top: -1px;
            display: inline-block;
            width: 22px;
            text-align: center;
            vertical-align: middle;
            margin-inline-end: 0.5em;

            > span,
            > svg,
            img {
              display: block;
              width: 100%;
            }
          }
        }

        &-item {
          margin: 12px 0;

          &-icon {
            position: relative;
            top: -1px;
            display: inline-block;
            width: 16px;
            text-align: center;
            vertical-align: middle;
            margin-inline-end: 0.4em;

            > span,
            > svg,
            img {
              display: block;
              width: 100%;
            }
          }

          &-separator {
            margin: 0 0.3em;
          }
        }

        &-bottom {
          &-container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 16px 0;
            font-size: 16px;
            line-height: 32px;
            text-align: center;
            border-top: 1px solid `,
                  `;
          }
        }

        &-light {
          color: rgba(0, 0, 0, 0.85);
          background-color: transparent;

          h2,
          a {
            color: rgba(0, 0, 0, 0.85);
          }
        }

        &-light &-bottom-container {
          border-top-color: #e8e8e8;
        }

        &-light &-item-separator,
        &-light &-item-description {
          color: rgba(0, 0, 0, 0.45);
        }
      }

      `,
                  ` {
        .`,
                  ` {
          text-align: center;

          &-container {
            padding: 40px 0;
          }

          &-columns {
            display: block;
          }

          &-column {
            display: block;
            margin-bottom: 40px;

            &:last-child {
              margin-bottom: 0;
            }
          }
        }
      }
    `,
                ])),
              I.colorTextSecondary,
              I.colorBgLayout,
              L,
              I.colorTextTertiary,
              I.colorLinkHover,
              L,
              I.contentMaxWidth,
              _ ? '0' : '60px 0 20px',
              I.colorText,
              _ ? 'transparent' : I.colorBorderSecondary,
              R.mobile,
              L,
            ),
          };
        }),
        fe = e(11527),
        Q = function (_) {
          var re = _.columns,
            R = _.bottom,
            I = _.theme,
            L = !re || (re == null ? void 0 : re.length) === 0,
            se = D(L),
            oe = se.styles;
          return (0, fe.jsx)('div', {
            className: oe.container,
            children: (0, fe.jsx)(m, { theme: I, className: oe.footer, columns: re, bottom: R }),
          });
        },
        xe = Q;
    },
    87462: function (x, t, e) {
      e.d(t, {
        Z: function () {
          return re;
        },
      });
      var g = e(95925),
        b = e(83110),
        n = e(50283),
        j = e(33743),
        ae = e(67269),
        E = e(86910),
        he = e(97442),
        C,
        d = (0, he.kc)(function (R) {
          var I = R.css,
            L = R.stylish;
          return {
            button: I(
              C ||
                (C = (0, E.Z)([
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
              L.heroButtonGradient,
              L.heroGradientFlow,
            ),
          };
        }),
        u = e(11527),
        m = function (I) {
          var L = I.children,
            se = d(),
            oe = se.styles;
          return (0, u.jsx)(b.ZP, {
            size: 'large',
            shape: 'round',
            type: 'primary',
            className: oe.button,
            children: L,
          });
        },
        F = m,
        z,
        S,
        W,
        D,
        fe,
        Q,
        xe,
        Pe = (0, he.kc)(function (R) {
          var I = R.css,
            L = R.responsive,
            se = R.token,
            oe = R.stylish,
            Ee = R.isDarkMode;
          return {
            container: I(
              z ||
                (z = (0, E.Z)([
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
              se.colorTextSecondary,
              L({ mobile: { fontSize: 16 } }),
            ),
            titleContainer: I(
              S ||
                (S = (0, E.Z)([
                  `
    position: relative;
  `,
                ])),
            ),
            title: I(
              W ||
                (W = (0, E.Z)([
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
              se.fontFamily,
              L({ mobile: { fontSize: 40 } }),
              oe.heroGradient,
              oe.heroGradientFlow,
            ),
            titleShadow: I(
              D ||
                (D = (0, E.Z)([
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
              Ee ? se.colorWhite : se.colorTextBase,
              se.fontFamily,
              L({ mobile: { fontSize: 40 } }),
              oe.heroTextShadow,
            ),
            desc: I(
              fe ||
                (fe = (0, E.Z)([
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
              se.fontSizeHeading3,
              se.colorTextSecondary,
              L.mobile,
              se.fontSizeHeading5,
            ),
            actions: I(
              Q ||
                (Q = (0, E.Z)([
                  `
    margin-top: 48px;
    display: flex;
    justify-content: center;

    `,
                  `
  `,
                ])),
              L({ mobile: { marginTop: 24 } }),
            ),
            canvas: I(
              xe ||
                (xe = (0, E.Z)([
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
              oe.heroBlurBall,
              L.mobile,
            ),
          };
        }),
        _ = function (I) {
          var L = I.title,
            se = I.description,
            oe = I.actions,
            Ee = Pe(),
            q = Ee.styles,
            Ue = Ee.cx;
          return (0, u.jsxs)(j.D, {
            horizontal: !0,
            distribution: 'center',
            className: q.container,
            children: [
              (0, u.jsx)('div', { className: q.canvas }),
              (0, u.jsxs)(ae.Z, {
                children: [
                  L &&
                    (0, u.jsxs)('div', {
                      className: q.titleContainer,
                      children: [
                        (0, u.jsx)('h1', {
                          className: q.title,
                          dangerouslySetInnerHTML: { __html: L },
                        }),
                        (0, u.jsx)('div', {
                          className: Ue(q.titleShadow),
                          dangerouslySetInnerHTML: { __html: L },
                        }),
                      ],
                    }),
                  se &&
                    (0, u.jsx)('p', { className: q.desc, dangerouslySetInnerHTML: { __html: se } }),
                  !!(oe != null && oe.length) &&
                    (0, u.jsx)(g.ZP, {
                      theme: { token: { fontSize: 16, controlHeight: 40 } },
                      children: (0, u.jsx)(j.D, {
                        horizontal: !0,
                        gap: 24,
                        className: q.actions,
                        children: oe.map(function (je, Ke) {
                          var $e = je.text,
                            Ye = je.link,
                            _e = je.openExternal,
                            Ie = /^(https?:)?\/\//i.test(Ye),
                            qe =
                              Ke === 0
                                ? (0, u.jsx)(F, { children: $e })
                                : (0, u.jsx)(b.ZP, {
                                    size: 'large',
                                    shape: 'round',
                                    type: 'default',
                                    children: $e,
                                  });
                          return Ie
                            ? (0, u.jsx)(
                                'a',
                                {
                                  href: Ye,
                                  target: '_blank',
                                  rel: 'noopener noreferrer',
                                  children: qe,
                                },
                                ''.concat($e, '-').concat(Ke),
                              )
                            : (0, u.jsx)(
                                n.rU,
                                {
                                  to: Ye,
                                  target: _e ? '_blank' : void 0,
                                  rel: 'noreferrer',
                                  children: qe,
                                },
                                $e,
                              );
                        }),
                      }),
                    }),
                ],
              }),
            ],
          });
        },
        re = _;
    },
    27046: function (x, t, e) {
      e.d(t, {
        Z: function () {
          return Wn;
        },
      });
      var g = e(30309),
        b = e(91010),
        n = e(50959),
        j = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0048.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z',
                },
              },
            ],
          },
          name: 'arrow-down',
          theme: 'outlined',
        },
        ae = j,
        E = e(82017),
        he = function (c, f) {
          return n.createElement(E.Z, (0, b.Z)({}, c, { ref: f, icon: ae }));
        },
        C = n.forwardRef(he),
        d = C,
        u = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z',
                },
              },
            ],
          },
          name: 'menu',
          theme: 'outlined',
        },
        m = u,
        F = function (c, f) {
          return n.createElement(E.Z, (0, b.Z)({}, c, { ref: f, icon: m }));
        },
        z = n.forwardRef(F),
        S = z,
        W = e(95925),
        D = e(65033),
        fe = e(82187),
        Q = e.n(fe),
        xe = e(83288),
        Pe = e(69223),
        _ = e(29953),
        re = e(24694),
        R = e(50446),
        I = e(71783),
        L = e(68185),
        se = e(10091),
        oe = e(75924),
        Ee = n.forwardRef(function (l, c) {
          var f = l.prefixCls,
            v = l.forceRender,
            y = l.className,
            w = l.style,
            N = l.children,
            ne = l.isActive,
            te = l.role,
            Y = n.useState(ne || v),
            ee = (0, g.Z)(Y, 2),
            Z = ee[0],
            le = ee[1];
          return (
            n.useEffect(
              function () {
                (v || ne) && le(!0);
              },
              [v, ne],
            ),
            Z
              ? n.createElement(
                  'div',
                  {
                    ref: c,
                    className: Q()(
                      ''.concat(f, '-content'),
                      (0, L.Z)(
                        (0, L.Z)({}, ''.concat(f, '-content-active'), ne),
                        ''.concat(f, '-content-inactive'),
                        !ne,
                      ),
                      y,
                    ),
                    style: w,
                    role: te,
                  },
                  n.createElement('div', { className: ''.concat(f, '-content-box') }, N),
                )
              : null
          );
        });
      Ee.displayName = 'PanelContent';
      var q = Ee,
        Ue = [
          'showArrow',
          'headerClass',
          'isActive',
          'onItemClick',
          'forceRender',
          'className',
          'prefixCls',
          'collapsible',
          'accordion',
          'panelKey',
          'extra',
          'header',
          'expandIcon',
          'openMotion',
          'destroyInactivePanel',
          'children',
        ],
        je = n.forwardRef(function (l, c) {
          var f = l.showArrow,
            v = f === void 0 ? !0 : f,
            y = l.headerClass,
            w = l.isActive,
            N = l.onItemClick,
            ne = l.forceRender,
            te = l.className,
            Y = l.prefixCls,
            ee = l.collapsible,
            Z = l.accordion,
            le = l.panelKey,
            ce = l.extra,
            Me = l.header,
            ie = l.expandIcon,
            h = l.openMotion,
            U = l.destroyInactivePanel,
            Te = l.children,
            Ae = (0, R.Z)(l, Ue),
            be = ee === 'disabled',
            ye = ee === 'header',
            Oe = ee === 'icon',
            He = ce != null && typeof ce != 'boolean',
            Ce = function () {
              N == null || N(le);
            },
            We = function (p) {
              (p.key === 'Enter' || p.keyCode === oe.Z.ENTER || p.which === oe.Z.ENTER) && Ce();
            },
            o = typeof ie == 'function' ? ie(l) : n.createElement('i', { className: 'arrow' });
          o &&
            (o = n.createElement(
              'div',
              {
                className: ''.concat(Y, '-expand-icon'),
                onClick: ['header', 'icon'].includes(ee) ? Ce : void 0,
              },
              o,
            ));
          var a = Q()(
              (0, L.Z)(
                (0, L.Z)((0, L.Z)({}, ''.concat(Y, '-item'), !0), ''.concat(Y, '-item-active'), w),
                ''.concat(Y, '-item-disabled'),
                be,
              ),
              te,
            ),
            i = Q()(
              y,
              (0, L.Z)(
                (0, L.Z)(
                  (0, L.Z)({}, ''.concat(Y, '-header'), !0),
                  ''.concat(Y, '-header-collapsible-only'),
                  ye,
                ),
                ''.concat(Y, '-icon-collapsible-only'),
                Oe,
              ),
            ),
            r = { className: i, 'aria-expanded': w, 'aria-disabled': be, onKeyDown: We };
          return (
            !ye &&
              !Oe &&
              ((r.onClick = Ce), (r.role = Z ? 'tab' : 'button'), (r.tabIndex = be ? -1 : 0)),
            n.createElement(
              'div',
              (0, b.Z)({}, Ae, { ref: c, className: a }),
              n.createElement(
                'div',
                r,
                v && o,
                n.createElement(
                  'span',
                  {
                    className: ''.concat(Y, '-header-text'),
                    onClick: ee === 'header' ? Ce : void 0,
                  },
                  Me,
                ),
                He && n.createElement('div', { className: ''.concat(Y, '-extra') }, ce),
              ),
              n.createElement(
                se.ZP,
                (0, b.Z)({ visible: w, leavedClassName: ''.concat(Y, '-content-hidden') }, h, {
                  forceRender: ne,
                  removeOnLeave: U,
                }),
                function (s, p) {
                  var M = s.className,
                    O = s.style;
                  return n.createElement(
                    q,
                    {
                      ref: p,
                      prefixCls: Y,
                      className: M,
                      style: O,
                      isActive: w,
                      forceRender: ne,
                      role: Z ? 'tabpanel' : void 0,
                    },
                    Te,
                  );
                },
              ),
            )
          );
        }),
        Ke = je,
        $e = ['children', 'label', 'key', 'collapsible', 'onItemClick', 'destroyInactivePanel'],
        Ye = function (c, f) {
          var v = f.prefixCls,
            y = f.accordion,
            w = f.collapsible,
            N = f.destroyInactivePanel,
            ne = f.onItemClick,
            te = f.activeKey,
            Y = f.openMotion,
            ee = f.expandIcon;
          return c.map(function (Z, le) {
            var ce = Z.children,
              Me = Z.label,
              ie = Z.key,
              h = Z.collapsible,
              U = Z.onItemClick,
              Te = Z.destroyInactivePanel,
              Ae = (0, R.Z)(Z, $e),
              be = String(ie != null ? ie : le),
              ye = h != null ? h : w,
              Oe = Te != null ? Te : N,
              He = function (o) {
                ye !== 'disabled' && (ne(o), U == null || U(o));
              },
              Ce = !1;
            return (
              y ? (Ce = te[0] === be) : (Ce = te.indexOf(be) > -1),
              n.createElement(
                Ke,
                (0, b.Z)({}, Ae, {
                  prefixCls: v,
                  key: be,
                  panelKey: be,
                  isActive: Ce,
                  accordion: y,
                  openMotion: Y,
                  expandIcon: ee,
                  header: Me,
                  collapsible: ye,
                  onItemClick: He,
                  destroyInactivePanel: Oe,
                }),
                ce,
              )
            );
          });
        },
        _e = function (c, f, v) {
          if (!c) return null;
          var y = v.prefixCls,
            w = v.accordion,
            N = v.collapsible,
            ne = v.destroyInactivePanel,
            te = v.onItemClick,
            Y = v.activeKey,
            ee = v.openMotion,
            Z = v.expandIcon,
            le = c.key || String(f),
            ce = c.props,
            Me = ce.header,
            ie = ce.headerClass,
            h = ce.destroyInactivePanel,
            U = ce.collapsible,
            Te = ce.onItemClick,
            Ae = !1;
          w ? (Ae = Y[0] === le) : (Ae = Y.indexOf(le) > -1);
          var be = U != null ? U : N,
            ye = function (Ce) {
              be !== 'disabled' && (te(Ce), Te == null || Te(Ce));
            },
            Oe = {
              key: le,
              panelKey: le,
              header: Me,
              headerClass: ie,
              isActive: Ae,
              prefixCls: y,
              destroyInactivePanel: h != null ? h : ne,
              openMotion: ee,
              accordion: w,
              children: c.props.children,
              onItemClick: ye,
              expandIcon: Z,
              collapsible: be,
            };
          return typeof c.type == 'string'
            ? c
            : (Object.keys(Oe).forEach(function (He) {
                typeof Oe[He] == 'undefined' && delete Oe[He];
              }),
              n.cloneElement(c, Oe));
        };
      function Ie(l, c, f) {
        return Array.isArray(l)
          ? Ye(l, f)
          : (0, I.Z)(c).map(function (v, y) {
              return _e(v, y, f);
            });
      }
      var qe = Ie,
        Fe = e(50361);
      function Ze(l) {
        var c = l;
        if (!Array.isArray(c)) {
          var f = (0, Pe.Z)(c);
          c = f === 'number' || f === 'string' ? [c] : [];
        }
        return c.map(function (v) {
          return String(v);
        });
      }
      var Ge = n.forwardRef(function (l, c) {
          var f = l.prefixCls,
            v = f === void 0 ? 'rc-collapse' : f,
            y = l.destroyInactivePanel,
            w = y === void 0 ? !1 : y,
            N = l.style,
            ne = l.accordion,
            te = l.className,
            Y = l.children,
            ee = l.collapsible,
            Z = l.openMotion,
            le = l.expandIcon,
            ce = l.activeKey,
            Me = l.defaultActiveKey,
            ie = l.onChange,
            h = l.items,
            U = Q()(v, te),
            Te = (0, _.Z)([], {
              value: ce,
              onChange: function (We) {
                return ie == null ? void 0 : ie(We);
              },
              defaultValue: Me,
              postState: Ze,
            }),
            Ae = (0, g.Z)(Te, 2),
            be = Ae[0],
            ye = Ae[1],
            Oe = function (We) {
              return ye(function () {
                if (ne) return be[0] === We ? [] : [We];
                var o = be.indexOf(We),
                  a = o > -1;
                return a
                  ? be.filter(function (i) {
                      return i !== We;
                    })
                  : [].concat((0, xe.Z)(be), [We]);
              });
            };
          (0, re.ZP)(
            !Y,
            '[rc-collapse] `children` will be removed in next major version. Please use `items` instead.',
          );
          var He = qe(h, Y, {
            prefixCls: v,
            accordion: ne,
            openMotion: Z,
            expandIcon: le,
            collapsible: ee,
            destroyInactivePanel: w,
            onItemClick: Oe,
            activeKey: be,
          });
          return n.createElement(
            'div',
            (0, b.Z)(
              { ref: c, className: U, style: N, role: ne ? 'tablist' : void 0 },
              (0, Fe.Z)(l, { aria: !0, data: !0 }),
            ),
            He,
          );
        }),
        Xe = Object.assign(Ge, { Panel: Ke }),
        de = Xe,
        so = Xe.Panel,
        eo = e(36760),
        go = e(20292),
        fo = e(76189),
        A = e(25765),
        yo = e(92881),
        mo = n.forwardRef((l, c) => {
          const { getPrefixCls: f } = n.useContext(A.E_),
            { prefixCls: v, className: y, showArrow: w = !0 } = l,
            N = f('collapse', v),
            ne = Q()({ [`${N}-no-arrow`]: !w }, y);
          return n.createElement(
            de.Panel,
            Object.assign({ ref: c }, l, { prefixCls: N, className: ne }),
          );
        }),
        Ve = e(81275),
        uo = e(12775),
        ko = e(74885),
        oo = e(26653),
        ro = e(51540);
      const Ho = (l) => {
          const {
              componentCls: c,
              contentBg: f,
              padding: v,
              headerBg: y,
              headerPadding: w,
              collapseHeaderPaddingSM: N,
              collapseHeaderPaddingLG: ne,
              collapsePanelBorderRadius: te,
              lineWidth: Y,
              lineType: ee,
              colorBorder: Z,
              colorText: le,
              colorTextHeading: ce,
              colorTextDisabled: Me,
              fontSizeLG: ie,
              lineHeight: h,
              lineHeightLG: U,
              marginSM: Te,
              paddingSM: Ae,
              paddingLG: be,
              paddingXS: ye,
              motionDurationSlow: Oe,
              fontSizeIcon: He,
              contentPadding: Ce,
              fontHeight: We,
              fontHeightLG: o,
            } = l,
            a = `${(0, Ve.bf)(Y)} ${ee} ${Z}`;
          return {
            [c]: Object.assign(Object.assign({}, (0, uo.Wf)(l)), {
              backgroundColor: y,
              border: a,
              borderBottom: 0,
              borderRadius: te,
              ['&-rtl']: { direction: 'rtl' },
              [`& > ${c}-item`]: {
                borderBottom: a,
                ['&:last-child']: {
                  [`
            &,
            & > ${c}-header`]: { borderRadius: `0 0 ${(0, Ve.bf)(te)} ${(0, Ve.bf)(te)}` },
                },
                [`> ${c}-header`]: {
                  position: 'relative',
                  display: 'flex',
                  flexWrap: 'nowrap',
                  alignItems: 'flex-start',
                  padding: w,
                  color: ce,
                  lineHeight: h,
                  cursor: 'pointer',
                  transition: `all ${Oe}, visibility 0s`,
                  [`> ${c}-header-text`]: { flex: 'auto' },
                  '&:focus': { outline: 'none' },
                  [`${c}-expand-icon`]: {
                    height: We,
                    display: 'flex',
                    alignItems: 'center',
                    paddingInlineEnd: Te,
                  },
                  [`${c}-arrow`]: Object.assign(Object.assign({}, (0, uo.Ro)()), {
                    fontSize: He,
                    svg: { transition: `transform ${Oe}` },
                  }),
                  [`${c}-header-text`]: { marginInlineEnd: 'auto' },
                },
                [`${c}-icon-collapsible-only`]: {
                  cursor: 'unset',
                  [`${c}-expand-icon`]: { cursor: 'pointer' },
                },
              },
              [`${c}-content`]: {
                color: le,
                backgroundColor: f,
                borderTop: a,
                [`& > ${c}-content-box`]: { padding: Ce },
                ['&-hidden']: { display: 'none' },
              },
              ['&-small']: {
                [`> ${c}-item`]: {
                  [`> ${c}-header`]: {
                    padding: N,
                    paddingInlineStart: ye,
                    [`> ${c}-expand-icon`]: { marginInlineStart: l.calc(Ae).sub(ye).equal() },
                  },
                  [`> ${c}-content > ${c}-content-box`]: { padding: Ae },
                },
              },
              ['&-large']: {
                [`> ${c}-item`]: {
                  fontSize: ie,
                  lineHeight: U,
                  [`> ${c}-header`]: {
                    padding: ne,
                    paddingInlineStart: v,
                    [`> ${c}-expand-icon`]: {
                      height: o,
                      marginInlineStart: l.calc(be).sub(v).equal(),
                    },
                  },
                  [`> ${c}-content > ${c}-content-box`]: { padding: be },
                },
              },
              [`${c}-item:last-child`]: {
                [`> ${c}-content`]: { borderRadius: `0 0 ${(0, Ve.bf)(te)} ${(0, Ve.bf)(te)}` },
              },
              [`& ${c}-item-disabled > ${c}-header`]: {
                [`
          &,
          & > .arrow
        `]: { color: Me, cursor: 'not-allowed' },
              },
              [`&${c}-icon-position-end`]: {
                [`& > ${c}-item`]: {
                  [`> ${c}-header`]: {
                    [`${c}-expand-icon`]: { order: 1, paddingInlineEnd: 0, paddingInlineStart: Te },
                  },
                },
              },
            }),
          };
        },
        vo = (l) => {
          const { componentCls: c } = l,
            f = `> ${c}-item > ${c}-header ${c}-arrow svg`;
          return { [`${c}-rtl`]: { [f]: { transform: 'rotate(180deg)' } } };
        },
        ho = (l) => {
          const { componentCls: c, headerBg: f, paddingXXS: v, colorBorder: y } = l;
          return {
            [`${c}-borderless`]: {
              backgroundColor: f,
              border: 0,
              [`> ${c}-item`]: { borderBottom: `1px solid ${y}` },
              [`
        > ${c}-item:last-child,
        > ${c}-item:last-child ${c}-header
      `]: { borderRadius: 0 },
              [`> ${c}-item:last-child`]: { borderBottom: 0 },
              [`> ${c}-item > ${c}-content`]: { backgroundColor: 'transparent', borderTop: 0 },
              [`> ${c}-item > ${c}-content > ${c}-content-box`]: { paddingTop: v },
            },
          };
        },
        Wo = (l) => {
          const { componentCls: c, paddingSM: f } = l;
          return {
            [`${c}-ghost`]: {
              backgroundColor: 'transparent',
              border: 0,
              [`> ${c}-item`]: {
                borderBottom: 0,
                [`> ${c}-content`]: {
                  backgroundColor: 'transparent',
                  border: 0,
                  [`> ${c}-content-box`]: { paddingBlock: f },
                },
              },
            },
          };
        },
        Ro = (l) => ({
          headerPadding: `${l.paddingSM}px ${l.padding}px`,
          headerBg: l.colorFillAlter,
          contentPadding: `${l.padding}px 16px`,
          contentBg: l.colorBgContainer,
        });
      var jo = (0, oo.I$)(
          'Collapse',
          (l) => {
            const c = (0, ro.TS)(l, {
              collapseHeaderPaddingSM: `${(0, Ve.bf)(l.paddingXS)} ${(0, Ve.bf)(l.paddingSM)}`,
              collapseHeaderPaddingLG: `${(0, Ve.bf)(l.padding)} ${(0, Ve.bf)(l.paddingLG)}`,
              collapsePanelBorderRadius: l.borderRadiusLG,
            });
            return [Ho(c), ho(c), Wo(c), vo(c), (0, ko.Z)(c)];
          },
          Ro,
        ),
        nn = Object.assign(
          n.forwardRef((l, c) => {
            const { getPrefixCls: f, direction: v, collapse: y } = n.useContext(A.E_),
              {
                prefixCls: w,
                className: N,
                rootClassName: ne,
                style: te,
                bordered: Y = !0,
                ghost: ee,
                size: Z,
                expandIconPosition: le = 'start',
                children: ce,
                expandIcon: Me,
              } = l,
              ie = (0, yo.Z)((a) => {
                var i;
                return (i = Z != null ? Z : a) !== null && i !== void 0 ? i : 'middle';
              }),
              h = f('collapse', w),
              U = f(),
              [Te, Ae, be] = jo(h),
              ye = n.useMemo(() => (le === 'left' ? 'start' : le === 'right' ? 'end' : le), [le]),
              Oe = Me != null ? Me : y == null ? void 0 : y.expandIcon,
              He = n.useCallback(
                function () {
                  let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                  const i =
                    typeof Oe == 'function'
                      ? Oe(a)
                      : n.createElement(D.Z, { rotate: a.isActive ? 90 : void 0 });
                  return (0, fo.Tm)(i, () => {
                    var r;
                    return {
                      className: Q()(
                        (r = i == null ? void 0 : i.props) === null || r === void 0
                          ? void 0
                          : r.className,
                        `${h}-arrow`,
                      ),
                    };
                  });
                },
                [Oe, h],
              ),
              Ce = Q()(
                `${h}-icon-position-${ye}`,
                {
                  [`${h}-borderless`]: !Y,
                  [`${h}-rtl`]: v === 'rtl',
                  [`${h}-ghost`]: !!ee,
                  [`${h}-${ie}`]: ie !== 'middle',
                },
                y == null ? void 0 : y.className,
                N,
                ne,
                Ae,
                be,
              ),
              We = Object.assign(Object.assign({}, (0, go.Z)(U)), {
                motionAppear: !1,
                leavedClassName: `${h}-content-hidden`,
              }),
              o = n.useMemo(
                () =>
                  ce
                    ? (0, I.Z)(ce).map((a, i) => {
                        var r, s;
                        if (!((r = a.props) === null || r === void 0) && r.disabled) {
                          const p = (s = a.key) !== null && s !== void 0 ? s : String(i),
                            { disabled: M, collapsible: O } = a.props,
                            P = Object.assign(Object.assign({}, (0, eo.Z)(a.props, ['disabled'])), {
                              key: p,
                              collapsible: O != null ? O : M ? 'disabled' : void 0,
                            });
                          return (0, fo.Tm)(a, P);
                        }
                        return a;
                      })
                    : null,
                [ce],
              );
            return Te(
              n.createElement(
                de,
                Object.assign({ ref: c, openMotion: We }, (0, eo.Z)(l, ['rootClassName']), {
                  expandIcon: He,
                  prefixCls: h,
                  className: Ce,
                  style: Object.assign(Object.assign({}, y == null ? void 0 : y.style), te),
                }),
                o,
              ),
            );
          }),
          { Panel: mo },
        ),
        tn = nn,
        Fo = e(45680),
        kn = e(10886);
      function Do(l) {
        return l != null && l === l.window;
      }
      function Eo(l, c) {
        var f, v;
        if (typeof window == 'undefined') return 0;
        const y = c ? 'scrollTop' : 'scrollLeft';
        let w = 0;
        return (
          Do(l)
            ? (w = l[c ? 'pageYOffset' : 'pageXOffset'])
            : l instanceof Document
              ? (w = l.documentElement[y])
              : (l instanceof HTMLElement || l) && (w = l[y]),
          l &&
            !Do(l) &&
            typeof w != 'number' &&
            (w =
              (v = ((f = l.ownerDocument) !== null && f !== void 0 ? f : l).documentElement) ===
                null || v === void 0
                ? void 0
                : v[y]),
          w
        );
      }
      var Io = e(79512);
      function vn(l, c, f, v) {
        const y = f - c;
        return (l /= v / 2), l < 1 ? (y / 2) * l * l * l + c : (y / 2) * ((l -= 2) * l * l + 2) + c;
      }
      function Po(l) {
        let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const { getContainer: f = () => window, callback: v, duration: y = 450 } = c,
          w = f(),
          N = Eo(w, !0),
          ne = Date.now(),
          te = () => {
            const ee = Date.now() - ne,
              Z = vn(ee > y ? y : ee, N, l, y);
            Do(w)
              ? w.scrollTo(window.pageXOffset, Z)
              : w instanceof Document || w.constructor.name === 'HTMLDocument'
                ? (w.documentElement.scrollTop = Z)
                : (w.scrollTop = Z),
              ee < y ? (0, Io.Z)(te) : typeof v == 'function' && v();
          };
        (0, Io.Z)(te);
      }
      var Vo = e(34682);
      function Sn(l) {
        let c;
        const f = (y) => () => {
            (c = null), l.apply(void 0, (0, xe.Z)(y));
          },
          v = function () {
            if (c == null) {
              for (var y = arguments.length, w = new Array(y), N = 0; N < y; N++)
                w[N] = arguments[N];
              c = (0, Io.Z)(f(w));
            }
          };
        return (
          (v.cancel = () => {
            Io.Z.cancel(c), (c = null);
          }),
          v
        );
      }
      var Go = Sn;
      const Qo = (l) => {
          const { componentCls: c } = l;
          return { [c]: { position: 'fixed', zIndex: l.zIndexPopup } };
        },
        Yo = (l) => ({ zIndexPopup: l.zIndexBase + 10 });
      var Xo = (0, oo.I$)('Affix', Qo, Yo);
      function To(l) {
        return l !== window ? l.getBoundingClientRect() : { top: 0, bottom: window.innerHeight };
      }
      function Bo(l, c, f) {
        if (f !== void 0 && Math.round(c.top) > Math.round(l.top) - f) return f + c.top;
      }
      function an(l, c, f) {
        if (f !== void 0 && Math.round(c.bottom) < Math.round(l.bottom) + f) {
          const v = window.innerHeight - c.bottom;
          return f + v;
        }
      }
      const wn = ['resize', 'scroll', 'touchstart', 'touchmove', 'touchend', 'pageshow', 'load'];
      function xn() {
        return typeof window != 'undefined' ? window : null;
      }
      var So;
      (function (l) {
        (l[(l.None = 0)] = 'None'), (l[(l.Prepare = 1)] = 'Prepare');
      })(So || (So = {}));
      var Cn = n.forwardRef((l, c) => {
          var f;
          const {
              style: v,
              offsetTop: y,
              offsetBottom: w,
              prefixCls: N,
              className: ne,
              rootClassName: te,
              children: Y,
              target: ee,
              onChange: Z,
            } = l,
            { getPrefixCls: le, getTargetContainer: ce } = n.useContext(A.E_),
            Me = le('affix', N),
            [ie, h] = n.useState(!1),
            [U, Te] = n.useState(),
            [Ae, be] = n.useState(),
            ye = n.useRef(So.None),
            Oe = n.useRef(null),
            He = n.useRef(),
            Ce = n.useRef(null),
            We = n.useRef(null),
            o = n.useRef(null),
            a = (f = ee != null ? ee : ce) !== null && f !== void 0 ? f : xn,
            i = w === void 0 && y === void 0 ? 0 : y,
            r = () => {
              if (ye.current !== So.Prepare || !We.current || !Ce.current || !a) return;
              const T = a();
              if (T) {
                const H = { status: So.None },
                  K = To(Ce.current);
                if (K.top === 0 && K.left === 0 && K.width === 0 && K.height === 0) return;
                const Be = To(T),
                  me = Bo(K, Be, i),
                  ke = an(K, Be, w);
                me !== void 0
                  ? ((H.affixStyle = {
                      position: 'fixed',
                      top: me,
                      width: K.width,
                      height: K.height,
                    }),
                    (H.placeholderStyle = { width: K.width, height: K.height }))
                  : ke !== void 0 &&
                    ((H.affixStyle = {
                      position: 'fixed',
                      bottom: ke,
                      width: K.width,
                      height: K.height,
                    }),
                    (H.placeholderStyle = { width: K.width, height: K.height })),
                  (H.lastAffix = !!H.affixStyle),
                  ie !== H.lastAffix && (Z == null || Z(H.lastAffix)),
                  (ye.current = H.status),
                  Te(H.affixStyle),
                  be(H.placeholderStyle),
                  h(H.lastAffix);
              }
            },
            s = () => {
              var T;
              (ye.current = So.Prepare), r();
            },
            p = Go(() => {
              s();
            }),
            M = Go(() => {
              if (a && U) {
                const T = a();
                if (T && Ce.current) {
                  const H = To(T),
                    K = To(Ce.current),
                    Be = Bo(K, H, i),
                    me = an(K, H, w);
                  if ((Be !== void 0 && U.top === Be) || (me !== void 0 && U.bottom === me)) return;
                }
              }
              s();
            }),
            O = () => {
              const T = a == null ? void 0 : a();
              T &&
                (wn.forEach((H) => {
                  var K;
                  He.current &&
                    ((K = Oe.current) === null ||
                      K === void 0 ||
                      K.removeEventListener(H, He.current)),
                    T == null || T.addEventListener(H, M);
                }),
                (Oe.current = T),
                (He.current = M));
            },
            P = () => {
              o.current && (clearTimeout(o.current), (o.current = null));
              const T = a == null ? void 0 : a();
              wn.forEach((H) => {
                var K;
                T == null || T.removeEventListener(H, M),
                  He.current &&
                    ((K = Oe.current) === null ||
                      K === void 0 ||
                      K.removeEventListener(H, He.current));
              }),
                p.cancel(),
                M.cancel();
            };
          n.useImperativeHandle(c, () => ({ updatePosition: p })),
            n.useEffect(() => ((o.current = setTimeout(O)), () => P()), []),
            n.useEffect(() => {
              O();
            }, [ee, U]),
            n.useEffect(() => {
              p();
            }, [ee, y, w]);
          const [$, k, G] = Xo(Me),
            J = Q()(te, k, Me, G),
            pe = Q()({ [J]: U });
          let Re = (0, eo.Z)(l, [
            'prefixCls',
            'offsetTop',
            'offsetBottom',
            'target',
            'onChange',
            'rootClassName',
          ]);
          return $(
            n.createElement(
              Vo.Z,
              { onResize: p },
              n.createElement(
                'div',
                Object.assign({ style: v, className: ne, ref: Ce }, Re),
                U && n.createElement('div', { style: Ae, 'aria-hidden': 'true' }),
                n.createElement(
                  'div',
                  { className: pe, ref: We, style: U },
                  n.createElement(Vo.Z, { onResize: p }, Y),
                ),
              ),
            ),
          );
        }),
        jn = e(28041),
        rn = n.createContext(void 0),
        ln = (l) => {
          const {
              href: c,
              title: f,
              prefixCls: v,
              children: y,
              className: w,
              target: N,
              replace: ne,
            } = l,
            te = n.useContext(rn),
            {
              registerLink: Y,
              unregisterLink: ee,
              scrollTo: Z,
              onClick: le,
              activeLink: ce,
              direction: Me,
            } = te || {};
          n.useEffect(
            () => (
              Y == null || Y(c),
              () => {
                ee == null || ee(c);
              }
            ),
            [c],
          );
          const ie = (ye) => {
              ne && (ye.preventDefault(), window.location.replace(c)),
                le == null || le(ye, { title: f, href: c }),
                Z == null || Z(c);
            },
            { getPrefixCls: h } = n.useContext(A.E_),
            U = h('anchor', v),
            Te = ce === c,
            Ae = Q()(`${U}-link`, w, { [`${U}-link-active`]: Te }),
            be = Q()(`${U}-link-title`, { [`${U}-link-title-active`]: Te });
          return n.createElement(
            'div',
            { className: Ae },
            n.createElement(
              'a',
              {
                className: be,
                href: c,
                title: typeof f == 'string' ? f : '',
                target: N,
                onClick: ie,
              },
              f,
            ),
            Me !== 'horizontal' ? y : null,
          );
        };
      const Fn = (l) => {
          const {
            componentCls: c,
            holderOffsetBlock: f,
            motionDurationSlow: v,
            lineWidthBold: y,
            colorPrimary: w,
            lineType: N,
            colorSplit: ne,
            calc: te,
          } = l;
          return {
            [`${c}-wrapper`]: {
              marginBlockStart: te(f).mul(-1).equal(),
              paddingBlockStart: f,
              [c]: Object.assign(Object.assign({}, (0, uo.Wf)(l)), {
                position: 'relative',
                paddingInlineStart: y,
                [`${c}-link`]: {
                  paddingBlock: l.linkPaddingBlock,
                  paddingInline: `${(0, Ve.bf)(l.linkPaddingInlineStart)} 0`,
                  '&-title': Object.assign(Object.assign({}, uo.vS), {
                    position: 'relative',
                    display: 'block',
                    marginBlockEnd: l.anchorTitleBlock,
                    color: l.colorText,
                    transition: `all ${l.motionDurationSlow}`,
                    '&:only-child': { marginBlockEnd: 0 },
                  }),
                  [`&-active > ${c}-link-title`]: { color: l.colorPrimary },
                  [`${c}-link`]: { paddingBlock: l.anchorPaddingBlockSecondary },
                },
              }),
              [`&:not(${c}-wrapper-horizontal)`]: {
                [c]: {
                  '&::before': {
                    position: 'absolute',
                    insetInlineStart: 0,
                    top: 0,
                    height: '100%',
                    borderInlineStart: `${(0, Ve.bf)(y)} ${N} ${ne}`,
                    content: '" "',
                  },
                  [`${c}-ink`]: {
                    position: 'absolute',
                    insetInlineStart: 0,
                    display: 'none',
                    transform: 'translateY(-50%)',
                    transition: `top ${v} ease-in-out`,
                    width: y,
                    backgroundColor: w,
                    [`&${c}-ink-visible`]: { display: 'inline-block' },
                  },
                },
              },
              [`${c}-fixed ${c}-ink ${c}-ink`]: { display: 'none' },
            },
          };
        },
        zn = (l) => {
          const { componentCls: c, motionDurationSlow: f, lineWidthBold: v, colorPrimary: y } = l;
          return {
            [`${c}-wrapper-horizontal`]: {
              position: 'relative',
              '&::before': {
                position: 'absolute',
                left: { _skip_check_: !0, value: 0 },
                right: { _skip_check_: !0, value: 0 },
                bottom: 0,
                borderBottom: `${(0, Ve.bf)(l.lineWidth)} ${l.lineType} ${l.colorSplit}`,
                content: '" "',
              },
              [c]: {
                overflowX: 'scroll',
                position: 'relative',
                display: 'flex',
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': { display: 'none' },
                [`${c}-link:first-of-type`]: { paddingInline: 0 },
                [`${c}-ink`]: {
                  position: 'absolute',
                  bottom: 0,
                  transition: `left ${f} ease-in-out, width ${f} ease-in-out`,
                  height: v,
                  backgroundColor: y,
                },
              },
            },
          };
        },
        Mn = (l) => ({ linkPaddingBlock: l.paddingXXS, linkPaddingInlineStart: l.padding });
      var An = (0, oo.I$)(
        'Anchor',
        (l) => {
          const { fontSize: c, fontSizeLG: f, paddingXXS: v, calc: y } = l,
            w = (0, ro.TS)(l, {
              holderOffsetBlock: v,
              anchorPaddingBlockSecondary: y(v).div(2).equal(),
              anchorTitleBlock: y(c).div(14).mul(3).equal(),
              anchorBallSize: y(f).div(2).equal(),
            });
          return [Fn(w), zn(w)];
        },
        Mn,
      );
      function On() {
        return window;
      }
      function cn(l, c) {
        if (!l.getClientRects().length) return 0;
        const f = l.getBoundingClientRect();
        return f.width || f.height
          ? c === window
            ? ((c = l.ownerDocument.documentElement), f.top - c.clientTop)
            : f.top - c.getBoundingClientRect().top
          : f.top;
      }
      const sn = /#([\S ]+)$/;
      var Hn = (l) => {
        var c;
        const {
            rootClassName: f,
            prefixCls: v,
            className: y,
            style: w,
            offsetTop: N,
            affix: ne = !0,
            showInkInFixed: te = !1,
            children: Y,
            items: ee,
            direction: Z = 'vertical',
            bounds: le,
            targetOffset: ce,
            onClick: Me,
            onChange: ie,
            getContainer: h,
            getCurrentAnchor: U,
            replace: Te,
          } = l,
          [Ae, be] = n.useState([]),
          [ye, Oe] = n.useState(null),
          He = n.useRef(ye),
          Ce = n.useRef(null),
          We = n.useRef(null),
          o = n.useRef(!1),
          { direction: a, anchor: i, getTargetContainer: r, getPrefixCls: s } = n.useContext(A.E_),
          p = s('anchor', v),
          M = (0, jn.Z)(p),
          [O, P, $] = An(p, M),
          k = (c = h != null ? h : r) !== null && c !== void 0 ? c : On,
          G = JSON.stringify(Ae),
          J = (0, Fo.zX)((V) => {
            Ae.includes(V) || be((X) => [].concat((0, xe.Z)(X), [V]));
          }),
          pe = (0, Fo.zX)((V) => {
            Ae.includes(V) && be((X) => X.filter((ue) => ue !== V));
          }),
          Re = () => {
            var V;
            const X =
              (V = Ce.current) === null || V === void 0
                ? void 0
                : V.querySelector(`.${p}-link-title-active`);
            if (X && We.current) {
              const { style: ue } = We.current,
                ve = Z === 'horizontal';
              (ue.top = ve ? '' : `${X.offsetTop + X.clientHeight / 2}px`),
                (ue.height = ve ? '' : `${X.clientHeight}px`),
                (ue.left = ve ? `${X.offsetLeft}px` : ''),
                (ue.width = ve ? `${X.clientWidth}px` : ''),
                ve && (0, kn.Z)(X, { scrollMode: 'if-needed', block: 'nearest' });
            }
          },
          T = function (V) {
            let X = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
              ue = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 5;
            const ve = [],
              no = k();
            return (
              V.forEach((Se) => {
                const we = sn.exec(Se == null ? void 0 : Se.toString());
                if (!we) return;
                const Je = document.getElementById(we[1]);
                if (Je) {
                  const co = cn(Je, no);
                  co <= X + ue && ve.push({ link: Se, top: co });
                }
              }),
              ve.length ? ve.reduce((we, Je) => (Je.top > we.top ? Je : we)).link : ''
            );
          },
          H = (0, Fo.zX)((V) => {
            if (He.current === V) return;
            const X = typeof U == 'function' ? U(V) : V;
            Oe(X), (He.current = X), ie == null || ie(V);
          }),
          K = n.useCallback(() => {
            if (o.current) return;
            const V = T(Ae, ce !== void 0 ? ce : N || 0, le);
            H(V);
          }, [G, ce, N]),
          Be = n.useCallback(
            (V) => {
              H(V);
              const X = sn.exec(V);
              if (!X) return;
              const ue = document.getElementById(X[1]);
              if (!ue) return;
              const ve = k(),
                no = Eo(ve, !0),
                Se = cn(ue, ve);
              let we = no + Se;
              (we -= ce !== void 0 ? ce : N || 0),
                (o.current = !0),
                Po(we, {
                  getContainer: k,
                  callback() {
                    o.current = !1;
                  },
                });
            },
            [ce, N],
          ),
          me = Q()(
            P,
            $,
            M,
            f,
            `${p}-wrapper`,
            { [`${p}-wrapper-horizontal`]: Z === 'horizontal', [`${p}-rtl`]: a === 'rtl' },
            y,
            i == null ? void 0 : i.className,
          ),
          ke = Q()(p, { [`${p}-fixed`]: !ne && !te }),
          Le = Q()(`${p}-ink`, { [`${p}-ink-visible`]: ye }),
          De = Object.assign(
            Object.assign(
              { maxHeight: N ? `calc(100vh - ${N}px)` : '100vh' },
              i == null ? void 0 : i.style,
            ),
            w,
          ),
          to = (V) =>
            Array.isArray(V)
              ? V.map((X) =>
                  n.createElement(
                    ln,
                    Object.assign({ replace: Te }, X, { key: X.key }),
                    Z === 'vertical' && to(X.children),
                  ),
                )
              : null,
          Qe = n.createElement(
            'div',
            { ref: Ce, className: me, style: De },
            n.createElement(
              'div',
              { className: ke },
              n.createElement('span', { className: Le, ref: We }),
              'items' in l ? to(ee) : Y,
            ),
          );
        n.useEffect(() => {
          const V = k();
          return (
            K(),
            V == null || V.addEventListener('scroll', K),
            () => {
              V == null || V.removeEventListener('scroll', K);
            }
          );
        }, [G]),
          n.useEffect(() => {
            typeof U == 'function' && H(U(He.current || ''));
          }, [U]),
          n.useEffect(() => {
            Re();
          }, [Z, U, G, ye]);
        const ze = n.useMemo(
          () => ({
            registerLink: J,
            unregisterLink: pe,
            scrollTo: Be,
            activeLink: ye,
            onClick: Me,
            direction: Z,
          }),
          [ye, Me, Be, Z],
        );
        return O(
          n.createElement(
            rn.Provider,
            { value: ze },
            ne ? n.createElement(Cn, { offsetTop: N, target: k }, Qe) : Qe,
          ),
        );
      };
      const wo = Hn;
      wo.Link = ln;
      var $o = wo,
        En = e(10319),
        dn = e(97442),
        Tn = e(93251),
        Lo = e(86910),
        un = e(79366),
        gn,
        Bn,
        No,
        _o,
        fn = (0, dn.kc)(function (l) {
          var c = l.token,
            f = l.stylish,
            v = l.prefixCls,
            y = l.responsive,
            w = l.css,
            N = 36;
          return {
            container: w(
              gn ||
                (gn = (0, Lo.Z)([
                  `
      grid-area: toc;
      position: sticky;
      top: 100px;
      width: `,
                  `px;
      margin-inline-end: 24px;
      max-height: 80vh;
      overflow: auto;
      margin-top: 48px;
      z-index: 10;

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
              c.tocWidth,
              y.mobile,
              c.headerHeight + 1,
              c.colorTextDescription,
            ),
            mobileCtn: w(
              Bn ||
                (Bn = (0, Lo.Z)([
                  `
      position: sticky;
      top: `,
                  `px;

      height: `,
                  `px;
      width: 100%;
      z-index: 200;
      background: transparent;
      background: `,
                  `;
    `,
                ])),
              c.headerHeight + 1,
              N,
              (0, un.m4)(c.colorBgContainer, 0.8),
            ),
            expand: w(
              No ||
                (No = (0, Lo.Z)([
                  `
      backdrop-filter: blur(6px);
      border-radius: 0;
      border-bottom: 1px solid `,
                  `;

      box-shadow: `,
                  `;
      width: 100%;
      z-index: 201;
      background: `,
                  `;

      .`,
                  `-collapse-header {
        padding: 8px 16px !important;
      }
    `,
                ])),
              c.colorSplit,
              c.boxShadowSecondary,
              (0, un.m4)(c.colorBgContainer, 0.8),
              v,
            ),
            anchor: w(
              _o ||
                (_o = (0, Lo.Z)([
                  `
      `,
                  `
    `,
                ])),
              f.blur,
            ),
          };
        }),
        lo = e(11527),
        pn = (0, n.memo)(function (l) {
          var c = l.items,
            f = l.activeKey,
            v = l.onChange,
            y = (0, Tn.Z)('', { value: f, onChange: v }),
            w = (0, g.Z)(y, 2),
            N = w[0],
            ne = w[1],
            te = fn(),
            Y = te.styles,
            ee = (0, En.F)(),
            Z = ee.mobile,
            le = (0, dn.Fg)(),
            ce = c.find(function (ie) {
              return ie.id === N;
            }),
            Me = (0, n.useMemo)(
              function () {
                return c.map(function (ie) {
                  var h;
                  return {
                    href: '#'.concat(ie.id),
                    title: ie.title,
                    key: ie.id,
                    children:
                      (h = ie.children) === null || h === void 0
                        ? void 0
                        : h.map(function (U) {
                            return {
                              href: '#'.concat(U.id),
                              title: U == null ? void 0 : U.title,
                              key: U.id,
                            };
                          }),
                  };
                });
              },
              [c],
            );
          return (
            ((c == null ? void 0 : c.length) === 0
              ? null
              : Z
                ? (0, lo.jsx)(W.ZP, {
                    theme: { token: { fontSize: 12, sizeStep: 3 } },
                    children: (0, lo.jsx)('div', {
                      className: Y.mobileCtn,
                      children: (0, lo.jsx)(tn, {
                        bordered: !1,
                        ghost: !0,
                        expandIconPosition: 'end',
                        expandIcon: function (h) {
                          var U = h.isActive;
                          return U ? (0, lo.jsx)(d, {}) : (0, lo.jsx)(S, {});
                        },
                        className: Y.expand,
                        children: (0, lo.jsx)(
                          tn.Panel,
                          {
                            forceRender: !0,
                            header: ce ? ce.title : '\u76EE\u5F55',
                            children: (0, lo.jsx)(W.ZP, {
                              theme: { token: { fontSize: 14, sizeStep: 4 } },
                              children: (0, lo.jsx)($o, {
                                onChange: function (h) {
                                  ne(h.replace('#', ''));
                                },
                                targetOffset: le.headerHeight + 12,
                                items: Me,
                              }),
                            }),
                          },
                          'toc',
                        ),
                      }),
                    }),
                  })
                : (0, lo.jsxs)('div', {
                    className: Y.container,
                    children: [
                      (0, lo.jsx)('h4', { children: 'Table of Contents' }),
                      (0, lo.jsx)($o, {
                        items: Me,
                        className: Y.anchor,
                        targetOffset: le.headerHeight + 12,
                      }),
                    ],
                  })) || null
          );
        }),
        Wn = pn;
    },
    48407: function (x, t, e) {
      e.d(t, {
        b8: function () {
          return ae;
        },
      });
      var g = e(81560),
        b = e(56343),
        n = e(91439),
        j = e(87538),
        ae = { apiHeader: g.U, flattenSidebar: b.gt, token: n.H, logo: j.c1 };
    },
    81560: function (x, t, e) {
      e.d(t, {
        U: function () {
          return he;
        },
        Y: function () {
          return ae;
        },
      });
      var g = e(83288),
        b = e(32699),
        n = e.n(b),
        j = e(87538),
        ae = function (d) {
          var u,
            m = d.routeMeta.frontmatter;
          if (d.siteData.themeConfig.apiHeader === !1 || m.apiHeader === !1) return !1;
          if (m.apiHeader) return !0;
          var F = ['/api', '/components'].concat(
            (0, g.Z)(
              ((u = d.siteData.themeConfig.apiHeader) === null || u === void 0
                ? void 0
                : u.match) || [],
            ),
          );
          return F.some(function (z) {
            return d.location.pathname.startsWith(z);
          });
        };
      function E(C, d) {
        var u = {
          camel: function () {
            return (0, b.camelCase)(C);
          },
          pascal: function () {
            return (0, b.upperFirst)((0, b.camelCase)(C));
          },
          kebab: function () {
            return (0, b.kebabCase)(C);
          },
          snake: function () {
            return (0, b.snakeCase)(C);
          },
          default: function () {
            return C;
          },
        };
        return (u[d] || u.default)();
      }
      var he = function (d) {
        var u,
          m,
          F,
          z,
          S,
          W,
          D,
          fe,
          Q = (0, j.BB)(d),
          xe = ((u = d.routeMeta) === null || u === void 0 ? void 0 : u.frontmatter) || {},
          Pe = (m = d.locale) === null || m === void 0 ? void 0 : m.id,
          _ = function (Ie) {
            if (Q)
              return Ie.replace('{github}', Q)
                .replace('{atomId}', xe.atomId || '')
                .replace(/\{atomId\.([^}]+)}/g, function (qe, Fe) {
                  return E(xe.atomId || '', Fe);
                })
                .replace('{title}', xe.title)
                .replace('{locale}', Pe);
          },
          re = function (Ie) {
            return Ie === !1 ? !1 : typeof Ie == 'string';
          },
          R =
            ((F = d.siteData) === null ||
            F === void 0 ||
            (F = F.themeConfig) === null ||
            F === void 0
              ? void 0
              : F.apiHeader) || {},
          I = R.pkg,
          L =
            I === void 0
              ? (z = d.siteData) === null || z === void 0 || (z = z.pkg) === null || z === void 0
                ? void 0
                : z.name
              : I,
          se = R.sourceUrl,
          oe = R.docUrl,
          Ee = ((S = xe.apiHeader) === null || S === void 0 ? void 0 : S.pkg) || L,
          q = xe.atomId || xe.title,
          Ue = ((W = xe.apiHeader) === null || W === void 0 ? void 0 : W.defaultImport) || !1,
          je = ((D = xe.apiHeader) === null || D === void 0 ? void 0 : D.sourceUrl) || se,
          Ke = re(je) ? _(je) : void 0,
          $e = ((fe = xe.apiHeader) === null || fe === void 0 ? void 0 : fe.docUrl) || oe,
          Ye = re($e) ? _($e) : void 0;
        return {
          title: xe.title,
          description: xe.description,
          pkg: Ee,
          defaultImport: Ue,
          componentName: q,
          sourceUrl: Ke,
          docUrl: Ye,
        };
      };
    },
    56343: function (x, t, e) {
      e.d(t, {
        K1: function () {
          return j;
        },
        TL: function () {
          return ae;
        },
        e9: function () {
          return he;
        },
        gt: function () {
          return E;
        },
      });
      var g = e(68185);
      function b(C, d) {
        var u = Object.keys(C);
        if (Object.getOwnPropertySymbols) {
          var m = Object.getOwnPropertySymbols(C);
          d &&
            (m = m.filter(function (F) {
              return Object.getOwnPropertyDescriptor(C, F).enumerable;
            })),
            u.push.apply(u, m);
        }
        return u;
      }
      function n(C) {
        for (var d = 1; d < arguments.length; d++) {
          var u = arguments[d] != null ? arguments[d] : {};
          d % 2
            ? b(Object(u), !0).forEach(function (m) {
                (0, g.Z)(C, m, u[m]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(C, Object.getOwnPropertyDescriptors(u))
              : b(Object(u)).forEach(function (m) {
                  Object.defineProperty(C, m, Object.getOwnPropertyDescriptor(u, m));
                });
        }
        return C;
      }
      var j = function (d) {
          if (d.location.pathname === '/') return '/';
          var u = d.navData
            .filter(function (m) {
              return m.link !== '/';
            })
            .find(function (m) {
              return d.location.pathname.startsWith(m.activePath || m.link);
            });
          return (u == null ? void 0 : u.activePath) || (u == null ? void 0 : u.link) || '';
        },
        ae = function (d) {
          var u,
            m,
            F = d.routeMeta,
            z = F.toc,
            S = F.frontmatter;
          return (
            (u = d.tabMeta) !== null && u !== void 0 && u.toc && (z = d.tabMeta.toc),
            (m = d.tabMeta) !== null &&
              m !== void 0 &&
              m.frontmatter &&
              (S = d.tabMeta.frontmatter),
            z.reduce(function (W, D) {
              var fe = function (Pe) {
                if (!S.tocDepth || (typeof S.tocDepth == 'number' && S.tocDepth > Pe - 1))
                  return !0;
              };
              if (D.depth === 2 && fe(2)) W.push(n({}, D));
              else if (D.depth === 3 && fe(3)) {
                var Q = W[W.length - 1];
                Q && ((Q.children = Q.children || []), Q.children.push(n({}, D)));
              }
              return W;
            }, [])
          );
        },
        E = function (d) {
          var u;
          return (
            ((u = d.sidebar) === null || u === void 0
              ? void 0
              : u
                  .map(function (m) {
                    return m.children;
                  })
                  .flat()) || []
          );
        },
        he = function (d) {
          var u = E(d),
            m = d.location.pathname,
            F = u.findIndex(function (z) {
              return z.link === m;
            });
          return { prev: u[F - 1], currentIndex: F, next: u[F + 1] };
        };
    },
    87538: function (x, t, e) {
      e.d(t, {
        BB: function () {
          return b;
        },
        TG: function () {
          return g;
        },
        c1: function () {
          return n;
        },
      });
      var g = function (ae) {
          return ae.siteData.themeConfig.name;
        },
        b = function (ae) {
          var E, he;
          return (
            ((E = ae.siteData.themeConfig) === null ||
            E === void 0 ||
            (E = E.socialLinks) === null ||
            E === void 0
              ? void 0
              : E.github) ||
            ((he = ae.siteData.themeConfig) === null || he === void 0 ? void 0 : he.github)
          );
        },
        n = function (ae) {
          var E = ae.siteData.themeConfig.logo;
          return E ? (E.startsWith('http'), E) : E || '';
        };
    },
    91439: function (x, t, e) {
      e.d(t, {
        H: function () {
          return n;
        },
      });
      var g = e(32699),
        b = e.n(g),
        n = function (ae) {
          var E = ae.routeMeta.frontmatter;
          return (0, g.merge)({}, E.token, ae.siteData.themeConfig.siteToken);
        };
    },
    88535: function (x, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var e = {
        'code[class*="language-"]': {
          color: '#f8f8f2',
          background: 'none',
          fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          wordWrap: 'normal',
          lineHeight: '1.5',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
        },
        'pre[class*="language-"]': {
          color: '#f8f8f2',
          background: '#2b2b2b',
          fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          wordWrap: 'normal',
          lineHeight: '1.5',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          padding: '1em',
          margin: '0.5em 0',
          overflow: 'auto',
          borderRadius: '0.3em',
        },
        ':not(pre) > code[class*="language-"]': {
          background: '#2b2b2b',
          padding: '0.1em',
          borderRadius: '0.3em',
          whiteSpace: 'normal',
        },
        comment: { color: '#d4d0ab' },
        prolog: { color: '#d4d0ab' },
        doctype: { color: '#d4d0ab' },
        cdata: { color: '#d4d0ab' },
        punctuation: { color: '#fefefe' },
        property: { color: '#ffa07a' },
        tag: { color: '#ffa07a' },
        constant: { color: '#ffa07a' },
        symbol: { color: '#ffa07a' },
        deleted: { color: '#ffa07a' },
        boolean: { color: '#00e0e0' },
        number: { color: '#00e0e0' },
        selector: { color: '#abe338' },
        'attr-name': { color: '#abe338' },
        string: { color: '#abe338' },
        char: { color: '#abe338' },
        builtin: { color: '#abe338' },
        inserted: { color: '#abe338' },
        operator: { color: '#00e0e0' },
        entity: { color: '#00e0e0', cursor: 'help' },
        url: { color: '#00e0e0' },
        '.language-css .token.string': { color: '#00e0e0' },
        '.style .token.string': { color: '#00e0e0' },
        variable: { color: '#00e0e0' },
        atrule: { color: '#ffd700' },
        'attr-value': { color: '#ffd700' },
        function: { color: '#ffd700' },
        keyword: { color: '#00e0e0' },
        regex: { color: '#ffd700' },
        important: { color: '#ffd700', fontWeight: 'bold' },
        bold: { fontWeight: 'bold' },
        italic: { fontStyle: 'italic' },
      };
      t.default = e;
    },
    57836: function (x, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var e = {
        'code[class*="language-"]': {
          color: '#c5c8c6',
          textShadow: '0 1px rgba(0, 0, 0, 0.3)',
          fontFamily: "Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",
          direction: 'ltr',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          lineHeight: '1.5',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
        },
        'pre[class*="language-"]': {
          color: '#c5c8c6',
          textShadow: '0 1px rgba(0, 0, 0, 0.3)',
          fontFamily: "Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",
          direction: 'ltr',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          lineHeight: '1.5',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          padding: '1em',
          margin: '.5em 0',
          overflow: 'auto',
          borderRadius: '0.3em',
          background: '#1d1f21',
        },
        ':not(pre) > code[class*="language-"]': {
          background: '#1d1f21',
          padding: '.1em',
          borderRadius: '.3em',
        },
        comment: { color: '#7C7C7C' },
        prolog: { color: '#7C7C7C' },
        doctype: { color: '#7C7C7C' },
        cdata: { color: '#7C7C7C' },
        punctuation: { color: '#c5c8c6' },
        '.namespace': { Opacity: '.7' },
        property: { color: '#96CBFE' },
        keyword: { color: '#96CBFE' },
        tag: { color: '#96CBFE' },
        'class-name': { color: '#FFFFB6', textDecoration: 'underline' },
        boolean: { color: '#99CC99' },
        constant: { color: '#99CC99' },
        symbol: { color: '#f92672' },
        deleted: { color: '#f92672' },
        number: { color: '#FF73FD' },
        selector: { color: '#A8FF60' },
        'attr-name': { color: '#A8FF60' },
        string: { color: '#A8FF60' },
        char: { color: '#A8FF60' },
        builtin: { color: '#A8FF60' },
        inserted: { color: '#A8FF60' },
        variable: { color: '#C6C5FE' },
        operator: { color: '#EDEDED' },
        entity: { color: '#FFFFB6', cursor: 'help' },
        url: { color: '#96CBFE' },
        '.language-css .token.string': { color: '#87C38A' },
        '.style .token.string': { color: '#87C38A' },
        atrule: { color: '#F9EE98' },
        'attr-value': { color: '#F9EE98' },
        function: { color: '#DAD085' },
        regex: { color: '#E9C062' },
        important: { color: '#fd971f', fontWeight: 'bold' },
        bold: { fontWeight: 'bold' },
        italic: { fontStyle: 'italic' },
      };
      t.default = e;
    },
    67163: function (x, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var e = {
        'code[class*="language-"]': {
          fontFamily:
            'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
          fontSize: '14px',
          lineHeight: '1.375',
          direction: 'ltr',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          background: '#f5f7ff',
          color: '#5e6687',
        },
        'pre[class*="language-"]': {
          fontFamily:
            'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
          fontSize: '14px',
          lineHeight: '1.375',
          direction: 'ltr',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          background: '#f5f7ff',
          color: '#5e6687',
          padding: '1em',
          margin: '.5em 0',
          overflow: 'auto',
        },
        'pre > code[class*="language-"]': { fontSize: '1em' },
        'pre[class*="language-"]::-moz-selection': { textShadow: 'none', background: '#dfe2f1' },
        'pre[class*="language-"] ::-moz-selection': { textShadow: 'none', background: '#dfe2f1' },
        'code[class*="language-"]::-moz-selection': { textShadow: 'none', background: '#dfe2f1' },
        'code[class*="language-"] ::-moz-selection': { textShadow: 'none', background: '#dfe2f1' },
        'pre[class*="language-"]::selection': { textShadow: 'none', background: '#dfe2f1' },
        'pre[class*="language-"] ::selection': { textShadow: 'none', background: '#dfe2f1' },
        'code[class*="language-"]::selection': { textShadow: 'none', background: '#dfe2f1' },
        'code[class*="language-"] ::selection': { textShadow: 'none', background: '#dfe2f1' },
        ':not(pre) > code[class*="language-"]': { padding: '.1em', borderRadius: '.3em' },
        comment: { color: '#898ea4' },
        prolog: { color: '#898ea4' },
        doctype: { color: '#898ea4' },
        cdata: { color: '#898ea4' },
        punctuation: { color: '#5e6687' },
        namespace: { Opacity: '.7' },
        operator: { color: '#c76b29' },
        boolean: { color: '#c76b29' },
        number: { color: '#c76b29' },
        property: { color: '#c08b30' },
        tag: { color: '#3d8fd1' },
        string: { color: '#22a2c9' },
        selector: { color: '#6679cc' },
        'attr-name': { color: '#c76b29' },
        entity: { color: '#22a2c9', cursor: 'help' },
        url: { color: '#22a2c9' },
        '.language-css .token.string': { color: '#22a2c9' },
        '.style .token.string': { color: '#22a2c9' },
        'attr-value': { color: '#ac9739' },
        keyword: { color: '#ac9739' },
        control: { color: '#ac9739' },
        directive: { color: '#ac9739' },
        unit: { color: '#ac9739' },
        statement: { color: '#22a2c9' },
        regex: { color: '#22a2c9' },
        atrule: { color: '#22a2c9' },
        placeholder: { color: '#3d8fd1' },
        variable: { color: '#3d8fd1' },
        deleted: { textDecoration: 'line-through' },
        inserted: { borderBottom: '1px dotted #202746', textDecoration: 'none' },
        italic: { fontStyle: 'italic' },
        important: { fontWeight: 'bold', color: '#c94922' },
        bold: { fontWeight: 'bold' },
        'pre > code.highlight': { Outline: '0.4em solid #c94922', OutlineOffset: '.4em' },
        '.line-numbers.line-numbers .line-numbers-rows': { borderRightColor: '#dfe2f1' },
        '.line-numbers .line-numbers-rows > span:before': { color: '#979db4' },
        '.line-highlight.line-highlight': {
          background:
            'linear-gradient(to right, rgba(107, 115, 148, 0.2) 70%, rgba(107, 115, 148, 0))',
        },
      };
      t.default = e;
    },
    97090: function (x, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var e = {
        'code[class*="language-"]': {
          color: '#fff',
          textShadow: '0 1px 1px #000',
          fontFamily: 'Menlo, Monaco, "Courier New", monospace',
          direction: 'ltr',
          textAlign: 'left',
          wordSpacing: 'normal',
          whiteSpace: 'pre',
          wordWrap: 'normal',
          lineHeight: '1.4',
          background: 'none',
          border: '0',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
        },
        'pre[class*="language-"]': {
          color: '#fff',
          textShadow: '0 1px 1px #000',
          fontFamily: 'Menlo, Monaco, "Courier New", monospace',
          direction: 'ltr',
          textAlign: 'left',
          wordSpacing: 'normal',
          whiteSpace: 'pre',
          wordWrap: 'normal',
          lineHeight: '1.4',
          background: '#222',
          border: '0',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          padding: '15px',
          margin: '1em 0',
          overflow: 'auto',
          MozBorderRadius: '8px',
          WebkitBorderRadius: '8px',
          borderRadius: '8px',
        },
        'pre[class*="language-"] code': { float: 'left', padding: '0 15px 0 0' },
        ':not(pre) > code[class*="language-"]': {
          background: '#222',
          padding: '5px 10px',
          lineHeight: '1',
          MozBorderRadius: '3px',
          WebkitBorderRadius: '3px',
          borderRadius: '3px',
        },
        comment: { color: '#797979' },
        prolog: { color: '#797979' },
        doctype: { color: '#797979' },
        cdata: { color: '#797979' },
        selector: { color: '#fff' },
        operator: { color: '#fff' },
        punctuation: { color: '#fff' },
        namespace: { Opacity: '.7' },
        tag: { color: '#ffd893' },
        boolean: { color: '#ffd893' },
        atrule: { color: '#B0C975' },
        'attr-value': { color: '#B0C975' },
        hex: { color: '#B0C975' },
        string: { color: '#B0C975' },
        property: { color: '#c27628' },
        entity: { color: '#c27628', cursor: 'help' },
        url: { color: '#c27628' },
        'attr-name': { color: '#c27628' },
        keyword: { color: '#c27628' },
        regex: { color: '#9B71C6' },
        function: { color: '#e5a638' },
        constant: { color: '#e5a638' },
        variable: { color: '#fdfba8' },
        number: { color: '#8799B0' },
        important: { color: '#E45734' },
        deliminator: { color: '#E45734' },
        '.line-highlight.line-highlight': { background: 'rgba(255, 255, 255, .2)' },
        '.line-highlight.line-highlight:before': {
          top: '.3em',
          backgroundColor: 'rgba(255, 255, 255, .3)',
          color: '#fff',
          MozBorderRadius: '8px',
          WebkitBorderRadius: '8px',
          borderRadius: '8px',
        },
        '.line-highlight.line-highlight[data-end]:after': {
          top: '.3em',
          backgroundColor: 'rgba(255, 255, 255, .3)',
          color: '#fff',
          MozBorderRadius: '8px',
          WebkitBorderRadius: '8px',
          borderRadius: '8px',
        },
        '.line-numbers .line-numbers-rows > span': { borderRight: '3px #d9d336 solid' },
      };
      t.default = e;
    },
    60023: function (x, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var e = {
        'code[class*="language-"]': {
          color: '#111b27',
          background: 'none',
          fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          wordWrap: 'normal',
          lineHeight: '1.5',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
        },
        'pre[class*="language-"]': {
          color: '#111b27',
          background: '#e3eaf2',
          fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          wordWrap: 'normal',
          lineHeight: '1.5',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          padding: '1em',
          margin: '0.5em 0',
          overflow: 'auto',
        },
        'pre[class*="language-"]::-moz-selection': { background: '#8da1b9' },
        'pre[class*="language-"] ::-moz-selection': { background: '#8da1b9' },
        'code[class*="language-"]::-moz-selection': { background: '#8da1b9' },
        'code[class*="language-"] ::-moz-selection': { background: '#8da1b9' },
        'pre[class*="language-"]::selection': { background: '#8da1b9' },
        'pre[class*="language-"] ::selection': { background: '#8da1b9' },
        'code[class*="language-"]::selection': { background: '#8da1b9' },
        'code[class*="language-"] ::selection': { background: '#8da1b9' },
        ':not(pre) > code[class*="language-"]': {
          background: '#e3eaf2',
          padding: '0.1em 0.3em',
          borderRadius: '0.3em',
          whiteSpace: 'normal',
        },
        comment: { color: '#3c526d' },
        prolog: { color: '#3c526d' },
        doctype: { color: '#3c526d' },
        cdata: { color: '#3c526d' },
        punctuation: { color: '#111b27' },
        'delimiter.important': { color: '#006d6d', fontWeight: 'inherit' },
        'selector.parent': { color: '#006d6d' },
        tag: { color: '#006d6d' },
        'tag.punctuation': { color: '#006d6d' },
        'attr-name': { color: '#755f00' },
        boolean: { color: '#755f00' },
        'boolean.important': { color: '#755f00' },
        number: { color: '#755f00' },
        constant: { color: '#755f00' },
        'selector.attribute': { color: '#755f00' },
        'class-name': { color: '#005a8e' },
        key: { color: '#005a8e' },
        parameter: { color: '#005a8e' },
        property: { color: '#005a8e' },
        'property-access': { color: '#005a8e' },
        variable: { color: '#005a8e' },
        'attr-value': { color: '#116b00' },
        inserted: { color: '#116b00' },
        color: { color: '#116b00' },
        'selector.value': { color: '#116b00' },
        string: { color: '#116b00' },
        'string.url-link': { color: '#116b00' },
        builtin: { color: '#af00af' },
        'keyword-array': { color: '#af00af' },
        package: { color: '#af00af' },
        regex: { color: '#af00af' },
        function: { color: '#7c00aa' },
        'selector.class': { color: '#7c00aa' },
        'selector.id': { color: '#7c00aa' },
        'atrule.rule': { color: '#a04900' },
        combinator: { color: '#a04900' },
        keyword: { color: '#a04900' },
        operator: { color: '#a04900' },
        'pseudo-class': { color: '#a04900' },
        'pseudo-element': { color: '#a04900' },
        selector: { color: '#a04900' },
        unit: { color: '#a04900' },
        deleted: { color: '#c22f2e' },
        important: { color: '#c22f2e', fontWeight: 'bold' },
        'keyword-this': { color: '#005a8e', fontWeight: 'bold' },
        this: { color: '#005a8e', fontWeight: 'bold' },
        bold: { fontWeight: 'bold' },
        italic: { fontStyle: 'italic' },
        entity: { cursor: 'help' },
        '.language-markdown .token.title': { color: '#005a8e', fontWeight: 'bold' },
        '.language-markdown .token.title .token.punctuation': {
          color: '#005a8e',
          fontWeight: 'bold',
        },
        '.language-markdown .token.blockquote.punctuation': { color: '#af00af' },
        '.language-markdown .token.code': { color: '#006d6d' },
        '.language-markdown .token.hr.punctuation': { color: '#005a8e' },
        '.language-markdown .token.url > .token.content': { color: '#116b00' },
        '.language-markdown .token.url-link': { color: '#755f00' },
        '.language-markdown .token.list.punctuation': { color: '#af00af' },
        '.language-markdown .token.table-header': { color: '#111b27' },
        '.language-json .token.operator': { color: '#111b27' },
        '.language-scss .token.variable': { color: '#006d6d' },
        'token.tab:not(:empty):before': { color: '#3c526d' },
        'token.cr:before': { color: '#3c526d' },
        'token.lf:before': { color: '#3c526d' },
        'token.space:before': { color: '#3c526d' },
        'div.code-toolbar > .toolbar.toolbar > .toolbar-item > a': {
          color: '#e3eaf2',
          background: '#005a8e',
        },
        'div.code-toolbar > .toolbar.toolbar > .toolbar-item > button': {
          color: '#e3eaf2',
          background: '#005a8e',
        },
        'div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:hover': {
          color: '#e3eaf2',
          background: '#005a8eda',
          textDecoration: 'none',
        },
        'div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:focus': {
          color: '#e3eaf2',
          background: '#005a8eda',
          textDecoration: 'none',
        },
        'div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:hover': {
          color: '#e3eaf2',
          background: '#005a8eda',
          textDecoration: 'none',
        },
        'div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:focus': {
          color: '#e3eaf2',
          background: '#005a8eda',
          textDecoration: 'none',
        },
        'div.code-toolbar > .toolbar.toolbar > .toolbar-item > span': {
          color: '#e3eaf2',
          background: '#3c526d',
        },
        'div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:hover': {
          color: '#e3eaf2',
          background: '#3c526d',
        },
        'div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:focus': {
          color: '#e3eaf2',
          background: '#3c526d',
        },
        '.line-highlight.line-highlight': {
          background: 'linear-gradient(to right, #8da1b92f 70%, #8da1b925)',
        },
        '.line-highlight.line-highlight:before': {
          backgroundColor: '#3c526d',
          color: '#e3eaf2',
          boxShadow: '0 1px #8da1b9',
        },
        '.line-highlight.line-highlight[data-end]:after': {
          backgroundColor: '#3c526d',
          color: '#e3eaf2',
          boxShadow: '0 1px #8da1b9',
        },
        'pre[id].linkable-line-numbers.linkable-line-numbers span.line-numbers-rows > span:hover:before':
          { backgroundColor: '#3c526d1f' },
        '.line-numbers.line-numbers .line-numbers-rows': {
          borderRight: '1px solid #8da1b97a',
          background: '#d0dae77a',
        },
        '.line-numbers .line-numbers-rows > span:before': { color: '#3c526dda' },
        '.rainbow-braces .token.token.punctuation.brace-level-1': { color: '#755f00' },
        '.rainbow-braces .token.token.punctuation.brace-level-5': { color: '#755f00' },
        '.rainbow-braces .token.token.punctuation.brace-level-9': { color: '#755f00' },
        '.rainbow-braces .token.token.punctuation.brace-level-2': { color: '#af00af' },
        '.rainbow-braces .token.token.punctuation.brace-level-6': { color: '#af00af' },
        '.rainbow-braces .token.token.punctuation.brace-level-10': { color: '#af00af' },
        '.rainbow-braces .token.token.punctuation.brace-level-3': { color: '#005a8e' },
        '.rainbow-braces .token.token.punctuation.brace-level-7': { color: '#005a8e' },
        '.rainbow-braces .token.token.punctuation.brace-level-11': { color: '#005a8e' },
        '.rainbow-braces .token.token.punctuation.brace-level-4': { color: '#7c00aa' },
        '.rainbow-braces .token.token.punctuation.brace-level-8': { color: '#7c00aa' },
        '.rainbow-braces .token.token.punctuation.brace-level-12': { color: '#7c00aa' },
        'pre.diff-highlight > code .token.token.deleted:not(.prefix)': {
          backgroundColor: '#c22f2e1f',
        },
        'pre > code.diff-highlight .token.token.deleted:not(.prefix)': {
          backgroundColor: '#c22f2e1f',
        },
        'pre.diff-highlight > code .token.token.inserted:not(.prefix)': {
          backgroundColor: '#116b001f',
        },
        'pre > code.diff-highlight .token.token.inserted:not(.prefix)': {
          backgroundColor: '#116b001f',
        },
        '.command-line .command-line-prompt': { borderRight: '1px solid #8da1b97a' },
        '.command-line .command-line-prompt > span:before': { color: '#3c526dda' },
      };
      t.default = e;
    },
    8290: function (x, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var e = {
        'code[class*="language-"]': {
          color: '#e3eaf2',
          background: 'none',
          fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          wordWrap: 'normal',
          lineHeight: '1.5',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
        },
        'pre[class*="language-"]': {
          color: '#e3eaf2',
          background: '#111b27',
          fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          wordWrap: 'normal',
          lineHeight: '1.5',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          padding: '1em',
          margin: '0.5em 0',
          overflow: 'auto',
        },
        'pre[class*="language-"]::-moz-selection': { background: '#3c526d' },
        'pre[class*="language-"] ::-moz-selection': { background: '#3c526d' },
        'code[class*="language-"]::-moz-selection': { background: '#3c526d' },
        'code[class*="language-"] ::-moz-selection': { background: '#3c526d' },
        'pre[class*="language-"]::selection': { background: '#3c526d' },
        'pre[class*="language-"] ::selection': { background: '#3c526d' },
        'code[class*="language-"]::selection': { background: '#3c526d' },
        'code[class*="language-"] ::selection': { background: '#3c526d' },
        ':not(pre) > code[class*="language-"]': {
          background: '#111b27',
          padding: '0.1em 0.3em',
          borderRadius: '0.3em',
          whiteSpace: 'normal',
        },
        comment: { color: '#8da1b9' },
        prolog: { color: '#8da1b9' },
        doctype: { color: '#8da1b9' },
        cdata: { color: '#8da1b9' },
        punctuation: { color: '#e3eaf2' },
        'delimiter.important': { color: '#66cccc', fontWeight: 'inherit' },
        'selector.parent': { color: '#66cccc' },
        tag: { color: '#66cccc' },
        'tag.punctuation': { color: '#66cccc' },
        'attr-name': { color: '#e6d37a' },
        boolean: { color: '#e6d37a' },
        'boolean.important': { color: '#e6d37a' },
        number: { color: '#e6d37a' },
        constant: { color: '#e6d37a' },
        'selector.attribute': { color: '#e6d37a' },
        'class-name': { color: '#6cb8e6' },
        key: { color: '#6cb8e6' },
        parameter: { color: '#6cb8e6' },
        property: { color: '#6cb8e6' },
        'property-access': { color: '#6cb8e6' },
        variable: { color: '#6cb8e6' },
        'attr-value': { color: '#91d076' },
        inserted: { color: '#91d076' },
        color: { color: '#91d076' },
        'selector.value': { color: '#91d076' },
        string: { color: '#91d076' },
        'string.url-link': { color: '#91d076' },
        builtin: { color: '#f4adf4' },
        'keyword-array': { color: '#f4adf4' },
        package: { color: '#f4adf4' },
        regex: { color: '#f4adf4' },
        function: { color: '#c699e3' },
        'selector.class': { color: '#c699e3' },
        'selector.id': { color: '#c699e3' },
        'atrule.rule': { color: '#e9ae7e' },
        combinator: { color: '#e9ae7e' },
        keyword: { color: '#e9ae7e' },
        operator: { color: '#e9ae7e' },
        'pseudo-class': { color: '#e9ae7e' },
        'pseudo-element': { color: '#e9ae7e' },
        selector: { color: '#e9ae7e' },
        unit: { color: '#e9ae7e' },
        deleted: { color: '#cd6660' },
        important: { color: '#cd6660', fontWeight: 'bold' },
        'keyword-this': { color: '#6cb8e6', fontWeight: 'bold' },
        this: { color: '#6cb8e6', fontWeight: 'bold' },
        bold: { fontWeight: 'bold' },
        italic: { fontStyle: 'italic' },
        entity: { cursor: 'help' },
        '.language-markdown .token.title': { color: '#6cb8e6', fontWeight: 'bold' },
        '.language-markdown .token.title .token.punctuation': {
          color: '#6cb8e6',
          fontWeight: 'bold',
        },
        '.language-markdown .token.blockquote.punctuation': { color: '#f4adf4' },
        '.language-markdown .token.code': { color: '#66cccc' },
        '.language-markdown .token.hr.punctuation': { color: '#6cb8e6' },
        '.language-markdown .token.url .token.content': { color: '#91d076' },
        '.language-markdown .token.url-link': { color: '#e6d37a' },
        '.language-markdown .token.list.punctuation': { color: '#f4adf4' },
        '.language-markdown .token.table-header': { color: '#e3eaf2' },
        '.language-json .token.operator': { color: '#e3eaf2' },
        '.language-scss .token.variable': { color: '#66cccc' },
        'token.tab:not(:empty):before': { color: '#8da1b9' },
        'token.cr:before': { color: '#8da1b9' },
        'token.lf:before': { color: '#8da1b9' },
        'token.space:before': { color: '#8da1b9' },
        'div.code-toolbar > .toolbar.toolbar > .toolbar-item > a': {
          color: '#111b27',
          background: '#6cb8e6',
        },
        'div.code-toolbar > .toolbar.toolbar > .toolbar-item > button': {
          color: '#111b27',
          background: '#6cb8e6',
        },
        'div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:hover': {
          color: '#111b27',
          background: '#6cb8e6da',
          textDecoration: 'none',
        },
        'div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:focus': {
          color: '#111b27',
          background: '#6cb8e6da',
          textDecoration: 'none',
        },
        'div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:hover': {
          color: '#111b27',
          background: '#6cb8e6da',
          textDecoration: 'none',
        },
        'div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:focus': {
          color: '#111b27',
          background: '#6cb8e6da',
          textDecoration: 'none',
        },
        'div.code-toolbar > .toolbar.toolbar > .toolbar-item > span': {
          color: '#111b27',
          background: '#8da1b9',
        },
        'div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:hover': {
          color: '#111b27',
          background: '#8da1b9',
        },
        'div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:focus': {
          color: '#111b27',
          background: '#8da1b9',
        },
        '.line-highlight.line-highlight': {
          background: 'linear-gradient(to right, #3c526d5f 70%, #3c526d55)',
        },
        '.line-highlight.line-highlight:before': {
          backgroundColor: '#8da1b9',
          color: '#111b27',
          boxShadow: '0 1px #3c526d',
        },
        '.line-highlight.line-highlight[data-end]:after': {
          backgroundColor: '#8da1b9',
          color: '#111b27',
          boxShadow: '0 1px #3c526d',
        },
        'pre[id].linkable-line-numbers.linkable-line-numbers span.line-numbers-rows > span:hover:before':
          { backgroundColor: '#8da1b918' },
        '.line-numbers.line-numbers .line-numbers-rows': {
          borderRight: '1px solid #0b121b',
          background: '#0b121b7a',
        },
        '.line-numbers .line-numbers-rows > span:before': { color: '#8da1b9da' },
        '.rainbow-braces .token.token.punctuation.brace-level-1': { color: '#e6d37a' },
        '.rainbow-braces .token.token.punctuation.brace-level-5': { color: '#e6d37a' },
        '.rainbow-braces .token.token.punctuation.brace-level-9': { color: '#e6d37a' },
        '.rainbow-braces .token.token.punctuation.brace-level-2': { color: '#f4adf4' },
        '.rainbow-braces .token.token.punctuation.brace-level-6': { color: '#f4adf4' },
        '.rainbow-braces .token.token.punctuation.brace-level-10': { color: '#f4adf4' },
        '.rainbow-braces .token.token.punctuation.brace-level-3': { color: '#6cb8e6' },
        '.rainbow-braces .token.token.punctuation.brace-level-7': { color: '#6cb8e6' },
        '.rainbow-braces .token.token.punctuation.brace-level-11': { color: '#6cb8e6' },
        '.rainbow-braces .token.token.punctuation.brace-level-4': { color: '#c699e3' },
        '.rainbow-braces .token.token.punctuation.brace-level-8': { color: '#c699e3' },
        '.rainbow-braces .token.token.punctuation.brace-level-12': { color: '#c699e3' },
        'pre.diff-highlight > code .token.token.deleted:not(.prefix)': {
          backgroundColor: '#cd66601f',
        },
        'pre > code.diff-highlight .token.token.deleted:not(.prefix)': {
          backgroundColor: '#cd66601f',
        },
        'pre.diff-highlight > code .token.token.inserted:not(.prefix)': {
          backgroundColor: '#91d0761f',
        },
        'pre > code.diff-highlight .token.token.inserted:not(.prefix)': {
          backgroundColor: '#91d0761f',
        },
        '.command-line .command-line-prompt': { borderRight: '1px solid #0b121b' },
        '.command-line .command-line-prompt > span:before': { color: '#8da1b9da' },
      };
      t.default = e;
    },
    74454: function (x, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var e = {
        'code[class*="language-"]': {
          color: 'black',
          background: 'none',
          fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
          fontSize: '1em',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          wordWrap: 'normal',
          lineHeight: '1.5',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
        },
        'pre[class*="language-"]': {
          color: 'black',
          background: 'none',
          fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
          fontSize: '1em',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          wordWrap: 'normal',
          lineHeight: '1.5',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          position: 'relative',
          borderLeft: '10px solid #358ccb',
          boxShadow: '-1px 0 0 0 #358ccb, 0 0 0 1px #dfdfdf',
          backgroundColor: '#fdfdfd',
          backgroundImage: 'linear-gradient(transparent 50%, rgba(69, 142, 209, 0.04) 50%)',
          backgroundSize: '3em 3em',
          backgroundOrigin: 'content-box',
          backgroundAttachment: 'local',
          margin: '.5em 0',
          padding: '0 1em',
        },
        'pre[class*="language-"] > code': { display: 'block' },
        ':not(pre) > code[class*="language-"]': {
          position: 'relative',
          padding: '.2em',
          borderRadius: '0.3em',
          color: '#c92c2c',
          border: '1px solid rgba(0, 0, 0, 0.1)',
          display: 'inline',
          whiteSpace: 'normal',
          backgroundColor: '#fdfdfd',
          WebkitBoxSizing: 'border-box',
          MozBoxSizing: 'border-box',
          boxSizing: 'border-box',
        },
        comment: { color: '#7D8B99' },
        'block-comment': { color: '#7D8B99' },
        prolog: { color: '#7D8B99' },
        doctype: { color: '#7D8B99' },
        cdata: { color: '#7D8B99' },
        punctuation: { color: '#5F6364' },
        property: { color: '#c92c2c' },
        tag: { color: '#c92c2c' },
        boolean: { color: '#c92c2c' },
        number: { color: '#c92c2c' },
        'function-name': { color: '#c92c2c' },
        constant: { color: '#c92c2c' },
        symbol: { color: '#c92c2c' },
        deleted: { color: '#c92c2c' },
        selector: { color: '#2f9c0a' },
        'attr-name': { color: '#2f9c0a' },
        string: { color: '#2f9c0a' },
        char: { color: '#2f9c0a' },
        function: { color: '#2f9c0a' },
        builtin: { color: '#2f9c0a' },
        inserted: { color: '#2f9c0a' },
        operator: { color: '#a67f59', background: 'rgba(255, 255, 255, 0.5)' },
        entity: { color: '#a67f59', background: 'rgba(255, 255, 255, 0.5)', cursor: 'help' },
        url: { color: '#a67f59', background: 'rgba(255, 255, 255, 0.5)' },
        variable: { color: '#a67f59', background: 'rgba(255, 255, 255, 0.5)' },
        atrule: { color: '#1990b8' },
        'attr-value': { color: '#1990b8' },
        keyword: { color: '#1990b8' },
        'class-name': { color: '#1990b8' },
        regex: { color: '#e90' },
        important: { color: '#e90', fontWeight: 'normal' },
        '.language-css .token.string': { color: '#a67f59', background: 'rgba(255, 255, 255, 0.5)' },
        '.style .token.string': { color: '#a67f59', background: 'rgba(255, 255, 255, 0.5)' },
        bold: { fontWeight: 'bold' },
        italic: { fontStyle: 'italic' },
        namespace: { Opacity: '.7' },
      };
      t.default = e;
    },
    32435: function (x, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var e = {
        'code[class*="language-"]': {
          color: 'black',
          background: 'none',
          fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
          fontSize: '1em',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          wordWrap: 'normal',
          lineHeight: '1.5',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          maxHeight: 'inherit',
          height: 'inherit',
          padding: '0 1em',
          display: 'block',
          overflow: 'auto',
        },
        'pre[class*="language-"]': {
          color: 'black',
          background: 'none',
          fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
          fontSize: '1em',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          wordWrap: 'normal',
          lineHeight: '1.5',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          position: 'relative',
          margin: '.5em 0',
          overflow: 'visible',
          padding: '1px',
          backgroundColor: '#fdfdfd',
          WebkitBoxSizing: 'border-box',
          MozBoxSizing: 'border-box',
          boxSizing: 'border-box',
          marginBottom: '1em',
        },
        'pre[class*="language-"] > code': {
          position: 'relative',
          zIndex: '1',
          borderLeft: '10px solid #358ccb',
          boxShadow: '-1px 0px 0px 0px #358ccb, 0px 0px 0px 1px #dfdfdf',
          backgroundColor: '#fdfdfd',
          backgroundImage: 'linear-gradient(transparent 50%, rgba(69, 142, 209, 0.04) 50%)',
          backgroundSize: '3em 3em',
          backgroundOrigin: 'content-box',
          backgroundAttachment: 'local',
        },
        ':not(pre) > code[class*="language-"]': {
          backgroundColor: '#fdfdfd',
          WebkitBoxSizing: 'border-box',
          MozBoxSizing: 'border-box',
          boxSizing: 'border-box',
          marginBottom: '1em',
          position: 'relative',
          padding: '.2em',
          borderRadius: '0.3em',
          color: '#c92c2c',
          border: '1px solid rgba(0, 0, 0, 0.1)',
          display: 'inline',
          whiteSpace: 'normal',
        },
        'pre[class*="language-"]:before': {
          content: "''",
          display: 'block',
          position: 'absolute',
          bottom: '0.75em',
          left: '0.18em',
          width: '40%',
          height: '20%',
          maxHeight: '13em',
          boxShadow: '0px 13px 8px #979797',
          WebkitTransform: 'rotate(-2deg)',
          MozTransform: 'rotate(-2deg)',
          msTransform: 'rotate(-2deg)',
          OTransform: 'rotate(-2deg)',
          transform: 'rotate(-2deg)',
        },
        'pre[class*="language-"]:after': {
          content: "''",
          display: 'block',
          position: 'absolute',
          bottom: '0.75em',
          left: 'auto',
          width: '40%',
          height: '20%',
          maxHeight: '13em',
          boxShadow: '0px 13px 8px #979797',
          WebkitTransform: 'rotate(2deg)',
          MozTransform: 'rotate(2deg)',
          msTransform: 'rotate(2deg)',
          OTransform: 'rotate(2deg)',
          transform: 'rotate(2deg)',
          right: '0.75em',
        },
        comment: { color: '#7D8B99' },
        'block-comment': { color: '#7D8B99' },
        prolog: { color: '#7D8B99' },
        doctype: { color: '#7D8B99' },
        cdata: { color: '#7D8B99' },
        punctuation: { color: '#5F6364' },
        property: { color: '#c92c2c' },
        tag: { color: '#c92c2c' },
        boolean: { color: '#c92c2c' },
        number: { color: '#c92c2c' },
        'function-name': { color: '#c92c2c' },
        constant: { color: '#c92c2c' },
        symbol: { color: '#c92c2c' },
        deleted: { color: '#c92c2c' },
        selector: { color: '#2f9c0a' },
        'attr-name': { color: '#2f9c0a' },
        string: { color: '#2f9c0a' },
        char: { color: '#2f9c0a' },
        function: { color: '#2f9c0a' },
        builtin: { color: '#2f9c0a' },
        inserted: { color: '#2f9c0a' },
        operator: { color: '#a67f59', background: 'rgba(255, 255, 255, 0.5)' },
        entity: { color: '#a67f59', background: 'rgba(255, 255, 255, 0.5)', cursor: 'help' },
        url: { color: '#a67f59', background: 'rgba(255, 255, 255, 0.5)' },
        variable: { color: '#a67f59', background: 'rgba(255, 255, 255, 0.5)' },
        atrule: { color: '#1990b8' },
        'attr-value': { color: '#1990b8' },
        keyword: { color: '#1990b8' },
        'class-name': { color: '#1990b8' },
        regex: { color: '#e90' },
        important: { color: '#e90', fontWeight: 'normal' },
        '.language-css .token.string': { color: '#a67f59', background: 'rgba(255, 255, 255, 0.5)' },
        '.style .token.string': { color: '#a67f59', background: 'rgba(255, 255, 255, 0.5)' },
        bold: { fontWeight: 'bold' },
        italic: { fontStyle: 'italic' },
        namespace: { Opacity: '.7' },
        'pre[class*="language-"].line-numbers.line-numbers': { paddingLeft: '0' },
        'pre[class*="language-"].line-numbers.line-numbers code': { paddingLeft: '3.8em' },
        'pre[class*="language-"].line-numbers.line-numbers .line-numbers-rows': { left: '0' },
        'pre[class*="language-"][data-line]': {
          paddingTop: '0',
          paddingBottom: '0',
          paddingLeft: '0',
        },
        'pre[data-line] code': { position: 'relative', paddingLeft: '4em' },
        'pre .line-highlight': { marginTop: '0' },
      };
      t.default = e;
    },
    53084: function (x, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var e = {
        'code[class*="language-"]': {
          color: '#a9b7c6',
          fontFamily: "Consolas, Monaco, 'Andale Mono', monospace",
          direction: 'ltr',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          lineHeight: '1.5',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
        },
        'pre[class*="language-"]': {
          color: '#a9b7c6',
          fontFamily: "Consolas, Monaco, 'Andale Mono', monospace",
          direction: 'ltr',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          lineHeight: '1.5',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          padding: '1em',
          margin: '.5em 0',
          overflow: 'auto',
          background: '#2b2b2b',
        },
        'pre[class*="language-"]::-moz-selection': {
          color: 'inherit',
          background: 'rgba(33, 66, 131, .85)',
        },
        'pre[class*="language-"] ::-moz-selection': {
          color: 'inherit',
          background: 'rgba(33, 66, 131, .85)',
        },
        'code[class*="language-"]::-moz-selection': {
          color: 'inherit',
          background: 'rgba(33, 66, 131, .85)',
        },
        'code[class*="language-"] ::-moz-selection': {
          color: 'inherit',
          background: 'rgba(33, 66, 131, .85)',
        },
        'pre[class*="language-"]::selection': {
          color: 'inherit',
          background: 'rgba(33, 66, 131, .85)',
        },
        'pre[class*="language-"] ::selection': {
          color: 'inherit',
          background: 'rgba(33, 66, 131, .85)',
        },
        'code[class*="language-"]::selection': {
          color: 'inherit',
          background: 'rgba(33, 66, 131, .85)',
        },
        'code[class*="language-"] ::selection': {
          color: 'inherit',
          background: 'rgba(33, 66, 131, .85)',
        },
        ':not(pre) > code[class*="language-"]': {
          background: '#2b2b2b',
          padding: '.1em',
          borderRadius: '.3em',
        },
        comment: { color: '#808080' },
        prolog: { color: '#808080' },
        cdata: { color: '#808080' },
        delimiter: { color: '#cc7832' },
        boolean: { color: '#cc7832' },
        keyword: { color: '#cc7832' },
        selector: { color: '#cc7832' },
        important: { color: '#cc7832' },
        atrule: { color: '#cc7832' },
        operator: { color: '#a9b7c6' },
        punctuation: { color: '#a9b7c6' },
        'attr-name': { color: '#a9b7c6' },
        tag: { color: '#e8bf6a' },
        'tag.punctuation': { color: '#e8bf6a' },
        doctype: { color: '#e8bf6a' },
        builtin: { color: '#e8bf6a' },
        entity: { color: '#6897bb' },
        number: { color: '#6897bb' },
        symbol: { color: '#6897bb' },
        property: { color: '#9876aa' },
        constant: { color: '#9876aa' },
        variable: { color: '#9876aa' },
        string: { color: '#6a8759' },
        char: { color: '#6a8759' },
        'attr-value': { color: '#a5c261' },
        'attr-value.punctuation': { color: '#a5c261' },
        'attr-value.punctuation:first-child': { color: '#a9b7c6' },
        url: { color: '#287bde', textDecoration: 'underline' },
        function: { color: '#ffc66d' },
        regex: { background: '#364135' },
        bold: { fontWeight: 'bold' },
        italic: { fontStyle: 'italic' },
        inserted: { background: '#294436' },
        deleted: { background: '#484a4a' },
        'code.language-css .token.property': { color: '#a9b7c6' },
        'code.language-css .token.property + .token.punctuation': { color: '#a9b7c6' },
        'code.language-css .token.id': { color: '#ffc66d' },
        'code.language-css .token.selector > .token.class': { color: '#ffc66d' },
        'code.language-css .token.selector > .token.attribute': { color: '#ffc66d' },
        'code.language-css .token.selector > .token.pseudo-class': { color: '#ffc66d' },
        'code.language-css .token.selector > .token.pseudo-element': { color: '#ffc66d' },
      };
      t.default = e;
    },
    16758: function (x, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var e = {
        'code[class*="language-"]': {
          color: 'white',
          background: 'none',
          textShadow: '0 -.1em .2em black',
          fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
          fontSize: '1em',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          wordWrap: 'normal',
          lineHeight: '1.5',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
        },
        'pre[class*="language-"]': {
          color: 'white',
          background: 'hsl(30, 20%, 25%)',
          textShadow: '0 -.1em .2em black',
          fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
          fontSize: '1em',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          wordWrap: 'normal',
          lineHeight: '1.5',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          padding: '1em',
          margin: '.5em 0',
          overflow: 'auto',
          border: '.3em solid hsl(30, 20%, 40%)',
          borderRadius: '.5em',
          boxShadow: '1px 1px .5em black inset',
        },
        ':not(pre) > code[class*="language-"]': {
          background: 'hsl(30, 20%, 25%)',
          padding: '.15em .2em .05em',
          borderRadius: '.3em',
          border: '.13em solid hsl(30, 20%, 40%)',
          boxShadow: '1px 1px .3em -.1em black inset',
          whiteSpace: 'normal',
        },
        comment: { color: 'hsl(30, 20%, 50%)' },
        prolog: { color: 'hsl(30, 20%, 50%)' },
        doctype: { color: 'hsl(30, 20%, 50%)' },
        cdata: { color: 'hsl(30, 20%, 50%)' },
        punctuation: { Opacity: '.7' },
        namespace: { Opacity: '.7' },
        property: { color: 'hsl(350, 40%, 70%)' },
        tag: { color: 'hsl(350, 40%, 70%)' },
        boolean: { color: 'hsl(350, 40%, 70%)' },
        number: { color: 'hsl(350, 40%, 70%)' },
        constant: { color: 'hsl(350, 40%, 70%)' },
        symbol: { color: 'hsl(350, 40%, 70%)' },
        selector: { color: 'hsl(75, 70%, 60%)' },
        'attr-name': { color: 'hsl(75, 70%, 60%)' },
        string: { color: 'hsl(75, 70%, 60%)' },
        char: { color: 'hsl(75, 70%, 60%)' },
        builtin: { color: 'hsl(75, 70%, 60%)' },
        inserted: { color: 'hsl(75, 70%, 60%)' },
        operator: { color: 'hsl(40, 90%, 60%)' },
        entity: { color: 'hsl(40, 90%, 60%)', cursor: 'help' },
        url: { color: 'hsl(40, 90%, 60%)' },
        '.language-css .token.string': { color: 'hsl(40, 90%, 60%)' },
        '.style .token.string': { color: 'hsl(40, 90%, 60%)' },
        variable: { color: 'hsl(40, 90%, 60%)' },
        atrule: { color: 'hsl(350, 40%, 70%)' },
        'attr-value': { color: 'hsl(350, 40%, 70%)' },
        keyword: { color: 'hsl(350, 40%, 70%)' },
        regex: { color: '#e90' },
        important: { color: '#e90', fontWeight: 'bold' },
        bold: { fontWeight: 'bold' },
        italic: { fontStyle: 'italic' },
        deleted: { color: 'red' },
      };
      t.default = e;
    },
    29139: function (x, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var e = {
        'code[class*="language-"]': {
          color: '#f8f8f2',
          background: 'none',
          textShadow: '0 1px rgba(0, 0, 0, 0.3)',
          fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          wordWrap: 'normal',
          lineHeight: '1.5',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
        },
        'pre[class*="language-"]': {
          color: '#f8f8f2',
          background: '#282a36',
          textShadow: '0 1px rgba(0, 0, 0, 0.3)',
          fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          wordWrap: 'normal',
          lineHeight: '1.5',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          padding: '1em',
          margin: '.5em 0',
          overflow: 'auto',
          borderRadius: '0.3em',
        },
        ':not(pre) > code[class*="language-"]': {
          background: '#282a36',
          padding: '.1em',
          borderRadius: '.3em',
          whiteSpace: 'normal',
        },
        comment: { color: '#6272a4' },
        prolog: { color: '#6272a4' },
        doctype: { color: '#6272a4' },
        cdata: { color: '#6272a4' },
        punctuation: { color: '#f8f8f2' },
        '.namespace': { Opacity: '.7' },
        property: { color: '#ff79c6' },
        tag: { color: '#ff79c6' },
        constant: { color: '#ff79c6' },
        symbol: { color: '#ff79c6' },
        deleted: { color: '#ff79c6' },
        boolean: { color: '#bd93f9' },
        number: { color: '#bd93f9' },
        selector: { color: '#50fa7b' },
        'attr-name': { color: '#50fa7b' },
        string: { color: '#50fa7b' },
        char: { color: '#50fa7b' },
        builtin: { color: '#50fa7b' },
        inserted: { color: '#50fa7b' },
        operator: { color: '#f8f8f2' },
        entity: { color: '#f8f8f2', cursor: 'help' },
        url: { color: '#f8f8f2' },
        '.language-css .token.string': { color: '#f8f8f2' },
        '.style .token.string': { color: '#f8f8f2' },
        variable: { color: '#f8f8f2' },
        atrule: { color: '#f1fa8c' },
        'attr-value': { color: '#f1fa8c' },
        function: { color: '#f1fa8c' },
        'class-name': { color: '#f1fa8c' },
        keyword: { color: '#8be9fd' },
        regex: { color: '#ffb86c' },
        important: { color: '#ffb86c', fontWeight: 'bold' },
        bold: { fontWeight: 'bold' },
        italic: { fontStyle: 'italic' },
      };
      t.default = e;
    },
    79008: function (x, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var e = {
        'code[class*="language-"]': {
          fontFamily:
            'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
          fontSize: '14px',
          lineHeight: '1.375',
          direction: 'ltr',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          background: '#2a2734',
          color: '#9a86fd',
        },
        'pre[class*="language-"]': {
          fontFamily:
            'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
          fontSize: '14px',
          lineHeight: '1.375',
          direction: 'ltr',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          background: '#2a2734',
          color: '#9a86fd',
          padding: '1em',
          margin: '.5em 0',
          overflow: 'auto',
        },
        'pre > code[class*="language-"]': { fontSize: '1em' },
        'pre[class*="language-"]::-moz-selection': { textShadow: 'none', background: '#6a51e6' },
        'pre[class*="language-"] ::-moz-selection': { textShadow: 'none', background: '#6a51e6' },
        'code[class*="language-"]::-moz-selection': { textShadow: 'none', background: '#6a51e6' },
        'code[class*="language-"] ::-moz-selection': { textShadow: 'none', background: '#6a51e6' },
        'pre[class*="language-"]::selection': { textShadow: 'none', background: '#6a51e6' },
        'pre[class*="language-"] ::selection': { textShadow: 'none', background: '#6a51e6' },
        'code[class*="language-"]::selection': { textShadow: 'none', background: '#6a51e6' },
        'code[class*="language-"] ::selection': { textShadow: 'none', background: '#6a51e6' },
        ':not(pre) > code[class*="language-"]': { padding: '.1em', borderRadius: '.3em' },
        comment: { color: '#6c6783' },
        prolog: { color: '#6c6783' },
        doctype: { color: '#6c6783' },
        cdata: { color: '#6c6783' },
        punctuation: { color: '#6c6783' },
        namespace: { Opacity: '.7' },
        tag: { color: '#e09142' },
        operator: { color: '#e09142' },
        number: { color: '#e09142' },
        property: { color: '#9a86fd' },
        function: { color: '#9a86fd' },
        'tag-id': { color: '#eeebff' },
        selector: { color: '#eeebff' },
        'atrule-id': { color: '#eeebff' },
        'code.language-javascript': { color: '#c4b9fe' },
        'attr-name': { color: '#c4b9fe' },
        'code.language-css': { color: '#ffcc99' },
        'code.language-scss': { color: '#ffcc99' },
        boolean: { color: '#ffcc99' },
        string: { color: '#ffcc99' },
        entity: { color: '#ffcc99', cursor: 'help' },
        url: { color: '#ffcc99' },
        '.language-css .token.string': { color: '#ffcc99' },
        '.language-scss .token.string': { color: '#ffcc99' },
        '.style .token.string': { color: '#ffcc99' },
        'attr-value': { color: '#ffcc99' },
        keyword: { color: '#ffcc99' },
        control: { color: '#ffcc99' },
        directive: { color: '#ffcc99' },
        unit: { color: '#ffcc99' },
        statement: { color: '#ffcc99' },
        regex: { color: '#ffcc99' },
        atrule: { color: '#ffcc99' },
        placeholder: { color: '#ffcc99' },
        variable: { color: '#ffcc99' },
        deleted: { textDecoration: 'line-through' },
        inserted: { borderBottom: '1px dotted #eeebff', textDecoration: 'none' },
        italic: { fontStyle: 'italic' },
        important: { fontWeight: 'bold', color: '#c4b9fe' },
        bold: { fontWeight: 'bold' },
        'pre > code.highlight': { Outline: '.4em solid #8a75f5', OutlineOffset: '.4em' },
        '.line-numbers.line-numbers .line-numbers-rows': { borderRightColor: '#2c2937' },
        '.line-numbers .line-numbers-rows > span:before': { color: '#3c3949' },
        '.line-highlight.line-highlight': {
          background:
            'linear-gradient(to right, rgba(224, 145, 66, 0.2) 70%, rgba(224, 145, 66, 0))',
        },
      };
      t.default = e;
    },
    84087: function (x, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var e = {
        'code[class*="language-"]': {
          fontFamily:
            'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
          fontSize: '14px',
          lineHeight: '1.375',
          direction: 'ltr',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          background: '#322d29',
          color: '#88786d',
        },
        'pre[class*="language-"]': {
          fontFamily:
            'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
          fontSize: '14px',
          lineHeight: '1.375',
          direction: 'ltr',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          background: '#322d29',
          color: '#88786d',
          padding: '1em',
          margin: '.5em 0',
          overflow: 'auto',
        },
        'pre > code[class*="language-"]': { fontSize: '1em' },
        'pre[class*="language-"]::-moz-selection': { textShadow: 'none', background: '#6f5849' },
        'pre[class*="language-"] ::-moz-selection': { textShadow: 'none', background: '#6f5849' },
        'code[class*="language-"]::-moz-selection': { textShadow: 'none', background: '#6f5849' },
        'code[class*="language-"] ::-moz-selection': { textShadow: 'none', background: '#6f5849' },
        'pre[class*="language-"]::selection': { textShadow: 'none', background: '#6f5849' },
        'pre[class*="language-"] ::selection': { textShadow: 'none', background: '#6f5849' },
        'code[class*="language-"]::selection': { textShadow: 'none', background: '#6f5849' },
        'code[class*="language-"] ::selection': { textShadow: 'none', background: '#6f5849' },
        ':not(pre) > code[class*="language-"]': { padding: '.1em', borderRadius: '.3em' },
        comment: { color: '#6a5f58' },
        prolog: { color: '#6a5f58' },
        doctype: { color: '#6a5f58' },
        cdata: { color: '#6a5f58' },
        punctuation: { color: '#6a5f58' },
        namespace: { Opacity: '.7' },
        tag: { color: '#bfa05a' },
        operator: { color: '#bfa05a' },
        number: { color: '#bfa05a' },
        property: { color: '#88786d' },
        function: { color: '#88786d' },
        'tag-id': { color: '#fff3eb' },
        selector: { color: '#fff3eb' },
        'atrule-id': { color: '#fff3eb' },
        'code.language-javascript': { color: '#a48774' },
        'attr-name': { color: '#a48774' },
        'code.language-css': { color: '#fcc440' },
        'code.language-scss': { color: '#fcc440' },
        boolean: { color: '#fcc440' },
        string: { color: '#fcc440' },
        entity: { color: '#fcc440', cursor: 'help' },
        url: { color: '#fcc440' },
        '.language-css .token.string': { color: '#fcc440' },
        '.language-scss .token.string': { color: '#fcc440' },
        '.style .token.string': { color: '#fcc440' },
        'attr-value': { color: '#fcc440' },
        keyword: { color: '#fcc440' },
        control: { color: '#fcc440' },
        directive: { color: '#fcc440' },
        unit: { color: '#fcc440' },
        statement: { color: '#fcc440' },
        regex: { color: '#fcc440' },
        atrule: { color: '#fcc440' },
        placeholder: { color: '#fcc440' },
        variable: { color: '#fcc440' },
        deleted: { textDecoration: 'line-through' },
        inserted: { borderBottom: '1px dotted #fff3eb', textDecoration: 'none' },
        italic: { fontStyle: 'italic' },
        important: { fontWeight: 'bold', color: '#a48774' },
        bold: { fontWeight: 'bold' },
        'pre > code.highlight': { Outline: '.4em solid #816d5f', OutlineOffset: '.4em' },
        '.line-numbers.line-numbers .line-numbers-rows': { borderRightColor: '#35302b' },
        '.line-numbers .line-numbers-rows > span:before': { color: '#46403d' },
        '.line-highlight.line-highlight': {
          background:
            'linear-gradient(to right, rgba(191, 160, 90, 0.2) 70%, rgba(191, 160, 90, 0))',
        },
      };
      t.default = e;
    },
    7129: function (x, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var e = {
        'code[class*="language-"]': {
          fontFamily:
            'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
          fontSize: '14px',
          lineHeight: '1.375',
          direction: 'ltr',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          background: '#2a2d2a',
          color: '#687d68',
        },
        'pre[class*="language-"]': {
          fontFamily:
            'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
          fontSize: '14px',
          lineHeight: '1.375',
          direction: 'ltr',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          background: '#2a2d2a',
          color: '#687d68',
          padding: '1em',
          margin: '.5em 0',
          overflow: 'auto',
        },
        'pre > code[class*="language-"]': { fontSize: '1em' },
        'pre[class*="language-"]::-moz-selection': { textShadow: 'none', background: '#435643' },
        'pre[class*="language-"] ::-moz-selection': { textShadow: 'none', background: '#435643' },
        'code[class*="language-"]::-moz-selection': { textShadow: 'none', background: '#435643' },
        'code[class*="language-"] ::-moz-selection': { textShadow: 'none', background: '#435643' },
        'pre[class*="language-"]::selection': { textShadow: 'none', background: '#435643' },
        'pre[class*="language-"] ::selection': { textShadow: 'none', background: '#435643' },
        'code[class*="language-"]::selection': { textShadow: 'none', background: '#435643' },
        'code[class*="language-"] ::selection': { textShadow: 'none', background: '#435643' },
        ':not(pre) > code[class*="language-"]': { padding: '.1em', borderRadius: '.3em' },
        comment: { color: '#535f53' },
        prolog: { color: '#535f53' },
        doctype: { color: '#535f53' },
        cdata: { color: '#535f53' },
        punctuation: { color: '#535f53' },
        namespace: { Opacity: '.7' },
        tag: { color: '#a2b34d' },
        operator: { color: '#a2b34d' },
        number: { color: '#a2b34d' },
        property: { color: '#687d68' },
        function: { color: '#687d68' },
        'tag-id': { color: '#f0fff0' },
        selector: { color: '#f0fff0' },
        'atrule-id': { color: '#f0fff0' },
        'code.language-javascript': { color: '#b3d6b3' },
        'attr-name': { color: '#b3d6b3' },
        'code.language-css': { color: '#e5fb79' },
        'code.language-scss': { color: '#e5fb79' },
        boolean: { color: '#e5fb79' },
        string: { color: '#e5fb79' },
        entity: { color: '#e5fb79', cursor: 'help' },
        url: { color: '#e5fb79' },
        '.language-css .token.string': { color: '#e5fb79' },
        '.language-scss .token.string': { color: '#e5fb79' },
        '.style .token.string': { color: '#e5fb79' },
        'attr-value': { color: '#e5fb79' },
        keyword: { color: '#e5fb79' },
        control: { color: '#e5fb79' },
        directive: { color: '#e5fb79' },
        unit: { color: '#e5fb79' },
        statement: { color: '#e5fb79' },
        regex: { color: '#e5fb79' },
        atrule: { color: '#e5fb79' },
        placeholder: { color: '#e5fb79' },
        variable: { color: '#e5fb79' },
        deleted: { textDecoration: 'line-through' },
        inserted: { borderBottom: '1px dotted #f0fff0', textDecoration: 'none' },
        italic: { fontStyle: 'italic' },
        important: { fontWeight: 'bold', color: '#b3d6b3' },
        bold: { fontWeight: 'bold' },
        'pre > code.highlight': { Outline: '.4em solid #5c705c', OutlineOffset: '.4em' },
        '.line-numbers.line-numbers .line-numbers-rows': { borderRightColor: '#2c302c' },
        '.line-numbers .line-numbers-rows > span:before': { color: '#3b423b' },
        '.line-highlight.line-highlight': {
          background:
            'linear-gradient(to right, rgba(162, 179, 77, 0.2) 70%, rgba(162, 179, 77, 0))',
        },
      };
      t.default = e;
    },
    69237: function (x, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var e = {
        'code[class*="language-"]': {
          fontFamily:
            'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
          fontSize: '14px',
          lineHeight: '1.375',
          direction: 'ltr',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          background: '#faf8f5',
          color: '#728fcb',
        },
        'pre[class*="language-"]': {
          fontFamily:
            'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
          fontSize: '14px',
          lineHeight: '1.375',
          direction: 'ltr',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          background: '#faf8f5',
          color: '#728fcb',
          padding: '1em',
          margin: '.5em 0',
          overflow: 'auto',
        },
        'pre > code[class*="language-"]': { fontSize: '1em' },
        'pre[class*="language-"]::-moz-selection': { textShadow: 'none', background: '#faf8f5' },
        'pre[class*="language-"] ::-moz-selection': { textShadow: 'none', background: '#faf8f5' },
        'code[class*="language-"]::-moz-selection': { textShadow: 'none', background: '#faf8f5' },
        'code[class*="language-"] ::-moz-selection': { textShadow: 'none', background: '#faf8f5' },
        'pre[class*="language-"]::selection': { textShadow: 'none', background: '#faf8f5' },
        'pre[class*="language-"] ::selection': { textShadow: 'none', background: '#faf8f5' },
        'code[class*="language-"]::selection': { textShadow: 'none', background: '#faf8f5' },
        'code[class*="language-"] ::selection': { textShadow: 'none', background: '#faf8f5' },
        ':not(pre) > code[class*="language-"]': { padding: '.1em', borderRadius: '.3em' },
        comment: { color: '#b6ad9a' },
        prolog: { color: '#b6ad9a' },
        doctype: { color: '#b6ad9a' },
        cdata: { color: '#b6ad9a' },
        punctuation: { color: '#b6ad9a' },
        namespace: { Opacity: '.7' },
        tag: { color: '#063289' },
        operator: { color: '#063289' },
        number: { color: '#063289' },
        property: { color: '#b29762' },
        function: { color: '#b29762' },
        'tag-id': { color: '#2d2006' },
        selector: { color: '#2d2006' },
        'atrule-id': { color: '#2d2006' },
        'code.language-javascript': { color: '#896724' },
        'attr-name': { color: '#896724' },
        'code.language-css': { color: '#728fcb' },
        'code.language-scss': { color: '#728fcb' },
        boolean: { color: '#728fcb' },
        string: { color: '#728fcb' },
        entity: { color: '#728fcb', cursor: 'help' },
        url: { color: '#728fcb' },
        '.language-css .token.string': { color: '#728fcb' },
        '.language-scss .token.string': { color: '#728fcb' },
        '.style .token.string': { color: '#728fcb' },
        'attr-value': { color: '#728fcb' },
        keyword: { color: '#728fcb' },
        control: { color: '#728fcb' },
        directive: { color: '#728fcb' },
        unit: { color: '#728fcb' },
        statement: { color: '#728fcb' },
        regex: { color: '#728fcb' },
        atrule: { color: '#728fcb' },
        placeholder: { color: '#93abdc' },
        variable: { color: '#93abdc' },
        deleted: { textDecoration: 'line-through' },
        inserted: { borderBottom: '1px dotted #2d2006', textDecoration: 'none' },
        italic: { fontStyle: 'italic' },
        important: { fontWeight: 'bold', color: '#896724' },
        bold: { fontWeight: 'bold' },
        'pre > code.highlight': { Outline: '.4em solid #896724', OutlineOffset: '.4em' },
        '.line-numbers.line-numbers .line-numbers-rows': { borderRightColor: '#ece8de' },
        '.line-numbers .line-numbers-rows > span:before': { color: '#cdc4b1' },
        '.line-highlight.line-highlight': {
          background: 'linear-gradient(to right, rgba(45, 32, 6, 0.2) 70%, rgba(45, 32, 6, 0))',
        },
      };
      t.default = e;
    },
    6624: function (x, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var e = {
        'code[class*="language-"]': {
          fontFamily:
            'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
          fontSize: '14px',
          lineHeight: '1.375',
          direction: 'ltr',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          background: '#1d262f',
          color: '#57718e',
        },
        'pre[class*="language-"]': {
          fontFamily:
            'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
          fontSize: '14px',
          lineHeight: '1.375',
          direction: 'ltr',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          background: '#1d262f',
          color: '#57718e',
          padding: '1em',
          margin: '.5em 0',
          overflow: 'auto',
        },
        'pre > code[class*="language-"]': { fontSize: '1em' },
        'pre[class*="language-"]::-moz-selection': { textShadow: 'none', background: '#004a9e' },
        'pre[class*="language-"] ::-moz-selection': { textShadow: 'none', background: '#004a9e' },
        'code[class*="language-"]::-moz-selection': { textShadow: 'none', background: '#004a9e' },
        'code[class*="language-"] ::-moz-selection': { textShadow: 'none', background: '#004a9e' },
        'pre[class*="language-"]::selection': { textShadow: 'none', background: '#004a9e' },
        'pre[class*="language-"] ::selection': { textShadow: 'none', background: '#004a9e' },
        'code[class*="language-"]::selection': { textShadow: 'none', background: '#004a9e' },
        'code[class*="language-"] ::selection': { textShadow: 'none', background: '#004a9e' },
        ':not(pre) > code[class*="language-"]': { padding: '.1em', borderRadius: '.3em' },
        comment: { color: '#4a5f78' },
        prolog: { color: '#4a5f78' },
        doctype: { color: '#4a5f78' },
        cdata: { color: '#4a5f78' },
        punctuation: { color: '#4a5f78' },
        namespace: { Opacity: '.7' },
        tag: { color: '#0aa370' },
        operator: { color: '#0aa370' },
        number: { color: '#0aa370' },
        property: { color: '#57718e' },
        function: { color: '#57718e' },
        'tag-id': { color: '#ebf4ff' },
        selector: { color: '#ebf4ff' },
        'atrule-id': { color: '#ebf4ff' },
        'code.language-javascript': { color: '#7eb6f6' },
        'attr-name': { color: '#7eb6f6' },
        'code.language-css': { color: '#47ebb4' },
        'code.language-scss': { color: '#47ebb4' },
        boolean: { color: '#47ebb4' },
        string: { color: '#47ebb4' },
        entity: { color: '#47ebb4', cursor: 'help' },
        url: { color: '#47ebb4' },
        '.language-css .token.string': { color: '#47ebb4' },
        '.language-scss .token.string': { color: '#47ebb4' },
        '.style .token.string': { color: '#47ebb4' },
        'attr-value': { color: '#47ebb4' },
        keyword: { color: '#47ebb4' },
        control: { color: '#47ebb4' },
        directive: { color: '#47ebb4' },
        unit: { color: '#47ebb4' },
        statement: { color: '#47ebb4' },
        regex: { color: '#47ebb4' },
        atrule: { color: '#47ebb4' },
        placeholder: { color: '#47ebb4' },
        variable: { color: '#47ebb4' },
        deleted: { textDecoration: 'line-through' },
        inserted: { borderBottom: '1px dotted #ebf4ff', textDecoration: 'none' },
        italic: { fontStyle: 'italic' },
        important: { fontWeight: 'bold', color: '#7eb6f6' },
        bold: { fontWeight: 'bold' },
        'pre > code.highlight': { Outline: '.4em solid #34659d', OutlineOffset: '.4em' },
        '.line-numbers.line-numbers .line-numbers-rows': { borderRightColor: '#1f2932' },
        '.line-numbers .line-numbers-rows > span:before': { color: '#2c3847' },
        '.line-highlight.line-highlight': {
          background:
            'linear-gradient(to right, rgba(10, 163, 112, 0.2) 70%, rgba(10, 163, 112, 0))',
        },
      };
      t.default = e;
    },
    95211: function (x, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var e = {
        'code[class*="language-"]': {
          fontFamily:
            'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
          fontSize: '14px',
          lineHeight: '1.375',
          direction: 'ltr',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          background: '#24242e',
          color: '#767693',
        },
        'pre[class*="language-"]': {
          fontFamily:
            'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
          fontSize: '14px',
          lineHeight: '1.375',
          direction: 'ltr',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          background: '#24242e',
          color: '#767693',
          padding: '1em',
          margin: '.5em 0',
          overflow: 'auto',
        },
        'pre > code[class*="language-"]': { fontSize: '1em' },
        'pre[class*="language-"]::-moz-selection': { textShadow: 'none', background: '#5151e6' },
        'pre[class*="language-"] ::-moz-selection': { textShadow: 'none', background: '#5151e6' },
        'code[class*="language-"]::-moz-selection': { textShadow: 'none', background: '#5151e6' },
        'code[class*="language-"] ::-moz-selection': { textShadow: 'none', background: '#5151e6' },
        'pre[class*="language-"]::selection': { textShadow: 'none', background: '#5151e6' },
        'pre[class*="language-"] ::selection': { textShadow: 'none', background: '#5151e6' },
        'code[class*="language-"]::selection': { textShadow: 'none', background: '#5151e6' },
        'code[class*="language-"] ::selection': { textShadow: 'none', background: '#5151e6' },
        ':not(pre) > code[class*="language-"]': { padding: '.1em', borderRadius: '.3em' },
        comment: { color: '#5b5b76' },
        prolog: { color: '#5b5b76' },
        doctype: { color: '#5b5b76' },
        cdata: { color: '#5b5b76' },
        punctuation: { color: '#5b5b76' },
        namespace: { Opacity: '.7' },
        tag: { color: '#dd672c' },
        operator: { color: '#dd672c' },
        number: { color: '#dd672c' },
        property: { color: '#767693' },
        function: { color: '#767693' },
        'tag-id': { color: '#ebebff' },
        selector: { color: '#ebebff' },
        'atrule-id': { color: '#ebebff' },
        'code.language-javascript': { color: '#aaaaca' },
        'attr-name': { color: '#aaaaca' },
        'code.language-css': { color: '#fe8c52' },
        'code.language-scss': { color: '#fe8c52' },
        boolean: { color: '#fe8c52' },
        string: { color: '#fe8c52' },
        entity: { color: '#fe8c52', cursor: 'help' },
        url: { color: '#fe8c52' },
        '.language-css .token.string': { color: '#fe8c52' },
        '.language-scss .token.string': { color: '#fe8c52' },
        '.style .token.string': { color: '#fe8c52' },
        'attr-value': { color: '#fe8c52' },
        keyword: { color: '#fe8c52' },
        control: { color: '#fe8c52' },
        directive: { color: '#fe8c52' },
        unit: { color: '#fe8c52' },
        statement: { color: '#fe8c52' },
        regex: { color: '#fe8c52' },
        atrule: { color: '#fe8c52' },
        placeholder: { color: '#fe8c52' },
        variable: { color: '#fe8c52' },
        deleted: { textDecoration: 'line-through' },
        inserted: { borderBottom: '1px dotted #ebebff', textDecoration: 'none' },
        italic: { fontStyle: 'italic' },
        important: { fontWeight: 'bold', color: '#aaaaca' },
        bold: { fontWeight: 'bold' },
        'pre > code.highlight': { Outline: '.4em solid #7676f4', OutlineOffset: '.4em' },
        '.line-numbers.line-numbers .line-numbers-rows': { borderRightColor: '#262631' },
        '.line-numbers .line-numbers-rows > span:before': { color: '#393949' },
        '.line-highlight.line-highlight': {
          background:
            'linear-gradient(to right, rgba(221, 103, 44, 0.2) 70%, rgba(221, 103, 44, 0))',
        },
      };
      t.default = e;
    },
    83512: function (x, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var e = {
        'code[class*="language-"]': {
          fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
          fontSize: '1em',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          wordWrap: 'normal',
          lineHeight: '1.5',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          background: 'black',
          color: 'white',
          boxShadow: '-.3em 0 0 .3em black, .3em 0 0 .3em black',
        },
        'pre[class*="language-"]': {
          fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
          fontSize: '1em',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          wordWrap: 'normal',
          lineHeight: '1.5',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          padding: '.4em .8em',
          margin: '.5em 0',
          overflow: 'auto',
          background: `url('data:image/svg+xml;charset=utf-8,<svg%20version%3D"1.1"%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20width%3D"100"%20height%3D"100"%20fill%3D"rgba(0%2C0%2C0%2C.2)">%0D%0A<polygon%20points%3D"0%2C50%2050%2C0%200%2C0"%20%2F>%0D%0A<polygon%20points%3D"0%2C100%2050%2C100%20100%2C50%20100%2C0"%20%2F>%0D%0A<%2Fsvg>')`,
          backgroundSize: '1em 1em',
        },
        ':not(pre) > code[class*="language-"]': {
          padding: '.2em',
          borderRadius: '.3em',
          boxShadow: 'none',
          whiteSpace: 'normal',
        },
        comment: { color: '#aaa' },
        prolog: { color: '#aaa' },
        doctype: { color: '#aaa' },
        cdata: { color: '#aaa' },
        punctuation: { color: '#999' },
        namespace: { Opacity: '.7' },
        property: { color: '#0cf' },
        tag: { color: '#0cf' },
        boolean: { color: '#0cf' },
        number: { color: '#0cf' },
        constant: { color: '#0cf' },
        symbol: { color: '#0cf' },
        selector: { color: 'yellow' },
        'attr-name': { color: 'yellow' },
        string: { color: 'yellow' },
        char: { color: 'yellow' },
        builtin: { color: 'yellow' },
        operator: { color: 'yellowgreen' },
        entity: { color: 'yellowgreen', cursor: 'help' },
        url: { color: 'yellowgreen' },
        '.language-css .token.string': { color: 'yellowgreen' },
        variable: { color: 'yellowgreen' },
        inserted: { color: 'yellowgreen' },
        atrule: { color: 'deeppink' },
        'attr-value': { color: 'deeppink' },
        keyword: { color: 'deeppink' },
        regex: { color: 'orange' },
        important: { color: 'orange', fontWeight: 'bold' },
        bold: { fontWeight: 'bold' },
        italic: { fontStyle: 'italic' },
        deleted: { color: 'red' },
        'pre.diff-highlight.diff-highlight > code .token.deleted:not(.prefix)': {
          backgroundColor: 'rgba(255, 0, 0, .3)',
          display: 'inline',
        },
        'pre > code.diff-highlight.diff-highlight .token.deleted:not(.prefix)': {
          backgroundColor: 'rgba(255, 0, 0, .3)',
          display: 'inline',
        },
        'pre.diff-highlight.diff-highlight > code .token.inserted:not(.prefix)': {
          backgroundColor: 'rgba(0, 255, 128, .3)',
          display: 'inline',
        },
        'pre > code.diff-highlight.diff-highlight .token.inserted:not(.prefix)': {
          backgroundColor: 'rgba(0, 255, 128, .3)',
          display: 'inline',
        },
      };
      t.default = e;
    },
    55200: function (x, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var e = {
        'code[class*="language-"]': {
          color: '#393A34',
          fontFamily: '"Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace',
          direction: 'ltr',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          fontSize: '.9em',
          lineHeight: '1.2em',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
        },
        'pre[class*="language-"]': {
          color: '#393A34',
          fontFamily: '"Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace',
          direction: 'ltr',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          fontSize: '.9em',
          lineHeight: '1.2em',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          padding: '1em',
          margin: '.5em 0',
          overflow: 'auto',
          border: '1px solid #dddddd',
          backgroundColor: 'white',
        },
        'pre > code[class*="language-"]': { fontSize: '1em' },
        'pre[class*="language-"]::-moz-selection': { background: '#b3d4fc' },
        'pre[class*="language-"] ::-moz-selection': { background: '#b3d4fc' },
        'code[class*="language-"]::-moz-selection': { background: '#b3d4fc' },
        'code[class*="language-"] ::-moz-selection': { background: '#b3d4fc' },
        'pre[class*="language-"]::selection': { background: '#b3d4fc' },
        'pre[class*="language-"] ::selection': { background: '#b3d4fc' },
        'code[class*="language-"]::selection': { background: '#b3d4fc' },
        'code[class*="language-"] ::selection': { background: '#b3d4fc' },
        ':not(pre) > code[class*="language-"]': {
          padding: '.2em',
          paddingTop: '1px',
          paddingBottom: '1px',
          background: '#f8f8f8',
          border: '1px solid #dddddd',
        },
        comment: { color: '#999988', fontStyle: 'italic' },
        prolog: { color: '#999988', fontStyle: 'italic' },
        doctype: { color: '#999988', fontStyle: 'italic' },
        cdata: { color: '#999988', fontStyle: 'italic' },
        namespace: { Opacity: '.7' },
        string: { color: '#e3116c' },
        'attr-value': { color: '#e3116c' },
        punctuation: { color: '#393A34' },
        operator: { color: '#393A34' },
        entity: { color: '#36acaa' },
        url: { color: '#36acaa' },
        symbol: { color: '#36acaa' },
        number: { color: '#36acaa' },
        boolean: { color: '#36acaa' },
        variable: { color: '#36acaa' },
        constant: { color: '#36acaa' },
        property: { color: '#36acaa' },
        regex: { color: '#36acaa' },
        inserted: { color: '#36acaa' },
        atrule: { color: '#00a4db' },
        keyword: { color: '#00a4db' },
        'attr-name': { color: '#00a4db' },
        '.language-autohotkey .token.selector': { color: '#00a4db' },
        function: { color: '#9a050f', fontWeight: 'bold' },
        deleted: { color: '#9a050f' },
        '.language-autohotkey .token.tag': { color: '#9a050f' },
        tag: { color: '#00009f' },
        selector: { color: '#00009f' },
        '.language-autohotkey .token.keyword': { color: '#00009f' },
        important: { fontWeight: 'bold' },
        bold: { fontWeight: 'bold' },
        italic: { fontStyle: 'italic' },
      };
      t.default = e;
    },
    44717: function (x, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var e = {
        'code[class*="language-"]': {
          color: '#ebdbb2',
          fontFamily: 'Consolas, Monaco, "Andale Mono", monospace',
          direction: 'ltr',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          lineHeight: '1.5',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
        },
        'pre[class*="language-"]': {
          color: '#ebdbb2',
          fontFamily: 'Consolas, Monaco, "Andale Mono", monospace',
          direction: 'ltr',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          lineHeight: '1.5',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          padding: '1em',
          margin: '0.5em 0',
          overflow: 'auto',
          background: '#1d2021',
        },
        'pre[class*="language-"]::-moz-selection': { color: '#fbf1c7', background: '#7c6f64' },
        'pre[class*="language-"] ::-moz-selection': { color: '#fbf1c7', background: '#7c6f64' },
        'code[class*="language-"]::-moz-selection': { color: '#fbf1c7', background: '#7c6f64' },
        'code[class*="language-"] ::-moz-selection': { color: '#fbf1c7', background: '#7c6f64' },
        'pre[class*="language-"]::selection': { color: '#fbf1c7', background: '#7c6f64' },
        'pre[class*="language-"] ::selection': { color: '#fbf1c7', background: '#7c6f64' },
        'code[class*="language-"]::selection': { color: '#fbf1c7', background: '#7c6f64' },
        'code[class*="language-"] ::selection': { color: '#fbf1c7', background: '#7c6f64' },
        ':not(pre) > code[class*="language-"]': {
          background: '#1d2021',
          padding: '0.1em',
          borderRadius: '0.3em',
        },
        comment: { color: '#a89984' },
        prolog: { color: '#a89984' },
        cdata: { color: '#a89984' },
        delimiter: { color: '#fb4934' },
        boolean: { color: '#fb4934' },
        keyword: { color: '#fb4934' },
        selector: { color: '#fb4934' },
        important: { color: '#fb4934' },
        atrule: { color: '#fb4934' },
        operator: { color: '#a89984' },
        punctuation: { color: '#a89984' },
        'attr-name': { color: '#a89984' },
        tag: { color: '#fabd2f' },
        'tag.punctuation': { color: '#fabd2f' },
        doctype: { color: '#fabd2f' },
        builtin: { color: '#fabd2f' },
        entity: { color: '#d3869b' },
        number: { color: '#d3869b' },
        symbol: { color: '#d3869b' },
        property: { color: '#fb4934' },
        constant: { color: '#fb4934' },
        variable: { color: '#fb4934' },
        string: { color: '#b8bb26' },
        char: { color: '#b8bb26' },
        'attr-value': { color: '#a89984' },
        'attr-value.punctuation': { color: '#a89984' },
        url: { color: '#b8bb26', textDecoration: 'underline' },
        function: { color: '#fabd2f' },
        regex: { background: '#b8bb26' },
        bold: { fontWeight: 'bold' },
        italic: { fontStyle: 'italic' },
        inserted: { background: '#a89984' },
        deleted: { background: '#fb4934' },
      };
      t.default = e;
    },
    64084: function (x, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var e = {
        'code[class*="language-"]': {
          color: '#3c3836',
          fontFamily: 'Consolas, Monaco, "Andale Mono", monospace',
          direction: 'ltr',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          lineHeight: '1.5',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
        },
        'pre[class*="language-"]': {
          color: '#3c3836',
          fontFamily: 'Consolas, Monaco, "Andale Mono", monospace',
          direction: 'ltr',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          lineHeight: '1.5',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          padding: '1em',
          margin: '0.5em 0',
          overflow: 'auto',
          background: '#f9f5d7',
        },
        'pre[class*="language-"]::-moz-selection': { color: '#282828', background: '#a89984' },
        'pre[class*="language-"] ::-moz-selection': { color: '#282828', background: '#a89984' },
        'code[class*="language-"]::-moz-selection': { color: '#282828', background: '#a89984' },
        'code[class*="language-"] ::-moz-selection': { color: '#282828', background: '#a89984' },
        'pre[class*="language-"]::selection': { color: '#282828', background: '#a89984' },
        'pre[class*="language-"] ::selection': { color: '#282828', background: '#a89984' },
        'code[class*="language-"]::selection': { color: '#282828', background: '#a89984' },
        'code[class*="language-"] ::selection': { color: '#282828', background: '#a89984' },
        ':not(pre) > code[class*="language-"]': {
          background: '#f9f5d7',
          padding: '0.1em',
          borderRadius: '0.3em',
        },
        comment: { color: '#7c6f64' },
        prolog: { color: '#7c6f64' },
        cdata: { color: '#7c6f64' },
        delimiter: { color: '#9d0006' },
        boolean: { color: '#9d0006' },
        keyword: { color: '#9d0006' },
        selector: { color: '#9d0006' },
        important: { color: '#9d0006' },
        atrule: { color: '#9d0006' },
        operator: { color: '#7c6f64' },
        punctuation: { color: '#7c6f64' },
        'attr-name': { color: '#7c6f64' },
        tag: { color: '#b57614' },
        'tag.punctuation': { color: '#b57614' },
        doctype: { color: '#b57614' },
        builtin: { color: '#b57614' },
        entity: { color: '#8f3f71' },
        number: { color: '#8f3f71' },
        symbol: { color: '#8f3f71' },
        property: { color: '#9d0006' },
        constant: { color: '#9d0006' },
        variable: { color: '#9d0006' },
        string: { color: '#797403' },
        char: { color: '#797403' },
        'attr-value': { color: '#7c6f64' },
        'attr-value.punctuation': { color: '#7c6f64' },
        url: { color: '#797403', textDecoration: 'underline' },
        function: { color: '#b57614' },
        regex: { background: '#797403' },
        bold: { fontWeight: 'bold' },
        italic: { fontStyle: 'italic' },
        inserted: { background: '#7c6f64' },
        deleted: { background: '#9d0006' },
      };
      t.default = e;
    },
    65491: function (x, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var e = {
        "code[class*='language-']": {
          color: '#d6e7ff',
          background: '#030314',
          textShadow: 'none',
          fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
          fontSize: '1em',
          lineHeight: '1.5',
          letterSpacing: '.2px',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          wordWrap: 'normal',
          textAlign: 'left',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
        },
        "pre[class*='language-']": {
          color: '#d6e7ff',
          background: '#030314',
          textShadow: 'none',
          fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
          fontSize: '1em',
          lineHeight: '1.5',
          letterSpacing: '.2px',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          wordWrap: 'normal',
          textAlign: 'left',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          border: '1px solid #2a4555',
          borderRadius: '5px',
          padding: '1.5em 1em',
          margin: '1em 0',
          overflow: 'auto',
        },
        "pre[class*='language-']::-moz-selection": {
          color: 'inherit',
          background: '#1d3b54',
          textShadow: 'none',
        },
        "pre[class*='language-'] ::-moz-selection": {
          color: 'inherit',
          background: '#1d3b54',
          textShadow: 'none',
        },
        "code[class*='language-']::-moz-selection": {
          color: 'inherit',
          background: '#1d3b54',
          textShadow: 'none',
        },
        "code[class*='language-'] ::-moz-selection": {
          color: 'inherit',
          background: '#1d3b54',
          textShadow: 'none',
        },
        "pre[class*='language-']::selection": {
          color: 'inherit',
          background: '#1d3b54',
          textShadow: 'none',
        },
        "pre[class*='language-'] ::selection": {
          color: 'inherit',
          background: '#1d3b54',
          textShadow: 'none',
        },
        "code[class*='language-']::selection": {
          color: 'inherit',
          background: '#1d3b54',
          textShadow: 'none',
        },
        "code[class*='language-'] ::selection": {
          color: 'inherit',
          background: '#1d3b54',
          textShadow: 'none',
        },
        ":not(pre) > code[class*='language-']": {
          color: '#f0f6f6',
          background: '#2a4555',
          padding: '0.2em 0.3em',
          borderRadius: '0.2em',
          boxDecorationBreak: 'clone',
        },
        comment: { color: '#446e69' },
        prolog: { color: '#446e69' },
        doctype: { color: '#446e69' },
        cdata: { color: '#446e69' },
        punctuation: { color: '#d6b007' },
        property: { color: '#d6e7ff' },
        tag: { color: '#d6e7ff' },
        boolean: { color: '#d6e7ff' },
        number: { color: '#d6e7ff' },
        constant: { color: '#d6e7ff' },
        symbol: { color: '#d6e7ff' },
        deleted: { color: '#d6e7ff' },
        selector: { color: '#e60067' },
        'attr-name': { color: '#e60067' },
        builtin: { color: '#e60067' },
        inserted: { color: '#e60067' },
        string: { color: '#49c6ec' },
        char: { color: '#49c6ec' },
        operator: { color: '#ec8e01', background: 'transparent' },
        entity: { color: '#ec8e01', background: 'transparent' },
        url: { color: '#ec8e01', background: 'transparent' },
        '.language-css .token.string': { color: '#ec8e01', background: 'transparent' },
        '.style .token.string': { color: '#ec8e01', background: 'transparent' },
        atrule: { color: '#0fe468' },
        'attr-value': { color: '#0fe468' },
        keyword: { color: '#0fe468' },
        function: { color: '#78f3e9' },
        'class-name': { color: '#78f3e9' },
        regex: { color: '#d6e7ff' },
        important: { color: '#d6e7ff' },
        variable: { color: '#d6e7ff' },
      };
      t.default = e;
    },
    32081: function (x, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var e = {
        'code[class*="language-"]': {
          fontFamily:
            '"Fira Mono", Menlo, Monaco, "Lucida Console", "Courier New", Courier, monospace',
          fontSize: '16px',
          lineHeight: '1.375',
          direction: 'ltr',
          textAlign: 'left',
          wordSpacing: 'normal',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-all',
          wordWrap: 'break-word',
          background: '#322931',
          color: '#b9b5b8',
        },
        'pre[class*="language-"]': {
          fontFamily:
            '"Fira Mono", Menlo, Monaco, "Lucida Console", "Courier New", Courier, monospace',
          fontSize: '16px',
          lineHeight: '1.375',
          direction: 'ltr',
          textAlign: 'left',
          wordSpacing: 'normal',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-all',
          wordWrap: 'break-word',
          background: '#322931',
          color: '#b9b5b8',
          padding: '1em',
          margin: '.5em 0',
          overflow: 'auto',
        },
        'pre > code[class*="language-"]': { fontSize: '1em' },
        ':not(pre) > code[class*="language-"]': { padding: '.1em', borderRadius: '.3em' },
        comment: { color: '#797379' },
        prolog: { color: '#797379' },
        doctype: { color: '#797379' },
        cdata: { color: '#797379' },
        punctuation: { color: '#b9b5b8' },
        '.namespace': { Opacity: '.7' },
        null: { color: '#fd8b19' },
        operator: { color: '#fd8b19' },
        boolean: { color: '#fd8b19' },
        number: { color: '#fd8b19' },
        property: { color: '#fdcc59' },
        tag: { color: '#1290bf' },
        string: { color: '#149b93' },
        selector: { color: '#c85e7c' },
        'attr-name': { color: '#fd8b19' },
        entity: { color: '#149b93', cursor: 'help' },
        url: { color: '#149b93' },
        '.language-css .token.string': { color: '#149b93' },
        '.style .token.string': { color: '#149b93' },
        'attr-value': { color: '#8fc13e' },
        keyword: { color: '#8fc13e' },
        control: { color: '#8fc13e' },
        directive: { color: '#8fc13e' },
        unit: { color: '#8fc13e' },
        statement: { color: '#149b93' },
        regex: { color: '#149b93' },
        atrule: { color: '#149b93' },
        placeholder: { color: '#1290bf' },
        variable: { color: '#1290bf' },
        important: { color: '#dd464c', fontWeight: 'bold' },
        'pre > code.highlight': { Outline: '.4em solid red', OutlineOffset: '.4em' },
      };
      t.default = e;
    },
    45217: function (x, t, e) {
      var g,
        b = e(33894);
      (g = { value: !0 }),
        (g = {
          enumerable: !0,
          get: function () {
            return m.default;
          },
        }),
        (g = {
          enumerable: !0,
          get: function () {
            return F.default;
          },
        }),
        (g = {
          enumerable: !0,
          get: function () {
            return z.default;
          },
        }),
        (g = {
          enumerable: !0,
          get: function () {
            return S.default;
          },
        }),
        (g = {
          enumerable: !0,
          get: function () {
            return W.default;
          },
        }),
        (g = {
          enumerable: !0,
          get: function () {
            return D.default;
          },
        }),
        (g = {
          enumerable: !0,
          get: function () {
            return n.default;
          },
        }),
        (g = {
          enumerable: !0,
          get: function () {
            return fe.default;
          },
        }),
        (g = {
          enumerable: !0,
          get: function () {
            return Q.default;
          },
        }),
        (g = {
          enumerable: !0,
          get: function () {
            return j.default;
          },
        }),
        (g = {
          enumerable: !0,
          get: function () {
            return xe.default;
          },
        }),
        (g = {
          enumerable: !0,
          get: function () {
            return Pe.default;
          },
        }),
        (g = {
          enumerable: !0,
          get: function () {
            return _.default;
          },
        }),
        (g = {
          enumerable: !0,
          get: function () {
            return re.default;
          },
        }),
        (g = {
          enumerable: !0,
          get: function () {
            return R.default;
          },
        }),
        (g = {
          enumerable: !0,
          get: function () {
            return I.default;
          },
        }),
        (g = {
          enumerable: !0,
          get: function () {
            return L.default;
          },
        }),
        (g = {
          enumerable: !0,
          get: function () {
            return ae.default;
          },
        }),
        (g = {
          enumerable: !0,
          get: function () {
            return se.default;
          },
        }),
        (g = {
          enumerable: !0,
          get: function () {
            return oe.default;
          },
        }),
        (g = {
          enumerable: !0,
          get: function () {
            return Ee.default;
          },
        }),
        (g = {
          enumerable: !0,
          get: function () {
            return q.default;
          },
        }),
        (g = {
          enumerable: !0,
          get: function () {
            return Ue.default;
          },
        }),
        (g = {
          enumerable: !0,
          get: function () {
            return je.default;
          },
        }),
        (g = {
          enumerable: !0,
          get: function () {
            return Ke.default;
          },
        }),
        (g = {
          enumerable: !0,
          get: function () {
            return $e.default;
          },
        }),
        (g = {
          enumerable: !0,
          get: function () {
            return Ye.default;
          },
        }),
        (g = {
          enumerable: !0,
          get: function () {
            return _e.default;
          },
        }),
        (g = {
          enumerable: !0,
          get: function () {
            return Ie.default;
          },
        }),
        (g = {
          enumerable: !0,
          get: function () {
            return E.default;
          },
        }),
        (g = {
          enumerable: !0,
          get: function () {
            return qe.default;
          },
        }),
        (g = {
          enumerable: !0,
          get: function () {
            return Fe.default;
          },
        }),
        (g = {
          enumerable: !0,
          get: function () {
            return Ze.default;
          },
        }),
        (g = {
          enumerable: !0,
          get: function () {
            return u.default;
          },
        }),
        (g = {
          enumerable: !0,
          get: function () {
            return Ge.default;
          },
        }),
        (g = {
          enumerable: !0,
          get: function () {
            return Xe.default;
          },
        }),
        (g = {
          enumerable: !0,
          get: function () {
            return he.default;
          },
        }),
        (g = {
          enumerable: !0,
          get: function () {
            return de.default;
          },
        }),
        (g = {
          enumerable: !0,
          get: function () {
            return C.default;
          },
        }),
        (g = {
          enumerable: !0,
          get: function () {
            return d.default;
          },
        }),
        Object.defineProperty(t, 'vs', {
          enumerable: !0,
          get: function () {
            return so.default;
          },
        }),
        Object.defineProperty(t, 'YC', {
          enumerable: !0,
          get: function () {
            return eo.default;
          },
        }),
        (g = {
          enumerable: !0,
          get: function () {
            return go.default;
          },
        }),
        (g = {
          enumerable: !0,
          get: function () {
            return fo.default;
          },
        });
      var n = b(e(32435)),
        j = b(e(16758)),
        ae = b(e(83512)),
        E = b(e(78435)),
        he = b(e(4124)),
        C = b(e(72154)),
        d = b(e(65230)),
        u = b(e(83039)),
        m = b(e(88535)),
        F = b(e(57836)),
        z = b(e(67163)),
        S = b(e(97090)),
        W = b(e(60023)),
        D = b(e(8290)),
        fe = b(e(74454)),
        Q = b(e(53084)),
        xe = b(e(29139)),
        Pe = b(e(79008)),
        _ = b(e(84087)),
        re = b(e(7129)),
        R = b(e(69237)),
        I = b(e(6624)),
        L = b(e(95211)),
        se = b(e(55200)),
        oe = b(e(44717)),
        Ee = b(e(64084)),
        q = b(e(65491)),
        Ue = b(e(32081)),
        je = b(e(61188)),
        Ke = b(e(48930)),
        $e = b(e(83148)),
        Ye = b(e(83850)),
        _e = b(e(98241)),
        Ie = b(e(46716)),
        qe = b(e(56857)),
        Fe = b(e(7273)),
        Ze = b(e(8889)),
        Ge = b(e(34817)),
        Xe = b(e(41361)),
        de = b(e(16973)),
        so = b(e(31850)),
        eo = b(e(67034)),
        go = b(e(84006)),
        fo = b(e(67376));
    },
    61188: function (x, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var e = {
        'code[class*="language-"]': {
          color: '#f8f8f2',
          background: 'none',
          textShadow: '0 1px rgba(0, 0, 0, 0.3)',
          fontFamily: "Monaco, Consolas, 'Andale Mono', 'Ubuntu Mono', monospace",
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          wordWrap: 'normal',
          lineHeight: '1.5',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
        },
        'pre[class*="language-"]': {
          color: '#f8f8f2',
          background: '#263E52',
          textShadow: '0 1px rgba(0, 0, 0, 0.3)',
          fontFamily: "Monaco, Consolas, 'Andale Mono', 'Ubuntu Mono', monospace",
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          wordWrap: 'normal',
          lineHeight: '1.5',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          padding: '1em',
          margin: '.5em 0',
          overflow: 'auto',
          borderRadius: '0.3em',
        },
        ':not(pre) > code[class*="language-"]': {
          background: '#263E52',
          padding: '.1em',
          borderRadius: '.3em',
          whiteSpace: 'normal',
        },
        comment: { color: '#5c98cd' },
        prolog: { color: '#5c98cd' },
        doctype: { color: '#5c98cd' },
        cdata: { color: '#5c98cd' },
        punctuation: { color: '#f8f8f2' },
        '.namespace': { Opacity: '.7' },
        property: { color: '#F05E5D' },
        tag: { color: '#F05E5D' },
        constant: { color: '#F05E5D' },
        symbol: { color: '#F05E5D' },
        deleted: { color: '#F05E5D' },
        boolean: { color: '#BC94F9' },
        number: { color: '#BC94F9' },
        selector: { color: '#FCFCD6' },
        'attr-name': { color: '#FCFCD6' },
        string: { color: '#FCFCD6' },
        char: { color: '#FCFCD6' },
        builtin: { color: '#FCFCD6' },
        inserted: { color: '#FCFCD6' },
        operator: { color: '#f8f8f2' },
        entity: { color: '#f8f8f2', cursor: 'help' },
        url: { color: '#f8f8f2' },
        '.language-css .token.string': { color: '#f8f8f2' },
        '.style .token.string': { color: '#f8f8f2' },
        variable: { color: '#f8f8f2' },
        atrule: { color: '#66D8EF' },
        'attr-value': { color: '#66D8EF' },
        function: { color: '#66D8EF' },
        'class-name': { color: '#66D8EF' },
        keyword: { color: '#6EB26E' },
        regex: { color: '#F05E5D' },
        important: { color: '#F05E5D', fontWeight: 'bold' },
        bold: { fontWeight: 'bold' },
        italic: { fontStyle: 'italic' },
      };
      t.default = e;
    },
    48930: function (x, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var e = {
        'code[class*="language-"]': {
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          wordWrap: 'normal',
          color: '#eee',
          background: '#2f2f2f',
          fontFamily: 'Roboto Mono, monospace',
          fontSize: '1em',
          lineHeight: '1.5em',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
        },
        'pre[class*="language-"]': {
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          wordWrap: 'normal',
          color: '#eee',
          background: '#2f2f2f',
          fontFamily: 'Roboto Mono, monospace',
          fontSize: '1em',
          lineHeight: '1.5em',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          overflow: 'auto',
          position: 'relative',
          margin: '0.5em 0',
          padding: '1.25em 1em',
        },
        'code[class*="language-"]::-moz-selection': { background: '#363636' },
        'pre[class*="language-"]::-moz-selection': { background: '#363636' },
        'code[class*="language-"] ::-moz-selection': { background: '#363636' },
        'pre[class*="language-"] ::-moz-selection': { background: '#363636' },
        'code[class*="language-"]::selection': { background: '#363636' },
        'pre[class*="language-"]::selection': { background: '#363636' },
        'code[class*="language-"] ::selection': { background: '#363636' },
        'pre[class*="language-"] ::selection': { background: '#363636' },
        ':not(pre) > code[class*="language-"]': {
          whiteSpace: 'normal',
          borderRadius: '0.2em',
          padding: '0.1em',
        },
        '.language-css > code': { color: '#fd9170' },
        '.language-sass > code': { color: '#fd9170' },
        '.language-scss > code': { color: '#fd9170' },
        '[class*="language-"] .namespace': { Opacity: '0.7' },
        atrule: { color: '#c792ea' },
        'attr-name': { color: '#ffcb6b' },
        'attr-value': { color: '#a5e844' },
        attribute: { color: '#a5e844' },
        boolean: { color: '#c792ea' },
        builtin: { color: '#ffcb6b' },
        cdata: { color: '#80cbc4' },
        char: { color: '#80cbc4' },
        class: { color: '#ffcb6b' },
        'class-name': { color: '#f2ff00' },
        comment: { color: '#616161' },
        constant: { color: '#c792ea' },
        deleted: { color: '#ff6666' },
        doctype: { color: '#616161' },
        entity: { color: '#ff6666' },
        function: { color: '#c792ea' },
        hexcode: { color: '#f2ff00' },
        id: { color: '#c792ea', fontWeight: 'bold' },
        important: { color: '#c792ea', fontWeight: 'bold' },
        inserted: { color: '#80cbc4' },
        keyword: { color: '#c792ea' },
        number: { color: '#fd9170' },
        operator: { color: '#89ddff' },
        prolog: { color: '#616161' },
        property: { color: '#80cbc4' },
        'pseudo-class': { color: '#a5e844' },
        'pseudo-element': { color: '#a5e844' },
        punctuation: { color: '#89ddff' },
        regex: { color: '#f2ff00' },
        selector: { color: '#ff6666' },
        string: { color: '#a5e844' },
        symbol: { color: '#c792ea' },
        tag: { color: '#ff6666' },
        unit: { color: '#fd9170' },
        url: { color: '#ff6666' },
        variable: { color: '#ff6666' },
      };
      t.default = e;
    },
    83148: function (x, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var e = {
        'code[class*="language-"]': {
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          wordWrap: 'normal',
          color: '#90a4ae',
          background: '#fafafa',
          fontFamily: 'Roboto Mono, monospace',
          fontSize: '1em',
          lineHeight: '1.5em',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
        },
        'pre[class*="language-"]': {
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          wordWrap: 'normal',
          color: '#90a4ae',
          background: '#fafafa',
          fontFamily: 'Roboto Mono, monospace',
          fontSize: '1em',
          lineHeight: '1.5em',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          overflow: 'auto',
          position: 'relative',
          margin: '0.5em 0',
          padding: '1.25em 1em',
        },
        'code[class*="language-"]::-moz-selection': { background: '#cceae7', color: '#263238' },
        'pre[class*="language-"]::-moz-selection': { background: '#cceae7', color: '#263238' },
        'code[class*="language-"] ::-moz-selection': { background: '#cceae7', color: '#263238' },
        'pre[class*="language-"] ::-moz-selection': { background: '#cceae7', color: '#263238' },
        'code[class*="language-"]::selection': { background: '#cceae7', color: '#263238' },
        'pre[class*="language-"]::selection': { background: '#cceae7', color: '#263238' },
        'code[class*="language-"] ::selection': { background: '#cceae7', color: '#263238' },
        'pre[class*="language-"] ::selection': { background: '#cceae7', color: '#263238' },
        ':not(pre) > code[class*="language-"]': {
          whiteSpace: 'normal',
          borderRadius: '0.2em',
          padding: '0.1em',
        },
        '.language-css > code': { color: '#f76d47' },
        '.language-sass > code': { color: '#f76d47' },
        '.language-scss > code': { color: '#f76d47' },
        '[class*="language-"] .namespace': { Opacity: '0.7' },
        atrule: { color: '#7c4dff' },
        'attr-name': { color: '#39adb5' },
        'attr-value': { color: '#f6a434' },
        attribute: { color: '#f6a434' },
        boolean: { color: '#7c4dff' },
        builtin: { color: '#39adb5' },
        cdata: { color: '#39adb5' },
        char: { color: '#39adb5' },
        class: { color: '#39adb5' },
        'class-name': { color: '#6182b8' },
        comment: { color: '#aabfc9' },
        constant: { color: '#7c4dff' },
        deleted: { color: '#e53935' },
        doctype: { color: '#aabfc9' },
        entity: { color: '#e53935' },
        function: { color: '#7c4dff' },
        hexcode: { color: '#f76d47' },
        id: { color: '#7c4dff', fontWeight: 'bold' },
        important: { color: '#7c4dff', fontWeight: 'bold' },
        inserted: { color: '#39adb5' },
        keyword: { color: '#7c4dff' },
        number: { color: '#f76d47' },
        operator: { color: '#39adb5' },
        prolog: { color: '#aabfc9' },
        property: { color: '#39adb5' },
        'pseudo-class': { color: '#f6a434' },
        'pseudo-element': { color: '#f6a434' },
        punctuation: { color: '#39adb5' },
        regex: { color: '#6182b8' },
        selector: { color: '#e53935' },
        string: { color: '#f6a434' },
        symbol: { color: '#7c4dff' },
        tag: { color: '#e53935' },
        unit: { color: '#f76d47' },
        url: { color: '#e53935' },
        variable: { color: '#e53935' },
      };
      t.default = e;
    },
    83850: function (x, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var e = {
        'code[class*="language-"]': {
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          wordWrap: 'normal',
          color: '#c3cee3',
          background: '#263238',
          fontFamily: 'Roboto Mono, monospace',
          fontSize: '1em',
          lineHeight: '1.5em',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
        },
        'pre[class*="language-"]': {
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          wordWrap: 'normal',
          color: '#c3cee3',
          background: '#263238',
          fontFamily: 'Roboto Mono, monospace',
          fontSize: '1em',
          lineHeight: '1.5em',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          overflow: 'auto',
          position: 'relative',
          margin: '0.5em 0',
          padding: '1.25em 1em',
        },
        'code[class*="language-"]::-moz-selection': { background: '#363636' },
        'pre[class*="language-"]::-moz-selection': { background: '#363636' },
        'code[class*="language-"] ::-moz-selection': { background: '#363636' },
        'pre[class*="language-"] ::-moz-selection': { background: '#363636' },
        'code[class*="language-"]::selection': { background: '#363636' },
        'pre[class*="language-"]::selection': { background: '#363636' },
        'code[class*="language-"] ::selection': { background: '#363636' },
        'pre[class*="language-"] ::selection': { background: '#363636' },
        ':not(pre) > code[class*="language-"]': {
          whiteSpace: 'normal',
          borderRadius: '0.2em',
          padding: '0.1em',
        },
        '.language-css > code': { color: '#fd9170' },
        '.language-sass > code': { color: '#fd9170' },
        '.language-scss > code': { color: '#fd9170' },
        '[class*="language-"] .namespace': { Opacity: '0.7' },
        atrule: { color: '#c792ea' },
        'attr-name': { color: '#ffcb6b' },
        'attr-value': { color: '#c3e88d' },
        attribute: { color: '#c3e88d' },
        boolean: { color: '#c792ea' },
        builtin: { color: '#ffcb6b' },
        cdata: { color: '#80cbc4' },
        char: { color: '#80cbc4' },
        class: { color: '#ffcb6b' },
        'class-name': { color: '#f2ff00' },
        color: { color: '#f2ff00' },
        comment: { color: '#546e7a' },
        constant: { color: '#c792ea' },
        deleted: { color: '#f07178' },
        doctype: { color: '#546e7a' },
        entity: { color: '#f07178' },
        function: { color: '#c792ea' },
        hexcode: { color: '#f2ff00' },
        id: { color: '#c792ea', fontWeight: 'bold' },
        important: { color: '#c792ea', fontWeight: 'bold' },
        inserted: { color: '#80cbc4' },
        keyword: { color: '#c792ea', fontStyle: 'italic' },
        number: { color: '#fd9170' },
        operator: { color: '#89ddff' },
        prolog: { color: '#546e7a' },
        property: { color: '#80cbc4' },
        'pseudo-class': { color: '#c3e88d' },
        'pseudo-element': { color: '#c3e88d' },
        punctuation: { color: '#89ddff' },
        regex: { color: '#f2ff00' },
        selector: { color: '#f07178' },
        string: { color: '#c3e88d' },
        symbol: { color: '#c792ea' },
        tag: { color: '#f07178' },
        unit: { color: '#f07178' },
        url: { color: '#fd9170' },
        variable: { color: '#f07178' },
      };
      t.default = e;
    },
    98241: function (x, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var e = {
        'code[class*="language-"]': {
          color: '#d6deeb',
          fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          wordWrap: 'normal',
          lineHeight: '1.5',
          fontSize: '1em',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
        },
        'pre[class*="language-"]': {
          color: 'white',
          fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          wordWrap: 'normal',
          lineHeight: '1.5',
          fontSize: '1em',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          padding: '1em',
          margin: '0.5em 0',
          overflow: 'auto',
          background: '#011627',
        },
        'pre[class*="language-"]::-moz-selection': {
          textShadow: 'none',
          background: 'rgba(29, 59, 83, 0.99)',
        },
        'pre[class*="language-"] ::-moz-selection': {
          textShadow: 'none',
          background: 'rgba(29, 59, 83, 0.99)',
        },
        'code[class*="language-"]::-moz-selection': {
          textShadow: 'none',
          background: 'rgba(29, 59, 83, 0.99)',
        },
        'code[class*="language-"] ::-moz-selection': {
          textShadow: 'none',
          background: 'rgba(29, 59, 83, 0.99)',
        },
        'pre[class*="language-"]::selection': {
          textShadow: 'none',
          background: 'rgba(29, 59, 83, 0.99)',
        },
        'pre[class*="language-"] ::selection': {
          textShadow: 'none',
          background: 'rgba(29, 59, 83, 0.99)',
        },
        'code[class*="language-"]::selection': {
          textShadow: 'none',
          background: 'rgba(29, 59, 83, 0.99)',
        },
        'code[class*="language-"] ::selection': {
          textShadow: 'none',
          background: 'rgba(29, 59, 83, 0.99)',
        },
        ':not(pre) > code[class*="language-"]': {
          color: 'white',
          background: '#011627',
          padding: '0.1em',
          borderRadius: '0.3em',
          whiteSpace: 'normal',
        },
        comment: { color: 'rgb(99, 119, 119)', fontStyle: 'italic' },
        prolog: { color: 'rgb(99, 119, 119)', fontStyle: 'italic' },
        cdata: { color: 'rgb(99, 119, 119)', fontStyle: 'italic' },
        punctuation: { color: 'rgb(199, 146, 234)' },
        '.namespace': { color: 'rgb(178, 204, 214)' },
        deleted: { color: 'rgba(239, 83, 80, 0.56)', fontStyle: 'italic' },
        symbol: { color: 'rgb(128, 203, 196)' },
        property: { color: 'rgb(128, 203, 196)' },
        tag: { color: 'rgb(127, 219, 202)' },
        operator: { color: 'rgb(127, 219, 202)' },
        keyword: { color: 'rgb(127, 219, 202)' },
        boolean: { color: 'rgb(255, 88, 116)' },
        number: { color: 'rgb(247, 140, 108)' },
        constant: { color: 'rgb(130, 170, 255)' },
        function: { color: 'rgb(130, 170, 255)' },
        builtin: { color: 'rgb(130, 170, 255)' },
        char: { color: 'rgb(130, 170, 255)' },
        selector: { color: 'rgb(199, 146, 234)', fontStyle: 'italic' },
        doctype: { color: 'rgb(199, 146, 234)', fontStyle: 'italic' },
        'attr-name': { color: 'rgb(173, 219, 103)', fontStyle: 'italic' },
        inserted: { color: 'rgb(173, 219, 103)', fontStyle: 'italic' },
        string: { color: 'rgb(173, 219, 103)' },
        url: { color: 'rgb(173, 219, 103)' },
        entity: { color: 'rgb(173, 219, 103)' },
        '.language-css .token.string': { color: 'rgb(173, 219, 103)' },
        '.style .token.string': { color: 'rgb(173, 219, 103)' },
        'class-name': { color: 'rgb(255, 203, 139)' },
        atrule: { color: 'rgb(255, 203, 139)' },
        'attr-value': { color: 'rgb(255, 203, 139)' },
        regex: { color: 'rgb(214, 222, 235)' },
        important: { color: 'rgb(214, 222, 235)', fontWeight: 'bold' },
        variable: { color: 'rgb(214, 222, 235)' },
        bold: { fontWeight: 'bold' },
        italic: { fontStyle: 'italic' },
      };
      t.default = e;
    },
    46716: function (x, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var e = {
        'code[class*="language-"]': {
          color: '#f8f8f2',
          background: 'none',
          fontFamily: `"Fira Code", Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace`,
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          wordWrap: 'normal',
          lineHeight: '1.5',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
        },
        'pre[class*="language-"]': {
          color: '#f8f8f2',
          background: '#2E3440',
          fontFamily: `"Fira Code", Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace`,
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          wordWrap: 'normal',
          lineHeight: '1.5',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          padding: '1em',
          margin: '.5em 0',
          overflow: 'auto',
          borderRadius: '0.3em',
        },
        ':not(pre) > code[class*="language-"]': {
          background: '#2E3440',
          padding: '.1em',
          borderRadius: '.3em',
          whiteSpace: 'normal',
        },
        comment: { color: '#636f88' },
        prolog: { color: '#636f88' },
        doctype: { color: '#636f88' },
        cdata: { color: '#636f88' },
        punctuation: { color: '#81A1C1' },
        '.namespace': { Opacity: '.7' },
        property: { color: '#81A1C1' },
        tag: { color: '#81A1C1' },
        constant: { color: '#81A1C1' },
        symbol: { color: '#81A1C1' },
        deleted: { color: '#81A1C1' },
        number: { color: '#B48EAD' },
        boolean: { color: '#81A1C1' },
        selector: { color: '#A3BE8C' },
        'attr-name': { color: '#A3BE8C' },
        string: { color: '#A3BE8C' },
        char: { color: '#A3BE8C' },
        builtin: { color: '#A3BE8C' },
        inserted: { color: '#A3BE8C' },
        operator: { color: '#81A1C1' },
        entity: { color: '#81A1C1', cursor: 'help' },
        url: { color: '#81A1C1' },
        '.language-css .token.string': { color: '#81A1C1' },
        '.style .token.string': { color: '#81A1C1' },
        variable: { color: '#81A1C1' },
        atrule: { color: '#88C0D0' },
        'attr-value': { color: '#88C0D0' },
        function: { color: '#88C0D0' },
        'class-name': { color: '#88C0D0' },
        keyword: { color: '#81A1C1' },
        regex: { color: '#EBCB8B' },
        important: { color: '#EBCB8B', fontWeight: 'bold' },
        bold: { fontWeight: 'bold' },
        italic: { fontStyle: 'italic' },
      };
      t.default = e;
    },
    78435: function (x, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var e = {
        'code[class*="language-"]': {
          color: '#f8f8f2',
          background: 'none',
          textShadow: '0 1px rgba(0, 0, 0, 0.3)',
          fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
          fontSize: '1em',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          wordWrap: 'normal',
          lineHeight: '1.5',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
        },
        'pre[class*="language-"]': {
          color: '#f8f8f2',
          background: '#272822',
          textShadow: '0 1px rgba(0, 0, 0, 0.3)',
          fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
          fontSize: '1em',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          wordWrap: 'normal',
          lineHeight: '1.5',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          padding: '1em',
          margin: '.5em 0',
          overflow: 'auto',
          borderRadius: '0.3em',
        },
        ':not(pre) > code[class*="language-"]': {
          background: '#272822',
          padding: '.1em',
          borderRadius: '.3em',
          whiteSpace: 'normal',
        },
        comment: { color: '#8292a2' },
        prolog: { color: '#8292a2' },
        doctype: { color: '#8292a2' },
        cdata: { color: '#8292a2' },
        punctuation: { color: '#f8f8f2' },
        namespace: { Opacity: '.7' },
        property: { color: '#f92672' },
        tag: { color: '#f92672' },
        constant: { color: '#f92672' },
        symbol: { color: '#f92672' },
        deleted: { color: '#f92672' },
        boolean: { color: '#ae81ff' },
        number: { color: '#ae81ff' },
        selector: { color: '#a6e22e' },
        'attr-name': { color: '#a6e22e' },
        string: { color: '#a6e22e' },
        char: { color: '#a6e22e' },
        builtin: { color: '#a6e22e' },
        inserted: { color: '#a6e22e' },
        operator: { color: '#f8f8f2' },
        entity: { color: '#f8f8f2', cursor: 'help' },
        url: { color: '#f8f8f2' },
        '.language-css .token.string': { color: '#f8f8f2' },
        '.style .token.string': { color: '#f8f8f2' },
        variable: { color: '#f8f8f2' },
        atrule: { color: '#e6db74' },
        'attr-value': { color: '#e6db74' },
        function: { color: '#e6db74' },
        'class-name': { color: '#e6db74' },
        keyword: { color: '#66d9ef' },
        regex: { color: '#fd971f' },
        important: { color: '#fd971f', fontWeight: 'bold' },
        bold: { fontWeight: 'bold' },
        italic: { fontStyle: 'italic' },
      };
      t.default = e;
    },
    56857: function (x, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var e = {
        'code[class*="language-"]': {
          background: 'hsl(220, 13%, 18%)',
          color: 'hsl(220, 14%, 71%)',
          textShadow: '0 1px rgba(0, 0, 0, 0.3)',
          fontFamily: '"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace',
          direction: 'ltr',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          lineHeight: '1.5',
          MozTabSize: '2',
          OTabSize: '2',
          tabSize: '2',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
        },
        'pre[class*="language-"]': {
          background: 'hsl(220, 13%, 18%)',
          color: 'hsl(220, 14%, 71%)',
          textShadow: '0 1px rgba(0, 0, 0, 0.3)',
          fontFamily: '"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace',
          direction: 'ltr',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          lineHeight: '1.5',
          MozTabSize: '2',
          OTabSize: '2',
          tabSize: '2',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          padding: '1em',
          margin: '0.5em 0',
          overflow: 'auto',
          borderRadius: '0.3em',
        },
        'code[class*="language-"]::-moz-selection': {
          background: 'hsl(220, 13%, 28%)',
          color: 'inherit',
          textShadow: 'none',
        },
        'code[class*="language-"] *::-moz-selection': {
          background: 'hsl(220, 13%, 28%)',
          color: 'inherit',
          textShadow: 'none',
        },
        'pre[class*="language-"] *::-moz-selection': {
          background: 'hsl(220, 13%, 28%)',
          color: 'inherit',
          textShadow: 'none',
        },
        'code[class*="language-"]::selection': {
          background: 'hsl(220, 13%, 28%)',
          color: 'inherit',
          textShadow: 'none',
        },
        'code[class*="language-"] *::selection': {
          background: 'hsl(220, 13%, 28%)',
          color: 'inherit',
          textShadow: 'none',
        },
        'pre[class*="language-"] *::selection': {
          background: 'hsl(220, 13%, 28%)',
          color: 'inherit',
          textShadow: 'none',
        },
        ':not(pre) > code[class*="language-"]': {
          padding: '0.2em 0.3em',
          borderRadius: '0.3em',
          whiteSpace: 'normal',
        },
        comment: { color: 'hsl(220, 10%, 40%)', fontStyle: 'italic' },
        prolog: { color: 'hsl(220, 10%, 40%)' },
        cdata: { color: 'hsl(220, 10%, 40%)' },
        doctype: { color: 'hsl(220, 14%, 71%)' },
        punctuation: { color: 'hsl(220, 14%, 71%)' },
        entity: { color: 'hsl(220, 14%, 71%)', cursor: 'help' },
        'attr-name': { color: 'hsl(29, 54%, 61%)' },
        'class-name': { color: 'hsl(29, 54%, 61%)' },
        boolean: { color: 'hsl(29, 54%, 61%)' },
        constant: { color: 'hsl(29, 54%, 61%)' },
        number: { color: 'hsl(29, 54%, 61%)' },
        atrule: { color: 'hsl(29, 54%, 61%)' },
        keyword: { color: 'hsl(286, 60%, 67%)' },
        property: { color: 'hsl(355, 65%, 65%)' },
        tag: { color: 'hsl(355, 65%, 65%)' },
        symbol: { color: 'hsl(355, 65%, 65%)' },
        deleted: { color: 'hsl(355, 65%, 65%)' },
        important: { color: 'hsl(355, 65%, 65%)' },
        selector: { color: 'hsl(95, 38%, 62%)' },
        string: { color: 'hsl(95, 38%, 62%)' },
        char: { color: 'hsl(95, 38%, 62%)' },
        builtin: { color: 'hsl(95, 38%, 62%)' },
        inserted: { color: 'hsl(95, 38%, 62%)' },
        regex: { color: 'hsl(95, 38%, 62%)' },
        'attr-value': { color: 'hsl(95, 38%, 62%)' },
        'attr-value > .token.punctuation': { color: 'hsl(95, 38%, 62%)' },
        variable: { color: 'hsl(207, 82%, 66%)' },
        operator: { color: 'hsl(207, 82%, 66%)' },
        function: { color: 'hsl(207, 82%, 66%)' },
        url: { color: 'hsl(187, 47%, 55%)' },
        'attr-value > .token.punctuation.attr-equals': { color: 'hsl(220, 14%, 71%)' },
        'special-attr > .token.attr-value > .token.value.css': { color: 'hsl(220, 14%, 71%)' },
        '.language-css .token.selector': { color: 'hsl(355, 65%, 65%)' },
        '.language-css .token.property': { color: 'hsl(220, 14%, 71%)' },
        '.language-css .token.function': { color: 'hsl(187, 47%, 55%)' },
        '.language-css .token.url > .token.function': { color: 'hsl(187, 47%, 55%)' },
        '.language-css .token.url > .token.string.url': { color: 'hsl(95, 38%, 62%)' },
        '.language-css .token.important': { color: 'hsl(286, 60%, 67%)' },
        '.language-css .token.atrule .token.rule': { color: 'hsl(286, 60%, 67%)' },
        '.language-javascript .token.operator': { color: 'hsl(286, 60%, 67%)' },
        '.language-javascript .token.template-string > .token.interpolation > .token.interpolation-punctuation.punctuation':
          { color: 'hsl(5, 48%, 51%)' },
        '.language-json .token.operator': { color: 'hsl(220, 14%, 71%)' },
        '.language-json .token.null.keyword': { color: 'hsl(29, 54%, 61%)' },
        '.language-markdown .token.url': { color: 'hsl(220, 14%, 71%)' },
        '.language-markdown .token.url > .token.operator': { color: 'hsl(220, 14%, 71%)' },
        '.language-markdown .token.url-reference.url > .token.string': {
          color: 'hsl(220, 14%, 71%)',
        },
        '.language-markdown .token.url > .token.content': { color: 'hsl(207, 82%, 66%)' },
        '.language-markdown .token.url > .token.url': { color: 'hsl(187, 47%, 55%)' },
        '.language-markdown .token.url-reference.url': { color: 'hsl(187, 47%, 55%)' },
        '.language-markdown .token.blockquote.punctuation': {
          color: 'hsl(220, 10%, 40%)',
          fontStyle: 'italic',
        },
        '.language-markdown .token.hr.punctuation': {
          color: 'hsl(220, 10%, 40%)',
          fontStyle: 'italic',
        },
        '.language-markdown .token.code-snippet': { color: 'hsl(95, 38%, 62%)' },
        '.language-markdown .token.bold .token.content': { color: 'hsl(29, 54%, 61%)' },
        '.language-markdown .token.italic .token.content': { color: 'hsl(286, 60%, 67%)' },
        '.language-markdown .token.strike .token.content': { color: 'hsl(355, 65%, 65%)' },
        '.language-markdown .token.strike .token.punctuation': { color: 'hsl(355, 65%, 65%)' },
        '.language-markdown .token.list.punctuation': { color: 'hsl(355, 65%, 65%)' },
        '.language-markdown .token.title.important > .token.punctuation': {
          color: 'hsl(355, 65%, 65%)',
        },
        bold: { fontWeight: 'bold' },
        italic: { fontStyle: 'italic' },
        namespace: { Opacity: '0.8' },
        'token.tab:not(:empty):before': { color: 'hsla(220, 14%, 71%, 0.15)', textShadow: 'none' },
        'token.cr:before': { color: 'hsla(220, 14%, 71%, 0.15)', textShadow: 'none' },
        'token.lf:before': { color: 'hsla(220, 14%, 71%, 0.15)', textShadow: 'none' },
        'token.space:before': { color: 'hsla(220, 14%, 71%, 0.15)', textShadow: 'none' },
        'div.code-toolbar > .toolbar.toolbar > .toolbar-item': { marginRight: '0.4em' },
        'div.code-toolbar > .toolbar.toolbar > .toolbar-item > button': {
          background: 'hsl(220, 13%, 26%)',
          color: 'hsl(220, 9%, 55%)',
          padding: '0.1em 0.4em',
          borderRadius: '0.3em',
        },
        'div.code-toolbar > .toolbar.toolbar > .toolbar-item > a': {
          background: 'hsl(220, 13%, 26%)',
          color: 'hsl(220, 9%, 55%)',
          padding: '0.1em 0.4em',
          borderRadius: '0.3em',
        },
        'div.code-toolbar > .toolbar.toolbar > .toolbar-item > span': {
          background: 'hsl(220, 13%, 26%)',
          color: 'hsl(220, 9%, 55%)',
          padding: '0.1em 0.4em',
          borderRadius: '0.3em',
        },
        'div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:hover': {
          background: 'hsl(220, 13%, 28%)',
          color: 'hsl(220, 14%, 71%)',
        },
        'div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:focus': {
          background: 'hsl(220, 13%, 28%)',
          color: 'hsl(220, 14%, 71%)',
        },
        'div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:hover': {
          background: 'hsl(220, 13%, 28%)',
          color: 'hsl(220, 14%, 71%)',
        },
        'div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:focus': {
          background: 'hsl(220, 13%, 28%)',
          color: 'hsl(220, 14%, 71%)',
        },
        'div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:hover': {
          background: 'hsl(220, 13%, 28%)',
          color: 'hsl(220, 14%, 71%)',
        },
        'div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:focus': {
          background: 'hsl(220, 13%, 28%)',
          color: 'hsl(220, 14%, 71%)',
        },
        '.line-highlight.line-highlight': { background: 'hsla(220, 100%, 80%, 0.04)' },
        '.line-highlight.line-highlight:before': {
          background: 'hsl(220, 13%, 26%)',
          color: 'hsl(220, 14%, 71%)',
          padding: '0.1em 0.6em',
          borderRadius: '0.3em',
          boxShadow: '0 2px 0 0 rgba(0, 0, 0, 0.2)',
        },
        '.line-highlight.line-highlight[data-end]:after': {
          background: 'hsl(220, 13%, 26%)',
          color: 'hsl(220, 14%, 71%)',
          padding: '0.1em 0.6em',
          borderRadius: '0.3em',
          boxShadow: '0 2px 0 0 rgba(0, 0, 0, 0.2)',
        },
        'pre[id].linkable-line-numbers.linkable-line-numbers span.line-numbers-rows > span:hover:before':
          { backgroundColor: 'hsla(220, 100%, 80%, 0.04)' },
        '.line-numbers.line-numbers .line-numbers-rows': {
          borderRightColor: 'hsla(220, 14%, 71%, 0.15)',
        },
        '.command-line .command-line-prompt': { borderRightColor: 'hsla(220, 14%, 71%, 0.15)' },
        '.line-numbers .line-numbers-rows > span:before': { color: 'hsl(220, 14%, 45%)' },
        '.command-line .command-line-prompt > span:before': { color: 'hsl(220, 14%, 45%)' },
        '.rainbow-braces .token.token.punctuation.brace-level-1': { color: 'hsl(355, 65%, 65%)' },
        '.rainbow-braces .token.token.punctuation.brace-level-5': { color: 'hsl(355, 65%, 65%)' },
        '.rainbow-braces .token.token.punctuation.brace-level-9': { color: 'hsl(355, 65%, 65%)' },
        '.rainbow-braces .token.token.punctuation.brace-level-2': { color: 'hsl(95, 38%, 62%)' },
        '.rainbow-braces .token.token.punctuation.brace-level-6': { color: 'hsl(95, 38%, 62%)' },
        '.rainbow-braces .token.token.punctuation.brace-level-10': { color: 'hsl(95, 38%, 62%)' },
        '.rainbow-braces .token.token.punctuation.brace-level-3': { color: 'hsl(207, 82%, 66%)' },
        '.rainbow-braces .token.token.punctuation.brace-level-7': { color: 'hsl(207, 82%, 66%)' },
        '.rainbow-braces .token.token.punctuation.brace-level-11': { color: 'hsl(207, 82%, 66%)' },
        '.rainbow-braces .token.token.punctuation.brace-level-4': { color: 'hsl(286, 60%, 67%)' },
        '.rainbow-braces .token.token.punctuation.brace-level-8': { color: 'hsl(286, 60%, 67%)' },
        '.rainbow-braces .token.token.punctuation.brace-level-12': { color: 'hsl(286, 60%, 67%)' },
        'pre.diff-highlight > code .token.token.deleted:not(.prefix)': {
          backgroundColor: 'hsla(353, 100%, 66%, 0.15)',
        },
        'pre > code.diff-highlight .token.token.deleted:not(.prefix)': {
          backgroundColor: 'hsla(353, 100%, 66%, 0.15)',
        },
        'pre.diff-highlight > code .token.token.deleted:not(.prefix)::-moz-selection': {
          backgroundColor: 'hsla(353, 95%, 66%, 0.25)',
        },
        'pre.diff-highlight > code .token.token.deleted:not(.prefix) *::-moz-selection': {
          backgroundColor: 'hsla(353, 95%, 66%, 0.25)',
        },
        'pre > code.diff-highlight .token.token.deleted:not(.prefix)::-moz-selection': {
          backgroundColor: 'hsla(353, 95%, 66%, 0.25)',
        },
        'pre > code.diff-highlight .token.token.deleted:not(.prefix) *::-moz-selection': {
          backgroundColor: 'hsla(353, 95%, 66%, 0.25)',
        },
        'pre.diff-highlight > code .token.token.deleted:not(.prefix)::selection': {
          backgroundColor: 'hsla(353, 95%, 66%, 0.25)',
        },
        'pre.diff-highlight > code .token.token.deleted:not(.prefix) *::selection': {
          backgroundColor: 'hsla(353, 95%, 66%, 0.25)',
        },
        'pre > code.diff-highlight .token.token.deleted:not(.prefix)::selection': {
          backgroundColor: 'hsla(353, 95%, 66%, 0.25)',
        },
        'pre > code.diff-highlight .token.token.deleted:not(.prefix) *::selection': {
          backgroundColor: 'hsla(353, 95%, 66%, 0.25)',
        },
        'pre.diff-highlight > code .token.token.inserted:not(.prefix)': {
          backgroundColor: 'hsla(137, 100%, 55%, 0.15)',
        },
        'pre > code.diff-highlight .token.token.inserted:not(.prefix)': {
          backgroundColor: 'hsla(137, 100%, 55%, 0.15)',
        },
        'pre.diff-highlight > code .token.token.inserted:not(.prefix)::-moz-selection': {
          backgroundColor: 'hsla(135, 73%, 55%, 0.25)',
        },
        'pre.diff-highlight > code .token.token.inserted:not(.prefix) *::-moz-selection': {
          backgroundColor: 'hsla(135, 73%, 55%, 0.25)',
        },
        'pre > code.diff-highlight .token.token.inserted:not(.prefix)::-moz-selection': {
          backgroundColor: 'hsla(135, 73%, 55%, 0.25)',
        },
        'pre > code.diff-highlight .token.token.inserted:not(.prefix) *::-moz-selection': {
          backgroundColor: 'hsla(135, 73%, 55%, 0.25)',
        },
        'pre.diff-highlight > code .token.token.inserted:not(.prefix)::selection': {
          backgroundColor: 'hsla(135, 73%, 55%, 0.25)',
        },
        'pre.diff-highlight > code .token.token.inserted:not(.prefix) *::selection': {
          backgroundColor: 'hsla(135, 73%, 55%, 0.25)',
        },
        'pre > code.diff-highlight .token.token.inserted:not(.prefix)::selection': {
          backgroundColor: 'hsla(135, 73%, 55%, 0.25)',
        },
        'pre > code.diff-highlight .token.token.inserted:not(.prefix) *::selection': {
          backgroundColor: 'hsla(135, 73%, 55%, 0.25)',
        },
        '.prism-previewer.prism-previewer:before': { borderColor: 'hsl(224, 13%, 17%)' },
        '.prism-previewer-gradient.prism-previewer-gradient div': {
          borderColor: 'hsl(224, 13%, 17%)',
          borderRadius: '0.3em',
        },
        '.prism-previewer-color.prism-previewer-color:before': { borderRadius: '0.3em' },
        '.prism-previewer-easing.prism-previewer-easing:before': { borderRadius: '0.3em' },
        '.prism-previewer.prism-previewer:after': { borderTopColor: 'hsl(224, 13%, 17%)' },
        '.prism-previewer-flipped.prism-previewer-flipped.after': {
          borderBottomColor: 'hsl(224, 13%, 17%)',
        },
        '.prism-previewer-angle.prism-previewer-angle:before': { background: 'hsl(219, 13%, 22%)' },
        '.prism-previewer-time.prism-previewer-time:before': { background: 'hsl(219, 13%, 22%)' },
        '.prism-previewer-easing.prism-previewer-easing': { background: 'hsl(219, 13%, 22%)' },
        '.prism-previewer-angle.prism-previewer-angle circle': {
          stroke: 'hsl(220, 14%, 71%)',
          strokeOpacity: '1',
        },
        '.prism-previewer-time.prism-previewer-time circle': {
          stroke: 'hsl(220, 14%, 71%)',
          strokeOpacity: '1',
        },
        '.prism-previewer-easing.prism-previewer-easing circle': {
          stroke: 'hsl(220, 14%, 71%)',
          fill: 'transparent',
        },
        '.prism-previewer-easing.prism-previewer-easing path': { stroke: 'hsl(220, 14%, 71%)' },
        '.prism-previewer-easing.prism-previewer-easing line': { stroke: 'hsl(220, 14%, 71%)' },
      };
      t.default = e;
    },
    7273: function (x, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var e = {
        'code[class*="language-"]': {
          background: 'hsl(230, 1%, 98%)',
          color: 'hsl(230, 8%, 24%)',
          fontFamily: '"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace',
          direction: 'ltr',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          lineHeight: '1.5',
          MozTabSize: '2',
          OTabSize: '2',
          tabSize: '2',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
        },
        'pre[class*="language-"]': {
          background: 'hsl(230, 1%, 98%)',
          color: 'hsl(230, 8%, 24%)',
          fontFamily: '"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace',
          direction: 'ltr',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          lineHeight: '1.5',
          MozTabSize: '2',
          OTabSize: '2',
          tabSize: '2',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          padding: '1em',
          margin: '0.5em 0',
          overflow: 'auto',
          borderRadius: '0.3em',
        },
        'code[class*="language-"]::-moz-selection': {
          background: 'hsl(230, 1%, 90%)',
          color: 'inherit',
        },
        'code[class*="language-"] *::-moz-selection': {
          background: 'hsl(230, 1%, 90%)',
          color: 'inherit',
        },
        'pre[class*="language-"] *::-moz-selection': {
          background: 'hsl(230, 1%, 90%)',
          color: 'inherit',
        },
        'code[class*="language-"]::selection': {
          background: 'hsl(230, 1%, 90%)',
          color: 'inherit',
        },
        'code[class*="language-"] *::selection': {
          background: 'hsl(230, 1%, 90%)',
          color: 'inherit',
        },
        'pre[class*="language-"] *::selection': {
          background: 'hsl(230, 1%, 90%)',
          color: 'inherit',
        },
        ':not(pre) > code[class*="language-"]': {
          padding: '0.2em 0.3em',
          borderRadius: '0.3em',
          whiteSpace: 'normal',
        },
        comment: { color: 'hsl(230, 4%, 64%)', fontStyle: 'italic' },
        prolog: { color: 'hsl(230, 4%, 64%)' },
        cdata: { color: 'hsl(230, 4%, 64%)' },
        doctype: { color: 'hsl(230, 8%, 24%)' },
        punctuation: { color: 'hsl(230, 8%, 24%)' },
        entity: { color: 'hsl(230, 8%, 24%)', cursor: 'help' },
        'attr-name': { color: 'hsl(35, 99%, 36%)' },
        'class-name': { color: 'hsl(35, 99%, 36%)' },
        boolean: { color: 'hsl(35, 99%, 36%)' },
        constant: { color: 'hsl(35, 99%, 36%)' },
        number: { color: 'hsl(35, 99%, 36%)' },
        atrule: { color: 'hsl(35, 99%, 36%)' },
        keyword: { color: 'hsl(301, 63%, 40%)' },
        property: { color: 'hsl(5, 74%, 59%)' },
        tag: { color: 'hsl(5, 74%, 59%)' },
        symbol: { color: 'hsl(5, 74%, 59%)' },
        deleted: { color: 'hsl(5, 74%, 59%)' },
        important: { color: 'hsl(5, 74%, 59%)' },
        selector: { color: 'hsl(119, 34%, 47%)' },
        string: { color: 'hsl(119, 34%, 47%)' },
        char: { color: 'hsl(119, 34%, 47%)' },
        builtin: { color: 'hsl(119, 34%, 47%)' },
        inserted: { color: 'hsl(119, 34%, 47%)' },
        regex: { color: 'hsl(119, 34%, 47%)' },
        'attr-value': { color: 'hsl(119, 34%, 47%)' },
        'attr-value > .token.punctuation': { color: 'hsl(119, 34%, 47%)' },
        variable: { color: 'hsl(221, 87%, 60%)' },
        operator: { color: 'hsl(221, 87%, 60%)' },
        function: { color: 'hsl(221, 87%, 60%)' },
        url: { color: 'hsl(198, 99%, 37%)' },
        'attr-value > .token.punctuation.attr-equals': { color: 'hsl(230, 8%, 24%)' },
        'special-attr > .token.attr-value > .token.value.css': { color: 'hsl(230, 8%, 24%)' },
        '.language-css .token.selector': { color: 'hsl(5, 74%, 59%)' },
        '.language-css .token.property': { color: 'hsl(230, 8%, 24%)' },
        '.language-css .token.function': { color: 'hsl(198, 99%, 37%)' },
        '.language-css .token.url > .token.function': { color: 'hsl(198, 99%, 37%)' },
        '.language-css .token.url > .token.string.url': { color: 'hsl(119, 34%, 47%)' },
        '.language-css .token.important': { color: 'hsl(301, 63%, 40%)' },
        '.language-css .token.atrule .token.rule': { color: 'hsl(301, 63%, 40%)' },
        '.language-javascript .token.operator': { color: 'hsl(301, 63%, 40%)' },
        '.language-javascript .token.template-string > .token.interpolation > .token.interpolation-punctuation.punctuation':
          { color: 'hsl(344, 84%, 43%)' },
        '.language-json .token.operator': { color: 'hsl(230, 8%, 24%)' },
        '.language-json .token.null.keyword': { color: 'hsl(35, 99%, 36%)' },
        '.language-markdown .token.url': { color: 'hsl(230, 8%, 24%)' },
        '.language-markdown .token.url > .token.operator': { color: 'hsl(230, 8%, 24%)' },
        '.language-markdown .token.url-reference.url > .token.string': {
          color: 'hsl(230, 8%, 24%)',
        },
        '.language-markdown .token.url > .token.content': { color: 'hsl(221, 87%, 60%)' },
        '.language-markdown .token.url > .token.url': { color: 'hsl(198, 99%, 37%)' },
        '.language-markdown .token.url-reference.url': { color: 'hsl(198, 99%, 37%)' },
        '.language-markdown .token.blockquote.punctuation': {
          color: 'hsl(230, 4%, 64%)',
          fontStyle: 'italic',
        },
        '.language-markdown .token.hr.punctuation': {
          color: 'hsl(230, 4%, 64%)',
          fontStyle: 'italic',
        },
        '.language-markdown .token.code-snippet': { color: 'hsl(119, 34%, 47%)' },
        '.language-markdown .token.bold .token.content': { color: 'hsl(35, 99%, 36%)' },
        '.language-markdown .token.italic .token.content': { color: 'hsl(301, 63%, 40%)' },
        '.language-markdown .token.strike .token.content': { color: 'hsl(5, 74%, 59%)' },
        '.language-markdown .token.strike .token.punctuation': { color: 'hsl(5, 74%, 59%)' },
        '.language-markdown .token.list.punctuation': { color: 'hsl(5, 74%, 59%)' },
        '.language-markdown .token.title.important > .token.punctuation': {
          color: 'hsl(5, 74%, 59%)',
        },
        bold: { fontWeight: 'bold' },
        italic: { fontStyle: 'italic' },
        namespace: { Opacity: '0.8' },
        'token.tab:not(:empty):before': { color: 'hsla(230, 8%, 24%, 0.2)' },
        'token.cr:before': { color: 'hsla(230, 8%, 24%, 0.2)' },
        'token.lf:before': { color: 'hsla(230, 8%, 24%, 0.2)' },
        'token.space:before': { color: 'hsla(230, 8%, 24%, 0.2)' },
        'div.code-toolbar > .toolbar.toolbar > .toolbar-item': { marginRight: '0.4em' },
        'div.code-toolbar > .toolbar.toolbar > .toolbar-item > button': {
          background: 'hsl(230, 1%, 90%)',
          color: 'hsl(230, 6%, 44%)',
          padding: '0.1em 0.4em',
          borderRadius: '0.3em',
        },
        'div.code-toolbar > .toolbar.toolbar > .toolbar-item > a': {
          background: 'hsl(230, 1%, 90%)',
          color: 'hsl(230, 6%, 44%)',
          padding: '0.1em 0.4em',
          borderRadius: '0.3em',
        },
        'div.code-toolbar > .toolbar.toolbar > .toolbar-item > span': {
          background: 'hsl(230, 1%, 90%)',
          color: 'hsl(230, 6%, 44%)',
          padding: '0.1em 0.4em',
          borderRadius: '0.3em',
        },
        'div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:hover': {
          background: 'hsl(230, 1%, 78%)',
          color: 'hsl(230, 8%, 24%)',
        },
        'div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:focus': {
          background: 'hsl(230, 1%, 78%)',
          color: 'hsl(230, 8%, 24%)',
        },
        'div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:hover': {
          background: 'hsl(230, 1%, 78%)',
          color: 'hsl(230, 8%, 24%)',
        },
        'div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:focus': {
          background: 'hsl(230, 1%, 78%)',
          color: 'hsl(230, 8%, 24%)',
        },
        'div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:hover': {
          background: 'hsl(230, 1%, 78%)',
          color: 'hsl(230, 8%, 24%)',
        },
        'div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:focus': {
          background: 'hsl(230, 1%, 78%)',
          color: 'hsl(230, 8%, 24%)',
        },
        '.line-highlight.line-highlight': { background: 'hsla(230, 8%, 24%, 0.05)' },
        '.line-highlight.line-highlight:before': {
          background: 'hsl(230, 1%, 90%)',
          color: 'hsl(230, 8%, 24%)',
          padding: '0.1em 0.6em',
          borderRadius: '0.3em',
          boxShadow: '0 2px 0 0 rgba(0, 0, 0, 0.2)',
        },
        '.line-highlight.line-highlight[data-end]:after': {
          background: 'hsl(230, 1%, 90%)',
          color: 'hsl(230, 8%, 24%)',
          padding: '0.1em 0.6em',
          borderRadius: '0.3em',
          boxShadow: '0 2px 0 0 rgba(0, 0, 0, 0.2)',
        },
        'pre[id].linkable-line-numbers.linkable-line-numbers span.line-numbers-rows > span:hover:before':
          { backgroundColor: 'hsla(230, 8%, 24%, 0.05)' },
        '.line-numbers.line-numbers .line-numbers-rows': {
          borderRightColor: 'hsla(230, 8%, 24%, 0.2)',
        },
        '.command-line .command-line-prompt': { borderRightColor: 'hsla(230, 8%, 24%, 0.2)' },
        '.line-numbers .line-numbers-rows > span:before': { color: 'hsl(230, 1%, 62%)' },
        '.command-line .command-line-prompt > span:before': { color: 'hsl(230, 1%, 62%)' },
        '.rainbow-braces .token.token.punctuation.brace-level-1': { color: 'hsl(5, 74%, 59%)' },
        '.rainbow-braces .token.token.punctuation.brace-level-5': { color: 'hsl(5, 74%, 59%)' },
        '.rainbow-braces .token.token.punctuation.brace-level-9': { color: 'hsl(5, 74%, 59%)' },
        '.rainbow-braces .token.token.punctuation.brace-level-2': { color: 'hsl(119, 34%, 47%)' },
        '.rainbow-braces .token.token.punctuation.brace-level-6': { color: 'hsl(119, 34%, 47%)' },
        '.rainbow-braces .token.token.punctuation.brace-level-10': { color: 'hsl(119, 34%, 47%)' },
        '.rainbow-braces .token.token.punctuation.brace-level-3': { color: 'hsl(221, 87%, 60%)' },
        '.rainbow-braces .token.token.punctuation.brace-level-7': { color: 'hsl(221, 87%, 60%)' },
        '.rainbow-braces .token.token.punctuation.brace-level-11': { color: 'hsl(221, 87%, 60%)' },
        '.rainbow-braces .token.token.punctuation.brace-level-4': { color: 'hsl(301, 63%, 40%)' },
        '.rainbow-braces .token.token.punctuation.brace-level-8': { color: 'hsl(301, 63%, 40%)' },
        '.rainbow-braces .token.token.punctuation.brace-level-12': { color: 'hsl(301, 63%, 40%)' },
        'pre.diff-highlight > code .token.token.deleted:not(.prefix)': {
          backgroundColor: 'hsla(353, 100%, 66%, 0.15)',
        },
        'pre > code.diff-highlight .token.token.deleted:not(.prefix)': {
          backgroundColor: 'hsla(353, 100%, 66%, 0.15)',
        },
        'pre.diff-highlight > code .token.token.deleted:not(.prefix)::-moz-selection': {
          backgroundColor: 'hsla(353, 95%, 66%, 0.25)',
        },
        'pre.diff-highlight > code .token.token.deleted:not(.prefix) *::-moz-selection': {
          backgroundColor: 'hsla(353, 95%, 66%, 0.25)',
        },
        'pre > code.diff-highlight .token.token.deleted:not(.prefix)::-moz-selection': {
          backgroundColor: 'hsla(353, 95%, 66%, 0.25)',
        },
        'pre > code.diff-highlight .token.token.deleted:not(.prefix) *::-moz-selection': {
          backgroundColor: 'hsla(353, 95%, 66%, 0.25)',
        },
        'pre.diff-highlight > code .token.token.deleted:not(.prefix)::selection': {
          backgroundColor: 'hsla(353, 95%, 66%, 0.25)',
        },
        'pre.diff-highlight > code .token.token.deleted:not(.prefix) *::selection': {
          backgroundColor: 'hsla(353, 95%, 66%, 0.25)',
        },
        'pre > code.diff-highlight .token.token.deleted:not(.prefix)::selection': {
          backgroundColor: 'hsla(353, 95%, 66%, 0.25)',
        },
        'pre > code.diff-highlight .token.token.deleted:not(.prefix) *::selection': {
          backgroundColor: 'hsla(353, 95%, 66%, 0.25)',
        },
        'pre.diff-highlight > code .token.token.inserted:not(.prefix)': {
          backgroundColor: 'hsla(137, 100%, 55%, 0.15)',
        },
        'pre > code.diff-highlight .token.token.inserted:not(.prefix)': {
          backgroundColor: 'hsla(137, 100%, 55%, 0.15)',
        },
        'pre.diff-highlight > code .token.token.inserted:not(.prefix)::-moz-selection': {
          backgroundColor: 'hsla(135, 73%, 55%, 0.25)',
        },
        'pre.diff-highlight > code .token.token.inserted:not(.prefix) *::-moz-selection': {
          backgroundColor: 'hsla(135, 73%, 55%, 0.25)',
        },
        'pre > code.diff-highlight .token.token.inserted:not(.prefix)::-moz-selection': {
          backgroundColor: 'hsla(135, 73%, 55%, 0.25)',
        },
        'pre > code.diff-highlight .token.token.inserted:not(.prefix) *::-moz-selection': {
          backgroundColor: 'hsla(135, 73%, 55%, 0.25)',
        },
        'pre.diff-highlight > code .token.token.inserted:not(.prefix)::selection': {
          backgroundColor: 'hsla(135, 73%, 55%, 0.25)',
        },
        'pre.diff-highlight > code .token.token.inserted:not(.prefix) *::selection': {
          backgroundColor: 'hsla(135, 73%, 55%, 0.25)',
        },
        'pre > code.diff-highlight .token.token.inserted:not(.prefix)::selection': {
          backgroundColor: 'hsla(135, 73%, 55%, 0.25)',
        },
        'pre > code.diff-highlight .token.token.inserted:not(.prefix) *::selection': {
          backgroundColor: 'hsla(135, 73%, 55%, 0.25)',
        },
        '.prism-previewer.prism-previewer:before': { borderColor: 'hsl(0, 0, 95%)' },
        '.prism-previewer-gradient.prism-previewer-gradient div': {
          borderColor: 'hsl(0, 0, 95%)',
          borderRadius: '0.3em',
        },
        '.prism-previewer-color.prism-previewer-color:before': { borderRadius: '0.3em' },
        '.prism-previewer-easing.prism-previewer-easing:before': { borderRadius: '0.3em' },
        '.prism-previewer.prism-previewer:after': { borderTopColor: 'hsl(0, 0, 95%)' },
        '.prism-previewer-flipped.prism-previewer-flipped.after': {
          borderBottomColor: 'hsl(0, 0, 95%)',
        },
        '.prism-previewer-angle.prism-previewer-angle:before': { background: 'hsl(0, 0%, 100%)' },
        '.prism-previewer-time.prism-previewer-time:before': { background: 'hsl(0, 0%, 100%)' },
        '.prism-previewer-easing.prism-previewer-easing': { background: 'hsl(0, 0%, 100%)' },
        '.prism-previewer-angle.prism-previewer-angle circle': {
          stroke: 'hsl(230, 8%, 24%)',
          strokeOpacity: '1',
        },
        '.prism-previewer-time.prism-previewer-time circle': {
          stroke: 'hsl(230, 8%, 24%)',
          strokeOpacity: '1',
        },
        '.prism-previewer-easing.prism-previewer-easing circle': {
          stroke: 'hsl(230, 8%, 24%)',
          fill: 'transparent',
        },
        '.prism-previewer-easing.prism-previewer-easing path': { stroke: 'hsl(230, 8%, 24%)' },
        '.prism-previewer-easing.prism-previewer-easing line': { stroke: 'hsl(230, 8%, 24%)' },
      };
      t.default = e;
    },
    8889: function (x, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var e = {
        'code[class*="language-"]': {
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-all',
          wordWrap: 'break-word',
          fontFamily: 'Menlo, Monaco, "Courier New", monospace',
          fontSize: '15px',
          lineHeight: '1.5',
          color: '#dccf8f',
          textShadow: '0',
        },
        'pre[class*="language-"]': {
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-all',
          wordWrap: 'break-word',
          fontFamily: 'Menlo, Monaco, "Courier New", monospace',
          fontSize: '15px',
          lineHeight: '1.5',
          color: '#DCCF8F',
          textShadow: '0',
          borderRadius: '5px',
          border: '1px solid #000',
          background:
            "#181914 url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAMAAA/+4ADkFkb2JlAGTAAAAAAf/bAIQACQYGBgcGCQcHCQ0IBwgNDwsJCQsPEQ4ODw4OERENDg4ODg0RERQUFhQUERoaHBwaGiYmJiYmKysrKysrKysrKwEJCAgJCgkMCgoMDwwODA8TDg4ODhMVDg4PDg4VGhMRERERExoXGhYWFhoXHR0aGh0dJCQjJCQrKysrKysrKysr/8AAEQgAjACMAwEiAAIRAQMRAf/EAF4AAQEBAAAAAAAAAAAAAAAAAAABBwEBAQAAAAAAAAAAAAAAAAAAAAIQAAEDAwIHAQEAAAAAAAAAAADwAREhYaExkUFRcYGxwdHh8REBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AyGFEjHaBS2fDDs2zkhKmBKktb7km+ZwwCnXPkLVmCTMItj6AXFxRS465/BTnkAJvkLkJe+7AKKoi2AtRS2zuAWsCb5GOlBN8gKfmuGHZ8MFqIth3ALmFoFwbwKWyAlTAp17uKqBvgBD8sM4fTjhvAhkzhaRkBMKBrfs7jGPIpzy7gFrAqnC0C0gB0EWwBDW2cBVQwm+QtPpa3wBO3sVvszCnLAhkzgL5/RLf13cLQd8/AGlu0Cb5HTx9KuAEieGJEdcehS3eRTp2ATdt3CpIm+QtZwAhROXFeb7swp/ahaM3kBE/jSIUBc/AWrgBN8uNFAl+b7sAXFxFn2YLUU5Ns7gFX8C4ib+hN8gFWXwK3bZglxEJm+gKdciLPsFV/TClsgJUwKJ5FVA7tvIFrfZhVfGJDcsCKaYgAqv6YRbE+RWOWBtu7+AL3yRalXLyKqAIIfk+zARbDgFyEsncYwJvlgFRW+GEWntIi2P0BooyFxcNr8Ep3+ANLbMO+QyhvbiqdgC0kVvgUUiLYgBS2QtPbiVI1/sgOmG9uO+Y8DW+7jS2zAOnj6O2BndwuIAUtkdRN8gFoK3wwXMQyZwHVbClsuNLd4E3yAUR6FVDBR+BafQGt93LVMxJTv8ABts4CVLhcfYWsCb5kC9/BHdU8CLYFY5bMAd+eX9MGthhpbA1vu4B7+RKkaW2Yq4AQtVBBFsAJU/AuIXBhN8gGWnstefhiZyWvLAEnbYS1uzSFP6Jvn4Baxx70JKkQojLib5AVTey1jjgkKJGO0AKWyOm7N7cSpgSpAdPH0Tfd/gp1z5C1ZgKqN9J2wFxcUUuAFLZAm+QC0Fb4YUVRFsAOvj4KW2dwtYE3yAWk/wS/PLMKfmuGHZ8MAXF/Ja32Yi5haAKWz4Ydm2cSpgU693Atb7km+Zwwh+WGcPpxw3gAkzCLY+iYUDW/Z3Adc/gpzyFrAqnALkJe+7DoItgAtRS2zuKqGE3yAx0oJvkdvYrfZmALURbDuL5/RLf13cAuDeBS2RpbtAm+QFVA3wR+3fUtFHoBDJnC0jIXH0HWsgMY8inPLuOkd9chp4z20ALQLSA8cI9jYAIa2zjzjBd8gRafS1vgiUho/kAKcsCGTOGWvoOpkAtB3z8Hm8x2Ff5ADp4+lXAlIvcmwH/2Q==') repeat left top",
          padding: '12px',
          overflow: 'auto',
        },
        'pre > code[class*="language-"]': { fontSize: '1em' },
        ':not(pre) > code[class*="language-"]': {
          borderRadius: '5px',
          border: '1px solid #000',
          color: '#DCCF8F',
          background:
            "#181914 url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAMAAA/+4ADkFkb2JlAGTAAAAAAf/bAIQACQYGBgcGCQcHCQ0IBwgNDwsJCQsPEQ4ODw4OERENDg4ODg0RERQUFhQUERoaHBwaGiYmJiYmKysrKysrKysrKwEJCAgJCgkMCgoMDwwODA8TDg4ODhMVDg4PDg4VGhMRERERExoXGhYWFhoXHR0aGh0dJCQjJCQrKysrKysrKysr/8AAEQgAjACMAwEiAAIRAQMRAf/EAF4AAQEBAAAAAAAAAAAAAAAAAAABBwEBAQAAAAAAAAAAAAAAAAAAAAIQAAEDAwIHAQEAAAAAAAAAAADwAREhYaExkUFRcYGxwdHh8REBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AyGFEjHaBS2fDDs2zkhKmBKktb7km+ZwwCnXPkLVmCTMItj6AXFxRS465/BTnkAJvkLkJe+7AKKoi2AtRS2zuAWsCb5GOlBN8gKfmuGHZ8MFqIth3ALmFoFwbwKWyAlTAp17uKqBvgBD8sM4fTjhvAhkzhaRkBMKBrfs7jGPIpzy7gFrAqnC0C0gB0EWwBDW2cBVQwm+QtPpa3wBO3sVvszCnLAhkzgL5/RLf13cLQd8/AGlu0Cb5HTx9KuAEieGJEdcehS3eRTp2ATdt3CpIm+QtZwAhROXFeb7swp/ahaM3kBE/jSIUBc/AWrgBN8uNFAl+b7sAXFxFn2YLUU5Ns7gFX8C4ib+hN8gFWXwK3bZglxEJm+gKdciLPsFV/TClsgJUwKJ5FVA7tvIFrfZhVfGJDcsCKaYgAqv6YRbE+RWOWBtu7+AL3yRalXLyKqAIIfk+zARbDgFyEsncYwJvlgFRW+GEWntIi2P0BooyFxcNr8Ep3+ANLbMO+QyhvbiqdgC0kVvgUUiLYgBS2QtPbiVI1/sgOmG9uO+Y8DW+7jS2zAOnj6O2BndwuIAUtkdRN8gFoK3wwXMQyZwHVbClsuNLd4E3yAUR6FVDBR+BafQGt93LVMxJTv8ABts4CVLhcfYWsCb5kC9/BHdU8CLYFY5bMAd+eX9MGthhpbA1vu4B7+RKkaW2Yq4AQtVBBFsAJU/AuIXBhN8gGWnstefhiZyWvLAEnbYS1uzSFP6Jvn4Baxx70JKkQojLib5AVTey1jjgkKJGO0AKWyOm7N7cSpgSpAdPH0Tfd/gp1z5C1ZgKqN9J2wFxcUUuAFLZAm+QC0Fb4YUVRFsAOvj4KW2dwtYE3yAWk/wS/PLMKfmuGHZ8MAXF/Ja32Yi5haAKWz4Ydm2cSpgU693Atb7km+Zwwh+WGcPpxw3gAkzCLY+iYUDW/Z3Adc/gpzyFrAqnALkJe+7DoItgAtRS2zuKqGE3yAx0oJvkdvYrfZmALURbDuL5/RLf13cAuDeBS2RpbtAm+QFVA3wR+3fUtFHoBDJnC0jIXH0HWsgMY8inPLuOkd9chp4z20ALQLSA8cI9jYAIa2zjzjBd8gRafS1vgiUho/kAKcsCGTOGWvoOpkAtB3z8Hm8x2Ff5ADp4+lXAlIvcmwH/2Q==') repeat left top",
          padding: '2px 6px',
        },
        namespace: { Opacity: '.7' },
        comment: { color: '#586e75', fontStyle: 'italic' },
        prolog: { color: '#586e75', fontStyle: 'italic' },
        doctype: { color: '#586e75', fontStyle: 'italic' },
        cdata: { color: '#586e75', fontStyle: 'italic' },
        number: { color: '#b89859' },
        string: { color: '#468966' },
        char: { color: '#468966' },
        builtin: { color: '#468966' },
        inserted: { color: '#468966' },
        'attr-name': { color: '#b89859' },
        operator: { color: '#dccf8f' },
        entity: { color: '#dccf8f', cursor: 'help' },
        url: { color: '#dccf8f' },
        '.language-css .token.string': { color: '#dccf8f' },
        '.style .token.string': { color: '#dccf8f' },
        selector: { color: '#859900' },
        regex: { color: '#859900' },
        atrule: { color: '#cb4b16' },
        keyword: { color: '#cb4b16' },
        'attr-value': { color: '#468966' },
        function: { color: '#b58900' },
        variable: { color: '#b58900' },
        placeholder: { color: '#b58900' },
        property: { color: '#b89859' },
        tag: { color: '#ffb03b' },
        boolean: { color: '#b89859' },
        constant: { color: '#b89859' },
        symbol: { color: '#b89859' },
        important: { color: '#dc322f' },
        statement: { color: '#dc322f' },
        deleted: { color: '#dc322f' },
        punctuation: { color: '#dccf8f' },
        bold: { fontWeight: 'bold' },
        italic: { fontStyle: 'italic' },
      };
      t.default = e;
    },
    83039: function (x, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var e = {
        'code[class*="language-"]': {
          color: 'black',
          background: 'none',
          textShadow: '0 1px white',
          fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
          fontSize: '1em',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          wordWrap: 'normal',
          lineHeight: '1.5',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
        },
        'pre[class*="language-"]': {
          color: 'black',
          background: '#f5f2f0',
          textShadow: '0 1px white',
          fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
          fontSize: '1em',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          wordWrap: 'normal',
          lineHeight: '1.5',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          padding: '1em',
          margin: '.5em 0',
          overflow: 'auto',
        },
        'pre[class*="language-"]::-moz-selection': { textShadow: 'none', background: '#b3d4fc' },
        'pre[class*="language-"] ::-moz-selection': { textShadow: 'none', background: '#b3d4fc' },
        'code[class*="language-"]::-moz-selection': { textShadow: 'none', background: '#b3d4fc' },
        'code[class*="language-"] ::-moz-selection': { textShadow: 'none', background: '#b3d4fc' },
        'pre[class*="language-"]::selection': { textShadow: 'none', background: '#b3d4fc' },
        'pre[class*="language-"] ::selection': { textShadow: 'none', background: '#b3d4fc' },
        'code[class*="language-"]::selection': { textShadow: 'none', background: '#b3d4fc' },
        'code[class*="language-"] ::selection': { textShadow: 'none', background: '#b3d4fc' },
        ':not(pre) > code[class*="language-"]': {
          background: '#f5f2f0',
          padding: '.1em',
          borderRadius: '.3em',
          whiteSpace: 'normal',
        },
        comment: { color: 'slategray' },
        prolog: { color: 'slategray' },
        doctype: { color: 'slategray' },
        cdata: { color: 'slategray' },
        punctuation: { color: '#999' },
        namespace: { Opacity: '.7' },
        property: { color: '#905' },
        tag: { color: '#905' },
        boolean: { color: '#905' },
        number: { color: '#905' },
        constant: { color: '#905' },
        symbol: { color: '#905' },
        deleted: { color: '#905' },
        selector: { color: '#690' },
        'attr-name': { color: '#690' },
        string: { color: '#690' },
        char: { color: '#690' },
        builtin: { color: '#690' },
        inserted: { color: '#690' },
        operator: { color: '#9a6e3a', background: 'hsla(0, 0%, 100%, .5)' },
        entity: { color: '#9a6e3a', background: 'hsla(0, 0%, 100%, .5)', cursor: 'help' },
        url: { color: '#9a6e3a', background: 'hsla(0, 0%, 100%, .5)' },
        '.language-css .token.string': { color: '#9a6e3a', background: 'hsla(0, 0%, 100%, .5)' },
        '.style .token.string': { color: '#9a6e3a', background: 'hsla(0, 0%, 100%, .5)' },
        atrule: { color: '#07a' },
        'attr-value': { color: '#07a' },
        keyword: { color: '#07a' },
        function: { color: '#DD4A68' },
        'class-name': { color: '#DD4A68' },
        regex: { color: '#e90' },
        important: { color: '#e90', fontWeight: 'bold' },
        variable: { color: '#e90' },
        bold: { fontWeight: 'bold' },
        italic: { fontStyle: 'italic' },
      };
      t.default = e;
    },
    34817: function (x, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var e = {
        "code[class*='language-']": {
          color: '#9efeff',
          direction: 'ltr',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          fontFamily:
            "'Operator Mono', 'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
          fontWeight: '400',
          fontSize: '17px',
          lineHeight: '25px',
          letterSpacing: '0.5px',
          textShadow: '0 1px #222245',
        },
        "pre[class*='language-']": {
          color: '#9efeff',
          direction: 'ltr',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          fontFamily:
            "'Operator Mono', 'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
          fontWeight: '400',
          fontSize: '17px',
          lineHeight: '25px',
          letterSpacing: '0.5px',
          textShadow: '0 1px #222245',
          padding: '2em',
          margin: '0.5em 0',
          overflow: 'auto',
          background: '#1e1e3f',
        },
        "pre[class*='language-']::-moz-selection": { color: 'inherit', background: '#a599e9' },
        "pre[class*='language-'] ::-moz-selection": { color: 'inherit', background: '#a599e9' },
        "code[class*='language-']::-moz-selection": { color: 'inherit', background: '#a599e9' },
        "code[class*='language-'] ::-moz-selection": { color: 'inherit', background: '#a599e9' },
        "pre[class*='language-']::selection": { color: 'inherit', background: '#a599e9' },
        "pre[class*='language-'] ::selection": { color: 'inherit', background: '#a599e9' },
        "code[class*='language-']::selection": { color: 'inherit', background: '#a599e9' },
        "code[class*='language-'] ::selection": { color: 'inherit', background: '#a599e9' },
        ":not(pre) > code[class*='language-']": {
          background: '#1e1e3f',
          padding: '0.1em',
          borderRadius: '0.3em',
        },
        '': { fontWeight: '400' },
        comment: { color: '#b362ff' },
        prolog: { color: '#b362ff' },
        cdata: { color: '#b362ff' },
        delimiter: { color: '#ff9d00' },
        keyword: { color: '#ff9d00' },
        selector: { color: '#ff9d00' },
        important: { color: '#ff9d00' },
        atrule: { color: '#ff9d00' },
        operator: { color: 'rgb(255, 180, 84)', background: 'none' },
        'attr-name': { color: 'rgb(255, 180, 84)' },
        punctuation: { color: '#ffffff' },
        boolean: { color: 'rgb(255, 98, 140)' },
        tag: { color: 'rgb(255, 157, 0)' },
        'tag.punctuation': { color: 'rgb(255, 157, 0)' },
        doctype: { color: 'rgb(255, 157, 0)' },
        builtin: { color: 'rgb(255, 157, 0)' },
        entity: { color: '#6897bb', background: 'none' },
        symbol: { color: '#6897bb' },
        number: { color: '#ff628c' },
        property: { color: '#ff628c' },
        constant: { color: '#ff628c' },
        variable: { color: '#ff628c' },
        string: { color: '#a5ff90' },
        char: { color: '#a5ff90' },
        'attr-value': { color: '#a5c261' },
        'attr-value.punctuation': { color: '#a5c261' },
        'attr-value.punctuation:first-child': { color: '#a9b7c6' },
        url: { color: '#287bde', textDecoration: 'underline', background: 'none' },
        function: { color: 'rgb(250, 208, 0)' },
        regex: { background: '#364135' },
        bold: { fontWeight: 'bold' },
        italic: { fontStyle: 'italic' },
        inserted: { background: '#00ff00' },
        deleted: { background: '#ff000d' },
        'code.language-css .token.property': { color: '#a9b7c6' },
        'code.language-css .token.property + .token.punctuation': { color: '#a9b7c6' },
        'code.language-css .token.id': { color: '#ffc66d' },
        'code.language-css .token.selector > .token.class': { color: '#ffc66d' },
        'code.language-css .token.selector > .token.attribute': { color: '#ffc66d' },
        'code.language-css .token.selector > .token.pseudo-class': { color: '#ffc66d' },
        'code.language-css .token.selector > .token.pseudo-element': { color: '#ffc66d' },
        'class-name': { color: '#fb94ff' },
        '.language-css .token.string': { background: 'none' },
        '.style .token.string': { background: 'none' },
        '.line-highlight.line-highlight': {
          marginTop: '36px',
          background: 'linear-gradient(to right, rgba(179, 98, 255, 0.17), transparent)',
        },
        '.line-highlight.line-highlight:before': { content: "''" },
        '.line-highlight.line-highlight[data-end]:after': { content: "''" },
      };
      t.default = e;
    },
    41361: function (x, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var e = {
        'code[class*="language-"]': {
          color: '#839496',
          textShadow: '0 1px rgba(0, 0, 0, 0.3)',
          fontFamily: "Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",
          direction: 'ltr',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          lineHeight: '1.5',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
        },
        'pre[class*="language-"]': {
          color: '#839496',
          textShadow: '0 1px rgba(0, 0, 0, 0.3)',
          fontFamily: "Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",
          direction: 'ltr',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          lineHeight: '1.5',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          padding: '1em',
          margin: '.5em 0',
          overflow: 'auto',
          borderRadius: '0.3em',
          background: '#002b36',
        },
        ':not(pre) > code[class*="language-"]': {
          background: '#002b36',
          padding: '.1em',
          borderRadius: '.3em',
        },
        comment: { color: '#586e75' },
        prolog: { color: '#586e75' },
        doctype: { color: '#586e75' },
        cdata: { color: '#586e75' },
        punctuation: { color: '#93a1a1' },
        '.namespace': { Opacity: '.7' },
        property: { color: '#268bd2' },
        keyword: { color: '#268bd2' },
        tag: { color: '#268bd2' },
        'class-name': { color: '#FFFFB6', textDecoration: 'underline' },
        boolean: { color: '#b58900' },
        constant: { color: '#b58900' },
        symbol: { color: '#dc322f' },
        deleted: { color: '#dc322f' },
        number: { color: '#859900' },
        selector: { color: '#859900' },
        'attr-name': { color: '#859900' },
        string: { color: '#859900' },
        char: { color: '#859900' },
        builtin: { color: '#859900' },
        inserted: { color: '#859900' },
        variable: { color: '#268bd2' },
        operator: { color: '#EDEDED' },
        function: { color: '#268bd2' },
        regex: { color: '#E9C062' },
        important: { color: '#fd971f', fontWeight: 'bold' },
        entity: { color: '#FFFFB6', cursor: 'help' },
        url: { color: '#96CBFE' },
        '.language-css .token.string': { color: '#87C38A' },
        '.style .token.string': { color: '#87C38A' },
        bold: { fontWeight: 'bold' },
        italic: { fontStyle: 'italic' },
        atrule: { color: '#F9EE98' },
        'attr-value': { color: '#F9EE98' },
      };
      t.default = e;
    },
    4124: function (x, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var e = {
        'code[class*="language-"]': {
          color: '#657b83',
          fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
          fontSize: '1em',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          wordWrap: 'normal',
          lineHeight: '1.5',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
        },
        'pre[class*="language-"]': {
          color: '#657b83',
          fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
          fontSize: '1em',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          wordWrap: 'normal',
          lineHeight: '1.5',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          padding: '1em',
          margin: '.5em 0',
          overflow: 'auto',
          borderRadius: '0.3em',
          backgroundColor: '#fdf6e3',
        },
        'pre[class*="language-"]::-moz-selection': { background: '#073642' },
        'pre[class*="language-"] ::-moz-selection': { background: '#073642' },
        'code[class*="language-"]::-moz-selection': { background: '#073642' },
        'code[class*="language-"] ::-moz-selection': { background: '#073642' },
        'pre[class*="language-"]::selection': { background: '#073642' },
        'pre[class*="language-"] ::selection': { background: '#073642' },
        'code[class*="language-"]::selection': { background: '#073642' },
        'code[class*="language-"] ::selection': { background: '#073642' },
        ':not(pre) > code[class*="language-"]': {
          backgroundColor: '#fdf6e3',
          padding: '.1em',
          borderRadius: '.3em',
        },
        comment: { color: '#93a1a1' },
        prolog: { color: '#93a1a1' },
        doctype: { color: '#93a1a1' },
        cdata: { color: '#93a1a1' },
        punctuation: { color: '#586e75' },
        namespace: { Opacity: '.7' },
        property: { color: '#268bd2' },
        tag: { color: '#268bd2' },
        boolean: { color: '#268bd2' },
        number: { color: '#268bd2' },
        constant: { color: '#268bd2' },
        symbol: { color: '#268bd2' },
        deleted: { color: '#268bd2' },
        selector: { color: '#2aa198' },
        'attr-name': { color: '#2aa198' },
        string: { color: '#2aa198' },
        char: { color: '#2aa198' },
        builtin: { color: '#2aa198' },
        url: { color: '#2aa198' },
        inserted: { color: '#2aa198' },
        entity: { color: '#657b83', background: '#eee8d5', cursor: 'help' },
        atrule: { color: '#859900' },
        'attr-value': { color: '#859900' },
        keyword: { color: '#859900' },
        function: { color: '#b58900' },
        'class-name': { color: '#b58900' },
        regex: { color: '#cb4b16' },
        important: { color: '#cb4b16', fontWeight: 'bold' },
        variable: { color: '#cb4b16' },
        bold: { fontWeight: 'bold' },
        italic: { fontStyle: 'italic' },
      };
      t.default = e;
    },
    16973: function (x, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var e = {
        'code[class*="language-"]': {
          color: '#f92aad',
          textShadow: '0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3',
          background: 'none',
          fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
          fontSize: '1em',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          wordWrap: 'normal',
          lineHeight: '1.5',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
        },
        'pre[class*="language-"]': {
          color: '#f92aad',
          textShadow: '0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3',
          background: 'none',
          fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
          fontSize: '1em',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          wordWrap: 'normal',
          lineHeight: '1.5',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          padding: '1em',
          margin: '.5em 0',
          overflow: 'auto',
          backgroundColor: 'transparent !important',
          backgroundImage: 'linear-gradient(to bottom, #2a2139 75%, #34294f)',
        },
        ':not(pre) > code[class*="language-"]': {
          backgroundColor: 'transparent !important',
          backgroundImage: 'linear-gradient(to bottom, #2a2139 75%, #34294f)',
          padding: '.1em',
          borderRadius: '.3em',
          whiteSpace: 'normal',
        },
        comment: { color: '#8e8e8e' },
        'block-comment': { color: '#8e8e8e' },
        prolog: { color: '#8e8e8e' },
        doctype: { color: '#8e8e8e' },
        cdata: { color: '#8e8e8e' },
        punctuation: { color: '#ccc' },
        tag: { color: '#e2777a' },
        'attr-name': { color: '#e2777a' },
        namespace: { color: '#e2777a' },
        number: { color: '#e2777a' },
        unit: { color: '#e2777a' },
        hexcode: { color: '#e2777a' },
        deleted: { color: '#e2777a' },
        property: {
          color: '#72f1b8',
          textShadow: '0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475',
        },
        selector: {
          color: '#72f1b8',
          textShadow: '0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475',
        },
        'function-name': { color: '#6196cc' },
        boolean: {
          color: '#fdfdfd',
          textShadow: '0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975',
        },
        'selector.id': {
          color: '#fdfdfd',
          textShadow: '0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975',
        },
        function: {
          color: '#fdfdfd',
          textShadow: '0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975',
        },
        'class-name': {
          color: '#fff5f6',
          textShadow: '0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75, 0 0 25px #fc1f2c75',
        },
        constant: {
          color: '#f92aad',
          textShadow: '0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3',
        },
        symbol: {
          color: '#f92aad',
          textShadow: '0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3',
        },
        important: {
          color: '#f4eee4',
          textShadow: '0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575',
          fontWeight: 'bold',
        },
        atrule: {
          color: '#f4eee4',
          textShadow: '0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575',
        },
        keyword: {
          color: '#f4eee4',
          textShadow: '0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575',
        },
        'selector.class': {
          color: '#f4eee4',
          textShadow: '0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575',
        },
        builtin: {
          color: '#f4eee4',
          textShadow: '0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575',
        },
        string: { color: '#f87c32' },
        char: { color: '#f87c32' },
        'attr-value': { color: '#f87c32' },
        regex: { color: '#f87c32' },
        variable: { color: '#f87c32' },
        operator: { color: '#67cdcc' },
        entity: { color: '#67cdcc', cursor: 'help' },
        url: { color: '#67cdcc' },
        bold: { fontWeight: 'bold' },
        italic: { fontStyle: 'italic' },
        inserted: { color: 'green' },
      };
      t.default = e;
    },
    72154: function (x, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var e = {
        'code[class*="language-"]': {
          color: '#ccc',
          background: 'none',
          fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
          fontSize: '1em',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          wordWrap: 'normal',
          lineHeight: '1.5',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
        },
        'pre[class*="language-"]': {
          color: '#ccc',
          background: '#2d2d2d',
          fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
          fontSize: '1em',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          wordWrap: 'normal',
          lineHeight: '1.5',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          padding: '1em',
          margin: '.5em 0',
          overflow: 'auto',
        },
        ':not(pre) > code[class*="language-"]': {
          background: '#2d2d2d',
          padding: '.1em',
          borderRadius: '.3em',
          whiteSpace: 'normal',
        },
        comment: { color: '#999' },
        'block-comment': { color: '#999' },
        prolog: { color: '#999' },
        doctype: { color: '#999' },
        cdata: { color: '#999' },
        punctuation: { color: '#ccc' },
        tag: { color: '#e2777a' },
        'attr-name': { color: '#e2777a' },
        namespace: { color: '#e2777a' },
        deleted: { color: '#e2777a' },
        'function-name': { color: '#6196cc' },
        boolean: { color: '#f08d49' },
        number: { color: '#f08d49' },
        function: { color: '#f08d49' },
        property: { color: '#f8c555' },
        'class-name': { color: '#f8c555' },
        constant: { color: '#f8c555' },
        symbol: { color: '#f8c555' },
        selector: { color: '#cc99cd' },
        important: { color: '#cc99cd', fontWeight: 'bold' },
        atrule: { color: '#cc99cd' },
        keyword: { color: '#cc99cd' },
        builtin: { color: '#cc99cd' },
        string: { color: '#7ec699' },
        char: { color: '#7ec699' },
        'attr-value': { color: '#7ec699' },
        regex: { color: '#7ec699' },
        variable: { color: '#7ec699' },
        operator: { color: '#67cdcc' },
        entity: { color: '#67cdcc', cursor: 'help' },
        url: { color: '#67cdcc' },
        bold: { fontWeight: 'bold' },
        italic: { fontStyle: 'italic' },
        inserted: { color: 'green' },
      };
      t.default = e;
    },
    65230: function (x, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var e = {
        'code[class*="language-"]': {
          color: 'white',
          background: 'none',
          fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
          fontSize: '1em',
          textAlign: 'left',
          textShadow: '0 -.1em .2em black',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          wordWrap: 'normal',
          lineHeight: '1.5',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
        },
        'pre[class*="language-"]': {
          color: 'white',
          background: 'hsl(0, 0%, 8%)',
          fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
          fontSize: '1em',
          textAlign: 'left',
          textShadow: '0 -.1em .2em black',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          wordWrap: 'normal',
          lineHeight: '1.5',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          borderRadius: '.5em',
          border: '.3em solid hsl(0, 0%, 33%)',
          boxShadow: '1px 1px .5em black inset',
          margin: '.5em 0',
          overflow: 'auto',
          padding: '1em',
        },
        ':not(pre) > code[class*="language-"]': {
          background: 'hsl(0, 0%, 8%)',
          borderRadius: '.3em',
          border: '.13em solid hsl(0, 0%, 33%)',
          boxShadow: '1px 1px .3em -.1em black inset',
          padding: '.15em .2em .05em',
          whiteSpace: 'normal',
        },
        'pre[class*="language-"]::-moz-selection': {
          background: 'hsla(0, 0%, 93%, 0.15)',
          textShadow: 'none',
        },
        'pre[class*="language-"]::selection': {
          background: 'hsla(0, 0%, 93%, 0.15)',
          textShadow: 'none',
        },
        'pre[class*="language-"] ::-moz-selection': {
          textShadow: 'none',
          background: 'hsla(0, 0%, 93%, 0.15)',
        },
        'code[class*="language-"]::-moz-selection': {
          textShadow: 'none',
          background: 'hsla(0, 0%, 93%, 0.15)',
        },
        'code[class*="language-"] ::-moz-selection': {
          textShadow: 'none',
          background: 'hsla(0, 0%, 93%, 0.15)',
        },
        'pre[class*="language-"] ::selection': {
          textShadow: 'none',
          background: 'hsla(0, 0%, 93%, 0.15)',
        },
        'code[class*="language-"]::selection': {
          textShadow: 'none',
          background: 'hsla(0, 0%, 93%, 0.15)',
        },
        'code[class*="language-"] ::selection': {
          textShadow: 'none',
          background: 'hsla(0, 0%, 93%, 0.15)',
        },
        comment: { color: 'hsl(0, 0%, 47%)' },
        prolog: { color: 'hsl(0, 0%, 47%)' },
        doctype: { color: 'hsl(0, 0%, 47%)' },
        cdata: { color: 'hsl(0, 0%, 47%)' },
        punctuation: { Opacity: '.7' },
        namespace: { Opacity: '.7' },
        tag: { color: 'hsl(14, 58%, 55%)' },
        boolean: { color: 'hsl(14, 58%, 55%)' },
        number: { color: 'hsl(14, 58%, 55%)' },
        deleted: { color: 'hsl(14, 58%, 55%)' },
        keyword: { color: 'hsl(53, 89%, 79%)' },
        property: { color: 'hsl(53, 89%, 79%)' },
        selector: { color: 'hsl(53, 89%, 79%)' },
        constant: { color: 'hsl(53, 89%, 79%)' },
        symbol: { color: 'hsl(53, 89%, 79%)' },
        builtin: { color: 'hsl(53, 89%, 79%)' },
        'attr-name': { color: 'hsl(76, 21%, 52%)' },
        'attr-value': { color: 'hsl(76, 21%, 52%)' },
        string: { color: 'hsl(76, 21%, 52%)' },
        char: { color: 'hsl(76, 21%, 52%)' },
        operator: { color: 'hsl(76, 21%, 52%)' },
        entity: { color: 'hsl(76, 21%, 52%)', cursor: 'help' },
        url: { color: 'hsl(76, 21%, 52%)' },
        '.language-css .token.string': { color: 'hsl(76, 21%, 52%)' },
        '.style .token.string': { color: 'hsl(76, 21%, 52%)' },
        variable: { color: 'hsl(76, 21%, 52%)' },
        inserted: { color: 'hsl(76, 21%, 52%)' },
        atrule: { color: 'hsl(218, 22%, 55%)' },
        regex: { color: 'hsl(42, 75%, 65%)' },
        important: { color: 'hsl(42, 75%, 65%)', fontWeight: 'bold' },
        bold: { fontWeight: 'bold' },
        italic: { fontStyle: 'italic' },
        '.language-markup .token.tag': { color: 'hsl(33, 33%, 52%)' },
        '.language-markup .token.attr-name': { color: 'hsl(33, 33%, 52%)' },
        '.language-markup .token.punctuation': { color: 'hsl(33, 33%, 52%)' },
        '': { position: 'relative', zIndex: '1' },
        '.line-highlight.line-highlight': {
          background: 'linear-gradient(to right, hsla(0, 0%, 33%, .1) 70%, hsla(0, 0%, 33%, 0))',
          borderBottom: '1px dashed hsl(0, 0%, 33%)',
          borderTop: '1px dashed hsl(0, 0%, 33%)',
          marginTop: '0.75em',
          zIndex: '0',
        },
        '.line-highlight.line-highlight:before': {
          backgroundColor: 'hsl(215, 15%, 59%)',
          color: 'hsl(24, 20%, 95%)',
        },
        '.line-highlight.line-highlight[data-end]:after': {
          backgroundColor: 'hsl(215, 15%, 59%)',
          color: 'hsl(24, 20%, 95%)',
        },
      };
      t.default = e;
    },
    31850: function (x, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var e = {
        'code[class*="language-"]': {
          color: '#393A34',
          fontFamily: '"Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace',
          direction: 'ltr',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          fontSize: '.9em',
          lineHeight: '1.2em',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
        },
        'pre[class*="language-"]': {
          color: '#393A34',
          fontFamily: '"Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace',
          direction: 'ltr',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          fontSize: '.9em',
          lineHeight: '1.2em',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          padding: '1em',
          margin: '.5em 0',
          overflow: 'auto',
          border: '1px solid #dddddd',
          backgroundColor: 'white',
        },
        'pre > code[class*="language-"]': { fontSize: '1em' },
        'pre[class*="language-"]::-moz-selection': { background: '#C1DEF1' },
        'pre[class*="language-"] ::-moz-selection': { background: '#C1DEF1' },
        'code[class*="language-"]::-moz-selection': { background: '#C1DEF1' },
        'code[class*="language-"] ::-moz-selection': { background: '#C1DEF1' },
        'pre[class*="language-"]::selection': { background: '#C1DEF1' },
        'pre[class*="language-"] ::selection': { background: '#C1DEF1' },
        'code[class*="language-"]::selection': { background: '#C1DEF1' },
        'code[class*="language-"] ::selection': { background: '#C1DEF1' },
        ':not(pre) > code[class*="language-"]': {
          padding: '.2em',
          paddingTop: '1px',
          paddingBottom: '1px',
          background: '#f8f8f8',
          border: '1px solid #dddddd',
        },
        comment: { color: '#008000', fontStyle: 'italic' },
        prolog: { color: '#008000', fontStyle: 'italic' },
        doctype: { color: '#008000', fontStyle: 'italic' },
        cdata: { color: '#008000', fontStyle: 'italic' },
        namespace: { Opacity: '.7' },
        string: { color: '#A31515' },
        punctuation: { color: '#393A34' },
        operator: { color: '#393A34' },
        url: { color: '#36acaa' },
        symbol: { color: '#36acaa' },
        number: { color: '#36acaa' },
        boolean: { color: '#36acaa' },
        variable: { color: '#36acaa' },
        constant: { color: '#36acaa' },
        inserted: { color: '#36acaa' },
        atrule: { color: '#0000ff' },
        keyword: { color: '#0000ff' },
        'attr-value': { color: '#0000ff' },
        '.language-autohotkey .token.selector': { color: '#0000ff' },
        '.language-json .token.boolean': { color: '#0000ff' },
        '.language-json .token.number': { color: '#0000ff' },
        'code[class*="language-css"]': { color: '#0000ff' },
        function: { color: '#393A34' },
        deleted: { color: '#9a050f' },
        '.language-autohotkey .token.tag': { color: '#9a050f' },
        selector: { color: '#800000' },
        '.language-autohotkey .token.keyword': { color: '#00009f' },
        important: { color: '#e90', fontWeight: 'bold' },
        bold: { fontWeight: 'bold' },
        italic: { fontStyle: 'italic' },
        'class-name': { color: '#2B91AF' },
        '.language-json .token.property': { color: '#2B91AF' },
        tag: { color: '#800000' },
        'attr-name': { color: '#ff0000' },
        property: { color: '#ff0000' },
        regex: { color: '#ff0000' },
        entity: { color: '#ff0000' },
        'directive.tag.tag': { background: '#ffff00', color: '#393A34' },
        '.line-numbers.line-numbers .line-numbers-rows': { borderRightColor: '#a5a5a5' },
        '.line-numbers .line-numbers-rows > span:before': { color: '#2B91AF' },
        '.line-highlight.line-highlight': {
          background:
            'linear-gradient(to right, rgba(193, 222, 241, 0.2) 70%, rgba(221, 222, 241, 0))',
        },
      };
      t.default = e;
    },
    67034: function (x, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var e = {
        'pre[class*="language-"]': {
          color: '#d4d4d4',
          fontSize: '13px',
          textShadow: 'none',
          fontFamily:
            'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace',
          direction: 'ltr',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          lineHeight: '1.5',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          padding: '1em',
          margin: '.5em 0',
          overflow: 'auto',
          background: '#1e1e1e',
        },
        'code[class*="language-"]': {
          color: '#d4d4d4',
          fontSize: '13px',
          textShadow: 'none',
          fontFamily:
            'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace',
          direction: 'ltr',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          lineHeight: '1.5',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
        },
        'pre[class*="language-"]::selection': { textShadow: 'none', background: '#264F78' },
        'code[class*="language-"]::selection': { textShadow: 'none', background: '#264F78' },
        'pre[class*="language-"] *::selection': { textShadow: 'none', background: '#264F78' },
        'code[class*="language-"] *::selection': { textShadow: 'none', background: '#264F78' },
        ':not(pre) > code[class*="language-"]': {
          padding: '.1em .3em',
          borderRadius: '.3em',
          color: '#db4c69',
          background: '#1e1e1e',
        },
        '.namespace': { Opacity: '.7' },
        'doctype.doctype-tag': { color: '#569CD6' },
        'doctype.name': { color: '#9cdcfe' },
        comment: { color: '#6a9955' },
        prolog: { color: '#6a9955' },
        punctuation: { color: '#d4d4d4' },
        '.language-html .language-css .token.punctuation': { color: '#d4d4d4' },
        '.language-html .language-javascript .token.punctuation': { color: '#d4d4d4' },
        property: { color: '#9cdcfe' },
        tag: { color: '#569cd6' },
        boolean: { color: '#569cd6' },
        number: { color: '#b5cea8' },
        constant: { color: '#9cdcfe' },
        symbol: { color: '#b5cea8' },
        inserted: { color: '#b5cea8' },
        unit: { color: '#b5cea8' },
        selector: { color: '#d7ba7d' },
        'attr-name': { color: '#9cdcfe' },
        string: { color: '#ce9178' },
        char: { color: '#ce9178' },
        builtin: { color: '#ce9178' },
        deleted: { color: '#ce9178' },
        '.language-css .token.string.url': { textDecoration: 'underline' },
        operator: { color: '#d4d4d4' },
        entity: { color: '#569cd6' },
        'operator.arrow': { color: '#569CD6' },
        atrule: { color: '#ce9178' },
        'atrule.rule': { color: '#c586c0' },
        'atrule.url': { color: '#9cdcfe' },
        'atrule.url.function': { color: '#dcdcaa' },
        'atrule.url.punctuation': { color: '#d4d4d4' },
        keyword: { color: '#569CD6' },
        'keyword.module': { color: '#c586c0' },
        'keyword.control-flow': { color: '#c586c0' },
        function: { color: '#dcdcaa' },
        'function.maybe-class-name': { color: '#dcdcaa' },
        regex: { color: '#d16969' },
        important: { color: '#569cd6' },
        italic: { fontStyle: 'italic' },
        'class-name': { color: '#4ec9b0' },
        'maybe-class-name': { color: '#4ec9b0' },
        console: { color: '#9cdcfe' },
        parameter: { color: '#9cdcfe' },
        interpolation: { color: '#9cdcfe' },
        'punctuation.interpolation-punctuation': { color: '#569cd6' },
        variable: { color: '#9cdcfe' },
        'imports.maybe-class-name': { color: '#9cdcfe' },
        'exports.maybe-class-name': { color: '#9cdcfe' },
        escape: { color: '#d7ba7d' },
        'tag.punctuation': { color: '#808080' },
        cdata: { color: '#808080' },
        'attr-value': { color: '#ce9178' },
        'attr-value.punctuation': { color: '#ce9178' },
        'attr-value.punctuation.attr-equals': { color: '#d4d4d4' },
        namespace: { color: '#4ec9b0' },
        'pre[class*="language-javascript"]': { color: '#9cdcfe' },
        'code[class*="language-javascript"]': { color: '#9cdcfe' },
        'pre[class*="language-jsx"]': { color: '#9cdcfe' },
        'code[class*="language-jsx"]': { color: '#9cdcfe' },
        'pre[class*="language-typescript"]': { color: '#9cdcfe' },
        'code[class*="language-typescript"]': { color: '#9cdcfe' },
        'pre[class*="language-tsx"]': { color: '#9cdcfe' },
        'code[class*="language-tsx"]': { color: '#9cdcfe' },
        'pre[class*="language-css"]': { color: '#ce9178' },
        'code[class*="language-css"]': { color: '#ce9178' },
        'pre[class*="language-html"]': { color: '#d4d4d4' },
        'code[class*="language-html"]': { color: '#d4d4d4' },
        '.language-regex .token.anchor': { color: '#dcdcaa' },
        '.language-html .token.punctuation': { color: '#808080' },
        'pre[class*="language-"] > code[class*="language-"]': { position: 'relative', zIndex: '1' },
        '.line-highlight.line-highlight': {
          background: '#f7ebc6',
          boxShadow: 'inset 5px 0 0 #f7d87c',
          zIndex: '0',
        },
      };
      t.default = e;
    },
    84006: function (x, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var e = {
        'code[class*="language-"]': {
          MozTabSize: '2',
          OTabSize: '2',
          tabSize: '2',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          whiteSpace: 'pre-wrap',
          wordWrap: 'normal',
          fontFamily: 'Menlo, Monaco, "Courier New", monospace',
          fontSize: '14px',
          color: '#76d9e6',
          textShadow: 'none',
        },
        'pre[class*="language-"]': {
          MozTabSize: '2',
          OTabSize: '2',
          tabSize: '2',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          whiteSpace: 'pre-wrap',
          wordWrap: 'normal',
          fontFamily: 'Menlo, Monaco, "Courier New", monospace',
          fontSize: '14px',
          color: '#76d9e6',
          textShadow: 'none',
          background: '#2a2a2a',
          padding: '15px',
          borderRadius: '4px',
          border: '1px solid #e1e1e8',
          overflow: 'auto',
          position: 'relative',
        },
        'pre > code[class*="language-"]': { fontSize: '1em' },
        ':not(pre) > code[class*="language-"]': {
          background: '#2a2a2a',
          padding: '0.15em 0.2em 0.05em',
          borderRadius: '.3em',
          border: '0.13em solid #7a6652',
          boxShadow: '1px 1px 0.3em -0.1em #000 inset',
        },
        'pre[class*="language-"] code': { whiteSpace: 'pre', display: 'block' },
        namespace: { Opacity: '.7' },
        comment: { color: '#6f705e' },
        prolog: { color: '#6f705e' },
        doctype: { color: '#6f705e' },
        cdata: { color: '#6f705e' },
        operator: { color: '#a77afe' },
        boolean: { color: '#a77afe' },
        number: { color: '#a77afe' },
        'attr-name': { color: '#e6d06c' },
        string: { color: '#e6d06c' },
        entity: { color: '#e6d06c', cursor: 'help' },
        url: { color: '#e6d06c' },
        '.language-css .token.string': { color: '#e6d06c' },
        '.style .token.string': { color: '#e6d06c' },
        selector: { color: '#a6e22d' },
        inserted: { color: '#a6e22d' },
        atrule: { color: '#ef3b7d' },
        'attr-value': { color: '#ef3b7d' },
        keyword: { color: '#ef3b7d' },
        important: { color: '#ef3b7d', fontWeight: 'bold' },
        deleted: { color: '#ef3b7d' },
        regex: { color: '#76d9e6' },
        statement: { color: '#76d9e6', fontWeight: 'bold' },
        placeholder: { color: '#fff' },
        variable: { color: '#fff' },
        bold: { fontWeight: 'bold' },
        punctuation: { color: '#bebec5' },
        italic: { fontStyle: 'italic' },
        'code.language-markup': { color: '#f9f9f9' },
        'code.language-markup .token.tag': { color: '#ef3b7d' },
        'code.language-markup .token.attr-name': { color: '#a6e22d' },
        'code.language-markup .token.attr-value': { color: '#e6d06c' },
        'code.language-markup .token.style': { color: '#76d9e6' },
        'code.language-markup .token.script': { color: '#76d9e6' },
        'code.language-markup .token.script .token.keyword': { color: '#76d9e6' },
        '.line-highlight.line-highlight': { padding: '0', background: 'rgba(255, 255, 255, 0.08)' },
        '.line-highlight.line-highlight:before': {
          padding: '0.2em 0.5em',
          backgroundColor: 'rgba(255, 255, 255, 0.4)',
          color: 'black',
          height: '1em',
          lineHeight: '1em',
          boxShadow: '0 1px 1px rgba(255, 255, 255, 0.7)',
        },
        '.line-highlight.line-highlight[data-end]:after': {
          padding: '0.2em 0.5em',
          backgroundColor: 'rgba(255, 255, 255, 0.4)',
          color: 'black',
          height: '1em',
          lineHeight: '1em',
          boxShadow: '0 1px 1px rgba(255, 255, 255, 0.7)',
        },
      };
      t.default = e;
    },
    67376: function (x, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var e = {
        'code[class*="language-"]': {
          color: '#22da17',
          fontFamily: 'monospace',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          wordWrap: 'normal',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          lineHeight: '25px',
          fontSize: '18px',
          margin: '5px 0',
        },
        'pre[class*="language-"]': {
          color: 'white',
          fontFamily: 'monospace',
          textAlign: 'left',
          whiteSpace: 'pre',
          wordSpacing: 'normal',
          wordBreak: 'normal',
          wordWrap: 'normal',
          MozTabSize: '4',
          OTabSize: '4',
          tabSize: '4',
          WebkitHyphens: 'none',
          MozHyphens: 'none',
          msHyphens: 'none',
          hyphens: 'none',
          lineHeight: '25px',
          fontSize: '18px',
          margin: '0.5em 0',
          background: '#0a143c',
          padding: '1em',
          overflow: 'auto',
        },
        'pre[class*="language-"] *': { fontFamily: 'monospace' },
        ':not(pre) > code[class*="language-"]': {
          color: 'white',
          background: '#0a143c',
          padding: '0.1em',
          borderRadius: '0.3em',
          whiteSpace: 'normal',
        },
        'pre[class*="language-"]::-moz-selection': {
          textShadow: 'none',
          background: 'rgba(29, 59, 83, 0.99)',
        },
        'pre[class*="language-"] ::-moz-selection': {
          textShadow: 'none',
          background: 'rgba(29, 59, 83, 0.99)',
        },
        'code[class*="language-"]::-moz-selection': {
          textShadow: 'none',
          background: 'rgba(29, 59, 83, 0.99)',
        },
        'code[class*="language-"] ::-moz-selection': {
          textShadow: 'none',
          background: 'rgba(29, 59, 83, 0.99)',
        },
        'pre[class*="language-"]::selection': {
          textShadow: 'none',
          background: 'rgba(29, 59, 83, 0.99)',
        },
        'pre[class*="language-"] ::selection': {
          textShadow: 'none',
          background: 'rgba(29, 59, 83, 0.99)',
        },
        'code[class*="language-"]::selection': {
          textShadow: 'none',
          background: 'rgba(29, 59, 83, 0.99)',
        },
        'code[class*="language-"] ::selection': {
          textShadow: 'none',
          background: 'rgba(29, 59, 83, 0.99)',
        },
        comment: { color: 'rgb(99, 119, 119)', fontStyle: 'italic' },
        prolog: { color: 'rgb(99, 119, 119)', fontStyle: 'italic' },
        cdata: { color: 'rgb(99, 119, 119)', fontStyle: 'italic' },
        punctuation: { color: 'rgb(199, 146, 234)' },
        '.namespace': { color: 'rgb(178, 204, 214)' },
        deleted: { color: 'rgba(239, 83, 80, 0.56)', fontStyle: 'italic' },
        symbol: { color: 'rgb(128, 203, 196)' },
        property: { color: 'rgb(128, 203, 196)' },
        tag: { color: 'rgb(127, 219, 202)' },
        operator: { color: 'rgb(127, 219, 202)' },
        keyword: { color: 'rgb(127, 219, 202)' },
        boolean: { color: 'rgb(255, 88, 116)' },
        number: { color: 'rgb(247, 140, 108)' },
        constant: { color: 'rgb(34 183 199)' },
        function: { color: 'rgb(34 183 199)' },
        builtin: { color: 'rgb(34 183 199)' },
        char: { color: 'rgb(34 183 199)' },
        selector: { color: 'rgb(199, 146, 234)', fontStyle: 'italic' },
        doctype: { color: 'rgb(199, 146, 234)', fontStyle: 'italic' },
        'attr-name': { color: 'rgb(173, 219, 103)', fontStyle: 'italic' },
        inserted: { color: 'rgb(173, 219, 103)', fontStyle: 'italic' },
        string: { color: 'rgb(173, 219, 103)' },
        url: { color: 'rgb(173, 219, 103)' },
        entity: { color: 'rgb(173, 219, 103)' },
        '.language-css .token.string': { color: 'rgb(173, 219, 103)' },
        '.style .token.string': { color: 'rgb(173, 219, 103)' },
        'class-name': { color: 'rgb(255, 203, 139)' },
        atrule: { color: 'rgb(255, 203, 139)' },
        'attr-value': { color: 'rgb(255, 203, 139)' },
        regex: { color: 'rgb(214, 222, 235)' },
        important: { color: 'rgb(214, 222, 235)', fontWeight: 'bold' },
        variable: { color: 'rgb(214, 222, 235)' },
        bold: { fontWeight: 'bold' },
        italic: { fontStyle: 'italic' },
      };
      t.default = e;
    },
    10886: function (x, t, e) {
      e.d(t, {
        Z: function () {
          return C;
        },
      });
      const g = (d) => typeof d == 'object' && d != null && d.nodeType === 1,
        b = (d, u) => (!u || d !== 'hidden') && d !== 'visible' && d !== 'clip',
        n = (d, u) => {
          if (d.clientHeight < d.scrollHeight || d.clientWidth < d.scrollWidth) {
            const m = getComputedStyle(d, null);
            return (
              b(m.overflowY, u) ||
              b(m.overflowX, u) ||
              ((F) => {
                const z = ((S) => {
                  if (!S.ownerDocument || !S.ownerDocument.defaultView) return null;
                  try {
                    return S.ownerDocument.defaultView.frameElement;
                  } catch (W) {
                    return null;
                  }
                })(F);
                return !!z && (z.clientHeight < F.scrollHeight || z.clientWidth < F.scrollWidth);
              })(d)
            );
          }
          return !1;
        },
        j = (d, u, m, F, z, S, W, D) =>
          (S < d && W > u) || (S > d && W < u)
            ? 0
            : (S <= d && D <= m) || (W >= u && D >= m)
              ? S - d - F
              : (W > u && D < m) || (S < d && D > m)
                ? W - u + z
                : 0,
        ae = (d) => {
          const u = d.parentElement;
          return u == null ? d.getRootNode().host || null : u;
        },
        E = (d, u) => {
          var m, F, z, S;
          if (typeof document == 'undefined') return [];
          const {
              scrollMode: W,
              block: D,
              inline: fe,
              boundary: Q,
              skipOverflowHiddenElements: xe,
            } = u,
            Pe = typeof Q == 'function' ? Q : (Xe) => Xe !== Q;
          if (!g(d)) throw new TypeError('Invalid target');
          const _ = document.scrollingElement || document.documentElement,
            re = [];
          let R = d;
          for (; g(R) && Pe(R); ) {
            if (((R = ae(R)), R === _)) {
              re.push(R);
              break;
            }
            (R != null && R === document.body && n(R) && !n(document.documentElement)) ||
              (R != null && n(R, xe) && re.push(R));
          }
          const I =
              (F = (m = window.visualViewport) == null ? void 0 : m.width) != null ? F : innerWidth,
            L =
              (S = (z = window.visualViewport) == null ? void 0 : z.height) != null
                ? S
                : innerHeight,
            { scrollX: se, scrollY: oe } = window,
            {
              height: Ee,
              width: q,
              top: Ue,
              right: je,
              bottom: Ke,
              left: $e,
            } = d.getBoundingClientRect(),
            {
              top: Ye,
              right: _e,
              bottom: Ie,
              left: qe,
            } = ((Xe) => {
              const de = window.getComputedStyle(Xe);
              return {
                top: parseFloat(de.scrollMarginTop) || 0,
                right: parseFloat(de.scrollMarginRight) || 0,
                bottom: parseFloat(de.scrollMarginBottom) || 0,
                left: parseFloat(de.scrollMarginLeft) || 0,
              };
            })(d);
          let Fe =
              D === 'start' || D === 'nearest'
                ? Ue - Ye
                : D === 'end'
                  ? Ke + Ie
                  : Ue + Ee / 2 - Ye + Ie,
            Ze = fe === 'center' ? $e + q / 2 - qe + _e : fe === 'end' ? je + _e : $e - qe;
          const Ge = [];
          for (let Xe = 0; Xe < re.length; Xe++) {
            const de = re[Xe],
              {
                height: so,
                width: eo,
                top: go,
                right: fo,
                bottom: A,
                left: yo,
              } = de.getBoundingClientRect();
            if (
              W === 'if-needed' &&
              Ue >= 0 &&
              $e >= 0 &&
              Ke <= L &&
              je <= I &&
              Ue >= go &&
              Ke <= A &&
              $e >= yo &&
              je <= fo
            )
              return Ge;
            const Oo = getComputedStyle(de),
              mo = parseInt(Oo.borderLeftWidth, 10),
              Ve = parseInt(Oo.borderTopWidth, 10),
              uo = parseInt(Oo.borderRightWidth, 10),
              ko = parseInt(Oo.borderBottomWidth, 10);
            let oo = 0,
              ro = 0;
            const Ho = 'offsetWidth' in de ? de.offsetWidth - de.clientWidth - mo - uo : 0,
              vo = 'offsetHeight' in de ? de.offsetHeight - de.clientHeight - Ve - ko : 0,
              ho = 'offsetWidth' in de ? (de.offsetWidth === 0 ? 0 : eo / de.offsetWidth) : 0,
              Wo = 'offsetHeight' in de ? (de.offsetHeight === 0 ? 0 : so / de.offsetHeight) : 0;
            if (_ === de)
              (oo =
                D === 'start'
                  ? Fe
                  : D === 'end'
                    ? Fe - L
                    : D === 'nearest'
                      ? j(oe, oe + L, L, Ve, ko, oe + Fe, oe + Fe + Ee, Ee)
                      : Fe - L / 2),
                (ro =
                  fe === 'start'
                    ? Ze
                    : fe === 'center'
                      ? Ze - I / 2
                      : fe === 'end'
                        ? Ze - I
                        : j(se, se + I, I, mo, uo, se + Ze, se + Ze + q, q)),
                (oo = Math.max(0, oo + oe)),
                (ro = Math.max(0, ro + se));
            else {
              (oo =
                D === 'start'
                  ? Fe - go - Ve
                  : D === 'end'
                    ? Fe - A + ko + vo
                    : D === 'nearest'
                      ? j(go, A, so, Ve, ko + vo, Fe, Fe + Ee, Ee)
                      : Fe - (go + so / 2) + vo / 2),
                (ro =
                  fe === 'start'
                    ? Ze - yo - mo
                    : fe === 'center'
                      ? Ze - (yo + eo / 2) + Ho / 2
                      : fe === 'end'
                        ? Ze - fo + uo + Ho
                        : j(yo, fo, eo, mo, uo + Ho, Ze, Ze + q, q));
              const { scrollLeft: Ro, scrollTop: jo } = de;
              (oo =
                Wo === 0 ? 0 : Math.max(0, Math.min(jo + oo / Wo, de.scrollHeight - so / Wo + vo))),
                (ro =
                  ho === 0
                    ? 0
                    : Math.max(0, Math.min(Ro + ro / ho, de.scrollWidth - eo / ho + Ho))),
                (Fe += jo - oo),
                (Ze += Ro - ro);
            }
            Ge.push({ el: de, top: oo, left: ro });
          }
          return Ge;
        },
        he = (d) =>
          d === !1
            ? { block: 'end', inline: 'nearest' }
            : ((u) => u === Object(u) && Object.keys(u).length !== 0)(d)
              ? d
              : { block: 'start', inline: 'nearest' };
      function C(d, u) {
        if (
          !d.isConnected ||
          !((z) => {
            let S = z;
            for (; S && S.parentNode; ) {
              if (S.parentNode === document) return !0;
              S = S.parentNode instanceof ShadowRoot ? S.parentNode.host : S.parentNode;
            }
            return !1;
          })(d)
        )
          return;
        const m = ((z) => {
          const S = window.getComputedStyle(z);
          return {
            top: parseFloat(S.scrollMarginTop) || 0,
            right: parseFloat(S.scrollMarginRight) || 0,
            bottom: parseFloat(S.scrollMarginBottom) || 0,
            left: parseFloat(S.scrollMarginLeft) || 0,
          };
        })(d);
        if (((z) => typeof z == 'object' && typeof z.behavior == 'function')(u))
          return u.behavior(E(d, u));
        const F = typeof u == 'boolean' || u == null ? void 0 : u.behavior;
        for (const { el: z, top: S, left: W } of E(d, he(u))) {
          const D = S - m.top + m.bottom,
            fe = W - m.left + m.right;
          z.scroll({ top: D, left: fe, behavior: F });
        }
      }
    },
  },
]);
