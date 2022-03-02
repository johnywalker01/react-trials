import React from 'react';
import { useParams } from "react-router-dom";
import { getTopic } from 'app/api/common';

type FcProps = {
    customProp?: any;
};

export const Topic: React.FC<FcProps> = ( props ) => {

    const { topicId } = useParams();

    const topic = getTopic( topicId );

    return (
        <div style={ { paddingLeft: "10px" } }>
            <h2>{ topic.name }</h2>
            <p>{ topic.desc }</p>
        </div>
    );
};

