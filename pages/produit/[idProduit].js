import FormPost from "../../components/FormPost";
import Header from "../../components/Header";

export default function EditProduit(props) {

    return (
        <div>
            <Header title="Modification de produit"></Header>
            <div className="container mx-auto px-4 max-w-screen-sm">
                <FormPost action='update' dataPost={props.data}></FormPost>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    // const router = useRouter();
    const { idProduit } = context.query
    if (idProduit) {
        const res = await fetch('http://localhost:3001/api/produits/' + idProduit)
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

}