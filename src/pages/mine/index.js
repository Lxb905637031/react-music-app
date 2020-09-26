import React, { memo } from 'react';
import { MineWrapper } from './style'

const LxbMine = memo(() => {
    return (
        <MineWrapper>
            <div className="content wrap-v2">
                <div className="pic">
                    <a href="/#" className="login">立即登录</a>
                </div>
            </div>
        </MineWrapper>
    );
});

export default LxbMine;