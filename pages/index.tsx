import { PButton } from '@porsche-design-system/components-react';
import React, { Fragment, useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet'

const Home = (): JSX.Element => {
  const [open, setOpen] = useState(false)
  const [blocking, setBlocking] = useState(true)
  const [count, setCount] = useState(0)

  return (
  <div className="pageLayout">
    <p>Visible from Matomo</p>
    <p data-matomo-mask>Hidden from Matomo</p>
    <button onClick={() => setOpen(true)}>Open bottom sheet</button>
    <hr/>
    <p>Button clicked: {count.toString()} times</p>
    <p>Blocking: {blocking.toString()}</p>
    <button onClick={() => setBlocking(!blocking)}>Toggle BottomSheet blocking</button>
    <BottomSheet blocking={blocking} open={open} header={
        <Fragment>
          <p>Visible by Matomo</p>
          <p data-matomo-mask>Hidden from Matomo</p>
          <button onClick={() => setOpen(false)}>Close Sheet</button><br/><br/>
          <PButton onClick={() => setCount(count + 1)}>Click this PButton</PButton>
        </Fragment>
      }>
        {/* BottomSheet body */}
      <div>
        <p>Visible from Matomo</p>
        <p data-matomo-mask>Hidden from Matomo</p>
        <button onClick={() => setOpen(false)}>Close Sheet</button><br/><br/>
        <PButton onClick={() => setCount(count + 1)}>Click this PButton</PButton>
      </div>
    </BottomSheet>
  </div>
)}

export default Home;
