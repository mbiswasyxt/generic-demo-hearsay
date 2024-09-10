export interface ImageThumbnail {
	url: string,
	width: number,
	height: number,
}

export interface Image {
	url: string,
	width: number,
	height: number,
	thumbnails?: ImageThumbnail[],
	alternateText?: string,
}

export interface ComplexImage {
	image: Image,
	details?: string,
	description?: string,
	clickthroughUrl?: string,
}

export interface EntityReference {
	entityId: string,
	name: string,
}

export enum LinkType {
	OTHER = "Other",
	URL = "URL",
	PHONE = "Phone",
	EMAIL = "Email",
}

export interface C_heroBannerCTA {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface C_navbar {
	name?: string,
	slug?: string,
	relatedServices?: EntityReference[],
}

export default interface Ce_marketingPage {
	primaryPhoto?: ComplexImage,
	slug?: string,
	name: string,
	c_featuredArticles?: EntityReference[],
	c_featuredEvents?: EntityReference[],
	c_featuredServices?: EntityReference[],
	c_headerLogo?: Image,
	c_heroBannerCTA?: C_heroBannerCTA,
	c_heroBannerDescription?: string,
	c_heroBannerTitle?: string,
	c_navbar?: C_navbar[],
	c_taxonomyStructure?: EntityReference[],
	id: string,
}
