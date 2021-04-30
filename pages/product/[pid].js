import styles from '../../styles/page/Product.module.sass'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { fetchProduct } from '../../apis/products'
import Image from 'next/image'

const Product = () => {
  const router = useRouter()
  const { pid } = router.query
  const [product, setProduct] = useState([])
  const initData = async () => {
    const { data } = await fetchProduct(pid)
    console.log(data)
    setProduct(data)
  }

  const sumPrice = () => {
    return cartList.reduce((a, b) => a + (b.price || 0), 0);
  }

  useEffect(() => {
    initData()
  }, [pid])

  return (
    <div className={styles.productPage}>
      {product.image &&
        <Image src={product.image} layout="intrinsic" width="750" height="450" lazy="true"></Image>
      }
      <div>{product.name}</div>
    </div>
  )
}

export default Product