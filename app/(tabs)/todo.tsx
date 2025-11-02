import React, { useState } from "react";
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    Keyboard,
} from "react-native";

type Todo = {
    id: string;
    text: string;
    done: boolean;
};

export default function TodoScreen() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [text, setText] = useState("");

    function addTodo() {
        const trimmed = text.trim();
        if (!trimmed) return;
        const newTodo: Todo = { id: Date.now().toString(), text: trimmed, done: false };
        setTodos((s) => [newTodo, ...s]);
        setText("");
        Keyboard.dismiss();
    }

    function toggleTodo(id: string) {
        setTodos((s) => s.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
    }

    function deleteTodo(id: string) {
        setTodos((s) => s.filter((t) => t.id !== id));
    }

    const renderItem = ({ item }: { item: Todo }) => (
        <View style={styles.item}>
            <TouchableOpacity onPress={() => toggleTodo(item.id)} style={styles.checkbox}>
                <Text style={[styles.checkboxText, item.done && styles.checked]}>{item.done ? "✓" : ""}</Text>
            </TouchableOpacity>

            <Text style={[styles.itemText, item.done && styles.itemTextDone]}>{item.text}</Text>

            <TouchableOpacity onPress={() => deleteTodo(item.id)} style={styles.deleteButton}>
                <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>To‑Do List</Text>

            <View style={styles.inputRow}>
                <TextInput
                    value={text}
                    onChangeText={setText}
                    placeholder="Add a task..."
                    style={styles.input}
                    onSubmitEditing={addTodo}
                    returnKeyType="done"
                />
                <TouchableOpacity onPress={addTodo} style={styles.addButton}>
                    <Text style={styles.addButtonText}>Add</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={todos}
                keyExtractor={(i) => i.id}
                renderItem={renderItem}
                contentContainerStyle={styles.list}
                ListEmptyComponent={<Text style={styles.empty}>No tasks — add one above.</Text>}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: "#fff" },
    title: { fontSize: 24, fontWeight: "700", marginBottom: 12, textAlign: "center" },
    inputRow: { flexDirection: "row", marginBottom: 12 },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        paddingHorizontal: 12,
        height: 44,
        backgroundColor: "#fafafa",
    },
    addButton: {
        marginLeft: 8,
        backgroundColor: "#1e90ff",
        borderRadius: 8,
        paddingHorizontal: 14,
        justifyContent: "center",
    },
    addButtonText: { color: "#fff", fontWeight: "600" },
    list: { paddingVertical: 8 },
    item: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#f0f0f0",
    },
    checkbox: {
        width: 32,
        height: 32,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "#ccc",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 12,
    },
    checkboxText: { fontSize: 18, color: "#1e90ff" },
    checked: { color: "#0b6" },
    itemText: { flex: 1, fontSize: 16 },
    itemTextDone: { textDecorationLine: "line-through", color: "#999" },
    deleteButton: { paddingHorizontal: 8, paddingVertical: 4 },
    deleteText: { color: "#ff4d4f", fontWeight: "600" },
    empty: { textAlign: "center", color: "#666", marginTop: 24 },
});