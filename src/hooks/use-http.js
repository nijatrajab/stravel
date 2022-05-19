import {useCallback, useState} from "react"

const useHttpImage = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    const sendRequest = useCallback( async (requestConfig, applyData) => {
        setIsLoading(true)
        setError(null)
        try {
            const response = await fetch(
                requestConfig.url,  {
                    method: requestConfig.method ? requestConfig.method : 'GET',
                    headers: requestConfig.headers ? requestConfig.headers : {},
                    body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
                }
            )
            

            if (!response.ok) {
                throw new Error('Request failed!')
            }

            const imageBlob = await response.blob()
            const reader = new FileReader()
            reader.readAsDataURL(imageBlob)
            reader.onloadend = () => {
                const base64data = reader.result
                applyData(base64data)
            }
            
        } catch (err) {
            setError(err.message || 'Something went wrong!')
        }
        setIsLoading(false)
    }, [])

    return {
        isLoading: isLoading,
        hasError: error,
        sendRequest: sendRequest
    }

}

export default useHttpImage