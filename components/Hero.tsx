export default function Hero() {
  return (
    <div className='text-white min-h-screen font-mono flex flex-col justify-center gap-8 ml-5'>
      <p className='tracking-wider text-lime-500'>STATUS: AVAILABLE FOR WORK</p>
      <h1 className='text-6xl'>Jordan Fulawka&apos;s Portfolio</h1>
      <p className='max-w-[60%] leading-10 text-slate-300'>
        This is just a bunch of example text. Here I will write an introduction
        about my skills and all of that stuff. this is just placeholder text to
        check styling. yap yap yap
      </p>
      <div className='flex justify-start gap-8'>
        <button className='bg-accent p-4 text-black text-lg cursor-pointer min-w-50 transition-transform active:scale-95'>
          View my work
        </button>
        <a /*href='/resume.pdf' download*/>
          <button className='border border-accent p-4 text-accent cursor-pointer min-w-50 transition-transform active:scale-95'>
            Download Resume
          </button>
        </a>
      </div>
    </div>
  );
}
