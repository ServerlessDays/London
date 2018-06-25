const buildHead = (slug, title, desc, previewImg) => {
	
	return `
<!DOCTYPE html>
<html lang="en">
<head> 
    <title>${title}</title>

    <meta charset="utf-8" />
    <meta property="og:title" content="${title.substr(0,150)}" />
	  <meta property="og:type" content="website" />
  	<meta property="og:description" content="${desc.substr(0,280)} ..." />
  	<meta property="og:url" content="https://london.serverlessdays.io/speaker/${slug}" />
  	<meta property="og:image" content="${previewImg}" />
  	<meta name="description" content="${desc.substr(0,280)} ..."/>

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${title.substr(0,150)}" />
    <meta name="twitter:site" content="@serverlessLDN" />
    <meta name="twitter:description" content="${desc.substr(0,280)} ..." />
    <meta name="twitter:url" content="https://london.serverlessdays.io/speaker/${slug}" />
    <meta name="twitter:image" content="${previewImg}" />

  	<meta name="viewport" content="width=device-width, initial-scale=1">
  	<link rel="stylesheet" href="https://unpkg.com/tachyons/css/tachyons.min.css">
    <link rel="shortcut icon" href="https://res.cloudinary.com/senzo/image/upload/c_scale,w_32/v1518368936/unicorn_mascot_1_vyq3zb.ico"/>
</head>
<style>
    .vh-60 { height:60vh; }
    .vh-40 { height:40vh; }
    .vh-30 { height:30vh; }
    .shadow-6 {
      box-shadow: 0px 0px 8px 4px rgba(192,192,192,.2);
    }
    .shadow-7 {
      box-shadow: 0px 0px 8px 12px rgba(32,32,32,.5);
      z-index: 10;
    }
    .bg-color-1 {
      background: rgba(200,70,0,.8);
    }
    .bg-color-2 {
      background: rgba(192,132,0,.8);
    }
    .bg-color-3 {
      background: rgba(90,172,174,.8);
    }
    .bg-color-4 {
      background: rgba(65,146,75,.8);
    }
    .bg-color-5 {
      background: rgba(15,27,7,.8);
    }
    .bg-color-6 {
      background: rgba(0,41,70,.8);
    }
    .bg-cover {
      background: url('https://res.cloudinary.com/serverlessdays/image/upload/c_scale,w_640/c_crop,h_360,w_640/v1521409086/London/adore_and_endure.jpg');
      z-index: -10;
    }
    p {
    	font-family: Consolas, monaco, monospace;
    	font-weight: 400;
    	font-size: .875em;
    	line-height: 1.5;
    	padding-top: .25rem; padding-bottom: .25rem;
    }
    @media screen and (min-width: 30em) {
    .vh-40-ns {  height: 40vh; }
    .w-65-ns { width: 64%; }
    .bg-cover-ns {
      background: url('https://res.cloudinary.com/serverlessdays/image/upload/c_scale,w_1920/c_crop,h_1080,w_1920/v1521409086/London/adore_and_endure.jpg');
      z-index: -10;
    }
    }
    @media screen and (min-width: 60em) {
    .vh-40-l {  height: 40vh; }
    .w-35-l { width: 37%; }
    }
</style>

<body>

    <div class="fixed vh-100 w-100 cover top-0 bg-cover bg-cover-ns">
    </div>

    <div class="fixed bg-black-80 w-100 top-0 shadow-7">
      <div class="fl-l mt0 mv2-l ml2-l pa0 tc tl-l v-mid">
          <a href="/">
            <img class="pt2 pb1 ph1 pa2-m ph3-l" src="https://res.cloudinary.com/serverlessdays/image/upload/v1528146521/serverless_white_new.svg" height="46" alt="ServerlessDays Logo"/>
            <p class="mh1 ml3-l f6 fw1 code near-white mv0 pt0 pb2 pb0-ns">
              6 July 2018, St John&#39;s Hoxton, London
            </p>
          </a>
      </div>
      <div class="fr-l mt0 mt4-l mr2-l ph1 pv2 pa2-ns tr v-mid near-white code f6 fw1 dn">
        <div class="dt dn db-ns">
          <div class="dt-row">
            <div class="dtc">
              <a class="pv1 ph2 near-white no-underline dim" href="/">Home</a>
            </div>
            <div class="dtc">
              <a class="pv1 ph2 near-white no-underline dim" href="/agenda">Agenda</a>
            </div>
            <div class="dtc">
              <sa class="pv1 ph2 near-white no-underline dim" href="/speakers">Speakers</a>
            </div>
            <div class="dtc">
              <a class="pv1 ph2 near-white no-underline dim" href="/location">Location</a>
            </div>
            <div class="dtc">
              <a class="pv1 ph2 near-white no-underline dim" href="/dandi">Diversity & Inclusion</a>
            </div>
          </div>
        </div>
      </div>
    </div>
`
}

module.exports = buildHead; 