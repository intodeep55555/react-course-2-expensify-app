(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,n){e.exports=n(196)},194:function(e,t,n){},196:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(14),c=n.n(o),i=n(13),s=n(199),u=n(200),l=n(197),d=n(107),p=function(e){var t=e.id,n=e.description,a=e.amount,o=e.createdAt;return r.a.createElement("div",null,r.a.createElement(d.a,{to:"/edit/".concat(t)},r.a.createElement("h3",null,n)),r.a.createElement("p",null,a,"-",o))},m=n(2),h=n.n(m),E=Object(i.b)(function(e){return{expenses:function(e,t){var n=t.text,a=t.sortBy,r=t.startDate,o=t.endDate;return e.filter(function(e){var t=h()(e.createdAt),a=!r||r.isSameOrBefore(t,"day"),c=!o||o.isSameOrAfter(t,"day"),i=e.description.toLowerCase().includes(n.toLowerCase());return a&&c&&i}).sort(function(e,t){return"date"===a?e.createdAt<t.createdAt?1:-1:"amount"===a?e.amount<t.amount?1:-1:void 0})}(e.expenses,e.filters)}})(function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Expense List"),e.expenses.map(function(e){return r.a.createElement(p,Object.assign({key:e.id},e))}))}),f=n(38),v=n(39),D=n(44),g=n(40),O=n(45),b=n(41),S=function(e){return{type:"SET_START_DATE",startDate:e}},x=function(e){return{type:"SET_END_DATE",endDate:e}},_=function(e){function t(){var e,n;Object(f.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(D.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={calendarFocused:null},n.onDatesChange=function(e){var t=e.startDate,a=e.endDate;n.props.dispatch(S(t)),n.props.dispatch(x(a))},n.onFocusChange=function(e){n.setState(function(){return{calendarFocused:e}})},n}return Object(O.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("input",{type:"text",value:this.props.filters.text,onChange:function(t){e.props.dispatch(function(){return{type:"SET_TEXT_FILTER",text:arguments.length>0&&void 0!==arguments[0]?arguments[0]:""}}(t.target.value))}}),r.a.createElement("select",{value:this.props.filters.sortBy,onChange:function(t){"date"===t.target.value?e.props.dispatch({type:"SORT_BY_DATE"}):"amount"===t.target.value&&e.props.dispatch({type:"SORT_BY_AMOUNT"})}},r.a.createElement("option",{value:"date"},"Date"),r.a.createElement("option",{value:"amount"},"Amount")),r.a.createElement(b.DateRangePicker,{startDate:this.props.filters.startDate,endDate:this.props.filters.endDate,onDatesChange:this.onDatesChange,focusedInput:this.state.calendarFocused,onFocusChange:this.onFocusChange,showClearDates:!0,numberOfMonth:1,isOutsideRange:function(){return!1}}))}}]),t}(r.a.Component),T=Object(i.b)(function(e){return{filters:e.filters}})(_),y=function(){return r.a.createElement("div",null,r.a.createElement(T,null),r.a.createElement(E,null))},A=(n(176),n(189),function(e){function t(e){var n;return Object(f.a)(this,t),(n=Object(D.a)(this,Object(g.a)(t).call(this,e))).onDescriptionChange=function(e){var t=e.target.value;n.setState(function(){return{description:t}})},n.onNoteChange=function(e){var t=e.target.value;n.setState(function(){return{note:t}})},n.onAmountChange=function(e){var t=e.target.value;t&&!t.match(/^\d{1,}(\.\d{0,2})?$/)||n.setState(function(){return{amount:t}})},n.onDateChange=function(e){e&&n.setState(function(){return{createdAt:e}})},n.onFocusChange=function(e){var t=e.focused;n.setState(function(){return{calendarFocused:t}})},n.onSubmit=function(e){e.preventDefault(),n.state.description&&n.state.amount?(n.setState(function(){return{error:""}}),n.props.onSubmit({description:n.state.description,amount:100*parseFloat(n.state.amount,10),createdAt:n.state.createdAt.valueOf(),note:n.state.note})):n.setState(function(){return{error:"Please provide description and amount."}})},n.state={description:e.expense?e.expense.description:"",note:e.expense?e.expense.note:"",amount:e.expense?(e.expense.amount/100).toString():"",createdAt:e.expense?h()(e.expense.createdAt):h()(),calendarFocused:!1,error:""},n}return Object(O.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.state.error&&r.a.createElement("p",null,this.state.error),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{type:"text",placeholder:"Description",autoFocus:!0,value:this.state.description,onChange:this.onDescriptionChange}),r.a.createElement("input",{type:"text",placeholder:"Amount",value:this.state.amount,onChange:this.onAmountChange}),r.a.createElement(b.SingleDatePicker,{date:this.state.createdAt,onDateChange:this.onDateChange,focused:this.state.calendarFocused,onFocusChange:this.onFocusChange,numberOfMonths:1,isOutsideRange:function(){return!1}}),r.a.createElement("textarea",{placeholder:"Add a note for your expense (optional)",value:this.state.note,onChange:this.onNoteChange}),r.a.createElement("button",null,"Add Expense")))}}]),t}(r.a.Component)),C=n(108),j=n.n(C),w=Object(i.b)()(function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Add Expense"),r.a.createElement(A,{onSubmit:function(t){e.dispatch(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.description,n=void 0===t?"":t,a=e.note,r=void 0===a?"":a,o=e.amount,c=void 0===o?0:o,i=e.createdAt,s=void 0===i?0:i;return{type:"ADD_EXPENSE",expense:{id:j()(),description:n,note:r,amount:c,createdAt:s}}}(t)),e.history.push("/")}}))}),N=Object(i.b)(function(e,t){return{expense:e.expenses.find(function(e){return e.id===t.match.params.id})}})(function(e){return r.a.createElement("div",null,r.a.createElement(A,{expense:e.expense,onSubmit:function(t){e.dispatch({type:"EDIT_EXPENSE",id:e.expense.id,updates:t}),e.history.push("/"),console.log("updated",t)}}),r.a.createElement("button",{onClick:function(){e.dispatch(function(){return{type:"REMOVE_EXPENSE",id:(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).id}}({id:e.expense.id})),e.history.push("/")}},"Remove"))}),F=function(){return r.a.createElement("div",null,"This is from my help component")},R=function(){return r.a.createElement("div",null,"404! - ",r.a.createElement(d.a,{to:"/"},"Go Home"))},B=n(198),X=function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"Expensify"),r.a.createElement(B.a,{to:"/",activeClassName:"is-active",exact:!0},"Dashboard"),r.a.createElement(B.a,{to:"/create",activeClassName:"is-active"},"Create Expense"),r.a.createElement(B.a,{to:"/help",activeClassName:"is-active"},"Help"))},k=function(){return r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement(X,null),r.a.createElement(u.a,null,r.a.createElement(l.a,{path:"/",component:y,exact:!0}),r.a.createElement(l.a,{path:"/create",component:w}),r.a.createElement(l.a,{path:"/edit/:id",component:N}),r.a.createElement(l.a,{path:"/help",component:F}),r.a.createElement(l.a,{component:R}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(194);var P=n(30),I=n(15),L=n(111),M=[],U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_EXPENSE":return Object(L.a)(e).concat([t.expense]);case"REMOVE_EXPENSE":return e.filter(function(e){return e.id!==t.id});case"EDIT_EXPENSE":return e.map(function(e){return e.id===t.id?Object(I.a)({},e,t.updates):e});default:return e}},V={text:"",sortBy:"date",startDate:h()().startOf("month"),endDate:h()().endOf("month")},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TEXT_FILTER":return Object(I.a)({},e,{text:t.text});case"SORT_BY_AMOUNT":return Object(I.a)({},e,{sortBy:"amount"});case"SORT_BY_DATE":return Object(I.a)({},e,{sortBy:"date"});case"SET_START_DATE":return Object(I.a)({},e,{startDate:t.startDate});case"SET_END_DATE":return Object(I.a)({},e,{endDate:t.endDate});default:return e}},H=Object(P.c)(Object(P.b)({expenses:U,filters:Y}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),J=r.a.createElement(i.a,{store:H},r.a.createElement(k,null));c.a.render(J,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[112,2,1]]]);
//# sourceMappingURL=main.7fdd0831.chunk.js.map