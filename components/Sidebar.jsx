import NavLinks from './NavLinks'
import SidebarHeader from './SidebarHeader'
import Profile from './Profile'

const Sidebar = () => {
  return (
    <div className='px-4 w-80 min-h-screen bg-base-300 py-12 grid grid-rows-[auto,1fr,auto]'>
      <SidebarHeader />
      <NavLinks />
      <Profile />
    </div>
  )
}

export default Sidebar
