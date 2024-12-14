import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

export default class Tesla extends Component {
  render() {

    return (

      <ScrollView style={{ backgroundColor: 'black' }} showsVerticalScrollIndicator={false}>

        <Image
          source={require('../Assets/logo.png')}
          style={{ height: 300, width: '100%' }}
        />

        <Text style={{
          textAlign: 'center',
          marginTop: 10,
          fontSize: 20,
          color: '#008080',
          fontWeight: 'bold',

        }}>
          Tesla Brand Company
        </Text>


        <Text style={{
          marginTop: 10,
          fontSize: 16,
          color: 'white',
          marginLeft: 5

        }}>
          Elon Musk is the CEO of Tesla, Inc., an electric vehicle (EV) and clean energy company.
          Tesla was founded in 2003 with a mission to accelerate the world's transition to sustainable energy.
          The company is known for producing electric cars, such as the Model S, Model 3, Model X, and Model Y,
          as well as energy storage solutions like the Powerwall and Powerpack, and solar products through SolarCity (now Tesla Solar).
          Tesla is also involved in advancing autonomous driving technology through its Autopilot feature and developing new battery technologies.
        </Text>

        <Image source={require('../Assets/Elon-musk.png')} style={{
          height: 330, width: '100%',
          marginTop: 10
        }} />





        <Text style={styles.headerText}>
          Tesla Model X:
        </Text>

        <Text style={styles.specText}>Price: Starts at $77,990</Text>
        <Text style={styles.specText}>Range: Up to 348 miles (Dual Motor model)</Text>
        <Text style={styles.specText}>Performance: 0-60 mph in 2.5 seconds (Plaid model)</Text>
        <Text style={styles.specText}>Top Speed: 155 mph</Text>
        <Text style={styles.specText}>Features: Dual motor all-wheel drive, spacious interior with up to seven seats, Falcon Wing doors, Autopilot.</Text>



        <Image
          source={require('../Assets/tesla.png')}
          style={{ height: 200, width: '100%' }}
        />


        <Text style={styles.headerText}>
          Tesla Model Y:
        </Text>

        <Text style={styles.specText}>Price: Starts at $42,990</Text>
        <Text style={styles.specText}>Range: Up to 318 miles (Long Range model)</Text>
        <Text style={styles.specText}>Performance: 0-60 mph in 3.5 seconds (Performance model)</Text>
        <Text style={styles.specText}>Top Speed: 155 mph</Text>
        <Text style={styles.specText}>Features: Dual motor all-wheel drive, Autopilot, optional third-row seating for seven passengers.</Text>

        <Image
          source={require('../Assets/tesla2.png')}
          style={{ height: 200, width: '100%' }}
        />



        <Text style={{
          marginTop: 10,
          fontSize: 16,
          color: 'white',
          marginLeft: 5

        }}>
          Being a larger vehicle, the Model X has more passenger space than the Model Y. In the front row, this means an extra 0.7 inch of head room and 4.3 inches of shoulder room in the Model X. However, the Model Y offers more front-row legroom by 0.6 inch.

          It's a similar situation in the second row. The taller, longer Model X offers an extra 1.5 inch of head room over the Model Y and 2.8 inches of extra shoulder room. Here again, the Model Y offers more second-row legroom, an extra 2.1 inches compared to the Model X.

          The extra legroom in the first and second rows come at a price for the Model Y's third row, which is really only large enough for children. The Model X's third row is already a tight fit for adults, with two fewer inches of head room than the Model Y's already pinched second row.
        </Text>


        <Image source={require('../Assets/car1.png')} style={{
          height: 200, width: '50%',
          marginTop: 10

        }} />

        <Image source={require('../Assets/car2.png')} style={{
          height: 200, width: '50%',
          marginTop: -190,
          marginLeft: 200
        }} />

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Company')} style={styles.Next}>
          <Text style={styles.NextText}>Next</Text>

        </TouchableOpacity>


      </ScrollView>

    );

  }
}
const styles = {
  headerText: {
    fontSize: 20,
    color: '#00bfff',
    marginTop: 10,
    marginLeft: 5,
    fontWeight: '900',

  },
  specText: {
    fontSize: 16,
    color: 'white',
    marginTop: 5,
    marginLeft: 5,
    marginBottom: 5,
  },
  Next: {

    height: 40,
    width: 360,
    backgroundColor: '#696969',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  NextText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center'
  },

};