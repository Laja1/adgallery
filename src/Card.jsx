import React from 'react'

export default function Card({darkMode}) {
    console.log(darkMode)
  return (
    <div className='gap-5 flex flex-col'><div className='flex-col lg:flex-row md-flex-col flex justify-between px-20 gap-5  items-center'>
<div className={`w-[370px] shadow-xl border-2  rounded-xl items-center justify-center flex flex-col py-6 px-7 ${darkMode ? 'bg-[#232B2B] border-[#232B2B]' : 'bg-[#fff] border-[#fff]'}`}>
        <p><img src='https://images.unsplash.com/photo-1712371963569-84c6f650a558?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-[330px] rounded-xl    '/> </p>
 <div className='flex-row flex justify-between w-[300px] items-center pt-5'>   <div className='flex-row flex gap-1 '> <div className='bg-[#f4f4f7] px-2 py-[0.5px] monteserrat rounded-2xl'><p>interior</p></div>   <div className='bg-[#f4f4f7] px-2 py-[0.5px] monteserrat rounded-2xl'><p>retail</p></div> 
    </div>
    <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-046612b9=""><path d="M32 16c0-8.83656-7.1634-16-16-16C7.16344 0 0 7.16344 0 16c0 7.9861 5.851 14.6053 13.5 15.8056V20.625H9.4375V16H13.5v-3.525c0-4.01 2.3887-6.225 6.0434-6.225 1.7506 0 3.5816.3125 3.5816.3125V10.5h-2.0176c-1.9875 0-2.6074 1.2333-2.6074 2.4986V16h4.4375l-.7094 4.625H18.5v11.1806C26.1491 30.6053 32 23.9861 32 16Z" fill="#1877F2"></path> <path d="M22.2281 20.625 22.9375 16H18.5v-3.0014c0-1.2653.6198-2.4986 2.6074-2.4986h2.0176V6.5625S21.2939 6.25 19.5434 6.25c-3.6547 0-6.0434 2.215-6.0434 6.225V16H9.4375v4.625H13.5v11.1806c.8146.1278 1.6495.1944 2.5.1944s1.6854-.0666 2.5-.1944V20.625h3.7281Z" fill="#fff"></path></svg>
    </div></div>
    

<div className={`w-[370px] shadow-xl border-2  rounded-xl items-center justify-center flex flex-col py-6 px-7 ${darkMode ? 'bg-[#232B2B] border-[#232B2B]' : 'bg-[#fff] border-[#fff]'}`}>
        <p><img src='https://images.unsplash.com/photo-1712312938983-676e2cdbb9d6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-[330px] rounded-xl '/> </p>
 <div className='flex-row flex justify-between w-[300px] items-center pt-5'>   <div className='flex-row flex gap-1 '> <div className='bg-[#f4f4f7] px-2 py-[0.5px] monteserrat rounded-2xl'><p>photography</p></div>  
  <div className='bg-[#f4f4f7] px-2 py-[0.5px] monteserrat rounded-2xl'><p>retail</p></div> 
    </div>
    <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-046612b9=""><path d="M32 16c0-8.83656-7.1634-16-16-16C7.16344 0 0 7.16344 0 16c0 7.9861 5.851 14.6053 13.5 15.8056V20.625H9.4375V16H13.5v-3.525c0-4.01 2.3887-6.225 6.0434-6.225 1.7506 0 3.5816.3125 3.5816.3125V10.5h-2.0176c-1.9875 0-2.6074 1.2333-2.6074 2.4986V16h4.4375l-.7094 4.625H18.5v11.1806C26.1491 30.6053 32 23.9861 32 16Z" fill="#1877F2"></path> <path d="M22.2281 20.625 22.9375 16H18.5v-3.0014c0-1.2653.6198-2.4986 2.6074-2.4986h2.0176V6.5625S21.2939 6.25 19.5434 6.25c-3.6547 0-6.0434 2.215-6.0434 6.225V16H9.4375v4.625H13.5v11.1806c.8146.1278 1.6495.1944 2.5.1944s1.6854-.0666 2.5-.1944V20.625h3.7281Z" fill="#fff"></path></svg>
    </div></div>
    

    <div className={`w-[370px] shadow-xl border-2  rounded-xl items-center justify-center flex flex-col py-6 px-7 ${darkMode ? 'bg-[#232B2B] border-[#232B2B]' : 'bg-[#fff] border-[#fff]'}`}>
        <p><img src='https://cdn.pixabay.com/photo/2024/03/13/19/06/ai-generated-8631634_1280.jpg' className='w-[330px] rounded-xl '/> </p>
 <div className='flex-row flex justify-between w-[300px] items-center pt-5'>   <div className='flex-row flex gap-1 '> <div className='bg-[#f4f4f7] px-2 py-[0.5px] monteserrat rounded-2xl'><p>sci-fi</p></div>   <div className='bg-[#f4f4f7] px-2 py-[0.5px] monteserrat rounded-2xl'><p>retail</p></div> 
    </div>
    <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-046612b9=""><path d="M32 16c0-8.83656-7.1634-16-16-16C7.16344 0 0 7.16344 0 16c0 7.9861 5.851 14.6053 13.5 15.8056V20.625H9.4375V16H13.5v-3.525c0-4.01 2.3887-6.225 6.0434-6.225 1.7506 0 3.5816.3125 3.5816.3125V10.5h-2.0176c-1.9875 0-2.6074 1.2333-2.6074 2.4986V16h4.4375l-.7094 4.625H18.5v11.1806C26.1491 30.6053 32 23.9861 32 16Z" fill="#1877F2"></path> <path d="M22.2281 20.625 22.9375 16H18.5v-3.0014c0-1.2653.6198-2.4986 2.6074-2.4986h2.0176V6.5625S21.2939 6.25 19.5434 6.25c-3.6547 0-6.0434 2.215-6.0434 6.225V16H9.4375v4.625H13.5v11.1806c.8146.1278 1.6495.1944 2.5.1944s1.6854-.0666 2.5-.1944V20.625h3.7281Z" fill="#fff"></path></svg>
    </div></div>
    
    </div>
    
    <div className='flex-col lg:flex-row md-flex-col flex justify-between px-20 gap-5  items-center'>
<div className={`w-[370px] shadow-xl border-2  rounded-xl items-center justify-center flex flex-col py-6 px-7 ${darkMode ? 'bg-[#232B2B] border-[#232B2B]' : 'bg-[#fff] border-[#fff]'}`}>
        <p><img src='https://cdn.pixabay.com/photo/2023/12/22/19/56/hinduism-8464313_1280.jpg' className='w-[330px] rounded-xl '/> </p>
 <div className='flex-row flex justify-between w-[300px] items-center pt-5'>   <div className='flex-row flex gap-1 '> <div className='bg-[#f4f4f7] px-2 py-[0.5px] monteserrat rounded-2xl'><p>kitchen</p></div>   <div className='bg-[#f4f4f7] px-2 py-[0.5px] monteserrat rounded-2xl'><p>retail</p></div> 
    </div>
    <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-046612b9=""><path d="M32 16c0-8.83656-7.1634-16-16-16C7.16344 0 0 7.16344 0 16c0 7.9861 5.851 14.6053 13.5 15.8056V20.625H9.4375V16H13.5v-3.525c0-4.01 2.3887-6.225 6.0434-6.225 1.7506 0 3.5816.3125 3.5816.3125V10.5h-2.0176c-1.9875 0-2.6074 1.2333-2.6074 2.4986V16h4.4375l-.7094 4.625H18.5v11.1806C26.1491 30.6053 32 23.9861 32 16Z" fill="#1877F2"></path> <path d="M22.2281 20.625 22.9375 16H18.5v-3.0014c0-1.2653.6198-2.4986 2.6074-2.4986h2.0176V6.5625S21.2939 6.25 19.5434 6.25c-3.6547 0-6.0434 2.215-6.0434 6.225V16H9.4375v4.625H13.5v11.1806c.8146.1278 1.6495.1944 2.5.1944s1.6854-.0666 2.5-.1944V20.625h3.7281Z" fill="#fff"></path></svg>
    </div></div>
    

<div className={`w-[370px] shadow-xl border-2  rounded-xl items-center justify-center flex flex-col py-6 px-7 ${darkMode ? 'bg-[#232B2B] border-[#232B2B]' : 'bg-[#fff] border-[#fff]'}`}>
        <p><img src='https://cdn.pixabay.com/photo/2023/04/18/08/42/children-7934514_1280.jpg' className='w-[330px] rounded-xl '/> </p>
 <div className='flex-row flex justify-between w-[300px] items-center pt-5'>   <div className='flex-row flex gap-1 '> <div className='bg-[#f4f4f7] px-2 py-[0.5px] monteserrat rounded-2xl'><p>kids</p></div>   <div className='bg-[#f4f4f7] px-2 py-[0.5px] monteserrat rounded-2xl'><p>retail</p></div> 
    </div>
    <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-046612b9=""><path d="M32 16c0-8.83656-7.1634-16-16-16C7.16344 0 0 7.16344 0 16c0 7.9861 5.851 14.6053 13.5 15.8056V20.625H9.4375V16H13.5v-3.525c0-4.01 2.3887-6.225 6.0434-6.225 1.7506 0 3.5816.3125 3.5816.3125V10.5h-2.0176c-1.9875 0-2.6074 1.2333-2.6074 2.4986V16h4.4375l-.7094 4.625H18.5v11.1806C26.1491 30.6053 32 23.9861 32 16Z" fill="#1877F2"></path> <path d="M22.2281 20.625 22.9375 16H18.5v-3.0014c0-1.2653.6198-2.4986 2.6074-2.4986h2.0176V6.5625S21.2939 6.25 19.5434 6.25c-3.6547 0-6.0434 2.215-6.0434 6.225V16H9.4375v4.625H13.5v11.1806c.8146.1278 1.6495.1944 2.5.1944s1.6854-.0666 2.5-.1944V20.625h3.7281Z" fill="#fff"></path></svg>
    </div></div>
    

    <div className={`w-[370px] shadow-xl border-2  rounded-xl items-center justify-center flex flex-col py-6 px-7 ${darkMode ? 'bg-[#232B2B] border-[#232B2B]' : 'bg-[#fff] border-[#fff]'}`}>
        <p><img src='https://images.unsplash.com/photo-1712007426396-08068359b6c7?q=80&w=2747&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-[330px] rounded-xl '/> </p>
 <div className='flex-row flex justify-between w-[300px] items-center pt-5'>   <div className='flex-row flex gap-1 '> <div className='bg-[#f4f4f7] px-2 py-[0.5px] monteserrat rounded-2xl'><p>Ballet</p></div>   <div className='bg-[#f4f4f7] px-2 py-[0.5px] monteserrat rounded-2xl'><p>retail</p></div> 
    </div>
    <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-046612b9=""><path d="M32 16c0-8.83656-7.1634-16-16-16C7.16344 0 0 7.16344 0 16c0 7.9861 5.851 14.6053 13.5 15.8056V20.625H9.4375V16H13.5v-3.525c0-4.01 2.3887-6.225 6.0434-6.225 1.7506 0 3.5816.3125 3.5816.3125V10.5h-2.0176c-1.9875 0-2.6074 1.2333-2.6074 2.4986V16h4.4375l-.7094 4.625H18.5v11.1806C26.1491 30.6053 32 23.9861 32 16Z" fill="#1877F2"></path> <path d="M22.2281 20.625 22.9375 16H18.5v-3.0014c0-1.2653.6198-2.4986 2.6074-2.4986h2.0176V6.5625S21.2939 6.25 19.5434 6.25c-3.6547 0-6.0434 2.215-6.0434 6.225V16H9.4375v4.625H13.5v11.1806c.8146.1278 1.6495.1944 2.5.1944s1.6854-.0666 2.5-.1944V20.625h3.7281Z" fill="#fff"></path></svg>
    </div></div>
    
    </div>

    <div className='flex-col lg:flex-row md-flex-col flex justify-between px-20 gap-5  items-center'>
<div className={`w-[370px] shadow-xl border-2  rounded-xl items-center justify-center flex flex-col py-6 px-7 ${darkMode ? 'bg-[#232B2B] border-[#232B2B]' : 'bg-[#fff] border-[#fff]'}`}>
        <p><img src='https://images.unsplash.com/photo-1711211095357-076c9784660d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-[330px] rounded-xl '/> </p>
 <div className='flex-row flex justify-between w-[300px] items-center pt-5'>   <div className='flex-row flex gap-1 '> <div className='bg-[#f4f4f7] px-2 py-[0.5px] monteserrat rounded-2xl'><p>cars</p></div>   <div className='bg-[#f4f4f7] px-2 py-[0.5px] monteserrat rounded-2xl'><p>retail</p></div> 
    </div>
    <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-046612b9=""><path d="M32 16c0-8.83656-7.1634-16-16-16C7.16344 0 0 7.16344 0 16c0 7.9861 5.851 14.6053 13.5 15.8056V20.625H9.4375V16H13.5v-3.525c0-4.01 2.3887-6.225 6.0434-6.225 1.7506 0 3.5816.3125 3.5816.3125V10.5h-2.0176c-1.9875 0-2.6074 1.2333-2.6074 2.4986V16h4.4375l-.7094 4.625H18.5v11.1806C26.1491 30.6053 32 23.9861 32 16Z" fill="#1877F2"></path> <path d="M22.2281 20.625 22.9375 16H18.5v-3.0014c0-1.2653.6198-2.4986 2.6074-2.4986h2.0176V6.5625S21.2939 6.25 19.5434 6.25c-3.6547 0-6.0434 2.215-6.0434 6.225V16H9.4375v4.625H13.5v11.1806c.8146.1278 1.6495.1944 2.5.1944s1.6854-.0666 2.5-.1944V20.625h3.7281Z" fill="#fff"></path></svg>
    </div></div>
    

<div className={`w-[370px] shadow-xl border-2  rounded-xl items-center justify-center flex flex-col py-6 px-7 ${darkMode ? 'bg-[#232B2B] border-[#232B2B]' : 'bg-[#fff] border-[#fff]'}`}>
        <p><img src='https://images.unsplash.com/photo-1711954214835-a11994df1290?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-[330px] rounded-xl '/> </p>
 <div className='flex-row flex justify-between w-[300px] items-center pt-5'>   <div className='flex-row flex gap-1 '> <div className='bg-[#f4f4f7] px-2 py-[0.5px] monteserrat rounded-2xl'><p>fashion</p></div>   <div className='bg-[#f4f4f7] px-2 py-[0.5px] monteserrat rounded-2xl'><p>retail</p></div> 
    </div>
    <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-046612b9=""><path d="M32 16c0-8.83656-7.1634-16-16-16C7.16344 0 0 7.16344 0 16c0 7.9861 5.851 14.6053 13.5 15.8056V20.625H9.4375V16H13.5v-3.525c0-4.01 2.3887-6.225 6.0434-6.225 1.7506 0 3.5816.3125 3.5816.3125V10.5h-2.0176c-1.9875 0-2.6074 1.2333-2.6074 2.4986V16h4.4375l-.7094 4.625H18.5v11.1806C26.1491 30.6053 32 23.9861 32 16Z" fill="#1877F2"></path> <path d="M22.2281 20.625 22.9375 16H18.5v-3.0014c0-1.2653.6198-2.4986 2.6074-2.4986h2.0176V6.5625S21.2939 6.25 19.5434 6.25c-3.6547 0-6.0434 2.215-6.0434 6.225V16H9.4375v4.625H13.5v11.1806c.8146.1278 1.6495.1944 2.5.1944s1.6854-.0666 2.5-.1944V20.625h3.7281Z" fill="#fff"></path></svg>
    </div></div>
    

    <div className={`w-[370px] shadow-xl border-2  rounded-xl items-center justify-center flex flex-col py-6 px-7 ${darkMode ? 'bg-[#232B2B] border-[#232B2B]' : 'bg-[#fff] border-[#fff]'}`}>
        <p><img src='https://images.unsplash.com/photo-1712460842725-f1c9b3ad5a1e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-[330px] rounded-xl '/> </p>
 <div className='flex-row flex justify-between w-[300px] items-center pt-5'>   <div className='flex-row flex gap-1 '> <div className='bg-[#f4f4f7] px-2 py-[0.5px] monteserrat rounded-2xl'><p>fashion</p></div>   <div className='bg-[#f4f4f7] px-2 py-[0.5px] monteserrat rounded-2xl'><p>retail</p></div> 
    </div>
    <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-046612b9=""><path d="M32 16c0-8.83656-7.1634-16-16-16C7.16344 0 0 7.16344 0 16c0 7.9861 5.851 14.6053 13.5 15.8056V20.625H9.4375V16H13.5v-3.525c0-4.01 2.3887-6.225 6.0434-6.225 1.7506 0 3.5816.3125 3.5816.3125V10.5h-2.0176c-1.9875 0-2.6074 1.2333-2.6074 2.4986V16h4.4375l-.7094 4.625H18.5v11.1806C26.1491 30.6053 32 23.9861 32 16Z" fill="#1877F2"></path> <path d="M22.2281 20.625 22.9375 16H18.5v-3.0014c0-1.2653.6198-2.4986 2.6074-2.4986h2.0176V6.5625S21.2939 6.25 19.5434 6.25c-3.6547 0-6.0434 2.215-6.0434 6.225V16H9.4375v4.625H13.5v11.1806c.8146.1278 1.6495.1944 2.5.1944s1.6854-.0666 2.5-.1944V20.625h3.7281Z" fill="#fff"></path></svg>
    </div></div>
    
    </div>


    <div className='flex-col lg:flex-row md-flex-col flex justify-between px-20 gap-5  items-center'>
<div className={`w-[370px] shadow-xl border-2  rounded-xl items-center justify-center flex flex-col py-6 px-7 ${darkMode ? 'bg-[#232B2B] border-[#232B2B]' : 'bg-[#fff] border-[#fff]'}`}>
        <p><img src='https://images.unsplash.com/photo-1712086353403-54a24887e74f?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-[330px] rounded-xl '/> </p>
 <div className='flex-row flex justify-between w-[300px] items-center pt-5'>   <div className='flex-row flex gap-1 '> <div className='bg-[#f4f4f7] px-2 py-[0.5px] monteserrat rounded-2xl'><p>houses</p></div>   <div className='bg-[#f4f4f7] px-2 py-[0.5px] monteserrat rounded-2xl'><p>retail</p></div> 
    </div>
    <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-046612b9=""><path d="M32 16c0-8.83656-7.1634-16-16-16C7.16344 0 0 7.16344 0 16c0 7.9861 5.851 14.6053 13.5 15.8056V20.625H9.4375V16H13.5v-3.525c0-4.01 2.3887-6.225 6.0434-6.225 1.7506 0 3.5816.3125 3.5816.3125V10.5h-2.0176c-1.9875 0-2.6074 1.2333-2.6074 2.4986V16h4.4375l-.7094 4.625H18.5v11.1806C26.1491 30.6053 32 23.9861 32 16Z" fill="#1877F2"></path> <path d="M22.2281 20.625 22.9375 16H18.5v-3.0014c0-1.2653.6198-2.4986 2.6074-2.4986h2.0176V6.5625S21.2939 6.25 19.5434 6.25c-3.6547 0-6.0434 2.215-6.0434 6.225V16H9.4375v4.625H13.5v11.1806c.8146.1278 1.6495.1944 2.5.1944s1.6854-.0666 2.5-.1944V20.625h3.7281Z" fill="#fff"></path></svg>
    </div></div>
    

<div className={`w-[370px] shadow-xl border-2  rounded-xl items-center justify-center flex flex-col py-6 px-7 ${darkMode ? 'bg-[#232B2B] border-[#232B2B]' : 'bg-[#fff] border-[#fff]'}`}>
        <p><img src='https://images.unsplash.com/photo-1712431028580-049087ee59d8?q=80&w=2800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-[330px] rounded-xl '/> </p>
 <div className='flex-row flex justify-between w-[300px] items-center pt-5'>   <div className='flex-row flex gap-1 '> <div className='bg-[#f4f4f7] px-2 py-[0.5px] monteserrat rounded-2xl'><p>interior</p></div>   <div className='bg-[#f4f4f7] px-2 py-[0.5px] monteserrat rounded-2xl'><p>retail</p></div> 
    </div>
    <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-046612b9=""><path d="M32 16c0-8.83656-7.1634-16-16-16C7.16344 0 0 7.16344 0 16c0 7.9861 5.851 14.6053 13.5 15.8056V20.625H9.4375V16H13.5v-3.525c0-4.01 2.3887-6.225 6.0434-6.225 1.7506 0 3.5816.3125 3.5816.3125V10.5h-2.0176c-1.9875 0-2.6074 1.2333-2.6074 2.4986V16h4.4375l-.7094 4.625H18.5v11.1806C26.1491 30.6053 32 23.9861 32 16Z" fill="#1877F2"></path> <path d="M22.2281 20.625 22.9375 16H18.5v-3.0014c0-1.2653.6198-2.4986 2.6074-2.4986h2.0176V6.5625S21.2939 6.25 19.5434 6.25c-3.6547 0-6.0434 2.215-6.0434 6.225V16H9.4375v4.625H13.5v11.1806c.8146.1278 1.6495.1944 2.5.1944s1.6854-.0666 2.5-.1944V20.625h3.7281Z" fill="#fff"></path></svg>
    </div></div>
    

    <div className={`w-[370px] shadow-xl border-2  rounded-xl items-center justify-center flex flex-col py-6 px-7 ${darkMode ? 'bg-[#232B2B] border-[#232B2B]' : 'bg-[#fff] border-[#fff]'}`}>
        <p><img src='https://images.unsplash.com/photo-1712011465471-2be8d29c91bf?q=80&w=3026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-[330px] rounded-xl '/> </p>
 <div className='flex-row flex justify-between w-[300px] items-center pt-5'>   <div className='flex-row flex gap-1 '> <div className='bg-[#f4f4f7] px-2 py-[0.5px] monteserrat rounded-2xl'><p>art</p></div>   <div className='bg-[#f4f4f7] px-2 py-[0.5px] monteserrat rounded-2xl'><p>retail</p></div> 
    </div>
    <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-046612b9=""><path d="M32 16c0-8.83656-7.1634-16-16-16C7.16344 0 0 7.16344 0 16c0 7.9861 5.851 14.6053 13.5 15.8056V20.625H9.4375V16H13.5v-3.525c0-4.01 2.3887-6.225 6.0434-6.225 1.7506 0 3.5816.3125 3.5816.3125V10.5h-2.0176c-1.9875 0-2.6074 1.2333-2.6074 2.4986V16h4.4375l-.7094 4.625H18.5v11.1806C26.1491 30.6053 32 23.9861 32 16Z" fill="#1877F2"></path> <path d="M22.2281 20.625 22.9375 16H18.5v-3.0014c0-1.2653.6198-2.4986 2.6074-2.4986h2.0176V6.5625S21.2939 6.25 19.5434 6.25c-3.6547 0-6.0434 2.215-6.0434 6.225V16H9.4375v4.625H13.5v11.1806c.8146.1278 1.6495.1944 2.5.1944s1.6854-.0666 2.5-.1944V20.625h3.7281Z" fill="#fff"></path></svg>
    </div></div>
    
    </div>
    
    
    </div>
  )
}
