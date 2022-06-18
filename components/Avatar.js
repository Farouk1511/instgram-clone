import React from "react";
import PropTypes from 'prop-types'
import {ColorPropType,StyleSheet,Text,View} from 'react-native'


const Avatar = ({size,backgroundColor,initials}) => {
    const style = {
        width:size,
        height:size,
        borderRadius:size/2,
        backgroundColor
    }

    return (
        <View style={[style,styles.container]}>
            <Text style={styles.text} >
                {initials}
            </Text>
        </View>
    )
}

Avatar.propTypes = {
    initials: PropTypes.string.isRequired,
    size:PropTypes.number.isRequired,
    backgroundColor:ColorPropType.isRequired
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center'
    },text:{
        color:'white'
    }
})
export default Avatar