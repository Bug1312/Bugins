export type Plugin = {
	title: string;
	image: string;
	imageType: 'fontawesome' | 'google' | 'url';
	sharp?: boolean;
	// descriptionType: 'raw' | 'modrinth' | 'github-README' | 'blockbench'
	description: string;
	moreInfo: string;
	fileName?: string | undefined;
	downloadURL: string;
};
