import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { ThemeColor } from '../utils/theme'
import Svg, { Polyline, Polygon } from 'react-native-svg'
import { View } from 'react-native'


export const BottomButton = ({ title, onPress, style, titleStyle, disabled, children, activeOpacity = 0.6 })=> {
    return (
        <TouchableOpacity activeOpacity={activeOpacity} onPress={onPress} style={[styles.btn, style, disabled ? { backgroundColor: "gray" } : null]} disabled={disabled}>
            {children}
            <Text style={[styles.btnTxt, titleStyle, disabled ? { color: "white" } : {}]}>{title}</Text>
            
        </TouchableOpacity>
    )
}

export const ThemeButton = ({ title, onPress, style })=> {
    return (
        <TouchableOpacity activeOpacity={.6} onPress={onPress} style={[styles.themeBtn, style]}>
            <Text style={styles.themeBtnTxt}>{title}</Text>
        </TouchableOpacity>
    )
}

export const RadiusButton = ({ title, onPress, style })=> {
    return (
        <TouchableOpacity activeOpacity={.6} onPress={onPress} style={[styles.radiusBtn, style]}>
            <Text style={styles.radiusTxt}>{title}</Text>
        </TouchableOpacity>
    )
}

export const LeftSvgObliqueButton = ({ style, type = "left" | "right" ,width, height, children, onPress, oblique = 10, fill, stroke, strokeWidth = 0 }) => {
    let points = "0,0 "+width+",0 "+(width - oblique*2)+","+height+" 0,"+height
    if (type === "right") {
        points = oblique*2 + ",0 "+width+",0 "+width+","+height+" "+"0,"+height
    }
    return <TouchableOpacity activeOpacity={.6} onPress={onPress} style={style}>
        <Svg
            height={height}
            width={width}
        >
            <Polygon
                points={points}  //多边形的每个角的x和y坐标
                fill={fill}     //填充颜色
                stroke={stroke || fill}   //外边框颜色
                strokeWidth={strokeWidth}   //外边框宽度
            />
            
        </Svg>
        <View style={{ position: "absolute", width: width, height: height }}>
        {children && children()}
        </View>
    </TouchableOpacity>
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