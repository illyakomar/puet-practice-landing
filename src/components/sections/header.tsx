export default function HeaderSections({
 label,
 title,
}: {
 label: string;
 title: string;
}) {
 return (
  <div className='grid gap-x-10 font-extrabold'>
   <h3 className='uppercase text-primary tracking-[2px] text-lg'>{label}</h3>
   <h2 className='text-foreground leading-[65px] text-sectionHeader'>
    {title}
   </h2>
  </div>
 );
}
