import { useState, useEffect } from 'react'

interface Position {
    latitude: number | null
    longitude: number | null
    error: string | null
}

const usePosition = (): Position => {
    const [position, setPosition] = useState<Position>({
        latitude: null,
        longitude: null,
        error: null,
    })

    const onChange = ({ coords }: GeolocationPosition) => {
        setPosition({
            latitude: coords.latitude,
            longitude: coords.longitude,
            error: null,
        })
    }

    const onError = (error: GeolocationPositionError) => {
        setPosition({
            latitude: null,
            longitude: null,
            error: error.message,
        })
    }

    useEffect(() => {
        const geo = navigator.geolocation

        if (!geo) {
            setPosition({
                latitude: null,
                longitude: null,
                error: 'Geolocation is not supported',
            })
            return
        }

        const watcher = geo.watchPosition(onChange, onError)

        return () => geo.clearWatch(watcher)
    }, [])

    return position
}

export { usePosition }
