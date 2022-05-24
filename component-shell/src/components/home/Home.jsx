import React, { useEffect, useState } from 'react'
import { getHomeData } from '../../../../authentication-shell/src/services/service'

export default function () {
    const [data, setData] = useState();
    useEffect(() => {
        getHomeData().then((res) => { setData(res.data) })
    }, [])

    return (
        <div>
            <h1>Home</h1>
            {data&&<h1>{data}</h1>}
        </div>
    )
}
