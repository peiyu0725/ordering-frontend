import { Card, CardMedia, CardContent } from '@material-ui/core';
import styles from '../../styles/components/PdCard.module.sass'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const PdCard = (props) => {
    const handleImageError = (e) => {
        console.log(e)
        // e.target.onerror = null;
        // // e.target.style.display = 'none'
        // e.target.src = "https://dummyimage.com/250x150/bababa/ffffff&text=+++IMAGE+NOT+FOUND"
    }
    return (
        <Card className={styles.pdCard}>
            <LazyLoadImage className={styles.pdCardMedia} src={props.url} width="100%" effect="blur" placeholderSrc={props.url}/>
            {/* <CardMedia
                component="img"
                className={styles.pdCardMedia}
                image={props.url}
                onError={handleImageError}
            /> */}
            <CardContent classes={{
                root: styles.cardContent
            }}>
                {props.children}
            </CardContent>
        </Card>
    )
}

export default PdCard