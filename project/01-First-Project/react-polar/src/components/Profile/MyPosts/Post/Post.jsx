import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
            <div>
                <div className={s.posts}>
                    <img src='https://i.mycdn.me/image?id=838968512981&ts=00000000190000012c&plc=WEB&tkn=*HgeUJJ9phxm9HWqJX7D7VF1zf5Y&fn=sqr_288' />
                    {props.message}
                    </div>

            </div>
    );
}

export default Post;

