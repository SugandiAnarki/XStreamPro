# XStreamPro + Cloudflare Workers

Play doodStream, streamTape, streamLare, Google Photo, ZPlayer, XHamster, Hanime videos using JWPlayer and XStreamPro REST API. 

# Demo:

1. XStreamPro Player Demo: [https://xstreampro.pages.dev](https://xstreampro.pages.dev)
2. API Endpoint Demo: [https://api.delivrjs.workers.dev/api/doodstream/p1r85dfb6zgz](https://api.delivrjs.workers.dev/api/doodstream/p1r85dfb6zgz)

# Supported Hosts

XStreamPro Player supports following video hosts:

1. Google Photo
2. Doodstream
3. Streamtape
4. Streamlare
5. ZPlayer
6. Xhamster
7. Hanime

We'll adding more to this list.

# Features

<ul>
  <li>Ligtning Fast API</li>
  <li>JWPlayer Support</li>
  <li>One Custom Skin</li>
  <li>Fully Customizable Player</li>
  <li>Google Analytics &amp; Microsoft Clarity Integrated</li>
  <li>Completely Written in HTML, CSS, JAVASCRIPT</li>
  <li>CDN Enabled</li>
  <li>Video, Popads, Popunder Ads Supported</li>
  <li>FuckAdBlock</li>
  <li>Simple yet Powerful Admin Panel</li>
  <li>Encryption</li>
  <li>Iframe Restriction</li>
  <li>Download Option</li>
  <li>Clean &amp; Secure Source Code</li>
</ul>

# Usage:

1. Create cloudflare account
2. Create a new worker
3. Click Quick Edit & paste `workers.js` file available in this respository
4. Go to variables -> environment
5. Add following variable there:

   Variable Name: `ACCESS_CONTROL_ALLOW_ORIGIN`
   Variable Value: `www.example.com$,www.google.com$` or `.*`
   
6. Add all the domain, seperated by comma (,) with `$` at the end, which you wish to whitelist or just add `.*` to whitelist all domains.
7. Copy workers url and open `/js/config.js` and put your workers url without slash at the end. For e.g.

   `var workers = ["https://sample.myworkers.workers.dev", "https://sample2.myworkers.workers.dev", "https://sample3.myworkers.workers.dev"]`
   
8. You can add as many as workers you want to. It will randomly pick a worker.
9. You can further customize your player from `/js/config.js`
10. Open `adminCode` and add any random key. You will have to enter this key everytime you generate link from XStreamPro Player
11. That's it upload your script and start using.

# API Endpoints:

1. `GET https://api.yourworkers.workers.dev/api/host/id`
2. Note `api.yourworkers.workers.dev` should be replaced by your `workers url`.

In above request `host` can only be replaced by `doodstream, streamtape, streamlare, googlephoto, zplayer, hanime, xhamster` and `id` is video ID of the external host where video rests.

3. Directly access to API Endpoint, will output following response:

`{
  "status" : false,
  "msg" : "missing origin"
 }`
 
 # Important Note:
 
 It is important that you make request from `client/user side` and not `server side`. Since streaming & downloading links are IP protected, making `server side request` might not generate `client/user side` playable links, which will result in streaming & downloading error.

# Limitatations

1. There's no limitations since nothing is dependent on our server. Everything is handled by `workers.js` file.
2. You can setup as many workers as you want since it is provided as a free service by cloudflare.
3. Only limitations imposed by cloudflare workers such as `100,000 requests per day` and `10ms CPU time per request` will be applicable.

# Workers Non-Onfuscated Script:

This `workers.js` file in this respository is obfuscated to protect it from getting debugged and external hosts blocking it. However if you want the non-obfuscated script, we'll charge you following:

1. $10 per host (if host is purchased individually)
2. $7 per host (if two or more than two host are purchased together)
3. $50 for all hosts (if all hosts are purchased together)

You'll get all updates for lifetime as soon as we push it. Contact: <a href="dailydeveloper@pm.me">dailydeveloper@pm.me</a>

# Donate:

BTC: 3JQ3PFTRbhEGa58fHNNgpVqBpZBZPjKSHZ
<br>
USDT: TBUenWYHtvb7dByBqnnyywEBeeQ8vL2BVe

Help us by donating! Happy Streaming!
