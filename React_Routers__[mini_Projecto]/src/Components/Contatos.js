import React from 'react';
import styles from './Contatos.module.css';
import foto from '../img/contato.jpg'
import Head from './Head';

const Contatos = () => {
  return (
    <section className={`${styles.contatos} animeLeft`}>
      <Head title='Ranek | Contato' description='Entre em contato'/>
      <img src={foto} alt='maquina de escrever'/>
      <div >
        <h1>Entre em Contacto.</h1>
        <ul className={styles.dados}>
          <li>fabiojunik@gmail.com</li>
          <li>994 305 673</li>
          <li>Rua inorade II, Morro Bento</li>
        </ul>
      </div>
    </section>
  )
}

export default Contatos