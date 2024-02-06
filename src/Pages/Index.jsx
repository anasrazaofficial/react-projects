import React from 'react'
import { Link } from 'react-router-dom'

import counter from '../Assets/Tools/counter.gif'
import background from '../Assets/background.jpg'

const Index = () => {
    return (
        <div className='h-screen bg-no-repeat bg-cover' style={{ backgroundImage: `url(${background})` }}>
            <h1 className='text-center py-3'>MultiTool Pro</h1>
            <section className='grid sm:grid-cols-3 xl:grid-cols-4 px-2 sm:px-4'>
                <div className='p-1 sm:p-3 shadow-md rounded bg-[#ffffff77] backdrop-blur-sm'>
                    <img src={counter} alt="" />
                    <div className='space-y-3 mt-3'>
                        <h3>Counter</h3>
                        <p>A straightforward instrument for tallying items and maintaining numerical records.</p>
                        <Link to='counter' className='bg-[#9d704c] text-white px-3 py-1 rounded-md hover:bg-[#5c412c] transition-colors inline-block'>Go to counter</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Index