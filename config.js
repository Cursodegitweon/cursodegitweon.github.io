// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'ご主人様',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'お帰りなさいませ、',
	greetingAfternoon: 'お帰りなさいませ、',
	greetingEvening: 'お帰りなさいませ、',
	greetingNight: '御休みなさい、',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'InsertYourAPIKeyHere123456', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '-34.593712',
	defaultLongitude: '-58.594159',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1', // 1
			//name: 'Github',
			//icon: 'github',
			//link: 'https://github.com/',
			name: 'Mail',
			icon: 'mail',
			link: 'https://mail.protonmail.com/',
		},
		{
			id: '2', // 2
			//name: 'Mail',
			//icon: 'mail',
			//link: 'https://mail.protonmail.com/',
			name: 'Calendar',
			icon: 'calendar',
			link: 'https://calendar.google.com/calendar/r',
		},
		{
			id: '3', // 4
			//name: 'Todoist',
			//icon: 'trello',
			//link: 'https://todoist.com',
			name: 'Khan Academy',
			icon: 'graduation-cap',
			link: 'https://es.khanacademy.org/login',
		},
		{
			id: '4', // 5
			//name: 'Calendar',
			//icon: 'calendar',
			//link: 'https://calendar.google.com/calendar/r',
			name: 'Reddit',
			icon: 'glasses',
			link: 'https://reddit.com',
		},
		{
			id: '5', // 3
			//name: 'Reddit',
			//icon: 'glasses',
			//link: 'https://reddit.com',
			name: 'Todoist',
			icon: 'trello',
			link: 'https://todoist.com',
		},
		{
			id: '6', // 6
			//name: 'Odysee',
			//icon: 'youtube',
			//link: 'https://odysee.com/',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			//icon: 'music',
			icon: 'briefcase',
			id: '1',
			links: [
				{
					//name: 'Inspirational',
					//link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
					name: 'Linkedin',
					link: 'https://www.linkedin.com',
				},
				{
					//name: 'Classic',
					//link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
					name: 'Slack',
					link: 'https://www.slack.com',
				},
				{
					//name: 'Oldies',
					//link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
					name: 'Discord',
					link: 'https://discord.com/login',
				},
				{
					//name: 'Rock',
					//link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
					name: 'Musixmatch',
					link: 'https://www.musixmatch.com/es/sign-in',
				},
			],
		},
		{
			//icon: 'coffee',
			icon: 'coffee',
			id: '2',
			links: [
				{
					//name: 'Linkedin',
					//link: 'https://www.linkedin.com',
					name: 'Telegram',
					link: 'https://web.telegram.org/k/',
				},
				{
					//name: 'Dribbble',
					//link: 'https://www.dribbble.com',
					name: 'Tandem',
					link: 'https://app.tandem.net/login',
				},
				{
					//name: 'Trello',
					//link: 'https://www.trello.com',
					name: 'Renshuu',
					link: 'https://www.renshuu.org/login',
				},
				{
					//name: 'Slack',
					//link: 'https://www.slack.com',
					name: 'Steam Store',
					link: 'https://store.steampowered.com/?l=english',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};
