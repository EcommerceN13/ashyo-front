import Link from 'next/link'
import Image from 'next/image';
import Button from '@/components/Button';
import ArrowIcon from '@/icons';
import Actions from './Action';
import Search from './Search';

const HeaderMain = () => {
  return (
    <div className="containers !py-[30px]">
      <div className="flex items-center justify-between">
        <Link className='flex items-center' href={'/'}>
          <Image className='scale-[1.5]' style={{width:"48px", height:"48px"}} src="/logo.svg" alt='Site Logo' width={48} height={48} priority/>
          <span className="text-[39px] font-extrabold leading-[42.19px] text-[#134E9B]">Ashyo</span>
        </Link>
        <div className='flex items-center gap-[10px]'>
            <Button extraClass='!py-[18px]' type='button' title='Kategoriya' iconPosition='right' icon={<ArrowIcon />}/>
            <Search />
        </div>
        <Actions />
      </div>
    </div>
  );
};

export default HeaderMain
