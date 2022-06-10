import videos from "../data/videoList";
import PausePlayElements from "../elements/PausePlayElements";

const VideoListHeader = () => {
    return (
        <thead className="video-list-table-header">
        <tr className="video-list-table-header-row">
            <th className="video-list-table-header-state">#</th>
            <th className="video-list-table-header-title">title</th>
            <th className="video-list-table-header-type">type</th>
            <th className="video-list-table-header-duration">duration</th>
        </tr>
        </thead>
    );
};

const VideoListItem = ({item}) => {
    return (
        <tr className="video-list-table-body-row">
            <td className="video-list-table-body-state">
            <PausePlayElements/>
            </td>
            <td className="video-list-table-body-title-value">{item.title}</td>
            <td className="video-list-table-body-type-value">{item.type}</td>
            <td className="video-list-table-body-duration-value">{item.duration}</td>
        </tr>
    );
};

const VideoListItems = ({items}) => {
    return (
        <div className="video-table-list-body-container">
            <tbody className="video-list-table-body">
            {items.map((item) => (
                <VideoListItem key={item.id} item={item}/>
            ))}
            </tbody>
        </div>
    );
};

const VideoListContainer = () => {
    return (
        <div className="video-list-section-container">
            <table className="video-list-table">
                <VideoListHeader/>
                <VideoListItems items={videos}/>
            </table>
        </div>
    );
};

export default VideoListContainer;