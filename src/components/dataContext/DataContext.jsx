import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const DataContext = createContext();


const DataContextProvider = ({ children }) => {

    const [videos, setVideos] = useState([])
    const [texts, setTexts] = useState([])
    const [calls, setCalls] = useState([])



    const handleCalls = (currentCall) => {
        const isExitCall = calls.find(call => call.id === currentCall.id)
        const isExitText = texts.find(text => text.id === currentCall.id)
        const isExitVideo = videos.find(video => video.id === currentCall.id)
        if (isExitCall) {
            toast.error('already in timline')
            return;
        }
        else if (isExitText) {
            toast.error('already in timline')
            return;
        }
        else if (isExitVideo) {
            toast.error('already in timline')
            return;
        }
        else {
            setCalls([...calls, currentCall])
            toast.success(`${currentCall.name} is added timeline`)
        }
    }

    const handleText = (currentText) => {
        const isExitCall = calls.find(call => call.id === currentText.id)
        const isExitText = texts.find(text => text.id === currentText.id)
        const isExitVideo = videos.find(video => video.id === currentText.id)
        if (isExitText) {
            toast.error('already in timeline')
            return
        }
        else if (isExitCall) {
            toast.error('already in timline')
            return;
        }
        else if (isExitVideo) {
            toast.error('already in timline')
            return;
        }
        else {
            setTexts([...texts, currentText])
            toast.success(`${currentText.name} is added in timeline`)
        }
    }



    const handleVideos = (currentVideo) => {
        const isExitCall = calls.find(call => call.id === currentVideo.id)
        const isExitText = texts.find(text => text.id === currentVideo.id)
        const isExitVideo = videos.find(video => video.id === currentVideo.id)
        if (isExitVideo) {
            toast.error('already in timeline')
            return
        }
        else if (isExitCall) {
            toast.error('already in timline')
            return;
        }
        else if (isExitText) {
            toast.error('already in timline')
            return;
        }
        else {
            setVideos([...videos, currentVideo])
            toast.success(`${currentVideo.name} is added in timeline`)
        }
    }



    const data = {
        calls,
        handleCalls,
        texts,
        handleText,
        videos,
        handleVideos
    }

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContextProvider;