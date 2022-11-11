import React from 'react'
import { useNavigate } from 'react-router-dom'

function BarArticle() {
  const navigate = useNavigate()
  const location = window.location.pathname
  return (
    <div className="flex items-center justify-center gap-x-10 mt-[1%]">
      {location === '/home/article' ? (
        <div>
          <p onClick={() => navigate('/home/article')} className="cursor-pointer font-bold">
            Articles
          </p>
          <div className="bg-black w-full h-[2px]"></div>
        </div>
      ) : (
        <p onClick={() => navigate('/home/article')} className="cursor-pointer">
          Articles
        </p>
      )}

      {location === '/home/images' ? (
        <div>
          <p onClick={() => navigate('/home/images')} className="cursor-pointer font-bold">
            Image
          </p>
          <div className="bg-black w-full h-[2px]"></div>
        </div>
      ) : (
        <p onClick={() => navigate('/home/images')} className="cursor-pointer">
          Image
        </p>
      )}
    </div>
  )
}

export default BarArticle
