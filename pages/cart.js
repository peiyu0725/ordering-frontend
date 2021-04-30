import styles from '../styles/page/Cart.module.sass'
import { useState, useEffect } from 'react';
import Image from 'next/image'
import { fetchCart } from '../apis/carts'

const Cart = () => {
  const [cartList, setCartList] = useState([])
  const initData = async () => {
    const { data } = await fetchCart()
    setCartList(data.data)
  }
  const sumPrice = () => {
    return cartList.reduce((a, b) => a + (b.price || 0), 0);
  }

  useEffect(() => {
    initData()
  }, [])

  return (
    <div className={styles.cartPage}>
      <h2 className={styles.cartTitle}>Order Detail</h2>
      <div className={styles.cartItemWrapper}>
        {cartList.map((item, index) => (
          <div className={styles.cartItem} key={item.id}>
            <div className={styles.itemImage}>
              <Image src={item.image} layout="intrinsic" width={166.67} height={100} lazy></Image>
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