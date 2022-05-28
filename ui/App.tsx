import { useEffect, useState } from 'react'
import './app.less'
import classes from './test.module.less'

function App() {

    const [time, setTime] = useState(0)
    const [list, setList] = useState([
        {
            name: 'Google',
            account: 'test@example.com',
            secret: 'z2avs55csadlihky',
        },
    ])

    async function loadData() {
        const _list = window.getList()
        console.log('_list', _list)
        for (let item of _list) {
            // console.log('item.secret', item.secret)
            // item.code = getToken({ secret: item.secret, digits: 6, interval: 30 });
            // item.code = await totp.totp(item.secret)
            item.code = await window.getCode(item.secret)
        }
        setList(_list)
    }

    useEffect(() => {
        loadData()
    }, [])


    // console.log('json', JSON.stringify(list))

    async function updateCode() {
        for (let item of list) {
            // console.log('item.secret', item.secret)
            // item.code = getToken({ secret: item.secret, digits: 6, interval: 30 });
            // item.code = await totp.totp(item.secret)
            item.code = await window.getCode(item.secret)
        }
        setList([...list])
        setTime(30 - Math.floor((Date.now() / 1000) % 30))
    }

    useEffect(() => {
        // updateCode()

        const timer = setInterval(() => {
            updateCode()
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [list])

    // console.log('render/list', list)

    return (
        <div>
            <div className={classes.list}>
                {list.map((item, idx) => {
                    return (
                        <div className={classes.item}
                            key={idx}
                        >
                            <div className={classes.name}>{item.name}</div>
                            <div className={classes.account}>{item.account}</div>
                            <div className={classes.code}>{item.code}</div>

                            <button
                                onClick={() => {
                                    window.copy(item.code)
                                }}

                            >复制</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default App
