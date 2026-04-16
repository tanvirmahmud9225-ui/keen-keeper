import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const DataContext = createContext();


const DataContextProvider = ({ children }) => {

    const [videos, setVideos] = useState([])
    const [texts, setTexts] = useState([])
    const [calls, setCalls] = useState([])
    const timeline = [...calls, ...texts, ...videos]



    const handleCalls = (currentCall) => {
        const isExitCall = calls.find(call => call.id === currentCall.id)
        if (isExitCall) {
            toast.error('already in timeline')
            return;
        }
        else {
            setCalls([...calls, currentCall])
            toast.success(`Call With ${currentCall.name}`)
        }
    }

    const handleText = (currentText) => {
        const isExitText = texts.find(text => text.id === currentText.id)
        if (isExitText) {
            toast.error('already in timeline')
            return
        }
        else {
            setTexts([...texts, currentText])
            toast.success(`Text With ${currentText.name}`)
        }
    }



    const handleVideos = (currentVideo) => {
        const isExitVideo = videos.find(video => video.id === currentVideo.id)
        if (isExitVideo) {
            toast.error('already in timeline')
            return
        }
        else {
            setVideos([...videos, currentVideo])
            toast.success(`Video With ${currentVideo.name}`)
        }
    }

    const date = new Date();
    const formateDate = date.toLocaleDateString("en-US", {
        month: "long",
        day: 'numeric',
        year: 'numeric'
    })

    const data = {
        calls,
        handleCalls,
        texts,
        handleText,
        videos,
        handleVideos,
        timeline,
        formateDate
    }

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContextProvider;