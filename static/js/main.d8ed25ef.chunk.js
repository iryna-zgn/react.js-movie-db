(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,a){e.exports=a(58)},41:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(20),c=a.n(o),i=(a(41),a(4)),l=a(5),s=a(7),u=a(6),m=a(8),d={POPULAR:"popular",SEARCH:"search"},v={IS_FOCUS:"is-focus",IS_FIXED:"is-fixed",IS_SMALL:"is-small"},p={LOAD_MOVIES:"LOAD_MOVIES",LOAD_MOVIE:"LOAD_MOVIE",LOAD_GENRES:"LOAD_GENRES",LOAD_NEXT_PAGE:"LOAD_NEXT_PAGE",SET_QUERY:"SET_QUERY",START:"START",SUCCESS:"SUCCESS",ERR:"ERR"};function h(e){var t="logo";return e.isSmall&&(t+=" ".concat(v.IS_SMALL)),r.a.createElement("div",{className:t},r.a.createElement("a",{href:e.link||"#",title:e.title,target:e.isTargetBlank?"_blank":"_self",className:"logo__link",rel:"noopener noreferrer"},r.a.createElement("span",{className:"logo__main"},"rho"),r.a.createElement("span",{className:"logo__text"},e.text)))}var g="https://api.themoviedb.org",E="ac710db081029f2383b7c329b25a753a",f="".concat(g,"/3/movie/popular?api_key=").concat(E),_="".concat(g,"/3/search/movie?api_key=").concat(E),b="https://image.tmdb.org/t/p/w500",y="".concat(g,"/3/genre/list?api_key=").concat(E),O="".concat(g,"/3/movie/"),S={BLOG:"https://iryna-zgn.github.io/vue.js-blog",MOVIES:"https://iryna-zgn.github.io/react.js-movie-db"},k=[{name:"github",url:"https://github.com/iryna-zgn",isActive:!0},{name:"instagram",url:"#",isActive:!1},{name:"facebook",url:"https://www.facebook.com/ira.dmytruk",isActive:!0}],N=function(){return k.map(function(e){return e.isActive?r.a.createElement("li",{key:e.name,className:"soc-links__item"},r.a.createElement("a",{href:e.url,title:e.name,className:"soc-links__link",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"soc-links__icon icon-".concat(e.name)}))):null})};function j(){return r.a.createElement("ul",{className:"soc-links"},N())}function A(){return r.a.createElement("header",{className:"header"},r.a.createElement(h,{text:"movies",link:S.MOVIES}),r.a.createElement("div",{className:"header__inline"},r.a.createElement(j,null),r.a.createElement(h,{link:S.BLOG,text:"blog",isSmall:!0,isTargetBlank:!0,title:"rho blog"})))}var M=a(9);function w(e,t,a){return e===d.POPULAR?"".concat(f,"&page=").concat(a):"".concat(_,"&query=").concat(t,"&page=").concat(a)}function C(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.POPULAR,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return{type:p.LOAD_MOVIES,payload:{mode:e,query:t},callAPI:w(e,t,a)}}var L=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={isFocus:!1},a.handleChange=function(e){return a.props.setQuery(e.target.value)},a.handleSubmit=function(e){var t=a.props,n=t.query,r=t.lastQuery;e.preventDefault(),n&&n!==r&&a.props.loadMovies(d.SEARCH,n)},a.addFocus=function(){a.setState({isFocus:!0})},a.removeFocus=function(){a.setState({isFocus:!1})},a.loadPopular=function(){a.props.loadMovies()},a.renderSearchMsg=function(){if(!a.props.total_results)return r.a.createElement("div",null,r.a.createElement("div",{className:"search__msg"},"No results :("),r.a.createElement("div",{onClick:a.loadPopular,className:"search__link"},"Popular movies"))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e="search__field";return this.state.isFocus&&(e+=" ".concat(v.IS_FOCUS)),r.a.createElement("div",{className:"search"},r.a.createElement("form",{className:"search__form",onSubmit:this.handleSubmit},r.a.createElement("div",{className:e},r.a.createElement("input",{value:this.props.query,placeholder:"Search for a movie",type:"text",onChange:this.handleChange,onFocus:this.addFocus,onBlur:this.removeFocus})),r.a.createElement("button",{className:"search__btn icon-search"})),this.renderSearchMsg())}}]),t}(n.Component),R=Object(M.b)(function(e){return{query:e.movies.query,lastQuery:e.movies.lastQuery,total_results:e.movies.total_results}},{loadMovies:C,setQuery:function(e){return{type:p.SET_QUERY,payload:{query:e}}}})(L),I=a(19),P=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).renderFilledStars=function(){for(var e=a.props.evaluation,t=[],n=0;n<a.getStarCount(e);n++)t.push(r.a.createElement("span",{className:"icon-star-filled"}));for(var o=0;o<5-a.getStarCount(e);o++)t.push(r.a.createElement("span",{className:"icon-star"}));return t.map(function(e,t){return r.a.createElement("div",{key:t,className:"evaluation__stars-item"},e)})},a.getStarCount=function(e){return Math.round(e/2)},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"evaluation"},r.a.createElement("div",{className:"evaluation__stars"},this.renderFilledStars()),r.a.createElement("span",null,this.props.count))}}]),t}(n.Component),T=a(16),D=a(15);function G(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:D.a;return Object.keys(e).reduce(function(t,a){return t.set(a,e[a])},new t)}function q(e){return e?"".concat(b).concat(e):"static/images/rho_light.jpg"}function F(e){if(e)return e.map(function(e,t){return r.a.createElement("span",{key:e.id},t?", ".concat(e.name.toLowerCase()):e.name)})}function U(e){if(e)return e.slice(0,4)}function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(e)return t+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}var V=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).getGenres=function(e){var t=a.props.genres,n=new Set;return e.forEach(function(e){t.forEach(function(t){t.id===e&&n.add(t)})}),Object(I.a)(n)},a.renderGenres=function(e){return F(a.getGenres(e))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.movie;return r.a.createElement("div",{className:"movie"},r.a.createElement(T.b,{to:"/movie-".concat(e.id),className:"movie__img",style:{backgroundImage:"url(".concat(q(e.poster_path),")")}},r.a.createElement("img",{src:"static/images/dummy_420x630.jpg",alt:"",className:"u-dummy"})),r.a.createElement("div",null,r.a.createElement(T.b,{to:"/movie-".concat(e.id),className:"movie__title t2"},e.title),r.a.createElement("div",{className:"movie__prop"},this.renderGenres(e.genre_ids)),r.a.createElement("div",{className:"movie__prop"},U(e.release_date)),r.a.createElement(P,{evaluation:e.vote_average,count:e.vote_count}),r.a.createElement("div",{className:"movie__desc",style:{WebkitBoxOrient:"vertical"}},e.overview),r.a.createElement(T.b,{to:"/movie-".concat(e.id),className:"movie__link"},"Read more")))}}]),t}(n.Component);function Q(e){var t="preloader";return e.isFixed&&(t+=" ".concat(v.IS_FIXED)),r.a.createElement("div",{className:t},r.a.createElement("div",{className:"preloader__inner"}))}var B=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleClickMore=function(){var e=a.props,t=e.page,n=e.mode,r=e.query;a.props.loadNextPage(n,r,t+1)},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"load-more"},this.props.loadingMore?r.a.createElement("div",{className:"load-more__preloader"},r.a.createElement(Q,null)):r.a.createElement("div",{onClick:this.handleClickMore,className:"load-more__link"},"Load more"))}}]),t}(n.Component),X=Object(M.b)(function(e){return{page:e.movies.page,loadingMore:e.movies.loadingMore,mode:e.movies.mode,query:e.movies.query}},{loadNextPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.POPULAR,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return{type:p.LOAD_NEXT_PAGE,payload:{page:a},callAPI:w(e,t,a)}}})(B),Y=a(26),H=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).renderItems=function(){var e=a.props,t=e.movies,n=e.genres;return t.map(function(e){return r.a.createElement(Y.CSSTransition,{key:e.id,classNames:"fade",timeout:{appear:500,enter:500,exit:500},appear:!0},r.a.createElement("div",{className:"movies-list__item"},r.a.createElement(V,{movie:e,genres:n})))})},a.renderLoadMore=function(){var e=a.props,t=e.pages,n=e.page;if(t>1&&n!==t)return r.a.createElement(X,null)},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(R,null),r.a.createElement("div",{className:"movies-list"},r.a.createElement(Y.TransitionGroup,null,this.renderItems())),this.renderLoadMore())}},{key:"componentDidMount",value:function(){this.props.loadMovies(),this.props.loadGenres()}}]),t}(n.Component),z=Object(M.b)(function(e){return{movies:e.movies.results,genres:e.genres.genres,pages:e.movies.total_pages,page:e.movies.page,loadingMore:e.movies.loadingMore,mode:e.movies.mode,query:e.movies.query}},{loadMovies:C,loadGenres:function(){return{type:p.LOAD_GENRES,callAPI:y}}})(H),W=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).renderImages=function(e){if(e)return e.backdrops.map(function(e){return r.a.createElement("img",{key:e.file_path,src:q(e.file_path),alt:""})})},a.renderTableRows=function(e){return[{key:"Genre:",val:F(e.genres)},{key:"Runtime:",val:"".concat(e.runtime," min")},{key:"Original language:",val:e.original_language},{key:"Release year:",val:U(e.release_date)},{key:"Budget:",val:x(e.budget,"$")}].map(function(e){if(e.val)return r.a.createElement("tr",null,r.a.createElement("td",null,e.key),r.a.createElement("td",null,e.val))})},a.renderHomeLink=function(e){if(e)return r.a.createElement("a",{href:e,className:"movie-details__link",target:"_blank",rel:"noopener noreferrer"},"homepage")},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.movie;return r.a.createElement("div",{className:"movie-details"},r.a.createElement("div",{className:"movie-details__parts"},r.a.createElement("div",{className:"movie-details__const"},r.a.createElement("img",{src:q(e.poster_path),alt:""})),r.a.createElement("div",{className:"movie-details__var"},r.a.createElement("h1",null,e.title),r.a.createElement(P,{evaluation:e.vote_average,count:e.vote_count}),r.a.createElement("table",{className:"movie-details__props"},r.a.createElement("tbody",null,this.renderTableRows(e))),r.a.createElement("p",null,e.overview),this.renderHomeLink(e.homepage))),r.a.createElement("div",{className:"movie-details__gallery u-scrollbar-x"},this.renderImages(e.images)))}},{key:"componentDidMount",value:function(){this.props.loadMovie(this.props.id)}}]),t}(n.Component),J=Object(M.b)(function(e){return{movie:e.movies.movie}},{loadMovie:function(e){return{type:p.LOAD_MOVIE,callAPI:"".concat(O).concat(e,"?api_key=").concat(E,"&append_to_response=images")}}})(W);function $(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"footer__copyright"},"\xa9 ",(new Date).getFullYear()," Rho"))}var K=a(14),Z=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).getMovieDetails=function(e){var t=e.match.params.id;return r.a.createElement(J,{id:t})},a.renderPreloader=function(){if(a.props.loading)return r.a.createElement(Q,{isFixed:!0})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(T.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",null,r.a.createElement(A,null),r.a.createElement(K.c,null,r.a.createElement(K.a,{exact:!0,path:"/",component:z}),r.a.createElement(K.a,{path:"/movie-:id",render:this.getMovieDetails}))),r.a.createElement($,null),this.renderPreloader()))}}]),t}(n.Component),ee=Object(M.b)(function(e){return{loading:e.movies.loading}})(Z);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var te=a(13),ae=Object(D.b)({results:[],total_pages:1,page:1,total_results:0,loading:!1,loadingMore:!1,mode:d.POPULAR,query:"",lastQuery:"",movie:{}}),ne=Object(D.b)({genres:[]}),re=Object(te.c)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new ae,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload,r=t.response;switch(a){case p.LOAD_MOVIES+p.START:return e.set("loading",!0);case p.LOAD_MOVIES+p.SUCCESS:return G(r,ae).set("query",n.query).set("lastQuery",n.query).set("mode",n.mode).set("loading",!1);case p.LOAD_NEXT_PAGE+p.START:return e.set("loadingMore",!0);case p.LOAD_NEXT_PAGE+p.SUCCESS:return e.set("page",n.page).set("results",[].concat(Object(I.a)(e.results),Object(I.a)(r.results))).set("loadingMore",!1);case p.SET_QUERY:return e.set("query",n.query);case p.LOAD_MOVIE+p.START:return e.set("loading",!0);case p.LOAD_MOVIE+p.SUCCESS:return e.set("movie",r).set("loading",!1);default:return e}},genres:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new ne,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.response;switch(a){case p.LOAD_GENRES+p.SUCCESS:return G(n,ne);default:return e}}}),oe=a(22),ce=a(35),ie=Object(te.a)(function(e){return function(e){return function(t){var a=t.callAPI,n=t.type,r=Object(ce.a)(t,["callAPI","type"]);if(!a)return e(t);e(Object(oe.a)({},r,{type:n+p.START})),setTimeout(function(){fetch(a).then(function(e){return e.json()}).then(function(t){return e(Object(oe.a)({},r,{type:n+p.SUCCESS,response:t}))}).catch(function(t){return e(Object(oe.a)({},r,{type:n+p.ERR,err:t}))})},700)}}}),le=Object(te.d)(re,{},ie);window.store=le;var se=le;c.a.render(r.a.createElement(M.a,{store:se},r.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,1,2]]]);
//# sourceMappingURL=main.d8ed25ef.chunk.js.map