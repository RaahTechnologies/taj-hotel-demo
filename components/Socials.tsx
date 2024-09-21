import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {CustomOpenUrlButton} from './CustomOpenUrlButton';

const {width: screenWidth, height: screenHeight} = Dimensions.get('screen');

const urlList = {
  instagram: 'https://www.instagram.com/tajhotels',
  facebook: 'https://www.facebook.com/TajHotels/',
  linkedIn: 'https://www.linkedin.com/company/taj-hotels/',
  youtube: 'https://www.youtube.com/user/TajMovies',
};

export default function Socials() {
  return (
    <View>
      <Text style={styles.text}>Connect with us</Text>
      <View style={styles.container}>
        <CustomOpenUrlButton url={urlList.instagram}>
          <Svg
            height={0.04 * screenHeight}
            width={0.04 * screenHeight}
            viewBox="0 0 448 512"
            fill={'#ffffff'}>
            <Path d="M224 202.66A53.34 53.34 0 1 0 277.36 256 53.38 53.38 0 0 0 224 202.66Zm124.71-41a54 54 0 0 0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31 6.43a54 54 0 0 0-30.41 30.41c-8.28 21-6.43 71.05-6.43 94.33s-1.85 73.27 6.47 94.34a54 54 0 0 0 30.41 30.41c21 8.29 71 6.43 94.31 6.43s73.24 1.93 94.3-6.43a54 54 0 0 0 30.41-30.41c8.35-21 6.43-71.05 6.43-94.33s1.92-73.26-6.43-94.33ZM224 338a82 82 0 1 1 82-82 81.9 81.9 0 0 1-82 82Zm85.38-148.3a19.14 19.14 0 1 1 19.13-19.14 19.1 19.1 0 0 1-19.09 19.18ZM400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48Zm-17.12 290c-1.29 25.63-7.14 48.34-25.85 67s-41.4 24.63-67 25.85c-26.41 1.49-105.59 1.49-132 0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61 0-132 1.29-25.63 7.07-48.34 25.85-67s41.47-24.56 67-25.78c26.41-1.49 105.59-1.49 132 0 25.63 1.29 48.33 7.15 67 25.85s24.63 41.42 25.85 67.05c1.49 26.32 1.49 105.44 0 131.88Z" />
          </Svg>
        </CustomOpenUrlButton>
        <CustomOpenUrlButton url={urlList.facebook}>
          <Svg
            height={0.04 * screenHeight}
            width={0.04 * screenHeight}
            viewBox="0 0 448 512"
            fill={'#ffffff'}>
            <Path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></Path>
          </Svg>
        </CustomOpenUrlButton>
        <CustomOpenUrlButton url={urlList.linkedIn}>
          <Svg
            height={0.04 * screenHeight}
            width={0.04 * screenHeight}
            viewBox="0 0 448 512"
            fill={'#ffffff'}>
            <Path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></Path>
          </Svg>
        </CustomOpenUrlButton>
        <CustomOpenUrlButton url={urlList.youtube}>
          <Svg
            height={0.04 * screenHeight}
            width={0.04 * screenHeight}
            viewBox="0 0 576 512"
            fill={'#ffffff'}>
            <Path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></Path>
          </Svg>
        </CustomOpenUrlButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 0.06 * screenHeight,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#000000',
    marginHorizontal: 30,
    borderRadius: 6,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 6,
  },
});
