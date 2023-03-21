import { useSelector } from "react-redux";


const HolderComponent = () =>{

    const quantity = useSelector((state) => state.quantity)
    return (
<div>
    Nicelik : {quantity}
</div>
    )
}

export default HolderComponent;