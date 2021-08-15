(this["webpackJsonpfull-stack-test"]=this["webpackJsonpfull-stack-test"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(10),r=a.n(c),i=a(30),l=a(31),o=a(38),u=a(37),j=a(138),h=a(139),b=a(140),g=a(133),d=a(134),m=a(143),p=a(141),O=a(142),f=a(42),v=a.n(f),x=a(145),y=a(144),C=a(6),S=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).typingTimer=null,e.state={searchText:""},e.filterText=function(t){var a=t.target.value;e.setState({searchText:a}),clearTimeout(e.typingTimer),e.typingTimer=setTimeout((function(){e.props.searchGames({input:a})}),800)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.searchText;return Object(C.jsx)("div",{className:"search",children:Object(C.jsx)(y.a,{fullWidth:!0,label:"Search",variant:"outlined",size:"small",placeholder:"Search by year, rank, publisher, name",type:"text",value:e,onChange:this.filterText})})}}]),a}(s.a.Component),k=a(34),G=a(43),z=a(44),P=a(135),T=a(136),B=a(137);var A=function(e){var t=e.item,a=e.updateGame,s=Object(n.useState)(t),c=Object(z.a)(s,2),r=c[0],i=c[1],l=Object(n.useState)(!1),o=Object(z.a)(l,2),u=o[0],j=o[1];Object(n.useEffect)((function(){i(t)}),[t]);var h=function(e,t){i(Object(G.a)(Object(G.a)({},r),{},Object(k.a)({},t,e)))},b=function(){j(!0)};return Object(C.jsxs)(g.a,{hover:!0,children:[Object(C.jsx)(d.a,{title:"click to edit",onClick:u?null:b,children:u?Object(C.jsx)(y.a,{value:r.Rank,size:"small",onChange:function(e){h(e.target.value,"Rank")}}):r.Rank}),Object(C.jsx)(d.a,{children:u?Object(C.jsx)(y.a,{value:r.Name,size:"small",onChange:function(e){h(e.target.value,"Name")}}):r.Name}),Object(C.jsx)(d.a,{children:u?Object(C.jsx)(y.a,{value:r.Platform,size:"small",onChange:function(e){h(e.target.value,"Platform")}}):r.Platform}),Object(C.jsx)(d.a,{title:"click to edit",onClick:u?null:b,children:u?Object(C.jsx)(y.a,{value:r.Year,size:"small",onChange:function(e){h(e.target.value,"Year")}}):r.Year}),Object(C.jsx)(d.a,{children:u?Object(C.jsx)(y.a,{value:r.Genre,size:"small",onChange:function(e){h(e.target.value,"Genre")}}):r.Genre}),Object(C.jsx)(d.a,{children:u?Object(C.jsx)(y.a,{value:r.Publisher,size:"small",onChange:function(e){h(e.target.value,"Publisher")}}):r.Publisher}),Object(C.jsx)(d.a,{children:u?Object(C.jsx)(y.a,{value:r.Global_Sales,size:"small",onChange:function(e){h(e.target.value,"Global_Sales")}}):r.Global_Sales}),Object(C.jsx)(d.a,{align:"right",children:u?Object(C.jsx)(P.a,{size:"small",color:"primary",onClick:function(){a(r),j(!1)},variant:"contained",children:"Save"}):Object(C.jsx)(T.a,{size:"small",color:"primary",onClick:b,variant:"contained",children:Object(C.jsx)(B.a,{fontSize:"small"})})})]})},N=(a(100),["Rank","Name","Platform","Year","Genre","Publisher","Global_Sales"]),w=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={games:[],loading:!0,page:1,total:0,sort:"Rank",sortBy:"ASC"},e.getGames=function(t){var a=e.state,n=a.sort,s=a.sortBy,c=a.input,r="/api/games?page="+a.page+"&sort="+n+"&sortBy="+s+"&q="+(c||"");v.a.get(r).then((function(t){var a=t.data;a&&a.success&&e.setState({games:a.data.rows,total:a.data.count,loading:!1})}))},e.handlePageChange=function(t,a){e.setState({page:a,loading:!0},(function(){e.getGames({page:a,input:e.state.input?e.state.input:""})}))},e.updateGame=function(t){v.a.post("/api/game/update",t).then((function(t){var a=t.data;if(a&&a.success){var n=e.state,s=n.page,c=n.input;e.getGames({page:s,input:c})}}))},e.handleSort=function(t){var a=e.state,n=a.sortBy;a.input,a.page;e.setState({sort:t,sortBy:"ASC"===n?"DESC":"ASC",loading:!0}),e.getGames()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getGames({input:"",page:1})}},{key:"render",value:function(){var e=this,t=this.state,a=t.loading,s=t.games,c=t.total,r=t.sort,i=t.sortBy,l=parseInt(c/9);return c%9>0&&(l+=1),Object(C.jsxs)("div",{children:[Object(C.jsx)(S,{searchGames:this.getGames}),a&&Object(C.jsx)(j.a,{color:"secondary"}),Object(C.jsxs)(h.a,{"aria-label":"simple table",children:[Object(C.jsx)(b.a,{children:Object(C.jsxs)(g.a,{children:[N&&N.length&&N.map((function(t,a){return Object(C.jsxs)(d.a,{onClick:function(){e.handleSort(t)},children:[t,r===t&&Object(C.jsx)(n.Fragment,{children:"DESC"===i?Object(C.jsx)(p.a,{}):Object(C.jsx)(O.a,{})})]},a)})),Object(C.jsx)(d.a,{align:"right",children:"Action"})]})}),Object(C.jsx)(m.a,{children:s&&s.length&&s.map((function(t,a){return Object(C.jsx)(A,{item:t,updateGame:e.updateGame},a)}))})]}),Object(C.jsx)(x.a,{onChange:this.handlePageChange,className:"pagination",count:l,variant:"outlined",shape:"rounded"})]})}}]),a}(s.a.Component);r.a.render(Object(C.jsx)(s.a.StrictMode,{children:Object(C.jsx)(w,{})}),document.getElementById("root"))}},[[101,1,2]]]);
//# sourceMappingURL=main.2212406b.chunk.js.map