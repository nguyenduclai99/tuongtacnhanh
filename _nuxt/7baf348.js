(window.webpackJsonp=window.webpackJsonp||[]).push([[48,4],{434:function(t,e,n){"use strict";n.r(e);var r={props:{breadcrumbs:{type:Object,default:function(){}}}},c=n(10),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-header row"},[n("div",{staticClass:"content-header-left col-md-9 col-12 mb-2"},[n("div",{staticClass:"row breadcrumbs-top"},[n("div",{staticClass:"col-12"},[n("h2",{staticClass:"content-header-title float-left mb-0"},[t._v(t._s(t.breadcrumbs.title))]),t._v(" "),n("div",{staticClass:"breadcrumb-wrapper"},[n("ol",{staticClass:"breadcrumb"},[n("li",{staticClass:"breadcrumb-item"},[n("NuxtLink",{attrs:{to:t.breadcrumbs.links[0]}},[t._v(t._s(t.breadcrumbs.items[0]))])],1),t._v(" "),n("li",{staticClass:"breadcrumb-item"},[n("NuxtLink",{attrs:{to:t.breadcrumbs.links[1]}},[t._v(t._s(t.breadcrumbs.items[1]))])],1)])])])])]),t._v(" "),n("div",{staticClass:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none"})])}),[],!1,null,null,null);e.default=component.exports},478:function(t,e,n){"use strict";n.r(e);var r=n(7),c=(n(31),n(28),n(40),n(30),n(83),n(434)),o=n(3),l={layout:"social",components:{Breadcrumb:c.default},head:{title:"Thanh toán"+o.a.siteName,htmlAttrs:{lang:"en"},meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width,initial-scale=1.0,user-scalable=0,minimal-ui"},{hid:"description",name:"description",content:o.a.meta.payment.description},{hid:"og:description",name:"og:description",content:o.a.meta.payment.description},{hid:"keywords",name:"keywords",content:o.a.meta.payment.keywords},{hid:"dc.keywords",name:"dc.keywords",content:o.a.meta.payment.keywords},{hid:"news_keywords",name:"news_keywords",content:o.a.meta.payment.keywords},{hid:"og:site_name",name:"og:site_name",content:o.a.siteName2},{hid:"dc.title",name:"dc.title",content:o.a.title},{hid:"og:title",name:"og:title",content:o.a.title},{name:"format-detection",content:"telephone=no"}]},data:function(){return{payments:[],user:this.$store.state.user,breadcrumbs:{title:"Nạp tiền",items:["Trang chủ","Nạp tiền"],links:["/home","/topup"]}}},methods:{getPayment:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$http.get("/v2/get-payment");case 3:n=e.sent,t.payments=n.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.$notify.error({title:"Error",message:e.t0.response.data.message});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},copy:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=e,navigator.clipboard.writeText(t).then((function(){r.$notify.success({title:"success",message:"Copy thành công "+t})}),(function(t){r.$notify.error({title:"Error",message:t})}));case 2:case"end":return n.stop()}}),n)})))()}},watch:{"$store.state.user":function(){this.user=this.$store.state.user}},mounted:function(){this.getPayment(),feather.replace({width:14,height:14})}},d=n(10),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-wrapper"},[n("Breadcrumb",{attrs:{breadcrumbs:t.breadcrumbs}}),t._v(" "),n("div",{staticClass:"content-body"},[n("section",{attrs:{id:"multiple-column-form"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-7 col-12"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-body"},[t.payments?n("div",{},[t._m(0),t._v(" "),n("div",{staticClass:"card card-congratulations"},[n("div",{staticClass:"card-body text-center"},[n("div",{staticClass:"text-left"},[t.user?n("h3",{staticClass:"card-text text-white text-center"},[n("strong",[t._v("dichvu "+t._s(t.user.username))]),t._v(" "),n("span",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.copy("dichvu "+t.user.username)}}},[n("i",{staticClass:"fa-regular fa-copy"})])]):t._e()])])]),t._v(" "),t._l(t.payments,(function(e,r){return n("div",{key:r,staticClass:"card card-congratulations"},[n("div",{staticClass:"card-body text-center"},[n("div",{staticClass:"text-left"},[n("p",{staticClass:"card-text text-center"},[t._v(" Ngân hàng: "),n("strong",[t._v(t._s(e.name))])]),t._v(" "),n("p",{staticClass:"card-text text-center"},[t._v("\n                                                Chủ tài khoản: "),n("strong",[t._v(t._s(e.full_name))]),t._v(" "),n("span",{staticStyle:{cursor:"pointer"},on:{click:function(n){return t.copy(""+e.full_name)}}},[n("i",{staticClass:"fa-regular fa-copy"})])]),t._v(" "),n("p",{staticClass:"card-text text-center"},[t._v("\n                                                Số tài khoản: "),n("strong",[t._v(t._s(e.stk))]),t._v(" "),n("span",{staticStyle:{cursor:"pointer"},on:{click:function(n){return t.copy(""+e.stk)}}},[n("i",{staticClass:"fa-regular fa-copy"})])]),t._v(" "),n("p",{staticClass:"card-text text-center"},[t._v("\n                                                Chi nhánh: "),n("strong",[t._v(t._s(e.branch))]),t._v(" "),n("span",{staticStyle:{cursor:"pointer"},on:{click:function(n){return t.copy(""+e.branch)}}},[n("i",{staticClass:"fa-regular fa-copy"})])]),t._v(" "),n("p",{staticClass:"card-text text-center"},[n("img",{attrs:{src:"https://img.vietqr.io/image/"+e.name+"-"+e.stk+"-print.png?accountName="+e.full_name+"&addInfo=dichvu%20"+t.user.username,width:"300px",height:"auto",alt:""}})])])])])}))],2):t._e()])])]),t._v(" "),t._m(1)])])])],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[n("h4",{staticClass:"mb-1 font-weight-bold"},[t._v("NỘI DUNG CHUYỂN TIỀN")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-5 col-12"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title"},[t._v("Ghi Chú:")]),t._v(" "),n("p",{staticClass:"card-text"},[t._v("- Copy thông tin bên cạnh và chuyển tiền đúng nội dung, Hoặc chụp quét mã QR website cung cấp. Nạp tối thiểu 20.000 vnđ.")]),t._v(" "),n("p",{staticClass:"card-text"},[t._v("- Hệ thống auto nạp tiền: ACB.")]),t._v(" "),n("p",{staticClass:"card-text"},[t._v("- Vui lòng chuyển khoản đúng nội dung. Hệ thống cộng tự động sau vài phút.")]),t._v(" "),n("p",{staticClass:"card-text"},[t._v("- Nếu nội dung sai bạn sẽ bị trừ phí 10% không quá 20.000 vnđ")]),t._v(" "),n("p",{staticClass:"card-text"},[t._v("- Điều kiện lên đại lý: 1 giao dịch nạp 1 triệu hoặc tổng nạp 2 triệu")]),t._v(" "),n("p",{staticClass:"card-text"},[t._v("- Điều kiện lên nhà phân phối: 1 giao dịch nạp 5 triệu hoặc tổng nạp 20 triệu")])])])])}],!1,null,null,null);e.default=component.exports}}]);
//# sourceMappingURL=7baf348.js.map