(this["webpackJsonpreact-polar"]=this["webpackJsonpreact-polar"]||[]).push([[5],{411:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(77),r=t(1),s=t.n(r),i=(t(190),t(412)),o=t.n(i),l=function(e){e.input;var a=e.meta,t=Object(n.a)(e,["input","meta"]),r=a.touched&&a.error;return s.a.createElement("div",{className:r?o.a.error:""},s.a.createElement("div",null,t.children),r&&s.a.createElement("span",null,a.error))},c=function(e){var a=e.input,t=(e.meta,e.child,Object(n.a)(e,["input","meta","child"]));return s.a.createElement(l,e,s.a.createElement("textarea",Object.assign({},a,t)))}},412:function(e,a,t){e.exports={error:"FormsControls_error__3VyXk",loginError:"FormsControls_loginError__2qVlW"}},414:function(e,a,t){"use strict";t.d(a,"b",(function(){return n})),t.d(a,"a",(function(){return r}));var n=function(e){if(!e)return"This field is requiered"},r=function(e){return function(a){if(a.length>e)return"Max length is ".concat(e," symbols")}}},420:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__12Muv",dialogItem:"Dialogs_dialogItem__3ynBY"}},433:function(e,a,t){e.exports={message:"Messages_message__1QAxb"}},481:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),s=t(145),i=t(420),o=t.n(i),l=t(20),c=function(e){var a="/dialogs/"+e.id;return r.a.createElement("div",{className:o.a.dialog},r.a.createElement("img",{src:e.photo}),r.a.createElement(l.c,{to:a},e.name))},m=t(433),u=t.n(m),d=function(e){return r.a.createElement("div",{className:u.a.message},e.message)},g=t(190),f=t(191),E=t(414),p=t(411),v=t(39),b=Object(E.a)(50),h=Object(f.a)({form:"DialogsAddMessageForm"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(g.a,{component:p.a,name:"newMessageBody",placeholder:"Enter your message",validate:[E.b,b]})),r.a.createElement("div",null,r.a.createElement("button",null,"Send")))})),_=function(e){var a=e.dialogsPage.dialogs.map((function(e){return r.a.createElement(c,{name:e.name,key:e.id,id:e.id,photo:e.photo})})),t=e.dialogsPage.messages.map((function(e){return r.a.createElement(d,{message:e.message,key:e.id,id:e.id})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,null),r.a.createElement("div",{className:o.a.dialogs},r.a.createElement("div",{className:o.a.dialogItem},a),r.a.createElement("div",{className:o.a.messages},r.a.createElement("div",null,t)),r.a.createElement(h,{onSubmit:function(a){e.addMessage(a.newMessageBody)}})))},y=t(26),M=t(172),j=t(32);a.default=Object(j.d)(Object(y.b)((function(e){return{dialogsPage:e.dialogsPage}}),{addMessage:s.a}),M.a)(_)}}]);
//# sourceMappingURL=5.ea4f36a0.chunk.js.map