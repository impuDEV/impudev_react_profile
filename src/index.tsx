import {render} from "react-dom";
import App from "app/App";
import {ThemeProvider} from "app/providers/ThemeProvider";
import {BrowserRouter} from "react-router-dom";
import { ErrorBoundary } from "app/providers/ErrorBoundary";

render (
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root')
)