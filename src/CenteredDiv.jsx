import React from 'react';

const CenteredDiv = (props) => {
    const { children, style } = props;

    const styles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        ...style
    };

    return (
        <div style={styles} >
            {children}
        </div>
    );
};

export default CenteredDiv;