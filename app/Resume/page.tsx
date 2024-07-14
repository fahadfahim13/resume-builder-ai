"use client";

import React from 'react'
import { RootState } from '@/lib/redux/store'
import { useSelector } from 'react-redux'

const ResumeView = () => {
    const resume = useSelector((state: RootState) => state.resume);
  return (
    <div>{resume.aboutMe.description}</div>
  )
}

export default ResumeView