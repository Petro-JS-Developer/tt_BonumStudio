(this.webpackJsonptt_BonumStudio=this.webpackJsonptt_BonumStudio||[]).push([[0],{64:function(t,e,i){},65:function(t,e,i){},67:function(t,e,i){},69:function(t,e,i){"use strict";i.r(e);var n,s=i(35),c=i(3),l=i.n(c),a=i(48),o=i.n(a),r=i(20),d=i(1),u=(i(64),i(53)),j=i(52),b=(i(65),i(8)),m=function(t){var e=t.data;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("ul",{className:"listPosts",children:e.map((function(t){var e=t.id,i=t.title,n=t.body;return Object(b.jsxs)("li",{className:"listPosts__item",children:[Object(b.jsx)("div",{className:"listPosts__item_id",children:e}),Object(b.jsx)("div",{className:"listPosts__item_title",children:i}),Object(b.jsx)("div",{className:"listPosts__item_body",children:n})]},e)}))})})},h=(i(67),Object(r.gql)(n||(n=Object(j.a)(["\n  query getPosts($limit: Int) {\n    posts(options: {paginate:{limit:$limit}}) {\n    data {\n      id\n      title\n      body\n    }\n  }\n  }\n"])))),v=function(){var t=Object(c.useState)(10),e=Object(u.a)(t,2),i=e[0],n=e[1],s=Object(r.useQuery)(h,{variables:{offset:0,limit:i}}),l=s.loading,a=s.data,o=s.fetchMore,d=l?[]:null===a||void 0===a?void 0:a.posts.data,j=function(){var t=null===d||void 0===d?void 0:d.length;o({variables:{offset:t,limit:10}}).then((function(e){n(Number("".concat(t))+e.data.posts.data.length)}))};return Object(b.jsxs)("div",{className:"app",onScroll:function(t){!function(t,e){var i=t.currentTarget;i.scrollTop+i.clientHeight+300>=i.scrollHeight&&e()}(t,j)},children:[Object(b.jsx)("h1",{className:"blockName",children:"All posts"}),l&&Object(b.jsx)("div",{children:"Loading..."}),!l&&Object(b.jsx)(m,{data:d||[]})]})},f=new r.ApolloClient({uri:"https://graphqlzero.almansi.me/api",cache:new r.InMemoryCache({typePolicies:{Query:{fields:{feed:Object(s.a)(Object(s.a)({},Object(d.I)()),{},{read:function(t,e){var i=e.args,n=i.offset,s=void 0===n?0:n,c=i.limit,l=void 0===c?null===t||void 0===t?void 0:t.length:c;return t&&t.slice(s,s+l)}})}}}})});o.a.render(Object(b.jsx)(l.a.StrictMode,{children:Object(b.jsx)(r.ApolloProvider,{client:f,children:Object(b.jsx)(v,{})})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.c8585e21.chunk.js.map