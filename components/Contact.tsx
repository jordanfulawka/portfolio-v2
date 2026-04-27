import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className='min-h-[70vh] flex p-60 font-mono' id='contact'>
      <div className='bg-surface flex-1 flex'>
        <div className='flex-1 flex items-center'>
          <div className='ml-50'>
            <h1 className='text-5xl'>Let&apos;s Chat!</h1>
            <p className='mt-5'>
              Feel free to reach out for opportunities, collaborations, or just
              to say hi.
            </p>
          </div>
        </div>
        <div className='flex-1 flex justify-center items-center gap-5 '>
          <a href='https://github.com/jordanfulawka' target='_blank'>
            <FaGithub
              className='inline transition-transform hover:scale-125'
              color='#00d4ff'
              size={56}
            />
          </a>
          <a href='https://www.linkedin.com/in/jordanfulawka/' target='_blank'>
            <FaLinkedin
              className='inline transition-transform hover:scale-125'
              color='#00d4ff'
              size={56}
            />
          </a>
          <a href='mailto:jordan.fulawka@outlook.com'>
            <FaEnvelope
              className='inline transition-transform hover:scale-125'
              color='#00d4ff'
              size={56}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
