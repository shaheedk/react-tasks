import { useEffect } from "react"



function Test() {
    useEffect(()=>{
        console.log('running')
        return () => {
            console.log('Component unmounted');
          };
      },[])
      return <h1>Test component</h1>
}

export default Test
