import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r}from"./index.Be8AcK8B.js";const d=({posts:a})=>{const[s,t]=r.useState(null);return e.jsx("ul",{"aria-label":"Latest posts",className:"flex-1 space-y-5",children:a.map(l=>{const n=s===l.id;return e.jsx("li",{className:"w-full",children:e.jsx("a",{href:`/posts/${l.id}/`,className:"block",onMouseDown:()=>t(l.id),onTouchStart:()=>t(l.id),children:e.jsxs("div",{className:`
                                    rounded-2xl px-3 py-2 flex items-center gap-x-3
                                    transition-colors duration-150 ease-in-out
                                    outline outline-1 outline-blue-100 dark:outline-neutral-300 outline-offset-2 dark:outline-offset-0
                                    
                                  ${n?"font-semibold  bg-slate-200 text-cyan-700 dark:text-prnd-neon/70 dark:bg-neutral-700/50":"font-normal bg-zinc-100 dark:bg-neutral-800/50"}

                                      lg:hover:bg-slate-200
                                      lg:dark:hover:bg-neutral-700/50
                                      
                                      lg:hover:font-semibold
                                      lg:hover:text-cyan-700
                                      lg:dark:hover:text-prnd-neon/70
                                  `,children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center gap-y-2 md:gap-x-5 w-full",children:[e.jsx("div",{className:"text-xs min-w-22 mb-1 md:mb-0 font-mono sm:transition-normal",children:l.pubDate}),e.jsx("div",{className:"text-base",children:l.title})]}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"ml-auto w-5 h-5 shrink-0",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{d:"M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"})})]})})},l.id)})})};export{d as TopPosts};
