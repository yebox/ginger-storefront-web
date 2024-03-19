import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { forwardRef } from 'react';
import { Empty } from '../Empty';

import { SellerCard } from '../../Pages/Shared/Components';

export const Carousel = forwardRef(({
  data,
  width,
  renderCard,
  sellerCardDetails
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
        {(data && data?.length > 0) ? (
          data.map((item, index) => (
            <SwiperSlide
              key={index}
            >
              {renderCard && renderCard(item, index)}
            </SwiperSlide>
          ))
        ) : (
          <Empty />
          // [...Array(12)].map((_, index) => (
          //   <SwiperSlide
          //     style={{
          //       backgroundColor: "green",
          //     }}
          //     key={index}
          //   >
          //     <SellerCard item={sellerCardDetails} />
          //   </SwiperSlide>
          // ))
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