(window.webpackJsonp=window.webpackJsonp||[]).push([[25,4],{433:function(t,e,n){"use strict";n.r(e);var r={props:{breadcrumbs:{type:Object,default:function(){}}}},o=n(11),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-header row"},[n("div",{staticClass:"content-header-left col-md-9 col-12 mb-2"},[n("div",{staticClass:"row breadcrumbs-top"},[n("div",{staticClass:"col-12"},[n("h2",{staticClass:"content-header-title float-left mb-0"},[t._v(t._s(t.breadcrumbs.title))]),t._v(" "),n("div",{staticClass:"breadcrumb-wrapper"},[n("ol",{staticClass:"breadcrumb"},[n("li",{staticClass:"breadcrumb-item"},[n("NuxtLink",{attrs:{to:t.breadcrumbs.links[0]}},[t._v(t._s(t.breadcrumbs.items[0]))])],1),t._v(" "),n("li",{staticClass:"breadcrumb-item"},[n("NuxtLink",{attrs:{to:t.breadcrumbs.links[1]}},[t._v(t._s(t.breadcrumbs.items[1]))])],1)])])])])]),t._v(" "),n("div",{staticClass:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none"})])}),[],!1,null,null,null);e.default=component.exports},471:function(t,e,n){"use strict";n.r(e);var r=n(7),o=n(25),c=(n(31),n(28),n(40),n(79),n(433)),l=n(3),d={layout:"social",components:{Breadcrumb:c.default},head:{title:"Nhật ký hoạt động"+l.a.siteName,htmlAttrs:{lang:"en"},meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width,initial-scale=1.0,user-scalable=0,minimal-ui"},{hid:"description",name:"description",content:l.a.description},{hid:"og:description",name:"og:description",content:l.a.description},{hid:"keywords",name:"keywords",content:l.a.keyword},{hid:"dc.keywords",name:"dc.keywords",content:l.a.keyword},{hid:"news_keywords",name:"news_keywords",content:l.a.keyword},{hid:"og:site_name",name:"og:site_name",content:l.a.siteName2},{hid:"dc.title",name:"dc.title",content:l.a.title},{hid:"og:title",name:"og:title",content:l.a.title},{name:"format-detection",content:"telephone=no"}]},data:function(){var t;return t={histories:[],user:this.$store.state.user,action:"",key:"",limit:"10",loading:!1},Object(o.a)(t,"action",""),Object(o.a)(t,"key",""),Object(o.a)(t,"breadcrumbs",{title:"Nhật ký hoạt động",items:["Trang chủ","Nhật ký hoạt động"],links:["/home","/histories"]}),t},methods:{history:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.loading=!0,e.next=4,t.$http.get("/v2/log?action=".concat(t.action,"&key=").concat(t.key,"&limit=").concat(t.limit));case 4:n=e.sent,t.histories=n.data.data,t.loading=!1,e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),t.loading=!1,t.$notify.error({title:"Error",message:e.t0.response.data.message});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()}},watch:{"$store.state.user":function(){this.user=this.$store.state.user}},mounted:function(){this.history()}},v=n(11),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"content-wrapper"},[n("Breadcrumb",{attrs:{breadcrumbs:t.breadcrumbs}}),t._v(" "),n("div",{staticClass:"content-body"},[n("section",{attrs:{id:"basic-horizontal-layouts"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"card"},[t._m(0),t._v(" "),n("div",{staticClass:" card-body needs-validation"},[n("div",{staticClass:"form-row"},[n("div",{staticClass:"col-md-4 col-12 mb-3"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.action,expression:"action"}],staticClass:"form-control",attrs:{"data-plugin":"customselect",name:"action"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.action=e.target.multiple?n:n[0]}}},[n("option",{attrs:{selected:"",value:""}},[t._v(" Tất cả ")]),t._v(" "),n("option",{attrs:{value:"buy"}},[t._v(" Tạo đơn ")]),t._v(" "),n("option",{attrs:{value:"add_coin"}},[t._v(" Nạp tiền ")]),t._v(" "),n("option",{attrs:{value:"buy_error"}},[t._v(" Tạo đơn lỗi ")]),t._v(" "),n("option",{attrs:{value:"remove"}},[t._v(" Hủy đơn ")]),t._v(" "),n("option",{attrs:{value:"deduction"}},[t._v(" Trừ tiền ")])])]),t._v(" "),n("div",{staticClass:"col-md-4 col-12 mb-3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.key,expression:"key"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Mã đơn"},domProps:{value:t.key},on:{input:function(e){e.target.composing||(t.key=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"col-md-4 col-12 mb-3"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.limit,expression:"limit"}],staticClass:"form-control",attrs:{name:"limit"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.limit=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"10"}},[t._v(" 10 Nhật ký\n                                        ")]),t._v(" "),n("option",{attrs:{value:"50"}},[t._v(" 50 Nhật ký\n                                        ")]),t._v(" "),n("option",{attrs:{value:"100"}},[t._v(" 100 Nhật ký\n                                        ")]),t._v(" "),n("option",{attrs:{value:"1000"}},[t._v(" 1000 Nhật ký\n                                        ")]),t._v(" "),n("option",{attrs:{value:"all"}},[t._v(" Tất cả\n                                        ")])])])]),t._v(" "),n("button",{staticClass:"btn btn-primary waves-effect waves-float waves-light",on:{click:t.history}},[t._v("Tìm kiếm")])]),t._v(" "),n("div",{staticClass:"card-body table-responsive"},[n("table",{staticClass:"table table-striped"},[t._m(1),t._v(" "),n("tbody",t._l(t.histories,(function(e,r){return n("tr",{key:r},[n("td",[t._v(t._s(r+1))]),t._v(" "),n("td",[t._v(t._s(e.orders_id))]),t._v(" "),n("td",[t._v(t._s(e.username))]),t._v(" "),n("td",{staticStyle:{"white-space":"nowrap"}},[t._v(t._s(new Date(e.created_at).toLocaleString()))]),t._v(" "),n("td",{staticStyle:{"white-space":"nowrap"}},[t._v(t._s(e.type_str))]),t._v(" "),n("td",{staticStyle:{"white-space":"nowrap"}},[n("span",{staticClass:"badge badge-pill badge-light-primary"},[t._v(t._s(new Intl.NumberFormat("de-DE").format(e.old_coin)))]),t._v("\n                                            "+t._s(e.action_coin)+" "),n("span",{staticClass:"badge badge-pill badge-light-info"},[t._v(t._s(new Intl.NumberFormat("de-DE").format(e.coin)))]),t._v("\n                                            = "),n("span",{staticClass:"badge badge-pill badge-light-success"},[t._v(t._s(new Intl.NumberFormat("de-DE").format(e.new_coin)))])]),t._v(" "),n("td",[t._v(t._s(e.description))])])})),0)])])])])])])])],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-header"},[n("h4",{staticClass:"card-title"},[t._v("Nhật ký hoạt động")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",{staticClass:"thead-light"},[n("tr",[n("th",[t._v("#")]),t._v(" "),n("th",[t._v("Mã đơn")]),t._v(" "),n("th",[t._v("Username")]),t._v(" "),n("th",[t._v("Ngày tạo")]),t._v(" "),n("th",[t._v("Hành động")]),t._v(" "),n("th",[t._v("Tiền")]),t._v(" "),n("th",[t._v("Diễn tả")])])])}],!1,null,null,null);e.default=component.exports}}]);
//# sourceMappingURL=01f76a4.js.map