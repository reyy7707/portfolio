import { Dispatch, FC, ReactNode, SetStateAction } from "react";

type theme = 'white' | 'dark';

// eslint-disable-next-line react-refresh/only-export-components
export enum PopupSize {
  EXTRA_LIGHT = 'p-1',
  LIGHT = 'p-2',
  MEDIUM = 'px-4 py-6'
}

// eslint-disable-next-line react-refresh/only-export-components
export enum PopupFor {
  SETTINGS = 'mb-[-23rem] mr-[-4rem]',
  AREA_SETTINGS = 'mt-2',
  LANGUAGES = '',
}

interface PopupProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
  open: boolean;
  theme?: theme;
  size?: PopupSize;
  popupFor?: PopupFor;
}

const Popup: FC<PopupProps> = ({
  children,
  open,
  theme = 'black',
  size = PopupSize.MEDIUM,
  popupFor = PopupFor.SETTINGS,
}) => {

  const className = `${size} ${popupFor} ${theme === 'white' ? 'bg-white border border-gray' : 'bg-[#f0f0f0] border border-gray-600'} rounded absolute right-7`;

  return (
    <>
      {open && (
        <div className={className}>
          {children}
        </div>
      )}
    </>
  );
};

export default Popup;
