import { createStackNavigator } from 'react-navigation';

//pages
import MainMenuPage from 'app/Pages/MainMenu.page';

const UserScriptNavigation = createStackNavigator({
    MainMenu: { screen: MainMenuPage }
}, {
    initialRouteName: 'MainMenu'
});

export default UserScriptNavigation;