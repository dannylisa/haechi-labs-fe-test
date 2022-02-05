import { StatusType } from "interfaces"
import { IconType } from "react-icons"
import { IoCheckmarkCircle, IoCloseCircle, IoWarning } from "react-icons/io5"
import { BiLoaderCircle, BiDotsHorizontalRounded } from "react-icons/bi"
import { MdOutlineGradient, MdOutlineHourglassFull } from "react-icons/md"
import styled from "styled-components"

export const Row = styled.tr`
    height: 42px;
    & .createdAt {
        width: 120px;
    }
    & .sendUser {
        width: 160px;
    }
    & .receiveUser {
        width: 300px;
    }
    & .balance {
        width: 124px;
    }
    & .txHash {
        width: 105px;
    }
    & .status {
        width: 240px;
    }
    border-bottom: rgb(234, 238, 241) 1px solid;
`

export const Cell = styled.th<{align?: "left" | "right" | "center"}>`
    vertical-align: middle;
    text-align: ${({align}) => align ?? "left"};
    display: table-cell;
    padding: 0 16px;

    & > span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`

const RED = "#F5405B";
// [Icon, color, name]
export const Statuses:{[key in StatusType]: [IconType, string, string]} = {
    REJECTED: [IoCloseCircle, RED, "거절뙴"],
    REQUESTED: [BiLoaderCircle,"#A1B1BE", "전송중"],
    FAILED: [IoWarning, RED, "전송 실패"],
    PENDING: [MdOutlineHourglassFull, "#737E91", "채굴 대기"],
    MINED: [MdOutlineGradient, "#FF622E", "채굴됨"],
    CONFIRMED: [IoCheckmarkCircle, "#05A67B", "완료"],
    REVERTED: [IoWarning, RED, "실패"],
    REPLACED: [IoCloseCircle, RED, "취소뙴"],
    PENDING_APPROVAL: [BiDotsHorizontalRounded, "#748089", "승인 대기"],
}