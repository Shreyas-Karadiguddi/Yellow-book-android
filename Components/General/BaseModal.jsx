import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Portal, Dialog, Divider } from 'react-native-paper';

const BaseModal = ({
  open,
  title,
  contentHeight = 100,
  children,
  footer = () => {},
  onDismiss = () => {},
}) => {
  return (
    <Portal>
      <Dialog
        visible={open}
        onDismiss={onDismiss}
        style={styles.dialogContainer}
      >
        <Dialog.Title style={styles.dialogTitle}>{title}</Dialog.Title>
        <Divider style={{ height: 1 }} />
        <Dialog.Content>
          <ScrollView
            style={[styles.scrollContainer, { height: contentHeight }]}
            contentContainerStyle={styles.dialogContent}
            showsVerticalScrollIndicator={false}
          >
            {children}
          </ScrollView>
        </Dialog.Content>
        <Divider style={{ height: 1 }} />
        <Dialog.Actions style={styles.dialogFooter}>{footer()}</Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

const styles = StyleSheet.create({
  dialogContainer: {
    borderRadius: 16,
    backgroundColor: '#fff',
    paddingHorizontal: 2,
    width: '90%',
    alignSelf: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    minHeight: 100,
  },
  dialogTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    flexWrap: 'nowrap',
  },
  dialogContent: {
    justifyContent: 'space-between',
  },
  scrollContainer: {
    width: '100%',
  },

  dialogFooter: {
    justifyContent: 'center',
    paddingHorizontal: 8,
    paddingBottom: 6,
    margin: 10,
  },
});

export default BaseModal;
