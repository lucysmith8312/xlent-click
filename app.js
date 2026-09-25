var Hu=Object.create;var Ac=Object.defineProperty;var Xu=Object.getOwnPropertyDescriptor;var Wu=Object.getOwnPropertyNames;var Yu=Object.getPrototypeOf,qu=Object.prototype.hasOwnProperty;var Zu=(n,t)=>()=>{try{return t||n((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}};var Ju=(n,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Wu(t))!qu.call(n,r)&&r!==e&&Ac(n,r,{get:()=>t[r],enumerable:!(i=Xu(t,r))||i.enumerable});return n};var $u=(n,t,e)=>(e=n!=null?Hu(Yu(n)):{},Ju(t||!n||!n.__esModule?Ac(e,"default",{value:n,enumerable:!0}):e,n));var _u=Zu((iS,Ta)=>{(function(){"use strict";var n={};n.version="6.4.2.2",n.use_lines=!0,n.use_xyz=!1;var t=!1;typeof Ta<"u"&&Ta.exports?(Ta.exports=n,t=!0):(typeof define=="function"&&define.amd&&define(n),typeof document<"u"?window.ClipperLib=n:self.ClipperLib=n);var e;if(t){var i="chrome";e="Netscape"}else{var i=navigator.userAgent.toString().toLowerCase();e=navigator.appName}var r={};i.indexOf("chrome")!=-1&&i.indexOf("chromium")==-1?r.chrome=1:r.chrome=0,i.indexOf("chromium")!=-1?r.chromium=1:r.chromium=0,i.indexOf("safari")!=-1&&i.indexOf("chrome")==-1&&i.indexOf("chromium")==-1?r.safari=1:r.safari=0,i.indexOf("firefox")!=-1?r.firefox=1:r.firefox=0,i.indexOf("firefox/17")!=-1?r.firefox17=1:r.firefox17=0,i.indexOf("firefox/15")!=-1?r.firefox15=1:r.firefox15=0,i.indexOf("firefox/3")!=-1?r.firefox3=1:r.firefox3=0,i.indexOf("opera")!=-1?r.opera=1:r.opera=0,i.indexOf("msie 10")!=-1?r.msie10=1:r.msie10=0,i.indexOf("msie 9")!=-1?r.msie9=1:r.msie9=0,i.indexOf("msie 8")!=-1?r.msie8=1:r.msie8=0,i.indexOf("msie 7")!=-1?r.msie7=1:r.msie7=0,i.indexOf("msie ")!=-1?r.msie=1:r.msie=0,n.biginteger_used=null;var a,c=0xdeadbeefcafe,u=(c&16777215)==15715070;function f(s,o,l){n.biginteger_used=1,s!=null&&(typeof s=="number"&&typeof o>"u"?this.fromInt(s):typeof s=="number"?this.fromNumber(s,o,l):o==null&&typeof s!="string"?this.fromString(s,256):this.fromString(s,o))}function d(){return new f(null,void 0,void 0)}function g(s,o,l,h,p,y){for(;--y>=0;){var w=o*this[s++]+l[h]+p;p=Math.floor(w/67108864),l[h++]=w&67108863}return p}function x(s,o,l,h,p,y){for(var w=o&32767,D=o>>15;--y>=0;){var O=this[s]&32767,H=this[s++]>>15,at=D*O+H*w;O=w*O+((at&32767)<<15)+l[h]+(p&1073741823),p=(O>>>30)+(at>>>15)+D*H+(p>>>30),l[h++]=O&1073741823}return p}function m(s,o,l,h,p,y){for(var w=o&16383,D=o>>14;--y>=0;){var O=this[s]&16383,H=this[s++]>>14,at=D*O+H*w;O=w*O+((at&16383)<<14)+l[h]+p,p=(O>>28)+(at>>14)+D*H,l[h++]=O&268435455}return p}u&&e=="Microsoft Internet Explorer"?(f.prototype.am=x,a=30):u&&e!="Netscape"?(f.prototype.am=g,a=26):(f.prototype.am=m,a=28),f.prototype.DB=a,f.prototype.DM=(1<<a)-1,f.prototype.DV=1<<a;var v=52;f.prototype.FV=Math.pow(2,v),f.prototype.F1=v-a,f.prototype.F2=2*a-v;var T="0123456789abcdefghijklmnopqrstuvwxyz",P=new Array,S,_;for(S=48,_=0;_<=9;++_)P[S++]=_;for(S=97,_=10;_<36;++_)P[S++]=_;for(S=65,_=10;_<36;++_)P[S++]=_;function N(s){return T.charAt(s)}function z(s,o){var l=P[s.charCodeAt(o)];return l??-1}function A(s){for(var o=this.t-1;o>=0;--o)s[o]=this[o];s.t=this.t,s.s=this.s}function R(s){this.t=1,this.s=s<0?-1:0,s>0?this[0]=s:s<-1?this[0]=s+this.DV:this.t=0}function I(s){var o=d();return o.fromInt(s),o}function U(s,o){var l;if(o==16)l=4;else if(o==8)l=3;else if(o==256)l=8;else if(o==2)l=1;else if(o==32)l=5;else if(o==4)l=2;else{this.fromRadix(s,o);return}this.t=0,this.s=0;for(var h=s.length,p=!1,y=0;--h>=0;){var w=l==8?s[h]&255:z(s,h);if(w<0){s.charAt(h)=="-"&&(p=!0);continue}p=!1,y==0?this[this.t++]=w:y+l>this.DB?(this[this.t-1]|=(w&(1<<this.DB-y)-1)<<y,this[this.t++]=w>>this.DB-y):this[this.t-1]|=w<<y,y+=l,y>=this.DB&&(y-=this.DB)}l==8&&(s[0]&128)!=0&&(this.s=-1,y>0&&(this[this.t-1]|=(1<<this.DB-y)-1<<y)),this.clamp(),p&&f.ZERO.subTo(this,this)}function b(){for(var s=this.s&this.DM;this.t>0&&this[this.t-1]==s;)--this.t}function C(s){if(this.s<0)return"-"+this.negate().toString(s);var o;if(s==16)o=4;else if(s==8)o=3;else if(s==2)o=1;else if(s==32)o=5;else if(s==4)o=2;else return this.toRadix(s);var l=(1<<o)-1,h,p=!1,y="",w=this.t,D=this.DB-w*this.DB%o;if(w-- >0)for(D<this.DB&&(h=this[w]>>D)>0&&(p=!0,y=N(h));w>=0;)D<o?(h=(this[w]&(1<<D)-1)<<o-D,h|=this[--w]>>(D+=this.DB-o)):(h=this[w]>>(D-=o)&l,D<=0&&(D+=this.DB,--w)),h>0&&(p=!0),p&&(y+=N(h));return p?y:"0"}function B(){var s=d();return f.ZERO.subTo(this,s),s}function X(){return this.s<0?this.negate():this}function Y(s){var o=this.s-s.s;if(o!=0)return o;var l=this.t;if(o=l-s.t,o!=0)return this.s<0?-o:o;for(;--l>=0;)if((o=this[l]-s[l])!=0)return o;return 0}function j(s){var o=1,l;return(l=s>>>16)!=0&&(s=l,o+=16),(l=s>>8)!=0&&(s=l,o+=8),(l=s>>4)!=0&&(s=l,o+=4),(l=s>>2)!=0&&(s=l,o+=2),(l=s>>1)!=0&&(s=l,o+=1),o}function k(){return this.t<=0?0:this.DB*(this.t-1)+j(this[this.t-1]^this.s&this.DM)}function $(s,o){var l;for(l=this.t-1;l>=0;--l)o[l+s]=this[l];for(l=s-1;l>=0;--l)o[l]=0;o.t=this.t+s,o.s=this.s}function nt(s,o){for(var l=s;l<this.t;++l)o[l-s]=this[l];o.t=Math.max(this.t-s,0),o.s=this.s}function tt(s,o){var l=s%this.DB,h=this.DB-l,p=(1<<h)-1,y=Math.floor(s/this.DB),w=this.s<<l&this.DM,D;for(D=this.t-1;D>=0;--D)o[D+y+1]=this[D]>>h|w,w=(this[D]&p)<<l;for(D=y-1;D>=0;--D)o[D]=0;o[y]=w,o.t=this.t+y+1,o.s=this.s,o.clamp()}function pt(s,o){o.s=this.s;var l=Math.floor(s/this.DB);if(l>=this.t){o.t=0;return}var h=s%this.DB,p=this.DB-h,y=(1<<h)-1;o[0]=this[l]>>h;for(var w=l+1;w<this.t;++w)o[w-l-1]|=(this[w]&y)<<p,o[w-l]=this[w]>>h;h>0&&(o[this.t-l-1]|=(this.s&y)<<p),o.t=this.t-l,o.clamp()}function et(s,o){for(var l=0,h=0,p=Math.min(s.t,this.t);l<p;)h+=this[l]-s[l],o[l++]=h&this.DM,h>>=this.DB;if(s.t<this.t){for(h-=s.s;l<this.t;)h+=this[l],o[l++]=h&this.DM,h>>=this.DB;h+=this.s}else{for(h+=this.s;l<s.t;)h-=s[l],o[l++]=h&this.DM,h>>=this.DB;h-=s.s}o.s=h<0?-1:0,h<-1?o[l++]=this.DV+h:h>0&&(o[l++]=h),o.t=l,o.clamp()}function ut(s,o){var l=this.abs(),h=s.abs(),p=l.t;for(o.t=p+h.t;--p>=0;)o[p]=0;for(p=0;p<h.t;++p)o[p+l.t]=l.am(0,h[p],o,p,0,l.t);o.s=0,o.clamp(),this.s!=s.s&&f.ZERO.subTo(o,o)}function ft(s){for(var o=this.abs(),l=s.t=2*o.t;--l>=0;)s[l]=0;for(l=0;l<o.t-1;++l){var h=o.am(l,o[l],s,2*l,0,1);(s[l+o.t]+=o.am(l+1,2*o[l],s,2*l+1,h,o.t-l-1))>=o.DV&&(s[l+o.t]-=o.DV,s[l+o.t+1]=1)}s.t>0&&(s[s.t-1]+=o.am(l,o[l],s,2*l,0,1)),s.s=0,s.clamp()}function Ft(s,o,l){var h=s.abs();if(!(h.t<=0)){var p=this.abs();if(p.t<h.t){o?.fromInt(0),l!=null&&this.copyTo(l);return}l==null&&(l=d());var y=d(),w=this.s,D=s.s,O=this.DB-j(h[h.t-1]);O>0?(h.lShiftTo(O,y),p.lShiftTo(O,l)):(h.copyTo(y),p.copyTo(l));var H=y.t,at=y[H-1];if(at!=0){var ot=at*(1<<this.F1)+(H>1?y[H-2]>>this.F2:0),gt=this.FV/ot,Vt=(1<<this.F1)/ot,$t=1<<this.F2,ie=l.t,ve=ie-H,$e=o??d();for(y.dlShiftTo(ve,$e),l.compareTo($e)>=0&&(l[l.t++]=1,l.subTo($e,l)),f.ONE.dlShiftTo(H,$e),$e.subTo(y,y);y.t<H;)y[y.t++]=0;for(;--ve>=0;){var In=l[--ie]==at?this.DM:Math.floor(l[ie]*gt+(l[ie-1]+$t)*Vt);if((l[ie]+=y.am(0,In,l,ve,0,H))<In)for(y.dlShiftTo(ve,$e),l.subTo($e,l);l[ie]<--In;)l.subTo($e,l)}o!=null&&(l.drShiftTo(H,o),w!=D&&f.ZERO.subTo(o,o)),l.t=H,l.clamp(),O>0&&l.rShiftTo(O,l),w<0&&f.ZERO.subTo(l,l)}}}function Lt(s){var o=d();return this.abs().divRemTo(s,null,o),this.s<0&&o.compareTo(f.ZERO)>0&&s.subTo(o,o),o}function Jt(s){this.m=s}function Xt(s){return s.s<0||s.compareTo(this.m)>=0?s.mod(this.m):s}function ee(s){return s}function it(s){s.divRemTo(this.m,null,s)}function ht(s,o,l){s.multiplyTo(o,l),this.reduce(l)}function Rt(s,o){s.squareTo(o),this.reduce(o)}Jt.prototype.convert=Xt,Jt.prototype.revert=ee,Jt.prototype.reduce=it,Jt.prototype.mulTo=ht,Jt.prototype.sqrTo=Rt;function Yt(){if(this.t<1)return 0;var s=this[0];if((s&1)==0)return 0;var o=s&3;return o=o*(2-(s&15)*o)&15,o=o*(2-(s&255)*o)&255,o=o*(2-((s&65535)*o&65535))&65535,o=o*(2-s*o%this.DV)%this.DV,o>0?this.DV-o:-o}function Et(s){this.m=s,this.mp=s.invDigit(),this.mpl=this.mp&32767,this.mph=this.mp>>15,this.um=(1<<s.DB-15)-1,this.mt2=2*s.t}function Qt(s){var o=d();return s.abs().dlShiftTo(this.m.t,o),o.divRemTo(this.m,null,o),s.s<0&&o.compareTo(f.ZERO)>0&&this.m.subTo(o,o),o}function Me(s){var o=d();return s.copyTo(o),this.reduce(o),o}function te(s){for(;s.t<=this.mt2;)s[s.t++]=0;for(var o=0;o<this.m.t;++o){var l=s[o]&32767,h=l*this.mpl+((l*this.mph+(s[o]>>15)*this.mpl&this.um)<<15)&s.DM;for(l=o+this.m.t,s[l]+=this.m.am(0,h,s,o,0,this.m.t);s[l]>=s.DV;)s[l]-=s.DV,s[++l]++}s.clamp(),s.drShiftTo(this.m.t,s),s.compareTo(this.m)>=0&&s.subTo(this.m,s)}function ce(s,o){s.squareTo(o),this.reduce(o)}function ge(s,o,l){s.multiplyTo(o,l),this.reduce(l)}Et.prototype.convert=Qt,Et.prototype.revert=Me,Et.prototype.reduce=te,Et.prototype.mulTo=ge,Et.prototype.sqrTo=ce;function re(){return(this.t>0?this[0]&1:this.s)==0}function ye(s,o){if(s>4294967295||s<1)return f.ONE;var l=d(),h=d(),p=o.convert(this),y=j(s)-1;for(p.copyTo(l);--y>=0;)if(o.sqrTo(l,h),(s&1<<y)>0)o.mulTo(h,p,l);else{var w=l;l=h,h=w}return o.revert(l)}function Ce(s,o){var l;return s<256||o.isEven()?l=new Jt(o):l=new Et(o),this.exp(s,l)}f.prototype.copyTo=A,f.prototype.fromInt=R,f.prototype.fromString=U,f.prototype.clamp=b,f.prototype.dlShiftTo=$,f.prototype.drShiftTo=nt,f.prototype.lShiftTo=tt,f.prototype.rShiftTo=pt,f.prototype.subTo=et,f.prototype.multiplyTo=ut,f.prototype.squareTo=ft,f.prototype.divRemTo=Ft,f.prototype.invDigit=Yt,f.prototype.isEven=re,f.prototype.exp=ye,f.prototype.toString=C,f.prototype.negate=B,f.prototype.abs=X,f.prototype.compareTo=Y,f.prototype.bitLength=k,f.prototype.mod=Lt,f.prototype.modPowInt=Ce,f.ZERO=I(0),f.ONE=I(1);function ze(){var s=d();return this.copyTo(s),s}function be(){if(this.s<0){if(this.t==1)return this[0]-this.DV;if(this.t==0)return-1}else{if(this.t==1)return this[0];if(this.t==0)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]}function Ae(){return this.t==0?this.s:this[0]<<24>>24}function G(){return this.t==0?this.s:this[0]<<16>>16}function De(s){return Math.floor(Math.LN2*this.DB/Math.log(s))}function fe(){return this.s<0?-1:this.t<=0||this.t==1&&this[0]<=0?0:1}function L(s){if(s==null&&(s=10),this.signum()==0||s<2||s>36)return"0";var o=this.chunkSize(s),l=Math.pow(s,o),h=I(l),p=d(),y=d(),w="";for(this.divRemTo(h,p,y);p.signum()>0;)w=(l+y.intValue()).toString(s).substr(1)+w,p.divRemTo(h,p,y);return y.intValue().toString(s)+w}function M(s,o){this.fromInt(0),o==null&&(o=10);for(var l=this.chunkSize(o),h=Math.pow(o,l),p=!1,y=0,w=0,D=0;D<s.length;++D){var O=z(s,D);if(O<0){s.charAt(D)=="-"&&this.signum()==0&&(p=!0);continue}w=o*w+O,++y>=l&&(this.dMultiply(h),this.dAddOffset(w,0),y=0,w=0)}y>0&&(this.dMultiply(Math.pow(o,y)),this.dAddOffset(w,0)),p&&f.ZERO.subTo(this,this)}function W(s,o,l){if(typeof o=="number")if(s<2)this.fromInt(1);else for(this.fromNumber(s,l),this.testBit(s-1)||this.bitwiseTo(f.ONE.shiftLeft(s-1),Bt,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(o);)this.dAddOffset(2,0),this.bitLength()>s&&this.subTo(f.ONE.shiftLeft(s-1),this);else{var h=new Array,p=s&7;h.length=(s>>3)+1,o.nextBytes(h),p>0?h[0]&=(1<<p)-1:h[0]=0,this.fromString(h,256)}}function K(){var s=this.t,o=new Array;o[0]=this.s;var l=this.DB-s*this.DB%8,h,p=0;if(s-- >0)for(l<this.DB&&(h=this[s]>>l)!=(this.s&this.DM)>>l&&(o[p++]=h|this.s<<this.DB-l);s>=0;)l<8?(h=(this[s]&(1<<l)-1)<<8-l,h|=this[--s]>>(l+=this.DB-8)):(h=this[s]>>(l-=8)&255,l<=0&&(l+=this.DB,--s)),(h&128)!=0&&(h|=-256),p==0&&(this.s&128)!=(h&128)&&++p,(p>0||h!=this.s)&&(o[p++]=h);return o}function st(s){return this.compareTo(s)==0}function _t(s){return this.compareTo(s)<0?this:s}function vt(s){return this.compareTo(s)>0?this:s}function rt(s,o,l){var h,p,y=Math.min(s.t,this.t);for(h=0;h<y;++h)l[h]=o(this[h],s[h]);if(s.t<this.t){for(p=s.s&this.DM,h=y;h<this.t;++h)l[h]=o(this[h],p);l.t=this.t}else{for(p=this.s&this.DM,h=y;h<s.t;++h)l[h]=o(p,s[h]);l.t=s.t}l.s=o(this.s,s.s),l.clamp()}function ct(s,o){return s&o}function St(s){var o=d();return this.bitwiseTo(s,ct,o),o}function Bt(s,o){return s|o}function wt(s){var o=d();return this.bitwiseTo(s,Bt,o),o}function yt(s,o){return s^o}function kt(s){var o=d();return this.bitwiseTo(s,yt,o),o}function Ht(s,o){return s&~o}function jt(s){var o=d();return this.bitwiseTo(s,Ht,o),o}function V(){for(var s=d(),o=0;o<this.t;++o)s[o]=this.DM&~this[o];return s.t=this.t,s.s=~this.s,s}function Mt(s){var o=d();return s<0?this.rShiftTo(-s,o):this.lShiftTo(s,o),o}function lt(s){var o=d();return s<0?this.lShiftTo(-s,o):this.rShiftTo(s,o),o}function bt(s){if(s==0)return-1;var o=0;return(s&65535)==0&&(s>>=16,o+=16),(s&255)==0&&(s>>=8,o+=8),(s&15)==0&&(s>>=4,o+=4),(s&3)==0&&(s>>=2,o+=2),(s&1)==0&&++o,o}function It(){for(var s=0;s<this.t;++s)if(this[s]!=0)return s*this.DB+bt(this[s]);return this.s<0?this.t*this.DB:-1}function mt(s){for(var o=0;s!=0;)s&=s-1,++o;return o}function Gt(){for(var s=0,o=this.s&this.DM,l=0;l<this.t;++l)s+=mt(this[l]^o);return s}function Ot(s){var o=Math.floor(s/this.DB);return o>=this.t?this.s!=0:(this[o]&1<<s%this.DB)!=0}function _e(s,o){var l=f.ONE.shiftLeft(s);return this.bitwiseTo(l,o,l),l}function he(s){return this.changeBit(s,Bt)}function nn(s){return this.changeBit(s,Ht)}function pn(s){return this.changeBit(s,yt)}function Da(s,o){for(var l=0,h=0,p=Math.min(s.t,this.t);l<p;)h+=this[l]+s[l],o[l++]=h&this.DM,h>>=this.DB;if(s.t<this.t){for(h+=s.s;l<this.t;)h+=this[l],o[l++]=h&this.DM,h>>=this.DB;h+=this.s}else{for(h+=this.s;l<s.t;)h+=s[l],o[l++]=h&this.DM,h>>=this.DB;h+=s.s}o.s=h<0?-1:0,h>0?o[l++]=h:h<-1&&(o[l++]=this.DV+h),o.t=l,o.clamp()}function Oa(s){var o=d();return this.addTo(s,o),o}function yr(s){var o=d();return this.subTo(s,o),o}function Cs(s){var o=d();return this.multiplyTo(s,o),o}function Ua(){var s=d();return this.squareTo(s),s}function Sr(s){var o=d();return this.divRemTo(s,o,null),o}function Mr(s){var o=d();return this.divRemTo(s,null,o),o}function Vn(s){var o=d(),l=d();return this.divRemTo(s,o,l),new Array(o,l)}function Is(s){this[this.t]=this.am(0,s-1,this,0,0,this.t),++this.t,this.clamp()}function br(s,o){if(s!=0){for(;this.t<=o;)this[this.t++]=0;for(this[o]+=s;this[o]>=this.DV;)this[o]-=this.DV,++o>=this.t&&(this[this.t++]=0),++this[o]}}function ti(){}function bi(s){return s}function Tr(s,o,l){s.multiplyTo(o,l)}function Vi(s,o){s.squareTo(o)}ti.prototype.convert=bi,ti.prototype.revert=bi,ti.prototype.mulTo=Tr,ti.prototype.sqrTo=Vi;function Er(s){return this.exp(s,new ti)}function wr(s,o,l){var h=Math.min(this.t+s.t,o);for(l.s=0,l.t=h;h>0;)l[--h]=0;var p;for(p=l.t-this.t;h<p;++h)l[h+this.t]=this.am(0,s[h],l,h,0,this.t);for(p=Math.min(s.t,o);h<p;++h)this.am(0,s[h],l,h,0,o-h);l.clamp()}function Fa(s,o,l){--o;var h=l.t=this.t+s.t-o;for(l.s=0;--h>=0;)l[h]=0;for(h=Math.max(o-this.t,0);h<s.t;++h)l[this.t+h-o]=this.am(o-h,s[h],l,0,0,this.t+h-o);l.clamp(),l.drShiftTo(1,l)}function ei(s){this.r2=d(),this.q3=d(),f.ONE.dlShiftTo(2*s.t,this.r2),this.mu=this.r2.divide(s),this.m=s}function Ba(s){if(s.s<0||s.t>2*this.m.t)return s.mod(this.m);if(s.compareTo(this.m)<0)return s;var o=d();return s.copyTo(o),this.reduce(o),o}function za(s){return s}function Ar(s){for(s.drShiftTo(this.m.t-1,this.r2),s.t>this.m.t+1&&(s.t=this.m.t+1,s.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);s.compareTo(this.r2)<0;)s.dAddOffset(1,this.m.t+1);for(s.subTo(this.r2,s);s.compareTo(this.m)>=0;)s.subTo(this.m,s)}function E(s,o){s.squareTo(o),this.reduce(o)}function F(s,o,l){s.multiplyTo(o,l),this.reduce(l)}ei.prototype.convert=Ba,ei.prototype.revert=za,ei.prototype.reduce=Ar,ei.prototype.mulTo=F,ei.prototype.sqrTo=E;function Q(s,o){var l=s.bitLength(),h,p=I(1),y;if(l<=0)return p;l<18?h=1:l<48?h=3:l<144?h=4:l<768?h=5:h=6,l<8?y=new Jt(o):o.isEven()?y=new ei(o):y=new Et(o);var w=new Array,D=3,O=h-1,H=(1<<h)-1;if(w[1]=y.convert(this),h>1){var at=d();for(y.sqrTo(w[1],at);D<=H;)w[D]=d(),y.mulTo(at,w[D-2],w[D]),D+=2}var ot=s.t-1,gt,Vt=!0,$t=d(),ie;for(l=j(s[ot])-1;ot>=0;){for(l>=O?gt=s[ot]>>l-O&H:(gt=(s[ot]&(1<<l+1)-1)<<O-l,ot>0&&(gt|=s[ot-1]>>this.DB+l-O)),D=h;(gt&1)==0;)gt>>=1,--D;if((l-=D)<0&&(l+=this.DB,--ot),Vt)w[gt].copyTo(p),Vt=!1;else{for(;D>1;)y.sqrTo(p,$t),y.sqrTo($t,p),D-=2;D>0?y.sqrTo(p,$t):(ie=p,p=$t,$t=ie),y.mulTo($t,w[gt],p)}for(;ot>=0&&(s[ot]&1<<l)==0;)y.sqrTo(p,$t),ie=p,p=$t,$t=ie,--l<0&&(l=this.DB-1,--ot)}return y.revert(p)}function q(s){var o=this.s<0?this.negate():this.clone(),l=s.s<0?s.negate():s.clone();if(o.compareTo(l)<0){var h=o;o=l,l=h}var p=o.getLowestSetBit(),y=l.getLowestSetBit();if(y<0)return o;for(p<y&&(y=p),y>0&&(o.rShiftTo(y,o),l.rShiftTo(y,l));o.signum()>0;)(p=o.getLowestSetBit())>0&&o.rShiftTo(p,o),(p=l.getLowestSetBit())>0&&l.rShiftTo(p,l),o.compareTo(l)>=0?(o.subTo(l,o),o.rShiftTo(1,o)):(l.subTo(o,l),l.rShiftTo(1,l));return y>0&&l.lShiftTo(y,l),l}function Z(s){if(s<=0)return 0;var o=this.DV%s,l=this.s<0?s-1:0;if(this.t>0)if(o==0)l=this[0]%s;else for(var h=this.t-1;h>=0;--h)l=(o*l+this[h])%s;return l}function Pt(s){var o=s.isEven();if(this.isEven()&&o||s.signum()==0)return f.ZERO;for(var l=s.clone(),h=this.clone(),p=I(1),y=I(0),w=I(0),D=I(1);l.signum()!=0;){for(;l.isEven();)l.rShiftTo(1,l),o?((!p.isEven()||!y.isEven())&&(p.addTo(this,p),y.subTo(s,y)),p.rShiftTo(1,p)):y.isEven()||y.subTo(s,y),y.rShiftTo(1,y);for(;h.isEven();)h.rShiftTo(1,h),o?((!w.isEven()||!D.isEven())&&(w.addTo(this,w),D.subTo(s,D)),w.rShiftTo(1,w)):D.isEven()||D.subTo(s,D),D.rShiftTo(1,D);l.compareTo(h)>=0?(l.subTo(h,l),o&&p.subTo(w,p),y.subTo(D,y)):(h.subTo(l,h),o&&w.subTo(p,w),D.subTo(y,D))}if(h.compareTo(f.ONE)!=0)return f.ZERO;if(D.compareTo(s)>=0)return D.subtract(s);if(D.signum()<0)D.addTo(s,D);else return D;return D.signum()<0?D.add(s):D}var xt=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],At=(1<<26)/xt[xt.length-1];function Nt(s){var o,l=this.abs();if(l.t==1&&l[0]<=xt[xt.length-1]){for(o=0;o<xt.length;++o)if(l[0]==xt[o])return!0;return!1}if(l.isEven())return!1;for(o=1;o<xt.length;){for(var h=xt[o],p=o+1;p<xt.length&&h<At;)h*=xt[p++];for(h=l.modInt(h);o<p;)if(h%xt[o++]==0)return!1}return l.millerRabin(s)}function zt(s){var o=this.subtract(f.ONE),l=o.getLowestSetBit();if(l<=0)return!1;var h=o.shiftRight(l);s=s+1>>1,s>xt.length&&(s=xt.length);for(var p=d(),y=0;y<s;++y){p.fromInt(xt[Math.floor(Math.random()*xt.length)]);var w=p.modPow(h,this);if(w.compareTo(f.ONE)!=0&&w.compareTo(o)!=0){for(var D=1;D++<l&&w.compareTo(o)!=0;)if(w=w.modPowInt(2,this),w.compareTo(f.ONE)==0)return!1;if(w.compareTo(o)!=0)return!1}}return!0}f.prototype.chunkSize=De,f.prototype.toRadix=L,f.prototype.fromRadix=M,f.prototype.fromNumber=W,f.prototype.bitwiseTo=rt,f.prototype.changeBit=_e,f.prototype.addTo=Da,f.prototype.dMultiply=Is,f.prototype.dAddOffset=br,f.prototype.multiplyLowerTo=wr,f.prototype.multiplyUpperTo=Fa,f.prototype.modInt=Z,f.prototype.millerRabin=zt,f.prototype.clone=ze,f.prototype.intValue=be,f.prototype.byteValue=Ae,f.prototype.shortValue=G,f.prototype.signum=fe,f.prototype.toByteArray=K,f.prototype.equals=st,f.prototype.min=_t,f.prototype.max=vt,f.prototype.and=St,f.prototype.or=wt,f.prototype.xor=kt,f.prototype.andNot=jt,f.prototype.not=V,f.prototype.shiftLeft=Mt,f.prototype.shiftRight=lt,f.prototype.getLowestSetBit=It,f.prototype.bitCount=Gt,f.prototype.testBit=Ot,f.prototype.setBit=he,f.prototype.clearBit=nn,f.prototype.flipBit=pn,f.prototype.add=Oa,f.prototype.subtract=yr,f.prototype.multiply=Cs,f.prototype.divide=Sr,f.prototype.remainder=Mr,f.prototype.divideAndRemainder=Vn,f.prototype.modPow=Q,f.prototype.modInverse=Pt,f.prototype.pow=Er,f.prototype.gcd=q,f.prototype.isProbablePrime=Nt,f.prototype.square=Ua;var Tt=f;Tt.prototype.IsNegative=function(){return this.compareTo(Tt.ZERO)==-1},Tt.op_Equality=function(s,o){return s.compareTo(o)==0},Tt.op_Inequality=function(s,o){return s.compareTo(o)!=0},Tt.op_GreaterThan=function(s,o){return s.compareTo(o)>0},Tt.op_LessThan=function(s,o){return s.compareTo(o)<0},Tt.op_Addition=function(s,o){return new Tt(s,void 0,void 0).add(new Tt(o,void 0,void 0))},Tt.op_Subtraction=function(s,o){return new Tt(s,void 0,void 0).subtract(new Tt(o,void 0,void 0))},Tt.Int128Mul=function(s,o){return new Tt(s,void 0,void 0).multiply(new Tt(o,void 0,void 0))},Tt.op_Division=function(s,o){return s.divide(o)},Tt.prototype.ToDouble=function(){return parseFloat(this.toString())};var ne=function(s,o){var l;if(typeof Object.getOwnPropertyNames>"u"){for(l in o.prototype)(typeof s.prototype[l]>"u"||s.prototype[l]===Object.prototype[l])&&(s.prototype[l]=o.prototype[l]);for(l in o)typeof s[l]>"u"&&(s[l]=o[l]);s.$baseCtor=o}else{for(var h=Object.getOwnPropertyNames(o.prototype),p=0;p<h.length;p++)typeof Object.getOwnPropertyDescriptor(s.prototype,h[p])>"u"&&Object.defineProperty(s.prototype,h[p],Object.getOwnPropertyDescriptor(o.prototype,h[p]));for(l in o)typeof s[l]>"u"&&(s[l]=o[l]);s.$baseCtor=o}};n.Path=function(){return[]},n.Path.prototype.push=Array.prototype.push,n.Paths=function(){return[]},n.Paths.prototype.push=Array.prototype.push,n.DoublePoint=function(){var s=arguments;this.X=0,this.Y=0,s.length===1?(this.X=s[0].X,this.Y=s[0].Y):s.length===2&&(this.X=s[0],this.Y=s[1])},n.DoublePoint0=function(){this.X=0,this.Y=0},n.DoublePoint0.prototype=n.DoublePoint.prototype,n.DoublePoint1=function(s){this.X=s.X,this.Y=s.Y},n.DoublePoint1.prototype=n.DoublePoint.prototype,n.DoublePoint2=function(s,o){this.X=s,this.Y=o},n.DoublePoint2.prototype=n.DoublePoint.prototype,n.PolyNode=function(){this.m_Parent=null,this.m_polygon=new n.Path,this.m_Index=0,this.m_jointype=0,this.m_endtype=0,this.m_Childs=[],this.IsOpen=!1},n.PolyNode.prototype.IsHoleNode=function(){for(var s=!0,o=this.m_Parent;o!==null;)s=!s,o=o.m_Parent;return s},n.PolyNode.prototype.ChildCount=function(){return this.m_Childs.length},n.PolyNode.prototype.Contour=function(){return this.m_polygon},n.PolyNode.prototype.AddChild=function(s){var o=this.m_Childs.length;this.m_Childs.push(s),s.m_Parent=this,s.m_Index=o},n.PolyNode.prototype.GetNext=function(){return this.m_Childs.length>0?this.m_Childs[0]:this.GetNextSiblingUp()},n.PolyNode.prototype.GetNextSiblingUp=function(){return this.m_Parent===null?null:this.m_Index===this.m_Parent.m_Childs.length-1?this.m_Parent.GetNextSiblingUp():this.m_Parent.m_Childs[this.m_Index+1]},n.PolyNode.prototype.Childs=function(){return this.m_Childs},n.PolyNode.prototype.Parent=function(){return this.m_Parent},n.PolyNode.prototype.IsHole=function(){return this.IsHoleNode()},n.PolyTree=function(){this.m_AllPolys=[],n.PolyNode.call(this)},n.PolyTree.prototype.Clear=function(){for(var s=0,o=this.m_AllPolys.length;s<o;s++)this.m_AllPolys[s]=null;this.m_AllPolys.length=0,this.m_Childs.length=0},n.PolyTree.prototype.GetFirst=function(){return this.m_Childs.length>0?this.m_Childs[0]:null},n.PolyTree.prototype.Total=function(){var s=this.m_AllPolys.length;return s>0&&this.m_Childs[0]!==this.m_AllPolys[0]&&s--,s},ne(n.PolyTree,n.PolyNode),n.Math_Abs_Int64=n.Math_Abs_Int32=n.Math_Abs_Double=function(s){return Math.abs(s)},n.Math_Max_Int32_Int32=function(s,o){return Math.max(s,o)},r.msie||r.opera||r.safari?n.Cast_Int32=function(s){return s|0}:n.Cast_Int32=function(s){return~~s},typeof Number.toInteger>"u"&&(Number.toInteger=null),r.chrome?n.Cast_Int64=function(s){return s<-2147483648||s>2147483647?s<0?Math.ceil(s):Math.floor(s):~~s}:r.firefox&&typeof Number.toInteger=="function"?n.Cast_Int64=function(s){return Number.toInteger(s)}:r.msie7||r.msie8?n.Cast_Int64=function(s){return parseInt(s,10)}:r.msie?n.Cast_Int64=function(s){return s<-2147483648||s>2147483647?s<0?Math.ceil(s):Math.floor(s):s|0}:n.Cast_Int64=function(s){return s<0?Math.ceil(s):Math.floor(s)},n.Clear=function(s){s.length=0},n.PI=3.141592653589793,n.PI2=2*3.141592653589793,n.IntPoint=function(){var s=arguments,o=s.length;if(this.X=0,this.Y=0,n.use_xyz)if(this.Z=0,o===3)this.X=s[0],this.Y=s[1],this.Z=s[2];else if(o===2)this.X=s[0],this.Y=s[1],this.Z=0;else if(o===1)if(s[0]instanceof n.DoublePoint){var l=s[0];this.X=n.Clipper.Round(l.X),this.Y=n.Clipper.Round(l.Y),this.Z=0}else{var h=s[0];typeof h.Z>"u"&&(h.Z=0),this.X=h.X,this.Y=h.Y,this.Z=h.Z}else this.X=0,this.Y=0,this.Z=0;else if(o===2)this.X=s[0],this.Y=s[1];else if(o===1)if(s[0]instanceof n.DoublePoint){var l=s[0];this.X=n.Clipper.Round(l.X),this.Y=n.Clipper.Round(l.Y)}else{var h=s[0];this.X=h.X,this.Y=h.Y}else this.X=0,this.Y=0},n.IntPoint.op_Equality=function(s,o){return s.X===o.X&&s.Y===o.Y},n.IntPoint.op_Inequality=function(s,o){return s.X!==o.X||s.Y!==o.Y},n.IntPoint0=function(){this.X=0,this.Y=0,n.use_xyz&&(this.Z=0)},n.IntPoint0.prototype=n.IntPoint.prototype,n.IntPoint1=function(s){this.X=s.X,this.Y=s.Y,n.use_xyz&&(typeof s.Z>"u"?this.Z=0:this.Z=s.Z)},n.IntPoint1.prototype=n.IntPoint.prototype,n.IntPoint1dp=function(s){this.X=n.Clipper.Round(s.X),this.Y=n.Clipper.Round(s.Y),n.use_xyz&&(this.Z=0)},n.IntPoint1dp.prototype=n.IntPoint.prototype,n.IntPoint2=function(s,o,l){this.X=s,this.Y=o,n.use_xyz&&(typeof l>"u"?this.Z=0:this.Z=l)},n.IntPoint2.prototype=n.IntPoint.prototype,n.IntRect=function(){var s=arguments,o=s.length;if(o===4)this.left=s[0],this.top=s[1],this.right=s[2],this.bottom=s[3];else if(o===1){var l=s[0];this.left=l.left,this.top=l.top,this.right=l.right,this.bottom=l.bottom}else this.left=0,this.top=0,this.right=0,this.bottom=0},n.IntRect0=function(){this.left=0,this.top=0,this.right=0,this.bottom=0},n.IntRect0.prototype=n.IntRect.prototype,n.IntRect1=function(s){this.left=s.left,this.top=s.top,this.right=s.right,this.bottom=s.bottom},n.IntRect1.prototype=n.IntRect.prototype,n.IntRect4=function(s,o,l,h){this.left=s,this.top=o,this.right=l,this.bottom=h},n.IntRect4.prototype=n.IntRect.prototype,n.ClipType={ctIntersection:0,ctUnion:1,ctDifference:2,ctXor:3},n.PolyType={ptSubject:0,ptClip:1},n.PolyFillType={pftEvenOdd:0,pftNonZero:1,pftPositive:2,pftNegative:3},n.JoinType={jtSquare:0,jtRound:1,jtMiter:2},n.EndType={etOpenSquare:0,etOpenRound:1,etOpenButt:2,etClosedLine:3,etClosedPolygon:4},n.EdgeSide={esLeft:0,esRight:1},n.Direction={dRightToLeft:0,dLeftToRight:1},n.TEdge=function(){this.Bot=new n.IntPoint0,this.Curr=new n.IntPoint0,this.Top=new n.IntPoint0,this.Delta=new n.IntPoint0,this.Dx=0,this.PolyTyp=n.PolyType.ptSubject,this.Side=n.EdgeSide.esLeft,this.WindDelta=0,this.WindCnt=0,this.WindCnt2=0,this.OutIdx=0,this.Next=null,this.Prev=null,this.NextInLML=null,this.NextInAEL=null,this.PrevInAEL=null,this.NextInSEL=null,this.PrevInSEL=null},n.IntersectNode=function(){this.Edge1=null,this.Edge2=null,this.Pt=new n.IntPoint0},n.MyIntersectNodeSort=function(){},n.MyIntersectNodeSort.Compare=function(s,o){var l=o.Pt.Y-s.Pt.Y;return l>0?1:l<0?-1:0},n.LocalMinima=function(){this.Y=0,this.LeftBound=null,this.RightBound=null,this.Next=null},n.Scanbeam=function(){this.Y=0,this.Next=null},n.Maxima=function(){this.X=0,this.Next=null,this.Prev=null},n.OutRec=function(){this.Idx=0,this.IsHole=!1,this.IsOpen=!1,this.FirstLeft=null,this.Pts=null,this.BottomPt=null,this.PolyNode=null},n.OutPt=function(){this.Idx=0,this.Pt=new n.IntPoint0,this.Next=null,this.Prev=null},n.Join=function(){this.OutPt1=null,this.OutPt2=null,this.OffPt=new n.IntPoint0},n.ClipperBase=function(){this.m_MinimaList=null,this.m_CurrentLM=null,this.m_edges=new Array,this.m_UseFullRange=!1,this.m_HasOpenPaths=!1,this.PreserveCollinear=!1,this.m_Scanbeam=null,this.m_PolyOuts=null,this.m_ActiveEdges=null},n.ClipperBase.horizontal=-9007199254740992,n.ClipperBase.Skip=-2,n.ClipperBase.Unassigned=-1,n.ClipperBase.tolerance=1e-20,n.ClipperBase.loRange=47453132,n.ClipperBase.hiRange=0xfffffffffffff,n.ClipperBase.near_zero=function(s){return s>-n.ClipperBase.tolerance&&s<n.ClipperBase.tolerance},n.ClipperBase.IsHorizontal=function(s){return s.Delta.Y===0},n.ClipperBase.prototype.PointIsVertex=function(s,o){var l=o;do{if(n.IntPoint.op_Equality(l.Pt,s))return!0;l=l.Next}while(l!==o);return!1},n.ClipperBase.prototype.PointOnLineSegment=function(s,o,l,h){return h?s.X===o.X&&s.Y===o.Y||s.X===l.X&&s.Y===l.Y||s.X>o.X==s.X<l.X&&s.Y>o.Y==s.Y<l.Y&&Tt.op_Equality(Tt.Int128Mul(s.X-o.X,l.Y-o.Y),Tt.Int128Mul(l.X-o.X,s.Y-o.Y)):s.X===o.X&&s.Y===o.Y||s.X===l.X&&s.Y===l.Y||s.X>o.X==s.X<l.X&&s.Y>o.Y==s.Y<l.Y&&(s.X-o.X)*(l.Y-o.Y)===(l.X-o.X)*(s.Y-o.Y)},n.ClipperBase.prototype.PointOnPolygon=function(s,o,l){for(var h=o;;){if(this.PointOnLineSegment(s,h.Pt,h.Next.Pt,l))return!0;if(h=h.Next,h===o)break}return!1},n.ClipperBase.prototype.SlopesEqual=n.ClipperBase.SlopesEqual=function(){var s=arguments,o=s.length,l,h,p,y,w,D,O;return o===3?(l=s[0],h=s[1],O=s[2],O?Tt.op_Equality(Tt.Int128Mul(l.Delta.Y,h.Delta.X),Tt.Int128Mul(l.Delta.X,h.Delta.Y)):n.Cast_Int64(l.Delta.Y*h.Delta.X)===n.Cast_Int64(l.Delta.X*h.Delta.Y)):o===4?(p=s[0],y=s[1],w=s[2],O=s[3],O?Tt.op_Equality(Tt.Int128Mul(p.Y-y.Y,y.X-w.X),Tt.Int128Mul(p.X-y.X,y.Y-w.Y)):n.Cast_Int64((p.Y-y.Y)*(y.X-w.X))-n.Cast_Int64((p.X-y.X)*(y.Y-w.Y))===0):(p=s[0],y=s[1],w=s[2],D=s[3],O=s[4],O?Tt.op_Equality(Tt.Int128Mul(p.Y-y.Y,w.X-D.X),Tt.Int128Mul(p.X-y.X,w.Y-D.Y)):n.Cast_Int64((p.Y-y.Y)*(w.X-D.X))-n.Cast_Int64((p.X-y.X)*(w.Y-D.Y))===0)},n.ClipperBase.SlopesEqual3=function(s,o,l){return l?Tt.op_Equality(Tt.Int128Mul(s.Delta.Y,o.Delta.X),Tt.Int128Mul(s.Delta.X,o.Delta.Y)):n.Cast_Int64(s.Delta.Y*o.Delta.X)===n.Cast_Int64(s.Delta.X*o.Delta.Y)},n.ClipperBase.SlopesEqual4=function(s,o,l,h){return h?Tt.op_Equality(Tt.Int128Mul(s.Y-o.Y,o.X-l.X),Tt.Int128Mul(s.X-o.X,o.Y-l.Y)):n.Cast_Int64((s.Y-o.Y)*(o.X-l.X))-n.Cast_Int64((s.X-o.X)*(o.Y-l.Y))===0},n.ClipperBase.SlopesEqual5=function(s,o,l,h,p){return p?Tt.op_Equality(Tt.Int128Mul(s.Y-o.Y,l.X-h.X),Tt.Int128Mul(s.X-o.X,l.Y-h.Y)):n.Cast_Int64((s.Y-o.Y)*(l.X-h.X))-n.Cast_Int64((s.X-o.X)*(l.Y-h.Y))===0},n.ClipperBase.prototype.Clear=function(){this.DisposeLocalMinimaList();for(var s=0,o=this.m_edges.length;s<o;++s){for(var l=0,h=this.m_edges[s].length;l<h;++l)this.m_edges[s][l]=null;n.Clear(this.m_edges[s])}n.Clear(this.m_edges),this.m_UseFullRange=!1,this.m_HasOpenPaths=!1},n.ClipperBase.prototype.DisposeLocalMinimaList=function(){for(;this.m_MinimaList!==null;){var s=this.m_MinimaList.Next;this.m_MinimaList=null,this.m_MinimaList=s}this.m_CurrentLM=null},n.ClipperBase.prototype.RangeTest=function(s,o){o.Value?(s.X>n.ClipperBase.hiRange||s.Y>n.ClipperBase.hiRange||-s.X>n.ClipperBase.hiRange||-s.Y>n.ClipperBase.hiRange)&&n.Error("Coordinate outside allowed range in RangeTest()."):(s.X>n.ClipperBase.loRange||s.Y>n.ClipperBase.loRange||-s.X>n.ClipperBase.loRange||-s.Y>n.ClipperBase.loRange)&&(o.Value=!0,this.RangeTest(s,o))},n.ClipperBase.prototype.InitEdge=function(s,o,l,h){s.Next=o,s.Prev=l,s.Curr.X=h.X,s.Curr.Y=h.Y,n.use_xyz&&(s.Curr.Z=h.Z),s.OutIdx=-1},n.ClipperBase.prototype.InitEdge2=function(s,o){s.Curr.Y>=s.Next.Curr.Y?(s.Bot.X=s.Curr.X,s.Bot.Y=s.Curr.Y,n.use_xyz&&(s.Bot.Z=s.Curr.Z),s.Top.X=s.Next.Curr.X,s.Top.Y=s.Next.Curr.Y,n.use_xyz&&(s.Top.Z=s.Next.Curr.Z)):(s.Top.X=s.Curr.X,s.Top.Y=s.Curr.Y,n.use_xyz&&(s.Top.Z=s.Curr.Z),s.Bot.X=s.Next.Curr.X,s.Bot.Y=s.Next.Curr.Y,n.use_xyz&&(s.Bot.Z=s.Next.Curr.Z)),this.SetDx(s),s.PolyTyp=o},n.ClipperBase.prototype.FindNextLocMin=function(s){for(var o;;){for(;n.IntPoint.op_Inequality(s.Bot,s.Prev.Bot)||n.IntPoint.op_Equality(s.Curr,s.Top);)s=s.Next;if(s.Dx!==n.ClipperBase.horizontal&&s.Prev.Dx!==n.ClipperBase.horizontal)break;for(;s.Prev.Dx===n.ClipperBase.horizontal;)s=s.Prev;for(o=s;s.Dx===n.ClipperBase.horizontal;)s=s.Next;if(s.Top.Y!==s.Prev.Bot.Y){o.Prev.Bot.X<s.Bot.X&&(s=o);break}}return s},n.ClipperBase.prototype.ProcessBound=function(s,o){var l,h=s,p;if(h.OutIdx===n.ClipperBase.Skip){if(s=h,o){for(;s.Top.Y===s.Next.Bot.Y;)s=s.Next;for(;s!==h&&s.Dx===n.ClipperBase.horizontal;)s=s.Prev}else{for(;s.Top.Y===s.Prev.Bot.Y;)s=s.Prev;for(;s!==h&&s.Dx===n.ClipperBase.horizontal;)s=s.Next}if(s===h)o?h=s.Next:h=s.Prev;else{o?s=h.Next:s=h.Prev;var y=new n.LocalMinima;y.Next=null,y.Y=s.Bot.Y,y.LeftBound=null,y.RightBound=s,s.WindDelta=0,h=this.ProcessBound(s,o),this.InsertLocalMinima(y)}return h}if(s.Dx===n.ClipperBase.horizontal&&(o?l=s.Prev:l=s.Next,l.Dx===n.ClipperBase.horizontal?l.Bot.X!==s.Bot.X&&l.Top.X!==s.Bot.X&&this.ReverseHorizontal(s):l.Bot.X!==s.Bot.X&&this.ReverseHorizontal(s)),l=s,o){for(;h.Top.Y===h.Next.Bot.Y&&h.Next.OutIdx!==n.ClipperBase.Skip;)h=h.Next;if(h.Dx===n.ClipperBase.horizontal&&h.Next.OutIdx!==n.ClipperBase.Skip){for(p=h;p.Prev.Dx===n.ClipperBase.horizontal;)p=p.Prev;p.Prev.Top.X>h.Next.Top.X&&(h=p.Prev)}for(;s!==h;)s.NextInLML=s.Next,s.Dx===n.ClipperBase.horizontal&&s!==l&&s.Bot.X!==s.Prev.Top.X&&this.ReverseHorizontal(s),s=s.Next;s.Dx===n.ClipperBase.horizontal&&s!==l&&s.Bot.X!==s.Prev.Top.X&&this.ReverseHorizontal(s),h=h.Next}else{for(;h.Top.Y===h.Prev.Bot.Y&&h.Prev.OutIdx!==n.ClipperBase.Skip;)h=h.Prev;if(h.Dx===n.ClipperBase.horizontal&&h.Prev.OutIdx!==n.ClipperBase.Skip){for(p=h;p.Next.Dx===n.ClipperBase.horizontal;)p=p.Next;(p.Next.Top.X===h.Prev.Top.X||p.Next.Top.X>h.Prev.Top.X)&&(h=p.Next)}for(;s!==h;)s.NextInLML=s.Prev,s.Dx===n.ClipperBase.horizontal&&s!==l&&s.Bot.X!==s.Next.Top.X&&this.ReverseHorizontal(s),s=s.Prev;s.Dx===n.ClipperBase.horizontal&&s!==l&&s.Bot.X!==s.Next.Top.X&&this.ReverseHorizontal(s),h=h.Prev}return h},n.ClipperBase.prototype.AddPath=function(s,o,l){n.use_lines?!l&&o===n.PolyType.ptClip&&n.Error("AddPath: Open paths must be subject."):l||n.Error("AddPath: Open paths have been disabled.");var h=s.length-1;if(l)for(;h>0&&n.IntPoint.op_Equality(s[h],s[0]);)--h;for(;h>0&&n.IntPoint.op_Equality(s[h],s[h-1]);)--h;if(l&&h<2||!l&&h<1)return!1;for(var p=new Array,y=0;y<=h;y++)p.push(new n.TEdge);var w=!0;p[1].Curr.X=s[1].X,p[1].Curr.Y=s[1].Y,n.use_xyz&&(p[1].Curr.Z=s[1].Z);var D={Value:this.m_UseFullRange};this.RangeTest(s[0],D),this.m_UseFullRange=D.Value,D.Value=this.m_UseFullRange,this.RangeTest(s[h],D),this.m_UseFullRange=D.Value,this.InitEdge(p[0],p[1],p[h],s[0]),this.InitEdge(p[h],p[0],p[h-1],s[h]);for(var y=h-1;y>=1;--y)D.Value=this.m_UseFullRange,this.RangeTest(s[y],D),this.m_UseFullRange=D.Value,this.InitEdge(p[y],p[y+1],p[y-1],s[y]);for(var O=p[0],H=O,at=O;;){if(H.Curr===H.Next.Curr&&(l||H.Next!==O)){if(H===H.Next)break;H===O&&(O=H.Next),H=this.RemoveEdge(H),at=H;continue}if(H.Prev===H.Next)break;if(l&&n.ClipperBase.SlopesEqual4(H.Prev.Curr,H.Curr,H.Next.Curr,this.m_UseFullRange)&&(!this.PreserveCollinear||!this.Pt2IsBetweenPt1AndPt3(H.Prev.Curr,H.Curr,H.Next.Curr))){H===O&&(O=H.Next),H=this.RemoveEdge(H),H=H.Prev,at=H;continue}if(H=H.Next,H===at||!l&&H.Next===O)break}if(!l&&H===H.Next||l&&H.Prev===H.Next)return!1;l||(this.m_HasOpenPaths=!0,O.Prev.OutIdx=n.ClipperBase.Skip),H=O;do this.InitEdge2(H,o),H=H.Next,w&&H.Curr.Y!==O.Curr.Y&&(w=!1);while(H!==O);if(w){if(l)return!1;H.Prev.OutIdx=n.ClipperBase.Skip;var ot=new n.LocalMinima;for(ot.Next=null,ot.Y=H.Bot.Y,ot.LeftBound=null,ot.RightBound=H,ot.RightBound.Side=n.EdgeSide.esRight,ot.RightBound.WindDelta=0;H.Bot.X!==H.Prev.Top.X&&this.ReverseHorizontal(H),H.Next.OutIdx!==n.ClipperBase.Skip;)H.NextInLML=H.Next,H=H.Next;return this.InsertLocalMinima(ot),this.m_edges.push(p),!0}this.m_edges.push(p);var gt,Vt=null;for(n.IntPoint.op_Equality(H.Prev.Bot,H.Prev.Top)&&(H=H.Next);H=this.FindNextLocMin(H),H!==Vt;){Vt===null&&(Vt=H);var ot=new n.LocalMinima;ot.Next=null,ot.Y=H.Bot.Y,H.Dx<H.Prev.Dx?(ot.LeftBound=H.Prev,ot.RightBound=H,gt=!1):(ot.LeftBound=H,ot.RightBound=H.Prev,gt=!0),ot.LeftBound.Side=n.EdgeSide.esLeft,ot.RightBound.Side=n.EdgeSide.esRight,l?ot.LeftBound.Next===ot.RightBound?ot.LeftBound.WindDelta=-1:ot.LeftBound.WindDelta=1:ot.LeftBound.WindDelta=0,ot.RightBound.WindDelta=-ot.LeftBound.WindDelta,H=this.ProcessBound(ot.LeftBound,gt),H.OutIdx===n.ClipperBase.Skip&&(H=this.ProcessBound(H,gt));var $t=this.ProcessBound(ot.RightBound,!gt);$t.OutIdx===n.ClipperBase.Skip&&($t=this.ProcessBound($t,!gt)),ot.LeftBound.OutIdx===n.ClipperBase.Skip?ot.LeftBound=null:ot.RightBound.OutIdx===n.ClipperBase.Skip&&(ot.RightBound=null),this.InsertLocalMinima(ot),gt||(H=$t)}return!0},n.ClipperBase.prototype.AddPaths=function(s,o,l){for(var h=!1,p=0,y=s.length;p<y;++p)this.AddPath(s[p],o,l)&&(h=!0);return h},n.ClipperBase.prototype.Pt2IsBetweenPt1AndPt3=function(s,o,l){return n.IntPoint.op_Equality(s,l)||n.IntPoint.op_Equality(s,o)||n.IntPoint.op_Equality(l,o)?!1:s.X!==l.X?o.X>s.X==o.X<l.X:o.Y>s.Y==o.Y<l.Y},n.ClipperBase.prototype.RemoveEdge=function(s){s.Prev.Next=s.Next,s.Next.Prev=s.Prev;var o=s.Next;return s.Prev=null,o},n.ClipperBase.prototype.SetDx=function(s){s.Delta.X=s.Top.X-s.Bot.X,s.Delta.Y=s.Top.Y-s.Bot.Y,s.Delta.Y===0?s.Dx=n.ClipperBase.horizontal:s.Dx=s.Delta.X/s.Delta.Y},n.ClipperBase.prototype.InsertLocalMinima=function(s){if(this.m_MinimaList===null)this.m_MinimaList=s;else if(s.Y>=this.m_MinimaList.Y)s.Next=this.m_MinimaList,this.m_MinimaList=s;else{for(var o=this.m_MinimaList;o.Next!==null&&s.Y<o.Next.Y;)o=o.Next;s.Next=o.Next,o.Next=s}},n.ClipperBase.prototype.PopLocalMinima=function(s,o){return o.v=this.m_CurrentLM,this.m_CurrentLM!==null&&this.m_CurrentLM.Y===s?(this.m_CurrentLM=this.m_CurrentLM.Next,!0):!1},n.ClipperBase.prototype.ReverseHorizontal=function(s){var o=s.Top.X;s.Top.X=s.Bot.X,s.Bot.X=o,n.use_xyz&&(o=s.Top.Z,s.Top.Z=s.Bot.Z,s.Bot.Z=o)},n.ClipperBase.prototype.Reset=function(){if(this.m_CurrentLM=this.m_MinimaList,this.m_CurrentLM!==null){this.m_Scanbeam=null;for(var s=this.m_MinimaList;s!==null;){this.InsertScanbeam(s.Y);var o=s.LeftBound;o!==null&&(o.Curr.X=o.Bot.X,o.Curr.Y=o.Bot.Y,n.use_xyz&&(o.Curr.Z=o.Bot.Z),o.OutIdx=n.ClipperBase.Unassigned),o=s.RightBound,o!==null&&(o.Curr.X=o.Bot.X,o.Curr.Y=o.Bot.Y,n.use_xyz&&(o.Curr.Z=o.Bot.Z),o.OutIdx=n.ClipperBase.Unassigned),s=s.Next}this.m_ActiveEdges=null}},n.ClipperBase.prototype.InsertScanbeam=function(s){if(this.m_Scanbeam===null)this.m_Scanbeam=new n.Scanbeam,this.m_Scanbeam.Next=null,this.m_Scanbeam.Y=s;else if(s>this.m_Scanbeam.Y){var o=new n.Scanbeam;o.Y=s,o.Next=this.m_Scanbeam,this.m_Scanbeam=o}else{for(var l=this.m_Scanbeam;l.Next!==null&&s<=l.Next.Y;)l=l.Next;if(s===l.Y)return;var h=new n.Scanbeam;h.Y=s,h.Next=l.Next,l.Next=h}},n.ClipperBase.prototype.PopScanbeam=function(s){return this.m_Scanbeam===null?(s.v=0,!1):(s.v=this.m_Scanbeam.Y,this.m_Scanbeam=this.m_Scanbeam.Next,!0)},n.ClipperBase.prototype.LocalMinimaPending=function(){return this.m_CurrentLM!==null},n.ClipperBase.prototype.CreateOutRec=function(){var s=new n.OutRec;return s.Idx=n.ClipperBase.Unassigned,s.IsHole=!1,s.IsOpen=!1,s.FirstLeft=null,s.Pts=null,s.BottomPt=null,s.PolyNode=null,this.m_PolyOuts.push(s),s.Idx=this.m_PolyOuts.length-1,s},n.ClipperBase.prototype.DisposeOutRec=function(s){var o=this.m_PolyOuts[s];o.Pts=null,o=null,this.m_PolyOuts[s]=null},n.ClipperBase.prototype.UpdateEdgeIntoAEL=function(s){s.NextInLML===null&&n.Error("UpdateEdgeIntoAEL: invalid call");var o=s.PrevInAEL,l=s.NextInAEL;return s.NextInLML.OutIdx=s.OutIdx,o!==null?o.NextInAEL=s.NextInLML:this.m_ActiveEdges=s.NextInLML,l!==null&&(l.PrevInAEL=s.NextInLML),s.NextInLML.Side=s.Side,s.NextInLML.WindDelta=s.WindDelta,s.NextInLML.WindCnt=s.WindCnt,s.NextInLML.WindCnt2=s.WindCnt2,s=s.NextInLML,s.Curr.X=s.Bot.X,s.Curr.Y=s.Bot.Y,s.PrevInAEL=o,s.NextInAEL=l,n.ClipperBase.IsHorizontal(s)||this.InsertScanbeam(s.Top.Y),s},n.ClipperBase.prototype.SwapPositionsInAEL=function(s,o){if(!(s.NextInAEL===s.PrevInAEL||o.NextInAEL===o.PrevInAEL)){if(s.NextInAEL===o){var l=o.NextInAEL;l!==null&&(l.PrevInAEL=s);var h=s.PrevInAEL;h!==null&&(h.NextInAEL=o),o.PrevInAEL=h,o.NextInAEL=s,s.PrevInAEL=o,s.NextInAEL=l}else if(o.NextInAEL===s){var p=s.NextInAEL;p!==null&&(p.PrevInAEL=o);var y=o.PrevInAEL;y!==null&&(y.NextInAEL=s),s.PrevInAEL=y,s.NextInAEL=o,o.PrevInAEL=s,o.NextInAEL=p}else{var w=s.NextInAEL,D=s.PrevInAEL;s.NextInAEL=o.NextInAEL,s.NextInAEL!==null&&(s.NextInAEL.PrevInAEL=s),s.PrevInAEL=o.PrevInAEL,s.PrevInAEL!==null&&(s.PrevInAEL.NextInAEL=s),o.NextInAEL=w,o.NextInAEL!==null&&(o.NextInAEL.PrevInAEL=o),o.PrevInAEL=D,o.PrevInAEL!==null&&(o.PrevInAEL.NextInAEL=o)}s.PrevInAEL===null?this.m_ActiveEdges=s:o.PrevInAEL===null&&(this.m_ActiveEdges=o)}},n.ClipperBase.prototype.DeleteFromAEL=function(s){var o=s.PrevInAEL,l=s.NextInAEL;o===null&&l===null&&s!==this.m_ActiveEdges||(o!==null?o.NextInAEL=l:this.m_ActiveEdges=l,l!==null&&(l.PrevInAEL=o),s.NextInAEL=null,s.PrevInAEL=null)},n.Clipper=function(s){typeof s>"u"&&(s=0),this.m_PolyOuts=null,this.m_ClipType=n.ClipType.ctIntersection,this.m_Scanbeam=null,this.m_Maxima=null,this.m_ActiveEdges=null,this.m_SortedEdges=null,this.m_IntersectList=null,this.m_IntersectNodeComparer=null,this.m_ExecuteLocked=!1,this.m_ClipFillType=n.PolyFillType.pftEvenOdd,this.m_SubjFillType=n.PolyFillType.pftEvenOdd,this.m_Joins=null,this.m_GhostJoins=null,this.m_UsingPolyTree=!1,this.ReverseSolution=!1,this.StrictlySimple=!1,n.ClipperBase.call(this),this.m_Scanbeam=null,this.m_Maxima=null,this.m_ActiveEdges=null,this.m_SortedEdges=null,this.m_IntersectList=new Array,this.m_IntersectNodeComparer=n.MyIntersectNodeSort.Compare,this.m_ExecuteLocked=!1,this.m_UsingPolyTree=!1,this.m_PolyOuts=new Array,this.m_Joins=new Array,this.m_GhostJoins=new Array,this.ReverseSolution=(1&s)!==0,this.StrictlySimple=(2&s)!==0,this.PreserveCollinear=(4&s)!==0,n.use_xyz&&(this.ZFillFunction=null)},n.Clipper.ioReverseSolution=1,n.Clipper.ioStrictlySimple=2,n.Clipper.ioPreserveCollinear=4,n.Clipper.prototype.Clear=function(){this.m_edges.length!==0&&(this.DisposeAllPolyPts(),n.ClipperBase.prototype.Clear.call(this))},n.Clipper.prototype.InsertMaxima=function(s){var o=new n.Maxima;if(o.X=s,this.m_Maxima===null)this.m_Maxima=o,this.m_Maxima.Next=null,this.m_Maxima.Prev=null;else if(s<this.m_Maxima.X)o.Next=this.m_Maxima,o.Prev=null,this.m_Maxima=o;else{for(var l=this.m_Maxima;l.Next!==null&&s>=l.Next.X;)l=l.Next;if(s===l.X)return;o.Next=l.Next,o.Prev=l,l.Next!==null&&(l.Next.Prev=o),l.Next=o}},n.Clipper.prototype.Execute=function(){var s=arguments,o=s.length,l=s[1]instanceof n.PolyTree;if(o===4&&!l){var h=s[0],p=s[1],y=s[2],w=s[3];if(this.m_ExecuteLocked)return!1;this.m_HasOpenPaths&&n.Error("Error: PolyTree struct is needed for open path clipping."),this.m_ExecuteLocked=!0,n.Clear(p),this.m_SubjFillType=y,this.m_ClipFillType=w,this.m_ClipType=h,this.m_UsingPolyTree=!1;try{var D=this.ExecuteInternal();D&&this.BuildResult(p)}finally{this.DisposeAllPolyPts(),this.m_ExecuteLocked=!1}return D}else if(o===4&&l){var h=s[0],O=s[1],y=s[2],w=s[3];if(this.m_ExecuteLocked)return!1;this.m_ExecuteLocked=!0,this.m_SubjFillType=y,this.m_ClipFillType=w,this.m_ClipType=h,this.m_UsingPolyTree=!0;try{var D=this.ExecuteInternal();D&&this.BuildResult2(O)}finally{this.DisposeAllPolyPts(),this.m_ExecuteLocked=!1}return D}else if(o===2&&!l){var h=s[0],p=s[1];return this.Execute(h,p,n.PolyFillType.pftEvenOdd,n.PolyFillType.pftEvenOdd)}else if(o===2&&l){var h=s[0],O=s[1];return this.Execute(h,O,n.PolyFillType.pftEvenOdd,n.PolyFillType.pftEvenOdd)}},n.Clipper.prototype.FixHoleLinkage=function(s){if(!(s.FirstLeft===null||s.IsHole!==s.FirstLeft.IsHole&&s.FirstLeft.Pts!==null)){for(var o=s.FirstLeft;o!==null&&(o.IsHole===s.IsHole||o.Pts===null);)o=o.FirstLeft;s.FirstLeft=o}},n.Clipper.prototype.ExecuteInternal=function(){try{this.Reset(),this.m_SortedEdges=null,this.m_Maxima=null;var s={},o={};if(!this.PopScanbeam(s))return!1;for(this.InsertLocalMinimaIntoAEL(s.v);this.PopScanbeam(o)||this.LocalMinimaPending();){if(this.ProcessHorizontals(),this.m_GhostJoins.length=0,!this.ProcessIntersections(o.v))return!1;this.ProcessEdgesAtTopOfScanbeam(o.v),s.v=o.v,this.InsertLocalMinimaIntoAEL(s.v)}var l,h,p;for(h=0,p=this.m_PolyOuts.length;h<p;h++)l=this.m_PolyOuts[h],!(l.Pts===null||l.IsOpen)&&(l.IsHole^this.ReverseSolution)==this.Area$1(l)>0&&this.ReversePolyPtLinks(l.Pts);for(this.JoinCommonEdges(),h=0,p=this.m_PolyOuts.length;h<p;h++)l=this.m_PolyOuts[h],l.Pts!==null&&(l.IsOpen?this.FixupOutPolyline(l):this.FixupOutPolygon(l));return this.StrictlySimple&&this.DoSimplePolygons(),!0}finally{this.m_Joins.length=0,this.m_GhostJoins.length=0}},n.Clipper.prototype.DisposeAllPolyPts=function(){for(var s=0,o=this.m_PolyOuts.length;s<o;++s)this.DisposeOutRec(s);n.Clear(this.m_PolyOuts)},n.Clipper.prototype.AddJoin=function(s,o,l){var h=new n.Join;h.OutPt1=s,h.OutPt2=o,h.OffPt.X=l.X,h.OffPt.Y=l.Y,n.use_xyz&&(h.OffPt.Z=l.Z),this.m_Joins.push(h)},n.Clipper.prototype.AddGhostJoin=function(s,o){var l=new n.Join;l.OutPt1=s,l.OffPt.X=o.X,l.OffPt.Y=o.Y,n.use_xyz&&(l.OffPt.Z=o.Z),this.m_GhostJoins.push(l)},n.Clipper.prototype.SetZ=function(s,o,l){if(this.ZFillFunction!==null){if(s.Z!==0||this.ZFillFunction===null)return;n.IntPoint.op_Equality(s,o.Bot)?s.Z=o.Bot.Z:n.IntPoint.op_Equality(s,o.Top)?s.Z=o.Top.Z:n.IntPoint.op_Equality(s,l.Bot)?s.Z=l.Bot.Z:n.IntPoint.op_Equality(s,l.Top)?s.Z=l.Top.Z:this.ZFillFunction(o.Bot,o.Top,l.Bot,l.Top,s)}},n.Clipper.prototype.InsertLocalMinimaIntoAEL=function(s){for(var o={},l,h;this.PopLocalMinima(s,o);){l=o.v.LeftBound,h=o.v.RightBound;var p=null;if(l===null?(this.InsertEdgeIntoAEL(h,null),this.SetWindingCount(h),this.IsContributing(h)&&(p=this.AddOutPt(h,h.Bot))):h===null?(this.InsertEdgeIntoAEL(l,null),this.SetWindingCount(l),this.IsContributing(l)&&(p=this.AddOutPt(l,l.Bot)),this.InsertScanbeam(l.Top.Y)):(this.InsertEdgeIntoAEL(l,null),this.InsertEdgeIntoAEL(h,l),this.SetWindingCount(l),h.WindCnt=l.WindCnt,h.WindCnt2=l.WindCnt2,this.IsContributing(l)&&(p=this.AddLocalMinPoly(l,h,l.Bot)),this.InsertScanbeam(l.Top.Y)),h!==null&&(n.ClipperBase.IsHorizontal(h)?(h.NextInLML!==null&&this.InsertScanbeam(h.NextInLML.Top.Y),this.AddEdgeToSEL(h)):this.InsertScanbeam(h.Top.Y)),!(l===null||h===null)){if(p!==null&&n.ClipperBase.IsHorizontal(h)&&this.m_GhostJoins.length>0&&h.WindDelta!==0)for(var y=0,w=this.m_GhostJoins.length;y<w;y++){var D=this.m_GhostJoins[y];this.HorzSegmentsOverlap(D.OutPt1.Pt.X,D.OffPt.X,h.Bot.X,h.Top.X)&&this.AddJoin(D.OutPt1,p,D.OffPt)}if(l.OutIdx>=0&&l.PrevInAEL!==null&&l.PrevInAEL.Curr.X===l.Bot.X&&l.PrevInAEL.OutIdx>=0&&n.ClipperBase.SlopesEqual5(l.PrevInAEL.Curr,l.PrevInAEL.Top,l.Curr,l.Top,this.m_UseFullRange)&&l.WindDelta!==0&&l.PrevInAEL.WindDelta!==0){var O=this.AddOutPt(l.PrevInAEL,l.Bot);this.AddJoin(p,O,l.Top)}if(l.NextInAEL!==h){if(h.OutIdx>=0&&h.PrevInAEL.OutIdx>=0&&n.ClipperBase.SlopesEqual5(h.PrevInAEL.Curr,h.PrevInAEL.Top,h.Curr,h.Top,this.m_UseFullRange)&&h.WindDelta!==0&&h.PrevInAEL.WindDelta!==0){var O=this.AddOutPt(h.PrevInAEL,h.Bot);this.AddJoin(p,O,h.Top)}var H=l.NextInAEL;if(H!==null)for(;H!==h;)this.IntersectEdges(h,H,l.Curr),H=H.NextInAEL}}}},n.Clipper.prototype.InsertEdgeIntoAEL=function(s,o){if(this.m_ActiveEdges===null)s.PrevInAEL=null,s.NextInAEL=null,this.m_ActiveEdges=s;else if(o===null&&this.E2InsertsBeforeE1(this.m_ActiveEdges,s))s.PrevInAEL=null,s.NextInAEL=this.m_ActiveEdges,this.m_ActiveEdges.PrevInAEL=s,this.m_ActiveEdges=s;else{for(o===null&&(o=this.m_ActiveEdges);o.NextInAEL!==null&&!this.E2InsertsBeforeE1(o.NextInAEL,s);)o=o.NextInAEL;s.NextInAEL=o.NextInAEL,o.NextInAEL!==null&&(o.NextInAEL.PrevInAEL=s),s.PrevInAEL=o,o.NextInAEL=s}},n.Clipper.prototype.E2InsertsBeforeE1=function(s,o){return o.Curr.X===s.Curr.X?o.Top.Y>s.Top.Y?o.Top.X<n.Clipper.TopX(s,o.Top.Y):s.Top.X>n.Clipper.TopX(o,s.Top.Y):o.Curr.X<s.Curr.X},n.Clipper.prototype.IsEvenOddFillType=function(s){return s.PolyTyp===n.PolyType.ptSubject?this.m_SubjFillType===n.PolyFillType.pftEvenOdd:this.m_ClipFillType===n.PolyFillType.pftEvenOdd},n.Clipper.prototype.IsEvenOddAltFillType=function(s){return s.PolyTyp===n.PolyType.ptSubject?this.m_ClipFillType===n.PolyFillType.pftEvenOdd:this.m_SubjFillType===n.PolyFillType.pftEvenOdd},n.Clipper.prototype.IsContributing=function(s){var o,l;switch(s.PolyTyp===n.PolyType.ptSubject?(o=this.m_SubjFillType,l=this.m_ClipFillType):(o=this.m_ClipFillType,l=this.m_SubjFillType),o){case n.PolyFillType.pftEvenOdd:if(s.WindDelta===0&&s.WindCnt!==1)return!1;break;case n.PolyFillType.pftNonZero:if(Math.abs(s.WindCnt)!==1)return!1;break;case n.PolyFillType.pftPositive:if(s.WindCnt!==1)return!1;break;default:if(s.WindCnt!==-1)return!1;break}switch(this.m_ClipType){case n.ClipType.ctIntersection:switch(l){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return s.WindCnt2!==0;case n.PolyFillType.pftPositive:return s.WindCnt2>0;default:return s.WindCnt2<0}case n.ClipType.ctUnion:switch(l){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return s.WindCnt2===0;case n.PolyFillType.pftPositive:return s.WindCnt2<=0;default:return s.WindCnt2>=0}case n.ClipType.ctDifference:if(s.PolyTyp===n.PolyType.ptSubject)switch(l){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return s.WindCnt2===0;case n.PolyFillType.pftPositive:return s.WindCnt2<=0;default:return s.WindCnt2>=0}else switch(l){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return s.WindCnt2!==0;case n.PolyFillType.pftPositive:return s.WindCnt2>0;default:return s.WindCnt2<0}case n.ClipType.ctXor:if(s.WindDelta===0)switch(l){case n.PolyFillType.pftEvenOdd:case n.PolyFillType.pftNonZero:return s.WindCnt2===0;case n.PolyFillType.pftPositive:return s.WindCnt2<=0;default:return s.WindCnt2>=0}else return!0}return!0},n.Clipper.prototype.SetWindingCount=function(s){for(var o=s.PrevInAEL;o!==null&&(o.PolyTyp!==s.PolyTyp||o.WindDelta===0);)o=o.PrevInAEL;if(o===null){var l=s.PolyTyp===n.PolyType.ptSubject?this.m_SubjFillType:this.m_ClipFillType;s.WindDelta===0?s.WindCnt=l===n.PolyFillType.pftNegative?-1:1:s.WindCnt=s.WindDelta,s.WindCnt2=0,o=this.m_ActiveEdges}else if(s.WindDelta===0&&this.m_ClipType!==n.ClipType.ctUnion)s.WindCnt=1,s.WindCnt2=o.WindCnt2,o=o.NextInAEL;else if(this.IsEvenOddFillType(s)){if(s.WindDelta===0){for(var h=!0,p=o.PrevInAEL;p!==null;)p.PolyTyp===o.PolyTyp&&p.WindDelta!==0&&(h=!h),p=p.PrevInAEL;s.WindCnt=h?0:1}else s.WindCnt=s.WindDelta;s.WindCnt2=o.WindCnt2,o=o.NextInAEL}else o.WindCnt*o.WindDelta<0?Math.abs(o.WindCnt)>1?o.WindDelta*s.WindDelta<0?s.WindCnt=o.WindCnt:s.WindCnt=o.WindCnt+s.WindDelta:s.WindCnt=s.WindDelta===0?1:s.WindDelta:s.WindDelta===0?s.WindCnt=o.WindCnt<0?o.WindCnt-1:o.WindCnt+1:o.WindDelta*s.WindDelta<0?s.WindCnt=o.WindCnt:s.WindCnt=o.WindCnt+s.WindDelta,s.WindCnt2=o.WindCnt2,o=o.NextInAEL;if(this.IsEvenOddAltFillType(s))for(;o!==s;)o.WindDelta!==0&&(s.WindCnt2=s.WindCnt2===0?1:0),o=o.NextInAEL;else for(;o!==s;)s.WindCnt2+=o.WindDelta,o=o.NextInAEL},n.Clipper.prototype.AddEdgeToSEL=function(s){this.m_SortedEdges===null?(this.m_SortedEdges=s,s.PrevInSEL=null,s.NextInSEL=null):(s.NextInSEL=this.m_SortedEdges,s.PrevInSEL=null,this.m_SortedEdges.PrevInSEL=s,this.m_SortedEdges=s)},n.Clipper.prototype.PopEdgeFromSEL=function(s){if(s.v=this.m_SortedEdges,s.v===null)return!1;var o=s.v;return this.m_SortedEdges=s.v.NextInSEL,this.m_SortedEdges!==null&&(this.m_SortedEdges.PrevInSEL=null),o.NextInSEL=null,o.PrevInSEL=null,!0},n.Clipper.prototype.CopyAELToSEL=function(){var s=this.m_ActiveEdges;for(this.m_SortedEdges=s;s!==null;)s.PrevInSEL=s.PrevInAEL,s.NextInSEL=s.NextInAEL,s=s.NextInAEL},n.Clipper.prototype.SwapPositionsInSEL=function(s,o){if(!(s.NextInSEL===null&&s.PrevInSEL===null)&&!(o.NextInSEL===null&&o.PrevInSEL===null)){if(s.NextInSEL===o){var l=o.NextInSEL;l!==null&&(l.PrevInSEL=s);var h=s.PrevInSEL;h!==null&&(h.NextInSEL=o),o.PrevInSEL=h,o.NextInSEL=s,s.PrevInSEL=o,s.NextInSEL=l}else if(o.NextInSEL===s){var l=s.NextInSEL;l!==null&&(l.PrevInSEL=o);var h=o.PrevInSEL;h!==null&&(h.NextInSEL=s),s.PrevInSEL=h,s.NextInSEL=o,o.PrevInSEL=s,o.NextInSEL=l}else{var l=s.NextInSEL,h=s.PrevInSEL;s.NextInSEL=o.NextInSEL,s.NextInSEL!==null&&(s.NextInSEL.PrevInSEL=s),s.PrevInSEL=o.PrevInSEL,s.PrevInSEL!==null&&(s.PrevInSEL.NextInSEL=s),o.NextInSEL=l,o.NextInSEL!==null&&(o.NextInSEL.PrevInSEL=o),o.PrevInSEL=h,o.PrevInSEL!==null&&(o.PrevInSEL.NextInSEL=o)}s.PrevInSEL===null?this.m_SortedEdges=s:o.PrevInSEL===null&&(this.m_SortedEdges=o)}},n.Clipper.prototype.AddLocalMaxPoly=function(s,o,l){this.AddOutPt(s,l),o.WindDelta===0&&this.AddOutPt(o,l),s.OutIdx===o.OutIdx?(s.OutIdx=-1,o.OutIdx=-1):s.OutIdx<o.OutIdx?this.AppendPolygon(s,o):this.AppendPolygon(o,s)},n.Clipper.prototype.AddLocalMinPoly=function(s,o,l){var h,p,y;if(n.ClipperBase.IsHorizontal(o)||s.Dx>o.Dx?(h=this.AddOutPt(s,l),o.OutIdx=s.OutIdx,s.Side=n.EdgeSide.esLeft,o.Side=n.EdgeSide.esRight,p=s,p.PrevInAEL===o?y=o.PrevInAEL:y=p.PrevInAEL):(h=this.AddOutPt(o,l),s.OutIdx=o.OutIdx,s.Side=n.EdgeSide.esRight,o.Side=n.EdgeSide.esLeft,p=o,p.PrevInAEL===s?y=s.PrevInAEL:y=p.PrevInAEL),y!==null&&y.OutIdx>=0&&y.Top.Y<l.Y&&p.Top.Y<l.Y){var w=n.Clipper.TopX(y,l.Y),D=n.Clipper.TopX(p,l.Y);if(w===D&&p.WindDelta!==0&&y.WindDelta!==0&&n.ClipperBase.SlopesEqual5(new n.IntPoint2(w,l.Y),y.Top,new n.IntPoint2(D,l.Y),p.Top,this.m_UseFullRange)){var O=this.AddOutPt(y,l);this.AddJoin(h,O,p.Top)}}return h},n.Clipper.prototype.AddOutPt=function(s,o){if(s.OutIdx<0){var l=this.CreateOutRec();l.IsOpen=s.WindDelta===0;var h=new n.OutPt;return l.Pts=h,h.Idx=l.Idx,h.Pt.X=o.X,h.Pt.Y=o.Y,n.use_xyz&&(h.Pt.Z=o.Z),h.Next=h,h.Prev=h,l.IsOpen||this.SetHoleState(s,l),s.OutIdx=l.Idx,h}else{var l=this.m_PolyOuts[s.OutIdx],p=l.Pts,y=s.Side===n.EdgeSide.esLeft;if(y&&n.IntPoint.op_Equality(o,p.Pt))return p;if(!y&&n.IntPoint.op_Equality(o,p.Prev.Pt))return p.Prev;var h=new n.OutPt;return h.Idx=l.Idx,h.Pt.X=o.X,h.Pt.Y=o.Y,n.use_xyz&&(h.Pt.Z=o.Z),h.Next=p,h.Prev=p.Prev,h.Prev.Next=h,p.Prev=h,y&&(l.Pts=h),h}},n.Clipper.prototype.GetLastOutPt=function(s){var o=this.m_PolyOuts[s.OutIdx];return s.Side===n.EdgeSide.esLeft?o.Pts:o.Pts.Prev},n.Clipper.prototype.SwapPoints=function(s,o){var l=new n.IntPoint1(s.Value);s.Value.X=o.Value.X,s.Value.Y=o.Value.Y,n.use_xyz&&(s.Value.Z=o.Value.Z),o.Value.X=l.X,o.Value.Y=l.Y,n.use_xyz&&(o.Value.Z=l.Z)},n.Clipper.prototype.HorzSegmentsOverlap=function(s,o,l,h){var p;return s>o&&(p=s,s=o,o=p),l>h&&(p=l,l=h,h=p),s<h&&l<o},n.Clipper.prototype.SetHoleState=function(s,o){for(var l=s.PrevInAEL,h=null;l!==null;)l.OutIdx>=0&&l.WindDelta!==0&&(h===null?h=l:h.OutIdx===l.OutIdx&&(h=null)),l=l.PrevInAEL;h===null?(o.FirstLeft=null,o.IsHole=!1):(o.FirstLeft=this.m_PolyOuts[h.OutIdx],o.IsHole=!o.FirstLeft.IsHole)},n.Clipper.prototype.GetDx=function(s,o){return s.Y===o.Y?n.ClipperBase.horizontal:(o.X-s.X)/(o.Y-s.Y)},n.Clipper.prototype.FirstIsBottomPt=function(s,o){for(var l=s.Prev;n.IntPoint.op_Equality(l.Pt,s.Pt)&&l!==s;)l=l.Prev;var h=Math.abs(this.GetDx(s.Pt,l.Pt));for(l=s.Next;n.IntPoint.op_Equality(l.Pt,s.Pt)&&l!==s;)l=l.Next;var p=Math.abs(this.GetDx(s.Pt,l.Pt));for(l=o.Prev;n.IntPoint.op_Equality(l.Pt,o.Pt)&&l!==o;)l=l.Prev;var y=Math.abs(this.GetDx(o.Pt,l.Pt));for(l=o.Next;n.IntPoint.op_Equality(l.Pt,o.Pt)&&l!==o;)l=l.Next;var w=Math.abs(this.GetDx(o.Pt,l.Pt));return Math.max(h,p)===Math.max(y,w)&&Math.min(h,p)===Math.min(y,w)?this.Area(s)>0:h>=y&&h>=w||p>=y&&p>=w},n.Clipper.prototype.GetBottomPt=function(s){for(var o=null,l=s.Next;l!==s;)l.Pt.Y>s.Pt.Y?(s=l,o=null):l.Pt.Y===s.Pt.Y&&l.Pt.X<=s.Pt.X&&(l.Pt.X<s.Pt.X?(o=null,s=l):l.Next!==s&&l.Prev!==s&&(o=l)),l=l.Next;if(o!==null)for(;o!==l;)for(this.FirstIsBottomPt(l,o)||(s=o),o=o.Next;n.IntPoint.op_Inequality(o.Pt,s.Pt);)o=o.Next;return s},n.Clipper.prototype.GetLowermostRec=function(s,o){s.BottomPt===null&&(s.BottomPt=this.GetBottomPt(s.Pts)),o.BottomPt===null&&(o.BottomPt=this.GetBottomPt(o.Pts));var l=s.BottomPt,h=o.BottomPt;return l.Pt.Y>h.Pt.Y?s:l.Pt.Y<h.Pt.Y?o:l.Pt.X<h.Pt.X?s:l.Pt.X>h.Pt.X||l.Next===l?o:h.Next===h||this.FirstIsBottomPt(l,h)?s:o},n.Clipper.prototype.OutRec1RightOfOutRec2=function(s,o){do if(s=s.FirstLeft,s===o)return!0;while(s!==null);return!1},n.Clipper.prototype.GetOutRec=function(s){for(var o=this.m_PolyOuts[s];o!==this.m_PolyOuts[o.Idx];)o=this.m_PolyOuts[o.Idx];return o},n.Clipper.prototype.AppendPolygon=function(s,o){var l=this.m_PolyOuts[s.OutIdx],h=this.m_PolyOuts[o.OutIdx],p;this.OutRec1RightOfOutRec2(l,h)?p=h:this.OutRec1RightOfOutRec2(h,l)?p=l:p=this.GetLowermostRec(l,h);var y=l.Pts,w=y.Prev,D=h.Pts,O=D.Prev;s.Side===n.EdgeSide.esLeft?o.Side===n.EdgeSide.esLeft?(this.ReversePolyPtLinks(D),D.Next=y,y.Prev=D,w.Next=O,O.Prev=w,l.Pts=O):(O.Next=y,y.Prev=O,D.Prev=w,w.Next=D,l.Pts=D):o.Side===n.EdgeSide.esRight?(this.ReversePolyPtLinks(D),w.Next=O,O.Prev=w,D.Next=y,y.Prev=D):(w.Next=D,D.Prev=w,y.Prev=O,O.Next=y),l.BottomPt=null,p===h&&(h.FirstLeft!==l&&(l.FirstLeft=h.FirstLeft),l.IsHole=h.IsHole),h.Pts=null,h.BottomPt=null,h.FirstLeft=l;var H=s.OutIdx,at=o.OutIdx;s.OutIdx=-1,o.OutIdx=-1;for(var ot=this.m_ActiveEdges;ot!==null;){if(ot.OutIdx===at){ot.OutIdx=H,ot.Side=s.Side;break}ot=ot.NextInAEL}h.Idx=l.Idx},n.Clipper.prototype.ReversePolyPtLinks=function(s){if(s!==null){var o,l;o=s;do l=o.Next,o.Next=o.Prev,o.Prev=l,o=l;while(o!==s)}},n.Clipper.SwapSides=function(s,o){var l=s.Side;s.Side=o.Side,o.Side=l},n.Clipper.SwapPolyIndexes=function(s,o){var l=s.OutIdx;s.OutIdx=o.OutIdx,o.OutIdx=l},n.Clipper.prototype.IntersectEdges=function(s,o,l){var h=s.OutIdx>=0,p=o.OutIdx>=0;if(n.use_xyz&&this.SetZ(l,s,o),n.use_lines&&(s.WindDelta===0||o.WindDelta===0)){if(s.WindDelta===0&&o.WindDelta===0)return;s.PolyTyp===o.PolyTyp&&s.WindDelta!==o.WindDelta&&this.m_ClipType===n.ClipType.ctUnion?s.WindDelta===0?p&&(this.AddOutPt(s,l),h&&(s.OutIdx=-1)):h&&(this.AddOutPt(o,l),p&&(o.OutIdx=-1)):s.PolyTyp!==o.PolyTyp&&(s.WindDelta===0&&Math.abs(o.WindCnt)===1&&(this.m_ClipType!==n.ClipType.ctUnion||o.WindCnt2===0)?(this.AddOutPt(s,l),h&&(s.OutIdx=-1)):o.WindDelta===0&&Math.abs(s.WindCnt)===1&&(this.m_ClipType!==n.ClipType.ctUnion||s.WindCnt2===0)&&(this.AddOutPt(o,l),p&&(o.OutIdx=-1)));return}if(s.PolyTyp===o.PolyTyp)if(this.IsEvenOddFillType(s)){var y=s.WindCnt;s.WindCnt=o.WindCnt,o.WindCnt=y}else s.WindCnt+o.WindDelta===0?s.WindCnt=-s.WindCnt:s.WindCnt+=o.WindDelta,o.WindCnt-s.WindDelta===0?o.WindCnt=-o.WindCnt:o.WindCnt-=s.WindDelta;else this.IsEvenOddFillType(o)?s.WindCnt2=s.WindCnt2===0?1:0:s.WindCnt2+=o.WindDelta,this.IsEvenOddFillType(s)?o.WindCnt2=o.WindCnt2===0?1:0:o.WindCnt2-=s.WindDelta;var w,D,O,H;s.PolyTyp===n.PolyType.ptSubject?(w=this.m_SubjFillType,O=this.m_ClipFillType):(w=this.m_ClipFillType,O=this.m_SubjFillType),o.PolyTyp===n.PolyType.ptSubject?(D=this.m_SubjFillType,H=this.m_ClipFillType):(D=this.m_ClipFillType,H=this.m_SubjFillType);var at,ot;switch(w){case n.PolyFillType.pftPositive:at=s.WindCnt;break;case n.PolyFillType.pftNegative:at=-s.WindCnt;break;default:at=Math.abs(s.WindCnt);break}switch(D){case n.PolyFillType.pftPositive:ot=o.WindCnt;break;case n.PolyFillType.pftNegative:ot=-o.WindCnt;break;default:ot=Math.abs(o.WindCnt);break}if(h&&p)at!==0&&at!==1||ot!==0&&ot!==1||s.PolyTyp!==o.PolyTyp&&this.m_ClipType!==n.ClipType.ctXor?this.AddLocalMaxPoly(s,o,l):(this.AddOutPt(s,l),this.AddOutPt(o,l),n.Clipper.SwapSides(s,o),n.Clipper.SwapPolyIndexes(s,o));else if(h)(ot===0||ot===1)&&(this.AddOutPt(s,l),n.Clipper.SwapSides(s,o),n.Clipper.SwapPolyIndexes(s,o));else if(p)(at===0||at===1)&&(this.AddOutPt(o,l),n.Clipper.SwapSides(s,o),n.Clipper.SwapPolyIndexes(s,o));else if((at===0||at===1)&&(ot===0||ot===1)){var gt,Vt;switch(O){case n.PolyFillType.pftPositive:gt=s.WindCnt2;break;case n.PolyFillType.pftNegative:gt=-s.WindCnt2;break;default:gt=Math.abs(s.WindCnt2);break}switch(H){case n.PolyFillType.pftPositive:Vt=o.WindCnt2;break;case n.PolyFillType.pftNegative:Vt=-o.WindCnt2;break;default:Vt=Math.abs(o.WindCnt2);break}if(s.PolyTyp!==o.PolyTyp)this.AddLocalMinPoly(s,o,l);else if(at===1&&ot===1)switch(this.m_ClipType){case n.ClipType.ctIntersection:gt>0&&Vt>0&&this.AddLocalMinPoly(s,o,l);break;case n.ClipType.ctUnion:gt<=0&&Vt<=0&&this.AddLocalMinPoly(s,o,l);break;case n.ClipType.ctDifference:(s.PolyTyp===n.PolyType.ptClip&&gt>0&&Vt>0||s.PolyTyp===n.PolyType.ptSubject&&gt<=0&&Vt<=0)&&this.AddLocalMinPoly(s,o,l);break;case n.ClipType.ctXor:this.AddLocalMinPoly(s,o,l);break}else n.Clipper.SwapSides(s,o)}},n.Clipper.prototype.DeleteFromSEL=function(s){var o=s.PrevInSEL,l=s.NextInSEL;o===null&&l===null&&s!==this.m_SortedEdges||(o!==null?o.NextInSEL=l:this.m_SortedEdges=l,l!==null&&(l.PrevInSEL=o),s.NextInSEL=null,s.PrevInSEL=null)},n.Clipper.prototype.ProcessHorizontals=function(){for(var s={};this.PopEdgeFromSEL(s);)this.ProcessHorizontal(s.v)},n.Clipper.prototype.GetHorzDirection=function(s,o){s.Bot.X<s.Top.X?(o.Left=s.Bot.X,o.Right=s.Top.X,o.Dir=n.Direction.dLeftToRight):(o.Left=s.Top.X,o.Right=s.Bot.X,o.Dir=n.Direction.dRightToLeft)},n.Clipper.prototype.ProcessHorizontal=function(s){var o={Dir:null,Left:null,Right:null};this.GetHorzDirection(s,o);for(var l=o.Dir,h=o.Left,p=o.Right,y=s.WindDelta===0,w=s,D=null;w.NextInLML!==null&&n.ClipperBase.IsHorizontal(w.NextInLML);)w=w.NextInLML;w.NextInLML===null&&(D=this.GetMaximaPair(w));var O=this.m_Maxima;if(O!==null)if(l===n.Direction.dLeftToRight){for(;O!==null&&O.X<=s.Bot.X;)O=O.Next;O!==null&&O.X>=w.Top.X&&(O=null)}else{for(;O.Next!==null&&O.Next.X<s.Bot.X;)O=O.Next;O.X<=w.Top.X&&(O=null)}for(var H=null;;){for(var at=s===w,ot=this.GetNextInAEL(s,l);ot!==null;){if(O!==null)if(l===n.Direction.dLeftToRight)for(;O!==null&&O.X<ot.Curr.X;)s.OutIdx>=0&&!y&&this.AddOutPt(s,new n.IntPoint2(O.X,s.Bot.Y)),O=O.Next;else for(;O!==null&&O.X>ot.Curr.X;)s.OutIdx>=0&&!y&&this.AddOutPt(s,new n.IntPoint2(O.X,s.Bot.Y)),O=O.Prev;if(l===n.Direction.dLeftToRight&&ot.Curr.X>p||l===n.Direction.dRightToLeft&&ot.Curr.X<h||ot.Curr.X===s.Top.X&&s.NextInLML!==null&&ot.Dx<s.NextInLML.Dx)break;if(s.OutIdx>=0&&!y){n.use_xyz&&(l===n.Direction.dLeftToRight?this.SetZ(ot.Curr,s,ot):this.SetZ(ot.Curr,ot,s)),H=this.AddOutPt(s,ot.Curr);for(var gt=this.m_SortedEdges;gt!==null;){if(gt.OutIdx>=0&&this.HorzSegmentsOverlap(s.Bot.X,s.Top.X,gt.Bot.X,gt.Top.X)){var Vt=this.GetLastOutPt(gt);this.AddJoin(Vt,H,gt.Top)}gt=gt.NextInSEL}this.AddGhostJoin(H,s.Bot)}if(ot===D&&at){s.OutIdx>=0&&this.AddLocalMaxPoly(s,D,s.Top),this.DeleteFromAEL(s),this.DeleteFromAEL(D);return}if(l===n.Direction.dLeftToRight){var $t=new n.IntPoint2(ot.Curr.X,s.Curr.Y);this.IntersectEdges(s,ot,$t)}else{var $t=new n.IntPoint2(ot.Curr.X,s.Curr.Y);this.IntersectEdges(ot,s,$t)}var ie=this.GetNextInAEL(ot,l);this.SwapPositionsInAEL(s,ot),ot=ie}if(s.NextInLML===null||!n.ClipperBase.IsHorizontal(s.NextInLML))break;s=this.UpdateEdgeIntoAEL(s),s.OutIdx>=0&&this.AddOutPt(s,s.Bot),o={Dir:l,Left:h,Right:p},this.GetHorzDirection(s,o),l=o.Dir,h=o.Left,p=o.Right}if(s.OutIdx>=0&&H===null){H=this.GetLastOutPt(s);for(var gt=this.m_SortedEdges;gt!==null;){if(gt.OutIdx>=0&&this.HorzSegmentsOverlap(s.Bot.X,s.Top.X,gt.Bot.X,gt.Top.X)){var Vt=this.GetLastOutPt(gt);this.AddJoin(Vt,H,gt.Top)}gt=gt.NextInSEL}this.AddGhostJoin(H,s.Top)}if(s.NextInLML!==null)if(s.OutIdx>=0){if(H=this.AddOutPt(s,s.Top),s=this.UpdateEdgeIntoAEL(s),s.WindDelta===0)return;var ve=s.PrevInAEL,ie=s.NextInAEL;if(ve!==null&&ve.Curr.X===s.Bot.X&&ve.Curr.Y===s.Bot.Y&&ve.WindDelta===0&&ve.OutIdx>=0&&ve.Curr.Y>ve.Top.Y&&n.ClipperBase.SlopesEqual3(s,ve,this.m_UseFullRange)){var Vt=this.AddOutPt(ve,s.Bot);this.AddJoin(H,Vt,s.Top)}else if(ie!==null&&ie.Curr.X===s.Bot.X&&ie.Curr.Y===s.Bot.Y&&ie.WindDelta!==0&&ie.OutIdx>=0&&ie.Curr.Y>ie.Top.Y&&n.ClipperBase.SlopesEqual3(s,ie,this.m_UseFullRange)){var Vt=this.AddOutPt(ie,s.Bot);this.AddJoin(H,Vt,s.Top)}}else s=this.UpdateEdgeIntoAEL(s);else s.OutIdx>=0&&this.AddOutPt(s,s.Top),this.DeleteFromAEL(s)},n.Clipper.prototype.GetNextInAEL=function(s,o){return o===n.Direction.dLeftToRight?s.NextInAEL:s.PrevInAEL},n.Clipper.prototype.IsMinima=function(s){return s!==null&&s.Prev.NextInLML!==s&&s.Next.NextInLML!==s},n.Clipper.prototype.IsMaxima=function(s,o){return s!==null&&s.Top.Y===o&&s.NextInLML===null},n.Clipper.prototype.IsIntermediate=function(s,o){return s.Top.Y===o&&s.NextInLML!==null},n.Clipper.prototype.GetMaximaPair=function(s){return n.IntPoint.op_Equality(s.Next.Top,s.Top)&&s.Next.NextInLML===null?s.Next:n.IntPoint.op_Equality(s.Prev.Top,s.Top)&&s.Prev.NextInLML===null?s.Prev:null},n.Clipper.prototype.GetMaximaPairEx=function(s){var o=this.GetMaximaPair(s);return o===null||o.OutIdx===n.ClipperBase.Skip||o.NextInAEL===o.PrevInAEL&&!n.ClipperBase.IsHorizontal(o)?null:o},n.Clipper.prototype.ProcessIntersections=function(s){if(this.m_ActiveEdges===null)return!0;try{if(this.BuildIntersectList(s),this.m_IntersectList.length===0)return!0;if(this.m_IntersectList.length===1||this.FixupIntersectionOrder())this.ProcessIntersectList();else return!1}catch{this.m_SortedEdges=null,this.m_IntersectList.length=0,n.Error("ProcessIntersections error")}return this.m_SortedEdges=null,!0},n.Clipper.prototype.BuildIntersectList=function(s){if(this.m_ActiveEdges!==null){var o=this.m_ActiveEdges;for(this.m_SortedEdges=o;o!==null;)o.PrevInSEL=o.PrevInAEL,o.NextInSEL=o.NextInAEL,o.Curr.X=n.Clipper.TopX(o,s),o=o.NextInAEL;for(var l=!0;l&&this.m_SortedEdges!==null;){for(l=!1,o=this.m_SortedEdges;o.NextInSEL!==null;){var h=o.NextInSEL,p=new n.IntPoint0;if(o.Curr.X>h.Curr.X){this.IntersectPoint(o,h,p),p.Y<s&&(p=new n.IntPoint2(n.Clipper.TopX(o,s),s));var y=new n.IntersectNode;y.Edge1=o,y.Edge2=h,y.Pt.X=p.X,y.Pt.Y=p.Y,n.use_xyz&&(y.Pt.Z=p.Z),this.m_IntersectList.push(y),this.SwapPositionsInSEL(o,h),l=!0}else o=h}if(o.PrevInSEL!==null)o.PrevInSEL.NextInSEL=null;else break}this.m_SortedEdges=null}},n.Clipper.prototype.EdgesAdjacent=function(s){return s.Edge1.NextInSEL===s.Edge2||s.Edge1.PrevInSEL===s.Edge2},n.Clipper.IntersectNodeSort=function(s,o){return o.Pt.Y-s.Pt.Y},n.Clipper.prototype.FixupIntersectionOrder=function(){this.m_IntersectList.sort(this.m_IntersectNodeComparer),this.CopyAELToSEL();for(var s=this.m_IntersectList.length,o=0;o<s;o++){if(!this.EdgesAdjacent(this.m_IntersectList[o])){for(var l=o+1;l<s&&!this.EdgesAdjacent(this.m_IntersectList[l]);)l++;if(l===s)return!1;var h=this.m_IntersectList[o];this.m_IntersectList[o]=this.m_IntersectList[l],this.m_IntersectList[l]=h}this.SwapPositionsInSEL(this.m_IntersectList[o].Edge1,this.m_IntersectList[o].Edge2)}return!0},n.Clipper.prototype.ProcessIntersectList=function(){for(var s=0,o=this.m_IntersectList.length;s<o;s++){var l=this.m_IntersectList[s];this.IntersectEdges(l.Edge1,l.Edge2,l.Pt),this.SwapPositionsInAEL(l.Edge1,l.Edge2)}this.m_IntersectList.length=0};var Dt=function(s){return s<0?Math.ceil(s-.5):Math.round(s)},ue=function(s){return s<0?Math.ceil(s-.5):Math.floor(s+.5)},Pe=function(s){return s<0?-Math.round(Math.abs(s)):Math.round(s)},xe=function(s){return s<0?(s-=.5,s<-2147483648?Math.ceil(s):s|0):(s+=.5,s>2147483647?Math.floor(s):s|0)};r.msie?n.Clipper.Round=Dt:r.chromium?n.Clipper.Round=Pe:r.safari?n.Clipper.Round=xe:n.Clipper.Round=ue,n.Clipper.TopX=function(s,o){return o===s.Top.Y?s.Top.X:s.Bot.X+n.Clipper.Round(s.Dx*(o-s.Bot.Y))},n.Clipper.prototype.IntersectPoint=function(s,o,l){l.X=0,l.Y=0;var h,p;if(s.Dx===o.Dx){l.Y=s.Curr.Y,l.X=n.Clipper.TopX(s,l.Y);return}if(s.Delta.X===0)l.X=s.Bot.X,n.ClipperBase.IsHorizontal(o)?l.Y=o.Bot.Y:(p=o.Bot.Y-o.Bot.X/o.Dx,l.Y=n.Clipper.Round(l.X/o.Dx+p));else if(o.Delta.X===0)l.X=o.Bot.X,n.ClipperBase.IsHorizontal(s)?l.Y=s.Bot.Y:(h=s.Bot.Y-s.Bot.X/s.Dx,l.Y=n.Clipper.Round(l.X/s.Dx+h));else{h=s.Bot.X-s.Bot.Y*s.Dx,p=o.Bot.X-o.Bot.Y*o.Dx;var y=(p-h)/(s.Dx-o.Dx);l.Y=n.Clipper.Round(y),Math.abs(s.Dx)<Math.abs(o.Dx)?l.X=n.Clipper.Round(s.Dx*y+h):l.X=n.Clipper.Round(o.Dx*y+p)}if(l.Y<s.Top.Y||l.Y<o.Top.Y){if(s.Top.Y>o.Top.Y)return l.Y=s.Top.Y,l.X=n.Clipper.TopX(o,s.Top.Y),l.X<s.Top.X;l.Y=o.Top.Y,Math.abs(s.Dx)<Math.abs(o.Dx)?l.X=n.Clipper.TopX(s,l.Y):l.X=n.Clipper.TopX(o,l.Y)}l.Y>s.Curr.Y&&(l.Y=s.Curr.Y,Math.abs(s.Dx)>Math.abs(o.Dx)?l.X=n.Clipper.TopX(o,l.Y):l.X=n.Clipper.TopX(s,l.Y))},n.Clipper.prototype.ProcessEdgesAtTopOfScanbeam=function(s){for(var o=this.m_ActiveEdges;o!==null;){var l=this.IsMaxima(o,s);if(l){var h=this.GetMaximaPairEx(o);l=h===null||!n.ClipperBase.IsHorizontal(h)}if(l){this.StrictlySimple&&this.InsertMaxima(o.Top.X);var p=o.PrevInAEL;this.DoMaxima(o),p===null?o=this.m_ActiveEdges:o=p.NextInAEL}else{if(this.IsIntermediate(o,s)&&n.ClipperBase.IsHorizontal(o.NextInLML)?(o=this.UpdateEdgeIntoAEL(o),o.OutIdx>=0&&this.AddOutPt(o,o.Bot),this.AddEdgeToSEL(o)):(o.Curr.X=n.Clipper.TopX(o,s),o.Curr.Y=s),n.use_xyz&&(o.Top.Y===s?o.Curr.Z=o.Top.Z:o.Bot.Y===s?o.Curr.Z=o.Bot.Z:o.Curr.Z=0),this.StrictlySimple){var p=o.PrevInAEL;if(o.OutIdx>=0&&o.WindDelta!==0&&p!==null&&p.OutIdx>=0&&p.Curr.X===o.Curr.X&&p.WindDelta!==0){var y=new n.IntPoint1(o.Curr);n.use_xyz&&this.SetZ(y,p,o);var w=this.AddOutPt(p,y),D=this.AddOutPt(o,y);this.AddJoin(w,D,y)}}o=o.NextInAEL}}for(this.ProcessHorizontals(),this.m_Maxima=null,o=this.m_ActiveEdges;o!==null;){if(this.IsIntermediate(o,s)){var w=null;o.OutIdx>=0&&(w=this.AddOutPt(o,o.Top)),o=this.UpdateEdgeIntoAEL(o);var p=o.PrevInAEL,O=o.NextInAEL;if(p!==null&&p.Curr.X===o.Bot.X&&p.Curr.Y===o.Bot.Y&&w!==null&&p.OutIdx>=0&&p.Curr.Y===p.Top.Y&&n.ClipperBase.SlopesEqual5(o.Curr,o.Top,p.Curr,p.Top,this.m_UseFullRange)&&o.WindDelta!==0&&p.WindDelta!==0){var D=this.AddOutPt(ePrev2,o.Bot);this.AddJoin(w,D,o.Top)}else if(O!==null&&O.Curr.X===o.Bot.X&&O.Curr.Y===o.Bot.Y&&w!==null&&O.OutIdx>=0&&O.Curr.Y===O.Top.Y&&n.ClipperBase.SlopesEqual5(o.Curr,o.Top,O.Curr,O.Top,this.m_UseFullRange)&&o.WindDelta!==0&&O.WindDelta!==0){var D=this.AddOutPt(O,o.Bot);this.AddJoin(w,D,o.Top)}}o=o.NextInAEL}},n.Clipper.prototype.DoMaxima=function(s){var o=this.GetMaximaPairEx(s);if(o===null){s.OutIdx>=0&&this.AddOutPt(s,s.Top),this.DeleteFromAEL(s);return}for(var l=s.NextInAEL;l!==null&&l!==o;)this.IntersectEdges(s,l,s.Top),this.SwapPositionsInAEL(s,l),l=s.NextInAEL;s.OutIdx===-1&&o.OutIdx===-1?(this.DeleteFromAEL(s),this.DeleteFromAEL(o)):s.OutIdx>=0&&o.OutIdx>=0?(s.OutIdx>=0&&this.AddLocalMaxPoly(s,o,s.Top),this.DeleteFromAEL(s),this.DeleteFromAEL(o)):n.use_lines&&s.WindDelta===0?(s.OutIdx>=0&&(this.AddOutPt(s,s.Top),s.OutIdx=n.ClipperBase.Unassigned),this.DeleteFromAEL(s),o.OutIdx>=0&&(this.AddOutPt(o,s.Top),o.OutIdx=n.ClipperBase.Unassigned),this.DeleteFromAEL(o)):n.Error("DoMaxima error")},n.Clipper.ReversePaths=function(s){for(var o=0,l=s.length;o<l;o++)s[o].reverse()},n.Clipper.Orientation=function(s){return n.Clipper.Area(s)>=0},n.Clipper.prototype.PointCount=function(s){if(s===null)return 0;var o=0,l=s;do o++,l=l.Next;while(l!==s);return o},n.Clipper.prototype.BuildResult=function(s){n.Clear(s);for(var o=0,l=this.m_PolyOuts.length;o<l;o++){var h=this.m_PolyOuts[o];if(h.Pts!==null){var p=h.Pts.Prev,y=this.PointCount(p);if(!(y<2)){for(var w=new Array(y),D=0;D<y;D++)w[D]=p.Pt,p=p.Prev;s.push(w)}}}},n.Clipper.prototype.BuildResult2=function(s){s.Clear();for(var o=0,l=this.m_PolyOuts.length;o<l;o++){var h=this.m_PolyOuts[o],p=this.PointCount(h.Pts);if(!(h.IsOpen&&p<2||!h.IsOpen&&p<3)){this.FixHoleLinkage(h);var y=new n.PolyNode;s.m_AllPolys.push(y),h.PolyNode=y,y.m_polygon.length=p;for(var w=h.Pts.Prev,D=0;D<p;D++)y.m_polygon[D]=w.Pt,w=w.Prev}}for(var o=0,l=this.m_PolyOuts.length;o<l;o++){var h=this.m_PolyOuts[o];h.PolyNode!==null&&(h.IsOpen?(h.PolyNode.IsOpen=!0,s.AddChild(h.PolyNode)):h.FirstLeft!==null&&h.FirstLeft.PolyNode!==null?h.FirstLeft.PolyNode.AddChild(h.PolyNode):s.AddChild(h.PolyNode))}},n.Clipper.prototype.FixupOutPolyline=function(s){for(var o=s.Pts,l=o.Prev;o!==l;)if(o=o.Next,n.IntPoint.op_Equality(o.Pt,o.Prev.Pt)){o===l&&(l=o.Prev);var h=o.Prev;h.Next=o.Next,o.Next.Prev=h,o=h}o===o.Prev&&(s.Pts=null)},n.Clipper.prototype.FixupOutPolygon=function(s){var o=null;s.BottomPt=null;for(var l=s.Pts,h=this.PreserveCollinear||this.StrictlySimple;;){if(l.Prev===l||l.Prev===l.Next){s.Pts=null;return}if(n.IntPoint.op_Equality(l.Pt,l.Next.Pt)||n.IntPoint.op_Equality(l.Pt,l.Prev.Pt)||n.ClipperBase.SlopesEqual4(l.Prev.Pt,l.Pt,l.Next.Pt,this.m_UseFullRange)&&(!h||!this.Pt2IsBetweenPt1AndPt3(l.Prev.Pt,l.Pt,l.Next.Pt)))o=null,l.Prev.Next=l.Next,l.Next.Prev=l.Prev,l=l.Prev;else{if(l===o)break;o===null&&(o=l),l=l.Next}}s.Pts=l},n.Clipper.prototype.DupOutPt=function(s,o){var l=new n.OutPt;return l.Pt.X=s.Pt.X,l.Pt.Y=s.Pt.Y,n.use_xyz&&(l.Pt.Z=s.Pt.Z),l.Idx=s.Idx,o?(l.Next=s.Next,l.Prev=s,s.Next.Prev=l,s.Next=l):(l.Prev=s.Prev,l.Next=s,s.Prev.Next=l,s.Prev=l),l},n.Clipper.prototype.GetOverlap=function(s,o,l,h,p){return s<o?l<h?(p.Left=Math.max(s,l),p.Right=Math.min(o,h)):(p.Left=Math.max(s,h),p.Right=Math.min(o,l)):l<h?(p.Left=Math.max(o,l),p.Right=Math.min(s,h)):(p.Left=Math.max(o,h),p.Right=Math.min(s,l)),p.Left<p.Right},n.Clipper.prototype.JoinHorz=function(s,o,l,h,p,y){var w=s.Pt.X>o.Pt.X?n.Direction.dRightToLeft:n.Direction.dLeftToRight,D=l.Pt.X>h.Pt.X?n.Direction.dRightToLeft:n.Direction.dLeftToRight;if(w===D)return!1;if(w===n.Direction.dLeftToRight){for(;s.Next.Pt.X<=p.X&&s.Next.Pt.X>=s.Pt.X&&s.Next.Pt.Y===p.Y;)s=s.Next;y&&s.Pt.X!==p.X&&(s=s.Next),o=this.DupOutPt(s,!y),n.IntPoint.op_Inequality(o.Pt,p)&&(s=o,s.Pt.X=p.X,s.Pt.Y=p.Y,n.use_xyz&&(s.Pt.Z=p.Z),o=this.DupOutPt(s,!y))}else{for(;s.Next.Pt.X>=p.X&&s.Next.Pt.X<=s.Pt.X&&s.Next.Pt.Y===p.Y;)s=s.Next;!y&&s.Pt.X!==p.X&&(s=s.Next),o=this.DupOutPt(s,y),n.IntPoint.op_Inequality(o.Pt,p)&&(s=o,s.Pt.X=p.X,s.Pt.Y=p.Y,n.use_xyz&&(s.Pt.Z=p.Z),o=this.DupOutPt(s,y))}if(D===n.Direction.dLeftToRight){for(;l.Next.Pt.X<=p.X&&l.Next.Pt.X>=l.Pt.X&&l.Next.Pt.Y===p.Y;)l=l.Next;y&&l.Pt.X!==p.X&&(l=l.Next),h=this.DupOutPt(l,!y),n.IntPoint.op_Inequality(h.Pt,p)&&(l=h,l.Pt.X=p.X,l.Pt.Y=p.Y,n.use_xyz&&(l.Pt.Z=p.Z),h=this.DupOutPt(l,!y))}else{for(;l.Next.Pt.X>=p.X&&l.Next.Pt.X<=l.Pt.X&&l.Next.Pt.Y===p.Y;)l=l.Next;!y&&l.Pt.X!==p.X&&(l=l.Next),h=this.DupOutPt(l,y),n.IntPoint.op_Inequality(h.Pt,p)&&(l=h,l.Pt.X=p.X,l.Pt.Y=p.Y,n.use_xyz&&(l.Pt.Z=p.Z),h=this.DupOutPt(l,y))}return w===n.Direction.dLeftToRight===y?(s.Prev=l,l.Next=s,o.Next=h,h.Prev=o):(s.Next=l,l.Prev=s,o.Prev=h,h.Next=o),!0},n.Clipper.prototype.JoinPoints=function(s,o,l){var h=s.OutPt1,p=new n.OutPt,y=s.OutPt2,w=new n.OutPt,D=s.OutPt1.Pt.Y===s.OffPt.Y;if(D&&n.IntPoint.op_Equality(s.OffPt,s.OutPt1.Pt)&&n.IntPoint.op_Equality(s.OffPt,s.OutPt2.Pt)){if(o!==l)return!1;for(p=s.OutPt1.Next;p!==h&&n.IntPoint.op_Equality(p.Pt,s.OffPt);)p=p.Next;var O=p.Pt.Y>s.OffPt.Y;for(w=s.OutPt2.Next;w!==y&&n.IntPoint.op_Equality(w.Pt,s.OffPt);)w=w.Next;var H=w.Pt.Y>s.OffPt.Y;return O===H?!1:O?(p=this.DupOutPt(h,!1),w=this.DupOutPt(y,!0),h.Prev=y,y.Next=h,p.Next=w,w.Prev=p,s.OutPt1=h,s.OutPt2=p,!0):(p=this.DupOutPt(h,!0),w=this.DupOutPt(y,!1),h.Next=y,y.Prev=h,p.Prev=w,w.Next=p,s.OutPt1=h,s.OutPt2=p,!0)}else if(D){for(p=h;h.Prev.Pt.Y===h.Pt.Y&&h.Prev!==p&&h.Prev!==y;)h=h.Prev;for(;p.Next.Pt.Y===p.Pt.Y&&p.Next!==h&&p.Next!==y;)p=p.Next;if(p.Next===h||p.Next===y)return!1;for(w=y;y.Prev.Pt.Y===y.Pt.Y&&y.Prev!==w&&y.Prev!==p;)y=y.Prev;for(;w.Next.Pt.Y===w.Pt.Y&&w.Next!==y&&w.Next!==h;)w=w.Next;if(w.Next===y||w.Next===h)return!1;var at={Left:null,Right:null};if(!this.GetOverlap(h.Pt.X,p.Pt.X,y.Pt.X,w.Pt.X,at))return!1;var ot=at.Left,gt=at.Right,Vt=new n.IntPoint0,$t;return h.Pt.X>=ot&&h.Pt.X<=gt?(Vt.X=h.Pt.X,Vt.Y=h.Pt.Y,n.use_xyz&&(Vt.Z=h.Pt.Z),$t=h.Pt.X>p.Pt.X):y.Pt.X>=ot&&y.Pt.X<=gt?(Vt.X=y.Pt.X,Vt.Y=y.Pt.Y,n.use_xyz&&(Vt.Z=y.Pt.Z),$t=y.Pt.X>w.Pt.X):p.Pt.X>=ot&&p.Pt.X<=gt?(Vt.X=p.Pt.X,Vt.Y=p.Pt.Y,n.use_xyz&&(Vt.Z=p.Pt.Z),$t=p.Pt.X>h.Pt.X):(Vt.X=w.Pt.X,Vt.Y=w.Pt.Y,n.use_xyz&&(Vt.Z=w.Pt.Z),$t=w.Pt.X>y.Pt.X),s.OutPt1=h,s.OutPt2=y,this.JoinHorz(h,p,y,w,Vt,$t)}else{for(p=h.Next;n.IntPoint.op_Equality(p.Pt,h.Pt)&&p!==h;)p=p.Next;var ie=p.Pt.Y>h.Pt.Y||!n.ClipperBase.SlopesEqual4(h.Pt,p.Pt,s.OffPt,this.m_UseFullRange);if(ie){for(p=h.Prev;n.IntPoint.op_Equality(p.Pt,h.Pt)&&p!==h;)p=p.Prev;if(p.Pt.Y>h.Pt.Y||!n.ClipperBase.SlopesEqual4(h.Pt,p.Pt,s.OffPt,this.m_UseFullRange))return!1}for(w=y.Next;n.IntPoint.op_Equality(w.Pt,y.Pt)&&w!==y;)w=w.Next;var ve=w.Pt.Y>y.Pt.Y||!n.ClipperBase.SlopesEqual4(y.Pt,w.Pt,s.OffPt,this.m_UseFullRange);if(ve){for(w=y.Prev;n.IntPoint.op_Equality(w.Pt,y.Pt)&&w!==y;)w=w.Prev;if(w.Pt.Y>y.Pt.Y||!n.ClipperBase.SlopesEqual4(y.Pt,w.Pt,s.OffPt,this.m_UseFullRange))return!1}return p===h||w===y||p===w||o===l&&ie===ve?!1:ie?(p=this.DupOutPt(h,!1),w=this.DupOutPt(y,!0),h.Prev=y,y.Next=h,p.Next=w,w.Prev=p,s.OutPt1=h,s.OutPt2=p,!0):(p=this.DupOutPt(h,!0),w=this.DupOutPt(y,!1),h.Next=y,y.Prev=h,p.Prev=w,w.Next=p,s.OutPt1=h,s.OutPt2=p,!0)}},n.Clipper.GetBounds=function(s){for(var o=0,l=s.length;o<l&&s[o].length===0;)o++;if(o===l)return new n.IntRect(0,0,0,0);var h=new n.IntRect;for(h.left=s[o][0].X,h.right=h.left,h.top=s[o][0].Y,h.bottom=h.top;o<l;o++)for(var p=0,y=s[o].length;p<y;p++)s[o][p].X<h.left?h.left=s[o][p].X:s[o][p].X>h.right&&(h.right=s[o][p].X),s[o][p].Y<h.top?h.top=s[o][p].Y:s[o][p].Y>h.bottom&&(h.bottom=s[o][p].Y);return h},n.Clipper.prototype.GetBounds2=function(s){var o=s,l=new n.IntRect;for(l.left=s.Pt.X,l.right=s.Pt.X,l.top=s.Pt.Y,l.bottom=s.Pt.Y,s=s.Next;s!==o;)s.Pt.X<l.left&&(l.left=s.Pt.X),s.Pt.X>l.right&&(l.right=s.Pt.X),s.Pt.Y<l.top&&(l.top=s.Pt.Y),s.Pt.Y>l.bottom&&(l.bottom=s.Pt.Y),s=s.Next;return l},n.Clipper.PointInPolygon=function(s,o){var l=0,h=o.length;if(h<3)return 0;for(var p=o[0],y=1;y<=h;++y){var w=y===h?o[0]:o[y];if(w.Y===s.Y&&(w.X===s.X||p.Y===s.Y&&w.X>s.X==p.X<s.X))return-1;if(p.Y<s.Y!=w.Y<s.Y){if(p.X>=s.X)if(w.X>s.X)l=1-l;else{var D=(p.X-s.X)*(w.Y-s.Y)-(w.X-s.X)*(p.Y-s.Y);if(D===0)return-1;D>0==w.Y>p.Y&&(l=1-l)}else if(w.X>s.X){var D=(p.X-s.X)*(w.Y-s.Y)-(w.X-s.X)*(p.Y-s.Y);if(D===0)return-1;D>0==w.Y>p.Y&&(l=1-l)}}p=w}return l},n.Clipper.prototype.PointInPolygon=function(s,o){var l=0,h=o,p=s.X,y=s.Y,w=o.Pt.X,D=o.Pt.Y;do{o=o.Next;var O=o.Pt.X,H=o.Pt.Y;if(H===y&&(O===p||D===y&&O>p==w<p))return-1;if(D<y!=H<y){if(w>=p)if(O>p)l=1-l;else{var at=(w-p)*(H-y)-(O-p)*(D-y);if(at===0)return-1;at>0==H>D&&(l=1-l)}else if(O>p){var at=(w-p)*(H-y)-(O-p)*(D-y);if(at===0)return-1;at>0==H>D&&(l=1-l)}}w=O,D=H}while(h!==o);return l},n.Clipper.prototype.Poly2ContainsPoly1=function(s,o){var l=s;do{var h=this.PointInPolygon(l.Pt,o);if(h>=0)return h>0;l=l.Next}while(l!==s);return!0},n.Clipper.prototype.FixupFirstLefts1=function(s,o){for(var l,h,p=0,y=this.m_PolyOuts.length;p<y;p++)l=this.m_PolyOuts[p],h=n.Clipper.ParseFirstLeft(l.FirstLeft),l.Pts!==null&&h===s&&this.Poly2ContainsPoly1(l.Pts,o.Pts)&&(l.FirstLeft=o)},n.Clipper.prototype.FixupFirstLefts2=function(s,o){for(var l=o.FirstLeft,h,p,y=0,w=this.m_PolyOuts.length;y<w;y++)h=this.m_PolyOuts[y],!(h.Pts===null||h===o||h===s)&&(p=n.Clipper.ParseFirstLeft(h.FirstLeft),!(p!==l&&p!==s&&p!==o)&&(this.Poly2ContainsPoly1(h.Pts,s.Pts)?h.FirstLeft=s:this.Poly2ContainsPoly1(h.Pts,o.Pts)?h.FirstLeft=o:(h.FirstLeft===s||h.FirstLeft===o)&&(h.FirstLeft=l)))},n.Clipper.prototype.FixupFirstLefts3=function(s,o){for(var l,h,p=0,y=this.m_PolyOuts.length;p<y;p++)l=this.m_PolyOuts[p],h=n.Clipper.ParseFirstLeft(l.FirstLeft),l.Pts!==null&&h===s&&(l.FirstLeft=o)},n.Clipper.ParseFirstLeft=function(s){for(;s!==null&&s.Pts===null;)s=s.FirstLeft;return s},n.Clipper.prototype.JoinCommonEdges=function(){for(var s=0,o=this.m_Joins.length;s<o;s++){var l=this.m_Joins[s],h=this.GetOutRec(l.OutPt1.Idx),p=this.GetOutRec(l.OutPt2.Idx);if(!(h.Pts===null||p.Pts===null)&&!(h.IsOpen||p.IsOpen)){var y;h===p?y=h:this.OutRec1RightOfOutRec2(h,p)?y=p:this.OutRec1RightOfOutRec2(p,h)?y=h:y=this.GetLowermostRec(h,p),this.JoinPoints(l,h,p)&&(h===p?(h.Pts=l.OutPt1,h.BottomPt=null,p=this.CreateOutRec(),p.Pts=l.OutPt2,this.UpdateOutPtIdxs(p),this.Poly2ContainsPoly1(p.Pts,h.Pts)?(p.IsHole=!h.IsHole,p.FirstLeft=h,this.m_UsingPolyTree&&this.FixupFirstLefts2(p,h),(p.IsHole^this.ReverseSolution)==this.Area$1(p)>0&&this.ReversePolyPtLinks(p.Pts)):this.Poly2ContainsPoly1(h.Pts,p.Pts)?(p.IsHole=h.IsHole,h.IsHole=!p.IsHole,p.FirstLeft=h.FirstLeft,h.FirstLeft=p,this.m_UsingPolyTree&&this.FixupFirstLefts2(h,p),(h.IsHole^this.ReverseSolution)==this.Area$1(h)>0&&this.ReversePolyPtLinks(h.Pts)):(p.IsHole=h.IsHole,p.FirstLeft=h.FirstLeft,this.m_UsingPolyTree&&this.FixupFirstLefts1(h,p))):(p.Pts=null,p.BottomPt=null,p.Idx=h.Idx,h.IsHole=y.IsHole,y===p&&(h.FirstLeft=p.FirstLeft),p.FirstLeft=h,this.m_UsingPolyTree&&this.FixupFirstLefts3(p,h)))}}},n.Clipper.prototype.UpdateOutPtIdxs=function(s){var o=s.Pts;do o.Idx=s.Idx,o=o.Prev;while(o!==s.Pts)},n.Clipper.prototype.DoSimplePolygons=function(){for(var s=0;s<this.m_PolyOuts.length;){var o=this.m_PolyOuts[s++],l=o.Pts;if(!(l===null||o.IsOpen))do{for(var h=l.Next;h!==o.Pts;){if(n.IntPoint.op_Equality(l.Pt,h.Pt)&&h.Next!==l&&h.Prev!==l){var p=l.Prev,y=h.Prev;l.Prev=y,y.Next=l,h.Prev=p,p.Next=h,o.Pts=l;var w=this.CreateOutRec();w.Pts=h,this.UpdateOutPtIdxs(w),this.Poly2ContainsPoly1(w.Pts,o.Pts)?(w.IsHole=!o.IsHole,w.FirstLeft=o,this.m_UsingPolyTree&&this.FixupFirstLefts2(w,o)):this.Poly2ContainsPoly1(o.Pts,w.Pts)?(w.IsHole=o.IsHole,o.IsHole=!w.IsHole,w.FirstLeft=o.FirstLeft,o.FirstLeft=w,this.m_UsingPolyTree&&this.FixupFirstLefts2(o,w)):(w.IsHole=o.IsHole,w.FirstLeft=o.FirstLeft,this.m_UsingPolyTree&&this.FixupFirstLefts1(o,w)),h=l}h=h.Next}l=l.Next}while(l!==o.Pts)}},n.Clipper.Area=function(s){if(!Array.isArray(s))return 0;var o=s.length;if(o<3)return 0;for(var l=0,h=0,p=o-1;h<o;++h)l+=(s[p].X+s[h].X)*(s[p].Y-s[h].Y),p=h;return-l*.5},n.Clipper.prototype.Area=function(s){var o=s;if(s===null)return 0;var l=0;do l=l+(s.Prev.Pt.X+s.Pt.X)*(s.Prev.Pt.Y-s.Pt.Y),s=s.Next;while(s!==o);return l*.5},n.Clipper.prototype.Area$1=function(s){return this.Area(s.Pts)},n.Clipper.SimplifyPolygon=function(s,o){var l=new Array,h=new n.Clipper(0);return h.StrictlySimple=!0,h.AddPath(s,n.PolyType.ptSubject,!0),h.Execute(n.ClipType.ctUnion,l,o,o),l},n.Clipper.SimplifyPolygons=function(s,o){typeof o>"u"&&(o=n.PolyFillType.pftEvenOdd);var l=new Array,h=new n.Clipper(0);return h.StrictlySimple=!0,h.AddPaths(s,n.PolyType.ptSubject,!0),h.Execute(n.ClipType.ctUnion,l,o,o),l},n.Clipper.DistanceSqrd=function(s,o){var l=s.X-o.X,h=s.Y-o.Y;return l*l+h*h},n.Clipper.DistanceFromLineSqrd=function(s,o,l){var h=o.Y-l.Y,p=l.X-o.X,y=h*o.X+p*o.Y;return y=h*s.X+p*s.Y-y,y*y/(h*h+p*p)},n.Clipper.SlopesNearCollinear=function(s,o,l,h){return Math.abs(s.X-o.X)>Math.abs(s.Y-o.Y)?s.X>o.X==s.X<l.X?n.Clipper.DistanceFromLineSqrd(s,o,l)<h:o.X>s.X==o.X<l.X?n.Clipper.DistanceFromLineSqrd(o,s,l)<h:n.Clipper.DistanceFromLineSqrd(l,s,o)<h:s.Y>o.Y==s.Y<l.Y?n.Clipper.DistanceFromLineSqrd(s,o,l)<h:o.Y>s.Y==o.Y<l.Y?n.Clipper.DistanceFromLineSqrd(o,s,l)<h:n.Clipper.DistanceFromLineSqrd(l,s,o)<h},n.Clipper.PointsAreClose=function(s,o,l){var h=s.X-o.X,p=s.Y-o.Y;return h*h+p*p<=l},n.Clipper.ExcludeOp=function(s){var o=s.Prev;return o.Next=s.Next,s.Next.Prev=o,o.Idx=0,o},n.Clipper.CleanPolygon=function(s,o){typeof o>"u"&&(o=1.415);var l=s.length;if(l===0)return new Array;for(var h=new Array(l),p=0;p<l;++p)h[p]=new n.OutPt;for(var p=0;p<l;++p)h[p].Pt=s[p],h[p].Next=h[(p+1)%l],h[p].Next.Prev=h[p],h[p].Idx=0;for(var y=o*o,w=h[0];w.Idx===0&&w.Next!==w.Prev;)n.Clipper.PointsAreClose(w.Pt,w.Prev.Pt,y)?(w=n.Clipper.ExcludeOp(w),l--):n.Clipper.PointsAreClose(w.Prev.Pt,w.Next.Pt,y)?(n.Clipper.ExcludeOp(w.Next),w=n.Clipper.ExcludeOp(w),l-=2):n.Clipper.SlopesNearCollinear(w.Prev.Pt,w.Pt,w.Next.Pt,y)?(w=n.Clipper.ExcludeOp(w),l--):(w.Idx=1,w=w.Next);l<3&&(l=0);for(var D=new Array(l),p=0;p<l;++p)D[p]=new n.IntPoint1(w.Pt),w=w.Next;return h=null,D},n.Clipper.CleanPolygons=function(s,o){for(var l=new Array(s.length),h=0,p=s.length;h<p;h++)l[h]=n.Clipper.CleanPolygon(s[h],o);return l},n.Clipper.Minkowski=function(s,o,l,h){var p=h?1:0,y=s.length,w=o.length,D=new Array;if(l)for(var O=0;O<w;O++){for(var H=new Array(y),at=0,ot=s.length,gt=s[at];at<ot;at++,gt=s[at])H[at]=new n.IntPoint2(o[O].X+gt.X,o[O].Y+gt.Y);D.push(H)}else for(var O=0;O<w;O++){for(var H=new Array(y),at=0,ot=s.length,gt=s[at];at<ot;at++,gt=s[at])H[at]=new n.IntPoint2(o[O].X-gt.X,o[O].Y-gt.Y);D.push(H)}for(var Vt=new Array,O=0;O<w-1+p;O++)for(var at=0;at<y;at++){var $t=new Array;$t.push(D[O%w][at%y]),$t.push(D[(O+1)%w][at%y]),$t.push(D[(O+1)%w][(at+1)%y]),$t.push(D[O%w][(at+1)%y]),n.Clipper.Orientation($t)||$t.reverse(),Vt.push($t)}return Vt},n.Clipper.MinkowskiSum=function(s,o,l){if(o[0]instanceof Array){for(var p=o,w=new n.Paths,y=new n.Clipper,D=0;D<p.length;++D){var O=n.Clipper.Minkowski(s,p[D],!0,l);if(y.AddPaths(O,n.PolyType.ptSubject,!0),l){var h=n.Clipper.TranslatePath(p[D],s[0]);y.AddPath(h,n.PolyType.ptClip,!0)}}return y.Execute(n.ClipType.ctUnion,w,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),w}else{var h=o,p=n.Clipper.Minkowski(s,h,!0,l),y=new n.Clipper;return y.AddPaths(p,n.PolyType.ptSubject,!0),y.Execute(n.ClipType.ctUnion,p,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),p}},n.Clipper.TranslatePath=function(s,o){for(var l=new n.Path,h=0;h<s.length;h++)l.push(new n.IntPoint2(s[h].X+o.X,s[h].Y+o.Y));return l},n.Clipper.MinkowskiDiff=function(s,o){var l=n.Clipper.Minkowski(s,o,!1,!0),h=new n.Clipper;return h.AddPaths(l,n.PolyType.ptSubject,!0),h.Execute(n.ClipType.ctUnion,l,n.PolyFillType.pftNonZero,n.PolyFillType.pftNonZero),l},n.Clipper.PolyTreeToPaths=function(s){var o=new Array;return n.Clipper.AddPolyNodeToPaths(s,n.Clipper.NodeType.ntAny,o),o},n.Clipper.AddPolyNodeToPaths=function(s,o,l){var h=!0;switch(o){case n.Clipper.NodeType.ntOpen:return;case n.Clipper.NodeType.ntClosed:h=!s.IsOpen;break;default:break}s.m_polygon.length>0&&h&&l.push(s.m_polygon);for(var p=0,y=s.Childs(),w=y.length,D=y[p];p<w;p++,D=y[p])n.Clipper.AddPolyNodeToPaths(D,o,l)},n.Clipper.OpenPathsFromPolyTree=function(s){for(var o=new n.Paths,l=0,h=s.ChildCount();l<h;l++)s.Childs()[l].IsOpen&&o.push(s.Childs()[l].m_polygon);return o},n.Clipper.ClosedPathsFromPolyTree=function(s){var o=new n.Paths;return n.Clipper.AddPolyNodeToPaths(s,n.Clipper.NodeType.ntClosed,o),o},ne(n.Clipper,n.ClipperBase),n.Clipper.NodeType={ntAny:0,ntOpen:1,ntClosed:2},n.ClipperOffset=function(s,o){typeof s>"u"&&(s=2),typeof o>"u"&&(o=n.ClipperOffset.def_arc_tolerance),this.m_destPolys=new n.Paths,this.m_srcPoly=new n.Path,this.m_destPoly=new n.Path,this.m_normals=new Array,this.m_delta=0,this.m_sinA=0,this.m_sin=0,this.m_cos=0,this.m_miterLim=0,this.m_StepsPerRad=0,this.m_lowest=new n.IntPoint0,this.m_polyNodes=new n.PolyNode,this.MiterLimit=s,this.ArcTolerance=o,this.m_lowest.X=-1},n.ClipperOffset.two_pi=6.28318530717959,n.ClipperOffset.def_arc_tolerance=.25,n.ClipperOffset.prototype.Clear=function(){n.Clear(this.m_polyNodes.Childs()),this.m_lowest.X=-1},n.ClipperOffset.Round=n.Clipper.Round,n.ClipperOffset.prototype.AddPath=function(s,o,l){var h=s.length-1;if(!(h<0)){var p=new n.PolyNode;if(p.m_jointype=o,p.m_endtype=l,l===n.EndType.etClosedLine||l===n.EndType.etClosedPolygon)for(;h>0&&n.IntPoint.op_Equality(s[0],s[h]);)h--;p.m_polygon.push(s[0]);for(var y=0,w=0,D=1;D<=h;D++)n.IntPoint.op_Inequality(p.m_polygon[y],s[D])&&(y++,p.m_polygon.push(s[D]),(s[D].Y>p.m_polygon[w].Y||s[D].Y===p.m_polygon[w].Y&&s[D].X<p.m_polygon[w].X)&&(w=y));if(!(l===n.EndType.etClosedPolygon&&y<2)&&(this.m_polyNodes.AddChild(p),l===n.EndType.etClosedPolygon))if(this.m_lowest.X<0)this.m_lowest=new n.IntPoint2(this.m_polyNodes.ChildCount()-1,w);else{var O=this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon[this.m_lowest.Y];(p.m_polygon[w].Y>O.Y||p.m_polygon[w].Y===O.Y&&p.m_polygon[w].X<O.X)&&(this.m_lowest=new n.IntPoint2(this.m_polyNodes.ChildCount()-1,w))}}},n.ClipperOffset.prototype.AddPaths=function(s,o,l){for(var h=0,p=s.length;h<p;h++)this.AddPath(s[h],o,l)},n.ClipperOffset.prototype.FixOrientations=function(){if(this.m_lowest.X>=0&&!n.Clipper.Orientation(this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon))for(var s=0;s<this.m_polyNodes.ChildCount();s++){var o=this.m_polyNodes.Childs()[s];(o.m_endtype===n.EndType.etClosedPolygon||o.m_endtype===n.EndType.etClosedLine&&n.Clipper.Orientation(o.m_polygon))&&o.m_polygon.reverse()}else for(var s=0;s<this.m_polyNodes.ChildCount();s++){var o=this.m_polyNodes.Childs()[s];o.m_endtype===n.EndType.etClosedLine&&!n.Clipper.Orientation(o.m_polygon)&&o.m_polygon.reverse()}},n.ClipperOffset.GetUnitNormal=function(s,o){var l=o.X-s.X,h=o.Y-s.Y;if(l===0&&h===0)return new n.DoublePoint2(0,0);var p=1/Math.sqrt(l*l+h*h);return l*=p,h*=p,new n.DoublePoint2(h,-l)},n.ClipperOffset.prototype.DoOffset=function(s){if(this.m_destPolys=new Array,this.m_delta=s,n.ClipperBase.near_zero(s)){for(var o=0;o<this.m_polyNodes.ChildCount();o++){var l=this.m_polyNodes.Childs()[o];l.m_endtype===n.EndType.etClosedPolygon&&this.m_destPolys.push(l.m_polygon)}return}this.MiterLimit>2?this.m_miterLim=2/(this.MiterLimit*this.MiterLimit):this.m_miterLim=.5;var h;this.ArcTolerance<=0?h=n.ClipperOffset.def_arc_tolerance:this.ArcTolerance>Math.abs(s)*n.ClipperOffset.def_arc_tolerance?h=Math.abs(s)*n.ClipperOffset.def_arc_tolerance:h=this.ArcTolerance;var p=3.14159265358979/Math.acos(1-h/Math.abs(s));this.m_sin=Math.sin(n.ClipperOffset.two_pi/p),this.m_cos=Math.cos(n.ClipperOffset.two_pi/p),this.m_StepsPerRad=p/n.ClipperOffset.two_pi,s<0&&(this.m_sin=-this.m_sin);for(var o=0;o<this.m_polyNodes.ChildCount();o++){var l=this.m_polyNodes.Childs()[o];this.m_srcPoly=l.m_polygon;var y=this.m_srcPoly.length;if(!(y===0||s<=0&&(y<3||l.m_endtype!==n.EndType.etClosedPolygon))){if(this.m_destPoly=new Array,y===1){if(l.m_jointype===n.JoinType.jtRound)for(var w=1,D=0,O=1;O<=p;O++){this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+w*s),n.ClipperOffset.Round(this.m_srcPoly[0].Y+D*s)));var H=w;w=w*this.m_cos-this.m_sin*D,D=H*this.m_sin+D*this.m_cos}else for(var w=-1,D=-1,O=0;O<4;++O)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+w*s),n.ClipperOffset.Round(this.m_srcPoly[0].Y+D*s))),w<0?w=1:D<0?D=1:w=-1;this.m_destPolys.push(this.m_destPoly);continue}this.m_normals.length=0;for(var O=0;O<y-1;O++)this.m_normals.push(n.ClipperOffset.GetUnitNormal(this.m_srcPoly[O],this.m_srcPoly[O+1]));if(l.m_endtype===n.EndType.etClosedLine||l.m_endtype===n.EndType.etClosedPolygon?this.m_normals.push(n.ClipperOffset.GetUnitNormal(this.m_srcPoly[y-1],this.m_srcPoly[0])):this.m_normals.push(new n.DoublePoint1(this.m_normals[y-2])),l.m_endtype===n.EndType.etClosedPolygon){for(var at=y-1,O=0;O<y;O++)at=this.OffsetPoint(O,at,l.m_jointype);this.m_destPolys.push(this.m_destPoly)}else if(l.m_endtype===n.EndType.etClosedLine){for(var at=y-1,O=0;O<y;O++)at=this.OffsetPoint(O,at,l.m_jointype);this.m_destPolys.push(this.m_destPoly),this.m_destPoly=new Array;for(var ot=this.m_normals[y-1],O=y-1;O>0;O--)this.m_normals[O]=new n.DoublePoint2(-this.m_normals[O-1].X,-this.m_normals[O-1].Y);this.m_normals[0]=new n.DoublePoint2(-ot.X,-ot.Y),at=0;for(var O=y-1;O>=0;O--)at=this.OffsetPoint(O,at,l.m_jointype);this.m_destPolys.push(this.m_destPoly)}else{for(var at=0,O=1;O<y-1;++O)at=this.OffsetPoint(O,at,l.m_jointype);var gt;if(l.m_endtype===n.EndType.etOpenButt){var O=y-1;gt=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[O].X+this.m_normals[O].X*s),n.ClipperOffset.Round(this.m_srcPoly[O].Y+this.m_normals[O].Y*s)),this.m_destPoly.push(gt),gt=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[O].X-this.m_normals[O].X*s),n.ClipperOffset.Round(this.m_srcPoly[O].Y-this.m_normals[O].Y*s)),this.m_destPoly.push(gt)}else{var O=y-1;at=y-2,this.m_sinA=0,this.m_normals[O]=new n.DoublePoint2(-this.m_normals[O].X,-this.m_normals[O].Y),l.m_endtype===n.EndType.etOpenSquare?this.DoSquare(O,at):this.DoRound(O,at)}for(var O=y-1;O>0;O--)this.m_normals[O]=new n.DoublePoint2(-this.m_normals[O-1].X,-this.m_normals[O-1].Y);this.m_normals[0]=new n.DoublePoint2(-this.m_normals[1].X,-this.m_normals[1].Y),at=y-1;for(var O=at-1;O>0;--O)at=this.OffsetPoint(O,at,l.m_jointype);l.m_endtype===n.EndType.etOpenButt?(gt=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X-this.m_normals[0].X*s),n.ClipperOffset.Round(this.m_srcPoly[0].Y-this.m_normals[0].Y*s)),this.m_destPoly.push(gt),gt=new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[0].X+this.m_normals[0].X*s),n.ClipperOffset.Round(this.m_srcPoly[0].Y+this.m_normals[0].Y*s)),this.m_destPoly.push(gt)):(at=1,this.m_sinA=0,l.m_endtype===n.EndType.etOpenSquare?this.DoSquare(0,1):this.DoRound(0,1)),this.m_destPolys.push(this.m_destPoly)}}}},n.ClipperOffset.prototype.Execute=function(){var s=arguments,o=s[0]instanceof n.PolyTree;if(o){var l=s[0],h=s[1];l.Clear(),this.FixOrientations(),this.DoOffset(h);var p=new n.Clipper(0);if(p.AddPaths(this.m_destPolys,n.PolyType.ptSubject,!0),h>0)p.Execute(n.ClipType.ctUnion,l,n.PolyFillType.pftPositive,n.PolyFillType.pftPositive);else{var y=n.Clipper.GetBounds(this.m_destPolys),w=new n.Path;if(w.push(new n.IntPoint2(y.left-10,y.bottom+10)),w.push(new n.IntPoint2(y.right+10,y.bottom+10)),w.push(new n.IntPoint2(y.right+10,y.top-10)),w.push(new n.IntPoint2(y.left-10,y.top-10)),p.AddPath(w,n.PolyType.ptSubject,!0),p.ReverseSolution=!0,p.Execute(n.ClipType.ctUnion,l,n.PolyFillType.pftNegative,n.PolyFillType.pftNegative),l.ChildCount()===1&&l.Childs()[0].ChildCount()>0){var D=l.Childs()[0];l.Childs()[0]=D.Childs()[0],l.Childs()[0].m_Parent=l;for(var O=1;O<D.ChildCount();O++)l.AddChild(D.Childs()[O])}else l.Clear()}}else{var l=s[0],h=s[1];n.Clear(l),this.FixOrientations(),this.DoOffset(h);var p=new n.Clipper(0);if(p.AddPaths(this.m_destPolys,n.PolyType.ptSubject,!0),h>0)p.Execute(n.ClipType.ctUnion,l,n.PolyFillType.pftPositive,n.PolyFillType.pftPositive);else{var y=n.Clipper.GetBounds(this.m_destPolys),w=new n.Path;w.push(new n.IntPoint2(y.left-10,y.bottom+10)),w.push(new n.IntPoint2(y.right+10,y.bottom+10)),w.push(new n.IntPoint2(y.right+10,y.top-10)),w.push(new n.IntPoint2(y.left-10,y.top-10)),p.AddPath(w,n.PolyType.ptSubject,!0),p.ReverseSolution=!0,p.Execute(n.ClipType.ctUnion,l,n.PolyFillType.pftNegative,n.PolyFillType.pftNegative),l.length>0&&l.splice(0,1)}}},n.ClipperOffset.prototype.OffsetPoint=function(s,o,l){if(this.m_sinA=this.m_normals[o].X*this.m_normals[s].Y-this.m_normals[s].X*this.m_normals[o].Y,Math.abs(this.m_sinA*this.m_delta)<1){var h=this.m_normals[o].X*this.m_normals[s].X+this.m_normals[s].Y*this.m_normals[o].Y;if(h>0)return this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+this.m_normals[o].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[s].Y+this.m_normals[o].Y*this.m_delta))),o}else this.m_sinA>1?this.m_sinA=1:this.m_sinA<-1&&(this.m_sinA=-1);if(this.m_sinA*this.m_delta<0)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+this.m_normals[o].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[s].Y+this.m_normals[o].Y*this.m_delta))),this.m_destPoly.push(new n.IntPoint1(this.m_srcPoly[s])),this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+this.m_normals[s].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[s].Y+this.m_normals[s].Y*this.m_delta)));else switch(l){case n.JoinType.jtMiter:{var p=1+(this.m_normals[s].X*this.m_normals[o].X+this.m_normals[s].Y*this.m_normals[o].Y);p>=this.m_miterLim?this.DoMiter(s,o,p):this.DoSquare(s,o);break}case n.JoinType.jtSquare:this.DoSquare(s,o);break;case n.JoinType.jtRound:this.DoRound(s,o);break}return o=s,o},n.ClipperOffset.prototype.DoSquare=function(s,o){var l=Math.tan(Math.atan2(this.m_sinA,this.m_normals[o].X*this.m_normals[s].X+this.m_normals[o].Y*this.m_normals[s].Y)/4);this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+this.m_delta*(this.m_normals[o].X-this.m_normals[o].Y*l)),n.ClipperOffset.Round(this.m_srcPoly[s].Y+this.m_delta*(this.m_normals[o].Y+this.m_normals[o].X*l)))),this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+this.m_delta*(this.m_normals[s].X+this.m_normals[s].Y*l)),n.ClipperOffset.Round(this.m_srcPoly[s].Y+this.m_delta*(this.m_normals[s].Y-this.m_normals[s].X*l))))},n.ClipperOffset.prototype.DoMiter=function(s,o,l){var h=this.m_delta/l;this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+(this.m_normals[o].X+this.m_normals[s].X)*h),n.ClipperOffset.Round(this.m_srcPoly[s].Y+(this.m_normals[o].Y+this.m_normals[s].Y)*h)))},n.ClipperOffset.prototype.DoRound=function(s,o){for(var l=Math.atan2(this.m_sinA,this.m_normals[o].X*this.m_normals[s].X+this.m_normals[o].Y*this.m_normals[s].Y),h=Math.max(n.Cast_Int32(n.ClipperOffset.Round(this.m_StepsPerRad*Math.abs(l))),1),p=this.m_normals[o].X,y=this.m_normals[o].Y,w,D=0;D<h;++D)this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+p*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[s].Y+y*this.m_delta))),w=p,p=p*this.m_cos-this.m_sin*y,y=w*this.m_sin+y*this.m_cos;this.m_destPoly.push(new n.IntPoint2(n.ClipperOffset.Round(this.m_srcPoly[s].X+this.m_normals[s].X*this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[s].Y+this.m_normals[s].Y*this.m_delta)))},n.Error=function(s){try{throw new Error(s)}catch(o){alert(o.message)}},n.JS={},n.JS.AreaOfPolygon=function(s,o){return o||(o=1),n.Clipper.Area(s)/(o*o)},n.JS.AreaOfPolygons=function(s,o){o||(o=1);for(var l=0,h=0;h<s.length;h++)l+=n.Clipper.Area(s[h]);return l/(o*o)},n.JS.BoundsOfPath=function(s,o){return n.JS.BoundsOfPaths([s],o)},n.JS.BoundsOfPaths=function(s,o){o||(o=1);var l=n.Clipper.GetBounds(s);return l.left/=o,l.bottom/=o,l.right/=o,l.top/=o,l},n.JS.Clean=function(h,o){if(!(h instanceof Array))return[];var l=h[0]instanceof Array,h=n.JS.Clone(h);if(typeof o!="number"||o===null)return n.Error("Delta is not a number in Clean()."),h;if(h.length===0||h.length===1&&h[0].length===0||o<0)return h;l||(h=[h]);for(var p=h.length,y,w,D,O,H,at,ot,gt=[],Vt=0;Vt<p;Vt++)if(w=h[Vt],y=w.length,y!==0){if(y<3){D=w,gt.push(D);continue}for(D=w,O=o*o,H=w[0],at=1,ot=1;ot<y;ot++)(w[ot].X-H.X)*(w[ot].X-H.X)+(w[ot].Y-H.Y)*(w[ot].Y-H.Y)<=O||(D[at]=w[ot],H=w[ot],at++);H=w[at-1],(w[0].X-H.X)*(w[0].X-H.X)+(w[0].Y-H.Y)*(w[0].Y-H.Y)<=O&&at--,at<y&&D.splice(at,y-at),D.length&&gt.push(D)}return!l&&gt.length?gt=gt[0]:!l&&gt.length===0?gt=[]:l&&gt.length===0&&(gt=[[]]),gt},n.JS.Clone=function(s){if(!(s instanceof Array))return[];if(s.length===0)return[];if(s.length===1&&s[0].length===0)return[[]];var o=s[0]instanceof Array;o||(s=[s]);var l=s.length,h,p,y,w,D=new Array(l);for(p=0;p<l;p++){for(h=s[p].length,w=new Array(h),y=0;y<h;y++)w[y]={X:s[p][y].X,Y:s[p][y].Y};D[p]=w}return o||(D=D[0]),D},n.JS.Lighten=function(s,o){if(!(s instanceof Array))return[];if(typeof o!="number"||o===null)return n.Error("Tolerance is not a number in Lighten()."),n.JS.Clone(s);if(s.length===0||s.length===1&&s[0].length===0||o<0)return n.JS.Clone(s);var l=s[0]instanceof Array;l||(s=[s]);var h,p,y,w,D,O,H,at,ot,gt,Vt,$t,ie,ve,$e,In,Gi,Vu=s.length,Gu=o*o,Hi=[];for(h=0;h<Vu;h++)if(y=s[h],O=y.length,O!==0){for(w=0;w<1e6;w++){for(D=[],O=y.length,y[O-1].X!==y[0].X||y[O-1].Y!==y[0].Y?($t=1,y.push({X:y[0].X,Y:y[0].Y}),O=y.length):$t=0,Vt=[],p=0;p<O-2;p++)H=y[p],ot=y[p+1],at=y[p+2],In=H.X,Gi=H.Y,ie=at.X-In,ve=at.Y-Gi,(ie!==0||ve!==0)&&($e=((ot.X-In)*ie+(ot.Y-Gi)*ve)/(ie*ie+ve*ve),$e>1?(In=at.X,Gi=at.Y):$e>0&&(In+=ie*$e,Gi+=ve*$e)),ie=ot.X-In,ve=ot.Y-Gi,gt=ie*ie+ve*ve,gt<=Gu&&(Vt[p+1]=1,p++);for(D.push({X:y[0].X,Y:y[0].Y}),p=1;p<O-1;p++)Vt[p]||D.push({X:y[p].X,Y:y[p].Y});if(D.push({X:y[O-1].X,Y:y[O-1].Y}),$t&&y.pop(),Vt.length)y=D;else break}O=D.length,D[O-1].X===D[0].X&&D[O-1].Y===D[0].Y&&D.pop(),D.length>2&&Hi.push(D)}return l||(Hi=Hi[0]),typeof Hi>"u"&&(Hi=[]),Hi},n.JS.PerimeterOfPath=function(s,o,l){if(typeof s>"u")return 0;var h=Math.sqrt,p=0,y,w,D=0,O=0,H=0,at=0,ot=s.length;if(ot<2)return 0;for(o&&(s[ot]=s[0],ot++);--ot;)y=s[ot],D=y.X,O=y.Y,w=s[ot-1],H=w.X,at=w.Y,p+=h((D-H)*(D-H)+(O-at)*(O-at));return o&&s.pop(),p/l},n.JS.PerimeterOfPaths=function(s,o,l){l||(l=1);for(var h=0,p=0;p<s.length;p++)h+=n.JS.PerimeterOfPath(s[p],o,l);return h},n.JS.ScaleDownPath=function(s,o){var l,h;for(o||(o=1),l=s.length;l--;)h=s[l],h.X=h.X/o,h.Y=h.Y/o},n.JS.ScaleDownPaths=function(s,o){var l,h,p;for(o||(o=1),l=s.length;l--;)for(h=s[l].length;h--;)p=s[l][h],p.X=p.X/o,p.Y=p.Y/o},n.JS.ScaleUpPath=function(s,o){var l,h,p=Math.round;for(o||(o=1),l=s.length;l--;)h=s[l],h.X=p(h.X*o),h.Y=p(h.Y*o)},n.JS.ScaleUpPaths=function(s,o){var l,h,p,y=Math.round;for(o||(o=1),l=s.length;l--;)for(h=s[l].length;h--;)p=s[l][h],p.X=y(p.X*o),p.Y=y(p.Y*o)},n.ExPolygons=function(){return[]},n.ExPolygon=function(){this.outer=null,this.holes=null},n.JS.AddOuterPolyNodeToExPolygons=function(s,o){var l=new n.ExPolygon;l.outer=s.Contour();var h=s.Childs(),p=h.length;l.holes=new Array(p);var y,w,D,O,H,at;for(D=0;D<p;D++)for(y=h[D],l.holes[D]=y.Contour(),O=0,H=y.Childs(),at=H.length;O<at;O++)w=H[O],n.JS.AddOuterPolyNodeToExPolygons(w,o);o.push(l)},n.JS.ExPolygonsToPaths=function(s){var o,l,h,p,y=new n.Paths;for(o=0,h=s.length;o<h;o++)for(y.push(s[o].outer),l=0,p=s[o].holes.length;l<p;l++)y.push(s[o].holes[l]);return y},n.JS.PolyTreeToExPolygons=function(s){var o=new n.ExPolygons,l,h,p,y;for(h=0,p=s.Childs(),y=p.length;h<y;h++)l=p[h],n.JS.AddOuterPolyNodeToExPolygons(l,o);return o}})()});var pi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},mi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},jc=0,ml=1,Qc=2;var er=1,th=2,_s=3,gi=0,Ze=1,Dn=2,On=0,xs=1,gl=2,_l=3,xl=4,eh=5;var Ri=100,nh=101,ih=102,sh=103,rh=104,oh=200,ah=201,lh=202,ch=203,vl=204,yl=205,hh=206,uh=207,fh=208,dh=209,ph=210,mh=211,gh=212,_h=213,xh=214,Jr=0,$r=1,Kr=2,rs=3,jr=4,Qr=5,to=6,eo=7,Sl=0,vh=1,yh=2,wn=0,Ml=1,bl=2,Tl=3,El=4,wl=5,Al=6,Pl=7;var Cl=300,_i=301,Li=302,Ao=303,Po=304,nr=306,no=1e3,Ln=1001,io=1002,Ue=1003,Sh=1004;var ir=1005;var Fe=1006,Co=1007;var xi=1008;var tn=1009,Il=1010,Rl=1011,vs=1012,Io=1013,An=1014,Pn=1015,Cn=1016,Ro=1017,Lo=1018,ys=1020,Ll=35902,Nl=35899,Dl=1021,Ol=1022,xn=1023,Nn=1026,vi=1027,Ul=1028,No=1029,yi=1030,Do=1031;var Oo=1033,sr=33776,rr=33777,or=33778,ar=33779,Uo=35840,Fo=35841,Bo=35842,zo=35843,ko=36196,Vo=37492,Go=37496,Ho=37488,Xo=37489,lr=37490,Wo=37491,Yo=37808,qo=37809,Zo=37810,Jo=37811,$o=37812,Ko=37813,jo=37814,Qo=37815,ta=37816,ea=37817,na=37818,ia=37819,sa=37820,ra=37821,oa=36492,aa=36494,la=36495,ca=36283,ha=36284,cr=36285,ua=36286;var Fs=2300,so=2301,qr=2302,al=2303,ll=2400,cl=2401,hl=2402;var Mh=3200;var fa=0,bh=1,$n="",on="srgb",Bs="srgb-linear",zs="linear",pe="srgb";var Zr=7680;var Th=519,Eh=512,wh=513,Ah=514,da=515,Ph=516,Ch=517,pa=518,Ih=519,Rh=35044;var Fl="300 es",bn=2e3,os=2001;function Ku(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ju(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ks(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Lh(){let n=ks("canvas");return n.style.display="block",n}var Pc={},as=null;function Bl(...n){let t="THREE."+n.shift();as?as("log",t,...n):console.log(t,...n)}function Nh(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Wt(...n){n=Nh(n);let t="THREE."+n.shift();if(as)as("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function qt(...n){n=Nh(n);let t="THREE."+n.shift();if(as)as("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Pi(...n){let t=n.join(" ");t in Pc||(Pc[t]=!0,Wt(...n))}function Dh(n,t,e){return new Promise(function(i,r){function a(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:i()}}setTimeout(a,e)})}var Oh={[Jr]:$r,[Kr]:to,[jr]:eo,[rs]:Qr,[$r]:Jr,[to]:Kr,[eo]:jr,[Qr]:rs},En=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let r=i[t];if(r!==void 0){let a=r.indexOf(e);a!==-1&&r.splice(a,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let r=i.slice(0);for(let a=0,c=r.length;a<c;a++)r[a].call(this,t);t.target=null}}},ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cc=1234567,Os=Math.PI/180,ls=180/Math.PI;function Ss(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]).toLowerCase()}function oe(n,t,e){return Math.max(t,Math.min(e,n))}function zl(n,t){return(n%t+t)%t}function Qu(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function tf(n,t,e){return n!==t?(e-n)/(t-n):0}function Us(n,t,e){return(1-e)*n+e*t}function ef(n,t,e,i){return Us(n,t,1-Math.exp(-e*i))}function nf(n,t=1){return t-Math.abs(zl(n,t*2)-t)}function sf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function rf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function of(n,t){return n+Math.floor(Math.random()*(t-n+1))}function af(n,t){return n+Math.random()*(t-n)}function lf(n){return n*(.5-Math.random())}function cf(n){n!==void 0&&(Cc=n);let t=Cc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function hf(n){return n*Os}function uf(n){return n*ls}function ff(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function df(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function pf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function mf(n,t,e,i,r){let a=Math.cos,c=Math.sin,u=a(e/2),f=c(e/2),d=a((t+i)/2),g=c((t+i)/2),x=a((t-i)/2),m=c((t-i)/2),v=a((i-t)/2),T=c((i-t)/2);switch(r){case"XYX":n.set(u*g,f*x,f*m,u*d);break;case"YZY":n.set(f*m,u*g,f*x,u*d);break;case"ZXZ":n.set(f*x,f*m,u*g,u*d);break;case"XZX":n.set(u*g,f*T,f*v,u*d);break;case"YXY":n.set(f*v,u*g,f*T,u*d);break;case"ZYZ":n.set(f*T,f*v,u*g,u*d);break;default:Wt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function is(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function qe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var kl={DEG2RAD:Os,RAD2DEG:ls,generateUUID:Ss,clamp:oe,euclideanModulo:zl,mapLinear:Qu,inverseLerp:tf,lerp:Us,damp:ef,pingpong:nf,smoothstep:sf,smootherstep:rf,randInt:of,randFloat:af,randFloatSpread:lf,seededRandom:cf,degToRad:hf,radToDeg:uf,isPowerOfTwo:ff,ceilPowerOfTwo:df,floorPowerOfTwo:pf,setQuaternionFromProperEuler:mf,normalize:qe,denormalize:is},Zt=class n{static{n.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),r=Math.sin(e),a=this.x-t.x,c=this.y-t.y;return this.x=a*i-c*r+t.x,this.y=a*r+c*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ln=class{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,a,c,u){let f=i[r+0],d=i[r+1],g=i[r+2],x=i[r+3],m=a[c+0],v=a[c+1],T=a[c+2],P=a[c+3];if(x!==P||f!==m||d!==v||g!==T){let S=f*m+d*v+g*T+x*P;S<0&&(m=-m,v=-v,T=-T,P=-P,S=-S);let _=1-u;if(S<.9995){let N=Math.acos(S),z=Math.sin(N);_=Math.sin(_*N)/z,u=Math.sin(u*N)/z,f=f*_+m*u,d=d*_+v*u,g=g*_+T*u,x=x*_+P*u}else{f=f*_+m*u,d=d*_+v*u,g=g*_+T*u,x=x*_+P*u;let N=1/Math.sqrt(f*f+d*d+g*g+x*x);f*=N,d*=N,g*=N,x*=N}}t[e]=f,t[e+1]=d,t[e+2]=g,t[e+3]=x}static multiplyQuaternionsFlat(t,e,i,r,a,c){let u=i[r],f=i[r+1],d=i[r+2],g=i[r+3],x=a[c],m=a[c+1],v=a[c+2],T=a[c+3];return t[e]=u*T+g*x+f*v-d*m,t[e+1]=f*T+g*m+d*x-u*v,t[e+2]=d*T+g*v+u*m-f*x,t[e+3]=g*T-u*x-f*m-d*v,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,r=t._y,a=t._z,c=t._order,u=Math.cos,f=Math.sin,d=u(i/2),g=u(r/2),x=u(a/2),m=f(i/2),v=f(r/2),T=f(a/2);switch(c){case"XYZ":this._x=m*g*x+d*v*T,this._y=d*v*x-m*g*T,this._z=d*g*T+m*v*x,this._w=d*g*x-m*v*T;break;case"YXZ":this._x=m*g*x+d*v*T,this._y=d*v*x-m*g*T,this._z=d*g*T-m*v*x,this._w=d*g*x+m*v*T;break;case"ZXY":this._x=m*g*x-d*v*T,this._y=d*v*x+m*g*T,this._z=d*g*T+m*v*x,this._w=d*g*x-m*v*T;break;case"ZYX":this._x=m*g*x-d*v*T,this._y=d*v*x+m*g*T,this._z=d*g*T-m*v*x,this._w=d*g*x+m*v*T;break;case"YZX":this._x=m*g*x+d*v*T,this._y=d*v*x+m*g*T,this._z=d*g*T-m*v*x,this._w=d*g*x-m*v*T;break;case"XZY":this._x=m*g*x-d*v*T,this._y=d*v*x-m*g*T,this._z=d*g*T+m*v*x,this._w=d*g*x+m*v*T;break;default:Wt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],r=e[4],a=e[8],c=e[1],u=e[5],f=e[9],d=e[2],g=e[6],x=e[10],m=i+u+x;if(m>0){let v=.5/Math.sqrt(m+1);this._w=.25/v,this._x=(g-f)*v,this._y=(a-d)*v,this._z=(c-r)*v}else if(i>u&&i>x){let v=2*Math.sqrt(1+i-u-x);this._w=(g-f)/v,this._x=.25*v,this._y=(r+c)/v,this._z=(a+d)/v}else if(u>x){let v=2*Math.sqrt(1+u-i-x);this._w=(a-d)/v,this._x=(r+c)/v,this._y=.25*v,this._z=(f+g)/v}else{let v=2*Math.sqrt(1+x-i-u);this._w=(c-r)/v,this._x=(a+d)/v,this._y=(f+g)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(oe(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,r=t._y,a=t._z,c=t._w,u=e._x,f=e._y,d=e._z,g=e._w;return this._x=i*g+c*u+r*d-a*f,this._y=r*g+c*f+a*u-i*d,this._z=a*g+c*d+i*f-r*u,this._w=c*g-i*u-r*f-a*d,this._onChangeCallback(),this}slerp(t,e){let i=t._x,r=t._y,a=t._z,c=t._w,u=this.dot(t);u<0&&(i=-i,r=-r,a=-a,c=-c,u=-u);let f=1-e;if(u<.9995){let d=Math.acos(u),g=Math.sin(d);f=Math.sin(f*d)/g,e=Math.sin(e*d)/g,this._x=this._x*f+i*e,this._y=this._y*f+r*e,this._z=this._z*f+a*e,this._w=this._w*f+c*e,this._onChangeCallback()}else this._x=this._x*f+i*e,this._y=this._y*f+r*e,this._z=this._z*f+a*e,this._w=this._w*f+c*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},J=class n{static{n.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ic.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ic.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,r=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*r,this.y=a[1]*e+a[4]*i+a[7]*r,this.z=a[2]*e+a[5]*i+a[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,a=t.elements,c=1/(a[3]*e+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*r+a[12])*c,this.y=(a[1]*e+a[5]*i+a[9]*r+a[13])*c,this.z=(a[2]*e+a[6]*i+a[10]*r+a[14])*c,this}applyQuaternion(t){let e=this.x,i=this.y,r=this.z,a=t.x,c=t.y,u=t.z,f=t.w,d=2*(c*r-u*i),g=2*(u*e-a*r),x=2*(a*i-c*e);return this.x=e+f*d+c*x-u*g,this.y=i+f*g+u*d-a*x,this.z=r+f*x+a*g-c*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,r=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r,this.y=a[1]*e+a[5]*i+a[9]*r,this.z=a[2]*e+a[6]*i+a[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,r=t.y,a=t.z,c=e.x,u=e.y,f=e.z;return this.x=r*f-a*u,this.y=a*c-i*f,this.z=i*u-r*c,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ka.copy(this).projectOnVector(t),this.sub(ka)}reflect(t){return this.sub(ka.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ka=new J,Ic=new ln,Kt=class n{static{n.prototype.isMatrix3=!0}constructor(t,e,i,r,a,c,u,f,d){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,a,c,u,f,d)}set(t,e,i,r,a,c,u,f,d){let g=this.elements;return g[0]=t,g[1]=r,g[2]=u,g[3]=e,g[4]=a,g[5]=f,g[6]=i,g[7]=c,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,a=this.elements,c=i[0],u=i[3],f=i[6],d=i[1],g=i[4],x=i[7],m=i[2],v=i[5],T=i[8],P=r[0],S=r[3],_=r[6],N=r[1],z=r[4],A=r[7],R=r[2],I=r[5],U=r[8];return a[0]=c*P+u*N+f*R,a[3]=c*S+u*z+f*I,a[6]=c*_+u*A+f*U,a[1]=d*P+g*N+x*R,a[4]=d*S+g*z+x*I,a[7]=d*_+g*A+x*U,a[2]=m*P+v*N+T*R,a[5]=m*S+v*z+T*I,a[8]=m*_+v*A+T*U,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],r=t[2],a=t[3],c=t[4],u=t[5],f=t[6],d=t[7],g=t[8];return e*c*g-e*u*d-i*a*g+i*u*f+r*a*d-r*c*f}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],a=t[3],c=t[4],u=t[5],f=t[6],d=t[7],g=t[8],x=g*c-u*d,m=u*f-g*a,v=d*a-c*f,T=e*x+i*m+r*v;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);let P=1/T;return t[0]=x*P,t[1]=(r*d-g*i)*P,t[2]=(u*i-r*c)*P,t[3]=m*P,t[4]=(g*e-r*f)*P,t[5]=(r*a-u*e)*P,t[6]=v*P,t[7]=(i*f-d*e)*P,t[8]=(c*e-i*a)*P,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,a,c,u){let f=Math.cos(a),d=Math.sin(a);return this.set(i*f,i*d,-i*(f*c+d*u)+c+t,-r*d,r*f,-r*(-d*c+f*u)+u+e,0,0,1),this}scale(t,e){return Pi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Va.makeScale(t,e)),this}rotate(t){return Pi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Va.makeRotation(-t)),this}translate(t,e){return Pi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Va.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Va=new Kt,Rc=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lc=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gf(){let n={enabled:!0,workingColorSpace:Bs,spaces:{},convert:function(r,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===pe&&(r.r=qn(r.r),r.g=qn(r.g),r.b=qn(r.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===pe&&(r.r=ss(r.r),r.g=ss(r.g),r.b=ss(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===$n?zs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,c){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return Pi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return Pi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,a)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Bs]:{primaries:t,whitePoint:i,transfer:zs,toXYZ:Rc,fromXYZ:Lc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:t,whitePoint:i,transfer:pe,toXYZ:Rc,fromXYZ:Lc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),n}var le=gf();function qn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ss(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Xi,ro=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Xi===void 0&&(Xi=ks("canvas")),Xi.width=t.width,Xi.height=t.height;let r=Xi.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=Xi}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ks("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let r=i.getImageData(0,0,t.width,t.height),a=r.data;for(let c=0;c<a.length;c++)a[c]=qn(a[c]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(qn(e[i]/255)*255):e[i]=qn(e[i]);return{data:e,width:t.width,height:t.height}}else return Wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},_f=0,cs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=Ss(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let c=0,u=r.length;c<u;c++)r[c].isDataTexture?a.push(Ga(r[c].image)):a.push(Ga(r[c]))}else a=Ga(r);i.url=a}return e||(t.images[this.uuid]=i),i}};function Ga(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ro.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Wt("Texture: Unable to serialize Texture."),{})}var xf=0,Ha=new J,je=class n extends En{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Ln,r=Ln,a=Fe,c=xi,u=xn,f=tn,d=n.DEFAULT_ANISOTROPY,g=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=Ss(),this.name="",this.source=new cs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=c,this.anisotropy=d,this.format=u,this.internalFormat=null,this.type=f,this.offset=new Zt(0,0),this.repeat=new Zt(1,1),this.center=new Zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ha).x}get height(){return this.source.getSize(Ha).y}get depth(){return this.source.getSize(Ha).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Wt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Wt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Cl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case no:t.x=t.x-Math.floor(t.x);break;case Ln:t.x=t.x<0?0:1;break;case io:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case no:t.y=t.y-Math.floor(t.y);break;case Ln:t.y=t.y<0?0:1;break;case io:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=Cl;je.DEFAULT_ANISOTROPY=1;var we=class n{static{n.prototype.isVector4=!0}constructor(t=0,e=0,i=0,r=1){this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,a=this.w,c=t.elements;return this.x=c[0]*e+c[4]*i+c[8]*r+c[12]*a,this.y=c[1]*e+c[5]*i+c[9]*r+c[13]*a,this.z=c[2]*e+c[6]*i+c[10]*r+c[14]*a,this.w=c[3]*e+c[7]*i+c[11]*r+c[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,a,f=t.elements,d=f[0],g=f[4],x=f[8],m=f[1],v=f[5],T=f[9],P=f[2],S=f[6],_=f[10];if(Math.abs(g-m)<.01&&Math.abs(x-P)<.01&&Math.abs(T-S)<.01){if(Math.abs(g+m)<.1&&Math.abs(x+P)<.1&&Math.abs(T+S)<.1&&Math.abs(d+v+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let z=(d+1)/2,A=(v+1)/2,R=(_+1)/2,I=(g+m)/4,U=(x+P)/4,b=(T+S)/4;return z>A&&z>R?z<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(z),r=I/i,a=U/i):A>R?A<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(A),i=I/r,a=b/r):R<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(R),i=U/a,r=b/a),this.set(i,r,a,e),this}let N=Math.sqrt((S-T)*(S-T)+(x-P)*(x-P)+(m-g)*(m-g));return Math.abs(N)<.001&&(N=1),this.x=(S-T)/N,this.y=(x-P)/N,this.z=(m-g)/N,this.w=Math.acos((d+v+_-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this.w=oe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this.w=oe(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},oo=class extends En{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:i.depth},a=new je(r),c=i.count;for(let u=0;u<c;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Fe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new cs(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qe=class extends oo{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Vs=class extends je{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ao=class extends je{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ee=class n{static{n.prototype.isMatrix4=!0}constructor(t,e,i,r,a,c,u,f,d,g,x,m,v,T,P,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,a,c,u,f,d,g,x,m,v,T,P,S)}set(t,e,i,r,a,c,u,f,d,g,x,m,v,T,P,S){let _=this.elements;return _[0]=t,_[4]=e,_[8]=i,_[12]=r,_[1]=a,_[5]=c,_[9]=u,_[13]=f,_[2]=d,_[6]=g,_[10]=x,_[14]=m,_[3]=v,_[7]=T,_[11]=P,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,r=1/Wi.setFromMatrixColumn(t,0).length(),a=1/Wi.setFromMatrixColumn(t,1).length(),c=1/Wi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*c,e[9]=i[9]*c,e[10]=i[10]*c,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,r=t.y,a=t.z,c=Math.cos(i),u=Math.sin(i),f=Math.cos(r),d=Math.sin(r),g=Math.cos(a),x=Math.sin(a);if(t.order==="XYZ"){let m=c*g,v=c*x,T=u*g,P=u*x;e[0]=f*g,e[4]=-f*x,e[8]=d,e[1]=v+T*d,e[5]=m-P*d,e[9]=-u*f,e[2]=P-m*d,e[6]=T+v*d,e[10]=c*f}else if(t.order==="YXZ"){let m=f*g,v=f*x,T=d*g,P=d*x;e[0]=m+P*u,e[4]=T*u-v,e[8]=c*d,e[1]=c*x,e[5]=c*g,e[9]=-u,e[2]=v*u-T,e[6]=P+m*u,e[10]=c*f}else if(t.order==="ZXY"){let m=f*g,v=f*x,T=d*g,P=d*x;e[0]=m-P*u,e[4]=-c*x,e[8]=T+v*u,e[1]=v+T*u,e[5]=c*g,e[9]=P-m*u,e[2]=-c*d,e[6]=u,e[10]=c*f}else if(t.order==="ZYX"){let m=c*g,v=c*x,T=u*g,P=u*x;e[0]=f*g,e[4]=T*d-v,e[8]=m*d+P,e[1]=f*x,e[5]=P*d+m,e[9]=v*d-T,e[2]=-d,e[6]=u*f,e[10]=c*f}else if(t.order==="YZX"){let m=c*f,v=c*d,T=u*f,P=u*d;e[0]=f*g,e[4]=P-m*x,e[8]=T*x+v,e[1]=x,e[5]=c*g,e[9]=-u*g,e[2]=-d*g,e[6]=v*x+T,e[10]=m-P*x}else if(t.order==="XZY"){let m=c*f,v=c*d,T=u*f,P=u*d;e[0]=f*g,e[4]=-x,e[8]=d*g,e[1]=m*x+P,e[5]=c*g,e[9]=v*x-T,e[2]=T*x-v,e[6]=u*g,e[10]=P*x+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vf,t,yf)}lookAt(t,e,i){let r=this.elements;return sn.subVectors(t,e),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),ni.crossVectors(i,sn),ni.lengthSq()===0&&(Math.abs(i.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),ni.crossVectors(i,sn)),ni.normalize(),Pr.crossVectors(sn,ni),r[0]=ni.x,r[4]=Pr.x,r[8]=sn.x,r[1]=ni.y,r[5]=Pr.y,r[9]=sn.y,r[2]=ni.z,r[6]=Pr.z,r[10]=sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,a=this.elements,c=i[0],u=i[4],f=i[8],d=i[12],g=i[1],x=i[5],m=i[9],v=i[13],T=i[2],P=i[6],S=i[10],_=i[14],N=i[3],z=i[7],A=i[11],R=i[15],I=r[0],U=r[4],b=r[8],C=r[12],B=r[1],X=r[5],Y=r[9],j=r[13],k=r[2],$=r[6],nt=r[10],tt=r[14],pt=r[3],et=r[7],ut=r[11],ft=r[15];return a[0]=c*I+u*B+f*k+d*pt,a[4]=c*U+u*X+f*$+d*et,a[8]=c*b+u*Y+f*nt+d*ut,a[12]=c*C+u*j+f*tt+d*ft,a[1]=g*I+x*B+m*k+v*pt,a[5]=g*U+x*X+m*$+v*et,a[9]=g*b+x*Y+m*nt+v*ut,a[13]=g*C+x*j+m*tt+v*ft,a[2]=T*I+P*B+S*k+_*pt,a[6]=T*U+P*X+S*$+_*et,a[10]=T*b+P*Y+S*nt+_*ut,a[14]=T*C+P*j+S*tt+_*ft,a[3]=N*I+z*B+A*k+R*pt,a[7]=N*U+z*X+A*$+R*et,a[11]=N*b+z*Y+A*nt+R*ut,a[15]=N*C+z*j+A*tt+R*ft,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],r=t[8],a=t[12],c=t[1],u=t[5],f=t[9],d=t[13],g=t[2],x=t[6],m=t[10],v=t[14],T=t[3],P=t[7],S=t[11],_=t[15],N=f*v-d*m,z=u*v-d*x,A=u*m-f*x,R=c*v-d*g,I=c*m-f*g,U=c*x-u*g;return e*(P*N-S*z+_*A)-i*(T*N-S*R+_*I)+r*(T*z-P*R+_*U)-a*(T*A-P*I+S*U)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],r=t[8],a=t[1],c=t[5],u=t[9],f=t[2],d=t[6],g=t[10];return e*(c*g-u*d)-i*(a*g-u*f)+r*(a*d-c*f)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],a=t[3],c=t[4],u=t[5],f=t[6],d=t[7],g=t[8],x=t[9],m=t[10],v=t[11],T=t[12],P=t[13],S=t[14],_=t[15],N=e*u-i*c,z=e*f-r*c,A=e*d-a*c,R=i*f-r*u,I=i*d-a*u,U=r*d-a*f,b=g*P-x*T,C=g*S-m*T,B=g*_-v*T,X=x*S-m*P,Y=x*_-v*P,j=m*_-v*S,k=N*j-z*Y+A*X+R*B-I*C+U*b;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let $=1/k;return t[0]=(u*j-f*Y+d*X)*$,t[1]=(r*Y-i*j-a*X)*$,t[2]=(P*U-S*I+_*R)*$,t[3]=(m*I-x*U-v*R)*$,t[4]=(f*B-c*j-d*C)*$,t[5]=(e*j-r*B+a*C)*$,t[6]=(S*A-T*U-_*z)*$,t[7]=(g*U-m*A+v*z)*$,t[8]=(c*Y-u*B+d*b)*$,t[9]=(i*B-e*Y-a*b)*$,t[10]=(T*I-P*A+_*N)*$,t[11]=(x*A-g*I-v*N)*$,t[12]=(u*C-c*X-f*b)*$,t[13]=(e*X-i*C+r*b)*$,t[14]=(P*z-T*R-S*N)*$,t[15]=(g*R-x*z+m*N)*$,this}scale(t){let e=this.elements,i=t.x,r=t.y,a=t.z;return e[0]*=i,e[4]*=r,e[8]*=a,e[1]*=i,e[5]*=r,e[9]*=a,e[2]*=i,e[6]*=r,e[10]*=a,e[3]*=i,e[7]*=r,e[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),r=Math.sin(e),a=1-i,c=t.x,u=t.y,f=t.z,d=a*c,g=a*u;return this.set(d*c+i,d*u-r*f,d*f+r*u,0,d*u+r*f,g*u+i,g*f-r*c,0,d*f-r*u,g*f+r*c,a*f*f+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,a,c){return this.set(1,i,a,0,t,1,c,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){let r=this.elements,a=e._x,c=e._y,u=e._z,f=e._w,d=a+a,g=c+c,x=u+u,m=a*d,v=a*g,T=a*x,P=c*g,S=c*x,_=u*x,N=f*d,z=f*g,A=f*x,R=i.x,I=i.y,U=i.z;return r[0]=(1-(P+_))*R,r[1]=(v+A)*R,r[2]=(T-z)*R,r[3]=0,r[4]=(v-A)*I,r[5]=(1-(m+_))*I,r[6]=(S+N)*I,r[7]=0,r[8]=(T+z)*U,r[9]=(S-N)*U,r[10]=(1-(m+P))*U,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){let r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];let a=this.determinantAffine();if(a===0)return i.set(1,1,1),e.identity(),this;let c=Wi.set(r[0],r[1],r[2]).length(),u=Wi.set(r[4],r[5],r[6]).length(),f=Wi.set(r[8],r[9],r[10]).length();a<0&&(c=-c),yn.copy(this);let d=1/c,g=1/u,x=1/f;return yn.elements[0]*=d,yn.elements[1]*=d,yn.elements[2]*=d,yn.elements[4]*=g,yn.elements[5]*=g,yn.elements[6]*=g,yn.elements[8]*=x,yn.elements[9]*=x,yn.elements[10]*=x,e.setFromRotationMatrix(yn),i.x=c,i.y=u,i.z=f,this}makePerspective(t,e,i,r,a,c,u=bn,f=!1){let d=this.elements,g=2*a/(e-t),x=2*a/(i-r),m=(e+t)/(e-t),v=(i+r)/(i-r),T,P;if(f)T=a/(c-a),P=c*a/(c-a);else if(u===bn)T=-(c+a)/(c-a),P=-2*c*a/(c-a);else if(u===os)T=-c/(c-a),P=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return d[0]=g,d[4]=0,d[8]=m,d[12]=0,d[1]=0,d[5]=x,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=T,d[14]=P,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,e,i,r,a,c,u=bn,f=!1){let d=this.elements,g=2/(e-t),x=2/(i-r),m=-(e+t)/(e-t),v=-(i+r)/(i-r),T,P;if(f)T=1/(c-a),P=c/(c-a);else if(u===bn)T=-2/(c-a),P=-(c+a)/(c-a);else if(u===os)T=-1/(c-a),P=-a/(c-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return d[0]=g,d[4]=0,d[8]=0,d[12]=m,d[1]=0,d[5]=x,d[9]=0,d[13]=v,d[2]=0,d[6]=0,d[10]=T,d[14]=P,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Wi=new J,yn=new Ee,vf=new J(0,0,0),yf=new J(1,1,1),ni=new J,Pr=new J,sn=new J,Nc=new Ee,Dc=new ln,Zn=class n{constructor(t=0,e=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let r=t.elements,a=r[0],c=r[4],u=r[8],f=r[1],d=r[5],g=r[9],x=r[2],m=r[6],v=r[10];switch(e){case"XYZ":this._y=Math.asin(oe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-g,v),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(m,d),this._z=0);break;case"YXZ":this._x=Math.asin(-oe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(u,v),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-x,a),this._z=0);break;case"ZXY":this._x=Math.asin(oe(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-x,v),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-oe(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(m,v),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(oe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-x,a)):(this._x=0,this._y=Math.atan2(u,v));break;case"XZY":this._z=Math.asin(-oe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(m,d),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-g,v),this._y=0);break;default:Wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Nc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Dc.setFromEuler(this),this.setFromQuaternion(Dc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Zn.DEFAULT_ORDER="XYZ";var hs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Sf=0,Oc=new J,Yi=new ln,Gn=new Ee,Cr=new J,Rs=new J,Mf=new J,bf=new ln,Uc=new J(1,0,0),Fc=new J(0,1,0),Bc=new J(0,0,1),zc={type:"added"},Tf={type:"removed"},qi={type:"childadded",child:null},Xa={type:"childremoved",child:null},He=class n extends En{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=Ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new J,e=new Zn,i=new ln,r=new J(1,1,1);function a(){i.setFromEuler(e,!1)}function c(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ee},normalMatrix:{value:new Kt}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.premultiply(Yi),this}rotateX(t){return this.rotateOnAxis(Uc,t)}rotateY(t){return this.rotateOnAxis(Fc,t)}rotateZ(t){return this.rotateOnAxis(Bc,t)}translateOnAxis(t,e){return Oc.copy(t).applyQuaternion(this.quaternion),this.position.add(Oc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Uc,t)}translateY(t){return this.translateOnAxis(Fc,t)}translateZ(t){return this.translateOnAxis(Bc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Cr.copy(t):Cr.set(t,e,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Rs,Cr,this.up):Gn.lookAt(Cr,Rs,this.up),this.quaternion.setFromRotationMatrix(Gn),r&&(Gn.extractRotation(r.matrixWorld),Yi.setFromRotationMatrix(Gn),this.quaternion.premultiply(Yi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zc),qi.child=t,this.dispatchEvent(qi),qi.child=null):qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Tf),Xa.child=t,this.dispatchEvent(Xa),Xa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zc),qi.child=t,this.dispatchEvent(qi),qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){let c=this.children[i].getObjectByProperty(t,e);if(c!==void 0)return c}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let r=this.children;for(let a=0,c=r.length;a<c;a++)r[a].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,t,Mf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,bf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,r=t.z,a=this.matrix.elements;a[12]+=e-a[0]*e-a[4]*i-a[8]*r,a[13]+=i-a[1]*e-a[5]*i-a[9]*r,a[14]+=r-a[2]*e-a[6]*i-a[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let a=this.children;for(let c=0,u=a.length;c<u;c++)a[c].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(u=>({...u})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(t)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(t.geometries,this.geometry);let u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){let f=u.shapes;if(Array.isArray(f))for(let d=0,g=f.length;d<g;d++){let x=f[d];a(t.shapes,x)}else a(t.shapes,f)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let u=[];for(let f=0,d=this.material.length;f<d;f++)u.push(a(t.materials,this.material[f]));r.material=u}else r.material=a(t.materials,this.material);if(this.children.length>0){r.children=[];for(let u=0;u<this.children.length;u++)r.children.push(this.children[u].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let u=0;u<this.animations.length;u++){let f=this.animations[u];r.animations.push(a(t.animations,f))}}if(e){let u=c(t.geometries),f=c(t.materials),d=c(t.textures),g=c(t.images),x=c(t.shapes),m=c(t.skeletons),v=c(t.animations),T=c(t.nodes);u.length>0&&(i.geometries=u),f.length>0&&(i.materials=f),d.length>0&&(i.textures=d),g.length>0&&(i.images=g),x.length>0&&(i.shapes=x),m.length>0&&(i.skeletons=m),v.length>0&&(i.animations=v),T.length>0&&(i.nodes=T)}return i.object=r,i;function c(u){let f=[];for(let d in u){let g=u[d];delete g.metadata,f.push(g)}return f}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let r=t.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};He.DEFAULT_UP=new J(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Tn=class extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ef={type:"move"},us=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,a=null,c=null,u=this._targetRay,f=this._grip,d=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(d&&t.hand){c=!0;for(let P of t.hand.values()){let S=e.getJointPose(P,i),_=this._getHandJoint(d,P);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}let g=d.joints["index-finger-tip"],x=d.joints["thumb-tip"],m=g.position.distanceTo(x.position),v=.02,T=.005;d.inputState.pinching&&m>v+T?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&m<=v-T&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else f!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:t,target:this})));u!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(Ef)))}return u!==null&&(u.visible=r!==null),f!==null&&(f.visible=a!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Tn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Uh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},Ir={h:0,s:0,l:0};function Wa(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var ae=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=on){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=le.workingColorSpace){return this.r=t,this.g=e,this.b=i,le.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=le.workingColorSpace){if(t=zl(t,1),e=oe(e,0,1),i=oe(i,0,1),e===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+e):i+e-i*e,c=2*i-a;this.r=Wa(c,a,t+1/3),this.g=Wa(c,a,t),this.b=Wa(c,a,t-1/3)}return le.colorSpaceToWorking(this,r),this}setStyle(t,e=on){function i(a){a!==void 0&&parseFloat(a)<1&&Wt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,c=r[1],u=r[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:Wt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=r[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(c===6)return this.setHex(parseInt(a,16),e);Wt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=on){let i=Uh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Wt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qn(t.r),this.g=qn(t.g),this.b=qn(t.b),this}copyLinearToSRGB(t){return this.r=ss(t.r),this.g=ss(t.g),this.b=ss(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=on){return le.workingToColorSpace(Ve.copy(this),t),Math.round(oe(Ve.r*255,0,255))*65536+Math.round(oe(Ve.g*255,0,255))*256+Math.round(oe(Ve.b*255,0,255))}getHexString(t=on){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace(Ve.copy(this),e);let i=Ve.r,r=Ve.g,a=Ve.b,c=Math.max(i,r,a),u=Math.min(i,r,a),f,d,g=(u+c)/2;if(u===c)f=0,d=0;else{let x=c-u;switch(d=g<=.5?x/(c+u):x/(2-c-u),c){case i:f=(r-a)/x+(r<a?6:0);break;case r:f=(a-i)/x+2;break;case a:f=(i-r)/x+4;break}f/=6}return t.h=f,t.s=d,t.l=g,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=on){le.workingToColorSpace(Ve.copy(this),t);let e=Ve.r,i=Ve.g,r=Ve.b;return t!==on?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(ii),this.setHSL(ii.h+t,ii.s+e,ii.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ii),t.getHSL(Ir);let i=Us(ii.h,Ir.h,e),r=Us(ii.s,Ir.s,e),a=Us(ii.l,Ir.l,e);return this.setHSL(i,r,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,r=this.b,a=t.elements;return this.r=a[0]*e+a[3]*i+a[6]*r,this.g=a[1]*e+a[4]*i+a[7]*r,this.b=a[2]*e+a[5]*i+a[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ve=new ae;ae.NAMES=Uh;var Gs=class extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Sn=new J,Hn=new J,Ya=new J,Xn=new J,Zi=new J,Ji=new J,kc=new J,qa=new J,Za=new J,Ja=new J,$a=new we,Ka=new we,ja=new we,ai=class n{constructor(t=new J,e=new J,i=new J){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),Sn.subVectors(t,e),r.cross(Sn);let a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(t,e,i,r,a){Sn.subVectors(r,e),Hn.subVectors(i,e),Ya.subVectors(t,e);let c=Sn.dot(Sn),u=Sn.dot(Hn),f=Sn.dot(Ya),d=Hn.dot(Hn),g=Hn.dot(Ya),x=c*d-u*u;if(x===0)return a.set(0,0,0),null;let m=1/x,v=(d*f-u*g)*m,T=(c*g-u*f)*m;return a.set(1-v-T,T,v)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(t,e,i,r,a,c,u,f){return this.getBarycoord(t,e,i,r,Xn)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,Xn.x),f.addScaledVector(c,Xn.y),f.addScaledVector(u,Xn.z),f)}static getInterpolatedAttribute(t,e,i,r,a,c){return $a.setScalar(0),Ka.setScalar(0),ja.setScalar(0),$a.fromBufferAttribute(t,e),Ka.fromBufferAttribute(t,i),ja.fromBufferAttribute(t,r),c.setScalar(0),c.addScaledVector($a,a.x),c.addScaledVector(Ka,a.y),c.addScaledVector(ja,a.z),c}static isFrontFacing(t,e,i,r){return Sn.subVectors(i,e),Hn.subVectors(t,e),Sn.cross(Hn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Sn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),Sn.cross(Hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,a){return n.getInterpolation(t,this.a,this.b,this.c,e,i,r,a)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,r=this.b,a=this.c,c,u;Zi.subVectors(r,i),Ji.subVectors(a,i),qa.subVectors(t,i);let f=Zi.dot(qa),d=Ji.dot(qa);if(f<=0&&d<=0)return e.copy(i);Za.subVectors(t,r);let g=Zi.dot(Za),x=Ji.dot(Za);if(g>=0&&x<=g)return e.copy(r);let m=f*x-g*d;if(m<=0&&f>=0&&g<=0)return c=f/(f-g),e.copy(i).addScaledVector(Zi,c);Ja.subVectors(t,a);let v=Zi.dot(Ja),T=Ji.dot(Ja);if(T>=0&&v<=T)return e.copy(a);let P=v*d-f*T;if(P<=0&&d>=0&&T<=0)return u=d/(d-T),e.copy(i).addScaledVector(Ji,u);let S=g*T-v*x;if(S<=0&&x-g>=0&&v-T>=0)return kc.subVectors(a,r),u=(x-g)/(x-g+(v-T)),e.copy(r).addScaledVector(kc,u);let _=1/(S+P+m);return c=P*_,u=m*_,e.copy(i).addScaledVector(Zi,c).addScaledVector(Ji,u)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},li=class{constructor(t=new J(1/0,1/0,1/0),e=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)t.isMesh===!0?t.getVertexPosition(c,Mn):Mn.fromBufferAttribute(a,c),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Rr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Rr.copy(i.boundingBox)),Rr.applyMatrix4(t.matrixWorld),this.union(Rr)}let r=t.children;for(let a=0,c=r.length;a<c;a++)this.expandByObject(r[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ls),Lr.subVectors(this.max,Ls),$i.subVectors(t.a,Ls),Ki.subVectors(t.b,Ls),ji.subVectors(t.c,Ls),si.subVectors(Ki,$i),ri.subVectors(ji,Ki),Ti.subVectors($i,ji);let e=[0,-si.z,si.y,0,-ri.z,ri.y,0,-Ti.z,Ti.y,si.z,0,-si.x,ri.z,0,-ri.x,Ti.z,0,-Ti.x,-si.y,si.x,0,-ri.y,ri.x,0,-Ti.y,Ti.x,0];return!Qa(e,$i,Ki,ji,Lr)||(e=[1,0,0,0,1,0,0,0,1],!Qa(e,$i,Ki,ji,Lr))?!1:(Nr.crossVectors(si,ri),e=[Nr.x,Nr.y,Nr.z],Qa(e,$i,Ki,ji,Lr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Wn=[new J,new J,new J,new J,new J,new J,new J,new J],Mn=new J,Rr=new li,$i=new J,Ki=new J,ji=new J,si=new J,ri=new J,Ti=new J,Ls=new J,Lr=new J,Nr=new J,Ei=new J;function Qa(n,t,e,i,r){for(let a=0,c=n.length-3;a<=c;a+=3){Ei.fromArray(n,a);let u=r.x*Math.abs(Ei.x)+r.y*Math.abs(Ei.y)+r.z*Math.abs(Ei.z),f=t.dot(Ei),d=e.dot(Ei),g=i.dot(Ei);if(Math.max(-Math.max(f,d,g),Math.min(f,d,g))>u)return!1}return!0}var Ie=new J,Dr=new Zt,wf=0,gn=class extends En{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Rh,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Dr.fromBufferAttribute(this,e),Dr.applyMatrix3(t),this.setXY(e,Dr.x,Dr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=is(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=qe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=is(e,this.array)),e}setX(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=is(e,this.array)),e}setY(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=is(e,this.array)),e}setZ(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=is(e,this.array)),e}setW(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),i=qe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),i=qe(i,this.array),r=qe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,a){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),i=qe(i,this.array),r=qe(r,this.array),a=qe(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Hs=class extends gn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Xs=class extends gn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Ke=class extends gn{constructor(t,e,i){super(new Float32Array(t),e,i)}},Af=new li,Ns=new J,tl=new J,fs=class{constructor(t=new J,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Af.setFromPoints(t).getCenter(i);let r=0;for(let a=0,c=t.length;a<c;a++)r=Math.max(r,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ns.subVectors(t,this.center);let e=Ns.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Ns,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(tl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ns.copy(t.center).add(tl)),this.expandByPoint(Ns.copy(t.center).sub(tl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Pf=0,mn=new Ee,el=new He,Qi=new J,rn=new li,Ds=new li,Oe=new J,_n=class n extends En{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=Ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ku(t)?Xs:Hs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Kt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return mn.makeRotationFromQuaternion(t),this.applyMatrix4(mn),this}rotateX(t){return mn.makeRotationX(t),this.applyMatrix4(mn),this}rotateY(t){return mn.makeRotationY(t),this.applyMatrix4(mn),this}rotateZ(t){return mn.makeRotationZ(t),this.applyMatrix4(mn),this}translate(t,e,i){return mn.makeTranslation(t,e,i),this.applyMatrix4(mn),this}scale(t,e,i){return mn.makeScale(t,e,i),this.applyMatrix4(mn),this}lookAt(t){return el.lookAt(t),el.updateMatrix(),this.applyMatrix4(el.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let r=0,a=t.length;r<a;r++){let c=t[r];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Ke(i,3))}else{let i=Math.min(t.length,e.count);for(let r=0;r<i;r++){let a=t[r];e.setXYZ(r,a.x,a.y,a.z||0)}t.length>e.count&&Wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new li);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){let a=e[i];rn.setFromBufferAttribute(a),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){let i=this.boundingSphere.center;if(rn.setFromBufferAttribute(t),e)for(let a=0,c=e.length;a<c;a++){let u=e[a];Ds.setFromBufferAttribute(u),this.morphTargetsRelative?(Oe.addVectors(rn.min,Ds.min),rn.expandByPoint(Oe),Oe.addVectors(rn.max,Ds.max),rn.expandByPoint(Oe)):(rn.expandByPoint(Ds.min),rn.expandByPoint(Ds.max))}rn.getCenter(i);let r=0;for(let a=0,c=t.count;a<c;a++)Oe.fromBufferAttribute(t,a),r=Math.max(r,i.distanceToSquared(Oe));if(e)for(let a=0,c=e.length;a<c;a++){let u=e[a],f=this.morphTargetsRelative;for(let d=0,g=u.count;d<g;d++)Oe.fromBufferAttribute(u,d),f&&(Qi.fromBufferAttribute(t,d),Oe.add(Qi)),r=Math.max(r,i.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,r=e.normal,a=e.uv,c=this.getAttribute("tangent");(c===void 0||c.count!==i.count)&&(c=new gn(new Float32Array(4*i.count),4),this.setAttribute("tangent",c));let u=[],f=[];for(let b=0;b<i.count;b++)u[b]=new J,f[b]=new J;let d=new J,g=new J,x=new J,m=new Zt,v=new Zt,T=new Zt,P=new J,S=new J;function _(b,C,B){d.fromBufferAttribute(i,b),g.fromBufferAttribute(i,C),x.fromBufferAttribute(i,B),m.fromBufferAttribute(a,b),v.fromBufferAttribute(a,C),T.fromBufferAttribute(a,B),g.sub(d),x.sub(d),v.sub(m),T.sub(m);let X=1/(v.x*T.y-T.x*v.y);isFinite(X)&&(P.copy(g).multiplyScalar(T.y).addScaledVector(x,-v.y).multiplyScalar(X),S.copy(x).multiplyScalar(v.x).addScaledVector(g,-T.x).multiplyScalar(X),u[b].add(P),u[C].add(P),u[B].add(P),f[b].add(S),f[C].add(S),f[B].add(S))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let b=0,C=N.length;b<C;++b){let B=N[b],X=B.start,Y=B.count;for(let j=X,k=X+Y;j<k;j+=3)_(t.getX(j+0),t.getX(j+1),t.getX(j+2))}let z=new J,A=new J,R=new J,I=new J;function U(b){R.fromBufferAttribute(r,b),I.copy(R);let C=u[b];z.copy(C),z.sub(R.multiplyScalar(R.dot(C))).normalize(),A.crossVectors(I,C);let X=A.dot(f[b])<0?-1:1;c.setXYZW(b,z.x,z.y,z.z,X)}for(let b=0,C=N.length;b<C;++b){let B=N[b],X=B.start,Y=B.count;for(let j=X,k=X+Y;j<k;j+=3)U(t.getX(j+0)),U(t.getX(j+1)),U(t.getX(j+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new gn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let m=0,v=i.count;m<v;m++)i.setXYZ(m,0,0,0);let r=new J,a=new J,c=new J,u=new J,f=new J,d=new J,g=new J,x=new J;if(t)for(let m=0,v=t.count;m<v;m+=3){let T=t.getX(m+0),P=t.getX(m+1),S=t.getX(m+2);r.fromBufferAttribute(e,T),a.fromBufferAttribute(e,P),c.fromBufferAttribute(e,S),g.subVectors(c,a),x.subVectors(r,a),g.cross(x),u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,P),d.fromBufferAttribute(i,S),u.add(g),f.add(g),d.add(g),i.setXYZ(T,u.x,u.y,u.z),i.setXYZ(P,f.x,f.y,f.z),i.setXYZ(S,d.x,d.y,d.z)}else for(let m=0,v=e.count;m<v;m+=3)r.fromBufferAttribute(e,m+0),a.fromBufferAttribute(e,m+1),c.fromBufferAttribute(e,m+2),g.subVectors(c,a),x.subVectors(r,a),g.cross(x),i.setXYZ(m+0,g.x,g.y,g.z),i.setXYZ(m+1,g.x,g.y,g.z),i.setXYZ(m+2,g.x,g.y,g.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(u,f){let d=u.array,g=u.itemSize,x=u.normalized,m=new d.constructor(f.length*g),v=0,T=0;for(let P=0,S=f.length;P<S;P++){u.isInterleavedBufferAttribute?v=f[P]*u.data.stride+u.offset:v=f[P]*g;for(let _=0;_<g;_++)m[T++]=d[v++]}return new gn(m,g,x)}if(this.index===null)return Wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,r=this.attributes;for(let u in r){let f=r[u],d=t(f,i);e.setAttribute(u,d)}let a=this.morphAttributes;for(let u in a){let f=[],d=a[u];for(let g=0,x=d.length;g<x;g++){let m=d[g],v=t(m,i);f.push(v)}e.morphAttributes[u]=f}e.morphTargetsRelative=this.morphTargetsRelative;let c=this.groups;for(let u=0,f=c.length;u<f;u++){let d=c[u];e.addGroup(d.start,d.count,d.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let f=this.parameters;for(let d in f)f[d]!==void 0&&(t[d]=f[d]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let f in i){let d=i[f];t.data.attributes[f]=d.toJSON(t.data)}let r={},a=!1;for(let f in this.morphAttributes){let d=this.morphAttributes[f],g=[];for(let x=0,m=d.length;x<m;x++){let v=d[x];g.push(v.toJSON(t.data))}g.length>0&&(r[f]=g,a=!0)}a&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));let u=this.boundingSphere;return u!==null&&(t.data.boundingSphere=u.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let r=t.attributes;for(let d in r){let g=r[d];this.setAttribute(d,g.clone(e))}let a=t.morphAttributes;for(let d in a){let g=[],x=a[d];for(let m=0,v=x.length;m<v;m++)g.push(x[m].clone(e));this.morphAttributes[d]=g}this.morphTargetsRelative=t.morphTargetsRelative;let c=t.groups;for(let d=0,g=c.length;d<g;d++){let x=c[d];this.addGroup(x.start,x.count,x.materialIndex)}let u=t.boundingBox;u!==null&&(this.boundingBox=u.clone());let f=t.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var nl=new J,Cf=new J,If=new Kt,an=class{constructor(t=new J(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let r=nl.subVectors(i,e).cross(Cf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let r=t.delta(nl),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let c=-(t.start.dot(this.normal)+this.constant)/a;return i===!0&&(c<0||c>1)?null:e.copy(t.start).addScaledVector(r,c)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||If.getNormalMatrix(t),r=this.coplanarPoint(nl).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Rf=0,ci=class extends En{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=Ss(),this.name="",this.type="Material",this.blending=xs,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vl,this.blendDst=yl,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ae(0,0,0),this.blendAlpha=0,this.depthFunc=rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Th,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zr,this.stencilZFail=Zr,this.stencilZPass=Zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Wt(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Wt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let c=[];for(let u in a){let f=a[u];delete f.metadata,c.push(f)}return c}if(e){let a=r(t.textures),c=r(t.images);a.length>0&&(i.textures=a),c.length>0&&(i.images=c)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ae().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new an().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Zt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Zt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let r=e.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Yn=new J,il=new J,Or=new J,Ur=new J,Ci=class{constructor(t=new J,e=new J(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yn.copy(this.origin).addScaledVector(this.direction,e),Yn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){il.copy(t).add(e).multiplyScalar(.5),Or.copy(e).sub(t).normalize(),Ur.copy(this.origin).sub(il);let a=t.distanceTo(e)*.5,c=-this.direction.dot(Or),u=Ur.dot(this.direction),f=-Ur.dot(Or),d=Ur.lengthSq(),g=Math.abs(1-c*c),x,m,v,T;if(g>0)if(x=c*f-u,m=c*u-f,T=a*g,x>=0)if(m>=-T)if(m<=T){let P=1/g;x*=P,m*=P,v=x*(x+c*m+2*u)+m*(c*x+m+2*f)+d}else m=a,x=Math.max(0,-(c*m+u)),v=-x*x+m*(m+2*f)+d;else m=-a,x=Math.max(0,-(c*m+u)),v=-x*x+m*(m+2*f)+d;else m<=-T?(x=Math.max(0,-(-c*a+u)),m=x>0?-a:Math.min(Math.max(-a,-f),a),v=-x*x+m*(m+2*f)+d):m<=T?(x=0,m=Math.min(Math.max(-a,-f),a),v=m*(m+2*f)+d):(x=Math.max(0,-(c*a+u)),m=x>0?a:Math.min(Math.max(-a,-f),a),v=-x*x+m*(m+2*f)+d);else m=c>0?-a:a,x=Math.max(0,-(c*m+u)),v=-x*x+m*(m+2*f)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,x),r&&r.copy(il).addScaledVector(Or,m),v}intersectSphere(t,e){if(t.radius<0)return null;Yn.subVectors(t.center,this.origin);let i=Yn.dot(this.direction),r=Yn.dot(Yn)-i*i,a=t.radius*t.radius;if(r>a)return null;let c=Math.sqrt(a-r),u=i-c,f=i+c;return f<0?null:u<0?this.at(f,e):this.at(u,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,a,c,u,f,d=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,m=this.origin;return d>=0?(i=(t.min.x-m.x)*d,r=(t.max.x-m.x)*d):(i=(t.max.x-m.x)*d,r=(t.min.x-m.x)*d),g>=0?(a=(t.min.y-m.y)*g,c=(t.max.y-m.y)*g):(a=(t.max.y-m.y)*g,c=(t.min.y-m.y)*g),i>c||a>r||((a>i||isNaN(i))&&(i=a),(c<r||isNaN(r))&&(r=c),x>=0?(u=(t.min.z-m.z)*x,f=(t.max.z-m.z)*x):(u=(t.max.z-m.z)*x,f=(t.min.z-m.z)*x),i>f||u>r)||((u>i||i!==i)&&(i=u),(f<r||r!==r)&&(r=f),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Yn)!==null}intersectTriangle(t,e,i,r,a){let c=this.origin,u=this.direction,f=u.x,d=u.y,g=u.z,x=t.x-c.x,m=t.y-c.y,v=t.z-c.z,T=e.x-c.x,P=e.y-c.y,S=e.z-c.z,_=i.x-c.x,N=i.y-c.y,z=i.z-c.z,A=Math.abs(f),R=Math.abs(d),I=Math.abs(g),U,b,C,B,X,Y,j,k,$,nt,tt,pt;if(A>=R&&A>=I?(C=f,Y=x,$=T,pt=_,f>=0?(U=d,b=g,B=m,X=v,j=P,k=S,nt=N,tt=z):(U=g,b=d,B=v,X=m,j=S,k=P,nt=z,tt=N)):R>=I?(C=d,Y=m,$=P,pt=N,d>=0?(U=g,b=f,B=v,X=x,j=S,k=T,nt=z,tt=_):(U=f,b=g,B=x,X=v,j=T,k=S,nt=_,tt=z)):(C=g,Y=v,$=S,pt=z,g>=0?(U=f,b=d,B=x,X=m,j=T,k=P,nt=_,tt=N):(U=d,b=f,B=m,X=x,j=P,k=T,nt=N,tt=_)),C===0)return null;let et=U/C,ut=b/C,ft=1/C,Ft=B-et*Y,Lt=X-ut*Y,Jt=j-et*$,Xt=k-ut*$,ee=nt-et*pt,it=tt-ut*pt,ht=ee*Xt-it*Jt,Rt=Ft*it-Lt*ee,Yt=Jt*Lt-Xt*Ft;if(r){if(ht<0||Rt<0||Yt<0)return null}else if((ht<0||Rt<0||Yt<0)&&(ht>0||Rt>0||Yt>0))return null;let Et=ht+Rt+Yt;if(Et===0)return null;let Qt=ft*(ht*Y+Rt*$+Yt*pt);return(Et>0?Qt<0:Qt>0)?null:this.at(Qt/Et,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ws=class extends ci{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=Sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Vc=new Ee,wi=new Ci,Fr=new fs,Gc=new J,Br=new J,zr=new J,kr=new J,sl=new J,Vr=new J,Hc=new J,Gr=new J,Xe=class extends He{constructor(t=new _n,e=new Ws){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=r.length;a<c;a++){let u=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(t,e){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,c=i.morphTargetsRelative;e.fromBufferAttribute(r,t);let u=this.morphTargetInfluences;if(a&&u){Vr.set(0,0,0);for(let f=0,d=a.length;f<d;f++){let g=u[f],x=a[f];g!==0&&(sl.fromBufferAttribute(x,t),c?Vr.addScaledVector(sl,g):Vr.addScaledVector(sl.sub(e),g))}e.add(Vr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fr.copy(i.boundingSphere),Fr.applyMatrix4(a),wi.copy(t.ray).recast(t.near),!(Fr.containsPoint(wi.origin)===!1&&(wi.intersectSphere(Fr,Gc)===null||wi.origin.distanceToSquared(Gc)>(t.far-t.near)**2))&&(Vc.copy(a).invert(),wi.copy(t.ray).applyMatrix4(Vc),!(i.boundingBox!==null&&wi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,wi)))}_computeIntersections(t,e,i){let r,a=this.geometry,c=this.material,u=a.index,f=a.attributes.position,d=a.attributes.uv,g=a.attributes.uv1,x=a.attributes.normal,m=a.groups,v=a.drawRange;if(u!==null)if(Array.isArray(c))for(let T=0,P=m.length;T<P;T++){let S=m[T],_=c[S.materialIndex],N=Math.max(S.start,v.start),z=Math.min(u.count,Math.min(S.start+S.count,v.start+v.count));for(let A=N,R=z;A<R;A+=3){let I=u.getX(A),U=u.getX(A+1),b=u.getX(A+2);r=Hr(this,_,t,i,d,g,x,I,U,b),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=S.materialIndex,e.push(r))}}else{let T=Math.max(0,v.start),P=Math.min(u.count,v.start+v.count);for(let S=T,_=P;S<_;S+=3){let N=u.getX(S),z=u.getX(S+1),A=u.getX(S+2);r=Hr(this,c,t,i,d,g,x,N,z,A),r&&(r.faceIndex=Math.floor(S/3),e.push(r))}}else if(f!==void 0)if(Array.isArray(c))for(let T=0,P=m.length;T<P;T++){let S=m[T],_=c[S.materialIndex],N=Math.max(S.start,v.start),z=Math.min(f.count,Math.min(S.start+S.count,v.start+v.count));for(let A=N,R=z;A<R;A+=3){let I=A,U=A+1,b=A+2;r=Hr(this,_,t,i,d,g,x,I,U,b),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=S.materialIndex,e.push(r))}}else{let T=Math.max(0,v.start),P=Math.min(f.count,v.start+v.count);for(let S=T,_=P;S<_;S+=3){let N=S,z=S+1,A=S+2;r=Hr(this,c,t,i,d,g,x,N,z,A),r&&(r.faceIndex=Math.floor(S/3),e.push(r))}}}};function Lf(n,t,e,i,r,a,c,u){let f;if(t.side===Ze?f=i.intersectTriangle(c,a,r,!0,u):f=i.intersectTriangle(r,a,c,t.side===gi,u),f===null)return null;Gr.copy(u),Gr.applyMatrix4(n.matrixWorld);let d=e.ray.origin.distanceTo(Gr);return d<e.near||d>e.far?null:{distance:d,point:Gr.clone(),object:n}}function Hr(n,t,e,i,r,a,c,u,f,d){n.getVertexPosition(u,Br),n.getVertexPosition(f,zr),n.getVertexPosition(d,kr);let g=Lf(n,t,e,i,Br,zr,kr,Hc);if(g){let x=new J;ai.getBarycoord(Hc,Br,zr,kr,x),r&&(g.uv=ai.getInterpolatedAttribute(r,u,f,d,x,new Zt)),a&&(g.uv1=ai.getInterpolatedAttribute(a,u,f,d,x,new Zt)),c&&(g.normal=ai.getInterpolatedAttribute(c,u,f,d,x,new J),g.normal.dot(i.direction)>0&&g.normal.multiplyScalar(-1));let m={a:u,b:f,c:d,normal:new J,materialIndex:0};ai.getNormal(Br,zr,kr,m.normal),g.face=m,g.barycoord=x}return g}var lo=class extends je{constructor(t=null,e=1,i=1,r,a,c,u,f,d=Ue,g=Ue,x,m){super(null,c,u,f,d,g,r,a,x,m),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ai=new fs,Nf=new Zt(.5,.5),Xr=new J,ds=class{constructor(t=new an,e=new an,i=new an,r=new an,a=new an,c=new an){this.planes=[t,e,i,r,a,c]}set(t,e,i,r,a,c){let u=this.planes;return u[0].copy(t),u[1].copy(e),u[2].copy(i),u[3].copy(r),u[4].copy(a),u[5].copy(c),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=bn,i=!1){let r=this.planes,a=t.elements,c=a[0],u=a[1],f=a[2],d=a[3],g=a[4],x=a[5],m=a[6],v=a[7],T=a[8],P=a[9],S=a[10],_=a[11],N=a[12],z=a[13],A=a[14],R=a[15];if(r[0].setComponents(d-c,v-g,_-T,R-N).normalize(),r[1].setComponents(d+c,v+g,_+T,R+N).normalize(),r[2].setComponents(d+u,v+x,_+P,R+z).normalize(),r[3].setComponents(d-u,v-x,_-P,R-z).normalize(),i)r[4].setComponents(f,m,S,A).normalize(),r[5].setComponents(d-f,v-m,_-S,R-A).normalize();else if(r[4].setComponents(d-f,v-m,_-S,R-A).normalize(),e===bn)r[5].setComponents(d+f,v+m,_+S,R+A).normalize();else if(e===os)r[5].setComponents(f,m,S,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(t){Ai.center.set(0,0,0);let e=Nf.distanceTo(t.center);return Ai.radius=.7071067811865476+e,Ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(t){let e=this.planes,i=t.center,r=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let r=e[i];if(Xr.x=r.normal.x>0?t.max.x:t.min.x,Xr.y=r.normal.y>0?t.max.y:t.min.y,Xr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Xr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ys=class extends je{constructor(t=[],e=_i,i,r,a,c,u,f,d,g){super(t,e,i,r,a,c,u,f,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var hi=class extends je{constructor(t,e,i=An,r,a,c,u=Ue,f=Ue,d,g=Nn,x=1){if(g!==Nn&&g!==vi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let m={width:t,height:e,depth:x};super(m,r,a,c,u,f,g,i,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new cs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},co=class extends hi{constructor(t,e=An,i=_i,r,a,c=Ue,u=Ue,f,d=Nn){let g={width:t,height:t,depth:1},x=[g,g,g,g,g,g];super(t,t,e,i,r,a,c,u,f,d),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},qs=class extends je{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Jn=class n extends _n{constructor(t=1,e=1,i=1,r=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:a,depthSegments:c};let u=this;r=Math.floor(r),a=Math.floor(a),c=Math.floor(c);let f=[],d=[],g=[],x=[],m=0,v=0;T("z","y","x",-1,-1,i,e,t,c,a,0),T("z","y","x",1,-1,i,e,-t,c,a,1),T("x","z","y",1,1,t,i,e,r,c,2),T("x","z","y",1,-1,t,i,-e,r,c,3),T("x","y","z",1,-1,t,e,i,r,a,4),T("x","y","z",-1,-1,t,e,-i,r,a,5),this.setIndex(f),this.setAttribute("position",new Ke(d,3)),this.setAttribute("normal",new Ke(g,3)),this.setAttribute("uv",new Ke(x,2));function T(P,S,_,N,z,A,R,I,U,b,C){let B=A/U,X=R/b,Y=A/2,j=R/2,k=I/2,$=U+1,nt=b+1,tt=0,pt=0,et=new J;for(let ut=0;ut<nt;ut++){let ft=ut*X-j;for(let Ft=0;Ft<$;Ft++){let Lt=Ft*B-Y;et[P]=Lt*N,et[S]=ft*z,et[_]=k,d.push(et.x,et.y,et.z),et[P]=0,et[S]=0,et[_]=I>0?1:-1,g.push(et.x,et.y,et.z),x.push(Ft/U),x.push(1-ut/b),tt+=1}}for(let ut=0;ut<b;ut++)for(let ft=0;ft<U;ft++){let Ft=m+ft+$*ut,Lt=m+ft+$*(ut+1),Jt=m+(ft+1)+$*(ut+1),Xt=m+(ft+1)+$*ut;f.push(Ft,Lt,Xt),f.push(Lt,Jt,Xt),pt+=6}u.addGroup(v,pt,C),v+=pt,m+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Zs=class n extends _n{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};let a=t/2,c=e/2,u=Math.floor(i),f=Math.floor(r),d=u+1,g=f+1,x=t/u,m=e/f,v=[],T=[],P=[],S=[];for(let _=0;_<g;_++){let N=_*m-c;for(let z=0;z<d;z++){let A=z*x-a;T.push(A,-N,0),P.push(0,0,1),S.push(z/u),S.push(1-_/f)}}for(let _=0;_<f;_++)for(let N=0;N<u;N++){let z=N+d*_,A=N+d*(_+1),R=N+1+d*(_+1),I=N+1+d*_;v.push(z,A,I),v.push(A,R,I)}this.setIndex(v),this.setAttribute("position",new Ke(T,3)),this.setAttribute("normal",new Ke(P,3)),this.setAttribute("uv",new Ke(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};function Ni(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let r=n[e][i];if(Xc(r))r.isRenderTargetTexture?(Wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone();else if(Array.isArray(r))if(Xc(r[0])){let a=[];for(let c=0,u=r.length;c<u;c++)a[c]=r[c].clone();t[e][i]=a}else t[e][i]=r.slice();else t[e][i]=r}}return t}function We(n){let t={};for(let e=0;e<n.length;e++){let i=Ni(n[e]);for(let r in i)t[r]=i[r]}return t}function Xc(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Df(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Vl(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}var Fh={clone:Ni,merge:We},Of=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,cn=class extends ci{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Of,this.fragmentShader=Uf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ni(t.uniforms),this.uniformsGroups=Df(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let c=this.uniforms[r].value;c&&c.isTexture?e.uniforms[r]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?e.uniforms[r]={type:"c",value:c.getHex()}:c&&c.isVector2?e.uniforms[r]={type:"v2",value:c.toArray()}:c&&c.isVector3?e.uniforms[r]={type:"v3",value:c.toArray()}:c&&c.isVector4?e.uniforms[r]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?e.uniforms[r]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?e.uniforms[r]={type:"m4",value:c.toArray()}:e.uniforms[r]={value:c}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let r=t.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=e[r.value]||null;break;case"c":this.uniforms[i].value=new ae().setHex(r.value);break;case"v2":this.uniforms[i].value=new Zt().fromArray(r.value);break;case"v3":this.uniforms[i].value=new J().fromArray(r.value);break;case"v4":this.uniforms[i].value=new we().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Kt().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Ee().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ho=class extends cn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ii=class extends ci{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fa,this.normalScale=new Zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var uo=class extends ci{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},fo=class extends ci{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ts(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function rl(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var ui=class{constructor(t,e,i,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,r=e[i],a=e[i-1];n:{t:{let c;e:{i:if(!(t<r)){for(let u=i+2;;){if(r===void 0){if(t<a)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===u)break;if(a=r,r=e[++i],t<r)break t}c=e.length;break e}if(!(t>=a)){let u=e[1];t<u&&(i=2,a=u);for(let f=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===f)break;if(r=a,a=e[--i-1],t>=a)break t}c=i,i=0;break e}break n}for(;i<c;){let u=i+c>>>1;t<e[u]?c=u:i=u+1}if(r=e[i],a=e[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=t*r;for(let c=0;c!==r;++c)e[c]=i[a+c];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},po=class extends ui{constructor(t,e,i,r){super(t,e,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ll,endingEnd:ll}}intervalChanged_(t,e,i){let r=this.parameterPositions,a=t-2,c=t+1,u=r[a],f=r[c];if(u===void 0)switch(this.getSettings_().endingStart){case cl:a=t,u=2*e-i;break;case hl:a=r.length-2,u=e+r[a]-r[a+1];break;default:a=t,u=i}if(f===void 0)switch(this.getSettings_().endingEnd){case cl:c=t,f=2*i-e;break;case hl:c=1,f=i+r[1]-r[0];break;default:c=t-1,f=e}let d=(i-e)*.5,g=this.valueSize;this._weightPrev=d/(e-u),this._weightNext=d/(f-i),this._offsetPrev=a*g,this._offsetNext=c*g}interpolate_(t,e,i,r){let a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=t*u,d=f-u,g=this._offsetPrev,x=this._offsetNext,m=this._weightPrev,v=this._weightNext,T=(i-e)/(r-e),P=T*T,S=P*T,_=-m*S+2*m*P-m*T,N=(1+m)*S+(-1.5-2*m)*P+(-.5+m)*T+1,z=(-1-v)*S+(1.5+v)*P+.5*T,A=v*S-v*P;for(let R=0;R!==u;++R)a[R]=_*c[g+R]+N*c[d+R]+z*c[f+R]+A*c[x+R];return a}},mo=class extends ui{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=t*u,d=f-u,g=(i-e)/(r-e),x=1-g;for(let m=0;m!==u;++m)a[m]=c[d+m]*x+c[f+m]*g;return a}},go=class extends ui{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t){return this.copySampleValue_(t-1)}},_o=class extends ui{interpolate_(t,e,i,r){let a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=t*u,d=f-u,g=this.inTangents,x=this.outTangents;if(!g||!x){let T=(i-e)/(r-e),P=1-T;for(let S=0;S!==u;++S)a[S]=c[d+S]*P+c[f+S]*T;return a}let m=u*2,v=t-1;for(let T=0;T!==u;++T){let P=c[d+T],S=c[f+T],_=v*m+T*2,N=x[_],z=x[_+1],A=t*m+T*2,R=g[A],I=g[A+1],U=Bf(i,e,N,R,r);a[T]=Bh(U,P,z,I,S)}return a}};function Bh(n,t,e,i,r){let a=1-n;return a*a*a*t+3*a*a*n*e+3*a*n*n*i+n*n*n*r}function Ff(n,t,e,i,r){let a=1-n;return 3*a*a*(e-t)+6*a*n*(i-e)+3*n*n*(r-i)}function Bf(n,t,e,i,r){let a=(n-t)/(r-t);for(let c=0;c<8;c++){let u=Bh(a,t,e,i,r)-n;if(Math.abs(u)<1e-10)break;let f=Ff(a,t,e,i,r);if(Math.abs(f)<1e-10)break;a=Math.max(0,Math.min(1,a-u/f))}return a}var hn=class{constructor(t,e,i,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ts(e,this.TimeBufferType),this.values=ts(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:ts(t.times,Array),values:ts(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(i.interpolation=r),rl(t.settings)&&(i.settings={inTangents:ts(t.settings.inTangents,Array),outTangents:ts(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new go(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new mo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new po(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new _o(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Fs:e=this.InterpolantFactoryMethodDiscrete;break;case so:e=this.InterpolantFactoryMethodLinear;break;case qr:e=this.InterpolantFactoryMethodSmooth;break;case al:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Wt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fs;case this.InterpolantFactoryMethodLinear:return so;case this.InterpolantFactoryMethodSmooth:return qr;case this.InterpolantFactoryMethodBezier:return al}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]*=t;rl(this.settings)&&(Wc(this.settings.inTangents,t),Wc(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,r=i.length,a=0,c=r-1;for(;a!==r&&i[a]<t;)++a;for(;c!==-1&&i[c]>e;)--c;if(++c,a!==0||c!==r){a>=c&&(c=Math.max(c,1),a=c-1);let u=this.getValueSize();this.times=i.slice(a,c),this.values=this.values.slice(a*u,c*u)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(qt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,r=this.values,a=i.length;a===0&&(qt("KeyframeTrack: Track is empty.",this),t=!1);let c=null;for(let u=0;u!==a;u++){let f=i[u];if(typeof f=="number"&&isNaN(f)){qt("KeyframeTrack: Time is not a valid number.",this,u,f),t=!1;break}if(c!==null&&c>f){qt("KeyframeTrack: Out of order keys.",this,u,f,c),t=!1;break}c=f}if(r!==void 0&&ju(r))for(let u=0,f=r.length;u!==f;++u){let d=r[u];if(isNaN(d)){qt("KeyframeTrack: Value is not a valid number.",this,u,d),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===qr,a=t.length-1,c=1;for(let u=1;u<a;++u){let f=!1,d=t[u],g=t[u+1];if(d!==g&&(u!==1||d!==t[0]))if(r)f=!0;else{let x=u*i,m=x-i,v=x+i;for(let T=0;T!==i;++T){let P=e[x+T];if(P!==e[m+T]||P!==e[v+T]){f=!0;break}}}if(f){if(u!==c){t[c]=t[u];let x=u*i,m=c*i;for(let v=0;v!==i;++v)e[m+v]=e[x+v]}++c}}if(a>0){t[c]=t[a];for(let u=a*i,f=c*i,d=0;d!==i;++d)e[f+d]=e[u+d];++c}return c!==t.length?(this.times=t.slice(0,c),this.values=e.slice(0,c*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,r=new i(this.name,t,e);return r.createInterpolant=this.createInterpolant,rl(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Wc(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}hn.prototype.ValueTypeName="";hn.prototype.TimeBufferType=Float32Array;hn.prototype.ValueBufferType=Float32Array;hn.prototype.DefaultInterpolation=so;var fi=class extends hn{constructor(t,e,i){super(t,e,i)}};fi.prototype.ValueTypeName="bool";fi.prototype.ValueBufferType=Array;fi.prototype.DefaultInterpolation=Fs;fi.prototype.InterpolantFactoryMethodLinear=void 0;fi.prototype.InterpolantFactoryMethodSmooth=void 0;var xo=class extends hn{constructor(t,e,i,r){super(t,e,i,r)}};xo.prototype.ValueTypeName="color";var vo=class extends hn{constructor(t,e,i,r){super(t,e,i,r)}};vo.prototype.ValueTypeName="number";var yo=class extends ui{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=(i-e)/(r-e),d=t*u;for(let g=d+u;d!==g;d+=4)ln.slerpFlat(a,0,c,d-u,c,d,f);return a}},Js=class extends hn{constructor(t,e,i,r){super(t,e,i,r)}InterpolantFactoryMethodLinear(t){return new yo(this.times,this.values,this.getValueSize(),t)}};Js.prototype.ValueTypeName="quaternion";Js.prototype.InterpolantFactoryMethodSmooth=void 0;var di=class extends hn{constructor(t,e,i){super(t,e,i)}};di.prototype.ValueTypeName="string";di.prototype.ValueBufferType=Array;di.prototype.DefaultInterpolation=Fs;di.prototype.InterpolantFactoryMethodLinear=void 0;di.prototype.InterpolantFactoryMethodSmooth=void 0;var So=class extends hn{constructor(t,e,i,r){super(t,e,i,r)}};So.prototype.ValueTypeName="vector";var Mo=class{constructor(t,e,i){let r=this,a=!1,c=0,u=0,f,d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(g){u++,a===!1&&r.onStart!==void 0&&r.onStart(g,c,u),a=!0},this.itemEnd=function(g){c++,r.onProgress!==void 0&&r.onProgress(g,c,u),c===u&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(g){r.onError!==void 0&&r.onError(g)},this.resolveURL=function(g){return g=g.normalize("NFC"),f?f(g):g},this.setURLModifier=function(g){return f=g,this},this.addHandler=function(g,x){return d.push(g,x),this},this.removeHandler=function(g){let x=d.indexOf(g);return x!==-1&&d.splice(x,2),this},this.getHandler=function(g){for(let x=0,m=d.length;x<m;x+=2){let v=d[x],T=d[x+1];if(v.global&&(v.lastIndex=0),v.test(g))return T}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},zh=new Mo,bo=class{constructor(t){this.manager=t!==void 0?t:zh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(r,a){i.load(t,r,e,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};bo.DEFAULT_MATERIAL_NAME="__DEFAULT";var $s=class extends He{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ae(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ks=class extends $s{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ae(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},ol=new Ee,Yc=new J,qc=new J,To=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Zt(512,512),this.mapType=tn,this.map=null,this.mapPass=null,this.matrix=new Ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ds,this._frameExtents=new Zt(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Yc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Yc),qc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(qc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,r){ol.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(ol,t.coordinateSystem,t.reversedDepth);let a=this._frameExtents,c=r?r.z/a.x:1,u=r?r.w/a.y:1,f=r?r.x/a.x:0,d=r?r.y/a.y:0;t.coordinateSystem===os||t.reversedDepth?e.set(.5*c,0,0,.5*c+f,0,.5*u,0,.5*u+d,0,0,1,0,0,0,0,1):e.set(.5*c,0,0,.5*c+f,0,.5*u,0,.5*u+d,0,0,.5,.5,0,0,0,1),e.multiply(ol)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Wr=new J,Yr=new ln,Rn=new J,js=class extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Wr,Yr,Rn),Rn.x===1&&Rn.y===1&&Rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wr,Yr,Rn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Wr,Yr,Rn),Rn.x===1&&Rn.y===1&&Rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wr,Yr,Rn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},oi=new J,Zc=new Zt,Jc=new Zt,Ge=class extends js{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ls*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Os*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ls*2*Math.atan(Math.tan(Os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(oi.x,oi.y).multiplyScalar(-t/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(oi.x,oi.y).multiplyScalar(-t/oi.z)}getViewSize(t,e){return this.getViewBounds(t,Zc,Jc),e.subVectors(Jc,Zc)}setViewOffset(t,e,i,r,a,c){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Os*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,a=-.5*r,c=this.view;if(this.view!==null&&this.view.enabled){let f=c.fullWidth,d=c.fullHeight;a+=c.offsetX*r/f,e-=c.offsetY*i/d,r*=c.width/f,i*=c.height/d}let u=this.filmOffset;u!==0&&(a+=t*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ps=class extends js{constructor(t=-1,e=1,i=1,r=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-t,c=i+t,u=r+e,f=r-e;if(this.view!==null&&this.view.enabled){let d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,c=a+d*this.view.width,u-=g*this.view.offsetY,f=u-g*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ul=class extends To{constructor(){super(new ps(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ms=class extends $s{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.shadow=new ul}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var es=-90,ns=1,Eo=class extends He{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ge(es,ns,t,e);r.layers=this.layers,this.add(r);let a=new Ge(es,ns,t,e);a.layers=this.layers,this.add(a);let c=new Ge(es,ns,t,e);c.layers=this.layers,this.add(c);let u=new Ge(es,ns,t,e);u.layers=this.layers,this.add(u);let f=new Ge(es,ns,t,e);f.layers=this.layers,this.add(f);let d=new Ge(es,ns,t,e);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,r,a,c,u,f]=e;for(let d of e)this.remove(d);if(t===bn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(t===os)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let d of e)this.add(d),d.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,c,u,f,d,g]=this.children,x=t.getRenderTarget(),m=t.getActiveCubeFace(),v=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;let P=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let S=!1;t.isWebGLRenderer===!0?S=t.state.buffers.depth.getReversed():S=t.reversedDepthBuffer,t.setRenderTarget(i,0,r),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,1,r),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,2,r),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(i,3,r),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),t.setRenderTarget(i,4,r),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),i.texture.generateMipmaps=P,t.setRenderTarget(i,5,r),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,g),t.setRenderTarget(x,m,v),t.xr.enabled=T,i.texture.needsPMREMUpdate=!0}},wo=class extends Ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Gl="\\[\\]\\.:\\/",zf=new RegExp("["+Gl+"]","g"),Hl="[^"+Gl+"]",kf="[^"+Gl.replace("\\.","")+"]",Vf=/((?:WC+[\/:])*)/.source.replace("WC",Hl),Gf=/(WCOD+)?/.source.replace("WCOD",kf),Hf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hl),Xf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hl),Wf=new RegExp("^"+Vf+Gf+Hf+Xf+"$"),Yf=["material","materials","bones","map"],fl=class{constructor(t,e,i){let r=i||Te.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=i.length;r!==a;++r)i[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Te=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(zf,"")}static parseTrackName(t){let e=Wf.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let a=i.nodeName.substring(r+1);Yf.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(a){for(let c=0;c<a.length;c++){let u=a[c];if(u.name===e||u.uuid===e)return u;let f=i(u.children);if(f)return f}return null},r=i(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)t[e++]=i[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)i[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)i[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)i[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,r=e.propertyName,a=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Wt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let d=e.objectIndex;switch(i){case"materials":if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){qt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){qt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let g=0;g<t.length;g++)if(t[g].name===d){d=g;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){qt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){qt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(d!==void 0){if(t[d]===void 0){qt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[d]}}let c=t[r];if(c===void 0){let d=e.nodeName;qt("PropertyBinding: Trying to update property for track: "+d+"."+r+" but it wasn't found.",t);return}let u=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?u=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(u=this.Versioning.MatrixWorldNeedsUpdate);let f=this.BindingType.Direct;if(a!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}f=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=a}else c.fromArray!==void 0&&c.toArray!==void 0?(f=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(f=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=r;this.getValue=this.GetterByBindingType[f],this.setValue=this.SetterByBindingTypeAndVersioning[f][u]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Te.Composite=fl;Te.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Te.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Te.prototype.GetterByBindingType=[Te.prototype._getValue_direct,Te.prototype._getValue_array,Te.prototype._getValue_arrayElement,Te.prototype._getValue_toArray];Te.prototype.SetterByBindingTypeAndVersioning=[[Te.prototype._setValue_direct,Te.prototype._setValue_direct_setNeedsUpdate,Te.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_array,Te.prototype._setValue_array_setNeedsUpdate,Te.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_arrayElement,Te.prototype._setValue_arrayElement_setNeedsUpdate,Te.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_fromArray,Te.prototype._setValue_fromArray_setNeedsUpdate,Te.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var S_=new Float32Array(1);var $c=new Ee,Qs=class{constructor(t,e,i=0,r=1/0){this.ray=new Ci(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new hs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):qt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return $c.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($c),this}intersectObject(t,e=!0,i=[]){return dl(t,this,i,e),i.sort(Kc),i}intersectObjects(t,e=!0,i=[]){for(let r=0,a=t.length;r<a;r++)dl(t[r],this,i,e);return i.sort(Kc),i}};function Kc(n,t){return n.distance-t.distance}function dl(n,t,e,i){let r=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(r=!1),r===!0&&i===!0){let a=n.children;for(let c=0,u=a.length;c<u;c++)dl(a[c],t,e,!0)}}var gs=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=oe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(oe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var pl=class n{static{n.prototype.isMatrix2=!0}constructor(t,e,i,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,r){let a=this.elements;return a[0]=t,a[2]=e,a[1]=i,a[3]=r,this}};var tr=class extends En{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Xl(n,t,e,i){let r=qf(i);switch(e){case Dl:return n*t;case Ul:return n*t/r.components*r.byteLength;case No:return n*t/r.components*r.byteLength;case yi:return n*t*2/r.components*r.byteLength;case Do:return n*t*2/r.components*r.byteLength;case Ol:return n*t*3/r.components*r.byteLength;case xn:return n*t*4/r.components*r.byteLength;case Oo:return n*t*4/r.components*r.byteLength;case sr:case rr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case or:case ar:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Fo:case zo:return Math.max(n,16)*Math.max(t,8)/4;case Uo:case Bo:return Math.max(n,8)*Math.max(t,8)/2;case ko:case Vo:case Ho:case Xo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Go:case lr:case Wo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Yo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case qo:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Zo:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Jo:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case $o:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ko:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case jo:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Qo:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case ta:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ea:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case na:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ia:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case sa:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ra:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case oa:case aa:case la:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ca:case ha:return Math.ceil(n/4)*Math.ceil(t/4)*8;case cr:case ua:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function qf(n){switch(n){case tn:case Il:return{byteLength:1,components:1};case vs:case Rl:case Cn:return{byteLength:2,components:1};case Ro:case Lo:return{byteLength:2,components:4};case An:case Io:case Pn:return{byteLength:4,components:1};case Ll:case Nl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function au(){let n=null,t=!1,e=null,i=null;function r(a,c){i=n.requestAnimationFrame(r),e(a,c)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){n=a}}}function Jf(n){let t=new WeakMap;function e(u,f){let d=u.array,g=u.usage,x=d.byteLength,m=n.createBuffer();n.bindBuffer(f,m),n.bufferData(f,d,g),u.onUploadCallback();let v;if(d instanceof Float32Array)v=n.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)v=n.HALF_FLOAT;else if(d instanceof Uint16Array)u.isFloat16BufferAttribute?v=n.HALF_FLOAT:v=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=n.SHORT;else if(d instanceof Uint32Array)v=n.UNSIGNED_INT;else if(d instanceof Int32Array)v=n.INT;else if(d instanceof Int8Array)v=n.BYTE;else if(d instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:x}}function i(u,f,d){let g=f.array,x=f.updateRanges;if(n.bindBuffer(d,u),x.length===0)n.bufferSubData(d,0,g);else{x.sort((v,T)=>v.start-T.start);let m=0;for(let v=1;v<x.length;v++){let T=x[m],P=x[v];P.start<=T.start+T.count+1?T.count=Math.max(T.count,P.start+P.count-T.start):(++m,x[m]=P)}x.length=m+1;for(let v=0,T=x.length;v<T;v++){let P=x[v];n.bufferSubData(d,P.start*g.BYTES_PER_ELEMENT,g,P.start,P.count)}f.clearUpdateRanges()}f.onUploadCallback()}function r(u){return u.isInterleavedBufferAttribute&&(u=u.data),t.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);let f=t.get(u);f&&(n.deleteBuffer(f.buffer),t.delete(u))}function c(u,f){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){let g=t.get(u);(!g||g.version<u.version)&&t.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}let d=t.get(u);if(d===void 0)t.set(u,e(u,f));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,u,f),d.version=u.version}}return{get:r,remove:a,update:c}}var $f=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kf=`#ifdef USE_ALPHAHASH
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
#endif`,jf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,td=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ed=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nd=`#ifdef USE_AOMAP
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
#endif`,id=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sd=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,rd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,od=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ad=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ld=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cd=`#ifdef USE_IRIDESCENCE
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
#endif`,hd=`#ifdef USE_BUMPMAP
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
#endif`,ud=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,md=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_d=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,xd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,vd=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,yd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sd=`vec3 transformedNormal = objectNormal;
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
#endif`,Md=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Td=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ed=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ad=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Cd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Id=`#ifdef USE_ENVMAP
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
#endif`,Rd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ld=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Nd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Od=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ud=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fd=`#ifdef USE_GRADIENTMAP
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
}`,Bd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vd=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,Gd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Hd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Zd=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Jd=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$d=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Kd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jd=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Qd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ep=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,np=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ip=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,op=`#if defined( USE_POINTS_UV )
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
#endif`,ap=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,up=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fp=`#ifdef USE_MORPHTARGETS
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
#endif`,dp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,vp=`#ifdef USE_NORMALMAP
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
#endif`,yp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ep=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,wp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ap=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ip=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Np=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,Dp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Op=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,Up=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fp=`#ifdef USE_SKINNING
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
#endif`,Bp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zp=`#ifdef USE_SKINNING
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
#endif`,kp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xp=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Wp=`#ifdef USE_TRANSMISSION
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
#endif`,Yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$p=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kp=`uniform sampler2D t2D;
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
}`,jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,em=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nm=`#include <common>
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
}`,im=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sm=`#define DISTANCE
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
}`,rm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,am=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lm=`uniform float scale;
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
}`,cm=`uniform vec3 diffuse;
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
}`,hm=`#include <common>
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
}`,um=`uniform vec3 diffuse;
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
}`,fm=`#define LAMBERT
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
}`,dm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,pm=`#define MATCAP
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
}`,mm=`#define MATCAP
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
}`,gm=`#define NORMAL
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
}`,_m=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xm=`#define PHONG
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
}`,vm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,ym=`#define STANDARD
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
}`,Sm=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Mm=`#define TOON
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
}`,bm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,Tm=`uniform float size;
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
}`,Em=`uniform vec3 diffuse;
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
}`,wm=`#include <common>
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
}`,Am=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,Pm=`uniform float rotation;
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
}`,Cm=`uniform vec3 diffuse;
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
}`,se={alphahash_fragment:$f,alphahash_pars_fragment:Kf,alphamap_fragment:jf,alphamap_pars_fragment:Qf,alphatest_fragment:td,alphatest_pars_fragment:ed,aomap_fragment:nd,aomap_pars_fragment:id,batching_pars_vertex:sd,batching_vertex:rd,begin_vertex:od,beginnormal_vertex:ad,bsdfs:ld,iridescence_fragment:cd,bumpmap_pars_fragment:hd,clipping_planes_fragment:ud,clipping_planes_pars_fragment:fd,clipping_planes_pars_vertex:dd,clipping_planes_vertex:pd,color_fragment:md,color_pars_fragment:gd,color_pars_vertex:_d,color_vertex:xd,common:vd,cube_uv_reflection_fragment:yd,defaultnormal_vertex:Sd,displacementmap_pars_vertex:Md,displacementmap_vertex:bd,emissivemap_fragment:Td,emissivemap_pars_fragment:Ed,colorspace_fragment:wd,colorspace_pars_fragment:Ad,envmap_fragment:Pd,envmap_common_pars_fragment:Cd,envmap_pars_fragment:Id,envmap_pars_vertex:Rd,envmap_physical_pars_fragment:Gd,envmap_vertex:Ld,fog_vertex:Nd,fog_pars_vertex:Dd,fog_fragment:Od,fog_pars_fragment:Ud,gradientmap_pars_fragment:Fd,lightmap_pars_fragment:Bd,lights_lambert_fragment:zd,lights_lambert_pars_fragment:kd,lights_pars_begin:Vd,lights_toon_fragment:Hd,lights_toon_pars_fragment:Xd,lights_phong_fragment:Wd,lights_phong_pars_fragment:Yd,lights_physical_fragment:qd,lights_physical_pars_fragment:Zd,lights_fragment_begin:Jd,lights_fragment_maps:$d,lights_fragment_end:Kd,lightprobes_pars_fragment:jd,logdepthbuf_fragment:Qd,logdepthbuf_pars_fragment:tp,logdepthbuf_pars_vertex:ep,logdepthbuf_vertex:np,map_fragment:ip,map_pars_fragment:sp,map_particle_fragment:rp,map_particle_pars_fragment:op,metalnessmap_fragment:ap,metalnessmap_pars_fragment:lp,morphinstance_vertex:cp,morphcolor_vertex:hp,morphnormal_vertex:up,morphtarget_pars_vertex:fp,morphtarget_vertex:dp,normal_fragment_begin:pp,normal_fragment_maps:mp,normal_pars_fragment:gp,normal_pars_vertex:_p,normal_vertex:xp,normalmap_pars_fragment:vp,clearcoat_normal_fragment_begin:yp,clearcoat_normal_fragment_maps:Sp,clearcoat_pars_fragment:Mp,iridescence_pars_fragment:bp,opaque_fragment:Tp,packing:Ep,premultiplied_alpha_fragment:wp,project_vertex:Ap,dithering_fragment:Pp,dithering_pars_fragment:Cp,roughnessmap_fragment:Ip,roughnessmap_pars_fragment:Rp,shadowmap_pars_fragment:Lp,shadowmap_pars_vertex:Np,shadowmap_vertex:Dp,shadowmask_pars_fragment:Op,skinbase_vertex:Up,skinning_pars_vertex:Fp,skinning_vertex:Bp,skinnormal_vertex:zp,specularmap_fragment:kp,specularmap_pars_fragment:Vp,tonemapping_fragment:Gp,tonemapping_pars_fragment:Hp,transmission_fragment:Xp,transmission_pars_fragment:Wp,uv_pars_fragment:Yp,uv_pars_vertex:qp,uv_vertex:Zp,worldpos_vertex:Jp,background_vert:$p,background_frag:Kp,backgroundCube_vert:jp,backgroundCube_frag:Qp,cube_vert:tm,cube_frag:em,depth_vert:nm,depth_frag:im,distance_vert:sm,distance_frag:rm,equirect_vert:om,equirect_frag:am,linedashed_vert:lm,linedashed_frag:cm,meshbasic_vert:hm,meshbasic_frag:um,meshlambert_vert:fm,meshlambert_frag:dm,meshmatcap_vert:pm,meshmatcap_frag:mm,meshnormal_vert:gm,meshnormal_frag:_m,meshphong_vert:xm,meshphong_frag:vm,meshphysical_vert:ym,meshphysical_frag:Sm,meshtoon_vert:Mm,meshtoon_frag:bm,points_vert:Tm,points_frag:Em,shadow_vert:wm,shadow_frag:Am,sprite_vert:Pm,sprite_frag:Cm},Ct={common:{diffuse:{value:new ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new Zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new J},probesMax:{value:new J},probesResolution:{value:new J}},points:{diffuse:{value:new ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new ae(16777215)},opacity:{value:1},center:{value:new Zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},Fn={basic:{uniforms:We([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:We([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new ae(0)},envMapIntensity:{value:1}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:We([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new ae(0)},specular:{value:new ae(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:We([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:We([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new ae(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:We([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:We([Ct.points,Ct.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:We([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:We([Ct.common,Ct.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:We([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:We([Ct.sprite,Ct.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distance:{uniforms:We([Ct.common,Ct.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distance_vert,fragmentShader:se.distance_frag},shadow:{uniforms:We([Ct.lights,Ct.fog,{color:{value:new ae(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};Fn.physical={uniforms:We([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new Zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new Zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new ae(0)},specularColor:{value:new ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new Zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};var ma={r:0,b:0,g:0},Im=new Ee,lu=new Kt;lu.set(-1,0,0,0,1,0,0,0,1);function Rm(n,t,e,i,r,a){let c=new ae(0),u=r===!0?0:1,f,d,g=null,x=0,m=null;function v(N){let z=N.isScene===!0?N.background:null;if(z&&z.isTexture){let A=N.backgroundBlurriness>0;z=t.get(z,A)}return z}function T(N){let z=!1,A=v(N);A===null?S(c,u):A&&A.isColor&&(S(A,1),z=!0);let R=n.xr.getEnvironmentBlendMode();R==="additive"?e.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,a),(n.autoClear||z)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function P(N,z){let A=v(z);A&&(A.isCubeTexture||A.mapping===nr)?(d===void 0&&(d=new Xe(new Jn(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:Ni(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,I,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=A,d.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Im.makeRotationFromEuler(z.backgroundRotation)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(lu),d.material.toneMapped=le.getTransfer(A.colorSpace)!==pe,(g!==A||x!==A.version||m!==n.toneMapping)&&(d.material.needsUpdate=!0,g=A,x=A.version,m=n.toneMapping),d.layers.enableAll(),N.unshift(d,d.geometry,d.material,0,0,null)):A&&A.isTexture&&(f===void 0&&(f=new Xe(new Zs(2,2),new cn({name:"BackgroundMaterial",uniforms:Ni(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(f)),f.material.uniforms.t2D.value=A,f.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,f.material.toneMapped=le.getTransfer(A.colorSpace)!==pe,A.matrixAutoUpdate===!0&&A.updateMatrix(),f.material.uniforms.uvTransform.value.copy(A.matrix),(g!==A||x!==A.version||m!==n.toneMapping)&&(f.material.needsUpdate=!0,g=A,x=A.version,m=n.toneMapping),f.layers.enableAll(),N.unshift(f,f.geometry,f.material,0,0,null))}function S(N,z){N.getRGB(ma,Vl(n)),e.buffers.color.setClear(ma.r,ma.g,ma.b,z,a)}function _(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return c},setClearColor:function(N,z=1){c.set(N),u=z,S(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(N){u=N,S(c,u)},render:T,addToRenderList:P,dispose:_}}function Lm(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=m(null),a=r,c=!1;function u(X,Y,j,k,$){let nt=!1,tt=x(X,k,j,Y);a!==tt&&(a=tt,d(a.object)),nt=v(X,k,j,$),nt&&T(X,k,j,$),$!==null&&t.update($,n.ELEMENT_ARRAY_BUFFER),(nt||c)&&(c=!1,A(X,Y,j,k),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function f(){return n.createVertexArray()}function d(X){return n.bindVertexArray(X)}function g(X){return n.deleteVertexArray(X)}function x(X,Y,j,k){let $=k.wireframe===!0,nt=i[Y.id];nt===void 0&&(nt={},i[Y.id]=nt);let tt=X.isInstancedMesh===!0?X.id:0,pt=nt[tt];pt===void 0&&(pt={},nt[tt]=pt);let et=pt[j.id];et===void 0&&(et={},pt[j.id]=et);let ut=et[$];return ut===void 0&&(ut=m(f()),et[$]=ut),ut}function m(X){let Y=[],j=[],k=[];for(let $=0;$<e;$++)Y[$]=0,j[$]=0,k[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:j,attributeDivisors:k,object:X,attributes:{},index:null}}function v(X,Y,j,k){let $=a.attributes,nt=Y.attributes,tt=0,pt=j.getAttributes();for(let et in pt)if(pt[et].location>=0){let ft=$[et],Ft=nt[et];if(Ft===void 0&&(et==="instanceMatrix"&&X.instanceMatrix&&(Ft=X.instanceMatrix),et==="instanceColor"&&X.instanceColor&&(Ft=X.instanceColor)),ft===void 0||ft.attribute!==Ft||Ft&&ft.data!==Ft.data)return!0;tt++}return a.attributesNum!==tt||a.index!==k}function T(X,Y,j,k){let $={},nt=Y.attributes,tt=0,pt=j.getAttributes();for(let et in pt)if(pt[et].location>=0){let ft=nt[et];ft===void 0&&(et==="instanceMatrix"&&X.instanceMatrix&&(ft=X.instanceMatrix),et==="instanceColor"&&X.instanceColor&&(ft=X.instanceColor));let Ft={};Ft.attribute=ft,ft&&ft.data&&(Ft.data=ft.data),$[et]=Ft,tt++}a.attributes=$,a.attributesNum=tt,a.index=k}function P(){let X=a.newAttributes;for(let Y=0,j=X.length;Y<j;Y++)X[Y]=0}function S(X){_(X,0)}function _(X,Y){let j=a.newAttributes,k=a.enabledAttributes,$=a.attributeDivisors;j[X]=1,k[X]===0&&(n.enableVertexAttribArray(X),k[X]=1),$[X]!==Y&&(n.vertexAttribDivisor(X,Y),$[X]=Y)}function N(){let X=a.newAttributes,Y=a.enabledAttributes;for(let j=0,k=Y.length;j<k;j++)Y[j]!==X[j]&&(n.disableVertexAttribArray(j),Y[j]=0)}function z(X,Y,j,k,$,nt,tt){tt===!0?n.vertexAttribIPointer(X,Y,j,$,nt):n.vertexAttribPointer(X,Y,j,k,$,nt)}function A(X,Y,j,k){P();let $=k.attributes,nt=j.getAttributes(),tt=Y.defaultAttributeValues;for(let pt in nt){let et=nt[pt];if(et.location>=0){let ut=$[pt];if(ut===void 0&&(pt==="instanceMatrix"&&X.instanceMatrix&&(ut=X.instanceMatrix),pt==="instanceColor"&&X.instanceColor&&(ut=X.instanceColor)),ut!==void 0){let ft=ut.normalized,Ft=ut.itemSize,Lt=t.get(ut);if(Lt===void 0)continue;let Jt=Lt.buffer,Xt=Lt.type,ee=Lt.bytesPerElement,it=Xt===n.INT||Xt===n.UNSIGNED_INT||ut.gpuType===Io;if(ut.isInterleavedBufferAttribute){let ht=ut.data,Rt=ht.stride,Yt=ut.offset;if(ht.isInstancedInterleavedBuffer){for(let Et=0;Et<et.locationSize;Et++)_(et.location+Et,ht.meshPerAttribute);X.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Et=0;Et<et.locationSize;Et++)S(et.location+Et);n.bindBuffer(n.ARRAY_BUFFER,Jt);for(let Et=0;Et<et.locationSize;Et++)z(et.location+Et,Ft/et.locationSize,Xt,ft,Rt*ee,(Yt+Ft/et.locationSize*Et)*ee,it)}else{if(ut.isInstancedBufferAttribute){for(let ht=0;ht<et.locationSize;ht++)_(et.location+ht,ut.meshPerAttribute);X.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let ht=0;ht<et.locationSize;ht++)S(et.location+ht);n.bindBuffer(n.ARRAY_BUFFER,Jt);for(let ht=0;ht<et.locationSize;ht++)z(et.location+ht,Ft/et.locationSize,Xt,ft,Ft*ee,Ft/et.locationSize*ht*ee,it)}}else if(tt!==void 0){let ft=tt[pt];if(ft!==void 0)switch(ft.length){case 2:n.vertexAttrib2fv(et.location,ft);break;case 3:n.vertexAttrib3fv(et.location,ft);break;case 4:n.vertexAttrib4fv(et.location,ft);break;default:n.vertexAttrib1fv(et.location,ft)}}}}N()}function R(){C();for(let X in i){let Y=i[X];for(let j in Y){let k=Y[j];for(let $ in k){let nt=k[$];for(let tt in nt)g(nt[tt].object),delete nt[tt];delete k[$]}}delete i[X]}}function I(X){if(i[X.id]===void 0)return;let Y=i[X.id];for(let j in Y){let k=Y[j];for(let $ in k){let nt=k[$];for(let tt in nt)g(nt[tt].object),delete nt[tt];delete k[$]}}delete i[X.id]}function U(X){for(let Y in i){let j=i[Y];for(let k in j){let $=j[k];if($[X.id]===void 0)continue;let nt=$[X.id];for(let tt in nt)g(nt[tt].object),delete nt[tt];delete $[X.id]}}}function b(X){for(let Y in i){let j=i[Y],k=X.isInstancedMesh===!0?X.id:0,$=j[k];if($!==void 0){for(let nt in $){let tt=$[nt];for(let pt in tt)g(tt[pt].object),delete tt[pt];delete $[nt]}delete j[k],Object.keys(j).length===0&&delete i[Y]}}}function C(){B(),c=!0,a!==r&&(a=r,d(a.object))}function B(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:u,reset:C,resetDefaultState:B,dispose:R,releaseStatesOfGeometry:I,releaseStatesOfObject:b,releaseStatesOfProgram:U,initAttributes:P,enableAttribute:S,disableUnusedAttributes:N}}function Nm(n,t,e){let i;function r(f){i=f}function a(f,d){n.drawArrays(i,f,d),e.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawArraysInstanced(i,f,d,g),e.update(d,i,g))}function u(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,f,0,d,0,g);let m=0;for(let v=0;v<g;v++)m+=d[v];e.update(m,i,1)}this.setMode=r,this.render=a,this.renderInstances=c,this.renderMultiDraw=u}function Dm(n,t,e,i){let r;function a(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let U=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function c(U){return!(U!==xn&&i.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(U){let b=U===Cn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==tn&&U!==Pn&&!b&&i.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function f(U){if(U==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=e.precision!==void 0?e.precision:"highp",g=f(d);g!==d&&(Wt("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);let x=e.logarithmicDepthBuffer===!0,m=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&m===!1&&Wt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let v=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),T=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),P=n.getParameter(n.MAX_TEXTURE_SIZE),S=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),N=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),z=n.getParameter(n.MAX_VARYING_VECTORS),A=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=n.getParameter(n.MAX_SAMPLES),I=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:u,precision:d,logarithmicDepthBuffer:x,reversedDepthBuffer:m,maxTextures:v,maxVertexTextures:T,maxTextureSize:P,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:N,maxVaryings:z,maxFragmentUniforms:A,maxSamples:R,samples:I}}function Om(n){let t=this,e=null,i=0,r=!1,a=!1,c=new an,u=new Kt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(x,m){let v=x.length!==0||m||i!==0||r;return r=m,i=x.length,v},this.beginShadows=function(){a=!0,g(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(x,m){e=g(x,m,0)},this.setState=function(x,m,v){let T=x.clippingPlanes,P=x.clipIntersection,S=x.clipShadows,_=n.get(x);if(!r||T===null||T.length===0||a&&!S)a?g(null):d();else{let N=a?0:i,z=N*4,A=_.clippingState||null;f.value=A,A=g(T,m,z,v);for(let R=0;R!==z;++R)A[R]=e[R];_.clippingState=A,this.numIntersection=P?this.numPlanes:0,this.numPlanes+=N}};function d(){f.value!==e&&(f.value=e,f.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function g(x,m,v,T){let P=x!==null?x.length:0,S=null;if(P!==0){if(S=f.value,T!==!0||S===null){let _=v+P*4,N=m.matrixWorldInverse;u.getNormalMatrix(N),(S===null||S.length<_)&&(S=new Float32Array(_));for(let z=0,A=v;z!==P;++z,A+=4)c.copy(x[z]).applyMatrix4(N,u),c.normal.toArray(S,A),S[A+3]=c.constant}f.value=S,f.needsUpdate=!0}return t.numPlanes=P,t.numIntersection=0,S}}var bs=4,Um=6,Fm=20,Bm=256,hr=new ps,kh=new ae,Wl=null,Yl=0,ql=0,Zl=!1,zm=new J,Di=new J,_a=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,r=100,a={}){let{size:c=256,position:u=zm}=a;Wl=this._renderer.getRenderTarget(),Yl=this._renderer.getActiveCubeFace(),ql=this._renderer.getActiveMipmapLevel(),Zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);let f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(t,i,r,f,u),e>0&&this._blur(f,0,0,e),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Wl,Yl,ql),this._renderer.xr.enabled=Zl,t.scissorTest=!1,Ms(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_i||t.mapping===Li?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wl=this._renderer.getRenderTarget(),Yl=this._renderer.getActiveCubeFace(),ql=this._renderer.getActiveMipmapLevel(),Zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Fe,minFilter:Fe,generateMipmaps:!1,type:Cn,format:xn,colorSpace:Bs,depthBuffer:!1},r=Vh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vh(t,e,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=km(a)),this._blurMaterial=Gm(a,t,e),this._ggxMaterial=Vm(a,t,e)}return r}_compileMaterial(t){let e=new Xe(new _n,t);this._renderer.compile(e,hr)}_sceneToCubeUV(t,e,i,r,a){let f=new Ge(90,1,e,i),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,m=x.autoClear,v=x.toneMapping;x.getClearColor(kh),x.toneMapping=wn,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(r),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Xe(new Jn,new Ws({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1})));let P=this._backgroundBox,S=P.material,_=!1,N=t.background;N?N.isColor&&(S.color.copy(N),t.background=null,_=!0):(S.color.copy(kh),_=!0);for(let z=0;z<6;z++){let A=z%3;A===0?(f.up.set(0,d[z],0),f.position.set(a.x,a.y,a.z),f.lookAt(a.x+g[z],a.y,a.z)):A===1?(f.up.set(0,0,d[z]),f.position.set(a.x,a.y,a.z),f.lookAt(a.x,a.y+g[z],a.z)):(f.up.set(0,d[z],0),f.position.set(a.x,a.y,a.z),f.lookAt(a.x,a.y,a.z+g[z]));let R=this._cubeSize;Ms(r,A*R,z>2?R:0,R,R),x.setRenderTarget(r),_&&x.render(P,f),x.render(t,f)}x.toneMapping=v,x.autoClear=m,t.background=N}_textureToCubeUV(t,e){let i=this._renderer,r=t.mapping===_i||t.mapping===Li;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gh());let a=r?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=a;let u=a.uniforms;u.envMap.value=t;let f=this._cubeSize;Ms(e,0,0,3*f,2*f),i.setRenderTarget(e),i.render(c,hr)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(t,a-1,a);e.autoClear=i}_applyGGXFilter(t,e,i){let r=this._renderer,a=this._pingPongRenderTarget,c=this._ggxMaterial,u=this._lodMeshes[i];u.material=c;let f=c.uniforms,d=i/(this._lodMeshes.length-1),g=e/(this._lodMeshes.length-1),x=Math.sqrt(d*d-g*g),m=d*1.25,v=x*m,{_lodMax:T}=this,P=this._sizeLods[i],S=3*P*(i>T-bs?i-T+bs:0),_=4*(this._cubeSize-P);f.envMap.value=t.texture,f.roughness.value=v,f.mipInt.value=T-e,Ms(a,S,_,3*P,2*P),r.setRenderTarget(a),r.render(u,hr),f.envMap.value=a.texture,f.roughness.value=0,f.mipInt.value=T-i,Ms(t,S,_,3*P,2*P),r.setRenderTarget(t),r.render(u,hr)}_blur(t,e,i,r){let a=this._pingPongRenderTarget,c=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,a,e,i,c),this._blurPass(a,t,i,i,c)}_blurPass(t,e,i,r,a){let c=this._renderer,u=this._blurMaterial,f=this._lodMeshes[r];f.material=u;let d=u.uniforms;d.envMap.value=t.texture,d.sigma.value=a,d.mipInt.value=this._lodMax-i;let g=this._sizeLods[r],x=3*g*(r>this._lodMax-bs?r-this._lodMax+bs:0),m=4*(this._cubeSize-g);Ms(e,x,m,3*g,2*g),c.setRenderTarget(e),c.render(f,hr)}};function km(n){let t=[],e=[],i=n,r=n-bs+1+Um;for(let a=0;a<r;a++){let c=Math.pow(2,i);t.push(c);let u=1/(c-2),f=-u,d=1+u,g=[f,f,d,f,d,d,f,f,d,d,f,d],x=6,m=6,v=3,T=new Float32Array(v*m*x),P=new Float32Array(v*m*x);for(let _=0;_<x;_++){let N=_%3*2/3-1,z=_>2?0:-1,A=[N,z,0,N+2/3,z,0,N+2/3,z+1,0,N,z,0,N+2/3,z+1,0,N,z+1,0];T.set(A,v*m*_);for(let R=0;R<m;R++){let I=g[R*2]*2-1,U=g[R*2+1]*2-1;_===0?Di.set(1,U,I):_===1?Di.set(-I,1,-U):_===2?Di.set(-I,U,1):_===3?Di.set(-1,U,-I):_===4?Di.set(-I,-1,U):Di.set(I,U,-1),Di.toArray(P,(_*m+R)*v)}}let S=new _n;S.setAttribute("position",new gn(T,v)),S.setAttribute("outputDirection",new gn(P,v)),e.push(new Xe(S,null)),i>bs&&i--}return{lodMeshes:e,sizeLods:t}}function Vh(n,t,e){let i=new Qe(n,t,e);return i.texture.mapping=nr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ms(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function Vm(n,t,e){return new cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Bm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ya(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Gm(n,t,e){return new cn({name:"SphericalGaussianBlur",defines:{SAMPLES:Fm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ya(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Gh(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ya(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function Hh(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function ya(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var xa=class extends Qe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Ys(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Jn(5,5,5),a=new cn({name:"CubemapFromEquirect",uniforms:Ni(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ze,blending:On});a.uniforms.tEquirect.value=e;let c=new Xe(r,a),u=e.minFilter;return e.minFilter===xi&&(e.minFilter=Fe),new Eo(1,10,this).update(t,c),e.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){let a=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(e,i,r);t.setRenderTarget(a)}};function Hm(n){let t=new WeakMap,e=new WeakMap,i=null;function r(m,v=!1){return m==null?null:v?c(m):a(m)}function a(m){if(m&&m.isTexture){let v=m.mapping;if(v===Ao||v===Po)if(t.has(m)){let T=t.get(m).texture;return u(T,m.mapping)}else{let T=m.image;if(T&&T.height>0){let P=new xa(T.height);return P.fromEquirectangularTexture(n,m),t.set(m,P),m.addEventListener("dispose",d),u(P.texture,m.mapping)}else return null}}return m}function c(m){if(m&&m.isTexture){let v=m.mapping,T=v===Ao||v===Po,P=v===_i||v===Li;if(T||P){let S=e.get(m),_=S!==void 0?S.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==_)return i===null&&(i=new _a(n)),S=T?i.fromEquirectangular(m,S):i.fromCubemap(m,S),S.texture.pmremVersion=m.pmremVersion,e.set(m,S),S.texture;if(S!==void 0)return S.texture;{let N=m.image;return T&&N&&N.height>0||P&&N&&f(N)?(i===null&&(i=new _a(n)),S=T?i.fromEquirectangular(m):i.fromCubemap(m),S.texture.pmremVersion=m.pmremVersion,e.set(m,S),m.addEventListener("dispose",g),S.texture):null}}}return m}function u(m,v){return v===Ao?m.mapping=_i:v===Po&&(m.mapping=Li),m}function f(m){let v=0,T=6;for(let P=0;P<T;P++)m[P]!==void 0&&v++;return v===T}function d(m){let v=m.target;v.removeEventListener("dispose",d);let T=t.get(v);T!==void 0&&(t.delete(v),T.dispose())}function g(m){let v=m.target;v.removeEventListener("dispose",g);let T=e.get(v);T!==void 0&&(e.delete(v),T.dispose())}function x(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:x}}function Xm(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let r=n.getExtension(i);return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let r=e(i);return r===null&&Pi("WebGLRenderer: "+i+" extension not supported."),r}}}function Wm(n,t,e,i){let r={},a=new WeakMap;function c(x){let m=x.target;m.index!==null&&t.remove(m.index);for(let T in m.attributes)t.remove(m.attributes[T]);m.removeEventListener("dispose",c),delete r[m.id];let v=a.get(m);v&&(t.remove(v),a.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function u(x,m){return r[m.id]===!0||(m.addEventListener("dispose",c),r[m.id]=!0,e.memory.geometries++),m}function f(x){let m=x.attributes;for(let v in m)t.update(m[v],n.ARRAY_BUFFER)}function d(x){let m=[],v=x.index,T=x.attributes.position,P=0;if(T===void 0)return;if(v!==null){let N=v.array;P=v.version;for(let z=0,A=N.length;z<A;z+=3){let R=N[z+0],I=N[z+1],U=N[z+2];m.push(R,I,I,U,U,R)}}else{let N=T.array;P=T.version;for(let z=0,A=N.length/3-1;z<A;z+=3){let R=z+0,I=z+1,U=z+2;m.push(R,I,I,U,U,R)}}let S=new(T.count>=65535?Xs:Hs)(m,1);S.version=P;let _=a.get(x);_&&t.remove(_),a.set(x,S)}function g(x){let m=a.get(x);if(m){let v=x.index;v!==null&&m.version<v.version&&d(x)}else d(x);return a.get(x)}return{get:u,update:f,getWireframeAttribute:g}}function Ym(n,t,e){let i;function r(x){i=x}let a,c;function u(x){a=x.type,c=x.bytesPerElement}function f(x,m){n.drawElements(i,m,a,x*c),e.update(m,i,1)}function d(x,m,v){v!==0&&(n.drawElementsInstanced(i,m,a,x*c,v),e.update(m,i,v))}function g(x,m,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,a,x,0,v);let P=0;for(let S=0;S<v;S++)P+=m[S];e.update(P,i,1)}this.setMode=r,this.setIndex=u,this.render=f,this.renderInstances=d,this.renderMultiDraw=g}function qm(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,c,u){switch(e.calls++,c){case n.TRIANGLES:e.triangles+=u*(a/3);break;case n.LINES:e.lines+=u*(a/2);break;case n.LINE_STRIP:e.lines+=u*(a-1);break;case n.LINE_LOOP:e.lines+=u*a;break;case n.POINTS:e.points+=u*a;break;default:qt("WebGLInfo: Unknown draw mode:",c);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function Zm(n,t,e){let i=new WeakMap,r=new we;function a(c,u,f){let d=c.morphTargetInfluences,g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,x=g!==void 0?g.length:0,m=i.get(u);if(m===void 0||m.count!==x){let C=function(){U.dispose(),i.delete(u),u.removeEventListener("dispose",C)};m!==void 0&&m.texture.dispose();let v=u.morphAttributes.position!==void 0,T=u.morphAttributes.normal!==void 0,P=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],_=u.morphAttributes.normal||[],N=u.morphAttributes.color||[],z=0;v===!0&&(z=1),T===!0&&(z=2),P===!0&&(z=3);let A=u.attributes.position.count*z,R=1;A>t.maxTextureSize&&(R=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);let I=new Float32Array(A*R*4*x),U=new Vs(I,A,R,x);U.type=Pn,U.needsUpdate=!0;let b=z*4;for(let B=0;B<x;B++){let X=S[B],Y=_[B],j=N[B],k=A*R*4*B;for(let $=0;$<X.count;$++){let nt=$*b;v===!0&&(r.fromBufferAttribute(X,$),I[k+nt+0]=r.x,I[k+nt+1]=r.y,I[k+nt+2]=r.z,I[k+nt+3]=0),T===!0&&(r.fromBufferAttribute(Y,$),I[k+nt+4]=r.x,I[k+nt+5]=r.y,I[k+nt+6]=r.z,I[k+nt+7]=0),P===!0&&(r.fromBufferAttribute(j,$),I[k+nt+8]=r.x,I[k+nt+9]=r.y,I[k+nt+10]=r.z,I[k+nt+11]=j.itemSize===4?r.w:1)}}m={count:x,texture:U,size:new Zt(A,R)},i.set(u,m),u.addEventListener("dispose",C)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(n,"morphTexture",c.morphTexture,e);else{let v=0;for(let P=0;P<d.length;P++)v+=d[P];let T=u.morphTargetsRelative?1:1-v;f.getUniforms().setValue(n,"morphTargetBaseInfluence",T),f.getUniforms().setValue(n,"morphTargetInfluences",d)}f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,e),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}return{update:a}}function Jm(n,t,e,i,r){let a=new WeakMap;function c(d){let g=r.render.frame,x=d.geometry,m=t.get(d,x);if(a.get(m)!==g&&(t.update(m),a.set(m,g)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),a.get(d)!==g&&(e.update(d.instanceMatrix,n.ARRAY_BUFFER),d.instanceColor!==null&&e.update(d.instanceColor,n.ARRAY_BUFFER),a.set(d,g))),d.isSkinnedMesh){let v=d.skeleton;a.get(v)!==g&&(v.update(),a.set(v,g))}return m}function u(){a=new WeakMap}function f(d){let g=d.target;g.removeEventListener("dispose",f),i.releaseStatesOfObject(g),e.remove(g.instanceMatrix),g.instanceColor!==null&&e.remove(g.instanceColor)}return{update:c,dispose:u}}var $m={[Ml]:"LINEAR_TONE_MAPPING",[bl]:"REINHARD_TONE_MAPPING",[Tl]:"CINEON_TONE_MAPPING",[El]:"ACES_FILMIC_TONE_MAPPING",[Al]:"AGX_TONE_MAPPING",[Pl]:"NEUTRAL_TONE_MAPPING",[wl]:"CUSTOM_TONE_MAPPING"};function Km(n,t,e,i,r,a){let c=new Qe(t,e,{type:n,depthBuffer:r,stencilBuffer:a,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),u=null,f=null,d=new _n;d.setAttribute("position",new Ke([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Ke([0,2,0,0,2,0],2));let g=new ho({uniforms:{tDiffuse:{value:null}},vertexShader:`
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

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

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

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),x=new Xe(d,g),m=new ps(-1,1,1,-1,0,1),v=null,T=null,P=!1,S,_=null,N=[],z=!1;this.setSize=function(A,R){c.setSize(A,R),u!==null&&u.setSize(A,R),f!==null&&f.setSize(A,R);for(let I=0;I<N.length;I++){let U=N[I];U.setSize&&U.setSize(A,R)}},this.setEffects=function(A){N=A,z=N.length>0&&N[0].isRenderPass===!0;let R=c.width,I=c.height;N.length>0&&u===null&&(u=new Qe(R,I,{type:Cn,depthBuffer:!1,stencilBuffer:!1}),f=new Qe(R,I,{type:Cn,depthBuffer:!1,stencilBuffer:!1}));for(let U=0;U<N.length;U++){let b=N[U];b.setSize&&b.setSize(R,I)}},this.begin=function(A,R){if(P||A.toneMapping===wn&&N.length===0)return!1;if(_=R,R!==null){let I=R.width,U=R.height;(c.width!==I||c.height!==U)&&this.setSize(I,U)}return z===!1&&A.setRenderTarget(c),S=A.toneMapping,A.toneMapping=wn,!0},this.hasRenderPass=function(){return z},this.end=function(A,R){A.toneMapping=S,P=!0;let I=c,U=u;for(let b=0;b<N.length;b++){let C=N[b];C.enabled!==!1&&(C.render(A,U,I,R),C.needsSwap!==!1&&(I=U,U=U===u?f:u))}if(v!==A.outputColorSpace||T!==A.toneMapping){v=A.outputColorSpace,T=A.toneMapping,g.defines={},le.getTransfer(v)===pe&&(g.defines.SRGB_TRANSFER="");let b=$m[T];b&&(g.defines[b]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=I.texture,A.setRenderTarget(_),A.render(x,m),_=null,P=!1},this.isCompositing=function(){return P},this.dispose=function(){c.dispose(),u!==null&&u.dispose(),f!==null&&f.dispose(),d.dispose(),g.dispose()}}var cu=new je,Kl=new hi(1,1),hu=new Vs,uu=new ao,fu=new Ys,Xh=[],Wh=[],Yh=new Float32Array(16),qh=new Float32Array(9),Zh=new Float32Array(4);function Es(n,t,e){let i=n[0];if(i<=0||i>0)return n;let r=t*e,a=Xh[r];if(a===void 0&&(a=new Float32Array(r),Xh[r]=a),t!==0){i.toArray(a,0);for(let c=1,u=0;c!==t;++c)u+=e,n[c].toArray(a,u)}return a}function Re(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Le(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Sa(n,t){let e=Wh[t];e===void 0&&(e=new Int32Array(t),Wh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function jm(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Qm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2fv(this.addr,t),Le(e,t)}}function tg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;n.uniform3fv(this.addr,t),Le(e,t)}}function eg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4fv(this.addr,t),Le(e,t)}}function ng(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(Re(e,i))return;Zh.set(i),n.uniformMatrix2fv(this.addr,!1,Zh),Le(e,i)}}function ig(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(Re(e,i))return;qh.set(i),n.uniformMatrix3fv(this.addr,!1,qh),Le(e,i)}}function sg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(Re(e,i))return;Yh.set(i),n.uniformMatrix4fv(this.addr,!1,Yh),Le(e,i)}}function rg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function og(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2iv(this.addr,t),Le(e,t)}}function ag(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;n.uniform3iv(this.addr,t),Le(e,t)}}function lg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4iv(this.addr,t),Le(e,t)}}function cg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function hg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2uiv(this.addr,t),Le(e,t)}}function ug(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;n.uniform3uiv(this.addr,t),Le(e,t)}}function fg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4uiv(this.addr,t),Le(e,t)}}function dg(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let a;this.type===n.SAMPLER_2D_SHADOW?(Kl.compareFunction=e.isReversedDepthBuffer()?pa:da,a=Kl):a=cu,e.setTexture2D(t||a,r)}function pg(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||uu,r)}function mg(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||fu,r)}function gg(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||hu,r)}function _g(n){switch(n){case 5126:return jm;case 35664:return Qm;case 35665:return tg;case 35666:return eg;case 35674:return ng;case 35675:return ig;case 35676:return sg;case 5124:case 35670:return rg;case 35667:case 35671:return og;case 35668:case 35672:return ag;case 35669:case 35673:return lg;case 5125:return cg;case 36294:return hg;case 36295:return ug;case 36296:return fg;case 35678:case 36198:case 36298:case 36306:case 35682:return dg;case 35679:case 36299:case 36307:return pg;case 35680:case 36300:case 36308:case 36293:return mg;case 36289:case 36303:case 36311:case 36292:return gg}}function xg(n,t){n.uniform1fv(this.addr,t)}function vg(n,t){let e=Es(t,this.size,2);n.uniform2fv(this.addr,e)}function yg(n,t){let e=Es(t,this.size,3);n.uniform3fv(this.addr,e)}function Sg(n,t){let e=Es(t,this.size,4);n.uniform4fv(this.addr,e)}function Mg(n,t){let e=Es(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function bg(n,t){let e=Es(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Tg(n,t){let e=Es(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Eg(n,t){n.uniform1iv(this.addr,t)}function wg(n,t){n.uniform2iv(this.addr,t)}function Ag(n,t){n.uniform3iv(this.addr,t)}function Pg(n,t){n.uniform4iv(this.addr,t)}function Cg(n,t){n.uniform1uiv(this.addr,t)}function Ig(n,t){n.uniform2uiv(this.addr,t)}function Rg(n,t){n.uniform3uiv(this.addr,t)}function Lg(n,t){n.uniform4uiv(this.addr,t)}function Ng(n,t,e){let i=this.cache,r=t.length,a=Sa(e,r);Re(i,a)||(n.uniform1iv(this.addr,a),Le(i,a));let c;this.type===n.SAMPLER_2D_SHADOW?c=Kl:c=cu;for(let u=0;u!==r;++u)e.setTexture2D(t[u]||c,a[u])}function Dg(n,t,e){let i=this.cache,r=t.length,a=Sa(e,r);Re(i,a)||(n.uniform1iv(this.addr,a),Le(i,a));for(let c=0;c!==r;++c)e.setTexture3D(t[c]||uu,a[c])}function Og(n,t,e){let i=this.cache,r=t.length,a=Sa(e,r);Re(i,a)||(n.uniform1iv(this.addr,a),Le(i,a));for(let c=0;c!==r;++c)e.setTextureCube(t[c]||fu,a[c])}function Ug(n,t,e){let i=this.cache,r=t.length,a=Sa(e,r);Re(i,a)||(n.uniform1iv(this.addr,a),Le(i,a));for(let c=0;c!==r;++c)e.setTexture2DArray(t[c]||hu,a[c])}function Fg(n){switch(n){case 5126:return xg;case 35664:return vg;case 35665:return yg;case 35666:return Sg;case 35674:return Mg;case 35675:return bg;case 35676:return Tg;case 5124:case 35670:return Eg;case 35667:case 35671:return wg;case 35668:case 35672:return Ag;case 35669:case 35673:return Pg;case 5125:return Cg;case 36294:return Ig;case 36295:return Rg;case 36296:return Lg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ng;case 35679:case 36299:case 36307:return Dg;case 35680:case 36300:case 36308:case 36293:return Og;case 36289:case 36303:case 36311:case 36292:return Ug}}var jl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=_g(e.type)}},Ql=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Fg(e.type)}},tc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let r=this.seq;for(let a=0,c=r.length;a!==c;++a){let u=r[a];u.setValue(t,e[u.id],i)}}},Jl=/(\w+)(\])?(\[|\.)?/g;function Jh(n,t){n.seq.push(t),n.map[t.id]=t}function Bg(n,t,e){let i=n.name,r=i.length;for(Jl.lastIndex=0;;){let a=Jl.exec(i),c=Jl.lastIndex,u=a[1],f=a[2]==="]",d=a[3];if(f&&(u=u|0),d===void 0||d==="["&&c+2===r){Jh(e,d===void 0?new jl(u,n,t):new Ql(u,n,t));break}else{let x=e.map[u];x===void 0&&(x=new tc(u),Jh(e,x)),e=x}}}var Ts=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){let u=t.getActiveUniform(e,c),f=t.getUniformLocation(e,u.name);Bg(u,f,this)}let r=[],a=[];for(let c of this.seq)c.type===t.SAMPLER_2D_SHADOW||c.type===t.SAMPLER_CUBE_SHADOW||c.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(c):a.push(c);r.length>0&&(this.seq=r.concat(a))}setValue(t,e,i,r){let a=this.map[e];a!==void 0&&a.setValue(t,i,r)}setOptional(t,e,i){let r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let a=0,c=e.length;a!==c;++a){let u=e[a],f=i[u.id];f.needsUpdate!==!1&&u.setValue(t,f.value,r)}}static seqWithValue(t,e){let i=[];for(let r=0,a=t.length;r!==a;++r){let c=t[r];c.id in e&&i.push(c)}return i}};function $h(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var zg=37297,kg=0;function Vg(n,t){let e=n.split(`
`),i=[],r=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let c=r;c<a;c++){let u=c+1;i.push(`${u===t?">":" "} ${u}: ${e[c]}`)}return i.join(`
`)}var Kh=new Kt;function Gg(n){le._getMatrix(Kh,le.workingColorSpace,n);let t=`mat3( ${Kh.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(n)){case zs:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return Wt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function jh(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),a=(n.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let c=/ERROR: 0:(\d+)/.exec(a);if(c){let u=parseInt(c[1]);return e.toUpperCase()+`

`+a+`

`+Vg(n.getShaderSource(t),u)}else return a}function Hg(n,t){let e=Gg(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Xg={[Ml]:"Linear",[bl]:"Reinhard",[Tl]:"Cineon",[El]:"ACESFilmic",[Al]:"AgX",[Pl]:"Neutral",[wl]:"Custom"};function Wg(n,t){let e=Xg[t];return e===void 0?(Wt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ga=new J;function Yg(){le.getLuminanceCoefficients(ga);let n=ga.x.toFixed(4),t=ga.y.toFixed(4),e=ga.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fr).join(`
`)}function Zg(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Jg(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let a=n.getActiveAttrib(t,r),c=a.name,u=1;a.type===n.FLOAT_MAT2&&(u=2),a.type===n.FLOAT_MAT3&&(u=3),a.type===n.FLOAT_MAT4&&(u=4),e[c]={type:a.type,location:n.getAttribLocation(t,c),locationSize:u}}return e}function fr(n){return n!==""}function Qh(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function tu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var $g=/^[ \t]*#include +<([\w\d./]+)>/gm;function ec(n){return n.replace($g,jg)}var Kg=new Map;function jg(n,t){let e=se[t];if(e===void 0){let i=Kg.get(t);if(i!==void 0)e=se[i],Wt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ec(e)}var Qg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eu(n){return n.replace(Qg,t0)}function t0(n,t,e,i){let r="";for(let a=parseInt(t);a<parseInt(e);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function nu(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var e0={[er]:"SHADOWMAP_TYPE_PCF",[_s]:"SHADOWMAP_TYPE_VSM"};function n0(n){return e0[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var i0={[_i]:"ENVMAP_TYPE_CUBE",[Li]:"ENVMAP_TYPE_CUBE",[nr]:"ENVMAP_TYPE_CUBE_UV"};function s0(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":i0[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var r0={[Li]:"ENVMAP_MODE_REFRACTION"};function o0(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":r0[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var a0={[Sl]:"ENVMAP_BLENDING_MULTIPLY",[vh]:"ENVMAP_BLENDING_MIX",[yh]:"ENVMAP_BLENDING_ADD"};function l0(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":a0[n.combine]||"ENVMAP_BLENDING_NONE"}function c0(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function h0(n,t,e,i){let r=n.getContext(),a=e.defines,c=e.vertexShader,u=e.fragmentShader,f=n0(e),d=s0(e),g=o0(e),x=l0(e),m=c0(e),v=qg(e),T=Zg(a),P=r.createProgram(),S,_,N=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(S=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,T].filter(fr).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,T].filter(fr).join(`
`),_.length>0&&(_+=`
`)):(S=[nu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,T,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+g:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+f:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fr).join(`
`),_=[nu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,T,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.envMap?"#define "+g:"",e.envMap?"#define "+x:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+f:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wn?"#define TONE_MAPPING":"",e.toneMapping!==wn?se.tonemapping_pars_fragment:"",e.toneMapping!==wn?Wg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,Hg("linearToOutputTexel",e.outputColorSpace),Yg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fr).join(`
`)),c=ec(c),c=Qh(c,e),c=tu(c,e),u=ec(u),u=Qh(u,e),u=tu(u,e),c=eu(c),u=eu(u),e.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,S=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",e.glslVersion===Fl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let z=N+S+c,A=N+_+u,R=$h(r,r.VERTEX_SHADER,z),I=$h(r,r.FRAGMENT_SHADER,A);r.attachShader(P,R),r.attachShader(P,I),e.index0AttributeName!==void 0?r.bindAttribLocation(P,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(P,0,"position"),r.linkProgram(P);function U(X){if(n.debug.checkShaderErrors){let Y=r.getProgramInfoLog(P)||"",j=r.getShaderInfoLog(R)||"",k=r.getShaderInfoLog(I)||"",$=Y.trim(),nt=j.trim(),tt=k.trim(),pt=!0,et=!0;if(r.getProgramParameter(P,r.LINK_STATUS)===!1)if(pt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,P,R,I);else{let ut=jh(r,R,"vertex"),ft=jh(r,I,"fragment");qt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(P,r.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+$+`
`+ut+`
`+ft)}else $!==""?Wt("WebGLProgram: Program Info Log:",$):(nt===""||tt==="")&&(et=!1);et&&(X.diagnostics={runnable:pt,programLog:$,vertexShader:{log:nt,prefix:S},fragmentShader:{log:tt,prefix:_}})}r.deleteShader(R),r.deleteShader(I),b=new Ts(r,P),C=Jg(r,P)}let b;this.getUniforms=function(){return b===void 0&&U(this),b};let C;this.getAttributes=function(){return C===void 0&&U(this),C};let B=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=r.getProgramParameter(P,zg)),B},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(P),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=kg++,this.cacheKey=t,this.usedTimes=1,this.program=P,this.vertexShader=R,this.fragmentShader=I,this}var u0=0,nc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new ic(t),e.set(t,i)),i}},ic=class{constructor(t){this.id=u0++,this.code=t,this.usedTimes=0}};function f0(n){return n===yi||n===lr||n===cr}function d0(n,t,e,i,r,a){let c=new hs,u=new nc,f=new Set,d=[],g=new Map,x=i.logarithmicDepthBuffer,m=i.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return f.add(b),b===0?"uv":`uv${b}`}function P(b,C,B,X,Y,j){let k=X.fog,$=Y.geometry,nt=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?X.environment:null,tt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,pt=t.get(b.envMap||nt,tt),et=pt&&pt.mapping===nr?pt.image.height:null,ut=v[b.type];b.precision!==null&&(m=i.getMaxPrecision(b.precision),m!==b.precision&&Wt("WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));let ft=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ft=ft!==void 0?ft.length:0,Lt=0;$.morphAttributes.position!==void 0&&(Lt=1),$.morphAttributes.normal!==void 0&&(Lt=2),$.morphAttributes.color!==void 0&&(Lt=3);let Jt,Xt,ee,it;if(ut){let _e=Fn[ut];Jt=_e.vertexShader,Xt=_e.fragmentShader}else{Jt=b.vertexShader,Xt=b.fragmentShader;let _e=u.getVertexShaderStage(b),he=u.getFragmentShaderStage(b);u.update(b,_e,he),ee=_e.id,it=he.id}let ht=n.getRenderTarget(),Rt=n.state.buffers.depth.getReversed(),Yt=Y.isInstancedMesh===!0,Et=Y.isBatchedMesh===!0,Qt=!!b.map,Me=!!b.matcap,te=!!pt,ce=!!b.aoMap,ge=!!b.lightMap,re=!!b.bumpMap&&b.wireframe===!1,ye=!!b.normalMap,Ce=!!b.displacementMap,ze=!!b.emissiveMap,be=!!b.metalnessMap,Ae=!!b.roughnessMap,G=b.anisotropy>0,De=b.clearcoat>0,fe=b.dispersion>0,L=b.retroreflectivity>0,M=b.iridescence>0,W=b.sheen>0,K=b.transmission>0,st=G&&!!b.anisotropyMap,_t=De&&!!b.clearcoatMap,vt=De&&!!b.clearcoatNormalMap,rt=De&&!!b.clearcoatRoughnessMap,ct=M&&!!b.iridescenceMap,St=M&&!!b.iridescenceThicknessMap,Bt=W&&!!b.sheenColorMap,wt=W&&!!b.sheenRoughnessMap,yt=!!b.specularMap,kt=!!b.specularColorMap,Ht=!!b.specularIntensityMap,jt=K&&!!b.transmissionMap,V=K&&!!b.thicknessMap,Mt=!!b.gradientMap,lt=!!b.alphaMap,bt=b.alphaTest>0,It=!!b.alphaHash,mt=!!b.extensions,Gt=wn;b.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Gt=n.toneMapping);let Ot={shaderID:ut,shaderType:b.type,shaderName:b.name,vertexShader:Jt,fragmentShader:Xt,defines:b.defines,customVertexShaderID:ee,customFragmentShaderID:it,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:Et,batchingColor:Et&&Y._colorsTexture!==null,instancing:Yt,instancingColor:Yt&&Y.instanceColor!==null,instancingMorph:Yt&&Y.morphTexture!==null,outputColorSpace:ht===null?n.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:le.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Qt,matcap:Me,envMap:te,envMapMode:te&&pt.mapping,envMapCubeUVHeight:et,aoMap:ce,lightMap:ge,bumpMap:re,normalMap:ye,displacementMap:Ce,emissiveMap:ze,normalMapObjectSpace:ye&&b.normalMapType===bh,normalMapTangentSpace:ye&&b.normalMapType===fa,packedNormalMap:ye&&b.normalMapType===fa&&f0(b.normalMap.format),metalnessMap:be,roughnessMap:Ae,anisotropy:G,anisotropyMap:st,clearcoat:De,clearcoatMap:_t,clearcoatNormalMap:vt,clearcoatRoughnessMap:rt,dispersion:fe,retroreflection:L,iridescence:M,iridescenceMap:ct,iridescenceThicknessMap:St,sheen:W,sheenColorMap:Bt,sheenRoughnessMap:wt,specularMap:yt,specularColorMap:kt,specularIntensityMap:Ht,transmission:K,transmissionMap:jt,thicknessMap:V,gradientMap:Mt,opaque:b.transparent===!1&&b.blending===xs&&b.alphaToCoverage===!1,alphaMap:lt,alphaTest:bt,alphaHash:It,combine:b.combine,mapUv:Qt&&T(b.map.channel),aoMapUv:ce&&T(b.aoMap.channel),lightMapUv:ge&&T(b.lightMap.channel),bumpMapUv:re&&T(b.bumpMap.channel),normalMapUv:ye&&T(b.normalMap.channel),displacementMapUv:Ce&&T(b.displacementMap.channel),emissiveMapUv:ze&&T(b.emissiveMap.channel),metalnessMapUv:be&&T(b.metalnessMap.channel),roughnessMapUv:Ae&&T(b.roughnessMap.channel),anisotropyMapUv:st&&T(b.anisotropyMap.channel),clearcoatMapUv:_t&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:vt&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:St&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:wt&&T(b.sheenRoughnessMap.channel),specularMapUv:yt&&T(b.specularMap.channel),specularColorMapUv:kt&&T(b.specularColorMap.channel),specularIntensityMapUv:Ht&&T(b.specularIntensityMap.channel),transmissionMapUv:jt&&T(b.transmissionMap.channel),thicknessMapUv:V&&T(b.thicknessMap.channel),alphaMapUv:lt&&T(b.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(ye||G),vertexNormals:!!$.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!$.attributes.uv&&(Qt||lt),fog:!!k,useFog:b.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||$.attributes.normal===void 0&&ye===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Rt,skinning:Y.isSkinnedMesh===!0,hasPositionAttribute:$.attributes.position!==void 0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Ft,morphTextureStride:Lt,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:j.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:Gt,decodeVideoTexture:Qt&&b.map.isVideoTexture===!0&&le.getTransfer(b.map.colorSpace)===pe,decodeVideoTextureEmissive:ze&&b.emissiveMap.isVideoTexture===!0&&le.getTransfer(b.emissiveMap.colorSpace)===pe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Dn,flipSided:b.side===Ze,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:mt&&b.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&b.extensions.multiDraw===!0||Et)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ot.vertexUv1s=f.has(1),Ot.vertexUv2s=f.has(2),Ot.vertexUv3s=f.has(3),f.clear(),Ot}function S(b){let C=[];if(b.shaderID?C.push(b.shaderID):(C.push(b.customVertexShaderID),C.push(b.customFragmentShaderID)),b.defines!==void 0)for(let B in b.defines)C.push(B),C.push(b.defines[B]);return b.isRawShaderMaterial===!1&&(_(C,b),N(C,b),C.push(n.outputColorSpace)),C.push(b.customProgramCacheKey),C.join()}function _(b,C){b.push(C.precision),b.push(C.outputColorSpace),b.push(C.envMapMode),b.push(C.envMapCubeUVHeight),b.push(C.mapUv),b.push(C.alphaMapUv),b.push(C.lightMapUv),b.push(C.aoMapUv),b.push(C.bumpMapUv),b.push(C.normalMapUv),b.push(C.displacementMapUv),b.push(C.emissiveMapUv),b.push(C.metalnessMapUv),b.push(C.roughnessMapUv),b.push(C.anisotropyMapUv),b.push(C.clearcoatMapUv),b.push(C.clearcoatNormalMapUv),b.push(C.clearcoatRoughnessMapUv),b.push(C.iridescenceMapUv),b.push(C.iridescenceThicknessMapUv),b.push(C.sheenColorMapUv),b.push(C.sheenRoughnessMapUv),b.push(C.specularMapUv),b.push(C.specularColorMapUv),b.push(C.specularIntensityMapUv),b.push(C.transmissionMapUv),b.push(C.thicknessMapUv),b.push(C.combine),b.push(C.fogExp2),b.push(C.sizeAttenuation),b.push(C.morphTargetsCount),b.push(C.morphAttributeCount),b.push(C.numSunLights),b.push(C.numDirLights),b.push(C.numPointLights),b.push(C.numSpotLights),b.push(C.numSpotLightMaps),b.push(C.numHemiLights),b.push(C.numRectAreaLights),b.push(C.numSunLightShadows),b.push(C.numDirLightShadows),b.push(C.numPointLightShadows),b.push(C.numSpotLightShadows),b.push(C.numSpotLightShadowsWithMaps),b.push(C.numLightProbes),b.push(C.shadowMapType),b.push(C.toneMapping),b.push(C.numClippingPlanes),b.push(C.numClipIntersection),b.push(C.depthPacking)}function N(b,C){c.disableAll(),C.instancing&&c.enable(0),C.instancingColor&&c.enable(1),C.instancingMorph&&c.enable(2),C.matcap&&c.enable(3),C.envMap&&c.enable(4),C.normalMapObjectSpace&&c.enable(5),C.normalMapTangentSpace&&c.enable(6),C.clearcoat&&c.enable(7),C.iridescence&&c.enable(8),C.alphaTest&&c.enable(9),C.vertexColors&&c.enable(10),C.vertexAlphas&&c.enable(11),C.vertexUv1s&&c.enable(12),C.vertexUv2s&&c.enable(13),C.vertexUv3s&&c.enable(14),C.vertexTangents&&c.enable(15),C.anisotropy&&c.enable(16),C.alphaHash&&c.enable(17),C.batching&&c.enable(18),C.dispersion&&c.enable(19),C.retroreflection&&c.enable(24),C.batchingColor&&c.enable(20),C.gradientMap&&c.enable(21),C.packedNormalMap&&c.enable(22),C.vertexNormals&&c.enable(23),b.push(c.mask),c.disableAll(),C.fog&&c.enable(0),C.useFog&&c.enable(1),C.flatShading&&c.enable(2),C.logarithmicDepthBuffer&&c.enable(3),C.reversedDepthBuffer&&c.enable(4),C.skinning&&c.enable(5),C.morphTargets&&c.enable(6),C.morphNormals&&c.enable(7),C.morphColors&&c.enable(8),C.premultipliedAlpha&&c.enable(9),C.shadowMapEnabled&&c.enable(10),C.doubleSided&&c.enable(11),C.flipSided&&c.enable(12),C.useDepthPacking&&c.enable(13),C.dithering&&c.enable(14),C.transmission&&c.enable(15),C.sheen&&c.enable(16),C.opaque&&c.enable(17),C.pointsUvs&&c.enable(18),C.decodeVideoTexture&&c.enable(19),C.decodeVideoTextureEmissive&&c.enable(20),C.alphaToCoverage&&c.enable(21),C.numLightProbeGrids>0&&c.enable(22),C.hasPositionAttribute&&c.enable(23),b.push(c.mask)}function z(b){let C=v[b.type],B;if(C){let X=Fn[C];B=Fh.clone(X.uniforms)}else B=b.uniforms;return B}function A(b,C){let B=g.get(C);return B!==void 0?++B.usedTimes:(B=new h0(n,C,b,r),d.push(B),g.set(C,B)),B}function R(b){if(--b.usedTimes===0){let C=d.indexOf(b);d[C]=d[d.length-1],d.pop(),g.delete(b.cacheKey),b.destroy()}}function I(b){u.remove(b)}function U(){u.dispose()}return{getParameters:P,getProgramCacheKey:S,getUniforms:z,acquireProgram:A,releaseProgram:R,releaseShaderCache:I,programs:d,dispose:U}}function p0(){let n=new WeakMap;function t(c){return n.has(c)}function e(c){let u=n.get(c);return u===void 0&&(u={},n.set(c,u)),u}function i(c){n.delete(c)}function r(c,u,f){n.get(c)[u]=f}function a(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:a}}function m0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function iu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function su(){let n=[],t=0,e=[],i=[],r=[];function a(){t=0,e.length=0,i.length=0,r.length=0}function c(m){let v=0;return m.isInstancedMesh&&(v+=2),m.isSkinnedMesh&&(v+=1),v}function u(m,v,T,P,S,_){let N=n[t];return N===void 0?(N={id:m.id,object:m,geometry:v,material:T,materialVariant:c(m),groupOrder:P,renderOrder:m.renderOrder,z:S,group:_},n[t]=N):(N.id=m.id,N.object=m,N.geometry=v,N.material=T,N.materialVariant=c(m),N.groupOrder=P,N.renderOrder=m.renderOrder,N.z=S,N.group=_),t++,N}function f(m,v,T,P,S,_,N){N.reversedDepth===!0&&(S=-S);let z=u(m,v,T,P,S,_);T.transmission>0?i.push(z):T.transparent===!0?r.push(z):e.push(z)}function d(m,v,T,P,S,_){let N=u(m,v,T,P,S,_);T.transmission>0?i.unshift(N):T.transparent===!0?r.unshift(N):e.unshift(N)}function g(m,v){e.length>1&&e.sort(m||m0),i.length>1&&i.sort(v||iu),r.length>1&&r.sort(v||iu)}function x(){for(let m=t,v=n.length;m<v;m++){let T=n[m];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:e,transmissive:i,transparent:r,init:a,push:f,unshift:d,finish:x,sort:g}}function g0(){let n=new WeakMap;function t(i,r){let a=n.get(i),c;return a===void 0?(c=new su,n.set(i,[c])):r>=a.length?(c=new su,a.push(c)):c=a[r],c}function e(){n=new WeakMap}return{get:t,dispose:e}}function _0(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new J,color:new ae};break;case"SpotLight":e={position:new J,direction:new J,color:new ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new J,color:new ae,distance:0,decay:0};break;case"HemisphereLight":e={direction:new J,skyColor:new ae,groundColor:new ae};break;case"RectAreaLight":e={color:new ae,position:new J,halfWidth:new J,halfHeight:new J};break}return n[t.id]=e,e}}}function x0(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var v0=0;function y0(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function S0(n){let t=new _0,e=x0(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new J);let r=new J,a=new Ee,c=new Ee;function u(d){let g=0,x=0,m=0;for(let Y=0;Y<9;Y++)i.probe[Y].set(0,0,0);let v=0,T=0,P=0,S=0,_=0,N=0,z=0,A=0,R=0,I=0,U=0,b=0,C=0,B=0;d.sort(y0);for(let Y=0,j=d.length;Y<j;Y++){let k=d[Y],$=k.color,nt=k.intensity,tt=k.distance,pt=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===yi?pt=k.shadow.map.texture:pt=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)g+=$.r*nt,x+=$.g*nt,m+=$.b*nt;else if(k.isLightProbe){for(let et=0;et<9;et++)i.probe[et].addScaledVector(k.sh.coefficients[et],nt);B++}else if(k.isSunLight){let et=t.get(k);if(et.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let ut=k.shadow,ft=e.get(k);ft.shadowIntensity=ut.intensity,ft.shadowBias=ut.bias,ft.shadowNormalBias=ut.normalBias,ft.shadowRadius=ut.radius,ft.shadowMapSize.copy(ut.mapSize).multiply(ut.getFrameExtents()),i.sunShadow[T]=ft,i.sunShadowMap[T]=pt;let Ft=ut.getViewportCount();for(let Lt=0;Lt<Ft;Lt++)i.sunShadowMatrix[P+Lt]=ut.getMatrix(Lt),i.sunShadowCascade[P+Lt]=ut._cascadeData[Lt];P+=Ft,T++}i.sun[v]=et,v++}else if(k.isDirectionalLight){let et=t.get(k);if(et.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let ut=k.shadow,ft=e.get(k);ft.shadowIntensity=ut.intensity,ft.shadowBias=ut.bias,ft.shadowNormalBias=ut.normalBias,ft.shadowRadius=ut.radius,ft.shadowMapSize=ut.mapSize,i.directionalShadow[S]=ft,i.directionalShadowMap[S]=pt,i.directionalShadowMatrix[S]=k.shadow.matrix,R++}i.directional[S]=et,S++}else if(k.isSpotLight){let et=t.get(k);et.position.setFromMatrixPosition(k.matrixWorld),et.color.copy($).multiplyScalar(nt),et.distance=tt,et.coneCos=Math.cos(k.angle),et.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),et.decay=k.decay,i.spot[N]=et;let ut=k.shadow;if(k.map&&(i.spotLightMap[b]=k.map,b++,ut.updateMatrices(k),k.castShadow&&C++),i.spotLightMatrix[N]=ut.matrix,k.castShadow){let ft=e.get(k);ft.shadowIntensity=ut.intensity,ft.shadowBias=ut.bias,ft.shadowNormalBias=ut.normalBias,ft.shadowRadius=ut.radius,ft.shadowMapSize=ut.mapSize,i.spotShadow[N]=ft,i.spotShadowMap[N]=pt,U++}N++}else if(k.isRectAreaLight){let et=t.get(k);et.color.copy($).multiplyScalar(nt),et.halfWidth.set(k.width*.5,0,0),et.halfHeight.set(0,k.height*.5,0),i.rectArea[z]=et,z++}else if(k.isPointLight){let et=t.get(k);if(et.color.copy(k.color).multiplyScalar(k.intensity),et.distance=k.distance,et.decay=k.decay,k.castShadow){let ut=k.shadow,ft=e.get(k);ft.shadowIntensity=ut.intensity,ft.shadowBias=ut.bias,ft.shadowNormalBias=ut.normalBias,ft.shadowRadius=ut.radius,ft.shadowMapSize=ut.mapSize,ft.shadowCameraNear=ut.camera.near,ft.shadowCameraFar=ut.camera.far,i.pointShadow[_]=ft,i.pointShadowMap[_]=pt,i.pointShadowMatrix[_]=k.shadow.matrix,I++}i.point[_]=et,_++}else if(k.isHemisphereLight){let et=t.get(k);et.skyColor.copy(k.color).multiplyScalar(nt),et.groundColor.copy(k.groundColor).multiplyScalar(nt),i.hemi[A]=et,A++}}z>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ct.LTC_FLOAT_1,i.rectAreaLTC2=Ct.LTC_FLOAT_2):(i.rectAreaLTC1=Ct.LTC_HALF_1,i.rectAreaLTC2=Ct.LTC_HALF_2)),i.ambient[0]=g,i.ambient[1]=x,i.ambient[2]=m;let X=i.hash;(X.sunLength!==v||X.directionalLength!==S||X.pointLength!==_||X.spotLength!==N||X.rectAreaLength!==z||X.hemiLength!==A||X.numSunShadows!==T||X.numDirectionalShadows!==R||X.numPointShadows!==I||X.numSpotShadows!==U||X.numSpotMaps!==b||X.numLightProbes!==B)&&(i.sun.length=v,i.directional.length=S,i.spot.length=N,i.rectArea.length=z,i.point.length=_,i.hemi.length=A,i.sunShadow.length=T,i.sunShadowMap.length=T,i.sunShadowMatrix.length=P,i.sunShadowCascade.length=P,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.directionalShadowMatrix.length=R,i.pointShadow.length=I,i.pointShadowMap.length=I,i.pointShadowMatrix.length=I,i.spotShadow.length=U,i.spotShadowMap.length=U,i.spotLightMatrix.length=U+b-C,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=B,X.sunLength=v,X.directionalLength=S,X.pointLength=_,X.spotLength=N,X.rectAreaLength=z,X.hemiLength=A,X.numSunShadows=T,X.numDirectionalShadows=R,X.numPointShadows=I,X.numSpotShadows=U,X.numSpotMaps=b,X.numLightProbes=B,i.version=v0++)}function f(d,g){let x=0,m=0,v=0,T=0,P=0,S=0,_=g.matrixWorldInverse;for(let N=0,z=d.length;N<z;N++){let A=d[N];if(A.isSunLight){let R=i.sun[x];R.direction.setFromMatrixPosition(A.matrixWorld),R.direction.transformDirection(_),x++}else if(A.isDirectionalLight){let R=i.directional[m];R.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(_),m++}else if(A.isSpotLight){let R=i.spot[T];R.position.setFromMatrixPosition(A.matrixWorld),R.position.applyMatrix4(_),R.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(_),T++}else if(A.isRectAreaLight){let R=i.rectArea[P];R.position.setFromMatrixPosition(A.matrixWorld),R.position.applyMatrix4(_),c.identity(),a.copy(A.matrixWorld),a.premultiply(_),c.extractRotation(a),R.halfWidth.set(A.width*.5,0,0),R.halfHeight.set(0,A.height*.5,0),R.halfWidth.applyMatrix4(c),R.halfHeight.applyMatrix4(c),P++}else if(A.isPointLight){let R=i.point[v];R.position.setFromMatrixPosition(A.matrixWorld),R.position.applyMatrix4(_),v++}else if(A.isHemisphereLight){let R=i.hemi[S];R.direction.setFromMatrixPosition(A.matrixWorld),R.direction.transformDirection(_),S++}}}return{setup:u,setupView:f,state:i}}function ru(n){let t=new S0(n),e=[],i=[],r=[];function a(m){x.camera=m,e.length=0,i.length=0,r.length=0}function c(m){e.push(m)}function u(m){i.push(m)}function f(m){r.push(m)}function d(){t.setup(e)}function g(m){t.setupView(e,m)}let x={lightsArray:e,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:x,setupLights:d,setupLightsView:g,pushLight:c,pushShadow:u,pushLightProbeGrid:f}}function M0(n){let t=new WeakMap;function e(r,a=0){let c=t.get(r),u;return c===void 0?(u=new ru(n),t.set(r,[u])):a>=c.length?(u=new ru(n),c.push(u)):u=c[a],u}function i(){t=new WeakMap}return{get:e,dispose:i}}var b0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,T0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,E0=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],w0=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],ou=new Ee,ur=new J,$l=new J;function A0(n,t,e){let i=new ds,r=new Zt,a=new Zt,c=new we,u=new uo,f=new fo,d={},g=e.maxTextureSize,x={[gi]:Ze,[Ze]:gi,[Dn]:Dn},m=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Zt},radius:{value:4}},vertexShader:b0,fragmentShader:T0}),v=m.clone();v.defines.HORIZONTAL_PASS=1;let T=new _n;T.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let P=new Xe(T,m),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=er;let _=this.type;this.render=function(I,U,b){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||I.length===0)return;this.type===th&&(Wt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=er);let C=n.getRenderTarget(),B=n.getActiveCubeFace(),X=n.getActiveMipmapLevel(),Y=n.state;Y.setBlending(On),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);let j=_!==this.type;j&&U.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach($=>$.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,$=I.length;k<$;k++){let nt=I[k],tt=nt.shadow;if(tt===void 0){Wt("WebGLShadowMap:",nt,"has no shadow.");continue}if(tt.autoUpdate===!1&&tt.needsUpdate===!1)continue;r.copy(tt.mapSize);let pt=tt.getFrameExtents();r.multiply(pt),a.copy(tt.mapSize),(r.x>g||r.y>g)&&(r.x>g&&(a.x=Math.floor(g/pt.x),r.x=a.x*pt.x,tt.mapSize.x=a.x),r.y>g&&(a.y=Math.floor(g/pt.y),r.y=a.y*pt.y,tt.mapSize.y=a.y));let et=n.state.buffers.depth.getReversed();if(tt.camera._reversedDepth=et,tt.map===null||j===!0){if(tt.map!==null&&(tt.map.depthTexture!==null&&(tt.map.depthTexture.dispose(),tt.map.depthTexture=null),tt.map.dispose()),this.type===_s){if(nt.isPointLight){Wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}tt.map=new Qe(r.x,r.y,{format:yi,type:Cn,minFilter:Fe,magFilter:Fe,generateMipmaps:!1}),tt.map.texture.name=nt.name+".shadowMap",tt.map.depthTexture=new hi(r.x,r.y,Pn),tt.map.depthTexture.name=nt.name+".shadowMapDepth",tt.map.depthTexture.format=Nn,tt.map.depthTexture.compareFunction=null,tt.map.depthTexture.minFilter=Ue,tt.map.depthTexture.magFilter=Ue}else nt.isPointLight?(tt.map=new xa(r.x),tt.map.depthTexture=new co(r.x,An)):(tt.map=new Qe(r.x,r.y),tt.map.depthTexture=new hi(r.x,r.y,An)),tt.map.depthTexture.name=nt.name+".shadowMap",tt.map.depthTexture.format=Nn,this.type===er?(tt.map.depthTexture.compareFunction=et?pa:da,tt.map.depthTexture.minFilter=Fe,tt.map.depthTexture.magFilter=Fe):(tt.map.depthTexture.compareFunction=null,tt.map.depthTexture.minFilter=Ue,tt.map.depthTexture.magFilter=Ue);tt.camera.updateProjectionMatrix()}tt.map.isWebGLCubeRenderTarget!==!0&&(tt.map.width!==r.x||tt.map.height!==r.y)&&tt.map.setSize(r.x,r.y);let ut=tt.map.isWebGLCubeRenderTarget?6:tt.getViewportCount();nt.isPointLight!==!0&&tt.updateMatrices(nt,b);for(let ft=0;ft<ut;ft++){let Ft=tt.getCamera(ft);if(nt.isPointLight){let Lt=tt.camera,Jt=tt.matrix,Xt=nt.distance||Lt.far;Xt!==Lt.far&&(Lt.far=Xt,Lt.updateProjectionMatrix()),ur.setFromMatrixPosition(nt.matrixWorld),Lt.position.copy(ur),$l.copy(Lt.position),$l.add(E0[ft]),Lt.up.copy(w0[ft]),Lt.lookAt($l),Lt.updateMatrixWorld(),Jt.makeTranslation(-ur.x,-ur.y,-ur.z),ou.multiplyMatrices(Lt.projectionMatrix,Lt.matrixWorldInverse),tt._frustum.setFromProjectionMatrix(ou,Lt.coordinateSystem,Lt.reversedDepth)}if(tt.map.isWebGLCubeRenderTarget)n.setRenderTarget(tt.map,ft),n.clear();else{ft===0&&(n.setRenderTarget(tt.map),n.clear());let Lt=tt.getViewport(ft);c.set(a.x*Lt.x,a.y*Lt.y,a.x*Lt.z,a.y*Lt.w),Y.viewport(c)}i=tt.getFrustum(ft),A(U,b,Ft,nt,this.type)}tt.isPointLightShadow!==!0&&this.type===_s&&N(tt,b),tt.needsUpdate=!1}_=this.type,S.needsUpdate=!1,n.setRenderTarget(C,B,X)};function N(I,U){let b=t.update(P);m.defines.VSM_SAMPLES!==I.blurSamples&&(m.defines.VSM_SAMPLES=I.blurSamples,v.defines.VSM_SAMPLES=I.blurSamples,m.needsUpdate=!0,v.needsUpdate=!0),I.mapPass===null?I.mapPass=new Qe(r.x,r.y,{format:yi,type:Cn}):(I.mapPass.width!==I.map.width||I.mapPass.height!==I.map.height)&&I.mapPass.setSize(I.map.width,I.map.height),m.uniforms.shadow_pass.value=I.map.depthTexture,m.uniforms.resolution.value.set(I.map.width,I.map.height),m.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(U,null,b,m,P,null),v.uniforms.shadow_pass.value=I.mapPass.texture,v.uniforms.resolution.value.set(I.map.width,I.map.height),v.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(U,null,b,v,P,null)}function z(I,U,b,C){let B=null,X=b.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(X!==void 0)B=X;else if(B=b.isPointLight===!0?f:u,n.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){let Y=B.uuid,j=U.uuid,k=d[Y];k===void 0&&(k={},d[Y]=k);let $=k[j];$===void 0&&($=B.clone(),k[j]=$,U.addEventListener("dispose",R)),B=$}if(B.visible=U.visible,B.wireframe=U.wireframe,C===_s?B.side=U.shadowSide!==null?U.shadowSide:U.side:B.side=U.shadowSide!==null?U.shadowSide:x[U.side],B.alphaMap=U.alphaMap,B.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,B.map=U.map,B.clipShadows=U.clipShadows,B.clippingPlanes=U.clippingPlanes,B.clipIntersection=U.clipIntersection,B.displacementMap=U.displacementMap,B.displacementScale=U.displacementScale,B.displacementBias=U.displacementBias,B.wireframeLinewidth=U.wireframeLinewidth,B.linewidth=U.linewidth,b.isPointLight===!0&&B.isMeshDistanceMaterial===!0){let Y=n.properties.get(B);Y.light=b}return B}function A(I,U,b,C,B){if(I.visible===!1)return;if(I.layers.test(U.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&B===_s)&&(!I.frustumCulled||I.intersectsFrustum(i))){I.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,I.matrixWorld);let j=t.update(I),k=I.material;if(Array.isArray(k)){let $=j.groups;for(let nt=0,tt=$.length;nt<tt;nt++){let pt=$[nt],et=k[pt.materialIndex];if(et&&et.visible){let ut=z(I,et,C,B);I.onBeforeShadow(n,I,U,b,j,ut,pt),n.renderBufferDirect(b,null,j,ut,I,pt),I.onAfterShadow(n,I,U,b,j,ut,pt)}}}else if(k.visible){let $=z(I,k,C,B);I.onBeforeShadow(n,I,U,b,j,$,null),n.renderBufferDirect(b,null,j,$,I,null),I.onAfterShadow(n,I,U,b,j,$,null)}}let Y=I.children;for(let j=0,k=Y.length;j<k;j++)A(Y[j],U,b,C,B)}function R(I){I.target.removeEventListener("dispose",R);for(let b in d){let C=d[b],B=I.target.uuid;B in C&&(C[B].dispose(),delete C[B])}}}function P0(n,t){function e(){let V=!1,Mt=new we,lt=null,bt=new we(0,0,0,0);return{setMask:function(It){lt!==It&&!V&&(n.colorMask(It,It,It,It),lt=It)},setLocked:function(It){V=It},setClear:function(It,mt,Gt,Ot,_e){_e===!0&&(It*=Ot,mt*=Ot,Gt*=Ot),Mt.set(It,mt,Gt,Ot),bt.equals(Mt)===!1&&(n.clearColor(It,mt,Gt,Ot),bt.copy(Mt))},reset:function(){V=!1,lt=null,bt.set(-1,0,0,0)}}}function i(){let V=!1,Mt=!1,lt=null,bt=null,It=null;return{setReversed:function(mt){if(Mt!==mt){let Gt=t.get("EXT_clip_control");mt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),Mt=mt;let Ot=It;It=null,this.setClear(Ot)}},getReversed:function(){return Mt},setTest:function(mt){mt?ht(n.DEPTH_TEST):Rt(n.DEPTH_TEST)},setMask:function(mt){lt!==mt&&!V&&(n.depthMask(mt),lt=mt)},setFunc:function(mt){if(Mt&&(mt=Oh[mt]),bt!==mt){switch(mt){case Jr:n.depthFunc(n.NEVER);break;case $r:n.depthFunc(n.ALWAYS);break;case Kr:n.depthFunc(n.LESS);break;case rs:n.depthFunc(n.LEQUAL);break;case jr:n.depthFunc(n.EQUAL);break;case Qr:n.depthFunc(n.GEQUAL);break;case to:n.depthFunc(n.GREATER);break;case eo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}bt=mt}},setLocked:function(mt){V=mt},setClear:function(mt){It!==mt&&(It=mt,Mt&&(mt=1-mt),n.clearDepth(mt))},reset:function(){V=!1,lt=null,bt=null,It=null,Mt=!1}}}function r(){let V=!1,Mt=null,lt=null,bt=null,It=null,mt=null,Gt=null,Ot=null,_e=null;return{setTest:function(he){V||(he?ht(n.STENCIL_TEST):Rt(n.STENCIL_TEST))},setMask:function(he){Mt!==he&&!V&&(n.stencilMask(he),Mt=he)},setFunc:function(he,nn,pn){(lt!==he||bt!==nn||It!==pn)&&(n.stencilFunc(he,nn,pn),lt=he,bt=nn,It=pn)},setOp:function(he,nn,pn){(mt!==he||Gt!==nn||Ot!==pn)&&(n.stencilOp(he,nn,pn),mt=he,Gt=nn,Ot=pn)},setLocked:function(he){V=he},setClear:function(he){_e!==he&&(n.clearStencil(he),_e=he)},reset:function(){V=!1,Mt=null,lt=null,bt=null,It=null,mt=null,Gt=null,Ot=null,_e=null}}}let a=new e,c=new i,u=new r,f=new WeakMap,d=new WeakMap,g={},x={},m={},v=new WeakMap,T=[],P=null,S=!1,_=null,N=null,z=null,A=null,R=null,I=null,U=null,b=new ae(0,0,0),C=0,B=!1,X=null,Y=null,j=null,k=null,$=null,nt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),tt=!1,pt=0,et=n.getParameter(n.VERSION);et.indexOf("WebGL")!==-1?(pt=parseFloat(/^WebGL (\d)/.exec(et)[1]),tt=pt>=1):et.indexOf("OpenGL ES")!==-1&&(pt=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),tt=pt>=2);let ut=null,ft={},Ft=n.getParameter(n.SCISSOR_BOX),Lt=n.getParameter(n.VIEWPORT),Jt=new we().fromArray(Ft),Xt=new we().fromArray(Lt);function ee(V,Mt,lt,bt){let It=new Uint8Array(4),mt=n.createTexture();n.bindTexture(V,mt),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Gt=0;Gt<lt;Gt++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(Mt,0,n.RGBA,1,1,bt,0,n.RGBA,n.UNSIGNED_BYTE,It):n.texImage2D(Mt+Gt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,It);return mt}let it={};it[n.TEXTURE_2D]=ee(n.TEXTURE_2D,n.TEXTURE_2D,1),it[n.TEXTURE_CUBE_MAP]=ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[n.TEXTURE_2D_ARRAY]=ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),it[n.TEXTURE_3D]=ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),ht(n.DEPTH_TEST),c.setFunc(rs),re(!1),ye(ml),ht(n.CULL_FACE),ce(On);function ht(V){g[V]!==!0&&(n.enable(V),g[V]=!0)}function Rt(V){g[V]!==!1&&(n.disable(V),g[V]=!1)}function Yt(V,Mt){return m[V]!==Mt?(n.bindFramebuffer(V,Mt),m[V]=Mt,V===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=Mt),V===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=Mt),!0):!1}function Et(V,Mt){let lt=T,bt=!1;if(V){lt=v.get(Mt),lt===void 0&&(lt=[],v.set(Mt,lt));let It=V.textures;if(lt.length!==It.length||lt[0]!==n.COLOR_ATTACHMENT0){for(let mt=0,Gt=It.length;mt<Gt;mt++)lt[mt]=n.COLOR_ATTACHMENT0+mt;lt.length=It.length,bt=!0}}else lt[0]!==n.BACK&&(lt[0]=n.BACK,bt=!0);bt&&n.drawBuffers(lt)}function Qt(V){return P!==V?(n.useProgram(V),P=V,!0):!1}let Me={[Ri]:n.FUNC_ADD,[nh]:n.FUNC_SUBTRACT,[ih]:n.FUNC_REVERSE_SUBTRACT};Me[sh]=n.MIN,Me[rh]=n.MAX;let te={[oh]:n.ZERO,[ah]:n.ONE,[lh]:n.SRC_COLOR,[vl]:n.SRC_ALPHA,[ph]:n.SRC_ALPHA_SATURATE,[fh]:n.DST_COLOR,[hh]:n.DST_ALPHA,[ch]:n.ONE_MINUS_SRC_COLOR,[yl]:n.ONE_MINUS_SRC_ALPHA,[dh]:n.ONE_MINUS_DST_COLOR,[uh]:n.ONE_MINUS_DST_ALPHA,[mh]:n.CONSTANT_COLOR,[gh]:n.ONE_MINUS_CONSTANT_COLOR,[_h]:n.CONSTANT_ALPHA,[xh]:n.ONE_MINUS_CONSTANT_ALPHA};function ce(V,Mt,lt,bt,It,mt,Gt,Ot,_e,he){if(V===On){S===!0&&(Rt(n.BLEND),S=!1);return}if(S===!1&&(ht(n.BLEND),S=!0),V!==eh){if(V!==_||he!==B){if((N!==Ri||R!==Ri)&&(n.blendEquation(n.FUNC_ADD),N=Ri,R=Ri),he)switch(V){case xs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gl:n.blendFunc(n.ONE,n.ONE);break;case _l:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case xl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:qt("WebGLState: Invalid blending: ",V);break}else switch(V){case xs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case _l:qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xl:qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qt("WebGLState: Invalid blending: ",V);break}z=null,A=null,I=null,U=null,b.set(0,0,0),C=0,_=V,B=he}return}It=It||Mt,mt=mt||lt,Gt=Gt||bt,(Mt!==N||It!==R)&&(n.blendEquationSeparate(Me[Mt],Me[It]),N=Mt,R=It),(lt!==z||bt!==A||mt!==I||Gt!==U)&&(n.blendFuncSeparate(te[lt],te[bt],te[mt],te[Gt]),z=lt,A=bt,I=mt,U=Gt),(Ot.equals(b)===!1||_e!==C)&&(n.blendColor(Ot.r,Ot.g,Ot.b,_e),b.copy(Ot),C=_e),_=V,B=!1}function ge(V,Mt){V.side===Dn?Rt(n.CULL_FACE):ht(n.CULL_FACE);let lt=V.side===Ze;Mt&&(lt=!lt),re(lt),V.blending===xs&&V.transparent===!1?ce(On):ce(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),c.setFunc(V.depthFunc),c.setTest(V.depthTest),c.setMask(V.depthWrite),a.setMask(V.colorWrite);let bt=V.stencilWrite;u.setTest(bt),bt&&(u.setMask(V.stencilWriteMask),u.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),u.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),ze(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ht(n.SAMPLE_ALPHA_TO_COVERAGE):Rt(n.SAMPLE_ALPHA_TO_COVERAGE)}function re(V){X!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),X=V)}function ye(V){V!==jc?(ht(n.CULL_FACE),V!==Y&&(V===ml?n.cullFace(n.BACK):V===Qc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Rt(n.CULL_FACE),Y=V}function Ce(V){V!==j&&(tt&&n.lineWidth(V),j=V)}function ze(V,Mt,lt){V?(ht(n.POLYGON_OFFSET_FILL),(k!==Mt||$!==lt)&&(k=Mt,$=lt,c.getReversed()&&(Mt=-Mt),n.polygonOffset(Mt,lt))):Rt(n.POLYGON_OFFSET_FILL)}function be(V){V?ht(n.SCISSOR_TEST):Rt(n.SCISSOR_TEST)}function Ae(V){V===void 0&&(V=n.TEXTURE0+nt-1),ut!==V&&(n.activeTexture(V),ut=V)}function G(V,Mt,lt){lt===void 0&&(ut===null?lt=n.TEXTURE0+nt-1:lt=ut);let bt=ft[lt];bt===void 0&&(bt={type:void 0,texture:void 0},ft[lt]=bt),(bt.type!==V||bt.texture!==Mt)&&(ut!==lt&&(n.activeTexture(lt),ut=lt),n.bindTexture(V,Mt||it[V]),bt.type=V,bt.texture=Mt)}function De(){let V=ft[ut];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function fe(){try{n.compressedTexImage2D(...arguments)}catch(V){qt("WebGLState:",V)}}function L(){try{n.compressedTexImage3D(...arguments)}catch(V){qt("WebGLState:",V)}}function M(){try{n.texSubImage2D(...arguments)}catch(V){qt("WebGLState:",V)}}function W(){try{n.texSubImage3D(...arguments)}catch(V){qt("WebGLState:",V)}}function K(){try{n.compressedTexSubImage2D(...arguments)}catch(V){qt("WebGLState:",V)}}function st(){try{n.compressedTexSubImage3D(...arguments)}catch(V){qt("WebGLState:",V)}}function _t(){try{n.texStorage2D(...arguments)}catch(V){qt("WebGLState:",V)}}function vt(){try{n.texStorage3D(...arguments)}catch(V){qt("WebGLState:",V)}}function rt(){try{n.texImage2D(...arguments)}catch(V){qt("WebGLState:",V)}}function ct(){try{n.texImage3D(...arguments)}catch(V){qt("WebGLState:",V)}}function St(V){return x[V]!==void 0?x[V]:n.getParameter(V)}function Bt(V,Mt){x[V]!==Mt&&(n.pixelStorei(V,Mt),x[V]=Mt)}function wt(V){Jt.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),Jt.copy(V))}function yt(V){Xt.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),Xt.copy(V))}function kt(V,Mt){let lt=d.get(Mt);lt===void 0&&(lt=new WeakMap,d.set(Mt,lt));let bt=lt.get(V);bt===void 0&&(bt=n.getUniformBlockIndex(Mt,V.name),lt.set(V,bt))}function Ht(V,Mt){let bt=d.get(Mt).get(V);f.get(Mt)!==bt&&(n.uniformBlockBinding(Mt,bt,V.__bindingPointIndex),f.set(Mt,bt))}function jt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),c.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),g={},x={},ut=null,ft={},m={},v=new WeakMap,T=[],P=null,S=!1,_=null,N=null,z=null,A=null,R=null,I=null,U=null,b=new ae(0,0,0),C=0,B=!1,X=null,Y=null,j=null,k=null,$=null,Jt.set(0,0,n.canvas.width,n.canvas.height),Xt.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:ht,disable:Rt,bindFramebuffer:Yt,drawBuffers:Et,useProgram:Qt,setBlending:ce,setMaterial:ge,setFlipSided:re,setCullFace:ye,setLineWidth:Ce,setPolygonOffset:ze,setScissorTest:be,activeTexture:Ae,bindTexture:G,unbindTexture:De,compressedTexImage2D:fe,compressedTexImage3D:L,texImage2D:rt,texImage3D:ct,pixelStorei:Bt,getParameter:St,updateUBOMapping:kt,uniformBlockBinding:Ht,texStorage2D:_t,texStorage3D:vt,texSubImage2D:M,texSubImage3D:W,compressedTexSubImage2D:K,compressedTexSubImage3D:st,scissor:wt,viewport:yt,reset:jt}}function C0(n,t,e,i,r,a,c){let u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Zt,g=new WeakMap,x=new Set,m,v=new WeakMap,T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function P(L,M){return T?new OffscreenCanvas(L,M):ks("canvas")}function S(L,M,W){let K=1,st=fe(L);if((st.width>W||st.height>W)&&(K=W/Math.max(st.width,st.height)),K<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let _t=Math.floor(K*st.width),vt=Math.floor(K*st.height);m===void 0&&(m=P(_t,vt));let rt=M?P(_t,vt):m;return rt.width=_t,rt.height=vt,rt.getContext("2d").drawImage(L,0,0,_t,vt),Wt("WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+_t+"x"+vt+")."),rt}else return"data"in L&&Wt("WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),L;return L}function _(L){return L.generateMipmaps}function N(L){n.generateMipmap(L)}function z(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(L,M,W,K,st,_t=!1){if(L!==null){if(n[L]!==void 0)return n[L];Wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let vt;K&&(vt=t.get("EXT_texture_norm16"),vt||Wt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let rt=M;if(M===n.RED&&(W===n.FLOAT&&(rt=n.R32F),W===n.HALF_FLOAT&&(rt=n.R16F),W===n.UNSIGNED_BYTE&&(rt=n.R8),W===n.UNSIGNED_SHORT&&vt&&(rt=vt.R16_EXT),W===n.SHORT&&vt&&(rt=vt.R16_SNORM_EXT)),M===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(rt=n.R8UI),W===n.UNSIGNED_SHORT&&(rt=n.R16UI),W===n.UNSIGNED_INT&&(rt=n.R32UI),W===n.BYTE&&(rt=n.R8I),W===n.SHORT&&(rt=n.R16I),W===n.INT&&(rt=n.R32I)),M===n.RG&&(W===n.FLOAT&&(rt=n.RG32F),W===n.HALF_FLOAT&&(rt=n.RG16F),W===n.UNSIGNED_BYTE&&(rt=n.RG8),W===n.UNSIGNED_SHORT&&vt&&(rt=vt.RG16_EXT),W===n.SHORT&&vt&&(rt=vt.RG16_SNORM_EXT)),M===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(rt=n.RG8UI),W===n.UNSIGNED_SHORT&&(rt=n.RG16UI),W===n.UNSIGNED_INT&&(rt=n.RG32UI),W===n.BYTE&&(rt=n.RG8I),W===n.SHORT&&(rt=n.RG16I),W===n.INT&&(rt=n.RG32I)),M===n.RGB_INTEGER&&(W===n.UNSIGNED_BYTE&&(rt=n.RGB8UI),W===n.UNSIGNED_SHORT&&(rt=n.RGB16UI),W===n.UNSIGNED_INT&&(rt=n.RGB32UI),W===n.BYTE&&(rt=n.RGB8I),W===n.SHORT&&(rt=n.RGB16I),W===n.INT&&(rt=n.RGB32I)),M===n.RGBA_INTEGER&&(W===n.UNSIGNED_BYTE&&(rt=n.RGBA8UI),W===n.UNSIGNED_SHORT&&(rt=n.RGBA16UI),W===n.UNSIGNED_INT&&(rt=n.RGBA32UI),W===n.BYTE&&(rt=n.RGBA8I),W===n.SHORT&&(rt=n.RGBA16I),W===n.INT&&(rt=n.RGBA32I)),M===n.RGB&&(W===n.UNSIGNED_SHORT&&vt&&(rt=vt.RGB16_EXT),W===n.SHORT&&vt&&(rt=vt.RGB16_SNORM_EXT),W===n.UNSIGNED_INT_5_9_9_9_REV&&(rt=n.RGB9_E5),W===n.UNSIGNED_INT_10F_11F_11F_REV&&(rt=n.R11F_G11F_B10F)),M===n.RGBA){let ct=_t?zs:le.getTransfer(st);W===n.FLOAT&&(rt=n.RGBA32F),W===n.HALF_FLOAT&&(rt=n.RGBA16F),W===n.UNSIGNED_BYTE&&(rt=ct===pe?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT&&vt&&(rt=vt.RGBA16_EXT),W===n.SHORT&&vt&&(rt=vt.RGBA16_SNORM_EXT),W===n.UNSIGNED_SHORT_4_4_4_4&&(rt=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(rt=n.RGB5_A1)}return(rt===n.R16F||rt===n.R32F||rt===n.RG16F||rt===n.RG32F||rt===n.RGBA16F||rt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function R(L,M){let W;return L?M===null||M===An||M===ys?W=n.DEPTH24_STENCIL8:M===Pn?W=n.DEPTH32F_STENCIL8:M===vs&&(W=n.DEPTH24_STENCIL8,Wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===An||M===ys?W=n.DEPTH_COMPONENT24:M===Pn?W=n.DEPTH_COMPONENT32F:M===vs&&(W=n.DEPTH_COMPONENT16),W}function I(L,M){return _(L)===!0||L.isFramebufferTexture&&L.minFilter!==Ue&&L.minFilter!==Fe?Math.log2(Math.max(M.width,M.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?M.mipmaps.length:1}function U(L){let M=L.target;M.removeEventListener("dispose",U),C(M),M.isVideoTexture&&g.delete(M),M.isHTMLTexture&&x.delete(M)}function b(L){let M=L.target;M.removeEventListener("dispose",b),X(M)}function C(L){let M=i.get(L);if(M.__webglInit===void 0)return;let W=L.source,K=v.get(W);if(K){let st=K[M.__cacheKey];st.usedTimes--,st.usedTimes===0&&B(L),Object.keys(K).length===0&&v.delete(W)}i.remove(L)}function B(L){let M=i.get(L);n.deleteTexture(M.__webglTexture);let W=L.source,K=v.get(W);delete K[M.__cacheKey],c.memory.textures--}function X(L){let M=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let st=0;st<M.__webglFramebuffer[K].length;st++)n.deleteFramebuffer(M.__webglFramebuffer[K][st]);else n.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)n.deleteFramebuffer(M.__webglFramebuffer[K]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let W=L.textures;for(let K=0,st=W.length;K<st;K++){let _t=i.get(W[K]);_t.__webglTexture&&(n.deleteTexture(_t.__webglTexture),c.memory.textures--),i.remove(W[K])}i.remove(L)}let Y=0;function j(){Y=0}function k(){return Y}function $(L){Y=L}function nt(){let L=Y;return L>=r.maxTextures&&Wt("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+r.maxTextures),Y+=1,L}function tt(L){let M=[];return M.push(L.wrapS),M.push(L.wrapT),M.push(L.wrapR||0),M.push(L.magFilter),M.push(L.minFilter),M.push(L.anisotropy),M.push(L.internalFormat),M.push(L.format),M.push(L.type),M.push(L.generateMipmaps),M.push(L.premultiplyAlpha),M.push(L.flipY),M.push(L.unpackAlignment),M.push(L.colorSpace),M.join()}function pt(L,M){let W=i.get(L);if(L.isVideoTexture&&G(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&W.__version!==L.version){let K=L.image;if(K===null)Wt("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Wt("WebGLRenderer: Texture marked for update but image is incomplete");else{Rt(W,L,M);return}}else L.isExternalTexture&&(W.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+M)}function et(L,M){let W=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){Rt(W,L,M);return}else L.isExternalTexture&&(W.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+M)}function ut(L,M){let W=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){Rt(W,L,M);return}e.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+M)}function ft(L,M){let W=i.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&W.__version!==L.version){Yt(W,L,M);return}e.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+M)}let Ft={[no]:n.REPEAT,[Ln]:n.CLAMP_TO_EDGE,[io]:n.MIRRORED_REPEAT},Lt={[Ue]:n.NEAREST,[Sh]:n.NEAREST_MIPMAP_NEAREST,[ir]:n.NEAREST_MIPMAP_LINEAR,[Fe]:n.LINEAR,[Co]:n.LINEAR_MIPMAP_NEAREST,[xi]:n.LINEAR_MIPMAP_LINEAR},Jt={[Eh]:n.NEVER,[Ih]:n.ALWAYS,[wh]:n.LESS,[da]:n.LEQUAL,[Ah]:n.EQUAL,[pa]:n.GEQUAL,[Ph]:n.GREATER,[Ch]:n.NOTEQUAL};function Xt(L,M){if(M.type===Pn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Fe||M.magFilter===Co||M.magFilter===ir||M.magFilter===xi||M.minFilter===Fe||M.minFilter===Co||M.minFilter===ir||M.minFilter===xi)&&Wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,Ft[M.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,Ft[M.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,Ft[M.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,Lt[M.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,Lt[M.minFilter]),M.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,Jt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ue||M.minFilter!==ir&&M.minFilter!==xi||M.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");n.texParameterf(L,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ee(L,M){let W=!1;L.__webglInit===void 0&&(L.__webglInit=!0,M.addEventListener("dispose",U));let K=M.source,st=v.get(K);st===void 0&&(st={},v.set(K,st));let _t=tt(M);if(_t!==L.__cacheKey){st[_t]===void 0&&(st[_t]={texture:n.createTexture(),usedTimes:0},c.memory.textures++,W=!0),st[_t].usedTimes++;let vt=st[L.__cacheKey];vt!==void 0&&(st[L.__cacheKey].usedTimes--,vt.usedTimes===0&&B(M)),L.__cacheKey=_t,L.__webglTexture=st[_t].texture}return W}function it(L,M,W){return Math.floor(Math.floor(L/W)/M)}function ht(L,M,W,K){let _t=L.updateRanges;if(_t.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,W,K,M.data);else{_t.sort((Bt,wt)=>Bt.start-wt.start);let vt=0;for(let Bt=1;Bt<_t.length;Bt++){let wt=_t[vt],yt=_t[Bt],kt=wt.start+wt.count,Ht=it(yt.start,M.width,4),jt=it(wt.start,M.width,4);yt.start<=kt+1&&Ht===jt&&it(yt.start+yt.count-1,M.width,4)===Ht?wt.count=Math.max(wt.count,yt.start+yt.count-wt.start):(++vt,_t[vt]=yt)}_t.length=vt+1;let rt=e.getParameter(n.UNPACK_ROW_LENGTH),ct=e.getParameter(n.UNPACK_SKIP_PIXELS),St=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let Bt=0,wt=_t.length;Bt<wt;Bt++){let yt=_t[Bt],kt=Math.floor(yt.start/4),Ht=Math.ceil(yt.count/4),jt=kt%M.width,V=Math.floor(kt/M.width),Mt=Ht,lt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,jt),e.pixelStorei(n.UNPACK_SKIP_ROWS,V),e.texSubImage2D(n.TEXTURE_2D,0,jt,V,Mt,lt,W,K,M.data)}L.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,rt),e.pixelStorei(n.UNPACK_SKIP_PIXELS,ct),e.pixelStorei(n.UNPACK_SKIP_ROWS,St)}}function Rt(L,M,W){let K=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=n.TEXTURE_3D);let st=ee(L,M),_t=M.source;e.bindTexture(K,L.__webglTexture,n.TEXTURE0+W);let vt=i.get(_t);if(_t.version!==vt.__version||st===!0){if(e.activeTexture(n.TEXTURE0+W),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let lt=le.getPrimaries(le.workingColorSpace),bt=M.colorSpace===$n?null:le.getPrimaries(M.colorSpace),It=M.colorSpace===$n||lt===bt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,It)}e.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment);let ct=S(M.image,!1,r.maxTextureSize);ct=De(M,ct);let St=a.convert(M.format,M.colorSpace),Bt=a.convert(M.type),wt=A(M.internalFormat,St,Bt,M.normalized,M.colorSpace,M.isVideoTexture);Xt(K,M);let yt,kt=M.mipmaps,Ht=M.isVideoTexture!==!0,jt=vt.__version===void 0||st===!0,V=_t.dataReady,Mt=I(M,ct);if(M.isDepthTexture)wt=R(M.format===vi,M.type),jt&&(Ht?e.texStorage2D(n.TEXTURE_2D,1,wt,ct.width,ct.height):e.texImage2D(n.TEXTURE_2D,0,wt,ct.width,ct.height,0,St,Bt,null));else if(M.isDataTexture)if(kt.length>0){Ht&&jt&&e.texStorage2D(n.TEXTURE_2D,Mt,wt,kt[0].width,kt[0].height);for(let lt=0,bt=kt.length;lt<bt;lt++)yt=kt[lt],Ht?V&&e.texSubImage2D(n.TEXTURE_2D,lt,0,0,yt.width,yt.height,St,Bt,yt.data):e.texImage2D(n.TEXTURE_2D,lt,wt,yt.width,yt.height,0,St,Bt,yt.data);M.generateMipmaps=!1}else Ht?(jt&&e.texStorage2D(n.TEXTURE_2D,Mt,wt,ct.width,ct.height),V&&ht(M,ct,St,Bt)):e.texImage2D(n.TEXTURE_2D,0,wt,ct.width,ct.height,0,St,Bt,ct.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ht&&jt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Mt,wt,kt[0].width,kt[0].height,ct.depth);for(let lt=0,bt=kt.length;lt<bt;lt++)if(yt=kt[lt],M.format!==xn)if(St!==null)if(Ht){if(V)if(M.layerUpdates.size>0){let It=Xl(yt.width,yt.height,M.format,M.type);for(let mt of M.layerUpdates){let Gt=yt.data.subarray(mt*It/yt.data.BYTES_PER_ELEMENT,(mt+1)*It/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,mt,yt.width,yt.height,1,St,Gt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,0,yt.width,yt.height,ct.depth,St,yt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,lt,wt,yt.width,yt.height,ct.depth,0,yt.data,0,0);else Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?V&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,0,yt.width,yt.height,ct.depth,St,Bt,yt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,lt,wt,yt.width,yt.height,ct.depth,0,St,Bt,yt.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{Ht&&jt&&e.texStorage2D(n.TEXTURE_2D,Mt,wt,kt[0].width,kt[0].height);for(let lt=0,bt=kt.length;lt<bt;lt++)yt=kt[lt],M.format!==xn?St!==null?Ht?V&&e.compressedTexSubImage2D(n.TEXTURE_2D,lt,0,0,yt.width,yt.height,St,yt.data):e.compressedTexImage2D(n.TEXTURE_2D,lt,wt,yt.width,yt.height,0,yt.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?V&&e.texSubImage2D(n.TEXTURE_2D,lt,0,0,yt.width,yt.height,St,Bt,yt.data):e.texImage2D(n.TEXTURE_2D,lt,wt,yt.width,yt.height,0,St,Bt,yt.data)}else if(M.isDataArrayTexture)if(Ht){if(jt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Mt,wt,ct.width,ct.height,ct.depth),V)if(M.layerUpdates.size>0){let lt=Xl(ct.width,ct.height,M.format,M.type);for(let bt of M.layerUpdates){let It=ct.data.subarray(bt*lt/ct.data.BYTES_PER_ELEMENT,(bt+1)*lt/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,bt,ct.width,ct.height,1,St,Bt,It)}M.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,St,Bt,ct.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,wt,ct.width,ct.height,ct.depth,0,St,Bt,ct.data);else if(M.isData3DTexture)Ht?(jt&&e.texStorage3D(n.TEXTURE_3D,Mt,wt,ct.width,ct.height,ct.depth),V&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,St,Bt,ct.data)):e.texImage3D(n.TEXTURE_3D,0,wt,ct.width,ct.height,ct.depth,0,St,Bt,ct.data);else if(M.isFramebufferTexture){if(jt)if(Ht)e.texStorage2D(n.TEXTURE_2D,Mt,wt,ct.width,ct.height);else{let lt=ct.width,bt=ct.height;for(let It=0;It<Mt;It++)e.texImage2D(n.TEXTURE_2D,It,wt,lt,bt,0,St,Bt,null),lt>>=1,bt>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in n){let lt=n.canvas;if(lt.hasAttribute("layoutsubtree")||lt.setAttribute("layoutsubtree","true"),ct.parentNode!==lt){lt.appendChild(ct),x.add(M),lt.onpaint=bt=>{let It=bt.changedElements;for(let mt of x)It.includes(mt.image)&&(mt.needsUpdate=!0)},lt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ct);else{let It=n.RGBA,mt=n.RGBA,Gt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,It,mt,Gt,ct)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(kt.length>0){if(Ht&&jt){let lt=fe(kt[0]);e.texStorage2D(n.TEXTURE_2D,Mt,wt,lt.width,lt.height)}for(let lt=0,bt=kt.length;lt<bt;lt++)yt=kt[lt],Ht?V&&e.texSubImage2D(n.TEXTURE_2D,lt,0,0,St,Bt,yt):e.texImage2D(n.TEXTURE_2D,lt,wt,St,Bt,yt);M.generateMipmaps=!1}else if(Ht){if(jt){let lt=fe(ct);e.texStorage2D(n.TEXTURE_2D,Mt,wt,lt.width,lt.height)}V&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,St,Bt,ct)}else e.texImage2D(n.TEXTURE_2D,0,wt,St,Bt,ct);_(M)&&N(K),vt.__version=_t.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function Yt(L,M,W){if(M.image.length!==6)return;let K=ee(L,M),st=M.source;e.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+W);let _t=i.get(st);if(st.version!==_t.__version||K===!0){e.activeTexture(n.TEXTURE0+W);let vt=le.getPrimaries(le.workingColorSpace),rt=M.colorSpace===$n?null:le.getPrimaries(M.colorSpace),ct=M.colorSpace===$n||vt===rt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let St=M.isCompressedTexture||M.image[0].isCompressedTexture,Bt=M.image[0]&&M.image[0].isDataTexture,wt=[];for(let mt=0;mt<6;mt++)!St&&!Bt?wt[mt]=S(M.image[mt],!0,r.maxCubemapSize):wt[mt]=Bt?M.image[mt].image:M.image[mt],wt[mt]=De(M,wt[mt]);let yt=wt[0],kt=a.convert(M.format,M.colorSpace),Ht=a.convert(M.type),jt=A(M.internalFormat,kt,Ht,M.normalized,M.colorSpace),V=M.isVideoTexture!==!0,Mt=_t.__version===void 0||K===!0,lt=st.dataReady,bt=I(M,yt);Xt(n.TEXTURE_CUBE_MAP,M);let It;if(St){V&&Mt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,bt,jt,yt.width,yt.height);for(let mt=0;mt<6;mt++){It=wt[mt].mipmaps;for(let Gt=0;Gt<It.length;Gt++){let Ot=It[Gt];M.format!==xn?kt!==null?V?lt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Gt,0,0,Ot.width,Ot.height,kt,Ot.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Gt,jt,Ot.width,Ot.height,0,Ot.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Gt,0,0,Ot.width,Ot.height,kt,Ht,Ot.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Gt,jt,Ot.width,Ot.height,0,kt,Ht,Ot.data)}}}else{if(It=M.mipmaps,V&&Mt){It.length>0&&bt++;let mt=fe(wt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,bt,jt,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(Bt){V?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,wt[mt].width,wt[mt].height,kt,Ht,wt[mt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,jt,wt[mt].width,wt[mt].height,0,kt,Ht,wt[mt].data);for(let Gt=0;Gt<It.length;Gt++){let _e=It[Gt].image[mt].image;V?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Gt+1,0,0,_e.width,_e.height,kt,Ht,_e.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Gt+1,jt,_e.width,_e.height,0,kt,Ht,_e.data)}}else{V?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,kt,Ht,wt[mt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,jt,kt,Ht,wt[mt]);for(let Gt=0;Gt<It.length;Gt++){let Ot=It[Gt];V?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Gt+1,0,0,kt,Ht,Ot.image[mt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Gt+1,jt,kt,Ht,Ot.image[mt])}}}_(M)&&N(n.TEXTURE_CUBE_MAP),_t.__version=st.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function Et(L,M,W,K,st,_t){let vt=a.convert(W.format,W.colorSpace),rt=a.convert(W.type),ct=A(W.internalFormat,vt,rt,W.normalized,W.colorSpace),St=i.get(M),Bt=i.get(W);if(Bt.__renderTarget=M,!St.__hasExternalTextures){let wt=Math.max(1,M.width>>_t),yt=Math.max(1,M.height>>_t);st===n.TEXTURE_3D||st===n.TEXTURE_2D_ARRAY?e.texImage3D(st,_t,ct,wt,yt,M.depth,0,vt,rt,null):e.texImage2D(st,_t,ct,wt,yt,0,vt,rt,null)}e.bindFramebuffer(n.FRAMEBUFFER,L),Ae(M)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,st,Bt.__webglTexture,0,be(M)):(st===n.TEXTURE_2D||st>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,st,Bt.__webglTexture,_t),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Qt(L,M,W){if(n.bindRenderbuffer(n.RENDERBUFFER,L),M.depthBuffer){let K=M.depthTexture,st=K&&K.isDepthTexture?K.type:null,_t=R(M.stencilBuffer,st),vt=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ae(M)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be(M),_t,M.width,M.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,be(M),_t,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,_t,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,vt,n.RENDERBUFFER,L)}else{let K=M.textures;for(let st=0;st<K.length;st++){let _t=K[st],vt=a.convert(_t.format,_t.colorSpace),rt=a.convert(_t.type),ct=A(_t.internalFormat,vt,rt,_t.normalized,_t.colorSpace);Ae(M)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be(M),ct,M.width,M.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,be(M),ct,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ct,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Me(L,M,W){let K=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,L),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let st=i.get(M.depthTexture);if(st.__renderTarget=M,(!st.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),K){if(st.__webglInit===void 0&&(st.__webglInit=!0,M.depthTexture.addEventListener("dispose",U)),st.__webglTexture===void 0){st.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,st.__webglTexture),Xt(n.TEXTURE_CUBE_MAP,M.depthTexture);let St=a.convert(M.depthTexture.format),Bt=a.convert(M.depthTexture.type),wt;M.depthTexture.format===Nn?wt=n.DEPTH_COMPONENT24:M.depthTexture.format===vi&&(wt=n.DEPTH24_STENCIL8);for(let yt=0;yt<6;yt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,wt,M.width,M.height,0,St,Bt,null)}}else pt(M.depthTexture,0);let _t=st.__webglTexture,vt=be(M),rt=K?n.TEXTURE_CUBE_MAP_POSITIVE_X+W:n.TEXTURE_2D,ct=M.depthTexture.format===vi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===Nn)Ae(M)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ct,rt,_t,0,vt):n.framebufferTexture2D(n.FRAMEBUFFER,ct,rt,_t,0);else if(M.depthTexture.format===vi)Ae(M)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ct,rt,_t,0,vt):n.framebufferTexture2D(n.FRAMEBUFFER,ct,rt,_t,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function te(L){let M=i.get(L),W=L.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==L.depthTexture){let K=L.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),K){let st=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,K.removeEventListener("dispose",st)};K.addEventListener("dispose",st),M.__depthDisposeCallback=st}M.__boundDepthTexture=K}if(L.depthTexture&&!M.__autoAllocateDepthBuffer)if(W)for(let K=0;K<6;K++)Me(M.__webglFramebuffer[K],L,K);else{let K=L.texture.mipmaps;K&&K.length>0?Me(M.__webglFramebuffer[0],L,0):Me(M.__webglFramebuffer,L,0)}else if(W){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]===void 0)M.__webglDepthbuffer[K]=n.createRenderbuffer(),Qt(M.__webglDepthbuffer[K],L,!1);else{let st=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_t=M.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,_t),n.framebufferRenderbuffer(n.FRAMEBUFFER,st,n.RENDERBUFFER,_t)}}else{let K=L.texture.mipmaps;if(K&&K.length>0?e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),Qt(M.__webglDepthbuffer,L,!1);else{let st=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_t=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,_t),n.framebufferRenderbuffer(n.FRAMEBUFFER,st,n.RENDERBUFFER,_t)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ce(L,M,W){let K=i.get(L);M!==void 0&&Et(K.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&te(L)}function ge(L){let M=L.texture,W=i.get(L),K=i.get(M);L.addEventListener("dispose",b);let st=L.textures,_t=L.isWebGLCubeRenderTarget===!0,vt=st.length>1;if(vt||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=M.version,c.memory.textures++),_t){W.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[rt]=[];for(let ct=0;ct<M.mipmaps.length;ct++)W.__webglFramebuffer[rt][ct]=n.createFramebuffer()}else W.__webglFramebuffer[rt]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let rt=0;rt<M.mipmaps.length;rt++)W.__webglFramebuffer[rt]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(vt)for(let rt=0,ct=st.length;rt<ct;rt++){let St=i.get(st[rt]);St.__webglTexture===void 0&&(St.__webglTexture=n.createTexture(),c.memory.textures++)}if(L.samples>0&&Ae(L)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let rt=0;rt<st.length;rt++){let ct=st[rt];W.__webglColorRenderbuffer[rt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[rt]);let St=a.convert(ct.format,ct.colorSpace),Bt=a.convert(ct.type),wt=A(ct.internalFormat,St,Bt,ct.normalized,ct.colorSpace,L.isXRRenderTarget===!0),yt=be(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,yt,wt,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.RENDERBUFFER,W.__webglColorRenderbuffer[rt])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),Qt(W.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(_t){e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Xt(n.TEXTURE_CUBE_MAP,M);for(let rt=0;rt<6;rt++)if(M.mipmaps&&M.mipmaps.length>0)for(let ct=0;ct<M.mipmaps.length;ct++)Et(W.__webglFramebuffer[rt][ct],L,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ct);else Et(W.__webglFramebuffer[rt],L,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);_(M)&&N(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let rt=0,ct=st.length;rt<ct;rt++){let St=st[rt],Bt=i.get(St),wt=n.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(wt=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(wt,Bt.__webglTexture),Xt(wt,St),Et(W.__webglFramebuffer,L,St,n.COLOR_ATTACHMENT0+rt,wt,0),_(St)&&N(wt)}e.unbindTexture()}else{let rt=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(rt=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(rt,K.__webglTexture),Xt(rt,M),M.mipmaps&&M.mipmaps.length>0)for(let ct=0;ct<M.mipmaps.length;ct++)Et(W.__webglFramebuffer[ct],L,M,n.COLOR_ATTACHMENT0,rt,ct);else Et(W.__webglFramebuffer,L,M,n.COLOR_ATTACHMENT0,rt,0);_(M)&&N(rt),e.unbindTexture()}L.depthBuffer&&te(L)}function re(L){let M=L.textures;for(let W=0,K=M.length;W<K;W++){let st=M[W];if(_(st)){let _t=z(L),vt=i.get(st).__webglTexture;e.bindTexture(_t,vt),N(_t),e.unbindTexture()}}}let ye=[],Ce=[];function ze(L){if(L.samples>0){if(Ae(L)===!1){let M=L.textures,W=L.width,K=L.height,st=n.COLOR_BUFFER_BIT,_t=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,vt=i.get(L),rt=M.length>1;if(rt)for(let St=0;St<M.length;St++)e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer);let ct=L.texture.mipmaps;ct&&ct.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,vt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let St=0;St<M.length;St++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(st|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(st|=n.STENCIL_BUFFER_BIT)),rt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,vt.__webglColorRenderbuffer[St]);let Bt=i.get(M[St]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Bt,0)}n.blitFramebuffer(0,0,W,K,0,0,W,K,st,n.NEAREST),f===!0&&(ye.length=0,Ce.length=0,ye.push(n.COLOR_ATTACHMENT0+St),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(ye.push(_t),Ce.push(_t),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ce)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ye))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),rt)for(let St=0;St<M.length;St++){e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.RENDERBUFFER,vt.__webglColorRenderbuffer[St]);let Bt=i.get(M[St]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.TEXTURE_2D,Bt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&f){let M=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function be(L){return Math.min(r.maxSamples,L.samples)}function Ae(L){let M=i.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function G(L){let M=c.render.frame;g.get(L)!==M&&(g.set(L,M),L.update())}function De(L,M){let W=L.colorSpace,K=L.format,st=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||W!==Bs&&W!==$n&&(le.getTransfer(W)===pe?(K!==xn||st!==tn)&&Wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qt("WebGLTextures: Unsupported texture color space:",W)),M}function fe(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(d.width=L.naturalWidth||L.width,d.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(d.width=L.displayWidth,d.height=L.displayHeight):(d.width=L.width,d.height=L.height),d}this.allocateTextureUnit=nt,this.resetTextureUnits=j,this.getTextureUnits=k,this.setTextureUnits=$,this.setTexture2D=pt,this.setTexture2DArray=et,this.setTexture3D=ut,this.setTextureCube=ft,this.rebindTextures=ce,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=Ae,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function I0(n,t){function e(i,r=$n){let a,c=le.getTransfer(r);if(i===tn)return n.UNSIGNED_BYTE;if(i===Ro)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Lo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ll)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Nl)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Il)return n.BYTE;if(i===Rl)return n.SHORT;if(i===vs)return n.UNSIGNED_SHORT;if(i===Io)return n.INT;if(i===An)return n.UNSIGNED_INT;if(i===Pn)return n.FLOAT;if(i===Cn)return n.HALF_FLOAT;if(i===Dl)return n.ALPHA;if(i===Ol)return n.RGB;if(i===xn)return n.RGBA;if(i===Nn)return n.DEPTH_COMPONENT;if(i===vi)return n.DEPTH_STENCIL;if(i===Ul)return n.RED;if(i===No)return n.RED_INTEGER;if(i===yi)return n.RG;if(i===Do)return n.RG_INTEGER;if(i===Oo)return n.RGBA_INTEGER;if(i===sr||i===rr||i===or||i===ar)if(c===pe)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===sr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===rr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===or)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ar)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===sr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===rr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===or)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ar)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Uo||i===Fo||i===Bo||i===zo)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Uo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Fo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Bo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===zo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ko||i===Vo||i===Go||i===Ho||i===Xo||i===lr||i===Wo)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===ko||i===Vo)return c===pe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Go)return c===pe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ho)return a.COMPRESSED_R11_EAC;if(i===Xo)return a.COMPRESSED_SIGNED_R11_EAC;if(i===lr)return a.COMPRESSED_RG11_EAC;if(i===Wo)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Yo||i===qo||i===Zo||i===Jo||i===$o||i===Ko||i===jo||i===Qo||i===ta||i===ea||i===na||i===ia||i===sa||i===ra)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Yo)return c===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===qo)return c===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zo)return c===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jo)return c===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$o)return c===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ko)return c===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===jo)return c===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Qo)return c===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ta)return c===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ea)return c===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===na)return c===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ia)return c===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===sa)return c===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ra)return c===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===oa||i===aa||i===la)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===oa)return c===pe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===aa)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===la)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ca||i===ha||i===cr||i===ua)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===ca)return a.COMPRESSED_RED_RGTC1_EXT;if(i===ha)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===cr)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ua)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ys?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var R0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,L0=`
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

}`,sc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new qs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new cn({vertexShader:R0,fragmentShader:L0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Xe(new Zs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},rc=class extends En{constructor(t,e){super();let i=this,r=null,a=1,c=null,u="local-floor",f=1,d=null,g=null,x=null,m=null,v=null,T=null,P=typeof XRWebGLBinding<"u",S=new sc,_={},N=e.getContextAttributes(),z=null,A=null,R=[],I=[],U=new Zt,b=null,C=null,B=new Ge;B.viewport=new we;let X=new Ge;X.viewport=new we;let Y=[B,X],j=new wo,k=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let ht=R[it];return ht===void 0&&(ht=new us,R[it]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(it){let ht=R[it];return ht===void 0&&(ht=new us,R[it]=ht),ht.getGripSpace()},this.getHand=function(it){let ht=R[it];return ht===void 0&&(ht=new us,R[it]=ht),ht.getHandSpace()};function nt(it){let ht=I.indexOf(it.inputSource);if(ht===-1)return;let Rt=R[ht];Rt!==void 0&&(Rt.update(it.inputSource,it.frame,d||c),Rt.dispatchEvent({type:it.type,data:it.inputSource}))}function tt(){r.removeEventListener("select",nt),r.removeEventListener("selectstart",nt),r.removeEventListener("selectend",nt),r.removeEventListener("squeeze",nt),r.removeEventListener("squeezestart",nt),r.removeEventListener("squeezeend",nt),r.removeEventListener("end",tt),r.removeEventListener("inputsourceschange",pt);for(let it=0;it<R.length;it++){let ht=I[it];ht!==null&&(I[it]=null,R[it].disconnect(ht))}k=null,$=null,S.reset();for(let it in _)delete _[it];if(t.setRenderTarget(z),v=null,m=null,x=null,r=null,A=null,ee.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(U.width,U.height,!1),C!==null){let it=C.camera;it.fov=C.fov,it.zoom=C.zoom,it.updateProjectionMatrix(),C=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){a=it,i.isPresenting===!0&&Wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){u=it,i.isPresenting===!0&&Wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(it){d=it},this.getBaseLayer=function(){return m!==null?m:v},this.getBinding=function(){return x===null&&P&&(x=new XRWebGLBinding(r,e)),x},this.getFrame=function(){return T},this.getSession=function(){return r},this.setSession=async function(it){if(r=it,r!==null){if(z=t.getRenderTarget(),r.addEventListener("select",nt),r.addEventListener("selectstart",nt),r.addEventListener("selectend",nt),r.addEventListener("squeeze",nt),r.addEventListener("squeezestart",nt),r.addEventListener("squeezeend",nt),r.addEventListener("end",tt),r.addEventListener("inputsourceschange",pt),N.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(U),P&&"createProjectionLayer"in XRWebGLBinding.prototype){let Rt=null,Yt=null,Et=null;N.depth&&(Et=N.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Rt=N.stencil?vi:Nn,Yt=N.stencil?ys:An);let Qt={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:a};x=this.getBinding(),m=x.createProjectionLayer(Qt),r.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),A=new Qe(m.textureWidth,m.textureHeight,{format:xn,type:tn,depthTexture:new hi(m.textureWidth,m.textureHeight,Yt,void 0,void 0,void 0,void 0,void 0,void 0,Rt),stencilBuffer:N.stencil,colorSpace:t.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}else{let Rt={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:a};v=new XRWebGLLayer(r,e,Rt),r.updateRenderState({baseLayer:v}),t.setPixelRatio(1),t.setSize(v.framebufferWidth,v.framebufferHeight,!1),A=new Qe(v.framebufferWidth,v.framebufferHeight,{format:xn,type:tn,colorSpace:t.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(f),d=null,c=await r.requestReferenceSpace(u),ee.setContext(r),ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function pt(it){for(let ht=0;ht<it.removed.length;ht++){let Rt=it.removed[ht],Yt=I.indexOf(Rt);Yt>=0&&(I[Yt]=null,R[Yt].disconnect(Rt))}for(let ht=0;ht<it.added.length;ht++){let Rt=it.added[ht],Yt=I.indexOf(Rt);if(Yt===-1){for(let Qt=0;Qt<R.length;Qt++)if(Qt>=I.length){I.push(Rt),Yt=Qt;break}else if(I[Qt]===null){I[Qt]=Rt,Yt=Qt;break}if(Yt===-1)break}let Et=R[Yt];Et&&Et.connect(Rt)}}let et=new J,ut=new J;function ft(it,ht,Rt){et.setFromMatrixPosition(ht.matrixWorld),ut.setFromMatrixPosition(Rt.matrixWorld);let Yt=et.distanceTo(ut),Et=ht.projectionMatrix.elements,Qt=Rt.projectionMatrix.elements,Me=Et[14]/(Et[10]-1),te=Et[14]/(Et[10]+1),ce=(Et[9]+1)/Et[5],ge=(Et[9]-1)/Et[5],re=(Et[8]-1)/Et[0],ye=(Qt[8]+1)/Qt[0],Ce=Me*re,ze=Me*ye,be=Yt/(-re+ye),Ae=be*-re;if(ht.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(Ae),it.translateZ(be),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Et[10]===-1)it.projectionMatrix.copy(ht.projectionMatrix),it.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{let G=Me+be,De=te+be,fe=Ce-Ae,L=ze+(Yt-Ae),M=ce*te/De*G,W=ge*te/De*G;it.projectionMatrix.makePerspective(fe,L,M,W,G,De),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function Ft(it,ht){ht===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(ht.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(r===null)return;let ht=it.near,Rt=it.far;S.texture!==null&&(S.depthNear>0&&(ht=S.depthNear),S.depthFar>0&&(Rt=S.depthFar)),j.near=X.near=B.near=ht,j.far=X.far=B.far=Rt,(k!==j.near||$!==j.far)&&(r.updateRenderState({depthNear:j.near,depthFar:j.far}),k=j.near,$=j.far),j.layers.mask=it.layers.mask|6,B.layers.mask=j.layers.mask&-5,X.layers.mask=j.layers.mask&-3;let Yt=it.parent,Et=j.cameras;Ft(j,Yt);for(let Qt=0;Qt<Et.length;Qt++)Ft(Et[Qt],Yt);Et.length===2?ft(j,B,X):j.projectionMatrix.copy(B.projectionMatrix),C===null&&it.isPerspectiveCamera&&(C={camera:it,fov:it.fov,zoom:it.zoom}),Lt(it,j,Yt)};function Lt(it,ht,Rt){Rt===null?it.matrix.copy(ht.matrixWorld):(it.matrix.copy(Rt.matrixWorld),it.matrix.invert(),it.matrix.multiply(ht.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(ht.projectionMatrix),it.projectionMatrixInverse.copy(ht.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=ls*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(m===null&&v===null))return f},this.setFoveation=function(it){f=it,m!==null&&(m.fixedFoveation=it),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=it)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(j)},this.getCameraTexture=function(it){return _[it]};let Jt=null;function Xt(it,ht){if(g=ht.getViewerPose(d||c),T=ht,g!==null){let Rt=g.views;v!==null&&(t.setRenderTargetFramebuffer(A,v.framebuffer),t.setRenderTarget(A));let Yt=!1;Rt.length!==j.cameras.length&&(j.cameras.length=0,Yt=!0);for(let te=0;te<Rt.length;te++){let ce=Rt[te],ge=null;if(v!==null)ge=v.getViewport(ce);else{let ye=x.getViewSubImage(m,ce);ge=ye.viewport,te===0&&(t.setRenderTargetTextures(A,ye.colorTexture,ye.depthStencilTexture),t.setRenderTarget(A))}let re=Y[te];re===void 0&&(re=new Ge,re.layers.enable(te),re.viewport=new we,Y[te]=re),re.matrix.fromArray(ce.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(ce.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(ge.x,ge.y,ge.width,ge.height),te===0&&(j.matrix.copy(re.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Yt===!0&&j.cameras.push(re)}let Et=r.enabledFeatures;if(Et&&Et.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&P){x=i.getBinding();let te=x.getDepthInformation(Rt[0]);te&&te.isValid&&te.texture&&S.init(te,r.renderState)}if(Et&&Et.includes("camera-access")&&P){t.state.unbindTexture(),x=i.getBinding();for(let te=0;te<Rt.length;te++){let ce=Rt[te].camera;if(ce){let ge=_[ce];ge||(ge=new qs,_[ce]=ge);let re=x.getCameraImage(ce);ge.sourceTexture=re}}}}for(let Rt=0;Rt<R.length;Rt++){let Yt=I[Rt],Et=R[Rt];Yt!==null&&Et!==void 0&&Et.update(Yt,ht,d||c)}Jt&&Jt(it,ht),ht.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ht}),T=null}let ee=new au;ee.setAnimationLoop(Xt),this.setAnimationLoop=function(it){Jt=it},this.dispose=function(){}}},N0=new Ee,du=new Kt;du.set(-1,0,0,0,1,0,0,0,1);function D0(n,t){function e(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function i(S,_){_.color.getRGB(S.fogColor.value,Vl(n)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function r(S,_,N,z,A){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?a(S,_):_.isMeshLambertMaterial?(a(S,_),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(a(S,_),x(S,_)):_.isMeshPhongMaterial?(a(S,_),g(S,_),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(a(S,_),m(S,_),_.isMeshPhysicalMaterial&&v(S,_,A)):_.isMeshMatcapMaterial?(a(S,_),T(S,_)):_.isMeshDepthMaterial?a(S,_):_.isMeshDistanceMaterial?(a(S,_),P(S,_)):_.isMeshNormalMaterial?a(S,_):_.isLineBasicMaterial?(c(S,_),_.isLineDashedMaterial&&u(S,_)):_.isPointsMaterial?f(S,_,N,z):_.isSpriteMaterial?d(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function a(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,e(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,e(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,e(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Ze&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,e(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Ze&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,e(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,e(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);let N=t.get(_),z=N.envMap,A=N.envMapRotation;z&&(S.envMap.value=z,S.envMapRotation.value.setFromMatrix4(N0.makeRotationFromEuler(A)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(du),S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,e(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,S.aoMapTransform))}function c(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,e(_.map,S.mapTransform))}function u(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function f(S,_,N,z){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*N,S.scale.value=z*.5,_.map&&(S.map.value=_.map,e(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,e(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function d(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,e(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,e(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function g(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function x(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function m(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function v(S,_,N){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Ze&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.retroreflectivity>0&&(S.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=N.texture,S.transmissionSamplerSize.value.set(N.width,N.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,_){_.matcap&&(S.matcap.value=_.matcap)}function P(S,_){let N=t.get(_).light;S.referencePosition.value.setFromMatrixPosition(N.matrixWorld),S.nearDistance.value=N.shadow.camera.near,S.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function O0(n,t,e,i){let r={},a={},c=[],u=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function f(A,R){let I=R.program;i.uniformBlockBinding(A,I)}function d(A,R){let I=r[A.id];I===void 0&&(S(A),I=g(A),r[A.id]=I,A.addEventListener("dispose",N));let U=R.program;i.updateUBOMapping(A,U);let b=t.render.frame;a[A.id]!==b&&(m(A),a[A.id]=b)}function g(A){let R=x();A.__bindingPointIndex=R;let I=n.createBuffer(),U=A.__size,b=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,I),n.bufferData(n.UNIFORM_BUFFER,U,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,R,I),I}function x(){for(let A=0;A<u;A++)if(c.indexOf(A)===-1)return c.push(A),A;return qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(A){let R=r[A.id],I=A.uniforms,U=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,R);for(let b=0,C=I.length;b<C;b++){let B=I[b];if(Array.isArray(B))for(let X=0,Y=B.length;X<Y;X++)v(B[X],b,X,U);else v(B,b,0,U)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function v(A,R,I,U){if(P(A,R,I,U)===!0){let b=A.__offset,C=A.value;if(Array.isArray(C)){let B=0;for(let X=0;X<C.length;X++){let Y=C[X],j=_(Y);T(Y,A.__data,B),typeof Y!="number"&&typeof Y!="boolean"&&!Y.isMatrix3&&!ArrayBuffer.isView(Y)&&(B+=j.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(C,A.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,b,A.__data)}}function T(A,R,I){typeof A=="number"||typeof A=="boolean"?R[0]=A:A.isMatrix3?(R[0]=A.elements[0],R[1]=A.elements[1],R[2]=A.elements[2],R[3]=0,R[4]=A.elements[3],R[5]=A.elements[4],R[6]=A.elements[5],R[7]=0,R[8]=A.elements[6],R[9]=A.elements[7],R[10]=A.elements[8],R[11]=0):ArrayBuffer.isView(A)?R.set(new A.constructor(A.buffer,A.byteOffset,R.length)):A.toArray(R,I)}function P(A,R,I,U){let b=A.value,C=R+"_"+I;if(U[C]===void 0)return typeof b=="number"||typeof b=="boolean"?U[C]=b:ArrayBuffer.isView(b)?U[C]=b.slice():U[C]=b.clone(),!0;{let B=U[C];if(typeof b=="number"||typeof b=="boolean"){if(B!==b)return U[C]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(B.equals(b)===!1)return B.copy(b),!0}}return!1}function S(A){let R=A.uniforms,I=0,U=16;for(let C=0,B=R.length;C<B;C++){let X=Array.isArray(R[C])?R[C]:[R[C]];for(let Y=0,j=X.length;Y<j;Y++){let k=X[Y],$=Array.isArray(k.value)?k.value:[k.value];for(let nt=0,tt=$.length;nt<tt;nt++){let pt=$[nt],et=_(pt),ut=I%U,ft=ut%et.boundary,Ft=ut+ft;I+=ft,Ft!==0&&U-Ft<et.storage&&(I+=U-Ft),k.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=I,I+=et.storage}}}let b=I%U;return b>0&&(I+=U-b),A.__size=I,A.__cache={},this}function _(A){let R={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(R.boundary=4,R.storage=4):A.isVector2?(R.boundary=8,R.storage=8):A.isVector3||A.isColor?(R.boundary=16,R.storage=12):A.isVector4?(R.boundary=16,R.storage=16):A.isMatrix3?(R.boundary=48,R.storage=48):A.isMatrix4?(R.boundary=64,R.storage=64):A.isTexture?Wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(R.boundary=16,R.storage=A.byteLength):Wt("WebGLRenderer: Unsupported uniform value type.",A),R}function N(A){let R=A.target;R.removeEventListener("dispose",N);let I=c.indexOf(R.__bindingPointIndex);c.splice(I,1),n.deleteBuffer(r[R.id]),delete r[R.id],delete a[R.id]}function z(){for(let A in r)n.deleteBuffer(r[A]);c=[],r={},a={}}return{bind:f,update:d,dispose:z}}var U0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Un=null;function F0(){return Un===null&&(Un=new lo(U0,16,16,yi,Cn),Un.name="DFG_LUT",Un.minFilter=Fe,Un.magFilter=Fe,Un.wrapS=Ln,Un.wrapT=Ln,Un.generateMipmaps=!1,Un.needsUpdate=!0),Un}var va=class{constructor(t={}){let{canvas:e=Lh(),context:i=null,depth:r=!0,stencil:a=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:m=!1,outputBufferType:v=tn}=t;this.isWebGLRenderer=!0;let T;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=i.getContextAttributes().alpha}else T=c;let P=v,S=new Set([Oo,Do,No]),_=new Set([tn,An,vs,ys,Ro,Lo]),N=new Uint32Array(4),z=new Int32Array(4),A=new J,R=null,I=null,U=[],b=[],C=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let B=this,X=!1,Y=null,j=null,k=null,$=null;this._outputColorSpace=on;let nt=0,tt=0,pt=null,et=-1,ut=null,ft=new we,Ft=new we,Lt=null,Jt=new ae(0),Xt=0,ee=e.width,it=e.height,ht=1,Rt=null,Yt=null,Et=new we(0,0,ee,it),Qt=new we(0,0,ee,it),Me=!1,te=new ds,ce=!1,ge=!1,re=new Ee,ye=new J,Ce=new we,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},be=!1;function Ae(){return pt===null?ht:1}let G=i;function De(E,F){return e.getContext(E,F)}let fe,L,M,W,K,st,_t,vt,rt,ct,St,Bt,wt,yt,kt,Ht,jt,V,Mt,lt,bt,It,mt;try{let E={alpha:!0,depth:r,stencil:a,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",_e,!1),e.addEventListener("webglcontextrestored",he,!1),e.addEventListener("webglcontextcreationerror",nn,!1),G===null){let F="webgl2";if(G=De(F,E),G===null)throw De(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Gt()}catch(E){throw e.removeEventListener("webglcontextlost",_e,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",nn,!1),qt("WebGLRenderer: "+E.message),E}function Gt(){fe=new Xm(G),fe.init(),bt=new I0(G,fe),L=new Dm(G,fe,t,bt),M=new P0(G,fe),L.reversedDepthBuffer&&m&&M.buffers.depth.setReversed(!0),j=G.createFramebuffer(),k=G.createFramebuffer(),$=G.createFramebuffer(),W=new qm(G),K=new p0,st=new C0(G,fe,M,K,L,bt,W),_t=new Hm(B),vt=new Jf(G),It=new Lm(G,vt),rt=new Wm(G,vt,W,It),ct=new Jm(G,rt,vt,It,W),V=new Zm(G,L,st),kt=new Om(K),St=new d0(B,_t,fe,L,It,kt),Bt=new D0(B,K),wt=new g0,yt=new M0(fe),jt=new Rm(B,_t,M,ct,T,f),Ht=new A0(B,ct,L),mt=new O0(G,W,L,M),Mt=new Nm(G,fe,W),lt=new Ym(G,fe,W),W.programs=St.programs,B.capabilities=L,B.extensions=fe,B.properties=K,B.renderLists=wt,B.shadowMap=Ht,B.state=M,B.info=W}P!==tn&&(C=new Km(P,e.width,e.height,u,r,a));let Ot=new rc(B,G);this.xr=Ot,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let E=fe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=fe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ht},this.setPixelRatio=function(E){E!==void 0&&(ht=E,this.setSize(ee,it,!1))},this.getSize=function(E){return E.set(ee,it)},this.setSize=function(E,F,Q=!0){if(Ot.isPresenting){Wt("WebGLRenderer: Can't change size while VR device is presenting.");return}ee=E,it=F,e.width=Math.floor(E*ht),e.height=Math.floor(F*ht),Q===!0&&(e.style.width=E+"px",e.style.height=F+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(ee*ht,it*ht).floor()},this.setDrawingBufferSize=function(E,F,Q){ee=E,it=F,ht=Q,e.width=Math.floor(E*Q),e.height=Math.floor(F*Q),this.setViewport(0,0,E,F)},this.setEffects=function(E){if(P===tn){qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let F=0;F<E.length;F++)if(E[F].isOutputPass===!0){Wt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(ft)},this.getViewport=function(E){return E.copy(Et)},this.setViewport=function(E,F,Q,q){E.isVector4?Et.set(E.x,E.y,E.z,E.w):Et.set(E,F,Q,q),M.viewport(ft.copy(Et).multiplyScalar(ht).round())},this.getScissor=function(E){return E.copy(Qt)},this.setScissor=function(E,F,Q,q){E.isVector4?Qt.set(E.x,E.y,E.z,E.w):Qt.set(E,F,Q,q),M.scissor(Ft.copy(Qt).multiplyScalar(ht).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(E){M.setScissorTest(Me=E)},this.setOpaqueSort=function(E){Rt=E},this.setTransparentSort=function(E){Yt=E},this.getClearColor=function(E){return E.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor(...arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,Q=!0){let q=0;if(E){let Z=!1;if(pt!==null){let Pt=pt.texture.format;Z=S.has(Pt)}if(Z){let Pt=pt.texture.type,xt=_.has(Pt),At=jt.getClearColor(),Nt=jt.getClearAlpha(),zt=At.r,Tt=At.g,ne=At.b;xt?(N[0]=zt,N[1]=Tt,N[2]=ne,N[3]=Nt,G.clearBufferuiv(G.COLOR,0,N)):(z[0]=zt,z[1]=Tt,z[2]=ne,z[3]=Nt,G.clearBufferiv(G.COLOR,0,z))}else q|=G.COLOR_BUFFER_BIT}F&&(q|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(q|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&G.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),Y=E},this.dispose=function(){e.removeEventListener("webglcontextlost",_e,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",nn,!1),jt.dispose(),wt.dispose(),yt.dispose(),K.dispose(),_t.dispose(),ct.dispose(),It.dispose(),mt.dispose(),St.dispose(),Ot.dispose(),Ot.removeEventListener("sessionstart",Sr),Ot.removeEventListener("sessionend",Mr),Vn.stop()};function _e(E){E.preventDefault(),Bl("WebGLRenderer: Context Lost."),X=!0}function he(){Bl("WebGLRenderer: Context Restored."),X=!1;let E=W.autoReset,F=Ht.enabled,Q=Ht.autoUpdate,q=Ht.needsUpdate,Z=Ht.type;Gt(),W.autoReset=E,Ht.enabled=F,Ht.autoUpdate=Q,Ht.needsUpdate=q,Ht.type=Z}function nn(E){qt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function pn(E){let F=E.target;F.removeEventListener("dispose",pn),Da(F)}function Da(E){Oa(E),K.remove(E)}function Oa(E){let F=K.get(E).programs;F!==void 0&&(F.forEach(function(Q){St.releaseProgram(Q)}),E.isShaderMaterial&&St.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,Q,q,Z,Pt){F===null&&(F=ze);let xt=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,At=ei(E,F,Q,q,Z);M.setMaterial(q,xt);let Nt=Q.index,zt=1;if(q.wireframe===!0){if(Nt=rt.getWireframeAttribute(Q),Nt===void 0)return;zt=2}let Tt=Q.drawRange,ne=Q.attributes.position,Dt=Tt.start*zt,ue=(Tt.start+Tt.count)*zt;Pt!==null&&(Dt=Math.max(Dt,Pt.start*zt),ue=Math.min(ue,(Pt.start+Pt.count)*zt)),Nt!==null?(Dt=Math.max(Dt,0),ue=Math.min(ue,Nt.count)):ne!=null&&(Dt=Math.max(Dt,0),ue=Math.min(ue,ne.count));let Pe=ue-Dt;if(Pe<0||Pe===1/0)return;It.setup(Z,q,At,Q,Nt);let xe,s=Mt;if(Nt!==null&&(xe=vt.get(Nt),s=lt,s.setIndex(xe)),Z.isMesh)q.wireframe===!0?(M.setLineWidth(q.wireframeLinewidth*Ae()),s.setMode(G.LINES)):s.setMode(G.TRIANGLES);else if(Z.isLine){let o=q.linewidth;o===void 0&&(o=1),M.setLineWidth(o*Ae()),Z.isLineSegments?s.setMode(G.LINES):Z.isLineLoop?s.setMode(G.LINE_LOOP):s.setMode(G.LINE_STRIP)}else Z.isPoints?s.setMode(G.POINTS):Z.isSprite&&s.setMode(G.TRIANGLES);if(Z.isBatchedMesh)if(fe.get("WEBGL_multi_draw"))s.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let o=Z._multiDrawStarts,l=Z._multiDrawCounts,h=Z._multiDrawCount,p=Nt?vt.get(Nt).bytesPerElement:1,y=K.get(q).currentProgram.getUniforms();for(let w=0;w<h;w++)y.setValue(G,"_gl_DrawID",w),s.render(o[w]/p,l[w])}else if(Z.isInstancedMesh)s.renderInstances(Dt,Pe,Z.count);else if(Q.isInstancedBufferGeometry){let o=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,l=Math.min(Q.instanceCount,o);s.renderInstances(Dt,Pe,l)}else s.render(Dt,Pe)};function yr(E,F,Q,q){Y!==null&&E.isNodeMaterial&&Y.setObject(q,E),ce===!0&&kt.setState(E,Q,!1),E.transparent===!0&&E.side===Dn&&E.forceSinglePass===!1?(E.side=Ze,E.needsUpdate=!0,Vi(E,F,q),E.side=gi,E.needsUpdate=!0,Vi(E,F,q),E.side=Dn):Vi(E,F,q)}this.compile=function(E,F,Q=null){Q===null&&(Q=E),Y!==null&&Y.renderStart(E,F,Q),I=yt.get(Q),I.init(F),b.push(I),Q.traverseVisible(function(Z){Z.isLight&&Z.layers.test(F.layers)&&(I.pushLight(Z),Z.castShadow&&I.pushShadow(Z))}),E!==Q&&E.traverseVisible(function(Z){Z.isLight&&Z.layers.test(F.layers)&&(I.pushLight(Z),Z.castShadow&&I.pushShadow(Z))}),I.setupLights(),Y!==null&&Y.updateLights(I.state.lightsArray),ge=this.localClippingEnabled,ce=kt.init(this.clippingPlanes,ge),ce===!0&&kt.setGlobalState(this.clippingPlanes,F),Y!==null&&Ht.render(I.state.shadowsArray,Q,F);let q=new Set;return E.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let Pt=Z.material;if(Pt)if(Array.isArray(Pt))for(let xt=0;xt<Pt.length;xt++){let At=Pt[xt];yr(At,Q,F,Z),q.add(At)}else yr(Pt,Q,F,Z),q.add(Pt)}),I=b.pop(),Y!==null&&Y.renderEnd(),q},this.compileAsync=function(E,F,Q=null){let q=this.compile(E,F,Q);return new Promise(Z=>{function Pt(){if(q.forEach(function(xt){let Nt=K.get(xt).currentProgram;(Nt===void 0||Nt.isReady())&&q.delete(xt)}),q.size===0){Z(E);return}setTimeout(Pt,10)}fe.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let Cs=null;function Ua(E){Cs&&Cs(E)}function Sr(){Vn.stop()}function Mr(){Vn.start()}let Vn=new au;Vn.setAnimationLoop(Ua),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(E){Cs=E,Ot.setAnimationLoop(E),E===null?Vn.stop():Vn.start()},Ot.addEventListener("sessionstart",Sr),Ot.addEventListener("sessionend",Mr),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;Y!==null&&Y.renderStart(E,F);let Q=Ot.enabled===!0&&Ot.isPresenting===!0,q=C!==null&&(pt===null||Q)&&C.begin(B,pt);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Ot.enabled===!0&&Ot.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Ot.cameraAutoUpdate===!0&&Ot.updateCamera(F),F=Ot.getCamera()),E.isScene===!0&&E.onBeforeRender(B,E,F,pt),I=yt.get(E,b.length),I.init(F),I.state.textureUnits=st.getTextureUnits(),b.push(I),re.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),te.setFromProjectionMatrix(re,bn,F.reversedDepth),ge=this.localClippingEnabled,ce=kt.init(this.clippingPlanes,ge),R=wt.get(E,U.length),R.init(),U.push(R),Ot.enabled===!0&&Ot.isPresenting===!0){let xt=B.xr.getDepthSensingMesh();xt!==null&&Is(xt,F,-1/0,B.sortObjects)}Is(E,F,0,B.sortObjects),R.finish(),Y!==null&&Y.updateLights(I.state.lightsArray),B.sortObjects===!0&&R.sort(Rt,Yt),be=Ot.enabled===!1||Ot.isPresenting===!1||Ot.hasDepthSensing()===!1,be&&jt.addToRenderList(R,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ce===!0&&kt.beginShadows();let Z=I.state.shadowsArray;if(Ht.render(Z,E,F),ce===!0&&kt.endShadows(),(q&&C.hasRenderPass())===!1){let xt=R.opaque,At=R.transmissive;if(I.setupLights(),F.isArrayCamera){let Nt=F.cameras;if(At.length>0)for(let zt=0,Tt=Nt.length;zt<Tt;zt++){let ne=Nt[zt];ti(xt,At,E,ne)}be&&jt.render(E);for(let zt=0,Tt=Nt.length;zt<Tt;zt++){let ne=Nt[zt];br(R,E,ne,ne.viewport)}}else At.length>0&&ti(xt,At,E,F),be&&jt.render(E),br(R,E,F)}pt!==null&&tt===0&&(st.updateMultisampleRenderTarget(pt),st.updateRenderTargetMipmap(pt)),q&&C.end(B),E.isScene===!0&&E.onAfterRender(B,E,F),It.resetDefaultState(),et=-1,ut=null,b.pop(),b.length>0?(I=b[b.length-1],st.setTextureUnits(I.state.textureUnits),ce===!0&&kt.setGlobalState(B.clippingPlanes,I.state.camera)):I=null,U.pop(),U.length>0?R=U[U.length-1]:R=null,Y!==null&&Y.renderEnd()};function Is(E,F,Q,q){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)Q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLightProbeGrid)I.pushLightProbeGrid(E);else if(E.isLight)I.pushLight(E),E.castShadow&&I.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(te)){q&&Ce.setFromMatrixPosition(E.matrixWorld).applyMatrix4(re);let xt=ct.update(E),At=E.material;At.visible&&R.push(E,xt,At,Q,Ce.z,null,F)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(te))){let xt=ct.update(E),At=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ce.copy(E.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Ce.copy(xt.boundingSphere.center)),Ce.applyMatrix4(E.matrixWorld).applyMatrix4(re)),Array.isArray(At)){let Nt=xt.groups;for(let zt=0,Tt=Nt.length;zt<Tt;zt++){let ne=Nt[zt],Dt=At[ne.materialIndex];Dt&&Dt.visible&&R.push(E,xt,Dt,Q,Ce.z,ne,F)}}else At.visible&&R.push(E,xt,At,Q,Ce.z,null,F)}}let Pt=E.children;for(let xt=0,At=Pt.length;xt<At;xt++)Is(Pt[xt],F,Q,q)}function br(E,F,Q,q){let{opaque:Z,transmissive:Pt,transparent:xt}=E;I.setupLightsView(Q),ce===!0&&kt.setGlobalState(B.clippingPlanes,Q),q&&M.viewport(ft.copy(q)),Z.length>0&&bi(Z,F,Q),Pt.length>0&&bi(Pt,F,Q),xt.length>0&&bi(xt,F,Q),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function ti(E,F,Q,q){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[q.id]===void 0){let Dt=fe.has("EXT_color_buffer_half_float")||fe.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[q.id]=new Qe(1,1,{generateMipmaps:!0,type:Dt?Cn:tn,minFilter:xi,samples:Math.max(4,L.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:le.workingColorSpace})}let Pt=I.state.transmissionRenderTarget[q.id],xt=q.viewport||ft;Pt.setSize(xt.z*B.transmissionResolutionScale,xt.w*B.transmissionResolutionScale);let At=B.getRenderTarget(),Nt=B.getActiveCubeFace(),zt=B.getActiveMipmapLevel();B.setRenderTarget(Pt),B.getClearColor(Jt),Xt=B.getClearAlpha(),Xt<1&&B.setClearColor(16777215,.5),B.clear(),be&&jt.render(Q);let Tt=B.toneMapping;B.toneMapping=wn;let ne=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),I.setupLightsView(q),ce===!0&&kt.setGlobalState(B.clippingPlanes,q),bi(E,Q,q),st.updateMultisampleRenderTarget(Pt),st.updateRenderTargetMipmap(Pt),fe.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let ue=0,Pe=F.length;ue<Pe;ue++){let xe=F[ue],{object:s,geometry:o,material:l,group:h}=xe;if(l.side===Dn&&s.layers.test(q.layers)){let p=l.side;l.side=Ze,l.needsUpdate=!0,Tr(s,Q,q,o,l,h),l.side=p,l.needsUpdate=!0,Dt=!0}}Dt===!0&&(st.updateMultisampleRenderTarget(Pt),st.updateRenderTargetMipmap(Pt))}B.setRenderTarget(At,Nt,zt),B.setClearColor(Jt,Xt),ne!==void 0&&(q.viewport=ne),B.toneMapping=Tt}function bi(E,F,Q){let q=F.isScene===!0?F.overrideMaterial:null;for(let Z=0,Pt=E.length;Z<Pt;Z++){let xt=E[Z],{object:At,geometry:Nt,group:zt}=xt,Tt=xt.material;Tt.allowOverride===!0&&q!==null&&(Tt=q),At.layers.test(Q.layers)&&Tr(At,F,Q,Nt,Tt,zt)}}function Tr(E,F,Q,q,Z,Pt){Y!==null&&Z.isNodeMaterial&&Y.setObject(E,Z),E.onBeforeRender(B,F,Q,q,Z,Pt),E.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Z.onBeforeRender(B,F,Q,q,E,Pt),Z.transparent===!0&&Z.side===Dn&&Z.forceSinglePass===!1?(Z.side=Ze,Z.needsUpdate=!0,B.renderBufferDirect(Q,F,q,Z,E,Pt),Z.side=gi,Z.needsUpdate=!0,B.renderBufferDirect(Q,F,q,Z,E,Pt),Z.side=Dn):B.renderBufferDirect(Q,F,q,Z,E,Pt),E.onAfterRender(B,F,Q,q,Z,Pt)}function Vi(E,F,Q){F.isScene!==!0&&(F=ze);let q=K.get(E),Z=I.state.lights,Pt=I.state.shadowsArray,xt=Z.state.version,At=St.getParameters(E,Z.state,Pt,F,Q,I.state.lightProbeGridArray),Nt=St.getProgramCacheKey(At),zt=q.programs;q.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?F.environment:null,q.fog=F.fog;let Tt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;q.envMap=_t.get(E.envMap||q.environment,Tt),q.envMapRotation=q.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,zt===void 0&&(E.addEventListener("dispose",pn),zt=new Map,q.programs=zt);let ne=zt.get(Nt);if(ne!==void 0){if(q.currentProgram===ne&&q.lightsStateVersion===xt)return wr(E,At),ne}else At.uniforms=St.getUniforms(E),Y!==null&&E.isNodeMaterial&&Y.build(E,Q,At),E.onBeforeCompile(At,B),ne=St.acquireProgram(At,Nt),zt.set(Nt,ne),q.uniforms=At.uniforms;let Dt=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Dt.clippingPlanes=kt.uniform),wr(E,At),q.needsLights=za(E),q.lightsStateVersion=xt,q.needsLights&&(Dt.ambientLightColor.value=Z.state.ambient,Dt.lightProbe.value=Z.state.probe,Dt.sunLights.value=Z.state.sun,Dt.sunLightShadows.value=Z.state.sunShadow,Dt.directionalLights.value=Z.state.directional,Dt.directionalLightShadows.value=Z.state.directionalShadow,Dt.spotLights.value=Z.state.spot,Dt.spotLightShadows.value=Z.state.spotShadow,Dt.rectAreaLights.value=Z.state.rectArea,Dt.ltc_1.value=Z.state.rectAreaLTC1,Dt.ltc_2.value=Z.state.rectAreaLTC2,Dt.pointLights.value=Z.state.point,Dt.pointLightShadows.value=Z.state.pointShadow,Dt.hemisphereLights.value=Z.state.hemi,Dt.sunShadowMatrix.value=Z.state.sunShadowMatrix,Dt.sunShadowCascade.value=Z.state.sunShadowCascade,Dt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Dt.spotLightMatrix.value=Z.state.spotLightMatrix,Dt.spotLightMap.value=Z.state.spotLightMap,Dt.pointShadowMatrix.value=Z.state.pointShadowMatrix),q.lightProbeGrid=I.state.lightProbeGridArray.length>0,q.currentProgram=ne,q.uniformsList=null,ne}function Er(E){if(E.uniformsList===null){let F=E.currentProgram.getUniforms();E.uniformsList=Ts.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function wr(E,F){let Q=K.get(E);Q.outputColorSpace=F.outputColorSpace,Q.batching=F.batching,Q.batchingColor=F.batchingColor,Q.instancing=F.instancing,Q.instancingColor=F.instancingColor,Q.instancingMorph=F.instancingMorph,Q.skinning=F.skinning,Q.morphTargets=F.morphTargets,Q.morphNormals=F.morphNormals,Q.morphColors=F.morphColors,Q.morphTargetsCount=F.morphTargetsCount,Q.numClippingPlanes=F.numClippingPlanes,Q.numIntersection=F.numClipIntersection,Q.vertexAlphas=F.vertexAlphas,Q.vertexTangents=F.vertexTangents,Q.toneMapping=F.toneMapping}function Fa(E,F){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;A.setFromMatrixPosition(F.matrixWorld);for(let Q=0,q=E.length;Q<q;Q++){let Z=E[Q];if(Z.texture!==null&&Z.boundingBox.containsPoint(A))return Z}return null}function ei(E,F,Q,q,Z){F.isScene!==!0&&(F=ze),st.resetTextureUnits();let Pt=F.fog,xt=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?F.environment:null,At=pt===null?B.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:le.workingColorSpace,Nt=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,zt=_t.get(q.envMap||xt,Nt),Tt=q.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,ne=!!Q.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Dt=!!Q.morphAttributes.position,ue=!!Q.morphAttributes.normal,Pe=!!Q.morphAttributes.color,xe=wn;q.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(xe=B.toneMapping);let s=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,o=s!==void 0?s.length:0,l=K.get(q),h=I.state.lights;if(ce===!0&&(ge===!0||E!==ut)){let gt=E===ut&&q.id===et;kt.setState(q,E,gt)}let p=!1;q.version===l.__version?(l.needsLights&&l.lightsStateVersion!==h.state.version||l.outputColorSpace!==At||Z.isBatchedMesh&&l.batching===!1||!Z.isBatchedMesh&&l.batching===!0||Z.isBatchedMesh&&l.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&l.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&l.instancing===!1||!Z.isInstancedMesh&&l.instancing===!0||Z.isSkinnedMesh&&l.skinning===!1||!Z.isSkinnedMesh&&l.skinning===!0||Z.isInstancedMesh&&l.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&l.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&l.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&l.instancingMorph===!1&&Z.morphTexture!==null||l.envMap!==zt||q.fog===!0&&l.fog!==Pt||l.numClippingPlanes!==void 0&&(l.numClippingPlanes!==kt.numPlanes||l.numIntersection!==kt.numIntersection)||l.vertexAlphas!==Tt||l.vertexTangents!==ne||l.morphTargets!==Dt||l.morphNormals!==ue||l.morphColors!==Pe||l.toneMapping!==xe||l.morphTargetsCount!==o||!!l.lightProbeGrid!=I.state.lightProbeGridArray.length>0)&&(p=!0):(p=!0,l.__version=q.version);let y=l.currentProgram;p===!0&&(y=Vi(q,F,Z),Y&&q.isNodeMaterial&&Y.onUpdateProgram(q,y,l));let w=!1,D=!1,O=!1,H=y.getUniforms(),at=l.uniforms;if(M.useProgram(y.program)&&(w=!0,D=!0,O=!0),q.id!==et&&(et=q.id,D=!0),l.needsLights){let gt=Fa(I.state.lightProbeGridArray,Z);l.lightProbeGrid!==gt&&(l.lightProbeGrid=gt,D=!0)}if(w||ut!==E){M.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),H.setValue(G,"projectionMatrix",E.projectionMatrix),H.setValue(G,"viewMatrix",E.matrixWorldInverse);let Vt=H.map.cameraPosition;Vt!==void 0&&Vt.setValue(G,ye.setFromMatrixPosition(E.matrixWorld)),L.logarithmicDepthBuffer&&H.setValue(G,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&H.setValue(G,"isOrthographic",E.isOrthographicCamera===!0),ut!==E&&(ut=E,D=!0,O=!0)}if(l.needsLights&&(h.state.sunShadowMap.length>0&&H.setValue(G,"sunShadowMap",h.state.sunShadowMap,st),h.state.directionalShadowMap.length>0&&H.setValue(G,"directionalShadowMap",h.state.directionalShadowMap,st),h.state.spotShadowMap.length>0&&H.setValue(G,"spotShadowMap",h.state.spotShadowMap,st),h.state.pointShadowMap.length>0&&H.setValue(G,"pointShadowMap",h.state.pointShadowMap,st)),Z.isSkinnedMesh){H.setOptional(G,Z,"bindMatrix"),H.setOptional(G,Z,"bindMatrixInverse");let gt=Z.skeleton;gt&&(gt.boneTexture===null&&gt.computeBoneTexture(),H.setValue(G,"boneTexture",gt.boneTexture,st))}Z.isBatchedMesh&&(H.setOptional(G,Z,"batchingTexture"),H.setValue(G,"batchingTexture",Z._matricesTexture,st),H.setOptional(G,Z,"batchingIdTexture"),H.setValue(G,"batchingIdTexture",Z._indirectTexture,st),H.setOptional(G,Z,"batchingColorTexture"),Z._colorsTexture!==null&&H.setValue(G,"batchingColorTexture",Z._colorsTexture,st));let ot=Q.morphAttributes;if((ot.position!==void 0||ot.normal!==void 0||ot.color!==void 0)&&V.update(Z,Q,y),(D||l.receiveShadow!==Z.receiveShadow)&&(l.receiveShadow=Z.receiveShadow,H.setValue(G,"receiveShadow",Z.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&F.environment!==null&&(at.envMapIntensity.value=F.environmentIntensity),at.dfgLUT!==void 0&&(at.dfgLUT.value=F0()),D){if(H.setValue(G,"toneMappingExposure",B.toneMappingExposure),l.needsLights&&Ba(at,O),Pt&&q.fog===!0&&Bt.refreshFogUniforms(at,Pt),Bt.refreshMaterialUniforms(at,q,ht,it,I.state.transmissionRenderTarget[E.id]),l.needsLights&&l.lightProbeGrid){let gt=l.lightProbeGrid;at.probesSH.value=gt.texture,at.probesMin.value.copy(gt.boundingBox.min),at.probesMax.value.copy(gt.boundingBox.max),at.probesResolution.value.copy(gt.resolution)}Ts.upload(G,Er(l),at,st)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ts.upload(G,Er(l),at,st),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&H.setValue(G,"center",Z.center),H.setValue(G,"modelViewMatrix",Z.modelViewMatrix),H.setValue(G,"normalMatrix",Z.normalMatrix),H.setValue(G,"modelMatrix",Z.matrixWorld),q.uniformsGroups!==void 0){let gt=q.uniformsGroups;for(let Vt=0,$t=gt.length;Vt<$t;Vt++){let ie=gt[Vt];mt.update(ie,y),mt.bind(ie,y)}}return y}function Ba(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.sunLights.needsUpdate=F,E.sunLightShadows.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function za(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return nt},this.getActiveMipmapLevel=function(){return tt},this.getRenderTarget=function(){return pt},this.setRenderTargetTextures=function(E,F,Q){let q=K.get(E);q.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),K.get(E.texture).__webglTexture=F,K.get(E.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Q,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){let Q=K.get(E);Q.__webglFramebuffer=F,Q.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,Q=0){pt=E,nt=F,tt=Q;let q=null,Z=!1,Pt=!1;if(E){let At=K.get(E);if(At.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(G.FRAMEBUFFER,At.__webglFramebuffer),ft.copy(E.viewport),Ft.copy(E.scissor),Lt=E.scissorTest,M.viewport(ft),M.scissor(Ft),M.setScissorTest(Lt),et=-1;return}else if(At.__webglFramebuffer===void 0)st.setupRenderTarget(E);else if(At.__hasExternalTextures)st.rebindTextures(E,K.get(E.texture).__webglTexture,K.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Tt=E.depthTexture;if(At.__boundDepthTexture!==Tt){if(Tt!==null&&K.has(Tt)&&(E.width!==Tt.image.width||E.height!==Tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");st.setupDepthRenderbuffer(E)}}let Nt=E.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(Pt=!0);let zt=K.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(zt[F])?q=zt[F][Q]:q=zt[F],Z=!0):E.samples>0&&st.useMultisampledRTT(E)===!1?q=K.get(E).__webglMultisampledFramebuffer:Array.isArray(zt)?q=zt[Q]:q=zt,ft.copy(E.viewport),Ft.copy(E.scissor),Lt=E.scissorTest}else ft.copy(Et).multiplyScalar(ht).floor(),Ft.copy(Qt).multiplyScalar(ht).floor(),Lt=Me;if(Q!==0&&(q=j),M.bindFramebuffer(G.FRAMEBUFFER,q)&&M.drawBuffers(E,q),M.viewport(ft),M.scissor(Ft),M.setScissorTest(Lt),Z){let At=K.get(E.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+F,At.__webglTexture,Q)}else if(Pt){let At=F;for(let Nt=0;Nt<E.textures.length;Nt++){let zt=K.get(E.textures[Nt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Nt,zt.__webglTexture,Q,At)}}else if(E!==null&&Q!==0){let At=K.get(E.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,At.__webglTexture,Q)}et=-1};function Ar(E){let F=K.get(E);return(F.__readFormat!==E.format||F.__readType!==E.type)&&(F.__readFormat=E.format,F.__readType=E.type,F.__formatReadable=L.textureFormatReadable(E.format),F.__typeReadable=L.textureTypeReadable(E.type)),F}this.readRenderTargetPixels=function(E,F,Q,q,Z,Pt,xt,At=0){if(!(E&&E.isWebGLRenderTarget)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=K.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xt!==void 0&&(Nt=Nt[xt]),Nt){M.bindFramebuffer(G.FRAMEBUFFER,Nt);try{let zt=E.textures[At],Tt=zt.format,ne=zt.type;E.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+At);let Dt=Ar(zt);if(Dt.__formatReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Dt.__typeReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-q&&Q>=0&&Q<=E.height-Z&&G.readPixels(F,Q,q,Z,bt.convert(Tt),bt.convert(ne),Pt)}finally{let zt=pt!==null?K.get(pt).__webglFramebuffer:null;M.bindFramebuffer(G.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(E,F,Q,q,Z,Pt,xt,At=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=K.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xt!==void 0&&(Nt=Nt[xt]),Nt)if(F>=0&&F<=E.width-q&&Q>=0&&Q<=E.height-Z){M.bindFramebuffer(G.FRAMEBUFFER,Nt);let zt=E.textures[At],Tt=zt.format,ne=zt.type;E.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+At);let Dt=Ar(zt);if(Dt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Dt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ue=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,ue),G.bufferData(G.PIXEL_PACK_BUFFER,Pt.byteLength,G.STREAM_READ),G.readPixels(F,Q,q,Z,bt.convert(Tt),bt.convert(ne),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let Pe=pt!==null?K.get(pt).__webglFramebuffer:null;M.bindFramebuffer(G.FRAMEBUFFER,Pe);let xe=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Dh(G,xe,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,ue),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Pt),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(ue),G.deleteSync(xe),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,Q=0){let q=Math.pow(2,-Q),Z=Math.floor(E.image.width*q),Pt=Math.floor(E.image.height*q),xt=F!==null?F.x:0,At=F!==null?F.y:0;st.setTexture2D(E,0),G.copyTexSubImage2D(G.TEXTURE_2D,Q,0,0,xt,At,Z,Pt),M.unbindTexture()},this.copyTextureToTexture=function(E,F,Q=null,q=null,Z=0,Pt=0){let xt,At,Nt,zt,Tt,ne,Dt,ue,Pe,xe=E.isCompressedTexture?E.mipmaps[Pt]:E.image;if(Q!==null)xt=Q.max.x-Q.min.x,At=Q.max.y-Q.min.y,Nt=Q.isBox3?Q.max.z-Q.min.z:1,zt=Q.min.x,Tt=Q.min.y,ne=Q.isBox3?Q.min.z:0;else{let at=Math.pow(2,-Z);xt=Math.floor(xe.width*at),At=Math.floor(xe.height*at),E.isDataArrayTexture?Nt=xe.depth:E.isData3DTexture?Nt=Math.floor(xe.depth*at):Nt=1,zt=0,Tt=0,ne=0}q!==null?(Dt=q.x,ue=q.y,Pe=q.z):(Dt=0,ue=0,Pe=0);let s=bt.convert(F.format),o=bt.convert(F.type),l;F.isData3DTexture?(st.setTexture3D(F,0),l=G.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(st.setTexture2DArray(F,0),l=G.TEXTURE_2D_ARRAY):(st.setTexture2D(F,0),l=G.TEXTURE_2D),M.activeTexture(G.TEXTURE0),M.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,F.flipY),M.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),M.pixelStorei(G.UNPACK_ALIGNMENT,F.unpackAlignment);let h=M.getParameter(G.UNPACK_ROW_LENGTH),p=M.getParameter(G.UNPACK_IMAGE_HEIGHT),y=M.getParameter(G.UNPACK_SKIP_PIXELS),w=M.getParameter(G.UNPACK_SKIP_ROWS),D=M.getParameter(G.UNPACK_SKIP_IMAGES);M.pixelStorei(G.UNPACK_ROW_LENGTH,xe.width),M.pixelStorei(G.UNPACK_IMAGE_HEIGHT,xe.height),M.pixelStorei(G.UNPACK_SKIP_PIXELS,zt),M.pixelStorei(G.UNPACK_SKIP_ROWS,Tt),M.pixelStorei(G.UNPACK_SKIP_IMAGES,ne);let O=E.isDataArrayTexture||E.isData3DTexture,H=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){let at=K.get(E),ot=K.get(F),gt=K.get(at.__renderTarget),Vt=K.get(ot.__renderTarget);M.bindFramebuffer(G.READ_FRAMEBUFFER,gt.__webglFramebuffer),M.bindFramebuffer(G.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let $t=0;$t<Nt;$t++)O&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,K.get(E).__webglTexture,Z,ne+$t),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,K.get(F).__webglTexture,Pt,Pe+$t)),G.blitFramebuffer(zt,Tt,xt,At,Dt,ue,xt,At,G.DEPTH_BUFFER_BIT,G.NEAREST);M.bindFramebuffer(G.READ_FRAMEBUFFER,null),M.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Z!==0||E.isRenderTargetTexture||K.has(E)){let at=K.get(E),ot=K.get(F);M.bindFramebuffer(G.READ_FRAMEBUFFER,k),M.bindFramebuffer(G.DRAW_FRAMEBUFFER,$);for(let gt=0;gt<Nt;gt++)O?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,at.__webglTexture,Z,ne+gt):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,at.__webglTexture,Z),H?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,ot.__webglTexture,Pt,Pe+gt):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,ot.__webglTexture,Pt),Z!==0?G.blitFramebuffer(zt,Tt,xt,At,Dt,ue,xt,At,G.COLOR_BUFFER_BIT,G.NEAREST):H?G.copyTexSubImage3D(l,Pt,Dt,ue,Pe+gt,zt,Tt,xt,At):G.copyTexSubImage2D(l,Pt,Dt,ue,zt,Tt,xt,At);M.bindFramebuffer(G.READ_FRAMEBUFFER,null),M.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else H?E.isDataTexture||E.isData3DTexture?G.texSubImage3D(l,Pt,Dt,ue,Pe,xt,At,Nt,s,o,xe.data):F.isCompressedArrayTexture?G.compressedTexSubImage3D(l,Pt,Dt,ue,Pe,xt,At,Nt,s,xe.data):G.texSubImage3D(l,Pt,Dt,ue,Pe,xt,At,Nt,s,o,xe):E.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Pt,Dt,ue,xt,At,s,o,xe.data):E.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Pt,Dt,ue,xe.width,xe.height,s,xe.data):G.texSubImage2D(G.TEXTURE_2D,Pt,Dt,ue,xt,At,s,o,xe);M.pixelStorei(G.UNPACK_ROW_LENGTH,h),M.pixelStorei(G.UNPACK_IMAGE_HEIGHT,p),M.pixelStorei(G.UNPACK_SKIP_PIXELS,y),M.pixelStorei(G.UNPACK_SKIP_ROWS,w),M.pixelStorei(G.UNPACK_SKIP_IMAGES,D),Pt===0&&F.generateMipmaps&&G.generateMipmap(l),M.unbindTexture()},this.initRenderTarget=function(E){K.get(E).__webglFramebuffer===void 0&&st.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?st.setTextureCube(E,0):E.isData3DTexture?st.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?st.setTexture2DArray(E,0):st.setTexture2D(E,0),M.unbindTexture()},this.resetState=function(){nt=0,tt=0,pt=null,M.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}};var pu={type:"change"},ac={type:"start"},gu={type:"end"},Ma=new Ci,mu=new an,z0=Math.cos(70*kl.DEG2RAD),Ne=new J,en=2*Math.PI,me={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},oc=1e-6,ba=class extends tr{constructor(t,e=null){super(t,e),this.state=me.NONE,this.target=new J,this.cursor=new J,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:pi.ROTATE,MIDDLE:pi.DOLLY,RIGHT:pi.PAN},this.touches={ONE:mi.ROTATE,TWO:mi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new J,this._lastQuaternion=new ln,this._lastTargetPosition=new J,this._quat=new ln().setFromUnitVectors(t.up,new J(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new gs,this._sphericalDelta=new gs,this._scale=1,this._panOffset=new J,this._rotateStart=new Zt,this._rotateEnd=new Zt,this._rotateDelta=new Zt,this._panStart=new Zt,this._panEnd=new Zt,this._panDelta=new Zt,this._dollyStart=new Zt,this._dollyEnd=new Zt,this._dollyDelta=new Zt,this._dollyDirection=new J,this._mouse=new Zt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=V0.bind(this),this._onPointerDown=k0.bind(this),this._onPointerUp=G0.bind(this),this._onContextMenu=J0.bind(this),this._onMouseWheel=W0.bind(this),this._onKeyDown=Y0.bind(this),this._onTouchStart=q0.bind(this),this._onTouchMove=Z0.bind(this),this._onMouseDown=H0.bind(this),this._onMouseMove=X0.bind(this),this._interceptControlDown=$0.bind(this),this._interceptControlUp=K0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=me.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(pu),this.update(),this.state=me.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;Ne.copy(e).sub(this.target),Ne.applyQuaternion(this._quat),this._spherical.setFromVector3(Ne),this.autoRotate&&this.state===me.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=en:i>Math.PI&&(i-=en),r<-Math.PI?r+=en:r>Math.PI&&(r-=en),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=c!=this._spherical.radius}if(Ne.setFromSpherical(this._spherical),Ne.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ne),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){let u=Ne.length();c=this._clampDistance(u*this._scale);let f=u-c;this.object.position.addScaledVector(this._dollyDirection,f),this.object.updateMatrixWorld(),a=!!f}else if(this.object.isOrthographicCamera){let u=new J(this._mouse.x,this._mouse.y,0);u.unproject(this.object);let f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=f!==this.object.zoom;let d=new J(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(u),this.object.updateMatrixWorld(),c=Ne.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(Ma.origin.copy(this.object.position),Ma.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ma.direction))<z0?this.object.lookAt(this.target):(mu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ma.intersectPlane(mu,this.target))))}else if(this.object.isOrthographicCamera){let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>oc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>oc||this._lastTargetPosition.distanceToSquared(this.target)>oc?(this.dispatchEvent(pu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?en/60*this.autoRotateSpeed*t:en/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ne.setFromMatrixColumn(e,0),Ne.multiplyScalar(-t),this._panOffset.add(Ne)}_panUp(t,e){this.screenSpacePanning===!0?Ne.setFromMatrixColumn(e,1):(Ne.setFromMatrixColumn(e,0),Ne.crossVectors(this.object.up,Ne)),Ne.multiplyScalar(t),this._panOffset.add(Ne)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Ne.copy(r).sub(this.target);let a=Ne.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*a/i.clientHeight,this.object.matrix),this._panUp(2*e*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=t-i.left,a=e-i.top,c=i.width,u=i.height;this._mouse.x=r/c*2-1,this._mouse.y=-(a/u)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(en*this._rotateDelta.x/e.clientHeight),this._rotateUp(en*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,a=Math.sqrt(i*i+r*r);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),a=.5*(t.pageY+i.y);this._rotateEnd.set(r,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(en*this._rotateDelta.x/e.clientHeight),this._rotateUp(en*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,a=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let c=(t.pageX+e.x)*.5,u=(t.pageY+e.y)*.5;this._updateZoomParameters(c,u)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Zt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function k0(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function V0(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function G0(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(gu),this.state=me.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function H0(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case pi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=me.DOLLY;break;case pi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=me.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=me.ROTATE}break;case pi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=me.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=me.PAN}break;default:this.state=me.NONE}this.state!==me.NONE&&this.dispatchEvent(ac)}function X0(n){switch(this.state){case me.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case me.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case me.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function W0(n){this.enabled===!1||this.enableZoom===!1||this.state!==me.NONE||(n.preventDefault(),this.dispatchEvent(ac),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(gu))}function Y0(n){this.enabled!==!1&&this._handleKeyDown(n)}function q0(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case mi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=me.TOUCH_ROTATE;break;case mi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=me.TOUCH_PAN;break;default:this.state=me.NONE}break;case 2:switch(this.touches.TWO){case mi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=me.TOUCH_DOLLY_PAN;break;case mi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=me.TOUCH_DOLLY_ROTATE;break;default:this.state=me.NONE}break;default:this.state=me.NONE}this.state!==me.NONE&&this.dispatchEvent(ac)}function Z0(n){switch(this._trackPointer(n),this.state){case me.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case me.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case me.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case me.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=me.NONE}}function J0(n){this.enabled!==!1&&n.preventDefault()}function $0(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function K0(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var vu=$u(_u(),1),Kn=vu.default,xu=1e3;function j0(n){return Kn.Clipper.CleanPolygons(n,2).map(t=>t.filter((e,i)=>{let r=t[(i+t.length-1)%t.length],a=t[(i+1)%t.length];return(e.X-r.X)*(a.Y-e.Y)!==(e.Y-r.Y)*(a.X-e.X)})).filter(t=>t.length>2)}function lc(n,t,e="union"){let i=new Kn.Clipper;i.StrictlySimple=!0,i.AddPaths(n,Kn.PolyType.ptSubject,!0),t.length&&i.AddPaths(t,Kn.PolyType.ptClip,!0);let r=[];return i.Execute({union:Kn.ClipType.ctUnion,difference:Kn.ClipType.ctDifference,intersection:Kn.ClipType.ctIntersection}[e],r,Kn.PolyFillType.pftNonZero,Kn.PolyFillType.pftNonZero),j0(r)}function cc(n){return n.map(t=>"M"+t.map(e=>`${e.X/xu},${e.Y/xu}`).join("L")+"Z").join("")}var Ye=Uint8Array,un=Uint16Array,mc=Int32Array,gc=new Ye([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),_c=new Ye([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),yu=new Ye([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),wu=function(n,t){for(var e=new un(31),i=0;i<31;++i)e[i]=t+=1<<n[i-1];for(var r=new mc(e[30]),i=1;i<30;++i)for(var a=e[i];a<e[i+1];++a)r[a]=a-e[i]<<5|i;return{b:e,r}},Au=wu(gc,2),Q0=Au.b,uc=Au.r;Q0[28]=258,uc[258]=28;var Pu=wu(_c,0),rS=Pu.b,Su=Pu.r,fc=new un(32768);for(de=0;de<32768;++de)jn=(de&43690)>>1|(de&21845)<<1,jn=(jn&52428)>>2|(jn&13107)<<2,jn=(jn&61680)>>4|(jn&3855)<<4,fc[de]=((jn&65280)>>8|(jn&255)<<8)>>1;var jn,de,mr=(function(n,t,e){for(var i=n.length,r=0,a=new un(t);r<i;++r)n[r]&&++a[n[r]-1];var c=new un(t);for(r=1;r<t;++r)c[r]=c[r-1]+a[r-1]<<1;var u;if(e){u=new un(1<<t);var f=15-t;for(r=0;r<i;++r)if(n[r])for(var d=r<<4|n[r],g=t-n[r],x=c[n[r]-1]++<<g,m=x|(1<<g)-1;x<=m;++x)u[fc[x]>>f]=d}else for(u=new un(i),r=0;r<i;++r)n[r]&&(u[r]=fc[c[n[r]-1]++]>>15-n[r]);return u}),Oi=new Ye(288);for(de=0;de<144;++de)Oi[de]=8;var de;for(de=144;de<256;++de)Oi[de]=9;var de;for(de=256;de<280;++de)Oi[de]=7;var de;for(de=280;de<288;++de)Oi[de]=8;var de,Ea=new Ye(32);for(de=0;de<32;++de)Ea[de]=5;var de,t_=mr(Oi,9,0);var e_=mr(Ea,5,0);var Cu=function(n){return(n+7)/8|0},Iu=function(n,t,e){return(t==null||t<0)&&(t=0),(e==null||e>n.length)&&(e=n.length),new Ye(n.subarray(t,e))};var n_=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],wa=function(n,t,e){var i=new Error(t||n_[n]);if(i.code=n,Error.captureStackTrace&&Error.captureStackTrace(i,wa),!e)throw i;return i};var Qn=function(n,t,e){e<<=t&7;var i=t/8|0;n[i]|=e,n[i+1]|=e>>8},dr=function(n,t,e){e<<=t&7;var i=t/8|0;n[i]|=e,n[i+1]|=e>>8,n[i+2]|=e>>16},hc=function(n,t){for(var e=[],i=0;i<n.length;++i)n[i]&&e.push({s:i,f:n[i]});var r=e.length,a=e.slice();if(!r)return{t:Lu,l:0};if(r==1){var c=new Ye(e[0].s+1);return c[e[0].s]=1,{t:c,l:1}}e.sort(function(R,I){return R.f-I.f}),e.push({s:-1,f:25001});var u=e[0],f=e[1],d=0,g=1,x=2;for(e[0]={s:-1,f:u.f+f.f,l:u,r:f};g!=r-1;)u=e[e[d].f<e[x].f?d++:x++],f=e[d!=g&&e[d].f<e[x].f?d++:x++],e[g++]={s:-1,f:u.f+f.f,l:u,r:f};for(var m=a[0].s,i=1;i<r;++i)a[i].s>m&&(m=a[i].s);var v=new un(m+1),T=dc(e[g-1],v,0);if(T>t){var i=0,P=0,S=T-t,_=1<<S;for(a.sort(function(I,U){return v[U.s]-v[I.s]||I.f-U.f});i<r;++i){var N=a[i].s;if(v[N]>t)P+=_-(1<<T-v[N]),v[N]=t;else break}for(P>>=S;P>0;){var z=a[i].s;v[z]<t?P-=1<<t-v[z]++-1:++i}for(;i>=0&&P;--i){var A=a[i].s;v[A]==t&&(--v[A],++P)}T=t}return{t:new Ye(v),l:T}},dc=function(n,t,e){return n.s==-1?Math.max(dc(n.l,t,e+1),dc(n.r,t,e+1)):t[n.s]=e},Mu=function(n){for(var t=n.length;t&&!n[--t];);for(var e=new un(++t),i=0,r=n[0],a=1,c=function(f){e[i++]=f},u=1;u<=t;++u)if(n[u]==r&&u!=t)++a;else{if(!r&&a>2){for(;a>138;a-=138)c(32754);a>2&&(c(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(c(r),--a;a>6;a-=6)c(8304);a>2&&(c(a-3<<5|8208),a=0)}for(;a--;)c(r);a=1,r=n[u]}return{c:e.subarray(0,i),n:t}},pr=function(n,t){for(var e=0,i=0;i<t.length;++i)e+=n[i]*t[i];return e},Ru=function(n,t,e){var i=e.length,r=Cu(t+2);n[r]=i&255,n[r+1]=i>>8,n[r+2]=n[r]^255,n[r+3]=n[r+1]^255;for(var a=0;a<i;++a)n[r+a+4]=e[a];return(r+4+i)*8},bu=function(n,t,e,i,r,a,c,u,f,d,g){Qn(t,g++,e),++r[256];for(var x=hc(r,15),m=x.t,v=x.l,T=hc(a,15),P=T.t,S=T.l,_=Mu(m),N=_.c,z=_.n,A=Mu(P),R=A.c,I=A.n,U=new un(19),b=0;b<N.length;++b)++U[N[b]&31];for(var b=0;b<R.length;++b)++U[R[b]&31];for(var C=hc(U,7),B=C.t,X=C.l,Y=19;Y>4&&!B[yu[Y-1]];--Y);var j=d+5<<3,k=pr(r,Oi)+pr(a,Ea)+c,$=pr(r,m)+pr(a,P)+c+14+3*Y+pr(U,B)+2*U[16]+3*U[17]+7*U[18];if(f>=0&&j<=k&&j<=$)return Ru(t,g,n.subarray(f,f+d));var nt,tt,pt,et;if(Qn(t,g,1+($<k)),g+=2,$<k){nt=mr(m,v,0),tt=m,pt=mr(P,S,0),et=P;var ut=mr(B,X,0);Qn(t,g,z-257),Qn(t,g+5,I-1),Qn(t,g+10,Y-4),g+=14;for(var b=0;b<Y;++b)Qn(t,g+3*b,B[yu[b]]);g+=3*Y;for(var ft=[N,R],Ft=0;Ft<2;++Ft)for(var Lt=ft[Ft],b=0;b<Lt.length;++b){var Jt=Lt[b]&31;Qn(t,g,ut[Jt]),g+=B[Jt],Jt>15&&(Qn(t,g,Lt[b]>>5&127),g+=Lt[b]>>12)}}else nt=t_,tt=Oi,pt=e_,et=Ea;for(var b=0;b<u;++b){var Xt=i[b];if(Xt>255){var Jt=Xt>>18&31;dr(t,g,nt[Jt+257]),g+=tt[Jt+257],Jt>7&&(Qn(t,g,Xt>>23&31),g+=gc[Jt]);var ee=Xt&31;dr(t,g,pt[ee]),g+=et[ee],ee>3&&(dr(t,g,Xt>>5&8191),g+=_c[ee])}else dr(t,g,nt[Xt]),g+=tt[Xt]}return dr(t,g,nt[256]),g+tt[256]},i_=new mc([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Lu=new Ye(0),s_=function(n,t,e,i,r,a){var c=a.z||n.length,u=new Ye(i+c+5*(1+Math.ceil(c/7e3))+r),f=u.subarray(i,u.length-r),d=a.l,g=(a.r||0)&7;if(t){g&&(f[0]=a.r>>3);for(var x=i_[t-1],m=x>>13,v=x&8191,T=(1<<e)-1,P=a.p||new un(32768),S=a.h||new un(T+1),_=Math.ceil(e/3),N=2*_,z=function(te){return(n[te]^n[te+1]<<_^n[te+2]<<N)&T},A=new mc(25e3),R=new un(288),I=new un(32),U=0,b=0,C=a.i||0,B=0,X=a.w||0,Y=0;C+2<c;++C){var j=z(C),k=C&32767,$=S[j];if(P[k]=$,S[j]=k,X<=C){var nt=c-C;if((U>7e3||B>24576)&&(nt>423||!d)){g=bu(n,f,0,A,R,I,b,B,Y,C-Y,g),B=U=b=0,Y=C;for(var tt=0;tt<286;++tt)R[tt]=0;for(var tt=0;tt<30;++tt)I[tt]=0}var pt=2,et=0,ut=v,ft=k-$&32767;if(nt>2&&j==z(C-ft))for(var Ft=Math.min(m,nt)-1,Lt=Math.min(32767,C),Jt=Math.min(258,nt);ft<=Lt&&--ut&&k!=$;){if(n[C+pt]==n[C+pt-ft]){for(var Xt=0;Xt<Jt&&n[C+Xt]==n[C+Xt-ft];++Xt);if(Xt>pt){if(pt=Xt,et=ft,Xt>Ft)break;for(var ee=Math.min(ft,Xt-2),it=0,tt=0;tt<ee;++tt){var ht=C-ft+tt&32767,Rt=P[ht],Yt=ht-Rt&32767;Yt>it&&(it=Yt,$=ht)}}}k=$,$=P[k],ft+=k-$&32767}if(et){A[B++]=268435456|uc[pt]<<18|Su[et];var Et=uc[pt]&31,Qt=Su[et]&31;b+=gc[Et]+_c[Qt],++R[257+Et],++I[Qt],X=C+pt,++U}else A[B++]=n[C],++R[n[C]]}}for(C=Math.max(C,X);C<c;++C)A[B++]=n[C],++R[n[C]];g=bu(n,f,d,A,R,I,b,B,Y,C-Y,g),d||(a.r=g&7|f[g/8|0]<<3,g-=7,a.h=S,a.p=P,a.i=C,a.w=X)}else{for(var C=a.w||0;C<c+d;C+=65535){var Me=C+65535;Me>=c&&(f[g/8|0]=d,Me=c),g=Ru(f,g+1,n.subarray(C,Me))}a.i=c}return Iu(u,0,i+Cu(g)+r)},r_=(function(){for(var n=new Int32Array(256),t=0;t<256;++t){for(var e=t,i=9;--i;)e=(e&1&&-306674912)^e>>>1;n[t]=e}return n})(),o_=function(){var n=-1;return{p:function(t){for(var e=n,i=0;i<t.length;++i)e=r_[e&255^t[i]]^e>>>8;n=e},d:function(){return~n}}};var a_=function(n,t,e,i,r){if(!r&&(r={l:1},t.dictionary)){var a=t.dictionary.subarray(-32768),c=new Ye(a.length+n.length);c.set(a),c.set(n,a.length),n=c,r.w=a.length}return s_(n,t.level==null?6:t.level,t.mem==null?r.l?Math.ceil(Math.max(8,Math.min(13,Math.log(n.length)))*1.5):20:12+t.mem,e,i,r)},Nu=function(n,t){var e={};for(var i in n)e[i]=n[i];for(var i in t)e[i]=t[i];return e};var Be=function(n,t,e){for(;e;++t)n[t]=e,e>>>=8};function l_(n,t){return a_(n,t||{},0,0)}var Du=function(n,t,e,i){for(var r in n){var a=n[r],c=t+r,u=i;Array.isArray(a)&&(u=Nu(i,a[1]),a=a[0]),ArrayBuffer.isView(a)?e[c]=[a,u]:(e[c+="/"]=[new Ye(0),u],Du(a,c,e,i))}},Tu=typeof TextEncoder<"u"&&new TextEncoder,c_=typeof TextDecoder<"u"&&new TextDecoder,h_=0;try{c_.decode(Lu,{stream:!0}),h_=1}catch{}function Ui(n,t){if(t){for(var e=new Ye(n.length),i=0;i<n.length;++i)e[i]=n.charCodeAt(i);return e}if(Tu)return Tu.encode(n);for(var r=n.length,a=new Ye(n.length+(n.length>>1)),c=0,u=function(g){a[c++]=g},i=0;i<r;++i){if(c+5>a.length){var f=new Ye(c+8+(r-i<<1));f.set(a),a=f}var d=n.charCodeAt(i);d<128||t?u(d):d<2048?(u(192|d>>6),u(128|d&63)):d>55295&&d<57344?(d=65536+(d&1047552)|n.charCodeAt(++i)&1023,u(240|d>>18),u(128|d>>12&63),u(128|d>>6&63),u(128|d&63)):(u(224|d>>12),u(128|d>>6&63),u(128|d&63))}return Iu(a,0,c)}var pc=function(n){var t=0;if(n)for(var e in n){var i=n[e].length;i>65535&&wa(9),t+=i+4}return t},Eu=function(n,t,e,i,r,a,c,u){var f=i.length,d=e.extra,g=u&&u.length,x=pc(d);Be(n,t,c!=null?33639248:67324752),t+=4,c!=null&&(n[t++]=20,n[t++]=e.os),n[t]=20,t+=2,n[t++]=e.flag<<1|(a<0&&8),n[t++]=r&&8,n[t++]=e.compression&255,n[t++]=e.compression>>8;var m=new Date(e.mtime==null?Date.now():e.mtime),v=m.getFullYear()-1980;if((v<0||v>119)&&wa(10),Be(n,t,v<<25|m.getMonth()+1<<21|m.getDate()<<16|m.getHours()<<11|m.getMinutes()<<5|m.getSeconds()>>1),t+=4,a!=-1&&(Be(n,t,e.crc),Be(n,t+4,a<0?-a-2:a),Be(n,t+8,e.size)),Be(n,t+12,f),Be(n,t+14,x),t+=16,c!=null&&(Be(n,t,g),Be(n,t+6,e.attrs),Be(n,t+10,c),t+=14),n.set(i,t),t+=f,x)for(var T in d){var P=d[T],S=P.length;Be(n,t,+T),Be(n,t+2,S),n.set(P,t+4),t+=4+S}return g&&(n.set(u,t),t+=g),t},u_=function(n,t,e,i,r){Be(n,t,101010256),Be(n,t+8,e),Be(n,t+10,e),Be(n,t+12,i),Be(n,t+16,r)};function xc(n,t){t||(t={});var e={},i=[];Du(n,"",e,t);var r=0,a=0;for(var c in e){var u=e[c],f=u[0],d=u[1],g=d.level==0?0:8,x=Ui(c),m=x.length,v=d.comment,T=v&&Ui(v),P=T&&T.length,S=pc(d.extra);m>65535&&wa(11);var _=g?l_(f,d):f,N=_.length,z=o_();z.p(f),i.push(Nu(d,{size:f.length,crc:z.d(),c:_,f:x,m:T,u:m!=c.length||T&&v.length!=P,o:r,compression:g})),r+=30+m+S+N,a+=76+2*(m+S)+(P||0)+N}for(var A=new Ye(a+22),R=r,I=a-r,U=0;U<i.length;++U){var x=i[U];Eu(A,x.o,x,x.f,x.u,x.c.length);var b=30+x.f.length+pc(x.extra);A.set(x.c,x.o+b),Eu(A,r,x,x.f,x.u,x.c.length,x.o,x.m),r+=16+b+(x.m?x.m.length:0)}return u_(A,r,i.length,I,R),A}var f_=9,Fi=n=>typeof Intl.Segmenter=="function"?[...new Intl.Segmenter("zh",{granularity:"grapheme"}).segment(n)].map(t=>t.segment):Array.from(n),Aa={shape:"flower",shapeText:"\u5F00\u5FC3\u6BCF\u4E00\u5929",rows:2,font:"noto",size:60,rim:3,round:1.2,surface:"flat",puff:4,content:"text",text:"\u4ECA\u5929\u4E5F\u8981\u5F00\u5F00\u5FC3\u5FC3\u5440",motif:"heart",reliefHeight:.8,artSize:27,artX:0,artY:0,artRotation:0,switches:"auto",tolerance:.1,hanging:!1,hole:4.5,side:"right",baseColor:"#5263e8",capColor:"#ffd25e",reliefColor:"#fffaf0",shapePaths:null,iconPaths:null,depth:null};function gr(n){if(!n||typeof n!="object")throw Error("\u8BBE\u8BA1\u683C\u5F0F\u4E0D\u6B63\u786E");for(let e of["shapeText","text"])if(typeof n[e]!="string"||n[e].length>128||Fi(n[e]).length>f_)throw Error("\u6587\u5B57\u6700\u591A 9 \u4E2A\u5B57\uFF0C\u8BF7\u7F29\u77ED\u540E\u518D\u751F\u6210");if(!Number.isInteger(n.rows)||typeof n.hanging!="boolean")throw Error("\u6392\u7248\u6216\u6302\u5B54\u8BBE\u7F6E\u65E0\u6548");let t={rows:[1,3],size:[28,240],rim:[2,7],round:[0,4],puff:[1,8],reliefHeight:[.4,2],artSize:[4,180],artX:[-120,120],artY:[-120,120],artRotation:[-180,180],tolerance:[0,.4],hole:[3,8]};for(let[e,[i,r]]of Object.entries(t))if(!Number.isFinite(n[e])||n[e]<i||n[e]>r)throw Error("\u53C2\u6570\u8D85\u51FA\u8303\u56F4\uFF1A"+e);for(let[e,i]of Object.entries({shape:["flower","round","square","cloud","heart","text","image"],font:["bold","noto"],surface:["flat","puffy"],content:["text","motif","image","none"],motif:["heart","star","puck","circle"],switches:["auto","1","2"],side:["left","right"]}))if(!i.includes(n[e]))throw Error("\u9009\u9879\u65E0\u6548\uFF1A"+e);for(let e of["baseColor","capColor","reliefColor"])if(!/^#[a-f0-9]{6}$/i.test(n[e]))throw Error("\u989C\u8272\u65E0\u6548");for(let e of["shapePaths","iconPaths"])if(n[e]!==null&&(!Array.isArray(n[e])||n[e].length>1e3||n[e].flat().length>16e3||!n[e].every(i=>Array.isArray(i)&&i.length>=3&&i.every(r=>Number.isFinite(r.X)&&Number.isFinite(r.Y)&&Math.abs(r.X)<1e6&&Math.abs(r.Y)<1e6))))throw Error("\u56FE\u6848\u8F6E\u5ED3\u65E0\u6548\u6216\u8FC7\u4E8E\u590D\u6742");if(n.depth!==null&&(!Array.isArray(n.depth)||n.depth.length!==1024||n.depth.some(e=>!Number.isFinite(e)||e<0||e>1)))throw Error("\u6DF1\u5EA6\u56FE\u65E0\u6548");return n}function vc(n){let t='<basematerials id="1">'+n.parts.map(i=>`<base name="${i.name}" displaycolor="${i.color.toUpperCase()}FF"/>`).join("")+"</basematerials>";for(let i=0;i<n.parts.length;i++){let r=n.parts[i],a=r.mesh;t+=`<object id="${10+i}" name="${r.name}" type="model" pid="1" pindex="${i}"><mesh><vertices>${a.vertices.map(c=>`<vertex x="${c[0]}" y="${c[1]}" z="${c[2]}"/>`).join("")}</vertices><triangles>${a.faces.map(c=>`<triangle v1="${c[0]}" v2="${c[1]}" v3="${c[2]}"/>`).join("")}</triangles></mesh></object>`}t+=`<object id="20" name="Keycap_assembly" type="model"><components>${n.parts.slice(1).map((i,r)=>`<component objectid="${11+r}"/>`).join("")}</components></object>`;let e=`<?xml version="1.0" encoding="UTF-8"?><model unit="millimeter" xml:lang="en-US" xmlns="http://schemas.microsoft.com/3dmanufacturing/core/2015/02"><metadata name="Title">XLENT Click \u2014 MX fit prototype</metadata><resources>${t}</resources><build><item objectid="10" transform="1 0 0 0 1 0 0 0 1 ${n.width/2} ${n.height/2} 0"/><item objectid="20" transform="1 0 0 0 1 0 0 0 1 ${n.width*1.5+8} ${n.height/2} 0"/></build></model>`;return xc({"[Content_Types].xml":Ui('<?xml version="1.0"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="model" ContentType="application/vnd.ms-package.3dmanufacturing-3dmodel+xml"/></Types>'),"_rels/.rels":Ui('<?xml version="1.0"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Target="/3D/3dmodel.model" Id="rel0" Type="http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel"/></Relationships>'),"3D/3dmodel.model":Ui(e)},{level:6})}function Ou(n){let t={};for(let e of n.parts){let i=e.mesh,r=Math.min(...i.vertices.map(u=>u[2])),a=new ArrayBuffer(84+i.faces.length*50),c=new DataView(a);c.setUint32(80,i.faces.length,!0),i.faces.forEach((u,f)=>{let d=84+f*50+12;for(let g of u)for(let x=0;x<3;x++)c.setFloat32(d,i.vertices[g][x]-(x===2?r:0),!0),d+=4}),t[e.name+".stl"]=new Uint8Array(a)}return t["READ_ME.txt"]=Ui(`XLENT Click \xB7 MX \u88C5\u914D\u8BD5\u6837
\u5355\u4F4D\uFF1Amm\u3002\u8F74\u4F53\u9700\u53E6\u8D2D\u3002
\u5404 STL \u5DF2\u843D\u5230 Z=0\uFF0C\u6D6E\u96D5\u5C42\u5982\u5355\u72EC\u6253\u5370\u9700\u7C98\u5408\uFF1B\u6574\u4F53\u591A\u8272\u6253\u5370\u4F18\u5148\u4F7F\u7528 3MF\u3002
\u952E\u5E3D\u80CC\u9762\u6709\u51F9\u69FD\u548C\u5341\u5B57\u76F2\u5B54\uFF0C\u5E95\u5EA7\u6709\u5185\u90E8\u7A7A\u8154\uFF0C\u9700\u81EA\u884C\u9009\u62E9\u6253\u5370\u65B9\u5411\u4E0E\u652F\u6491\u3002
\u4F18\u5148\u6253\u5370\u63A5\u53E3\u8BD5\u7247\u5E76\u7528\u5B9E\u9645\u8F74\u4F53\u6D4B\u8BD5\uFF1B\u672A\u9A8C\u8BC1\u5B9E\u9645\u677E\u7D27\u3001\u56DE\u5F39\u3001\u884C\u7A0B\u6216\u53CC\u8F74\u540C\u6B65\u3002
3MF \u662F\u901A\u7528\u6A21\u578B\uFF0C\u4E0D\u542B Bambu \u4E13\u5C5E\u914D\u7F6E\u548C\u652F\u6491\u9884\u8BBE\u3002`),xc(t,{level:6})}var dt=n=>document.getElementById(n),kn=n=>JSON.parse(JSON.stringify(n)),Ut=kn(Aa),Se=null,ki=0,Ra,Ca,d_=0,_r=new Map,fn,Si,zn,As,Pa,Mi,ws,xr=!1,Bu=-1e4,Uu=0,Ia=!1,Bn,Fu,vr="shape",Bi=null,zi=null,p_=null,Sc=!0,Ps=!0,Mc={flower:"\u5C0F\u82B1",round:"\u5706\u5706",square:"\u952E\u76D8\u952E",cloud:"\u4E91\u6735",heart:"\u7231\u5FC3",text:"\u6587\u5B57\u5F62",image:"\u56FE\u6848\u5F62"};function Je(n){dt("toast").textContent=n,dt("toast").hidden=!1,clearTimeout(Fu),Fu=setTimeout(()=>dt("toast").hidden=!0,4500)}function La(n,t,e){let i=URL.createObjectURL(new Blob([n],{type:e})),r=document.createElement("a");r.href=i,r.download=t,r.click(),setTimeout(()=>URL.revokeObjectURL(i),3e4)}function Na(n,t=!1){return new Promise((e,i)=>{let r=++d_;_r.set(r,{resolve:e,reject:i}),Ca.postMessage({id:r,state:kn(n),coupon:t})})}function m_(){Ca=new Worker(new URL("./worker.js",import.meta.url),{type:"module"}),Ca.onmessage=({data:n})=>{let t=_r.get(n.id);t&&(_r.delete(n.id),n.error?t.reject(Error(n.error)):t.resolve(n.model))},Ca.onerror=n=>{for(let t of _r.values())t.reject(Error("\u6A21\u578B\u5F15\u64CE\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u91CD\u8BD5"));_r.clear()}}var zu=["shapeText","rows","font","size","rim","round","puff","text","reliefHeight","artSize","artX","artY","artRotation","switches","tolerance","hanging","hole","side","baseColor","capColor","reliefColor"];function dn(){for(let t of zu)dt(t)&&(t==="hanging"?dt(t).checked=Ut[t]:dt(t).value=Ut[t]);for(let t of["shape","surface","content","motif"])document.querySelectorAll(`[data-${t}]`).forEach(e=>{e.classList.toggle("selected",e.dataset[t]===Ut[t]),e.setAttribute("aria-pressed",e.dataset[t]===Ut[t])});dt("shapeTextPanel").hidden=Ut.shape!=="text",dt("puffyPanel").hidden=Ut.surface!=="puffy",dt("hangerPanel").hidden=!Ut.hanging;let n=Ut.surface==="flat"&&Ut.shape!=="text";dt("textPanel").hidden=!n||Ut.content!=="text",dt("motifPanel").hidden=!n||Ut.content!=="motif",dt("iconPanel").hidden=!n||Ut.content!=="image",dt("reliefControls").hidden=Ut.surface!=="flat",document.querySelector(".content-tabs").hidden=!n,dt("surfaceNote").hidden=n,dt("surfaceNote").textContent=Ut.surface==="puffy"?"\u9F13\u9762\u6A21\u5F0F\u6682\u4E0D\u53E0\u52A0\u6D6E\u96D5\uFF1B\u5207\u56DE\u5E73\u9762\u5373\u53EF\u7EE7\u7EED\u7F16\u8F91\u56FE\u6587\u3002":"\u6587\u5B57\u5F62\u6309\u952E\u4F1A\u81EA\u52A8\u6CBF\u7528\u5DE6\u4FA7\u7684\u6587\u5B57\u4F5C\u4E3A\u6D6E\u96D5\u3002",dt("clearDepth").hidden=!Ut.depth,dt("textCount").textContent=`${Fi(Ut.text).length} / 9`,dt("shapeCount").textContent=`${Fi(Ut.shapeText).length} / 9`;for(let t of["size","puff","artSize","tolerance"])dt(t+"Value").textContent=Ut[t]+(t==="tolerance"?" mm / \u5355\u8FB9":" mm")}function vn(){ki++,Se=null,dt("exportTop").disabled=!0,dt("press").disabled=!0,dt("modelStatus").textContent="\u6B63\u5728\u66F4\u65B0\u5C3A\u5BF8\u4E0E\u5B89\u88C5\u7ED3\u6784\u2026",dt("modelStatus").classList.remove("error"),clearTimeout(Ra);let n=ki;Ra=setTimeout(()=>g_(n),250)}async function g_(n){try{gr(Ut);let t=await Na(Ut);if(n!==ki)return;Se=t,p_=kn(Ut),dt("loading").hidden=!0,dt("press").disabled=!1,dt("exportTop").disabled=!t.fit,dt("autoFit").hidden=t.fit,dt("dimensions").textContent=`${t.width.toFixed(1)} \xD7 ${t.height.toFixed(1)} mm \xB7 ${t.count} \u4E2A MX \u8F74\u4F53`,dt("modelLabel").textContent=Mc[Ut.shape]+"\u6309\u952E";let e=t.fit?`${t.count} \u4E2A\u8F74\u4F53\u5B89\u88C5\u4F4D\u5DF2\u52A0\u5165\u3002\u5148\u4E0B\u8F7D\u63A5\u53E3\u8BD5\u7247\uFF0C\u786E\u8BA4\u677E\u7D27\u540E\u518D\u6253\u5370\u3002`:"\u5F53\u524D\u5916\u5F62\u653E\u4E0D\u4E0B\u5B8C\u6574\u5B89\u88C5\u4F4D\u3002\u8BF7\u653E\u5927\u5C3A\u5BF8\u3001\u6539\u7528\u5355\u8F74\uFF0C\u6216\u5C06\u6587\u5B57\u6539\u4E3A\u591A\u884C\u6392\u7248\u3002";(t.width>180||t.height>180)&&(e+=" \u6210\u54C1\u8D85\u8FC7 A1 mini \u7684 180 mm \u8303\u56F4\u3002"),Ut.surface==="flat"&&Ut.content!=="none"&&t.parts.length<3&&(e+=" \u6D6E\u96D5\u4E3A\u7A7A\uFF0C\u8BF7\u68C0\u67E5\u6587\u5B57\u3001\u56FE\u6848\u4F4D\u7F6E\u6216\u4E0A\u4F20\u56FE\u7247\u3002"),dt("modelStatus").textContent=e,dt("modelStatus").classList.toggle("error",!t.fit),bc()}catch(t){if(n!==ki)return;dt("loading").hidden=!0,dt("modelStatus").textContent=t.message,dt("modelStatus").classList.add("error"),Je(t.message)}}for(let n of zu){let t=dt(n),e=typeof Aa[n]=="number";if(n==="text"||n==="shapeText"){let i=r=>{if(r.isComposing)return;let a=Fi(t.value);a.length>9&&(t.value=a.slice(0,9).join(""),Je("\u6700\u591A\u652F\u6301 9 \u4E2A\u5B57")),Ut[n]=t.value,/[^\x00-\x7f]/.test(t.value)&&(Ut.font="noto"),dn(),vn()};t.addEventListener("input",i),t.addEventListener("compositionend",i)}else t.addEventListener(t.type==="range"||t.type==="color"?"input":"change",()=>{if(e&&(!t.value||!t.checkValidity())){t.value=Ut[n];return}Ut[n]=n==="hanging"?t.checked:e?Number(t.value):t.value,dn(),vn()})}for(let n of["shape","surface","content","motif"])document.querySelectorAll(`[data-${n}]`).forEach(t=>t.onclick=()=>{Ut[n]=t.dataset[n],n==="shape"&&(Ps=!0),dn(),vn()});document.querySelectorAll("[data-text]").forEach(n=>n.onclick=()=>{Ut.text=n.dataset.text,Ut.font=/[^\x00-\x7f]/.test(Ut.text)?"noto":"bold",Ut.content="text",dn(),vn()});document.querySelectorAll("[data-colors]").forEach(n=>n.onclick=()=>{[Ut.baseColor,Ut.capColor,Ut.reliefColor]=n.dataset.colors.split(","),dn(),vn()});dt("centerArt").onclick=()=>{Ut.artX=Ut.artY=Ut.artRotation=0,dn(),vn()};function yc(n){n&&(Si.remove(n),n.traverse(t=>{t.geometry?.dispose(),Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material?.dispose()}))}function __(){try{fn=new va({canvas:dt("canvas"),alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),fn.setPixelRatio(Math.min(devicePixelRatio,2)),fn.setClearColor(0,0),Si=new Gs,zn=new Ge(32,1,.1,2e3),As=new ba(zn,fn.domElement),As.enableDamping=!0,As.target.set(0,0,12),Si.add(new Ks(16777215,7172759,2.8));let n=new ms(16777215,3);n.position.set(-60,90,150),Si.add(n);let t=new ms(12966399,1.2);t.position.set(100,-80,30),Si.add(t),new ResizeObserver(()=>{let i=dt("viewer"),r=i.clientWidth,a=i.clientHeight;fn.setSize(r,a,!1),zn.aspect=r/a,zn.updateProjectionMatrix()}).observe(dt("viewer")),fn.setAnimationLoop(i=>{if(As.update(),Mi){let r=(i-Bu)/450,a=r>=0&&r<1?Math.sin(r*Math.PI)*4:0;Mi.position.z=(xr?16:0)-a,ws.children.forEach(c=>{c.userData.stem&&(c.position.z=21-a)})}fn.render(Si,zn)});let e;fn.domElement.addEventListener("pointerdown",i=>{e=[i.clientX,i.clientY]}),fn.domElement.addEventListener("pointerup",i=>{if(!e||Math.hypot(i.clientX-e[0],i.clientY-e[1])>5)return;let r=fn.domElement.getBoundingClientRect(),a=new Qs;a.setFromCamera(new Zt((i.clientX-r.left)/r.width*2-1,-(i.clientY-r.top)/r.height*2+1),zn),Mi&&a.intersectObjects(Mi.children).length&&ku()})}catch{Sc=!1,dt("canvas").hidden=!0,dt("fallback").hidden=!1,dt("saveImage").disabled=!0,Je("\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 3D\uFF0C\u5DF2\u5207\u6362\u5E73\u9762\u9884\u89C8\uFF1B\u4ECD\u53EF\u5BFC\u51FA\u6A21\u578B\u3002")}}function bc(){if(!Sc){dt("fallback").innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${-Se.width/2-5} ${-Se.height/2-5} ${Se.width+10} ${Se.height+10}"><path fill="${Ut.baseColor}" d="${cc(Se.outline)}"/><path fill="${Ut.capColor}" d="${cc(Se.keyOutline)}"/></svg>`;return}yc(Pa),yc(Mi),yc(ws),Pa=new Tn,Mi=new Tn,ws=new Tn;for(let n of Se.parts){let t=n.mesh,e=new _n;e.setAttribute("position",new Ke(t.vertices.flat(),3)),e.setIndex(t.faces.flat()),e.computeVertexNormals();let i=new Xe(e,new Ii({color:n.color,roughness:.6,metalness:0}));i.position.z=n.z,i.castShadow=!0,(n.group==="base"?Pa:Mi).add(i)}for(let[n,t]of Se.centers){let e=new Xe(new Jn(14,14,9),new Ii({color:"#70778b",roughness:.7,transparent:!0,opacity:.55}));e.position.set(n,t,12.5),ws.add(e);let i=new Xe(new Jn(4.1,4.1,3.6),new Ii({color:"#ff8c71"}));i.position.set(n,t,21),i.userData.stem=!0,ws.add(i)}Si.add(Pa,Mi,ws),Ps&&(Tc("front"),Ps=!1)}function Tc(n){if(!Sc||!Se)return;let t=Math.max(Se.width,Se.height,45),e=dt("viewer").clientWidth/dt("viewer").clientHeight,i=t*(e<1?2.7:2.25);n==="under"?zn.position.set(t*.45,-t*.45,-i):zn.position.set(t*.38,-t*.55,i),zn.up.set(0,1,0),As.target.set(0,0,12),As.update(),dt("front").classList.toggle("active",n==="front"),dt("under").classList.toggle("active",n==="under")}dt("front").onclick=()=>Tc("front");dt("under").onclick=()=>Tc("under");dt("explode").onclick=()=>{xr=!xr,dt("explode").classList.toggle("active",xr),dt("explode").textContent=xr?"\u5408\u8D77\u6765":"\u62C6\u5F00\u770B\u770B"};function ku(){if(Se&&(Bu=performance.now(),Uu++,dt("count").textContent=Uu.toLocaleString(),Ia))try{Bn||=new(window.AudioContext||window.webkitAudioContext),Bn.resume();let n=Bn.createOscillator(),t=Bn.createGain();n.type="triangle",n.frequency.setValueAtTime(450,Bn.currentTime),n.frequency.exponentialRampToValueAtTime(100,Bn.currentTime+.07),t.gain.setValueAtTime(.12,Bn.currentTime),t.gain.exponentialRampToValueAtTime(.001,Bn.currentTime+.09),n.connect(t),t.connect(Bn.destination),n.start(),n.stop(Bn.currentTime+.1)}catch{}}dt("press").onclick=ku;dt("sound").onclick=()=>{Ia=!Ia,dt("sound").textContent=Ia?"\u58F0\u97F3\uFF1A\u5F00":"\u58F0\u97F3\uFF1A\u5173"};dt("saveImage").onclick=()=>{!fn||!Se||(fn.render(Si,zn),fn.domElement.toBlob(n=>{n&&La(n,"XLENT-Click-preview.png","image/png")}))};function x_(){Se?.fit&&(dt("exportInfo").textContent=`${Mc[Ut.shape]} \xB7 ${Se.width.toFixed(1)} \xD7 ${Se.height.toFixed(1)} mm \xB7 ${Se.count} \u4E2A\u8F74\u4F53`,dt("exportDialog").showModal())}dt("exportTop").onclick=x_;dt("closeExport").onclick=()=>dt("exportDialog").close();for(let[n,t]of[["download3mf","3mf"],["downloadSTL","zip"]])dt(n).onclick=async()=>{if(!Se?.fit){Je("\u8BBE\u8BA1\u5DF2\u53D8\u5316\uFF0C\u8BF7\u7B49\u5F85\u6A21\u578B\u66F4\u65B0");return}dt(n).disabled=!0;try{await new Promise(e=>setTimeout(e,30)),La(t==="3mf"?vc(Se):Ou(Se),`XLENT-Click-${Ut.shape}.${t}`,t==="3mf"?"model/3mf":"application/zip"),Je("\u6A21\u578B\u5DF2\u751F\u6210\uFF0C\u8BF7\u5148\u68C0\u67E5\u5207\u7247\u548C\u63A5\u53E3\u8BD5\u7247\u3002")}catch(e){Je("\u5BFC\u51FA\u5931\u8D25\uFF1A"+e.message)}finally{dt(n).disabled=!1}};dt("coupon").onclick=async()=>{dt("coupon").disabled=!0;try{let n={...kn(Aa),font:Ut.font,tolerance:Ut.tolerance,content:"none",shape:"square",surface:"flat"},t=await Na(n,!0);La(vc(t),"XLENT-MX-fit-coupon.3mf","model/3mf"),Je("\u8BD5\u7247\u5305\u542B\u65B9\u5B54\u5E95\u5EA7\u548C\u5341\u5B57\u63D2\u5B54\u952E\u5E3D\u3002")}catch(n){Je(n.message)}finally{dt("coupon").disabled=!1}};dt("autoFit").onclick=async()=>{let n=++ki;clearTimeout(Ra),dt("autoFit").disabled=!0,dt("exportTop").disabled=!0,Se=null;try{let t=kn(Ut),e=null;for(;t.size<240;){t.size=Math.min(240,Math.ceil(t.size*1.16));let i=await Na(t);if(n!==ki)return;if(i.fit){e=i;break}}if(!e)throw Error("\u653E\u5927\u5230 240 mm \u4ECD\u653E\u4E0D\u4E0B\uFF0C\u8BF7\u6539\u4E3A\u591A\u884C\u6587\u5B57\u6216\u66F4\u6362\u5916\u5F62\u3002");Ut=t,Se=e,Ps=!0,dn(),bc(),dt("autoFit").hidden=!0,dt("exportTop").disabled=!1,dt("press").disabled=!1,dt("dimensions").textContent=`${e.width.toFixed(1)} \xD7 ${e.height.toFixed(1)} mm \xB7 ${e.count} \u4E2A MX \u8F74\u4F53`,dt("modelStatus").classList.remove("error"),dt("modelStatus").textContent="\u5DF2\u653E\u5927\u5230\u53EF\u5BB9\u7EB3\u63A5\u53E3\u7684\u5C3A\u5BF8\u3002\u8BF7\u6838\u5BF9\u6253\u5370\u673A\u8303\u56F4\uFF0C\u5E76\u5148\u8BD5\u6253\u63A5\u53E3\u3002"}catch(t){Je(t.message),vn()}finally{dt("autoFit").disabled=!1}};dt("saveDesign").onclick=()=>{try{gr(Ut);let n=JSON.stringify({version:1,design:Ut});La(n,"XLENT-Click-design.json","application/json"),Je("\u8BBE\u8BA1\u5DF2\u4FDD\u5B58\u4E3A JSON\uFF0C\u4E0B\u6B21\u7528\u300C\u6253\u5F00\u8BBE\u8BA1\u300D\u7EE7\u7EED\u3002")}catch(n){Je(n.message)}};dt("openDesign").onclick=()=>dt("fileDesign").click();dt("fileDesign").onchange=async()=>{let n=dt("fileDesign").files[0];if(n)try{if(n.size>4e6)throw Error("\u8BBE\u8BA1\u6587\u4EF6\u8FC7\u5927");let t=JSON.parse(await n.text());if(t.version!==1)throw Error("\u4E0D\u652F\u6301\u7684\u6587\u4EF6\u7248\u672C");let e=gr(t.design);Ut=kn(e),Ps=!0,dn(),vn()}catch(t){Je(t.message)}finally{dt("fileDesign").value=""}};function Ec(n){vr=n,dt("fileImage").click()}dt("uploadShape").onclick=()=>Ec("shape");dt("uploadIcon").onclick=()=>Ec("icon");dt("uploadDepth").onclick=()=>Ec("depth");dt("clearDepth").onclick=()=>{Ut.depth=null,dn(),vn()};dt("fileImage").onchange=async()=>{let n=dt("fileImage").files[0];if(n)try{if(n.size>8*1024*1024)throw Error("\u8BF7\u4F7F\u7528 8 MB \u4EE5\u5185\u7684\u56FE\u7247");if(!["image/png","image/jpeg","image/webp"].includes(n.type))throw Error("\u8BF7\u9009\u62E9 PNG\u3001JPG \u6216 WebP");let t=URL.createObjectURL(n),e=new Image;try{if(await new Promise((i,r)=>{e.onload=i,e.onerror=()=>r(Error("\u56FE\u7247\u65E0\u6CD5\u89E3\u7801")),e.src=t}),e.width*e.height>4e7)throw Error("\u56FE\u7247\u5C3A\u5BF8\u8FC7\u5927\uFF0C\u8BF7\u7F29\u5C0F\u540E\u4E0A\u4F20");if(Bi=e,vr==="depth"){let i=document.createElement("canvas");i.width=i.height=32;let r=i.getContext("2d");r.drawImage(e,0,0,32,32);let a=r.getImageData(0,0,32,32).data;Ut.depth=Array.from({length:1024},(c,u)=>(a[u*4]*.2126+a[u*4+1]*.7152+a[u*4+2]*.0722)/255),Ut.surface="puffy",dn(),vn(),Je("\u7070\u5EA6\u6DF1\u5EA6\u56FE\u5DF2\u5E94\u7528")}else dt("originalImage").src=t,dt("imageTitle").textContent=vr==="shape"?"\u63D0\u53D6\u6309\u952E\u5916\u5F62":"\u63D0\u53D6\u6D6E\u96D5\u56FE\u6848",dt("imageDialog").showModal(),wc()}finally{vr==="depth"?URL.revokeObjectURL(t):dt("imageDialog").addEventListener("close",()=>URL.revokeObjectURL(t),{once:!0})}}catch(t){Je(t.message)}finally{dt("fileImage").value=""}};function wc(){if(!Bi)return;let n=128,t=document.createElement("canvas");t.width=t.height=n;let e=t.getContext("2d",{willReadFrequently:!0});e.clearRect(0,0,n,n);let i=120/Math.max(Bi.width,Bi.height),r=Bi.width*i,a=Bi.height*i;e.drawImage(Bi,(n-r)/2,(n-a)/2,r,a);let c=e.getImageData(0,0,n,n).data,u=Number(dt("threshold").value),f=dt("invert").checked,d=new Uint8Array(n*n);dt("thresholdValue").textContent=u;for(let m=0;m<d.length;m++){let v=c[m*4]*.2126+c[m*4+1]*.7152+c[m*4+2]*.0722<u;d[m]=c[m*4+3]>80&&(f?!v:v)?1:0}let g=dt("thresholdPreview").getContext("2d");g.fillStyle="#fff",g.fillRect(0,0,160,160),g.fillStyle="#26304f";let x=[];for(let m=0;m<n;m++)for(let v=0;v<n;v++){if(!d[m*n+v])continue;let T=v;for(;v<n&&d[m*n+v];)v++;g.fillRect(T*160/n,m*160/n,(v-T)*160/n,160/n);let P=(T-64)*400,S=(m-64)*400,_=(v-64)*400,N=(m+1-64)*400;x.push([{X:P,Y:S},{X:_,Y:S},{X:_,Y:N},{X:P,Y:N}])}try{if(zi=lc(x,[]),zi.flat().length>16e3)throw Error("\u56FE\u6848\u8FC7\u4E8E\u590D\u6742\uFF0C\u8BF7\u4F7F\u7528\u66F4\u7B80\u5355\u7684\u56FE\u7247");dt("applyImage").disabled=!zi.length}catch(m){zi=null,dt("applyImage").disabled=!0,Je(m.message)}}dt("threshold").oninput=wc;dt("invert").onchange=wc;dt("closeImage").onclick=()=>dt("imageDialog").close();dt("applyImage").onclick=()=>{zi?.length&&(vr==="shape"?(Ut.shapePaths=kn(zi),Ut.shape="image",Ps=!0):(Ut.iconPaths=kn(zi),Ut.content="image",Ut.surface="flat"),dt("imageDialog").close(),dn(),vn())};function v_(){let n=document.modelContext;if(!n?.registerTool)return;let t=new AbortController;window.addEventListener("pagehide",()=>t.abort(),{once:!0});let e=i=>{try{Promise.resolve(n.registerTool(i,{signal:t.signal})).catch(()=>{})}catch{}};e({name:"read_click_design",description:"Read current clicker design and model fit status.",inputSchema:{type:"object",properties:{},additionalProperties:!1},annotations:{readOnlyHint:!0},execute:async()=>({design:kn(Ut),fit:Se?.fit??null})}),e({name:"set_clicker_text",description:"Set up to nine grapheme characters as keycap shape text or relief text. Updates preview but does not export.",inputSchema:{type:"object",properties:{target:{type:"string",enum:["shape","relief"]},text:{type:"string"}},required:["target","text"],additionalProperties:!1},annotations:{readOnlyHint:!1},execute:async i=>{if(!i||!["shape","relief"].includes(i.target)||typeof i.text!="string"||Fi(i.text).length>9||!i.text.trim())throw Error("Enter 1\u20139 characters and a valid target");let r=kn(Ut);i.target==="shape"?(r.shape="text",r.shapeText=i.text):(r.text=i.text,r.content="text",r.surface="flat",r.shape==="text"&&(r.shape="square")),/[^\x00-\x7f]/.test(i.text)&&(r.font="noto"),gr(r);let a=await Na(r);return Ut=r,ki++,clearTimeout(Ra),Se=a,dn(),bc(),dt("exportTop").disabled=!a.fit,dt("autoFit").hidden=a.fit,dt("press").disabled=!1,dt("dimensions").textContent=`${a.width.toFixed(1)} \xD7 ${a.height.toFixed(1)} mm \xB7 ${a.count} \u4E2A MX \u8F74\u4F53`,dt("modelLabel").textContent=Mc[Ut.shape]+"\u6309\u952E",dt("modelStatus").textContent=a.fit?"\u8BBE\u8BA1\u5DF2\u66F4\u65B0\uFF0C\u8BF7\u5148\u8BD5\u6253\u63A5\u53E3\u8BD5\u7247\u3002":"\u5B89\u88C5\u7A7A\u95F4\u4E0D\u8DB3\uFF0C\u8BF7\u653E\u5927\u5C3A\u5BF8\u6216\u8C03\u6574\u6587\u5B57\u6392\u7248\u3002",{text:i.text,count:Fi(i.text).length,fit:a.fit}}})}m_();__();dn();vn();v_();
/*! For license information please see app.js.LEGAL.txt */
