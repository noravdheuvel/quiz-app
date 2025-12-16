import Typography from '@mui/material/Typography'; 

interface QuestionProps {
    questionText: string;
}

const Question: React.FC<QuestionProps> = ({ questionText }) => {
    return (
        <Typography variant='h2'>{questionText}</Typography>
    );
}

export default Question;