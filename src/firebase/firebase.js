import { initializeApp } from "firebase/app";
import {getFirestore, addDoc, getDoc, getDocs, deleteDoc, updateDoc, collection, doc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC2pxGrMlFryHh_bNPGxQVZmMgxSDYhum0",
  authDomain: "dshirt-ed546.firebaseapp.com",
  projectId: "dshirt-ed546",
  storageBucket: "dshirt-ed546.appspot.com",
  messagingSenderId: "349544391814",
  appId: "1:349544391814:web:95f393c75369e36b4a9d07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const bdd = getFirestore()

export const createProducts = async () => {
  const promise = await fetch('./json/productos.json')
  const productos = await promise.json()
  productos.forEach( async (prod) =>{
    await addDoc(collection(bdd, "productos"),{
      nombre: prod.nombre,
      idCategoria: prod.idCategoria,
      precio: prod.precio,
      stock: prod.stock,
      img: prod.img

    })
  })
}

export const getProducts = async() =>{
  const prods = await getDocs(collection(bdd, "productos"))
  const items= prods.docs.map(prod =>{
    return {...prod.data(), id: prod.id}
  })
  return items 
}

export const getProduct = async(id) =>{
    const prod = await getDoc(doc(bdd, "productos", id))
    const item = {...prod.data(), id:prod.id}
    return item
}

export const updateProduct = async(id, info )=>{
  await updateDoc(doc(bdd, "productos", id), info)
    
}

export const deleteProduct = async(id) =>{
  await deleteDoc(doc(bdd, "productos", id))
}

export const createOrdenCompra = async(cliente, precioTotal, carrito, fecha)=>{
  const ordenCompra = await addDoc(collection(bdd, "ordenCompra"),{
    cliente: cliente,
    items:carrito,
    precioTotal:precioTotal,
    fecha: fecha
  })
  return ordenCompra
}

export const getOrdenCompra = async(id) =>{
  const ordenCompra = await getDoc(doc(bdd,"ordenCompra",id))
  const item = {...ordenCompra.data(), id: ordenCompra.id}
  return item
}
