(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(e,t,n){e.exports=n(218)},216:function(e,t,n){},218:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(16),c=n.n(o),s=n(6),i=n(223),u=n(222),l=n(224),m=n(116),d=n.n(m),p=n(220),h=n(3),E=n.n(h),f=n(48),v=n.n(f),b=function(e){var t=e.id,n=e.description,a=e.amount,o=e.createdAt;return r.a.createElement(p.a,{className:"list-item",to:"/edit/".concat(t)},r.a.createElement("div",null,r.a.createElement("h3",{className:"list-item__title"},n),r.a.createElement("span",{className:"list-item__sub-title"},E()(o).format("MMMM Do, YYYY"))),r.a.createElement("h3",{className:"list-item__data"},v()(a/100).format("$0,0.00")))},g=function(e,t){var n=t.text,a=t.sortBy,r=t.startDate,o=t.endDate;return e.filter(function(e){var t=E()(e.createdAt),a=!r||r.isSameOrBefore(t,"day"),c=!o||o.isSameOrAfter(t,"day"),s=e.description.toLowerCase().includes(n.toLowerCase());return a&&c&&s}).sort(function(e,t){return"date"===a?e.createdAt<t.createdAt?1:-1:"amount"===a?e.amount<t.amount?1:-1:void 0})},x=Object(s.b)(function(e){return{expenses:g(e.expenses,e.filters)}})(function(e){return r.a.createElement("div",{className:"content-container"},r.a.createElement("div",{className:"list-header"},r.a.createElement("div",{className:"show-for-mobile"},"Expenses"),r.a.createElement("div",{className:"show-for-desktop"},"Expense"),r.a.createElement("div",{className:"show-for-desktop"},"Amount")),r.a.createElement("div",{className:"list-body"},0===e.expenses.length?r.a.createElement("div",{className:"list-item list-item--message"},r.a.createElement("span",null,"No expenses")):e.expenses.map(function(e){return r.a.createElement(b,Object.assign({key:e.id},e))})))}),O=n(18),N=n(19),_=n(21),y=n(20),S=n(22),D=n(49),A=function(e){function t(){var e,n;Object(O.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(_.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={calendarFocused:null},n.onDatesChange=function(e){var t=e.startDate,a=e.endDate;n.props.setStartDate(t),n.props.setEndDate(a)},n.onFocusChange=function(e){n.setState(function(){return{calendarFocused:e}})},n.onTextChange=function(e){n.props.setTextFilter(e.target.value)},n.onSortChange=function(e){"date"===e.target.value?n.props.sortByDate():"amount"===e.target.value&&n.props.sortByAmount()},n}return Object(S.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"content-container"},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group__item"},r.a.createElement("input",{type:"text",className:"text-input",placeholder:"Search expenses",value:this.props.filters.text,onChange:this.onTextChange})),r.a.createElement("div",{className:"input-group__item"},r.a.createElement("select",{className:"select",value:this.props.filters.sortBy,onChange:this.onSortChange},r.a.createElement("option",{value:"date"},"Date"),r.a.createElement("option",{value:"amount"},"Amount"))),r.a.createElement("div",{className:"input-group__item"},r.a.createElement(D.DateRangePicker,{startDate:this.props.filters.startDate,endDate:this.props.filters.endDate,onDatesChange:this.onDatesChange,focusedInput:this.state.calendarFocused,onFocusChange:this.onFocusChange,showClearDates:!0,numberOfMonths:1,isOutsideRange:function(){return!1}}))))}}]),t}(r.a.Component),j=Object(s.b)(function(e){return{filters:e.filters}},function(e){return{setTextFilter:function(t){return e(function(){return{type:"SET_TEXT_FILTER",text:arguments.length>0&&void 0!==arguments[0]?arguments[0]:""}}(t))},sortByDate:function(){return e({type:"SORT_BY_DATE"})},sortByAmount:function(){return e({type:"SORT_BY_AMOUNT"})},setStartDate:function(t){return e(function(e){return{type:"SET_START_DATE",startDate:e}}(t))},setEndDate:function(t){return e(function(e){return{type:"SET_END_DATE",endDate:e}}(t))}}})(A),T=Object(s.b)(function(e){var t,n=g(e.expenses,e.filters);return{expenseCount:n.length,expensesTotal:(t=n,t.map(function(e){return e.amount}).reduce(function(e,t){return e+t},0))}})(function(e){var t=e.expenseCount,n=e.expensesTotal,a=1===t?"expense":"expenses",o=v()(n/100).format("$0,0.00");return r.a.createElement("div",{className:"page-header"},r.a.createElement("div",{className:"content-container"},r.a.createElement("h1",{className:"page-header__title"},"Viewing ",r.a.createElement("span",null,t)," ",a," totalling ",r.a.createElement("span",null,o)),r.a.createElement("div",{className:"page-header__actions"},r.a.createElement(p.a,{className:"button",to:"/create"},"Add Expense"))))}),C=function(){return r.a.createElement("div",null,r.a.createElement(T,null),r.a.createElement(j,null),r.a.createElement(x,null))},w=(n(186),n(199),function(e){function t(e){var n;return Object(O.a)(this,t),(n=Object(_.a)(this,Object(y.a)(t).call(this,e))).onDescriptionChange=function(e){var t=e.target.value;n.setState(function(){return{description:t}})},n.onNoteChange=function(e){var t=e.target.value;n.setState(function(){return{note:t}})},n.onAmountChange=function(e){var t=e.target.value;t&&!t.match(/^\d{1,}(\.\d{0,2})?$/)||n.setState(function(){return{amount:t}})},n.onDateChange=function(e){e&&n.setState(function(){return{createdAt:e}})},n.onFocusChange=function(e){var t=e.focused;n.setState(function(){return{calendarFocused:t}})},n.onSubmit=function(e){e.preventDefault(),n.state.description&&n.state.amount?(n.setState(function(){return{error:""}}),n.props.onSubmit({description:n.state.description,amount:100*parseFloat(n.state.amount,10),createdAt:n.state.createdAt.valueOf(),note:n.state.note})):n.setState(function(){return{error:"Please provide description and amount."}})},n.state={description:e.expense?e.expense.description:"",note:e.expense?e.expense.note:"",amount:e.expense?(e.expense.amount/100).toString():"",createdAt:e.expense?E()(e.expense.createdAt):E()(),calendarFocused:!1,error:""},n}return Object(S.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"form",onSubmit:this.onSubmit},this.state.error&&r.a.createElement("p",{className:"form__error"},this.state.error),r.a.createElement("input",{type:"text",placeholder:"Description",autoFocus:!0,className:"text-input",value:this.state.description,onChange:this.onDescriptionChange}),r.a.createElement("input",{type:"text",placeholder:"Amount",className:"text-input",value:this.state.amount,onChange:this.onAmountChange}),r.a.createElement(D.SingleDatePicker,{date:this.state.createdAt,onDateChange:this.onDateChange,focused:this.state.calendarFocused,onFocusChange:this.onFocusChange,numberOfMonths:1,isOutsideRange:function(){return!1}}),r.a.createElement("textarea",{placeholder:"Add a note for your expense (optional)",className:"textarea",value:this.state.note,onChange:this.onNoteChange}),r.a.createElement("div",null,r.a.createElement("button",{className:"button"},"Save Expense")))}}]),t}(r.a.Component)),k=n(14),R=n(41);R.initializeApp({apiKey:"AIzaSyA3-FsSb4z7mqBern4xIO_GfOu36LMhnrw",authDomain:"expensify-cbd4a.firebaseapp.com",databaseURL:"https://expensify-cbd4a.firebaseio.com",projectId:"expensify-cbd4a",storageBucket:"expensify-cbd4a.appspot.com",messagingSenderId:"105835213432"});var B=R.database(),F=new R.auth.GoogleAuthProvider,L=function(e){function t(){var e,n;Object(O.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(_.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){n.props.startAddExpense(e),n.props.history.push("/")},n}return Object(S.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"page-header"},r.a.createElement("div",{className:"content-container"},r.a.createElement("h1",{className:"page-header__title"},"Add Expense"))),r.a.createElement("div",{className:"content-container"},r.a.createElement(w,{onSubmit:this.onSubmit})))}}]),t}(r.a.Component),I=Object(s.b)(void 0,function(e){return{startAddExpense:function(t){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t,n){var a=n().auth.uid,r=e.description,o=void 0===r?"":r,c=e.note,s=void 0===c?"":c,i=e.amount,u=void 0===i?0:i,l=e.createdAt,m={description:o,note:s,amount:u,createdAt:void 0===l?0:l};return B.ref("users/".concat(a,"/expenses")).push(m).then(function(e){t(function(e){return{type:"ADD_EXPENSE",expense:e}}(Object(k.a)({id:e.key},m)))})}}(t))}}})(L),P=function(e){function t(){var e,n;Object(O.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(_.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){n.props.startEditExpense(n.props.expense.id,e),n.props.history.push("/")},n.onRemove=function(){n.props.startRemoveExpense({id:n.props.expense.id}),n.props.history.push("/")},n}return Object(S.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"page-header"},r.a.createElement("div",{className:"content-container"},r.a.createElement("h1",{className:"page-header__title"},"Edit Expense"))),r.a.createElement("div",{className:"content-container"},r.a.createElement(w,{expense:this.props.expense,onSubmit:this.onSubmit}),r.a.createElement("button",{className:"button button--secondary",onClick:this.onRemove},"Remove Expense")))}}]),t}(r.a.Component),M=Object(s.b)(function(e,t){return{expense:e.expenses.find(function(e){return e.id===t.match.params.id})}},function(e,t){return{startEditExpense:function(t,n){return e(function(e,t){return function(n,a){var r=a().auth.uid;return B.ref("users/".concat(r,"/expenses/").concat(e)).update(t).then(function(){n(function(e,t){return{type:"EDIT_EXPENSE",id:e,updates:t}}(e,t))})}}(t,n))},startRemoveExpense:function(t){return e(function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).id;return function(t,n){var a=n().auth.uid;return B.ref("users/".concat(a,"/expenses/").concat(e)).remove().then(function(){t(function(){return{type:"REMOVE_EXPENSE",id:(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).id}}({id:e}))})}}(t))}}})(P),X=function(){return r.a.createElement("div",null,"404! - ",r.a.createElement(p.a,{to:"/"},"Go Home"))},G=Object(s.b)(void 0,function(e){return{startLogin:function(){return e(function(){return R.auth().signInWithPopup(F)})}}})(function(e){var t=e.startLogin;return r.a.createElement("div",{className:"box-layout"},r.a.createElement("div",{className:"box-layout__box"},r.a.createElement("h1",{className:"box-layout__title"},"Expensify"),r.a.createElement("p",null,"It's time to get your expenses under control."),r.a.createElement("button",{className:"button",onClick:t},"Login with Google")))}),Y=n(52),U=n(221),V=Object(s.b)(void 0,function(e){return{startLogout:function(){return e(function(){return R.auth().signOut()})}}})(function(e){var t=e.startLogout;return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"content-container"},r.a.createElement("div",{className:"header__content"},r.a.createElement(p.a,{className:"header__title",to:"/dashboard"},r.a.createElement("h1",null,"Expensify")),r.a.createElement("button",{className:"button button--link",onClick:t},"Logout"))))}),$=Object(s.b)(function(e){return{isAuthenticated:!!e.auth.uid}})(function(e){var t=e.isAuthenticated,n=e.component,a=Object(Y.a)(e,["isAuthenticated","component"]);return r.a.createElement(l.a,Object.assign({},a,{component:function(e){return t?r.a.createElement("div",null,r.a.createElement(V,null),r.a.createElement(n,e)):r.a.createElement(U.a,{to:"/"})}}))}),z=Object(s.b)(function(e){return{isAuthenticated:!!e.auth.uid}})(function(e){var t=e.isAuthenticated,n=e.component,a=Object(Y.a)(e,["isAuthenticated","component"]);return r.a.createElement(l.a,Object.assign({},a,{component:function(e){return t?r.a.createElement(U.a,{to:"/dashboard"}):r.a.createElement(n,e)}}))}),W=d()(),J=function(){return r.a.createElement(i.a,{history:W},r.a.createElement("div",null,r.a.createElement(u.a,null,r.a.createElement(z,{path:"/",component:G,exact:!0}),r.a.createElement($,{path:"/dashboard",component:C,exact:!0}),r.a.createElement($,{path:"/create",component:I}),r.a.createElement($,{path:"/edit/:id",component:M}),r.a.createElement(l.a,{component:X}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(216);var q=function(){return r.a.createElement("div",{className:"loader"},r.a.createElement("img",{className:"loader__image",src:"/images/loader.gif"}))},H=n(25),K=n(117),Q=n(118),Z=[],ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_EXPENSE":return Object(Q.a)(e).concat([t.expense]);case"REMOVE_EXPENSE":return e.filter(function(e){return e.id!==t.id});case"EDIT_EXPENSE":return e.map(function(e){return e.id===t.id?Object(k.a)({},e,t.updates):e});case"SET_EXPENSES":return t.expenses;default:return e}},te={text:"",sortBy:"date",startDate:E()().startOf("month"),endDate:E()().endOf("month")},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TEXT_FILTER":return Object(k.a)({},e,{text:t.text});case"SORT_BY_AMOUNT":return Object(k.a)({},e,{sortBy:"amount"});case"SORT_BY_DATE":return Object(k.a)({},e,{sortBy:"date"});case"SET_START_DATE":return Object(k.a)({},e,{startDate:t.startDate});case"SET_END_DATE":return Object(k.a)({},e,{endDate:t.endDate});default:return e}},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return{uid:t.uid};case"LOGOUT":return{};default:return e}},re=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||H.d,oe=Object(H.e)(Object(H.c)({expenses:ee,filters:ne,auth:ae}),re(Object(H.a)(K.a))),ce=r.a.createElement(s.a,{store:oe},r.a.createElement(J,null)),se=!1,ie=function(){se||(c.a.render(ce,document.getElementById("root")),se=!0)};c.a.render(r.a.createElement(q,null),document.getElementById("root")),R.auth().onAuthStateChanged(function(e){e?(oe.dispatch({type:"LOGIN",uid:e.uid}),oe.dispatch(function(e,t){var n=t().auth.uid;return B.ref("users/".concat(n,"/expenses")).once("value").then(function(t){var n=[];t.forEach(function(e){n.push(Object(k.a)({id:e.key},e.val()))}),e(function(e){return{type:"SET_EXPENSES",expenses:e}}(n))})}).then(function(){ie(),"/"===W.location.pathname&&W.push("/dashboard")})):(oe.dispatch({type:"LOGOUT"}),ie(),W.push("/"))}),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[119,2,1]]]);
//# sourceMappingURL=main.3a7cfb4d.chunk.js.map