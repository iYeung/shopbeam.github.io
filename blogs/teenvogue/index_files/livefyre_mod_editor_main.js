(function(z){
var vJ=function(){return'\x3cdiv class\x3d"fyre-editor-container"\x3e\x3cdiv class\x3d"fyre-editor-editable"\x3e\x3cdiv class\x3d"fyre-roundedpanel-content"\x3e\x3c/div\x3e\x3c/div\x3e\x3cspan class\x3d"fyre-editor-spinner"\x3e\x3c/span\x3e\x3cdiv class\x3d"fyre-editor-preview"\x3e\x3c/div\x3e\x3c/div\x3e'};z.fH=function(a,b){z.bE.call(this,a,b);this.vm=vJ};z.dH=function(a,b){z.fH.call(this,a,b);this.Ei="fyre-liveblog-editor"};
z.eH=function(a,b){z.fH.call(this,a,b);this.Ei="fyre-livechat-editor";this.ZD=!1};(0,z.v)(z.fH,z.bE);z.fH.prototype.rs=["format","mention","raw","cancel","post"];z.fH.prototype.Sj="format mention media raw follow share post".split(" ");z.fH.prototype.Ks="format mention media raw share post".split(" ");z.fH.prototype.l=function(){z.fH.b.l.call(this);(0,z.cE)(this)};(0,z.v)(z.dH,z.fH);z.dH.prototype.Sj="format mention raw media follow share post".split(" ");(0,z.v)(z.eH,z.fH);z.eH.prototype.Sj=["format","mention","raw","share","post"];z.eH.prototype.l=function(){z.eH.b.l.call(this);this.p().f(this.V,z.CE.az,this.eO);if(!this.bE){var a=this.T.k,b=a.AQ;z.vg&&(b=a.BQ);this.V.$f(this.Ul,b,!0)}};z.eH.prototype.eO=function(){this.bE||this.ZD||(this.V.$f(this.Ul,null,!0),this.ZD=!0)};})(fyre.conv);