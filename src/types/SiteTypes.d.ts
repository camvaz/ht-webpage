export interface INavBarProps {
    actualSection: string;
    transparent: boolean;
    history: any;
}

export interface IHOCProps {
    children: JSX.Element;
}

export interface IEntradaBlog {
    id: number;
    title: string;
    body: string;
    foto?: string;
}
