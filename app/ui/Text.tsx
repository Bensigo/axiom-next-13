'use client'
import React from 'react'
import { useLogger } from 'next-axiom';

export default function Text({ children }: any) {
 const log = useLogger();

  log.info('this is from the client')
  return (
    <div>
        {children}
    </div>
  )
}
