import { StyleSheet, Platform } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const STATUSBAR_HEIGHT = getStatusBarHeight();

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  tabBar: {
    position: 'absolute',
    bottom: 0,
    width: wp('100%'),
    height: hp('10%'),
    flexDirection: 'row',
    backgroundColor: '#f4faff'
  },
  cell: {
    width: wp('20%'),
    justifyContent: 'center',
    alignItems: 'center'
  },
  cellActive: {
    width: wp('20%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#219DF5'
  },
  cellIcon: {
    marginBottom: 3
  },
  cellText: {
    fontSize: wp('2.5%')
  },
  cellTextActive: {
    fontSize: wp('3%'),
    color: '#fff'
  },
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0
  },
  ScrollView: {
    width: wp('100%'),
    backgroundColor: '#FFFFFF',
    ...Platform.select({
      ios: {
        height: hp('78%') - STATUSBAR_HEIGHT,
        marginTop: hp('2.1%')
      },
      android: {
        height: hp('80.5%'),
        marginTop: hp('2.1%')
      }
    })
  },
  topBar: {
    position: 'absolute',
    top: 0,
    height: hp('12%'),
    width: wp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4faff'
  },
  currentLocation: {
    flexDirection: 'row',
    width: wp('95%'),
    height: hp('4%'),
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  searchBar: {
    flexDirection: 'row',
    width: wp('95%'),
    height: hp('6%'),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderWidth: 3,
    borderColor: '#219DF5'
  },
  searchIcon: {
    marginLeft: 10
  },
  searchInput: {
    width: wp('80%'),
    height: hp('5%'),
    color: '#219DF5'
  },
  pinView: {
    flexDirection: 'row',
    width: wp('32%'),
    justifyContent: 'space-between',
    textAlign: 'center'
  },
  locationText: {
    fontSize: wp('2.75%'),
    textAlign: 'center',
    marginTop: 5,
    color: '#219DF5'
  },
  categories: {
    width: wp('100%'),
    height: hp('51%'),
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  categoriesTitleView: {
    width: wp('70%'),
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    height: hp('5%'),
    position: 'absolute',
    top: 0
  },
  categoriesTitle: {
    fontWeight: 'bold',
    fontSize: wp('3.75%'),
    textAlign: 'center'
  },
  categoriesRow: {
    width: wp('95%'),
    height: hp('12%'),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  category: {
    width: wp('30%'),
    height: hp('11%'),
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  iconViewAds: {
    width: wp('18%'),
    height: wp('18%'),
    borderRadius: wp('9%'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#abc6e6'
  },
  iconViewMobile: {
    width: wp('18%'),
    height: wp('18%'),
    borderRadius: wp('9%'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#cfbc18'
  },
  iconViewVehicles: {
    width: wp('18%'),
    height: wp('18%'),
    borderRadius: wp('9%'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#22cbb4'
  },
  iconViewProperty: {
    width: wp('18%'),
    height: wp('18%'),
    borderRadius: wp('9%'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#df6264'
  },
  iconViewPropertyRent: {
    width: wp('18%'),
    height: wp('18%'),
    borderRadius: wp('9%'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4ee2ce'
  },
  iconViewElectronics: {
    width: wp('18%'),
    height: wp('18%'),
    borderRadius: wp('9%'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c5d8ee'
  },
  iconViewBikes: {
    width: wp('18%'),
    height: wp('18%'),
    borderRadius: wp('9%'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d2ab51'
  },
  iconViewBusiness: {
    width: wp('18%'),
    height: wp('18%'),
    borderRadius: wp('9%'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ee8596'
  },
  iconViewMore: {
    width: wp('18%'),
    height: wp('18%'),
    borderRadius: wp('9%'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dfeaf6'
  },

  categoryText: {
    fontSize: wp('2.5%'),
    textAlign: 'center'
  },
  popularAds: {
    width: wp('100%'),
    alignItems: 'center'
  },
  popularAdsTitle: {
    width: wp('70%'),
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    height: hp('2.5%')
  },
  popularAdsTitleText: {
    fontWeight: 'bold',
    fontSize: wp('3.75%')
  },
  topPicks: {
    width: wp('98%'),
    height: hp('21%'),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  ad: {
    width: wp('47%'),
    height: hp('20%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4faff',
    borderColor: '#219DF5',
    borderWidth: 1
  },
  innerContainer: {
    width: wp('44%'),
    height: hp('19%'),
    alignItems: 'center'
  },
  adPicture: {
    width: wp('40%'),
    height: hp('10%'),
    resizeMode: 'contain'
  },
  priceAndFavourite: {
    width: wp('40%'),
    height: hp('3%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  price: {
    fontSize: wp('3%'),
    fontWeight: 'bold'
  },
  description: {
    width: wp('40%'),
    height: hp('2%'),
    justifyContent: 'center'
  },
  descriptionText: {
    fontSize: wp('2.5%')
  },
  productLocation: {
    width: wp('40%'),
    height: hp('4%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  location: {
    fontSize: wp('2.5%')
  }
});
