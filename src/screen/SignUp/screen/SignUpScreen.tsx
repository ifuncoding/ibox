import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
interface ISignUpScreenProps {}
const SignUpScreen = (props: ISignUpScreenProps) => {
    return (
        <View style={styles.container}>
            <Text>SignUpScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default SignUpScreen
