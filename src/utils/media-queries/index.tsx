import { PropsWithChildren } from 'react';
import { useMediaQuery,  } from 'react-responsive';

export const Desktop = ({children}: PropsWithChildren): JSX.Element =>  {
	const isDesktop = useDesktopMediaQuery();
	return <>{isDesktop && children}</>;
};

export const Tablet = ({ children } : PropsWithChildren) => {
	const isTablet = useTabletMediaQuery();
	return <>{isTablet && children}</>;
};

export const Mobile = ({ children } : PropsWithChildren) => {
	const isMobile = useMobileMediaQuery();
	return <>{isMobile && children}</>;
};

export const TabletOrAbove = ({ children } : PropsWithChildren) => {
	const isTablet = useTabletAndAboveMediaQuery();
	return <>{isTablet && children}</>;
};

export const useMobileMediaQuery = () => useMediaQuery({ maxWidth: 768 });

export const useTabletMediaQuery = () => useMediaQuery({ minWidth: 768, maxWidth: 1440 });

export const useDesktopMediaQuery = () => useMediaQuery({ minWidth: 1440 });

export const useTabletAndAboveMediaQuery = () => useMediaQuery({ minWidth: 768 });
