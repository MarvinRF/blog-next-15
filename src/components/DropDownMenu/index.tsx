import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ThemeToggle } from '../ThemeSwitch';
import { Search } from 'lucide-react';

export const DropDownMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline'>Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56' align='start'>
        <DropdownMenuGroup>
          <DropdownMenuItem>Home</DropdownMenuItem>
          <DropdownMenuItem>Category</DropdownMenuItem>
          <DropdownMenuItem>About Me</DropdownMenuItem>
          <DropdownMenuLabel className='relative'>
            <input
              type='text'
              placeholder='Search'
              className='pl-2 w-[195px] text-lg text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white'
            />
            <Search className='absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none' />
          </DropdownMenuLabel>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel className='flex items-center justify-between'>
            Theme <ThemeToggle />
          </DropdownMenuLabel>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
