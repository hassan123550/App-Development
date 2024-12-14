import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

export default class Tesla extends Component {
    render() {
        return (
            <ScrollView style={{ backgroundColor: 'black' }} showsVerticalScrollIndicator={false}>

                {/* Main Image */}
                <Image
                    source={require('../Assets/x7.png')}
                    style={{ height: 200, width: '100%' }}
                />

                {/* Title */}
                <Text style={styles.titleText}>
                    Tesla: The Innovator in Electric Vehicles
                </Text>

                {/* Company Overview */}
                <Text style={styles.descriptionText}>
                    Tesla, Inc. is an American electric vehicle (EV) and clean energy company, founded in 2003 by engineers Martin Eberhard and Marc Tarpenning.
                    Under the leadership of Elon Musk, Tesla has revolutionized the electric vehicle industry with its cutting-edge technology, impressive performance, and sleek designs.
                    Tesla's mission is to accelerate the world's transition to sustainable energy.
                </Text>

                {/* Tesla Cars & Trucks Section */}
                <Text style={styles.headerText}>Tesla Vehicle Lineup</Text>

                {/* Cybertruck */}
                <Text style={styles.carTitleText}>Cybertruck</Text>
                <Text style={styles.specText}>Price: Starting at $39,900</Text>
                <Text style={styles.specText}>
                    The Tesla Cybertruck is a revolutionary all-electric pickup truck that combines durability, utility, and performance. 
                    It features a stainless steel body, bulletproof windows, and Tesla's advanced electric drivetrain.
                </Text>
                <Image source={require('../Assets/x2.png')} style={styles.carImage} />

                {/* Model S */}
                <Text style={styles.carTitleText}>Model S</Text>
                <Text style={styles.specText}>Price: Starting at $94,990</Text>
                <Text style={styles.specText}>
                    The Model S is a luxury all-electric sedan known for its performance and long range. It boasts impressive acceleration, handling, and a high-end interior.
                </Text>
                <Image source={require('../Assets/x5.png')} style={styles.carImage} />

                {/* Model 3 */}
                <Text style={styles.carTitleText}>Model 3</Text>
                <Text style={styles.specText}>Price: Starting at $39,990</Text>
                <Text style={styles.specText}>
                    The Model 3 is Tesla's affordable electric sedan, offering exceptional range and performance with a minimalist interior. It's the best-selling EV in many markets.
                </Text>
                <Image source={require('../Assets/x4.png')} style={styles.carImage} />

                {/* Model X */}
                <Text style={styles.carTitleText}>Model X</Text>
                <Text style={styles.specText}>Price: Starting at $109,990</Text>
                <Text style={styles.specText}>
                    The Model X is Tesla’s all-electric SUV with distinctive falcon-wing doors. It provides performance, safety, and a spacious interior for up to seven passengers.
                </Text>
                <Image source={require('../Assets/x3.png')} style={styles.carImage} />

                {/* Model Y */}
                <Text style={styles.carTitleText}>Model Y</Text>
                <Text style={styles.specText}>Price: Starting at $49,990</Text>
                <Text style={styles.specText}>
                    The Model Y is a versatile electric SUV with the capacity to seat up to seven passengers. It shares many components with the Model 3 but offers more space and utility.
                </Text>
                <Image source={require('../Assets/x6.png')} style={styles.carImage} />

                {/* Additional Tesla Details */}
                <Text style={styles.headerText}>Why Choose Tesla?</Text>
                <Text style={styles.specText}>
                    Tesla’s vehicles offer state-of-the-art technology, excellent range, impressive acceleration, and an unparalleled driving experience. 
                    Tesla is not only known for its electric vehicles but also for its advancements in self-driving technology, energy storage solutions, and solar products.
                </Text>

                {/* Reviews Section */}
                <Text style={styles.headerText}>Tesla Reviews</Text>

                <Text style={styles.reviewTitle}>User Reviews for Tesla Cybertruck</Text>
                <View style={styles.reviewBox}>
                    <Text style={styles.reviewText}>“The Cybertruck is a game-changer! The design is unique, and the performance is unmatched in the electric pickup truck market. I can’t wait to get my hands on one!” – John D.</Text>
                    <Text style={styles.reviewText}>“It looks like something straight out of a science fiction movie! Definitely excited about its durability and performance specs.” – Sarah W.</Text>
                </View>

                <Text style={styles.reviewTitle}>User Reviews for Model S</Text>
                <View style={styles.reviewBox}>
                    <Text style={styles.reviewText}>“Tesla's Model S has completely changed the way I think about electric cars. It’s fast, luxurious, and the range is incredible.” – Mark T.</Text>
                    <Text style={styles.reviewText}>“I have never experienced acceleration like this before. It's an absolute joy to drive, and the autopilot feature is amazing!” – Emily L.</Text>
                </View>

                <Text style={styles.reviewTitle}>User Reviews for Model 3</Text>
                <View style={styles.reviewBox}>
                    <Text style={styles.reviewText}>“The Model 3 is the perfect blend of affordability, performance, and tech. It’s the best value EV on the market!” – Kevin P.</Text>
                    <Text style={styles.reviewText}>“Smooth drive and great range. The interior is minimalist, but everything works perfectly.” – Jessica K.</Text>
                </View>

                <Text style={styles.reviewTitle}>User Reviews for Model X</Text>
                <View style={styles.reviewBox}>
                    <Text style={styles.reviewText}>“The Model X is an amazing SUV. I love the falcon-wing doors, and it's spacious without compromising performance.” – David C.</Text>
                    <Text style={styles.reviewText}>“It’s a fantastic vehicle for families. The range and safety features make it one of the best choices in its category.” – Lucy B.</Text>
                </View>

                <Text style={styles.reviewTitle}>User Reviews for Model Y</Text>
                <View style={styles.reviewBox}>
                    <Text style={styles.reviewText}>“I love the versatility of the Model Y. It offers the best of both worlds: space and performance.” – George H.</Text>
                    <Text style={styles.reviewText}>“Perfect family car with Tesla’s performance and all the latest tech features. Highly recommend it.” – Natalie J.</Text>
                </View>

                {/* Back Button */}
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Tesla')} style={styles.Back}>
                    <Text style={styles.BackText}>Go Back</Text>
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
        color: 'white',
        fontWeight: 'bold',
    },
    descriptionText: {
        marginTop: 10,
        fontSize: 16,
        color: '#b0e0e6',
        marginLeft: 5,
        marginRight: 5, // Added to ensure text doesn't touch screen edges
    },
    headerText: {
        fontSize: 20,
        color: '#dcdcdc',
        marginTop: 20,
        marginLeft: 5,
        fontWeight: '900',
    },
    carTitleText: {
        fontSize: 18,
        color: '#fff',
        marginTop: 20,
        marginLeft: 5,
        fontWeight: '700',
    },
    specText: {
        fontSize: 16,
        color: '#b0e0e6',
        marginTop: 5,
        marginLeft: 5,
        marginBottom: 5,
        marginRight: 5,  // Added margin to prevent text from touching screen edges
    },
    carImage: {
        height: 200,
        width: '100%',
        marginTop: 10,
    },
    reviewTitle: {
        fontSize: 18,
        color: '#fff',
        marginTop: 20,
        marginLeft: 5,
        fontWeight: '700',
    },
    reviewBox: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#333',
        borderRadius: 5,
    },
    reviewText: {
        fontSize: 14,
        color: '#b0e0e6',
        marginTop: 5,
        marginBottom: 5,
    },
    Back: {
        height: 40,
        width: 360,
        backgroundColor: '#20b2aa',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    BackText: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
    },
});
