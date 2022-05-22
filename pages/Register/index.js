import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Login.module.css';

export default function Register() {

    return (<>
    <Head>
        <title>Register</title>
        <link rel="icon" href="/CardMaster.ico" />
    </Head>
    <main>

        <form className={styles.login}>
        <h1>Register</h1>
        <div className={styles.inputs}>
            <input type='email' name='email' placeholder='Email' /* reqired */ ></input>
            <input type='password' name='password' placeholder='Password' /* reqired */ ></input>
        </div>
        
        <button type='submit' className={styles.submit}>Sign up</button>

            <div className={styles.links}>
                <p>Have an account? <Link href='/Login'>Login</Link></p>
                <p id={styles.linkReg}><Link href='/'>Return Home</Link></p>
            </div>
        </form>

    </main>
    </>)
}