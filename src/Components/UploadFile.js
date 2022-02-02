import { Button } from '@mui/material';
import React, {useState} from 'react';
import Alert from '@mui/material/Alert';
import MovieIcon from '@material-ui/icons/Movie';
import LinearProgress from '@mui/material/LinearProgress';

function UploadFile(){
    const[error, setError] = useState('');
    const[loading, setLoading] = useState(false);
    return(
        <div>
            {
                error != '' ? <Alert severity="error">{error}</Alert>  
                :
                <>
                    <label htmlFor = 'upload-input'>
                        <input id='upload-input' type='file' accept='video/*' hidden />
                        <Button 
                            variant='outlined'
                            color='secondary'
                            component='span'
                            disabled={loading}
                        >
                            <MovieIcon/>&nbsp;Upload
                        </Button>
                    </label>
                        {loading && <LinearProgress color="secondary" style={{marginTop:'2%'}} />}
                   
                </>
            }
        </div>
    )
}

export default UploadFile;