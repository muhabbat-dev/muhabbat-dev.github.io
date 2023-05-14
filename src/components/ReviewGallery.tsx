import React from 'react'

const ReviewGallery = () => {
    const reviews = ['review-1.png', 'review-2.jpeg', 'review-3.png', 'review-4.png', 'review-5.png']
  return (
    <div>
        <h1 className='font-mono font-bold text-2xl my-10'>What People Think about me</h1>
        <div className="carousel w-full">
            {reviews.map((review, index) => <div key={index}  id={"remarks" + index} className="carousel-item relative w-full flex justify-center">
                <img src={review} className="max-h-96  opacity-40 self-center " />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href={index == 0 ? '#remarks' + (reviews.length - 1): '#remarks' + (index - 1)} className="btn btn-circle opacity-40">❮</a> 
                    <a href={index == reviews.length - 1? '#remarks0': '#remarks' + (index + 1)} className="btn btn-circle opacity-40">❯</a>
                </div>
            </div> )}
        </div>
    </div>
  )
}

export default ReviewGallery