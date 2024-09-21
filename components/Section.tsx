import {Dimensions, StyleSheet, Text, useColorScheme, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const {width: screenWidth, height: screenHeight} = Dimensions.get('screen');

export default function Section({
  children,
  title,
}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>

      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    height: 0.4 * screenHeight,
    width: '100%',
    textAlign: 'center',
    padding: 16,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'center',
  },
  sectionChildren: {
    flex: 1,
  },
});
