(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const uh="170",Em=0,ou=1,Am=2,Rf=1,Lf=2,xi=3,Si=0,tn=1,De=2,Vi=0,qs=1,Ra=2,au=3,cu=4,Cm=5,ls=100,Rm=101,Lm=102,Pm=103,Im=104,Nm=200,Dm=201,Um=202,km=203,rl=204,ol=205,Om=206,Fm=207,Bm=208,zm=209,Hm=210,Vm=211,Gm=212,Wm=213,$m=214,al=0,cl=1,ll=2,Ks=3,hl=4,ul=5,dl=6,fl=7,Pf=0,qm=1,Xm=2,Gi=0,jm=1,Ym=2,Km=3,dh=4,Jm=5,Zm=6,Qm=7,lu="attached",tg="detached",If=300,Js=301,Zs=302,pl=303,ml=304,Va=306,Xi=1e3,zi=1001,La=1002,cn=1003,Nf=1004,zr=1005,Mn=1006,xa=1007,yi=1008,wi=1009,Df=1010,Uf=1011,Qr=1012,fh=1013,ps=1014,Wn=1015,po=1016,ph=1017,mh=1018,Qs=1020,kf=35902,Of=1021,Ff=1022,In=1023,Bf=1024,zf=1025,Xs=1026,tr=1027,gh=1028,vh=1029,Hf=1030,xh=1031,_h=1033,_a=33776,ya=33777,Ma=33778,ba=33779,gl=35840,vl=35841,xl=35842,_l=35843,yl=36196,Ml=37492,bl=37496,Sl=37808,wl=37809,Tl=37810,El=37811,Al=37812,Cl=37813,Rl=37814,Ll=37815,Pl=37816,Il=37817,Nl=37818,Dl=37819,Ul=37820,kl=37821,Sa=36492,Ol=36494,Fl=36495,Vf=36283,Bl=36284,zl=36285,Hl=36286,to=2300,eo=2301,ec=2302,hu=2400,uu=2401,du=2402,eg=2500,ng=0,Gf=1,Vl=2,ig=3200,sg=3201,Wf=0,rg=1,Fi="",Ee="srgb",en="srgb-linear",Ga="linear",_e="srgb",bs=7680,fu=519,og=512,ag=513,cg=514,$f=515,lg=516,hg=517,ug=518,dg=519,Gl=35044,pu="300 es",Mi=2e3,Pa=2001;class dr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let mu=1234567;const $r=Math.PI/180,er=180/Math.PI;function Nn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]).toLowerCase()}function Fe(i,t,e){return Math.max(t,Math.min(e,i))}function yh(i,t){return(i%t+t)%t}function fg(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function pg(i,t,e){return i!==t?(e-i)/(t-i):0}function qr(i,t,e){return(1-e)*i+e*t}function mg(i,t,e,n){return qr(i,t,1-Math.exp(-e*n))}function gg(i,t=1){return t-Math.abs(yh(i,t*2)-t)}function vg(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function xg(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function _g(i,t){return i+Math.floor(Math.random()*(t-i+1))}function yg(i,t){return i+Math.random()*(t-i)}function Mg(i){return i*(.5-Math.random())}function bg(i){i!==void 0&&(mu=i);let t=mu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Sg(i){return i*$r}function wg(i){return i*er}function Tg(i){return(i&i-1)===0&&i!==0}function Eg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ag(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Cg(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*m,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*m,a*l);break;case"ZYZ":i.set(c*m,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Gn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ve(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ia={DEG2RAD:$r,RAD2DEG:er,generateUUID:Nn,clamp:Fe,euclideanModulo:yh,mapLinear:fg,inverseLerp:pg,lerp:qr,damp:mg,pingpong:gg,smoothstep:vg,smootherstep:xg,randInt:_g,randFloat:yg,randFloatSpread:Mg,seededRandom:bg,degToRad:Sg,radToDeg:wg,isPowerOfTwo:Tg,ceilPowerOfTwo:Eg,floorPowerOfTwo:Ag,setQuaternionFromProperEuler:Cg,normalize:ve,denormalize:Gn};class Z{constructor(t=0,e=0){Z.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qt{constructor(t,e,n,s,r,o,a,c,l){Qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],v=s[0],g=s[3],p=s[6],y=s[1],_=s[4],x=s[7],L=s[2],E=s[5],C=s[8];return r[0]=o*v+a*y+c*L,r[3]=o*g+a*_+c*E,r[6]=o*p+a*x+c*C,r[1]=l*v+h*y+u*L,r[4]=l*g+h*_+u*E,r[7]=l*p+h*x+u*C,r[2]=d*v+f*y+m*L,r[5]=d*g+f*_+m*E,r[8]=d*p+f*x+m*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,m=e*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return t[0]=u*v,t[1]=(s*l-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=d*v,t[4]=(h*e-s*c)*v,t[5]=(s*r-a*e)*v,t[6]=f*v,t[7]=(n*c-l*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(nc.makeScale(t,e)),this}rotate(t){return this.premultiply(nc.makeRotation(-t)),this}translate(t,e){return this.premultiply(nc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const nc=new Qt;function qf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function no(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Rg(){const i=no("canvas");return i.style.display="block",i}const gu={};function Hr(i){i in gu||(gu[i]=!0,console.warn(i))}function Lg(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Pg(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ig(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ae={enabled:!0,workingColorSpace:en,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===_e&&(i.r=bi(i.r),i.g=bi(i.g),i.b=bi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===_e&&(i.r=js(i.r),i.g=js(i.g),i.b=js(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Fi?Ga:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function js(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const vu=[.64,.33,.3,.6,.15,.06],xu=[.2126,.7152,.0722],_u=[.3127,.329],yu=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mu=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ae.define({[en]:{primaries:vu,whitePoint:_u,transfer:Ga,toXYZ:yu,fromXYZ:Mu,luminanceCoefficients:xu,workingColorSpaceConfig:{unpackColorSpace:Ee},outputColorSpaceConfig:{drawingBufferColorSpace:Ee}},[Ee]:{primaries:vu,whitePoint:_u,transfer:_e,toXYZ:yu,fromXYZ:Mu,luminanceCoefficients:xu,outputColorSpaceConfig:{drawingBufferColorSpace:Ee}}});let Ss;class Ng{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ss===void 0&&(Ss=no("canvas")),Ss.width=t.width,Ss.height=t.height;const n=Ss.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ss}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=no("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=bi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(bi(e[n]/255)*255):e[n]=bi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Dg=0;class Xf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=Nn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ic(s[o].image)):r.push(ic(s[o]))}else r=ic(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ic(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ng.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ug=0;class Be extends dr{constructor(t=Be.DEFAULT_IMAGE,e=Be.DEFAULT_MAPPING,n=zi,s=zi,r=Mn,o=yi,a=In,c=wi,l=Be.DEFAULT_ANISOTROPY,h=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ug++}),this.uuid=Nn(),this.name="",this.source=new Xf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Z(0,0),this.repeat=new Z(1,1),this.center=new Z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==If)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xi:t.x=t.x-Math.floor(t.x);break;case zi:t.x=t.x<0?0:1;break;case La:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xi:t.y=t.y-Math.floor(t.y);break;case zi:t.y=t.y<0?0:1;break;case La:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=If;Be.DEFAULT_ANISOTROPY=1;class de{constructor(t=0,e=0,n=0,s=1){de.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],v=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,x=(f+1)/2,L=(p+1)/2,E=(h+d)/4,C=(u+v)/4,P=(m+g)/4;return _>x&&_>L?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=E/n,r=C/n):x>L?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=E/s,r=P/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=C/r,s=P/r),this.set(n,s,r,e),this}let y=Math.sqrt((g-m)*(g-m)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(u-v)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kg extends dr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Be(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Xf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ms extends kg{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class jf extends Be{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Og extends Be{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],m=r[o+2],v=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=v;return}if(u!==v||c!==d||l!==f||h!==m){let g=1-a;const p=c*d+l*f+h*m+u*v,y=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const L=Math.sqrt(_),E=Math.atan2(L,p*y);g=Math.sin(g*E)/L,a=Math.sin(a*E)/L}const x=a*y;if(c=c*g+d*x,l=l*g+f*x,h=h*g+m*x,u=u*g+v*x,g===1-a){const L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*u+c*f-l*d,t[e+1]=c*m+h*d+l*u-a*f,t[e+2]=l*m+h*f+a*d-c*u,t[e+3]=h*m-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Fe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(t=0,e=0,n=0){w.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return sc.copy(this).projectOnVector(t),this.sub(sc)}reflect(t){return this.sub(sc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sc=new w,bu=new nn;class Ai{constructor(t=new w(1/0,1/0,1/0),e=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Fn):Fn.fromBufferAttribute(r,o),Fn.applyMatrix4(t.matrixWorld),this.expandByPoint(Fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Eo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Eo.copy(n.boundingBox)),Eo.applyMatrix4(t.matrixWorld),this.union(Eo)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Fn),Fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(br),Ao.subVectors(this.max,br),ws.subVectors(t.a,br),Ts.subVectors(t.b,br),Es.subVectors(t.c,br),Pi.subVectors(Ts,ws),Ii.subVectors(Es,Ts),Zi.subVectors(ws,Es);let e=[0,-Pi.z,Pi.y,0,-Ii.z,Ii.y,0,-Zi.z,Zi.y,Pi.z,0,-Pi.x,Ii.z,0,-Ii.x,Zi.z,0,-Zi.x,-Pi.y,Pi.x,0,-Ii.y,Ii.x,0,-Zi.y,Zi.x,0];return!rc(e,ws,Ts,Es,Ao)||(e=[1,0,0,0,1,0,0,0,1],!rc(e,ws,Ts,Es,Ao))?!1:(Co.crossVectors(Pi,Ii),e=[Co.x,Co.y,Co.z],rc(e,ws,Ts,Es,Ao))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(li),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const li=[new w,new w,new w,new w,new w,new w,new w,new w],Fn=new w,Eo=new Ai,ws=new w,Ts=new w,Es=new w,Pi=new w,Ii=new w,Zi=new w,br=new w,Ao=new w,Co=new w,Qi=new w;function rc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Qi.fromArray(i,r);const a=s.x*Math.abs(Qi.x)+s.y*Math.abs(Qi.y)+s.z*Math.abs(Qi.z),c=t.dot(Qi),l=e.dot(Qi),h=n.dot(Qi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Fg=new Ai,Sr=new w,oc=new w;class ni{constructor(t=new w,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Fg.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Sr.subVectors(t,this.center);const e=Sr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Sr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(oc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Sr.copy(t.center).add(oc)),this.expandByPoint(Sr.copy(t.center).sub(oc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hi=new w,ac=new w,Ro=new w,Ni=new w,cc=new w,Lo=new w,lc=new w;class mo{constructor(t=new w,e=new w(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=hi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hi.copy(this.origin).addScaledVector(this.direction,e),hi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ac.copy(t).add(e).multiplyScalar(.5),Ro.copy(e).sub(t).normalize(),Ni.copy(this.origin).sub(ac);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ro),a=Ni.dot(this.direction),c=-Ni.dot(Ro),l=Ni.lengthSq(),h=Math.abs(1-o*o);let u,d,f,m;if(h>0)if(u=o*c-a,d=o*a-c,m=r*h,u>=0)if(d>=-m)if(d<=m){const v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ac).addScaledVector(Ro,d),f}intersectSphere(t,e){hi.subVectors(t.center,this.origin);const n=hi.dot(this.direction),s=hi.dot(hi)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,hi)!==null}intersectTriangle(t,e,n,s,r){cc.subVectors(e,t),Lo.subVectors(n,t),lc.crossVectors(cc,Lo);let o=this.direction.dot(lc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ni.subVectors(this.origin,t);const c=a*this.direction.dot(Lo.crossVectors(Ni,Lo));if(c<0)return null;const l=a*this.direction.dot(cc.cross(Ni));if(l<0||c+l>o)return null;const h=-a*Ni.dot(lc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(t,e,n,s,r,o,a,c,l,h,u,d,f,m,v,g){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,f,m,v,g)}set(t,e,n,s,r,o,a,c,l,h,u,d,f,m,v,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/As.setFromMatrixColumn(t,0).length(),r=1/As.setFromMatrixColumn(t,1).length(),o=1/As.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,m=a*h,v=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+m*l,e[5]=d-v*l,e[9]=-a*c,e[2]=v-d*l,e[6]=m+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,m=l*h,v=l*u;e[0]=d+v*a,e[4]=m*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=v+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,m=l*h,v=l*u;e[0]=d-v*a,e[4]=-o*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=v-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,f=o*u,m=a*h,v=a*u;e[0]=c*h,e[4]=m*l-f,e[8]=d*l+v,e[1]=c*u,e[5]=v*l+d,e[9]=f*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,m=a*c,v=a*l;e[0]=c*h,e[4]=v-d*u,e[8]=m*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+m,e[10]=d-v*u}else if(t.order==="XZY"){const d=o*c,f=o*l,m=a*c,v=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+v,e[5]=o*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Bg,t,zg)}lookAt(t,e,n){const s=this.elements;return xn.subVectors(t,e),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Di.crossVectors(n,xn),Di.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Di.crossVectors(n,xn)),Di.normalize(),Po.crossVectors(xn,Di),s[0]=Di.x,s[4]=Po.x,s[8]=xn.x,s[1]=Di.y,s[5]=Po.y,s[9]=xn.y,s[2]=Di.z,s[6]=Po.z,s[10]=xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],v=n[6],g=n[10],p=n[14],y=n[3],_=n[7],x=n[11],L=n[15],E=s[0],C=s[4],P=s[8],S=s[12],M=s[1],I=s[5],G=s[9],B=s[13],W=s[2],J=s[6],$=s[10],st=s[14],q=s[3],ht=s[7],it=s[11],wt=s[15];return r[0]=o*E+a*M+c*W+l*q,r[4]=o*C+a*I+c*J+l*ht,r[8]=o*P+a*G+c*$+l*it,r[12]=o*S+a*B+c*st+l*wt,r[1]=h*E+u*M+d*W+f*q,r[5]=h*C+u*I+d*J+f*ht,r[9]=h*P+u*G+d*$+f*it,r[13]=h*S+u*B+d*st+f*wt,r[2]=m*E+v*M+g*W+p*q,r[6]=m*C+v*I+g*J+p*ht,r[10]=m*P+v*G+g*$+p*it,r[14]=m*S+v*B+g*st+p*wt,r[3]=y*E+_*M+x*W+L*q,r[7]=y*C+_*I+x*J+L*ht,r[11]=y*P+_*G+x*$+L*it,r[15]=y*S+_*B+x*st+L*wt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],v=t[7],g=t[11],p=t[15];return m*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+v*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+g*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],v=t[13],g=t[14],p=t[15],y=u*g*l-v*d*l+v*c*f-a*g*f-u*c*p+a*d*p,_=m*d*l-h*g*l-m*c*f+o*g*f+h*c*p-o*d*p,x=h*v*l-m*u*l+m*a*f-o*v*f-h*a*p+o*u*p,L=m*u*c-h*v*c-m*a*d+o*v*d+h*a*g-o*u*g,E=e*y+n*_+s*x+r*L;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/E;return t[0]=y*C,t[1]=(v*d*r-u*g*r-v*s*f+n*g*f+u*s*p-n*d*p)*C,t[2]=(a*g*r-v*c*r+v*s*l-n*g*l-a*s*p+n*c*p)*C,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*C,t[4]=_*C,t[5]=(h*g*r-m*d*r+m*s*f-e*g*f-h*s*p+e*d*p)*C,t[6]=(m*c*r-o*g*r-m*s*l+e*g*l+o*s*p-e*c*p)*C,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*f+e*c*f)*C,t[8]=x*C,t[9]=(m*u*r-h*v*r-m*n*f+e*v*f+h*n*p-e*u*p)*C,t[10]=(o*v*r-m*a*r+m*n*l-e*v*l-o*n*p+e*a*p)*C,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*C,t[12]=L*C,t[13]=(h*v*s-m*u*s+m*n*d-e*v*d-h*n*g+e*u*g)*C,t[14]=(m*a*s-o*v*s-m*n*c+e*v*c+o*n*g-e*a*g)*C,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,m=r*u,v=o*h,g=o*u,p=a*u,y=c*l,_=c*h,x=c*u,L=n.x,E=n.y,C=n.z;return s[0]=(1-(v+p))*L,s[1]=(f+x)*L,s[2]=(m-_)*L,s[3]=0,s[4]=(f-x)*E,s[5]=(1-(d+p))*E,s[6]=(g+y)*E,s[7]=0,s[8]=(m+_)*C,s[9]=(g-y)*C,s[10]=(1-(d+v))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=As.set(s[0],s[1],s[2]).length();const o=As.set(s[4],s[5],s[6]).length(),a=As.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Bn.copy(this);const l=1/r,h=1/o,u=1/a;return Bn.elements[0]*=l,Bn.elements[1]*=l,Bn.elements[2]*=l,Bn.elements[4]*=h,Bn.elements[5]*=h,Bn.elements[6]*=h,Bn.elements[8]*=u,Bn.elements[9]*=u,Bn.elements[10]*=u,e.setFromRotationMatrix(Bn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Mi){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,m;if(a===Mi)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===Pa)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Mi){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*l,f=(n+s)*h;let m,v;if(a===Mi)m=(o+r)*u,v=-2*u;else if(a===Pa)m=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const As=new w,Bn=new Bt,Bg=new w(0,0,0),zg=new w(1,1,1),Di=new w,Po=new w,xn=new w,Su=new Bt,wu=new nn;class gn{constructor(t=0,e=0,n=0,s=gn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Fe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Fe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Su.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Su,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return wu.setFromEuler(this),this.setFromQuaternion(wu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gn.DEFAULT_ORDER="XYZ";class Mh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Hg=0;const Tu=new w,Cs=new nn,ui=new Bt,Io=new w,wr=new w,Vg=new w,Gg=new nn,Eu=new w(1,0,0),Au=new w(0,1,0),Cu=new w(0,0,1),Ru={type:"added"},Wg={type:"removed"},Rs={type:"childadded",child:null},hc={type:"childremoved",child:null};class Re extends dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hg++}),this.uuid=Nn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Re.DEFAULT_UP.clone();const t=new w,e=new gn,n=new nn,s=new w(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Bt},normalMatrix:{value:new Qt}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=Re.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Cs.setFromAxisAngle(t,e),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(t,e){return Cs.setFromAxisAngle(t,e),this.quaternion.premultiply(Cs),this}rotateX(t){return this.rotateOnAxis(Eu,t)}rotateY(t){return this.rotateOnAxis(Au,t)}rotateZ(t){return this.rotateOnAxis(Cu,t)}translateOnAxis(t,e){return Tu.copy(t).applyQuaternion(this.quaternion),this.position.add(Tu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Eu,t)}translateY(t){return this.translateOnAxis(Au,t)}translateZ(t){return this.translateOnAxis(Cu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Io.copy(t):Io.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(wr,Io,this.up):ui.lookAt(Io,wr,this.up),this.quaternion.setFromRotationMatrix(ui),s&&(ui.extractRotation(s.matrixWorld),Cs.setFromRotationMatrix(ui),this.quaternion.premultiply(Cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ru),Rs.child=t,this.dispatchEvent(Rs),Rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wg),hc.child=t,this.dispatchEvent(hc),hc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ui.multiply(t.parent.matrixWorld)),t.applyMatrix4(ui),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ru),Rs.child=t,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,t,Vg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,Gg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Re.DEFAULT_UP=new w(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new w,di=new w,uc=new w,fi=new w,Ls=new w,Ps=new w,Lu=new w,dc=new w,fc=new w,pc=new w,mc=new de,gc=new de,vc=new de;class Ln{constructor(t=new w,e=new w,n=new w){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),zn.subVectors(t,e),s.cross(zn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){zn.subVectors(s,e),di.subVectors(n,e),uc.subVectors(t,e);const o=zn.dot(zn),a=zn.dot(di),c=zn.dot(uc),l=di.dot(di),h=di.dot(uc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,m=(o*h-a*c)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,fi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,fi.x),c.addScaledVector(o,fi.y),c.addScaledVector(a,fi.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return mc.setScalar(0),gc.setScalar(0),vc.setScalar(0),mc.fromBufferAttribute(t,e),gc.fromBufferAttribute(t,n),vc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(mc,r.x),o.addScaledVector(gc,r.y),o.addScaledVector(vc,r.z),o}static isFrontFacing(t,e,n,s){return zn.subVectors(n,e),di.subVectors(t,e),zn.cross(di).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return zn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),zn.cross(di).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ln.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ln.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Ln.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Ln.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ln.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ls.subVectors(s,n),Ps.subVectors(r,n),dc.subVectors(t,n);const c=Ls.dot(dc),l=Ps.dot(dc);if(c<=0&&l<=0)return e.copy(n);fc.subVectors(t,s);const h=Ls.dot(fc),u=Ps.dot(fc);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Ls,o);pc.subVectors(t,r);const f=Ls.dot(pc),m=Ps.dot(pc);if(m>=0&&f<=m)return e.copy(r);const v=f*l-c*m;if(v<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(Ps,a);const g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Lu.subVectors(r,s),a=(u-h)/(u-h+(f-m)),e.copy(s).addScaledVector(Lu,a);const p=1/(g+v+d);return o=v*p,a=d*p,e.copy(n).addScaledVector(Ls,o).addScaledVector(Ps,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Yf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},No={h:0,s:0,l:0};function xc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ee){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ae.workingColorSpace){if(t=yh(t,1),e=Fe(e,0,1),n=Fe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=xc(o,r,t+1/3),this.g=xc(o,r,t),this.b=xc(o,r,t-1/3)}return ae.toWorkingColorSpace(this,s),this}setStyle(t,e=Ee){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ee){const n=Yf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bi(t.r),this.g=bi(t.g),this.b=bi(t.b),this}copyLinearToSRGB(t){return this.r=js(t.r),this.g=js(t.g),this.b=js(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ee){return ae.fromWorkingColorSpace(Ye.copy(this),t),Math.round(Fe(Ye.r*255,0,255))*65536+Math.round(Fe(Ye.g*255,0,255))*256+Math.round(Fe(Ye.b*255,0,255))}getHexString(t=Ee){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.fromWorkingColorSpace(Ye.copy(this),e);const n=Ye.r,s=Ye.g,r=Ye.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.fromWorkingColorSpace(Ye.copy(this),e),t.r=Ye.r,t.g=Ye.g,t.b=Ye.b,t}getStyle(t=Ee){ae.fromWorkingColorSpace(Ye.copy(this),t);const e=Ye.r,n=Ye.g,s=Ye.b;return t!==Ee?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ui),this.setHSL(Ui.h+t,Ui.s+e,Ui.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ui),t.getHSL(No);const n=qr(Ui.h,No.h,e),s=qr(Ui.s,No.s,e),r=qr(Ui.l,No.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ye=new kt;kt.NAMES=Yf;let $g=0;class $n extends dr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$g++}),this.uuid=Nn(),this.name="",this.blending=qs,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rl,this.blendDst=ol,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(n.blending=this.blending),this.side!==Si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==rl&&(n.blendSrc=this.blendSrc),this.blendDst!==ol&&(n.blendDst=this.blendDst),this.blendEquation!==ls&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Oe extends $n{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=Pf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ke=new w,Do=new Z;class Ue{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Gl,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Do.fromBufferAttribute(this,e),Do.applyMatrix3(t),this.setXY(e,Do.x,Do.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix3(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Gn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Gn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Gn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Gn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),s=ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),s=ve(s,this.array),r=ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Gl&&(t.usage=this.usage),t}}class Kf extends Ue{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Jf extends Ue{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class jt extends Ue{constructor(t,e,n){super(new Float32Array(t),e,n)}}let qg=0;const Tn=new Bt,_c=new Re,Is=new w,_n=new Ai,Tr=new Ai,Ve=new w;class ye extends dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qg++}),this.uuid=Nn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qf(t)?Jf:Kf)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Tn.makeRotationFromQuaternion(t),this.applyMatrix4(Tn),this}rotateX(t){return Tn.makeRotationX(t),this.applyMatrix4(Tn),this}rotateY(t){return Tn.makeRotationY(t),this.applyMatrix4(Tn),this}rotateZ(t){return Tn.makeRotationZ(t),this.applyMatrix4(Tn),this}translate(t,e,n){return Tn.makeTranslation(t,e,n),this.applyMatrix4(Tn),this}scale(t,e,n){return Tn.makeScale(t,e,n),this.applyMatrix4(Tn),this}lookAt(t){return _c.lookAt(t),_c.updateMatrix(),this.applyMatrix4(_c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new jt(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ai);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ni);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(t){const n=this.boundingSphere.center;if(_n.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Tr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ve.addVectors(_n.min,Tr.min),_n.expandByPoint(Ve),Ve.addVectors(_n.max,Tr.max),_n.expandByPoint(Ve)):(_n.expandByPoint(Tr.min),_n.expandByPoint(Tr.max))}_n.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ve));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ve.fromBufferAttribute(a,l),c&&(Is.fromBufferAttribute(t,l),Ve.add(Is)),s=Math.max(s,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ue(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new w,c[P]=new w;const l=new w,h=new w,u=new w,d=new Z,f=new Z,m=new Z,v=new w,g=new w;function p(P,S,M){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,S),m.fromBufferAttribute(r,M),h.sub(l),u.sub(l),f.sub(d),m.sub(d);const I=1/(f.x*m.y-m.x*f.y);isFinite(I)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(I),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(I),a[P].add(v),a[S].add(v),a[M].add(v),c[P].add(g),c[S].add(g),c[M].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let P=0,S=y.length;P<S;++P){const M=y[P],I=M.start,G=M.count;for(let B=I,W=I+G;B<W;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const _=new w,x=new w,L=new w,E=new w;function C(P){L.fromBufferAttribute(s,P),E.copy(L);const S=a[P];_.copy(S),_.sub(L.multiplyScalar(L.dot(S))).normalize(),x.crossVectors(E,S);const I=x.dot(c[P])<0?-1:1;o.setXYZW(P,_.x,_.y,_.z,I)}for(let P=0,S=y.length;P<S;++P){const M=y[P],I=M.start,G=M.count;for(let B=I,W=I+G;B<W;B+=3)C(t.getX(B+0)),C(t.getX(B+1)),C(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ue(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new w,r=new w,o=new w,a=new w,c=new w,l=new w,h=new w,u=new w;if(t)for(let d=0,f=t.count;d<f;d+=3){const m=t.getX(d+0),v=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,m=0;for(let v=0,g=c.length;v<g;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new Ue(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ye,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pu=new Bt,ts=new mo,Uo=new ni,Iu=new w,ko=new w,Oo=new w,Fo=new w,yc=new w,Bo=new w,Nu=new w,zo=new w;class tt extends Re{constructor(t=new ye,e=new Oe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Bo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(yc.fromBufferAttribute(u,t),o?Bo.addScaledVector(yc,h):Bo.addScaledVector(yc.sub(e),h))}e.add(Bo)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Uo.copy(n.boundingSphere),Uo.applyMatrix4(r),ts.copy(t.ray).recast(t.near),!(Uo.containsPoint(ts.origin)===!1&&(ts.intersectSphere(Uo,Iu)===null||ts.origin.distanceToSquared(Iu)>(t.far-t.near)**2))&&(Pu.copy(r).invert(),ts.copy(t.ray).applyMatrix4(Pu),!(n.boundingBox!==null&&ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ts)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=d.length;m<v;m++){const g=d[m],p=o[g.materialIndex],y=Math.max(g.start,f.start),_=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let x=y,L=_;x<L;x+=3){const E=a.getX(x),C=a.getX(x+1),P=a.getX(x+2);s=Ho(this,p,t,n,l,h,u,E,C,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){const y=a.getX(g),_=a.getX(g+1),x=a.getX(g+2);s=Ho(this,o,t,n,l,h,u,y,_,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,v=d.length;m<v;m++){const g=d[m],p=o[g.materialIndex],y=Math.max(g.start,f.start),_=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let x=y,L=_;x<L;x+=3){const E=x,C=x+1,P=x+2;s=Ho(this,p,t,n,l,h,u,E,C,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){const y=g,_=g+1,x=g+2;s=Ho(this,o,t,n,l,h,u,y,_,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function Xg(i,t,e,n,s,r,o,a){let c;if(t.side===tn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Si,a),c===null)return null;zo.copy(a),zo.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(zo);return l<e.near||l>e.far?null:{distance:l,point:zo.clone(),object:i}}function Ho(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,ko),i.getVertexPosition(c,Oo),i.getVertexPosition(l,Fo);const h=Xg(i,t,e,n,ko,Oo,Fo,Nu);if(h){const u=new w;Ln.getBarycoord(Nu,ko,Oo,Fo,u),s&&(h.uv=Ln.getInterpolatedAttribute(s,a,c,l,u,new Z)),r&&(h.uv1=Ln.getInterpolatedAttribute(r,a,c,l,u,new Z)),o&&(h.normal=Ln.getInterpolatedAttribute(o,a,c,l,u,new w),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new w,materialIndex:0};Ln.getNormal(ko,Oo,Fo,d.normal),h.face=d,h.barycoord=u}return h}class ln extends ye{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new jt(l,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(u,2));function m(v,g,p,y,_,x,L,E,C,P,S){const M=x/C,I=L/P,G=x/2,B=L/2,W=E/2,J=C+1,$=P+1;let st=0,q=0;const ht=new w;for(let it=0;it<$;it++){const wt=it*I-B;for(let Wt=0;Wt<J;Wt++){const he=Wt*M-G;ht[v]=he*y,ht[g]=wt*_,ht[p]=W,l.push(ht.x,ht.y,ht.z),ht[v]=0,ht[g]=0,ht[p]=E>0?1:-1,h.push(ht.x,ht.y,ht.z),u.push(Wt/C),u.push(1-it/P),st+=1}}for(let it=0;it<P;it++)for(let wt=0;wt<C;wt++){const Wt=d+wt+J*it,he=d+wt+J*(it+1),j=d+(wt+1)+J*(it+1),ot=d+(wt+1)+J*it;c.push(Wt,he,ot),c.push(he,j,ot),q+=6}a.addGroup(f,q,S),f+=q,d+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ln(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function nr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function rn(i){const t={};for(let e=0;e<i.length;e++){const n=nr(i[e]);for(const s in n)t[s]=n[s]}return t}function jg(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Zf(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}const Yg={clone:nr,merge:rn};var Kg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ti extends $n{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kg,this.fragmentShader=Jg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=nr(t.uniforms),this.uniformsGroups=jg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Qf extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=Mi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ki=new w,Du=new Z,Uu=new Z;class Ze extends Qf{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=er*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan($r*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return er*2*Math.atan(Math.tan($r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ki.x,ki.y).multiplyScalar(-t/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-t/ki.z)}getViewSize(t,e){return this.getViewBounds(t,Du,Uu),e.subVectors(Uu,Du)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan($r*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ns=-90,Ds=1;class Zg extends Re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ze(Ns,Ds,t,e);s.layers=this.layers,this.add(s);const r=new Ze(Ns,Ds,t,e);r.layers=this.layers,this.add(r);const o=new Ze(Ns,Ds,t,e);o.layers=this.layers,this.add(o);const a=new Ze(Ns,Ds,t,e);a.layers=this.layers,this.add(a);const c=new Ze(Ns,Ds,t,e);c.layers=this.layers,this.add(c);const l=new Ze(Ns,Ds,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Mi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Pa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class tp extends Be{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Js,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qg extends ms{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new tp(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Mn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ln(5,5,5),r=new Ti({name:"CubemapFromEquirect",uniforms:nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:Vi});r.uniforms.tEquirect.value=e;const o=new tt(s,r),a=e.minFilter;return e.minFilter===yi&&(e.minFilter=Mn),new Zg(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Mc=new w,t0=new w,e0=new Qt;class rs{constructor(t=new w(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Mc.subVectors(n,e).cross(t0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Mc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||e0.getNormalMatrix(t),s=this.coplanarPoint(Mc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const es=new ni,Vo=new w;class bh{constructor(t=new rs,e=new rs,n=new rs,s=new rs,r=new rs,o=new rs){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Mi){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],m=s[9],v=s[10],g=s[11],p=s[12],y=s[13],_=s[14],x=s[15];if(n[0].setComponents(c-r,d-l,g-f,x-p).normalize(),n[1].setComponents(c+r,d+l,g+f,x+p).normalize(),n[2].setComponents(c+o,d+h,g+m,x+y).normalize(),n[3].setComponents(c-o,d-h,g-m,x-y).normalize(),n[4].setComponents(c-a,d-u,g-v,x-_).normalize(),e===Mi)n[5].setComponents(c+a,d+u,g+v,x+_).normalize();else if(e===Pa)n[5].setComponents(a,u,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(t){return es.center.set(0,0,0),es.radius=.7071067811865476,es.applyMatrix4(t.matrixWorld),this.intersectsSphere(es)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Vo.x=s.normal.x>0?t.max.x:t.min.x,Vo.y=s.normal.y>0?t.max.y:t.min.y,Vo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Vo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ep(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function n0(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],v=u[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const v=u[f];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class qe extends ye{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],m=[],v=[],g=[];for(let p=0;p<h;p++){const y=p*d-o;for(let _=0;_<l;_++){const x=_*u-r;m.push(x,-y,0),v.push(0,0,1),g.push(_/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){const _=y+l*p,x=y+l*(p+1),L=y+1+l*(p+1),E=y+1+l*p;f.push(_,x,E),f.push(x,L,E)}this.setIndex(f),this.setAttribute("position",new jt(m,3)),this.setAttribute("normal",new jt(v,3)),this.setAttribute("uv",new jt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qe(t.width,t.height,t.widthSegments,t.heightSegments)}}var i0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,s0=`#ifdef USE_ALPHAHASH
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
#endif`,r0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,o0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,a0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,c0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,l0=`#ifdef USE_AOMAP
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
#endif`,h0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,u0=`#ifdef USE_BATCHING
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
#endif`,d0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,f0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,p0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,m0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,g0=`#ifdef USE_IRIDESCENCE
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
#endif`,v0=`#ifdef USE_BUMPMAP
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
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,b0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,S0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,w0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,T0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,E0=`#define PI 3.141592653589793
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
} // validated`,A0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,C0=`vec3 transformedNormal = objectNormal;
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
#endif`,R0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,L0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,P0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,I0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,N0="gl_FragColor = linearToOutputTexel( gl_FragColor );",D0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,U0=`#ifdef USE_ENVMAP
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
#endif`,k0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,O0=`#ifdef USE_ENVMAP
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
#endif`,F0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,B0=`#ifdef USE_ENVMAP
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
#endif`,z0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,H0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,V0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,G0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,W0=`#ifdef USE_GRADIENTMAP
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
}`,$0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,q0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,X0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,j0=`uniform bool receiveShadow;
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
#endif`,Y0=`#ifdef USE_ENVMAP
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
#endif`,K0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,J0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Z0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tv=`PhysicalMaterial material;
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
#endif`,ev=`struct PhysicalMaterial {
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
}`,nv=`
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
#endif`,iv=`#if defined( RE_IndirectDiffuse )
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
#endif`,sv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ov=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,av=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dv=`#if defined( USE_POINTS_UV )
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
#endif`,fv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xv=`#ifdef USE_MORPHTARGETS
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
#endif`,_v=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tv=`#ifdef USE_NORMALMAP
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
#endif`,Ev=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Av=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Iv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Uv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ov=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hv=`float getShadowMask() {
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
}`,Vv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gv=`#ifdef USE_SKINNING
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
#endif`,Wv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$v=`#ifdef USE_SKINNING
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
#endif`,qv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kv=`#ifdef USE_TRANSMISSION
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
#endif`,Jv=`#ifdef USE_TRANSMISSION
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
#endif`,Zv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ex=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ix=`uniform sampler2D t2D;
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
}`,sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ax=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cx=`#include <common>
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
}`,lx=`#if DEPTH_PACKING == 3200
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
}`,hx=`#define DISTANCE
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
}`,ux=`#define DISTANCE
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
}`,dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,px=`uniform float scale;
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
}`,mx=`uniform vec3 diffuse;
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
}`,gx=`#include <common>
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
}`,vx=`uniform vec3 diffuse;
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
}`,xx=`#define LAMBERT
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
}`,_x=`#define LAMBERT
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
}`,yx=`#define MATCAP
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
}`,Mx=`#define MATCAP
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
}`,bx=`#define NORMAL
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
}`,Sx=`#define NORMAL
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
}`,wx=`#define PHONG
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
}`,Tx=`#define PHONG
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
}`,Ex=`#define STANDARD
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
}`,Ax=`#define STANDARD
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
}`,Cx=`#define TOON
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
}`,Rx=`#define TOON
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
}`,Lx=`uniform float size;
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
}`,Px=`uniform vec3 diffuse;
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
}`,Ix=`#include <common>
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
}`,Nx=`uniform vec3 color;
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
}`,Dx=`uniform float rotation;
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
}`,Ux=`uniform vec3 diffuse;
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
}`,ne={alphahash_fragment:i0,alphahash_pars_fragment:s0,alphamap_fragment:r0,alphamap_pars_fragment:o0,alphatest_fragment:a0,alphatest_pars_fragment:c0,aomap_fragment:l0,aomap_pars_fragment:h0,batching_pars_vertex:u0,batching_vertex:d0,begin_vertex:f0,beginnormal_vertex:p0,bsdfs:m0,iridescence_fragment:g0,bumpmap_pars_fragment:v0,clipping_planes_fragment:x0,clipping_planes_pars_fragment:_0,clipping_planes_pars_vertex:y0,clipping_planes_vertex:M0,color_fragment:b0,color_pars_fragment:S0,color_pars_vertex:w0,color_vertex:T0,common:E0,cube_uv_reflection_fragment:A0,defaultnormal_vertex:C0,displacementmap_pars_vertex:R0,displacementmap_vertex:L0,emissivemap_fragment:P0,emissivemap_pars_fragment:I0,colorspace_fragment:N0,colorspace_pars_fragment:D0,envmap_fragment:U0,envmap_common_pars_fragment:k0,envmap_pars_fragment:O0,envmap_pars_vertex:F0,envmap_physical_pars_fragment:Y0,envmap_vertex:B0,fog_vertex:z0,fog_pars_vertex:H0,fog_fragment:V0,fog_pars_fragment:G0,gradientmap_pars_fragment:W0,lightmap_pars_fragment:$0,lights_lambert_fragment:q0,lights_lambert_pars_fragment:X0,lights_pars_begin:j0,lights_toon_fragment:K0,lights_toon_pars_fragment:J0,lights_phong_fragment:Z0,lights_phong_pars_fragment:Q0,lights_physical_fragment:tv,lights_physical_pars_fragment:ev,lights_fragment_begin:nv,lights_fragment_maps:iv,lights_fragment_end:sv,logdepthbuf_fragment:rv,logdepthbuf_pars_fragment:ov,logdepthbuf_pars_vertex:av,logdepthbuf_vertex:cv,map_fragment:lv,map_pars_fragment:hv,map_particle_fragment:uv,map_particle_pars_fragment:dv,metalnessmap_fragment:fv,metalnessmap_pars_fragment:pv,morphinstance_vertex:mv,morphcolor_vertex:gv,morphnormal_vertex:vv,morphtarget_pars_vertex:xv,morphtarget_vertex:_v,normal_fragment_begin:yv,normal_fragment_maps:Mv,normal_pars_fragment:bv,normal_pars_vertex:Sv,normal_vertex:wv,normalmap_pars_fragment:Tv,clearcoat_normal_fragment_begin:Ev,clearcoat_normal_fragment_maps:Av,clearcoat_pars_fragment:Cv,iridescence_pars_fragment:Rv,opaque_fragment:Lv,packing:Pv,premultiplied_alpha_fragment:Iv,project_vertex:Nv,dithering_fragment:Dv,dithering_pars_fragment:Uv,roughnessmap_fragment:kv,roughnessmap_pars_fragment:Ov,shadowmap_pars_fragment:Fv,shadowmap_pars_vertex:Bv,shadowmap_vertex:zv,shadowmask_pars_fragment:Hv,skinbase_vertex:Vv,skinning_pars_vertex:Gv,skinning_vertex:Wv,skinnormal_vertex:$v,specularmap_fragment:qv,specularmap_pars_fragment:Xv,tonemapping_fragment:jv,tonemapping_pars_fragment:Yv,transmission_fragment:Kv,transmission_pars_fragment:Jv,uv_pars_fragment:Zv,uv_pars_vertex:Qv,uv_vertex:tx,worldpos_vertex:ex,background_vert:nx,background_frag:ix,backgroundCube_vert:sx,backgroundCube_frag:rx,cube_vert:ox,cube_frag:ax,depth_vert:cx,depth_frag:lx,distanceRGBA_vert:hx,distanceRGBA_frag:ux,equirect_vert:dx,equirect_frag:fx,linedashed_vert:px,linedashed_frag:mx,meshbasic_vert:gx,meshbasic_frag:vx,meshlambert_vert:xx,meshlambert_frag:_x,meshmatcap_vert:yx,meshmatcap_frag:Mx,meshnormal_vert:bx,meshnormal_frag:Sx,meshphong_vert:wx,meshphong_frag:Tx,meshphysical_vert:Ex,meshphysical_frag:Ax,meshtoon_vert:Cx,meshtoon_frag:Rx,points_vert:Lx,points_frag:Px,shadow_vert:Ix,shadow_frag:Nx,sprite_vert:Dx,sprite_frag:Ux},ut={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new Z(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Z(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},Zn={basic:{uniforms:rn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:rn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new kt(0)}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:rn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:rn([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:rn([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new kt(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:rn([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:rn([ut.points,ut.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:rn([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:rn([ut.common,ut.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:rn([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:rn([ut.sprite,ut.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distanceRGBA:{uniforms:rn([ut.common,ut.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distanceRGBA_vert,fragmentShader:ne.distanceRGBA_frag},shadow:{uniforms:rn([ut.lights,ut.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};Zn.physical={uniforms:rn([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new Z(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new Z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new Z},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};const Go={r:0,b:0,g:0},ns=new gn,kx=new Bt;function Ox(i,t,e,n,s,r,o){const a=new kt(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function m(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?e:t).get(_)),_}function v(y){let _=!1;const x=m(y);x===null?p(a,c):x&&x.isColor&&(p(x,1),_=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(y,_){const x=m(_);x&&(x.isCubeTexture||x.mapping===Va)?(h===void 0&&(h=new tt(new ln(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:nr(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ns.copy(_.backgroundRotation),ns.x*=-1,ns.y*=-1,ns.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(kx.makeRotationFromEuler(ns)),h.material.toneMapped=ae.getTransfer(x.colorSpace)!==_e,(u!==x||d!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new tt(new qe(2,2),new Ti({name:"BackgroundMaterial",uniforms:nr(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=ae.getTransfer(x.colorSpace)!==_e,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,_){y.getRGB(Go,Zf(i)),n.buffers.color.setClear(Go.r,Go.g,Go.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),c=_,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:v,addToRenderList:g}}function Fx(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(M,I,G,B,W){let J=!1;const $=u(B,G,I);r!==$&&(r=$,l(r.object)),J=f(M,B,G,W),J&&m(M,B,G,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,x(M,I,G,B),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,I,G){const B=G.wireframe===!0;let W=n[M.id];W===void 0&&(W={},n[M.id]=W);let J=W[I.id];J===void 0&&(J={},W[I.id]=J);let $=J[B];return $===void 0&&($=d(c()),J[B]=$),$}function d(M){const I=[],G=[],B=[];for(let W=0;W<e;W++)I[W]=0,G[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:G,attributeDivisors:B,object:M,attributes:{},index:null}}function f(M,I,G,B){const W=r.attributes,J=I.attributes;let $=0;const st=G.getAttributes();for(const q in st)if(st[q].location>=0){const it=W[q];let wt=J[q];if(wt===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(wt=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(wt=M.instanceColor)),it===void 0||it.attribute!==wt||wt&&it.data!==wt.data)return!0;$++}return r.attributesNum!==$||r.index!==B}function m(M,I,G,B){const W={},J=I.attributes;let $=0;const st=G.getAttributes();for(const q in st)if(st[q].location>=0){let it=J[q];it===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(it=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(it=M.instanceColor));const wt={};wt.attribute=it,it&&it.data&&(wt.data=it.data),W[q]=wt,$++}r.attributes=W,r.attributesNum=$,r.index=B}function v(){const M=r.newAttributes;for(let I=0,G=M.length;I<G;I++)M[I]=0}function g(M){p(M,0)}function p(M,I){const G=r.newAttributes,B=r.enabledAttributes,W=r.attributeDivisors;G[M]=1,B[M]===0&&(i.enableVertexAttribArray(M),B[M]=1),W[M]!==I&&(i.vertexAttribDivisor(M,I),W[M]=I)}function y(){const M=r.newAttributes,I=r.enabledAttributes;for(let G=0,B=I.length;G<B;G++)I[G]!==M[G]&&(i.disableVertexAttribArray(G),I[G]=0)}function _(M,I,G,B,W,J,$){$===!0?i.vertexAttribIPointer(M,I,G,W,J):i.vertexAttribPointer(M,I,G,B,W,J)}function x(M,I,G,B){v();const W=B.attributes,J=G.getAttributes(),$=I.defaultAttributeValues;for(const st in J){const q=J[st];if(q.location>=0){let ht=W[st];if(ht===void 0&&(st==="instanceMatrix"&&M.instanceMatrix&&(ht=M.instanceMatrix),st==="instanceColor"&&M.instanceColor&&(ht=M.instanceColor)),ht!==void 0){const it=ht.normalized,wt=ht.itemSize,Wt=t.get(ht);if(Wt===void 0)continue;const he=Wt.buffer,j=Wt.type,ot=Wt.bytesPerElement,Et=j===i.INT||j===i.UNSIGNED_INT||ht.gpuType===fh;if(ht.isInterleavedBufferAttribute){const at=ht.data,Nt=at.stride,Ht=ht.offset;if(at.isInstancedInterleavedBuffer){for(let zt=0;zt<q.locationSize;zt++)p(q.location+zt,at.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let zt=0;zt<q.locationSize;zt++)g(q.location+zt);i.bindBuffer(i.ARRAY_BUFFER,he);for(let zt=0;zt<q.locationSize;zt++)_(q.location+zt,wt/q.locationSize,j,it,Nt*ot,(Ht+wt/q.locationSize*zt)*ot,Et)}else{if(ht.isInstancedBufferAttribute){for(let at=0;at<q.locationSize;at++)p(q.location+at,ht.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let at=0;at<q.locationSize;at++)g(q.location+at);i.bindBuffer(i.ARRAY_BUFFER,he);for(let at=0;at<q.locationSize;at++)_(q.location+at,wt/q.locationSize,j,it,wt*ot,wt/q.locationSize*at*ot,Et)}}else if($!==void 0){const it=$[st];if(it!==void 0)switch(it.length){case 2:i.vertexAttrib2fv(q.location,it);break;case 3:i.vertexAttrib3fv(q.location,it);break;case 4:i.vertexAttrib4fv(q.location,it);break;default:i.vertexAttrib1fv(q.location,it)}}}}y()}function L(){P();for(const M in n){const I=n[M];for(const G in I){const B=I[G];for(const W in B)h(B[W].object),delete B[W];delete I[G]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;const I=n[M.id];for(const G in I){const B=I[G];for(const W in B)h(B[W].object),delete B[W];delete I[G]}delete n[M.id]}function C(M){for(const I in n){const G=n[I];if(G[M.id]===void 0)continue;const B=G[M.id];for(const W in B)h(B[W].object),delete B[W];delete G[M.id]}}function P(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:S,dispose:L,releaseStatesOfGeometry:E,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:g,disableUnusedAttributes:y}}function Bx(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)o(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let v=0;v<u;v++)m+=h[v]*d[v];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function zx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==In&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const P=C===po&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==wi&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Wn&&!P)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=m>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:L,maxSamples:E}}function Hx(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new rs,a=new Qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{const y=r?0:n,_=y*4;let x=p.clippingState||null;c.value=x,x=h(m,d,_,f);for(let L=0;L!==_;++L)x[L]=e[L];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){const v=u!==null?u.length:0;let g=null;if(v!==0){if(g=c.value,m!==!0||g===null){const p=f+v*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,x=f;_!==v;++_,x+=4)o.copy(u[_]).applyMatrix4(y,a),o.normal.toArray(g,x),g[x+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}function Vx(i){let t=new WeakMap;function e(o,a){return a===pl?o.mapping=Js:a===ml&&(o.mapping=Zs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===pl||a===ml)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Qg(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Sh extends Qf{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ws=4,ku=[.125,.215,.35,.446,.526,.582],hs=20,bc=new Sh,Ou=new kt;let Sc=null,wc=0,Tc=0,Ec=!1;const os=(1+Math.sqrt(5))/2,Us=1/os,Fu=[new w(-os,Us,0),new w(os,Us,0),new w(-Us,0,os),new w(Us,0,os),new w(0,os,-Us),new w(0,os,Us),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)];class Wl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Sc=this._renderer.getRenderTarget(),wc=this._renderer.getActiveCubeFace(),Tc=this._renderer.getActiveMipmapLevel(),Ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Sc,wc,Tc),this._renderer.xr.enabled=Ec,t.scissorTest=!1,Wo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Js||t.mapping===Zs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sc=this._renderer.getRenderTarget(),wc=this._renderer.getActiveCubeFace(),Tc=this._renderer.getActiveMipmapLevel(),Ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:po,format:In,colorSpace:en,depthBuffer:!1},s=Bu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bu(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gx(r)),this._blurMaterial=Wx(r,t,e)}return s}_compileMaterial(t){const e=new tt(this._lodPlanes[0],t);this._renderer.compile(e,bc)}_sceneToCubeUV(t,e,n,s){const a=new Ze(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ou),h.toneMapping=Gi,h.autoClear=!1;const f=new Oe({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),m=new tt(new ln,f);let v=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,v=!0):(f.color.copy(Ou),v=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):y===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const _=this._cubeSize;Wo(s,y*_,p>2?_:0,_,_),h.setRenderTarget(s),v&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Js||t.mapping===Zs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new tt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Wo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,bc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Fu[(s-r-1)%Fu.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new tt(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*hs-1),v=r/m,g=isFinite(r)?1+Math.floor(h*v):hs;g>hs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${hs}`);const p=[];let y=0;for(let C=0;C<hs;++C){const P=C/v,S=Math.exp(-P*P/2);p.push(S),C===0?y+=S:C<g&&(y+=2*S)}for(let C=0;C<p.length;C++)p[C]=p[C]/y;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=m,d.mipInt.value=_-n;const x=this._sizeLods[s],L=3*x*(s>_-Ws?s-_+Ws:0),E=4*(this._cubeSize-x);Wo(e,L,E,3*x,2*x),c.setRenderTarget(e),c.render(u,bc)}}function Gx(i){const t=[],e=[],n=[];let s=i;const r=i-Ws+1+ku.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Ws?c=ku[o-i+Ws-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,v=3,g=2,p=1,y=new Float32Array(v*m*f),_=new Float32Array(g*m*f),x=new Float32Array(p*m*f);for(let E=0;E<f;E++){const C=E%3*2/3-1,P=E>2?0:-1,S=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];y.set(S,v*m*E),_.set(d,g*m*E);const M=[E,E,E,E,E,E];x.set(M,p*m*E)}const L=new ye;L.setAttribute("position",new Ue(y,v)),L.setAttribute("uv",new Ue(_,g)),L.setAttribute("faceIndex",new Ue(x,p)),t.push(L),s>Ws&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Bu(i,t,e){const n=new ms(i,t,e);return n.texture.mapping=Va,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Wx(i,t,e){const n=new Float32Array(hs),s=new w(0,1,0);return new Ti({name:"SphericalGaussianBlur",defines:{n:hs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:wh(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function zu(){return new Ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wh(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Hu(){return new Ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function wh(){return`

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
	`}function $x(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===pl||c===ml,h=c===Js||c===Zs;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Wl(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Wl(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function qx(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Hr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Xx(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);for(const m in d.morphAttributes){const v=d.morphAttributes[m];for(let g=0,p=v.length;g<p;g++)t.remove(v[g])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const m in d)t.update(d[m],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const m in f){const v=f[m];for(let g=0,p=v.length;g<p;g++)t.update(v[g],i.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,m=u.attributes.position;let v=0;if(f!==null){const y=f.array;v=f.version;for(let _=0,x=y.length;_<x;_+=3){const L=y[_+0],E=y[_+1],C=y[_+2];d.push(L,E,E,C,C,L)}}else if(m!==void 0){const y=m.array;v=m.version;for(let _=0,x=y.length/3-1;_<x;_+=3){const L=_+0,E=_+1,C=_+2;d.push(L,E,E,C,C,L)}}else return;const g=new(qf(d)?Jf:Kf)(d,1);g.version=v;const p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function jx(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*o,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function u(d,f,m,v){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,m);let p=0;for(let y=0;y<m;y++)p+=f[y]*v[y];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Yx(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Kx(i,t,e){const n=new WeakMap,s=new de;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let S=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let _=0;f===!0&&(_=1),m===!0&&(_=2),v===!0&&(_=3);let x=a.attributes.position.count*_,L=1;x>t.maxTextureSize&&(L=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const E=new Float32Array(x*L*4*u),C=new jf(E,x,L,u);C.type=Wn,C.needsUpdate=!0;const P=_*4;for(let M=0;M<u;M++){const I=g[M],G=p[M],B=y[M],W=x*L*4*M;for(let J=0;J<I.count;J++){const $=J*P;f===!0&&(s.fromBufferAttribute(I,J),E[W+$+0]=s.x,E[W+$+1]=s.y,E[W+$+2]=s.z,E[W+$+3]=0),m===!0&&(s.fromBufferAttribute(G,J),E[W+$+4]=s.x,E[W+$+5]=s.y,E[W+$+6]=s.z,E[W+$+7]=0),v===!0&&(s.fromBufferAttribute(B,J),E[W+$+8]=s.x,E[W+$+9]=s.y,E[W+$+10]=s.z,E[W+$+11]=B.itemSize===4?s.w:1)}}d={count:u,texture:C,size:new Z(x,L)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];const m=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Jx(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class np extends Be{constructor(t,e,n,s,r,o,a,c,l,h=Xs){if(h!==Xs&&h!==tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Xs&&(n=ps),n===void 0&&h===tr&&(n=Qs),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:cn,this.minFilter=c!==void 0?c:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const ip=new Be,Vu=new np(1,1),sp=new jf,rp=new Og,op=new tp,Gu=[],Wu=[],$u=new Float32Array(16),qu=new Float32Array(9),Xu=new Float32Array(4);function fr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Gu[s];if(r===void 0&&(r=new Float32Array(s),Gu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function He(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Wa(i,t){let e=Wu[t];e===void 0&&(e=new Int32Array(t),Wu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Zx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Qx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2fv(this.addr,t),He(e,t)}}function t_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;i.uniform3fv(this.addr,t),He(e,t)}}function e_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4fv(this.addr,t),He(e,t)}}function n_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),He(e,t)}else{if(ze(e,n))return;Xu.set(n),i.uniformMatrix2fv(this.addr,!1,Xu),He(e,n)}}function i_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),He(e,t)}else{if(ze(e,n))return;qu.set(n),i.uniformMatrix3fv(this.addr,!1,qu),He(e,n)}}function s_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),He(e,t)}else{if(ze(e,n))return;$u.set(n),i.uniformMatrix4fv(this.addr,!1,$u),He(e,n)}}function r_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function o_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2iv(this.addr,t),He(e,t)}}function a_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3iv(this.addr,t),He(e,t)}}function c_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4iv(this.addr,t),He(e,t)}}function l_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function h_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2uiv(this.addr,t),He(e,t)}}function u_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3uiv(this.addr,t),He(e,t)}}function d_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4uiv(this.addr,t),He(e,t)}}function f_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Vu.compareFunction=$f,r=Vu):r=ip,e.setTexture2D(t||r,s)}function p_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||rp,s)}function m_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||op,s)}function g_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||sp,s)}function v_(i){switch(i){case 5126:return Zx;case 35664:return Qx;case 35665:return t_;case 35666:return e_;case 35674:return n_;case 35675:return i_;case 35676:return s_;case 5124:case 35670:return r_;case 35667:case 35671:return o_;case 35668:case 35672:return a_;case 35669:case 35673:return c_;case 5125:return l_;case 36294:return h_;case 36295:return u_;case 36296:return d_;case 35678:case 36198:case 36298:case 36306:case 35682:return f_;case 35679:case 36299:case 36307:return p_;case 35680:case 36300:case 36308:case 36293:return m_;case 36289:case 36303:case 36311:case 36292:return g_}}function x_(i,t){i.uniform1fv(this.addr,t)}function __(i,t){const e=fr(t,this.size,2);i.uniform2fv(this.addr,e)}function y_(i,t){const e=fr(t,this.size,3);i.uniform3fv(this.addr,e)}function M_(i,t){const e=fr(t,this.size,4);i.uniform4fv(this.addr,e)}function b_(i,t){const e=fr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function S_(i,t){const e=fr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function w_(i,t){const e=fr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function T_(i,t){i.uniform1iv(this.addr,t)}function E_(i,t){i.uniform2iv(this.addr,t)}function A_(i,t){i.uniform3iv(this.addr,t)}function C_(i,t){i.uniform4iv(this.addr,t)}function R_(i,t){i.uniform1uiv(this.addr,t)}function L_(i,t){i.uniform2uiv(this.addr,t)}function P_(i,t){i.uniform3uiv(this.addr,t)}function I_(i,t){i.uniform4uiv(this.addr,t)}function N_(i,t,e){const n=this.cache,s=t.length,r=Wa(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||ip,r[o])}function D_(i,t,e){const n=this.cache,s=t.length,r=Wa(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||rp,r[o])}function U_(i,t,e){const n=this.cache,s=t.length,r=Wa(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||op,r[o])}function k_(i,t,e){const n=this.cache,s=t.length,r=Wa(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||sp,r[o])}function O_(i){switch(i){case 5126:return x_;case 35664:return __;case 35665:return y_;case 35666:return M_;case 35674:return b_;case 35675:return S_;case 35676:return w_;case 5124:case 35670:return T_;case 35667:case 35671:return E_;case 35668:case 35672:return A_;case 35669:case 35673:return C_;case 5125:return R_;case 36294:return L_;case 36295:return P_;case 36296:return I_;case 35678:case 36198:case 36298:case 36306:case 35682:return N_;case 35679:case 36299:case 36307:return D_;case 35680:case 36300:case 36308:case 36293:return U_;case 36289:case 36303:case 36311:case 36292:return k_}}class F_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=v_(e.type)}}class B_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=O_(e.type)}}class z_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Ac=/(\w+)(\])?(\[|\.)?/g;function ju(i,t){i.seq.push(t),i.map[t.id]=t}function H_(i,t,e){const n=i.name,s=n.length;for(Ac.lastIndex=0;;){const r=Ac.exec(n),o=Ac.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){ju(e,l===void 0?new F_(a,i,t):new B_(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new z_(a),ju(e,u)),e=u}}}class wa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);H_(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Yu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const V_=37297;let G_=0;function W_(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Ku=new Qt;function $_(i){ae._getMatrix(Ku,ae.workingColorSpace,i);const t=`mat3( ${Ku.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(i)){case Ga:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ju(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+W_(i.getShaderSource(t),o)}else return s}function q_(i,t){const e=$_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function X_(i,t){let e;switch(t){case jm:e="Linear";break;case Ym:e="Reinhard";break;case Km:e="Cineon";break;case dh:e="ACESFilmic";break;case Zm:e="AgX";break;case Qm:e="Neutral";break;case Jm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const $o=new w;function j_(){ae.getLuminanceCoefficients($o);const i=$o.x.toFixed(4),t=$o.y.toFixed(4),e=$o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Y_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vr).join(`
`)}function K_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function J_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Vr(i){return i!==""}function Zu(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Qu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Z_=/^[ \t]*#include +<([\w\d./]+)>/gm;function $l(i){return i.replace(Z_,ty)}const Q_=new Map;function ty(i,t){let e=ne[t];if(e===void 0){const n=Q_.get(t);if(n!==void 0)e=ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return $l(e)}const ey=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function td(i){return i.replace(ey,ny)}function ny(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ed(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function iy(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Rf?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Lf?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===xi&&(t="SHADOWMAP_TYPE_VSM"),t}function sy(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Js:case Zs:t="ENVMAP_TYPE_CUBE";break;case Va:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ry(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Zs:t="ENVMAP_MODE_REFRACTION";break}return t}function oy(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Pf:t="ENVMAP_BLENDING_MULTIPLY";break;case qm:t="ENVMAP_BLENDING_MIX";break;case Xm:t="ENVMAP_BLENDING_ADD";break}return t}function ay(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function cy(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=iy(e),l=sy(e),h=ry(e),u=oy(e),d=ay(e),f=Y_(e),m=K_(r),v=s.createProgram();let g,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Vr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Vr).join(`
`),p.length>0&&(p+=`
`)):(g=[ed(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vr).join(`
`),p=[ed(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gi?"#define TONE_MAPPING":"",e.toneMapping!==Gi?ne.tonemapping_pars_fragment:"",e.toneMapping!==Gi?X_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,q_("linearToOutputTexel",e.outputColorSpace),j_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Vr).join(`
`)),o=$l(o),o=Zu(o,e),o=Qu(o,e),a=$l(a),a=Zu(a,e),a=Qu(a,e),o=td(o),a=td(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===pu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===pu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=y+g+o,x=y+p+a,L=Yu(s,s.VERTEX_SHADER,_),E=Yu(s,s.FRAGMENT_SHADER,x);s.attachShader(v,L),s.attachShader(v,E),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(I){if(i.debug.checkShaderErrors){const G=s.getProgramInfoLog(v).trim(),B=s.getShaderInfoLog(L).trim(),W=s.getShaderInfoLog(E).trim();let J=!0,$=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,L,E);else{const st=Ju(s,L,"vertex"),q=Ju(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+G+`
`+st+`
`+q)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(B===""||W==="")&&($=!1);$&&(I.diagnostics={runnable:J,programLog:G,vertexShader:{log:B,prefix:g},fragmentShader:{log:W,prefix:p}})}s.deleteShader(L),s.deleteShader(E),P=new wa(s,v),S=J_(s,v)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,V_)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=G_++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=E,this}let ly=0;class hy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new uy(t),e.set(t,n)),n}}class uy{constructor(t){this.id=ly++,this.code=t,this.usedTimes=0}}function dy(i,t,e,n,s,r,o){const a=new Mh,c=new hy,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return l.add(S),S===0?"uv":`uv${S}`}function g(S,M,I,G,B){const W=G.fog,J=B.geometry,$=S.isMeshStandardMaterial?G.environment:null,st=(S.isMeshStandardMaterial?e:t).get(S.envMap||$),q=st&&st.mapping===Va?st.image.height:null,ht=m[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const it=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,wt=it!==void 0?it.length:0;let Wt=0;J.morphAttributes.position!==void 0&&(Wt=1),J.morphAttributes.normal!==void 0&&(Wt=2),J.morphAttributes.color!==void 0&&(Wt=3);let he,j,ot,Et;if(ht){const ge=Zn[ht];he=ge.vertexShader,j=ge.fragmentShader}else he=S.vertexShader,j=S.fragmentShader,c.update(S),ot=c.getVertexShaderID(S),Et=c.getFragmentShaderID(S);const at=i.getRenderTarget(),Nt=i.state.buffers.depth.getReversed(),Ht=B.isInstancedMesh===!0,zt=B.isBatchedMesh===!0,ce=!!S.map,D=!!S.matcap,z=!!st,R=!!S.aoMap,mt=!!S.lightMap,nt=!!S.bumpMap,Tt=!!S.normalMap,lt=!!S.displacementMap,Vt=!!S.emissiveMap,bt=!!S.metalnessMap,A=!!S.roughnessMap,b=S.anisotropy>0,F=S.clearcoat>0,Y=S.dispersion>0,et=S.iridescence>0,K=S.sheen>0,Rt=S.transmission>0,dt=b&&!!S.anisotropyMap,St=F&&!!S.clearcoatMap,re=F&&!!S.clearcoatNormalMap,rt=F&&!!S.clearcoatRoughnessMap,At=et&&!!S.iridescenceMap,Gt=et&&!!S.iridescenceThicknessMap,$t=K&&!!S.sheenColorMap,Ct=K&&!!S.sheenRoughnessMap,le=!!S.specularMap,ee=!!S.specularColorMap,we=!!S.specularIntensityMap,N=Rt&&!!S.transmissionMap,ft=Rt&&!!S.thicknessMap,X=!!S.gradientMap,Q=!!S.alphaMap,xt=S.alphaTest>0,gt=!!S.alphaHash,Jt=!!S.extensions;let Ie=Gi;S.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Ie=i.toneMapping);const Xe={shaderID:ht,shaderType:S.type,shaderName:S.name,vertexShader:he,fragmentShader:j,defines:S.defines,customVertexShaderID:ot,customFragmentShaderID:Et,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:zt,batchingColor:zt&&B._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&B.instanceColor!==null,instancingMorph:Ht&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:en,alphaToCoverage:!!S.alphaToCoverage,map:ce,matcap:D,envMap:z,envMapMode:z&&st.mapping,envMapCubeUVHeight:q,aoMap:R,lightMap:mt,bumpMap:nt,normalMap:Tt,displacementMap:d&&lt,emissiveMap:Vt,normalMapObjectSpace:Tt&&S.normalMapType===rg,normalMapTangentSpace:Tt&&S.normalMapType===Wf,metalnessMap:bt,roughnessMap:A,anisotropy:b,anisotropyMap:dt,clearcoat:F,clearcoatMap:St,clearcoatNormalMap:re,clearcoatRoughnessMap:rt,dispersion:Y,iridescence:et,iridescenceMap:At,iridescenceThicknessMap:Gt,sheen:K,sheenColorMap:$t,sheenRoughnessMap:Ct,specularMap:le,specularColorMap:ee,specularIntensityMap:we,transmission:Rt,transmissionMap:N,thicknessMap:ft,gradientMap:X,opaque:S.transparent===!1&&S.blending===qs&&S.alphaToCoverage===!1,alphaMap:Q,alphaTest:xt,alphaHash:gt,combine:S.combine,mapUv:ce&&v(S.map.channel),aoMapUv:R&&v(S.aoMap.channel),lightMapUv:mt&&v(S.lightMap.channel),bumpMapUv:nt&&v(S.bumpMap.channel),normalMapUv:Tt&&v(S.normalMap.channel),displacementMapUv:lt&&v(S.displacementMap.channel),emissiveMapUv:Vt&&v(S.emissiveMap.channel),metalnessMapUv:bt&&v(S.metalnessMap.channel),roughnessMapUv:A&&v(S.roughnessMap.channel),anisotropyMapUv:dt&&v(S.anisotropyMap.channel),clearcoatMapUv:St&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:re&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:$t&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&v(S.sheenRoughnessMap.channel),specularMapUv:le&&v(S.specularMap.channel),specularColorMapUv:ee&&v(S.specularColorMap.channel),specularIntensityMapUv:we&&v(S.specularIntensityMap.channel),transmissionMapUv:N&&v(S.transmissionMap.channel),thicknessMapUv:ft&&v(S.thicknessMap.channel),alphaMapUv:Q&&v(S.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Tt||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!J.attributes.uv&&(ce||Q),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Nt,skinning:B.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:Wt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ie,decodeVideoTexture:ce&&S.map.isVideoTexture===!0&&ae.getTransfer(S.map.colorSpace)===_e,decodeVideoTextureEmissive:Vt&&S.emissiveMap.isVideoTexture===!0&&ae.getTransfer(S.emissiveMap.colorSpace)===_e,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===De,flipSided:S.side===tn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Jt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Jt&&S.extensions.multiDraw===!0||zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Xe.vertexUv1s=l.has(1),Xe.vertexUv2s=l.has(2),Xe.vertexUv3s=l.has(3),l.clear(),Xe}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)M.push(I),M.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(y(M,S),_(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function y(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function _(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){const M=m[S.type];let I;if(M){const G=Zn[M];I=Yg.clone(G.uniforms)}else I=S.uniforms;return I}function L(S,M){let I;for(let G=0,B=h.length;G<B;G++){const W=h[G];if(W.cacheKey===M){I=W,++I.usedTimes;break}}return I===void 0&&(I=new cy(i,M,S,r),h.push(I)),I}function E(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function C(S){c.remove(S)}function P(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:L,releaseProgram:E,releaseShaderCache:C,programs:h,dispose:P}}function fy(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function py(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function nd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function id(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,m,v,g){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:v,group:g},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=v,p.group=g),t++,p}function a(u,d,f,m,v,g){const p=o(u,d,f,m,v,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,m,v,g){const p=o(u,d,f,m,v,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||py),n.length>1&&n.sort(d||nd),s.length>1&&s.sort(d||nd)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function my(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new id,i.set(n,[o])):s>=r.length?(o=new id,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function gy(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new w,color:new kt};break;case"SpotLight":e={position:new w,direction:new w,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new w,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new w,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new w,halfWidth:new w,halfHeight:new w};break}return i[t.id]=e,e}}}function vy(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let xy=0;function _y(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function yy(i){const t=new gy,e=vy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new w);const s=new w,r=new Bt,o=new Bt;function a(l){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,m=0,v=0,g=0,p=0,y=0,_=0,x=0,L=0,E=0,C=0;l.sort(_y);for(let S=0,M=l.length;S<M;S++){const I=l[S],G=I.color,B=I.intensity,W=I.distance,J=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=G.r*B,u+=G.g*B,d+=G.b*B;else if(I.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(I.sh.coefficients[$],B);C++}else if(I.isDirectionalLight){const $=t.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const st=I.shadow,q=e.get(I);q.shadowIntensity=st.intensity,q.shadowBias=st.bias,q.shadowNormalBias=st.normalBias,q.shadowRadius=st.radius,q.shadowMapSize=st.mapSize,n.directionalShadow[f]=q,n.directionalShadowMap[f]=J,n.directionalShadowMatrix[f]=I.shadow.matrix,y++}n.directional[f]=$,f++}else if(I.isSpotLight){const $=t.get(I);$.position.setFromMatrixPosition(I.matrixWorld),$.color.copy(G).multiplyScalar(B),$.distance=W,$.coneCos=Math.cos(I.angle),$.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),$.decay=I.decay,n.spot[v]=$;const st=I.shadow;if(I.map&&(n.spotLightMap[L]=I.map,L++,st.updateMatrices(I),I.castShadow&&E++),n.spotLightMatrix[v]=st.matrix,I.castShadow){const q=e.get(I);q.shadowIntensity=st.intensity,q.shadowBias=st.bias,q.shadowNormalBias=st.normalBias,q.shadowRadius=st.radius,q.shadowMapSize=st.mapSize,n.spotShadow[v]=q,n.spotShadowMap[v]=J,x++}v++}else if(I.isRectAreaLight){const $=t.get(I);$.color.copy(G).multiplyScalar(B),$.halfWidth.set(I.width*.5,0,0),$.halfHeight.set(0,I.height*.5,0),n.rectArea[g]=$,g++}else if(I.isPointLight){const $=t.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),$.distance=I.distance,$.decay=I.decay,I.castShadow){const st=I.shadow,q=e.get(I);q.shadowIntensity=st.intensity,q.shadowBias=st.bias,q.shadowNormalBias=st.normalBias,q.shadowRadius=st.radius,q.shadowMapSize=st.mapSize,q.shadowCameraNear=st.camera.near,q.shadowCameraFar=st.camera.far,n.pointShadow[m]=q,n.pointShadowMap[m]=J,n.pointShadowMatrix[m]=I.shadow.matrix,_++}n.point[m]=$,m++}else if(I.isHemisphereLight){const $=t.get(I);$.skyColor.copy(I.color).multiplyScalar(B),$.groundColor.copy(I.groundColor).multiplyScalar(B),n.hemi[p]=$,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==m||P.spotLength!==v||P.rectAreaLength!==g||P.hemiLength!==p||P.numDirectionalShadows!==y||P.numPointShadows!==_||P.numSpotShadows!==x||P.numSpotMaps!==L||P.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=x+L-E,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,P.directionalLength=f,P.pointLength=m,P.spotLength=v,P.rectAreaLength=g,P.hemiLength=p,P.numDirectionalShadows=y,P.numPointShadows=_,P.numSpotShadows=x,P.numSpotMaps=L,P.numLightProbes=C,n.version=xy++)}function c(l,h){let u=0,d=0,f=0,m=0,v=0;const g=h.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){const _=l[p];if(_.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),u++}else if(_.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),f++}else if(_.isRectAreaLight){const x=n.rectArea[m];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),o.identity(),r.copy(_.matrixWorld),r.premultiply(g),o.extractRotation(r),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(_.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(g),v++}}}return{setup:a,setupView:c,state:n}}function sd(i){const t=new yy(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function My(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new sd(i),t.set(s,[a])):r>=o.length?(a=new sd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class by extends $n{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ig,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Sy extends $n{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const wy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ty=`uniform sampler2D shadow_pass;
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
}`;function Ey(i,t,e){let n=new bh;const s=new Z,r=new Z,o=new de,a=new by({depthPacking:sg}),c=new Sy,l={},h=e.maxTextureSize,u={[Si]:tn,[tn]:Si,[De]:De},d=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Z},radius:{value:4}},vertexShader:wy,fragmentShader:Ty}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new ye;m.setAttribute("position",new Ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new tt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rf;let p=this.type;this.render=function(E,C,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),G=i.state;G.setBlending(Vi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const B=p!==xi&&this.type===xi,W=p===xi&&this.type!==xi;for(let J=0,$=E.length;J<$;J++){const st=E[J],q=st.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const ht=q.getFrameExtents();if(s.multiply(ht),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ht.x),s.x=r.x*ht.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ht.y),s.y=r.y*ht.y,q.mapSize.y=r.y)),q.map===null||B===!0||W===!0){const wt=this.type!==xi?{minFilter:cn,magFilter:cn}:{};q.map!==null&&q.map.dispose(),q.map=new ms(s.x,s.y,wt),q.map.texture.name=st.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const it=q.getViewportCount();for(let wt=0;wt<it;wt++){const Wt=q.getViewport(wt);o.set(r.x*Wt.x,r.y*Wt.y,r.x*Wt.z,r.y*Wt.w),G.viewport(o),q.updateMatrices(st,wt),n=q.getFrustum(),x(C,P,q.camera,st,this.type)}q.isPointLightShadow!==!0&&this.type===xi&&y(q,P),q.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(S,M,I)};function y(E,C){const P=t.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ms(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(C,null,P,d,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(C,null,P,f,v,null)}function _(E,C,P,S){let M=null;const I=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)M=I;else if(M=P.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const G=M.uuid,B=C.uuid;let W=l[G];W===void 0&&(W={},l[G]=W);let J=W[B];J===void 0&&(J=M.clone(),W[B]=J,C.addEventListener("dispose",L)),M=J}if(M.visible=C.visible,M.wireframe=C.wireframe,S===xi?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:u[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const G=i.properties.get(M);G.light=P}return M}function x(E,C,P,S,M){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===xi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);const B=t.update(E),W=E.material;if(Array.isArray(W)){const J=B.groups;for(let $=0,st=J.length;$<st;$++){const q=J[$],ht=W[q.materialIndex];if(ht&&ht.visible){const it=_(E,ht,S,M);E.onBeforeShadow(i,E,C,P,B,it,q),i.renderBufferDirect(P,null,B,it,E,q),E.onAfterShadow(i,E,C,P,B,it,q)}}}else if(W.visible){const J=_(E,W,S,M);E.onBeforeShadow(i,E,C,P,B,J,null),i.renderBufferDirect(P,null,B,J,E,null),E.onAfterShadow(i,E,C,P,B,J,null)}}const G=E.children;for(let B=0,W=G.length;B<W;B++)x(G[B],C,P,S,M)}function L(E){E.target.removeEventListener("dispose",L);for(const P in l){const S=l[P],M=E.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const Ay={[al]:cl,[ll]:dl,[hl]:fl,[Ks]:ul,[cl]:al,[dl]:ll,[fl]:hl,[ul]:Ks};function Cy(i,t){function e(){let N=!1;const ft=new de;let X=null;const Q=new de(0,0,0,0);return{setMask:function(xt){X!==xt&&!N&&(i.colorMask(xt,xt,xt,xt),X=xt)},setLocked:function(xt){N=xt},setClear:function(xt,gt,Jt,Ie,Xe){Xe===!0&&(xt*=Ie,gt*=Ie,Jt*=Ie),ft.set(xt,gt,Jt,Ie),Q.equals(ft)===!1&&(i.clearColor(xt,gt,Jt,Ie),Q.copy(ft))},reset:function(){N=!1,X=null,Q.set(-1,0,0,0)}}}function n(){let N=!1,ft=!1,X=null,Q=null,xt=null;return{setReversed:function(gt){if(ft!==gt){const Jt=t.get("EXT_clip_control");ft?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT);const Ie=xt;xt=null,this.setClear(Ie)}ft=gt},getReversed:function(){return ft},setTest:function(gt){gt?at(i.DEPTH_TEST):Nt(i.DEPTH_TEST)},setMask:function(gt){X!==gt&&!N&&(i.depthMask(gt),X=gt)},setFunc:function(gt){if(ft&&(gt=Ay[gt]),Q!==gt){switch(gt){case al:i.depthFunc(i.NEVER);break;case cl:i.depthFunc(i.ALWAYS);break;case ll:i.depthFunc(i.LESS);break;case Ks:i.depthFunc(i.LEQUAL);break;case hl:i.depthFunc(i.EQUAL);break;case ul:i.depthFunc(i.GEQUAL);break;case dl:i.depthFunc(i.GREATER);break;case fl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=gt}},setLocked:function(gt){N=gt},setClear:function(gt){xt!==gt&&(ft&&(gt=1-gt),i.clearDepth(gt),xt=gt)},reset:function(){N=!1,X=null,Q=null,xt=null,ft=!1}}}function s(){let N=!1,ft=null,X=null,Q=null,xt=null,gt=null,Jt=null,Ie=null,Xe=null;return{setTest:function(ge){N||(ge?at(i.STENCIL_TEST):Nt(i.STENCIL_TEST))},setMask:function(ge){ft!==ge&&!N&&(i.stencilMask(ge),ft=ge)},setFunc:function(ge,kn,ai){(X!==ge||Q!==kn||xt!==ai)&&(i.stencilFunc(ge,kn,ai),X=ge,Q=kn,xt=ai)},setOp:function(ge,kn,ai){(gt!==ge||Jt!==kn||Ie!==ai)&&(i.stencilOp(ge,kn,ai),gt=ge,Jt=kn,Ie=ai)},setLocked:function(ge){N=ge},setClear:function(ge){Xe!==ge&&(i.clearStencil(ge),Xe=ge)},reset:function(){N=!1,ft=null,X=null,Q=null,xt=null,gt=null,Jt=null,Ie=null,Xe=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],m=null,v=!1,g=null,p=null,y=null,_=null,x=null,L=null,E=null,C=new kt(0,0,0),P=0,S=!1,M=null,I=null,G=null,B=null,W=null;const J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,st=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(q)[1]),$=st>=1):q.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),$=st>=2);let ht=null,it={};const wt=i.getParameter(i.SCISSOR_BOX),Wt=i.getParameter(i.VIEWPORT),he=new de().fromArray(wt),j=new de().fromArray(Wt);function ot(N,ft,X,Q){const xt=new Uint8Array(4),gt=i.createTexture();i.bindTexture(N,gt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Jt=0;Jt<X;Jt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ft,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(ft+Jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return gt}const Et={};Et[i.TEXTURE_2D]=ot(i.TEXTURE_2D,i.TEXTURE_2D,1),Et[i.TEXTURE_CUBE_MAP]=ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[i.TEXTURE_2D_ARRAY]=ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Et[i.TEXTURE_3D]=ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),at(i.DEPTH_TEST),o.setFunc(Ks),nt(!1),Tt(ou),at(i.CULL_FACE),R(Vi);function at(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function Nt(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function Ht(N,ft){return u[N]!==ft?(i.bindFramebuffer(N,ft),u[N]=ft,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ft),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ft),!0):!1}function zt(N,ft){let X=f,Q=!1;if(N){X=d.get(ft),X===void 0&&(X=[],d.set(ft,X));const xt=N.textures;if(X.length!==xt.length||X[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,Jt=xt.length;gt<Jt;gt++)X[gt]=i.COLOR_ATTACHMENT0+gt;X.length=xt.length,Q=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,Q=!0);Q&&i.drawBuffers(X)}function ce(N){return m!==N?(i.useProgram(N),m=N,!0):!1}const D={[ls]:i.FUNC_ADD,[Rm]:i.FUNC_SUBTRACT,[Lm]:i.FUNC_REVERSE_SUBTRACT};D[Pm]=i.MIN,D[Im]=i.MAX;const z={[Nm]:i.ZERO,[Dm]:i.ONE,[Um]:i.SRC_COLOR,[rl]:i.SRC_ALPHA,[Hm]:i.SRC_ALPHA_SATURATE,[Bm]:i.DST_COLOR,[Om]:i.DST_ALPHA,[km]:i.ONE_MINUS_SRC_COLOR,[ol]:i.ONE_MINUS_SRC_ALPHA,[zm]:i.ONE_MINUS_DST_COLOR,[Fm]:i.ONE_MINUS_DST_ALPHA,[Vm]:i.CONSTANT_COLOR,[Gm]:i.ONE_MINUS_CONSTANT_COLOR,[Wm]:i.CONSTANT_ALPHA,[$m]:i.ONE_MINUS_CONSTANT_ALPHA};function R(N,ft,X,Q,xt,gt,Jt,Ie,Xe,ge){if(N===Vi){v===!0&&(Nt(i.BLEND),v=!1);return}if(v===!1&&(at(i.BLEND),v=!0),N!==Cm){if(N!==g||ge!==S){if((p!==ls||x!==ls)&&(i.blendEquation(i.FUNC_ADD),p=ls,x=ls),ge)switch(N){case qs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ra:i.blendFunc(i.ONE,i.ONE);break;case au:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case cu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case qs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ra:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case au:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case cu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}y=null,_=null,L=null,E=null,C.set(0,0,0),P=0,g=N,S=ge}return}xt=xt||ft,gt=gt||X,Jt=Jt||Q,(ft!==p||xt!==x)&&(i.blendEquationSeparate(D[ft],D[xt]),p=ft,x=xt),(X!==y||Q!==_||gt!==L||Jt!==E)&&(i.blendFuncSeparate(z[X],z[Q],z[gt],z[Jt]),y=X,_=Q,L=gt,E=Jt),(Ie.equals(C)===!1||Xe!==P)&&(i.blendColor(Ie.r,Ie.g,Ie.b,Xe),C.copy(Ie),P=Xe),g=N,S=!1}function mt(N,ft){N.side===De?Nt(i.CULL_FACE):at(i.CULL_FACE);let X=N.side===tn;ft&&(X=!X),nt(X),N.blending===qs&&N.transparent===!1?R(Vi):R(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const Q=N.stencilWrite;a.setTest(Q),Q&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Vt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):Nt(i.SAMPLE_ALPHA_TO_COVERAGE)}function nt(N){M!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),M=N)}function Tt(N){N!==Em?(at(i.CULL_FACE),N!==I&&(N===ou?i.cullFace(i.BACK):N===Am?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Nt(i.CULL_FACE),I=N}function lt(N){N!==G&&($&&i.lineWidth(N),G=N)}function Vt(N,ft,X){N?(at(i.POLYGON_OFFSET_FILL),(B!==ft||W!==X)&&(i.polygonOffset(ft,X),B=ft,W=X)):Nt(i.POLYGON_OFFSET_FILL)}function bt(N){N?at(i.SCISSOR_TEST):Nt(i.SCISSOR_TEST)}function A(N){N===void 0&&(N=i.TEXTURE0+J-1),ht!==N&&(i.activeTexture(N),ht=N)}function b(N,ft,X){X===void 0&&(ht===null?X=i.TEXTURE0+J-1:X=ht);let Q=it[X];Q===void 0&&(Q={type:void 0,texture:void 0},it[X]=Q),(Q.type!==N||Q.texture!==ft)&&(ht!==X&&(i.activeTexture(X),ht=X),i.bindTexture(N,ft||Et[N]),Q.type=N,Q.texture=ft)}function F(){const N=it[ht];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Rt(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function dt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function St(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function re(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function rt(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function At(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Gt(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $t(N){he.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),he.copy(N))}function Ct(N){j.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),j.copy(N))}function le(N,ft){let X=l.get(ft);X===void 0&&(X=new WeakMap,l.set(ft,X));let Q=X.get(N);Q===void 0&&(Q=i.getUniformBlockIndex(ft,N.name),X.set(N,Q))}function ee(N,ft){const Q=l.get(ft).get(N);c.get(ft)!==Q&&(i.uniformBlockBinding(ft,Q,N.__bindingPointIndex),c.set(ft,Q))}function we(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ht=null,it={},u={},d=new WeakMap,f=[],m=null,v=!1,g=null,p=null,y=null,_=null,x=null,L=null,E=null,C=new kt(0,0,0),P=0,S=!1,M=null,I=null,G=null,B=null,W=null,he.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:at,disable:Nt,bindFramebuffer:Ht,drawBuffers:zt,useProgram:ce,setBlending:R,setMaterial:mt,setFlipSided:nt,setCullFace:Tt,setLineWidth:lt,setPolygonOffset:Vt,setScissorTest:bt,activeTexture:A,bindTexture:b,unbindTexture:F,compressedTexImage2D:Y,compressedTexImage3D:et,texImage2D:At,texImage3D:Gt,updateUBOMapping:le,uniformBlockBinding:ee,texStorage2D:re,texStorage3D:rt,texSubImage2D:K,texSubImage3D:Rt,compressedTexSubImage2D:dt,compressedTexSubImage3D:St,scissor:$t,viewport:Ct,reset:we}}function rd(i,t,e,n){const s=Ry(n);switch(e){case Of:return i*t;case Bf:return i*t;case zf:return i*t*2;case gh:return i*t/s.components*s.byteLength;case vh:return i*t/s.components*s.byteLength;case Hf:return i*t*2/s.components*s.byteLength;case xh:return i*t*2/s.components*s.byteLength;case Ff:return i*t*3/s.components*s.byteLength;case In:return i*t*4/s.components*s.byteLength;case _h:return i*t*4/s.components*s.byteLength;case _a:case ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ma:case ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vl:case _l:return Math.max(i,16)*Math.max(t,8)/4;case gl:case xl:return Math.max(i,8)*Math.max(t,8)/2;case yl:case Ml:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case bl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Tl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case El:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Al:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Cl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ll:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Pl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Il:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Nl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Dl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ul:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case kl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Sa:case Ol:case Fl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Vf:case Bl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case zl:case Hl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ry(i){switch(i){case wi:case Df:return{byteLength:1,components:1};case Qr:case Uf:case po:return{byteLength:2,components:1};case ph:case mh:return{byteLength:2,components:4};case ps:case fh:case Wn:return{byteLength:4,components:1};case kf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Ly(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Z,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,b){return f?new OffscreenCanvas(A,b):no("canvas")}function v(A,b,F){let Y=1;const et=bt(A);if((et.width>F||et.height>F)&&(Y=F/Math.max(et.width,et.height)),Y<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const K=Math.floor(Y*et.width),Rt=Math.floor(Y*et.height);u===void 0&&(u=m(K,Rt));const dt=b?m(K,Rt):u;return dt.width=K,dt.height=Rt,dt.getContext("2d").drawImage(A,0,0,K,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+K+"x"+Rt+")."),dt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),A;return A}function g(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function y(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(A,b,F,Y,et=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let K=b;if(b===i.RED&&(F===i.FLOAT&&(K=i.R32F),F===i.HALF_FLOAT&&(K=i.R16F),F===i.UNSIGNED_BYTE&&(K=i.R8)),b===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(K=i.R8UI),F===i.UNSIGNED_SHORT&&(K=i.R16UI),F===i.UNSIGNED_INT&&(K=i.R32UI),F===i.BYTE&&(K=i.R8I),F===i.SHORT&&(K=i.R16I),F===i.INT&&(K=i.R32I)),b===i.RG&&(F===i.FLOAT&&(K=i.RG32F),F===i.HALF_FLOAT&&(K=i.RG16F),F===i.UNSIGNED_BYTE&&(K=i.RG8)),b===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(K=i.RG8UI),F===i.UNSIGNED_SHORT&&(K=i.RG16UI),F===i.UNSIGNED_INT&&(K=i.RG32UI),F===i.BYTE&&(K=i.RG8I),F===i.SHORT&&(K=i.RG16I),F===i.INT&&(K=i.RG32I)),b===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(K=i.RGB8UI),F===i.UNSIGNED_SHORT&&(K=i.RGB16UI),F===i.UNSIGNED_INT&&(K=i.RGB32UI),F===i.BYTE&&(K=i.RGB8I),F===i.SHORT&&(K=i.RGB16I),F===i.INT&&(K=i.RGB32I)),b===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),F===i.UNSIGNED_INT&&(K=i.RGBA32UI),F===i.BYTE&&(K=i.RGBA8I),F===i.SHORT&&(K=i.RGBA16I),F===i.INT&&(K=i.RGBA32I)),b===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),b===i.RGBA){const Rt=et?Ga:ae.getTransfer(Y);F===i.FLOAT&&(K=i.RGBA32F),F===i.HALF_FLOAT&&(K=i.RGBA16F),F===i.UNSIGNED_BYTE&&(K=Rt===_e?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function x(A,b){let F;return A?b===null||b===ps||b===Qs?F=i.DEPTH24_STENCIL8:b===Wn?F=i.DEPTH32F_STENCIL8:b===Qr&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ps||b===Qs?F=i.DEPTH_COMPONENT24:b===Wn?F=i.DEPTH_COMPONENT32F:b===Qr&&(F=i.DEPTH_COMPONENT16),F}function L(A,b){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==cn&&A.minFilter!==Mn?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function E(A){const b=A.target;b.removeEventListener("dispose",E),P(b),b.isVideoTexture&&h.delete(b)}function C(A){const b=A.target;b.removeEventListener("dispose",C),M(b)}function P(A){const b=n.get(A);if(b.__webglInit===void 0)return;const F=A.source,Y=d.get(F);if(Y){const et=Y[b.__cacheKey];et.usedTimes--,et.usedTimes===0&&S(A),Object.keys(Y).length===0&&d.delete(F)}n.remove(A)}function S(A){const b=n.get(A);i.deleteTexture(b.__webglTexture);const F=A.source,Y=d.get(F);delete Y[b.__cacheKey],o.memory.textures--}function M(A){const b=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(b.__webglFramebuffer[Y]))for(let et=0;et<b.__webglFramebuffer[Y].length;et++)i.deleteFramebuffer(b.__webglFramebuffer[Y][et]);else i.deleteFramebuffer(b.__webglFramebuffer[Y]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[Y])}else{if(Array.isArray(b.__webglFramebuffer))for(let Y=0;Y<b.__webglFramebuffer.length;Y++)i.deleteFramebuffer(b.__webglFramebuffer[Y]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Y=0;Y<b.__webglColorRenderbuffer.length;Y++)b.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[Y]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const F=A.textures;for(let Y=0,et=F.length;Y<et;Y++){const K=n.get(F[Y]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(F[Y])}n.remove(A)}let I=0;function G(){I=0}function B(){const A=I;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),I+=1,A}function W(A){const b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function J(A,b){const F=n.get(A);if(A.isVideoTexture&&lt(A),A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){const Y=A.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(F,A,b);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+b)}function $(A,b){const F=n.get(A);if(A.version>0&&F.__version!==A.version){j(F,A,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+b)}function st(A,b){const F=n.get(A);if(A.version>0&&F.__version!==A.version){j(F,A,b);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+b)}function q(A,b){const F=n.get(A);if(A.version>0&&F.__version!==A.version){ot(F,A,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+b)}const ht={[Xi]:i.REPEAT,[zi]:i.CLAMP_TO_EDGE,[La]:i.MIRRORED_REPEAT},it={[cn]:i.NEAREST,[Nf]:i.NEAREST_MIPMAP_NEAREST,[zr]:i.NEAREST_MIPMAP_LINEAR,[Mn]:i.LINEAR,[xa]:i.LINEAR_MIPMAP_NEAREST,[yi]:i.LINEAR_MIPMAP_LINEAR},wt={[og]:i.NEVER,[dg]:i.ALWAYS,[ag]:i.LESS,[$f]:i.LEQUAL,[cg]:i.EQUAL,[ug]:i.GEQUAL,[lg]:i.GREATER,[hg]:i.NOTEQUAL};function Wt(A,b){if(b.type===Wn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Mn||b.magFilter===xa||b.magFilter===zr||b.magFilter===yi||b.minFilter===Mn||b.minFilter===xa||b.minFilter===zr||b.minFilter===yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,ht[b.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ht[b.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ht[b.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,it[b.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,it[b.minFilter]),b.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,wt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===cn||b.minFilter!==zr&&b.minFilter!==yi||b.type===Wn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function he(A,b){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",E));const Y=b.source;let et=d.get(Y);et===void 0&&(et={},d.set(Y,et));const K=W(b);if(K!==A.__cacheKey){et[K]===void 0&&(et[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),et[K].usedTimes++;const Rt=et[A.__cacheKey];Rt!==void 0&&(et[A.__cacheKey].usedTimes--,Rt.usedTimes===0&&S(b)),A.__cacheKey=K,A.__webglTexture=et[K].texture}return F}function j(A,b,F){let Y=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Y=i.TEXTURE_3D);const et=he(A,b),K=b.source;e.bindTexture(Y,A.__webglTexture,i.TEXTURE0+F);const Rt=n.get(K);if(K.version!==Rt.__version||et===!0){e.activeTexture(i.TEXTURE0+F);const dt=ae.getPrimaries(ae.workingColorSpace),St=b.colorSpace===Fi?null:ae.getPrimaries(b.colorSpace),re=b.colorSpace===Fi||dt===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let rt=v(b.image,!1,s.maxTextureSize);rt=Vt(b,rt);const At=r.convert(b.format,b.colorSpace),Gt=r.convert(b.type);let $t=_(b.internalFormat,At,Gt,b.colorSpace,b.isVideoTexture);Wt(Y,b);let Ct;const le=b.mipmaps,ee=b.isVideoTexture!==!0,we=Rt.__version===void 0||et===!0,N=K.dataReady,ft=L(b,rt);if(b.isDepthTexture)$t=x(b.format===tr,b.type),we&&(ee?e.texStorage2D(i.TEXTURE_2D,1,$t,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,$t,rt.width,rt.height,0,At,Gt,null));else if(b.isDataTexture)if(le.length>0){ee&&we&&e.texStorage2D(i.TEXTURE_2D,ft,$t,le[0].width,le[0].height);for(let X=0,Q=le.length;X<Q;X++)Ct=le[X],ee?N&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,Ct.width,Ct.height,At,Gt,Ct.data):e.texImage2D(i.TEXTURE_2D,X,$t,Ct.width,Ct.height,0,At,Gt,Ct.data);b.generateMipmaps=!1}else ee?(we&&e.texStorage2D(i.TEXTURE_2D,ft,$t,rt.width,rt.height),N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt.width,rt.height,At,Gt,rt.data)):e.texImage2D(i.TEXTURE_2D,0,$t,rt.width,rt.height,0,At,Gt,rt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ee&&we&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,$t,le[0].width,le[0].height,rt.depth);for(let X=0,Q=le.length;X<Q;X++)if(Ct=le[X],b.format!==In)if(At!==null)if(ee){if(N)if(b.layerUpdates.size>0){const xt=rd(Ct.width,Ct.height,b.format,b.type);for(const gt of b.layerUpdates){const Jt=Ct.data.subarray(gt*xt/Ct.data.BYTES_PER_ELEMENT,(gt+1)*xt/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,gt,Ct.width,Ct.height,1,At,Jt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,Ct.width,Ct.height,rt.depth,At,Ct.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,$t,Ct.width,Ct.height,rt.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ee?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,Ct.width,Ct.height,rt.depth,At,Gt,Ct.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,$t,Ct.width,Ct.height,rt.depth,0,At,Gt,Ct.data)}else{ee&&we&&e.texStorage2D(i.TEXTURE_2D,ft,$t,le[0].width,le[0].height);for(let X=0,Q=le.length;X<Q;X++)Ct=le[X],b.format!==In?At!==null?ee?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,Ct.width,Ct.height,At,Ct.data):e.compressedTexImage2D(i.TEXTURE_2D,X,$t,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?N&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,Ct.width,Ct.height,At,Gt,Ct.data):e.texImage2D(i.TEXTURE_2D,X,$t,Ct.width,Ct.height,0,At,Gt,Ct.data)}else if(b.isDataArrayTexture)if(ee){if(we&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,$t,rt.width,rt.height,rt.depth),N)if(b.layerUpdates.size>0){const X=rd(rt.width,rt.height,b.format,b.type);for(const Q of b.layerUpdates){const xt=rt.data.subarray(Q*X/rt.data.BYTES_PER_ELEMENT,(Q+1)*X/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,rt.width,rt.height,1,At,Gt,xt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,At,Gt,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,$t,rt.width,rt.height,rt.depth,0,At,Gt,rt.data);else if(b.isData3DTexture)ee?(we&&e.texStorage3D(i.TEXTURE_3D,ft,$t,rt.width,rt.height,rt.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,At,Gt,rt.data)):e.texImage3D(i.TEXTURE_3D,0,$t,rt.width,rt.height,rt.depth,0,At,Gt,rt.data);else if(b.isFramebufferTexture){if(we)if(ee)e.texStorage2D(i.TEXTURE_2D,ft,$t,rt.width,rt.height);else{let X=rt.width,Q=rt.height;for(let xt=0;xt<ft;xt++)e.texImage2D(i.TEXTURE_2D,xt,$t,X,Q,0,At,Gt,null),X>>=1,Q>>=1}}else if(le.length>0){if(ee&&we){const X=bt(le[0]);e.texStorage2D(i.TEXTURE_2D,ft,$t,X.width,X.height)}for(let X=0,Q=le.length;X<Q;X++)Ct=le[X],ee?N&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,At,Gt,Ct):e.texImage2D(i.TEXTURE_2D,X,$t,At,Gt,Ct);b.generateMipmaps=!1}else if(ee){if(we){const X=bt(rt);e.texStorage2D(i.TEXTURE_2D,ft,$t,X.width,X.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,At,Gt,rt)}else e.texImage2D(i.TEXTURE_2D,0,$t,At,Gt,rt);g(b)&&p(Y),Rt.__version=K.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function ot(A,b,F){if(b.image.length!==6)return;const Y=he(A,b),et=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+F);const K=n.get(et);if(et.version!==K.__version||Y===!0){e.activeTexture(i.TEXTURE0+F);const Rt=ae.getPrimaries(ae.workingColorSpace),dt=b.colorSpace===Fi?null:ae.getPrimaries(b.colorSpace),St=b.colorSpace===Fi||Rt===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const re=b.isCompressedTexture||b.image[0].isCompressedTexture,rt=b.image[0]&&b.image[0].isDataTexture,At=[];for(let Q=0;Q<6;Q++)!re&&!rt?At[Q]=v(b.image[Q],!0,s.maxCubemapSize):At[Q]=rt?b.image[Q].image:b.image[Q],At[Q]=Vt(b,At[Q]);const Gt=At[0],$t=r.convert(b.format,b.colorSpace),Ct=r.convert(b.type),le=_(b.internalFormat,$t,Ct,b.colorSpace),ee=b.isVideoTexture!==!0,we=K.__version===void 0||Y===!0,N=et.dataReady;let ft=L(b,Gt);Wt(i.TEXTURE_CUBE_MAP,b);let X;if(re){ee&&we&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,le,Gt.width,Gt.height);for(let Q=0;Q<6;Q++){X=At[Q].mipmaps;for(let xt=0;xt<X.length;xt++){const gt=X[xt];b.format!==In?$t!==null?ee?N&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,0,0,gt.width,gt.height,$t,gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,le,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ee?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,0,0,gt.width,gt.height,$t,Ct,gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,le,gt.width,gt.height,0,$t,Ct,gt.data)}}}else{if(X=b.mipmaps,ee&&we){X.length>0&&ft++;const Q=bt(At[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,le,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(rt){ee?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,At[Q].width,At[Q].height,$t,Ct,At[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,le,At[Q].width,At[Q].height,0,$t,Ct,At[Q].data);for(let xt=0;xt<X.length;xt++){const Jt=X[xt].image[Q].image;ee?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,0,0,Jt.width,Jt.height,$t,Ct,Jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,le,Jt.width,Jt.height,0,$t,Ct,Jt.data)}}else{ee?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,$t,Ct,At[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,le,$t,Ct,At[Q]);for(let xt=0;xt<X.length;xt++){const gt=X[xt];ee?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,0,0,$t,Ct,gt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,le,$t,Ct,gt.image[Q])}}}g(b)&&p(i.TEXTURE_CUBE_MAP),K.__version=et.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function Et(A,b,F,Y,et,K){const Rt=r.convert(F.format,F.colorSpace),dt=r.convert(F.type),St=_(F.internalFormat,Rt,dt,F.colorSpace),re=n.get(b),rt=n.get(F);if(rt.__renderTarget=b,!re.__hasExternalTextures){const At=Math.max(1,b.width>>K),Gt=Math.max(1,b.height>>K);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,K,St,At,Gt,b.depth,0,Rt,dt,null):e.texImage2D(et,K,St,At,Gt,0,Rt,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Tt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,et,rt.__webglTexture,0,nt(b)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,et,rt.__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(A,b,F){if(i.bindRenderbuffer(i.RENDERBUFFER,A),b.depthBuffer){const Y=b.depthTexture,et=Y&&Y.isDepthTexture?Y.type:null,K=x(b.stencilBuffer,et),Rt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=nt(b);Tt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,K,b.width,b.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,K,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,K,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Rt,i.RENDERBUFFER,A)}else{const Y=b.textures;for(let et=0;et<Y.length;et++){const K=Y[et],Rt=r.convert(K.format,K.colorSpace),dt=r.convert(K.type),St=_(K.internalFormat,Rt,dt,K.colorSpace),re=nt(b);F&&Tt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,St,b.width,b.height):Tt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,St,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,St,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Nt(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(b.depthTexture);Y.__renderTarget=b,(!Y.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),J(b.depthTexture,0);const et=Y.__webglTexture,K=nt(b);if(b.depthTexture.format===Xs)Tt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(b.depthTexture.format===tr)Tt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Ht(A){const b=n.get(A),F=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){const Y=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Y){const et=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Y.removeEventListener("dispose",et)};Y.addEventListener("dispose",et),b.__depthDisposeCallback=et}b.__boundDepthTexture=Y}if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Nt(b.__webglFramebuffer,A)}else if(F){b.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[Y]),b.__webglDepthbuffer[Y]===void 0)b.__webglDepthbuffer[Y]=i.createRenderbuffer(),at(b.__webglDepthbuffer[Y],A,!1);else{const et=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=b.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,K)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),at(b.__webglDepthbuffer,A,!1);else{const Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(A,b,F){const Y=n.get(A);b!==void 0&&Et(Y.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Ht(A)}function ce(A){const b=A.texture,F=n.get(A),Y=n.get(b);A.addEventListener("dispose",C);const et=A.textures,K=A.isWebGLCubeRenderTarget===!0,Rt=et.length>1;if(Rt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=b.version,o.memory.textures++),K){F.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(b.mipmaps&&b.mipmaps.length>0){F.__webglFramebuffer[dt]=[];for(let St=0;St<b.mipmaps.length;St++)F.__webglFramebuffer[dt][St]=i.createFramebuffer()}else F.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){F.__webglFramebuffer=[];for(let dt=0;dt<b.mipmaps.length;dt++)F.__webglFramebuffer[dt]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Rt)for(let dt=0,St=et.length;dt<St;dt++){const re=n.get(et[dt]);re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&Tt(A)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let dt=0;dt<et.length;dt++){const St=et[dt];F.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[dt]);const re=r.convert(St.format,St.colorSpace),rt=r.convert(St.type),At=_(St.internalFormat,re,rt,St.colorSpace,A.isXRRenderTarget===!0),Gt=nt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,At,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,F.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),at(F.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Wt(i.TEXTURE_CUBE_MAP,b);for(let dt=0;dt<6;dt++)if(b.mipmaps&&b.mipmaps.length>0)for(let St=0;St<b.mipmaps.length;St++)Et(F.__webglFramebuffer[dt][St],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,St);else Et(F.__webglFramebuffer[dt],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);g(b)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let dt=0,St=et.length;dt<St;dt++){const re=et[dt],rt=n.get(re);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),Wt(i.TEXTURE_2D,re),Et(F.__webglFramebuffer,A,re,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,0),g(re)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(dt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,Y.__webglTexture),Wt(dt,b),b.mipmaps&&b.mipmaps.length>0)for(let St=0;St<b.mipmaps.length;St++)Et(F.__webglFramebuffer[St],A,b,i.COLOR_ATTACHMENT0,dt,St);else Et(F.__webglFramebuffer,A,b,i.COLOR_ATTACHMENT0,dt,0);g(b)&&p(dt),e.unbindTexture()}A.depthBuffer&&Ht(A)}function D(A){const b=A.textures;for(let F=0,Y=b.length;F<Y;F++){const et=b[F];if(g(et)){const K=y(A),Rt=n.get(et).__webglTexture;e.bindTexture(K,Rt),p(K),e.unbindTexture()}}}const z=[],R=[];function mt(A){if(A.samples>0){if(Tt(A)===!1){const b=A.textures,F=A.width,Y=A.height;let et=i.COLOR_BUFFER_BIT;const K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=n.get(A),dt=b.length>1;if(dt)for(let St=0;St<b.length;St++)e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let St=0;St<b.length;St++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[St]);const re=n.get(b[St]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,re,0)}i.blitFramebuffer(0,0,F,Y,0,0,F,Y,et,i.NEAREST),c===!0&&(z.length=0,R.length=0,z.push(i.COLOR_ATTACHMENT0+St),A.depthBuffer&&A.resolveDepthBuffer===!1&&(z.push(K),R.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,z))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let St=0;St<b.length;St++){e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[St]);const re=n.get(b[St]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,re,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const b=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function nt(A){return Math.min(s.maxSamples,A.samples)}function Tt(A){const b=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function lt(A){const b=o.render.frame;h.get(A)!==b&&(h.set(A,b),A.update())}function Vt(A,b){const F=A.colorSpace,Y=A.format,et=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==en&&F!==Fi&&(ae.getTransfer(F)===_e?(Y!==In||et!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),b}function bt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=G,this.setTexture2D=J,this.setTexture2DArray=$,this.setTexture3D=st,this.setTextureCube=q,this.rebindTextures=zt,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=Tt}function Py(i,t){function e(n,s=Fi){let r;const o=ae.getTransfer(s);if(n===wi)return i.UNSIGNED_BYTE;if(n===ph)return i.UNSIGNED_SHORT_4_4_4_4;if(n===mh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===kf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Df)return i.BYTE;if(n===Uf)return i.SHORT;if(n===Qr)return i.UNSIGNED_SHORT;if(n===fh)return i.INT;if(n===ps)return i.UNSIGNED_INT;if(n===Wn)return i.FLOAT;if(n===po)return i.HALF_FLOAT;if(n===Of)return i.ALPHA;if(n===Ff)return i.RGB;if(n===In)return i.RGBA;if(n===Bf)return i.LUMINANCE;if(n===zf)return i.LUMINANCE_ALPHA;if(n===Xs)return i.DEPTH_COMPONENT;if(n===tr)return i.DEPTH_STENCIL;if(n===gh)return i.RED;if(n===vh)return i.RED_INTEGER;if(n===Hf)return i.RG;if(n===xh)return i.RG_INTEGER;if(n===_h)return i.RGBA_INTEGER;if(n===_a||n===ya||n===Ma||n===ba)if(o===_e)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===_a)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===_a)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ma)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ba)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===gl||n===vl||n===xl||n===_l)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===gl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_l)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yl||n===Ml||n===bl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===yl||n===Ml)return o===_e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===bl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Sl||n===wl||n===Tl||n===El||n===Al||n===Cl||n===Rl||n===Ll||n===Pl||n===Il||n===Nl||n===Dl||n===Ul||n===kl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Sl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Tl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===El)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Al)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Cl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Rl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ll)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Il)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Nl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Dl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ul)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===kl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Sa||n===Ol||n===Fl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Sa)return o===_e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ol)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vf||n===Bl||n===zl||n===Hl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Sa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Bl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Hl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Iy extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Mt extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ny={type:"move"};class Cc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const g=e.getJointPose(v,n),p=this._getHandJoint(l,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ny)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Mt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Dy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Uy=`
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

}`;class ky{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Be,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ti({vertexShader:Dy,fragmentShader:Uy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new tt(new qe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Oy extends dr{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null;const v=new ky,g=e.getContextAttributes();let p=null,y=null;const _=[],x=[],L=new Z;let E=null;const C=new Ze;C.viewport=new de;const P=new Ze;P.viewport=new de;const S=[C,P],M=new Iy;let I=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ot=_[j];return ot===void 0&&(ot=new Cc,_[j]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(j){let ot=_[j];return ot===void 0&&(ot=new Cc,_[j]=ot),ot.getGripSpace()},this.getHand=function(j){let ot=_[j];return ot===void 0&&(ot=new Cc,_[j]=ot),ot.getHandSpace()};function B(j){const ot=x.indexOf(j.inputSource);if(ot===-1)return;const Et=_[ot];Et!==void 0&&(Et.update(j.inputSource,j.frame,l||o),Et.dispatchEvent({type:j.type,data:j.inputSource}))}function W(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",J);for(let j=0;j<_.length;j++){const ot=x[j];ot!==null&&(x[j]=null,_[j].disconnect(ot))}I=null,G=null,v.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,y=null,he.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",W),s.addEventListener("inputsourceschange",J),g.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){const ot={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new ms(f.framebufferWidth,f.framebufferHeight,{format:In,type:wi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let ot=null,Et=null,at=null;g.depth&&(at=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=g.stencil?tr:Xs,Et=g.stencil?Qs:ps);const Nt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Nt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new ms(d.textureWidth,d.textureHeight,{format:In,type:wi,depthTexture:new np(d.textureWidth,d.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),he.setContext(s),he.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function J(j){for(let ot=0;ot<j.removed.length;ot++){const Et=j.removed[ot],at=x.indexOf(Et);at>=0&&(x[at]=null,_[at].disconnect(Et))}for(let ot=0;ot<j.added.length;ot++){const Et=j.added[ot];let at=x.indexOf(Et);if(at===-1){for(let Ht=0;Ht<_.length;Ht++)if(Ht>=x.length){x.push(Et),at=Ht;break}else if(x[Ht]===null){x[Ht]=Et,at=Ht;break}if(at===-1)break}const Nt=_[at];Nt&&Nt.connect(Et)}}const $=new w,st=new w;function q(j,ot,Et){$.setFromMatrixPosition(ot.matrixWorld),st.setFromMatrixPosition(Et.matrixWorld);const at=$.distanceTo(st),Nt=ot.projectionMatrix.elements,Ht=Et.projectionMatrix.elements,zt=Nt[14]/(Nt[10]-1),ce=Nt[14]/(Nt[10]+1),D=(Nt[9]+1)/Nt[5],z=(Nt[9]-1)/Nt[5],R=(Nt[8]-1)/Nt[0],mt=(Ht[8]+1)/Ht[0],nt=zt*R,Tt=zt*mt,lt=at/(-R+mt),Vt=lt*-R;if(ot.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Vt),j.translateZ(lt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Nt[10]===-1)j.projectionMatrix.copy(ot.projectionMatrix),j.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const bt=zt+lt,A=ce+lt,b=nt-Vt,F=Tt+(at-Vt),Y=D*ce/A*bt,et=z*ce/A*bt;j.projectionMatrix.makePerspective(b,F,Y,et,bt,A),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ht(j,ot){ot===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ot.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let ot=j.near,Et=j.far;v.texture!==null&&(v.depthNear>0&&(ot=v.depthNear),v.depthFar>0&&(Et=v.depthFar)),M.near=P.near=C.near=ot,M.far=P.far=C.far=Et,(I!==M.near||G!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,G=M.far),C.layers.mask=j.layers.mask|2,P.layers.mask=j.layers.mask|4,M.layers.mask=C.layers.mask|P.layers.mask;const at=j.parent,Nt=M.cameras;ht(M,at);for(let Ht=0;Ht<Nt.length;Ht++)ht(Nt[Ht],at);Nt.length===2?q(M,C,P):M.projectionMatrix.copy(C.projectionMatrix),it(j,M,at)};function it(j,ot,Et){Et===null?j.matrix.copy(ot.matrixWorld):(j.matrix.copy(Et.matrixWorld),j.matrix.invert(),j.matrix.multiply(ot.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ot.projectionMatrix),j.projectionMatrixInverse.copy(ot.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=er*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(j){c=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let wt=null;function Wt(j,ot){if(h=ot.getViewerPose(l||o),m=ot,h!==null){const Et=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let at=!1;Et.length!==M.cameras.length&&(M.cameras.length=0,at=!0);for(let Ht=0;Ht<Et.length;Ht++){const zt=Et[Ht];let ce=null;if(f!==null)ce=f.getViewport(zt);else{const z=u.getViewSubImage(d,zt);ce=z.viewport,Ht===0&&(t.setRenderTargetTextures(y,z.colorTexture,d.ignoreDepthValues?void 0:z.depthStencilTexture),t.setRenderTarget(y))}let D=S[Ht];D===void 0&&(D=new Ze,D.layers.enable(Ht),D.viewport=new de,S[Ht]=D),D.matrix.fromArray(zt.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(zt.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(ce.x,ce.y,ce.width,ce.height),Ht===0&&(M.matrix.copy(D.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),at===!0&&M.cameras.push(D)}const Nt=s.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")){const Ht=u.getDepthInformation(Et[0]);Ht&&Ht.isValid&&Ht.texture&&v.init(t,Ht,s.renderState)}}for(let Et=0;Et<_.length;Et++){const at=x[Et],Nt=_[Et];at!==null&&Nt!==void 0&&Nt.update(at,ot,l||o)}wt&&wt(j,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),m=null}const he=new ep;he.setAnimationLoop(Wt),this.setAnimationLoop=function(j){wt=j},this.dispose=function(){}}}const is=new gn,Fy=new Bt;function By(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Zf(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,y,_,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,x)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,y,_):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===tn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===tn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const y=t.get(p),_=y.envMap,x=y.envMapRotation;_&&(g.envMap.value=_,is.copy(x),is.x*=-1,is.y*=-1,is.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),g.envMapRotation.value.setFromMatrix4(Fy.makeRotationFromEuler(is)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,y,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=_*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const y=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function zy(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,_){const x=_.program;n.uniformBlockBinding(y,x)}function l(y,_){let x=s[y.id];x===void 0&&(m(y),x=h(y),s[y.id]=x,y.addEventListener("dispose",g));const L=_.program;n.updateUBOMapping(y,L);const E=t.render.frame;r[y.id]!==E&&(d(y),r[y.id]=E)}function h(y){const _=u();y.__bindingPointIndex=_;const x=i.createBuffer(),L=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,L,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,x),x}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const _=s[y.id],x=y.uniforms,L=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let E=0,C=x.length;E<C;E++){const P=Array.isArray(x[E])?x[E]:[x[E]];for(let S=0,M=P.length;S<M;S++){const I=P[S];if(f(I,E,S,L)===!0){const G=I.__offset,B=Array.isArray(I.value)?I.value:[I.value];let W=0;for(let J=0;J<B.length;J++){const $=B[J],st=v($);typeof $=="number"||typeof $=="boolean"?(I.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,G+W,I.__data)):$.isMatrix3?(I.__data[0]=$.elements[0],I.__data[1]=$.elements[1],I.__data[2]=$.elements[2],I.__data[3]=0,I.__data[4]=$.elements[3],I.__data[5]=$.elements[4],I.__data[6]=$.elements[5],I.__data[7]=0,I.__data[8]=$.elements[6],I.__data[9]=$.elements[7],I.__data[10]=$.elements[8],I.__data[11]=0):($.toArray(I.__data,W),W+=st.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,_,x,L){const E=y.value,C=_+"_"+x;if(L[C]===void 0)return typeof E=="number"||typeof E=="boolean"?L[C]=E:L[C]=E.clone(),!0;{const P=L[C];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return L[C]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function m(y){const _=y.uniforms;let x=0;const L=16;for(let C=0,P=_.length;C<P;C++){const S=Array.isArray(_[C])?_[C]:[_[C]];for(let M=0,I=S.length;M<I;M++){const G=S[M],B=Array.isArray(G.value)?G.value:[G.value];for(let W=0,J=B.length;W<J;W++){const $=B[W],st=v($),q=x%L,ht=q%st.boundary,it=q+ht;x+=ht,it!==0&&L-it<st.storage&&(x+=L-it),G.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=x,x+=st.storage}}}const E=x%L;return E>0&&(x+=L-E),y.__size=x,y.__cache={},this}function v(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function g(y){const _=y.target;_.removeEventListener("dispose",g);const x=o.indexOf(_.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class ap{constructor(t={}){const{canvas:e=Rg(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),v=new Int32Array(4);let g=null,p=null;const y=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ee,this.toneMapping=Gi,this.toneMappingExposure=1;const x=this;let L=!1,E=0,C=0,P=null,S=-1,M=null;const I=new de,G=new de;let B=null;const W=new kt(0);let J=0,$=e.width,st=e.height,q=1,ht=null,it=null;const wt=new de(0,0,$,st),Wt=new de(0,0,$,st);let he=!1;const j=new bh;let ot=!1,Et=!1;const at=new Bt,Nt=new Bt,Ht=new w,zt=new de,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let D=!1;function z(){return P===null?q:1}let R=n;function mt(T,U){return e.getContext(T,U)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${uh}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",gt,!1),R===null){const U="webgl2";if(R=mt(U,T),R===null)throw mt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let nt,Tt,lt,Vt,bt,A,b,F,Y,et,K,Rt,dt,St,re,rt,At,Gt,$t,Ct,le,ee,we,N;function ft(){nt=new qx(R),nt.init(),ee=new Py(R,nt),Tt=new zx(R,nt,t,ee),lt=new Cy(R,nt),Tt.reverseDepthBuffer&&d&&lt.buffers.depth.setReversed(!0),Vt=new Yx(R),bt=new fy,A=new Ly(R,nt,lt,bt,Tt,ee,Vt),b=new Vx(x),F=new $x(x),Y=new n0(R),we=new Fx(R,Y),et=new Xx(R,Y,Vt,we),K=new Jx(R,et,Y,Vt),$t=new Kx(R,Tt,A),rt=new Hx(bt),Rt=new dy(x,b,F,nt,Tt,we,rt),dt=new By(x,bt),St=new my,re=new My(nt),Gt=new Ox(x,b,F,lt,K,f,c),At=new Ey(x,K,Tt),N=new zy(R,Vt,Tt,lt),Ct=new Bx(R,nt,Vt),le=new jx(R,nt,Vt),Vt.programs=Rt.programs,x.capabilities=Tt,x.extensions=nt,x.properties=bt,x.renderLists=St,x.shadowMap=At,x.state=lt,x.info=Vt}ft();const X=new Oy(x,R);this.xr=X,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const T=nt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=nt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(T){T!==void 0&&(q=T,this.setSize($,st,!1))},this.getSize=function(T){return T.set($,st)},this.setSize=function(T,U,H=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=T,st=U,e.width=Math.floor(T*q),e.height=Math.floor(U*q),H===!0&&(e.style.width=T+"px",e.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set($*q,st*q).floor()},this.setDrawingBufferSize=function(T,U,H){$=T,st=U,q=H,e.width=Math.floor(T*H),e.height=Math.floor(U*H),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(I)},this.getViewport=function(T){return T.copy(wt)},this.setViewport=function(T,U,H,V){T.isVector4?wt.set(T.x,T.y,T.z,T.w):wt.set(T,U,H,V),lt.viewport(I.copy(wt).multiplyScalar(q).round())},this.getScissor=function(T){return T.copy(Wt)},this.setScissor=function(T,U,H,V){T.isVector4?Wt.set(T.x,T.y,T.z,T.w):Wt.set(T,U,H,V),lt.scissor(G.copy(Wt).multiplyScalar(q).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(T){lt.setScissorTest(he=T)},this.setOpaqueSort=function(T){ht=T},this.setTransparentSort=function(T){it=T},this.getClearColor=function(T){return T.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor.apply(Gt,arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha.apply(Gt,arguments)},this.clear=function(T=!0,U=!0,H=!0){let V=0;if(T){let k=!1;if(P!==null){const ct=P.texture.format;k=ct===_h||ct===xh||ct===vh}if(k){const ct=P.texture.type,vt=ct===wi||ct===ps||ct===Qr||ct===Qs||ct===ph||ct===mh,Lt=Gt.getClearColor(),Pt=Gt.getClearAlpha(),qt=Lt.r,Zt=Lt.g,It=Lt.b;vt?(m[0]=qt,m[1]=Zt,m[2]=It,m[3]=Pt,R.clearBufferuiv(R.COLOR,0,m)):(v[0]=qt,v[1]=Zt,v[2]=It,v[3]=Pt,R.clearBufferiv(R.COLOR,0,v))}else V|=R.COLOR_BUFFER_BIT}U&&(V|=R.DEPTH_BUFFER_BIT),H&&(V|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),St.dispose(),re.dispose(),bt.dispose(),b.dispose(),F.dispose(),K.dispose(),we.dispose(),N.dispose(),Rt.dispose(),X.dispose(),X.removeEventListener("sessionstart",Zh),X.removeEventListener("sessionend",Qh),Ji.stop()};function Q(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const T=Vt.autoReset,U=At.enabled,H=At.autoUpdate,V=At.needsUpdate,k=At.type;ft(),Vt.autoReset=T,At.enabled=U,At.autoUpdate=H,At.needsUpdate=V,At.type=k}function gt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Jt(T){const U=T.target;U.removeEventListener("dispose",Jt),Ie(U)}function Ie(T){Xe(T),bt.remove(T)}function Xe(T){const U=bt.get(T).programs;U!==void 0&&(U.forEach(function(H){Rt.releaseProgram(H)}),T.isShaderMaterial&&Rt.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,H,V,k,ct){U===null&&(U=ce);const vt=k.isMesh&&k.matrixWorld.determinant()<0,Lt=Sm(T,U,H,V,k);lt.setMaterial(V,vt);let Pt=H.index,qt=1;if(V.wireframe===!0){if(Pt=et.getWireframeAttribute(H),Pt===void 0)return;qt=2}const Zt=H.drawRange,It=H.attributes.position;let ue=Zt.start*qt,Te=(Zt.start+Zt.count)*qt;ct!==null&&(ue=Math.max(ue,ct.start*qt),Te=Math.min(Te,(ct.start+ct.count)*qt)),Pt!==null?(ue=Math.max(ue,0),Te=Math.min(Te,Pt.count)):It!=null&&(ue=Math.max(ue,0),Te=Math.min(Te,It.count));const Ae=Te-ue;if(Ae<0||Ae===1/0)return;we.setup(k,V,Lt,H,Pt);let un,fe=Ct;if(Pt!==null&&(un=Y.get(Pt),fe=le,fe.setIndex(un)),k.isMesh)V.wireframe===!0?(lt.setLineWidth(V.wireframeLinewidth*z()),fe.setMode(R.LINES)):fe.setMode(R.TRIANGLES);else if(k.isLine){let Dt=V.linewidth;Dt===void 0&&(Dt=1),lt.setLineWidth(Dt*z()),k.isLineSegments?fe.setMode(R.LINES):k.isLineLoop?fe.setMode(R.LINE_LOOP):fe.setMode(R.LINE_STRIP)}else k.isPoints?fe.setMode(R.POINTS):k.isSprite&&fe.setMode(R.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)fe.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))fe.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Dt=k._multiDrawStarts,ci=k._multiDrawCounts,pe=k._multiDrawCount,On=Pt?Y.get(Pt).bytesPerElement:1,Ms=bt.get(V).currentProgram.getUniforms();for(let vn=0;vn<pe;vn++)Ms.setValue(R,"_gl_DrawID",vn),fe.render(Dt[vn]/On,ci[vn])}else if(k.isInstancedMesh)fe.renderInstances(ue,Ae,k.count);else if(H.isInstancedBufferGeometry){const Dt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,ci=Math.min(H.instanceCount,Dt);fe.renderInstances(ue,Ae,ci)}else fe.render(ue,Ae)};function ge(T,U,H){T.transparent===!0&&T.side===De&&T.forceSinglePass===!1?(T.side=tn,T.needsUpdate=!0,To(T,U,H),T.side=Si,T.needsUpdate=!0,To(T,U,H),T.side=De):To(T,U,H)}this.compile=function(T,U,H=null){H===null&&(H=T),p=re.get(H),p.init(U),_.push(p),H.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),T!==H&&T.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const V=new Set;return T.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ct=k.material;if(ct)if(Array.isArray(ct))for(let vt=0;vt<ct.length;vt++){const Lt=ct[vt];ge(Lt,H,k),V.add(Lt)}else ge(ct,H,k),V.add(ct)}),_.pop(),p=null,V},this.compileAsync=function(T,U,H=null){const V=this.compile(T,U,H);return new Promise(k=>{function ct(){if(V.forEach(function(vt){bt.get(vt).currentProgram.isReady()&&V.delete(vt)}),V.size===0){k(T);return}setTimeout(ct,10)}nt.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let kn=null;function ai(T){kn&&kn(T)}function Zh(){Ji.stop()}function Qh(){Ji.start()}const Ji=new ep;Ji.setAnimationLoop(ai),typeof self<"u"&&Ji.setContext(self),this.setAnimationLoop=function(T){kn=T,X.setAnimationLoop(T),T===null?Ji.stop():Ji.start()},X.addEventListener("sessionstart",Zh),X.addEventListener("sessionend",Qh),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(U),U=X.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,U,P),p=re.get(T,_.length),p.init(U),_.push(p),Nt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),j.setFromProjectionMatrix(Nt),Et=this.localClippingEnabled,ot=rt.init(this.clippingPlanes,Et),g=St.get(T,y.length),g.init(),y.push(g),X.enabled===!0&&X.isPresenting===!0){const ct=x.xr.getDepthSensingMesh();ct!==null&&tc(ct,U,-1/0,x.sortObjects)}tc(T,U,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(ht,it),D=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,D&&Gt.addToRenderList(g,T),this.info.render.frame++,ot===!0&&rt.beginShadows();const H=p.state.shadowsArray;At.render(H,T,U),ot===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=g.opaque,k=g.transmissive;if(p.setupLights(),U.isArrayCamera){const ct=U.cameras;if(k.length>0)for(let vt=0,Lt=ct.length;vt<Lt;vt++){const Pt=ct[vt];eu(V,k,T,Pt)}D&&Gt.render(T);for(let vt=0,Lt=ct.length;vt<Lt;vt++){const Pt=ct[vt];tu(g,T,Pt,Pt.viewport)}}else k.length>0&&eu(V,k,T,U),D&&Gt.render(T),tu(g,T,U);P!==null&&(A.updateMultisampleRenderTarget(P),A.updateRenderTargetMipmap(P)),T.isScene===!0&&T.onAfterRender(x,T,U),we.resetDefaultState(),S=-1,M=null,_.pop(),_.length>0?(p=_[_.length-1],ot===!0&&rt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function tc(T,U,H,V){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)H=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||j.intersectsSprite(T)){V&&zt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Nt);const vt=K.update(T),Lt=T.material;Lt.visible&&g.push(T,vt,Lt,H,zt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||j.intersectsObject(T))){const vt=K.update(T),Lt=T.material;if(V&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),zt.copy(T.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),zt.copy(vt.boundingSphere.center)),zt.applyMatrix4(T.matrixWorld).applyMatrix4(Nt)),Array.isArray(Lt)){const Pt=vt.groups;for(let qt=0,Zt=Pt.length;qt<Zt;qt++){const It=Pt[qt],ue=Lt[It.materialIndex];ue&&ue.visible&&g.push(T,vt,ue,H,zt.z,It)}}else Lt.visible&&g.push(T,vt,Lt,H,zt.z,null)}}const ct=T.children;for(let vt=0,Lt=ct.length;vt<Lt;vt++)tc(ct[vt],U,H,V)}function tu(T,U,H,V){const k=T.opaque,ct=T.transmissive,vt=T.transparent;p.setupLightsView(H),ot===!0&&rt.setGlobalState(x.clippingPlanes,H),V&&lt.viewport(I.copy(V)),k.length>0&&wo(k,U,H),ct.length>0&&wo(ct,U,H),vt.length>0&&wo(vt,U,H),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function eu(T,U,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new ms(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?po:wi,minFilter:yi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));const ct=p.state.transmissionRenderTarget[V.id],vt=V.viewport||I;ct.setSize(vt.z,vt.w);const Lt=x.getRenderTarget();x.setRenderTarget(ct),x.getClearColor(W),J=x.getClearAlpha(),J<1&&x.setClearColor(16777215,.5),x.clear(),D&&Gt.render(H);const Pt=x.toneMapping;x.toneMapping=Gi;const qt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),ot===!0&&rt.setGlobalState(x.clippingPlanes,V),wo(T,H,V),A.updateMultisampleRenderTarget(ct),A.updateRenderTargetMipmap(ct),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let It=0,ue=U.length;It<ue;It++){const Te=U[It],Ae=Te.object,un=Te.geometry,fe=Te.material,Dt=Te.group;if(fe.side===De&&Ae.layers.test(V.layers)){const ci=fe.side;fe.side=tn,fe.needsUpdate=!0,nu(Ae,H,V,un,fe,Dt),fe.side=ci,fe.needsUpdate=!0,Zt=!0}}Zt===!0&&(A.updateMultisampleRenderTarget(ct),A.updateRenderTargetMipmap(ct))}x.setRenderTarget(Lt),x.setClearColor(W,J),qt!==void 0&&(V.viewport=qt),x.toneMapping=Pt}function wo(T,U,H){const V=U.isScene===!0?U.overrideMaterial:null;for(let k=0,ct=T.length;k<ct;k++){const vt=T[k],Lt=vt.object,Pt=vt.geometry,qt=V===null?vt.material:V,Zt=vt.group;Lt.layers.test(H.layers)&&nu(Lt,U,H,Pt,qt,Zt)}}function nu(T,U,H,V,k,ct){T.onBeforeRender(x,U,H,V,k,ct),T.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(x,U,H,V,T,ct),k.transparent===!0&&k.side===De&&k.forceSinglePass===!1?(k.side=tn,k.needsUpdate=!0,x.renderBufferDirect(H,U,V,k,T,ct),k.side=Si,k.needsUpdate=!0,x.renderBufferDirect(H,U,V,k,T,ct),k.side=De):x.renderBufferDirect(H,U,V,k,T,ct),T.onAfterRender(x,U,H,V,k,ct)}function To(T,U,H){U.isScene!==!0&&(U=ce);const V=bt.get(T),k=p.state.lights,ct=p.state.shadowsArray,vt=k.state.version,Lt=Rt.getParameters(T,k.state,ct,U,H),Pt=Rt.getProgramCacheKey(Lt);let qt=V.programs;V.environment=T.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(T.isMeshStandardMaterial?F:b).get(T.envMap||V.environment),V.envMapRotation=V.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,qt===void 0&&(T.addEventListener("dispose",Jt),qt=new Map,V.programs=qt);let Zt=qt.get(Pt);if(Zt!==void 0){if(V.currentProgram===Zt&&V.lightsStateVersion===vt)return su(T,Lt),Zt}else Lt.uniforms=Rt.getUniforms(T),T.onBeforeCompile(Lt,x),Zt=Rt.acquireProgram(Lt,Pt),qt.set(Pt,Zt),V.uniforms=Lt.uniforms;const It=V.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(It.clippingPlanes=rt.uniform),su(T,Lt),V.needsLights=Tm(T),V.lightsStateVersion=vt,V.needsLights&&(It.ambientLightColor.value=k.state.ambient,It.lightProbe.value=k.state.probe,It.directionalLights.value=k.state.directional,It.directionalLightShadows.value=k.state.directionalShadow,It.spotLights.value=k.state.spot,It.spotLightShadows.value=k.state.spotShadow,It.rectAreaLights.value=k.state.rectArea,It.ltc_1.value=k.state.rectAreaLTC1,It.ltc_2.value=k.state.rectAreaLTC2,It.pointLights.value=k.state.point,It.pointLightShadows.value=k.state.pointShadow,It.hemisphereLights.value=k.state.hemi,It.directionalShadowMap.value=k.state.directionalShadowMap,It.directionalShadowMatrix.value=k.state.directionalShadowMatrix,It.spotShadowMap.value=k.state.spotShadowMap,It.spotLightMatrix.value=k.state.spotLightMatrix,It.spotLightMap.value=k.state.spotLightMap,It.pointShadowMap.value=k.state.pointShadowMap,It.pointShadowMatrix.value=k.state.pointShadowMatrix),V.currentProgram=Zt,V.uniformsList=null,Zt}function iu(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=wa.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function su(T,U){const H=bt.get(T);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function Sm(T,U,H,V,k){U.isScene!==!0&&(U=ce),A.resetTextureUnits();const ct=U.fog,vt=V.isMeshStandardMaterial?U.environment:null,Lt=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:en,Pt=(V.isMeshStandardMaterial?F:b).get(V.envMap||vt),qt=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Zt=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),It=!!H.morphAttributes.position,ue=!!H.morphAttributes.normal,Te=!!H.morphAttributes.color;let Ae=Gi;V.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ae=x.toneMapping);const un=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,fe=un!==void 0?un.length:0,Dt=bt.get(V),ci=p.state.lights;if(ot===!0&&(Et===!0||T!==M)){const wn=T===M&&V.id===S;rt.setState(V,T,wn)}let pe=!1;V.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==ci.state.version||Dt.outputColorSpace!==Lt||k.isBatchedMesh&&Dt.batching===!1||!k.isBatchedMesh&&Dt.batching===!0||k.isBatchedMesh&&Dt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Dt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Dt.instancing===!1||!k.isInstancedMesh&&Dt.instancing===!0||k.isSkinnedMesh&&Dt.skinning===!1||!k.isSkinnedMesh&&Dt.skinning===!0||k.isInstancedMesh&&Dt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Dt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Dt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Dt.instancingMorph===!1&&k.morphTexture!==null||Dt.envMap!==Pt||V.fog===!0&&Dt.fog!==ct||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==rt.numPlanes||Dt.numIntersection!==rt.numIntersection)||Dt.vertexAlphas!==qt||Dt.vertexTangents!==Zt||Dt.morphTargets!==It||Dt.morphNormals!==ue||Dt.morphColors!==Te||Dt.toneMapping!==Ae||Dt.morphTargetsCount!==fe)&&(pe=!0):(pe=!0,Dt.__version=V.version);let On=Dt.currentProgram;pe===!0&&(On=To(V,U,k));let Ms=!1,vn=!1,yr=!1;const Ce=On.getUniforms(),Kn=Dt.uniforms;if(lt.useProgram(On.program)&&(Ms=!0,vn=!0,yr=!0),V.id!==S&&(S=V.id,vn=!0),Ms||M!==T){lt.buffers.depth.getReversed()?(at.copy(T.projectionMatrix),Pg(at),Ig(at),Ce.setValue(R,"projectionMatrix",at)):Ce.setValue(R,"projectionMatrix",T.projectionMatrix),Ce.setValue(R,"viewMatrix",T.matrixWorldInverse);const Ri=Ce.map.cameraPosition;Ri!==void 0&&Ri.setValue(R,Ht.setFromMatrixPosition(T.matrixWorld)),Tt.logarithmicDepthBuffer&&Ce.setValue(R,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Ce.setValue(R,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,vn=!0,yr=!0)}if(k.isSkinnedMesh){Ce.setOptional(R,k,"bindMatrix"),Ce.setOptional(R,k,"bindMatrixInverse");const wn=k.skeleton;wn&&(wn.boneTexture===null&&wn.computeBoneTexture(),Ce.setValue(R,"boneTexture",wn.boneTexture,A))}k.isBatchedMesh&&(Ce.setOptional(R,k,"batchingTexture"),Ce.setValue(R,"batchingTexture",k._matricesTexture,A),Ce.setOptional(R,k,"batchingIdTexture"),Ce.setValue(R,"batchingIdTexture",k._indirectTexture,A),Ce.setOptional(R,k,"batchingColorTexture"),k._colorsTexture!==null&&Ce.setValue(R,"batchingColorTexture",k._colorsTexture,A));const Mr=H.morphAttributes;if((Mr.position!==void 0||Mr.normal!==void 0||Mr.color!==void 0)&&$t.update(k,H,On),(vn||Dt.receiveShadow!==k.receiveShadow)&&(Dt.receiveShadow=k.receiveShadow,Ce.setValue(R,"receiveShadow",k.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Kn.envMap.value=Pt,Kn.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(Kn.envMapIntensity.value=U.environmentIntensity),vn&&(Ce.setValue(R,"toneMappingExposure",x.toneMappingExposure),Dt.needsLights&&wm(Kn,yr),ct&&V.fog===!0&&dt.refreshFogUniforms(Kn,ct),dt.refreshMaterialUniforms(Kn,V,q,st,p.state.transmissionRenderTarget[T.id]),wa.upload(R,iu(Dt),Kn,A)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(wa.upload(R,iu(Dt),Kn,A),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Ce.setValue(R,"center",k.center),Ce.setValue(R,"modelViewMatrix",k.modelViewMatrix),Ce.setValue(R,"normalMatrix",k.normalMatrix),Ce.setValue(R,"modelMatrix",k.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const wn=V.uniformsGroups;for(let Ri=0,Li=wn.length;Ri<Li;Ri++){const ru=wn[Ri];N.update(ru,On),N.bind(ru,On)}}return On}function wm(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function Tm(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(T,U,H){bt.get(T.texture).__webglTexture=U,bt.get(T.depthTexture).__webglTexture=H;const V=bt.get(T);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,U){const H=bt.get(T);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,H=0){P=T,E=U,C=H;let V=!0,k=null,ct=!1,vt=!1;if(T){const Pt=bt.get(T);if(Pt.__useDefaultFramebuffer!==void 0)lt.bindFramebuffer(R.FRAMEBUFFER,null),V=!1;else if(Pt.__webglFramebuffer===void 0)A.setupRenderTarget(T);else if(Pt.__hasExternalTextures)A.rebindTextures(T,bt.get(T.texture).__webglTexture,bt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const It=T.depthTexture;if(Pt.__boundDepthTexture!==It){if(It!==null&&bt.has(It)&&(T.width!==It.image.width||T.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(T)}}const qt=T.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(vt=!0);const Zt=bt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Zt[U])?k=Zt[U][H]:k=Zt[U],ct=!0):T.samples>0&&A.useMultisampledRTT(T)===!1?k=bt.get(T).__webglMultisampledFramebuffer:Array.isArray(Zt)?k=Zt[H]:k=Zt,I.copy(T.viewport),G.copy(T.scissor),B=T.scissorTest}else I.copy(wt).multiplyScalar(q).floor(),G.copy(Wt).multiplyScalar(q).floor(),B=he;if(lt.bindFramebuffer(R.FRAMEBUFFER,k)&&V&&lt.drawBuffers(T,k),lt.viewport(I),lt.scissor(G),lt.setScissorTest(B),ct){const Pt=bt.get(T.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+U,Pt.__webglTexture,H)}else if(vt){const Pt=bt.get(T.texture),qt=U||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Pt.__webglTexture,H||0,qt)}S=-1},this.readRenderTargetPixels=function(T,U,H,V,k,ct,vt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=bt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&vt!==void 0&&(Lt=Lt[vt]),Lt){lt.bindFramebuffer(R.FRAMEBUFFER,Lt);try{const Pt=T.texture,qt=Pt.format,Zt=Pt.type;if(!Tt.textureFormatReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Tt.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-V&&H>=0&&H<=T.height-k&&R.readPixels(U,H,V,k,ee.convert(qt),ee.convert(Zt),ct)}finally{const Pt=P!==null?bt.get(P).__webglFramebuffer:null;lt.bindFramebuffer(R.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(T,U,H,V,k,ct,vt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=bt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&vt!==void 0&&(Lt=Lt[vt]),Lt){const Pt=T.texture,qt=Pt.format,Zt=Pt.type;if(!Tt.textureFormatReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Tt.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=T.width-V&&H>=0&&H<=T.height-k){lt.bindFramebuffer(R.FRAMEBUFFER,Lt);const It=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,It),R.bufferData(R.PIXEL_PACK_BUFFER,ct.byteLength,R.STREAM_READ),R.readPixels(U,H,V,k,ee.convert(qt),ee.convert(Zt),0);const ue=P!==null?bt.get(P).__webglFramebuffer:null;lt.bindFramebuffer(R.FRAMEBUFFER,ue);const Te=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Lg(R,Te,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,It),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ct),R.deleteBuffer(It),R.deleteSync(Te),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,U=null,H=0){T.isTexture!==!0&&(Hr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,T=arguments[1]);const V=Math.pow(2,-H),k=Math.floor(T.image.width*V),ct=Math.floor(T.image.height*V),vt=U!==null?U.x:0,Lt=U!==null?U.y:0;A.setTexture2D(T,0),R.copyTexSubImage2D(R.TEXTURE_2D,H,0,0,vt,Lt,k,ct),lt.unbindTexture()},this.copyTextureToTexture=function(T,U,H=null,V=null,k=0){T.isTexture!==!0&&(Hr("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,T=arguments[1],U=arguments[2],k=arguments[3]||0,H=null);let ct,vt,Lt,Pt,qt,Zt,It,ue,Te;const Ae=T.isCompressedTexture?T.mipmaps[k]:T.image;H!==null?(ct=H.max.x-H.min.x,vt=H.max.y-H.min.y,Lt=H.isBox3?H.max.z-H.min.z:1,Pt=H.min.x,qt=H.min.y,Zt=H.isBox3?H.min.z:0):(ct=Ae.width,vt=Ae.height,Lt=Ae.depth||1,Pt=0,qt=0,Zt=0),V!==null?(It=V.x,ue=V.y,Te=V.z):(It=0,ue=0,Te=0);const un=ee.convert(U.format),fe=ee.convert(U.type);let Dt;U.isData3DTexture?(A.setTexture3D(U,0),Dt=R.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(A.setTexture2DArray(U,0),Dt=R.TEXTURE_2D_ARRAY):(A.setTexture2D(U,0),Dt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,U.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,U.unpackAlignment);const ci=R.getParameter(R.UNPACK_ROW_LENGTH),pe=R.getParameter(R.UNPACK_IMAGE_HEIGHT),On=R.getParameter(R.UNPACK_SKIP_PIXELS),Ms=R.getParameter(R.UNPACK_SKIP_ROWS),vn=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Ae.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ae.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Pt),R.pixelStorei(R.UNPACK_SKIP_ROWS,qt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Zt);const yr=T.isDataArrayTexture||T.isData3DTexture,Ce=U.isDataArrayTexture||U.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const Kn=bt.get(T),Mr=bt.get(U),wn=bt.get(Kn.__renderTarget),Ri=bt.get(Mr.__renderTarget);lt.bindFramebuffer(R.READ_FRAMEBUFFER,wn.__webglFramebuffer),lt.bindFramebuffer(R.DRAW_FRAMEBUFFER,Ri.__webglFramebuffer);for(let Li=0;Li<Lt;Li++)yr&&R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,bt.get(T).__webglTexture,k,Zt+Li),T.isDepthTexture?(Ce&&R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,bt.get(U).__webglTexture,k,Te+Li),R.blitFramebuffer(Pt,qt,ct,vt,It,ue,ct,vt,R.DEPTH_BUFFER_BIT,R.NEAREST)):Ce?R.copyTexSubImage3D(Dt,k,It,ue,Te+Li,Pt,qt,ct,vt):R.copyTexSubImage2D(Dt,k,It,ue,Te+Li,Pt,qt,ct,vt);lt.bindFramebuffer(R.READ_FRAMEBUFFER,null),lt.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Ce?T.isDataTexture||T.isData3DTexture?R.texSubImage3D(Dt,k,It,ue,Te,ct,vt,Lt,un,fe,Ae.data):U.isCompressedArrayTexture?R.compressedTexSubImage3D(Dt,k,It,ue,Te,ct,vt,Lt,un,Ae.data):R.texSubImage3D(Dt,k,It,ue,Te,ct,vt,Lt,un,fe,Ae):T.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,k,It,ue,ct,vt,un,fe,Ae.data):T.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,k,It,ue,Ae.width,Ae.height,un,Ae.data):R.texSubImage2D(R.TEXTURE_2D,k,It,ue,ct,vt,un,fe,Ae);R.pixelStorei(R.UNPACK_ROW_LENGTH,ci),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,pe),R.pixelStorei(R.UNPACK_SKIP_PIXELS,On),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ms),R.pixelStorei(R.UNPACK_SKIP_IMAGES,vn),k===0&&U.generateMipmaps&&R.generateMipmap(Dt),lt.unbindTexture()},this.copyTextureToTexture3D=function(T,U,H=null,V=null,k=0){return T.isTexture!==!0&&(Hr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,T=arguments[2],U=arguments[3],k=arguments[4]||0),Hr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,U,H,V,k)},this.initRenderTarget=function(T){bt.get(T).__webglFramebuffer===void 0&&A.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),lt.unbindTexture()},this.resetState=function(){E=0,C=0,P=null,lt.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}}class Th{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new kt(t),this.near=e,this.far=n}clone(){return new Th(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Eh extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class cp{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Gl,this.updateRanges=[],this.version=0,this.uuid=Nn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const sn=new w;class io{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix4(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyNormalMatrix(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.transformDirection(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Gn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Gn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Gn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Gn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),s=ve(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),s=ve(s,this.array),r=ve(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ue(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new io(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ah extends $n{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ks;const Er=new w,Os=new w,Fs=new w,Bs=new Z,Ar=new Z,lp=new Bt,qo=new w,Cr=new w,Xo=new w,od=new Z,Rc=new Z,ad=new Z;class hp extends Re{constructor(t=new Ah){if(super(),this.isSprite=!0,this.type="Sprite",ks===void 0){ks=new ye;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new cp(e,5);ks.setIndex([0,1,2,0,2,3]),ks.setAttribute("position",new io(n,3,0,!1)),ks.setAttribute("uv",new io(n,2,3,!1))}this.geometry=ks,this.material=t,this.center=new Z(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Os.setFromMatrixScale(this.matrixWorld),lp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Fs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Os.multiplyScalar(-Fs.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;jo(qo.set(-.5,-.5,0),Fs,o,Os,s,r),jo(Cr.set(.5,-.5,0),Fs,o,Os,s,r),jo(Xo.set(.5,.5,0),Fs,o,Os,s,r),od.set(0,0),Rc.set(1,0),ad.set(1,1);let a=t.ray.intersectTriangle(qo,Cr,Xo,!1,Er);if(a===null&&(jo(Cr.set(-.5,.5,0),Fs,o,Os,s,r),Rc.set(0,1),a=t.ray.intersectTriangle(qo,Xo,Cr,!1,Er),a===null))return;const c=t.ray.origin.distanceTo(Er);c<t.near||c>t.far||e.push({distance:c,point:Er.clone(),uv:Ln.getInterpolation(Er,qo,Cr,Xo,od,Rc,ad,new Z),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function jo(i,t,e,n,s,r){Bs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ar.x=r*Bs.x-s*Bs.y,Ar.y=s*Bs.x+r*Bs.y):Ar.copy(Bs),i.copy(t),i.x+=Ar.x,i.y+=Ar.y,i.applyMatrix4(lp)}const cd=new w,ld=new de,hd=new de,Hy=new w,ud=new Bt,Yo=new w,Lc=new ni,dd=new Bt,Pc=new mo;class Vy extends tt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=lu,this.bindMatrix=new Bt,this.bindMatrixInverse=new Bt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ai),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Yo),this.boundingBox.expandByPoint(Yo)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ni),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Yo),this.boundingSphere.expandByPoint(Yo)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Lc.copy(this.boundingSphere),Lc.applyMatrix4(s),t.ray.intersectsSphere(Lc)!==!1&&(dd.copy(s).invert(),Pc.copy(t.ray).applyMatrix4(dd),!(this.boundingBox!==null&&Pc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Pc)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new de,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===lu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===tg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;ld.fromBufferAttribute(s.attributes.skinIndex,t),hd.fromBufferAttribute(s.attributes.skinWeight,t),cd.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const o=hd.getComponent(r);if(o!==0){const a=ld.getComponent(r);ud.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Hy.copy(cd).applyMatrix4(ud),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class up extends Re{constructor(){super(),this.isBone=!0,this.type="Bone"}}class dp extends Be{constructor(t=null,e=1,n=1,s,r,o,a,c,l=cn,h=cn,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const fd=new Bt,Gy=new Bt;class Ch{constructor(t=[],e=[]){this.uuid=Nn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Bt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Bt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:Gy;fd.multiplyMatrices(a,e[r]),fd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Ch(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new dp(e,t,t,In,Wn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const r=t.bones[n];let o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new up),this.bones.push(o),this.boneInverses.push(new Bt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){const o=e[s];t.bones.push(o.uuid);const a=n[s];t.boneInverses.push(a.toArray())}return t}}class ql extends Ue{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const zs=new Bt,pd=new Bt,Ko=[],md=new Ai,Wy=new Bt,Rr=new tt,Lr=new ni;class Ei extends tt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ql(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Wy)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ai),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,zs),md.copy(t.boundingBox).applyMatrix4(zs),this.boundingBox.union(md)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ni),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,zs),Lr.copy(t.boundingSphere).applyMatrix4(zs),this.boundingSphere.union(Lr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Rr.geometry=this.geometry,Rr.material=this.material,Rr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Lr.copy(this.boundingSphere),Lr.applyMatrix4(n),t.ray.intersectsSphere(Lr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,zs),pd.multiplyMatrices(n,zs),Rr.matrixWorld=pd,Rr.raycast(t,Ko);for(let o=0,a=Ko.length;o<a;o++){const c=Ko[o];c.instanceId=r,c.object=this,e.push(c)}Ko.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ql(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new dp(new Float32Array(s*this.count),s,this.count,gh,Wn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class fp extends $n{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Na=new w,Da=new w,gd=new Bt,Pr=new mo,Jo=new ni,Ic=new w,vd=new w;class Rh extends Re{constructor(t=new ye,e=new fp){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Na.fromBufferAttribute(e,s-1),Da.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Na.distanceTo(Da);t.setAttribute("lineDistance",new jt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jo.copy(n.boundingSphere),Jo.applyMatrix4(s),Jo.radius+=r,t.ray.intersectsSphere(Jo)===!1)return;gd.copy(s).invert(),Pr.copy(t.ray).applyMatrix4(gd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let v=f,g=m-1;v<g;v+=l){const p=h.getX(v),y=h.getX(v+1),_=Zo(this,t,Pr,c,p,y);_&&e.push(_)}if(this.isLineLoop){const v=h.getX(m-1),g=h.getX(f),p=Zo(this,t,Pr,c,v,g);p&&e.push(p)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let v=f,g=m-1;v<g;v+=l){const p=Zo(this,t,Pr,c,v,v+1);p&&e.push(p)}if(this.isLineLoop){const v=Zo(this,t,Pr,c,m-1,f);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Zo(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(Na.fromBufferAttribute(o,s),Da.fromBufferAttribute(o,r),e.distanceSqToSegment(Na,Da,Ic,vd)>n)return;Ic.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ic);if(!(c<t.near||c>t.far))return{distance:c,point:vd.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const xd=new w,_d=new w;class $y extends Rh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)xd.fromBufferAttribute(e,s),_d.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+xd.distanceTo(_d);t.setAttribute("lineDistance",new jt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qy extends Rh{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class go extends $n{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const yd=new Bt,Xl=new mo,Qo=new ni,ta=new w;class $a extends Re{constructor(t=new ye,e=new go){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qo.copy(n.boundingSphere),Qo.applyMatrix4(s),Qo.radius+=r,t.ray.intersectsSphere(Qo)===!1)return;yd.copy(s).invert(),Xl.copy(t.ray).applyMatrix4(yd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let m=d,v=f;m<v;m++){const g=l.getX(m);ta.fromBufferAttribute(u,g),Md(ta,g,c,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,v=f;m<v;m++)ta.fromBufferAttribute(u,m),Md(ta,m,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Md(i,t,e,n,s,r,o){const a=Xl.distanceSqToPoint(i);if(a<e){const c=new w;Xl.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class jn extends Be{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ii{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new Z:new w);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new w,s=[],r=[],o=[],a=new w,c=new Bt;for(let f=0;f<=t;f++){const m=f/t;s[f]=this.getTangentAt(m,new w)}r[0]=new w,o[0]=new w;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Fe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Fe(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Lh extends ii{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Z){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Xy extends Lh{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ph(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const ea=new w,Nc=new Ph,Dc=new Ph,Uc=new Ph;class xs extends ii{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new w){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(ea.subVectors(s[0],s[1]).add(s[0]),l=ea);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ea.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ea),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),Nc.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,v,g),Dc.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,v,g),Uc.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,v,g)}else this.curveType==="catmullrom"&&(Nc.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Dc.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Uc.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Nc.calc(c),Dc.calc(c),Uc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new w().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function bd(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function jy(i,t){const e=1-i;return e*e*t}function Yy(i,t){return 2*(1-i)*i*t}function Ky(i,t){return i*i*t}function Xr(i,t,e,n){return jy(i,t)+Yy(i,e)+Ky(i,n)}function Jy(i,t){const e=1-i;return e*e*e*t}function Zy(i,t){const e=1-i;return 3*e*e*i*t}function Qy(i,t){return 3*(1-i)*i*i*t}function tM(i,t){return i*i*i*t}function jr(i,t,e,n,s){return Jy(i,t)+Zy(i,e)+Qy(i,n)+tM(i,s)}class pp extends ii{constructor(t=new Z,e=new Z,n=new Z,s=new Z){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Z){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(jr(t,s.x,r.x,o.x,a.x),jr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class eM extends ii{constructor(t=new w,e=new w,n=new w,s=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new w){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(jr(t,s.x,r.x,o.x,a.x),jr(t,s.y,r.y,o.y,a.y),jr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class mp extends ii{constructor(t=new Z,e=new Z){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Z){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class nM extends ii{constructor(t=new w,e=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new w){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new w){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gp extends ii{constructor(t=new Z,e=new Z,n=new Z){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Z){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Xr(t,s.x,r.x,o.x),Xr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vp extends ii{constructor(t=new w,e=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new w){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Xr(t,s.x,r.x,o.x),Xr(t,s.y,r.y,o.y),Xr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xp extends ii{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Z){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(bd(a,c.x,l.x,h.x,u.x),bd(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Z().fromArray(s))}return this}}var Ua=Object.freeze({__proto__:null,ArcCurve:Xy,CatmullRomCurve3:xs,CubicBezierCurve:pp,CubicBezierCurve3:eM,EllipseCurve:Lh,LineCurve:mp,LineCurve3:nM,QuadraticBezierCurve:gp,QuadraticBezierCurve3:vp,SplineCurve:xp});class iM extends ii{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ua[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Ua[s.type]().fromJSON(s))}return this}}class so extends iM{constructor(t){super(),this.type="Path",this.currentPoint=new Z,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new mp(this.currentPoint.clone(),new Z(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new gp(this.currentPoint.clone(),new Z(t,e),new Z(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new pp(this.currentPoint.clone(),new Z(t,e),new Z(n,s),new Z(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new xp(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new Lh(t,e,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Yn extends ye{constructor(t=[new Z(0,-.5),new Z(.5,0),new Z(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Fe(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/e,u=new w,d=new Z,f=new w,m=new w,v=new w;let g=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:g=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-g,f.z=p*0,v.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:g=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),c.push(f.x,f.y,f.z),v.copy(m)}for(let y=0;y<=e;y++){const _=n+y*h*s,x=Math.sin(_),L=Math.cos(_);for(let E=0;E<=t.length-1;E++){u.x=t[E].x*x,u.y=t[E].y,u.z=t[E].x*L,o.push(u.x,u.y,u.z),d.x=y/e,d.y=E/(t.length-1),a.push(d.x,d.y);const C=c[3*E+0]*x,P=c[3*E+1],S=c[3*E+0]*L;l.push(C,P,S)}}for(let y=0;y<e;y++)for(let _=0;_<t.length-1;_++){const x=_+y*t.length,L=x,E=x+t.length,C=x+t.length+1,P=x+1;r.push(L,E,P),r.push(C,P,E)}this.setIndex(r),this.setAttribute("position",new jt(o,3)),this.setAttribute("uv",new jt(a,2)),this.setAttribute("normal",new jt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yn(t.points,t.segments,t.phiStart,t.phiLength)}}class vo extends Yn{constructor(t=1,e=1,n=4,s=8){const r=new so;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new vo(t.radius,t.length,t.capSegments,t.radialSegments)}}class Yi extends ye{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new w,h=new Z;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new jt(o,3)),this.setAttribute("normal",new jt(a,3)),this.setAttribute("uv",new jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yi(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class te extends ye{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let m=0;const v=[],g=n/2;let p=0;y(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new jt(u,3)),this.setAttribute("normal",new jt(d,3)),this.setAttribute("uv",new jt(f,2));function y(){const x=new w,L=new w;let E=0;const C=(e-t)/n;for(let P=0;P<=r;P++){const S=[],M=P/r,I=M*(e-t)+t;for(let G=0;G<=s;G++){const B=G/s,W=B*c+a,J=Math.sin(W),$=Math.cos(W);L.x=I*J,L.y=-M*n+g,L.z=I*$,u.push(L.x,L.y,L.z),x.set(J,C,$).normalize(),d.push(x.x,x.y,x.z),f.push(B,1-M),S.push(m++)}v.push(S)}for(let P=0;P<s;P++)for(let S=0;S<r;S++){const M=v[S][P],I=v[S+1][P],G=v[S+1][P+1],B=v[S][P+1];(t>0||S!==0)&&(h.push(M,I,B),E+=3),(e>0||S!==r-1)&&(h.push(I,G,B),E+=3)}l.addGroup(p,E,0),p+=E}function _(x){const L=m,E=new Z,C=new w;let P=0;const S=x===!0?t:e,M=x===!0?1:-1;for(let G=1;G<=s;G++)u.push(0,g*M,0),d.push(0,M,0),f.push(.5,.5),m++;const I=m;for(let G=0;G<=s;G++){const W=G/s*c+a,J=Math.cos(W),$=Math.sin(W);C.x=S*$,C.y=g*M,C.z=S*J,u.push(C.x,C.y,C.z),d.push(0,M,0),E.x=J*.5+.5,E.y=$*.5*M+.5,f.push(E.x,E.y),m++}for(let G=0;G<s;G++){const B=L+G,W=I+G;x===!0?h.push(W,W+1,B):h.push(W+1,W,B),P+=3}l.addGroup(p,P,x===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new te(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ci extends te{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Ci(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class qa extends ye{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new jt(r,3)),this.setAttribute("normal",new jt(r.slice(),3)),this.setAttribute("uv",new jt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const _=new w,x=new w,L=new w;for(let E=0;E<e.length;E+=3)f(e[E+0],_),f(e[E+1],x),f(e[E+2],L),c(_,x,L,y)}function c(y,_,x,L){const E=L+1,C=[];for(let P=0;P<=E;P++){C[P]=[];const S=y.clone().lerp(x,P/E),M=_.clone().lerp(x,P/E),I=E-P;for(let G=0;G<=I;G++)G===0&&P===E?C[P][G]=S:C[P][G]=S.clone().lerp(M,G/I)}for(let P=0;P<E;P++)for(let S=0;S<2*(E-P)-1;S++){const M=Math.floor(S/2);S%2===0?(d(C[P][M+1]),d(C[P+1][M]),d(C[P][M])):(d(C[P][M+1]),d(C[P+1][M+1]),d(C[P+1][M]))}}function l(y){const _=new w;for(let x=0;x<r.length;x+=3)_.x=r[x+0],_.y=r[x+1],_.z=r[x+2],_.normalize().multiplyScalar(y),r[x+0]=_.x,r[x+1]=_.y,r[x+2]=_.z}function h(){const y=new w;for(let _=0;_<r.length;_+=3){y.x=r[_+0],y.y=r[_+1],y.z=r[_+2];const x=g(y)/2/Math.PI+.5,L=p(y)/Math.PI+.5;o.push(x,1-L)}m(),u()}function u(){for(let y=0;y<o.length;y+=6){const _=o[y+0],x=o[y+2],L=o[y+4],E=Math.max(_,x,L),C=Math.min(_,x,L);E>.9&&C<.1&&(_<.2&&(o[y+0]+=1),x<.2&&(o[y+2]+=1),L<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,_){const x=y*3;_.x=t[x+0],_.y=t[x+1],_.z=t[x+2]}function m(){const y=new w,_=new w,x=new w,L=new w,E=new Z,C=new Z,P=new Z;for(let S=0,M=0;S<r.length;S+=9,M+=6){y.set(r[S+0],r[S+1],r[S+2]),_.set(r[S+3],r[S+4],r[S+5]),x.set(r[S+6],r[S+7],r[S+8]),E.set(o[M+0],o[M+1]),C.set(o[M+2],o[M+3]),P.set(o[M+4],o[M+5]),L.copy(y).add(_).add(x).divideScalar(3);const I=g(L);v(E,M+0,y,I),v(C,M+2,_,I),v(P,M+4,x,I)}}function v(y,_,x,L){L<0&&y.x===1&&(o[_]=y.x-1),x.x===0&&x.z===0&&(o[_]=L/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qa(t.vertices,t.indices,t.radius,t.details)}}class Ih extends qa{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ih(t.radius,t.detail)}}class pr extends so{constructor(t){super(t),this.uuid=Nn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new so().fromJSON(s))}return this}}const sM={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=_p(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=lM(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let m=e;m<s;m+=e)u=i[m],d=i[m+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return ro(r,o,e,a,c,f,0),o}};function _p(i,t,e,n,s){let r,o;if(s===yM(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Sd(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Sd(r,i[r],i[r+1],o);return o&&Xa(o,o.next)&&(ao(o),o=o.next),o}function gs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Xa(e,e.next)||Pe(e.prev,e,e.next)===0)){if(ao(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ro(i,t,e,n,s,r,o){if(!i)return;!o&&r&&pM(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?oM(i,n,s,r):rM(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),ao(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=aM(gs(i),t,e),ro(i,t,e,n,s,r,2)):o===2&&cM(i,t,e,n,s,r):ro(gs(i),t,e,n,s,r,1);break}}}function rM(i){const t=i.prev,e=i,n=i.next;if(Pe(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&$s(s,a,r,c,o,l,m.x,m.y)&&Pe(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function oM(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Pe(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,m=h<u?h<d?h:d:u<d?u:d,v=a>c?a>l?a:l:c>l?c:l,g=h>u?h>d?h:d:u>d?u:d,p=jl(f,m,t,e,n),y=jl(v,g,t,e,n);let _=i.prevZ,x=i.nextZ;for(;_&&_.z>=p&&x&&x.z<=y;){if(_.x>=f&&_.x<=v&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&$s(a,h,c,u,l,d,_.x,_.y)&&Pe(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=f&&x.x<=v&&x.y>=m&&x.y<=g&&x!==s&&x!==o&&$s(a,h,c,u,l,d,x.x,x.y)&&Pe(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=v&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&$s(a,h,c,u,l,d,_.x,_.y)&&Pe(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=y;){if(x.x>=f&&x.x<=v&&x.y>=m&&x.y<=g&&x!==s&&x!==o&&$s(a,h,c,u,l,d,x.x,x.y)&&Pe(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function aM(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Xa(s,r)&&yp(s,n,n.next,r)&&oo(s,r)&&oo(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),ao(n),ao(n.next),n=i=r),n=n.next}while(n!==i);return gs(n)}function cM(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&vM(o,a)){let c=Mp(o,a);o=gs(o,o.next),c=gs(c,c.next),ro(o,t,e,n,s,r,0),ro(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function lM(i,t,e,n){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=_p(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(gM(l));for(s.sort(hM),r=0;r<s.length;r++)e=uM(s[r],e);return e}function hM(i,t){return i.x-t.x}function uM(i,t){const e=dM(i,t);if(!e)return t;const n=Mp(e,i);return gs(n,n.next),gs(e,e.next)}function dM(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&$s(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),oo(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&fM(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function fM(i,t){return Pe(i.prev,i,t.prev)<0&&Pe(t.next,i,i.next)<0}function pM(i,t,e,n){let s=i;do s.z===0&&(s.z=jl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,mM(s)}function mM(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function jl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function gM(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function $s(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function vM(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!xM(i,t)&&(oo(i,t)&&oo(t,i)&&_M(i,t)&&(Pe(i.prev,i,t.prev)||Pe(i,t.prev,t))||Xa(i,t)&&Pe(i.prev,i,i.next)>0&&Pe(t.prev,t,t.next)>0)}function Pe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Xa(i,t){return i.x===t.x&&i.y===t.y}function yp(i,t,e,n){const s=ia(Pe(i,t,e)),r=ia(Pe(i,t,n)),o=ia(Pe(e,n,i)),a=ia(Pe(e,n,t));return!!(s!==r&&o!==a||s===0&&na(i,e,t)||r===0&&na(i,n,t)||o===0&&na(e,i,n)||a===0&&na(e,t,n))}function na(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ia(i){return i>0?1:i<0?-1:0}function xM(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&yp(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function oo(i,t){return Pe(i.prev,i,i.next)<0?Pe(i,t,i.next)>=0&&Pe(i,i.prev,t)>=0:Pe(i,t,i.prev)<0||Pe(i,i.next,t)<0}function _M(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Mp(i,t){const e=new Yl(i.i,i.x,i.y),n=new Yl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Sd(i,t,e,n){const s=new Yl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ao(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Yl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function yM(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Wi{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Wi.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];wd(t),Td(n,t);let o=t.length;e.forEach(wd);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Td(n,e[c]);const a=sM.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function wd(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Td(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Nh extends ye{constructor(t=new pr([new Z(.5,.5),new Z(-.5,.5),new Z(-.5,-.5),new Z(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new jt(s,3)),this.setAttribute("uv",new jt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:MM;let _,x=!1,L,E,C,P;p&&(_=p.getSpacedPoints(h),x=!0,d=!1,L=p.computeFrenetFrames(h,!1),E=new w,C=new w,P=new w),d||(g=0,f=0,m=0,v=0);const S=a.extractPoints(l);let M=S.shape;const I=S.holes;if(!Wi.isClockWise(M)){M=M.reverse();for(let D=0,z=I.length;D<z;D++){const R=I[D];Wi.isClockWise(R)&&(I[D]=R.reverse())}}const B=Wi.triangulateShape(M,I),W=M;for(let D=0,z=I.length;D<z;D++){const R=I[D];M=M.concat(R)}function J(D,z,R){return z||console.error("THREE.ExtrudeGeometry: vec does not exist"),D.clone().addScaledVector(z,R)}const $=M.length,st=B.length;function q(D,z,R){let mt,nt,Tt;const lt=D.x-z.x,Vt=D.y-z.y,bt=R.x-D.x,A=R.y-D.y,b=lt*lt+Vt*Vt,F=lt*A-Vt*bt;if(Math.abs(F)>Number.EPSILON){const Y=Math.sqrt(b),et=Math.sqrt(bt*bt+A*A),K=z.x-Vt/Y,Rt=z.y+lt/Y,dt=R.x-A/et,St=R.y+bt/et,re=((dt-K)*A-(St-Rt)*bt)/(lt*A-Vt*bt);mt=K+lt*re-D.x,nt=Rt+Vt*re-D.y;const rt=mt*mt+nt*nt;if(rt<=2)return new Z(mt,nt);Tt=Math.sqrt(rt/2)}else{let Y=!1;lt>Number.EPSILON?bt>Number.EPSILON&&(Y=!0):lt<-Number.EPSILON?bt<-Number.EPSILON&&(Y=!0):Math.sign(Vt)===Math.sign(A)&&(Y=!0),Y?(mt=-Vt,nt=lt,Tt=Math.sqrt(b)):(mt=lt,nt=Vt,Tt=Math.sqrt(b/2))}return new Z(mt/Tt,nt/Tt)}const ht=[];for(let D=0,z=W.length,R=z-1,mt=D+1;D<z;D++,R++,mt++)R===z&&(R=0),mt===z&&(mt=0),ht[D]=q(W[D],W[R],W[mt]);const it=[];let wt,Wt=ht.concat();for(let D=0,z=I.length;D<z;D++){const R=I[D];wt=[];for(let mt=0,nt=R.length,Tt=nt-1,lt=mt+1;mt<nt;mt++,Tt++,lt++)Tt===nt&&(Tt=0),lt===nt&&(lt=0),wt[mt]=q(R[mt],R[Tt],R[lt]);it.push(wt),Wt=Wt.concat(wt)}for(let D=0;D<g;D++){const z=D/g,R=f*Math.cos(z*Math.PI/2),mt=m*Math.sin(z*Math.PI/2)+v;for(let nt=0,Tt=W.length;nt<Tt;nt++){const lt=J(W[nt],ht[nt],mt);at(lt.x,lt.y,-R)}for(let nt=0,Tt=I.length;nt<Tt;nt++){const lt=I[nt];wt=it[nt];for(let Vt=0,bt=lt.length;Vt<bt;Vt++){const A=J(lt[Vt],wt[Vt],mt);at(A.x,A.y,-R)}}}const he=m+v;for(let D=0;D<$;D++){const z=d?J(M[D],Wt[D],he):M[D];x?(C.copy(L.normals[0]).multiplyScalar(z.x),E.copy(L.binormals[0]).multiplyScalar(z.y),P.copy(_[0]).add(C).add(E),at(P.x,P.y,P.z)):at(z.x,z.y,0)}for(let D=1;D<=h;D++)for(let z=0;z<$;z++){const R=d?J(M[z],Wt[z],he):M[z];x?(C.copy(L.normals[D]).multiplyScalar(R.x),E.copy(L.binormals[D]).multiplyScalar(R.y),P.copy(_[D]).add(C).add(E),at(P.x,P.y,P.z)):at(R.x,R.y,u/h*D)}for(let D=g-1;D>=0;D--){const z=D/g,R=f*Math.cos(z*Math.PI/2),mt=m*Math.sin(z*Math.PI/2)+v;for(let nt=0,Tt=W.length;nt<Tt;nt++){const lt=J(W[nt],ht[nt],mt);at(lt.x,lt.y,u+R)}for(let nt=0,Tt=I.length;nt<Tt;nt++){const lt=I[nt];wt=it[nt];for(let Vt=0,bt=lt.length;Vt<bt;Vt++){const A=J(lt[Vt],wt[Vt],mt);x?at(A.x,A.y+_[h-1].y,_[h-1].x+R):at(A.x,A.y,u+R)}}}j(),ot();function j(){const D=s.length/3;if(d){let z=0,R=$*z;for(let mt=0;mt<st;mt++){const nt=B[mt];Nt(nt[2]+R,nt[1]+R,nt[0]+R)}z=h+g*2,R=$*z;for(let mt=0;mt<st;mt++){const nt=B[mt];Nt(nt[0]+R,nt[1]+R,nt[2]+R)}}else{for(let z=0;z<st;z++){const R=B[z];Nt(R[2],R[1],R[0])}for(let z=0;z<st;z++){const R=B[z];Nt(R[0]+$*h,R[1]+$*h,R[2]+$*h)}}n.addGroup(D,s.length/3-D,0)}function ot(){const D=s.length/3;let z=0;Et(W,z),z+=W.length;for(let R=0,mt=I.length;R<mt;R++){const nt=I[R];Et(nt,z),z+=nt.length}n.addGroup(D,s.length/3-D,1)}function Et(D,z){let R=D.length;for(;--R>=0;){const mt=R;let nt=R-1;nt<0&&(nt=D.length-1);for(let Tt=0,lt=h+g*2;Tt<lt;Tt++){const Vt=$*Tt,bt=$*(Tt+1),A=z+mt+Vt,b=z+nt+Vt,F=z+nt+bt,Y=z+mt+bt;Ht(A,b,F,Y)}}}function at(D,z,R){c.push(D),c.push(z),c.push(R)}function Nt(D,z,R){zt(D),zt(z),zt(R);const mt=s.length/3,nt=y.generateTopUV(n,s,mt-3,mt-2,mt-1);ce(nt[0]),ce(nt[1]),ce(nt[2])}function Ht(D,z,R,mt){zt(D),zt(z),zt(mt),zt(z),zt(R),zt(mt);const nt=s.length/3,Tt=y.generateSideWallUV(n,s,nt-6,nt-3,nt-2,nt-1);ce(Tt[0]),ce(Tt[1]),ce(Tt[3]),ce(Tt[1]),ce(Tt[2]),ce(Tt[3])}function zt(D){s.push(c[D*3+0]),s.push(c[D*3+1]),s.push(c[D*3+2])}function ce(D){r.push(D.x),r.push(D.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return bM(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ua[s.type]().fromJSON(s)),new Nh(n,t.options)}}const MM={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new Z(r,o),new Z(a,c),new Z(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],m=t[s*3+2],v=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new Z(o,1-c),new Z(l,1-u),new Z(d,1-m),new Z(v,1-p)]:[new Z(a,1-c),new Z(h,1-u),new Z(f,1-m),new Z(g,1-p)]}};function bM(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class _s extends qa{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new _s(t.radius,t.detail)}}class xo extends ye{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let u=t;const d=(e-t)/s,f=new w,m=new Z;for(let v=0;v<=s;v++){for(let g=0;g<=n;g++){const p=r+g/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let v=0;v<s;v++){const g=v*(n+1);for(let p=0;p<n;p++){const y=p+g,_=y,x=y+n+1,L=y+n+2,E=y+1;a.push(_,x,E),a.push(x,L,E)}}this.setIndex(a),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(l,3)),this.setAttribute("uv",new jt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ir extends ye{constructor(t=new pr([new Z(0,.5),new Z(-.5,-.5),new Z(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new jt(s,3)),this.setAttribute("normal",new jt(r,3)),this.setAttribute("uv",new jt(o,2));function l(h){const u=s.length/3,d=h.extractPoints(e);let f=d.shape;const m=d.holes;Wi.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){const y=m[g];Wi.isClockWise(y)===!0&&(m[g]=y.reverse())}const v=Wi.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){const y=m[g];f=f.concat(y)}for(let g=0,p=f.length;g<p;g++){const y=f[g];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let g=0,p=v.length;g<p;g++){const y=v[g],_=y[0]+u,x=y[1]+u,L=y[2]+u;n.push(_,x,L),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return SM(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new ir(n,t.curveSegments)}}function SM(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Ut extends ye{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new w,d=new w,f=[],m=[],v=[],g=[];for(let p=0;p<=n;p++){const y=[],_=p/n;let x=0;p===0&&o===0?x=.5/e:p===n&&c===Math.PI&&(x=-.5/e);for(let L=0;L<=e;L++){const E=L/e;u.x=-t*Math.cos(s+E*r)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(s+E*r)*Math.sin(o+_*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),g.push(E+x,1-_),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){const _=h[p][y+1],x=h[p][y],L=h[p+1][y],E=h[p+1][y+1];(p!==0||o>0)&&f.push(_,x,E),(p!==n-1||c<Math.PI)&&f.push(x,L,E)}this.setIndex(f),this.setAttribute("position",new jt(m,3)),this.setAttribute("normal",new jt(v,3)),this.setAttribute("uv",new jt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ut(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class We extends ye{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new w,u=new w,d=new w;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){const v=m/s*r,g=f/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(v),u.y=(t+e*Math.cos(g))*Math.sin(v),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){const v=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,y=(s+1)*f+m;o.push(v,g,y),o.push(g,p,y)}this.setIndex(o),this.setAttribute("position",new jt(a,3)),this.setAttribute("normal",new jt(c,3)),this.setAttribute("uv",new jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new We(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ki extends ye{constructor(t=new vp(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new w,c=new w,l=new Z;let h=new w;const u=[],d=[],f=[],m=[];v(),this.setIndex(m),this.setAttribute("position",new jt(u,3)),this.setAttribute("normal",new jt(d,3)),this.setAttribute("uv",new jt(f,2));function v(){for(let _=0;_<e;_++)g(_);g(r===!1?e:0),y(),p()}function g(_){h=t.getPointAt(_/e,h);const x=o.normals[_],L=o.binormals[_];for(let E=0;E<=s;E++){const C=E/s*Math.PI*2,P=Math.sin(C),S=-Math.cos(C);c.x=S*x.x+P*L.x,c.y=S*x.y+P*L.y,c.z=S*x.z+P*L.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let _=1;_<=e;_++)for(let x=1;x<=s;x++){const L=(s+1)*(_-1)+(x-1),E=(s+1)*_+(x-1),C=(s+1)*_+x,P=(s+1)*(_-1)+x;m.push(L,E,P),m.push(E,C,P)}}function y(){for(let _=0;_<=e;_++)for(let x=0;x<=s;x++)l.x=_/e,l.y=x/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Ki(new Ua[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Ft extends $n{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wf,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class si extends Ft{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Z(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Fe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new kt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new kt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new kt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}function sa(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function wM(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function TM(i){function t(s,r){return i[s]-i[r]}const e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function Ed(i,t,e){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let c=0;c!==t;++c)s[o++]=i[a+c]}return s}function bp(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=i[s++];while(r!==void 0)}class _o{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class EM extends _o{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hu,endingEnd:hu}}intervalChanged_(t,e,n){const s=this.parameterPositions;let r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case uu:r=t,a=2*e-n;break;case du:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case uu:o=t,c=2*n-e;break;case du:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}const l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),v=m*m,g=v*m,p=-d*g+2*d*v-d*m,y=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*m+1,_=(-1-f)*g+(1.5+f)*v+.5*m,x=f*g-f*v;for(let L=0;L!==a;++L)r[L]=p*o[h+L]+y*o[l+L]+_*o[c+L]+x*o[u+L];return r}}class AM extends _o{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}}class CM extends _o{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}}class ri{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=sa(e,this.TimeBufferType),this.values=sa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:sa(t.times,Array),values:sa(t.values,Array)};const s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new CM(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new AM(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new EM(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case to:e=this.InterpolantFactoryMethodDiscrete;break;case eo:e=this.InterpolantFactoryMethodLinear;break;case ec:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return to;case this.InterpolantFactoryMethodLinear:return eo;case this.InterpolantFactoryMethodSmooth:return ec}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&wM(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ec,r=t.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{const u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){const v=e[u+m];if(v!==e[d+m]||v!==e[f+m]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}}ri.prototype.TimeBufferType=Float32Array;ri.prototype.ValueBufferType=Float32Array;ri.prototype.DefaultInterpolation=eo;class mr extends ri{constructor(t,e,n){super(t,e,n)}}mr.prototype.ValueTypeName="bool";mr.prototype.ValueBufferType=Array;mr.prototype.DefaultInterpolation=to;mr.prototype.InterpolantFactoryMethodLinear=void 0;mr.prototype.InterpolantFactoryMethodSmooth=void 0;class Sp extends ri{}Sp.prototype.ValueTypeName="color";class sr extends ri{}sr.prototype.ValueTypeName="number";class RM extends _o{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e);let l=t*a;for(let h=l+a;l!==h;l+=4)nn.slerpFlat(r,0,o,l-a,o,l,c);return r}}class rr extends ri{InterpolantFactoryMethodLinear(t){return new RM(this.times,this.values,this.getValueSize(),t)}}rr.prototype.ValueTypeName="quaternion";rr.prototype.InterpolantFactoryMethodSmooth=void 0;class gr extends ri{constructor(t,e,n){super(t,e,n)}}gr.prototype.ValueTypeName="string";gr.prototype.ValueBufferType=Array;gr.prototype.DefaultInterpolation=to;gr.prototype.InterpolantFactoryMethodLinear=void 0;gr.prototype.InterpolantFactoryMethodSmooth=void 0;class or extends ri{}or.prototype.ValueTypeName="vector";class LM{constructor(t="",e=-1,n=[],s=eg){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=Nn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,s=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(IM(n[o]).scale(s));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(ri.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){const r=e.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=TM(c);c=Ed(c,1,h),l=Ed(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new sr(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){const l=t[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=s[u];d||(s[u]=d=[]),d.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,m,v){if(f.length!==0){const g=[],p=[];bp(f,g,p,m),g.length!==0&&v.push(new u(d,g,p))}},s=[],r=t.name||"default",o=t.fps||30,a=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let v=0;v<d[m].morphTargets.length;v++)f[d[m].morphTargets[v]]=-1;for(const v in f){const g=[],p=[];for(let y=0;y!==d[m].morphTargets.length;++y){const _=d[m];g.push(_.time),p.push(_.morphTarget===v?1:0)}s.push(new sr(".morphTargetInfluence["+v+"]",g,p))}c=f.length*o}else{const f=".bones["+e[u].name+"]";n(or,f+".position",d,"pos",s),n(rr,f+".quaternion",d,"rot",s),n(or,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,s=t.length;n!==s;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function PM(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return sr;case"vector":case"vector2":case"vector3":case"vector4":return or;case"color":return Sp;case"quaternion":return rr;case"bool":case"boolean":return mr;case"string":return gr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function IM(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=PM(i.type);if(i.times===void 0){const e=[],n=[];bp(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}const Hi={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class NM{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}}const DM=new NM;class ys{constructor(t){this.manager=t!==void 0?t:DM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}ys.DEFAULT_MATERIAL_NAME="__DEFAULT";const pi={};class UM extends Error{constructor(t,e){super(t),this.response=e}}class ka extends ys{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Hi.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(pi[t]!==void 0){pi[t].push({onLoad:e,onProgress:n,onError:s});return}pi[t]=[],pi[t].push({onLoad:e,onProgress:n,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=pi[t],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0;let v=0;const g=new ReadableStream({start(p){y();function y(){u.read().then(({done:_,value:x})=>{if(_)p.close();else{v+=x.byteLength;const L=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:f});for(let E=0,C=h.length;E<C;E++){const P=h[E];P.onProgress&&P.onProgress(L)}p.enqueue(x),y()}},_=>{p.error(_)})}}});return new Response(g)}else throw new UM(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{Hi.add(t,l);const h=pi[t];delete pi[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=pi[t];if(h===void 0)throw this.manager.itemError(t),l;delete pi[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class kM extends ys{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Hi.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=no("img");function c(){h(),Hi.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class OM extends ys{constructor(t){super(t)}load(t,e,n,s){const r=new Be,o=new kM(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class ja extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class wp extends ja{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const kc=new Bt,Ad=new w,Cd=new w;class Dh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Z(512,512),this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bh,this._frameExtents=new Z(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ad.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ad),Cd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Cd),e.updateMatrixWorld(),kc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(kc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class FM extends Dh{constructor(){super(new Ze(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=er*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class BM extends ja{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new FM}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Rd=new Bt,Ir=new w,Oc=new w;class zM extends Dh{constructor(){super(new Ze(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Z(4,2),this._viewportCount=6,this._viewports=[new de(2,1,1,1),new de(0,1,1,1),new de(3,1,1,1),new de(1,1,1,1),new de(3,0,1,1),new de(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ir.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ir),Oc.copy(n.position),Oc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Oc),n.updateMatrixWorld(),s.makeTranslation(-Ir.x,-Ir.y,-Ir.z),Rd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rd)}}class Tp extends ja{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new zM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class HM extends Dh{constructor(){super(new Sh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Oa extends ja{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new HM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Yr{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,s=t.length;n<s;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class VM extends ys{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Hi.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(l=>{e&&e(l),r.manager.itemEnd(t)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Hi.add(t,l),e&&e(l),r.manager.itemEnd(t),l}).catch(function(l){s&&s(l),Hi.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});Hi.add(t,c),r.manager.itemStart(t)}}class GM{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ld(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ld();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ld(){return performance.now()}const Uh="\\[\\]\\.:\\/",WM=new RegExp("["+Uh+"]","g"),kh="[^"+Uh+"]",$M="[^"+Uh.replace("\\.","")+"]",qM=/((?:WC+[\/:])*)/.source.replace("WC",kh),XM=/(WCOD+)?/.source.replace("WCOD",$M),jM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kh),YM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kh),KM=new RegExp("^"+qM+XM+jM+YM+"$"),JM=["material","materials","bones","map"];class ZM{constructor(t,e,n){const s=n||xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class xe{constructor(t,e,n){this.path=e,this.parsedPath=n||xe.parseTrackName(e),this.node=xe.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new xe.Composite(t,e,n):new xe(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(WM,"")}static parseTrackName(t){const e=KM.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);JM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,s=e.propertyName;let r=e.propertyIndex;if(t||(t=xe.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const o=t[s];if(o===void 0){const l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}xe.Composite=ZM;xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xe.prototype.GetterByBindingType=[xe.prototype._getValue_direct,xe.prototype._getValue_array,xe.prototype._getValue_arrayElement,xe.prototype._getValue_toArray];xe.prototype.SetterByBindingTypeAndVersioning=[[xe.prototype._setValue_direct,xe.prototype._setValue_direct_setNeedsUpdate,xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_array,xe.prototype._setValue_array_setNeedsUpdate,xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_arrayElement,xe.prototype._setValue_arrayElement_setNeedsUpdate,xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_fromArray,xe.prototype._setValue_fromArray_setNeedsUpdate,xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Pd=new Bt;class Ep{constructor(t,e,n=0,s=1/0){this.ray=new mo(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Mh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Pd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Pd),this}intersectObject(t,e=!0,n=[]){return Kl(t,this,n,e),n.sort(Id),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Kl(t[s],this,n,e);return n.sort(Id),n}}function Id(i,t){return i.distance-t.distance}function Kl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Kl(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uh);function Ya(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new ye;let l=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(const h in r){const u=Nd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let v=0;v<o[h].length;++v)f.push(o[h][v][d]);const m=Nd(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function Nd(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){const h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new Ue(o,e,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const u=c/e;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<e;m++){const v=h.getComponent(d,m);a.setComponent(d+u,m,v)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function Dd(i,t){if(t===ng)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(t===Vl||t===Gf){let e=i.getIndex();if(e===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),e=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=e.count-2,s=[];if(t===Vl)for(let o=1;o<=n;o++)s.push(e.getX(0)),s.push(e.getX(o)),s.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(e.getX(o)),s.push(e.getX(o+1)),s.push(e.getX(o+2))):(s.push(e.getX(o+2)),s.push(e.getX(o+1)),s.push(e.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),i}class QM extends ys{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new sb(e)}),this.register(function(e){return new rb(e)}),this.register(function(e){return new pb(e)}),this.register(function(e){return new mb(e)}),this.register(function(e){return new gb(e)}),this.register(function(e){return new ab(e)}),this.register(function(e){return new cb(e)}),this.register(function(e){return new lb(e)}),this.register(function(e){return new hb(e)}),this.register(function(e){return new ib(e)}),this.register(function(e){return new ub(e)}),this.register(function(e){return new ob(e)}),this.register(function(e){return new fb(e)}),this.register(function(e){return new db(e)}),this.register(function(e){return new eb(e)}),this.register(function(e){return new vb(e)}),this.register(function(e){return new xb(e)})}load(t,e,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Yr.extractUrlBase(t);o=Yr.resolveURL(l,this.path)}else o=Yr.extractUrlBase(t);this.manager.itemStart(t);const a=function(l){s?s(l):console.error(l),r.manager.itemError(t),r.manager.itemEnd(t)},c=new ka(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{r.parse(l,o,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,s){let r;const o={},a={},c=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===Ap){try{o[se.KHR_BINARY_GLTF]=new _b(t)}catch(u){s&&s(u);return}r=JSON.parse(o[se.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Ib(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case se.KHR_MATERIALS_UNLIT:o[u]=new nb;break;case se.KHR_DRACO_MESH_COMPRESSION:o[u]=new yb(r,this.dracoLoader);break;case se.KHR_TEXTURE_TRANSFORM:o[u]=new Mb;break;case se.KHR_MESH_QUANTIZATION:o[u]=new bb;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(t,e){const n=this;return new Promise(function(s,r){n.parse(t,e,s,r)})}}function tb(){let i={};return{get:function(t){return i[t]},add:function(t,e){i[t]=e},remove:function(t){delete i[t]},removeAll:function(){i={}}}}const se={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class eb{constructor(t){this.parser=t,this.name=se.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,s=e.length;n<s;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let s=e.cache.get(n);if(s)return s;const r=e.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let l;const h=new kt(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],en);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Oa(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Tp(h),l.distance=u;break;case"spot":l=new BM(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,_i(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),s=Promise.resolve(l),e.cache.add(n,s),s}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(e.cache,a,c)})}}class nb{constructor(){this.name=se.KHR_MATERIALS_UNLIT}getMaterialType(){return Oe}extendParams(t,e,n){const s=[];t.color=new kt(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],en),t.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(t,"map",r.baseColorTexture,Ee))}return Promise.all(s)}}class ib{constructor(t){this.parser=t,this.name=se.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}}class sb{constructor(t){this.parser=t,this.name=se.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new Z(a,a)}return Promise.all(r)}}class rb{constructor(t){this.parser=t,this.name=se.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class ob{constructor(t){this.parser=t,this.name=se.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class ab{constructor(t){this.parser=t,this.name=se.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];e.sheenColor=new kt(0,0,0),e.sheenRoughness=0,e.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],en)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,Ee)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class cb{constructor(t){this.parser=t,this.name=se.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class lb{constructor(t){this.parser=t,this.name=se.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return e.attenuationColor=new kt().setRGB(a[0],a[1],a[2],en),Promise.all(r)}}class hb{constructor(t){this.parser=t,this.name=se.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class ub{constructor(t){this.parser=t,this.name=se.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return e.specularColor=new kt().setRGB(a[0],a[1],a[2],en),o.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,Ee)),Promise.all(r)}}class db{constructor(t){this.parser=t,this.name=se.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(r)}}class fb{constructor(t){this.parser=t,this.name=se.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class pb{constructor(t){this.parser=t,this.name=se.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,s=n.textures[t];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}}class mb{constructor(t){this.parser=t,this.name=se.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class gb{constructor(t){this.parser=t,this.name=se.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class vb{constructor(t){this.name=se.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}}class xb{constructor(t){this.name=se.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=e.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==Cn.TRIANGLES&&l.mode!==Cn.TRIANGLE_STRIP&&l.mode!==Cn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const m of u){const v=new Bt,g=new w,p=new nn,y=new w(1,1,1),_=new Ei(m.geometry,m.material,d);for(let x=0;x<d;x++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,x),c.SCALE&&y.fromBufferAttribute(c.SCALE,x),_.setMatrixAt(x,v.compose(g,p,y));for(const x in c)if(x==="_COLOR_0"){const L=c[x];_.instanceColor=new ql(L.array,L.itemSize,L.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&m.geometry.setAttribute(x,c[x]);Re.prototype.copy.call(_,m),this.parser.assignFinalMaterial(_),f.push(_)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Ap="glTF",Nr=12,Ud={JSON:1313821514,BIN:5130562};class _b{constructor(t){this.name=se.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Nr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Ap)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Nr,r=new DataView(t,Nr);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Ud.JSON){const l=new Uint8Array(t,Nr+o,a);this.content=n.decode(l)}else if(c===Ud.BIN){const l=Nr+o;this.body=t.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class yb{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=se.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,s=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=Jl[h]||h.toLowerCase();a[u]=o[h]}for(const h in t.attributes){const u=Jl[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[t.attributes[h]],f=Ys[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(const m in f.attributes){const v=f.attributes[m],g=c[m];g!==void 0&&(v.normalized=g)}u(f)},a,l,en,d)})})}}class Mb{constructor(){this.name=se.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class bb{constructor(){this.name=se.KHR_MESH_QUANTIZATION}}class Cp extends _o{constructor(t,e,n,s){super(t,e,n,s)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s*3+s;for(let o=0;o!==s;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-e,u=(n-e)/h,d=u*u,f=d*u,m=t*l,v=m-l,g=-2*f+3*d,p=f-d,y=1-g,_=p-d+u;for(let x=0;x!==a;x++){const L=o[v+x+a],E=o[v+x+c]*h,C=o[m+x+a],P=o[m+x]*h;r[x]=y*L+_*E+g*C+p*P}return r}}const Sb=new nn;class wb extends Cp{interpolate_(t,e,n,s){const r=super.interpolate_(t,e,n,s);return Sb.fromArray(r).normalize().toArray(r),r}}const Cn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ys={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},kd={9728:cn,9729:Mn,9984:Nf,9985:xa,9986:zr,9987:yi},Od={33071:zi,33648:La,10497:Xi},Fc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Jl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Oi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Tb={CUBICSPLINE:void 0,LINEAR:eo,STEP:to},Bc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Eb(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ft({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Si})),i.DefaultMaterial}function ss(i,t,e){for(const n in e.extensions)i[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function _i(i,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(i.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function Ab(i,t,e){let n=!1,s=!1,r=!1;for(let l=0,h=t.length;l<h;l++){const u=t[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],c=[];for(let l=0,h=t.length;l<h;l++){const u=t[l];if(n){const d=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){const d=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Cb(i,t){if(i.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)i.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(i.morphTargetInfluences.length===e.length){i.morphTargetDictionary={};for(let n=0,s=e.length;n<s;n++)i.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Rb(i){let t;const e=i.extensions&&i.extensions[se.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+zc(e.attributes):t=i.indices+":"+zc(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)t+=":"+zc(i.targets[n]);return t}function zc(i){let t="";const e=Object.keys(i).sort();for(let n=0,s=e.length;n<s;n++)t+=e[n]+":"+i[e[n]]+";";return t}function Zl(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Lb(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Pb=new Bt;class Ib{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new tb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new OM(this.options.manager):this.textureLoader=new VM(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ka(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return ss(r,a,s),_i(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=e.length;s<r;s++){const o=e[s].joints;for(let a=0,c=o.length;a<c;a++)t[o[a]].isBone=!0}for(let s=0,r=t.length;s<r;s++){const o=t[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const s=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+t.uses[e]++,s}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const s=t(e[n]);if(s)return s}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let s=0;s<e.length;s++){const r=t(e[s]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let s=this.cache.get(n);if(!s){switch(t){case"scene":s=this.loadScene(e);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":s=this.loadAccessor(e);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":s=this.loadBuffer(e);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":s=this.loadSkin(e);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":s=this.loadCamera(e);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!s)throw new Error("Unknown type: "+t);break}this.cache.add(n,s)}return s}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,s=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(s.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[se.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(Yr.resolveURL(e.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const s=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(t){const e=this,n=this.json,s=this.json.accessors[t];if(s.bufferView===void 0&&s.sparse===void 0){const o=Fc[s.type],a=Ys[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new Ue(l,o,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=Fc[s.type],l=Ys[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0;let v,g;if(f&&f!==u){const p=Math.floor(d/f),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let _=e.cache.get(y);_||(v=new l(a,p*f,s.count*f/h),_=new cp(v,f/h),e.cache.add(y,_)),g=new io(_,c,d%f/h,m)}else a===null?v=new l(s.count*c):v=new l(a,d,s.count*c),g=new Ue(v,c,m);if(s.sparse!==void 0){const p=Fc.SCALAR,y=Ys[s.sparse.indices.componentType],_=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,L=new y(o[1],_,s.sparse.count*p),E=new l(o[2],x,s.sparse.count*c);a!==null&&(g=new Ue(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let C=0,P=L.length;C<P;C++){const S=L[C];if(g.setX(S,E[C*c]),c>=2&&g.setY(S,E[C*c+1]),c>=3&&g.setZ(S,E[C*c+2]),c>=4&&g.setW(S,E[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){const s=this,r=this.json,o=r.textures[t],a=r.images[e],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=kd[d.magFilter]||Mn,h.minFilter=kd[d.minFilter]||yi,h.wrapS=Od[d.wrapS]||Xi,h.wrapT=Od[d.wrapT]||Xi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==cn&&h.minFilter!==Mn,s.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){const n=this,s=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());const o=s.images[t],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let m=d;e.isImageBitmapLoader===!0&&(m=function(v){const g=new Be(v);g.needsUpdate=!0,d(g)}),e.load(Yr.resolveURL(u,r.path),m,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),_i(u,o),u.userData.mimeType=o.mimeType||Lb(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[se.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[se.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[se.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const s=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new go,$n.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new fp,$n.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return Ft}loadMaterial(t){const e=this,n=this.json,s=this.extensions,r=n.materials[t];let o;const a={},c=r.extensions||{},l=[];if(c[se.KHR_MATERIALS_UNLIT]){const u=s[se.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,e))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new kt(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],en),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(e.assignTexture(a,"map",u.baseColorTexture,Ee)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=De);const h=r.alphaMode||Bc.OPAQUE;if(h===Bc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Bc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Oe&&(l.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Z(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Oe&&(l.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Oe){const u=r.emissiveFactor;a.emissive=new kt().setRGB(u[0],u[1],u[2],en)}return r.emissiveTexture!==void 0&&o!==Oe&&l.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,Ee)),Promise.all(l).then(function(){const u=new o(a);return r.name&&(u.name=r.name),_i(u,r),e.associations.set(u,{materials:t}),r.extensions&&ss(s,u,r),u})}createUniqueName(t){const e=xe.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[se.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(c){return Fd(c,a,e)})}const o=[];for(let a=0,c=t.length;a<c;a++){const l=t[a],h=Rb(l),u=s[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[se.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Fd(new ye,l,e),s[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,s=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?Eb(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,m=h.length;f<m;f++){const v=h[f],g=o[f];let p;const y=l[f];if(g.mode===Cn.TRIANGLES||g.mode===Cn.TRIANGLE_STRIP||g.mode===Cn.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new Vy(v,y):new tt(v,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Cn.TRIANGLE_STRIP?p.geometry=Dd(p.geometry,Gf):g.mode===Cn.TRIANGLE_FAN&&(p.geometry=Dd(p.geometry,Vl));else if(g.mode===Cn.LINES)p=new $y(v,y);else if(g.mode===Cn.LINE_STRIP)p=new Rh(v,y);else if(g.mode===Cn.LINE_LOOP)p=new qy(v,y);else if(g.mode===Cn.POINTS)p=new $a(v,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&Cb(p,r),p.name=e.createUniqueName(r.name||"mesh_"+t),_i(p,r),g.extensions&&ss(s,p,g),e.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)e.associations.set(u[f],{meshes:t,primitives:f});if(u.length===1)return r.extensions&&ss(s,u[0],r),u[0];const d=new Mt;r.extensions&&ss(s,d,r),e.associations.set(d,{meshes:t});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(t){let e;const n=this.json.cameras[t],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Ze(Ia.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(e=new Sh(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),_i(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let s=0,r=e.joints.length;s<r;s++)n.push(this._loadNodeShallow(e.joints[s]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const d=new Bt;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new Ch(a,c)})}loadAnimation(t){const e=this.json,n=this,s=e.animations[t],r=s.name?s.name:"animation_"+t,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){const f=s.channels[u],m=s.samplers[f.sampler],v=f.target,g=v.node,p=s.parameters!==void 0?s.parameters[m.input]:m.input,y=s.parameters!==void 0?s.parameters[m.output]:m.output;v.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",y)),l.push(m),h.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],m=u[2],v=u[3],g=u[4],p=[];for(let y=0,_=d.length;y<_;y++){const x=d[y],L=f[y],E=m[y],C=v[y],P=g[y];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const S=n._createAnimationTracks(x,L,E,C,P);if(S)for(let M=0;M<S.length;M++)p.push(S[M])}return new LM(r,void 0,p)})}createNodeMesh(t){const e=this.json,n=this,s=e.nodes[t];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(t){const e=this.json,n=this,s=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Pb)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,s=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){a.push(l)}),this.nodeCache[t]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new up:l.length>1?h=new Mt:l.length===1?h=l[0]:h=new Re,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),_i(h,r),r.extensions&&ss(n,h,r),r.matrix!==void 0){const u=new Bt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],s=this,r=new Mt;n.name&&(r.name=s.createUniqueName(n.name)),_i(r,n),n.extensions&&ss(e,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of s.associations)(d instanceof $n||d instanceof Be)&&u.set(d,f);return h.traverse(d=>{const f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(t,e,n,s,r){const o=[],a=t.name?t.name:t.uuid,c=[];Oi[r.path]===Oi.weights?t.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(Oi[r.path]){case Oi.weights:l=sr;break;case Oi.rotation:l=rr;break;case Oi.position:case Oi.scale:l=or;break;default:switch(n.itemSize){case 1:l=sr;break;case 2:case 3:default:l=or;break}break}const h=s.interpolation!==void 0?Tb[s.interpolation]:eo,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const m=new l(c[d]+"."+Oi[r.path],e.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=Zl(e.constructor),s=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)s[r]=e[r]*n;e=s}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const s=this instanceof rr?wb:Cp;return new s(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Nb(i,t,e){const n=t.attributes,s=new Ai;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new w(c[0],c[1],c[2]),new w(l[0],l[1],l[2])),a.normalized){const h=Zl(Ys[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const a=new w,c=new w;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const d=e.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const v=Zl(Ys[d.componentType]);c.multiplyScalar(v)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new ni;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Fd(i,t,e){const n=t.attributes,s=[];function r(o,a){return e.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(const o in n){const a=Jl[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(t.indices!==void 0&&!i.index){const o=e.getDependency("accessor",t.indices).then(function(a){i.setIndex(a)});s.push(o)}return ae.workingColorSpace!==en&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ae.workingColorSpace}" not supported.`),_i(i,t),Nb(i,t,e),Promise.all(s).then(function(){return t.targets!==void 0?Ab(i,t.targets,e):i})}const Hc=new WeakMap;class Db extends ys{constructor(t){super(t),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(t){return this.decoderPath=t,this}setDecoderConfig(t){return this.decoderConfig=t,this}setWorkerLimit(t){return this.workerLimit=t,this}load(t,e,n,s){const r=new ka(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(t,o=>{this.parse(o,e,s)},n,s)}parse(t,e,n=()=>{}){this.decodeDracoFile(t,e,null,null,Ee,n).catch(n)}decodeDracoFile(t,e,n,s,r=en,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:s||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(t,a).then(e).catch(o)}decodeGeometry(t,e){const n=JSON.stringify(e);if(Hc.has(t)){const c=Hc.get(t);if(c.key===n)return c.promise;if(t.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let s;const r=this.workerNextTaskID++,o=t.byteLength,a=this._getWorker(r,o).then(c=>(s=c,new Promise((l,h)=>{s._callbacks[r]={resolve:l,reject:h},s.postMessage({type:"decode",id:r,taskConfig:e,buffer:t},[t])}))).then(c=>this._createGeometry(c.geometry));return a.catch(()=>!0).then(()=>{s&&r&&this._releaseTask(s,r)}),Hc.set(t,{key:n,promise:a}),a}_createGeometry(t){const e=new ye;t.index&&e.setIndex(new Ue(t.index.array,1));for(let n=0;n<t.attributes.length;n++){const s=t.attributes[n],r=s.name,o=s.array,a=s.itemSize,c=new Ue(o,a);r==="color"&&(this._assignVertexColorSpace(c,s.vertexColorSpace),c.normalized=!(o instanceof Float32Array)),e.setAttribute(r,c)}return e}_assignVertexColorSpace(t,e){if(e!==Ee)return;const n=new kt;for(let s=0,r=t.count;s<r;s++)n.fromBufferAttribute(t,s),ae.toWorkingColorSpace(n,Ee),t.setXYZ(s,n.r,n.g,n.b)}_loadLibrary(t,e){const n=new ka(this.manager);return n.setPath(this.decoderPath),n.setResponseType(e),n.setWithCredentials(this.withCredentials),new Promise((s,r)=>{n.load(t,s,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const t=typeof WebAssembly!="object"||this.decoderConfig.type==="js",e=[];return t?e.push(this._loadLibrary("draco_decoder.js","text")):(e.push(this._loadLibrary("draco_wasm_wrapper.js","text")),e.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(e).then(n=>{const s=n[0];t||(this.decoderConfig.wasmBinary=n[1]);const r=Ub.toString(),o=["/* draco decoder */",s,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(t,e){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const s=new Worker(this.workerSourceURL);s._callbacks={},s._taskCosts={},s._taskLoad=0,s.postMessage({type:"init",decoderConfig:this.decoderConfig}),s.onmessage=function(r){const o=r.data;switch(o.type){case"decode":s._callbacks[o.id].resolve(o);break;case"error":s._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(s)}else this.workerPool.sort(function(s,r){return s._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[t]=e,n._taskLoad+=e,n})}_releaseTask(t,e){t._taskLoad-=t._taskCosts[e],delete t._callbacks[e],delete t._taskCosts[e]}debug(){console.log("Task load: ",this.workerPool.map(t=>t._taskLoad))}dispose(){for(let t=0;t<this.workerPool.length;++t)this.workerPool[t].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function Ub(){let i,t;onmessage=function(o){const a=o.data;switch(a.type){case"init":i=a.decoderConfig,t=new Promise(function(h){i.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(i)});break;case"decode":const c=a.buffer,l=a.taskConfig;t.then(h=>{const u=h.draco,d=new u.Decoder;try{const f=e(u,d,new Int8Array(c),l),m=f.attributes.map(v=>v.array.buffer);f.index&&m.push(f.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:f},m)}catch(f){console.error(f),self.postMessage({type:"error",id:a.id,error:f.message})}finally{u.destroy(d)}});break}};function e(o,a,c,l){const h=l.attributeIDs,u=l.attributeTypes;let d,f;const m=a.GetEncodedGeometryType(c);if(m===o.TRIANGULAR_MESH)d=new o.Mesh,f=a.DecodeArrayToMesh(c,c.byteLength,d);else if(m===o.POINT_CLOUD)d=new o.PointCloud,f=a.DecodeArrayToPointCloud(c,c.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const v={index:null,attributes:[]};for(const g in h){const p=self[u[g]];let y,_;if(l.useUniqueIDs)_=h[g],y=a.GetAttributeByUniqueId(d,_);else{if(_=a.GetAttributeId(d,o[h[g]]),_===-1)continue;y=a.GetAttribute(d,_)}const x=s(o,a,d,g,p,y);g==="color"&&(x.vertexColorSpace=l.vertexColorSpace),v.attributes.push(x)}return m===o.TRIANGULAR_MESH&&(v.index=n(o,a,d)),o.destroy(d),v}function n(o,a,c){const h=c.num_faces()*3,u=h*4,d=o._malloc(u);a.GetTrianglesUInt32Array(c,u,d);const f=new Uint32Array(o.HEAPF32.buffer,d,h).slice();return o._free(d),{array:f,itemSize:1}}function s(o,a,c,l,h,u){const d=u.num_components(),m=c.num_points()*d,v=m*h.BYTES_PER_ELEMENT,g=r(o,h),p=o._malloc(v);a.GetAttributeDataArrayForAllPoints(c,u,g,v,p);const y=new h(o.HEAPF32.buffer,p,m).slice();return o._free(p),{name:l,array:y,itemSize:d}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}let Ta=1;function Kt(){return Ta=Ta*16807%2147483647,(Ta-1)/2147483646}function kb(i=512){const t=document.createElement("canvas");return t.width=t.height=i,{c:t,g:t.getContext("2d")}}function Xn(i,t,e,n,s=!1){for(let r=0;r<e;r++){const o=s?255:0;i.fillStyle=`rgba(${o},${o},${o},${Kt()*n})`;const a=Kt()*2.2+.4;i.fillRect(Kt()*t,Kt()*t,a,a)}}const Bd=new Map;function oi(i,t,e=512){const n=Bd.get(i);if(n)return n;Ta=i.length*7919+13;const{c:s,g:r}=kb(e);t(r,e);const o=new jn(s);return o.wrapS=o.wrapT=Xi,o.colorSpace=Ee,o.anisotropy=8,Bd.set(i,o),o}function Ge(i,t,e){const n=i.clone();return n.repeat.set(t,e),n.needsUpdate=!0,n}const Ob=()=>oi("roof",(i,t)=>{i.fillStyle="#2e1a12",i.fillRect(0,0,t,t);const e=10,n=8,s=t/n,r=t/e;for(let o=e;o>=-1;o--)for(let a=-1;a<=n;a++){const c=a*s+(o%2?s/2:0),l=o*r,h=58+Kt()*22;i.fillStyle=`rgb(${h+38},${h+6},${h-14})`,i.beginPath(),i.moveTo(c+2,l-r*.4),i.lineTo(c+s-2,l-r*.4),i.lineTo(c+s-2,l+r*.55),i.quadraticCurveTo(c+s/2,l+r*1.05,c+2,l+r*.55),i.closePath(),i.fill(),i.strokeStyle="rgba(30,10,4,0.55)",i.lineWidth=2,i.stroke();const u=i.createLinearGradient(c,l-r*.4,c,l+r);u.addColorStop(0,"rgba(0,0,0,0.25)"),u.addColorStop(1,"rgba(255,220,170,0.16)"),i.fillStyle=u,i.fill()}Xn(i,t,3e3,.25),Xn(i,t,1200,.08,!0)}),Fb=()=>oi("lacquer",(i,t)=>{i.fillStyle="#8e2a1d",i.fillRect(0,0,t,t);for(let e=0;e<90;e++){i.strokeStyle=`rgba(${Kt()>.5?"40,8,4":"190,80,50"},${Kt()*.18})`,i.lineWidth=Kt()*3+.5;const n=Kt()*t;i.beginPath(),i.moveTo(0,n);for(let s=0;s<=t;s+=32)i.lineTo(s,n+Math.sin(s*.02+e)*4);i.stroke()}Xn(i,t,1500,.12)}),Bb=()=>oi("timber",(i,t)=>{i.fillStyle="#6b4a30",i.fillRect(0,0,t,t);for(let e=0;e<140;e++){i.strokeStyle=`rgba(${Kt()>.5?"30,18,8":"160,120,80"},${Kt()*.22})`,i.lineWidth=Kt()*2.5+.5;const n=Kt()*t;i.beginPath(),i.moveTo(0,n);for(let s=0;s<=t;s+=24)i.lineTo(s,n+Math.sin(s*.015+e*.7)*6);i.stroke()}Xn(i,t,2e3,.15)}),zb=()=>oi("plaster",(i,t)=>{i.fillStyle="#d6a45a",i.fillRect(0,0,t,t);for(let e=0;e<60;e++){const n=Kt()*t,s=Kt()*t,r=Kt()*90+20,o=i.createRadialGradient(n,s,0,n,s,r),a=Kt()>.4;o.addColorStop(0,a?"rgba(120,80,30,0.16)":"rgba(255,230,170,0.16)"),o.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=o,i.fillRect(n-r,s-r,r*2,r*2)}for(let e=0;e<10;e++){const n=Kt()*t,s=i.createLinearGradient(n,0,n,t*.35);s.addColorStop(0,"rgba(90,60,25,0.08)"),s.addColorStop(1,"rgba(90,60,25,0)"),i.fillStyle=s,i.fillRect(n,0,Kt()*14+6,t*.35)}Xn(i,t,4e3,.1)}),Hb=()=>oi("brick",(i,t)=>{i.fillStyle="#6e3b26",i.fillRect(0,0,t,t);const e=4,n=t/e;for(let s=0;s<e;s++)for(let r=0;r<e;r++){const o=150+Kt()*30;i.fillStyle=`rgb(${o},${o*.55},${o*.38})`,i.fillRect(s*n+3,r*n+3,n-6,n-6)}Xn(i,t,5e3,.18),Xn(i,t,1500,.08,!0)}),Rp=()=>oi("laterite",(i,t)=>{i.fillStyle="#5b3420",i.fillRect(0,0,t,t);const e=4,n=t/e;for(let s=0;s<e;s++){const r=s%2?t/4:0;for(let o=-1;o<3;o++){const a=120+Kt()*40;i.fillStyle=`rgb(${a+20},${a*.62},${a*.4})`,i.fillRect(o*(t/2)+r+3,s*n+3,t/2-6,n-6)}}for(let s=0;s<1400;s++)i.fillStyle=`rgba(40,20,10,${.3+Kt()*.4})`,i.beginPath(),i.arc(Kt()*t,Kt()*t,Kt()*3+.6,0,Math.PI*2),i.fill()}),co=()=>oi("stone",(i,t)=>{i.fillStyle="#5c5a52",i.fillRect(0,0,t,t);const e=3,n=t/e;for(let s=0;s<e;s++)for(let r=0;r<e;r++){const o=120+Kt()*30;i.fillStyle=`rgb(${o},${o*.97},${o*.9})`;const a=r%2?n/2:0;i.fillRect(s*n+a+2,r*n+2,n-4,n-4),i.fillRect(s*n+a-t+2,r*n+2,n-4,n-4)}Xn(i,t,6e3,.14),Xn(i,t,2e3,.07,!0)}),Oh=()=>oi("grass",(i,t)=>{i.fillStyle="#56683a",i.fillRect(0,0,t,t);for(let e=0;e<40;e++){const n=Kt()*t,s=Kt()*t,r=Kt()*120+40,o=i.createRadialGradient(n,s,0,n,s,r);o.addColorStop(0,Kt()>.5?"rgba(140,140,70,0.18)":"rgba(40,70,30,0.2)"),o.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=o,i.fillRect(n-r,s-r,r*2,r*2)}for(let e=0;e<9e3;e++){const n=Kt()*t,s=Kt()*t,r=Kt();i.strokeStyle=r>.5?`rgba(120,150,60,${.3+Kt()*.3})`:`rgba(40,60,20,${.3+Kt()*.3})`,i.lineWidth=1,i.beginPath(),i.moveTo(n,s),i.lineTo(n+(Kt()-.5)*3,s-Kt()*7),i.stroke()}}),Lp=()=>oi("earth",(i,t)=>{i.fillStyle="#8b6a48",i.fillRect(0,0,t,t),Xn(i,t,9e3,.22),Xn(i,t,3e3,.1,!0)}),Vb=()=>oi("gilt",(i,t)=>{i.fillStyle="#c99a3c",i.fillRect(0,0,t,t);for(let e=0;e<400;e++){const n=Kt()*t,s=Kt()*t,r=Kt()*40+10;i.fillStyle=`rgba(${Kt()>.5?"255,225,140":"120,80,20"},${Kt()*.18})`,i.fillRect(n,s,r,r*.7)}},256);function Me(i){let t;return()=>t??=i()}const be=i=>new Ft(i),O={lacquer:Me(()=>be({map:Ge(Fb(),1,2),roughness:.45})),timber:Me(()=>be({map:Ge(Bb(),1,1),roughness:.75})),plaster:Me(()=>be({map:Ge(zb(),1,1),roughness:.95})),brick:Me(()=>be({map:Ge(Hb(),6,6),roughness:.9})),laterite:Me(()=>be({map:Ge(Rp(),2,1),roughness:.95})),stone:Me(()=>be({map:Ge(co(),1,1),roughness:.9})),grass:Me(()=>be({map:Ge(Oh(),40,40),roughness:1})),earth:Me(()=>be({map:Ge(Lp(),4,4),roughness:1})),gold:Me(()=>be({map:Ge(Vb(),1,1),color:"#ffd98a",metalness:.75,roughness:.32})),bronze:Me(()=>be({color:"#5a4a2c",metalness:.8,roughness:.45})),ridge:Me(()=>be({color:"#4a2418",roughness:.7})),ridgeGreen:Me(()=>be({color:"#3f6b55",roughness:.55})),whiteStone:Me(()=>be({color:"#d9d2c3",roughness:.85})),blueStone:Me(()=>be({map:Ge(co(),.6,.6),color:"#9aa39c",roughness:.8})),darkStone:Me(()=>be({color:"#55544e",roughness:.9})),cushion:Me(()=>be({color:"#b98a3a",roughness:.9})),cloth:Me(()=>be({color:"#a8322a",roughness:.85})),paperGlow:Me(()=>be({color:"#ffd9a0",emissive:"#ff9a3c",emissiveIntensity:.6,roughness:.8})),lanternRed:Me(()=>be({color:"#c0392b",emissive:"#ff5a2a",emissiveIntensity:.35,roughness:.7})),leaf:Me(()=>be({color:"#3d5f2a",roughness:.9})),leafLight:Me(()=>be({color:"#5d7d34",roughness:.9})),bark:Me(()=>be({color:"#5a4a3a",roughness:1})),bamboo:Me(()=>be({color:"#7d9a45",roughness:.6})),lotusPad:Me(()=>be({color:"#3f7a3a",roughness:.7,side:De})),lotusPink:Me(()=>be({color:"#f3a6b8",emissive:"#f06a8c",emissiveIntensity:.08,roughness:.6,side:De})),pinkSilk:Me(()=>be({color:"#e46b86",roughness:.7})),incense:Me(()=>be({color:"#b23a26",emissive:"#ff4010",emissiveIntensity:.8}))},Gb=()=>[O.paperGlow(),O.lanternRed(),O.incense()],Wb=["buddha","maitreya","guardian","monk","seated","banyan","disciple"],Fh=new Map,$b={gold:O.gold,bronze:O.bronze,lacquer:O.lacquer,whiteStone:O.whiteStone,bark:O.bark,leaf:O.leaf,leafLight:O.leafLight,haloGlow:()=>new Ft({color:"#ffcf7a",emissive:"#ffb347",emissiveIntensity:.35,roughness:.6})},zd=new Map;function qb(i,t){const e=i.name+(t?"+ao":"");let n=zd.get(e);if(!n){const s=$b[i.name]?.(),r=s?s.clone():i;r.name=i.name,r.vertexColors=t,i.name==="gold"&&(r.emissive.set("#ffffff"),r.emissiveMap=r.map,r.emissiveIntensity=.16),n=r,zd.set(e,n)}return n}async function Xb(i=8e3){const t=new Db().setDecoderPath("/draco/"),e=new QM().setDRACOLoader(t),n=Wb.map(async s=>{try{const r=await e.loadAsync(`/models/${s}.glb`);r.scene.traverse(o=>{o instanceof tt&&(o.castShadow=!0,o.receiveShadow=!0,o.material=qb(o.material,!!o.geometry.attributes.color))}),Fh.set(s,r.scene)}catch(r){console.warn(`[models] ${s}.glb not loaded, keeping the code-built statue`,r)}});await Promise.race([Promise.all(n),new Promise(s=>setTimeout(s,i))]),t.dispose()}function vr(i){return Fh.get(i)?.clone()??null}function jb(){const i=Fh.get("monk");if(!i)return null;const t={};for(const e of["robe","sash","beads","sleeve","hand","head","eyes"]){const n=i.getObjectByName(e);if(!(n instanceof tt))return null;t[e]=n.geometry}return t}const Hd=new Map;function Ql(i,t,e){const n=new kt(e).getHexString();i.traverse(s=>{if(!(s instanceof tt))return;const r=s.material;if(!r.name.startsWith(t))return;const o=`${r.uuid}:${n}`;let a=Hd.get(o);a||(a=r.clone(),a.color.set(e),Hd.set(o,a)),s.material=a})}const yn={nau:"#7a5134",lam:"#5d7487",xam:"#8a8a84",vang:"#b98a3a",cam:"#b8602c"},ds={sang:["#eaa77e","#f7d9bd"],hong:["#e2966a","#f2cba6"],dong:["#d9875a","#e6b48a"],nau:["#b46a40","#c98e62"]},Rn={go:{name:"Tràng hạt gỗ",color:"#e0852c",lv:0},bode:{name:"Tràng hạt bồ đề",color:"#b98a5a",lv:1},tram:{name:"Tràng hạt trầm hương",color:"#6b442a",lv:2},hophach:{name:"Tràng hạt hổ phách",color:"#f2a91f",lv:3},ngoc:{name:"Tràng hạt ngọc bích",color:"#4fae84",lv:4}},Jn={xam:{name:"Bồ đoàn xám",color:"#8a8a84",lv:0},nau:{name:"Bồ đoàn nâu",color:"#7a5134",lv:1},vang:{name:"Bồ đoàn vàng",color:"#c9a24a",lv:2},son:{name:"Bồ đoàn đỏ son",color:"#a3452f",lv:3},sen:{name:"Bồ đoàn hoa sen",color:"#d98fa0",lv:5}},Vd={nau:"Áo nâu",lam:"Áo tràng lam",xam:"Áo xám",vang:"Áo vàng",cam:"Áo cà sa"};class Bh{root=new Mt;body=new Mt;head=new Mt;feet=[];arms=[];robeMat;skinMat;beadsMat=null;sculpted;cap;tuft=null;state="idle";sitBlend=0;walkPhase=0;bowLeft=0;layLeft=0;constructor(t){const e=jb(),n=!!e;this.sculpted=!!e;const s=new Ft({color:ds[t.skin??"dong"][e?0:1],roughness:.7,vertexColors:n});this.skinMat=s,this.cap=this.niCap();const r=new Ft({color:"#e9bf98",roughness:.7,vertexColors:n});this.robeMat=new Ft({color:yn[t.robe],roughness:.85,vertexColors:n});const o=new Ft({color:"#2a211b",roughness:.6}),a=new Ft({color:"#ff9aa8",emissive:"#ff6f86",emissiveIntensity:.3,roughness:.8,transparent:!0,opacity:.6,depthWrite:!1});this.root.add(this.body),this.head.position.y=.78,this.body.add(this.head),e?this.buildSculpted(e,t,{skin:s,scalp:r,dark:o,cheek:a}):this.buildPrimitive(t,{skin:s,scalp:r,dark:o,cheek:a});for(const c of[-1,1]){const l=new tt(new Ut(.06,10,8),o);l.scale.set(1,.6,1.4),l.position.set(c*.09,.04,.03),this.root.add(l),this.feet.push(l)}this.root.traverse(c=>{c instanceof tt&&(c.castShadow=!0)})}buildSculpted(t,e,n){this.body.add(new tt(t.robe,this.robeMat)),this.body.add(new tt(t.sash,new Ft({color:"#dba53e",roughness:.5,vertexColors:!0}))),this.beadsMat=new Ft({color:(Rn[e.beads??"go"]??Rn.go).color,roughness:.35,vertexColors:!0}),this.body.add(new tt(t.beads,this.beadsMat));for(const r of[-1,1]){const o=new Mt;o.position.set(r*.17,.45,0),o.add(new tt(t.sleeve,this.robeMat),new tt(t.hand,n.skin)),o.rotation.z=r*.25,this.body.add(o),this.arms.push(o)}const s=new Ft({color:"#2a211b",roughness:.35});this.head.add(new tt(t.head,n.skin),new tt(t.eyes,s),this.cap),this.cap.visible=e.kind==="ni"}buildPrimitive(t,e){const{skin:n,scalp:s,dark:r,cheek:o}=e,a=new tt(new Yn([[0,.06],[.26,.06],[.28,.1],[.24,.3],[.19,.45],[.13,.5],[0,.52]].map(([f,m])=>new Z(f,m)),24),this.robeMat);a.castShadow=!0,this.body.add(a);const c=new tt(new We(.12,.022,6,20),this.robeMat);c.rotation.x=Math.PI/2,c.position.y=.5,this.body.add(c);for(const f of[-1,1]){const m=new Mt;m.position.set(f*.17,.45,0);const v=new tt(new vo(.06,.16,4,8),this.robeMat);v.position.y=-.11,v.castShadow=!0;const g=new tt(new Ut(.045,10,8),n);g.position.y=-.23,m.add(v,g),m.rotation.z=f*.25,this.body.add(m),this.arms.push(m)}const l=new tt(new Ut(.27,28,20),s);l.scale.set(1,.96,.96),l.castShadow=!0,this.head.add(l);const h=new tt(new Ut(.255,24,16,-.9,1.8,.75,1.6),n);h.rotation.y=Math.PI/2,h.position.z=.015,this.head.add(h);for(const f of[-1,1]){const m=new tt(new Ut(.055,10,8),n);m.scale.set(.5,1,.8),m.position.set(f*.265,-.02,0),this.head.add(m);const v=new tt(new Ut(.026,10,8),r);v.scale.set(1,1.25,.6),v.position.set(f*.085,-.02,.258),this.head.add(v);const g=new tt(new Yi(.035,12),o);g.position.set(f*.15,-.08,.212),g.rotation.y=f*.55,this.head.add(g)}const u=new tt(new We(.03,.007,4,10,Math.PI),r);u.position.set(0,-.11,.25),u.rotation.z=Math.PI,this.head.add(u);const d=new tt(new Ut(.06,10,8),r);d.scale.set(1,.6,1.2),d.position.set(0,.25,.08),this.tuft=d,this.head.add(d,this.cap),d.visible=t.kind==="tieu",this.cap.visible=t.kind==="ni"}niCap(){const t=new tt(new Ut(.285,24,12,0,Math.PI*2,0,Math.PI*.42),new Ft({color:"#8f8a80",roughness:.9}));return t.position.y=.01,t}bow(){this.bowLeft=1.6}lay(){this.layLeft=5.4}get busy(){return this.layLeft>0||this.bowLeft>0}setLook(t){this.robeMat.color.set(yn[t.robe]??yn.nau),this.skinMat.color.set((ds[t.skin??"dong"]??ds.dong)[this.sculpted?0:1]),this.cap.visible=t.kind==="ni",this.tuft&&(this.tuft.visible=t.kind==="tieu"),this.beadsMat?.color.set((Rn[t.beads??"go"]??Rn.go).color)}update(t,e,n){const s=this.state==="sit";this.sitBlend+=((s?1:0)-this.sitBlend)*Math.min(1,t*6);const r=this.state==="walk";r&&(this.walkPhase+=t*(6+n*2.2));const o=r?Math.abs(Math.sin(this.walkPhase))*.05:Math.sin(e*2)*.006;if(this.body.position.y=o-this.sitBlend*.08,this.body.rotation.z=r?Math.sin(this.walkPhase)*.06:0,this.head.rotation.x=r?.05:Math.sin(e*.7)*.03,this.feet.forEach((a,c)=>{const l=c===0?1:-1;a.position.z=.03+(r?Math.sin(this.walkPhase)*.08*l:0),a.position.y=.04+(r?Math.max(0,Math.sin(this.walkPhase)*l)*.04:0),a.position.x=(c===0?-1:1)*(.09+this.sitBlend*.08),a.visible=this.sitBlend<.7}),this.arms.forEach((a,c)=>{const l=c===0?-1:1,h=r?Math.sin(this.walkPhase+(l>0?Math.PI:0))*.5:0;a.rotation.x=h*(1-this.sitBlend)-this.sitBlend*.9,a.rotation.z=l*(.25-this.sitBlend*.15)}),this.bowLeft>0){this.bowLeft=Math.max(0,this.bowLeft-t);const a=1-this.bowLeft/1.6,c=Math.sin(a*Math.PI);this.body.rotation.x=c*.45,this.arms.forEach((l,h)=>{l.rotation.x=-1.25,l.rotation.z=(h===0?-1:1)*-.55})}else if(this.layLeft>0){this.layLeft=Math.max(0,this.layLeft-t);const a=(5.4-this.layLeft)/1.8%1,c=Math.sin(Math.min(1,a*1.15)*Math.PI);this.body.rotation.x=c*1.15,this.body.position.y-=c*.12,this.arms.forEach((l,h)=>{l.rotation.x=-1.25-c*.9,l.rotation.z=(h===0?-1:1)*-.55})}else this.body.rotation.x=0;this.body.scale.set(1+this.sitBlend*.25,1-this.sitBlend*.12,1+this.sitBlend*.2)}}class Yb{constructor(t,e=[]){this.camera=t,this.occluders=e}yaw=0;pitch=.38;dist=7;wantDist=7;focus=new w;ray=new Ep;sinceManual=99;sensitivity=1;autoFollow=!0;distScale=1;zoom(t){this.wantDist=Ia.clamp(this.wantDist*(1+t),2.8,16)}rotate(t,e){this.yaw-=t*.006*this.sensitivity,this.pitch=Ia.clamp(this.pitch+e*.004*this.sensitivity,.06,1.15),this.sinceManual=0}forward(){return new w(-Math.sin(this.yaw),0,-Math.cos(this.yaw))}follow(t,e,n){if(this.sinceManual+=t,!this.autoFollow||!n||this.sinceManual<1.2)return;const s=n.dot(this.forward());if(s<-.3)return;const r=s>.2?1.6:.6;let a=e+Math.PI-this.yaw;a=Math.atan2(Math.sin(a),Math.cos(a)),this.yaw+=a*Math.min(1,t*r)}update(t,e,n){const s=1-Math.exp(-t*8);this.focus.lerp(e,s);const r=(n?Math.min(this.wantDist,6.5):this.wantDist)*this.distScale;this.dist+=(r-this.dist)*(1-Math.exp(-t*5));const o=n?Math.min(this.pitch,.34):this.pitch,a=this.focus.clone().add(new w(0,1,0)),c=new w(Math.sin(this.yaw)*Math.cos(o),Math.sin(o),Math.cos(this.yaw)*Math.cos(o)).multiplyScalar(this.dist);this.ray.set(a,c.clone().normalize()),this.ray.far=this.dist;const l=this.ray.intersectObjects(this.occluders,!1)[0];l&&c.setLength(Math.max(.8,l.distance-.25)),this.camera.position.copy(a).add(c),this.camera.position.y=Math.max(this.camera.position.y,e.y+.4),this.camera.lookAt(a)}snap(t){this.focus.copy(t)}}const Vc=52;class Kb{constructor(t,e,n){this.rig=e,this.onTap=n,this.joyEl=document.createElement("div"),this.joyEl.className="joystick",this.knobEl=document.createElement("div"),this.knobEl.className="joystick-knob",this.joyEl.appendChild(this.knobEl),document.body.appendChild(this.joyEl),this.touch&&(this.rest(),addEventListener("resize",()=>this.rest())),t.addEventListener("pointerdown",r=>{t.setPointerCapture(r.pointerId);const o=r.pointerType==="touch"&&r.clientX<innerWidth*.45&&r.clientY>innerHeight*.3&&!this.joyActive();if(this.ptrs.set(r.pointerId,{x:r.clientX,y:r.clientY,sx:r.clientX,sy:r.clientY,joy:o,t:performance.now()}),o){this.joyEl.style.left=`${r.clientX}px`,this.joyEl.style.top=`${r.clientY}px`,this.joyEl.classList.remove("idle"),this.joyEl.classList.add("on"),this.joyVec.set(0,0),this.knobEl.style.transform="translate(-50%, -50%)";return}const a=this.cameraPtrs();a===1&&(this.dragged=!1),a===2&&(this.pinch=this.spread())}),t.addEventListener("pointermove",r=>{const o=this.ptrs.get(r.pointerId);if(!o)return;const a=r.clientX-o.x,c=r.clientY-o.y;if(o.x=r.clientX,o.y=r.clientY,o.joy){const l=new Z(r.clientX-o.sx,r.clientY-o.sy);l.length()>Vc&&l.setLength(Vc),this.knobEl.style.transform=`translate(calc(-50% + ${l.x}px), calc(-50% + ${l.y}px))`,this.joyVec.copy(l).divideScalar(Vc);return}if(this.cameraPtrs()===2){const l=this.spread();this.pinch>0&&this.rig.zoom((this.pinch-l)/300),this.pinch=l,this.dragged=!0;return}Math.hypot(r.clientX-o.sx,r.clientY-o.sy)>8&&(this.dragged=!0),this.dragged&&this.rig.rotate(a,c)});const s=r=>{const o=this.ptrs.get(r.pointerId);if(this.ptrs.delete(r.pointerId),o?.joy){this.joyVec.set(0,0),this.rest(),Math.hypot(r.clientX-o.sx,r.clientY-o.sy)<10&&performance.now()-o.t<350&&r.type==="pointerup"&&this.onTap(r.clientX,r.clientY);return}o&&!this.dragged&&this.cameraPtrs()===0&&r.type==="pointerup"&&this.onTap(r.clientX,r.clientY),this.cameraPtrs()<2&&(this.pinch=0)};t.addEventListener("pointerup",s),t.addEventListener("pointercancel",s),t.addEventListener("contextmenu",r=>r.preventDefault()),t.addEventListener("wheel",r=>{r.preventDefault(),this.rig.zoom(Math.sign(r.deltaY)*.1)},{passive:!1}),addEventListener("keydown",r=>{r.target?.tagName!=="INPUT"&&this.keys.add(r.key.toLowerCase())}),addEventListener("keyup",r=>this.keys.delete(r.key.toLowerCase())),addEventListener("blur",()=>this.keys.clear())}keys=new Set;ptrs=new Map;dragged=!1;pinch=0;joyEl;knobEl;joyVec=new Z;touch=matchMedia("(pointer: coarse)").matches;rest(){this.joyEl.classList.remove("on"),this.touch&&(this.joyEl.classList.add("idle"),this.joyEl.style.left=`${Math.max(80,innerWidth*.16)}px`,this.joyEl.style.top=`${innerHeight-(innerHeight>500?190:130)}px`,this.knobEl.style.transform="translate(-50%, -50%)")}joyActive(){for(const t of this.ptrs.values())if(t.joy)return!0;return!1}cameraPtrs(){let t=0;for(const e of this.ptrs.values())e.joy||t++;return t}spread(){const[t,e]=[...this.ptrs.values()].filter(n=>!n.joy);return Math.hypot(t.x-e.x,t.y-e.y)}turnCamera(t){const e=this.keys.has("q"),n=this.keys.has("e");e!==n&&this.rig.rotate((e?-1:1)*t*300,0)}move(){let t=0,e=0,n=0;if((this.keys.has("w")||this.keys.has("arrowup"))&&(t+=1),(this.keys.has("s")||this.keys.has("arrowdown"))&&(t-=1),(this.keys.has("d")||this.keys.has("arrowright"))&&(e+=1),(this.keys.has("a")||this.keys.has("arrowleft"))&&(e-=1),t||e)n=this.keys.has("shift")?1.6:1;else if(this.joyVec.length()>.15){t=-this.joyVec.y,e=this.joyVec.x;const o=this.joyVec.length();n=o>.92?1.6:.35+o*.7}if(!n)return null;const s=this.rig.forward(),r=new w(-s.z,0,s.x);return{dir:s.multiplyScalar(t).add(r.multiplyScalar(e)).normalize(),speed:n}}}const Fa={chap:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c-1 2-3 5-3 9v6l3 3 3-3v-6c0-4-2-7-3-9z"/><path d="M12 3v18"/></svg>',vay:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M8 13V6a1.5 1.5 0 0 1 3 0v6M11 11V4.5a1.5 1.5 0 0 1 3 0V11M14 11V6a1.5 1.5 0 0 1 3 0v8a6 6 0 0 1-6 6h-1a5 5 0 0 1-4-2l-3-4a1.5 1.5 0 0 1 2.3-1.9L8 14"/></svg>',cuoi:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 14c1 1.5 2.4 2.2 4 2.2s3-.7 4-2.2"/><path d="M9 9.5h.01M15 9.5h.01"/></svg>',tim:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg>'},zh={show:!0},Pp=14;class Ip{el=document.createElement("div");until=0;constructor(t){this.el.className="bubble",t.appendChild(this.el)}say(t,e){this.el.innerHTML="";const n=document.createElement("span");if(n.textContent=t,this.el.appendChild(n),e){const s=document.createElement("small");s.textContent="Cẩn thận lừa đảo: đừng chuyển tiền cho người mới quen",this.el.appendChild(s)}this.el.classList.remove("emote"),this.until=performance.now()+(e?9e3:6e3)}emote(t){Fa[t]&&(this.el.innerHTML=Fa[t],this.el.classList.add("emote"),this.until=performance.now()+2500)}place(t,e,n){this.el.style.display=n&&performance.now()<this.until?"flex":"none",this.el.style.left=`${t}px`,this.el.style.top=`${e-24}px`}}class Jb{constructor(t,e,n){this.info=t,this.monk=new Bh({kind:t.kind,robe:t.robe,skin:t.skin,beads:t.beads}),this.monk.root.position.set(t.x,t.y,t.z),this.monk.root.rotation.y=t.ry,this.target.set(t.x,t.y,t.z),this.targetRy=t.ry,this.state=t.s,e.add(this.monk.root),this.hit=new tt(new te(.45,.45,1.2,8),new Oe({visible:!1})),this.hit.position.y=.6,this.hit.userData.peer=t.id,this.monk.root.add(this.hit),this.tag=document.createElement("div"),this.tag.className="name-tag",this.tag.textContent=t.name,n.appendChild(this.tag),this.bubble=new Ip(n)}monk;hit;tag;bubble;target=new w;targetRy=0;state=0;setLook(t){Object.assign(this.info,{name:t.name,kind:t.kind,robe:t.robe,skin:t.skin,beads:t.beads}),this.monk.setLook(t),this.tag.textContent=t.name}setState(t,e,n,s,r){this.target.set(t,e,n),this.targetRy=s,this.state=r}say(t,e){this.bubble.say(t,e)}emote(t){this.bubble.emote(t),t==="chap"&&this.monk.bow()}update(t,e,n,s,r){const o=this.monk.root,a=1-Math.exp(-t*10),c=o.position.clone();o.position.lerp(this.target,a);let l=this.targetRy-o.rotation.y;l=Math.atan2(Math.sin(l),Math.cos(l)),o.rotation.y+=l*a;const h=c.distanceTo(o.position)/Math.max(t,.001);this.monk.state=this.state===2?"sit":this.state===1||h>.4?"walk":"idle",this.monk.update(t,e,h);const u=o.position.clone().setY(o.position.y+(this.state===2?1.25:1.35)).project(n),d=o.position.distanceTo(s)<40,f=u.z<1&&d,m=(u.x*.5+.5)*innerWidth,v=(-u.y*.5+.5)*innerHeight;this.tag.style.display=f&&zh.show?"block":"none",this.tag.style.left=`${m}px`,this.tag.style.top=`${v}px`,this.bubble.place(m,v,f&&!r&&o.position.distanceTo(s)<Pp)}dispose(t){t.remove(this.monk.root),this.tag.remove(),this.bubble.el.remove()}}const mi={sound:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h3l5-4v14l-5-4H4z"/><path d="M16 9a4 4 0 0 1 0 6"/><path d="M18.5 6.5a7.5 7.5 0 0 1 0 11"/></svg>',mute:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h3l5-4v14l-5-4H4z"/><path d="M16 9l5 6M21 9l-5 6"/></svg>',stand:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2.2"/><path d="M12 8v7M8 11l4-2 4 2M10 21l2-6 2 6"/></svg>',send:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12 20 4l-6 16-3-7z"/></svg>',log:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16v11H9l-5 4z"/></svg>',lay:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2"/><path d="M5 20h14M8 20c0-4 1.5-7 4-9 2.5 2 4 5 4 9"/></svg>',huong:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21V9M12 21V7M15 21V9"/><path d="M12 5c-1-1.5 1-2 0-3.5M9 7c-1-1.5 1-2 0-3.5M15 7c-1-1.5 1-2 0-3.5"/></svg>',hat:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="4.5" r="2"/><circle cx="17.5" cy="8" r="2"/><circle cx="17.5" cy="15" r="2"/><circle cx="12" cy="19.5" r="2"/><circle cx="6.5" cy="15" r="2"/><circle cx="6.5" cy="8" r="2"/></svg>',den:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16c3 3 13 3 16 0M7 15c0-4 2-7 5-9 3 2 5 5 5 9M12 6v9"/><path d="M3 20c3 1 15 1 18 0"/></svg>',xam:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10h10l-1.5 11h-7z"/><path d="M9 10 8 3M12 10V2M15 10l1-7"/></svg>',chuong:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v2M7 17c0-6 1-11 5-11s5 5 5 11z"/><path d="M5 17h14M12 20h.01"/></svg>',gao:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11h18c0 5-4 9-9 9s-9-4-9-9z"/><path d="M8 11c0-2 1-3 2-3M12 11c0-3 1-4 2-4M16 11c0-1.5.6-2.5 1.5-2.5"/></svg>',gear:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1"/><circle cx="12" cy="12" r="6.5"/></svg>'};class Zb{constructor(t,e,n,s){this.onSound=n,this.onStand=s,t.innerHTML="";const r=document.createElement("div");r.className="pill zone-pill",r.innerHTML='<span class="brand">An Duyên</span><span class="sep"></span><span class="zone"></span><span class="count"></span>',t.appendChild(r),this.zoneEl=r.querySelector(".zone"),this.countEl=r.querySelector(".count");const o=document.createElement("div");o.className="top-right";const a=document.createElement("button");a.className="icon-btn",a.setAttribute("aria-label","Bật âm thanh"),a.innerHTML=mi.mute,this.soundBtn=a,a.onclick=()=>this.setSound(this.muted),o.appendChild(a),t.appendChild(o),this.topRight=o,this.fadeEl=document.createElement("div"),this.fadeEl.className="fade",t.appendChild(this.fadeEl),this.toastEl=document.createElement("div"),this.toastEl.className="toast",t.appendChild(this.toastEl),this.actionBar=document.createElement("div"),this.actionBar.className="action-bar",this.actionBar.style.display="none",t.appendChild(this.actionBar),this.banner=document.createElement("div"),this.banner.className="banner",t.appendChild(this.banner),this.chatBar=document.createElement("div"),this.chatBar.className="chat-bar";const c=document.createElement("button");c.className="chat-icon",c.setAttribute("aria-label","Xem lại tin nhắn"),c.innerHTML=mi.log,this.chatInput=document.createElement("input"),this.chatInput.maxLength=80,this.chatInput.placeholder="Nói gì đó…",this.chatInput.enterKeyHint="send";const l=document.createElement("button");l.className="chat-icon send",l.setAttribute("aria-label","Gửi"),l.innerHTML=mi.send;const h=()=>{const f=this.chatInput.value.trim();f&&this.onSend(f),this.chatInput.value="",this.chatBar.classList.remove("typing")};this.chatInput.addEventListener("input",()=>this.chatBar.classList.toggle("typing",this.chatInput.value.trim()!=="")),l.onclick=h,this.chatInput.addEventListener("keydown",f=>{f.stopPropagation(),f.key==="Enter"&&h(),f.key==="Escape"&&this.chatInput.blur()});const u=document.createElement("div");u.className="emotes";for(const[f,m]of[["chap","Chắp tay"],["vay","Vẫy tay"],["cuoi","Cười"],["tim","Thả tim"]]){const v=document.createElement("button");v.className="chat-icon",v.dataset.emote=f,v.setAttribute("aria-label",m),v.title=m,v.innerHTML=Fa[f],v.onclick=()=>{u.classList.remove("open"),us(),this.onEmote(f)},u.appendChild(v)}const d=document.createElement("button");d.className="chat-icon emote-toggle",d.setAttribute("aria-label","Biểu cảm"),d.innerHTML=Fa.cuoi,d.onclick=()=>u.classList.toggle("open"),this.chatBar.append(c,this.chatInput,l,d,u),t.appendChild(this.chatBar),this.logEl=document.createElement("div"),this.logEl.className="chat-log",t.appendChild(this.logEl),c.onclick=()=>this.logEl.classList.toggle("open"),this.card=document.createElement("div"),this.card.className="peer-card",t.appendChild(this.card),this.tagMe=document.createElement("div"),this.tagMe.className="name-tag me",this.tagMe.textContent=e,t.appendChild(this.tagMe)}zoneEl;hintEl=null;toastEl;toastTimer=0;actionBar;tagMe;muted=!0;fadeEl;banner;actionsKey="";sitting=!1;zoneActions=[];onAction=()=>{};countEl;chatBar;chatInput;logEl;card;chatMode=null;onSend=()=>{};onEmote=()=>{};topRight;addDonate(t){const e=document.createElement("button");e.className="icon-btn",e.setAttribute("aria-label","Góp gạo"),e.title="Góp gạo",e.innerHTML=mi.gao,e.onclick=t,this.topRight.prepend(e)}addSettings(t){const e=document.createElement("button");e.className="icon-btn",e.setAttribute("aria-label","Cài đặt"),e.title="Cài đặt",e.innerHTML=mi.gear,e.onclick=t,this.topRight.appendChild(e)}setSound(t){this.muted=!t,this.soundBtn.innerHTML=this.muted?mi.mute:mi.sound,this.soundBtn.setAttribute("aria-label",this.muted?"Bật âm thanh":"Tắt âm thanh"),this.onSound(t)}setName(t){this.tagMe.textContent=t}soundBtn;fade(t){this.fadeEl.classList.add("on"),setTimeout(()=>{t(),setTimeout(()=>this.fadeEl.classList.remove("on"),120)},420)}setCount(t){this.countEl.textContent=t>0?` · ${t} người`:""}setChatMode(t){t!==this.chatMode&&(this.chatMode=t,this.chatBar.classList.toggle("quiet",t==="quiet"),t==="quiet"&&(this.chatInput.blur(),this.logEl.classList.remove("open")),t==="chat"&&!this.seen("chat")&&(this.toast("Khu trò chuyện dành cho người từ 18 tuổi · nói chuyện lịch sự nhé",6e3),this.mark("chat")))}addLog(t,e,n=!1){const s=document.createElement("div"),r=document.createElement("b");for(r.textContent=t+": ",s.append(r,document.createTextNode(e)),n&&s.classList.add("warn"),this.logEl.appendChild(s);this.logEl.children.length>30;)this.logEl.firstChild.remove();this.logEl.scrollTop=this.logEl.scrollHeight}showCard(t,e,n){this.card.innerHTML="";const s=document.createElement("div");s.className="peer-name",s.textContent=t,this.card.appendChild(s);for(const[r,o]of[["greet","Chắp tay chào"],["mute",e?"Bỏ tắt tiếng":"Tắt tiếng"],["report","Báo xấu"]]){const a=document.createElement("button");a.textContent=o,r==="report"&&(a.className="danger"),a.onclick=()=>{this.hideCard(),n(r)},this.card.appendChild(a)}this.card.classList.add("open")}hideCard(){this.card.classList.remove("open")}seen(t){try{return localStorage.getItem("anduyen.seen."+t)==="1"}catch{return!1}}mark(t){try{localStorage.setItem("anduyen.seen."+t,"1")}catch{}}setZone(t){this.zoneEl.textContent!==t&&(this.zoneEl.textContent=t)}showHint(t){this.hintEl=document.createElement("div"),this.hintEl.className="hint",this.hintEl.textContent=t,this.zoneEl.closest("#hud").appendChild(this.hintEl)}hideHint(){const t=this.hintEl;t&&(this.hintEl=null,t.style.opacity="0",setTimeout(()=>t.remove(),900))}toast(t,e=2600){this.toastEl.textContent=t,this.toastEl.classList.add("show"),clearTimeout(this.toastTimer),this.toastTimer=window.setTimeout(()=>this.toastEl.classList.remove("show"),e)}setSitting(t){this.sitting=t,t&&this.hideHint(),this.renderActions()}setActions(t){this.zoneActions=t,this.renderActions()}renderActions(){const t=this.zoneActions.map(e=>e.id).join()+(this.sitting?"+s":"");if(t!==this.actionsKey){this.actionsKey=t,this.actionBar.innerHTML="";for(const e of this.zoneActions){const n=document.createElement("button");n.innerHTML=`${mi[e.id]}<span>${e.label}</span>`,n.onclick=()=>{us(),this.onAction(e.id)},this.actionBar.appendChild(n)}if(this.sitting){const e=document.createElement("button");e.innerHTML=`${mi.stand}<span>Đứng dậy</span>`,e.onclick=()=>this.onStand(),this.actionBar.appendChild(e)}this.actionBar.style.display=this.actionBar.children.length?"flex":"none"}}setBanner(t){if(t!==(this.banner.dataset.text??null)){if(t===null){delete this.banner.dataset.text,this.banner.classList.remove("show");return}this.banner.dataset.text=t,this.banner.textContent=t,this.banner.classList.add("show")}}placeTag(t,e,n){this.tagMe.style.display=n?"block":"none",this.tagMe.style.left=`${t}px`,this.tagMe.style.top=`${e}px`}}const Hh={on:!0};function us(i=8){Hh.on&&(navigator.userActivation?.hasBeenActive??!0)&&navigator.vibrate?.(i)}const pt={spawn:new w(0,.3,39.5),gateZ:100,avenue:{z0:58,z1:100,half:3.2},yard:{x0:-24,x1:24,z0:15,z1:58},corridorX:26.5,corridorGap:{z0:30,z1:37},corridorStart:17,terrace:{x0:-30,x1:30,z0:-46,z1:15,y:1.8,stairHalf:6,stairLen:6},hall:{x0:-21,x1:21,z0:-31,z1:3,y:2.4,stairHalf:8,stairLen:1.8},upper:{x0:-14,x1:14,z0:-74,z1:-46,y:4.6,stairHalf:3,stairLen:6},lake:{x:50,z:12,rx:15,rz:21,water:-.3},halfMoon:{x:-22,z:82,r:11},isle:{x:50,z:12,half:2.2,floor:1},bridge:{x0:33.6,x1:47.8,z:12,half:1.1},frontLake:{x:0,z:137,rx:44,rz:17},causeway:{half:4,z0:117,z1:157,y:.3},well:{x:-44,z:-32,r:8.5},mound:{x:46,z:-52,r:15,h:6},bounds:{x0:-58,x1:72,z0:-82,z1:157}},Vh=[];function Le(i,t,e,n){Vh.push({kind:"box",x0:i-e/2,x1:i+e/2,z0:t-n/2,z1:t+n/2})}function Un(i,t,e){Vh.push({kind:"circle",x:i,z:t,r:e})}const Np=[];function yo(i,t,e,n,s){Np.push({x0:i-e/2,x1:i+e/2,z0:t-n/2,z1:t+n/2,y:s})}const Dp=[];function Up(i,t,e,n,s,r){Dp.push({x0:i-t,x1:i+t,zLow:e,zHigh:n,yLow:s,yHigh:r})}const ti=[],bn=[],ar=[];function Gc(i,t,e,n,s,r){const o=(i-e)/s,a=(t-n)/r;return o*o+a*a<1}function kp(i,t){const e=pt.bridge;return i>=e.x0&&i<=e.x1+.3&&Math.abs(t-e.z)<=e.half}function Op(i,t){const e=pt.isle;return Math.abs(i-e.x)<=e.half&&Math.abs(t-e.z)<=e.half}function Fp(i,t){const e=pt.causeway;return Math.abs(i)<=e.half&&t>=e.z0&&t<=e.z1}function Ea(i){return Math.sin(i*Math.PI*.5)*pt.isle.floor+Math.sin(i*Math.PI)*.45}function Gh(i,t){let e=0;for(const r of Np)i>r.x0&&i<r.x1&&t>r.z0&&t<r.z1&&(e=Math.max(e,r.y));for(const r of Dp){const o=Math.min(r.zLow,r.zHigh),a=Math.max(r.zLow,r.zHigh);if(i>r.x0&&i<r.x1&&t>=o&&t<=a){const c=(t-r.zLow)/(r.zHigh-r.zLow);e=Math.max(e,r.yLow+(r.yHigh-r.yLow)*c)}}const n=pt.mound,s=Math.hypot(i-n.x,t-n.z)/n.r;if(s<1&&(e=Math.max(e,n.h*(1-s*s))),Fp(i,t)&&(e=Math.max(e,pt.causeway.y)),Op(i,t))e=Math.max(e,pt.isle.floor);else if(kp(i,t)){const r=pt.bridge;e=Math.max(e,Ea(Math.min(1,Math.max(0,(i-r.x0)/(r.x1-r.x0)))))}return e}function Qb(i,t){const e=pt.lake;if(Gc(i,t,e.x,e.z,e.rx+.3,e.rz+.3)&&!kp(i,t)&&!Op(i,t))return!0;const n=pt.frontLake;if(Gc(i,t,n.x,n.z,n.rx+.3,n.rz+.3)&&!Fp(i,t))return!0;const s=pt.well;if(Math.hypot(i-s.x,t-s.z)<s.r+.3)return!0;const r=pt.halfMoon;return!!(i<r.x&&Gc(i,t,r.x,r.z,r.r*.75+.3,r.r+.3))}function t1(i,t,e,n=.35){const s=new w(t.x-i.x,0,t.z-i.z),r=s.length();if(r<1e-4)return i.clone();s.multiplyScalar(Math.min(e,r)/r);const o=i.clone().add(s);for(const c of Vh)if(c.kind==="box"){if(o.x<c.x0-n||o.x>c.x1+n||o.z<c.z0-n||o.z>c.z1+n)continue;const l=Math.max(c.x0,Math.min(o.x,c.x1)),h=Math.max(c.z0,Math.min(o.z,c.z1)),u=o.x-l,d=o.z-h,f=u*u+d*d;if(f<n*n)if(f>1e-8){const m=Math.sqrt(f);o.x=l+u/m*n,o.z=h+d/m*n}else{const m=[[o.x-c.x0+n,-1,0],[c.x1-o.x+n,1,0],[o.z-c.z0+n,0,-1],[c.z1-o.z+n,0,1]].sort((v,g)=>v[0]-g[0]);o.x+=m[0][1]*m[0][0],o.z+=m[0][2]*m[0][0]}}else{const l=o.x-c.x,h=o.z-c.z,u=Math.hypot(l,h),d=c.r+n;u<d&&u>1e-6&&(o.x=c.x+l/u*d,o.z=c.z+h/u*d)}if(Qb(o.x,o.z))return i.clone();const a=pt.bounds;return o.x=Math.max(a.x0,Math.min(a.x1,o.x)),o.z=Math.max(a.z0,Math.min(a.z1,o.z)),o}function Ka(i,t){const e=pt.hall,n=pt.upper,s=pt.terrace;return i>e.x0&&i<e.x1&&t>e.z0&&t<e.z1?"Chánh điện":t<s.z0&&Math.abs(i)<n.x1+4?"Bảo tháp":Math.hypot(i-pt.well.x,t-pt.well.z)<17?"Giếng Ngọc":Math.hypot(i-pt.mound.x,t-pt.mound.z)<pt.mound.r+2?"Tượng Di Lặc":i>pt.corridorX+2.5?"Hồ sen · Cầu Duyên":i<-26.5-2.5?"Vườn thiền":Math.abs(i)>pt.corridorX-2.5&&t>10&&t<58?"Hành lang La Hán":t>95?"Cổng tam quan":t>58?"Đường thần đạo":"Sân chùa"}const Bp=[{name:"Cổng tam quan",pos:new w(0,.3,140),yaw:0},{name:"Sân chùa",pos:new w(0,0,40),yaw:0},{name:"Chánh điện",pos:new w(0,2.4,-3),yaw:0},{name:"Bảo tháp",pos:new w(0,4.6,-50),yaw:0},{name:"Hồ sen · Cầu Duyên",pos:new w(32,0,12),yaw:-Math.PI/2},{name:"Vườn thiền",pos:new w(-36,0,30),yaw:Math.PI/2},{name:"Giếng Ngọc",pos:new w(-44,0,-16),yaw:0},{name:"Tượng Di Lặc",pos:new w(46,0,-32),yaw:0}];let Gd=7;const Ot=()=>((Gd=Gd*16807%2147483647)-1)/2147483646;function Gr(i,t,e,n,s=!1){const r=new so,o=64;for(let a=0;a<=o;a++){const c=s?Math.PI/2+a/o*Math.PI:a/o*Math.PI*2,l=i+Math.cos(c)*e,h=-(t+Math.sin(c)*n);a===0?r.moveTo(l,h):r.lineTo(l,h)}return s&&r.lineTo(i,-(t+n)),r}function e1(){const i=new Mt,t=700,e=new pr;e.moveTo(-t/2,-t/2),e.lineTo(t/2,-t/2),e.lineTo(t/2,t/2),e.lineTo(-t/2,t/2),e.lineTo(-t/2,-t/2);const n=pt.lake;e.holes.push(Gr(n.x,n.z,n.rx,n.rz));const s=pt.halfMoon,r=s.r*.75;e.holes.push(Gr(s.x,s.z,r,s.r,!0));const o=pt.frontLake,a=pt.well;e.holes.push(Gr(o.x,o.z,o.rx,o.rz)),e.holes.push(Gr(a.x,a.z,a.r,a.r));const c=new ir(e,64);c.rotateX(-Math.PI/2);const l=new Ft({map:Ge(Oh(),.22,.22),roughness:1}),h=new tt(c,l);h.receiveShadow=!0,h.name="ground",i.add(h),bn.push(h),i.add(ra(n.x,n.z,n.rx,n.rz,!1)),i.add(ra(s.x,s.z,r,s.r,!0)),i.add(Wc(n.x,n.z,n.rx,n.rz,!1)),i.add(Wc(s.x,s.z,r,s.r,!0)),i.add(ra(o.x,o.z,o.rx,o.rz,!1),Wc(o.x,o.z,o.rx,o.rz,!1)),i.add(ra(a.x,a.z,a.r,a.r,!1));const u=(p,y,_,x,L,E=.02)=>{const C=new tt(new qe(p,y),_);return C.rotation.x=-Math.PI/2,C.position.set(x,E,L),C.receiveShadow=!0,i.add(C),bn.push(C),C},d=pt.yard;u(d.x1-d.x0,d.z1-d.z0+6,new Ft({map:Ge(co(),16,16),roughness:.9}),0,(d.z0+d.z1)/2+3),u(40,16,new Ft({map:Ge(co(),13,5),roughness:.9}),0,109);const f=pt.avenue;u(f.half*2,f.z1-f.z0,new Ft({map:Ge(Rp(),2,14),roughness:.95}),0,(f.z0+f.z1)/2,.025);const m=new Ft({map:Ge(Lp(),8,1),roughness:1}),v=pt.corridorGap;u(14,v.z1-v.z0-1,m,30,(v.z0+v.z1)/2,.015),u(14,v.z1-v.z0-1,m,-30,(v.z0+v.z1)/2,.015);const g=new tt(new xo(1,1.1,96),m);return g.rotation.x=-Math.PI/2,g.scale.set(n.rx+2,n.rz+2,1),g.position.set(n.x,.015,n.z),g.receiveShadow=!0,i.add(g),i}function ra(i,t,e,n,s){const r=new Mt,o=new pr,a=Gr(0,0,e,n,s);o.setFromPoints(a.getPoints());const c=new ir(o,48);c.rotateX(-Math.PI/2);const l=new tt(c,new Ft({color:"#1f2a1e",roughness:1}));l.position.y=pt.lake.water-.5;const h=new te(1,1,.55,64,1,!0,s?Math.PI:0,s?Math.PI:Math.PI*2),u=new tt(h,new Ft({color:"#3d3524",roughness:1,side:tn}));u.scale.set(e,1,n),u.position.y=-.27;const d=new ir(o,48);d.rotateX(-Math.PI/2);const f=new tt(d,n1());return f.position.y=pt.lake.water,f.receiveShadow=!0,r.add(l,u,f),r.position.set(i,0,t),r}let as=null;function n1(){return as||(as=new Ft({color:"#1d3b31",roughness:.1,metalness:.15,transparent:!0,opacity:.92}),as.onBeforeCompile=i=>{i.uniforms.uTime={value:0},as.userData.shader=i,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWorldPos;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;
varying vec3 vWorldPos;`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        vec2 p = vWorldPos.xz;
        float w1 = sin(p.x * 1.7 + uTime * 1.1) * cos(p.y * 1.3 - uTime * 0.8);
        float w2 = sin(p.x * 3.1 - p.y * 2.3 + uTime * 1.7);
        normal = normalize(normal + vec3(w1 * 0.05 + w2 * 0.025, 0.0, w2 * 0.05 - w1 * 0.02));`)},as)}function i1(i){const t=as?.userData.shader;t&&(t.uniforms.uTime.value=i)}function Wc(i,t,e,n,s){const r=s?26:70,o=new Ih(1,0),a=new Ei(o,O.darkStone(),r),c=new Bt;for(let l=0;l<r;l++){const h=s?Math.PI/2+l/(r-1)*Math.PI:l/r*Math.PI*2,u=1.02+Ot()*.04,d=.22+Ot()*.18;c.compose(new w(i+Math.cos(h)*e*u,-.05,t+Math.sin(h)*n*u),new nn().setFromEuler(new gn(Ot()*3,Ot()*3,Ot()*3)),new w(d*1.4,d*.7,d)),a.setMatrixAt(l,c)}return a.castShadow=!0,a.receiveShadow=!0,a}function $c(i,t,e,n,s,r){const o=new Mt,a=new pr;a.moveTo(0,0),a.absarc(0,0,1,.25,Math.PI*2-.05,!1),a.lineTo(0,0);const c=new ir(a,20);c.rotateX(-Math.PI/2);const l=new Ei(c,O.lotusPad(),s),h=new Bt,u=[];let d=0;for(let v=0;d<s&&v<s*10;v++){const g=Ot()*Math.PI*2,p=Math.sqrt(Ot())*.86,y=i+Math.cos(g)*e*p,_=t+Math.sin(g)*n*p;if(r?.(y,_))continue;const x=.35+Ot()*.4;h.compose(new w(y,pt.lake.water+.02,_),new nn().setFromAxisAngle(new w(0,1,0),Ot()*6.3),new w(x,1,x)),l.setMatrixAt(d++,h),Ot()<.22&&u.push(new w(y+.1,pt.lake.water,_+.1))}l.count=d,l.receiveShadow=!0,o.add(l);const f=new Ut(1,6,3,0,Math.PI*2,0,Math.PI/2),m=new Ft({color:"#e8c94a"});for(const v of u){const g=new Mt;for(let _=0;_<2;_++){const x=_?6:8;for(let L=0;L<x;L++){const E=L/x*Math.PI*2+_*.3,C=new tt(f,O.lotusPink());C.scale.set(.07,.2-_*.03,.05),C.position.set(Math.cos(E)*(.07-_*.03),.06,Math.sin(E)*(.07-_*.03)),C.rotation.set(0,-E,0),C.rotateZ(.5-_*.25),g.add(C)}}const p=new tt(new te(.04,.03,.04,6),m);p.position.y=.1,g.add(p),g.position.copy(v).setY(pt.lake.water+.18);const y=new tt(new te(.012,.012,.2),O.lotusPad());y.position.y=-.1,g.add(y),o.add(g)}return o}function cs(i,t,e=1){const n=new Mt,s=vr("banyan");s?n.add(s):s1(n);const r=new tt(new Ut(5.6,16,8),new Oe({visible:!1,side:De}));return r.scale.y=.42,r.position.y=6.2,n.add(r),ti.push(r),n.scale.setScalar(e),n.position.set(i,0,t),Un(i,t,1.3*e),n}function s1(i){const t=new tt(new te(.7,1.1,4.2,14),O.bark());t.position.y=2.1,t.castShadow=!0,i.add(t);for(let s=0;s<6;s++){const r=s/6*Math.PI*2,o=new tt(new Ci(.35,1.6,6),O.bark());o.position.set(Math.cos(r)*.9,.5,Math.sin(r)*.9),o.rotation.set(Math.sin(r)*.6,0,-Math.cos(r)*.6),i.add(o)}for(let s=0;s<5;s++){const r=s/5*Math.PI*2+.4,o=new xs([new w(0,3.6,0),new w(Math.cos(r)*1.8,4.6,Math.sin(r)*1.8),new w(Math.cos(r)*3.6,5.2,Math.sin(r)*3.6)]),a=new tt(new Ki(o,10,.32,8),O.bark());a.castShadow=!0,i.add(a)}const e=new _s(1,1);for(let s=0;s<22;s++){const r=Ot()*Math.PI*2,o=1+Ot()*4.2,a=new tt(e,Ot()>.45?O.leaf():O.leafLight()),c=1.6+Ot()*1.4;a.scale.set(c*1.25,c*.75,c*1.25),a.position.set(Math.cos(r)*o,5.6+Ot()*2.2-o*.15,Math.sin(r)*o),a.castShadow=!0,a.receiveShadow=!0,i.add(a)}const n=new te(.02,.03,1,4);for(let s=0;s<40;s++){const r=Ot()*Math.PI*2,o=1.5+Ot()*3.5,a=1.5+Ot()*2.5,c=new tt(n,O.bark());c.scale.y=a,c.position.set(Math.cos(r)*o,5-a/2,Math.sin(r)*o),i.add(c)}}const zp={value:0},Wd=new Map;function r1(i){let t=Wd.get(i);return t||(t=i.clone(),t.onBeforeCompile=e=>{e.uniforms.uTime=zp,e.vertexShader=`uniform float uTime;
`+e.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
        float h = max(transformed.y, 0.0);
        vec4 wp = modelMatrix * vec4(transformed, 1.0);
        float ph = wp.x * 0.7 + wp.z * 0.9;
        transformed.x += sin(uTime * 0.8 + ph) * 0.03 * h;
        transformed.z += cos(uTime * 0.6 + ph) * 0.02 * h;`)},Wd.set(i,t)),t}function $d(i,t,e=14){const n=new Mt,s=new te(.05,.07,1,6).translate(0,.5,0),r=new _s(.7,0),o=new Map,a=(c,l,h)=>{const u=o.get(l)??[];let d=c.clone().applyMatrix4(h);d.index&&(d=d.toNonIndexed()),d.deleteAttribute("uv"),u.push(d),o.set(l,u)};for(let c=0;c<e;c++){const l=5+Ot()*4,h=new Bt().compose(new w((Ot()-.5)*2.2,0,(Ot()-.5)*2.2),new nn().setFromEuler(new gn((Ot()-.5)*.18,Ot()*6,(Ot()-.5)*.18)),new w(1,1,1));a(s,O.bamboo(),h.clone().multiply(new Bt().makeScale(1,l,1)));for(let u=0;u<4;u++){const d=new Bt().compose(new w((Ot()-.5)*1.2,l*(.62+u*.11),(Ot()-.5)*1.2),new nn,new w(1.1,.35,.8));a(r,Ot()>.5?O.leafLight():O.bamboo(),h.clone().multiply(d))}}for(const[c,l]of o){const h=new tt(Ya(l),r1(c));h.castShadow=!0,n.add(h)}return n.position.set(i,0,t),n.userData.bamboo=!0,Un(i,t,1.3),n}function qd(i,t,e=.8){const n=new tt(new _s(e,1),Ot()>.5?O.leaf():O.leafLight());return n.scale.y=.7,n.position.set(i,e*.55,t),n.castShadow=!0,n.receiveShadow=!0,n}let Xd=null;function oa(i,t,e=1){const n=new Mt;Xd??=new Ft({color:"#fff6e6",emissive:"#fff0d0",emissiveIntensity:.1,roughness:.6});const s=new Ft({color:"#8a8478",roughness:.9}),r=(o,a,c,l)=>{const h=o.clone().addScaledVector(a,c),u=o.clone().lerp(h,.5).add(new w((Ot()-.5)*.4,.2,(Ot()-.5)*.4)),d=new tt(new Ki(new xs([o,u,h]),6,.06+l*.06,6),s);if(d.castShadow=!0,n.add(d),l===0){const f=new tt(new _s(.75,0),Ot()>.5?O.leaf():O.leafLight());f.scale.set(1.2,.5,1.2),f.position.copy(h),f.castShadow=!0,n.add(f);for(let m=0;m<5;m++){const v=new tt(new Ut(.06,6,5),Xd);v.position.copy(h).add(new w((Ot()-.5)*1.1,.3+Ot()*.2,(Ot()-.5)*1.1)),n.add(v)}return}for(let f=0;f<2+Math.round(Ot());f++){const m=Ot()*Math.PI*2;r(h,new w(Math.cos(m)*.8,.9,Math.sin(m)*.8).normalize(),c*.7,l-1)}};return r(new w(0,0,0),new w(.1,1,0).normalize(),2.2,2),n.scale.setScalar(e),n.position.set(i,0,t),Un(i,t,.4*e),n}function qc(i,t,e=1,n=0){const s=new Mt,r=new tt(new te(.15,.3,4,7),O.bark());r.position.y=2,r.castShadow=!0,s.add(r);const o=new Ft({color:"#2f4a2c",roughness:.95,flatShading:!0});for(let a=0;a<4;a++){const c=new tt(new Ci(1.9-a*.38,1.6,7),o);c.position.y=2.6+a*1.05,c.rotation.y=Ot()*3,c.castShadow=!0,s.add(c)}return s.scale.setScalar(e),s.position.set(i,n,t),n===0&&Un(i,t,.45*e),s}function o1(i,t){const e=new te(t*.25,t,i,14,10),n=e.attributes.position,s=new w,r=[],o=new kt("#5a6656"),a=new kt("#3e5e3a");for(let c=0;c<n.count;c++){s.fromBufferAttribute(n,c);const l=(s.y+i/2)/i,h=1+Math.sin(s.y*.12+Math.atan2(s.z,s.x)*3)*.12+(Ot()-.5)*.12,u=l>.75?1-(l-.75)*1.4:1;s.x*=h*u,s.z*=h*u,n.setXYZ(c,s.x,s.y,s.z);const d=o.clone().lerp(a,Math.min(1,l*1.4));r.push(d.r,d.g,d.b)}return e.setAttribute("color",new jt(r,3)),e.computeVertexNormals(),e}function a1(){const i=new Mt,t=420,e=new te(.2,.3,1,6),n=new _s(1,0),s=new Ei(e,O.bark(),t),r=new Ei(n,O.leaf(),t),o=new Bt,a=pt.bounds;let c=0;for(;c<t;){const h=-150+Ot()*300,u=-170+Ot()*330,d=h>a.x0-5&&h<a.x1+5&&u>a.z0-5&&u<a.z1+4,f=pt.frontLake,m=Math.abs(h)<14&&u>100||Math.abs(h-f.x)<f.rx+8&&Math.abs(u-f.z)<f.rz+8;if(d||m)continue;const v=5+Ot()*8;o.compose(new w(h,v/2,u),new nn,new w(1,v,1)),s.setMatrixAt(c,o);const g=2.5+Ot()*3;o.compose(new w(h,v+g*.5,u),new nn().setFromEuler(new gn(0,Ot()*6,0)),new w(g,g*1.1,g)),r.setMatrixAt(c,o),c++}r.castShadow=!0,i.add(s,r);const l=new Ft({vertexColors:!0,roughness:1,flatShading:!0});for(let h=0;h<34;h++){const u=h/34*Math.PI*2+Ot()*.15,d=Math.sin(u)<0,f=(d?190:260)+Ot()*110,m=(d?70:45)+Ot()*70,v=new tt(o1(m,20+Ot()*18),l);v.position.set(Math.cos(u)*f,m/2-6,Math.sin(u)*f-20),v.rotation.y=Ot()*3,i.add(v)}return i}const Wh=[];function c1(i){zp.value=i;for(const t of Wh)t.rotation.z=Math.sin(i*.8+t.userData.sway)*.03,t.rotation.x=Math.cos(i*.6+t.userData.sway)*.02}function l1(i=160){const t=new ye,e=new Float32Array(i*3),n=pt.lake;for(let l=0;l<i;l++){const h=l%3;e[l*3]=h===0?n.x+(Ot()-.5)*n.rx*2.6:h===1?-56+Ot()*26:(Ot()-.5)*30,e[l*3+1]=.4+Ot()*2.4,e[l*3+2]=h===0?n.z+(Ot()-.5)*n.rz*2.4:h===1?-10+Ot()*80:60+Ot()*40}t.setAttribute("position",new Ue(e.slice(),3));const s=document.createElement("canvas");s.width=s.height=64;const r=s.getContext("2d"),o=r.createRadialGradient(32,32,0,32,32,32);o.addColorStop(0,"rgba(255,255,255,1)"),o.addColorStop(.25,"rgba(255,240,170,0.8)"),o.addColorStop(1,"rgba(255,220,120,0)"),r.fillStyle=o,r.fillRect(0,0,64,64);const a=new go({map:new jn(s),color:"#ffe68a",size:.32,transparent:!0,opacity:0,depthWrite:!1,blending:Ra}),c=new $a(t,a);return c.userData.base=e,c}function h1(i,t,e){const n=i.material;if(n.opacity=e*(.75+Math.sin(t*3)*.1),i.visible=e>.02,!i.visible)return;const s=i.userData.base,r=i.geometry.attributes.position;for(let o=0;o<r.count;o++)r.setXYZ(o,s[o*3]+Math.sin(t*.3+o)*.8,s[o*3+1]+Math.sin(t*.7+o*2.1)*.3,s[o*3+2]+Math.cos(t*.25+o*1.3)*.8);r.needsUpdate=!0}const u1=["Gió","Trăng","Mây","Sen","Suối","Sương","Nắng","Lá","Chim","Hoa","Mưa","Sao","Trúc","Khói"],d1=["Nam","Non","Chiều","Hồng","Nhỏ","Sớm","Mai","Thu","Xuân","Biếc","Lành","Hiền","Ngàn","Khuya","Xanh","Mới"],Hp="anduyen.profile",th=i=>i[Math.floor(Math.random()*i.length)];function Vp(){return`${th(u1)} ${th(d1)}`}function f1(){try{const t=localStorage.getItem(Hp);if(t){const e=JSON.parse(t);if(e.name&&e.kind&&e.robe)return e}}catch{}const i={name:Vp(),kind:Math.random()<.5?"tieu":"ni",robe:th(["nau","lam","xam"])};return lo(i),i}function lo(i){try{localStorage.setItem(Hp,JSON.stringify(i))}catch{}}function p1(){try{return localStorage.getItem("anduyen.hint")==="1"}catch{return!1}}function m1(){try{localStorage.setItem("anduyen.hint","1")}catch{}}const aa=[{h:0,zenith:"#0a1430",horizon:"#26335a",sun:"#9fb4ff",sunI:.6,hemi:.55,night:1},{h:4.6,zenith:"#0d1838",horizon:"#2c3a62",sun:"#9fb4ff",sunI:.6,hemi:.55,night:1},{h:5.6,zenith:"#3a4c80",horizon:"#f0a07a",sun:"#ffb38a",sunI:.9,hemi:.5,night:.4},{h:7,zenith:"#5d93d0",horizon:"#f6d8b8",sun:"#ffe2c0",sunI:2.2,hemi:.8,night:0},{h:12,zenith:"#4d8bd6",horizon:"#d6e6ef",sun:"#fff4e2",sunI:2.8,hemi:.95,night:0},{h:16,zenith:"#5a8ccc",horizon:"#f2dcb4",sun:"#ffe0b0",sunI:2.4,hemi:.85,night:0},{h:17.6,zenith:"#3c4c80",horizon:"#f28a4c",sun:"#ff9a5a",sunI:1.5,hemi:.6,night:.15},{h:18.6,zenith:"#1c2450",horizon:"#7a4a6c",sun:"#c98aa8",sunI:.5,hemi:.42,night:.7},{h:19.8,zenith:"#0b1534",horizon:"#2a3560",sun:"#9fb4ff",sunI:.6,hemi:.55,night:1},{h:24,zenith:"#0a1430",horizon:"#26335a",sun:"#9fb4ff",sunI:.6,hemi:.55,night:1}];function Gp(){const i=new URLSearchParams(location.search).get("gio");if(i!==null&&!Number.isNaN(Number(i)))return(Number(i)%24+24)%24;const t=new Date;return(t.getUTCHours()+7+t.getUTCMinutes()/60+t.getUTCSeconds()/3600)%24}function g1(i){let t=0;for(;t<aa.length-2&&aa[t+1].h<=i;)t++;const e=aa[t],n=aa[t+1],s=(i-e.h)/(n.h-e.h),r=(a,c)=>new kt(a).lerp(new kt(c),s),o=(a,c)=>a+(c-a)*s;return{zenith:r(e.zenith,n.zenith),horizon:r(e.horizon,n.horizon),sun:r(e.sun,n.sun),sunI:o(e.sunI,n.sunI),hemi:o(e.hemi,n.hemi),night:o(e.night,n.night)}}class v1{constructor(t,e,n){this.scene=t;for(let h=0;h<(n?2:3);h++){const u=new Tp("#ffb062",0,9,1.6);t.add(u),this.pool.push(u)}const s=new Ti({uniforms:this.uniforms,side:tn,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
        uniform vec3 zenith; uniform vec3 horizon; uniform vec3 sunDir; uniform vec3 sunColor; uniform float sunVis;
        varying vec3 vDir;
        void main(){
          float y = max(vDir.y, -0.05);
          vec3 col = mix(horizon, zenith, pow(smoothstep(-0.05, 0.6, y), 0.7));
          float d = max(dot(normalize(vDir), sunDir), 0.0);
          col += sunColor * (pow(d, 600.0) * 3.0 + pow(d, 12.0) * 0.25) * sunVis;
          gl_FragColor = vec4(col, 1.0);
          #include <colorspace_fragment>
        }`});this.dome=new tt(new Ut(820,32,16),s),this.dome.renderOrder=-1,t.add(this.dome),this.envDome=new tt(new Ut(10,32,16),s),this.envScene.add(this.envDome),this.pmrem=new Wl(e);const r=600,o=new Float32Array(r*3);for(let h=0;h<r;h++){const u=Math.random()*2-1,d=Math.random()*Math.PI*2,f=Math.abs(u)*.95+.05,m=Math.sqrt(1-f*f);o.set([Math.cos(d)*m*780,f*780,Math.sin(d)*m*780],h*3)}const a=new ye;a.setAttribute("position",new Ue(o,3)),this.stars=new $a(a,new go({color:"#ffffff",size:1.4,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1})),t.add(this.stars),this.moon=new tt(new Ut(16,24,16),new Oe({color:"#fff4d6",fog:!1,transparent:!0})),t.add(this.moon),this.sun.castShadow=!0;const c=n?1024:2048;this.sun.shadow.mapSize.set(c,c);const l=this.sun.shadow.camera;l.left=l.bottom=-28,l.right=l.top=28,l.near=1,l.far=140,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.04,t.add(this.sun,this.sun.target,this.hemi),t.fog=new Th("#cfdde6",90,520)}dome;sun=new Oa("#ffffff",2);hemi=new wp("#cfe3ff","#5a4a30",.8);stars;moon;night=0;uniforms={zenith:{value:new kt},horizon:{value:new kt},sunDir:{value:new w(0,1,0)},sunColor:{value:new kt},sunVis:{value:1}};envScene=new Eh;envDome;pmrem;envTarget=null;lastEnvHour=-99;spots=[];pool=[];addLanternLight(t,e=9){this.spots.push({pos:t.clone(),range:e,intensity:14,night:!0})}addWarmLight(t,e,n){this.spots.push({pos:t.clone(),range:n,intensity:e,night:!1})}placeLights(t,e){const n=this.spots.map(s=>({s,i:s.night?s.intensity*e:s.intensity,d:s.pos.distanceToSquared(t)})).filter(s=>s.i>.01&&s.d<(s.s.range+40)**2).sort((s,r)=>s.d-r.d);this.pool.forEach((s,r)=>{const o=n[r];s.intensity=o?o.i:0,o&&(s.position.copy(o.s.pos),s.distance=o.s.range)})}update(t){const e=Gp(),n=g1(e);this.night=n.night,this.uniforms.zenith.value.copy(n.zenith),this.uniforms.horizon.value.copy(n.horizon);const s=(e-6)/12,r=Math.sin(s*Math.PI)*1.05,o=new w(Math.cos(s*Math.PI),Math.max(r,-.3),-.35).normalize(),a=(e+6)%24/12,c=new w(Math.cos(a*Math.PI),Math.max(Math.sin(a*Math.PI)*.9,.12),-.25).normalize(),l=r>-.05,h=l?o.clone().setY(Math.max(o.y,.18)).normalize():c;this.uniforms.sunDir.value.copy(o),this.uniforms.sunColor.value.copy(n.sun),this.uniforms.sunVis.value=l?1:0,this.sun.color.copy(n.sun),this.sun.intensity=n.sunI,this.sun.position.copy(t).addScaledVector(h,60),this.sun.target.position.copy(t),this.hemi.intensity=n.hemi,this.hemi.color.copy(n.zenith).lerp(new kt("#ffffff"),.5),this.hemi.groundColor.set(n.night>.5?"#1a1a24":"#5a4a30"),this.scene.fog.color.copy(n.horizon).lerp(n.zenith,.25);const u=this.stars.material;u.opacity=Math.max(0,n.night-.3)*1.2,this.moon.position.copy(c).multiplyScalar(620),this.moon.material.opacity=Math.max(0,n.night-.2),this.moon.visible=n.night>.2;for(const d of Gb())d instanceof Ft&&(d.emissiveIntensity=(d.userData.base??=d.emissiveIntensity)*(1+n.night*2.6));return this.placeLights(t,n.night),Math.abs(e-this.lastEnvHour)>.25&&(this.lastEnvHour=e,this.envTarget?.dispose(),this.envTarget=this.pmrem.fromScene(this.envScene,.02),this.scene.environment=this.envTarget.texture,this.scene.environmentIntensity=.35+(1-n.night)*.5),this.dome.position.copy(t).setY(0),n}}const Dr=28,Xc=12;function Vs({h:i,lift:t=.6,sag:e=1.45},n,s){return i*Math.pow(s,e)+t*Math.pow(Math.abs(n),5)*Math.pow(1-s,2)}function x1(i){const{a:t,b:e,r:n,h:s}=i,r=[],o=[],a=[],c=Math.hypot(e,s),l=Math.hypot(t-n,s),h=(m,v)=>Vs(i,m,v),u=(m,v,g,p)=>{const y=r.length/3;for(let _=0;_<=Xc;_++){const x=_/Xc;for(let L=0;L<=Dr;L++){const E=-1+2*L/Dr,C=m(E,x);r.push(C[0],C[1],C[2]),o.push((p==="x"?C[0]:C[2])*.55,(1-x)*v*.55)}}for(let _=0;_<Xc;_++)for(let x=0;x<Dr;x++){const L=y+_*(Dr+1)+x,E=L+1,C=L+(Dr+1),P=C+1;g?a.push(L,C,E,E,C,P):a.push(L,E,C,E,P,C)}},d=(m,v,g)=>m+(v-m)*g;u((m,v)=>[d(t*m,n*m,v),h(m,v),d(e,0,v)],c,!1,"x"),u((m,v)=>[d(t*m,n*m,v),h(m,v),-d(e,0,v)],c,!0,"x"),u((m,v)=>[d(t,n,v),h(m,v),d(e*m,0,v)],l,!0,"z"),u((m,v)=>[-d(t,n,v),h(m,v),d(e*m,0,v)],l,!1,"z");const f=new ye;return f.setAttribute("position",new jt(r,3)),f.setAttribute("uv",new jt(o,2)),f.setIndex(a),f.computeVertexNormals(),f}let jc=null;function _1(){return jc||(jc=new Ft({map:Ge(Ob(),1,1),roughness:.42,metalness:.08,side:De})),jc}function Ur(i,t,e){const n=new xs(i),s=new tt(new Ki(n,Math.max(6,i.length*2),t,5,!1),e);return s.castShadow=!0,s}function mn(i){const{a:t,b:e,r:n,h:s,lift:r=.6,dragons:o,tips:a=!0}=i,c=new Mt,l=new tt(x1(i),_1());l.castShadow=!0,l.receiveShadow=!0,c.add(l),Math.min(t,e)>1.5&&ti.push(l);const h=Math.max(.035,Math.min(t,e)*.06),u=Math.min(t,e)<1,d=(f,m,v)=>f+(m-f)*v;if(n>.05){const f=new tt(new ln(n*2+h*2,h*1.6,h*1.4),O.ridge());if(f.position.y=s+h*.5,f.castShadow=!0,c.add(f),!u)for(const m of[-1,1])c.add(Ur([new w(m*(n-h*2),s+h*.6,0),new w(m*(n+h*.5),s+h*.9,0),new w(m*(n+h*1.6),s+h*2.6,0),new w(m*(n+h*.9),s+h*3.6,0),new w(m*(n+h*.2),s+h*3,0)],h*.55,O.ridge()))}if(!u){for(const p of[-1,1])for(const y of[-1,1]){const _=[];for(let x=0;x<=10;x++){const L=1-x/10;_.push(new w(p*d(t,n,L),Vs(i,1,L)+h*.45,y*d(e,0,L)))}c.add(Ur(_,h*.6,O.ridge()))}const f=[],m=h*.42,v=new te(m,m,m*.6,6).rotateX(Math.PI/2),g=(p,y,_)=>{const x=[];for(let E=0;E<=12;E++){const[C,P,S]=y(-1+2*E/12);x.push(new w(C,P,S))}c.add(Ur(x,h*.32,O.ridge()));const L=Math.min(t,e)>2.5?Math.max(2,Math.round(p*2/(m*7))):0;for(let E=1;E<L;E++){const[C,P,S]=y(-1+2*E/L);f.push(v.clone().rotateY(_).translate(C,P-h*.32,S))}};if(g(t,p=>[t*p,Vs(i,p,0),e],0),g(t,p=>[t*p,Vs(i,p,0),-e],Math.PI),g(e,p=>[t,Vs(i,p,0),e*p],Math.PI/2),g(e,p=>[-t,Vs(i,p,0),e*p],-Math.PI/2),f.length){const p=new tt(Ya(f),O.ridge());c.add(p)}}for(const f of a?[-1,1]:[])for(const m of[-1,1]){const v=new w(t*f,r,e*m),g=new w(f,0,m).normalize(),p=Math.min(t,e)*.18+.15,y=(x,L)=>v.clone().addScaledVector(g,p*x).setY(r+p*L),_=u?[y(-.6,-.3),y(0,.05),y(.55,.55),y(.6,1.05)]:[y(-.6,.02),y(0,.1),y(.6,.3),y(1,.62),y(1.18,.92),y(1.12,1.06)];c.add(Ur(_,h*(u?.45:.5),O.ridge()))}if(o&&n>.5){const f=s+h*1.3,m=new tt(new Ut(h*2.2,20,14),O.gold());m.position.set(0,f+h*2.4,0),c.add(m);const v=new tt(new Ci(h*1.2,h*3.2,12),O.gold());v.position.set(0,f+h*5,0),c.add(v);for(const g of[-1,1]){const p=[];for(let _=0;_<=8;_++){const x=_/8,L=g*(n*.9-x*(n*.9-h*3.2));p.push(new w(L,f+Math.sin(x*Math.PI*2.2)*h*1.1+x*h*2,0))}c.add(Ur(p,h*.55,O.ridgeGreen()));const y=new tt(new Ut(h*.9,12,10),O.ridgeGreen());y.position.copy(p[p.length-1]),y.scale.set(1.3,.9,.9),c.add(y)}}return c}function Ne(i,t,e=0,n=0,s=0){const r=new tt(i,t);return r.position.set(e,n,s),r.castShadow=!0,r}function $h(i,t,e=32){return Ne(new Yn(i.map(([n,s])=>new Z(n,s)),e),t)}function y1(i,t){const e=new Mt;e.add($h([[0,0],[i*.9,0],[i,.12],[i*.8,.3],[i*.85,.42],[0,.42]],t));const n=new Ut(1,12,8);for(const[s,r,o,a]of[[i*.95,.12,.6,16],[i*.82,.34,-.5,14]])for(let c=0;c<a;c++){const l=c/a*Math.PI*2+(r>.2?.2:0),h=Ne(n,t,Math.cos(l)*s,r,Math.sin(l)*s);h.scale.set(i*.13,i*.2,i*.07),h.rotation.y=-l+Math.PI/2,h.rotation.x=o,e.add(h)}return e}function M1(){const i=vr("buddha");if(i)return i;const t=new Mt,e=O.gold(),n=y1(1.05,e);t.add(n);const s=new Mt;s.position.y=.42,t.add(s);const r=Ne(new Ut(1,28,16),e,0,.22,.05);r.scale.set(.95,.26,.62),s.add(r),s.add($h([[0,.2],[.5,.22],[.52,.45],[.47,.8],[.44,1.02],[.3,1.12],[.14,1.16],[0,1.16]],e));const o=Ne(new We(.42,.04,8,28,Math.PI*1.1),e,0,.82,.02);o.rotation.set(.25,0,-.9),s.add(o);for(const m of[-1,1]){const v=new xs([new w(m*.46,1,0),new w(m*.58,.7,.08),new w(m*.45,.42,.32),new w(m*.12,.38,.42)]);s.add(Ne(new Ki(v,20,.11,10),e))}const a=Ne(new Ut(1,16,10),e,0,.42,.4);a.scale.set(.22,.08,.14),s.add(a),s.add(Ne(new te(.12,.14,.18,14),e,0,1.22,0));const c=Ne(new Ut(.3,28,20),e,0,1.5,0);c.scale.set(.92,1.05,.95),s.add(c);const l=new Ut(.035,6,5);for(let m=0;m<70;m++){const v=Math.acos(1-m/70*.9),g=m*2.39996,p=new w(Math.sin(v)*Math.cos(g),Math.cos(v),Math.sin(v)*Math.sin(g));p.z>.55&&p.y<.7||s.add(Ne(l,O.bronze(),p.x*.28,1.5+p.y*.31,p.z*.29))}s.add(Ne(new Ut(.13,16,12),O.bronze(),0,1.86,0));for(const m of[-1,1]){const v=Ne(new Ut(1,10,8),e,m*.28,1.43,0);v.scale.set(.04,.16,.07),s.add(v)}s.add(Ne(new Ut(.018,8,6),O.incense(),0,1.6,.285));for(const m of[-1,1]){const v=Ne(new We(.045,.008,4,12,Math.PI),O.bronze(),m*.1,1.53,.27);v.rotation.z=Math.PI,s.add(v)}const h=new Mt;h.position.set(0,1.92,-.45);const u=Ne(new We(.62,.05,10,48),e);h.add(u);const d=new tt(new Yi(.6,48),new Ft({color:"#ffcf7a",emissive:"#ffb347",emissiveIntensity:.35,roughness:.6}));d.position.z=-.02,h.add(d);const f=Ne(new We(1.1,.045,8,64),e,0,-.75,-.05);h.add(f);for(let m=0;m<18;m++){const v=Math.PI*.12+m/17*Math.PI*.76,g=Ne(new Ci(.06,.24,6),e,Math.cos(v)*1.2,-.75+Math.sin(v)*1.2,-.05);g.rotation.z=v-Math.PI/2,h.add(g)}return t.add(h),t}function qh(i,t,e=!1,n=!0){const s=vr("seated");if(s)return Ql(s,"robe",i),Ql(s,"skin",t),e||s.getObjectByName("beard")?.removeFromParent(),n||s.getObjectByName("hat")?.removeFromParent(),s;const r=new Mt,o=new Ft({color:i,roughness:.6,metalness:.15}),a=new Ft({color:t,roughness:.6}),c=Ne(new ln(.9,.12,.7),O.gold(),0,.06,0);r.add(c);const l=Ne(new Ut(1,20,12),o,0,.25,.05);l.scale.set(.42,.14,.3),r.add(l),r.add($h([[0,.12],[.26,.14],[.28,.4],[.22,.68],[.1,.74],[0,.74]],o,20));const h=Ne(new Ut(.17,18,14),a,0,.9,.02);if(r.add(h),n&&r.add(Ne(new te(.13,.17,.14,16),O.gold(),0,1.04,0)),e){const u=Ne(new Ci(.1,.36,12),O.whiteStone(),0,.68,.15);u.rotation.x=Math.PI,r.add(u);const d=Ne(new ln(.2,.03,.04),O.whiteStone(),0,.95,.16);r.add(d)}return r}function yt(i,t,e=0,n=0,s=0){const r=new tt(i,t);return r.position.set(e,n,s),r.castShadow=!0,r.receiveShadow=!0,r}const _t=(i,t,e,n,s=0,r=0,o=0)=>yt(new ln(i,t,e),n,s,r+t/2,o);function qn(i,t,e,n=.2,s=0){const r=new Mt,o=yt(new te(n*1.6,n*1.9,.22,12),O.whiteStone(),0,.11,0),a=yt(new te(n*.92,n,e,14),O.lacquer(),0,e/2+.2,0);return r.add(o,a),ti.push(a),r.position.set(i,s,t),r}class Xh{constructor(t,e,n){this.ox=t,this.oy=e,this.oz=n}block(t,e,n,s){Le(this.ox+t,this.oz+e,n,s)}circle(t,e,n){Un(this.ox+t,this.oz+e,n)}seat(t,e,n,s,r,o){o.userData.seat=t,ar.push({id:t,position:new w(this.ox+e,this.oy+n,this.oz+s),facing:r,mesh:o,taken:!1})}}function vs(i,t,e,n=!1){const s=document.createElement("canvas");s.width=n?128:512,s.height=n?512:128;const r=s.getContext("2d");r.fillStyle="#7a1f14",r.fillRect(0,0,s.width,s.height),r.strokeStyle="#d9a845",r.lineWidth=8,r.strokeRect(6,6,s.width-12,s.height-12),r.fillStyle="#f2c96b",r.textAlign="center",r.textBaseline="middle";const o='"Noto Serif CJK SC", "SimSun", "MS Mincho", serif';if(n){const c=[...i[0]],l=(s.height-40)/c.length;r.font=`600 ${Math.min(84,l*.85)}px ${o}`,c.forEach((h,u)=>r.fillText(h,s.width/2,20+l*(u+.5)))}else r.font=`600 66px ${o}`,r.fillText(i[0],s.width/2,i[1]?52:s.height/2),i[1]&&(r.font='600 24px "Lora", serif',r.fillText(i[1],s.width/2,104));const a=new jn(s);return a.colorSpace=Ee,new tt(new qe(t,e),new Ft({map:a,roughness:.5}))}function xr(i=1,t=!1){const e=new Mt,n=t?O.paperGlow():O.lanternRed(),s=yt(new Ut(.28*i,16,12),n,0,0,0);s.scale.y=1.25;const r=yt(new te(.12*i,.16*i,.08*i,12),O.gold(),0,.36*i,0),o=yt(new te(.16*i,.12*i,.08*i,12),O.gold(),0,-.36*i,0),a=yt(new te(.03,.05,.3*i,6),O.lanternRed(),0,-.55*i,0);return e.add(s,r,o,a),e}function jd(i,t){const e=new Mt;e.add(_t(.5,.25,.5,O.blueStone(),0,0,0)),e.add(_t(.22,1.3,.22,O.blueStone(),0,.25,0)),e.add(_t(.6,.12,.6,O.blueStone(),0,1.55,0));const n=_t(.42,.5,.42,O.paperGlow(),0,1.67,0);e.add(n);const s=mn({a:.42,b:.42,r:.02,h:.3,lift:.1});return s.position.y=2.17,e.add(s),e.position.set(i,0,t),Un(i,t,.3),e}function Wp(i=1){const t=[[0,1],[.18,1],[.3,.92],[.34,.7],[.36,.4],[.42,.12],[.48,0],[.44,-.02],[0,-.02]];return yt(new Yn(t.map(([e,n])=>new Z(e*i,n*i)),28),O.bronze())}function b1(i=1){const t=new Mt,e=yt(new te(.5*i,.5*i,.8*i,24),O.lacquer());e.rotation.z=Math.PI/2;const n=new Ft({color:"#d9c39a",roughness:.8});for(const s of[-1,1]){const r=yt(new Yi(.48*i,24),n,s*.41*i,0,0);r.rotation.y=s*Math.PI/2,t.add(r)}return t.add(e),t}function Yd(i,t,e){const n=new Mt,s=O.blueStone();n.add(_t(1.2,.8,1.6,O.darkStone(),0,0,0));const r=yt(new Ut(.5,16,12),s,0,1.25,-.15);r.scale.set(.9,.9,1.3);const o=yt(new Ut(.42,16,12),s,0,1.55,.3),a=yt(new Ut(.38,16,12),s,0,2.05,.45);a.scale.set(1.1,1,1);const c=yt(new We(.34,.12,8,18),s,0,2,.35);c.rotation.x=.2,n.add(r,o,a,c);for(const h of[-1,1]){const u=yt(new te(.11,.13,.6,8),s,h*.25,1.1,.5),d=yt(new Ut(.12,8,6),s,h*.18,2.4,.4);n.add(u,d)}const l=yt(new We(.25,.08,6,12,Math.PI*1.3),s,0,1.6,-.75);return l.rotation.y=Math.PI/2,n.add(l),n.position.set(i,0,t),n.rotation.y=e,Le(i,t,1.4,1.8),n}function S1(){const i=new Mt,t=pt.gateZ,e=22,n=5,s=6.4,r=new pr;r.moveTo(-e/2,0),r.lineTo(e/2,0),r.lineTo(e/2,s),r.lineTo(-e/2,s),r.lineTo(-e/2,0);const o=(g,p,y)=>{const _=new so;return _.moveTo(g-p/2,.001),_.lineTo(g-p/2,y-p/2),_.absarc(g,y-p/2,p/2,Math.PI,0,!0),_.lineTo(g+p/2,.001),_.lineTo(g-p/2,.001),_};r.holes.push(o(0,4.6,5.4),o(-6.2,2.8,4.2),o(6.2,2.8,4.2));const a=new Nh(r,{depth:n,bevelEnabled:!1});a.translate(0,0,-n/2);const c=a.attributes.uv;for(let g=0;g<c.count;g++)c.setXY(g,c.getX(g)*.3,c.getY(g)*.3);const l=yt(a,O.plaster());i.add(l),i.add(_t(e+1,.3,n+1.2,O.laterite(),0,0,0));for(const g of[-10.6,-8.1,-3.9,3.9,8.1,10.6])i.add(_t(.5,s,.3,O.lacquer(),g,0,n/2+.1));const h=mn({a:e/2+1.4,b:n/2+1.6,r:e/2-1,h:1.3,lift:.8});h.position.y=s,i.add(h);const u=s+.7;i.add(_t(12,.35,4.4,O.timber(),0,u-.35,0));for(const g of[-5.4,-1.8,1.8,5.4])for(const p of[-1.9,1.9])i.add(qn(g,p,3.2,.2,u));i.add(_t(11.4,.7,.16,O.lacquer(),0,u+.05,1.95));const d=Wp(1.6);d.position.set(0,u+1.3,0),i.add(d);const f=mn({a:7.4,b:3.6,r:5,h:1.2,lift:.75});f.position.y=u+3.3,i.add(f),i.add(_t(9,1.2,3.4,O.plaster(),0,u+3.6,0));const m=mn({a:6.2,b:3.2,r:3.8,h:2.4,lift:.95,dragons:!0});m.position.y=u+4.8,i.add(m);const v=vs(["安緣寺","AN DUYÊN TỰ"],4.6,1.15);v.position.set(0,5.75,n/2+.03),i.add(v);for(const[g,p]of[[-3.9,"佛光普照"],[3.9,"緣滿人間"]]){const y=vs([p],.45,3.4,!0);y.position.set(g,3,n/2+.27),i.add(y)}return i.position.z=t,ti.push(l),Le(-9.4,t,3.2,n),Le(-3.4,t,2.2,n),Le(3.4,t,2.2,n),Le(9.4,t,3.2,n),i}function Kd(i,t,e){const n=new Mt,s=1.4;n.add(_t(5.2,.5,5.2,O.laterite(),0,0,0));for(const a of[-1.8,1.8])for(const c of[-1.8,1.8])n.add(qn(a,c,3,.17,.5));for(const a of[-.85,.85])for(const c of[-.85,.85])n.add(qn(a,c,8.9,.14,.5));if([{y:3.6,a:3.4,h:1.2},{y:6.6,a:2.7,h:1.1},{y:9.4,a:2,h:1.9}].forEach((a,c)=>{const l=mn({a:a.a,b:a.a,r:c===2?.35:a.a-.7,h:a.h,lift:.7});l.position.y=a.y,n.add(l),c<2&&n.add(_t(a.a*1.2,.16,a.a*1.2,O.timber(),0,a.y+a.h*.6,0))}),e==="bell"){const a=Wp(1.25*s);a.position.set(0,4.6,0),n.add(a)}else{const a=b1(1.6);a.position.set(0,5.4,0),n.add(a)}const o=vs([e==="bell"?"鐘樓":"鼓樓"],1.4,.5);return o.position.set(0,3.2,1.95),n.add(o),n.position.set(i,0,t),Le(i,t,4.6,4.6),n}function Jd(i,t,e=0){const n=new Mt,s=i.x1-i.x0,r=i.z1-i.z0,o=i.y-t,a=(i.x0+i.x1)/2,c=(i.z0+i.z1)/2,l=_t(s,i.y,r,O.laterite(),a,0,c);n.add(l);const h=_t(s-.2,.04,r-.2,O.brick(),a,i.y,c);n.add(h),bn.push(h),yo(a,c,s,r,i.y);const u=Math.max(4,Math.round(o/.18));for(let m=0;m<u;m++){const v=o*(1-m/u);n.add(_t(i.stairHalf*2,v,i.stairLen/u+.02,O.whiteStone(),0,t,i.z1+(m+.5)*(i.stairLen/u)))}const d=new tt(new qe(i.stairHalf*2,Math.hypot(i.stairLen,o)),new Oe({visible:!1}));d.rotation.x=-Math.PI/2+Math.atan2(o,i.stairLen),d.position.set(0,t+o/2,i.z1+i.stairLen/2),n.add(d),bn.push(d),Up(0,i.stairHalf,i.z1+i.stairLen,i.z1,t,i.y);for(const m of[-1,1]){const v=[new w(m*(i.stairHalf+.25),i.y+.7,i.z1),new w(m*(i.stairHalf+.25),t+o*.5+.7,i.z1+i.stairLen*.5),new w(m*(i.stairHalf+.25),t+.8,i.z1+i.stairLen+.4)];n.add(yt(new Ki(new xs(v),20,.22,10),O.blueStone()));const g=yt(new Ut(.34,12,10),O.blueStone(),v[2].x,v[2].y+.15,v[2].z+.1);g.scale.set(.8,1,1.3),n.add(g)}const f=(m,v,g)=>{v-m<.5||(n.add(_t(v-m,.7,.25,O.blueStone(),(m+v)/2,i.y,g)),Le((m+v)/2,g,v-m,.4))};return f(i.x0,-i.stairHalf-.5,i.z1-.15),f(i.stairHalf+.5,i.x1,i.z1-.15),Le(i.x0,c,.4,r),Le(i.x1,c,.4,r),e>0?(Le((i.x0-e)/2,i.z0,-e-i.x0,.4),Le((i.x1+e)/2,i.z0,i.x1-e,.4)):Le(a,i.z0,s,.4),n}function $p(i=1){const t=new Mt,e=[[0,0],[.3,0],[.34,.08],[.22,.2],[.24,.32],[.5,.42],[.56,.62],[.5,.82],[.54,.86],[.46,.88],[0,.88]].map(([n,s])=>new Z(n*i,s*i));t.add(yt(new Yn(e,24),O.bronze()));for(const n of[-1,1]){const s=yt(new We(.12*i,.03*i,6,12),O.bronze(),n*.56*i,.84*i,0);s.rotation.y=Math.PI/2,t.add(s)}for(let n=0;n<7;n++){const s=n*.9,r=.18*i*(n%3)*.6;t.add(yt(new te(.008,.008,.5*i,4),O.ridge(),Math.cos(s)*r,1.05*i,Math.sin(s)*r)),t.add(yt(new Ut(.014,6,4),O.incense(),Math.cos(s)*r,1.3*i,Math.sin(s)*r))}return t}function w1(i,t){const e=new Mt;e.add(_t(2.6,.7,2.6,O.whiteStone(),0,0,0));const n=$p(2);return n.position.y=.7,e.add(n),e.position.set(i,0,t),Le(i,t,2.9,2.9),e}function Zd(i,t,e){const n=new Mt,s=i*(pt.corridorX-2.2),r=i*(pt.corridorX+1.4),o=e-t,a=(t+e)/2,c=(s+r)/2,l=_t(4.2,.3,o,O.laterite(),c,0,a);n.add(l);const h=_t(4,.02,o-.1,O.brick(),c,.3,a);n.add(h),bn.push(h),yo(c,a,4.2,o,.3);const u=_t(.4,3.6,o,O.plaster(),r,.3,a);n.add(u),ti.push(u),Le(r,a,.5,o);const d=Math.round(o/3.2);for(let v=0;v<=d;v++){const g=t+o/d*v;n.add(qn(s,g,3.4,.16,.3)),Un(s,g,.24)}const f=mn({a:o/2+.8,b:3.2,r:o/2-1.2,h:1.6,lift:.5});f.rotation.y=Math.PI/2,f.position.set(c,3.9,a),n.add(f);const m=["#8f9792","#858d88","#97a09a"];for(let v=0;v<d;v++){const g=t+o/d*(v+.5);n.add(_t(1.4,.7,1,O.lacquer(),r-i*.75,.3,g));const p=qh(m[v%m.length],m[(v+1)%m.length],v%3===0,!1);p.scale.setScalar(1.15),p.position.set(r-i*.75,1,g),p.rotation.y=i>0?-Math.PI/2:Math.PI/2,n.add(p),Le(r-i*.75,g,1.4,1)}return n}function T1(i,t,e){const n=new Mt,s=9;n.add(_t(9,.8,9,O.whiteStone(),0,0,0));let r=.8;for(let c=0;c<s;c++){const l=3.2-c*.24,h=c===0?3.2:2.2-c*.06,u=yt(new te(l*.92,l,h,8),c%2?O.plaster():O.whiteStone(),0,r+h/2,0);u.rotation.y=Math.PI/8,n.add(u);for(let f=0;f<4;f++){const m=f/4*Math.PI*2,v=yt(new Yi(.42-c*.02,16,0,Math.PI),O.gold(),Math.sin(m)*(l*.93+.01),r+h*.35,Math.cos(m)*(l*.93+.01));v.rotation.y=m,n.add(v)}r+=h;const d=mn({a:l+.7,b:l+.7,r:.01,h:1,lift:.3,tips:!1});d.position.y=r-.1,d.rotation.y=Math.PI/4,n.add(d),r+=.35}const o=yt(new Ci(.3,2.2,10),O.gold(),0,r+1.1,0),a=yt(new Ut(.5,12,8),O.gold(),0,r+.2,0);return a.scale.y=.6,n.add(o,a),n.position.set(i,e,t),Un(i,t,4.6),n}function E1(){const{x:i,z:t,floor:e,half:n}=pt.isle,s=pt.lake.water,r=new Mt;r.add(yt(new te(.7,.8,e-s+.2,20),O.whiteStone(),0,(e+s)/2-.1,0));for(let l=0;l<8;l++){const h=l/8*Math.PI*2,u=_t(.16,.16,2,O.timber(),Math.cos(h)*.8,e-.6,Math.sin(h)*.8);u.rotation.y=-h+Math.PI/2,u.rotation.x=.5,r.add(u)}r.add(_t(n*2+.2,.22,n*2+.2,O.timber(),0,e-.22,0));const o=_t(n*2,.02,n*2,O.brick(),0,e-.02,0);r.add(o),bn.push(o);for(const l of[-n+.15,n-.15])for(const h of[-n+.15,n-.15])r.add(qn(l,h,2.6,.13,e));const a=mn({a:n+.9,b:n+.9,r:.5,h:1.6,lift:.7,dragons:!1});a.position.y=e+2.8,r.add(a);for(const[l,h,u,d]of[[0,-n,n*2,.1],[0,n,n*2,.1],[n,0,.1,n*2]])r.add(_t(u,.55,d,O.lacquer(),l,e,h));const c=xr(1);return c.position.set(0,e+2.3,0),r.add(c),r.position.set(i,0,t),r}function A1(){const i=pt.bridge,t=new Mt,e=26,n=i.x1-i.x0;for(let s=0;s<e;s++){const r=s/e,o=(s+1)/e,a=Ea(r),c=Ea(o),l=yt(new ln(n/e+.03,.12,i.half*2),O.timber(),i.x0+n*(r+o)/2,(a+c)/2-.06,i.z);if(l.rotation.z=Math.atan2(c-a,n/e),t.add(l),bn.push(l),s%3===0)for(const h of[-1,1])t.add(yt(new ln(.1,.7,.1),O.lacquer(),i.x0+n*r,a+.35,i.z+h*(i.half-.05)))}for(const s of[-1,1]){const r=[];for(let o=0;o<=16;o++){const a=o/16;r.push(new w(i.x0+n*a,Ea(a)+.7,i.z+s*(i.half-.05)))}t.add(yt(new Ki(new xs(r),32,.05,6),O.lacquer()))}return t}function C1(i,t){const e=new Mt,n=new Xh(i,0,t);e.add(_t(8,.5,6,O.laterite(),0,0,0)),e.add(_t(7.6,.02,5.6,O.brick(),0,.5,0));for(const a of[_t(7.2,3.6,.35,O.plaster(),0,.5,-2.6),_t(.35,3.6,5.2,O.plaster(),-3.6,.5,0),_t(.35,3.6,5.2,O.plaster(),3.6,.5,0)])e.add(a),ti.push(a);for(const a of[-3.4,-1.2,1.2,3.4])e.add(qn(a,2.6,3.4,.17,.5));const s=mn({a:5,b:4,r:3,h:2.3,lift:.9,dragons:!0});s.position.y=4.1,e.add(s),e.add(_t(3.2,1.1,1.2,O.lacquer(),0,.5,-1.7));const r=qh("#b8402e","#ecd2b4",!0);r.scale.setScalar(1.3),r.position.set(0,1.6,-1.85),e.add(r);for(let a=0;a<13;a++)e.add(yt(new te(.014,.014,1.8,4),O.pinkSilk(),-3+a*.5,3,2.6));const o=vs(["月老祠","ĐỀN NGUYỆT LÃO"],2.8,.7);o.position.set(0,3.6,2.7),e.add(o);for(const a of[-2.3,2.3]){const c=xr(1);c.position.set(a,3.3,2.8),e.add(c)}return e.position.set(i,0,t),n.block(0,-2.6,7.2,.6),n.block(-3.6,0,.6,5.4),n.block(3.6,0,.6,5.4),n.block(0,-1.7,3.4,1.4),yo(i,t,8,6,.5),e}function R1(i,t){const e=new Mt,n=new Xh(i,0,t);e.add(_t(8,.2,7.6,O.timber(),0,0,0));for(const o of[-3.7,0,3.7])for(const a of[-3.5,3.5])e.add(qn(o,a,2.8,.13,.2));const s=mn({a:4.8,b:4.6,r:3,h:2,lift:.6});s.position.y=3.2,e.add(s),[[-2.1,-1.7],[2.1,-1.7],[-2.1,1.7],[2.1,1.7]].forEach(([o,a],c)=>{e.add(_t(1.2,.42,.9,O.timber(),o,.2,a)),e.add(yt(new Ut(.11,10,8),O.whiteStone(),o,.73,a));for(const l of[-1,1]){const h=yt(new te(.24,.24,.28,12),O.timber(),o+l*.95,.34,a);e.add(h),n.seat(`tea-${c}-${l}`,o+l*.95,.48,a,l>0?-Math.PI/2:Math.PI/2,h)}n.block(o,a,1.2,.9)});for(const o of[-3.7,3.7]){const a=xr(.9);a.position.set(o,2.6,3.7),e.add(a)}e.position.set(i,0,t);for(const o of[-3.7,0,3.7])for(const a of[-3.5,3.5])n.circle(o,a,.2);return yo(i,t,8,7.6,.2),e}function kr(i,t,e,n){const s=new Mt;s.add(_t(1.6,.1,.5,O.darkStone(),0,.38,0),_t(.25,.38,.4,O.darkStone(),-.6,0,0),_t(.25,.38,.4,O.darkStone(),.6,0,0)),s.position.set(i,0,t),s.rotation.y=e;const r=new w(1,0,0).applyAxisAngle(new w(0,1,0),e);for(const o of[-1,1]){const a=new tt(new ln(.75,.12,.5),new Oe({visible:!1}));a.position.set(o*.4,.44,0),s.add(a),a.userData.seat=`${n}-${o}`,ar.push({id:`${n}-${o}`,position:new w(i+r.x*o*.4,.48,t+r.z*o*.4),facing:e,mesh:a,taken:!1})}return Le(i,t,1.4,1.4),s}function Qd(i,t){const e=new Mt;e.add(_t(1.2,.4,1.2,O.darkStone(),0,0,0)),e.add(_t(.8,2.4,.8,O.blueStone(),0,.4,0));const n=mn({a:.75,b:.75,r:.05,h:.45,lift:.16});return n.position.y=2.8,e.add(n),e.position.set(i,0,t),Le(i,t,1.2,1.2),e}function L1(){const i=new Mt,t=pt.bounds,e=t.x0-1,n=t.x1+1,s=t.z0-1,r=pt.gateZ,o=2.2,a=(c,l,h,u)=>{const d=Math.hypot(h-c,u-l),f=_t(d,o,.45,O.plaster(),0,0,0);f.position.set((c+h)/2,0,(l+u)/2),f.rotation.y=-Math.atan2(u-l,h-c);const m=yt(new ln(d+.1,.16,.8),O.ridge(),(c+h)/2,o+.08,(l+u)/2);m.rotation.y=f.rotation.y,i.add(f,m)};return a(e,s,n,s),a(e,s,e,r),a(n,s,n,r),a(e,r,-11,r),a(11,r,n,r),i}const qp=matchMedia("(pointer: coarse)").matches,ca=qp?.5:1,Xp="#7a4a12",jp="#d9a443",Yp="#fbe39a",jh="#6e1a0e",P1="#3d0c06";function Mo(i,t){const e=document.createElement("canvas");e.width=Math.round(i*ca),e.height=Math.round(t*ca);const n=e.getContext("2d");return n.scale(ca,ca),{c:e,g:n}}function bo(i){const t=new jn(i);return t.colorSpace=Ee,t.anisotropy=4,t}function ho(i,t,e){i.save(),i.lineCap="round",i.lineJoin="round",i.translate(e*.35,e*.5),i.strokeStyle=Xp,i.lineWidth=e*1.25,i.beginPath(),t(),i.stroke(),i.translate(-e*.35,-e*.5),i.strokeStyle=jp,i.lineWidth=e,i.beginPath(),t(),i.stroke(),i.translate(-e*.18,-e*.22),i.strokeStyle=Yp,i.globalAlpha=.55,i.lineWidth=e*.3,i.beginPath(),t(),i.stroke(),i.restore()}function uo(i,t,e,n,s,r=0){ho(i,()=>{for(let a=0;a<=26;a++){const c=a/26,l=r+s*c*Math.PI*2.4,h=n*(1-c*.78),u=t+Math.cos(l)*h-s*n*(1-c)*.9,d=e+Math.sin(l)*h;a===0?i.moveTo(u,d):i.lineTo(u,d)}},Math.max(2,n*.22))}function eh(i,t,e){for(const[n,s]of t){i.fillStyle=Xp,i.beginPath(),i.arc(n+e*.25,s+e*.3,e,0,Math.PI*2),i.fill();const r=i.createRadialGradient(n-e*.3,s-e*.3,e*.1,n,s,e);r.addColorStop(0,Yp),r.addColorStop(1,jp),i.fillStyle=r,i.beginPath(),i.arc(n,s,e,0,Math.PI*2),i.fill()}}function Kr(i,t,e,n,s){const r=i.createLinearGradient(t,e,t+n,e+s);return r.addColorStop(0,"#b9852f"),r.addColorStop(.45,"#f0c96a"),r.addColorStop(1,"#a8752a"),i.fillStyle=r,r}const Kp=i=>new Ft({map:i,alphaTest:.5,metalness:.55,roughness:.38,emissive:"#ffffff",emissiveMap:i,emissiveIntensity:.22,side:De});function la(i,t,e,n){const s=t/2,r=t/2-n;i.beginPath(),i.moveTo(s-r*.82,e-n),i.bezierCurveTo(s-r*1.08,e*.62,s-r*1.02,e*.3,s-r*.55,e*.14+n*.6),i.bezierCurveTo(s-r*.25,e*.05+n,s-r*.08,e*.06+n,s,n*.6),i.bezierCurveTo(s+r*.08,e*.06+n,s+r*.25,e*.05+n,s+r*.55,e*.14+n*.6),i.bezierCurveTo(s+r*1.02,e*.3,s+r*1.08,e*.62,s+r*.82,e-n),i.closePath()}let ha=null;function I1(){if(ha)return ha;const i=768,t=1024,{c:e,g:n}=Mo(i,t);la(n,i,t,0),n.save(),n.clip(),Kr(n,0,0,i,t),n.fillRect(0,0,i,t),n.restore();for(let c=0;c<46;c++){const l=c/45,h=Math.PI*(1.05+l*.9),u=i/2+Math.cos(h)*i*.44,d=t*.52+Math.sin(h)*t*.5;uo(n,u,d,15,c%2?1:-1,h)}la(n,i,t,46),n.fillStyle=jh,n.fill(),n.save(),la(n,i,t,46),n.clip(),n.globalAlpha=.72,n.fillStyle=Kr(n,0,0,i,t),n.fillRect(0,0,i,t),n.restore(),n.save(),la(n,i,t,46),n.clip();for(let c=120;c<t;c+=74)for(let l=40+c/74%2*40;l<i;l+=82)uo(n,l,c,22,(l+c)%2?1:-1);n.restore();const s=[];for(let c=0;c<=60;c++){const l=c/60,h=Math.PI*(1+l);s.push([i/2+Math.cos(h)*i*.4,t*.55+Math.sin(h)*t*.45])}eh(n,s,7);const r=i/2,o=t*.36,a=i*.2;n.fillStyle=Kr(n,r-a,o-a,a*2,a*2),n.beginPath(),n.arc(r,o,a,0,Math.PI*2),n.fill();for(let c=0;c<36;c++){const l=c/36*Math.PI*2;ho(n,()=>{n.moveTo(r+Math.cos(l)*a*.35,o+Math.sin(l)*a*.35),n.lineTo(r+Math.cos(l)*a*.85,o+Math.sin(l)*a*.85)},3)}for(const c of[a,a*.32]){const l=[],h=Math.round(c/6);for(let u=0;u<h;u++)l.push([r+Math.cos(u/h*Math.PI*2)*c,o+Math.sin(u/h*Math.PI*2)*c]);eh(n,l,5)}return ha=bo(e),ha}function N1(i){const t=new tt(new qe(i*.75,i).translate(0,i/2,0),Kp(I1()));return t.receiveShadow=!0,t}const tf=new Map;function D1(i){const t=i.toFixed(1);let e=tf.get(t);if(e)return e;const n=384,s=Math.round(n*i),{c:r,g:o}=Mo(s,n),a=d=>n*.42+n*.55*Math.pow(Math.abs(d/s-.5)*2,2.2);o.beginPath(),o.moveTo(0,0),o.lineTo(s,0),o.lineTo(s,n);for(let d=s;d>=0;d-=24)o.quadraticCurveTo(d-12,a(d-12)+16,d-24,a(d-24));o.closePath(),o.save(),o.clip(),o.fillStyle=jh,o.fillRect(0,0,s,n),o.fillStyle=Kr(o,0,0,s,46),o.fillRect(0,0,s,46);const c=[];for(let d=14;d<s;d+=22)c.push([d,52]);eh(o,c,6);for(let d=86;d<n;d+=54)for(let f=30+d/54%2*30;f<s;f+=62)d<a(f)-10&&uo(o,f,d,19,(f/62+d/54)%2>.5?1:-1);const l=s/2,h=n*.3,u=n*.17;o.fillStyle=Kr(o,l-u,h-u,u*2,u*2),o.beginPath(),o.arc(l,h,u,0,Math.PI*2),o.fill();for(let d=0;d<12;d++){const f=d/12*Math.PI*2;ho(o,()=>{o.ellipse(l+Math.cos(f)*u*.55,h+Math.sin(f)*u*.55,u*.32,u*.13,f,0,Math.PI*2)},3)}return o.restore(),ho(o,()=>{o.moveTo(0,a(0));for(let d=0;d<=s;d+=24)o.quadraticCurveTo(d+12,a(d+12)+16,d+24,a(d+24))},7),e=bo(r),tf.set(t,e),e}function ef(i,t){return new tt(new qe(i,t).translate(0,-t/2,0),Kp(D1(i/t)))}let ua=null;function nf(i){if(!ua){const{c:s,g:r}=Mo(512,128);r.fillStyle=jh,r.fillRect(0,0,512,128),r.fillStyle=P1,r.fillRect(0,14,512,100);for(const o of[7,121])ho(r,()=>{r.moveTo(0,o),r.lineTo(512,o)},6);for(let o=32;o<512;o+=64)uo(r,o,128/2-8,20,1),uo(r,o+32,128/2+10,20,-1);ua=bo(s),ua.wrapS=Xi}const t=ua.clone();return t.repeat.set(i,1),t.needsUpdate=!0,new Ft({map:t,metalness:.35,roughness:.45,emissive:"#ffffff",emissiveMap:t,emissiveIntensity:.12})}function U1(i,t){const n=Math.round(1024*t/i),{c:s,g:r}=Mo(1024,n);r.fillStyle="#e8b52c",r.fillRect(0,0,1024,n);for(let h=0;h<1024;h+=32){const u=r.createLinearGradient(h,0,h+32,0);u.addColorStop(0,"rgba(255,255,255,0.0)"),u.addColorStop(.5,"rgba(255,240,190,0.25)"),u.addColorStop(1,"rgba(120,70,0,0.12)"),r.fillStyle=u,r.fillRect(h,0,32,n)}r.strokeStyle="#b3261a",r.lineWidth=n*.08,r.strokeRect(n*.06,n*.06,1024-n*.12,n-n*.12);const o=1024/2,a=n/2,c=n*.28;for(let h=0;h<8;h++){const u=h/8*Math.PI*2-Math.PI/2;r.fillStyle="#c0392b",r.beginPath(),r.ellipse(o+Math.cos(u)*c*.55,a+Math.sin(u)*c*.55,c*.5,c*.2,u,0,Math.PI*2),r.fill()}return r.fillStyle="#f6d36b",r.beginPath(),r.arc(o,a,c*.3,0,Math.PI*2),r.fill(),new tt(new qe(i,t),new Ft({map:bo(s),roughness:.75}))}let da=null;function k1(){if(da)return da;const i=512,t=512,{c:e,g:n}=Mo(i,t);n.fillStyle="#f2f1ea",n.fillRect(0,0,i,t);const s="#1f3f8f";n.fillStyle=s;for(const[r,o]of[[0,30],[92,10],[400,10],[470,42]])n.fillRect(0,r,i,o);n.strokeStyle=s,n.lineWidth=6,n.lineCap="round";for(let r=0;r<i;r+=128){n.beginPath(),n.moveTo(r,250),n.bezierCurveTo(r+30,160,r+90,160,r+128,250),n.stroke(),n.beginPath(),n.ellipse(r+64,215,26,34,0,0,Math.PI*2),n.fill();for(const o of[-1,1])n.beginPath(),n.ellipse(r+64+o*34,250,18,9,o*.6,0,Math.PI*2),n.fill()}for(let r=0;r<i;r+=32)n.beginPath(),n.moveTo(r,470),n.quadraticCurveTo(r+16,410,r+32,470),n.stroke();return da=bo(e),da}function O1(i){const t=[[0,0],[.16,0],[.18,.04],[.2,.25],[.28,.5],[.3,.62],[.25,.76],[.12,.86],[.1,.94],[.14,1],[.12,1]],e=new Yn(t.map(([s,r])=>new Z(s*i,r*i)),qp?16:24),n=new tt(e,new Ft({map:k1(),roughness:.18,metalness:.05}));return n.castShadow=!0,n}const Se=40,En=-2,An=-30,Ke=8;function F1(){const i=[],t=(n,s,r,o,a=1,c=1,l=1)=>{n.scale(a,c,l),n.translate(s,r,o),i.push(n.index?n.toNonIndexed():n)};return t(new te(.2,.22,.08,8),0,.04,0),t(new Ut(1,8,4),0,.14,.02,.2,.07,.13),t(new te(.09,.13,.24,7),0,.3,0),t(new Ut(.075,8,5),0,.5,.01),t(new Ut(.03,5,3),0,.585,0),Ya(i.map(n=>{for(const s of Object.keys(n.attributes))["position","normal","uv"].includes(s)||n.deleteAttribute(s);return n}))}function B1(i,t){const e=document.createElement("canvas");e.width=1024,e.height=Math.round(1024/i*t*1.25);const n=e.getContext("2d");n.fillStyle="#4a1a10",n.fillRect(0,0,e.width,e.height);const s=e.width/i,r=e.height/t;for(let a=0;a<t;a++)for(let c=0;c<i;c++){const l=c*s+s*.14,h=a*r+r*.12,u=s*.72,d=r*.8;n.fillStyle="#1e0c07",n.beginPath(),n.moveTo(l,h+d),n.lineTo(l,h+u/2),n.arc(l+u/2,h+u/2,u/2,Math.PI,0),n.lineTo(l+u,h+d),n.closePath(),n.fill(),n.strokeStyle="#d6a94e",n.lineWidth=3,n.stroke();const f=n.createRadialGradient(l+u/2,h+d*.55,2,l+u/2,h+d*.55,u*.6);f.addColorStop(0,"rgba(255,190,90,0.35)"),f.addColorStop(1,"rgba(255,190,90,0)"),n.fillStyle=f,n.fill()}const o=new jn(e);return o.colorSpace=Ee,o}function nh(i,t){const e=new Mt;e.add(_t(1.4,.4,1.2,O.lacquer(),0,0,0));const n=vr("guardian");if(n)return Ql(n,"robe",i),n.getObjectByName(t==="sword"?"staff":"sword")?.removeFromParent(),e.add(n),e;const s=new Ft({color:i,roughness:.6,metalness:.2}),r=new Ft({color:"#c99b70",roughness:.6}),o=yt(new Yn([[0,0],[.62,0],[.55,.9],[.5,1.8],[.62,2.3],[.5,2.6],[.2,2.75],[0,2.75]].map(([u,d])=>new Z(u,d)),20),s,0,.4,0);e.add(o);const a=yt(new te(.56,.5,.7,16),O.gold(),0,2.45,.02);e.add(a);const c=yt(new Ut(.34,18,14),r,0,3.45,.05);e.add(c);const l=yt(new Ci(.36,.55,14),O.gold(),0,3.85,0);e.add(l);for(const u of[-1,1]){const d=yt(new vo(.14,.9,4,8),s,u*.7,2.5,.25);d.rotation.x=-.6,d.rotation.z=u*.2,e.add(d)}const h=t==="sword"?yt(new ln(.08,1.8,.2),O.whiteStone(),0,2.6,.75):yt(new te(.05,.05,3.2,8),O.gold(),.75,2.2,.55);return e.add(h),e}function sf(i,t){const e=document.createElement("canvas");e.width=512,e.height=768;const n=e.getContext("2d");n.fillStyle="#6e1a10",n.fillRect(0,0,512,768),n.strokeStyle="#e0b45a",n.lineWidth=14,n.strokeRect(14,14,484,740),n.fillStyle="#f3cf7a",n.textAlign="center",n.font="600 52px Lora, serif",n.fillText(i,256,110),n.font='400 30px "Be Vietnam Pro", sans-serif',t.forEach((r,o)=>n.fillText(r,256,200+o*62));const s=new jn(e);return s.colorSpace=Ee,new tt(new qe(2.4,3.6),new Ft({map:s,roughness:.5}))}const Jp=[];function z1(){const i=pt.hall,t=i.y,e=pt.terrace.y,n=new Xh(0,t,0),s=new Mt,r=i.x1-i.x0,o=i.z1-i.z0,a=(i.z0+i.z1)/2;s.add(_t(r,t-e,o,O.laterite(),0,e,a));const c=new Ft({map:O.brick().map,color:"#d9a98c",roughness:.5,metalness:0,envMapIntensity:.15}),l=_t(r-.2,.04,o-.2,c,0,t,a);s.add(l),bn.push(l),yo(0,a,r,o,t);const h=4;for(let D=0;D<h;D++)s.add(_t(i.stairHalf*2,(t-e)/h*(h-D),i.stairLen/h+.02,O.whiteStone(),0,e,i.z1+(D+.5)*(i.stairLen/h)));Up(0,i.stairHalf,i.z1+i.stairLen,i.z1,e,t);const u=i.x1-i.stairHalf;Le(-14.5,i.z1,u,.3),Le(i.stairHalf+u/2,i.z1,u,.3),Le(i.x0,a,.3,o),Le(i.x1,a,.3,o);const d=Se/9,f=Array.from({length:10},(D,z)=>-Se/2+d*z);for(const D of f)s.add(qn(D,1.6,Ke-.6,.36,t)),n.circle(D,1.6,.42),s.add(qn(D,En,Ke,.42,t)),n.circle(D,En,.5);for(const D of[-15.5,-8.9,8.9,15.5])for(const z of[-8,-14.5,-21])s.add(qn(D,z,Ke+.2,.46,t)),n.circle(D,z,.55);const m=En-An,v=(En+An)/2;for(const D of[-1,1]){const z=_t(.6,Ke,m,O.plaster(),D*Se/2,t,v);s.add(z),ti.push(z),n.block(D*Se/2,v,.7,m);for(const R of[-9,-17,-25]){const mt=yt(new We(1,.13,8,32),O.lacquer(),D*(Se/2-.32),t+5.2,R);mt.rotation.y=Math.PI/2,s.add(mt);const nt=yt(new Yi(.95,32),O.paperGlow(),D*(Se/2-.31),t+5.2,R);nt.rotation.y=-D*Math.PI/2,s.add(nt)}}const g=_t(Se+.6,Ke,.6,O.plaster(),0,t,An);s.add(g),ti.push(g),n.block(0,An,Se+.6,.7),s.add(_t(Se+1,.6,.5,O.lacquer(),0,t+Ke-.6,1.6)),s.add(_t(Se+1,.6,.55,O.lacquer(),0,t+Ke-.3,En));const p=vs(["大雄寶殿","ĐẠI HÙNG BẢO ĐIỆN"],7.5,1.9);p.position.set(0,t+Ke-1.5,En+.32),s.add(p);const y=[[-d/2-d*0,"安心見佛"],[d/2,"緣起成蓮"],[-d*1.5,"慈悲喜捨"],[d*1.5,"福慧雙修"]];for(const[D,z]of y){const R=vs([z],.62,4.2,!0);R.position.set(D,t+3.4,1.6+.4),s.add(R)}const _=(1.6+An)/2,x=(1.6-An)/2,L=mn({a:Se/2+3,b:x+3,r:Se/2-2,h:2.6,lift:1.5});L.position.set(0,t+Ke,_),s.add(L),s.add(_t(Se-5,3,x*2-6,O.plaster(),0,t+Ke+1.4,_));const E=mn({a:Se/2-.5,b:x-1.5,r:Se/2-7,h:6,lift:1.6,dragons:!0});E.position.set(0,t+Ke+4.2,_),s.add(E);const C=t+Ke+.25,P=_t(Se,.1,x*2,O.timber(),0,C,_);P.castShadow=!1,s.add(P);for(let D=0;D<=9;D++){const z=_t(.3,.4,x*2,O.lacquer(),-Se/2+d*D,C-.4,_);z.castShadow=!1,s.add(z)}for(let D=0;D<=6;D++){const z=_t(Se,.3,.25,O.lacquer(),0,C-.3,1.6-x*2/6*D);z.castShadow=!1,s.add(z)}const S=30,M=6,I=Se-1.4,G=Ke-.4,B=2.6,W=new tt(new qe(I,G-B),new Ft({map:B1(S,M),roughness:.6,emissive:"#2a0d06",emissiveIntensity:.4}));W.position.set(0,t+(G+B)/2,An+.32),s.add(W);const J=new Ei(F1(),O.gold(),S*M),$=new Bt,st=I/S,q=(G-B)/M;let ht=0;for(let D=0;D<M;D++)for(let z=0;z<S;z++)$.makeTranslation(-I/2+st*(z+.5),t+B+q*(D+.12),An+.45),$.multiply(new Bt().makeScale(q*1.2,q*1.2,q*1.2)),J.setMatrixAt(ht++,$);s.add(J);const it=An+3.4;s.add(_t(22,1.4,3.6,O.lacquer(),0,t,it)),s.add(_t(18,.9,2.6,O.lacquer(),0,t+1.4,it-.4));for(const[D,z,R]of[[t+1.4,22.1,it+1.8],[t+2.3,18.1,it+.9]])s.add(_t(z,.08,.08,O.gold(),0,D-.05,R));n.block(0,it,22.4,4);for(const[D,z,R]of[[-6.4,1.55,5.2],[0,1.85,6.1],[6.4,1.55,5.2]]){const mt=M1();mt.getObjectByName("halo")?.removeFromParent(),mt.getObjectByName("haloGlow")?.removeFromParent(),mt.scale.setScalar(z),mt.position.set(D,t+2.3,it-.4),s.add(mt);const nt=N1(R);nt.position.set(D,t+1.9,it-1.75),s.add(nt)}const wt=U1(21.2,1.25);wt.position.set(0,t+.68,it+1.82),s.add(wt);const Wt=t+Ke+.05,he=ef(17.8-.9,2.6);he.position.set(0,Wt,-21),s.add(he);for(const D of[-1,1]){const z=ef(5.699999999999999,2.1);z.position.set(D*12.2,Wt,-21),s.add(z)}const j=new tt(new qe(Se-1.4,.7),nf(18));j.position.set(0,t+Ke-.05,An+.34),s.add(j);for(const D of[-1,1]){const z=new tt(new qe(En-An,.7),nf(14));z.rotation.y=-D*Math.PI/2,z.position.set(D*(Se/2-.32),t+Ke-.05,(En+An)/2),s.add(z)}for(const D of[-9.6,-5.2,5.2,9.6]){const z=O1(Math.abs(D)>7?1.5:1.15);z.position.set(D,t,it+2.5),s.add(z),n.circle(D,it+2.5,.4)}for(const D of[-1,1]){const z=vr("disciple");if(!z)break;z.scale.setScalar(1.25),z.position.set(D*3.3,t,it+2.7),z.rotation.y=-D*.25,s.add(z),n.circle(D*3.3,it+2.7,.6)}for(const[D,z,R]of[[-13.5,"#7a2a1e","#e2b98f"],[13.5,"#c9952e","#e8c7a0"]]){s.add(_t(3.2,1.2,2.6,O.lacquer(),D,t,it+.6));const mt=qh(z,R);mt.scale.setScalar(2),mt.position.set(D,t+1.2,it+.6),s.add(mt),n.block(D,it+.6,3.4,2.8)}const ot=["#e08a2e","#d4b32a","#b8432a"].map(D=>new Ft({color:D,roughness:.6}));for(const D of[-8,-4,4,8]){s.add(yt(new te(.09,.09,.6,10),O.paperGlow(),D,t+1.7,it+1.5));const z=yt(new Ut(.07,8,6),O.incense(),D,t+2.08,it+1.5);z.scale.y=1.8,s.add(z)}for(const D of[-6,-2,2,6])s.add(yt(new te(.2,.28,.7,12),O.gold(),D,t+1.75,it+1.4)),s.add(yt(new Ut(.42,10,8),O.lotusPink(),D,t+2.3,it+1.4));for(const D of[-1,1]){s.add(yt(new te(.5,.35,.1,16),O.gold(),D*3.6,t+1.45,it+1.4));for(let z=0;z<6;z++)s.add(yt(new Ut(.14,10,8),ot[z%3],D*3.6+Math.cos(z)*.22,t+1.6+(z===5?.16:0),it+1.4+Math.sin(z)*.22))}const Et=$p(1.6);Et.position.set(0,t,it+5),s.add(Et),n.circle(0,it+5,1.1);const at=nh("#8e3a26","sword");at.position.set(-Se/2+2.6,t,En-3),at.rotation.y=.5;const Nt=nh("#3d5a6e","staff");Nt.position.set(Se/2-2.6,t,En-3),Nt.rotation.y=-.5,s.add(at,Nt),n.block(-Se/2+2.6,En-3,1.6,1.4),n.block(Se/2-2.6,En-3,1.6,1.4);const Ht=sf("BẢNG VÀNG",["Người lễ Phật","nhiều nhất tuần","","sẽ hiện ở đây"]);Ht.position.set(-Se/2+.33,t+2.6,-7),Ht.rotation.y=Math.PI/2;const zt=sf("BIA CÔNG ĐỨC",["Ghi danh","người góp gạo","","sẽ hiện ở đây"]);zt.position.set(Se/2-.33,t+2.6,-7),zt.rotation.y=-Math.PI/2,s.add(Ht,zt);for(const D of[-6,-12,-18])for(const z of[-4.5,4.5]){const R=xr(1.6);R.position.set(z,t+6.4,D),s.add(R)}for(const[D,z,R]of[[0,-22,16],[-10,-10,9],[10,-10,9]])Jp.push({pos:new w(D,t+6,z),intensity:R,range:26});let ce=0;for(const D of[-6.2,-8.6-.6,-11.6,-16.6,-19])for(const z of[-13.4,-11.2,-6.6,-4.4,-2.2,2.2,4.4,6.6,11.2,13.4]){const R=yt(new te(.45,.5,.16,20),O.cushion(),z,t+.08,D);s.add(R),n.seat(`cd-${ce++}`,z,.16,D,Math.PI,R)}return s}function H1(){const i=pt.causeway,t=new Mt,e=i.z1-i.z0,n=(i.z0+i.z1)/2;t.add(_t(i.half*2,i.y,e,O.blueStone(),0,0,n));const s=_t(i.half*2-.1,.03,e-.1,O.stone(),0,i.y,n);t.add(s),bn.push(s);for(const r of[-1,1]){t.add(_t(.3,.75,e,O.blueStone(),r*(i.half-.15),i.y,n)),Le(r*(i.half-.15),n,.4,e);for(let o=i.z0+4;o<i.z1;o+=8){t.add(_t(.5,1.6,.5,O.blueStone(),r*(i.half-.15),i.y,o));const a=xr(.9,!0);a.position.set(r*(i.half-.15),i.y+2,o),t.add(a)}}return t}function V1(i,t){const e=new Mt;e.add(yt(new te(2.6,2.8,.5,8),O.blueStone(),0,.25,0));for(let r=0;r<8;r++){const o=r/8*Math.PI*2+Math.PI/8;e.add(qn(Math.cos(o)*2.1,Math.sin(o)*2.1,3,.13,.5))}for(const r of[0,Math.PI/4]){const o=mn({a:2.7,b:2.7,r:.05,h:1.6,lift:.55});o.position.y=3.6,o.rotation.y=r,e.add(o)}const n=yt(new Ut(.28,12,10),O.gold(),0,5.4,0);e.add(n);const s=xr(.9);s.position.y=3,e.add(s),e.position.set(i,0,t);for(let r=0;r<8;r++){const o=r/8*Math.PI*2+Math.PI/8;Un(i+Math.cos(o)*2.1,t+Math.sin(o)*2.1,.2)}return e}function G1(){const i=pt.well,t=new Mt,e=yt(new We(i.r+.25,.3,8,64),O.blueStone(),i.x,.15,i.z);e.rotation.x=Math.PI/2,t.add(e);const n=new tt(new xo(i.r+.5,i.r+7,48),new Ft({map:Ge(co(),6,6),roughness:.9}));n.rotation.x=-Math.PI/2,n.position.set(i.x,.02,i.z),n.receiveShadow=!0,t.add(n),bn.push(n);const s=i.r+3.2;for(const r of[-1,1])for(const o of[-1,1])t.add(V1(i.x+r*s,i.z+o*s));return t}function W1(){const i=pt.mound,t=new Mt,e=[];for(let g=0;g<=16;g++){const p=g/16;e.push(new Z(i.r*(1-p),i.h*(1-(1-p)*(1-p))))}const n=new tt(new Yn(e,48),new Ft({map:Ge(Oh(),6,3),roughness:1}));n.position.set(i.x,0,i.z),n.receiveShadow=!0,t.add(n),bn.push(n);const s=new Mt;s.position.set(i.x,i.h-.05,i.z),s.add(yt(new te(3.4,3.8,1,8),O.blueStone(),0,.5,0));const r=O.bronze(),o=O.gold(),a=2.2,c=new Mt;c.position.y=1,c.scale.setScalar(a),s.add(c);const l=yt(new Ut(1,24,16),r,0,.32,.15);l.scale.set(1.15,.34,.75);const h=yt(new Ut(.72,28,20),o,0,.95,.12);h.scale.set(1,.95,.92);const u=yt(new Ut(.6,24,16),r,0,1.38,-.05),d=yt(new Ut(.42,24,18),o,0,2.05,.05);d.scale.set(1.05,.98,1),c.add(l,h,u,d);for(const g of[-1,1]){const p=yt(new Ut(1,10,8),o,g*.42,2,.02);p.scale.set(.06,.2,.1);const y=yt(new vo(.17,.6,4,10),r,g*.72,1.25,.25);y.rotation.set(-.9,0,g*.5);const _=yt(new Ut(.16,12,10),o,g*.6,.78,.6);c.add(p,y,_)}const f=yt(new We(.16,.025,6,16,Math.PI),r,0,1.92,.44);f.rotation.z=Math.PI,c.add(f);for(const g of[-1,1]){const p=yt(new We(.06,.015,4,10,Math.PI),r,g*.15,2.12,.42);c.add(p)}const m=yt(new We(.5,.04,6,32),O.lacquer(),0,1.45,.12);m.rotation.x=1.1,c.add(m);const v=vr("maitreya");v&&c.clear().add(v),t.add(s),Un(i.x,i.z,3.9);for(let g=0;g<10;g++){const p=g/10,y=i.r*(1-p),_=i.h*(1-y/i.r*(y/i.r));t.add(_t(3,.3,1.3,O.blueStone(),i.x,_-.08,i.z+y))}return t}function $1(){const i=new Mt;for(const[t,e,n,s]of[[-9.4,"#6b5233","sword",.25],[9.4,"#5a4a2c","staff",-.25]]){const r=nh(e,n);r.scale.setScalar(1.35),r.position.set(t,0,pt.gateZ-3.6),r.rotation.y=s,i.add(r),Le(t,pt.gateZ-3.6,2.2,2)}return i}function q1(){const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,0.55)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);const n=new jn(i),s=new Mt;for(let r=0;r<40;r++){const o=r/40*Math.PI*2+Math.sin(r*7.1)*.1,a=170+r*37%90,c=new hp(new Ah({map:n,transparent:!0,depthWrite:!1,opacity:.8,fog:!0}));c.position.set(Math.cos(o)*a,8+r*13%14,Math.sin(o)*a-20),c.scale.set(120,30,1),s.add(c)}return s.userData.mist=!0,s}function Zp(i,t,e,n,s){const r=new tt(new ln(.7,.14,.55),new Oe({visible:!1}));return r.position.set(t,e-.05,n),r.rotation.y=s,ar.push({id:i,position:new w(t,e,n),facing:s,mesh:r,taken:!1}),r.userData.seat=i,r}function ih(i,t,e,n,s,r=0){const o=new Mt,a=yt(new We(e,.32,6,40),O.blueStone(),i,r+.42,t);a.rotation.x=Math.PI/2,a.scale.z=.35,o.add(a);for(let c=0;c<8;c++){const l=c/8*Math.PI*2;o.add(_t(.3,.38,.3,O.blueStone(),i+Math.cos(l)*e,r,t+Math.sin(l)*e))}for(let c=0;c<n;c++){const l=c/n*Math.PI*2,h=e+.05;o.add(Zp(`${s}-${c}`,i+Math.cos(l)*h,r+.52,t+Math.sin(l)*h,Math.atan2(Math.cos(l),Math.sin(l))))}return Un(i,t,e+.35),o}function fa(i,t,e,n){const s=new Mt,r=new Mt;for(const l of[-1,1])r.add(_t(1.7,.1,.5,O.blueStone(),0,.38,l*1)),r.add(_t(.3,.38,.4,O.blueStone(),-.6,0,l*1),_t(.3,.38,.4,O.blueStone(),.6,0,l*1));r.add(_t(.9,.45,.6,O.darkStone(),0,0,0)),r.add(yt(new Ut(.1,10,8),O.whiteStone(),0,.55,0)),r.rotation.y=e,r.position.set(i,0,t),s.add(r);const o=Math.cos(e),a=Math.sin(e),c=(l,h)=>[i+l*o+h*a,t-l*a+h*o];for(const l of[-1,1])for(const h of[-.4,.4]){const[u,d]=c(h,l*1);s.add(Zp(`${n}-${l}-${h}`,u,.48,d,e+(l>0?Math.PI:0)))}return Un(i,t,1.5),s}function X1(){return new Ft({color:"#c8283a",emissive:"#7a0d1a",emissiveIntensity:.25,roughness:.6,side:De})}function j1(i,t){const e=new Mt;e.add(cs(i,t,1.25));const n=X1(),s=new qe(.12,1);let r=3;const o=()=>((r=r*16807%2147483647)-1)/2147483646;for(let c=0;c<160;c++){const l=o()*Math.PI*2,h=2.2+o()*3.6,u=.6+o()*.9,d=new tt(s,n);d.scale.y=u,d.position.set(i+Math.cos(l)*h,5.8-u/2-o()*.6,t+Math.sin(l)*h),d.rotation.y=o()*Math.PI,e.add(d)}e.add(ih(i,t,3.4,12,"duyen"));const a=vs(["姻緣樹","CÂY DUYÊN"],2.2,.55);return a.position.set(i,1.6,t+3.95),e.add(a),e.add(_t(.12,1.4,.12,O.timber(),i-.9,0,t+3.9),_t(.12,1.4,.12,O.timber(),i+.9,0,t+3.9)),e}function rf(i,t){const e=new Mt,n=new tt(new te(.05,.07,6,6),new Ft({color:"#b8a26a",roughness:.7}));n.position.y=3,e.add(n);const s=document.createElement("canvas");s.width=160,s.height=64;const r=s.getContext("2d");["#2b5fae","#f2c230","#c8322a","#f4f1e8","#e8812a"].forEach((l,h)=>{r.fillStyle=l,r.fillRect(h*32,0,32,64)});const a=new jn(s);a.colorSpace=Ee;const c=new tt(new qe(1.6,.65,8,1),new Ft({map:a,side:De,roughness:.8}));return c.geometry.translate(.8,0,0),c.position.set(.04,5.5,0),c.userData.sway=i*.3+t*.1,c.userData.flag=!0,Wh.push(c),e.add(c),e.position.set(i,0,t),e}class Y1{points;base;n=26;constructor(t){this.base=t;const e=t.length*this.n,n=new ye;n.setAttribute("position",new Ue(new Float32Array(e*3),3));const s=document.createElement("canvas");s.width=s.height=64;const r=s.getContext("2d"),o=r.createRadialGradient(32,32,0,32,32,32);o.addColorStop(0,"rgba(235,235,230,0.55)"),o.addColorStop(1,"rgba(235,235,230,0)"),r.fillStyle=o,r.fillRect(0,0,64,64),this.points=new $a(n,new go({map:new jn(s),size:.9,transparent:!0,opacity:.55,depthWrite:!1})),this.points.frustumCulled=!1}update(t){const e=this.points.geometry.attributes.position;let n=0;for(const s of this.base)for(let r=0;r<this.n;r++){const o=(t*.18+r/this.n)%1,a=o*4.5;e.setXYZ(n++,s.x+Math.sin(t*.6+r)*.25*o+o*.8,s.y+a,s.z+Math.cos(t*.5+r*1.7)*.25*o)}e.needsUpdate=!0}}class K1{group=new Mt;birds=[];constructor(t=9){const e=new ye;e.setAttribute("position",new jt([0,0,.3,-.9,.15,-.1,0,0,-.2,0,0,.3,.9,.15,-.1,0,0,-.2],3)),e.computeVertexNormals();const n=new Oe({color:"#2a2a2a",side:De});for(let s=0;s<t;s++){const r=new tt(e,n);r.scale.setScalar(1.3),this.group.add(r),this.birds.push({m:r,phase:s*.45,r:60+s%3*8,h:34+s%4*2.5,speed:.05+s%2*.006})}}update(t,e){if(this.group.visible=e,!!e)for(const n of this.birds){const s=t*n.speed+n.phase*.12;n.m.position.set(Math.cos(s)*n.r,n.h+Math.sin(t*.5+n.phase)*1.5,Math.sin(s)*n.r+20),n.m.rotation.y=-s,n.m.scale.y=1.3*(.6+Math.abs(Math.sin(t*6+n.phase))*.8)}}}function J1(){const i=new Mt;i.add(e1(),a1(),L1(),q1());const t=pt.frontLake;i.add(H1()),i.add($c(t.x,t.z,t.rx,t.rz,120,l=>Math.abs(l)<pt.causeway.half+3)),i.add(S1(),$1());const e=pt.avenue;for(let l=e.z1-5;l>=e.z0+2;l-=5.5)i.add(jd(-3.2-1,l),jd(e.half+1,l));for(let l=e.z1-8;l>=e.z0+4;l-=11)i.add(oa(-3.2-4.5,l,1.1),oa(e.half+4.5,l-5.5,1.1));i.add(Qd(-9,92),Qd(9,92));for(let l=e.z1-10;l>=e.z0+4;l-=11)i.add(rf(-3.2-2.3,l),rf(e.half+2.3,l));const n=pt.halfMoon;i.add($c(n.x-n.r*.38,n.z,n.r*.32,n.r*.85,26)),i.add(cs(-34,70,1.4),cs(24,82,1.2));for(const[l,h]of[[14,70],[17,64],[20,92],[-14,64]])i.add(qd(l,h,1.1));i.add(Kd(-15,52,"bell"),Kd(15,52,"drum")),i.add(w1(0,33)),i.add(cs(-17,40,1.15),cs(17,22,1)),i.add(ih(-17,40,3,10,"ring-a"),ih(17,22,2.8,10,"ring-b")),i.add(fa(-8,29,0,"yard-a"),fa(9,44,0,"yard-b"));for(const l of[-1,1])i.add(Zd(l,pt.corridorGap.z1,58),Zd(l,pt.corridorStart,pt.corridorGap.z0));for(const l of[-20,-12,12,20])i.add(qd(l,18,.9));const s=pt.terrace;i.add(Jd(s,0,pt.upper.x1)),i.add(Yd(-s.stairHalf-2,s.z1+s.stairLen+1.2,0),Yd(s.stairHalf+2,s.z1+s.stairLen+1.2,0)),i.add(z1());for(const l of[-25,25])for(const h of[8,-10,-38]){const u=oa(l,h,1.15);u.position.y=s.y,i.add(u)}const r=pt.upper;i.add(Jd(r,s.y)),i.add(T1(0,-62,r.y));for(const[l,h]of[[-10,-52],[10,-52],[-10,-70],[10,-70]])i.add(qc(l,h,1.1,r.y));for(let l=0;l<14;l++)i.add(qc(-22+l%7*7.5+(l>6?3:0),-78+(l>6?-3:0),1.3));for(const[l,h]of[[-36,50],[-44,40],[-50,24],[-38,12],[-48,2],[-36,-10],[-56,-12],[-40,-56],[-52,-62]])i.add(qc(l,h,1.2));for(const[l,h]of[[-34,-2],[-52,46],[-56,-56],[-34,62],[-28,-60]])i.add($d(l,h,16));i.add(kr(-40,30,Math.PI/2,"garden-a"),kr(-42,6,Math.PI/2,"garden-b")),i.add(G1());const o=pt.lake;i.add(E1(),A1()),i.add($c(o.x,o.z,o.rx,o.rz,200,(l,h)=>Math.abs(h-pt.bridge.z)<2&&l<o.x+3||Math.hypot(l-o.x,h-o.z)<3.4)),i.add(C1(50,-18),W1()),i.add(R1(40,44)),i.add(kr(33,0,1.9,"lake-a"),kr(66,18,-1.4,"lake-b"),kr(58,36,-2.6,"lake-c")),i.add(j1(63,-15)),i.add(fa(38,-8,.6,"lake-d"),fa(62,30,-.8,"lake-e")),i.add(cs(68,4,1.1),cs(64,46,.9));for(const[l,h]of[[68,30],[36,56],[64,-28],[36,-26],[68,-66],[30,-70]])i.add($d(l,h,14));for(const[l,h]of[[46,54],[54,56],[30,52]])i.add(oa(l,h,1));const a=l1();i.add(a),Z1(i);const c=[new w(0,3,96),new w(0,3,72),new w(0,4,30),new w(0,6,-2),new w(50,3.4,-14.5),new w(40,2.6,44),new w(50,2.6,12)];return{root:i,fireflies:a,lights:c}}function Z1(i){i.updateMatrixWorld(!0);const t=new Set([...bn,...ti,...ar.map(a=>a.mesh)]),e=new Set(Wh),n=new Map,s=[],r=[];i.traverse(a=>{if(!(a instanceof tt)||a instanceof Ei||Array.isArray(a.material))return;const c=a.material;if(!c.visible||c.onBeforeCompile.toString().includes("uTime"))return;const l=c.vertexColors;if(l&&!a.geometry.attributes.color)return;for(let d=a;d;d=d.parent)if(e.has(d))return;let h=a.geometry.clone().applyMatrix4(a.matrixWorld);h.index&&(h=h.toNonIndexed());for(const d of Object.keys(h.attributes))["position","normal","uv",...l?["color"]:[]].includes(d)||h.deleteAttribute(d);if(l){const d=h.attributes.color,f=new Float32Array(d.count*3);for(let m=0;m<d.count;m++)f.set([d.getX(m),d.getY(m),d.getZ(m)],m*3);h.setAttribute("color",new jt(f,3))}h.attributes.normal||h.computeVertexNormals(),h.attributes.uv||h.setAttribute("uv",new jt(new Float32Array(h.attributes.position.count*2),2)),h.morphAttributes={};const u=n.get(c)??[];u.push(h),n.set(c,u),t.has(a)?r.push(a):s.push(a)});for(const a of s)a.removeFromParent();const o=new Oe({visible:!1});for(const a of r)a.material=o;for(const[a,c]of n){const l=Ya(c,!1);if(!l)continue;const h=new tt(l,a);h.castShadow=!0,h.receiveShadow=!0,i.add(h)}}const of=[{f1:700,f2:1200,step:0,len:.85,nasalStart:!0,nasalEnd:!0},{f1:430,f2:820,step:0,len:.85,nasalStart:!0},{f1:720,f2:1250,step:2,len:.85},{f1:300,f2:2100,step:2,len:.8,burst:"d"},{f1:700,f2:1150,step:0,len:.85,burst:"d"},{f1:620,f2:1180,step:-2,len:.7,burst:"f"}];class Q1{ctx=null;master=null;cicadas=null;bellTimer=0;lifeTimer=0;night=0;indoor=!1;nextBird=0;nextFrog=0;nextCricket=0;volume=1;playing=!1;setVolume(t){this.volume=t,this.playing&&this.ctx&&this.master&&this.master.gain.setTargetAtTime(.9*t,this.ctx.currentTime,.15)}start(){this.ctx||this.build(),this.playing=!0,this.ctx.resume(),this.master.gain.setTargetAtTime(.9*this.volume,this.ctx.currentTime,.8),clearInterval(this.bellTimer),this.bellTimer=window.setInterval(()=>this.bell(.12),45e3),setTimeout(()=>this.bell(.16),1200),clearInterval(this.lifeTimer),this.lifeTimer=window.setInterval(()=>this.life(),200)}stop(){this.playing=!1,!(!this.ctx||!this.master)&&(this.master.gain.setTargetAtTime(0,this.ctx.currentTime,.4),clearInterval(this.bellTimer),clearInterval(this.lifeTimer))}setScene(t,e){if(this.night=t,this.indoor=e,this.ctx&&this.cicadas){const n=Math.max(0,1-t*2);this.cicadas.gain.setTargetAtTime(n*(e?.012:.035),this.ctx.currentTime,2)}}life(){const t=this.ctx;if(!t)return;const e=t.currentTime,n=this.indoor?.35:1;this.night<.5&&e>this.nextBird&&(this.bird(n*(.5+Math.random()*.5)),this.nextBird=e+2.5+Math.random()*6),this.night>.5&&e>this.nextCricket&&(this.cricket(n),this.nextCricket=e+.5+Math.random()*.6),this.night>.4&&e>this.nextFrog&&(this.frog(n*(.5+Math.random()*.5)),this.nextFrog=e+(Math.random()<.4?.4:2+Math.random()*5))}voice(t,e){const n=this.ctx,s=n.createStereoPanner();s.pan.value=t;const r=n.createGain();return r.gain.value=e,r.connect(s).connect(this.master),r}bird(t){const e=this.ctx,n=this.voice(Math.random()*1.6-.8,.05*t);let s=e.currentTime+.05;const r=2200+Math.random()*1800,o=3+Math.floor(Math.random()*5);for(let a=0;a<o;a++){const c=.06+Math.random()*.1,l=e.createOscillator(),h=r*(.8+Math.random()*.5);l.frequency.setValueAtTime(h,s),l.frequency.exponentialRampToValueAtTime(h*(Math.random()<.5?1.35:.75),s+c);const u=e.createGain();u.gain.setValueAtTime(0,s),u.gain.linearRampToValueAtTime(1,s+.012),u.gain.exponentialRampToValueAtTime(.001,s+c),l.connect(u).connect(n),l.start(s),l.stop(s+c+.02),s+=c+.03+Math.random()*.08}}cricket(t){const e=this.ctx,n=this.voice(Math.random()*1.2-.6,.02*t),s=4300+Math.random()*500;for(let r=0;r<3;r++){const o=e.currentTime+r*.045,a=e.createOscillator();a.frequency.value=s;const c=e.createGain();c.gain.setValueAtTime(0,o),c.gain.linearRampToValueAtTime(1,o+.005),c.gain.exponentialRampToValueAtTime(.001,o+.03),a.connect(c).connect(n),a.start(o),a.stop(o+.04)}}frog(t){const e=this.ctx,n=e.currentTime,s=this.voice(Math.random()*1.4-.7,.07*t),r=.12+Math.random()*.12,o=e.createOscillator();o.type="sawtooth";const a=150+Math.random()*120;o.frequency.setValueAtTime(a,n),o.frequency.linearRampToValueAtTime(a*1.15,n+r);const c=e.createBiquadFilter();c.type="bandpass",c.frequency.value=600,c.Q.value=3;const l=e.createGain();l.gain.value=.5;const h=e.createOscillator();h.frequency.value=28+Math.random()*12;const u=e.createGain();u.gain.value=.5,h.connect(u).connect(l.gain);const d=e.createGain();d.gain.setValueAtTime(0,n),d.gain.linearRampToValueAtTime(1,n+.02),d.gain.setValueAtTime(1,n+r-.03),d.gain.linearRampToValueAtTime(0,n+r),o.connect(c).connect(l).connect(d).connect(s),o.start(n),h.start(n),o.stop(n+r+.02),h.stop(n+r+.02)}build(){const t=new AudioContext;this.ctx=t,this.master=t.createGain(),this.master.gain.value=0,this.master.connect(t.destination);const e=t.sampleRate*2,n=t.createBuffer(1,e,t.sampleRate),s=n.getChannelData(0);for(let f=0;f<e;f++)s[f]=Math.random()*2-1;const r=t.createBufferSource();r.buffer=n,r.loop=!0;const o=t.createBiquadFilter();o.type="bandpass",o.frequency.value=5200,o.Q.value=6;const a=t.createGain();a.gain.value=.5;const c=t.createOscillator();c.frequency.value=46;const l=t.createGain();l.gain.value=.5,c.connect(l).connect(a.gain);const h=t.createGain();h.gain.value=.6;const u=t.createOscillator();u.frequency.value=.09;const d=t.createGain();d.gain.value=.4,u.connect(d).connect(h.gain),this.cicadas=t.createGain(),this.cicadas.gain.value=0,r.connect(o).connect(a).connect(h).connect(this.cicadas).connect(this.master),r.start(),c.start(),u.start(),this.setScene(this.night,this.indoor)}get on(){return this.playing&&!!this.ctx&&this.ctx.state==="running"&&this.volume>.01}mo(t=.5){const e=this.ctx;if(!e||!this.master)return;const n=e.currentTime,s=e.createOscillator();s.type="sine",s.frequency.setValueAtTime(760,n),s.frequency.exponentialRampToValueAtTime(420,n+.08);const r=e.createGain();r.gain.setValueAtTime(t,n),r.gain.exponentialRampToValueAtTime(1e-4,n+.18),s.connect(r).connect(this.master),s.start(n),s.stop(n+.2)}bead(){const t=this.ctx;if(!t||!this.master)return;const e=t.currentTime;for(const[n,s]of[[1900,.05],[1350,.07]]){const r=t.createOscillator();r.frequency.value=n;const o=t.createGain();o.gain.setValueAtTime(.18,e),o.gain.exponentialRampToValueAtTime(1e-4,e+s),r.connect(o).connect(this.master),r.start(e),r.stop(e+s+.01)}}chant(t,e=.5){const n=this.ctx;if(!n||!this.master)return;const s=of[t%of.length],r=n.currentTime+.02,o=s.len,a=98*Math.pow(2,s.step/12),c=n.createGain();c.gain.setValueAtTime(0,r),c.gain.linearRampToValueAtTime(e*.24,r+(s.nasalStart?.09:.04)),c.gain.setValueAtTime(e*.24,r+o*.7),c.gain.exponentialRampToValueAtTime(8e-4,r+o),c.connect(this.temple());const l=n.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(s.nasalStart?500:3500,r),l.frequency.linearRampToValueAtTime(3500,r+.08),s.nasalEnd&&l.frequency.setTargetAtTime(380,r+o*.55,.06),l.connect(c);for(const[h,u,d]of[[s.f1,6,1],[s.f2,9,.5]]){const f=n.createBiquadFilter();f.type="bandpass",f.frequency.value=h,f.Q.value=u;const m=n.createGain();m.gain.value=d,f.connect(m).connect(l);for(const[v,g]of[[-9,1],[0,1],[7,1],[3,2]]){const p=n.createOscillator();p.type="sawtooth",p.frequency.value=a*g,p.detune.value=v+(Math.random()-.5)*6;const y=n.createOscillator();y.frequency.value=4.5+Math.random();const _=n.createGain();_.gain.value=4,y.connect(_).connect(p.detune);const x=n.createGain();x.gain.value=g===2?.35:1,p.connect(x).connect(f),p.start(r),y.start(r),p.stop(r+o+.05),y.stop(r+o+.05)}}if(s.burst){const h=n.createBufferSource();h.buffer=this.noise();const u=n.createBiquadFilter();u.type="highpass",u.frequency.value=s.burst==="f"?1800:600;const d=n.createGain();d.gain.setValueAtTime(e*(s.burst==="f"?.05:.08),r),d.gain.exponentialRampToValueAtTime(5e-4,r+(s.burst==="f"?.1:.03)),h.connect(u).connect(d).connect(this.temple()),h.start(r),h.stop(r+.12)}}reverb=null;noiseBuf=null;temple(){const t=this.ctx;if(!this.reverb){const e=t.sampleRate*3,n=t.createBuffer(2,e,t.sampleRate);for(let o=0;o<2;o++){const a=n.getChannelData(o);for(let c=0;c<e;c++)a[c]=(Math.random()*2-1)*Math.pow(1-c/e,3)}this.reverb=t.createConvolver(),this.reverb.buffer=n;const s=t.createGain();s.gain.value=.55,this.reverb.connect(s).connect(this.master);const r=t.createGain();r.connect(this.reverb),r.connect(this.master),this.templeIn=r}return this.templeIn}templeIn=null;noise(){const t=this.ctx;if(!this.noiseBuf){this.noiseBuf=t.createBuffer(1,t.sampleRate*.2,t.sampleRate);const e=this.noiseBuf.getChannelData(0);for(let n=0;n<e.length;n++)e[n]=Math.random()*2-1}return this.noiseBuf}bell(t=.3){const e=this.ctx;if(!e||!this.master)return;const n=e.currentTime;for(const[s,r,o]of[[110,1,9],[221,.5,7],[297,.35,5],[442,.2,3.5],[663,.1,2]]){const a=e.createOscillator();a.frequency.value=s;const c=e.createGain();c.gain.setValueAtTime(0,n),c.gain.linearRampToValueAtTime(t*r,n+.02),c.gain.exponentialRampToValueAtTime(1e-4,n+o),a.connect(c).connect(this.master),a.start(n),a.stop(n+o)}}}const sh="anduyen.cid",Yh="anduyen.adopt";function Qp(i){try{localStorage.setItem(sh,i),localStorage.setItem(Yh,"1")}catch{}location.reload()}function tS(){try{for(const i of Object.keys(localStorage))i.startsWith("anduyen.")&&i!=="anduyen.settings"&&i!=="anduyen.hint"&&localStorage.removeItem(i)}catch{}location.reload()}function eS(){try{return localStorage.getItem(Yh)==="1"}catch{return!1}}function nS(){try{localStorage.removeItem(Yh)}catch{}}function tm(){try{let i=localStorage.getItem(sh);return i||(i=crypto.randomUUID(),localStorage.setItem(sh,i)),i}catch{return af??=crypto.randomUUID(),af}}let af;class iS{constructor(t,e,n){this.hello=t,this.onMsg=e,this.onStatus=n,this.open()}ws=null;retry=1e3;myId=0;myPid="";room="";connected=!1;open(){const t="wss://didenchua.online/ws",e=new WebSocket(t);this.ws=e,e.onopen=()=>{this.retry=1e3,this.connected=!0,this.onStatus(!0),e.send(JSON.stringify({t:"hello",cid:tm(),adopt:eS(),...this.hello()}))},e.onmessage=n=>{let s;try{s=JSON.parse(n.data)}catch{return}s.t==="welcome"&&(this.myId=s.id,this.myPid=s.pid,this.room=s.room),this.onMsg(s)},e.onclose=()=>{this.connected=!1,this.onStatus(!1),setTimeout(()=>this.open(),this.retry),this.retry=Math.min(this.retry*2,15e3)}}send(t){this.ws?.readyState===WebSocket.OPEN&&this.ws.send(JSON.stringify(t))}}function em(i="tieu",t="nau",e="dong"){const n=yn[t]??yn.nau,s=(ds[e]??ds.dong)[0];return`<svg viewBox="0 0 64 64" aria-hidden="true">
    <defs><radialGradient id="avbg" cx="50%" cy="38%" r="65%"><stop offset="0" stop-color="#f6dfb4"/><stop offset="1" stop-color="#c99a5c"/></radialGradient></defs>
    <circle cx="32" cy="32" r="32" fill="url(#avbg)"/>
    <path d="M10 64c1-14 9-22 22-22s21 8 22 22z" fill="${n}"/>
    <path d="M20 48c8 6 18 9 26 6" stroke="#dba53e" stroke-width="4" fill="none" stroke-linecap="round"/>
    <circle cx="15.5" cy="28" r="3.6" fill="${s}"/><circle cx="48.5" cy="28" r="3.6" fill="${s}"/>
    <circle cx="32" cy="27" r="16.5" fill="${s}"/>
    <ellipse cx="32" cy="22" rx="10" ry="6" fill="#fff" opacity="0.12"/>
    ${i==="ni"?'<path d="M15.5 25a16.5 16.5 0 0 1 33 0c-5-3-28-3-33 0z" fill="#8f8a80"/>':""}
    <path d="M24.5 30q2.5 2.4 5 0M34.5 30q2.5 2.4 5 0" stroke="#2a211b" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <path d="M29.5 35.5q2.5 1.6 5 0" stroke="#7a3b22" stroke-width="1.3" fill="none" stroke-linecap="round"/>
  </svg>`}class sS{el=document.createElement("div");canvas=document.createElement("canvas");renderer=null;scene=new Eh;camera=new Ze(28,1,.1,20);monk=null;cushion;turn=new Mt;raf=0;last=0;spin=.5;idle=99;pose="sit";look=null;constructor(){this.el.className="stage",this.canvas.setAttribute("aria-label","Nhân vật của bạn, kéo để xoay");const t=document.createElement("div");t.className="stage-hint",t.textContent="Kéo để xoay nhân vật",this.el.append(this.canvas,t),this.scene.add(new wp("#fff1d8","#6a4a2c",2));const e=new Oa("#ffe2b8",3);e.position.set(-1.5,2.5,3);const n=new Oa("#ffc46b",2.4);n.position.set(1.2,1.8,-2.5),this.scene.add(e,n);const s=[[0,0],[.4,0],[.47,.03],[.5,.08],[.48,.13],[.4,.16],[0,.17]].map(([h,u])=>new Z(h,u));this.cushion=new tt(new Yn(s,40),new Ft({roughness:.9}));const r=new tt(new We(.49,.012,6,48),new Ft({color:"#e9c27a",roughness:.5,metalness:.3}));r.rotation.x=Math.PI/2,r.position.y=.085,this.cushion.add(r);const o=document.createElement("canvas");o.width=o.height=64;const a=o.getContext("2d"),c=a.createRadialGradient(32,32,4,32,32,32);c.addColorStop(0,"rgba(0,0,0,0.45)"),c.addColorStop(1,"rgba(0,0,0,0)"),a.fillStyle=c,a.fillRect(0,0,64,64);const l=new tt(new qe(1.5,1.5),new Oe({map:new jn(o),transparent:!0,depthWrite:!1}));l.rotation.x=-Math.PI/2,l.position.y=.002,this.turn.add(this.cushion),this.scene.add(l,this.turn),this.camera.position.set(0,1.05,3.6),this.camera.lookAt(0,.55,0),this.rebind()}setLook(t){this.look={...t},this.monk?this.monk.setLook(t):(this.monk=new Bh(t),this.turn.add(this.monk.root)),this.cushion.material.color.set((Jn[t.cushion??"xam"]??Jn.xam).color),this.setPose(this.pose)}setPose(t){this.pose=t,this.monk&&(this.monk.state=t==="stand"?"idle":"sit",this.monk.root.position.set(0,t==="stand"?0:.17,t==="stand"?.3:0),t==="bow"&&this.monk.bow())}start(){if(this.raf)return;this.renderer||(this.renderer=new ap({canvas:this.canvas,antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),this.renderer.toneMapping=dh,this.renderer.setPixelRatio(Math.min(devicePixelRatio,2))),this.last=performance.now();const t=e=>{this.raf=requestAnimationFrame(t),this.frame(Math.min((e-this.last)/1e3,.05),e/1e3),this.last=e};this.raf=requestAnimationFrame(t)}stop(){if(cancelAnimationFrame(this.raf),this.raf=0,this.renderer){this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=null;const t=this.canvas.cloneNode();this.canvas.replaceWith(t),this.canvas=t,this.rebind()}}rebind(){let t=null;this.canvas.addEventListener("pointerdown",n=>{t=n.clientX,this.canvas.setPointerCapture(n.pointerId)}),this.canvas.addEventListener("pointermove",n=>{t!==null&&(this.turn.rotation.y+=(n.clientX-t)*.012,t=n.clientX,this.idle=0)});const e=()=>t=null;this.canvas.addEventListener("pointerup",e),this.canvas.addEventListener("pointercancel",e)}frame(t,e){const n=this.renderer;if(!n||!this.monk)return;const s=this.canvas.clientWidth,r=this.canvas.clientHeight;!s||!r||((this.canvas.width!==Math.round(s*n.getPixelRatio())||this.canvas.height!==Math.round(r*n.getPixelRatio()))&&(n.setSize(s,r,!1),this.camera.aspect=s/r,this.camera.updateProjectionMatrix()),this.idle+=t,this.idle>2&&(this.turn.rotation.y+=t*this.spin),this.monk.update(t,e,0),this.pose==="bow"&&!this.monk.busy&&this.monk.bow(),n.render(this.scene,this.camera))}save(t){this.renderer&&(this.renderer.render(this.scene,this.camera),this.canvas.toBlob(e=>{if(!e)return;const n=document.createElement("a");n.href=URL.createObjectURL(e),n.download=`an-duyen-${t.replace(/\s+/g,"-").toLowerCase()}.png`,n.click(),setTimeout(()=>URL.revokeObjectURL(n.href),2e3)},"image/png"))}get current(){return this.look}}const cf=i=>i.charAt(0).toUpperCase()+i.slice(1),rS=["Sơ tâm","Phát tâm","Tinh tấn","Hoan hỷ","An lạc","Thanh tịnh","Viên mãn"],lf=i=>`<svg viewBox="0 0 32 32"><path d="M7 29c0-9 4-15 9-15s9 6 9 15z" fill="${i}"/><path d="M11 18c4 3 8 4 11 3" stroke="#dba53e" stroke-width="2.4" fill="none" stroke-linecap="round"/><circle cx="16" cy="10" r="6" fill="#d9875a"/></svg>`,hf=i=>`<svg viewBox="0 0 32 32">${Array.from({length:12},(t,e)=>{const n=e/12*Math.PI*2;return`<circle cx="${(16+Math.cos(n)*10).toFixed(1)}" cy="${(16+Math.sin(n)*10).toFixed(1)}" r="2.9" fill="${i}" stroke="rgba(0,0,0,.25)" stroke-width=".6"/>`}).join("")}<circle cx="16" cy="29" r="2.6" fill="${i}"/></svg>`,uf=i=>`<svg viewBox="0 0 32 32"><ellipse cx="16" cy="19" rx="13" ry="6.5" fill="${i}"/><ellipse cx="16" cy="16.5" rx="12" ry="5" fill="${i}" stroke="rgba(255,255,255,.25)" stroke-width=".8"/><ellipse cx="16" cy="16.5" rx="10" ry="3.6" fill="none" stroke="#e9c27a" stroke-width=".8"/></svg>`;class oS{constructor(t,e){this.h=e,this.el.className="sheet journal",this.el.addEventListener("keydown",n=>n.stopPropagation()),t.appendChild(this.el)}el=document.createElement("div");j=null;tab="me";showCode=!1;form="none";stage=new sS;pose="sit";get isOpen(){return this.el.classList.contains("open")}open(t="me"){this.tab=t,this.form="none",this.showCode=!1,this.h.send({t:"journal"}),this.render(),this.el.classList.add("open")}close(){this.el.classList.remove("open"),this.stage.stop()}update(t){this.j=t,t.user&&this.form==="create"&&(this.form="none"),this.isOpen&&this.render()}error(t){const e=this.el.querySelector(".form-err");e&&(e.textContent=t),this.el.querySelectorAll("form button").forEach(n=>n.disabled=!1)}render(){const t=[["me","Của tôi"],["gear","Bộ sưu tập"],["titles","Danh hiệu"],["account","Tài khoản"]].map(([s,r])=>`<button data-tab="${s}" class="${this.tab===s?"on":""}">${r}</button>`).join(""),e=this.j?{me:()=>this.mine(),gear:()=>this.gear(),titles:()=>this.titles(),account:()=>this.account()}[this.tab]():'<p class="sheet-sub">Đang kết nối với chùa…</p>';this.el.innerHTML=`
      <button class="sheet-close" aria-label="Đóng">×</button>
      <div class="sheet-title">Hồ sơ tu tập</div>
      <div class="tabs">${t}</div>
      <div class="tab-body">${e}</div>`;const n=this.el.querySelector(".stage-slot");n?(n.replaceWith(this.stage.el),this.stage.setLook(this.h.profile()),this.stage.setPose(this.pose),this.stage.start()):this.stage.stop(),this.wire()}mine(){const t=this.j,e=this.h.profile(),n=t.titles.find(h=>h.id===t.title)?.name??"",s=t.next!==null?Math.round((t.merit-t.from)/(t.next-t.from)*100):100,r=h=>h.toLocaleString("vi-VN"),o=(h,u)=>`<div><b>${h}</b><span>${u}</span></div>`,a=Rn[e.beads??"go"]??Rn.go,c=Jn[e.cushion??"xam"]??Jn.xam;return`
      <div class="showcase">
        <div class="stage-slot"></div>
        <div class="pose-row"><div class="seg">${[["sit","Ngồi thiền"],["stand","Đứng"],["bow","Chắp tay"]].map(([h,u])=>`<button data-pose="${h}" class="${this.pose===h?"on":""}">${u}</button>`).join("")}</div><button class="ghost small" data-act="photo">Lưu ảnh</button></div>
        <div class="worn">
          <button data-act="gear">${lf(yn[e.robe]??yn.nau)}<span><small>Áo</small>${Vd[e.robe]??"Áo nâu"}</span></button>
          <button data-act="gear">${hf(a.color)}<span><small>Tràng hạt</small>${a.name.replace("Tràng hạt ","Hạt ")}</span></button>
          <button data-act="gear">${uf(c.color)}<span><small>Bồ đoàn</small>${cf(c.name.replace("Bồ đoàn ",""))}</span></button>
        </div>
      </div>
      <div class="card-head">
        <div class="avatar">${em(e.kind,e.robe,e.skin)}</div>
        <div class="card-who">
          <b>${pa(t.name)}</b>
          <span><em>${t.level}</em>${n?` · ${n}`:""}</span>
          <small>${t.user?`Tài khoản @${pa(t.user)}`:"Chưa có tài khoản"}</small>
        </div>
      </div>
      <div class="level-bar">
        <div class="bar"><i style="width:${s}%"></i></div>
        <small>${t.next!==null?`${r(t.merit)} / ${r(t.next)} công đức đến cấp tiếp theo`:`${r(t.merit)} công đức · cấp cao nhất`}</small>
      </div>
      <div class="stat-grid">
        ${o(r(t.bows),"Lạy Phật")}
        ${o(r(t.rounds),`Chuỗi tràng hạt (${r(t.beads)} hạt)`)}
        ${o(r(t.sitMin),"Phút ngồi tĩnh")}
        ${o(String(t.streak),`Ngày liên tiếp (kỷ lục ${t.best})`)}
        ${o(`${t.visited}/${t.zones}`,"Khu đã viếng")}
        ${o(r(t.days),"Ngày đồng hành")}
        ${o(r(t.incense),"Lần dâng hương")}
        ${o(r(t.lanterns),"Hoa đăng đã thả")}
      </div>
      <div class="card-main">
        <button class="primary" data-act="share">Khoe thành tích</button>
        <button class="ghost" data-act="edit">Sửa nhân vật</button>
      </div>`}gear(){const t=this.h.profile(),e=this.j.lv,n=(l,h,u,d,f,m)=>{const v=e>=f;return`<button class="gear-item ${m?"on":""} ${v?"":"locked"}" data-equip="${l}:${h}" ${v?"":"disabled"}>
        ${d}<b>${u}</b><small>${m?"Đang dùng":v?"Dùng":`Mở ở cấp ${rS[f]}`}</small></button>`},s=Object.keys(yn).map(l=>n("robe",l,Vd[l],lf(yn[l]),0,t.robe===l)).join(""),r=Object.keys(Rn).map(l=>n("beads",l,Rn[l].name.replace("Tràng hạt ","Hạt "),hf(Rn[l].color),Rn[l].lv,(t.beads??"go")===l)).join(""),o=Object.keys(Jn).map(l=>n("cushion",l,cf(Jn[l].name.replace("Bồ đoàn ","")),uf(Jn[l].color),Jn[l].lv,(t.cushion??"xam")===l)).join(""),a=Object.values(Rn).filter(l=>l.lv<=e).length+Object.values(Jn).filter(l=>l.lv<=e).length+Object.keys(yn).length,c=Object.keys(Rn).length+Object.keys(Jn).length+Object.keys(yn).length;return`
      <p class="sheet-sub">Đã có ${a}/${c} món. Tu tập lên cấp để mở thêm tràng hạt và bồ đoàn quý. Tràng hạt mọi người đều nhìn thấy trên nhân vật của bạn.</p>
      <div class="field-label">Áo</div><div class="gear-grid">${s}</div>
      <div class="field-label">Tràng hạt</div><div class="gear-grid">${r}</div>
      <div class="field-label">Bồ đoàn</div><div class="gear-grid">${o}</div>`}titles(){const t=this.j;return`
      <p class="sheet-sub">Đã đạt ${t.titles.filter(n=>n.got).length}/${t.titles.length} danh hiệu. Chọn một danh hiệu để hiện trên hồ sơ của bạn.</p>
      <div class="title-list">${t.titles.map(n=>`<button class="title-row ${n.got?"got":""} ${n.id===t.title?"on":""}" data-title="${n.id}" ${n.got?"":"disabled"}>
            <b>${n.name}</b><small>${n.desc}</small><span>${n.id===t.title?"Đang dùng":n.got?"Dùng":"Chưa đạt"}</span>
          </button>`).join("")}</div>`}account(){const t=this.j,e=this.h.code();return`
      ${t.user?`<div class="acct-box ok"><b>Đã có tài khoản @${pa(t.user)}</b><small>Đăng nhập tài khoản này ở máy khác để tiếp tục tu tập, công đức và bạn bè vẫn giữ nguyên.</small>
          <button class="ghost small" data-form="passwd">Đổi mật khẩu</button></div>`:`<div class="acct-box"><b>Chưa có tài khoản đăng nhập</b><small>Tạo tên đăng nhập và mật khẩu để không mất công đức khi đổi máy hay xoá dữ liệu trình duyệt.</small>
          <button class="primary small" data-form="create">Tạo ngay</button></div>`}
      ${{create:`<form data-send="register">
          <div class="field-label">Tạo tài khoản</div>
          <input name="user" autocomplete="username" autocapitalize="none" spellcheck="false" maxlength="20" placeholder="Tên đăng nhập (vd: minhtam)" required>
          <input name="pass" type="password" autocomplete="new-password" maxlength="64" placeholder="Mật khẩu (ít nhất 6 ký tự)" required>
          <input name="pass2" type="password" autocomplete="new-password" maxlength="64" placeholder="Nhập lại mật khẩu" required>
          <p class="form-err"></p><button class="primary">Tạo tài khoản</button></form>`,login:`<form data-send="login">
          <div class="field-label">Đăng nhập tài khoản khác trên máy này</div>
          <input name="user" autocomplete="username" autocapitalize="none" spellcheck="false" maxlength="20" placeholder="Tên đăng nhập" required>
          <input name="pass" type="password" autocomplete="current-password" maxlength="64" placeholder="Mật khẩu" required>
          <p class="form-err"></p><button class="primary">Đăng nhập</button></form>`,code:`<form data-send="code">
          <div class="field-label">Dùng mã khôi phục</div>
          <input name="code" autocomplete="off" autocapitalize="none" spellcheck="false" maxlength="64" placeholder="Dán mã khôi phục" required>
          <p class="form-err"></p><button class="primary">Vào bằng mã này</button></form>`,passwd:`<form data-send="passwd">
          <div class="field-label">Đổi mật khẩu</div>
          <input name="old" type="password" autocomplete="current-password" maxlength="64" placeholder="Mật khẩu cũ" required>
          <input name="pass" type="password" autocomplete="new-password" maxlength="64" placeholder="Mật khẩu mới (ít nhất 6 ký tự)" required>
          <p class="form-err"></p><button class="primary">Đổi mật khẩu</button></form>`}[this.form]??""}
      <div class="field-label">Mã khôi phục của máy này <span class="pick-name">không chia sẻ cho ai</span></div>
      <input class="code-box" readonly value="${this.showCode?pa(e):"•".repeat(18)}">
      <div class="card-main">
        <button class="ghost" data-act="show">${this.showCode?"Ẩn mã":"Hiện mã"}</button>
        <button class="ghost" data-act="copy">Sao chép mã</button>
      </div>
      <div class="acct-links">
        <button data-form="login">Đăng nhập tài khoản khác</button>
        <button data-form="code">Dùng mã khôi phục</button>
        <button class="danger" data-act="out">Đăng xuất khỏi máy này</button>
      </div>`}wire(){const t=(e,n)=>this.el.querySelectorAll(e).forEach(s=>s.addEventListener("click",()=>n(s)));t(".sheet-close",()=>this.close()),t("[data-tab]",e=>this.open(e.dataset.tab)),t('[data-act="edit"]',()=>{this.close(),this.h.editLook()}),t('[data-act="share"]',()=>this.share()),t('[data-act="photo"]',()=>this.stage.save(this.h.profile().name)),t('[data-act="gear"]',()=>this.open("gear")),t("[data-pose]",e=>{this.pose=e.dataset.pose,this.stage.setPose(this.pose),this.el.querySelectorAll("[data-pose]").forEach(n=>n.classList.toggle("on",n===e))}),t("[data-equip]",e=>{const[n,s]=e.dataset.equip.split(":");this.h.equip({[n]:s}),this.render()}),t("[data-title]",e=>this.h.send({t:"title",id:e.dataset.title})),t("[data-form]",e=>{const n=e.dataset.form;this.form=this.form===n?"none":n,this.render(),this.el.querySelector("form input")?.focus()}),t('[data-act="show"]',()=>{this.showCode=!this.showCode,this.render()}),t('[data-act="copy"]',async e=>{try{await navigator.clipboard.writeText(this.h.code()),e.textContent="Đã chép · cất kỹ nhé"}catch{this.showCode=!0,this.render(),this.h.toast("Không chép được, hãy chép mã đang hiện")}}),t('[data-act="out"]',()=>{const e=this.j?.user?`Bạn có thể đăng nhập lại bằng tài khoản @${this.j.user}.`:"Bạn CHƯA có tài khoản: nếu chưa lưu mã khôi phục, công đức của nhân vật này sẽ mất.";confirm(`Đăng xuất khỏi máy này? ${e}`)&&this.h.signOut()}),this.el.querySelector("form")?.addEventListener("submit",e=>{e.preventDefault();const n=e.target,s=a=>n.elements.namedItem(a)?.value??"",r=n.querySelector(".form-err"),o=n.dataset.send;if(o==="register"&&s("pass")!==s("pass2"))return r.textContent="Hai lần nhập mật khẩu chưa giống nhau.";if(o==="code"){const a=s("code").trim();return a.length<8?r.textContent="Mã khôi phục chưa đúng.":a===this.h.code()?r.textContent="Đây là mã của chính máy này rồi.":this.h.switchTo(a)}n.querySelectorAll("button").forEach(a=>a.disabled=!0),r.textContent="",o==="register"&&this.h.send({t:"register",user:s("user"),pass:s("pass")}),o==="login"&&this.h.send({t:"login",user:s("user"),pass:s("pass")}),o==="passwd"&&(this.h.send({t:"passwd",old:s("old"),pass:s("pass")}),this.form="none",setTimeout(()=>this.render(),300))})}async share(){const t=this.j,e=`Mình đã lạy ${t.bows} lạy, lần ${t.rounds} chuỗi hạt, ${t.streak} ngày liên tiếp lên chùa An Duyên · ${t.level} · ${t.merit} công đức. Lên chùa cùng mình nhé!`;try{navigator.share?await navigator.share({title:"An Duyên",text:e,url:location.origin}):(await navigator.clipboard.writeText(`${e} ${location.origin}`),this.h.toast("Đã chép lời khoe, dán vào Zalo hay Facebook nhé"))}catch{}}}const pa=i=>i.replace(/[&<>"']/g,t=>`&#${t.charCodeAt(0)};`),ie=pt,Vn=ie.bounds,$e=(i,t,e,n,s,r=1)=>`<rect class="${s}" x="${i}" y="${t}" width="${e-i}" height="${n-t}" rx="${r}"/>`,df=(i,t,e,n,s)=>`<ellipse class="${s}" cx="${i}" cy="${t}" rx="${e}" ry="${n}"/>`;function aS(){const i=ie.yard,t=ie.terrace,e=ie.hall,n=ie.upper,s=ie.avenue;return[$e(Vn.x0,Vn.z0,Vn.x1,Vn.z1,"m-ground",6),$e(Vn.x0+2,-70,-30,64,"m-garden",6),`<circle class="m-garden" cx="${ie.mound.x}" cy="${ie.mound.z}" r="${ie.mound.r}"/>`,df(ie.frontLake.x,ie.frontLake.z,ie.frontLake.rx,ie.frontLake.rz,"m-water"),df(ie.lake.x,ie.lake.z,ie.lake.rx,ie.lake.rz,"m-water"),`<circle class="m-water" cx="${ie.halfMoon.x}" cy="${ie.halfMoon.z}" r="${ie.halfMoon.r}"/>`,`<circle class="m-water" cx="${ie.well.x}" cy="${ie.well.z}" r="3"/>`,$e(-4,ie.causeway.z0,ie.causeway.half,ie.causeway.z1,"m-stone",0),$e(-3.2,s.z0,s.half,s.z1,"m-stone",0),$e(i.x0,i.z0,i.x1,i.z1,"m-stone",2),$e(t.x0,t.z0,t.x1,t.z1,"m-terrace",2),$e(n.x0,n.z0,n.x1,n.z1,"m-terrace",2),$e(ie.bridge.x0,ie.bridge.z-1.2,ie.bridge.x1,ie.bridge.z+1.2,"m-wood",.5),$e(-16,ie.gateZ-3,16,ie.gateZ+3,"m-roof"),$e(-26.5-1.8,ie.corridorStart,-26.5+1.8,58,"m-roof",.5),$e(ie.corridorX-1.8,ie.corridorStart,ie.corridorX+1.8,58,"m-roof",.5),$e(-18,49,-12,55,"m-roof",.5),$e(12,49,18,55,"m-roof",.5),$e(e.x0,e.z0,e.x1,e.z1,"m-hall",1.5),'<circle class="m-roof" cx="0" cy="-62" r="5"/>','<circle class="m-gold" cx="0" cy="33" r="1.6"/>',$e(ie.isle.x-3,ie.isle.z-3,ie.isle.x+3,ie.isle.z+3,"m-roof",.5),$e(47,-21,53,-15,"m-roof",.5),$e(36,41,44,47,"m-roof",.5)].join("")}class cS{constructor(t,e,n,s,r){this.me=e,this.dots=n,this.go=s,this.zone=r,this.el.className="sheet map",t.appendChild(this.el)}el=document.createElement("div");timer=0;get isOpen(){return this.el.classList.contains("open")}open(){const t=Bp.map((e,n)=>`<g class="m-place" data-place="${n}" transform="translate(${e.pos.x} ${e.pos.z})">
        <circle r="1.4"/><rect x="-15" y="-15" width="30" height="9.2" rx="4.6"/><text y="-8">${e.name.replace(" · Cầu Duyên","")}</text></g>`).join("");this.el.innerHTML=`
      <button class="sheet-close" aria-label="Đóng">×</button>
      <div class="sheet-title">Bản đồ chùa</div>
      <p class="sheet-sub">Bạn đang ở <b class="m-zone"></b>. Chạm tên một khu để tới đó.</p>
      <svg viewBox="${Vn.x0-2} ${Vn.z0-2} ${Vn.x1-Vn.x0+4} ${Vn.z1-Vn.z0+4}" role="img" aria-label="Bản đồ chùa An Duyên">
        ${aS()}
        <g class="m-dots"></g>
        ${t}
        <g class="m-me"><circle r="3.2"/><path d="M0 -6.5 L3 -1.5 L-3 -1.5 Z"/></g>
      </svg>
      <div class="m-legend"><span><i class="me"></i>Bạn</span><span><i class="friend"></i>Bạn đồng tu</span><span><i></i>Người khác</span></div>`,this.el.querySelector(".sheet-close").addEventListener("click",()=>this.close()),this.el.querySelectorAll("[data-place]").forEach(e=>e.addEventListener("click",()=>{this.close(),this.go(Number(e.dataset.place))})),this.el.classList.add("open"),this.paint(),clearInterval(this.timer),this.timer=window.setInterval(()=>this.paint(),400)}close(){this.el.classList.remove("open"),clearInterval(this.timer)}paint(){const t=this.me(),e=180-t.ry*180/Math.PI;this.el.querySelector(".m-me").setAttribute("transform",`translate(${t.x.toFixed(1)} ${t.z.toFixed(1)}) rotate(${e.toFixed(0)})`),this.el.querySelector(".m-zone").textContent=this.zone(),this.el.querySelector(".m-dots").innerHTML=this.dots().map(n=>`<circle class="${n.friend?"friend":""}" cx="${n.x.toFixed(1)}" cy="${n.z.toFixed(1)}" r="${n.friend?2.6:1.8}"><title>${lS(n.name)}</title></circle>`).join("")}}const lS=i=>i.replace(/[&<>"']/g,t=>`&#${t.charCodeAt(0)};`),Jr=[{n:1,level:"Thượng cát",poem:["Trăng rằm soi bóng hồ sen","Người thương sắp đến bên thềm chùa xưa","Nắng hiền tan hết cơn mưa","Duyên lành đã định, đón đưa có ngày"],meaning:"Tình duyên sáng sủa, người hợp ý đang đến gần. Hãy mở lòng, đừng vội vàng."},{n:2,level:"Trung cát",poem:["Gió đưa cánh hạc qua sông","Chờ thêm chút nữa, nhẹ lòng mà đi","Gặp nhau chẳng phải vội gì","Chân thành giữ lấy, xuân thì còn xanh"],meaning:"Duyên đến chậm mà bền. Giữ sự chân thành, thời gian sẽ trả lời."},{n:3,level:"Thượng cát",poem:["Hoa đào nở giữa trời xuân","Bước chân ai đó đã gần cổng mây","Nụ cười gửi gió heo may","Tơ hồng một sợi buộc ngay đôi người"],meaning:"Có người đang để ý bạn. Một lời chào thân thiện có thể mở ra câu chuyện đẹp."},{n:4,level:"Bình an",poem:["Sương mai còn đọng lá tre","Lòng còn vương vấn chuyện hè năm xưa","Buông đi cho nhẹ gió mưa","Mới mong đón được người vừa ý thương"],meaning:"Chuyện cũ chưa nguôi. Buông bỏ được thì duyên mới đến."},{n:5,level:"Thượng cát",poem:["Hai con chim sẻ đầu cành","Ríu ran một khúc, trời xanh mây hồng","Một lòng như nước sông Hồng","Mai kia mái ấm thong dong bên nhau"],meaning:"Tình cảm hiện tại bền vững, có thể tính chuyện lâu dài."},{n:6,level:"Trung cát",poem:["Thuyền nan khẽ tựa bến xưa","Đợi người đi chợ về trưa chưa về","Đừng buồn mà lỡ câu thề","Hẹn ngày nắng ấm bốn bề hoa thơm"],meaning:"Người bạn chờ có thể đến muộn. Kiên nhẫn và giữ lời hứa với chính mình."},{n:7,level:"Thượng cát",poem:["Đèn hoa thả giữa dòng trong","Ước gì ai đó cũng mong như mình","Trăng lên rót ánh lung linh","Hai bờ chung một mối tình đơm hoa"],meaning:"Tình cảm có thể đến từ hai phía. Đừng ngại bày tỏ."},{n:8,level:"Bình an",poem:["Mây chiều lững thững qua non","Tình như con nước lúc còn lúc vơi","Muốn bền thì phải nhường lời","Giận hờn chớ để cho đời cách xa"],meaning:"Mối quan hệ có lúc thăng trầm. Biết nhường nhịn thì bền lâu."},{n:9,level:"Trung cát",poem:["Chùa xa vọng tiếng chuông ngân","Ai đi lễ Phật dừng chân bên thềm","Gặp nhau một tối trăng lên","Chuyện trò đôi phút mà nên bạn lành"],meaning:"Quen biết mới tốt đẹp ở nơi thanh tịnh. Hãy bắt đầu từ tình bạn."},{n:10,level:"Thượng cát",poem:["Cau xanh trầu thắm đầy mâm","Mẹ cha vui vẻ, xa gần chúc nhau","Duyên này đã định từ lâu","Thuận buồm xuôi gió trước sau một lòng"],meaning:"Chuyện hôn nhân thuận lợi, được gia đình ủng hộ."},{n:11,level:"Bình an",poem:["Lá vàng rơi xuống sân rêu","Người đi chưa nói một điều dặn ai","Lòng ơi xin chớ u hoài","Mùa sau hoa nở nụ mai thắm cành"],meaning:"Có thể bạn vừa qua một lần chia xa. Thời gian sẽ chữa lành, duyên mới sẽ tới."},{n:12,level:"Trung cát",poem:["Bên hiên quán nhỏ chén trà","Nghe người kể chuyện quê nhà xa xôi","Cùng chung một nỗi bồi hồi","Biết đâu duyên đến từ lời hỏi thăm"],meaning:"Một cuộc trò chuyện bình thường có thể thành duyên. Hãy hỏi thăm người bên cạnh."},{n:13,level:"Thượng cát",poem:["Sen hồng nở giữa ao thu","Gió đưa hương ngát, lời ru dịu dàng","Người hiền như ánh trăng vàng","Đến bên lặng lẽ, nhẹ nhàng mà sâu"],meaning:"Người hợp với bạn hiền lành, kín đáo. Hãy để ý những người ít nói."},{n:14,level:"Bình an",poem:["Cầu tre lắt lẻo gập ghềnh","Bước đi chậm rãi chớ nên vội vàng","Tình như chén nước trong làng","Uống từng ngụm nhỏ mới mang ngọt lành"],meaning:"Đừng vội. Tìm hiểu kỹ trước khi quyết định."},{n:15,level:"Trung cát",poem:["Ngày rằm lên chùa thắp hương","Cầu cho mẹ khỏe, cầu thương người hiền","Phật thương ban chữ bình yên","Đường duyên rộng mở, ưu phiền nhẹ trôi"],meaning:"Lòng hiếu thảo đem lại phước lành. Gia đạo yên thì duyên cũng thuận."},{n:16,level:"Bình an",poem:["Mưa rơi ướt áo người đi","Ô che chẳng đủ, biết gì cho nhau","Thương nhau nhường áo choàng sau","Một mai nắng lại, cùng nhau chuyện trò"],meaning:"Gặp khó khăn nhỏ. Biết sẻ chia thì tình cảm sâu hơn."},{n:17,level:"Thượng cát",poem:["Chỉ hồng ông Nguyệt se duyên","Hai phương trời bỗng gần liền một nơi","Gặp nhau như đã lâu rồi","Nói câu nào cũng như lời quen thân"],meaning:"Người ở xa có thể là người hợp ý. Đừng ngại những cuộc gặp tình cờ."},{n:18,level:"Bình an",poem:["Đá mòn nhưng dạ chẳng mòn","Đợi chờ một bóng, héo hon tháng ngày","Hãy nhìn quanh những bàn tay","Có người lặng lẽ bao ngày đứng chờ"],meaning:"Đừng chỉ mải chờ một người. Có người quan tâm bạn ngay bên cạnh."},{n:19,level:"Trung cát",poem:["Bánh trôi chìm nổi giữa trần","Giữ lòng son sắt, mười phần vẹn mười","Gặp người biết quý nụ cười","Là duyên trời định, đẹp tươi trọn đời"],meaning:"Giữ gìn phẩm giá của mình. Người trân trọng bạn sẽ xuất hiện."},{n:20,level:"Thượng cát",poem:["Bình minh trên đỉnh non cao","Mây tan nắng tỏ, ước ao thành hình","Tình yêu như ánh bình minh","Mỗi ngày một mới, chung tình cùng nhau"],meaning:"Điều mong ước sắp thành. Tình cảm mới mẻ, tươi sáng."},{n:21,level:"Bình an",poem:["Chim bay mỏi cánh tìm cây","Cây cao bóng mát chẳng đầy một khi","Nhọc nhằn đừng vội than chi","Nghỉ chân đôi chút rồi đi tiếp đường"],meaning:"Bạn đang mệt. Hãy chăm sóc bản thân trước, duyên sẽ đến khi lòng an."},{n:22,level:"Trung cát",poem:["Tiếng đàn bầu vọng bờ ao","Ai nghe mà chẳng nao nao trong lòng","Tri âm khó kiếm mà mong","Một người hiểu được, cũng xong một đời"],meaning:"Bạn cần người thấu hiểu hơn người hoàn hảo. Hãy tìm người cùng sở thích."},{n:23,level:"Thượng cát",poem:["Cổng chùa rợp bóng cây đa","Gặp nhau ngày hội, chẳng xa chẳng gần","Một lần hỏi, một lần thân","Chữ duyên đã đến, ân cần giữ nhau"],meaning:"Duyên đến từ những dịp lễ hội, chỗ đông người. Hãy chủ động làm quen."},{n:24,level:"Bình an",poem:["Trăng khuyết rồi lại trăng tròn","Buồn vui là lẽ, đâu còn mãi đâu","Tâm an thì chẳng âu sầu","Duyên lành tự đến, trước sau rõ ràng"],meaning:"Mọi chuyện đều có lúc. Giữ tâm an, mọi việc tự sáng tỏ."},{n:25,level:"Thượng cát",poem:["Giếng trong soi bóng mây trời","Lòng ai trong vắt như lời nguyện xưa","Người về dưới mái hiên mưa","Trao nhau chiếc nón, sớm trưa đợi chờ"],meaning:"Tấm lòng trong sáng của bạn được người khác nhìn thấy. Duyên đẹp đang gần."},{n:26,level:"Trung cát",poem:["Con đò đợi khách sang ngang","Nước xuôi thì chậm, nước ngang thì đầy","Thuận theo con nước hôm nay","Bến kia có kẻ đứng đây đợi mình"],meaning:"Đừng cưỡng cầu. Thuận theo tự nhiên thì việc sẽ thành."},{n:27,level:"Bình an",poem:["Cánh diều chao giữa đồng xa","Dây căng quá mức thì xa mất diều","Thương nhau đừng giữ quá nhiều","Buông tay đúng lúc, sớm chiều có nhau"],meaning:"Yêu thương cần chừa khoảng thở. Tin tưởng thì giữ được lâu."},{n:28,level:"Thượng cát",poem:["Mùa sen hương ngát cả làng","Người đi lễ Phật nhẹ nhàng bước chân","Gặp nhau ngoảnh lại một lần","Mà như quen biết bao lần kiếp xưa"],meaning:"Một cuộc gặp tưởng tình cờ lại rất hợp. Hãy trân trọng cảm giác thân quen ấy."},{n:29,level:"Trung cát",poem:["Gió nồm thổi mát bờ đê","Người đi xa sắp trở về quê hương","Đường xa mà chẳng xa thương","Tin vui sắp đến cuối đường nắng lên"],meaning:"Người ở xa vẫn nhớ đến bạn. Sắp có tin vui."},{n:30,level:"Bình an",poem:["Lúa non còn đợi đòng đòng","Muốn ăn hạt ngọc phải lòng kiên trì","Tình như cây lúa xuân thì","Chăm cho tươi tốt, ngại gì gió sương"],meaning:"Tình cảm cần vun đắp mỗi ngày. Kiên trì thì gặt được quả ngọt."},{n:31,level:"Thượng cát",poem:["Pháo hoa nở rộ đêm xuân","Hai người chung bước, chung phần chung vui","Tay trong tay, mắt môi cười","Năm nay nên vợ nên chồng, nên đôi"],meaning:"Năm thuận lợi cho chuyện hôn nhân. Có thể tính chuyện chung đôi."},{n:32,level:"Trung cát",poem:["Thư ai gửi giữa đường xa","Chữ nhòe nét mực, lời qua nét tình","Chớ nghe lời đoán linh tinh","Hỏi thẳng một tiếng, thật tình mà hay"],meaning:"Đừng đoán ý nhau qua lời người khác. Hỏi thẳng nhẹ nhàng sẽ rõ."},{n:33,level:"Bình an",poem:["Cây khô chờ hạt mưa rào","Lòng ai khô héo, chờ bao giờ cười","Mở lòng ra với mọi người","Mưa xuân sẽ đến, đất trời nở hoa"],meaning:"Bạn đang khép lòng. Kết bạn, ra ngoài nhiều hơn thì niềm vui sẽ tới."},{n:34,level:"Thượng cát",poem:["Hồ thu trong vắt như gương","In hai bóng nhỏ chung đường về chung","Đôi chim liền cánh trên không","Một lòng một dạ thủy chung trọn đời"],meaning:"Người bên cạnh bạn là người thủy chung. Hãy giữ gìn."},{n:35,level:"Trung cát",poem:["Bếp hồng lửa ấm chiều đông","Nồi cơm mẹ nấu thơm nồng khói rơm","Duyên lành từ chỗ rất thường","Người chung mái ấm, sớm hôm đỡ đần"],meaning:"Người hợp với bạn biết lo toan việc nhà. Đừng chỉ nhìn vẻ ngoài."},{n:36,level:"Bình an",poem:["Nước trôi qua đá nghìn năm","Đá còn đứng đó, âm thầm đợi trăng","Lòng người như đá vững vàng","Muộn màng một chút, mà vàng mười thôi"],meaning:"Duyên có thể đến muộn nhưng quý. Đừng so mình với người khác."},{n:37,level:"Thượng cát",poem:["Nắng mai rót mật trên đồi","Chè xanh hái vội, lưng đồi tiếng ca","Câu hò ai gửi gần xa","Có người nghe được, ghé qua hỏi tình"],meaning:"Bạn đang được chú ý. Sự vui tươi của bạn đang thu hút người hợp ý."},{n:38,level:"Trung cát",poem:["Hai bờ một nhịp cầu tre","Ai qua ai lại, ai nghe ai chờ","Nhịp cầu nối những ước mơ","Bước thêm một bước, đôi bờ gần nhau"],meaning:"Hai người đều có ý, chỉ thiếu một người bước trước. Hãy chủ động một chút."},{n:39,level:"Bình an",poem:["Chuông chiều ngân giữa núi xanh","Lắng nghe một tiếng, lòng thanh lạ thường","Bao nhiêu phiền muộn vấn vương","Theo chuông tan hết, con đường sáng ra"],meaning:"Hãy dành thời gian tĩnh lặng. Lòng yên thì thấy rõ điều mình muốn."},{n:40,level:"Thượng cát",poem:["Cành mai vàng nở sân nhà","Tết này có khách gần xa đến chào","Một người dáng nhỏ thanh tao","Mang theo lời hẹn năm sau chung nhà"],meaning:"Dịp lễ Tết là dịp gặp gỡ tốt. Người đến chơi nhà có thể là người có duyên."},{n:41,level:"Trung cát",poem:["Thuyền câu lặng giữa ao thu","Cá chưa cắn mồi, người tu chữ chờ","Đợi nhau chẳng phải là ngờ","Lòng kiên nhẫn sẽ đến bờ yêu thương"],meaning:"Hãy chờ thêm một thời gian. Sự kiên nhẫn của bạn đáng giá."},{n:42,level:"Bình an",poem:["Mái tranh dột lúc mưa dầm","Sửa sang từ sớm, khỏi nằm lo âu","Tình người cũng vậy nhiệm màu","Chăm từ việc nhỏ, về sau vững bền"],meaning:"Những chuyện nhỏ trong tình cảm đừng để lâu. Nói ra sớm thì nhẹ lòng."},{n:43,level:"Thượng cát",poem:["Dải ngân hà bắc qua trời","Ngưu Lang Chức Nữ một thời cách xa","Nay cầu Ô Thước bắc qua","Người thương gặp lại, chan hòa lệ vui"],meaning:"Có cuộc hội ngộ đáng mong chờ. Người xa cách sẽ gặp lại."},{n:44,level:"Trung cát",poem:["Chiếc lá đề rơi trên vai","Ngỡ là tình cờ, ai hay duyên lành","Dưới tàng cây đa xanh xanh","Một câu chào hỏi mà thành bạn thân"],meaning:"Những điều nhỏ bé có ý nghĩa. Một lời chào hôm nay có thể thành tình bạn."},{n:45,level:"Bình an",poem:["Ngựa hay chạy vội thì mòn","Người khôn đi chậm vẫn còn tới nơi","Tình duyên chẳng phải đua người","Đúng người đúng lúc, trọn đời chẳng phai"],meaning:"Đừng sốt ruột vì bạn bè đã có đôi. Mỗi người một thời điểm."},{n:46,level:"Thượng cát",poem:["Đèn lồng đỏ thắm phố đêm","Bàn tay ai nắm, êm đềm bước đi","Chẳng cần nói những lời gì","Một ánh mắt đủ biết khi chung lòng"],meaning:"Hai người hiểu nhau không cần nhiều lời. Đây là mối duyên sâu."},{n:47,level:"Trung cát",poem:["Cửa chùa gió thoảng hương trầm","Lời kinh nhắc nhở thì thầm bao dung","Thương người phải biết thương cùng","Cả điều chưa đẹp, ung dung đón chờ"],meaning:"Thương ai thì thương cả điểm chưa tốt của họ. Bao dung làm duyên bền."},{n:48,level:"Bình an",poem:["Gánh hàng rong giữa phố đông","Mẹ nuôi con lớn, chẳng mong đền bù","Thương cha mẹ trước mùa thu","Phước lành theo đến, mây mù tan mau"],meaning:"Dành thời gian cho cha mẹ. Gia đạo yên vui là nền của mọi duyên lành."},{n:49,level:"Thượng cát",poem:["Vầng trăng vằng vặc đầu non","Mười lăm trăng sáng, tình tròn như trăng","Ông Tơ bà Nguyệt nói rằng","Duyên này đã buộc, khó khăn cũng qua"],meaning:"Duyên đã định thì trở ngại nhỏ cũng vượt qua được. Hãy tin."},{n:50,level:"Trung cát",poem:["Mưa phùn lất phất tháng ba","Áo ai mỏng mảnh qua nhà hôm qua","Muốn hỏi mà ngại người ta","Hỏi đi một tiếng, chẳng qua mất gì"],meaning:"Bạn đang ngần ngại với một người. Thử hỏi thăm, chẳng mất gì cả."},{n:51,level:"Bình an",poem:["Rễ đa bám chặt đất nâu","Trăm năm gió bão vẫn sâu vẫn bền","Muốn tình như rễ cây đền","Phải từ thật thà mà nên cội nguồn"],meaning:"Sự thật thà là gốc rễ của tình cảm. Đừng giấu nhau điều gì."},{n:52,level:"Thượng cát",poem:["Chim én liệng giữa trời xuân","Báo tin vui đến, muôn phần an khang","Duyên lành như ánh nắng vàng","Đến không hẹn trước, rộn ràng cửa nhà"],meaning:"Niềm vui bất ngờ sắp đến. Cửa duyên đang mở."},{n:53,level:"Trung cát",poem:["Hạt mưa rơi xuống hồ sen","Lá sen chẳng ướt, sắc sen vẫn hồng","Giữa đời nhiều chuyện ngược dòng","Giữ mình trong sạch, mới mong gặp lành"],meaning:"Đừng để chuyện xung quanh làm bạn đổi khác. Giữ mình thì gặp người tốt."},{n:54,level:"Bình an",poem:["Ngọn đèn dầu nhỏ đêm khuya","Soi trang sách cũ, sẻ chia nỗi niềm","Một mình mà chẳng buồn thêm","Học thêm một chữ, tự nhiên sáng lòng"],meaning:"Lúc một mình là lúc tốt để học hỏi, hoàn thiện bản thân. Duyên sẽ đến sau."},{n:55,level:"Thượng cát",poem:["Tràng hạt lần đủ trăm lần","Lời cầu ai đó đã gần được nghe","Hoa đăng trôi nhẹ bên hè","Ước mong thành thật, sẽ về thành công"],meaning:"Điều bạn thành tâm cầu mong đang dần thành. Giữ lòng thành."},{n:56,level:"Trung cát",poem:["Đôi giày cũ chạy đường xa","Mòn gót mà vẫn đi qua bao miền","Người cùng mình bước chẳng phiền","Là người đáng giữ, giữ yên trong lòng"],meaning:"Người cùng bạn qua những lúc khó là người đáng quý nhất."},{n:57,level:"Bình an",poem:["Sóng xô thuyền giạt bến bờ","Neo cho chắc chắn, đợi chờ trời quang","Giận hờn chớ nói vội vàng","Ngủ một giấc dậy, lời càng dịu êm"],meaning:"Khi giận đừng nói gì. Để qua một đêm, lời nói sẽ nhẹ nhàng hơn."},{n:58,level:"Thượng cát",poem:["Mẹ già cười giữa sân phơi","Nàng dâu, chàng rể đến mời trầu cau","Hai nhà vui vẻ cùng nhau","Một chữ hiếu, vạn phước sau đong đầy"],meaning:"Gia đình hai bên hòa thuận. Chuyện cưới hỏi thuận lợi."},{n:59,level:"Trung cát",poem:["Sương tan để lộ đường mòn","Bước chân thong thả lên non hái chè","Đường duyên khúc khuỷu chớ e","Đi rồi sẽ thấy lối về rõ thêm"],meaning:"Con đường chưa rõ nhưng cứ bước. Đi rồi sẽ sáng tỏ."},{n:60,level:"Bình an",poem:["Hạt bồ đề nhỏ trong tay","Mai kia thành cội che đầy bóng râm","Duyên lành gieo tự hôm nay","Một lời tử tế, ngàn năm còn hoài"],meaning:"Mỗi việc tốt nhỏ hôm nay là hạt giống duyên lành mai sau."}];class hS{el=document.createElement("div");onDraw=()=>{};constructor(t){this.el.className="sheet fortune",t.appendChild(this.el)}open(t){this.onDraw=t,this.el.innerHTML=`
      <button class="sheet-close" aria-label="Đóng">×</button>
      <div class="sheet-title">Xin xăm duyên</div>
      <p class="sheet-sub">Thành tâm nghĩ về điều mình mong, rồi lắc ống xăm.</p>
      <div class="tube"><div class="sticks">${"<i></i>".repeat(9)}</div></div>
      <button class="primary shake">Lắc ống xăm</button>`,this.el.querySelector(".sheet-close").addEventListener("click",()=>this.close()),this.el.querySelector(".shake").addEventListener("click",()=>this.shake()),this.el.classList.add("open")}close(){this.el.classList.remove("open")}shake(){this.el.querySelector(".tube").classList.add("shaking"),this.el.querySelector(".shake").disabled=!0,navigator.vibrate?.([40,60,40,60,40]),setTimeout(()=>{const e=Jr[Math.floor(Math.random()*Jr.length)];this.show(e),this.onDraw(e.n)},1500)}reread(t){const e=Jr.find(n=>n.n===t);e&&(this.show(e),this.el.classList.add("open"))}show(t){this.el.innerHTML=`
      <button class="sheet-close" aria-label="Đóng">×</button>
      <div class="paper">
        <div class="paper-head">Quẻ số ${t.n} · ${t.level}</div>
        <div class="poem">${t.poem.map(e=>`<div>${e}</div>`).join("")}</div>
        <div class="meaning">${t.meaning}</div>
        <div class="match"></div>
      </div>
      <button class="primary again">Xong</button>`,this.el.querySelector(".sheet-close").addEventListener("click",()=>this.close()),this.el.querySelector(".again").addEventListener("click",()=>this.close())}showMatch(t){const e=this.el.querySelector(".match");!e||!t.length||(e.textContent=`Hôm nay ${t.join(", ")} cũng rút quẻ này.`)}}const nm=i=>{const t=Jr.find(e=>e.n===i);return t?`Rút quẻ số ${t.n} · ${t.level}`:""},ff="anduyen.bag.xam",pf="anduyen.bag.words";function mf(i){try{return JSON.parse(localStorage.getItem(i)||"[]")}catch{return[]}}function gf(i,t){try{localStorage.setItem(i,JSON.stringify(t.slice(-30)))}catch{}}class uS{constructor(t,e){this.h=e,this.el.className="sheet bag",t.appendChild(this.el)}el=document.createElement("div");tab="xam";xam=mf(ff);words=mf(pf);unread=0;get isOpen(){return this.el.classList.contains("open")}addFortune(t){this.xam.push({n:t,at:Date.now()}),gf(ff,this.xam)}addWords(t){this.words.push(t),gf(pf,this.words),this.unread++}open(t=this.tab){this.tab=t,t==="words"&&(this.unread=0),this.render(),this.el.classList.add("open")}close(){this.el.classList.remove("open")}render(){const t=this.h.today(),e=this.h.giftsLeft(),n=this.h.myLanterns(),s=[["xam",`Quẻ xăm (${this.xam.length})`],["words",`Lời chúc (${this.words.length})`],["den",`Hoa đăng (${n.length})`]].map(([r,o])=>`<button data-tab="${r}" class="${this.tab===r?"on":""}">${o}${r==="words"&&this.unread?" •":""}</button>`).join("");this.el.innerHTML=`
      <button class="sheet-close" aria-label="Đóng">×</button>
      <div class="sheet-title">Túi đồ</div>
      <div class="bag-today">
        <div><b>${e??"–"}</b><span>nén hương còn tặng hôm nay</span></div>
        <div><b>${t.beads}</b><span>hạt đã lần hôm nay</span></div>
        <div><b>${t.bows}</b><span>lạy hôm nay</span></div>
      </div>
      <div class="tabs">${s}</div>
      <div class="bag-list">${this.list(n)}</div>`,this.el.querySelector(".sheet-close").addEventListener("click",()=>this.close()),this.el.querySelectorAll("[data-tab]").forEach(r=>r.addEventListener("click",()=>this.open(r.dataset.tab))),this.el.querySelectorAll("[data-xam]").forEach(r=>r.addEventListener("click",()=>{this.close(),this.h.readFortune(Number(r.dataset.xam))})),this.el.querySelectorAll("[data-den]").forEach(r=>r.addEventListener("click",()=>{const o=n.find(a=>a.id===Number(r.dataset.den));o&&(this.close(),this.h.readLantern(o))}))}list(t){const e=s=>new Date(s).toLocaleDateString("vi-VN",{day:"numeric",month:"numeric"})+" "+new Date(s).toLocaleTimeString("vi-VN",{hour:"2-digit",minute:"2-digit"}),n=s=>`<p class="sheet-sub">${s}</p>`;return this.tab==="xam"?this.xam.length?[...this.xam].reverse().map(({n:s,at:r})=>{const o=Jr.find(a=>a.n===s);return o?`<button class="bag-item" data-xam="${s}"><b>Quẻ số ${s} · ${o.level}</b><span>${o.poem[0]}…</span><small>${e(r)}</small></button>`:""}).join(""):n("Chưa có quẻ nào. Xin xăm ở Hồ sen · Cầu Duyên, quẻ sẽ được cất vào đây để đọc lại."):this.tab==="words"?this.words.length?[...this.words].reverse().map(s=>`<div class="bag-item"><b>${Yc(s.name)}${s.kind==="gift"?" · tặng hương":""}</b><span>${Yc(s.text)}</span><small>${e(s.at)}</small></div>`).join(""):n("Lời chúc và nén hương người khác gửi cho bạn sẽ được cất ở đây."):t.length?t.map(s=>`<button class="bag-item" data-den="${s.id}"><b>${s.color==="hong"?"Đèn hồng · cầu duyên":"Đèn vàng · cầu an"}</b><span>${Yc(s.text)}</span><small>${s.likes} người tùy hỷ · ${e(s.at)}</small></button>`).join(""):n("Bạn chưa có ngọn hoa đăng nào trên hồ. Đèn trôi 24 giờ rồi tắt.")}}const Yc=i=>i.replace(/[&<>"']/g,t=>`&#${t.charCodeAt(0)};`),gi=i=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${i}</svg>`,vf={nhiemvu:gi('<rect x="5" y="3.5" width="14" height="17" rx="2"/><path d="M9 8h6M9 12h6M9 16h3"/>'),tuido:gi('<path d="M6 8h12l-1 12H7z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>'),bando:gi('<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/>'),xephang:gi('<path d="M8 4h8v5a4 4 0 0 1-8 0z"/><path d="M8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M9 20h6"/>'),congdong:gi('<circle cx="9" cy="8" r="3"/><path d="M3.5 19c.5-3.5 2.8-5.5 5.5-5.5s5 2 5.5 5.5"/><circle cx="16.5" cy="9" r="2.4"/><path d="M15.5 13.6c2.6-.3 4.6 1.5 5 4.9"/>'),hoso:gi('<circle cx="12" cy="8.5" r="3.5"/><path d="M5 20c1-4 3.8-6 7-6s6 2 7 6"/>'),gopgao:gi('<path d="M3 11h18c0 5-4 9-9 9s-9-4-9-9z"/><path d="M8 11c0-2 1-3 2-3M12 11c0-3 1-4 2-4M16 11c0-1.5.6-2.5 1.5-2.5"/>'),caidat:gi('<circle cx="12" cy="12" r="3"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1"/><circle cx="12" cy="12" r="6.5"/>'),menu:gi('<rect x="4" y="4" width="6" height="6" rx="1.5"/><rect x="14" y="4" width="6" height="6" rx="1.5"/><rect x="4" y="14" width="6" height="6" rx="1.5"/><rect x="14" y="14" width="6" height="6" rx="1.5"/>')},dS=[["nhiemvu","Nhiệm vụ"],["tuido","Túi đồ"],["bando","Bản đồ chùa"],["xephang","Xếp hạng"],["congdong","Bạn đồng tu"],["hoso","Hồ sơ"],["gopgao","Góp gạo"],["caidat","Cài đặt"]];class fS{constructor(t,e,n){this.act=n;const s=dS.filter(([o])=>e.includes(o)),r=([o,a])=>`<button data-menu="${o}">${vf[o]}<span>${a}</span><i class="badge"></i></button>`;this.bar.className="menu-bar",this.bar.setAttribute("aria-label","Menu"),this.bar.innerHTML=s.map(r).join(""),this.btn.className="icon-btn menu-btn",this.btn.setAttribute("aria-label","Menu"),this.btn.innerHTML=`${vf.menu}<i class="badge"></i>`,this.grid.className="sheet menu-grid",this.grid.innerHTML=`<button class="sheet-close" aria-label="Đóng">×</button><div class="sheet-title">Menu</div><div class="grid">${s.map(r).join("")}</div>`,t.append(this.bar,this.btn,this.grid),this.btn.onclick=()=>this.grid.classList.toggle("open"),this.grid.querySelector(".sheet-close").addEventListener("click",()=>this.grid.classList.remove("open"));for(const o of[this.bar,this.grid])o.querySelectorAll("[data-menu]").forEach(a=>a.addEventListener("click",()=>{this.grid.classList.remove("open"),this.act(a.dataset.menu)}))}bar=document.createElement("nav");btn=document.createElement("button");grid=document.createElement("div");close(){this.grid.classList.remove("open")}setBadges(t){let e=0;for(const s of[this.bar,this.grid])s.querySelectorAll("[data-menu]").forEach(r=>{const o=t[r.dataset.menu]??0,a=r.querySelector(".badge");a.textContent=o>0?String(o):"",a.style.display=o>0?"":"none"});for(const s of Object.values(t))e+=s??0;const n=this.btn.querySelector(".badge");n.textContent=e>0?String(e):"",n.style.display=e>0?"":"none"}}const pS=[{title:"Đi lại",text:"Đặt ngón cái lên vòng tròn bên trái rồi kéo để đi. Đẩy hết cỡ để chạy.",at:"left"},{title:"Nhìn quanh",text:"Vuốt nửa phải màn hình để xoay, chụm hai ngón để xem gần xa. Chạm bồ đoàn hay ghế đá để ngồi.",at:"center"},{title:"Lễ Phật",text:"Nút lễ hiện bên phải, đổi theo nơi bạn đứng: lạy, thắp hương, thả hoa đăng, xin xăm…",at:"right"},{title:"Của riêng bạn",text:"Bánh răng để đổi tên, màu áo, âm thanh. Bát gạo để góp nuôi chùa. Chúc bạn an lạc!",at:"top"}],mS=[{title:"Đi lại",text:"W A S D hoặc phím mũi tên để đi, giữ Shift để chạy. Bấm xuống nền để đi tới đó.",at:"center"},{title:"Nhìn quanh",text:"Kéo chuột hoặc Q E để xoay, lăn chuột để xem gần xa. Bấm bồ đoàn hay ghế đá để ngồi.",at:"center"},{title:"Lễ Phật",text:"Nút lễ hiện dưới màn hình, đổi theo nơi bạn đứng: lạy, thắp hương, thả hoa đăng, xin xăm…",at:"center"},{title:"Của riêng bạn",text:"Bánh răng để đổi tên, màu áo, âm thanh. Bát gạo để góp nuôi chùa. Chúc bạn an lạc!",at:"top"}];class gS{el=document.createElement("div");i=0;steps;done=()=>{};constructor(t,e){this.steps=e?pS:mS,this.el.className="guide",t.appendChild(this.el)}open(t){this.done=t,this.i=0,this.render(),this.el.classList.add("open")}close(){this.el.classList.remove("open"),this.done()}render(){const t=this.steps[this.i],e=this.i===this.steps.length-1,n=this.steps.map((s,r)=>`<i class="${r===this.i?"on":""}"></i>`).join("");this.el.dataset.at=t.at,this.el.innerHTML=`
      <div class="guide-card">
        <div class="guide-step">${this.i+1}/${this.steps.length}</div>
        <div class="sheet-title">${t.title}</div>
        <p>${t.text}</p>
        <div class="guide-foot">
          <div class="guide-dots">${n}</div>
          ${e?"":'<button class="ghost small" data-act="skip">Bỏ qua</button>'}
          <button class="primary small" data-act="next">${e?"Vào chùa":"Tiếp"}</button>
        </div>
      </div>`,this.el.querySelector('[data-act="skip"]')?.addEventListener("click",()=>this.close()),this.el.querySelector('[data-act="next"]').addEventListener("click",()=>{if(e)return this.close();this.i++,this.render()})}}const xf=["Sơ tâm","Phát tâm","Tinh tấn","Hoan hỷ","An lạc","Thanh tịnh","Viên mãn"],vS=[["today","Hôm nay"],["week","Tuần này"],["all","Tất cả"]],xS='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M12 5c2 2.5 2.5 6 0 10-2.5-4-2-7.5 0-10z"/><path d="M12 15c-3-.5-6-3-6.5-6.5 3 0 5.5 2 6.5 6.5zM12 15c3-.5 6-3 6.5-6.5-3 0-5.5 2-6.5 6.5z"/><path d="M5 18h14"/></svg>';class _S{constructor(t,e){this.send=e,this.pill.className="pill merit-pill",this.pill.setAttribute("aria-label","Công đức và nhiệm vụ"),this.pill.style.display="none",this.pill.onclick=()=>this.isOpen?this.close():this.open(),this.float.className="merit-float",this.el.className="sheet merit",this.row.className="merit-row",this.row.append(this.pill,this.float),t.append(this.row,this.el)}row=document.createElement("div");pill=document.createElement("button");float=document.createElement("div");el=document.createElement("div");info=null;board=null;tab="nv";scope="today";floatTimer=0;floatSum=0;get ready(){return this.info?.quests.filter(t=>!t.claimed&&t.have>=t.need).length??0}get gifts(){return this.info?.gifts??null}get isOpen(){return this.el.classList.contains("open")}open(t="nv"){this.tab=t,this.send({t:"merit"}),t==="xh"&&this.send({t:"board",scope:this.scope}),this.render(),this.el.classList.add("open")}close(){this.el.classList.remove("open")}update(t,e){const n=this.info&&t.lv>this.info.lv;this.info=t;const s=t.quests.some(r=>!r.claimed&&r.have>=r.need);this.pill.style.display="",this.pill.classList.toggle("ready",s),this.pill.innerHTML=`${xS}<b>${t.total.toLocaleString("vi-VN")}</b><span>${t.level}</span>`,e&&this.showGain(e.n,n?`Lên cấp ${t.level}`:e.why),this.isOpen&&this.render()}setBoard(t){this.board=t,this.isOpen&&this.tab==="xh"&&this.render()}showGain(t,e){this.floatSum=this.float.classList.contains("show")?this.floatSum+t:t,this.float.innerHTML=`<b>+${this.floatSum} công đức</b>${e?`<span>${Kc(e)}</span>`:""}`,this.float.classList.remove("show"),this.float.offsetWidth,this.float.classList.add("show"),clearTimeout(this.floatTimer),this.floatTimer=window.setTimeout(()=>this.float.classList.remove("show"),2400)}render(){const t=this.info,e=t?`<div class="merit-head">
          <div class="merit-total"><b>${t.total.toLocaleString("vi-VN")}</b><span>công đức</span></div>
          <div class="merit-level">
            <div><b>${t.level}</b>${t.next!==null?`<span>còn ${(t.next-t.total).toLocaleString("vi-VN")} lên ${xf[t.lv+1]}</span>`:"<span>cấp cao nhất</span>"}</div>
            <div class="bar"><i style="width:${t.next!==null?Math.round((t.total-t.from)/(t.next-t.from)*100):100}%"></i></div>
            <small>Hôm nay +${t.today}${t.streak>1?` · ${t.streak} ngày liên tiếp`:""}</small>
          </div>
        </div>`:'<p class="sheet-sub">Đang kết nối với chùa…</p>';this.el.innerHTML=`
      <button class="sheet-close" aria-label="Đóng">×</button>
      <div class="sheet-title">Công đức</div>
      ${e}
      <div class="tabs">
        <button data-tab="nv" class="${this.tab==="nv"?"on":""}">Nhiệm vụ hôm nay</button>
        <button data-tab="xh" class="${this.tab==="xh"?"on":""}">Bảng xếp hạng</button>
      </div>
      <div class="tab-body">${this.tab==="nv"?this.quests():this.rank()}</div>`,this.el.querySelector(".sheet-close").addEventListener("click",()=>this.close()),this.el.querySelectorAll("[data-tab]").forEach(n=>n.addEventListener("click",()=>this.open(n.dataset.tab))),this.el.querySelectorAll("[data-claim]").forEach(n=>n.addEventListener("click",()=>{n.disabled=!0,this.send({t:"claim",q:n.dataset.claim})})),this.el.querySelectorAll("[data-scope]").forEach(n=>n.addEventListener("click",()=>{this.scope=n.dataset.scope,this.board=null,this.send({t:"board",scope:this.scope}),this.render()}))}quests(){return`${(this.info?.quests??[]).map(n=>{const s=n.have>=n.need,r=n.claimed?'<span class="q-done">Đã nhận</span>':s?`<button class="primary small" data-claim="${n.id}">Nhận +${n.reward}</button>`:`<span class="q-reward">+${n.reward}</span>`;return`<div class="quest ${n.claimed?"claimed":s?"ready":""}">
          <div class="q-text"><b>${Kc(n.title)}</b>
            <div class="bar"><i style="width:${Math.round(n.have/n.need*100)}%"></i></div>
            <small>${n.have}/${n.need}</small></div>
          ${r}
        </div>`}).join("")}
      <p class="sheet-sub">Nhiệm vụ đổi mỗi ngày lúc nửa đêm. Ngoài nhiệm vụ, mỗi lần lạy, dâng hương, lần hạt, ngồi tĩnh, thả hoa đăng đều được công đức (có giới hạn mỗi ngày để ai cũng tu đều đặn). Lạy cùng lúc với người khác được thêm công đức <b>đồng tâm</b>.</p>`}rank(){const t=vS.map(([c,l])=>`<button data-scope="${c}" class="${this.scope===c?"on":""}">${l}</button>`).join(""),e=this.board;if(!e||e.scope!==this.scope)return`<div class="seg">${t}</div><p class="sheet-sub">Đang tải…</p>`;const n=(c,l,h=!1)=>`<div class="rank-row ${h?"me":""} ${c<=3?"top"+c:""}">
        <span class="rank-n">${c}</span>
        <span class="rank-name"><b>${Kc(l.name)}</b><small>${xf[l.lv]??""}</small></span>
        <span class="rank-merit">${l.merit.toLocaleString("vi-VN")}</span>
      </div>`,s=e.me,r=e.rows.length?e.rows.map((c,l)=>n(l+1,c,!!s&&s.rank===l+1)).join(""):'<p class="sheet-sub">Chưa có ai. Hãy là người đầu tiên!</p>',o=s&&s.rank>e.rows.length?`<div class="rank-gap">…</div>${n(s.rank,s,!0)}`:"";return`<div class="seg">${t}</div><div class="rank-list">${r}${o}</div>${s?"":'<p class="sheet-sub">Bạn chưa có công đức trong mục này.</p>'}
      <p class="sheet-sub">${e.count.toLocaleString("vi-VN")} người có công đức · tên hiển thị lấy theo Cài đặt.</p>`}}const Kc=i=>i.replace(/[&<>"']/g,t=>`&#${t.charCodeAt(0)};`),_f=["Chúc đạo hữu thân tâm an lạc","Tùy hỷ công đức của đạo hữu","Chúc bạn một ngày bình an","Mong bạn sớm gặp được duyên lành"],yS={nau:"nâu",lam:"lam",xam:"xám",vang:"vàng",cam:"cà sa"};class MS{constructor(t,e){this.act=e,this.el.className="sheet profile",t.appendChild(this.el),this.el.addEventListener("keydown",n=>n.stopPropagation())}el=document.createElement("div");p=null;get isOpen(){return this.el.classList.contains("open")}get pid(){return this.isOpen?this.p?.pid??null:null}request(t){this.act.send({t:"profile",...t})}show(t){const e=this.p?.pid===t.pid?this.el.querySelector("input")?.value??"":"";this.p=t,this.render(e),this.el.classList.add("open")}close(){this.el.classList.remove("open")}render(t){const e=this.p,n=e.bond==="self",s=e.id!==null?this.act.zoneOf(e.id):null,r=n?"hồ sơ của bạn":s?`đang ở ${s}`:e.online?"đang ở phòng khác":"đang không ở chùa",o={none:'<button class="primary" data-act="friend">Kết bạn đồng tu</button>',sent:'<button class="ghost" data-act="unfriend">Đã gửi lời mời · Huỷ</button>',got:'<button class="primary" data-act="friend">Nhận lời kết bạn</button>',yes:'<button class="primary" data-act="chat">Nhắn tin riêng</button>',self:""}[e.bond],a=n?'<button class="ghost" data-act="edit">Đổi tên, áo, lời giới thiệu</button>':`
        <div class="field-label">Gửi lời chúc</div>
        <div class="wish-chips">${_f.map((d,f)=>`<button data-wish="${f}">${d}</button>`).join("")}</div>
        <div class="name-row">
          <input maxlength="80" placeholder="Hoặc tự viết lời chúc…" enterkeyhint="send" value="${Jc(t)}">
          <button class="ghost small" data-act="wish">Gửi</button>
        </div>
        <div class="card-main">
          <button class="ghost" data-act="gift" ${e.giftsLeft<=0?"disabled":""}>Tặng hương <small>còn ${e.giftsLeft}</small></button>
          ${o}
        </div>
        <p class="sheet-sub">${e.bond==="yes"?"Hai bạn là bạn đồng tu.":"Kết bạn đồng tu để nhắn tin riêng và thấy nhau khi vào chùa."}</p>
        <div class="card-more">
          ${e.id!==null?'<button data-act="greet">Chắp tay chào</button>':""}
          ${e.bond==="yes"?'<button data-act="unfriend">Bỏ kết bạn</button>':""}
          <button data-act="mute">${this.act.muted(e.pid)?"Bỏ tắt tiếng":"Tắt tiếng"}</button>
          ${e.id!==null?'<button class="danger" data-act="report">Báo xấu</button>':""}
        </div>`;this.el.innerHTML=`
      <button class="sheet-close" aria-label="Đóng">×</button>
      <div class="card-head">
        <div class="avatar">${em(e.kind,e.robe,e.skin)}</div>
        <div class="card-who">
          <b>${Jc(e.name)}</b>
          <span>${e.kind==="ni"?"Tiểu ni":"Chú tiểu"} · áo ${yS[e.robe]??"nâu"} · <em>${e.level}</em></span>
          <small class="${e.online?"on":""}">${r}</small>
        </div>
      </div>
      ${e.bio?`<p class="card-bio">“${Jc(e.bio)}”</p>`:n?'<p class="sheet-sub">Bạn chưa có lời giới thiệu. Thêm trong Cài đặt → Nhân vật.</p>':""}
      <div class="stats">
        <div><b>${e.merit.toLocaleString("vi-VN")}</b><span>công đức</span></div>
        <div><b>${e.bows.toLocaleString("vi-VN")}</b><span>lạy</span></div>
        <div><b>${e.rounds}</b><span>chuỗi hạt</span></div>
        <div><b>${e.streak}</b><span>ngày liên tiếp</span></div>
      </div>
      ${a}`;const c=(d,f)=>this.el.querySelector(d)?.addEventListener("click",f);c(".sheet-close",()=>this.close());const l=e.id!==null?{to:e.id}:{pid:e.pid},h=this.el.querySelector("input"),u=d=>{d.trim()&&(this.act.send({t:"wish",...l,text:d}),h&&(h.value=""))};this.el.querySelectorAll("[data-wish]").forEach(d=>d.addEventListener("click",()=>u(_f[Number(d.dataset.wish)]))),c('[data-act="wish"]',()=>u(h?.value??"")),h?.addEventListener("keydown",d=>{d.key==="Enter"&&u(h.value)}),c('[data-act="gift"]',()=>this.act.send({t:"gift",...l})),c('[data-act="friend"]',()=>this.act.send({t:"friend",...l})),c('[data-act="unfriend"]',()=>{this.act.send({t:"unfriend",pid:e.pid}),this.request(l)}),c('[data-act="chat"]',()=>{this.close(),this.act.chat(e.pid,e.name)}),c('[data-act="greet"]',()=>{this.close(),this.act.greet(e.id)}),c('[data-act="mute"]',()=>{this.act.mute(e.pid,e.name),this.render(h?.value??"")}),c('[data-act="report"]',()=>{this.close(),this.act.report(e.id)}),c('[data-act="edit"]',()=>{this.close(),this.act.editMe()})}}const Jc=i=>i.replace(/[&<>"']/g,t=>`&#${t.charCodeAt(0)};`),bS='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3"/><path d="M3.5 19c.5-3.5 2.8-5.5 5.5-5.5s5 2 5.5 5.5"/><circle cx="16.5" cy="9" r="2.4"/><path d="M15.5 13.6c2.6-.3 4.6 1.5 5 4.9"/></svg>';class SS{constructor(t,e,n,s,r,o){this.myPid=n,this.send=s,this.openProfile=r,this.toast=o,this.pill.className="pill friends-pill",this.pill.setAttribute("aria-label","Bạn đồng tu"),this.pill.onclick=()=>this.isOpen?this.close():this.open(),t.appendChild(this.pill),this.el.className="sheet friends",this.el.addEventListener("keydown",a=>a.stopPropagation()),e.appendChild(this.el),this.paintPill()}pill=document.createElement("button");el=document.createElement("div");list=[];reqIn=[];tab="list";talk=null;unread=new Map;get waiting(){return this.reqIn.length+[...this.unread.values()].reduce((t,e)=>t+e,0)}get pids(){return new Set(this.list.map(t=>t.pid))}get isOpen(){return this.el.classList.contains("open")}open(){this.talk=null,this.tab=this.reqIn.length&&!this.list.length?"req":"list",this.send({t:"friends"}),this.render(),this.el.classList.add("open")}close(){this.el.classList.remove("open"),this.talk=null}chat(t,e){this.talk={pid:t,name:e},this.unread.delete(t),this.render(),this.el.classList.add("open"),this.paintPill()}setFriends(t,e){this.list=t.sort((n,s)=>Number(s.online)-Number(n.online)),this.reqIn=e,this.paintPill(),this.isOpen&&!this.talk&&this.render()}request(t){this.toast(`${t} muốn kết bạn đồng tu với bạn · xem ở biểu tượng bạn bè`)}dm(t){const e=t.from===this.myPid()?t.to:t.from,n=yf(e);if(n.push(t),wS(e,n),this.isOpen&&this.talk?.pid===e)return this.renderTalk(!0);t.from!==this.myPid()&&(this.unread.set(e,(this.unread.get(e)||0)+1),this.paintPill(),this.toast(`${t.name}: ${t.text.length>40?t.text.slice(0,40)+"…":t.text}`))}paintPill(){const t=this.list.filter(n=>n.online).length,e=this.reqIn.length+[...this.unread.values()].reduce((n,s)=>n+s,0);this.pill.innerHTML=`${bS}<b>${t}</b>`,this.pill.title=`${t} bạn đồng tu đang ở chùa`,this.pill.classList.toggle("ready",e>0)}render(){if(this.talk)return this.renderTalk(!1);const t=this.tab==="list"?this.list:this.reqIn,e=t.length?t.map(n=>`<div class="friend-row" data-pid="${n.pid}">
              <span class="f-dot ${n.online?"on":""}"></span>
              <span class="f-name"><b>${ma(n.name)}</b><small>${n.level??""}${n.online?" · đang ở chùa":""}</small></span>
              ${this.tab==="req"?`<button class="primary small" data-yes="${n.pid}">Nhận lời</button><button class="ghost small" data-no="${n.pid}">Thôi</button>`:`<button class="ghost small" data-talk="${n.pid}">Nhắn${this.unread.get(n.pid)?` (${this.unread.get(n.pid)})`:""}</button>`}
            </div>`).join(""):`<p class="sheet-sub">${this.tab==="list"?"Chưa có bạn đồng tu. Chạm vào một người trong chùa, xem hồ sơ và bấm <b>Kết bạn đồng tu</b>.":"Không có lời mời nào."}</p>`;this.el.innerHTML=`
      <button class="sheet-close" aria-label="Đóng">×</button>
      <div class="sheet-title">Bạn đồng tu</div>
      <div class="tabs">
        <button data-tab="list" class="${this.tab==="list"?"on":""}">Bạn bè (${this.list.length})</button>
        <button data-tab="req" class="${this.tab==="req"?"on":""}">Lời mời${this.reqIn.length?` (${this.reqIn.length})`:""}</button>
      </div>
      <div class="friend-list">${e}</div>`,this.el.querySelector(".sheet-close").addEventListener("click",()=>this.close()),this.el.querySelectorAll("[data-tab]").forEach(n=>n.addEventListener("click",()=>{this.tab=n.dataset.tab,this.render()})),this.el.querySelectorAll(".friend-row").forEach(n=>n.addEventListener("click",s=>{const r=s.target,o=n.dataset.pid;r.dataset.yes?this.send({t:"friend",pid:o}):r.dataset.no?this.send({t:"unfriend",pid:o}):r.dataset.talk?this.chat(o,this.list.find(a=>a.pid===o)?.name??""):(this.close(),this.openProfile(o))}))}renderTalk(t){const e=this.talk,n=this.list.find(l=>l.pid===e.pid),s=t?this.el.querySelector("input")?.value??"":"",r=yf(e.pid).map(l=>`<div class="dm ${l.from===this.myPid()?"mine":""}"><span>${ma(l.text)}</span>${l.warn?"<small>Cẩn thận lừa đảo: đừng chuyển tiền cho người mới quen</small>":""}</div>`).join("");this.el.innerHTML=`
      <button class="sheet-close" aria-label="Đóng">×</button>
      <div class="talk-head"><button class="ghost small" data-act="back">‹ Bạn bè</button><b>${ma(n?.name??e.name)}</b><small class="${n?.online?"on":""}">${n?.online?"đang ở chùa":"không ở chùa"}</small></div>
      <div class="dm-list">${r||'<p class="sheet-sub">Hãy gửi lời chào đầu tiên. Tin nhắn riêng chỉ hai bạn thấy.</p>'}</div>
      <div class="name-row">
        <input maxlength="80" placeholder="${n?.online?"Nhắn riêng…":"Bạn ấy không ở chùa lúc này"}" enterkeyhint="send" value="${ma(s)}">
        <button class="primary small" data-act="send">Gửi</button>
      </div>`;const o=this.el.querySelector(".dm-list");o.scrollTop=o.scrollHeight;const a=this.el.querySelector("input"),c=()=>{const l=a.value.trim();l&&(this.send({t:"dm",pid:e.pid,text:l}),a.value="")};this.el.querySelector(".sheet-close").addEventListener("click",()=>this.close()),this.el.querySelector('[data-act="back"]').addEventListener("click",()=>{this.talk=null,this.render()}),this.el.querySelector('[data-act="send"]').addEventListener("click",c),a.addEventListener("keydown",l=>{l.key==="Enter"&&c()}),t&&a.focus()}}const rh=new Map;function yf(i){let t=rh.get(i);if(!t){try{t=JSON.parse(localStorage.getItem("anduyen.dm."+i)||"[]")}catch{t=[]}rh.set(i,t)}return t}function wS(i,t){rh.set(i,t.slice(-50));try{localStorage.setItem("anduyen.dm."+i,JSON.stringify(t.slice(-50)))}catch{}}const ma=i=>i.replace(/[&<>"']/g,t=>`&#${t.charCodeAt(0)};`);let Gs=null;addEventListener("beforeinstallprompt",i=>{i.preventDefault(),Gs=i});function TS(){return!Gs&&!("BeforeInstallPromptEvent"in window)?null:async()=>{if(!Gs)return!1;await Gs.prompt();const{outcome:i}=await Gs.userChoice;return Gs=null,i==="accepted"}}function ES(){"serviceWorker"in navigator&&addEventListener("load",()=>navigator.serviceWorker.register("/sw.js").catch(()=>{}))}const Wr=Math.PI,dn=Math.floor;function im(i,t,e){const n=dn((14-t)/12),s=e+4800-n,r=t+12*n-3;let o=i+dn((153*r+2)/5)+365*s+dn(s/4)-dn(s/100)+dn(s/400)-32045;return o<2299161&&(o=i+dn((153*r+2)/5)+365*s+dn(s/4)-32083),o}function cr(i,t){const e=i/1236.85,n=e*e,s=n*e,r=Wr/180;let o=241502075933e-5+29.53058868*i+1178e-7*n-155e-9*s;o+=33e-5*Math.sin((166.56+132.87*e-.009173*n)*r);const a=359.2242+29.10535608*i-333e-7*n-347e-8*s,c=306.0253+385.81691806*i+.0107306*n+1236e-8*s,l=21.2964+390.67050646*i-.0016528*n-239e-8*s;let h=(.1734-393e-6*e)*Math.sin(a*r)+.0021*Math.sin(2*r*a);h=h-.4068*Math.sin(c*r)+.0161*Math.sin(r*2*c),h=h-4e-4*Math.sin(r*3*c),h=h+.0104*Math.sin(r*2*l)-.0051*Math.sin(r*(a+c)),h=h-.0074*Math.sin(r*(a-c))+4e-4*Math.sin(r*(2*l+a)),h=h-4e-4*Math.sin(r*(2*l-a))-6e-4*Math.sin(r*(2*l+c)),h=h+.001*Math.sin(r*(2*l-c))+5e-4*Math.sin(r*(2*c+a));const u=e<-11?.001+839e-6*e+2261e-7*n-845e-8*s-81e-9*e*s:-278e-6+265e-6*e+262e-6*n;return dn(o+h-u+.5+t/24)}function oh(i,t){const e=(i-24515455e-1-t/24)/36525,n=e*e,s=Wr/180,r=357.5291+35999.0503*e-1559e-7*n-48e-8*e*n,o=280.46645+36000.76983*e+3032e-7*n;let a=(1.9146-.004817*e-14e-6*n)*Math.sin(s*r);a+=(.019993-101e-6*e)*Math.sin(s*2*r)+29e-5*Math.sin(s*3*r);let c=(o+a)*s;return c-=Wr*2*dn(c/(Wr*2)),dn(c/Wr*6)}function Zc(i,t){const e=im(31,12,i)-2415021,n=dn(e/29.530588853),s=cr(n,t);return oh(s,t)>=9?cr(n-1,t):s}function AS(i,t){const e=dn((i-2415021076998695e-9)/29.530588853+.5);let n=0,s=1,r=oh(cr(e+s,t),t);do n=r,s++,r=oh(cr(e+s,t),t);while(r!==n&&s<14);return s-1}function CS(i,t,e,n=7){const s=im(i,t,e),r=dn((s-2415021076998695e-9)/29.530588853);let o=cr(r+1,n);o>s&&(o=cr(r,n));let a=Zc(e,n),c=a,l;a>=o?(l=e,a=Zc(e-1,n)):(l=e+1,c=Zc(e+1,n));const h=s-o+1,u=dn((o-a)/29);let d=!1,f=u+11;if(c-a>365){const m=AS(a,n);u>=m&&(f=u+10,u===m&&(d=!0))}return f>12&&(f-=12),f>=11&&u<4&&(l-=1),{day:h,month:f,year:l,leap:d}}function RS(i=new Date){const t=new Date(i.getTime()+252e5);return CS(t.getUTCDate(),t.getUTCMonth()+1,t.getUTCFullYear())}const LS=new w(0,pt.hall.y,-19.6),Qc=new w(0,pt.hall.y,-21.6);class PS{group=new Mt;sticks;tips;max=45;constructor(){this.sticks=new Ei(new te(.012,.012,.9,4),O.ridge(),this.max),this.tips=new Ei(new Ut(.022,6,4),O.incense(),this.max);const t=new Bt;let e=11;const n=()=>((e=e*16807%2147483647)-1)/2147483646;for(let s=0;s<this.max;s++){const r=n()*Math.PI*2,o=Math.sqrt(n())*.62,a=new nn().setFromEuler(new gn((n()-.5)*.15,0,(n()-.5)*.15)),c=new w(Qc.x+Math.cos(r)*o,Qc.y+1.4+.45,Qc.z+Math.sin(r)*o);t.compose(c,a,new w(1,1,1)),this.sticks.setMatrixAt(s,t);const l=new w(0,.45,0).applyQuaternion(a).add(c);t.compose(l,new nn,new w(1,1,1)),this.tips.setMatrixAt(s,t)}this.sticks.count=this.tips.count=0,this.group.add(this.sticks,this.tips)}set(t){this.sticks.count=this.tips.count=Math.min(this.max,t*3)}}const IS=[{start:5,name:"Công phu sáng"},{start:19.5,name:"Tụng kinh tối"}],NS=10;function DS(){const i=Gp();for(const t of IS){const e=(i-t.start)*60;if(e>=0&&e<NS)return{name:t.name,elapsed:e}}return null}function US(){const i=new URLSearchParams(location.search).get("am"),t=i?{day:Number(i),month:10}:RS();return t.day===15?{label:`Hôm nay rằm tháng ${t.month} âm lịch`,fullMoon:!0}:t.day===1?{label:`Hôm nay mùng 1 tháng ${t.month} âm lịch`,fullMoon:!1}:null}class kS{constructor(t){this.sound=t}beat=0;syllable=0;lastBell=-99;previewLeft=0;preview(){this.previewLeft=12*.95,this.syllable=0}update(t,e,n){if(this.previewLeft=Math.max(0,this.previewLeft-t),this.previewLeft>0&&(n=!0),!this.sound.on||!e&&!n){this.syllable=0;return}const s=e?n?1:.6:.35;if(this.beat+=t,this.beat>=.95&&(this.beat-=.95,this.sound.mo(.35*s),this.sound.chant(this.syllable,s),this.syllable=(this.syllable+1)%6),!e)return;const r=e.elapsed*60;(r-this.lastBell>=20||r<this.lastBell)&&(this.lastBell=r,this.sound.bell(.22))}}const sm="anduyen.today",Mf=()=>new Date(Date.now()+7*3600*1e3).toISOString().slice(0,10);function OS(){try{const i=JSON.parse(localStorage.getItem(sm)||"null");if(i&&i.day===Mf())return i}catch{}return{day:Mf(),beads:0,bows:0,incense:0}}function ah(i){try{localStorage.setItem(sm,JSON.stringify(i))}catch{}}class FS{constructor(t,e,n){this.today=e,this.onBead=n,this.el.className="beads",this.el.innerHTML=`
      <div class="beads-top">
        <div class="beads-count"></div>
        <div class="beads-mantra">Nam mô A Di Đà Phật</div>
      </div>
      <div class="strand"></div>
      <div class="beads-bottom">
        <button class="ghost mantra-toggle">Ẩn câu niệm</button>
        <button class="primary beads-close">Về chùa</button>
      </div>
      <div class="beads-hint">Vuốt lên hoặc chạm để lần một hạt</div>`,t.appendChild(this.el),this.strand=this.el.querySelector(".strand"),this.countEl=this.el.querySelector(".beads-count");for(let a=0;a<15;a++){const c=document.createElement("i");a===7&&(c.className="current"),this.strand.appendChild(c)}this.el.querySelector(".beads-close").addEventListener("click",()=>this.close());const s=this.el.querySelector(".mantra-toggle");s.addEventListener("click",()=>{this.showMantra=!this.showMantra,this.el.querySelector(".beads-mantra").style.visibility=this.showMantra?"visible":"hidden",s.textContent=this.showMantra?"Ẩn câu niệm":"Hiện câu niệm"});const r=this.strand;r.addEventListener("pointerdown",a=>{this.dragStart=a.clientY,this.dragOffset=0,r.setPointerCapture(a.pointerId)}),r.addEventListener("pointermove",a=>{this.dragStart!==null&&(this.dragOffset=Math.min(0,a.clientY-this.dragStart),this.layout())});const o=()=>{if(this.dragStart===null)return;const a=this.dragOffset;this.dragStart=null,this.dragOffset=0,a>-8||a<-30?this.next():this.layout()};r.addEventListener("pointerup",o),r.addEventListener("pointercancel",o),this.el.addEventListener("wheel",a=>{a.preventDefault(),a.deltaY>0&&this.next()},{passive:!1}),addEventListener("keydown",a=>{this.el.classList.contains("open")&&((a.key===" "||a.key==="ArrowUp"||a.key==="ArrowDown")&&(a.preventDefault(),this.next()),a.key==="Escape"&&this.close())})}el=document.createElement("div");strand;countEl;offset=0;dragStart=null;dragOffset=0;showMantra=!0;get isOpen(){return this.el.classList.contains("open")}open(){this.el.classList.add("open"),this.render()}close(){this.el.classList.remove("open")}next(){this.today.beads++,ah(this.today),this.offset++,this.onBead(),navigator.vibrate?.(8),this.strand.classList.remove("step"),this.strand.offsetWidth,this.strand.classList.add("step"),this.render()}render(){const t=this.today.beads,e=t%108,n=Math.floor(t/108);this.countEl.innerHTML=e===0&&t>0?`Trọn vòng ${n} · nguyện lòng an yên`:`Hạt ${e}/108 · Vòng ${n+1}`,this.layout()}layout(){const t=[...this.strand.children],e=64;t.forEach((n,s)=>{const r=(s-7)*e+this.dragOffset,o=Math.abs(s-7)/7;n.style.transform=`translate(${o*o*30}px, ${r}px) scale(${1-o*.35})`,n.style.opacity=String(1-o*.6)})}}const BS=new Ut(1,10,6,0,Math.PI*2,0,Math.PI/2),tl={vang:new Ft({color:"#ffd77a",emissive:"#ffb02e",emissiveIntensity:.9,roughness:.6,side:De}),hong:new Ft({color:"#ffb3c6",emissive:"#ff5c8a",emissiveIntensity:.9,roughness:.6,side:De}),base:new Ft({color:"#3f7a3a",roughness:.7,side:De}),flame:new Oe({color:"#fff1c2"})};let el=null;function zS(){if(el)return el;const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,0.9)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),el=new jn(i)}function HS(i){const t=new Mt,e=new hp(new Ah({map:zS(),color:i==="hong"?"#ff7aa2":"#ffc24a",transparent:!0,opacity:.55,depthWrite:!1,blending:Ra}));e.scale.setScalar(1.6),e.position.y=.25,t.add(e);const n=new tt(new Yi(.42,18),tl.base);n.rotation.x=-Math.PI/2,t.add(n);for(let o=0;o<2;o++){const a=o?6:8;for(let c=0;c<a;c++){const l=c/a*Math.PI*2+o*.35,h=new tt(BS,tl[i]);h.scale.set(.11,.3-o*.06,.08),h.position.set(Math.cos(l)*(.17-o*.07),.02,Math.sin(l)*(.17-o*.07)),h.rotation.y=-l,h.rotateZ(.55-o*.3),t.add(h)}}const s=new tt(new Ut(.04,8,6),tl.flame);s.position.y=.2,s.scale.y=1.7,t.add(s);const r=new tt(new Ut(.6,8,6),new Oe({visible:!1}));return r.position.y=.2,t.add(r),t.userData.hit=r,t.scale.setScalar(1.8),t}class VS{group=new Mt;items=new Map;set(t){for(const e of this.items.values())this.group.remove(e.mesh);this.items.clear();for(const e of t)this.add(e)}add(t){if(this.items.has(t.id))return;const e=HS(t.color);e.userData.hit.userData.lantern=t.id,this.group.add(e),this.items.set(t.id,{info:t,mesh:e,seed:(t.id*9301+49297)%233280/233280})}setLikes(t,e){const n=this.items.get(t);n&&(n.info.likes=e)}get(t){return this.items.get(t)?.info}all(){return[...this.items.values()].map(t=>t.info)}hitTargets(){return[...this.items.values()].map(t=>t.mesh.userData.hit)}update(t){const e=pt.lake,n=Date.now();for(const s of this.items.values()){const r=(n-s.info.at)/1e3,o=s.seed*Math.PI*2+r*.004+t*.01,a=.35+.5*((Math.sin(s.seed*40+r*.002)+1)/2);s.mesh.position.set(e.x+Math.cos(o)*e.rx*a*.92,e.water+.03+Math.sin(t*1.3+s.seed*10)*.02,e.z+Math.sin(o)*e.rz*a*.92),s.mesh.rotation.y=o*.5}}static launchPoint(t){const e=pt.lake,n=new w(t.x-e.x,0,t.z-e.z).normalize();return new w(e.x+n.x*e.rx*.8,e.water,e.z+n.z*e.rz*.8)}}const GS={vang:["Cầu cho bố mẹ luôn mạnh khỏe","Mong cả nhà bình an, ấm êm","Mong công việc thuận lợi, lòng nhẹ nhàng"],hong:["Mong sớm gặp người hiểu mình","Cầu cho chúng mình bên nhau thật lâu","Mong người ấy cũng nghĩ về mình"]};class WS{el=document.createElement("div");constructor(t){this.el.className="sheet lantern",t.appendChild(this.el)}openWrite(t){let e="vang";const n=()=>{this.el.innerHTML=`
        <button class="sheet-close" aria-label="Đóng">×</button>
        <div class="sheet-title">Thả hoa đăng</div>
        <div class="choice">
          <button data-c="vang" class="${e==="vang"?"on":""}"><span class="dot vang"></span>Cầu an</button>
          <button data-c="hong" class="${e==="hong"?"on":""}"><span class="dot hong"></span>Cầu duyên</button>
        </div>
        <textarea maxlength="80" rows="3" placeholder="Viết lời nguyện của bạn (tối đa 80 chữ)…"></textarea>
        <div class="chips">${GS[e].map(r=>`<button>${r}</button>`).join("")}</div>
        <button class="primary release">Thả đèn</button>`;const s=this.el.querySelector("textarea");s.addEventListener("keydown",r=>r.stopPropagation()),this.el.querySelector(".sheet-close").addEventListener("click",()=>this.close()),this.el.querySelectorAll(".choice button").forEach(r=>r.addEventListener("click",()=>{const o=s.value;e=r.dataset.c,n(),this.el.querySelector("textarea").value=o})),this.el.querySelectorAll(".chips button").forEach(r=>r.addEventListener("click",()=>s.value=r.textContent||"")),this.el.querySelector(".release").addEventListener("click",()=>{const r=s.value.trim();if(!r)return s.focus();this.close(),t(e,r)})};n(),this.el.classList.add("open")}openRead(t,e,n){this.el.innerHTML=`
      <button class="sheet-close" aria-label="Đóng">×</button>
      <div class="sheet-title"><span class="dot ${t.color}"></span>${t.color==="hong"?"Đèn cầu duyên":"Đèn cầu an"}</div>
      <p class="wish"></p>
      <p class="sheet-sub">Thả bởi <b></b> · ${t.likes} người tùy hỷ</p>
      ${e?'<p class="sheet-sub">Đây là đèn của bạn.</p>':'<button class="primary like">Tùy hỷ</button>'}`,this.el.querySelector(".wish").textContent=`“${t.text}”`,this.el.querySelector(".sheet-sub b").textContent=t.name,this.el.querySelector(".sheet-close").addEventListener("click",()=>this.close()),this.el.querySelector(".like")?.addEventListener("click",()=>{n(),this.close()}),this.el.classList.add("open")}close(){this.el.classList.remove("open")}}const Ba={bank:"VIB",bankName:"VIB",account:"076037442",name:"BUI VAN QUYET",note:"Gop gao chua An Duyen"};class $S{el=document.createElement("div");constructor(t){this.el.className="sheet donate",t.appendChild(this.el)}open(t){const e=`https://img.vietqr.io/image/${encodeURIComponent(t.bank)}-${encodeURIComponent(t.account)}-compact2.png?addInfo=${encodeURIComponent(t.note)}&accountName=${encodeURIComponent(t.name)}`;this.el.innerHTML=`
      <button class="sheet-close" aria-label="Đóng">×</button>
      <div class="sheet-title">Góp gạo nuôi chùa</div>
      <p class="sheet-sub">Chùa An Duyên mở cửa miễn phí cho mọi người. Mỗi bát gạo góp vào giúp chùa giữ máy chủ chạy và làm cảnh chùa đẹp thêm.</p>
      <img class="qr" alt="Mã QR chuyển khoản" src="${e}">
      <div class="acct">
        <div><span>Ngân hàng</span><b>${ga(t.bankName??t.bank)}</b></div>
        <div><span>Số tài khoản</span><b>${ga(t.account)}</b> <button class="ghost copy">Chép</button></div>
        <div><span>Chủ tài khoản</span><b>${ga(t.name)}</b></div>
        <div><span>Nội dung</span><b>${ga(t.note)}</b></div>
      </div>
      <p class="sheet-sub warn">Chùa chỉ nhận góp qua mã này. Không ai trong chùa nhắn tin xin tiền riêng — gặp người như vậy hãy báo xấu.</p>`,this.el.querySelector(".sheet-close").addEventListener("click",()=>this.close());const n=this.el.querySelector(".copy");n.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(t.account),n.textContent="Đã chép"}catch{n.textContent="Không chép được"}}),this.el.classList.add("open")}close(){this.el.classList.remove("open")}}const ga=i=>i.replace(/[&<>"']/g,t=>`&#${t.charCodeAt(0)};`),rm="anduyen.settings";function qS(i){const t={volume:.8,chant:!0,quality:i?"vua":"dep",autoCam:!0,camSpeed:1,names:!0,qualityManual:!1,haptics:!0};try{return{...t,...JSON.parse(localStorage.getItem(rm)||"{}")}}catch{return t}}function om(i){try{localStorage.setItem(rm,JSON.stringify(i))}catch{}}const XS=[["tieu","Chú tiểu"],["ni","Tiểu ni"]],nl={nau:"Nâu",lam:"Lam",xam:"Xám",vang:"Vàng",cam:"Cà sa"},il={sang:"Sáng",hong:"Hồng hào",dong:"Bánh mật",nau:"Rám nắng"},jS=[["nhe","Nhẹ","Tiết kiệm pin, máy yếu vẫn mượt"],["vua","Vừa","Cân bằng đẹp và mượt"],["dep","Đẹp","Nét nhất, có bóng đổ mềm"]],YS=[["nv","Nhân vật"],["at","Âm thanh"],["ha","Hình ảnh"],["tt","Thông tin"]];class KS{constructor(t,e,n,s,r){this.settings=n,this.mobile=s,this.hooks=r,this.el.className="sheet settings",t.appendChild(this.el),this.el.addEventListener("keydown",o=>o.stopPropagation()),this.saved={...e},this.draft={...e}}el=document.createElement("div");tab="nv";draft;saved;setProfile(t){this.saved={...t},this.draft={...t}}rect(){return this.el.getBoundingClientRect()}get isOpen(){return this.el.classList.contains("open")}open(t="nv"){this.draft={...this.saved},this.tab=t,this.render(),this.el.classList.add("open"),this.hooks.onPreview(t==="nv")}close(){this.isOpen&&(this.el.classList.remove("open"),this.hooks.onPreview(!1),this.commitLook())}commitLook(){const t=this.draft.name.trim().replace(/\s+/g," ");t.length<2?(this.hooks.toast("Tên cần ít nhất 2 chữ, chùa giữ tên cũ"),this.draft.name=this.saved.name):this.draft.name=t,this.draft.bio=(this.draft.bio??"").trim().replace(/\s+/g," ");const e=this.draft,n=this.saved;e.name===n.name&&e.kind===n.kind&&e.robe===n.robe&&e.skin===n.skin&&(e.bio??"")===(n.bio??"")||(this.saved={...e},lo(this.saved),this.hooks.onLook(this.saved,!0),this.hooks.toast(`Đã lưu · mọi người sẽ thấy bạn là “${this.saved.name}”`))}set(t,e){this.settings[t]=e,om(this.settings),this.hooks.onSettings(this.settings)}render(){const t=YS.map(([e,n])=>`<button data-tab="${e}" class="${e===this.tab?"on":""}">${n}</button>`).join("");this.el.innerHTML=`
      <button class="sheet-close" aria-label="Đóng">×</button>
      <div class="sheet-title">Cài đặt</div>
      <div class="tabs" role="tablist">${t}</div>
      <div class="tab-body">${this.body()}</div>`,this.el.querySelector(".sheet-close").addEventListener("click",()=>this.close()),this.el.querySelectorAll(".tabs button").forEach(e=>e.addEventListener("click",()=>{this.tab=e.dataset.tab,this.render(),this.hooks.onPreview(this.tab==="nv")})),this.wire()}body(){const t=this.settings,e=this.draft;if(this.tab==="nv"){const s=XS.map(([a,c])=>`<button data-kind="${a}" class="${e.kind===a?"on":""}">${c}</button>`).join(""),r=Object.keys(ds).map(a=>`<button class="swatch ${(e.skin??"dong")===a?"on":""}" data-skin="${a}" style="--c:${ds[a][0]}" title="${il[a]}" aria-label="Da ${il[a]}"></button>`).join(""),o=Object.keys(yn).map(a=>`<button class="swatch ${e.robe===a?"on":""}" data-robe="${a}" style="--c:${yn[a]}" title="${nl[a]}" aria-label="Áo ${nl[a]}"></button>`).join("");return`
        <label class="field-label" for="st-name">Pháp danh / tên hiển thị</label>
        <div class="name-row">
          <input id="st-name" maxlength="24" autocomplete="off" spellcheck="false" value="${bf(e.name)}">
          <button class="ghost small" data-act="random">Thỉnh tên</button>
        </div>
        <p class="sheet-sub">Đổi tên miễn phí bất cứ lúc nào. Tên thô tục sẽ bị chùa thay bằng tên khác.</p>
        <label class="field-label" for="st-bio">Đôi lời về bạn <span class="pick-name">hiện trên hồ sơ</span></label>
        <textarea id="st-bio" maxlength="80" rows="2" placeholder="Ví dụ: Thích nghe kinh buổi tối, mong gặp bạn cùng tu.">${bf(e.bio??"")}</textarea>
        <div class="field-label">Hình dáng</div>
        <div class="seg">${s}</div>
        <div class="field-label">Màu da <span class="pick-name">${il[e.skin??"dong"]}</span></div>
        <div class="swatches">${r}</div>
        <div class="field-label">Màu áo <span class="pick-name">${nl[e.robe]}</span></div>
        <div class="swatches">${o}</div>
        <button class="primary" data-act="done">Xong</button>`}if(this.tab==="at")return`
        ${Hs("sound","Âm thanh chùa","Chim, ve, dế, chuông, mõ",this.hooks.soundOn())}
        <label class="field-label" for="st-vol">Âm lượng <span class="pick-name">${Math.round(t.volume*100)}%</span></label>
        <input id="st-vol" type="range" min="0" max="100" value="${Math.round(t.volume*100)}">
        ${"vibrate"in navigator?Hs("haptics","Rung nhẹ khi bấm","Khi lần hạt, bấm nút lễ, biểu cảm",t.haptics):""}
        ${Hs("chant","Tụng kinh thời khoá","Công phu 5:00 sáng, tụng kinh 19:30 tối, và tiếng niệm khe khẽ trong Chánh điện",t.chant)}
        <button class="ghost" data-act="listen">Nghe thử tiếng niệm Phật</button>
        <p class="sheet-sub">Tiếng niệm "Nam mô A Di Đà Phật" theo nhịp mõ, như trong Chánh điện.</p>`;if(this.tab==="ha")return`
        <div class="field-label">Chất lượng hình</div>
        <div class="seg tall">${jS.map(([r,o,a])=>`<button data-q="${r}" class="${t.quality===r?"on":""}"><b>${o}</b><small>${a}</small></button>`).join("")}</div>
        <p class="sheet-sub">${t.qualityManual?"Bạn đã tự chọn.":"Chùa tự giảm khi máy chạy chậm."} Điện thoại nóng máy hoặc giật thì chọn <b>Nhẹ</b>.</p>
        ${document.fullscreenEnabled?Hs("full","Toàn màn hình","Ẩn thanh địa chỉ để nhìn rộng hơn",!!document.fullscreenElement):""}
        ${Hs("autoCam","Camera tự theo sau lưng","Khi đi tới, camera từ từ quay ra sau nhân vật",t.autoCam)}
        <label class="field-label" for="st-cam">Tốc độ xoay camera <span class="pick-name">${t.camSpeed.toFixed(1)}×</span></label>
        <input id="st-cam" type="range" min="5" max="18" value="${Math.round(t.camSpeed*10)}">
        ${Hs("names","Hiện tên người khác","Tắt đi để ngắm cảnh cho thanh tịnh",t.names)}`;const n=this.hooks.today();return`
      <div class="field-label">Hôm nay của bạn</div>
      <div class="stats">
        <div><b>${n.bows}</b><span>lạy</span></div>
        <div><b>${n.incense}</b><span>nén hương</span></div>
        <div><b>${n.beads}</b><span>hạt niệm Phật</span></div>
      </div>
      <div class="field-label">Mời bạn bè vào cùng phòng</div>
      <button class="ghost" data-act="invite">Chép đường dẫn mời</button>
      ${this.installRow()}
      <button class="ghost" data-act="journal">Hồ sơ tu tập & tài khoản</button>
      <button class="ghost" data-act="guide">Xem lại hướng dẫn</button>
      <div class="field-label">Cách đi lại</div>
      <p class="sheet-sub">${this.mobile?"Ngón cái trái kéo để đi, đẩy hết cỡ để chạy · vuốt bên phải để nhìn quanh · chạm vào chỗ ngồi để ngồi.":"<b>W A S D</b> để đi · giữ <b>Shift</b> để chạy · <b>Q E</b> hoặc kéo chuột để xoay · lăn chuột để gần xa · bấm vào chỗ ngồi để ngồi."}</p>
      <p class="sheet-sub">Không cần tài khoản: tên và tiến độ lưu ngay trên máy này.</p>`}wire(){const t=a=>this.el.querySelector(a),e=()=>this.hooks.onLook({...this.draft},!1),n=t("#st-name");n?.addEventListener("input",()=>{this.draft.name=n.value,e()});const s=t("#st-bio");s?.addEventListener("input",()=>this.draft.bio=s.value),n?.addEventListener("keydown",a=>{a.key==="Enter"&&n.blur()}),t('[data-act="random"]')?.addEventListener("click",()=>{this.draft.name=Vp(),n&&(n.value=this.draft.name),e()}),t('[data-act="done"]')?.addEventListener("click",()=>this.close()),this.el.querySelectorAll("[data-kind]").forEach(a=>a.addEventListener("click",()=>{this.draft.kind=a.dataset.kind,e(),this.rerender()})),this.el.querySelectorAll("[data-skin]").forEach(a=>a.addEventListener("click",()=>{this.draft.skin=a.dataset.skin,e(),this.rerender()})),this.el.querySelectorAll("[data-robe]").forEach(a=>a.addEventListener("click",()=>{this.draft.robe=a.dataset.robe,e(),this.rerender()})),this.el.querySelectorAll("[data-toggle]").forEach(a=>a.addEventListener("change",()=>{const c=a.dataset.toggle;c==="sound"?this.hooks.setSound(a.checked):c==="full"?this.fullscreen(a.checked):this.set(c,a.checked)}));const r=t("#st-vol");r?.addEventListener("input",()=>{this.set("volume",Number(r.value)/100),r.previousElementSibling.querySelector(".pick-name").textContent=`${r.value}%`,Number(r.value)>0&&!this.hooks.soundOn()&&this.hooks.setSound(!0)});const o=t("#st-cam");o?.addEventListener("input",()=>{this.set("camSpeed",Number(o.value)/10),o.previousElementSibling.querySelector(".pick-name").textContent=`${(Number(o.value)/10).toFixed(1)}×`}),this.el.querySelectorAll("[data-q]").forEach(a=>a.addEventListener("click",()=>{this.settings.qualityManual=!0,this.set("quality",a.dataset.q),this.rerender()})),t('[data-act="listen"]')?.addEventListener("click",()=>{this.hooks.soundOn()||this.hooks.setSound(!0),this.hooks.previewChant()}),t('[data-act="journal"]')?.addEventListener("click",()=>{this.close(),this.hooks.showJournal("me")}),t('[data-act="guide"]')?.addEventListener("click",()=>{this.close(),this.hooks.showGuide()}),t('[data-act="install"]')?.addEventListener("click",async a=>{const c=a.currentTarget,l=!!this.hooks.install&&await this.hooks.install();c.textContent=l?"Đã thêm vào màn hình chính":"Mở menu ⋮ của trình duyệt → Thêm vào màn hình chính"}),t('[data-act="invite"]')?.addEventListener("click",async a=>{const c=a.currentTarget;try{await navigator.clipboard.writeText(location.href),c.textContent="Đã chép · gửi cho bạn bè nhé"}catch{c.textContent="Không chép được, hãy chép thanh địa chỉ"}})}installRow(){if(matchMedia("(display-mode: standalone), (display-mode: fullscreen)").matches)return"";const t=/iPhone|iPad|iPod/.test(navigator.userAgent);return this.hooks.install?'<div class="field-label">Mở chùa như một ứng dụng</div><button class="ghost" data-act="install">Thêm chùa vào màn hình chính</button>':t?'<div class="field-label">Mở chùa như một ứng dụng</div><p class="sheet-sub">Bấm nút <b>Chia sẻ</b> của Safari rồi chọn <b>Thêm vào MH chính</b>: lần sau chạm biểu tượng là vào chùa, toàn màn hình.</p>':""}async fullscreen(t){try{t?await document.documentElement.requestFullscreen({navigationUI:"hide"}):document.fullscreenElement&&await document.exitFullscreen()}catch{this.hooks.toast("Trình duyệt này chưa cho toàn màn hình")}}rerender(){const t=this.el.scrollTop;this.render(),this.el.scrollTop=t}}function Hs(i,t,e,n){return`
    <label class="toggle">
      <span><b>${t}</b><small>${e}</small></span>
      <input type="checkbox" data-toggle="${i}" ${n?"checked":""}>
      <i aria-hidden="true"></i>
    </label>`}const bf=i=>i.replace(/[&<>"']/g,t=>`&#${t.charCodeAt(0)};`);ES();const _r=matchMedia("(pointer: coarse)").matches;document.documentElement.classList.toggle("touch",_r);const am=document.getElementById("scene"),an=new ap({canvas:am,antialias:!0,powerPreference:"high-performance"});an.setSize(innerWidth,innerHeight);an.toneMapping=dh;an.toneMappingExposure=1;an.shadowMap.enabled=!0;an.shadowMap.type=Lf;an.shadowMap.autoUpdate=!1;let JS=0,cm=1;const on=qS(_r),Sn=new Eh;function Kh(i){an.setPixelRatio(Math.min(devicePixelRatio,i==="nhe"?1:i==="vua"?1.5:2)),an.setSize(innerWidth,innerHeight),cm=i==="dep"&&!_r?1:i==="dep"?2:3;const t=i!=="nhe";an.shadowMap.enabled!==t&&(an.shadowMap.enabled=t,Sn.traverse(e=>{if(e instanceof tt)for(const n of Array.isArray(e.material)?e.material:[e.material])n.needsUpdate=!0}))}Kh(on.quality);const pn=new Ze(55,innerWidth/innerHeight,.1,1800),Ja=new v1(Sn,an,_r);await Xb();const Jh=J1();Sn.add(Jh.root);for(const i of Jh.lights)Ja.addLanternLight(i);for(const i of Jp)Ja.addWarmLight(i.pos,i.intensity,i.range);const lm=new Y1([new w(0,2.5,33),new w(0,pt.hall.y+2.6,-21.6),new w(50,1.6,-19.5)]);Sn.add(lm.points);const hm=new K1;Sn.add(hm.group);const ch=new PS;Sn.add(ch.group);const $i=new VS;Sn.add($i.group);const fo=US();fo?.fullMoon&&Ja.moon.scale.setScalar(1.8);const oe=f1(),Xt=new Bh(oe);Sn.add(Xt.root);const um=pt.spawn.clone();Xt.root.position.copy(um);Xt.root.rotation.y=Math.PI;const Dn=new Yb(pn,ti);Dn.snap(um);Dn.sensitivity=on.camSpeed;Dn.autoFollow=on.autoCam;zh.show=on.names;Hh.on=on.haptics;const ei=new Q1;ei.setVolume(on.volume);let Qe=null;const Yt=new Zb(document.getElementById("hud"),oe.name,i=>i?ei.start():ei.stop(),()=>ur());function ZS(i){const t=Bp[i];Yt.fade(()=>{ur(),fn=null,Hn=null,Xt.state="idle",Xt.root.position.copy(t.pos),Xt.root.rotation.y=t.yaw+Math.PI,Dn.yaw=t.yaw,Dn.snap(t.pos)})}const hn=document.getElementById("hud"),Je=new Map,So=new Ip(hn),dm="anduyen.muted",Pn=new Set;try{for(const i of JSON.parse(localStorage.getItem(dm)||"[]"))Pn.add(i)}catch{}function QS(){try{localStorage.setItem(dm,JSON.stringify([...Pn]))}catch{}}const me=new iS(()=>({name:oe.name,kind:oe.kind,robe:oe.robe,skin:oe.skin,bio:oe.bio??"",beads:oe.beads,cushion:oe.cushion,room:new URLSearchParams(location.search).get("phong")}),tw,i=>{if(!i){for(const t of Je.values())t.dispose(Sn);Je.clear(),Yt.setCount(0)}});function Sf(i){i.id===me.myId||Je.has(i.id)||Je.set(i.id,new Jb(i,Sn,hn))}function tw(i){switch(i.t){case"welcome":{i.saved&&(Object.assign(oe,i.saved),lo(oe),Xt.setLook(oe),Yt.setName(oe.name),Qn.setProfile(oe),Yt.toast(i.user?`Đã đăng nhập @${i.user} · chào mừng ${oe.name} trở lại`:`Chào mừng ${oe.name} trở lại`,4500)),nS(),hh.clear();for(const e of i.peers)Sf(e);ch.set(i.incense),$i.set(i.lanterns),Yt.setCount(i.peers.length+1);const t=new URL(location.href);t.searchParams.set("phong",i.room),history.replaceState(null,"",t),fm(!0);break}case"join":Sf(i.peer);break;case"look":i.peer.id===me.myId?i.peer.name!==oe.name&&(oe.name=i.peer.name,lo(oe),Yt.setName(oe.name)):Je.get(i.peer.id)?.setLook(i.peer);break;case"leave":Je.get(i.id)?.dispose(Sn),Je.delete(i.id);break;case"state":Je.get(i.id)?.setState(i.x,i.y,i.z,i.ry,i.s);break;case"chat":{if(i.id===me.myId){So.say(i.text,!1),Yt.addLog(oe.name,i.text);break}const t=Je.get(i.id);if(!t||Pn.has(t.info.pid)||t.monk.root.position.distanceTo(Xt.root.position)>Pp)break;t.say(i.text,i.warn),Yt.addLog(i.name,i.text,i.warn);break}case"emote":Je.get(i.id)?.emote(i.e);break;case"greet":Yt.toast(`${i.name} chắp tay chào bạn`);break;case"notice":Yt.toast(i.text,4500);break;case"count":Yt.setCount(i.n);break;case"incense":ch.set(i.n),i.id!==me.myId&&Ka(Xt.root.position.x,Xt.root.position.z)==="Chánh điện"&&Yt.toast(`${i.name} vừa thắp hương`);break;case"bell":ei.on&&ei.bell(.45),Yt.toast(i.id===me.myId?"Bạn vừa thỉnh chuông":`${i.name} vừa thỉnh chuông`);break;case"lantern":$i.add(i.lantern),i.lantern.pid===me.myPid&&Yt.toast("Đèn của bạn đang trôi trên hồ sen");break;case"likes":$i.setLikes(i.lantern,i.n);break;case"tuyhy":Yt.toast(`${i.name} tùy hỷ lời nguyện “${i.text}”`,5e3);break;case"xam":Je.get(i.id)?.say(nm(i.n),!1);break;case"xam-match":Za.showMatch(i.names);break;case"merit":ji.update(i.me,i.gain),i.gain&&us(12);break;case"board":ji.setBoard(i);break;case"journal":lr.update(i.j);break;case"account-err":lr.error(i.text);break;case"login-ok":Qp(i.cid);break;case"profile":(Aa===i.p.pid||Aa===i.p.id||za.pid===i.p.pid)&&za.show(i.p),Aa=null;break;case"wish":if(Pn.has(i.pid))break;hr.addWords({kind:"wish",name:i.name,text:i.text,at:Date.now()}),Yt.toast(`${i.name} gửi lời chúc: “${i.text}”`,6e3),Yt.addLog(i.name,`(gửi riêng bạn) ${i.text}`,i.warn),us(15);break;case"gift":hr.addWords({kind:"gift",name:i.name,text:"Dâng một nén hương cầu an cho bạn",at:Date.now()}),Yt.toast(`${i.name} vừa dâng một nén hương cầu an cho bạn`,5e3),us(15);break;case"friend-req":Pn.has(i.pid)||qi.request(i.name);break;case"friends":qi.setFriends(i.list,i.reqIn);break;case"dm":if(i.from!==me.myPid&&Pn.has(i.from))break;qi.dm(i),i.from!==me.myPid&&us(10);break}}Yt.onSend=i=>me.send({t:"chat",text:i});Yt.onEmote=i=>{me.send({t:"emote",e:i}),So.emote(i),i==="chap"&&Xt.bow()};let wf=0;const Or={x:0,z:0,ry:0,s:-1};function fm(i=!1){const t=performance.now(),e=Xt.root.position,n=Qe?2:Xt.state==="walk"?1:0,s=Math.abs(e.x-Or.x)+Math.abs(e.z-Or.z)>.05||Math.abs(Xt.root.rotation.y-Or.ry)>.05||n!==Or.s;!i&&t-wf<(s?100:2e3)||(wf=t,Object.assign(Or,{x:e.x,z:e.z,ry:Xt.root.rotation.y,s:n}),me.send({t:"state",x:e.x,y:e.y,z:e.z,ry:Xt.root.rotation.y,s:n}))}let Tf=0;const lr=new oS(hn,{send:i=>me.send(i),profile:()=>oe,code:()=>tm(),switchTo:i=>Qp(i),signOut:()=>tS(),editLook:()=>Qn.open("nv"),toast:i=>Yt.toast(i,4e3),equip:i=>{Object.assign(oe,i),lo(oe),Xt.setLook(oe),Qn.setProfile(oe),clearTimeout(Tf),Tf=window.setTimeout(()=>me.send({t:"look",name:oe.name,kind:oe.kind,robe:oe.robe,skin:oe.skin,bio:oe.bio??"",beads:oe.beads,cushion:oe.cushion}),1200)}});let Aa=null;const za=new MS(hn,{send:i=>me.send(i),greet:i=>{me.send({t:"greet",to:i}),Xt.bow(),So.emote("chap")},muted:i=>Pn.has(i),mute:(i,t)=>{Pn.has(i)?Pn.delete(i):Pn.add(i),QS(),Yt.toast(Pn.has(i)?`Đã tắt tiếng ${t}`:`Đã bỏ tắt tiếng ${t}`)},report:i=>me.send({t:"report",who:i}),zoneOf:i=>{const t=Je.get(i);return t?Ka(t.monk.root.position.x,t.monk.root.position.z):null},chat:(i,t)=>qi.chat(i,t),editMe:()=>Qn.open("nv")});function pm(i){Aa="to"in i?i.to:i.pid,za.request(i)}function ew(i){pm({to:i.info.id})}const Bi=OS(),ji=new _S(hn,i=>me.send(i)),qi=new SS(ji.row,hn,()=>me.myPid,i=>me.send(i),i=>pm({pid:i}),i=>Yt.toast(i,4500));let Ca=0;setInterval(()=>{Ca&&(me.send({t:"beads",n:Ca}),Ca=0)},2e3);const nw=new FS(hn,Bi,()=>{Ca++,us(6),ei.on&&ei.bead()}),Za=new hS(hn),Qa=new WS(hn),mm=new $S(hn);function gm(){Ba&&mm.open(Ba)}Ba&&Yt.addDonate(gm);const vm=new kS(ei);let xm=!1;const Qn=new KS(hn,oe,on,_r,{onLook:(i,t)=>{Xt.setLook(i),Yt.setName(i.name.trim()||oe.name),t&&(Object.assign(oe,i),me.send({t:"look",name:i.name,kind:i.kind,robe:i.robe,skin:i.skin,bio:i.bio??"",beads:i.beads,cushion:i.cushion}))},onSettings:i=>{ei.setVolume(i.volume),Dn.sensitivity=i.camSpeed,Dn.autoFollow=i.autoCam,zh.show=i.names,Hh.on=i.haptics,Kh(i.quality)},onPreview:i=>{xm=i,i||pn.clearViewOffset()},soundOn:()=>!Yt.muted,setSound:i=>Yt.setSound(i),today:()=>Bi,toast:i=>Yt.toast(i,3500),showGuide:()=>ym(),showJournal:i=>lr.open(i),previewChant:()=>vm.preview(),install:TS()});Yt.addSettings(()=>Qn.isOpen?Qn.close():Qn.open());function iw(i){const t=Qn.rect(),e=innerWidth,n=innerHeight,s=t.left>e*.35,r=s?t.left:e,o=s?n:t.top,a=Ia.clamp(1.15*n/(.6*Math.max(o,120)*1.04),2.4,7),c=Xt.root.position,l=Xt.root.rotation.y+Math.sin(i*.5)*.6;pn.position.set(c.x+Math.sin(l)*a,c.y+.95,c.z+Math.cos(l)*a),pn.lookAt(c.x,c.y+.55,c.z),pn.setViewOffset(e,n,s?e/2-r/2:0,s?0:n/2-o/2,e,n),pn.updateMatrixWorld()}const sw=new w(-15,0,52);function rw(i,t){const e={id:"hat",label:"Tràng hạt"};return i==="Chánh điện"?[{id:"lay",label:"Lạy"},{id:"huong",label:"Thắp hương"},e]:i==="Bảo tháp"?[{id:"lay",label:"Lạy"},e]:i==="Hồ sen · Cầu Duyên"?[{id:"den",label:"Thả hoa đăng"},{id:"xam",label:"Xin xăm"},e]:t.distanceTo(sw)<8?[{id:"chuong",label:"Thỉnh chuông"},e]:[e]}Yt.onAction=i=>{if(i==="lay"){if(Xt.busy)return;Xt.lay(),me.send({t:"emote",e:"lay"}),Bi.bows+=3,ah(Bi),setTimeout(()=>Yt.toast(`Hôm nay bạn đã lạy ${Bi.bows} lạy`),5600)}else i==="huong"?(ur(),Hn=null,fn=LS.clone(),lh(fn),Zr=()=>{Xt.root.rotation.y=Math.PI,Xt.bow(),me.send({t:"incense"}),Bi.incense++,ah(Bi),Yt.toast("Bạn đã dâng ba nén hương. Hương cháy trong mười phút.")}):i==="hat"?nw.open():i==="den"?Qa.openWrite((t,e)=>me.send({t:"lantern",color:t,text:e})):i==="xam"?Za.open(t=>{hr.addFortune(t),me.send({t:"xam",n:t}),So.say(nm(t),!1)}):i==="chuong"&&me.send({t:"bell"})};const _m=new cS(hn,()=>({x:Xt.root.position.x,z:Xt.root.position.z,ry:Xt.root.rotation.y}),()=>{const i=qi.pids;return[...Je.values()].map(t=>({x:t.monk.root.position.x,z:t.monk.root.position.z,friend:i.has(t.info.pid),name:t.info.name}))},i=>ZS(i),()=>Ka(Xt.root.position.x,Xt.root.position.z)),hr=new uS(hn,{myLanterns:()=>$i.all().filter(i=>i.pid===me.myPid),today:()=>Bi,giftsLeft:()=>ji.gifts,readFortune:i=>Za.reread(i),readLantern:i=>Qa.openRead(i,!0,()=>{})});function ow(){for(const i of[ji,qi,lr,_m,hr,Qn,za,Za,Qa,mm])i.close()}const aw=new fS(hn,["nhiemvu","tuido","bando","xephang","congdong","hoso",...Ba?["gopgao"]:[],"caidat"],i=>{ow(),i==="nhiemvu"?ji.open("nv"):i==="tuido"?hr.open():i==="bando"?_m.open():i==="xephang"?ji.open("xh"):i==="congdong"?qi.open():i==="hoso"?lr.open("me"):i==="gopgao"?gm():i==="caidat"&&Qn.open()});setInterval(()=>aw.setBadges({nhiemvu:ji.ready,congdong:qi.waiting,tuido:hr.unread}),1e3);fo&&setTimeout(()=>Yt.toast(fo.label,5e3),1500);const cw=new gS(hn,_r);function ym(){cw.open(m1)}p1()||setTimeout(ym,900);let fn=null,Hn=null,Zr=null;const fs=new tt(new xo(.22,.3,32),new Oe({color:"#ffe2a8",transparent:!0,opacity:0,depthWrite:!1}));fs.rotation.x=-Math.PI/2;Sn.add(fs);const Fr=new Ep,Ha=new tt(new te(.4,.4,1.2,8),new Oe({visible:!1}));Ha.position.y=.6;Xt.root.add(Ha);function lw(i,t){const e=new Z(i/innerWidth*2-1,-(t/innerHeight)*2+1);Fr.setFromCamera(e,pn);const n=Fr.intersectObjects([...Je.values()].map(a=>a.hit).concat(Ha),!1)[0];if(n?.object===Ha)return lr.open("me");if(n){const a=Je.get(n.object.userData.peer);if(a)return ew(a)}Yt.hideCard();const s=Fr.intersectObjects($i.hitTargets(),!1)[0];if(s){const a=$i.get(s.object.userData.lantern);if(a)return Qa.openRead(a,a.pid===me.myPid,()=>me.send({t:"tuyhy",lantern:a.id}))}const r=Fr.intersectObjects(ar.map(a=>a.mesh),!1)[0],o=Fr.intersectObjects(bn,!1)[0];if(r&&(!o||r.distance<o.distance+.5)){const a=ar.find(c=>c.mesh===r.object);if(a&&a!==Qe){Qe&&ur(),Hn=a,fn=a.position.clone(),lh(fn);return}}o&&(Qe&&ur(),Hn=null,Zr=null,fn=o.point.clone(),lh(fn))}function lh(i){fs.position.set(i.x,Gh(i.x,i.z)+.04,i.z),fs.material.opacity=.9,fs.scale.setScalar(1)}function hw(i){Qe=i,i.taken=!0,Xt.state="sit",Xt.root.position.copy(i.position),Xt.root.rotation.y=i.facing,Dn.yaw=i.facing+Math.PI,Yt.setSitting(!0)}function ur(){if(!Qe)return;Qe.taken=!1;const i=new w(Math.sin(Qe.facing),0,Math.cos(Qe.facing)).multiplyScalar(-.6),t=Qe.position.clone().add(i);Xt.root.position.set(t.x,Gh(t.x,t.z),t.z),Qe=null,Xt.state="idle",Yt.setSitting(!1)}const Ef=new Kb(am,Dn,lw);function Mm(){pn.aspect=innerWidth/innerHeight;const i=pn.aspect<.8;pn.fov=i?62:55,Dn.distScale=i?.78:1,pn.updateProjectionMatrix(),an.setSize(innerWidth,innerHeight)}Mm();addEventListener("resize",Mm);const Af=new GM,hh=new Set,sl=4.6;let va=0,Cf=!0;const Br=new w,vi={time:0,frames:0,steps:0};function uw(i,t){if(on.qualityManual||vi.steps>=2||t<3||document.hidden||on.quality==="nhe"||(vi.time+=i,vi.frames++,vi.time<4))return;const e=vi.time/vi.frames*1e3;vi.time=vi.frames=0,!(e<34)&&(vi.steps++,on.quality=on.quality==="dep"?"vua":"nhe",om(on),Kh(on.quality),Yt.toast("Máy hơi chậm nên chùa giảm chất lượng hình cho mượt (đổi lại trong Cài đặt)",4500))}function bm(){const i=Math.min(Af.getDelta(),.05),t=Af.elapsedTime;uw(i,t);const e=Xt.root.position;Ef.turnCamera(i);const n=Ef.move();n&&(Qe&&ur(),fn=e.clone().addScaledVector(n.dir,1.2),Hn=null);const s=n?n.speed:1;let r=0;if(fn&&!Qe){const d=e.clone(),f=Hn?.15:.12,m=new w(fn.x-e.x,0,fn.z-e.z);if(m.length()<=f)Hn&&hw(Hn),Zr?.(),Zr=null,fn=null,Hn=null,Qe||(Xt.state="idle");else{const v=Hn&&m.length()<.9?e.clone().add(m.clone().setLength(Math.min(m.length(),sl*s*i))):t1(e,fn,sl*s*i);e.x=v.x,e.z=v.z;const g=Math.hypot(e.x-d.x,e.z-d.z);r=g/i,Xt.state="walk";let y=Math.atan2(m.x,m.z)-Xt.root.rotation.y;y=Math.atan2(Math.sin(y),Math.cos(y)),Xt.root.rotation.y+=y*Math.min(1,i*10),va=g<sl*s*i*.2?va+i:0,va>.4&&(fn=null,Hn=null,Zr=null,Xt.state="idle",va=0)}}Qe||(e.y+=(Gh(e.x,e.z)-e.y)*Math.min(1,i*14)),Xt.update(i,t,r);const o=Ka(e.x,e.z);Yt.setZone(o),hh.has(o)||(hh.add(o),me.send({t:"visit",zone:o})),Dn.follow(i,Xt.root.rotation.y,n?.dir??null),Dn.update(i,e,o==="Chánh điện"),xm&&iw(t),Yt.setChatMode(o==="Chánh điện"||o==="Bảo tháp"?"quiet":"chat"),Yt.setActions(rw(o,e));const a=DS();Yt.setBanner(a?`${a.name} · mời bạn vào chánh điện`:fo?fo.label:null),vm.update(i,on.chant?a:null,on.chant&&o==="Chánh điện"),$i.update(t),fm();for(const d of Je.values())d.update(i,t,pn,e,Pn.has(d.info.pid));const c=Ja.update(e);i1(t),c1(t),lm.update(t),hm.update(t,c.night<.5),h1(Jh.fireflies,t,c.night),ei.setScene(c.night,o==="Chánh điện");const l=fs.material;l.opacity>0&&(l.opacity=Math.max(0,l.opacity-i*1.2),fs.scale.setScalar(1+(.9-l.opacity)*.6)),Br.copy(e).setY(e.y+(Qe?1.25:1.35)).project(pn);const h=(Br.x*.5+.5)*innerWidth,u=(-Br.y*.5+.5)*innerHeight;Yt.placeTag(h,u,Br.z<1),So.place(h,u,Br.z<1),an.shadowMap.enabled&&JS++%cm===0&&(an.shadowMap.needsUpdate=!0),an.render(Sn,pn),Cf&&(Cf=!1,document.getElementById("loading")?.classList.add("done")),requestAnimationFrame(bm)}requestAnimationFrame(bm);
