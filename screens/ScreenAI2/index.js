import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";

const AuctionScreen = () => {
  const [bidAmount, setBidAmount] = useState("");
  const [isWinningBid, setIsWinningBid] = useState(false);

  const handleBidSubmit = () => {// Handle bid submission logic here
  };

  const handleWithdrawBid = () => {// Handle withdraw bid logic here
  };

  return <View style={styles.container}>
      <View style={styles.jewelryInfoContainer}>
        <Image source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} style={styles.jewelryImage} />
        <View style={styles.jewelryDetailsContainer}>
          <Text style={styles.jewelryName}>Diamond Necklace</Text>
          <Text style={styles.currentBid}>Current Bid: $5000</Text>
        </View>
      </View>
      <View style={styles.bidContainer}>
        <Text style={styles.bidLabel}>Enter Bid Amount (USD)</Text>
        <TextInput style={[styles.bidInput, styles.UOuvQBIo]} value={bidAmount} onChangeText={setBidAmount} keyboardType="numeric" />
        <TouchableOpacity style={styles.submitBidButton} onPress={handleBidSubmit}>
          <Text style={styles.submitBidButtonText}>Submit Bid</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.withdrawBidButton} onPress={handleWithdrawBid}>
          <Text style={styles.withdrawBidButtonText}>Withdraw Bid</Text>
        </TouchableOpacity>
        {isWinningBid && <Image source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} style={styles.winningBidIcon} />}
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  jewelryInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30
  },
  jewelryImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20
  },
  jewelryDetailsContainer: {
    flex: 1
  },
  jewelryName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10
  },
  currentBid: {
    fontSize: 18,
    color: "#888"
  },
  bidContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  bidLabel: {
    fontSize: 18,
    marginBottom: 10
  },
  bidInput: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 18
  },
  submitBidButton: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10
  },
  submitBidButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  },
  withdrawBidButton: {
    backgroundColor: "#FF3B30",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5
  },
  withdrawBidButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  },
  winningBidIcon: {
    width: 50,
    height: 50,
    marginTop: 20
  },
  UOuvQBIo: {
    width: "50%"
  }
});
export default AuctionScreen;