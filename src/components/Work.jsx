import React from 'react'
import WorkItem from './WorkItem'


const data= [
    {
      year: 2022, 
      title: "Softwear developer",
      company: "Tech-19", 
      duration: "1 year", 
      details: "Lorem ipsum"
    }, 
    {
      year: 2022, 
      title: "Product manager",
      company: "MindCET",  
      duration: "1 year", 
      details: "Lorem ipsum"
    }, 
    {
      year: 2022, 
      title: "Lab Manager",
      company: "BGU",  
      duration: "2 years", 
      details: "Lorem ipsum"
    }, 
    {
      year: 2022, 
      title: "Science instructor",
      company: "Carrasso Science Park",  
      duration: "2 year", 
      details: "Lorem ipsum"
    }, 
  ]

const Work = () => {
  return (
    <div id="work" className='max-w-[1040px] m-auto pd:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
      {/* <WorkItem /> */}
      {data.map((item, idx) => (
        <WorkItem 
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  )
  }

export default Work;
