import { ReactNode, FC, memo } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export enum AppTextSize {
  EXTRA_LARGE = 'text-4xl', //40px
  SEMI_LARGE = 'text-32', //32px
  LARGE = 'text-2xl', //24px
  MEDIUM = 'text-base', //16px
  LIGHT = 'text-lg',
  EXTRA_LIGHT = 'text-sm',
  SMALL = 'text-xs', //1px
}

// eslint-disable-next-line react-refresh/only-export-components
export enum AppTextColor {
  SUCCESS = 'text-success',
  DANGER = 'text-danger',
  LIGHT_SKY = 'text-lightSkyBlue',
  CERULEAN = 'text-ceruleanBlue',
  COBALT = 'text-cobaltBlue',
  ROYAL = 'text-royalBlue',
  DARK = 'text-dark',
  PERIWINKLE = 'text-periwinkle',
  ELECTRICINDIGO = 'text-electricIndigo',
  ULTRAMARINE = 'text-ultramarineBlue',
  SAPPHIRE = 'text-sapphireBlue',
  SILVER = 'text-silverGray',
  GRAY = 'text-gray',
  MEIDUM_GRAY = 'text-mediumGray',
  YELLOW = 'text-yellow-500',
  WHITE = 'text-white',
  ERROR = "ERROR"
}

// eslint-disable-next-line react-refresh/only-export-components
export enum AppTextWeight {
  SEMIBOLD = 'font-semibold', // font-weight: 600
  MEDIUM = 'font-medium', // font-weight: 500
  NORMAL = 'font-normal', //font-weight: 400
  LIGHT = 'w-[20.777rem]',
  EXTRALIGHT = 'font-extralight',
}

// eslint-disable-next-line react-refresh/only-export-components
export enum AppTextAlign {
  RIGHT = 'text-right',
  LEFT = 'text-left',
  CENTER = 'text-center',
}

interface AppTextProps {
  children: ReactNode;
  size: AppTextSize;
  color: AppTextColor;
  weight: AppTextWeight;
  align: AppTextAlign;
}

const AppText: FC<AppTextProps> = memo((props) => {
  const { children, align, color, size, weight } = props;

  const className = `${align} ${color} ${size} ${weight}`;

  return <p className={className}>{children}</p>;
});

export default AppText;
