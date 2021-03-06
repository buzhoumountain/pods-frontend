import React from 'react'

import {
  FAQ_CLASSES,
  SECTION_CLASSES
} from 'lib/constants'

export function ExplanationBanner() { 
  return <div
    className='text-left bg-denverPurple-700 lg:w-3/4 my-6 mx-auto px-10 pt-2 pb-4 rounded-2xl'
  >
    <div
      className={SECTION_CLASSES}
    >
      FAQ
    </div>

    <div
      className={FAQ_CLASSES}
    >
      What is this?
      <br />
      <span className='text-white'>
        You've found the EthDenver 2020 PoolTogether Pod!
      </span>
    </div>

    <div
      className={FAQ_CLASSES}
    >
      What is a Pod?
      <br />
      <span className='text-white'>
        A PoolTogether Pod is a collection of friends who share their chances to win PoolTogether prizes.
      </span>
    </div>

    <div
      className={FAQ_CLASSES}
    >
      What does mean to me?
      <br />
      <span className='text-white'>
        Holding tickets in this Pod gives you:

        <ul>
          <li
            className='text-sm sm:text-base lg:text-lg text-purple-400 ml-4 mt-1'
          >
            &bull; a chance to win a daily prize in this Pod
          </li>
          <li
            className='text-sm sm:text-base lg:text-lg text-purple-400 ml-4 mt-1'
          >
            &bull; a chance to win a share of the main PoolTogether weekly prize of $6,666 Dai!
          </li>
        </ul>
      </span>
    </div>
  </div>
}
