import Image from 'next/image';

export default function About() {
  return (
    <div className='min-h-screen flex items-center'>
      <Image
        alt='placeholder picture'
        src='/weave.png'
        className='aspect-square object-cover w-lg'
        width={500}
        height={500}
      />
      <div>
        <h1>A little bit about me</h1>
      </div>
    </div>
  );
}
