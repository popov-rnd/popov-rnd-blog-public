import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r}from"./index.Be8AcK8B.js";import{G as i}from"./iconBase.Db4UJpFa.js";function a(t){return i({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"},child:[]}]})(t)}const p=()=>{const[t,n]=r.useState(!1);r.useEffect(()=>{const o=()=>{const l=window.scrollY>window.innerHeight;n(l)};return window.addEventListener("scroll",o,{passive:!0}),()=>window.removeEventListener("scroll",o)},[]);const s=()=>{window.scrollTo({top:0,behavior:"smooth"})};return e.jsx("button",{onClick:s,"aria-label":"Scroll to top",className:`
                fixed bottom-6 right-6 z-[999]
                flex items-center justify-center
                w-12 h-12 rounded-full
                bg-neutral-700 dark:bg-neutral-200
                text-neutral-200 dark:text-neutral-700
                shadow-lg shadow-black/25
                transition-all duration-300
                active:scale-95
                lg:hidden
                ${t?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"}
              `,children:e.jsx(a,{className:"text-2xl active:text-prnd-neon"})})};export{p as ScrollToTopButton};
