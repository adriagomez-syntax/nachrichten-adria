import { useEffect } from "react"

function useAutoRefresh(callback, intervalMs = 30000) {

	useEffect(() => {
		const interval = setInterval(() => callback(), intervalMs)
		return () => clearInterval(interval)
	}, [callback, intervalMs])
}

export default useAutoRefresh