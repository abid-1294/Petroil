import React from 'react'

const Contact = () => {
  return (
    <div id='contact'>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.855568285466!2d91.81917207593617!3d22.359081790761007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd89aaa8239cd%3A0x6e65fa00001dd59f!2sGEC%20More%2C%20Chittagong!5e0!3m2!1sen!2sbd!4v1722940402202!5m2!1sen!2sbd"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className='bg-primary_color w-full h-[145px] border-b-[3px] border-[#FFB800]'>
        <div className='container mx-auto flex justify-center items-center py-[45px]'>
          <p className='font-Pops font-bold text-white text-[36px]'>Want to join as member branch in your area?</p>

          <div><button className='w-[142px] h-[51px] ml-[164px] bg-primary_color text-white text-Pops font-semibold border border-white cursor-pointer hover:bg-white hover:text-primary_color hover:font-bold'><a href="">CONTACT</a></button></div>
        </div>
      </div>


    </div>
  )
}

export default Contact
