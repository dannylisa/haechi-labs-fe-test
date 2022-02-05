import { Dispatch, SetStateAction, useState } from "react"

export const useInput = (initialValue:string): [
    string, 
    (e:React.ChangeEvent<HTMLInputElement>)=>void, 
    Dispatch<SetStateAction<string>>
]  => {
    const [input, setInput] = useState<string>(initialValue)
    const onChangeInput = ({target:{value}}: React.ChangeEvent<HTMLInputElement>) => {
        setInput(value);
    }
    return [input, onChangeInput, setInput];
}

export const useValidateInput = (
    // 초기값
    initialValue:string, 

    // 검증 함수
    tester: (text: string)=> boolean,
    
    // strict = true이면 검증 오류 시 입력 불가
    strict: boolean
): [
    string, 
    (e:React.ChangeEvent<HTMLInputElement>)=>void, 
    boolean, 
    Dispatch<SetStateAction<string>>
] => {
    const [input, setInput] = useState<string>(initialValue)
    const [isValid, setValid] = useState<boolean>(true)
    const onChangeInput = ({target:{value}}: React.ChangeEvent<HTMLInputElement>) => {
        if(tester(value)){
            setInput(value);
            setValid(true);
        }
        else {
            if(!strict) 
                setInput(value);
            setValid(false)
        }
    }
    return [input, onChangeInput, isValid, setInput];
}