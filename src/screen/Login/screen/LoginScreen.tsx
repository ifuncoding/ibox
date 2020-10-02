import React, {useState} from 'react'
import {Alert, Platform, StyleSheet, Text, View} from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import globalStyles from '../../globalStyles'
import {Button, Input} from 'react-native-elements'
import {AuthManager} from '../../../auth/AuthManager'

interface ILoginScreenProps {}
const LoginScreen = (props: ILoginScreenProps) => {
    const [email, setEmail] = useState<string>('')
    const [pwd, setPwd] = useState<string>('')

    // async function onGoogleButtonPress() {
    //     await auth()
    //         .createUserWithEmailAndPassword(
    //             'yeudoi1110@gmail.com.vn',
    //             'SuperSecretPassword!',
    //         )
    //         .then(() => {
    //             console.log('User account created & signed in!')
    //         })
    //         .catch((error) => {
    //             if (error.code === 'auth/email-already-in-use') {
    //                 console.log('That email address is already in use!')
    //             }
    //
    //             if (error.code === 'auth/invalid-email') {
    //                 console.log('That email address is invalid!')
    //             }
    //
    //             console.error(error)
    //         })
    // }

    const _signInAsync = async () => {
        // const navigation = this.context;

        try {
            await AuthManager.signInAsync()

            // navigation.reset({
            //     index: 0,
            //     routes: [ { name: 'Main' } ]
            // });
        } catch (error) {
            Alert.alert(
                'Error signing in',
                JSON.stringify(error),
                [
                    {
                        text: 'OK',
                    },
                ],
                {cancelable: false},
            )
        }
    }

    const _signOut = async () => {
        // const navigation = this.context;

        // Sign out
        await AuthManager.signOutAsync()

        Alert.alert(
            'Sign Out',
            'signed out',
            [
                {
                    text: 'OK',
                },
            ],
            {cancelable: false},
        )

        // navigation.reset({
        //     index: 0,
        //     routes: [{name: 'SignIn'}],
        // })
    }

    return (
        <View style={globalStyles.center}>
            <KeyboardAwareScrollView
                style={{
                    flex: 1,
                    width: '100%',
                    paddingTop: '20%',
                }}
                enableAutomaticScroll={Platform.OS === 'ios'}
                enableOnAndroid={true}>
                <View>
                    <Input
                        placeholder={'Email'}
                        onChangeText={setEmail}
                        value={email}
                    />
                    <Input
                        placeholder={'password'}
                        onChangeText={setPwd}
                        value={pwd}
                    />
                    <Button
                        activeOpacity={0.8}
                        title={'Login'}
                        onPress={_signInAsync}
                    />
                </View>
                <View>
                    <Button title={'Gmail'} />
                    <Button title={'Facebook'} />
                    <Button title={'Phone'} />
                    <Button title={'SignOut'} onPress={_signOut} />
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
    // Set an initializing state whilst Firebase connects
    // const [initializing, setInitializing] = useState(true)
    // const [user, setUser] = useState()
    //
    // // Handle user state changes
    // function onAuthStateChanged(user) {
    //     setUser(user)
    //     if (initializing) {
    //         setInitializing(false)
    //     }
    // }
    //
    // useEffect(() => {
    //     const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    //     return subscriber // unsubscribe on unmount
    // }, [])
    //
    // if (initializing) {
    //     return null
    // }
    //
    // if (!user) {
    //     return (
    //         <View>
    //             <Text>Login</Text>
    //         </View>
    //     )
    // }
    //
    // return (
    //     <View>
    //         <Text>Welcome {user.email}</Text>
    //     </View>
    // )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default LoginScreen
