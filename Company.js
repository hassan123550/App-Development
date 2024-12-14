import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

export default class Tesla extends Component {
    render() {
        return (
            <ScrollView style={{ backgroundColor: 'black' }} showsVerticalScrollIndicator={false}>
                
                {/* Main Image */}
                <Image
                    source={require('../Assets/truck.png')}
                    style={{ height: 300, width: '100%' }}
                />

                {/* Title */}
                <Text style={styles.titleText}>
                    Cyber Truck Brand Model
                </Text>

                {/* Description Text */}
                <Text style={styles.descriptionText}>
                    The Tesla Cybertruck is a highly anticipated electric pickup truck from Tesla, Inc.,
                    known for its futuristic design and impressive performance specifications.
                    Here’s an overview of its key features, strengths,
                    and some areas where it has received criticism:
                </Text>

                {/* Secondary Image */}
                <Image source={require('../Assets/truck1.png')} style={styles.secondaryImage} />

                {/* Design Section */}
                <Text style={styles.headerText}>
                    Design:
                </Text>
                <Text style={styles.specText}>
                    The Cybertruck features an unconventional, angular design with a stainless-steel body and a bulletproof exoskeleton.
                    This has made it a standout in the market, but the design has also been polarizing.
                </Text>

                {/* Design Image */}
                <Image
                    source={require('../Assets/truck2.png')}
                    style={styles.image}
                />

                {/* Performance Section */}
                <Text style={styles.headerText}>
                    Performance:
                </Text>
                <Text style={styles.specText}>
                    The Cybertruck comes in several configurations, with options for single, dual, or tri-motor setups.
                    The tri-motor variant boasts a 0-60 mph time of under 2.9 seconds, making it one of the fastest trucks available.
                </Text>
                <Text style={styles.specText}>
                    It has impressive towing capacity, with the top model capable of towing up to 14,000 pounds.
                </Text>
                <Text style={styles.specText}>
                    The vehicle also offers an estimated range of up to 500 miles on a single charge, depending on the model.
                </Text>
                <Text style={styles.specText}>
                    Price: Tesla has positioned the Cybertruck to be competitively priced, with the base model starting around $39,900 and the high-end tri-motor variant priced around $69,900.
                </Text>

                {/* Performance Image */}
                <Image
                    source={require('../Assets/truck3.png')}
                    style={styles.image}
                />

                {/* Features Summary */}
                <Text style={styles.summaryText}>
                    Innovative Design: The Cybertruck’s design is unique and bold, appealing to those looking for something different from traditional pickup trucks.
                    Performance: High acceleration, impressive towing capacity, and a long driving range make it a strong contender in the electric vehicle market.
                    Durability: The use of stainless steel and Tesla Armor Glass are intended to provide extra durability and a sense of security.
                    Overall, the Tesla Cybertruck represents a bold step forward in the electric vehicle and pickup truck markets. Its unique design, combined with Tesla’s strong focus on performance and technology, has generated significant interest, though it remains to be seen how it will perform in real-world conditions once widely released.
                </Text>

                {/* Images for final section */}
                <Image source={require('../Assets/truck4.png')} style={styles.finalImage} />
                <Image source={require('../Assets/truck5.png')} style={styles.finalImageOverlay} />
                <Image
                    source={require('../Assets/truck6.png')}
                    style={styles.image}
                />

                {/* Back Button */}
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Price')} style={styles.Back}>
                    <Text style={styles.BackText}>Reviews.......</Text>
                </TouchableOpacity>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    titleText: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 20,
        color: '#7fffd4',
        fontWeight: 'bold',
    },
    descriptionText: {
        marginTop: 10,
        fontSize: 16,
        color: '#b0e0e6',
        marginLeft: 5,
    },
    secondaryImage: {
        height: 330,
        width: '100%',
        marginTop: 10,
    },
    headerText: {
        fontSize: 20,
        color: '#dcdcdc',
        marginTop: 10,
        marginLeft: 5,
        fontWeight: '900',
    },
    specText: {
        fontSize: 16,
        color: '#b0e0e6',
        marginTop: 5,
        marginLeft: 5,
        marginBottom: 5,
    },
    image: {
        height: 200,
        width: '100%',
        marginTop: 10,
    },
    summaryText: {
        marginTop: 10,
        fontSize: 16,
        color: 'white',
        marginLeft: 5,
    },
    finalImage: {
        height: 200,
        width: '50%',
        marginTop: 10,
    },
    finalImageOverlay: {
        height: 190,
        width: '50%',
        marginTop: -190,
        marginLeft: 200,
    },
    Back: {
        height: 40,
        width: 150,
        borderRadius:10,
        backgroundColor: '#00bfff',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 100,
    },
    BackText: {
        fontSize:18,
        color: 'white',
        textAlign: 'center',
    },
});
