import {UilFacebook, UilInstagram, UilTwitter} from "@iconscout/react-unicons"
import css from '../styles/Footer.module.css'
import pizza1 from '../assets/pizza1.png'
import Image from 'next/image'

export default function Footer () {
    return(
      <div className={css.container}>
         <div className={css.logo}>
            <Image src ={pizza1} alt = "" width={50} height={50}/>
        </div>
            <span>© Copyright 2021 - FastFood Pizza - Todos os direitos reservados  FastFood Pizza com Agência de <br></br>Restaurantes Online S.A. <br></br> CNPJ 00.000.000/0000-00 / Avenida dos Autonomistas, nº 0564, Vila Yara, Osasco/SP - CEP 000</span>
            <div className={css.social}>
                <UilFacebook size={30}/>
                <UilInstagram size={30}/>
                <UilTwitter size={30}/>
            </div>
      </div>
    )
};