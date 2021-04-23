import styles from '../styles/page/Cart.module.sass'
import { useState, useEffect } from 'react';
import Image from 'next/image'

const Cart = () => {
  const [cartList, setCartList] = useState([])
  const initData = () => {
    setCartList([
      {
        id: 1,
        name: 'product1',
        price: 20,
        img: 'https://picsum.photos/id/1/250/150'
      },
      {
        id: 2,
        name: 'product2',
        price: 50,
        img: 'https://picsum.photos/id/2/250/150'
      },
      {
        id: 3,
        name: 'product3',
        price: 20,
        img: 'https://picsum.photos/id/3/250/150'
      },
      {
        id: 4,
        name: 'product4',
        price: 100,
        img: 'https://picsum.photos/id/4/250/150'
      }
    ])
  }
  const sumPrice = () => {
    return cartList.reduce((a, b) => a + (b.price || 0), 0);
  }

  useEffect(() => {
    initData()
  }, [])

  return (
    <div className={styles.cartPage}>
      <h2 className={styles.cartTitle}>Cart</h2>
      <div className={styles.cartItemWrapper}>
        {cartList.map((item, index) => (
          <div className={styles.cartItem} key={item.id}>
            <div className={styles.itemImage}>
              <Image src={item.img} layout="intrinsic" width={250} height={150} lazy></Image>
            </div>
            <div className={styles.itemContent}>
              <div className={styles.itemTitle}>{item.name}</div>
            </div>
            <div className={styles.itemPrice}>$ {item.price}</div>
          </div>
        ))}
        <div className={styles.cartTotal}>Total $ {sumPrice()}</div>
      </div>
    </div>
  )
}

export default Cart