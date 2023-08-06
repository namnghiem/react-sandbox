
import { useRef, useEffect } from 'react'
import styles from '../styles/Home.module.css'


function Render(props) {

    const canvasRef = useRef(null)
    const padding = 20;
    const draw = context => {
        const canvas = canvasRef.current


        const dpr = window.devicePixelRatio || 1;
        context.scale(dpr, dpr);
        canvas.width = canvas.offsetWidth * dpr;
        canvas.height = (canvas.offsetHeight + padding * 2) * dpr;
        context.setTransform(1, 0, 0, 1, 0, canvas.offsetHeight / 2 + padding);

        const normalizedData = [0.4,0.45,0.32,.38, 0.45, 0.88, 0.89, 0.4,0.2,0.3,0.0,.06, 0.4, 0.1, 0.4, 0.4 ,0.2,0.3,0.1,.06, 0.4, 0.1, 0.4, 0.4]
        const width = canvas.width / normalizedData.length +1;
        for (let i = 0; i < normalizedData.length; i++) {
          const x = width * i;
          let height = normalizedData[i] * canvas.offsetHeight - padding;
          if (height < 0) {
              height = 0;
          } else if (height > canvas.offsetHeight / 2) {
              height = height > canvas.offsetHeight / 2;
          }
          drawLineSegment(context, x-10, height, width, (i + 1) % 2);
          console.log( canvas.offsetHeight, height)

        }
    }

    const drawLineSegment = (ctx, x, y, width, isEven) => {
        ctx.lineWidth = 4; // how thick the line is
        ctx.strokeStyle = "#FFF"; // what color our line is
        ctx.beginPath();
        y = isEven ? y : -y;
        ctx.moveTo(x, 0);
        ctx.lineTo(x, y);
        ctx.arc(x + width / 2, y, width / 2, Math.PI, 0, isEven);
        ctx.lineTo(x + width, 0);
        ctx.stroke();
    };
  
    useEffect(() => {

        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        

        
    //Our draw come here
    draw(context)
    }, [draw])
    
    
    return (<div className={styles.canvas} style={{backgroundColor: props.background, height: props.height, width: props.width }}>
            <div className={styles.frame} style={{"height": "100%", "width":"100%", "border-style":"solid", "borderColor":"white", "borderWidth":"0.5rem" }}>
                    <div className={styles.canvasimage}>
                        <canvas className={styles.wave} ref={canvasRef} />
                    </div>
                    <div className={styles.canvastext}>

                        <span className={styles.title}>{props.title}</span>
                        <span className={styles.subtitle}>{props.subtitle}</span>

            </div>


        </div>
        
    </div>)
  }
  
  export default Render