(this["webpackJsonpreact-polar"]=this["webpackJsonpreact-polar"]||[]).push([[1],{102:function(e,n,t){e.exports={photo:"users_photo__2IgT5"}},110:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"f",(function(){return p})),t.d(n,"c",(function(){return m})),t.d(n,"g",(function(){return g})),t.d(n,"d",(function(){return h})),t.d(n,"e",(function(){return b}));var r=t(7),a=t.n(r),i=t(16),o=t(17),c=t(3),u=t(54),s=t(18),l={posts:[{id:1,message:"Yo, everything is cool!",likesCount:"12"},{id:2,message:"Make a difference.",likesCount:"34"},{id:3,message:"Stay calm and procced.",likesCount:"27"}],profile:null,status:"",photos:null},d=function(e){return{type:"ADD-POST",newPostText:e}},f=function(e){return{type:"SET_USER_STATUS",status:e}},p=function(e){return function(){var n=Object(i.a)(a.a.mark((function n(t){var r;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.b.setProfile(e);case 2:r=n.sent,t({type:"SET_USER_PROFILE",profile:r});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},m=function(e){return function(){var n=Object(i.a)(a.a.mark((function n(t){var r;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.b.getStatus(e);case 2:r=n.sent,t(f(r.data));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},g=function(e){return function(){var n=Object(i.a)(a.a.mark((function n(t){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.b.updateStatus(e);case 2:0===n.sent.data.resultCode&&t(f(e));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},h=function(e){return function(){var n=Object(i.a)(a.a.mark((function n(t){var r;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.b.savePhoto(e);case 2:0===(r=n.sent).data.resultCode&&t({type:"SET_PROFILE_PHOTO",photos:r.data.data.photos});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},b=function(e){return function(){var n=Object(i.a)(a.a.mark((function n(t,r){var i,o;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=r().auth.userId,n.next=3,s.b.saveProfile(e);case 3:if(0!==(o=n.sent).data.resultCode){n.next=8;break}t(p(i)),n.next=10;break;case 8:return t(Object(u.a)("edit-profile",{_error:o.data.messages[0]})),n.abrupt("return",Promise.reject(o.data.messages[0]));case 10:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()};n.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADD-POST":return Object(c.a)(Object(c.a)({},e),{},{posts:[].concat(Object(o.a)(e.posts),[{id:4,message:n.newPostText,likesCount:0}])});case"SET_USER_PROFILE":return Object(c.a)(Object(c.a)({},e),{},{profile:n.profile});case"SET_USER_STATUS":return Object(c.a)(Object(c.a)({},e),{},{status:n.status});case"DELETE_POST":return Object(c.a)(Object(c.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==n.postId}))});case"SET_PROFILE_PHOTO":return Object(c.a)(Object(c.a)({},e),{},{profile:Object(c.a)(Object(c.a)({},e.profile),{},{photos:n.photos})});default:return e}}},125:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN4AAADjCAMAAADdXVr2AAABOFBMVEU+JyP////+/v7t7e3s7Oz/6ztEiv/39/f6+vr09PTVAPnx8fEAAAD7+/tEif84jv83jv//7zvCKPo9HgA+Jh80GBL/8zyyOPoqAABCc9A1HCI6IiMyFQ43HRhDfeQ+MDs+IxdUQT6Kdyu7qDHHty7Z2NgyGCLl0zVhTSeknZwvEiKup6YpByGNhYQtCQAjACGEeng/SXSjkS5AV5MkAAA+IQ5SPzxAWpqMg4J/bSouDQA/OVGZkpFcS0lBYKf04TgsKADJxcSUiCKEeh9QOyWvnDCVgi0eAADT0M9FLytCaLiMGZeiFLS9ubhIMiSjliYZACBYRSU9FgA2KBBMJTprWCjeyjYAAB+ckCTAsSxmWFZ3a2kTAACRkaA3RXg/PVs1FQB/gZVfVVujDrI6SGx5QLSJPcg+MkAYwEaSAAAS80lEQVR4nO2di3vbthHAxYdDcSxla5I9z4/GeSiJX4rTOqnj5lFvSRyvU5tH2y1x1nZbt/3//8EIHEASIAACJEAp/Xrt50AgKd5PIHB3IHjs+Zl4SZBJ7KFymJVCXBmjygRVeriynxW9qKjkt6ee73lelEnf80gpwiUvLoo12/voBBH60hQ08XL9UK0HtcX5S0qnrFL4C3o5XljBCzk8VIqKyup2b3Zx7QGSa0iKkrgoruyFRJM014ToV4L2REqnrFIO8Pan4x7IeAylcf6nh2tobfaB/IHKMT3seJHxtnptZd0uHr7ikzCTGJV8VAp93CFQKcHbcSXuMREqBZ5oe+rZw8skLTQB/aKiVktpVNtLkET9TCJUitOslMZsZYIq+7gyRqV+It4eWcA7zjSI8jOl+OuTfqFfUcudv6Q06Id27QXFoJg1ZggXWxKSi8Hrly6GkFwMHlwM1e3JrgW8vlfWJAjIoAzXXVgZyVFlwCkNVzDaleBx3aq41vvyaz3yi+34urDTetk1Br9+GY/r67nSPlY68AQdNLCId5bJbDY72W6Nd0q+6qUlPNGoEeRduS/vyuXt59Pp9PT0tD1dxoe/6vgoKjRBo1b9UMePP2jXXowEOxBRURRWRtLK2Gt/UXKyepgWX6+nH1+JynYMQ2wf75Fnahj4JsaGwYpZd4O3MF7LouOFEjyhnSnhhfPECyV4IYfnI4MfxLguQMUUV6IirvRxJQzEqJjkB8XQN7xVB3jIAcFIvo/OGYAhwqrk50+ESoN+qLZX9EqhYVB0ZbR9BmHMY9t0vd7FtcdILiaB7lAnNAytzHoWAWFdxjW6NpIsphpvr0/m6LXYCBHUcvobngqvXd/rAq9V32sxcgZJbCECUss0kY+cgUDpiBs5G9o99MNlwaN7vBhiraSF3TP3WjyIWmZHNmIElWzNIEB6mXTplHkf7EVAakHx0TSLj+JOp5KmzrkYWT2Jm0UMzeKp9LRjvEO/WbzXLFpPusZ71KVTFsRzwevKa/nY8EznOeeB56P+ZDrPyc9S9/MJadUsddQxXu8BDo8ePwhT2Sx1RWk8S/1xGIZeb3t7G8VHYSA1DMJ7DA3Neud4IFPcq9x7Lb/hLQSeft9L59r3cjyzvmcYzsLMv2zk3NwAUetIdtpsgjdx6rUEkzMIUIQzf5t3roMoVdx8CDt934BvGjr1WpLdcxygiBvv1mdrmQzX1pQzZ3tLeJ+1G3sLiKcKz299NlzCosZ7ivcZdoInvIylEYMe3tAdnmnf6+d33UurAgrPLGadIPXUWBetF3P6cUoX6x9wba/iLWO758mmkuaOV7J7/FQSp3QTs66F5/DidOy1SPAOsLyirbd3F3/m7N8G2UuMR7Ye2MUzjBjEeAe3QUDxpSXy8bNbjP4vSPWSCG/j+lP4im9q8KReCz+VhAaYntlSAV+Md3eYydKQtB3SHQsLkFlFqBbi3XqBty6tfaOy9tMwUs8ncUXDqSSJYbhbgJWkgjdUbX0BW+vwnDplC4A3B6/FAt6GSzxPgsdPJS0UXq60Ai8R3duS3qqX3PGS4D2/u1GSAx6P3UrxxrcU4dKUrs5TKw3LJLOSaTgrGzmFeDevM/KOxbv5kNl6g7gE11Xh0uoMy9lEN5y1YtbFeEso7MHBDylwW4dDsg39m1sVsvs7sU9ziuX80OvSa5HgtRC1y7b66De8JlNJC4NnsFRcc+QMDEdOh3iHca3SMHI6tHtO8TTtnqbXgjy5zEtNO784D+5iYWIPgmfPKfN8eNjn2oXw13SHt/cDBFHPbzXE04sY/FW0CGIsCcPd4R08hSCKNYMZnmbEoBU6Zf8ql3g4bD0S2vN4vnLpehHv4W5VaxiCcE54B2I8kWEoR+s+jdY1zfq88W7weHa9lnnjVVpP12uhJk09z6mJN2SlBkGxMw2X7irwdOY5uaUClVlqqIwTHbzh7ZuM3FbycTv/wOKRcOmhZGjxNGepNe8x+Fp4f/+EkT+p8Ibfsjv/mWs+EinRxmxoGHTNuhbetyZ4Nzi8NdXOFbtn2WuZM16l9X5deE1br7CIynvrC4en2ff0wlk9w9AdnnY4286sb0C48jcbI6cYbw2kqVlvhbfx4mn5ps8S+UTlqVDhJZOdh9+/xvJscw54+KZP9c6QntOyNCS7Lyl2Hj7bBOk1w2vV97h5dQcyfCaazjWbSlI8wE8q0/5i4R1GGlkHUu2sAxLDMD+88lRS+6wDC4nn3GvRxDMKk9iD1tritYkYNPFuvmNEi46GS8KVBPpei+5TKG3wWPv9idocggxvvNrDIjotyklgNetAO8PQCM/4HkObrAMLh9eN1/Jx4IUSvJqppPni8VNJrNIEL02LB/jT/DHUtPxUvx8kwaLhpQKlfaJ0gtQ3yjogMQzPSbxiAW+4xojk3jrB62gq6dkdLM/UjchGPreF+wzfvb5Tlteq5S2dzbVAtPJKjafjtQxvHGwyoqCb01RSGzFavTqfqaQO8RKjrAOiB/iLSunIOTe8zDDIsw4E5lkHnN8hMsazmnUg3NrGIr77fHetSchDwSDyMcez6ZRdXh4heS/k22Nv9tw0oiPHvKh5sKoZnl7EEAYx3ixbCb/HyCsTvLWDA3yQAZ1BxGCWdaCvleJjzwivwYNg+vGelaXi3ePZdcpo5eLgzeEBt4XFq5vnpJULhaczz6mVdSCvzLMHrWcynU7F2eX2uOCGSGWxMVSrSaZwJnoinJ1men4S1SvdJOsAMQxb2edJJo8kz9CK5PVzdqk4jYCUdFuTEJ+K/KxbL9FZJ1gth0vFp2jQkme62hTJHr/Q/6A+8iGpoJJ4Bk/rTkO8KNXzBEpbXEs9xT+UZlckon5MQ4aXYJJkRs6LBw3nz+99NHj6fa+8VBzwzBJRN8VD+iX5xek06wDlOcVjsFkSvUZ4NIkexXObdSDZXcdx0XFAUiDCxxpR4ykPIikQvdkxnHeCVcmVtu21zHBYdHlJ8M5wnASx0lFRYiuPlHjbl0eig95vM3gvyT5un9+DK8KLY8DzUTEmsVIflVKynVamqHShwjsO4j53kJ+FJmQsoQksPSZXkj6e8DI2ziqu6upBoMYLA0HWlGQ/x1O6GXV9r7jrDqsgcycsFWUdqLzVoLQdHxRVD0pTNV6cVu7/p/18LAnSUi3VT660OuuAVgJLmq2Z255y2wPi4nqeGq8PfnvAaJLjgd3jvGWh0jayDihfFsJuxx0EjT81eBGDFwjx2G41p3eh1OGtdY+n77VovAuFbE/I+JREMBLmeIxQPI95D1EWyGFNZh9QJLT+IRGNGkKlLWQdMNmeDe4kNxzxQJ7deV2SO3RJx2NGLrLfBB0dTEDa6WfpdRPiS2B/2huXp365CIlWkx3wruPzPmhCrEUSiBrGlVMme1kIu52+32rWIJMgfdVLqQPP/10oC47nSfCECSwpnnS7OzxxIun6rANp6kfkrntWJI+hZiXy7CyqJLfqs1LKbU/47XBDyttvgpddFJwmeClDVT+F0gmtbZpET7Ydk5FRId4/3cGiBoJ9dsgAtB5m7hWnSYuXZNk06174EiehO3uJ5OzsHz/ew6Kmu4f3+vEn4DudwfGTQpNF8Vq8/Q94GhLPTa5P179YBrlQpYZ6cwV2+ssIPp/i488PF+hVLzkeMzdx/4vlK1g2VXgj2OcKxQOx9aoXq33PLp6NvkcGIZ+5654EGi8I4LdnG3ft4Z1E8KWJaFWAltKlrANaZr3W7iUN8QbZf1U8hd3jjHVHXksVb9Ci9RbAKYNYhk4l5SkXRljefE5a7/5IIW8I3pM38Bl+itVD/J3w9lb0/W3ehdI4YphdY6KZB6TZPiWCLrrs/0+VQvDoXleB74L54mu7DSOGmnhKndCtvzsd49cFwcTrmLvemsjyVfqOVrKOBr2/dXvrMDV4i55x1gH+1/I91T0GhAe9bkC1HrAQg0oN3SnHY8T0dROmWQfEZl2ON6AMA0597dZj8Q4bvizEEZ6guRQf6/FOmr4LhTFptdlV2XlOdetdqV6cg/wjCzjI21uNZzzPqZd1oDJLjWwGSr7Dhjxj+DQSM+i1Xu9+OT4i4dLPh2mEDYFCv1LWgb5p1gGuKwco1VsWttCQh0wGfQmf7pG2KNqKlgd5Kw5o36R/SQMuk68g8dEO+fjPLMBC+eXcJrDMXxZyPsWByxMS8tzHutynEVDePoqRU9p8THw0ouHSOn7v0bnb+3vcu1CoV1ngydU2lByP+eg4P6cNPL7lSBelf8hFSvE+hdrGeKJQrvYFdYkOXnloUVyc4rK09cz6nlZkWA1np/YuTnE/LLdeGa/Ld6Ho42m2ngaeU68FebZxdgWsQzDzBTdyrlgTfuSEcGk9IQGSI7wZjk/evyfRy5MvQcBIvf3699bkr2+JKQX5nJzwXxAg7dpPYAkrAqc4TvkZLpnlJyMUD1EX4+3Xv7MmBA+/nnU8HpHIePkqPv2pedYB0Q38ylP9dD3niOLdL3uGLvBA7ud4+JeErAOpTGnjrAO0MlkUPLtZB2jlQuHZ91o+PjyjiEGGB2GLTbx/vy2HWlU8y1kHoNgX45Gw5Zf//MGa/PeX8t2lCp7drAOFYRDijYh1X17J/oM/yysrUEFKKyvFxhXYI/s334dsgNIKORgJ8PB4trMO0A4qwVP4X3Uy4Iv0L4QOMjyna6lVeHUQylmKyiFW8EIJnuxFPZRHG6+xAM+OCI+fSmKVzrMOlO76p7BMMWUr8Ru7E3SrvmHrlSPWcoVoN25OTYYnUNqnSsNSgjTRzzqgNgwje5MQvIgvTu0nnxuadTKuUTx7gRAveeuVB1LXXsv4J5D/Qazwlb1AiJfv8BnGV8kJwQw6f35vzCxG+cqet8LLd2QKdWdcOp/1rANc3+PEPR4r+k4Z+gk0sg6QW/WSx046x5NmHYibZR3gzPoC4FnNOrCIeO6cMu7lqh3gMa98dfEulHLEsPkQ5A7wvbUXCPECeJuvyQnHFM9p1oE9spr9OaxmH+EYhsY5JAyi/+dVpWiJBkTLeUURTZGACD4Rs77xgpwQ1pcbZx3Adg+PsWixCjEMeCoJGwYYfwrDQB7dHlI8oT9Fb96VXch8k/oz73PSN4QNKV5cVTrJlaaGobFZ5/Fc+5xVPKdeSzM8LmzoDs90nrP+4tSg4JcXmOLpzHPyqwL0sg5o9T0FrQKJ2yTB6zvNOsCPnJqq1+4mC2f5kdN2VnHOrNO0Cc96FK8SkLMrI+RYNb8GWebyzZ1yBgbnXgv7HBB3cQ6o1jkgf79SNshU71bTVTzM+Tp+QV0Fr9JugwphjfB4jLh2ytR4Cm2t4TnNOsDJm6pq1UFCXKoTyQJBt1NJuq2n1b2EFerWc+a1sFkUxpK+10xEx1E85rSnJ47wZpeQVOESss6RpHM1fe+PQqGLqMU/Btd6j8tnPbrcT9wsFYcHeCG9QTHS1PicwpXw+Tp5tRS3hHBSBXL+RKB026wD1Vv13EoCmfRE/YdOPAtNYvGxWCuAz99p1oFEgDcYDAbEnkNR8pgGxsst/KBchEMZvKarcQ3Nungtdc3FKcerl+Ju8/yWisui9fnjGXot7ANuEjx+LDTAqwyj5Yuz6ma4zTrQrxk5Bwze9jpIo9arPoUi1y8qnkJpl3VgX916ZHgAvO2TyUuUJC5sgvdoHlkHhHj51BjX91YfIVOCzqmNN2Dxcv1ypd0+4CZpPV5yPMhVMm7aeo3xPAleTdYBOd5gUGpANZ7MKSuvjKB49rIOJKUH+IXrC7Ltpq2HDvINLs4C79Cr6FendPusAwLDMCB+R7X1tnbh+KTJxalhGOxnHdD0Wi4oHj4+Nmm9ZdYpm5PXIg55qAAPh7dzT30QkUVwynqqZ39HIyFeb0d90Ih9Uti5U6boe1qS9z39Q3Jp3PfQb0Af4EfgqOTjSvIAPxJcGaMSuVVPthslsESGAR3vNcHLRs640C/QUbp91gFjvJLdM8Nj7R5nrF17LZ3hzccpW1w8w6kkPmL4sF4WcRbuXMUEjtcC2ma++PxwHlkH4nBSllCchZvI1q4PQaIW3RH71ZOoadYB36cN4/v5GItNSBhSFxZ+Lb90qx62B5ANA5K21GQCpnYv0bk4s6sRf6kHDYOSzZVWBcATYJzSKad0+6wD6mRCErxYEy/XZEFzJcnwNOjs5UpiTJph1gEuu6rmxWmEV+jXXdYByfZaPHx8pIV36BWayJcyOMo6INoeSxP80wYxMAyrh5DNGRJYNs9s3Mqs59shq9zZiepdU0ZmffuSpKoTdauOE1gG3jl+t8ZU+SYtM69lG3LVnU/mhlfaruObNXLKTtviqS9jzb6nh2filBV4rfpeq3CWbo918LipJD2Z6mc2dpfAUhdP36yX8Obvtfza8c4hbjmmAcxxXiqKHx4Rr4WpPi7vWnwBlQ+28IIKXsDhYaesqCxtxzmycQcgkZGoiNOHZccnTCVXrBzkU7yg4pRxSqesUhjv/zfHKsQDgJBFAAAAAElFTkSuQmCC"},147:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(17),a=t(3),i={dialogs:[{id:1,name:"Christine",photo:t(345)},{id:2,name:"Dan",photo:t(346)},{id:3,name:"Emile",photo:t(347)},{id:4,name:"Ethan",photo:t(348)},{id:5,name:"Max",photo:t(349)},{id:6,name:"Sergio",photo:t(350)}],messages:[{id:1,message:"Hey, how are you?"},{id:2,message:"All is good"},{id:3,message:"Right on, right on"},{id:4,message:"Be cool"},{id:5,message:"See you later!"}]},o=function(e){return{type:"ADD-MESSAGE",newMessageBody:e}};n.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADD-MESSAGE":return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n.newMessageBody}])});default:return e}}},154:function(e,n,t){e.exports=t.p+"static/media/banner.31b3e016.jpg"},163:function(e,n,t){e.exports=t.p+"static/media/preloader.f59e7504.svg"},170:function(e,n,t){e.exports=t.p+"static/media/video.f0426550.mp4"},174:function(e,n,t){"use strict";t.d(n,"a",(function(){return f}));var r=t(5),a=t(6),i=t(11),o=t(12),c=t(1),u=t.n(c),s=t(10),l=t(26),d=function(e){return{isAuth:e.auth.isAuth}},f=function(e){var n=function(n){Object(i.a)(c,n);var t=Object(o.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(a.a)(c,[{key:"render",value:function(){return this.props.isAuth?u.a.createElement(e,this.props):u.a.createElement(s.a,{to:"/login"})}}]),c}(u.a.Component);return Object(l.b)(d)(n)}},18:function(e,n,t){"use strict";t.d(n,"d",(function(){return i})),t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return c})),t.d(n,"c",(function(){return u}));var r=t(159),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"f5fd7edd-8b3b-45aa-9fb3-06cab303e62a"}}),i={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(n)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))},setProfile:function(e){return console.warn("Obsolete method. Please use profileAPI object."),o.setProfile(e)}},o={setProfile:function(e){return a.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return a.get("profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status",{status:e})},savePhoto:function(e){var n=new FormData;return n.append("image",e),a.put("profile/photo",n,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile",e)}},c={me:function(){return a.get("auth/me").then((function(e){return e.data}))},logIn:function(e,n){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return a.post("auth/login",{email:e,password:n,rememberMe:t,captcha:r}).then((function(e){return e.data}))},logOut:function(){return a.delete("auth/login").then((function(e){return e.data}))}},u={getCaptchaUrl:function(){return a.get("security/get-captcha-url")}}},219:function(e,n,t){e.exports=t(411)},224:function(e,n,t){},27:function(e,n,t){"use strict";t.d(n,"c",(function(){return g})),t.d(n,"h",(function(){return h})),t.d(n,"f",(function(){return b})),t.d(n,"b",(function(){return v})),t.d(n,"a",(function(){return E})),t.d(n,"g",(function(){return O})),t.d(n,"e",(function(){return x})),t.d(n,"d",(function(){return j}));var r=t(13),a=t(14),i=t(20),o=t(124);function c(){var e=Object(r.a)(["\n   border-radius: 50px;\n   background: #01bf71;\n   white-space: nowrap;\n   padding: 10px 22px;\n   color: #010606;\n   font-size: 16px;\n   outline: none;\n   border: none;\n   cursor: pointer;\n   transition: all 0.2s ease-in-out;\n\n   &:hover{\n       transition: all 0.2s ease-in-out;\n       background: #fff;\n   }\n   @media screen and (max-width: 768px){\n        margin: 20px;\n       \n    }\n   \n"]);return c=function(){return e},e}function u(){var e=Object(r.a)(["\n    color: #fff;\n    display: flex;\n    align-items: center;\n    padding: 0 1rem;\n    height: 100%;\n    cursor: pointer;\n\n    &.active,\n    :hover{\n        color: #02acc5;\n    }\n\n    @media screen and (max-width: 768px){\n        padding: 20px;\n        height: 80px;\n    }\n"]);return u=function(){return e},e}function s(){var e=Object(r.a)(["\n    display: flex;\n    align-items: center;\n    text-align: center;\n    margin-right: 24px;\n\n    @media screen and (max-width: 768px) {\n        flex-direction: column;\n        background: #0d0d0d;\n        margin: 0;\n        position: fixed;\n        z-index: 500;\n        width: 100%;\n        height: 100vh;\n        top: 0;\n        right: -100%;\n        transition: 850ms;\n        padding-top: 80px;\n\n        &.active{\n            right: 0;\n            transition: 350ms;\n            margin: 0 auto;\n\n        }\n    }\n"]);return s=function(){return e},e}function l(){var e=Object(r.a)(["\n    display: none;\n    color: #fff;\n\n    @media screen and (max-width: 768px){\n        display: block;\n        position: absolute;\n        top: 0;\n        right: 0;\n        transform: translate(-100%, 60%);\n        font-size: 1.8rem;\n        cursor: pointer;\n        z-index: 999;\n    }\n"]);return l=function(){return e},e}function d(){var e=Object(r.a)(["\n    width: 70px;\n    height: 70px;\n    object-fit: cover;\n"]);return d=function(){return e},e}function f(){var e=Object(r.a)(["\n    justify-self: flex-start;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n"]);return f=function(){return e},e}function p(){var e=Object(r.a)(["\n    display: flex;\n    justify-content: space-between;\n    height: 80px;\n    z-index: 1;\n    width: 100%;\n    padding: 0 24px;\n    max-width: 1200px;\n\n"]);return p=function(){return e},e}function m(){var e=Object(r.a)(["\n    background: ",";\n    height: 80px;\n    margin-top: -80px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1rem;\n    position: sticky;\n    top: 0;\n    z-index: 10;\n\n    @media screen and (max-width: 960px){\n        transition: 0.8s all ease;\n    }\n"]);return m=function(){return e},e}var g=a.a.nav(m(),(function(e){return e.scrollNav?"#000":"transparent"})),h=a.a.div(p()),b=Object(a.a)(i.b)(f()),v=a.a.img(d()),E=Object(a.a)(o.a)(l()),O=a.a.div(s()),x=Object(a.a)(i.b)(u()),j=Object(a.a)(i.b)(c())},345:function(e,n,t){e.exports=t.p+"static/media/chris.57c01184.jpg"},346:function(e,n,t){e.exports=t.p+"static/media/dan.684e4832.jpg"},347:function(e,n,t){e.exports=t.p+"static/media/emile.161f8ee6.jpg"},348:function(e,n,t){e.exports=t.p+"static/media/ethan.adf54ecc.jpg"},349:function(e,n,t){e.exports=t.p+"static/media/max.c8ad70d2.jpg"},350:function(e,n,t){e.exports=t.p+"static/media/sergio.6c2ab8e4.jpg"},39:function(e,n,t){"use strict";var r=t(5),a=t(6),i=t(11),o=t(12),c=t(1),u=t.n(c),s=t(26),l=t(40),d=t(19),f=t(82),p=t.n(f),m=[{title:"Profile",path:"/profile"},{title:"Messages",path:"/dialogs"},{title:"News",path:"/news"},{title:"Users",path:"/users"},{title:"Settings",path:"/settings"}],g=t(27),h=function(e){var n=Object(c.useState)(!1),t=Object(d.a)(n,2),r=t[0],a=t[1],i=Object(c.useState)(!1),o=Object(d.a)(i,2),s=o[0],l=o[1],f=function(){return a(!r)},h=function(){window.scrollY>=80?l(!0):l(!1)};return Object(c.useEffect)((function(){window.addEventListener("scroll",h)}),[]),u.a.createElement(u.a.Fragment,null,u.a.createElement(g.c,{scrollNav:s},u.a.createElement(g.h,null,u.a.createElement(g.f,{exact:!0,to:"/"},u.a.createElement(g.b,{src:p.a,alt:"logo"})),u.a.createElement(g.a,{onClick:f}),u.a.createElement(g.g,{className:r?"active":""},m.map((function(e,n){return u.a.createElement(g.e,{key:n,to:e.path,activeStyle:!0,onClick:f},e.title)})),e.isAuth?u.a.createElement(g.d,{onClick:e.logOut},"Sign out"):u.a.createElement(g.d,{to:"/login"},"Sign in")))))},b=function(e){Object(i.a)(t,e);var n=Object(o.a)(t);function t(){return Object(r.a)(this,t),n.apply(this,arguments)}return Object(a.a)(t,[{key:"render",value:function(){return u.a.createElement(h,this.props)}}]),t}(u.a.Component);n.a=Object(s.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logOut:l.d})(b)},40:function(e,n,t){"use strict";t.d(n,"b",(function(){return f})),t.d(n,"c",(function(){return p})),t.d(n,"d",(function(){return g}));var r=t(7),a=t.n(r),i=t(16),o=t(3),c=t(54),u=t(18),s={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},l=function(e,n,t,r){return{type:"SET_USER_DATA",payload:{userId:e,email:n,login:t,isAuth:r}}},d=function(e){return{type:"GET_CAPTCHA_URL",payload:{captchaUrl:e}}},f=function(){return function(){var e=Object(i.a)(a.a.mark((function e(n){var t,r,i,o,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.me();case 2:0===(t=e.sent).resultCode&&(r=t.data,i=r.id,o=r.login,c=r.email,n(l(i,c,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},p=function(e,n,t,r){return function(){var o=Object(i.a)(a.a.mark((function i(o){var s,l;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.a.logIn(e,n,t,r);case 2:0===(s=a.sent).resultCode?o(f()):(10===s.resultCode&&o(m()),l=s.messages.length>0?s.messages[0]:"Something is wrong",o(Object(c.a)("login",{_error:l})));case 4:case"end":return a.stop()}}),i)})));return function(e){return o.apply(this,arguments)}}()},m=function(){return function(){var e=Object(i.a)(a.a.mark((function e(n){var t,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.c.getCaptchaUrl();case 2:t=e.sent,r=t.data.url,n(d(r));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},g=function(){return function(){var e=Object(i.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.logOut();case 2:0===e.sent.resultCode&&n(l(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()};n.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_USER_DATA":case"GET_CAPTCHA_URL":return Object(o.a)(Object(o.a)({},e),n.payload);default:return e}}},411:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t.n(r),i=t(76),o=t.n(i),c=t(5),u=t(6),s=t(11),l=t(12),d=(t(224),t(10)),f=t(50),p=t(39),m=function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(p.a,null),a.a.createElement(f.a,null),a.a.createElement("h1",null,"News"))},g=function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(p.a,null),a.a.createElement(f.a,null),a.a.createElement("h1",null,"Settings"))},h=t(26),b=t(7),v=t.n(b),E=t(16),O=t(17),x=t(3),j=t(18),w=function(e,n,t,r){return e.map((function(e){return e[n]===t?Object(x.a)(Object(x.a)({},e),r):e}))},S={users:[],pageSize:10,totalCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},y=function(e){return{type:"FOLLOW",userId:e}},P=function(e){return{type:"UNFOLLOW",userId:e}},A=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},k=function(e,n){return{type:"TOGGLE_FOLLOWING_PROGRESS",isFetching:e,userId:n}},C=function(){var e=Object(E.a)(v.a.mark((function e(n,t,r,a){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(k(!0,t)),e.next=3,r(t);case 3:0===e.sent.resultCode&&n(a(t)),n(k(!1,t));case 6:case"end":return e.stop()}}),e)})));return function(n,t,r,a){return e.apply(this,arguments)}}(),I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"FOLLOW":return Object(x.a)(Object(x.a)({},e),{},{users:w(e.users,"id",n.userId,{followed:!0})});case"UNFOLLOW":return Object(x.a)(Object(x.a)({},e),{},{users:w(e.users,"id",n.userId,{followed:!1})});case"SET_USERS":return Object(x.a)(Object(x.a)({},e),{},{users:n.users});case"SET_CURRENT_PAGE":return Object(x.a)(Object(x.a)({},e),{},{currentPage:n.currentPage});case"SET_TOTAL_COUNT":return Object(x.a)(Object(x.a)({},e),{},{totalCount:n.count});case"TOGGLE_IS_FETCHING":return Object(x.a)(Object(x.a)({},e),{},{isFetching:n.isFetching});case"TOGGLE_FOLLOWING_PROGRESS":return Object(x.a)(Object(x.a)({},e),{},{followingInProgress:n.isFetching?[].concat(Object(O.a)(e.followingInProgress),[n.userId]):e.followingInProgress.filter((function(e){return e!==n.userId}))});default:return e}},L=t(81),T=t(19),z=t(88),N=t.n(z),F=t(160),U=t.n(F),B=function(e){for(var n=e.totalItemsCount,t=e.pageSize,i=e.currentPage,o=e.onPageChanged,c=e.portionSize,u=void 0===c?10:c,s=Math.ceil(n/t),l=[],d=1;d<=s;d++)l.push(d);var f=Math.ceil(s/u),p=Object(r.useState)(1),m=Object(T.a)(p,2),g=m[0],h=m[1],b=(g-1)*u+1,v=g*u;return a.a.createElement("div",{className:N.a.pages},g>1&&a.a.createElement("button",{onClick:function(){h(g-1)}},"PREV"),l.filter((function(e){return e>=b&&e<=v})).map((function(e){return a.a.createElement("span",{className:U()(Object(L.a)({},N.a.selectedPage,i===e),N.a.pageNumber),onClick:function(n){o(e)},key:e.id},e)})),f>g&&a.a.createElement("button",{onClick:function(){h(g+1)}},"NEXT"))},G=t(31),M=function(e){return{}},V=function(){return a.a.createElement("div",null,a.a.createElement(G.c,{initialValues:{term:""},validate:M,onSubmit:function(e,n){n.setSubmitting}},(function(e){var n=e.isSubmitting;return a.a.createElement(G.b,null,a.a.createElement(G.a,{type:"text",name:"term"}),a.a.createElement("button",{type:"submit",disabled:n},"Search"))})))},J=t(102),D=t.n(J),H=t(125),R=t.n(H),Q=t(20),X=function(e){var n=e.user,t=e.followingInProgress,r=e.unfollow,i=e.follow;return a.a.createElement("div",null,a.a.createElement(Q.c,{to:"/profile/"+n.id},a.a.createElement("img",{src:null!=n.photos.small?n.photos.small:R.a,className:D.a.photo})),a.a.createElement("div",null,n.followed?a.a.createElement("button",{disabled:t.some((function(e){return e===n.id})),onClick:function(){r(n.id)}},"UNFOLLOW"):a.a.createElement("button",{disabled:t.some((function(e){return e===n.id})),onClick:function(){i(n.id)}},"FOLLOW")),a.a.createElement("div",null,a.a.createElement("div",null,n.name),a.a.createElement("div",null,n.status)),a.a.createElement("div",null,a.a.createElement("div",null,"user.location.city"),a.a.createElement("div",null,"user.location.country")))},W=function(e){return a.a.createElement("div",null,a.a.createElement(f.a,null),a.a.createElement(V,null),a.a.createElement(B,{totalItemsCount:e.totalCount,pageSize:e.pageSize,currentPage:e.currentPage,onPageChanged:e.onPageChanged}),e.users.map((function(n){return a.a.createElement(X,{key:n.id,user:n,followingInProgress:e.followingInProgress,unfollow:e.unfollow,follow:e.follow})})))},Z=t(77),q=(t(174),t(32)),K=t(164),Y=Object(K.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),_=function(e){return e.usersPage.pageSize},$=function(e){return e.usersPage.totalCount},ee=function(e){return e.usersPage.currentPage},ne=function(e){return e.usersPage.isFetching},te=function(e){return e.usersPage.followingInProgress},re=function(e){Object(s.a)(t,e);var n=Object(l.a)(t);function t(){var e;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=n.call.apply(n,[this].concat(a))).onPageChanged=function(n){e.props.fetchUsers(n,e.props.pageSize),e.props.setCurrentPage(n)},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,n=e.currentPage,t=e.pageSize;this.props.fetchUsers(n,t)}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(p.a,null),this.props.isFetching?a.a.createElement(Z.a,null):null,a.a.createElement(W,{totalCount:this.props.totalCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,setCurrentPage:this.props.setCurrentPage,followingInProgress:this.props.followingInProgress}))}}]),t}(a.a.Component),ae=Object(q.d)(Object(h.b)((function(e){return{users:Y(e),pageSize:_(e),totalCount:$(e),currentPage:ee(e),isFetching:ne(e),followingInProgress:te(e)}}),{follow:function(e){return function(){var n=Object(E.a)(v.a.mark((function n(t){return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:C(t,e,j.d.follow.bind(j.d),y);case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},unfollow:function(e){return function(){var n=Object(E.a)(v.a.mark((function n(t){return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:C(t,e,j.d.unfollow.bind(j.d),P);case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},setCurrentPage:function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},toggleFollowingProgress:k,fetchUsers:function(e,n){return function(){var t=Object(E.a)(v.a.mark((function t(r){var a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(A(!0)),t.next=3,j.d.getUsers(e,n);case 3:a=t.sent,r(A(!1)),r({type:"SET_USERS",users:a.items}),r({type:"SET_TOTAL_COUNT",count:a.totalCount});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))(re),ie=t(87),oe=t(86),ce=t(27),ue=t(82),se=t.n(ue),le=t(47),de=t.n(le),fe=t(40),pe=function(e){var n=e.onSubmit;e.captchaUrl;return a.a.createElement("div",{className:de.a.container},a.a.createElement(Q.b,{className:de.a.logoLink,to:"/"},a.a.createElement(ce.b,{src:se.a,alt:"logo"})),a.a.createElement("div",{className:de.a.formWrap},a.a.createElement(G.c,{className:de.a.formContent,initialValues:{email:"",password:"",rememberMe:!1},validationSchema:ie.a({email:ie.b().email("Invalid email address").required("Required"),password:ie.b().required("Required")}),onSubmit:function(e,t){t.setSubmitting;n(e)}},a.a.createElement(G.b,{className:de.a.loginForm},a.a.createElement("h1",null,"Sign in to your account"),a.a.createElement(oe.b,{label:"Email",name:"email",type:"email"}),a.a.createElement(oe.b,{label:"Password",name:"password",type:"password"}),a.a.createElement(oe.a,{className:de.a.checkbox,name:"rememberMe"},"Remember me"),a.a.createElement("button",{type:"submit"},"Sign in")))))},me=Object(h.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{logIn:fe.c})((function(e){return e.isAuth?a.a.createElement(d.a,{to:"/profile"}):a.a.createElement(a.a.Fragment,null,a.a.createElement(pe,{onSubmit:function(n){e.logIn(n.email,n.password,n.rememberMe)},captchaUrl:e.captchaUrl}))})),ge={isInitialized:!1},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"INITIALIZED":return Object(x.a)(Object(x.a)({},e),{},{isInitialized:!0});default:return e}},be=t(110),ve=t(147),Ee={friends:[{id:1,name:"Zein"},{id:2,name:"Mia"},{id:3,name:"HoneyBee"}]},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee;return e},xe=t(168),je=t(153),we=Object(q.c)({profilePage:be.b,dialogsPage:ve.b,sidebar:Oe,usersPage:I,auth:fe.a,form:je.a,app:he}),Se=Object(q.e)(we,Object(q.a)(xe.a));window.store=Se;var ye=Se,Pe=function(e){return function(n){return a.a.createElement(r.Suspense,{fallback:a.a.createElement("div",null,"Loading...")},a.a.createElement(e,n))}},Ae=t(13),ke=t(170),Ce=t.n(ke),Ie=t(14),Le=t(92);function Te(){var e=Object(Ae.a)(["\n    border-radius: 50px;\n    background: #01bf71;\n    white-space: nowrap;\n    padding: 14px 48px;\n    color: #010606;\n    font-size: 20px;\n    outline: none;\n    border: none;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n\n    &:hover{\n        transition: all 0.2s ease-in-out;\n        background: #fff;\n    }\n"]);return Te=function(){return e},e}function ze(){var e=Object(Ae.a)(["\n    margin-left: 8px;\n    font-size: 20px;\n"]);return ze=function(){return e},e}function Ne(){var e=Object(Ae.a)(["\n    margin-left: 8px;\n    font-size: 20px;\n"]);return Ne=function(){return e},e}function Fe(){var e=Object(Ae.a)(["\n    margin-top: 32px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]);return Fe=function(){return e},e}function Ue(){var e=Object(Ae.a)(["\n    margin-top: 24px;\n    color: #fff;\n    font-size: 24px;\n    text-align: center;\n    max-width: 600px;\n\n    @media screen and (max-width: 768px){\n        font-size: 24px;\n    }\n    @media screen and (max-width: 480px){\n        font-size: 18px;\n    }\n"]);return Ue=function(){return e},e}function Be(){var e=Object(Ae.a)(["\n    color: #fff;\n    font-size: 48px;\n    text-align: center;\n\n    @media screen and (max-width: 768px){\n        font-size: 40px;\n    }\n    @media screen and (max-width: 480px){\n        font-size: 32px;\n    }\n        \n"]);return Be=function(){return e},e}function Ge(){var e=Object(Ae.a)(["\n    z-index: 3;\n    max-width: 1200;\n    position: absolute;\n    padding: 8px 24px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]);return Ge=function(){return e},e}function Me(){var e=Object(Ae.a)(["\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n    object-fit: cover;\n    background: #232a34;\n"]);return Me=function(){return e},e}function Ve(){var e=Object(Ae.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n\n"]);return Ve=function(){return e},e}function Je(){var e=Object(Ae.a)(["\n    background: #0c0c0c;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0 30px;\n    height: 100vh;\n    position: relative;\n    z-index: 1;\n\n    :before{\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background: linear-gradient(\n            180deg, \n            rgba(0,0,0, 0.2) 0%, \n            rgba(0,0,0, 0.6) 100%),\n            linear-gradient(\n                180deg, \n                rgba(0,0,0, 0.2) 0%, \n                transparent 100%);\n        z-index: 2;\n    }\n"]);return Je=function(){return e},e}var De=Ie.a.div(Je()),He=Ie.a.div(Ve()),Re=Ie.a.video(Me()),Qe=Ie.a.div(Ge()),Xe=Ie.a.h1(Be()),We=Ie.a.p(Ue()),Ze=Ie.a.div(Fe()),qe=Object(Ie.a)(Le.b)(Ne()),Ke=Object(Ie.a)(Le.d)(ze()),Ye=Object(Ie.a)(Q.b)(Te()),_e=function(){var e=Object(r.useState)(!1),n=Object(T.a)(e,2),t=n[0],i=n[1],o=function(){return i(!t)};return a.a.createElement(De,null,a.a.createElement(He,null,a.a.createElement(Re,{autoPlay:!0,loop:!0,muted:!0,src:Ce.a,type:"video/mp4"})),a.a.createElement(Qe,null,a.a.createElement(Xe,null,"Welcome to Polar Lights"),a.a.createElement(We,null,"Polar lights is social network for aspired web-developers. Sign in and start connecting, sharing knowledge and find new friends and collegues."),a.a.createElement(Ze,null,a.a.createElement(Ye,{to:"/login",onMouseEnter:o,onMouseLeave:o},"Get started ",t?a.a.createElement(qe,null):a.a.createElement(Ke,null)))))},$e=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(p.a,null),a.a.createElement(_e,null))},en=a.a.lazy((function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,482))})),nn=a.a.lazy((function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,481))})),tn=function(e){Object(s.a)(t,e);var n=Object(l.a)(t);function t(){return Object(c.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.isInitialized?a.a.createElement(a.a.Fragment,null,a.a.createElement(d.d,null,a.a.createElement(d.b,{path:"/",exact:!0,component:$e}),a.a.createElement(d.b,{path:"/profile/:userId?",render:Pe(nn)}),a.a.createElement(d.b,{path:"/dialogs",render:Pe(en)}),a.a.createElement(d.b,{path:"/users",render:function(){return a.a.createElement(ae,null)}}),a.a.createElement(d.b,{path:"/login",render:function(){return a.a.createElement(me,null)}}),a.a.createElement(d.b,{path:"/news",component:m}),a.a.createElement(d.b,{path:"/settings",component:g}))):a.a.createElement(Z.a,null)}}]),t}(a.a.Component),rn=Object(q.d)(d.g,Object(h.b)((function(e){return{isInitialized:e.app.isInitialized}}),{initializeApp:function(){return function(){var e=Object(E.a)(v.a.mark((function e(n){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(Object(fe.b)());case 2:e.sent,n({type:"INITIALIZED"});case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}))(tn),an=function(e){return a.a.createElement(a.a.StrictMode,null,a.a.createElement(h.a,{store:ye},a.a.createElement(Q.a,null,a.a.createElement(rn,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(an,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},47:function(e,n,t){e.exports={container:"styleSignin_container__31eVb",formWrap:"styleSignin_formWrap___ng-_",logoLink:"styleSignin_logoLink__1rWuR",formContent:"styleSignin_formContent__38kjf",loginForm:"styleSignin_loginForm__3Eb3U",checkbox:"styleSignin_checkbox__xyLFR"}},50:function(e,n,t){"use strict";var r=t(13),a=t(1),i=t.n(a),o=t(14),c=t(154),u=t.n(c);function s(){var e=Object(r.a)(["\n    width: 100%;\n    height: 30vh;\n"]);return s=function(){return e},e}var l=o.a.img(s());n.a=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l,{src:u.a,alt:"banner"}))}},77:function(e,n,t){"use strict";var r=t(1),a=t.n(r),i=t(163),o=t.n(i);n.a=function(e){return a.a.createElement("div",null,a.a.createElement("img",{src:o.a}))}},82:function(e,n,t){e.exports=t.p+"static/media/logo.3fa434f6.png"},86:function(e,n,t){"use strict";t.d(n,"b",(function(){return d})),t.d(n,"a",(function(){return f}));var r=t(3),a=t(19),i=t(78),o=t(1),c=t.n(o),u=t(31),s=t(89),l=t.n(s),d=function(e){var n=e.label,t=Object(i.a)(e,["label"]),r=Object(u.d)(t),o=Object(a.a)(r,2),s=o[0],d=o[1],f=d.touched&&d.error;return c.a.createElement("div",{className:l.a.myTextInput},c.a.createElement("label",{htmlFor:t.id||t.name},n),c.a.createElement("input",Object.assign({},s,t,{className:f?l.a.error:""})),f?c.a.createElement("div",{className:l.a.error},d.error):null)},f=function(e){var n=e.children,t=Object(i.a)(e,["children"]),o=Object(u.d)(Object(r.a)(Object(r.a)({},t),{},{type:"checkbox"})),s=Object(a.a)(o,2),l=s[0],d=s[1];return c.a.createElement("div",null,c.a.createElement("label",null,c.a.createElement("input",Object.assign({type:"checkbox"},l,t)),n),d.touched&&d.error?c.a.createElement("div",null,d.error):null)}},88:function(e,n,t){e.exports={selectedPage:"pagination_selectedPage__3UnPV",pages:"pagination_pages__2PrQU",pageNumber:"pagination_pageNumber__DgCH2"}},89:function(e,n,t){e.exports={error:"MyForms_error__7vg8Q"}}},[[219,2,3]]]);
//# sourceMappingURL=main.30de98f6.chunk.js.map