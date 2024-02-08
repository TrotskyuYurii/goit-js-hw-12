import{i as c,a as L,S as b}from"./assets/vendor-951421c8.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const g of s.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&l(g)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();const v=document.querySelector("form"),w=document.getElementById("searchImageText"),h=document.querySelector(".container-image"),r=document.getElementById("loadMoreButton");let p=1,a,f=0,u="";r.addEventListener("click",e=>{const o=document.querySelector(".photo-card").getBoundingClientRect().height;p+=1,i(),y(u).then(n=>{a=n,a.length===0?(i(),c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),d(),r.classList.add("isHidden")):(i(),r.classList.remove("isHidden"),a.push(...n),d(!0),R(),m(),window.scrollBy({top:o*2,behavior:"smooth"}))})});v.addEventListener("submit",e=>{if(e.preventDefault(),u=document.getElementById("searchImage").value,u.trim()===""){c.info({message:"Please enter what you want to find!",position:"topRight"});return}else p=1,i(),y(u).then(n=>{if(a=n,a.length===0)i(),c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),d(),r.classList.add("isHidden");else if(f<=15){i(),d(),r.classList.add("isHidden"),m(),c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}else i(),r.classList.remove("isHidden"),d(),m()}).catch(n=>{console.log(n)})});async function y(e){const n="https://pixabay.com/api/?key="+"25736683-f5d7a17cce89782c978955728"+"&q="+encodeURIComponent(e)+"&image_type=photo&orientation=horizontal&safe_search=true&page="+p+"&per_page=15&",l=await L.post(n);return f=l.data.totalHits,l.data.hits}function i(){w.classList.toggle("isHidden")}function I(e){return`<div class="photo-card">
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
  </div>`}function H(){return a.map(I).join("")}function d(e=!1){const o=H();e?h.insertAdjacentHTML("beforeend",o):h.innerHTML=o}function R(){a.length===f&&(r.classList.add("isHidden"),c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}function m(){let e={captionsData:"alt",captionDelay:250,captions:!0},o=new b(".container-image a",e);o.on("show.simplelightbox",function(){}),o.refresh()}
//# sourceMappingURL=commonHelpers.js.map
