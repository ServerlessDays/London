const socialDefaults = require ('./socialDefaults.js')
const buildHead = require('./buildHead.js')
const buildFoot = require('./buildFoot.js')
const buildSponsor = require('./sponsorHtml.js')

const showdown  = require('showdown')
const converter = new showdown.Converter()


const buildSpeaker = (details) => {


	const { imgSrc, previewImg, imgAlt, speakerName, speakerDesc, speakerOrg, speakerSocial } = details.speakerDetails
	const { talkTitle, talkDesc } = details.talkDetails

	const imgSnip = (imgSrc) ? `<img class="w5 ba br4 b--transparent" src='${imgSrc}' alt='${speakerName} image'/>` : "<img class='fl w5 h5 ba br4 b--transparent' src='https://res.cloudinary.com/serverlessdays/image/upload/c_scale,w_480/v1521408642/unicorn_mascot.png' alt='Jeff'/>"
	
	const socailImg = (!previewImg) ? imgSrc : previewImg

	let socialLinks = ''

	for (socialService in speakerSocial) {
    	socialLinks += `${socialDefaults(speakerName, socialService, speakerSocial[socialService])}`
	}

	const htmlHead = buildHead(details.slug, speakerName, speakerDesc, socailImg)
	const htmlFoot = buildFoot()
	const htmlSponsor = buildSponsor()


	const html = `
		${htmlHead}
		<div class="w-100 pt5">
			<article class="mw8 center bg-near-white pa3 mt4 mt5-ns">
				<div class="pa2 pl3-ns pb2 pt3-ns">
					<h3 class="code tl f3 f2-ns b pl2 pl4-ns mt0 v-top mv0">${speakerName}</h3>
					<p class="tl code mb0 mt1 pa0 f6 f5-ns pl2 pl4-ns">${speakerOrg}</p>
				</div>

				<div class="dt-ns">
					<div class="dt-row-ns">
						<div class="dtc-ns w-100 w-40-ns pa2 pa3-ns">
							<div class="pb0 pb3-ns mt0 mt2-ns ph2 ph4-ns">
								${imgSnip}
							</div>
						</div>

						<div class="dtc-ns v-top w-100 w-60-ns">
							<div class="dt">
								<div class="dt-row">
									<div class="dtc w-100">
										<div class="pv1 pr3-ns">
											${converter.makeHtml(speakerDesc)}
										</div>
									</div>
								</div>
								<div class="dt-row">
									<div class="dtc">
										<h3 class="code tl f4 b mt0 v-top mv0">Talk: ${talkTitle}</h3>
									</div>
								</div>
								<div class="dt-row">
									<div class="dtc">
										<div class="pv1 pr3-ns">
											${converter.makeHtml(talkDesc)}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="pa2 pl3-ns">
					${socialLinks}
				</div>
			</article>
		</div>
		<div class="w-100 pb5 mw8-ns pv3 tc center">
			<span class="f5 f3-ns white code b pv2">Sponsored By</span>
			${htmlSponsor}
		</div>
		
		${htmlFoot}
	`

	return html
}

module.exports = buildSpeaker 
