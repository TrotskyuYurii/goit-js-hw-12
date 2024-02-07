import{i as l,a as y,S as L}from"./assets/vendor-951421c8.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();const b=document.querySelector("form"),I=document.getElementById("searchImageText"),f=document.querySelector(".container-image"),a=document.getElementById("loadMoreButton");let m=1,c,p=0;a.addEventListener("click",e=>{const o=document.querySelector(".photo-card").getBoundingClientRect().height;m+=1,i(),h(localStorage.getItem("searchImage")).then(n=>{c=n,c.length===0?(i(),l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),d(),a.classList.add("isHidden")):(i(),a.classList.remove("isHidden"),c.push(...n),d(!0),H(),g(),window.scrollBy({top:o*2,behavior:"smooth"}))})});b.addEventListener("submit",e=>{e.preventDefault();const n=document.getElementById("searchImage").value;if(n.trim()===""){l.info({message:"Please enter what you want to find!",position:"topRight"});return}else m=1,localStorage.setItem("searchImage",n.trim()),i(),h(n).then(r=>{if(c=r,c.length===0)i(),l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),d(),a.classList.add("isHidden");else if(p<=15){i(),d(),a.classList.add("isHidden"),g(),l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}else i(),a.classList.remove("isHidden"),d(),g()}).catch(r=>{console.log(r)})});async function h(e){const n="https://pixabay.com/api/?key="+"25736683-f5d7a17cce89782c978955728"+"&q="+encodeURIComponent(e)+"&image_type=photo&orientation=horizontal&safe_search=true&page="+m+"&per_page=15&",r=await y.post(n);return p=r.data.totalHits,r.data.hits}function i(){I.classList.toggle("isHidden")}function v(e){return`<div class="photo-card">
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
  </div>`}function w(){return c.map(v).join("")}function d(e=!1){const o=w();e?f.insertAdjacentHTML("beforeend",o):f.innerHTML=o}function H(){c.length===p&&(a.classList.add("isHidden"),l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}function g(){let e={captionsData:"alt",captionDelay:250,captions:!0},o=new L(".container-image a",e);o.on("show.simplelightbox",function(){}),o.refresh()}
//# sourceMappingURL=commonHelpers.js.map
