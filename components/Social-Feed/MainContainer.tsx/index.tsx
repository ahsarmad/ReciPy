import React from 'react';
import { View, Text, Image } from 'react-native';
import { PostType } from '../../../types';



export type MainContainerProps = {
    post: PostType
}; 

const MainContainer = ({post}: MainContainerProps) => (
    <View>
        <View>
            <Text>{post.user.name}</Text>
            <Text>{post.user.username}</Text>
            <Text>{post.createdAt}</Text>
        </View>
        <View>
            <Text>
                {post.content}
            </Text>
            {!!post.image && <Image source ={{uri: post.image}} />}
        </View>

    </View>
)

export default MainContainer;