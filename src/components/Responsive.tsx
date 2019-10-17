import { useMediaQuery } from "react-responsive";
import { IHOCProps } from "../types/SiteTypes";

export const Desktop = ({ children }: IHOCProps) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
};
export const Tablet = ({ children }: IHOCProps) => {
    const isTablet = useMediaQuery({ maxWidth: 991, minWidth: 768 });
    return isTablet ? children : null;
};
export const TabletandMobile = ({ children }: IHOCProps) => {
    const isTablet = useMediaQuery({ maxWidth: 991 });
    return isTablet ? children : null;
};
export const Mobile = ({ children }: IHOCProps) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
};
