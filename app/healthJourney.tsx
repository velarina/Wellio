import MissionPopup from "@/components/MissionPopup";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width, height } = Dimensions.get("window");

const circles = [
  {
    day: 1,
    top: 0.82,
    left: 0.25,
    color: "#5B3FA3",
    mission: "Mulai perjalanan sehatmu hari ini!",
  },
  {
    day: 2,
    top: 0.72,
    left: 0.65,
    color: "#5B3FA3",
    mission: "Lakukan peregangan ringan selama 5 menit!",
  },
  {
    day: 3,
    top: 0.60,
    left: 0.35,
    color: "#5B3FA3",
    mission: "Berjalan 2000 langkah hari ini!",
  },
  {
    day: 4,
    top: 0.50,
    left: 0.55,
    color: "#5B3FA3",
    mission: "Minum 8 gelas air putih hari ini!",
  },
  {
    day: 5,
    top: 0.40,
    left: 0.75,
    color: "#5B3FA3",
    mission: "Tidur cukup selama 8 jam malam ini!",
  },
  {
    day: 6,
    top: 0.30,
    left: 0.40,
    color: "#5B3FA3",
    mission: "Luangkan waktu untuk meditasi 10 menit.",
  },
  {
    day: 7,
    top: 0.20,
    left: 0.55,
    color: "#FBBF24",
    mission: "Ayo berjalan 5000 langkah hari ini!",
  },
];

export default function HealthJourney() {
  const [selectedMission, setSelectedMission] = useState<string | null>(null);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Your Activities!</Text>

      <View style={styles.pathContainer}>
        {circles.map((circle) => (
          <TouchableOpacity
            key={circle.day}
            activeOpacity={0.8}
            style={[
              styles.circle,
              {
                backgroundColor: circle.color,
                top: height * circle.top,
                left: width * circle.left,
              },
            ]}
            onPress={() => setSelectedMission(circle.mission)}
          >
            <Image
              source={
                circle.day === 7
                  ? require("../assets/images/starYellow.png")
                  : require("../assets/images/starPurple.png")
              }
              style={styles.star}
            />
            <Text style={styles.dayText}>Day {circle.day}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <MissionPopup
        visible={!!selectedMission}
        missionText={selectedMission || ""}
        onClose={() => setSelectedMission(null)}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: height * 1.3,
    backgroundColor: "#F9F6FB",
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 60,
  },
  header: {
    fontSize: 24,
    fontWeight: "700",
    color: "#3E2F5B",
    marginBottom: 20,
  },
  pathContainer: {
    width: width,
    height: height * 1.1,
    position: "relative",
  },
  circle: {
    position: "absolute",
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },
  star: {
    width: 45,
    height: 45,
    resizeMode: "contain",
  },
  dayText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "700",
    marginTop: 3,
  },
});
