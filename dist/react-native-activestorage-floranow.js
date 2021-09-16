var e=require("rn-fetch-blob"),t=require("abab"),r=require("react");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=n(e),o=n(r),i=function(e){var r=e.path;try{return Promise.resolve(a.default.fs.hash(r,"md5")).then(function(e){var r=e.replace(/\r|\n/g,"").replace(/([\da-fA-F]{2}) ?/g,"0x$1 ").replace(/ +$/,"").split(" ").map(function(e){return parseInt(e)}),n=String.fromCharCode.apply(String,r);return t.btoa(n)})}catch(e){return Promise.reject(e)}};function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var u=0,c=function(e){var t,r=e.directUploadsUrl,n=e.file,o=e.headers,c=e.onStatusChange,l=e.interval,d=++u,f=!1,h=function(){t&&(f=!0,t.cancel())},p=function(e){c(s({},e,{id:d,cancel:h,file:n}))};return p({status:"waiting"}),new Promise(function(e){try{return Promise.resolve(function(u,c){try{var d=Promise.resolve(function(e){var t=e.directUploadsUrl,r=e.file,n=e.headers,a=void 0===n?{}:n;try{return Promise.resolve(i({path:r.path})).then(function(e){if(!e)throw new Error("Failed to get file checksum. Path: "+r.path);var n={filename:r.name,content_type:r.type||"image/jpeg",byte_size:r.size,checksum:e};return r.metadata&&(n.metadata=r.metadata),Promise.resolve(fetch(t,{method:"POST",body:JSON.stringify({blob:n}),headers:s({"Content-Type":"application/json"},a)})).then(function(e){return e.json()})})}catch(e){return Promise.reject(e)}}({directUploadsUrl:r,file:n,headers:o})).then(function(r){var o=r.direct_upload,i=o.url,s=o.headers,u=a.default.wrap(n.path);(t=a.default.fetch("PUT",i,s,u)).uploadProgress({interval:l},function(e,t){p({status:"uploading",progress:e/t*100,totalBytes:t,uploadedBytes:e})}).then(function(t){var n=t.info().status;p(n>=200&&n<400?{status:"success"}:{status:"error",error:new Error("Response not success")}),e(r.signed_id)}).catch(function(t){p(f?{status:"canceled"}:{status:"error",error:t}),e()})})}catch(e){return c(e)}return d&&d.then?d.then(void 0,c):d}(0,function(t){return p({status:"error",error:t}),e()}))}catch(e){return Promise.reject(e)}})},l=r.createContext({host:"http://localhost:3000",mountPath:"/rails/active_storage",interval:2e3}),d=l.Provider,f=function(e){var t,n,a=(void 0===e?{}:e).onSuccess,o=s({},t=r.useContext(l),{mountPath:n=t.mountPath||"/rails/active_storage",directUploadsUrl:""+t.host+n+"/direct_uploads",interval:t.interval||2e3}),i=o.directUploadsUrl,u=o.interval,d=r.useState([]),f=d[0],h=d[1],p=r.useCallback(function(e){h(function(t){return function(e,t,r){void 0===r&&(r="id");var n=[].concat(e),a=n.findIndex(function(e){return e[r]===t[r]});return a>=0?n[a]=t:n.push(t),n}(t,e)})},[]),v=r.useCallback(function(e){try{return Promise.resolve(Promise.all(e.map(function(e){return c({file:e,directUploadsUrl:i,onStatusChange:p,interval:u})}))).then(function(e){var t=e.filter(function(e){return!!e});return t.length>0&&a&&a({signedIds:t}),{signedIds:t}})}catch(e){return Promise.reject(e)}},[p,a]),m=r.useMemo(function(){return f.some(function(e){return"uploading"===e.status})},[f]);return{upload:v,uploads:f,uploading:m}};exports.ActiveStorageProvider=function(e){return o.default.createElement(d,{value:{host:e.host,mountPath:e.mountPath,interval:e.interval}},e.children)},exports.DirectUpload=function(e){return(0,e.children)(f({onSuccess:e.onSuccess}))},exports.checksum=i,exports.directUpload=c,exports.useDirectUpload=f;
//# sourceMappingURL=react-native-activestorage-floranow.js.map
