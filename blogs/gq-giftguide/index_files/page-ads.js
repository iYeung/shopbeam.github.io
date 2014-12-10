var docCookies = document.cookie.split(';');
var origRefer = null;
for(var i=0;i < docCookies.length;i++) {
	var c = docCookies[i];
	while (c.charAt(0)==' ') c = c.substring(1,c.length);
	if (c.indexOf("original_referrer=") == 0) {
		origRefer = c.substring("original_referrer=".length,c.length);
	}
}
if(origRefer == null){
	document.cookie = "original_referrer=" + document.referrer + "; path=/";
}
// This product includes GeoLite data created by MaxMind, available from http://www.maxmind.com
var pageAdsParams = {"site_prefix":"gq","position_list":"AMS_GQM_GLOBAL_SLIDESHOW,AMS_GQM_GLOBAL_NAVBAR,AMS_GQM_GLOBAL_HEADER,AMS_GQM_GLOBAL_HEADERCALLOUT,AMS_GQM_POPUP_FLOATINGAD,AMS_GQM_MOBILE_NAV_LINK,AMS_GQM_GLOBAL_HEADER,AMS_GQM_GLOBAL_RIGHTRAIL_A,AMS_GQM_GLOBAL_RIGHTRAIL_B,AMS_GQM_GLOBAL_FOOTER,AMS_GQM_GLOBAL_NAVBAR_ROLLOVER","subdomain":"www","url_name":"the-2014-baller-gift-guide","ajax":1,"browser_path":"/style/201412/the-2014-baller-gift-guide","keywords":"default","ad_category_prefix":"style","cat_prefixes":",style,201412,the-2014-baller-gift-guide"};
var pageAds = {"AMS_GQM_GLOBAL_RIGHTRAIL_A":"<a href=\"http://subscribe.gq.com//ams/amsClick?pos_id=2571&campaign_id=23597&creative_id=27013&site_id=793&top_level_section_prefix=style&full_url=/style/201412/the-2014-baller-gift-guide\"  target=\"_blank\" ><script language=\"JavaScript\" type=\"text/javascript\">var exp = new Date();var exp_time = exp.getTime()+315360000000;var by_sync = 0;var init_time = exp.getTime() + 315360000000;\nexp.setTime(exp_time);var value = 23597 + \":\" + exp_time + \":\" + init_time + \":\" + by_sync;document.cookie = \"p_2571_cm=\"+escape(value)+\";expires=\"+exp.toGMTString()+\";path=/;domain=gq.com;\"</script><img src=\"//subscribe.gq.com/circulation/shared/ads/GQM_RRA_300x100_v3_subandgive.jpg\"></a>","":null,"AMS_GQM_GLOBAL_RIGHTRAIL_B":"<a href=\"http://subscribe.gq.com//ams/amsClick?pos_id=2605&campaign_id=23255&creative_id=26670&site_id=793&top_level_section_prefix=style&full_url=/style/201412/the-2014-baller-gift-guide\"  target=\"_blank\" ><script language=\"JavaScript\" type=\"text/javascript\">var exp = new Date();var exp_time = exp.getTime()+1800000;var by_sync = 0;var init_time = exp.getTime() + 43200000;\nexp.setTime(exp_time);var value = 23255 + \":\" + exp_time + \":\" + init_time + \":\" + by_sync;document.cookie = \"p_2605_cm=\"+escape(value)+\";expires=\"+exp.toGMTString()+\";path=/;domain=gq.com;\"</script><img src=\"//subscribe.gq.com/circulation/shared/ads/GQM_RRB_300x457_dec14_ModelUpdate.gif\"></a>","AMS_GQM_GLOBAL_HEADER":"<script language=\"JavaScript\" type=\"text/javascript\">var exp = new Date();var exp_time = exp.getTime()+315360000000;var by_sync = 0;var init_time = exp.getTime() + 315360000000;\nexp.setTime(exp_time);var value = 23253 + \":\" + exp_time + \":\" + init_time + \":\" + by_sync;document.cookie = \"p_3261_cm=\"+escape(value)+\";expires=\"+exp.toGMTString()+\";path=/;domain=gq.com;\"</script><div id=\"AMS_GQM_GLOBAL_HEADER\" class=\"ecom-placement\">\r\n    <a href=\"http://subscribe.gq.com//ams/amsClick?pos_id=3261&campaign_id=23253&creative_id=26668&site_id=793&top_level_section_prefix=style&full_url=/style/201412/the-2014-baller-gift-guide\" target=\"_blank\" rel=\"external\" title=\"Subscribe to GQ Magazine\">\r\n        <img src=\"https://subscribe.condenet.com/images_covers/cover_gq_80.jpg\" alt=\"Subscribe to GQ\" width=\"80\" height=\"110\" />\r\n    </a>\r\n</div>\r\n","AMS_GQM_GLOBAL_HEADERCALLOUT":"<script language=\"JavaScript\" type=\"text/javascript\">var exp = new Date();var exp_time = exp.getTime()+315360000000;var by_sync = 0;var init_time = exp.getTime() + 315360000000;\nexp.setTime(exp_time);var value = 23254 + \":\" + exp_time + \":\" + init_time + \":\" + by_sync;document.cookie = \"p_2549_cm=\"+escape(value)+\";expires=\"+exp.toGMTString()+\";path=/;domain=gq.com;\"</script><img src=\"https://subscribe.gq.com/circulation/shared/ads/GQM_HCO_148x110_StyleDel_Prem_v2b_New_Style_Guide_v1_GIFT.png\" width=\"148\" height=\"110\" border=\"0\" usemap=\"#GQM_HCO_IntandGift\" />\r\n<map name=\"GQM_HCO_IntandGift\" id=\"GQM_HCO_IntandGift\">\r\n  <area shape=\"rect\" coords=\"0,0,148,99\" href=\"http://subscribe.gq.com//ams/amsClick?pos_id=2549&campaign_id=23254&creative_id=26669&site_id=793&top_level_section_prefix=style&full_url=/style/201412/the-2014-baller-gift-guide\" target=\"_blank\" alt=\"Subscribe\" />\r\n  <area shape=\"rect\" coords=\"0,97,71,111\" href=\"http://subscribe.gq.com//ams/amsClick?pos_id=2549&campaign_id=23254&creative_id=26669&site_id=793&top_level_section_prefix=style&full_url=/style/201412/the-2014-baller-gift-guide&target_url_index=1\" target=\"_blank\" alt=\"Gift\" />\r\n  <area shape=\"rect\" coords=\"70,99,146,110\" href=\"http://subscribe.gq.com//ams/amsClick?pos_id=2549&campaign_id=23254&creative_id=26669&site_id=793&top_level_section_prefix=style&full_url=/style/201412/the-2014-baller-gift-guide&target_url_index=2\" target=\"_blank\" alt=\"Int\" />\r\n</map>\r\n","AMS_GQM_MOBILE_NAV_LINK":"<script language=\"JavaScript\" type=\"text/javascript\">var exp = new Date();var exp_time = exp.getTime()+315360000000;var by_sync = 1;var init_time = exp.getTime() + 315360000000;\nexp.setTime(exp_time);var value = 23006 + \":\" + exp_time + \":\" + init_time + \":\" + by_sync;document.cookie = \"p_3862_cm=\"+escape(value)+\";expires=\"+exp.toGMTString()+\";path=/;domain=gq.com;\"</script><a href=\"http://subscribe.gq.com//ams/amsClick?pos_id=3862&campaign_id=23006&creative_id=26420&site_id=793&top_level_section_prefix=style&full_url=/style/201412/the-2014-baller-gift-guide\" target=\"_blank\">Subscribe</a>","AMS_GQM_GLOBAL_NAVBAR_ROLLOVER":"<script language=\"JavaScript\" type=\"text/javascript\">var exp = new Date();var exp_time = exp.getTime()+315360000000;var by_sync = 0;var init_time = exp.getTime() + 315360000000;\nexp.setTime(exp_time);var value = 23252 + \":\" + exp_time + \":\" + init_time + \":\" + by_sync;document.cookie = \"p_2603_cm=\"+escape(value)+\";expires=\"+exp.toGMTString()+\";path=/;domain=gq.com;\"</script><img src=\"https://subscribe.gq.com/circulation/shared/ads/GQ_300x135_navbar.v2_ModelUpdate.jpg\" width=\"300\" height=\"135\" border=\"0\" usemap=\"#GQM_Navbar_Rollover_MessBag\" />\r\n<map name=\"GQM_Navbar_Rollover_MessBag\" id=\"GQM_Navbar_Rollover_MessBag\">\r\n  <area shape=\"rect\" coords=\"148,120,301,137\" href=\"http://subscribe.gq.com//ams/amsClick?pos_id=2603&campaign_id=23252&creative_id=26667&site_id=793&top_level_section_prefix=style&full_url=/style/201412/the-2014-baller-gift-guide&target_url_index=1\" target=\"_blank\" alt=\"International\" />\r\n  <area shape=\"rect\" coords=\"3,121,148,137\" href=\"http://subscribe.gq.com//ams/amsClick?pos_id=2603&campaign_id=23252&creative_id=26667&site_id=793&top_level_section_prefix=style&full_url=/style/201412/the-2014-baller-gift-guide&target_url_index=2\" target=\"_blank\" alt=\"Gift\" />\r\n  <area shape=\"rect\" coords=\"0,0,298,120\" href=\"http://subscribe.gq.com//ams/amsClick?pos_id=2603&campaign_id=23252&creative_id=26667&site_id=793&top_level_section_prefix=style&full_url=/style/201412/the-2014-baller-gift-guide\" target=\"_blank\" alt=\"Subscribe\" />\r\n</map>","AMS_GQM_POPUP_FLOATINGAD":"<a href=\"http://subscribe.gq.com//ams/amsClick?pos_id=2610&campaign_id=22369&creative_id=25780&site_id=793&top_level_section_prefix=style&full_url=/style/201412/the-2014-baller-gift-guide\"  target=\"_blank\" ><script language=\"JavaScript\" type=\"text/javascript\">var exp = new Date();var exp_time = exp.getTime()+315360000000;var by_sync = 0;var init_time = exp.getTime() + 315360000000;\nexp.setTime(exp_time);var value = 22369 + \":\" + exp_time + \":\" + init_time + \":\" + by_sync;document.cookie = \"p_2610_cm=\"+escape(value)+\";expires=\"+exp.toGMTString()+\";path=/;domain=gq.com;\"</script><img src=\"//subscribe.gq.com/circulation/shared/ads/GQM_floating_300x250_v2c_Sweeps.jpg\">\r\n\r\n<script type=\"text/javascript\">\r\nCN.popups.setATGArriving(false).setLayer(false).setExiting(true).init();\r\n</script></a>","AMS_GQM_GLOBAL_NAVBAR":"<script language=\"JavaScript\" type=\"text/javascript\">var exp = new Date();var exp_time = exp.getTime()+315360000000;var by_sync = 0;var init_time = exp.getTime() + 315360000000;\nexp.setTime(exp_time);var value = 23251 + \":\" + exp_time + \":\" + init_time + \":\" + by_sync;document.cookie = \"p_2602_cm=\"+escape(value)+\";expires=\"+exp.toGMTString()+\";path=/;domain=gq.com;\"</script><a href=\"http://subscribe.gq.com//ams/amsClick?pos_id=2602&campaign_id=23251&creative_id=26666&site_id=793&top_level_section_prefix=style&full_url=/style/201412/the-2014-baller-gift-guide\" target=\"_blank\">Subscribe</a>","AMS_GQM_GLOBAL_SLIDESHOW":"<a href=\"http://subscribe.gq.com//ams/amsClick?pos_id=2609&campaign_id=23598&creative_id=27014&site_id=793&top_level_section_prefix=style&full_url=/style/201412/the-2014-baller-gift-guide\"  target=\"_blank\" ><img   src=\"https://subscribe.gq.com/circulation/shared/ads/GQM_slideshow_269_v1_SubandGive.jpg\"></a>","AMS_GQM_GLOBAL_FOOTER":"<a href=\"http://subscribe.gq.com//ams/amsClick?pos_id=2606&campaign_id=23283&creative_id=26698&site_id=793&top_level_section_prefix=style&full_url=/style/201412/the-2014-baller-gift-guide\"  target=\"_blank\" ><script language=\"JavaScript\" type=\"text/javascript\">var exp = new Date();var exp_time = exp.getTime()+315360000000;var by_sync = 0;var init_time = exp.getTime() + 315360000000;\nexp.setTime(exp_time);var value = 23283 + \":\" + exp_time + \":\" + init_time + \":\" + by_sync;document.cookie = \"p_2606_cm=\"+escape(value)+\";expires=\"+exp.toGMTString()+\";path=/;domain=gq.com;\"</script><img src=\"//subscribe.gq.com/circulation/shared/ads/GQM_Footer_620x181_lineBreak_dec14_ModelUpdate.gif\"></a>"};

