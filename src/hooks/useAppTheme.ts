import { GlobalTheme } from '@src/styles/theme';
import { useTheme } from 'react-native-paper';

const useAppTheme = () => useTheme<GlobalTheme>();

export default useAppTheme;
