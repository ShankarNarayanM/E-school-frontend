import {useSpring, animated} from "react-spring";

export function Number({n})
{
    const {number} = useSpring({
        from: {number: 0},
        number: n,
        config: {tension: 20}
    });
    return <animated.div>{number.to((n)=>n.toFixed(0))}</animated.div>
}