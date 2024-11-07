import { ELanguages } from '@/shared/const/constants'
import { Popup } from '@/shared/ui/pop-up'
import { PopupFor, PopupSize } from '@/shared/ui/pop-up/ui/pop-up'
import { AppText, AppTextAlign, AppTextColor, AppTextSize, AppTextWeight } from '@/shared/ui/text/'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useMediaQuery } from '@/shared/hooks/use-media.ts'
import en_flag from '@/shared/assets/en_flag.svg'
import ru_flag from '@/shared/assets/ru_flag.svg'
import ge_flag from '@/shared/assets/ge_flag.svg'
import arrow_down from '@/shared/assets/down-arrow.svg'

export interface ILanguage {
    lng: string,
    img: string,
    title: string
}

const LANGUAGES: ILanguage[] = [
    {
        lng: 'en',
        img: en_flag,
        title: 'EN'
    },
    {
        lng: 'ru',
        img: ru_flag,
        title: 'RU'
    },
    {
        lng: 'ge',
        img: ge_flag,
        title: 'GE'
    }
]

const Languages = () => {
    const { i18n } = useTranslation()
    const [popupOpen, setPopupOpen] = useState<boolean>(false)
    const isMobile = useMediaQuery('(max-width: 641px)')

    const currentLang = sessionStorage.getItem('currentLang') || 'ru'

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
        sessionStorage.setItem('currentLang', lng)
        setPopupOpen(false)
    }

    const renderCurrentLang = () => {
        if (currentLang === ELanguages.RU) {
            return 'RU'
        } else if (currentLang === ELanguages.EN) {
            return 'EN'
        }
        else if (currentLang === ELanguages.GE) {
            return 'GE'
        }
    }
    const renderCurrentFlag = () => {
        if (currentLang === ELanguages.RU) {
            return ru_flag
        } else if (currentLang === ELanguages.EN) {
            return en_flag
        } else if (currentLang === ELanguages.GE) {
            return ge_flag
        }
    }

    const handleOpenPopup = () => {
        setPopupOpen(!popupOpen)
    }

    return (
        <div className='font-Nunito'>
            <div className='cursor-pointer' onClick={handleOpenPopup}>
                <AppText align={AppTextAlign.LEFT} color={AppTextColor.DARK} size={AppTextSize.MEDIUM} weight={AppTextWeight.NORMAL}>
                    <span className='flex gap-x-1 items-center'>
                        {isMobile && <img src={renderCurrentFlag()} alt="currentFlag" />}
                        {renderCurrentLang()}
                        <img src={arrow_down} alt="arrow" className={`${popupOpen ? 'rotate-180' : ''}`} />
                    </span>
                </AppText>
            </div>
            <Popup open={popupOpen} setOpen={setPopupOpen} popupFor={PopupFor.LANGUAGES} size={PopupSize.LIGHT}>
                <div className='px-2 flex flex-col gap-2'>
                    {LANGUAGES.map(lang => (
                        <div key={lang.title} className='cursor-pointer flex items-center gap-x-1 border-b border-b-gray' onClick={() => changeLanguage(lang.lng)}>
                            <div className='w-6 h-6'>
                                <img className='w-full h-full' src={lang.img} alt="flag" />
                            </div>
                            <span className='text-black'>{lang.title}</span>
                        </div>
                    ))}
                </div>
            </Popup>
        </div>
    )
}

export default Languages