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

export interface Fins_primaryCTA {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface Fins_secondaryCTA {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

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

export default interface Fins_financialProduct {
	landingPageUrl?: string,
	slug?: string,
	description?: string,
	name: string,
	c_parentService?: EntityReference[],
	fins_primaryCTA?: Fins_primaryCTA,
	fins_productCategory?: string[],
	fins_relatedFaqs?: EntityReference[],
	fins_relatedLocations?: EntityReference[],
	fins_relatedProfessionals?: EntityReference[],
	fins_secondaryCTA?: Fins_secondaryCTA,
	c_serviceDescription?: string,
	c_serviceLongDescription?: string,
	fins_servicesImage?: Image,
	id: string,
}
