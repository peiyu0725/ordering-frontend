import { Card, CardMedia, CardContent } from '@material-ui/core';
import styles from '../../styles/components/PdCard.module.sass'

const PdCard = (props) => {
    const handleImageError = (e) => {
        e.target.onerror = null;
        e.target.src = "/image/image_not_found.png"
    }
    return (
        <Card className={styles.pdCard} onClick={props.onClick}>
            <CardMedia
                component="img"
                className={styles.pdCardMedia}
                image={props.url}
                width="176px"
                height="105.6px"
                onError={handleImageError}
            />
            <CardContent classes={{
                root: styles.cardContent
            }}>
                {props.children}
            </CardContent>
        </Card>
    )
}

export default PdCard