import './styles/index.scss'

import { classNames } from "shared/lib/classNames/classNames"
import { useTheme } from "./providers/ThemeProvider"
import {NavBar} from "widgets/NavBar";
import { AppRouter } from "./providers/router";
import { Suspense } from "react";
import { Header } from 'widgets/Header/ui/Header';

const App = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Header/>
                <NavBar/>
                <div className="content-page">
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    )
}

export default App