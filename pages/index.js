import Head from 'next/head'
import Link from "next/link";
import styles from '../styles/Home.module.css';
import { useUser } from '@auth0/nextjs-auth0';
import Image  from 'next/image';

export default function Home() {
  const {user, error, isLoading} = useUser();

  if(isLoading) return <div>...Loading, Please wait</div>
  if(error) return <div>{error.message}</div>

  // THIS WILL SHOW UP IF YOU HAVE SIGN IN

  if(user){
    return(
      <>
    <div>
      <Head>
        <title>Home - {user.name}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/CardMaster.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.containImg}>
          <Image src='https://res.cloudinary.com/duitylslf/image/upload/v1653522180/High_resolution_wallpaper_background_ID_77701245671-1200x750_cf9ckc.jpg' alt="Banner" width='1540' height='800' z-index='2' />
        </div>

        <div>
          <h1 id={styles.title}>Information</h1>
          <p id={styles.infoText}>
            This is a website dedicated getting all types of cards, from game boards to shows. <b>YOU</b> need to <b>LOGIN</b> in order to purchase any of the cards.
            I have search all types of cards with short description of each to anyone knew to it. Each would contain the price for either small deck to big box.
          </p>
        </div>

        <div className={styles.ViewList}>
          <div className={styles.card}>
          <Image src="https://res.cloudinary.com/duitylslf/image/upload/v1653518977/8fcb252f-6369-4eb5-8513-5f8d67b6b0d0_1.448f37226c364e41e1a36d8c8313ebf7_wkg8sw.jpg" alt="name" width='700' height='700' />
            <hr></hr>
            <div>
              <p>UNO</p>
              <p>$4.89</p>
            </div>
            <p id={styles.desc}>
            UNO is a multi-player card game in which the objective is to be the first player to get rid of all the cards in their hand. Each player is dealt 7 cards and players take turn drawing cards from the deck.
            </p>
            <Link href="/Login"><button className={styles.btn}>Buy</button></Link>
          </div>

          <div className={styles.card}>
          <Image src="https://res.cloudinary.com/duitylslf/image/upload/v1653518993/Yu-Gi-Oh-Trading-Card-Game-Maximum-Gold-El-Dorado-Booster-Full-Box_xe9tpb.jpg" alt="name" width='700' height='700' />
            <hr></hr>
            <div>
              <p>Yugioh</p>
              <p>$29.99</p>
            </div>
            <p id={styles.desc}>
            Gameplay revolves around three types of cards: Monster, Spell, and Trap cards. Monster cards are monsters used to attack and defend against the opposing player, mainly for the purpose of damaging an opponent is life points.
            </p>
            <Link href="/Login"><button className={styles.btn}>Buy</button></Link>
          </div>
        </div>
      </main>
    </div>
      </>
    )
  }


  // THIS WILL SHOW UP IF YOU DIDN'T SIGN IN

  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/CardMaster.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.containImg}>
        <Image src='https://res.cloudinary.com/duitylslf/image/upload/v1653522180/High_resolution_wallpaper_background_ID_77701245671-1200x750_cf9ckc.jpg' alt="Banner" width='1540' height='800' />
        </div>

        <div>
          <h1 id={styles.title}>Information</h1>
          <p id={styles.infoText}>
            This is a website dedicated getting all types of cards, from game boards to shows. <b>YOU</b> need to <b>LOGIN</b> in order to purchase any of the cards.
            I have search all types of cards with short description of each to anyone knew to it. Each would contain the price for either small deck to big box.
          </p>
        </div>

        <div className={styles.ViewList}>
          <div className={styles.card}>
          <Image src="https://res.cloudinary.com/duitylslf/image/upload/v1653518977/8fcb252f-6369-4eb5-8513-5f8d67b6b0d0_1.448f37226c364e41e1a36d8c8313ebf7_wkg8sw.jpg" alt="name" width='700' height='700' />
            <hr></hr>
            <div>
              <p>UNO</p>
              <p>$4.89</p>
            </div>
            <p id={styles.desc}>
            UNO is a multi-player card game in which the objective is to be the first player to get rid of all the cards in their hand. Each player is dealt 7 cards and players take turn drawing cards from the deck.
            </p>
            <Link href="/AdminHome"><button className={styles.btn}>Buy</button></Link>
          </div>

          <div className={styles.card}>
            <Image src="https://res.cloudinary.com/duitylslf/image/upload/v1653518993/Yu-Gi-Oh-Trading-Card-Game-Maximum-Gold-El-Dorado-Booster-Full-Box_xe9tpb.jpg" alt="name" width='700' height='700' />
            <hr></hr>
            <div>
              <p>Yugioh</p>
              <p>$29.99</p>
            </div>
            <p id={styles.desc}>
            Gameplay revolves around three types of cards: Monster, Spell, and Trap cards. Monster cards are monsters used to attack and defend against the opposing player, mainly for the purpose of damaging an opponent is life points.
            </p>
            <Link href="/AdminHome"><button className={styles.btn}>Buy</button></Link>
          </div>
        </div>
      </main>
    </div>
  )
}
