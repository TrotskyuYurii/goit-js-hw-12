import{i as m,a as g,S as f}from"./assets/vendor-951421c8.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const h=document.querySelector("form"),y=document.getElementById("searchImageText"),L=document.querySelector(".container-image"),l=document.getElementById("loadMoreButton");let a=1,d;l.addEventListener("click",e=>{a+=1,p(localStorage.getItem("searchImage"))});h.addEventListener("submit",e=>{e.preventDefault();const s=document.getElementById("searchImage").value;if(s.trim()===""){m.info({message:"Please enter what you want to find!",position:"topRight"});return}else a=1,localStorage.setItem("searchImage",s.trim()),c(),p(s).then(r=>{d=r,d.length===0?(c(),m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),u(),l.classList.add("isHidden")):(c(),l.classList.remove("isHidden"),u(),v())}).catch(r=>{console.log(r)})});async function p(e){console.log(e,a);const s="https://pixabay.com/api/?key="+"25736683-f5d7a17cce89782c978955728"+"&q="+encodeURIComponent(e)+"&image_type=photo&orientation=horizontal&safe_search=true&page="+a+"&per_page=15&";return(await g.post(s)).data.hits}function c(){y.classList.toggle("isHidden")}function b(e){return`<div class="photo-card">
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
  </div>`}function I(){return d.map(b).join("")}function u(){const e=I();L.innerHTML=e}function v(){let e={captionsData:"alt",captionDelay:250,captions:!0},n=new f(".container-image a",e);n.on("show.simplelightbox",function(){}),n.refresh()}
//# sourceMappingURL=commonHelpers.js.map
