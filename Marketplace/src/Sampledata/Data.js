// initialData.js
import { GrRobot } from 'react-icons/gr';
import DSGN from  '../assets/robot/D1.avif';
import D1 from  '../assets/robot/D1.avif';
import D3 from  '../assets/robot/D3.avif';
import D4 from  '../assets/robot/D4.jfif';
import mushrooms from  '../assets/robot/m1.avif';
import m1 from  '../assets/robot/m1.avif';
import m2 from  '../assets/robot/m2.avif';
import m3 from  '../assets/robot/m3.avif';
import robot from  '../assets/robot/rc1.jfif';
import r1 from  '../assets/robot/rc2.jfif';
import r2 from  '../assets/robot/rc3.jfif';
import r3 from  '../assets/robot/rc4.jfif';

export const initialProducts = [
    {
      id: 1,
      productName: 'DSGN Animals',
      creater:"MrFox",
      price: 100,
      price:"1.32 ETH",
      HighetBid:"0.32 wETH",
      // profile: {
      //   contact: {
      //     phone: '123-456-7890',
      //   },
        photo: DSGN,
        images: [
          D1,
          D3,
          D4,
        ],
      },
      {
        id: 2,
        productName: 'Magic Mushrooms',
        creater:"Shroomie",
        price: 150,
        price:"1.32 ETH",
        HighetBid:"0.32 wETH",
        // profile: {
        //   contact: {
        //     phone: '123-456-7890',
        //   },
          photo: mushrooms,
          images: [
            m1,
            m2,
            m3,
          ],
        },
        {
          id: 3,
          productName: 'Disco Machines',
          creater:"BekindtoRobots",
          price: 200,
          price:"1.32 ETH",
          HighetBid:"0.32 wETH",
          // profile: {
          //   contact: {
          //     phone: '123-456-7890',
          //   },
            photo: robot,
            images: [
              r1,
              r2,
              r3,
            ],
          },
          
    // {
    //   id: 2,
    //   name: 'Product 2',
    //   price: 150,
    //   price:"1.32 ETH",
    //   HighetBid:"0.32 wETH",
    //   profile: {
    //     contact: {
    //       phone: '098-765-4321',
    //     },
    //     photo: '/images/profile2.jpg',
    //     images: [
    //       '/images/product2_1.jpg',
    //       '/images/product2_2.jpg',
    //       '/images/product2_3.jpg',
    //     ],
    //   },
    // },
    // {
    //   id: 3,
    //   name: 'Product 2',
    //   price: 150,
    //   price:"1.32 ETH",
    //   HighetBid:"0.32 wETH",
    //   profile: {
    //     contact: {
    //       phone: '098-765-4321',
    //     },
    //     photo: '/images/profile2.jpg',
    //     images: [
    //       '/images/product2_1.jpg',
    //       '/images/product2_2.jpg',
    //       '/images/product2_3.jpg',
    //     ],
    //   },
    // },
    // {
    //   id: 4,
    //   name: 'Product 2',
    //   price: 150,
    //   price:"1.32 ETH",
    //   HighetBid:"0.32 wETH",
    //   profile: {
    //     contact: {
    //       phone: '098-765-4321',
    //     },
    //     photo: '/images/profile2.jpg',
    //     images: [
    //       '/images/product2_1.jpg',
    //       '/images/product2_2.jpg',
    //       '/images/product2_3.jpg',
    //     ],
    //   },
    // },
    // Add more products as needed
  ];
  