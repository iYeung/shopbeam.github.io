(function(){
var pfs={ "http://www.usmagazine.com/celebrity-bios":{"nid":21492,"tr":1},
"http://www.usmagazine.com/moviestvmusic/":{"nid":21491,"tr":1},
"http://www.usmagazine.com/celebrity-moms":{"nid":31068,"tr":1},
"http://www.usmagazine.com/photos/":{"nid":21489,"tr":1},
"http://www.usmagazine.com/style":{"nid":21490,"tr":1},
"http://www.usmagazine.com/news":{"nid":21488,"tr":1},
"http://www.usmagazine.com/":{"nid":21487,"tr":1} },d=document,w=window,u=(w.gm_fake_href)?w.gm_fake_href:w.location.href;

function z(n){
var s,u;

if (Math.random()>=n['tr']) {
	return;
}



var ar_nodes = ":21492:21491:31068:21489:21490:21488:21487:";
if (ar_nodes.indexOf(":"+n['nid']+":") >= 0) {	// adradar only
	(new Image).src="//amch.questionmarket.com/adscgen/adrad.php?survey_num=0&aicode=0&site="+n['nid'];
	return;
}



s=d.createElement('SCRIPT');
u='//content.dl-rms.com/dt/s/'+n['nid']+'/s.js';
s.src=u;
s.type='text/javascript';
d.getElementsByTagName('head')[0].appendChild(s);
}


function r() {
	var n="",p,x;
	while (1) {
		try {
			for (p in pfs) {
			  if (u.substring(0,p.length)==p && p.length > n.length) {
				if (pfs[p].ex) {
					x=new RegExp(pfs[p].ex,"i");
					if (x.test(u)) {
						continue;
					}
				}
				n=p;
			  }
			}
			if (n.length > 0) {
				z(pfs[n]);
				return;
			}
		} catch (e) {}
	
		if (w==top) {
			break;
		}
	
		if (w==window&&u!=d.referrer) {
			u=d.referrer;
		} else {
			w=w.parent;
		}
	}
}

if (d.readyState=="complete"){
	r();
} else if (w.addEventListener){ 
	w.addEventListener("load", r, false);
} else if (w.attachEvent){ 
	w.attachEvent("onload", r);
}
})();