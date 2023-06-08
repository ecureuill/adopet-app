import { PropsWithChildren } from 'react';
import { useMediaQuery,  } from 'react-responsive';

export const Desktop = ({children}: PropsWithChildren): JSX.Element =>  {
	const isDesktop = useDesktopMediaQuery();
	return <>{isDesktop && children}</>;
};

export const DesktopOrAbove = ({children}: PropsWithChildren): JSX.Element =>  {
	const isDesktop = useDesktopAndAboveMediaQuery();
	return <>{isDesktop && children}</>;
};


export const BigDesktop = ({children}: PropsWithChildren): JSX.Element =>  {
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

export const SmallMobile = ({ children } : PropsWithChildren) => {
	const isMobile = useMobileSmallMediaQuery();
	return <>{isMobile && children}</>;
};

export const TabletOrAbove = ({ children } : PropsWithChildren) => {
	const isTablet = useTabletAndAboveMediaQuery();
	return <>{isTablet && children}</>;
};

export const useMobileSmallMediaQuery = () => useMediaQuery({ maxHeight: 794 });

export const useMobileMediaQuery = () => useMediaQuery({ maxWidth: 480 });

export const useTabletMediaQuery = () => useMediaQuery({ minWidth: 481, maxWidth: 768 });

export const useLaptopMediaQuery = () => useMediaQuery({ minWidth: 769, maxWidth: 1024 });

export const useDesktopMediaQuery = () => useMediaQuery({ minWidth: 1025, maxWidth: 1200 });

export const useDesktopBigMediaQuery = () => useMediaQuery({ minWidth: 1201});

export const useTabletAndAboveMediaQuery = () => !useMobileMediaQuery();

export const useDesktopAndAboveMediaQuery = () => useMediaQuery({ maxWidth: 1200 });
