const data = [
    {
        id: "typescript",
        name: "Typescript",
        href: "typescript",
        desc: "Typescript is superset of Javascript Programming Language"
    },

    {
        id: "javascript",
        name: "Javascript",
        href: "javascript",
        desc: "Browser understands only Javascript"
    },

    {
        id: "java",
        name: "Java",
        href: "java",
        desc: "Java is powerful programming language widely used"
    },
]

export const getTopics = () => {
    return data;
}
export const getTopic = ( topicId: string ) => {
    if ( !topicId ) return data[ 0 ];

    return data.find( item => item.id == topicId );
}