import EventCard from "./EvenCard";


export default function EventList(){
    return(
        <div className='px-8 py-14'>
            <div className='text-2xl'>What's happening in this month<span className='text-emerald-600'>...</span></div>
            <div className='py-14 flex gap-2'>
                <EventCard/>
                <EventCard/>
                <EventCard/>
                <EventCard/>
            </div>
        </div>
    )
}