import { DeviceEventEmitter, NativeAppEventEmitter, Platform } from 'react-native';
import timer from 'react-native-timer';
import BackgroundTimer from 'react-native-background-timer';
import { updateActionCount } from '../redux/actions/action';
import { getReduxStore } from '../redux/getState';
class BackgrountTimer {
    timer = null;

    constructor() {
    }
    startTimer = async (dispatch, navigation) => {
        console.log({ dispatch, navigation })

        if (Platform.OS == 'android') {
            await BackgroundTimer.runBackgroundTimer(() => {
                let currentState = getReduxStore();
                let count = currentState.authReducer.actionTime + 3;
                console.log({ count });
                if (count > 1500) {
                    dispatch(updateActionCount(0))
                    navigation.navigate('Auth');
                    return;
                }
                dispatch(updateActionCount(count))
            }, 3000);
        } else {
            await BackgroundTimer.start();
            this.timer = BackgroundTimer.setInterval(() => {
                let currentState = getReduxStore();
                let count = currentState.authReducer.actionTime + 3;
                console.log({ count });
                if (count > 150) {
                    dispatch(updateActionCount(0))
                    navigation.navigate('Auth');
                    return;
                }
                dispatch(updateActionCount(count))
            }, 3000);
        }
    }
    stopTimer = async () => {
        console.log('stopTimer======')
        if (Platform.OS == 'android') {
            await BackgroundTimer.stopBackgroundTimer();
        }
        if (this.timer) {
            await BackgroundTimer.clearInterval(this.timer)
        }
        await BackgroundTimer.stop()
    }

}
export default new BackgrountTimer();