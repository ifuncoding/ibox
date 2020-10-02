import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
interface IUserProps {}
const UserScreen = (props: IUserProps) => {
    console.log(props)
    return (
        <View style={styles.container}>
            <Text>User</Text>
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

export default UserScreen
