import {useState} from 'react'
import {useNavigate} from 'react-router'
import SectionsTitle from '../../components/common/SectionsTitle'
import Summeries from '../../features/summeries/Summeries'
import DetailsChart from '../../features/detailsChart/DetailsChart'
import LastProductTable from '../../features/lastProductTable/LastProductTable'

const Home = () => {
  const [isRedirecting , setIsRedirecting] = useState(false)
  const navigate = useNavigate()

  const toggle = () => {
    setIsRedirecting(prev => !prev)
  }  
  const CTAbutton = () => {
    const clickHandler = () => {
      toggle();
      navigate("/Products")
    }
    return (
      <button
        onClick={clickHandler}
        className='rounded-md px-3 py-2 bg-teal-600 text-sm cursor-pointer
      hover:opacity-90 text-white flex items-center'
      >
       {isRedirecting ? "در حال انتقال" : "ایجاد محصول"}

      </button>
    )
  }
  return (
    <>
      <SectionsTitle title='داشبورد' buttons={<CTAbutton />} />
      <Summeries />
      <div className='mt-20 space-y-10 pb-10'>
      <DetailsChart />
      <LastProductTable />
      </div>
      
   {/* <div>
    
    <QuiqOverview />
   </div>  */}
    </>
  )
}

export default Home