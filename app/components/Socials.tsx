import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export interface SocialProps {
    heading: string
  }

const Socials = ({heading}:SocialProps) => {
  return (
    <div className="bg-cover bg-fixed bg-[url('/double2.png')]">
        <div className='py-20 px-40 bg-[#00050073] text-center flex justify-between items-center'>
            <h1 className="text-[35px] text-white ">{heading}</h1>
            <div className="flex justify-between items-center gap-5">
                <Link href={'/contact'} className=''><Image src={'/socials/linkedin.png'} alt='socials' width={50} height={50} /></Link>
                <Link href={'/contact'} className=''><Image src={'/socials/x.jpg'} alt='socials' width={60} height={50} /></Link>
            </div>
        </div>
    </div>
  )
}

export default Socials