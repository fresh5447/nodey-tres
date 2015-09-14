var config = {
	allEventsurl: process.env.EB_BASE + process.env.MY_OWNED_EVENTS + process.env.TOKEN,
	getEventAttendeesUrl: process.env.EB_BASE + getAttendees
};

module.exports = config;