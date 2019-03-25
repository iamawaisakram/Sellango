import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  logoContainer: {
    height: hp('50%'),
    width: wp('100%'),
    alignItems: 'center',
    justifyContent: 'center'
  },
  closeButton: {
    position: 'absolute',
    right: wp('5%'),
    top: hp('5%')
  },
  image: {
    height: hp('10%'),
    width: wp('72%')
  },
  optionsContainer: {
    height: hp('53%'),
    width: wp('100%'),
    alignItems: 'center',
    justifyContent: 'center'
  },
  optionsView: {
    width: wp('90%'),
    height: hp('7%'),
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp('5%'),
    margin: 5,
    flexDirection: 'row'
  },
  optionsFont: {
    color: 'white',
    fontSize: wp('4.5%'),
    fontWeight: 'bold',
    width: wp('70%')
  },
  icon: {
    width: wp('10%'),
    paddingRight: 2,
    alignSelf: 'center'
  },
  modalContainer: {
    width: wp('100%'),
    height: hp('100%'),
    alignItems: 'center',
    marginTop: 40
  },
  title: {
    fontSize: wp('10%'),
    fontWeight: 'bold',
    color: '#219DF5',
    marginBottom: 10
  },
  subtitle: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    color: '#000'
  },
  description: {
    fontSize: wp('4.25'),
    color: '#000',
    width: wp('70%'),
    textAlign: 'center'
  },
  inputView: {
    width: wp('90%'),
    height: hp('8%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('5%')
  },
  countryCode: {
    width: wp('20%'),
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#219DF5'
  },
  phoneNumber: {
    width: wp('65%'),
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#219DF5'
  },
  countryText: {
    fontSize: wp('3.5'),
    color: '#219DF5'
  },
  numberText: {
    fontSize: wp('3.5'),
    color: '#219DF5'
  },
  button: {
    marginTop: hp('5%'),
    width: wp('90%'),
    height: hp('7%'),
    backgroundColor: '#219DF5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp('5%')
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: wp('6.25')
  },
  emailView: {
    width: wp('90%'),
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#219DF5'
  },
  emailText: {
    fontSize: wp('3.5%'),
    color: '#219DF5'
  },
  modalCloseButton: {
    position: 'absolute',
    right: wp('5%'),
    top: hp('0%')
  }
});
