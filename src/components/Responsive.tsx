import { useMediaQuery } from 'react-responsive';
import { IHOCProps } from "../types/SiteTypes";
 
const Desktop = ({ children }: IHOCProps) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}
const Tablet = ({ children }: IHOCProps) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
const Mobile = ({ children }: IHOCProps) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}

export default {
    Desktop,
    Tablet,
    Mobile
}
