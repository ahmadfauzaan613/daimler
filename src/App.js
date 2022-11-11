import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Image from './Components/Image'
import Wrapper from './Components/Wrapper'
import Wrapper2 from './Components/Wrapper2'
import AdminPage from './Page/AdminPage'
import ArchiveExam from './Page/ArchiveExam'
import Article from './Page/Article'
import DetailBerita from './Page/DetailBerita'
import Exam from './Page/Exam'
import Home from './Page/Home'
import ListOfparticipant from './Page/ListOfparticipant'
import Login from './Page/Login'
import Marteri from './Page/Marteri'
import Materi from './Page/MateriDetail'
import UserPage from './Page/UserPage'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Wrapper isProtect={false} isSidebar={false}>
                <Login />
              </Wrapper>
            }
          />
          <Route
            path="/home"
            element={
              <Wrapper isProtect={false} isSidebar={false}>
                <Home />
              </Wrapper>
            }
          />
          <Route
            path="/user-exam"
            element={
              <Wrapper2 isProtect={true} isSidebar={true}>
                <UserPage />
              </Wrapper2>
            }
          />
          <Route
            path="/user-exam/exam"
            element={
              <Wrapper2 isProtect={true} isSidebar={true}>
                <Exam />
              </Wrapper2>
            }
          />
          <Route
            path="/admin"
            element={
              <Wrapper2 isProtect={true} isSidebar={true}>
                <AdminPage />
              </Wrapper2>
            }
          />
          <Route
            path="/admin/archive"
            element={
              <Wrapper2 isProtect={true} isSidebar={true}>
                <ArchiveExam />
              </Wrapper2>
            }
          />
          <Route
            path="/home/article/detail"
            element={
              <Wrapper isProtect={false} isSidebar={false}>
                <DetailBerita />
              </Wrapper>
            }
          />
          <Route
            path="/home/article"
            element={
              <Wrapper isProtect={false} isSidebar={false}>
                <Article />
              </Wrapper>
            }
          />
          <Route
            path="/home/images"
            element={
              <Wrapper isProtect={false} isSidebar={false}>
                <Image />
              </Wrapper>
            }
          />
          <Route
            path="/list-of-participants"
            element={
              <Wrapper isProtect={false} isSidebar={false}>
                <ListOfparticipant />
              </Wrapper>
            }
          />
          <Route
            path="/user-exam/materi"
            element={
              <Wrapper2 isProtect={true} isSidebar={true}>
                <Marteri />
              </Wrapper2>
            }
          />
          <Route
            path="/user-exam/materi/detail"
            element={
              <Wrapper2 isProtect={true} isSidebar={true}>
                <Materi />
              </Wrapper2>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
