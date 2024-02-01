export interface titleType {
	country: string;
	wine: string;
}

export interface getWineListType {
	breadcrumbs: { name: string; slug: string }[];
	date_modified: string;
	date_published: string;
	items: WineType[];
	meta: { title: string; description: string; keywords: string };
	pagination: { total_size: number; size: number; total_page: number; page: number };
}

interface Country {
	slug: string;
	name: string;
	alpha_2: string;
	alpha_3: string;
}

interface Image {
	thumb: string;
}

interface Price {
	value: number | null;
	currency: string | null;
	url: string | null;
}

interface PriceStatistic {
	min: any;
	max: any;
	avg: any;
	gap_percent: number | null;
}
export interface WineType {
	country: Country;
	description: string;
	estimated_prices: any[];
	image: Image;
	name: string;
	price: Price;
	price_statistic: PriceStatistic;
	score: number;
	slug: string;
	style: any;
	technical_sheets: any[];
	vintage: string;
	volume: number;
	winery: {
		name: string;
		slug: string;
	};
}
