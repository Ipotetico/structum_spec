import React,{useState} from 'react'
import Page01 from './components/Page01/Page01';
import Page02 from './components/Page02/Page02';
import Page03 from './components/Page03/Page03';
import Page04 from './components/Page04/Page04';
import Page05 from './components/Page05/Page05';
import Page06 from './components/Page06/Page06';
import Page07 from './components/Page07/Page07';
import Page08 from './components/Page08/Page08';
import Page09 from './components/Page09/Page09';
import Page10 from './components/Page10/Page10';
import Page11 from './components/Page11/Page11';
import Page12 from './components/Page12/Page12';
import Page13 from './components/Page13/Page13';
import Page14 from './components/Page14/Page14';
import Page15 from './components/Page15/Page15';
import Page16 from './components/Page16/Page16';
import Page17 from './components/Page17/Page17';
import Page18 from './components/Page18/Page18';
import Page19 from './components/Page19/Page19';
import Page20 from './components/Page20/Page20';
import Page21 from './components/Page21/Page21';
import Page22 from './components/Page22/Page22';

const App = () => {

  const [page, setPage] = useState(1)
  return (
    <>
{page === 1 &&  <Page01 setPage={setPage}/>}
{page === 2 &&  <Page02 setPage={setPage}/>}
{page === 3 &&  <Page03 setPage={setPage}/>}
{page === 4 &&  <Page04 setPage={setPage}/>}
{page === 5 &&  <Page05 setPage={setPage}/>}
{page === 6 &&  <Page06 setPage={setPage}/>}
{page === 7 &&  <Page07 setPage={setPage}/>}
{page === 8 &&  <Page08 setPage={setPage}/>}
{page === 9 &&  <Page09 setPage={setPage}/>}
{page === 10 &&  <Page10 setPage={setPage}/>}
{page === 11 &&  <Page11 setPage={setPage}/>}
{page === 12 &&  <Page12 setPage={setPage}/>}
{page === 13 &&  <Page13 setPage={setPage}/>}
{page === 14 &&  <Page14 setPage={setPage}/>}
{page === 15 &&  <Page15 setPage={setPage}/>}
{page === 16 &&  <Page16 setPage={setPage}/>}
{page === 17 &&  <Page17 setPage={setPage}/>}
{page === 18 &&  <Page18 setPage={setPage}/>}
{page === 19 &&  <Page19 setPage={setPage}/>}
{page === 20 &&  <Page20 setPage={setPage}/>}
{page === 21 &&  <Page21 setPage={setPage}/>}
{page === 22 &&  <Page22 setPage={setPage}/>}
    </>

  )
}

export default App