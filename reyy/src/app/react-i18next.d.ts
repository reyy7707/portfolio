import 'react-i18next'
import en from '@/shared/translation/en.json'
import ru from '@/shared/translation/en.json'
import ge from '@/shared/translation/en.json'

declare module 'react-i18next' {
    interface Resources {
        defaultLang: 'ru',
        resources: {
            ru: typeof ru,
            en: typeof en,
            ge: typeof ge,
        }
    }
}