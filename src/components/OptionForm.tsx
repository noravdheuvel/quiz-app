import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';  


interface OptionFormProps {
    questionOptions: string[];
    optionSelections: boolean[];
    handleOptionChange: (optionIndex: number, isSelected: boolean) => void;
}

const OptionForm: React.FC<OptionFormProps> = ({questionOptions, optionSelections, handleOptionChange}) => {
  return (
    <FormGroup>
        {questionOptions.map((option, idx) => (
            <FormControlLabel 
                key={`option-${idx}`} 
                control={<Checkbox />} 
                checked={optionSelections[idx]}
                onChange={(event) => {
                    handleOptionChange(idx, (event.target as HTMLInputElement).checked);
                }}
                label={option} 
            />
        ))}
    </FormGroup>
    );
}
export default OptionForm;