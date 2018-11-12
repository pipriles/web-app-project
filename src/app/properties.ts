export class Property {
	title: string;
	description: string;
	location: any;
	address: any;
	contact: any;
	type: string;
	available: boolean;
	price: number | string;
	images: string[];
};

export const PROPERTIES: Property[] = [
	{
		"title": "Qta Casablanca",
		"description": "Hermosa casa junto al rio",
		"location": {
			"lat": 9.921991, 
			"lng": -67.345691
		},
		"address": {
			"city": "San Juan de los Morros",
			"state": "Guarico",
			"postalCode": 2301,
			"streetAddress": "Urb. Antonio Miguel Martinez, Calle Ambrosio Plaza"
		},
		"contact": {
			"email": "example@gmail.com",
			"phone": "+58 246 431 73 27"
		},
		"type": "rent",
		"available": false,
		"price": 99999.99,
		"images": [ '/assets/moderne.jpg' ]
	}
];
