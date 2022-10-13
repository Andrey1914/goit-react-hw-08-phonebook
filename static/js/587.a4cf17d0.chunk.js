(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[587],{4587:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Z}});var r=t(885),a=t(6809),u=t(6444),i=t(9541),o=t(4373),s=t(2791),l=t(184),c=function(e){var n=e.onSubmit,t=(0,s.useState)(""),c=(0,r.Z)(t,2),d=c[0],m=c[1],f=(0,s.useState)(""),p=(0,r.Z)(f,2),h=p[0],x=p[1],b=function(e){var n=e.currentTarget,t=n.name,r=n.value;({name:m,number:x})[t](r)},v=function(){m(""),x("")};return(0,l.jsxs)(a.Z,{component:"form",onSubmit:function(e){e.preventDefault(),n({name:d,number:h}),v()},noValidate:!0,sx:{mt:1},children:[(0,l.jsx)("label",{children:(0,l.jsx)(u.Z,{type:"text",name:"name",label:"Name",value:d,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:b,margin:"normal",fullWidth:!0})}),(0,l.jsx)("label",{children:(0,l.jsx)(u.Z,{type:"tel",name:"number",label:"Number",value:h,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:b,margin:"normal",fullWidth:!0})}),(0,l.jsxs)(i.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2,gap:2},children:["Add contact ",(0,l.jsx)(o.M0G,{size:20})]})]})},d=t(7247),m=t(5048),f=function(e){return e.filter},p=t(8382),h=function(){var e=(0,p.wY)().data,n=(0,m.v9)((function(n){return function(e,n){var t=f(e),r=null===t||void 0===t?void 0:t.toLowerCase();return null===n||void 0===n?void 0:n.filter((function(e){var n;return null===e||void 0===e||null===(n=e.name)||void 0===n?void 0:n.toLowerCase().includes(r)}))}(n,e)})),t=(0,p.Nt)(),u=(0,r.Z)(t,1)[0];return(0,l.jsx)(l.Fragment,{children:0===(null===n||void 0===n?void 0:n.length)?"Phone book is empty":(0,l.jsx)(a.Z,{width:"100%",sx:{mb:2},children:(0,l.jsx)(a.Z,{as:"ul",display:"flex",flexDirection:"column",width:"100%",sx:{m:0,p:0,gap:2},children:null===n||void 0===n?void 0:n.map((function(e){var n=e.name,t=e.number,r=e.id;return(0,l.jsxs)(a.Z,{as:"li",display:"flex",alignItems:"center",borderRadius:"4px",boxShadow:"0px 3px 5px 1px rgba(45, 90, 124, 0.2)",sx:{m:0,p:1},children:[(0,l.jsxs)(a.Z,{as:"p",display:"flex",justifyContent:"space-between",alignItems:"center",borderRadius:"4px",width:"100%",sx:{m:0,pl:1,gap:2},children:[n,": ",(0,l.jsx)("span",{children:t})]}),(0,l.jsx)(i.Z,{"aria-label":"delete",id:r,onClick:function(){return u(r)},variant:"outlined",width:"32px",sx:{ml:3},children:(0,l.jsx)(d.Z,{})})]},r)}))})})})},x=t(4013),b=function(){var e=(0,m.I0)(),n=(0,m.v9)((function(e){return f(e)}));return(0,l.jsx)(a.Z,{component:"form",noValidate:!0,width:"100%",sx:{mb:1},children:(0,l.jsx)("label",{children:(0,l.jsx)(u.Z,{type:"text",label:"Find contacts by name",value:n,onChange:function(n){var t=n.currentTarget.value;e((0,x.W)(t))},margin:"normal",fullWidth:!0})})})},v=t(803);function Z(){var e=(0,p.wY)().data,n=(0,p.F3)(),t=(0,r.Z)(n,1)[0];return(0,l.jsx)(v.Z,{maxWidth:"xs",children:(0,l.jsxs)(a.Z,{sx:{marginTop:4,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,l.jsx)("h1",{children:"Phonebook"}),(0,l.jsx)(c,{onSubmit:function(n){e.some((function(e){return e.name===n.name}))?alert("".concat(n.name," is already in contacts")):t(n)}}),(0,l.jsx)(a.Z,{component:"h2",sx:{marginTop:3},children:"Contacts"}),(0,l.jsx)(b,{}),e&&(0,l.jsx)(h,{})]})})}},7247:function(e,n,t){"use strict";var r=t(4836);n.Z=void 0;var a=r(t(5649)),u=t(184),i=(0,a.default)((0,u.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");n.Z=i},5649:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=t(5741)},5741:function(e,n,t){"use strict";t.r(n),t.d(n,{capitalize:function(){return a.Z},createChainedFunction:function(){return u},createSvgIcon:function(){return i.Z},debounce:function(){return o.Z},deprecatedPropType:function(){return s},isMuiElement:function(){return l.Z},ownerDocument:function(){return c.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return m},setRef:function(){return f},unstable_ClassNameGenerator:function(){return j},unstable_useEnhancedEffect:function(){return p.Z},unstable_useId:function(){return h},unsupportedProp:function(){return x},useControlled:function(){return b.Z},useEventCallback:function(){return v.Z},useForkRef:function(){return Z.Z},useIsFocusVisible:function(){return g.Z}});var r=t(5902),a=t(9853),u=t(8949).Z,i=t(1245),o=t(2977);var s=function(e,n){return function(){return null}},l=t(6258),c=t(5783),d=t(8195);t(7462);var m=function(e,n){return function(){return null}},f=t(2971).Z,p=t(3026),h=t(6248).Z;var x=function(e,n,t,r,a){return null},b=t(4938),v=t(9511),Z=t(7933),g=t(2763),j={configure:function(e){console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join("\n")),r.Z.configure(e)}}},4836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=587.a4cf17d0.chunk.js.map