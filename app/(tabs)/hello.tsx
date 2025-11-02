import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function HelloScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello, World!</Text>
            <Image
                style={styles.image}
                source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
                accessibilityLabel="React Native logo"
            />
            <Text style={styles.subtitle}>This is a basic View, Text and Image example.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 28,
        fontWeight: "700",
        marginBottom: 12,
    },
    image: {
        width: 64,
        height: 64,
        marginBottom: 12,
    },
    subtitle: {
        fontSize: 16,
        color: "#444",
        textAlign: "center",
    },
});