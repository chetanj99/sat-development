import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className='container m-auto p-4'>
      <div className='text-center'>
        <h3 className='text-primary text-lg tracking-wide uppercase'>Testimonials</h3>
        <p className='text-4xl my-5'>What My Clients are Saying</p>
      </div>
      <div className='grid md:grid-cols-2 grid-cols-1 my-20 gap-12 justify-items-center'>
        <div className='shadow-lg p-4 rounded-lg'>
          <div className='text-primary text-lg mb-5'><FaQuoteLeft /></div>
          <p className='text-xl font-normal'>Justo vestibulum risus imperdiet consectetur consectetur pretium urna nibh augue etiam risus accumsan volutpat urna, eu semper enim, est aliquam laoreet urna fringilla.</p>
          <p className='text-lg text-secondary mt-4'>Olivia Holmes</p>
        </div>
        <div className='shadow-lg p-4 rounded-lg'>
          <div className='text-primary text-lg mb-5'><FaQuoteLeft /></div>
          <p className='text-xl font-normal'>Justo vestibulum risus imperdiet consectetur consectetur pretium urna nibh augue etiam risus accumsan volutpat urna, eu semper enim, est aliquam laoreet urna fringilla.</p>
          <p className='text-lg text-secondary mt-4'>Olivia Holmes</p>
        </div>
        <div className='shadow-lg p-4 rounded-lg'>
          <div className='text-primary text-lg mb-5'><FaQuoteLeft /></div>
          <p className='text-xl font-normal'>Justo vestibulum risus imperdiet consectetur consectetur pretium urna nibh augue etiam risus accumsan volutpat urna, eu semper enim, est aliquam laoreet urna fringilla.</p>
          <p className='text-lg text-secondary mt-4'>Olivia Holmes</p>
        </div>
        <div className='shadow-lg p-4 rounded-lg'>
          <div className='text-primary text-lg mb-5'><FaQuoteLeft /></div>
          <p className='text-xl font-normal'>Justo vestibulum risus imperdiet consectetur consectetur pretium urna nibh augue etiam risus accumsan volutpat urna, eu semper enim, est aliquam laoreet urna fringilla.</p>
          <p className='text-lg text-secondary mt-4'>Olivia Holmes</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
