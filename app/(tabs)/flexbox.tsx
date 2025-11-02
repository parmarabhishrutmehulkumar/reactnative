import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";

export default function FlexboxScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Header</Text>
            </View>

            <View style={styles.body}>
                <Text style={styles.bodyTitle}>Body</Text>
                <Text style={styles.bodyText}>This area grows to fill available space.</Text>
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>Footer</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        height: 72,
        backgroundColor: "#1e90ff",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 16,
    },
    headerText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "600",
    },
    body: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#f6f8fa",
    },
    bodyTitle: {
        fontSize: 22,
        fontWeight: "700",
        marginBottom: 8,
    },
    bodyText: {
        fontSize: 16,
        color: "#333",
        textAlign: "center",
    },
    footer: {
        height: 56,
        backgroundColor: "#00bfa5",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 16,
    },
    footerText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
});