import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore, updateDoc } from "firebase/firestore";
import { CreateProduct, Product } from "../../models/Product";
import { app } from "../../firebase";

const db = getFirestore(app);
const productCollectionRef = collection(db, 'products');

const getAll = async () => {
    const allProducts = await getDocs(productCollectionRef);
    return allProducts.docs.map(doc => doc.data());
}

const createProduct = async (product: CreateProduct) => {
    const newProduct = await addDoc(productCollectionRef, {
        name: product.name,
        description: product.description,
        price: product.price,
        id: product.id
    });
    return newProduct;
}

const deleteProduct = async (id: string) => {
    const productDoc = doc(db, 'products', id);
    await deleteDoc(productDoc)
    console.log('Product deleted');
}

const updateProduct = async (id: string, product: Product) => {
    const productDoc = doc(db, 'products', id);
    await updateDoc(productDoc, {
        name: product.name,
        description: product.description,
        price: product.price,
    })
    console.log('Product deleted');
}

export {
    getAll,
    createProduct,
    deleteProduct,
    updateProduct
}