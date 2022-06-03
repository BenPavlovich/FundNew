import React, { useState } from 'react'
import { Fund } from '../Fund/Fund'
import "./Fundlist.css"
import { Data } from '../../assets/Data'
import { render } from '@testing-library/react'

export const FundList = () => {
  const [funds, setFunds] = useState(Data);

  return (
    <section className='fundlist'>
      {funds.map(fund => <Fund key={fund.id} fund={fund}/>)}
    </section>
  )
}

