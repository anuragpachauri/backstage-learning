(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3402,1472],{67296:(De,k,a)=>{"use strict";a.d(k,{r:()=>T});var t=a(14041),M=a(95208);const N=(0,t.lazy)(()=>a.e(7434).then(a.bind(a,97434)).then(w=>({default:w.RealLogViewer})));function T(w){const{Progress:G}=(0,M.n)().getComponents();return t.createElement(t.Suspense,{fallback:t.createElement(G,null)},t.createElement(N,{...w}))}},33402:(De,k,a)=>{"use strict";a.d(k,{b:()=>Je,W:()=>gt});var t=a(14041),M=a(18690),N=a(82326),T=a(11618),w=a(66839),G=a(74378),B=a(93285),W=a(42899),z=a(4387),ue=a(13660),E=a(15246),L=a(699),Y=a(37281),K=a(14158),$=a(97214),Q=a(64398),te=a(16654),U=a(18139),I=a(54195),ce=a(72814),_=a(45250),X=a(17749);const v=t.createElement(z.A,{animation:"wave",variant:"text",height:40}),de=pe=>{const{children:ae}=pe,ge=(0,T.YR)(),we=(0,U.gf)(I.U),{title:J,setTitle:R,subtitle:re,setSubtitle:fe,entityRef:Le,metadata:{value:p,loading:d},entityMetadata:{value:h,loading:g}}=(0,w.V)();(0,t.useEffect)(()=>{p&&(R(p.site_name),fe(()=>{let{site_description:Ce}=p;return(!Ce||Ce==="None")&&(Ce=""),Ce}))},[p,R,fe]);const H=we.getOptional("app.title")||"Backstage",ye=[J,re,H].filter(Boolean).join(" | "),{locationMetadata:se,spec:qe}=h||{},et=qe?.lifecycle,Me=h?(0,L.t)(h,$.vv):[],vt=(0,ce.S)(X.rQ)(),Et=t.createElement(t.Fragment,null,t.createElement(Q.S,{label:(0,_.capitalize)(h?.kind||"entity"),value:t.createElement(Y.z,{color:"inherit",entityRef:Le,title:h?.metadata.title,defaultKind:"Component"})}),Me.length>0&&t.createElement(Q.S,{label:"Owner",value:t.createElement(K.i,{color:"inherit",entityRefs:Me,defaultKind:"group"})}),et?t.createElement(Q.S,{label:"Lifecycle",value:String(et)}):null,se&&se.type!=="dir"&&se.type!=="file"?t.createElement(Q.S,{label:"",value:t.createElement(W.A,{container:!0,direction:"column",alignItems:"center"},t.createElement(W.A,{style:{padding:0},item:!0},t.createElement(ue.A,{style:{marginTop:"-25px"}})),t.createElement(W.A,{style:{padding:0},item:!0},"Source")),url:se.target}):null);return!g&&h===void 0||!d&&p===void 0?null:t.createElement(te.Y,{type:"Documentation",typeLink:vt,title:J||v,subtitle:re===""?void 0:re||v},t.createElement(B.A,{titleTemplate:"%s"},t.createElement("title",null,ye)),Et,ae,ge.renderComponentsByLocation(E.e.Header))};var Ee=a(84893),Ne=a(76888),Ge=a(85408),Ye=a(12554),ke=a(95208),Ue=a(64947),Ke=a(95159),ht=a(61617),Xe=a(91042),it=a(76842),je=a(3399);const lt="/.backstage/auth/v1/cookie",_e=365*24*36e5;function pt(pe){const{pluginId:ae}=pe??{},ge=(0,U.gf)(Ke.a),we=(0,U.gf)(ht.I),J=(0,t.useMemo)(()=>"BroadcastChannel"in window?new BroadcastChannel(`${ae}-auth-cookie-expires-at`):null,[ae]),[R,re]=(0,Xe.Y)(async()=>{const d=`${await we.getBaseUrl(ae)}${lt}`,h=await ge.fetch(`${d}`,{credentials:"include"});if(!h.ok){if(h.status===404)return{expiresAt:new Date(Date.now()+_e)};throw await je.o3.fromResponse(h)}const g=await h.json();if(!g.expiresAt)throw new Error("No expiration date found in response");return g});(0,it.u)(re.execute);const fe=(0,t.useCallback)(()=>{re.execute()},[re]),Le=(0,t.useCallback)(p=>{const d=(1+3*Math.random())*6e4,h=Date.parse(p.expiresAt)-Date.now()-d,g=setTimeout(fe,h);return()=>clearTimeout(g)},[fe]);return(0,t.useEffect)(()=>{if(R.status!=="success"||!R.result)return()=>{};J?.postMessage({action:"COOKIE_REFRESH_SUCCESS",payload:R.result});let p=Le(R.result);const d=h=>{const{action:g,payload:H}=h.data;g==="COOKIE_REFRESH_SUCCESS"&&(p(),p=Le(H))};return J?.addEventListener("message",d),()=>{p(),J?.removeEventListener("message",d)}},[R,Le,J]),R.status==="not-executed"?{status:"loading"}:R.status==="loading"&&!R.result?{status:"loading"}:R.status==="loading"&&R.error?{status:"loading"}:R.status==="error"&&R.error?{status:"error",error:R.error,retry:fe}:{status:"success",data:R.result}}function Be(pe){const{children:ae,...ge}=pe,we=(0,ke.n)(),{Progress:J}=we.getComponents(),R=pt(ge);return R.status==="loading"?t.createElement(J,null):R.status==="error"?t.createElement(Ye.b,{error:R.error},t.createElement(Ue.A,{variant:"outlined",onClick:R.retry},"Retry")):t.createElement(t.Fragment,null,ae)}var Oe=a(54917),Ze=a(98392),Qe=a(50868);const Je=pe=>{const{withSearch:ae,withHeader:ge=!0}=pe;return t.createElement(N.Y,{themeId:"documentation"},ge&&t.createElement(de,null),t.createElement(Ee.Z,null),t.createElement(G.p,{withSearch:ae}))},gt=pe=>{const ae=(0,Oe.A)(),ge=(0,Ze.A)({...ae,...pe.overrideThemeOptions||{}}),{kind:we,name:J,namespace:R}=(0,Ne.K)(X.Oc),{children:re,entityRef:fe={kind:we,name:J,namespace:R}}=pe,Le=(0,M.P1)();if(!re){const h=(Le?t.Children.toArray(Le.props.children):[]).flatMap(g=>g?.props?.children??[]).find(g=>!(0,Ge.E)(g,T.AF)&&!(0,Ge.E)(g,T.Wm));return t.createElement(Qe.A,{theme:ge},t.createElement(Be,{pluginId:"techdocs"},t.createElement(w.R,{entityRef:fe},h||t.createElement(Je,null))))}return t.createElement(Qe.A,{theme:ge},t.createElement(Be,{pluginId:"techdocs"},t.createElement(w.R,{entityRef:fe},({metadata:p,entityMetadata:d,onReady:h})=>t.createElement("div",{className:"techdocs-reader-page"},t.createElement(N.Y,{themeId:"documentation"},re instanceof Function?re({entityRef:fe,techdocsMetadataValue:p.value,entityMetadataValue:d.value,onReady:h}):re)))))}},74378:(De,k,a)=>{"use strict";a.d(k,{p:()=>st});var t=a(14041),M=a(42899),N=a(58837),T=a(66839),w=a(9394),G=a(91360),B=a(22856),W=a(96872);const z="TECH_DOCS_SHADOW_DOM_STYLE_LOAD",ue=e=>{(0,t.useEffect)(()=>{if(!e)return()=>{};const o=e.querySelectorAll('head > link[rel="stylesheet"]');let r=o?.length??0;const s=new CustomEvent(z);if(!r)return e.dispatchEvent(s),()=>{};const i=()=>{--r===0&&e.dispatchEvent(s)};return o?.forEach(c=>{c.addEventListener("load",i)}),()=>{o?.forEach(c=>{c.removeEventListener("load",i)})}},[e])},E=e=>{const[o,r]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{if(!e)return()=>{};r(!0);const s=e.style;s.setProperty("opacity","0");const i=()=>{r(!1),s.setProperty("opacity","1")};return e.addEventListener(z,i),()=>{e.removeEventListener(z,i)}},[e]),o},L=e=>{const{element:o,onAppend:r,children:s}=e,[i,c]=(0,t.useState)((0,w.vt)({...(0,B.A)(),insertionPoint:void 0}));ue(o);const m=E(o),b=(0,t.useCallback)(y=>{if(!o||!y)return;c((0,w.vt)({...(0,B.A)(),insertionPoint:o.querySelector("head")||void 0}));let C=y.shadowRoot;C||(C=y.attachShadow({mode:"open"})),C.replaceChildren(o),typeof r=="function"&&r(C)},[o,r]);return t.createElement(t.Fragment,null,m&&t.createElement(W.k,null),t.createElement(G.Ay,{jss:i,sheetsManager:new Map},t.createElement("div",{ref:b,"data-testid":"techdocs-native-shadowroot"}),s))};var Y=a(85639),K=a(41544),$=a(16454),Q=a(87437),te=a(78467),U=a(61783),I=a(33986);const ce=(0,N.A)(e=>({loading:{right:e.spacing(1),position:"absolute"}})),_=e=>o=>t.createElement(Q.Lt,{inheritParentContextIfAvailable:!0},t.createElement(e,{...o})),X=()=>{const e=ce();return t.createElement(te.A,{className:e.loading,"data-testid":"search-autocomplete-progressbar",color:"inherit",size:20})},v=_(function(o){const{loading:r,value:s,onChange:i=()=>{},options:c=[],getOptionLabel:m=D=>String(D),inputPlaceholder:b,inputDebounceTime:y,freeSolo:C=!0,fullWidth:A=!0,clearOnBlur:x=!1,"data-testid":S="search-autocomplete",...Te}=o,{setTerm:be}=(0,Q.SQ)(),ne=(0,t.useCallback)(D=>D?typeof D=="string"?D:m(D):"",[m]),Se=(0,t.useMemo)(()=>ne(s),[s,ne]),oe=(0,t.useCallback)((D,F,ee,xe)=>{be(ne(F)),i(D,F,ee,xe)},[ne,be,i]),V=(0,t.useCallback)(({InputProps:{ref:D,className:F,endAdornment:ee},InputLabelProps:xe,...Ie})=>t.createElement(I.I,{...Ie,ref:D,clearButton:!1,value:Se,placeholder:b,debounceTime:y,endAdornment:r?t.createElement(X,null):ee,InputProps:{className:F}}),[r,Se,b,y]);return t.createElement(U.Ay,{...Te,"data-testid":S,value:s,onChange:oe,options:c,getOptionLabel:m,renderInput:V,freeSolo:C,fullWidth:A,clearOnBlur:x})});var de=a(18690),Ee=a(41472);const Ne=e=>e?.document,Ge=e=>{const{entityId:o,entityTitle:r,debounceTime:s=150}=e,[i,c]=(0,t.useState)(!1),m=(0,de.Zp)(),{setFilters:b,term:y,result:{loading:C,value:A}}=(0,Q.SQ)(),[x,S]=(0,t.useState)([]);(0,t.useEffect)(()=>{let oe=!0;if(oe&&A){const V=A.results.slice(0,10);S(V)}return()=>{oe=!1}},[C,A]);const{kind:Te,name:be,namespace:ne}=o;(0,t.useEffect)(()=>{b(oe=>({...oe,kind:Te,namespace:ne,name:be}))},[Te,ne,be,b]);const Se=(oe,V)=>{if(Ne(V)){const{location:D}=V.document;m(D)}};return t.createElement(v,{"data-testid":"techdocs-search-bar",size:"small",open:i&&!!y,getOptionLabel:()=>"",filterOptions:oe=>oe,onClose:()=>{c(!1)},onOpen:()=>{c(!0)},onChange:Se,blurOnSelect:!0,noOptionsText:"No results found",value:null,options:x,renderOption:({document:oe,highlight:V})=>t.createElement(Ee.TechDocsSearchResultListItem,{result:oe,lineClamp:3,asListItem:!1,asLink:!1,title:oe.title,highlight:V}),loading:C,inputDebounceTime:s,inputPlaceholder:`Search ${r||o.name} docs`,freeSolo:!1})},Ye=e=>{const o={term:"",types:["techdocs"],pageCursor:"",filters:e.entityId};return t.createElement(Q.Lt,{initialState:o},t.createElement(Ge,{...e}))};var ke=a(64947),Ue=a(74219),Ke=a(67296),ht=a(73845),Xe=a(29365),it=a(72501),je=a(99703),lt=a(32881);const _e=(0,N.A)(e=>(0,je.A)({paper:{width:"100%",[e.breakpoints.up("sm")]:{width:"75%"},[e.breakpoints.up("md")]:{width:"50%"},padding:e.spacing(2.5)},root:{height:"100%",overflow:"hidden"},logs:{background:e.palette.background.default}})),pt=({buildLog:e,onClose:o})=>{const r=_e(),s=e.length===0?"Waiting for logs...":e.join(`
`);return t.createElement(M.A,{container:!0,direction:"column",className:r.root,spacing:0,wrap:"nowrap"},t.createElement(M.A,{item:!0,container:!0,justifyContent:"space-between",alignItems:"center",spacing:0,wrap:"nowrap"},t.createElement(it.A,{variant:"h5"},"Build Details"),t.createElement(Xe.A,{key:"dismiss",title:"Close the drawer",onClick:o,color:"inherit"},t.createElement(lt.A,null))),t.createElement(M.A,{item:!0,xs:!0},t.createElement(Ke.r,{text:s,classes:{root:r.logs}})))},Be=({buildLog:e})=>{const o=_e(),[r,s]=(0,t.useState)(!1);return t.createElement(t.Fragment,null,t.createElement(ke.A,{color:"inherit",onClick:()=>s(!0)},"Show Build Logs"),t.createElement(ht.Ay,{classes:{paper:o.paper},anchor:"right",open:r,onClose:()=>s(!1)},t.createElement(pt,{buildLog:e,onClose:()=>s(!1)})))};var Oe=a(18139),Ze=a(54195),Qe=a(52262);const Je=({errorMessage:e})=>{const o=(0,Oe.gf)(Ze.U).getOptionalString("techdocs.builder"),r=(0,Qe.s)(),{entityRef:s}=(0,T.V)(),i=(0,de.zy)();(0,t.useEffect)(()=>{const{pathname:m,search:b,hash:y}=i;r.captureEvent("not-found",`${m}${b}${y}`,{attributes:s})},[r,s,i]);let c="";return[void 0,"local"].includes(o)||(c="Note that techdocs.builder is not set to 'local' in your config, which means this Backstage app will not generate docs if they are not found. Make sure the project's docs are generated and published by some external process (e.g. CI/CD pipeline). Or change techdocs.builder to 'local' to generate docs from this Backstage instance."),t.createElement(K.M,{status:"404",statusMessage:e||"Documentation not found",additionalInfo:c})};var gt=a(73466),pe=a(28966),ae=a(49707);function ge({contentLoading:e,content:o,activeSyncState:r}){return e||r==="BUILD_READY_RELOAD"||!o&&r==="CHECKING"?"CHECKING":!o&&r==="BUILDING"?"INITIAL_BUILD":o?r==="BUILDING"?"CONTENT_STALE_REFRESHING":r==="BUILD_READY"?"CONTENT_STALE_READY":r==="ERROR"?"CONTENT_STALE_ERROR":"CONTENT_FRESH":"CONTENT_NOT_FOUND"}function we(e,o){const r={...e};switch(o.type){case"sync":o.state==="CHECKING"&&(r.buildLog=[]),r.activeSyncState=o.state,r.syncError=o.syncError;break;case"contentLoading":r.contentLoading=!0,r.contentError=void 0;break;case"content":typeof o.path=="string"&&(r.path=o.path),r.contentLoading=!1,r.content=o.content,r.contentError=o.contentError;break;case"buildLog":r.buildLog=r.buildLog.concat(o.log);break;default:throw new Error}return["BUILD_READY","BUILD_READY_RELOAD"].includes(r.activeSyncState)&&["contentLoading","content"].includes(o.type)&&(r.activeSyncState="UP_TO_DATE",r.buildLog=[]),r}function J(e,o,r,s){const[i,c]=(0,t.useReducer)(we,{activeSyncState:"CHECKING",path:s,contentLoading:!0,buildLog:[]}),m=(0,Oe.gf)(ae.s),{retry:b}=(0,pe.A)(async()=>{c({type:"contentLoading"});try{const A=await m.getEntityDocs({kind:e,namespace:o,name:r},s);return c({type:"content",content:A,path:s}),A}catch(A){c({type:"content",contentError:A,path:s})}},[m,e,o,r,s]),y=(0,t.useRef)({content:void 0,reload:()=>{}});return y.current={content:i.content,reload:b},(0,gt.A)(async()=>{c({type:"sync",state:"CHECKING"});const A=setTimeout(()=>{c({type:"sync",state:"BUILDING"})},1e3);try{switch(await m.syncEntityDocs({kind:e,namespace:o,name:r},S=>{c({type:"buildLog",log:S})})){case"updated":y.current.content?c({type:"sync",state:"BUILD_READY"}):(y.current.reload(),c({type:"sync",state:"BUILD_READY_RELOAD"}));break;case"cached":c({type:"sync",state:"UP_TO_DATE"});break;default:c({type:"sync",state:"ERROR",syncError:new Error("Unexpected return state")});break}}catch(x){c({type:"sync",state:"ERROR",syncError:x})}finally{clearTimeout(A)}},[e,r,o,m,c,y]),{state:(0,t.useMemo)(()=>ge({activeSyncState:i.activeSyncState,contentLoading:i.contentLoading,content:i.content}),[i.activeSyncState,i.content,i.contentLoading]),contentReload:b,path:i.path,content:i.content,contentErrorMessage:i.contentError?.toString(),syncErrorMessage:i.syncError?.toString(),buildLog:i.buildLog}}const R=(0,t.createContext)({}),re=()=>(0,t.useContext)(R),fe=e=>{const{children:o}=e,{"*":r=""}=(0,de.g)(),{entityRef:s}=(0,T.V)(),{kind:i,namespace:c,name:m}=s,b=J(i,c,m,r);return t.createElement(R.Provider,{value:b},o instanceof Function?o(b):o)},Le=e=>o=>t.createElement(fe,null,t.createElement(e,{...o})),p=(0,N.A)(e=>({root:{marginBottom:e.spacing(2)},message:{wordBreak:"break-word",overflowWrap:"anywhere"}})),d=()=>{let e=null;const o=p(),{state:r,contentReload:s,contentErrorMessage:i,syncErrorMessage:c,buildLog:m}=re();return r==="INITIAL_BUILD"&&(e=t.createElement(Ue.A,{classes:{root:o.root},variant:"outlined",severity:"info",icon:t.createElement(te.A,{size:"24px"}),action:t.createElement(Be,{buildLog:m})},"Documentation is accessed for the first time and is being prepared. The subsequent loads are much faster.")),r==="CONTENT_STALE_REFRESHING"&&(e=t.createElement(Ue.A,{variant:"outlined",severity:"info",icon:t.createElement(te.A,{size:"24px"}),action:t.createElement(Be,{buildLog:m}),classes:{root:o.root}},"A newer version of this documentation is being prepared and will be available shortly.")),r==="CONTENT_STALE_READY"&&(e=t.createElement(Ue.A,{variant:"outlined",severity:"success",action:t.createElement(ke.A,{color:"inherit",onClick:()=>s()},"Refresh"),classes:{root:o.root}},"A newer version of this documentation is now available, please refresh to view.")),r==="CONTENT_STALE_ERROR"&&(e=t.createElement(Ue.A,{variant:"outlined",severity:"error",action:t.createElement(Be,{buildLog:m}),classes:{root:o.root,message:o.message}},"Building a newer version of this documentation failed."," ",c)),r==="CONTENT_NOT_FOUND"&&(e=t.createElement(t.Fragment,null,c&&t.createElement(Ue.A,{variant:"outlined",severity:"error",action:t.createElement(Be,{buildLog:m}),classes:{root:o.root,message:o.message}},"Building a newer version of this documentation failed."," ",c),t.createElement(Je,{errorMessage:i}))),e};var h=a(5893),g=a(54917),H=a(54934),ye=a(71651),se=a.n(ye);const qe=/main\.[A-Fa-f0-9]{8}\.min\.css$/,et=/^https:\/\/fonts\.googleapis\.com/,Me=/^https:\/\/fonts\.gstatic\.com/,vt=e=>e.nodeName==="LINK",Et=e=>{const o=e?.getAttribute("href")||"",r=o.match(qe),s=o.match(et),i=o.match(Me);return r||s||i},Pt=e=>(vt(e)&&!Et(e)&&e.remove(),e),tt=e=>e.nodeName==="IFRAME",Ce=(e,o)=>{const r=e.getAttribute("src")||"";try{const{host:s}=new URL(r);return o.includes(s)}catch{return!1}},Kt=e=>o=>(tt(o)&&!Ce(o,e)&&o.remove(),o),Xt=()=>{const e=(0,Oe.gf)(Ze.U);return(0,t.useMemo)(()=>e.getOptionalConfig("techdocs.sanitizer"),[e])},jt=()=>{const e=Xt();return(0,t.useCallback)(async o=>{const r=e?.getOptionalStringArray("allowedIframeHosts");se().addHook("beforeSanitizeElements",Pt);const s=["link","meta"];return r&&(s.push("iframe"),se().addHook("beforeSanitizeElements",Kt(r))),se().addHook("uponSanitizeElement",(i,c)=>{c.tagName==="meta"&&(i.getAttribute("http-equiv")==="refresh"&&i.getAttribute("content")?.includes("url=")||i.parentNode?.removeChild(i))}),se().addHook("uponSanitizeAttribute",(i,c)=>{i.tagName!=="meta"&&(c.attrName==="http-equiv"||c.attrName==="content")&&i.removeAttribute(c.attrName)}),se().sanitize(o.outerHTML,{ADD_TAGS:s,FORBID_TAGS:["style"],ADD_ATTR:["http-equiv","content"],WHOLE_DOCUMENT:!0,RETURN_DOM:!0})},[e])};var Zt=a(65901),q=a(268),ie=({theme:e})=>`
/*==================  Variables  ==================*/
/*
  As the MkDocs output is rendered in shadow DOM, the CSS variable definitions on the root selector are not applied. Instead, they have to be applied on :host.
  As there is no way to transform the served main*.css yet (for example in the backend), we have to copy from main*.css and modify them.
*/

:host {
  /* FONT */
  --md-default-fg-color: ${e.palette.text.primary};
  --md-default-fg-color--light: ${e.palette.text.secondary};
  --md-default-fg-color--lighter: ${(0,q.a)(e.palette.text.secondary,.7)};
  --md-default-fg-color--lightest: ${(0,q.a)(e.palette.text.secondary,.3)};

  /* BACKGROUND */
  --md-default-bg-color:${e.palette.background.default};
  --md-default-bg-color--light: ${e.palette.background.paper};
  --md-default-bg-color--lighter: ${(0,q.a)(e.palette.background.paper,.7)};
  --md-default-bg-color--lightest: ${(0,q.a)(e.palette.background.paper,.3)};

  /* PRIMARY */
  --md-primary-fg-color: ${e.palette.primary.main};
  --md-primary-fg-color--light: ${e.palette.primary.light};
  --md-primary-fg-color--dark: ${e.palette.primary.dark};
  --md-primary-bg-color: ${e.palette.primary.contrastText};
  --md-primary-bg-color--light: ${(0,q.a)(e.palette.primary.contrastText,.7)};

  /* ACCENT */
  --md-accent-fg-color: var(--md-primary-fg-color);
  --md-accent-fg-color--transparent: ${(0,q.X4)(e.palette.primary.main,.1)};
  --md-accent-bg-color: var(--md-primary-bg-color);
  --md-accent-bg-color--light: var(--md-primary-bg-color--light);

  /* SHADOW */
  --md-shadow-z1: ${e.shadows[1]};
  --md-shadow-z2: ${e.shadows[2]};
  --md-shadow-z3: ${e.shadows[3]};

  /* EXTENSIONS */
  --md-admonition-fg-color: var(--md-default-fg-color);
  --md-admonition-bg-color: var(--md-default-bg-color);
  /* Admonitions and others are using SVG masks to define icons. These masks are defined as CSS variables. */
  --md-admonition-icon--note: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z"/></svg>');
  --md-admonition-icon--abstract: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 5h16v2H4V5m0 4h16v2H4V9m0 4h16v2H4v-2m0 4h10v2H4v-2z"/></svg>');
  --md-admonition-icon--info: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 002 12a10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z"/></svg>');
  --md-admonition-icon--tip: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.55 11.2c-.23-.3-.5-.56-.76-.82-.65-.6-1.4-1.03-2.03-1.66C13.3 7.26 13 4.85 13.91 3c-.91.23-1.75.75-2.45 1.32-2.54 2.08-3.54 5.75-2.34 8.9.04.1.08.2.08.33 0 .22-.15.42-.35.5-.22.1-.46.04-.64-.12a.83.83 0 01-.15-.17c-1.1-1.43-1.28-3.48-.53-5.12C5.89 10 5 12.3 5.14 14.47c.04.5.1 1 .27 1.5.14.6.4 1.2.72 1.73 1.04 1.73 2.87 2.97 4.84 3.22 2.1.27 4.35-.12 5.96-1.6 1.8-1.66 2.45-4.32 1.5-6.6l-.13-.26c-.2-.46-.47-.87-.8-1.25l.05-.01m-3.1 6.3c-.28.24-.73.5-1.08.6-1.1.4-2.2-.16-2.87-.82 1.19-.28 1.89-1.16 2.09-2.05.17-.8-.14-1.46-.27-2.23-.12-.74-.1-1.37.18-2.06.17.38.37.76.6 1.06.76 1 1.95 1.44 2.2 2.8.04.14.06.28.06.43.03.82-.32 1.72-.92 2.27h.01z"/></svg>');
  --md-admonition-icon--success: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>');
  --md-admonition-icon--question: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.07 11.25l-.9.92C13.45 12.89 13 13.5 13 15h-2v-.5c0-1.11.45-2.11 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41a2 2 0 00-2-2 2 2 0 00-2 2H8a4 4 0 014-4 4 4 0 014 4 3.2 3.2 0 01-.93 2.25M13 19h-2v-2h2M12 2A10 10 0 002 12a10 10 0 0010 10 10 10 0 0010-10c0-5.53-4.5-10-10-10z"/></svg>');
  --md-admonition-icon--warning: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 14h-2v-4h2m0 8h-2v-2h2M1 21h22L12 2 1 21z"/></svg>');
  --md-admonition-icon--failure: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12 6.47 2 12 2m3.59 5L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41 15.59 7z"/></svg>');
  --md-admonition-icon--danger: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.5 20l4.86-9.73H13V4l-5 9.73h3.5V20M12 2c2.75 0 5.1 1 7.05 2.95C21 6.9 22 9.25 22 12s-1 5.1-2.95 7.05C17.1 21 14.75 22 12 22s-5.1-1-7.05-2.95C3 17.1 2 14.75 2 12s1-5.1 2.95-7.05C6.9 3 9.25 2 12 2z"/></svg>');
  --md-admonition-icon--bug: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 12h-4v-2h4m0 6h-4v-2h4m6-6h-2.81a5.985 5.985 0 00-1.82-1.96L17 4.41 15.59 3l-2.17 2.17a6.002 6.002 0 00-2.83 0L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8z"/></svg>');
  --md-admonition-icon--example: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 13v-2h14v2H7m0 6v-2h14v2H7M7 7V5h14v2H7M3 8V5H2V4h2v4H3m-1 9v-1h3v4H2v-1h2v-.5H3v-1h1V17H2m2.25-7a.75.75 0 01.75.75c0 .2-.08.39-.21.52L3.12 13H5v1H2v-.92L4 11H2v-1h2.25z"/></svg>');
  --md-admonition-icon--quote: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 17h3l2-4V7h-6v6h3M6 17h3l2-4V7H5v6h3l-2 4z"/></svg>');
  --md-footnotes-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.42L5.83 13H21V7h-2z"/></svg>');
  --md-details-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.59 16.58 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.42z"/></svg>');
  --md-tasklist-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>');
  --md-tasklist-icon--checked: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>');
  --md-nav-icon--prev: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 11v2H8l5.5 5.5-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5 8 11h12z"/></svg>');
  --md-nav-icon--next: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.59 16.58 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.42z"/></svg>');
  --md-toc-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 9h14V7H3v2m0 4h14v-2H3v2m0 4h14v-2H3v2m16 0h2v-2h-2v2m0-10v2h2V7h-2m0 6h2v-2h-2v2z"/></svg>');
  --md-clipboard-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1z"/></svg>');
  --md-search-result-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h7c-.41-.25-.8-.56-1.14-.9-.33-.33-.61-.7-.86-1.1H6V4h7v5h5v1.18c.71.16 1.39.43 2 .82V8l-6-6m6.31 16.9c1.33-2.11.69-4.9-1.4-6.22-2.11-1.33-4.91-.68-6.22 1.4-1.34 2.11-.69 4.89 1.4 6.22 1.46.93 3.32.93 4.79.02L22 23.39 23.39 22l-3.08-3.1m-3.81.1a2.5 2.5 0 0 1-2.5-2.5 2.5 2.5 0 0 1 2.5-2.5 2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1-2.5 2.5z"/></svg>');
  --md-source-forks-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm0 2.122a2.25 2.25 0 1 0-1.5 0v.878A2.25 2.25 0 0 0 5.75 8.5h1.5v2.128a2.251 2.251 0 1 0 1.5 0V8.5h1.5a2.25 2.25 0 0 0 2.25-2.25v-.878a2.25 2.25 0 1 0-1.5 0v.878a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 5 6.25v-.878zm3.75 7.378a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm3-8.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z"/></svg>');
  --md-source-repositories-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 1 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 0 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 0 1 1-1h8zM5 12.25v3.25a.25.25 0 0 0 .4.2l1.45-1.087a.25.25 0 0 1 .3 0L8.6 15.7a.25.25 0 0 0 .4-.2v-3.25a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25z"/></svg>');
  --md-source-stars-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694v.001z"/></svg>');
  --md-source-version-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 7.775V2.75a.25.25 0 0 1 .25-.25h5.025a.25.25 0 0 1 .177.073l6.25 6.25a.25.25 0 0 1 0 .354l-5.025 5.025a.25.25 0 0 1-.354 0l-6.25-6.25a.25.25 0 0 1-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.75 1.75 0 0 1 1 7.775zM6 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>');
  --md-version-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc.--><path d="m310.6 246.6-127.1 128c-7.1 6.3-15.3 9.4-23.5 9.4s-16.38-3.125-22.63-9.375l-127.1-128C.224 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75s3.12 25.75-6.08 34.85z"/></svg>');
}

:host > * {
  /* CODE */
  --md-code-fg-color: ${e.palette.text.primary};
  --md-code-bg-color: ${e.palette.background.paper};
  --md-code-hl-color: ${(0,q.X4)(e.palette.warning.main,.5)};
  --md-code-hl-color--light: var(--md-code-hl-color);
  --md-code-hl-keyword-color: ${e.palette.type==="dark"?e.palette.primary.light:e.palette.primary.dark};
  --md-code-hl-function-color: ${e.palette.type==="dark"?e.palette.secondary.light:e.palette.secondary.dark};
  --md-code-hl-string-color: ${e.palette.type==="dark"?e.palette.success.light:e.palette.success.dark};
  --md-code-hl-number-color: ${e.palette.type==="dark"?e.palette.error.light:e.palette.error.dark};
  --md-code-hl-constant-color: var(--md-code-hl-function-color);
  --md-code-hl-special-color: var(--md-code-hl-function-color);
  --md-code-hl-name-color: var(--md-code-fg-color);
  --md-code-hl-comment-color: var(--md-default-fg-color--light);
  --md-code-hl-generic-color: var(--md-default-fg-color--light);
  --md-code-hl-variable-color: var(--md-default-fg-color--light);
  --md-code-hl-operator-color: var(--md-default-fg-color--light);
  --md-code-hl-punctuation-color: var(--md-default-fg-color--light);

  /* TYPESET */
  --md-typeset-font-size: 1rem;
  --md-typeset-color: var(--md-default-fg-color);
  --md-typeset-a-color: ${e.palette.link};
  --md-typeset-table-color: ${e.palette.text.primary};
  --md-typeset-table-color--light: ${(0,q.X4)(e.palette.text.primary,.5)};
  --md-typeset-del-color: ${e.palette.type==="dark"?(0,q.X4)(e.palette.error.dark,.5):(0,q.X4)(e.palette.error.light,.5)};
  --md-typeset-ins-color: ${e.palette.type==="dark"?(0,q.X4)(e.palette.success.dark,.5):(0,q.X4)(e.palette.success.light,.5)};
  --md-typeset-mark-color: ${e.palette.type==="dark"?(0,q.X4)(e.palette.warning.dark,.5):(0,q.X4)(e.palette.warning.light,.5)};
  --md-typeset-kbd-color: var(--md-code-bg-color);
  --md-typeset-kbd-accent-color var(--md-code-bg-color);
  --md-typeset-kbd-border-color: var(--md-default-fg-color--light);
}

@media screen and (max-width: 76.1875em) {
  :host > * {
    /* TYPESET */
    --md-typeset-font-size: .9rem;
  }
}

@media screen and (max-width: 600px) {
  :host > * {
    /* TYPESET */
    --md-typeset-font-size: .7rem;
  }
}

  --md-footer-bg-color: var(--md-default-bg-color);
  --md-footer-bg-color--dark: var(--md-default-bg-color);
`,nt=({theme:e})=>`
/*==================  Reset  ==================*/

body {
  --md-text-color: var(--md-default-fg-color);
  --md-text-link-color: var(--md-accent-fg-color);
  --md-text-font-family: ${e.typography.fontFamily};
  font-family: var(--md-text-font-family);
  background-color: unset;
}
`;const yt="224px";var Qt=({theme:e,sidebar:o})=>`
/*==================  Layout  ==================*/

/* mkdocs material v9 compat */
.md-nav__title {
  color: var(--md-default-fg-color);
}

.md-grid {
  max-width: 100%;
  margin: 0;
}

.md-nav {
  font-size: calc(var(--md-typeset-font-size) * 0.9);
}
.md-nav__link {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.md-nav__icon {
  height: 20px !important;
  width: 20px !important;
  margin-left:${e.spacing(1)}px;
}
.md-nav__icon svg {
  margin: 0;
  width: 20px !important;
  height: 20px !important;
}
.md-nav__icon:after {
  width: 20px !important;
  height: 20px !important;
}

.md-nav__item--active > .md-nav__link, a.md-nav__link--active {
  text-decoration: underline;
  color: var(--md-typeset-a-color);
}

.md-main__inner {
  margin-top: 0;
}

.md-sidebar {
  bottom: 75px;
  position: fixed;
  width: 16rem;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-color: rgb(193, 193, 193) #eee;
  scrollbar-width: thin;
}
.md-sidebar .md-sidebar__scrollwrap {
  width: calc(12.1rem);
  overflow-y: hidden;
}
.md-sidebar--secondary {
  right: ${e.spacing(3)}px;
}
.md-sidebar::-webkit-scrollbar {
  width: 5px;
}
.md-sidebar::-webkit-scrollbar-button {
  width: 5px;
  height: 5px;
}
.md-sidebar::-webkit-scrollbar-track {
  background: #eee;
  border: 1 px solid rgb(250, 250, 250);
  box-shadow: 0px 0px 3px #dfdfdf inset;
  border-radius: 3px;
}
.md-sidebar::-webkit-scrollbar-thumb {
  width: 5px;
  background: rgb(193, 193, 193);
  border: transparent;
  border-radius: 3px;
}
.md-sidebar::-webkit-scrollbar-thumb:hover {
  background: rgb(125, 125, 125);
}

.md-content {
  max-width: calc(100% - 16rem * 2);
  margin-left: 16rem;
  margin-bottom: 50px;
}

.md-footer {
  position: fixed;
  bottom: 0px;
  pointer-events: none;
}

.md-footer-nav__link, .md-footer__link {
  pointer-events: all;
}

.md-footer__title {
  background-color: unset;
}
.md-footer-nav__link, .md-footer__link {
  width: 16rem;
}

.md-dialog {
  background-color: unset;
}

@media screen and (min-width: 76.25em) {
  .md-sidebar {
    height: auto;
  }
}

@media screen and (max-width: 76.1875em) {
  .md-nav {
    transition: none !important;
    background-color: var(--md-default-bg-color)
  }
  .md-nav--primary .md-nav__title {
    cursor: auto;
    color: var(--md-default-fg-color);
    font-weight: 700;
    white-space: normal;
    line-height: 1rem;
    height: auto;
    display: flex;
    flex-flow: column;
    row-gap: 1.6rem;
    padding: 1.2rem .8rem .8rem;
    background-color: var(--md-default-bg-color);
  }
  .md-nav--primary .md-nav__title~.md-nav__list {
    box-shadow: none;
  }
  .md-nav--primary .md-nav__title ~ .md-nav__list > :first-child {
    border-top: none;
  }
  .md-nav--primary .md-nav__title .md-nav__button {
    display: none;
  }
  .md-nav--primary .md-nav__title .md-nav__icon {
    color: var(--md-default-fg-color);
    position: static;
    height: auto;
    margin: 0 0 0 -0.2rem;
  }
  .md-nav--primary > .md-nav__title [for="none"] {
    padding-top: 0;
  }
  .md-nav--primary .md-nav__item {
    border-top: none;
  }
  .md-nav--primary :is(.md-nav__title,.md-nav__item) {
    font-size : var(--md-typeset-font-size);
  }
  .md-nav .md-source {
    display: none;
  }

  .md-sidebar {
    height: 100%;
  }
  .md-sidebar--primary {
    width: 12.1rem !important;
    z-index: 200;
    left: ${o.isPinned?`calc(-12.1rem + ${yt})`:"calc(-12.1rem + 72px)"} !important;
  }
  .md-sidebar--secondary:not([hidden]) {
    display: none;
  }

  .md-content {
    max-width: 100%;
    margin-left: 0;
  }

  .md-header__button {
    margin: 0.4rem 0;
    margin-left: 0.4rem;
    padding: 0;
  }

  .md-overlay {
    left: 0;
  }

  .md-footer {
    position: static;
    padding-left: 0;
  }
  .md-footer-nav__link {
    /* footer links begin to overlap at small sizes without setting width */
    width: 50%;
  }
}

@media screen and (max-width: 600px) {
  .md-sidebar--primary {
    left: -12.1rem !important;
    width: 12.1rem;
  }
}


@media print {
  .md-sidebar,
  #toggle-sidebar {
    display: none;
  }

  .md-content {
    margin: 0;
    width: 100%;
    max-width: 100%;
  }
}
`;const Jt=["h1","h2","h3","h4","h5","h6"],Nt=/(em)|(rem)/gi,kt=/var\(|\)/gi;var Re=({theme:e})=>`
/*==================  Typeset  ==================*/

.md-typeset {
  font-size: var(--md-typeset-font-size);
}

${Jt.reduce((o,r)=>{const s=e.typography.htmlFontSize??16,i=e.typography[r],{lineHeight:c,fontFamily:m,fontWeight:b,fontSize:y}=i,C=A=>{if(typeof A=="number")return C(`${A/s*.6}rem`);if(typeof A=="string"){if(A.match(kt)){const x=window.getComputedStyle(document.body).getPropertyValue(A.replaceAll(kt,""));if(x!=="")return C(x)}else if(A.match(Nt))return`calc(${A.replace(Nt,"")} * var(--md-typeset-font-size))`}return A};return o.concat(`
    .md-typeset ${r} {
      color: var(--md-default-fg-color);
      line-height: ${c};
      font-family: ${m};
      font-weight: ${b};
      font-size: ${C(y)};
    }
  `)},"")}

.md-typeset .md-content__button {
  color: var(--md-default-fg-color);
}

.md-typeset hr {
  border-bottom: 0.05rem dotted ${e.palette.divider};
}

.md-typeset details {
  font-size: var(--md-typeset-font-size) !important;
}
.md-typeset details summary {
  padding-left: 2.5rem !important;
}
.md-typeset details summary:before,
.md-typeset details summary:after {
  top: 50% !important;
  width: 20px !important;
  height: 20px !important;
  transform: rotate(0deg) translateY(-50%) !important;
}
.md-typeset details[open] > summary:after {
  transform: rotate(90deg) translateX(-50%) !important;
}

.md-typeset blockquote {
  color: var(--md-default-fg-color--light);
  border-left: 0.2rem solid var(--md-default-fg-color--light);
}

.md-typeset table:not([class]) {
  font-size: var(--md-typeset-font-size);
  border: 1px solid var(--md-default-fg-color);
  border-bottom: none;
  border-collapse: collapse;
}
.md-typeset table:not([class]) th {
  font-weight: bold;
}
.md-typeset table:not([class]) td, .md-typeset table:not([class]) th {
  border-bottom: 1px solid var(--md-default-fg-color);
}

.md-typeset pre > code::-webkit-scrollbar-thumb {
  background-color: hsla(0, 0%, 0%, 0.32);
}
.md-typeset pre > code::-webkit-scrollbar-thumb:hover {
  background-color: hsla(0, 0%, 0%, 0.87);
}

.md-typeset code {
  word-break: keep-all;
}
`,At=()=>`
/*==================  Animations  ==================*/
/*
  Disable CSS animations on link colors as they lead to issues in dark mode.
  The dark mode color theme is applied later and theirfore there is always an animation from light to dark mode when navigation between pages.
*/
.md-dialog, .md-nav__link, .md-footer__link, .md-typeset a, .md-typeset a::before, .md-typeset .headerlink {
  transition: none;
}
`,Tt=({theme:e})=>`
/*==================  Extensions  ==================*/

/* HIGHLIGHT */
.highlight .md-clipboard:after {
  content: unset;
}

.highlight .nx {
  color: ${e.palette.type==="dark"?"#ff53a3":"#ec407a"};
}

/* CODE HILITE */
.codehilite .gd {
  background-color: ${e.palette.type==="dark"?"rgba(248,81,73,0.65)":"#fdd"};
}

.codehilite .gi {
  background-color: ${e.palette.type==="dark"?"rgba(46,160,67,0.65)":"#dfd"};
}

/* TABBED */
.tabbed-set>input:nth-child(1):checked~.tabbed-labels>:nth-child(1),
.tabbed-set>input:nth-child(2):checked~.tabbed-labels>:nth-child(2),
.tabbed-set>input:nth-child(3):checked~.tabbed-labels>:nth-child(3),
.tabbed-set>input:nth-child(4):checked~.tabbed-labels>:nth-child(4),
.tabbed-set>input:nth-child(5):checked~.tabbed-labels>:nth-child(5),
.tabbed-set>input:nth-child(6):checked~.tabbed-labels>:nth-child(6),
.tabbed-set>input:nth-child(7):checked~.tabbed-labels>:nth-child(7),
.tabbed-set>input:nth-child(8):checked~.tabbed-labels>:nth-child(8),
.tabbed-set>input:nth-child(9):checked~.tabbed-labels>:nth-child(9),
.tabbed-set>input:nth-child(10):checked~.tabbed-labels>:nth-child(10),
.tabbed-set>input:nth-child(11):checked~.tabbed-labels>:nth-child(11),
.tabbed-set>input:nth-child(12):checked~.tabbed-labels>:nth-child(12),
.tabbed-set>input:nth-child(13):checked~.tabbed-labels>:nth-child(13),
.tabbed-set>input:nth-child(14):checked~.tabbed-labels>:nth-child(14),
.tabbed-set>input:nth-child(15):checked~.tabbed-labels>:nth-child(15),
.tabbed-set>input:nth-child(16):checked~.tabbed-labels>:nth-child(16),
.tabbed-set>input:nth-child(17):checked~.tabbed-labels>:nth-child(17),
.tabbed-set>input:nth-child(18):checked~.tabbed-labels>:nth-child(18),
.tabbed-set>input:nth-child(19):checked~.tabbed-labels>:nth-child(19),
.tabbed-set>input:nth-child(20):checked~.tabbed-labels>:nth-child(20) {
  color: var(--md-accent-fg-color);
  border-color: var(--md-accent-fg-color);
}

/* TASK-LIST */
.task-list-control .task-list-indicator::before {
  background-color: ${e.palette.action.disabledBackground};
}
.task-list-control [type="checkbox"]:checked + .task-list-indicator:before {
 background-color: ${e.palette.success.main};
}

/* ADMONITION */
.admonition {
  font-size: var(--md-typeset-font-size) !important;
}
.admonition .admonition-title {
  padding-left: 2.5rem !important;
}

.admonition .admonition-title:before {
  top: 50% !important;
  width: 20px !important;
  height: 20px !important;
  transform: translateY(-50%) !important;
}
`;const bt=[ie,nt,Qt,Re,At,Tt],qt=()=>(0,Zt.Ut)(),en=()=>{const e=qt(),o=(0,g.A)();return(0,t.useMemo)(()=>{const r={theme:o,sidebar:e};return bt.reduce((s,i)=>s+i(r),"")},[o,e])},tn=()=>{const e=en();return(0,t.useCallback)(o=>(o.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend",`<style>${e}</style>`),o),[e])},Ut=(e,o,r)=>{const s=e==="src"&&o.endsWith(".svg"),i=!o.match(/^([a-z]*:)?\/\//i),c=o.startsWith(r);return s&&(i||c)},nn=({techdocsStorageApi:e,entityId:o,path:r})=>async s=>{const i=await e.getApiOrigin(),c=async(m,b)=>{for(const y of m)if(y.hasAttribute(b)){const C=y.getAttribute(b);if(!C)return;const A=await e.getBaseUrl(C,o,r);if(Ut(b,C,i))try{const S=await(await fetch(A,{credentials:"include"})).text();y.setAttribute(b,`data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(S)))}`)}catch{y.setAttribute("alt",`Error: ${C}`)}else y.setAttribute(b,A)}};return await Promise.all([c(s.querySelectorAll("img"),"src"),c(s.querySelectorAll("script"),"src"),c(s.querySelectorAll("source"),"src"),c(s.querySelectorAll("link"),"href"),c(s.querySelectorAll("a[download]"),"href")]),s};var _t=a(78264),j=a(90292),Bt=a(52536),Z=a.n(Bt);let St;St=Promise.resolve().then(a.t.bind(a,25873,19));function P(e,o){St.then(r=>{"createRoot"in r?r.createRoot(o).render(e):r.render(e,o)})}const ot=e=>o=>{const r=o.querySelector('[title="Edit this page"]');if(!r||!r.href)return o;const s=new URL(r.href),i=e.byUrl(s);if(i?.type!=="github"&&i?.type!=="gitlab")return o;const c=o.querySelector("article>h1")?.childNodes[0].textContent||"",m=encodeURIComponent(`Documentation Feedback: ${c}`),b=encodeURIComponent(`Page source:
${r.href}

Feedback:`),y=i?.type==="github"?(0,_t.F)(s.href,"blob"):s.href,C=Z()(y),A=`/${C.organization}/${C.name}`,x=r.cloneNode();switch(i?.type){case"gitlab":x.href=`${s.origin}${A}/issues/new?issue[title]=${m}&issue[description]=${b}`;break;case"github":x.href=`${s.origin}${A}/issues/new?title=${m}&body=${b}`;break;default:return o}return P(t.createElement(j.A),x),x.style.paddingLeft="5px",x.title="Leave feedback for this page",x.id="git-feedback-link",r?.insertAdjacentElement("beforebegin",x),o};var wt=a(27326);const zt=()=>e=>{const o=e.querySelector('.md-header label[for="__drawer"]'),r=e.querySelector("article");if(!o||!r)return e;const s=o.cloneNode();return P(t.createElement(wt.A),s),s.id="toggle-sidebar",s.title="Toggle Sidebar",s.classList.add("md-content__button"),s.style.setProperty("padding","0 0 0 5px"),s.style.setProperty("margin","0.4rem 0 0.4rem 0.4rem"),r?.prepend(s),e},Lt=()=>e=>(((r,s)=>{Array.from(r).filter(i=>i.hasAttribute(s)).forEach(i=>{const c=i.getAttribute(s);if(c){c.match(/^https?:\/\//i)&&i.setAttribute("target","_blank");try{const m=Ct(window.location.href);i.setAttribute(s,new URL(c,m).toString())}catch{i.replaceWith(i.textContent||c)}}})})(Array.from(e.getElementsByTagName("a")),"href"),e);function Ct(e){const o=new URL(e);return!o.pathname.endsWith("/")&&!o.pathname.endsWith(".html")&&(o.pathname+="/"),o.toString()}const Ht=({baseUrl:e,onClick:o})=>r=>(Array.from(r.getElementsByTagName("a")).forEach(s=>{s.addEventListener("click",i=>{const m=s.getAttribute("href");m&&m.startsWith(e)&&!s.hasAttribute("download")&&(i.preventDefault(),o(i,m))})}),r);var Fe=a(7031),Rt=a(50868),ze=a(10437),xt=a(71677),Dt=a(36338);const We=(0,Fe.A)(e=>({tooltip:{fontSize:"inherit",color:e.palette.text.primary,margin:0,padding:e.spacing(.5),backgroundColor:"transparent",boxShadow:"none"}}))(xt.Ay),ct=()=>t.createElement(ze.A,null,t.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"})),dt=({text:e})=>{const[o,r]=(0,t.useState)(!1),[,s]=(0,Dt.A)(),i=(0,t.useCallback)(()=>{s(e),r(!0)},[e,s]),c=(0,t.useCallback)(()=>{r(!1)},[r]);return t.createElement(We,{title:"Copied to clipboard",placement:"left",open:o,onClose:c,leaveDelay:1e3},t.createElement(Xe.A,{style:{color:"inherit",position:"absolute"},className:"md-clipboard md-icon",onClick:i},t.createElement(ct,null)))},Ft=e=>o=>{const r=o.querySelectorAll("pre > code");for(const s of r){const i=s.textContent||"",c=document.createElement("div");s?.parentElement?.prepend(c),P(t.createElement(Rt.A,{theme:e},t.createElement(dt,{text:i})),c)}return o},Wt=()=>e=>(e.querySelector(".md-header")?.remove(),e),on=()=>e=>(e.querySelector(".md-footer .md-copyright")?.remove(),e.querySelector(".md-footer-copyright")?.remove(),e),mt=({onLoading:e,onLoaded:o})=>r=>(e(),r.addEventListener(z,function s(){o(),r.removeEventListener(z,s)}),r),at=()=>e=>(setTimeout(()=>{const o=e?.querySelectorAll("li.md-nav__item--active");o.length!==0&&(o.forEach(s=>{const i=s?.querySelector("input");i?.checked||i?.click()}),o[o.length-1].scrollIntoView())},200),e),He=async(e,o)=>{let r;if(typeof e=="string")r=new DOMParser().parseFromString(e,"text/html").documentElement;else if(e instanceof Element)r=e;else throw new Error("dom is not a recognized type");for(const s of o)r=await s(r);return r};var $e=a(38097);const $t=(0,N.A)(e=>({button:{color:e.palette.primary.light,textDecoration:"underline"}})),Vt=({message:e,handleButtonClick:o,autoHideDuration:r})=>{const s=$t(),[i,c]=(0,t.useState)(!0),m=()=>c(!1);return t.createElement($e.A,{open:i,anchorOrigin:{vertical:"top",horizontal:"right"},autoHideDuration:r,color:"primary",onClose:m,message:e,action:t.createElement(ke.A,{classes:{root:s.button},size:"small",onClick:()=>{m(),o()}},"Redirect now")})},Gt=(e,o)=>{const s=i=>{const c=Ct(window.location.href),m=new URL(i,c);if(m.hostname!==window.location.hostname){const y=window.location.pathname,C=y.indexOf(o),A=y.slice(0,C+o.length);return new URL(A,c).href}return m.href};return i=>{for(const c of Array.from(i.querySelectorAll("meta")))if(c.getAttribute("http-equiv")==="refresh"){const m=c.getAttribute("content")?.split("url=");if(!m||m.length<2)return i;const b=m[1],y=s(b);if(window.location.href===y)return i;const C=document.createElement("div");return P(t.createElement(Vt,{message:"This TechDocs page is no longer maintained. Will automatically redirect to the designated replacement.",handleButtonClick:()=>e(y),autoHideDuration:3e3}),C),document.body.appendChild(C),setTimeout(()=>{e(y)},3e3),i}return i}};function Ot(e,o){const r=new URL(o),s=`${r.origin}${r.pathname.replace(/\/$/,"")}`,i=e.replace(s,"").replace(/^\/+/,""),c=new URL(`http://localhost/${i}`);return`${c.pathname}${c.search}${c.hash}`}function Yt(){const e=(0,t.useRef)((0,de.Zp)()),r=(0,Oe.gf)(Ze.U).getOptionalString("app.baseUrl");return(0,t.useCallback)(i=>{let c=i;if(r)try{c=Ot(i,r)}catch{}e.current(c)},[r])}const ut="screen and (max-width: 76.1875em)",ft=e=>{const o=Yt(),r=(0,g.A)(),s=(0,h.A)(ut),i=jt(),c=tn(),m=(0,Qe.s)(),b=(0,Oe.gf)(ae.s),y=(0,Oe.gf)(H.Y),{state:C,path:A,content:x}=re(),[S,Te]=(0,t.useState)(null),be=E(S),ne=(0,t.useCallback)(()=>{if(!S)return;S.querySelectorAll(".md-sidebar").forEach(F=>{if(s)F.style.top="0px";else{const xe=document?.querySelector(".techdocs-reader-page")?.getBoundingClientRect().top??0;let Ie=S.getBoundingClientRect().top??0;const n=S.querySelector(".md-container > .md-tabs")?.getBoundingClientRect().height??0;Ie<xe&&(Ie=xe);const l=Math.max(Ie,0)+n;F.style.top=`${l}px`;const O=S.querySelector(".md-container > .md-footer")?.getBoundingClientRect().top??window.innerHeight;F.style.height=`${O-l}px`}F.style.setProperty("opacity","1")})},[S,s]);(0,t.useEffect)(()=>(window.addEventListener("resize",ne),window.addEventListener("scroll",ne,!0),()=>{window.removeEventListener("resize",ne),window.removeEventListener("scroll",ne,!0)}),[S,ne]);const Se=(0,t.useCallback)(()=>{if(!S)return;const D=S.querySelector(".md-footer");D&&(D.style.width=`${S.getBoundingClientRect().width}px`)},[S]);(0,t.useEffect)(()=>(window.addEventListener("resize",Se),()=>{window.removeEventListener("resize",Se)}),[S,Se]),(0,t.useEffect)(()=>{be||(Se(),ne())},[C,be,Se,ne]);const oe=(0,t.useCallback)((D,F)=>He(D,[i,nn({techdocsStorageApi:b,entityId:e,path:F}),Lt(),zt(),Wt(),on(),ot(y),c]),[e,y,b,i,c]),V=(0,t.useCallback)(async D=>He(D,[Gt(o,e.name),at(),Ft(r),Ht({baseUrl:window.location.origin,onClick:(F,ee)=>{const xe=F.ctrlKey||F.metaKey,Ie=new URL(ee),f=F.target?.innerText||ee,n=ee.replace(window.location.origin,"");m.captureEvent("click",f,{attributes:{to:n}}),Ie.hash?xe?window.open(ee,"_blank"):(o(ee),D?.querySelector(`[id="${Ie.hash.slice(1)}"]`)?.scrollIntoView()):xe?window.open(ee,"_blank"):o(ee)}}),mt({onLoading:()=>{},onLoaded:()=>{D.querySelector(".md-nav__title")?.removeAttribute("for")}}),mt({onLoading:()=>{Array.from(D.querySelectorAll(".md-sidebar")).forEach(ee=>{ee.style.setProperty("opacity","0")})},onLoaded:()=>{}})]),[r,o,m,e.name]);return(0,t.useEffect)(()=>{if(!x)return()=>{};let D=!0;return oe(x,A).then(async F=>{if(!F?.innerHTML||!D)return;window.scroll({top:0});const ee=await V(F);Te(ee)}),()=>{D=!1}},[x,A,oe,V]),S};var Ae=a(41883),Ve=a(11618),rt=a(15246);const Mt=()=>{const e=(0,Ve.YR)(),{shadowRoot:o}=(0,T.V)(),r=o?.querySelector('[data-md-component="content"]'),s=o?.querySelector('div[data-md-component="sidebar"][data-md-type="navigation"], div[data-md-component="navigation"]');let i=s?.querySelector('[data-techdocs-addons-location="primary sidebar"]');i||(i=document.createElement("div"),i.setAttribute("data-techdocs-addons-location","primary sidebar"),s?.prepend(i));const c=o?.querySelector('div[data-md-component="sidebar"][data-md-type="toc"], div[data-md-component="toc"]');let m=c?.querySelector('[data-techdocs-addons-location="secondary sidebar"]');return m||(m=document.createElement("div"),m.setAttribute("data-techdocs-addons-location","secondary sidebar"),c?.prepend(m)),t.createElement(t.Fragment,null,t.createElement(Ae.A,{container:i},e.renderComponentsByLocation(rt.e.PrimarySidebar)),t.createElement(Ae.A,{container:r},e.renderComponentsByLocation(rt.e.Content)),t.createElement(Ae.A,{container:m},e.renderComponentsByLocation(rt.e.SecondarySidebar)))},an=(0,N.A)({search:{width:"100%","@media (min-width: 76.1875em)":{width:"calc(100% - 34.4rem)",margin:"0 auto"},"@media print":{display:"none"}}}),st=Le(e=>{const{withSearch:o=!0,onReady:r}=e,s=an(),{entityMetadata:{value:i,loading:c},entityRef:m,setShadowRoot:b}=(0,T.V)(),y=ft(m),C=window.location.pathname,A=window.location.hash,x=E(y),[S]=(0,Y.$r)([`[id="${A.slice(1)}"]`]);(0,t.useEffect)(()=>{x||(A?S&&S.scrollIntoView():document?.querySelector("header")?.scrollIntoView())},[C,A,S,x]);const Te=(0,t.useCallback)(be=>{b(be),r instanceof Function&&r()},[b,r]);return c===!1&&!i?t.createElement(K.M,{status:"404",statusMessage:"PAGE NOT FOUND"}):y?t.createElement($.U,null,t.createElement(M.A,{container:!0},t.createElement(M.A,{xs:12,item:!0},t.createElement(d,null)),o&&t.createElement(M.A,{className:s.search,xs:"auto",item:!0},t.createElement(Ye,{entityId:m,entityTitle:i?.metadata?.title})),t.createElement(M.A,{xs:12,item:!0},t.createElement(L,{element:y,onAppend:Te},t.createElement(Mt,null))))):t.createElement($.U,null,t.createElement(M.A,{container:!0},t.createElement(M.A,{xs:12,item:!0},t.createElement(d,null))))}),rn=null},84893:(De,k,a)=>{"use strict";a.d(k,{Z:()=>Y});var t=a(14041),M=a(58837),N=a(29365),T=a(75173),w=a(71677),G=a(37757),B=a(77125),W=a(9684),z=a(66839),ue=a(11618),E=a(15246);const L=(0,M.A)(K=>({root:{gridArea:"pageSubheader",flexDirection:"column",minHeight:"auto",padding:K.spacing(3,3,0),"@media print":{display:"none"}}})),Y=K=>{const $=L(),[Q,te]=(0,t.useState)(null),U=(0,t.useCallback)(Ee=>{te(Ee.currentTarget)},[]),I=(0,t.useCallback)(()=>{te(null)},[]),{entityMetadata:{value:ce,loading:_}}=(0,z.V)(),X=(0,ue.YR)(),v=X.renderComponentsByLocation(E.e.Subheader),de=X.renderComponentsByLocation(E.e.Settings);return!v&&!de||_===!1&&!ce?null:t.createElement(T.A,{classes:$,...K.toolbarProps},t.createElement(B.A,{display:"flex",justifyContent:"flex-end",width:"100%",flexWrap:"wrap"},v,de?t.createElement(t.Fragment,null,t.createElement(w.Ay,{title:"Settings"},t.createElement(N.A,{"aria-controls":"tech-docs-reader-page-settings","aria-haspopup":"true",onClick:U},t.createElement(W.A,null))),t.createElement(G.A,{id:"tech-docs-reader-page-settings",getContentAnchorEl:null,anchorEl:Q,anchorOrigin:{vertical:"bottom",horizontal:"right"},open:!!Q,onClose:I,keepMounted:!0},t.createElement("div",null,de))):null))}},41472:(De,k,a)=>{"use strict";a.r(k),a.d(k,{TechDocsSearchResultListItem:()=>z});var t=a(14041),M=a(46423),N=a(5951),T=a(58837),w=a(72501),G=a(75202),B=a(51470);const W=(0,T.A)({flexContainer:{flexWrap:"wrap"},itemText:{width:"100%",marginBottom:"1rem"}}),z=ue=>{const{result:E,highlight:L,lineClamp:Y=5,asListItem:K=!0,asLink:$=!0,title:Q,icon:te}=ue,U=W(),I=({children:X})=>$?t.createElement(G.N_,{noTrack:!0,to:E.location},X):t.createElement(t.Fragment,null,X),ce=()=>{const X=L?.fields.title?t.createElement(B.e,{text:L.fields.title,preTag:L.preTag,postTag:L.postTag}):E.title,v=L?.fields.entityTitle?t.createElement(B.e,{text:L.fields.entityTitle,preTag:L.preTag,postTag:L.postTag}):E.entityTitle,de=L?.fields.name?t.createElement(B.e,{text:L.fields.name,preTag:L.preTag,postTag:L.postTag}):E.name;return E?t.createElement(N.A,{className:U.itemText,primaryTypographyProps:{variant:"h6"},primary:t.createElement(I,null,Q||t.createElement(t.Fragment,null,X," | ",v??de," docs")),secondary:t.createElement(w.A,{component:"span",style:{display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:Y,overflow:"hidden"},color:"textSecondary",variant:"body2"},L?.fields.text?t.createElement(B.e,{text:L.fields.text,preTag:L.preTag,postTag:L.postTag}):E.text)}):null},_=({children:X})=>K?t.createElement(t.Fragment,null,te&&t.createElement(M.A,null,typeof te=="function"?te(E):te),t.createElement("div",{className:U.flexContainer},X)):t.createElement(t.Fragment,null,X);return t.createElement(_,null,t.createElement(ce,null))}},13660:(De,k,a)=>{"use strict";var t,M=a(4293),N=a(78920);t={value:!0},k.A=void 0;var T=N(a(14041)),w=M(a(74044)),G=(0,w.default)(T.createElement("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"}),"Code");k.A=G},90292:(De,k,a)=>{"use strict";var t,M=a(4293),N=a(78920);t={value:!0},k.A=void 0;var T=N(a(14041)),w=M(a(74044)),G=(0,w.default)(T.createElement("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17l-.59.59-.58.58V4h16v12zm-9-4h2v2h-2zm0-6h2v4h-2z"}),"FeedbackOutlined");k.A=G},4387:(De,k,a)=>{"use strict";a.d(k,{A:()=>z});var t=a(89575),M=a(39850),N=a(14041),T=a(9546),w=a(268),G=a(7031),B=function(E){return{root:{display:"block",backgroundColor:(0,w.X4)(E.palette.text.primary,E.palette.type==="light"?.11:.13),height:"1.2em"},text:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 60%",transform:"scale(1, 0.60)",borderRadius:E.shape.borderRadius,"&:empty:before":{content:'"\\00a0"'}},rect:{},circle:{borderRadius:"50%"},pulse:{animation:"$pulse 1.5s ease-in-out 0.5s infinite"},"@keyframes pulse":{"0%":{opacity:1},"50%":{opacity:.4},"100%":{opacity:1}},wave:{position:"relative",overflow:"hidden","&::after":{animation:"$wave 1.6s linear 0.5s infinite",background:"linear-gradient(90deg, transparent, ".concat(E.palette.action.hover,", transparent)"),content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}},"@keyframes wave":{"0%":{transform:"translateX(-100%)"},"60%":{transform:"translateX(100%)"},"100%":{transform:"translateX(100%)"}},withChildren:{"& > *":{visibility:"hidden"}},fitContent:{maxWidth:"fit-content"},heightAuto:{height:"auto"}}},W=N.forwardRef(function(E,L){var Y=E.animation,K=Y===void 0?"pulse":Y,$=E.classes,Q=E.className,te=E.component,U=te===void 0?"span":te,I=E.height,ce=E.variant,_=ce===void 0?"text":ce,X=E.width,v=(0,M.A)(E,["animation","classes","className","component","height","variant","width"]),de=!!v.children;return N.createElement(U,(0,t.A)({ref:L,className:(0,T.default)($.root,$[_],Q,de&&[$.withChildren,!X&&$.fitContent,!I&&$.heightAuto],K!==!1&&$[K])},v,{style:(0,t.A)({width:X,height:I},v.style)}))});const z=(0,G.A)(B,{name:"MuiSkeleton"})(W)},71651:function(De){/*! @license DOMPurify 3.1.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.6/LICENSE */(function(k,a){De.exports=a()})(this,function(){"use strict";const{entries:k,setPrototypeOf:a,isFrozen:t,getPrototypeOf:M,getOwnPropertyDescriptor:N}=Object;let{freeze:T,seal:w,create:G}=Object,{apply:B,construct:W}=typeof Reflect<"u"&&Reflect;T||(T=function(d){return d}),w||(w=function(d){return d}),B||(B=function(d,h,g){return d.apply(h,g)}),W||(W=function(d,h){return new d(...h)});const z=_(Array.prototype.forEach),ue=_(Array.prototype.pop),E=_(Array.prototype.push),L=_(String.prototype.toLowerCase),Y=_(String.prototype.toString),K=_(String.prototype.match),$=_(String.prototype.replace),Q=_(String.prototype.indexOf),te=_(String.prototype.trim),U=_(Object.prototype.hasOwnProperty),I=_(RegExp.prototype.test),ce=X(TypeError);function _(p){return function(d){for(var h=arguments.length,g=new Array(h>1?h-1:0),H=1;H<h;H++)g[H-1]=arguments[H];return B(p,d,g)}}function X(p){return function(){for(var d=arguments.length,h=new Array(d),g=0;g<d;g++)h[g]=arguments[g];return W(p,h)}}function v(p,d){let h=arguments.length>2&&arguments[2]!==void 0?arguments[2]:L;a&&a(p,null);let g=d.length;for(;g--;){let H=d[g];if(typeof H=="string"){const ye=h(H);ye!==H&&(t(d)||(d[g]=ye),H=ye)}p[H]=!0}return p}function de(p){for(let d=0;d<p.length;d++)U(p,d)||(p[d]=null);return p}function Ee(p){const d=G(null);for(const[h,g]of k(p))U(p,h)&&(Array.isArray(g)?d[h]=de(g):g&&typeof g=="object"&&g.constructor===Object?d[h]=Ee(g):d[h]=g);return d}function Ne(p,d){for(;p!==null;){const g=N(p,d);if(g){if(g.get)return _(g.get);if(typeof g.value=="function")return _(g.value)}p=M(p)}function h(){return null}return h}const Ge=T(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Ye=T(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),ke=T(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Ue=T(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Ke=T(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),ht=T(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Xe=T(["#text"]),it=T(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),je=T(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),lt=T(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),_e=T(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),pt=w(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Be=w(/<%[\w\W]*|[\w\W]*%>/gm),Oe=w(/\${[\w\W]*}/gm),Ze=w(/^data-[\-\w.\u00B7-\uFFFF]/),Qe=w(/^aria-[\-\w]+$/),Je=w(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),gt=w(/^(?:\w+script|data):/i),pe=w(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),ae=w(/^html$/i),ge=w(/^[a-z][.\w]*(-[.\w]+)+$/i);var we=Object.freeze({__proto__:null,MUSTACHE_EXPR:pt,ERB_EXPR:Be,TMPLIT_EXPR:Oe,DATA_ATTR:Ze,ARIA_ATTR:Qe,IS_ALLOWED_URI:Je,IS_SCRIPT_OR_DATA:gt,ATTR_WHITESPACE:pe,DOCTYPE_NAME:ae,CUSTOM_ELEMENT:ge});const J={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},R=function(){return typeof window>"u"?null:window},re=function(d,h){if(typeof d!="object"||typeof d.createPolicy!="function")return null;let g=null;const H="data-tt-policy-suffix";h&&h.hasAttribute(H)&&(g=h.getAttribute(H));const ye="dompurify"+(g?"#"+g:"");try{return d.createPolicy(ye,{createHTML(se){return se},createScriptURL(se){return se}})}catch{return console.warn("TrustedTypes policy "+ye+" could not be created."),null}};function fe(){let p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:R();const d=f=>fe(f);if(d.version="3.1.6",d.removed=[],!p||!p.document||p.document.nodeType!==J.document)return d.isSupported=!1,d;let{document:h}=p;const g=h,H=g.currentScript,{DocumentFragment:ye,HTMLTemplateElement:se,Node:qe,Element:et,NodeFilter:Me,NamedNodeMap:vt=p.NamedNodeMap||p.MozNamedAttrMap,HTMLFormElement:Et,DOMParser:Pt,trustedTypes:tt}=p,Ce=et.prototype,Kt=Ne(Ce,"cloneNode"),Xt=Ne(Ce,"remove"),jt=Ne(Ce,"nextSibling"),Zt=Ne(Ce,"childNodes"),q=Ne(Ce,"parentNode");if(typeof se=="function"){const f=h.createElement("template");f.content&&f.content.ownerDocument&&(h=f.content.ownerDocument)}let ie,nt="";const{implementation:yt,createNodeIterator:Qt,createDocumentFragment:Jt,getElementsByTagName:Nt}=h,{importNode:kt}=g;let Re={};d.isSupported=typeof k=="function"&&typeof q=="function"&&yt&&yt.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:At,ERB_EXPR:Tt,TMPLIT_EXPR:bt,DATA_ATTR:qt,ARIA_ATTR:en,IS_SCRIPT_OR_DATA:tn,ATTR_WHITESPACE:Ut,CUSTOM_ELEMENT:nn}=we;let{IS_ALLOWED_URI:_t}=we,j=null;const Bt=v({},[...Ge,...Ye,...ke,...Ke,...Xe]);let Z=null;const St=v({},[...it,...je,...lt,..._e]);let P=Object.seal(G(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),ot=null,wt=null,zt=!0,Lt=!0,Ct=!1,Ht=!0,Fe=!1,Rt=!0,ze=!1,xt=!1,Dt=!1,We=!1,ct=!1,dt=!1,Ft=!0,Wt=!1;const on="user-content-";let mt=!0,at=!1,He={},$e=null;const $t=v({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Vt=null;const Gt=v({},["audio","video","img","source","image","track"]);let Ot=null;const Yt=v({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ut="http://www.w3.org/1998/Math/MathML",ft="http://www.w3.org/2000/svg",Ae="http://www.w3.org/1999/xhtml";let Ve=Ae,rt=!1,Mt=null;const an=v({},[ut,ft,Ae],Y);let st=null;const rn=["application/xhtml+xml","text/html"],e="text/html";let o=null,r=null;const s=h.createElement("form"),i=function(n){return n instanceof RegExp||n instanceof Function},c=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(r&&r===n)){if((!n||typeof n!="object")&&(n={}),n=Ee(n),st=rn.indexOf(n.PARSER_MEDIA_TYPE)===-1?e:n.PARSER_MEDIA_TYPE,o=st==="application/xhtml+xml"?Y:L,j=U(n,"ALLOWED_TAGS")?v({},n.ALLOWED_TAGS,o):Bt,Z=U(n,"ALLOWED_ATTR")?v({},n.ALLOWED_ATTR,o):St,Mt=U(n,"ALLOWED_NAMESPACES")?v({},n.ALLOWED_NAMESPACES,Y):an,Ot=U(n,"ADD_URI_SAFE_ATTR")?v(Ee(Yt),n.ADD_URI_SAFE_ATTR,o):Yt,Vt=U(n,"ADD_DATA_URI_TAGS")?v(Ee(Gt),n.ADD_DATA_URI_TAGS,o):Gt,$e=U(n,"FORBID_CONTENTS")?v({},n.FORBID_CONTENTS,o):$t,ot=U(n,"FORBID_TAGS")?v({},n.FORBID_TAGS,o):{},wt=U(n,"FORBID_ATTR")?v({},n.FORBID_ATTR,o):{},He=U(n,"USE_PROFILES")?n.USE_PROFILES:!1,zt=n.ALLOW_ARIA_ATTR!==!1,Lt=n.ALLOW_DATA_ATTR!==!1,Ct=n.ALLOW_UNKNOWN_PROTOCOLS||!1,Ht=n.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Fe=n.SAFE_FOR_TEMPLATES||!1,Rt=n.SAFE_FOR_XML!==!1,ze=n.WHOLE_DOCUMENT||!1,We=n.RETURN_DOM||!1,ct=n.RETURN_DOM_FRAGMENT||!1,dt=n.RETURN_TRUSTED_TYPE||!1,Dt=n.FORCE_BODY||!1,Ft=n.SANITIZE_DOM!==!1,Wt=n.SANITIZE_NAMED_PROPS||!1,mt=n.KEEP_CONTENT!==!1,at=n.IN_PLACE||!1,_t=n.ALLOWED_URI_REGEXP||Je,Ve=n.NAMESPACE||Ae,P=n.CUSTOM_ELEMENT_HANDLING||{},n.CUSTOM_ELEMENT_HANDLING&&i(n.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(P.tagNameCheck=n.CUSTOM_ELEMENT_HANDLING.tagNameCheck),n.CUSTOM_ELEMENT_HANDLING&&i(n.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(P.attributeNameCheck=n.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),n.CUSTOM_ELEMENT_HANDLING&&typeof n.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(P.allowCustomizedBuiltInElements=n.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Fe&&(Lt=!1),ct&&(We=!0),He&&(j=v({},Xe),Z=[],He.html===!0&&(v(j,Ge),v(Z,it)),He.svg===!0&&(v(j,Ye),v(Z,je),v(Z,_e)),He.svgFilters===!0&&(v(j,ke),v(Z,je),v(Z,_e)),He.mathMl===!0&&(v(j,Ke),v(Z,lt),v(Z,_e))),n.ADD_TAGS&&(j===Bt&&(j=Ee(j)),v(j,n.ADD_TAGS,o)),n.ADD_ATTR&&(Z===St&&(Z=Ee(Z)),v(Z,n.ADD_ATTR,o)),n.ADD_URI_SAFE_ATTR&&v(Ot,n.ADD_URI_SAFE_ATTR,o),n.FORBID_CONTENTS&&($e===$t&&($e=Ee($e)),v($e,n.FORBID_CONTENTS,o)),mt&&(j["#text"]=!0),ze&&v(j,["html","head","body"]),j.table&&(v(j,["tbody"]),delete ot.tbody),n.TRUSTED_TYPES_POLICY){if(typeof n.TRUSTED_TYPES_POLICY.createHTML!="function")throw ce('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof n.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw ce('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');ie=n.TRUSTED_TYPES_POLICY,nt=ie.createHTML("")}else ie===void 0&&(ie=re(tt,H)),ie!==null&&typeof nt=="string"&&(nt=ie.createHTML(""));T&&T(n),r=n}},m=v({},["mi","mo","mn","ms","mtext"]),b=v({},["foreignobject","annotation-xml"]),y=v({},["title","style","font","a","script"]),C=v({},[...Ye,...ke,...Ue]),A=v({},[...Ke,...ht]),x=function(n){let l=q(n);(!l||!l.tagName)&&(l={namespaceURI:Ve,tagName:"template"});const u=L(n.tagName),O=L(l.tagName);return Mt[n.namespaceURI]?n.namespaceURI===ft?l.namespaceURI===Ae?u==="svg":l.namespaceURI===ut?u==="svg"&&(O==="annotation-xml"||m[O]):!!C[u]:n.namespaceURI===ut?l.namespaceURI===Ae?u==="math":l.namespaceURI===ft?u==="math"&&b[O]:!!A[u]:n.namespaceURI===Ae?l.namespaceURI===ft&&!b[O]||l.namespaceURI===ut&&!m[O]?!1:!A[u]&&(y[u]||!C[u]):!!(st==="application/xhtml+xml"&&Mt[n.namespaceURI]):!1},S=function(n){E(d.removed,{element:n});try{q(n).removeChild(n)}catch{Xt(n)}},Te=function(n,l){try{E(d.removed,{attribute:l.getAttributeNode(n),from:l})}catch{E(d.removed,{attribute:null,from:l})}if(l.removeAttribute(n),n==="is"&&!Z[n])if(We||ct)try{S(l)}catch{}else try{l.setAttribute(n,"")}catch{}},be=function(n){let l=null,u=null;if(Dt)n="<remove></remove>"+n;else{const le=K(n,/^[\r\n\t ]+/);u=le&&le[0]}st==="application/xhtml+xml"&&Ve===Ae&&(n='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+n+"</body></html>");const O=ie?ie.createHTML(n):n;if(Ve===Ae)try{l=new Pt().parseFromString(O,st)}catch{}if(!l||!l.documentElement){l=yt.createDocument(Ve,"template",null);try{l.documentElement.innerHTML=rt?nt:O}catch{}}const me=l.body||l.documentElement;return n&&u&&me.insertBefore(h.createTextNode(u),me.childNodes[0]||null),Ve===Ae?Nt.call(l,ze?"html":"body")[0]:ze?l.documentElement:me},ne=function(n){return Qt.call(n.ownerDocument||n,n,Me.SHOW_ELEMENT|Me.SHOW_COMMENT|Me.SHOW_TEXT|Me.SHOW_PROCESSING_INSTRUCTION|Me.SHOW_CDATA_SECTION,null)},Se=function(n){return n instanceof Et&&(typeof n.nodeName!="string"||typeof n.textContent!="string"||typeof n.removeChild!="function"||!(n.attributes instanceof vt)||typeof n.removeAttribute!="function"||typeof n.setAttribute!="function"||typeof n.namespaceURI!="string"||typeof n.insertBefore!="function"||typeof n.hasChildNodes!="function")},oe=function(n){return typeof qe=="function"&&n instanceof qe},V=function(n,l,u){Re[n]&&z(Re[n],O=>{O.call(d,l,u,r)})},D=function(n){let l=null;if(V("beforeSanitizeElements",n,null),Se(n))return S(n),!0;const u=o(n.nodeName);if(V("uponSanitizeElement",n,{tagName:u,allowedTags:j}),n.hasChildNodes()&&!oe(n.firstElementChild)&&I(/<[/\w]/g,n.innerHTML)&&I(/<[/\w]/g,n.textContent)||n.nodeType===J.progressingInstruction||Rt&&n.nodeType===J.comment&&I(/<[/\w]/g,n.data))return S(n),!0;if(!j[u]||ot[u]){if(!ot[u]&&ee(u)&&(P.tagNameCheck instanceof RegExp&&I(P.tagNameCheck,u)||P.tagNameCheck instanceof Function&&P.tagNameCheck(u)))return!1;if(mt&&!$e[u]){const O=q(n)||n.parentNode,me=Zt(n)||n.childNodes;if(me&&O){const le=me.length;for(let ve=le-1;ve>=0;--ve){const Pe=Kt(me[ve],!0);Pe.__removalCount=(n.__removalCount||0)+1,O.insertBefore(Pe,jt(n))}}}return S(n),!0}return n instanceof et&&!x(n)||(u==="noscript"||u==="noembed"||u==="noframes")&&I(/<\/no(script|embed|frames)/i,n.innerHTML)?(S(n),!0):(Fe&&n.nodeType===J.text&&(l=n.textContent,z([At,Tt,bt],O=>{l=$(l,O," ")}),n.textContent!==l&&(E(d.removed,{element:n.cloneNode()}),n.textContent=l)),V("afterSanitizeElements",n,null),!1)},F=function(n,l,u){if(Ft&&(l==="id"||l==="name")&&(u in h||u in s))return!1;if(!(Lt&&!wt[l]&&I(qt,l))){if(!(zt&&I(en,l))){if(!Z[l]||wt[l]){if(!(ee(n)&&(P.tagNameCheck instanceof RegExp&&I(P.tagNameCheck,n)||P.tagNameCheck instanceof Function&&P.tagNameCheck(n))&&(P.attributeNameCheck instanceof RegExp&&I(P.attributeNameCheck,l)||P.attributeNameCheck instanceof Function&&P.attributeNameCheck(l))||l==="is"&&P.allowCustomizedBuiltInElements&&(P.tagNameCheck instanceof RegExp&&I(P.tagNameCheck,u)||P.tagNameCheck instanceof Function&&P.tagNameCheck(u))))return!1}else if(!Ot[l]){if(!I(_t,$(u,Ut,""))){if(!((l==="src"||l==="xlink:href"||l==="href")&&n!=="script"&&Q(u,"data:")===0&&Vt[n])){if(!(Ct&&!I(tn,$(u,Ut,"")))){if(u)return!1}}}}}}return!0},ee=function(n){return n!=="annotation-xml"&&K(n,nn)},xe=function(n){V("beforeSanitizeAttributes",n,null);const{attributes:l}=n;if(!l)return;const u={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Z};let O=l.length;for(;O--;){const me=l[O],{name:le,namespaceURI:ve,value:Pe}=me,It=o(le);let he=le==="value"?Pe:te(Pe);if(u.attrName=It,u.attrValue=he,u.keepAttr=!0,u.forceKeepAttr=void 0,V("uponSanitizeAttribute",n,u),he=u.attrValue,Rt&&I(/((--!?|])>)|<\/(style|title)/i,he)){Te(le,n);continue}if(u.forceKeepAttr||(Te(le,n),!u.keepAttr))continue;if(!Ht&&I(/\/>/i,he)){Te(le,n);continue}Fe&&z([At,Tt,bt],ln=>{he=$(he,ln," ")});const sn=o(n.nodeName);if(F(sn,It,he)){if(Wt&&(It==="id"||It==="name")&&(Te(le,n),he=on+he),ie&&typeof tt=="object"&&typeof tt.getAttributeType=="function"&&!ve)switch(tt.getAttributeType(sn,It)){case"TrustedHTML":{he=ie.createHTML(he);break}case"TrustedScriptURL":{he=ie.createScriptURL(he);break}}try{ve?n.setAttributeNS(ve,le,he):n.setAttribute(le,he),Se(n)?S(n):ue(d.removed)}catch{}}}V("afterSanitizeAttributes",n,null)},Ie=function f(n){let l=null;const u=ne(n);for(V("beforeSanitizeShadowDOM",n,null);l=u.nextNode();)V("uponSanitizeShadowNode",l,null),!D(l)&&(l.content instanceof ye&&f(l.content),xe(l));V("afterSanitizeShadowDOM",n,null)};return d.sanitize=function(f){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=null,u=null,O=null,me=null;if(rt=!f,rt&&(f="<!-->"),typeof f!="string"&&!oe(f))if(typeof f.toString=="function"){if(f=f.toString(),typeof f!="string")throw ce("dirty is not a string, aborting")}else throw ce("toString is not a function");if(!d.isSupported)return f;if(xt||c(n),d.removed=[],typeof f=="string"&&(at=!1),at){if(f.nodeName){const Pe=o(f.nodeName);if(!j[Pe]||ot[Pe])throw ce("root node is forbidden and cannot be sanitized in-place")}}else if(f instanceof qe)l=be("<!---->"),u=l.ownerDocument.importNode(f,!0),u.nodeType===J.element&&u.nodeName==="BODY"||u.nodeName==="HTML"?l=u:l.appendChild(u);else{if(!We&&!Fe&&!ze&&f.indexOf("<")===-1)return ie&&dt?ie.createHTML(f):f;if(l=be(f),!l)return We?null:dt?nt:""}l&&Dt&&S(l.firstChild);const le=ne(at?f:l);for(;O=le.nextNode();)D(O)||(O.content instanceof ye&&Ie(O.content),xe(O));if(at)return f;if(We){if(ct)for(me=Jt.call(l.ownerDocument);l.firstChild;)me.appendChild(l.firstChild);else me=l;return(Z.shadowroot||Z.shadowrootmode)&&(me=kt.call(g,me,!0)),me}let ve=ze?l.outerHTML:l.innerHTML;return ze&&j["!doctype"]&&l.ownerDocument&&l.ownerDocument.doctype&&l.ownerDocument.doctype.name&&I(ae,l.ownerDocument.doctype.name)&&(ve="<!DOCTYPE "+l.ownerDocument.doctype.name+`>
`+ve),Fe&&z([At,Tt,bt],Pe=>{ve=$(ve,Pe," ")}),ie&&dt?ie.createHTML(ve):ve},d.setConfig=function(){let f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};c(f),xt=!0},d.clearConfig=function(){r=null,xt=!1},d.isValidAttribute=function(f,n,l){r||c({});const u=o(f),O=o(n);return F(u,O,l)},d.addHook=function(f,n){typeof n=="function"&&(Re[f]=Re[f]||[],E(Re[f],n))},d.removeHook=function(f){if(Re[f])return ue(Re[f])},d.removeHooks=function(f){Re[f]&&(Re[f]=[])},d.removeAllHooks=function(){Re={}},d}var Le=fe();return Le})},91042:(De,k,a)=>{"use strict";a.d(k,{Y:()=>N});var t=a(14041),M=a(16261);function N(T,w){const[G,B]=(0,t.useState)({status:"not-executed",error:void 0,result:w}),W=(0,t.useRef)(),z=(0,t.useRef)(),ue=(0,M.J)({execute(...E){z.current=E;const L=T(...E);return W.current=L,B(Y=>({...Y,status:"loading"})),L.then(Y=>{L===W.current&&B(K=>({...K,status:"success",error:void 0,result:Y}))},Y=>{L===W.current&&B(K=>({...K,status:"error",error:Y}))}),L},reset(){B({status:"not-executed",error:void 0,result:w}),W.current=void 0,z.current=void 0}});return[G,(0,t.useMemo)(()=>({reset(){ue.current.reset()},execute:(...E)=>ue.current.execute(...E)}),[]),{promise:W.current,lastArgs:z.current}]}}}]);})();

//# sourceMappingURL=3402.fdf68706.chunk.js.map