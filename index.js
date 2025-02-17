import{a as h,S as f,i as a}from"./assets/vendor-D0cagnvz.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();async function m({urlBase:r,apiKey:t,searchExpression:i,type:o,orientation:e,safesearch:s}){return(await h.get(r,{params:{key:t,q:i,image_type:o,orientation:e,safesearch:s}})).data}function d(r){return r.map(t=>`<li class="gallery-item">
      <a href="${t.largeImageURL}" class="gallery-link">
        <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" data-source="${t.tags}"
        data-title="${t.tags}"  height="255" width="430"/>
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
      </li>`).join("")}const l={urlBase:"https://pixabay.com/api/",apiKey:"48839660-7b8b283c3689698998fc631e5",searchExpression:null,type:"photo",orientation:"horizontal",safesearch:!0};class p{constructor(t,i,o,e,s,n){this.title=t,this.message=i,this.position=o,this.timeout=e,this.transitionIn=s,this.transitionOut=n}error(){a.error({title:this.title,message:this.message,position:this.position,timeout:this.timeout,transitionIn:this.transitionIn,transitionOut:this.transitionOut})}info(){a.info({title:this.title,message:this.message,position:this.position,timeout:this.timeout,transitionIn:this.transitionIn,transitionOut:this.transitionOut})}}class g extends p{constructor(t){super("Error",t,"topRight",5e3,"fadeInDown","fadeOutUp")}}class y extends p{constructor(t){super("info",t,"topRight",5e3,"blue","fadeInDown","fadeOutUp")}}const b=new g("Sorry, there are no images matching your search query. Please try again!"),I=document.querySelector(".gallery"),c=document.querySelector(".form"),u=document.querySelector(".loader");c.addEventListener("submit",r=>{r.preventDefault();const t=x();t&&(l.searchExpression=t,u.style.display="inline-block",m(l).then(i=>{i.hits.length===0&&b.error(),I.innerHTML=d(i.hits);const o=new f(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,animationSpeed:300,animationSlide:!0,overlay:!0,overlayOpacity:.8});o.on("shown.simplelightbox",()=>{document.querySelector(".simple-lightbox")}),o.refresh()}).catch(i=>{console.log(i)}).finally(()=>{u.style.display="none"}),c.reset())});function x(){const t=document.querySelector(".js-form-input").value.replace(/\d+/g,"").replace(/ /g,"+");if(t===""){new y("Please enter a search term").info();return}return t}
//# sourceMappingURL=index.js.map
