import { useState } from "react"
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Header from "../components/Header";

export default function Home(props) {

  const [produit, setProduit] = useState(props.data);

  const getAll = async () => {
    const res = await fetch('http://localhost:3001/api/produits')
    const data = await res.json()
    console.log("data", data)
    setProduit(data)
  }

  const deleteProduit = async (id_produit) => {
    await fetch('http://localhost:3001/api/produits/' + id_produit, {
      method: 'DELETE',
    });
    getAll();
  }

  const loopProduit = (produit) => {

    return produit.map((item, index) => {
      return (
        <div key={item.id_produit}>
          <div className="bg-gray-100 shadow-md px-4 py-2 rounded-md">
            <div>
              <h1 className="text-xl font-medium">{item.nom_produit}</h1>
              <p className="text-sm">Code EAN : {item.code_EAN}</p>
              <p className="text-sm">Quantité : {item.quantite_produit}</p>
              <p className="text-sm">Image : {item.image_produit}</p>
              <p className="text-sm">Donation : {item.donation_produit}</p>
              <p className="text-sm">Commentaire : {item.commentaire_produit}</p>
            </div>
            <div className="my-2">
              <Link href={`/produit/${encodeURIComponent(item.id_produit)}`}>
                <button className="px-2 py-1 bg-blue-800 rounded-sm text-white outline-none focus:ring-4 shadow-lg text-sm mr-1">
                  Modifier
                </button>
              </Link>
              <button onClick={(e) => deleteProduit(item.id_produit)} className="px-2 py-1 bg-red-800 rounded-sm text-white outline-none focus:ring-4 shadow-lg text-sm mr-1">Supprimer</button>
            </div>
          </div>
          <br />
        </div>
      )
    })
  }

  return (
    <div>
      <Header title="List Post"></Header>
      <div className="container mx-auto px-4 max-w-screen-sm">
        <div>
          <Link href='/create'>
            <a className="bg-red-600 text-center text-white px-4  py-2 my-4 inline-block">
              Ajouter un produit
            </a>
          </Link>
        </div>
        <div>
          {loopProduit(produit)}
        </div>
      </div>
  </div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch('http://localhost:3001/api/produits')
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}
