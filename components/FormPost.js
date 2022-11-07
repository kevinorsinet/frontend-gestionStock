import { useRouter } from 'next/router'
import { useState } from "react";

export default function FormPost(props) {
		const [categories, setCategories] = useState([]);
		console.log("props", props)
		const categoriesData = async () => {
			await fetch('http://localhost:3001/api/categories/', {
					method: 'GET',
					body: JSON.stringify(data),
					headers: {
							'Content-type': 'application/json; charset=UTF-8',
					},
			})
			.then((response) => response.json())
			.then((json) => console.log("json categories",json))
			.then((json) => setCategories(json))
		}
		// categoriesData();
		// console.log("categories", categoriesData);

    const router = useRouter()
    const [data, setData] = useState({
				// id_produit : props.dataPost ? props.id_produit : '',
				code_EAN: props.dataPost ? props.dataPost.code_EAN : '',
        nom_produit: props.dataPost ? props.dataPost.nom_produit : '',
				quantite_produit: props.dataPost ? props.dataPost.quantite_produit : '',
        commentaire_produit: props.dataPost ? props.dataPost.commentaire_produit : '',
        image_produit: props.dataPost ? props.dataPost.image_produit : '',
        donation_produit: props.dataPost ? props.dataPost.donation_produit : true,
				categorieId: props.dataPost ? props.dataPost.categorieId : '1'
    })

    const handleChange = (e) => {
			setData(prevState => (
					{
							...prevState, [e.target.name]: e.target.value
					}
			))
    }

    const storeData = async (e) => {
        await fetch('http://localhost:3001/api/produits/', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
				.then((response) => response.json())
				.then((json) => console.log("json",json))

        router.push('/')

    }

    const updateData = async (e) => {
        await fetch('http://localhost:3001/api/produits/' + props.dataPost.id_produit, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => console.log(json))

        router.push('/')

    }

    const handleButton = (action) => {
        if (action == 'add') {
            return <a className="rounded text-gray-100 px-3 py-1 bg-red-500 hover:shadow-inner hover:bg-red-700 transition-all duration-300" onClick={storeData}>Envoyer</a>
        } else if (action == 'update') {
            return <a className="rounded text-gray-100 px-3 py-1 bg-red-500 hover:shadow-inner hover:bg-red-700 transition-all duration-300" onClick={updateData}>Modifier</a>
        }
    }

    return (
        <div className="my-10">
            <form>
                <div class="my-8 border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                    <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                        <p>
                            <label for="name" class="bg-white text-gray-600 px-1">Code EAN</label>
                        </p>
                    </div>
                    <p>
                        <input type="text" id="code_EAN"
                            name="code_EAN"
                            value={data.code_EAN}
                            onChange={handleChange} class="py-1 px-1 text-gray-900 outline-none block h-full w-full" />
                    </p>
                </div>

                <div class="my-8 border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                    <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                        <p>
                            <label for="name" class="bg-white text-gray-600 px-1">Nom du produit</label>
                        </p>
                    </div>
                    <p>
                        <input type="text" id="nom_produit"
                            name="nom_produit"
                            value={data.nom_produit}
                            onChange={handleChange} class="py-1 px-1 text-gray-900 outline-none block h-full w-full" />
                    </p>
                </div>

                <div class="my-8 border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                    <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                        <p>
                            <label for="name" class="bg-white text-gray-600 px-1">Quantité</label>
                        </p>
                    </div>
                    <p>
                        <input type="number" id="quantite_produit"
                            name="quantite_produit"
                            value={data.quantite_produit}
                            onChange={handleChange} class="py-1 px-1 text-gray-900 outline-none block h-full w-full" />
                    </p>
                </div>
								<div class="my-8 border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                    <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                        <p>
                            <label for="name" class="bg-white text-gray-600 px-1">Commentaire</label>
                        </p>
                    </div>
                    <p>
                        <input type="text" id="commentaire_produit"
                            name="commentaire_produit"
                            value={data.commentaire_produit}
                            onChange={handleChange} class="py-1 px-1 text-gray-900 outline-none block h-full w-full" />
                    </p>
                </div>
								<div class="my-8 border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                    <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                        <p>
                            <label for="name" class="bg-white text-gray-600 px-1">Donation</label>
                        </p>
                    </div>
                    <p>
                        <input type="text" id="donation_produit"
                            name="donation_produit"
                            value={data.donation_produit}
                            onChange={handleChange} class="py-1 px-1 text-gray-900 outline-none block h-full w-full" />
                    </p>
                </div>
								<div class="my-8 border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                    <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                        <p>
                            <label for="name" class="bg-white text-gray-600 px-1">Image</label>
                        </p>
                    </div>
                    <p>
                        <input type="text" id="image_produit"
                            name="image_produit"
                            value={data.image_produit}
                            onChange={handleChange} class="py-1 px-1 text-gray-900 outline-none block h-full w-full" />
                    </p>
                </div>
								<div class="my-8 border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                    <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                        <p>
                            <label for="name" class="bg-white text-gray-600 px-1">Catégorie</label>
                        </p>
                    </div>
                    <p>
										<select onChange={handleChange} value={data.categorieId}>
											<option value="1">chocolat </option>
											<option value="b">b</option>
											<option value="c">c</option>
											<option value="d">d</option>
  									</select>
                        <input type="number" id="categorieId"
                            name="categorieId"
                            value={data.categorieId}
                            onChange={handleChange} class="py-1 px-1 text-gray-900 outline-none block h-full w-full" />
                    </p>
                </div>

                {handleButton(props.action)}
            </form>
        </div>
    )
}