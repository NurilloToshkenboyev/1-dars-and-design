import React from 'react'
import { Hero } from './components/hero'
import { User } from './components/user'

export const Home = () => {
  return (
    <div>
        <section>
            <Hero/>
        </section>
        <section style={{height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center'} }>
            <User/>
        </section>
    </div>
  )
}
