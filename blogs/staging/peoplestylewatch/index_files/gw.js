//mycon-dev-gradle 13.12.11-1095-1095 (2013-12-11 18:14:18 GMT)
var rsi_now= new Date();
var rsi_csid= 'H07710';if(typeof(csids)=="undefined"){var csids=[rsi_csid];}else{csids.push(rsi_csid);};function rsiClient(hb){this._rsiEa=hb;this._rsiFa=1;this._rsiGa=1;this._rsiHa=0;this._rsiIa=0;this._rsiJa="120814";this._rsiKa="pix04.revsci.net";this._rsiLa="js";this._rsiMa="b";this._rsiNa="3";this._rsiOa=3;this._rsiPa=1;this._rsiQa=0;this._rsiRa=new Array();this._rsiSa=0;this._rsiTa=null;this._rsiUa=null;this._rsiVa=null;this._rsiWa=[];this._rsiXa=null;this._rsiYa=null;this._rsiZa=0;this.DM_cat=function(ib){this._rsiTa=ib;};this.DM_name=function(jb){this._rsiUa=jb;};this.DM_keywords=function(st){this._rsiVa=st;};this.DM_event=function(kb){this._rsiWa.push(kb);};this.DM_addToLoc=function(n,v){this._rsiXa=_rsi$a(this._rsiXa,n,v);};this.DM_addEncToLoc=function(n,v){this.DM_addToLoc(_rsiab(n),_rsiab(v));};this.DM_setLoc=function(u){this._rsiXa=u;};this.rsi_c=function(hb){this._rsiEa=hb;};this.rsi_ral=function(lb){this._rsiFa=lb;};this.rsi_riu=function(mb){this._rsiGa=mb;};this.rsi_tiu=function(nb){this._rsiHa=nb;};this.rsi_m=function(ob){this._rsiIa=ob;};this.rsi_s=function(pb){this._rsiKa=pb;};this.rsi_t=function(qb){this._rsiLa=qb;};this.rsi_en=function(rb){this._rsiMa=rb;};this.rsi_cn=function(sb){this._rsiNa=sb;};this.rsi_us=function(tb){this._rsiOa=tb;};this.rsi_ra=function(ra){this._rsiPa=ra;};this.rsi_ieac=function(ac){this._rsiQa=ac;};this.DM_tag=function(){var ub;if(this._rsiSa==0||this._rsiIa==1){if(typeof(DM_prepClient)=="function"){try{DM_prepClient(this._rsiEa,this);}catch(ignore){}}var vb=this._rsibb();if(this._rsiLa=="gif"){ub=new Image(2,3);ub.src=vb;this._rsiRa[this._rsiRa.length]=ub;}else if(this._rsiLa=="js"){var wb=document.createElement("script");wb.language="JavaScript";wb.type="text/javascript";wb.src=vb;var xb=(document.body==null)?document.getElementsByTagName("head")[0]:document.body;if(this._rsiQa&&_rsicb()){xb.appendChild(wb);}else{xb.insertBefore(wb,xb.firstChild);}ub=wb;}this._rsiSa=1;}this.rsi_r();return ub;};this._rsibb=function(){var yb="";this.DM_addEncToLoc("_rsiL",this._rsiZa);yb="DM_LOC="+_rsiab(this._rsiXa);if(this._rsiTa){yb+="&DM_CAT="+_rsiab(this._rsiTa);}if(this._rsiWa&&this._rsiWa.length){for(var x=0;x<this._rsiWa.length;++x){yb+="&DM_EVT="+_rsiab(this._rsiWa[x]);}}if(this._rsiVa){yb+="&DM_KYW="+_rsiab(this._rsiVa);}if(this._rsiGa==1&&this._rsiYa){yb+="&DM_REF="+_rsiab(this._rsiYa);}if(this._rsiHa==1){yb+="&DM_TIT="+_rsiab(document.title);}if(this._rsiUa){yb+="&DM_NAM="+_rsiab(this._rsiUa);}yb+="&DM_EOM=1";var zb="http"+(location.protocol=="https:"?"s":"")+"://";var Ab="/"+this._rsiEa+"/"+this._rsiMa+this._rsiNa+"/0/"+this._rsiOa+"/"+this._rsiJa+"/";var Bb=Math.floor(Math.random()*1000000000)+"."+this._rsiLa;var Cb=zb+this._rsiKa+Ab+Bb+"?D="+_rsiab(yb)+"&C="+_rsiab(csids);var Db=Cb.length;if(Db>=2000){if(Cb.charAt(1998)=='%'){Cb=Cb.substr(0,1998);}else if(Cb.charAt(1999)=='%'){Cb=Cb.substr(0,1999);}else{Cb=Cb.substr(0,2000);}if(Cb.charAt(Cb.length-3)=='%'&&Cb.charAt(Cb.length-2)=='2'&&Cb.charAt(Cb.length-1)=='5'){Cb=Cb.substr(0,Cb.length-3);}}return Cb;};this.rsi_r=function(){var Eb;var Fb;var Gb=0;var Hb=0;if(this._rsiFa==1){var Ib=window;while(true){try{Eb=Ib.document.location;Fb=Ib.document.referrer;Gb=Hb;}catch(notAllowed){}if(Ib==window.top||Ib==Ib.parent){break;}Ib=Ib.parent;Hb++;}}else{Eb=window.document.location;Fb=window.document.referrer;}this._rsiZa=Hb-Gb;this._rsiYa=this._rsiPa?_rsidb(Fb.toString()):Fb.toString();if(this._rsiZa==0){this._rsiXa=(this._rsiPa)?_rsidb(Eb.href):Eb.href;}else{this._rsiXa=this._rsiYa;}this._rsiTa=null;this._rsiUa=null;this._rsiVa=null;this._rsiWa=[];};this.rsi_r();}var _rsiab;if(typeof(encodeURIComponent)=="function"){_rsiab=encodeURIComponent;}else{var _rsieb=new RegExp("[\x00-\x20]|[\x22-\x26]|[\x2B-\x2C]|\x2F|[\x3A-\x40]|[\x5B-\x5E]|\x60|[\x7B-\x7D]|[\x7F-\uFFFF]","g");_rsiab=function(v){return v.toString().replace(_rsieb,_rsifb);}}function _rsi$a(u,n,v){return u+(u.indexOf("?")==-1?"?":"&")+n+"="+v;}function _rsidb(u){var i=u.indexOf('#');return(i>=0)?u.substr(0,i):u;}function _rsigb(i){var Jb=i.toString(16).toUpperCase();return Jb.length<2?"0"+Jb:Jb;}function _rsifb(c){var i=c.charCodeAt(0);if(isNaN(i))return "";if(i<128)return "%"+_rsigb(i);if(i<2048)return "%"+_rsigb(0xC0+(i>>6))+"%"+_rsigb(0x80+(i&0x3F));if(i<65536)return "%"+_rsigb(0xE0+(i>>12))+"%"+_rsigb(0x80+(i>>6&0x3F))+"%"+_rsigb(0x80+(i&0x3F));return "%"+_rsigb(0xF0+(i>>18))+"%"+_rsigb(0x80+(i>>12&0x3F))+"%"+_rsigb(0x80+(i>>6&0x3F))+"%"+_rsigb(0x80+(i&0x3F));}function _rsicb(){return(navigator.appName=='Microsoft Internet Explorer');}window[rsi_csid]=new rsiClient(rsi_csid);
function DM_cat(aa){window[rsi_csid].DM_cat(aa);}function DM_name(ba){window[rsi_csid].DM_name(ba);}function DM_keywords(kw){window[rsi_csid].DM_keywords(kw);}function DM_event(ca){window[rsi_csid].DM_event(ca);}function DM_addToLoc(n,v){window[rsi_csid].DM_addToLoc(n,v);}function DM_addEncToLoc(n,v){window[rsi_csid].DM_addEncToLoc(n,v);}function DM_setLoc(u){window[rsi_csid].DM_setLoc(u);}function DM_tag(){window[rsi_csid].DM_tag();}
function asi_addElem(e){var p=document.body==null?document.getElementsByTagName('head')[0]:document.body;p.insertBefore(e,p.firstChild);}
function asi_makeIFrame(u,h,w){var e=document.createElement("iframe");e.height=h?h:0;e.width=w?w:0;e.frameBorder=0;e.src=u;return e;}
function asi_makeJS(u){var e=document.createElement("script");e.language="JavaScript";e.type="text/javascript";e.src=u;return e;}
function asi_makeGIF(u){var i=new Image(2,2);i.src=u;return i;}
function asi_scheme(){return "http"+(location.protocol=="https:"?"s":"");}
function asi_addOnSegs(wa){var xa=DM_onSegsAvailable;var ya=rsi_csid.toLowerCase();return function(za,Aa){wa(za,Aa);if(typeof(xa)=="function"&&Aa==ya){xa(za,Aa);}};}

var DM_onSegsAvailable = asi_addOnSegs(function(userSegs,csid){asi_makeGIF("//cm.g.doubleclick.net/pixel?google_nid=audsci&google_cm");});
asi_makeGIF('http://s.ixiaa.com/digi/D370E1D0-2BFE-4170-B231-7B34EE0D51B6/a.gif?redirect=http%253A%252F%252Fpix04.revsci.net%252FL11277%252Fb3%252F0%252F3%252F0.gif%253FD%253DDM_LOC%25253Dhttp%2525253A%2525252F%2525252Fixi.com%2525252F%2525253FAA%2525253D%7BAA_value%7D%25252526AB%2525253D%7BAB_value%7D%25252526AC%2525253D%7BAC_value%7D%25252526AY%2525253D%7BAY_value%7D%25252526AZ%2525253D%7BAZ_value%7D%25252526EA%2525253D%7BEA_value%7D%25252526EB%2525253D%7BEB_value%7D%25252526EC%2525253D%7BEC_value%7D%25252526ED%2525253D%7BED_value%7D%25252526GA%2525253D%7BGA_value%7D%25252526GB%2525253D%7BGB_value%7D%25252526GC%2525253D%7BGC_value%7D%25252526GD%2525253D%7BGD_value%7D%25252526GE%2525253D%7BGE_value%7D%25252526GF%2525253D%7BGF_value%7D%25252526GG%2525253D%7BGG_value%7D%25252526GH%2525253D%7BGH_value%7D%25252526GI%2525253D%7BGI_value%7D%25252526GJ%2525253D%7BGJ_value%7D%25252526HA%2525253D%7BHA_value%7D%25252526HB%2525253D%7BHB_value%7D%25252526HC%2525253D%7BHC_value%7D%25252526HD%2525253D%7BHD_value%7D%25252526HE%2525253D%7BHE_value%7D%25252526HF%2525253D%7BHF_value%7D%25252526VA%2525253D%7BVA_value%7D%25252526VB%2525253D%7BVB_value%7D%25252526VC%2525253D%7BVC_value%7D%25252526VD%2525253D%7BVD_value%7D%25252526VE%2525253D%7BVE_value%7D%25252526FA%2525253D%7BFA_value%7D%25252526FB%2525253D%7BFB_value%7D%25252526FC%2525253D%7BFC_value%7D%25252526FD%2525253D%7BFD_value%7D%25252526FE%2525253D%7BFE_value%7D%25252526BA%2525253D%7BBA_value%7D%25252526BB%2525253D%7BBB_value%7D%25252526BC%2525253D%7BBC_value%7D%25252526BE%2525253D%7BBE_value%7D%25252526BF%2525253D%7BBF_value%7D%25252526BI%2525253D%7BBI_value%7D%25252526BJ%2525253D%7BBJ_value%7D%25252526DA%2525253D%7BDA_value%7D%25252526DB%2525253D%7BDB_value%7D%25252526DC%2525253D%7BDC_value%7D%25252526DG%2525253D%7BDG_value%7D%25252526DH%2525253D%7BDH_value%7D%25252526DI%2525253D%7BDI_value%7D%25252526DJ%2525253D%7BDJ_value%7D%25252526DK%2525253D%7BDK_value%7D%25252526SBA%2525253D%7BSBA_value%7D%25252526IA%2525253D%7BIA_value%7D%25252526IB%2525253D%7BIB_value%7D%25252526IC%2525253D%7BIC_value%7D%25252526ID%2525253D%7BID_value%7D%25252526IE%2525253D%7BIE_value%7D%25252526IF%2525253D%7BIF_value%7D%25252526IG%2525253D%7BIG_value%7D%25252526IH%2525253D%7BIH_value%7D%25252526IJ%2525253D%7BIJ_value%7D%25252526IK%2525253D%7BIK_value%7D%25252526SBB%2525253D%7BSBB_value%7D%25252526SBC%2525253D%7BSBC_value%7D%25252526SBD%2525253D%7BSBD_value%7D%25252526SBE%2525253D%7BSBE_value%7D%25252526SBF%2525253D%7BSBF_value%7D%25252526SBG%2525253D%7BSBG_value%7D%25252526SBH%2525253D%7BSBH_value%7D%25252526SBI%2525253D%7BSBI_value%7D%25252526SBJ%2525253D%7BSBJ_value%7D%25252526SBK%2525253D%7BSBK_value%7D%25252526SBL%2525253D%7BSBL_value%7D%25252526SBM%2525253D%7BSBM_value%7D%25252526SBN%2525253D%7BSBN_value%7D%25252526SBO%2525253D%7BSBO_value%7D%25252526SBP%2525253D%7BSBP_value%7D%25252526SBQ%2525253D%7BSBQ_value%7D%25252526SBR%2525253D%7BSBR_value%7D ');
asi_makeGIF(' http://tags.bluekai.com/site/2736');
asi_makeGIF('//pixel.rubiconproject.com/tap.php?v=16728&nid=2810&put=BAE_e9eI3U8WbyRJF4d2A6A80KQY&expires=40');
function createDoubleClickBidManagerCB(custCode){
   var prevDM_onSegsAvail = DM_onSegsAvailable;
   var origCsid = rsi_csid.toLowerCase();
   custCode = custCode.toLowerCase();
   return function(userSegs,csid) {
		if (csid == custCode) {
			if (userSegs.length > 0) {
				var url = asi_scheme() + "://3266374.fls.doubleclick.net/activityi;src=3266374;type=audsci;cat=audsci;u1=";
				var csidInSegId;
				
				for (var x = 0; x < userSegs.length && url.length < 2000; ++x) {
					csidInSegId = userSegs[x].toLowerCase().substr(0,6);    
					
					if(csidInSegId == custCode){
						url += userSegs[x].toLowerCase() + "-";
					}                
				}
				url += ";ord=1;num=1?";
				asi_makeGIF(url);
			}
		}
		if (typeof(prevDM_onSegsAvail) == "function" && csid == origCsid) {
			 prevDM_onSegsAvail(userSegs,csid);
		}	
	};
};
var DM_onSegsAvailable = createDoubleClickBidManagerCB("J11259");
asi_addElem(asi_makeJS("//pix04.revsci.net/J11259/a0/0/0/0.js"));
