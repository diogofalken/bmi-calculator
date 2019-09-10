import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    backgroundColor: '#374955',
  },
  title: {
    color: '#E5E5E5',
    fontFamily: 'Helvetica',
    fontSize: 18,
    textTransform: 'uppercase',
  },

  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  card: {
    width: 161,
    height: 155,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'rgba(0, 137, 186, 0.5)',
    alignItems: 'center',
    marginHorizontal: 20,
    borderRadius: 32,
  },

  cardText: {
    color: '#9BAEBC',
    fontFamily: 'Helvetica',
    fontSize: 18,
    textTransform: 'uppercase',
    marginTop: 20,
  },

  heightContainer: {
    width: 342,
    height: 155,
    backgroundColor: 'rgba(0, 137, 186, 0.5)',
    borderRadius: 32,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  heightValue: {
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 28,
    letterSpacing: 0.02,
    color: '#FFF',
  },

  heightMeasure: {
    fontFamily: 'Helvetica',
    fontWeight: '300',
    fontSize: 24,
    color: '#FFF',
  },
});

export default styles;
