import React, { useEffect, useState } from "react";
import Head from "../node_modules/next/head";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import css from "../styles/carrinho.module.css"
import Image from "../node_modules/next/image";
import App from "../node_modules/next/app";
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
               Seu carrinho
      </span>

      <Link href="/pedidorealizado"><button className={css.botaoPizza2}>COMPRAR PEDIDO</button></Link>

    </Layout>
    
  );
}