import { useRef, useEffect } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import CourseCard from './CourseCard'

interface Course {
  id: string
  title: string
  weeks: number
  level: string
  image: string
}

interface Props {
  courses: Course[]
  showProgress?: boolean
}

export default function CourseSlider({ courses, showProgress = true }: Props) {
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)
  const swiperRef = useRef<SwiperType | null>(null)

  useEffect(() => {
    const swiper = swiperRef.current
    if (!swiper || !prevRef.current || !nextRef.current) return
    if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
      swiper.params.navigation.prevEl = prevRef.current
      swiper.params.navigation.nextEl = nextRef.current
    }
    swiper.navigation.init()
    swiper.navigation.update()
  }, [])

  return (
    <div>
      <Swiper
        modules={[Navigation]}
        loop
        onSwiper={swiper => {
          swiperRef.current = swiper
        }}
        slidesPerView={1}
        spaceBetween={16}
        breakpoints={{
          768: { slidesPerView: 2, spaceBetween: 16 },
          1280: { slidesPerView: 3, spaceBetween: 20 },
        }}
        className="w-full max-w-7xl mx-auto"
      >
        {courses.map(course => (
          <SwiperSlide key={course.id} className="flex items-center justify-center">
            <div className="w-[360px] px-4">
              <CourseCard
                id={course.id}
                title={course.title}
                weeks={course.weeks}
                level={course.level}
                image={course.image}
                showProgress={showProgress}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="container mx-auto flex flex-col items-center mt-6 space-y-4">
        <div className="flex gap-4">
          <button
            ref={prevRef}
            className="flex items-center gap-1 px-3 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
            aria-label="Anterior"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            <span className="hidden sm:inline">Anterior</span>
          </button>
          <button
            ref={nextRef}
            className="flex items-center gap-1 px-3 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
            aria-label="Siguiente"
          >
            <span className="hidden sm:inline">Siguiente</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
