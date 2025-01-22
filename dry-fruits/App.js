import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Linking,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const supportedURL = 'https://wa.me/message/HMID6FGAWH75B1';

const OpenURLButton = ({ url, children }) => {
  const handlePress = async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      alert(`Unable to open this URL: ${url}`);
    }
  };

  return (
    <TouchableOpacity style={styles.buttonWithIcon} onPress={handlePress}>
      <Icon name="whatsapp" size={20} color="#25D366" style={styles.icon} />
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

export default function App() {
  return (
    <ScrollView style={styles.container}>
     
      

      <View style={styles.header}>
        <Text style={styles.companyName}>Nutsified</Text>
        <Image
          source={{ uri: 'https://i.ibb.co/KsztxWq/logo1.png' }}
          style={styles.logo}
        />
      </View>
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Product</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Press Here</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Image
          source={{
            uri: 'https://i.ibb.co/SyKVC8M/about-img.jpg',
          }}
          style={styles.bannerImage}
        />
        <Text style={styles.title}>Premium Quality Dry Fruits</Text>
        <Text style={styles.subtitle}>
          100% Natural and Organic Dry Fruits directly from the best sources. Experience the richness of nature.
        </Text>
      </View>

      <View style={styles.productsSection}>
        <Text style={styles.sectionTitle}>Featured Products</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.productCard}>
            <Image
              source={{ uri: 'https://i.ibb.co/cXyK1xN/almonds.jpg' }}
              style={styles.productImage}
            />
            <Text style={styles.productName}>Almonds</Text>
            <Text style={styles.productPrice}>$10.00 / 250g</Text>
          </View>
          <View style={styles.productCard}>
            <Image
              source={{ uri: 'https://i.ibb.co/nMpDZrC/cashews.jpg' }}
              style={styles.productImage}
            />
            <Text style={styles.productName}>Cashews</Text>
            <Text style={styles.productPrice}>$12.00 / 250g</Text>
          </View>
          <View style={styles.productCard}>
            <Image
              source={{ uri: 'https://i.ibb.co/L5sMVFx/walnuts.jpg' }}
              style={styles.productImage}
            />
            <Text style={styles.productName}>Walnuts</Text>
            <Text style={styles.productPrice}>$15.00 / 250g</Text>
          </View>
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>ABOUT US</Text>
        <Text style={styles.text}>
          At Dry Fruits Land, we are committed to bringing you the highest quality dry fruits. Our journey began with a
          passion for health and wellness, and today we pride ourselves on delivering products that are nutritious,
          delicious, and sustainable.
        </Text>
        <Image
          source={{ uri: 'https://i.ibb.co/SyKVC8M/about-img.jpg' }}
          style={styles.aboutImage}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>CONTACT</Text>
        <Text style={styles.text}>For inquiries or bulk orders, reach out to us:</Text>
        <TextInput
          style={styles.input}
          placeholder="Your Email Address"
          keyboardType="email-address"
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <OpenURLButton url={supportedURL}>Order On WhatsApp</OpenURLButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  homeSection: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  homeSubtitle: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  header: {
    backgroundColor: '#af3e76',
    padding: 20,
    alignItems: 'center',
  },
  companyName: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 35,
  },
  navButton: {
    backgroundColor: '#e39191',
    padding: 10,
    borderRadius: 10,
  },
  navButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  section: {
    padding: 20,
    alignItems: 'center',
  },
  bannerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  productsSection: {
    padding: 20,
    backgroundColor: '#de8cc9',
  },
  productCard: {
    backgroundColor: '#e39191',
    borderRadius: 23,
    marginRight: 15,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 29,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#85306f',
  },
  text: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  aboutImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  input: {
    width: '90%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#8B4513',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#25D366',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
  },
  icon: {
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
