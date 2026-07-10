function TechBage({ name, icon }: { name: string; icon: React.ReactNode }) {
  return (
    <div className='flex items-center gap-3 font-mono bg-surface border border-[#27272a] w-fit px-3 py-3.5 hover:border-accent hover:-translate-y-2 transition duration-100 '>
      {icon}
      <span>{name}</span>
    </div>
  );
}

export default TechBage;
