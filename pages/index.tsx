import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import GradientLayout from './components/gradientLayout'

export default function Home() {
  return (
// @ts-ignore    
 <GradientLayout color="green" roundImage image="/said.jpg" description="15 public playlist" subtitle="profile" title="said aabila" >
           <div>
             hello
           </div>
    </GradientLayout>
  )
}
