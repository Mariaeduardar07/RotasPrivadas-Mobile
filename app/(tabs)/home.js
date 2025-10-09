import React from "react";
impoer { View, Text, StyleSheet, ScrollView } from "react-native";
import { useAuth } from "../../contexts/AuthContext";
import { View } from "react-native/types_generated/index";
import { Color } from "react-native/types_generated/Libraries/Animated/AnimatedExports";

export default function HomeScreen() {
  const { user } = useAuth();

    return (
    <ScrollView style={styles.container}>
        <View style={styles.content}>
            <Text style={styles.emoji}>🏠</Text>
            <Text style={styles.title}>Bem-vindo(a)</Text>
            <Text style={styles.userName}>{user?.name}</Text>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Você está autenticado</Text>
                <Text style={styles.cardText}> Esta é uma rota protegida pelo Expo Router. Você pode ver este conteúdo porque está logado.</Text>
            </View>

            <View style={styles.infoCard}>
                <Text style={styles.infoTitle}>Navegação com Expo Router</Text>
                <Text style={styles.infoItem}> Rotas privadas automáticas</Text>
                <Text style={styles.infoItem}> Cadastro de usuários</Text>
                <Text style={styles.infoItem}> Login persistente</Text>
                <Text style={styles.infoItem}> Validação de dados</Text>
                </View>

                <View style={styles.tipCard}>
                    <Text style={styles.tipTitle}>Dica</Text>
                    <Text style={styles.tipText}> Seus dados ficam salvos mesmo se você fechar o app!
                        Use o botão "Sair" no perfil para fazer logout.
                    </Text>
                </View>
        </View>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f0f0",
    },
    content: { 
        flex: 1,
        padding: 20,
        paddingTop: 60,
    },
    emoji: {
        fontSize: 80,
        textAlign: "center",
        marginBottom: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 10,
        textAlign: "center",
    },
    userName: {
        fontSize: 24,
        color: "#007AFF",
        fontWeight: "600",
        marginBottom: 30,
        textAlign: "center",
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 20,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#333",
        textAlign: "center",
    },
    cardText: {
        fontSize: 14,
        color: "#666",
        textAlign: "center",
        lineHeight: 20,
    },
    infoCard: {
        backgroundColor: "#e6f0ff",
        borderRadius: 12,
        padding: 20,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: "#b3d1ff",
    },
});