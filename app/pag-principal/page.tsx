"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import {AiOutlineLogout} from 'react-icons/ai';
import Meio from './componente/meio';

export default function Home() {

  

    return (

<div>
  <Topo>
    <Img src="nnt.png" alt="" />
    <h1>Gerenciador De Usuários</h1>
    <AiOutlineLogout/>
  </Topo>
    <Meio/>
</div>
  )
}

const Topo = styled.div`
  background: transparent;
  box-shadow: 0 8px 32px 0 rgba(5, 5, 5, 0.37);
  backdrop-filter: blur(4px);
  display: flex;
  text-align: center;
  justify-content: space-between;
  padding: 20px;
  svg {
    font-size: 300%;
    color: white;
  }
  h1 {
    color: white;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
`
const Img= styled.img`
  width: 100px;
`



