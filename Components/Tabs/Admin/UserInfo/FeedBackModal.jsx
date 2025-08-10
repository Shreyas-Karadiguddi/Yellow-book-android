import React, { useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import { GeneralDropDown } from '../../../General/DropDown';
import BaseModal from '../../../General/BaseModal';
import { useToastMessage } from '../../../General/Notification';
import { ALERT_TYPE } from 'react-native-alert-notification';

const suggestionOptions = [
  { label: 'Call not connected', value: 'Call not connected' },
  { label: 'Customer busy', value: 'Customer busy' },
  { label: 'Wrong number', value: 'Wrong number' },
  { label: 'Call back later', value: 'Call back later' },
];

const FeedBackModal = ({ isOpenModal, setIsOpenModal }) => {
  const [suggestion, setSuggestion] = useState(null);
  const [nextFollowupDate, setNextFollowupDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const feedbackRef = useRef('');

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setNextFollowupDate(selectedDate);
    }
  };

  const footer = () => {
    return (
      <View style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
        <Button
          mode="contained"
          icon="content-save"
          onPress={() =>
            useToastMessage(
              ALERT_TYPE.DANGER,
              'FEEDBACK',
              'Not implemented yet',
            )
          }
        >
          Submit
        </Button>
        <Button mode="outlined" onPress={() => setIsOpenModal(false)}>
          Cancel
        </Button>
      </View>
    );
  };

  return (
    <BaseModal
      open={isOpenModal}
      title="Call Feedback"
      contentHeight={260}
      footer={footer}
    >
      <View style={styles.section}>
        <Button
          mode="outlined"
          icon="calendar"
          style={styles.dateButton}
          onPress={() => setShowDatePicker(true)}
        >
          Next Follow-up: {nextFollowupDate.toDateString()}
        </Button>
      </View>

      <View style={styles.section}>
        <GeneralDropDown
          placeholder="Call Outcomes"
          data={suggestionOptions}
          value={suggestion}
          setValue={setSuggestion}
        />
      </View>

      {showDatePicker && (
        <DateTimePicker
          value={nextFollowupDate}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}

      <View style={styles.section}>
        <TextInput
          label="Additional Feedback"
          defaultValue={feedbackRef.current}
          onChangeText={text => (feedbackRef.current = text)}
          mode="outlined"
          multiline
          numberOfLines={4}
          style={styles.textarea}
        />
      </View>
    </BaseModal>
  );
};

const styles = StyleSheet.create({
  section: {
    marginVertical: 8,
  },
  icon: {
    position: 'absolute',
    top: 18,
    left: -4,
    zIndex: 10,
  },
  textarea: {
    marginTop: 10,
  },
  dateButton: {
    justifyContent: 'flex-start',
  },
  submitButton: {
    marginTop: 15,
    borderRadius: 8,
    paddingVertical: 6,
  },
});

export default FeedBackModal;
