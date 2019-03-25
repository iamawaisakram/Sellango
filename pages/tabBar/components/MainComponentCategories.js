import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

//Icons
import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SLIcon from 'react-native-vector-icons/SimpleLineIcons';
import FoundationIcon from 'react-native-vector-icons/Foundation';

//style
import styles from '../../../styles/TabBar';

export class MainComponentCategories extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.categories}>
        <View style={styles.categoriesTitleView}>
          <Text style={styles.categoriesTitle}>BROWSE POPULAR CATEGORIES</Text>
        </View>
        <View style={styles.categoriesRow}>
          <View style={styles.category}>
            <TouchableOpacity style={styles.iconViewAds}>
              <MCIcon name="home-assistant" size={40} color="#160c0b" />
            </TouchableOpacity>
            <Text style={styles.categoryText}>NEARBY ADS</Text>
          </View>
          <View style={styles.category}>
            <TouchableOpacity style={styles.iconViewMobile}>
              <SLIcon name="screen-smartphone" size={40} color="#160c0b" />
            </TouchableOpacity>
            <Text style={styles.categoryText}>MOBILES</Text>
          </View>
          <View style={styles.category}>
            <TouchableOpacity style={styles.iconViewVehicles}>
              <IonIcon name="md-car" size={40} color="#160c0b" />
            </TouchableOpacity>
            <Text style={styles.categoryText}>VEHICLES</Text>
          </View>
        </View>
        <View style={styles.categoriesRow}>
          <View style={styles.category}>
            <TouchableOpacity style={styles.iconViewProperty}>
              <FoundationIcon name="burst-sale" size={40} color="#160c0b" />
            </TouchableOpacity>
            <Text style={styles.categoryText}>PROPERTY FOR SALE</Text>
          </View>
          <View style={styles.category}>
            <TouchableOpacity style={styles.iconViewPropertyRent}>
              <Icon name="sellsy" size={40} color="#160c0b" />
            </TouchableOpacity>
            <Text style={styles.categoryText}>PROPERTY FOR RENT</Text>
          </View>
          <View style={styles.category}>
            <TouchableOpacity style={styles.iconViewElectronics}>
              <IonIcon name="md-laptop" size={40} color="#160c0b" />
            </TouchableOpacity>
            <Text style={styles.categoryText}>
              ELECTRONICS AND HOME APPLIANCES
            </Text>
          </View>
        </View>
        <View style={styles.categoriesRow}>
          <View style={styles.category}>
            <TouchableOpacity style={styles.iconViewBikes}>
              <Icon name="motorcycle" size={40} color="#160c0b" />
            </TouchableOpacity>
            <Text style={styles.categoryText}>BIKES</Text>
          </View>
          <View style={styles.category}>
            <TouchableOpacity style={styles.iconViewBusiness}>
              <MCIcon name="factory" size={40} color="#160c0b" />
            </TouchableOpacity>
            <Text style={styles.categoryText}>
              BUSINESS, INDUSTRIAL & AGRICULTURE
            </Text>
          </View>
          <View style={styles.category}>
            <TouchableOpacity style={styles.iconViewMore}>
              <IonIcon name="md-apps" size={40} color="#160c0b" />
            </TouchableOpacity>
            <Text style={styles.categoryText}>MORE CATEGORIES</Text>
          </View>
        </View>
      </View>
    );
  }
}
