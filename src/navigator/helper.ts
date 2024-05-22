import {StackScreenProps} from '@react-navigation/stack';

export type MainStackParamList = {
  SignUp: undefined;
  Welcome: undefined;
};

export type MainScreenProps = StackScreenProps<MainStackParamList>;
export type MainScreenPropsNavigate = MainScreenProps['navigation'];
