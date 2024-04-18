import { LinearProgress, Skeleton, Stack } from '@mui/material'
import React, { useEffect } from 'react'
import { useAppSelector } from '../../store/store';

const Loading = () => {
    const loader = useAppSelector(state => state.loader);
    
    return (
        <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
            {loader.value === 0 ?
                <LinearProgress color="inherit" />
                :
                <LinearProgress color="inherit" variant="determinate" value={loader.value} />
            }
            <div className='flex justify-between items-center'>
                {/* <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="rectangular" width={210} height={60} />
                <Skeleton variant="rounded" width={210} height={60} />
                 */}
            </div>
        </Stack>
    )
}

export default Loading
