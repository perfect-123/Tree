import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

const visions = () => {
    const visionData = [
        { title: "Vision 1", description: "Description for Vision 1", color: "#FFB3BA", percentage:98 },
        { title: "Vision 2", description: "Description for Vision 2", color: "#FFDFBA",percentage:68 },
        { title: "Vision 3", description: "Description for Vision 3", color: "#FFFFBA",percentage:28 },
        { title: "Vision 4", description: "Description for Vision 4", color: "#BAFFC9",percentage:12 },
        { title: "Vision 5", description: "Description for Vision 5", color: "#BAE1FF",percentage:77 },
        { title: "Vision 6", description: "Description for Vision 6", color: "#FFB3FF",percentage:80 },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.header}>You're Making Progress, Perfect</Text>

            <ScrollView>
                {visionData.map((vision, index) => (
                    <View key={index} style={[styles.visionBox, { backgroundColor: vision.color }]}>
                        <Text style={styles.visionTitle}>{vision.title}</Text>
                        <Text style={styles.visionDescription}>{vision.description}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

export default visions;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    visionBox: {
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
    },
    visionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    visionDescription: {
        fontSize: 16,
        marginTop: 5,
    },
    visionPercentage: {
        fontSize: 16,
        fontWeight: 'bold',
        position: 'absolute',
        right: 15,
        top: 15,
    }
});