import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
    console.log('debuggin');    
    return (
        <View style={headerContainer}>
            <Text style={header}>
                React-Crypto Wallet
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    headerContainer: {
        display: "flex",
        marginTop: 55,
        alignItems: "center",
    },
    header: {
        fontWeight: "bold",        
        fontSize: 20,
    }
})

const { headerContainer, header } = styles;


export default Header;