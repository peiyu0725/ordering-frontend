import { TextField, InputAdornment } from '@material-ui/core';
import styles from '../styles/page/Home.module.sass'
import { Search } from '@material-ui/icons';
import PdCard from './components/PdCard'
import { useState, useEffect } from 'react';
import clsx from  'clsx';

const Home = () => {
  const [imageList, setImageList] = useState([])
  const getRandom = (conut, min, max) => {
    let list = []
    for (let i = 1; i <= conut; i++) {
      list.push(Math.floor(Math.random() * (max - min + 1)) + min)
    }
    setImageList(list)
  };

  useEffect(() => {
    getRandom(20, 1, 1000)
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
            {imageList.map((item, index) => (
              <PdCard url={`https://picsum.photos/id/${item}/250/150`} key={item}>
                <div className={styles.cardTitle}>{`Image ${item}`}</div>
              </PdCard>
            ))}
          </div>
      </div>
    </div>
  )
}

export default Home
