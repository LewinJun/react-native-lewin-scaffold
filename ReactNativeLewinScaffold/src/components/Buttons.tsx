import React from 'react'
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'
import { ThemeColor } from '../utils/theme'
// import Svg, { Polyline, Polygon } from 'react-native-svg'

export interface ButtonProps {
    title?: string;
    onPress?: () => void;
    style?: any;
    titleStyle?: any;
    disabled?: boolean;
    children?: any;
    activeOpacity?: number;
}


export const BottomButton = ({ title, onPress, style, titleStyle, disabled, children, activeOpacity = 0.6 }: ButtonProps) => {
    return (
        <TouchableOpacity activeOpacity={activeOpacity} onPress={onPress} style={[styles.btn, style, disabled ? { backgroundColor: "gray" } : null]} disabled={disabled}>
            {children}
            <Text style={[styles.btnTxt, titleStyle, disabled ? { color: "white" } : {}]}>{title}</Text>
        </TouchableOpacity>
    )
}

export const ThemeButton = ({ title, onPress, style }: ButtonProps) => {

    return (
        <TouchableOpacity activeOpacity={.6} onPress={onPress} style={[styles.themeBtn, style]}>
            <Text style={styles.themeBtnTxt}>{title}</Text>
        </TouchableOpacity>
    )
}

export const RadiusButton = ({ title, onPress, style }: ButtonProps) => {
    return (
        <TouchableOpacity activeOpacity={.6} onPress={onPress} style={[styles.radiusBtn, style]}>
            <Text style={styles.radiusTxt}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        height: 44,
        backgroundColor: "#e59d3e",
        alignItems: "center",
        justifyContent: "center"
    },
    btnTxt: {
        fontSize: 14,
        color: "white"
    },
    themeBtn: {
        backgroundColor: ThemeColor.main,
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center"
    },
    themeBtnTxt: {
        marginHorizontal: 15,
        marginVertical: 8,
        fontSize: 14,
        fontWeight: "500",
        color: "white"
    },
    radiusBtn: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        borderColor: "#282828",
        borderWidth: 1
    },
    radiusTxt: {
        marginHorizontal: 20,
        marginVertical: 6,
        fontSize: 16,
        borderColor: "#3c3c3c",
    }
})