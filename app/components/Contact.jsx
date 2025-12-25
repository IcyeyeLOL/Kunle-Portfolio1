import React, { useState } from 'react'

const Contact = () => {
    const [result, setResult] =useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b04a152d-1395-44ca-84ed-e2096751eb59");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }}
  return (
    <div id="contact"className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]' >
        <h2 className='text-center mb-2 text-5xl font-Ovo '>Connect with me</h2>

        <h2 className='text-center  text-2xl font-Ovo '>Get in touch</h2>

        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
            I'd love to hear from you! If you have any questions, comments, or just want to say hello, feel free to reach out. Whether you're interested in collaborating on a project, need assistance with web development, or simply want to connect, I'm here to help. Let's create something amazing together!
        </p>
        <form onSubmit={onSubmit}className='max-w-2xl mx-auto '>
            <div className='grid'>
                <input type="text" placeholder='Your Name' className='w-full border border-gray-400 rounded-lg p-3 mb-4' required name='name'/>
                <input type="email" placeholder='Your Email' className='w-full border border-gray-400 rounded-lg p-3 mb-4' required name='email'/>
                <textarea placeholder='Your Message' className='w-full border border-gray-400 rounded-lg p-3 mb-4 h-32 resize-none' required name='message'></textarea>
                <button type="submit" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 hover:bg-black duration-500'>Submit Now</button>
                
                <p className='text-center mt-4 text-gray-500'>{result}</p>
            </div>
        </form>
    </div>
  )
}

export default Contact