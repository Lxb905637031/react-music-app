import React, { memo } from 'react'

import { hotRadios } from '@/common/local-data'

import LxbThemeHeaderSmall from '@/components/theme-header-small'
import { HotRadioWrapper } from './style'

export default memo(function LxbHotRadio() {
    return (
        <HotRadioWrapper>
            <LxbThemeHeaderSmall title="热门主播" />
            <div className="radio-list">
                {
                    hotRadios.map((item, index) => {
                        return (
                            <div
                                className="item"
                                key={ item.picUrl }
                            >
                                <a href="/abc" className="image">
                                    <img src={ item.picUrl } alt=""/>
                                </a>
                                <div className="info">
                                    <div className="name">{ item.name }</div>
                                    <div className="position">{ item.position }</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </HotRadioWrapper>
    )
})