import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import styled from '@emotion/styled';
import TodoList from '../TodoList/TodoList';
import { ITodoItem } from '../models';

interface ITodoCardProps {
  card: ITodoItem
}

const TodoCard = ({card}: ITodoCardProps) => {

  const title = `${card.date} Tasks`;

  return(
    <SAccordion>
      <AccordionSummary
        expandIcon={<KeyboardArrowDownRoundedIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <AccordionTitle>
          <span className='line'></span>
          <Typography>{title}</Typography>
        </AccordionTitle>
      </AccordionSummary>
      <AccordionDetails>
        <TodoList todoList={card.tasks}/>
      </AccordionDetails>
    </SAccordion>  
  )
}

const AccordionTitle = styled.div`
  display: flex;
  align-items: center;
`

const SAccordion = styled(Accordion)`
  background: #282828;
  box-shadow: 16px 16px 20px rgb(0 0 0 / 15%), -8px -8px 20px rgb(255 255 255 / 5%);
  border-radius: 25px;
  margin: 2rem 0;
  padding: 20px 37px 20px 15px;
  color: #F4F4F4;

  & .MuiAccordionDetails-root {
    padding: 1rem 0 0;
  }

  & .MuiAccordionSummary{
    &-root {
      min-height: 100%;
      width: 100%;
      padding: 0;
    }

    &-content {
      margin: 0;
    }

    &-expandIconWrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 21px;
      height: 21px;
      background: #F4F4F4;
      border-radius: 50%;
      color: #282828;
      & > .MuiSvgIcon-root {
        width: 1rem;
        height: 1rem;
      }
    }
  }

  &:first-of-type, :last-of-type {
    border-radius: 25px;
  }
  & h2 {
    margin: 0;
  }
`

export default TodoCard