import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../../styles/arrayID.module.css';

export default function AdminArray({cards}) {
    const router = useRouter()
    const {id} = router.query

    return (<>
    <Head>
        <title>Shop List</title>
        <link rel="icon" href="/CardMaster.ico" />
    </Head>

    <main className={styles.main}>
        <div className={styles.info}>
            <img src={cards.image2} alt='person' className='h-auto sm:h-60 w-full object-cover md:h-96 md:w-1/2 rounded-xl mr-10' />
            <div>
                <h1>History</h1>
                <hr></hr>
                <p>{cards.history}</p>
            </div>
        </div>

        <div className={styles.info}>
            <img src={cards.image} alt='the deck' className={styles.img} />
            <div>
                <h1>Rules</h1>
                <hr></hr>
                <p>{cards.rule}</p>
            </div>
        </div>

        <div className={styles.card}>
            <img src={cards.image} alt='UNO'/>
            <h3>{id}</h3>
            <p>{cards.desc}</p>
            <button type='submit'>{cards.price}</button>
        </div>
    </main>

    </>)
}


export async function getServerSideProps({params}){
    const req = await fetch(`http://localhost:3000/${params.id}.json`)
    const data = await req.json()
    return{
        props:{cards:data},
    }
}