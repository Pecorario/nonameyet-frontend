import React from 'react'


const Heart = (props) => {
    if (!Object.keys(props).includes('type')) {
        throw new Error("Please specify the type that icon component must render");
    }
    switch (props.type) {
        case 'add' :
            return (
                <i class="fas fa-plus-square fa-4x"></i>
            ) 

        case 'close' :
            return (
                <i class="fas fa-times-circle fa-1x"></i>
            )

        case 'next' :
            return (
                <i class="fas fa-chevron-circle-right fa-1x"></i>
            )

        case 'todo':
            return(
                <i class="fas fa-th-list fa-1x"></i>
            )

        case 'doing':
            return(
                <i class="fas fa-clock fa-1x"></i>
            )

        case 'done':
            return(
                <i class="fas fa-check-square fa-1x"></i>
            )

        case 'git':
            return(
                <i class="fab fa-github fa-2x"></i>
            )

        default:
            throw new Error("This type does not contains in css type list");
            
    }
}

export default Heart;