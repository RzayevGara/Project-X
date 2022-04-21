import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import "./skeleton.sass"


const SkeletonPhone = ()=>{
    return(
        <>
            <Skeleton className="skeleton-image" animation="wave" />
            <Skeleton className="skeleton-title" animation="wave" />
            <Skeleton className="skeleton-text" animation="wave" />
        </>
    )
}

export default SkeletonPhone