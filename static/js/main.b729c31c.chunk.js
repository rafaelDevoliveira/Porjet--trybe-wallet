(this["webpackJsonpporjet--trybe-wallet"]=this["webpackJsonpporjet--trybe-wallet"]||[]).push([[0],{23:function(e,t,s){},24:function(e,t,s){},30:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s(16),n=s.n(c),i=s(2),l=s(8),r=s(1),j=Object(a.createContext)();function o(e){var t=e.children,s=Object(a.useState)(""),c=Object(l.a)(s,2),n=c[0],i=c[1],o=Object(a.useState)(""),b=Object(l.a)(o,2),d=b[0],O=b[1],p=Object(a.useState)(""),u=Object(l.a)(p,2),m=u[0],h=u[1],x=Object(a.useState)(!0),f=Object(l.a)(x,2),N=f[0],w=f[1],v=Object(a.useState)(0),g=Object(l.a)(v,2),y=g[0],C=g[1];return Object(r.jsx)(j.Provider,{value:{result:m,email:n,setEmail:i,clicado:function(){h(n),i("")},btn:N,setBtn:w,password:d,setPassword:O,despesasTotais:y,setDespesasTotais:C},children:t})}s(23);function b(){var e=Object(a.useContext)(j),t=e.result,s=e.despesasTotais;return Object(r.jsxs)("div",{id:"container-boas-vindas",children:[Object(r.jsxs)("div",{className:"container-gastos",children:[Object(r.jsx)("h4",{children:"Bem Vindo"}),Object(r.jsx)("p",{"data-testid":"email-field",children:t}),Object(r.jsxs)("p",{children:["Total de gastos R$ ",Math.round(s).toFixed(2)," BRL"]})]}),Object(r.jsx)("hr",{}),Object(r.jsx)("div",{className:"container-form",children:Object(r.jsx)("div",{className:"container-teste",children:Object(r.jsxs)("form",{className:"test-form",children:[Object(r.jsxs)("label",{className:"label",children:["Valor:",Object(r.jsx)("input",{className:"test-input",type:"text",name:"Despesa"})]}),Object(r.jsxs)("label",{className:"label",children:["Descri\xe7\xe3o:",Object(r.jsx)("input",{className:"test-input",type:"text",name:"Descri\xe7\xe3o"})]}),Object(r.jsxs)("label",{className:"label-select",children:["Moeda:",Object(r.jsx)("select",{className:"test-input",children:Object(r.jsx)("option",{children:"USD"})})]}),Object(r.jsxs)("label",{className:"label-select",children:["M\xe9todo de pagamento:",Object(r.jsxs)("select",{className:"test-input",children:[Object(r.jsx)("option",{children:"Dinheiro"}),Object(r.jsx)("option",{children:"Cart\xe3o de cr\xe9dito"}),Object(r.jsx)("option",{children:"Cart\xe3o de d\xe9bito"})]})]})]})})})]})}var d=s(9);s(24);function O(){var e=Object(a.useContext)(j),t=e.clicado,s=e.email,c=e.setEmail,n=e.btn,i=e.setBtn,l=e.password,o=e.setPassword;return Object(a.useEffect)((function(){/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/g.test(s)&&l.length>6?i(!1):i(!0)}),[s,l,i]),Object(r.jsx)("form",{className:"container-main",children:Object(r.jsxs)("div",{className:"login",children:[Object(r.jsx)("img",{src:"https://www.acate.com.br/wp-content/uploads/2020/01/trybe.png",alt:"imagem"}),Object(r.jsx)("h1",{children:"Wallet"}),Object(r.jsxs)("form",{className:"form",children:[Object(r.jsx)("label",{children:Object(r.jsx)("input",{className:"input-email",name:"email",onChange:function(e){return c(e.target.value)},"data-testid":"email-input",placeholder:"Digite seu Email"})}),Object(r.jsx)("input",{className:"input-email",name:"password",type:"password",onChange:function(e){return o(e.target.value)},"data-testid":"password-input",placeholder:"Digite sua senha"})]}),Object(r.jsx)(d.b,{to:"/carteira",children:Object(r.jsx)("button",{disabled:n,onClick:t,className:"btn_Entrar",type:"button",children:"Entrar"})})]})})}var p=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)(i.c,{children:[Object(r.jsx)(i.a,{exact:!0,path:"/",component:O}),Object(r.jsx)(i.a,{exact:!0,path:"/carteira",component:b})]})})};n.a.render(Object(r.jsx)(o,{children:Object(r.jsx)(d.a,{children:Object(r.jsx)(p,{})})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.b729c31c.chunk.js.map