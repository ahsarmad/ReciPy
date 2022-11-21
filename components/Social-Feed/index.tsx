import React from 'react';
import { View } from 'react-native';
import MainContainer from './MainContainer.tsx';

import {PostType} from '../../types'

export type PostProps = {
    post: PostType,
};

const Post = ({post}: PostProps) => (
    <View>
        <MainContainer post = {post} />
    </View>
)

export default Post;