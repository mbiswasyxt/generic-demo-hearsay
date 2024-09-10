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

export interface C_footer {
	name?: string,
	slug?: string,
	relatedServices?: EntityReference[],
}

export enum LinkType {
	OTHER = "Other",
	URL = "URL",
	PHONE = "Phone",
	EMAIL = "Email",
}

export interface CTA {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface C_heroBanners {
	name?: string,
	description?: string,
	cTA?: CTA,
	backgroundImage?: Image,
}

export interface C_primaryNav {
	name?: string,
	slug?: string,
	relatedServices?: EntityReference[],
}

export interface C_secondaryNav {
	name?: string,
	slug?: string,
	relatedServices?: EntityReference[],
}

export interface C_topLeftNav {
	name?: string,
	slug?: string,
	relatedServices?: EntityReference[],
}

export interface C_topRightNav {
	name?: string,
	slug?: string,
	relatedServices?: EntityReference[],
}

export default interface Ce_site {
	primaryPhoto?: ComplexImage,
	slug?: string,
	name: string,
	c_featuredArticles?: EntityReference[],
	c_featuredEvents?: EntityReference[],
	c_featuredServices?: EntityReference[],
	c_footer?: C_footer[],
	c_headerLogo?: Image,
	c_heroBanners?: C_heroBanners[],
	c_primaryNav?: C_primaryNav[],
	c_secondaryNav?: C_secondaryNav[],
	c_taxonomyStructure?: EntityReference[],
	c_topLeftNav?: C_topLeftNav[],
	c_topRightNav?: C_topRightNav[],
	id: string,
}
