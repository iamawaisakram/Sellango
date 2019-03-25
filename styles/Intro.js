import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  logo: {
    height: 120,
    marginBottom: 16,
    marginTop: 64,
    padding: 10,
    width: 135
  },
  skipView: {
    width: wp('25%'),
    height: hp('5%'),
    borderRadius: wp('8%'),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: hp('3%'),
    left: wp('7%'),
    backgroundColor: '#BBB9B3'
    // opacity: 0.5
  },
  skipText: {
    color: '#219DF5',
    fontSize: 20
  },
  backView: {
    width: wp('25%'),
    height: hp('5%'),
    borderRadius: wp('8%'),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: hp('5%'),
    left: wp('10%'),
    backgroundColor: '#219DF5',
    opacity: 0.8
  },
  backText: {
    color: '#FF9300',
    fontSize: 20
  },
  nextView: {
    width: wp('25%'),
    height: hp('5%'),
    borderRadius: wp('8%'),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: hp('5%'),
    right: wp('10%'),
    backgroundColor: '#219DF5',
    opacity: 0.8
  },
  nextText: {
    color: '#FF9300',
    fontSize: 20
  }
});
