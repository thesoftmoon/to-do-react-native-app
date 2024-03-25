import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function Task(props) {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}>{props.taskText}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}
const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        height: 24,
        width: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 10
    },
    itemText: {
        maxWidth: '80%'
    },
    circular: {
        width: 18,
        height: 18,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5

    },
})
export default Task