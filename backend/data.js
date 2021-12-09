import bcrypt from 'bcryptjs';
const data = {
	users: [
		{
			name: 'ThangBach',
			email: 'admin@gmail.com',
			password: bcrypt.hashSync('1234', 8),
			isAdmin: true
		},
		{
			name: 'gogo',
			email: '123@gmail.com',
			password: bcrypt.hashSync('1234', 8),
			isAdmin: false
		}
	],
	products: [
		{
			name: 'Saiki',
			category: 'comedy',
			image: '/images/p1.jpg',
			price: 5,
			countInStock: 10,
			brand: 'KimDong Comic',
			rating: 0.5,
			numReviews: 10,
			description: 'story about a pyshic student'
		},
		{
			name: 'Kusso',
			category: 'comedy',
			image: '/images/p2.jpg',
			price: 5,
			countInStock: 10,
			brand: 'KimDong Comic',
			rating: 2.5,
			numReviews: 10,
			description: 'story about a pyshic student'
		},
		{
			name: 'Naruto',
			category: 'comedy',
			image: '/images/p3.jpg',
			price: 5,
			countInStock: 10,
			brand: 'KimDong Comic',
			rating: 4.5,
			numReviews: 10,
			description: 'story about a pyshic student'
		},
		{
			name: 'One Piece',
			category: 'comedy',
			image: '/images/p4.jpg',
			price: 5,
			countInStock: 10,
			brand: 'KimDong Comic',
			rating: 3.5,
			numReviews: 10,
			description: 'story about a pyshic student'
		},
		{
			name: 'Bleach',
			category: 'comedy',
			image: '/images/p1.jpg',
			price: 5,
			countInStock: 10,
			brand: 'KimDong Comic',
			rating: 3.6,
			numReviews: 10,
			description: 'story about a pyshic student'
		},
		{
			name: 'Toriko',
			category: 'comedy',
			image: '/images/p1.jpg',
			price: 5,
			countInStock: 10,
			brand: 'KimDong Comic',
			rating: 4,
			numReviews: 10,
			description: 'story about a pyshic student'
		},
		{
			name: 'HunterxHunter',
			category: 'comedy',
			image: '/images/p1.jpg',
			price: 5,
			countInStock: 10,
			brand: 'KimDong Comic',
			rating: 4,
			numReviews: 10,
			description: 'story about a pyshic student'
		},
		{
			name: 'Dragon Quest',
			category: 'comedy',
			image: '/images/p1.jpg',
			price: 5,
			countInStock: 10,
			brand: 'KimDong Comic',
			rating: 4,
			numReviews: 10,
			description: 'story about a pyshic student'
		}
	]
};

export default data;
