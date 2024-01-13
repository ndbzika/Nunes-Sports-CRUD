import { Button } from "@mui/material"

export const ProductFormButton = ({children, onClick}: {children: string, onClick: () => void}) => {
    return (
        <Button
            variant='contained'
            sx={{
                width: '80%'
            }}
            onClick={onClick}
        >
            {children}
        </Button>
    )
}