import React from 'react'
import styled from 'styled-components'

import RestartButton from './RestartButton'

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
`

const Summary = () => {
  return (
    <SummaryContainer>
      <h1>Well done, you finished the game!</h1>
      <RestartButton />
    </SummaryContainer>
    
  )
}

export default Summary
