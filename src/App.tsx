import { Suspense, useState } from 'react';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { classNames } from './helpers/classNames';
import { AboutPageLazy } from './pages/AboutPage/AboutPageLazy';
import { MainPageLazy } from './pages/MainPage/MainPageLazy';

import './styles/index.scss'
import { useTheme } from './themeContext/useTheme';

const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div>...Loading</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageLazy/>}/>
                    <Route path={'/about'} element={<AboutPageLazy/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;