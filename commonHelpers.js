import{i as l,a as d,S as p}from"./assets/vendor-951421c8.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const m=document.querySelector("form"),f=document.getElementById("searchImageText"),g=document.querySelector(".container-image"),h=document.getElementById("loadMoreButton");let y=1,c;m.addEventListener("submit",e=>{e.preventDefault();const r=document.getElementById("searchImage").value;if(r.trim()===""){l.info({message:"Please enter what you want to find!",position:"topRight"});return}else a(),L(r).then(s=>{c=s,c.length===0?(a(),l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),u()):(a(),b(),u(),v())}).catch(s=>{console.log(s)})});async function L(e){const r="https://pixabay.com/api/?key="+"25736683-f5d7a17cce89782c978955728"+"&q="+encodeURIComponent(e)+"&image_type=photo&orientation=horizontal&safe_search=true&page="+y+"&per_page=15&";return(await d.post(r)).data.hits}function a(){f.classList.toggle("isHidden")}function b(){h.classList.toggle("isHidden")}function w(e){return`<div class="photo-card">
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
  </div>`}function I(){return c.map(w).join("")}function u(){const e=I();g.innerHTML=e}function v(){let e={captionsData:"alt",captionDelay:250,captions:!0},n=new p(".container-image a",e);n.on("show.simplelightbox",function(){}),n.refresh()}
//# sourceMappingURL=commonHelpers.js.map
