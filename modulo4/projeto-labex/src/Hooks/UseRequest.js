import axios from "axios";
import { useEffect, useState } from "react";

export default function useRequestData(url) {
  const [data, setData] = useState(undefined)
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
    setIsLoading(true)

    axios.get(url)
      .then(response => {
        setIsLoading(false)
        setData(response.data)
      })
      .catch(error => {
        setIsLoading(false)
        console.log(error.message)
    })
  }, [url])
  
  return [data, setData, isLoading]
}