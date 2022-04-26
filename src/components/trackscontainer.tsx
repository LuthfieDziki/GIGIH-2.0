import DateRangeIcon from '@mui/icons-material/DateRange';
import AlbumIcon from '@mui/icons-material/Album';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

export type Tracks = {
    imgSrc: string,
    title: string,
    artists: Array<{
        name: string,
        id: string,
    }>,
    album: string,
    releasedate: string,
    uri: string,
    handleSelect: (uri: string) => void,
    Selected: boolean,
}

const SongCard = ({imgSrc, title, artists,releasedate, album, Selected, handleSelect, uri }: Tracks) => {
    return (
    <div className="song-card">
        <div className="card-search">
                <img src={imgSrc} alt="" />
                <div className="song-title">
                    {/*ADD ICON WITH MATERIAL UI LIBRARY */}
                    <h1> <AlbumIcon /> Album : {album}</h1>
                    <h2> <PlayArrowIcon /> Title : {title}</h2>
                    <h2> Artist : {artists.map(artist => artist.name).join(', ')}</h2>
                    <h2> <DateRangeIcon /> Release Date : {releasedate}</h2>

                    {/* ADD NEW UI BUTTON FROM MUI 
                        RemoveCircleOutlineIcon (-) = DESELECT
                        AddCircleOutlineIcon (+)    = SELECT
                    */}
                    <Button onClick={() => handleSelect(uri)} variant="contained" color="success"> {Selected ? <RemoveCircleOutlineIcon/> : <AddCircleOutlineIcon/>} </Button> 
                    
                    {/* <button onClick={() => handleSelect(uri)}> {Selected ? 'Deselect' : 'Select'} </button> OLD BUTTON*/}
                </div>
        </div>
        </div>
    );
}
// shafasalsabilapribadi kmg2fe4040
export default SongCard;