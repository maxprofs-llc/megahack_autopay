import { createStackNavigator } from 'react-navigation';

//pages
import MainMenuPage from 'app/Pages/MainMenu.page';
import AutoPayPage from 'app/Pages/AutoPay.page';
import WebViewGamePage from 'app/Pages/WebViewGame.page';

const UserScriptNavigation = createStackNavigator({
    MainMenu: { screen: MainMenuPage },
    AutoPay: { screen: AutoPayPage },
    WebViewGame: { screen: WebViewGamePage }
}, {
    initialRouteName: 'WebViewGame'
});

export default UserScriptNavigation;