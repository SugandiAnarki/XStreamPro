function load(e,a,t,o,r){switch(isListed(null==document.location.ancestorOrigins[0]?window.location.hostname:document.location.ancestorOrigins[0],whitelist)){case!1:$("#loading").remove(),$("body").css("background-color","white"),$("body").html("<center><h1 style='color:black;'>X-Frame Protected</h1></center>");break;case!0:customPlayerCSS(),setupPlayer(e,a,t,o,r)}}function getQuery(e){var a=new RegExp(e+"\\=([^\\?&]+)","i");if(!a.test(window.location.href))return"";var t=a.exec(window.location.href);return decodeURIComponent(t[1])}function isListed(e,a){var t=!1;return"string"==typeof e?a.forEach((a=>{null!=e.match(a)&&(t=!0)})):t=!1,t}function lanalytics(){var e=void 0!==analytics.googleID||null!==analytics.googleID||""!==analytics.googleID,a=void 0!==analytics.clarityID||null!==analytics.clarityID||""!==analytics.clarityID;!0===e&&($("head").append('<script type="text/javascript" src="https://www.googletagmanager.com/gtag/js?id='+analytics.googleID+'"><\/script>'),$("head").append("<script>window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '"+analytics.googleID+"');<\/script>")),!0===a&&$("body").append("<script>(function(c,l,a,r,i,t,y){ c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)}; t=l.createElement(r);t.async=1;t.src='https://www.clarity.ms/tag/'+i; y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y); })(window, document, 'clarity', 'script', '"+analytics.clarityID+"');<\/script>")}function customPlayerCSS(){!0===player.customPlayerCSS&&$("<link>",{rel:"stylesheet",type:"text/css",href:"https://delivrjs.github.io/delivrjs/css/custom-icons.min.css"}).appendTo("head")}function setupPlayer(e,a,t,o,r){$("#loading").remove(),jwplayer("xstream").setup({sources:e,image:a,title:getQuery("title"),width:player.width,height:player.height,aspectratio:null,preload:player.preload,aboutlink:player.aboutlink,abouttext:player.abouttext,allowFullscreen:player.allowFullscreen,autostart:player.autostart,mute:player.mute,repeat:player.repeat,advertising:{client:player.advertising.client,admessage:player.advertising.admessage,schedule:{adbreak1:{offset:player.advertising.offset[0],tag:o},adbreak2:{offset:player.advertising.offset[1],tag:o},adbreak3:{offset:player.advertising.offset[2],tag:o},adbreak4:{offset:player.advertising.offset[3],tag:o},adbreak5:{offset:player.advertising.offset[4],tag:o}}},logo:{file:player.logo.file,link:player.logo.link,hide:player.logo.hide,margin:player.logo.margin,position:player.logo.position},tracks:[{kind:player.tracks.kind,file:getQuery("sub"),label:getQuery("sub_label")},{kind:"thumbnails",file:r}],captions:{color:player.captions.color,fontSize:player.captions.fontSize,edgeStyle:player.captions.edgeStyle,backgroundOpacity:player.captions.backgroundOpacity},sharing:{},cast:{},playbackRateControls:player.playbackRateControls}),1==player.playerDownload&&!1!==t&&jwplayer("xstream").addButton("https://delivrjs.github.io/delivrjs/assets/custom-icons/download.svg","Download Video",(function(){window.open(t,"_self").blur()}),"Download Video"),jwplayer("xstream").addButton("https://delivrjs.github.io/delivrjs/assets/custom-icons/forward.png","Forward 10 Seconds",(function(){var e=(jwplayer().getPosition()+10).toFixed(1);console.log("seeking to "+e),jwplayer().seek(e)}),"Forward 10 seconds"),jwplayer("xstream").on("adBlock",(function(){1==player.fuckadblock&&1==player.showAD&&($("#loading").remove(),$("#xstream").remove(),jwplayer("err").setup({file:"https://delivrjs.github.io/delivrjs/assets/video/adblock.mp4",type:"video/mp4",image:"https://delivrjs.github.io/delivrjs/assets/img/adblock.jpeg",width:player.width,height:player.height,preload:player.preload,controls:!1,autostart:!0,repeat:!0,logo:{file:player.logo.file,link:player.logo.link,hide:player.logo.hide,margin:player.logo.margin,position:player.logo.position}}))}))}function err(){$("#loading").remove(),$("#xstream").remove(),jwplayer("err").setup({file:"https://delivrjs.github.io/delivrjs/assets/video/404.mp4",type:"video/mp4",width:player.width,height:player.height,preload:player.preload,controls:!1,autostart:!0,repeat:!0,logo:{file:player.logo.file,link:player.logo.link,hide:player.logo.hide,margin:player.logo.margin,position:player.logo.position}})}(async()=>{const e=(e=>{const a=a=>{return(t=e,t.split("").map((e=>e.charCodeAt(0)))).reduce(((e,a)=>e^a),a);var t};return e=>e.match(/.{1,2}/g).map((e=>parseInt(e,16))).map(a).map((e=>String.fromCharCode(e))).join("")})(window.location.hostname);let a=await fetch("https://connected.pages.dev/regEx.json");a=await a.json();var t=e(getQuery("id"));if(t){for(var o,r="",l=0;l<a.length;l++)!0===new RegExp(a[l].prefix,"gm").test(t)&&(o=a[l].host,r=t.replace(a[l].prefix,""));o&&r?xstreampro.get(o,r).then((function(e){if(e)if(1==e.status){"googlephoto"===e.host&&$("head").append('<meta name="referrer" content="never"/><meta name="referrer" content="no-referrer"/>');var a=e.sources,t=""==getQuery("thumbnail")?e.image:getQuery("thumbnail"),o=1==player.showAD?player.advertising.adTag:null,r=""!=e.vtt?e.vtt:null,l="";"doodstream"===e.host?null!==(l=null!==e.download&&e.download)&&(localStorage.setItem("download",l),l=domain=window.location.protocol+"//"+window.location.hostname+"/download.html"):l=null!==e.download&&e.download,load(a,t,l,o,r)}else err();else err()})):err()}else err()})();