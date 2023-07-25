import React, { useEffect, useState } from "react";
import Head from "../node_modules/next/head";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import css from "../styles/pedidoaceito.module.css"
import Image from "../node_modules/next/image";
import App from "../node_modules/next/app";
import s2 from '../assets/s2.png'
import Link from "../node_modules/next/link";


export default function Home() {
    
      return (
    <Layout>
      <div className={css.container}>
        <Head>
          <title>FastFood Pizza</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="shortcut icon" href="/Logo.png" />
        </Head>
    </div>

    <span className={css.titleText}>
               Você aceitou um pedido!
      </span>
    
      <span className={css.miniText2}>
      Vá até o estabelecimento retirar a entrega.
    </span>

    <div className={css.ImageContainer}>
        <Image src={s2} alt="" layout="intrinsic"/>
    </div>

    <Link href="/Bodyentregador"><button className={css.botaoPizza2}>FINALIZAR ENTREGA</button></Link>
    <span className={css.miniText3}>
    ATENÇÃO: VOCÊ SÓ PODERÁ CLICAR NO <br></br>BOTÃO 
    APÓS FINALIZAR SUA ENTREGA.
    </span>
    </Layout>
    
  );
}