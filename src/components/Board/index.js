import { useEffect, useLayoutEffect, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { MENU } from "@/constants";
import { menuItemClick, actionItemClick } from "@/slice/menuSlice";
const Board = () => {
    const dispatch = useDispatch();
    const canvasRef = useRef(null);
    const shouldDraw = useRef(false);
    const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
    const {color, size} = useSelector((state) => state.toolbox[activeMenuItem]);
    const actionMenuItem = useSelector((state) => state.menu.actionMenuItem);


    useEffect(() =>{
        if (!canvasRef.current) return
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        
        if(actionMenuItem === MENU.DOWNLOAD) {
            const URL = canvas.toDataURL();
            const anchor = document.createElement('a');
            anchor.href = URL;
            anchor.download = 'sketch.png';
            anchor.click();
            console.log(URL);
        }
        dispatch(actionItemClick(null));
    },[actionMenuItem]);
    
    useEffect(() => {
        if (!canvasRef.current) return
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d')

        const changeConfig = () => {
            context.strokeStyle = color
            context.lineWidth = size
        }
        changeConfig()
    }, [color, size])


    // before browser pain
    useLayoutEffect(() => {
        if (!canvasRef.current) return
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d')

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        context.fillStyle = 'white';
        context.fillRect(0,0, canvas.width, canvas.height)
        const beginPath = (x, y) => {
            context.beginPath()
            context.moveTo(x, y)
        }

        const drawLine = (x, y) => {
            context.lineTo(x, y)
            context.stroke()
        }
        const handleMouseDown = (e) => {
            shouldDraw.current = true
            beginPath(e.clientX, e.clientY)
        }
        

        const handleMouseMove = (e) => {
            if (!shouldDraw.current) return
            drawLine(e.clientX, e.clientY)
        }

        const handleMouseUp = (e) => {
            shouldDraw.current = false
        }

        canvas.addEventListener('mousedown', handleMouseDown)
        canvas.addEventListener('mousemove', handleMouseMove)
        canvas.addEventListener('mouseup', handleMouseUp)
        
        return () => {
            canvas.removeEventListener('mousedown', handleMouseDown)
            canvas.removeEventListener('mousemove', handleMouseMove)
            canvas.removeEventListener('mouseup', handleMouseUp)
        }
    }, [])

    return (<canvas ref={canvasRef}></canvas>
    )
}
export default Board;