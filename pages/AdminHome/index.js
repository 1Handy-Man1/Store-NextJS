import Head from 'next/head';
import styles from '../../styles/Admin.module.css';
import Link from "next/link";
import { withPageAuthRequired, useUser } from '@auth0/nextjs-auth0';

export default function Admin() {
  const {user, error, isLoading} = useUser();

  if(isLoading) return <div>...Loading, Please wait</div>
  if(error) return <div>{error.message}</div>

    // THIS WILL SHOW UP IF YOU HAVE SIGN IN

  if(user){
    return <>
    <Head>
        <title>Admin home</title>
        <link rel="icon" href="/CardMaster.ico" />
    </Head>
    
    <main className={styles.main}>
    <h1>Welcome {user.name}</h1>

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
            <div><img src="https://cdn11.bigcommerce.com/s-0kvv9/images/stencil/1280x1280/products/127921/126352/pokemon-xy-pikachu-ex-legendary-collection-box-pokemon-usa-pre-order-ships-november-4__17050.1461386804.jpg?c=2" alt="name"/></div>
            <hr></hr>
            <div>
              <p>Pokemon</p>
              <p>$199.99</p>
            </div>
            <p id={styles.desc}>
              The original Pokémon is a role-playing game based around building a small team of monsters to battle other monsters in a quest to become the best. Pokémon are divided into types, such as water and fire, each with different strengths. Battles between them can be likened to the simple hand game rock-paper-scissors.
            </p>
            <Link href="/AdminHome/Pokemon"><button className={styles.btn}>Buy</button></Link>
          </div>
        </div>
    </main>
    </>
  }
  

   // THIS WILL SHOW UP IF YOU DIDN'T SIGN IN

    // return (<>
    // <Head>
    //     <title>Admin home</title>
    //     <link rel="icon" href="/CardMaster.ico" />
    // </Head>
    
    // <main className={styles.main}>
    //     <div className={styles.ViewList}>
    //       <div className={styles.card}>
    //         <div><img src="https://i5.walmartimages.com/asr/8fcb252f-6369-4eb5-8513-5f8d67b6b0d0_1.448f37226c364e41e1a36d8c8313ebf7.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF" alt="name"></img></div>
    //         <hr></hr>
    //         <div>
    //           <p>UNO</p>
    //           <p>$4.89</p>
    //         </div>
    //         <p id={styles.desc}>
    //         UNO is a multi-player card game in which the objective is to be the first player to get rid of all the cards in their hand. Each player is dealt 7 cards and players take turn drawing cards from the deck.
    //         </p>
    //         <Link href="/AdminHome/UNO"><button className={styles.btn}>Buy</button></Link>
    //       </div>

    //       <div className={styles.card}>
    //         <div><img src="https://media.gamestop.com/i/gamestop/11161884/Yu-Gi-Oh-Trading-Card-Game-Maximum-Gold-El-Dorado-Booster-Full-Box?$pdp$" alt="name"></img></div>
    //         <hr></hr>
    //         <div>
    //           <p>Yugioh</p>
    //           <p>$29.99</p>
    //         </div>
    //         <p id={styles.desc}>
    //         Gameplay revolves around three types of cards: Monster, Spell, and Trap cards. Monster cards are monsters used to attack and defend against the opposing player, mainly for the purpose of damaging an opponent's life points.
    //         </p>
    //         <Link href="/AdminHome/Yugioh"><button className={styles.btn}>Buy</button></Link>
    //       </div>

    //       <div className={styles.card}>
    //         <div><img src="https://cdn11.bigcommerce.com/s-0kvv9/images/stencil/1280x1280/products/127921/126352/pokemon-xy-pikachu-ex-legendary-collection-box-pokemon-usa-pre-order-ships-november-4__17050.1461386804.jpg?c=2" alt="name"/></div>
    //         <hr></hr>
    //         <div>
    //           <p>Pokemon</p>
    //           <p>$199.99</p>
    //         </div>
    //         <p id={styles.desc}>
    //           The original Pokémon is a role-playing game based around building a small team of monsters to battle other monsters in a quest to become the best. Pokémon are divided into types, such as water and fire, each with different strengths. Battles between them can be likened to the simple hand game rock-paper-scissors.
    //         </p>
    //         <Link href="/AdminHome/Pokemon"><button className={styles.btn}>Buy</button></Link>
    //       </div>
    //     </div>
    // </main>

    // </>)
}

export const getServerSideProps = withPageAuthRequired();