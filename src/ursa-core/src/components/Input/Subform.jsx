import { useRef, Fragment } from 'react'
import { Text } from '.'

const Subform = ({ rows }) => {
    const subformRef = useRef();
    const RenderSubform = () => {
        return (
            <div className="flex w-1/2 gap-20 items-center">
                {Object.entries(rows)?.map((row, index) => {
                    return (
                        <Text label={row[1].label} name={row[0]} key={index} showLabel />
                    );
                })}
                <div className="deleteBtn cursor-pointer">
                    <i className="fas fa-trash"></i>
                </div>
            </div>
        );
    }
    const createNew = () => subformRef.current.innerHTML += <RenderSubform />

    return (
        <>
        <div className="flex-col py-10" ref={subformRef}>
            <RenderSubform />
        </div>
        <div className="flex addBtn" onClick={createNew}>
            <i className="fas fa-plus-circle"></i>
        </div>
        </>
    )
}

export default Subform