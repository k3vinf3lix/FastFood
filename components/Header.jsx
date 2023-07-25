import css from '../styles/Header.module.css'
import Image from 'next/image'
import Logo2 from '../assets/Logo2.png'
import {UilShoppingBag} from '@iconscout/react-unicons'
import Link from '../node_modules/next/link'


export default function Header () {
    return(
    <div className={css.header}>
        <div className={css.logo}>
        <Link href="/Body"><Image src ={Logo2}  width={102} height={50}/></Link>
        </div>

        <ul className={css.menu}>
            <Link href="/Body">Home</Link>
            <Link href="/profile">Perfil</Link>
            <Link href="/cardapy">Cardápio</Link>
        </ul>

        <div className={css.rightSide}>
            <div className={css.cart}>
               <Link  href="/carrinho"><UilShoppingBag size={30} color="#2E2E2E"/></Link>
            </div>
        </div>
    </div>
    )
};