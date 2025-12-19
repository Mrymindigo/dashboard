
import { generateSummeries } from '../../utils/home'
import SummeryCard from './components/SummeryCard'

const Summeries = () => {

    const summeries = generateSummeries({
        productsLength : 4 ,
        usersLength : 32 ,
        ticketsLength : 80 ,
        adminsLength : 3
    })
    return (
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-5 mt-6'>
            {summeries.map((summery) => (
                <SummeryCard key={summery.id} {...summery} />
            ))}
        </div>
    )
}

export default Summeries
