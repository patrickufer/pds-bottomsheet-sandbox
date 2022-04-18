import { PButton, PText } from '@porsche-design-system/components-react';
import React, { Fragment, useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet'

const Home = (): JSX.Element => {
  const [open, setOpen] = useState(false)
  const [blocking, setBlocking] = useState(true)
  const [count, setCount] = useState(0)

  return (
  <div className="pageLayout">
    <button onClick={() => setOpen(true)}>Open bottom sheet</button>
    <hr/>
    <PText>Button clicked: {count.toString()} times</PText>
    <PText>Blocking: {blocking.toString()}</PText>
    <button onClick={() => setBlocking(!blocking)}>Toggle BottomSheet blocking</button>
    <BottomSheet blocking={blocking} open={open} header={
        <Fragment>
          <button onClick={() => setOpen(false)}>Close Sheet</button><br/><br/>
          <PButton onClick={() => setCount(count + 1)}>Click this PButton</PButton>
        </Fragment>
      }>
        {/* BottomSheet body */}
      <div>
        <button onClick={() => setOpen(false)}>Close Sheet</button><br/><br/>
        <PButton onClick={() => setCount(count + 1)}>Click this PButton</PButton>
      </div>
    </BottomSheet>
  </div>
)}

export default Home;
