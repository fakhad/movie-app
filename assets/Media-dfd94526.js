import{k as d,o as c,c as l,F as f,l as k,f as s,t as r,r as u,b as $,e as h,u as y,i as g,a as m,d as b,w,n as S,p as B,q as I,A as R,B as D,v as F}from"./index-8305f61b.js";const z={class:"main__info"},A={class:"main__info-item-name"},L={class:"main__info-item-text"},T={__name:"Info",props:{item:Object},setup(e){const t=e,n=d(()=>[{name:"Бюджет",text:t.item.budget?"$"+t.item.budget:"Неизвестно"},{name:"Сборы",text:t.item.revenue?"$"+t.item.revenue:"Неизвестно"},{name:"Статус",text:t.item.status},{name:"Исходное название",text:t.item.original_title||t.item.original_name}]);return(a,o)=>(c(),l("div",z,[(c(!0),l(f,null,k(n.value,i=>(c(),l("div",{class:"main__info-item",key:i.name},[s("span",A,r(i.name),1),s("span",L,r(i.text),1)]))),128))]))}},U={class:"main__intro"},Y={alt:"",class:"main__intro-poster"},j={class:"main__intro-block"},C={class:"main__intro-block-left"},M={class:"main__intro-block-left-title"},N={class:"main__intro-block-left-text"},O={class:"main__intro-block-left-descr"},V={class:"main__intro-block-right"},q={alt:"",class:"main__intro-block-right-img"},E={class:"main__intro-block-actors"},G=s("h2",{class:"main__intro-block-actors-title"},"В главных ролях",-1),K={__name:"Intro",props:{type:String,item:Object},setup(e){const t=e,n=d(()=>new Date(t.item.release_date).getFullYear()||new Date(t.item.first_air_date).getFullYear()),a=d(()=>t.item.genres.reduce((o,i)=>o+", "+i.name,""));return(o,i)=>{const p=u("Trailer"),_=u("Actors"),v=$("lazy");return c(),l("div",U,[h(s("img",Y,null,512),[[v,y(g)+e.item.poster_path]]),s("div",j,[s("div",C,[s("h1",M,r(e.item.title||e.item.name),1),s("p",N,r(e.item.overview||"Нет описания"),1),s("p",O,[s("span",null,r(n.value)+r(a.value),1)]),m(p)]),s("div",V,[h(s("img",q,null,512),[[v,y(g)+e.item.backdrop_path]])]),s("div",E,[G,m(_,{type:e.type,id:e.item.id,count:"6"},null,8,["type","id"])])])])}}};const H={class:"main__rec"},J={class:"container"},P=s("h2",{class:"main__rec-title"},"Рекомендации",-1),Q={class:"main__rec-list"},W={alt:"",class:"main__rec-list-item-img"},X={class:"main__rec-list-item-title"},Z={__name:"Rec",props:{type:String,rec:Array},setup(e){return(t,n)=>{const a=u("router-link"),o=$("lazy");return c(),l("div",H,[s("div",J,[P,s("div",Q,[(c(!0),l(f,null,k(e.rec,i=>(c(),b(a,{key:i.id,to:`${i.id}`,class:"main__rec-list-item"},{default:w(()=>[h(s("img",W,null,512),[[o,y(g)+i.backdrop_path]]),s("h2",X,r(i.name||i.title),1)]),_:2},1032,["to"]))),128))])])])}}},tt=S("rec",{state:()=>({url:"https://api.themoviedb.org/3/",movie:null,tv:null}),actions:{async getRec({type:e,id:t}){try{let n=await B.get(`${this.url}${e}/${t}/recommendations?api_key=${I}&language=ru-RU`);e=="movie"?this.movie=n.data.results:e=="tv"&&(this.tv=n.data.results)}catch{console.error("ошибка при получении рекомендованных данных")}}}}),et={key:0,class:"main__media"},it={__name:"Media",props:{type:String},setup(e){const t=e,n=R(),a=D(),o=tt();setTimeout(()=>{a.getItemId({type:t.type,id:n.params.id}),o.getRec({type:t.type,id:n.params.id})},500);const i=d(()=>t.type=="movie"?a.movie:t.type=="tv"?a.tv:""),p=d(()=>{let _=t.type=="movie"?o.movie:t.type=="tv"?o.tv:"";if(_)return _.slice(0,4)});return F(()=>{a.movie=a.tv=null}),(_,v)=>{const x=u("Loader");return i.value?(c(),l("div",et,[m(K,{type:e.type,item:i.value},null,8,["type","item"]),m(T,{item:i.value},null,8,["item"]),m(Z,{type:e.type,rec:p.value},null,8,["type","rec"])])):(c(),b(x,{key:1}))}}};export{it as _};
