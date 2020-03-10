import React from 'react';

interface InitialProps {
    text: string;
}

const ChildCompo: React.FC<InitialProps> = (props: InitialProps) => {
    const { text } = props;
    return <div>{text}</div>;
};

export default ChildCompo;
