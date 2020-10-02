import React, {useEffect} from 'react'
import {PersistGate} from 'redux-persist/integration/react'
import {IntlProvider} from 'react-intl'
import {connect, Provider} from 'react-redux'
import {IAppStates} from './redux/Reducers'
import {persistor, store} from './redux/store/store'
import {flattenMessages} from './utils/flattenMessages'
import message from './config/Locales'
import Navigation from './navigation'
import {stat} from 'react-native-fs'
// import EStyleSheet from 'react-native-extended-stylesheet'
import darkTheme from './themes/darkTheme'
import lightTheme from './themes/lightTheme'

import 'intl'
import {Platform} from 'react-native'
import 'intl/locale-data/jsonp/en'
import EStyleSheet from 'react-native-extended-stylesheet'

if (Platform.OS === 'android') {
    // See https://github.com/expo/expo/issues/6536 for this issue.
    if (typeof (Intl as any).__disableRegExpRestore === 'function') {
        ;(Intl as any).__disableRegExpRestore()
    }
}

declare const global: {HermesInternal: null | {}}

const _renderApp = ({locale, isDarkTheme}: any) => {
    let theme = isDarkTheme ? darkTheme : lightTheme
    EStyleSheet.build(theme)

    return (
        <PersistGate loading={null} persistor={persistor}>
            <IntlProvider
                locale={locale}
                // @ts-ignore
                messages={flattenMessages(message[locale])}>
                <Navigation />
            </IntlProvider>
        </PersistGate>
    )
}

const mapStateToProps = (state: IAppStates) => ({
    locale: state.application.language,
    isDarkTheme: state.application.darkTheme,
})

const App = connect(mapStateToProps)(_renderApp)

export default () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}
