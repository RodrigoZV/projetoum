"use client"
import { useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { useRouter } from 'next/navigation';
import Styles from './botoes.module.css'
import { styled } from 'styled-components';



export default function login(){
  const router = useRouter();

  // const [email, setEmail] = useState('')
  // const [senha, setSenha] = useState('')
  const [newUser, setNewUser] = useState({email:'', senha:''})
  
  const [logado, setLogado] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  
  function validarCredenciais(newUser) {
    // Verificar se as credenciais existem no localStorage
    const storedEmail = localStorage.getItem('email');
    const storedSenha = localStorage.getItem('senha');
    
    

    // Verificar se as credenciais inseridas correspondem às armazenadas
    if (newUser.email === storedEmail && newUser.senha === storedSenha) {
      return true; // Credenciais válidas
    } else {
      return false; // Credenciais inválidas
    }
  }

  const logarbotao = () => {
    if (validarCredenciais(newUser)) {
      alert("login deu certo!")
      localStorage.setItem('currentUser', newUser);
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
              <input className={Styles.parte2} type="email" name="Email" placeholder="Seu Email" id="email" value={newUser.email} onChange={e => setNewUser({...newUser, email:e.target.value})} />
              <input className={Styles.parte2} type="password" name="Senha" placeholder='Sua Senha' id="senha" value={newUser.senha} onChange={e => setNewUser({...newUser, senha:e.target.value})} />
              <div>
                <Butao onClick={logarbotao}>
                  Entrar
                </Butao>
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
const Butao = styled.button`
  padding: 1.3em 3em;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  &:hover{
    background-color: #000000;
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.4);
    color: #fff;
    transform: translateY(-4px);
    &:active {
      transform: translateY(-1px);
    }
  }
`

