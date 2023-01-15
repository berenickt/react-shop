import React from 'react';
import { FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const footerSmallFont = 'text-neutral-500 text-sm my-1';

export default function Footer() {
  return (
    <footer className=" bg-black text-white p-8">
      <h4 className="mt-4 text-4xl my-10">쇼오핑</h4>
      <div className="flex justify-between">
        <div>
          <div className="flex gap-4 my-4">
            <Link to="/products" className="p-1 border-gray-200">
              회사소개
            </Link>
            <Link to="/products" className="p-1 border-gray-200">
              이용약관
            </Link>
            <Link to="/products" className="p-1 border-gray-200">
              개인정보처리방침
            </Link>
            <Link to="/products" className="p-1 border-gray-200">
              이용안내
            </Link>
          </div>
          <div className="flex justify-between">
            <div>
              <div className="flex gap-3">
                <p className={footerSmallFont}>법인명 : 유승우</p>
                <p className={footerSmallFont}>대표자 : 유승우</p>
                <p className={footerSmallFont}>사업자 번호 : 123-45-678910</p>
              </div>
              <p className={footerSmallFont}>통신판매업 신고 2023-뭐시기-1234</p>
              <p className={footerSmallFont}>주소: [04383] 서울특별시 용산구 이태원로 22</p>
              <p className={footerSmallFont}>
                구매안전서비스 : 고객님은 안전거래를 위해 현금 등으로 결제시 저희 쇼핑몰이 가입한
                구매안전서비스를 이용하실 수 있습니다.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="">
            <div>
              <div>CUSTOMER SERVICE</div>
              <div>123-456-7898</div>
              <div className="customerCenter__telephone">
                <span className={footerSmallFont}>평일 09:00 ~ 18:00 (점심 12:00 ~ 13:00)</span>
                <span className={footerSmallFont}>주말 및 공휴일 휴무</span>
                <span className="sr-only">전화번호</span>
              </div>
            </div>
            <div className="flex gap-3">
              <Link to="https://www.facebook.com/">
                <FaFacebookF className="w-6 h-6" />
              </Link>
              <Link to="https://www.instagram.com/">
                <FaInstagram className="w-6 h-6" />
              </Link>
              <Link to="https://github.com/berenickt">
                <FaGithub className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <p className="text-neutral-500 text-sm text-center my-9">
        Copyright© 2022 SeungWoo. All rights reserved.
      </p>
    </footer>
  );
}
