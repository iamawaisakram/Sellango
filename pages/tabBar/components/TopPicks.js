import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

//icon
import Icon from 'react-native-vector-icons/FontAwesome';

//style
import styles from '../../../styles/TabBar';

export class TopPicks extends Component {
  constructor(props) {
    super(props);
    this.state = { array: [1, 2, 3] };
  }
  render() {
    return (
      <View style={styles.popularAds}>
        <View style={styles.popularAdsTitle}>
          <Text style={styles.popularAdsTitleText}>TOP PICKS FOR YOU</Text>
        </View>
        {this.state.array.map((a, index) => {
          return (
            <View style={styles.topPicks} key={index}>
              <View style={styles.ad}>
                <View style={styles.innerContainer}>
                  <Image
                    source={require('../../../assets/sallengo.png')}
                    style={styles.adPicture}
                  />
                  <View style={styles.priceAndFavourite}>
                    <Text style={styles.price}>Rs 6,000</Text>
                    <Icon name="heart-o" size={16} color="#219DF5" />
                  </View>
                  <View style={styles.description}>
                    <Text style={styles.descriptionText}>
                      Boys Students Hostel
                    </Text>
                  </View>
                  <View style={styles.productLocation}>
                    <Icon name="map-pin" size={16} color="#219DF5" />
                    <Text style={styles.location}>DEFENCE ROAD, LAHORE</Text>
                  </View>
                </View>
              </View>
              <View style={styles.ad}>
                <View style={styles.innerContainer}>
                  <Image
                    source={require('../../../assets/sallengo.png')}
                    style={styles.adPicture}
                  />
                  <View style={styles.priceAndFavourite}>
                    <Text style={styles.price}>Rs 6,000</Text>
                    <Icon name="heart-o" size={16} color="#219DF5" />
                  </View>
                  <View style={styles.description}>
                    <Text style={styles.descriptionText}>
                      Boys Students Hostel
                    </Text>
                  </View>
                  <View style={styles.productLocation}>
                    <Icon name="map-pin" size={16} color="#219DF5" />
                    <Text style={styles.location}>DEFENCE ROAD, LAHORE</Text>
                  </View>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    );
  }
}
