import { useRouter } from 'next/router';
import Head from 'next/head';

export default function AdminArray() {
    const router = useRouter()
    const {id} = router.query
    const {name} = router.query

    return (<>
    <Head>
        <title>Shop List</title>
    </Head>
    <h1>list {id}</h1>
    <p>{name}</p>
    </>)
}


export async function getServerSideProps({params}){
    const req = await fetch(`http://localhost:3000/${params.id}.json`)
    const data = await req.json()
    return{
        props:{cards:data},
    }
}