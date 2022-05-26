import { useState } from 'react'
import './app.less'

function App() {
    const [msg] = useState('React')

    return (
        <div>
            <div className="hello">Hello {msg}</div>
            {/* <div>
                <button
                    onClick={() => {
                        alert('hello')
                    }}
                >Send Message</button>
            </div> */}
        </div>
    )
}
export default App
