import React, {useImperativeHandle, forwardRef, useRef, useEffect} from 'react'

const Wheel = forwardRef(({sectors=[]}, ref) => {
  const dialRef = useRef()
  const sectorCount = sectors.length || 6

  useImperativeHandle(ref, () => ({
    spinToIndex(i, cb){
      const randomRounds = 6 + Math.floor(Math.random()*3)
      const degreePer = 360 / (sectorCount)
      const targetDeg = 360 * randomRounds - (i * degreePer) - degreePer/2
      dialRef.current.style.transition = 'transform 5s cubic-bezier(.17,.67,.34,1)'
      dialRef.current.style.transform = `rotate(${targetDeg}deg)`
      setTimeout(()=>{
        cb && cb()
      }, 5200)
    }
  }))

  useEffect(()=>{
    // reset transform when sectors change
    if (dialRef.current) {
      dialRef.current.style.transition = 'none'
      dialRef.current.style.transform = 'rotate(0deg)'
    }
  }, [sectorCount])

  return (
    <div className="wheel-wrap">
      <div className="pointer">▼</div>
      <div className="wheel" ref={dialRef}>
        {sectors.length ? sectors.map((s, idx) => {
          const deg = 360 / sectors.length
          return (
            <div key={idx} className="sector" style={{transform:`rotate(${idx*deg}deg) skewY(-${90 - deg}deg)`}}>
              <div className="label" style={{transform:`skewY(${90 - deg}deg) rotate(${deg/2}deg)`}}>
                {s.label}
              </div>
            </div>
          )
        }) : Array.from({length:6}).map((_,i)=>(
          <div key={i} className="sector" style={{transform:`rotate(${i*(360/6)}deg) skewY(-${90-(360/6)}deg)`}}>
            <div className="label" style={{transform:`skewY(${90-(360/6)}deg) rotate(${(360/6)/2}deg)`}}>Item {i+1}</div>
          </div>
        ))}
      </div>
    </div>
  )
})

export default Wheel
