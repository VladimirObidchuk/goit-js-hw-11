import{a as g,S as m,i as l}from"./assets/vendor-D0cagnvz.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();async function y({urlBase:r,apiKey:t,searchExpression:i,type:n,orientation:e,safesearch:s}){return(await g.get(r,{params:{key:t,q:i,image_type:n,orientation:e,safesearch:s}})).data}function d(r){return console.log(r),r.map(t=>`<li class="gallery-item">
      <a href="${t.largeImageURL}" class="gallery-link">
        <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" data-source="${t.largeImageURL}"  height="${t.webformatHeight}" width="${t.webformatWidth}"/>
      </a> 
      <ul class="sublist">
            <li class="sublist-item">
                <p class="sublist-title">Likes</p>
                <p class="sublist-text">${t.likes}</p>
             </li>
            <li class="sublist-item">
                <p class="sublist-title">Viewes</p>
                <p class="sublist-text">${t.views}</p>
             </li>
             <li class="sublist-item">
                <p class="sublist-title">Comments</p>
                <p class="sublist-text">${t.comments}</p>
            </li>
             <li class="sublist-item">
                <p class="sublist-title">Download</p>
                <p class="sublist-text">${t.downloads}</p>
            </li>
        </ul>       
      </li>`).join("")}const a={urlBase:"https://pixabay.com/api/",apiKey:"48839660-7b8b283c3689698998fc631e5",searchExpression:null,type:"photo",orientation:"horizontal",safesearch:!0};class h{constructor(t,i,n,e,s,o){this.title=t,this.message=i,this.position=n,this.timeout=e,this.transitionIn=s,this.transitionOut=o}error(){l.error({title:this.title,message:this.message,position:this.position,timeout:this.timeout,transitionIn:this.transitionIn,transitionOut:this.transitionOut})}info(){l.info({title:this.title,message:this.message,position:this.position,timeout:this.timeout,transitionIn:this.transitionIn,transitionOut:this.transitionOut})}}class b extends h{constructor(t){super("Error",t,"topRight",5e3,"fadeInDown","fadeOutUp")}}class c extends h{constructor(t){super("info",t,"topRight",5e3,"blue","fadeInDown","fadeOutUp")}}const I=new b("Sorry, there are no images matching your search query. Please try again!"),x=document.querySelector(".gallery"),u=document.querySelector(".form");u.addEventListener("submit",async r=>{if(r.preventDefault(),!!p()){a.searchExpression=p();try{const i=await y(a);i.hits.length===0&&I.error(),x.insertAdjacentHTML("beforeend",d(i.hits)),f.refresh()}catch(i){console.log(i)}u.reset()}});function p(){const t=document.querySelector(".js-form-input").value,i=/^[a-zA-Zа-яА-ЯёЁіІїЇєЄ]*$/;if(t===""){new c("Please enter a search term").info();return}else if(!i.test(t)){new c("Please enter letters only.").info();return}return console.log("searchData",t),t}const f=new m(".gallery a",{animationSpeed:300,animationSlide:!0,captionDelay:250,overlay:!0,overlayOpacity:.8});f.on("shown.simplelightbox",()=>{const r=document.querySelector(".simple-lightbox"),t=r.firstElementChild;if(!r)return;const i=document.querySelectorAll(".sl-navigation button"),n=document.querySelector(".sl-counter");Object.assign(t.style,lightboxStyle.slClouse),i.forEach(e=>{Object.assign(e.style,lightboxStyle.slNavigationBtn),e.className==="sl-prev"&&Object.assign(e.style,lightboxStyle.slPrev),e.className==="sl-next"&&Object.assign(e.style,lightboxStyle.slNext)}),Object.assign(n.style,lightboxStyle.slCounter)});
//# sourceMappingURL=index.js.map
