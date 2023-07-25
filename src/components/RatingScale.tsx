import styled from "@emotion/styled";
import { useEffect, useState } from "react";

interface RatingScaleProps {
    lowLabel: string
    highLabel: string
    topOfScale: number
    onSubmit: (value: string) => void
    submitLabel: string
    onCancel: () => void
    cancelLabel: string
}

const RatingScale = (props: RatingScaleProps) => {
    const { lowLabel, highLabel, topOfScale, onSubmit, submitLabel, onCancel, cancelLabel } = props;
    const [range, setRange] = useState<string[]>([]);
    const [selected, setSelected] = useState<string>();
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        const generatedRange: string[] = [];

        for (let i = 1; i <= topOfScale; i++) {
            generatedRange.push(i.toString());
        }

        setRange(generatedRange);
    }, [topOfScale])

    const setSelectedRating = (value: string) => {
        setSelected(value);
    }

    const submitAction = () => {
        setShowError(false);

        if (selected) {
            onSubmit(selected);
        } else {
            setShowError(true);
        }
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>
                {range.map((rangeItem) => <RatingScaleItem label={rangeItem} onSelected={setSelectedRating} selected={selected === rangeItem}/> )}
            </div>
            {showError && <span style={{color: 'red'}}>Please select a rating.</span>}
            <div style={{ display: "flex", justifyContent: 'space-between' }}>
                <div style={{flex: 1}}>{lowLabel}</div>
                <div style={{flex: 1}}>{highLabel}</div>
            </div>
            <div style={{ display: "flex", flexDirection: "row", marginTop: '2rem'}}>
                <div style={{flex: 1, margin: '1rem'}}>
                    <div style={{padding: '1rem', border: '5px solid blue', borderRadius: '2rem'}} onClick={onCancel}>{cancelLabel}</div>
                </div>
                <div style={{flex: 1, margin: '1rem'}}>
                    <div style={{padding: '1rem', borderRadius: '2rem', background: 'blue', border: '5px solid blue', color: 'white'}} onClick={submitAction}>{submitLabel}</div>
                </div>
            </div>
        </div>
    )
}

interface RatingScaleItemProps {
    label: string
    onSelected: (value: string) => void
    selected: boolean
}

const RatingScaleItem = (props: RatingScaleItemProps) => {
    const { label, onSelected, selected } = props;

    return (
        <div style={{margin: '1rem'}} onClick={() => { onSelected(label) }}>
            {selected ? 
                <SelectedScaleItem>
                    {label}
                </SelectedScaleItem>
                :
                <ScaleItem>
                    {label}
                </ScaleItem>
            }
        </div>
    )
}

const ScaleItem = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
    borderRadius: '2rem',
    height: '2rem',
    width: '2rem',
    background: 'gray',
    color: 'black'
})

const SelectedScaleItem = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
    borderRadius: '2rem',
    height: '2rem',
    width: '2rem',
    background: 'blue',
    color: 'white'
})

export default RatingScale;