export default function Navbar() {
  return (
    <nav className='fixed top-0 left-0 right-0 flex items-center justify-between px-8 py-5 text-lg bg-black/80 backdrop-blur-sm'>
      <div>
        <p className='font-mono font-bold tracking-widest text-white'>
          Portfolio
        </p>
      </div>
      <div>
        <ul className='flex items-center gap-8'>
          <li className='transition-transform active:scale-95'>
            <a href='#work' className='font-mono'>
              Work
            </a>
          </li>
          <li className='transition-transform active:scale-95'>
            <a href='#tech' className='font-mono'>
              Tech
            </a>
          </li>
          <li className='transition-transform active:scale-95'>
            <a href='#contact' className='font-mono'>
              Contact
            </a>
          </li>
          <li className='transition-transform active:scale-95'>
            <a
              /*href='/resume.pdf'
              download*/
              className='font-mono text-accent border border-accent px-4 py-1.5 hover:bg-accent hover:text-black transition-colors'
            >
              Resume↗
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
