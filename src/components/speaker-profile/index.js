
const buildSpeaker = (details) => {

	const { imgSrc, imgAlt, speakerName, speakerDesc, speakerTwitter, speakerMedium, speakerBlog } = details.speakerDetails
	const { talkTitle, talkDesc } = details.talkDetails

	const imgSnip = (imgSrc) ? `<img class="w5 ba br4 b--transparent" src='${imgSrc}' alt='${imgAlt}'/>` : "<img class='fl w5 h5 ba br4 b--transparent' src='https://res.cloudinary.com/serverlessdays/image/upload/c_scale,w_480/v1521408642/unicorn_mascot.png' alt='Jeff'/>"
	const twitterSnip =  (speakerTwitter) ? `<a class="ph3 no-underline v-mid" title='${speakerName} on Twitter' href="${speakerTwitter}" target="_blank"><img src="https://res.cloudinary.com/senzo/image/upload/c_scale,w_24/v1496932336/twitter_o9f6np.svg" height="24" alt="Twitter Icon"></a>` : ''
	const mediumSnip = (speakerMedium) ? `<a class="ph3 no-underline v-mid" title="${speakerName} on Medium" href="${speakerMedium}" target="_blank"><img src="https://res.cloudinary.com/senzo/image/upload/c_scale,w_24/v1496933265/medium_lfjkd4.svg" height="24" alt="Medium Icon"></a>` : ''
	const blogSnip = (speakerBlog) ? `<a class="no-underline navy f5 ph3 pv0 mv0 v-mid" href="${speakerBlog}" target="_blank">${speakerBlog}</a>` : ''

	const html = `<article class="mw7 center ">
		<div class="dt">
			<div class="dt-row-ns">
				<div class="dtc">
				${imgSnip}
				</div>
				<div class="dtc">
					<div class="dt pl4">
						<div class="dt-row">
							<div class="dtc">
								<h3 class="code tl f2 b mt0 v-top mv0">${speakerName}</h3>
							</div>
						</div>
						<div class="dt-row">
							<div class="dtc">
								<p class="lh-copy code tl f6 fw4 pt3 mv0 v-top dark-gray">${speakerDesc}</p>
							</div>
						</div>
						<div class="dt-row">
							<div class="dtc">
								<h3 class="code tl f2 b mt0 v-top mv0">${talkTitle}</h3>
							</div>
						</div>
						<div class="dt-row">
							<div class="dtc">
								<p class="lh-copy code tl f6 fw4 pt3 mv0 v-top dark-gray">${talkDesc}</p>
							</div>
						</div>
					</div>
				</div>
			</div
		</div>
		<div class="pt3 avenir">
			${twitterSnip}
			${mediumSnip}
			${blogSnip}
		</div>
	</article>`

	return html
}

module.exports = buildSpeaker 