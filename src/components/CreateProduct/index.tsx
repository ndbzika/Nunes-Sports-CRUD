import { TextField } from "@mui/material"
import { useState } from "react"
import { createProduct } from "../../services/Products/productService"
import { CustomModal } from "../CustomModal"
import { ProductForm } from "../ProductForm"

export type CardProps = {
    open: boolean
    handleClose: () => void
}

export const CreateProduct = ({open = false, handleClose}: CardProps) => {
    const [id, setId] = useState('0');
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState(0);

    const handleSetNome = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNome(event.target.value)
    }

    const handleSetDescricao = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescricao(event.target.value)
    }

    const handleSetPreco = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPreco(Number(event.target.value))
    }

    const handleSetId = (event: React.ChangeEvent<HTMLInputElement>) => {
        setId(event.target.value)
    }

    const handleCreateProduct = () => {
        createProduct({
            name: nome,
            description: descricao,
            price: preco,
            id: id
        }).then(() => {
            handleClose()
            window.location.reload()
        })
    }

    return (
        <CustomModal open={open} handleClose={handleClose}>
            <ProductForm.Root>
                <ProductForm.Title>
                    Adicionar Produto
                </ProductForm.Title>

                <TextField
                    required
                    value={id}
                    onChange={handleSetId}
                    label='ID'
                    variant='outlined'
                    sx={{
                        width: '80%'
                    }}
                />

                <TextField
                    required
                    value={nome}
                    onChange={handleSetNome}
                    label='Nome'
                    variant='outlined'
                    sx={{
                        width: '80%'
                    }}
                />

                <TextField
                    required
                    multiline
                    rows={2}
                    value={descricao}
                    onChange={handleSetDescricao}
                    label='Descrição'
                    variant='outlined'
                    sx={{
                        width: '80%'
                    }}
                />

                <TextField
                    required
                    value={preco}
                    onChange={handleSetPreco}
                    label='Preço'
                    variant='outlined'
                    sx={{
                        width: '80%'
                    }}
                    type="number"
                />

                <ProductForm.Button onClick={handleCreateProduct}>
                    Adicionar
                </ProductForm.Button>
            </ProductForm.Root>
                
        </CustomModal>
    )
}