import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import GradientLayout from './components/gradientLayout'

export default function Home() {
  return (
    <GradientLayout color="red">
           <div>
             hello
           </div>
    </GradientLayout>
  )
}
