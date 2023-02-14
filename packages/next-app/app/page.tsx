import '../styles/globals.css';
import Header from '~/components/Header';
import ButtonRow from '~/components/ButtonRow';
export default function Home() {
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
