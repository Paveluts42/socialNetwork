import React from "react"

export const withSuspense = (Component) => {
    return (props) => {
        return (
            <React.Suspense fallback={<h1>loading</h1>}>
                <Component{...props} />
            </React.Suspense>)
    };
}