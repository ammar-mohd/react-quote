(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[6],{41:function(e,t,c){e.exports={card:"Card_card__Ze0S8"}},42:function(e,t,c){e.exports={form:"QuoteForm_form__1NKdS",loading:"QuoteForm_loading__2gjoQ",control:"QuoteForm_control__32bPa",actions:"QuoteForm_actions__P1PN4"}},55:function(e,t,c){"use strict";c.r(t);var n=c(0),o=c(2),r=c(37),a=c(41),s=c.n(a),u=c(1),i=function(e){return Object(u.jsx)("div",{className:s.a.card,children:e.children})},l=c(14),d=c(42),j=c.n(d),b=function(e){var t=Object(n.useState)(!1),c=Object(r.a)(t,2),a=c[0],s=c[1],d=Object(n.useRef)(),b=Object(n.useRef)();return Object(u.jsxs)(n.Fragment,{children:[Object(u.jsx)(o.a,{when:a,message:function(e){return"Are you sure you want to leave? All your entered data will be lost!"}}),Object(u.jsx)(i,{children:Object(u.jsxs)("form",{onFocus:function(){s(!0)},className:j.a.form,onSubmit:function(t){t.preventDefault();var c=d.current.value,n=b.current.value;e.onAddQuote({author:c,text:n})},children:[e.isLoading&&Object(u.jsx)("div",{className:j.a.loading,children:Object(u.jsx)(l.a,{})}),Object(u.jsxs)("div",{className:j.a.control,children:[Object(u.jsx)("label",{htmlFor:"author",children:"Author"}),Object(u.jsx)("input",{type:"text",id:"author",ref:d})]}),Object(u.jsxs)("div",{className:j.a.control,children:[Object(u.jsx)("label",{htmlFor:"text",children:"Text"}),Object(u.jsx)("textarea",{id:"text",rows:"5",ref:b})]}),Object(u.jsx)("div",{className:j.a.actions,children:Object(u.jsx)("button",{onClick:function(){s(!1)},className:"btn",children:"Add Quote"})})]})})]})},f=c(35),h=c(36);t.default=function(){var e=Object(f.a)(h.b),t=e.sendRequest,c=e.status,r=Object(o.h)();Object(n.useEffect)((function(){"completed"===c&&r.push("/quotes")}),[c,r]);return Object(u.jsx)(b,{isLoading:"pending"===c,onAddQuote:function(e){t(e)}})}}}]);
//# sourceMappingURL=6.af854180.chunk.js.map