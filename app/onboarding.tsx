import React, { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
} from "react-native";
import Onboarding1 from "./OnboardingOne";
import Onboarding3 from "./OnboardingThree";
import Onboarding2 from "./OnboardingTwo";

const { width, height } = Dimensions.get("window");

const slides = [<Onboarding1 />, <Onboarding2 />, <Onboarding3 />];

export default function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = e.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / e.nativeEvent.layoutMeasurement.width);
    setCurrentIndex(index);
  };

  return (
    <View style={styles.wrapper}>
      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={({ item }) => (
          <View style={styles.slideContainer}>{item}</View>
        )}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScrollEnd}
        scrollEnabled={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#000", // fallback to prevent flicker between slides
  },
  slideContainer: {
    width,
    height,
    flex: 1,
  },
});
