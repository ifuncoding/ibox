import React from 'react'
import {ScrollView, Text, TouchableOpacity} from 'react-native'
import {IAppStates} from '../../../redux/Reducers'
import AppActions from '../../../redux/Actions/applicationActions'
import {connect} from 'react-redux'

import {ILanguages, locales} from '../../../config/Locales/index'
import RouterName from '../../../navigation/RouterName'
import {ListItem} from 'react-native-elements'
interface ISetLanguageScreenProps {
    navigation: any
    setLanguage: Function
    languageId: string
}
const SetLanguageScreen = (props: ISetLanguageScreenProps) => {
    const _setlanguage = (setLanguage: string) => {
        props.setLanguage(setLanguage)
        props.navigation.navigate(RouterName.SCREENS.HOME)
    }

    return (
        <ScrollView>
            {locales.map((locale: ILanguages) => {
                return (
                    <ListItem
                        key={locale.id}
                        onPress={() => _setlanguage(locale.id)}>
                        <ListItem.Title>{locale.name}</ListItem.Title>
                        <ListItem.Content style={{alignItems: 'flex-end'}}>
                            <ListItem.CheckBox
                                checked={locale.id === props.languageId}
                            />
                        </ListItem.Content>
                    </ListItem>
                )
            })}
        </ScrollView>
    )
}

const mapStateToProps = (state: IAppStates) => ({
    languageId: state.application.language,
})

const mapDispatchToProps = (dispatch: any) => ({
    setLanguage: (payload: string) => dispatch(AppActions.setLanguage(payload)),
})

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(SetLanguageScreen)
