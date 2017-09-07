import I18n from 'react-native-i18n'
import en from './locales/en'
import it from './locales/it'

const configureI18n = (I18nInstance) => {
    I18nInstance.fallbacks = true

    I18nInstance.translations = {
        en,
        it,
    }
}

export default configureI18n(I18n)
