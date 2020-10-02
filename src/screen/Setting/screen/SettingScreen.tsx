import React, {useState} from 'react'
import AppActions from '../../../redux/Actions/applicationActions'
import {connect} from 'react-redux'

import {Switch, Text, View} from 'react-native'
import RouterName from '../../../navigation/RouterName'
import {FormattedMessage, useIntl} from 'react-intl'
import {IAppStates} from '../../../redux/Reducers'
import UIText from '../../../components/UIComponent/UIText'
import {Avatar, ListItem} from 'react-native-elements'
import globalStyles from '../../globalStyles'
import {locales} from '../../../config/Locales'
import {value} from 'react-native-extended-stylesheet'

interface ILanguageData {
    label: string
    value: string
}

interface ISettingScreenProps extends IAppStates {
    [x: string]: any
    changeTheme: Function
}

const SettingScreen = (props: ISettingScreenProps) => {
    const [isEnabled, setIsEnabled] = useState(false)

    const toggleSwitch = () => setIsEnabled((previousState) => !previousState)

    const intl = useIntl()

    function changeAppTheme() {
        props.changeTheme()
        toggleSwitch()
    }

    const nav = (to: string) => () => {
        props.navigation.navigate(to)
    }

    function getActiveLanguage() {
        const activeLanguage = locales.find(
            (value) => value.id === props.application.language,
        )
        return !!activeLanguage ? activeLanguage.name : ''
    }

    return (
        <View style={globalStyles.defaultContainer}>
            <ListItem
                bottomDivider
                activeOpacity={0.8}
                onPress={nav(RouterName.SCREENS.SET_LANGUAGE)}>
                {/*<Avatar*/}
                {/*    rounded*/}
                {/*    source={{*/}
                {/*        uri:*/}
                {/*            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',*/}
                {/*    }}*/}
                {/*/>*/}
                <ListItem.Title>
                    <FormattedMessage id={'settings.language'} />
                </ListItem.Title>
                <ListItem.Content style={{alignItems: 'flex-end'}}>
                    <Text>{getActiveLanguage()}</Text>
                </ListItem.Content>
            </ListItem>
            <ListItem onPress={changeAppTheme}>
                <ListItem.Title>Themes</ListItem.Title>
                <ListItem.Content style={{alignItems: 'flex-end'}}>
                    <Switch
                        trackColor={{false: '#3e3e3e', true: '#3e3e3e'}}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={changeAppTheme}
                        value={isEnabled}
                    />
                </ListItem.Content>
            </ListItem>
        </View>
    )
}

const mapStateToProps = (state: IAppStates) => state

const mapDispatchToProps = (dispatch: any) => ({
    changeTheme: () => dispatch(AppActions.setDarkTheme()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SettingScreen)
