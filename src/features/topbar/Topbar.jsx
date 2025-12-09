import Searchbar from './component/Searchbar'
import Notification from './component/Notification'
import Divider from './component/Divider'
import Profile from './component/Profile'


const Topbar = () => {
  return (
 <div className='flex w-full h-20 justify-between items-center relative z-10 border-b border-zinc-300
 *:flex *:items-center *:gap-3'>
    <div>
    <Searchbar />
   </div>
   <div>
    <Notification />
    <Divider />
    <Profile />
   </div>
 </div>
  )
}
export default Topbar
