import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#374955',
    fontFamily: 'Helvetica',
  },

  title: {
    color: '#E5E5E5',
    fontSize: 18,
    textTransform: 'uppercase',
    marginTop: 20,
  },

  mainCard: {
    width: 343,
    height: 458,
    backgroundColor: 'rgba(0, 137, 186, 0.5)',
    borderRadius: 18,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  resultTitle: {
    color: '#00C013',
    fontWeight: '500',
    fontSize: 18,
  },

  resultBMI: {
    color: '#e5e5e5',
    fontSize: 64,
    fontWeight: '500',
  },

  resultText: {
    color: 'rgba(229,229,229,0.7)',
    fontWeight: '500',
    fontSize: 18,
  },

  reCalculateContainer: {
    width: 400,
    height: 93,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#AE6997',
  },

  reCalculateText: {
    fontFamily: 'Helvetica',
    fontSize: 18,
    lineHeight: 21,
    color: '#E5E5E5',
  },
});

export default styles;
