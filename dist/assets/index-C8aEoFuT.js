(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jo="178",xu=0,Dl=1,yu=2,lh=1,Mu=2,kn=3,$n=0,Fe=1,ln=2,Xn=0,ss=1,we=2,Il=3,ro=4,Su=5,Mi=100,bu=101,Eu=102,wu=103,Tu=104,Au=200,Cu=201,Ru=202,Pu=203,ao=204,oo=205,Du=206,Iu=207,Lu=208,Uu=209,Nu=210,Fu=211,Ou=212,Bu=213,zu=214,lo=0,co=1,ho=2,cs=3,uo=4,fo=5,po=6,mo=7,ch=0,ku=1,Hu=2,li=0,hh=1,uh=2,dh=3,Qo=4,fh=5,ph=6,mh=7,gh=300,hs=301,us=302,go=303,vo=304,la=306,Jr=1e3,si=1001,_o=1002,nn=1003,Vu=1004,sr=1005,wn=1006,ma=1007,bi=1008,Pn=1009,vh=1010,_h=1011,Ks=1012,tl=1013,Ai=1014,Tn=1015,Rn=1016,el=1017,nl=1018,js=1020,xh=35902,yh=1021,Mh=1022,Mn=1023,Zs=1026,Js=1027,il=1028,sl=1029,Sh=1030,rl=1031,al=1033,Gr=33776,Wr=33777,Xr=33778,qr=33779,xo=35840,yo=35841,Mo=35842,So=35843,bo=36196,Eo=37492,wo=37496,To=37808,Ao=37809,Co=37810,Ro=37811,Po=37812,Do=37813,Io=37814,Lo=37815,Uo=37816,No=37817,Fo=37818,Oo=37819,Bo=37820,zo=37821,Yr=36492,ko=36494,Ho=36495,bh=36283,Vo=36284,Go=36285,Wo=36286,Gu=3200,Wu=3201,Eh=0,Xu=1,Hn="",ke="srgb",ds="srgb-linear",Qr="linear",ie="srgb",Ui=7680,Ll=519,qu=512,Yu=513,$u=514,wh=515,Ku=516,ju=517,Zu=518,Ju=519,Xo=35044,Qu=35048,Ul="300 es",Wn=2e3,ta=2001;class Ms{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Nl=1234567;const Gs=Math.PI/180,Qs=180/Math.PI;function qn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Oe[i&255]+Oe[i>>8&255]+Oe[i>>16&255]+Oe[i>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[n&255]+Oe[n>>8&255]+Oe[n>>16&255]+Oe[n>>24&255]).toLowerCase()}function kt(i,t,e){return Math.max(t,Math.min(e,i))}function ol(i,t){return(i%t+t)%t}function td(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function ed(i,t,e){return i!==t?(e-i)/(t-i):0}function Ws(i,t,e){return(1-e)*i+e*t}function nd(i,t,e,n){return Ws(i,t,1-Math.exp(-e*n))}function id(i,t=1){return t-Math.abs(ol(i,t*2)-t)}function sd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function rd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function ad(i,t){return i+Math.floor(Math.random()*(t-i+1))}function od(i,t){return i+Math.random()*(t-i)}function ld(i){return i*(.5-Math.random())}function cd(i){i!==void 0&&(Nl=i);let t=Nl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function hd(i){return i*Gs}function ud(i){return i*Qs}function dd(i){return(i&i-1)===0&&i!==0}function fd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function pd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function md(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),p=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function yn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function se(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const pe={DEG2RAD:Gs,RAD2DEG:Qs,generateUUID:qn,clamp:kt,euclideanModulo:ol,mapLinear:td,inverseLerp:ed,lerp:Ws,damp:nd,pingpong:id,smoothstep:sd,smootherstep:rd,randInt:ad,randFloat:od,randFloatSpread:ld,seededRandom:cd,degToRad:hd,radToDeg:ud,isPowerOfTwo:dd,ceilPowerOfTwo:fd,floorPowerOfTwo:pd,setQuaternionFromProperEuler:md,normalize:se,denormalize:yn};class nt{constructor(t=0,e=0){nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ri{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],p=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==d||c!==p||h!==g){let m=1-o;const f=l*d+c*p+h*g+u*v,M=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const R=Math.sqrt(S),T=Math.atan2(R,f*M);m=Math.sin(m*T)/R,o=Math.sin(o*T)/R}const _=o*M;if(l=l*m+d*_,c=c*m+p*_,h=h*m+g*_,u=u*m+v*_,m===1-o){const R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-o*p,t[e+2]=c*g+h*p+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(kt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(t=0,e=0,n=0){w.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ga.copy(this).projectOnVector(t),this.sub(ga)}reflect(t){return this.sub(ga.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ga=new w,Fl=new Ri;class Ft{constructor(t,e,n,s,r,a,o,l,c){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],v=s[0],m=s[3],f=s[6],M=s[1],S=s[4],_=s[7],R=s[2],T=s[5],A=s[8];return r[0]=a*v+o*M+l*R,r[3]=a*m+o*S+l*T,r[6]=a*f+o*_+l*A,r[1]=c*v+h*M+u*R,r[4]=c*m+h*S+u*T,r[7]=c*f+h*_+u*A,r[2]=d*v+p*M+g*R,r[5]=d*m+p*S+g*T,r[8]=d*f+p*_+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=d*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=p*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(va.makeScale(t,e)),this}rotate(t){return this.premultiply(va.makeRotation(-t)),this}translate(t,e){return this.premultiply(va.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const va=new Ft;function Th(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ea(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gd(){const i=ea("canvas");return i.style.display="block",i}const Ol={};function rs(i){i in Ol||(Ol[i]=!0,console.warn(i))}function vd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function _d(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function xd(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Bl=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zl=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yd(){const i={enabled:!0,workingColorSpace:ds,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ie&&(s.r=Yn(s.r),s.g=Yn(s.g),s.b=Yn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ie&&(s.r=as(s.r),s.g=as(s.g),s.b=as(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Hn?Qr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return rs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return rs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ds]:{primaries:t,whitePoint:n,transfer:Qr,toXYZ:Bl,fromXYZ:zl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ke},outputColorSpaceConfig:{drawingBufferColorSpace:ke}},[ke]:{primaries:t,whitePoint:n,transfer:ie,toXYZ:Bl,fromXYZ:zl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ke}}}),i}const qt=yd();function Yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function as(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ni;class Md{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ni===void 0&&(Ni=ea("canvas")),Ni.width=t.width,Ni.height=t.height;const s=Ni.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ni}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ea("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Yn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Yn(e[n]/255)*255):e[n]=Yn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Sd=0;class ll{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=qn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(_a(s[a].image)):r.push(_a(s[a]))}else r=_a(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function _a(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Md.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bd=0;const xa=new w;class Ge extends Ms{constructor(t=Ge.DEFAULT_IMAGE,e=Ge.DEFAULT_MAPPING,n=si,s=si,r=wn,a=bi,o=Mn,l=Pn,c=Ge.DEFAULT_ANISOTROPY,h=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=qn(),this.name="",this.source=new ll(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xa).x}get height(){return this.source.getSize(xa).y}get depth(){return this.source.getSize(xa).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Jr:t.x=t.x-Math.floor(t.x);break;case si:t.x=t.x<0?0:1;break;case _o:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Jr:t.y=t.y-Math.floor(t.y);break;case si:t.y=t.y<0?0:1;break;case _o:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=gh;Ge.DEFAULT_ANISOTROPY=1;class ae{constructor(t=0,e=0,n=0,s=1){ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,_=(p+1)/2,R=(f+1)/2,T=(h+d)/4,A=(u+v)/4,P=(g+m)/4;return S>_&&S>R?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=T/n,r=A/n):_>R?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=T/s,r=P/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=A/r,s=P/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-v)/M,this.z=(d-h)/M,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this.w=kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this.w=kt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ed extends Ms{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new Ge(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:wn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new ll(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class un extends Ed{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ah extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class wd extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pi{constructor(t=new w(1/0,1/0,1/0),e=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,gn):gn.fromBufferAttribute(r,a),gn.applyMatrix4(t.matrixWorld),this.expandByPoint(gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),rr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),rr.copy(n.boundingBox)),rr.applyMatrix4(t.matrixWorld),this.union(rr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gn),gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Cs),ar.subVectors(this.max,Cs),Fi.subVectors(t.a,Cs),Oi.subVectors(t.b,Cs),Bi.subVectors(t.c,Cs),Jn.subVectors(Oi,Fi),Qn.subVectors(Bi,Oi),fi.subVectors(Fi,Bi);let e=[0,-Jn.z,Jn.y,0,-Qn.z,Qn.y,0,-fi.z,fi.y,Jn.z,0,-Jn.x,Qn.z,0,-Qn.x,fi.z,0,-fi.x,-Jn.y,Jn.x,0,-Qn.y,Qn.x,0,-fi.y,fi.x,0];return!ya(e,Fi,Oi,Bi,ar)||(e=[1,0,0,0,1,0,0,0,1],!ya(e,Fi,Oi,Bi,ar))?!1:(or.crossVectors(Jn,Qn),e=[or.x,or.y,or.z],ya(e,Fi,Oi,Bi,ar))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Nn=[new w,new w,new w,new w,new w,new w,new w,new w],gn=new w,rr=new Pi,Fi=new w,Oi=new w,Bi=new w,Jn=new w,Qn=new w,fi=new w,Cs=new w,ar=new w,or=new w,pi=new w;function ya(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){pi.fromArray(i,r);const o=s.x*Math.abs(pi.x)+s.y*Math.abs(pi.y)+s.z*Math.abs(pi.z),l=t.dot(pi),c=e.dot(pi),h=n.dot(pi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Td=new Pi,Rs=new w,Ma=new w;class Di{constructor(t=new w,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Td.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Rs.subVectors(t,this.center);const e=Rs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Rs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ma.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Rs.copy(t.center).add(Ma)),this.expandByPoint(Rs.copy(t.center).sub(Ma))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Fn=new w,Sa=new w,lr=new w,ti=new w,ba=new w,cr=new w,Ea=new w;class cl{constructor(t=new w,e=new w(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fn.copy(this.origin).addScaledVector(this.direction,e),Fn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Sa.copy(t).add(e).multiplyScalar(.5),lr.copy(e).sub(t).normalize(),ti.copy(this.origin).sub(Sa);const r=t.distanceTo(e)*.5,a=-this.direction.dot(lr),o=ti.dot(this.direction),l=-ti.dot(lr),c=ti.lengthSq(),h=Math.abs(1-a*a);let u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Sa).addScaledVector(lr,d),p}intersectSphere(t,e){Fn.subVectors(t.center,this.origin);const n=Fn.dot(this.direction),s=Fn.dot(Fn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Fn)!==null}intersectTriangle(t,e,n,s,r){ba.subVectors(e,t),cr.subVectors(n,t),Ea.crossVectors(ba,cr);let a=this.direction.dot(Ea),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ti.subVectors(this.origin,t);const l=o*this.direction.dot(cr.crossVectors(ti,cr));if(l<0)return null;const c=o*this.direction.dot(ba.cross(ti));if(c<0||l+c>a)return null;const h=-o*ti.dot(Ea);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(t,e,n,s,r,a,o,l,c,h,u,d,p,g,v,m){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,p,g,v,m)}set(t,e,n,s,r,a,o,l,c,h,u,d,p,g,v,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/zi.setFromMatrixColumn(t,0).length(),r=1/zi.setFromMatrixColumn(t,1).length(),a=1/zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,p=a*u,g=o*h,v=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-v*c,e[9]=-o*l,e[2]=v-d*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,g=c*h,v=c*u;e[0]=d+v*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=v+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,g=c*h,v=c*u;e[0]=d-v*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=v-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,p=a*u,g=o*h,v=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,p=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-d*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-v*u}else if(t.order==="XZY"){const d=a*l,p=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ad,t,Cd)}lookAt(t,e,n){const s=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),ei.crossVectors(n,Qe),ei.lengthSq()===0&&(Math.abs(n.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),ei.crossVectors(n,Qe)),ei.normalize(),hr.crossVectors(Qe,ei),s[0]=ei.x,s[4]=hr.x,s[8]=Qe.x,s[1]=ei.y,s[5]=hr.y,s[9]=Qe.y,s[2]=ei.z,s[6]=hr.z,s[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],v=n[6],m=n[10],f=n[14],M=n[3],S=n[7],_=n[11],R=n[15],T=s[0],A=s[4],P=s[8],b=s[12],y=s[1],D=s[5],O=s[9],F=s[13],V=s[2],Y=s[6],W=s[10],Z=s[14],H=s[3],ct=s[7],ft=s[11],Et=s[15];return r[0]=a*T+o*y+l*V+c*H,r[4]=a*A+o*D+l*Y+c*ct,r[8]=a*P+o*O+l*W+c*ft,r[12]=a*b+o*F+l*Z+c*Et,r[1]=h*T+u*y+d*V+p*H,r[5]=h*A+u*D+d*Y+p*ct,r[9]=h*P+u*O+d*W+p*ft,r[13]=h*b+u*F+d*Z+p*Et,r[2]=g*T+v*y+m*V+f*H,r[6]=g*A+v*D+m*Y+f*ct,r[10]=g*P+v*O+m*W+f*ft,r[14]=g*b+v*F+m*Z+f*Et,r[3]=M*T+S*y+_*V+R*H,r[7]=M*A+S*D+_*Y+R*ct,r[11]=M*P+S*O+_*W+R*ft,r[15]=M*b+S*F+_*Z+R*Et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],v=t[7],m=t[11],f=t[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*p-n*l*p)+v*(+e*l*p-e*c*d+r*a*d-s*a*p+s*c*h-r*l*h)+m*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+f*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],v=t[13],m=t[14],f=t[15],M=u*m*c-v*d*c+v*l*p-o*m*p-u*l*f+o*d*f,S=g*d*c-h*m*c-g*l*p+a*m*p+h*l*f-a*d*f,_=h*v*c-g*u*c+g*o*p-a*v*p-h*o*f+a*u*f,R=g*u*l-h*v*l-g*o*d+a*v*d+h*o*m-a*u*m,T=e*M+n*S+s*_+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=M*A,t[1]=(v*d*r-u*m*r-v*s*p+n*m*p+u*s*f-n*d*f)*A,t[2]=(o*m*r-v*l*r+v*s*c-n*m*c-o*s*f+n*l*f)*A,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*p-n*l*p)*A,t[4]=S*A,t[5]=(h*m*r-g*d*r+g*s*p-e*m*p-h*s*f+e*d*f)*A,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*f-e*l*f)*A,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*p+e*l*p)*A,t[8]=_*A,t[9]=(g*u*r-h*v*r-g*n*p+e*v*p+h*n*f-e*u*f)*A,t[10]=(a*v*r-g*o*r+g*n*c-e*v*c-a*n*f+e*o*f)*A,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*A,t[12]=R*A,t[13]=(h*v*s-g*u*s+g*n*d-e*v*d-h*n*m+e*u*m)*A,t[14]=(g*o*s-a*v*s-g*n*l+e*v*l+a*n*m-e*o*m)*A,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,g=r*u,v=a*h,m=a*u,f=o*u,M=l*c,S=l*h,_=l*u,R=n.x,T=n.y,A=n.z;return s[0]=(1-(v+f))*R,s[1]=(p+_)*R,s[2]=(g-S)*R,s[3]=0,s[4]=(p-_)*T,s[5]=(1-(d+f))*T,s[6]=(m+M)*T,s[7]=0,s[8]=(g+S)*A,s[9]=(m-M)*A,s[10]=(1-(d+v))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=zi.set(s[0],s[1],s[2]).length();const a=zi.set(s[4],s[5],s[6]).length(),o=zi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],vn.copy(this);const c=1/r,h=1/a,u=1/o;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=h,vn.elements[5]*=h,vn.elements[6]*=h,vn.elements[8]*=u,vn.elements[9]*=u,vn.elements[10]*=u,e.setFromRotationMatrix(vn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Wn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let p,g;if(o===Wn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ta)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Wn){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,p=(n+s)*h;let g,v;if(o===Wn)g=(a+r)*u,v=-2*u;else if(o===ta)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const zi=new w,vn=new jt,Ad=new w(0,0,0),Cd=new w(1,1,1),ei=new w,hr=new w,Qe=new w,kl=new jt,Hl=new Ri;class pn{constructor(t=0,e=0,n=0,s=pn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return kl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(kl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Hl.setFromEuler(this),this.setFromQuaternion(Hl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pn.DEFAULT_ORDER="XYZ";class hl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Rd=0;const Vl=new w,ki=new Ri,On=new jt,ur=new w,Ps=new w,Pd=new w,Dd=new Ri,Gl=new w(1,0,0),Wl=new w(0,1,0),Xl=new w(0,0,1),ql={type:"added"},Id={type:"removed"},Hi={type:"childadded",child:null},wa={type:"childremoved",child:null};class Re extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Re.DEFAULT_UP.clone();const t=new w,e=new pn,n=new Ri,s=new w(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new jt},normalMatrix:{value:new Ft}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=Re.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.multiply(ki),this}rotateOnWorldAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.premultiply(ki),this}rotateX(t){return this.rotateOnAxis(Gl,t)}rotateY(t){return this.rotateOnAxis(Wl,t)}rotateZ(t){return this.rotateOnAxis(Xl,t)}translateOnAxis(t,e){return Vl.copy(t).applyQuaternion(this.quaternion),this.position.add(Vl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Gl,t)}translateY(t){return this.translateOnAxis(Wl,t)}translateZ(t){return this.translateOnAxis(Xl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ur.copy(t):ur.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(Ps,ur,this.up):On.lookAt(ur,Ps,this.up),this.quaternion.setFromRotationMatrix(On),s&&(On.extractRotation(s.matrixWorld),ki.setFromRotationMatrix(On),this.quaternion.premultiply(ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ql),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Id),wa.child=t,this.dispatchEvent(wa),wa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),On.multiply(t.parent.matrixWorld)),t.applyMatrix4(On),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ql),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,t,Pd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,Dd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Re.DEFAULT_UP=new w(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new w,Bn=new w,Ta=new w,zn=new w,Vi=new w,Gi=new w,Yl=new w,Aa=new w,Ca=new w,Ra=new w,Pa=new ae,Da=new ae,Ia=new ae;class cn{constructor(t=new w,e=new w,n=new w){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),_n.subVectors(t,e),s.cross(_n);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){_n.subVectors(s,e),Bn.subVectors(n,e),Ta.subVectors(t,e);const a=_n.dot(_n),o=_n.dot(Bn),l=_n.dot(Ta),c=Bn.dot(Bn),h=Bn.dot(Ta),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,zn.x),l.addScaledVector(a,zn.y),l.addScaledVector(o,zn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Pa.setScalar(0),Da.setScalar(0),Ia.setScalar(0),Pa.fromBufferAttribute(t,e),Da.fromBufferAttribute(t,n),Ia.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Pa,r.x),a.addScaledVector(Da,r.y),a.addScaledVector(Ia,r.z),a}static isFrontFacing(t,e,n,s){return _n.subVectors(n,e),Bn.subVectors(t,e),_n.cross(Bn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _n.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),_n.cross(Bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return cn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return cn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Vi.subVectors(s,n),Gi.subVectors(r,n),Aa.subVectors(t,n);const l=Vi.dot(Aa),c=Gi.dot(Aa);if(l<=0&&c<=0)return e.copy(n);Ca.subVectors(t,s);const h=Vi.dot(Ca),u=Gi.dot(Ca);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Vi,a);Ra.subVectors(t,r);const p=Vi.dot(Ra),g=Gi.dot(Ra);if(g>=0&&p<=g)return e.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Gi,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Yl.subVectors(r,s),o=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(Yl,o);const f=1/(m+v+d);return a=v*f,o=d*f,e.copy(n).addScaledVector(Vi,a).addScaledVector(Gi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ch={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},dr={h:0,s:0,l:0};function La(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class _t{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=qt.workingColorSpace){if(t=ol(t,1),e=kt(e,0,1),n=kt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=La(a,r,t+1/3),this.g=La(a,r,t),this.b=La(a,r,t-1/3)}return qt.colorSpaceToWorking(this,s),this}setStyle(t,e=ke){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){const n=Ch[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Yn(t.r),this.g=Yn(t.g),this.b=Yn(t.b),this}copyLinearToSRGB(t){return this.r=as(t.r),this.g=as(t.g),this.b=as(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return qt.workingToColorSpace(Be.copy(this),t),Math.round(kt(Be.r*255,0,255))*65536+Math.round(kt(Be.g*255,0,255))*256+Math.round(kt(Be.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.workingToColorSpace(Be.copy(this),e);const n=Be.r,s=Be.g,r=Be.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.workingToColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=ke){qt.workingToColorSpace(Be.copy(this),t);const e=Be.r,n=Be.g,s=Be.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ni),this.setHSL(ni.h+t,ni.s+e,ni.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ni),t.getHSL(dr);const n=Ws(ni.h,dr.h,e),s=Ws(ni.s,dr.s,e),r=Ws(ni.l,dr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Be=new _t;_t.NAMES=Ch;let Ld=0;class ci extends Ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=qn(),this.name="",this.type="Material",this.blending=ss,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ao,this.blendDst=oo,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ll,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ui,this.stencilZFail=Ui,this.stencilZPass=Ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(n.blending=this.blending),this.side!==$n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ao&&(n.blendSrc=this.blendSrc),this.blendDst!==oo&&(n.blendDst=this.blendDst),this.blendEquation!==Mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==cs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ll&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ve extends ci{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=ch,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ae=new w,fr=new nt;let Ud=0;class ye{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ud++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Xo,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)fr.fromBufferAttribute(this,e),fr.applyMatrix3(t),this.setXY(e,fr.x,fr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=yn(e,this.array)),e}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=yn(e,this.array)),e}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=yn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=yn(e,this.array)),e}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array),r=se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Xo&&(t.usage=this.usage),t}}class Rh extends ye{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ph extends ye{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Xt extends ye{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Nd=0;const on=new jt,Ua=new Re,Wi=new w,tn=new Pi,Ds=new Pi,Le=new w;class ee extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Th(t)?Ph:Rh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ft().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,n){return on.makeTranslation(t,e,n),this.applyMatrix4(on),this}scale(t,e,n){return on.makeScale(t,e,n),this.applyMatrix4(on),this}lookAt(t){return Ua.lookAt(t),Ua.updateMatrix(),this.applyMatrix4(Ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Xt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Di);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(t){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ds.setFromBufferAttribute(o),this.morphTargetsRelative?(Le.addVectors(tn.min,Ds.min),tn.expandByPoint(Le),Le.addVectors(tn.max,Ds.max),tn.expandByPoint(Le)):(tn.expandByPoint(Ds.min),tn.expandByPoint(Ds.max))}tn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Le.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Le));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Le.fromBufferAttribute(o,c),l&&(Wi.fromBufferAttribute(t,c),Le.add(Wi)),s=Math.max(s,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ye(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new w,l[P]=new w;const c=new w,h=new w,u=new w,d=new nt,p=new nt,g=new nt,v=new w,m=new w;function f(P,b,y){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,P),p.fromBufferAttribute(r,b),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(D),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(D),o[P].add(v),o[b].add(v),o[y].add(v),l[P].add(m),l[b].add(m),l[y].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let P=0,b=M.length;P<b;++P){const y=M[P],D=y.start,O=y.count;for(let F=D,V=D+O;F<V;F+=3)f(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const S=new w,_=new w,R=new w,T=new w;function A(P){R.fromBufferAttribute(s,P),T.copy(R);const b=o[P];S.copy(b),S.sub(R.multiplyScalar(R.dot(b))).normalize(),_.crossVectors(T,b);const D=_.dot(l[P])<0?-1:1;a.setXYZW(P,S.x,S.y,S.z,D)}for(let P=0,b=M.length;P<b;++P){const y=M[P],D=y.start,O=y.count;for(let F=D,V=D+O;F<V;F+=3)A(t.getX(F+0)),A(t.getX(F+1)),A(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ye(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new w,r=new w,a=new w,o=new w,l=new w,c=new w,h=new w,u=new w;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new ye(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ee,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $l=new jt,mi=new cl,pr=new Di,Kl=new w,mr=new w,gr=new w,vr=new w,Na=new w,_r=new w,jl=new w,xr=new w;class at extends Re{constructor(t=new ee,e=new Ve){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){_r.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Na.fromBufferAttribute(u,t),a?_r.addScaledVector(Na,h):_r.addScaledVector(Na.sub(e),h))}e.add(_r)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(r),mi.copy(t.ray).recast(t.near),!(pr.containsPoint(mi.origin)===!1&&(mi.intersectSphere(pr,Kl)===null||mi.origin.distanceToSquared(Kl)>(t.far-t.near)**2))&&($l.copy(r).invert(),mi.copy(t.ray).applyMatrix4($l),!(n.boundingBox!==null&&mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,mi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=a[m.materialIndex],M=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=M,R=S;_<R;_+=3){const T=o.getX(_),A=o.getX(_+1),P=o.getX(_+2);s=yr(this,f,t,n,c,h,u,T,A,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const M=o.getX(m),S=o.getX(m+1),_=o.getX(m+2);s=yr(this,a,t,n,c,h,u,M,S,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=a[m.materialIndex],M=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=M,R=S;_<R;_+=3){const T=_,A=_+1,P=_+2;s=yr(this,f,t,n,c,h,u,T,A,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const M=m,S=m+1,_=m+2;s=yr(this,a,t,n,c,h,u,M,S,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Fd(i,t,e,n,s,r,a,o){let l;if(t.side===Fe?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===$n,o),l===null)return null;xr.copy(o),xr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(xr);return c<e.near||c>e.far?null:{distance:c,point:xr.clone(),object:i}}function yr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,mr),i.getVertexPosition(l,gr),i.getVertexPosition(c,vr);const h=Fd(i,t,e,n,mr,gr,vr,jl);if(h){const u=new w;cn.getBarycoord(jl,mr,gr,vr,u),s&&(h.uv=cn.getInterpolatedAttribute(s,o,l,c,u,new nt)),r&&(h.uv1=cn.getInterpolatedAttribute(r,o,l,c,u,new nt)),a&&(h.normal=cn.getInterpolatedAttribute(a,o,l,c,u,new w),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new w,materialIndex:0};cn.getNormal(mr,gr,vr,d.normal),h.face=d,h.barycoord=u}return h}class Ke extends ee{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(h,3)),this.setAttribute("uv",new Xt(u,2));function g(v,m,f,M,S,_,R,T,A,P,b){const y=_/A,D=R/P,O=_/2,F=R/2,V=T/2,Y=A+1,W=P+1;let Z=0,H=0;const ct=new w;for(let ft=0;ft<W;ft++){const Et=ft*D-F;for(let Vt=0;Vt<Y;Vt++){const oe=Vt*y-O;ct[v]=oe*M,ct[m]=Et*S,ct[f]=V,c.push(ct.x,ct.y,ct.z),ct[v]=0,ct[m]=0,ct[f]=T>0?1:-1,h.push(ct.x,ct.y,ct.z),u.push(Vt/A),u.push(1-ft/P),Z+=1}}for(let ft=0;ft<P;ft++)for(let Et=0;Et<A;Et++){const Vt=d+Et+Y*ft,oe=d+Et+Y*(ft+1),q=d+(Et+1)+Y*(ft+1),et=d+(Et+1)+Y*ft;l.push(Vt,oe,et),l.push(oe,q,et),H+=6}o.addGroup(p,H,b),p+=H,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ke(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function fs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ye(i){const t={};for(let e=0;e<i.length;e++){const n=fs(i[e]);for(const s in n)t[s]=n[s]}return t}function Od(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Dh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const ps={clone:fs,merge:Ye};var Bd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Me extends ci{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bd,this.fragmentShader=zd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fs(t.uniforms),this.uniformsGroups=Od(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ih extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Wn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ii=new w,Zl=new nt,Jl=new nt;class en extends Ih{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Qs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Gs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qs*2*Math.atan(Math.tan(Gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ii.x,ii.y).multiplyScalar(-t/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ii.x,ii.y).multiplyScalar(-t/ii.z)}getViewSize(t,e){return this.getViewBounds(t,Zl,Jl),e.subVectors(Jl,Zl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Gs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Xi=-90,qi=1;class kd extends Re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new en(Xi,qi,t,e);s.layers=this.layers,this.add(s);const r=new en(Xi,qi,t,e);r.layers=this.layers,this.add(r);const a=new en(Xi,qi,t,e);a.layers=this.layers,this.add(a);const o=new en(Xi,qi,t,e);o.layers=this.layers,this.add(o);const l=new en(Xi,qi,t,e);l.layers=this.layers,this.add(l);const c=new en(Xi,qi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ta)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Lh extends Ge{constructor(t=[],e=hs,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Hd extends un{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Lh(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ke(5,5,5),r=new Me({name:"CubemapFromEquirect",uniforms:fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fe,blending:Xn});r.uniforms.tEquirect.value=e;const a=new at(s,r),o=e.minFilter;return e.minFilter===bi&&(e.minFilter=wn),new kd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class he extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vd={type:"move"};class Fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new he,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new he,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new he,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Vd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new he;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Gd extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Wd{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Xo,this.updateRanges=[],this.version=0,this.uuid=qn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const qe=new w;class na{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=yn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=yn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=yn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=yn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array),r=se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ye(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new na(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ii extends ci{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Yi;const Is=new w,$i=new w,Ki=new w,ji=new nt,Ls=new nt,Uh=new jt,Mr=new w,Us=new w,Sr=new w,Ql=new nt,Oa=new nt,tc=new nt;class Ss extends Re{constructor(t=new Ii){if(super(),this.isSprite=!0,this.type="Sprite",Yi===void 0){Yi=new ee;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Wd(e,5);Yi.setIndex([0,1,2,0,2,3]),Yi.setAttribute("position",new na(n,3,0,!1)),Yi.setAttribute("uv",new na(n,2,3,!1))}this.geometry=Yi,this.material=t,this.center=new nt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$i.setFromMatrixScale(this.matrixWorld),Uh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ki.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$i.multiplyScalar(-Ki.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;br(Mr.set(-.5,-.5,0),Ki,a,$i,s,r),br(Us.set(.5,-.5,0),Ki,a,$i,s,r),br(Sr.set(.5,.5,0),Ki,a,$i,s,r),Ql.set(0,0),Oa.set(1,0),tc.set(1,1);let o=t.ray.intersectTriangle(Mr,Us,Sr,!1,Is);if(o===null&&(br(Us.set(-.5,.5,0),Ki,a,$i,s,r),Oa.set(0,1),o=t.ray.intersectTriangle(Mr,Sr,Us,!1,Is),o===null))return;const l=t.ray.origin.distanceTo(Is);l<t.near||l>t.far||e.push({distance:l,point:Is.clone(),uv:cn.getInterpolation(Is,Mr,Us,Sr,Ql,Oa,tc,new nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function br(i,t,e,n,s,r){ji.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ls.x=r*ji.x-s*ji.y,Ls.y=s*ji.x+r*ji.y):Ls.copy(ji),i.copy(t),i.x+=Ls.x,i.y+=Ls.y,i.applyMatrix4(Uh)}class Xd extends Ge{constructor(t=null,e=1,n=1,s,r,a,o,l,c=nn,h=nn,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ec extends ye{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Zi=new jt,nc=new jt,Er=[],ic=new Pi,qd=new jt,Ns=new at,Fs=new Di;class Nh extends at{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ec(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,qd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Pi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Zi),ic.copy(t.boundingBox).applyMatrix4(Zi),this.boundingBox.union(ic)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Di),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Zi),Fs.copy(t.boundingSphere).applyMatrix4(Zi),this.boundingSphere.union(Fs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ns.geometry=this.geometry,Ns.material=this.material,Ns.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fs.copy(this.boundingSphere),Fs.applyMatrix4(n),t.ray.intersectsSphere(Fs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Zi),nc.multiplyMatrices(n,Zi),Ns.matrixWorld=nc,Ns.raycast(t,Er);for(let a=0,o=Er.length;a<o;a++){const l=Er[a];l.instanceId=r,l.object=this,e.push(l)}Er.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ec(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Xd(new Float32Array(s*this.count),s,this.count,il,Tn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ba=new w,Yd=new w,$d=new Ft;class xi{constructor(t=new w(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ba.subVectors(n,e).cross(Yd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ba),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||$d.getNormalMatrix(t),s=this.coplanarPoint(Ba).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gi=new Di,Kd=new nt(.5,.5),wr=new w;class ul{constructor(t=new xi,e=new xi,n=new xi,s=new xi,r=new xi,a=new xi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Wn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],v=s[10],m=s[11],f=s[12],M=s[13],S=s[14],_=s[15];if(n[0].setComponents(l-r,d-c,m-p,_-f).normalize(),n[1].setComponents(l+r,d+c,m+p,_+f).normalize(),n[2].setComponents(l+a,d+h,m+g,_+M).normalize(),n[3].setComponents(l-a,d-h,m-g,_-M).normalize(),n[4].setComponents(l-o,d-u,m-v,_-S).normalize(),e===Wn)n[5].setComponents(l+o,d+u,m+v,_+S).normalize();else if(e===ta)n[5].setComponents(o,u,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(t){gi.center.set(0,0,0);const e=Kd.distanceTo(t.center);return gi.radius=.7071067811865476+e,gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(wr.x=s.normal.x>0?t.max.x:t.min.x,wr.y=s.normal.y>0?t.max.y:t.min.y,wr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(wr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bs extends ci{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ia=new w,sa=new w,sc=new jt,Os=new cl,Tr=new Di,za=new w,rc=new w;class er extends Re{constructor(t=new ee,e=new bs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ia.fromBufferAttribute(e,s-1),sa.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ia.distanceTo(sa);t.setAttribute("lineDistance",new Xt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(s),Tr.radius+=r,t.ray.intersectsSphere(Tr)===!1)return;sc.copy(s).invert(),Os.copy(t.ray).applyMatrix4(sc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=c){const f=h.getX(v),M=h.getX(v+1),S=Ar(this,t,Os,l,f,M,v);S&&e.push(S)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(p),f=Ar(this,t,Os,l,v,m,g-1);f&&e.push(f)}}else{const p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=c){const f=Ar(this,t,Os,l,v,v+1,v);f&&e.push(f)}if(this.isLineLoop){const v=Ar(this,t,Os,l,g-1,p,g-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ar(i,t,e,n,s,r,a){const o=i.geometry.attributes.position;if(ia.fromBufferAttribute(o,s),sa.fromBufferAttribute(o,r),e.distanceSqToSegment(ia,sa,za,rc)>n)return;za.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(za);if(!(c<t.near||c>t.far))return{distance:c,point:rc.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const ac=new w,oc=new w;class jd extends er{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)ac.fromBufferAttribute(e,s),oc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ac.distanceTo(oc);t.setAttribute("lineDistance",new Xt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ri extends ci{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const lc=new jt,qo=new cl,Cr=new Di,Rr=new w;class Ei extends Re{constructor(t=new ee,e=new ri){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(s),Cr.radius+=r,t.ray.intersectsSphere(Cr)===!1)return;lc.copy(s).invert(),qo.copy(t.ray).applyMatrix4(lc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,v=p;g<v;g++){const m=c.getX(g);Rr.fromBufferAttribute(u,m),cc(Rr,m,l,s,t,e,this)}}else{const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=d,v=p;g<v;g++)Rr.fromBufferAttribute(u,g),cc(Rr,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function cc(i,t,e,n,s,r,a){const o=qo.distanceSqToPoint(i);if(o<e){const l=new w;qo.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class hi extends Ge{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fh extends Ge{constructor(t,e,n=Ai,s,r,a,o=nn,l=nn,c,h=Zs,u=1){if(h!==Zs&&h!==Js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ll(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class dl extends ee{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],h=e/2,u=Math.PI/2*t,d=e,p=2*u+d,g=n*2+r,v=s+1,m=new w,f=new w;for(let M=0;M<=g;M++){let S=0,_=0,R=0,T=0;if(M<=n){const b=M/n,y=b*Math.PI/2;_=-h-t*Math.cos(y),R=t*Math.sin(y),T=-t*Math.cos(y),S=b*u}else if(M<=n+r){const b=(M-n)/r;_=-h+b*e,R=t,T=0,S=u+b*d}else{const b=(M-n-r)/n,y=b*Math.PI/2;_=h+t*Math.sin(y),R=t*Math.cos(y),T=t*Math.sin(y),S=u+d+b*u}const A=Math.max(0,Math.min(1,S/p));let P=0;M===0?P=.5/s:M===g&&(P=-.5/s);for(let b=0;b<=s;b++){const y=b/s,D=y*Math.PI*2,O=Math.sin(D),F=Math.cos(D);f.x=-R*F,f.y=_,f.z=R*O,o.push(f.x,f.y,f.z),m.set(-R*F,T,R*O),m.normalize(),l.push(m.x,m.y,m.z),c.push(y+P,A)}if(M>0){const b=(M-1)*v;for(let y=0;y<s;y++){const D=b+y,O=b+y+1,F=M*v+y,V=M*v+y+1;a.push(D,O,F),a.push(O,V,F)}}}this.setIndex(a),this.setAttribute("position",new Xt(o,3)),this.setAttribute("normal",new Xt(l,3)),this.setAttribute("uv",new Xt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dl(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Xs extends ee{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new w,h=new nt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=n+u/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Xt(a,3)),this.setAttribute("normal",new Xt(o,3)),this.setAttribute("uv",new Xt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class $e extends ee{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],p=[];let g=0;const v=[],m=n/2;let f=0;M(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Xt(u,3)),this.setAttribute("normal",new Xt(d,3)),this.setAttribute("uv",new Xt(p,2));function M(){const _=new w,R=new w;let T=0;const A=(e-t)/n;for(let P=0;P<=r;P++){const b=[],y=P/r,D=y*(e-t)+t;for(let O=0;O<=s;O++){const F=O/s,V=F*l+o,Y=Math.sin(V),W=Math.cos(V);R.x=D*Y,R.y=-y*n+m,R.z=D*W,u.push(R.x,R.y,R.z),_.set(Y,A,W).normalize(),d.push(_.x,_.y,_.z),p.push(F,1-y),b.push(g++)}v.push(b)}for(let P=0;P<s;P++)for(let b=0;b<r;b++){const y=v[b][P],D=v[b+1][P],O=v[b+1][P+1],F=v[b][P+1];(t>0||b!==0)&&(h.push(y,D,F),T+=3),(e>0||b!==r-1)&&(h.push(D,O,F),T+=3)}c.addGroup(f,T,0),f+=T}function S(_){const R=g,T=new nt,A=new w;let P=0;const b=_===!0?t:e,y=_===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,m*y,0),d.push(0,y,0),p.push(.5,.5),g++;const D=g;for(let O=0;O<=s;O++){const V=O/s*l+o,Y=Math.cos(V),W=Math.sin(V);A.x=b*W,A.y=m*y,A.z=b*Y,u.push(A.x,A.y,A.z),d.push(0,y,0),T.x=Y*.5+.5,T.y=W*.5*y+.5,p.push(T.x,T.y),g++}for(let O=0;O<s;O++){const F=R+O,V=D+O;_===!0?h.push(V,V+1,F):h.push(V+1,V,F),P+=3}c.addGroup(f,P,_===!0?1:2),f+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class os extends $e{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new os(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class fl extends ee{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Xt(r,3)),this.setAttribute("normal",new Xt(r.slice(),3)),this.setAttribute("uv",new Xt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const S=new w,_=new w,R=new w;for(let T=0;T<e.length;T+=3)p(e[T+0],S),p(e[T+1],_),p(e[T+2],R),l(S,_,R,M)}function l(M,S,_,R){const T=R+1,A=[];for(let P=0;P<=T;P++){A[P]=[];const b=M.clone().lerp(_,P/T),y=S.clone().lerp(_,P/T),D=T-P;for(let O=0;O<=D;O++)O===0&&P===T?A[P][O]=b:A[P][O]=b.clone().lerp(y,O/D)}for(let P=0;P<T;P++)for(let b=0;b<2*(T-P)-1;b++){const y=Math.floor(b/2);b%2===0?(d(A[P][y+1]),d(A[P+1][y]),d(A[P][y])):(d(A[P][y+1]),d(A[P+1][y+1]),d(A[P+1][y]))}}function c(M){const S=new w;for(let _=0;_<r.length;_+=3)S.x=r[_+0],S.y=r[_+1],S.z=r[_+2],S.normalize().multiplyScalar(M),r[_+0]=S.x,r[_+1]=S.y,r[_+2]=S.z}function h(){const M=new w;for(let S=0;S<r.length;S+=3){M.x=r[S+0],M.y=r[S+1],M.z=r[S+2];const _=m(M)/2/Math.PI+.5,R=f(M)/Math.PI+.5;a.push(_,1-R)}g(),u()}function u(){for(let M=0;M<a.length;M+=6){const S=a[M+0],_=a[M+2],R=a[M+4],T=Math.max(S,_,R),A=Math.min(S,_,R);T>.9&&A<.1&&(S<.2&&(a[M+0]+=1),_<.2&&(a[M+2]+=1),R<.2&&(a[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function p(M,S){const _=M*3;S.x=t[_+0],S.y=t[_+1],S.z=t[_+2]}function g(){const M=new w,S=new w,_=new w,R=new w,T=new nt,A=new nt,P=new nt;for(let b=0,y=0;b<r.length;b+=9,y+=6){M.set(r[b+0],r[b+1],r[b+2]),S.set(r[b+3],r[b+4],r[b+5]),_.set(r[b+6],r[b+7],r[b+8]),T.set(a[y+0],a[y+1]),A.set(a[y+2],a[y+3]),P.set(a[y+4],a[y+5]),R.copy(M).add(S).add(_).divideScalar(3);const D=m(R);v(T,y+0,M,D),v(A,y+2,S,D),v(P,y+4,_,D)}}function v(M,S,_,R){R<0&&M.x===1&&(a[S]=M.x-1),_.x===0&&_.z===0&&(a[S]=R/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function f(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fl(t.vertices,t.indices,t.radius,t.details)}}class Kn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],d=n[s+1]-h,p=(a-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new nt:new w);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new w,s=[],r=[],a=[],o=new w,l=new jt;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new w)}r[0]=new w,a[0]=new w;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(kt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(kt(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Oh extends Kn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new nt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Zd extends Oh{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function pl(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,s(a,o,d,p)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Pr=new w,ka=new pl,Ha=new pl,Va=new pl;class Jd extends Kn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new w){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Pr.subVectors(s[0],s[1]).add(s[0]),c=Pr);const u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Pr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Pr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),ka.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,v,m),Ha.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,v,m),Va.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(ka.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ha.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Va.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(ka.calc(l),Ha.calc(l),Va.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new w().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function hc(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Qd(i,t){const e=1-i;return e*e*t}function tf(i,t){return 2*(1-i)*i*t}function ef(i,t){return i*i*t}function qs(i,t,e,n){return Qd(i,t)+tf(i,e)+ef(i,n)}function nf(i,t){const e=1-i;return e*e*e*t}function sf(i,t){const e=1-i;return 3*e*e*i*t}function rf(i,t){return 3*(1-i)*i*i*t}function af(i,t){return i*i*i*t}function Ys(i,t,e,n,s){return nf(i,t)+sf(i,e)+rf(i,n)+af(i,s)}class of extends Kn{constructor(t=new nt,e=new nt,n=new nt,s=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new nt){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ys(t,s.x,r.x,a.x,o.x),Ys(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class lf extends Kn{constructor(t=new w,e=new w,n=new w,s=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new w){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ys(t,s.x,r.x,a.x,o.x),Ys(t,s.y,r.y,a.y,o.y),Ys(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class cf extends Kn{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hf extends Kn{constructor(t=new w,e=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new w){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new w){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class uf extends Kn{constructor(t=new nt,e=new nt,n=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new nt){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(qs(t,s.x,r.x,a.x),qs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ml extends Kn{constructor(t=new w,e=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new w){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(qs(t,s.x,r.x,a.x),qs(t,s.y,r.y,a.y),qs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class df extends Kn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(hc(o,l.x,c.x,h.x,u.x),hc(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new nt().fromArray(s))}return this}}var ff=Object.freeze({__proto__:null,ArcCurve:Zd,CatmullRomCurve3:Jd,CubicBezierCurve:of,CubicBezierCurve3:lf,EllipseCurve:Oh,LineCurve:cf,LineCurve3:hf,QuadraticBezierCurve:uf,QuadraticBezierCurve3:ml,SplineCurve:df});class ms extends fl{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ms(t.radius,t.detail)}}class Ci extends ee{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,p=[],g=[],v=[],m=[];for(let f=0;f<h;f++){const M=f*d-a;for(let S=0;S<c;S++){const _=S*u-r;g.push(_,-M,0),v.push(0,0,1),m.push(S/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<o;M++){const S=M+c*f,_=M+c*(f+1),R=M+1+c*(f+1),T=M+1+c*f;p.push(S,_,T),p.push(_,R,T)}this.setIndex(p),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(v,3)),this.setAttribute("uv",new Xt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ci(t.width,t.height,t.widthSegments,t.heightSegments)}}class ca extends ee{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let u=t;const d=(e-t)/s,p=new w,g=new nt;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){const f=r+m/n*a;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let v=0;v<s;v++){const m=v*(n+1);for(let f=0;f<n;f++){const M=f+m,S=M,_=M+n+1,R=M+n+2,T=M+1;o.push(S,_,T),o.push(_,R,T)}}this.setIndex(o),this.setAttribute("position",new Xt(l,3)),this.setAttribute("normal",new Xt(c,3)),this.setAttribute("uv",new Xt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ca(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Te extends ee{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new w,d=new w,p=[],g=[],v=[],m=[];for(let f=0;f<=n;f++){const M=[],S=f/n;let _=0;f===0&&a===0?_=.5/e:f===n&&l===Math.PI&&(_=-.5/e);for(let R=0;R<=e;R++){const T=R/e;u.x=-t*Math.cos(s+T*r)*Math.sin(a+S*o),u.y=t*Math.cos(a+S*o),u.z=t*Math.sin(s+T*r)*Math.sin(a+S*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(T+_,1-S),M.push(c++)}h.push(M)}for(let f=0;f<n;f++)for(let M=0;M<e;M++){const S=h[f][M+1],_=h[f][M],R=h[f+1][M],T=h[f+1][M+1];(f!==0||a>0)&&p.push(S,_,T),(f!==n-1||l<Math.PI)&&p.push(_,R,T)}this.setIndex(p),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(v,3)),this.setAttribute("uv",new Xt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Te(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class tr extends ee{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new w,u=new w,d=new w;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const v=g/s*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const v=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,M=(s+1)*p+g;a.push(v,m,M),a.push(m,f,M)}this.setIndex(a),this.setAttribute("position",new Xt(o,3)),this.setAttribute("normal",new Xt(l,3)),this.setAttribute("uv",new Xt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class gl extends ee{constructor(t=new ml(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new w,l=new w,c=new nt;let h=new w;const u=[],d=[],p=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Xt(u,3)),this.setAttribute("normal",new Xt(d,3)),this.setAttribute("uv",new Xt(p,2));function v(){for(let S=0;S<e;S++)m(S);m(r===!1?e:0),M(),f()}function m(S){h=t.getPointAt(S/e,h);const _=a.normals[S],R=a.binormals[S];for(let T=0;T<=s;T++){const A=T/s*Math.PI*2,P=Math.sin(A),b=-Math.cos(A);l.x=b*_.x+P*R.x,l.y=b*_.y+P*R.y,l.z=b*_.z+P*R.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function f(){for(let S=1;S<=e;S++)for(let _=1;_<=s;_++){const R=(s+1)*(S-1)+(_-1),T=(s+1)*S+(_-1),A=(s+1)*S+_,P=(s+1)*(S-1)+_;g.push(R,T,P),g.push(T,A,P)}}function M(){for(let S=0;S<=e;S++)for(let _=0;_<=s;_++)c.x=S/e,c.y=_/s,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new gl(new ff[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class pf extends Me{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Kt extends ci{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eh,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class mf extends Kt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new nt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new _t(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _t(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _t(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class gf extends ci{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class vf extends ci{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class _f extends bs{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}class Bh extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Ga=new jt,uc=new w,dc=new w;class xf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.mapType=Pn,this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ul,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;uc.setFromMatrixPosition(t.matrixWorld),e.position.copy(uc),dc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(dc),e.updateMatrixWorld(),Ga.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ga),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ga)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const fc=new jt,Bs=new w,Wa=new w;class yf extends xf{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new ae(2,1,1,1),new ae(0,1,1,1),new ae(3,1,1,1),new ae(1,1,1,1),new ae(3,0,1,1),new ae(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Bs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Bs),Wa.copy(n.position),Wa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Wa),n.updateMatrixWorld(),s.makeTranslation(-Bs.x,-Bs.y,-Bs.z),fc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fc)}}class Mf extends Bh{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new yf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class zh extends Ih{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Sf extends Bh{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class bf extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class kh{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function pc(i,t,e,n){const s=Ef(n);switch(e){case yh:return i*t;case il:return i*t/s.components*s.byteLength;case sl:return i*t/s.components*s.byteLength;case Sh:return i*t*2/s.components*s.byteLength;case rl:return i*t*2/s.components*s.byteLength;case Mh:return i*t*3/s.components*s.byteLength;case Mn:return i*t*4/s.components*s.byteLength;case al:return i*t*4/s.components*s.byteLength;case Gr:case Wr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xr:case qr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case yo:case So:return Math.max(i,16)*Math.max(t,8)/4;case xo:case Mo:return Math.max(i,8)*Math.max(t,8)/2;case bo:case Eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case To:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ao:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Co:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ro:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Po:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Do:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Io:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Lo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Uo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case No:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Fo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Oo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Bo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case zo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Yr:case ko:case Ho:return Math.ceil(i/4)*Math.ceil(t/4)*16;case bh:case Vo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Go:case Wo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ef(i){switch(i){case Pn:case vh:return{byteLength:1,components:1};case Ks:case _h:case Rn:return{byteLength:2,components:1};case el:case nl:return{byteLength:2,components:4};case Ai:case tl:case Tn:return{byteLength:4,components:1};case xh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Hh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function wf(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],v=u[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const v=u[p];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Tf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Af=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Cf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Df=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,If=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Lf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Nf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ff=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Of=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,kf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$f=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Kf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,jf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Zf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Jf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ep=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,np="gl_FragColor = linearToOutputTexel( gl_FragColor );",ip=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ap=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,op=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,up=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,pp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_p=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,xp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ep=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Tp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ap=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ip=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Up=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Np=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Op=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Vp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Wp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$p=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Kp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,em=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,im=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,am=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,om=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,lm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,um=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,mm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_m=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ym=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Em=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Im=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Lm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Um=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Om=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,km=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Wm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ym=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$m=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Km=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,t0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,e0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,i0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,s0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bt={alphahash_fragment:Tf,alphahash_pars_fragment:Af,alphamap_fragment:Cf,alphamap_pars_fragment:Rf,alphatest_fragment:Pf,alphatest_pars_fragment:Df,aomap_fragment:If,aomap_pars_fragment:Lf,batching_pars_vertex:Uf,batching_vertex:Nf,begin_vertex:Ff,beginnormal_vertex:Of,bsdfs:Bf,iridescence_fragment:zf,bumpmap_pars_fragment:kf,clipping_planes_fragment:Hf,clipping_planes_pars_fragment:Vf,clipping_planes_pars_vertex:Gf,clipping_planes_vertex:Wf,color_fragment:Xf,color_pars_fragment:qf,color_pars_vertex:Yf,color_vertex:$f,common:Kf,cube_uv_reflection_fragment:jf,defaultnormal_vertex:Zf,displacementmap_pars_vertex:Jf,displacementmap_vertex:Qf,emissivemap_fragment:tp,emissivemap_pars_fragment:ep,colorspace_fragment:np,colorspace_pars_fragment:ip,envmap_fragment:sp,envmap_common_pars_fragment:rp,envmap_pars_fragment:ap,envmap_pars_vertex:op,envmap_physical_pars_fragment:_p,envmap_vertex:lp,fog_vertex:cp,fog_pars_vertex:hp,fog_fragment:up,fog_pars_fragment:dp,gradientmap_pars_fragment:fp,lightmap_pars_fragment:pp,lights_lambert_fragment:mp,lights_lambert_pars_fragment:gp,lights_pars_begin:vp,lights_toon_fragment:xp,lights_toon_pars_fragment:yp,lights_phong_fragment:Mp,lights_phong_pars_fragment:Sp,lights_physical_fragment:bp,lights_physical_pars_fragment:Ep,lights_fragment_begin:wp,lights_fragment_maps:Tp,lights_fragment_end:Ap,logdepthbuf_fragment:Cp,logdepthbuf_pars_fragment:Rp,logdepthbuf_pars_vertex:Pp,logdepthbuf_vertex:Dp,map_fragment:Ip,map_pars_fragment:Lp,map_particle_fragment:Up,map_particle_pars_fragment:Np,metalnessmap_fragment:Fp,metalnessmap_pars_fragment:Op,morphinstance_vertex:Bp,morphcolor_vertex:zp,morphnormal_vertex:kp,morphtarget_pars_vertex:Hp,morphtarget_vertex:Vp,normal_fragment_begin:Gp,normal_fragment_maps:Wp,normal_pars_fragment:Xp,normal_pars_vertex:qp,normal_vertex:Yp,normalmap_pars_fragment:$p,clearcoat_normal_fragment_begin:Kp,clearcoat_normal_fragment_maps:jp,clearcoat_pars_fragment:Zp,iridescence_pars_fragment:Jp,opaque_fragment:Qp,packing:tm,premultiplied_alpha_fragment:em,project_vertex:nm,dithering_fragment:im,dithering_pars_fragment:sm,roughnessmap_fragment:rm,roughnessmap_pars_fragment:am,shadowmap_pars_fragment:om,shadowmap_pars_vertex:lm,shadowmap_vertex:cm,shadowmask_pars_fragment:hm,skinbase_vertex:um,skinning_pars_vertex:dm,skinning_vertex:fm,skinnormal_vertex:pm,specularmap_fragment:mm,specularmap_pars_fragment:gm,tonemapping_fragment:vm,tonemapping_pars_fragment:_m,transmission_fragment:xm,transmission_pars_fragment:ym,uv_pars_fragment:Mm,uv_pars_vertex:Sm,uv_vertex:bm,worldpos_vertex:Em,background_vert:wm,background_frag:Tm,backgroundCube_vert:Am,backgroundCube_frag:Cm,cube_vert:Rm,cube_frag:Pm,depth_vert:Dm,depth_frag:Im,distanceRGBA_vert:Lm,distanceRGBA_frag:Um,equirect_vert:Nm,equirect_frag:Fm,linedashed_vert:Om,linedashed_frag:Bm,meshbasic_vert:zm,meshbasic_frag:km,meshlambert_vert:Hm,meshlambert_frag:Vm,meshmatcap_vert:Gm,meshmatcap_frag:Wm,meshnormal_vert:Xm,meshnormal_frag:qm,meshphong_vert:Ym,meshphong_frag:$m,meshphysical_vert:Km,meshphysical_frag:jm,meshtoon_vert:Zm,meshtoon_frag:Jm,points_vert:Qm,points_frag:t0,shadow_vert:e0,shadow_frag:n0,sprite_vert:i0,sprite_frag:s0},st={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},bn={basic:{uniforms:Ye([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Ye([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new _t(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Ye([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Ye([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Ye([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new _t(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Ye([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Ye([st.points,st.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Ye([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Ye([st.common,st.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Ye([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Ye([st.sprite,st.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:Ye([st.common,st.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:Ye([st.lights,st.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};bn.physical={uniforms:Ye([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const Dr={r:0,b:0,g:0},vi=new pn,r0=new jt;function a0(i,t,e,n,s,r,a){const o=new _t(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(S){let _=S.isScene===!0?S.background:null;return _&&_.isTexture&&(_=(S.backgroundBlurriness>0?e:t).get(_)),_}function v(S){let _=!1;const R=g(S);R===null?f(o,l):R&&R.isColor&&(f(R,1),_=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,_){const R=g(_);R&&(R.isCubeTexture||R.mapping===la)?(h===void 0&&(h=new at(new Ke(1,1,1),new Me({name:"BackgroundCubeMaterial",uniforms:fs(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),vi.copy(_.backgroundRotation),vi.x*=-1,vi.y*=-1,vi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(r0.makeRotationFromEuler(vi)),h.material.toneMapped=qt.getTransfer(R.colorSpace)!==ie,(u!==R||d!==R.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=R,d=R.version,p=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new at(new Ci(2,2),new Me({name:"BackgroundMaterial",uniforms:fs(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=qt.getTransfer(R.colorSpace)!==ie,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||d!==R.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=R,d=R.version,p=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function f(S,_){S.getRGB(Dr,Dh(i)),n.buffers.color.setClear(Dr.r,Dr.g,Dr.b,_,a)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,_=1){o.set(S),l=_,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,f(o,l)},render:v,addToRenderList:m,dispose:M}}function o0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(y,D,O,F,V){let Y=!1;const W=u(F,O,D);r!==W&&(r=W,c(r.object)),Y=p(y,F,O,V),Y&&g(y,F,O,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,_(y,D,O,F),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,D,O){const F=O.wireframe===!0;let V=n[y.id];V===void 0&&(V={},n[y.id]=V);let Y=V[D.id];Y===void 0&&(Y={},V[D.id]=Y);let W=Y[F];return W===void 0&&(W=d(l()),Y[F]=W),W}function d(y){const D=[],O=[],F=[];for(let V=0;V<e;V++)D[V]=0,O[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:F,object:y,attributes:{},index:null}}function p(y,D,O,F){const V=r.attributes,Y=D.attributes;let W=0;const Z=O.getAttributes();for(const H in Z)if(Z[H].location>=0){const ft=V[H];let Et=Y[H];if(Et===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(Et=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(Et=y.instanceColor)),ft===void 0||ft.attribute!==Et||Et&&ft.data!==Et.data)return!0;W++}return r.attributesNum!==W||r.index!==F}function g(y,D,O,F){const V={},Y=D.attributes;let W=0;const Z=O.getAttributes();for(const H in Z)if(Z[H].location>=0){let ft=Y[H];ft===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(ft=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(ft=y.instanceColor));const Et={};Et.attribute=ft,ft&&ft.data&&(Et.data=ft.data),V[H]=Et,W++}r.attributes=V,r.attributesNum=W,r.index=F}function v(){const y=r.newAttributes;for(let D=0,O=y.length;D<O;D++)y[D]=0}function m(y){f(y,0)}function f(y,D){const O=r.newAttributes,F=r.enabledAttributes,V=r.attributeDivisors;O[y]=1,F[y]===0&&(i.enableVertexAttribArray(y),F[y]=1),V[y]!==D&&(i.vertexAttribDivisor(y,D),V[y]=D)}function M(){const y=r.newAttributes,D=r.enabledAttributes;for(let O=0,F=D.length;O<F;O++)D[O]!==y[O]&&(i.disableVertexAttribArray(O),D[O]=0)}function S(y,D,O,F,V,Y,W){W===!0?i.vertexAttribIPointer(y,D,O,V,Y):i.vertexAttribPointer(y,D,O,F,V,Y)}function _(y,D,O,F){v();const V=F.attributes,Y=O.getAttributes(),W=D.defaultAttributeValues;for(const Z in Y){const H=Y[Z];if(H.location>=0){let ct=V[Z];if(ct===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(ct=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(ct=y.instanceColor)),ct!==void 0){const ft=ct.normalized,Et=ct.itemSize,Vt=t.get(ct);if(Vt===void 0)continue;const oe=Vt.buffer,q=Vt.type,et=Vt.bytesPerElement,St=q===i.INT||q===i.UNSIGNED_INT||ct.gpuType===tl;if(ct.isInterleavedBufferAttribute){const ht=ct.data,bt=ht.stride,Zt=ct.offset;if(ht.isInstancedInterleavedBuffer){for(let Pt=0;Pt<H.locationSize;Pt++)f(H.location+Pt,ht.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Pt=0;Pt<H.locationSize;Pt++)m(H.location+Pt);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let Pt=0;Pt<H.locationSize;Pt++)S(H.location+Pt,Et/H.locationSize,q,ft,bt*et,(Zt+Et/H.locationSize*Pt)*et,St)}else{if(ct.isInstancedBufferAttribute){for(let ht=0;ht<H.locationSize;ht++)f(H.location+ht,ct.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let ht=0;ht<H.locationSize;ht++)m(H.location+ht);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let ht=0;ht<H.locationSize;ht++)S(H.location+ht,Et/H.locationSize,q,ft,Et*et,Et/H.locationSize*ht*et,St)}}else if(W!==void 0){const ft=W[Z];if(ft!==void 0)switch(ft.length){case 2:i.vertexAttrib2fv(H.location,ft);break;case 3:i.vertexAttrib3fv(H.location,ft);break;case 4:i.vertexAttrib4fv(H.location,ft);break;default:i.vertexAttrib1fv(H.location,ft)}}}}M()}function R(){P();for(const y in n){const D=n[y];for(const O in D){const F=D[O];for(const V in F)h(F[V].object),delete F[V];delete D[O]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;const D=n[y.id];for(const O in D){const F=D[O];for(const V in F)h(F[V].object),delete F[V];delete D[O]}delete n[y.id]}function A(y){for(const D in n){const O=n[D];if(O[y.id]===void 0)continue;const F=O[y.id];for(const V in F)h(F[V].object),delete F[V];delete O[y.id]}}function P(){b(),a=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:b,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function l0(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*d[v];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function c0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Mn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const P=A===Rn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Pn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Tn&&!P)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:_,vertexTextures:R,maxSamples:T}}function h0(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new xi,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const M=r?0:n,S=M*4;let _=f.clippingState||null;l.value=_,_=h(g,d,S,p);for(let R=0;R!==S;++R)_[R]=e[R];f.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const f=p+v*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,_=p;S!==v;++S,_+=4)a.copy(u[S]).applyMatrix4(M,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function u0(i){let t=new WeakMap;function e(a,o){return o===go?a.mapping=hs:o===vo&&(a.mapping=us),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===go||o===vo)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Hd(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const is=4,mc=[.125,.215,.35,.446,.526,.582],Si=20,Xa=new zh,gc=new _t;let qa=null,Ya=0,$a=0,Ka=!1;const yi=(1+Math.sqrt(5))/2,Ji=1/yi,vc=[new w(-yi,Ji,0),new w(yi,Ji,0),new w(-Ji,0,yi),new w(Ji,0,yi),new w(0,yi,-Ji),new w(0,yi,Ji),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)],d0=new w;class _c{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=d0}=r;qa=this._renderer.getRenderTarget(),Ya=this._renderer.getActiveCubeFace(),$a=this._renderer.getActiveMipmapLevel(),Ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(qa,Ya,$a),this._renderer.xr.enabled=Ka,t.scissorTest=!1,Ir(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hs||t.mapping===us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qa=this._renderer.getRenderTarget(),Ya=this._renderer.getActiveCubeFace(),$a=this._renderer.getActiveMipmapLevel(),Ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:Rn,format:Mn,colorSpace:ds,depthBuffer:!1},s=xc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=f0(r)),this._blurMaterial=p0(r,t,e)}return s}_compileMaterial(t){const e=new at(this._lodPlanes[0],t);this._renderer.compile(e,Xa)}_sceneToCubeUV(t,e,n,s,r){const l=new en(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(gc),u.toneMapping=li,u.autoClear=!1;const g=new Ve({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),v=new at(new Ke,g);let m=!1;const f=t.background;f?f.isColor&&(g.color.copy(f),t.background=null,m=!0):(g.color.copy(gc),m=!0);for(let M=0;M<6;M++){const S=M%3;S===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):S===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));const _=this._cubeSize;Ir(s,S*_,M>2?_:0,_,_),u.setRenderTarget(s),m&&u.render(v,l),u.render(t,l)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=p,u.autoClear=d,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===hs||t.mapping===us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new at(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Ir(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Xa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=vc[(s-r-1)%vc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new at(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Si-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Si;m>Si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Si}`);const f=[];let M=0;for(let A=0;A<Si;++A){const P=A/v,b=Math.exp(-P*P/2);f.push(b),A===0?M+=b:A<m&&(M+=2*b)}for(let A=0;A<f.length;A++)f[A]=f[A]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;const _=this._sizeLods[s],R=3*_*(s>S-is?s-S+is:0),T=4*(this._cubeSize-_);Ir(e,R,T,3*_,2*_),l.setRenderTarget(e),l.render(u,Xa)}}function f0(i){const t=[],e=[],n=[];let s=i;const r=i-is+1+mc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-is?l=mc[a-i+is-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,v=3,m=2,f=1,M=new Float32Array(v*g*p),S=new Float32Array(m*g*p),_=new Float32Array(f*g*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,P=T>2?0:-1,b=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];M.set(b,v*g*T),S.set(d,m*g*T);const y=[T,T,T,T,T,T];_.set(y,f*g*T)}const R=new ee;R.setAttribute("position",new ye(M,v)),R.setAttribute("uv",new ye(S,m)),R.setAttribute("faceIndex",new ye(_,f)),t.push(R),s>is&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function xc(i,t,e){const n=new un(i,t,e);return n.texture.mapping=la,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ir(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function p0(i,t,e){const n=new Float32Array(Si),s=new w(0,1,0);return new Me({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function yc(){return new Me({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Mc(){return new Me({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function vl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function m0(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===go||l===vo,h=l===hs||l===us;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new _c(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new _c(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function g0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&rs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function v0(i,t,e,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)t.update(d[p],i.ARRAY_BUFFER)}function c(u){const d=[],p=u.index,g=u.attributes.position;let v=0;if(p!==null){const M=p.array;v=p.version;for(let S=0,_=M.length;S<_;S+=3){const R=M[S+0],T=M[S+1],A=M[S+2];d.push(R,T,T,A,A,R)}}else if(g!==void 0){const M=g.array;v=g.version;for(let S=0,_=M.length/3-1;S<_;S+=3){const R=S+0,T=S+1,A=S+2;d.push(R,T,T,A,A,R)}}else return;const m=new(Th(d)?Ph:Rh)(d,1);m.version=v;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function _0(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*a),e.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*a,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,v,0,g);let f=0;for(let M=0;M<g;M++)f+=p[M]*v[M];e.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function x0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function y0(i,t,e){const n=new WeakMap,s=new ae;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let y=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var p=y;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let R=o.attributes.position.count*_,T=1;R>t.maxTextureSize&&(T=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const A=new Float32Array(R*T*4*u),P=new Ah(A,R,T,u);P.type=Tn,P.needsUpdate=!0;const b=_*4;for(let D=0;D<u;D++){const O=f[D],F=M[D],V=S[D],Y=R*T*4*D;for(let W=0;W<O.count;W++){const Z=W*b;g===!0&&(s.fromBufferAttribute(O,W),A[Y+Z+0]=s.x,A[Y+Z+1]=s.y,A[Y+Z+2]=s.z,A[Y+Z+3]=0),v===!0&&(s.fromBufferAttribute(F,W),A[Y+Z+4]=s.x,A[Y+Z+5]=s.y,A[Y+Z+6]=s.z,A[Y+Z+7]=0),m===!0&&(s.fromBufferAttribute(V,W),A[Y+Z+8]=s.x,A[Y+Z+9]=s.y,A[Y+Z+10]=s.z,A[Y+Z+11]=V.itemSize===4?s.w:1)}}d={count:u,texture:P,size:new nt(R,T)},n.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function M0(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const Vh=new Ge,Sc=new Fh(1,1),Gh=new Ah,Wh=new wd,Xh=new Lh,bc=[],Ec=[],wc=new Float32Array(16),Tc=new Float32Array(9),Ac=new Float32Array(4);function Es(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=bc[s];if(r===void 0&&(r=new Float32Array(s),bc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function De(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ie(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ha(i,t){let e=Ec[t];e===void 0&&(e=new Int32Array(t),Ec[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function S0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function b0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2fv(this.addr,t),Ie(e,t)}}function E0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;i.uniform3fv(this.addr,t),Ie(e,t)}}function w0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4fv(this.addr,t),Ie(e,t)}}function T0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(De(e,n))return;Ac.set(n),i.uniformMatrix2fv(this.addr,!1,Ac),Ie(e,n)}}function A0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(De(e,n))return;Tc.set(n),i.uniformMatrix3fv(this.addr,!1,Tc),Ie(e,n)}}function C0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(De(e,n))return;wc.set(n),i.uniformMatrix4fv(this.addr,!1,wc),Ie(e,n)}}function R0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function P0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2iv(this.addr,t),Ie(e,t)}}function D0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3iv(this.addr,t),Ie(e,t)}}function I0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4iv(this.addr,t),Ie(e,t)}}function L0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function U0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2uiv(this.addr,t),Ie(e,t)}}function N0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3uiv(this.addr,t),Ie(e,t)}}function F0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4uiv(this.addr,t),Ie(e,t)}}function O0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Sc.compareFunction=wh,r=Sc):r=Vh,e.setTexture2D(t||r,s)}function B0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Wh,s)}function z0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Xh,s)}function k0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Gh,s)}function H0(i){switch(i){case 5126:return S0;case 35664:return b0;case 35665:return E0;case 35666:return w0;case 35674:return T0;case 35675:return A0;case 35676:return C0;case 5124:case 35670:return R0;case 35667:case 35671:return P0;case 35668:case 35672:return D0;case 35669:case 35673:return I0;case 5125:return L0;case 36294:return U0;case 36295:return N0;case 36296:return F0;case 35678:case 36198:case 36298:case 36306:case 35682:return O0;case 35679:case 36299:case 36307:return B0;case 35680:case 36300:case 36308:case 36293:return z0;case 36289:case 36303:case 36311:case 36292:return k0}}function V0(i,t){i.uniform1fv(this.addr,t)}function G0(i,t){const e=Es(t,this.size,2);i.uniform2fv(this.addr,e)}function W0(i,t){const e=Es(t,this.size,3);i.uniform3fv(this.addr,e)}function X0(i,t){const e=Es(t,this.size,4);i.uniform4fv(this.addr,e)}function q0(i,t){const e=Es(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Y0(i,t){const e=Es(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function $0(i,t){const e=Es(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function K0(i,t){i.uniform1iv(this.addr,t)}function j0(i,t){i.uniform2iv(this.addr,t)}function Z0(i,t){i.uniform3iv(this.addr,t)}function J0(i,t){i.uniform4iv(this.addr,t)}function Q0(i,t){i.uniform1uiv(this.addr,t)}function tg(i,t){i.uniform2uiv(this.addr,t)}function eg(i,t){i.uniform3uiv(this.addr,t)}function ng(i,t){i.uniform4uiv(this.addr,t)}function ig(i,t,e){const n=this.cache,s=t.length,r=ha(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Vh,r[a])}function sg(i,t,e){const n=this.cache,s=t.length,r=ha(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Wh,r[a])}function rg(i,t,e){const n=this.cache,s=t.length,r=ha(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Xh,r[a])}function ag(i,t,e){const n=this.cache,s=t.length,r=ha(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Gh,r[a])}function og(i){switch(i){case 5126:return V0;case 35664:return G0;case 35665:return W0;case 35666:return X0;case 35674:return q0;case 35675:return Y0;case 35676:return $0;case 5124:case 35670:return K0;case 35667:case 35671:return j0;case 35668:case 35672:return Z0;case 35669:case 35673:return J0;case 5125:return Q0;case 36294:return tg;case 36295:return eg;case 36296:return ng;case 35678:case 36198:case 36298:case 36306:case 35682:return ig;case 35679:case 36299:case 36307:return sg;case 35680:case 36300:case 36308:case 36293:return rg;case 36289:case 36303:case 36311:case 36292:return ag}}class lg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=H0(e.type)}}class cg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=og(e.type)}}class hg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const ja=/(\w+)(\])?(\[|\.)?/g;function Cc(i,t){i.seq.push(t),i.map[t.id]=t}function ug(i,t,e){const n=i.name,s=n.length;for(ja.lastIndex=0;;){const r=ja.exec(n),a=ja.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Cc(e,c===void 0?new lg(o,i,t):new cg(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new hg(o),Cc(e,u)),e=u}}}class $r{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);ug(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Rc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const dg=37297;let fg=0;function pg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Pc=new Ft;function mg(i){qt._getMatrix(Pc,qt.workingColorSpace,i);const t=`mat3( ${Pc.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(i)){case Qr:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Dc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+pg(i.getShaderSource(t),a)}else return s}function gg(i,t){const e=mg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function vg(i,t){let e;switch(t){case hh:e="Linear";break;case uh:e="Reinhard";break;case dh:e="Cineon";break;case Qo:e="ACESFilmic";break;case ph:e="AgX";break;case mh:e="Neutral";break;case fh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Lr=new w;function _g(){qt.getLuminanceCoefficients(Lr);const i=Lr.x.toFixed(4),t=Lr.y.toFixed(4),e=Lr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hs).join(`
`)}function yg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Mg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Hs(i){return i!==""}function Ic(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Sg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yo(i){return i.replace(Sg,Eg)}const bg=new Map;function Eg(i,t){let e=Bt[t];if(e===void 0){const n=bg.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Yo(e)}const wg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uc(i){return i.replace(wg,Tg)}function Tg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Nc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Ag(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===lh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Mu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===kn&&(t="SHADOWMAP_TYPE_VSM"),t}function Cg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case hs:case us:t="ENVMAP_TYPE_CUBE";break;case la:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Rg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case us:t="ENVMAP_MODE_REFRACTION";break}return t}function Pg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ch:t="ENVMAP_BLENDING_MULTIPLY";break;case ku:t="ENVMAP_BLENDING_MIX";break;case Hu:t="ENVMAP_BLENDING_ADD";break}return t}function Dg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Ig(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Ag(e),c=Cg(e),h=Rg(e),u=Pg(e),d=Dg(e),p=xg(e),g=yg(r),v=s.createProgram();let m,f,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Hs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Hs).join(`
`),f.length>0&&(f+=`
`)):(m=[Nc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hs).join(`
`),f=[Nc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==li?"#define TONE_MAPPING":"",e.toneMapping!==li?Bt.tonemapping_pars_fragment:"",e.toneMapping!==li?vg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,gg("linearToOutputTexel",e.outputColorSpace),_g(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Hs).join(`
`)),a=Yo(a),a=Ic(a,e),a=Lc(a,e),o=Yo(o),o=Ic(o,e),o=Lc(o,e),a=Uc(a),o=Uc(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=M+m+a,_=M+f+o,R=Rc(s,s.VERTEX_SHADER,S),T=Rc(s,s.FRAGMENT_SHADER,_);s.attachShader(v,R),s.attachShader(v,T),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(D){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(v).trim(),F=s.getShaderInfoLog(R).trim(),V=s.getShaderInfoLog(T).trim();let Y=!0,W=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,R,T);else{const Z=Dc(s,R,"vertex"),H=Dc(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+O+`
`+Z+`
`+H)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(F===""||V==="")&&(W=!1);W&&(D.diagnostics={runnable:Y,programLog:O,vertexShader:{log:F,prefix:m},fragmentShader:{log:V,prefix:f}})}s.deleteShader(R),s.deleteShader(T),P=new $r(s,v),b=Mg(s,v)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,dg)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=fg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=T,this}let Lg=0;class Ug{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ng(t),e.set(t,n)),n}}class Ng{constructor(t){this.id=Lg++,this.code=t,this.usedTimes=0}}function Fg(i,t,e,n,s,r,a){const o=new hl,l=new Ug,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,y,D,O,F){const V=O.fog,Y=F.geometry,W=b.isMeshStandardMaterial?O.environment:null,Z=(b.isMeshStandardMaterial?e:t).get(b.envMap||W),H=Z&&Z.mapping===la?Z.image.height:null,ct=g[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const ft=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Et=ft!==void 0?ft.length:0;let Vt=0;Y.morphAttributes.position!==void 0&&(Vt=1),Y.morphAttributes.normal!==void 0&&(Vt=2),Y.morphAttributes.color!==void 0&&(Vt=3);let oe,q,et,St;if(ct){const ne=bn[ct];oe=ne.vertexShader,q=ne.fragmentShader}else oe=b.vertexShader,q=b.fragmentShader,l.update(b),et=l.getVertexShaderID(b),St=l.getFragmentShaderID(b);const ht=i.getRenderTarget(),bt=i.state.buffers.depth.getReversed(),Zt=F.isInstancedMesh===!0,Pt=F.isBatchedMesh===!0,ge=!!b.map,ve=!!b.matcap,Jt=!!Z,I=!!b.aoMap,We=!!b.lightMap,Qt=!!b.bumpMap,ue=!!b.normalMap,xt=!!b.displacementMap,Yt=!!b.emissiveMap,Tt=!!b.metalnessMap,Ot=!!b.roughnessMap,Pe=b.anisotropy>0,C=b.clearcoat>0,x=b.dispersion>0,B=b.iridescence>0,X=b.sheen>0,K=b.transmission>0,G=Pe&&!!b.anisotropyMap,yt=C&&!!b.clearcoatMap,rt=C&&!!b.clearcoatNormalMap,vt=C&&!!b.clearcoatRoughnessMap,Mt=B&&!!b.iridescenceMap,j=B&&!!b.iridescenceThicknessMap,ut=X&&!!b.sheenColorMap,Rt=X&&!!b.sheenRoughnessMap,Ct=!!b.specularMap,it=!!b.specularColorMap,Lt=!!b.specularIntensityMap,L=K&&!!b.transmissionMap,ot=K&&!!b.thicknessMap,J=!!b.gradientMap,pt=!!b.alphaMap,Q=b.alphaTest>0,$=!!b.alphaHash,mt=!!b.extensions;let Nt=li;b.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Nt=i.toneMapping);const de={shaderID:ct,shaderType:b.type,shaderName:b.name,vertexShader:oe,fragmentShader:q,defines:b.defines,customVertexShaderID:et,customFragmentShaderID:St,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Pt,batchingColor:Pt&&F._colorsTexture!==null,instancing:Zt,instancingColor:Zt&&F.instanceColor!==null,instancingMorph:Zt&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ht===null?i.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:ds,alphaToCoverage:!!b.alphaToCoverage,map:ge,matcap:ve,envMap:Jt,envMapMode:Jt&&Z.mapping,envMapCubeUVHeight:H,aoMap:I,lightMap:We,bumpMap:Qt,normalMap:ue,displacementMap:d&&xt,emissiveMap:Yt,normalMapObjectSpace:ue&&b.normalMapType===Xu,normalMapTangentSpace:ue&&b.normalMapType===Eh,metalnessMap:Tt,roughnessMap:Ot,anisotropy:Pe,anisotropyMap:G,clearcoat:C,clearcoatMap:yt,clearcoatNormalMap:rt,clearcoatRoughnessMap:vt,dispersion:x,iridescence:B,iridescenceMap:Mt,iridescenceThicknessMap:j,sheen:X,sheenColorMap:ut,sheenRoughnessMap:Rt,specularMap:Ct,specularColorMap:it,specularIntensityMap:Lt,transmission:K,transmissionMap:L,thicknessMap:ot,gradientMap:J,opaque:b.transparent===!1&&b.blending===ss&&b.alphaToCoverage===!1,alphaMap:pt,alphaTest:Q,alphaHash:$,combine:b.combine,mapUv:ge&&v(b.map.channel),aoMapUv:I&&v(b.aoMap.channel),lightMapUv:We&&v(b.lightMap.channel),bumpMapUv:Qt&&v(b.bumpMap.channel),normalMapUv:ue&&v(b.normalMap.channel),displacementMapUv:xt&&v(b.displacementMap.channel),emissiveMapUv:Yt&&v(b.emissiveMap.channel),metalnessMapUv:Tt&&v(b.metalnessMap.channel),roughnessMapUv:Ot&&v(b.roughnessMap.channel),anisotropyMapUv:G&&v(b.anisotropyMap.channel),clearcoatMapUv:yt&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:rt&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:j&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&v(b.sheenRoughnessMap.channel),specularMapUv:Ct&&v(b.specularMap.channel),specularColorMapUv:it&&v(b.specularColorMap.channel),specularIntensityMapUv:Lt&&v(b.specularIntensityMap.channel),transmissionMapUv:L&&v(b.transmissionMap.channel),thicknessMapUv:ot&&v(b.thicknessMap.channel),alphaMapUv:pt&&v(b.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(ue||Pe),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Y.attributes.uv&&(ge||pt),fog:!!V,useFog:b.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:bt,skinning:F.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:Vt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Nt,decodeVideoTexture:ge&&b.map.isVideoTexture===!0&&qt.getTransfer(b.map.colorSpace)===ie,decodeVideoTextureEmissive:Yt&&b.emissiveMap.isVideoTexture===!0&&qt.getTransfer(b.emissiveMap.colorSpace)===ie,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ln,flipSided:b.side===Fe,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:mt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&b.extensions.multiDraw===!0||Pt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return de.vertexUv1s=c.has(1),de.vertexUv2s=c.has(2),de.vertexUv3s=c.has(3),c.clear(),de}function f(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const D in b.defines)y.push(D),y.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(M(y,b),S(y,b),y.push(i.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function M(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function S(b,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),b.push(o.mask)}function _(b){const y=g[b.type];let D;if(y){const O=bn[y];D=ps.clone(O.uniforms)}else D=b.uniforms;return D}function R(b,y){let D;for(let O=0,F=h.length;O<F;O++){const V=h[O];if(V.cacheKey===y){D=V,++D.usedTimes;break}}return D===void 0&&(D=new Ig(i,y,b,r),h.push(D)),D}function T(b){if(--b.usedTimes===0){const y=h.indexOf(b);h[y]=h[h.length-1],h.pop(),b.destroy()}}function A(b){l.remove(b)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:_,acquireProgram:R,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:P}}function Og(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Bg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Fc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Oc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,p,g,v,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=v,f.group=m),t++,f}function o(u,d,p,g,v,m){const f=a(u,d,p,g,v,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(u,d,p,g,v,m){const f=a(u,d,p,g,v,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||Bg),n.length>1&&n.sort(d||Fc),s.length>1&&s.sort(d||Fc)}function h(){for(let u=t,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function zg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Oc,i.set(n,[a])):s>=r.length?(a=new Oc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function kg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new w,color:new _t};break;case"SpotLight":e={position:new w,direction:new w,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new w,color:new _t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new w,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":e={color:new _t,position:new w,halfWidth:new w,halfHeight:new w};break}return i[t.id]=e,e}}}function Hg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Vg=0;function Gg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Wg(i){const t=new kg,e=Hg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new w);const s=new w,r=new jt,a=new jt;function o(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,M=0,S=0,_=0,R=0,T=0,A=0;c.sort(Gg);for(let b=0,y=c.length;b<y;b++){const D=c[b],O=D.color,F=D.intensity,V=D.distance,Y=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=O.r*F,u+=O.g*F,d+=O.b*F;else if(D.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(D.sh.coefficients[W],F);A++}else if(D.isDirectionalLight){const W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Z=D.shadow,H=e.get(D);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=Y,n.directionalShadowMatrix[p]=D.shadow.matrix,M++}n.directional[p]=W,p++}else if(D.isSpotLight){const W=t.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(O).multiplyScalar(F),W.distance=V,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,n.spot[v]=W;const Z=D.shadow;if(D.map&&(n.spotLightMap[R]=D.map,R++,Z.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[v]=Z.matrix,D.castShadow){const H=e.get(D);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.spotShadow[v]=H,n.spotShadowMap[v]=Y,_++}v++}else if(D.isRectAreaLight){const W=t.get(D);W.color.copy(O).multiplyScalar(F),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=W,m++}else if(D.isPointLight){const W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){const Z=D.shadow,H=e.get(D);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,H.shadowCameraNear=Z.camera.near,H.shadowCameraFar=Z.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=D.shadow.matrix,S++}n.point[g]=W,g++}else if(D.isHemisphereLight){const W=t.get(D);W.skyColor.copy(D.color).multiplyScalar(F),W.groundColor.copy(D.groundColor).multiplyScalar(F),n.hemi[f]=W,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=st.LTC_FLOAT_1,n.rectAreaLTC2=st.LTC_FLOAT_2):(n.rectAreaLTC1=st.LTC_HALF_1,n.rectAreaLTC2=st.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==M||P.numPointShadows!==S||P.numSpotShadows!==_||P.numSpotMaps!==R||P.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=_+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,P.directionalLength=p,P.pointLength=g,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=M,P.numPointShadows=S,P.numSpotShadows=_,P.numSpotMaps=R,P.numLightProbes=A,n.version=Vg++)}function l(c,h){let u=0,d=0,p=0,g=0,v=0;const m=h.matrixWorldInverse;for(let f=0,M=c.length;f<M;f++){const S=c[f];if(S.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(S.isSpotLight){const _=n.spot[p];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(S.width*.5,0,0),_.halfHeight.set(0,S.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(S.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function Bc(i){const t=new Wg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Xg(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Bc(i),t.set(s,[o])):r>=a.length?(o=new Bc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const qg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $g(i,t,e){let n=new ul;const s=new nt,r=new nt,a=new ae,o=new gf({depthPacking:Wu}),l=new vf,c={},h=e.maxTextureSize,u={[$n]:Fe,[Fe]:$n,[ln]:ln},d=new Me({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:qg,fragmentShader:Yg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new ee;g.setAttribute("position",new ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new at(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lh;let f=this.type;this.render=function(T,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const b=i.getRenderTarget(),y=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Xn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const F=f!==kn&&this.type===kn,V=f===kn&&this.type!==kn;for(let Y=0,W=T.length;Y<W;Y++){const Z=T[Y],H=Z.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const ct=H.getFrameExtents();if(s.multiply(ct),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ct.x),s.x=r.x*ct.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ct.y),s.y=r.y*ct.y,H.mapSize.y=r.y)),H.map===null||F===!0||V===!0){const Et=this.type!==kn?{minFilter:nn,magFilter:nn}:{};H.map!==null&&H.map.dispose(),H.map=new un(s.x,s.y,Et),H.map.texture.name=Z.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const ft=H.getViewportCount();for(let Et=0;Et<ft;Et++){const Vt=H.getViewport(Et);a.set(r.x*Vt.x,r.y*Vt.y,r.x*Vt.z,r.y*Vt.w),O.viewport(a),H.updateMatrices(Z,Et),n=H.getFrustum(),_(A,P,H.camera,Z,this.type)}H.isPointLightShadow!==!0&&this.type===kn&&M(H,P),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(b,y,D)};function M(T,A){const P=t.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new un(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,P,d,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,P,p,v,null)}function S(T,A,P,b){let y=null;const D=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)y=D;else if(y=P.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const O=y.uuid,F=A.uuid;let V=c[O];V===void 0&&(V={},c[O]=V);let Y=V[F];Y===void 0&&(Y=y.clone(),V[F]=Y,A.addEventListener("dispose",R)),y=Y}if(y.visible=A.visible,y.wireframe=A.wireframe,b===kn?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:u[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const O=i.properties.get(y);O.light=P}return y}function _(T,A,P,b,y){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===kn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const F=t.update(T),V=T.material;if(Array.isArray(V)){const Y=F.groups;for(let W=0,Z=Y.length;W<Z;W++){const H=Y[W],ct=V[H.materialIndex];if(ct&&ct.visible){const ft=S(T,ct,b,y);T.onBeforeShadow(i,T,A,P,F,ft,H),i.renderBufferDirect(P,null,F,ft,T,H),T.onAfterShadow(i,T,A,P,F,ft,H)}}}else if(V.visible){const Y=S(T,V,b,y);T.onBeforeShadow(i,T,A,P,F,Y,null),i.renderBufferDirect(P,null,F,Y,T,null),T.onAfterShadow(i,T,A,P,F,Y,null)}}const O=T.children;for(let F=0,V=O.length;F<V;F++)_(O[F],A,P,b,y)}function R(T){T.target.removeEventListener("dispose",R);for(const P in c){const b=c[P],y=T.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}const Kg={[lo]:co,[ho]:po,[uo]:mo,[cs]:fo,[co]:lo,[po]:ho,[mo]:uo,[fo]:cs};function jg(i,t){function e(){let L=!1;const ot=new ae;let J=null;const pt=new ae(0,0,0,0);return{setMask:function(Q){J!==Q&&!L&&(i.colorMask(Q,Q,Q,Q),J=Q)},setLocked:function(Q){L=Q},setClear:function(Q,$,mt,Nt,de){de===!0&&(Q*=Nt,$*=Nt,mt*=Nt),ot.set(Q,$,mt,Nt),pt.equals(ot)===!1&&(i.clearColor(Q,$,mt,Nt),pt.copy(ot))},reset:function(){L=!1,J=null,pt.set(-1,0,0,0)}}}function n(){let L=!1,ot=!1,J=null,pt=null,Q=null;return{setReversed:function($){if(ot!==$){const mt=t.get("EXT_clip_control");$?mt.clipControlEXT(mt.LOWER_LEFT_EXT,mt.ZERO_TO_ONE_EXT):mt.clipControlEXT(mt.LOWER_LEFT_EXT,mt.NEGATIVE_ONE_TO_ONE_EXT),ot=$;const Nt=Q;Q=null,this.setClear(Nt)}},getReversed:function(){return ot},setTest:function($){$?ht(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function($){J!==$&&!L&&(i.depthMask($),J=$)},setFunc:function($){if(ot&&($=Kg[$]),pt!==$){switch($){case lo:i.depthFunc(i.NEVER);break;case co:i.depthFunc(i.ALWAYS);break;case ho:i.depthFunc(i.LESS);break;case cs:i.depthFunc(i.LEQUAL);break;case uo:i.depthFunc(i.EQUAL);break;case fo:i.depthFunc(i.GEQUAL);break;case po:i.depthFunc(i.GREATER);break;case mo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pt=$}},setLocked:function($){L=$},setClear:function($){Q!==$&&(ot&&($=1-$),i.clearDepth($),Q=$)},reset:function(){L=!1,J=null,pt=null,Q=null,ot=!1}}}function s(){let L=!1,ot=null,J=null,pt=null,Q=null,$=null,mt=null,Nt=null,de=null;return{setTest:function(ne){L||(ne?ht(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(ne){ot!==ne&&!L&&(i.stencilMask(ne),ot=ne)},setFunc:function(ne,mn,Un){(J!==ne||pt!==mn||Q!==Un)&&(i.stencilFunc(ne,mn,Un),J=ne,pt=mn,Q=Un)},setOp:function(ne,mn,Un){($!==ne||mt!==mn||Nt!==Un)&&(i.stencilOp(ne,mn,Un),$=ne,mt=mn,Nt=Un)},setLocked:function(ne){L=ne},setClear:function(ne){de!==ne&&(i.clearStencil(ne),de=ne)},reset:function(){L=!1,ot=null,J=null,pt=null,Q=null,$=null,mt=null,Nt=null,de=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,M=null,S=null,_=null,R=null,T=null,A=new _t(0,0,0),P=0,b=!1,y=null,D=null,O=null,F=null,V=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Z=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=Z>=1):H.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=Z>=2);let ct=null,ft={};const Et=i.getParameter(i.SCISSOR_BOX),Vt=i.getParameter(i.VIEWPORT),oe=new ae().fromArray(Et),q=new ae().fromArray(Vt);function et(L,ot,J,pt){const Q=new Uint8Array(4),$=i.createTexture();i.bindTexture(L,$),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let mt=0;mt<J;mt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,pt,0,i.RGBA,i.UNSIGNED_BYTE,Q):i.texImage2D(ot+mt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Q);return $}const St={};St[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),St[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),St[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ht(i.DEPTH_TEST),a.setFunc(cs),Qt(!1),ue(Dl),ht(i.CULL_FACE),I(Xn);function ht(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function bt(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function Zt(L,ot){return u[L]!==ot?(i.bindFramebuffer(L,ot),u[L]=ot,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ot),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function Pt(L,ot){let J=p,pt=!1;if(L){J=d.get(ot),J===void 0&&(J=[],d.set(ot,J));const Q=L.textures;if(J.length!==Q.length||J[0]!==i.COLOR_ATTACHMENT0){for(let $=0,mt=Q.length;$<mt;$++)J[$]=i.COLOR_ATTACHMENT0+$;J.length=Q.length,pt=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,pt=!0);pt&&i.drawBuffers(J)}function ge(L){return g!==L?(i.useProgram(L),g=L,!0):!1}const ve={[Mi]:i.FUNC_ADD,[bu]:i.FUNC_SUBTRACT,[Eu]:i.FUNC_REVERSE_SUBTRACT};ve[wu]=i.MIN,ve[Tu]=i.MAX;const Jt={[Au]:i.ZERO,[Cu]:i.ONE,[Ru]:i.SRC_COLOR,[ao]:i.SRC_ALPHA,[Nu]:i.SRC_ALPHA_SATURATE,[Lu]:i.DST_COLOR,[Du]:i.DST_ALPHA,[Pu]:i.ONE_MINUS_SRC_COLOR,[oo]:i.ONE_MINUS_SRC_ALPHA,[Uu]:i.ONE_MINUS_DST_COLOR,[Iu]:i.ONE_MINUS_DST_ALPHA,[Fu]:i.CONSTANT_COLOR,[Ou]:i.ONE_MINUS_CONSTANT_COLOR,[Bu]:i.CONSTANT_ALPHA,[zu]:i.ONE_MINUS_CONSTANT_ALPHA};function I(L,ot,J,pt,Q,$,mt,Nt,de,ne){if(L===Xn){v===!0&&(bt(i.BLEND),v=!1);return}if(v===!1&&(ht(i.BLEND),v=!0),L!==Su){if(L!==m||ne!==b){if((f!==Mi||_!==Mi)&&(i.blendEquation(i.FUNC_ADD),f=Mi,_=Mi),ne)switch(L){case ss:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case we:i.blendFunc(i.ONE,i.ONE);break;case Il:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ro:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ss:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case we:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Il:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ro:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}M=null,S=null,R=null,T=null,A.set(0,0,0),P=0,m=L,b=ne}return}Q=Q||ot,$=$||J,mt=mt||pt,(ot!==f||Q!==_)&&(i.blendEquationSeparate(ve[ot],ve[Q]),f=ot,_=Q),(J!==M||pt!==S||$!==R||mt!==T)&&(i.blendFuncSeparate(Jt[J],Jt[pt],Jt[$],Jt[mt]),M=J,S=pt,R=$,T=mt),(Nt.equals(A)===!1||de!==P)&&(i.blendColor(Nt.r,Nt.g,Nt.b,de),A.copy(Nt),P=de),m=L,b=!1}function We(L,ot){L.side===ln?bt(i.CULL_FACE):ht(i.CULL_FACE);let J=L.side===Fe;ot&&(J=!J),Qt(J),L.blending===ss&&L.transparent===!1?I(Xn):I(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const pt=L.stencilWrite;o.setTest(pt),pt&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Yt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ht(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(L){y!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),y=L)}function ue(L){L!==xu?(ht(i.CULL_FACE),L!==D&&(L===Dl?i.cullFace(i.BACK):L===yu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),D=L}function xt(L){L!==O&&(W&&i.lineWidth(L),O=L)}function Yt(L,ot,J){L?(ht(i.POLYGON_OFFSET_FILL),(F!==ot||V!==J)&&(i.polygonOffset(ot,J),F=ot,V=J)):bt(i.POLYGON_OFFSET_FILL)}function Tt(L){L?ht(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function Ot(L){L===void 0&&(L=i.TEXTURE0+Y-1),ct!==L&&(i.activeTexture(L),ct=L)}function Pe(L,ot,J){J===void 0&&(ct===null?J=i.TEXTURE0+Y-1:J=ct);let pt=ft[J];pt===void 0&&(pt={type:void 0,texture:void 0},ft[J]=pt),(pt.type!==L||pt.texture!==ot)&&(ct!==J&&(i.activeTexture(J),ct=J),i.bindTexture(L,ot||St[L]),pt.type=L,pt.texture=ot)}function C(){const L=ft[ct];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{i.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{i.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function yt(){try{i.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function rt(){try{i.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function vt(){try{i.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Mt(){try{i.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{i.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ut(L){oe.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),oe.copy(L))}function Rt(L){q.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),q.copy(L))}function Ct(L,ot){let J=c.get(ot);J===void 0&&(J=new WeakMap,c.set(ot,J));let pt=J.get(L);pt===void 0&&(pt=i.getUniformBlockIndex(ot,L.name),J.set(L,pt))}function it(L,ot){const pt=c.get(ot).get(L);l.get(ot)!==pt&&(i.uniformBlockBinding(ot,pt,L.__bindingPointIndex),l.set(ot,pt))}function Lt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ct=null,ft={},u={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,M=null,S=null,_=null,R=null,T=null,A=new _t(0,0,0),P=0,b=!1,y=null,D=null,O=null,F=null,V=null,oe.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ht,disable:bt,bindFramebuffer:Zt,drawBuffers:Pt,useProgram:ge,setBlending:I,setMaterial:We,setFlipSided:Qt,setCullFace:ue,setLineWidth:xt,setPolygonOffset:Yt,setScissorTest:Tt,activeTexture:Ot,bindTexture:Pe,unbindTexture:C,compressedTexImage2D:x,compressedTexImage3D:B,texImage2D:Mt,texImage3D:j,updateUBOMapping:Ct,uniformBlockBinding:it,texStorage2D:rt,texStorage3D:vt,texSubImage2D:X,texSubImage3D:K,compressedTexSubImage2D:G,compressedTexSubImage3D:yt,scissor:ut,viewport:Rt,reset:Lt}}function Zg(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,x){return p?new OffscreenCanvas(C,x):ea("canvas")}function v(C,x,B){let X=1;const K=Pe(C);if((K.width>B||K.height>B)&&(X=B/Math.max(K.width,K.height)),X<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const G=Math.floor(X*K.width),yt=Math.floor(X*K.height);u===void 0&&(u=g(G,yt));const rt=x?g(G,yt):u;return rt.width=G,rt.height=yt,rt.getContext("2d").drawImage(C,0,0,G,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+G+"x"+yt+")."),rt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),C;return C}function m(C){return C.generateMipmaps}function f(C){i.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(C,x,B,X,K=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let G=x;if(x===i.RED&&(B===i.FLOAT&&(G=i.R32F),B===i.HALF_FLOAT&&(G=i.R16F),B===i.UNSIGNED_BYTE&&(G=i.R8)),x===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(G=i.R8UI),B===i.UNSIGNED_SHORT&&(G=i.R16UI),B===i.UNSIGNED_INT&&(G=i.R32UI),B===i.BYTE&&(G=i.R8I),B===i.SHORT&&(G=i.R16I),B===i.INT&&(G=i.R32I)),x===i.RG&&(B===i.FLOAT&&(G=i.RG32F),B===i.HALF_FLOAT&&(G=i.RG16F),B===i.UNSIGNED_BYTE&&(G=i.RG8)),x===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(G=i.RG8UI),B===i.UNSIGNED_SHORT&&(G=i.RG16UI),B===i.UNSIGNED_INT&&(G=i.RG32UI),B===i.BYTE&&(G=i.RG8I),B===i.SHORT&&(G=i.RG16I),B===i.INT&&(G=i.RG32I)),x===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(G=i.RGB8UI),B===i.UNSIGNED_SHORT&&(G=i.RGB16UI),B===i.UNSIGNED_INT&&(G=i.RGB32UI),B===i.BYTE&&(G=i.RGB8I),B===i.SHORT&&(G=i.RGB16I),B===i.INT&&(G=i.RGB32I)),x===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(G=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(G=i.RGBA16UI),B===i.UNSIGNED_INT&&(G=i.RGBA32UI),B===i.BYTE&&(G=i.RGBA8I),B===i.SHORT&&(G=i.RGBA16I),B===i.INT&&(G=i.RGBA32I)),x===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(G=i.RGB9_E5),x===i.RGBA){const yt=K?Qr:qt.getTransfer(X);B===i.FLOAT&&(G=i.RGBA32F),B===i.HALF_FLOAT&&(G=i.RGBA16F),B===i.UNSIGNED_BYTE&&(G=yt===ie?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(G=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(G=i.RGB5_A1)}return(G===i.R16F||G===i.R32F||G===i.RG16F||G===i.RG32F||G===i.RGBA16F||G===i.RGBA32F)&&t.get("EXT_color_buffer_float"),G}function _(C,x){let B;return C?x===null||x===Ai||x===js?B=i.DEPTH24_STENCIL8:x===Tn?B=i.DEPTH32F_STENCIL8:x===Ks&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ai||x===js?B=i.DEPTH_COMPONENT24:x===Tn?B=i.DEPTH_COMPONENT32F:x===Ks&&(B=i.DEPTH_COMPONENT16),B}function R(C,x){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==nn&&C.minFilter!==wn?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function T(C){const x=C.target;x.removeEventListener("dispose",T),P(x),x.isVideoTexture&&h.delete(x)}function A(C){const x=C.target;x.removeEventListener("dispose",A),y(x)}function P(C){const x=n.get(C);if(x.__webglInit===void 0)return;const B=C.source,X=d.get(B);if(X){const K=X[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&b(C),Object.keys(X).length===0&&d.delete(B)}n.remove(C)}function b(C){const x=n.get(C);i.deleteTexture(x.__webglTexture);const B=C.source,X=d.get(B);delete X[x.__cacheKey],a.memory.textures--}function y(C){const x=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(x.__webglFramebuffer[X]))for(let K=0;K<x.__webglFramebuffer[X].length;K++)i.deleteFramebuffer(x.__webglFramebuffer[X][K]);else i.deleteFramebuffer(x.__webglFramebuffer[X]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[X])}else{if(Array.isArray(x.__webglFramebuffer))for(let X=0;X<x.__webglFramebuffer.length;X++)i.deleteFramebuffer(x.__webglFramebuffer[X]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let X=0;X<x.__webglColorRenderbuffer.length;X++)x.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[X]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const B=C.textures;for(let X=0,K=B.length;X<K;X++){const G=n.get(B[X]);G.__webglTexture&&(i.deleteTexture(G.__webglTexture),a.memory.textures--),n.remove(B[X])}n.remove(C)}let D=0;function O(){D=0}function F(){const C=D;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),D+=1,C}function V(C){const x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function Y(C,x){const B=n.get(C);if(C.isVideoTexture&&Tt(C),C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){const X=C.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{St(B,C,x);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+x)}function W(C,x){const B=n.get(C);if(C.version>0&&B.__version!==C.version){St(B,C,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+x)}function Z(C,x){const B=n.get(C);if(C.version>0&&B.__version!==C.version){St(B,C,x);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+x)}function H(C,x){const B=n.get(C);if(C.version>0&&B.__version!==C.version){ht(B,C,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+x)}const ct={[Jr]:i.REPEAT,[si]:i.CLAMP_TO_EDGE,[_o]:i.MIRRORED_REPEAT},ft={[nn]:i.NEAREST,[Vu]:i.NEAREST_MIPMAP_NEAREST,[sr]:i.NEAREST_MIPMAP_LINEAR,[wn]:i.LINEAR,[ma]:i.LINEAR_MIPMAP_NEAREST,[bi]:i.LINEAR_MIPMAP_LINEAR},Et={[qu]:i.NEVER,[Ju]:i.ALWAYS,[Yu]:i.LESS,[wh]:i.LEQUAL,[$u]:i.EQUAL,[Zu]:i.GEQUAL,[Ku]:i.GREATER,[ju]:i.NOTEQUAL};function Vt(C,x){if(x.type===Tn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===wn||x.magFilter===ma||x.magFilter===sr||x.magFilter===bi||x.minFilter===wn||x.minFilter===ma||x.minFilter===sr||x.minFilter===bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,ct[x.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ct[x.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ct[x.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ft[x.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ft[x.minFilter]),x.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Et[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===nn||x.minFilter!==sr&&x.minFilter!==bi||x.type===Tn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function oe(C,x){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",T));const X=x.source;let K=d.get(X);K===void 0&&(K={},d.set(X,K));const G=V(x);if(G!==C.__cacheKey){K[G]===void 0&&(K[G]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),K[G].usedTimes++;const yt=K[C.__cacheKey];yt!==void 0&&(K[C.__cacheKey].usedTimes--,yt.usedTimes===0&&b(x)),C.__cacheKey=G,C.__webglTexture=K[G].texture}return B}function q(C,x,B){return Math.floor(Math.floor(C/B)/x)}function et(C,x,B,X){const G=C.updateRanges;if(G.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,B,X,x.data);else{G.sort((j,ut)=>j.start-ut.start);let yt=0;for(let j=1;j<G.length;j++){const ut=G[yt],Rt=G[j],Ct=ut.start+ut.count,it=q(Rt.start,x.width,4),Lt=q(ut.start,x.width,4);Rt.start<=Ct+1&&it===Lt&&q(Rt.start+Rt.count-1,x.width,4)===it?ut.count=Math.max(ut.count,Rt.start+Rt.count-ut.start):(++yt,G[yt]=Rt)}G.length=yt+1;const rt=i.getParameter(i.UNPACK_ROW_LENGTH),vt=i.getParameter(i.UNPACK_SKIP_PIXELS),Mt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let j=0,ut=G.length;j<ut;j++){const Rt=G[j],Ct=Math.floor(Rt.start/4),it=Math.ceil(Rt.count/4),Lt=Ct%x.width,L=Math.floor(Ct/x.width),ot=it,J=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Lt),i.pixelStorei(i.UNPACK_SKIP_ROWS,L),e.texSubImage2D(i.TEXTURE_2D,0,Lt,L,ot,J,B,X,x.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,rt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,vt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Mt)}}function St(C,x,B){let X=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(X=i.TEXTURE_3D);const K=oe(C,x),G=x.source;e.bindTexture(X,C.__webglTexture,i.TEXTURE0+B);const yt=n.get(G);if(G.version!==yt.__version||K===!0){e.activeTexture(i.TEXTURE0+B);const rt=qt.getPrimaries(qt.workingColorSpace),vt=x.colorSpace===Hn?null:qt.getPrimaries(x.colorSpace),Mt=x.colorSpace===Hn||rt===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let j=v(x.image,!1,s.maxTextureSize);j=Ot(x,j);const ut=r.convert(x.format,x.colorSpace),Rt=r.convert(x.type);let Ct=S(x.internalFormat,ut,Rt,x.colorSpace,x.isVideoTexture);Vt(X,x);let it;const Lt=x.mipmaps,L=x.isVideoTexture!==!0,ot=yt.__version===void 0||K===!0,J=G.dataReady,pt=R(x,j);if(x.isDepthTexture)Ct=_(x.format===Js,x.type),ot&&(L?e.texStorage2D(i.TEXTURE_2D,1,Ct,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,Ct,j.width,j.height,0,ut,Rt,null));else if(x.isDataTexture)if(Lt.length>0){L&&ot&&e.texStorage2D(i.TEXTURE_2D,pt,Ct,Lt[0].width,Lt[0].height);for(let Q=0,$=Lt.length;Q<$;Q++)it=Lt[Q],L?J&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,it.width,it.height,ut,Rt,it.data):e.texImage2D(i.TEXTURE_2D,Q,Ct,it.width,it.height,0,ut,Rt,it.data);x.generateMipmaps=!1}else L?(ot&&e.texStorage2D(i.TEXTURE_2D,pt,Ct,j.width,j.height),J&&et(x,j,ut,Rt)):e.texImage2D(i.TEXTURE_2D,0,Ct,j.width,j.height,0,ut,Rt,j.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){L&&ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Ct,Lt[0].width,Lt[0].height,j.depth);for(let Q=0,$=Lt.length;Q<$;Q++)if(it=Lt[Q],x.format!==Mn)if(ut!==null)if(L){if(J)if(x.layerUpdates.size>0){const mt=pc(it.width,it.height,x.format,x.type);for(const Nt of x.layerUpdates){const de=it.data.subarray(Nt*mt/it.data.BYTES_PER_ELEMENT,(Nt+1)*mt/it.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,Nt,it.width,it.height,1,ut,de)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,it.width,it.height,j.depth,ut,it.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Ct,it.width,it.height,j.depth,0,it.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?J&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,it.width,it.height,j.depth,ut,Rt,it.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Q,Ct,it.width,it.height,j.depth,0,ut,Rt,it.data)}else{L&&ot&&e.texStorage2D(i.TEXTURE_2D,pt,Ct,Lt[0].width,Lt[0].height);for(let Q=0,$=Lt.length;Q<$;Q++)it=Lt[Q],x.format!==Mn?ut!==null?L?J&&e.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,it.width,it.height,ut,it.data):e.compressedTexImage2D(i.TEXTURE_2D,Q,Ct,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?J&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,it.width,it.height,ut,Rt,it.data):e.texImage2D(i.TEXTURE_2D,Q,Ct,it.width,it.height,0,ut,Rt,it.data)}else if(x.isDataArrayTexture)if(L){if(ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Ct,j.width,j.height,j.depth),J)if(x.layerUpdates.size>0){const Q=pc(j.width,j.height,x.format,x.type);for(const $ of x.layerUpdates){const mt=j.data.subarray($*Q/j.data.BYTES_PER_ELEMENT,($+1)*Q/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,j.width,j.height,1,ut,Rt,mt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ut,Rt,j.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ct,j.width,j.height,j.depth,0,ut,Rt,j.data);else if(x.isData3DTexture)L?(ot&&e.texStorage3D(i.TEXTURE_3D,pt,Ct,j.width,j.height,j.depth),J&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ut,Rt,j.data)):e.texImage3D(i.TEXTURE_3D,0,Ct,j.width,j.height,j.depth,0,ut,Rt,j.data);else if(x.isFramebufferTexture){if(ot)if(L)e.texStorage2D(i.TEXTURE_2D,pt,Ct,j.width,j.height);else{let Q=j.width,$=j.height;for(let mt=0;mt<pt;mt++)e.texImage2D(i.TEXTURE_2D,mt,Ct,Q,$,0,ut,Rt,null),Q>>=1,$>>=1}}else if(Lt.length>0){if(L&&ot){const Q=Pe(Lt[0]);e.texStorage2D(i.TEXTURE_2D,pt,Ct,Q.width,Q.height)}for(let Q=0,$=Lt.length;Q<$;Q++)it=Lt[Q],L?J&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,ut,Rt,it):e.texImage2D(i.TEXTURE_2D,Q,Ct,ut,Rt,it);x.generateMipmaps=!1}else if(L){if(ot){const Q=Pe(j);e.texStorage2D(i.TEXTURE_2D,pt,Ct,Q.width,Q.height)}J&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut,Rt,j)}else e.texImage2D(i.TEXTURE_2D,0,Ct,ut,Rt,j);m(x)&&f(X),yt.__version=G.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function ht(C,x,B){if(x.image.length!==6)return;const X=oe(C,x),K=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+B);const G=n.get(K);if(K.version!==G.__version||X===!0){e.activeTexture(i.TEXTURE0+B);const yt=qt.getPrimaries(qt.workingColorSpace),rt=x.colorSpace===Hn?null:qt.getPrimaries(x.colorSpace),vt=x.colorSpace===Hn||yt===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const Mt=x.isCompressedTexture||x.image[0].isCompressedTexture,j=x.image[0]&&x.image[0].isDataTexture,ut=[];for(let $=0;$<6;$++)!Mt&&!j?ut[$]=v(x.image[$],!0,s.maxCubemapSize):ut[$]=j?x.image[$].image:x.image[$],ut[$]=Ot(x,ut[$]);const Rt=ut[0],Ct=r.convert(x.format,x.colorSpace),it=r.convert(x.type),Lt=S(x.internalFormat,Ct,it,x.colorSpace),L=x.isVideoTexture!==!0,ot=G.__version===void 0||X===!0,J=K.dataReady;let pt=R(x,Rt);Vt(i.TEXTURE_CUBE_MAP,x);let Q;if(Mt){L&&ot&&e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,Lt,Rt.width,Rt.height);for(let $=0;$<6;$++){Q=ut[$].mipmaps;for(let mt=0;mt<Q.length;mt++){const Nt=Q[mt];x.format!==Mn?Ct!==null?L?J&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,mt,0,0,Nt.width,Nt.height,Ct,Nt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,mt,Lt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,mt,0,0,Nt.width,Nt.height,Ct,it,Nt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,mt,Lt,Nt.width,Nt.height,0,Ct,it,Nt.data)}}}else{if(Q=x.mipmaps,L&&ot){Q.length>0&&pt++;const $=Pe(ut[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,Lt,$.width,$.height)}for(let $=0;$<6;$++)if(j){L?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ut[$].width,ut[$].height,Ct,it,ut[$].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Lt,ut[$].width,ut[$].height,0,Ct,it,ut[$].data);for(let mt=0;mt<Q.length;mt++){const de=Q[mt].image[$].image;L?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,mt+1,0,0,de.width,de.height,Ct,it,de.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,mt+1,Lt,de.width,de.height,0,Ct,it,de.data)}}else{L?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ct,it,ut[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Lt,Ct,it,ut[$]);for(let mt=0;mt<Q.length;mt++){const Nt=Q[mt];L?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,mt+1,0,0,Ct,it,Nt.image[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,mt+1,Lt,Ct,it,Nt.image[$])}}}m(x)&&f(i.TEXTURE_CUBE_MAP),G.__version=K.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function bt(C,x,B,X,K,G){const yt=r.convert(B.format,B.colorSpace),rt=r.convert(B.type),vt=S(B.internalFormat,yt,rt,B.colorSpace),Mt=n.get(x),j=n.get(B);if(j.__renderTarget=x,!Mt.__hasExternalTextures){const ut=Math.max(1,x.width>>G),Rt=Math.max(1,x.height>>G);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,G,vt,ut,Rt,x.depth,0,yt,rt,null):e.texImage2D(K,G,vt,ut,Rt,0,yt,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Yt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,K,j.__webglTexture,0,xt(x)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,K,j.__webglTexture,G),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Zt(C,x,B){if(i.bindRenderbuffer(i.RENDERBUFFER,C),x.depthBuffer){const X=x.depthTexture,K=X&&X.isDepthTexture?X.type:null,G=_(x.stencilBuffer,K),yt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=xt(x);Yt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,G,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,G,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,G,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,C)}else{const X=x.textures;for(let K=0;K<X.length;K++){const G=X[K],yt=r.convert(G.format,G.colorSpace),rt=r.convert(G.type),vt=S(G.internalFormat,yt,rt,G.colorSpace),Mt=xt(x);B&&Yt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,vt,x.width,x.height):Yt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt,vt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,vt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pt(C,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=n.get(x.depthTexture);X.__renderTarget=x,(!X.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Y(x.depthTexture,0);const K=X.__webglTexture,G=xt(x);if(x.depthTexture.format===Zs)Yt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(x.depthTexture.format===Js)Yt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function ge(C){const x=n.get(C),B=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){const X=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),X){const K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,X.removeEventListener("dispose",K)};X.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=X}if(C.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const X=C.texture.mipmaps;X&&X.length>0?Pt(x.__webglFramebuffer[0],C):Pt(x.__webglFramebuffer,C)}else if(B){x.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[X]),x.__webglDepthbuffer[X]===void 0)x.__webglDepthbuffer[X]=i.createRenderbuffer(),Zt(x.__webglDepthbuffer[X],C,!1);else{const K=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=x.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,G)}}else{const X=C.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Zt(x.__webglDepthbuffer,C,!1);else{const K=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,G)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ve(C,x,B){const X=n.get(C);x!==void 0&&bt(X.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&ge(C)}function Jt(C){const x=C.texture,B=n.get(C),X=n.get(x);C.addEventListener("dispose",A);const K=C.textures,G=C.isWebGLCubeRenderTarget===!0,yt=K.length>1;if(yt||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=x.version,a.memory.textures++),G){B.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[rt]=[];for(let vt=0;vt<x.mipmaps.length;vt++)B.__webglFramebuffer[rt][vt]=i.createFramebuffer()}else B.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let rt=0;rt<x.mipmaps.length;rt++)B.__webglFramebuffer[rt]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(yt)for(let rt=0,vt=K.length;rt<vt;rt++){const Mt=n.get(K[rt]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&Yt(C)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let rt=0;rt<K.length;rt++){const vt=K[rt];B.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[rt]);const Mt=r.convert(vt.format,vt.colorSpace),j=r.convert(vt.type),ut=S(vt.internalFormat,Mt,j,vt.colorSpace,C.isXRRenderTarget===!0),Rt=xt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,ut,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,B.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Zt(B.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(G){e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Vt(i.TEXTURE_CUBE_MAP,x);for(let rt=0;rt<6;rt++)if(x.mipmaps&&x.mipmaps.length>0)for(let vt=0;vt<x.mipmaps.length;vt++)bt(B.__webglFramebuffer[rt][vt],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,vt);else bt(B.__webglFramebuffer[rt],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);m(x)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let rt=0,vt=K.length;rt<vt;rt++){const Mt=K[rt],j=n.get(Mt);e.bindTexture(i.TEXTURE_2D,j.__webglTexture),Vt(i.TEXTURE_2D,Mt),bt(B.__webglFramebuffer,C,Mt,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,0),m(Mt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(rt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,X.__webglTexture),Vt(rt,x),x.mipmaps&&x.mipmaps.length>0)for(let vt=0;vt<x.mipmaps.length;vt++)bt(B.__webglFramebuffer[vt],C,x,i.COLOR_ATTACHMENT0,rt,vt);else bt(B.__webglFramebuffer,C,x,i.COLOR_ATTACHMENT0,rt,0);m(x)&&f(rt),e.unbindTexture()}C.depthBuffer&&ge(C)}function I(C){const x=C.textures;for(let B=0,X=x.length;B<X;B++){const K=x[B];if(m(K)){const G=M(C),yt=n.get(K).__webglTexture;e.bindTexture(G,yt),f(G),e.unbindTexture()}}}const We=[],Qt=[];function ue(C){if(C.samples>0){if(Yt(C)===!1){const x=C.textures,B=C.width,X=C.height;let K=i.COLOR_BUFFER_BIT;const G=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(C),rt=x.length>1;if(rt)for(let Mt=0;Mt<x.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer);const vt=C.texture.mipmaps;vt&&vt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let Mt=0;Mt<x.length;Mt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[Mt]);const j=n.get(x[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,j,0)}i.blitFramebuffer(0,0,B,X,0,0,B,X,K,i.NEAREST),l===!0&&(We.length=0,Qt.length=0,We.push(i.COLOR_ATTACHMENT0+Mt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(We.push(G),Qt.push(G),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Qt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,We))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let Mt=0;Mt<x.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,yt.__webglColorRenderbuffer[Mt]);const j=n.get(x[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,j,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const x=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function xt(C){return Math.min(s.maxSamples,C.samples)}function Yt(C){const x=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Tt(C){const x=a.render.frame;h.get(C)!==x&&(h.set(C,x),C.update())}function Ot(C,x){const B=C.colorSpace,X=C.format,K=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==ds&&B!==Hn&&(qt.getTransfer(B)===ie?(X!==Mn||K!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),x}function Pe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=O,this.setTexture2D=Y,this.setTexture2DArray=W,this.setTexture3D=Z,this.setTextureCube=H,this.rebindTextures=ve,this.setupRenderTarget=Jt,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=Yt}function Jg(i,t){function e(n,s=Hn){let r;const a=qt.getTransfer(s);if(n===Pn)return i.UNSIGNED_BYTE;if(n===el)return i.UNSIGNED_SHORT_4_4_4_4;if(n===nl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===xh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===vh)return i.BYTE;if(n===_h)return i.SHORT;if(n===Ks)return i.UNSIGNED_SHORT;if(n===tl)return i.INT;if(n===Ai)return i.UNSIGNED_INT;if(n===Tn)return i.FLOAT;if(n===Rn)return i.HALF_FLOAT;if(n===yh)return i.ALPHA;if(n===Mh)return i.RGB;if(n===Mn)return i.RGBA;if(n===Zs)return i.DEPTH_COMPONENT;if(n===Js)return i.DEPTH_STENCIL;if(n===il)return i.RED;if(n===sl)return i.RED_INTEGER;if(n===Sh)return i.RG;if(n===rl)return i.RG_INTEGER;if(n===al)return i.RGBA_INTEGER;if(n===Gr||n===Wr||n===Xr||n===qr)if(a===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Gr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Gr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===qr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xo||n===yo||n===Mo||n===So)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===xo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===yo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Mo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===So)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===bo||n===Eo||n===wo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===bo||n===Eo)return a===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===To||n===Ao||n===Co||n===Ro||n===Po||n===Do||n===Io||n===Lo||n===Uo||n===No||n===Fo||n===Oo||n===Bo||n===zo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===To)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ao)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Co)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ro)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Po)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Do)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Io)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Lo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Uo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===No)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Oo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Bo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===zo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yr||n===ko||n===Ho)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Yr)return a===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ko)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ho)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===bh||n===Vo||n===Go||n===Wo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Yr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Vo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Go)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===js?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Qg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ev{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ge,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Me({vertexShader:Qg,fragmentShader:tv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new at(new Ci(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nv extends Ms{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const v=new ev,m=e.getContextAttributes();let f=null,M=null;const S=[],_=[],R=new nt;let T=null;const A=new en;A.viewport=new ae;const P=new en;P.viewport=new ae;const b=[A,P],y=new bf;let D=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let et=S[q];return et===void 0&&(et=new Fa,S[q]=et),et.getTargetRaySpace()},this.getControllerGrip=function(q){let et=S[q];return et===void 0&&(et=new Fa,S[q]=et),et.getGripSpace()},this.getHand=function(q){let et=S[q];return et===void 0&&(et=new Fa,S[q]=et),et.getHandSpace()};function F(q){const et=_.indexOf(q.inputSource);if(et===-1)return;const St=S[et];St!==void 0&&(St.update(q.inputSource,q.frame,c||a),St.dispatchEvent({type:q.type,data:q.inputSource}))}function V(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",Y);for(let q=0;q<S.length;q++){const et=_[q];et!==null&&(_[q]=null,S[q].disconnect(et))}D=null,O=null,v.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,M=null,oe.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",V),s.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(R),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,ht=null,bt=null;m.depth&&(bt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,St=m.stencil?Js:Zs,ht=m.stencil?js:Ai);const Zt={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Zt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new un(d.textureWidth,d.textureHeight,{format:Mn,type:Pn,depthTexture:new Fh(d.textureWidth,d.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const St={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,St),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new un(p.framebufferWidth,p.framebufferHeight,{format:Mn,type:Pn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),oe.setContext(s),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Y(q){for(let et=0;et<q.removed.length;et++){const St=q.removed[et],ht=_.indexOf(St);ht>=0&&(_[ht]=null,S[ht].disconnect(St))}for(let et=0;et<q.added.length;et++){const St=q.added[et];let ht=_.indexOf(St);if(ht===-1){for(let Zt=0;Zt<S.length;Zt++)if(Zt>=_.length){_.push(St),ht=Zt;break}else if(_[Zt]===null){_[Zt]=St,ht=Zt;break}if(ht===-1)break}const bt=S[ht];bt&&bt.connect(St)}}const W=new w,Z=new w;function H(q,et,St){W.setFromMatrixPosition(et.matrixWorld),Z.setFromMatrixPosition(St.matrixWorld);const ht=W.distanceTo(Z),bt=et.projectionMatrix.elements,Zt=St.projectionMatrix.elements,Pt=bt[14]/(bt[10]-1),ge=bt[14]/(bt[10]+1),ve=(bt[9]+1)/bt[5],Jt=(bt[9]-1)/bt[5],I=(bt[8]-1)/bt[0],We=(Zt[8]+1)/Zt[0],Qt=Pt*I,ue=Pt*We,xt=ht/(-I+We),Yt=xt*-I;if(et.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Yt),q.translateZ(xt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),bt[10]===-1)q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const Tt=Pt+xt,Ot=ge+xt,Pe=Qt-Yt,C=ue+(ht-Yt),x=ve*ge/Ot*Tt,B=Jt*ge/Ot*Tt;q.projectionMatrix.makePerspective(Pe,C,x,B,Tt,Ot),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ct(q,et){et===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(et.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let et=q.near,St=q.far;v.texture!==null&&(v.depthNear>0&&(et=v.depthNear),v.depthFar>0&&(St=v.depthFar)),y.near=P.near=A.near=et,y.far=P.far=A.far=St,(D!==y.near||O!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),D=y.near,O=y.far),A.layers.mask=q.layers.mask|2,P.layers.mask=q.layers.mask|4,y.layers.mask=A.layers.mask|P.layers.mask;const ht=q.parent,bt=y.cameras;ct(y,ht);for(let Zt=0;Zt<bt.length;Zt++)ct(bt[Zt],ht);bt.length===2?H(y,A,P):y.projectionMatrix.copy(A.projectionMatrix),ft(q,y,ht)};function ft(q,et,St){St===null?q.matrix.copy(et.matrixWorld):(q.matrix.copy(St.matrixWorld),q.matrix.invert(),q.matrix.multiply(et.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Qs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let Et=null;function Vt(q,et){if(h=et.getViewerPose(c||a),g=et,h!==null){const St=h.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let ht=!1;St.length!==y.cameras.length&&(y.cameras.length=0,ht=!0);for(let Pt=0;Pt<St.length;Pt++){const ge=St[Pt];let ve=null;if(p!==null)ve=p.getViewport(ge);else{const I=u.getViewSubImage(d,ge);ve=I.viewport,Pt===0&&(t.setRenderTargetTextures(M,I.colorTexture,I.depthStencilTexture),t.setRenderTarget(M))}let Jt=b[Pt];Jt===void 0&&(Jt=new en,Jt.layers.enable(Pt),Jt.viewport=new ae,b[Pt]=Jt),Jt.matrix.fromArray(ge.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(ge.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(ve.x,ve.y,ve.width,ve.height),Pt===0&&(y.matrix.copy(Jt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ht===!0&&y.cameras.push(Jt)}const bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&u){const Pt=u.getDepthInformation(St[0]);Pt&&Pt.isValid&&Pt.texture&&v.init(t,Pt,s.renderState)}}for(let St=0;St<S.length;St++){const ht=_[St],bt=S[St];ht!==null&&bt!==void 0&&bt.update(ht,et,c||a)}Et&&Et(q,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const oe=new Hh;oe.setAnimationLoop(Vt),this.setAnimationLoop=function(q){Et=q},this.dispose=function(){}}}const _i=new pn,iv=new jt;function sv(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Dh(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,M,S,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,_)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,M,S):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Fe&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Fe&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const M=t.get(f),S=M.envMap,_=M.envMapRotation;S&&(m.envMap.value=S,_i.copy(_),_i.x*=-1,_i.y*=-1,_i.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),m.envMapRotation.value.setFromMatrix4(iv.makeRotationFromEuler(_i)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,M,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=S*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Fe&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const M=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function rv(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,S){const _=S.program;n.uniformBlockBinding(M,_)}function c(M,S){let _=s[M.id];_===void 0&&(g(M),_=h(M),s[M.id]=_,M.addEventListener("dispose",m));const R=S.program;n.updateUBOMapping(M,R);const T=t.render.frame;r[M.id]!==T&&(d(M),r[M.id]=T)}function h(M){const S=u();M.__bindingPointIndex=S;const _=i.createBuffer(),R=M.__size,T=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,R,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,_),_}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const S=s[M.id],_=M.uniforms,R=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let T=0,A=_.length;T<A;T++){const P=Array.isArray(_[T])?_[T]:[_[T]];for(let b=0,y=P.length;b<y;b++){const D=P[b];if(p(D,T,b,R)===!0){const O=D.__offset,F=Array.isArray(D.value)?D.value:[D.value];let V=0;for(let Y=0;Y<F.length;Y++){const W=F[Y],Z=v(W);typeof W=="number"||typeof W=="boolean"?(D.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,O+V,D.__data)):W.isMatrix3?(D.__data[0]=W.elements[0],D.__data[1]=W.elements[1],D.__data[2]=W.elements[2],D.__data[3]=0,D.__data[4]=W.elements[3],D.__data[5]=W.elements[4],D.__data[6]=W.elements[5],D.__data[7]=0,D.__data[8]=W.elements[6],D.__data[9]=W.elements[7],D.__data[10]=W.elements[8],D.__data[11]=0):(W.toArray(D.__data,V),V+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,S,_,R){const T=M.value,A=S+"_"+_;if(R[A]===void 0)return typeof T=="number"||typeof T=="boolean"?R[A]=T:R[A]=T.clone(),!0;{const P=R[A];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return R[A]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(M){const S=M.uniforms;let _=0;const R=16;for(let A=0,P=S.length;A<P;A++){const b=Array.isArray(S[A])?S[A]:[S[A]];for(let y=0,D=b.length;y<D;y++){const O=b[y],F=Array.isArray(O.value)?O.value:[O.value];for(let V=0,Y=F.length;V<Y;V++){const W=F[V],Z=v(W),H=_%R,ct=H%Z.boundary,ft=H+ct;_+=ct,ft!==0&&R-ft<Z.storage&&(_+=R-ft),O.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=_,_+=Z.storage}}}const T=_%R;return T>0&&(_+=R-T),M.__size=_,M.__cache={},this}function v(M){const S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),S}function m(M){const S=M.target;S.removeEventListener("dispose",m);const _=a.indexOf(S.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function f(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}class av{constructor(t={}){const{canvas:e=gd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,f=null;const M=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let R=!1;this._outputColorSpace=ke;let T=0,A=0,P=null,b=-1,y=null;const D=new ae,O=new ae;let F=null;const V=new _t(0);let Y=0,W=e.width,Z=e.height,H=1,ct=null,ft=null;const Et=new ae(0,0,W,Z),Vt=new ae(0,0,W,Z);let oe=!1;const q=new ul;let et=!1,St=!1;const ht=new jt,bt=new jt,Zt=new w,Pt=new ae,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ve=!1;function Jt(){return P===null?H:1}let I=n;function We(E,U){return e.getContext(E,U)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Jo}`),e.addEventListener("webglcontextlost",pt,!1),e.addEventListener("webglcontextrestored",Q,!1),e.addEventListener("webglcontextcreationerror",$,!1),I===null){const U="webgl2";if(I=We(U,E),I===null)throw We(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Qt,ue,xt,Yt,Tt,Ot,Pe,C,x,B,X,K,G,yt,rt,vt,Mt,j,ut,Rt,Ct,it,Lt,L;function ot(){Qt=new g0(I),Qt.init(),it=new Jg(I,Qt),ue=new c0(I,Qt,t,it),xt=new jg(I,Qt),ue.reverseDepthBuffer&&d&&xt.buffers.depth.setReversed(!0),Yt=new x0(I),Tt=new Og,Ot=new Zg(I,Qt,xt,Tt,ue,it,Yt),Pe=new u0(_),C=new m0(_),x=new wf(I),Lt=new o0(I,x),B=new v0(I,x,Yt,Lt),X=new M0(I,B,x,Yt),ut=new y0(I,ue,Ot),vt=new h0(Tt),K=new Fg(_,Pe,C,Qt,ue,Lt,vt),G=new sv(_,Tt),yt=new zg,rt=new Xg(Qt),j=new a0(_,Pe,C,xt,X,p,l),Mt=new $g(_,X,ue),L=new rv(I,Yt,ue,xt),Rt=new l0(I,Qt,Yt),Ct=new _0(I,Qt,Yt),Yt.programs=K.programs,_.capabilities=ue,_.extensions=Qt,_.properties=Tt,_.renderLists=yt,_.shadowMap=Mt,_.state=xt,_.info=Yt}ot();const J=new nv(_,I);this.xr=J,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=Qt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Qt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(E){E!==void 0&&(H=E,this.setSize(W,Z,!1))},this.getSize=function(E){return E.set(W,Z)},this.setSize=function(E,U,z=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=E,Z=U,e.width=Math.floor(E*H),e.height=Math.floor(U*H),z===!0&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(W*H,Z*H).floor()},this.setDrawingBufferSize=function(E,U,z){W=E,Z=U,H=z,e.width=Math.floor(E*z),e.height=Math.floor(U*z),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(D)},this.getViewport=function(E){return E.copy(Et)},this.setViewport=function(E,U,z,k){E.isVector4?Et.set(E.x,E.y,E.z,E.w):Et.set(E,U,z,k),xt.viewport(D.copy(Et).multiplyScalar(H).round())},this.getScissor=function(E){return E.copy(Vt)},this.setScissor=function(E,U,z,k){E.isVector4?Vt.set(E.x,E.y,E.z,E.w):Vt.set(E,U,z,k),xt.scissor(O.copy(Vt).multiplyScalar(H).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(E){xt.setScissorTest(oe=E)},this.setOpaqueSort=function(E){ct=E},this.setTransparentSort=function(E){ft=E},this.getClearColor=function(E){return E.copy(j.getClearColor())},this.setClearColor=function(){j.setClearColor(...arguments)},this.getClearAlpha=function(){return j.getClearAlpha()},this.setClearAlpha=function(){j.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,z=!0){let k=0;if(E){let N=!1;if(P!==null){const tt=P.texture.format;N=tt===al||tt===rl||tt===sl}if(N){const tt=P.texture.type,lt=tt===Pn||tt===Ai||tt===Ks||tt===js||tt===el||tt===nl,gt=j.getClearColor(),dt=j.getClearAlpha(),Dt=gt.r,It=gt.g,wt=gt.b;lt?(g[0]=Dt,g[1]=It,g[2]=wt,g[3]=dt,I.clearBufferuiv(I.COLOR,0,g)):(v[0]=Dt,v[1]=It,v[2]=wt,v[3]=dt,I.clearBufferiv(I.COLOR,0,v))}else k|=I.COLOR_BUFFER_BIT}U&&(k|=I.DEPTH_BUFFER_BIT),z&&(k|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pt,!1),e.removeEventListener("webglcontextrestored",Q,!1),e.removeEventListener("webglcontextcreationerror",$,!1),j.dispose(),yt.dispose(),rt.dispose(),Tt.dispose(),Pe.dispose(),C.dispose(),X.dispose(),Lt.dispose(),L.dispose(),K.dispose(),J.dispose(),J.removeEventListener("sessionstart",El),J.removeEventListener("sessionend",wl),ui.stop()};function pt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const E=Yt.autoReset,U=Mt.enabled,z=Mt.autoUpdate,k=Mt.needsUpdate,N=Mt.type;ot(),Yt.autoReset=E,Mt.enabled=U,Mt.autoUpdate=z,Mt.needsUpdate=k,Mt.type=N}function $(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function mt(E){const U=E.target;U.removeEventListener("dispose",mt),Nt(U)}function Nt(E){de(E),Tt.remove(E)}function de(E){const U=Tt.get(E).programs;U!==void 0&&(U.forEach(function(z){K.releaseProgram(z)}),E.isShaderMaterial&&K.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,z,k,N,tt){U===null&&(U=ge);const lt=N.isMesh&&N.matrixWorld.determinant()<0,gt=fu(E,U,z,k,N);xt.setMaterial(k,lt);let dt=z.index,Dt=1;if(k.wireframe===!0){if(dt=B.getWireframeAttribute(z),dt===void 0)return;Dt=2}const It=z.drawRange,wt=z.attributes.position;let Gt=It.start*Dt,re=(It.start+It.count)*Dt;tt!==null&&(Gt=Math.max(Gt,tt.start*Dt),re=Math.min(re,(tt.start+tt.count)*Dt)),dt!==null?(Gt=Math.max(Gt,0),re=Math.min(re,dt.count)):wt!=null&&(Gt=Math.max(Gt,0),re=Math.min(re,wt.count));const Se=re-Gt;if(Se<0||Se===1/0)return;Lt.setup(N,k,gt,z,dt);let fe,le=Rt;if(dt!==null&&(fe=x.get(dt),le=Ct,le.setIndex(fe)),N.isMesh)k.wireframe===!0?(xt.setLineWidth(k.wireframeLinewidth*Jt()),le.setMode(I.LINES)):le.setMode(I.TRIANGLES);else if(N.isLine){let At=k.linewidth;At===void 0&&(At=1),xt.setLineWidth(At*Jt()),N.isLineSegments?le.setMode(I.LINES):N.isLineLoop?le.setMode(I.LINE_LOOP):le.setMode(I.LINE_STRIP)}else N.isPoints?le.setMode(I.POINTS):N.isSprite&&le.setMode(I.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)rs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),le.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Qt.get("WEBGL_multi_draw"))le.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const At=N._multiDrawStarts,_e=N._multiDrawCounts,$t=N._multiDrawCount,Ze=dt?x.get(dt).bytesPerElement:1,Li=Tt.get(k).currentProgram.getUniforms();for(let Je=0;Je<$t;Je++)Li.setValue(I,"_gl_DrawID",Je),le.render(At[Je]/Ze,_e[Je])}else if(N.isInstancedMesh)le.renderInstances(Gt,Se,N.count);else if(z.isInstancedBufferGeometry){const At=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,_e=Math.min(z.instanceCount,At);le.renderInstances(Gt,Se,_e)}else le.render(Gt,Se)};function ne(E,U,z){E.transparent===!0&&E.side===ln&&E.forceSinglePass===!1?(E.side=Fe,E.needsUpdate=!0,ir(E,U,z),E.side=$n,E.needsUpdate=!0,ir(E,U,z),E.side=ln):ir(E,U,z)}this.compile=function(E,U,z=null){z===null&&(z=E),f=rt.get(z),f.init(U),S.push(f),z.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),E!==z&&E.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();const k=new Set;return E.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const tt=N.material;if(tt)if(Array.isArray(tt))for(let lt=0;lt<tt.length;lt++){const gt=tt[lt];ne(gt,z,N),k.add(gt)}else ne(tt,z,N),k.add(tt)}),f=S.pop(),k},this.compileAsync=function(E,U,z=null){const k=this.compile(E,U,z);return new Promise(N=>{function tt(){if(k.forEach(function(lt){Tt.get(lt).currentProgram.isReady()&&k.delete(lt)}),k.size===0){N(E);return}setTimeout(tt,10)}Qt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let mn=null;function Un(E){mn&&mn(E)}function El(){ui.stop()}function wl(){ui.start()}const ui=new Hh;ui.setAnimationLoop(Un),typeof self<"u"&&ui.setContext(self),this.setAnimationLoop=function(E){mn=E,J.setAnimationLoop(E),E===null?ui.stop():ui.start()},J.addEventListener("sessionstart",El),J.addEventListener("sessionend",wl),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(U),U=J.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,U,P),f=rt.get(E,S.length),f.init(U),S.push(f),bt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),q.setFromProjectionMatrix(bt),St=this.localClippingEnabled,et=vt.init(this.clippingPlanes,St),m=yt.get(E,M.length),m.init(),M.push(m),J.enabled===!0&&J.isPresenting===!0){const tt=_.xr.getDepthSensingMesh();tt!==null&&fa(tt,U,-1/0,_.sortObjects)}fa(E,U,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(ct,ft),ve=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,ve&&j.addToRenderList(m,E),this.info.render.frame++,et===!0&&vt.beginShadows();const z=f.state.shadowsArray;Mt.render(z,E,U),et===!0&&vt.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,N=m.transmissive;if(f.setupLights(),U.isArrayCamera){const tt=U.cameras;if(N.length>0)for(let lt=0,gt=tt.length;lt<gt;lt++){const dt=tt[lt];Al(k,N,E,dt)}ve&&j.render(E);for(let lt=0,gt=tt.length;lt<gt;lt++){const dt=tt[lt];Tl(m,E,dt,dt.viewport)}}else N.length>0&&Al(k,N,E,U),ve&&j.render(E),Tl(m,E,U);P!==null&&A===0&&(Ot.updateMultisampleRenderTarget(P),Ot.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(_,E,U),Lt.resetDefaultState(),b=-1,y=null,S.pop(),S.length>0?(f=S[S.length-1],et===!0&&vt.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function fa(E,U,z,k){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||q.intersectsSprite(E)){k&&Pt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(bt);const lt=X.update(E),gt=E.material;gt.visible&&m.push(E,lt,gt,z,Pt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||q.intersectsObject(E))){const lt=X.update(E),gt=E.material;if(k&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Pt.copy(E.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Pt.copy(lt.boundingSphere.center)),Pt.applyMatrix4(E.matrixWorld).applyMatrix4(bt)),Array.isArray(gt)){const dt=lt.groups;for(let Dt=0,It=dt.length;Dt<It;Dt++){const wt=dt[Dt],Gt=gt[wt.materialIndex];Gt&&Gt.visible&&m.push(E,lt,Gt,z,Pt.z,wt)}}else gt.visible&&m.push(E,lt,gt,z,Pt.z,null)}}const tt=E.children;for(let lt=0,gt=tt.length;lt<gt;lt++)fa(tt[lt],U,z,k)}function Tl(E,U,z,k){const N=E.opaque,tt=E.transmissive,lt=E.transparent;f.setupLightsView(z),et===!0&&vt.setGlobalState(_.clippingPlanes,z),k&&xt.viewport(D.copy(k)),N.length>0&&nr(N,U,z),tt.length>0&&nr(tt,U,z),lt.length>0&&nr(lt,U,z),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function Al(E,U,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[k.id]===void 0&&(f.state.transmissionRenderTarget[k.id]=new un(1,1,{generateMipmaps:!0,type:Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float")?Rn:Pn,minFilter:bi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));const tt=f.state.transmissionRenderTarget[k.id],lt=k.viewport||D;tt.setSize(lt.z*_.transmissionResolutionScale,lt.w*_.transmissionResolutionScale);const gt=_.getRenderTarget(),dt=_.getActiveCubeFace(),Dt=_.getActiveMipmapLevel();_.setRenderTarget(tt),_.getClearColor(V),Y=_.getClearAlpha(),Y<1&&_.setClearColor(16777215,.5),_.clear(),ve&&j.render(z);const It=_.toneMapping;_.toneMapping=li;const wt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),f.setupLightsView(k),et===!0&&vt.setGlobalState(_.clippingPlanes,k),nr(E,z,k),Ot.updateMultisampleRenderTarget(tt),Ot.updateRenderTargetMipmap(tt),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let re=0,Se=U.length;re<Se;re++){const fe=U[re],le=fe.object,At=fe.geometry,_e=fe.material,$t=fe.group;if(_e.side===ln&&le.layers.test(k.layers)){const Ze=_e.side;_e.side=Fe,_e.needsUpdate=!0,Cl(le,z,k,At,_e,$t),_e.side=Ze,_e.needsUpdate=!0,Gt=!0}}Gt===!0&&(Ot.updateMultisampleRenderTarget(tt),Ot.updateRenderTargetMipmap(tt))}_.setRenderTarget(gt,dt,Dt),_.setClearColor(V,Y),wt!==void 0&&(k.viewport=wt),_.toneMapping=It}function nr(E,U,z){const k=U.isScene===!0?U.overrideMaterial:null;for(let N=0,tt=E.length;N<tt;N++){const lt=E[N],gt=lt.object,dt=lt.geometry,Dt=lt.group;let It=lt.material;It.allowOverride===!0&&k!==null&&(It=k),gt.layers.test(z.layers)&&Cl(gt,U,z,dt,It,Dt)}}function Cl(E,U,z,k,N,tt){E.onBeforeRender(_,U,z,k,N,tt),E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.onBeforeRender(_,U,z,k,E,tt),N.transparent===!0&&N.side===ln&&N.forceSinglePass===!1?(N.side=Fe,N.needsUpdate=!0,_.renderBufferDirect(z,U,k,N,E,tt),N.side=$n,N.needsUpdate=!0,_.renderBufferDirect(z,U,k,N,E,tt),N.side=ln):_.renderBufferDirect(z,U,k,N,E,tt),E.onAfterRender(_,U,z,k,N,tt)}function ir(E,U,z){U.isScene!==!0&&(U=ge);const k=Tt.get(E),N=f.state.lights,tt=f.state.shadowsArray,lt=N.state.version,gt=K.getParameters(E,N.state,tt,U,z),dt=K.getProgramCacheKey(gt);let Dt=k.programs;k.environment=E.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(E.isMeshStandardMaterial?C:Pe).get(E.envMap||k.environment),k.envMapRotation=k.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Dt===void 0&&(E.addEventListener("dispose",mt),Dt=new Map,k.programs=Dt);let It=Dt.get(dt);if(It!==void 0){if(k.currentProgram===It&&k.lightsStateVersion===lt)return Pl(E,gt),It}else gt.uniforms=K.getUniforms(E),E.onBeforeCompile(gt,_),It=K.acquireProgram(gt,dt),Dt.set(dt,It),k.uniforms=gt.uniforms;const wt=k.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(wt.clippingPlanes=vt.uniform),Pl(E,gt),k.needsLights=mu(E),k.lightsStateVersion=lt,k.needsLights&&(wt.ambientLightColor.value=N.state.ambient,wt.lightProbe.value=N.state.probe,wt.directionalLights.value=N.state.directional,wt.directionalLightShadows.value=N.state.directionalShadow,wt.spotLights.value=N.state.spot,wt.spotLightShadows.value=N.state.spotShadow,wt.rectAreaLights.value=N.state.rectArea,wt.ltc_1.value=N.state.rectAreaLTC1,wt.ltc_2.value=N.state.rectAreaLTC2,wt.pointLights.value=N.state.point,wt.pointLightShadows.value=N.state.pointShadow,wt.hemisphereLights.value=N.state.hemi,wt.directionalShadowMap.value=N.state.directionalShadowMap,wt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,wt.spotShadowMap.value=N.state.spotShadowMap,wt.spotLightMatrix.value=N.state.spotLightMatrix,wt.spotLightMap.value=N.state.spotLightMap,wt.pointShadowMap.value=N.state.pointShadowMap,wt.pointShadowMatrix.value=N.state.pointShadowMatrix),k.currentProgram=It,k.uniformsList=null,It}function Rl(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=$r.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Pl(E,U){const z=Tt.get(E);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function fu(E,U,z,k,N){U.isScene!==!0&&(U=ge),Ot.resetTextureUnits();const tt=U.fog,lt=k.isMeshStandardMaterial?U.environment:null,gt=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ds,dt=(k.isMeshStandardMaterial?C:Pe).get(k.envMap||lt),Dt=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,It=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),wt=!!z.morphAttributes.position,Gt=!!z.morphAttributes.normal,re=!!z.morphAttributes.color;let Se=li;k.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Se=_.toneMapping);const fe=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,le=fe!==void 0?fe.length:0,At=Tt.get(k),_e=f.state.lights;if(et===!0&&(St===!0||E!==y)){const Xe=E===y&&k.id===b;vt.setState(k,E,Xe)}let $t=!1;k.version===At.__version?(At.needsLights&&At.lightsStateVersion!==_e.state.version||At.outputColorSpace!==gt||N.isBatchedMesh&&At.batching===!1||!N.isBatchedMesh&&At.batching===!0||N.isBatchedMesh&&At.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&At.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&At.instancing===!1||!N.isInstancedMesh&&At.instancing===!0||N.isSkinnedMesh&&At.skinning===!1||!N.isSkinnedMesh&&At.skinning===!0||N.isInstancedMesh&&At.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&At.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&At.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&At.instancingMorph===!1&&N.morphTexture!==null||At.envMap!==dt||k.fog===!0&&At.fog!==tt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==vt.numPlanes||At.numIntersection!==vt.numIntersection)||At.vertexAlphas!==Dt||At.vertexTangents!==It||At.morphTargets!==wt||At.morphNormals!==Gt||At.morphColors!==re||At.toneMapping!==Se||At.morphTargetsCount!==le)&&($t=!0):($t=!0,At.__version=k.version);let Ze=At.currentProgram;$t===!0&&(Ze=ir(k,U,N));let Li=!1,Je=!1,As=!1;const me=Ze.getUniforms(),rn=At.uniforms;if(xt.useProgram(Ze.program)&&(Li=!0,Je=!0,As=!0),k.id!==b&&(b=k.id,Je=!0),Li||y!==E){xt.buffers.depth.getReversed()?(ht.copy(E.projectionMatrix),_d(ht),xd(ht),me.setValue(I,"projectionMatrix",ht)):me.setValue(I,"projectionMatrix",E.projectionMatrix),me.setValue(I,"viewMatrix",E.matrixWorldInverse);const je=me.map.cameraPosition;je!==void 0&&je.setValue(I,Zt.setFromMatrixPosition(E.matrixWorld)),ue.logarithmicDepthBuffer&&me.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&me.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,Je=!0,As=!0)}if(N.isSkinnedMesh){me.setOptional(I,N,"bindMatrix"),me.setOptional(I,N,"bindMatrixInverse");const Xe=N.skeleton;Xe&&(Xe.boneTexture===null&&Xe.computeBoneTexture(),me.setValue(I,"boneTexture",Xe.boneTexture,Ot))}N.isBatchedMesh&&(me.setOptional(I,N,"batchingTexture"),me.setValue(I,"batchingTexture",N._matricesTexture,Ot),me.setOptional(I,N,"batchingIdTexture"),me.setValue(I,"batchingIdTexture",N._indirectTexture,Ot),me.setOptional(I,N,"batchingColorTexture"),N._colorsTexture!==null&&me.setValue(I,"batchingColorTexture",N._colorsTexture,Ot));const an=z.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&ut.update(N,z,Ze),(Je||At.receiveShadow!==N.receiveShadow)&&(At.receiveShadow=N.receiveShadow,me.setValue(I,"receiveShadow",N.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(rn.envMap.value=dt,rn.flipEnvMap.value=dt.isCubeTexture&&dt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(rn.envMapIntensity.value=U.environmentIntensity),Je&&(me.setValue(I,"toneMappingExposure",_.toneMappingExposure),At.needsLights&&pu(rn,As),tt&&k.fog===!0&&G.refreshFogUniforms(rn,tt),G.refreshMaterialUniforms(rn,k,H,Z,f.state.transmissionRenderTarget[E.id]),$r.upload(I,Rl(At),rn,Ot)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&($r.upload(I,Rl(At),rn,Ot),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&me.setValue(I,"center",N.center),me.setValue(I,"modelViewMatrix",N.modelViewMatrix),me.setValue(I,"normalMatrix",N.normalMatrix),me.setValue(I,"modelMatrix",N.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Xe=k.uniformsGroups;for(let je=0,pa=Xe.length;je<pa;je++){const di=Xe[je];L.update(di,Ze),L.bind(di,Ze)}}return Ze}function pu(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function mu(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,U,z){const k=Tt.get(E);k.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),Tt.get(E.texture).__webglTexture=U,Tt.get(E.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:z,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){const z=Tt.get(E);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0};const gu=I.createFramebuffer();this.setRenderTarget=function(E,U=0,z=0){P=E,T=U,A=z;let k=!0,N=null,tt=!1,lt=!1;if(E){const dt=Tt.get(E);if(dt.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(I.FRAMEBUFFER,null),k=!1;else if(dt.__webglFramebuffer===void 0)Ot.setupRenderTarget(E);else if(dt.__hasExternalTextures)Ot.rebindTextures(E,Tt.get(E.texture).__webglTexture,Tt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const wt=E.depthTexture;if(dt.__boundDepthTexture!==wt){if(wt!==null&&Tt.has(wt)&&(E.width!==wt.image.width||E.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ot.setupDepthRenderbuffer(E)}}const Dt=E.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(lt=!0);const It=Tt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(It[U])?N=It[U][z]:N=It[U],tt=!0):E.samples>0&&Ot.useMultisampledRTT(E)===!1?N=Tt.get(E).__webglMultisampledFramebuffer:Array.isArray(It)?N=It[z]:N=It,D.copy(E.viewport),O.copy(E.scissor),F=E.scissorTest}else D.copy(Et).multiplyScalar(H).floor(),O.copy(Vt).multiplyScalar(H).floor(),F=oe;if(z!==0&&(N=gu),xt.bindFramebuffer(I.FRAMEBUFFER,N)&&k&&xt.drawBuffers(E,N),xt.viewport(D),xt.scissor(O),xt.setScissorTest(F),tt){const dt=Tt.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,dt.__webglTexture,z)}else if(lt){const dt=Tt.get(E.texture),Dt=U;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,dt.__webglTexture,z,Dt)}else if(E!==null&&z!==0){const dt=Tt.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,dt.__webglTexture,z)}b=-1},this.readRenderTargetPixels=function(E,U,z,k,N,tt,lt,gt=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let dt=Tt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&lt!==void 0&&(dt=dt[lt]),dt){xt.bindFramebuffer(I.FRAMEBUFFER,dt);try{const Dt=E.textures[gt],It=Dt.format,wt=Dt.type;if(!ue.textureFormatReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ue.textureTypeReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-k&&z>=0&&z<=E.height-N&&(E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+gt),I.readPixels(U,z,k,N,it.convert(It),it.convert(wt),tt))}finally{const Dt=P!==null?Tt.get(P).__webglFramebuffer:null;xt.bindFramebuffer(I.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(E,U,z,k,N,tt,lt,gt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let dt=Tt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&lt!==void 0&&(dt=dt[lt]),dt)if(U>=0&&U<=E.width-k&&z>=0&&z<=E.height-N){xt.bindFramebuffer(I.FRAMEBUFFER,dt);const Dt=E.textures[gt],It=Dt.format,wt=Dt.type;if(!ue.textureFormatReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ue.textureTypeReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Gt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Gt),I.bufferData(I.PIXEL_PACK_BUFFER,tt.byteLength,I.STREAM_READ),E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+gt),I.readPixels(U,z,k,N,it.convert(It),it.convert(wt),0);const re=P!==null?Tt.get(P).__webglFramebuffer:null;xt.bindFramebuffer(I.FRAMEBUFFER,re);const Se=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await vd(I,Se,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Gt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,tt),I.deleteBuffer(Gt),I.deleteSync(Se),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,z=0){const k=Math.pow(2,-z),N=Math.floor(E.image.width*k),tt=Math.floor(E.image.height*k),lt=U!==null?U.x:0,gt=U!==null?U.y:0;Ot.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,z,0,0,lt,gt,N,tt),xt.unbindTexture()};const vu=I.createFramebuffer(),_u=I.createFramebuffer();this.copyTextureToTexture=function(E,U,z=null,k=null,N=0,tt=null){tt===null&&(N!==0?(rs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),tt=N,N=0):tt=0);let lt,gt,dt,Dt,It,wt,Gt,re,Se;const fe=E.isCompressedTexture?E.mipmaps[tt]:E.image;if(z!==null)lt=z.max.x-z.min.x,gt=z.max.y-z.min.y,dt=z.isBox3?z.max.z-z.min.z:1,Dt=z.min.x,It=z.min.y,wt=z.isBox3?z.min.z:0;else{const an=Math.pow(2,-N);lt=Math.floor(fe.width*an),gt=Math.floor(fe.height*an),E.isDataArrayTexture?dt=fe.depth:E.isData3DTexture?dt=Math.floor(fe.depth*an):dt=1,Dt=0,It=0,wt=0}k!==null?(Gt=k.x,re=k.y,Se=k.z):(Gt=0,re=0,Se=0);const le=it.convert(U.format),At=it.convert(U.type);let _e;U.isData3DTexture?(Ot.setTexture3D(U,0),_e=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Ot.setTexture2DArray(U,0),_e=I.TEXTURE_2D_ARRAY):(Ot.setTexture2D(U,0),_e=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const $t=I.getParameter(I.UNPACK_ROW_LENGTH),Ze=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Li=I.getParameter(I.UNPACK_SKIP_PIXELS),Je=I.getParameter(I.UNPACK_SKIP_ROWS),As=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,fe.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,fe.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Dt),I.pixelStorei(I.UNPACK_SKIP_ROWS,It),I.pixelStorei(I.UNPACK_SKIP_IMAGES,wt);const me=E.isDataArrayTexture||E.isData3DTexture,rn=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){const an=Tt.get(E),Xe=Tt.get(U),je=Tt.get(an.__renderTarget),pa=Tt.get(Xe.__renderTarget);xt.bindFramebuffer(I.READ_FRAMEBUFFER,je.__webglFramebuffer),xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,pa.__webglFramebuffer);for(let di=0;di<dt;di++)me&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Tt.get(E).__webglTexture,N,wt+di),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Tt.get(U).__webglTexture,tt,Se+di)),I.blitFramebuffer(Dt,It,lt,gt,Gt,re,lt,gt,I.DEPTH_BUFFER_BIT,I.NEAREST);xt.bindFramebuffer(I.READ_FRAMEBUFFER,null),xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(N!==0||E.isRenderTargetTexture||Tt.has(E)){const an=Tt.get(E),Xe=Tt.get(U);xt.bindFramebuffer(I.READ_FRAMEBUFFER,vu),xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,_u);for(let je=0;je<dt;je++)me?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,an.__webglTexture,N,wt+je):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,an.__webglTexture,N),rn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Xe.__webglTexture,tt,Se+je):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Xe.__webglTexture,tt),N!==0?I.blitFramebuffer(Dt,It,lt,gt,Gt,re,lt,gt,I.COLOR_BUFFER_BIT,I.NEAREST):rn?I.copyTexSubImage3D(_e,tt,Gt,re,Se+je,Dt,It,lt,gt):I.copyTexSubImage2D(_e,tt,Gt,re,Dt,It,lt,gt);xt.bindFramebuffer(I.READ_FRAMEBUFFER,null),xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else rn?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(_e,tt,Gt,re,Se,lt,gt,dt,le,At,fe.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(_e,tt,Gt,re,Se,lt,gt,dt,le,fe.data):I.texSubImage3D(_e,tt,Gt,re,Se,lt,gt,dt,le,At,fe):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,tt,Gt,re,lt,gt,le,At,fe.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,tt,Gt,re,fe.width,fe.height,le,fe.data):I.texSubImage2D(I.TEXTURE_2D,tt,Gt,re,lt,gt,le,At,fe);I.pixelStorei(I.UNPACK_ROW_LENGTH,$t),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ze),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Li),I.pixelStorei(I.UNPACK_SKIP_ROWS,Je),I.pixelStorei(I.UNPACK_SKIP_IMAGES,As),tt===0&&U.generateMipmaps&&I.generateMipmap(_e),xt.unbindTexture()},this.copyTextureToTexture3D=function(E,U,z=null,k=null,N=0){return rs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,U,z,k,N)},this.initRenderTarget=function(E){Tt.get(E).__webglFramebuffer===void 0&&Ot.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Ot.setTextureCube(E,0):E.isData3DTexture?Ot.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ot.setTexture2DArray(E,0):Ot.setTexture2D(E,0),xt.unbindTexture()},this.resetState=function(){T=0,A=0,P=null,xt.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}}class qh extends Re{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new nt(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}}const Qi=new w,zc=new jt,kc=new jt,Hc=new w,Vc=new w;class ov{constructor(t={}){const e=this;let n,s,r,a;const o={objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:n,height:s}},this.render=function(g,v){g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),v.parent===null&&v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),zc.copy(v.matrixWorldInverse),kc.multiplyMatrices(v.projectionMatrix,zc),h(g,g,v),p(g)},this.setSize=function(g,v){n=g,s=v,r=n/2,a=s/2,l.style.width=g+"px",l.style.height=v+"px"};function c(g){g.isCSS2DObject&&(g.element.style.display="none");for(let v=0,m=g.children.length;v<m;v++)c(g.children[v])}function h(g,v,m){if(g.visible===!1){c(g);return}if(g.isCSS2DObject){Qi.setFromMatrixPosition(g.matrixWorld),Qi.applyMatrix4(kc);const f=Qi.z>=-1&&Qi.z<=1&&g.layers.test(m.layers)===!0,M=g.element;M.style.display=f===!0?"":"none",f===!0&&(g.onBeforeRender(e,v,m),M.style.transform="translate("+-100*g.center.x+"%,"+-100*g.center.y+"%)translate("+(Qi.x*r+r)+"px,"+(-Qi.y*a+a)+"px)",M.parentNode!==l&&l.appendChild(M),g.onAfterRender(e,v,m));const S={distanceToCameraSquared:u(m,g)};o.objects.set(g,S)}for(let f=0,M=g.children.length;f<M;f++)h(g.children[f],v,m)}function u(g,v){return Hc.setFromMatrixPosition(g.matrixWorld),Vc.setFromMatrixPosition(v.matrixWorld),Hc.distanceToSquared(Vc)}function d(g){const v=[];return g.traverseVisible(function(m){m.isCSS2DObject&&v.push(m)}),v}function p(g){const v=d(g).sort(function(f,M){if(f.renderOrder!==M.renderOrder)return M.renderOrder-f.renderOrder;const S=o.objects.get(f).distanceToCameraSquared,_=o.objects.get(M).distanceToCameraSquared;return S-_}),m=v.length;for(let f=0,M=v.length;f<M;f++)v[f].element.style.zIndex=m-f}}}function Vn(i=0){return{value:i,velocity:0}}function Yh(i){return{value:i?i.clone():new w,velocity:new w}}function En(i,t,e,n){const r=Math.min(e,.1)/4,a=2/Math.max(n,1e-4),o=a*a;for(let l=0;l<4;l++){const c=i.value-t,h=-o*c-2*a*i.velocity;i.velocity+=h*r,i.value+=i.velocity*r}Math.abs(i.value-t)<1e-7&&Math.abs(i.velocity)<1e-6&&(i.value=t,i.velocity=0)}function $h(i,t,e,n){const r=Math.min(e,.1)/4,a=2/Math.max(n,1e-4),o=a*a;for(let l=0;l<4;l++){const c=lv.copy(i.value).sub(t),h=cv.copy(c).multiplyScalar(-o).addScaledVector(i.velocity,-2*a);i.velocity.addScaledVector(h,r),i.value.addScaledVector(i.velocity,r)}i.value.distanceToSquared(t)<1e-12&&i.velocity.lengthSq()<1e-12&&(i.value.copy(t),i.velocity.set(0,0,0))}const lv=new w,cv=new w;function $o(i,t,e){if(i<=0)return 0;const n=Math.max(t,1e-4),s=Math.max(e,1e-4),r=hv(0,n,i),a=Math.exp(-Math.max(0,i-n)/s);return r*a}function hv(i,t,e){const n=pe.clamp((e-i)/(t-i||1e-9),0,1);return n*n*(3-2*n)}function uv(i,t){let e=(t-i)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e}class Kr{age=1/0;rise;fall;constructor(t=.25,e=.9){this.rise=t,this.fall=e}trigger(){this.age=0}update(t){if(this.age===1/0)return 0;this.age+=t;const e=$o(this.age,this.rise,this.fall);return e<.002&&(this.age=1/0),e}get value(){return this.age===1/0?0:$o(this.age,this.rise,this.fall)}}const Ur={CINEMATIC_INTRO:52,SYSTEM:55,ORBIT:50,CUTAWAY:42,RING_DIVE:62,SURFACE_WALK:68,SPACECRAFT_FLIGHT:60};class dv{camera;state="SYSTEM";azimuth=Vn(Math.PI*.35);elevation=Vn(.32);distance=Vn(120);pan=Yh();fov=Vn(55);roll=Vn(0);targetAzimuth=Math.PI*.35;targetElevation=.32;targetDistance=120;bodyRadius=1;terrainHeight=0;surfacePose={position:new w,yaw:0,pitch:0};fovOverride=null;introProgress=0;lookTarget=new w;lookSmooth=new w;tmp=new w;minDistanceScale=1.02;constructor(t){this.camera=t,this.lookSmooth.set(0,0,0),this.applySpherical(1),this.camera.position.set(0,this.bodyRadius*3,this.distance.value),this.camera.lookAt(0,0,0)}get minDistance(){return this.bodyRadius*this.minDistanceScale+this.terrainHeight}request(t){this.state!==t&&(this.state=t,t==="ORBIT"&&(this.targetElevation=pe.clamp(this.targetElevation,-1.35,1.35)),t==="CUTAWAY"&&(this.targetElevation=pe.clamp(this.targetElevation,-.9,.9),this.targetDistance=Math.max(this.targetDistance,this.bodyRadius*3.2)),t==="RING_DIVE"&&(this.targetElevation=pe.clamp(this.targetElevation,-.45,.45),this.targetDistance=Math.min(this.targetDistance,this.bodyRadius*6)),t==="SYSTEM"&&(this.pan.value.set(0,0,0),this.pan.velocity.set(0,0,0)))}setFocusBody(t){this.bodyRadius=Math.max(t,1e-4),this.targetDistance=Math.max(this.targetDistance,this.minDistance*1.25),this.distance.value=Math.max(this.distance.value,this.minDistance)}frameBody(t,e=3.6,n=1.2){this.bodyRadius=Math.max(t,1e-4),this.targetDistance=this.bodyRadius*e,this._frameSeconds=n,this._frameSeconds}_frameSeconds=1.2;addInput(t){const e=.0052*(Ur[this.state]/55);if(this.targetAzimuth-=t.dragDX*e,this.targetElevation+=t.dragDY*e*.85,this.targetElevation=pe.clamp(this.targetElevation,-1.5,1.5),t.panDX!==0||t.panDY!==0){const n=this.targetDistance*.0016;this.pan.value.x-=t.panDX*n,this.pan.value.y+=t.panDY*n,this.state==="SYSTEM"&&this.pan.value.set(0,0,0)}if(t.zoom!==0){const n=Math.exp(t.zoom*.0016);this.targetDistance=pe.clamp(this.targetDistance*n,this.minDistance*1.02,12e3)}}setDistance(t){this.targetDistance=pe.clamp(t,this.minDistance*1.02,12e3)}update(t){switch(this.state){case"SURFACE_WALK":this.updateSurface(t);return;case"SPACECRAFT_FLIGHT":this.updateCraft(t);return;case"CINEMATIC_INTRO":this.updateIntro(t);return;default:this.updateOrbit(t)}}updateOrbit(t){this.targetDistance=Math.max(this.targetDistance,this.minDistance*1.02),this.azimuth.value+=uv(this.azimuth.value,this.targetAzimuth)*Math.min(1,t*6),this.azimuth.velocity=0,En(this.elevation,this.targetElevation,t,.55),En(this.distance,this.targetDistance,t,.7),En(this.fov,this.fovOverride??Ur[this.state],t,.8),$h(this.pan,this.pan.value,t,.5),this.pan.velocity.multiplyScalar(Math.exp(-t*4)),this.applySpherical(1),this.camera.position.add(this.pan.value),this.lookTarget.copy(this.pan.value);const e=1-Math.exp(-t*7);this.lookSmooth.lerp(this.lookTarget,e),this.camera.lookAt(this.lookSmooth),this.camera.fov=this.fov.value,this.camera.updateProjectionMatrix(),this.camera.rotation.z=this.roll.value}applySpherical(t){const e=this.distance.value*t,n=this.azimuth.value,s=this.elevation.value;this.camera.position.set(Math.cos(s)*Math.sin(n)*e,Math.sin(s)*e,Math.cos(s)*Math.cos(n)*e)}updateSurface(t){const e=this.surfacePose;this.tmp.copy(e.position);const n=1-Math.exp(-t*10);this.camera.position.lerp(this.tmp,n);const s=Gc.setFromEuler(Wc.set(e.pitch,e.yaw,0,"YXZ"));this.camera.quaternion.slerp(s,n),En(this.fov,Ur.SURFACE_WALK,t,.6),this.camera.fov=this.fov.value,this.camera.updateProjectionMatrix()}updateCraft(t){const e=this.surfacePose,n=1-Math.exp(-t*5);this.camera.position.lerp(e.position,n);const s=Gc.setFromEuler(Wc.set(e.pitch,e.yaw,this.roll.value,"YXZ"));this.camera.quaternion.slerp(s,n),En(this.fov,Ur.SPACECRAFT_FLIGHT,t,.8),this.camera.fov=this.fov.value,this.camera.updateProjectionMatrix()}updateIntro(t){const e=pe.clamp(this.introProgress,0,1),n=e*e*(3-2*e),s=pe.lerp(26,240,n),r=pe.lerp(-.65,Math.PI*.35,n),a=pe.lerp(.06,.34,n);this.distance.value=s,this.azimuth.value=r,this.elevation.value=a,this.targetDistance=s,this.targetAzimuth=r,this.targetElevation=a,this.applySpherical(1),this.camera.position.y+=Math.sin(e*Math.PI)*14,this.lookSmooth.lerp(fv.set(0,0,0),1-Math.exp(-t*4)),this.camera.lookAt(this.lookSmooth),En(this.fov,pe.lerp(48,55,n),t,.9),this.camera.fov=this.fov.value,this.camera.updateProjectionMatrix()}resetSystemView(){this.request("SYSTEM"),this.targetAzimuth=Math.PI*.35,this.targetElevation=.32,this.targetDistance=240,this.distance.value=240,this.azimuth.value=Math.PI*.35,this.elevation.value=.32,this.pan.value.set(0,0,0),this.lookSmooth.set(0,0,0)}}const Gc=new Ri,Wc=new pn,fv=new w,pv={SYSTEM_SPACE:{near:.1,far:2e4},ORBIT_LOCAL_SPACE:{near:.01,far:500},SURFACE_PATCH_SPACE:{near:.1,far:5e4}};class mv{mode="SYSTEM_SPACE";root=new he;focusWorld=new w;focusTarget=new w;focusSmooth=Yh();near=Vn(.1);far=Vn(2e4);targetNear=.1;targetFar=2e4;focusRadius=1;constructor(){this.root.name="SystemRoot"}setMode(t,e=1){this.mode=t,this.focusRadius=e;const n=pv[t];this.targetFar=n.far,this.targetNear=t==="ORBIT_LOCAL_SPACE"?Math.min(n.near,Math.max(e*.2,1e-4)):n.near}applyFocus(t){this.focusTarget.copy(t),this.focusWorld.copy(t)}update(t){$h(this.focusSmooth,this.focusTarget,t,.55),this.root.position.set(-this.focusSmooth.value.x,-this.focusSmooth.value.y,-this.focusSmooth.value.z)}updateCamera(t,e){En(this.near,this.targetNear,e,.45),En(this.far,this.targetFar,e,.6),t.near=Math.max(this.near.value,1e-5),t.far=Math.max(this.far.value,t.near*10),t.updateProjectionMatrix()}snap(){this.near.value=this.targetNear,this.near.velocity=0,this.far.value=this.targetFar,this.far.velocity=0,this.focusSmooth.value.copy(this.focusTarget),this.focusSmooth.velocity.set(0,0,0)}}const jr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ws{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const gv=new zh(-1,1,1,-1,0,1);class vv extends ee{constructor(){super(),this.setAttribute("position",new Xt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Xt([0,2,0,0,2,0],2))}}const _v=new vv;class _l{constructor(t){this._mesh=new at(_v,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,gv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Kh extends ws{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Me?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ps.clone(t.uniforms),this.material=new Me({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new _l(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Xc extends ws{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class xv extends ws{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Za{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new nt);this._width=n.width,this._height=n.height,e=new un(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Rn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Kh(jr),this.copyPass.material.blending=Xn,this.clock=new kh}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Xc!==void 0&&(a instanceof Xc?n=!0:a instanceof xv&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new nt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Ja extends ws{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new _t}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const yv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new _t(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class gs extends ws{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new nt(t.x,t.y):new nt(256,256),this.clearColor=new _t(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new un(r,a,{type:Rn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new un(r,a,{type:Rn});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new un(r,a,{type:Rn});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}const o=yv;this.highPassUniforms=ps.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Me({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new nt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ps.clone(jr.uniforms),this.blendMaterial=new Me({uniforms:this.copyUniforms,vertexShader:jr.vertexShader,fragmentShader:jr.fragmentShader,blending:we,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new _t,this._oldClearAlpha=1,this._basic=new Ve,this._fsQuad=new _l(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new nt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=gs.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=gs.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Me({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new nt(.5,.5)},direction:{value:new nt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(t){return new Me({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}gs.BlurDirectionX=new nt(1,0);gs.BlurDirectionY=new nt(0,1);const Nr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Mv extends ws{constructor(){super(),this.uniforms=ps.clone(Nr.uniforms),this.material=new pf({name:Nr.name,uniforms:this.uniforms,vertexShader:Nr.vertexShader,fragmentShader:Nr.fragmentShader}),this._fsQuad=new _l(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},qt.getTransfer(this._outputColorSpace)===ie&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===hh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===uh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===dh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Qo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ph?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===mh?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===fh&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Sv=1,Qa={uniforms:{baseTexture:{value:null},bloomTexture:{value:null},bloomStrength:{value:1}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D baseTexture;
    uniform sampler2D bloomTexture;
    uniform float bloomStrength;
    varying vec2 vUv;
    void main() {
      vec4 base = texture2D(baseTexture, vUv);
      vec4 bloom = texture2D(bloomTexture, vUv);
      gl_FragColor = base + bloom * bloomStrength;
    }
  `};class bv{constructor(t,e,n){this.renderer=t,this.scene=e,this.bloomLayer.set(Sv);const s=t.getSize(new nt),r=new un(s.x,s.y,{type:Rn,samples:4});this.composer=new Za(t,r),this.composer.addPass(new Ja(e,n)),this.bloomComposer=new Za(t),this.bloomComposer.renderToScreen=!1,this.bloomComposer.addPass(new Ja(e,n)),this.bloomPass=new gs(new nt(s.x,s.y),1,.62,.12),this.bloomComposer.addPass(this.bloomPass),this.finalComposer=new Za(t),this.finalComposer.addPass(new Ja(e,n)),this.finalPass=new Kh(new Me({uniforms:ps.clone(Qa.uniforms),vertexShader:Qa.vertexShader,fragmentShader:Qa.fragmentShader,defines:{}}),"baseTexture"),this.finalPass.needsSwap=!0,this.finalComposer.addPass(this.finalPass),this.finalComposer.addPass(new Mv),this.finalPass.material.uniforms.bloomTexture.value=this.bloomComposer.renderTarget2.texture}composer;bloomComposer;finalComposer;bloomPass;finalPass;darkMaterial=new Ve({color:0});materialsCache=new Map;bloomLayer=new hl;enabled=!0;setBloomStrength(t){this.bloomPass.strength=t,this.finalPass.material.uniforms.bloomStrength.value=this.enabled?1:0}setEnabled(t){this.enabled=t}setSize(t,e){this.composer.setSize(t,e),this.bloomComposer.setSize(t,e),this.finalComposer.setSize(t,e),this.bloomPass.resolution.set(t,e)}darkenNonBloomed(t){t.isMesh&&!this.bloomLayer.test(t.layers)&&(this.materialsCache.set(t.uuid,t.material),t.material=this.darkMaterial)}restoreMaterial(t){const e=this.materialsCache.get(t.uuid);e&&(t.material=e,this.materialsCache.delete(t.uuid))}render(){if(!this.enabled){this.finalPass.material.uniforms.bloomStrength.value=0,this.finalComposer.render();return}const t=this.scene.background;this.scene.traverse(s=>this.darkenNonBloomed(s)),this.scene.background=null;const e=this.renderer.getClearColor(new _t),n=this.renderer.getClearAlpha();this.renderer.setClearColor(0,0),this.bloomComposer.render(),this.renderer.setClearColor(e,n),this.scene.background=t,this.scene.traverse(s=>this.restoreMaterial(s)),this.finalPass.material.uniforms.bloomStrength.value=1,this.finalComposer.render()}}const qc={low:{preset:"low",maxDpr:1,bloom:!1,bloomStrength:.7,stars:1200,cloudShadows:!1,ringMicro:!1,terrainRocks:120,terrainSegs:48,planetSegs:32,atmosLayers:!1,shadows:!1},medium:{preset:"medium",maxDpr:1.5,bloom:!0,bloomStrength:.85,stars:2600,cloudShadows:!0,ringMicro:!1,terrainRocks:350,terrainSegs:72,planetSegs:64,atmosLayers:!0,shadows:!1},high:{preset:"high",maxDpr:2,bloom:!0,bloomStrength:1,stars:4200,cloudShadows:!0,ringMicro:!0,terrainRocks:700,terrainSegs:112,planetSegs:96,atmosLayers:!0,shadows:!1},ultra:{preset:"ultra",maxDpr:2,bloom:!0,bloomStrength:1.15,stars:6500,cloudShadows:!0,ringMicro:!0,terrainRocks:1400,terrainSegs:160,planetSegs:128,atmosLayers:!0,shadows:!0}};class Ev{settings={...qc.high};listeners=[];setPreset(t){this.settings={...qc[t]},this.listeners.forEach(e=>e(this.settings))}onChange(t){this.listeners.push(t)}resolveDpr(t){return Math.min(t,this.settings.maxDpr)}applyRenderer(t){t.setPixelRatio(this.resolveDpr(window.devicePixelRatio||1))}}class wv{ctx=null;master=null;nodes=[];playing=!1;timer=null;get isPlaying(){return this.playing}async toggle(){return this.playing?this.stop():await this.start(),this.playing}async start(){if(this.playing)return;const t=window.AudioContext??window.webkitAudioContext;this.ctx=new t,await this.ctx.resume(),this.master=this.ctx.createGain(),this.master.gain.value=0,this.master.connect(this.ctx.destination),this.master.gain.linearRampToValueAtTime(.11,this.ctx.currentTime+3);for(const[o,l]of[[46,.5],[69,.22],[92,.14],[138,.07]]){const c=this.ctx.createOscillator();c.type="sine",c.frequency.value=o;const h=this.ctx.createGain();h.gain.value=l;const u=this.ctx.createOscillator();u.frequency.value=.03+Math.random()*.07;const d=this.ctx.createGain();d.gain.value=l*.45,u.connect(d).connect(h.gain),c.connect(h).connect(this.master),c.start(),u.start(),this.nodes.push(c,u,h,d)}const e=this.ctx.createBuffer(1,this.ctx.sampleRate*2,this.ctx.sampleRate),n=e.getChannelData(0);for(let o=0;o<n.length;o++)n[o]=Math.random()*2-1;const s=this.ctx.createBufferSource();s.buffer=e,s.loop=!0;const r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.value=240,r.Q.value=.6;const a=this.ctx.createGain();a.gain.value=.05,s.connect(r).connect(a).connect(this.master),s.start(),this.nodes.push(s,r,a),this.timer=window.setInterval(()=>{if(!this.ctx||!this.master||!this.playing||Math.random()>.55)return;const o=this.ctx.createOscillator();o.type="sine";const l=320+Math.random()*720;o.frequency.value=l,o.frequency.exponentialRampToValueAtTime(l*.55,this.ctx.currentTime+1.6);const c=this.ctx.createGain();c.gain.value=0,c.gain.linearRampToValueAtTime(.028,this.ctx.currentTime+.4),c.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+2.2),o.connect(c).connect(this.master),o.start(),o.stop(this.ctx.currentTime+2.3)},4200),this.playing=!0}stop(){if(this.playing){if(this.playing=!1,this.timer!==null&&window.clearInterval(this.timer),this.timer=null,this.master&&this.ctx){this.master.gain.linearRampToValueAtTime(1e-4,this.ctx.currentTime+1.1);const t=this.ctx,e=this.nodes;window.setTimeout(()=>{for(const n of e){const s=n;try{s.stop?.()}catch{}n.disconnect()}t.close()},1300)}this.nodes=[],this.ctx=null,this.master=null}}}const ua=1495978707e-1,Tv=6371,Ts=[{id:"sun",name:"Солнце",kind:"star",radiusKm:696340,massKg:19885e26,gravity:274,rotationHours:609.12,axialTiltDeg:7.25,parent:null,eccentricity:0,periodDays:0,inclinationDeg:0,meanTempC:5505,atmosphere:"Водород (73%), гелий (25%), кислород, углерод, железо",breathable:!1,dayLengthHours:609.12,color:"#ffb347",texture:"sun",hasMagnetosphere:!0,museumRadius:18,facts:["В Солнце помещается 1 300 000 планет размером с Землю.","Свет доходит от Солнца до Земли за 8 минут 20 секунд.","В ядре температура 15 000 000 °C — там водород превращается в гелий.","Солнцу около 4,6 миллиарда лет, ему хватит топлива ещё на 5 миллиардов."],tags:["Звезда","Термоядерный синтез","Живое Солнце"]},{id:"mercury",name:"Меркурий",kind:"planet",radiusKm:2439.7,massKg:3301e20,gravity:3.7,rotationHours:1407.6,axialTiltDeg:.03,parent:"sun",aAU:.387,eccentricity:.2056,periodDays:87.97,inclinationDeg:7,meanTempC:167,atmosphere:"Практически нет (экзосфера: кислород, натрий, водород)",breathable:!1,dayLengthHours:4222.6,color:"#a7a29c",texture:"mercury",landable:!0,museumRadius:1.35,facts:["Сутки на Меркурии длятся дольше, чем год: 176 земных суток против 88!","Днём +430 °C, ночью −180 °C — самый большой перепад температур.","Поверхность изрыта кратерами как наша Луна.","На полюсах Меркурия есть лёд в кратерах, куда никогда не заглядывает Солнце."],tags:["Кратеры","Лёд на полюсах","Посадка возможна"]},{id:"venus",name:"Венера",kind:"planet",radiusKm:6051.8,massKg:4867e21,gravity:8.87,rotationHours:5832.5,axialTiltDeg:177.4,parent:"sun",aAU:.723,eccentricity:.0068,periodDays:224.7,inclinationDeg:3.4,meanTempC:464,atmosphere:"Углекислый газ (96,5%), азот, облака серной кислоты",breathable:!1,dayLengthHours:2802,color:"#e8c46b",texture:"venus",hasClouds:!0,hasAtmosphere:!0,cloudSpeed:2.5,landable:!0,museumRadius:2.55,facts:["Самая горячая планета: +464 °C, хотя Меркурий ближе к Солнцу.","Давление как на глубине 900 метров в океане — 92 атмосферы.","Венера вращается «вверх ногами» и медленнее всех: сутки длиннее года.","В облаках Венеры, на высоте 50 км, температура почти как на Земле — там ищут жизнь."],tags:["Парниковый эффект","Серные облака","Облака — кандидат на жизнь"]},{id:"earth",name:"Земля",kind:"planet",radiusKm:6371,massKg:5972e21,gravity:9.81,rotationHours:23.93,axialTiltDeg:23.44,parent:"sun",aAU:1,eccentricity:.0167,periodDays:365.25,inclinationDeg:0,meanTempC:15,atmosphere:"Азот (78%), кислород (21%), аргон, углекислый газ",breathable:!0,dayLengthHours:24,color:"#4f9ee8",texture:"earth",hasClouds:!0,hasAtmosphere:!0,hasCityLights:!0,hasMagnetosphere:!0,museumRadius:2.8,facts:["Единственная известная планета, где есть жидкая вода и жизнь.","Магнитное поле Земли защищает нас от солнечной радиации — это щит жизни.","Луна помогает Земле: держит наклон оси и вызывает приливы.","8 минут 20 секунд — столько летит до нас солнечный свет. Мы видим Солнце в прошлом!"],tags:["Жизнь","Жидкая вода","Кислород","Магнитосфера"]},{id:"moon",name:"Луна",kind:"moon",radiusKm:1737.4,massKg:7342e19,gravity:1.62,rotationHours:655.7,axialTiltDeg:6.7,parent:"earth",aKm:384400,eccentricity:.0549,periodDays:27.32,inclinationDeg:5.145,meanTempC:-20,atmosphere:"Практически нет (экзосфера)",breathable:!1,dayLengthHours:708.7,color:"#c9c5bb",texture:"moon",landable:!0,museumRadius:.95,facts:["На Луне ты прыгнешь в 6 раз выше, чем на Земле: вес всего в 6 раз меньше!","Аполлон-11: 20 июля 1969 года первые люди ступили на Луну.","Следы астронавтов сохранятся миллионы лет — на Луне нет ветра и дождя.","Луна удаляется от Земли на 3,8 см каждый год — как растут ногти."],tags:["1/6 g","Аполлон-11","Посадка возможна"]},{id:"mars",name:"Марс",kind:"planet",radiusKm:3389.5,massKg:6417e20,gravity:3.71,rotationHours:24.62,axialTiltDeg:25.19,parent:"sun",aAU:1.524,eccentricity:.0934,periodDays:686.98,inclinationDeg:1.85,meanTempC:-63,atmosphere:"Углекислый газ (95%), азот, аргон — давление 0,6% земного",breathable:!1,dayLengthHours:24.66,color:"#c1440e",texture:"mars",hasClouds:!0,hasAtmosphere:!0,landable:!0,museumRadius:1.85,facts:["На Марсе есть гора Олимп — в 3 раза выше Эвереста!","Закаты на Марсе голубые — пыль рассеивает свет наоборот, чем на Земле.","Марсоход Perseverance ищет следы древней жизни в кратере Езеро.","Радиосигнал от Земли до Марса летит от 3 до 22 минут — поэтому ровером нельзя управлять джойстиком."],tags:["Красная планета","Голубой закат","Ищем жизнь","Марсоходы"]},{id:"phobos",name:"Фобос",kind:"moon",radiusKm:11.27,massKg:106e14,gravity:.0057,rotationHours:7.65,axialTiltDeg:0,parent:"mars",aKm:9376,eccentricity:.0151,periodDays:.319,inclinationDeg:1.08,meanTempC:-40,atmosphere:"Нет",breathable:!1,dayLengthHours:7.65,color:"#7a7269",texture:"rock",museumRadius:.28,facts:["Фобос вращается так близко к Марсу, что падает на него на 2 см в год."],tags:["Астероид-спутник"]},{id:"deimos",name:"Деймос",kind:"moon",radiusKm:6.2,massKg:148e13,gravity:.003,rotationHours:30.3,axialTiltDeg:0,parent:"mars",aKm:23463,eccentricity:2e-4,periodDays:1.263,inclinationDeg:1.79,meanTempC:-40,atmosphere:"Нет",breathable:!1,dayLengthHours:30.3,color:"#8a8078",texture:"rock",museumRadius:.2,facts:["Деймос — крошечный спутник размером с город."],tags:["Астероид-спутник"]},{id:"jupiter",name:"Юпитер",kind:"planet",radiusKm:69911,massKg:1898e24,gravity:24.79,rotationHours:9.93,axialTiltDeg:3.13,parent:"sun",aAU:5.203,eccentricity:.0484,periodDays:4332.6,inclinationDeg:1.3,meanTempC:-110,atmosphere:"Водород (89%), гелий (10%) — газовый гигант",breathable:!1,dayLengthHours:9.93,color:"#d8b48a",texture:"jupiter",hasClouds:!0,hasAtmosphere:!0,hasMagnetosphere:!0,cloudSpeed:1.6,museumRadius:9.6,facts:["Юпитер — самая большая планета: в нём 1300 Земель.","Большое Красное Пятно — гигантский ураган, который бушует уже 350 лет.","У Юпитера 95 известных лун! Самые интересные — Ио, Европа, Ганимед, Каллисто.","Юпитер — щит Солнечной системы: он притягивает опасные кометы."],tags:["Газовый гигант","Большое Красное Пятно","Магнитосфера","95 лун"]},{id:"io",name:"Ио",kind:"moon",radiusKm:1821.6,massKg:893e20,gravity:1.8,rotationHours:42.46,axialTiltDeg:0,parent:"jupiter",aKm:421700,eccentricity:.0041,periodDays:1.769,inclinationDeg:.05,meanTempC:-130,atmosphere:"Диоксид серы (SO₂)",breathable:!1,dayLengthHours:42.46,color:"#e8d268",texture:"io",museumRadius:.75,facts:["Ио — самое вулканически активное тело в Солнечной системе.","Приливы от Юпитера выжимают Ио, как мяч, — и недра плавятся.","Вулканы Ио выбрасывают серу на сотни километров вверх."],tags:["Вулканы","Лава","Экзосфера SO₂"]},{id:"europa",name:"Европа",kind:"moon",radiusKm:1560.8,massKg:48e21,gravity:1.31,rotationHours:85.2,axialTiltDeg:.1,parent:"jupiter",aKm:671100,eccentricity:.009,periodDays:3.551,inclinationDeg:.47,meanTempC:-160,atmosphere:"Кислород (разреженный)",breathable:!1,dayLengthHours:85.2,color:"#d8cfc0",texture:"europa",landable:!0,museumRadius:.7,facts:["Под ледяной корой Европы скрыт океан — в нём больше воды, чем во всех земных океанах!","Трещины на льду — следы приливов от Юпитера.","Европа — главный кандидат на поиск внеземной жизни."],tags:["Подлёдный океан","Жизнь?","Лёд"]},{id:"ganymede",name:"Ганимед",kind:"moon",radiusKm:2634.1,massKg:148e21,gravity:1.43,rotationHours:171.7,axialTiltDeg:.3,parent:"jupiter",aKm:1070400,eccentricity:.0013,periodDays:7.155,inclinationDeg:.2,meanTempC:-163,atmosphere:"Кислород (разреженный)",breathable:!1,dayLengthHours:171.7,color:"#b0a494",texture:"rock",museumRadius:1.1,facts:["Ганимед — самый большой спутник Солнечной системы, больше Меркурия!","Единственный спутник со своим магнитным полем.","Под льдом Ганимеда тоже может быть океан."],tags:["Крупнейший спутник","Магнитосфера"]},{id:"callisto",name:"Каллисто",kind:"moon",radiusKm:2410.3,massKg:108e21,gravity:1.24,rotationHours:400.5,axialTiltDeg:0,parent:"jupiter",aKm:1882700,eccentricity:.0074,periodDays:16.69,inclinationDeg:.19,meanTempC:-139,atmosphere:"Углекислый газ (разреженный)",breathable:!1,dayLengthHours:400.5,color:"#8c8478",texture:"rock",museumRadius:1,facts:["Каллисто — древнейшая поверхность Солнечной системы: 4 миллиарда лет без изменений."],tags:["Древние кратеры"]},{id:"saturn",name:"Сатурн",kind:"planet",radiusKm:58232,massKg:5683e23,gravity:10.44,rotationHours:10.66,axialTiltDeg:26.73,parent:"sun",aAU:9.537,eccentricity:.0539,periodDays:10759,inclinationDeg:2.49,meanTempC:-140,atmosphere:"Водород (96%), гелий — газовый гигант",breathable:!1,dayLengthHours:10.66,color:"#e3d1a0",texture:"saturn",hasClouds:!0,hasAtmosphere:!0,hasRings:!0,hasMagnetosphere:!0,cloudSpeed:1.9,museumRadius:8.3,facts:["Кольца Сатурна состоят из миллиардов кусочков льда — от песчинки до дома.","Плотность Сатурна меньше воды: он бы плавал в огромной ванне!","На северном полюсе Сатурна — шестиугольный шторм размером с две Земли.","У Сатурна 274 известных спутника."],tags:["Кольца","Газовый гигант","Гексагон","274 луны"]},{id:"enceladus",name:"Энцелад",kind:"moon",radiusKm:252.1,massKg:108e18,gravity:.113,rotationHours:32.9,axialTiltDeg:0,parent:"saturn",aKm:237948,eccentricity:.0047,periodDays:1.37,inclinationDeg:.019,meanTempC:-201,atmosphere:"Водяной пар, водород (гейзеры)",breathable:!1,dayLengthHours:32.9,color:"#f2f5f8",texture:"enceladus",landable:!0,museumRadius:.42,facts:["Энцелад выбрасывает гейзеры воды в космос — они питают кольцо E Сатурна.","Подо льдом прячется тёплый океан с гидротермальными источниками.","Кассини «пролетел» сквозь гейзеры и нашёл органику!"],tags:["Гейзеры","Подлёдный океан","Жизнь?"]},{id:"titan",name:"Титан",kind:"moon",radiusKm:2574.7,massKg:1345e20,gravity:1.35,rotationHours:382.7,axialTiltDeg:0,parent:"saturn",aKm:1221870,eccentricity:.0288,periodDays:15.95,inclinationDeg:.35,meanTempC:-179,atmosphere:"Азот (95%), метан — давление 1,5 атмосферы",breathable:!1,dayLengthHours:382.7,color:"#e8a04c",texture:"titan",hasClouds:!0,hasAtmosphere:!0,landable:!0,museumRadius:1.15,facts:["Титан — единственное тело, кроме Земли, с реками, озёрами и морями (из жидкого метана!).","Плотная атмосфера и слабая гравитация: на Титане можно «взмахнуть крыльями и полететь».","Зонд «Гюйгенс» сел на Титан в 2005 году и прислал фотографии берега."],tags:["Метановые озёра","Плотная атмосфера","Полёты вручную","Жизнь?"]},{id:"uranus",name:"Уран",kind:"planet",radiusKm:25362,massKg:8681e22,gravity:8.87,rotationHours:17.24,axialTiltDeg:97.77,parent:"sun",aAU:19.191,eccentricity:.0472,periodDays:30687,inclinationDeg:.77,meanTempC:-195,atmosphere:"Водород, гелий, метан (льдяной гигант)",breathable:!1,dayLengthHours:17.24,color:"#9fe0e8",texture:"uranus",hasAtmosphere:!0,hasRings:!0,museumRadius:5.2,facts:["Уран лежит на боку: наклон оси 98° — он «катится» по орбите.","Из-за наклона на полюсах Урана 42 года длится день, потом 42 года — ночь.","В атмосфере Урана и Нептуна идут «алмазные дожди»."],tags:["Ледяной гигант","Лежит на боку","Алмазный дождь"]},{id:"neptune",name:"Нептун",kind:"planet",radiusKm:24622,massKg:1024e23,gravity:11.15,rotationHours:16.11,axialTiltDeg:28.32,parent:"sun",aAU:30.07,eccentricity:.0086,periodDays:60190,inclinationDeg:1.77,meanTempC:-200,atmosphere:"Водород, гелий, метан (льдяной гигант)",breathable:!1,dayLengthHours:16.11,color:"#4b70dd",texture:"neptune",hasClouds:!0,hasAtmosphere:!0,hasMagnetosphere:!0,museumRadius:5,facts:["На Нептуне самые сильные ветры Солнечной системы: до 2100 км/ч.","Нептун открыт «на кончике пера» — математики посчитали, где его искать.","Солнечному свету нужно 4 часа 10 минут, чтобы долететь до Нептуна."],tags:["Ледяной гигант","Суперветры","Дальний край"]},{id:"triton",name:"Тритон",kind:"moon",radiusKm:1353.4,massKg:214e20,gravity:.779,rotationHours:141,axialTiltDeg:0,parent:"neptune",aKm:354759,eccentricity:16e-6,periodDays:5.877,inclinationDeg:157,meanTempC:-235,atmosphere:"Азот, метан (разреженный)",breathable:!1,dayLengthHours:141,color:"#c8b8d8",texture:"ice",museumRadius:.72,facts:["Тритон вращается «наоборот» — значит, его поймал Нептун, а не родился рядом.","На Тритоне −235 °C — самое холодное место в Солнечной системе.","Вояджер-2 видел на Тритоне азотные гейзеры высотой 8 км."],tags:["Ретроградная орбита","Гейзеры","Холод"]}],He=Object.fromEntries(Ts.map(i=>[i.id,i])),Av=Ts.filter(i=>i.landable).map(i=>i.id);function sn(i){const t=He[i];if(!t)throw new Error(`Неизвестное тело: ${i}`);return t}const jh={id:"museum",label:"Наглядный музейный",kmPerUnit:2e4,radiusUnits:i=>i.kind==="star"?18:i.museumRadius,orbitUnits:i=>{const t=i.aAU??1;return 46*Math.pow(t,.62)},moonOrbitUnits:i=>{const t=i.parent?He[i.parent]:null;return(t?jh.radiusUnits(t):10)*(2.2+.35*Math.log10((i.aKm??1e5)/1e4))}},Cv={id:"real",label:"Реальные пропорции",kmPerUnit:2e6,radiusUnits:i=>i.radiusKm/2e6,orbitUnits:i=>(i.aAU??1)*ua/2e6,moonOrbitUnits:i=>(i.aKm??1e5)/2e6};function Zh(i){return i==="real"?Cv:jh}function $s(i){return i.getTime()/864e5+24405875e-1}function Jh(i){return new Date((i-24405875e-1)*864e5)}const Rv={mercury:{a:[.38709927,37e-8],e:[.20563593,1906e-8],I:[7.00497902,-.00594749],L:[252.2503235,149472.67411175],peri:[77.45779628,.16047689],node:[48.33076593,-.12534081]},venus:{a:[.72333566,39e-7],e:[.00677672,-4107e-8],I:[3.39467605,-7889e-7],L:[181.9790995,58517.81538729],peri:[131.60246718,.00268329],node:[76.67984255,-.27769418]},earth:{a:[1.00000261,562e-8],e:[.01671123,-4392e-8],I:[-1531e-8,-.01294668],L:[100.46457166,35999.37244981],peri:[102.93768193,.32327364],node:[0,0]},mars:{a:[1.52371034,1847e-8],e:[.0933941,7882e-8],I:[1.84969142,-.00813131],L:[-4.55343205,19140.30268499],peri:[-23.94362959,.44441088],node:[49.55953891,-.29257343]},jupiter:{a:[5.202887,-11607e-8],e:[.04838624,-13253e-8],I:[1.30439695,-.00183714],L:[34.39644051,3034.74612775],peri:[14.72847983,.21252668],node:[100.47390909,.20469106]},saturn:{a:[9.53667594,-.0012506],e:[.05386179,-50991e-8],I:[2.48599187,.00193609],L:[49.95424423,1222.49362201],peri:[92.59887831,-.41897216],node:[113.66242448,-.28867794]},uranus:{a:[19.18916464,-.00196176],e:[.04725744,-4397e-8],I:[.77263783,-.00242939],L:[313.23810451,428.48202785],peri:[170.9542763,.40805281],node:[74.01692503,.04240589]},neptune:{a:[30.06992276,26291e-8],e:[.00859048,5105e-8],I:[1.77004347,35372e-8],L:[-55.12002969,218.45945325],peri:[44.96476227,-.32241464],node:[131.78422574,-.00508664]}},Ne=Math.PI/180;function xl(i,t){let e=i*Ne+t*Math.sin(i*Ne);for(let n=0;n<12;n++){const r=(i*Ne-(e-t*Math.sin(e)))/(1-t*Math.cos(e));if(e+=r,Math.abs(r)<1e-9)break}return e}function yl(i){return(i%360+360)%360}function Qh(i,t,e=new w){const n=Rv[i];if(!n)return e.set(0,0,0);const s=(t-2451545)/36525,r=n.a[0]+n.a[1]*s,a=n.e[0]+n.e[1]*s,o=(n.I[0]+n.I[1]*s)*Ne,l=n.L[0]+n.L[1]*s,c=n.peri[0]+n.peri[1]*s,h=(n.node[0]+n.node[1]*s)*Ne,u=xl(yl(l-c),a),d=c*Ne-h,p=r*(Math.cos(u)-a),g=r*Math.sqrt(1-a*a)*Math.sin(u),v=Math.cos(d),m=Math.sin(d),f=Math.cos(h),M=Math.sin(h),S=Math.cos(o),_=Math.sin(o);return e.x=(v*f-m*M*S)*p+(-m*f-v*M*S)*g,e.y=(v*M+m*f*S)*p+(-m*M+v*f*S)*g,e.z=m*_*p+v*_*g,e}function Pv(i,t=new w){const e=i-24515435e-1,n=125.1228-.0529538083*e,s=5.1454,r=318.0634+.1643573223*e,a=60.2666,o=.0549,l=115.3654+13.0649929509*e,c=282.9404+470935e-10*e,h=356.047+.9856002585*e,u=h+c,p=n+r+l-u,g=1.2739*Math.sin((2*p-l)*Ne),v=.6583*Math.sin(2*p*Ne),m=-.1858*Math.sin(h*Ne),f=l+g+v+m,M=xl(yl(f),o),S=a*(Math.cos(M)-o),_=a*Math.sqrt(1-o*o)*Math.sin(M),R=Math.atan2(_,S)/Ne,T=Math.sqrt(S*S+_*_),A=T*Math.cos((R+r)*Ne),P=T*Math.sin((R+r)*Ne),b=n*Ne,y=s*Ne,D=A*Math.cos(b)-P*Math.sin(b)*Math.cos(y),O=A*Math.sin(b)+P*Math.cos(b)*Math.cos(y),F=P*Math.sin(y),V=Tv;return t.set(D*V,O*V,F*V)}const Fr=new w,Or=new w;function vs(i,t,e=new w){if(i.id==="sun")return e.set(0,0,0);if(i.parent==="earth"&&i.id==="moon")return vs(He.earth,t,Fr),Pv(t,Or),e.copy(Fr).add(Or);if(i.parent&&i.parent!=="sun"){const n=He[i.parent];return vs(n,t,Fr),Dv(i,t,Or),e.copy(Fr).add(Or)}return Qh(i.id,t,e),e.multiplyScalar(ua)}function Dv(i,t,e){const n=i.aKm??1e5,s=i.eccentricity,r=i.inclinationDeg*Ne,a=Math.max(i.periodDays,.05),o=Yc(i.id)%360,l=(t/a*360+o)*Ne,c=xl(yl(l/Ne),s),h=n*(Math.cos(c)-s),u=n*Math.sqrt(1-s*s)*Math.sin(c),d=Yc(i.id+"n")%360*Ne,p=Math.cos(d),g=Math.sin(d),v=Math.cos(r),m=Math.sin(r);return e.x=p*h-g*v*u,e.y=g*h+p*v*u,e.z=m*u,e}function Yc(i){let t=0;for(let e=0;e<i.length;e++)t=t*31+i.charCodeAt(e)|0;return Math.abs(t)}const $c=[{id:"apollo11",label:"20 июля 1969 — высадка Аполлона-11",date:"1969-07-20T20:17:00Z"},{id:"voyager1",label:"5 сентября 1977 — старт Вояджера-1",date:"1977-09-05T12:56:00Z"},{id:"perseverance",label:"18 февраля 2021 — посадка Perseverance",date:"2021-02-18T20:55:00Z"},{id:"eclipse2026",label:"12 августа 2026 — солнечное затмение",date:"2026-08-12T17:46:00Z"},{id:"eclipse2027",label:"2 августа 2027 — полное затмение",date:"2027-08-02T10:07:00Z"},{id:"eclipse2028",label:"22 июля 2028 — затмение в Австралии",date:"2028-07-22T02:56:00Z"}];function tu(i){const t=$c.filter(e=>e.id.startsWith("eclipse")&&new Date(e.date)>i);return t.length>0?t[0]:$c.find(e=>e.id==="eclipse2028")}function Iv(i,t,e){const n=vs(He[i],e,new w),s=vs(He[t],e,new w);return n.distanceTo(s)}const eu=299792.458;function Br(i,t,e){return Iv(i,t,e)/eu}const nu=`
  float hash(vec3 p) {
    p = fract(p * 0.3183099 + 0.1);
    p *= 17.0;
    return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
  }
  float noise3(vec3 x) {
    vec3 i = floor(x);
    vec3 f = fract(x);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(mix(hash(i + vec3(0, 0, 0)), hash(i + vec3(1, 0, 0)), f.x),
          mix(hash(i + vec3(0, 1, 0)), hash(i + vec3(1, 1, 0)), f.x), f.y),
      mix(mix(hash(i + vec3(0, 0, 1)), hash(i + vec3(1, 0, 1)), f.x),
          mix(hash(i + vec3(0, 1, 1)), hash(i + vec3(1, 1, 1)), f.x), f.y),
      f.z);
  }
  float fbm3(vec3 p) {
    float s = 0.0, a = 0.5;
    for (int i = 0; i < 5; i++) {
      s += a * noise3(p);
      p = p * 2.02 + vec3(1.7);
      a *= 0.5;
    }
    return s;
  }
`,Lv=`
  varying vec3 vNormalV;
  varying vec3 vNormalW;
  varying vec3 vPosO;
  varying vec3 vPosW;
  void main() {
    vPosO = position;
    vNormalV = normalize(normalMatrix * normal);
    vNormalW = normalize(mat3(modelMatrix) * normal);
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vPosW = wp.xyz;
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`,Uv=`
  uniform float time;
  uniform float modeMix; // 0 = видимый свет, 1 = УФ SDO
  varying vec3 vNormalV;
  varying vec3 vNormalW;
  varying vec3 vPosO;
  varying vec3 vPosW;

  ${nu}

  void main() {
    vec3 dir = normalize(vPosO);

    // Кипящая грануляция фотосферы (ячейки конвекции)
    float gran = fbm3(dir * 9.0 + vec3(time * 0.035, time * 0.021, 0.0));
    float cells = fbm3(dir * 22.0 - vec3(0.0, time * 0.05, time * 0.018));
    float bub = smoothstep(0.32, 0.78, gran * 0.65 + cells * 0.45);

    // Солнечные пятна (магнитные области, темнее и холоднее)
    float spotNoise = fbm3(dir * 3.1 + vec3(time * 0.008, 0.0, 0.0));
    float equatorMask = 1.0 - smoothstep(0.18, 0.55, abs(dir.y));
    float spot = smoothstep(0.62, 0.72, spotNoise) * equatorMask;

    // Лимбовое потемнение: mu = cos угла к лучу зрения
    float mu = clamp(dot(normalize(vNormalV), normalize(vNormalV)), 0.0, 1.0);
    vec3 viewDir = normalize(cameraPosition - vPosW);
    mu = clamp(dot(normalize(vNormalW), viewDir), 0.0, 1.0);
    float limb = mix(0.42, 1.0, pow(mu, 0.45));

    // «Кинематографический» видимый свет
    vec3 hot = vec3(1.0, 0.86, 0.62);
    vec3 cool = vec3(1.0, 0.52, 0.16);
    vec3 visibleCol = mix(cool, hot, bub) * 2.6;
    visibleCol = mix(visibleCol, vec3(0.36, 0.12, 0.03) * 1.6, spot * 0.92);
    visibleCol *= limb;

    // «Научный УФ-фильтр» (как SDO): магнитная плазма, петли, волокна
    float fil = fbm3(dir * 6.5 + vec3(0.0, time * 0.012, 0.0));
    float ridge = 1.0 - abs(fil * 2.0 - 1.0);
    ridge = pow(ridge, 3.2);
    float loops = fbm3(dir * 3.4 + vec3(time * 0.006));
    vec3 sdoCol = mix(vec3(0.16, 0.02, 0.14), vec3(0.95, 0.32, 0.12), ridge);
    sdoCol += vec3(1.0, 0.72, 0.28) * pow(smoothstep(0.45, 0.9, loops), 2.0) * 1.2;
    sdoCol *= mix(0.55, 1.0, limb);

    vec3 col = mix(visibleCol, sdoCol, modeMix);
    gl_FragColor = vec4(col, 1.0);
  }
`,Nv=`
  varying vec3 vNormalW;
  varying vec3 vPosW;
  void main() {
    vNormalW = normalize(mat3(modelMatrix) * normal);
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vPosW = wp.xyz;
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`,Fv=`
  uniform vec3 color;
  uniform float time;
  uniform float modeMix;
  varying vec3 vNormalW;
  varying vec3 vPosW;
  ${nu}
  void main() {
    vec3 viewDir = normalize(cameraPosition - vPosW);
    float fres = pow(1.0 - abs(dot(normalize(vNormalW), viewDir)), 3.0);
    float wisp = fbm3(normalize(vPosW) * 7.0 + vec3(time * 0.02));
    float a = fres * (0.55 + wisp * 0.75);
    vec3 c = mix(color, vec3(0.62, 0.22, 0.72), modeMix * 0.75);
    gl_FragColor = vec4(c * a * 1.4, a);
  }
`;class Ov{group=new he;light;surface;surfaceMat;coronaInner;coronaMat;sprites=[];prominences=new he;promMats=[];flare=new Kr(.18,1.1);modeMix=Vn(0);time=0;radius;mode="visible";constructor(t){this.radius=t,this.group.name="Sun",this.surfaceMat=new Me({vertexShader:Lv,fragmentShader:Uv,uniforms:{time:{value:0},modeMix:{value:0}}}),this.surface=new at(new Te(t,96,64),this.surfaceMat),this.surface.layers.enable(1),this.group.add(this.surface),this.coronaMat=new Me({vertexShader:Nv,fragmentShader:Fv,uniforms:{color:{value:new _t(16756838)},time:{value:0},modeMix:{value:0}},transparent:!0,blending:we,depthWrite:!1,side:Fe}),this.coronaInner=new at(new Te(t*1.22,64,48),this.coronaMat),this.coronaInner.layers.enable(1),this.group.add(this.coronaInner);for(const[e,n,s]of[[2.6,.42,"#ff9a3c"],[5.2,.2,"#ff7a28"],[9.5,.1,"#ff6a20"]]){const r=new Ss(new Ii({map:Bv(),color:new _t(s),transparent:!0,opacity:n,blending:we,depthWrite:!1}));r.scale.setScalar(t*e),r.layers.enable(1),this.sprites.push(r),this.group.add(r)}this.buildProminences(),this.group.add(this.prominences),this.light=new Mf(16773853,2.6,0,0),this.group.add(this.light)}buildProminences(){const t=this.radius;for(let e=0;e<6;e++){const n=e/6*Math.PI*2+.4,s=.35+Math.random()*.5,r=.16+Math.random()*.16,a=new w(Math.cos(n),(Math.random()-.5)*.7,Math.sin(n)).multiplyScalar(t*.985),o=new w(Math.cos(n+s),(Math.random()-.5)*.7,Math.sin(n+s)).multiplyScalar(t*.985),l=a.clone().add(o).multiplyScalar(.5).normalize().multiplyScalar(t*(1+r)),c=new ml(a,l,o),h=new gl(c,48,t*.012,8,!1),u=new Me({uniforms:{time:{value:0},phase:{value:Math.random()*10},color:{value:new _t(16738850)}},vertexShader:`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          uniform float time;
          uniform float phase;
          uniform vec3 color;
          varying vec2 vUv;
          void main() {
            float flow = sin(vUv.x * 18.0 - time * 1.7 + phase) * 0.5 + 0.5;
            float edge = sin(vUv.y * 3.14159);
            float a = (0.22 + flow * 0.5) * edge;
            gl_FragColor = vec4(color * (1.4 + flow) * a, a);
          }
        `,transparent:!0,blending:we,depthWrite:!1}),d=new at(h,u);d.layers.enable(1),this.promMats.push(u),this.prominences.add(d)}}setViewMode(t){this.mode=t}triggerFlare(){this.flare.trigger()}get flareEnergy(){return this.flare.value}update(t){this.time+=t;const e=this.mode==="sdo"?1:0;En(this.modeMix,e,t,.7),this.surface.rotation.y+=t*.012,this.prominences.rotation.y+=t*.012,this.surfaceMat.uniforms.time.value=this.time,this.surfaceMat.uniforms.modeMix.value=this.modeMix.value,this.coronaMat.uniforms.time.value=this.time,this.coronaMat.uniforms.modeMix.value=this.modeMix.value;for(const r of this.promMats)r.uniforms.time.value=this.time;const n=this.flare.update(t),s=1+Math.sin(this.time*.32)*.018+n*.28;this.coronaInner.scale.setScalar(s);for(let r=0;r<this.sprites.length;r++){const a=[2.6,5.2,9.5][r];this.sprites[r].scale.setScalar(this.radius*a*(1+n*.35));const o=[.42,.2,.1][r],l=this.sprites[r].material;l.opacity=o*(1+n*1.1)*(1-this.modeMix.value*.35)}this.light.intensity=2.6*(1+n*.4)}}function Bv(){const[t]=[document.createElement("canvas"),document.createElement("canvas").getContext("2d")];t.width=256,t.height=256;const e=t.getContext("2d"),n=e.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);n.addColorStop(0,"rgba(255, 240, 210, 1)"),n.addColorStop(.18,"rgba(255, 190, 110, 0.55)"),n.addColorStop(.45,"rgba(255, 130, 45, 0.18)"),n.addColorStop(1,"rgba(255, 90, 20, 0)"),e.fillStyle=n,e.fillRect(0,0,256,256);const s=new hi(t);return s.colorSpace=ke,s}function An(i,t,e){let n=i*374761393+t*668265263+e*1442695041|0;return n=n^n>>>13|0,n=Math.imul(n,1274126177),((n^n>>>16)>>>0)/4294967295}function iu(i,t,e,n){const s=Math.floor(i),r=Math.floor(t),a=i-s,o=t-r,l=a*a*(3-2*a),c=o*o*(3-2*o),h=(s%n+n)%n,u=(h+1)%n,d=An(h,r,e),p=An(u,r,e),g=An(h,r+1,e),v=An(u,r+1,e);return d+(p-d)*l+(g-d)*c+(d-p-g+v)*l*c}function Ht(i,t,e,n,s=5){let r=.5,a=1,o=0,l=0;for(let c=0;c<s;c++)o+=r*iu(i*a,t*a,e+c*17,Math.round(n*a)),l+=r,r*=.5,a*=2;return o/l}function ra(i,t,e,n,s=4){let r=.5,a=1,o=0;for(let l=0;l<s;l++){const c=iu(i*a,t*a,e+l*31,Math.round(n*a));o+=r*(1-Math.abs(c*2-1)),r*=.5,a*=2}return o}function ts(i,t){const e=document.createElement("canvas");e.width=i,e.height=t;const n=e.getContext("2d");return[e,n]}function es(i,t){const e=new hi(i);return e.wrapS=Jr,e.wrapT=si,e.colorSpace=t?ke:Hn,e.anisotropy=4,e}function Ln(i){const{width:t,height:e}=i,n=i.seed??7,[s,r]=ts(t,e),a=r.createImageData(t,e),o=a.data;for(let v=0;v<e;v++){const m=v/e;for(let f=0;f<t;f++){const M=f/t;i.paint(M,m,o,(v*t+f)*4)}}r.putImageData(a,0,0),i.post&&i.post(r,t,e);const l=new Float32Array(t*e);if(i.heightFn)for(let v=0;v<e;v++){const m=v/e;for(let f=0;f<t;f++)l[v*t+f]=i.heightFn(f/t,m)}else for(let v=0;v<t*e;v++)l[v]=.5;let c=null,h=null;{const[v,m]=ts(t,e),f=m.createImageData(t,e);for(let T=0;T<t*e;T++){const A=l[T];f.data[T*4]=f.data[T*4+1]=f.data[T*4+2]=A*255,f.data[T*4+3]=255}m.putImageData(f,0,0),h=es(v,!1);const[M,S]=ts(t,e),_=S.createImageData(t,e),R=i.normalStrength??2.2;for(let T=0;T<e;T++)for(let A=0;A<t;A++){const P=l[T*t+(A-1+t)%t],b=l[T*t+(A+1)%t],y=l[Math.max(0,T-1)*t+A],D=l[Math.min(e-1,T+1)*t+A];let O=(P-b)*R*32,F=(y-D)*R*32;const V=1,Y=Math.hypot(O,F,V);O/=Y,F/=Y;const W=(T*t+A)*4;_.data[W]=(O*.5+.5)*255,_.data[W+1]=(F*.5+.5)*255,_.data[W+2]=(V*.5+.5)*255,_.data[W+3]=255}S.putImageData(_,0,0),c=es(M,!1)}let u=null;if(i.roughFn){const[v,m]=ts(t,e),f=m.createImageData(t,e);for(let M=0;M<e;M++){const S=M/e;for(let _=0;_<t;_++){const R=_/t,T=i.roughFn(R,S,l[M*t+_]),A=(M*t+_)*4;f.data[A]=f.data[A+1]=f.data[A+2]=T*255,f.data[A+3]=255}}m.putImageData(f,0,0),u=es(v,!1)}let d=null;if(i.emissiveFn){const[v,m]=ts(t,e),f=m.createImageData(t,e);for(let M=0;M<e;M++){const S=M/e;for(let _=0;_<t;_++){const R=_/t,T=i.emissiveFn(R,S,l[M*t+_]),A=(M*t+_)*4;T&&(f.data[A]=T[0],f.data[A+1]=T[1],f.data[A+2]=T[2]),f.data[A+3]=255}}m.putImageData(f,0,0),d=es(v,!0)}let p=null,g=null;if(i.clouds){const[v,m]=ts(t,e),f=m.createImageData(t,e),M=i.clouds==="haze";for(let S=0;S<e;S++){const _=S/e;for(let R=0;R<t;R++){const T=R/t,A=Math.abs(_-.5)*2,P=Ht(T*6+3,_*6,n+90,6,4),b=Ht(T*7+P*1.6,_*10+P,n+41,7,5);let y=M?Math.pow(b,1.2)*.85:Math.max(0,b-(M?.3:.46-A*.12))*2.4;y=Math.min(1,Math.max(0,y));const D=(S*t+R)*4,O=M?235:255;f.data[D]=O,f.data[D+1]=M?180:250,f.data[D+2]=M?120:255,f.data[D+3]=y*255}}m.putImageData(f,0,0),p=es(v,!0),g=p}return{map:es(s,!0),normalMap:c,roughnessMap:u,emissiveMap:d,displacementMap:h,cloudMap:p,cloudAlphaMap:g}}function Zr(i,t,e){return i+(t-i)*e}function te(i,t,e){return[Zr(i[0],t[0],e),Zr(i[1],t[1],e),Zr(i[2],t[2],e)]}const Kc=new Map;function zv(i,t=!0){const e=`${i}_${t?"hi":"lo"}`,n=Kc.get(e);if(n)return n;const s=t?i==="rock"?640:1024:512,r=s/2,a=kv(i,s,r);return Kc.set(e,a),a}function kv(i,t,e){switch(i){case"mercury":case"moon":case"rock":return jc(i,t,e);case"mars":return Hv(t,e);case"earth":return Vv(t,e);case"venus":return Gv(t,e);case"jupiter":return zr("jupiter",t,e);case"saturn":return zr("saturn",t,e);case"uranus":return zr("uranus",t,e);case"neptune":return zr("neptune",t,e);case"io":return Wv(t,e);case"europa":return Xv(t,e);case"enceladus":return qv(t,e);case"titan":return Yv(t,e);case"ice":return $v(t,e);default:return jc("rock",t,e)}}function jc(i,t,e){const n=i==="moon"?[168,164,156]:i==="mercury"?[150,145,138]:[122,112,100],s=i==="moon"?[92,90,86]:[78,74,68],r=i==="moon"?11:i==="mercury"?23:37,a=[];for(let l=0;l<220;l++)a.push({u:An(l*7,3,r),v:.06+An(l*13,91,r)*.88,r:.004+Math.pow(An(l*17,5,r),2.4)*.06});const o=new Float32Array(t*e);for(let l=0;l<e;l++){const c=l/e;for(let h=0;h<t;h++){const u=h/t;o[l*t+h]=Ht(u*16,c*16,r+3,16,5)*.55+Ht(u*48,c*48,r,48,3)*.25+.1}}for(const l of a){const c=l.r*t*1.35,h=l.u*t,u=l.v*e,d=Math.max(0,Math.floor(h-c)),p=Math.min(t-1,Math.ceil(h+c)),g=Math.max(0,Math.floor(u-c*.5)),v=Math.min(e-1,Math.ceil(u+c*.5));for(let m=g;m<=v;m++){const f=m/e;for(let M=d;M<=p;M++){const S=M/t,_=Math.min(Math.abs(S-l.u),1-Math.abs(S-l.u)),R=(f-l.v)*.5,T=Math.sqrt(_*_+R*R);if(T<l.r*1.3){const A=T/l.r;o[m*t+M]+=A<.85?-.22*(1-A*A):.18*(1-Math.abs(A-.92)/.2)}}}}return Ln({width:t,height:e,seed:r,normalStrength:3,paint:(l,c,h,u)=>{const d=Ht(l*14,c*14,r,14,5),p=Ht(l*40,c*40,r+5,40,3),g=ce(.42,.62,d),v=te(n,s,g*.75+p*.25);h[u]=v[0],h[u+1]=v[1],h[u+2]=v[2],h[u+3]=255},heightFn:(l,c)=>{const h=Math.min(t-1,Math.max(0,Math.round(l*t))),u=Math.min(e-1,Math.max(0,Math.round(c*e)));return Math.min(1,Math.max(0,o[u*t+h]))},roughFn:()=>.92,post:l=>{for(const c of a){const h=c.u*t,u=c.v*e,d=c.r*t;l.save(),l.translate(h,u),l.scale(1,.5);const p=l.createRadialGradient(0,0,d*.72,0,0,d*1.12);p.addColorStop(0,"rgba(0,0,0,0)"),p.addColorStop(.62,"rgba(255,255,255,0.16)"),p.addColorStop(1,"rgba(0,0,0,0)"),l.fillStyle=p,l.fillRect(-d*1.2,-d*1.2,d*2.4,d*2.4);const g=l.createRadialGradient(0,0,0,0,0,d*.82);g.addColorStop(0,"rgba(0,0,0,0.3)"),g.addColorStop(.75,"rgba(0,0,0,0.16)"),g.addColorStop(1,"rgba(0,0,0,0)"),l.fillStyle=g,l.fillRect(-d,-d,d*2,d*2),l.restore()}}})}function Hv(i,t){const n=[193,108,62],s=[110,58,38],r=[222,158,110];return Ln({width:i,height:t,seed:51,normalStrength:2.6,clouds:!0,paint:(a,o,l,c)=>{const h=Ht(a*8,o*8,51,8,5),u=Ht(a*3.5+10,o*5,60,4,4);let d=te(n,s,ce(.35,.7,u));d=te(d,r,ce(.55,.85,h)*.55);const p=Math.abs(o-.5)*2,g=ce(.82,.93,p+h*.06);d=te(d,[235,238,242],g);const v=Ht(a*2.2+4,o*3.2,72,3,3);v>.6&&o>.25&&o<.72&&(d=te(d,[82,48,36],ce(.6,.75,v))),l[c]=d[0],l[c+1]=d[1],l[c+2]=d[2],l[c+3]=255},heightFn:(a,o)=>{let l=Ht(a*7,o*7,53,7,5);const c=Math.min(Math.abs(a-.32),1-Math.abs(a-.32)),h=o-.32,u=Math.sqrt(c*c+h*h);return u<.09&&(l+=(1-u/.09)*.9),o>.55&&o<.62&&a>.1&&a<.55&&(l-=.22),Math.min(1,Math.max(0,l))},roughFn:(a,o)=>.88-Math.abs(o-.5)*.1})}function Vv(i,t){return Ln({width:i,height:t,seed:77,normalStrength:2,clouds:!0,paint:(n,s,r,a)=>{const o=(s-.5)*2,l=Ht(n*5.2,s*5.2,77,6,6),c=Ht(n*18,s*18,81,18,4),h=ce(.52,.58,l+c*.12-Math.abs(o)*.1),u=ce(.2,.55,l+c*.1);let d=te([12,42,96],[28,92,168],u);const p=ce(.45,.75,Ht(n*9+20,s*9,85,9,4));let m=te([46,110,52],[168,148,92],p*.75+c*.25);m=te(m,[122,108,92],ce(.62,.85,c+l*.3)*.7),d=te(d,m,h);const f=ce(.78,.9,Math.abs(o)+c*.1);d=te(d,[236,242,248],f),r[a]=d[0],r[a+1]=d[1],r[a+2]=d[2],r[a+3]=255},heightFn:(n,s)=>{const r=(s-.5)*2,a=Ht(n*5.2,s*5.2,77,6,6),o=Ht(n*18,s*18,81,18,4);return .32+ce(.52,.58,a+o*.12-Math.abs(r)*.1)*(.35+o*.45)},roughFn:(n,s)=>{const r=(s-.5)*2,a=Ht(n*5.2,s*5.2,77,6,6),o=ce(.52,.58,a-Math.abs(r)*.1);return Zr(.18,.9,o)},emissiveFn:(n,s)=>{const r=(s-.5)*2,a=Ht(n*5.2,s*5.2,77,6,6);if(ce(.52,.58,a-Math.abs(r)*.1)<.4)return null;const l=Ht(n*60,s*60,176,60,2),c=1-ce(.55,.85,Math.abs(r));return l>.72&&c>.25&&An(Math.floor(n*400),Math.floor(s*400),5)>.35?[255,196,96]:null}})}function Gv(i,t){return Ln({width:i,height:t,seed:88,normalStrength:.7,clouds:"haze",paint:(n,s,r,a)=>{const o=Ht(n*4,s*7,88,4,4),l=Ht(n*9+o*2.2,s*13+o*1.2,90,9,5),c=Math.abs(s-.5)*2;let h=te([214,168,84],[242,214,140],l);h=te(h,[186,132,62],ce(.4,.8,c+l*.2)*.45),r[a]=h[0],r[a+1]=h[1],r[a+2]=h[2],r[a+3]=255},heightFn:(n,s)=>Ht(n*6,s*6,94,6,5)*.7+.15,roughFn:()=>.85})}function zr(i,t,e){const n={jupiter:[[196,152,118],[238,218,190],[170,110,82],[252,240,222]],saturn:[[222,196,138],[245,230,188],[200,168,112],[250,240,210]],uranus:[[158,216,220],[188,232,234],[130,196,206],[210,240,242]],neptune:[[62,92,210],[92,122,226],[42,62,160],[120,150,238]]},s=i==="jupiter"?101:i==="saturn"?202:i==="uranus"?303:404,r=n[i],a=i==="jupiter"?14:i==="saturn"?11:7,o=i==="jupiter"?1:i==="saturn"?.6:.25;return Ln({width:t,height:e,seed:s,normalStrength:.35,paint:(l,c,h,u)=>{const d=(Ht(l*3,c*6,s,3,4)-.5)*o,g=Math.sin((c+d*.08)*Math.PI*a+Ht(l*5,c*10,s+3,5,3)*2.4)*.5+.5,v=g>.66?1:g>.33?0:2;let m=te(r[v],r[3],ce(.75,.95,g)*.7);m=te(m,r[2],ce(.25,.05,g)*.6);const f=Ht(l*8+50,c*16,s+11,8,4);if(f>.72&&(m=te(m,r[2],(f-.72)*1.6)),i==="jupiter"){const M=Math.min(Math.abs(l-.68),1-Math.abs(l-.68)),S=(c-.62)*2.1,_=Math.sqrt(M*M*2.4+S*S);if(_<.085){const R=.5+.5*Math.sin(Math.atan2(S,M*1.6)*3+_*90);m=te([188,86,48],[218,118,72],R*ce(.085,0,_))}}if(i==="saturn"){const M=l-.5,S=c-.085,_=Math.atan2(S,M*2),R=Math.sqrt(M*M*4+S*S),T=.052*(1+.12*Math.cos(_*6));if(R<T*1.25){const A=Math.abs(R-T)<.006?1:0;m=te(m,[210,170,110],A*.8+ce(T*1.15,T*.4,R)*.25)}}if(i==="neptune"){const M=Math.min(Math.abs(l-.35),1-Math.abs(l-.35)),S=(c-.42)*2,_=Math.sqrt(M*M*3+S*S);_<.07&&(m=te(m,[22,32,96],ce(.07,0,_)*.75))}h[u]=m[0],h[u+1]=m[1],h[u+2]=m[2],h[u+3]=255},heightFn:(l,c)=>{const h=(Ht(l*3,c*6,s,3,4)-.5)*o;return .5+Math.sin((c+h*.08)*Math.PI*a)*.12},roughFn:()=>i==="uranus"||i==="neptune"?.72:.8})}function Wv(i,t){return Ln({width:i,height:t,seed:611,normalStrength:1.8,paint:(n,s,r,a)=>{const o=Ht(n*10,s*10,611,10,5);let l=te([226,202,96],[188,148,52],o);const c=Ht(n*16+3,s*16,615,16,3);c>.68&&(l=te(l,[42,28,22],ce(.68,.85,c)));for(let h=0;h<14;h++){const u=An(h*31,17,611),d=.1+An(h*47,29,611)*.8,p=Math.min(Math.abs(n-u),1-Math.abs(n-u)),g=(s-d)*.5,v=Math.sqrt(p*p+g*g);v<.035&&(l=te(l,[232,82,32],ce(.035,.012,v)*.85))}r[a]=l[0],r[a+1]=l[1],r[a+2]=l[2],r[a+3]=255},heightFn:(n,s)=>Ht(n*12,s*12,613,12,5)*.8+.1,roughFn:()=>.88,emissiveFn:(n,s)=>Ht(n*16+3,s*16,615,16,3)>.72?[255,110,40]:null})}function Xv(i,t){return Ln({width:i,height:t,seed:622,normalStrength:1.2,paint:(n,s,r,a)=>{const o=Ht(n*6,s*6,622,6,5);let l=te([214,198,172],[238,230,212],o);const c=ra(n*10+Ht(n*3,s*3,623,3,3)*4,s*3,624,10,3);c>.72&&(l=te(l,[156,108,84],ce(.72,.95,c)*.8));const h=ce(.8,.95,Math.abs(s-.5)*2);l=te(l,[246,246,248],h),r[a]=l[0],r[a+1]=l[1],r[a+2]=l[2],r[a+3]=255},heightFn:(n,s)=>.5+(ra(n*10,s*3,624,10,3)-.5)*.35+Ht(n*8,s*8,622,8,4)*.18,roughFn:()=>.55})}function qv(i,t){return Ln({width:i,height:t,seed:633,normalStrength:1.4,paint:(n,s,r,a)=>{const o=Ht(n*8,s*8,633,8,4);let l=te([228,236,244],[250,252,255],o);if(s>.72){const c=ra(n*14,(s-.72)*8,636,14,2);c>.62&&(l=te(l,[120,190,230],ce(.62,.9,c)))}r[a]=l[0],r[a+1]=l[1],r[a+2]=l[2],r[a+3]=255},heightFn:(n,s)=>{const r=Ht(n*9,s*9,633,9,4)*.5+.25,a=s>.72?ra(n*14,(s-.72)*8,636,14,2):0;return r-a*.28},roughFn:()=>.4})}function Yv(i,t){return Ln({width:i,height:t,seed:644,normalStrength:1.1,clouds:"haze",paint:(n,s,r,a)=>{const o=Ht(n*5,s*8,644,5,5);let l=te([196,118,42],[232,168,82],o);const c=Math.abs(s-.5)*2,h=ce(.72,.9,c+o*.15);l=te(l,[72,48,28],h*.85);const u=Math.sin(n*90+Ht(n*4,s*6,646,4,3)*8)*.5+.5;l=te(l,[162,96,38],u*.16),r[a]=l[0],r[a+1]=l[1],r[a+2]=l[2],r[a+3]=255},heightFn:(n,s)=>Ht(n*6,s*8,645,6,4)*.6+.2,roughFn:()=>.8})}function $v(i,t){return Ln({width:i,height:t,seed:655,normalStrength:1.5,paint:(n,s,r,a)=>{const o=Ht(n*7,s*7,655,7,5);let l=te([196,184,214],[232,228,242],o);const c=ce(.75,.92,Math.abs(s-.5)*2+o*.1);l=te(l,[242,244,250],c),r[a]=l[0],r[a+1]=l[1],r[a+2]=l[2],r[a+3]=255},heightFn:(n,s)=>Ht(n*9,s*9,655,9,5)*.7+.15,roughFn:()=>.5})}function ce(i,t,e){const n=Math.min(1,Math.max(0,(e-i)/(t-i||1e-6)));return n*n*(3-2*n)}const Kv=`
  varying vec3 vNormalW;
  varying vec3 vPosW;
  void main() {
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vPosW = wp.xyz;
    vNormalW = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`,jv=`
  uniform vec3 dayColor;
  uniform vec3 sunsetColor;
  uniform vec3 sunDirection;
  uniform vec3 cameraPosW;
  uniform float intensity;
  uniform float falloff;
  varying vec3 vNormalW;
  varying vec3 vPosW;

  void main() {
    vec3 n = normalize(vNormalW);
    vec3 viewDir = normalize(cameraPosW - vPosW);
    float fresnel = pow(1.0 - clamp(dot(n, viewDir), 0.0, 1.0), falloff);

    float sunDot = dot(n, normalize(sunDirection));
    // День → закат → ночь
    float day = smoothstep(-0.12, 0.42, sunDot);
    float sunsetBand = smoothstep(-0.28, 0.12, sunDot) * (1.0 - smoothstep(0.12, 0.55, sunDot));
    vec3 col = mix(sunsetColor, dayColor, day);
    col = mix(col, sunsetColor * 1.25, sunsetBand * 0.85);

    float nightFaint = 0.045;
    float alpha = fresnel * intensity * (day * 0.95 + nightFaint);
    // Свечение терминатора усиливаем
    alpha += fresnel * sunsetBand * intensity * 0.55;

    gl_FragColor = vec4(col * alpha, alpha);
  }
`;class Zv{mesh;material;sunDir=new w(1,0,0);constructor(t,e){const n=e.scale??1.045,s=new Te(t*n,64,48);this.material=new Me({vertexShader:Kv,fragmentShader:jv,uniforms:{dayColor:{value:new _t(e.dayColor)},sunsetColor:{value:new _t(e.sunsetColor)},sunDirection:{value:this.sunDir},cameraPosW:{value:new w},intensity:{value:e.intensity??1.35},falloff:{value:e.falloff??2.6}},transparent:!0,blending:we,depthWrite:!1,side:$n}),this.mesh=new at(s,this.material),this.mesh.renderOrder=10}update(t,e){this.sunDir.copy(t),this.material.uniforms.cameraPosW.value.copy(e)}setIntensity(t){this.material.uniforms.intensity.value=t}dispose(){this.mesh.geometry.dispose(),this.material.dispose()}}class Jv{mesh;material;time=0;constructor(t,e=4521881){const n=new Te(t*1.06,48,32,0,Math.PI*2,0,.62);this.material=new Me({uniforms:{time:{value:0},color:{value:new _t(e)},sunDirection:{value:new w(1,0,0)}},vertexShader:`
        varying vec3 vN;
        varying vec3 vP;
        void main() {
          vN = normalize(mat3(modelMatrix) * normal);
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vP = wp.xyz;
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,fragmentShader:`
        uniform float time;
        uniform vec3 color;
        uniform vec3 sunDirection;
        varying vec3 vN;
        varying vec3 vP;
        float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float noise(vec2 p){
          vec2 i = floor(p), f = fract(p);
          f = f * f * (3.0 - 2.0 * f);
          return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x),
                     mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
        }
        void main() {
          float n = noise(vN.xz * 6.0 + vec2(time * 0.22, time * 0.13));
          n += 0.5 * noise(vN.xz * 14.0 - vec2(time * 0.31, 0.0));
          float band = smoothstep(0.25, 0.85, n);
          // Сияние видно на ночной стороне
          float night = smoothstep(0.25, -0.15, dot(vN, normalize(sunDirection)));
          float edge = smoothstep(1.0, 0.55, length(vN.xz));
          float alpha = band * night * edge * 0.75;
          gl_FragColor = vec4(color * alpha * 1.6, alpha);
        }
      `,transparent:!0,blending:we,depthWrite:!1,side:ln}),this.mesh=new at(n,this.material),this.mesh.renderOrder=11;const s=new at(n,this.material);s.rotation.x=Math.PI,s.renderOrder=11,this.mesh.add(s)}update(t,e){this.time+=t,this.material.uniforms.time.value=this.time,this.material.uniforms.sunDirection.value.copy(e)}}function Qv(){return`
    uniform vec3 ringSunDir;
    uniform vec3 ringPlanetCenter;
    uniform vec3 ringNormal;
    uniform float ringInner;
    uniform float ringOuter;
    uniform float ringEnabled;

    float ringShadowAt(vec3 worldPos) {
      if (ringEnabled < 0.5) return 1.0;
      vec3 fromPlanet = worldPos - ringPlanetCenter;
      float denom = dot(ringSunDir, ringNormal);
      if (abs(denom) < 1e-5) return 1.0;
      float tHit = -dot(fromPlanet, ringNormal) / denom;
      if (tHit <= 0.0) return 1.0;
      vec3 hit = fromPlanet + ringSunDir * tHit;
      float rHit = length(hit - ringNormal * dot(hit, ringNormal));
      if (rHit < ringInner || rHit > ringOuter) return 1.0;
      float t = (rHit - ringInner) / (ringOuter - ringInner);
      float cassini = smoothstep(0.52, 0.58, t) * (1.0 - smoothstep(0.62, 0.68, t));
      float bands = 0.55 + 0.45 * sin(t * 90.0) * sin(t * 27.0 + 1.7);
      float cover = bands * (1.0 - cassini * 0.92);
      return 1.0 - cover * 0.78;
    }
  `}class su{mesh;material;inner;outer;constructor(t){this.inner=t.innerRadius,this.outer=t.outerRadius;const e=new ca(t.innerRadius,t.outerRadius,256,24);e.rotateX(-Math.PI/2),this.material=new Me({uniforms:{innerR:{value:t.innerRadius},outerR:{value:t.outerRadius},planetRadius:{value:t.planetRadius},color:{value:new _t(t.color??15259043)},opacity:{value:t.opacity??.95},sunDirW:{value:new w(1,0,0)},planetCenterW:{value:new w},time:{value:0}},vertexShader:`
        varying vec3 vLocal;
        varying vec3 vWorld;
        void main() {
          vLocal = position;
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorld = wp.xyz;
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,fragmentShader:`
        uniform float innerR;
        uniform float outerR;
        uniform float planetRadius;
        uniform vec3 color;
        uniform float opacity;
        uniform vec3 sunDirW;
        uniform vec3 planetCenterW;
        varying vec3 vLocal;
        varying vec3 vWorld;

        float hash1(float p) {
          return fract(sin(p * 127.1) * 43758.5453);
        }
        float noise1(float x) {
          float i = floor(x), f = fract(x);
          f = f * f * (3.0 - 2.0 * f);
          return mix(hash1(i), hash1(i + 1.0), f);
        }

        void main() {
          float r = length(vLocal.xz);
          float t = (r - innerR) / (outerR - innerR);
          if (t < 0.0 || t > 1.0) discard;

          // Микроструктура колец: сотни узких волокон
          float micro = noise1(t * 120.0) * 0.55 + noise1(t * 340.0) * 0.3 + noise1(t * 42.0) * 0.35;
          float bands = 0.42 + 0.58 * micro;

          // Щель Кассини и деление Энке
          float cassini = smoothstep(0.54, 0.585, t) * (1.0 - smoothstep(0.635, 0.68, t));
          float enke = smoothstep(0.895, 0.905, t) * (1.0 - smoothstep(0.915, 0.925, t));
          float alpha = bands * (1.0 - cassini * 0.94) * (1.0 - enke * 0.75);

          // Края: плавное затухание
          alpha *= smoothstep(0.0, 0.045, t) * (1.0 - smoothstep(0.86, 1.0, t) * 0.85);

          // Тень планеты на кольцах (честная)
          vec3 toPoint = vWorld - planetCenterW;
          float along = dot(toPoint, sunDirW);
          if (along > 0.0) {
            vec3 radial = toPoint - sunDirW * along;
            float dist = length(radial);
            if (dist < planetRadius) {
              float pen = smoothstep(planetRadius * 0.92, planetRadius * 1.06, dist);
              alpha *= mix(0.06, 1.0, pen);
            }
          }

          // Затемнение от Солнца (косой свет)
          float lit = 0.72 + 0.28 * abs(dot(normalize(vWorld - planetCenterW), sunDirW));

          vec3 col = color * lit * (0.72 + micro * 0.55);
          gl_FragColor = vec4(col, alpha * opacity);
        }
      `,transparent:!0,side:ln,depthWrite:!1}),this.mesh=new at(e,this.material),this.mesh.renderOrder=6,this.mesh.name="Rings"}update(t,e,n){this.material.uniforms.sunDirW.value.copy(t),this.material.uniforms.planetCenterW.value.copy(e),this.material.uniforms.time.value=n}ringNormalWorld(t=new w){return t.set(0,1,0).applyQuaternion(this.mesh.getWorldQuaternion(t_)).normalize()}get innerRadius(){return this.inner}get outerRadius(){return this.outer}dispose(){this.mesh.geometry.dispose(),this.material.dispose()}}const t_=new Ri;class e_{mesh;dummy=new Re;count;angles;radii;speeds;tilts;constructor(t,e){this.count=t;const n=new ms(1,0),s=new Kt({color:14214898,roughness:.72,metalness:.02,flatShading:!0});this.mesh=new Nh(n,s,t),this.mesh.instanceMatrix.setUsage(Qu),this.angles=new Float32Array(t),this.radii=new Float32Array(t),this.speeds=new Float32Array(t),this.tilts=new Float32Array(t);for(let r=0;r<t;r++){this.angles[r]=Math.random()*Math.PI*2,this.radii[r]=6+Math.random()*e,this.speeds[r]=(.08+Math.random()*.22)/Math.sqrt(this.radii[r]*.1),this.tilts[r]=(Math.random()-.5)*.16;const a=.12+Math.pow(Math.random(),2.2)*1.5;this.dummy.scale.setScalar(a),this.dummy.position.set(Math.cos(this.angles[r])*this.radii[r],this.tilts[r]*this.radii[r],Math.sin(this.angles[r])*this.radii[r]),this.dummy.rotation.set(Math.random()*3,Math.random()*3,Math.random()*3),this.dummy.updateMatrix(),this.mesh.setMatrixAt(r,this.dummy.matrix)}this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.visible=!1,this.mesh.frustumCulled=!1;for(const r of[e*.35,e*.75]){const a=new at(new ms(1.6,1),new Kt({color:12110040,roughness:.8,flatShading:!0}));a.position.set(r,0,0),a.userData.orbitR=r,a.userData.angle=Math.random()*Math.PI*2,a.userData.speed=.05/Math.sqrt(r*.1),this.mesh.add(a)}}update(t){if(this.mesh.visible){for(const e of this.mesh.children){const n=(e.userData.angle+e.userData.speed*t)%(Math.PI*2);e.userData.angle=n;const s=e.userData.orbitR;e.position.set(Math.cos(n)*s,0,Math.sin(n)*s),e.rotation.x+=t*.15}for(let e=0;e<this.count;e++)this.angles[e]+=this.speeds[e]*t,this.dummy.position.set(Math.cos(this.angles[e])*this.radii[e],this.tilts[e]*this.radii[e],Math.sin(this.angles[e])*this.radii[e]),this.dummy.rotation.x+=t*.12,this.dummy.rotation.z+=t*.08,this.dummy.scale.setScalar(.12+e*2654435761%1e3/1e3*1.5),this.dummy.updateMatrix(),this.mesh.setMatrixAt(e,this.dummy.matrix);this.mesh.instanceMatrix.needsUpdate=!0}}}const n_={earth:{day:5939967,sunset:16746564,intensity:1.45,scale:1.05},venus:{day:15251546,sunset:16742178,intensity:1.8,scale:1.08},mars:{day:14190698,sunset:6724095,intensity:1.1,scale:1.06},titan:{day:16752704,sunset:16737826,intensity:2.1,scale:1.13},jupiter:{day:14201994,sunset:16755302,intensity:.9,scale:1.04},saturn:{day:15259816,sunset:16764040,intensity:.85,scale:1.04},uranus:{day:10477800,sunset:8965358,intensity:.8,scale:1.05},neptune:{day:4944093,sunset:5605631,intensity:.85,scale:1.05},io:{day:14527044,sunset:16742178,intensity:.4,scale:1.02},europa:{day:13426943,sunset:16764074,intensity:.35,scale:1.02},enceladus:{day:13428991,sunset:11197951,intensity:.45,scale:1.03},moon:{day:8947848,sunset:8939093,intensity:.12,scale:1.01}};class i_{def;group=new he;tiltGroup=new he;spinGroup=new he;cloudGroup=new he;radius;lods=[];lodMats=[];clouds=null;cloudShadow=null;textures;atmosphere=null;aurora=null;rings=null;ringShadowUniforms={};spinBoost=1;spin=0;cloudSpin=0;tmpSunDir=new w;tmpCenter=new w;tmpNormal=new w;worldPos=new w;constructor(t,e){this.def=t,this.radius=e.radiusUnits,this.group.name=t.id,this.tiltGroup.rotation.z=pe.degToRad(t.axialTiltDeg),this.group.add(this.tiltGroup),this.tiltGroup.add(this.spinGroup),this.tiltGroup.add(this.cloudGroup),this.textures=zv(t.texture,t.radiusKm>1500);const n=[{seg:32,disp:!1},{seg:Math.max(48,e.qualitySegs),disp:!1},{seg:Math.max(96,e.qualitySegs*1.4),disp:!0}];for(let r=0;r<n.length;r++){const{seg:a,disp:o}=n[r],l=new Te(this.radius,Math.round(a),Math.round(a/2)),c=new Kt({map:this.textures.map,normalMap:this.textures.normalMap??void 0,normalScale:new nt(.85,.85),roughnessMap:this.textures.roughnessMap??void 0,roughness:1,metalness:0,emissive:t.hasCityLights||t.texture==="io"?16777215:0,emissiveMap:t.hasCityLights||t.texture==="io"?this.textures.emissiveMap??void 0:void 0,emissiveIntensity:t.texture==="io"?.35:.9,displacementMap:o?this.textures.displacementMap??void 0:void 0,displacementScale:o?this.radius*.012:0,displacementBias:o?-this.radius*.006:0});this.patchMaterial(c);const h=new at(l,c);h.visible=r===1,this.lods.push(h),this.lodMats.push(c),this.spinGroup.add(h)}if(t.hasClouds&&this.textures.cloudMap){const r=new Te(this.radius*1.012,64,48),a=new Kt({map:this.textures.cloudMap,transparent:!0,depthWrite:!1,opacity:t.texture==="titan"?.55:.88,roughness:1,metalness:0});if(this.clouds=new at(r,a),this.clouds.renderOrder=3,this.cloudGroup.add(this.clouds),e.cloudShadows){const o=new Te(this.radius*1.003,48,32),l=new Ve({map:this.textures.cloudMap,transparent:!0,blending:ro,depthWrite:!1,opacity:.4});this.cloudShadow=new at(o,l),this.cloudShadow.renderOrder=2,this.cloudGroup.add(this.cloudShadow)}}const s=n_[t.texture];if(t.hasAtmosphere&&s&&(this.atmosphere=new Zv(this.radius,{dayColor:s.day,sunsetColor:s.sunset,intensity:s.intensity,scale:s.scale,falloff:t.texture==="titan"?1.8:2.7}),this.group.add(this.atmosphere.mesh)),t.hasMagnetosphere&&(t.id==="earth"||t.id==="jupiter"||t.id==="saturn")){const r=t.id==="earth"?4063130:t.id==="jupiter"?16738047:6750156;this.aurora=new Jv(this.radius,r),this.tiltGroup.add(this.aurora.mesh)}if(e.withRings&&t.hasRings){const r=t.id==="saturn";this.rings=new su({innerRadius:r?this.radius*1.24:this.radius*1.52,outerRadius:r?this.radius*2.32:this.radius*2,planetRadius:this.radius,color:r?15259043:10139848,opacity:r?.96:.5}),this.tiltGroup.add(this.rings.mesh)}}patchMaterial(t){const e=this.def.hasRings,n=!!this.def.hasCityLights;t.onBeforeCompile=s=>{s.uniforms.ringSunDir={value:new w(1,0,0)},s.uniforms.ringPlanetCenter={value:new w},s.uniforms.ringNormal={value:new w(0,1,0)},s.uniforms.ringInner={value:0},s.uniforms.ringOuter={value:0},s.uniforms.ringEnabled={value:e?1:0},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWorldPosHP;`).replace("#include <fog_vertex>",`#include <fog_vertex>
vWorldPosHP = (modelMatrix * vec4(transformed, 1.0)).xyz;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWorldPosHP;
${Qv()}`).replace("#include <opaque_fragment>",`
          float ringSh = ringShadowAt(vWorldPosHP);
          outgoingLight *= ringSh;
          #include <opaque_fragment>
          `),n&&(s.fragmentShader=s.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
           {
             vec3 fromC = vWorldPosHP - ringPlanetCenter;
             float nightF = 1.0 - smoothstep(-0.12, 0.28, dot(normalize(fromC), ringSunDir));
             totalEmissiveRadiance *= nightF * 1.35;
           }`)),this.ringShadowUniforms=s.uniforms},t.customProgramCacheKey=()=>`planet_${this.def.id}`}setLOD(t){for(let e=0;e<this.lods.length;e++)this.lods[e].visible=e===t;this.clouds&&(this.clouds.visible=t>0),this.cloudShadow&&(this.cloudShadow.visible=t>0)}currentLOD=1;updateLOD(t){const e=this.group.getWorldPosition(s_).distanceTo(t)/this.radius;let n=this.currentLOD;this.currentLOD===1&&e<5.2?n=2:this.currentLOD===2&&e>6.4?n=1:this.currentLOD===1&&e>26?n=0:this.currentLOD===0&&e<22&&(n=1),n!==this.currentLOD&&(this.currentLOD=n,this.setLOD(n))}update(t,e,n,s){const r=Math.abs(this.def.rotationHours)||24,a=this.def.rotationHours<0?-1:1,o=Math.PI*2*a/(r*8)*this.spinBoost;if(this.spin+=o*t,this.spinGroup.rotation.y=this.spin,this.clouds){const l=this.def.cloudSpeed??1.12;this.cloudSpin+=o*l*t,this.cloudGroup.rotation.y=this.cloudSpin}if(this.group.getWorldPosition(this.worldPos),this.tmpSunDir.copy(e).sub(this.worldPos).normalize(),this.tmpCenter.copy(this.worldPos),this.ringShadowUniforms.ringSunDir){const l=this.ringShadowUniforms;l.ringSunDir.value.copy(this.tmpSunDir),l.ringPlanetCenter.value.copy(this.tmpCenter),this.rings?(this.rings.ringNormalWorld(this.tmpNormal),l.ringNormal.value.copy(this.tmpNormal),l.ringInner.value=this.rings.innerRadius,l.ringOuter.value=this.rings.outerRadius,l.ringEnabled.value=1):l.ringEnabled.value=0}this.atmosphere&&this.atmosphere.update(this.tmpSunDir,n),this.aurora&&this.aurora.update(t,this.tmpSunDir),this.rings&&this.rings.update(this.tmpSunDir,this.tmpCenter,s),this.updateLOD(n)}get worldPosition(){return this.worldPos}dispose(){for(const t of this.lods)t.geometry.dispose(),t.material.dispose();this.atmosphere?.dispose(),this.rings?.dispose()}}const s_=new w;class r_{group=new he;points=null;count;constructor(t=4200){this.count=t,this.build(),this.group.name="Starfield"}build(){const t=new Float32Array(this.count*3),e=new Float32Array(this.count*3),n=new Float32Array(this.count),s=new _t;for(let o=0;o<this.count;o++){const l=Math.random()*2-1,c=Math.random()*Math.PI*2,h=Math.sqrt(1-l*l),u=9e3;t[o*3]=h*Math.cos(c)*u,t[o*3+1]=l*u,t[o*3+2]=h*Math.sin(c)*u;const d=Math.random();d>.92?s.setHSL(.6,.7,.78):d>.7?s.setHSL(.12,.45,.86):d>.4?s.setHSL(.08,.35,.82):s.setHSL(.02,.25,.9),e[o*3]=s.r,e[o*3+1]=s.g,e[o*3+2]=s.b,n[o]=Math.random()<.06?3.4+Math.random()*2.4:1.1+Math.random()*1.6}const r=new ee;r.setAttribute("position",new ye(t,3)),r.setAttribute("color",new ye(e,3)),r.setAttribute("size",new ye(n,1));const a=new ri({size:2.2,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:.95,depthWrite:!1});this.points=new Ei(r,a),this.points.frustumCulled=!1,this.group.add(this.points),this.group.add(this.makeMilkyWay())}makeMilkyWay(){const t=new Te(9200,32,24),e=new Ve({map:a_(),side:Fe,transparent:!0,opacity:.42,depthWrite:!1}),n=new at(t,e);return n.rotation.z=.6,n}setStarCount(t){t!==this.count&&(this.count=t,this.points&&(this.group.remove(this.points),this.points.geometry.dispose(),this.points.material.dispose()),this.build())}follow(t){this.group.position.copy(t)}}function a_(){const e=document.createElement("canvas");e.width=512,e.height=256;const n=e.getContext("2d");n.fillStyle="#000",n.fillRect(0,0,512,256);for(let r=0;r<260;r++){const a=Math.random()*512,o=256*.5+(Math.random()-.5)*256*.24+Math.sin(a/512*Math.PI*2)*256*.06,l=24+Math.random()*80,c=n.createRadialGradient(a,o,0,a,o,l),h=.028+Math.random()*.05;c.addColorStop(0,`rgba(160, 180, 255, ${h})`),c.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=c,n.fillRect(a-l,o-l,l*2,l*2)}for(let r=0;r<60;r++){const a=Math.random()*512,o=256*.5+(Math.random()-.5)*256*.18,l=18+Math.random()*46,c=n.createRadialGradient(a,o,0,a,o,l);c.addColorStop(0,"rgba(0,0,0,0.16)"),c.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=c,n.fillRect(a-l,o-l,l*2,l*2)}const s=new hi(e);return s.colorSpace=ke,s}const o_=64,l_=14.2,c_=.035,Zc=3;function h_(i){switch(i.texture){case"sun":return[{name:"Термоядерное ядро",radiusFrac:.28,color:16773832,emissive:3.2,labelClass:"core"},{name:"Радиативная зона",radiusFrac:.55,color:16758886,emissive:1.4,labelClass:"mantle"},{name:"Конвективная зона",radiusFrac:.82,color:16747571,emissive:.9,labelClass:"mantle"},{name:"Фотосфера",radiusFrac:.985,color:16738842,emissive:.55,labelClass:""}];case"jupiter":case"saturn":return[{name:"Каменное ядро",radiusFrac:.18,color:13213818,emissive:.7,labelClass:"core"},{name:"Металлический водород",radiusFrac:.52,color:15251576,emissive:.5,labelClass:"mantle"},{name:"Молекулярный водород",radiusFrac:.86,color:14207144,emissive:.25,labelClass:""},{name:"Облачные слои",radiusFrac:.985,color:15259832,emissive:.12,labelClass:""}];case"uranus":case"neptune":return[{name:"Каменное ядро",radiusFrac:.22,color:9075354,emissive:.6,labelClass:"core"},{name:"Мантия: «алмазный дождь»",radiusFrac:.72,color:5929672,emissive:.55,labelClass:"mantle"},{name:"Ледяная мантия (метан, аммиак)",radiusFrac:.9,color:8046808,emissive:.25,labelClass:""},{name:"Атмосфера",radiusFrac:.985,color:10148072,emissive:.12,labelClass:""}];case"europa":case"enceladus":case"ice":return[{name:"Каменное ядро",radiusFrac:.3,color:10520696,emissive:.6,labelClass:"core"},{name:"Подледный океан",radiusFrac:.62,color:2785240,emissive:1.1,labelClass:"mantle"},{name:"Ледяная кора",radiusFrac:.985,color:14216440,emissive:.15,labelClass:""}];case"titan":return[{name:"Каменное ядро",radiusFrac:.32,color:9071178,emissive:.55,labelClass:"core"},{name:"Подповерхностный океан",radiusFrac:.6,color:2644152,emissive:1,labelClass:"mantle"},{name:"Ледяная кора",radiusFrac:.92,color:13154456,emissive:.15,labelClass:""},{name:"Азотно-метановая атмосфера",radiusFrac:.985,color:15245388,emissive:.1,labelClass:""}];case"earth":return[{name:"Внутреннее ядро",radiusFrac:.22,color:16771248,emissive:2.4,labelClass:"core"},{name:"Внешнее ядро — жидкое динамо",radiusFrac:.48,color:16750643,emissive:1.3,labelClass:"core"},{name:"Мантия",radiusFrac:.86,color:14178332,emissive:.55,labelClass:"mantle"},{name:"Кора",radiusFrac:.985,color:9073752,emissive:.12,labelClass:""}];case"venus":case"mars":case"mercury":case"moon":case"rock":case"io":default:return[{name:"Ядро",radiusFrac:.3,color:16763e3,emissive:1.2,labelClass:"core"},{name:"Мантия",radiusFrac:.78,color:14178852,emissive:.5,labelClass:"mantle"},{name:"Кора",radiusFrac:.985,color:10127480,emissive:.12,labelClass:""}]}}function u_(i){switch(i.texture){case"sun":return"В ядре Солнца при 15 000 000 °C водород сливается в гелий — это термоядерный синтез. Энергия миллионы лет пробивается сквозь радиативную и конвективную зоны, прежде чем улететь к нам как свет.";case"earth":return"Жидкое внешнее ядро из расплавленного железа вращается и создаёт магнитное поле — «динамо». Оно отклоняет солнечный ветер и защищает нашу атмосферу. Внутреннее ядро твёрдое, как сталь, хотя и горячее поверхности Солнца.";case"jupiter":case"saturn":return"Под облаками водород сжимается так, что становится металлическим — электропроводной жидкостью. Она и порождает гигантское магнитное поле. Твёрдой «поверхности» для посадки у газового гиганта нет.";case"uranus":case"neptune":return"В мантии ледяных гигантов вода, метан и аммиак под чудовищным давлением. Учёные считают, что там идут «алмазные дожди»: метан распадается, и углерод превращается в алмазы, падающие к ядру.";case"europa":case"enceladus":case"ice":return"Ледяная кора скрывает тёплый океан жидкой воды! Гейзеры выбивают его наружу — мы можем «попробовать» этот океан, не буря лёд. Одно из самых вероятных мест обитания жизни.";case"titan":return"Под ледяной корой Титана может скрываться океан воды с аммиаком, а сверху — метановые озёра. Жидкая среда есть, энергия есть, органика есть — три условия жизни!";case"mars":return"У Марса маленькое железное ядро и тонкая кора. Магнитное поле исчезло миллиарды лет назад — и солнечный ветер унёс большую часть атмосферы. Красная планета была тёплой и влажной!";case"moon":return"Ядро Луны маленькое и частично расплавленное. Мантия остыла — вулканов нет. Зато реголит хранит водяной лёд в полярных кратерах.";default:return`Разрез ${i.name}: ${i.atmosphere}. Внутри — ядро, мантия и кора, как у всех каменных планет.`}}class d_{group=new he;active=!1;bodyId=null;wedges=[];labels=[];shells=[];magnetLines=[];elapsed=0;hidden=[];constructor(){this.group.visible=!1,this.group.name="Cutaway"}toggle(t,e,n){return this.active&&this.bodyId===t.id?(this.close(),!1):(this.close(),this.build(t,e,n),this.active=!0,this.bodyId=t.id,this.group.visible=!0,!0)}build(t,e,n){this.elapsed=0,this.wedges=[],this.labels=[],this.shells=[],this.magnetLines=[],n.traverse(a=>{a.isMesh&&a.visible&&(this.hidden.push({obj:a,visible:a.visible}),a.visible=!1)}),n.add(this.group);const s=h_(t);for(let a=s.length-1;a>=0;a--){const o=s[a],l=new Te(e*o.radiusFrac,48,32),c=new Kt({color:o.color,emissive:new _t(o.emissive>1?o.color:16733440),emissiveIntensity:o.emissive,roughness:.72,metalness:o.name.includes("ядро")?.55:.08,transparent:o.radiusFrac>.95,opacity:o.radiusFrac>.95?.32:1}),h=new at(l,c);h.renderOrder=a,this.shells.push(h),this.group.add(h);const u=document.createElement("div");u.className=`label3d ${o.labelClass}`,u.textContent=o.name;const d=new qh(u),p=-.7+a*.45;d.position.set(Math.cos(p)*e*o.radiusFrac*1.12,e*(.22+a*.1),Math.sin(p)*e*o.radiusFrac*1.12),this.labels.push(d),this.group.add(d)}if(t.hasMagnetosphere){const a=new Ve({color:t.id==="earth"?5614335:13133567,transparent:!0,opacity:.38,blending:we,depthWrite:!1});for(let o=0;o<3;o++){const l=new at(new tr(e*(1.35+o*.28),e*.012,8,64),a);l.rotation.x=Math.PI/2+(o-1)*.5,l.rotation.y=o*.7,this.magnetLines.push(l),this.group.add(l)}}const r=Math.PI*2/Zc;for(let a=0;a<Zc;a++){const o=new Te(e*1.001,48,32,a*r,r*.985),l=new Kt({color:t.color,roughness:.85,metalness:.05,transparent:!0,opacity:.98}),c=new at(o,l);this.wedges.push({mesh:c,baseRotY:0,delay:a*c_,t:0,v:0,openSign:a===0?1:a===1?-1:1}),this.group.add(c)}}close(){if(this.bodyId)for(const t of this.hidden)t.obj.visible=t.visible;this.hidden=[],this.group.clear(),this.active=!1,this.bodyId=null,this.wedges=[],this.labels=[],this.shells=[],this.magnetLines=[],this.group.visible=!1}update(t){if(!this.active)return;this.elapsed+=t;for(const n of this.wedges){const r=this.elapsed-n.delay<0?0:1,a=2,o=Math.min(t,.05)/a;for(let h=0;h<a;h++){const u=o_*(r-n.t)-l_*n.v;n.v+=u*o,n.t+=n.v*o}const l=pe.clamp(n.t,-.15,1.1);n.mesh.rotation.y=n.baseRotY+l*n.openSign*.85;const c=l*n.openSign;n.mesh.position.set(c*this.groupScale()*.55,l*.18,c*.25)}const e=pe.smoothstep(this.elapsed,.12,.7);for(const n of this.shells){const s=n.material;s.transparent&&(s.opacity=.32*e+.06)}for(const n of this.magnetLines)n.rotation.z+=t*.25;for(const n of this.labels){const s=n.element;s.style.opacity=String(e)}}groupScale(){return this.shells.length===0?1:(this.shells[0].geometry.computeBoundingSphere(),this.shells[0].geometry.boundingSphere?.radius??1)}get currentBodyId(){return this.bodyId}}function Wt(i,t=0){return isFinite(i)?i.toLocaleString("ru-RU",{maximumFractionDigits:t,minimumFractionDigits:0}):"—"}function f_(i){const t=Math.floor(Math.log10(i));return`${(i/Math.pow(10,t)).toFixed(2)}·10^${t} кг`}function p_(i){const t=Math.abs(i);return t<48?`${Wt(t,1)} ч`:`${Wt(t/24,1)} сут`}function m_(i){return i<1?`${Wt(i*24,1)} ч`:i<900?`${Wt(i,1)} сут`:`${Wt(i/365.25,2)} года`}function g_(i,t){return i!==void 0?`${Wt(i,3)} а.е.`:t!==void 0?`${Wt(t,0)} км`:"—"}const v_={star:"Звезда",planet:"Планета",moon:"Спутник",dwarf:"Карликовая планета"};class __{handlers;toastTimer=null;speedLabel=document.getElementById("tl-speed-label");dateInput=document.getElementById("tl-date");speedInput=document.getElementById("tl-speed");playBtn=document.getElementById("tl-play");modePanel=document.getElementById("mode-panel");toastEl=document.getElementById("toast");playing=!0;constructor(t){this.handlers=t,this.wireStatic(),this.populateBodyList();const e=new Date;this.dateInput.value=e.toISOString().slice(0,10),this.setSpeedFromSlider()}showShell(){for(const t of["topbar","modes-bar","body-panel","timeline","cutaway-bar"])document.getElementById(t)?.classList.remove("hidden")}setLoadingProgress(t){const e=document.querySelector(".loading-fill");e&&(e.style.width=`${Math.round(t*100)}%`)}hideLoading(){const t=document.getElementById("loading");t&&(t.classList.add("fading"),window.setTimeout(()=>t.classList.add("hidden"),1300))}populateBodyList(){const t=document.getElementById("body-list");t.innerHTML="";for(const e of Ts){if(e.id==="phobos"||e.id==="deimos"||e.id==="callisto"||e.id==="ganymede")continue;const n=document.createElement("li");n.dataset.id=e.id;const s=document.createElement("span");s.className="dot",s.style.background=e.color,n.appendChild(s);const r=document.createElement("span");if(r.textContent=e.name,n.appendChild(r),e.kind==="moon"){const a=document.createElement("span");a.className="sub",a.textContent="спутник",n.appendChild(a)}n.addEventListener("click",()=>this.handlers.onSelectBody(e.id)),t.appendChild(n)}}selectBody(t){const e=document.getElementById("body-list");for(const n of Array.from(e.children))n.classList.toggle("active",n.dataset.id===t)}showInfo(t){const e=document.getElementById("info-card"),n=document.getElementById("info-content");e.classList.remove("hidden");const s=t.tags.map(r=>{const a=/нет|радиац|опасн/i.test(r),o=/жизнь|вода|кислород|дышать/i.test(r);return`<span class="info-tag ${a?"warn":o?"good":""}">${r}</span>`}).join("");n.innerHTML=`
      <h2>${t.name}</h2>
      <div class="info-type">${v_[t.kind]??t.kind}</div>
      <div class="info-grid">
        <div class="info-cell"><div class="k">Радиус</div><div class="v">${Wt(t.radiusKm)} км</div></div>
        <div class="info-cell"><div class="k">Масса</div><div class="v">${f_(t.massKg)}</div></div>
        <div class="info-cell"><div class="k">Сила тяжести</div><div class="v">${Wt(t.gravity,2)} м/с² (${Wt(t.gravity/9.81,2)} g)</div></div>
        <div class="info-cell"><div class="k">Сутки</div><div class="v">${p_(t.dayLengthHours)}</div></div>
        <div class="info-cell"><div class="k">Год</div><div class="v">${m_(t.periodDays)}</div></div>
        <div class="info-cell"><div class="k">Температура</div><div class="v">${Wt(t.meanTempC)} °C</div></div>
        <div class="info-cell"><div class="k">Орбита</div><div class="v">${g_(t.aAU,t.aKm)}</div></div>
        <div class="info-cell"><div class="k">Наклон оси</div><div class="v">${Wt(t.axialTiltDeg,1)}°</div></div>
      </div>
      <div class="info-cell"><div class="k">Атмосфера</div><div class="v">${t.atmosphere}</div></div>
      <div class="info-cell" style="margin-top:7px"><div class="k">Можно дышать?</div>
        <div class="v">${t.breathable?"✅ Да!":"❌ Нет"}</div></div>
      <div class="info-facts"><ul>${t.facts.map(r=>`<li>${r}</li>`).join("")}</ul></div>
      <div class="info-tags">${s}</div>
    `,document.getElementById("info-content").querySelectorAll(".info-facts ul").forEach(r=>{r.style.padding="0",r.style.margin="0"})}hideInfo(){document.getElementById("info-card")?.classList.add("hidden")}wireStatic(){document.getElementById("info-close")?.addEventListener("click",()=>this.hideInfo()),this.dateInput.addEventListener("change",()=>{const t=new Date(this.dateInput.value+"T12:00:00Z");isNaN(t.getTime())||this.handlers.onDateChange(t)}),this.speedInput.addEventListener("input",()=>this.setSpeedFromSlider()),this.playBtn.addEventListener("click",()=>{this.playing=!this.playing,this.playBtn.textContent=this.playing?"⏸ Пауза":"▶ Играть",this.handlers.onPlayPause()}),document.getElementById("tl-today")?.addEventListener("click",()=>{const t=new Date;this.setDate(t),this.handlers.onDateChange(t)}),document.getElementById("tl-back")?.addEventListener("click",()=>{this.speedInput.value=String(Math.max(-5,Number(this.speedInput.value)-1)),this.setSpeedFromSlider()}),document.getElementById("tl-fwd")?.addEventListener("click",()=>{this.speedInput.value=String(Math.min(5,Number(this.speedInput.value)+1)),this.setSpeedFromSlider()});for(const t of Array.from(document.querySelectorAll(".date-btn")))t.addEventListener("click",()=>{const e=t;e.dataset.birthday?this.handlers.onBirthday():e.dataset.date&&this.handlers.onDatePreset(e.dataset.date)});document.getElementById("quality-select")?.addEventListener("change",t=>{this.handlers.onQuality(t.target.value)}),document.getElementById("scale-select")?.addEventListener("change",t=>{this.handlers.onScale(t.target.value)}),document.getElementById("btn-sun-mode")?.addEventListener("click",()=>this.handlers.onSunMode()),document.getElementById("btn-audio")?.addEventListener("click",()=>this.handlers.onAudioToggle()),document.getElementById("btn-intro")?.addEventListener("click",()=>this.handlers.onIntro()),document.getElementById("intro-skip")?.addEventListener("click",()=>this.handlers.onIntroSkip()),document.getElementById("btn-help")?.addEventListener("click",()=>document.getElementById("help-modal")?.classList.remove("hidden")),document.getElementById("help-close")?.addEventListener("click",()=>document.getElementById("help-modal")?.classList.add("hidden")),document.getElementById("help-modal")?.addEventListener("click",t=>{t.target===t.currentTarget&&document.getElementById("help-modal")?.classList.add("hidden")}),document.getElementById("btn-cutaway")?.addEventListener("click",()=>this.handlers.onToggleCutaway());for(const t of Array.from(document.querySelectorAll(".mode-btn")))t.addEventListener("click",()=>{for(const e of Array.from(document.querySelectorAll(".mode-btn")))e.classList.remove("active");t.classList.add("active"),this.handlers.onModeChange(t.dataset.mode??"explore")})}setSpeedFromSlider(){const t=Number(this.speedInput.value),e=t===0?1/86400:Math.sign(t)*Math.pow(10,-4.9366+Math.abs(t)*1.6998);this.speedLabel.textContent=this.describeSpeed(e),this.handlers.onSpeedChange(e)}describeSpeed(t){const e=Math.abs(t),n=t<0?"⟲ ":"";return e<2/86400?`${n}1 сек/сек`:e<1.5/24?`${n}${Wt(e*1440,0)} мин/сек`:e<1.5?`${n}${Wt(e*24,1)} ч/сек`:e<400?`${n}${Wt(e,1)} сут/сек`:`${n}${Wt(e/365.25,1)} года/сек`}setDate(t){this.dateInput.value=t.toISOString().slice(0,10)}setAudioState(t){const e=document.getElementById("btn-audio");e&&(e.textContent=t?"Звук: вкл":"Звук: выкл")}setSunModeLabel(t){const e=document.getElementById("btn-sun-mode");e&&(e.textContent=t?"Солнце: УФ-фильтр SDO":"Солнце: видимый свет")}showIntroOverlay(){document.getElementById("intro-overlay")?.classList.remove("hidden","fading"),document.querySelector(".intro-content")?.classList.add("visible"),document.getElementById("topbar")?.classList.add("hidden"),document.getElementById("modes-bar")?.classList.add("hidden"),document.getElementById("body-panel")?.classList.add("hidden"),document.getElementById("timeline")?.classList.add("hidden"),document.getElementById("cutaway-bar")?.classList.add("hidden")}setIntroCaption(t){const e=document.getElementById("intro-caption");e&&(e.textContent=t)}showIntroTitle(){const t=document.querySelector(".intro-content");t&&t.classList.add("visible")}hideIntroOverlay(){const t=document.getElementById("intro-overlay");t&&(t.classList.add("fading"),window.setTimeout(()=>{t.classList.add("hidden"),t.classList.remove("fading"),this.showShell()},1200))}setCutawayCaption(t){const e=document.getElementById("cutaway-caption");e&&e&&(t===null?e.classList.add("hidden"):(e.innerHTML=t,e.classList.remove("hidden")))}setCutawayButton(t){const e=document.getElementById("btn-cutaway");e&&(e.textContent=t?"Закрыть разрез":"Вскрыть недра (Пробел)",e.classList.toggle("on",t))}showModePanel(t,e,n){this.modePanel.innerHTML=`
      <h3>${t}</h3>
      <div class="mode-desc">${e}</div>
      ${n}
    `,this.modePanel.classList.remove("hidden")}hideModePanel(){this.modePanel.classList.add("hidden"),this.modePanel.innerHTML=""}get modePanelElement(){return this.modePanel}toast(t,e=3800){this.toastEl.textContent=t,this.toastEl.classList.remove("hidden"),this.toastTimer!==null&&window.clearTimeout(this.toastTimer),this.toastTimer=window.setTimeout(()=>{this.toastEl.classList.add("hidden")},e)}}const kr=[{t:.2,text:"Тьма. Космосу 13,8 миллиарда лет…"},{t:2.6,text:"И вспыхивает звезда — наше Солнце."},{t:6,text:"Вокруг него выстраиваются орбиты восьми планет."},{t:9.5,text:"Голубая точка. Наш дом во Вселенной."}],x_=15;class y_{constructor(t,e,n,s){this.rig=t,this.ui=e,this.sun=n,this.onDone=s}elapsed=0;active=!1;cueIndex=-1;finished=!0;get isActive(){return this.active}start(){this.elapsed=0,this.cueIndex=-1,this.active=!0,this.finished=!1,this.rig.request("CINEMATIC_INTRO"),this.rig.introProgress=0,this.ui.showIntroOverlay(),this.ui.setIntroCaption("")}skip(){this.active&&this.finish()}finish(){this.active=!1,this.finished||(this.finished=!0,this.ui.hideIntroOverlay(),this.onDone())}update(t){if(!this.active)return;this.elapsed+=t;const e=Math.min(1,this.elapsed/x_);this.rig.introProgress=e;const n=$o(this.elapsed-1.2,1.6,6.5);this.sun.light.intensity=2.6*Math.min(1,n*1.15),this.elapsed>1.35&&this.elapsed-t<=1.35&&this.sun.triggerFlare();let s=this.cueIndex>=0?kr[this.cueIndex].text:"";for(let r=kr.length-1;r>=0;r--)if(this.elapsed>=kr[r].t){this.cueIndex!==r&&(this.cueIndex=r),s=kr[r].text;break}this.ui.setIntroCaption(s),this.elapsed>9.5&&this.ui.showIntroTitle(),e>=1&&this.finish()}}class M_{constructor(t=0){this.seed=t}async loadTile(t,e,n){const s=320/Math.pow(2,n),r=new Ci(s,s,32,32);r.rotateX(-Math.PI/2);const a=r.attributes.position;for(let l=0;l<a.count;l++){const c=a.getX(l)+t*s,h=a.getZ(l)+e*s,u=Math.sin(c*.021+this.seed)*Math.cos(h*.019-this.seed)*4+Math.sin(c*.087)*Math.cos(h*.071)*1.2;a.setY(l,u)}r.computeVertexNormals();const o=new at(r,new Kt({color:10130056,roughness:.95,flatShading:!0}));return o.position.set(t*s,0,e*s),{x:t,y:e,level:n,object:o,bounds:{west:t*s,south:e*s,east:(t+1)*s,north:(e+1)*s,minHeight:-8,maxHeight:8}}}unloadTile(t){t.object.traverse(e=>{const n=e;n.geometry&&n.geometry.dispose(),n.material?.dispose()})}recommendLevel(t){return t<80?4:t<300?3:t<1200?2:1}}function S_(i){const t=(e,n)=>{let s=e*374761393+n*668265263+i*1442695041|0;return s=s^s>>>13|0,s=Math.imul(s,1274126177),((s^s>>>16)>>>0)/4294967295};return(e,n)=>{const s=Math.floor(e),r=Math.floor(n),a=e-s,o=n-r,l=a*a*(3-2*a),c=o*o*(3-2*o),h=t(s,r),u=t(s+1,r),d=t(s,r+1),p=t(s+1,r+1);return h+(u-h)*l+(d-h)*c+(h-u-d+p)*l*c}}function to(i,t,e,n=5){let s=0,r=.5,a=1;for(let o=0;o<n;o++)s+=r*i(t*a,e*a),r*=.5,a*=2;return s}function b_(i){switch(i.texture){case"moon":return{ground:[128,126,120],ground2:[92,90,86],skyTop:0,skyHorizon:657938,skyIsSpace:!0,fogColor:0,fogDensity:0,sunSize:4,sunColor:16774880,gravityScale:1,curvature:5,props:"apollo"};case"mercury":return{ground:[120,114,106],ground2:[84,80,74],skyTop:0,skyHorizon:789e3,skyIsSpace:!0,fogColor:0,fogDensity:0,sunSize:8,sunColor:16773840,gravityScale:1,curvature:4,props:"craters"};case"mars":return{ground:[172,92,52],ground2:[118,58,34],skyTop:9062952,skyHorizon:14194794,skyIsSpace:!1,fogColor:13141610,fogDensity:.0022,sunSize:3.2,sunColor:16771272,gravityScale:1,curvature:6,props:"rocks"};case"venus":return{ground:[186,142,82],ground2:[140,100,56],skyTop:13145658,skyHorizon:15253600,skyIsSpace:!1,fogColor:14198856,fogDensity:.012,sunSize:0,sunColor:16769184,gravityScale:1,curvature:7,props:"volcanoes"};case"titan":return{ground:[152,96,42],ground2:[104,64,28],skyTop:8012824,skyHorizon:14190138,skyIsSpace:!1,fogColor:13137968,fogDensity:.008,sunSize:2.2,sunColor:16767136,gravityScale:1,curvature:5,props:"lake",parentPlanet:{name:"Сатурн",color:15259816,size:26}};case"europa":return{ground:[198,192,178],ground2:[150,148,142],skyTop:0,skyHorizon:658452,skyIsSpace:!0,fogColor:0,fogDensity:0,sunSize:2,sunColor:16773336,gravityScale:1,curvature:3,props:"ice",parentPlanet:{name:"Юпитер",color:14198904,size:60}};case"enceladus":return{ground:[226,232,240],ground2:[180,194,210],skyTop:0,skyHorizon:790552,skyIsSpace:!0,fogColor:0,fogDensity:0,sunSize:1.4,sunColor:16774370,gravityScale:1,curvature:3,props:"geysers",parentPlanet:{name:"Сатурн",color:15259816,size:52}};default:return{ground:[120,112,104],ground2:[88,82,76],skyTop:658452,skyHorizon:2763832,skyIsSpace:!0,fogColor:658452,fogDensity:.001,sunSize:3,sunColor:16773856,gravityScale:1,curvature:5,props:"rocks"}}}const Ue=320,ns=1.7;class E_{group=new he;terrain;heightNoise;style;def;position=new w(0,0,0);yaw=0;pitch=0;velocityY=0;onGround=!0;walkTime=0;lastFootprint=0;footprints=[];particles=null;particleVel=null;geyserPhase=0;mode="walk";rover=null;roverDrill=null;roverYaw=0;roverSpeed=0;drillCount=0;drillTimer=0;drillSpots=[];stones=[];drillBurst=null;ceremony=null;constructor(t,e){this.def=t,this.style=b_(t),this.heightNoise=S_(t.id.length*31+7),this.group.name=`surface_${t.id}`;const n=new at(new Te(2200,32,24),new Me({side:Fe,depthWrite:!1,uniforms:{topColor:{value:new _t(this.style.skyTop)},horizonColor:{value:new _t(this.style.skyHorizon)},sunDir:{value:new w(.4,.5,.2).normalize()},isSpace:{value:this.style.skyIsSpace?1:0},hazeBoost:{value:t.texture==="venus"||t.texture==="titan"?1:0}},vertexShader:`
          varying vec3 vDir;
          void main() {
            vDir = normalize(position);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          uniform vec3 topColor;
          uniform vec3 horizonColor;
          uniform vec3 sunDir;
          uniform float isSpace;
          uniform float hazeBoost;
          varying vec3 vDir;
          void main() {
            float h = clamp(vDir.y * 1.4, -1.0, 1.0);
            vec3 col = mix(horizonColor, topColor, smoothstep(-0.05, 0.65, h));
            float sunAmt = max(0.0, dot(normalize(vDir), normalize(sunDir)));
            // Закатное покраснение у горизонта (Марс — голубой закат!)
            if (isSpace < 0.5) {
              float nearSun = pow(sunAmt, 6.0);
              vec3 sunsetTint = hazeBoost > 0.5 ? vec3(1.0, 0.75, 0.35) : vec3(0.35, 0.55, 1.0);
              col = mix(col, sunsetTint, nearSun * 0.85);
            }
            col += vec3(1.0, 0.92, 0.78) * pow(sunAmt, 60.0) * (1.0 - isSpace * 0.4);
            gl_FragColor = vec4(col, 1.0);
          }
        `}));if(n.frustumCulled=!1,this.group.add(n),this.style.sunSize>0){const h=new Ss(new Ii({map:T_(),color:new _t(this.style.sunColor),transparent:!0,blending:we,depthWrite:!1}));h.scale.setScalar(this.style.sunSize*26),h.position.set(420,620,260),this.group.add(h)}if(this.style.parentPlanet){const h=this.style.parentPlanet,u=new at(new Te(h.size,32,24),new Ve({color:h.color,fog:!1}));u.position.set(-320,380,-520),this.group.add(u)}const s=Math.max(64,e),r=new Ci(Ue,Ue,s,s);r.rotateX(-Math.PI/2);const a=r.attributes.position,o=new Float32Array(a.count*3),l=this.style.ground,c=this.style.ground2;for(let h=0;h<a.count;h++){const u=a.getX(h),d=a.getZ(h),p=u*u+d*d,g=this.rawHeight(u,d)-p/(2*this.style.curvature*Ue);a.setY(h,g);const v=Math.min(1,Math.max(0,(this.rawHeight(u,d)+.3)*1.2));o[h*3]=(l[0]*v+c[0]*(1-v))/255,o[h*3+1]=(l[1]*v+c[1]*(1-v))/255,o[h*3+2]=(l[2]*v+c[2]*(1-v))/255}r.setAttribute("color",new ye(o,3)),r.computeVertexNormals(),this.terrain=new at(r,new Kt({vertexColors:!0,roughness:this.style.props==="lake"?.85:.96,metalness:.02,flatShading:!0})),this.group.add(this.terrain),this.buildProps(),this.buildParticles(),this.position.set(0,this.heightAt(0,0)+ns,18),this.yaw=Math.PI,this.pitch=-.06}rawHeight(t,e){const n=this.heightNoise,s=to(n,t*.012+3,e*.012+7,4)*9,r=to(n,t*.05+1,e*.05+2,4)*2.2,a=to(n,t*.18,e*.18,3)*.55;return s+r+a-5}heightAt(t,e){const n=t*t+e*e;return this.rawHeight(t,e)-n/(2*this.style.curvature*Ue)}buildProps(){const t=w_(this.def.id.length*999),e=this.style.props,n=e==="geysers"||e==="ice"?60:160,s=new ms(1,0),r=new Kt({color:new _t(this.style.ground2[0],this.style.ground2[1],this.style.ground2[2]).multiplyScalar(1.1),roughness:.95,flatShading:!0}),a=new Nh(s,r,n),o=new Re;for(let l=0;l<n;l++){const c=(t()-.5)*Ue*.92,h=(t()-.5)*Ue*.92,u=.25+Math.pow(t(),2.2)*3.2;if(o.position.set(c,this.heightAt(c,h)+u*.24,h),o.rotation.set(t()*3,t()*3,t()*3),o.scale.set(u,u*(.55+t()*.5),u),o.updateMatrix(),a.setMatrixAt(l,o.matrix),u>1.4){const d=this.def.id==="mars"?["базальт, 3.2 млрд лет","осадочная порода — была вода!","железистый камень-метеорит"]:this.def.id==="moon"?["реголит с водяным льдом","базальт лунного моря","анортит высокогорья"]:["смесь льда и камня","соляная корка","замёрзший метан"];this.drillSpots.push({x:c,z:h,sample:d[l%d.length]})}}this.group.add(a),e==="apollo"&&this.buildApollo(t),e==="volcanoes"&&this.buildVolcanoes(t),e==="lake"&&this.buildLake(),e==="geysers"&&this.buildGeyserVents(),e==="rocks"&&this.buildDustDevilMarker(),this.def.id==="mars"&&this.buildRover()}tileProvider=new M_(7);buildApollo(t){const e=new he,n=new Kt({color:14201962,metalness:.85,roughness:.42}),s=new Kt({color:4868690,metalness:.6,roughness:.5}),r=new at(new $e(1.5,1.9,2.2,12),n);r.position.y=2.6,e.add(r);const a=new at(new Ke(1.9,1.5,1.9),s);a.position.y=4.4,e.add(a);const o=new $e(.08,.08,3.1,6);for(let h=0;h<4;h++){const u=new at(o,s),d=h/4*Math.PI*2+.4;u.position.set(Math.cos(d)*2.2,1.55,Math.sin(d)*2.2),u.rotation.z=Math.cos(d)*.55,u.rotation.x=-Math.sin(d)*.55,e.add(u)}const l=-8+t()*5,c=-14+t()*5;e.position.set(l,this.heightAt(l,c),c),this.group.add(e)}buildVolcanoes(t){const e=new Kt({color:6965802,roughness:.9,flatShading:!0}),n=new Ve({color:16738850});for(let s=0;s<6;s++){const r=(t()-.5)*Ue*.7,a=(t()-.5)*Ue*.7,o=8+t()*16,l=new at(new os(o*.6,o,10,3),e);l.position.set(r,this.heightAt(r,a)+o*.45,a),this.group.add(l);const c=new at(new Xs(o*.14,10),n);c.rotation.x=-Math.PI/2,c.position.set(r,this.heightAt(r,a)+o*.95,a),this.group.add(c)}for(let s=0;s<7;s++){const r=(t()-.5)*Ue*.62,a=(t()-.5)*Ue*.62,o=7+t()*13,l=new at(new $e(o,o*1.12,2.2+t()*2.2,20),new Kt({color:10123850,roughness:.82,flatShading:!0}));l.position.set(r,this.heightAt(r,a)+1.1,a),this.group.add(l);const c=new at(new Xs(o*1.45,18),new Kt({color:4995104,roughness:.92}));c.rotation.x=-Math.PI/2,c.position.set(r,this.heightAt(r,a)+.12,a),this.group.add(c)}}buildLake(){const t=new at(new Xs(52,48),new mf({color:1839624,roughness:.12,metalness:.15,clearcoat:1,clearcoatRoughness:.08}));t.rotation.x=-Math.PI/2,t.position.set(-42,this.heightAt(-42,-30)+.6,-30),this.group.add(t)}buildGeyserVents(){const t=new Ve({color:13625599,transparent:!0,opacity:.55});for(let e=0;e<5;e++){const n=e/5*Math.PI*2,s=Math.cos(n)*26,r=Math.sin(n)*26-20,a=new at(new $e(.5,1.6,26,8,1,!0),t);a.position.set(s,this.heightAt(s,r)+13,r),this.group.add(a)}}buildDustDevilMarker(){const e=new Float32Array(720);for(let r=0;r<240;r++)e[r*3]=(Math.random()-.5)*6,e[r*3+1]=Math.random()*22,e[r*3+2]=(Math.random()-.5)*6;const n=new ee;n.setAttribute("position",new ye(e,3));const s=new Ei(n,new ri({color:14198904,size:.9,transparent:!0,opacity:.55,depthWrite:!1}));s.position.set(38,this.heightAt(38,-20),-20),this.group.add(s),this.dustDevil=s}dustDevil=null;buildParticles(){if(this.style.props!=="geysers"&&this.style.props!=="rocks")return;const t=320,e=new Float32Array(t*3);this.particleVel=new Float32Array(t*3);for(let s=0;s<t;s++)e[s*3]=(Math.random()-.5)*40,e[s*3+1]=Math.random()*30,e[s*3+2]=(Math.random()-.5)*40,this.particleVel[s*3+1]=Math.random()*6+2;const n=new ee;n.setAttribute("position",new ye(e,3)),this.particles=new Ei(n,new ri({color:this.style.props==="geysers"?14216447:13146216,size:.7,transparent:!0,opacity:.7,depthWrite:!1})),this.group.add(this.particles)}update(t,e,n,s){if(this.yaw-=n*.0032,this.pitch-=s*.0032,this.pitch=pe.clamp(this.pitch,-1.35,1.35),this.ceremony?this.updateCeremony(t):this.mode==="rover"&&this.rover?this.updateRover(t,e):this.updateWalk(t,e),e.throwStone&&this.throwStone(),this.updateStones(t),e.action&&this.tryDrill(),this.updateDrill(t),this.dustDevil&&(this.dustDevil.rotation.y+=t*1.7,this.dustDevil.position.x+=Math.sin(this.walkTime*.3)*t*1.4),this.particles&&this.particleVel){this.geyserPhase+=t;const r=this.particles.geometry.attributes.position;for(let a=0;a<r.count;a++){let o=r.getY(a)+this.particleVel[a*3+1]*t;o>34&&(o=0,r.setX(a,(Math.random()-.5)*40),r.setZ(a,(Math.random()-.5)*40)),r.setY(a,o)}r.needsUpdate=!0}}updateWalk(t,e){const n=(e.run?12:5.2)*(this.def.id==="titan"?.8:1),s=-Math.sin(this.yaw),r=-Math.cos(this.yaw),a=Math.cos(this.yaw),o=-Math.sin(this.yaw),l=(s*e.forward+a*e.side)*n*t,c=(r*e.forward+o*e.side)*n*t;this.position.x=pe.clamp(this.position.x+l,-Ue*.46,Ue*.46),this.position.z=pe.clamp(this.position.z+c,-Ue*.46,Ue*.46);const h=this.def.gravity,u=this.position.y<=this.heightAt(this.position.x,this.position.z)+ns+.02;this.onGround=u,e.jump&&u&&(this.velocityY=4.2+(this.def.id==="titan"?2.2:0),this.onGround=!1),(!u||this.velocityY>0)&&(this.velocityY-=h*t,this.position.y+=this.velocityY*t);const d=this.heightAt(this.position.x,this.position.z)+ns;this.position.y<d&&(this.position.y=d,this.velocityY=0,this.onGround=!0),Math.abs(l)+Math.abs(c)>.01&&u&&(this.walkTime+=t,this.walkTime-this.lastFootprint>.32&&(this.lastFootprint=this.walkTime,this.addFootprint()))}buildRover(){const t=new he,e=new Kt({color:14209736,metalness:.35,roughness:.55}),n=new Kt({color:2894900,metalness:.5,roughness:.5}),s=new Kt({color:13148240,metalness:.85,roughness:.35}),r=new at(new Ke(2.6,1,3.4),e);r.position.y=1.15,t.add(r);const a=new at(new Ke(2.2,.18,2.6),s);a.position.y=1.75,t.add(a);const o=new $e(.62,.62,.42,14);for(const p of[-1,1])for(const g of[-1.25,0,1.25]){const v=new at(o,n);v.rotation.z=Math.PI/2,v.position.set(p*1.55,.62,g),t.add(v)}const l=new at(new $e(.12,.16,1.8,8),n);l.position.set(0,2.7,1.1),t.add(l);const c=new at(new Ke(1.1,.5,.5),e);c.position.set(0,3.6,1.1),t.add(c);for(const p of[-.28,.28]){const g=new at(new $e(.12,.12,.14,10),n);g.rotation.x=Math.PI/2,g.position.set(p,3.6,1.4),t.add(g)}const h=new at(new Ke(2,.06,1.5),new Kt({color:2243178,metalness:.7,roughness:.3}));h.position.set(0,1.95,-.6),t.add(h);const u=new at(new Te(.55,14,8,0,Math.PI*2,0,Math.PI/2.6),e);u.position.set(-1,2.2,-1.3),u.rotation.x=Math.PI*.82,t.add(u);const d=new at(new os(.16,1.1,8),s);d.position.set(1.35,1.2,1.6),d.rotation.x=Math.PI/2,t.add(d),this.roverDrill=d,t.position.set(6,this.heightAt(6,6)+.05,6),this.rover=t,this.roverYaw=0,this.group.add(t)}toggleRover(){this.rover&&(this.mode==="rover"?(this.mode="walk",this.position.set(this.rover.position.x+3,this.heightAt(this.rover.position.x+3,this.rover.position.z)+ns,this.rover.position.z)):(this.mode="rover",this.yaw=this.roverYaw+Math.PI,this.pitch=-.08))}updateRover(t,e){const n=this.rover,s=e.forward*6.5;this.roverSpeed+=s*t,this.roverSpeed*=Math.exp(-t*.85),this.roverSpeed=pe.clamp(this.roverSpeed,-4.5,9),this.roverYaw+=e.side*t*1.25*Math.sign(this.roverSpeed||1)*Math.min(1,Math.abs(this.roverSpeed)*.4+.15),n.position.x=pe.clamp(n.position.x+Math.sin(this.roverYaw)*this.roverSpeed*t,-Ue*.46,Ue*.46),n.position.z=pe.clamp(n.position.z+Math.cos(this.roverYaw)*this.roverSpeed*t,-Ue*.46,Ue*.46),n.position.y=this.heightAt(n.position.x,n.position.z)+.05,n.rotation.y=this.roverYaw;const r=10.5;this.position.set(n.position.x-Math.sin(this.roverYaw)*r,n.position.y+4.6,n.position.z-Math.cos(this.roverYaw)*r)}tryDrill(){if(this.drillTimer>0)return;const t=this.mode==="rover"&&this.rover?this.rover.position.x:this.position.x,e=this.mode==="rover"&&this.rover?this.rover.position.z:this.position.z,n=this.mode==="rover"?14:4.5;let s=null,r=n*n;for(const a of this.drillSpots){const o=(a.x-t)**2+(a.z-e)**2;o<r&&(r=o,s=a)}s&&(this.drillTimer=2.4,this.pendingSample=s.sample)}pendingSample=null;updateDrill(t){if(!(this.drillTimer<=0)){if(this.drillTimer-=t,this.roverDrill&&(this.roverDrill.rotation.z+=t*22),!this.drillBurst){const n=new Float32Array(180);for(let o=0;o<60;o++)n[o*3]=(Math.random()-.5)*1.4,n[o*3+1]=Math.random()*1.2,n[o*3+2]=(Math.random()-.5)*1.4;const s=new ee;s.setAttribute("position",new ye(n,3)),this.drillBurst=new Ei(s,new ri({color:14203024,size:.16,transparent:!0,opacity:.85,depthWrite:!1}));const r=this.mode==="rover"&&this.rover?this.rover.position.x:this.position.x,a=this.mode==="rover"&&this.rover?this.rover.position.z:this.position.z;this.drillBurst.position.set(r+1.35,this.heightAt(r,a)+.2,a+1.6),this.group.add(this.drillBurst)}if(this.drillTimer<=0){this.drillCount++;const e=this.pendingSample??"капля подземного льда";this.pendingSample=null,window.dispatchEvent(new CustomEvent("helios:drill",{detail:{count:this.drillCount,sample:e,body:this.def.name}}))}}}throwStone(){const t=new w(0,0,-1).applyEuler(new pn(this.pitch,this.yaw,0,"YXZ")),e=new ms(.22,0),n=new at(e,new Kt({color:9076856,roughness:.95,flatShading:!0}));if(n.position.copy(this.position).addScaledVector(t,1.2).add(new w(0,-.35,0)),this.group.add(n),this.stones.push({mesh:n,vel:t.multiplyScalar(9.5).add(new w(0,2.2,0)),alive:20}),this.stones.length>12){const s=this.stones.shift();this.group.remove(s.mesh),s.mesh.geometry.dispose()}}updateStones(t){for(const e of this.stones){e.alive-=t,e.vel.y-=this.def.gravity*t,e.mesh.position.addScaledVector(e.vel,t);const n=this.heightAt(e.mesh.position.x,e.mesh.position.z)+.22;e.mesh.position.y<n&&(e.mesh.position.y=n,Math.abs(e.vel.y)>.6?(e.vel.y=-e.vel.y*.38,e.vel.x*=.62,e.vel.z*=.62):e.vel.set(0,0,0)),e.mesh.rotation.x+=t*3}}startCeremony(t){if(this.ceremony&&this.clearCeremony(),t==="apollo"){const e=this.buildLander();e.position.set(-8,this.heightAt(-8,-14)+58,-14),this.group.add(e),this.ceremony={kind:t,t:0,phase:0,craft:e}}else{const e=this.buildCrane(),n=this.rover??new he;if(!this.rover){const o=new at(new Ke(2.6,1,3.4),new Kt({color:14209736,roughness:.55}));n.add(o)}n.position.set(0,this.heightAt(0,0)+26,0),e.position.copy(n.position).add(new w(0,7.5,0)),this.group.add(e);const s=new Float32Array([-1.2,-4.2,-1.4,-1.2,-7.2,-1.4,1.2,-4.2,-1.4,1.2,-7.2,-1.4,-1.2,-4.2,1.4,-1.2,-7.2,1.4,1.2,-4.2,1.4,1.2,-7.2,1.4]),r=new ee;r.setAttribute("position",new ye(s,3));const a=new jd(r,new bs({color:14211288,transparent:!0,opacity:.9}));e.add(a),this.group.add(n),this.ceremony={kind:t,t:0,phase:0,craft:n,crane:e,tethers:a}}this.position.set(10,this.heightAt(10,14)+ns,14),this.yaw=.57,this.pitch=-.12}clearCeremony(){if(!this.ceremony)return;const t=this.ceremony;t.kind==="apollo"&&this.group.remove(t.craft),t.crane&&this.group.remove(t.crane),this.ceremony=null}updateCeremony(t){const e=this.ceremony;if(e.t+=t,e.kind==="apollo"){const n=this.heightAt(e.craft.position.x,e.craft.position.z);if(e.phase===0){const s=n,r=Math.max(1.2,(e.craft.position.y-s)*.16);e.craft.position.y=Math.max(s,e.craft.position.y-r*t*3.2),e.craft.rotation.y+=t*.06,e.craft.position.y<=s+.02&&(e.phase=1,e.t=0,this.spawnDust(e.craft.position.x,e.craft.position.z,2.2),window.dispatchEvent(new CustomEvent("helios:ceremony",{detail:{msg:"«Хьюстон, здесь База Спокойствия. „Орёл“ сел» — 20 июля 1969 года."}})))}else e.phase===1&&e.t>2.4&&(e.phase=2,window.dispatchEvent(new CustomEvent("helios:ceremony",{detail:{msg:"Пыль осела. Астронавты готовятся к первому шагу: 1/6 гравитации — шаги будут прыжками!"}})))}else{const n=this.heightAt(e.craft.position.x,e.craft.position.z)+.05;if(e.phase===0){const s=Math.max(.9,(e.craft.position.y-n)*.12);e.craft.position.y=Math.max(n,e.craft.position.y-s*t*2.6),e.crane&&e.crane.position.copy(e.craft.position).add(new w(0,7.5,0)),e.craft.position.y<=n+.05&&(e.phase=1,e.t=0,this.spawnDust(e.craft.position.x,e.craft.position.z,1.6),window.dispatchEvent(new CustomEvent("helios:ceremony",{detail:{msg:"Ровер на грунте! «Небесный кран» отцепляет тросы…"}})))}else e.phase===1&&e.t>1.8?(e.phase=2,e.t=0,e.tethers&&(e.tethers.visible=!1),window.dispatchEvent(new CustomEvent("helios:ceremony",{detail:{msg:"✅ 7 минут ужаса закончились! Perseverance в кратере Езеро — дно древнего озера."}}))):e.phase===2&&e.crane&&(e.crane.position.y+=t*9,e.crane.position.x+=t*5,e.t>4&&this.clearCeremony())}}spawnDust(t,e,n){const r=new Float32Array(360),a=new Float32Array(360);for(let u=0;u<120;u++){r[u*3]=t+(Math.random()-.5)*2*n,r[u*3+1]=this.heightAt(t,e)+Math.random()*.6,r[u*3+2]=e+(Math.random()-.5)*2*n;const d=Math.random()*Math.PI*2;a[u*3]=Math.cos(d)*(4+Math.random()*6)*n,a[u*3+1]=1+Math.random()*3,a[u*3+2]=Math.sin(d)*(4+Math.random()*6)*n}const o=new ee;o.setAttribute("position",new ye(r,3));const l=new Ei(o,new ri({color:13154464,size:.5,transparent:!0,opacity:.8,depthWrite:!1}));this.group.add(l);const c=performance.now(),h=()=>{const u=(performance.now()-c)/1800,d=l.geometry.attributes.position;for(let p=0;p<d.count;p++)d.setXYZ(p,d.getX(p)+a[p*3]*.016,d.getY(p)+a[p*3+1]*.016*(1-u*.7),d.getZ(p)+a[p*3+2]*.016),a[p*3+1]-=.06;d.needsUpdate=!0,l.material.opacity=.8*(1-u),u<1?requestAnimationFrame(h):(this.group.remove(l),l.geometry.dispose())};requestAnimationFrame(h)}buildLander(){const t=new he,e=new Kt({color:14201962,metalness:.85,roughness:.42}),n=new Kt({color:4868690,metalness:.6,roughness:.5}),s=new at(new $e(1.5,1.9,2.2,12),e);s.position.y=2.6,t.add(s);const r=new at(new Ke(1.9,1.5,1.9),n);r.position.y=4.4,t.add(r);const a=new $e(.08,.08,3.1,6);for(let o=0;o<4;o++){const l=new at(a,n),c=o/4*Math.PI*2+.4;l.position.set(Math.cos(c)*2.2,1.55,Math.sin(c)*2.2),l.rotation.z=Math.cos(c)*.55,l.rotation.x=-Math.sin(c)*.55,t.add(l)}return t}buildCrane(){const t=new he,e=new Kt({color:14209736,metalness:.4,roughness:.5}),n=new Kt({color:2894900,metalness:.55,roughness:.5}),s=new at(new Ke(3.2,1.6,3.2),e);t.add(s);for(const[r,a]of[[-1,-1],[1,-1],[-1,1],[1,1]]){const o=new at(new $e(.42,.55,1.2,10),n);o.position.set(r*1.1,1.3,a*1.1),t.add(o);const l=new at(new os(.42,2.2,10),new Ve({color:8964351,transparent:!0,opacity:.65}));l.position.set(r*1.1,2.6,a*1.1),l.rotation.x=Math.PI,t.add(l)}return t}addFootprint(){const t=new Ci(.34,.62),e=new Ve({color:0,transparent:!0,opacity:.28,depthWrite:!1}),n=new at(t,e);if(n.rotation.x=-Math.PI/2,n.rotation.z=-this.yaw,n.position.set(this.position.x+Math.sin(this.yaw+Math.PI)*.35,this.heightAt(this.position.x,this.position.z)+.04,this.position.z+Math.cos(this.yaw+Math.PI)*.35),this.group.add(n),this.footprints.push(n),this.footprints.length>140){const s=this.footprints.shift();this.group.remove(s),s.geometry.dispose(),s.material.dispose()}}reset(){this.position.set(0,this.heightAt(0,0)+ns,18),this.yaw=0,this.pitch=-.06,this.velocityY=0,this.mode="walk",this.roverSpeed=0,this.clearCeremony()}dispose(){this.group.traverse(t=>{const e=t;e.geometry&&e.geometry.dispose();const n=e.material;Array.isArray(n)?n.forEach(s=>s.dispose()):n?.dispose()}),this.group.clear()}}function w_(i){let t=i>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function T_(){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d"),n=e.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.16,"rgba(255,244,214,0.85)"),n.addColorStop(.45,"rgba(255,210,140,0.25)"),n.addColorStop(1,"rgba(255,180,90,0)"),e.fillStyle=n,e.fillRect(0,0,128,128);const s=new hi(t);return s.colorSpace=ke,s}class A_{group=new he;ctx;idA="earth";idB="jupiter";spheres={a:null,b:null};astro={a:null,b:null};jumpT={a:-1,b:-1};jumpHeights={a:0,b:0};labelA=null;labelB=null;active=!1;constructor(t){this.ctx=t,this.group.visible=!1,this.group.name="CompareWorlds",t.scene.add(this.group)}activate(){this.active=!0,this.ctx.setSystemVisible(!1),this.group.visible=!0,this.build(),this.ctx.rig.request("SYSTEM"),this.ctx.rig.setDistance(9),this.ctx.rig.targetDistance=9,this.ctx.rig.targetElevation=.18,this.renderPanel(),this.ctx.toast("Сравнение миров: выберите два тела и нажмите «Прыжок и Вес»!")}deactivate(){this.active=!1,this.group.visible=!1,this.ctx.setSystemVisible(!0),this.ctx.ui.hideModePanel(),this.clear()}clear(){this.group.clear(),this.spheres={a:null,b:null},this.astro={a:null,b:null},this.labelA=null,this.labelB=null}build(){this.clear();const t=He[this.idA],e=He[this.idB],n=Math.max(t.radiusKm,e.radiusKm),s=1.6*Math.pow(t.radiusKm/n,.42),r=1.6*Math.pow(e.radiusKm/n,.42);for(const[a,o,l,c]of[["a",t,s,-3.2],["b",e,r,3.2]]){const h=new Te(l,64,48),u=new at(h,new Kt({color:new _t(o.color),roughness:.85,metalness:.02}));u.position.set(c,0,0),u.userData.radius=l,this.group.add(u),this.spheres[a]=u;const d=C_(l*.3);d.position.set(c-l*1.35,-l,0),this.group.add(d),this.astro[a]=d;const p=document.createElement("div");p.className="label3d big",p.textContent=o.name;const g=new qh(p);g.position.set(c,l*1.28,0),this.group.add(g),a==="a"?this.labelA=g:this.labelB=g;const v=new at(new ca(l*1.35,l*1.42,64),new Ve({color:4703999,transparent:!0,opacity:.35,side:ln}));v.rotation.x=-Math.PI/2,v.position.set(c,-l*1.02,0),this.group.add(v)}}renderPanel(){const t=He[this.idA],e=He[this.idB],n=30,s=n*t.gravity/9.81,r=n*e.gravity/9.81,a=h=>4.2*4.2/(2*h),o=Ts.filter(h=>h.id!=="sun").map(h=>`<option value="${h.id}">${h.name}</option>`).join("");this.ctx.ui.showModePanel("⚖️ Сравни миры","Два тела рядом — в честном соотношении размеров. Кнопка ниже заставит космонавтов прыгнуть: гравитация сама покажет разницу!",`
      <div class="row">
        <label class="field"><span>Мир A</span>
          <select id="cmp-a">${o}</select></label>
        <label class="field"><span>Мир B</span>
          <select id="cmp-b">${o}</select></label>
      </div>
      <div class="vs-grid" style="margin-top:10px">
        <div class="vs-cell"><b>${t.name}</b></div>
        <div class="vs-cell"><b>${e.name}</b></div>
        <div class="vs-cell">Радиус: ${Wt(t.radiusKm)} км</div>
        <div class="vs-cell">Радиус: ${Wt(e.radiusKm)} км</div>
        <div class="vs-cell">Масса: ${Wt(t.massKg/1e24,2)}·10²⁴ кг</div>
        <div class="vs-cell">Масса: ${Wt(e.massKg/1e24,2)}·10²⁴ кг</div>
        <div class="vs-cell">Тяга: ${Wt(t.gravity,2)} м/с²</div>
        <div class="vs-cell">Тяга: ${Wt(e.gravity,2)} м/с²</div>
        <div class="vs-cell">Сутки: ${Wt(t.dayLengthHours/24,2)} дн</div>
        <div class="vs-cell">Сутки: ${Wt(e.dayLengthHours/24,2)} дн</div>
        <div class="vs-cell">Год: ${Wt(t.periodDays/365.25,2)} лет</div>
        <div class="vs-cell">Год: ${Wt(e.periodDays/365.25,2)} лет</div>
        <div class="vs-cell">Температура: ${Wt(t.meanTempC)} °C</div>
        <div class="vs-cell">Температура: ${Wt(e.meanTempC)} °C</div>
        <div class="vs-cell">${t.breathable?"✅":"❌"} Дышать: ${t.breathable?"можно":"нельзя"}</div>
        <div class="vs-cell">${e.breathable?"✅":"❌"} Дышать: ${e.breathable?"можно":"нельзя"}</div>
        <div class="vs-cell">Вес 30 кг: <b class="win">${Wt(s,1)} кг</b></div>
        <div class="vs-cell">Вес 30 кг: <b class="win">${Wt(r,1)} кг</b></div>
      </div>
      <div class="stat" style="margin-top:10px">
        Прыжок с места (со скоростью 4,2 м/с):<br/>
        <b>${t.name}</b> — ${Wt(a(t.gravity),2)} м ·
        <b>${e.name}</b> — ${Wt(a(e.gravity),2)} м
      </div>
      <div class="stack" style="margin-top:10px">
        <button id="cmp-jump" class="btn accent">🦘 Прыжок и Вес — прыгнуть!</button>
        <button id="cmp-close" class="btn ghost">Закрыть режим</button>
      </div>
      <div class="verdict ok">Чем меньше тяга — тем выше прыжок и легче вес. На Луне ты весишь в 6 раз меньше!</div>
      `);const l=document.getElementById("cmp-a"),c=document.getElementById("cmp-b");l.value=this.idA,c.value=this.idB,l.addEventListener("change",()=>{this.idA=l.value,this.build(),this.renderPanel()}),c.addEventListener("change",()=>{this.idB=c.value,this.build(),this.renderPanel()}),document.getElementById("cmp-jump")?.addEventListener("click",()=>this.doJump()),document.getElementById("cmp-close")?.addEventListener("click",()=>{this.deactivate(),this.ctx.ui.hideModePanel()})}doJump(){this.jumpT.a=0,this.jumpT.b=0;const t=He[this.idA].gravity,e=He[this.idB].gravity;this.jumpHeights.a=4.2*4.2/(2*t),this.jumpHeights.b=4.2*4.2/(2*e)}update(t){if(this.active){for(const e of["a","b"]){const n=this.astro[e],s=this.spheres[e];if(!(!n||!s)){if(this.jumpT[e]>=0){this.jumpT[e]+=t;const r=He[e==="a"?this.idA:this.idB],a=2*4.2/r.gravity,o=this.jumpT[e];if(o>=a)this.jumpT[e]=-1,n.position.y=-s.userData.radius;else{const l=this.jumpHeights[e],c=s.userData.radius*.3,h=Math.sin(Math.PI*o/a)**2*l*(c/1.8);n.position.y=-s.userData.radius+h}}n.rotation.y+=t*.6,s.rotation.y+=t*.12}}this.labelA,this.labelB}}}function C_(i){const t=new he,e=new Kt({color:15790838,roughness:.55,metalness:.12}),n=new Kt({color:2240580,roughness:.18,metalness:.75}),s=new at(new dl(i*.28,i*.5,6,12),e);s.position.y=i*.55,t.add(s);const r=new at(new Te(i*.22,16,12),e);r.position.y=i*1.08,t.add(r);const a=new at(new Te(i*.16,12,10),n);a.position.set(0,i*1.08,i*.12),t.add(a);const o=new at(new Ke(i*.34,i*.42,i*.18),e);return o.position.set(0,i*.62,-i*.3),t.add(o),t}const Jc={visible:"👁 Видимый свет",infrared:"🔥 Инфракрасный (тепловая карта)",radar:"📡 Радар (пробивает облака)",magnetometer:"🧲 Магнитометр",sonar:"🌊 Подповерхностный сонар"},Qc={visible:"Обычный свет — каким его видит глаз. Поверхность, облака, цвета.",infrared:"Тепловое излучение: тёплое светится ярко. Лава Ио и вулканы Венеры — «горячие точки».",radar:"Радар пронизывает облака Венеры и Титана: оболочка облаков становится прозрачной, видна поверхность.",magnetometer:"Магнитные поля: появляются силовые линии и радиационные пояса вокруг Земли, Юпитера и Сатурна.",sonar:"Подповерхностный сонар: видны скрытые океаны под льдом Европы и Энцелада и лёд в кратерах."},R_={visible:"none",infrared:"sepia(1) saturate(3.2) hue-rotate(-25deg) contrast(1.15) brightness(1.05)",radar:"grayscale(1) contrast(1.55) brightness(1.12)",magnetometer:"hue-rotate(210deg) saturate(1.7) contrast(1.12)",sonar:"hue-rotate(150deg) saturate(1.35) brightness(1.08) contrast(1.08)"};class P_{active=!1;spectrum="visible";ctx;savedCloudOpacity=new Map;fieldLines=new he;subShells=new he;constructor(t){this.ctx=t,this.fieldLines.visible=!1,this.subShells.visible=!1,t.scene.add(this.fieldLines),t.scene.add(this.subShells),this.buildFieldLines(),this.buildSubShells()}activate(){this.active=!0,this.setSpectrum("infrared"),this.renderPanel(),this.ctx.toast("Спектральный сканер включён. Переключайте спектры — планеты «расскажут» о себе больше!")}deactivate(){this.active=!1,this.setSpectrum("visible"),this.fieldLines.visible=!1,this.subShells.visible=!1,this.ctx.renderer.domElement.style.filter="none",this.ctx.ui.hideModePanel(),this.restoreClouds()}setSpectrum(t){this.spectrum=t,this.ctx.renderer.domElement.style.filter=R_[t],t==="radar"?this.ctx.scene.traverse(e=>{const n=e;if(!n.isMesh)return;const s=n.material;s&&s.transparent&&s.map&&!this.savedCloudOpacity.has(n)&&(this.savedCloudOpacity.set(n,s.opacity),s.opacity=Math.min(s.opacity,.12))}):this.restoreClouds(),this.fieldLines.visible=t==="magnetometer",this.subShells.visible=t==="sonar",this.ctx.scene.traverse(e=>{const n=e;if(!n.isMesh)return;const s=n.material;!s||!s.emissiveMap||(s.emissiveIntensity=t==="infrared"?1.8:.9)}),this.renderPanel(),this.ctx.toast(Qc[t])}restoreClouds(){for(const[t,e]of this.savedCloudOpacity){const n=t.material;n&&(n.opacity=e)}this.savedCloudOpacity.clear()}buildFieldLines(){const t=new Ve({color:5614335,transparent:!0,opacity:.35,blending:we,depthWrite:!1});for(const[e,n,s]of[["earth",2.6,6],["jupiter",7.2,8],["saturn",6.2,6]]){const r=new he;r.name=`field_${e}`,r.userData.bodyId=e,r.userData.baseRadius=n;for(let a=0;a<s;a++){const o=a/s*Math.PI-Math.PI/2,l=new at(new tr(n,n*.018,8,64),t);l.rotation.x=Math.PI/2+o*.72,l.rotation.y=o*.5,r.add(l);const c=new at(new tr(n*.62,n*.1,8,48),new Ve({color:16738047,transparent:!0,opacity:.12,blending:we,depthWrite:!1}));c.rotation.x=Math.PI/2,a===0&&r.add(c)}this.fieldLines.add(r)}}buildSubShells(){for(const[t,e,n]of[["europa",2785240,.72],["enceladus",2785240,.62],["ganymede",2785240,.5],["titan",2644152,.58],["moon",8952268,.2],["mercury",8952268,.22]]){const s=new at(new Te(1,32,24),new Ve({color:e,transparent:!0,opacity:.38,blending:we,depthWrite:!1}));s.name=`sub_${t}`,s.userData.bodyId=t,s.userData.frac=n,s.userData.baseRadius=1,this.subShells.add(s)}}update(){if(!this.active)return;const t=new w,e=n=>{const s=n.userData.bodyId,r=this.ctx.bodyDef(s),a=this.ctx.getScale().radiusUnits(r);this.ctx.bodyScenePos(s,t),n.position.copy(t);const o=n.name.startsWith("field_")?a:a*n.userData.frac;n.scale.setScalar(o/(n.userData.baseRadius||1))};this.fieldLines.children.forEach(e),this.subShells.children.forEach(e)}renderPanel(){const t=Object.keys(Jc).map(e=>`<button class="btn small ${e===this.spectrum?"accent":""}" data-spec="${e}">${Jc[e]}</button>`).join("");this.ctx.ui.showModePanel("🔬 Спектральный сканер","Наведите камеру на тело и переключайте спектр. Каждый «режим зрения» показывает то, чего не видит глаз.",`<div class="stack">${t}</div>
       <div class="verdict ok" style="margin-top:10px">${Qc[this.spectrum]}</div>
       <button id="scan-close" class="btn ghost" style="margin-top:10px">Закрыть сканер</button>`);for(const e of Array.from(document.querySelectorAll("[data-spec]")))e.addEventListener("click",()=>{this.setSpectrum(e.dataset.spec)});document.getElementById("scan-close")?.addEventListener("click",()=>{this.deactivate()})}}class D_{active=!1;ctx;current=null;savedAtmosphere=null;jupiterGlow=null;marsOverride=!1;earthSpinSaved=null;constructor(t){this.ctx=t}activate(){this.active=!0,this.renderPanel(),this.ctx.toast("Лаборатория «Что если?»: выберите эксперимент — и увидите, что станет с миром.")}deactivate(){this.active=!1,this.revertAll(),this.ctx.ui.hideModePanel()}revertAll(){this.current&&(this.scenarios.find(t=>t.id===this.current)?.revert(),this.current=null)}get scenarios(){return[{id:"no-atmosphere",title:"🌍 Убрать атмосферу Земли",desc:"Небо становится чёрным даже днём, исчезают закаты. Без воздушной «шубы» днём +120 °C, ночью −150 °C. Океаны сначала закипают, потом замерзают. Озоновый щит исчезает — УФ-свет убивает всё живое на поверхности.",apply:()=>this.applyNoAtmosphere(),revert:()=>this.revertNoAtmosphere()},{id:"mars-terra",title:"🔴 Подвинуть Марс на орбиту Земли",desc:"Тепло топит полярные шапки: вода выходит в кратеры, появляются древние океаны. Плотная углекислая атмосфера создаёт парниковый эффект — Марс становится тёплым. Но магнитного поля нет — ветер медленно сдувает атмосферу обратно.",apply:()=>this.applyMarsTerra(),revert:()=>this.revertMarsTerra()},{id:"fast-spin",title:"💨 Раскрутить Землю в 10 раз быстрее",desc:"Сутки длятся 2 часа 24 минуты! Центробежная сила сплющивает планету у полюсов. Ураганы дуют по всей планете, а кора не выдерживает — вулканы и землетрясения повсюду.",apply:()=>this.applyFastSpin(),revert:()=>this.revertFastSpin()},{id:"heavy-jupiter",title:"⭐ Увеличить массу Юпитера в 80 раз",desc:"В ядре зажигается термоядерный синтез — Юпитер вспыхивает как красный карлик! Теперь в системе две звезды, а его луны получают свет и тепло. Европа подсвечивается двумя солнцами сразу.",apply:()=>this.applyHeavyJupiter(),revert:()=>this.revertHeavyJupiter()}]}renderPanel(){const t=this.scenarios.map(e=>`
        <div class="stat">
          <b>${e.title}</b>
          <div style="font-size:11px;color:var(--muted);margin:6px 0 8px;line-height:1.55">${e.desc}</div>
          <button class="btn small ${this.current===e.id?"on":""}" data-whatif="${e.id}">
            ${this.current===e.id?"✓ Активно — сбросить":"Запустить эксперимент"}
          </button>
        </div>`).join("");this.ctx.ui.showModePanel("🧪 Что если?","Настоящая лаборатория: сломаем законы физики и посмотрим, что будет. Эксперименты видны прямо в сцене!",`${t}<button id="whatif-close" class="btn ghost" style="margin-top:10px">Закрыть лабораторию</button>`);for(const e of Array.from(document.querySelectorAll("[data-whatif]")))e.addEventListener("click",()=>{const n=e.dataset.whatif,s=this.scenarios.find(r=>r.id===n);this.current===n?(s.revert(),this.current=null,this.ctx.toast("Эксперимент сброшен. Законы физики снова в силе.")):(this.revertAll(),s.apply(),this.current=n,this.ctx.toast(`Эксперимент «${s.title}» запущен!`)),this.renderPanel()});document.getElementById("whatif-close")?.addEventListener("click",()=>this.deactivate())}applyNoAtmosphere(){const t=this.findBodyRoot("earth");t&&t.traverse(e=>{const n=e;if(!n.isMesh)return;const s=n.material;s&&s.transparent&&s.blending===we&&(this.savedAtmosphere===null&&(this.savedAtmosphere=s.opacity),s.opacity=0)}),this.ctx.toast("Атмосфера исчезла: небо чёрное, закатов нет, температура скачет от +120 до −150 °C.")}revertNoAtmosphere(){const t=this.findBodyRoot("earth");t&&this.savedAtmosphere!==null&&t.traverse(e=>{const n=e;if(!n.isMesh)return;const s=n.material;s&&s.transparent&&s.blending===we&&(s.opacity=this.savedAtmosphere)}),this.savedAtmosphere=null}applyMarsTerra(){this.marsOverride=!0,this.ctx.selectBody("mars"),this.ctx.toast("Марс на орбите Земли: шапки тают, в кратерах — океаны, небо розовеет от пара.")}revertMarsTerra(){this.marsOverride=!1}applyFastSpin(){const t=this.findBodyRoot("earth");t&&(t.scale.y=.82);const e=this.ctx.bodyObject("earth");e&&(this.earthSpinSaved=e.spinBoost,e.spinBoost=10),this.ctx.selectBody("earth"),this.ctx.toast("Земля раскручена: сутки 2 ч 24 мин, планета сплюснута, ураганы повсюду!")}revertFastSpin(){const t=this.findBodyRoot("earth");t&&(t.scale.y=1);const e=this.ctx.bodyObject("earth");e&&this.earthSpinSaved!==null&&(e.spinBoost=this.earthSpinSaved,this.earthSpinSaved=null)}applyHeavyJupiter(){const t=new w;this.ctx.bodyScenePos("jupiter",t);const e=this.ctx.getScale().radiusUnits(this.ctx.bodyDef("jupiter")),n=new Ss(new Ii({map:I_(),color:16742972,transparent:!0,blending:we,depthWrite:!1}));n.scale.setScalar(e*6),n.position.copy(t),this.jupiterGlow=n,this.ctx.scene.add(n),this.ctx.sun.triggerFlare(),this.ctx.selectBody("jupiter"),this.ctx.toast("Юпитер вспыхнул красным карликом! В системе теперь две звезды.")}revertHeavyJupiter(){this.jupiterGlow&&(this.ctx.scene.remove(this.jupiterGlow),this.jupiterGlow.material.dispose(),this.jupiterGlow=null)}findBodyRoot(t){let e=null;return this.ctx.spaces.root.traverse(n=>{n.name===t&&!e&&(e=n)}),e}update(t){if(this.active){if(this.marsOverride){const e=this.ctx.bodyObject("mars");if(e){const s=e.group.position.clone().normalize(),r=this.ctx.getScale().id==="real"?1495978707e-1/this.ctx.getScale().kmPerUnit:46;s.lengthSq()>1e-8&&e.group.position.copy(s.multiplyScalar(r))}}if(this.jupiterGlow){const e=new w;this.ctx.bodyScenePos("jupiter",e),this.jupiterGlow.position.copy(e);const n=1+Math.sin(performance.now()*.002)*.06,s=this.ctx.getScale().radiusUnits(this.ctx.bodyDef("jupiter"));this.jupiterGlow.scale.setScalar(s*6*n)}}}}function I_(){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d"),n=e.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,"rgba(255,240,200,1)"),n.addColorStop(.25,"rgba(255,130,60,0.55)"),n.addColorStop(1,"rgba(255,60,20,0)"),e.fillStyle=n,e.fillRect(0,0,128,128),new hi(t)}const th=[{id:"sun-earth",from:"sun",to:"earth",label:"Солнце → Земля"},{id:"earth-moon",from:"earth",to:"moon",label:"Земля → Луна"},{id:"earth-mars",from:"earth",to:"mars",label:"Земля → Марс"},{id:"sun-neptune",from:"sun",to:"neptune",label:"Солнце → Нептун"}];function Hr(i){return i<60?`${Wt(i,1)} с`:i<3600?`${Wt(i/60,1)} мин`:`${Wt(i/3600,2)} ч`}class L_{active=!1;ctx;photon=null;trail=null;flyFrom=new w;flyTo=new w;flyT=-1;flyDuration=1;flyRealSeconds=0;onArrive=null;roverState="idle";roverTimer=0;roverDelay=0;constructor(t){this.ctx=t}activate(){this.active=!0,this.renderPanel(),this.ctx.toast("Скорость света: 300 000 км/с — но и она медленна на масштабах системы!")}deactivate(){this.active=!1,this.stopPhoton(),this.ctx.ui.hideModePanel()}stopPhoton(){this.photon&&(this.ctx.scene.remove(this.photon),this.photon.material.dispose(),this.photon=null),this.trail&&(this.ctx.scene.remove(this.trail),this.trail.geometry.dispose(),this.trail.material.dispose(),this.trail=null),this.flyT=-1,this.onArrive=null}launch(t,e,n){const s=th.find(l=>l.id===t);if(!s)return;this.stopPhoton();const r=this.ctx.getSimJD(),a=Br(s.from,s.to,r)*eu;this.flyRealSeconds=Br(s.from,s.to,r),this.flyDuration=Math.min(6,Math.max(1.4,this.flyRealSeconds/e)),this.onArrive=n??null,this.ctx.bodyScenePos(s.from,this.flyFrom),this.ctx.bodyScenePos(s.to,this.flyTo);const o=new ee().setFromPoints([this.flyFrom.clone(),this.flyTo.clone()]);this.trail=new er(o,new _f({color:6741503,transparent:!0,opacity:.45,dashSize:.6,gapSize:.45})),this.trail.computeLineDistances(),this.ctx.scene.add(this.trail),this.photon=new Ss(new Ii({map:U_(),color:10088191,transparent:!0,blending:we,depthWrite:!1})),this.photon.scale.setScalar(Math.max(.6,a/1e8)),this.ctx.scene.add(this.photon),this.flyT=0,this.ctx.toast(`Импульс: ${s.label} · ${Hr(this.flyRealSeconds)} в реальном времени (в кадре ускорено ×${Wt(e,0)}).`),this.renderPanel()}sendRoverCommand(){const t=this.ctx.getSimJD();this.roverDelay=Br("earth","mars",t),this.roverState="waiting",this.roverTimer=0,this.launch("earth-mars",Math.max(1,this.roverDelay/4),()=>{this.roverState="turned",this.ctx.toast("Марсоход получил команду и повернул направо! 📡"),this.renderPanel()}),this.renderPanel(),this.ctx.toast(`Команда «Повернуть направо» отправлена. Сигнал идёт ${Hr(this.roverDelay)}. Подождите — ровер не может ответить мгновенно!`)}renderPanel(){const t=this.ctx.getSimJD(),e=Jh(t).toLocaleDateString("ru-RU"),n=th.map(r=>{const a=Br(r.from,r.to,t);return`<div class="stat"><b>${r.label}</b> — ${Hr(a)}
        <button class="btn tiny" data-route="${r.id}" style="float:right">Запустить</button></div>`}).join(""),s=this.roverState==="waiting"?'<div class="verdict no">📡 Сигнал в пути… Ровер пока НЕ повернул. Таково терпение инженеров NASA!</div>':this.roverState==="turned"?`<div class="verdict ok">✅ Ровер повернул. Полный цикл «команда → действие» занял ${Hr(this.roverDelay*2)}.</div>`:'<div class="verdict ok">Нажмите кнопку — и увидите, почему марсоходами нельзя управлять джойстиком.</div>';this.ctx.ui.showModePanel("⚡ Скорость света и радиосвязь",`Дата: ${e}. Свет летит 299 792 км/с, но расстояния огромны. Выберите маршрут — фотонный импульс покажет путь.`,`${n}
       <div class="stat" style="margin-top:8px"><b>📡 Мини-игра «Марсоход»</b>
         <div style="font-size:11px;color:var(--muted);margin:6px 0">Отправьте команду «Повернуть направо» роверу в кратере Езеро.</div>
         <button id="rover-cmd" class="btn small accent">Отправить команду роверу</button>
       </div>
       ${s}
       <button id="ls-close" class="btn ghost" style="margin-top:10px">Закрыть режим</button>`);for(const r of Array.from(document.querySelectorAll("[data-route]")))r.addEventListener("click",()=>this.launch(r.dataset.route,40));document.getElementById("rover-cmd")?.addEventListener("click",()=>this.sendRoverCommand()),document.getElementById("ls-close")?.addEventListener("click",()=>this.deactivate())}update(t){if(!(!this.active&&this.flyT<0)){if(this.flyT>=0&&this.photon){this.flyT+=t/this.flyDuration;const e=Math.min(1,this.flyT);this.photon.position.lerpVectors(this.flyFrom,this.flyTo,e);const n=1+Math.sin(e*Math.PI*8)*.12;if(this.photon.scale.setScalar(this.photon.scale.x*.92+.08*Math.max(.5,n)),e>=1){const s=this.onArrive;this.stopPhoton(),s?.()}}this.roverState==="waiting"&&(this.roverTimer+=t)}}}function U_(){const t=document.createElement("canvas");t.width=96,t.height=96;const e=t.getContext("2d"),n=e.createRadialGradient(96/2,96/2,0,96/2,96/2,96/2);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.3,"rgba(140,230,255,0.8)"),n.addColorStop(1,"rgba(80,180,255,0)"),e.fillStyle=n,e.fillRect(0,0,96,96),new hi(t)}class N_{active=!1;ctx;stormParticles=null;stormVel=null;stormLife=new Kr(.3,6);geyserParticles=null;geyserLife=new Kr(.4,5);ioGlow=null;ioLife=new Kr(.2,4);auroraBoost=0;constructor(t){this.ctx=t}activate(){this.active=!0,this.renderPanel(),this.ctx.toast("Опасности космоса: запускайте явления и смотрите, как космос «показывает характер».")}deactivate(){this.active=!1,this.cleanup(),this.ctx.ui.hideModePanel()}cleanup(){for(const t of[this.stormParticles,this.geyserParticles])t&&(this.ctx.scene.remove(t),t.geometry.dispose(),t.material.dispose());this.stormParticles=null,this.geyserParticles=null,this.ioGlow&&(this.ctx.scene.remove(this.ioGlow),this.ioGlow.material.dispose(),this.ioGlow=null),this.auroraBoost=0}get events(){return[{id:"solar-storm",title:"☀️ Солнечная буря (CME)",desc:"Солнце выбрасывает миллиарды тонн плазмы. Если она попадёт в Землю — авроры, сбои связи и радиация. Наша магнитосфера отводит удар!",run:()=>this.runSolarStorm()},{id:"aurora",title:"🌌 Полярное сияние",desc:"Солнечные частицы влетают в атмосферу у полюсов и заставляют кислород светиться зелёным, а азот — красным. Это «щит Земли» в действии!",run:()=>this.runAurora()},{id:"geysers",title:"💦 Гейзеры Энцелада",desc:"Маленький ледяной спутник Сатурна бьёт фонтанами воды в космос! Струи уходят на сотни километров и питают кольцо E.",run:()=>this.runGeysers()},{id:"io-volcano",title:"🌋 Вулканы Ио",desc:"Приливные силы Юпитера выжимают Ио, как мяч, и её недра плавятся. Вулканы выбрасывают серу на 300 км вверх — это рекорд Солнечной системы!",run:()=>this.runIoVolcano()}]}renderPanel(){const t=this.events.map(e=>`
        <div class="stat">
          <b>${e.title}</b>
          <div style="font-size:11px;color:var(--muted);margin:6px 0 8px;line-height:1.55">${e.desc}</div>
          <button class="btn small accent" data-danger="${e.id}">Запустить явление</button>
        </div>`).join("");this.ctx.ui.showModePanel("☄️ Опасности космоса","Космос прекрасен, но суров. Каждая кнопка запускает настоящее явление прямо в сцене.",`${t}<button id="danger-close" class="btn ghost" style="margin-top:10px">Закрыть</button>`);for(const e of Array.from(document.querySelectorAll("[data-danger]")))e.addEventListener("click",()=>{this.events.find(n=>n.id===e.dataset.danger)?.run()});document.getElementById("danger-close")?.addEventListener("click",()=>this.deactivate())}runSolarStorm(){if(this.ctx.sun.triggerFlare(),this.stormLife.trigger(),this.ctx.selectBody("earth"),!this.stormParticles){const e=new Float32Array(1500);this.stormVel=new Float32Array(500*3);const n=new w;this.ctx.bodyScenePos("sun",n);for(let r=0;r<500;r++){e[r*3]=n.x,e[r*3+1]=n.y,e[r*3+2]=n.z;const a=new w().randomDirection(),o=14+Math.random()*30;this.stormVel[r*3]=a.x*o,this.stormVel[r*3+1]=a.y*o,this.stormVel[r*3+2]=a.z*o}const s=new ee;s.setAttribute("position",new ye(e,3)),this.stormParticles=new Ei(s,new ri({color:16752704,size:.5,transparent:!0,opacity:.8,blending:we,depthWrite:!1})),this.ctx.scene.add(this.stormParticles)}this.auroraBoost=1,this.ctx.toast("Солнечная буря! Поток плазмы мчится к планетам. Ауроры усиливаются — магнитосфера работает.")}runAurora(){this.auroraBoost=1,this.ctx.selectBody("earth"),this.ctx.toast("Полярное сияние: зелёный кислород и красный азот танцуют у полюсов.")}runGeysers(){this.geyserLife.trigger(),this.ctx.selectBody("enceladus");const t=new w;this.ctx.bodyScenePos("enceladus",t);const e=this.ctx.getScale().radiusUnits(this.ctx.bodyDef("enceladus"));if(!this.geyserParticles){const s=new Float32Array(1080);for(let a=0;a<360;a++){const o=Math.random()*Math.PI*2;s[a*3]=Math.cos(o)*e*.4,s[a*3+1]=-e*.9+Math.random()*e*.3,s[a*3+2]=Math.sin(o)*e*.4}const r=new ee;r.setAttribute("position",new ye(s,3)),this.geyserParticles=new Ei(r,new ri({color:13626111,size:.22,transparent:!0,opacity:.85,blending:we,depthWrite:!1})),this.ctx.scene.add(this.geyserParticles)}this.geyserParticles.position.copy(t),this.ctx.toast("Гейзеры! Вода бьёт из-под льда и улетает в космос — Кассини пролетал сквозь эти струи.")}runIoVolcano(){this.ioLife.trigger(),this.ctx.selectBody("io");const t=new w;this.ctx.bodyScenePos("io",t);const e=this.ctx.getScale().radiusUnits(this.ctx.bodyDef("io"));this.ioGlow||(this.ioGlow=new Ss(new Ii({map:F_(),color:16738850,transparent:!0,blending:we,depthWrite:!1})),this.ctx.scene.add(this.ioGlow)),this.ioGlow.position.copy(t),this.ioGlow.scale.setScalar(e*5),this.ctx.toast("Ио извергается! Сера летит на сотни километров — самая вулканическая «лампочка» системы.")}update(t){if(!(!this.active&&this.stormLife.value===0&&this.geyserLife.value===0)){if(this.stormParticles&&this.stormVel){const e=this.stormParticles.geometry.attributes.position,n=new w;this.ctx.bodyScenePos("sun",n);for(let r=0;r<e.count;r++)e.setXYZ(r,e.getX(r)+this.stormVel[r*3]*t,e.getY(r)+this.stormVel[r*3+1]*t,e.getZ(r)+this.stormVel[r*3+2]*t);e.needsUpdate=!0;const s=this.stormLife.update(t);this.stormParticles.material.opacity=.85*s}if(this.geyserParticles){const e=this.geyserParticles.geometry.attributes.position,n=this.ctx.getScale().radiusUnits(this.ctx.bodyDef("enceladus"));for(let r=0;r<e.count;r++){let a=e.getY(r)+t*(8+r%7)*n*.14;if(a>n*1.4){a=-n*.9;const o=Math.random()*Math.PI*2;e.setX(r,Math.cos(o)*n*.4),e.setZ(r,Math.sin(o)*n*.4)}e.setY(r,a)}e.needsUpdate=!0;const s=this.geyserLife.update(t);this.geyserParticles.material.opacity=.85*s}if(this.ioGlow){const e=this.ioLife.update(t);this.ioGlow.material.opacity=e*.95;const n=this.ctx.getScale().radiusUnits(this.ctx.bodyDef("io"));this.ioGlow.scale.setScalar(n*5*(.7+e*.6)),e<=0&&(this.ctx.scene.remove(this.ioGlow),this.ioGlow.material.dispose(),this.ioGlow=null)}this.auroraBoost>0&&(this.auroraBoost=Math.max(0,this.auroraBoost-t*.06))}}}function F_(){const t=document.createElement("canvas");t.width=96,t.height=96;const e=t.getContext("2d"),n=e.createRadialGradient(96/2,96/2,0,96/2,96/2,96/2);return n.addColorStop(0,"rgba(255,220,160,1)"),n.addColorStop(.35,"rgba(255,110,40,0.5)"),n.addColorStop(1,"rgba(255,60,20,0)"),e.fillStyle=n,e.fillRect(0,0,96,96),new hi(t)}const eo=[{id:"venus",bodyId:"venus",name:"☁️ Венера",place:"Облака на высоте 50 км",conditions:{liquid:{ok:!0,text:"Капли серной кислоты с добавкой воды — жидкая среда есть, но «не наша»."},energy:{ok:!0,text:"Солнечный свет сверху — энергии достаточно."},organics:{ok:!1,text:"Органику пока не нашли, но ищут активно."}},verdict:"Кандидат «на грани»: условия суровые, но в облаках прохладно (+30 °C) и есть вода. Миссия «ИнВенера» уже в пути!"},{id:"ancient-mars",bodyId:"mars",name:"🏜 Древний Марс",place:"Кратер Езеро, озёрные отложения",conditions:{liquid:{ok:!0,text:"Млрд лет назад здесь были озёра и реки — теперь высохло."},energy:{ok:!0,text:"Солнце светит, вулканы грели изнутри."},organics:{ok:!0,text:"Марсоход Curiosity нашёл органические молекулы в глине!"}},verdict:"Все три условия БЫЛИ выполнены! Именно поэтому Perseverance ищет здесь окаменелые следы микробов."},{id:"europa",bodyId:"europa",name:"🧊 Европа",place:"Подледный океан Юпитера",conditions:{liquid:{ok:!0,text:"Океан солёной воды толщиной до 100 км — больше, чем во всех земных!"},energy:{ok:!0,text:"Приливы от Юпитера греют недра, как в гидротермальных источниках."},organics:{ok:!1,text:"Органику доставляют кометы — вероятна, но не подтверждена."}},verdict:"Самый сильный кандидат! Миссия Europa Clipper уже летит проверять океан снаружи."},{id:"enceladus",bodyId:"enceladus",name:"💦 Энцелад",place:"Гейзеры южного полюса Сатурна",conditions:{liquid:{ok:!0,text:"Тёплый океан под льдом — гейзеры доставляют его прямо к нам!"},energy:{ok:!0,text:"Гидротермальные источники на дне — энергия и тепло."},organics:{ok:!0,text:"Кассини нашёл в гейзерах сложные органические молекулы!"}},verdict:"ВСЕ три условия выполнены! Самое доступное место для поиска жизни: не надо бурить лёд — океан сам прилетает."},{id:"titan",bodyId:"titan",name:"🟠 Титан",place:"Метановые озёра и криовулканы",conditions:{liquid:{ok:!0,text:"Жидкий метан на поверхности + возможный водяной океан под льдом."},energy:{ok:!0,text:"Солнце, химия атмосферы, криовулканы — источники энергии есть."},organics:{ok:!0,text:"Титан — «фабрика органики»: там полно сложных молекул!"}},verdict:"Все три условия выполнены, но жизнь тут была бы «иная» — на метане вместо воды. Проверит миссия Dragonfly!"}];class O_{active=!1;ctx;found=new Set;constructor(t){this.ctx=t}activate(){this.active=!0,this.renderPanel(),this.ctx.toast("Квест «Где искать жизнь?»: проверьте три условия жизни на пяти мирах!")}deactivate(){this.active=!1,this.ctx.ui.hideModePanel()}renderPanel(){const t=eo.map(n=>{const s=[n.conditions.liquid,n.conditions.energy,n.conditions.organics].filter(a=>a.ok).length,r=this.found.has(n.id);return`
        <div class="stat">
          <b>${n.name}</b> <span style="color:var(--muted);font-size:10px">— ${n.place}</span>
          <div class="bar-wrap"><div class="bar-fill" style="width:${s/3*100}%"></div></div>
          <div style="font-size:10.5px;color:var(--muted);margin:5px 0">Условий жизни: ${s} из 3</div>
          ${r?`<div class="verdict ${s===3?"ok":"no"}">
                   ${n.conditions.liquid.ok?"✅":"❌"} Жидкая среда: ${n.conditions.liquid.text}<br/>
                   ${n.conditions.energy.ok?"✅":"❌"} Энергия: ${n.conditions.energy.text}<br/>
                   ${n.conditions.organics.ok?"✅":"❌"} Органика: ${n.conditions.organics.text}
                   <div style="margin-top:7px">${n.verdict}</div>
                 </div>`:""}
          <div class="row" style="margin-top:6px">
            <button class="btn tiny" data-life-open="${n.id}">${r?"Скрыть":"Проверить условия"}</button>
            <button class="btn tiny ghost" data-life-go="${n.id}">📍 Лететь туда</button>
          </div>
        </div>`}).join(""),e=eo.filter(n=>[n.conditions.liquid,n.conditions.energy,n.conditions.organics].filter(r=>r.ok).length===3).length;this.ctx.ui.showModePanel("🧬 Где искать жизнь?","Жизни нужны три вещи: <b>жидкая среда</b>, <b>источник энергии</b> и <b>органика</b>. Проверьте кандидатов — где все три условия вместе?",`${t}
       <div class="verdict ok">Полный набор (3 из 3) у ${e} кандидатов. Учёные считают Европу и Энцелад лучшими шансами — и уже строят миссии!</div>
       <button id="life-close" class="btn ghost" style="margin-top:10px">Закрыть квест</button>`);for(const n of Array.from(document.querySelectorAll("[data-life-open]")))n.addEventListener("click",()=>{const s=n.dataset.lifeOpen;this.found.has(s)?this.found.delete(s):this.found.add(s),this.renderPanel()});for(const n of Array.from(document.querySelectorAll("[data-life-go]")))n.addEventListener("click",()=>{const s=eo.find(r=>r.id===n.dataset.lifeGo);this.ctx.selectBody(s.bodyId),this.ctx.toast(`${s.name}: ${s.place}. ${s.verdict}`)});document.getElementById("life-close")?.addEventListener("click",()=>this.deactivate())}update(t){}}class B_{active=!1;group=new he;ctx;velocity=new w;fuel=100;landed=!1;crashed=!1;engineGlow;trail=[];trailLine=null;constructor(t){this.ctx=t,this.group.name="Spacecraft",this.buildShip(),this.engineGlow=new Ss(new Ii({map:z_(),color:6736127,transparent:!0,blending:we,depthWrite:!1})),this.engineGlow.scale.setScalar(1.4),this.engineGlow.position.set(0,0,-1.6),this.group.add(this.engineGlow),this.group.visible=!1,t.scene.add(this.group)}buildShip(){const t=new Kt({color:14212584,metalness:.65,roughness:.35}),e=new Kt({color:2896964,metalness:.5,roughness:.5}),n=new Kt({color:14201946,metalness:.9,roughness:.3}),s=new at(new $e(.55,.72,2.6,12),t);s.rotation.x=Math.PI/2,this.group.add(s);const r=new at(new os(.55,1.1,12),t);r.rotation.x=Math.PI/2,r.position.z=1.85,this.group.add(r);const a=new at(new Te(.32,12,10),e);a.position.set(0,.3,.95),this.group.add(a);for(const o of[-1,1]){const l=new at(new Ke(1.7,.08,1),n);l.position.set(o*1.15,0,-.3),l.rotation.z=o*-.18,this.group.add(l);const c=new at(new $e(.22,.3,.9,10),e);c.rotation.x=Math.PI/2,c.position.set(o*1.15,0,-1.05),this.group.add(c)}}activate(){this.active=!0,this.landed=!1,this.crashed=!1,this.fuel=100,this.velocity.set(0,0,0),this.group.visible=!0,this.group.position.set(0,0,14),this.group.rotation.set(0,0,0),this.ctx.rig.request("SPACECRAFT_FLIGHT"),this.ctx.rig.surfacePose.position.copy(this.group.position).add(new w(0,3.2,-9)),this.renderPanel(),this.ctx.toast("Вы за штурвалом! W — тяга, мышь — поворот, P — парашют. Удачи, космонавт!")}deactivate(){this.active=!1,this.group.visible=!1,this.trail=[],this.trailLine&&(this.ctx.scene.remove(this.trailLine),this.trailLine.geometry.dispose(),this.trailLine.material.dispose(),this.trailLine=null),this.ctx.rig.request("ORBIT"),this.ctx.ui.hideModePanel()}renderPanel(){this.ctx.ui.showModePanel("🚀 Стань космонавтом","Управление кораблём: тяга, инерция и гравитация — всё честно. Попробуйте сесть или уйти на гравитационную пращу!",`
      <div class="stat"><b>Управление</b><br/>
        W / ↑ — тяга вперёд · S / ↓ — реверс<br/>
        A / D — боковой импульс · Shift — ускорение<br/>
        Мышь — ориентация · P — парашют</div>
      <div class="stat" style="margin-top:8px"><b>Приборы</b>
        <div class="bar-wrap"><div id="fuel-bar" class="bar-fill" style="width:100%"></div></div>
        <div id="flight-status" style="font-size:11px;color:var(--muted);margin-top:6px">Топливо 100% · Полёт нормальный</div>
      </div>
      <div class="verdict ok">💡 <b>Гравитационная праща:</b> подлетите к планете «по касательной» — она ускорит вас сама, как Вояджер у Сатурна!</div>
      <button id="slingshot" class="btn small" style="margin-top:8px">⚡ Тренажёр пращи: сброс у Юпитера</button>
      <button id="ship-close" class="btn ghost" style="margin-top:10px">Завершить полёт</button>
      `),document.getElementById("ship-close")?.addEventListener("click",()=>this.deactivate()),document.getElementById("slingshot")?.addEventListener("click",()=>this.slingshot())}slingshot(){this.ctx.selectBody("jupiter");const t=this.ctx.getScale().radiusUnits(this.ctx.bodyDef("jupiter"));this.group.position.set(0,t*.9,t*5.2),this.velocity.set(-7.5,0,-2.2),this.landed=!1,this.crashed=!1,this.ctx.toast("⚡ Праща запущена: смотрите, как гравитация Юпитера «ловит» корабль и швыряет прочь — именно так летел Вояджер!")}update(t,e){if(!this.active)return;const n=this.ctx.bodyDef(this.currentBodyId()),s=n.gravity*.06,r=this.group.position;if(this.group.rotation.x+=e.pitch*t*1.6,this.group.rotation.y+=e.yaw*t*1.6,this.group.rotation.z+=e.roll*t*1.6,e.thrust!==0&&this.fuel>0&&!this.landed){const p=new w(0,0,1).applyQuaternion(this.group.quaternion);this.velocity.addScaledVector(p,e.thrust*t*6.2),this.fuel=Math.max(0,this.fuel-Math.abs(e.thrust)*t*2.4)}if(e.strafe!==0&&this.fuel>0&&!this.landed){const p=new w(1,0,0).applyQuaternion(this.group.quaternion);this.velocity.addScaledVector(p,e.strafe*t*3.2),this.fuel=Math.max(0,this.fuel-Math.abs(e.strafe)*t*1.2)}if(e.lift!==0&&this.fuel>0&&!this.landed){const p=new w(0,1,0).applyQuaternion(this.group.quaternion);this.velocity.addScaledVector(p,e.lift*t*3.2),this.fuel=Math.max(0,this.fuel-Math.abs(e.lift)*t*1.2)}const a=Math.max(r.length(),.001),o=r.clone().multiplyScalar(-s/(a*a)*60);this.velocity.addScaledVector(o,t),e.parachute&&this.velocity.multiplyScalar(Math.exp(-t*1.6)),r.addScaledVector(this.velocity,t);const l=this.ctx.getScale().radiusUnits(n)*1.02;if(a<l&&(r.setLength(l),this.velocity.length()>3.2&&!e.parachute?(this.crashed=!0,this.landed=!1,this.velocity.set(0,0,0),this.ctx.toast("💥 Жёсткая посадка! В следующий раз включайте парашют (клавиша P) раньше.")):(this.landed=!0,this.velocity.set(0,0,0),this.ctx.toast("🎯 Мягкая посадка! Вы — настоящий космонавт."))),this.trail.push(r.clone()),this.trail.length>220&&this.trail.shift(),this.trail.length>2&&!this.landed)if(this.trailLine)this.trailLine.geometry.setFromPoints(this.trail);else{const p=new ee().setFromPoints(this.trail);this.trailLine=new er(p,new bs({color:6736127,transparent:!0,opacity:.5})),this.ctx.scene.add(this.trailLine)}const c=Math.abs(e.thrust)>.05&&this.fuel>0;this.engineGlow.material.opacity=c?.95:.12,this.engineGlow.scale.setScalar(c?1.4+Math.random()*.5:.7);const h=new w(0,3.4,-9.5).applyQuaternion(this.group.quaternion);this.ctx.rig.surfacePose.position.copy(r).add(h),this.ctx.rig.surfacePose.yaw=this.group.rotation.y+Math.PI,this.ctx.rig.surfacePose.pitch=-.28-this.group.rotation.x*.4;const u=document.getElementById("fuel-bar"),d=document.getElementById("flight-status");u&&(u.style.width=`${this.fuel}%`),d&&(d.textContent=this.crashed?"⚠ Авария":this.landed?"✅ Посадка завершена":`Топливо ${Math.round(this.fuel)}% · Скорость ${this.velocity.length().toFixed(1)} м/с`)}currentBodyId(){return this.ctx.focusBodyId()}}function z_(){const t=document.createElement("canvas");t.width=64,t.height=64;const e=t.getContext("2d"),n=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.35,"rgba(100,200,255,0.6)"),n.addColorStop(1,"rgba(40,120,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64),new hi(t)}const eh=[{id:"apollo11",title:"🌙 Аполлон-11: первые люди на Луне",craft:"Сатурн-5 · «Орёл»",steps:[{caption:"16 июля 1969 года. Ракета «Сатурн-5» уносит трёх астронавтов к Луне.",bodyId:"earth",date:"1969-07-16"},{caption:"Корабль «Колумбия» и лунный модуль «Орёл» входят на орбиту Луны.",bodyId:"moon",date:"1969-07-19"},{caption:"«Хьюстон, здесь База Спокойствия. „Орёл“ сел» — 20 июля, кратер Спокойствия.",bodyId:"moon",date:"1969-07-20",toast:"Мягкая посадка! Запаса топлива хватило бы ещё на 25 секунд.",ceremony:"apollo"},{caption:"«Маленький шаг для человека — гигантский скачок для человечества». Армстронг и Олдрин на грунте 2 часа 31 минуту.",bodyId:"moon",date:"1969-07-20"},{caption:"24 июля 1969 года — капсула с астронавтами приводняется в Тихом океане. Миссия выполнена!",bodyId:"earth",date:"1969-07-24"}]},{id:"voyager1",title:"🛸 Вояджер-1: великое путешествие",craft:"Вояджер-1 · гравитационный бильярд",steps:[{caption:"5 сентября 1977 года — старт с Земли. Топлива не хватит до краёв системы… если не хитрить.",bodyId:"earth",date:"1977-09-05"},{caption:"1979: гравитационная праща у Юпитера! Планета разгоняет зонд, как катапульта.",bodyId:"jupiter",date:"1980-03-05",toast:"Экономия топлива: Юпитер подарил Вояджеру 16 км/с скорости!"},{caption:"1980: пролёт мимо Сатурна и Титана. Кольца — крупным планом.",bodyId:"saturn",date:"1980-11-12"},{caption:"1990: знаменитая фотография «Бледная голубая точка» — Земля с расстояния 6 миллиардов км.",bodyId:"earth",date:"1990-02-14"},{caption:"2012: Вояджер-1 выходит в межзвёздное пространство. Его сигнал идёт до Земли более 22 часов!",bodyId:"sun",date:"2012-08-25"}]},{id:"cassini",title:"🪐 Кассини и Гюйгенс: сквозь кольца на Титан",craft:"Кассини · зонд «Гюйгенс»",steps:[{caption:"1997: старт. Чтобы долететь до Сатурна, зонд 4 года набирает скорость пращами у Венеры и Юпитера.",bodyId:"venus",date:"1997-10-15"},{caption:"2004: Кассини входит на орбиту Сатурна — начинаются 13 лет открытий.",bodyId:"saturn",date:"2004-07-01"},{caption:"14 января 2005 года: зонд «Гюйгенс» садится на Титан! Фотографии берега метанового озера.",bodyId:"titan",date:"2005-01-14",toast:"Первая в истории посадка во внешней Солнечной системе."},{caption:"Кассини находит гейзеры Энцелада и пролетает сквозь них — «нюхает» океан.",bodyId:"enceladus",date:"2008-03-12"},{caption:"2017: финальный «Большой Финал» — зонд сгорает в атмосфере Сатурна, чтобы не загрязнить луны.",bodyId:"saturn",date:"2017-09-15"}]},{id:"perseverance",title:"🤖 Perseverance: 7 минут ужаса",craft:"Марсоход Perseverance · вертолёт Ingenuity",steps:[{caption:"30 июля 2020 года — старт с Земли. Впереди 470 миллионов километров.",bodyId:"earth",date:"2020-07-30"},{caption:"18 февраля 2021 года: вход в атмосферу Марса со скоростью 20 000 км/ч. Связь с Землёй — только через 11 минут!",bodyId:"mars",date:"2021-02-18"},{caption:"Парашют, тепловой щит, «небесный кран»: ракетные струи зависают и опускают ровер на тросах.",bodyId:"mars",date:"2021-02-18",toast:"«7 минут ужаса» — посадка полностью автономная: пилотировать с Земли невозможно!",ceremony:"perseverance"},{caption:"Кратер Езеро: дно древнего озера. Ровер бурит камни и ищет следы жизни.",bodyId:"mars",date:"2021-02-18"},{caption:"Ингерти — первый вертолёт на другой планете: 72 полёта в разрежённом воздухе Марса!",bodyId:"mars",date:"2021-04-19"}]},{id:"parker",title:"☀️ Parker Solar Probe: коснувшийся Солнца",craft:"Parker Solar Probe · тепловой щит",steps:[{caption:"2018: старт к Солнцу. Чтобы «упасть» на звезду, нужно тормозить орбитальный разгон Земли.",bodyId:"sun",date:"2018-08-12"},{caption:"Гравитационные пращи у Венеры уменьшают орбиту — зонд сближается с Солнцем.",bodyId:"venus",date:"2018-10-03"},{caption:"2024: зонд влетает в солнечную корону! Температура вокруг — 1 000 000 °C, а щит держит 1400 °C.",bodyId:"sun",date:"2024-12-24",toast:"Скорость 690 000 км/ч — самый быстрый рукотворный объект в истории!"},{caption:"Данные Паркера объясняют солнечный ветер и помогают предсказывать космические бури.",bodyId:"sun",date:"2025-01-01"}]},{id:"clipper",title:"🧊 Europa Clipper: разведка океана",craft:"Europa Clipper · ледяной радар",steps:[{caption:"2024: старт миссии к Европе — спутнику Юпитера со скрытым океаном.",bodyId:"earth",date:"2024-10-14"},{caption:"Зонд летит по сложной траектории с пращами у Марса и Земли.",bodyId:"mars",date:"2025-02-01"},{caption:"2030: 49 пролётов мимо Европы! Радар измеряет толщину льда, спектрометр — состав гейзеров.",bodyId:"europa",date:"2030-04-11",toast:"Зонд не садится: он «нюхает» океан, пролетая сквозь струи."},{caption:"Главная цель: понять, есть ли в подлёдном океане условия для жизни.",bodyId:"europa",date:"2031-01-01"}]}];class k_{active=!1;ctx;missionIndex=0;stepIndex=0;constructor(t){this.ctx=t}activate(){this.active=!0,this.missionIndex=0,this.stepIndex=0,this.renderPanel(),this.applyStep()}deactivate(){this.active=!1,this.autoTimer!==null&&(window.clearInterval(this.autoTimer),this.autoTimer=null),this.ctx.ui.hideModePanel()}get mission(){return eh[this.missionIndex]}applyStep(){const t=this.mission.steps[this.stepIndex];t.date&&this.ctx.setSimDate(new Date(t.date+"T12:00:00Z")),t.bodyId&&this.ctx.selectBody(t.bodyId),t.ceremony&&this.ctx.playCeremony(t.ceremony),t.toast&&this.ctx.toast(t.toast)}renderPanel(){const t=this.mission.steps[this.stepIndex],e=eh.map((s,r)=>`<button class="btn tiny ${r===this.missionIndex?"accent":""}" data-mission="${r}">${s.title}</button>`).join(""),n=this.mission.steps.map((s,r)=>`<div class="stat" style="opacity:${r===this.stepIndex?1:.55};border-left:3px solid ${r===this.stepIndex?"var(--accent)":"transparent"}">
             <b>Шаг ${r+1}</b>${s.date?` · ${new Date(s.date+"T12:00:00Z").toLocaleDateString("ru-RU")}`:""}
             <div style="font-size:11.5px;color:var(--text);margin-top:5px;line-height:1.55">${s.caption}</div>
           </div>`).join("");this.ctx.ui.showModePanel(this.mission.title,`Корабль: <b>${this.mission.craft}</b>. Шаг ${this.stepIndex+1} из ${this.mission.steps.length}. Кнопки «Назад/Далее» проводят через всю миссию — с настоящими датами!`,`<div class="row">${e}</div>
       <div class="stack" style="margin:10px 0">
         <div class="verdict ok">${t.caption}</div>
         <div class="row">
           <button id="mis-prev" class="btn small">◀ Назад</button>
           <button id="mis-next" class="btn small accent">Далее ▶</button>
           <button id="mis-auto" class="btn small ghost">🎬 Авто</button>
         </div>
       </div>
       ${n}
       <button id="mis-close" class="btn ghost" style="margin-top:10px">Закрыть миссии</button>`);for(const s of Array.from(document.querySelectorAll("[data-mission]")))s.addEventListener("click",()=>{this.missionIndex=Number(s.dataset.mission),this.stepIndex=0,this.applyStep(),this.renderPanel()});document.getElementById("mis-prev")?.addEventListener("click",()=>{this.stepIndex=Math.max(0,this.stepIndex-1),this.applyStep(),this.renderPanel()}),document.getElementById("mis-next")?.addEventListener("click",()=>{this.stepIndex=Math.min(this.mission.steps.length-1,this.stepIndex+1),this.applyStep(),this.renderPanel()}),document.getElementById("mis-auto")?.addEventListener("click",()=>this.runAuto()),document.getElementById("mis-close")?.addEventListener("click",()=>this.deactivate())}autoTimer=null;runAuto(){if(this.autoTimer!==null){window.clearInterval(this.autoTimer),this.autoTimer=null,this.ctx.toast("Авто-режим остановлен.");return}this.autoTimer=window.setInterval(()=>{this.stepIndex<this.mission.steps.length-1?(this.stepIndex++,this.applyStep(),this.renderPanel()):(this.autoTimer!==null&&window.clearInterval(this.autoTimer),this.autoTimer=null,this.ctx.toast("Миссия завершена! Выберите другую — или закройте панель."))},5200),this.ctx.toast("Авто-режим: шаги будут сменяться сами каждые 5 секунд.")}update(t){}}class H_{active=!1;ctx;planets=[];counter=0;constructor(t){this.ctx=t}activate(){this.active=!0,this.renderPanel(),this.ctx.toast("Песочница: создайте свою планету и проверьте, уживётся ли она с другими!")}deactivate(){this.active=!1;for(const t of this.planets)this.removePlanet(t);this.planets=[],this.ctx.ui.hideModePanel()}removePlanet(t){this.ctx.spaces.root.remove(t.mesh),t.orbitLine&&(t.orbitLine.removeFromParent(),t.orbitLine.geometry.dispose(),t.orbitLine.material.dispose())}renderPanel(){this.ctx.ui.showModePanel("🛠️ Построй свою систему","Придумайте планету: задайте расстояние от Солнца, размер, наклон оси и кольца. Система сразу проверит, стабильна ли орбита.",`
      <label class="field"><span>Название</span>
        <input type="text" id="sb-name" value="Новая планета" /></label>
      <label class="field"><span>Цвет</span>
        <input type="color" id="sb-color" value="#7fb8ff" /></label>
      <label class="field"><span>Расстояние (а.е.)</span>
        <input type="number" id="sb-dist" value="2.2" step="0.1" min="0.2" max="40" /></label>
      <label class="field"><span>Размер (км)</span>
        <input type="number" id="sb-size" value="8000" step="100" min="100" max="200000" /></label>
      <label class="field"><span>Масса (10²⁴ кг)</span>
        <input type="number" id="sb-mass" value="6" step="0.1" min="0.001" max="20000" /></label>
      <label class="field"><span>Наклон оси (°)</span>
        <input type="number" id="sb-tilt" value="15" step="1" min="0" max="90" /></label>
      <label class="check"><input type="checkbox" id="sb-rings" /> Добавить кольца</label>
      <div class="stack" style="margin-top:10px">
        <button id="sb-add" class="btn accent">🌍 Создать планету</button>
        <button id="sb-clear" class="btn ghost">Очистить песочницу</button>
      </div>
      <div id="sb-result"></div>
      <div class="verdict ok" style="margin-top:10px">
        <b>Закон стабильности:</b> планеты не любят соседей ближе, чем в 2 раза по расстоянию.
        Если орбиты «пересекаются» — система рано или поздно развалится, как это случилось с поясом астероидов.
      </div>
      <button id="sb-close" class="btn ghost" style="margin-top:10px">Закрыть песочницу</button>
      `),document.getElementById("sb-add")?.addEventListener("click",()=>this.addPlanet()),document.getElementById("sb-clear")?.addEventListener("click",()=>{for(const t of this.planets)this.removePlanet(t);this.planets=[],this.ctx.toast("Песочница очищена.")}),document.getElementById("sb-close")?.addEventListener("click",()=>this.deactivate())}addPlanet(){const t=document.getElementById("sb-name").value||`Планета ${++this.counter}`,e=document.getElementById("sb-color").value,n=Math.max(.2,Number(document.getElementById("sb-dist").value)||2),s=Math.max(100,Number(document.getElementById("sb-size").value)||8e3),r=Number(document.getElementById("sb-tilt").value)||0,a=Math.max(.001,Number(document.getElementById("sb-mass").value)||6),o=document.getElementById("sb-rings").checked,l=this.ctx.getScale(),c=l.id==="real"?s/l.kmPerUnit:Math.max(.4,Math.pow(s/6371,.72)*1.6),h=l.id==="real"?n*1495978707e-1/l.kmPerUnit:46*Math.pow(n,.62),u=new he;u.name=`sandbox_${t}`;const d=new at(new Te(c,48,32),new Kt({color:e,roughness:.82,metalness:.05}));d.rotation.z=pe.degToRad(r),u.add(d),this.ctx.spaces.root.add(u);let p=null;o&&(p=new su({innerRadius:c*1.35,outerRadius:c*2.2,planetRadius:c,color:14207144,opacity:.85}),p.mesh.rotation.z=pe.degToRad(r),u.add(p.mesh));const g=[];for(let A=0;A<=128;A++){const P=A/128*Math.PI*2;g.push(new w(Math.cos(P)*h,0,Math.sin(P)*h))}const v=new er(new ee().setFromPoints(g),new bs({color:new _t(e),transparent:!0,opacity:.3}));this.ctx.spaces.root.add(v);const m=1/Math.sqrt(Math.max(n,.2));this.planets.push({name:t,mesh:u,rings:p,orbitLine:v,aAU:n,radiusUnits:c,angle:Math.random()*Math.PI*2,speed:m,tilt:r});const M=this.planets.filter(A=>A!==this.planets[this.planets.length-1]).find(A=>Math.abs(A.aAU-n)<Math.max(A.aAU,n)*.5),S=6674e-14*(a*1e24)/Math.pow(s*1e3,2),_=30*(S/9.81),R=n<.5?"🥵 Слишком жарко: вода выкипит, как на Венере.":n<=1.6?"🌤 Зона обитаемости: возможна жидкая вода и мягкий климат!":n<=4?"❄️ Холодно: вода замёрзнет, как на Марсе.":"🥶 Ледяная пустыня, как у Нептуна.",T=document.getElementById("sb-result");T&&(T.innerHTML=`
        ${M?`<div class="verdict no">⚠ Орбита нестабильна: рядом «${M.name}» (${M.aAU.toFixed(2)} а.е.). Через миллионы лет они столкнутся или одна будет выброшена!</div>`:`<div class="verdict ok">✅ Орбита стабильна! «${t}» (${n.toFixed(2)} а.е.) спокойно обращается вокруг Солнца. Год длится ${Math.pow(n,1.5).toFixed(2)} земных лет.</div>`}
        <div class="stat" style="margin-top:8px">
          <b>Приборы планеты «${t}»</b><br/>
          Тяга на поверхности: <b>${S.toFixed(2)} м/с²</b> (${(S/9.81).toFixed(2)} g)<br/>
          Ребёнок 30 кг весит тут: <b>${_.toFixed(1)} кг</b><br/>
          Климат: ${R}
        </div>`),this.ctx.toast(`Планета «${t}» создана! Спутники орбит: ${this.planets.length}`)}update(t){if(this.active)for(const e of this.planets){e.angle+=t*e.speed*.12;const n=this.ctx.getScale(),s=n.id==="real"?e.aAU*1495978707e-1/n.kmPerUnit:46*Math.pow(e.aAU,.62);e.mesh.position.set(Math.cos(e.angle)*s,0,Math.sin(e.angle)*s),e.mesh.rotation.y+=t*.2}}}class V_{active=!1;ctx;savedExposure=1.05;eclipseSim=!1;constructor(t){this.ctx=t}activate(){this.active=!0,this.savedExposure=this.ctx.renderer.toneMappingExposure,this.ctx.rig.fovOverride=this.ctx.camera.fov,this.renderPanel(),this.ctx.toast("Фотолаборатория: кадрируйте, настраивайте свет и снимайте! UI можно скрыть для чистого кадра.")}deactivate(){this.active=!1,this.eclipseSim=!1,this.ctx.renderer.toneMappingExposure=this.savedExposure,this.ctx.rig.fovOverride=null,document.getElementById("app").classList.remove("photo-clean"),this.ctx.ui.showShell(),this.ctx.ui.hideModePanel()}renderPanel(){this.ctx.ui.showModePanel("📸 Фотолаборатория","Вы — космический фотограф. Настройте фокус и свет, найдите красивый ракурс и сохраните снимок.",`
      <label class="field"><span>Фокусное расстояние (FOV)</span>
        <input type="range" id="ph-fov" min="18" max="95" value="${Math.round(this.ctx.camera.fov)}" /></label>
      <label class="field"><span>Экспозиция</span>
        <input type="range" id="ph-exp" min="30" max="220" value="${Math.round(this.ctx.renderer.toneMappingExposure*100)}" /></label>
      <div class="stack" style="margin-top:10px">
        <button id="ph-eclipse" class="btn">🌘 Найти ближайшее затмение</button>
        <button id="ph-sim" class="btn">${this.eclipseSim?"✓ Модель затмения включена":"🌒 Смоделировать затмение"}</button>
        <button id="ph-clean" class="btn">🖼 Чистый кадр (скрыть интерфейс)</button>
        <button id="ph-shot" class="btn accent">📸 Сохранить снимок</button>
      </div>
      <div class="verdict ok" style="margin-top:10px">
        <b>Советы фотографа:</b> зум на Солнце приглушает экспозицию автоматически. Снимайте терминатор —
        линию рассвета — там самый красивый свет. Затмения — главный трофей!
      </div>
      <button id="ph-close" class="btn ghost" style="margin-top:10px">Выйти из лаборатории</button>
      `),document.getElementById("ph-fov").addEventListener("input",t=>{const e=Number(t.target.value);this.ctx.rig.fovOverride=e,this.ctx.camera.fov=e,this.ctx.camera.updateProjectionMatrix()}),document.getElementById("ph-exp").addEventListener("input",t=>{this.ctx.renderer.toneMappingExposure=Number(t.target.value)/100}),document.getElementById("ph-eclipse")?.addEventListener("click",()=>{const t=tu(new Date);this.ctx.setSimDate(new Date(t.date)),this.ctx.selectBody("moon"),this.ctx.toast(`Машина времени переключилась на: ${t.label}. Уловите тень Луны на Солнце!`)}),document.getElementById("ph-sim")?.addEventListener("click",()=>{this.eclipseSim=!this.eclipseSim,this.ctx.toast(this.eclipseSim?"🌒 Модель затмения: Луна встала на линию «камера — Солнце», угловые размеры дисков совпадают — как в жизни!":"Модель затмения выключена: Луна вернулась на свою орбиту."),this.renderPanel()}),document.getElementById("ph-clean")?.addEventListener("click",()=>{document.getElementById("app").classList.toggle("photo-clean"),this.ctx.toast("Интерфейс скрыт/показан. Снимок будет без UI.")}),document.getElementById("ph-shot")?.addEventListener("click",()=>this.shoot()),document.getElementById("ph-close")?.addEventListener("click",()=>this.deactivate())}shoot(){const t=document.getElementById("app"),e=t.classList.contains("photo-clean");t.classList.add("photo-clean");try{const n=this.ctx.renderer.domElement.toDataURL("image/png"),s=document.createElement("a");s.href=n,s.download=`heliosphere_${Date.now()}.png`,s.click(),this.ctx.toast("📸 Снимок сохранён! Ищите файл в загрузках.")}catch{this.ctx.toast("Не удалось сохранить снимок в этом браузере.")}e||t.classList.remove("photo-clean")}update(t){if(this.eclipseSim){const e=this.ctx.bodyObject("moon"),n=this.ctx.getScale(),s=n.radiusUnits(this.ctx.bodyDef("sun")),r=n.radiusUnits(this.ctx.bodyDef("moon")),a=new w;this.ctx.bodyScenePos("sun",a);const o=this.ctx.camera.position,l=o.distanceTo(a),c=a.clone().sub(o).normalize(),h=l*(r/Math.max(s,1e-6)),u=o.clone().addScaledVector(c,Math.min(h,l*.45));e&&e.group.position.copy(u).sub(this.ctx.spaces.root.position)}}}class G_{mode="explore";ctx;compare;scanner;whatif;lightspeed;dangers;lifequest;spacecraft;missions;sandbox;photo;ringDive=null;ringDiveActive=!1;constructor(t){this.ctx=t,this.compare=new A_(t),this.scanner=new P_(t),this.whatif=new D_(t),this.lightspeed=new L_(t),this.dangers=new N_(t),this.lifequest=new O_(t),this.spacecraft=new B_(t),this.missions=new k_(t),this.sandbox=new H_(t),this.photo=new V_(t)}setMode(t){if(this.mode!==t)switch(this.deactivateCurrent(),this.mode=t,t){case"explore":this.ctx.ui.hideModePanel();break;case"compare":this.compare.activate();break;case"scanner":this.scanner.activate();break;case"lightspeed":this.lightspeed.activate();break;case"whatif":this.whatif.activate();break;case"dangers":this.dangers.activate();break;case"lifequest":this.lifequest.activate();break;case"surface":this.renderSurfacePanel();break;case"fly":this.spacecraft.activate();break;case"missions":this.missions.activate();break;case"sandbox":this.sandbox.activate();break;case"photo":this.photo.activate();break}}deactivateCurrent(){switch(this.stopRingDive(),this.mode){case"compare":this.compare.deactivate();break;case"scanner":this.scanner.deactivate();break;case"lightspeed":this.lightspeed.deactivate();break;case"whatif":this.whatif.deactivate();break;case"dangers":this.dangers.deactivate();break;case"lifequest":this.lifequest.deactivate();break;case"surface":this.ctx.stopSurface(),this.ctx.ui.hideModePanel();break;case"fly":this.spacecraft.deactivate();break;case"missions":this.missions.deactivate();break;case"sandbox":this.sandbox.deactivate();break;case"photo":this.photo.deactivate();break}this.ctx.ui.hideModePanel(),this.lifequest}renderSurfacePanel(){const t=Av.map(e=>{const n=sn(e);return`<button class="btn small" data-land="${e}">👣 ${n.name}</button>`}).join("");this.ctx.ui.showModePanel("👣 Посадка и прогулка","Выберите мир для посадки. WASD — ходьба, мышь — обзор, <b>Пробел</b> — прыжок, <b>G</b> — бросить камень, <b>E</b> — бурить. На Титане можно взлетать, как с крыльями.",`
      <div class="stack">${t}</div>
      <div class="stat" style="margin-top:10px"><b>🚜 Техника и реконструкции</b>
        <div class="stack" style="margin-top:6px">
          <button id="rover-btn" class="btn small">🚜 Марсоход в кратере Езеро</button>
          <button id="cer-apollo" class="btn small">🎬 Посадка «Аполлона-11»</button>
          <button id="cer-perseverance" class="btn small">🎬 Небесный кран Perseverance</button>
        </div>
      </div>
      <div class="stat" style="margin-top:8px"><b>🪐 Специальные режимы</b>
        <div class="stack" style="margin-top:6px">
          <button id="ring-dive" class="btn small">🪐 Нырнуть в кольца Сатурна</button>
          <button id="jupiter-dive" class="btn small">☁️ Погружение в облака Юпитера</button>
        </div>
      </div>
      <button id="surface-close" class="btn ghost" style="margin-top:10px">Закрыть</button>
      `);for(const e of Array.from(document.querySelectorAll("[data-land]")))e.addEventListener("click",()=>{this.ctx.startSurface(e.dataset.land)});document.getElementById("rover-btn")?.addEventListener("click",()=>this.ctx.toggleRover()),document.getElementById("cer-apollo")?.addEventListener("click",()=>this.ctx.playCeremony("apollo")),document.getElementById("cer-perseverance")?.addEventListener("click",()=>this.ctx.playCeremony("perseverance")),document.getElementById("ring-dive")?.addEventListener("click",()=>this.startRingDive()),document.getElementById("jupiter-dive")?.addEventListener("click",()=>this.jupiterDive()),document.getElementById("surface-close")?.addEventListener("click",()=>{this.ctx.stopSurface(),this.stopRingDive(),this.ctx.ui.hideModePanel(),this.mode="explore"})}startRingDive(){this.ctx.selectBody("saturn"),this.ringDive||(this.ringDive=new e_(1400,42),this.ctx.scene.add(this.ringDive.mesh)),this.ringDive.mesh.visible=!0,this.ringDiveActive=!0,this.ctx.rig.request("RING_DIVE"),this.ctx.rig.setDistance(this.ctx.getScale().radiusUnits(sn("saturn"))*1.9),this.ctx.toast("🪐 «Нырнуть в кольца»: вокруг камеры — тысячи ледяных глыб на орбитах. Поверните камеру и любуйтесь!")}stopRingDive(){this.ringDive&&(this.ringDive.mesh.visible=!1),this.ringDiveActive&&(this.ringDiveActive=!1,this.ctx.rig.request("ORBIT"))}jupiterDive(){this.ctx.selectBody("jupiter"),this.ctx.rig.setDistance(this.ctx.getScale().radiusUnits(sn("jupiter"))*1.28),this.ctx.rig.targetElevation=.05,this.ctx.toast("☁️ Погружение: давление растёт — 1 атм… 10… 1000 атмосфер. Зонд «Галилео» передавал данные до глубины 150 км, а потом разрушился. Твёрдой поверхности у Юпитера НЕТ — вы «входите» в бесконечные облака!")}update(t,e,n){this.compare.update(t),this.scanner.update(),this.whatif.update(t),this.lightspeed.update(t),this.dangers.update(t),this.lifequest.update(t),this.spacecraft.update(t,n),this.missions.update(t),this.sandbox.update(t),this.photo.update(t),this.ringDiveActive&&this.ringDive&&(this.ringDive.mesh.position.copy(this.ctx.camera.position),this.ringDive.update(t))}}const dn=document.getElementById("viewport"),jn=new av({canvas:dn,antialias:!0,powerPreference:"high-performance"});jn.toneMapping=Qo;jn.toneMappingExposure=1.05;jn.setClearColor(0,1);const Zn=new Gd,Cn=new en(55,window.innerWidth/window.innerHeight,.1,2e4);Cn.position.set(0,30,240);const da=new ov;da.domElement.id="label-layer";document.getElementById("app").appendChild(da.domElement);const hn=new Ev,Ce=new mv;Zn.add(Ce.root);const Ut=new dv(Cn),_s=new bv(jn,Zn,Cn),Ml=new r_(hn.settings.stars);Zn.add(Ml.group);let be=Zh("museum"),aa=be.radiusUnits(sn("sun"));const Dn=new Ov(aa);Ce.root.add(Dn.group);Zn.add(new Sf(2241365,.16));const fn=new Map;let Gn=new Date,Sn=$s(Gn),oa=1/86400,nh=1/86400,Vs=!0,ls="earth",In="sun",zs="visible";const wi=new d_;Zn.add(wi.group);const no=new Map,Sl=new he;Sl.name="OrbitLines";Ce.root.add(Sl);const ih=Vn(1.05),ze=new w,sh=new w,W_=new w,Vr=new w,ks=new w,rh=new w,ah=new w;function ru(){for(const i of Ts){if(i.id==="sun")continue;const t=new i_(i,{radiusUnits:be.radiusUnits(i),qualitySegs:hn.settings.planetSegs,cloudShadows:hn.settings.cloudShadows,withRings:!0});Ce.root.add(t.group),fn.set(i.id,{def:i,planet:t,worldPosKm:new w,scenePos:new w})}}function X_(){for(const[,i]of fn)i.planet.dispose(),Ce.root.remove(i.planet.group);fn.clear()}function au(){for(const i of no.values())i.removeFromParent(),i.geometry.dispose(),i.material.dispose();no.clear();for(const i of Ts){if(i.id==="sun")continue;const t=[],e=i.parent?He[i.parent]:null;if(i.parent==="sun"||!e){const l=Math.max(i.periodDays,1),c=i.aAU??1;for(let h=0;h<=220;h++){const u=Sn+h/220*l;Qh(i.id,u,ze);const d=ze.length();if(be.id==="real")t.push(ze.clone().multiplyScalar(ua/be.kmPerUnit));else{const p=ze.clone().normalize(),g=be.orbitUnits(i)*(d/Math.max(c,1e-6));t.push(p.multiplyScalar(g))}}}else{const l=be.moonOrbitUnits(i),c=pe.degToRad(i.inclinationDeg+12);for(let h=0;h<=96;h++){const u=h/96*Math.PI*2;t.push(new w(Math.cos(u)*l,Math.sin(u)*l*Math.sin(c),Math.sin(u)*l*Math.cos(c)))}}const n=new ee().setFromPoints(t),s=new bs({color:new _t(i.color).lerp(new _t(8956671),.35),transparent:!0,opacity:i.kind==="moon"?.1:.2,depthWrite:!1}),r=new er(n,s);no.set(i.id,r);const a=i.parent?fn.get(i.parent):null;a&&i.parent!=="sun"?a.planet.group.add(r):Sl.add(r)}}function q_(){Dn.group.position.set(0,0,0);for(const[,t]of fn){const{def:e}=t;if(vs(e,Sn,ze),t.worldPosKm.copy(ze),e.parent&&e.parent!=="sun"){const n=He[e.parent],s=fn.get(e.parent);s&&(vs(n,Sn,sh),ze.sub(sh),be.id==="real"?ze.multiplyScalar(1/be.kmPerUnit):ze.normalize().multiplyScalar(be.moonOrbitUnits(e)),ze.add(s.scenePos))}else if(be.id==="museum"){const n=ze.length()/ua,s=ze.normalize();ze.copy(s).multiplyScalar(be.orbitUnits(e)*(n/Math.max(e.aAU??1,1e-6)))}else ze.multiplyScalar(1/be.kmPerUnit);t.scenePos.copy(ze),t.planet.group.position.copy(ze)}const i=fn.get(In);i?Ce.applyFocus(i.scenePos):Ce.applyFocus(W_.set(0,0,0))}function Y_(){if(Ut.state==="SURFACE_WALK"||Ut.state==="SPACECRAFT_FLIGHT"||Ut.state==="CINEMATIC_INTRO")return;const i=sn(In),t=be.radiusUnits(i);Ut.bodyRadius=t,Ce.mode==="SYSTEM_SPACE"&&Ut.targetDistance<t*14?(Ce.setMode("ORBIT_LOCAL_SPACE",t),Ut.state!=="CUTAWAY"&&Ut.state!=="RING_DIVE"&&Ut.request("ORBIT")):Ce.mode==="ORBIT_LOCAL_SPACE"&&Ut.targetDistance>t*30&&(Ce.setMode("SYSTEM_SPACE",t),Ut.state!=="CUTAWAY"&&Ut.state!=="RING_DIVE"&&Ut.request("SYSTEM"))}function xs(){return be.id==="real"?2400:240}function ys(i,t=!0){if(!He[i])return;ls=i,In=i,zt.selectBody(i),zt.showInfo(sn(i));const e=sn(i),n=be.radiusUnits(e);Ut.setFocusBody(n),t&&(Ut.frameBody(n,i==="sun"?3:3.8),Ut.targetElevation=.35,Ut.targetAzimuth=Math.PI*.32),ou(),Ce.setMode(Ut.targetDistance<n*14?"ORBIT_LOCAL_SPACE":"SYSTEM_SPACE",n)}function ou(){if(!wi.active)return;const i=wi.group.parent;wi.close(),i&&i.remove(wi.group),zt.setCutawayCaption(null),zt.setCutawayButton(!1)}function lu(){const i=sn(ls),t=be.radiusUnits(i),e=ls==="sun"?Dn.group:fn.get(ls)?.planet.tiltGroup;if(!e)return;wi.toggle(i,t,e)?(Ut.request("CUTAWAY"),Ut.targetDistance=Math.max(Ut.targetDistance,t*3.1),zt.setCutawayCaption(`<h3>${i.name}: что внутри</h3>${u_(i)}`),zt.setCutawayButton(!0),Ce.setMode("ORBIT_LOCAL_SPACE",t)):(Ut.request("ORBIT"),zt.setCutawayCaption(null),zt.setCutawayButton(!1))}const cu=new wv;let ai;const zt=new __({onSelectBody:i=>ys(i),onToggleCutaway:()=>lu(),onQuality:i=>{hn.setPreset(i),hn.applyRenderer(jn),_s.setEnabled(hn.settings.bloom),_s.setBloomStrength(hn.settings.bloomStrength),Ml.setStarCount(hn.settings.stars);for(const[,t]of fn)t.planet.setLOD(1);zt.toast(`Графика: ${i}. Качество применено.`)},onScale:i=>{ai.isActive&&ai.skip(),be=Zh(i);const t=be.radiusUnits(sn("sun"));Dn.group.scale.setScalar(t/aa),aa=t,X_(),ru(),au(),ys(ls,!0),zt.toast(i==="real"?"Реальные пропорции: планеты почти невидимы — так и есть в космосе!":"Наглядный музейный масштаб: всё видно сразу.")},onSunMode:()=>{zs=zs==="visible"?"sdo":"visible",Dn.setViewMode(zs),zt.setSunModeLabel(zs==="sdo"),zt.toast(zs==="sdo"?"УФ-фильтр SDO: видна магнитная плазма при 1 000 000 °C.":"Кинематографический видимый свет.")},onAudioToggle:async()=>{const i=await cu.toggle();zt.setAudioState(i)},onIntro:()=>{ou(),ai.start()},onIntroSkip:()=>{ai.skip()},onDateChange:i=>{Gn=i,Sn=$s(Gn),zt.setDate(Gn)},onSpeedChange:i=>{nh=i,Vs&&(oa=i)},onPlayPause:()=>{Vs=!Vs,oa=Vs?nh:0},onModeChange:i=>{Ti.setMode(i)},onBirthday:()=>{const i=window.prompt("Введите вашу дату рождения (ГГГГ-ММ-ДД):","2012-06-01");if(!i)return;const t=new Date(i);if(isNaN(t.getTime())){zt.toast("Не удалось разобрать дату. Попробуйте формат ГГГГ-ММ-ДД.");return}Gn=t,Sn=$s(t),zt.setDate(t),zt.toast(`Машина времени: ${t.toLocaleDateString("ru-RU")}. Так выглядела Солнечная система в ваш день рождения!`)},onDatePreset:i=>{const t=new Date(i.includes("T")?i:i+"T12:00:00Z");if(isNaN(t.getTime()))return;Gn=t,Sn=$s(t),zt.setDate(t);const e=tu(t);zt.toast(`Дата: ${t.toLocaleDateString("ru-RU")}. Ближайшее затмение: ${e.label}`)}});ai=new y_(Ut,zt,Dn,()=>{Ut.resetSystemView(),Ut.targetDistance=xs(),Ut.setDistance(xs()),In="sun",ys("earth",!1),zt.toast("Добро пожаловать в «Гелиосферу»! Выберите тело слева или вращайте камеру мышью.")});let Ee=null;function bl(i){Ce.root.visible=i}function io(i){hu();const t=sn(i);Ee=new E_(t,hn.settings.terrainSegs),Zn.add(Ee.group),bl(!1),Ce.setMode("SURFACE_PATCH_SPACE",be.radiusUnits(t)),Ut.request("SURFACE_WALK"),Ut.terrainHeight=2.2,ls=i,In=i,zt.selectBody(i),zt.showInfo(t),i==="venus"?$_():zt.toast(`Посадка: ${t.name}. WASD — шаг, мышь — осмотреться, Пробел — прыжок, G — бросить камень, E — бурить!`)}function $_(){const i=document.getElementById("descent-overlay"),t=document.getElementById("descent-text");i.classList.remove("hidden"),i.style.opacity="1";const e=[[0,"☁️ Вы входите в плотные облака серной кислоты…"],[2200,"🌡 Температура растёт: +200 °C… +400 °C…"],[4400,"⚖️ Давление 92 атмосферы — как на глубине 900 м в океане."],[6600,"📡 РАДАР ВКЛЮЧЁН: облака стали прозрачными!"]];for(const[n,s]of e)window.setTimeout(()=>{t.style.opacity="0",window.setTimeout(()=>{t.textContent=s,t.style.opacity="1"},250)},n);window.setTimeout(()=>{i.style.opacity="0",dn.style.filter="grayscale(1) contrast(1.5) brightness(1.12)",window.setTimeout(()=>{dn.style.filter="none",i.classList.add("hidden"),zt.toast("Посадка на раскалённую равнину Венеры: +465 °C. Блинчатые купола — лавовые вулканы этой кухни!")},3200)},9e3)}function hu(){if(Ee&&(Zn.remove(Ee.group),Ee.dispose(),Ee=null,bl(!0),Ut.terrainHeight=0,Ut.state==="SURFACE_WALK")){Ut.request("ORBIT");const i=be.radiusUnits(sn(In));Ce.setMode("ORBIT_LOCAL_SPACE",i)}}const K_={scene:Zn,camera:Cn,renderer:jn,rig:Ut,spaces:Ce,postfx:_s,quality:hn,sun:Dn,ui:zt,getScale:()=>be,getSimJD:()=>Sn,setSimDate:i=>{Gn=i,Sn=$s(i),zt.setDate(i)},selectBody:(i,t=!0)=>ys(i,t),focusBodyId:()=>In,bodyDef:i=>sn(i),bodyObject:i=>fn.get(i)?.planet??null,bodyScenePos:(i,t)=>{if(i==="sun")return t.copy(Dn.group.position);const e=fn.get(i);return e?t.copy(e.scenePos):t.set(0,0,0)},toast:i=>zt.toast(i),setSystemVisible:bl,startSurface:io,stopSurface:hu,playCeremony:i=>{const t=i==="apollo"?"moon":"mars";(!Ee||In!==t)&&io(t),Ee?.startCeremony(i),zt.toast(i==="apollo"?"🎬 Реконструкция: посадка «Аполлона-11» на Луну, 20 июля 1969 года.":"🎬 Реконструкция: «7 минут ужаса» и небесный кран Perseverance на Марсе.")},toggleRover:()=>{Ee||io("mars"),Ee?.toggleRover(),zt.toast(Ee?.mode==="rover"?"🚜 Вы за рулём марсохода! WASD — езда, E — бурить камни, G — камень в космосе.":"👣 Вы вышли из ровера и продолжаете пешком.")}},Ti=new G_(K_);window.addEventListener("helios:drill",i=>{const t=i.detail;zt.toast(`🔬 Образец ${t.count}: ${t.sample} (${t.body}). Бурение завершено!`)});window.addEventListener("helios:ceremony",i=>{const t=i.detail;zt.toast(t.msg,5200)});const xn={down:!1,button:0,x:0,y:0},xe=new Set,oi={dx:0,dy:0};let Ko=!1,jo=!1,Zo=!1;dn.addEventListener("pointerdown",i=>{xn.down=!0,xn.button=i.button,xn.x=i.clientX,xn.y=i.clientY,dn.classList.add("dragging"),dn.setPointerCapture(i.pointerId)});dn.addEventListener("pointermove",i=>{if(!xn.down)return;const t=i.clientX-xn.x,e=i.clientY-xn.y;xn.x=i.clientX,xn.y=i.clientY,Ee||Ti.mode==="fly"?(oi.dx+=t,oi.dy+=e):xn.button===2?Ut.addInput({dragDX:0,dragDY:0,panDX:t,panDY:e,zoom:0}):Ut.addInput({dragDX:t,dragDY:e,panDX:0,panDY:0,zoom:0})});dn.addEventListener("pointerup",i=>{xn.down=!1,dn.classList.remove("dragging"),dn.releasePointerCapture(i.pointerId)});dn.addEventListener("wheel",i=>{i.preventDefault(),!Ee&&Ut.addInput({dragDX:0,dragDY:0,panDX:0,panDY:0,zoom:i.deltaY})},{passive:!1});dn.addEventListener("contextmenu",i=>i.preventDefault());window.addEventListener("keydown",i=>{const t=i.target?.tagName;if(t==="INPUT"||t==="SELECT"||t==="TEXTAREA")return;if(xe.add(i.code),i.code==="Space"){i.preventDefault(),Ee?Ko=!0:Ti.mode==="explore"&&lu();return}if(i.code==="KeyE"&&Ee){jo=!0;return}if(i.code==="KeyG"&&Ee){Zo=!0;return}const e={Digit1:"sun",Digit2:"mercury",Digit3:"venus",Digit4:"earth",Digit5:"mars",Digit6:"jupiter",Digit7:"saturn",Digit8:"uranus",Digit9:"neptune"};if(e[i.code]&&Ti.mode==="explore"){ys(e[i.code]);return}if(i.code==="KeyR"&&Ti.mode==="explore"){Ut.resetSystemView(),Ut.targetDistance=xs(),Ut.setDistance(xs()),In="sun",zt.toast("Вид сброшен к обзору системы.");return}i.code==="KeyM"&&cu.toggle().then(n=>zt.setAudioState(n))});window.addEventListener("keyup",i=>{xe.delete(i.code)});function oh(){const i=(xe.has("KeyW")||xe.has("ArrowUp")?1:0)-(xe.has("KeyS")||xe.has("ArrowDown")?1:0),t=(xe.has("KeyD")||xe.has("ArrowRight")?1:0)-(xe.has("KeyA")||xe.has("ArrowLeft")?1:0),e={forward:i,side:t,jump:Ko,run:xe.has("ShiftLeft")||xe.has("ShiftRight"),action:jo,throwStone:Zo};return Ko=!1,jo=!1,Zo=!1,e}function j_(){return{thrust:(xe.has("KeyW")||xe.has("ArrowUp")?1:0)-(xe.has("KeyS")||xe.has("ArrowDown")?1:0),strafe:(xe.has("KeyD")?1:0)-(xe.has("KeyA")?1:0),lift:(xe.has("Space")?1:0)-(xe.has("ControlLeft")?1:0),pitch:-oi.dy*.05,yaw:-oi.dx*.05,roll:(xe.has("KeyE")?1:0)-(xe.has("KeyQ")?1:0),parachute:xe.has("KeyP")}}function uu(){const i=window.innerWidth,t=window.innerHeight;Cn.aspect=i/t,Cn.updateProjectionMatrix(),jn.setSize(i,t),_s.setSize(i,t),da.setSize(i,t)}window.addEventListener("resize",uu);const Z_=new kh;let so=0;function du(){requestAnimationFrame(du);const i=Math.min(Z_.getDelta(),.1);Vs&&oa!==0&&(Sn+=oa*i,Gn=Jh(Sn),so+=i,so>.5&&(so=0,zt.setDate(Gn))),q_(),Dn.group.getWorldPosition(Vr),Cn.getWorldPosition(ks),Dn.update(i);for(const[,t]of fn)t.planet.update(i,Vr,ks,Sn);if(Y_(),Ee&&(Ee.update(i,oh(),oi.dx,oi.dy),Ut.surfacePose.position.copy(Ee.position),Ut.surfacePose.yaw=Ee.yaw,Ut.surfacePose.pitch=Ee.pitch),Ti.update(i,oh(),j_()),oi.dx=0,oi.dy=0,Ut.update(i),Ce.update(i),Ce.updateCamera(Cn,i),Ti.mode!=="photo"){rh.set(0,0,-1).applyQuaternion(Cn.quaternion),ah.copy(Vr).sub(ks).normalize();const t=Math.max(0,rh.dot(ah)),e=ks.distanceTo(Vr),n=pe.clamp(be.radiusUnits(sn("sun"))*22/Math.max(e,.001),.25,1.4),s=1.05-Math.pow(t,8)*.5*n;En(ih,s,i,1.4),jn.toneMappingExposure=ih.value}Ml.follow(ks),ai.isActive&&ai.update(i),wi.update(i),_s.render(),da.render(Zn,Cn)}async function J_(){zt.setLoadingProgress(.15),ru(),zt.setLoadingProgress(.55),au(),zt.setLoadingProgress(.8),hn.applyRenderer(jn),_s.setBloomStrength(hn.settings.bloomStrength),uu(),ys("earth",!1),Ut.resetSystemView(),Ut.targetDistance=xs(),Ut.setDistance(xs()),In="sun",Ce.setMode("SYSTEM_SPACE",aa),zt.setLoadingProgress(1),await new Promise(i=>setTimeout(i,350)),zt.hideLoading(),du(),ai.start()}J_();
