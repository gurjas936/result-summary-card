import React from 'react'
import data from '../data'

export default function SecondBox(){
    return(
        <main className='second-card'>
            <h3>Summary</h3>
            <section className='reaction'>
                <h4>Reaction</h4>
                <h5>80 <span>/ 100</span></h5>
            </section>

            <section className='memory'>
                <h4>Memory</h4>
                <h5>92<span> / 100</span></h5>
            </section>

            <section className='verbal'>
                <h4>Verbal</h4>
                <h5>61<span> / 100</span></h5>
            </section>

            <section className='visual'>
                <h4>Visual</h4>
                <h5>72<span> / 100</span></h5>
            </section>

            <button className='btn'>Continue</button>
        </main>
    )
}