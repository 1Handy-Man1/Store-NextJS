import Head from 'next/head';
import styles from '../../styles/Admin.module.css';
import Link from "next/link";

export default function Admin() {
    return (<>
    <Head>
        <title>Admin home</title>
        <link rel="icon" href="/CardMaster.ico" />
    </Head>
    
    <main className={styles.main}>
        <div className={styles.ViewList}>
          <div className={styles.card}>
            <div><img src="https://i5.walmartimages.com/asr/8fcb252f-6369-4eb5-8513-5f8d67b6b0d0_1.448f37226c364e41e1a36d8c8313ebf7.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF" alt="name"></img></div>
            <hr></hr>
            <div>
              <p>UNO</p>
              <p>$4.89</p>
            </div>
            <p id={styles.desc}>
            UNO is a multi-player card game in which the objective is to be the first player to get rid of all the cards in their hand. Each player is dealt 7 cards and players take turn drawing cards from the deck.
            </p>
            <Link href="/AdminHome/UNO"><button className={styles.btn}>Buy</button></Link>
          </div>

          <div className={styles.card}>
            <div><img src="https://media.gamestop.com/i/gamestop/11161884/Yu-Gi-Oh-Trading-Card-Game-Maximum-Gold-El-Dorado-Booster-Full-Box?$pdp$" alt="name"></img></div>
            <hr></hr>
            <div>
              <p>Yugioh</p>
              <p>$29.99</p>
            </div>
            <p id={styles.desc}>
            Gameplay revolves around three types of cards: Monster, Spell, and Trap cards. Monster cards are monsters used to attack and defend against the opposing player, mainly for the purpose of damaging an opponent's life points.
            </p>
            <Link href="/AdminHome/Yugioh"><button className={styles.btn}>Buy</button></Link>
          </div>

          <div className={styles.card}>
            <div><img src="https://media.gamestop.com/i/gamestop/11161884/Yu-Gi-Oh-Trading-Card-Game-Maximum-Gold-El-Dorado-Booster-Full-Box?$pdp$" alt="name"></img></div>
            <hr></hr>
            <div>
              <p>Yugioh</p>
              <p>$29.99</p>
            </div>
            <p id={styles.desc}>
            Gameplay revolves around three types of cards: Monster, Spell, and Trap cards. Monster cards are monsters used to attack and defend against the opposing player, mainly for the purpose of damaging an opponent's life points.
            </p>
            <Link href="/Login"><button className={styles.btn}>Buy</button></Link>
          </div>
        </div>
    </main>

    </>)
}