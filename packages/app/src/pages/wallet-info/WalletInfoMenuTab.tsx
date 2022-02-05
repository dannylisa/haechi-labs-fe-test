import { IconType } from "react-icons";
import styled from "styled-components";
import { Divider, FlexBox, Text } from 'materials'
import { VALID_SCREEN_CSS } from "./constants";

interface WalletInfoMenuTab {
    tabs: [IconType, string][]
    selected: number
    setSelected: (num:number) => void
}

const TabContainer = styled.div` 
    ${VALID_SCREEN_CSS}
`

const BLUE = "#195DEE";
const Tab = styled.div<{selected: boolean}>`
    display: inline-block;
    ${({selected}) => selected && `border-bottom: 2px solid ${BLUE};`}  
    padding: 7px 15px 5px 15px;  

`
export const WalletInfoMenuTab = ({tabs, selected, setSelected}:WalletInfoMenuTab) => {
    return (
        <TabContainer>
            <div>
            {tabs.map((([Icon, title], index) => {
                const isSelected = selected===index
                const onClick = () => setSelected(index)
                return (
                    <Tab selected={isSelected} key={"tab"+index} onClick={onClick}>
                        <FlexBox alignItems="flex-end">
                            <Icon size={20} color={isSelected ? BLUE : "#737291"}/>
                            <Text 
                                type="P1" 
                                content={title} 
                                marginLeft={7}
                                color={isSelected ? BLUE : "#737291"} 
                            />
                        </FlexBox>
                    </Tab>
                )
            }))}
            </div>
        </TabContainer>
    )
}