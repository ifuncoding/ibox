import React from 'react'
import {IAppStates} from '../../redux/Reducers'
import {connect} from 'react-redux'
import AppActions from '../../redux/Actions/applicationActions'
import {useNavigation} from '@react-navigation/native'
import {TouchableOpacity, View} from 'react-native'
import {FormattedMessage, useIntl} from 'react-intl'

import UIText from '../../components/UIComponent/UIText'
import {Button} from 'react-native-elements'

import * as Elements from 'react-native-elements'
import globalStyles from "../globalStyles";

interface IHomeProps extends IAppStates {
    setLanguage: Function
}

function Home(props: IHomeProps) {
    const intl = useIntl()
    const navigation = useNavigation()

    return (
        <View style={globalStyles.defaultContainer}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Profile')}
                activeOpacity={0.8}>
                <UIText>
                    <FormattedMessage id={'side_menu.drafts'} />
                </UIText>
            </TouchableOpacity>
            {/* <WhiteSpace />
                <Icon.Button name="facebook" backgroundColor="#3b5998">
                    <Text style={{fontFamily: 'Arial', fontSize: 15}}>
                        Login with Facebook
                    </Text>
                </Icon.Button>
                <WhiteSpace /> */}
            <UIText>
                {intl.formatMessage({
                    id: 'login.cancel',
                })}
            </UIText>
            <Button type={'solid'} title="Solid Button" />
        </View>
    )
}

const mapStateToProps = (state: IAppStates) => state

const mapDispatchToProps = (dispatch: any) => ({
    setLanguage: (payload: string) => dispatch(AppActions.setLanguage(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
