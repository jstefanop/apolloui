(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{598:function(e,t,a){"use strict";a.r(t);var l=a(8),r=a(9),n=a(11),s=a(10),m=a(12),c=a(15),i=a(16),o=a(1),u=a.n(o),d=a(3),E=a(534),h=a.n(E),g=a(535),b=a.n(g),p=a(38),f=a(25),v=a(46),N=a.n(v),y=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(n.a)(this,Object(s.a)(t).call(this,e))).updateDimensions=function(){var e=N.a.findDOMNode(Object(f.a)(Object(f.a)(a))).getElementsByClassName("widget"),t=e[0]&&e[0].offsetWidth&&e[0].offsetWidth<=280||!1,l=a.state.widgetClasses;t?l+=" small-width":l="d-inline-block text-muted text-truncate",a.setState({widgetClasses:l})},a.state={widgetClasses:"d-inline-block text-muted text-truncate"},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.updateDimensions(),window.addEventListener("resize",this.updateDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions)}},{key:"render",value:function(){return u.a.createElement(d.f,{className:this.props.bgColor},u.a.createElement(d.g,{className:"widget"},u.a.createElement("div",{className:"h1 text-muted float-right"},u.a.createElement("i",{className:this.props.icon+" text-gray"})),u.a.createElement("div",{className:"h4 m-0"},this.props.value),u.a.createElement("div",null,this.props.title),u.a.createElement(d.G,{className:"progress-xs my-3",color:this.props.progressColor,value:this.props.progressValue}),u.a.createElement("small",{className:this.state.widgetClasses},this.props.secondaryTitle,": ",u.a.createElement("b",null,this.props.secondaryValue))))}}]),t}(o.Component),x=a(41),w=function(e){function t(){return Object(l.a)(this,t),Object(n.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.pools,a=71582788*e.utility;return t.data=h.a.sortBy(t.data,"priority"),u.a.createElement(c.I18n,null,function(e){e.i18n;return u.a.createElement(d.K,{responsive:!0,className:"table-outline d-table d-sm-table"},u.a.createElement("thead",{className:"bg-light"},u.a.createElement("tr",null,u.a.createElement("th",null,u.a.createElement(c.Trans,{id:"Url"})),u.a.createElement("th",null,u.a.createElement(c.Trans,{id:"Type"})),u.a.createElement("th",null,u.a.createElement(c.Trans,{id:"Active"})),u.a.createElement("th",null,u.a.createElement(c.Trans,{id:"Status"})),u.a.createElement("th",null,u.a.createElement(c.Trans,{id:"Quota"})),u.a.createElement("th",null,u.a.createElement(c.Trans,{id:"Hashrate"})),u.a.createElement("th",null,"Last share"),u.a.createElement("th",null,"Acc"),u.a.createElement("th",null,"Rej"),u.a.createElement("th",null,"Dis"),u.a.createElement("th",null,"Get"),u.a.createElement("th",{className:"text-center"},u.a.createElement(c.Trans,{id:"Username"})))),u.a.createElement("tbody",{className:"bg-white"},t.data.map(function(e,l){return u.a.createElement("tr",{key:l},u.a.createElement("td",null,u.a.createElement("div",{className:"font-weight-bold text-muted"},e.url)),u.a.createElement("td",{className:""},u.a.createElement("h5",{className:"mb-0"},"jstefanop.a1"===e.user?u.a.createElement(d.b,{color:"warning"},"Donation"):u.a.createElement(d.b,{color:e.priority?"light":"primary"},e.priority?"Failover":"Main"))),u.a.createElement("td",{className:""},u.a.createElement("h5",{className:"mb-0"},u.a.createElement(d.b,{color:e.stratumActive?"success":"light"},e.stratumActive?"Active":"Inactive"))),u.a.createElement("td",null,u.a.createElement("h5",{className:"mb-0"},u.a.createElement(d.b,{color:"Alive"===e.status?"success":"danger"},e.status))),u.a.createElement("td",null,u.a.createElement("h6",{className:"mb-0"},e.quota?e.quota+"%":"No quota")),u.a.createElement("td",null,e.stratumActive?u.a.createElement("h6",{className:"mb-0 font-weight-bold"},u.a.createElement("i",{className:"fa fa-fire text-secondary"})," ",e.quota>0&&t.data&&t.data.length>1?Object(x.c)(a*e.quota/100,"h"):Object(x.c)(a,"h")):u.a.createElement("span",null,"Not active")),u.a.createElement("td",null,e.lastShareTime?b()().to(b()(e.lastShareTime,"X")):"Never"),u.a.createElement("td",null,e.accepted),u.a.createElement("td",null,e.rejected),u.a.createElement("td",null,e.discarded),u.a.createElement("td",null,e.getworks),u.a.createElement("td",{className:"text-center"},"jstefanop.a1"===e.user?u.a.createElement("i",{className:"fa fa-gift"}):e.user))})))})}}]),t}(o.Component),T=function(e){function t(){return Object(l.a)(this,t),Object(n.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.minerCheck,a=e.minerError,l=e.mcuError,r=e.mcu,n=e.miner,s=e.settings,m=n.stats.summary.data.deviceRejected,i=n.stats.summary.data.deviceHardware,o="success";i>=5&&i<=7.5?o="warning":i>7.5&&(o="danger");var E=b()().to(b()().subtract(n.stats.summary.data.elapsed,"seconds"),!0),g=h.a.find(n.stats.pools.data,function(e){return e.lastShareTime>0&&!0===e.stratumActive}),f="Not available",v=0,N="success",T=b()().format("X");g&&g.lastShareTime&&(f=b()().to(b()(g.lastShareTime,"X")),v=g.lastShareTime);var j=T-v;return j>=300&&j<=600?N="warning":j>600&&(N="danger"),t.online.status?a?u.a.createElement(p.b,{show:!0,bg:"bg-0",title:"It seems there is a problem to communicate with the miner, check error message.",centerTitle:!0,subtitle:"Wait at least 1 minute, if problem persists, try to restart the miner, check the settings or try to reboot the system.",error:a,centerSubtitle:!0,icon:"fa-exclamation-circle animated bounce",showBtn:!1,showProgress:!1}):u.a.createElement("div",{ref:"main"},l?u.a.createElement(d.a,{color:"warning"},"There is a problem fetching system stats (",u.a.createElement("b",null,l),")"):null,u.a.createElement("div",{className:"animated fadeIn"},u.a.createElement(d.H,null,u.a.createElement(d.m,{xs:"12",md:"6",xl:"3"},u.a.createElement(y,{bgColor:"bg-dark",icon:"fa fa-fire",value:Object(x.c)(71582788*n.stats.summary.data.workUtility,"h"),title:"Current hashrate",progressColor:"primary",progressValue:"100",secondaryTitle:"Pool",secondaryValue:g&&g.url?g.url:"Nothing active"})),u.a.createElement(d.m,{xs:"12",md:"6",xl:"3"},u.a.createElement(y,{bgColor:"bg-info",icon:"fa fa-thermometer-half",value:Object(x.b)(r.stats.minerTemperature,s.temperatureUnit,!0),title:"Miner temperature",progressColor:Object(x.f)(Object(x.b)(r.stats.minerTemperature,"c")),progressValue:Object(x.b)(r.stats.minerTemperature,s.temperatureUnit),secondaryTitle:"MCU temperature",secondaryValue:Object(x.b)(Number(r.stats.temperature)/1e3,s.temperatureUnit,!0)})),u.a.createElement(d.m,{xs:"12",md:"6",xl:"3"},u.a.createElement(y,{bgColor:"bg-gray-300",icon:"fa fa-exclamation-triangle",value:i.toFixed(1)+"%",title:"Hardware errors",progressColor:o,progressValue:10*i,secondaryTitle:"Rejected",secondaryValue:m})),u.a.createElement(d.m,{xs:"12",md:"6",xl:"3"},u.a.createElement(y,{bgColor:"bg-gray-200",icon:"fa fa-clock",value:E,title:"Miner uptime",progressColor:N,progressValue:100,secondaryTitle:"Last share",secondaryValue:f}))),u.a.createElement(d.H,null,u.a.createElement(d.m,{xs:"12",md:"6",xl:"3"},u.a.createElement(d.f,{className:"bg-light"},u.a.createElement(d.g,null,u.a.createElement("div",{className:"h4 m-0"},n.stats.summary.data.accepted),u.a.createElement("div",null,u.a.createElement(c.Trans,{id:"Accepted"}))))),u.a.createElement(d.m,{xs:"12",md:"6",xl:"3"},u.a.createElement(d.f,{className:"bg-light"},u.a.createElement(d.g,null,u.a.createElement("div",{className:"h4 m-0"},n.stats.summary.data.rejected),u.a.createElement("div",null,u.a.createElement(c.Trans,{id:"Rejected"}))))),u.a.createElement(d.m,{xs:"12",md:"6",xl:"3"},u.a.createElement(d.f,{className:"bg-light"},u.a.createElement(d.g,null,u.a.createElement("div",{className:"h4 m-0"},n.stats.summary.data.discarded),u.a.createElement("div",null,u.a.createElement(c.Trans,{id:"Discarded"}))))),u.a.createElement(d.m,{xs:"12",md:"6",xl:"3"},u.a.createElement(d.f,{className:"bg-light"},u.a.createElement(d.g,null,u.a.createElement("div",{className:"h4 m-0"},n.stats.summary.data.hardwareErrors),u.a.createElement("div",null,u.a.createElement(c.Trans,{id:"HW Errors"}))))))),u.a.createElement("div",{className:"animated fadeIn"},u.a.createElement(d.H,null,u.a.createElement(d.m,null,u.a.createElement("h4",null,u.a.createElement(c.Trans,{id:"Pools"})),u.a.createElement("div",null,u.a.createElement(w,{pools:n.stats.pools,utility:n.stats.summary.data.workUtility}))))),u.a.createElement("div",null,u.a.createElement("h4",null,u.a.createElement(c.Trans,{id:"Settings"})),u.a.createElement(d.H,null,u.a.createElement(d.m,{xs:"12",md:"6",xl:"3"},u.a.createElement(d.f,{className:"bg-light"},u.a.createElement(d.g,null,u.a.createElement("div",{className:"h1 text-muted float-right"},u.a.createElement("i",{className:Object(x.d)(s.minerMode)+" fa text-gray"})),u.a.createElement("div",{className:"h4 m-0"},s.minerMode||"Not set"),u.a.createElement("div",null,u.a.createElement(c.Trans,{id:"Miner mode"}))))),u.a.createElement(d.m,{xs:"12",md:"6",xl:"3"},u.a.createElement(d.f,{className:"bg-light"},u.a.createElement(d.g,null,u.a.createElement("div",{className:"h1 text-muted float-right"},u.a.createElement("i",{className:"fa fa-bolt text-gray"})),u.a.createElement("div",{className:"h4 m-0"},"custom"===s.minerMode?u.a.createElement("span",null,s.voltage||0," ",u.a.createElement("small",{className:"textmuted"},"mV")):u.a.createElement("span",null,"Auto")),u.a.createElement("div",null,u.a.createElement(c.Trans,{id:"Miner voltage"}))))),u.a.createElement(d.m,{xs:"12",md:"6",xl:"3"},u.a.createElement(d.f,{className:"bg-light"},u.a.createElement(d.g,null,u.a.createElement("div",{className:"h1 text-muted float-right"},u.a.createElement("i",{className:"fa fa-broadcast-tower text-gray"})),u.a.createElement("div",{className:"h4 m-0"},"custom"===s.minerMode?u.a.createElement("span",null,s.frequency||0," ",u.a.createElement("small",{className:"textmuted"},"MHz")):u.a.createElement("span",null,"Auto")),u.a.createElement("div",null,u.a.createElement(c.Trans,{id:"Miner frequency"}))))),u.a.createElement(d.m,{xs:"12",md:"6",xl:"3"},u.a.createElement(d.f,{className:"bg-light"},u.a.createElement(d.g,null,u.a.createElement("div",{className:"h1 text-muted float-right"},u.a.createElement("i",{className:"fa fa-wind text-gray"})),u.a.createElement("div",{className:"h4 m-0"},r.stats.minerFanSpeed," ",u.a.createElement("small",{className:"textmuted"},"RPM")),u.a.createElement("div",null,u.a.createElement(c.Trans,{id:"Fan speed"})))))))):u.a.createElement(p.b,{show:!0,bg:"bg-0",title:"Miner is offline",centerTitle:!0,subtitle:"Try to start it",error:!1,centerSubtitle:!0,icon:"fa-toggle-off animated bounce",showBtn:!0,btnTo:"/miner/start",btnText:"Start"})}}]),t}(o.Component),j=Object(i.connect)(function(e){return{loadingMcu:e.mcuStats.loading,mcu:e.mcuStats.data,mcuError:e.mcuStats.error,loadingMiner:e.minerStats.loading,miner:e.minerStats.data,minerError:e.minerStats.error,loadingOnline:e.minerOnline.loading,minerCheck:e.minerOnline.data,settings:e.settings}})(T);t.default=j}}]);
//# sourceMappingURL=3.a9551881.chunk.js.map