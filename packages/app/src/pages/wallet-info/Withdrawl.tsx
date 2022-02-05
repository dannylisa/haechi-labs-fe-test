import { getWalletBalance } from "api/get-wallet-balance.api"
import { currentSelectedWalletState } from "atoms/current-selected-wallet.atom"
import { IBalance } from "interfaces"
import { boxCss, Divider, FlexBox, Hidable, Text, TextInput, Button } from "materials"
import { useEffect, useMemo, useState } from "react"
import { HiUpload } from "react-icons/hi"
import { IoCaretDown } from "react-icons/io5"
import { useRecoilValue } from "recoil"
import styled from "styled-components"
import { useInput, useValidateInput } from "utils/useInput"
import Decimal from 'decimal.js';
import { sendCoin } from "api/send-coin.api"
import { SelectModal } from "materials/SelectModal";

const Container = styled.div`
    ${boxCss}
    width: 560px;
    padding: 48px;
    display: flex;
    flex-direction: column;
`

const isNumber = (value: string) => !isNaN(+value)
const addresRegex = new RegExp("^(0x)?[0-9a-f]{40}$","i")

export const Withdrawl = () => {
    const wallet = useRecoilValue(currentSelectedWalletState);
    // 전체 코인
    const [balances, setBalances] = useState<IBalance[]>([])
    const balancesItems = useMemo(() => balances.map(b => 
        `${b.name} (${
            +`${Math.floor(+`${b.spendableAmount}e-${b.decimals-8}`)}e-8`
        } ${b.ticker})`
    ), [wallet?.id, balances.length])

    // 보낼 코인 종류 및 잔고
    const [targetBalance, setTargetBalance] = useState<IBalance | null>(null)
    const onSelectTargetBalance = (index: number) => setTargetBalance(balances[index])
    const [showSelectModal, setShowSelectModal] = useState<boolean>(false)
    const toggleModal = () => setShowSelectModal(p => !p)

    // 보낼 코인 수량
    const spendable = useMemo<Decimal>(() => {
        return targetBalance ?
        // 소수점 8째자리 버림
            new Decimal(
                (+`${Math.floor(+`${targetBalance.spendableAmount}e-${targetBalance.decimals-8}`)}e-8`)
            )
            :  new Decimal(0)
    },[targetBalance?.coinId])

    const [amount, onAmountChange, isAmountValid, setAmount] = useValidateInput("", isNumber, true)
    const [address, onAddressChange, isAddressValid,] = useValidateInput("", addresRegex.test.bind(addresRegex), false)
    const [passphrase, onPassphraseChange, setPassphrase] = useInput("")


    useEffect(() => {
        if(!wallet)
            return;

        getWalletBalance(wallet.id)
            .then(res => {
                setBalances([...res.data]);
                setTargetBalance(res.data[0])
            })   

    },[wallet?.id])


    // 중복 전송 방지
    const [isSending, setSending] = useState<boolean>(false);

    const ready:boolean = (
        +amount > 0 && 
        spendable.greaterThanOrEqualTo(+amount) && 
        !!address &&    // address valid 초기값은 true이므로
        isAddressValid && 
        !!passphrase &&
        !isSending      // 전송 후 바로 색깔 바뀌도록
    )

    const send = () => {
        if(!wallet || !targetBalance || isSending)
            return;
        
        setSending(true)

        sendCoin(wallet.id, address, +amount, passphrase)
            .then(() => {
                alert('코인 전송에 성공했습니다.')
                setAmount("")
                setPassphrase("")
            }).catch(e => {
                switch (e.response.data.code) {
                    case 5000:
                        alert('비밀번호가 잘못되었습니다.')
                        break;
                
                    default:
                        alert('코인 전송에 실패했습니다. 다시 시도해 주세요.')
                        break;
                }
            }).finally(() => {
                setSending(false)
            })
    }

    

    return (
        <FlexBox 
            flex={1} 
            justifyContent="center" 
        >
            <Container>
                <FlexBox alignItems="flex-end">
                    <HiUpload size={26} />
                    <Text type="H1" content="출금하기" marginLeft={10} />
                </FlexBox>
                <Text type="P2" content="받는 주소" marginTop={48} marginBottom={16} />
                <TextInput
                    value={address}
                    onChange={onAddressChange}
                    placeholder="ex) 0x9410becf2a712f18fe383f1c72e616b06d8bfacc"
                />

                {/* 주소 유효성 검사 */}
                <Hidable hide={isAddressValid}>
                    <Text 
                        marginTop={8}
                        type="D1" 
                        color="#f11" 
                        content="올바른 주소를 입력해주세요." 
                    />
                </Hidable>

                {/* 보낼 코인 선택 */}
                {targetBalance && (
                <>
                <Text type="P2" content="보낼 코인" marginTop={32} />

                {/* Coin Select With Modal */}
                <FlexBox style={{position: "relative"}} onClick={toggleModal}>
                    <FlexBox 
                        flex={1} 
                        css={boxCss} 
                        alignItems="center"
                        justifyContent="space-between"
                        paddingHorizontal={18} 
                        style={{height: 54}}
                        marginVertical={18}
                    >
                        <Text type="P2" content={targetBalance.name} />
                        <IoCaretDown size={12} />
                    </FlexBox>

                    <SelectModal
                        show={showSelectModal}
                        title="보유한 코인" 
                        items={balancesItems} 
                        onSelect={onSelectTargetBalance} 
                    />
                </FlexBox>
                

                <TextInput
                    placeholder="수량 입력"
                    value={amount}
                    onChange={onAmountChange}
                    Right={<Text type="P2" content={targetBalance.ticker} />}
                />
                

                
                {/* 코인 수량 유효성 검사 */}
                {isAmountValid ?                         
                    (<Text 
                        marginTop={8}
                        type="D1" 
                        color="#f11" 
                        content={spendable.lessThan(+amount) ? "잔액이 부족합니다." : ""} 
                    />)
                : 
                    (<Text 
                        marginTop={8}
                        type="D1" 
                        color="#f11" 
                        content="숫자를 입력해주세요." 
                    />)
                }


                {/* 출금 가능 잔액 */}
                <FlexBox 
                    css={boxCss} 
                    flexDirection="column" 
                    padding={20}
                    marginVertical={36}
                >

                    <FlexBox justifyContent="space-between">
                        <Text type="D1" content="출금 가능 잔액" />
                        <Text type="D1" content={`${spendable.toString()} ${targetBalance.ticker}`} />
                    </FlexBox>

                    <Divider marginVertical={16} />

                    <FlexBox justifyContent="space-between">
                        <Text type="D1" content="출금 수량" />
                        <Text 
                            type="D1" 
                            bold
                            color={spendable.lessThan(+amount) ? "red" : "#748089"}
                            content={`${+amount} ${targetBalance.ticker}`} 
                        />
                    </FlexBox>
                </FlexBox>

                {/* 비밀번호 입력 */}
                <FlexBox marginBottom={36}>
                    <TextInput
                        placeholder="지갑 비밀번호 입력"
                        type="password"
                        value={passphrase}
                        onChange={onPassphraseChange}
                    />
                </FlexBox>

                <Button disabled={!ready} onClick={send} >
                    출금하기
                </Button>
                </>
                )}

            </Container>
        </FlexBox>
    )
}