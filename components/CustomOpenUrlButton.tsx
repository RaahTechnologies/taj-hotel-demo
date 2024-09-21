import {useCallback, Children, PropsWithChildren} from 'react';
import {Linking, Alert, Button, Pressable} from 'react-native';

type OpenURLButtonProps = {
  title?: string;
  url: string;
};

export const CustomOpenUrlButton = ({
  url,
  title = '',
  children,
}: PropsWithChildren<OpenURLButtonProps>) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    // const supported = await Linking.canOpenURL(url);

    // if (supported) {
    // Opening the link with some app, if the URL scheme is "http" the web link should be opened by some browser in the mobile
    await Linking.openURL(url);
    // } else {
    //   Alert.alert(`Can't open this URL: ${url}`);
    // }
  }, [url]);

  return <Pressable onPress={handlePress}>{children}</Pressable>;
};
