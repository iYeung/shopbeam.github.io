var populateSocialBar=function(ob){var element='#'+ob;var shareImage=$(element).find('.share-img').val();var shareURL=$(element).find('.share-link').val();var shareTitle=$(element).find('.share-title').val();var shareFB="fb-"+$(element).find('.share-bar').val();var sharePint="pint-"+$(element).find('.share-bar').val();var shareBar="bar-"+$(element).find('.share-bar').val();if($("#fb-"+$(element).find('.share-bar').val()).html()==''){var image={type:'image',src:shareImage,href:shareURL};var ua=new gigya.socialize.UserAction();ua.setLinkBack(shareURL);ua.setTitle(shareTitle);ua.addMediaItem(image);var shareBarParams={userAction:ua,shareButtons:"facebook-like",containerID:shareFB};gigya.socialize.showShareBarUI(shareBarParams);}
if($("#pint-"+$(element).find('.share-bar').val()).html()==''){var image={type:'image',src:shareImage,href:shareURL};var ua=new gigya.socialize.UserAction();ua.setLinkBack(shareURL),ua.setTitle(shareTitle);ua.addMediaItem(image);var shareBarParams={userAction:ua,shareButtons:[{provider:'pinterest',iconImgUp:ShopNation.themeURL+'/images/pinterest.png',iconImgOver:ShopNation.themeURL+'/images/pinterest-over.png'}],containerID:sharePint,noButtonBorders:true};gigya.socialize.showShareBarUI(shareBarParams);}
if($("#bar-"+$(element).find('.share-bar').val()).html()==''){var image={type:'image',src:shareImage,href:shareURL};var ua=new gigya.socialize.UserAction();ua.setLinkBack(shareURL),ua.setTitle(shareTitle);ua.addMediaItem(image);var shareBarParams={userAction:ua,shareButtons:[{provider:'facebook',iconImgUp:ShopNation.themeURL+'/images/facebook.png',iconImgOver:ShopNation.themeURL+'/images/facebook-over.png'},{provider:'twitter',iconImgUp:ShopNation.themeURL+'/images/twitter.png',iconImgOver:ShopNation.themeURL+'/images/twitter-over.png'},{provider:'email',iconImgUp:ShopNation.themeURL+'/images/email.png',iconImgOver:ShopNation.themeURL+'/images/email-over.png'},{provider:'share',iconImgUp:ShopNation.themeURL+'/images/more.png',iconImgOver:ShopNation.themeURL+'/images/more.png'}],containerID:shareBar,operationMode:'multiSelect',showCounts:'none',noButtonBorders:true};gigya.socialize.showShareBarUI(shareBarParams);}};var slideMenu=function(){if($("#slide-menu").offset().left=='-200'){$("#slide-menu").animate({marginLeft:"0"},100);}else{$("#slide-menu").animate({marginLeft:"-200px"});}};var hoverTimer;$(document).ready(function(){$(".merchant-view").click(function(){var trackBrandName=$(this).parents('.product').find("input[name='brandName']").val().toLowerCase();var prodName=$(this).parents('.product').find("input[name='productName']").val().toLowerCase();var storeName=$(this).parents('.product').find("input[name='storeName']").val().toLowerCase();$.cookie('trackProducts',storeName+';'+prodName,{expires:7,path:'/'});$.cookie('trackBrand',trackBrandName,{expires:7,path:'/'});$.cookie('trackStore',storeName,{expires:7,path:'/'});$.cookie('trackPageType','shopping guide detail',{expires:7,path:'/'});});$("ul#shop-nav li").each(function(){if($(this).hasClass('selected')){if($(this).hasClass('depth1')){$("#navbar li#"+$(this).attr('id')).addClass('selected');}else{$("#navbar li#"+$(this).parents('.depth1').attr('id')).addClass('selected');}}});$("div.card").hover(function(){$(this).addClass('card-over');},function(){$(this).removeClass('card-over');});$('li#shopping-guides').addClass('selected');$("div.product").live('mouseenter',function(e){if($(window).width()>960){var card=$(this).find("div.product-card");var rightMargin=$(window).outerWidth()-e.pageX;if(rightMargin<450){$(card).addClass("show-left");}
hoverTimer=setTimeout(function(){var prodID=$(card).find("input[name='prodID']").val()+';'+$(card).find('.share-title').val().toLowerCase();var brandName=$(card).find("input[name='brandName']").val().toLowerCase();var prodName=$(card).find('.share-title').val().toLowerCase();var storeName=$(card).find("input[name='storeName']").val().toLowerCase();(function(){clickTracker('quickview',mds.s.channel,prodID,brandName,'shopping guide detail',prodName,storeName);})();populateSocialBar($(card).parent().attr('id'));$(card).fadeIn('fast');},500);}});$("div.product").live('mouseleave',function(){clearTimeout(hoverTimer);$("div.product-card").hide();});$(window).resize(function(){$('.product-card').removeClass('show-left');});populateSocialBar('guide-detail');$("span#refine-by").click(slideMenu);$("li.section").click(slideMenu);$(".info-sign").click(function(){$(this).parents().css({"white-space":"normal"});$(this).hide();});$("li.detail-tab").live("click",function(){var $par=$(this).parents('.prod-description');$par.find('.detail-tab').removeClass("active");$(this).addClass("active");$par.find(".ec-detail-cont").removeClass("active");if($(this).index()==1){$par.find(".ec-detail-cont").eq(0).addClass("active");}else{$par.find(".ec-detail-cont").eq(1).addClass("active");}});$(".link-read-more").live("click",function(){var $desc=$(this).parent();$desc.find("span.desc-read-more").hide();$desc.find("span.desc-more").show();$(this).hide();return false;});$().UItoTop();});