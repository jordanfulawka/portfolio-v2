export default function Tag({ tag }: { tag: string }) {
  return (
    <div className='bg-white/10 px-3 py-1 font-mono text-foreground'>{tag}</div>
  );
}
