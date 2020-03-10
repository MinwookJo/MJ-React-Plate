import React from 'react';
import ChildCompo from './ChildCompo';

const Hello: React.FC = () => {
    return (
        <div>
            Hello React <ChildCompo text="123" />
        </div>
    );
};

export default Hello;
