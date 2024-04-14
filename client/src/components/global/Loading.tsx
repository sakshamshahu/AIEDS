import { LinearProgress, Skeleton, Stack } from '@mui/material'
import React from 'react'

const Loading = () => {
    return (
        <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
            <LinearProgress color="inherit" />
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
