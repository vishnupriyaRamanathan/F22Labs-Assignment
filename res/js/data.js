function getById(id, items) {
    for(let item of items) {
        if(item.id == id)
            return item
    }
}



var users = [
	{
		id: 52,
		name: 'Ned'
    },
    {
        id: 31,
        name: 'Jon'
    },
	{
		id: 30,
		name: 'Cersei'
	},
	{
		id: 34,
		name: 'Jaime'
	}
];

var people = [
  {
    id: 1,
    name: 'Lyanna',
    image: "forest.jpg"
  },
  {
    id: 2,
    name: 'Catelyn',
    image: "flowers_sunset.jpg"
  },
  {
    id: 6,
    name: 'Tyrion',
    image: "child-children-girl-happy.jpg"
  },
  {
    id: 3,
    name: 'Emilia',
    image: "bridge.jpg"
  }
];

var categories = [
	{
		name: "Nature",
		featured: 7,
		items: [
			{
				id: 2,
				title: "Forest",
				img: "forest.jpg",
				author: 52
			},
			{
				id: 7,
				title: "Radiant Sunset",
				img: "flowers_sunset.jpg",
				author: 31
			},
			{
				id: 6,
				title: "Bridged Paths",
				img: "bench-sea-landscape-462024.jpeg",
				author: 52
			},
			{
				id: 8,
				title: "Sierra",
				img: "macos_sierra_2-wallpaper-5120x2880.jpg",
				author: 30
			}
		],
		price: "$5",
		purchasedBy: [15, 22, 23, 44]
	},
	{
		name: "World",
		featured: 1,
		items: [
			{
				id: 1,
				title: "Skyscrapper",
				img: "city_skyline.jpeg",
				author: 52
			},
			{
				id: 3,
				title: "Bridge",
				img: "bridge.jpg",
				author: 31
			},
			{
				id: 4,
				title: "Shoes",
				img: "shoes.jpg",
				author: 31
			},
			{
				id: 5,
				title: "France Cyclists",
				img: "tour_de_france.jpg",
				author: 31
			},
			{
				id: 6,
				title: "Panther",
				img: "17814645_1177110569084946_6525475841030216223_o.jpg",
				author: 52
			},
			{
				id: 8,
				title: "Pisa",
				img: "leaning_tower_of_pisa.jpg",
				author: 34
			}
		],
		price: "$5",
		purchasedBy: [15, 22, 23, 44]
    },
    {
        name: "People",
        featured: 12,
        items: [
            {
                id: 9,
                title: "Curious Child",
                img: "child-children-girl-happy.jpg",
                author: 52
            },
            {
                id: 10,
                title: "Cyclist",
                img: "pexels-photo-310983.jpeg",
                author: 52
            },
            {
                id: 11,
                title: "Smile 1",
                img: "pexels-photo-324658.jpeg",
                author: 52
            },
            {
                id: 12,
                title: "Smile 2",
                img: "pexels-photo-539727.jpeg",
                author: 30
            },
            {
                id: 13,
                title: "Gumbling Gumbals",
                img: "pexels-photo-697243.jpeg",
                author: 52
            },
            {
                id: 14,
                title: "Enna per vekka",
                img: "pexels-photo-705821.jpeg",
                author: 31
            }
        ],
        price: "$8",
        purchasedBy: [1, 2, 3, 4]
    }
];
