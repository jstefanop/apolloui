(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{409:function(e,a,t){"use strict";t.r(a);var l=t(21),n=t(7),r=t(8),c=t(11),m=t(9),s=t(10),i=t(13),o=t(16),d=t(1),u=t.n(d),E=t(3),f=t(17),p=(t(394),t(405)),v=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).voltages={"-10":"-10\xb0C",0:u.a.createElement("strong",null,"0\xb0C"),26:"26\xb0C",37:"37\xb0C",50:"50\xb0C",100:{style:{color:"red"},label:u.a.createElement("strong",null,"100\xb0C")}},t}return Object(s.a)(a,e),Object(r.a)(a,[{key:"log",value:function(e){console.log(e)}},{key:"render",value:function(){var e=this,a=this.props.minerMode;return u.a.createElement(i.I18n,null,function(t){t.i18n;return u.a.createElement("div",{className:"animated fadeIn"},u.a.createElement(E.F,null,u.a.createElement(E.l,{lg:"12"},u.a.createElement(E.e,null,u.a.createElement(E.i,null,u.a.createElement(E.k,null,u.a.createElement(i.Trans,{id:"Miner"})),u.a.createElement(E.j,{className:"text-muted"},u.a.createElement(i.Trans,{id:"Manage miner specific configurations"}))),u.a.createElement(E.f,null,u.a.createElement(E.o,null,u.a.createElement(E.F,{form:!0},u.a.createElement(E.l,{md:4},u.a.createElement("div",null,u.a.createElement("div",{className:"clearfix"},u.a.createElement(f.n,{className:"float-left mr-2",variant:"pill",label:!0,color:"primary",checked:"eco"===a,size:""}),u.a.createElement("h4",null,u.a.createElement("i",{className:"fa fa-leaf mr-2 initialism text-secondary"}),u.a.createElement(i.Trans,{id:"ECO mode"}))),u.a.createElement("div",null,u.a.createElement("p",{className:"text-muted "},u.a.createElement(i.Trans,{id:"In ECO mode your miner will consume less power (about <0>1.0W/MHs</0>) but its hashrate will be slower. This mode is recommende if you want have less noise and less possible to overheat your miner.",components:[u.a.createElement("b",null)]}))))),u.a.createElement(E.l,{md:4},u.a.createElement("div",null,u.a.createElement("div",{className:"clearfix"},u.a.createElement(f.n,{className:"float-left mr-2",variant:"pill",label:!0,color:"success",checked:"turbo"===a,size:""}),u.a.createElement("h4",null,u.a.createElement("i",{className:"fa fa-rocket mr-2 initialism text-secondary"}),u.a.createElement(i.Trans,{id:"TURBO mode"}))),u.a.createElement("div",null,u.a.createElement("p",{className:"text-muted "},u.a.createElement(i.Trans,{id:"In Turbo mode your miner will consume more power (about <0>1.4W/MHs</0>) and so its hashrate will be faster. This mode is good to gain the maximum profit but you need to take care of possible overheat.",components:[u.a.createElement("b",null)]}))))),u.a.createElement(E.l,{md:4},u.a.createElement("div",null,u.a.createElement("div",{className:"clearfix"},u.a.createElement(f.n,{className:"float-left mr-2",variant:"pill",label:!0,color:"warning",checked:"custom"===a,size:""}),u.a.createElement("h4",null,u.a.createElement("i",{className:"fa fa-diagnoses mr-2 initialism text-secondary"}),u.a.createElement(i.Trans,{id:"Custom mode"}))),u.a.createElement("div",null,u.a.createElement("p",{className:"text-muted "},u.a.createElement(i.Trans,{id:"In custom mode you can control frequency and voltage of your miner for your specific needs. This mode is for expert users and is not recommended if you don't know what you are doing. You could harm your miner."}))))))))))),"custom"===a&&u.a.createElement(E.F,null,u.a.createElement(E.l,{lg:"12"},u.a.createElement(E.e,null,u.a.createElement(E.i,null,u.a.createElement(E.k,null,u.a.createElement(i.Trans,{id:"Custom mode"})),u.a.createElement(E.j,{className:"text-muted"},u.a.createElement(i.Trans,{id:"Personalise your miner configurations"}))),u.a.createElement(E.f,null,u.a.createElement(E.o,null,u.a.createElement(E.F,{form:!0},u.a.createElement(E.l,{md:4},u.a.createElement("div",null,u.a.createElement("div",{className:"clearfix"},u.a.createElement("h4",null,u.a.createElement(i.Trans,{id:"Voltage"}))),u.a.createElement("div",null,u.a.createElement("p",{className:"text-muted "},u.a.createElement(i.Trans,{id:"You can set your miner custom voltage or <0>reset</0> to default value.",components:[u.a.createElement("a",{href:""})]})),u.a.createElement(E.e,{className:"border-0"},u.a.createElement(E.f,null,u.a.createElement(p.a,{min:-10,marks:e.voltages,step:null,onChange:e.log,defaultValue:20})))))),u.a.createElement(E.l,{md:4},u.a.createElement("div",null,u.a.createElement("div",{className:"clearfix"},u.a.createElement("h4",null,u.a.createElement(i.Trans,{id:"Frequency"}))),u.a.createElement("div",null,u.a.createElement("p",{className:"text-muted "},u.a.createElement(i.Trans,{id:"You can set your miner custom frequency or <0>reset</0> to default value.",components:[u.a.createElement("a",{href:""})]})),u.a.createElement(E.e,{className:"border-0"},u.a.createElement(E.f,null,u.a.createElement(p.a,{min:-10,marks:e.voltages,step:null,onChange:e.log,defaultValue:20})))))),u.a.createElement(E.l,{md:4},u.a.createElement("div",null,u.a.createElement("div",{className:"clearfix"},u.a.createElement(f.n,{className:"float-left mr-2",variant:"pill",label:!0,color:"success",checked:!0}),u.a.createElement("h4",null,u.a.createElement(i.Trans,{id:"Auto adjust fan"}))),u.a.createElement("div",null,u.a.createElement("p",{className:"text-muted "},u.a.createElement(i.Trans,{id:"Keep fan speed at auto mode or turn of it to manually set the fan speed."})),u.a.createElement(E.e,{className:"border-0"},u.a.createElement(E.f,null,u.a.createElement(p.a,{min:-10,marks:e.voltages,step:null,disabled:!0,onChange:e.log,defaultValue:20})))))))))))))})}}]),a}(d.Component),h=function(e){function a(){return Object(n.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return u.a.createElement(i.I18n,null,function(e){e.i18n;return u.a.createElement("div",{className:"animated fadeIn"},u.a.createElement(E.F,null,u.a.createElement(E.l,{lg:"12"},u.a.createElement(E.e,null,u.a.createElement(E.i,null,u.a.createElement(E.k,null,u.a.createElement(i.Trans,{id:"Wifi"})),u.a.createElement(E.j,{className:"text-muted"},u.a.createElement(i.Trans,{id:"Connect your system controller to a Wifi instead using ethernet"}))),u.a.createElement(E.f,null,u.a.createElement(E.o,null,u.a.createElement(E.F,{form:!0},u.a.createElement(E.l,{md:4},u.a.createElement("div",null,u.a.createElement("div",{className:"clearfix"},u.a.createElement("h4",null,u.a.createElement(E.d,{className:"float-left mr-2 text-uppercase",color:"primary",size:"sm"},u.a.createElement(i.Trans,{id:"Scan"})),u.a.createElement(i.Trans,{id:"Look for Wifi"}))),u.a.createElement("div",{className:"mt-1"},u.a.createElement("p",{className:"text-muted "},u.a.createElement(i.Trans,{id:"Clicking the button your system will scan for available wifi networks. Be aware that connecting to a Wifi network you will need to connect to the new Wifi IP address you have to find in your LAN."}))))),u.a.createElement(E.l,{md:8},u.a.createElement("div",null,u.a.createElement("div",{className:"clearfix"},u.a.createElement("h4",null,u.a.createElement("i",{className:"fa fa-wifi mr-2 initialism text-secondary"}),u.a.createElement(i.Trans,{id:"Wifi networks"}))),u.a.createElement("div",{className:""},u.a.createElement("p",{className:"text-muted "},u.a.createElement(i.Trans,{id:"There are no wifi networks available yet. Please click the scan button to look at them."}))))))))))))})}}]),a}(d.Component),b=function(e){function a(){return Object(n.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return u.a.createElement(i.I18n,null,function(e){e.i18n;return u.a.createElement("div",{className:"animated fadeIn"},u.a.createElement(E.g,null,u.a.createElement(E.e,null,u.a.createElement(E.i,null,u.a.createElement(E.k,null,u.a.createElement(i.Trans,{id:"Change lockscreen password"})),u.a.createElement(E.j,{className:"text-muted"},u.a.createElement(i.Trans,{id:"Change the password to access the dashboard"}))),u.a.createElement(E.f,null,u.a.createElement("p",{className:"help-block form-text text-muted"},u.a.createElement(i.Trans,{id:"Changing the password will lock the dashboard. You will need to use the new password to unlock it."})),u.a.createElement(E.o,null,u.a.createElement(E.F,{form:!0},u.a.createElement(E.l,{md:6},u.a.createElement(E.p,null,u.a.createElement(E.u,{for:"password"},u.a.createElement(i.Trans,{id:"Password"})),u.a.createElement(E.q,{type:"password",name:"password",id:"password",placeholder:"",bsSize:"lg"}))),u.a.createElement(E.l,{md:6},u.a.createElement(E.p,null,u.a.createElement(E.u,{for:"repeatPassword"},u.a.createElement(i.Trans,{id:"Repeat password"})),u.a.createElement(E.q,{type:"password",name:"repeatPassword",id:"repeatPassword",placeholder:"",bsSize:"lg"}))),u.a.createElement(E.l,{md:12},u.a.createElement(E.d,{className:"mr-2 text-uppercase",color:"primary",size:"sm"},u.a.createElement(i.Trans,{id:"Change"}))))))),u.a.createElement(E.e,null,u.a.createElement(E.i,null,u.a.createElement(E.k,null,u.a.createElement(i.Trans,{id:"Layout options"})),u.a.createElement(E.j,{className:"text-muted"},u.a.createElement(i.Trans,{id:"Manage dashboard specific configurations"}))),u.a.createElement(E.f,null,u.a.createElement(E.o,null,u.a.createElement(E.F,null,u.a.createElement(E.l,{lg:12,xl:6},u.a.createElement(E.v,{flush:!0},u.a.createElement(E.w,null,u.a.createElement("div",{className:"clearfix"},u.a.createElement(f.n,{className:"float-left mr-2",variant:"pill",label:!0,color:"success",defaultChecked:!0,size:""}),u.a.createElement("div",null,u.a.createElement(i.Trans,{id:"Left Sidebar visibility"}))),u.a.createElement("div",{className:"mt-1 small text-muted"},u.a.createElement(i.Trans,{id:"Set left sidebar default visibility"}))),u.a.createElement(E.w,null,u.a.createElement("div",{className:"clearfix"},u.a.createElement(f.n,{className:"float-left mr-2",variant:"pill",label:!0,color:"success",defaultChecked:!0,size:""}),u.a.createElement("div",null,u.a.createElement(i.Trans,{id:"Extended sidebar"}))),u.a.createElement("div",{className:"mt-1 small text-muted"},u.a.createElement(i.Trans,{id:"Keep left sidebar extended or only icons"}))),u.a.createElement(E.w,null,u.a.createElement("div",{className:"clearfix"},u.a.createElement(f.n,{className:"float-left mr-2",variant:"pill",dataOn:"\xb0C",dataOff:"\xb0F",label:!0,color:"success",defaultChecked:!0,size:""}),u.a.createElement("div",null,u.a.createElement(i.Trans,{id:"Temperature unit"}))),u.a.createElement("div",{className:"mt-1 small text-muted"},u.a.createElement(i.Trans,{id:"Set it to Celsius or Fahrenheit"}))))),u.a.createElement(E.l,{lg:12,xl:6},u.a.createElement(E.v,{flush:!0},u.a.createElement(E.w,null,u.a.createElement("div",{className:"clearfix"},u.a.createElement(f.n,{className:"float-left mr-2",variant:"pill",label:!0,color:"success",size:""}),u.a.createElement("div",null,u.a.createElement(i.Trans,{id:"Right sidebar visibility"}))),u.a.createElement("div",{className:"mt-1 small text-muted"},u.a.createElement(i.Trans,{id:"Set right sidebar default visibility"}))))))))),u.a.createElement(E.e,null,u.a.createElement(E.i,null,u.a.createElement(E.k,null,u.a.createElement(i.Trans,{id:"Backup & Reset"})),u.a.createElement(E.j,{className:"text-muted"},u.a.createElement(i.Trans,{id:"Use this tools to backup, restore and reset configurations"}))),u.a.createElement(E.f,null,u.a.createElement(E.o,null,u.a.createElement(E.F,{form:!0},u.a.createElement(E.l,{md:12},u.a.createElement(E.v,{flush:!0},u.a.createElement(E.w,null,u.a.createElement("div",{className:""},u.a.createElement(E.d,{className:"mr-2 text-uppercase",color:"primary",size:"sm"},u.a.createElement(i.Trans,{id:"Backup"})),u.a.createElement("div",{className:"mt-1 small text-muted"},u.a.createElement(i.Trans,{id:"Create a backup file of dashboard, miner and pools configurations"})))),u.a.createElement(E.w,null,u.a.createElement("div",{className:""},u.a.createElement(E.d,{className:"mr-2 text-uppercase",color:"primary",size:"sm"},u.a.createElement(i.Trans,{id:"Restore"})),u.a.createElement("div",{className:"mt-1 small text-muted"},u.a.createElement(i.Trans,{id:"Restore all configurations from a backup file"})))),u.a.createElement(E.w,null,u.a.createElement("div",{className:""},u.a.createElement(E.d,{className:"mr-2 text-uppercase",color:"danger",size:"sm"},u.a.createElement(i.Trans,{id:"Reset"})),u.a.createElement("div",{className:"mt-1 small text-muted"},u.a.createElement(i.Trans,{id:"Reset all configurations to factory default"}))))))))))))})}}]),a}(d.Component),N=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).state={oldSettings:t.props.settings,settings:Object(l.a)({},t.props.settings)},t}return Object(s.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this.state.settings,a=e.minerMode,t=e.voltage,l=e.frequency,n=e.fan;return u.a.createElement("div",{className:"animated fadeIn"},u.a.createElement(E.F,null,u.a.createElement(E.l,{lg:"12"},u.a.createElement(E.e,null,u.a.createElement(E.i,{className:"bg-dark"},u.a.createElement(E.d,{size:"sm",className:"btn-success text-uppercase mr-2"},u.a.createElement(i.Trans,{id:"Save"})),u.a.createElement(E.d,{size:"sm",className:"btn-warning text-uppercase"},u.a.createElement(i.Trans,{id:"Save & Restart"})),u.a.createElement("span",{className:"ml-2"},u.a.createElement(i.Trans,{id:"You need to restart your miner to apply changes."})))))),u.a.createElement(v,{minerMode:a,voltage:t,frequency:l,fan:n}),u.a.createElement(h,null),u.a.createElement(b,null),u.a.createElement("p",null))}}]),a}(d.Component),g=Object(o.connect)(function(e){return{settings:e.settings}})(N);a.default=g}}]);
//# sourceMappingURL=3.b43c20f1.chunk.js.map