import PageOne from "./main-page-component/PageOne.tsx";
import PageTwo from "./main-page-component/PageTwo.tsx";
import {useEffect, useRef, useState} from "react";
import {AnimatePresence} from "framer-motion";


const MainPage = () => {

    const pages = [
        <PageOne key={'1'}/>,
        <PageTwo key={'2'}/>,
        //TODO: Uncomment after PageThree is ready
        //<PageThree key={'3'}/>,
    ];

    const [pageIndex, setPageIndex] = useState(0);
    const [pendingIndex, setPendingIndex] = useState<number | null>(null);
    const isScrolling = useRef(false);

    useEffect(() => {

        const handleWheel = (e: WheelEvent) => {
            if (isScrolling.current || pendingIndex !== null) return;
            if (e.deltaY > 0 && pageIndex < pages.length - 1) {
                setPendingIndex(pageIndex + 1);
            } else if (e.deltaY < 0 && pageIndex > 0) {
                setPendingIndex(pageIndex - 1);
            }
        };

        window.addEventListener("wheel", handleWheel, { passive: false });
        return () => window.removeEventListener("wheel", handleWheel);
    }, [pageIndex, pendingIndex, pages.length]);


    const handleExitComplete = () => {
        if (pendingIndex !== null) {
            setPageIndex(pendingIndex);
            setPendingIndex(null);
            isScrolling.current = true;
            setTimeout(() => {
                isScrolling.current = false;
            }, 800);
        }
    };

    return (

        <AnimatePresence mode="wait" onExitComplete={handleExitComplete} >
            {pendingIndex === null && (
                pages[pageIndex]
            )}
        </AnimatePresence>

    );
};



export default MainPage;