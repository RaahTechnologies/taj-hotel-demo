import {
  Alert,
  Dimensions,
  Image,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import Section from '../components/Section';
import Socials from '../components/Socials';
import {Controller, useForm} from 'react-hook-form';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import KhazanaLogo from './../assets/taj-khazana-logo.png';

type LoginFormData = {
  username: string;
  password: string;
};

type FetchUserInfoProps = {
  user_id: string;
  company_id: string;
  division_id: string;
  session_id: string;
};

const {width: screenWidth, height: screenHeight} = Dimensions.get('screen');

const persistData = async (dataTitle: string, data: string) => {
  try {
    await AsyncStorage.setItem(dataTitle, data);
  } catch (err) {
    let errMessage = 'Unknown Error';
    if (err instanceof Error) errMessage = err.message;

    Alert.alert('Taj Khazana', `${errMessage}`);
  }
};

const fetchUserInfo = async ({
  user_id,
  company_id,
  division_id,
  session_id,
}: FetchUserInfoProps) => {
  const url =
    'http://scheduler.fcaintegral.com:9702/FWConfigurationService.SVC/Display_UserInfo';

  const body = {
    ID: user_id,
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        apikey: '79e10aef-856a-4b02-abfc-5a04163d25fb',
        user_id: user_id,
        user_type: '0',
        company_id: company_id,
        division_id: division_id,
        session_id: session_id,
        Host: 'scheduler.fcaintegral.com:9702',
      },
      body: JSON.stringify(body),
    });

    const responseData = await response.json();

    const stringifyData = JSON.stringify(responseData);

    persistData('userInfo', stringifyData);
  } catch (err: unknown) {
    let errMessage = 'Unknown Error';
    if (err instanceof Error && err.message) errMessage = err.message;

    Alert.alert('Taj Khazana', `${errMessage}`);
  }
};

export default function LoginPage({navigation}) {
  const [isLoading, setIsLoading] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';
  // const dispatch = useAppDispatch();

  const {
    handleSubmit,
    control,
    reset,
    formState: {errors},
  } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    const url =
      'http://scheduler.fcaintegral.com:9702/FWDataService.SVC/LoginUser';

    const body = {
      userName: data.username,
      userPassword: data.password,
      machineIndentificationName: 'DESKTOP-CBN2F1J',
      applicationInstanceID: 'b39ea39b-2377-4e2f-b143-70bcb071a778',
      clientType: 0,
    };

    try {
      Keyboard.dismiss();
      setIsLoading(true);

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          apikey: '79e10aef-856a-4b02-abfc-5a04163d25fb',
          Host: 'scheduler.fcaintegral.com:9702',
        },
        body: JSON.stringify(body),
      });

      const responseData = await response.json();

      const jsonDataTable = await JSON.parse(responseData.JsonDataTable);

      const user_id = jsonDataTable.ID;
      const company_id = jsonDataTable.DefCompany.id;
      const division_id = jsonDataTable.Division.id;
      const session_id = jsonDataTable.DataServiceSessionID;

      await fetchUserInfo({user_id, company_id, division_id, session_id});

      if (
        responseData &&
        responseData.Message !== '' &&
        responseData.ReturnCode !== 8000
      ) {
        // reset();
        throw new Error(responseData.Message);
      } else {
        const stringifyData = JSON.stringify(responseData);

        persistData('loginCredentials', stringifyData);

        navigation.replace('Navigation');
      }
    } catch (err: unknown) {
      let errMessage = 'Unknown Error';
      if (err instanceof Error && err.message) errMessage = err.message;

      Alert.alert('Taj Khazana', `${errMessage}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={{
        backgroundColor: isDarkMode ? Colors.black : Colors.white,
        flex: 1,
      }}>
      <View
        style={{
          width: '100%',
          justifyContent: 'flex-start',
          marginLeft: 8,
          marginTop: 8,
        }}>
        <Image
          source={{
            uri: 'https://cdn.sanity.io/images/ocl5w36p/production/4eeaf5b2669e2f360ea72bed30fbc7cbdfb3a2a4-67x59.png',
          }}
          style={styles.tajLogoImage}
        />
      </View>

      <View style={styles.logoContainer}>
        <Image
          source={require('./../assets/taj-khazana-logo.png')}
          style={styles.logoImage}
        />
      </View>

      <View
        style={{
          flex: 1,
          width: '100%',
        }}>
        <Section title="Login">
          <View style={styles.inner}>
            <View style={styles.textFields}>
              <Controller
                name="username"
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                  <CustomTextInput
                    placeholder="Username"
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    error={errors.username}
                  />
                )}
                rules={{
                  required: {
                    value: true,
                    message: 'Username is required',
                  },
                }}
              />
              <Controller
                name="password"
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                  <CustomTextInput
                    placeholder="Password"
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    secureTextEntry={true}
                    error={errors.password}
                  />
                )}
                rules={{
                  required: {
                    value: true,
                    message: 'Password is required',
                  },
                }}
              />
            </View>
            <View style={styles.loginButton}>
              <CustomButton
                title="Sign In"
                onPress={handleSubmit(onSubmit)}
                isLoading={isLoading}
              />
            </View>
          </View>
          {/* </TouchableWithoutFeedback>
            </KeyboardAvoidingView> */}
        </Section>
      </View>

      <View style={styles.social}>
        <Socials />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logoImage: {
    width: 0.55 * screenWidth,
    height: 0.5 * screenWidth,
    objectFit: 'contain',
  },
  tajLogoImage: {
    width: 0.18 * screenWidth,
    height: 0.18 * screenWidth,
    objectFit: 'contain',
  },
  container: {
    flex: 1,
    width: '100%',
  },
  inner: {
    padding: 24,
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textFields: {
    gap: 36,
    marginBottom: 36,
  },
  loginButton: {
    flex: 1,
    marginTop: 36,
  },
  social: {
    marginVertical: 36,
  },
});
