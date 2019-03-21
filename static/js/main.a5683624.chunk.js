(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,a){e.exports=a(58)},41:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),o=a.n(c),i=(a(41),a(2)),s=a(3),l=a(5),u=a(4),m=a(6),d={POPULAR:"popular",SEARCH:"search"},p={IS_FOCUS:"is-focus",IS_FIXED:"is-fixed",IS_SMALL:"is-small"},v={LOAD_MOVIES:"LOAD_MOVIES",LOAD_MOVIE:"LOAD_MOVIE",LOAD_CREDITS:"LOAD_CREDITS",LOAD_GENRES:"LOAD_GENRES",LOAD_NEXT_PAGE:"LOAD_NEXT_PAGE",SET_QUERY:"SET_QUERY",START:"START",SUCCESS:"SUCCESS",ERR:"ERR"};function h(e){var t="logo";return e.isSmall&&(t+=" ".concat(p.IS_SMALL)),r.a.createElement("div",{className:t},r.a.createElement("a",{href:e.link||"#",title:e.title,target:e.isTargetBlank?"_blank":"_self",className:"logo__link",rel:"noopener noreferrer"},r.a.createElement("span",{className:"logo__main"},"rho"),r.a.createElement("span",{className:"logo__text"},e.text)))}var E=a(7),f="https://api.themoviedb.org",g="ac710db081029f2383b7c329b25a753a",_="".concat(f,"/3/movie/popular?api_key=").concat(g),b="".concat(f,"/3/search/movie?api_key=").concat(g),y="https://image.tmdb.org/t/p/w500",O="".concat(f,"/3/genre/list?api_key=").concat(g),j="".concat(f,"/3/movie/"),S={BLOG:"https://iryna-zgn.github.io/vue.js-blog",MOVIES:"https://iryna-zgn.github.io/react.js-movie-db"},k=[{name:"github",url:"https://github.com/iryna-zgn",isActive:!0},{name:"instagram",url:"#",isActive:!1},{name:"facebook",url:"#",isActive:!1}];function N(e,t,a){return e===d.POPULAR?"".concat(_,"&page=").concat(a):"".concat(b,"&query=").concat(t,"&page=").concat(a)}function A(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.POPULAR,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return{type:v.LOAD_MOVIES,payload:{mode:e,query:t},callAPI:N(e,t,a)}}function C(){return{type:v.LOAD_GENRES,callAPI:O}}var M=a(15),R=a(11);function w(){return r.a.createElement("div",{className:"no-results"},r.a.createElement("div",{className:"no-results__msg"},"No results :("),r.a.createElement(R.b,{to:"/",className:"no-results__link"},"Popular movies"))}var D=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={isFocus:!1},a.handleChange=function(e){return a.props.setQuery(e.target.value)},a.handleSubmit=function(e){var t=a.props,n=t.query,r=t.lastQuery;e.preventDefault(),n&&n!==r&&(a.props.loadMovies(d.SEARCH,n),a.props.history.push("/search/".concat(n)))},a.addFocus=function(){a.setState({isFocus:!0})},a.removeFocus=function(){a.setState({isFocus:!1})},a.renderMsg=function(){if(!a.props.total_results)return r.a.createElement(w,null)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e="search__field";return this.state.isFocus&&(e+=" ".concat(p.IS_FOCUS)),r.a.createElement("div",{className:"search"},r.a.createElement("form",{className:"search__form",onSubmit:this.handleSubmit},r.a.createElement("div",{className:e},r.a.createElement("input",{value:this.props.query,placeholder:"Search for a movie",type:"text",onChange:this.handleChange,onFocus:this.addFocus,onBlur:this.removeFocus})),r.a.createElement("button",{className:"search__btn icon-search"})),this.renderMsg())}}]),t}(n.Component),L=Object(M.e)(Object(E.b)(function(e){return{query:e.movies.query,lastQuery:e.movies.lastQuery,total_results:e.movies.total_results}},{loadMovies:A,setQuery:function(e){return{type:v.SET_QUERY,payload:{query:e}}}})(D)),I=function(){return k.map(function(e){return e.isActive?r.a.createElement("li",{key:e.name,className:"soc-links__item"},r.a.createElement("a",{href:e.url,title:e.name,className:"soc-links__link",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"soc-links__icon icon-".concat(e.name)}))):null})};function T(){return r.a.createElement("ul",{className:"soc-links"},I())}function P(){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header__main"},r.a.createElement(h,{text:"movies",link:S.MOVIES}),r.a.createElement(L,null)),r.a.createElement("div",{className:"header__links"},r.a.createElement(T,null),r.a.createElement(h,{link:S.BLOG,text:"blog",isSmall:!0,isTargetBlank:!0,title:"rho blog"})))}var q=a(16),G=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).renderFilledStars=function(){var e=a.getCount(a.props.evaluation),t=new Array(5).fill("");return t.fill("-filled",0,e),t.map(function(e,t){return r.a.createElement("div",{key:t,className:"evaluation__stars-item"},r.a.createElement("span",{className:"icon-star".concat(e)}))})},a.getCount=function(e){return Math.round(e/2)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.props.evaluation?r.a.createElement("div",{className:"evaluation"},r.a.createElement("div",{className:"evaluation__stars"},this.renderFilledStars()),r.a.createElement("span",null,this.props.count)):null}}]),t}(n.Component),U=a(17);function F(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:U.a;return Object.keys(e).reduce(function(t,a){return t.set(a,e[a])},new t)}function B(e){return e?"".concat(y).concat(e):"static/images/rho_light.jpg"}function x(e){if(e)return e.reduce(function(e,t,a){return e+(a?", ":"")+t.name},"")}function V(e){if(e)return e.slice(0,4)}function Q(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(e)return t+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function X(e){if(e){var t=Math.floor(e/60),a=e%60;return(t?"".concat(t," h"):"")+(a?" ".concat(a," min"):"")}}var H=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).getGenres=function(e){var t=a.props.genres,n=new Set;return e.forEach(function(e){t.forEach(function(t){t.id===e&&n.add(t)})}),Object(q.a)(n)},a.renderGenres=function(e){return x(a.getGenres(e))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.movie;return r.a.createElement("div",{className:"movie"},r.a.createElement(R.b,{to:"/movie/".concat(e.id),className:"movie__img",style:{backgroundImage:"url(".concat(B(e.poster_path),")")}},r.a.createElement("img",{src:"static/images/rho_light.jpg",alt:"",className:"u-dummy"})),r.a.createElement("div",null,r.a.createElement(R.b,{to:"/movie/".concat(e.id),className:"movie__title t2"},e.title),r.a.createElement("div",{className:"movie__prop"},this.renderGenres(e.genre_ids)),r.a.createElement("div",{className:"movie__prop"},V(e.release_date)),r.a.createElement(G,{evaluation:e.vote_average,count:e.vote_count}),r.a.createElement("div",{className:"movie__desc",style:{WebkitBoxOrient:"vertical"}},e.overview),r.a.createElement(R.b,{to:"/movie/".concat(e.id),className:"movie__link"},"Read more")))}}]),t}(n.Component);function W(e){var t="preloader";return e.isFixed&&(t+=" ".concat(p.IS_FIXED)),r.a.createElement("div",{className:t},r.a.createElement("div",{className:"preloader__inner"}))}var Y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleClickMore=function(){var e=a.props,t=e.page,n=e.mode,r=e.query;a.props.loadNextPage(n,r,t+1)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"load-more"},this.props.loadingMore?r.a.createElement("div",{className:"load-more__preloader"},r.a.createElement(W,null)):r.a.createElement("div",{onClick:this.handleClickMore,className:"load-more__link"},"Load more"))}}]),t}(n.Component),z=Object(E.b)(function(e){return{page:e.movies.page,loadingMore:e.movies.loadingMore,mode:e.movies.mode,query:e.movies.query}},{loadNextPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.POPULAR,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return{type:v.LOAD_NEXT_PAGE,payload:{page:a},callAPI:N(e,t,a)}}})(Y),J=a(26),$=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).renderItems=function(){var e=a.props,t=e.movies,n=e.genres;return t.map(function(e){return r.a.createElement(J.CSSTransition,{key:e.id,classNames:"fade",timeout:{appear:300,enter:300,exit:300},appear:!0},r.a.createElement("div",{className:"movies-list__item"},r.a.createElement(H,{movie:e,genres:n})))})},a.renderLoadMore=function(){var e=a.props,t=e.pages,n=e.page;if(t>1&&n!==t)return r.a.createElement(z,null)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"movies-list"},r.a.createElement(J.TransitionGroup,null,this.renderItems())),this.renderLoadMore())}}]),t}(n.Component),K=Object(E.b)(function(e){return{movies:e.movies.results,genres:e.genres.genres,pages:e.movies.total_pages,page:e.movies.page}})($),Z=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(K,null)}},{key:"componentDidMount",value:function(){this.props.loadMovies(),this.props.loadGenres()}}]),t}(n.Component),ee=Object(E.b)(null,{loadMovies:A,loadGenres:C})(Z),te=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(K,{query:this.props.query})}},{key:"componentDidMount",value:function(){this.props.loadMovies(d.SEARCH,this.props.query),this.props.loadGenres()}},{key:"componentWillReceiveProps",value:function(e){e.query!==this.props.query&&this.props.loadMovies(d.SEARCH,e.query)}}]),t}(n.Component),ae=Object(E.b)(null,{loadMovies:A,loadGenres:C})(te),ne=function(e){return e?e.slice(0,6).map(function(e){return r.a.createElement("div",{key:e.cast_id,className:"cast__item"},r.a.createElement("div",{className:"cast__img",style:{backgroundImage:"url(".concat(B(e.profile_path),")")}},r.a.createElement("img",{src:"static/images/rho_light.jpg",alt:"",className:"u-dummy"})),r.a.createElement("div",{className:"t4"},e.name),r.a.createElement("div",{className:"cast__desc"},e.character))}):null};function re(e){return e.cast.length?r.a.createElement("div",{className:"cast"},r.a.createElement("h2",{className:"t2"},"Cast"),r.a.createElement("div",{className:"cast__list"},ne(e.cast))):null}var ce=function(e){return e?e.backdrops.map(function(e){return r.a.createElement("img",{key:e.file_path,src:B(e.file_path),alt:""})}):null};function oe(e){return e.images.backdrops.length?r.a.createElement("div",{className:"backdrops"},r.a.createElement("h2",{className:"t2"},"Backdrops"),r.a.createElement("div",{className:"backdrops__gallery u-scrollbar-x"},ce(e.images))):null}var ie=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).getDetails=function(e){return[{key:"Genre",val:x(e.genres)},{key:"Runtime",val:X(e.runtime)},{key:"Original language",val:e.original_language},{key:"Release year",val:V(e.release_date)},{key:"Budget",val:Q(e.budget,"$")}]},a.getCrew=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=new Map;return["Director","Producer","Screenplay","Writer","Music","Original Music Composer"].forEach(function(a){e.forEach(function(e){e.job===a&&t.set(e.job,t.has(e.job)?"".concat(t.get(e.job),", ").concat(e.name):e.name)})}),Object(q.a)(t.entries()).map(function(e){return{key:e[0],val:e[1]}})},a.getDataByName=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[{key:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",val:x(e)}]},a.renderRows=function(e){return e.map(function(e,t){return e.val?r.a.createElement("tr",{key:e.key+t},r.a.createElement("td",null,e.key),r.a.createElement("td",null,e.val)):null})},a.renderHomeLink=function(e){return e?r.a.createElement("a",{href:e,className:"movie-details__link",target:"_blank",rel:"noopener noreferrer"},"homepage"):null},a.renderBackdrops=function(e){return a.props.movie.images?r.a.createElement(oe,{images:e}):null},a.renderCast=function(e){return a.props.credits.cast?r.a.createElement(re,{cast:e}):null},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.movie,a=e.credits;return r.a.createElement("div",{className:"movie-details"},r.a.createElement("div",{className:"movie-details__parts"},r.a.createElement("div",{className:"movie-details__const"},r.a.createElement("img",{src:B(t.poster_path),alt:""})),r.a.createElement("div",{className:"movie-details__var"},r.a.createElement("h1",null,t.title),r.a.createElement(G,{evaluation:t.vote_average,count:t.vote_count}),r.a.createElement("table",{className:"movie-details__props"},r.a.createElement("tbody",null,this.renderRows(this.getDetails(t)),this.renderRows(this.getDataByName(t.production_countries,"Country")),this.renderRows(this.getDataByName(t.production_companies,"Production")),this.renderRows(this.getCrew(a.crew)))))),r.a.createElement("div",{className:"movie-details__desc"},r.a.createElement("p",null,t.overview),this.renderHomeLink(t.homepage)),this.renderCast(a.cast),this.renderBackdrops(t.images))}}]),t}(n.Component),se=Object(E.b)(function(e){return{movie:e.movies.movie,credits:e.movies.credits}})(ie),le=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(se,{id:this.props.id})}},{key:"componentDidMount",value:function(){this.props.loadMovie(this.props.id),this.props.loadCredits(this.props.id)}}]),t}(n.Component),ue=Object(E.b)(null,{loadMovie:function(e){return{type:v.LOAD_MOVIE,callAPI:"".concat(j).concat(e,"?api_key=").concat(g,"&append_to_response=images")}},loadCredits:function(e){return{type:v.LOAD_CREDITS,callAPI:"".concat(j).concat(e,"/credits?api_key=").concat(g)}}})(le);function me(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"footer__copyright"},"\xa9 ",(new Date).getFullYear()," Rho"))}var de=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).getSearch=function(e){var t=e.match.params.query;return r.a.createElement(ae,{query:t})},a.getMovie=function(e){var t=e.match.params.id;return r.a.createElement(ue,{id:t})},a.renderPreloader=function(){if(a.props.loading)return r.a.createElement(W,{isFixed:!0})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",null,r.a.createElement(P,null),r.a.createElement(M.c,null,r.a.createElement(M.a,{exact:!0,path:"/",component:ee}),r.a.createElement(M.a,{path:"/search/:query",render:this.getSearch}),r.a.createElement(M.a,{path:"/movie/:id",render:this.getMovie}))),r.a.createElement(me,null),this.renderPreloader())}}]),t}(n.Component),pe=Object(E.b)(function(e){return{query:e.movies.query,loading:e.movies.loading}})(de);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ve=a(14),he=Object(U.b)({results:[],total_pages:1,page:1,total_results:0,loading:!1,loadingMore:!1,mode:d.POPULAR,query:"",lastQuery:"",movie:{},credits:{}}),Ee=Object(U.b)({genres:[]}),fe=Object(ve.c)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new he,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload,r=t.response;switch(a){case v.LOAD_MOVIES+v.START:return e.set("loading",!0);case v.LOAD_MOVIES+v.SUCCESS:return F(r,he).set("query",n.query).set("lastQuery",n.query).set("mode",n.mode).set("loading",!1);case v.LOAD_NEXT_PAGE+v.START:return e.set("loadingMore",!0);case v.LOAD_NEXT_PAGE+v.SUCCESS:return e.set("page",n.page).set("results",[].concat(Object(q.a)(e.results),Object(q.a)(r.results))).set("loadingMore",!1);case v.SET_QUERY:return e.set("query",n.query);case v.LOAD_MOVIE+v.START:return e.set("loading",!0);case v.LOAD_MOVIE+v.SUCCESS:return e.set("movie",r).set("total_results",1).set("loading",!1);case v.LOAD_CREDITS+v.START:return e.set("loading",!0);case v.LOAD_CREDITS+v.SUCCESS:return e.set("credits",r).set("loading",!1);default:return e}},genres:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Ee,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.response;switch(a){case v.LOAD_GENRES+v.SUCCESS:return F(n,Ee);default:return e}}}),ge=a(22),_e=a(35),be=Object(ve.a)(function(e){return function(e){return function(t){var a=t.callAPI,n=t.type,r=Object(_e.a)(t,["callAPI","type"]);if(!a)return e(t);e(Object(ge.a)({},r,{type:n+v.START})),setTimeout(function(){fetch(a).then(function(e){return e.json()}).then(function(t){return e(Object(ge.a)({},r,{type:n+v.SUCCESS,response:t}))}).catch(function(t){return e(Object(ge.a)({},r,{type:n+v.ERR,err:t}))})},700)}}}),ye=Object(ve.d)(fe,{},be);window.store=ye;var Oe=ye,je=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),t}(n.Component),Se=Object(M.e)(je);o.a.render(r.a.createElement(E.a,{store:Oe},r.a.createElement(R.a,null,r.a.createElement(Se,null,r.a.createElement(pe,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,1,2]]]);
//# sourceMappingURL=main.a5683624.chunk.js.map