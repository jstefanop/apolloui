(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{541:function(e,n,t){var a=t(75);e.exports=function(e){return e===e&&!a(e)}},542:function(e,n){e.exports=function(e,n){return function(t){return null!=t&&t[e]===n&&(void 0!==n||e in Object(t))}}},570:function(e,n,t){var a=t(279),r=t(571),o=t(590),l=t(591),i=o(function(e,n){if(null==e)return[];var t=n.length;return t>1&&l(e,n[0],n[1])?n=[]:t>2&&l(n[0],n[1],n[2])&&(n=[n[0]]),r(e,a(n,1),[])});e.exports=i},571:function(e,n,t){var a=t(177),r=t(572),o=t(581),l=t(587),i=t(122),c=t(588),s=t(267);e.exports=function(e,n,t){var u=-1;n=a(n.length?n:[s],i(r));var d=o(e,function(e,t,r){return{criteria:a(n,function(n){return n(e)}),index:++u,value:e}});return l(d,function(e,n){return c(e,n,t)})}},572:function(e,n,t){var a=t(573),r=t(576),o=t(267),l=t(55),i=t(578);e.exports=function(e){return"function"==typeof e?e:null==e?o:"object"==typeof e?l(e)?r(e[0],e[1]):a(e):i(e)}},573:function(e,n,t){var a=t(574),r=t(575),o=t(542);e.exports=function(e){var n=r(e);return 1==n.length&&n[0][2]?o(n[0][0],n[0][1]):function(t){return t===e||a(t,e,n)}}},574:function(e,n,t){var a=t(269),r=t(533),o=1,l=2;e.exports=function(e,n,t,i){var c=t.length,s=c,u=!i;if(null==e)return!s;for(e=Object(e);c--;){var d=t[c];if(u&&d[2]?d[1]!==e[d[0]]:!(d[0]in e))return!1}for(;++c<s;){var m=(d=t[c])[0],f=e[m],p=d[1];if(u&&d[2]){if(void 0===f&&!(m in e))return!1}else{var v=new a;if(i)var E=i(f,p,m,e,n,v);if(!(void 0===E?r(p,f,o|l,i,v):E))return!1}}return!0}},575:function(e,n,t){var a=t(541),r=t(119);e.exports=function(e){for(var n=r(e),t=n.length;t--;){var o=n[t],l=e[o];n[t]=[o,l,a(l)]}return n}},576:function(e,n,t){var a=t(533),r=t(577),o=t(538),l=t(270),i=t(541),c=t(542),s=t(171),u=1,d=2;e.exports=function(e,n){return l(e)&&i(n)?c(s(e),n):function(t){var l=r(t,e);return void 0===l&&l===n?o(t,e):a(n,l,u|d)}}},577:function(e,n,t){var a=t(266);e.exports=function(e,n,t){var r=null==e?void 0:a(e,n);return void 0===r?t:r}},578:function(e,n,t){var a=t(579),r=t(580),o=t(270),l=t(171);e.exports=function(e){return o(e)?a(l(e)):r(e)}},579:function(e,n){e.exports=function(e){return function(n){return null==n?void 0:n[e]}}},580:function(e,n,t){var a=t(266);e.exports=function(e){return function(n){return a(n,e)}}},581:function(e,n,t){var a=t(582),r=t(172);e.exports=function(e,n){var t=-1,o=r(e)?Array(e.length):[];return a(e,function(e,a,r){o[++t]=n(e,a,r)}),o}},582:function(e,n,t){var a=t(583),r=t(586)(a);e.exports=r},583:function(e,n,t){var a=t(584),r=t(119);e.exports=function(e,n){return e&&a(e,n,r)}},584:function(e,n,t){var a=t(585)();e.exports=a},585:function(e,n){e.exports=function(e){return function(n,t,a){for(var r=-1,o=Object(n),l=a(n),i=l.length;i--;){var c=l[e?i:++r];if(!1===t(o[c],c,o))break}return n}}},586:function(e,n,t){var a=t(172);e.exports=function(e,n){return function(t,r){if(null==t)return t;if(!a(t))return e(t,r);for(var o=t.length,l=n?o:-1,i=Object(t);(n?l--:++l<o)&&!1!==r(i[l],l,i););return t}}},587:function(e,n){e.exports=function(e,n){var t=e.length;for(e.sort(n);t--;)e[t]=e[t].value;return e}},588:function(e,n,t){var a=t(589);e.exports=function(e,n,t){for(var r=-1,o=e.criteria,l=n.criteria,i=o.length,c=t.length;++r<i;){var s=a(o[r],l[r]);if(s)return r>=c?s:s*("desc"==t[r]?-1:1)}return e.index-n.index}},589:function(e,n,t){var a=t(124);e.exports=function(e,n){if(e!==n){var t=void 0!==e,r=null===e,o=e===e,l=a(e),i=void 0!==n,c=null===n,s=n===n,u=a(n);if(!c&&!u&&!l&&e>n||l&&i&&s&&!c&&!u||r&&i&&s||!t&&s||!o)return 1;if(!r&&!l&&!u&&e<n||u&&t&&o&&!r&&!l||c&&t&&o||!i&&o||!s)return-1}return 0}},590:function(e,n,t){var a=t(267),r=t(280),o=t(281);e.exports=function(e,n){return o(r(e,n,a),e+"")}},591:function(e,n,t){var a=t(174),r=t(172),o=t(265),l=t(75);e.exports=function(e,n,t){if(!l(t))return!1;var i=typeof n;return!!("number"==i?r(t)&&o(n,t.length):"string"==i&&n in t)&&a(t[n],e)}},592:function(e,n,t){var a=t(274),r=1,o=4;e.exports=function(e){return a(e,r|o)}},597:function(e,n,t){"use strict";t.r(n);var a=t(8),r=t(9),o=t(11),l=t(10),i=t(12),c=t(16),s=t(1),u=t.n(s),d=t(114),m=t.n(d),f=t(38),p=t(90),v=t(7),E=t(25),h=t(23),x=t(3),b=(t(539),t(543)),g=t(15),y=t(536),j=t.n(y),w=t(570),k=t.n(w),O=t(592),N=t.n(O),C=function(e){var n=e.pool,t=n.enabled,a=n.donation,r=n.url,o=n.username,l=n.password,i=n.proxy,c=e.disabled,s=e.toggleEnabled,d=e.onDelete,m=e.onMoveUp,f=e.onMoveDown;return u.a.createElement(g.I18n,null,function(e){e.i18n;return u.a.createElement(x.H,{form:!0},u.a.createElement(x.m,{md:1},u.a.createElement(x.q,null,u.a.createElement("div",{className:"text-right",style:{marginTop:"36px"}},u.a.createElement(h.n,{className:"",variant:"pill",label:!0,color:"success",checked:t,size:"lg",onClick:s})))),u.a.createElement(x.m,{md:3},u.a.createElement(x.q,null,u.a.createElement(x.w,{for:"poolUrl"},u.a.createElement(g.Trans,{id:"Url"})),u.a.createElement(x.r,{type:"text",name:"poolUrl",id:"poolUrl",bsSize:"lg",disabled:c,value:r,className:a?"donation-color":""}))),u.a.createElement(x.m,{md:3},u.a.createElement(x.q,null,u.a.createElement(x.w,{for:"poolUsername"},u.a.createElement(g.Trans,{id:"Username"})),u.a.createElement(x.r,{type:"text",name:"poolUsername",id:"poolUsername",bsSize:"lg",disabled:c,value:o,className:a?"donation-color":""}))),u.a.createElement(x.m,{md:1},u.a.createElement(x.q,null,u.a.createElement(x.w,{for:"poolUsername"},u.a.createElement(g.Trans,{id:"Password"})),u.a.createElement(x.r,{type:"text",name:"poolPassword",id:"poolPassword",bsSize:"lg",disabled:c,value:l||"",className:a?"donation-color":""}))),u.a.createElement(x.m,{md:2},u.a.createElement(x.q,null,u.a.createElement(x.w,{for:"poolProxy"},u.a.createElement(g.Trans,{id:"Proxy"})),u.a.createElement(x.r,{type:"text",name:"poolProxy",id:"poolProxy",bsSize:"lg",disabled:c,value:i||"",className:a?"donation-color":""}))),u.a.createElement(x.m,{md:2},u.a.createElement(x.q,null,u.a.createElement(x.e,{size:"lg",className:"btn-default",style:{marginTop:"29px",marginRight:"5px"},onClick:m},u.a.createElement("i",{className:"fa fa-arrow-up"})),u.a.createElement(x.e,{size:"lg",className:"btn-default",style:{marginTop:"29px",marginRight:"5px"},onClick:f},u.a.createElement("i",{className:"fa fa-arrow-down"})),u.a.createElement(x.e,{size:"lg",className:"btn-danger",style:{marginTop:"29px"},disabled:!!a,onClick:d},u.a.createElement("i",{className:"fa fa-times"})))))})},S=t(65),U={enabled:!0,donation:0,username:"",password:"",url:"",proxy:"",errors:{}},T=function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(o.a)(this,Object(l.a)(n).call(this,e))).state=Object(v.a)({},U),t.toggleEnabled=t.toggleEnabled.bind(Object(E.a)(Object(E.a)(t))),t.handleAdd=t.handleAdd.bind(Object(E.a)(Object(E.a)(t))),t.onChange=t.onChange.bind(Object(E.a)(Object(E.a)(t))),t}return Object(i.a)(n,e),Object(r.a)(n,[{key:"onChange",value:function(e){this.setState(Object(S.a)({},e.target.name,e.target.value))}},{key:"toggleEnabled",value:function(){var e=this.state.enabled;this.setState({enabled:!e})}},{key:"handleAdd",value:function(){var e=this.state,n=e.enabled,t=e.donation,a=e.url,r=e.username,o=e.password,l=e.proxy,i=this.props.onAdd,c={};if(a)try{new URL(a)}catch(s){c.url="URL has to be valid URL."}else c.url="URL is required.";if(l)try{new URL(l)}catch(s){c.proxy="Proxy has to be valid URL."}r||(c.username="Username is required."),o||(c.password="Password is required."),0===Object.keys(c).length?(i({enabled:n,donation:t,url:a,username:r,password:o,proxy:l}),this.setState(Object(v.a)({},U))):this.setState({errors:c})}},{key:"render",value:function(){var e=this,n=this.state,t=n.enabled,a=(n.donation,n.username),r=n.password,o=n.url,l=n.proxy,i=n.errors;return u.a.createElement(g.I18n,null,function(n){var c=n.i18n;return u.a.createElement(x.H,{form:!0},u.a.createElement(x.m,{md:1},u.a.createElement(x.q,null,u.a.createElement("div",{className:"text-right",style:{marginTop:"36px"}},u.a.createElement(h.n,{className:"",variant:"pill",label:!0,color:"success",checked:t,size:"lg",onClick:e.toggleEnabled})))),u.a.createElement(x.m,{md:3},u.a.createElement(x.q,null,u.a.createElement(x.w,{for:"poolUrl"},u.a.createElement(g.Trans,{id:"Url"})),u.a.createElement(x.r,{type:"text",name:"url",id:"poolUrl",placeholder:c._({id:"stratum+tcp://us.litecoinpool.org:3333"}),bsSize:"lg",value:o,onChange:e.onChange}),u.a.createElement("span",{className:"text-danger"},i.url))),u.a.createElement(x.m,{md:3},u.a.createElement(x.q,null,u.a.createElement(x.w,{for:"poolUsername"},u.a.createElement(g.Trans,{id:"Username"})),u.a.createElement(x.r,{type:"text",name:"username",id:"poolUsername",placeholder:"futurebit.1",bsSize:"lg",value:a,onChange:e.onChange}),u.a.createElement("span",{className:"text-danger"},i.username))),u.a.createElement(x.m,{md:1},u.a.createElement(x.q,null,u.a.createElement(x.w,{for:"poolPassword"},u.a.createElement(g.Trans,{id:"Password"})),u.a.createElement(x.r,{type:"text",name:"password",id:"poolPassword",placeholder:"x",bsSize:"lg",value:r,onChange:e.onChange}),u.a.createElement("span",{className:"text-danger"},i.password))),u.a.createElement(x.m,{md:2},u.a.createElement(x.q,null,u.a.createElement(x.w,{for:"poolProxy"},u.a.createElement(g.Trans,{id:"Proxy"})),u.a.createElement(x.r,{type:"text",name:"proxy",id:"poolProxy",placeholder:"http://192.168.1.1:3333",bsSize:"lg",value:l,onChange:e.onChange}),u.a.createElement("span",{className:"text-danger"},i.proxy))),u.a.createElement(x.m,{md:2},u.a.createElement(x.q,null,u.a.createElement(x.e,{size:"lg",className:"btn-light",style:{marginTop:"29px"},onClick:e.handleAdd},u.a.createElement("i",{className:"fa fa-plus"})))))})}}]),n}(s.Component),P=function(e){function n(e){var t;Object(a.a)(this,n);var r=(t=Object(o.a)(this,Object(l.a)(n).call(this,e))).props.pools,i=!1,c=1;return r.forEach(function(e){e.enabled&&e.donation&&(i=!0,c=e.donation)}),t.state={pools:N()(r),donation:i,donationValue:c},t.handleAdd=t.handleAdd.bind(Object(E.a)(Object(E.a)(t))),t.handleSaveAndRestart=t.handleSaveAndRestart.bind(Object(E.a)(Object(E.a)(t))),t.marks={donation:{min:1,max:10,data:{1:"Min",2:"2%",3:"3%",4:"4%",5:"5%",6:"6%",7:"7%",8:"8%",9:"9%",10:"Max"}}},t}return Object(i.a)(n,e),Object(r.a)(n,[{key:"handleSaveAndRestart",value:function(){(0,this.props.saveAndRestart)(this.state.pools)}},{key:"handleMove",value:function(e){var n=e.index,t=e.direction,a=this.state.pools,r=a.find(function(e){return e.index===n}),o=a.find(function(e){return"up"===t?e.index===n-1:e.index===n+1});o&&("up"===t?(r.index-=1,o.index+=1):(r.index+=1,o.index-=1)),this.setState({pools:a})}},{key:"handleDelete",value:function(e){var n=this.state.pools,t=n.findIndex(function(n){return n.index===e}),a=n[t];n.forEach(function(e){e.index>a.index&&(e.index-=1)}),n.splice(t,1),this.setState({pools:n})}},{key:"handleToggleEnabled",value:function(e){var n=this.state.pools,t=n.find(function(n){return n.index===e});t.enabled=!t.enabled,this.setState({pools:n})}},{key:"handleAdd",value:function(e){var n=this.state.pools;n.push(Object(v.a)({},e,{index:n.length})),this.setState({pools:n})}},{key:"onSelect",value:function(e){var n=this.state.pools;n.map(function(n){n.donation&&(n.enabled=e)}),this.setState({pools:n,donation:e})}},{key:"onChange",value:function(e){this.state.pools.map(function(n){n.donation&&(n.donation=e)}),this.setState({donationValue:e})}},{key:"render",value:function(){var e=this,n=this.state,t=n.pools,a=n.donation,r=n.donationValue,o=this.props.pools,l=!j()(k()(t,[function(e){return e.index}]),k()(o,[function(e){return e.index}]));return u.a.createElement(g.I18n,null,function(n){n.i18n;return u.a.createElement("div",{className:"animated fadeIn"},l&&u.a.createElement(x.H,null,u.a.createElement(x.m,{lg:"12"},u.a.createElement(x.f,null,u.a.createElement(x.j,{className:"bg-dark"},u.a.createElement(x.e,{size:"sm",className:"btn-warning text-uppercase",onClick:e.handleSaveAndRestart,disabled:!l},u.a.createElement(g.Trans,{id:"Save & Restart"})),u.a.createElement("span",{className:"ml-2"},u.a.createElement(g.Trans,{id:"You need to restart your miner to apply changes."})))))),u.a.createElement("div",{className:"animated fadeIn"},u.a.createElement(x.H,null,u.a.createElement(x.m,{lg:"12"},u.a.createElement(x.f,null,u.a.createElement(x.j,null,u.a.createElement(x.l,null,u.a.createElement(g.Trans,{id:"Pools"})),u.a.createElement(x.k,{className:"text-muted"},u.a.createElement(g.Trans,{id:"Manage pools configuration for your miner"}))),u.a.createElement(x.g,null,k()(t,function(e){return e.index}).map(function(n){return!n.donation&&u.a.createElement(C,{pool:n,disabled:!0,key:n.index,toggleEnabled:function(){return e.handleToggleEnabled(n.index)},onDelete:function(){return e.handleDelete(n.index)},onMoveUp:function(){return e.handleMove({index:n.index,direction:"up"})},onMoveDown:function(){return e.handleMove({index:n.index,direction:"down"})}})}),u.a.createElement(T,{onAdd:e.handleAdd}))))),u.a.createElement(x.H,null,u.a.createElement(x.m,{lg:"12"},u.a.createElement(x.f,null,u.a.createElement(x.j,null,u.a.createElement(h.n,{className:"float-left mr-2",variant:"pill",label:!0,color:"primary",checked:a,size:"sm",onChange:function(){return e.onSelect(!a)}}),u.a.createElement(x.l,null,u.a.createElement(g.Trans,{id:"Donation pool"})," ",a&&u.a.createElement("span",null,r,"%")),u.a.createElement(x.k,{className:"text-muted"},"Donate a bit of your hashrate to FutureBit to support next development.")),u.a.createElement(x.g,null,u.a.createElement(x.p,null,u.a.createElement(x.H,{form:!0,className:"m-3 mb-4 justify-content-center"},u.a.createElement(x.m,{xl:"8"},u.a.createElement(b.a,{min:e.marks.donation.min,max:e.marks.donation.max,marks:e.marks.donation.data,step:e.marks.donation.step,disabled:!a,defaultValue:r,onChange:function(n){return e.onChange(n)}}))))))))))})}}]),n}(s.Component),A=Object(c.connect)(null,function(e){return{saveAndRestart:function(n){e(Object(p.e)(n))}}})(P),z=function(e){function n(){return Object(a.a)(this,n),Object(o.a)(this,Object(l.a)(n).apply(this,arguments))}return Object(i.a)(n,e),Object(r.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.fetchPools)()}},{key:"render",value:function(){var e=this.props.poolsData,n=e.loading,t=e.pools;return!1!==n?u.a.createElement(f.a,null):u.a.createElement(A,{pools:t})}}]),n}(s.Component),q=Object(c.connect)(function(e){return{poolsData:{loading:e.pools.loading,pools:e.pools.pools&&e.pools.pools.map(function(e){return m()(e,["id"])})}}},function(e){return{fetchPools:function(){e(Object(p.c)())}}})(z);n.default=q}}]);
//# sourceMappingURL=5.1d0c446f.chunk.js.map