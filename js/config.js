var workers = ["https://curly-bread-1e25.delivrjs.workers.dev"] //your cloudflare workers url
var whitelist = [".*"]; //add ".*" to whitelist all domain or add hostname or just add `$` at the end of particular domain to whiltelist that single domain. for e.g. google.com$
var player = {
  customPlayerCSS: false, //boolean eg. true or false
  fuckadblock: false, //boolean eg. true or false
  playerDownload: true,
  width: '100%', //string
  height: '100%', //string
  preload: "none", //string eg. metadata or auto
  aboutlink: "/", //string
  abouttext: "Powered by delivrjs", //string
  allowFullscreen: true, //boolean eg. true or false
  autostart: false, //boolean eg. true or false
  mute: false, //boolean eg. true or false
  playbackRateControls: true, //boolean eg. true or false
  repeat: true, //boolean eg. true or false
  tracks: {
    kind: "captions", //string eg. captions, chapters, thumbnails
  },
  showAD: false,  //boolean eg. true or false
  advertising: {
    client: "vast", //string eg. dai, freewheel, googima, vast
    admessage: "The ad will end in xx seconds", //do not change
    adTag: "https://vast.yomeno.xyz/?tcid=13114", //string
    offset: ["pre", 1350, "50%", 4050, "post"] //string & number //only 5 positions. To add more contact admin.
  },
  logo: {
    file: "https://res.cloudinary.com/webspeedtest/image/fetch/f_auto/https://blogger.googleusercontent.com/img/a/AVvXsEhI8roq06VEZ2jgcRtqicGf3FrGryuWs4Fmmr-vWSfTQqpQc3EW3euv2oZ3i20kptLOEnWGd3NL3bqFLPrk5qOo5_37ZKUO7g_04M2Otc3bUj-HZ_QaXEP75O86BewcBtwfo88mrdi4CXKruqClbxpNtvq0IHR3swtBaanAOhIjq_-DGHFsFSfXZOqPpQ", //string
    link: "/", //string
    hide: false, //boolean eg. true or false
    margin: "", //number eg. 8
    position: "top-right" //string eg. top-left,top-right,bottom-left,bottom-right,control-bar
  },
  captions: {
    color: "#FFFF00", //string eg. #ffffff
    fontSize: 15, //number
    edgeStyle: "uniform", //string eg. none or uniform
    backgroundOpacity: 0 //number
  },
}
var analytics = {
  googleID: "", //Google Analytics ID https://analytics.google.com
  clarityID: "" //Microsoft Clarity ID https://clarity.microsoft.com
}
