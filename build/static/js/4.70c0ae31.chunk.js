(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{595:function(e,a,t){"use strict";t.r(a);var n=t(7),l=t(8),r=t(11),o=t(9),s=t(10),c=t(15),i=t(1),d=t.n(i),m=t(231),u=t.n(m),p=t(47),E=t(153),h=t(14),b=t(24),f=t(3),g=t(16),x=t(533),v=t.n(x),y=t(567),w=t.n(y),j=t(589),O=t.n(j),k=t(22),P=function(e){var a=e.pool,t=a.enabled,n=a.url,l=a.username,r=a.password,o=a.proxy,s=e.disabled,c=e.toggleEnabled,i=e.onDelete,m=e.onMoveUp,u=e.onMoveDown;return d.a.createElement(g.I18n,null,function(e){e.i18n;return d.a.createElement(f.H,{form:!0},d.a.createElement(f.m,{md:1},d.a.createElement(f.q,null,d.a.createElement("div",{className:"text-right",style:{marginTop:"36px"}},d.a.createElement(k.n,{className:"",variant:"pill",label:!0,color:"success",checked:t,size:"lg",onClick:c})))),d.a.createElement(f.m,{md:3},d.a.createElement(f.q,null,d.a.createElement(f.w,{for:"poolUrl"},d.a.createElement(g.Trans,{id:"Pool Url"})),d.a.createElement(f.r,{type:"text",name:"poolUrl",id:"poolUrl",bsSize:"lg",disabled:s,value:n}))),d.a.createElement(f.m,{md:3},d.a.createElement(f.q,null,d.a.createElement(f.w,{for:"poolUsername"},d.a.createElement(g.Trans,{id:"Pool Username"})),d.a.createElement(f.r,{type:"text",name:"poolUsername",id:"poolUsername",bsSize:"lg",disabled:s,value:l}))),d.a.createElement(f.m,{md:1},d.a.createElement(f.q,null,d.a.createElement(f.w,{for:"poolUsername"},d.a.createElement(g.Trans,{id:"Pool Password"})),d.a.createElement(f.r,{type:"text",name:"poolPassword",id:"poolPassword",bsSize:"lg",disabled:s,value:r}))),d.a.createElement(f.m,{md:2},d.a.createElement(f.q,null,d.a.createElement(f.w,{for:"poolProxy"},d.a.createElement(g.Trans,{id:"Pool Proxy"})),d.a.createElement(f.r,{type:"text",name:"poolProxy",id:"poolProxy",bsSize:"lg",disabled:s,value:o}))),d.a.createElement(f.m,{md:2},d.a.createElement(f.q,null,d.a.createElement(f.e,{size:"lg",className:"btn-default",style:{marginTop:"29px",marginRight:"5px"},onClick:m},d.a.createElement("i",{className:"fa fa-arrow-up"})),d.a.createElement(f.e,{size:"lg",className:"btn-default",style:{marginTop:"29px",marginRight:"5px"},onClick:u},d.a.createElement("i",{className:"fa fa-arrow-down"})),d.a.createElement(f.e,{size:"lg",className:"btn-danger",style:{marginTop:"29px"},onClick:i},d.a.createElement("i",{className:"fa fa-times"})))))})},U=t(64),N={enabled:!0,username:"",password:"",url:"",proxy:"",errors:{}},C=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(r.a)(this,Object(o.a)(a).call(this,e))).state=Object(h.a)({},N),t.toggleEnabled=t.toggleEnabled.bind(Object(b.a)(Object(b.a)(t))),t.handleAdd=t.handleAdd.bind(Object(b.a)(Object(b.a)(t))),t.onChange=t.onChange.bind(Object(b.a)(Object(b.a)(t))),t}return Object(s.a)(a,e),Object(l.a)(a,[{key:"onChange",value:function(e){this.setState(Object(U.a)({},e.target.name,e.target.value))}},{key:"toggleEnabled",value:function(){var e=this.state.enabled;this.setState({enabled:!e})}},{key:"handleAdd",value:function(){var e=this.state,a=e.enabled,t=e.url,n=e.username,l=e.password,r=e.proxy,o=this.props.onAdd,s={};if(t)try{new URL(t)}catch(c){s.url="URL has to be valid URL."}else s.url="URL is required.";if(r)try{new URL(r)}catch(c){s.proxy="Proxy has to be valid URL."}n||(s.username="Username is required."),l||(s.password="Password is required."),0===Object.keys(s).length?(o({enabled:a,url:t,username:n,password:l,proxy:r}),this.setState(Object(h.a)({},N))):this.setState({errors:s})}},{key:"render",value:function(){var e=this,a=this.state,t=a.enabled,n=a.username,l=a.password,r=a.url,o=a.proxy,s=a.errors;return d.a.createElement(g.I18n,null,function(a){var c=a.i18n;return d.a.createElement(f.H,{form:!0},d.a.createElement(f.m,{md:1},d.a.createElement(f.q,null,d.a.createElement("div",{className:"text-right",style:{marginTop:"36px"}},d.a.createElement(k.n,{className:"",variant:"pill",label:!0,color:"success",checked:t,size:"lg",onClick:e.toggleEnabled})))),d.a.createElement(f.m,{md:3},d.a.createElement(f.q,null,d.a.createElement(f.w,{for:"poolUrl"},d.a.createElement(g.Trans,{id:"Pool Url"})),d.a.createElement(f.r,{type:"text",name:"url",id:"poolUrl",placeholder:c._({id:"stratum+tcp://us.litecoinpool.org:3333"}),bsSize:"lg",value:r,onChange:e.onChange}),d.a.createElement("span",{className:"text-danger"},s.url))),d.a.createElement(f.m,{md:3},d.a.createElement(f.q,null,d.a.createElement(f.w,{for:"poolUsername"},d.a.createElement(g.Trans,{id:"Pool Username"})),d.a.createElement(f.r,{type:"text",name:"username",id:"poolUsername",placeholder:"futurebit.1",bsSize:"lg",value:n,onChange:e.onChange}),d.a.createElement("span",{className:"text-danger"},s.username))),d.a.createElement(f.m,{md:1},d.a.createElement(f.q,null,d.a.createElement(f.w,{for:"poolPassword"},d.a.createElement(g.Trans,{id:"Pool Password"})),d.a.createElement(f.r,{type:"text",name:"password",id:"poolPassword",placeholder:"x",bsSize:"lg",value:l,onChange:e.onChange}),d.a.createElement("span",{className:"text-danger"},s.password))),d.a.createElement(f.m,{md:2},d.a.createElement(f.q,null,d.a.createElement(f.w,{for:"poolProxy"},d.a.createElement(g.Trans,{id:"Pool Proxy"})),d.a.createElement(f.r,{type:"text",name:"proxy",id:"poolProxy",placeholder:"http://192.168.1.1:3333",bsSize:"lg",value:o,onChange:e.onChange}),d.a.createElement("span",{className:"text-danger"},s.proxy))),d.a.createElement(f.m,{md:2},d.a.createElement(f.q,null,d.a.createElement(f.e,{size:"lg",className:"btn-light",style:{marginTop:"29px"},onClick:e.handleAdd},d.a.createElement("i",{className:"fa fa-plus"})))))})}}]),a}(i.Component),S=function(e){function a(e){var t;Object(n.a)(this,a);var l=(t=Object(r.a)(this,Object(o.a)(a).call(this,e))).props.pools;return t.state={pools:O()(l)},t.handleAdd=t.handleAdd.bind(Object(b.a)(Object(b.a)(t))),t.handleSaveAndRestart=t.handleSaveAndRestart.bind(Object(b.a)(Object(b.a)(t))),t}return Object(s.a)(a,e),Object(l.a)(a,[{key:"handleSaveAndRestart",value:function(){(0,this.props.saveAndRestart)(this.state.pools)}},{key:"handleMove",value:function(e){var a=e.index,t=e.direction,n=this.state.pools,l=n.find(function(e){return e.index===a}),r=n.find(function(e){return"up"===t?e.index===a-1:e.index===a+1});r&&("up"===t?(l.index-=1,r.index+=1):(l.index+=1,r.index-=1)),this.setState({pools:n})}},{key:"handleDelete",value:function(e){var a=this.state.pools,t=a.findIndex(function(a){return a.index===e}),n=a[t];a.forEach(function(e){e.index>n.index&&(e.index-=1)}),a.splice(t,1),this.setState({pools:a})}},{key:"handleToggleEnabled",value:function(e){var a=this.state.pools,t=a.find(function(a){return a.index===e});t.enabled=!t.enabled,this.setState({pools:a})}},{key:"handleAdd",value:function(e){var a=this.state.pools;a.push(Object(h.a)({},e,{index:a.length})),this.setState({pools:a})}},{key:"render",value:function(){var e=this,a=this.state.pools,t=this.props.pools,n=!v()(w()(a,[function(e){return e.index}]),w()(t,[function(e){return e.index}]));return d.a.createElement(g.I18n,null,function(t){t.i18n;return d.a.createElement("div",{className:"animated fadeIn"},d.a.createElement("div",{className:"animated fadeIn"},d.a.createElement(f.H,null,d.a.createElement(f.m,{lg:"12"},d.a.createElement(f.f,null,d.a.createElement(f.j,null,d.a.createElement(f.l,null,d.a.createElement(g.Trans,{id:"Pools"})),d.a.createElement(f.k,{className:"text-muted"},d.a.createElement(g.Trans,{id:"Manage pools configuration for your miner"}))),d.a.createElement(f.g,null,w()(a,function(e){return e.index}).map(function(a){return d.a.createElement(P,{pool:a,disabled:!0,key:a.index,toggleEnabled:function(){return e.handleToggleEnabled(a.index)},onDelete:function(){return e.handleDelete(a.index)},onMoveUp:function(){return e.handleMove({index:a.index,direction:"up"})},onMoveDown:function(){return e.handleMove({index:a.index,direction:"down"})}})}),d.a.createElement(C,{onAdd:e.handleAdd})))))),n?d.a.createElement(f.H,null,d.a.createElement(f.m,{lg:"12"},d.a.createElement(f.f,null,d.a.createElement(f.j,{className:"bg-dark"},d.a.createElement(f.e,{size:"sm",className:"btn-warning text-uppercase",onClick:e.handleSaveAndRestart,disabled:!n},d.a.createElement(g.Trans,{id:"Save & Restart"})),d.a.createElement("span",{className:"ml-2"},d.a.createElement(g.Trans,{id:"You need to restart your miner to apply changes."})))))):null,d.a.createElement("p",null))})}}]),a}(i.Component),T=Object(c.connect)(null,function(e){return{saveAndRestart:function(a){e(Object(E.d)(a))}}})(S),A=function(e){function a(){return Object(n.a)(this,a),Object(r.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.fetchPools)()}},{key:"render",value:function(){var e=this.props.poolsData,a=e.loading,t=e.pools;return!1!==a?d.a.createElement(p.a,null):d.a.createElement(T,{pools:t})}}]),a}(i.Component),q=Object(c.connect)(function(e){return{poolsData:{loading:e.pools.loading,pools:e.pools.pools&&e.pools.pools.map(function(e){return u()(e,["id"])})}}},function(e){return{fetchPools:function(){e(Object(E.c)())}}})(A);a.default=q}}]);
//# sourceMappingURL=4.70c0ae31.chunk.js.map