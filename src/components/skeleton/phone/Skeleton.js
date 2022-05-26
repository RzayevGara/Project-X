import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import "./skeleton.sass"


const SkeletonPhone = ()=>{
    return(
        <div className="swipe-skeleton">
            <Skeleton className="skeleton-image" animation="wave" />
            <Skeleton className="skeleton-title" animation="wave" />
            <Skeleton className="skeleton-text" animation="wave" />
        </div>
    )
}

export default SkeletonPhone