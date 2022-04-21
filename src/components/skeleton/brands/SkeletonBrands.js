import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import "../brands/skeleton-brands.sass"


const SkeletonBrands = ()=>{
    return(
        <>
            <Skeleton className="skeleton-brands" animation="wave" />
        </>
    )
}

export default SkeletonBrands