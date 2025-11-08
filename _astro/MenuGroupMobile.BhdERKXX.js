import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as o}from"./index.Be8AcK8B.js";const l=({opened:t,setIsOpened:n})=>{const s=[{id:"home",path:"/",label:"Home"},{id:"posts",path:"/posts",label:"Posts"},{id:"about",path:"/about",label:"About"},{id:"search",path:"/search",label:"Search"}];return e.jsx("div",{className:`
                fixed top-[65px] right-0
                h-[calc(100vh-65px)] w-full overflow-y-auto
                bg-gray-50 dark:bg-neutral-900 z-600
                transform transition-transform duration-450 ease-in-out
                ${t?"translate-x-0":"translate-x-full"}`,children:e.jsx("nav",{className:"flex flex-col divide-y divide-neutral-700",children:s.map(a=>e.jsx("a",{href:a.path,onClick:()=>n(r=>!r),className:`
                            block px-[2%]
                            py-3 sm:py-4 md:py-5
                            text-[14px] sm:text-[15px] md:text-[16px] font-medium
                            text-neutral-800
                            dark:text-neutral-50
                            hover:text-prnd-neon
                            focus-visible:outline-none focus-visible:ring-2
                            focus-visible:ring-prnd-neon`,children:a.label},a.id))})})},i=({opened:t,setIsOpened:n})=>{const s=()=>{n(a=>!a)};return e.jsx("button",{type:"button","aria-label":t?"Close menu":"Open menu",onClick:s,className:`
                inline-flex h-11 w-11 items-center justify-center
                rounded-lg focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-prnd-accent focus-visible:ring-offset-2`,children:e.jsxs("span",{className:"relative block h-5 w-7",children:[e.jsx("span",{className:`absolute left-0 top-0 block h-0.5 w-7 rounded bg-neutral-800 dark:bg-neutral-50 transition-transform duration-300 ${t?"rotate-45 translate-y-2.5":""}`}),e.jsx("span",{className:`absolute left-0 top-2.5 block h-0.5 w-7 rounded bg-neutral-800 dark:bg-neutral-50 transition-opacity duration-300 ${t?"opacity-0":"opacity-100"}`}),e.jsx("span",{className:`absolute right-0 top-5 block h-0.5 w-5 rounded bg-neutral-800 dark:bg-neutral-50 transition-transform duration-300 ${t?"-rotate-45 -translate-y-2.5 w-7":""}`})]})})},d=()=>{const[t,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{opened:t,setIsOpened:n}),e.jsx(l,{opened:t,setIsOpened:n})]})};export{d as MenuGroupMobile};
