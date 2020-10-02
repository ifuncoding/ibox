const DRAWER_SUFFIX = 'Drawer'
const MODAL_SUFFIX = 'Modal'
const SCREEN_SUFFIX = 'Screen'
const TABBAR_SUFFIX = 'Tabbar'

export default {
    SCREENS: {
        HOME: `Home${SCREEN_SUFFIX}`,
        USER: `User${SCREEN_SUFFIX}`,
        SETTING: `Setting${SCREEN_SUFFIX}`,
        PROFILE: `Profile${SCREEN_SUFFIX}`,
        SET_LANGUAGE: `Language${SCREEN_SUFFIX}`,
        LOGIN: `Login${SCREEN_SUFFIX}`,
        SIGNUP: `SignUp${SCREEN_SUFFIX}`,
    },
    DRAWER: {
        MAIN: `Main${DRAWER_SUFFIX}`,
    },
    TABBAR: {
        FEED: `Feed${TABBAR_SUFFIX}`,
        NOTIFICATION: `Notification${TABBAR_SUFFIX}`,
        WALLET: `Wallet${TABBAR_SUFFIX}`,
        POST_BUTTON: `PostButton${TABBAR_SUFFIX}`,
        PROFILE: `Profile${TABBAR_SUFFIX}`,
    },
    MODAL: {
        LOGOUT: `Logout${MODAL_SUFFIX}`,
    },
}
