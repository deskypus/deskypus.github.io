let e;async function t(){let t=await fetch("https://api.github.com/repos/pulumi-desktop/app/releases/latest");if(200!==t.status)throw Error(`response does not indicate a success: ${t.statusText}`);e=await t.json()}window.fetch?t().then(()=>(function(){if(!e)return;let t=document.getElementsByClassName("download-btn");for(let s=0;s<t.length;s++){let r;let a=t[s],i=a.dataset.os,h=a.dataset.arch;switch(i){case"linux":r=e.assets.find(e=>e.name.endsWith("tar.gz"));break;case"darwin":r=h?e.assets.find(e=>e.name.includes(h)&&e.name.endsWith("dmg")):e.assets.find(e=>!e.name.includes("arm64")&&e.name.endsWith("dmg"));break;case"windows":r=e.assets.find(e=>e.name.endsWith("exe"));break;default:throw Error(`Unknown OS type ${i}`)}if(r){a.href=r.browser_download_url,a.removeAttribute("disabled");let t=`Version ${e.tag_name}`,s="version-tooltip-target";if(a.classList.contains(s))a.dataset.tooltip=t;else{let e=document.querySelector(`.${i}.${s}`);if(!e){console.warn("Did not find a target el for the version tooltip");return}e.dataset.tooltip=t}}}})()).catch(e=>console.error("Failed to fetch the latest version",e)):console.error("Browser does not support fetch!"),({_scheme:"auto",buttonsTarget:".theme-switcher",init(){this.scheme=this._scheme,this.initSwitchers()},get preferedColorScheme(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"},initSwitchers(){document.querySelectorAll(this.buttonsTarget).forEach(e=>{e.addEventListener("click",()=>{"dark"==this.scheme?this.scheme="light":this.scheme="dark",e.setAttribute("aria-checked",`${e.checked}`)},!1),e.checked="dark"===this._scheme,e.setAttribute("aria-checked",`${e.checked}`)})},set scheme(scheme){"auto"==scheme?"dark"==this.preferedColorScheme?this._scheme="dark":this._scheme="light":("dark"==scheme||"light"==scheme)&&(this._scheme=scheme),this.applyScheme()},get scheme(){return this._scheme},applyScheme(){var e;null===(e=document.querySelector("html"))||void 0===e||e.setAttribute("data-theme",this.scheme)}}).init();
//# sourceMappingURL=index.2d2603fa.js.map
