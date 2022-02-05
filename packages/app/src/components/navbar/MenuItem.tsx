import { Text, FlexBox } from "materials"
import { IconType } from "react-icons";
import { NAV_PADDING_HORIZONTAL } from "./constant";


interface MenuItemProps {
    Icon: IconType
    title: string
}
export const MenuItem = ({Icon, title}:MenuItemProps) => {
    const onClick = () => alert('준비 중입니다.');
    return (
        <FlexBox 
            alignItems="center" 
            paddingHorizontal={NAV_PADDING_HORIZONTAL} 
            paddingVertical={14}
            onClick={onClick}
        >
            <Icon color="#465365" size={18} />
            <Text type="P2" content={title} marginLeft={10} marginTop={2}  />
        </FlexBox>
    )

}