import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Banner() {
  const onClickItem = () => {};

  return (
    <Carousel showArrows={true} onClickItem={onClickItem} className="dark:bg-black dark:text-white">
      <section className="h-auto bg-yellow-900 relative">
        <img src="img/banner.jpg" alt="목재 라켓" />
        <div className="absolute w-full top-60 text-center text-gray-50 drop-shadow-2xl">
          <h2 className="text-7xl font-extrabold m-10">THE ORIGINAL WOOD RACKETS</h2>
          <p className="text-2xl font-bold">철제 라켓과 비교해도 손색없는 내구력</p>
          <p className="text-2xl font-bold ">클래식함과 기능 모두 놓치지 마세요</p>
        </div>
      </section>
      <section className="h-auto bg-yellow-900 relative">
        <img src="img/banner1.jpg" alt="쳐다보는 여자" />
        <div className="absolute w-full top-60 text-center text-gray-50 drop-shadow-2xl">
          <h2 className="text-7xl font-extrabold m-10">THE ORIGINAL WOOD RACKETS</h2>
          <p className="text-2xl font-bold">무엇을 원하든 무한한 가능성으로</p>
          <p className="text-2xl font-bold ">초심자를 위한 테니스의 모든 것</p>
        </div>
      </section>
      <section className="h-auto bg-yellow-900 relative">
        <img src="img/banner2.jpg" alt="테니스하는 사람" />
        <div className="absolute w-full top-60 text-center text-gray-50 drop-shadow-2xl">
          <h2 className="text-7xl font-extrabold m-10">THE ORIGINAL WOOD RACKETS</h2>
          <p className="text-2xl font-bold">지금까지의 테니스는 잊어라!</p>
          <p className="text-2xl font-bold ">차원이 다른 클래스를 경험해보세요</p>
        </div>
      </section>
    </Carousel>
  );
}
