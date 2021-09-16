import t from"rn-fetch-blob";import{btoa as e}from"abab";import a,{createContext as r,useContext as s,useState as n,useCallback as o,useMemo as i}from"react";const c=async({path:a})=>{const r=(await t.fs.hash(a,"md5")).replace(/\r|\n/g,"").replace(/([\da-fA-F]{2}) ?/g,"0x$1 ").replace(/ +$/,"").split(" ").map(t=>parseInt(t)),s=String.fromCharCode(...r);return e(s)};function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t}).apply(this,arguments)}let d=0;const p=({directUploadsUrl:e,file:a,headers:r,onStatusChange:s,interval:n})=>{const o=++d;let i,p=!1;const u=()=>{i&&(p=!0,i.cancel())},h=t=>{s(l({},t,{id:o,cancel:u,file:a}))};return h({status:"waiting"}),new Promise(async s=>{try{const o=await(async({directUploadsUrl:t,file:e,headers:a={}})=>{const r=await c({path:e.path});if(!r)throw new Error(`Failed to get file checksum. Path: ${e.path}`);const s={filename:e.name,content_type:e.type||"image/jpeg",byte_size:e.size,checksum:r};return e.metadata&&(s.metadata=e.metadata),(await fetch(t,{method:"POST",body:JSON.stringify({blob:s}),headers:l({"Content-Type":"application/json"},a)})).json()})({directUploadsUrl:e,file:a,headers:r}),{url:d,headers:u}=o.direct_upload,m=t.wrap(a.path);i=t.fetch("PUT",d,u,m),i.uploadProgress({interval:n},(t,e)=>{h({status:"uploading",progress:t/e*100,totalBytes:e,uploadedBytes:t})}).then(t=>{const e=t.info().status;h(e>=200&&e<400?{status:"success"}:{status:"error",error:new Error("Response not success")}),s(o.signed_id)}).catch(t=>{h(p?{status:"canceled"}:{status:"error",error:t}),s()})}catch(t){return h({status:"error",error:t}),s()}})},u=r({host:"http://localhost:3000",mountPath:"/rails/active_storage",interval:2e3}),{Provider:h}=u,m=({host:t,mountPath:e,interval:r,children:s})=>a.createElement(h,{value:{host:t,mountPath:e,interval:r}},s),f=({onSuccess:t}={})=>{const{directUploadsUrl:e,interval:a}=(()=>{const t=s(u),e=t.mountPath||"/rails/active_storage";return l({},t,{mountPath:e,directUploadsUrl:`${t.host}${e}/direct_uploads`,interval:t.interval||2e3})})(),[r,c]=n([]),d=o(t=>{c(e=>((t,e,a="id")=>{const r=[...t],s=r.findIndex(t=>t[a]===e[a]);return s>=0?r[s]=e:r.push(e),r})(e,t))},[]),h=o(async r=>{const s=(await Promise.all(r.map(t=>p({file:t,directUploadsUrl:e,onStatusChange:d,interval:a})))).filter(t=>!!t);return s.length>0&&t&&t({signedIds:s}),{signedIds:s}},[d,t]),m=i(()=>r.some(t=>"uploading"===t.status),[r]);return{upload:h,uploads:r,uploading:m}},g=({children:t,onSuccess:e})=>t(f({onSuccess:e}));export{m as ActiveStorageProvider,g as DirectUpload,c as checksum,p as directUpload,f as useDirectUpload};
//# sourceMappingURL=react-native-activestorage-floranow.modern.js.map