import { connect } from 'react-redux'
import { selectSong } from '../actions'

const SongList = ({ songs, selectSong }) => {
    const renderList = songs.map(song => {
        return (
            <div className="item" key={song.title}>
                <div className="right floated content">
                    <button
                        className="ui button primary"
                        onClick={() => selectSong(song)}
                    >
                        Select
                    </button>
                </div>
                <div className="content">{song.title}</div>
            </div>
        )
    })

    return <div className="ui divided list">{renderList}</div>
}

const mapStateToProps = ({ songs }) => ({ songs })

export default connect(mapStateToProps, { selectSong })(SongList)