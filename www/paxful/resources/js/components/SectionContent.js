import React from 'react';
import {FaUserAlt, FaUserSecret} from 'react-icons/fa';

export default class SectionContent extends React.Component
{
    render() {
        const {comment} = this.props;

        return (
            <div className={"section-content"}>
                <div className={comment.reply ? '' : 'hide'}>
                    <FaUserAlt />
                </div>

                <div className={comment.reply ? 'section-content-comment-reply' : 'section-content-comment-not-reply'}>
                    {comment.comment}
                </div>

                <div className={comment.reply ? 'hide' : ''}>
                    <FaUserSecret />
                </div>
            </div>
        );
    }
}
