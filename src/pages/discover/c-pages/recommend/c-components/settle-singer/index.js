import React, { useEffect, memo } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getSettleSingers } from '../../store/actionCreator'
import { getSizeImage } from '@/utils/format-utils'

import LxbThemeHeaderSmall from '@/components/theme-header-small'
import { SetterSongerWrapper } from './style'

export default memo(function LxbSetteleSinger() {
    const dispatch = useDispatch()
    const state = useSelector((state) => ({
        settleSings: state.getIn(['recommend', 'settleSings'])
    }), shallowEqual)

    useEffect(() => {
        dispatch(getSettleSingers())
    }, [dispatch])

    return (
        <SetterSongerWrapper>
            <LxbThemeHeaderSmall
                title="入驻歌手"
                more="查看全部"
            />
            <div className="singer-list">
                {
                    state.settleSings.splice(0,5).map((item, index) => {
                        return (
                            <a 
                                href="/singer"
                                className="item"
                                key={ item.id }
                            >
                                <img
                                    src={ getSizeImage(item.img1v1Url, 62) }
                                    alt=""
                                />
                                <div className="info">
                                    <div className="title">{ item.alias.join("") || item.name }</div>
                                    <div className="name">{ item.name }</div>
                                </div>
                            </a>
                        )
                    })
                }
            </div>
            <div className="apply-for">
                <a href="/abc">申请成为网易音乐人</a>
            </div>
        </SetterSongerWrapper>
    )
})