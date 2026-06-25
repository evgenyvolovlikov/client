export interface NavigationLink {
	label: string;
	route: string | string[];
	icon?: string;
	exact?: boolean;
	requiredRole?: string;
	children?: NavigationLink[];

	tag?: 'theory' | 'component' | 'example';
	codeSnippet?: string;
}

export interface NavigationSection {
	title: string;
	items: NavigationLink[];
}
