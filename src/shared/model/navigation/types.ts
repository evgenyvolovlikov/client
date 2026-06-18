export interface SidebarLink {
    label: string;
    route: string | string[];
    icon?: string;
    exact?: boolean;
    requiredRole?: string;
    children?: SidebarLink[];
}
