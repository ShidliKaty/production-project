import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router/intex';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';


import './styles/index.scss'
import { Navbar } from 'widgets/Navbar';


const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <button onClick={toggleTheme}>Toggle theme</button>
            <AppRouter/>
        </div>
    );
};

export default App;