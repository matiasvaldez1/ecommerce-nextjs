import React from 'react'

export default function Footer() {
    return (
        <>
            <div className='grid grid-cols-4 h-[150px] bg-red-100 dark:bg-slate-400 rounded-sm font-medium select-none mt-12'>
                <div className='text-center space-y-4 my-auto'>
                    <h1>Help</h1>
                    <h1>About us</h1>
                    <h1>Terms of privacy</h1>
                </div>
                <div className='text-center space-y-4 my-auto'>
                    <h1>Public offer</h1>
                    <h1>Our Branches</h1>
                    <h1>Payment and delivery conditions</h1>
                </div>
                <div className='col-span-2 bg-red-200 dark:bg-slate-500 grid place-content-center text-2xl'>
                    <p>Call-center 📞</p>
                    <h1>202-555-0117</h1>

                </div>
            </div>
            <span className='flex justify-center w-full bg-red-200 dark:bg-slate-500 border-2'>
                <hr/>
                <h1 className='no-underline h-8 text-2xl cursor-pointer'>Loudrop <a className='text-red-500'>Store</a> 2022 ©</h1>
            </span>
            </>
    )
}
