import{i as u,a as h,S as y}from"./assets/vendor-951421c8.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const m of s.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&r(m)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();const L=document.querySelector("form"),b=document.getElementById("searchImageText"),g=document.querySelector(".container-image"),i=document.getElementById("loadMoreButton");let l=1,a;i.addEventListener("click",e=>{l+=1,p(localStorage.getItem("searchImage")).then(o=>{a=o,a.length===0?(c(),u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),d(),i.classList.add("isHidden")):(c(),i.classList.remove("isHidden"),a.push(...o),d(!0),f())})});L.addEventListener("submit",e=>{e.preventDefault();const n=document.getElementById("searchImage").value;if(n.trim()===""){u.info({message:"Please enter what you want to find!",position:"topRight"});return}else l=1,localStorage.setItem("searchImage",n.trim()),c(),p(n).then(r=>{a=r,a.length===0?(c(),u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),d(),i.classList.add("isHidden")):(c(),i.classList.remove("isHidden"),d(),f())}).catch(r=>{console.log(r)})});async function p(e){console.log(e,l);const n="https://pixabay.com/api/?key="+"25736683-f5d7a17cce89782c978955728"+"&q="+encodeURIComponent(e)+"&image_type=photo&orientation=horizontal&safe_search=true&page="+l+"&per_page=15&";return(await h.post(n)).data.hits}function c(){b.classList.toggle("isHidden")}function I(e){return`<div class="photo-card">
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
  </div>`}function v(){return a.map(I).join("")}function d(e=!1){const o=v();e?g.insertAdjacentHTML("beforeend",o):g.innerHTML=o}function f(){let e={captionsData:"alt",captionDelay:250,captions:!0},o=new y(".container-image a",e);o.on("show.simplelightbox",function(){}),o.refresh()}
//# sourceMappingURL=commonHelpers.js.map
