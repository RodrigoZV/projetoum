"use client"
import Style from '../login/login.module.css'
import { useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai'

export default function login(){
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [error, setError] = useState()

  const defaultUser = {
    'nome': 'banimortal',
    'email': 'banimortal@gmail.com',
    'senha': 'imortalban'
  }

  function validarCredenciais(email, senha) {
    // Verificar se as credenciais existem no localStorage
    const storedEmail = localStorage.getItem('email');
    const storedSenha = localStorage.getItem('senha');
    
    // Verificar se as credenciais inseridas correspondem às armazenadas
    if (email === storedEmail && senha === storedSenha || email === defaultUser.email && senha === defaultUser.senha) {
      return true; // Credenciais válidas
    } else {
      return false; // Credenciais inválidas
    }
  }

  const logarbotao = () => {
    if (validarCredenciais(email, senha)) {
      // Lógica para redirecionar ou realizar ações após o login bem-sucedido
      console.log('Login bem-sucedido');
    } else {
      setError('Credenciais inválidas');
    }
  };
    
return(
<main>

  
    <form onSubmit={validarCredenciais}>
        <div className={Style.user}>
          <AiOutlineUser/>
        </div>
      <div className={Style.menu}>
         <input type="email" name="Email" placeholder="Seu Email" id="email" value={email} onChange={(e) => {setEmail(e.target.value),setError('')}} />
         <input type="password" name="Senha" placeholder='Sua Senha' id="senha" value={senha} onChange={(e) => {setSenha(e.target.value),setError('')}} />
         <button onClick={logarbotao} className="botao">Enviar</button>
      </div>
    </form>


</main>
)
}
