import { Box, Modal } from "@mui/material"

import './index.css'

export type CustomModalProps = {
    open: boolean
    handleClose: () => void,
    children: React.ReactNode
}

export const CustomModal = ({open = false, handleClose, children}: CustomModalProps) => {
    return (
        <Modal open={open} onClose={handleClose}>
            <Box className='container'>
                {children}
            </Box>
        </Modal>
    )
}