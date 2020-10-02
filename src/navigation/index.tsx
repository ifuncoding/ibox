import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {
    Home,
    Login,
    Profile,
    SetLanguage,
    Setting,
    SignUp,
    User,
} from '../screen'
import RouterName from './RouterName'
import {connect} from 'react-redux'
import {IAppStates} from '../redux/Reducers'
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer'
import Drawer from '@react-navigation/drawer/lib/typescript/src/views/Drawer'
import {useMemo} from 'react'

const HomeStack = createStackNavigator()

function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name={RouterName.SCREENS.HOME} component={Home} />
        </HomeStack.Navigator>
    )
}

const HomeDrawer = createDrawerNavigator()

function HomeDrawerStackScreen() {
    return (
        <HomeDrawer.Navigator drawerContent={CustomDrawerContent}>
            <HomeDrawer.Screen
                name={RouterName.SCREENS.HOME}
                component={Home}
            />
        </HomeDrawer.Navigator>
    )
}

function CustomDrawerContent(props: any) {
    console.log('Drawer render', props)
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
}

const UserStack = createStackNavigator()

function UserStackScreen() {
    return (
        <UserStack.Navigator>
            <UserStack.Screen name={RouterName.SCREENS.USER} component={User} />
        </UserStack.Navigator>
    )
}

const SettingStack = createStackNavigator()

function SettingStackScreen() {
    return (
        <SettingStack.Navigator>
            <SettingStack.Screen
                name={RouterName.SCREENS.SETTING}
                component={Setting}
            />
        </SettingStack.Navigator>
    )
}

const Tab = createBottomTabNavigator()
function BottomTabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName = ''

                    if (route.name === RouterName.SCREENS.HOME) {
                        iconName = focused ? 'home' : 'home'
                    } else if (route.name === RouterName.SCREENS.SETTING) {
                        iconName = focused ? 'setting' : 'setting'
                    } else if (route.name === RouterName.SCREENS.USER) {
                        iconName = focused ? 'user' : 'user'
                    }

                    // You can return any component that you like here!
                    return null
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}>
            <Tab.Screen
                name={RouterName.SCREENS.HOME}
                component={HomeDrawerStackScreen}
            />
            <Tab.Screen
                name={RouterName.SCREENS.USER}
                component={UserStackScreen}
            />
            <Tab.Screen
                name={RouterName.SCREENS.SETTING}
                component={SettingStackScreen}
            />
        </Tab.Navigator>
    )
}
const MainStack = createStackNavigator()

const LoginStack = createStackNavigator()

interface INavigationProps {
    userToken: string | null
}

function Navigation(props: INavigationProps) {
    console.log('props.userToken: ', props.userToken)
    return (
        <NavigationContainer>
            {props.userToken ? (
                <LoginStack.Navigator headerMode={'none'}>
                    <LoginStack.Screen
                        name={RouterName.SCREENS.LOGIN}
                        component={Login}
                    />
                    <LoginStack.Screen
                        name={RouterName.SCREENS.SIGNUP}
                        component={SignUp}
                    />
                </LoginStack.Navigator>
            ) : (
                <MainStack.Navigator>
                    <MainStack.Screen
                        name={'Main'}
                        component={BottomTabNavigation}
                    />
                    <MainStack.Screen name={'Profile'} component={Profile} />
                    <MainStack.Screen
                        name={RouterName.SCREENS.SET_LANGUAGE}
                        component={SetLanguage}
                    />
                </MainStack.Navigator>
            )}
        </NavigationContainer>
    )
}

const mapStateToProps = (state: IAppStates) => ({
    userToken: state.user.token,
})

export default connect(mapStateToProps)(Navigation)
