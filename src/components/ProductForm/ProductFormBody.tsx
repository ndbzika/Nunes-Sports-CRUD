import { Box } from "@mui/material"

export const ProductFormBody = ({children}: {children: React.ReactNode}) => {
    return (
        <Box 
        sx={{display: 'flex', 
        flexDirection: 'column', 
        width: '100%', 
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: '1rem'}}
        >
            {children}
        </Box>
    )
}