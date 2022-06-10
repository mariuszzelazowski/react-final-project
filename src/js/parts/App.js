import React, {useState, useEffect} from "react";
import Container from "./Container";
import PreLoadingPage from "./PreLoadingPage";


const App = () => {
        const [spinner, setSpinner] = useState(true);

        useEffect(() => {
            const spinnerTimeout = setTimeout(() => setSpinner(false), 2700)
            return () => clearInterval(spinnerTimeout);
        }, []);

        if (spinner) {
            return (
                <PreLoadingPage/>
            )
        } else return (
            <>
                <main className="App">
                    <Container/>
                </main>
            </>
        )
    };

export default App;

