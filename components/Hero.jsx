import css from '../styles/Hero.module.css'
import Image from 'next/image'
import Cherry from '../assets/Cherry.png'
import HeroImage from '../assets/HeroImage.png'
import Link from '../node_modules/next/link'

export default function Hero() {
    return(
        <div className={css.container}>
            

            <div className={css.left}>


            <div className={css.cherryDiv}>
                <span>Pediu chegou!</span>
                <Image src={Cherry} alt="" width={40} height={25}/>
            </div>
            

            <div className={css.heroText}>
                <span>
                    Faça seu <span style={{color: "var(--themeRed)"}}>pedido</span> <br></br> em um <span style={{color: "var(--themeRed)"}}>clique</span>
                </span>
            </div>

            <span className={css.miniText3}>
                Mas primeiro, informe seu endereço de entrega em Perfil.
                </span>

            <button className={'btn ${css.btn}'} href="/cardapy"><Link href="/cardapy">CARDÁPIO</Link></button>

            <span className={css.titleText}>
               Sabores que você irá se apaixonar
            </span>

            <span className={css.miniText2}>
                menu principal
            </span>

            </div>
            
            <div className={css.right}>
                
                <div className={css.ImageContainer}>
                    <Image src={HeroImage} alt="" layout="intrinsic"/>

                </div>
            </div>
            
         
        </div>
    ); 
}