import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { useEffect, useState } from "react"
import { Product } from "../../models/Product";
import { deleteProduct, getAll } from "../../services/Products/productService";
import { ActionButton } from "../ActionButton";
import { UpdateProduct } from "../UpdateProduct";

export const ProductTable = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)

  useEffect(() => {
    getAll().then((response) => {
      setProducts(response.map((product) => {
        return {
          id: product.id,
          name: product.name,
          description: product.description,
          price: product.price
          }}));
    });
    console.log('reder');
    
  }, [])

    return (
        <TableContainer>
              <Table sx={{ minWidth: 650 }}>
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Código</TableCell>
                    <TableCell align="center">Nome</TableCell>
                    <TableCell align="center">Descrição</TableCell>
                    <TableCell align="right">Preço</TableCell>
                    <TableCell align="right">Editar</TableCell>
                    <TableCell align="center">Excluir</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {products.map(product => (
                    <TableRow
                      key={product.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="center">{product.id}</TableCell>
                      <TableCell align="center">{product.name}</TableCell>
                      <TableCell align="center">{product.description}</TableCell>
                      <TableCell align="right">R$ {product.price}</TableCell>
                      <TableCell align="right">
                        <ActionButton type='update' onClick={handleOpenModal}/>
                        {isModalOpen && <UpdateProduct product={product} open={isModalOpen} handleClose={handleCloseModal}/> }
                      </TableCell>
                      <TableCell align="center">
                        <ActionButton type='delete' onClick={() => deleteProduct(product.id)}/>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
    )
}