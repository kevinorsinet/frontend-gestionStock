import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Header from "../components/Header";

export default function Home() {
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

        </div>
      </div>
  </div>
  )
}
