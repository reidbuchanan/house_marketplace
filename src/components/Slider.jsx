import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {collection, getDocs, query, orderBy, limit} from 'firebase/firestore'
import {db} from '../firebase.config'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Spinner from './Spinner'
import 'swiper/css'
import 'swiper/css/pagination'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])


function Slider() {
    const [loading, setLoading] = useState(null)
    const [listings, setListings] = useState(null)
    const navigate = useNavigate()

   
  useEffect(() => {
    const fetchListings = async () => {
      const listingsRef = collection(db, 'listings')
      const q = query(listingsRef, orderBy('timestamp', 'desc'), limit(5))
      const querySnap = await getDocs(q)

      const listings = []

      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        })
      })
      setListings(listings)
      setLoading(false)
    }

    fetchListings()
  }, [])

  if (loading) {
    return <Spinner />
  }

  // if (listings.length === 0) {
  //   return <></>
  // }

  return (
    listings && (
      <>
        <p className='exploreHeading'>Recommended</p>

        <Swiper slidesPerView={1} pagination={true} className="mySwiper">
          {listings.map(({ data, id }) => (
            <SwiperSlide key={id} className="swiper-slide">
           <img src={data.imgUrls[0]} alt="" className='swiperSlideImg'/>
           <p className='swiperSlideText'>{data.name}</p>
                <p className='swiperSlidePrice'>
                  ${data.discountedPrice ?? data.regularPrice}{' '}
                  {data.type === 'rent' && '/ month'}
                </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    )
  )
}

export default Slider