export type Plugin = {
	title: string;
	image: string;
	sharp?: boolean;
	pad?: number;
	description: string;
	moreInfo: string;
	fileName?: string | undefined;
	downloadURL: string;
};
