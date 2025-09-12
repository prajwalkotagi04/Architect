import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import AboutComponent from '../components/About/About'

export default function About() {
  return (
    <>
        <Breadcrumb page='About' label='About Our Firm'/>
        <AboutComponent />
    </>
  )
}
