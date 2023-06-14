"use client"
import { useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { useRouter } from 'next/navigation';
import Styles from './botoes.module.css'
import { styled } from 'styled-components';



export default function login(){
  const router = useRouter();

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [logado, setLogado] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  
  function validarCredenciais(email, senha) {
    // Verificar se as credenciais existem no localStorage
    const storedEmail = localStorage.getItem('email');
    const storedSenha = localStorage.getItem('senha');
    
    // Verificar se as credenciais inseridas correspondem às armazenadas
    if (email === storedEmail && senha === storedSenha) {
      return true; // Credenciais válidas
    } else {
      return false; // Credenciais inválidas
    }
  }

  const logarbotao = () => {
    if (validarCredenciais(email, senha)) {
      alert("login deu certo!")
      router.push("/pag-principal")
    } else {
      setErrorMessage('Usuário não encontrado, tente novamente!')
    }

  };

  if (logado) {
    return(<div></div>)
  } else {
    return(
      <Wrapper>
        <div className={Styles.tudo} >
          <h1>The Seven Deadly Sins</h1>
          <div className={Styles.icons}>
            <AiOutlineUser/>
          </div>

          <div className={Styles.parte1} >
              <input className={Styles.parte2} type="email" name="Email" placeholder="Seu Email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
              <input className={Styles.parte2} type="password" name="Senha" placeholder='Sua Senha' id="senha" value={senha} onChange={e => setSenha(e.target.value)} />
              <div>
                <button onClick={logarbotao} className="botao">Entrar</button>
              </div>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          </div>
        </div>
      </Wrapper>
    )
  }
}

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`
