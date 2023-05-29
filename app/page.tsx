import Image from 'next/image'
import styles from './page.module.css'
import Login from './login/page'
import Botoes from './botoes/page'

export default function Home() {
  return (
    <div>
      <Login/>
      <Botoes/>
    </div>
  )
}
