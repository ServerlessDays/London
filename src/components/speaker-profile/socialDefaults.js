
const socialDefaults = (speakerName, socialService, socialLink) => {

	if (speakerName && socialService && socialLink) {
		switch(socialService) {
	    case 'speakerTwitter':
	        return `<a class="no-underline ph1 code" title='${speakerName} on Twitter' href="${socialLink}" target="_blank"><img class="v-mid" src="https://res.cloudinary.com/serverlessdays/image/upload/v1529880252/SM_Icons/twitter.svg" height="45" alt="Twitter Icon"></a>`
	        break;
	    case 'speakerMedium':
	    	return `<a class="no-underline ph1 code" title="${speakerName} on Medium" href="${socialLink}" target="_blank"><img class="v-mid" src="https://res.cloudinary.com/serverlessdays/image/upload/v1529880151/SM_Icons/medium.svg" height="30" alt="Medium Icon"></a>`
	        break;
	    case 'speakerLinkedIn':
	    	return `<a class="no-underline ph1 code" title="${speakerName} on LinkedIn" href="${socialLink}" target="_blank"><img class="v-mid" src="https://res.cloudinary.com/serverlessdays/image/upload/v1529879971/SM_Icons/linkedin.svg" height="32" alt="LinkedIn Icon"></a>`
	        break;
	    case 'speakerInstagram':
	    	return `<a class="no-underline ph1 code" title="${speakerName} on Instagram" href="${socialLink}" target="_blank"><img class="v-mid" src="https://res.cloudinary.com/serverlessdays/image/upload/v1529880624/SM_Icons/instagram.svg" height="40" alt="Instagram Icon"></a>`
	        break;
	    case 'speakerBlog':
	    	return `<a class="no-underline ph1 code" href="${socialLink}" target="_blank">Blog</a>`
	    	break;
	    case 'speakerWeb':
	    	return `<a class="no-underline ph3 f6 code" href="${socialLink}" target="_blank">${socialLink}</a>`
	    	break;
	    default:
	        return ''
		}
	} else {
		return ''
	}

}

module.exports = socialDefaults;