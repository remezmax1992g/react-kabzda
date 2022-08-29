import React, {useCallback, useMemo, useState} from "react"

export default {
    title: "Hooks demo/useCallback"
}


const SecretBooks = (props: {addBook: () => void }) => {
    console.log("SECRETBooks")
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
    </div>
}
const Books = React.memo(SecretBooks)
export const LikeUseCallback = () => {
    console.log("LikeUseCallback")
    const [count, setCount] = useState<number>(0)
    const [books, setBooks] = useState<Array<string>>(["React", "JS", "HTML", "CSS"])
    let memoizedAddBook = useMemo(() => {
        return () => {
            setBooks([...books, "Angular" + new Date().getTime()])}}, [books])
    let memoizedAddBook2 = useCallback(() => {
            setBooks([...books, "Angular" + new Date().getTime()])}, [books])
    return (
        <div>
            <button onClick={() => {
                setCount(count + 1)
            }}>+
            </button>
            {count}
            <Books addBook={memoizedAddBook2}/>
        </div>
    )
}