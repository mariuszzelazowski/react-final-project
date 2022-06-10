import LeftSideContainer from "./LeftSideContainer";
import MiddleSideContainer from "./MiddleSideContainer";
import RightSideContainer from "./RightSideContainer";

const Container = () => {
    return (
        <div className="container">
            <LeftSideContainer/>
            <MiddleSideContainer/>
            <RightSideContainer/>
        </div>
    );
};

export default Container;