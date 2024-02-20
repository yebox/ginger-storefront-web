// import styled from 'styled-components';
import Tooltip from '@mui/material/Tooltip';


export const GTooltip = ({
    children,
    info
}) => {
    return (
        <Tooltip
            arrow
            title={info}
            componentsProps={{
                tooltip: {
                    sx: {
                        bgcolor: '#000000',
                        '& .MuiTooltip-arrow': {
                            color: '#000000',
                        },
                        padding: 2,
                        fontSize: 14
                    },
                },
            }}
        >
            {children}
        </Tooltip>
    )
}


