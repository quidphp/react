// helloWorld

// import
import styled from 'styled-components';
import { useState } from 'react'
const color = 'green';

// export
export default () => {
    const [test, setTest] = useState('');
    
    const onClickHandler = () => {
        d('click');
    }
    
    const onChangeHandler = (event) => {
        d('change');
        setTest(event.target.value);
    }
    
    return (
    <>
        <H1Styled>Hello World</H1Styled>
        <input type='text' value={test} onChange={onChangeHandler} onClick={onClickHandler} />
    </>
    );
};

// style
const H1Styled = styled.h1`
  color: ${color};
  text-decoration: underline;
  
  &:hover {
      color: red;
  }
`;