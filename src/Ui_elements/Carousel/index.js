import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { forwardRef } from 'react';

import { SellerCard } from '../../Pages/Shared/Components';

export const Carousel = forwardRef(({
  data,
  width,
  renderCard
}, ref) => {
  return (
    <Container>
    <Swiper
      autoplay
      ref={ref}
      slidesPerView={(window.innerWidth / width) || 4}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
    >
      {data ? (
        data.map((item, index) => (
          <SwiperSlide
            key={index}
          >
            {renderCard(item, index)}
          </SwiperSlide>
        ))
      ) : (
        [...Array(12)].map((_, index) => (
          <SwiperSlide
            style={{
              backgroundColor: "green",
            }}
            key={index}
          >
            {renderCard(null, index)}
          </SwiperSlide>
        ))
      )}
    </Swiper>
  </Container>
  );
});

Carousel.displayName = 'Carousel'

const Container = styled.div`
  width: 100%;
  /* background-color: red; */
`