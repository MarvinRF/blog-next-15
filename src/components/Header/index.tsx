import clsx from 'clsx';
import { Navbar } from '../NavBar';
import { DropDownMenu } from '../DropDownMenu';
import Link from 'next/link';
export function Header() {
  return (
    <header className=' flex items-center justify-between'>
      <h1
        className={clsx(
          'text-3xl/normal font-extrabold text-center py-8',
          'sm:text-3xl/normal sm:py-10',
          'md:text-4xl/normal md:py-10',
          'lg:text-7xl/normal md:py-10',
        )}
      >
        <Link href='/'>Tech Heaven</Link>
      </h1>
      {/* Navbar visível em md ou maior */}
      <div className='hidden md:block'>
        <Navbar />
      </div>
      {/* DropDownMenu visível apenas em sm e menor */}
      <div className='block md:hidden'>
        <DropDownMenu />
      </div>
    </header>
  );
}
