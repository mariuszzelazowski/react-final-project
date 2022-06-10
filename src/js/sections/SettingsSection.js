import SectionTitle from "../elements/SectionTitle";
import SettingsOptions from "./SettingsOptions";

const SettingsSection = () => {
    const options = [
        {
            id: 1,
            label: "Pause the Video",
            buttonName: "PAUSE"
        },
        {
            id: 2,
            label: "Resume the Video",
            buttonName: "PLAY"
        },
        {
            id: 3,
            label: "Turn on the Volume",
            buttonName: "UNMUTE"
        },
        {
            id: 4,
            label: "Turn off the Volume",
            buttonName: "MUTE"
        },
        {
            id: 5,
            label: "Go to the Fullscreen",
            buttonName: "FULLSCREEN"
        },
        {
            id: 6,
            label: "Turn off the Video",
            buttonName: "DESTROY"
        }
    ];
    return (
        <div className="settings-section-container">
            <SectionTitle sectionTitle="settings"/>
            <SettingsOptions options={options} key={options.id}/>
            <div className="settings-section-tooltip-form-box">
                <form className="settings-section-tooltip-form" action="/action_page.php">
                    <input className="settings-section-tooltip-checkbox" type="checkbox" id="tooltips" name="tooltips"
                           value="tooltips"/>
                    <label className="settings-section-tooltip-title" htmlFor="tooltips">Show Tooltips</label>
                </form>
            </div>
        </div>
    );
};

export default SettingsSection;