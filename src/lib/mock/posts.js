export let posts = [
	{
		id: '1',
		isPinned: false,
		title: 'Introduction to Web Development',
		author: {
			name: 'John Doe',
			imageUrl: 'https://i.pravatar.cc/48?id=1',
			url: '/author/john-doe'
		},
		categories: [
			{
				name: 'Technology',
				url: '/category/technology'
			},
			{
				name: 'Programming',
				url: '/category/programming'
			}
		],
		description: 'Learn the basics of web development and get started with building your own websites.',
		created_at: '2023-05-01T00:00:00.000000Z'
	},
	{
		id: '2',
		isPinned: true,
		title: 'The Art of Photography',
		author: {
			name: 'Jane Smith',
			imageUrl: 'https://i.pravatar.cc/48?id=2',
			url: '/author/jane-smith'
		},
		categories: [
			{
				name: 'Photography',
				url: '/category/photography'
			},
			{
				name: 'Art',
				url: '/category/art'
			}
		],
		description: 'Discover the techniques and secrets behind capturing stunning photographs.',
		created_at: '2023-05-02T00:00:00.000000Z'
	},
	{
		id: '3',
		isPinned: false,
		title: 'Mastering JavaScript',
		author: {
			name: 'Alice Johnson',
			imageUrl: 'https://i.pravatar.cc/48?id=3',
			url: '/author/alice-johnson'
		},
		categories: [
			{
				name: 'Programming',
				url: '/category/programming'
			},
			{
				name: 'JavaScript',
				url: '/category/javascript'
			}
		],
		description: 'Take your JavaScript skills to the next level with advanced concepts and practical examples.',
		created_at: '2023-04-03T00:00:00.000000Z'
	},
	{
		id: '4',
		isPinned: false,
		title: 'Healthy Eating Tips',
		author: {
			name: 'Bob Thompson',
			imageUrl: 'https://i.pravatar.cc/48?id=4',
			url: '/author/bob-thompson'
		},
		categories: [
			{
				name: 'Health',
				url: '/category/health'
			}
		],
		description: 'Learn how to make healthy food choices and maintain a balanced diet for a better lifestyle.',
		created_at: '2023-05-04T00:00:00.000000Z'
	},
	{
		id: '5',
		isPinned: false,
		title: "Beginner's Guide to Meditation",
		author: {
			name: 'Emma Wilson',
			imageUrl: 'https://i.pravatar.cc/48?id=5',
			url: '/author/emma-wilson'
		},
		categories: [{
			name: 'Health',
			url: '/category/health'
		}],
		description: 'Start your journey into meditation and experience the benefits of mindfulness and relaxation.',
		created_at: '2023-01-05T00:00:00.000000Z'
	}
];
