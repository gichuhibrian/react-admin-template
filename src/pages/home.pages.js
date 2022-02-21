import React from 'react'
import NavHeader from '../components/NavHeader.components'
import Sidebar from '../components/Sidebar.components'
import Profile from '../pages/profile.pages'
import Form from '../pages/form.pages'

import {Routes, Route } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <NavHeader />
      <Sidebar />
      <div class="content-body">
        <div class="container-fluid">
          <div class="row page-titles">
            <ol class="breadcrumb">
              <li class="breadcrumb-item active"><a href="javascript:void(0)">Form</a></li>
              <li class="breadcrumb-item"><a href="javascript:void(0)">Validation</a></li>
            </ol>
          </div>
          <Routes>
              <Route exact path='/' element={<Profile />} />
              <Route exact path='/home/company' element={<Form />} />

          </Routes>
        </div>
      </div>
    </div>
  )
}
