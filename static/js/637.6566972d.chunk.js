"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[637],{3303:function(e,n,a){var r=a(885),t=a(2791),i=a(8382),l=a(7689),s=a(5218),o=a(9541),u=a(803),c=a(6809),d=a(6444),m=a(184);n.Z=function(e){var n=e.flag,a=(0,t.useState)(""),h=(0,r.Z)(a,2),f=h[0],x=h[1],p=(0,t.useState)(""),Z=(0,r.Z)(p,2),g=Z[0],b=Z[1],j=(0,t.useState)(""),w=(0,r.Z)(j,2),v=w[0],y=w[1],k=(0,i.XQ)(),_=(0,r.Z)(k,1)[0],C=(0,i.Vx)(),A=(0,r.Z)(C,1)[0],S=(0,l.s0)(),W=function(e){var n=e.currentTarget,a=n.name,r=n.value;switch(a){case"name":x(r);break;case"email":b(r);break;case"password":y(r)}},z={name:f,email:g,password:v},P=function(){S("/contacts"),n&&x(""),b(""),y("")};return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(u.Z,{maxWidth:"xs",children:(0,m.jsxs)(c.Z,{sx:{marginTop:4,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,m.jsx)("p",{children:"Please, register or log in to your account."}),(0,m.jsxs)(c.Z,{component:"form",onSubmit:n?function(e){e.preventDefault(),A(z).unwrap().then((function(){return P()})).catch((function(){return s.ZP.error("User with such email already exist.")}))}:function(e){e.preventDefault(),_(z).unwrap().then((function(){return P()})).catch((function(){return s.ZP.error("Sorry, user not found")}))},noValidate:!0,sx:{mt:1},children:[n?(0,m.jsx)("label",{children:(0,m.jsx)(d.Z,{type:"text",name:"name",label:"Name",value:f,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:W,margin:"normal",fullWidth:!0})}):"",(0,m.jsx)("label",{children:(0,m.jsx)(d.Z,{type:"mail",name:"email",label:"Email",value:g,required:!0,onChange:W,margin:"normal",fullWidth:!0})}),(0,m.jsx)("label",{children:(0,m.jsx)(d.Z,{type:"password",name:"password",label:"Password",value:v,required:!0,onChange:W,margin:"normal",fullWidth:!0})}),(0,m.jsx)(o.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:n?"Registration":"LogIn"})]}),(0,m.jsx)(s.x7,{})]})})})}},3637:function(e,n,a){a.r(n),a.d(n,{default:function(){return i}});var r=a(3303),t=a(184);function i(){return(0,t.jsx)("div",{children:(0,t.jsx)(r.Z,{})})}}}]);
//# sourceMappingURL=637.6566972d.chunk.js.map