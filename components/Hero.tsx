export default function Hero() {
  return (
    <div className='text-white min-h-screen font-mono flex flex-col justify-center gap-8 ml-5'>
      <p className='tracking-wider text-lime-500'>STATUS: AVAILABLE FOR WORK</p>
      <h1 className='text-6xl'>Hi, I&apos;m Jordan.</h1>
      <p className='max-w-[50%] leading-10 text-slate-300'>
        Full stack developer driven by curiosity and a genuine love for building
        and collaboration. I bring my best to everything I work on, big or
        small. Whatever brings you here, thank you for stopping by.
      </p>
      <div className='flex justify-start gap-8'>
        <a href='#work'>
          <button className='bg-accent p-4 text-black text-lg cursor-pointer min-w-50 transition-transform active:scale-95'>
            View my work
          </button>
        </a>
        <a /*href='/resume.pdf' download*/>
          <button className='border border-accent p-4 text-accent cursor-pointer min-w-50 transition-transform active:scale-95'>
            Download Resume
          </button>
        </a>
      </div>
    </div>
  );
}
