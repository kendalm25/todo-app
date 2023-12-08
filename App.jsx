import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
  Pressable,
  TouchableOpacity,
  Animated,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const name = "Kendal";
const numProgressTasks = "12";

export default function App() {
  const [isCreateVisible, setCreateVisible] = useState(false);
  const slideInAnimation = new Animated.Value(windowHeight);

  const handleCreatePress = () => {
    setCreateVisible(true);
    Animated.timing(slideInAnimation, {
      toValue: windowHeight * 0.3, // Adjust to the desired height
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeCreateBlock = () => {
    Animated.timing(slideInAnimation, {
      toValue: windowHeight,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setCreateVisible(false));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.picAndName}>
          <View style={styles.picContainer}>
            <Image
              style={styles.profilePic}
              source={require("./assets/images/profile-pic.png")}
            />
          </View>
          <View style={styles.greeting}>
            <Text style={{ fontSize: 15, color: "gray" }}>Hello,</Text>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "black" }}>
              {name}
            </Text>
          </View>
        </View>
        <View style={styles.butttonContainer}>
          <TouchableOpacity>
            <AntDesign
              name="calendar"
              style={{ marginRight: 35 }}
              size={28}
              color="black"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign
              name="user"
              style={{
                marginRight: 10,
                borderWidth: 1,
                borderColor: "black",
                borderRadius: 14,
              }}
              size={28}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.tasksContainer}>
        <View style={styles.progressContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 16, fontWeight: "bold", padding: 4 }}>
                In Progress
              </Text>
              <Text style={{ fontSize: 16, color: "gray" }}>
                ({numProgressTasks})
              </Text>
            </View>
            <TouchableOpacity style={{ marginRight: 20 }}>
              <Text style={{ color: "#007AFF", textAlign: "right" }}>
                View More
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.progressContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 16, fontWeight: "bold", padding: 4 }}>
                Completed
              </Text>
            </View>
            <TouchableOpacity style={{ marginRight: 20 }}>
              <Text style={{ color: "#007AFF", textAlign: "right" }}>
                View More
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* <View style={styles.createContainer}> */}
      {/* Create New Button */}
      <TouchableOpacity style={styles.createBtn} onPress={handleCreatePress}>
        <Text style={{ color: "white" }}> + Create New</Text>
      </TouchableOpacity>

      {/* Animated Block */}
      {isCreateVisible && (
        <Animated.View
          style={[
            styles.createBlock,
            { transform: [{ translateY: slideInAnimation }] },
          ]}
        >
          {/* Content of the create block */}
          <TouchableOpacity onPress={closeCreateBlock}>
            <Text style={{ color: "white" }}>Close</Text>
          </TouchableOpacity>
        </Animated.View>
      )}
      {/* </View> */}

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    overflow: "hidden",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    width: windowWidth,
    justifyContent: "space-between",
    marginBottom: 15,
  },

  picAndName: {
    flexDirection: "row",
    alignItems: "center",
  },

  picContainer: {
    marginRight: 20,
  },

  profilePic: {
    height: 70,
    width: 70,
    resizeMode: "contain",
    borderWidth: 1,
    borderColor: "#EDC8FF",
    borderRadius: 35,
    backgroundColor: "#EDC8FF",
  },

  greeting: {
    flexDirection: "column",
    alignItems: "flex-start",
  },

  butttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    paddingRight: 10,
  },

  buttons: {
    padding: 10,
  },

  progressContainer: {
    marginTop: 20,
    width: windowWidth - 15,
    marginLeft: 15,
  },

  tasksContainer: {},

  createBtn: {
    backgroundColor: "#007AFF",
    width: windowWidth * 0.85,
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
  },

  createBlock: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    padding: 20,
    width: windowWidth * 0.9,
    height: windowHeight * 0.7, // Set the height to windowHeight
  },
});
