!function(e,t){for(var n in t)e[n]=t[n]}(exports,function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){const o=n(1);t.handler=((e,t,n)=>{const r=e.path.match(/\/beer\/(.+)/);if("OPTIONS"===e.httpMethod)!function(e){e(null,{statusCode:204,headers:{"content-type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, POST, PUT"},body:{}})}(n);else if(r&&"PUT"===e.httpMethod)!function(e,t,n){const r=o.request(`https://beer.fluentcloud.com/v1/beer/${e}`,{method:"PUT",headers:{"Content-Type":"application/json"}},e=>{e.setEncoding("utf8"),e.on("error",e=>{n(e.message)}),e.on("data",()=>{}),e.on("end",()=>{try{n(null,{statusCode:204,headers:{"content-type":"application/json","Access-Control-Allow-Origin":"*"}})}catch(e){console.log(e,"caught"),n(e.message)}})});r.write(JSON.stringify({likes:t})),r.end(),console.log("trying",JSON.stringify({likes:t}))}(r[1],JSON.parse(e.body).likes,n);else if(r||"GET"!==e.httpMethod){if(!r&&"POST"===e.httpMethod)try{const{name:t,likes:r}=JSON.parse(e.body);!function(e,t,n){const r=o.request("https://beer.fluentcloud.com/v1/beer",{method:"POST",headers:{"Content-Type":"application/json"}},e=>{e.setEncoding("utf8"),e.on("error",e=>{console.log(e),n(e.message)}),e.on("data",()=>{}),e.on("end",()=>{try{n(null,{statusCode:204,headers:{"content-type":"application/json","Access-Control-Allow-Origin":"*"}})}catch(e){console.log(e,"caught"),n(e.message)}})});r.write(JSON.stringify({name:e,likes:t})),r.end()}(t,r,n)}catch(e){n("Could not parse body.")}}else!function(e){o.request("https://beer.fluentcloud.com/v1/beer",{headers:{"Content-Type":"application/json"}},t=>{t.setEncoding("utf8");let n="";t.on("data",e=>{n+=e}),t.on("error",t=>{console.error(t),e(t.message)}),t.on("end",()=>{try{e(null,{statusCode:200,headers:{"content-type":"application/json","Access-Control-Allow-Origin":"*"},body:n})}catch(t){e(t.message)}})}).end()}(n)})},function(e,t){e.exports=require("https")}]));