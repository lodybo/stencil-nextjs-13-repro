'use client';

import '../styles/globals.css';
import Header from '~/components/Header';
import ButtonRow from '~/components/ButtonRow';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    import('component-lib/loader')
      .then(({ defineCustomElements }) => defineCustomElements())
  }, [])

  return (
    <>
      <Header />

      <div className="page">
        <h1>Hello World</h1>
        <ButtonRow />
      </div>
    </>
  )
}
