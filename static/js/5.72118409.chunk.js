(this["webpackJsonpreact-polar"]=this["webpackJsonpreact-polar"]||[]).push([[5],{413:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(78),r=t(1),s=t.n(r),l=(t(192),t(414)),i=t.n(l),o=function(e){e.input;var a=e.meta,t=Object(n.a)(e,["input","meta"]),r=a.touched&&a.error;return s.a.createElement("div",{className:r?i.a.error:""},s.a.createElement("div",null,t.children),r&&s.a.createElement("span",null,a.error))},c=function(e){var a=e.input,t=(e.meta,e.child,Object(n.a)(e,["input","meta","child"]));return s.a.createElement(o,e,s.a.createElement("textarea",Object.assign({},a,t)))}},414:function(e,a,t){e.exports={error:"FormsControls_error__3VyXk",loginError:"FormsControls_loginError__2qVlW"}},416:function(e,a,t){"use strict";t.d(a,"b",(function(){return n})),t.d(a,"a",(function(){return r}));var n=function(e){if(!e)return"This field is requiered"},r=function(e){return function(a){if(a.length>e)return"Max length is ".concat(e," symbols")}}},422:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__12Muv",dialogItem:"Dialogs_dialogItem__3ynBY"}},435:function(e,a,t){e.exports={message:"Messages_message__1QAxb"}},482:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),s=t(147),l=t(422),i=t.n(l),o=t(20),c=function(e){var a="/dialogs/"+e.id;return r.a.createElement("div",{className:i.a.dialog},r.a.createElement("img",{src:e.photo}),r.a.createElement(o.c,{to:a},e.name))},m=t(435),u=t.n(m),d=function(e){return r.a.createElement("div",{className:u.a.message},e.message)},g=t(192),f=t(193),E=t(416),p=t(413),v=t(39),b=t(50),h=Object(E.a)(50),_=Object(f.a)({form:"DialogsAddMessageForm"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(g.a,{component:p.a,name:"newMessageBody",placeholder:"Enter your message",validate:[E.b,h]})),r.a.createElement("div",null,r.a.createElement("button",null,"Send")))})),y=function(e){var a=e.dialogsPage.dialogs.map((function(e){return r.a.createElement(c,{name:e.name,key:e.id,id:e.id,photo:e.photo})})),t=e.dialogsPage.messages.map((function(e){return r.a.createElement(d,{message:e.message,key:e.id,id:e.id})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,null),r.a.createElement(b.a,null),r.a.createElement("div",{className:i.a.dialogs},r.a.createElement("div",{className:i.a.dialogItem},a),r.a.createElement("div",{className:i.a.messages},r.a.createElement("div",null,t)),r.a.createElement(_,{onSubmit:function(a){e.addMessage(a.newMessageBody)}})))},M=t(26),j=t(174),O=t(32);a.default=Object(O.d)(Object(M.b)((function(e){return{dialogsPage:e.dialogsPage}}),{addMessage:s.a}),j.a)(y)}}]);
//# sourceMappingURL=5.72118409.chunk.js.map