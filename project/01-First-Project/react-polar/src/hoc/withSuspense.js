import React from 'react';
import { Suspense } from 'react';


// Creating High Order Component
const suspensedComponent = (Component) => (props) => {
    return <Suspense fallback={<div>Loading...</div>}>
        <Component {...props} />
    </Suspense>
}


export default suspensedComponent;
