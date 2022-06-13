import React, {useState, useEffect} from "react";

import PreLoadingPage from "./PreLoadingPage";
import LeftSideContainer from "./LeftSideContainer";
import MiddleSideContainer from "./MiddleSideContainer";
import RightSideContainer from "./RightSideContainer";

const App = () => {
        const [spinner, setSpinner] = useState(true);

        useEffect(() => {
            const spinnerTimeout = setTimeout(() => setSpinner(false), 2500)
            return () => clearInterval(spinnerTimeout);
        }, []);

        if (spinner) {
            return (
                <PreLoadingPage/>
            )
        } else return (
            <>
                <main className="App">
                    <LeftSideContainer/>
                    <MiddleSideContainer/>
                    <RightSideContainer/>
                </main>
            </>
        )
    };

export default App;

