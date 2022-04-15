import React, { Fragment, useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet'

const Home = (): JSX.Element => {
  const [open, setOpen] = useState(false)

  return (
  <div className="pageLayout">
    <p>Visible from Matomo</p>
    <p data-matomo-mask>Hidden from Matomo</p>
    <button onClick={() => setOpen(true)}>Open bottom sheet</button>
    <BottomSheet open={open} header={
        <Fragment>
          <p>Visible by Matomo</p>
          <p data-matomo-mask>Hidden from Matomo</p>
          <button onClick={() => setOpen(false)}>Close Sheet</button>
        </Fragment>
      }>
        {/* BottomSheet body */}
      <div>
        <p>Visible from Matomo</p>
        <p data-matomo-mask>Hidden from Matomo</p>
        <button onClick={() => setOpen(false)}>Close Sheet</button>
      </div>
    </BottomSheet>
  </div>
)}

export default Home;
