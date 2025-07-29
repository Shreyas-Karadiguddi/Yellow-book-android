import React from "react";
import { StyleSheet } from "react-native";
import { Portal, Dialog, Divider } from "react-native-paper";

const BaseModal = ({ open, title, children, footer = () => { }, onDismiss = () => { } }) => {
    return (
        <Portal>
            <Dialog
                visible={open}
                onDismiss={onDismiss}
                style={styles.dialogContainer}
            >
                <Dialog.Title style={styles.dialogTitle}>{title}</Dialog.Title>
                <Divider style={{ height: 1 }} />
                <Dialog.Content style={styles.dialogContent}>
                    {children}
                </Dialog.Content>
                <Divider style={{ height: 1 }} />
                <Dialog.Actions style={styles.dialogFooter}>
                    {footer()}
                </Dialog.Actions>
            </Dialog>
        </Portal>
    );
};

const styles = StyleSheet.create({
    dialogContainer: {
        borderRadius: 16,
        backgroundColor: "#fff",
        paddingHorizontal: 4,
        width: "90%",
        alignSelf: "center",
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        minHeight: 100
    },
    dialogTitle: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        flexWrap: 'nowrap'

    },
    dialogContent: {
        marginTop: 10,
        marginBottom: -10,
        minHeight: 100,
        justifyContent: 'center',
    },
    dialogFooter: {
        justifyContent: "flex-end",
        paddingHorizontal: 8,
        paddingBottom: 6,
        margin: 10
    },
});

export default BaseModal;
