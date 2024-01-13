import { IconButton } from "@mui/material"
import {MdOutlineUpdate, MdOutlineDelete} from 'react-icons/md'

type ActionButtonProps = {
    onClick: () => void,
    type: | 'update' | 'delete'
}

export const ActionButton = ({onClick, type}: ActionButtonProps) => {
    return (
        <IconButton onClick={onClick}>
            {type === 'update' ? <MdOutlineUpdate/> : <MdOutlineDelete/>}
        </IconButton>
    )
}