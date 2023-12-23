import ThemeBtn from './ThemeBtn'
import { SiOpenaigym } from 'react-icons/si'
const SidebarHeader = () => {
  return (
    <div className='flex items-center mb-4 justify-between px-4'>
      <div className='flex items-center space-x-4'>
        <SiOpenaigym className='w-10 h-10 text-primary' />
        <p className='text-xl font-extrabold text-primary leading-5'>
          AI <br />
          Assitant
        </p>
      </div>
      <ThemeBtn />
    </div>
  )
}

export default SidebarHeader
