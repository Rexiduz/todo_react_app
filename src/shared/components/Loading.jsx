import { isEmptyObject } from "../../utils";

import React from 'react'
const Loading = () => {
    return <div className="col-12 d-flex justify-content-center">
        <div className="spinner-border  text-primary" role="status">
            <span className="sr-only">Loading...</span>
        </div>

    </div>
}
export default Loading;