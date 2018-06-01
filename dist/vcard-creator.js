!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vcard_creator=e():t.vcard_creator=e()}("undefined"!=typeof self?self:this,function(){return function(t){var e={};function r(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=t,r.c=e,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e){e.vCard=class{constructor(){this.definedElements=[],this.multiplePropertiesForElementAllowed=["email","address","phoneNumber","url"],this.properties=[],this.charset="utf-8",this.contentType="text/x-vcard",this.fileExtension="vcf"}addAddress(t="",e="",r="",i="",n="",s="",o="",a="WORK;POSTAL"){var h=t+";"+e+";"+r+";"+i+";"+n+";"+s+";"+o;return this.setProperty("address","ADR"+(""!=a?";"+a:"")+this.getCharsetString(),h),this}addBirthday(t){return this.setProperty("birthday","BDAY",t),this}addCompany(t,e=""){return this.setProperty("company","ORG"+this.getCharsetString(),t+(""!=e?";"+e:"")),this}addEmail(t,e=""){return this.setProperty("email","EMAIL;INTERNET"+(""!=e?";"+e:""),t),this}addJobtitle(t){return this.setProperty("jobtitle","TITLE"+this.getCharsetString(),t),this}addRole(t){return this.setProperty("role","ROLE"+this.getCharsetString(),t),this}addMedia(t,e,r=!0,i){return this}addName(t="",e="",r="",i="",n=""){var s=[i,e,r,t,n].filter(t=>!!t),o=t+";"+e+";"+r+";"+i+";"+n;return this.setProperty("name","N"+this.getCharsetString(),o),this.hasProperty("FN")||this.setProperty("fullname","FN"+this.getCharsetString(),s.join(" ").trim()),this}addNote(t){return this.setProperty("note","NOTE"+this.getCharsetString(),t),this}addCategories(t){return this.setProperty("categories","CATEGORIES"+this.getCharsetString(),t.join(",").trim()),this}addPhoneNumber(t,e=""){return this.setProperty("phoneNumber","TEL"+(""!=e?";"+e:""),t),this}addLogo(t,e=!0){return this.addMedia("LOGO",t,e,"logo"),this}addPhoto(t,e=!0){return this.addMedia("PHOTO",t,e,"photo"),this}addURL(t,e=""){return this.setProperty("url","URL"+(""!=e?";"+e:""),t),this}buildVCard(){var t=new Date,e="";return e+="BEGIN:VCARD\r\n",e+="VERSION:3.0\r\n",e+="REV:"+t.toISOString()+"\r\n",this.getProperties().forEach(t=>{e+=this.fold(t.key+":"+this.escape(t.value)+"\r\n")}),e+="END:VCARD\r\n"}fold(t){return t.length<=75?t:t.match(/.{1,73}/g).join("\r\n ").trim()+"\r\n"}escape(t){var e=(""+t).replace("\r\n","\\n");return e=e.replace("\n","\\n")}toString(){return this.getOutput()}getCharset(){return this.charset}getCharsetString(){var t="";return"utf-8"==this.charset&&(t=";CHARSET="+this.charset),t}getContentType(){return this.contentType}getFileExtension(){return this.fileExtension}getOutput(){return this.buildVCard()}getProperties(){return this.properties}hasProperty(t){return this.getProperties().forEach(e=>{if(e.key===t&&""!==e.value)return!0}),!1}setCharset(t){this.charset=t}setProperty(t,e,r){if(this.multiplePropertiesForElementAllowed.indexOf(t)<0&&this.definedElements[t])throw"This element already exists ("+t+")";this.definedElements[t]=!0,this.properties.push({key:e,value:r})}}}])});