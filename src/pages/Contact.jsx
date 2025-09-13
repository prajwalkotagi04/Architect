import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Address from '../components/Contact/Address'
import Formsection from '../components/Contact/Formsection'

export default function Contact() {
  return (
    <>
        
        <Breadcrumb label='Contact' page='Contact'/>
        <Address />
        <Formsection />
    </>
  )
}
