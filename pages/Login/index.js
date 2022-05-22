import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Login.module.css';

export default function Login() {

    return (<>
    <Head>
        <title>Login</title>
        <link rel="icon" href="/CardMaster.ico" />
    </Head>
    
    <main>

        <form className={styles.login}>
           <h1>Login</h1>
           <div className={styles.inputs}>
                <input type='email' name='email' placeholder='Email' /* reqired */ ></input>
                <input type='password' name='password' placeholder='Password' /* reqired */ ></input>
           </div>
           
           <button type='submit' className={styles.submit}>Sign in</button>

           <div className={styles.links}>
               <p>Don't have an account? <Link href='/Register'>Register</Link></p>
               <p id={styles.linkReg}><Link href='/'>Return Home</Link></p>
           </div>
        </form>
        
    </main>
    </>)
}