export interface NavigationLink {
    label: string;
    route: string | string[];
    icon?: string;
    exact?: boolean;
    requiredRole?: string;
    children?: NavigationLink[];
}
