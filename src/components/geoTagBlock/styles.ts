import {StyleSheet} from 'react-native';
import { IGeoTagBlockStyle } from '../../helpers/ts-helpers/interfaces';

const styles = StyleSheet.create<IGeoTagBlockStyle>({
    defaultInputStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        height: 40,
        marginTop: 10,
        paddingHorizontal: 10,
        color: 'rgb(44,44,46) ',
      },
      selectedInputStyle: (isInEditMode: boolean) => ({
        backgroundColor: isInEditMode ? 'rgba(236, 240, 241, 0.5)' : 'white',
      }),
      textStyle: {
        alignItems: 'center',
        fontSize: 13,
        margin: 10,
      },
      iconStyle: {
        flex: 1,
        marginRight: 'auto',
        alignItems: 'flex-end',
      },
});

export default styles;