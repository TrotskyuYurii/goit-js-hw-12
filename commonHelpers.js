import{i as d,a as L,S as b}from"./assets/vendor-951421c8.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const g of o.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&l(g)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const v=document.querySelector("form"),w=document.getElementById("searchImageText"),h=document.querySelector(".container-image"),i=document.getElementById("loadMoreButton");let m=1,a,p=0,f="",c;document.addEventListener("DOMContentLoaded",function(){R()});i.addEventListener("click",e=>{const s=document.querySelector(".photo-card").getBoundingClientRect().height;m+=1,r(),y(f).then(n=>{a=n,a.length===0?(r(),d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),u(),i.classList.add("isHidden")):(r(),i.classList.remove("isHidden"),a.push(...n),u(!0),E(),c.refresh(),window.scrollBy({top:s*2,behavior:"smooth"}))})});v.addEventListener("submit",e=>{if(e.preventDefault(),f=document.getElementById("searchImage").value,f.trim()===""){d.info({message:"Please enter what you want to find!",position:"topRight"});return}else m=1,r(),y(f).then(n=>{if(a=n,a.length===0)r(),d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),u(),i.classList.add("isHidden");else if(p<=15){r(),u(),i.classList.add("isHidden"),c.refresh(),d.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}else r(),i.classList.remove("isHidden"),u(),c.refresh()}).catch(n=>{console.log(n)})});async function y(e){const n="https://pixabay.com/api/?key="+"25736683-f5d7a17cce89782c978955728"+"&q="+encodeURIComponent(e)+"&image_type=photo&orientation=horizontal&safe_search=true&page="+m+"&per_page=15&",l=await L.get(n);return p=l.data.totalHits,l.data.hits}function r(){w.classList.toggle("isHidden")}function I(e){return`<div class="photo-card">
    <a href="${e.largeImageURL}" class="gallery-link">
      <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" class="gallery-image" />
    </a>
    <div class="info">
      <p class="info-item">
        <b>Likes:</b> ${e.likes}
      </p>
      <p class="info-item">
        <b>Views:</b> ${e.views}
      </p>
      <p class="info-item">
        <b>Comments:</b> ${e.comments}
      </p>
      <p class="info-item">
        <b>Downloads:</b> ${e.downloads}
      </p>
    </div>
  </div>`}function H(){return a.map(I).join("")}function u(e=!1){const s=H();e?h.insertAdjacentHTML("beforeend",s):h.innerHTML=s}function E(){a.length===p&&(i.classList.add("isHidden"),d.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}function R(){let e={captionsData:"alt",captionDelay:250,captions:!0};c=new b(".container-image a",e),c.on("show.simplelightbox",function(){}),c.refresh()}
//# sourceMappingURL=commonHelpers.js.map
