
import React from 'react';
import { Container, StepBlock } from './styles';

export type Operation = 'positive' | 'negative';

interface StepperProps {
    onChange: (operation: Operation) => void
    value: string
}

export const Stepper = ({ value, onChange }: StepperProps) => {

    const handleClickStep = (operation: Operation) => {
        onChange(operation);
    }

    return (
        <Container>
            <StepBlock
                onClick={() => handleClickStep('negative')}
                border='right'
            >-</StepBlock>
            <StepBlock>{value}</StepBlock>
            <StepBlock
                onClick={() => handleClickStep('positive')}
                border='left'>+</StepBlock>
        </Container>
    )
}