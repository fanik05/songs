import { connect } from 'react-redux'

const SongDetail = ({ song }) => {
    if (!song) {
        return <h3>Select a song</h3>
    }

    return (
        <div>
            <h3>Details for:</h3>
            <p>
                Title: {song.title}
                <br />
                duration: {song.duration}
            </p>
        </div>
    )
}

const mapStateToProps = ({ selectedSong: song }) => ({ song })

export default connect(mapStateToProps)(SongDetail)