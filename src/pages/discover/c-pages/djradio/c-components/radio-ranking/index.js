import React, { useEffect, useState, memo } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import {
    getRadios
} from '../../store/actionCreator'

import LxbThemeHeaderNormal from '@/components/theme-header-normal'
import LxbRadioRankingCover from '@/components/radio-ranking-cover'
import LxbPagination from '@/components/pagination'

import {
    RankingWrapper
} from './style'

export default memo(function LxbRadioRanking() {
    const [ currentPage, setCurrentPage ] = useState(1)

    const { currentId, radios } = useSelector(state => ({
        currentId: state.getIn(['djradio','currentId']),
        radios: state.getIn(['djradio', 'radios'])
    }), shallowEqual)
    const dispatch = useDispatch()

    useEffect(() => {
        if (currentId === 0) return
        dispatch(getRadios(currentId, 0))
    },[dispatch, currentId])

    const onPageChange = (page, pageSize) => {
        setCurrentPage(page)
        dispatch(getRadios(currentId, page * 30))
    }

    return (
        <RankingWrapper>
            <LxbThemeHeaderNormal title='电台排行榜'/>
            <div className="ranking-list">
                {
                    radios.map((item,index) => {
                        return (<LxbRadioRankingCover key={item.id} radio={item}/>)
                    })
                }
            </div>
            <LxbPagination 
                currentPage={currentPage}
                total={1000}
                pageSize={30}
                onPageChange={onPageChange}
            />
        </RankingWrapper>
    )
})