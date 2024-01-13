import { TextField } from "@mui/material"
import { useState } from "react"
import { updateProduct } from "../../services/Products/productService"
import { CustomModal } from "../CustomModal"
import { ProductForm } from "../ProductForm"
import { Product } from "../../models/Product"

export type CardProps = {
    product: Product,
    open: boolean
    handleClose: () => void
}

export const UpdateProduct = ({product, open = false, handleClose}: CardProps) => {
    const [id, setId] = useState(product.id);
    const [nome, setNome] = useState(product.name);
    const [descricao, setDescricao] = useState(product.description);
    const [preco, setPreco] = useState(product.price);

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
        updateProduct(
            product.id,{
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
                    Atualizar Produto
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
                    Atualizar
                </ProductForm.Button>
            </ProductForm.Root>
                
        </CustomModal>
    )
}