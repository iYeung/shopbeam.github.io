(function(z){
var ZE=function(a,b,c){(0,z.y)(b,function(a,f){var g;g=this.UB;var h=g.ad[f];g=h?g.ig[h][f]:void 0;g=g||a;g.vf=c;g.zd=a.zd;a.content.annotations&&(g.content.annotations=a.content.annotations);b[f]=g},a)};var $E=function(a){a.Nj&&a.Nj.o();a.Nj=null};var aF=function(a,b,c){ZE(a,b,c);a.Zo(b)};var bF=function(a,b,c,d){var f=a.Sb;(0,z.ce)(a.ci,f,[]);a.ci[f].push(d);a=(0,z.s)(a.kM,a,f);b(c,a)};
var cF=function(a,b){z.aq.call(this,a);a.K.subscribe("stream_data_received",this.Tm,this);a.K.subscribe("quill_message_received",this.Zc,this);a.K.subscribe("quill_like_recv",this.Zc,this);a.K.subscribe("quill_unlike_recv",this.Zc,this);this.UB=a.Kb.Ud;this.hW=b||!1};var dF=function(a){var b=a.eS();(0,z.A)(b,function(a){var b=this.Ab[a].ba();b.show(!0,!0);(0,z.xt)(this,b.j);this.s.M("message_displayed",a)},a)};
var eF=function(a,b,c,d,f){(0,z.Ie)(b)&&(b=[b]);(0,z.Ie)(c)&&(c=[c]);z.Ei.call(this,a,b,c,d,f);if(1!=b.length||1!=c.length)throw Error("Start and end points must be 1D");};var fF=function(a,b){var c=a.Ud.Es(b),d=new z.Xp;d.Hy=function(a){return(0,z.le)(a,function(a){return a.content.ancestorId==b.id})};a.Ud.ej(c,d);return d};var gF=function(a){return(0,z.Ri)(a)[0]||null};z.hF=function(a,b,c){eF.call(this,a,0,1,b,c)};
var iF=function(a){return'\x3ca href\x3d"'+(0,z.Cl)(a.Sa)+'" title\x3d"'+(0,z.Q)(a.ga)+'" data-id\x3d"'+a.id+'" class\x3d"fyre-follower fyre-follower-'+a.PV+'"\x3e\x3cimg src\x3d"'+(0,z.Cl)(a.Bc)+'" alt\x3d"'+(0,z.Q)(a.ga)+'" onerror\x3d"javascript:this.src\x3d\''+(0,z.Q)(a.jc)+"';\" /\x3e\x3c/a\x3e"};var jF=function(a){return'\x3cdiv class\x3d"fyre-content-loading"\x3e'+(0,z.Q)(a.n.Oq)+'\x3c/div\x3e\x3cdiv class\x3d"fyre-stream-content"\x3e\x3c/div\x3e\x3cdiv class\x3d"fyre-stream-content-not-found"\x3e\x3c/div\x3e'};
var kF=function(a){return'\x3cdiv class\x3d"fyre-stream-content"\x3e\x3c/div\x3e'+(a.ER?(0,z.yp)(a):"")};
var lF=function(a){return'\x3cdiv class\x3d"fyre '+(a.Pd?"fyre-liveblog ":"")+(a.Qh?"fyre-livechat ":"")+(a.ZV?"fyre-bootstrap":"")+'"\x3e\x3cdiv class\x3d"fyre-widget '+(a.wb?"fyre-avatar-disabled":"")+'"\x3e'+(a.sy?(0,z.Fo)(a):"")+(a.LJ?'\x3cdiv class\x3d"fyre-featured-content-wrapper"\x3e\x3c/div\x3e':"")+'\x3cdiv class\x3d"fyre-permalink-stream"\x3e\x3c/div\x3e\x3cdiv class\x3d"fyre-stream-stats"\x3e\x3cdiv class\x3d"fyre-comment-count"\x3e\x3c/div\x3e\x3cdiv class\x3d"fyre-help"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"fyre-auth"\x3e\x3cdiv class\x3d"fyre-login-bar"\x3e\x3c/div\x3e\x3cdiv class\x3d"fyre-live-container"\x3e\x3cdiv class\x3d"fyre-livecount"\x3e\x3c/div\x3e'+(a.wb?
"":'\x3cdiv class\x3d"fyre-listener-avatars"\x3e\x3c/div\x3e')+'\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"fyre-editor"\x3e\x3c/div\x3e\x3cdiv class\x3d"fyre-input-box-collapsed"\x3e\x3c/div\x3e\x3cdiv class\x3d"fyre-stream-header"\x3e\x3c/div\x3e\x3cdiv class\x3d"fyre-comment-stream"\x3e\x3c/div\x3e\x3cdiv class\x3d"fyre-top-content-stream"\x3e\x3c/div\x3e\x3cdiv class\x3d"fyre-thread-breakout-stream"\x3e\x3c/div\x3e\x3cdiv class\x3d"fyre-stream-menu-container"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e'};
var mF=function(a){return'\x3cdiv class\x3d"tooltip"\x3e'+(0,z.Q)(a.message)+'\x3c/div\x3e\x3cdiv class\x3d"arrow-down"\x3e\x3c/div\x3e'};var nF=function(a){var b=z.gn,c=new z.Cj(a.content);c.set(b.sa,a.Al);return c};z.oF=function(a){return a==z.u.window?"pageYOffset"in z.u?z.u.pageYOffset:z.u.document.documentElement?z.u.document.documentElement.scrollTop:z.u.document.body.scrollTop:(0,z.mi)(a).y};z.pF=function(a,b,c){eF.call(this,a,1,0,b,c)};
var qF=function(a){var b=(0,z.q)(void 0)?(0,z.Fd)(void 0):"\\s";return a.replace(RegExp("(^"+(b?"|["+b+"]+":"")+")([a-z])","g"),function(a,b,f){return b+f.toUpperCase()})};var rF=function(){};var sF=function(a,b){z.Yi.call(this,b,a)};var tF=function(a,b){z.Nq.call(this,a,b)};var uF=function(a,b,c){z.Ur.call(this,a,b,c);this.dC=b||"";this.Re(mF(this.u()))};var vF=function(a,b,c){z.Or.call(this,a,b||3,c)};var wF=function(a,b){z.R.call(this,b);this.j=a};
var xF=function(a,b){z.R.call(this,b);this.kd=a};var yF=function(a,b){xF.call(this,a,b)};var zF=function(a,b,c,d,f){z.Oq.call(this,a,b,c,d,f)};var AF=function(a,b,c){this.ea=z.L;if((0,z.Je)(b)?b:1)this.Ob=new z.It,this.Ob.cc(this);this.Ie=a.v.C().get(z.S.Tl);this.bb=null;this.Ie&&(this.bb=new z.Dt);z.qt.call(this,a,c)};var BF=function(a,b){this.Xo=a;z.R.call(this,b)};var CF=function(a,b){z.et.call(this,a,b)};var DF=function(a,b,c){z.qt.call(this,a,c);b===EF.ck&&(this.Jn=CF);this.Xo=b};
var FF=function(){var a=window.scrollY,b=(0,z.rf)(GF),b=(0,z.mi)(b).y;return[a,b]};var HF=function(a,b,c){var d=new z.pF(a.kg,b);d.Zf=function(){z.pF.prototype.Zf.call(d);(0,z.$h)(d.element,{display:"block",opacity:"100"});c()};d.play()};var IF=function(a,b){var c=window.document.getElementsByTagName("body")[0],d=a[0],f=a[1];z.C?window.scrollTo(0,f):(z.E&&(c=window.document.getElementsByTagName("html")[0]),(new z.Fi(c,[0,d],[0,f],b)).play())};
var JF=function(a){a.Qi=new BF(a.Xo);a.U(a.Qi);(0,z.$h)(a.No,{display:"block"});a.Qi.N(a.No);a.p().e(a.Qi,"streamRefreshClicked",a.CJ)};var KF=function(a){a.Qi&&a.Qi.o();a.No&&(0,z.Ff)(a.No);a.p().lb(a.Qi,"streamRefreshClicked",a.CJ);a.Qi=null};var LF=function(a,b){var c=z.L,d="score";a.Xo===EF.ck&&!b.get(z.L.Qc)&&(d="thread_score");return b.get(c.Ze)[d]||0};var MF=function(a,b){z.zt.call(this,a,b)};
var NF=function(a,b){if(!(0,z.cf)(b,OF.Gw)&&"A"===b.tagName)if(b===a.Jm)a.dJ();else switch(PF(a,b),a.hg(),b){case a.Kq:QF(a,!1);PF(a,a.Fu);RF(a);break;case a.Fu:RF(a);break;case a.KB:SF(a);break;case a.Gu:TF(a,z.vz.ue);break;case a.dM:TF(a,z.vz.gw)}};var PF=function(a,b){var c=[a.Gu,a.dM];a.Kq&&c.push(a.Kq);a.Fu&&c.push(a.Fu);a.KB&&c.push(a.KB);(0,z.A)(c,function(a){(0,z.Ze)(a,OF.Gw)});(0,z.J)(b,OF.Gw)};
var QF=function(a,b){(0,z.$h)(a.mZ,"display",b?"none":"block");a.Kq&&(0,z.$h)(a.Kq,"display",b?"block":"none")};var TF=function(a,b){a.dispatchEvent({type:"sortOrderChanged",qa:a.me.qa,ec:a.me.ec,direction:b,cd:(0,z.s)(a.ce,a)})};var SF=function(a){a.dispatchEvent({type:"sortTopComments",qa:a.me.qa,ec:a.me.ec,wA:(0,z.s)(function(){JF(this.me.ec)},a),cd:(0,z.s)(a.ce,a)})};
var RF=function(a){a.dispatchEvent({type:"sortHotThreads",qa:a.me.qa,ec:a.me.ec,wA:(0,z.s)(function(){JF(this.me.ec)},a),cd:(0,z.s)(a.ce,a)})};var UF=function(a,b){z.Nt.call(this,a,b);var c=a.v.Xc(),d=a.v.C();this.uf=new zF(a,c,a.Tp.he,d.Qh()||z.Wb);this.U(this.uf);a.wa.wb||(this.cp=new yF(c),this.U(this.cp));this.dt=new z.Mq;this.U(this.dt)};var VF=function(a,b,c,d){c=c.get(z.S.im);c!==EF.NONE&&(a.ec=new DF(b,c),a.ec.cc(a.Se),d.ec=a.ec,c===EF.ck&&(a.Ue=new AF(b,!1),a.Ue.cc(a.Se),d.Ue=a.Ue))};
var WF=function(a){z.Cq.call(this,a)};var XF=function(a){z.Io.call(this,a);(0,z.wp)(a.v);this.Oc=new UF(a);this.vs.start();this.Xm(this.Oc);(0,z.Lo)(this)};var YF=function(a){this.EG=sF;this.JM=XF;z.U.yq(a.strings||{});z.ej.call(this,a)};var ZF=function(a){a.Bl&&(a.Bl.o(),delete a.Bl)};(0,z.v)(cF,z.aq);z.n=cF.prototype;z.n.cj=(0,z.da)(4);z.n.fj=(0,z.da)(22);z.n.mp=(0,z.da)(33);z.n.kM=(0,z.da)(16);z.n.Zo=function(a){(0,z.y)(this.UB.dq,function(b,c){a[c]&&(0,z.A)(b,function(b){a[b.id]||(a[b.id]=b)})})};
z.n.Ky=function(a){if(3===a.zd)return!0;var b=!1;this.hW&&(b=a.content,b=this.ad[b.ancestorId]||this.ad[b.targetId]);return b||this.ad[a.id]};z.n.k=function(){this.h.K.Pb("stream_data_received",this.Tm,this);this.h.K.Pb("quill_message_received",this.Zc,this);this.h.K.Pb("quill_like_recv",this.Zc,this);this.h.K.Pb("quill_unlike_recv",this.Zc,this);this.UB=null;cF.b.k.call(this)};(0,z.v)(eF,z.Ei);eF.prototype.Bf=function(){(0,z.ti)(this.element,this.coords[0])};
eF.prototype.show=function(){this.element.style.display=""};eF.prototype.ha=function(){this.element.style.display="none"};z.Vi.prototype.LJ=(0,z.od)(39,function(){var a=this.c;return null!=this.get(a.zv)&&0<this.get(a.zv).content.length});z.At.prototype.Dz=(0,z.od)(36,function(){this.kB||(this.kB=window.setTimeout((0,z.s)(function(){this.hb||(dF(this),window.clearTimeout(this.kB),this.kB=null)},this),330))});
cF.prototype.mp=(0,z.od)(33,function(a,b,c){a={collection_id:this.h.v.C().id,content_id:a,depth_only:b};b=z.mp.D().Lm;bF(this,b,a,c);return c});z.$y.prototype.mp=(0,z.od)(32,function(a,b){$E(this);this.Nj=new cF(this.s,!0);var c=new z.Xp;this.Nj.mp(a,b,c);return c});z.mp.prototype.fj=(0,z.od)(23,function(a,b,c){a=(0,z.Ge)("%s%scollection/%s/hot/",z.w.S.Gd,z.w.Cf,a.oa);(new z.Nk({url:a,xa:b,ua:c})).send()});
cF.prototype.fj=(0,z.od)(22,function(a){var b={oa:this.h.v.C().id},c=z.mp.D().fj;bF(this,c,b,a);return a});z.$y.prototype.fj=(0,z.od)(21,function(){$E(this);this.Nj=new cF(this.s,void 0);var a=new z.Xp;this.Nj.fj(a);return a});
cF.prototype.kM=(0,z.od)(16,function(a,b){if(!this.hb){var c=(0,z.gp)(a,b.data);(0,z.y)(c.rb,(0,z.s)(this.h.K.M,this.h.K,"bootstrap_author_received"));aF(this,c.content,a);(0,z.Za)(this.ad,(0,z.Sa)(c.content,(0,z.ab)(a)));this.xg(a,c.content);(0,z.dq)(this,c.Be);(0,z.bq)(this,a,function(a){a.M(a.G.dm,{});a.set(a.c.yi,!0)})}});z.mp.prototype.cj=(0,z.od)(5,function(a,b,c){a=(0,z.Ge)("%s%scollection/%s/top/%s/",z.w.S.Gd,z.w.Cf,a.oa,a.qQ);(new z.Nk({url:a,xa:b,ua:c})).send({format:"stream"})});
cF.prototype.cj=(0,z.od)(4,function(a,b){var c={oa:this.h.v.C().id,qQ:a},d=z.mp.D().cj;bF(this,d,c,b);return b});z.$y.prototype.cj=(0,z.od)(3,function(a){$E(this);this.Nj=new cF(this.s,void 0);var b=new z.Xp;this.Nj.cj(a,b);return b});(0,z.v)(z.hF,eF);z.hF.prototype.Qg=function(){this.show();z.hF.b.Qg.call(this)};var EF={WP:0,NONE:1,hm:2,ck:3};(0,z.v)(z.pF,eF);z.pF.prototype.Qg=function(){this.show();z.pF.b.Qg.call(this)};z.pF.prototype.Zf=function(){this.ha();z.pF.b.Zf.call(this)};(0,z.v)(rF,z.kj);
(0,z.Ke)(rF);
rF.prototype.ZJ=function(a){var b={};b.Li=a[z.mz.AC];var c=a[z.mz.EC];c&&(b.zQ=c);if(c=a[z.mz.FC]||z.Wb&&(0,z.ga)(z.fyre.sp))b.LG=c;b.Bx=a[z.mz.r_]?!0:!1;c=a[z.mz.nm];b.sh=c?c:!1;if(c=a[z.mz.YC])b.ma=c;if(c=a[z.mz.rg])b.pk=c;if(c=a[z.mz.dD])b.Sx=c;b.yk=(0,z.lj)(this,a[z.mz.iD]);if(c=a[z.mz.sD])b.Cm=c;if(c=a[z.mz.iF])b.bg=c;if(c=a[z.mz.AF])b.AB=c;c=a[z.mz.IF];null!=c&&(b.GB=c);if(c=a[z.mz.lD]||!1)b.wb=c;if(c=a[z.mz.lG])b.FM=c;if(c=a[z.mz.CC])b.ux=c;if(c=a[z.mz.Xn])b.Yi=c;b.Rd=a[z.mz.Hf];b.vy=(0,z.mj)(a[z.mz.yC]);
return b};(0,z.v)(sF,z.Yi);sF.prototype.xB=function(a){this.tl=new z.Zo(this);this.jx=new z.Mo(this,a);this.Ib=new z.Zk(this);this.Ma=new z.Lp(this,a);this.Tp=new z.Qp(this);this.v=new z.sp(this,a);this.Kb=new z.$y(this,a);this.tW=new z.pk;this.Eq=new z.yq(this,a);this.xK=new z.Sp(this)};(0,z.v)(tF,z.Nq);tF.prototype.u=function(){var a=this.j.get(z.S.ve),b;b=this.j.Pd()?{Mo:z.U.get(z.U.f.Qv),cs:z.U.get(z.U.f.yE)}:{Mo:z.U.get(z.U.f.Gl),cs:z.U.get(z.U.f.qe)};return{Lt:a,n:b}};tF.prototype.nC=function(){var a=this.d,b=this.u(),c="\x3cspan\x3e";switch(b.Lt){case 1:c+="1 "+(0,z.Q)(b.n.cs);break;default:c+=(0,z.Q)(b.Lt)+" "+(0,z.Q)(b.n.Mo)}a.innerHTML=c+"\x3c/span\x3e"};(0,z.v)(uF,z.Ur);uF.prototype.Fq=200;uF.prototype.gj=function(){return new vF(this.hd)};uF.prototype.u=function(){var a={};a.message=this.dC;return a};(0,z.v)(vF,z.Or);
vF.prototype.Nb=function(a,b,c){var d=(0,z.xi)(this.element),d=new z.ff(d.width,d.height+25);b=(0,z.Kr)(this.element,this.Ri,a,b,d,c,9);(0,z.gi)(a.lastChild,0);b&&(d=new z.ff(0,-5),(0,z.Kr)(this.element,2,a,1,d,c,5),(0,z.gi)(a.lastChild,a.offsetWidth-(this.element.offsetParent.offsetWidth-this.element.offsetLeft+this.element.offsetWidth/2)))};(0,z.v)(wF,z.R);z.n=wF.prototype;z.n.m=function(){this.d=(0,z.yl)(iF,this.u())};z.n.l=function(){wF.b.l.call(this);this.ab=new uF(this.d,this.j.get(z.W.aa));this.p().e(this.d,"click",this.mc)};z.n.k=function(){wF.b.k.call(this);this.ab&&this.ab.o()};z.n.u=function(){var a={};a.Bc=this.j.get(z.W.Ta);a.jc=this.j.get(z.W.Tj);a.ga=this.j.get(z.W.aa);a.id=this.j.id;a.PV=this.j.id.replace(/[@.]/g,"-");a.Sa=this.j.get(z.W.Fb);return a};
z.n.mc=function(a){a.preventDefault();a.stopPropagation();this.dispatchEvent({B:this.j,type:"author_click"})};(0,z.v)(xF,z.R);z.n=xF.prototype;z.n.jo=10;z.n.k=function(){xF.b.k.call(this);delete this.kd};z.n.V=function(){xF.b.V.call(this);this.kd.off(null,null,this)};z.n.MI=function(a){a=new wF(a);var b=this.Ee();if(b===this.jo){var c=this.oq(b-1);c&&(c.o(),b--)}0<b?this.Fd(a,0,!0):this.U(a,!0)};z.n.MU=function(a){var b;this.sc(function(c){a.id===c.j.id&&(b=c)});b&&(this.removeChild(b),b.o())};
z.n.Ig=function(){this.kd.on(this.kd.G.qg,this.MI,this);this.kd.on(this.kd.G.ug,this.MU,this);var a=this.kd.wc.reverse().slice(0,this.jo);(0,z.A)(a,this.MI,this)};(0,z.v)(yF,xF);(0,z.v)(zF,z.Oq);zF.prototype.O=function(a){zF.b.O.call(this,a);this.jl()};zF.prototype.jl=function(){this.d.innerHTML=(0,z.zp)(this.u())};(0,z.v)(AF,z.At);var $F={Db:"fyre-stream-content",qh:"fyre-stream-more"};z.n=AF.prototype;z.n.u=function(){var a={},b=this.s.v;a.Mi=z.w.S.vb;a.mA=b.C().Pd();a.ER=this.Ob?!0:!1;var c;a.mA?(c=z.U.get(z.U.f.Qv),b=z.U.get(z.U.f.GF)):(c=z.U.get(z.U.f.Gl),b=z.U.get(z.U.f.qh));a.n={aM:b,R1:qF(c),J2:z.U.get(z.U.f.qh)};return a};
z.n.O=function(a){AF.b.O.call(this,a);a=this.u();(0,z.tl)(this.d,kF,a);this.kg=this.q($F.Db);this.Ob&&(this.Gq=this.q($F.qh),this.Ob.N(this.Gq),(0,z.K)(this.Gq,!1));this.Ie&&((0,z.Tl)(this.bb,this.kg),this.bb.cc(this),this.bb.ha())};
z.n.eS=function(){function a(a){return a.pageYOffset<b?-1:a.pageYOffset<b+c?0:1}var b=(0,z.oF)(window),c=(0,z.uf)(window).height,d=[];if(0===this.Fp.length)return d;for(var f=null,f=null,g=(0,z.s)(function(){return(0,z.wd)(this.Fp,a,!0,void 0,this)},this);-1<(f=g());)f=this.Fp.splice(f,1)[0],d.push(f.id);return d};z.n.k=function(){this.Ob&&this.Ob.o();this.bb&&this.bb.o();this.Im=this.bb=this.Ob=null;AF.b.k.call(this)};
z.n.qz=function(a){var b=a.ba().j,c=z.L;if(b.get(c.Qc)&&(a=a.getParent().ba(),!this.bb.kq.contains(a.j.id)))return;var d=c.ho;a=b.get(c.sa)!==z.bt.NONE;d=b.get(d)&&b.get(d)!==z.bt.NONE;c=b.get(c.Cl);a&&!d?(0,z.Et)(this.bb,b.id,c):!a&&d&&(0,z.Gt)(this.bb,b.id,c)};z.n.CB=function(a){if(!this.Ie)return!1;var b=2===a.get(this.ea.Ii),c=4===a.get(this.ea.Ii),d=this.nj>a.get(this.ea.fc);a=a.get(this.ea.gb)===z.P.id;return(b||c)&&!d&&!a};
z.n.ki=function(a,b,c){var d=a.ba();if(d.g()){var f=d.j;if(this.CB(f))this.qz(a);else if(AF.b.ki.call(this,a,b,c),a=gF((0,z.Ui)(d.H))){a=(0,z.mi)(a).y;b=(0,z.oF)(window);if(b<=a&&(d.show(c),(0,z.xt)(this,f),this.innerHeight+b>a)){this.s.M("message_displayed",f.id);return}(0,z.qe)(this.Fp,{id:f.id,pageYOffset:a},function(a,b){return a.pageYOffset>b.pageYOffset?-1:1})}}};
z.n.l=function(){var a=this.p();this.Ob&&a.e(this.Ob,"showMore",this.xJ);this.Ie?(a.e(this.bb,"showNextClicked",this.zJ),a.e(this.bb,"streamRefreshClicked",this.BJ)):(a.e(window,"scroll",this.Dz),a.e(window,"resize",this.Dz));a.e(this,"repliesExpanded",this.OU);AF.b.l.call(this)};z.n.OU=function(a){a.lR=this};z.n.Mx=function(a){this.clear();this.show();this.bb&&this.bb.clear();this.Ti=a};(0,z.v)(BF,z.R);var aG={cm:"fyre-stream-refresh"};BF.prototype.u=function(){var a={},b=z.U.get(z.U.f.pE);this.Xo===EF.hm&&(b=z.U.get(z.U.f.eG));a.n={sR:b,mY:z.U.get(z.U.f.fG)};return a};BF.prototype.O=function(a){BF.b.O.call(this,a);a=this.g();var b;b=this.u();b="\x3cdiv\x3e\x3cdiv\x3e"+(0,z.Q)(b.n.sR)+'\x3c/div\x3e\x3ca class\x3d"fyre-stream-refresh"\x3e'+(0,z.Q)(b.n.mY)+"\x3c/a\x3e\x3cdiv\x3e";a.innerHTML=b;this.iu=this.q(aG.cm)};
BF.prototype.l=function(){BF.b.l.call(this);this.p().e(this.iu,"click",this.mc)};BF.prototype.mc=function(a){a.preventDefault();this.dispatchEvent({type:"streamRefreshClicked"})};(0,z.v)(CF,z.et);CF.prototype.Vg=function(){CF.b.Vg.call(this);if(this.td&&!this.j.get(z.L.Qc)){var a={BZ:z.U.get(z.U.f.WF)},a=(0,z.yl)(z.Do.AZ,a);(0,z.Hf)(a,this.Wg.element);this.p().e(a,"click",this.wX)}};CF.prototype.wX=function(){this.dispatchEvent({type:"animationInit",$B:this.j.id})};(0,z.v)(DF,z.qt);var bG={Db:"fyre-stream-content",Un:"fyre-content-loading",qN:"fyre-stream-content-not-found"};z.n=DF.prototype;z.n.O=function(a){this.d=a;DF.b.O.call(this,a);(0,z.tl)(this.d,jF,this.u());this.kg=this.q(bG.Db);this.No=this.q(bG.qN);(0,z.$h)(this.No,{display:"none"});this.yd=this.q(bG.Un)};z.n.u=function(){var a=(0,z.Xi)(this.s.v.C())?z.T:z.U;return{n:{Oq:a.get(a.f.Br)}}};z.n.ce=function(){(0,z.$h)(this.yd,"display","none")};z.n.hg=function(){(0,z.$h)(this.yd,"display","block")};
z.n.l=function(){DF.b.l.call(this);this.p().e(this,"animationInit",this.QS)};z.n.QS=function(a){a.stopPropagation();var b=FF(),c=2E3<b[0]-b[1]?1E3:300;IF(b,c);HF(this,c,(0,z.s)(function(){this.dispatchEvent({type:"threadBreakout",$B:a.$B,wZ:(0,z.s)(this.ce,this)});this.hg()},this))};z.n.CJ=function(a){a.stopPropagation();KF(this);this.dispatchEvent("sortOrderChanged")};z.n.clear=function(){this.Qi&&KF(this);DF.b.clear.call(this)};
z.n.Jx=function(a,b){var c=z.L,d=a.vd(),f=LF(this,b),g=b.get(c.fc),h=(0,z.s)(function(a){var b=a.ba().j;a=LF(this,b);b=b.get(c.fc);b=f===a&&g>=b;return f>a||b?-1:1},this),d=(0,z.wd)(d,h,!0,void 0,void 0);return 0>d?~d:d};z.n.SJ=function(a){if(this.Xo!==EF.hm){for(;a.getParent()!==this.Mf;)a=a.getParent();a=a.ba().Mm("fyre-comment-divider");var b=a.length,c=2<b?b-4:-1;(0,z.K)(a[b-2],!1);-1<c&&(0,z.K)(a[c],!0)}};(0,z.v)(MF,z.zt);var OF={bN:"fyre-stream-sort-back",Un:"fyre-content-loading",$N:"fyre-follow-conversation",xP:"fyre-stream-sort-hot-threads",BP:"fyre-stream-sort-top-comments",yP:"fyre-stream-sort-newest",zP:"fyre-stream-sort-oldest",Gw:"fyre-stream-sort-selected",AP:"fyre-stream-sort-options"};z.n=MF.prototype;
z.n.u=function(){var a={},b=this.h.v,c=b.C();a.mA=b.C().Pd();a.TW=!z.P.get(z.P.c.Eb);a.Tk=b.Tk(z.P.id);a.FR=c.get(z.S.im)===EF.hm;a.YH=c.get(z.S.im)===EF.ck;a.n={BQ:z.U.get(z.U.f.oE),oW:z.U.get(z.U.f.mr),rW:z.U.get(z.U.f.nr),NV:z.U.get(z.U.f.ck),RW:z.U.get(z.U.f.Wl),WW:z.U.get(z.U.f.Xl),oB:z.U.get(z.U.f.QF),Oq:z.U.get(z.U.f.Br),EZ:z.U.get(z.U.f.hm)};return a};
z.n.O=function(a){MF.b.O.call(this,a);a=this.g();var b;b=this.u();b='\x3cdiv class\x3d"fyre-content-loading"\x3e'+(0,z.Q)(b.n.Oq)+"\x3c/div\x3e"+(b.mA?'\x3ca class\x3d"fyre-follow-conversation"\x3e'+(b.TW?b.Tk?(0,z.Q)(b.n.rW):(0,z.Q)(b.n.oW):"")+"\x3c/a\x3e":"")+'\x3cdiv class\x3d"fyre-stream-sort"\x3e\x3cdiv class\x3d"fyre-stream-sort-options"\x3e\x3ca class\x3d"fyre-stream-sort-newest fyre-stream-sort-selected"\x3e'+(0,z.Q)(b.n.RW)+'\x3c/a\x3e\x3cspan class\x3d"fyre-stream-sort-bar"\x3e'+(0,z.Q)(b.n.oB)+
'\x3c/span\x3e\x3ca class\x3d"fyre-stream-sort-oldest"\x3e'+(0,z.Q)(b.n.WW)+"\x3c/a\x3e"+(b.FR?'\x3cspan class\x3d"fyre-stream-sort-bar"\x3e'+(0,z.Q)(b.n.oB)+'\x3c/span\x3e\x3ca class\x3d"fyre-stream-sort-top-comments"\x3e'+(0,z.Q)(b.n.EZ)+"\x3c/a\x3e":"")+(b.YH?'\x3cspan class\x3d"fyre-stream-sort-bar"\x3e'+(0,z.Q)(b.n.oB)+'\x3c/span\x3e\x3ca class\x3d"fyre-stream-sort-hot-threads"\x3e'+(0,z.Q)(b.n.NV)+"\x3c/a\x3e":"")+"\x3c/div\x3e"+(b.YH?'\x3ca class\x3d"fyre-stream-sort-back"\x3e'+(0,z.Q)(b.n.BQ)+
"\x3c/a\x3e":"")+"\x3c/div\x3e";a.innerHTML=b;this.Jm=this.q(OF.$N);this.Fu=this.q(OF.xP)||null;this.KB=this.q(OF.BP)||null;this.Kq=this.q(OF.bN)||null;this.Gu=this.q(OF.yP);this.dM=this.q(OF.zP);this.mZ=this.q(OF.AP);this.yd=this.q(OF.Un);this.ce()};z.n.l=function(){MF.b.l.call(this);var a=this.p();z.P.on(z.P.G.Vd,this.kj,this);a.e(this.g(),"click",this.mc);this.me.ec&&(a.e(this.me.ec,"sortOrderChanged",this.LU),a.e(this.me.ec,"threadBreakout",this.Ez))};
z.n.mc=function(a){a.preventDefault();NF(this,a.target)};z.n.LU=function(a){a.stopPropagation();NF(this,this.Gu)};z.n.Ez=function(a){(0,z.Za)(a,{Ue:this.me.Ue,cd:(0,z.s)(function(){a.wZ();QF(this,!0)},this)})};z.n.dJ=function(){var a=this.h.v;a.C();var b=z.P.c;z.P.id?(b=a.Tk(z.P.get(b.Q)),a.Cs(!b),a=b?z.U.get(z.U.f.mr):z.U.get(z.U.f.nr),this.Jm.innerHTML=a):(0,z.al)(this.h.Ib,(0,z.s)(this.dJ,this))};
z.n.kj=function(){var a=this.h.v,b=a.C(),c=z.P.c,b=!b.Pd()||z.P.get(c.Eb);this.Jm&&(b?(0,z.K)(this.Jm,!1):(a=a.Tk(z.P.id)?z.U.get(z.U.f.nr):z.U.get(z.U.f.mr),this.Jm.innerHTML=a,(0,z.K)(this.Jm,!0)))};z.n.k=function(){MF.b.k.call(this);z.P.off(null,null,this)};(function(a,b){function c(){var a=D.elements;return"string"==typeof a?a.split(" "):a}function d(a){var b={},d=a.createElement,f=a.createDocumentFragment,g=f();a.createElement=function(a){D.YY||d(a);var c;c=b[a]?b[a].cloneNode():k.test(a)?(b[a]=d(a)).cloneNode():d(a);return c.canHaveChildren&&!h.test(a)?g.appendChild(c):c};a.createDocumentFragment=Function("h,f","return function(){var n\x3df.cloneNode(),c\x3dn.createElement;h.shivMethods\x26\x26("+c().join().replace(/\w+/g,function(a){b[a]=d(a);g.createElement(a);
return'c("'+a+'")'})+");return n}")(D,g)}function f(a){var b;if(a.JR)return a;if(D.XY&&!m){b=a.createElement("p");var c=a.getElementsByTagName("head")[0]||a.documentElement;b.innerHTML="x\x3cstyle\x3earticle,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}\x3c/style\x3e";b=!!c.insertBefore(b.lastChild,
c.firstChild)}r||(b=!d(a));b&&(a.JR=b);return a}var g={},h=/^<|^(?:button|form|map|select|textarea|object|iframe)$/i,k=/^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i,m,r;(function(){var c=b.createElement("a");c.innerHTML="\x3cxyz\x3e\x3c/xyz\x3e";(m="hidden"in c)&&"function"==typeof a.WV&&a.WV("#modernizr{}",function(b){b.hidden=!0;m="none"==(a.getComputedStyle?
a.getComputedStyle(b,null):b.currentStyle).display});r=1==c.childNodes.length||function(){try{b.createElement("a")}catch(a){return!0}var c=b.createDocumentFragment();return"undefined"==typeof c.cloneNode||"undefined"==typeof c.createDocumentFragment||"undefined"==typeof c.createElement}()})();var D={elements:g.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:!1!==g.XY,shivMethods:!1!==
g.YY,type:"default",shivDocument:f};f(b)})(z.u.window,z.u.document);(0,z.v)(UF,z.Nt);UF.prototype.ju=function(a,b){if(!this.hb){this.L=b;var c=b.get(z.S.hh),d=b.get(z.S.we);this.Wq=new z.Mt(c,d,a.wa.wb);this.U(this.Wq);this.Lo=new tF(a.v.C());this.U(this.Lo);this.PK=null;this.bi=new z.yt(a);this.U(this.bi);this.Se=new MF(a);this.U(this.Se);this.qa=new AF(a);this.Se.U(this.qa);c={qa:this.qa};VF(this,a,b,c);this.Se.me=c;this.Ft((0,z.s)(function(a){this.F=a;this.U(this.F);a=this.F;this.da&&a&&a.N(this.hf,!0)},this))}};
UF.prototype.u=function(){return{sM:z.w.S.Tu,tM:(0,window.encodeURIComponent)(String(window.location.href)),wb:this.h.wa.wb,Qh:this.L.Qh(),Pd:this.L.Pd(),sy:!this.h.wa.Bx,ZV:this.h.wa.Bx}};
var GF="fyre-widget",cG={GC:"fyre-listener-avatars",ev:"fyre-comment-count",hv:"fyre-comment-stream",Uj:"fyre-editor",jE:"fyre-help",SP:"fyre-top-content-stream",Sv:"fyre-livecount",Tv:"fyre-login-bar",y0:"fyre-notifier-container",lw:"fyre-permalink-stream",Jw:"fyre-stream-header",PP:"fyre-thread-breakout-stream",x1:GF};z.n=UF.prototype;
z.n.m=function(){this.d=(0,z.yl)(lF,this.u());this.Wq.N(this.q(cG.Tv));this.uf.N(this.q(cG.Sv));this.Lo.N(this.q(cG.ev));this.cp&&this.cp.N(this.q(cG.GC));this.dt.N(this.q(cG.jE));this.Hn=this.q(cG.Jw);this.Se.N(this.Hn);this.qa.N(this.q(cG.hv));(0,z.Bt)(this.qa);if(this.ec){var a=this.q(cG.SP);this.ec.N(a);this.Ue&&(a=this.q(cG.PP),this.Ue.N(a))}this.hf=this.q(cG.Uj)};
z.n.l=function(){UF.b.l.call(this);var a=this.F;this.da&&a&&a.N(this.hf,!0);this.h.K.subscribe("render_complete",this.Ig,this);this.h.K.Lu("stream_data_received",this.IT,this);this.ay=new z.Ot(this.d,z.LA)};z.n.V=function(){this.L.off(null,null,this);this.h.K.Pb("render_complete",this.Ig,this);UF.b.V.call(this)};z.n.Ig=function(){this.cp&&this.cp.Ig();this.uf.Ig()};
z.n.IT=function(){var a=this.L,b=a.get(z.S.Tl);z.$c||b||(b=(0,z.s)(function(){this.PK=new z.dG(this.h,a.get(z.S.we));this.U(this.PK,!0)},this),(0,z.ob)(z.w.S.vb+"/javascripts/livefyre_mod_notifier.js",null,null,b))};z.n.Ft=function(a){var b=z.Gq.D(),c=(0,z.s)(function(b){b=new b(this.h,{bg:this.h.wa.bg,sh:this.h.wa.sh,nH:this.L,Yi:this.h.wa.Yi});a(b)},this);(0,z.Hq)(b,"main",c)};
z.n.ij=function(){0<(0,z.Wl)(this,this.F)&&(this.removeChild(this.F),this.F.o());this.Ft((0,z.s)(function(a){this.F=a;this.U(this.F);a=this.F;this.da&&a&&a.N(this.hf,!0)},this))};z.n.de=function(a){if(null!=a){var b=this.q(cG.lw);this.bi.N(b,!0);(0,window.setTimeout)((0,z.s)(function(){this.hb||(this.qa.de(a,6E3),this.bi.start(a))},this),3E3)}};z.n.k=function(){UF.b.k.call(this);this.L&&(this.L.off(null,null,this),this.L=null);this.ec&&this.ec.o();this.Ue&&this.Ue.o();this.hf=null;this.ay&&this.ay.o()};(0,z.v)(WF,z.Cq);z.n=WF.prototype;z.n.be=function(a,b){WF.b.be.call(this,a,b);a.e(b,"pastPermalinkInserted",this.uJ);a.e(b,"repliesExpanded",this.AT);a.e(b,"sortHotThreads",this.dV);a.e(b,"sortOrderChanged",this.AJ);a.e(b,"sortTopComments",this.eV);a.e(b,"threadBreakout",this.Ez)};
z.n.Ps=function(a,b){var c=2===b.zd,d=1!==b.zd;switch(b.type){case z.iq.mh:var f=this.h.v.C(),f=(0,z.Ej)(b,f),g=f.get(z.L.gb),g=this.h.v.rb().get(g);f.set(z.L.Ea,g);(0,z.rt)(a,f,c,d);break;case z.iq.hw:a.Ws(nF(b),c,d);break;case z.iq.tr:(0,z.ut)(a,(0,z.Bj)(b))}};z.n.Xs=function(a){this.jd||(this.jd=this.pl.qa);if(this.jd!==this.pl.qa){var b=this.pl.Se;QF(b,!1);PF(b,b.Gu);(0,z.Za)(a,{qa:this.pl.qa,direction:z.vz.ue,cd:z.p});this.AJ(a)}};
z.n.AJ=function(a){(0,z.Eq)(this);$E(this.h.Kb);this.jd&&this.jd.clear();a.qa.Mx(a.direction);this.jd=a.qa;var b=this.h.Kb.ej(a.direction==z.vz.ue?this.h.Kb.Ud.Sb:0),c=(0,z.s)(function(b){a.cd();this.Fe(a.qa,b)},this);(0,z.Dq)(this,b,c,a.By)};z.n.eV=function(a){(0,z.Eq)(this);a.qa.ha();a.qa.clear();this.jd=a.ec;var b=this.h.Kb.cj("likes");(0,z.Dq)(this,b,(0,z.s)(function(b){a.cd();(0,z.Xa)(b)?a.wA():this.Fe(a.ec,b)},this))};
z.n.dV=function(a){(0,z.Eq)(this);a.qa.ha();a.qa.clear();this.jd&&this.jd.clear();this.jd=a.ec;var b=this.h.Kb.fj();(0,z.Dq)(this,b,(0,z.s)(function(b){a.cd();(0,z.Xa)(b)?a.wA():this.Fe(a.ec,b)},this))};z.n.Ez=function(a){if(this.jd instanceof DF){(0,z.Eq)(this);this.jd.clear();a.Ue.ha();this.jd=a.Ue;var b=this.h.Kb.mp(a.$B,!1),c=!1;(0,z.Dq)(this,b,(0,z.s)(function(b){a.cd();this.Fe(a.Ue,b);c||(new z.hF(a.Ue.d,(0,z.Ie)(void 0)?void 0:300)).play();c=!0},this))}};
z.n.AT=function(a){var b=a.r,c=z.L,d=c.yv,f=c.hE,g=c.Kl;if(!b.get(f)){b.set(d,!0);var h=function(){b.set(g,a.In.Ye)},c=(0,z.s)(function(c){b.set(g,a.In.Ye,!1);b.set(f,!0);b.set(d,!1);(0,z.y)(c,(0,z.He)(this.Ps,a.lR),this);this.Aa.e(a.In,"threadVisChanged",h)},this),k=fF(this.h.Kb,b);k.on(k.G.Il,c,this);c(k.get(k.c.Db))}};(0,z.v)(XF,z.Io);z.n=XF.prototype;z.n.d=null;z.n.k=function(){XF.b.k.call(this);this.Ku.o();this.Oc.o();this.pg&&this.pg.o();delete this.pg};z.n.Xm=function(a){XF.b.Xm.call(this,a);this.Ku=new WF(this.h);this.Ku.handle(a)};z.n.RB=function(){this.h.tl.stop()};z.n.sZ=function(){this.h.Tp.stop()};z.n.ql=function(){this.h.tl.start()};z.n.pZ=function(){this.h.Tp.start()};z.n.La=function(){this.pg&&this.pg.o();this.Oc.La(this.d);var a=(0,z.Ko)();this.Oc.de(a);this.h.K.M("render_complete")};(0,z.v)(YF,z.ej);YF.prototype.xG=rF.D();YF.prototype.k=function(){YF.b.k.call(this);this.stop();delete this.wa;delete this.Ba;ZF(this);(0,z.jj)(this);this.Hk&&(this.Hk.o(),delete this.Hk)};YF.prototype.YB=function(){this.stop();ZF(this);YF.b.YB.call(this)};z.Tb.main.Si.ma(YF);})(fyre.conv);

/*
//@ sourceMappingURL=sourcemap_livefyre_mod_main
*/
