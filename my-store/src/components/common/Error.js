export default function Error(props) {
    const { error, errorType } = props
    
    if (error.length === 0) return null
    return (
        <div>
            {errorType}: {error}
        </div>
    )
}