import { TextField, InputAdornment } from '@material-ui/core';
import styles from '../styles/page/Home.module.sass'
import { Search } from '@material-ui/icons';
import PdCard from './components/PdCard'
import { useState, useEffect } from 'react';
import clsx from  'clsx';
import { fetchMenu } from '../apis/menus'
import { useRouter } from 'next/router'

const Home = () => {
  const router = useRouter()
  const [imageList, setImageList] = useState([])
  const initData = async () => {
    const { data } = await fetchMenu()
    setImageList(data)
  };

  const directProduct = (id) => {
    router.push(`/product/${id}`)
  }

  useEffect(() => {
    initData()
  }, [])

  return (
    <div>
      <div className={clsx(styles.searchWrapper, styles.lightWrapper)}>
        <TextField className={styles.serachField}
          type="search" variant="outlined" placeholder="Search"
          InputProps={{
            classes:{
              root: styles.searchInput
            },
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }} />
      </div>
      <div className={clsx(styles.contentWrapper, styles.darkWrapper)}>
          <div className={styles.cardWrapper}>
            {imageList.map(item => (
              <PdCard url={item.image} key={item.id} onClick={() => directProduct(item.id)}>
                <div className={styles.cardTitle}>{item.name}</div>
              </PdCard>
            ))}
          </div>
      </div>
    </div>
  )
}

export default Home
