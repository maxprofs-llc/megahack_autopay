import { createStackNavigator } from 'react-navigation';

//pages
import MainMenuPage from 'app/Pages/MainMenu.page';
import AutoPayPage from 'app/Pages/AutoPay.page';
import WebViewGamePage from 'app/Pages/WebViewGame.page';
import GamePage from 'app/Pages/Game.page';
import ResultPage from 'app/Pages/Result.page';

const UserScriptNavigation = createStackNavigator({
    MainMenu: { screen: MainMenuPage },
    AutoPay: { screen: AutoPayPage },
    WebViewGame: { screen: WebViewGamePage },
    Game : { screen: GamePage },
    Result: { screen: ResultPage }
}, {
    initialRouteName: 'MainMenu'
});

export default UserScriptNavigation;