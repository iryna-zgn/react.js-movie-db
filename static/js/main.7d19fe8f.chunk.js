(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,a){e.exports=a(58)},41:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(21),c=a.n(o),l=(a(41),a(1)),i=a(2),s=a(4),u=a(3),m=a(5),d={POPULAR:"popular",SEARCH:"search"},p={IS_FOCUS:"is-focus",IS_FIXED:"is-fixed",IS_SMALL:"is-small"},v={LOAD_MOVIES:"LOAD_MOVIES",LOAD_MOVIE:"LOAD_MOVIE",LOAD_CREDITS:"LOAD_CREDITS",LOAD_GENRES:"LOAD_GENRES",LOAD_NEXT_PAGE:"LOAD_NEXT_PAGE",SET_QUERY:"SET_QUERY",START:"START",SUCCESS:"SUCCESS",ERR:"ERR",TOGGLE_MODAL:"TOGGLE_MODAL"},h={GALLERY_MODAL:"GalleryModal"};function g(e){var t="logo";return e.isSmall&&(t+=" ".concat(p.IS_SMALL)),r.a.createElement("div",{className:t},r.a.createElement("a",{href:e.link||"#",title:e.title,target:e.isTargetBlank?"_blank":"_self",className:"logo__link",rel:"noopener noreferrer"},r.a.createElement("span",{className:"logo__main"},"rho"),r.a.createElement("span",{className:"logo__text"},e.text)))}var f=a(6),E="https://api.themoviedb.org",_="ac710db081029f2383b7c329b25a753a",y="".concat(E,"/3/movie/popular?api_key=").concat(_),O="".concat(E,"/3/search/movie?api_key=").concat(_),b="https://image.tmdb.org/t/p/w500",j="".concat(E,"/3/genre/list?api_key=").concat(_),k="".concat(E,"/3/movie/"),S={BLOG:"https://iryna-zgn.github.io/vue.js-blog",MOVIES:"https://iryna-zgn.github.io/react.js-movie-db"},A=[{name:"github",url:"https://github.com/iryna-zgn/react.js-movie-db",isActive:!0},{name:"instagram",url:"#",isActive:!1},{name:"facebook",url:"#",isActive:!1}];function N(e,t,a){return e===d.POPULAR?"".concat(y,"&page=").concat(a):"".concat(O,"&query=").concat(t,"&page=").concat(a)}function M(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.POPULAR,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return{type:v.LOAD_MOVIES,payload:{mode:e,query:t},callAPI:N(e,t,a)}}function C(){return{type:v.LOAD_GENRES,callAPI:j}}function L(e,t,a){return{type:v.TOGGLE_MODAL,payload:{name:e,action:t,parameter:a}}}var w=a(16),D=a(11);function R(){return r.a.createElement("div",{className:"no-results"},r.a.createElement("div",{className:"no-results__msg"},"No results :("),r.a.createElement(D.b,{to:"/",className:"no-results__link"},"Popular movies"))}var I=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={isFocus:!1},a.handleChange=function(e){return a.props.setQuery(e.target.value)},a.handleSubmit=function(e){var t=a.props,n=t.query,r=t.lastQuery;e.preventDefault(),n&&n!==r&&(a.props.loadMovies(d.SEARCH,n),a.props.history.push("/search/".concat(n)))},a.addFocus=function(){a.setState({isFocus:!0})},a.removeFocus=function(){a.setState({isFocus:!1})},a.renderMsg=function(){if(!a.props.total_results)return r.a.createElement(R,null)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e="search__field";return this.state.isFocus&&(e+=" ".concat(p.IS_FOCUS)),r.a.createElement("div",{className:"search"},r.a.createElement("form",{className:"search__form",onSubmit:this.handleSubmit},r.a.createElement("div",{className:e},r.a.createElement("input",{value:this.props.query,placeholder:"Search for a movie",type:"text",onChange:this.handleChange,onFocus:this.addFocus,onBlur:this.removeFocus})),r.a.createElement("button",{className:"search__btn icon-search"})),this.renderMsg())}}]),t}(n.Component),T=Object(w.e)(Object(f.b)(function(e){return{query:e.movies.query,lastQuery:e.movies.lastQuery,total_results:e.movies.total_results}},{loadMovies:M,setQuery:function(e){return{type:v.SET_QUERY,payload:{query:e}}}})(I)),G=function(){return A.map(function(e){return e.isActive?r.a.createElement("li",{key:e.name,className:"soc-links__item"},r.a.createElement("a",{href:e.url,title:e.name,className:"soc-links__link",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"soc-links__icon icon-".concat(e.name)}))):null})};function x(){return r.a.createElement("ul",{className:"soc-links"},G())}function P(){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header__main"},r.a.createElement(g,{text:"movies",link:S.MOVIES}),r.a.createElement(T,null)),r.a.createElement("div",{className:"header__links"},r.a.createElement(x,null),r.a.createElement(g,{link:S.BLOG,text:"blog",isSmall:!0,isTargetBlank:!0,title:"rho blog"})))}var q=a(20),B=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).renderFilledStars=function(){var e=a.getCount(a.props.evaluation),t=new Array(5).fill("");return t.fill("-filled",0,e),t.map(function(e,t){return r.a.createElement("div",{key:t,className:"evaluation__stars-item"},r.a.createElement("span",{className:"icon-star".concat(e)}))})},a.getCount=function(e){return Math.round(e/2)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.props.evaluation?r.a.createElement("div",{className:"evaluation"},r.a.createElement("div",{className:"evaluation__stars"},this.renderFilledStars()),r.a.createElement("span",null,this.props.count)):null}}]),t}(n.Component),F=a(14);function U(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:F.a;return Object.keys(e).reduce(function(t,a){return t.set(a,e[a])},new t)}function V(e){return e?"".concat(b).concat(e):"static/images/rho_light.jpg"}function Q(e){if(e)return e.reduce(function(e,t,a){return e+(a?", ":"")+t.name},"")}function Y(e){if(e)return e.slice(0,4)}function X(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(e)return t+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function H(e){if(e){var t=Math.floor(e/60),a=e%60;return(t?"".concat(t," h"):"")+(a?" ".concat(a," min"):"")}}var W=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).getGenres=function(e){var t=a.props.genres,n=new Set;return e.forEach(function(e){t.forEach(function(t){t.id===e&&n.add(t)})}),Object(q.a)(n)},a.renderGenres=function(e){return Q(a.getGenres(e))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.movie;return r.a.createElement("div",{className:"movie"},r.a.createElement(D.b,{to:"/movie/".concat(e.id),className:"movie__img",style:{backgroundImage:"url(".concat(V(e.poster_path),")")}},r.a.createElement("img",{src:"static/images/rho_light.jpg",alt:"",className:"u-dummy"})),r.a.createElement("div",null,r.a.createElement(D.b,{to:"/movie/".concat(e.id),className:"movie__title t2"},e.title),r.a.createElement("div",{className:"movie__prop"},this.renderGenres(e.genre_ids)),r.a.createElement("div",{className:"movie__prop"},Y(e.release_date)),r.a.createElement(B,{evaluation:e.vote_average,count:e.vote_count}),r.a.createElement("div",{className:"movie__desc",style:{WebkitBoxOrient:"vertical"}},e.overview),r.a.createElement(D.b,{to:"/movie/".concat(e.id),className:"movie__link"},"Read more")))}}]),t}(n.Component);function z(e){var t="preloader";return e.isFixed&&(t+=" ".concat(p.IS_FIXED)),r.a.createElement("div",{className:t},r.a.createElement("div",{className:"preloader__inner"}))}var J=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleClickMore=function(){var e=a.props,t=e.page,n=e.mode,r=e.query;a.props.loadNextPage(n,r,t+1)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"load-more"},this.props.loadingMore?r.a.createElement("div",{className:"load-more__preloader"},r.a.createElement(z,null)):r.a.createElement("div",{onClick:this.handleClickMore,className:"load-more__link"},"Load more"))}}]),t}(n.Component),$=Object(f.b)(function(e){return{page:e.movies.page,loadingMore:e.movies.loadingMore,mode:e.movies.mode,query:e.movies.query}},{loadNextPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.POPULAR,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return{type:v.LOAD_NEXT_PAGE,payload:{page:a},callAPI:N(e,t,a)}}})(J),K=a(17),Z=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).renderItems=function(){var e=a.props,t=e.movies,n=e.genres;return t.map(function(e){return r.a.createElement(K.CSSTransition,{key:e.id,classNames:"fade",timeout:{appear:300,enter:300,exit:300},appear:!0},r.a.createElement("div",{className:"movies-list__item"},r.a.createElement(W,{movie:e,genres:n})))})},a.renderLoadMore=function(){var e=a.props,t=e.pages,n=e.page;if(t>1&&n!==t)return r.a.createElement($,null)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"movies-list"},r.a.createElement(K.TransitionGroup,null,this.renderItems())),this.renderLoadMore())}}]),t}(n.Component),ee=Object(f.b)(function(e){return{movies:e.movies.results,genres:e.genres.genres,pages:e.movies.total_pages,page:e.movies.page}})(Z),te=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(ee,null)}},{key:"componentDidMount",value:function(){this.props.loadMovies(),this.props.loadGenres()}}]),t}(n.Component),ae=Object(f.b)(null,{loadMovies:M,loadGenres:C})(te),ne=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(ee,{query:this.props.query})}},{key:"componentDidMount",value:function(){this.props.loadMovies(d.SEARCH,this.props.query),this.props.loadGenres()}},{key:"componentWillReceiveProps",value:function(e){e.query!==this.props.query&&this.props.loadMovies(d.SEARCH,e.query)}}]),t}(n.Component),re=Object(f.b)(null,{loadMovies:M,loadGenres:C})(ne),oe=function(e){return e?e.slice(0,6).map(function(e){return r.a.createElement("div",{key:e.cast_id,className:"cast__item"},r.a.createElement("div",{className:"cast__img",style:{backgroundImage:"url(".concat(V(e.profile_path),")")}},r.a.createElement("img",{src:"static/images/rho_light.jpg",alt:"",className:"u-dummy"})),r.a.createElement("div",{className:"t4"},e.name),r.a.createElement("div",{className:"cast__desc"},e.character))}):null};function ce(e){return e.cast.length?r.a.createElement("div",{className:"cast"},r.a.createElement("h2",{className:"t2"},"Cast"),r.a.createElement("div",{className:"cast__list"},oe(e.cast))):null}var le=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).renderBackdrops=function(e){return e.backdrops?e.backdrops.map(function(e,t){return r.a.createElement("img",{key:e.file_path,src:V(e.file_path),onClick:function(){return a.showImg(t)},alt:""})}):null},a.showImg=function(e){a.props.toggleModal(h.GALLERY_MODAL,!0,{images:a.props.images.backdrops,index:e})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.props.images?r.a.createElement("div",{className:"backdrops"},r.a.createElement("h2",{className:"t2"},"Backdrops"),r.a.createElement("div",{className:"backdrops__gallery u-scrollbar-x"},this.renderBackdrops(this.props.images))):null}}]),t}(n.Component),ie=Object(f.b)(null,{toggleModal:L})(le),se=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).getDetails=function(e){return[{key:"Genre",val:Q(e.genres)},{key:"Runtime",val:H(e.runtime)},{key:"Original language",val:e.original_language},{key:"Release year",val:Y(e.release_date)},{key:"Budget",val:X(e.budget,"$")}]},a.getCrew=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t={Director:"",Producer:"",Screenplay:"",Writer:"",Music:"","Original Music Composer":""};for(var a in e.forEach(function(e){e.job in t&&(t[e.job]+=t[e.job]?", ".concat(e.name):e.name)}),t)t[a]={key:a,val:t[a]};return Object.values(t)},a.getDataByName=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[{key:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",val:Q(e)}]},a.renderRows=function(e){return e.map(function(e,t){return e.val?r.a.createElement("tr",{key:e.key+t},r.a.createElement("td",null,e.key),r.a.createElement("td",null,e.val)):null})},a.renderHomeLink=function(e){return e?r.a.createElement("a",{href:e,className:"movie-details__link",target:"_blank",rel:"noopener noreferrer"},"homepage"):null},a.renderBackdrops=function(e){return a.props.movie.images?r.a.createElement(ie,{images:e}):null},a.renderCast=function(e){return a.props.credits.cast?r.a.createElement(ce,{cast:e}):null},a.showImg=function(e){a.props.toggleModal(h.GALLERY_MODAL,!0,{images:[{file_path:e}]})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.movie,n=t.credits;return r.a.createElement("div",{className:"movie-details"},r.a.createElement("div",{className:"movie-details__parts"},r.a.createElement("div",{className:"movie-details__const"},r.a.createElement("div",{className:"movie-details__poster",onClick:function(){return e.showImg(a.poster_path)}},r.a.createElement("img",{src:V(a.poster_path),alt:""}))),r.a.createElement("div",{className:"movie-details__var"},r.a.createElement("h1",null,a.title),r.a.createElement(B,{evaluation:a.vote_average,count:a.vote_count}),r.a.createElement("table",{className:"movie-details__props"},r.a.createElement("tbody",null,this.renderRows(this.getDetails(a)),this.renderRows(this.getDataByName(a.production_countries,"Country")),this.renderRows(this.getDataByName(a.production_companies,"Production")),this.renderRows(this.getCrew(n.crew)))))),r.a.createElement("div",{className:"movie-details__desc"},r.a.createElement("p",null,a.overview),this.renderHomeLink(a.homepage)),this.renderCast(n.cast),this.renderBackdrops(a.images))}}]),t}(n.Component),ue=Object(f.b)(function(e){return{movie:e.movies.movie,credits:e.movies.credits}},{toggleModal:L})(se),me=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(ue,{id:this.props.id})}},{key:"componentDidMount",value:function(){this.props.loadMovie(this.props.id),this.props.loadCredits(this.props.id)}}]),t}(n.Component),de=Object(f.b)(null,{loadMovie:function(e){return{type:v.LOAD_MOVIE,callAPI:"".concat(k).concat(e,"?api_key=").concat(_,"&append_to_response=images")}},loadCredits:function(e){return{type:v.LOAD_CREDITS,callAPI:"".concat(k).concat(e,"/credits?api_key=").concat(_)}}})(me);function pe(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"footer__copyright"},"\xa9 ",(new Date).getFullYear()," Rho"))}var ve=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).closeModal=function(){a.props.toggleModal(a.props.name,!1)},a.toggleBodyFixed=function(){document.querySelector("html").classList.toggle(p.IS_FIXED)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"modal__backdrop",onClick:this.closeModal}),r.a.createElement("span",{className:"modal__close",onClick:this.closeModal},"\xd7"),r.a.createElement("div",{className:"modal__container"},this.props.children))}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("keydown",function(t){"Escape"!==t.key&&"Backspace"!==t.key||e.closeModal()}),this.toggleBodyFixed()}},{key:"componentWillUnmount",value:function(){this.toggleBodyFixed()}}]),t}(n.Component),he=Object(f.b)(null,{toggleModal:L})(ve),ge=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={index:a.props.gallery.index||0},a.renderImage=function(){if(!a.props.gallery)return null;var e=a.state.index,t=a.props.gallery.images;return r.a.createElement("img",{src:V(t[e].file_path),alt:""})},a.renderArrow=function(e,t){return a.props.gallery?a.props.gallery.images.length>1?r.a.createElement("div",{className:"gallery__arrow gallery__arrow--".concat(e," icon-arrow-").concat(e),title:t,onClick:function(){return a.getIndex(t)}}):void 0:null},a.getIndex=function(e){if(!a.props.gallery)return null;var t=a.props.gallery.images.length,n=a.state.index;"next"===e?a.setState({index:n===t-1?0:n+1}):"prev"===e&&a.setState({index:0===n?t-1:n-1})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"gallery"},this.renderArrow("left","prev"),this.renderImage(),this.renderArrow("right","next"))}},{key:"componentDidMount",value:function(){var e=this;this.props.gallery.images.length>1&&window.addEventListener("keydown",function(t){37===t.keyCode?e.getIndex("prev"):39===t.keyCode&&e.getIndex("next")})}}]),t}(n.Component),fe=Object(f.b)(function(e){return{gallery:e.modals.parameter}})(ge);function Ee(){return r.a.createElement(he,{name:h.GALLERY_MODAL},r.a.createElement(fe,null))}var _e=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).getModals=function(){return[{name:h.GALLERY_MODAL,component:r.a.createElement(Ee,null)}]},a.renderModals=function(){return a.getModals().map(function(e,t){return a.props.modalsState["is".concat(e.name)]?r.a.createElement(K.CSSTransition,{key:e.name+t,classNames:"fade",timeout:{appear:300,enter:300,exit:300}},r.a.createElement("div",null,e.component)):null})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(K.TransitionGroup,null,this.renderModals()))}}]),t}(n.Component),ye=Object(f.b)(function(e){return{modalsState:e.modals}})(_e),Oe=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).getSearch=function(e){var t=e.match.params.query;return r.a.createElement(re,{query:t})},a.getMovie=function(e){var t=e.match.params.id;return r.a.createElement(de,{id:t})},a.renderPreloader=function(){if(a.props.loading)return r.a.createElement(z,{isFixed:!0})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",null,r.a.createElement(P,null),r.a.createElement(w.c,null,r.a.createElement(w.a,{exact:!0,path:"/",component:ae}),r.a.createElement(w.a,{path:"/search/:query",render:this.getSearch}),r.a.createElement(w.a,{path:"/movie/:id",render:this.getMovie}))),r.a.createElement("div",null,r.a.createElement(pe,null),r.a.createElement(ye,null),this.renderPreloader()))}}]),t}(n.Component),be=Object(f.b)(function(e){return{query:e.movies.query,loading:e.movies.loading}})(Oe);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var je=a(15),ke=Object(F.b)({results:[],total_pages:1,page:1,total_results:0,loading:!1,loadingMore:!1,mode:d.POPULAR,query:"",lastQuery:"",movie:{},credits:{}}),Se=Object(F.b)({genres:[]}),Ae=Object(F.b)({isGalleryModal:!1,parameter:null}),Ne=Object(je.c)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new ke,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload,r=t.response;switch(a){case v.LOAD_MOVIES+v.START:return e.set("loading",!0);case v.LOAD_MOVIES+v.SUCCESS:return U(r,ke).set("query",n.query).set("lastQuery",n.query).set("mode",n.mode).set("loading",!1);case v.LOAD_NEXT_PAGE+v.START:return e.set("loadingMore",!0);case v.LOAD_NEXT_PAGE+v.SUCCESS:return e.set("page",n.page).set("results",[].concat(Object(q.a)(e.results),Object(q.a)(r.results))).set("loadingMore",!1);case v.SET_QUERY:return e.set("query",n.query);case v.LOAD_MOVIE+v.START:return e.set("loading",!0);case v.LOAD_MOVIE+v.ERR:return e.set("total_results",0).set("loading",!1);case v.LOAD_MOVIE+v.SUCCESS:return e.set("movie",r).set("total_results",1).set("loading",!1);case v.LOAD_CREDITS+v.START:return e.set("loading",!0);case v.LOAD_CREDITS+v.SUCCESS:return e.set("credits",r).set("loading",!1);default:return e}},genres:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Se,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.response;switch(a){case v.LOAD_GENRES+v.SUCCESS:return U(n,Se);default:return e}},modals:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Ae,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case v.TOGGLE_MODAL:return e.set("is".concat(n.name),n.action).set("parameter",n.parameter);default:return e}}}),Me=a(23),Ce=a(35),Le=Object(je.a)(function(e){return function(e){return function(t){var a=t.callAPI,n=t.type,r=Object(Ce.a)(t,["callAPI","type"]);if(!a)return e(t);e(Object(Me.a)({},r,{type:n+v.START})),setTimeout(function(){fetch(a).then(function(e){if(e.status>=400)throw new Error(e.statusText);return e.json()}).then(function(t){return e(Object(Me.a)({},r,{type:n+v.SUCCESS,response:t}))}).catch(function(t){return e(Object(Me.a)({},r,{type:n+v.ERR,err:t}))})},700)}}}),we=Object(je.d)(Ne,{},Le);window.store=we;var De=we,Re=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),t}(n.Component),Ie=Object(w.e)(Re);c.a.render(r.a.createElement(f.a,{store:De},r.a.createElement(D.a,null,r.a.createElement(Ie,null,r.a.createElement(be,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,1,2]]]);
//# sourceMappingURL=main.7d19fe8f.chunk.js.map