import{i as l,a as y,S as L}from"./assets/vendor-951421c8.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const b=document.querySelector("form"),I=document.getElementById("searchImageText"),p=document.querySelector(".container-image"),a=document.getElementById("loadMoreButton");let g=1,c,f=0;a.addEventListener("click",e=>{i(),g+=1,h(localStorage.getItem("searchImage")).then(o=>{c=o,c.length===0?(i(),l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),d(),a.classList.add("isHidden")):(i(),a.classList.remove("isHidden"),c.push(...o),d(!0),H(),m())})});b.addEventListener("submit",e=>{e.preventDefault();const r=document.getElementById("searchImage").value;if(r.trim()===""){l.info({message:"Please enter what you want to find!",position:"topRight"});return}else g=1,localStorage.setItem("searchImage",r.trim()),i(),h(r).then(n=>{if(c=n,c.length===0)i(),l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),d(),a.classList.add("isHidden");else if(f<=15){i(),d(),a.classList.add("isHidden"),m(),l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}else i(),a.classList.remove("isHidden"),d(),m()}).catch(n=>{console.log(n)})});async function h(e){const r="https://pixabay.com/api/?key="+"25736683-f5d7a17cce89782c978955728"+"&q="+encodeURIComponent(e)+"&image_type=photo&orientation=horizontal&safe_search=true&page="+g+"&per_page=15&",n=await y.post(r);return f=n.data.totalHits,n.data.hits}function i(){I.classList.toggle("isHidden")}function v(e){return`<div class="photo-card">
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
  </div>`}function w(){return c.map(v).join("")}function d(e=!1){const o=w();e?p.insertAdjacentHTML("beforeend",o):p.innerHTML=o}function H(){c.length===f&&(a.classList.add("isHidden"),l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}function m(){let e={captionsData:"alt",captionDelay:250,captions:!0},o=new L(".container-image a",e);o.on("show.simplelightbox",function(){}),o.refresh()}
//# sourceMappingURL=commonHelpers.js.map
